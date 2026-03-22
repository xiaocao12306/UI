import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as ga}from"./Button-DirECuRH.js";import{r as u}from"./index-BWu4c2F4.js";import{B as va}from"./Badge-ZJmMstsz.js";import{within as w,expect as n,userEvent as l,fireEvent as x,waitFor as V}from"./index-DgAF9SIF.js";import{S as p,s as C,a as Me}from"./storyShowcase-Bw5VyCj0.js";const ta="Enter Space",ha=`${ta} Home End PageDown PageUp ArrowLeft ArrowRight`,xa=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),it=400;function ct(t,e,o){if(!e)return null;const r=t.find(S=>String(S.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function ut(t,e,o){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const r=qe($e(t.header));return r.length>0?r:e}function lt(t,e){const o=t.trim();return o.length>0?o:e>=0?`Column ${e+1}`:"Column"}function m({columns:t,data:e,rowKey:o,caption:r,ariaLabel:S,ariaLabelledBy:Ce,loading:D=!1,loadingContent:L="Loading data...",emptyContent:K="No data available.",defaultSortKey:R,defaultSortDirection:z="asc",getSortAriaLabel:ra=dt,getSortStatusText:Ve=Sa,onSortChange:Ke}){var _e;const Oe=na(r),U=ee(Ce),ze=U?void 0:ee(S,Oe?void 0:"Data table"),W=u.useRef({}),G=u.useRef(null),je=u.useRef(null),_=u.useRef(0),P=u.useRef(null),Y=u.useRef(null),N=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[sa,Fe]=u.useState(null),[ia,A]=u.useState(null),[ca,$]=u.useState(null);u.useEffect(()=>{var i;const c=((i=G.current)==null?void 0:i.ownerDocument)??document,d=b=>{b.metaKey||b.altKey||b.ctrlKey||(N.current=!0)},y=b=>{"button"in b&&!Ne(b.button)||"ctrlKey"in b&&b.ctrlKey||(N.current=!1)};return c.addEventListener("keydown",d,!0),c.addEventListener("pointerdown",y,!0),c.addEventListener("mousedown",y,!0),c.addEventListener("touchstart",y,!0),()=>{c.removeEventListener("keydown",d,!0),c.removeEventListener("pointerdown",y,!0),c.removeEventListener("mousedown",y,!0),c.removeEventListener("touchstart",y,!0)}},[]);const J=u.useCallback(()=>{je.current=null,_.current=0,P.current!==null&&((Y.current??window).clearTimeout(P.current),P.current=null),Y.current=null},[]);u.useEffect(()=>()=>{J()},[J]);const[v,Le]=u.useState(()=>ct(t,R,z)),Q=u.useMemo(()=>{const c=new Map;return t.map(d=>{const y=String(d.key),i=c.get(y)??0;return c.set(y,i+1),i===0?y:`${y}__duplicate-${i}`})},[t]),E=u.useMemo(()=>D||e.length<=1?[]:t.reduce((c,d,y)=>(d.sortable&&c.push(Q[y]??`${String(d.key)}__index-${y}`),c),[]),[t,e.length,D,Q]);u.useEffect(()=>{if(!v)return;const c=t.find(d=>String(d.key)===v.key);c!=null&&c.sortable||Le(null)},[t,v]),u.useEffect(()=>{if(v)return;const c=ct(t,R,z);c&&Le(c)},[t,z,R,v]);const We=u.useMemo(()=>e.map((c,d)=>String(o?o(c,d):d)),[e,o]),ua=u.useMemo(()=>{const c=new Map;return We.map((d,y)=>{const i=c.get(d)??0;return c.set(d,i+1),i===0?d:`${d}__dup-${y}`})},[We]);u.useEffect(()=>{},[o,We]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const q=u.useMemo(()=>{const c=e.map((i,b)=>({row:i,sourceIndex:b}));if(!v)return c;const d=t.find(i=>String(i.key)===v.key);if(!(d!=null&&d.sortable))return c;const y=d.sortAccessor??(i=>{const b=i[String(d.key)];return b instanceof Date||typeof b=="number"||typeof b=="string"?b:String(b??"")});return c.sort((i,b)=>{const B=y(i.row),H=y(b.row);if(typeof B=="string"&&typeof H=="string"){const j=xa.compare(B,H);return j!==0?v.direction==="asc"?j:-j:i.sourceIndex-b.sourceIndex}const I=B instanceof Date?B.getTime():B,F=H instanceof Date?H.getTime():H;return I<F?v.direction==="asc"?-1:1:I>F?v.direction==="asc"?1:-1:i.sourceIndex-b.sourceIndex})},[t,e,v]),Ue=u.useMemo(()=>{var i;if(D||q.length<=1||!v)return"";const c=t.findIndex(b=>String(b.key)===v.key),d=c>=0?t[c]:void 0;if(!(d!=null&&d.sortable))return"";((i=G.current)==null?void 0:i.ownerDocument)??typeof document>"u";const y=ut(d,lt(v.key,c));return Ve({columnKey:v.key,columnHeader:y,direction:v.direction})},[t,Ve,D,v,q.length]),O=!D&&q.length>1&&t.some(c=>c.sortable),Ge=Math.max(t.length,1);return((_e=G.current)==null?void 0:_e.ownerDocument)??typeof document>"u",u.useEffect(()=>{O||(Fe(null),A(null),$(null))},[O]),a.jsxs("div",{ref:G,"data-aurora-table-scroll-container":"",tabIndex:O?void 0:0,"aria-label":O||U?void 0:ze??"Data table scroll container","aria-labelledby":O?void 0:U,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Ue?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Ue}):null,a.jsxs("table",{"aria-label":ze,"aria-labelledby":U,"aria-busy":D||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[Oe?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map((c,d)=>{const y=String(c.key),i=Q[d]??`${y}__index-${d}`,b=!!c.sortable,B=q.length>1,H=b&&(v==null?void 0:v.key)===y?v.direction:void 0,I=!D&&B?H:void 0,F=I?I==="asc"?"ascending":"descending":void 0,j=c.align??"left",Ye=ut(c,lt(y,d)),X=H==="asc"?"desc":"asc",la=ra({columnKey:y,columnHeader:Ye,nextDirection:X}),Je=ee(c.sortLabelledBy),da=Je?void 0:ee(la,dt({columnHeader:Ye,nextDirection:X})),T=D||!B,ma=T?void 0:E.length>1?ha:ta,Qe=!T&&sa===i,Xe=!T&&ia===i,Ze=!T&&ca===i,ya=Qe||Ze,et=()=>{T||(Le({key:y,direction:X}),Ke==null||Ke(y,X))};return a.jsx("th",{scope:"col","aria-sort":F,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:c.width},children:b?a.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:s=>{W.current[i]=s},"aria-labelledby":Je,"aria-label":da,"aria-keyshortcuts":ma,disabled:T,onClick:s=>{const h=Date.now()-_.current,Z=s.detail===0&&je.current===i&&_.current>0&&h<=it;J(),!Z&&et()},onMouseEnter:()=>{T||Fe(i)},onMouseLeave:()=>{Fe(s=>s===i?null:s),A(s=>s===i?null:s)},onPointerDown:s=>{T||s.ctrlKey||Ne(s.button)&&(N.current=!1,$(h=>h===i?null:h),A(i))},onPointerUp:s=>{Ne(s.button)&&A(h=>h===i?null:h)},onMouseDown:s=>{T||s.button!==0||s.ctrlKey||(N.current=!1,$(h=>h===i?null:h),A(i))},onMouseUp:s=>{s.button===0&&A(h=>h===i?null:h)},onPointerCancel:()=>{A(s=>s===i?null:s)},onFocus:()=>{if(T){$(s=>s===i?null:s);return}$(s=>Ba(W.current[i],N.current)?i:s===i?null:s)},onBlur:()=>{$(s=>s===i?null:s),A(s=>s===i?null:s)},onKeyDown:s=>{var Z,tt,nt,at,ot;if(N.current=!0,s.altKey||s.ctrlKey||s.metaKey)return;if(s.key==="Home"){const k=E[0];if(!k)return;s.preventDefault(),(Z=W.current[k])==null||Z.focus();return}if(s.key==="End"){const k=E[E.length-1];if(!k)return;s.preventDefault(),(tt=W.current[k])==null||tt.focus();return}if(s.key==="PageDown"||s.key==="PageUp"){const k=E.indexOf(i);if(k<0)return;const rt=s.key==="PageDown"?1:-1,M=Math.max(0,Math.min(E.length-1,k+rt));if(M===k)return;s.preventDefault();const Pe=E[M];(nt=W.current[Pe])==null||nt.focus();return}if(s.key==="ArrowLeft"||s.key==="ArrowRight"){const k=E.indexOf(i);if(k<0)return;const M=(s.currentTarget.ownerDocument.defaultView??window).getComputedStyle(s.currentTarget).direction,Pe=(at=s.currentTarget.closest("[dir]"))==null?void 0:at.getAttribute("dir"),pa=(M==="rtl"||M==="ltr"?M:Pe==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",wa=s.key===pa?1:-1,st=Math.max(0,Math.min(E.length-1,k+wa));if(st===k)return;s.preventDefault();const ba=E[st];(ot=W.current[ba])==null||ot.focus();return}if(!mt(s.key)||fa(s)||(s.preventDefault(),s.repeat))return;A(i),je.current=i,_.current=Date.now();const h=s.currentTarget.ownerDocument.defaultView??window;P.current!==null&&(Y.current??h).clearTimeout(P.current),Y.current=h,P.current=h.setTimeout(()=>{J()},it),et()},onKeyUp:s=>{s.altKey||s.ctrlKey||s.metaKey||mt(s.key)&&A(h=>h===i?null:h)},style:{border:ya?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Xe?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Qe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:T?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:T?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Ze?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Xe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[c.header,a.jsx("span",{"aria-hidden":"true",children:I==="asc"?"▲":I==="desc"?"▼":"↕"})]}):c.header},i)})})}),a.jsx("tbody",{children:D?a.jsx("tr",{children:a.jsx("td",{colSpan:Ge,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:L})})}):q.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Ge,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:K})})}):q.map((c,d)=>{const y=c.row,i=String(c.sourceIndex),b=ua[c.sourceIndex]??i;return a.jsx("tr",{style:{background:d%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((B,H)=>{const I=B.render?B.render(y,d,c.sourceIndex):String(y[String(B.key)]??""),F=Q[H]??`${String(B.key)}__index-${H}`,j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:B.align??"left"};return B.rowHeader?a.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:I},F):a.jsx("td",{style:j,children:I},F)})},b)})})]})]})}function dt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Sa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function mt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function fa(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ne(t){return typeof t!="number"||t<=0}function Ba(t,e){if(!t)return e;try{return t.matches(":focus-visible")||e}catch{return e}}function na(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>na(e)):u.isValidElement(t)}function $e(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return qe(t.map(o=>$e(o)).filter(o=>o.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=qe(e["aria-label"]);if(o.length>0)return o}return $e(e.children)}function qe(t){return t.replace(/\s+/g," ").trim()}function ee(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],f=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(va,{tone:e,children:t.status})}}];function yt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function pt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function Ra(){const[t,e]=u.useState(!1);return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(m,{columns:f,data:g,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const La={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},te={render:()=>a.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(m,{caption:"Release readiness board",columns:f,data:g,rowKey:t=>t.id,defaultSortKey:"id"})})},ne={render:()=>a.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(m,{caption:"Release readiness board",columns:f,data:g,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ae={render:()=>{const t=[...f,{key:"action",header:"Action",width:160,render:e=>a.jsx(ga,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(m,{columns:t,data:g,rowKey:e=>e.id})}},oe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:f,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},re={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:f,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},se={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await n(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},ie={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await l.tab(),await n(o).toHaveFocus(),await l.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ce={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(m,{columns:f,data:g,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});x.mouseDown(r),r.focus(),await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},ue={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),a.jsx(m,{columns:f,data:g,defaultSortKey:"id"}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});x.mouseDown(o),o.focus(),await l.click(r),await l.tab({shift:!0}),await n(o).toHaveFocus(),await n(o.style.boxShadow).toContain("0 0 0 3px")}},le={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:f,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),S=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(S).not.toHaveAttribute("aria-sort")}},de={render:()=>a.jsx(Ra,{}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});x.mouseDown(r),await l.click(o);const S=e.getByRole("button",{name:"Issue sort descending"});await n(S).toBeDisabled(),await n(S.style.transform).toContain("translateY(0"),await n(S.style.boxShadow).toBe("none")}},me={render:function(){const[e,o]=u.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(m,{columns:f,data:g,defaultSortKey:"id",onSortChange:(r,S)=>o(`${r} ${S}`)})]})},play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),S=e.getByTestId("primary-pointer-sort-state");await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),x.mouseDown(r,{button:2}),x.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(S).toHaveTextContent("id asc"),x.mouseDown(r,{button:0}),await V(()=>{n(r.style.transform).toContain("translateY(1px)")}),x.pointerCancel(r),await V(()=>{n(r.style.transform).toContain("translateY(0")}),await n(S).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await V(()=>{n(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await V(()=>{n(r.style.transform).toContain("translateY(0")}),await n(S).toHaveTextContent("id asc"),await l.click(r),await n(S).toHaveTextContent("id desc")}},ye={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{ariaLabel:"Release checklist table",columns:f,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},pe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:f,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},we={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{caption:0,columns:f,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const o=w(t).getByRole("table",{name:"0"});await n(o).not.toHaveAttribute("aria-label")}},be={render:()=>a.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(m,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:f,data:g,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=w(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},ge={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function ka(){const[t,e]=u.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:Me,children:t})]}),a.jsx(m,{columns:f,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ve={render:()=>a.jsx(ka,{}),play:async({canvasElement:t})=>{const e=w(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await l.keyboard("{ArrowRight}");const S=e.getByRole("button",{name:"Component sort ascending"});await n(S).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{End}");const Ce=e.getByRole("button",{name:"Status sort ascending"});await n(Ce).toHaveFocus(),await l.keyboard("{Home}"),await n(r).toHaveFocus(),await l.keyboard("{PageDown}");const D=e.getByRole("button",{name:"Component sort ascending"});await n(D).toHaveFocus(),await l.keyboard("{PageUp}"),await n(r).toHaveFocus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const L=e.getByRole("button",{name:"Issue sort ascending"}),K=L.closest("th");await n(K).toHaveAttribute("aria-sort","descending"),x.keyDown(L,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","descending"),L.focus(),x.keyDown(L,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","descending"),await l.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});R.focus(),x.keyDown(R,{key:"ArrowRight",ctrlKey:!0}),x.keyDown(R,{key:"ArrowLeft",metaKey:!0}),x.keyDown(R,{key:"End",ctrlKey:!0}),x.keyDown(R,{key:"Home",altKey:!0}),x.keyDown(R,{key:"PageDown",metaKey:!0}),x.keyDown(R,{key:"PageUp",ctrlKey:!0}),await n(R).toHaveFocus(),x.keyDown(R,{key:"Enter",ctrlKey:!0}),x.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","ascending"),await l.keyboard("{Shift>}{Enter}{/Shift}"),await V(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(K).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await V(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(K).toHaveAttribute("aria-sort","ascending")})}},he={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:C,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),a.jsx("div",{dir:"rtl",children:a.jsx(m,{columns:f,data:g,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});o.focus(),x.keyDown(o,{key:"ArrowLeft",ctrlKey:!0}),x.keyDown(o,{key:"ArrowRight",metaKey:!0}),x.keyDown(o,{key:"ArrowLeft",altKey:!0}),await n(o).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus()}};function Ta(){const[t,e]=u.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:C,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:Me,children:t})]}),a.jsx(m,{columns:f,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const xe={render:()=>a.jsx(Ta,{}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),yt(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),yt(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),pt(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),pt(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},Se={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:f,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await l.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},fe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},Be={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Re={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ke={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(m,{columns:[{key:"   ",header:a.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:t})=>{const e=w(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const o=e.getByRole("button",{name:"Column 1 sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Te={render:()=>a.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),a.jsx(m,{columns:[{key:"status",header:a.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Release status"});await n(o).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await n(o).not.toHaveAttribute("aria-label"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await l.click(o),await n(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},De={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(p,{maxWidth:"min(100%, 620px)",children:a.jsx(m,{columns:t,data:g,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Da(){const[t,e]=u.useState(!1),o=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:C,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:Me,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(m,{columns:o,data:g,rowKey:r=>r.id,defaultSortKey:"status"})]})}const He={render:()=>a.jsx(Da,{}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await l.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},aa=g.map(t=>({...t,note:""})),oa=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Ae={render:()=>a.jsx(p,{maxWidth:"min(100%, 720px)",children:a.jsx(m,{columns:oa,data:aa,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ee={render:()=>a.jsx(p,{maxWidth:"min(100%, 720px)",children:a.jsx(m,{columns:oa,data:aa,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=w(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ha=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Ie={render:()=>a.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(m,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Ha,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=w(t);await l.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var wt,bt,gt;te.parameters={...te.parameters,docs:{...(wt=te.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(gt=(bt=te.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var vt,ht,xt;ne.parameters={...ne.parameters,docs:{...(vt=ne.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(ht=ne.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var St,ft,Bt;ae.parameters={...ae.parameters,docs:{...(St=ae.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Bt=(ft=ae.parameters)==null?void 0:ft.docs)==null?void 0:Bt.source}}};var Rt,kt,Tt;oe.parameters={...oe.parameters,docs:{...(Rt=oe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Tt=(kt=oe.parameters)==null?void 0:kt.docs)==null?void 0:Tt.source}}};var Dt,Ht,At;re.parameters={...re.parameters,docs:{...(Dt=re.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(At=(Ht=re.parameters)==null?void 0:Ht.docs)==null?void 0:At.source}}};var Et,It,Ct;se.parameters={...se.parameters,docs:{...(Et=se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Ct=(It=se.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var Kt,jt,Ft;ie.parameters={...ie.parameters,docs:{...(Kt=ie.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Ft=(jt=ie.parameters)==null?void 0:jt.docs)==null?void 0:Ft.source}}};var Lt,Wt,Pt;ce.parameters={...ce.parameters,docs:{...(Lt=ce.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Pt=(Wt=ce.parameters)==null?void 0:Wt.docs)==null?void 0:Pt.source}}};var Nt,$t,qt;ue.parameters={...ue.parameters,docs:{...(Nt=ue.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(qt=($t=ue.parameters)==null?void 0:$t.docs)==null?void 0:qt.source}}};var Mt,Vt,Ot;le.parameters={...le.parameters,docs:{...(Mt=le.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ot=(Vt=le.parameters)==null?void 0:Vt.docs)==null?void 0:Ot.source}}};var zt,Ut,Gt;de.parameters={...de.parameters,docs:{...(zt=de.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Gt=(Ut=de.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var _t,Yt,Jt;me.parameters={...me.parameters,docs:{...(_t=me.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Jt=(Yt=me.parameters)==null?void 0:Yt.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;ye.parameters={...ye.parameters,docs:{...(Qt=ye.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=ye.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var en,tn,nn;pe.parameters={...pe.parameters,docs:{...(en=pe.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=pe.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,rn;we.parameters={...we.parameters,docs:{...(an=we.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(rn=(on=we.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var sn,cn,un;be.parameters={...be.parameters,docs:{...(sn=be.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(un=(cn=be.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var ln,dn,mn;ge.parameters={...ge.parameters,docs:{...(ln=ge.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(mn=(dn=ge.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var yn,pn,wn;ve.parameters={...ve.parameters,docs:{...(yn=ve.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(wn=(pn=ve.parameters)==null?void 0:pn.docs)==null?void 0:wn.source}}};var bn,gn,vn;he.parameters={...he.parameters,docs:{...(bn=he.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(vn=(gn=he.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var hn,xn,Sn;xe.parameters={...xe.parameters,docs:{...(hn=xe.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(Sn=(xn=xe.parameters)==null?void 0:xn.docs)==null?void 0:Sn.source}}};var fn,Bn,Rn;Se.parameters={...Se.parameters,docs:{...(fn=Se.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(Rn=(Bn=Se.parameters)==null?void 0:Bn.docs)==null?void 0:Rn.source}}};var kn,Tn,Dn;fe.parameters={...fe.parameters,docs:{...(kn=fe.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(Dn=(Tn=fe.parameters)==null?void 0:Tn.docs)==null?void 0:Dn.source}}};var Hn,An,En;Be.parameters={...Be.parameters,docs:{...(Hn=Be.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(En=(An=Be.parameters)==null?void 0:An.docs)==null?void 0:En.source}}};var In,Cn,Kn;Re.parameters={...Re.parameters,docs:{...(In=Re.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Kn=(Cn=Re.parameters)==null?void 0:Cn.docs)==null?void 0:Kn.source}}};var jn,Fn,Ln;ke.parameters={...ke.parameters,docs:{...(jn=ke.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Ln=(Fn=ke.parameters)==null?void 0:Fn.docs)==null?void 0:Ln.source}}};var Wn,Pn,Nn;Te.parameters={...Te.parameters,docs:{...(Wn=Te.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Nn=(Pn=Te.parameters)==null?void 0:Pn.docs)==null?void 0:Nn.source}}};var $n,qn,Mn;De.parameters={...De.parameters,docs:{...($n=De.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(Mn=(qn=De.parameters)==null?void 0:qn.docs)==null?void 0:Mn.source}}};var Vn,On,zn;He.parameters={...He.parameters,docs:{...(Vn=He.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(zn=(On=He.parameters)==null?void 0:On.docs)==null?void 0:zn.source}}};var Un,Gn,_n;Ae.parameters={...Ae.parameters,docs:{...(Un=Ae.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(_n=(Gn=Ae.parameters)==null?void 0:Gn.docs)==null?void 0:_n.source}}};var Yn,Jn,Qn;Ee.parameters={...Ee.parameters,docs:{...(Yn=Ee.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(Qn=(Jn=Ee.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Xn,Zn,ea;Ie.parameters={...Ie.parameters,docs:{...(Xn=Ie.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(ea=(Zn=Ie.parameters)==null?void 0:Zn.docs)==null?void 0:ea.source}}};const Wa=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{pe as AccessibleNameFallback,be as AccessibleNameLabelledByHeading,ye as AccessibleNameWithoutCaption,Re as AriaLabelHeaderAutoSortLabel,ke as BlankKeySortLabelFallback,He as DeferredColumnsDefaultSortRecovery,ne as DescendingDefaultSortDirection,oe as EmptyState,Ae as FallbackRowKeyStability,xe as ImeCompositionGuard,De as InvalidDefaultSortKeyFallback,ce as KeyboardFocusRingAfterPointer,ue as KeyboardFocusRingShiftTabReentry,ie as KeyboardReachableScrollContainer,de as LoadingDisablesResetsSortVisualState,le as LoadingState,Se as LocalizedSortLabels,we as NumericCaptionName,me as PrimaryPointerOnlySortPress,te as ReleaseChecklist,Ie as RenderIndexSemantics,Be as RichTextHeaderAutoSortLabel,ge as RowHeaderSemantics,he as RtlArrowNavigation,re as SingleRowSortDisabled,se as SingleSortableColumnShortcutHints,fe as SortLabelForCustomHeader,Te as SortLabelledByPrecedence,ve as SortTelemetry,Ee as SourceIndexRowKeyStability,ae as WithRowAction,Wa as __namedExportsOrder,La as default};
