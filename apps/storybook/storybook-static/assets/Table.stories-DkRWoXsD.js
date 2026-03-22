import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as _a}from"./Button-B21ouHNm.js";import{r as d}from"./index-BWu4c2F4.js";import{B as Ua}from"./Badge-ZJmMstsz.js";import{within as w,expect as a,userEvent as m,fireEvent as v,waitFor as N}from"./index-DgAF9SIF.js";import{S as p,s as D,a as Me}from"./storyShowcase-DlKirntE.js";const Da="Enter Space",Ga=`${Da} Home End PageDown PageUp ArrowLeft ArrowRight`,Ya="ArrowLeft ArrowRight Home End PageDown PageUp",Za=48,Ja=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),wt=400;function bt(t,e,n){if(!e)return null;const r=t.find(g=>String(g.key)===e);return r!=null&&r.sortable?{key:e,direction:n}:null}function gt(t,e,n){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const r=Ne(Je(t.header));return r.length>0?r:e}function vt(t,e){const n=Ne(t.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:e>=0?`Column ${e+1}`:"Column"}function y({columns:t,data:e,rowKey:n,caption:r,ariaLabel:g,ariaLabelledBy:W,loading:h=!1,loadingContent:P="Loading data...",emptyContent:I="No data available.",defaultSortKey:k,defaultSortDirection:M="asc",getSortAriaLabel:Qe=ht,getSortStatusText:Xe=Qa,onSortKeyDown:Oe,onSortChange:$e}){const et=Pe(r),Aa=Pe(P),Ia=Pe(I),La=Aa?P:"Loading data...",Ka=Ia?I:"No data available.",_=ee(W),tt=_?void 0:ee(g,et?void 0:"Data table"),O=d.useRef({}),qe=d.useRef(null),ze=d.useRef(null),U=d.useRef(0),$=d.useRef(null),G=d.useRef(null),q=d.useRef(!0);d.useRef(null),d.useRef(null),d.useRef(null);const[ja,Ve]=d.useState(null),[Fa,L]=d.useState(null),[Wa,z]=d.useState(null),[Pa,_e]=d.useState(!1);d.useEffect(()=>{var c;const s=((c=qe.current)==null?void 0:c.ownerDocument)??document,l=b=>{b.metaKey||b.altKey||b.ctrlKey||(q.current=!0)},u=b=>{"button"in b&&!Ze(b.button)||"ctrlKey"in b&&b.ctrlKey||(q.current=!1)};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",u,!0),s.addEventListener("mousedown",u,!0),s.addEventListener("touchstart",u,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",u,!0),s.removeEventListener("mousedown",u,!0),s.removeEventListener("touchstart",u,!0)}},[]);const Y=d.useCallback(()=>{ze.current=null,U.current=0,$.current!==null&&((G.current??window).clearTimeout($.current),$.current=null),G.current=null},[]);d.useEffect(()=>()=>{Y()},[Y]);const[B,Ue]=d.useState(()=>bt(t,k,M)),Z=d.useMemo(()=>{const s=new Map;return t.map(l=>{const u=String(l.key),c=s.get(u)??0;return s.set(u,c+1),c===0?u:`${u}__duplicate-${c}`})},[t]),K=d.useMemo(()=>h||e.length<=1?[]:t.reduce((s,l,u)=>(l.sortable&&s.push(Z[u]??`${String(l.key)}__index-${u}`),s),[]),[t,e.length,h,Z]);d.useEffect(()=>{if(!B)return;const s=t.find(l=>String(l.key)===B.key);s!=null&&s.sortable||Ue(null)},[t,B]),d.useEffect(()=>{if(B)return;const s=bt(t,k,M);s&&Ue(s)},[t,M,k,B]);const Ge=d.useMemo(()=>e.map((s,l)=>String(n?n(s,l):l)),[e,n]),Na=d.useMemo(()=>{const s=new Map;return Ge.map((l,u)=>{const c=s.get(l)??0;return s.set(l,c+1),c===0?l:`${l}__dup-${u}`})},[Ge]);d.useEffect(()=>{},[n,Ge]),d.useEffect(()=>{},[t]),d.useEffect(()=>{},[t]);const V=d.useMemo(()=>{const s=e.map((c,b)=>({row:c,sourceIndex:b}));if(!B)return s;const l=t.find(c=>String(c.key)===B.key);if(!(l!=null&&l.sortable))return s;const u=l.sortAccessor??(c=>{const b=c[String(l.key)];return b instanceof Date||typeof b=="number"||typeof b=="string"?b:String(b??"")});return s.sort((c,b)=>{const S=u(c.row),E=u(b.row);if(typeof S=="string"&&typeof E=="string"){const C=Ja.compare(S,E);return C!==0?B.direction==="asc"?C:-C:c.sourceIndex-b.sourceIndex}const T=S instanceof Date?S.getTime():S,F=E instanceof Date?E.getTime():E;return T<F?B.direction==="asc"?-1:1:T>F?B.direction==="asc"?1:-1:c.sourceIndex-b.sourceIndex})},[t,e,B]),Ma=typeof document>"u"?void 0:document,nt=d.useMemo(()=>{if(h||V.length<=1||!B)return"";const s=t.findIndex(c=>String(c.key)===B.key),l=s>=0?t[s]:void 0;if(!(l!=null&&l.sortable))return"";const u=gt(l,vt(B.key,s));return Xe({columnKey:B.key,columnHeader:u,direction:B.direction})},[t,Xe,h,Ma,B,V.length]),j=!h&&V.length>1&&t.some(s=>s.sortable),at=Math.max(t.length,1);return d.useEffect(()=>{j||(Ve(null),L(null),z(null))},[j]),d.useEffect(()=>{if(j){_e(!1);return}const s=qe.current;if(!s){_e(!1);return}const l=s.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!l)return;const u=()=>{const b=s.scrollWidth-s.clientWidth>0;_e(S=>S===b?S:b)};u(),l.addEventListener("resize",u);let c=null;return typeof l.ResizeObserver=="function"&&(c=new l.ResizeObserver(u),c.observe(s)),()=>{l.removeEventListener("resize",u),c==null||c.disconnect()}},[t.length,e.length,j,h]),o.jsxs("div",{ref:qe,"data-aurora-table-scroll-container":"",role:j?void 0:"region",tabIndex:j?void 0:0,"aria-label":j||_?void 0:tt??"Data table scroll container","aria-labelledby":j?void 0:_,"aria-keyshortcuts":j||!Pa?void 0:Ya,onKeyDown:s=>{if(j||s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey||s.target!==s.currentTarget)return;const l=s.currentTarget,u=Math.max(0,l.scrollWidth-l.clientWidth);if(u<=0)return;const c=l.clientWidth,b=Math.max(Za,Math.floor(c*.3)),S=ft(l),E=S==="rtl"?"ArrowLeft":"ArrowRight",T=C=>{C!==0&&(s.preventDefault(),to(l,C))},F=C=>{s.preventDefault(),no(l,C)};switch(s.key){case"ArrowLeft":case"ArrowRight":T(s.key===E?b:-b);return;case"PageDown":T(c);return;case"PageUp":T(-c);return;case"Home":F(S==="rtl"?u:0);return;case"End":F(S==="rtl"?0:u);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[nt?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:nt}):null,o.jsxs("table",{"aria-label":tt,"aria-labelledby":_,"aria-busy":h||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[et?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,o.jsx("thead",{children:o.jsx("tr",{children:t.map((s,l)=>{const u=String(s.key),c=Z[l]??`${u}__index-${l}`,b=!!s.sortable,S=V.length>1,E=b&&(B==null?void 0:B.key)===u?B.direction:void 0,T=!h&&S?E:void 0,F=T?T==="asc"?"ascending":"descending":void 0,C=s.align??"left",ot=gt(s,vt(u,l)),J=E==="asc"?"desc":"asc",Oa=Qe({columnKey:u,columnHeader:ot,nextDirection:J}),rt=ee(s.sortLabelledBy),$a=rt?void 0:ee(Oa,ht({columnHeader:ot,nextDirection:J})),A=h||!S,qa=A?void 0:K.length>1?Ga:Da,st=!A&&ja===c,it=!A&&Fa===c,ct=!A&&Wa===c,za=st||ct,lt=()=>{A||(Ue({key:u,direction:J}),$e==null||$e(u,J))};return o.jsx("th",{scope:"col","aria-sort":F,style:{textAlign:C,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:b?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:i=>{O.current[c]=i},"aria-labelledby":rt,"aria-label":$a,"aria-keyshortcuts":qa,disabled:A,onClick:i=>{const R=Date.now()-U.current,Q=i.detail===0&&ze.current===c&&U.current>0&&R<=wt;Y(),!Q&&lt()},onMouseEnter:()=>{A||Ve(c)},onMouseLeave:()=>{Ve(i=>i===c?null:i),L(i=>i===c?null:i)},onPointerDown:i=>{A||i.ctrlKey||Ze(i.button)&&(q.current=!1,z(R=>R===c?null:R),L(c))},onPointerUp:i=>{Ze(i.button)&&L(R=>R===c?null:R)},onMouseDown:i=>{A||i.button!==0||i.ctrlKey||(q.current=!1,z(R=>R===c?null:R),L(c))},onMouseUp:i=>{i.button===0&&L(R=>R===c?null:R)},onPointerCancel:()=>{L(i=>i===c?null:i)},onFocus:()=>{if(A){z(i=>i===c?null:i);return}z(i=>eo(O.current[c],q.current)?c:i===c?null:i)},onBlur:()=>{z(i=>i===c?null:i),L(i=>i===c?null:i)},onKeyDown:i=>{var Q,ut,dt,mt;if(q.current=!0,Oe==null||Oe(i),i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey)return;if(i.key==="Home"){const H=K[0];if(!H)return;i.preventDefault(),(Q=O.current[H])==null||Q.focus();return}if(i.key==="End"){const H=K[K.length-1];if(!H)return;i.preventDefault(),(ut=O.current[H])==null||ut.focus();return}if(i.key==="PageDown"||i.key==="PageUp"){const H=K.indexOf(c);if(H<0)return;const yt=i.key==="PageDown"?1:-1,X=Math.max(0,Math.min(K.length-1,H+yt));if(X===H)return;i.preventDefault();const Ye=K[X];(dt=O.current[Ye])==null||dt.focus();return}if(i.key==="ArrowLeft"||i.key==="ArrowRight"){const H=K.indexOf(c);if(H<0)return;const X=ft(i.currentTarget)==="rtl"?"ArrowLeft":"ArrowRight",Ye=i.key===X?1:-1,pt=Math.max(0,Math.min(K.length-1,H+Ye));if(pt===H)return;i.preventDefault();const Va=K[pt];(mt=O.current[Va])==null||mt.focus();return}if(!xt(i.key)||Xa(i)||(i.preventDefault(),i.repeat))return;L(c),ze.current=c,U.current=Date.now();const R=i.currentTarget.ownerDocument.defaultView??window;$.current!==null&&(G.current??R).clearTimeout($.current),G.current=R,$.current=R.setTimeout(()=>{Y()},wt),lt()},onKeyUp:i=>{i.altKey||i.ctrlKey||i.metaKey||xt(i.key)&&L(R=>R===c?null:R)},style:{border:za?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:it?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":st?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:A?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:A?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ct?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:it?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,o.jsx("span",{"aria-hidden":"true",children:T==="asc"?"▲":T==="desc"?"▼":"↕"})]}):s.header},c)})})}),o.jsx("tbody",{children:h?o.jsx("tr",{children:o.jsx("td",{colSpan:at,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:La})})}):V.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:at,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Ka})})}):V.map((s,l)=>{const u=s.row,c=String(s.sourceIndex),b=Na[s.sourceIndex]??c;return o.jsx("tr",{style:{background:l%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((S,E)=>{const T=S.render?S.render(u,l,s.sourceIndex):String(u[String(S.key)]??""),F=Z[E]??`${String(S.key)}__index-${E}`,C={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:S.align??"left"};return S.rowHeader?o.jsx("th",{scope:"row",style:{...C,fontWeight:"var(--aurora-font-weight-medium)"},children:T},F):o.jsx("td",{style:C,children:T},F)})},b)})})]})]})}function ht({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Qa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function xt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Xa(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ze(t){return typeof t!="number"||t<=0}function eo(t,e){if(!t)return e;try{return t.matches(":focus-visible")||e}catch{return e}}function ft(t){var g;const n=(t.ownerDocument.defaultView??window).getComputedStyle(t).direction;return n==="rtl"||n==="ltr"?n:((g=t.closest("[dir]"))==null?void 0:g.getAttribute("dir"))==="rtl"?"rtl":"ltr"}function Pe(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>Pe(e)):d.isValidElement(t)}function Je(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Ne(t.map(n=>Je(n)).filter(n=>n.length>0).join(" "));if(!d.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const n=Ne(e["aria-label"]);if(n.length>0)return n}return Je(e.children)}function Ne(t){return t.replace(/\s+/g," ").trim()}function ee(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function to(t,e){if(typeof t.scrollBy=="function"){t.scrollBy({left:e,behavior:"auto"});return}t.scrollLeft+=e}function no(t,e){if(typeof t.scrollTo=="function"){t.scrollTo({left:e,behavior:"auto"});return}t.scrollLeft=e}y.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const x=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],f=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return o.jsx(Ua,{tone:e,children:t.status})}}];function St(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}function Bt(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}function ao(){const[t,e]=d.useState(!1);return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:"Toggle loading"}),o.jsx(y,{columns:f,data:x,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const bo={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},te={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:f,data:x,rowKey:t=>t.id,defaultSortKey:"id"})})},ne={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:f,data:x,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ae={render:()=>{const t=[...f,{key:"action",header:"Action",width:160,render:e=>o.jsx(_a,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return o.jsx(y,{columns:t,data:x,rowKey:e=>e.id})}},oe={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:f,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort ascending"});await a(e.getByText("No release items yet.")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},re={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:f,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},se={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:x,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},ie={render:()=>o.jsxs(p,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:D,children:"When sortable controls are unavailable, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:x}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).toHaveAttribute("role","region"),await a(n).toHaveAttribute("tabindex","0");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let g=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>g,set:h=>{g=h}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:h=0})=>{g+=Number(h)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:h=0})=>{g=Number(h)||0}}),v(r,new r.Event("resize")),await N(()=>{a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await m.tab(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const W=h=>h.preventDefault();n.addEventListener("keydown",W,!0),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",W,!0),await m.tab(),await a(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ce={render:()=>o.jsxs(p,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:D,children:"In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual direction."}),o.jsx("div",{dir:"rtl",children:o.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:x})})]}),play:async({canvasElement:t})=>{const e=w(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull();const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let g=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>g,set:h=>{g=h}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:h=0})=>{g+=Number(h)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:h=0})=>{g=Number(h)||0}}),v(r,new r.Event("resize")),await m.tab(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(420),v.keyDown(n,{key:"End"}),await a(n.scrollLeft).toBe(0);const W=h=>h.preventDefault();n.addEventListener("keydown",W,!0),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",W,!0),await a(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},le={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:D,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:f,data:x,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),r.focus(),await m.click(n),await m.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},ue={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:D,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(y,{columns:f,data:x,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});v.mouseDown(n),n.focus(),await m.click(r),await m.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},de={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:f,data:x,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(e.getByText("Syncing release feed...")).toBeInTheDocument(),await a(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(g).not.toHaveAttribute("aria-sort")}},me={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:f,data:x,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Loading data...")}},ye={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:f,data:[],emptyContent:"   "})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("No data available.")}},pe={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(y,{columns:f,data:x,loading:!0,loadingContent:0}),o.jsx(y,{columns:f,data:[],emptyContent:0})]}),play:async({canvasElement:t})=>{const n=w(t).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},we={render:()=>o.jsx(ao,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),await m.click(n);const g=e.getByRole("button",{name:"Issue sort descending"});await a(g).toBeDisabled(),await a(g.style.transform).toContain("translateY(0"),await a(g.style.boxShadow).toBe("none")}},be={render:function(){const[e,n]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:D,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:f,data:x,defaultSortKey:"id",onSortChange:(r,g)=>n(`${r} ${g}`)})]})},play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByTestId("primary-pointer-sort-state");await m.click(n),await m.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(g).toHaveTextContent("id asc"),v.mouseDown(r,{button:0}),await N(()=>{a(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await N(()=>{a(r.style.transform).toContain("translateY(0")}),await a(g).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await N(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await N(()=>{a(r.style.transform).toContain("translateY(0")}),await a(g).toHaveTextContent("id asc"),await m.click(r),await a(g).toHaveTextContent("id desc")}},ge={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{ariaLabel:"Release checklist table",columns:f,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ve={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:f,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},he={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{caption:0,columns:f,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const n=w(t).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},xe={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(y,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:f,data:x,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const n=w(t).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},fe={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:x,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function oo(){const[t,e]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:D,children:["Active sort: ",o.jsx("strong",{style:Me,children:t})]}),o.jsx(y,{columns:f,data:x,defaultSortKey:"id",onSortChange:(n,r)=>e(`${n} ${r}`)})]})}function ro(){const[t,e]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:D,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:D,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:Me,children:t})]}),o.jsx(y,{columns:f,data:x,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>e(`${n} ${r}`)})]})}const Se={render:()=>o.jsx(oo,{}),play:async({canvasElement:t})=>{const e=w(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await m.keyboard("{ArrowRight}");const g=e.getByRole("button",{name:"Component sort ascending"});await a(g).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await m.keyboard("{End}");const W=e.getByRole("button",{name:"Status sort ascending"});await a(W).toHaveFocus(),await m.keyboard("{Home}"),await a(r).toHaveFocus(),await m.keyboard("{PageDown}");const h=e.getByRole("button",{name:"Component sort ascending"});await a(h).toHaveFocus(),await m.keyboard("{PageUp}"),await a(r).toHaveFocus(),await m.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const P=e.getByRole("button",{name:"Issue sort ascending"}),I=P.closest("th");await a(I).toHaveAttribute("aria-sort","descending"),v.keyDown(P,{key:"Enter",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","descending"),P.focus(),v.keyDown(P,{key:"Space",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","descending"),await m.keyboard("{Space}"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const k=e.getByRole("button",{name:"Issue sort descending"});k.focus(),v.keyDown(k,{key:"ArrowRight",ctrlKey:!0}),v.keyDown(k,{key:"ArrowLeft",metaKey:!0}),v.keyDown(k,{key:"End",ctrlKey:!0}),v.keyDown(k,{key:"Home",altKey:!0}),v.keyDown(k,{key:"PageDown",metaKey:!0}),v.keyDown(k,{key:"PageUp",ctrlKey:!0}),await a(k).toHaveFocus(),v.keyDown(k,{key:"Enter",ctrlKey:!0}),v.keyDown(k,{key:"Space",metaKey:!0}),await a(e.getByText("id asc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","ascending");const M=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});M.preventDefault(),k.dispatchEvent(M),await a(e.getByText("id asc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","ascending"),await m.keyboard("{Shift>}{Enter}{/Shift}"),await N(()=>{a(e.getByText("id desc")).toBeInTheDocument(),a(I).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await m.keyboard("{Shift>}{Space}{/Shift}"),await N(()=>{a(e.getByText("id asc")).toBeInTheDocument(),a(I).toHaveAttribute("aria-sort","ascending")})}},Be={render:()=>o.jsx(ro,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort descending"});n.focus(),v.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(e.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),v.keyDown(n,{key:"Enter"}),await a(e.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Re={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:D,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(y,{columns:f,data:x,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});n.focus(),v.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),v.keyDown(n,{key:"ArrowRight",metaKey:!0}),v.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function so(){const[t,e]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:D,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:D,children:["Active sort: ",o.jsx("strong",{style:Me,children:t})]}),o.jsx(y,{columns:f,data:x,defaultSortKey:"id",onSortChange:(n,r)=>e(`${n} ${r}`)})]})}const ke={render:()=>o.jsx(so,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),St(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),St(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Bt(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Bt(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await m.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Te={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:f,data:x,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"按降序排序：Issue"});await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await m.click(n),await a(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},He={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=e.getByRole("button",{name:"Release date sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},De={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=e.getByRole("button",{name:"Release status sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ee={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=e.getByRole("button",{name:"Release status sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ce={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=e.getByRole("button",{name:"Column 1 sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Ae={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:t})=>{const e=w(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=e.getByRole("button",{name:"release stage ready sort descending"});await m.click(n),await a(e.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},Ie={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await m.click(n),await a(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Le={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(p,{maxWidth:"min(100%, 620px)",children:o.jsx(y,{columns:t,data:x,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function io(){const[t,e]=d.useState(!1),n=d.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:D,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:D,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:Me,children:t?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),o.jsx(y,{columns:n,data:x,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ke={render:()=>o.jsx(io,{}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await a(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await m.click(n),await a(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Ea=x.map(t=>({...t,note:""})),Ca=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>o.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],je={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:Ca,data:Ea,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(n,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Fe={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:Ca,data:Ea,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=w(t),n=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(n,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},co=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],We={render:()=>o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:D,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(y,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,n)=>`${t.key} (visual:${e}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:co,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=w(t);await m.click(e.getByRole("button",{name:"Score sort descending"})),await a(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Rt,kt,Tt;te.parameters={...te.parameters,docs:{...(Rt=te.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Tt=(kt=te.parameters)==null?void 0:kt.docs)==null?void 0:Tt.source}}};var Ht,Dt,Et;ne.parameters={...ne.parameters,docs:{...(Ht=ne.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Et=(Dt=ne.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};var Ct,At,It;ae.parameters={...ae.parameters,docs:{...(Ct=ae.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(It=(At=ae.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Lt,Kt,jt;oe.parameters={...oe.parameters,docs:{...(Lt=oe.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(jt=(Kt=oe.parameters)==null?void 0:Kt.docs)==null?void 0:jt.source}}};var Ft,Wt,Pt;re.parameters={...re.parameters,docs:{...(Ft=re.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Pt=(Wt=re.parameters)==null?void 0:Wt.docs)==null?void 0:Pt.source}}};var Nt,Mt,Ot;se.parameters={...se.parameters,docs:{...(Nt=se.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ot=(Mt=se.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};var $t,qt,zt;ie.parameters={...ie.parameters,docs:{...($t=ie.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(zt=(qt=ie.parameters)==null?void 0:qt.docs)==null?void 0:zt.source}}};var Vt,_t,Ut;ce.parameters={...ce.parameters,docs:{...(Vt=ce.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
    await userEvent.tab();
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
}`,...(Ut=(_t=ce.parameters)==null?void 0:_t.docs)==null?void 0:Ut.source}}};var Gt,Yt,Zt;le.parameters={...le.parameters,docs:{...(Gt=le.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Zt=(Yt=le.parameters)==null?void 0:Yt.docs)==null?void 0:Zt.source}}};var Jt,Qt,Xt;ue.parameters={...ue.parameters,docs:{...(Jt=ue.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=ue.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var en,tn,nn;de.parameters={...de.parameters,docs:{...(en=de.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=de.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,rn;me.parameters={...me.parameters,docs:{...(an=me.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(rn=(on=me.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var sn,cn,ln;ye.parameters={...ye.parameters,docs:{...(sn=ye.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(ln=(cn=ye.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var un,dn,mn;pe.parameters={...pe.parameters,docs:{...(un=pe.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(dn=pe.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var yn,pn,wn;we.parameters={...we.parameters,docs:{...(yn=we.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(wn=(pn=we.parameters)==null?void 0:pn.docs)==null?void 0:wn.source}}};var bn,gn,vn;be.parameters={...be.parameters,docs:{...(bn=be.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(vn=(gn=be.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var hn,xn,fn;ge.parameters={...ge.parameters,docs:{...(hn=ge.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(fn=(xn=ge.parameters)==null?void 0:xn.docs)==null?void 0:fn.source}}};var Sn,Bn,Rn;ve.parameters={...ve.parameters,docs:{...(Sn=ve.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Rn=(Bn=ve.parameters)==null?void 0:Bn.docs)==null?void 0:Rn.source}}};var kn,Tn,Hn;he.parameters={...he.parameters,docs:{...(kn=he.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(Hn=(Tn=he.parameters)==null?void 0:Tn.docs)==null?void 0:Hn.source}}};var Dn,En,Cn;xe.parameters={...xe.parameters,docs:{...(Dn=xe.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(Cn=(En=xe.parameters)==null?void 0:En.docs)==null?void 0:Cn.source}}};var An,In,Ln;fe.parameters={...fe.parameters,docs:{...(An=fe.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(Ln=(In=fe.parameters)==null?void 0:In.docs)==null?void 0:Ln.source}}};var Kn,jn,Fn;Se.parameters={...Se.parameters,docs:{...(Kn=Se.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Fn=(jn=Se.parameters)==null?void 0:jn.docs)==null?void 0:Fn.source}}};var Wn,Pn,Nn;Be.parameters={...Be.parameters,docs:{...(Wn=Be.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Nn=(Pn=Be.parameters)==null?void 0:Pn.docs)==null?void 0:Nn.source}}};var Mn,On,$n;Re.parameters={...Re.parameters,docs:{...(Mn=Re.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...($n=(On=Re.parameters)==null?void 0:On.docs)==null?void 0:$n.source}}};var qn,zn,Vn;ke.parameters={...ke.parameters,docs:{...(qn=ke.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Vn=(zn=ke.parameters)==null?void 0:zn.docs)==null?void 0:Vn.source}}};var _n,Un,Gn;Te.parameters={...Te.parameters,docs:{...(_n=Te.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Gn=(Un=Te.parameters)==null?void 0:Un.docs)==null?void 0:Gn.source}}};var Yn,Zn,Jn;He.parameters={...He.parameters,docs:{...(Yn=He.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(Jn=(Zn=He.parameters)==null?void 0:Zn.docs)==null?void 0:Jn.source}}};var Qn,Xn,ea;De.parameters={...De.parameters,docs:{...(Qn=De.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
}`,...(ea=(Xn=De.parameters)==null?void 0:Xn.docs)==null?void 0:ea.source}}};var ta,na,aa;Ee.parameters={...Ee.parameters,docs:{...(ta=Ee.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(aa=(na=Ee.parameters)==null?void 0:na.docs)==null?void 0:aa.source}}};var oa,ra,sa;Ce.parameters={...Ce.parameters,docs:{...(oa=Ce.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(sa=(ra=Ce.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ia,ca,la;Ae.parameters={...Ae.parameters,docs:{...(ia=Ae.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(la=(ca=Ae.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var ua,da,ma;Ie.parameters={...Ie.parameters,docs:{...(ua=Ie.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(ma=(da=Ie.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ya,pa,wa;Le.parameters={...Le.parameters,docs:{...(ya=Le.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(wa=(pa=Le.parameters)==null?void 0:pa.docs)==null?void 0:wa.source}}};var ba,ga,va;Ke.parameters={...Ke.parameters,docs:{...(ba=Ke.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=Ke.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,fa;je.parameters={...je.parameters,docs:{...(ha=je.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(fa=(xa=je.parameters)==null?void 0:xa.docs)==null?void 0:fa.source}}};var Sa,Ba,Ra;Fe.parameters={...Fe.parameters,docs:{...(Sa=Fe.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ra=(Ba=Fe.parameters)==null?void 0:Ba.docs)==null?void 0:Ra.source}}};var ka,Ta,Ha;We.parameters={...We.parameters,docs:{...(ka=We.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(Ha=(Ta=We.parameters)==null?void 0:Ta.docs)==null?void 0:Ha.source}}};const go=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","RtlScrollContainerKeyboardPanning","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ve as AccessibleNameFallback,xe as AccessibleNameLabelledByHeading,ge as AccessibleNameWithoutCaption,Ee as AriaLabelHeaderAutoSortLabel,ye as BlankEmptyContentFallback,Ce as BlankKeySortLabelFallback,me as BlankLoadingContentFallback,Ke as DeferredColumnsDefaultSortRecovery,ne as DescendingDefaultSortDirection,oe as EmptyState,je as FallbackRowKeyStability,ke as ImeCompositionGuard,Le as InvalidDefaultSortKeyFallback,le as KeyboardFocusRingAfterPointer,ue as KeyboardFocusRingShiftTabReentry,ie as KeyboardReachableScrollContainer,we as LoadingDisablesResetsSortVisualState,de as LoadingState,Te as LocalizedSortLabels,Be as ManagedSortKeysPreemptedByLocalHandler,Ae as NormalizedKeySortLabelFallback,he as NumericCaptionName,pe as NumericFeedbackCopySemantics,be as PrimaryPointerOnlySortPress,te as ReleaseChecklist,We as RenderIndexSemantics,De as RichTextHeaderAutoSortLabel,fe as RowHeaderSemantics,Re as RtlArrowNavigation,ce as RtlScrollContainerKeyboardPanning,re as SingleRowSortDisabled,se as SingleSortableColumnShortcutHints,He as SortLabelForCustomHeader,Ie as SortLabelledByPrecedence,Se as SortTelemetry,Fe as SourceIndexRowKeyStability,ae as WithRowAction,go as __namedExportsOrder,bo as default};
