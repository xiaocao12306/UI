import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as jt}from"./Button-BNFQVefv.js";import{r as v}from"./index-BWu4c2F4.js";import{B as Kt}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as w,fireEvent as re}from"./index-DgAF9SIF.js";const Nt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function ve(t,e,r){if(!e)return null;const i=t.find(h=>String(h.key)===e);return i!=null&&i.sortable?{key:e,direction:r}:null}function d({columns:t,data:e,rowKey:r,caption:i,ariaLabel:h,ariaLabelledBy:S,loading:T=!1,loadingContent:Rt="Loading data...",emptyContent:Ht="No data available.",defaultSortKey:Z,defaultSortDirection:ee="asc",getSortAriaLabel:It=Lt,getSortStatusText:oe=qt,onSortChange:te}){const se=S?void 0:h??(i?void 0:"Data table"),ie=v.useRef({}),k=v.useRef(!0),[kt,ce]=v.useState(null),[Dt,D]=v.useState(null),[At,A]=v.useState(null);v.useEffect(()=>{const s=p=>{p.metaKey||p.altKey||p.ctrlKey||(k.current=!0)},o=()=>{k.current=!1};return document.addEventListener("keydown",s,!0),document.addEventListener("pointerdown",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("touchstart",o,!0),()=>{document.removeEventListener("keydown",s,!0),document.removeEventListener("pointerdown",o,!0),document.removeEventListener("mousedown",o,!0),document.removeEventListener("touchstart",o,!0)}},[]);const[u,ae]=v.useState(()=>ve(t,Z,ee));v.useEffect(()=>{if(!u)return;const s=t.find(o=>String(o.key)===u.key);s!=null&&s.sortable||ae(null)},[t,u]),v.useEffect(()=>{if(u)return;const s=ve(t,Z,ee);s&&ae(s)},[t,ee,Z,u]);const I=v.useMemo(()=>{const s=e.map((b,l)=>({row:b,sourceIndex:l}));if(!u)return s;const o=t.find(b=>String(b.key)===u.key);if(!(o!=null&&o.sortable))return s;const p=o.sortAccessor??(b=>{const l=b[String(o.key)];return l instanceof Date||typeof l=="number"||typeof l=="string"?l:String(l??"")});return s.sort((b,l)=>{const g=p(b.row),f=p(l.row);if(typeof g=="string"&&typeof f=="string"){const R=Nt.compare(g,f);return R!==0?u.direction==="asc"?R:-R:b.sourceIndex-l.sourceIndex}const C=g instanceof Date?g.getTime():g,E=f instanceof Date?f.getTime():f;return C<E?u.direction==="asc"?-1:1:C>E?u.direction==="asc"?1:-1:b.sourceIndex-l.sourceIndex})},[t,e,u]),le=v.useMemo(()=>{if(T||I.length<=1||!u)return"";const s=t.find(p=>String(p.key)===u.key);if(!(s!=null&&s.sortable))return"";const o=typeof s.header=="string"?s.header:String(s.key);return oe({columnKey:u.key,columnHeader:o,direction:u.direction})},[t,oe,T,u,I.length]),ne=!T&&I.length>1&&t.some(s=>s.sortable),de=Math.max(t.length,1);return a.jsxs("div",{"data-aurora-table-scroll-container":"",tabIndex:ne?void 0:0,"aria-label":ne||S?void 0:se??"Data table scroll container","aria-labelledby":ne?void 0:S,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[le?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:le}):null,a.jsxs("table",{"aria-label":se,"aria-labelledby":S,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(s=>{const o=String(s.key),p=!!s.sortable,b=I.length>1,l=p&&(u==null?void 0:u.key)===o?u.direction:void 0,g=!T&&b?l:void 0,f=g?g==="asc"?"ascending":"descending":void 0,C=s.align??"left",E=typeof s.header=="string"?s.header:o,R=l==="asc"?"desc":"asc",Ct=It({columnKey:o,columnHeader:E,nextDirection:R}),B=T||!b,ue=kt===o,me=Dt===o,ye=At===o,Et=ue||ye,pe=()=>{B||(ae({key:o,direction:R}),te==null||te(o,R))};return a.jsx("th",{scope:"col","aria-sort":f,style:{textAlign:C,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:p?a.jsxs("button",{type:"button",ref:c=>{ie.current[o]=c},"aria-label":Ct,"aria-keyshortcuts":B?void 0:"Enter Space",disabled:B,onClick:pe,onMouseEnter:()=>{B||ce(o)},onMouseLeave:()=>{ce(c=>c===o?null:c),D(c=>c===o?null:c)},onMouseDown:()=>{B||(k.current=!1,A(c=>c===o?null:c),D(o))},onMouseUp:()=>{D(c=>c===o?null:c)},onFocus:()=>{if(B){A(c=>c===o?null:c);return}A(c=>Vt(ie.current[o],k.current)?o:c===o?null:c)},onBlur:()=>{A(c=>c===o?null:c),D(c=>c===o?null:c)},onKeyDown:c=>{k.current=!0,$t(c.key)&&(Ft(c)||(c.preventDefault(),!c.repeat&&pe()))},style:{border:Et?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:me?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":ue?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:B?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:B?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ye?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:me?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:g==="asc"?"▲":g==="desc"?"▼":"↕"})]}):s.header},o)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:de,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Rt})})}):I.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:de,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Ht})})}):I.map((s,o)=>{const p=s.row,b=String(s.sourceIndex);return a.jsx("tr",{style:{background:o%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(l=>{const g=l.render?l.render(p,o,s.sourceIndex):String(p[String(l.key)]??""),f={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:l.align??"left"};return l.rowHeader?a.jsx("th",{scope:"row",style:{...f,fontWeight:"var(--aurora-font-weight-medium)"},children:g},String(l.key)):a.jsx("td",{style:f,children:g},String(l.key))})},r?r(p,s.sourceIndex):b)})})]})]})}function Lt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function qt({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function $t(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Ft(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Vt(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const y=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],x=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(Kt,{tone:e,children:t.status})}}],H={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55};function be(t,e){const r=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(r,"isComposing",{value:!0}),Object.defineProperty(r,"keyCode",{value:229}),t.dispatchEvent(r)}const Jt={title:"Data/Table",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},j={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(d,{caption:"Release readiness board",columns:x,data:y,rowKey:t=>t.id,defaultSortKey:"id"})})},K={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:a.jsx(d,{caption:"Release readiness board",columns:x,data:y,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),i=e.getAllByRole("rowheader")[0];await n(r).toHaveAttribute("aria-sort","descending"),await n(i).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},N={render:()=>{const t=[...x,{key:"action",header:"Action",width:160,render:e=>a.jsx(jt,{size:"sm",variant:"outline",onClick:r=>r.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:y,rowKey:e=>e.id})}},L={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts")}},q={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/});await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},$={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:y}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).toHaveAttribute("tabindex","0"),await w.tab(),await n(r).toHaveFocus(),await w.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},F={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("p",{style:H,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:x,data:y,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Before table"}),i=e.getByRole("button",{name:"Issue sort descending"});re.mouseDown(i),i.focus(),await w.click(r),await w.tab(),await n(i).toHaveFocus(),await n(i.style.boxShadow).toContain("0 0 0 3px")}},V={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:y,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("table",{name:"Data table"}),i=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByRole("columnheader",{name:/Issue/});await n(r).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(i).toBeDisabled(),await n(i).not.toHaveAttribute("aria-keyshortcuts"),await n(h).not.toHaveAttribute("aria-sort")}},G={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{ariaLabel:"Release checklist table",columns:x,data:y,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},z={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:y,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},M={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:x,data:y,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const r=m(t).getByRole("table",{name:"Release board metrics"});await n(r).toHaveAttribute("aria-labelledby","release-board-heading"),await n(r).not.toHaveAttribute("aria-label")}},O={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:y,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Gt(){const[t,e]=v.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsxs("p",{style:H,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(d,{columns:x,data:y,defaultSortKey:"id",onSortChange:(r,i)=>e(`${r} ${i}`)})]})}const P={render:()=>a.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=m(t),r=t.querySelector("[data-aurora-table-scroll-container]");await n(r).not.toBeNull(),await n(r).not.toHaveAttribute("tabindex");const i=e.getByRole("button",{name:"Issue sort descending"});await n(i).toHaveAttribute("aria-keyshortcuts","Enter Space"),i.focus(),await w.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const h=e.getByRole("button",{name:"Issue sort ascending"}),S=h.closest("th");await n(S).toHaveAttribute("aria-sort","descending"),re.keyDown(h,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),h.focus(),re.keyDown(h,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","descending"),await w.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(S).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}};function zt(){const[t,e]=v.useState("id asc");return a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:8},children:[a.jsx("p",{style:H,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:H,children:["Active sort: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),a.jsx(d,{columns:x,data:y,defaultSortKey:"id",onSortChange:(r,i)=>e(`${r} ${i}`)})]})}const W={render:()=>a.jsx(zt,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:/Issue/}),i=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),be(i,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),be(i,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","ascending"),i.focus(),await w.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(r).toHaveAttribute("aria-sort","descending")}},_={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:y,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await w.click(r),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},U={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(d,{columns:t,data:y,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("columnheader",{name:"Component"}),i=e.getByRole("columnheader",{name:"Status"});await n(r).not.toHaveAttribute("aria-sort"),await n(i).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Mt(){const[t,e]=v.useState(!1),r=v.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs("div",{style:{width:"min(100%, 700px)",display:"grid",gap:8},children:[a.jsx("p",{style:H,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:H,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:{color:"var(--aurora-text-primary)"},children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:r,data:y,rowKey:i=>i.id,defaultSortKey:"status"})]})}const Y={render:()=>a.jsx(Mt,{}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("button",{name:"Load status sortable schema"}),i=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(i).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await w.click(r),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(i).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Bt=y.map(t=>({...t,note:""})),Tt=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],J={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:Tt,data:Bt,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await w.type(r,"persist me"),await w.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Q={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:Tt,data:Bt,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),r=e.getByRole("textbox",{name:"BTN-102 note"});await w.type(r,"persist me"),await w.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ot=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],X={render:()=>a.jsxs("div",{style:{width:"min(100%, 720px)",display:"grid",gap:8},children:[a.jsx("p",{style:H,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,r)=>`${t.key} (visual:${e}, source:${r})`},{key:"score",header:"Score",sortable:!0}],data:Ot,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await w.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var we,ge,xe;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 780px)",
    display: "grid",
    gap: 10
  }}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </div>
}`,...(xe=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,fe,Se;K.parameters={...K.parameters,docs:{...(he=K.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Be,Te,Re;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Re=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var He,Ie,ke;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var De,Ae,Ce;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ce=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Ee,je,Ke;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ke=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Ke.source}}};var Ne,Le,qe;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(qe=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var $e,Fe,Ve;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Ge,ze,Me;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Me=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var Oe,Pe,We;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(We=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var _e,Ue,Ye;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ye=(Ue=M.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var Je,Qe,Xe;O.parameters={...O.parameters,docs:{...(Je=O.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=O.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;P.parameters={...P.parameters,docs:{...(Ze=P.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=P.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,rt;W.parameters={...W.parameters,docs:{...(at=W.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(nt=W.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var ot,st,it;_.parameters={..._.parameters,docs:{...(ot=_.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(st=_.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,lt,dt;U.parameters={...U.parameters,docs:{...(ct=U.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(lt=U.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,yt;Y.parameters={...Y.parameters,docs:{...(ut=Y.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(yt=(mt=Y.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var pt,vt,bt;J.parameters={...J.parameters,docs:{...(pt=J.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(bt=(vt=J.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var wt,gt,xt;Q.parameters={...Q.parameters,docs:{...(wt=Q.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(xt=(gt=Q.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var ht,ft,St;X.parameters={...X.parameters,docs:{...(ht=X.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(St=(ft=X.parameters)==null?void 0:ft.docs)==null?void 0:St.source}}};const Qt=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{z as AccessibleNameFallback,M as AccessibleNameLabelledByHeading,G as AccessibleNameWithoutCaption,Y as DeferredColumnsDefaultSortRecovery,K as DescendingDefaultSortDirection,L as EmptyState,J as FallbackRowKeyStability,W as ImeCompositionGuard,U as InvalidDefaultSortKeyFallback,F as KeyboardFocusRingAfterPointer,$ as KeyboardReachableScrollContainer,V as LoadingState,_ as LocalizedSortLabels,j as ReleaseChecklist,X as RenderIndexSemantics,O as RowHeaderSemantics,q as SingleRowSortDisabled,P as SortTelemetry,Q as SourceIndexRowKeyStability,N as WithRowAction,Qt as __namedExportsOrder,Jt as default};
