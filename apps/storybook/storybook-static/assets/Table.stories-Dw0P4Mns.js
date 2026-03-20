import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as va}from"./Button-BhfMIoQv.js";import{r as l}from"./index-BWu4c2F4.js";import{B as xa}from"./Badge-ZJmMstsz.js";import{within as m,expect as n,userEvent as p,fireEvent as D}from"./index-DgAF9SIF.js";import{S as d,s as H,a as fe}from"./storyShowcase-Bw5VyCj0.js";const ha=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Ke=400;function Le(t,e,o){if(!e)return null;const r=t.find(g=>String(g.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function Fe(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=Se(he(t.header));return o.length>0?o:e}function u({columns:t,data:e,rowKey:o,caption:r,ariaLabel:g,ariaLabelledBy:I,loading:R=!1,loadingContent:ca="Loading data...",emptyContent:la="No data available.",defaultSortKey:ye,defaultSortDirection:pe="asc",getSortAriaLabel:ua=We,getSortStatusText:Be=Sa,onSortChange:be}){const N=xe(I),Re=N?void 0:xe(g,r?void 0:"Data table"),Te=l.useRef({}),ke=l.useRef(null),ge=l.useRef(null),q=l.useRef(0),C=l.useRef(null),$=l.useRef(null),j=l.useRef(!0);l.useRef(null),l.useRef(null);const[da,we]=l.useState(null),[ma,K]=l.useState(null),[ya,L]=l.useState(null);l.useEffect(()=>{var h;const s=((h=ke.current)==null?void 0:h.ownerDocument)??document,i=y=>{y.metaKey||y.altKey||y.ctrlKey||(j.current=!0)},w=()=>{j.current=!1};return s.addEventListener("keydown",i,!0),s.addEventListener("pointerdown",w,!0),s.addEventListener("mousedown",w,!0),s.addEventListener("touchstart",w,!0),()=>{s.removeEventListener("keydown",i,!0),s.removeEventListener("pointerdown",w,!0),s.removeEventListener("mousedown",w,!0),s.removeEventListener("touchstart",w,!0)}},[]);const P=l.useCallback(()=>{ge.current=null,q.current=0,C.current!==null&&(($.current??window).clearTimeout(C.current),C.current=null),$.current=null},[]);l.useEffect(()=>()=>{P()},[P]);const[b,ve]=l.useState(()=>Le(t,ye,pe));l.useEffect(()=>{if(!b)return;const s=t.find(i=>String(i.key)===b.key);s!=null&&s.sortable||ve(null)},[t,b]),l.useEffect(()=>{if(b)return;const s=Le(t,ye,pe);s&&ve(s)},[t,pe,ye,b]);const pa=l.useMemo(()=>e.map((s,i)=>String(o?o(s,i):i)),[e,o]);l.useEffect(()=>{},[o,pa]),l.useEffect(()=>{},[t]);const E=l.useMemo(()=>{const s=e.map((h,y)=>({row:h,sourceIndex:y}));if(!b)return s;const i=t.find(h=>String(h.key)===b.key);if(!(i!=null&&i.sortable))return s;const w=i.sortAccessor??(h=>{const y=h[String(i.key)];return y instanceof Date||typeof y=="number"||typeof y=="string"?y:String(y??"")});return s.sort((h,y)=>{const v=w(h.row),T=w(y.row);if(typeof v=="string"&&typeof T=="string"){const k=ha.compare(v,T);return k!==0?b.direction==="asc"?k:-k:h.sourceIndex-y.sourceIndex}const A=v instanceof Date?v.getTime():v,W=T instanceof Date?T.getTime():T;return A<W?b.direction==="asc"?-1:1:A>W?b.direction==="asc"?1:-1:h.sourceIndex-y.sourceIndex})},[t,e,b]),De=l.useMemo(()=>{if(R||E.length<=1||!b)return"";const s=t.find(w=>String(w.key)===b.key);if(!(s!=null&&s.sortable))return"";const i=Fe(s,String(s.key));return Be({columnKey:b.key,columnHeader:i,direction:b.direction})},[t,Be,R,b,E.length]),F=!R&&E.length>1&&t.some(s=>s.sortable),He=Math.max(t.length,1);return l.useEffect(()=>{F||(we(null),K(null),L(null))},[F]),a.jsxs("div",{ref:ke,"data-aurora-table-scroll-container":"",tabIndex:F?void 0:0,"aria-label":F||N?void 0:Re??"Data table scroll container","aria-labelledby":F?void 0:N,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[De?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:De}):null,a.jsxs("table",{"aria-label":Re,"aria-labelledby":N,"aria-busy":R||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(s=>{const i=String(s.key),w=!!s.sortable,h=E.length>1,y=w&&(b==null?void 0:b.key)===i?b.direction:void 0,v=!R&&h?y:void 0,T=v?v==="asc"?"ascending":"descending":void 0,A=s.align??"left",W=Fe(s,i),k=y==="asc"?"desc":"asc",ba=ua({columnKey:i,columnHeader:W,nextDirection:k}),ga=xe(ba,We({columnHeader:W,nextDirection:k})),f=R||!h,Ie=!f&&da===i,Ae=!f&&ma===i,Ce=!f&&ya===i,wa=Ie||Ce,Ee=()=>{f||(ve({key:i,direction:k}),be==null||be(i,k))};return a.jsx("th",{scope:"col","aria-sort":T,style:{textAlign:A,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:w?a.jsxs("button",{type:"button",ref:c=>{Te.current[i]=c},"aria-label":ga,"aria-keyshortcuts":f?void 0:"Enter Space",disabled:f,onClick:c=>{const B=Date.now()-q.current,je=c.detail===0&&ge.current===i&&q.current>0&&B<=Ke;P(),!je&&Ee()},onMouseEnter:()=>{f||we(i)},onMouseLeave:()=>{we(c=>c===i?null:c),K(c=>c===i?null:c)},onMouseDown:c=>{f||c.button===0&&(j.current=!1,L(B=>B===i?null:B),K(i))},onMouseUp:c=>{c.button===0&&K(B=>B===i?null:B)},onFocus:()=>{if(f){L(c=>c===i?null:c);return}L(c=>Ra(Te.current[i],j.current)?i:c===i?null:c)},onBlur:()=>{L(c=>c===i?null:c),K(c=>c===i?null:c)},onKeyDown:c=>{if(j.current=!0,c.altKey||c.ctrlKey||c.metaKey||!fa(c.key)||Ba(c)||(c.preventDefault(),c.repeat))return;ge.current=i,q.current=Date.now();const B=c.currentTarget.ownerDocument.defaultView??window;C.current!==null&&($.current??B).clearTimeout(C.current),$.current=B,C.current=B.setTimeout(()=>{P()},Ke),Ee()},style:{border:wa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Ae?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Ie?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:f?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Ce?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Ae?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,a.jsx("span",{"aria-hidden":"true",children:v==="asc"?"▲":v==="desc"?"▼":"↕"})]}):s.header},i)})})}),a.jsx("tbody",{children:R?a.jsx("tr",{children:a.jsx("td",{colSpan:He,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:ca})})}):E.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:He,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:la})})}):E.map((s,i)=>{const w=s.row,h=String(s.sourceIndex),y=o?o(w,s.sourceIndex):h;return a.jsx("tr",{style:{background:i%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(v=>{const T=v.render?v.render(w,i,s.sourceIndex):String(w[String(v.key)]??""),A={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:v.align??"left"};return v.rowHeader?a.jsx("th",{scope:"row",style:{...A,fontWeight:"var(--aurora-font-weight-medium)"},children:T},String(v.key)):a.jsx("td",{style:A,children:T},String(v.key))})},y)})})]})]})}function We({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Sa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function fa(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Ba(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ra(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function he(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Se(t.map(o=>he(o)).filter(o=>o.length>0).join(" "));if(!l.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=Se(e["aria-label"]);if(o.length>0)return o}return he(e.children)}function Se(t){return t.replace(/\s+/g," ").trim()}function xe(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const x=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(xa,{tone:e,children:t.status})}}];function Ne(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function Ta(){const[t,e]=l.useState(!1);return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(u,{columns:S,data:x,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const Fa={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},V={render:()=>a.jsx(d,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(u,{caption:"Release readiness board",columns:S,data:x,rowKey:t=>t.id,defaultSortKey:"id"})})},M={render:()=>a.jsx(d,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(u,{caption:"Release readiness board",columns:S,data:x,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},O={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>a.jsx(va,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(u,{columns:t,data:x,rowKey:e=>e.id})}},z={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},G={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},U={render:()=>a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(u,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:x}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await p.tab(),await n(o).toHaveFocus(),await p.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},Y={render:()=>a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:H,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});D.mouseDown(r),r.focus(),await p.click(o),await p.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},_={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:x,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(g).not.toHaveAttribute("aria-sort")}},J={render:()=>a.jsx(Ta,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});D.mouseDown(r),await p.click(o);const g=e.getByRole("button",{name:"Issue sort descending"});await n(g).toBeDisabled(),await n(g.style.transform).toContain("translateY(0"),await n(g.style.boxShadow).toBe("none")}},Q={render:function(){const[e,o]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:H,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id",onSortChange:(r,g)=>o(`${r} ${g}`)})]})},play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),g=e.getByTestId("primary-pointer-sort-state");await p.click(o),await p.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),D.mouseDown(r,{button:2}),D.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(g).toHaveTextContent("id asc"),await p.click(r),await n(g).toHaveTextContent("id desc")}},X={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{ariaLabel:"Release checklist table",columns:S,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Z={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:x,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ee={render:()=>a.jsxs(d,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:x,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=m(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},te={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:x,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function ka(){const[t,e]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:H,children:["Active sort: ",a.jsx("strong",{style:fe,children:t})]}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ae={render:()=>a.jsx(ka,{}),play:async({canvasElement:t})=>{const e=m(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),await p.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const g=e.getByRole("button",{name:"Issue sort ascending"}),I=g.closest("th");await n(I).toHaveAttribute("aria-sort","descending"),D.keyDown(g,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","descending"),g.focus(),D.keyDown(g,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","descending"),await p.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});D.keyDown(R,{key:"Enter",ctrlKey:!0}),D.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","ascending")}};function Da(){const[t,e]=l.useState("id asc");return a.jsxs(d,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:H,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:H,children:["Active sort: ",a.jsx("strong",{style:fe,children:t})]}),a.jsx(u,{columns:S,data:x,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ne={render:()=>a.jsx(Da,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Ne(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Ne(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await p.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},oe={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:S,data:x,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await p.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},re={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await p.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},se={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await p.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ie={render:()=>a.jsx(d,{maxWidth:"min(100%, 780px)",children:a.jsx(u,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=m(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await p.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ce={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(d,{maxWidth:"min(100%, 620px)",children:a.jsx(u,{columns:t,data:x,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Ha(){const[t,e]=l.useState(!1),o=l.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(d,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:H,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:H,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:fe,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(u,{columns:o,data:x,rowKey:r=>r.id,defaultSortKey:"status"})]})}const le={render:()=>a.jsx(Ha,{}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await p.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},sa=x.map(t=>({...t,note:""})),ia=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],ue={render:()=>a.jsx(d,{maxWidth:"min(100%, 720px)",children:a.jsx(u,{columns:ia,data:sa,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await p.type(o,"persist me"),await p.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},de={render:()=>a.jsx(d,{maxWidth:"min(100%, 720px)",children:a.jsx(u,{columns:ia,data:sa,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=m(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await p.type(o,"persist me"),await p.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ia=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],me={render:()=>a.jsxs(d,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:H,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Ia,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=m(t);await p.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var qe,$e,Pe;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Pe=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Pe.source}}};var Ve,Me,Oe;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var ze,Ge,Ue;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Ye,_e,Je;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=G.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;U.parameters={...U.parameters,docs:{...(et=U.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=U.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,ot,rt;Y.parameters={...Y.parameters,docs:{...(nt=Y.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(rt=(ot=Y.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var st,it,ct;_.parameters={..._.parameters,docs:{...(st=_.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(it=_.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,ut,dt;J.parameters={...J.parameters,docs:{...(lt=J.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(dt=(ut=J.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var mt,yt,pt;Q.parameters={...Q.parameters,docs:{...(mt=Q.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(pt=(yt=Q.parameters)==null?void 0:yt.docs)==null?void 0:pt.source}}};var bt,gt,wt;X.parameters={...X.parameters,docs:{...(bt=X.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(wt=(gt=X.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var vt,xt,ht;Z.parameters={...Z.parameters,docs:{...(vt=Z.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(ht=(xt=Z.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var St,ft,Bt;ee.parameters={...ee.parameters,docs:{...(St=ee.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Bt=(ft=ee.parameters)==null?void 0:ft.docs)==null?void 0:Bt.source}}};var Rt,Tt,kt;te.parameters={...te.parameters,docs:{...(Rt=te.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(kt=(Tt=te.parameters)==null?void 0:Tt.docs)==null?void 0:kt.source}}};var Dt,Ht,It;ae.parameters={...ae.parameters,docs:{...(Dt=ae.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(It=(Ht=ae.parameters)==null?void 0:Ht.docs)==null?void 0:It.source}}};var At,Ct,Et;ne.parameters={...ne.parameters,docs:{...(At=ne.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Et=(Ct=ne.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var jt,Kt,Lt;oe.parameters={...oe.parameters,docs:{...(jt=oe.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Lt=(Kt=oe.parameters)==null?void 0:Kt.docs)==null?void 0:Lt.source}}};var Ft,Wt,Nt;re.parameters={...re.parameters,docs:{...(Ft=re.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Nt=(Wt=re.parameters)==null?void 0:Wt.docs)==null?void 0:Nt.source}}};var qt,$t,Pt;se.parameters={...se.parameters,docs:{...(qt=se.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Pt=($t=se.parameters)==null?void 0:$t.docs)==null?void 0:Pt.source}}};var Vt,Mt,Ot;ie.parameters={...ie.parameters,docs:{...(Vt=ie.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ot=(Mt=ie.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};var zt,Gt,Ut;ce.parameters={...ce.parameters,docs:{...(zt=ce.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Gt=ce.parameters)==null?void 0:Gt.docs)==null?void 0:Ut.source}}};var Yt,_t,Jt;le.parameters={...le.parameters,docs:{...(Yt=le.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Jt=(_t=le.parameters)==null?void 0:_t.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;ue.parameters={...ue.parameters,docs:{...(Qt=ue.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=ue.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var ea,ta,aa;de.parameters={...de.parameters,docs:{...(ea=de.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(aa=(ta=de.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var na,oa,ra;me.parameters={...me.parameters,docs:{...(na=me.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ra=(oa=me.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};const Wa=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{Z as AccessibleNameFallback,ee as AccessibleNameLabelledByHeading,X as AccessibleNameWithoutCaption,ie as AriaLabelHeaderAutoSortLabel,le as DeferredColumnsDefaultSortRecovery,M as DescendingDefaultSortDirection,z as EmptyState,ue as FallbackRowKeyStability,ne as ImeCompositionGuard,ce as InvalidDefaultSortKeyFallback,Y as KeyboardFocusRingAfterPointer,U as KeyboardReachableScrollContainer,J as LoadingDisablesResetsSortVisualState,_ as LoadingState,oe as LocalizedSortLabels,Q as PrimaryPointerOnlySortPress,V as ReleaseChecklist,me as RenderIndexSemantics,se as RichTextHeaderAutoSortLabel,te as RowHeaderSemantics,G as SingleRowSortDisabled,re as SortLabelForCustomHeader,ae as SortTelemetry,de as SourceIndexRowKeyStability,O as WithRowAction,Wa as __namedExportsOrder,Fa as default};
