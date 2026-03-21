import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as Ma}from"./Button-COG9o64O.js";import{r as u}from"./index-BWu4c2F4.js";import{B as Va}from"./Badge-ZJmMstsz.js";import{within as y,expect as a,userEvent as l,fireEvent as h,waitFor as Ye}from"./index-DgAF9SIF.js";import{S as m,s as A,a as Ce}from"./storyShowcase-Bw5VyCj0.js";const Oa="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Ua=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),_e=400;function Je(t,e,o){if(!e)return null;const r=t.find(f=>String(f.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function Qe(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=Ee(Ie(t.header));return o.length>0?o:e}function d({columns:t,data:e,rowKey:o,caption:r,ariaLabel:f,ariaLabelledBy:Be,loading:T=!1,loadingContent:F="Loading data...",emptyContent:I="No data available.",defaultSortKey:B,defaultSortDirection:O="asc",getSortAriaLabel:Ea=Xe,getSortStatusText:Ke=za,onSortChange:Re}){const U=Ae(Be),je=U?void 0:Ae(f,r?void 0:"Data table"),L=u.useRef({}),Fe=u.useRef(null),ke=u.useRef(null),z=u.useRef(0),W=u.useRef(null),G=u.useRef(null),q=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[Ca,Te]=u.useState(null),[Ka,K]=u.useState(null),[ja,$]=u.useState(null);u.useEffect(()=>{var x;const c=((x=Fe.current)==null?void 0:x.ownerDocument)??document,i=p=>{p.metaKey||p.altKey||p.ctrlKey||(q.current=!0)},g=()=>{q.current=!1};return c.addEventListener("keydown",i,!0),c.addEventListener("pointerdown",g,!0),c.addEventListener("mousedown",g,!0),c.addEventListener("touchstart",g,!0),()=>{c.removeEventListener("keydown",i,!0),c.removeEventListener("pointerdown",g,!0),c.removeEventListener("mousedown",g,!0),c.removeEventListener("touchstart",g,!0)}},[]);const Y=u.useCallback(()=>{ke.current=null,z.current=0,W.current!==null&&((G.current??window).clearTimeout(W.current),W.current=null),G.current=null},[]);u.useEffect(()=>()=>{Y()},[Y]);const[w,De]=u.useState(()=>Je(t,B,O)),E=u.useMemo(()=>T||e.length<=1?[]:t.reduce((c,i)=>(i.sortable&&c.push(String(i.key)),c),[]),[t,e.length,T]);u.useEffect(()=>{if(!w)return;const c=t.find(i=>String(i.key)===w.key);c!=null&&c.sortable||De(null)},[t,w]),u.useEffect(()=>{if(w)return;const c=Je(t,B,O);c&&De(c)},[t,O,B,w]);const Fa=u.useMemo(()=>e.map((c,i)=>String(o?o(c,i):i)),[e,o]);u.useEffect(()=>{},[o,Fa]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const P=u.useMemo(()=>{const c=e.map((x,p)=>({row:x,sourceIndex:p}));if(!w)return c;const i=t.find(x=>String(x.key)===w.key);if(!(i!=null&&i.sortable))return c;const g=i.sortAccessor??(x=>{const p=x[String(i.key)];return p instanceof Date||typeof p=="number"||typeof p=="string"?p:String(p??"")});return c.sort((x,p)=>{const v=g(x.row),H=g(p.row);if(typeof v=="string"&&typeof H=="string"){const C=Ua.compare(v,H);return C!==0?w.direction==="asc"?C:-C:x.sourceIndex-p.sourceIndex}const j=v instanceof Date?v.getTime():v,V=H instanceof Date?H.getTime():H;return j<V?w.direction==="asc"?-1:1:j>V?w.direction==="asc"?1:-1:x.sourceIndex-p.sourceIndex})},[t,e,w]),Le=u.useMemo(()=>{if(T||P.length<=1||!w)return"";const c=t.find(g=>String(g.key)===w.key);if(!(c!=null&&c.sortable))return"";const i=Qe(c,String(c.key));return Ke({columnKey:w.key,columnHeader:i,direction:w.direction})},[t,Ke,T,w,P.length]),M=!T&&P.length>1&&t.some(c=>c.sortable),We=Math.max(t.length,1);return u.useEffect(()=>{M||(Te(null),K(null),$(null))},[M]),n.jsxs("div",{ref:Fe,"data-aurora-table-scroll-container":"",tabIndex:M?void 0:0,"aria-label":M||U?void 0:je??"Data table scroll container","aria-labelledby":M?void 0:U,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Le?n.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Le}):null,n.jsxs("table",{"aria-label":je,"aria-labelledby":U,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?n.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,n.jsx("thead",{children:n.jsx("tr",{children:t.map(c=>{const i=String(c.key),g=!!c.sortable,x=P.length>1,p=g&&(w==null?void 0:w.key)===i?w.direction:void 0,v=!T&&x?p:void 0,H=v?v==="asc"?"ascending":"descending":void 0,j=c.align??"left",V=Qe(c,i),C=p==="asc"?"desc":"asc",La=Ea({columnKey:i,columnHeader:V,nextDirection:C}),Wa=Ae(La,Xe({columnHeader:V,nextDirection:C})),D=T||!x,Pe=!D&&Ca===i,Ne=!D&&Ka===i,qe=!D&&ja===i,Pa=Pe||qe,$e=()=>{D||(De({key:i,direction:C}),Re==null||Re(i,C))};return n.jsx("th",{scope:"col","aria-sort":H,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:c.width},children:g?n.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:s=>{L.current[i]=s},"aria-label":Wa,"aria-keyshortcuts":D?void 0:Oa,disabled:D,onClick:s=>{const R=Date.now()-z.current,_=s.detail===0&&ke.current===i&&z.current>0&&R<=_e;Y(),!_&&$e()},onMouseEnter:()=>{D||Te(i)},onMouseLeave:()=>{Te(s=>s===i?null:s),K(s=>s===i?null:s)},onMouseDown:s=>{D||s.button===0&&(q.current=!1,$(R=>R===i?null:R),K(i))},onMouseUp:s=>{s.button===0&&K(R=>R===i?null:R)},onFocus:()=>{if(D){$(s=>s===i?null:s);return}$(s=>Ya(L.current[i],q.current)?i:s===i?null:s)},onBlur:()=>{$(s=>s===i?null:s),K(s=>s===i?null:s)},onKeyDown:s=>{var _,Me,Ve,Oe,Ue;if(q.current=!0,s.altKey||s.ctrlKey||s.metaKey)return;if(s.key==="Home"){const k=E[0];if(!k)return;s.preventDefault(),(_=L.current[k])==null||_.focus();return}if(s.key==="End"){const k=E[E.length-1];if(!k)return;s.preventDefault(),(Me=L.current[k])==null||Me.focus();return}if(s.key==="PageDown"||s.key==="PageUp"){const k=E.indexOf(i);if(k<0)return;const ze=s.key==="PageDown"?1:-1,N=Math.max(0,Math.min(E.length-1,k+ze));if(N===k)return;s.preventDefault();const He=E[N];(Ve=L.current[He])==null||Ve.focus();return}if(s.key==="ArrowLeft"||s.key==="ArrowRight"){const k=E.indexOf(i);if(k<0)return;const N=(s.currentTarget.ownerDocument.defaultView??window).getComputedStyle(s.currentTarget).direction,He=(Oe=s.currentTarget.closest("[dir]"))==null?void 0:Oe.getAttribute("dir"),Na=(N==="rtl"||N==="ltr"?N:He==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",qa=s.key===Na?1:-1,Ge=Math.max(0,Math.min(E.length-1,k+qa));if(Ge===k)return;s.preventDefault();const $a=E[Ge];(Ue=L.current[$a])==null||Ue.focus();return}if(!Ze(s.key)||Ga(s)||(s.preventDefault(),s.repeat))return;K(i),ke.current=i,z.current=Date.now();const R=s.currentTarget.ownerDocument.defaultView??window;W.current!==null&&(G.current??R).clearTimeout(W.current),G.current=R,W.current=R.setTimeout(()=>{Y()},_e),$e()},onKeyUp:s=>{s.altKey||s.ctrlKey||s.metaKey||Ze(s.key)&&K(R=>R===i?null:R)},style:{border:Pa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Ne?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Pe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:D?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:D?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:qe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Ne?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[c.header,n.jsx("span",{"aria-hidden":"true",children:v==="asc"?"▲":v==="desc"?"▼":"↕"})]}):c.header},i)})})}),n.jsx("tbody",{children:T?n.jsx("tr",{children:n.jsx("td",{colSpan:We,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:F})})}):P.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:We,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:n.jsx("span",{role:"status","aria-live":"polite",children:I})})}):P.map((c,i)=>{const g=c.row,x=String(c.sourceIndex),p=o?o(g,c.sourceIndex):x;return n.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(v=>{const H=v.render?v.render(g,i,c.sourceIndex):String(g[String(v.key)]??""),j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:v.align??"left"};return v.rowHeader?n.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:H},String(v.key)):n.jsx("td",{style:j,children:H},String(v.key))})},p)})})]})]})}function Xe({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function za({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function Ze(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Ga(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ya(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function Ie(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Ee(t.map(o=>Ie(o)).filter(o=>o.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=Ee(e["aria-label"]);if(o.length>0)return o}return Ie(e.children)}function Ee(t){return t.replace(/\s+/g," ").trim()}function Ae(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const b=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return n.jsx(Va,{tone:e,children:t.status})}}];function et(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function tt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function _a(){const[t,e]=u.useState(!1);return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),n.jsx(d,{columns:S,data:b,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const cn={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},J={render:()=>n.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:n.jsx(d,{caption:"Release readiness board",columns:S,data:b,rowKey:t=>t.id,defaultSortKey:"id"})})},Q={render:()=>n.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:n.jsx(d,{caption:"Release readiness board",columns:S,data:b,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await a(o).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},X={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>n.jsx(Ma,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return n.jsx(d,{columns:t,data:b,rowKey:e=>e.id})}},Z={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort ascending"});await a(e.getByText("No release items yet.")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("No release items yet."),await a(o).toBeDisabled(),await a(o).not.toHaveAttribute("aria-keyshortcuts")}},ee={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/});await a(o).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},te={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:b}),n.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await a(o).not.toBeNull(),await a(o).toHaveAttribute("tabindex","0"),await l.tab(),await a(o).toHaveFocus(),await l.tab(),await a(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ae={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx("p",{style:A,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),n.jsx("button",{type:"button",children:"Before table"}),n.jsx(d,{columns:S,data:b,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});h.mouseDown(r),r.focus(),await l.click(o),await l.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},ne={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsx("p",{style:A,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),n.jsx(d,{columns:S,data:b,defaultSortKey:"id"}),n.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});h.mouseDown(o),o.focus(),await l.click(r),await l.tab({shift:!0}),await a(o).toHaveFocus(),await a(o.style.boxShadow).toContain("0 0 0 3px")}},oe={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:b,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),f=e.getByRole("columnheader",{name:/Issue/});await a(o).toHaveAttribute("aria-busy","true"),await a(e.getByText("Syncing release feed...")).toBeInTheDocument(),await a(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(f).not.toHaveAttribute("aria-sort")}},re={render:()=>n.jsx(_a,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});h.mouseDown(r),await l.click(o);const f=e.getByRole("button",{name:"Issue sort descending"});await a(f).toBeDisabled(),await a(f.style.transform).toContain("translateY(0"),await a(f.style.boxShadow).toBe("none")}},se={render:function(){const[e,o]=u.useState("id asc");return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[n.jsxs("p",{style:A,children:["Active sort: ",n.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),n.jsx("button",{type:"button",children:"Before table"}),n.jsx(d,{columns:S,data:b,defaultSortKey:"id",onSortChange:(r,f)=>o(`${r} ${f}`)})]})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),f=e.getByTestId("primary-pointer-sort-state");await l.click(o),await l.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),h.mouseDown(r,{button:2}),h.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(f).toHaveTextContent("id asc"),await l.click(r),await a(f).toHaveTextContent("id desc")}},ie={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{ariaLabel:"Release checklist table",columns:S,data:b,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ce={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:b,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ue={render:()=>n.jsxs(m,{maxWidth:"min(100%, 780px)",gap:10,children:[n.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),n.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:b,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=y(t).getByRole("table",{name:"Release board metrics"});await a(o).toHaveAttribute("aria-labelledby","release-board-heading"),await a(o).not.toHaveAttribute("aria-label")}},le={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:b,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Ja(){const[t,e]=u.useState("id asc");return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[n.jsxs("p",{style:A,children:["Active sort: ",n.jsx("strong",{style:Ce,children:t})]}),n.jsx(d,{columns:S,data:b,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const de={render:()=>n.jsx(Ja,{}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await a(o).not.toBeNull(),await a(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await l.keyboard("{ArrowRight}");const f=e.getByRole("button",{name:"Component sort ascending"});await a(f).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await l.keyboard("{End}");const Be=e.getByRole("button",{name:"Status sort ascending"});await a(Be).toHaveFocus(),await l.keyboard("{Home}"),await a(r).toHaveFocus(),await l.keyboard("{PageDown}");const T=e.getByRole("button",{name:"Component sort ascending"});await a(T).toHaveFocus(),await l.keyboard("{PageUp}"),await a(r).toHaveFocus(),await l.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const F=e.getByRole("button",{name:"Issue sort ascending"}),I=F.closest("th");await a(I).toHaveAttribute("aria-sort","descending"),h.keyDown(F,{key:"Enter",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","descending"),F.focus(),h.keyDown(F,{key:"Space",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","descending"),await l.keyboard("{Space}"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const B=e.getByRole("button",{name:"Issue sort descending"});B.focus(),h.keyDown(B,{key:"ArrowRight",ctrlKey:!0}),h.keyDown(B,{key:"ArrowLeft",metaKey:!0}),h.keyDown(B,{key:"End",ctrlKey:!0}),h.keyDown(B,{key:"Home",altKey:!0}),h.keyDown(B,{key:"PageDown",metaKey:!0}),h.keyDown(B,{key:"PageUp",ctrlKey:!0}),await a(B).toHaveFocus(),h.keyDown(B,{key:"Enter",ctrlKey:!0}),h.keyDown(B,{key:"Space",metaKey:!0}),await a(e.getByText("id asc")).toBeInTheDocument(),await a(I).toHaveAttribute("aria-sort","ascending"),await l.keyboard("{Shift>}{Enter}{/Shift}"),await Ye(()=>{a(e.getByText("id desc")).toBeInTheDocument(),a(I).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await Ye(()=>{a(e.getByText("id asc")).toBeInTheDocument(),a(I).toHaveAttribute("aria-sort","ascending")})}},me={render:()=>n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[n.jsx("p",{style:A,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),n.jsx("div",{dir:"rtl",children:n.jsx(d,{columns:S,data:b,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});o.focus(),h.keyDown(o,{key:"ArrowLeft",ctrlKey:!0}),h.keyDown(o,{key:"ArrowRight",metaKey:!0}),h.keyDown(o,{key:"ArrowLeft",altKey:!0}),await a(o).toHaveFocus(),await l.keyboard("{ArrowRight}"),await a(o).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await l.keyboard("{ArrowRight}"),await a(o).toHaveFocus()}};function Qa(){const[t,e]=u.useState("id asc");return n.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[n.jsx("p",{style:A,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),n.jsxs("p",{style:A,children:["Active sort: ",n.jsx("strong",{style:Ce,children:t})]}),n.jsx(d,{columns:S,data:b,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ye={render:()=>n.jsx(Qa,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),et(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),et(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),tt(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),tt(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await l.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-sort","descending")}},pe={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:S,data:b,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await l.click(o),await a(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},we={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"releasedAt",header:n.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await l.click(o),await a(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},be={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"status",header:n.jsxs("span",{children:[n.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ge={render:()=>n.jsx(m,{maxWidth:"min(100%, 780px)",children:n.jsx(d,{columns:[{key:"status",header:n.jsx("span",{"aria-label":"Release status",children:n.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ve={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return n.jsx(m,{maxWidth:"min(100%, 620px)",children:n.jsx(d,{columns:t,data:b,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await a(o).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Xa(){const[t,e]=u.useState(!1),o=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return n.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[n.jsx("p",{style:A,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),n.jsxs("p",{style:A,children:["Status column sortable:"," ",n.jsx("strong",{"data-testid":"table-status-sortable",style:Ce,children:t?"yes":"no"})]}),n.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),n.jsx(d,{columns:o,data:b,rowKey:r=>r.id,defaultSortKey:"status"})]})}const he={render:()=>n.jsx(Xa,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await a(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await l.click(o),await a(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Aa=b.map(t=>({...t,note:""})),Ia=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>n.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],xe={render:()=>n.jsx(m,{maxWidth:"min(100%, 720px)",children:n.jsx(d,{columns:Ia,data:Aa,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Se={render:()=>n.jsx(m,{maxWidth:"min(100%, 720px)",children:n.jsx(d,{columns:Ia,data:Aa,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Za=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],fe={render:()=>n.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[n.jsx("p",{style:A,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),n.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Za,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=y(t);await l.click(e.getByRole("button",{name:"Score sort descending"})),await a(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var at,nt,ot;J.parameters={...J.parameters,docs:{...(at=J.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(ot=(nt=J.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,st,it;Q.parameters={...Q.parameters,docs:{...(rt=Q.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=Q.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,ut,lt;X.parameters={...X.parameters,docs:{...(ct=X.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(ut=X.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,mt,yt;Z.parameters={...Z.parameters,docs:{...(dt=Z.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=Z.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var pt,wt,bt;ee.parameters={...ee.parameters,docs:{...(pt=ee.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(bt=(wt=ee.parameters)==null?void 0:wt.docs)==null?void 0:bt.source}}};var gt,vt,ht;te.parameters={...te.parameters,docs:{...(gt=te.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ht=(vt=te.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var xt,St,ft;ae.parameters={...ae.parameters,docs:{...(xt=ae.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(ft=(St=ae.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};var Bt,Rt,kt;ne.parameters={...ne.parameters,docs:{...(Bt=ne.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Sort button hides focus ring on pointer focus, then reverse keyboard navigation
        (Shift+Tab) restores focus-visible ring for the sortable header.
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
}`,...(kt=(Rt=ne.parameters)==null?void 0:Rt.docs)==null?void 0:kt.source}}};var Tt,Dt,Ht;oe.parameters={...oe.parameters,docs:{...(Tt=oe.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Ht=(Dt=oe.parameters)==null?void 0:Dt.docs)==null?void 0:Ht.source}}};var At,It,Et;re.parameters={...re.parameters,docs:{...(At=re.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Et=(It=re.parameters)==null?void 0:It.docs)==null?void 0:Et.source}}};var Ct,Kt,jt;se.parameters={...se.parameters,docs:{...(Ct=se.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(jt=(Kt=se.parameters)==null?void 0:Kt.docs)==null?void 0:jt.source}}};var Ft,Lt,Wt;ie.parameters={...ie.parameters,docs:{...(Ft=ie.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Wt=(Lt=ie.parameters)==null?void 0:Lt.docs)==null?void 0:Wt.source}}};var Pt,Nt,qt;ce.parameters={...ce.parameters,docs:{...(Pt=ce.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=ce.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var $t,Mt,Vt;ue.parameters={...ue.parameters,docs:{...($t=ue.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Vt=(Mt=ue.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};var Ot,Ut,zt;le.parameters={...le.parameters,docs:{...(Ot=le.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(zt=(Ut=le.parameters)==null?void 0:Ut.docs)==null?void 0:zt.source}}};var Gt,Yt,_t;de.parameters={...de.parameters,docs:{...(Gt=de.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(_t=(Yt=de.parameters)==null?void 0:Yt.docs)==null?void 0:_t.source}}};var Jt,Qt,Xt;me.parameters={...me.parameters,docs:{...(Jt=me.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=me.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;ye.parameters={...ye.parameters,docs:{...(Zt=ye.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=ye.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,oa;pe.parameters={...pe.parameters,docs:{...(aa=pe.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(oa=(na=pe.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,sa,ia;we.parameters={...we.parameters,docs:{...(ra=we.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(sa=we.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var ca,ua,la;be.parameters={...be.parameters,docs:{...(ca=be.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(la=(ua=be.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var da,ma,ya;ge.parameters={...ge.parameters,docs:{...(da=ge.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(ma=ge.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};var pa,wa,ba;ve.parameters={...ve.parameters,docs:{...(pa=ve.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ba=(wa=ve.parameters)==null?void 0:wa.docs)==null?void 0:ba.source}}};var ga,va,ha;he.parameters={...he.parameters,docs:{...(ga=he.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(ha=(va=he.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var xa,Sa,fa;xe.parameters={...xe.parameters,docs:{...(xa=xe.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(fa=(Sa=xe.parameters)==null?void 0:Sa.docs)==null?void 0:fa.source}}};var Ba,Ra,ka;Se.parameters={...Se.parameters,docs:{...(Ba=Se.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(ka=(Ra=Se.parameters)==null?void 0:Ra.docs)==null?void 0:ka.source}}};var Ta,Da,Ha;fe.parameters={...fe.parameters,docs:{...(Ta=fe.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ha=(Da=fe.parameters)==null?void 0:Da.docs)==null?void 0:Ha.source}}};const un=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ce as AccessibleNameFallback,ue as AccessibleNameLabelledByHeading,ie as AccessibleNameWithoutCaption,ge as AriaLabelHeaderAutoSortLabel,he as DeferredColumnsDefaultSortRecovery,Q as DescendingDefaultSortDirection,Z as EmptyState,xe as FallbackRowKeyStability,ye as ImeCompositionGuard,ve as InvalidDefaultSortKeyFallback,ae as KeyboardFocusRingAfterPointer,ne as KeyboardFocusRingShiftTabReentry,te as KeyboardReachableScrollContainer,re as LoadingDisablesResetsSortVisualState,oe as LoadingState,pe as LocalizedSortLabels,se as PrimaryPointerOnlySortPress,J as ReleaseChecklist,fe as RenderIndexSemantics,be as RichTextHeaderAutoSortLabel,le as RowHeaderSemantics,me as RtlArrowNavigation,ee as SingleRowSortDisabled,we as SortLabelForCustomHeader,de as SortTelemetry,Se as SourceIndexRowKeyStability,X as WithRowAction,un as __namedExportsOrder,cn as default};
