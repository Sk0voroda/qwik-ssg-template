import{M as T,i as q,K as U,P as j,l as u,r as w,k as S,a as b,_ as I,N,c as F}from"./q-c409971d.js";const Q='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',ot=u("qc-s"),rt=u("qc-c"),at=u("qc-ic"),H=u("qc-h"),M=u("qc-l"),J=u("qc-n"),it=u("qc-a"),ct=`(function(){
  const l=location,c=l.pathname+l.search,t="_qCityPopstateFallback",o="_qCityHistory";window[t]||(window[t]=()=>{window[o]||c===(l.pathname+l.search)||l.reload()},setTimeout(()=>{addEventListener("popstate",window[t])},0))
})();
`,ft=S(b(()=>I(()=>import("./q-4a680e05.js"),["build/q-4a680e05.js","build/q-c409971d.js"]),"s_e0ssiDXoeAM")),D=new WeakMap,y=new Map,K="qaction",p=t=>t.pathname+t.search+t.hash,g=(t,e)=>new URL(t,e.href),A=(t,e)=>t.origin===e.origin,x=(t,e)=>t.pathname+t.search===e.pathname+e.search,V=(t,e)=>t.pathname===e.pathname,P=(t,e)=>A(t,e)&&!x(t,e),B=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+K+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},lt=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=g(s,e.url),o=g("",e.url);if(A(n,o))return p(n)}catch(n){console.error(n)}else if(t.reload)return p(g("",e.url));return null},ht=(t,e,s)=>{if(t.prefetch===!0&&e){const n=g(e,s.url);if(!V(n,g("",s.url)))return""}return null},dt=(t,e,s)=>{const n=t.location;P(n,e)&&(k(t,n,e),t.history.pushState("","",p(e))),t._qCityHistory||(t._qCityHistory=1,t.addEventListener("popstate",()=>{const o=t.location,r=g(s.value,o);P(o,r)&&(k(t,r,o),s.value=p(new URL(o.href)))}),t.removeEventListener("popstate",t._qCityPopstateFallback))},k=async(t,e,s)=>{const n=t.document,o=s.hash;if(x(e,s))e.hash!==o&&(await v(),o?E(n,o):t.scrollTo(0,0));else if(o)for(let r=0;r<24&&(await v(),!E(n,o));r++);else await v(),t.scrollTo(0,0)},v=()=>new Promise(t=>setTimeout(t,12)),E=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},Y=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},ut=(t,e,s,n)=>{const o=z(),a={head:o,withLocale:i=>w(n,i),resolveValue:i=>{const c=i.__id;if(i.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const f=t.loaders[c];if(f instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return f},...e};for(let i=s.length-1;i>=0;i--){const c=s[i]&&s[i].head;c&&(typeof c=="function"?L(o,w(n,()=>c(a))):typeof c=="object"&&L(o,c))}return a.head},L=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),C(t.meta,e.meta),C(t.links,e.links),C(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},C=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},z=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),gt=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const r=o[0].exec(n);if(r){const a=o[1],i=Z(o[2],r),c=o[4],f=new Array(a.length),l=[],m=X(e,n);let h;return a.forEach((d,W)=>{R(d,l,O=>f[W]=O,s)}),R(m,l,d=>h=d==null?void 0:d.default,s),l.length>0&&await Promise.all(l),[i,f,h,c]}}return null},R=(t,e,s,n)=>{if(typeof t=="function"){const o=D.get(t);if(o)s(o);else{const r=t();typeof r.then=="function"?e.push(r.then(a=>{n!==!1&&D.set(t,a),s(a)})):r&&s(r)}}},X=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},Z=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++){const o=(e==null?void 0:e[n+1])??"",r=o.endsWith("/")?o.slice(0,-1):o;s[t[n]]=decodeURIComponent(r)}return s},G=async(t,e,s,n)=>{const o=t.pathname,r=t.search,a=B(o,r,n);let i;if(n||(i=y.get(a)),Y({links:[o]}),!i){const c=$(n);n&&(n.data=void 0),i=fetch(a,c).then(f=>{const l=new URL(f.url);if(l.origin!==location.origin||!tt(l.pathname)){location.href=l.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(m=>{const h=T(m,e);if(!h){location.href=t.href;return}if(s&&y.delete(a),h.redirect)location.href=h.redirect;else if(n){const d=h.loaders[n.id];n.resolve({status:f.status,result:d})}return h});location.href=t.href}),n||y.set(a,i)}return i.then(c=>(c||y.delete(a),c))},$=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},tt=t=>t.endsWith(et),et="/q-data.json",yt=()=>q(H),pt=()=>q(M),mt=()=>q(J),vt=()=>U(j("qwikcity")),Ct=S(b(()=>I(()=>import("./q-9cadf0a4.js"),["build/q-9cadf0a4.js","build/q-c409971d.js"]),"s_TxCFOy819ag")),_t=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(_||(_=innerWidth),(!e||e&&_<520)&&G(new URL(t.href),t))};let _=0;const qt=t=>N("script",{nonce:F(t,"nonce")},{dangerouslySetInnerHTML:Q},null,3,"1Z_0"),wt=()=>{let t="";const e=new TextDecoder;return new TransformStream({transform(n,o){const r=e.decode(n).split(`

`);for(let a=0;a<r.length-1;a++){const i=t+r[a];if(i.length===0){o.terminate();break}else o.enqueue(nt(i)),t=""}t+=r[r.length-1]}})},nt=t=>{const e=t.split(`
`),s={data:""};let n="";for(const o of e)if(o.startsWith("data: "))n+=o.slice(6)+`
`;else{const[r,a]=o.split(":");typeof r=="string"&&typeof a=="string"&&(s[r]=a.trim())}return s.data=n,s};async function*Dt(t,e){const s=t.getReader();try{for(;;){const{done:n,value:o}=await s.read();if(n)return;yield await T(o.data,e)}}finally{s.releaseLock()}}export{rt as C,H as D,Ct as Q,M as R,qt as S,pt as a,ht as b,z as c,at as d,J as e,ot as f,lt as g,gt as h,y as i,dt as j,vt as k,G as l,it as m,yt as n,ct as o,_t as p,ft as q,ut as r,wt as s,p as t,mt as u,Dt as v};
