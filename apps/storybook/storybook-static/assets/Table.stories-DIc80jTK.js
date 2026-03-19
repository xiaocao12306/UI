import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Yt}from"./Button-DS9RTxKh.js";import{r as l}from"./index-BWu4c2F4.js";import{B as _t}from"./Badge-ZJmMstsz.js";import{within as p,expect as n,userEvent as g,fireEvent as k}from"./index-DgAF9SIF.js";import{S as m,s as I,a as ye}from"./storyShowcase-r-xztSD8.js";const Jt=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function Re(t,e,o){if(!e)return null;const r=t.find(b=>String(b.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function d({columns:t,data:e,rowKey:o,caption:r,ariaLabel:b,ariaLabelledBy:B,loading:R=!1,loadingContent:$t="Loading data...",emptyContent:Pt="No data available.",defaultSortKey:ie,defaultSortDirection:ce="asc",getSortAriaLabel:Vt=Qt,getSortStatusText:pe=Xt,onSortChange:ue}){const be=B?void 0:b??(r?void 0:"Data table"),we=l.useRef({}),ge=l.useRef(null),L=l.useRef(null),D=l.useRef(null),C=l.useRef(!0),[Mt,le]=l.useState(null),[Ot,j]=l.useState(null),[Gt,K]=l.useState(null);l.useEffect(()=>{var v;const s=((v=ge.current)==null?void 0:v.ownerDocument)??document,i=u=>{u.metaKey||u.altKey||u.ctrlKey||(C.current=!0)},w=()=>{C.current=!1};return s.addEventListener("keydown",i,!0),s.addEventListener("pointerdown",w,!0),s.addEventListener("mousedown",w,!0),s.addEventListener("touchstart",w,!0),()=>{s.removeEventListener("keydown",i,!0),s.removeEventListener("pointerdown",w,!0),s.removeEventListener("mousedown",w,!0),s.removeEventListener("touchstart",w,!0)}},[]);const de=l.useCallback(()=>{L.current=null,D.current!==null&&(window.clearTimeout(D.current),D.current=null)},[]);l.useEffect(()=>()=>{de()},[de]);const[y,me]=l.useState(()=>Re(t,ie,ce));l.useEffect(()=>{if(!y)return;const s=t.find(i=>String(i.key)===y.key);s!=null&&s.sortable||me(null)},[t,y]),l.useEffect(()=>{if(y)return;const s=Re(t,ie,ce);s&&me(s)},[t,ce,ie,y]);const E=l.useMemo(()=>{const s=e.map((v,u)=>({row:v,sourceIndex:u}));if(!y)return s;const i=t.find(v=>String(v.key)===y.key);if(!(i!=null&&i.sortable))return s;const w=i.sortAccessor??(v=>{const u=v[String(i.key)];return u instanceof Date||typeof u=="number"||typeof u=="string"?u:String(u??"")});return s.sort((v,u)=>{const S=w(v.row),T=w(u.row);if(typeof S=="string"&&typeof T=="string"){const H=Jt.compare(S,T);return H!==0?y.direction==="asc"?H:-H:v.sourceIndex-u.sourceIndex}const N=S instanceof Date?S.getTime():S,W=T instanceof Date?T.getTime():T;return N<W?y.direction==="asc"?-1:1:N>W?y.direction==="asc"?1:-1:v.sourceIndex-u.sourceIndex})},[t,e,y]),xe=l.useMemo(()=>{if(R||E.length<=1||!y)return"";const s=t.find(w=>String(w.key)===y.key);if(!(s!=null&&s.sortable))return"";const i=typeof s.header=="string"?s.header:String(s.key);return pe({columnKey:y.key,columnHeader:i,direction:y.direction})},[t,pe,R,y,E.length]),F=!R&&E.length>1&&t.some(s=>s.sortable),ve=Math.max(t.length,1);return l.useEffect(()=>{F||(le(null),j(null),K(null))},[F]),a.jsxs("div",{ref:ge,"data-aurora-table-scroll-container":"",tabIndex:F?void 0:0,"aria-label":F||B?void 0:be??"Data table scroll container","aria-labelledby":F?void 0:B,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[xe?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:xe}):null,a.jsxs("table",{"aria-label":be,"aria-labelledby":B,"aria-busy":R||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(s=>{const i=String(s.key),w=!!s.sortable,v=E.length>1,u=w&&(y==null?void 0:y.key)===i?y.direction:void 0,S=!R&&v?u:void 0,T=S?S==="asc"?"ascending":"descending":void 0,N=s.align??"left",W=typeof s.header=="string"?s.header:i,H=u==="asc"?"desc":"asc",zt=Vt({columnKey:i,columnHeader:W,nextDirection:H}),f=R||!v,he=!f&&Mt===i,Se=!f&&Ot===i,fe=!f&&Gt===i,Ut=he||fe,Be=()=>{f||(me({key:i,direction:H}),ue==null||ue(i,H))};return a.jsx("th",{scope:"col","aria-sort":T,style:{textAlign:N,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:w?a.jsxs("button",{type:"button",ref:c=>{we.current[i]=c},"aria-label":zt,"aria-keyshortcuts":f?void 0:"Enter Space",disabled:f,onClick:c=>{const A=c.detail===0&&L.current===i;de(),!A&&Be()},onMouseEnter:()=>{f||le(i)},onMouseLeave:()=>{le(c=>c===i?null:c),j(c=>c===i?null:c)},onMouseDown:c=>{f||c.button===0&&(C.current=!1,K(A=>A===i?null:A),j(i))},onMouseUp:c=>{c.button===0&&j(A=>A===i?null:A)},onFocus:()=>{if(f){K(c=>c===i?null:c);return}K(c=>ta(we.current[i],C.current)?i:c===i?null:c)},onBlur:()=>{K(c=>c===i?null:c),j(c=>c===i?null:c)},onKeyDown:c=>{C.current=!0,!(c.altKey||c.ctrlKey||c.metaKey)&&Zt(c.key)&&(ea(c)||(c.preventDefault(),!c.repeat&&(L.current=i,D.current!==null&&window.clearTimeout(D.current),D.current=window.setTimeout(()=>{L.current=null,D.current=null},0),Be())))},style:{border:Ut?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Se?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":he?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:f?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:fe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Se?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:S==="asc"?"▲":S==="desc"?"▼":"↕"})]}):s.header},i)})})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:ve,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:$t})})}):E.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:ve,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:Pt})})}):E.map((s,i)=>{const w=s.row,v=String(s.sourceIndex);return a.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(u=>{const S=u.render?u.render(w,i,s.sourceIndex):String(w[String(u.key)]??""),T={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:u.align??"left"};return u.rowHeader?a.jsx("th",{scope:"row",style:{...T,fontWeight:"var(--aurora-font-weight-medium)"},children:S},String(u.key)):a.jsx("td",{style:T,children:S},String(u.key))})},o?o(w,s.sourceIndex):v)})})]})]})}function Qt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Xt({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function Zt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function ea(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ta(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const x=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],h=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(_t,{tone:e,children:t.status})}}];function Te(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function aa(){const[t,e]=l.useState(!1);return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(d,{columns:h,data:x,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const ya={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},q={render:()=>a.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:h,data:x,rowKey:t=>t.id,defaultSortKey:"id"})})},$={render:()=>a.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:h,data:x,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},P={render:()=>{const t=[...h,{key:"action",header:"Action",width:160,render:e=>a.jsx(Yt,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:x,rowKey:e=>e.id})}},V={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:h,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},M={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:h,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},O={render:()=>a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:x}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=p(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await g.tab(),await n(o).toHaveFocus(),await g.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},G={render:()=>a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:I,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:h,data:x,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});k.mouseDown(r),r.focus(),await g.click(o),await g.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},z={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:h,data:x,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),b=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(b).not.toHaveAttribute("aria-sort")}},U={render:()=>a.jsx(aa,{}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});k.mouseDown(r),await g.click(o);const b=e.getByRole("button",{name:"Issue sort descending"});await n(b).toBeDisabled(),await n(b.style.transform).toContain("translateY(0"),await n(b.style.boxShadow).toBe("none")}},Y={render:function(){const[e,o]=l.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:I,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:h,data:x,defaultSortKey:"id",onSortChange:(r,b)=>o(`${r} ${b}`)})]})},play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),b=e.getByTestId("primary-pointer-sort-state");await g.click(o),await g.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),k.mouseDown(r,{button:2}),k.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(b).toHaveTextContent("id asc"),await g.click(r),await n(b).toHaveTextContent("id desc")}},_={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{ariaLabel:"Release checklist table",columns:h,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},J={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:h,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},Q={render:()=>a.jsxs(m,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:h,data:x,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=p(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},X={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:x,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=p(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function na(){const[t,e]=l.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:I,children:["Active sort: ",a.jsx("strong",{style:ye,children:t})]}),a.jsx(d,{columns:h,data:x,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const Z={render:()=>a.jsx(na,{}),play:async({canvasElement:t})=>{const e=p(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),await g.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const b=e.getByRole("button",{name:"Issue sort ascending"}),B=b.closest("th");await n(B).toHaveAttribute("aria-sort","descending"),k.keyDown(b,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","descending"),b.focus(),k.keyDown(b,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","descending"),await g.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});k.keyDown(R,{key:"Enter",ctrlKey:!0}),k.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(B).toHaveAttribute("aria-sort","ascending")}};function oa(){const[t,e]=l.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:I,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:I,children:["Active sort: ",a.jsx("strong",{style:ye,children:t})]}),a.jsx(d,{columns:h,data:x,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ee={render:()=>a.jsx(oa,{}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Te(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Te(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await g.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},te={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:h,data:x,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await g.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ae={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(m,{maxWidth:"min(100%, 620px)",children:a.jsx(d,{columns:t,data:x,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function ra(){const[t,e]=l.useState(!1),o=l.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:I,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:I,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:ye,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:o,data:x,rowKey:r=>r.id,defaultSortKey:"status"})]})}const ne={render:()=>a.jsx(ra,{}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await g.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Wt=x.map(t=>({...t,note:""})),qt=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],oe={render:()=>a.jsx(m,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:qt,data:Wt,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await g.type(o,"persist me"),await g.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},re={render:()=>a.jsx(m,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:qt,data:Wt,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=p(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await g.type(o,"persist me"),await g.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},sa=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],se={render:()=>a.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:I,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:sa,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=p(t);await g.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var ke,Ie,De;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(De=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var He,Ae,Ee;$.parameters={...$.parameters,docs:{...(He=$.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ee=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var Ce,je,Ke;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ke=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Ke.source}}};var Fe,Le,Ne;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ne=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var We,qe,$e;M.parameters={...M.parameters,docs:{...(We=M.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...($e=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var Pe,Ve,Me;O.parameters={...O.parameters,docs:{...(Pe=O.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var Oe,Ge,ze;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ue,Ye,_e;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(_e=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source}}};var Je,Qe,Xe;U.parameters={...U.parameters,docs:{...(Je=U.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=Y.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;_.parameters={..._.parameters,docs:{...(at=_.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=_.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,st,it;J.parameters={...J.parameters,docs:{...(rt=J.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=J.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,ut,lt;Q.parameters={...Q.parameters,docs:{...(ct=Q.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(ut=Q.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,mt,yt;X.parameters={...X.parameters,docs:{...(dt=X.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=X.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var pt,bt,wt;Z.parameters={...Z.parameters,docs:{...(pt=Z.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(wt=(bt=Z.parameters)==null?void 0:bt.docs)==null?void 0:wt.source}}};var gt,xt,vt;ee.parameters={...ee.parameters,docs:{...(gt=ee.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(xt=ee.parameters)==null?void 0:xt.docs)==null?void 0:vt.source}}};var ht,St,ft;te.parameters={...te.parameters,docs:{...(ht=te.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(ft=(St=te.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};var Bt,Rt,Tt;ae.parameters={...ae.parameters,docs:{...(Bt=ae.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Tt=(Rt=ae.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};var kt,It,Dt;ne.parameters={...ne.parameters,docs:{...(kt=ne.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Dt=(It=ne.parameters)==null?void 0:It.docs)==null?void 0:Dt.source}}};var Ht,At,Et;oe.parameters={...oe.parameters,docs:{...(Ht=oe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Et=(At=oe.parameters)==null?void 0:At.docs)==null?void 0:Et.source}}};var Ct,jt,Kt;re.parameters={...re.parameters,docs:{...(Ct=re.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Kt=(jt=re.parameters)==null?void 0:jt.docs)==null?void 0:Kt.source}}};var Ft,Lt,Nt;se.parameters={...se.parameters,docs:{...(Ft=se.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Nt=(Lt=se.parameters)==null?void 0:Lt.docs)==null?void 0:Nt.source}}};const pa=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{J as AccessibleNameFallback,Q as AccessibleNameLabelledByHeading,_ as AccessibleNameWithoutCaption,ne as DeferredColumnsDefaultSortRecovery,$ as DescendingDefaultSortDirection,V as EmptyState,oe as FallbackRowKeyStability,ee as ImeCompositionGuard,ae as InvalidDefaultSortKeyFallback,G as KeyboardFocusRingAfterPointer,O as KeyboardReachableScrollContainer,U as LoadingDisablesResetsSortVisualState,z as LoadingState,te as LocalizedSortLabels,Y as PrimaryPointerOnlySortPress,q as ReleaseChecklist,se as RenderIndexSemantics,X as RowHeaderSemantics,M as SingleRowSortDisabled,Z as SortTelemetry,re as SourceIndexRowKeyStability,P as WithRowAction,pa as __namedExportsOrder,ya as default};
