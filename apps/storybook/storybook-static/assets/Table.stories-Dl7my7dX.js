import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as ea}from"./Button-Bcz0jJFO.js";import{r as u}from"./index-BWu4c2F4.js";import{B as ta}from"./Badge-ZJmMstsz.js";import{within as b,expect as n,userEvent as l,fireEvent as x,waitFor as V}from"./index-DgAF9SIF.js";import{S as p,s as C,a as Pe}from"./storyShowcase-Bw5VyCj0.js";const Nn="Enter Space",na=`${Nn} Home End PageDown PageUp ArrowLeft ArrowRight`,aa=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),tt=400;function nt(t,e,o){if(!e)return null;const r=t.find(S=>String(S.key)===e);return r!=null&&r.sortable?{key:e,direction:o}:null}function at(t,e){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const o=We(Le(t.header));return o.length>0?o:e}function y({columns:t,data:e,rowKey:o,caption:r,ariaLabel:S,ariaLabelledBy:De,loading:D=!1,loadingContent:L="Loading data...",emptyContent:K="No data available.",defaultSortKey:R,defaultSortDirection:U="asc",getSortAriaLabel:Mn=ot,getSortStatusText:Ne=oa,onSortChange:He}){const z=Fe(De),$e=z?void 0:Fe(S,r?void 0:"Data table"),W=u.useRef({}),qe=u.useRef(null),Ae=u.useRef(null),G=u.useRef(0),P=u.useRef(null),_=u.useRef(null),N=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[Vn,Ie]=u.useState(null),[On,A]=u.useState(null),[Un,$]=u.useState(null);u.useEffect(()=>{var c;const i=((c=qe.current)==null?void 0:c.ownerDocument)??document,d=w=>{w.metaKey||w.altKey||w.ctrlKey||(N.current=!0)},m=w=>{"button"in w&&!je(w.button)||"ctrlKey"in w&&w.ctrlKey||(N.current=!1)};return i.addEventListener("keydown",d,!0),i.addEventListener("pointerdown",m,!0),i.addEventListener("mousedown",m,!0),i.addEventListener("touchstart",m,!0),()=>{i.removeEventListener("keydown",d,!0),i.removeEventListener("pointerdown",m,!0),i.removeEventListener("mousedown",m,!0),i.removeEventListener("touchstart",m,!0)}},[]);const Y=u.useCallback(()=>{Ae.current=null,G.current=0,P.current!==null&&((_.current??window).clearTimeout(P.current),P.current=null),_.current=null},[]);u.useEffect(()=>()=>{Y()},[Y]);const[v,Ee]=u.useState(()=>nt(t,R,U)),J=u.useMemo(()=>{const i=new Map;return t.map(d=>{const m=String(d.key),c=i.get(m)??0;return i.set(m,c+1),c===0?m:`${m}__duplicate-${c}`})},[t]),I=u.useMemo(()=>D||e.length<=1?[]:t.reduce((i,d,m)=>(d.sortable&&i.push(J[m]??`${String(d.key)}__index-${m}`),i),[]),[t,e.length,D,J]);u.useEffect(()=>{if(!v)return;const i=t.find(d=>String(d.key)===v.key);i!=null&&i.sortable||Ee(null)},[t,v]),u.useEffect(()=>{if(v)return;const i=nt(t,R,U);i&&Ee(i)},[t,U,R,v]);const Ce=u.useMemo(()=>e.map((i,d)=>String(o?o(i,d):d)),[e,o]),zn=u.useMemo(()=>{const i=new Map;return Ce.map((d,m)=>{const c=i.get(d)??0;return i.set(d,c+1),c===0?d:`${d}__dup-${m}`})},[Ce]);u.useEffect(()=>{},[o,Ce]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const q=u.useMemo(()=>{const i=e.map((c,w)=>({row:c,sourceIndex:w}));if(!v)return i;const d=t.find(c=>String(c.key)===v.key);if(!(d!=null&&d.sortable))return i;const m=d.sortAccessor??(c=>{const w=c[String(d.key)];return w instanceof Date||typeof w=="number"||typeof w=="string"?w:String(w??"")});return i.sort((c,w)=>{const B=m(c.row),H=m(w.row);if(typeof B=="string"&&typeof H=="string"){const j=aa.compare(B,H);return j!==0?v.direction==="asc"?j:-j:c.sourceIndex-w.sourceIndex}const E=B instanceof Date?B.getTime():B,F=H instanceof Date?H.getTime():H;return E<F?v.direction==="asc"?-1:1:E>F?v.direction==="asc"?1:-1:c.sourceIndex-w.sourceIndex})},[t,e,v]),Me=u.useMemo(()=>{if(D||q.length<=1||!v)return"";const i=t.find(m=>String(m.key)===v.key);if(!(i!=null&&i.sortable))return"";const d=at(i,String(i.key));return Ne({columnKey:v.key,columnHeader:d,direction:v.direction})},[t,Ne,D,v,q.length]),O=!D&&q.length>1&&t.some(i=>i.sortable),Ve=Math.max(t.length,1);return u.useEffect(()=>{O||(Ie(null),A(null),$(null))},[O]),a.jsxs("div",{ref:qe,"data-aurora-table-scroll-container":"",tabIndex:O?void 0:0,"aria-label":O||z?void 0:$e??"Data table scroll container","aria-labelledby":O?void 0:z,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[Me?a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Me}):null,a.jsxs("table",{"aria-label":$e,"aria-labelledby":z,"aria-busy":D||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[r?a.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,a.jsx("thead",{children:a.jsx("tr",{children:t.map((i,d)=>{const m=String(i.key),c=J[d]??`${m}__index-${d}`,w=!!i.sortable,B=q.length>1,H=w&&(v==null?void 0:v.key)===m?v.direction:void 0,E=!D&&B?H:void 0,F=E?E==="asc"?"ascending":"descending":void 0,j=i.align??"left",Oe=at(i,m),Q=H==="asc"?"desc":"asc",Gn=Mn({columnKey:m,columnHeader:Oe,nextDirection:Q}),_n=Fe(Gn,ot({columnHeader:Oe,nextDirection:Q})),T=D||!B,Yn=T?void 0:I.length>1?na:Nn,Ue=!T&&Vn===c,ze=!T&&On===c,Ge=!T&&Un===c,Jn=Ue||Ge,_e=()=>{T||(Ee({key:m,direction:Q}),He==null||He(m,Q))};return a.jsx("th",{scope:"col","aria-sort":F,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:i.width},children:w?a.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:s=>{W.current[c]=s},"aria-label":_n,"aria-keyshortcuts":Yn,disabled:T,onClick:s=>{const h=Date.now()-G.current,X=s.detail===0&&Ae.current===c&&G.current>0&&h<=tt;Y(),!X&&_e()},onMouseEnter:()=>{T||Ie(c)},onMouseLeave:()=>{Ie(s=>s===c?null:s),A(s=>s===c?null:s)},onPointerDown:s=>{T||s.ctrlKey||je(s.button)&&(N.current=!1,$(h=>h===c?null:h),A(c))},onPointerUp:s=>{je(s.button)&&A(h=>h===c?null:h)},onMouseDown:s=>{T||s.button!==0||s.ctrlKey||(N.current=!1,$(h=>h===c?null:h),A(c))},onMouseUp:s=>{s.button===0&&A(h=>h===c?null:h)},onPointerCancel:()=>{A(s=>s===c?null:s)},onFocus:()=>{if(T){$(s=>s===c?null:s);return}$(s=>sa(W.current[c],N.current)?c:s===c?null:s)},onBlur:()=>{$(s=>s===c?null:s),A(s=>s===c?null:s)},onKeyDown:s=>{var X,Ye,Je,Qe,Xe;if(N.current=!0,s.altKey||s.ctrlKey||s.metaKey)return;if(s.key==="Home"){const k=I[0];if(!k)return;s.preventDefault(),(X=W.current[k])==null||X.focus();return}if(s.key==="End"){const k=I[I.length-1];if(!k)return;s.preventDefault(),(Ye=W.current[k])==null||Ye.focus();return}if(s.key==="PageDown"||s.key==="PageUp"){const k=I.indexOf(c);if(k<0)return;const Ze=s.key==="PageDown"?1:-1,M=Math.max(0,Math.min(I.length-1,k+Ze));if(M===k)return;s.preventDefault();const Ke=I[M];(Je=W.current[Ke])==null||Je.focus();return}if(s.key==="ArrowLeft"||s.key==="ArrowRight"){const k=I.indexOf(c);if(k<0)return;const M=(s.currentTarget.ownerDocument.defaultView??window).getComputedStyle(s.currentTarget).direction,Ke=(Qe=s.currentTarget.closest("[dir]"))==null?void 0:Qe.getAttribute("dir"),Qn=(M==="rtl"||M==="ltr"?M:Ke==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",Xn=s.key===Qn?1:-1,et=Math.max(0,Math.min(I.length-1,k+Xn));if(et===k)return;s.preventDefault();const Zn=I[et];(Xe=W.current[Zn])==null||Xe.focus();return}if(!rt(s.key)||ra(s)||(s.preventDefault(),s.repeat))return;A(c),Ae.current=c,G.current=Date.now();const h=s.currentTarget.ownerDocument.defaultView??window;P.current!==null&&(_.current??h).clearTimeout(P.current),_.current=h,P.current=h.setTimeout(()=>{Y()},tt),_e()},onKeyUp:s=>{s.altKey||s.ctrlKey||s.metaKey||rt(s.key)&&A(h=>h===c?null:h)},style:{border:Jn?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ze?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":Ue?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:T?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:T?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Ge?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ze?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,a.jsx("span",{"aria-hidden":"true",children:E==="asc"?"▲":E==="desc"?"▼":"↕"})]}):i.header},c)})})}),a.jsx("tbody",{children:D?a.jsx("tr",{children:a.jsx("td",{colSpan:Ve,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:L})})}):q.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:Ve,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:a.jsx("span",{role:"status","aria-live":"polite",children:K})})}):q.map((i,d)=>{const m=i.row,c=String(i.sourceIndex),w=zn[i.sourceIndex]??c;return a.jsx("tr",{style:{background:d%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((B,H)=>{const E=B.render?B.render(m,d,i.sourceIndex):String(m[String(B.key)]??""),F=J[H]??`${String(B.key)}__index-${H}`,j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:B.align??"left"};return B.rowHeader?a.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:E},F):a.jsx("td",{style:j,children:E},F)})},w)})})]})]})}function ot({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function oa({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function rt(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function ra(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function je(t){return typeof t!="number"||t<=0}function sa(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function Le(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return We(t.map(o=>Le(o)).filter(o=>o.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const o=We(e["aria-label"]);if(o.length>0)return o}return Le(e.children)}function We(t){return t.replace(/\s+/g," ").trim()}function Fe(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}y.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],f=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return a.jsx(ta,{tone:e,children:t.status})}}];function st(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"isComposing",{value:!0}),Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function it(t,e){const o=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(o,"keyCode",{value:229}),t.dispatchEvent(o)}function ia(){const[t,e]=u.useState(!1);return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:"Toggle loading"}),a.jsx(y,{columns:f,data:g,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const ha={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},Z={render:()=>a.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(y,{caption:"Release readiness board",columns:f,data:g,rowKey:t=>t.id,defaultSortKey:"id"})})},ee={render:()=>a.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:a.jsx(y,{caption:"Release readiness board",columns:f,data:g,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await n(o).toHaveAttribute("aria-sort","descending"),await n(r).toHaveTextContent("DLG-210"),await n(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},te={render:()=>{const t=[...f,{key:"action",header:"Action",width:160,render:e=>a.jsx(ea,{size:"sm",variant:"outline",onClick:o=>o.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return a.jsx(y,{columns:t,data:g,rowKey:e=>e.id})}},ne={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:f,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Issue sort ascending"});await n(e.getByText("No release items yet.")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("No release items yet."),await n(o).toBeDisabled(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}},ae={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:f,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:/Issue/});await n(o).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},oe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Issue sort descending"});await n(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await n(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},re={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).toHaveAttribute("tabindex","0"),await l.tab(),await n(o).toHaveFocus(),await l.tab(),await n(e.getByRole("button",{name:"After table"})).toHaveFocus()}},se={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(y,{columns:f,data:g,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});x.mouseDown(r),r.focus(),await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px")}},ie={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsx("p",{style:C,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),a.jsx(y,{columns:f,data:g,defaultSortKey:"id"}),a.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});x.mouseDown(o),o.focus(),await l.click(r),await l.tab({shift:!0}),await n(o).toHaveFocus(),await n(o.style.boxShadow).toContain("0 0 0 3px")}},ce={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:f,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),S=e.getByRole("columnheader",{name:/Issue/});await n(o).toHaveAttribute("aria-busy","true"),await n(e.getByText("Syncing release feed...")).toBeInTheDocument(),await n(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await n(r).toBeDisabled(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await n(S).not.toHaveAttribute("aria-sort")}},ue={render:()=>a.jsx(ia,{}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});x.mouseDown(r),await l.click(o);const S=e.getByRole("button",{name:"Issue sort descending"});await n(S).toBeDisabled(),await n(S.style.transform).toContain("translateY(0"),await n(S.style.boxShadow).toBe("none")}},le={render:function(){const[e,o]=u.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),a.jsx("button",{type:"button",children:"Before table"}),a.jsx(y,{columns:f,data:g,defaultSortKey:"id",onSortChange:(r,S)=>o(`${r} ${S}`)})]})},play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),S=e.getByTestId("primary-pointer-sort-state");await l.click(o),await l.tab(),await n(r).toHaveFocus(),await n(r.style.boxShadow).toContain("0 0 0 3px"),x.mouseDown(r,{button:2}),x.mouseUp(r,{button:2}),await n(r.style.boxShadow).toContain("0 0 0 3px"),await n(S).toHaveTextContent("id asc"),x.mouseDown(r,{button:0}),await V(()=>{n(r.style.transform).toContain("translateY(1px)")}),x.pointerCancel(r),await V(()=>{n(r.style.transform).toContain("translateY(0")}),await n(S).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await V(()=>{n(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await V(()=>{n(r.style.transform).toContain("translateY(0")}),await n(S).toHaveTextContent("id asc"),await l.click(r),await n(S).toHaveTextContent("id desc")}},de={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{ariaLabel:"Release checklist table",columns:f,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},me={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:f,data:g,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},ye={render:()=>a.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[a.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),a.jsx(y,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:f,data:g,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const o=b(t).getByRole("table",{name:"Release board metrics"});await n(o).toHaveAttribute("aria-labelledby","release-board-heading"),await n(o).not.toHaveAttribute("aria-label")}},pe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await n(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function ca(){const[t,e]=u.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:Pe,children:t})]}),a.jsx(y,{columns:f,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const we={render:()=>a.jsx(ca,{}),play:async({canvasElement:t})=>{const e=b(t),o=t.querySelector("[data-aurora-table-scroll-container]");await n(o).not.toBeNull(),await n(o).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await n(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await l.keyboard("{ArrowRight}");const S=e.getByRole("button",{name:"Component sort ascending"});await n(S).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{End}");const De=e.getByRole("button",{name:"Status sort ascending"});await n(De).toHaveFocus(),await l.keyboard("{Home}"),await n(r).toHaveFocus(),await l.keyboard("{PageDown}");const D=e.getByRole("button",{name:"Component sort ascending"});await n(D).toHaveFocus(),await l.keyboard("{PageUp}"),await n(r).toHaveFocus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const L=e.getByRole("button",{name:"Issue sort ascending"}),K=L.closest("th");await n(K).toHaveAttribute("aria-sort","descending"),x.keyDown(L,{key:"Enter",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","descending"),L.focus(),x.keyDown(L,{key:"Space",repeat:!0}),await n(e.getByText("id desc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","descending"),await l.keyboard("{Space}"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const R=e.getByRole("button",{name:"Issue sort descending"});R.focus(),x.keyDown(R,{key:"ArrowRight",ctrlKey:!0}),x.keyDown(R,{key:"ArrowLeft",metaKey:!0}),x.keyDown(R,{key:"End",ctrlKey:!0}),x.keyDown(R,{key:"Home",altKey:!0}),x.keyDown(R,{key:"PageDown",metaKey:!0}),x.keyDown(R,{key:"PageUp",ctrlKey:!0}),await n(R).toHaveFocus(),x.keyDown(R,{key:"Enter",ctrlKey:!0}),x.keyDown(R,{key:"Space",metaKey:!0}),await n(e.getByText("id asc")).toBeInTheDocument(),await n(K).toHaveAttribute("aria-sort","ascending"),await l.keyboard("{Shift>}{Enter}{/Shift}"),await V(()=>{n(e.getByText("id desc")).toBeInTheDocument(),n(K).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await V(()=>{n(e.getByText("id asc")).toBeInTheDocument(),n(K).toHaveAttribute("aria-sort","ascending")})}},be={render:()=>a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:C,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),a.jsx("div",{dir:"rtl",children:a.jsx(y,{columns:f,data:g,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});o.focus(),x.keyDown(o,{key:"ArrowLeft",ctrlKey:!0}),x.keyDown(o,{key:"ArrowRight",metaKey:!0}),x.keyDown(o,{key:"ArrowLeft",altKey:!0}),await n(o).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus(),await l.keyboard("{ArrowLeft}"),await n(r).toHaveFocus(),await l.keyboard("{ArrowRight}"),await n(o).toHaveFocus()}};function ua(){const[t,e]=u.useState("id asc");return a.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[a.jsx("p",{style:C,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),a.jsxs("p",{style:C,children:["Active sort: ",a.jsx("strong",{style:Pe,children:t})]}),a.jsx(y,{columns:f,data:g,defaultSortKey:"id",onSortChange:(o,r)=>e(`${o} ${r}`)})]})}const ge={render:()=>a.jsx(ua,{}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),st(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),st(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),it(r,"Enter"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),it(r,"Space"),await n(e.getByText("id asc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","ascending"),r.focus(),await l.keyboard("{Enter}"),await n(e.getByText("id desc")).toBeInTheDocument(),await n(o).toHaveAttribute("aria-sort","descending")}},ve={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:f,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"按降序排序：Issue"});await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await l.click(o),await n(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},he={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"releasedAt",header:a.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const o=e.getByRole("button",{name:"Release date sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await n(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},xe={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"status",header:a.jsxs("span",{children:[a.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Se={render:()=>a.jsx(p,{maxWidth:"min(100%, 780px)",children:a.jsx(y,{columns:[{key:"status",header:a.jsx("span",{"aria-label":"Release status",children:a.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await n(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const o=e.getByRole("button",{name:"Release status sort descending"});await l.click(o),await n(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},fe={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return a.jsx(p,{maxWidth:"min(100%, 620px)",children:a.jsx(y,{columns:t,data:g,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await n(o).not.toHaveAttribute("aria-sort"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await n(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function la(){const[t,e]=u.useState(!1),o=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return a.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),a.jsxs("p",{style:C,children:["Status column sortable:"," ",a.jsx("strong",{"data-testid":"table-status-sortable",style:Pe,children:t?"yes":"no"})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),a.jsx(y,{columns:o,data:g,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Be={render:()=>a.jsx(la,{}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await n(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await n(r).not.toHaveAttribute("aria-sort"),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await n(e.queryByRole("status")).not.toBeInTheDocument(),await l.click(o),await n(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await n(r).toHaveAttribute("aria-sort","ascending"),await n(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await n(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await n(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},$n=g.map(t=>({...t,note:""})),qn=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>a.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Re={render:()=>a.jsx(p,{maxWidth:"min(100%, 720px)",children:a.jsx(y,{columns:qn,data:$n,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},ke={render:()=>a.jsx(p,{maxWidth:"min(100%, 720px)",children:a.jsx(y,{columns:qn,data:$n,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=b(t),o=e.getByRole("textbox",{name:"BTN-102 note"});await l.type(o,"persist me"),await l.click(e.getByRole("button",{name:"Component sort descending"})),await n(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},da=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Te={render:()=>a.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[a.jsx("p",{style:C,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),a.jsx(y,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,o)=>`${t.key} (visual:${e}, source:${o})`},{key:"score",header:"Score",sortable:!0}],data:da,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=b(t);await l.click(e.getByRole("button",{name:"Score sort descending"})),await n(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await n(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var ct,ut,lt;Z.parameters={...Z.parameters,docs:{...(ct=Z.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(lt=(ut=Z.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,mt,yt;ee.parameters={...ee.parameters,docs:{...(dt=ee.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=ee.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var pt,wt,bt;te.parameters={...te.parameters,docs:{...(pt=te.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(bt=(wt=te.parameters)==null?void 0:wt.docs)==null?void 0:bt.source}}};var gt,vt,ht;ne.parameters={...ne.parameters,docs:{...(gt=ne.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ht=(vt=ne.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var xt,St,ft;ae.parameters={...ae.parameters,docs:{...(xt=ae.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(ft=(St=ae.parameters)==null?void 0:St.docs)==null?void 0:ft.source}}};var Bt,Rt,kt;oe.parameters={...oe.parameters,docs:{...(Bt=oe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(kt=(Rt=oe.parameters)==null?void 0:Rt.docs)==null?void 0:kt.source}}};var Tt,Dt,Ht;re.parameters={...re.parameters,docs:{...(Tt=re.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Ht=(Dt=re.parameters)==null?void 0:Dt.docs)==null?void 0:Ht.source}}};var At,It,Et;se.parameters={...se.parameters,docs:{...(At=se.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Et=(It=se.parameters)==null?void 0:It.docs)==null?void 0:Et.source}}};var Ct,Kt,jt;ie.parameters={...ie.parameters,docs:{...(Ct=ie.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(jt=(Kt=ie.parameters)==null?void 0:Kt.docs)==null?void 0:jt.source}}};var Ft,Lt,Wt;ce.parameters={...ce.parameters,docs:{...(Ft=ce.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Wt=(Lt=ce.parameters)==null?void 0:Lt.docs)==null?void 0:Wt.source}}};var Pt,Nt,$t;ue.parameters={...ue.parameters,docs:{...(Pt=ue.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...($t=(Nt=ue.parameters)==null?void 0:Nt.docs)==null?void 0:$t.source}}};var qt,Mt,Vt;le.parameters={...le.parameters,docs:{...(qt=le.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(sortButton, {
      button: 0
    });
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(sortButton);
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(0");
    });
    await expect(sortState).toHaveTextContent("id asc");
    sortButton.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(1px)");
    });
    sortButton.dispatchEvent(new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(sortButton.style.transform).toContain("translateY(0");
    });
    await expect(sortState).toHaveTextContent("id asc");
    await userEvent.click(sortButton);
    await expect(sortState).toHaveTextContent("id desc");
  }
}`,...(Vt=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};var Ot,Ut,zt;de.parameters={...de.parameters,docs:{...(Ot=de.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(zt=(Ut=de.parameters)==null?void 0:Ut.docs)==null?void 0:zt.source}}};var Gt,_t,Yt;me.parameters={...me.parameters,docs:{...(Gt=me.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Yt=(_t=me.parameters)==null?void 0:_t.docs)==null?void 0:Yt.source}}};var Jt,Qt,Xt;ye.parameters={...ye.parameters,docs:{...(Jt=ye.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=ye.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,en,tn;pe.parameters={...pe.parameters,docs:{...(Zt=pe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(tn=(en=pe.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;we.parameters={...we.parameters,docs:{...(nn=we.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=we.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,sn,cn;be.parameters={...be.parameters,docs:{...(rn=be.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(cn=(sn=be.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var un,ln,dn;ge.parameters={...ge.parameters,docs:{...(un=ge.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(dn=(ln=ge.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var mn,yn,pn;ve.parameters={...ve.parameters,docs:{...(mn=ve.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(pn=(yn=ve.parameters)==null?void 0:yn.docs)==null?void 0:pn.source}}};var wn,bn,gn;he.parameters={...he.parameters,docs:{...(wn=he.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(gn=(bn=he.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var vn,hn,xn;xe.parameters={...xe.parameters,docs:{...(vn=xe.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(xn=(hn=xe.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var Sn,fn,Bn;Se.parameters={...Se.parameters,docs:{...(Sn=Se.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Bn=(fn=Se.parameters)==null?void 0:fn.docs)==null?void 0:Bn.source}}};var Rn,kn,Tn;fe.parameters={...fe.parameters,docs:{...(Rn=fe.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Tn=(kn=fe.parameters)==null?void 0:kn.docs)==null?void 0:Tn.source}}};var Dn,Hn,An;Be.parameters={...Be.parameters,docs:{...(Dn=Be.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(An=(Hn=Be.parameters)==null?void 0:Hn.docs)==null?void 0:An.source}}};var In,En,Cn;Re.parameters={...Re.parameters,docs:{...(In=Re.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Cn=(En=Re.parameters)==null?void 0:En.docs)==null?void 0:Cn.source}}};var Kn,jn,Fn;ke.parameters={...ke.parameters,docs:{...(Kn=ke.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Fn=(jn=ke.parameters)==null?void 0:jn.docs)==null?void 0:Fn.source}}};var Ln,Wn,Pn;Te.parameters={...Te.parameters,docs:{...(Ln=Te.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(Pn=(Wn=Te.parameters)==null?void 0:Wn.docs)==null?void 0:Pn.source}}};const xa=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{me as AccessibleNameFallback,ye as AccessibleNameLabelledByHeading,de as AccessibleNameWithoutCaption,Se as AriaLabelHeaderAutoSortLabel,Be as DeferredColumnsDefaultSortRecovery,ee as DescendingDefaultSortDirection,ne as EmptyState,Re as FallbackRowKeyStability,ge as ImeCompositionGuard,fe as InvalidDefaultSortKeyFallback,se as KeyboardFocusRingAfterPointer,ie as KeyboardFocusRingShiftTabReentry,re as KeyboardReachableScrollContainer,ue as LoadingDisablesResetsSortVisualState,ce as LoadingState,ve as LocalizedSortLabels,le as PrimaryPointerOnlySortPress,Z as ReleaseChecklist,Te as RenderIndexSemantics,xe as RichTextHeaderAutoSortLabel,pe as RowHeaderSemantics,be as RtlArrowNavigation,ae as SingleRowSortDisabled,oe as SingleSortableColumnShortcutHints,he as SortLabelForCustomHeader,we as SortTelemetry,ke as SourceIndexRowKeyStability,te as WithRowAction,xa as __namedExportsOrder,ha as default};
