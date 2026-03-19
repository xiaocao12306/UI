import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as pt}from"./Button-BNFQVefv.js";import{r as h}from"./index-BWu4c2F4.js";import{B as vt}from"./Badge-ZJmMstsz.js";import{within as y,expect as n,userEvent as S,fireEvent as oe}from"./index-DgAF9SIF.js";const gt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function wt(e,t,o){if(!t)return null;const l=e.find(b=>String(b.key)===t);return l!=null&&l.sortable?{key:t,direction:o}:null}function u({columns:e,data:t,rowKey:o,caption:l,ariaLabel:b,ariaLabelledBy:U,loading:R=!1,loadingContent:nt="Loading data...",emptyContent:rt="No data available.",defaultSortKey:ot,defaultSortDirection:st="asc",getSortAriaLabel:it=bt,getSortStatusText:Y=xt,onSortChange:P}){const ct=U?void 0:b??(l?void 0:"Data table"),Q=h.useRef({}),_=h.useRef(!0),[lt,X]=h.useState(null),[dt,k]=h.useState(null),[ut,I]=h.useState(null),[d,J]=h.useState(()=>wt(e,ot,st));h.useEffect(()=>{if(!d)return;const i=e.find(r=>String(r.key)===d.key);i!=null&&i.sortable||J(null)},[e,d]);const T=h.useMemo(()=>{const i=t.map((m,c)=>({row:m,sourceIndex:c}));if(!d)return i;const r=e.find(m=>String(m.key)===d.key);if(!(r!=null&&r.sortable))return i;const g=r.sortAccessor??(m=>{const c=m[String(r.key)];return c instanceof Date||typeof c=="number"||typeof c=="string"?c:String(c??"")});return i.sort((m,c)=>{const p=g(m.row),x=g(c.row);if(typeof p=="string"&&typeof x=="string"){const B=gt.compare(p,x);return B!==0?d.direction==="asc"?B:-B:m.sourceIndex-c.sourceIndex}const D=p instanceof Date?p.getTime():p,H=x instanceof Date?x.getTime():x;return D<H?d.direction==="asc"?-1:1:D>H?d.direction==="asc"?1:-1:m.sourceIndex-c.sourceIndex})},[e,t,d]),Z=h.useMemo(()=>{if(R||T.length<=1||!d)return"";const i=e.find(g=>String(g.key)===d.key);if(!(i!=null&&i.sortable))return"";const r=typeof i.header=="string"?i.header:String(i.key);return Y({columnKey:d.key,columnHeader:r,direction:d.direction})},[e,Y,R,d,T.length]),ee=Math.max(e.length,1);return a.jsxs("div",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Z?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Z}):null,a.jsxs("table",{"aria-label":ct,"aria-labelledby":U,"aria-busy":R||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[l?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:l}):null,a.jsx("thead",{children:a.jsx("tr",{children:e.map(i=>{const r=String(i.key),g=!!i.sortable,m=T.length>1,c=g&&(d==null?void 0:d.key)===r?d.direction:void 0,p=!R&&m?c:void 0,x=p?p==="asc"?"ascending":"descending":void 0,D=i.align??"left",H=typeof i.header=="string"?i.header:r,B=c==="asc"?"desc":"asc",mt=it({columnKey:r,columnHeader:H,nextDirection:B}),f=R||!m,te=lt===r,ae=dt===r,ne=ut===r,yt=te||ne,re=()=>{f||(J({key:r,direction:B}),P==null||P(r,B))};return a.jsx("th",{scope:"col","aria-sort":x,style:{textAlign:D,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:g?a.jsxs("button",{type:"button",ref:s=>{Q.current[r]=s},"aria-label":mt,"aria-keyshortcuts":f?void 0:"Enter Space",disabled:f,onClick:re,onMouseEnter:()=>{f||X(r)},onMouseLeave:()=>{X(s=>s===r?null:s),k(s=>s===r?null:s)},onMouseDown:()=>{f||(_.current=!1,I(s=>s===r?null:s),k(r))},onMouseUp:()=>{k(s=>s===r?null:s)},onFocus:()=>{if(f){I(s=>s===r?null:s);return}I(s=>St(Q.current[r],_.current)?r:s===r?null:s)},onBlur:()=>{I(s=>s===r?null:s),k(s=>s===r?null:s)},onKeyDown:s=>{_.current=!0,ht(s.key)&&(ft(s)||(s.preventDefault(),!s.repeat&&re()))},style:{border:yt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ae?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":te?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:f?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ne?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ae?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:p==="asc"?"▲":p==="desc"?"▼":"↕"})]}):i.header},r)})})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:ee,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:nt})})}):T.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:ee,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:rt})})}):T.map((i,r)=>{const g=i.row,m=String(i.sourceIndex);return a.jsx("tr",{style:{background:r%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map(c=>{const p=c.render?c.render(g,r,i.sourceIndex):String(g[String(c.key)]??""),x={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:c.align??"left"};return c.rowHeader?a.jsx("th",{scope:"row",style:{...x,fontWeight:"var(--aurora-font-weight-medium)"},children:p},String(c.key)):a.jsx("td",{style:x,children:p},String(c.key))})},o?o(g,i.sourceIndex):m)})})]})]})}function bt({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function xt({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function ht(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function ft(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function St(e,t){if(!e)return t;try{return e.matches(":focus-visible")}catch{return t}}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],w=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return a.jsx(vt,{tone:t,children:e.status})}}],et={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55},At={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},A={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:w,data:v,rowKey:e=>e.id,defaultSortKey:"id"})})},j={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:w,data:v,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:/Issue/}),l=t.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(l).toHaveTextContent("DLG-210"),await n(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},E={render:()=>{const e=[...w,{key:"action",header:"Action",width:160,render:t=>a.jsx(pt,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:e,data:v,rowKey:t=>t.id})}},C={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:w,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"Issue sort ascending"});await n(t.getByText("No release items yet.")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},K={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:w,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("status")).not.toBeInTheDocument(),await n(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},N={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:w,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("table",{name:"Data table"}),l=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(t.getByText("Syncing release feed...")).toBeInTheDocument(),await n(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(l).toBeDisabled(),await n(l).not.toHaveAttribute("aria-keyshortcuts"),await n(b).not.toHaveAttribute("aria-sort")}},q={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:w,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await n(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},$={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:w,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=y(e);await n(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},L={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:w,data:v,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const o=y(e).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},V={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e);await n(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Bt(){const[e,t]=h.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsxs("p",{style:et,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:e})]}),a.jsx(u,{columns:w,data:v,defaultSortKey:"id",onSortChange:(o,l)=>t(`${o} ${l}`)})]})}const z={render:()=>a.jsx(Bt,{}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await S.keyboard("{Enter}"),await n(t.getByText("id desc")).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const l=t.getByRole("button",{name:"Issue sort ascending"}),b=l.closest("th");await n(b).toHaveAttribute("aria-sort","descending"),oe.keyDown(l,{key:"Enter",repeat:!0}),await n(t.getByText("id desc")).toBeInTheDocument(),await n(b).toHaveAttribute("aria-sort","descending"),l.focus(),oe.keyDown(l,{key:"Space",repeat:!0}),await n(t.getByText("id desc")).toBeInTheDocument(),await n(b).toHaveAttribute("aria-sort","descending"),await S.keyboard("{Space}"),await n(t.getByText("id asc")).toBeInTheDocument(),await n(b).toHaveAttribute("aria-sort","ascending"),await n(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},F={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:w,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("button",{name:"按降序排序：Issue"});await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await S.click(o),await n(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},G={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(u,{columns:e,data:v,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("columnheader",{name:"Component"}),l=t.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(l).not.toHaveAttribute("aria-sort"),await n(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}},tt=v.map(e=>({...e,note:""})),at=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>a.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],M={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(u,{columns:at,data:tt,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await S.type(o,"persist me"),await S.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},O={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(u,{columns:at,data:tt,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("textbox",{name:"BTN-102 note"});await S.type(o,"persist me"),await S.click(t.getByRole("button",{name:"Component sort descending"})),await n(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Rt=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],W={render:()=>a.jsxs("div",{style:{width:"min(100%, 720px)",display:"grid",gap:8},children:[a.jsx("p",{style:et,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,o)=>`${e.key} (visual:${t}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Rt,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=y(e);await S.click(t.getByRole("button",{name:"Score sort descending"})),await n(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var se,ie,ce;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ye,pe;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};var ve,ge,we;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var be,xe,he;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,Se,Be;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Be=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Re,Te,ke;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(ke=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ie,De,He;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(He=(De=$.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Ae,je,Ee;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ee=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};var Ce,Ke,Ne;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ne=(Ke=V.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var qe,$e,Le;z.parameters={...z.parameters,docs:{...(qe=z.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Le=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var Ve,ze,Fe;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Fe=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};var Ge,Me,Oe;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var We,Pe,_e;M.parameters={...M.parameters,docs:{...(We=M.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(_e=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var Ue,Ye,Qe;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Xe,Je,Ze;W.parameters={...W.parameters,docs:{...(Xe=W.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};const jt=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","LocalizedSortLabels","InvalidDefaultSortKeyFallback","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{$ as AccessibleNameFallback,L as AccessibleNameLabelledByHeading,q as AccessibleNameWithoutCaption,j as DescendingDefaultSortDirection,C as EmptyState,M as FallbackRowKeyStability,G as InvalidDefaultSortKeyFallback,N as LoadingState,F as LocalizedSortLabels,A as ReleaseChecklist,W as RenderIndexSemantics,V as RowHeaderSemantics,K as SingleRowSortDisabled,z as SortTelemetry,O as SourceIndexRowKeyStability,E as WithRowAction,jt as __namedExportsOrder,At as default};
