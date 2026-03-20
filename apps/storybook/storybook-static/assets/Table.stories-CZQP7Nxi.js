import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as na}from"./Button-DS9RTxKh.js";import{r as l}from"./index-BWu4c2F4.js";import{B as oa}from"./Badge-ZJmMstsz.js";import{within as y,expect as n,userEvent as w,fireEvent as k}from"./index-DgAF9SIF.js";import{S as d,s as D,a as be}from"./storyShowcase-Bw5VyCj0.js";const ra=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),ke=400;function De(t,e,o){if(!e)return null;const r=t.find(b=>String(b.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function Ie(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();if(typeof t.header=="string"||typeof t.header=="number"){const o=String(t.header).trim();if(o.length>0)return o}return e}function u({columns:t,data:e,rowKey:o,caption:r,ariaLabel:b,ariaLabelledBy:B,loading:R=!1,loadingContent:Ut="Loading data...",emptyContent:Yt="No data available.",defaultSortKey:le,defaultSortDirection:ue="asc",getSortAriaLabel:_t=sa,getSortStatusText:we=ia,onSortChange:de}){const ge=B?void 0:b??(r?void 0:"Data table"),ve=l.useRef({}),xe=l.useRef(null),me=l.useRef(null),W=l.useRef(0),C=l.useRef(null),j=l.useRef(!0);l.useRef(null),l.useRef(null);const[Jt,ye]=l.useState(null),[Qt,K]=l.useState(null),[Xt,F]=l.useState(null);l.useEffect(()=>{var h;const i=((h=xe.current)==null?void 0:h.ownerDocument)??document,s=m=>{m.metaKey||m.altKey||m.ctrlKey||(j.current=!0)},g=()=>{j.current=!1};return i.addEventListener("keydown",s,!0),i.addEventListener("pointerdown",g,!0),i.addEventListener("mousedown",g,!0),i.addEventListener("touchstart",g,!0),()=>{i.removeEventListener("keydown",s,!0),i.removeEventListener("pointerdown",g,!0),i.removeEventListener("mousedown",g,!0),i.removeEventListener("touchstart",g,!0)}},[]);const N=l.useCallback(()=>{me.current=null,W.current=0,C.current!==null&&(window.clearTimeout(C.current),C.current=null)},[]);l.useEffect(()=>()=>{N()},[N]);const[p,pe]=l.useState(()=>De(t,le,ue));l.useEffect(()=>{if(!p)return;const i=t.find(s=>String(s.key)===p.key);i!=null&&i.sortable||pe(null)},[t,p]),l.useEffect(()=>{if(p)return;const i=De(t,le,ue);i&&pe(i)},[t,ue,le,p]);const Zt=l.useMemo(()=>e.map((i,s)=>String(o?o(i,s):s)),[e,o]);l.useEffect(()=>{},[o,Zt]),l.useEffect(()=>{},[t]);const E=l.useMemo(()=>{const i=e.map((h,m)=>({row:h,sourceIndex:m}));if(!p)return i;const s=t.find(h=>String(h.key)===p.key);if(!(s!=null&&s.sortable))return i;const g=s.sortAccessor??(h=>{const m=h[String(s.key)];return m instanceof Date||typeof m=="number"||typeof m=="string"?m:String(m??"")});return i.sort((h,m)=>{const v=g(h.row),T=g(m.row);if(typeof v=="string"&&typeof T=="string"){const H=ra.compare(v,T);return H!==0?p.direction==="asc"?H:-H:h.sourceIndex-m.sourceIndex}const I=v instanceof Date?v.getTime():v,q=T instanceof Date?T.getTime():T;return I<q?p.direction==="asc"?-1:1:I>q?p.direction==="asc"?1:-1:h.sourceIndex-m.sourceIndex})},[t,e,p]),he=l.useMemo(()=>{if(R||E.length<=1||!p)return"";const i=t.find(g=>String(g.key)===p.key);if(!(i!=null&&i.sortable))return"";const s=Ie(i,String(i.key));return we({columnKey:p.key,columnHeader:s,direction:p.direction})},[t,we,R,p,E.length]),L=!R&&E.length>1&&t.some(i=>i.sortable),Se=Math.max(t.length,1);return l.useEffect(()=>{L||(ye(null),K(null),F(null))},[L]),a.jsxs("div",{ref:xe,"data-aurora-table-scroll-container":"",tabIndex:L?void 0:0,"aria-label":L||B?void 0:ge??"Data table scroll container","aria-labelledby":L?void 0:B,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[he?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:he}):null,a.jsxs("table",{"aria-label":ge,"aria-labelledby":B,"aria-busy":R||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(i=>{const s=String(i.key),g=!!i.sortable,h=E.length>1,m=g&&(p==null?void 0:p.key)===s?p.direction:void 0,v=!R&&h?m:void 0,T=v?v==="asc"?"ascending":"descending":void 0,I=i.align??"left",q=Ie(i,s),H=m==="asc"?"desc":"asc",ea=_t({columnKey:s,columnHeader:q,nextDirection:H}),f=R||!h,fe=!f&&Jt===s,Be=!f&&Qt===s,Re=!f&&Xt===s,ta=fe||Re,Te=()=>{f||(pe({key:s,direction:H}),de==null||de(s,H))};return a.jsx("th",{scope:"col","aria-sort":T,style:{textAlign:I,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:g?a.jsxs("button",{type:"button",ref:c=>{ve.current[s]=c},"aria-label":ea,"aria-keyshortcuts":f?void 0:"Enter Space",disabled:f,onClick:c=>{const A=Date.now()-W.current,aa=c.detail===0&&me.current===s&&W.current>0&&A<=ke;N(),!aa&&Te()},onMouseEnter:()=>{f||ye(s)},onMouseLeave:()=>{ye(c=>c===s?null:c),K(c=>c===s?null:c)},onMouseDown:c=>{f||c.button===0&&(j.current=!1,F(A=>A===s?null:A),K(s))},onMouseUp:c=>{c.button===0&&K(A=>A===s?null:A)},onFocus:()=>{if(f){F(c=>c===s?null:c);return}F(c=>ua(ve.current[s],j.current)?s:c===s?null:c)},onBlur:()=>{F(c=>c===s?null:c),K(c=>c===s?null:c)},onKeyDown:c=>{j.current=!0,!(c.altKey||c.ctrlKey||c.metaKey)&&ca(c.key)&&(la(c)||(c.preventDefault(),!c.repeat&&(me.current=s,W.current=Date.now(),C.current!==null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{N()},ke),Te())))},style:{border:ta?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Be?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":fe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:f?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Re?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Be?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:v==="asc"?"▲":v==="desc"?"▼":"↕"})]}):i.header},s)})})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:Se,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Ut})})}):E.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Se,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Yt})})}):E.map((i,s)=>{const g=i.row,h=String(i.sourceIndex),m=o?o(g,i.sourceIndex):h;return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(v=>{const T=v.render?v.render(g,s,i.sourceIndex):String(g[String(v.key)]??""),I={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:v.align??"left"};return v.rowHeader?a.jsx("th",{scope:"row",style:{...I,fontWeight:"var(--aurora-font-weight-medium)"},children:T},String(v.key)):a.jsx("td",{style:I,children:T},String(v.key))})},m)})})]})]})}function sa({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function ia({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function ca(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function la(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ua(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const x=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(oa,{tone:e,children:t.status})}}];function He(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function da(){const[t,e]=l.useState(!1);return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(u,{columns:S,data:x,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const fa={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},$={render:()=>a.jsx(d,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(u,{caption:"Release readiness board",columns:S,data:x,rowKey:t=>t.id,defaultSortKey:"id"})})},P={render:()=>a.jsx(d,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(u,{caption:"Release readiness board",columns:S,data:x,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},V={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>a.jsx(na,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:t,data:x,rowKey:e=>e.id})}},M={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},O={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},G={render:()=>a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(u,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:x}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await w.tab(),await n(o).toHaveFocus(),await w.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},z={render:()=>a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:D,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});k.mouseDown(r),r.focus(),await w.click(o),await w.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},U={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:x,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),b=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(b).not.toHaveAttribute("aria-sort")}},Y={render:()=>a.jsx(da,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});k.mouseDown(r),await w.click(o);const b=e.getByRole("button",{name:"Issue sort descending"});await n(b).toBeDisabled(),await n(b.style.transform).toContain("translateY(0"),await n(b.style.boxShadow).toBe("none")}},_={render:function(){const[e,o]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:D,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id",onSortChange:(r,b)=>o(`${r} ${b}`)})]})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),b=e.getByTestId("primary-pointer-sort-state");await w.click(o),await w.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),k.mouseDown(r,{button:2}),k.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(b).toHaveTextContent("id asc"),await w.click(r),await n(b).toHaveTextContent("id desc")}},J={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{ariaLabel:"Release checklist table",columns:S,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Q={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},X={render:()=>a.jsxs(d,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:x,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=y(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},Z={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:x,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function ma(){const[t,e]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:D,children:["Active sort: ",a.jsx("strong",{style:be,children:t})]}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ee={render:()=>a.jsx(ma,{}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),await w.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const b=e.getByRole("button",{name:"Issue sort ascending"}),B=b.closest("th");await n(B).toHaveAttribute("aria-sort","descending"),k.keyDown(b,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","descending"),b.focus(),k.keyDown(b,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","descending"),await w.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});k.keyDown(R,{key:"Enter",ctrlKey:!0}),k.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","ascending")}};function ya(){const[t,e]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:D,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:D,children:["Active sort: ",a.jsx("strong",{style:be,children:t})]}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const te={render:()=>a.jsx(ya,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),He(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),He(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await w.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},ae={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:x,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await w.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ne={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await w.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},oe={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(d,{maxWidth:"min(100%, 620px)",children:a.jsx(u,{columns:t,data:x,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function pa(){const[t,e]=l.useState(!1),o=l.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(d,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:D,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:D,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:be,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(u,{columns:o,data:x,rowKey:r=>r.id,defaultSortKey:"status"})]})}const re={render:()=>a.jsx(pa,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await w.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Gt=x.map(t=>({...t,note:""})),zt=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],se={render:()=>a.jsx(d,{maxWidth:"min(100%, 720px)",children:a.jsx(u,{columns:zt,data:Gt,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await w.type(o,"persist me"),await w.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},ie={render:()=>a.jsx(d,{maxWidth:"min(100%, 720px)",children:a.jsx(u,{columns:zt,data:Gt,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await w.type(o,"persist me"),await w.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},ba=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],ce={render:()=>a.jsxs(d,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:D,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:ba,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=y(t);await w.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Ae,Ce,Ee;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Ee=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var je,Ke,Fe;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Fe=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:Fe.source}}};var Le,We,Ne;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ne=(We=V.parameters)==null?void 0:We.docs)==null?void 0:Ne.source}}};var qe,$e,Pe;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Pe=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:Pe.source}}};var Ve,Me,Oe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ge,ze,Ue;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Ue.source}}};var Ye,_e,Je;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;Y.parameters={...Y.parameters,docs:{...(et=Y.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=Y.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,ot,rt;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(rt=(ot=_.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var st,it,ct;J.parameters={...J.parameters,docs:{...(st=J.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(it=J.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,ut,dt;Q.parameters={...Q.parameters,docs:{...(lt=Q.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(dt=(ut=Q.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var mt,yt,pt;X.parameters={...X.parameters,docs:{...(mt=X.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(pt=(yt=X.parameters)==null?void 0:yt.docs)==null?void 0:pt.source}}};var bt,wt,gt;Z.parameters={...Z.parameters,docs:{...(bt=Z.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=Z.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var vt,xt,ht;ee.parameters={...ee.parameters,docs:{...(vt=ee.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
    const issueSortDesc = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
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
  }
}`,...(ht=(xt=ee.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var St,ft,Bt;te.parameters={...te.parameters,docs:{...(St=te.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Bt=(ft=te.parameters)==null?void 0:ft.docs)==null?void 0:Bt.source}}};var Rt,Tt,kt;ae.parameters={...ae.parameters,docs:{...(Rt=ae.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(kt=(Tt=ae.parameters)==null?void 0:Tt.docs)==null?void 0:kt.source}}};var Dt,It,Ht;ne.parameters={...ne.parameters,docs:{...(Dt=ne.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Ht=(It=ne.parameters)==null?void 0:It.docs)==null?void 0:Ht.source}}};var At,Ct,Et;oe.parameters={...oe.parameters,docs:{...(At=oe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Et=(Ct=oe.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var jt,Kt,Ft;re.parameters={...re.parameters,docs:{...(jt=re.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ft=(Kt=re.parameters)==null?void 0:Kt.docs)==null?void 0:Ft.source}}};var Lt,Wt,Nt;se.parameters={...se.parameters,docs:{...(Lt=se.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Nt=(Wt=se.parameters)==null?void 0:Wt.docs)==null?void 0:Nt.source}}};var qt,$t,Pt;ie.parameters={...ie.parameters,docs:{...(qt=ie.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Pt=($t=ie.parameters)==null?void 0:$t.docs)==null?void 0:Pt.source}}};var Vt,Mt,Ot;ce.parameters={...ce.parameters,docs:{...(Vt=ce.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ot=(Mt=ce.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};const Ba=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{Q as AccessibleNameFallback,X as AccessibleNameLabelledByHeading,J as AccessibleNameWithoutCaption,re as DeferredColumnsDefaultSortRecovery,P as DescendingDefaultSortDirection,M as EmptyState,se as FallbackRowKeyStability,te as ImeCompositionGuard,oe as InvalidDefaultSortKeyFallback,z as KeyboardFocusRingAfterPointer,G as KeyboardReachableScrollContainer,Y as LoadingDisablesResetsSortVisualState,U as LoadingState,ae as LocalizedSortLabels,_ as PrimaryPointerOnlySortPress,$ as ReleaseChecklist,ce as RenderIndexSemantics,Z as RowHeaderSemantics,O as SingleRowSortDisabled,ne as SortLabelForCustomHeader,ee as SortTelemetry,ie as SourceIndexRowKeyStability,V as WithRowAction,Ba as __namedExportsOrder,fa as default};
