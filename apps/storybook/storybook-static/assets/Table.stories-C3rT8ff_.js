import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as xt}from"./Button-BNFQVefv.js";import{r as b}from"./index-BWu4c2F4.js";import{B as ht}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as f,fireEvent as ie}from"./index-DgAF9SIF.js";const ft=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function St(t,e,r){if(!e)return null;const c=t.find(x=>String(x.key)===e);return c!=null&&c.sortable?{key:e,direction:r}:null}function u({columns:t,data:e,rowKey:r,caption:c,ariaLabel:x,ariaLabelledBy:J,loading:T=!1,loadingContent:ct="Loading data...",emptyContent:dt="No data available.",defaultSortKey:lt,defaultSortDirection:ut="asc",getSortAriaLabel:mt=Bt,getSortStatusText:Q=Tt,onSortChange:U}){const pt=J?void 0:x??(c?void 0:"Data table"),X=b.useRef({}),Y=b.useRef(!0),[yt,Z]=b.useState(null),[gt,I]=b.useState(null),[vt,D]=b.useState(null),[l,ee]=b.useState(()=>St(t,lt,ut));b.useEffect(()=>{if(!l)return;const i=t.find(s=>String(s.key)===l.key);i!=null&&i.sortable||ee(null)},[t,l]);const R=b.useMemo(()=>{const i=e.map((p,d)=>({row:p,sourceIndex:d}));if(!l)return i;const s=t.find(p=>String(p.key)===l.key);if(!(s!=null&&s.sortable))return i;const w=s.sortAccessor??(p=>{const d=p[String(s.key)];return d instanceof Date||typeof d=="number"||typeof d=="string"?d:String(d??"")});return i.sort((p,d)=>{const y=w(p.row),h=w(d.row);if(typeof y=="string"&&typeof h=="string"){const B=ft.compare(y,h);return B!==0?l.direction==="asc"?B:-B:p.sourceIndex-d.sourceIndex}const k=y instanceof Date?y.getTime():y,H=h instanceof Date?h.getTime():h;return k<H?l.direction==="asc"?-1:1:k>H?l.direction==="asc"?1:-1:p.sourceIndex-d.sourceIndex})},[t,e,l]),te=b.useMemo(()=>{if(T||R.length<=1||!l)return"";const i=t.find(w=>String(w.key)===l.key);if(!(i!=null&&i.sortable))return"";const s=typeof i.header=="string"?i.header:String(i.key);return Q({columnKey:l.key,columnHeader:s,direction:l.direction})},[t,Q,T,l,R.length]),ae=Math.max(t.length,1);return a.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[te?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:te}):null,a.jsxs("table",{"aria-label":pt,"aria-labelledby":J,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[c?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:c}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(i=>{const s=String(i.key),w=!!i.sortable,p=R.length>1,d=w&&(l==null?void 0:l.key)===s?l.direction:void 0,y=!T&&p?d:void 0,h=y?y==="asc"?"ascending":"descending":void 0,k=i.align??"left",H=typeof i.header=="string"?i.header:s,B=d==="asc"?"desc":"asc",wt=mt({columnKey:s,columnHeader:H,nextDirection:B}),S=T||!p,ne=yt===s,re=gt===s,se=vt===s,bt=ne||se,oe=()=>{S||(ee({key:s,direction:B}),U==null||U(s,B))};return a.jsx("th",{scope:"col","aria-sort":h,style:{textAlign:k,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:w?a.jsxs("button",{type:"button",ref:o=>{X.current[s]=o},"aria-label":wt,"aria-keyshortcuts":S?void 0:"Enter Space",disabled:S,onClick:oe,onMouseEnter:()=>{S||Z(s)},onMouseLeave:()=>{Z(o=>o===s?null:o),I(o=>o===s?null:o)},onMouseDown:()=>{S||(Y.current=!1,D(o=>o===s?null:o),I(s))},onMouseUp:()=>{I(o=>o===s?null:o)},onFocus:()=>{if(S){D(o=>o===s?null:o);return}D(o=>Dt(X.current[s],Y.current)?s:o===s?null:o)},onBlur:()=>{D(o=>o===s?null:o),I(o=>o===s?null:o)},onKeyDown:o=>{Y.current=!0,Rt(o.key)&&(It(o)||(o.preventDefault(),!o.repeat&&oe()))},style:{border:bt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:re?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":ne?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:S?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:S?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:se?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:re?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:y==="asc"?"▲":y==="desc"?"▼":"↕"})]}):i.header},s)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:ae,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:ct})})}):R.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:ae,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:dt})})}):R.map((i,s)=>{const w=i.row,p=String(i.sourceIndex);return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(d=>{const y=d.render?d.render(w,s,i.sourceIndex):String(w[String(d.key)]??""),h={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:d.align??"left"};return d.rowHeader?a.jsx("th",{scope:"row",style:{...h,fontWeight:"var(--aurora-font-weight-medium)"},children:y},String(d.key)):a.jsx("td",{style:h,children:y},String(d.key))})},r?r(w,i.sourceIndex):p)})})]})]})}function Bt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Tt({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function Rt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function It(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Dt(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],v=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(ht,{tone:e,children:t.status})}}],_={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55};function ce(t,e){const r=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(r,"isComposing",{value:!0}),Object.defineProperty(r,"keyCode",{value:229}),t.dispatchEvent(r)}const qt={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},A={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:v,data:g,rowKey:t=>t.id,defaultSortKey:"id"})})},j={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:v,data:g,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),c=e.getAllByRole("rowheader")[0];await n(r).toHaveAttribute("aria-sort","descending"),await n(c).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},E={render:()=>{const t=[...v,{key:"action",header:"Action",width:160,render:e=>a.jsx(xt,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:t,data:g,rowKey:e=>e.id})}},C={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:v,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts")}},K={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:v,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/});await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},N={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:v,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("table",{name:"Data table"}),c=e.getByRole("button",{name:"Issue sort descending"}),x=e.getByRole("columnheader",{name:/Issue/});await n(r).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(c).toBeDisabled(),await n(c).not.toHaveAttribute("aria-keyshortcuts"),await n(x).not.toHaveAttribute("aria-sort")}},q={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:v,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},$={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:v,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},L={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:v,data:g,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const r=m(t).getByRole("table",{name:"Release board metrics"});await n(r).toHaveAttribute("aria-labelledby","release-board-heading"),await n(r).not.toHaveAttribute("aria-label")}},V={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function kt(){const[t,e]=b.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsxs("p",{style:_,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(u,{columns:v,data:g,defaultSortKey:"id",onSortChange:(r,c)=>e(`${r} ${c}`)})]})}const G={render:()=>a.jsx(kt,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),await f.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const c=e.getByRole("button",{name:"Issue sort ascending"}),x=c.closest("th");await n(x).toHaveAttribute("aria-sort","descending"),ie.keyDown(c,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(x).toHaveAttribute("aria-sort","descending"),c.focus(),ie.keyDown(c,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(x).toHaveAttribute("aria-sort","descending"),await f.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(x).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}};function Ht(){const[t,e]=b.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsx("p",{style:_,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:_,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(u,{columns:v,data:g,defaultSortKey:"id",onSortChange:(r,c)=>e(`${r} ${c}`)})]})}const z={render:()=>a.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),c=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ce(c,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ce(c,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),c.focus(),await f.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","descending")}},F={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:v,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await f.click(r),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},O={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(u,{columns:t,data:g,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:"Component"}),c=e.getByRole("columnheader",{name:"Status"});await n(r).not.toHaveAttribute("aria-sort"),await n(c).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}},ot=g.map(t=>({...t,note:""})),it=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],M={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(u,{columns:it,data:ot,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await f.type(r,"persist me"),await f.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},W={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(u,{columns:it,data:ot,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await f.type(r,"persist me"),await f.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},At=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],P={render:()=>a.jsxs("div",{style:{width:"min(100%, 720px)",display:"grid",gap:8},children:[a.jsx("p",{style:_,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,r)=>`${t.key} (visual:${e}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:At,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await f.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var de,le,ue;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(ue=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var me,pe,ye;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ge,ve,we;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var be,xe,he;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,Se,Be;K.parameters={...K.parameters,docs:{...(fe=K.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Be=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Te,Re,Ie;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var De,ke,He;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(He=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:He.source}}};var Ae,je,Ee;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ee=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};var Ce,Ke,Ne;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ne=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var qe,$e,Le;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Le=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var Ve,Ge,ze;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <SortTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
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
}`,...(ze=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Fe,Oe,Me;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};var We,Pe,_e;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(_e=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var Ue,Ye,Je;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=M.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;W.parameters={...W.parameters,docs:{...(et=W.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=W.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,st;P.parameters={...P.parameters,docs:{...(nt=P.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(rt=P.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};const $t=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{$ as AccessibleNameFallback,L as AccessibleNameLabelledByHeading,q as AccessibleNameWithoutCaption,j as DescendingDefaultSortDirection,C as EmptyState,M as FallbackRowKeyStability,z as ImeCompositionGuard,O as InvalidDefaultSortKeyFallback,N as LoadingState,F as LocalizedSortLabels,A as ReleaseChecklist,P as RenderIndexSemantics,V as RowHeaderSemantics,K as SingleRowSortDisabled,G as SortTelemetry,W as SourceIndexRowKeyStability,E as WithRowAction,$t as __namedExportsOrder,qt as default};
