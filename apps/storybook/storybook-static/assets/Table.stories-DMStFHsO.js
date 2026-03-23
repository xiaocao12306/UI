import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as bo}from"./Button-CYa37MZO.js";import{r as m}from"./index-BWu4c2F4.js";import{B as go}from"./Badge-ZJmMstsz.js";import{within as y,expect as a,userEvent as p,fireEvent as v,waitFor as M}from"./index-DgAF9SIF.js";import{S as w,s as T,a as J}from"./storyShowcase-DlKirntE.js";const Ga="Enter Space",vo=`${Ga} Home End PageDown PageUp ArrowLeft ArrowRight`,ho="ArrowLeft ArrowRight Home End PageDown PageUp",xo=48,fo=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Bt=400;function Rt(e,t,n,r){if(!n)return null;const b=e.findIndex(I=>String(I.key)===n&&I.sortable);return b<0?null:{key:n,direction:r,renderKey:t[b]??`${n}__index-${b}`}}function kt(e,t,n){if(typeof e.sortLabel=="string"&&e.sortLabel.trim().length>0)return e.sortLabel.trim();const r=Ye(st(e.header));return r.length>0?r:t}function Tt(e,t){const n=Ye(e.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:t>=0?`Column ${t+1}`:"Column"}function d({columns:e,data:t,rowKey:n,minTableWidth:r,caption:b,ariaLabel:I,ariaLabelledBy:k,loading:N=!1,loadingContent:j="Loading data...",emptyContent:D="No data available.",defaultSortKey:O,defaultSortDirection:it="asc",getSortAriaLabel:Za=Ht,getSortStatusText:ct=So,onSortKeyDown:Je,onSortChange:Ze}){const lt=Ge(b),Qa=Ge(j),Xa=Ge(D),eo=Qa?j:"Loading data...",to=Xa?D:"No data available.",F=Do(N,!1),Qe=To(it,"asc"),Z=se(k),ut=Z?void 0:se(I,lt?void 0:"Data table"),no=ko(r),$=m.useRef({}),Xe=m.useRef(null),et=m.useRef(null),Q=m.useRef(0),q=m.useRef(null),X=m.useRef(null),z=m.useRef(!0);m.useRef(null),m.useRef(null),m.useRef(null);const[ao,tt]=m.useState(null),[oo,W]=m.useState(null),[ro,V]=m.useState(null),[so,nt]=m.useState(!1);m.useEffect(()=>{var c;const s=((c=Xe.current)==null?void 0:c.ownerDocument)??document,l=g=>{g.metaKey||g.altKey||g.ctrlKey||(z.current=!0)},u=g=>{"button"in g&&!rt(g.button)||"ctrlKey"in g&&g.ctrlKey||(z.current=!1)};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",u,!0),s.addEventListener("mousedown",u,!0),s.addEventListener("touchstart",u,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",u,!0),s.removeEventListener("mousedown",u,!0),s.removeEventListener("touchstart",u,!0)}},[]);const ee=m.useCallback(()=>{et.current=null,Q.current=0,q.current!==null&&((X.current??window).clearTimeout(q.current),q.current=null),X.current=null},[]);m.useEffect(()=>()=>{ee()},[ee]);const E=m.useMemo(()=>{const s=new Map;return e.map(l=>{const u=String(l.key),c=s.get(u)??0;return s.set(u,c+1),c===0?u:`${u}__duplicate-${c}`})},[e]),io=m.useMemo(()=>e.map(s=>Ho(s.width)),[e]),[x,te]=m.useState(()=>Rt(e,E,O,Qe)),P=m.useMemo(()=>F||t.length<=1?[]:e.reduce((s,l,u)=>(l.sortable&&s.push(E[u]??`${String(l.key)}__index-${u}`),s),[]),[e,t.length,E,F]);m.useEffect(()=>{var c;if(!x)return;const s=E.findIndex(g=>g===x.renderKey);if(s>=0&&((c=e[s])!=null&&c.sortable))return;const l=e.findIndex(g=>g.sortable&&String(g.key)===x.key);if(l<0){te(null);return}const u=E[l]??`${x.key}__index-${l}`;u!==x.renderKey&&te(g=>g&&{...g,renderKey:u})},[e,E,x]),m.useEffect(()=>{if(x)return;const s=Rt(e,E,O,Qe);s&&te(s)},[e,O,E,Qe,x]);const at=m.useMemo(()=>t.map((s,l)=>String(n?n(s,l):l)),[t,n]),co=m.useMemo(()=>{const s=new Map;return at.map((l,u)=>{const c=s.get(l)??0;return s.set(l,c+1),c===0?l:`${l}__dup-${u}`})},[at]);m.useEffect(()=>{},[n,at]),m.useEffect(()=>{},[e]),m.useEffect(()=>{},[e]);const _=m.useMemo(()=>{const s=t.map((f,B)=>({row:f,sourceIndex:B}));if(!x)return s;const l=E.findIndex(f=>f===x.renderKey),u=l>=0?l:e.findIndex(f=>String(f.key)===x.key),c=u>=0?e[u]:void 0;if(!(c!=null&&c.sortable))return s;const g=c.sortAccessor??(f=>{const B=f[String(c.key)];return B instanceof Date||typeof B=="number"||typeof B=="string"?B:String(B??"")});return s.sort((f,B)=>{const C=g(f.row),H=g(B.row);if(typeof C=="string"&&typeof H=="string"){const G=fo.compare(C,H);return G!==0?x.direction==="asc"?G:-G:f.sourceIndex-B.sourceIndex}const L=C instanceof Date?C.getTime():C,ne=H instanceof Date?H.getTime():H;return L<ne?x.direction==="asc"?-1:1:L>ne?x.direction==="asc"?1:-1:f.sourceIndex-B.sourceIndex})},[e,t,E,x]),lo=typeof document>"u"?void 0:document,dt=m.useMemo(()=>{if(F||_.length<=1||!x)return"";const s=E.findIndex(g=>g===x.renderKey),l=s>=0?s:e.findIndex(g=>String(g.key)===x.key),u=l>=0?e[l]:void 0;if(!(u!=null&&u.sortable))return"";const c=kt(u,Tt(x.key,l));return ct({columnKey:x.key,columnHeader:c,direction:x.direction})},[e,ct,lo,E,F,x,_.length]),Y=!F&&_.length>1&&e.some(s=>s.sortable),U=!Y&&so,mt=Math.max(e.length,1);return m.useEffect(()=>{Y||(tt(null),W(null),V(null))},[Y]),m.useEffect(()=>{if(Y){nt(!1);return}const s=Xe.current;if(!s){nt(!1);return}const l=s.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!l)return;const u=()=>{const g=s.scrollWidth-s.clientWidth>0;nt(f=>f===g?f:g)};u(),l.addEventListener("resize",u);let c=null;return typeof l.ResizeObserver=="function"&&(c=new l.ResizeObserver(u),c.observe(s)),()=>{l.removeEventListener("resize",u),c==null||c.disconnect()}},[e.length,t.length,Y,F]),o.jsxs("div",{ref:Xe,"data-aurora-table-scroll-container":"",role:U?"region":void 0,tabIndex:U?0:void 0,"aria-label":U?Z?void 0:ut??"Data table scroll container":void 0,"aria-labelledby":U?Z:void 0,"aria-keyshortcuts":U?ho:void 0,onKeyDown:s=>{if(!U||s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey||s.target!==s.currentTarget)return;const l=s.currentTarget,u=Math.max(0,l.scrollWidth-l.clientWidth);if(u<=0)return;const c=l.clientWidth,g=Math.max(xo,Math.floor(c*.3)),f=Et(l),B=f==="rtl"?"ArrowLeft":"ArrowRight",C=L=>{L!==0&&(s.preventDefault(),Eo(l,L))},H=L=>{s.preventDefault(),Co(l,L)};switch(s.key){case"ArrowLeft":case"ArrowRight":C(s.key===B?g:-g);return;case"PageDown":C(c);return;case"PageUp":C(-c);return;case"Home":H(f==="rtl"?u:0);return;case"End":H(f==="rtl"?0:u);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[dt?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:dt}):null,o.jsxs("table",{"aria-label":ut,"aria-labelledby":Z,"aria-busy":F||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:no},children:[lt?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:b}):null,o.jsx("thead",{children:o.jsx("tr",{children:e.map((s,l)=>{const u=String(s.key),c=E[l]??`${u}__index-${l}`,g=!!s.sortable,f=_.length>1,B=g&&(x==null?void 0:x.key)===u?x.direction:void 0,C=B&&(x==null?void 0:x.renderKey)===c?B:void 0,H=!F&&f?C:void 0,L=H?H==="asc"?"ascending":"descending":void 0,ne=s.align??"left",G=kt(s,Tt(u,l)),ae=B==="asc"?"desc":"asc",uo=Za({columnKey:u,columnHeader:G,nextDirection:ae}),yt=se(s.sortLabelledBy),mo=yt?void 0:se(uo,Ht({columnHeader:G,nextDirection:ae})),K=F||!f,yo=K?void 0:P.length>1?vo:Ga,pt=!K&&ao===c,wt=!K&&oo===c,bt=!K&&ro===c,po=pt||bt,gt=()=>{K||(te({key:u,direction:ae,renderKey:c}),Ze==null||Ze(u,ae))};return o.jsx("th",{scope:"col","aria-sort":L,style:{textAlign:ne,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:io[l]},children:g?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:i=>{$.current[c]=i},"aria-labelledby":yt,"aria-label":mo,"aria-keyshortcuts":yo,disabled:K,onClick:i=>{const R=Date.now()-Q.current,oe=i.detail===0&&et.current===c&&Q.current>0&&R<=Bt;ee(),!oe&&gt()},onMouseEnter:()=>{K||tt(c)},onMouseLeave:()=>{tt(i=>i===c?null:i),W(i=>i===c?null:i)},onPointerDown:i=>{K||i.ctrlKey||rt(i.button)&&(z.current=!1,V(R=>R===c?null:R),W(c))},onPointerUp:i=>{rt(i.button)&&W(R=>R===c?null:R)},onMouseDown:i=>{K||i.button!==0||i.ctrlKey||(z.current=!1,V(R=>R===c?null:R),W(c))},onMouseUp:i=>{i.button===0&&W(R=>R===c?null:R)},onPointerCancel:()=>{W(i=>i===c?null:i)},onFocus:()=>{if(K){V(i=>i===c?null:i);return}V(i=>Ro($.current[c],z.current)?c:i===c?null:i)},onBlur:()=>{V(i=>i===c?null:i),W(i=>i===c?null:i)},onKeyDown:i=>{var oe,vt,ht,xt;if(z.current=!0,Je==null||Je(i),i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey)return;if(i.key==="Home"){const A=P[0];if(!A)return;i.preventDefault(),(oe=$.current[A])==null||oe.focus();return}if(i.key==="End"){const A=P[P.length-1];if(!A)return;i.preventDefault(),(vt=$.current[A])==null||vt.focus();return}if(i.key==="PageDown"||i.key==="PageUp"){const A=P.indexOf(c);if(A<0)return;const ft=i.key==="PageDown"?1:-1,re=Math.max(0,Math.min(P.length-1,A+ft));if(re===A)return;i.preventDefault();const ot=P[re];(ht=$.current[ot])==null||ht.focus();return}if(i.key==="ArrowLeft"||i.key==="ArrowRight"){const A=P.indexOf(c);if(A<0)return;const re=Et(i.currentTarget)==="rtl"?"ArrowLeft":"ArrowRight",ot=i.key===re?1:-1,St=Math.max(0,Math.min(P.length-1,A+ot));if(St===A)return;i.preventDefault();const wo=P[St];(xt=$.current[wo])==null||xt.focus();return}if(!Dt(i.key)||Bo(i)||(i.preventDefault(),i.repeat))return;W(c),et.current=c,Q.current=Date.now();const R=i.currentTarget.ownerDocument.defaultView??window;q.current!==null&&(X.current??R).clearTimeout(q.current),X.current=R,q.current=R.setTimeout(()=>{ee()},Bt),gt()},onKeyUp:i=>{i.altKey||i.ctrlKey||i.metaKey||Dt(i.key)&&W(R=>R===c?null:R)},style:{border:po?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:wt?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":pt?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:K?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:K?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:bt?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:wt?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,o.jsx("span",{"aria-hidden":"true",children:H==="asc"?"▲":H==="desc"?"▼":"↕"})]}):s.header},c)})})}),o.jsx("tbody",{children:F?o.jsx("tr",{children:o.jsx("td",{colSpan:mt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:eo})})}):_.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:mt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:to})})}):_.map((s,l)=>{const u=s.row,c=String(s.sourceIndex),g=co[s.sourceIndex]??c;return o.jsx("tr",{style:{background:l%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map((f,B)=>{const C=f.render?f.render(u,l,s.sourceIndex):String(u[String(f.key)]??""),H=E[B]??`${String(f.key)}__index-${B}`,L={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:f.align??"left"};return f.rowHeader?o.jsx("th",{scope:"row",style:{...L,fontWeight:"var(--aurora-font-weight-medium)"},children:C},H):o.jsx("td",{style:L,children:C},H)})},g)})})]})]})}function Ht({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function So({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function Dt(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Bo(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function rt(e){return typeof e!="number"||e<=0}function Ro(e,t){if(!e)return t;try{return e.matches(":focus-visible")||t}catch{return t}}function Et(e){var b;const n=(e.ownerDocument.defaultView??window).getComputedStyle(e).direction;return n==="rtl"||n==="ltr"?n:((b=e.closest("[dir]"))==null?void 0:b.getAttribute("dir"))==="rtl"?"rtl":"ltr"}function ko(e){if(typeof e=="number")return Number.isFinite(e)&&e>0?e:560;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}return 560}function To(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="asc"||n==="desc")return n}return t}function Ho(e){if(typeof e=="number")return Number.isFinite(e)&&e>=0?e:void 0;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}}function Do(e,t){return typeof e!="boolean"?t:e}function Ge(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Ge(t)):m.isValidElement(e)}function st(e){if(typeof e=="string")return e;if(typeof e=="number")return String(e);if(Array.isArray(e))return Ye(e.map(n=>st(n)).filter(n=>n.length>0).join(" "));if(!m.isValidElement(e))return"";const t=e.props;if(t["aria-hidden"]===!0||t["aria-hidden"]==="true")return"";if(typeof t["aria-label"]=="string"){const n=Ye(t["aria-label"]);if(n.length>0)return n}return st(t.children)}function Ye(e){return e.replace(/\s+/g," ").trim()}function se(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function Eo(e,t){if(typeof e.scrollBy=="function"){e.scrollBy({left:t,behavior:"auto"});return}e.scrollLeft+=t}function Co(e,t){if(typeof e.scrollTo=="function"){e.scrollTo({left:t,behavior:"auto"});return}e.scrollLeft=t}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  sortLabel?: string;
  sortLabelledBy?: string;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"sortLabel",value:{name:"string",required:!1}},{key:"sortLabelledBy",value:{name:"string",required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},minTableWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  columnKey: string;
  columnHeader: string;
  nextDirection: TableSortDirection;
}) => string`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnKey: string;
  columnHeader: string;
  nextDirection: TableSortDirection;
}`,signature:{properties:[{key:"columnKey",value:{name:"string",required:!0}},{key:"columnHeader",value:{name:"string",required:!0}},{key:"nextDirection",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}},name:"params"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetSortAriaLabel({
  columnHeader,
  nextDirection
}: {
  columnKey: string;
  columnHeader: string;
  nextDirection: TableSortDirection;
}) {
  return \`\${columnHeader} sort \${nextDirection === "asc" ? "ascending" : "descending"}\`;
}`,computed:!1}},getSortStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}) => string`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}`,signature:{properties:[{key:"columnKey",value:{name:"string",required:!0}},{key:"columnHeader",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}},name:"params"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetSortStatusText({
  columnHeader,
  direction
}: {
  columnKey: string;
  columnHeader: string;
  direction: TableSortDirection;
}) {
  return \`Sorted by \${columnHeader} \${direction === "asc" ? "ascending" : "descending"}.\`;
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const h=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return o.jsx(go,{tone:t,children:e.status})}}];function Ct(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function At(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function Ao(){const[e,t]=m.useState(!1);return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>t(n=>!n),children:"Toggle loading"}),o.jsx(d,{columns:S,data:h,loading:e,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const qo={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},ie={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(d,{caption:"Release readiness board",columns:S,data:h,rowKey:e=>e.id,defaultSortKey:"id"})})},ce={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(d,{caption:"Release readiness board",columns:S,data:h,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},le={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Runtime sort-direction config from CMS/JSON should normalize mixed-case tokens before sorting."}),o.jsx(d,{caption:"Runtime sort direction normalization",columns:S,data:h,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:" DESC "})]}),play:async({canvasElement:e})=>{const n=y(e).getByRole("table",{name:"Runtime sort direction normalization"}),r=y(n).getByRole("columnheader",{name:/Issue/});await a(r).toHaveAttribute("aria-sort","descending"),await a(y(n).getAllByRole("rowheader")[0]).toHaveTextContent("DLG-210"),await a(y(n).getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ue={render:()=>{const e=[...S,{key:"action",header:"Action",width:160,render:t=>o.jsx(bo,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return o.jsx(d,{columns:e,data:h,rowKey:t=>t.id})}},de={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Issue sort ascending"});await a(t.getByText("No release items yet.")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},me={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},ye={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:h,defaultSortKey:"id",rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(t.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},pe={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:T,children:"When sortable controls are unavailable and horizontal overflow exists, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:h}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=y(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:k=>{b=k}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:k=0})=>{b+=Number(k)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:k=0})=>{b=Number(k)||0}}),v(r,new r.Event("resize")),await M(()=>{a(n).toHaveAttribute("role","region"),a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await p.tab(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const I=k=>k.preventDefault();n.addEventListener("keydown",I,!0),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",I,!0),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},we={render:()=>o.jsxs(w,{maxWidth:"760px",gap:10,children:[o.jsx("p",{style:T,children:"Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:h}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=y(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex"),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await p.tab(),await a(t.getByRole("button",{name:"Before table"})).toHaveFocus(),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},be={render:()=>o.jsxs(w,{maxWidth:"360px",gap:10,children:[o.jsxs("p",{style:T,children:["Use ",o.jsx("code",{children:"minTableWidth"})," to keep compact layouts readable without forcing overflow."]}),o.jsx(d,{minTableWidth:320,columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:h})]}),play:async({canvasElement:e})=>{const n=y(e).getByRole("table",{name:"Data table"}),r=e.querySelector("[data-aurora-table-scroll-container]");await a(n).toHaveStyle({minWidth:"320px"}),await a(r).not.toHaveAttribute("role"),await a(r).not.toHaveAttribute("tabindex"),await a(r).not.toHaveAttribute("aria-keyshortcuts")}},ge={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:T,children:"In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual direction."}),o.jsx("div",{dir:"rtl",children:o.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:h})})]}),play:async({canvasElement:e})=>{const t=y(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull();const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:k=>{b=k}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:k=0})=>{b+=Number(k)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:k=0})=>{b=Number(k)||0}}),v(r,new r.Event("resize")),await M(()=>{a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),n.focus(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(420),v.keyDown(n,{key:"End"}),await a(n.scrollLeft).toBe(0);const I=k=>k.preventDefault();n.addEventListener("keydown",I,!0),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",I,!0),await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ve={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(d,{columns:S,data:h,defaultSortKey:"id"})]}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),r.focus(),await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},he={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(d,{columns:S,data:h,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Status sort ascending"}),r=t.getByRole("button",{name:"After table"});v.mouseDown(n),n.focus(),await p.click(r),await p.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},xe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:h,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(t.getByText("Syncing release feed...")).toBeInTheDocument(),await a(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(b).not.toHaveAttribute("aria-sort")}},fe={render:()=>{const[e,t]=m.useState("none");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Runtime bool-like config from CMS/JSON should degrade safely: invalid `loading` values fall back to `false`."}),o.jsxs("p",{style:T,children:["Sort trace:"," ",o.jsx("strong",{"data-testid":"table-runtime-boolean-sort-trace",style:J,children:e})]}),o.jsx(d,{columns:S,data:h,defaultSortKey:"id",loading:"invalid-loading-flag",loadingContent:"Should stay hidden",onSortChange:(n,r)=>t(`${n} ${r}`)})]})},play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("columnheader",{name:/Issue/}),b=t.getByRole("button",{name:"Issue sort descending"});await a(n).not.toHaveAttribute("aria-busy"),await a(t.queryByText("Should stay hidden")).not.toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"BTN-102"})).toBeInTheDocument(),await a(r).toHaveAttribute("aria-sort","ascending"),await a(b).toBeEnabled(),await p.click(b),await a(r).toHaveAttribute("aria-sort","descending"),await a(t.getByTestId("table-runtime-boolean-sort-trace")).toHaveTextContent("id desc")}},Se={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:h,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("status")).toHaveTextContent("Loading data...")}},Be={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:[],emptyContent:"   "})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("status")).toHaveTextContent("No data available.")}},Re={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(d,{columns:S,data:h,loading:!0,loadingContent:0}),o.jsx(d,{columns:S,data:[],emptyContent:0})]}),play:async({canvasElement:e})=>{const n=y(e).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},ke={render:()=>o.jsx(Ao,{}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Toggle loading"}),r=t.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),await p.click(n);const b=t.getByRole("button",{name:"Issue sort descending"});await a(b).toBeDisabled(),await a(b.style.transform).toContain("translateY(0"),await a(b.style.boxShadow).toBe("none")}},Te={render:function(){const[t,n]=m.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:T,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:t})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(d,{columns:S,data:h,defaultSortKey:"id",onSortChange:(r,b)=>n(`${r} ${b}`)})]})},play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByTestId("primary-pointer-sort-state");await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(b).toHaveTextContent("id asc"),v.mouseDown(r,{button:0}),await M(()=>{a(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await M(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await M(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await M(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),await p.click(r),await a(b).toHaveTextContent("id desc")}},He={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{ariaLabel:"Release checklist table",columns:S,data:h,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},De={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:h,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},Ee={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{caption:0,columns:S,data:h,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const n=y(e).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},Ce={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:h,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const n=y(e).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},Ae={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:h,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Io(){const[e,t]=m.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:T,children:["Active sort: ",o.jsx("strong",{style:J,children:e})]}),o.jsx(d,{columns:S,data:h,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}function Lo(){const[e,t]=m.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:T,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:T,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:J,children:e})]}),o.jsx(d,{columns:S,data:h,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const Ie={render:()=>o.jsx(Io,{}),play:async({canvasElement:e})=>{const t=y(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=t.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await p.keyboard("{ArrowRight}");const b=t.getByRole("button",{name:"Component sort ascending"});await a(b).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{End}");const I=t.getByRole("button",{name:"Status sort ascending"});await a(I).toHaveFocus(),await p.keyboard("{Home}"),await a(r).toHaveFocus(),await p.keyboard("{PageDown}");const k=t.getByRole("button",{name:"Component sort ascending"});await a(k).toHaveFocus(),await p.keyboard("{PageUp}"),await a(r).toHaveFocus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const N=t.getByRole("button",{name:"Issue sort ascending"}),j=N.closest("th");await a(j).toHaveAttribute("aria-sort","descending"),v.keyDown(N,{key:"Enter",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),N.focus(),v.keyDown(N,{key:"Space",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),await p.keyboard("{Space}"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const D=t.getByRole("button",{name:"Issue sort descending"});D.focus(),v.keyDown(D,{key:"ArrowRight",ctrlKey:!0}),v.keyDown(D,{key:"ArrowLeft",metaKey:!0}),v.keyDown(D,{key:"End",ctrlKey:!0}),v.keyDown(D,{key:"Home",altKey:!0}),v.keyDown(D,{key:"PageDown",metaKey:!0}),v.keyDown(D,{key:"PageUp",ctrlKey:!0}),await a(D).toHaveFocus(),v.keyDown(D,{key:"Enter",ctrlKey:!0}),v.keyDown(D,{key:"Space",metaKey:!0}),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending");const O=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});O.preventDefault(),D.dispatchEvent(O),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await p.keyboard("{Shift>}{Enter}{/Shift}"),await M(()=>{a(t.getByText("id desc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","descending")}),t.getByRole("button",{name:"Issue sort ascending"}).focus(),await p.keyboard("{Shift>}{Space}{/Shift}"),await M(()=>{a(t.getByText("id asc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","ascending")})}},Le={render:()=>o.jsx(Lo,{}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Issue sort descending"});n.focus(),v.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),v.keyDown(n,{key:"Enter"}),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Ke={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:T,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(d,{columns:S,data:h,defaultSortKey:"id"})})]}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Issue sort descending"}),r=t.getByRole("button",{name:"Component sort ascending"});n.focus(),v.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),v.keyDown(n,{key:"ArrowRight",metaKey:!0}),v.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function Ko(){const[e,t]=m.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:T,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:T,children:["Active sort: ",o.jsx("strong",{style:J,children:e})]}),o.jsx(d,{columns:S,data:h,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const je={render:()=>o.jsx(Ko,{}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Ct(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Ct(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),At(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),At(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Fe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:h,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"按降序排序：Issue"});await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await p.click(n),await a(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},We={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=t.getByRole("button",{name:"Release date sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},Pe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Me={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ne={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=t.getByRole("button",{name:"Column 1 sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Oe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:e})=>{const t=y(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=t.getByRole("button",{name:"release stage ready sort descending"});await p.click(n),await a(t.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},$e={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(d,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},qe={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(w,{maxWidth:"min(100%, 620px)",children:o.jsx(d,{columns:e,data:h,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("columnheader",{name:"Component"}),r=t.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function jo(){const[e,t]=m.useState(!1),n=m.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:e,width:140}],[e]);return o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:T,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:T,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:J,children:e?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>t(!0),children:"Load status sortable schema"}),o.jsx(d,{columns:n,data:h,rowKey:r=>r.id,defaultSortKey:"status"})]})}const ze={render:()=>o.jsx(jo,{}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("button",{name:"Load status sortable schema"}),r=t.getByRole("columnheader",{name:"Status"});await a(t.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await p.click(n),await a(t.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Ya=h.map(e=>({...e,note:""})),Ja=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>o.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Ve={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(d,{columns:Ja,data:Ya,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},_e={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(d,{columns:Ja,data:Ya,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Fo=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Ue={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:T,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,n)=>`${e.key} (visual:${t}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:Fo,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=y(e);await p.click(t.getByRole("button",{name:"Score sort descending"})),await a(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var It,Lt,Kt;ie.parameters={...ie.parameters,docs:{...(It=ie.parameters)==null?void 0:It.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Kt=(Lt=ie.parameters)==null?void 0:Lt.docs)==null?void 0:Kt.source}}};var jt,Ft,Wt;ce.parameters={...ce.parameters,docs:{...(jt=ce.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" defaultSortDirection="desc" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    const firstRowHeader = canvas.getAllByRole("rowheader")[0];
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await expect(firstRowHeader).toHaveTextContent("DLG-210");
    await expect(canvas.getByRole("button", {
      name: "Issue sort ascending"
    })).toBeInTheDocument();
  }
}`,...(Wt=(Ft=ce.parameters)==null?void 0:Ft.docs)==null?void 0:Wt.source}}};var Pt,Mt,Nt;le.parameters={...le.parameters,docs:{...(Pt=le.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Runtime sort-direction config from CMS/JSON should normalize mixed-case tokens before
        sorting.
      </p>
      <Table caption="Runtime sort direction normalization" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" defaultSortDirection={" DESC " as unknown as "desc"} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Runtime sort direction normalization"
    });
    const issueHeader = within(table).getByRole("columnheader", {
      name: /Issue/
    });
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await expect(within(table).getAllByRole("rowheader")[0]).toHaveTextContent("DLG-210");
    await expect(within(table).getByRole("button", {
      name: "Issue sort ascending"
    })).toBeInTheDocument();
  }
}`,...(Nt=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Nt.source}}};var Ot,$t,qt;ue.parameters={...ue.parameters,docs:{...(Ot=ue.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  render: () => {
    const actionColumns: Array<TableColumn<ReleaseRow>> = [...columns, {
      key: "action",
      header: "Action",
      width: 160,
      render: row => <Button size="sm" variant="outline" onClick={event => event.preventDefault()} aria-label={\`Open \${row.id}\`}>
            Open Ticket
          </Button>
    }];
    return <Table columns={actionColumns} data={rows} rowKey={row => row.id} />;
  }
}`,...(qt=($t=ue.parameters)==null?void 0:$t.docs)==null?void 0:qt.source}}};var zt,Vt,_t;de.parameters={...de.parameters,docs:{...(zt=de.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    await expect(canvas.getByText("No release items yet.")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("No release items yet.");
    await expect(sortButton).toBeDisabled();
    await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(_t=(Vt=de.parameters)==null?void 0:Vt.docs)==null?void 0:_t.source}}};var Ut,Gt,Yt;me.parameters={...me.parameters,docs:{...(Ut=me.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[{
      id: "BTN-102",
      component: "Button",
      owner: "Design System",
      status: "ready"
    }]} defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Issue sort descending"
    })).toBeDisabled();
  }
}`,...(Yt=(Gt=me.parameters)==null?void 0:Gt.docs)==null?void 0:Yt.source}}};var Jt,Zt,Qt;ye.parameters={...ye.parameters,docs:{...(Jt=ye.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "id",
      header: "Issue",
      sortable: true,
      rowHeader: true
    }, {
      key: "component",
      header: "Component"
    }, {
      key: "owner",
      header: "Owner"
    }, {
      key: "status",
      header: "Status"
    }]} data={rows} defaultSortKey="id" rowKey={row => row.id} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(issueSortButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    issueSortButton.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSortButton).toHaveFocus();
    await expect(canvas.getByRole("columnheader", {
      name: /Issue/
    })).toHaveAttribute("aria-sort", "ascending");
  }
}`,...(Qt=(Zt=ye.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};var Xt,en,tn;pe.parameters={...pe.parameters,docs:{...(Xt=pe.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        When sortable controls are unavailable and horizontal overflow exists, focus the scroll
        region and use Arrow/Home/End/Page keys to pan overflowed columns.
      </p>
      <Table columns={[{
      key: "id",
      header: "Issue"
    }, {
      key: "component",
      header: "Component"
    }, {
      key: "owner",
      header: "Owner"
    }, {
      key: "status",
      header: "Status"
    }]} data={rows} />
      <button type="button">After table</button>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    const ownerWindow = scrollContainer?.ownerDocument.defaultView ?? window;
    let mockedScrollLeft = 0;
    Object.defineProperty(scrollContainer as HTMLDivElement, "clientWidth", {
      configurable: true,
      value: 220
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollWidth", {
      configurable: true,
      value: 640
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollLeft", {
      configurable: true,
      get: () => mockedScrollLeft,
      set: (value: number) => {
        mockedScrollLeft = value;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollBy", {
      configurable: true,
      value: ({
        left = 0
      }: ScrollToOptions) => {
        mockedScrollLeft += Number(left) || 0;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollTo", {
      configurable: true,
      value: ({
        left = 0
      }: ScrollToOptions) => {
        mockedScrollLeft = Number(left) || 0;
      }
    });
    fireEvent(ownerWindow, new ownerWindow.Event("resize"));
    await waitFor(() => {
      expect(scrollContainer).toHaveAttribute("role", "region");
      expect(scrollContainer).toHaveAttribute("tabindex", "0");
      expect(scrollContainer).toHaveAttribute("aria-keyshortcuts", "ArrowLeft ArrowRight Home End PageDown PageUp");
    });
    await userEvent.tab();
    await expect(scrollContainer).toHaveFocus();
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowRight"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBeGreaterThan(0);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "Home"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    const preemptScrollHandler = (event: KeyboardEvent) => event.preventDefault();
    (scrollContainer as HTMLDivElement).addEventListener("keydown", preemptScrollHandler, true);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowRight"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    (scrollContainer as HTMLDivElement).removeEventListener("keydown", preemptScrollHandler, true);
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After table"
    })).toHaveFocus();
  }
}`,...(tn=(en=pe.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;we.parameters={...we.parameters,docs:{...(nn=we.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="760px" gap={10}>
      <p style={storyMutedTextStyle}>
        Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop.
      </p>
      <button type="button">Before table</button>
      <Table columns={[{
      key: "id",
      header: "Issue"
    }, {
      key: "component",
      header: "Component"
    }]} data={rows} />
      <button type="button">After table</button>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    await expect(scrollContainer).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "Before table"
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After table"
    })).toHaveFocus();
  }
}`,...(on=(an=we.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,sn,cn;be.parameters={...be.parameters,docs:{...(rn=be.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="360px" gap={10}>
      <p style={storyMutedTextStyle}>
        Use <code>minTableWidth</code> to keep compact layouts readable without forcing overflow.
      </p>
      <Table minTableWidth={320} columns={[{
      key: "id",
      header: "Issue"
    }, {
      key: "component",
      header: "Component"
    }]} data={rows} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Data table"
    });
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(table).toHaveStyle({
      minWidth: "320px"
    });
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    await expect(scrollContainer).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(cn=(sn=be.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var ln,un,dn;ge.parameters={...ge.parameters,docs:{...(ln=ge.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual
        direction.
      </p>
      <div dir="rtl">
        <Table columns={[{
        key: "id",
        header: "Issue"
      }, {
        key: "component",
        header: "Component"
      }, {
        key: "owner",
        header: "Owner"
      }, {
        key: "status",
        header: "Status"
      }]} data={rows} />
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    const ownerWindow = scrollContainer?.ownerDocument.defaultView ?? window;
    let mockedScrollLeft = 0;
    Object.defineProperty(scrollContainer as HTMLDivElement, "clientWidth", {
      configurable: true,
      value: 220
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollWidth", {
      configurable: true,
      value: 640
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollLeft", {
      configurable: true,
      get: () => mockedScrollLeft,
      set: (value: number) => {
        mockedScrollLeft = value;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollBy", {
      configurable: true,
      value: ({
        left = 0
      }: ScrollToOptions) => {
        mockedScrollLeft += Number(left) || 0;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollTo", {
      configurable: true,
      value: ({
        left = 0
      }: ScrollToOptions) => {
        mockedScrollLeft = Number(left) || 0;
      }
    });
    fireEvent(ownerWindow, new ownerWindow.Event("resize"));
    await waitFor(() => {
      expect(scrollContainer).toHaveAttribute("tabindex", "0");
      expect(scrollContainer).toHaveAttribute("aria-keyshortcuts", "ArrowLeft ArrowRight Home End PageDown PageUp");
    });
    (scrollContainer as HTMLDivElement).focus();
    await expect(scrollContainer).toHaveFocus();
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowLeft"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBeGreaterThan(0);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "Home"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(420);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "End"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    const preemptScrollHandler = (event: KeyboardEvent) => event.preventDefault();
    (scrollContainer as HTMLDivElement).addEventListener("keydown", preemptScrollHandler, true);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowLeft"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    (scrollContainer as HTMLDivElement).removeEventListener("keydown", preemptScrollHandler, true);
    await expect(canvas.getByRole("table", {
      name: "Data table"
    })).toBeInTheDocument();
  }
}`,...(dn=(un=ge.parameters)==null?void 0:un.docs)==null?void 0:dn.source}}};var mn,yn,pn;ve.parameters={...ve.parameters,docs:{...(mn=ve.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Sort button hides focus ring on pointer focus, then restores focus-visible ring when users
        return with keyboard Tab navigation.
      </p>
      <button type="button">Before table</button>
      <Table columns={columns} data={rows} defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = canvas.getByRole("button", {
      name: "Before table"
    });
    const issueSortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    fireEvent.mouseDown(issueSortButton);
    issueSortButton.focus();
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(issueSortButton).toHaveFocus();
    await expect(issueSortButton.style.boxShadow).toContain("0 0 0 3px");
  }
}`,...(pn=(yn=ve.parameters)==null?void 0:yn.docs)==null?void 0:pn.source}}};var wn,bn,gn;he.parameters={...he.parameters,docs:{...(wn=he.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab)
        restores focus-visible ring for the sortable header.
      </p>
      <Table columns={columns} data={rows} defaultSortKey="id" />
      <button type="button">After table</button>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const statusSortButton = canvas.getByRole("button", {
      name: "Status sort ascending"
    });
    const afterButton = canvas.getByRole("button", {
      name: "After table"
    });
    fireEvent.mouseDown(statusSortButton);
    statusSortButton.focus();
    await userEvent.click(afterButton);
    await userEvent.tab({
      shift: true
    });
    await expect(statusSortButton).toHaveFocus();
    await expect(statusSortButton.style.boxShadow).toContain("0 0 0 3px");
  }
}`,...(gn=(bn=he.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var vn,hn,xn;xe.parameters={...xe.parameters,docs:{...(vn=xe.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="Syncing release feed..." defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Data table"
    });
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    await expect(table).toHaveAttribute("aria-busy", "true");
    await expect(canvas.getByText("Syncing release feed...")).toBeInTheDocument();
    await expect(canvas.queryByRole("rowheader", {
      name: "BTN-102"
    })).not.toBeInTheDocument();
    await expect(sortButton).toBeDisabled();
    await expect(sortButton).not.toHaveAttribute("aria-keyshortcuts");
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
  }
}`,...(xn=(hn=xe.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var fn,Sn,Bn;fe.parameters={...fe.parameters,docs:{...(fn=fe.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  render: () => {
    const [sortTrace, setSortTrace] = React.useState("none");
    return <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
        <p style={storyMutedTextStyle}>
          Runtime bool-like config from CMS/JSON should degrade safely: invalid \`loading\` values
          fall back to \`false\`.
        </p>
        <p style={storyMutedTextStyle}>
          Sort trace:{" "}
          <strong data-testid="table-runtime-boolean-sort-trace" style={storyEmphasisTextStyle}>
            {sortTrace}
          </strong>
        </p>
        <Table columns={columns} data={rows} defaultSortKey="id" loading={"invalid-loading-flag" as unknown as boolean} loadingContent="Should stay hidden" onSortChange={(key, direction) => setSortTrace(\`\${key} \${direction}\`)} />
      </StoryShowcaseFrame>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Data table"
    });
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(table).not.toHaveAttribute("aria-busy");
    await expect(canvas.queryByText("Should stay hidden")).not.toBeInTheDocument();
    await expect(canvas.getByRole("rowheader", {
      name: "BTN-102"
    })).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(sortButton).toBeEnabled();
    await userEvent.click(sortButton);
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await expect(canvas.getByTestId("table-runtime-boolean-sort-trace")).toHaveTextContent("id desc");
  }
}`,...(Bn=(Sn=fe.parameters)==null?void 0:Sn.docs)==null?void 0:Bn.source}}};var Rn,kn,Tn;Se.parameters={...Se.parameters,docs:{...(Rn=Se.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(Tn=(kn=Se.parameters)==null?void 0:kn.docs)==null?void 0:Tn.source}}};var Hn,Dn,En;Be.parameters={...Be.parameters,docs:{...(Hn=Be.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(En=(Dn=Be.parameters)==null?void 0:Dn.docs)==null?void 0:En.source}}};var Cn,An,In;Re.parameters={...Re.parameters,docs:{...(Cn=Re.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <Table columns={columns} data={rows} loading loadingContent={0} />
      <Table columns={columns} data={[]} emptyContent={0} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const statuses = canvas.getAllByRole("status");
    await expect(statuses).toHaveLength(2);
    await expect(statuses[0]).toHaveTextContent("0");
    await expect(statuses[1]).toHaveTextContent("0");
  }
}`,...(In=(An=Re.parameters)==null?void 0:An.docs)==null?void 0:In.source}}};var Ln,Kn,jn;ke.parameters={...ke.parameters,docs:{...(Ln=ke.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  render: () => <LoadingVisualResetTable />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole("button", {
      name: "Toggle loading"
    });
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    fireEvent.mouseDown(sortButton);
    await userEvent.click(toggleButton);
    const disabledSortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(disabledSortButton).toBeDisabled();
    await expect(disabledSortButton.style.transform).toContain("translateY(0");
    await expect(disabledSortButton.style.boxShadow).toBe("none");
  }
}`,...(jn=(Kn=ke.parameters)==null?void 0:Kn.docs)==null?void 0:jn.source}}};var Fn,Wn,Pn;Te.parameters={...Te.parameters,docs:{...(Fn=Te.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  render: function RenderPrimaryPointerOnlySortPress() {
    const [sortState, setSortState] = React.useState("id asc");
    return <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
        <p style={storyMutedTextStyle}>
          Active sort: <strong data-testid="primary-pointer-sort-state">{sortState}</strong>
        </p>
        <button type="button">Before table</button>
        <Table columns={columns} data={rows} defaultSortKey="id" onSortChange={(key, direction) => setSortState(\`\${key} \${direction}\`)} />
      </StoryShowcaseFrame>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = canvas.getByRole("button", {
      name: "Before table"
    });
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    const sortState = canvas.getByTestId("primary-pointer-sort-state");
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(sortButton).toHaveFocus();
    await expect(sortButton.style.boxShadow).toContain("0 0 0 3px");
    fireEvent.mouseDown(sortButton, {
      button: 2
    });
    fireEvent.mouseUp(sortButton, {
      button: 2
    });
    await expect(sortButton.style.boxShadow).toContain("0 0 0 3px");
    await expect(sortState).toHaveTextContent("id asc");
    fireEvent.mouseDown(sortButton, {
      button: 0
    });
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(sortButton);
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(0");
    });
    await expect(sortState).toHaveTextContent("id asc");
    sortButton.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(1px)");
    });
    sortButton.dispatchEvent(new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(0");
    });
    await expect(sortState).toHaveTextContent("id asc");
    await userEvent.click(sortButton);
    await expect(sortState).toHaveTextContent("id desc");
  }
}`,...(Pn=(Wn=Te.parameters)==null?void 0:Wn.docs)==null?void 0:Pn.source}}};var Mn,Nn,On;He.parameters={...He.parameters,docs:{...(Mn=He.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table ariaLabel="Release checklist table" columns={columns} data={rows} rowKey={row => row.id} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", {
      name: "Release checklist table"
    })).toBeInTheDocument();
  }
}`,...(On=(Nn=He.parameters)==null?void 0:Nn.docs)==null?void 0:On.source}}};var $n,qn,zn;De.parameters={...De.parameters,docs:{...($n=De.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} rowKey={row => row.id} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", {
      name: "Data table"
    })).toBeInTheDocument();
  }
}`,...(zn=(qn=De.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var Vn,_n,Un;Ee.parameters={...Ee.parameters,docs:{...(Vn=Ee.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table caption={0} columns={columns} data={rows} rowKey={row => row.id} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "0"
    });
    await expect(table).not.toHaveAttribute("aria-label");
  }
}`,...(Un=(_n=Ee.parameters)==null?void 0:_n.docs)==null?void 0:Un.source}}};var Gn,Yn,Jn;Ce.parameters={...Ce.parameters,docs:{...(Gn=Ce.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <h3 id="release-board-heading" style={{
      margin: 0
    }}>
        Release board metrics
      </h3>
      <Table ariaLabelledBy="release-board-heading" ariaLabel="Fallback table label" columns={columns} data={rows} rowKey={row => row.id} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Release board metrics"
    });
    await expect(table).toHaveAttribute("aria-labelledby", "release-board-heading");
    await expect(table).not.toHaveAttribute("aria-label");
  }
}`,...(Jn=(Yn=Ce.parameters)==null?void 0:Yn.docs)==null?void 0:Jn.source}}};var Zn,Qn,Xn;Ae.parameters={...Ae.parameters,docs:{...(Zn=Ae.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "component",
      header: "Component",
      rowHeader: true,
      sortable: true
    }, {
      key: "owner",
      header: "Owner",
      sortable: true
    }, {
      key: "status",
      header: "Status",
      sortable: true
    }]} data={rows} rowKey={row => row.id} defaultSortKey="component" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("rowheader", {
      name: "Button"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("rowheader", {
      name: "Dialog"
    })).toBeInTheDocument();
  }
}`,...(Xn=(Qn=Ae.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var ea,ta,na;Ie.parameters={...Ie.parameters,docs:{...(ea=Ie.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: () => <SortTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(issueSort).toHaveAttribute("aria-keyshortcuts", "Enter Space Home End PageDown PageUp ArrowLeft ArrowRight");
    issueSort.focus();
    await userEvent.keyboard("{ArrowRight}");
    const componentSortArrow = canvas.getByRole("button", {
      name: "Component sort ascending"
    });
    await expect(componentSortArrow).toHaveFocus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{End}");
    const statusSort = canvas.getByRole("button", {
      name: "Status sort ascending"
    });
    await expect(statusSort).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{PageDown}");
    const componentSortPage = canvas.getByRole("button", {
      name: "Component sort ascending"
    });
    await expect(componentSortPage).toHaveFocus();
    await userEvent.keyboard("{PageUp}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");
    const issueSortAsc = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    const issueHeader = issueSortAsc.closest("th");
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    fireEvent.keyDown(issueSortAsc, {
      key: "Enter",
      repeat: true
    });
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    issueSortAsc.focus();
    fireEvent.keyDown(issueSortAsc, {
      key: "Space",
      repeat: true
    });
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
    const issueSortDesc = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    issueSortDesc.focus();
    fireEvent.keyDown(issueSortDesc, {
      key: "ArrowRight",
      ctrlKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "ArrowLeft",
      metaKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "End",
      ctrlKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "Home",
      altKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "PageDown",
      metaKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "PageUp",
      ctrlKey: true
    });
    await expect(issueSortDesc).toHaveFocus();
    fireEvent.keyDown(issueSortDesc, {
      key: "Enter",
      ctrlKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "Space",
      metaKey: true
    });
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    const preemptedEnterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true
    });
    preemptedEnterEvent.preventDefault();
    issueSortDesc.dispatchEvent(preemptedEnterEvent);
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    await userEvent.keyboard("{Shift>}{Enter}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByText("id desc")).toBeInTheDocument();
      expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    });
    const issueSortAscAfterShift = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    issueSortAscAfterShift.focus();
    await userEvent.keyboard("{Shift>}{Space}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByText("id asc")).toBeInTheDocument();
      expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    });
  }
}`,...(na=(ta=Ie.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var aa,oa,ra;Le.parameters={...Le.parameters,docs:{...(aa=Le.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: () => <ManagedSortKeysPreemptedLocallyDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    issueSort.focus();
    fireEvent.keyDown(issueSort, {
      key: "ArrowRight"
    });
    await expect(issueSort).toHaveFocus();
    await expect(canvas.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc");
    fireEvent.keyDown(issueSort, {
      key: "Enter"
    });
    await expect(canvas.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
  }
}`,...(ra=(oa=Le.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var sa,ia,ca;Ke.parameters={...Ke.parameters,docs:{...(sa=Ke.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={8}>
      <p style={storyMutedTextStyle}>
        In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order.
      </p>
      <div dir="rtl">
        <Table columns={columns} data={rows} defaultSortKey="id" />
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    const componentSort = canvas.getByRole("button", {
      name: "Component sort ascending"
    });
    issueSort.focus();
    fireEvent.keyDown(issueSort, {
      key: "ArrowLeft",
      ctrlKey: true
    });
    fireEvent.keyDown(issueSort, {
      key: "ArrowRight",
      metaKey: true
    });
    fireEvent.keyDown(issueSort, {
      key: "ArrowLeft",
      altKey: true
    });
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(componentSort).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSort).toHaveFocus();
  }
}`,...(ca=(ia=Ke.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,da;je.parameters={...je.parameters,docs:{...(la=je.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => <ImeCompositionGuardDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    const issueSortDesc = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    dispatchImeKeyDown(issueSortDesc, "Enter");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    dispatchImeKeyDown(issueSortDesc, "Space");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    dispatchLegacyImeKeyDown(issueSortDesc, "Enter");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    dispatchLegacyImeKeyDown(issueSortDesc, "Space");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    issueSortDesc.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
  }
}`,...(da=(ua=je.parameters)==null?void 0:ua.docs)==null?void 0:da.source}}};var ma,ya,pa;Fe.parameters={...Fe.parameters,docs:{...(ma=Fe.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} defaultSortKey="id" getSortAriaLabel={({
      columnHeader,
      nextDirection
    }) => \`按\${nextDirection === "asc" ? "升序" : "降序"}排序：\${columnHeader}\`} getSortStatusText={({
      columnHeader,
      direction
    }) => \`当前排序：\${columnHeader}（\${direction === "asc" ? "升序" : "降序"}）\`} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", {
      name: "按降序排序：Issue"
    });
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）");
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "按升序排序：Issue"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）");
  }
}`,...(pa=(ya=Fe.parameters)==null?void 0:ya.docs)==null?void 0:pa.source}}};var wa,ba,ga;We.parameters={...We.parameters,docs:{...(wa=We.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "releasedAt",
      header: <span aria-hidden="true">📅</span>,
      sortLabel: "Release date",
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }, {
      key: "owner",
      header: "Owner"
    }]} data={[{
      releasedAt: "2026-03-19",
      component: "Dialog",
      owner: "Platform UI"
    }, {
      releasedAt: "2026-01-10",
      component: "Button",
      owner: "Design System"
    }]} defaultSortKey="releasedAt" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Release date sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Release date sort ascending"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release date descending.");
  }
}`,...(ga=(ba=We.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var va,ha,xa;Pe.parameters={...Pe.parameters,docs:{...(va=Pe.parameters)==null?void 0:va.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "status",
      header: <span>
                <span aria-hidden="true">🚦</span> Release status
              </span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      status: "Review",
      component: "Dialog"
    }, {
      status: "Ready",
      component: "Button"
    }]} defaultSortKey="status" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Release status sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Release status sort ascending"
    })).toBeInTheDocument();
  }
}`,...(xa=(ha=Pe.parameters)==null?void 0:ha.docs)==null?void 0:xa.source}}};var fa,Sa,Ba;Me.parameters={...Me.parameters,docs:{...(fa=Me.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "status",
      header: <span aria-label="Release status">
                <span aria-hidden="true">🚦</span>
              </span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      status: "Review",
      component: "Dialog"
    }, {
      status: "Ready",
      component: "Button"
    }]} defaultSortKey="status" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Release status sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Release status sort ascending"
    })).toBeInTheDocument();
  }
}`,...(Ba=(Sa=Me.parameters)==null?void 0:Sa.docs)==null?void 0:Ba.source}}};var Ra,ka,Ta;Ne.parameters={...Ne.parameters,docs:{...(Ra=Ne.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "   ",
      header: <span aria-hidden="true">🚦</span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      "   ": "Review",
      component: "Dialog"
    }, {
      "   ": "Ready",
      component: "Button"
    }]} defaultSortKey="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Column 1 sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Column 1 sort ascending"
    })).toBeInTheDocument();
  }
}`,...(Ta=(ka=Ne.parameters)==null?void 0:ka.docs)==null?void 0:Ta.source}}};var Ha,Da,Ea;Oe.parameters={...Oe.parameters,docs:{...(Ha=Oe.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "release_stage-ready",
      header: <span aria-hidden="true">🚦</span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      "release_stage-ready": "Review",
      component: "Dialog"
    }, {
      "release_stage-ready": "Ready",
      component: "Button"
    }]} defaultSortKey="release_stage-ready" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "release stage ready sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "release stage ready sort ascending"
    })).toBeInTheDocument();
  }
}`,...(Ea=(Da=Oe.parameters)==null?void 0:Da.docs)==null?void 0:Ea.source}}};var Ca,Aa,Ia;$e.parameters={...$e.parameters,docs:{...(Ca=$e.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <h3 id="table-status-sort-heading" style={{
      margin: 0,
      fontSize: "var(--aurora-font-size-sm)"
    }}>
        Release status
      </h3>
      <Table columns={[{
      key: "status",
      header: <span aria-hidden="true">🚦</span>,
      sortLabelledBy: "table-status-sort-heading",
      sortLabel: "Fallback status",
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      status: "Review",
      component: "Dialog"
    }, {
      status: "Ready",
      component: "Button"
    }]} defaultSortKey="status" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sortButton = canvas.getByRole("button", {
      name: "Release status"
    });
    await expect(sortButton).toHaveAttribute("aria-labelledby", "table-status-sort-heading");
    await expect(sortButton).not.toHaveAttribute("aria-label");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending.");
    await userEvent.click(sortButton);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.");
  }
}`,...(Ia=(Aa=$e.parameters)==null?void 0:Aa.docs)==null?void 0:Ia.source}}};var La,Ka,ja;qe.parameters={...qe.parameters,docs:{...(La=qe.parameters)==null?void 0:La.docs,source:{originalSource:`{
  render: () => {
    const nonSortableStatusColumns: Array<TableColumn<ReleaseRow>> = [{
      key: "component",
      header: "Component",
      sortable: true
    }, {
      key: "status",
      header: "Status",
      width: 140
    }];
    return <StoryShowcaseFrame maxWidth="min(100%, 620px)">
        <Table columns={nonSortableStatusColumns} data={rows} defaultSortKey="status" />
      </StoryShowcaseFrame>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const componentHeader = canvas.getByRole("columnheader", {
      name: "Component"
    });
    const statusHeader = canvas.getByRole("columnheader", {
      name: "Status"
    });
    await expect(componentHeader).not.toHaveAttribute("aria-sort");
    await expect(statusHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.queryByRole("button", {
      name: /Status sort/
    })).not.toBeInTheDocument();
    await expect(canvas.getAllByRole("cell")[0]).toHaveTextContent("Button");
  }
}`,...(ja=(Ka=qe.parameters)==null?void 0:Ka.docs)==null?void 0:ja.source}}};var Fa,Wa,Pa;ze.parameters={...ze.parameters,docs:{...(Fa=ze.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  render: () => <DeferredColumnsDefaultSortRecoveryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loadSchemaButton = canvas.getByRole("button", {
      name: "Load status sortable schema"
    });
    const statusHeader = canvas.getByRole("columnheader", {
      name: "Status"
    });
    await expect(canvas.getByTestId("table-status-sortable")).toHaveTextContent("no");
    await expect(statusHeader).not.toHaveAttribute("aria-sort");
    await expect(canvas.getAllByRole("rowheader")[0]).toHaveTextContent("Button");
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await userEvent.click(loadSchemaButton);
    await expect(canvas.getByTestId("table-status-sortable")).toHaveTextContent("yes");
    await expect(statusHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByRole("button", {
      name: "Status sort descending"
    })).toBeEnabled();
    await expect(canvas.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Status ascending.");
  }
}`,...(Pa=(Wa=ze.parameters)==null?void 0:Wa.docs)==null?void 0:Pa.source}}};var Ma,Na,Oa;Ve.parameters={...Ve.parameters,docs:{...(Ma=Ve.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 720px)">
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alphaInput = canvas.getByRole("textbox", {
      name: "BTN-102 note"
    });
    await userEvent.type(alphaInput, "persist me");
    await userEvent.click(canvas.getByRole("button", {
      name: "Component sort descending"
    }));
    await expect(canvas.getByRole("textbox", {
      name: "BTN-102 note"
    })).toHaveValue("persist me");
  }
}`,...(Oa=(Na=Ve.parameters)==null?void 0:Na.docs)==null?void 0:Oa.source}}};var $a,qa,za;_e.parameters={..._e.parameters,docs:{...($a=_e.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 720px)">
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" rowKey={(row, rowIndex) => \`\${rowIndex}-\${row.id}\`} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alphaInput = canvas.getByRole("textbox", {
      name: "BTN-102 note"
    });
    await userEvent.type(alphaInput, "persist me");
    await userEvent.click(canvas.getByRole("button", {
      name: "Component sort descending"
    }));
    await expect(canvas.getByRole("textbox", {
      name: "BTN-102 note"
    })).toHaveValue("persist me");
  }
}`,...(za=(qa=_e.parameters)==null?void 0:qa.docs)==null?void 0:za.source}}};var Va,_a,Ua;Ue.parameters={...Ue.parameters,docs:{...(Va=Ue.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 760px)" gap={8}>
      <p style={storyMutedTextStyle}>
        \`render(row, rowIndex, sourceIndex)\` exposes both sorted row position and source-data
        position.
      </p>
      <Table columns={[{
      key: "key",
      header: "Item",
      sortable: true,
      render: (row, rowIndex, sourceIndex) => \`\${row.key} (visual:\${rowIndex}, source:\${sourceIndex})\`
    }, {
      key: "score",
      header: "Score",
      sortable: true
    }]} data={indexSemanticsRows} defaultSortKey="score" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Score sort descending"
    }));
    await expect(canvas.getByRole("cell", {
      name: "Gamma (visual:0, source:2)"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", {
      name: "Alpha (visual:2, source:0)"
    })).toBeInTheDocument();
  }
}`,...(Ua=(_a=Ue.parameters)==null?void 0:_a.docs)==null?void 0:Ua.source}}};const zo=["ReleaseChecklist","DescendingDefaultSortDirection","RuntimeSortDirectionNormalization","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","ScrollContainerSkipsTabStopWithoutOverflow","CompactMinWidthWithoutOverflow","RtlScrollContainerKeyboardPanning","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","RuntimeBooleanConfigNormalization","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{De as AccessibleNameFallback,Ce as AccessibleNameLabelledByHeading,He as AccessibleNameWithoutCaption,Me as AriaLabelHeaderAutoSortLabel,Be as BlankEmptyContentFallback,Ne as BlankKeySortLabelFallback,Se as BlankLoadingContentFallback,be as CompactMinWidthWithoutOverflow,ze as DeferredColumnsDefaultSortRecovery,ce as DescendingDefaultSortDirection,de as EmptyState,Ve as FallbackRowKeyStability,je as ImeCompositionGuard,qe as InvalidDefaultSortKeyFallback,ve as KeyboardFocusRingAfterPointer,he as KeyboardFocusRingShiftTabReentry,pe as KeyboardReachableScrollContainer,ke as LoadingDisablesResetsSortVisualState,xe as LoadingState,Fe as LocalizedSortLabels,Le as ManagedSortKeysPreemptedByLocalHandler,Oe as NormalizedKeySortLabelFallback,Ee as NumericCaptionName,Re as NumericFeedbackCopySemantics,Te as PrimaryPointerOnlySortPress,ie as ReleaseChecklist,Ue as RenderIndexSemantics,Pe as RichTextHeaderAutoSortLabel,Ae as RowHeaderSemantics,Ke as RtlArrowNavigation,ge as RtlScrollContainerKeyboardPanning,fe as RuntimeBooleanConfigNormalization,le as RuntimeSortDirectionNormalization,we as ScrollContainerSkipsTabStopWithoutOverflow,me as SingleRowSortDisabled,ye as SingleSortableColumnShortcutHints,We as SortLabelForCustomHeader,$e as SortLabelledByPrecedence,Ie as SortTelemetry,_e as SourceIndexRowKeyStability,ue as WithRowAction,zo as __namedExportsOrder,qo as default};
