import fs from 'node:fs';import path from 'node:path';import {ROOT,build} from './build.mjs';
build();const destination=process.argv[2];if(!destination)throw new Error('Usage: node scripts/export.mjs /path/to/niti.html');
let html=fs.readFileSync(path.join(ROOT,'dist/index.html'),'utf8');const css=fs.readFileSync(path.join(ROOT,'dist/style.css'),'utf8');
html=html.replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+css+'</style>');
const js=fs.readFileSync(path.join(ROOT,'dist/data.js'),'utf8')+'\n'+fs.readFileSync(path.join(ROOT,'dist/app.js'),'utf8');
html=html.replace('<script src="data.js"></script><script src="app.js"></script>',()=>'<script>'+js.replace(/<\/script/gi,'<\\/script')+'</script>');
fs.mkdirSync(path.dirname(path.resolve(destination)),{recursive:true});fs.writeFileSync(destination,html);console.log(path.resolve(destination));
