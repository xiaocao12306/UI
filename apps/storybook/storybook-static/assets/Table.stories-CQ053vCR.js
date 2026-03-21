import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Ka}from"./Button-BMxlc9Nj.js";import{r as u}from"./index-BWu4c2F4.js";import{B as ja}from"./Badge-ZJmMstsz.js";import{within as y,expect as n,userEvent as l,fireEvent as T,waitFor as ze}from"./index-DgAF9SIF.js";import{S as m,s as C,a as Ie}from"./storyShowcase-Bw5VyCj0.js";const Fa="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",La=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Ge=400;function Ye(t,e,o){if(!e)return null;const i=t.find(h=>String(h.key)===e);return i!=null&&i.sortable?{key:e,direction:o}:null}function _e(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=Ae(He(t.header));return o.length>0?o:e}function d({columns:t,data:e,rowKey:o,caption:i,ariaLabel:h,ariaLabelledBy:Se,loading:k=!1,loadingContent:F="Loading data...",emptyContent:A="No data available.",defaultSortKey:f,defaultSortDirection:O="asc",getSortAriaLabel:fa=Je,getSortStatusText:Ee=Wa,onSortChange:fe}){const U=De(Se),Ce=U?void 0:De(h,i?void 0:"Data table"),L=u.useRef({}),Ke=u.useRef(null),Be=u.useRef(null),z=u.useRef(0),W=u.useRef(null),G=u.useRef(null),q=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[Ba,Re]=u.useState(null),[Ra,K]=u.useState(null),[Ta,$]=u.useState(null);u.useEffect(()=>{var x;const c=((x=Ke.current)==null?void 0:x.ownerDocument)??document,s=p=>{p.metaKey||p.altKey||p.ctrlKey||(q.current=!0)},g=()=>{q.current=!1};return c.addEventListener("keydown",s,!0),c.addEventListener("pointerdown",g,!0),c.addEventListener("mousedown",g,!0),c.addEventListener("touchstart",g,!0),()=>{c.removeEventListener("keydown",s,!0),c.removeEventListener("pointerdown",g,!0),c.removeEventListener("mousedown",g,!0),c.removeEventListener("touchstart",g,!0)}},[]);const Y=u.useCallback(()=>{Be.current=null,z.current=0,W.current!==null&&((G.current??window).clearTimeout(W.current),W.current=null),G.current=null},[]);u.useEffect(()=>()=>{Y()},[Y]);const[w,Te]=u.useState(()=>Ye(t,f,O)),I=u.useMemo(()=>k||e.length<=1?[]:t.reduce((c,s)=>(s.sortable&&c.push(String(s.key)),c),[]),[t,e.length,k]);u.useEffect(()=>{if(!w)return;const c=t.find(s=>String(s.key)===w.key);c!=null&&c.sortable||Te(null)},[t,w]),u.useEffect(()=>{if(w)return;const c=Ye(t,f,O);c&&Te(c)},[t,O,f,w]);const ka=u.useMemo(()=>e.map((c,s)=>String(o?o(c,s):s)),[e,o]);u.useEffect(()=>{},[o,ka]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const P=u.useMemo(()=>{const c=e.map((x,p)=>({row:x,sourceIndex:p}));if(!w)return c;const s=t.find(x=>String(x.key)===w.key);if(!(s!=null&&s.sortable))return c;const g=s.sortAccessor??(x=>{const p=x[String(s.key)];return p instanceof Date||typeof p=="number"||typeof p=="string"?p:String(p??"")});return c.sort((x,p)=>{const b=g(x.row),H=g(p.row);if(typeof b=="string"&&typeof H=="string"){const E=La.compare(b,H);return E!==0?w.direction==="asc"?E:-E:x.sourceIndex-p.sourceIndex}const j=b instanceof Date?b.getTime():b,V=H instanceof Date?H.getTime():H;return j<V?w.direction==="asc"?-1:1:j>V?w.direction==="asc"?1:-1:x.sourceIndex-p.sourceIndex})},[t,e,w]),je=u.useMemo(()=>{if(k||P.length<=1||!w)return"";const c=t.find(g=>String(g.key)===w.key);if(!(c!=null&&c.sortable))return"";const s=_e(c,String(c.key));return Ee({columnKey:w.key,columnHeader:s,direction:w.direction})},[t,Ee,k,w,P.length]),M=!k&&P.length>1&&t.some(c=>c.sortable),Fe=Math.max(t.length,1);return u.useEffect(()=>{M||(Re(null),K(null),$(null))},[M]),a.jsxs("div",{ref:Ke,"data-aurora-table-scroll-container":"",tabIndex:M?void 0:0,"aria-label":M||U?void 0:Ce??"Data table scroll container","aria-labelledby":M?void 0:U,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[je?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:je}):null,a.jsxs("table",{"aria-label":Ce,"aria-labelledby":U,"aria-busy":k||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[i?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:i}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map(c=>{const s=String(c.key),g=!!c.sortable,x=P.length>1,p=g&&(w==null?void 0:w.key)===s?w.direction:void 0,b=!k&&x?p:void 0,H=b?b==="asc"?"ascending":"descending":void 0,j=c.align??"left",V=_e(c,s),E=p==="asc"?"desc":"asc",Da=fa({columnKey:s,columnHeader:V,nextDirection:E}),Ha=De(Da,Je({columnHeader:V,nextDirection:E})),D=k||!x,Le=!D&&Ba===s,We=!D&&Ra===s,Pe=!D&&Ta===s,Aa=Le||Pe,Ne=()=>{D||(Te({key:s,direction:E}),fe==null||fe(s,E))};return a.jsx("th",{scope:"col","aria-sort":H,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:c.width},children:g?a.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:r=>{L.current[s]=r},"aria-label":Ha,"aria-keyshortcuts":D?void 0:Fa,disabled:D,onClick:r=>{const B=Date.now()-z.current,_=r.detail===0&&Be.current===s&&z.current>0&&B<=Ge;Y(),!_&&Ne()},onMouseEnter:()=>{D||Re(s)},onMouseLeave:()=>{Re(r=>r===s?null:r),K(r=>r===s?null:r)},onMouseDown:r=>{D||r.button===0&&(q.current=!1,$(B=>B===s?null:B),K(s))},onMouseUp:r=>{r.button===0&&K(B=>B===s?null:B)},onFocus:()=>{if(D){$(r=>r===s?null:r);return}$(r=>Na(L.current[s],q.current)?s:r===s?null:r)},onBlur:()=>{$(r=>r===s?null:r),K(r=>r===s?null:r)},onKeyDown:r=>{var _,qe,$e,Me,Ve;if(q.current=!0,r.altKey||r.ctrlKey||r.metaKey)return;if(r.key==="Home"){const R=I[0];if(!R)return;r.preventDefault(),(_=L.current[R])==null||_.focus();return}if(r.key==="End"){const R=I[I.length-1];if(!R)return;r.preventDefault(),(qe=L.current[R])==null||qe.focus();return}if(r.key==="PageDown"||r.key==="PageUp"){const R=I.indexOf(s);if(R<0)return;const Oe=r.key==="PageDown"?1:-1,N=Math.max(0,Math.min(I.length-1,R+Oe));if(N===R)return;r.preventDefault();const ke=I[N];($e=L.current[ke])==null||$e.focus();return}if(r.key==="ArrowLeft"||r.key==="ArrowRight"){const R=I.indexOf(s);if(R<0)return;const N=(r.currentTarget.ownerDocument.defaultView??window).getComputedStyle(r.currentTarget).direction,ke=(Me=r.currentTarget.closest("[dir]"))==null?void 0:Me.getAttribute("dir"),Ia=(N==="rtl"||N==="ltr"?N:ke==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",Ea=r.key===Ia?1:-1,Ue=Math.max(0,Math.min(I.length-1,R+Ea));if(Ue===R)return;r.preventDefault();const Ca=I[Ue];(Ve=L.current[Ca])==null||Ve.focus();return}if(!Qe(r.key)||Pa(r)||(r.preventDefault(),r.repeat))return;K(s),Be.current=s,z.current=Date.now();const B=r.currentTarget.ownerDocument.defaultView??window;W.current!==null&&(G.current??B).clearTimeout(W.current),G.current=B,W.current=B.setTimeout(()=>{Y()},Ge),Ne()},onKeyUp:r=>{r.altKey||r.ctrlKey||r.metaKey||Qe(r.key)&&K(B=>B===s?null:B)},style:{border:Aa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:We?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Le?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:D?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:D?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Pe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:We?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[c.header,a.jsx("span",{"aria-hidden":"true",children:b==="asc"?"▲":b==="desc"?"▼":"↕"})]}):c.header},s)})})}),a.jsx("tbody",{children:k?a.jsx("tr",{children:a.jsx("td",{colSpan:Fe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:F})})}):P.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Fe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:A})})}):P.map((c,s)=>{const g=c.row,x=String(c.sourceIndex),p=o?o(g,c.sourceIndex):x;return a.jsx("tr",{style:{background:s%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map(b=>{const H=b.render?b.render(g,s,c.sourceIndex):String(g[String(b.key)]??""),j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:b.align??"left"};return b.rowHeader?a.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:H},String(b.key)):a.jsx("td",{style:j,children:H},String(b.key))})},p)})})]})]})}function Je({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Wa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function Qe(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Pa(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Na(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function He(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Ae(t.map(o=>He(o)).filter(o=>o.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=Ae(e["aria-label"]);if(o.length>0)return o}return He(e.children)}function Ae(t){return t.replace(/\s+/g," ").trim()}function De(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(ja,{tone:e,children:t.status})}}];function Xe(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function qa(){const[t,e]=u.useState(!1);return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(d,{columns:S,data:v,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const Xa={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},J={render:()=>a.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id"})})},Q={render:()=>a.jsx(m,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(d,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),i=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(i).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},X={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>a.jsx(Ka,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(d,{columns:t,data:v,rowKey:e=>e.id})}},Z={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},ee={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},te={render:()=>a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await l.tab(),await n(o).toHaveFocus(),await l.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},ae={render:()=>a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),i=e.getByRole("button",{name:"Issue sort descending"});T.mouseDown(i),i.focus(),await l.click(o),await l.tab(),await n(i).toHaveFocus(),await n(i.style.boxShadow).toContain("0 0 0 3px")}},ne={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("table",{name:"Data table"}),i=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(i).toBeDisabled(),await n(i).not.toHaveAttribute("aria-keyshortcuts"),await n(h).not.toHaveAttribute("aria-sort")}},oe={render:()=>a.jsx(qa,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Toggle loading"}),i=e.getByRole("button",{name:"Issue sort descending"});T.mouseDown(i),await l.click(o);const h=e.getByRole("button",{name:"Issue sort descending"});await n(h).toBeDisabled(),await n(h.style.transform).toContain("translateY(0"),await n(h.style.boxShadow).toBe("none")}},re={render:function(){const[e,o]=u.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id",onSortChange:(i,h)=>o(`${i} ${h}`)})]})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Before table"}),i=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByTestId("primary-pointer-sort-state");await l.click(o),await l.tab(),await n(i).toHaveFocus(),await n(i.style.boxShadow).toContain("0 0 0 3px"),T.mouseDown(i,{button:2}),T.mouseUp(i,{button:2}),await n(i.style.boxShadow).toContain("0 0 0 3px"),await n(h).toHaveTextContent("id asc"),await l.click(i),await n(h).toHaveTextContent("id desc")}},se={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{ariaLabel:"Release checklist table",columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ie={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ce={render:()=>a.jsxs(m,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:v,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=y(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},ue={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function $a(){const[t,e]=u.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:Ie,children:t})]}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id",onSortChange:(o,i)=>e(`${o} ${i}`)})]})}const le={render:()=>a.jsx($a,{}),play:async({canvasElement:t})=>{const e=y(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const i=e.getByRole("button",{name:"Issue sort descending"});await n(i).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),i.focus(),await l.keyboard("{ArrowRight}");const h=e.getByRole("button",{name:"Component sort ascending"});await n(h).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(i).toHaveFocus(),await l.keyboard("{End}");const Se=e.getByRole("button",{name:"Status sort ascending"});await n(Se).toHaveFocus(),await l.keyboard("{Home}"),await n(i).toHaveFocus(),await l.keyboard("{PageDown}");const k=e.getByRole("button",{name:"Component sort ascending"});await n(k).toHaveFocus(),await l.keyboard("{PageUp}"),await n(i).toHaveFocus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const F=e.getByRole("button",{name:"Issue sort ascending"}),A=F.closest("th");await n(A).toHaveAttribute("aria-sort","descending"),T.keyDown(F,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","descending"),F.focus(),T.keyDown(F,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","descending"),await l.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const f=e.getByRole("button",{name:"Issue sort descending"});f.focus(),T.keyDown(f,{key:"ArrowRight",ctrlKey:!0}),T.keyDown(f,{key:"ArrowLeft",metaKey:!0}),T.keyDown(f,{key:"End",ctrlKey:!0}),T.keyDown(f,{key:"Home",altKey:!0}),T.keyDown(f,{key:"PageDown",metaKey:!0}),T.keyDown(f,{key:"PageUp",ctrlKey:!0}),await n(f).toHaveFocus(),T.keyDown(f,{key:"Enter",ctrlKey:!0}),T.keyDown(f,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(A).toHaveAttribute("aria-sort","ascending"),await l.keyboard("{Shift>}{Enter}{/Shift}"),await ze(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(A).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await ze(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(A).toHaveAttribute("aria-sort","ascending")})}};function Ma(){const[t,e]=u.useState("id asc");return a.jsxs(m,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:C,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:Ie,children:t})]}),a.jsx(d,{columns:S,data:v,defaultSortKey:"id",onSortChange:(o,i)=>e(`${o} ${i}`)})]})}const de={render:()=>a.jsx(Ma,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:/Issue/}),i=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Xe(i,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),Xe(i,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),i.focus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},me={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:S,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await l.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ye={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},pe={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},we={render:()=>a.jsx(m,{maxWidth:"min(100%, 780px)",children:a.jsx(d,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=y(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ge={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(m,{maxWidth:"min(100%, 620px)",children:a.jsx(d,{columns:t,data:v,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("columnheader",{name:"Component"}),i=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(i).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Va(){const[t,e]=u.useState(!1),o=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:C,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:Ie,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(d,{columns:o,data:v,rowKey:i=>i.id,defaultSortKey:"status"})]})}const be={render:()=>a.jsx(Va,{}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("button",{name:"Load status sortable schema"}),i=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(i).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await l.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(i).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},ha=v.map(t=>({...t,note:""})),Sa=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],ve={render:()=>a.jsx(m,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:Sa,data:ha,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},xe={render:()=>a.jsx(m,{maxWidth:"min(100%, 720px)",children:a.jsx(d,{columns:Sa,data:ha,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=y(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Oa=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],he={render:()=>a.jsxs(m,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:Oa,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=y(t);await l.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Q.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,st,it;X.parameters={...X.parameters,docs:{...(rt=X.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=X.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,ut,lt;Z.parameters={...Z.parameters,docs:{...(ct=Z.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(ut=Z.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,mt,yt;ee.parameters={...ee.parameters,docs:{...(dt=ee.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=ee.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var pt,wt,gt;te.parameters={...te.parameters,docs:{...(pt=te.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=te.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var bt,vt,xt;ae.parameters={...ae.parameters,docs:{...(bt=ae.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(vt=ae.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var ht,St,ft;ne.parameters={...ne.parameters,docs:{...(ht=ne.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(ft=(St=ne.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};var Bt,Rt,Tt;oe.parameters={...oe.parameters,docs:{...(Bt=oe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Tt=(Rt=oe.parameters)==null?void 0:Rt.docs)==null?void 0:Tt.source}}};var kt,Dt,Ht;re.parameters={...re.parameters,docs:{...(kt=re.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Ht=(Dt=re.parameters)==null?void 0:Dt.docs)==null?void 0:Ht.source}}};var At,It,Et;se.parameters={...se.parameters,docs:{...(At=se.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Et=(It=se.parameters)==null?void 0:It.docs)==null?void 0:Et.source}}};var Ct,Kt,jt;ie.parameters={...ie.parameters,docs:{...(Ct=ie.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(jt=(Kt=ie.parameters)==null?void 0:Kt.docs)==null?void 0:jt.source}}};var Ft,Lt,Wt;ce.parameters={...ce.parameters,docs:{...(Ft=ce.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Wt=(Lt=ce.parameters)==null?void 0:Lt.docs)==null?void 0:Wt.source}}};var Pt,Nt,qt;ue.parameters={...ue.parameters,docs:{...(Pt=ue.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=ue.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var $t,Mt,Vt;le.parameters={...le.parameters,docs:{...($t=le.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
    await expect(issueSort).toHaveAttribute("aria-keyshortcuts", "Enter Space Home End PageDown PageUp ArrowLeft ArrowRight");
    issueSort.focus();
    await userEvent.keyboard("{ArrowRight}");
    const componentSortArrow = canvas.getByRole("button", {
      name: "Component sort ascending"
    });
    await expect(componentSortArrow).toHaveFocus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{End}");
    const statusSort = canvas.getByRole("button", {
      name: "Status sort ascending"
    });
    await expect(statusSort).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{PageDown}");
    const componentSortPage = canvas.getByRole("button", {
      name: "Component sort ascending"
    });
    await expect(componentSortPage).toHaveFocus();
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
      key: "ArrowRight",
      ctrlKey: true
    });
    fireEvent.keyDown(issueSortDesc, {
      key: "ArrowLeft",
      metaKey: true
    });
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
}`,...(Vt=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};var Ot,Ut,zt;de.parameters={...de.parameters,docs:{...(Ot=de.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(zt=(Ut=de.parameters)==null?void 0:Ut.docs)==null?void 0:zt.source}}};var Gt,Yt,_t;me.parameters={...me.parameters,docs:{...(Gt=me.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(_t=(Yt=me.parameters)==null?void 0:Yt.docs)==null?void 0:_t.source}}};var Jt,Qt,Xt;ye.parameters={...ye.parameters,docs:{...(Jt=ye.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=ye.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,ea,ta;pe.parameters={...pe.parameters,docs:{...(Zt=pe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ta=(ea=pe.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,oa;we.parameters={...we.parameters,docs:{...(aa=we.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(oa=(na=we.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,sa,ia;ge.parameters={...ge.parameters,docs:{...(ra=ge.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(sa=ge.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var ca,ua,la;be.parameters={...be.parameters,docs:{...(ca=be.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(la=(ua=be.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var da,ma,ya;ve.parameters={...ve.parameters,docs:{...(da=ve.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(ma=ve.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};var pa,wa,ga;xe.parameters={...xe.parameters,docs:{...(pa=xe.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ga=(wa=xe.parameters)==null?void 0:wa.docs)==null?void 0:ga.source}}};var ba,va,xa;he.parameters={...he.parameters,docs:{...(ba=he.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(xa=(va=he.parameters)==null?void 0:va.docs)==null?void 0:xa.source}}};const Za=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ie as AccessibleNameFallback,ce as AccessibleNameLabelledByHeading,se as AccessibleNameWithoutCaption,we as AriaLabelHeaderAutoSortLabel,be as DeferredColumnsDefaultSortRecovery,Q as DescendingDefaultSortDirection,Z as EmptyState,ve as FallbackRowKeyStability,de as ImeCompositionGuard,ge as InvalidDefaultSortKeyFallback,ae as KeyboardFocusRingAfterPointer,te as KeyboardReachableScrollContainer,oe as LoadingDisablesResetsSortVisualState,ne as LoadingState,me as LocalizedSortLabels,re as PrimaryPointerOnlySortPress,J as ReleaseChecklist,he as RenderIndexSemantics,pe as RichTextHeaderAutoSortLabel,ue as RowHeaderSemantics,ee as SingleRowSortDisabled,ye as SortLabelForCustomHeader,le as SortTelemetry,xe as SourceIndexRowKeyStability,X as WithRowAction,Za as __namedExportsOrder,Xa as default};
