import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Dt}from"./Button-BNFQVefv.js";import{r as v}from"./index-BWu4c2F4.js";import{B as At}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as b,fireEvent as ye}from"./index-DgAF9SIF.js";const Ct=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function pe(t,e,r){if(!e)return null;const i=t.find(h=>String(h.key)===e);return i!=null&&i.sortable?{key:e,direction:r}:null}function u({columns:t,data:e,rowKey:r,caption:i,ariaLabel:h,ariaLabelledBy:S,loading:T=!1,loadingContent:ft="Loading data...",emptyContent:St="No data available.",defaultSortKey:Q,defaultSortDirection:X="asc",getSortAriaLabel:Bt=jt,getSortStatusText:ne=Et,onSortChange:Z}){const re=S?void 0:h??(i?void 0:"Data table"),oe=v.useRef({}),ee=v.useRef(!0),[Tt,se]=v.useState(null),[Rt,k]=v.useState(null),[Ht,D]=v.useState(null),[d,te]=v.useState(()=>pe(t,Q,X));v.useEffect(()=>{if(!d)return;const s=t.find(o=>String(o.key)===d.key);s!=null&&s.sortable||te(null)},[t,d]),v.useEffect(()=>{if(d)return;const s=pe(t,Q,X);s&&te(s)},[t,X,Q,d]);const H=v.useMemo(()=>{const s=e.map((p,l)=>({row:p,sourceIndex:l}));if(!d)return s;const o=t.find(p=>String(p.key)===d.key);if(!(o!=null&&o.sortable))return s;const x=o.sortAccessor??(p=>{const l=p[String(o.key)];return l instanceof Date||typeof l=="number"||typeof l=="string"?l:String(l??"")});return s.sort((p,l)=>{const w=x(p.row),f=x(l.row);if(typeof w=="string"&&typeof f=="string"){const R=Ct.compare(w,f);return R!==0?d.direction==="asc"?R:-R:p.sourceIndex-l.sourceIndex}const A=w instanceof Date?w.getTime():w,C=f instanceof Date?f.getTime():f;return A<C?d.direction==="asc"?-1:1:A>C?d.direction==="asc"?1:-1:p.sourceIndex-l.sourceIndex})},[t,e,d]),ie=v.useMemo(()=>{if(T||H.length<=1||!d)return"";const s=t.find(x=>String(x.key)===d.key);if(!(s!=null&&s.sortable))return"";const o=typeof s.header=="string"?s.header:String(s.key);return ne({columnKey:d.key,columnHeader:o,direction:d.direction})},[t,ne,T,d,H.length]),ae=!T&&H.length>1&&t.some(s=>s.sortable),ce=Math.max(t.length,1);return a.jsxs("div",{"data-aurora-table-scroll-container":"",tabIndex:ae?void 0:0,"aria-label":ae||S?void 0:re??"Data table scroll container","aria-labelledby":ae?void 0:S,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[ie?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:ie}):null,a.jsxs("table",{"aria-label":re,"aria-labelledby":S,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(s=>{const o=String(s.key),x=!!s.sortable,p=H.length>1,l=x&&(d==null?void 0:d.key)===o?d.direction:void 0,w=!T&&p?l:void 0,f=w?w==="asc"?"ascending":"descending":void 0,A=s.align??"left",C=typeof s.header=="string"?s.header:o,R=l==="asc"?"desc":"asc",It=Bt({columnKey:o,columnHeader:C,nextDirection:R}),B=T||!p,le=Tt===o,de=Rt===o,ue=Ht===o,kt=le||ue,me=()=>{B||(te({key:o,direction:R}),Z==null||Z(o,R))};return a.jsx("th",{scope:"col","aria-sort":f,style:{textAlign:A,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:x?a.jsxs("button",{type:"button",ref:c=>{oe.current[o]=c},"aria-label":It,"aria-keyshortcuts":B?void 0:"Enter Space",disabled:B,onClick:me,onMouseEnter:()=>{B||se(o)},onMouseLeave:()=>{se(c=>c===o?null:c),k(c=>c===o?null:c)},onMouseDown:()=>{B||(ee.current=!1,D(c=>c===o?null:c),k(o))},onMouseUp:()=>{k(c=>c===o?null:c)},onFocus:()=>{if(B){D(c=>c===o?null:c);return}D(c=>qt(oe.current[o],ee.current)?o:c===o?null:c)},onBlur:()=>{D(c=>c===o?null:c),k(c=>c===o?null:c)},onKeyDown:c=>{ee.current=!0,Kt(c.key)&&(Nt(c)||(c.preventDefault(),!c.repeat&&me()))},style:{border:kt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:de?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":le?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:B?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:B?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ue?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:de?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:w==="asc"?"▲":w==="desc"?"▼":"↕"})]}):s.header},o)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:ce,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:ft})})}):H.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:ce,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:St})})}):H.map((s,o)=>{const x=s.row,p=String(s.sourceIndex);return a.jsx("tr",{style:{background:o%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(l=>{const w=l.render?l.render(x,o,s.sourceIndex):String(x[String(l.key)]??""),f={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:l.align??"left"};return l.rowHeader?a.jsx("th",{scope:"row",style:{...f,fontWeight:"var(--aurora-font-weight-medium)"},children:w},String(l.key)):a.jsx("td",{style:f,children:w},String(l.key))})},r?r(x,s.sourceIndex):p)})})]})]})}function jt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Et({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function Kt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Nt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function qt(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const y=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],g=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(At,{tone:e,children:t.status})}}],I={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55};function ve(t,e){const r=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(r,"isComposing",{value:!0}),Object.defineProperty(r,"keyCode",{value:229}),t.dispatchEvent(r)}const Wt={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},j={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:g,data:y,rowKey:t=>t.id,defaultSortKey:"id"})})},E={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(u,{caption:"Release readiness board",columns:g,data:y,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),i=e.getAllByRole("rowheader")[0];await n(r).toHaveAttribute("aria-sort","descending"),await n(i).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},K={render:()=>{const t=[...g,{key:"action",header:"Action",width:160,render:e=>a.jsx(Dt,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:t,data:y,rowKey:e=>e.id})}},N={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:g,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts")}},q={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:g,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/});await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},L={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx(u,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:y}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).toHaveAttribute("tabindex","0"),await b.tab(),await n(r).toHaveFocus(),await b.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},$={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:g,data:y,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("table",{name:"Data table"}),i=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByRole("columnheader",{name:/Issue/});await n(r).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(i).toBeDisabled(),await n(i).not.toHaveAttribute("aria-keyshortcuts"),await n(h).not.toHaveAttribute("aria-sort")}},V={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{ariaLabel:"Release checklist table",columns:g,data:y,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},F={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:g,data:y,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},G={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:g,data:y,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const r=m(t).getByRole("table",{name:"Release board metrics"});await n(r).toHaveAttribute("aria-labelledby","release-board-heading"),await n(r).not.toHaveAttribute("aria-label")}},z={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:y,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Lt(){const[t,e]=v.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsxs("p",{style:I,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(u,{columns:g,data:y,defaultSortKey:"id",onSortChange:(r,i)=>e(`${r} ${i}`)})]})}const M={render:()=>a.jsx(Lt,{}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).not.toHaveAttribute("tabindex");const i=e.getByRole("button",{name:"Issue sort descending"});await n(i).toHaveAttribute("aria-keyshortcuts","Enter Space"),i.focus(),await b.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const h=e.getByRole("button",{name:"Issue sort ascending"}),S=h.closest("th");await n(S).toHaveAttribute("aria-sort","descending"),ye.keyDown(h,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),h.focus(),ye.keyDown(h,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),await b.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}};function $t(){const[t,e]=v.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsx("p",{style:I,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:I,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(u,{columns:g,data:y,defaultSortKey:"id",onSortChange:(r,i)=>e(`${r} ${i}`)})]})}const O={render:()=>a.jsx($t,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),i=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ve(i,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ve(i,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),i.focus(),await b.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","descending")}},P={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(u,{columns:g,data:y,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await b.click(r),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},W={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(u,{columns:t,data:y,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:"Component"}),i=e.getByRole("columnheader",{name:"Status"});await n(r).not.toHaveAttribute("aria-sort"),await n(i).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Vt(){const[t,e]=v.useState(!1),r=v.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs("div",{style:{width:"min(100%, 700px)",display:"grid",gap:8},children:[a.jsx("p",{style:I,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:I,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:{color:"var(--aurora-text-primary)"},children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(u,{columns:r,data:y,rowKey:i=>i.id,defaultSortKey:"status"})]})}const _={render:()=>a.jsx(Vt,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Load status sortable schema"}),i=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(i).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await b.click(r),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(i).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},xt=y.map(t=>({...t,note:""})),ht=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],U={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(u,{columns:ht,data:xt,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await b.type(r,"persist me"),await b.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Y={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(u,{columns:ht,data:xt,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await b.type(r,"persist me"),await b.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ft=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],J={render:()=>a.jsxs("div",{style:{width:"min(100%, 720px)",display:"grid",gap:8},children:[a.jsx("p",{style:I,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,r)=>`${t.key} (visual:${e}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:Ft,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await b.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var we,be,ge;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(ge=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var xe,he,fe;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(fe=(he=E.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Se,Be,Te;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(Be=K.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Re,He,Ie;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(He=N.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var ke,De,Ae;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ae=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var Ce,je,Ee;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};var Ke,Ne,qe;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Le,$e,Ve;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source}}};var Fe,Ge,ze;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Me,Oe,Pe;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var We,_e,Ue;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var Ye,Je,Qe;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;O.parameters={...O.parameters,docs:{...(Xe=O.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;P.parameters={...P.parameters,docs:{...(tt=P.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=P.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var rt,ot,st;W.parameters={...W.parameters,docs:{...(rt=W.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(st=(ot=W.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var it,ct,lt;_.parameters={..._.parameters,docs:{...(it=_.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ct=_.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,ut,mt;U.parameters={...U.parameters,docs:{...(dt=U.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=U.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var yt,pt,vt;Y.parameters={...Y.parameters,docs:{...(yt=Y.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(pt=Y.parameters)==null?void 0:pt.docs)==null?void 0:vt.source}}};var wt,bt,gt;J.parameters={...J.parameters,docs:{...(wt=J.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(gt=(bt=J.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};const _t=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{F as AccessibleNameFallback,G as AccessibleNameLabelledByHeading,V as AccessibleNameWithoutCaption,_ as DeferredColumnsDefaultSortRecovery,E as DescendingDefaultSortDirection,N as EmptyState,U as FallbackRowKeyStability,O as ImeCompositionGuard,W as InvalidDefaultSortKeyFallback,L as KeyboardReachableScrollContainer,$ as LoadingState,P as LocalizedSortLabels,j as ReleaseChecklist,J as RenderIndexSemantics,z as RowHeaderSemantics,q as SingleRowSortDisabled,M as SortTelemetry,Y as SourceIndexRowKeyStability,K as WithRowAction,_t as __namedExportsOrder,Wt as default};
