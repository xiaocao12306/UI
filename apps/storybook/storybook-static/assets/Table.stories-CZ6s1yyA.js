import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Tt}from"./Button-BNFQVefv.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Rt}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as x,fireEvent as de}from"./index-DgAF9SIF.js";const It=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function kt(t,e,r){if(!e)return null;const c=t.find(h=>String(h.key)===e);return c!=null&&c.sortable?{key:e,direction:r}:null}function d({columns:t,data:e,rowKey:r,caption:c,ariaLabel:h,ariaLabelledBy:S,loading:T=!1,loadingContent:yt="Loading data...",emptyContent:vt="No data available.",defaultSortKey:wt,defaultSortDirection:gt="asc",getSortAriaLabel:bt=Ht,getSortStatusText:Z=Dt,onSortChange:J}){const ee=S?void 0:h??(c?void 0:"Data table"),te=b.useRef({}),Q=b.useRef(!0),[xt,ae]=b.useState(null),[ht,k]=b.useState(null),[ft,H]=b.useState(null),[u,ne]=b.useState(()=>kt(t,wt,gt));b.useEffect(()=>{if(!u)return;const s=t.find(o=>String(o.key)===u.key);s!=null&&s.sortable||ne(null)},[t,u]);const I=b.useMemo(()=>{const s=e.map((p,l)=>({row:p,sourceIndex:l}));if(!u)return s;const o=t.find(p=>String(p.key)===u.key);if(!(o!=null&&o.sortable))return s;const g=o.sortAccessor??(p=>{const l=p[String(o.key)];return l instanceof Date||typeof l=="number"||typeof l=="string"?l:String(l??"")});return s.sort((p,l)=>{const v=g(p.row),f=g(l.row);if(typeof v=="string"&&typeof f=="string"){const R=It.compare(v,f);return R!==0?u.direction==="asc"?R:-R:p.sourceIndex-l.sourceIndex}const D=v instanceof Date?v.getTime():v,A=f instanceof Date?f.getTime():f;return D<A?u.direction==="asc"?-1:1:D>A?u.direction==="asc"?1:-1:p.sourceIndex-l.sourceIndex})},[t,e,u]),re=b.useMemo(()=>{if(T||I.length<=1||!u)return"";const s=t.find(g=>String(g.key)===u.key);if(!(s!=null&&s.sortable))return"";const o=typeof s.header=="string"?s.header:String(s.key);return Z({columnKey:u.key,columnHeader:o,direction:u.direction})},[t,Z,T,u,I.length]),X=!T&&I.length>1&&t.some(s=>s.sortable),oe=Math.max(t.length,1);return a.jsxs("div",{"data-aurora-table-scroll-container":"",tabIndex:X?void 0:0,"aria-label":X||S?void 0:ee??"Data table scroll container","aria-labelledby":X?void 0:S,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[re?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:re}):null,a.jsxs("table",{"aria-label":ee,"aria-labelledby":S,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(s=>{const o=String(s.key),g=!!s.sortable,p=I.length>1,l=g&&(u==null?void 0:u.key)===o?u.direction:void 0,v=!T&&p?l:void 0,f=v?v==="asc"?"ascending":"descending":void 0,D=s.align??"left",A=typeof s.header=="string"?s.header:o,R=l==="asc"?"desc":"asc",St=bt({columnKey:o,columnHeader:A,nextDirection:R}),B=T||!p,se=xt===o,ie=ht===o,ce=ft===o,Bt=se||ce,le=()=>{B||(ne({key:o,direction:R}),J==null||J(o,R))};return a.jsx("th",{scope:"col","aria-sort":f,style:{textAlign:D,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:g?a.jsxs("button",{type:"button",ref:i=>{te.current[o]=i},"aria-label":St,"aria-keyshortcuts":B?void 0:"Enter Space",disabled:B,onClick:le,onMouseEnter:()=>{B||ae(o)},onMouseLeave:()=>{ae(i=>i===o?null:i),k(i=>i===o?null:i)},onMouseDown:()=>{B||(Q.current=!1,H(i=>i===o?null:i),k(o))},onMouseUp:()=>{k(i=>i===o?null:i)},onFocus:()=>{if(B){H(i=>i===o?null:i);return}H(i=>Et(te.current[o],Q.current)?o:i===o?null:i)},onBlur:()=>{H(i=>i===o?null:i),k(i=>i===o?null:i)},onKeyDown:i=>{Q.current=!0,At(i.key)&&(Ct(i)||(i.preventDefault(),!i.repeat&&le()))},style:{border:Bt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ie?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":se?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:B?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:B?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ce?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ie?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:v==="asc"?"▲":v==="desc"?"▼":"↕"})]}):s.header},o)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:oe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:yt})})}):I.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:oe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:vt})})}):I.map((s,o)=>{const g=s.row,p=String(s.sourceIndex);return a.jsx("tr",{style:{background:o%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(l=>{const v=l.render?l.render(g,o,s.sourceIndex):String(g[String(l.key)]??""),f={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:l.align??"left"};return l.rowHeader?a.jsx("th",{scope:"row",style:{...f,fontWeight:"var(--aurora-font-weight-medium)"},children:v},String(l.key)):a.jsx("td",{style:f,children:v},String(l.key))})},r?r(g,s.sourceIndex):p)})})]})]})}function Ht({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Dt({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function At(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Ct(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Et(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const y=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],w=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(Rt,{tone:e,children:t.status})}}],Y={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55};function ue(t,e){const r=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(r,"isComposing",{value:!0}),Object.defineProperty(r,"keyCode",{value:229}),t.dispatchEvent(r)}const Gt={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},C={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(d,{caption:"Release readiness board",columns:w,data:y,rowKey:t=>t.id,defaultSortKey:"id"})})},E={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(d,{caption:"Release readiness board",columns:w,data:y,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),c=e.getAllByRole("rowheader")[0];await n(r).toHaveAttribute("aria-sort","descending"),await n(c).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},j={render:()=>{const t=[...w,{key:"action",header:"Action",width:160,render:e=>a.jsx(Tt,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:y,rowKey:e=>e.id})}},K={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:w,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts")}},N={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:w,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/});await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},q={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:y}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).toHaveAttribute("tabindex","0"),await x.tab(),await n(r).toHaveFocus(),await x.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},$={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:w,data:y,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("table",{name:"Data table"}),c=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByRole("columnheader",{name:/Issue/});await n(r).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(c).toBeDisabled(),await n(c).not.toHaveAttribute("aria-keyshortcuts"),await n(h).not.toHaveAttribute("aria-sort")}},L={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{ariaLabel:"Release checklist table",columns:w,data:y,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},V={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:w,data:y,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},F={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:w,data:y,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const r=m(t).getByRole("table",{name:"Release board metrics"});await n(r).toHaveAttribute("aria-labelledby","release-board-heading"),await n(r).not.toHaveAttribute("aria-label")}},G={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:y,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function jt(){const[t,e]=b.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsxs("p",{style:Y,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(d,{columns:w,data:y,defaultSortKey:"id",onSortChange:(r,c)=>e(`${r} ${c}`)})]})}const z={render:()=>a.jsx(jt,{}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).not.toHaveAttribute("tabindex");const c=e.getByRole("button",{name:"Issue sort descending"});await n(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.focus(),await x.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const h=e.getByRole("button",{name:"Issue sort ascending"}),S=h.closest("th");await n(S).toHaveAttribute("aria-sort","descending"),de.keyDown(h,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),h.focus(),de.keyDown(h,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),await x.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}};function Kt(){const[t,e]=b.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsx("p",{style:Y,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:Y,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(d,{columns:w,data:y,defaultSortKey:"id",onSortChange:(r,c)=>e(`${r} ${c}`)})]})}const O={render:()=>a.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),c=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ue(c,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ue(c,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),c.focus(),await x.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","descending")}},M={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:w,data:y,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await x.click(r),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},W={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(d,{columns:t,data:y,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:"Component"}),c=e.getByRole("columnheader",{name:"Status"});await n(r).not.toHaveAttribute("aria-sort"),await n(c).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}},mt=y.map(t=>({...t,note:""})),pt=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],P={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:pt,data:mt,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await x.type(r,"persist me"),await x.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},_={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:pt,data:mt,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await x.type(r,"persist me"),await x.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Nt=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],U={render:()=>a.jsxs("div",{style:{width:"min(100%, 720px)",display:"grid",gap:8},children:[a.jsx("p",{style:Y,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,r)=>`${t.key} (visual:${e}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:Nt,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await x.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var me,pe,ye;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(ye=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ve,we,ge;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" defaultSortDirection="desc" />
    </div>,
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
}`,...(ge=(we=E.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var be,xe,he;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,Se,Be;K.parameters={...K.parameters,docs:{...(fe=K.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)"
  }}>
      <Table columns={columns} data={[]} emptyContent="No release items yet." />
    </div>,
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
}`,...(Be=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Te,Re,Ie;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)"
  }}>
      <Table columns={columns} data={[{
      id: "BTN-102",
      component: "Button",
      owner: "Design System",
      status: "ready"
    }]} defaultSortKey="id" />
    </div>,
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
}`,...(Ie=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var ke,He,De;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
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
    </div>,
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
}`,...(De=(He=q.parameters)==null?void 0:He.docs)==null?void 0:De.source}}};var Ae,Ce,Ee;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)"
  }}>
      <Table columns={columns} data={rows} loading loadingContent="Syncing release feed..." defaultSortKey="id" />
    </div>,
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
}`,...(Ee=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var je,Ke,Ne;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)"
  }}>
      <Table ariaLabel="Release checklist table" columns={columns} data={rows} rowKey={row => row.id} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", {
      name: "Release checklist table"
    })).toBeInTheDocument();
  }
}`,...(Ne=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var qe,$e,Le;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)"
  }}>
      <Table columns={columns} data={rows} rowKey={row => row.id} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("table", {
      name: "Data table"
    })).toBeInTheDocument();
  }
}`,...(Le=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var Ve,Fe,Ge;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <h3 id="release-board-heading" style={{
      margin: 0
    }}>
        Release board metrics
      </h3>
      <Table ariaLabelledBy="release-board-heading" ariaLabel="Fallback table label" columns={columns} data={rows} rowKey={row => row.id} />
    </div>,
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
}`,...(Ge=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var ze,Oe,Me;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)"
  }}>
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
    </div>,
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
}`,...(Me=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};var We,Pe,_e;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
    await expect(issueSort).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    issueSort.focus();
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
  }
}`,...(_e=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var Ue,Ye,Je;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
    issueSortDesc.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
  }
}`,...(Je=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)"
  }}>
      <Table columns={columns} data={rows} defaultSortKey="id" getSortAriaLabel={({
      columnHeader,
      nextDirection
    }) => \`按\${nextDirection === "asc" ? "升序" : "降序"}排序：\${columnHeader}\`} getSortStatusText={({
      columnHeader,
      direction
    }) => \`当前排序：\${columnHeader}（\${direction === "asc" ? "升序" : "降序"}）\`} />
    </div>,
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
}`,...(Ze=(Xe=M.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;W.parameters={...W.parameters,docs:{...(et=W.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
    return <div style={{
      width: "min(100%, 620px)"
    }}>
        <Table columns={nonSortableStatusColumns} data={rows} defaultSortKey="status" />
      </div>;
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
}`,...(at=(tt=W.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,ot;P.parameters={...P.parameters,docs:{...(nt=P.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 720px)"
  }}>
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" />
    </div>,
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
}`,...(ot=(rt=P.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var st,it,ct;_.parameters={..._.parameters,docs:{...(st=_.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 720px)"
  }}>
      <Table columns={statefulColumns} data={statefulRows} defaultSortKey="component" rowKey={(row, rowIndex) => \`\${rowIndex}-\${row.id}\`} />
    </div>,
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
}`,...(ct=(it=_.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,dt,ut;U.parameters={...U.parameters,docs:{...(lt=U.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 720px)",
    display: "grid",
    gap: 8
  }}>
      <p style={storyHelperTextStyle}>
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
    </div>,
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
}`,...(ut=(dt=U.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};const zt=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{V as AccessibleNameFallback,F as AccessibleNameLabelledByHeading,L as AccessibleNameWithoutCaption,E as DescendingDefaultSortDirection,K as EmptyState,P as FallbackRowKeyStability,O as ImeCompositionGuard,W as InvalidDefaultSortKeyFallback,q as KeyboardReachableScrollContainer,$ as LoadingState,M as LocalizedSortLabels,C as ReleaseChecklist,U as RenderIndexSemantics,G as RowHeaderSemantics,N as SingleRowSortDisabled,z as SortTelemetry,_ as SourceIndexRowKeyStability,j as WithRowAction,zt as __namedExportsOrder,Gt as default};
