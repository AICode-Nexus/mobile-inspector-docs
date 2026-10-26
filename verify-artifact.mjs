// Standalone static-distribution verifier. Built-in Node modules only.
import { lstatSync, readdirSync, readFileSync, realpathSync } from 'node:fs';
import { resolve, join, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const BASE='/mobile-inspector-docs/', SITE='https://aicode-nexus.github.io/mobile-inspector-docs/';
const PAGE_IDS=JSON.parse(String.raw`["index","guide/quickstart","guide/installation","guide/compatibility","guide/capture-model","guide/connection-lan","guide/connection-usb","guide/privacy","sdk/javascript","sdk/h5","sdk/wechat","sdk/ios","sdk/android","sdk/harmonyos","integrations/codex","reference/cli","reference/mcp","reference/configuration","reference/diagnosis","reference/incidents","reference/events","troubleshooting/index","tutorials/first-capture","tutorials/diagnosis"]`);
const GUIDE_MANIFEST=JSON.parse(String.raw`{"schemaVersion":1,"id":"mobile-inspector-usage-guide","remotionVersion":"4.0.538","entry":"guide-fccc15beaef8.js","mountExport":"mountUsageGuide","locales":["zh","en"],"durationInFrames":2250,"fps":30,"width":1920,"height":1080,"sourceHash":"bf2df990ed5ccae3e4c6f35e52207416b1a0c2b95ff0c8a27d82b377efaa3794","files":[{"path":"guide-fccc15beaef8.js","sha256":"fccc15beaef8df6b4a0a8f3dd3ab7bf8f4e0a4aac9d232117d5c63dc5b5f9216","bytes":612703},{"path":"THIRD_PARTY_NOTICES.txt","sha256":"d439fbc25267d75e9b9c3aabf926b9ce003959f5c94eed9a63bc07838831c296","bytes":12318}]}`);
const SUPPORT_HASHES=JSON.parse(String.raw`{"README.md":"42f5be7f69288a94ab6642937e2680b5dda049eaf6c75492555c1412fa89c37f","THIRD_PARTY_NOTICES.txt":"9dd6d506782b20705619b342b58c7ef1fccc35c4b57efe6c6b9ade3115d880f5",".github/workflows/pages.yml":"ad3e5d626e68ebc977a39ef177761aa0620189a405765717f7444419f0b978bb"}`);
const sha=b=>createHash('sha256').update(b).digest('hex');
function validPath(p) {return typeof p==='string'&&p.length<240&&!p.includes('\\')&&!p.includes('%')&&!p.includes('\0')&&!p.startsWith('/')&&p.split('/').every(s=>/^[A-Za-z0-9_@.-]+$/.test(s)&&s!=='.'&&s!=='..');}
function walk(root,dir=root) {
  return readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name,'en')).flatMap(e=>{
    // Only the independent distribution checkout's actual root .git directory is excluded.
    const p=join(dir,e.name),s=lstatSync(p);if(s.isSymbolicLink())throw Error('Symlink forbidden');
    if(dir===root&&e.name==='.git') {if(!s.isDirectory())throw Error('Expected independent .git directory');return [];}
    const name=relative(root,p).replaceAll('\\','/');if(!validPath(name)||name.split('/').some(part=>part.startsWith('.')&&part!=='.github'))throw Error(`Unsafe path ${name}`);
    if(s.isDirectory()) {if(!readdirSync(p).length)throw Error(`Unexpected empty directory ${name}`);return walk(root,p);}
    if(!s.isFile()||s.nlink!==1)throw Error(`Nonregular/hardlinked file ${name}`);return [name];
  });
}
function privateText(body,name) {
  if([/(?:\/Users\/|\/private\/(?:var|tmp)\/|\/var\/folders\/|\/Volumes\/|\/home\/(?!PATH)|[A-Z]:\\Users\\)/i,/(?:\.\.\/)+(?:verification|superpowers)|docs\/(?:verification|superpowers)/i,/maas-api|spark-x2\.6|xf-yun\.com|6f03060|9fb8122/i,/-----BEGIN [A-Z ]*PRIVATE KEY-----/,/(?:sk-[A-Za-z0-9]{16,}|github_pat_|ghp_[A-Za-z0-9]{20,})/,/file:\/\/(?=[^\s"'`\)\]};,])/i].some(re=>re.test(body)))throw Error(`Private content ${name}`);
}
export function verifyArtifact(directory,{preview=false}={}) {
  if(lstatSync(directory).isSymbolicLink())throw Error('Symlink root forbidden');
  const root=realpathSync(directory),manifestBytes=readFileSync(join(root,'artifact-manifest.json'));
  if(manifestBytes.length>512*1024)throw Error('Oversized manifest');
  const m=JSON.parse(manifestBytes),fields=['schemaVersion','site','base','version','sourceCommit','release','build','files'];
  if(Object.keys(m).sort().join()!==fields.sort().join()||m.schemaVersion!==1||m.site!==SITE||m.base!==BASE||m.version!=='0.1.0'||!/^([a-f0-9]{40})$/.test(m.sourceCommit)||typeof m.release!=='boolean'||(!preview&&!m.release))throw Error('Invalid release/base/version/source manifest');
  const build=m.build;
  if(!build||Object.keys(build).sort().join()!==['schemaVersion','version','sourceCommit','dirty','mode','inputHash','contentHash'].sort().join()||build.schemaVersion!==1||build.version!==m.version||build.sourceCommit!==m.sourceCommit||typeof build.dirty!=='boolean'||m.release===build.dirty||build.mode!==(build.dirty?'dirty-preview':'clean-source')||!(/^[a-f0-9]{64}$/.test(build.inputHash)&&/^[a-f0-9]{64}$/.test(build.contentHash)))throw Error('Invalid build/release provenance');
  if(!Array.isArray(m.files)||m.files.length>1000)throw Error('Invalid inventory');
  const names=m.files.map(f=>f.path);
  if(names.some(p=>!validPath(p)||p==='artifact-manifest.json')||new Set(names).size!==names.length||names.join('\n')!==[...names].sort().join('\n'))throw Error('Noncanonical manifest paths');
  const actual=walk(root).filter(p=>p!=='artifact-manifest.json').sort();
  if(JSON.stringify(actual)!==JSON.stringify(names))throw Error('Unknown or missing payload files');
  const supports=['.github/workflows/pages.yml','README.md','THIRD_PARTY_NOTICES.txt','verify-artifact.mjs'];
  if(names.filter(p=>!p.startsWith('site/')).join('\n')!==supports.sort().join('\n'))throw Error('Unexpected support inventory');
  const routes=['index.html','404.html',...PAGE_IDS.flatMap(id=>['en','zh'].map(l=>`${l}/${id}.html`))], mirrors=['markdown/index.md',...PAGE_IDS.flatMap(id=>['en','zh'].map(l=>`markdown/${l}/${id}.md`))];
  const guideFiles=['usage-guide/manifest.json',...GUIDE_MANIFEST.files.map(f=>'usage-guide/'+f.path)].sort();
  const guideManifest=JSON.parse(readFileSync(join(root,'site/usage-guide/manifest.json')));
  if(JSON.stringify(guideManifest)!==JSON.stringify(GUIDE_MANIFEST))throw Error('Unreviewed guide contract/source/runtime/licenses');
  if(names.filter(p=>p.startsWith('site/usage-guide/')).map(p=>p.slice(5)).sort().join()!==guideFiles.join())throw Error('Unexpected guide asset inventory');
  for(const file of GUIDE_MANIFEST.files){const b=readFileSync(join(root,'site/usage-guide',file.path));if(b.length!==file.bytes||sha(b)!==file.sha256)throw Error('Guide hash/license mismatch');}
  const siteNames=new Set(names.filter(p=>p.startsWith('site/')).map(p=>p.slice(5)));let bytes=0;
  for(const route of routes)if(!siteNames.has(route))throw Error(`Missing route ${route}`);
  for(const f of m.files) {
    if(Object.keys(f).sort().join()!==['path','bytes','sha256'].sort().join()||!Number.isSafeInteger(f.bytes)||f.bytes<0||f.bytes>4*1024*1024||!/^[a-f0-9]{64}$/.test(f.sha256))throw Error('Invalid file record');
    const b=readFileSync(join(root,f.path));bytes+=b.length;if(b.length!==f.bytes||sha(b)!==f.sha256)throw Error(`Hash/size mismatch ${f.path}`);
    if(SUPPORT_HASHES[f.path]&&sha(b)!==SUPPORT_HASHES[f.path])throw Error(`Unreviewed support file ${f.path}`);
    if(!f.path.startsWith('site/'))continue;
    const name=f.path.slice(5);
    if(!/\.(?:html|js|css|svg|png|webp|ico|woff2?|txt|md|json|jsonl|xml)$/.test(name)||name.split('/').some(p=>['node_modules','captures','profiles','.git','.env','reports','superpowers'].includes(p)))throw Error(`Forbidden site extension/path ${name}`);
    if(name.startsWith('usage-guide/')&&!guideFiles.includes(name))throw Error('Unreviewed guide asset');
    if(name.endsWith('.html')&&!routes.includes(name)||name.endsWith('.md')&&!mirrors.includes(name)||name.endsWith('.json')&&!['hashmap.json','build-info.json','usage-guide/manifest.json'].includes(name)||name.endsWith('.jsonl')&&name!=='samples/synthetic-capture.jsonl'||name.endsWith('.txt')&&!['llms.txt','third-party-notices.txt','usage-guide/THIRD_PARTY_NOTICES.txt'].includes(name))throw Error(`Unexpected site inventory ${name}`);
    if(!/\.(png|webp|ico|woff2?)$/.test(name)) {
      const body=b.toString('utf8');privateText(body,name);
      if(/\.(js|html)$/.test(name)&&/(?:new\s+(?:WebSocket|EventSource)|(?:fetch|sendBeacon)\s*\(\s*["'`]https?:|(?:https?:|wss?:)\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?\/(?:api|v1)\/)/.test(body))throw Error(`Unexpected network execution ${name}`);
      if(name.endsWith('.html')) {
        if(/<(?:script|img|iframe)[^>]+src=["'](?:https?:)?\/\//i.test(body))throw Error('Remote runtime asset');
        for(const match of body.matchAll(/(?:src|href)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
          if(!match[1].startsWith(BASE))throw Error('Wrong HTML base');let target=decodeURIComponent(match[1].slice(BASE.length));if(!target||target.endsWith('/'))target+='index.html';if(!siteNames.has(target)&&!siteNames.has(target+'.html'))throw Error(`Missing asset ${target}`);
        }
      }
      if(name.endsWith('.js'))for(const match of body.matchAll(/(?:\bfrom\s*|\bimport\s*\(?\s*)["'](\.{1,2}\/[^"']+)["']/g))if(!siteNames.has(posix.normalize(posix.join(posix.dirname(name),match[1]))))throw Error('Missing module asset');
    }
  }
  if(bytes>35*1024*1024)throw Error('Unbounded payload');
  if(JSON.stringify(JSON.parse(readFileSync(join(root,'site/build-info.json'))))!==JSON.stringify(build))throw Error('Build/manifest provenance mismatch');
  if(sha(readFileSync(join(root,'THIRD_PARTY_NOTICES.txt')))!==sha(readFileSync(join(root,'site/third-party-notices.txt'))))throw Error('Notice mismatch');
  return {files:m.files.length+1,bytes:bytes+manifestBytes.length,sourceCommit:m.sourceCommit,release:m.release,manifestSha256:sha(manifestBytes)};
}
if(process.argv[1]&&realpathSync(resolve(process.argv[1]))===fileURLToPath(import.meta.url)) {
  try {if(process.argv.slice(2).some(a=>a!=='--preview'))throw Error('Only --preview is supported');console.log(JSON.stringify(verifyArtifact(import.meta.dirname,{preview:process.argv.includes('--preview')}),null,2));}
  catch(e){console.error(e.message);process.exitCode=1;}
}
