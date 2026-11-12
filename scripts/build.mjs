import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const FOLDERS={events:'event',people:'person',organizations:'organization',sources:'source',relations:'relation',topics:'topic'};
const fail=(file,message)=>{throw new Error(`${file}: ${message}`);};
export function parseMarkdown(text,file='record.md'){
 const m=text.replace(/^\uFEFF/,'').replace(/\r\n/g,'\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
 if(!m)fail(file,'ожидается frontmatter между строками ---');
 const meta={};for(const line of m[1].split('\n')){if(!line.trim())continue;const p=line.match(/^([a-z_]+): (.+)$/);if(!p)fail(file,'метаданные: key: JSON-значение, одна строка на поле');if(Object.hasOwn(meta,p[1]))fail(file,`повтор поля ${p[1]}`);try{meta[p[1]]=JSON.parse(p[2]);}catch{fail(file,`неверное JSON-значение ${p[1]}`);}}
 if(meta.schema!=='niti/v1')fail(file,'неподдерживаемая версия schema');
 if(!/^[a-z][a-z0-9-]*$/.test(meta.id||''))fail(file,'некорректный id');
 const sections={};let section=null;for(const line of m[2].split('\n')){const h=line.match(/^## (.+)$/);if(h){if(Object.hasOwn(sections,h[1]))fail(file,`повтор раздела ${h[1]}`);section=h[1];sections[section]='';}else if(section)sections[section]+=line+'\n';}
 for(const key in sections)sections[key]=sections[key].trim();return {...meta,body:m[2].trim(),sections,file};
}
export function loadContent(contentRoot=path.join(ROOT,'content')){
 const db={};for(const [folder,kind] of Object.entries(FOLDERS)){db[folder]=new Map;for(const name of fs.readdirSync(path.join(contentRoot,folder)).filter(n=>n.endsWith('.md')).sort()){const file=path.join(folder,name),r=parseMarkdown(fs.readFileSync(path.join(contentRoot,file),'utf8'),file);if(r.kind!==kind)fail(file,`ожидается kind ${kind}`);if(name!==r.id+'.md')fail(file,'имя файла должно совпадать с id');if(db[folder].has(r.id))fail(file,'дубликат id');db[folder].set(r.id,r);}}
 validate(db);return db;
}
export function validate(db){
 const str=(r,key)=>{if(typeof r[key]!=='string'||!r[key].trim())fail(r.file,`обязательное текстовое поле ${key}`);};
 const refs=(r,key,target,min=0)=>{if(!Array.isArray(r[key])||r[key].length<min)fail(r.file,`поле ${key}: массив, минимум ${min}`);if(new Set(r[key]).size!==r[key].length)fail(r.file,`повтор в ${key}`);for(const id of r[key])if(!db[target].has(id))fail(r.file,`неизвестная ссылка ${target}/${id}`);};
 const status=r=>{if(!['draft','reviewed'].includes(r.status))fail(r.file,'status: draft | reviewed');};
 const dateValue=(v,precision)=>{if(typeof v!=='string')return false;const re={year:/^\d{4}$/,month:/^\d{4}-\d{2}$/,day:/^\d{4}-\d{2}-\d{2}$/}[precision];if(!re?.test(v)||+v.slice(0,4)<1)return false;const full=v+(precision==='year'?'-01-01':precision==='month'?'-01':'');const d=new Date(full+'T00:00:00Z');return Number.isFinite(+d)&&d.toISOString().startsWith(full);};
 for(const [folder,records] of Object.entries(db))for(const r of records.values()){
  if(folder!=='relations')str(r,'title');
  if(folder==='sources'){str(r,'url');let url;try{url=new URL(r.url);}catch{fail(r.file,'некорректный URL');}if(!['https:','http:'].includes(url.protocol))fail(r.file,'источник должен иметь http(s) URL');if(!['primary','institutional','secondary'].includes(r.source_type))fail(r.file,'неверный source_type');}
  if(folder==='topics'&&!/^#[0-9a-fA-F]{6}$/.test(r.color))fail(r.file,'color: #RRGGBB');
  if(folder==='people'||folder==='organizations'){if(!Array.isArray(r.aliases)||r.aliases.some(x=>typeof x!=='string'))fail(r.file,'aliases: массив строк');}
  if(folder==='events'){
   const d=r.date;if(!d||!dateValue(d.start,d.precision)||(d.end!==null&&!dateValue(d.end,d.precision)))fail(r.file,'некорректная дата или точность');if(d.end!==null&&d.end<d.start)fail(r.file,'конец даты раньше начала');if(!['event','publication','version','approximate'].includes(d.basis))fail(r.file,'неверное основание даты');
   refs(r,'topics','topics',1);refs(r,'people','people');refs(r,'organizations','organizations');refs(r,'sources','sources',1);status(r);
   for(const heading of ['Кратко','Задача','Значение'])if(!r.sections[heading])fail(r.file,`нужен раздел ## ${heading}`);
  }
  if(folder==='relations'){
   for(const key of ['from','to'])if(!db.events.has(r[key]))fail(r.file,`неизвестное событие ${key}: ${r[key]}`);
   if(r.from===r.to)fail(r.file,'связь с самим собой');if(!['tech','idea','people'].includes(r.type))fail(r.file,'неверный type');if(!['supported','interpretation','disputed'].includes(r.certainty))fail(r.file,'неверный certainty');status(r);
   if(!Array.isArray(r.evidence)||!r.evidence.length)fail(r.file,'нужно evidence со ссылкой на источник');for(const e of r.evidence){if(!db.sources.has(e.source))fail(r.file,`неизвестный источник ${e.source}`);if(e.locator!==null&&(typeof e.locator!=='string'||!e.locator.trim()))fail(r.file,'locator: непустая строка или null');}
   if(!r.sections['Основание'])fail(r.file,'нужен раздел ## Основание');
   if(r.status==='reviewed'&&r.evidence.some(e=>!e.locator))fail(r.file,'для reviewed нужен locator каждого источника');
  }
 }
 const seen=new Set;for(const r of db.relations.values()){const key=[r.from,r.to,r.type].join('/');if(seen.has(key))fail(r.file,'дублирующая связь');seen.add(key);}
}
export function compile(db){
 const object=(folder,fn)=>Object.fromEntries([...db[folder]].map(([id,r])=>[id,fn(r)]));
 const SOURCES=object('sources',r=>[r.title,r.url]);const TOPICS=object('topics',r=>({name:r.title,color:r.color}));
 const ENTITIES={people:object('people',r=>({id:r.id,title:r.title,aliases:r.aliases,body:r.body})),orgs:object('organizations',r=>({id:r.id,title:r.title,aliases:r.aliases,body:r.body}))};
 const EVENTS=[...db.events.values()].sort((a,b)=>a.date.start.localeCompare(b.date.start)||a.id.localeCompare(b.id)).map(r=>({id:r.id,title:r.title,date:r.date,year:+r.date.start.slice(0,4),topic:r.topics[0],topics:r.topics,people:r.people,orgs:r.organizations,status:r.status,sources:r.sources,text:r.sections['Кратко'],problem:r.sections['Задача'],meaning:r.sections['Значение'],note:r.sections['Примечание']||'',more:r.sections['Подробнее']||''}));
 const LINKS=[...db.relations.values()].map(r=>({id:r.id,from:r.from,to:r.to,type:r.type,certainty:r.certainty,status:r.status,text:r.sections['Основание'],evidence:r.evidence}));
 return {SOURCES,TOPICS,ENTITIES,EVENTS,LINKS};
}
export function build(){const data=compile(loadContent());fs.writeFileSync(path.join(ROOT,'dist/data.js'),'// Generated from content/**/*.md. Do not edit.\n'+Object.entries(data).map(([k,v])=>`const ${k}=${JSON.stringify(v,null,2)};`).join('\n')+'\n');fs.writeFileSync(path.join(ROOT,'dist/knowledge.json'),JSON.stringify({schema:'niti/export-v1',...data},null,2)+'\n');console.log(`Validated and built: ${data.EVENTS.length} events, ${data.LINKS.length} relations.`);return data;}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))try{build();}catch(e){console.error(e.message);process.exitCode=1;}
