import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as ro}from"./Button-B21ouHNm.js";import{r as d}from"./index-BWu4c2F4.js";import{B as so}from"./Badge-ZJmMstsz.js";import{within as w,expect as a,userEvent as y,fireEvent as g,waitFor as M}from"./index-DgAF9SIF.js";import{S as p,s as H,a as Ue}from"./storyShowcase-DlKirntE.js";const Pa="Enter Space",io=`${Pa} Home End PageDown PageUp ArrowLeft ArrowRight`,co="ArrowLeft ArrowRight Home End PageDown PageUp",lo=48,uo=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),ht=400;function xt(e,t,n,r){if(!n)return null;const v=e.findIndex(L=>String(L.key)===n&&L.sortable);return v<0?null:{key:n,direction:r,renderKey:t[v]??`${n}__index-${v}`}}function ft(e,t,n){if(typeof e.sortLabel=="string"&&e.sortLabel.trim().length>0)return e.sortLabel.trim();const r=_e(at(e.header));return r.length>0?r:t}function St(e,t){const n=_e(e.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:t>=0?`Column ${t+1}`:"Column"}function m({columns:e,data:t,rowKey:n,minTableWidth:r,caption:v,ariaLabel:L,ariaLabelledBy:R,loading:D=!1,loadingContent:F="Loading data...",emptyContent:E="No data available.",defaultSortKey:N,defaultSortDirection:Y="asc",getSortAriaLabel:Oa=Bt,getSortStatusText:ot=mo,onSortKeyDown:Ge,onSortChange:Ye}){const rt=Ve(v),$a=Ve(F),qa=Ve(E),za=$a?F:"Loading data...",Va=qa?E:"No data available.",Z=re(R),st=Z?void 0:re(L,rt?void 0:"Data table"),_a=wo(r),O=d.useRef({}),Ze=d.useRef(null),Je=d.useRef(null),J=d.useRef(0),$=d.useRef(null),Q=d.useRef(null),q=d.useRef(!0);d.useRef(null),d.useRef(null),d.useRef(null);const[Ua,Qe]=d.useState(null),[Ga,W]=d.useState(null),[Ya,z]=d.useState(null),[Za,Xe]=d.useState(!1);d.useEffect(()=>{var c;const s=((c=Ze.current)==null?void 0:c.ownerDocument)??document,l=b=>{b.metaKey||b.altKey||b.ctrlKey||(q.current=!0)},u=b=>{"button"in b&&!nt(b.button)||"ctrlKey"in b&&b.ctrlKey||(q.current=!1)};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",u,!0),s.addEventListener("mousedown",u,!0),s.addEventListener("touchstart",u,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",u,!0),s.removeEventListener("mousedown",u,!0),s.removeEventListener("touchstart",u,!0)}},[]);const X=d.useCallback(()=>{Je.current=null,J.current=0,$.current!==null&&((Q.current??window).clearTimeout($.current),$.current=null),Q.current=null},[]);d.useEffect(()=>()=>{X()},[X]);const C=d.useMemo(()=>{const s=new Map;return e.map(l=>{const u=String(l.key),c=s.get(u)??0;return s.set(u,c+1),c===0?u:`${u}__duplicate-${c}`})},[e]),Ja=d.useMemo(()=>e.map(s=>bo(s.width)),[e]),[h,ee]=d.useState(()=>xt(e,C,N,Y)),P=d.useMemo(()=>D||t.length<=1?[]:e.reduce((s,l,u)=>(l.sortable&&s.push(C[u]??`${String(l.key)}__index-${u}`),s),[]),[e,t.length,D,C]);d.useEffect(()=>{var c;if(!h)return;const s=C.findIndex(b=>b===h.renderKey);if(s>=0&&((c=e[s])!=null&&c.sortable))return;const l=e.findIndex(b=>b.sortable&&String(b.key)===h.key);if(l<0){ee(null);return}const u=C[l]??`${h.key}__index-${l}`;u!==h.renderKey&&ee(b=>b&&{...b,renderKey:u})},[e,C,h]),d.useEffect(()=>{if(h)return;const s=xt(e,C,N,Y);s&&ee(s)},[e,Y,N,C,h]);const et=d.useMemo(()=>t.map((s,l)=>String(n?n(s,l):l)),[t,n]),Qa=d.useMemo(()=>{const s=new Map;return et.map((l,u)=>{const c=s.get(l)??0;return s.set(l,c+1),c===0?l:`${l}__dup-${u}`})},[et]);d.useEffect(()=>{},[n,et]),d.useEffect(()=>{},[e]),d.useEffect(()=>{},[e]);const V=d.useMemo(()=>{const s=t.map((x,B)=>({row:x,sourceIndex:B}));if(!h)return s;const l=C.findIndex(x=>x===h.renderKey),u=l>=0?l:e.findIndex(x=>String(x.key)===h.key),c=u>=0?e[u]:void 0;if(!(c!=null&&c.sortable))return s;const b=c.sortAccessor??(x=>{const B=x[String(c.key)];return B instanceof Date||typeof B=="number"||typeof B=="string"?B:String(B??"")});return s.sort((x,B)=>{const A=b(x.row),T=b(B.row);if(typeof A=="string"&&typeof T=="string"){const U=uo.compare(A,T);return U!==0?h.direction==="asc"?U:-U:x.sourceIndex-B.sourceIndex}const K=A instanceof Date?A.getTime():A,te=T instanceof Date?T.getTime():T;return K<te?h.direction==="asc"?-1:1:K>te?h.direction==="asc"?1:-1:x.sourceIndex-B.sourceIndex})},[e,t,C,h]),Xa=typeof document>"u"?void 0:document,it=d.useMemo(()=>{if(D||V.length<=1||!h)return"";const s=C.findIndex(b=>b===h.renderKey),l=s>=0?s:e.findIndex(b=>String(b.key)===h.key),u=l>=0?e[l]:void 0;if(!(u!=null&&u.sortable))return"";const c=ft(u,St(h.key,l));return ot({columnKey:h.key,columnHeader:c,direction:h.direction})},[e,ot,D,Xa,C,h,V.length]),G=!D&&V.length>1&&e.some(s=>s.sortable),_=!G&&Za,ct=Math.max(e.length,1);return d.useEffect(()=>{G||(Qe(null),W(null),z(null))},[G]),d.useEffect(()=>{if(G){Xe(!1);return}const s=Ze.current;if(!s){Xe(!1);return}const l=s.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!l)return;const u=()=>{const b=s.scrollWidth-s.clientWidth>0;Xe(x=>x===b?x:b)};u(),l.addEventListener("resize",u);let c=null;return typeof l.ResizeObserver=="function"&&(c=new l.ResizeObserver(u),c.observe(s)),()=>{l.removeEventListener("resize",u),c==null||c.disconnect()}},[e.length,t.length,G,D]),o.jsxs("div",{ref:Ze,"data-aurora-table-scroll-container":"",role:_?"region":void 0,tabIndex:_?0:void 0,"aria-label":_?Z?void 0:st??"Data table scroll container":void 0,"aria-labelledby":_?Z:void 0,"aria-keyshortcuts":_?co:void 0,onKeyDown:s=>{if(!_||s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey||s.target!==s.currentTarget)return;const l=s.currentTarget,u=Math.max(0,l.scrollWidth-l.clientWidth);if(u<=0)return;const c=l.clientWidth,b=Math.max(lo,Math.floor(c*.3)),x=Rt(l),B=x==="rtl"?"ArrowLeft":"ArrowRight",A=K=>{K!==0&&(s.preventDefault(),vo(l,K))},T=K=>{s.preventDefault(),go(l,K)};switch(s.key){case"ArrowLeft":case"ArrowRight":A(s.key===B?b:-b);return;case"PageDown":A(c);return;case"PageUp":A(-c);return;case"Home":T(x==="rtl"?u:0);return;case"End":T(x==="rtl"?0:u);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[it?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:it}):null,o.jsxs("table",{"aria-label":st,"aria-labelledby":Z,"aria-busy":D||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:_a},children:[rt?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:v}):null,o.jsx("thead",{children:o.jsx("tr",{children:e.map((s,l)=>{const u=String(s.key),c=C[l]??`${u}__index-${l}`,b=!!s.sortable,x=V.length>1,B=b&&(h==null?void 0:h.key)===u?h.direction:void 0,A=B&&(h==null?void 0:h.renderKey)===c?B:void 0,T=!D&&x?A:void 0,K=T?T==="asc"?"ascending":"descending":void 0,te=s.align??"left",U=ft(s,St(u,l)),ne=B==="asc"?"desc":"asc",eo=Oa({columnKey:u,columnHeader:U,nextDirection:ne}),lt=re(s.sortLabelledBy),to=lt?void 0:re(eo,Bt({columnHeader:U,nextDirection:ne})),j=D||!x,no=j?void 0:P.length>1?io:Pa,ut=!j&&Ua===c,dt=!j&&Ga===c,mt=!j&&Ya===c,ao=ut||mt,yt=()=>{j||(ee({key:u,direction:ne,renderKey:c}),Ye==null||Ye(u,ne))};return o.jsx("th",{scope:"col","aria-sort":K,style:{textAlign:te,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:Ja[l]},children:b?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:i=>{O.current[c]=i},"aria-labelledby":lt,"aria-label":to,"aria-keyshortcuts":no,disabled:j,onClick:i=>{const k=Date.now()-J.current,ae=i.detail===0&&Je.current===c&&J.current>0&&k<=ht;X(),!ae&&yt()},onMouseEnter:()=>{j||Qe(c)},onMouseLeave:()=>{Qe(i=>i===c?null:i),W(i=>i===c?null:i)},onPointerDown:i=>{j||i.ctrlKey||nt(i.button)&&(q.current=!1,z(k=>k===c?null:k),W(c))},onPointerUp:i=>{nt(i.button)&&W(k=>k===c?null:k)},onMouseDown:i=>{j||i.button!==0||i.ctrlKey||(q.current=!1,z(k=>k===c?null:k),W(c))},onMouseUp:i=>{i.button===0&&W(k=>k===c?null:k)},onPointerCancel:()=>{W(i=>i===c?null:i)},onFocus:()=>{if(j){z(i=>i===c?null:i);return}z(i=>po(O.current[c],q.current)?c:i===c?null:i)},onBlur:()=>{z(i=>i===c?null:i),W(i=>i===c?null:i)},onKeyDown:i=>{var ae,pt,wt,bt;if(q.current=!0,Ge==null||Ge(i),i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey)return;if(i.key==="Home"){const I=P[0];if(!I)return;i.preventDefault(),(ae=O.current[I])==null||ae.focus();return}if(i.key==="End"){const I=P[P.length-1];if(!I)return;i.preventDefault(),(pt=O.current[I])==null||pt.focus();return}if(i.key==="PageDown"||i.key==="PageUp"){const I=P.indexOf(c);if(I<0)return;const vt=i.key==="PageDown"?1:-1,oe=Math.max(0,Math.min(P.length-1,I+vt));if(oe===I)return;i.preventDefault();const tt=P[oe];(wt=O.current[tt])==null||wt.focus();return}if(i.key==="ArrowLeft"||i.key==="ArrowRight"){const I=P.indexOf(c);if(I<0)return;const oe=Rt(i.currentTarget)==="rtl"?"ArrowLeft":"ArrowRight",tt=i.key===oe?1:-1,gt=Math.max(0,Math.min(P.length-1,I+tt));if(gt===I)return;i.preventDefault();const oo=P[gt];(bt=O.current[oo])==null||bt.focus();return}if(!kt(i.key)||yo(i)||(i.preventDefault(),i.repeat))return;W(c),Je.current=c,J.current=Date.now();const k=i.currentTarget.ownerDocument.defaultView??window;$.current!==null&&(Q.current??k).clearTimeout($.current),Q.current=k,$.current=k.setTimeout(()=>{X()},ht),yt()},onKeyUp:i=>{i.altKey||i.ctrlKey||i.metaKey||kt(i.key)&&W(k=>k===c?null:k)},style:{border:ao?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:dt?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":ut?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:j?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:j?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:mt?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:dt?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,o.jsx("span",{"aria-hidden":"true",children:T==="asc"?"▲":T==="desc"?"▼":"↕"})]}):s.header},c)})})}),o.jsx("tbody",{children:D?o.jsx("tr",{children:o.jsx("td",{colSpan:ct,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:za})})}):V.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:ct,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Va})})}):V.map((s,l)=>{const u=s.row,c=String(s.sourceIndex),b=Qa[s.sourceIndex]??c;return o.jsx("tr",{style:{background:l%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map((x,B)=>{const A=x.render?x.render(u,l,s.sourceIndex):String(u[String(x.key)]??""),T=C[B]??`${String(x.key)}__index-${B}`,K={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:x.align??"left"};return x.rowHeader?o.jsx("th",{scope:"row",style:{...K,fontWeight:"var(--aurora-font-weight-medium)"},children:A},T):o.jsx("td",{style:K,children:A},T)})},b)})})]})]})}function Bt({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function mo({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function kt(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function yo(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function nt(e){return typeof e!="number"||e<=0}function po(e,t){if(!e)return t;try{return e.matches(":focus-visible")||t}catch{return t}}function Rt(e){var v;const n=(e.ownerDocument.defaultView??window).getComputedStyle(e).direction;return n==="rtl"||n==="ltr"?n:((v=e.closest("[dir]"))==null?void 0:v.getAttribute("dir"))==="rtl"?"rtl":"ltr"}function wo(e){if(typeof e=="number")return Number.isFinite(e)&&e>0?e:560;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}return 560}function bo(e){if(typeof e=="number")return Number.isFinite(e)&&e>=0?e:void 0;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}}function Ve(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Ve(t)):d.isValidElement(e)}function at(e){if(typeof e=="string")return e;if(typeof e=="number")return String(e);if(Array.isArray(e))return _e(e.map(n=>at(n)).filter(n=>n.length>0).join(" "));if(!d.isValidElement(e))return"";const t=e.props;if(t["aria-hidden"]===!0||t["aria-hidden"]==="true")return"";if(typeof t["aria-label"]=="string"){const n=_e(t["aria-label"]);if(n.length>0)return n}return at(t.children)}function _e(e){return e.replace(/\s+/g," ").trim()}function re(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function vo(e,t){if(typeof e.scrollBy=="function"){e.scrollBy({left:t,behavior:"auto"});return}e.scrollLeft+=t}function go(e,t){if(typeof e.scrollTo=="function"){e.scrollTo({left:t,behavior:"auto"});return}e.scrollLeft=t}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const f=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return o.jsx(so,{tone:t,children:e.status})}}];function Tt(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function Ht(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function ho(){const[e,t]=d.useState(!1);return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>t(n=>!n),children:"Toggle loading"}),o.jsx(m,{columns:S,data:f,loading:e,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const Ao={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},se={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(m,{caption:"Release readiness board",columns:S,data:f,rowKey:e=>e.id,defaultSortKey:"id"})})},ie={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(m,{caption:"Release readiness board",columns:S,data:f,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ce={render:()=>{const e=[...S,{key:"action",header:"Action",width:160,render:t=>o.jsx(ro,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return o.jsx(m,{columns:e,data:f,rowKey:t=>t.id})}},le={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Issue sort ascending"});await a(t.getByText("No release items yet.")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},ue={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},de={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:f,defaultSortKey:"id",rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await y.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(t.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},me={render:()=>o.jsxs(p,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:H,children:"When sortable controls are unavailable and horizontal overflow exists, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:f}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=w(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let v=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>v,set:R=>{v=R}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:R=0})=>{v+=Number(R)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:R=0})=>{v=Number(R)||0}}),g(r,new r.Event("resize")),await M(()=>{a(n).toHaveAttribute("role","region"),a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await y.tab(),await a(n).toHaveFocus(),g.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),g.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const L=R=>R.preventDefault();n.addEventListener("keydown",L,!0),g.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",L,!0),await y.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},ye={render:()=>o.jsxs(p,{maxWidth:"760px",gap:10,children:[o.jsx("p",{style:H,children:"Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:f}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=w(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex"),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await y.tab(),await a(t.getByRole("button",{name:"Before table"})).toHaveFocus(),await y.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},pe={render:()=>o.jsxs(p,{maxWidth:"360px",gap:10,children:[o.jsxs("p",{style:H,children:["Use ",o.jsx("code",{children:"minTableWidth"})," to keep compact layouts readable without forcing overflow."]}),o.jsx(m,{minTableWidth:320,columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:f})]}),play:async({canvasElement:e})=>{const n=w(e).getByRole("table",{name:"Data table"}),r=e.querySelector("[data-aurora-table-scroll-container]");await a(n).toHaveStyle({minWidth:"320px"}),await a(r).not.toHaveAttribute("role"),await a(r).not.toHaveAttribute("tabindex"),await a(r).not.toHaveAttribute("aria-keyshortcuts")}},we={render:()=>o.jsxs(p,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:H,children:"In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual direction."}),o.jsx("div",{dir:"rtl",children:o.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:f})})]}),play:async({canvasElement:e})=>{const t=w(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull();const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let v=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>v,set:R=>{v=R}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:R=0})=>{v+=Number(R)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:R=0})=>{v=Number(R)||0}}),g(r,new r.Event("resize")),await M(()=>{a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),n.focus(),await a(n).toHaveFocus(),g.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBeGreaterThan(0),g.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(420),g.keyDown(n,{key:"End"}),await a(n.scrollLeft).toBe(0);const L=R=>R.preventDefault();n.addEventListener("keydown",L,!0),g.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",L,!0),await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},be={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:H,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(m,{columns:S,data:f,defaultSortKey:"id"})]}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),r.focus(),await y.click(n),await y.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},ve={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:H,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(m,{columns:S,data:f,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Status sort ascending"}),r=t.getByRole("button",{name:"After table"});g.mouseDown(n),n.focus(),await y.click(r),await y.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},ge={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:S,data:f,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("button",{name:"Issue sort descending"}),v=t.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(t.getByText("Syncing release feed...")).toBeInTheDocument(),await a(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(v).not.toHaveAttribute("aria-sort")}},he={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:S,data:f,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("status")).toHaveTextContent("Loading data...")}},xe={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:S,data:[],emptyContent:"   "})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("status")).toHaveTextContent("No data available.")}},fe={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(m,{columns:S,data:f,loading:!0,loadingContent:0}),o.jsx(m,{columns:S,data:[],emptyContent:0})]}),play:async({canvasElement:e})=>{const n=w(e).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},Se={render:()=>o.jsx(ho,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Toggle loading"}),r=t.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),await y.click(n);const v=t.getByRole("button",{name:"Issue sort descending"});await a(v).toBeDisabled(),await a(v.style.transform).toContain("translateY(0"),await a(v.style.boxShadow).toBe("none")}},Be={render:function(){const[t,n]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:H,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:t})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(m,{columns:S,data:f,defaultSortKey:"id",onSortChange:(r,v)=>n(`${r} ${v}`)})]})},play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"}),v=t.getByTestId("primary-pointer-sort-state");await y.click(n),await y.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),g.mouseDown(r,{button:2}),g.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(v).toHaveTextContent("id asc"),g.mouseDown(r,{button:0}),await M(()=>{a(r.style.transform).toContain("translateY(1px)")}),g.pointerCancel(r),await M(()=>{a(r.style.transform).toContain("translateY(0")}),await a(v).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await M(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await M(()=>{a(r.style.transform).toContain("translateY(0")}),await a(v).toHaveTextContent("id asc"),await y.click(r),await a(v).toHaveTextContent("id desc")}},ke={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{ariaLabel:"Release checklist table",columns:S,data:f,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Re={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:S,data:f,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},Te={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{caption:0,columns:S,data:f,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const n=w(e).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},He={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(m,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:f,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const n=w(e).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},De={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:f,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function xo(){const[e,t]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:H,children:["Active sort: ",o.jsx("strong",{style:Ue,children:e})]}),o.jsx(m,{columns:S,data:f,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}function fo(){const[e,t]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:H,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:H,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:Ue,children:e})]}),o.jsx(m,{columns:S,data:f,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const Ee={render:()=>o.jsx(xo,{}),play:async({canvasElement:e})=>{const t=w(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=t.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await y.keyboard("{ArrowRight}");const v=t.getByRole("button",{name:"Component sort ascending"});await a(v).toHaveFocus(),await y.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await y.keyboard("{End}");const L=t.getByRole("button",{name:"Status sort ascending"});await a(L).toHaveFocus(),await y.keyboard("{Home}"),await a(r).toHaveFocus(),await y.keyboard("{PageDown}");const R=t.getByRole("button",{name:"Component sort ascending"});await a(R).toHaveFocus(),await y.keyboard("{PageUp}"),await a(r).toHaveFocus(),await y.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const D=t.getByRole("button",{name:"Issue sort ascending"}),F=D.closest("th");await a(F).toHaveAttribute("aria-sort","descending"),g.keyDown(D,{key:"Enter",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(F).toHaveAttribute("aria-sort","descending"),D.focus(),g.keyDown(D,{key:"Space",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(F).toHaveAttribute("aria-sort","descending"),await y.keyboard("{Space}"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(F).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const E=t.getByRole("button",{name:"Issue sort descending"});E.focus(),g.keyDown(E,{key:"ArrowRight",ctrlKey:!0}),g.keyDown(E,{key:"ArrowLeft",metaKey:!0}),g.keyDown(E,{key:"End",ctrlKey:!0}),g.keyDown(E,{key:"Home",altKey:!0}),g.keyDown(E,{key:"PageDown",metaKey:!0}),g.keyDown(E,{key:"PageUp",ctrlKey:!0}),await a(E).toHaveFocus(),g.keyDown(E,{key:"Enter",ctrlKey:!0}),g.keyDown(E,{key:"Space",metaKey:!0}),await a(t.getByText("id asc")).toBeInTheDocument(),await a(F).toHaveAttribute("aria-sort","ascending");const N=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});N.preventDefault(),E.dispatchEvent(N),await a(t.getByText("id asc")).toBeInTheDocument(),await a(F).toHaveAttribute("aria-sort","ascending"),await y.keyboard("{Shift>}{Enter}{/Shift}"),await M(()=>{a(t.getByText("id desc")).toBeInTheDocument(),a(F).toHaveAttribute("aria-sort","descending")}),t.getByRole("button",{name:"Issue sort ascending"}).focus(),await y.keyboard("{Shift>}{Space}{/Shift}"),await M(()=>{a(t.getByText("id asc")).toBeInTheDocument(),a(F).toHaveAttribute("aria-sort","ascending")})}},Ce={render:()=>o.jsx(fo,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Issue sort descending"});n.focus(),g.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),g.keyDown(n,{key:"Enter"}),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Ae={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:H,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(m,{columns:S,data:f,defaultSortKey:"id"})})]}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Issue sort descending"}),r=t.getByRole("button",{name:"Component sort ascending"});n.focus(),g.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),g.keyDown(n,{key:"ArrowRight",metaKey:!0}),g.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await y.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await y.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await y.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function So(){const[e,t]=d.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:H,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:H,children:["Active sort: ",o.jsx("strong",{style:Ue,children:e})]}),o.jsx(m,{columns:S,data:f,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const Ie={render:()=>o.jsx(So,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Tt(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Tt(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Ht(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Ht(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await y.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Le={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:S,data:f,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"按降序排序：Issue"});await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await y.click(n),await a(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},Ke={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=t.getByRole("button",{name:"Release date sort descending"});await y.click(n),await a(t.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},je={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await y.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Fe={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await y.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},We={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=t.getByRole("button",{name:"Column 1 sort descending"});await y.click(n),await a(t.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Pe={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:e})=>{const t=w(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=t.getByRole("button",{name:"release stage ready sort descending"});await y.click(n),await a(t.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},Me={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(m,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await y.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Ne={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(p,{maxWidth:"min(100%, 620px)",children:o.jsx(m,{columns:e,data:f,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("columnheader",{name:"Component"}),r=t.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Bo(){const[e,t]=d.useState(!1),n=d.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:e,width:140}],[e]);return o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:H,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:H,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:Ue,children:e?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>t(!0),children:"Load status sortable schema"}),o.jsx(m,{columns:n,data:f,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Oe={render:()=>o.jsx(Bo,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("button",{name:"Load status sortable schema"}),r=t.getByRole("columnheader",{name:"Status"});await a(t.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await y.click(n),await a(t.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Ma=f.map(e=>({...e,note:""})),Na=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>o.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],$e={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(m,{columns:Na,data:Ma,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await y.type(n,"persist me"),await y.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},qe={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(m,{columns:Na,data:Ma,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await y.type(n,"persist me"),await y.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},ko=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],ze={render:()=>o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:H,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(m,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,n)=>`${e.key} (visual:${t}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:ko,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=w(e);await y.click(t.getByRole("button",{name:"Score sort descending"})),await a(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Dt,Et,Ct;se.parameters={...se.parameters,docs:{...(Dt=se.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Ct=(Et=se.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var At,It,Lt;ie.parameters={...ie.parameters,docs:{...(At=ie.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Lt=(It=ie.parameters)==null?void 0:It.docs)==null?void 0:Lt.source}}};var Kt,jt,Ft;ce.parameters={...ce.parameters,docs:{...(Kt=ce.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Ft=(jt=ce.parameters)==null?void 0:jt.docs)==null?void 0:Ft.source}}};var Wt,Pt,Mt;le.parameters={...le.parameters,docs:{...(Wt=le.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Mt=(Pt=le.parameters)==null?void 0:Pt.docs)==null?void 0:Mt.source}}};var Nt,Ot,$t;ue.parameters={...ue.parameters,docs:{...(Nt=ue.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...($t=(Ot=ue.parameters)==null?void 0:Ot.docs)==null?void 0:$t.source}}};var qt,zt,Vt;de.parameters={...de.parameters,docs:{...(qt=de.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Vt=(zt=de.parameters)==null?void 0:zt.docs)==null?void 0:Vt.source}}};var _t,Ut,Gt;me.parameters={...me.parameters,docs:{...(_t=me.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Gt=(Ut=me.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var Yt,Zt,Jt;ye.parameters={...ye.parameters,docs:{...(Yt=ye.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Jt=(Zt=ye.parameters)==null?void 0:Zt.docs)==null?void 0:Jt.source}}};var Qt,Xt,en;pe.parameters={...pe.parameters,docs:{...(Qt=pe.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(en=(Xt=pe.parameters)==null?void 0:Xt.docs)==null?void 0:en.source}}};var tn,nn,an;we.parameters={...we.parameters,docs:{...(tn=we.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(an=(nn=we.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,rn,sn;be.parameters={...be.parameters,docs:{...(on=be.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(sn=(rn=be.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var cn,ln,un;ve.parameters={...ve.parameters,docs:{...(cn=ve.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(un=(ln=ve.parameters)==null?void 0:ln.docs)==null?void 0:un.source}}};var dn,mn,yn;ge.parameters={...ge.parameters,docs:{...(dn=ge.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(yn=(mn=ge.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};var pn,wn,bn;he.parameters={...he.parameters,docs:{...(pn=he.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(bn=(wn=he.parameters)==null?void 0:wn.docs)==null?void 0:bn.source}}};var vn,gn,hn;xe.parameters={...xe.parameters,docs:{...(vn=xe.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(hn=(gn=xe.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var xn,fn,Sn;fe.parameters={...fe.parameters,docs:{...(xn=fe.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(Sn=(fn=fe.parameters)==null?void 0:fn.docs)==null?void 0:Sn.source}}};var Bn,kn,Rn;Se.parameters={...Se.parameters,docs:{...(Bn=Se.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(Rn=(kn=Se.parameters)==null?void 0:kn.docs)==null?void 0:Rn.source}}};var Tn,Hn,Dn;Be.parameters={...Be.parameters,docs:{...(Tn=Be.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Dn=(Hn=Be.parameters)==null?void 0:Hn.docs)==null?void 0:Dn.source}}};var En,Cn,An;ke.parameters={...ke.parameters,docs:{...(En=ke.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(An=(Cn=ke.parameters)==null?void 0:Cn.docs)==null?void 0:An.source}}};var In,Ln,Kn;Re.parameters={...Re.parameters,docs:{...(In=Re.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Kn=(Ln=Re.parameters)==null?void 0:Ln.docs)==null?void 0:Kn.source}}};var jn,Fn,Wn;Te.parameters={...Te.parameters,docs:{...(jn=Te.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Wn=(Fn=Te.parameters)==null?void 0:Fn.docs)==null?void 0:Wn.source}}};var Pn,Mn,Nn;He.parameters={...He.parameters,docs:{...(Pn=He.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(Nn=(Mn=He.parameters)==null?void 0:Mn.docs)==null?void 0:Nn.source}}};var On,$n,qn;De.parameters={...De.parameters,docs:{...(On=De.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(qn=($n=De.parameters)==null?void 0:$n.docs)==null?void 0:qn.source}}};var zn,Vn,_n;Ee.parameters={...Ee.parameters,docs:{...(zn=Ee.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
}`,...(_n=(Vn=Ee.parameters)==null?void 0:Vn.docs)==null?void 0:_n.source}}};var Un,Gn,Yn;Ce.parameters={...Ce.parameters,docs:{...(Un=Ce.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(Yn=(Gn=Ce.parameters)==null?void 0:Gn.docs)==null?void 0:Yn.source}}};var Zn,Jn,Qn;Ae.parameters={...Ae.parameters,docs:{...(Zn=Ae.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
}`,...(Qn=(Jn=Ae.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Xn,ea,ta;Ie.parameters={...Ie.parameters,docs:{...(Xn=Ie.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Ie.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,aa,oa;Le.parameters={...Le.parameters,docs:{...(na=Le.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(aa=Le.parameters)==null?void 0:aa.docs)==null?void 0:oa.source}}};var ra,sa,ia;Ke.parameters={...Ke.parameters,docs:{...(ra=Ke.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(sa=Ke.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var ca,la,ua;je.parameters={...je.parameters,docs:{...(ca=je.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(ua=(la=je.parameters)==null?void 0:la.docs)==null?void 0:ua.source}}};var da,ma,ya;Fe.parameters={...Fe.parameters,docs:{...(da=Fe.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(ma=Fe.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};var pa,wa,ba;We.parameters={...We.parameters,docs:{...(pa=We.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ba=(wa=We.parameters)==null?void 0:wa.docs)==null?void 0:ba.source}}};var va,ga,ha;Pe.parameters={...Pe.parameters,docs:{...(va=Pe.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ha=(ga=Pe.parameters)==null?void 0:ga.docs)==null?void 0:ha.source}}};var xa,fa,Sa;Me.parameters={...Me.parameters,docs:{...(xa=Me.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Sa=(fa=Me.parameters)==null?void 0:fa.docs)==null?void 0:Sa.source}}};var Ba,ka,Ra;Ne.parameters={...Ne.parameters,docs:{...(Ba=Ne.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(Ra=(ka=Ne.parameters)==null?void 0:ka.docs)==null?void 0:Ra.source}}};var Ta,Ha,Da;Oe.parameters={...Oe.parameters,docs:{...(Ta=Oe.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Da=(Ha=Oe.parameters)==null?void 0:Ha.docs)==null?void 0:Da.source}}};var Ea,Ca,Aa;$e.parameters={...$e.parameters,docs:{...(Ea=$e.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Aa=(Ca=$e.parameters)==null?void 0:Ca.docs)==null?void 0:Aa.source}}};var Ia,La,Ka;qe.parameters={...qe.parameters,docs:{...(Ia=qe.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(Ka=(La=qe.parameters)==null?void 0:La.docs)==null?void 0:Ka.source}}};var ja,Fa,Wa;ze.parameters={...ze.parameters,docs:{...(ja=ze.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Wa=(Fa=ze.parameters)==null?void 0:Fa.docs)==null?void 0:Wa.source}}};const Io=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","ScrollContainerSkipsTabStopWithoutOverflow","CompactMinWidthWithoutOverflow","RtlScrollContainerKeyboardPanning","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{Re as AccessibleNameFallback,He as AccessibleNameLabelledByHeading,ke as AccessibleNameWithoutCaption,Fe as AriaLabelHeaderAutoSortLabel,xe as BlankEmptyContentFallback,We as BlankKeySortLabelFallback,he as BlankLoadingContentFallback,pe as CompactMinWidthWithoutOverflow,Oe as DeferredColumnsDefaultSortRecovery,ie as DescendingDefaultSortDirection,le as EmptyState,$e as FallbackRowKeyStability,Ie as ImeCompositionGuard,Ne as InvalidDefaultSortKeyFallback,be as KeyboardFocusRingAfterPointer,ve as KeyboardFocusRingShiftTabReentry,me as KeyboardReachableScrollContainer,Se as LoadingDisablesResetsSortVisualState,ge as LoadingState,Le as LocalizedSortLabels,Ce as ManagedSortKeysPreemptedByLocalHandler,Pe as NormalizedKeySortLabelFallback,Te as NumericCaptionName,fe as NumericFeedbackCopySemantics,Be as PrimaryPointerOnlySortPress,se as ReleaseChecklist,ze as RenderIndexSemantics,je as RichTextHeaderAutoSortLabel,De as RowHeaderSemantics,Ae as RtlArrowNavigation,we as RtlScrollContainerKeyboardPanning,ye as ScrollContainerSkipsTabStopWithoutOverflow,ue as SingleRowSortDisabled,de as SingleSortableColumnShortcutHints,Ke as SortLabelForCustomHeader,Me as SortLabelledByPrecedence,Ee as SortTelemetry,qe as SourceIndexRowKeyStability,ce as WithRowAction,Io as __namedExportsOrder,Ao as default};
