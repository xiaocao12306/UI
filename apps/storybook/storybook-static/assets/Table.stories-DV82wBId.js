import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Ka}from"./Button-rBVi27TD.js";import{r as l}from"./index-BWu4c2F4.js";import{B as Fa}from"./Badge-ZJmMstsz.js";import{within as w,expect as n,userEvent as d,fireEvent as v,waitFor as U}from"./index-DgAF9SIF.js";import{S as p,s as C,a as ze}from"./storyShowcase-Bw5VyCj0.js";const wa="Enter Space",ja=`${wa} Home End PageDown PageUp ArrowLeft ArrowRight`,La="ArrowLeft ArrowRight Home End PageDown PageUp",Wa=48,Pa=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),mt=400;function yt(t,e,o){if(!e)return null;const r=t.find(B=>String(B.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function pt(t,e,o){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const r=Ue(Oe(t.header));return r.length>0?r:e}function wt(t,e){const o=t.trim();return o.length>0?o:e>=0?`Column ${e+1}`:"Column"}function m({columns:t,data:e,rowKey:o,caption:r,ariaLabel:B,ariaLabelledBy:Le,loading:A=!1,loadingContent:L="Loading data...",emptyContent:E="No data available.",defaultSortKey:R,defaultSortDirection:P="asc",getSortAriaLabel:Ge=bt,getSortStatusText:_e=Na,onSortChange:We}){var Ze;const Ye=je(r),va=je(L),ha=je(E),xa=va?L:"Loading data...",Sa=ha?E:"No data available.",z=ee(Le),Je=z?void 0:ee(B,Ye?void 0:"Data table"),N=l.useRef({}),G=l.useRef(null),Pe=l.useRef(null),_=l.useRef(0),$=l.useRef(null),Y=l.useRef(null),q=l.useRef(!0);l.useRef(null),l.useRef(null),l.useRef(null);const[fa,Ne]=l.useState(null),[Ba,I]=l.useState(null),[Ra,M]=l.useState(null);l.useEffect(()=>{var c;const i=((c=G.current)==null?void 0:c.ownerDocument)??document,u=b=>{b.metaKey||b.altKey||b.ctrlKey||(q.current=!0)},y=b=>{"button"in b&&!Ve(b.button)||"ctrlKey"in b&&b.ctrlKey||(q.current=!1)};return i.addEventListener("keydown",u,!0),i.addEventListener("pointerdown",y,!0),i.addEventListener("mousedown",y,!0),i.addEventListener("touchstart",y,!0),()=>{i.removeEventListener("keydown",u,!0),i.removeEventListener("pointerdown",y,!0),i.removeEventListener("mousedown",y,!0),i.removeEventListener("touchstart",y,!0)}},[]);const J=l.useCallback(()=>{Pe.current=null,_.current=0,$.current!==null&&((Y.current??window).clearTimeout($.current),$.current=null),Y.current=null},[]);l.useEffect(()=>()=>{J()},[J]);const[x,$e]=l.useState(()=>yt(t,R,P)),Q=l.useMemo(()=>{const i=new Map;return t.map(u=>{const y=String(u.key),c=i.get(y)??0;return i.set(y,c+1),c===0?y:`${y}__duplicate-${c}`})},[t]),K=l.useMemo(()=>A||e.length<=1?[]:t.reduce((i,u,y)=>(u.sortable&&i.push(Q[y]??`${String(u.key)}__index-${y}`),i),[]),[t,e.length,A,Q]);l.useEffect(()=>{if(!x)return;const i=t.find(u=>String(u.key)===x.key);i!=null&&i.sortable||$e(null)},[t,x]),l.useEffect(()=>{if(x)return;const i=yt(t,R,P);i&&$e(i)},[t,P,R,x]);const qe=l.useMemo(()=>e.map((i,u)=>String(o?o(i,u):u)),[e,o]),ka=l.useMemo(()=>{const i=new Map;return qe.map((u,y)=>{const c=i.get(u)??0;return i.set(u,c+1),c===0?u:`${u}__dup-${y}`})},[qe]);l.useEffect(()=>{},[o,qe]),l.useEffect(()=>{},[t]),l.useEffect(()=>{},[t]);const V=l.useMemo(()=>{const i=e.map((c,b)=>({row:c,sourceIndex:b}));if(!x)return i;const u=t.find(c=>String(c.key)===x.key);if(!(u!=null&&u.sortable))return i;const y=u.sortAccessor??(c=>{const b=c[String(u.key)];return b instanceof Date||typeof b=="number"||typeof b=="string"?b:String(b??"")});return i.sort((c,b)=>{const S=y(c.row),T=y(b.row);if(typeof S=="string"&&typeof T=="string"){const j=Pa.compare(S,T);return j!==0?x.direction==="asc"?j:-j:c.sourceIndex-b.sourceIndex}const k=S instanceof Date?S.getTime():S,W=T instanceof Date?T.getTime():T;return k<W?x.direction==="asc"?-1:1:k>W?x.direction==="asc"?1:-1:c.sourceIndex-b.sourceIndex})},[t,e,x]),Qe=l.useMemo(()=>{var c;if(A||V.length<=1||!x)return"";const i=t.findIndex(b=>String(b.key)===x.key),u=i>=0?t[i]:void 0;if(!(u!=null&&u.sortable))return"";((c=G.current)==null?void 0:c.ownerDocument)??typeof document>"u";const y=pt(u,wt(x.key,i));return _e({columnKey:x.key,columnHeader:y,direction:x.direction})},[t,_e,A,x,V.length]),F=!A&&V.length>1&&t.some(i=>i.sortable),Xe=Math.max(t.length,1);return((Ze=G.current)==null?void 0:Ze.ownerDocument)??typeof document>"u",l.useEffect(()=>{F||(Ne(null),I(null),M(null))},[F]),a.jsxs("div",{ref:G,"data-aurora-table-scroll-container":"",role:F?void 0:"region",tabIndex:F?void 0:0,"aria-label":F||z?void 0:Je??"Data table scroll container","aria-labelledby":F?void 0:z,"aria-keyshortcuts":F?void 0:La,onKeyDown:i=>{if(F||i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey||i.target!==i.currentTarget)return;const u=i.currentTarget,y=Math.max(0,u.scrollWidth-u.clientWidth);if(y<=0)return;const c=u.clientWidth,b=Math.max(Wa,Math.floor(c*.3)),S=k=>{k!==0&&(i.preventDefault(),Ma(u,k))},T=k=>{i.preventDefault(),Va(u,k)};switch(i.key){case"ArrowRight":S(b);return;case"ArrowLeft":S(-b);return;case"PageDown":S(c);return;case"PageUp":S(-c);return;case"Home":T(0);return;case"End":T(y);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Qe?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Qe}):null,a.jsxs("table",{"aria-label":Je,"aria-labelledby":z,"aria-busy":A||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[Ye?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map((i,u)=>{const y=String(i.key),c=Q[u]??`${y}__index-${u}`,b=!!i.sortable,S=V.length>1,T=b&&(x==null?void 0:x.key)===y?x.direction:void 0,k=!A&&S?T:void 0,W=k?k==="asc"?"ascending":"descending":void 0,j=i.align??"left",et=pt(i,wt(y,u)),X=T==="asc"?"desc":"asc",Ta=Ge({columnKey:y,columnHeader:et,nextDirection:X}),tt=ee(i.sortLabelledBy),Ha=tt?void 0:ee(Ta,bt({columnHeader:et,nextDirection:X})),D=A||!S,Da=D?void 0:K.length>1?ja:wa,nt=!D&&fa===c,at=!D&&Ba===c,ot=!D&&Ra===c,Aa=nt||ot,rt=()=>{D||($e({key:y,direction:X}),We==null||We(y,X))};return a.jsx("th",{scope:"col","aria-sort":W,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:b?a.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:s=>{N.current[c]=s},"aria-labelledby":tt,"aria-label":Ha,"aria-keyshortcuts":Da,disabled:D,onClick:s=>{const f=Date.now()-_.current,Z=s.detail===0&&Pe.current===c&&_.current>0&&f<=mt;J(),!Z&&rt()},onMouseEnter:()=>{D||Ne(c)},onMouseLeave:()=>{Ne(s=>s===c?null:s),I(s=>s===c?null:s)},onPointerDown:s=>{D||s.ctrlKey||Ve(s.button)&&(q.current=!1,M(f=>f===c?null:f),I(c))},onPointerUp:s=>{Ve(s.button)&&I(f=>f===c?null:f)},onMouseDown:s=>{D||s.button!==0||s.ctrlKey||(q.current=!1,M(f=>f===c?null:f),I(c))},onMouseUp:s=>{s.button===0&&I(f=>f===c?null:f)},onPointerCancel:()=>{I(s=>s===c?null:s)},onFocus:()=>{if(D){M(s=>s===c?null:s);return}M(s=>qa(N.current[c],q.current)?c:s===c?null:s)},onBlur:()=>{M(s=>s===c?null:s),I(s=>s===c?null:s)},onKeyDown:s=>{var Z,st,it,ct,ut;if(q.current=!0,s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey)return;if(s.key==="Home"){const H=K[0];if(!H)return;s.preventDefault(),(Z=N.current[H])==null||Z.focus();return}if(s.key==="End"){const H=K[K.length-1];if(!H)return;s.preventDefault(),(st=N.current[H])==null||st.focus();return}if(s.key==="PageDown"||s.key==="PageUp"){const H=K.indexOf(c);if(H<0)return;const lt=s.key==="PageDown"?1:-1,O=Math.max(0,Math.min(K.length-1,H+lt));if(O===H)return;s.preventDefault();const Me=K[O];(it=N.current[Me])==null||it.focus();return}if(s.key==="ArrowLeft"||s.key==="ArrowRight"){const H=K.indexOf(c);if(H<0)return;const O=(s.currentTarget.ownerDocument.defaultView??window).getComputedStyle(s.currentTarget).direction,Me=(ct=s.currentTarget.closest("[dir]"))==null?void 0:ct.getAttribute("dir"),Ea=(O==="rtl"||O==="ltr"?O:Me==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",Ca=s.key===Ea?1:-1,dt=Math.max(0,Math.min(K.length-1,H+Ca));if(dt===H)return;s.preventDefault();const Ia=K[dt];(ut=N.current[Ia])==null||ut.focus();return}if(!gt(s.key)||$a(s)||(s.preventDefault(),s.repeat))return;I(c),Pe.current=c,_.current=Date.now();const f=s.currentTarget.ownerDocument.defaultView??window;$.current!==null&&(Y.current??f).clearTimeout($.current),Y.current=f,$.current=f.setTimeout(()=>{J()},mt),rt()},onKeyUp:s=>{s.altKey||s.ctrlKey||s.metaKey||gt(s.key)&&I(f=>f===c?null:f)},style:{border:Aa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:at?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":nt?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:D?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:D?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ot?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:at?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:k==="asc"?"▲":k==="desc"?"▼":"↕"})]}):i.header},c)})})}),a.jsx("tbody",{children:A?a.jsx("tr",{children:a.jsx("td",{colSpan:Xe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:xa})})}):V.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Xe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Sa})})}):V.map((i,u)=>{const y=i.row,c=String(i.sourceIndex),b=ka[i.sourceIndex]??c;return a.jsx("tr",{style:{background:u%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((S,T)=>{const k=S.render?S.render(y,u,i.sourceIndex):String(y[String(S.key)]??""),W=Q[T]??`${String(S.key)}__index-${T}`,j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:S.align??"left"};return S.rowHeader?a.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:k},W):a.jsx("td",{style:j,children:k},W)})},b)})})]})]})}function bt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Na({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function gt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function $a(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ve(t){return typeof t!="number"||t<=0}function qa(t,e){if(!t)return e;try{return t.matches(":focus-visible")||e}catch{return e}}function je(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>je(e)):l.isValidElement(t)}function Oe(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Ue(t.map(o=>Oe(o)).filter(o=>o.length>0).join(" "));if(!l.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=Ue(e["aria-label"]);if(o.length>0)return o}return Oe(e.children)}function Ue(t){return t.replace(/\s+/g," ").trim()}function ee(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function Ma(t,e){if(typeof t.scrollBy=="function"){t.scrollBy({left:e,behavior:"auto"});return}t.scrollLeft+=e}function Va(t,e){if(typeof t.scrollTo=="function"){t.scrollTo({left:e,behavior:"auto"});return}t.scrollLeft=e}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],h=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(Fa,{tone:e,children:t.status})}}];function vt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function ht(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function Oa(){const[t,e]=l.useState(!1);return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(m,{columns:h,data:g,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const no={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},te={render:()=>a.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(m,{caption:"Release readiness board",columns:h,data:g,rowKey:t=>t.id,defaultSortKey:"id"})})},ne={render:()=>a.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(m,{caption:"Release readiness board",columns:h,data:g,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ae={render:()=>{const t=[...h,{key:"action",header:"Action",width:160,render:e=>a.jsx(Ka,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(m,{columns:t,data:g,rowKey:e=>e.id})}},oe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:h,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},re={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:h,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},se={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await d.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await n(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},ie={render:()=>a.jsxs(p,{maxWidth:"min(100%, 420px)",gap:10,children:[a.jsx("p",{style:C,children:"When sortable controls are unavailable, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),a.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("role","region"),await n(o).toHaveAttribute("tabindex","0"),await n(o).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp"),await d.tab(),await n(o).toHaveFocus(),v.keyDown(o,{key:"ArrowRight"}),await n(o.scrollLeft).toBeGreaterThan(0),v.keyDown(o,{key:"Home"}),await n(o.scrollLeft).toBe(0),await d.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ce={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(m,{columns:h,data:g,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),r.focus(),await d.click(o),await d.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},ue={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),a.jsx(m,{columns:h,data:g,defaultSortKey:"id"}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});v.mouseDown(o),o.focus(),await d.click(r),await d.tab({shift:!0}),await n(o).toHaveFocus(),await n(o.style.boxShadow).toContain("0 0 0 3px")}},le={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:h,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),B=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(B).not.toHaveAttribute("aria-sort")}},de={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:h,data:g,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Loading data...")}},me={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:h,data:[],emptyContent:"   "})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("No data available.")}},ye={render:()=>a.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx(m,{columns:h,data:g,loading:!0,loadingContent:0}),a.jsx(m,{columns:h,data:[],emptyContent:0})]}),play:async({canvasElement:t})=>{const o=w(t).getAllByRole("status");await n(o).toHaveLength(2),await n(o[0]).toHaveTextContent("0"),await n(o[1]).toHaveTextContent("0")}},pe={render:()=>a.jsx(Oa,{}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),await d.click(o);const B=e.getByRole("button",{name:"Issue sort descending"});await n(B).toBeDisabled(),await n(B.style.transform).toContain("translateY(0"),await n(B.style.boxShadow).toBe("none")}},we={render:function(){const[e,o]=l.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(m,{columns:h,data:g,defaultSortKey:"id",onSortChange:(r,B)=>o(`${r} ${B}`)})]})},play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),B=e.getByTestId("primary-pointer-sort-state");await d.click(o),await d.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(B).toHaveTextContent("id asc"),v.mouseDown(r,{button:0}),await U(()=>{n(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await U(()=>{n(r.style.transform).toContain("translateY(0")}),await n(B).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await U(()=>{n(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await U(()=>{n(r.style.transform).toContain("translateY(0")}),await n(B).toHaveTextContent("id asc"),await d.click(r),await n(B).toHaveTextContent("id desc")}},be={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{ariaLabel:"Release checklist table",columns:h,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ge={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:h,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ve={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{caption:0,columns:h,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const o=w(t).getByRole("table",{name:"0"});await n(o).not.toHaveAttribute("aria-label")}},he={render:()=>a.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(m,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:h,data:g,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=w(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},xe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Ua(){const[t,e]=l.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:ze,children:t})]}),a.jsx(m,{columns:h,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const Se={render:()=>a.jsx(Ua,{}),play:async({canvasElement:t})=>{const e=w(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await d.keyboard("{ArrowRight}");const B=e.getByRole("button",{name:"Component sort ascending"});await n(B).toHaveFocus(),await d.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await d.keyboard("{End}");const Le=e.getByRole("button",{name:"Status sort ascending"});await n(Le).toHaveFocus(),await d.keyboard("{Home}"),await n(r).toHaveFocus(),await d.keyboard("{PageDown}");const A=e.getByRole("button",{name:"Component sort ascending"});await n(A).toHaveFocus(),await d.keyboard("{PageUp}"),await n(r).toHaveFocus(),await d.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const L=e.getByRole("button",{name:"Issue sort ascending"}),E=L.closest("th");await n(E).toHaveAttribute("aria-sort","descending"),v.keyDown(L,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(E).toHaveAttribute("aria-sort","descending"),L.focus(),v.keyDown(L,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(E).toHaveAttribute("aria-sort","descending"),await d.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(E).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});R.focus(),v.keyDown(R,{key:"ArrowRight",ctrlKey:!0}),v.keyDown(R,{key:"ArrowLeft",metaKey:!0}),v.keyDown(R,{key:"End",ctrlKey:!0}),v.keyDown(R,{key:"Home",altKey:!0}),v.keyDown(R,{key:"PageDown",metaKey:!0}),v.keyDown(R,{key:"PageUp",ctrlKey:!0}),await n(R).toHaveFocus(),v.keyDown(R,{key:"Enter",ctrlKey:!0}),v.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(E).toHaveAttribute("aria-sort","ascending");const P=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});P.preventDefault(),R.dispatchEvent(P),await n(e.getByText("id asc")).toBeInTheDocument(),await n(E).toHaveAttribute("aria-sort","ascending"),await d.keyboard("{Shift>}{Enter}{/Shift}"),await U(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(E).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await d.keyboard("{Shift>}{Space}{/Shift}"),await U(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(E).toHaveAttribute("aria-sort","ascending")})}},fe={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:C,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),a.jsx("div",{dir:"rtl",children:a.jsx(m,{columns:h,data:g,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});o.focus(),v.keyDown(o,{key:"ArrowLeft",ctrlKey:!0}),v.keyDown(o,{key:"ArrowRight",metaKey:!0}),v.keyDown(o,{key:"ArrowLeft",altKey:!0}),await n(o).toHaveFocus(),await d.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await d.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await d.keyboard("{ArrowRight}"),await n(o).toHaveFocus()}};function za(){const[t,e]=l.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:C,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:ze,children:t})]}),a.jsx(m,{columns:h,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const Be={render:()=>a.jsx(za,{}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),vt(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),vt(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),ht(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),ht(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await d.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},Re={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:h,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await d.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ke={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await d.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},Te={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await d.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},He={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await d.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},De={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"   ",header:a.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const o=e.getByRole("button",{name:"Column 1 sort descending"});await d.click(o),await n(e.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Ae={render:()=>a.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),a.jsx(m,{columns:[{key:"status",header:a.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Release status"});await n(o).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await n(o).not.toHaveAttribute("aria-label"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await d.click(o),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Ee={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(p,{maxWidth:"min(100%, 620px)",children:a.jsx(m,{columns:t,data:g,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Ga(){const[t,e]=l.useState(!1),o=l.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:C,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:ze,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(m,{columns:o,data:g,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ce={render:()=>a.jsx(Ga,{}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await d.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},ba=g.map(t=>({...t,note:""})),ga=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Ie={render:()=>a.jsx(p,{maxWidth:"min(100%, 720px)",children:a.jsx(m,{columns:ga,data:ba,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await d.type(o,"persist me"),await d.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ke={render:()=>a.jsx(p,{maxWidth:"min(100%, 720px)",children:a.jsx(m,{columns:ga,data:ba,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await d.type(o,"persist me"),await d.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},_a=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Fe={render:()=>a.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(m,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:_a,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=w(t);await d.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var xt,St,ft;te.parameters={...te.parameters,docs:{...(xt=te.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(ft=(St=te.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};var Bt,Rt,kt;ne.parameters={...ne.parameters,docs:{...(Bt=ne.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(kt=(Rt=ne.parameters)==null?void 0:Rt.docs)==null?void 0:kt.source}}};var Tt,Ht,Dt;ae.parameters={...ae.parameters,docs:{...(Tt=ae.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Dt=(Ht=ae.parameters)==null?void 0:Ht.docs)==null?void 0:Dt.source}}};var At,Et,Ct;oe.parameters={...oe.parameters,docs:{...(At=oe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ct=(Et=oe.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var It,Kt,Ft;re.parameters={...re.parameters,docs:{...(It=re.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ft=(Kt=re.parameters)==null?void 0:Kt.docs)==null?void 0:Ft.source}}};var jt,Lt,Wt;se.parameters={...se.parameters,docs:{...(jt=se.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Wt=(Lt=se.parameters)==null?void 0:Lt.docs)==null?void 0:Wt.source}}};var Pt,Nt,$t;ie.parameters={...ie.parameters,docs:{...(Pt=ie.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 420px)" gap={10}>
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
    await expect(scrollContainer).toHaveAttribute("aria-keyshortcuts", "ArrowLeft ArrowRight Home End PageDown PageUp");
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
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After table"
    })).toHaveFocus();
  }
}`,...($t=(Nt=ie.parameters)==null?void 0:Nt.docs)==null?void 0:$t.source}}};var qt,Mt,Vt;ce.parameters={...ce.parameters,docs:{...(qt=ce.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Vt=(Mt=ce.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};var Ot,Ut,zt;ue.parameters={...ue.parameters,docs:{...(Ot=ue.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(zt=(Ut=ue.parameters)==null?void 0:Ut.docs)==null?void 0:zt.source}}};var Gt,_t,Yt;le.parameters={...le.parameters,docs:{...(Gt=le.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Yt=(_t=le.parameters)==null?void 0:_t.docs)==null?void 0:Yt.source}}};var Jt,Qt,Xt;de.parameters={...de.parameters,docs:{...(Jt=de.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(Xt=(Qt=de.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,en,tn;me.parameters={...me.parameters,docs:{...(Zt=me.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(tn=(en=me.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;ye.parameters={...ye.parameters,docs:{...(nn=ye.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=ye.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,sn,cn;pe.parameters={...pe.parameters,docs:{...(rn=pe.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(cn=(sn=pe.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var un,ln,dn;we.parameters={...we.parameters,docs:{...(un=we.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(dn=(ln=we.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var mn,yn,pn;be.parameters={...be.parameters,docs:{...(mn=be.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(pn=(yn=be.parameters)==null?void 0:yn.docs)==null?void 0:pn.source}}};var wn,bn,gn;ge.parameters={...ge.parameters,docs:{...(wn=ge.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(gn=(bn=ge.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var vn,hn,xn;ve.parameters={...ve.parameters,docs:{...(vn=ve.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(xn=(hn=ve.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var Sn,fn,Bn;he.parameters={...he.parameters,docs:{...(Sn=he.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Bn=(fn=he.parameters)==null?void 0:fn.docs)==null?void 0:Bn.source}}};var Rn,kn,Tn;xe.parameters={...xe.parameters,docs:{...(Rn=xe.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Tn=(kn=xe.parameters)==null?void 0:kn.docs)==null?void 0:Tn.source}}};var Hn,Dn,An;Se.parameters={...Se.parameters,docs:{...(Hn=Se.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(An=(Dn=Se.parameters)==null?void 0:Dn.docs)==null?void 0:An.source}}};var En,Cn,In;fe.parameters={...fe.parameters,docs:{...(En=fe.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(In=(Cn=fe.parameters)==null?void 0:Cn.docs)==null?void 0:In.source}}};var Kn,Fn,jn;Be.parameters={...Be.parameters,docs:{...(Kn=Be.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(jn=(Fn=Be.parameters)==null?void 0:Fn.docs)==null?void 0:jn.source}}};var Ln,Wn,Pn;Re.parameters={...Re.parameters,docs:{...(Ln=Re.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(Pn=(Wn=Re.parameters)==null?void 0:Wn.docs)==null?void 0:Pn.source}}};var Nn,$n,qn;ke.parameters={...ke.parameters,docs:{...(Nn=ke.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
}`,...(qn=($n=ke.parameters)==null?void 0:$n.docs)==null?void 0:qn.source}}};var Mn,Vn,On;Te.parameters={...Te.parameters,docs:{...(Mn=Te.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(On=(Vn=Te.parameters)==null?void 0:Vn.docs)==null?void 0:On.source}}};var Un,zn,Gn;He.parameters={...He.parameters,docs:{...(Un=He.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(Gn=(zn=He.parameters)==null?void 0:zn.docs)==null?void 0:Gn.source}}};var _n,Yn,Jn;De.parameters={...De.parameters,docs:{...(_n=De.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Jn=(Yn=De.parameters)==null?void 0:Yn.docs)==null?void 0:Jn.source}}};var Qn,Xn,Zn;Ae.parameters={...Ae.parameters,docs:{...(Qn=Ae.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
}`,...(Zn=(Xn=Ae.parameters)==null?void 0:Xn.docs)==null?void 0:Zn.source}}};var ea,ta,na;Ee.parameters={...Ee.parameters,docs:{...(ea=Ee.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(na=(ta=Ee.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var aa,oa,ra;Ce.parameters={...Ce.parameters,docs:{...(aa=Ce.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(ra=(oa=Ce.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var sa,ia,ca;Ie.parameters={...Ie.parameters,docs:{...(sa=Ie.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ca=(ia=Ie.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var ua,la,da;Ke.parameters={...Ke.parameters,docs:{...(ua=Ke.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(da=(la=Ke.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ma,ya,pa;Fe.parameters={...Fe.parameters,docs:{...(ma=Fe.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(pa=(ya=Fe.parameters)==null?void 0:ya.docs)==null?void 0:pa.source}}};const ao=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ge as AccessibleNameFallback,he as AccessibleNameLabelledByHeading,be as AccessibleNameWithoutCaption,He as AriaLabelHeaderAutoSortLabel,me as BlankEmptyContentFallback,De as BlankKeySortLabelFallback,de as BlankLoadingContentFallback,Ce as DeferredColumnsDefaultSortRecovery,ne as DescendingDefaultSortDirection,oe as EmptyState,Ie as FallbackRowKeyStability,Be as ImeCompositionGuard,Ee as InvalidDefaultSortKeyFallback,ce as KeyboardFocusRingAfterPointer,ue as KeyboardFocusRingShiftTabReentry,ie as KeyboardReachableScrollContainer,pe as LoadingDisablesResetsSortVisualState,le as LoadingState,Re as LocalizedSortLabels,ve as NumericCaptionName,ye as NumericFeedbackCopySemantics,we as PrimaryPointerOnlySortPress,te as ReleaseChecklist,Fe as RenderIndexSemantics,Te as RichTextHeaderAutoSortLabel,xe as RowHeaderSemantics,fe as RtlArrowNavigation,re as SingleRowSortDisabled,se as SingleSortableColumnShortcutHints,ke as SortLabelForCustomHeader,Ae as SortLabelledByPrecedence,Se as SortTelemetry,Ke as SourceIndexRowKeyStability,ae as WithRowAction,ao as __namedExportsOrder,no as default};
