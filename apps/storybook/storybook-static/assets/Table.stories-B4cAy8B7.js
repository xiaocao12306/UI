import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Ft}from"./Button-CnyYpMYZ.js";import{r as y}from"./index-BWu4c2F4.js";import{B as Vt}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as w,fireEvent as ae}from"./index-DgAF9SIF.js";import{S as R,s as k,a as ce}from"./storyShowcase-r-xztSD8.js";const Wt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function ve(t,e,o){if(!e)return null;const s=t.find(g=>String(g.key)===e);return s!=null&&s.sortable?{key:e,direction:o}:null}function d({columns:t,data:e,rowKey:o,caption:s,ariaLabel:g,ariaLabelledBy:B,loading:T=!1,loadingContent:Et="Loading data...",emptyContent:Ct="No data available.",defaultSortKey:ne,defaultSortDirection:oe="asc",getSortAriaLabel:jt=Mt,getSortStatusText:le=Gt,onSortChange:re}){const de=B?void 0:g??(s?void 0:"Data table"),ue=y.useRef({}),D=y.useRef(!0),[Kt,se]=y.useState(null),[Lt,A]=y.useState(null),[Nt,E]=y.useState(null);y.useEffect(()=>{const i=b=>{b.metaKey||b.altKey||b.ctrlKey||(D.current=!0)},r=()=>{D.current=!1};return document.addEventListener("keydown",i,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("mousedown",r,!0),document.addEventListener("touchstart",r,!0),()=>{document.removeEventListener("keydown",i,!0),document.removeEventListener("pointerdown",r,!0),document.removeEventListener("mousedown",r,!0),document.removeEventListener("touchstart",r,!0)}},[]);const[u,ie]=y.useState(()=>ve(t,ne,oe));y.useEffect(()=>{if(!u)return;const i=t.find(r=>String(r.key)===u.key);i!=null&&i.sortable||ie(null)},[t,u]),y.useEffect(()=>{if(u)return;const i=ve(t,ne,oe);i&&ie(i)},[t,oe,ne,u]);const H=y.useMemo(()=>{const i=e.map((v,l)=>({row:v,sourceIndex:l}));if(!u)return i;const r=t.find(v=>String(v.key)===u.key);if(!(r!=null&&r.sortable))return i;const b=r.sortAccessor??(v=>{const l=v[String(r.key)];return l instanceof Date||typeof l=="number"||typeof l=="string"?l:String(l??"")});return i.sort((v,l)=>{const h=b(v.row),f=b(l.row);if(typeof h=="string"&&typeof f=="string"){const I=Wt.compare(h,f);return I!==0?u.direction==="asc"?I:-I:v.sourceIndex-l.sourceIndex}const j=h instanceof Date?h.getTime():h,K=f instanceof Date?f.getTime():f;return j<K?u.direction==="asc"?-1:1:j>K?u.direction==="asc"?1:-1:v.sourceIndex-l.sourceIndex})},[t,e,u]),me=y.useMemo(()=>{if(T||H.length<=1||!u)return"";const i=t.find(b=>String(b.key)===u.key);if(!(i!=null&&i.sortable))return"";const r=typeof i.header=="string"?i.header:String(i.key);return le({columnKey:u.key,columnHeader:r,direction:u.direction})},[t,le,T,u,H.length]),C=!T&&H.length>1&&t.some(i=>i.sortable),ye=Math.max(t.length,1);return y.useEffect(()=>{C||(se(null),A(null),E(null))},[C]),a.jsxs("div",{"data-aurora-table-scroll-container":"",tabIndex:C?void 0:0,"aria-label":C||B?void 0:de??"Data table scroll container","aria-labelledby":C?void 0:B,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[me?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:me}):null,a.jsxs("table",{"aria-label":de,"aria-labelledby":B,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[s?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:s}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(i=>{const r=String(i.key),b=!!i.sortable,v=H.length>1,l=b&&(u==null?void 0:u.key)===r?u.direction:void 0,h=!T&&v?l:void 0,f=h?h==="asc"?"ascending":"descending":void 0,j=i.align??"left",K=typeof i.header=="string"?i.header:r,I=l==="asc"?"desc":"asc",qt=jt({columnKey:r,columnHeader:K,nextDirection:I}),S=T||!v,pe=!S&&Kt===r,be=!S&&Lt===r,we=!S&&Nt===r,$t=pe||we,ge=()=>{S||(ie({key:r,direction:I}),re==null||re(r,I))};return a.jsx("th",{scope:"col","aria-sort":f,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:b?a.jsxs("button",{type:"button",ref:c=>{ue.current[r]=c},"aria-label":qt,"aria-keyshortcuts":S?void 0:"Enter Space",disabled:S,onClick:ge,onMouseEnter:()=>{S||se(r)},onMouseLeave:()=>{se(c=>c===r?null:c),A(c=>c===r?null:c)},onMouseDown:()=>{S||(D.current=!1,E(c=>c===r?null:c),A(r))},onMouseUp:()=>{A(c=>c===r?null:c)},onFocus:()=>{if(S){E(c=>c===r?null:c);return}E(c=>Pt(ue.current[r],D.current)?r:c===r?null:c)},onBlur:()=>{E(c=>c===r?null:c),A(c=>c===r?null:c)},onKeyDown:c=>{D.current=!0,zt(c.key)&&(Ot(c)||(c.preventDefault(),!c.repeat&&ge()))},style:{border:$t?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:be?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":pe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:S?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:S?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:we?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:be?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:h==="asc"?"▲":h==="desc"?"▼":"↕"})]}):i.header},r)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:ye,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Et})})}):H.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:ye,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Ct})})}):H.map((i,r)=>{const b=i.row,v=String(i.sourceIndex);return a.jsx("tr",{style:{background:r%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(l=>{const h=l.render?l.render(b,r,i.sourceIndex):String(b[String(l.key)]??""),f={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:l.align??"left"};return l.rowHeader?a.jsx("th",{scope:"row",style:{...f,fontWeight:"var(--aurora-font-weight-medium)"},children:h},String(l.key)):a.jsx("td",{style:f,children:h},String(l.key))})},o?o(b,i.sourceIndex):v)})})]})]})}function Mt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Gt({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function zt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Ot(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Pt(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],x=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(Vt,{tone:e,children:t.status})}}];function xe(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function Yt(){const[t,e]=y.useState(!1);return a.jsxs(R,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(d,{columns:x,data:p,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const oa={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},L={render:()=>a.jsx(R,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:x,data:p,rowKey:t=>t.id,defaultSortKey:"id"})})},N={render:()=>a.jsx(R,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:x,data:p,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),s=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(s).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},q={render:()=>{const t=[...x,{key:"action",header:"Action",width:160,render:e=>a.jsx(Ft,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:p,rowKey:e=>e.id})}},$={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},F={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},V={render:()=>a.jsxs(R,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:p}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await w.tab(),await n(o).toHaveFocus(),await w.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},W={render:()=>a.jsxs(R,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:k,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:x,data:p,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Before table"}),s=e.getByRole("button",{name:"Issue sort descending"});ae.mouseDown(s),s.focus(),await w.click(o),await w.tab(),await n(s).toHaveFocus(),await n(s.style.boxShadow).toContain("0 0 0 3px")}},M={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("table",{name:"Data table"}),s=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(s).toBeDisabled(),await n(s).not.toHaveAttribute("aria-keyshortcuts"),await n(g).not.toHaveAttribute("aria-sort")}},G={render:()=>a.jsx(Yt,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Toggle loading"}),s=e.getByRole("button",{name:"Issue sort descending"});ae.mouseDown(s),await w.click(o);const g=e.getByRole("button",{name:"Issue sort descending"});await n(g).toBeDisabled(),await n(g.style.transform).toContain("translateY(0"),await n(g.style.boxShadow).toBe("none")}},z={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{ariaLabel:"Release checklist table",columns:x,data:p,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},O={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:p,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},P={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:x,data:p,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=m(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},Y={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:p,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function _t(){const[t,e]=y.useState("id asc");return a.jsxs(R,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:k,children:["Active sort: ",a.jsx("strong",{style:ce,children:t})]}),a.jsx(d,{columns:x,data:p,defaultSortKey:"id",onSortChange:(o,s)=>e(`${o} ${s}`)})]})}const _={render:()=>a.jsx(_t,{}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const s=e.getByRole("button",{name:"Issue sort descending"});await n(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),s.focus(),await w.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const g=e.getByRole("button",{name:"Issue sort ascending"}),B=g.closest("th");await n(B).toHaveAttribute("aria-sort","descending"),ae.keyDown(g,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","descending"),g.focus(),ae.keyDown(g,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","descending"),await w.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}};function Ut(){const[t,e]=y.useState("id asc");return a.jsxs(R,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:k,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:k,children:["Active sort: ",a.jsx("strong",{style:ce,children:t})]}),a.jsx(d,{columns:x,data:p,defaultSortKey:"id",onSortChange:(o,s)=>e(`${o} ${s}`)})]})}const U={render:()=>a.jsx(Ut,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),s=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),xe(s,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),xe(s,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),s.focus(),await w.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},J={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:x,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await w.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},Q={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(d,{columns:t,data:p,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:"Component"}),s=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(s).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Jt(){const[t,e]=y.useState(!1),o=y.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(R,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:k,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:k,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:ce,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:o,data:p,rowKey:s=>s.id,defaultSortKey:"status"})]})}const X={render:()=>a.jsx(Jt,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Load status sortable schema"}),s=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(s).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await w.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(s).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Dt=p.map(t=>({...t,note:""})),At=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Z={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:At,data:Dt,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await w.type(o,"persist me"),await w.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},ee={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:At,data:Dt,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await w.type(o,"persist me"),await w.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Qt=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],te={render:()=>a.jsxs(R,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:k,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Qt,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await w.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var he,Se,fe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(fe=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var Be,Re,Te;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Te=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Ie,ke,He;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(He=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:He.source}}};var De,Ae,Ee;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ee=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var Ce,je,Ke;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ke=(je=F.parameters)==null?void 0:je.docs)==null?void 0:Ke.source}}};var Le,Ne,qe;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var $e,Fe,Ve;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var We,Me,Ge;M.parameters={...M.parameters,docs:{...(We=M.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ge=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var ze,Oe,Pe;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Ye,_e,Ue;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ue=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var Je,Qe,Xe;O.parameters={...O.parameters,docs:{...(Je=O.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=O.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;P.parameters={...P.parameters,docs:{...(Ze=P.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=P.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;Y.parameters={...Y.parameters,docs:{...(at=Y.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Y.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,st,it;_.parameters={..._.parameters,docs:{...(rt=_.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=_.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,lt,dt;U.parameters={...U.parameters,docs:{...(ct=U.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(lt=U.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,yt;J.parameters={...J.parameters,docs:{...(ut=J.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(yt=(mt=J.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var pt,bt,wt;Q.parameters={...Q.parameters,docs:{...(pt=Q.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(wt=(bt=Q.parameters)==null?void 0:bt.docs)==null?void 0:wt.source}}};var gt,vt,xt;X.parameters={...X.parameters,docs:{...(gt=X.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(vt=X.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var ht,St,ft;Z.parameters={...Z.parameters,docs:{...(ht=Z.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(ft=(St=Z.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};var Bt,Rt,Tt;ee.parameters={...ee.parameters,docs:{...(Bt=ee.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Tt=(Rt=ee.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};var It,kt,Ht;te.parameters={...te.parameters,docs:{...(It=te.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ht=(kt=te.parameters)==null?void 0:kt.docs)==null?void 0:Ht.source}}};const ra=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{O as AccessibleNameFallback,P as AccessibleNameLabelledByHeading,z as AccessibleNameWithoutCaption,X as DeferredColumnsDefaultSortRecovery,N as DescendingDefaultSortDirection,$ as EmptyState,Z as FallbackRowKeyStability,U as ImeCompositionGuard,Q as InvalidDefaultSortKeyFallback,W as KeyboardFocusRingAfterPointer,V as KeyboardReachableScrollContainer,G as LoadingDisablesResetsSortVisualState,M as LoadingState,J as LocalizedSortLabels,L as ReleaseChecklist,te as RenderIndexSemantics,Y as RowHeaderSemantics,F as SingleRowSortDisabled,_ as SortTelemetry,ee as SourceIndexRowKeyStability,q as WithRowAction,ra as __namedExportsOrder,oa as default};
