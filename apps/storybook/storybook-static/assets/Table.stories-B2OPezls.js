import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as ya}from"./Button-BhfMIoQv.js";import{r as l}from"./index-BWu4c2F4.js";import{B as pa}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as p,fireEvent as k}from"./index-DgAF9SIF.js";import{S as d,s as D,a as ve}from"./storyShowcase-Bw5VyCj0.js";const ba=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Ae=400;function Ce(t,e,o){if(!e)return null;const r=t.find(g=>String(g.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function Ee(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=xe(we(t.header));return o.length>0?o:e}function u({columns:t,data:e,rowKey:o,caption:r,ariaLabel:g,ariaLabelledBy:f,loading:R=!1,loadingContent:na="Loading data...",emptyContent:oa="No data available.",defaultSortKey:de,defaultSortDirection:me="asc",getSortAriaLabel:ra=ga,getSortStatusText:he=wa,onSortChange:ye}){const Se=f?void 0:g??(r?void 0:"Data table"),Be=l.useRef({}),fe=l.useRef(null),pe=l.useRef(null),W=l.useRef(0),C=l.useRef(null),j=l.useRef(!0);l.useRef(null),l.useRef(null);const[sa,be]=l.useState(null),[ia,K]=l.useState(null),[ca,F]=l.useState(null);l.useEffect(()=>{var h;const i=((h=fe.current)==null?void 0:h.ownerDocument)??document,s=y=>{y.metaKey||y.altKey||y.ctrlKey||(j.current=!0)},w=()=>{j.current=!1};return i.addEventListener("keydown",s,!0),i.addEventListener("pointerdown",w,!0),i.addEventListener("mousedown",w,!0),i.addEventListener("touchstart",w,!0),()=>{i.removeEventListener("keydown",s,!0),i.removeEventListener("pointerdown",w,!0),i.removeEventListener("mousedown",w,!0),i.removeEventListener("touchstart",w,!0)}},[]);const N=l.useCallback(()=>{pe.current=null,W.current=0,C.current!==null&&(window.clearTimeout(C.current),C.current=null)},[]);l.useEffect(()=>()=>{N()},[N]);const[b,ge]=l.useState(()=>Ce(t,de,me));l.useEffect(()=>{if(!b)return;const i=t.find(s=>String(s.key)===b.key);i!=null&&i.sortable||ge(null)},[t,b]),l.useEffect(()=>{if(b)return;const i=Ce(t,de,me);i&&ge(i)},[t,me,de,b]);const la=l.useMemo(()=>e.map((i,s)=>String(o?o(i,s):s)),[e,o]);l.useEffect(()=>{},[o,la]),l.useEffect(()=>{},[t]);const E=l.useMemo(()=>{const i=e.map((h,y)=>({row:h,sourceIndex:y}));if(!b)return i;const s=t.find(h=>String(h.key)===b.key);if(!(s!=null&&s.sortable))return i;const w=s.sortAccessor??(h=>{const y=h[String(s.key)];return y instanceof Date||typeof y=="number"||typeof y=="string"?y:String(y??"")});return i.sort((h,y)=>{const x=w(h.row),T=w(y.row);if(typeof x=="string"&&typeof T=="string"){const I=ba.compare(x,T);return I!==0?b.direction==="asc"?I:-I:h.sourceIndex-y.sourceIndex}const H=x instanceof Date?x.getTime():x,q=T instanceof Date?T.getTime():T;return H<q?b.direction==="asc"?-1:1:H>q?b.direction==="asc"?1:-1:h.sourceIndex-y.sourceIndex})},[t,e,b]),Re=l.useMemo(()=>{if(R||E.length<=1||!b)return"";const i=t.find(w=>String(w.key)===b.key);if(!(i!=null&&i.sortable))return"";const s=Ee(i,String(i.key));return he({columnKey:b.key,columnHeader:s,direction:b.direction})},[t,he,R,b,E.length]),L=!R&&E.length>1&&t.some(i=>i.sortable),Te=Math.max(t.length,1);return l.useEffect(()=>{L||(be(null),K(null),F(null))},[L]),a.jsxs("div",{ref:fe,"data-aurora-table-scroll-container":"",tabIndex:L?void 0:0,"aria-label":L||f?void 0:Se??"Data table scroll container","aria-labelledby":L?void 0:f,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Re?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Re}):null,a.jsxs("table",{"aria-label":Se,"aria-labelledby":f,"aria-busy":R||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(i=>{const s=String(i.key),w=!!i.sortable,h=E.length>1,y=w&&(b==null?void 0:b.key)===s?b.direction:void 0,x=!R&&h?y:void 0,T=x?x==="asc"?"ascending":"descending":void 0,H=i.align??"left",q=Ee(i,s),I=y==="asc"?"desc":"asc",ua=ra({columnKey:s,columnHeader:q,nextDirection:I}),B=R||!h,ke=!B&&sa===s,De=!B&&ia===s,He=!B&&ca===s,da=ke||He,Ie=()=>{B||(ge({key:s,direction:I}),ye==null||ye(s,I))};return a.jsx("th",{scope:"col","aria-sort":T,style:{textAlign:H,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:w?a.jsxs("button",{type:"button",ref:c=>{Be.current[s]=c},"aria-label":ua,"aria-keyshortcuts":B?void 0:"Enter Space",disabled:B,onClick:c=>{const A=Date.now()-W.current,ma=c.detail===0&&pe.current===s&&W.current>0&&A<=Ae;N(),!ma&&Ie()},onMouseEnter:()=>{B||be(s)},onMouseLeave:()=>{be(c=>c===s?null:c),K(c=>c===s?null:c)},onMouseDown:c=>{B||c.button===0&&(j.current=!1,F(A=>A===s?null:A),K(s))},onMouseUp:c=>{c.button===0&&K(A=>A===s?null:A)},onFocus:()=>{if(B){F(c=>c===s?null:c);return}F(c=>ha(Be.current[s],j.current)?s:c===s?null:c)},onBlur:()=>{F(c=>c===s?null:c),K(c=>c===s?null:c)},onKeyDown:c=>{j.current=!0,!(c.altKey||c.ctrlKey||c.metaKey)&&xa(c.key)&&(va(c)||(c.preventDefault(),!c.repeat&&(pe.current=s,W.current=Date.now(),C.current!==null&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{N()},Ae),Ie())))},style:{border:da?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:De?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":ke?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:B?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:B?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:He?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:De?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:x==="asc"?"▲":x==="desc"?"▼":"↕"})]}):i.header},s)})})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:Te,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:na})})}):E.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Te,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:oa})})}):E.map((i,s)=>{const w=i.row,h=String(i.sourceIndex),y=o?o(w,i.sourceIndex):h;return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(x=>{const T=x.render?x.render(w,s,i.sourceIndex):String(w[String(x.key)]??""),H={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:x.align??"left"};return x.rowHeader?a.jsx("th",{scope:"row",style:{...H,fontWeight:"var(--aurora-font-weight-medium)"},children:T},String(x.key)):a.jsx("td",{style:H,children:T},String(x.key))})},y)})})]})]})}function ga({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function wa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function xa(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function va(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ha(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function we(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return xe(t.map(o=>we(o)).filter(o=>o.length>0).join(" "));if(!l.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=xe(e["aria-label"]);if(o.length>0)return o}return we(e.children)}function xe(t){return t.replace(/\s+/g," ").trim()}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(pa,{tone:e,children:t.status})}}];function je(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function Sa(){const[t,e]=l.useState(!1);return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(u,{columns:S,data:v,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const Ea={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},$={render:()=>a.jsx(d,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(u,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id"})})},P={render:()=>a.jsx(d,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(u,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},V={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>a.jsx(ya,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:t,data:v,rowKey:e=>e.id})}},M={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},O={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},z={render:()=>a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(u,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await p.tab(),await n(o).toHaveFocus(),await p.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},G={render:()=>a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:D,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(u,{columns:S,data:v,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});k.mouseDown(r),r.focus(),await p.click(o),await p.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},U={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(g).not.toHaveAttribute("aria-sort")}},Y={render:()=>a.jsx(Sa,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});k.mouseDown(r),await p.click(o);const g=e.getByRole("button",{name:"Issue sort descending"});await n(g).toBeDisabled(),await n(g.style.transform).toContain("translateY(0"),await n(g.style.boxShadow).toBe("none")}},_={render:function(){const[e,o]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:D,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(u,{columns:S,data:v,defaultSortKey:"id",onSortChange:(r,g)=>o(`${r} ${g}`)})]})},play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByTestId("primary-pointer-sort-state");await p.click(o),await p.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),k.mouseDown(r,{button:2}),k.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(g).toHaveTextContent("id asc"),await p.click(r),await n(g).toHaveTextContent("id desc")}},J={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{ariaLabel:"Release checklist table",columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Q={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},X={render:()=>a.jsxs(d,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:v,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=m(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},Z={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Ba(){const[t,e]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:D,children:["Active sort: ",a.jsx("strong",{style:ve,children:t})]}),a.jsx(u,{columns:S,data:v,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ee={render:()=>a.jsx(Ba,{}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),await p.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const g=e.getByRole("button",{name:"Issue sort ascending"}),f=g.closest("th");await n(f).toHaveAttribute("aria-sort","descending"),k.keyDown(g,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(f).toHaveAttribute("aria-sort","descending"),g.focus(),k.keyDown(g,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(f).toHaveAttribute("aria-sort","descending"),await p.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(f).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});k.keyDown(R,{key:"Enter",ctrlKey:!0}),k.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(f).toHaveAttribute("aria-sort","ascending")}};function fa(){const[t,e]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:D,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:D,children:["Active sort: ",a.jsx("strong",{style:ve,children:t})]}),a.jsx(u,{columns:S,data:v,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const te={render:()=>a.jsx(fa,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),je(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),je(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await p.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},ae={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await p.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ne={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await p.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},oe={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await p.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},re={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await p.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},se={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(d,{maxWidth:"min(100%, 620px)",children:a.jsx(u,{columns:t,data:v,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Ra(){const[t,e]=l.useState(!1),o=l.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(d,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:D,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:D,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:ve,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(u,{columns:o,data:v,rowKey:r=>r.id,defaultSortKey:"status"})]})}const ie={render:()=>a.jsx(Ra,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await p.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},ta=v.map(t=>({...t,note:""})),aa=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],ce={render:()=>a.jsx(d,{maxWidth:"min(100%, 720px)",children:a.jsx(u,{columns:aa,data:ta,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await p.type(o,"persist me"),await p.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},le={render:()=>a.jsx(d,{maxWidth:"min(100%, 720px)",children:a.jsx(u,{columns:aa,data:ta,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await p.type(o,"persist me"),await p.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ta=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],ue={render:()=>a.jsxs(d,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:D,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Ta,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await p.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Ke,Fe,Le;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Le=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var We,Ne,qe;P.parameters={...P.parameters,docs:{...(We=P.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var $e,Pe,Ve;V.parameters={...V.parameters,docs:{...($e=V.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Me,Oe,ze;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(ze=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Ge,Ue,Ye;O.parameters={...O.parameters,docs:{...(Ge=O.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var _e,Je,Qe;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=G.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;U.parameters={...U.parameters,docs:{...(tt=U.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=U.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,rt,st;Y.parameters={...Y.parameters,docs:{...(ot=Y.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(rt=Y.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,lt;_.parameters={..._.parameters,docs:{...(it=_.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ct=_.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,dt,mt;J.parameters={...J.parameters,docs:{...(ut=J.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(mt=(dt=J.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var yt,pt,bt;Q.parameters={...Q.parameters,docs:{...(yt=Q.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(bt=(pt=Q.parameters)==null?void 0:pt.docs)==null?void 0:bt.source}}};var gt,wt,xt;X.parameters={...X.parameters,docs:{...(gt=X.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(wt=X.parameters)==null?void 0:wt.docs)==null?void 0:xt.source}}};var vt,ht,St;Z.parameters={...Z.parameters,docs:{...(vt=Z.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(St=(ht=Z.parameters)==null?void 0:ht.docs)==null?void 0:St.source}}};var Bt,ft,Rt;ee.parameters={...ee.parameters,docs:{...(Bt=ee.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Rt=(ft=ee.parameters)==null?void 0:ft.docs)==null?void 0:Rt.source}}};var Tt,kt,Dt;te.parameters={...te.parameters,docs:{...(Tt=te.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Dt=(kt=te.parameters)==null?void 0:kt.docs)==null?void 0:Dt.source}}};var Ht,It,At;ae.parameters={...ae.parameters,docs:{...(Ht=ae.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(At=(It=ae.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Ct,Et,jt;ne.parameters={...ne.parameters,docs:{...(Ct=ne.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(jt=(Et=ne.parameters)==null?void 0:Et.docs)==null?void 0:jt.source}}};var Kt,Ft,Lt;oe.parameters={...oe.parameters,docs:{...(Kt=oe.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "status",
      header: <span>
                <span aria-hidden="true">🚦</span> Release status
              </span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      status: "Review",
      component: "Dialog"
    }, {
      status: "Ready",
      component: "Button"
    }]} defaultSortKey="status" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Release status sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Release status sort ascending"
    })).toBeInTheDocument();
  }
}`,...(Lt=(Ft=oe.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var Wt,Nt,qt;re.parameters={...re.parameters,docs:{...(Wt=re.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "status",
      header: <span aria-label="Release status">
                <span aria-hidden="true">🚦</span>
              </span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      status: "Review",
      component: "Dialog"
    }, {
      status: "Ready",
      component: "Button"
    }]} defaultSortKey="status" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Release status sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Release status sort ascending"
    })).toBeInTheDocument();
  }
}`,...(qt=(Nt=re.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var $t,Pt,Vt;se.parameters={...se.parameters,docs:{...($t=se.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Vt=(Pt=se.parameters)==null?void 0:Pt.docs)==null?void 0:Vt.source}}};var Mt,Ot,zt;ie.parameters={...ie.parameters,docs:{...(Mt=ie.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(zt=(Ot=ie.parameters)==null?void 0:Ot.docs)==null?void 0:zt.source}}};var Gt,Ut,Yt;ce.parameters={...ce.parameters,docs:{...(Gt=ce.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Yt=(Ut=ce.parameters)==null?void 0:Ut.docs)==null?void 0:Yt.source}}};var _t,Jt,Qt;le.parameters={...le.parameters,docs:{...(_t=le.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=le.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,ea;ue.parameters={...ue.parameters,docs:{...(Xt=ue.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=ue.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};const ja=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{Q as AccessibleNameFallback,X as AccessibleNameLabelledByHeading,J as AccessibleNameWithoutCaption,re as AriaLabelHeaderAutoSortLabel,ie as DeferredColumnsDefaultSortRecovery,P as DescendingDefaultSortDirection,M as EmptyState,ce as FallbackRowKeyStability,te as ImeCompositionGuard,se as InvalidDefaultSortKeyFallback,G as KeyboardFocusRingAfterPointer,z as KeyboardReachableScrollContainer,Y as LoadingDisablesResetsSortVisualState,U as LoadingState,ae as LocalizedSortLabels,_ as PrimaryPointerOnlySortPress,$ as ReleaseChecklist,ue as RenderIndexSemantics,oe as RichTextHeaderAutoSortLabel,Z as RowHeaderSemantics,O as SingleRowSortDisabled,ne as SortLabelForCustomHeader,ee as SortTelemetry,le as SourceIndexRowKeyStability,V as WithRowAction,ja as __namedExportsOrder,Ea as default};
