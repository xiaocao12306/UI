import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as Qa}from"./Button-B21ouHNm.js";import{r as d}from"./index-BWu4c2F4.js";import{B as Xa}from"./Badge-ZJmMstsz.js";import{within as w,expect as a,userEvent as m,fireEvent as v,waitFor as P}from"./index-DgAF9SIF.js";import{S as p,s as D,a as Ve}from"./storyShowcase-DlKirntE.js";const Ka="Enter Space",eo=`${Ka} Home End PageDown PageUp ArrowLeft ArrowRight`,to="ArrowLeft ArrowRight Home End PageDown PageUp",no=48,ao=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),vt=400;function ht(t,e,n,r){if(!n)return null;const g=t.findIndex(I=>String(I.key)===n&&I.sortable);return g<0?null:{key:n,direction:r,renderKey:e[g]??`${n}__index-${g}`}}function xt(t,e,n){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const r=ze(tt(t.header));return r.length>0?r:e}function ft(t,e){const n=ze(t.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:e>=0?`Column ${e+1}`:"Column"}function y({columns:t,data:e,rowKey:n,caption:r,ariaLabel:g,ariaLabelledBy:I,loading:x=!1,loadingContent:N="Loading data...",emptyContent:j="No data available.",defaultSortKey:H,defaultSortDirection:M="asc",getSortAriaLabel:nt=St,getSortStatusText:at=oo,onSortKeyDown:_e,onSortChange:Ue}){const ot=qe(r),Wa=qe(N),Pa=qe(j),Na=Wa?N:"Loading data...",Ma=Pa?j:"No data available.",Y=oe(I),rt=Y?void 0:oe(g,ot?void 0:"Data table"),O=d.useRef({}),Ge=d.useRef(null),Ye=d.useRef(null),Z=d.useRef(0),$=d.useRef(null),J=d.useRef(null),q=d.useRef(!0);d.useRef(null),d.useRef(null),d.useRef(null);const[Oa,Ze]=d.useState(null),[$a,F]=d.useState(null),[qa,z]=d.useState(null),[za,Je]=d.useState(!1);d.useEffect(()=>{var c;const s=((c=Ge.current)==null?void 0:c.ownerDocument)??document,l=b=>{b.metaKey||b.altKey||b.ctrlKey||(q.current=!0)},u=b=>{"button"in b&&!et(b.button)||"ctrlKey"in b&&b.ctrlKey||(q.current=!1)};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",u,!0),s.addEventListener("mousedown",u,!0),s.addEventListener("touchstart",u,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",u,!0),s.removeEventListener("mousedown",u,!0),s.removeEventListener("touchstart",u,!0)}},[]);const Q=d.useCallback(()=>{Ye.current=null,Z.current=0,$.current!==null&&((J.current??window).clearTimeout($.current),$.current=null),J.current=null},[]);d.useEffect(()=>()=>{Q()},[Q]);const E=d.useMemo(()=>{const s=new Map;return t.map(l=>{const u=String(l.key),c=s.get(u)??0;return s.set(u,c+1),c===0?u:`${u}__duplicate-${c}`})},[t]),[h,X]=d.useState(()=>ht(t,E,H,M)),W=d.useMemo(()=>x||e.length<=1?[]:t.reduce((s,l,u)=>(l.sortable&&s.push(E[u]??`${String(l.key)}__index-${u}`),s),[]),[t,e.length,x,E]);d.useEffect(()=>{var c;if(!h)return;const s=E.findIndex(b=>b===h.renderKey);if(s>=0&&((c=t[s])!=null&&c.sortable))return;const l=t.findIndex(b=>b.sortable&&String(b.key)===h.key);if(l<0){X(null);return}const u=E[l]??`${h.key}__index-${l}`;u!==h.renderKey&&X(b=>b&&{...b,renderKey:u})},[t,E,h]),d.useEffect(()=>{if(h)return;const s=ht(t,E,H,M);s&&X(s)},[t,M,H,E,h]);const Qe=d.useMemo(()=>e.map((s,l)=>String(n?n(s,l):l)),[e,n]),Va=d.useMemo(()=>{const s=new Map;return Qe.map((l,u)=>{const c=s.get(l)??0;return s.set(l,c+1),c===0?l:`${l}__dup-${u}`})},[Qe]);d.useEffect(()=>{},[n,Qe]),d.useEffect(()=>{},[t]),d.useEffect(()=>{},[t]);const V=d.useMemo(()=>{const s=e.map((f,k)=>({row:f,sourceIndex:k}));if(!h)return s;const l=E.findIndex(f=>f===h.renderKey),u=l>=0?l:t.findIndex(f=>String(f.key)===h.key),c=u>=0?t[u]:void 0;if(!(c!=null&&c.sortable))return s;const b=c.sortAccessor??(f=>{const k=f[String(c.key)];return k instanceof Date||typeof k=="number"||typeof k=="string"?k:String(k??"")});return s.sort((f,k)=>{const C=b(f.row),T=b(k.row);if(typeof C=="string"&&typeof T=="string"){const U=ao.compare(C,T);return U!==0?h.direction==="asc"?U:-U:f.sourceIndex-k.sourceIndex}const L=C instanceof Date?C.getTime():C,ee=T instanceof Date?T.getTime():T;return L<ee?h.direction==="asc"?-1:1:L>ee?h.direction==="asc"?1:-1:f.sourceIndex-k.sourceIndex})},[t,e,E,h]),_a=typeof document>"u"?void 0:document,st=d.useMemo(()=>{if(x||V.length<=1||!h)return"";const s=E.findIndex(b=>b===h.renderKey),l=s>=0?s:t.findIndex(b=>String(b.key)===h.key),u=l>=0?t[l]:void 0;if(!(u!=null&&u.sortable))return"";const c=xt(u,ft(h.key,l));return at({columnKey:h.key,columnHeader:c,direction:h.direction})},[t,at,x,_a,E,h,V.length]),G=!x&&V.length>1&&t.some(s=>s.sortable),_=!G&&za,it=Math.max(t.length,1);return d.useEffect(()=>{G||(Ze(null),F(null),z(null))},[G]),d.useEffect(()=>{if(G){Je(!1);return}const s=Ge.current;if(!s){Je(!1);return}const l=s.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!l)return;const u=()=>{const b=s.scrollWidth-s.clientWidth>0;Je(f=>f===b?f:b)};u(),l.addEventListener("resize",u);let c=null;return typeof l.ResizeObserver=="function"&&(c=new l.ResizeObserver(u),c.observe(s)),()=>{l.removeEventListener("resize",u),c==null||c.disconnect()}},[t.length,e.length,G,x]),o.jsxs("div",{ref:Ge,"data-aurora-table-scroll-container":"",role:_?"region":void 0,tabIndex:_?0:void 0,"aria-label":_?Y?void 0:rt??"Data table scroll container":void 0,"aria-labelledby":_?Y:void 0,"aria-keyshortcuts":_?to:void 0,onKeyDown:s=>{if(!_||s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey||s.target!==s.currentTarget)return;const l=s.currentTarget,u=Math.max(0,l.scrollWidth-l.clientWidth);if(u<=0)return;const c=l.clientWidth,b=Math.max(no,Math.floor(c*.3)),f=kt(l),k=f==="rtl"?"ArrowLeft":"ArrowRight",C=L=>{L!==0&&(s.preventDefault(),io(l,L))},T=L=>{s.preventDefault(),co(l,L)};switch(s.key){case"ArrowLeft":case"ArrowRight":C(s.key===k?b:-b);return;case"PageDown":C(c);return;case"PageUp":C(-c);return;case"Home":T(f==="rtl"?u:0);return;case"End":T(f==="rtl"?0:u);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[st?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:st}):null,o.jsxs("table",{"aria-label":rt,"aria-labelledby":Y,"aria-busy":x||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[ot?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,o.jsx("thead",{children:o.jsx("tr",{children:t.map((s,l)=>{const u=String(s.key),c=E[l]??`${u}__index-${l}`,b=!!s.sortable,f=V.length>1,k=b&&(h==null?void 0:h.key)===u?h.direction:void 0,C=k&&(h==null?void 0:h.renderKey)===c?k:void 0,T=!x&&f?C:void 0,L=T?T==="asc"?"ascending":"descending":void 0,ee=s.align??"left",U=xt(s,ft(u,l)),te=k==="asc"?"desc":"asc",Ua=nt({columnKey:u,columnHeader:U,nextDirection:te}),ct=oe(s.sortLabelledBy),Ga=ct?void 0:oe(Ua,St({columnHeader:U,nextDirection:te})),K=x||!f,Ya=K?void 0:W.length>1?eo:Ka,lt=!K&&Oa===c,ut=!K&&$a===c,dt=!K&&qa===c,Za=lt||dt,mt=()=>{K||(X({key:u,direction:te,renderKey:c}),Ue==null||Ue(u,te))};return o.jsx("th",{scope:"col","aria-sort":L,style:{textAlign:ee,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:b?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:i=>{O.current[c]=i},"aria-labelledby":ct,"aria-label":Ga,"aria-keyshortcuts":Ya,disabled:K,onClick:i=>{const R=Date.now()-Z.current,ne=i.detail===0&&Ye.current===c&&Z.current>0&&R<=vt;Q(),!ne&&mt()},onMouseEnter:()=>{K||Ze(c)},onMouseLeave:()=>{Ze(i=>i===c?null:i),F(i=>i===c?null:i)},onPointerDown:i=>{K||i.ctrlKey||et(i.button)&&(q.current=!1,z(R=>R===c?null:R),F(c))},onPointerUp:i=>{et(i.button)&&F(R=>R===c?null:R)},onMouseDown:i=>{K||i.button!==0||i.ctrlKey||(q.current=!1,z(R=>R===c?null:R),F(c))},onMouseUp:i=>{i.button===0&&F(R=>R===c?null:R)},onPointerCancel:()=>{F(i=>i===c?null:i)},onFocus:()=>{if(K){z(i=>i===c?null:i);return}z(i=>so(O.current[c],q.current)?c:i===c?null:i)},onBlur:()=>{z(i=>i===c?null:i),F(i=>i===c?null:i)},onKeyDown:i=>{var ne,yt,pt,wt;if(q.current=!0,_e==null||_e(i),i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey)return;if(i.key==="Home"){const A=W[0];if(!A)return;i.preventDefault(),(ne=O.current[A])==null||ne.focus();return}if(i.key==="End"){const A=W[W.length-1];if(!A)return;i.preventDefault(),(yt=O.current[A])==null||yt.focus();return}if(i.key==="PageDown"||i.key==="PageUp"){const A=W.indexOf(c);if(A<0)return;const bt=i.key==="PageDown"?1:-1,ae=Math.max(0,Math.min(W.length-1,A+bt));if(ae===A)return;i.preventDefault();const Xe=W[ae];(pt=O.current[Xe])==null||pt.focus();return}if(i.key==="ArrowLeft"||i.key==="ArrowRight"){const A=W.indexOf(c);if(A<0)return;const ae=kt(i.currentTarget)==="rtl"?"ArrowLeft":"ArrowRight",Xe=i.key===ae?1:-1,gt=Math.max(0,Math.min(W.length-1,A+Xe));if(gt===A)return;i.preventDefault();const Ja=W[gt];(wt=O.current[Ja])==null||wt.focus();return}if(!Bt(i.key)||ro(i)||(i.preventDefault(),i.repeat))return;F(c),Ye.current=c,Z.current=Date.now();const R=i.currentTarget.ownerDocument.defaultView??window;$.current!==null&&(J.current??R).clearTimeout($.current),J.current=R,$.current=R.setTimeout(()=>{Q()},vt),mt()},onKeyUp:i=>{i.altKey||i.ctrlKey||i.metaKey||Bt(i.key)&&F(R=>R===c?null:R)},style:{border:Za?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ut?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":lt?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:K?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:K?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:dt?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ut?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,o.jsx("span",{"aria-hidden":"true",children:T==="asc"?"▲":T==="desc"?"▼":"↕"})]}):s.header},c)})})}),o.jsx("tbody",{children:x?o.jsx("tr",{children:o.jsx("td",{colSpan:it,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Na})})}):V.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:it,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Ma})})}):V.map((s,l)=>{const u=s.row,c=String(s.sourceIndex),b=Va[s.sourceIndex]??c;return o.jsx("tr",{style:{background:l%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((f,k)=>{const C=f.render?f.render(u,l,s.sourceIndex):String(u[String(f.key)]??""),T=E[k]??`${String(f.key)}__index-${k}`,L={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:f.align??"left"};return f.rowHeader?o.jsx("th",{scope:"row",style:{...L,fontWeight:"var(--aurora-font-weight-medium)"},children:C},T):o.jsx("td",{style:L,children:C},T)})},b)})})]})]})}function St({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function oo({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function Bt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function ro(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function et(t){return typeof t!="number"||t<=0}function so(t,e){if(!t)return e;try{return t.matches(":focus-visible")||e}catch{return e}}function kt(t){var g;const n=(t.ownerDocument.defaultView??window).getComputedStyle(t).direction;return n==="rtl"||n==="ltr"?n:((g=t.closest("[dir]"))==null?void 0:g.getAttribute("dir"))==="rtl"?"rtl":"ltr"}function qe(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>qe(e)):d.isValidElement(t)}function tt(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return ze(t.map(n=>tt(n)).filter(n=>n.length>0).join(" "));if(!d.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const n=ze(e["aria-label"]);if(n.length>0)return n}return tt(e.children)}function ze(t){return t.replace(/\s+/g," ").trim()}function oe(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function io(t,e){if(typeof t.scrollBy=="function"){t.scrollBy({left:e,behavior:"auto"});return}t.scrollLeft+=e}function co(t,e){if(typeof t.scrollTo=="function"){t.scrollTo({left:e,behavior:"auto"});return}t.scrollLeft=e}y.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"sortLabel",value:{name:"string",required:!1}},{key:"sortLabelledBy",value:{name:"string",required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const S=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],B=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return o.jsx(Xa,{tone:e,children:t.status})}}];function Rt(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}function Tt(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}function lo(){const[t,e]=d.useState(!1);return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:"Toggle loading"}),o.jsx(y,{columns:B,data:S,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const So={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},re={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:B,data:S,rowKey:t=>t.id,defaultSortKey:"id"})})},se={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:B,data:S,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ie={render:()=>{const t=[...B,{key:"action",header:"Action",width:160,render:e=>o.jsx(Qa,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return o.jsx(y,{columns:t,data:S,rowKey:e=>e.id})}},ce={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:B,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort ascending"});await a(e.getByText("No release items yet.")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},le={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:B,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},ue={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:S,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},de={render:()=>o.jsxs(p,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:D,children:"When sortable controls are unavailable and horizontal overflow exists, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:S}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let g=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>g,set:x=>{g=x}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:x=0})=>{g+=Number(x)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:x=0})=>{g=Number(x)||0}}),v(r,new r.Event("resize")),await P(()=>{a(n).toHaveAttribute("role","region"),a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await m.tab(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const I=x=>x.preventDefault();n.addEventListener("keydown",I,!0),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",I,!0),await m.tab(),await a(e.getByRole("button",{name:"After table"})).toHaveFocus()}},me={render:()=>o.jsxs(p,{maxWidth:"760px",gap:10,children:[o.jsx("p",{style:D,children:"Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:S}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex"),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await m.tab(),await a(e.getByRole("button",{name:"Before table"})).toHaveFocus(),await m.tab(),await a(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ye={render:()=>o.jsxs(p,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:D,children:"In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual direction."}),o.jsx("div",{dir:"rtl",children:o.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:S})})]}),play:async({canvasElement:t})=>{const e=w(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull();const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let g=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>g,set:x=>{g=x}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:x=0})=>{g+=Number(x)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:x=0})=>{g=Number(x)||0}}),v(r,new r.Event("resize")),await P(()=>{a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),n.focus(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(420),v.keyDown(n,{key:"End"}),await a(n.scrollLeft).toBe(0);const I=x=>x.preventDefault();n.addEventListener("keydown",I,!0),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",I,!0),await a(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},pe={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:D,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:B,data:S,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),r.focus(),await m.click(n),await m.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},we={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:D,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(y,{columns:B,data:S,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});v.mouseDown(n),n.focus(),await m.click(r),await m.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},be={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:B,data:S,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(e.getByText("Syncing release feed...")).toBeInTheDocument(),await a(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(g).not.toHaveAttribute("aria-sort")}},ge={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:B,data:S,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Loading data...")}},ve={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:B,data:[],emptyContent:"   "})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("No data available.")}},he={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(y,{columns:B,data:S,loading:!0,loadingContent:0}),o.jsx(y,{columns:B,data:[],emptyContent:0})]}),play:async({canvasElement:t})=>{const n=w(t).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},xe={render:()=>o.jsx(lo,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),await m.click(n);const g=e.getByRole("button",{name:"Issue sort descending"});await a(g).toBeDisabled(),await a(g.style.transform).toContain("translateY(0"),await a(g.style.boxShadow).toBe("none")}},fe={render:function(){const[e,n]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:D,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:B,data:S,defaultSortKey:"id",onSortChange:(r,g)=>n(`${r} ${g}`)})]})},play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByTestId("primary-pointer-sort-state");await m.click(n),await m.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(g).toHaveTextContent("id asc"),v.mouseDown(r,{button:0}),await P(()=>{a(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await P(()=>{a(r.style.transform).toContain("translateY(0")}),await a(g).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await P(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await P(()=>{a(r.style.transform).toContain("translateY(0")}),await a(g).toHaveTextContent("id asc"),await m.click(r),await a(g).toHaveTextContent("id desc")}},Se={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{ariaLabel:"Release checklist table",columns:B,data:S,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Be={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:B,data:S,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ke={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{caption:0,columns:B,data:S,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const n=w(t).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},Re={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(y,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:B,data:S,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const n=w(t).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},Te={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:S,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function uo(){const[t,e]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:D,children:["Active sort: ",o.jsx("strong",{style:Ve,children:t})]}),o.jsx(y,{columns:B,data:S,defaultSortKey:"id",onSortChange:(n,r)=>e(`${n} ${r}`)})]})}function mo(){const[t,e]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:D,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:D,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:Ve,children:t})]}),o.jsx(y,{columns:B,data:S,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>e(`${n} ${r}`)})]})}const He={render:()=>o.jsx(uo,{}),play:async({canvasElement:t})=>{const e=w(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await m.keyboard("{ArrowRight}");const g=e.getByRole("button",{name:"Component sort ascending"});await a(g).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await m.keyboard("{End}");const I=e.getByRole("button",{name:"Status sort ascending"});await a(I).toHaveFocus(),await m.keyboard("{Home}"),await a(r).toHaveFocus(),await m.keyboard("{PageDown}");const x=e.getByRole("button",{name:"Component sort ascending"});await a(x).toHaveFocus(),await m.keyboard("{PageUp}"),await a(r).toHaveFocus(),await m.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const N=e.getByRole("button",{name:"Issue sort ascending"}),j=N.closest("th");await a(j).toHaveAttribute("aria-sort","descending"),v.keyDown(N,{key:"Enter",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),N.focus(),v.keyDown(N,{key:"Space",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),await m.keyboard("{Space}"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const H=e.getByRole("button",{name:"Issue sort descending"});H.focus(),v.keyDown(H,{key:"ArrowRight",ctrlKey:!0}),v.keyDown(H,{key:"ArrowLeft",metaKey:!0}),v.keyDown(H,{key:"End",ctrlKey:!0}),v.keyDown(H,{key:"Home",altKey:!0}),v.keyDown(H,{key:"PageDown",metaKey:!0}),v.keyDown(H,{key:"PageUp",ctrlKey:!0}),await a(H).toHaveFocus(),v.keyDown(H,{key:"Enter",ctrlKey:!0}),v.keyDown(H,{key:"Space",metaKey:!0}),await a(e.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending");const M=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});M.preventDefault(),H.dispatchEvent(M),await a(e.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await m.keyboard("{Shift>}{Enter}{/Shift}"),await P(()=>{a(e.getByText("id desc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await m.keyboard("{Shift>}{Space}{/Shift}"),await P(()=>{a(e.getByText("id asc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","ascending")})}},De={render:()=>o.jsx(mo,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort descending"});n.focus(),v.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(e.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),v.keyDown(n,{key:"Enter"}),await a(e.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Ee={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:D,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(y,{columns:B,data:S,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});n.focus(),v.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),v.keyDown(n,{key:"ArrowRight",metaKey:!0}),v.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function yo(){const[t,e]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:D,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:D,children:["Active sort: ",o.jsx("strong",{style:Ve,children:t})]}),o.jsx(y,{columns:B,data:S,defaultSortKey:"id",onSortChange:(n,r)=>e(`${n} ${r}`)})]})}const Ce={render:()=>o.jsx(yo,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Rt(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Rt(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Tt(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Tt(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await m.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Ae={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:B,data:S,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"按降序排序：Issue"});await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await m.click(n),await a(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},Ie={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=e.getByRole("button",{name:"Release date sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},Le={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=e.getByRole("button",{name:"Release status sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ke={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=e.getByRole("button",{name:"Release status sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},je={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=e.getByRole("button",{name:"Column 1 sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Fe={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=e.getByRole("button",{name:"release stage ready sort descending"});await m.click(n),await a(e.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},We={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await m.click(n),await a(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Pe={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(p,{maxWidth:"min(100%, 620px)",children:o.jsx(y,{columns:t,data:S,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function po(){const[t,e]=d.useState(!1),n=d.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:D,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:D,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:Ve,children:t?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),o.jsx(y,{columns:n,data:S,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ne={render:()=>o.jsx(po,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await a(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await m.click(n),await a(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},ja=S.map(t=>({...t,note:""})),Fa=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>o.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Me={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:Fa,data:ja,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(n,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Oe={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:Fa,data:ja,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(n,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},wo=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],$e={render:()=>o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:D,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(y,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,n)=>`${t.key} (visual:${e}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:wo,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=w(t);await m.click(e.getByRole("button",{name:"Score sort descending"})),await a(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Ht,Dt,Et;re.parameters={...re.parameters,docs:{...(Ht=re.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Et=(Dt=re.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};var Ct,At,It;se.parameters={...se.parameters,docs:{...(Ct=se.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(It=(At=se.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Lt,Kt,jt;ie.parameters={...ie.parameters,docs:{...(Lt=ie.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(jt=(Kt=ie.parameters)==null?void 0:Kt.docs)==null?void 0:jt.source}}};var Ft,Wt,Pt;ce.parameters={...ce.parameters,docs:{...(Ft=ce.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Pt=(Wt=ce.parameters)==null?void 0:Wt.docs)==null?void 0:Pt.source}}};var Nt,Mt,Ot;le.parameters={...le.parameters,docs:{...(Nt=le.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ot=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};var $t,qt,zt;ue.parameters={...ue.parameters,docs:{...($t=ue.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(zt=(qt=ue.parameters)==null?void 0:qt.docs)==null?void 0:zt.source}}};var Vt,_t,Ut;de.parameters={...de.parameters,docs:{...(Vt=de.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ut=(_t=de.parameters)==null?void 0:_t.docs)==null?void 0:Ut.source}}};var Gt,Yt,Zt;me.parameters={...me.parameters,docs:{...(Gt=me.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Zt=(Yt=me.parameters)==null?void 0:Yt.docs)==null?void 0:Zt.source}}};var Jt,Qt,Xt;ye.parameters={...ye.parameters,docs:{...(Jt=ye.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=ye.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var en,tn,nn;pe.parameters={...pe.parameters,docs:{...(en=pe.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=pe.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,rn;we.parameters={...we.parameters,docs:{...(an=we.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(rn=(on=we.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var sn,cn,ln;be.parameters={...be.parameters,docs:{...(sn=be.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(cn=be.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var un,dn,mn;ge.parameters={...ge.parameters,docs:{...(un=ge.parameters)==null?void 0:un.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(mn=(dn=ge.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var yn,pn,wn;ve.parameters={...ve.parameters,docs:{...(yn=ve.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(wn=(pn=ve.parameters)==null?void 0:pn.docs)==null?void 0:wn.source}}};var bn,gn,vn;he.parameters={...he.parameters,docs:{...(bn=he.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(vn=(gn=he.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var hn,xn,fn;xe.parameters={...xe.parameters,docs:{...(hn=xe.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(fn=(xn=xe.parameters)==null?void 0:xn.docs)==null?void 0:fn.source}}};var Sn,Bn,kn;fe.parameters={...fe.parameters,docs:{...(Sn=fe.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(kn=(Bn=fe.parameters)==null?void 0:Bn.docs)==null?void 0:kn.source}}};var Rn,Tn,Hn;Se.parameters={...Se.parameters,docs:{...(Rn=Se.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Hn=(Tn=Se.parameters)==null?void 0:Tn.docs)==null?void 0:Hn.source}}};var Dn,En,Cn;Be.parameters={...Be.parameters,docs:{...(Dn=Be.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(Cn=(En=Be.parameters)==null?void 0:En.docs)==null?void 0:Cn.source}}};var An,In,Ln;ke.parameters={...ke.parameters,docs:{...(An=ke.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(Ln=(In=ke.parameters)==null?void 0:In.docs)==null?void 0:Ln.source}}};var Kn,jn,Fn;Re.parameters={...Re.parameters,docs:{...(Kn=Re.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Fn=(jn=Re.parameters)==null?void 0:jn.docs)==null?void 0:Fn.source}}};var Wn,Pn,Nn;Te.parameters={...Te.parameters,docs:{...(Wn=Te.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Nn=(Pn=Te.parameters)==null?void 0:Pn.docs)==null?void 0:Nn.source}}};var Mn,On,$n;He.parameters={...He.parameters,docs:{...(Mn=He.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...($n=(On=He.parameters)==null?void 0:On.docs)==null?void 0:$n.source}}};var qn,zn,Vn;De.parameters={...De.parameters,docs:{...(qn=De.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Vn=(zn=De.parameters)==null?void 0:zn.docs)==null?void 0:Vn.source}}};var _n,Un,Gn;Ee.parameters={...Ee.parameters,docs:{...(_n=Ee.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Gn=(Un=Ee.parameters)==null?void 0:Un.docs)==null?void 0:Gn.source}}};var Yn,Zn,Jn;Ce.parameters={...Ce.parameters,docs:{...(Yn=Ce.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(Jn=(Zn=Ce.parameters)==null?void 0:Zn.docs)==null?void 0:Jn.source}}};var Qn,Xn,ea;Ae.parameters={...Ae.parameters,docs:{...(Qn=Ae.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
}`,...(ea=(Xn=Ae.parameters)==null?void 0:Xn.docs)==null?void 0:ea.source}}};var ta,na,aa;Ie.parameters={...Ie.parameters,docs:{...(ta=Ie.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(aa=(na=Ie.parameters)==null?void 0:na.docs)==null?void 0:aa.source}}};var oa,ra,sa;Le.parameters={...Le.parameters,docs:{...(oa=Le.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(sa=(ra=Le.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ia,ca,la;Ke.parameters={...Ke.parameters,docs:{...(ia=Ke.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(la=(ca=Ke.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var ua,da,ma;je.parameters={...je.parameters,docs:{...(ua=je.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(ma=(da=je.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ya,pa,wa;Fe.parameters={...Fe.parameters,docs:{...(ya=Fe.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(wa=(pa=Fe.parameters)==null?void 0:pa.docs)==null?void 0:wa.source}}};var ba,ga,va;We.parameters={...We.parameters,docs:{...(ba=We.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=We.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,fa;Pe.parameters={...Pe.parameters,docs:{...(ha=Pe.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(fa=(xa=Pe.parameters)==null?void 0:xa.docs)==null?void 0:fa.source}}};var Sa,Ba,ka;Ne.parameters={...Ne.parameters,docs:{...(Sa=Ne.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(ka=(Ba=Ne.parameters)==null?void 0:Ba.docs)==null?void 0:ka.source}}};var Ra,Ta,Ha;Me.parameters={...Me.parameters,docs:{...(Ra=Me.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Ha=(Ta=Me.parameters)==null?void 0:Ta.docs)==null?void 0:Ha.source}}};var Da,Ea,Ca;Oe.parameters={...Oe.parameters,docs:{...(Da=Oe.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
}`,...(Ca=(Ea=Oe.parameters)==null?void 0:Ea.docs)==null?void 0:Ca.source}}};var Aa,Ia,La;$e.parameters={...$e.parameters,docs:{...(Aa=$e.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(La=(Ia=$e.parameters)==null?void 0:Ia.docs)==null?void 0:La.source}}};const Bo=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","ScrollContainerSkipsTabStopWithoutOverflow","RtlScrollContainerKeyboardPanning","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{Be as AccessibleNameFallback,Re as AccessibleNameLabelledByHeading,Se as AccessibleNameWithoutCaption,Ke as AriaLabelHeaderAutoSortLabel,ve as BlankEmptyContentFallback,je as BlankKeySortLabelFallback,ge as BlankLoadingContentFallback,Ne as DeferredColumnsDefaultSortRecovery,se as DescendingDefaultSortDirection,ce as EmptyState,Me as FallbackRowKeyStability,Ce as ImeCompositionGuard,Pe as InvalidDefaultSortKeyFallback,pe as KeyboardFocusRingAfterPointer,we as KeyboardFocusRingShiftTabReentry,de as KeyboardReachableScrollContainer,xe as LoadingDisablesResetsSortVisualState,be as LoadingState,Ae as LocalizedSortLabels,De as ManagedSortKeysPreemptedByLocalHandler,Fe as NormalizedKeySortLabelFallback,ke as NumericCaptionName,he as NumericFeedbackCopySemantics,fe as PrimaryPointerOnlySortPress,re as ReleaseChecklist,$e as RenderIndexSemantics,Le as RichTextHeaderAutoSortLabel,Te as RowHeaderSemantics,Ee as RtlArrowNavigation,ye as RtlScrollContainerKeyboardPanning,me as ScrollContainerSkipsTabStopWithoutOverflow,le as SingleRowSortDisabled,ue as SingleSortableColumnShortcutHints,Ie as SortLabelForCustomHeader,We as SortLabelledByPrecedence,He as SortTelemetry,Oe as SourceIndexRowKeyStability,ie as WithRowAction,Bo as __namedExportsOrder,So as default};
