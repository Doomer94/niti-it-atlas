import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from './build.mjs';
const root=path.join(ROOT,'dist');
http.createServer((req,res)=>{let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end();}const file=path.resolve(root,'.'+(url==='/'?'/index.html':url));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8'})[path.extname(file)]||'application/octet-stream'});res.end(error?'Not found':data);});}).listen(4174,'127.0.0.1',()=>console.log('http://127.0.0.1:4174'));
