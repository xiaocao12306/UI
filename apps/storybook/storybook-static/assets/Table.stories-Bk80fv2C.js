import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as Zn}from"./Button-DmF53JnK.js";import{r as u}from"./index-BWu4c2F4.js";import{B as ea}from"./Badge-ZJmMstsz.js";import{within as b,expect as n,userEvent as l,fireEvent as h,waitFor as Ze}from"./index-DgAF9SIF.js";import{S as w,s as E,a as Le}from"./storyShowcase-Bw5VyCj0.js";const Pn="Enter Space",ta=`${Pn} Home End PageDown PageUp ArrowLeft ArrowRight`,na=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),et=400;function tt(t,e,o){if(!e)return null;const r=t.find(S=>String(S.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function nt(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=Fe(je(t.header));return o.length>0?o:e}function y({columns:t,data:e,rowKey:o,caption:r,ariaLabel:S,ariaLabelledBy:Te,loading:T=!1,loadingContent:L="Loading data...",emptyContent:C="No data available.",defaultSortKey:B,defaultSortDirection:O="asc",getSortAriaLabel:qn=at,getSortStatusText:We=aa,onSortChange:De}){const U=Ke(Te),Pe=U?void 0:Ke(S,r?void 0:"Data table"),W=u.useRef({}),Ne=u.useRef(null),He=u.useRef(null),z=u.useRef(0),P=u.useRef(null),G=u.useRef(null),q=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[Mn,Ae]=u.useState(null),[Vn,j]=u.useState(null),[On,M]=u.useState(null);u.useEffect(()=>{var c;const i=((c=Ne.current)==null?void 0:c.ownerDocument)??document,d=p=>{p.metaKey||p.altKey||p.ctrlKey||(q.current=!0)},m=p=>{"button"in p&&typeof p.button=="number"&&p.button!==0||"ctrlKey"in p&&p.ctrlKey||(q.current=!1)};return i.addEventListener("keydown",d,!0),i.addEventListener("pointerdown",m,!0),i.addEventListener("mousedown",m,!0),i.addEventListener("touchstart",m,!0),()=>{i.removeEventListener("keydown",d,!0),i.removeEventListener("pointerdown",m,!0),i.removeEventListener("mousedown",m,!0),i.removeEventListener("touchstart",m,!0)}},[]);const _=u.useCallback(()=>{He.current=null,z.current=0,P.current!==null&&((G.current??window).clearTimeout(P.current),P.current=null),G.current=null},[]);u.useEffect(()=>()=>{_()},[_]);const[v,Ie]=u.useState(()=>tt(t,B,O)),Y=u.useMemo(()=>{const i=new Map;return t.map(d=>{const m=String(d.key),c=i.get(m)??0;return i.set(m,c+1),c===0?m:`${m}__duplicate-${c}`})},[t]),A=u.useMemo(()=>T||e.length<=1?[]:t.reduce((i,d,m)=>(d.sortable&&i.push(Y[m]??`${String(d.key)}__index-${m}`),i),[]),[t,e.length,T,Y]);u.useEffect(()=>{if(!v)return;const i=t.find(d=>String(d.key)===v.key);i!=null&&i.sortable||Ie(null)},[t,v]),u.useEffect(()=>{if(v)return;const i=tt(t,B,O);i&&Ie(i)},[t,O,B,v]);const Ee=u.useMemo(()=>e.map((i,d)=>String(o?o(i,d):d)),[e,o]),Un=u.useMemo(()=>{const i=new Map;return Ee.map((d,m)=>{const c=i.get(d)??0;return i.set(d,c+1),c===0?d:`${d}__dup-${m}`})},[Ee]);u.useEffect(()=>{},[o,Ee]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const N=u.useMemo(()=>{const i=e.map((c,p)=>({row:c,sourceIndex:p}));if(!v)return i;const d=t.find(c=>String(c.key)===v.key);if(!(d!=null&&d.sortable))return i;const m=d.sortAccessor??(c=>{const p=c[String(d.key)];return p instanceof Date||typeof p=="number"||typeof p=="string"?p:String(p??"")});return i.sort((c,p)=>{const f=m(c.row),D=m(p.row);if(typeof f=="string"&&typeof D=="string"){const K=na.compare(f,D);return K!==0?v.direction==="asc"?K:-K:c.sourceIndex-p.sourceIndex}const I=f instanceof Date?f.getTime():f,F=D instanceof Date?D.getTime():D;return I<F?v.direction==="asc"?-1:1:I>F?v.direction==="asc"?1:-1:c.sourceIndex-p.sourceIndex})},[t,e,v]),$e=u.useMemo(()=>{if(T||N.length<=1||!v)return"";const i=t.find(m=>String(m.key)===v.key);if(!(i!=null&&i.sortable))return"";const d=nt(i,String(i.key));return We({columnKey:v.key,columnHeader:d,direction:v.direction})},[t,We,T,v,N.length]),V=!T&&N.length>1&&t.some(i=>i.sortable),qe=Math.max(t.length,1);return u.useEffect(()=>{V||(Ae(null),j(null),M(null))},[V]),a.jsxs("div",{ref:Ne,"data-aurora-table-scroll-container":"",tabIndex:V?void 0:0,"aria-label":V||U?void 0:Pe??"Data table scroll container","aria-labelledby":V?void 0:U,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[$e?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:$e}):null,a.jsxs("table",{"aria-label":Pe,"aria-labelledby":U,"aria-busy":T||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map((i,d)=>{const m=String(i.key),c=Y[d]??`${m}__index-${d}`,p=!!i.sortable,f=N.length>1,D=p&&(v==null?void 0:v.key)===m?v.direction:void 0,I=!T&&f?D:void 0,F=I?I==="asc"?"ascending":"descending":void 0,K=i.align??"left",Me=nt(i,m),J=D==="asc"?"desc":"asc",zn=qn({columnKey:m,columnHeader:Me,nextDirection:J}),Gn=Ke(zn,at({columnHeader:Me,nextDirection:J})),H=T||!f,_n=H?void 0:A.length>1?ta:Pn,Ve=!H&&Mn===c,Oe=!H&&Vn===c,Ue=!H&&On===c,Yn=Ve||Ue,ze=()=>{H||(Ie({key:m,direction:J}),De==null||De(m,J))};return a.jsx("th",{scope:"col","aria-sort":F,style:{textAlign:K,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:p?a.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:s=>{W.current[c]=s},"aria-label":Gn,"aria-keyshortcuts":_n,disabled:H,onClick:s=>{const R=Date.now()-z.current,Q=s.detail===0&&He.current===c&&z.current>0&&R<=et;_(),!Q&&ze()},onMouseEnter:()=>{H||Ae(c)},onMouseLeave:()=>{Ae(s=>s===c?null:s),j(s=>s===c?null:s)},onMouseDown:s=>{H||s.button===0&&(q.current=!1,M(R=>R===c?null:R),j(c))},onMouseUp:s=>{s.button===0&&j(R=>R===c?null:R)},onFocus:()=>{if(H){M(s=>s===c?null:s);return}M(s=>ra(W.current[c],q.current)?c:s===c?null:s)},onBlur:()=>{M(s=>s===c?null:s),j(s=>s===c?null:s)},onKeyDown:s=>{var Q,Ge,_e,Ye,Je;if(q.current=!0,s.altKey||s.ctrlKey||s.metaKey)return;if(s.key==="Home"){const k=A[0];if(!k)return;s.preventDefault(),(Q=W.current[k])==null||Q.focus();return}if(s.key==="End"){const k=A[A.length-1];if(!k)return;s.preventDefault(),(Ge=W.current[k])==null||Ge.focus();return}if(s.key==="PageDown"||s.key==="PageUp"){const k=A.indexOf(c);if(k<0)return;const Qe=s.key==="PageDown"?1:-1,$=Math.max(0,Math.min(A.length-1,k+Qe));if($===k)return;s.preventDefault();const Ce=A[$];(_e=W.current[Ce])==null||_e.focus();return}if(s.key==="ArrowLeft"||s.key==="ArrowRight"){const k=A.indexOf(c);if(k<0)return;const $=(s.currentTarget.ownerDocument.defaultView??window).getComputedStyle(s.currentTarget).direction,Ce=(Ye=s.currentTarget.closest("[dir]"))==null?void 0:Ye.getAttribute("dir"),Jn=($==="rtl"||$==="ltr"?$:Ce==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",Qn=s.key===Jn?1:-1,Xe=Math.max(0,Math.min(A.length-1,k+Qn));if(Xe===k)return;s.preventDefault();const Xn=A[Xe];(Je=W.current[Xn])==null||Je.focus();return}if(!ot(s.key)||oa(s)||(s.preventDefault(),s.repeat))return;j(c),He.current=c,z.current=Date.now();const R=s.currentTarget.ownerDocument.defaultView??window;P.current!==null&&(G.current??R).clearTimeout(P.current),G.current=R,P.current=R.setTimeout(()=>{_()},et),ze()},onKeyUp:s=>{s.altKey||s.ctrlKey||s.metaKey||ot(s.key)&&j(R=>R===c?null:R)},style:{border:Yn?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Oe?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Ve?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:H?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:H?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Ue?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Oe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:I==="asc"?"▲":I==="desc"?"▼":"↕"})]}):i.header},c)})})}),a.jsx("tbody",{children:T?a.jsx("tr",{children:a.jsx("td",{colSpan:qe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:L})})}):N.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:qe,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:C})})}):N.map((i,d)=>{const m=i.row,c=String(i.sourceIndex),p=Un[i.sourceIndex]??c;return a.jsx("tr",{style:{background:d%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((f,D)=>{const I=f.render?f.render(m,d,i.sourceIndex):String(m[String(f.key)]??""),F=Y[D]??`${String(f.key)}__index-${D}`,K={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:f.align??"left"};return f.rowHeader?a.jsx("th",{scope:"row",style:{...K,fontWeight:"var(--aurora-font-weight-medium)"},children:I},F):a.jsx("td",{style:K,children:I},F)})},p)})})]})]})}function at({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function aa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function ot(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function oa(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ra(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function je(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Fe(t.map(o=>je(o)).filter(o=>o.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=Fe(e["aria-label"]);if(o.length>0)return o}return je(e.children)}function Fe(t){return t.replace(/\s+/g," ").trim()}function Ke(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}y.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],x=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(ea,{tone:e,children:t.status})}}];function rt(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function st(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function sa(){const[t,e]=u.useState(!1);return a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(y,{columns:x,data:g,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const va={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},X={render:()=>a.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(y,{caption:"Release readiness board",columns:x,data:g,rowKey:t=>t.id,defaultSortKey:"id"})})},Z={render:()=>a.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(y,{caption:"Release readiness board",columns:x,data:g,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},ee={render:()=>{const t=[...x,{key:"action",header:"Action",width:160,render:e=>a.jsx(Zn,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(y,{columns:t,data:g,rowKey:e=>e.id})}},te={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:x,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},ne={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:x,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},ae={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await n(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},oe={render:()=>a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await l.tab(),await n(o).toHaveFocus(),await l.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},re={render:()=>a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:E,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(y,{columns:x,data:g,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});h.mouseDown(r),r.focus(),await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},se={render:()=>a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:E,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),a.jsx(y,{columns:x,data:g,defaultSortKey:"id"}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});h.mouseDown(o),o.focus(),await l.click(r),await l.tab({shift:!0}),await n(o).toHaveFocus(),await n(o.style.boxShadow).toContain("0 0 0 3px")}},ie={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:x,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),S=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(S).not.toHaveAttribute("aria-sort")}},ce={render:()=>a.jsx(sa,{}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});h.mouseDown(r),await l.click(o);const S=e.getByRole("button",{name:"Issue sort descending"});await n(S).toBeDisabled(),await n(S.style.transform).toContain("translateY(0"),await n(S.style.boxShadow).toBe("none")}},ue={render:function(){const[e,o]=u.useState("id asc");return a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:E,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(y,{columns:x,data:g,defaultSortKey:"id",onSortChange:(r,S)=>o(`${r} ${S}`)})]})},play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),S=e.getByTestId("primary-pointer-sort-state");await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),h.mouseDown(r,{button:2}),h.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(S).toHaveTextContent("id asc"),await l.click(r),await n(S).toHaveTextContent("id desc")}},le={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{ariaLabel:"Release checklist table",columns:x,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},de={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:x,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},me={render:()=>a.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(y,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:x,data:g,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=b(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},ye={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function ia(){const[t,e]=u.useState("id asc");return a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:E,children:["Active sort: ",a.jsx("strong",{style:Le,children:t})]}),a.jsx(y,{columns:x,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const pe={render:()=>a.jsx(ia,{}),play:async({canvasElement:t})=>{const e=b(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await l.keyboard("{ArrowRight}");const S=e.getByRole("button",{name:"Component sort ascending"});await n(S).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{End}");const Te=e.getByRole("button",{name:"Status sort ascending"});await n(Te).toHaveFocus(),await l.keyboard("{Home}"),await n(r).toHaveFocus(),await l.keyboard("{PageDown}");const T=e.getByRole("button",{name:"Component sort ascending"});await n(T).toHaveFocus(),await l.keyboard("{PageUp}"),await n(r).toHaveFocus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const L=e.getByRole("button",{name:"Issue sort ascending"}),C=L.closest("th");await n(C).toHaveAttribute("aria-sort","descending"),h.keyDown(L,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(C).toHaveAttribute("aria-sort","descending"),L.focus(),h.keyDown(L,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(C).toHaveAttribute("aria-sort","descending"),await l.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(C).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const B=e.getByRole("button",{name:"Issue sort descending"});B.focus(),h.keyDown(B,{key:"ArrowRight",ctrlKey:!0}),h.keyDown(B,{key:"ArrowLeft",metaKey:!0}),h.keyDown(B,{key:"End",ctrlKey:!0}),h.keyDown(B,{key:"Home",altKey:!0}),h.keyDown(B,{key:"PageDown",metaKey:!0}),h.keyDown(B,{key:"PageUp",ctrlKey:!0}),await n(B).toHaveFocus(),h.keyDown(B,{key:"Enter",ctrlKey:!0}),h.keyDown(B,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(C).toHaveAttribute("aria-sort","ascending"),await l.keyboard("{Shift>}{Enter}{/Shift}"),await Ze(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(C).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await Ze(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(C).toHaveAttribute("aria-sort","ascending")})}},we={render:()=>a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:E,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),a.jsx("div",{dir:"rtl",children:a.jsx(y,{columns:x,data:g,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});o.focus(),h.keyDown(o,{key:"ArrowLeft",ctrlKey:!0}),h.keyDown(o,{key:"ArrowRight",metaKey:!0}),h.keyDown(o,{key:"ArrowLeft",altKey:!0}),await n(o).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus()}};function ca(){const[t,e]=u.useState("id asc");return a.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:E,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:E,children:["Active sort: ",a.jsx("strong",{style:Le,children:t})]}),a.jsx(y,{columns:x,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const be={render:()=>a.jsx(ca,{}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),rt(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),rt(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),st(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),st(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},ge={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:x,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await l.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},ve={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},he={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},xe={render:()=>a.jsx(w,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Se={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(w,{maxWidth:"min(100%, 620px)",children:a.jsx(y,{columns:t,data:g,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function ua(){const[t,e]=u.useState(!1),o=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:E,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:E,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:Le,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(y,{columns:o,data:g,rowKey:r=>r.id,defaultSortKey:"status"})]})}const fe={render:()=>a.jsx(ua,{}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await l.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Nn=g.map(t=>({...t,note:""})),$n=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Be={render:()=>a.jsx(w,{maxWidth:"min(100%, 720px)",children:a.jsx(y,{columns:$n,data:Nn,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Re={render:()=>a.jsx(w,{maxWidth:"min(100%, 720px)",children:a.jsx(y,{columns:$n,data:Nn,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},la=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],ke={render:()=>a.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:E,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(y,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:la,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=b(t);await l.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var it,ct,ut;X.parameters={...X.parameters,docs:{...(it=X.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(ut=(ct=X.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var lt,dt,mt;Z.parameters={...Z.parameters,docs:{...(lt=Z.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(mt=(dt=Z.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var yt,pt,wt;ee.parameters={...ee.parameters,docs:{...(yt=ee.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(wt=(pt=ee.parameters)==null?void 0:pt.docs)==null?void 0:wt.source}}};var bt,gt,vt;te.parameters={...te.parameters,docs:{...(bt=te.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=te.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var ht,xt,St;ne.parameters={...ne.parameters,docs:{...(ht=ne.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(St=(xt=ne.parameters)==null?void 0:xt.docs)==null?void 0:St.source}}};var ft,Bt,Rt;ae.parameters={...ae.parameters,docs:{...(ft=ae.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "id",
      header: "Issue",
      sortable: true,
      rowHeader: true
    }, {
      key: "component",
      header: "Component"
    }, {
      key: "owner",
      header: "Owner"
    }, {
      key: "status",
      header: "Status"
    }]} data={rows} defaultSortKey="id" rowKey={row => row.id} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSortButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(issueSortButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    issueSortButton.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSortButton).toHaveFocus();
    await expect(canvas.getByRole("columnheader", {
      name: /Issue/
    })).toHaveAttribute("aria-sort", "ascending");
  }
}`,...(Rt=(Bt=ae.parameters)==null?void 0:Bt.docs)==null?void 0:Rt.source}}};var kt,Tt,Dt;oe.parameters={...oe.parameters,docs:{...(kt=oe.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Dt=(Tt=oe.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var Ht,At,It;re.parameters={...re.parameters,docs:{...(Ht=re.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(It=(At=re.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Et,Ct,Kt;se.parameters={...se.parameters,docs:{...(Et=se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab)
        restores focus-visible ring for the sortable header.
      </p>
      <Table columns={columns} data={rows} defaultSortKey="id" />
      <button type="button">After table</button>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const statusSortButton = canvas.getByRole("button", {
      name: "Status sort ascending"
    });
    const afterButton = canvas.getByRole("button", {
      name: "After table"
    });
    fireEvent.mouseDown(statusSortButton);
    statusSortButton.focus();
    await userEvent.click(afterButton);
    await userEvent.tab({
      shift: true
    });
    await expect(statusSortButton).toHaveFocus();
    await expect(statusSortButton.style.boxShadow).toContain("0 0 0 3px");
  }
}`,...(Kt=(Ct=se.parameters)==null?void 0:Ct.docs)==null?void 0:Kt.source}}};var jt,Ft,Lt;ie.parameters={...ie.parameters,docs:{...(jt=ie.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Lt=(Ft=ie.parameters)==null?void 0:Ft.docs)==null?void 0:Lt.source}}};var Wt,Pt,Nt;ce.parameters={...ce.parameters,docs:{...(Wt=ce.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Nt=(Pt=ce.parameters)==null?void 0:Pt.docs)==null?void 0:Nt.source}}};var $t,qt,Mt;ue.parameters={...ue.parameters,docs:{...($t=ue.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Mt=(qt=ue.parameters)==null?void 0:qt.docs)==null?void 0:Mt.source}}};var Vt,Ot,Ut;le.parameters={...le.parameters,docs:{...(Vt=le.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ut=(Ot=le.parameters)==null?void 0:Ot.docs)==null?void 0:Ut.source}}};var zt,Gt,_t;de.parameters={...de.parameters,docs:{...(zt=de.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(_t=(Gt=de.parameters)==null?void 0:Gt.docs)==null?void 0:_t.source}}};var Yt,Jt,Qt;me.parameters={...me.parameters,docs:{...(Yt=me.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=me.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,en;ye.parameters={...ye.parameters,docs:{...(Xt=ye.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=ye.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,an;pe.parameters={...pe.parameters,docs:{...(tn=pe.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(an=(nn=pe.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,rn,sn;we.parameters={...we.parameters,docs:{...(on=we.parameters)==null?void 0:on.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={8}>
      <p style={storyMutedTextStyle}>
        In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order.
      </p>
      <div dir="rtl">
        <Table columns={columns} data={rows} defaultSortKey="id" />
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    const componentSort = canvas.getByRole("button", {
      name: "Component sort ascending"
    });
    issueSort.focus();
    fireEvent.keyDown(issueSort, {
      key: "ArrowLeft",
      ctrlKey: true
    });
    fireEvent.keyDown(issueSort, {
      key: "ArrowRight",
      metaKey: true
    });
    fireEvent.keyDown(issueSort, {
      key: "ArrowLeft",
      altKey: true
    });
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSort).toHaveFocus();
    await userEvent.keyboard("{ArrowLeft}");
    await expect(componentSort).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(issueSort).toHaveFocus();
  }
}`,...(sn=(rn=we.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var cn,un,ln;be.parameters={...be.parameters,docs:{...(cn=be.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
    dispatchLegacyImeKeyDown(issueSortDesc, "Enter");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    dispatchLegacyImeKeyDown(issueSortDesc, "Space");
    await expect(canvas.getByText("id asc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "ascending");
    issueSortDesc.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByText("id desc")).toBeInTheDocument();
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
  }
}`,...(ln=(un=be.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var dn,mn,yn;ge.parameters={...ge.parameters,docs:{...(dn=ge.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(yn=(mn=ge.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};var pn,wn,bn;ve.parameters={...ve.parameters,docs:{...(pn=ve.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(bn=(wn=ve.parameters)==null?void 0:wn.docs)==null?void 0:bn.source}}};var gn,vn,hn;he.parameters={...he.parameters,docs:{...(gn=he.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(hn=(vn=he.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var xn,Sn,fn;xe.parameters={...xe.parameters,docs:{...(xn=xe.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(fn=(Sn=xe.parameters)==null?void 0:Sn.docs)==null?void 0:fn.source}}};var Bn,Rn,kn;Se.parameters={...Se.parameters,docs:{...(Bn=Se.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(kn=(Rn=Se.parameters)==null?void 0:Rn.docs)==null?void 0:kn.source}}};var Tn,Dn,Hn;fe.parameters={...fe.parameters,docs:{...(Tn=fe.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Hn=(Dn=fe.parameters)==null?void 0:Dn.docs)==null?void 0:Hn.source}}};var An,In,En;Be.parameters={...Be.parameters,docs:{...(An=Be.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(En=(In=Be.parameters)==null?void 0:In.docs)==null?void 0:En.source}}};var Cn,Kn,jn;Re.parameters={...Re.parameters,docs:{...(Cn=Re.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(jn=(Kn=Re.parameters)==null?void 0:Kn.docs)==null?void 0:jn.source}}};var Fn,Ln,Wn;ke.parameters={...ke.parameters,docs:{...(Fn=ke.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
}`,...(Wn=(Ln=ke.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};const ha=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{de as AccessibleNameFallback,me as AccessibleNameLabelledByHeading,le as AccessibleNameWithoutCaption,xe as AriaLabelHeaderAutoSortLabel,fe as DeferredColumnsDefaultSortRecovery,Z as DescendingDefaultSortDirection,te as EmptyState,Be as FallbackRowKeyStability,be as ImeCompositionGuard,Se as InvalidDefaultSortKeyFallback,re as KeyboardFocusRingAfterPointer,se as KeyboardFocusRingShiftTabReentry,oe as KeyboardReachableScrollContainer,ce as LoadingDisablesResetsSortVisualState,ie as LoadingState,ge as LocalizedSortLabels,ue as PrimaryPointerOnlySortPress,X as ReleaseChecklist,ke as RenderIndexSemantics,he as RichTextHeaderAutoSortLabel,ye as RowHeaderSemantics,we as RtlArrowNavigation,ne as SingleRowSortDisabled,ae as SingleSortableColumnShortcutHints,ve as SortLabelForCustomHeader,pe as SortTelemetry,Re as SourceIndexRowKeyStability,ee as WithRowAction,ha as __namedExportsOrder,va as default};
