import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as qt}from"./Button-BNFQVefv.js";import{r as y}from"./index-BWu4c2F4.js";import{B as $t}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as b,fireEvent as te}from"./index-DgAF9SIF.js";const Vt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function be(t,e,r){if(!e)return null;const s=t.find(g=>String(g.key)===e);return s!=null&&s.sortable?{key:e,direction:r}:null}function d({columns:t,data:e,rowKey:r,caption:s,ariaLabel:g,ariaLabelledBy:S,loading:R=!1,loadingContent:Dt="Loading data...",emptyContent:At="No data available.",defaultSortKey:ae,defaultSortDirection:ne="asc",getSortAriaLabel:Et=Ft,getSortStatusText:ie=Gt,onSortChange:re}){const ce=S?void 0:g??(s?void 0:"Data table"),le=y.useRef({}),k=y.useRef(!0),[Ct,oe]=y.useState(null),[jt,D]=y.useState(null),[Kt,A]=y.useState(null);y.useEffect(()=>{const i=v=>{v.metaKey||v.altKey||v.ctrlKey||(k.current=!0)},o=()=>{k.current=!1};return document.addEventListener("keydown",i,!0),document.addEventListener("pointerdown",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("touchstart",o,!0),()=>{document.removeEventListener("keydown",i,!0),document.removeEventListener("pointerdown",o,!0),document.removeEventListener("mousedown",o,!0),document.removeEventListener("touchstart",o,!0)}},[]);const[u,se]=y.useState(()=>be(t,ae,ne));y.useEffect(()=>{if(!u)return;const i=t.find(o=>String(o.key)===u.key);i!=null&&i.sortable||se(null)},[t,u]),y.useEffect(()=>{if(u)return;const i=be(t,ae,ne);i&&se(i)},[t,ne,ae,u]);const H=y.useMemo(()=>{const i=e.map((w,l)=>({row:w,sourceIndex:l}));if(!u)return i;const o=t.find(w=>String(w.key)===u.key);if(!(o!=null&&o.sortable))return i;const v=o.sortAccessor??(w=>{const l=w[String(o.key)];return l instanceof Date||typeof l=="number"||typeof l=="string"?l:String(l??"")});return i.sort((w,l)=>{const h=v(w.row),B=v(l.row);if(typeof h=="string"&&typeof B=="string"){const T=Vt.compare(h,B);return T!==0?u.direction==="asc"?T:-T:w.sourceIndex-l.sourceIndex}const C=h instanceof Date?h.getTime():h,j=B instanceof Date?B.getTime():B;return C<j?u.direction==="asc"?-1:1:C>j?u.direction==="asc"?1:-1:w.sourceIndex-l.sourceIndex})},[t,e,u]),de=y.useMemo(()=>{if(R||H.length<=1||!u)return"";const i=t.find(v=>String(v.key)===u.key);if(!(i!=null&&i.sortable))return"";const o=typeof i.header=="string"?i.header:String(i.key);return ie({columnKey:u.key,columnHeader:o,direction:u.direction})},[t,ie,R,u,H.length]),E=!R&&H.length>1&&t.some(i=>i.sortable),ue=Math.max(t.length,1);return y.useEffect(()=>{E||(oe(null),D(null),A(null))},[E]),a.jsxs("div",{"data-aurora-table-scroll-container":"",tabIndex:E?void 0:0,"aria-label":E||S?void 0:ce??"Data table scroll container","aria-labelledby":E?void 0:S,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[de?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:de}):null,a.jsxs("table",{"aria-label":ce,"aria-labelledby":S,"aria-busy":R||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[s?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:s}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(i=>{const o=String(i.key),v=!!i.sortable,w=H.length>1,l=v&&(u==null?void 0:u.key)===o?u.direction:void 0,h=!R&&w?l:void 0,B=h?h==="asc"?"ascending":"descending":void 0,C=i.align??"left",j=typeof i.header=="string"?i.header:o,T=l==="asc"?"desc":"asc",Lt=Et({columnKey:o,columnHeader:j,nextDirection:T}),f=R||!w,me=!f&&Ct===o,ye=!f&&jt===o,pe=!f&&Kt===o,Nt=me||pe,ve=()=>{f||(se({key:o,direction:T}),re==null||re(o,T))};return a.jsx("th",{scope:"col","aria-sort":B,style:{textAlign:C,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:v?a.jsxs("button",{type:"button",ref:c=>{le.current[o]=c},"aria-label":Lt,"aria-keyshortcuts":f?void 0:"Enter Space",disabled:f,onClick:ve,onMouseEnter:()=>{f||oe(o)},onMouseLeave:()=>{oe(c=>c===o?null:c),D(c=>c===o?null:c)},onMouseDown:()=>{f||(k.current=!1,A(c=>c===o?null:c),D(o))},onMouseUp:()=>{D(c=>c===o?null:c)},onFocus:()=>{if(f){A(c=>c===o?null:c);return}A(c=>Ot(le.current[o],k.current)?o:c===o?null:c)},onBlur:()=>{A(c=>c===o?null:c),D(c=>c===o?null:c)},onKeyDown:c=>{k.current=!0,zt(c.key)&&(Mt(c)||(c.preventDefault(),!c.repeat&&ve()))},style:{border:Nt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ye?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":me?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:f?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:pe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ye?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:h==="asc"?"▲":h==="desc"?"▼":"↕"})]}):i.header},o)})})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:ue,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Dt})})}):H.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:ue,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:At})})}):H.map((i,o)=>{const v=i.row,w=String(i.sourceIndex);return a.jsx("tr",{style:{background:o%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(l=>{const h=l.render?l.render(v,o,i.sourceIndex):String(v[String(l.key)]??""),B={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:l.align??"left"};return l.rowHeader?a.jsx("th",{scope:"row",style:{...B,fontWeight:"var(--aurora-font-weight-medium)"},children:h},String(l.key)):a.jsx("td",{style:B,children:h},String(l.key))})},r?r(v,i.sourceIndex):w)})})]})]})}function Ft({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Gt({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function zt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Mt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ot(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],x=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx($t,{tone:e,children:t.status})}}],I={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55};function ge(t,e){const r=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(r,"isComposing",{value:!0}),Object.defineProperty(r,"keyCode",{value:229}),t.dispatchEvent(r)}function Pt(){const[t,e]=y.useState(!1);return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("button",{type:"button",onClick:()=>e(r=>!r),children:"Toggle loading"}),a.jsx(d,{columns:x,data:p,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const ta={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},K={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(d,{caption:"Release readiness board",columns:x,data:p,rowKey:t=>t.id,defaultSortKey:"id"})})},L={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(d,{caption:"Release readiness board",columns:x,data:p,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),s=e.getAllByRole("rowheader")[0];await n(r).toHaveAttribute("aria-sort","descending"),await n(s).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},N={render:()=>{const t=[...x,{key:"action",header:"Action",width:160,render:e=>a.jsx(qt,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:p,rowKey:e=>e.id})}},q={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts")}},$={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/});await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},V={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:p}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).toHaveAttribute("tabindex","0"),await b.tab(),await n(r).toHaveFocus(),await b.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},F={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("p",{style:I,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:x,data:p,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Before table"}),s=e.getByRole("button",{name:"Issue sort descending"});te.mouseDown(s),s.focus(),await b.click(r),await b.tab(),await n(s).toHaveFocus(),await n(s.style.boxShadow).toContain("0 0 0 3px")}},G={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("table",{name:"Data table"}),s=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByRole("columnheader",{name:/Issue/});await n(r).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(s).toBeDisabled(),await n(s).not.toHaveAttribute("aria-keyshortcuts"),await n(g).not.toHaveAttribute("aria-sort")}},z={render:()=>a.jsx(Pt,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Toggle loading"}),s=e.getByRole("button",{name:"Issue sort descending"});te.mouseDown(s),await b.click(r);const g=e.getByRole("button",{name:"Issue sort descending"});await n(g).toBeDisabled(),await n(g.style.transform).toContain("translateY(0"),await n(g.style.boxShadow).toBe("none")}},M={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{ariaLabel:"Release checklist table",columns:x,data:p,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},O={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:p,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},P={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:x,data:p,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const r=m(t).getByRole("table",{name:"Release board metrics"});await n(r).toHaveAttribute("aria-labelledby","release-board-heading"),await n(r).not.toHaveAttribute("aria-label")}},W={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:p,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Wt(){const[t,e]=y.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsxs("p",{style:I,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(d,{columns:x,data:p,defaultSortKey:"id",onSortChange:(r,s)=>e(`${r} ${s}`)})]})}const Y={render:()=>a.jsx(Wt,{}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).not.toHaveAttribute("tabindex");const s=e.getByRole("button",{name:"Issue sort descending"});await n(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),s.focus(),await b.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const g=e.getByRole("button",{name:"Issue sort ascending"}),S=g.closest("th");await n(S).toHaveAttribute("aria-sort","descending"),te.keyDown(g,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),g.focus(),te.keyDown(g,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),await b.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}};function Yt(){const[t,e]=y.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsx("p",{style:I,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:I,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(d,{columns:x,data:p,defaultSortKey:"id",onSortChange:(r,s)=>e(`${r} ${s}`)})]})}const _={render:()=>a.jsx(Yt,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),s=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ge(s,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),ge(s,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),s.focus(),await b.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","descending")}},U={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await b.click(r),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},J={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(d,{columns:t,data:p,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:"Component"}),s=e.getByRole("columnheader",{name:"Status"});await n(r).not.toHaveAttribute("aria-sort"),await n(s).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function _t(){const[t,e]=y.useState(!1),r=y.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs("div",{style:{width:"min(100%, 700px)",display:"grid",gap:8},children:[a.jsx("p",{style:I,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:I,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:{color:"var(--aurora-text-primary)"},children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:r,data:p,rowKey:s=>s.id,defaultSortKey:"status"})]})}const Q={render:()=>a.jsx(_t,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Load status sortable schema"}),s=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(s).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await b.click(r),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(s).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Ht=p.map(t=>({...t,note:""})),kt=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],X={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:kt,data:Ht,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await b.type(r,"persist me"),await b.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Z={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:kt,data:Ht,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await b.type(r,"persist me"),await b.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ut=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],ee={render:()=>a.jsxs("div",{style:{width:"min(100%, 720px)",display:"grid",gap:8},children:[a.jsx("p",{style:I,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,r)=>`${t.key} (visual:${e}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:Ut,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await b.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var we,xe,he;K.parameters={...K.parameters,docs:{...(we=K.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(he=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,Be,Se;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var Re,Te,Ie;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var He,ke,De;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(De=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ae,Ee,Ce;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ce=(Ee=$.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var je,Ke,Le;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Le=(Ke=V.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var Ne,qe,$e;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <p style={storyHelperTextStyle}>
        Sort button hides focus ring on pointer focus, then restores focus-visible ring when users
        return with keyboard Tab navigation.
      </p>
      <button type="button">Before table</button>
      <Table columns={columns} data={rows} defaultSortKey="id" />
    </div>,
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
}`,...($e=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var Ve,Fe,Ge;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ge=(Fe=G.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var ze,Me,Oe;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Pe,We,Ye;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ye=(We=M.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var _e,Ue,Je;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Je=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;P.parameters={...P.parameters,docs:{...(Qe=P.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;W.parameters={...W.parameters,docs:{...(et=W.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=W.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,ot;Y.parameters={...Y.parameters,docs:{...(nt=Y.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(rt=Y.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var st,it,ct;_.parameters={..._.parameters,docs:{...(st=_.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(it=_.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,dt,ut;U.parameters={...U.parameters,docs:{...(lt=U.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ut=(dt=U.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,yt,pt;J.parameters={...J.parameters,docs:{...(mt=J.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(pt=(yt=J.parameters)==null?void 0:yt.docs)==null?void 0:pt.source}}};var vt,bt,gt;Q.parameters={...Q.parameters,docs:{...(vt=Q.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(gt=(bt=Q.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var wt,xt,ht;X.parameters={...X.parameters,docs:{...(wt=X.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(ht=(xt=X.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var ft,Bt,St;Z.parameters={...Z.parameters,docs:{...(ft=Z.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(St=(Bt=Z.parameters)==null?void 0:Bt.docs)==null?void 0:St.source}}};var Rt,Tt,It;ee.parameters={...ee.parameters,docs:{...(Rt=ee.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(It=(Tt=ee.parameters)==null?void 0:Tt.docs)==null?void 0:It.source}}};const aa=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{O as AccessibleNameFallback,P as AccessibleNameLabelledByHeading,M as AccessibleNameWithoutCaption,Q as DeferredColumnsDefaultSortRecovery,L as DescendingDefaultSortDirection,q as EmptyState,X as FallbackRowKeyStability,_ as ImeCompositionGuard,J as InvalidDefaultSortKeyFallback,F as KeyboardFocusRingAfterPointer,V as KeyboardReachableScrollContainer,z as LoadingDisablesResetsSortVisualState,G as LoadingState,U as LocalizedSortLabels,K as ReleaseChecklist,ee as RenderIndexSemantics,W as RowHeaderSemantics,$ as SingleRowSortDisabled,Y as SortTelemetry,Z as SourceIndexRowKeyStability,N as WithRowAction,aa as __namedExportsOrder,ta as default};
