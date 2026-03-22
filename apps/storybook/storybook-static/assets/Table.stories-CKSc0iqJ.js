import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as ja}from"./Button-rBVi27TD.js";import{r as d}from"./index-BWu4c2F4.js";import{B as Fa}from"./Badge-ZJmMstsz.js";import{within as b,expect as n,userEvent as m,fireEvent as g,waitFor as P}from"./index-DgAF9SIF.js";import{S as w,s as C,a as Ge}from"./storyShowcase-Bw5VyCj0.js";const ba="Enter Space",Wa=`${ba} Home End PageDown PageUp ArrowLeft ArrowRight`,Pa="ArrowLeft ArrowRight Home End PageDown PageUp",Na=48,$a=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),yt=400;function pt(t,e,a){if(!e)return null;const r=t.find(h=>String(h.key)===e);return r!=null&&r.sortable?{key:e,direction:a}:null}function wt(t,e,a){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const r=Ue(ze(t.header));return r.length>0?r:e}function bt(t,e){const a=t.trim();return a.length>0?a:e>=0?`Column ${e+1}`:"Column"}function y({columns:t,data:e,rowKey:a,caption:r,ariaLabel:h,ariaLabelledBy:N,loading:B=!1,loadingContent:F="Loading data...",emptyContent:A="No data available.",defaultSortKey:k,defaultSortDirection:$="asc",getSortAriaLabel:_e=gt,getSortStatusText:Ye=Ma,onSortChange:We}){var et;const Je=Fe(r),ha=Fe(F),xa=Fe(A),Sa=ha?F:"Loading data...",fa=xa?A:"No data available.",_=te(N),Qe=_?void 0:te(h,Je?void 0:"Data table"),M=d.useRef({}),G=d.useRef(null),Pe=d.useRef(null),Y=d.useRef(0),q=d.useRef(null),J=d.useRef(null),O=d.useRef(!0);d.useRef(null),d.useRef(null),d.useRef(null);const[Ba,Ne]=d.useState(null),[Ra,I]=d.useState(null),[ka,V]=d.useState(null),[Ta,$e]=d.useState(!1);d.useEffect(()=>{var c;const s=((c=G.current)==null?void 0:c.ownerDocument)??document,l=p=>{p.metaKey||p.altKey||p.ctrlKey||(O.current=!0)},u=p=>{"button"in p&&!Ve(p.button)||"ctrlKey"in p&&p.ctrlKey||(O.current=!1)};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",u,!0),s.addEventListener("mousedown",u,!0),s.addEventListener("touchstart",u,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",u,!0),s.removeEventListener("mousedown",u,!0),s.removeEventListener("touchstart",u,!0)}},[]);const Q=d.useCallback(()=>{Pe.current=null,Y.current=0,q.current!==null&&((J.current??window).clearTimeout(q.current),q.current=null),J.current=null},[]);d.useEffect(()=>()=>{Q()},[Q]);const[f,Me]=d.useState(()=>pt(t,k,$)),X=d.useMemo(()=>{const s=new Map;return t.map(l=>{const u=String(l.key),c=s.get(u)??0;return s.set(u,c+1),c===0?u:`${u}__duplicate-${c}`})},[t]),K=d.useMemo(()=>B||e.length<=1?[]:t.reduce((s,l,u)=>(l.sortable&&s.push(X[u]??`${String(l.key)}__index-${u}`),s),[]),[t,e.length,B,X]);d.useEffect(()=>{if(!f)return;const s=t.find(l=>String(l.key)===f.key);s!=null&&s.sortable||Me(null)},[t,f]),d.useEffect(()=>{if(f)return;const s=pt(t,k,$);s&&Me(s)},[t,$,k,f]);const qe=d.useMemo(()=>e.map((s,l)=>String(a?a(s,l):l)),[e,a]),Ha=d.useMemo(()=>{const s=new Map;return qe.map((l,u)=>{const c=s.get(l)??0;return s.set(l,c+1),c===0?l:`${l}__dup-${u}`})},[qe]);d.useEffect(()=>{},[a,qe]),d.useEffect(()=>{},[t]),d.useEffect(()=>{},[t]);const z=d.useMemo(()=>{const s=e.map((c,p)=>({row:c,sourceIndex:p}));if(!f)return s;const l=t.find(c=>String(c.key)===f.key);if(!(l!=null&&l.sortable))return s;const u=l.sortAccessor??(c=>{const p=c[String(l.key)];return p instanceof Date||typeof p=="number"||typeof p=="string"?p:String(p??"")});return s.sort((c,p)=>{const x=u(c.row),H=u(p.row);if(typeof x=="string"&&typeof H=="string"){const j=$a.compare(x,H);return j!==0?f.direction==="asc"?j:-j:c.sourceIndex-p.sourceIndex}const T=x instanceof Date?x.getTime():x,W=H instanceof Date?H.getTime():H;return T<W?f.direction==="asc"?-1:1:T>W?f.direction==="asc"?1:-1:c.sourceIndex-p.sourceIndex})},[t,e,f]),Xe=d.useMemo(()=>{var c;if(B||z.length<=1||!f)return"";const s=t.findIndex(p=>String(p.key)===f.key),l=s>=0?t[s]:void 0;if(!(l!=null&&l.sortable))return"";((c=G.current)==null?void 0:c.ownerDocument)??typeof document>"u";const u=wt(l,bt(f.key,s));return Ye({columnKey:f.key,columnHeader:u,direction:f.direction})},[t,Ye,B,f,z.length]),L=!B&&z.length>1&&t.some(s=>s.sortable),Ze=Math.max(t.length,1);return((et=G.current)==null?void 0:et.ownerDocument)??typeof document>"u",d.useEffect(()=>{L||(Ne(null),I(null),V(null))},[L]),d.useEffect(()=>{if(L){$e(!1);return}const s=G.current;if(!s){$e(!1);return}const l=s.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!l)return;const u=()=>{const p=s.scrollWidth-s.clientWidth>0;$e(x=>x===p?x:p)};u(),l.addEventListener("resize",u);let c=null;return typeof l.ResizeObserver=="function"&&(c=new l.ResizeObserver(u),c.observe(s)),()=>{l.removeEventListener("resize",u),c==null||c.disconnect()}},[t.length,e.length,L,B]),o.jsxs("div",{ref:G,"data-aurora-table-scroll-container":"",role:L?void 0:"region",tabIndex:L?void 0:0,"aria-label":L||_?void 0:Qe??"Data table scroll container","aria-labelledby":L?void 0:_,"aria-keyshortcuts":L||!Ta?void 0:Pa,onKeyDown:s=>{if(L||s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey||s.target!==s.currentTarget)return;const l=s.currentTarget,u=Math.max(0,l.scrollWidth-l.clientWidth);if(u<=0)return;const c=l.clientWidth,p=Math.max(Na,Math.floor(c*.3)),x=T=>{T!==0&&(s.preventDefault(),Va(l,T))},H=T=>{s.preventDefault(),za(l,T)};switch(s.key){case"ArrowRight":x(p);return;case"ArrowLeft":x(-p);return;case"PageDown":x(c);return;case"PageUp":x(-c);return;case"Home":H(0);return;case"End":H(u);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Xe?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Xe}):null,o.jsxs("table",{"aria-label":Qe,"aria-labelledby":_,"aria-busy":B||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[Je?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,o.jsx("thead",{children:o.jsx("tr",{children:t.map((s,l)=>{const u=String(s.key),c=X[l]??`${u}__index-${l}`,p=!!s.sortable,x=z.length>1,H=p&&(f==null?void 0:f.key)===u?f.direction:void 0,T=!B&&x?H:void 0,W=T?T==="asc"?"ascending":"descending":void 0,j=s.align??"left",tt=wt(s,bt(u,l)),Z=H==="asc"?"desc":"asc",Da=_e({columnKey:u,columnHeader:tt,nextDirection:Z}),nt=te(s.sortLabelledBy),Ea=nt?void 0:te(Da,gt({columnHeader:tt,nextDirection:Z})),E=B||!x,Aa=E?void 0:K.length>1?Wa:ba,at=!E&&Ba===c,ot=!E&&Ra===c,rt=!E&&ka===c,Ca=at||rt,st=()=>{E||(Me({key:u,direction:Z}),We==null||We(u,Z))};return o.jsx("th",{scope:"col","aria-sort":W,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:p?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:i=>{M.current[c]=i},"aria-labelledby":nt,"aria-label":Ea,"aria-keyshortcuts":Aa,disabled:E,onClick:i=>{const R=Date.now()-Y.current,ee=i.detail===0&&Pe.current===c&&Y.current>0&&R<=yt;Q(),!ee&&st()},onMouseEnter:()=>{E||Ne(c)},onMouseLeave:()=>{Ne(i=>i===c?null:i),I(i=>i===c?null:i)},onPointerDown:i=>{E||i.ctrlKey||Ve(i.button)&&(O.current=!1,V(R=>R===c?null:R),I(c))},onPointerUp:i=>{Ve(i.button)&&I(R=>R===c?null:R)},onMouseDown:i=>{E||i.button!==0||i.ctrlKey||(O.current=!1,V(R=>R===c?null:R),I(c))},onMouseUp:i=>{i.button===0&&I(R=>R===c?null:R)},onPointerCancel:()=>{I(i=>i===c?null:i)},onFocus:()=>{if(E){V(i=>i===c?null:i);return}V(i=>Oa(M.current[c],O.current)?c:i===c?null:i)},onBlur:()=>{V(i=>i===c?null:i),I(i=>i===c?null:i)},onKeyDown:i=>{var ee,it,ct,lt,ut;if(O.current=!0,i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey)return;if(i.key==="Home"){const D=K[0];if(!D)return;i.preventDefault(),(ee=M.current[D])==null||ee.focus();return}if(i.key==="End"){const D=K[K.length-1];if(!D)return;i.preventDefault(),(it=M.current[D])==null||it.focus();return}if(i.key==="PageDown"||i.key==="PageUp"){const D=K.indexOf(c);if(D<0)return;const dt=i.key==="PageDown"?1:-1,U=Math.max(0,Math.min(K.length-1,D+dt));if(U===D)return;i.preventDefault();const Oe=K[U];(ct=M.current[Oe])==null||ct.focus();return}if(i.key==="ArrowLeft"||i.key==="ArrowRight"){const D=K.indexOf(c);if(D<0)return;const U=(i.currentTarget.ownerDocument.defaultView??window).getComputedStyle(i.currentTarget).direction,Oe=(lt=i.currentTarget.closest("[dir]"))==null?void 0:lt.getAttribute("dir"),Ia=(U==="rtl"||U==="ltr"?U:Oe==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",Ka=i.key===Ia?1:-1,mt=Math.max(0,Math.min(K.length-1,D+Ka));if(mt===D)return;i.preventDefault();const La=K[mt];(ut=M.current[La])==null||ut.focus();return}if(!vt(i.key)||qa(i)||(i.preventDefault(),i.repeat))return;I(c),Pe.current=c,Y.current=Date.now();const R=i.currentTarget.ownerDocument.defaultView??window;q.current!==null&&(J.current??R).clearTimeout(q.current),J.current=R,q.current=R.setTimeout(()=>{Q()},yt),st()},onKeyUp:i=>{i.altKey||i.ctrlKey||i.metaKey||vt(i.key)&&I(R=>R===c?null:R)},style:{border:Ca?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ot?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":at?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:E?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:E?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:rt?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ot?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,o.jsx("span",{"aria-hidden":"true",children:T==="asc"?"▲":T==="desc"?"▼":"↕"})]}):s.header},c)})})}),o.jsx("tbody",{children:B?o.jsx("tr",{children:o.jsx("td",{colSpan:Ze,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Sa})})}):z.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:Ze,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:fa})})}):z.map((s,l)=>{const u=s.row,c=String(s.sourceIndex),p=Ha[s.sourceIndex]??c;return o.jsx("tr",{style:{background:l%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((x,H)=>{const T=x.render?x.render(u,l,s.sourceIndex):String(u[String(x.key)]??""),W=X[H]??`${String(x.key)}__index-${H}`,j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:x.align??"left"};return x.rowHeader?o.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:T},W):o.jsx("td",{style:j,children:T},W)})},p)})})]})]})}function gt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Ma({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function vt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function qa(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ve(t){return typeof t!="number"||t<=0}function Oa(t,e){if(!t)return e;try{return t.matches(":focus-visible")||e}catch{return e}}function Fe(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>Fe(e)):d.isValidElement(t)}function ze(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Ue(t.map(a=>ze(a)).filter(a=>a.length>0).join(" "));if(!d.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const a=Ue(e["aria-label"]);if(a.length>0)return a}return ze(e.children)}function Ue(t){return t.replace(/\s+/g," ").trim()}function te(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function Va(t,e){if(typeof t.scrollBy=="function"){t.scrollBy({left:e,behavior:"auto"});return}t.scrollLeft+=e}function za(t,e){if(typeof t.scrollTo=="function"){t.scrollTo({left:e,behavior:"auto"});return}t.scrollLeft=e}y.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return o.jsx(Fa,{tone:e,children:t.status})}}];function ht(t,e){const a=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(a,"isComposing",{value:!0}),Object.defineProperty(a,"keyCode",{value:229}),t.dispatchEvent(a)}function xt(t,e){const a=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(a,"keyCode",{value:229}),t.dispatchEvent(a)}function Ua(){const[t,e]=d.useState(!1);return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>e(a=>!a),children:"Toggle loading"}),o.jsx(y,{columns:S,data:v,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const oo={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},ne={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id"})})},ae={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(a).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},oe={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>o.jsx(ja,{size:"sm",variant:"outline",onClick:a=>a.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return o.jsx(y,{columns:t,data:v,rowKey:e=>e.id})}},re={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(a).toBeDisabled(),await n(a).not.toHaveAttribute("aria-keyshortcuts")}},se={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("columnheader",{name:/Issue/});await n(a).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},ie={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Issue sort descending"});await n(a).toHaveAttribute("aria-keyshortcuts","Enter Space"),a.focus(),await m.keyboard("{ArrowRight}"),await n(a).toHaveFocus(),await n(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},ce={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:C,children:"When sortable controls are unavailable, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),a=t.querySelector("[data-aurora-table-scroll-container]");await n(a).not.toBeNull(),await n(a).toHaveAttribute("role","region"),await n(a).toHaveAttribute("tabindex","0");const r=(a==null?void 0:a.ownerDocument.defaultView)??window;let h=0;Object.defineProperty(a,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(a,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(a,"scrollLeft",{configurable:!0,get:()=>h,set:B=>{h=B}}),Object.defineProperty(a,"scrollBy",{configurable:!0,value:({left:B=0})=>{h+=Number(B)||0}}),Object.defineProperty(a,"scrollTo",{configurable:!0,value:({left:B=0})=>{h=Number(B)||0}}),g(r,new r.Event("resize")),await P(()=>{n(a).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await m.tab(),await n(a).toHaveFocus(),g.keyDown(a,{key:"ArrowRight"}),await n(a.scrollLeft).toBeGreaterThan(0),g.keyDown(a,{key:"Home"}),await n(a.scrollLeft).toBe(0);const N=B=>B.preventDefault();a.addEventListener("keydown",N,!0),g.keyDown(a,{key:"ArrowRight"}),await n(a.scrollLeft).toBe(0),a.removeEventListener("keydown",N,!0),await m.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},le={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),r.focus(),await m.click(a),await m.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},ue={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});g.mouseDown(a),a.focus(),await m.click(r),await m.tab({shift:!0}),await n(a).toHaveFocus(),await n(a.style.boxShadow).toContain("0 0 0 3px")}},de={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByRole("columnheader",{name:/Issue/});await n(a).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(h).not.toHaveAttribute("aria-sort")}},me={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Loading data...")}},ye={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:[],emptyContent:"   "})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("No data available.")}},pe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(y,{columns:S,data:v,loading:!0,loadingContent:0}),o.jsx(y,{columns:S,data:[],emptyContent:0})]}),play:async({canvasElement:t})=>{const a=b(t).getAllByRole("status");await n(a).toHaveLength(2),await n(a[0]).toHaveTextContent("0"),await n(a[1]).toHaveTextContent("0")}},we={render:()=>o.jsx(Ua,{}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),await m.click(a);const h=e.getByRole("button",{name:"Issue sort descending"});await n(h).toBeDisabled(),await n(h.style.transform).toContain("translateY(0"),await n(h.style.boxShadow).toBe("none")}},be={render:function(){const[e,a]=d.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:C,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id",onSortChange:(r,h)=>a(`${r} ${h}`)})]})},play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByTestId("primary-pointer-sort-state");await m.click(a),await m.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),g.mouseDown(r,{button:2}),g.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(h).toHaveTextContent("id asc"),g.mouseDown(r,{button:0}),await P(()=>{n(r.style.transform).toContain("translateY(1px)")}),g.pointerCancel(r),await P(()=>{n(r.style.transform).toContain("translateY(0")}),await n(h).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await P(()=>{n(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await P(()=>{n(r.style.transform).toContain("translateY(0")}),await n(h).toHaveTextContent("id asc"),await m.click(r),await n(h).toHaveTextContent("id desc")}},ge={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{ariaLabel:"Release checklist table",columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ve={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},he={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{caption:0,columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const a=b(t).getByRole("table",{name:"0"});await n(a).not.toHaveAttribute("aria-label")}},xe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(y,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:v,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const a=b(t).getByRole("table",{name:"Release board metrics"});await n(a).toHaveAttribute("aria-labelledby","release-board-heading"),await n(a).not.toHaveAttribute("aria-label")}},Se={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Ga(){const[t,e]=d.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:C,children:["Active sort: ",o.jsx("strong",{style:Ge,children:t})]}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id",onSortChange:(a,r)=>e(`${a} ${r}`)})]})}const fe={render:()=>o.jsx(Ga,{}),play:async({canvasElement:t})=>{const e=b(t),a=t.querySelector("[data-aurora-table-scroll-container]");await n(a).not.toBeNull(),await n(a).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await m.keyboard("{ArrowRight}");const h=e.getByRole("button",{name:"Component sort ascending"});await n(h).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await m.keyboard("{End}");const N=e.getByRole("button",{name:"Status sort ascending"});await n(N).toHaveFocus(),await m.keyboard("{Home}"),await n(r).toHaveFocus(),await m.keyboard("{PageDown}");const B=e.getByRole("button",{name:"Component sort ascending"});await n(B).toHaveFocus(),await m.keyboard("{PageUp}"),await n(r).toHaveFocus(),await m.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const F=e.getByRole("button",{name:"Issue sort ascending"}),A=F.closest("th");await n(A).toHaveAttribute("aria-sort","descending"),g.keyDown(F,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","descending"),F.focus(),g.keyDown(F,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","descending"),await m.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const k=e.getByRole("button",{name:"Issue sort descending"});k.focus(),g.keyDown(k,{key:"ArrowRight",ctrlKey:!0}),g.keyDown(k,{key:"ArrowLeft",metaKey:!0}),g.keyDown(k,{key:"End",ctrlKey:!0}),g.keyDown(k,{key:"Home",altKey:!0}),g.keyDown(k,{key:"PageDown",metaKey:!0}),g.keyDown(k,{key:"PageUp",ctrlKey:!0}),await n(k).toHaveFocus(),g.keyDown(k,{key:"Enter",ctrlKey:!0}),g.keyDown(k,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","ascending");const $=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});$.preventDefault(),k.dispatchEvent($),await n(e.getByText("id asc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","ascending"),await m.keyboard("{Shift>}{Enter}{/Shift}"),await P(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(A).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await m.keyboard("{Shift>}{Space}{/Shift}"),await P(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(A).toHaveAttribute("aria-sort","ascending")})}},Be={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:C,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(y,{columns:S,data:v,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});a.focus(),g.keyDown(a,{key:"ArrowLeft",ctrlKey:!0}),g.keyDown(a,{key:"ArrowRight",metaKey:!0}),g.keyDown(a,{key:"ArrowLeft",altKey:!0}),await n(a).toHaveFocus(),await m.keyboard("{ArrowRight}"),await n(a).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await m.keyboard("{ArrowRight}"),await n(a).toHaveFocus()}};function _a(){const[t,e]=d.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:C,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:C,children:["Active sort: ",o.jsx("strong",{style:Ge,children:t})]}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id",onSortChange:(a,r)=>e(`${a} ${r}`)})]})}const Re={render:()=>o.jsx(_a,{}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(a).toHaveAttribute("aria-sort","ascending"),ht(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(a).toHaveAttribute("aria-sort","ascending"),ht(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(a).toHaveAttribute("aria-sort","ascending"),xt(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(a).toHaveAttribute("aria-sort","ascending"),xt(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(a).toHaveAttribute("aria-sort","ascending"),r.focus(),await m.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(a).toHaveAttribute("aria-sort","descending")}},ke={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await m.click(a),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},Te={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const a=e.getByRole("button",{name:"Release date sort descending"});await m.click(a),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},He={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const a=e.getByRole("button",{name:"Release status sort descending"});await m.click(a),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},De={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const a=e.getByRole("button",{name:"Release status sort descending"});await m.click(a),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ee={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const a=e.getByRole("button",{name:"Column 1 sort descending"});await m.click(a),await n(e.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Ae={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Release status"});await n(a).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await n(a).not.toHaveAttribute("aria-label"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await m.click(a),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Ce={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(w,{maxWidth:"min(100%, 620px)",children:o.jsx(y,{columns:t,data:v,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(a).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Ya(){const[t,e]=d.useState(!1),a=d.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:C,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:C,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:Ge,children:t?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),o.jsx(y,{columns:a,data:v,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ie={render:()=>o.jsx(Ya,{}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await m.click(a),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},ga=v.map(t=>({...t,note:""})),va=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>o.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Ke={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:va,data:ga,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(a,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Le={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:va,data:ga,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=b(t),a=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(a,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ja=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],je={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:C,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(y,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,a)=>`${t.key} (visual:${e}, source:${a})`},{key:"score",header:"Score",sortable:!0}],data:Ja,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=b(t);await m.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var St,ft,Bt;ne.parameters={...ne.parameters,docs:{...(St=ne.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Bt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:Bt.source}}};var Rt,kt,Tt;ae.parameters={...ae.parameters,docs:{...(Rt=ae.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Tt=(kt=ae.parameters)==null?void 0:kt.docs)==null?void 0:Tt.source}}};var Ht,Dt,Et;oe.parameters={...oe.parameters,docs:{...(Ht=oe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Et=(Dt=oe.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};var At,Ct,It;re.parameters={...re.parameters,docs:{...(At=re.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(It=(Ct=re.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};var Kt,Lt,jt;se.parameters={...se.parameters,docs:{...(Kt=se.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(jt=(Lt=se.parameters)==null?void 0:Lt.docs)==null?void 0:jt.source}}};var Ft,Wt,Pt;ie.parameters={...ie.parameters,docs:{...(Ft=ie.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Pt=(Wt=ie.parameters)==null?void 0:Wt.docs)==null?void 0:Pt.source}}};var Nt,$t,Mt;ce.parameters={...ce.parameters,docs:{...(Nt=ce.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        When sortable controls are unavailable, focus the scroll region and use Arrow/Home/End/Page
        keys to pan overflowed columns.
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
    await expect(scrollContainer).toHaveAttribute("role", "region");
    await expect(scrollContainer).toHaveAttribute("tabindex", "0");
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
}`,...(Mt=($t=ce.parameters)==null?void 0:$t.docs)==null?void 0:Mt.source}}};var qt,Ot,Vt;le.parameters={...le.parameters,docs:{...(qt=le.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Ot=le.parameters)==null?void 0:Ot.docs)==null?void 0:Vt.source}}};var zt,Ut,Gt;ue.parameters={...ue.parameters,docs:{...(zt=ue.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Gt=(Ut=ue.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var _t,Yt,Jt;de.parameters={...de.parameters,docs:{...(_t=de.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Jt=(Yt=de.parameters)==null?void 0:Yt.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;me.parameters={...me.parameters,docs:{...(Qt=me.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(Zt=(Xt=me.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var en,tn,nn;ye.parameters={...ye.parameters,docs:{...(en=ye.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(nn=(tn=ye.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,rn;pe.parameters={...pe.parameters,docs:{...(an=pe.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(rn=(on=pe.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var sn,cn,ln;we.parameters={...we.parameters,docs:{...(sn=we.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(cn=we.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var un,dn,mn;be.parameters={...be.parameters,docs:{...(un=be.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(dn=be.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var yn,pn,wn;ge.parameters={...ge.parameters,docs:{...(yn=ge.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(wn=(pn=ge.parameters)==null?void 0:pn.docs)==null?void 0:wn.source}}};var bn,gn,vn;ve.parameters={...ve.parameters,docs:{...(bn=ve.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(vn=(gn=ve.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var hn,xn,Sn;he.parameters={...he.parameters,docs:{...(hn=he.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(Sn=(xn=he.parameters)==null?void 0:xn.docs)==null?void 0:Sn.source}}};var fn,Bn,Rn;xe.parameters={...xe.parameters,docs:{...(fn=xe.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(Rn=(Bn=xe.parameters)==null?void 0:Bn.docs)==null?void 0:Rn.source}}};var kn,Tn,Hn;Se.parameters={...Se.parameters,docs:{...(kn=Se.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(Hn=(Tn=Se.parameters)==null?void 0:Tn.docs)==null?void 0:Hn.source}}};var Dn,En,An;fe.parameters={...fe.parameters,docs:{...(Dn=fe.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(An=(En=fe.parameters)==null?void 0:En.docs)==null?void 0:An.source}}};var Cn,In,Kn;Be.parameters={...Be.parameters,docs:{...(Cn=Be.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Kn=(In=Be.parameters)==null?void 0:In.docs)==null?void 0:Kn.source}}};var Ln,jn,Fn;Re.parameters={...Re.parameters,docs:{...(Ln=Re.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(Fn=(jn=Re.parameters)==null?void 0:jn.docs)==null?void 0:Fn.source}}};var Wn,Pn,Nn;ke.parameters={...ke.parameters,docs:{...(Wn=ke.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Nn=(Pn=ke.parameters)==null?void 0:Pn.docs)==null?void 0:Nn.source}}};var $n,Mn,qn;Te.parameters={...Te.parameters,docs:{...($n=Te.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(qn=(Mn=Te.parameters)==null?void 0:Mn.docs)==null?void 0:qn.source}}};var On,Vn,zn;He.parameters={...He.parameters,docs:{...(On=He.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(zn=(Vn=He.parameters)==null?void 0:Vn.docs)==null?void 0:zn.source}}};var Un,Gn,_n;De.parameters={...De.parameters,docs:{...(Un=De.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(_n=(Gn=De.parameters)==null?void 0:Gn.docs)==null?void 0:_n.source}}};var Yn,Jn,Qn;Ee.parameters={...Ee.parameters,docs:{...(Yn=Ee.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(Qn=(Jn=Ee.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Xn,Zn,ea;Ae.parameters={...Ae.parameters,docs:{...(Xn=Ae.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(ea=(Zn=Ae.parameters)==null?void 0:Zn.docs)==null?void 0:ea.source}}};var ta,na,aa;Ce.parameters={...Ce.parameters,docs:{...(ta=Ce.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(aa=(na=Ce.parameters)==null?void 0:na.docs)==null?void 0:aa.source}}};var oa,ra,sa;Ie.parameters={...Ie.parameters,docs:{...(oa=Ie.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(sa=(ra=Ie.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ia,ca,la;Ke.parameters={...Ke.parameters,docs:{...(ia=Ke.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(la=(ca=Ke.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var ua,da,ma;Le.parameters={...Le.parameters,docs:{...(ua=Le.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(ma=(da=Le.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ya,pa,wa;je.parameters={...je.parameters,docs:{...(ya=je.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(wa=(pa=je.parameters)==null?void 0:pa.docs)==null?void 0:wa.source}}};const ro=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ve as AccessibleNameFallback,xe as AccessibleNameLabelledByHeading,ge as AccessibleNameWithoutCaption,De as AriaLabelHeaderAutoSortLabel,ye as BlankEmptyContentFallback,Ee as BlankKeySortLabelFallback,me as BlankLoadingContentFallback,Ie as DeferredColumnsDefaultSortRecovery,ae as DescendingDefaultSortDirection,re as EmptyState,Ke as FallbackRowKeyStability,Re as ImeCompositionGuard,Ce as InvalidDefaultSortKeyFallback,le as KeyboardFocusRingAfterPointer,ue as KeyboardFocusRingShiftTabReentry,ce as KeyboardReachableScrollContainer,we as LoadingDisablesResetsSortVisualState,de as LoadingState,ke as LocalizedSortLabels,he as NumericCaptionName,pe as NumericFeedbackCopySemantics,be as PrimaryPointerOnlySortPress,ne as ReleaseChecklist,je as RenderIndexSemantics,He as RichTextHeaderAutoSortLabel,Se as RowHeaderSemantics,Be as RtlArrowNavigation,se as SingleRowSortDisabled,ie as SingleSortableColumnShortcutHints,Te as SortLabelForCustomHeader,Ae as SortLabelledByPrecedence,fe as SortTelemetry,Le as SourceIndexRowKeyStability,oe as WithRowAction,ro as __namedExportsOrder,oo as default};
