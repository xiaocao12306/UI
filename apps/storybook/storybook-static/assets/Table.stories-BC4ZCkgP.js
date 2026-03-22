import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Ka}from"./Button-DirECuRH.js";import{r as u}from"./index-BWu4c2F4.js";import{B as Fa}from"./Badge-ZJmMstsz.js";import{within as p,expect as n,userEvent as l,fireEvent as S,waitFor as V}from"./index-DgAF9SIF.js";import{S as y,s as K,a as Ue}from"./storyShowcase-Bw5VyCj0.js";const pa="Enter Space",ja=`${pa} Home End PageDown PageUp ArrowLeft ArrowRight`,La=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),dt=400;function mt(t,e,o){if(!e)return null;const r=t.find(f=>String(f.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function yt(t,e,o){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const r=ze(Oe(t.header));return r.length>0?r:e}function pt(t,e){const o=t.trim();return o.length>0?o:e>=0?`Column ${e+1}`:"Column"}function d({columns:t,data:e,rowKey:o,caption:r,ariaLabel:f,ariaLabelledBy:Le,loading:H=!1,loadingContent:j="Loading data...",emptyContent:A="No data available.",defaultSortKey:R,defaultSortDirection:z="asc",getSortAriaLabel:ga=wt,getSortStatusText:Ge=Wa,onSortChange:We}){var Xe;const _e=je(r),va=je(j),ha=je(A),xa=va?j:"Loading data...",Sa=ha?A:"No data available.",U=ee(Le),Ye=U?void 0:ee(f,_e?void 0:"Data table"),W=u.useRef({}),G=u.useRef(null),Pe=u.useRef(null),_=u.useRef(0),P=u.useRef(null),Y=u.useRef(null),N=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[fa,Ne]=u.useState(null),[Ba,C]=u.useState(null),[Ra,$]=u.useState(null);u.useEffect(()=>{var i;const c=((i=G.current)==null?void 0:i.ownerDocument)??document,m=b=>{b.metaKey||b.altKey||b.ctrlKey||(N.current=!0)},w=b=>{"button"in b&&!Ve(b.button)||"ctrlKey"in b&&b.ctrlKey||(N.current=!1)};return c.addEventListener("keydown",m,!0),c.addEventListener("pointerdown",w,!0),c.addEventListener("mousedown",w,!0),c.addEventListener("touchstart",w,!0),()=>{c.removeEventListener("keydown",m,!0),c.removeEventListener("pointerdown",w,!0),c.removeEventListener("mousedown",w,!0),c.removeEventListener("touchstart",w,!0)}},[]);const J=u.useCallback(()=>{Pe.current=null,_.current=0,P.current!==null&&((Y.current??window).clearTimeout(P.current),P.current=null),Y.current=null},[]);u.useEffect(()=>()=>{J()},[J]);const[h,$e]=u.useState(()=>mt(t,R,z)),Q=u.useMemo(()=>{const c=new Map;return t.map(m=>{const w=String(m.key),i=c.get(w)??0;return c.set(w,i+1),i===0?w:`${w}__duplicate-${i}`})},[t]),E=u.useMemo(()=>H||e.length<=1?[]:t.reduce((c,m,w)=>(m.sortable&&c.push(Q[w]??`${String(m.key)}__index-${w}`),c),[]),[t,e.length,H,Q]);u.useEffect(()=>{if(!h)return;const c=t.find(m=>String(m.key)===h.key);c!=null&&c.sortable||$e(null)},[t,h]),u.useEffect(()=>{if(h)return;const c=mt(t,R,z);c&&$e(c)},[t,z,R,h]);const qe=u.useMemo(()=>e.map((c,m)=>String(o?o(c,m):m)),[e,o]),ka=u.useMemo(()=>{const c=new Map;return qe.map((m,w)=>{const i=c.get(m)??0;return c.set(m,i+1),i===0?m:`${m}__dup-${w}`})},[qe]);u.useEffect(()=>{},[o,qe]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const q=u.useMemo(()=>{const c=e.map((i,b)=>({row:i,sourceIndex:b}));if(!h)return c;const m=t.find(i=>String(i.key)===h.key);if(!(m!=null&&m.sortable))return c;const w=m.sortAccessor??(i=>{const b=i[String(m.key)];return b instanceof Date||typeof b=="number"||typeof b=="string"?b:String(b??"")});return c.sort((i,b)=>{const B=w(i.row),D=w(b.row);if(typeof B=="string"&&typeof D=="string"){const F=La.compare(B,D);return F!==0?h.direction==="asc"?F:-F:i.sourceIndex-b.sourceIndex}const I=B instanceof Date?B.getTime():B,L=D instanceof Date?D.getTime():D;return I<L?h.direction==="asc"?-1:1:I>L?h.direction==="asc"?1:-1:i.sourceIndex-b.sourceIndex})},[t,e,h]),Je=u.useMemo(()=>{var i;if(H||q.length<=1||!h)return"";const c=t.findIndex(b=>String(b.key)===h.key),m=c>=0?t[c]:void 0;if(!(m!=null&&m.sortable))return"";((i=G.current)==null?void 0:i.ownerDocument)??typeof document>"u";const w=yt(m,pt(h.key,c));return Ge({columnKey:h.key,columnHeader:w,direction:h.direction})},[t,Ge,H,h,q.length]),O=!H&&q.length>1&&t.some(c=>c.sortable),Qe=Math.max(t.length,1);return((Xe=G.current)==null?void 0:Xe.ownerDocument)??typeof document>"u",u.useEffect(()=>{O||(Ne(null),C(null),$(null))},[O]),a.jsxs("div",{ref:G,"data-aurora-table-scroll-container":"",tabIndex:O?void 0:0,"aria-label":O||U?void 0:Ye??"Data table scroll container","aria-labelledby":O?void 0:U,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Je?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Je}):null,a.jsxs("table",{"aria-label":Ye,"aria-labelledby":U,"aria-busy":H||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[_e?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map((c,m)=>{const w=String(c.key),i=Q[m]??`${w}__index-${m}`,b=!!c.sortable,B=q.length>1,D=b&&(h==null?void 0:h.key)===w?h.direction:void 0,I=!H&&B?D:void 0,L=I?I==="asc"?"ascending":"descending":void 0,F=c.align??"left",Ze=yt(c,pt(w,m)),X=D==="asc"?"desc":"asc",Ta=ga({columnKey:w,columnHeader:Ze,nextDirection:X}),et=ee(c.sortLabelledBy),Ha=et?void 0:ee(Ta,wt({columnHeader:Ze,nextDirection:X})),T=H||!B,Da=T?void 0:E.length>1?ja:pa,tt=!T&&fa===i,nt=!T&&Ba===i,at=!T&&Ra===i,Aa=tt||at,ot=()=>{T||($e({key:w,direction:X}),We==null||We(w,X))};return a.jsx("th",{scope:"col","aria-sort":L,style:{textAlign:F,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:c.width},children:b?a.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:s=>{W.current[i]=s},"aria-labelledby":et,"aria-label":Ha,"aria-keyshortcuts":Da,disabled:T,onClick:s=>{const x=Date.now()-_.current,Z=s.detail===0&&Pe.current===i&&_.current>0&&x<=dt;J(),!Z&&ot()},onMouseEnter:()=>{T||Ne(i)},onMouseLeave:()=>{Ne(s=>s===i?null:s),C(s=>s===i?null:s)},onPointerDown:s=>{T||s.ctrlKey||Ve(s.button)&&(N.current=!1,$(x=>x===i?null:x),C(i))},onPointerUp:s=>{Ve(s.button)&&C(x=>x===i?null:x)},onMouseDown:s=>{T||s.button!==0||s.ctrlKey||(N.current=!1,$(x=>x===i?null:x),C(i))},onMouseUp:s=>{s.button===0&&C(x=>x===i?null:x)},onPointerCancel:()=>{C(s=>s===i?null:s)},onFocus:()=>{if(T){$(s=>s===i?null:s);return}$(s=>Na(W.current[i],N.current)?i:s===i?null:s)},onBlur:()=>{$(s=>s===i?null:s),C(s=>s===i?null:s)},onKeyDown:s=>{var Z,rt,st,it,ct;if(N.current=!0,s.altKey||s.ctrlKey||s.metaKey)return;if(s.key==="Home"){const k=E[0];if(!k)return;s.preventDefault(),(Z=W.current[k])==null||Z.focus();return}if(s.key==="End"){const k=E[E.length-1];if(!k)return;s.preventDefault(),(rt=W.current[k])==null||rt.focus();return}if(s.key==="PageDown"||s.key==="PageUp"){const k=E.indexOf(i);if(k<0)return;const ut=s.key==="PageDown"?1:-1,M=Math.max(0,Math.min(E.length-1,k+ut));if(M===k)return;s.preventDefault();const Me=E[M];(st=W.current[Me])==null||st.focus();return}if(s.key==="ArrowLeft"||s.key==="ArrowRight"){const k=E.indexOf(i);if(k<0)return;const M=(s.currentTarget.ownerDocument.defaultView??window).getComputedStyle(s.currentTarget).direction,Me=(it=s.currentTarget.closest("[dir]"))==null?void 0:it.getAttribute("dir"),Ca=(M==="rtl"||M==="ltr"?M:Me==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",Ea=s.key===Ca?1:-1,lt=Math.max(0,Math.min(E.length-1,k+Ea));if(lt===k)return;s.preventDefault();const Ia=E[lt];(ct=W.current[Ia])==null||ct.focus();return}if(!bt(s.key)||Pa(s)||(s.preventDefault(),s.repeat))return;C(i),Pe.current=i,_.current=Date.now();const x=s.currentTarget.ownerDocument.defaultView??window;P.current!==null&&(Y.current??x).clearTimeout(P.current),Y.current=x,P.current=x.setTimeout(()=>{J()},dt),ot()},onKeyUp:s=>{s.altKey||s.ctrlKey||s.metaKey||bt(s.key)&&C(x=>x===i?null:x)},style:{border:Aa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:nt?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":tt?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:T?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:T?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:at?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:nt?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[c.header,a.jsx("span",{"aria-hidden":"true",children:I==="asc"?"▲":I==="desc"?"▼":"↕"})]}):c.header},i)})})}),a.jsx("tbody",{children:H?a.jsx("tr",{children:a.jsx("td",{colSpan:Qe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:xa})})}):q.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Qe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Sa})})}):q.map((c,m)=>{const w=c.row,i=String(c.sourceIndex),b=ka[c.sourceIndex]??i;return a.jsx("tr",{style:{background:m%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((B,D)=>{const I=B.render?B.render(w,m,c.sourceIndex):String(w[String(B.key)]??""),L=Q[D]??`${String(B.key)}__index-${D}`,F={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:B.align??"left"};return B.rowHeader?a.jsx("th",{scope:"row",style:{...F,fontWeight:"var(--aurora-font-weight-medium)"},children:I},L):a.jsx("td",{style:F,children:I},L)})},b)})})]})]})}function wt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Wa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function bt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Pa(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ve(t){return typeof t!="number"||t<=0}function Na(t,e){if(!t)return e;try{return t.matches(":focus-visible")||e}catch{return e}}function je(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>je(e)):u.isValidElement(t)}function Oe(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return ze(t.map(o=>Oe(o)).filter(o=>o.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=ze(e["aria-label"]);if(o.length>0)return o}return Oe(e.children)}function ze(t){return t.replace(/\s+/g," ").trim()}function ee(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],v=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(Fa,{tone:e,children:t.status})}}];function gt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function vt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function $a(){const[t,e]=u.useState(!1);return a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(d,{columns:v,data:g,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const Xa={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},te={render:()=>a.jsx(y,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:v,data:g,rowKey:t=>t.id,defaultSortKey:"id"})})},ne={render:()=>a.jsx(y,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:v,data:g,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ae={render:()=>{const t=[...v,{key:"action",header:"Action",width:160,render:e=>a.jsx(Ka,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:g,rowKey:e=>e.id})}},oe={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:v,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},re={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:v,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},se={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await n(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},ie={render:()=>a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=p(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await l.tab(),await n(o).toHaveFocus(),await l.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ce={render:()=>a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:K,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:v,data:g,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});S.mouseDown(r),r.focus(),await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},ue={render:()=>a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:K,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),a.jsx(d,{columns:v,data:g,defaultSortKey:"id"}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});S.mouseDown(o),o.focus(),await l.click(r),await l.tab({shift:!0}),await n(o).toHaveFocus(),await n(o.style.boxShadow).toContain("0 0 0 3px")}},le={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:v,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),f=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(f).not.toHaveAttribute("aria-sort")}},de={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:v,data:g,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("status")).toHaveTextContent("Loading data...")}},me={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:v,data:[],emptyContent:"   "})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("status")).toHaveTextContent("No data available.")}},ye={render:()=>a.jsxs(y,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx(d,{columns:v,data:g,loading:!0,loadingContent:0}),a.jsx(d,{columns:v,data:[],emptyContent:0})]}),play:async({canvasElement:t})=>{const o=p(t).getAllByRole("status");await n(o).toHaveLength(2),await n(o[0]).toHaveTextContent("0"),await n(o[1]).toHaveTextContent("0")}},pe={render:()=>a.jsx($a,{}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});S.mouseDown(r),await l.click(o);const f=e.getByRole("button",{name:"Issue sort descending"});await n(f).toBeDisabled(),await n(f.style.transform).toContain("translateY(0"),await n(f.style.boxShadow).toBe("none")}},we={render:function(){const[e,o]=u.useState("id asc");return a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:K,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:v,data:g,defaultSortKey:"id",onSortChange:(r,f)=>o(`${r} ${f}`)})]})},play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),f=e.getByTestId("primary-pointer-sort-state");await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),S.mouseDown(r,{button:2}),S.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(f).toHaveTextContent("id asc"),S.mouseDown(r,{button:0}),await V(()=>{n(r.style.transform).toContain("translateY(1px)")}),S.pointerCancel(r),await V(()=>{n(r.style.transform).toContain("translateY(0")}),await n(f).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await V(()=>{n(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await V(()=>{n(r.style.transform).toContain("translateY(0")}),await n(f).toHaveTextContent("id asc"),await l.click(r),await n(f).toHaveTextContent("id desc")}},be={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{ariaLabel:"Release checklist table",columns:v,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ge={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:v,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ve={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{caption:0,columns:v,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const o=p(t).getByRole("table",{name:"0"});await n(o).not.toHaveAttribute("aria-label")}},he={render:()=>a.jsxs(y,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:v,data:g,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=p(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},xe={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function qa(){const[t,e]=u.useState("id asc");return a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:K,children:["Active sort: ",a.jsx("strong",{style:Ue,children:t})]}),a.jsx(d,{columns:v,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const Se={render:()=>a.jsx(qa,{}),play:async({canvasElement:t})=>{const e=p(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await l.keyboard("{ArrowRight}");const f=e.getByRole("button",{name:"Component sort ascending"});await n(f).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{End}");const Le=e.getByRole("button",{name:"Status sort ascending"});await n(Le).toHaveFocus(),await l.keyboard("{Home}"),await n(r).toHaveFocus(),await l.keyboard("{PageDown}");const H=e.getByRole("button",{name:"Component sort ascending"});await n(H).toHaveFocus(),await l.keyboard("{PageUp}"),await n(r).toHaveFocus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const j=e.getByRole("button",{name:"Issue sort ascending"}),A=j.closest("th");await n(A).toHaveAttribute("aria-sort","descending"),S.keyDown(j,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","descending"),j.focus(),S.keyDown(j,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","descending"),await l.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});R.focus(),S.keyDown(R,{key:"ArrowRight",ctrlKey:!0}),S.keyDown(R,{key:"ArrowLeft",metaKey:!0}),S.keyDown(R,{key:"End",ctrlKey:!0}),S.keyDown(R,{key:"Home",altKey:!0}),S.keyDown(R,{key:"PageDown",metaKey:!0}),S.keyDown(R,{key:"PageUp",ctrlKey:!0}),await n(R).toHaveFocus(),S.keyDown(R,{key:"Enter",ctrlKey:!0}),S.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","ascending"),await l.keyboard("{Shift>}{Enter}{/Shift}"),await V(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(A).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await V(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(A).toHaveAttribute("aria-sort","ascending")})}},fe={render:()=>a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:K,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),a.jsx("div",{dir:"rtl",children:a.jsx(d,{columns:v,data:g,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});o.focus(),S.keyDown(o,{key:"ArrowLeft",ctrlKey:!0}),S.keyDown(o,{key:"ArrowRight",metaKey:!0}),S.keyDown(o,{key:"ArrowLeft",altKey:!0}),await n(o).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus()}};function Ma(){const[t,e]=u.useState("id asc");return a.jsxs(y,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:K,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:K,children:["Active sort: ",a.jsx("strong",{style:Ue,children:t})]}),a.jsx(d,{columns:v,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const Be={render:()=>a.jsx(Ma,{}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),gt(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),gt(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),vt(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),vt(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},Re={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:v,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await l.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ke={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},Te={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},He={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},De={render:()=>a.jsx(y,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"   ",header:a.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const o=e.getByRole("button",{name:"Column 1 sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Ae={render:()=>a.jsxs(y,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),a.jsx(d,{columns:[{key:"status",header:a.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Release status"});await n(o).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await n(o).not.toHaveAttribute("aria-label"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await l.click(o),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Ce={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(y,{maxWidth:"min(100%, 620px)",children:a.jsx(d,{columns:t,data:g,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Va(){const[t,e]=u.useState(!1),o=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(y,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:K,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:K,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:Ue,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:o,data:g,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ee={render:()=>a.jsx(Va,{}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await l.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},wa=g.map(t=>({...t,note:""})),ba=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Ie={render:()=>a.jsx(y,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:ba,data:wa,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ke={render:()=>a.jsx(y,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:ba,data:wa,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Oa=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Fe={render:()=>a.jsxs(y,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:K,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Oa,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=p(t);await l.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var ht,xt,St;te.parameters={...te.parameters,docs:{...(ht=te.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(St=(xt=te.parameters)==null?void 0:xt.docs)==null?void 0:St.source}}};var ft,Bt,Rt;ne.parameters={...ne.parameters,docs:{...(ft=ne.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Rt=(Bt=ne.parameters)==null?void 0:Bt.docs)==null?void 0:Rt.source}}};var kt,Tt,Ht;ae.parameters={...ae.parameters,docs:{...(kt=ae.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Ht=(Tt=ae.parameters)==null?void 0:Tt.docs)==null?void 0:Ht.source}}};var Dt,At,Ct;oe.parameters={...oe.parameters,docs:{...(Dt=oe.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Ct=(At=oe.parameters)==null?void 0:At.docs)==null?void 0:Ct.source}}};var Et,It,Kt;re.parameters={...re.parameters,docs:{...(Et=re.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Kt=(It=re.parameters)==null?void 0:It.docs)==null?void 0:Kt.source}}};var Ft,jt,Lt;se.parameters={...se.parameters,docs:{...(Ft=se.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Lt=(jt=se.parameters)==null?void 0:jt.docs)==null?void 0:Lt.source}}};var Wt,Pt,Nt;ie.parameters={...ie.parameters,docs:{...(Wt=ie.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
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
    await expect(scrollContainer).toHaveAttribute("tabindex", "0");
    await userEvent.tab();
    await expect(scrollContainer).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After table"
    })).toHaveFocus();
  }
}`,...(Nt=(Pt=ie.parameters)==null?void 0:Pt.docs)==null?void 0:Nt.source}}};var $t,qt,Mt;ce.parameters={...ce.parameters,docs:{...($t=ce.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Mt=(qt=ce.parameters)==null?void 0:qt.docs)==null?void 0:Mt.source}}};var Vt,Ot,zt;ue.parameters={...ue.parameters,docs:{...(Vt=ue.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(zt=(Ot=ue.parameters)==null?void 0:Ot.docs)==null?void 0:zt.source}}};var Ut,Gt,_t;le.parameters={...le.parameters,docs:{...(Ut=le.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(_t=(Gt=le.parameters)==null?void 0:Gt.docs)==null?void 0:_t.source}}};var Yt,Jt,Qt;de.parameters={...de.parameters,docs:{...(Yt=de.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(Qt=(Jt=de.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,en;me.parameters={...me.parameters,docs:{...(Xt=me.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(en=(Zt=me.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,an;ye.parameters={...ye.parameters,docs:{...(tn=ye.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(an=(nn=ye.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,rn,sn;pe.parameters={...pe.parameters,docs:{...(on=pe.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(sn=(rn=pe.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var cn,un,ln;we.parameters={...we.parameters,docs:{...(cn=we.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(ln=(un=we.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var dn,mn,yn;be.parameters={...be.parameters,docs:{...(dn=be.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(yn=(mn=be.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};var pn,wn,bn;ge.parameters={...ge.parameters,docs:{...(pn=ge.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(bn=(wn=ge.parameters)==null?void 0:wn.docs)==null?void 0:bn.source}}};var gn,vn,hn;ve.parameters={...ve.parameters,docs:{...(gn=ve.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(hn=(vn=ve.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var xn,Sn,fn;he.parameters={...he.parameters,docs:{...(xn=he.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(fn=(Sn=he.parameters)==null?void 0:Sn.docs)==null?void 0:fn.source}}};var Bn,Rn,kn;xe.parameters={...xe.parameters,docs:{...(Bn=xe.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(kn=(Rn=xe.parameters)==null?void 0:Rn.docs)==null?void 0:kn.source}}};var Tn,Hn,Dn;Se.parameters={...Se.parameters,docs:{...(Tn=Se.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Dn=(Hn=Se.parameters)==null?void 0:Hn.docs)==null?void 0:Dn.source}}};var An,Cn,En;fe.parameters={...fe.parameters,docs:{...(An=fe.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(En=(Cn=fe.parameters)==null?void 0:Cn.docs)==null?void 0:En.source}}};var In,Kn,Fn;Be.parameters={...Be.parameters,docs:{...(In=Be.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Fn=(Kn=Be.parameters)==null?void 0:Kn.docs)==null?void 0:Fn.source}}};var jn,Ln,Wn;Re.parameters={...Re.parameters,docs:{...(jn=Re.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Wn=(Ln=Re.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var Pn,Nn,$n;ke.parameters={...ke.parameters,docs:{...(Pn=ke.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...($n=(Nn=ke.parameters)==null?void 0:Nn.docs)==null?void 0:$n.source}}};var qn,Mn,Vn;Te.parameters={...Te.parameters,docs:{...(qn=Te.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Vn=(Mn=Te.parameters)==null?void 0:Mn.docs)==null?void 0:Vn.source}}};var On,zn,Un;He.parameters={...He.parameters,docs:{...(On=He.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(Un=(zn=He.parameters)==null?void 0:zn.docs)==null?void 0:Un.source}}};var Gn,_n,Yn;De.parameters={...De.parameters,docs:{...(Gn=De.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(Yn=(_n=De.parameters)==null?void 0:_n.docs)==null?void 0:Yn.source}}};var Jn,Qn,Xn;Ae.parameters={...Ae.parameters,docs:{...(Jn=Ae.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(Xn=(Qn=Ae.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var Zn,ea,ta;Ce.parameters={...Ce.parameters,docs:{...(Zn=Ce.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Ce.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,aa,oa;Ee.parameters={...Ee.parameters,docs:{...(na=Ee.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(aa=Ee.parameters)==null?void 0:aa.docs)==null?void 0:oa.source}}};var ra,sa,ia;Ie.parameters={...Ie.parameters,docs:{...(ra=Ie.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(sa=Ie.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var ca,ua,la;Ke.parameters={...Ke.parameters,docs:{...(ca=Ke.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(la=(ua=Ke.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var da,ma,ya;Fe.parameters={...Fe.parameters,docs:{...(da=Fe.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(ma=Fe.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};const Za=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ge as AccessibleNameFallback,he as AccessibleNameLabelledByHeading,be as AccessibleNameWithoutCaption,He as AriaLabelHeaderAutoSortLabel,me as BlankEmptyContentFallback,De as BlankKeySortLabelFallback,de as BlankLoadingContentFallback,Ee as DeferredColumnsDefaultSortRecovery,ne as DescendingDefaultSortDirection,oe as EmptyState,Ie as FallbackRowKeyStability,Be as ImeCompositionGuard,Ce as InvalidDefaultSortKeyFallback,ce as KeyboardFocusRingAfterPointer,ue as KeyboardFocusRingShiftTabReentry,ie as KeyboardReachableScrollContainer,pe as LoadingDisablesResetsSortVisualState,le as LoadingState,Re as LocalizedSortLabels,ve as NumericCaptionName,ye as NumericFeedbackCopySemantics,we as PrimaryPointerOnlySortPress,te as ReleaseChecklist,Fe as RenderIndexSemantics,Te as RichTextHeaderAutoSortLabel,xe as RowHeaderSemantics,fe as RtlArrowNavigation,re as SingleRowSortDisabled,se as SingleSortableColumnShortcutHints,ke as SortLabelForCustomHeader,Ae as SortLabelledByPrecedence,Se as SortTelemetry,Ke as SourceIndexRowKeyStability,ae as WithRowAction,Za as __namedExportsOrder,Xa as default};
