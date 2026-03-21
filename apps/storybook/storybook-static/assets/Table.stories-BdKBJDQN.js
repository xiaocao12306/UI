import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as ka}from"./Button-Cn1nutIP.js";import{r as u}from"./index-BWu4c2F4.js";import{B as Da}from"./Badge-ZJmMstsz.js";import{within as y,expect as n,userEvent as l,fireEvent as B,waitFor as $e}from"./index-DgAF9SIF.js";import{S as m,s as E,a as He}from"./storyShowcase-Bw5VyCj0.js";const Ha=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Ve=400;function Me(t,e,o){if(!e)return null;const r=t.find(h=>String(h.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function Oe(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=De(ke(t.header));return o.length>0?o:e}function d({columns:t,data:e,rowKey:o,caption:r,ariaLabel:h,ariaLabelledBy:xe,loading:f=!1,loadingContent:I="Loading data...",emptyContent:k="No data available.",defaultSortKey:V,defaultSortDirection:he="asc",getSortAriaLabel:wa=ze,getSortStatusText:Ie=Ia,onSortChange:Se}){const M=Te(xe),Ae=M?void 0:Te(h,r?void 0:"Data table"),L=u.useRef({}),Ee=u.useRef(null),fe=u.useRef(null),O=u.useRef(0),j=u.useRef(null),z=u.useRef(null),W=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[ga,Be]=u.useState(null),[va,N]=u.useState(null),[xa,q]=u.useState(null);u.useEffect(()=>{var x;const i=((x=Ee.current)==null?void 0:x.ownerDocument)??document,s=p=>{p.metaKey||p.altKey||p.ctrlKey||(W.current=!0)},w=()=>{W.current=!1};return i.addEventListener("keydown",s,!0),i.addEventListener("pointerdown",w,!0),i.addEventListener("mousedown",w,!0),i.addEventListener("touchstart",w,!0),()=>{i.removeEventListener("keydown",s,!0),i.removeEventListener("pointerdown",w,!0),i.removeEventListener("mousedown",w,!0),i.removeEventListener("touchstart",w,!0)}},[]);const G=u.useCallback(()=>{fe.current=null,O.current=0,j.current!==null&&((z.current??window).clearTimeout(j.current),j.current=null),z.current=null},[]);u.useEffect(()=>()=>{G()},[G]);const[b,Re]=u.useState(()=>Me(t,V,he)),K=u.useMemo(()=>f||e.length<=1?[]:t.reduce((i,s)=>(s.sortable&&i.push(String(s.key)),i),[]),[t,e.length,f]);u.useEffect(()=>{if(!b)return;const i=t.find(s=>String(s.key)===b.key);i!=null&&i.sortable||Re(null)},[t,b]),u.useEffect(()=>{if(b)return;const i=Me(t,V,he);i&&Re(i)},[t,he,V,b]);const ha=u.useMemo(()=>e.map((i,s)=>String(o?o(i,s):s)),[e,o]);u.useEffect(()=>{},[o,ha]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const F=u.useMemo(()=>{const i=e.map((x,p)=>({row:x,sourceIndex:p}));if(!b)return i;const s=t.find(x=>String(x.key)===b.key);if(!(s!=null&&s.sortable))return i;const w=s.sortAccessor??(x=>{const p=x[String(s.key)];return p instanceof Date||typeof p=="number"||typeof p=="string"?p:String(p??"")});return i.sort((x,p)=>{const g=w(x.row),D=w(p.row);if(typeof g=="string"&&typeof D=="string"){const A=Ha.compare(g,D);return A!==0?b.direction==="asc"?A:-A:x.sourceIndex-p.sourceIndex}const C=g instanceof Date?g.getTime():g,$=D instanceof Date?D.getTime():D;return C<$?b.direction==="asc"?-1:1:C>$?b.direction==="asc"?1:-1:x.sourceIndex-p.sourceIndex})},[t,e,b]),Ce=u.useMemo(()=>{if(f||F.length<=1||!b)return"";const i=t.find(w=>String(w.key)===b.key);if(!(i!=null&&i.sortable))return"";const s=Oe(i,String(i.key));return Ie({columnKey:b.key,columnHeader:s,direction:b.direction})},[t,Ie,f,b,F.length]),P=!f&&F.length>1&&t.some(i=>i.sortable),je=Math.max(t.length,1);return u.useEffect(()=>{P||(Be(null),N(null),q(null))},[P]),a.jsxs("div",{ref:Ee,"data-aurora-table-scroll-container":"",tabIndex:P?void 0:0,"aria-label":P||M?void 0:Ae??"Data table scroll container","aria-labelledby":P?void 0:M,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Ce?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Ce}):null,a.jsxs("table",{"aria-label":Ae,"aria-labelledby":M,"aria-busy":f||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(i=>{const s=String(i.key),w=!!i.sortable,x=F.length>1,p=w&&(b==null?void 0:b.key)===s?b.direction:void 0,g=!f&&x?p:void 0,D=g?g==="asc"?"ascending":"descending":void 0,C=i.align??"left",$=Oe(i,s),A=p==="asc"?"desc":"asc",Sa=wa({columnKey:s,columnHeader:$,nextDirection:A}),fa=Te(Sa,ze({columnHeader:$,nextDirection:A})),R=f||!x,Ke=!R&&ga===s,Fe=!R&&va===s,Le=!R&&xa===s,Ba=Ke||Le,We=()=>{R||(Re({key:s,direction:A}),Se==null||Se(s,A))};return a.jsx("th",{scope:"col","aria-sort":D,style:{textAlign:C,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:w?a.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:c=>{L.current[s]=c},"aria-label":fa,"aria-keyshortcuts":R?void 0:"Enter Space",disabled:R,onClick:c=>{const T=Date.now()-O.current,U=c.detail===0&&fe.current===s&&O.current>0&&T<=Ve;G(),!U&&We()},onMouseEnter:()=>{R||Be(s)},onMouseLeave:()=>{Be(c=>c===s?null:c),N(c=>c===s?null:c)},onMouseDown:c=>{R||c.button===0&&(W.current=!1,q(T=>T===s?null:T),N(s))},onMouseUp:c=>{c.button===0&&N(T=>T===s?null:T)},onFocus:()=>{if(R){q(c=>c===s?null:c);return}q(c=>Ca(L.current[s],W.current)?s:c===s?null:c)},onBlur:()=>{q(c=>c===s?null:c),N(c=>c===s?null:c)},onKeyDown:c=>{var U,Ne,qe;if(W.current=!0,c.altKey||c.ctrlKey||c.metaKey)return;if(c.key==="Home"){const H=K[0];if(!H)return;c.preventDefault(),(U=L.current[H])==null||U.focus();return}if(c.key==="End"){const H=K[K.length-1];if(!H)return;c.preventDefault(),(Ne=L.current[H])==null||Ne.focus();return}if(c.key==="PageDown"||c.key==="PageUp"){const H=K.indexOf(s);if(H<0)return;const Ra=c.key==="PageDown"?1:-1,Pe=Math.max(0,Math.min(K.length-1,H+Ra));if(Pe===H)return;c.preventDefault();const Ta=K[Pe];(qe=L.current[Ta])==null||qe.focus();return}if(!Aa(c.key)||Ea(c)||(c.preventDefault(),c.repeat))return;fe.current=s,O.current=Date.now();const T=c.currentTarget.ownerDocument.defaultView??window;j.current!==null&&(z.current??T).clearTimeout(j.current),z.current=T,j.current=T.setTimeout(()=>{G()},Ve),We()},style:{border:Ba?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Fe?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Ke?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:R?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:R?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Le?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Fe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:g==="asc"?"▲":g==="desc"?"▼":"↕"})]}):i.header},s)})})}),a.jsx("tbody",{children:f?a.jsx("tr",{children:a.jsx("td",{colSpan:je,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:I})})}):F.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:je,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:k})})}):F.map((i,s)=>{const w=i.row,x=String(i.sourceIndex),p=o?o(w,i.sourceIndex):x;return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(g=>{const D=g.render?g.render(w,s,i.sourceIndex):String(w[String(g.key)]??""),C={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:g.align??"left"};return g.rowHeader?a.jsx("th",{scope:"row",style:{...C,fontWeight:"var(--aurora-font-weight-medium)"},children:D},String(g.key)):a.jsx("td",{style:C,children:D},String(g.key))})},p)})})]})]})}function ze({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Ia({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function Aa(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Ea(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ca(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function ke(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return De(t.map(o=>ke(o)).filter(o=>o.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=De(e["aria-label"]);if(o.length>0)return o}return ke(e.children)}function De(t){return t.replace(/\s+/g," ").trim()}function Te(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(Da,{tone:e,children:t.status})}}];function Ge(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function ja(){const[t,e]=u.useState(!1);return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(d,{columns:S,data:v,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const Oa={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},Y={render:()=>a.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id"})})},_={render:()=>a.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},J={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>a.jsx(ka,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:v,rowKey:e=>e.id})}},Q={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},X={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},Z={render:()=>a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await l.tab(),await n(o).toHaveFocus(),await l.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ee={render:()=>a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:E,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});B.mouseDown(r),r.focus(),await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},te={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(h).not.toHaveAttribute("aria-sort")}},ae={render:()=>a.jsx(ja,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});B.mouseDown(r),await l.click(o);const h=e.getByRole("button",{name:"Issue sort descending"});await n(h).toBeDisabled(),await n(h.style.transform).toContain("translateY(0"),await n(h.style.boxShadow).toBe("none")}},ne={render:function(){const[e,o]=u.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:E,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id",onSortChange:(r,h)=>o(`${r} ${h}`)})]})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByTestId("primary-pointer-sort-state");await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),B.mouseDown(r,{button:2}),B.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(h).toHaveTextContent("id asc"),await l.click(r),await n(h).toHaveTextContent("id desc")}},oe={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{ariaLabel:"Release checklist table",columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},re={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},se={render:()=>a.jsxs(m,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:v,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=y(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},ie={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Ka(){const[t,e]=u.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:E,children:["Active sort: ",a.jsx("strong",{style:He,children:t})]}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ce={render:()=>a.jsx(Ka,{}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),await l.keyboard("{End}");const h=e.getByRole("button",{name:"Status sort ascending"});await n(h).toHaveFocus(),await l.keyboard("{Home}"),await n(r).toHaveFocus(),await l.keyboard("{PageDown}");const xe=e.getByRole("button",{name:"Component sort ascending"});await n(xe).toHaveFocus(),await l.keyboard("{PageUp}"),await n(r).toHaveFocus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const f=e.getByRole("button",{name:"Issue sort ascending"}),I=f.closest("th");await n(I).toHaveAttribute("aria-sort","descending"),B.keyDown(f,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","descending"),f.focus(),B.keyDown(f,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","descending"),await l.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const k=e.getByRole("button",{name:"Issue sort descending"});k.focus(),B.keyDown(k,{key:"End",ctrlKey:!0}),B.keyDown(k,{key:"Home",altKey:!0}),B.keyDown(k,{key:"PageDown",metaKey:!0}),B.keyDown(k,{key:"PageUp",ctrlKey:!0}),await n(k).toHaveFocus(),B.keyDown(k,{key:"Enter",ctrlKey:!0}),B.keyDown(k,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(I).toHaveAttribute("aria-sort","ascending"),await l.keyboard("{Shift>}{Enter}{/Shift}"),await $e(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(I).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await $e(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(I).toHaveAttribute("aria-sort","ascending")})}};function Fa(){const[t,e]=u.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:E,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:E,children:["Active sort: ",a.jsx("strong",{style:He,children:t})]}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ue={render:()=>a.jsx(Fa,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Ge(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Ge(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},le={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await l.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},de={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},me={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ye={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},pe={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(m,{maxWidth:"min(100%, 620px)",children:a.jsx(d,{columns:t,data:v,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function La(){const[t,e]=u.useState(!1),o=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:E,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:E,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:He,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:o,data:v,rowKey:r=>r.id,defaultSortKey:"status"})]})}const be={render:()=>a.jsx(La,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await l.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},pa=v.map(t=>({...t,note:""})),ba=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],we={render:()=>a.jsx(m,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:ba,data:pa,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},ge={render:()=>a.jsx(m,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:ba,data:pa,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Wa=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],ve={render:()=>a.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:E,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Wa,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=y(t);await l.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Ue,Ye,_e;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(_e=(Ye=Y.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source}}};var Je,Qe,Xe;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=_.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Q.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,st,it;X.parameters={...X.parameters,docs:{...(rt=X.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=X.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,ut,lt;Z.parameters={...Z.parameters,docs:{...(ct=Z.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(ut=Z.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,mt,yt;ee.parameters={...ee.parameters,docs:{...(dt=ee.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=ee.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var pt,bt,wt;te.parameters={...te.parameters,docs:{...(pt=te.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(wt=(bt=te.parameters)==null?void 0:bt.docs)==null?void 0:wt.source}}};var gt,vt,xt;ae.parameters={...ae.parameters,docs:{...(gt=ae.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(vt=ae.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var ht,St,ft;ne.parameters={...ne.parameters,docs:{...(ht=ne.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(ft=(St=ne.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};var Bt,Rt,Tt;oe.parameters={...oe.parameters,docs:{...(Bt=oe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Tt=(Rt=oe.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};var kt,Dt,Ht;re.parameters={...re.parameters,docs:{...(kt=re.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Ht=(Dt=re.parameters)==null?void 0:Dt.docs)==null?void 0:Ht.source}}};var It,At,Et;se.parameters={...se.parameters,docs:{...(It=se.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Et=(At=se.parameters)==null?void 0:At.docs)==null?void 0:Et.source}}};var Ct,jt,Kt;ie.parameters={...ie.parameters,docs:{...(Ct=ie.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Kt=(jt=ie.parameters)==null?void 0:jt.docs)==null?void 0:Kt.source}}};var Ft,Lt,Wt;ce.parameters={...ce.parameters,docs:{...(Ft=ce.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
    await userEvent.keyboard("{End}");
    const statusSort = canvas.getByRole("button", {
      name: "Status sort ascending"
    });
    await expect(statusSort).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{PageDown}");
    const componentSort = canvas.getByRole("button", {
      name: "Component sort ascending"
    });
    await expect(componentSort).toHaveFocus();
    await userEvent.keyboard("{PageUp}");
    await expect(issueSort).toHaveFocus();
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
    issueSortDesc.focus();
    fireEvent.keyDown(issueSortDesc, {
      key: "End",
      ctrlKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "Home",
      altKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "PageDown",
      metaKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "PageUp",
      ctrlKey: true
    });
    await expect(issueSortDesc).toHaveFocus();
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
    await userEvent.keyboard("{Shift>}{Enter}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByText("id desc")).toBeInTheDocument();
      expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    });
    const issueSortAscAfterShift = canvas.getByRole("button", {
      name: "Issue sort ascending"
    });
    issueSortAscAfterShift.focus();
    await userEvent.keyboard("{Shift>}{Space}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByText("id asc")).toBeInTheDocument();
      expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    });
  }
}`,...(Wt=(Lt=ce.parameters)==null?void 0:Lt.docs)==null?void 0:Wt.source}}};var Nt,qt,Pt;ue.parameters={...ue.parameters,docs:{...(Nt=ue.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Pt=(qt=ue.parameters)==null?void 0:qt.docs)==null?void 0:Pt.source}}};var $t,Vt,Mt;le.parameters={...le.parameters,docs:{...($t=le.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Mt=(Vt=le.parameters)==null?void 0:Vt.docs)==null?void 0:Mt.source}}};var Ot,zt,Gt;de.parameters={...de.parameters,docs:{...(Ot=de.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Gt=(zt=de.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source}}};var Ut,Yt,_t;me.parameters={...me.parameters,docs:{...(Ut=me.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(_t=(Yt=me.parameters)==null?void 0:Yt.docs)==null?void 0:_t.source}}};var Jt,Qt,Xt;ye.parameters={...ye.parameters,docs:{...(Jt=ye.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=ye.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;pe.parameters={...pe.parameters,docs:{...(Zt=pe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=pe.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,oa;be.parameters={...be.parameters,docs:{...(aa=be.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(oa=(na=be.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,sa,ia;we.parameters={...we.parameters,docs:{...(ra=we.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(sa=we.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var ca,ua,la;ge.parameters={...ge.parameters,docs:{...(ca=ge.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(la=(ua=ge.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var da,ma,ya;ve.parameters={...ve.parameters,docs:{...(da=ve.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(ma=ve.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};const za=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{re as AccessibleNameFallback,se as AccessibleNameLabelledByHeading,oe as AccessibleNameWithoutCaption,ye as AriaLabelHeaderAutoSortLabel,be as DeferredColumnsDefaultSortRecovery,_ as DescendingDefaultSortDirection,Q as EmptyState,we as FallbackRowKeyStability,ue as ImeCompositionGuard,pe as InvalidDefaultSortKeyFallback,ee as KeyboardFocusRingAfterPointer,Z as KeyboardReachableScrollContainer,ae as LoadingDisablesResetsSortVisualState,te as LoadingState,le as LocalizedSortLabels,ne as PrimaryPointerOnlySortPress,Y as ReleaseChecklist,ve as RenderIndexSemantics,me as RichTextHeaderAutoSortLabel,ie as RowHeaderSemantics,X as SingleRowSortDisabled,de as SortLabelForCustomHeader,ce as SortTelemetry,ge as SourceIndexRowKeyStability,J as WithRowAction,za as __namedExportsOrder,Oa as default};
