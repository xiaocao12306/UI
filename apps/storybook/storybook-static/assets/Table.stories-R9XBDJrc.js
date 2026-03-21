import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as Ya}from"./Button-DmF53JnK.js";import{r as l}from"./index-BWu4c2F4.js";import{B as _a}from"./Badge-ZJmMstsz.js";import{within as y,expect as a,userEvent as u,fireEvent as v,waitFor as Je}from"./index-DgAF9SIF.js";import{S as m,s as I,a as Ke}from"./storyShowcase-Bw5VyCj0.js";const ja="Enter Space",Ja=`${ja} Home End PageDown PageUp ArrowLeft ArrowRight`,Qa=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Qe=400;function Xe(t,e,o){if(!e)return null;const r=t.find(f=>String(f.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function Ze(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=Ce(Ee(t.header));return o.length>0?o:e}function d({columns:t,data:e,rowKey:o,caption:r,ariaLabel:f,ariaLabelledBy:Re,loading:T=!1,loadingContent:F="Loading data...",emptyContent:E="No data available.",defaultSortKey:B,defaultSortDirection:O="asc",getSortAriaLabel:Wa=et,getSortStatusText:je=Xa,onSortChange:ke}){const U=Ie(Re),Fe=U?void 0:Ie(f,r?void 0:"Data table"),L=l.useRef({}),Le=l.useRef(null),Te=l.useRef(null),z=l.useRef(0),W=l.useRef(null),G=l.useRef(null),q=l.useRef(!0);l.useRef(null),l.useRef(null),l.useRef(null);const[Pa,De]=l.useState(null),[Na,K]=l.useState(null),[qa,$]=l.useState(null);l.useEffect(()=>{var x;const c=((x=Le.current)==null?void 0:x.ownerDocument)??document,i=p=>{p.metaKey||p.altKey||p.ctrlKey||(q.current=!0)},h=()=>{q.current=!1};return c.addEventListener("keydown",i,!0),c.addEventListener("pointerdown",h,!0),c.addEventListener("mousedown",h,!0),c.addEventListener("touchstart",h,!0),()=>{c.removeEventListener("keydown",i,!0),c.removeEventListener("pointerdown",h,!0),c.removeEventListener("mousedown",h,!0),c.removeEventListener("touchstart",h,!0)}},[]);const Y=l.useCallback(()=>{Te.current=null,z.current=0,W.current!==null&&((G.current??window).clearTimeout(W.current),W.current=null),G.current=null},[]);l.useEffect(()=>()=>{Y()},[Y]);const[b,He]=l.useState(()=>Xe(t,B,O)),H=l.useMemo(()=>T||e.length<=1?[]:t.reduce((c,i)=>(i.sortable&&c.push(String(i.key)),c),[]),[t,e.length,T]);l.useEffect(()=>{if(!b)return;const c=t.find(i=>String(i.key)===b.key);c!=null&&c.sortable||He(null)},[t,b]),l.useEffect(()=>{if(b)return;const c=Xe(t,B,O);c&&He(c)},[t,O,B,b]);const We=l.useMemo(()=>e.map((c,i)=>String(o?o(c,i):i)),[e,o]);l.useEffect(()=>{},[o,We]),l.useEffect(()=>{},[t]),l.useEffect(()=>{},[t]);const P=l.useMemo(()=>{const c=e.map((x,p)=>({row:x,sourceIndex:p}));if(!b)return c;const i=t.find(x=>String(x.key)===b.key);if(!(i!=null&&i.sortable))return c;const h=i.sortAccessor??(x=>{const p=x[String(i.key)];return p instanceof Date||typeof p=="number"||typeof p=="string"?p:String(p??"")});return c.sort((x,p)=>{const g=h(x.row),A=h(p.row);if(typeof g=="string"&&typeof A=="string"){const C=Qa.compare(g,A);return C!==0?b.direction==="asc"?C:-C:x.sourceIndex-p.sourceIndex}const j=g instanceof Date?g.getTime():g,V=A instanceof Date?A.getTime():A;return j<V?b.direction==="asc"?-1:1:j>V?b.direction==="asc"?1:-1:x.sourceIndex-p.sourceIndex})},[t,e,b]),Pe=l.useMemo(()=>{if(T||P.length<=1||!b)return"";const c=t.find(h=>String(h.key)===b.key);if(!(c!=null&&c.sortable))return"";const i=Ze(c,String(c.key));return je({columnKey:b.key,columnHeader:i,direction:b.direction})},[t,je,T,b,P.length]),M=!T&&P.length>1&&t.some(c=>c.sortable),Ne=Math.max(t.length,1);return l.useEffect(()=>{M||(De(null),K(null),$(null))},[M]),n.jsxs("div",{ref:Le,"data-aurora-table-scroll-container":"",tabIndex:M?void 0:0,"aria-label":M||U?void 0:Fe??"Data table scroll container","aria-labelledby":M?void 0:U,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Pe?n.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Pe}):null,n.jsxs("table",{"aria-label":Fe,"aria-labelledby":U,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?n.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,n.jsx("thead",{children:n.jsx("tr",{children:t.map(c=>{const i=String(c.key),h=!!c.sortable,x=P.length>1,p=h&&(b==null?void 0:b.key)===i?b.direction:void 0,g=!T&&x?p:void 0,A=g?g==="asc"?"ascending":"descending":void 0,j=c.align??"left",V=Ze(c,i),C=p==="asc"?"desc":"asc",$a=Wa({columnKey:i,columnHeader:V,nextDirection:C}),Ma=Ie($a,et({columnHeader:V,nextDirection:C})),D=T||!x,Va=D?void 0:H.length>1?Ja:ja,qe=!D&&Pa===i,$e=!D&&Na===i,Me=!D&&qa===i,Oa=qe||Me,Ve=()=>{D||(He({key:i,direction:C}),ke==null||ke(i,C))};return n.jsx("th",{scope:"col","aria-sort":A,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:c.width},children:h?n.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:s=>{L.current[i]=s},"aria-label":Ma,"aria-keyshortcuts":Va,disabled:D,onClick:s=>{const R=Date.now()-z.current,_=s.detail===0&&Te.current===i&&z.current>0&&R<=Qe;Y(),!_&&Ve()},onMouseEnter:()=>{D||De(i)},onMouseLeave:()=>{De(s=>s===i?null:s),K(s=>s===i?null:s)},onMouseDown:s=>{D||s.button===0&&(q.current=!1,$(R=>R===i?null:R),K(i))},onMouseUp:s=>{s.button===0&&K(R=>R===i?null:R)},onFocus:()=>{if(D){$(s=>s===i?null:s);return}$(s=>en(L.current[i],q.current)?i:s===i?null:s)},onBlur:()=>{$(s=>s===i?null:s),K(s=>s===i?null:s)},onKeyDown:s=>{var _,Oe,Ue,ze,Ge;if(q.current=!0,s.altKey||s.ctrlKey||s.metaKey)return;if(s.key==="Home"){const k=H[0];if(!k)return;s.preventDefault(),(_=L.current[k])==null||_.focus();return}if(s.key==="End"){const k=H[H.length-1];if(!k)return;s.preventDefault(),(Oe=L.current[k])==null||Oe.focus();return}if(s.key==="PageDown"||s.key==="PageUp"){const k=H.indexOf(i);if(k<0)return;const Ye=s.key==="PageDown"?1:-1,N=Math.max(0,Math.min(H.length-1,k+Ye));if(N===k)return;s.preventDefault();const Ae=H[N];(Ue=L.current[Ae])==null||Ue.focus();return}if(s.key==="ArrowLeft"||s.key==="ArrowRight"){const k=H.indexOf(i);if(k<0)return;const N=(s.currentTarget.ownerDocument.defaultView??window).getComputedStyle(s.currentTarget).direction,Ae=(ze=s.currentTarget.closest("[dir]"))==null?void 0:ze.getAttribute("dir"),Ua=(N==="rtl"||N==="ltr"?N:Ae==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",za=s.key===Ua?1:-1,_e=Math.max(0,Math.min(H.length-1,k+za));if(_e===k)return;s.preventDefault();const Ga=H[_e];(Ge=L.current[Ga])==null||Ge.focus();return}if(!tt(s.key)||Za(s)||(s.preventDefault(),s.repeat))return;K(i),Te.current=i,z.current=Date.now();const R=s.currentTarget.ownerDocument.defaultView??window;W.current!==null&&(G.current??R).clearTimeout(W.current),G.current=R,W.current=R.setTimeout(()=>{Y()},Qe),Ve()},onKeyUp:s=>{s.altKey||s.ctrlKey||s.metaKey||tt(s.key)&&K(R=>R===i?null:R)},style:{border:Oa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:$e?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":qe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:D?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:D?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Me?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:$e?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[c.header,n.jsx("span",{"aria-hidden":"true",children:g==="asc"?"▲":g==="desc"?"▼":"↕"})]}):c.header},i)})})}),n.jsx("tbody",{children:T?n.jsx("tr",{children:n.jsx("td",{colSpan:Ne,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:F})})}):P.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:Ne,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:E})})}):P.map((c,i)=>{const h=c.row,x=String(c.sourceIndex),p=We[c.sourceIndex]??x;return n.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(g=>{const A=g.render?g.render(h,i,c.sourceIndex):String(h[String(g.key)]??""),j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:g.align??"left"};return g.rowHeader?n.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:A},String(g.key)):n.jsx("td",{style:j,children:A},String(g.key))})},p)})})]})]})}function et({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Xa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function tt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Za(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function en(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function Ee(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Ce(t.map(o=>Ee(o)).filter(o=>o.length>0).join(" "));if(!l.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=Ce(e["aria-label"]);if(o.length>0)return o}return Ee(e.children)}function Ce(t){return t.replace(/\s+/g," ").trim()}function Ie(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  sortLabel?: string;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"sortLabel",value:{name:"string",required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const w=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return n.jsx(_a,{tone:e,children:t.status})}}];function at(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function nt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function tn(){const[t,e]=l.useState(!1);return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),n.jsx(d,{columns:S,data:w,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const pn={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},J={render:()=>n.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:n.jsx(d,{caption:"Release readiness board",columns:S,data:w,rowKey:t=>t.id,defaultSortKey:"id"})})},Q={render:()=>n.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:n.jsx(d,{caption:"Release readiness board",columns:S,data:w,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await a(o).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},X={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>n.jsx(Ya,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return n.jsx(d,{columns:t,data:w,rowKey:e=>e.id})}},Z={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort ascending"});await a(e.getByText("No release items yet.")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("No release items yet."),await a(o).toBeDisabled(),await a(o).not.toHaveAttribute("aria-keyshortcuts")}},ee={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/});await a(o).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},te={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:w,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort descending"});await a(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await u.keyboard("{ArrowRight}"),await a(o).toHaveFocus(),await a(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},ae={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:w}),n.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await a(o).not.toBeNull(),await a(o).toHaveAttribute("tabindex","0"),await u.tab(),await a(o).toHaveFocus(),await u.tab(),await a(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ne={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx("p",{style:I,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),n.jsx("button",{type:"button",children:"Before table"}),n.jsx(d,{columns:S,data:w,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),r.focus(),await u.click(o),await u.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},oe={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx("p",{style:I,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),n.jsx(d,{columns:S,data:w,defaultSortKey:"id"}),n.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});v.mouseDown(o),o.focus(),await u.click(r),await u.tab({shift:!0}),await a(o).toHaveFocus(),await a(o.style.boxShadow).toContain("0 0 0 3px")}},re={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:w,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),f=e.getByRole("columnheader",{name:/Issue/});await a(o).toHaveAttribute("aria-busy","true"),await a(e.getByText("Syncing release feed...")).toBeInTheDocument(),await a(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(f).not.toHaveAttribute("aria-sort")}},se={render:()=>n.jsx(tn,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),await u.click(o);const f=e.getByRole("button",{name:"Issue sort descending"});await a(f).toBeDisabled(),await a(f.style.transform).toContain("translateY(0"),await a(f.style.boxShadow).toBe("none")}},ie={render:function(){const[e,o]=l.useState("id asc");return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsxs("p",{style:I,children:["Active sort: ",n.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),n.jsx("button",{type:"button",children:"Before table"}),n.jsx(d,{columns:S,data:w,defaultSortKey:"id",onSortChange:(r,f)=>o(`${r} ${f}`)})]})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),f=e.getByTestId("primary-pointer-sort-state");await u.click(o),await u.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(f).toHaveTextContent("id asc"),await u.click(r),await a(f).toHaveTextContent("id desc")}},ce={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{ariaLabel:"Release checklist table",columns:S,data:w,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ue={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:w,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},le={render:()=>n.jsxs(m,{maxWidth:"min(100%, 780px)",gap:10,children:[n.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),n.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:w,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=y(t).getByRole("table",{name:"Release board metrics"});await a(o).toHaveAttribute("aria-labelledby","release-board-heading"),await a(o).not.toHaveAttribute("aria-label")}},de={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:w,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function an(){const[t,e]=l.useState("id asc");return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[n.jsxs("p",{style:I,children:["Active sort: ",n.jsx("strong",{style:Ke,children:t})]}),n.jsx(d,{columns:S,data:w,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const me={render:()=>n.jsx(an,{}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await a(o).not.toBeNull(),await a(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await u.keyboard("{ArrowRight}");const f=e.getByRole("button",{name:"Component sort ascending"});await a(f).toHaveFocus(),await u.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await u.keyboard("{End}");const Re=e.getByRole("button",{name:"Status sort ascending"});await a(Re).toHaveFocus(),await u.keyboard("{Home}"),await a(r).toHaveFocus(),await u.keyboard("{PageDown}");const T=e.getByRole("button",{name:"Component sort ascending"});await a(T).toHaveFocus(),await u.keyboard("{PageUp}"),await a(r).toHaveFocus(),await u.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const F=e.getByRole("button",{name:"Issue sort ascending"}),E=F.closest("th");await a(E).toHaveAttribute("aria-sort","descending"),v.keyDown(F,{key:"Enter",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(E).toHaveAttribute("aria-sort","descending"),F.focus(),v.keyDown(F,{key:"Space",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(E).toHaveAttribute("aria-sort","descending"),await u.keyboard("{Space}"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(E).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const B=e.getByRole("button",{name:"Issue sort descending"});B.focus(),v.keyDown(B,{key:"ArrowRight",ctrlKey:!0}),v.keyDown(B,{key:"ArrowLeft",metaKey:!0}),v.keyDown(B,{key:"End",ctrlKey:!0}),v.keyDown(B,{key:"Home",altKey:!0}),v.keyDown(B,{key:"PageDown",metaKey:!0}),v.keyDown(B,{key:"PageUp",ctrlKey:!0}),await a(B).toHaveFocus(),v.keyDown(B,{key:"Enter",ctrlKey:!0}),v.keyDown(B,{key:"Space",metaKey:!0}),await a(e.getByText("id asc")).toBeInTheDocument(),await a(E).toHaveAttribute("aria-sort","ascending"),await u.keyboard("{Shift>}{Enter}{/Shift}"),await Je(()=>{a(e.getByText("id desc")).toBeInTheDocument(),a(E).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await u.keyboard("{Shift>}{Space}{/Shift}"),await Je(()=>{a(e.getByText("id asc")).toBeInTheDocument(),a(E).toHaveAttribute("aria-sort","ascending")})}},ye={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[n.jsx("p",{style:I,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),n.jsx("div",{dir:"rtl",children:n.jsx(d,{columns:S,data:w,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});o.focus(),v.keyDown(o,{key:"ArrowLeft",ctrlKey:!0}),v.keyDown(o,{key:"ArrowRight",metaKey:!0}),v.keyDown(o,{key:"ArrowLeft",altKey:!0}),await a(o).toHaveFocus(),await u.keyboard("{ArrowRight}"),await a(o).toHaveFocus(),await u.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await u.keyboard("{ArrowRight}"),await a(o).toHaveFocus()}};function nn(){const[t,e]=l.useState("id asc");return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[n.jsx("p",{style:I,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),n.jsxs("p",{style:I,children:["Active sort: ",n.jsx("strong",{style:Ke,children:t})]}),n.jsx(d,{columns:S,data:w,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const pe={render:()=>n.jsx(nn,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),at(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),at(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),nt(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),nt(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await u.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","descending")}},we={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:w,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await u.click(o),await a(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},be={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"releasedAt",header:n.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await u.click(o),await a(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},ge={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"status",header:n.jsxs("span",{children:[n.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await u.click(o),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ve={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"status",header:n.jsx("span",{"aria-label":"Release status",children:n.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await u.click(o),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},he={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return n.jsx(m,{maxWidth:"min(100%, 620px)",children:n.jsx(d,{columns:t,data:w,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await a(o).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function on(){const[t,e]=l.useState(!1),o=l.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return n.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[n.jsx("p",{style:I,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),n.jsxs("p",{style:I,children:["Status column sortable:"," ",n.jsx("strong",{"data-testid":"table-status-sortable",style:Ke,children:t?"yes":"no"})]}),n.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),n.jsx(d,{columns:o,data:w,rowKey:r=>r.id,defaultSortKey:"status"})]})}const xe={render:()=>n.jsx(on,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await a(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await u.click(o),await a(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Fa=w.map(t=>({...t,note:""})),La=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>n.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Se={render:()=>n.jsx(m,{maxWidth:"min(100%, 720px)",children:n.jsx(d,{columns:La,data:Fa,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await u.type(o,"persist me"),await u.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},fe={render:()=>n.jsx(m,{maxWidth:"min(100%, 720px)",children:n.jsx(d,{columns:La,data:Fa,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await u.type(o,"persist me"),await u.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},rn=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Be={render:()=>n.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[n.jsx("p",{style:I,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),n.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:rn,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=y(t);await u.click(e.getByRole("button",{name:"Score sort descending"})),await a(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var ot,rt,st;J.parameters={...J.parameters,docs:{...(ot=J.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(st=(rt=J.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,ut;Q.parameters={...Q.parameters,docs:{...(it=Q.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ut=(ct=Q.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var lt,dt,mt;X.parameters={...X.parameters,docs:{...(lt=X.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(mt=(dt=X.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var yt,pt,wt;Z.parameters={...Z.parameters,docs:{...(yt=Z.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(wt=(pt=Z.parameters)==null?void 0:pt.docs)==null?void 0:wt.source}}};var bt,gt,vt;ee.parameters={...ee.parameters,docs:{...(bt=ee.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=ee.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var ht,xt,St;te.parameters={...te.parameters,docs:{...(ht=te.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(St=(xt=te.parameters)==null?void 0:xt.docs)==null?void 0:St.source}}};var ft,Bt,Rt;ae.parameters={...ae.parameters,docs:{...(ft=ae.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Rt=(Bt=ae.parameters)==null?void 0:Bt.docs)==null?void 0:Rt.source}}};var kt,Tt,Dt;ne.parameters={...ne.parameters,docs:{...(kt=ne.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Dt=(Tt=ne.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var Ht,At,It;oe.parameters={...oe.parameters,docs:{...(Ht=oe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(It=(At=oe.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Et,Ct,Kt;re.parameters={...re.parameters,docs:{...(Et=re.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Kt=(Ct=re.parameters)==null?void 0:Ct.docs)==null?void 0:Kt.source}}};var jt,Ft,Lt;se.parameters={...se.parameters,docs:{...(jt=se.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Lt=(Ft=se.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var Wt,Pt,Nt;ie.parameters={...ie.parameters,docs:{...(Wt=ie.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
    await userEvent.click(sortButton);
    await expect(sortState).toHaveTextContent("id desc");
  }
}`,...(Nt=(Pt=ie.parameters)==null?void 0:Pt.docs)==null?void 0:Nt.source}}};var qt,$t,Mt;ce.parameters={...ce.parameters,docs:{...(qt=ce.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Mt=($t=ce.parameters)==null?void 0:$t.docs)==null?void 0:Mt.source}}};var Vt,Ot,Ut;ue.parameters={...ue.parameters,docs:{...(Vt=ue.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ut=(Ot=ue.parameters)==null?void 0:Ot.docs)==null?void 0:Ut.source}}};var zt,Gt,Yt;le.parameters={...le.parameters,docs:{...(zt=le.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Yt=(Gt=le.parameters)==null?void 0:Gt.docs)==null?void 0:Yt.source}}};var _t,Jt,Qt;de.parameters={...de.parameters,docs:{...(_t=de.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=de.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,ea;me.parameters={...me.parameters,docs:{...(Xt=me.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=me.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;ye.parameters={...ye.parameters,docs:{...(ta=ye.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(na=(aa=ye.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var oa,ra,sa;pe.parameters={...pe.parameters,docs:{...(oa=pe.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(sa=(ra=pe.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ia,ca,ua;we.parameters={...we.parameters,docs:{...(ia=we.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ua=(ca=we.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var la,da,ma;be.parameters={...be.parameters,docs:{...(la=be.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ma=(da=be.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ya,pa,wa;ge.parameters={...ge.parameters,docs:{...(ya=ge.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(wa=(pa=ge.parameters)==null?void 0:pa.docs)==null?void 0:wa.source}}};var ba,ga,va;ve.parameters={...ve.parameters,docs:{...(ba=ve.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=ve.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,Sa;he.parameters={...he.parameters,docs:{...(ha=he.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(Sa=(xa=he.parameters)==null?void 0:xa.docs)==null?void 0:Sa.source}}};var fa,Ba,Ra;xe.parameters={...xe.parameters,docs:{...(fa=xe.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(Ra=(Ba=xe.parameters)==null?void 0:Ba.docs)==null?void 0:Ra.source}}};var ka,Ta,Da;Se.parameters={...Se.parameters,docs:{...(ka=Se.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(Da=(Ta=Se.parameters)==null?void 0:Ta.docs)==null?void 0:Da.source}}};var Ha,Aa,Ia;fe.parameters={...fe.parameters,docs:{...(Ha=fe.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Ia=(Aa=fe.parameters)==null?void 0:Aa.docs)==null?void 0:Ia.source}}};var Ea,Ca,Ka;Be.parameters={...Be.parameters,docs:{...(Ea=Be.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Ka=(Ca=Be.parameters)==null?void 0:Ca.docs)==null?void 0:Ka.source}}};const wn=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ue as AccessibleNameFallback,le as AccessibleNameLabelledByHeading,ce as AccessibleNameWithoutCaption,ve as AriaLabelHeaderAutoSortLabel,xe as DeferredColumnsDefaultSortRecovery,Q as DescendingDefaultSortDirection,Z as EmptyState,Se as FallbackRowKeyStability,pe as ImeCompositionGuard,he as InvalidDefaultSortKeyFallback,ne as KeyboardFocusRingAfterPointer,oe as KeyboardFocusRingShiftTabReentry,ae as KeyboardReachableScrollContainer,se as LoadingDisablesResetsSortVisualState,re as LoadingState,we as LocalizedSortLabels,ie as PrimaryPointerOnlySortPress,J as ReleaseChecklist,Be as RenderIndexSemantics,ge as RichTextHeaderAutoSortLabel,de as RowHeaderSemantics,ye as RtlArrowNavigation,ee as SingleRowSortDisabled,te as SingleSortableColumnShortcutHints,be as SortLabelForCustomHeader,me as SortTelemetry,fe as SourceIndexRowKeyStability,X as WithRowAction,wn as __namedExportsOrder,pn as default};
