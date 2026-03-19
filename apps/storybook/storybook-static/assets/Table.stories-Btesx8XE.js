import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Ot}from"./Button-CnyYpMYZ.js";import{r as y}from"./index-BWu4c2F4.js";import{B as Gt}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as v,fireEvent as D}from"./index-DgAF9SIF.js";import{S as B,s as R,a as de}from"./storyShowcase-r-xztSD8.js";const zt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function he(t,e,o){if(!e)return null;const r=t.find(b=>String(b.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function d({columns:t,data:e,rowKey:o,caption:r,ariaLabel:b,ariaLabelledBy:T,loading:I=!1,loadingContent:Nt="Loading data...",emptyContent:qt="No data available.",defaultSortKey:re,defaultSortDirection:se="asc",getSortAriaLabel:$t=Ut,getSortStatusText:ue=Yt,onSortChange:ie}){const me=T?void 0:b??(r?void 0:"Data table"),ye=y.useRef({}),A=y.useRef(!0),[Ft,ce]=y.useState(null),[Pt,E]=y.useState(null),[Wt,C]=y.useState(null);y.useEffect(()=>{const i=w=>{w.metaKey||w.altKey||w.ctrlKey||(A.current=!0)},s=()=>{A.current=!1};return document.addEventListener("keydown",i,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("mousedown",s,!0),document.addEventListener("touchstart",s,!0),()=>{document.removeEventListener("keydown",i,!0),document.removeEventListener("pointerdown",s,!0),document.removeEventListener("mousedown",s,!0),document.removeEventListener("touchstart",s,!0)}},[]);const[u,le]=y.useState(()=>he(t,re,se));y.useEffect(()=>{if(!u)return;const i=t.find(s=>String(s.key)===u.key);i!=null&&i.sortable||le(null)},[t,u]),y.useEffect(()=>{if(u)return;const i=he(t,re,se);i&&le(i)},[t,se,re,u]);const H=y.useMemo(()=>{const i=e.map((x,l)=>({row:x,sourceIndex:l}));if(!u)return i;const s=t.find(x=>String(x.key)===u.key);if(!(s!=null&&s.sortable))return i;const w=s.sortAccessor??(x=>{const l=x[String(s.key)];return l instanceof Date||typeof l=="number"||typeof l=="string"?l:String(l??"")});return i.sort((x,l)=>{const h=w(x.row),f=w(l.row);if(typeof h=="string"&&typeof f=="string"){const k=zt.compare(h,f);return k!==0?u.direction==="asc"?k:-k:x.sourceIndex-l.sourceIndex}const L=h instanceof Date?h.getTime():h,N=f instanceof Date?f.getTime():f;return L<N?u.direction==="asc"?-1:1:L>N?u.direction==="asc"?1:-1:x.sourceIndex-l.sourceIndex})},[t,e,u]),pe=y.useMemo(()=>{if(I||H.length<=1||!u)return"";const i=t.find(w=>String(w.key)===u.key);if(!(i!=null&&i.sortable))return"";const s=typeof i.header=="string"?i.header:String(i.key);return ue({columnKey:u.key,columnHeader:s,direction:u.direction})},[t,ue,I,u,H.length]),j=!I&&H.length>1&&t.some(i=>i.sortable),be=Math.max(t.length,1);return y.useEffect(()=>{j||(ce(null),E(null),C(null))},[j]),a.jsxs("div",{"data-aurora-table-scroll-container":"",tabIndex:j?void 0:0,"aria-label":j||T?void 0:me??"Data table scroll container","aria-labelledby":j?void 0:T,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[pe?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:pe}):null,a.jsxs("table",{"aria-label":me,"aria-labelledby":T,"aria-busy":I||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(i=>{const s=String(i.key),w=!!i.sortable,x=H.length>1,l=w&&(u==null?void 0:u.key)===s?u.direction:void 0,h=!I&&x?l:void 0,f=h?h==="asc"?"ascending":"descending":void 0,L=i.align??"left",N=typeof i.header=="string"?i.header:s,k=l==="asc"?"desc":"asc",Vt=$t({columnKey:s,columnHeader:N,nextDirection:k}),S=I||!x,ve=!S&&Ft===s,we=!S&&Pt===s,ge=!S&&Wt===s,Mt=ve||ge,xe=()=>{S||(le({key:s,direction:k}),ie==null||ie(s,k))};return a.jsx("th",{scope:"col","aria-sort":f,style:{textAlign:L,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:w?a.jsxs("button",{type:"button",ref:c=>{ye.current[s]=c},"aria-label":Vt,"aria-keyshortcuts":S?void 0:"Enter Space",disabled:S,onClick:xe,onMouseEnter:()=>{S||ce(s)},onMouseLeave:()=>{ce(c=>c===s?null:c),E(c=>c===s?null:c)},onMouseDown:c=>{S||(A.current=!1,C(K=>K===s?null:K),c.button===0&&E(s))},onMouseUp:c=>{c.button===0&&E(K=>K===s?null:K)},onFocus:()=>{if(S){C(c=>c===s?null:c);return}C(c=>Qt(ye.current[s],A.current)?s:c===s?null:c)},onBlur:()=>{C(c=>c===s?null:c),E(c=>c===s?null:c)},onKeyDown:c=>{A.current=!0,_t(c.key)&&(Jt(c)||(c.preventDefault(),!c.repeat&&xe()))},style:{border:Mt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:we?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":ve?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:S?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:S?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ge?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:we?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:h==="asc"?"▲":h==="desc"?"▼":"↕"})]}):i.header},s)})})}),a.jsx("tbody",{children:I?a.jsx("tr",{children:a.jsx("td",{colSpan:be,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Nt})})}):H.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:be,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:qt})})}):H.map((i,s)=>{const w=i.row,x=String(i.sourceIndex);return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(l=>{const h=l.render?l.render(w,s,i.sourceIndex):String(w[String(l.key)]??""),f={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:l.align??"left"};return l.rowHeader?a.jsx("th",{scope:"row",style:{...f,fontWeight:"var(--aurora-font-weight-medium)"},children:h},String(l.key)):a.jsx("td",{style:f,children:h},String(l.key))})},o?o(w,i.sourceIndex):x)})})]})]})}function Ut({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Yt({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function _t(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Jt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Qt(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const p=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],g=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(Gt,{tone:e,children:t.status})}}];function Se(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function Xt(){const[t,e]=y.useState(!1);return a.jsxs(B,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(d,{columns:g,data:p,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const la={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},q={render:()=>a.jsx(B,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:g,data:p,rowKey:t=>t.id,defaultSortKey:"id"})})},$={render:()=>a.jsx(B,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:g,data:p,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},F={render:()=>{const t=[...g,{key:"action",header:"Action",width:160,render:e=>a.jsx(Ot,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:p,rowKey:e=>e.id})}},P={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:g,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},W={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:g,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},V={render:()=>a.jsxs(B,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:p}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await v.tab(),await n(o).toHaveFocus(),await v.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},M={render:()=>a.jsxs(B,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:R,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:g,data:p,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});D.mouseDown(r),r.focus(),await v.click(o),await v.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},O={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:g,data:p,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),b=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(b).not.toHaveAttribute("aria-sort")}},G={render:()=>a.jsx(Xt,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});D.mouseDown(r),await v.click(o);const b=e.getByRole("button",{name:"Issue sort descending"});await n(b).toBeDisabled(),await n(b.style.transform).toContain("translateY(0"),await n(b.style.boxShadow).toBe("none")}},z={render:function(){const[e,o]=y.useState("id asc");return a.jsxs(B,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:R,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx(d,{columns:g,data:p,defaultSortKey:"id",onSortChange:(r,b)=>o(`${r} ${b}`)})]})},play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByTestId("primary-pointer-sort-state");D.mouseDown(o,{button:2}),D.mouseUp(o,{button:2}),await n(r).toHaveTextContent("id asc"),await v.click(o),await n(r).toHaveTextContent("id desc")}},U={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{ariaLabel:"Release checklist table",columns:g,data:p,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Y={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:g,data:p,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},_={render:()=>a.jsxs("div",{style:{width:"min(100%, 780px)",display:"grid",gap:10},children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:g,data:p,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=m(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},J={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:p,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Zt(){const[t,e]=y.useState("id asc");return a.jsxs(B,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:R,children:["Active sort: ",a.jsx("strong",{style:de,children:t})]}),a.jsx(d,{columns:g,data:p,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const Q={render:()=>a.jsx(Zt,{}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),await v.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const b=e.getByRole("button",{name:"Issue sort ascending"}),T=b.closest("th");await n(T).toHaveAttribute("aria-sort","descending"),D.keyDown(b,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(T).toHaveAttribute("aria-sort","descending"),b.focus(),D.keyDown(b,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(T).toHaveAttribute("aria-sort","descending"),await v.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(T).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}};function ea(){const[t,e]=y.useState("id asc");return a.jsxs(B,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:R,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:R,children:["Active sort: ",a.jsx("strong",{style:de,children:t})]}),a.jsx(d,{columns:g,data:p,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const X={render:()=>a.jsx(ea,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Se(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Se(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await v.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},Z={render:()=>a.jsx("div",{style:{width:"min(100%, 780px)"},children:a.jsx(d,{columns:g,data:p,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await v.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ee={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx("div",{style:{width:"min(100%, 620px)"},children:a.jsx(d,{columns:t,data:p,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function ta(){const[t,e]=y.useState(!1),o=y.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(B,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:R,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:R,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:de,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:o,data:p,rowKey:r=>r.id,defaultSortKey:"status"})]})}const te={render:()=>a.jsx(ta,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await v.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Kt=p.map(t=>({...t,note:""})),Lt=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],ae={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:Lt,data:Kt,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await v.type(o,"persist me"),await v.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},ne={render:()=>a.jsx("div",{style:{width:"min(100%, 720px)"},children:a.jsx(d,{columns:Lt,data:Kt,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await v.type(o,"persist me"),await v.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},aa=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],oe={render:()=>a.jsxs(B,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:R,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:aa,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await v.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var fe,Be,Te;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Te=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Re,Ie,ke;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=$.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var He,De,Ae;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var Ee,Ce,je;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(je=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Ke,Le,Ne;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ne=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var qe,$e,Fe;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Fe=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source}}};var Pe,We,Ve;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ve=(We=M.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var Me,Oe,Ge;O.parameters={...O.parameters,docs:{...(Me=O.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ge=(Oe=O.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var ze,Ue,Ye;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ye=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var _e,Je,Qe;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: function RenderPrimaryPointerOnlySortPress() {
    const [sortState, setSortState] = React.useState("id asc");
    return <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
        <p style={storyMutedTextStyle}>
          Active sort: <strong data-testid="primary-pointer-sort-state">{sortState}</strong>
        </p>
        <Table columns={columns} data={rows} defaultSortKey="id" onSortChange={(key, direction) => setSortState(\`\${key} \${direction}\`)} />
      </StoryShowcaseFrame>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    const sortState = canvas.getByTestId("primary-pointer-sort-state");
    fireEvent.mouseDown(sortButton, {
      button: 2
    });
    fireEvent.mouseUp(sortButton, {
      button: 2
    });
    await expect(sortState).toHaveTextContent("id asc");
    await userEvent.click(sortButton);
    await expect(sortState).toHaveTextContent("id desc");
  }
}`,...(Qe=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;U.parameters={...U.parameters,docs:{...(Xe=U.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=U.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;Y.parameters={...Y.parameters,docs:{...(tt=Y.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=Y.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,rt,st;_.parameters={..._.parameters,docs:{...(ot=_.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(rt=_.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,lt;J.parameters={...J.parameters,docs:{...(it=J.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ct=J.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,ut,mt;Q.parameters={...Q.parameters,docs:{...(dt=Q.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=Q.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var yt,pt,bt;X.parameters={...X.parameters,docs:{...(yt=X.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(bt=(pt=X.parameters)==null?void 0:pt.docs)==null?void 0:bt.source}}};var vt,wt,gt;Z.parameters={...Z.parameters,docs:{...(vt=Z.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=Z.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var xt,ht,St;ee.parameters={...ee.parameters,docs:{...(xt=ee.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(St=(ht=ee.parameters)==null?void 0:ht.docs)==null?void 0:St.source}}};var ft,Bt,Tt;te.parameters={...te.parameters,docs:{...(ft=te.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Tt=(Bt=te.parameters)==null?void 0:Bt.docs)==null?void 0:Tt.source}}};var Rt,It,kt;ae.parameters={...ae.parameters,docs:{...(Rt=ae.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(kt=(It=ae.parameters)==null?void 0:It.docs)==null?void 0:kt.source}}};var Ht,Dt,At;ne.parameters={...ne.parameters,docs:{...(Ht=ne.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(At=(Dt=ne.parameters)==null?void 0:Dt.docs)==null?void 0:At.source}}};var Et,Ct,jt;oe.parameters={...oe.parameters,docs:{...(Et=oe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(jt=(Ct=oe.parameters)==null?void 0:Ct.docs)==null?void 0:jt.source}}};const da=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{Y as AccessibleNameFallback,_ as AccessibleNameLabelledByHeading,U as AccessibleNameWithoutCaption,te as DeferredColumnsDefaultSortRecovery,$ as DescendingDefaultSortDirection,P as EmptyState,ae as FallbackRowKeyStability,X as ImeCompositionGuard,ee as InvalidDefaultSortKeyFallback,M as KeyboardFocusRingAfterPointer,V as KeyboardReachableScrollContainer,G as LoadingDisablesResetsSortVisualState,O as LoadingState,Z as LocalizedSortLabels,z as PrimaryPointerOnlySortPress,q as ReleaseChecklist,oe as RenderIndexSemantics,J as RowHeaderSemantics,W as SingleRowSortDisabled,Q as SortTelemetry,ne as SourceIndexRowKeyStability,F as WithRowAction,da as __namedExportsOrder,la as default};
