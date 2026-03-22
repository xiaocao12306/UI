import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as za}from"./Button-B21ouHNm.js";import{r as u}from"./index-BWu4c2F4.js";import{B as Va}from"./Badge-ZJmMstsz.js";import{within as b,expect as a,userEvent as m,fireEvent as g,waitFor as P}from"./index-DgAF9SIF.js";import{S as p,s as E,a as Me}from"./storyShowcase-DlKirntE.js";const ka="Enter Space",_a=`${ka} Home End PageDown PageUp ArrowLeft ArrowRight`,Ua="ArrowLeft ArrowRight Home End PageDown PageUp",Ga=48,Ya=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),bt=400;function gt(t,e,n){if(!e)return null;const r=t.find(h=>String(h.key)===e);return r!=null&&r.sortable?{key:e,direction:n}:null}function vt(t,e,n){if(typeof t.sortLabel=="string"&&t.sortLabel.trim().length>0)return t.sortLabel.trim();const r=Ne(Ze(t.header));return r.length>0?r:e}function ht(t,e){const n=Ne(t.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:e>=0?`Column ${e+1}`:"Column"}function y({columns:t,data:e,rowKey:n,caption:r,ariaLabel:h,ariaLabelledBy:N,loading:B=!1,loadingContent:F="Loading data...",emptyContent:C="No data available.",defaultSortKey:k,defaultSortDirection:M="asc",getSortAriaLabel:Je=xt,getSortStatusText:Qe=Za,onSortKeyDown:$e,onSortChange:qe}){var at;const Xe=Pe(r),Da=Pe(F),Ea=Pe(C),Aa=Da?F:"Loading data...",Ca=Ea?C:"No data available.",G=te(N),et=G?void 0:te(h,Xe?void 0:"Data table"),$=u.useRef({}),U=u.useRef(null),Oe=u.useRef(null),Y=u.useRef(0),q=u.useRef(null),Z=u.useRef(null),O=u.useRef(!0);u.useRef(null),u.useRef(null),u.useRef(null);const[Ia,ze]=u.useState(null),[Ka,I]=u.useState(null),[La,z]=u.useState(null),[ja,Ve]=u.useState(!1);u.useEffect(()=>{var c;const s=((c=U.current)==null?void 0:c.ownerDocument)??document,l=w=>{w.metaKey||w.altKey||w.ctrlKey||(O.current=!0)},d=w=>{"button"in w&&!Ye(w.button)||"ctrlKey"in w&&w.ctrlKey||(O.current=!1)};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",d,!0),s.addEventListener("mousedown",d,!0),s.addEventListener("touchstart",d,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",d,!0),s.removeEventListener("mousedown",d,!0),s.removeEventListener("touchstart",d,!0)}},[]);const J=u.useCallback(()=>{Oe.current=null,Y.current=0,q.current!==null&&((Z.current??window).clearTimeout(q.current),q.current=null),Z.current=null},[]);u.useEffect(()=>()=>{J()},[J]);const[f,_e]=u.useState(()=>gt(t,k,M)),Q=u.useMemo(()=>{const s=new Map;return t.map(l=>{const d=String(l.key),c=s.get(d)??0;return s.set(d,c+1),c===0?d:`${d}__duplicate-${c}`})},[t]),K=u.useMemo(()=>B||e.length<=1?[]:t.reduce((s,l,d)=>(l.sortable&&s.push(Q[d]??`${String(l.key)}__index-${d}`),s),[]),[t,e.length,B,Q]);u.useEffect(()=>{if(!f)return;const s=t.find(l=>String(l.key)===f.key);s!=null&&s.sortable||_e(null)},[t,f]),u.useEffect(()=>{if(f)return;const s=gt(t,k,M);s&&_e(s)},[t,M,k,f]);const Ue=u.useMemo(()=>e.map((s,l)=>String(n?n(s,l):l)),[e,n]),Fa=u.useMemo(()=>{const s=new Map;return Ue.map((l,d)=>{const c=s.get(l)??0;return s.set(l,c+1),c===0?l:`${l}__dup-${d}`})},[Ue]);u.useEffect(()=>{},[n,Ue]),u.useEffect(()=>{},[t]),u.useEffect(()=>{},[t]);const V=u.useMemo(()=>{const s=e.map((c,w)=>({row:c,sourceIndex:w}));if(!f)return s;const l=t.find(c=>String(c.key)===f.key);if(!(l!=null&&l.sortable))return s;const d=l.sortAccessor??(c=>{const w=c[String(l.key)];return w instanceof Date||typeof w=="number"||typeof w=="string"?w:String(w??"")});return s.sort((c,w)=>{const x=d(c.row),H=d(w.row);if(typeof x=="string"&&typeof H=="string"){const j=Ya.compare(x,H);return j!==0?f.direction==="asc"?j:-j:c.sourceIndex-w.sourceIndex}const T=x instanceof Date?x.getTime():x,W=H instanceof Date?H.getTime():H;return T<W?f.direction==="asc"?-1:1:T>W?f.direction==="asc"?1:-1:c.sourceIndex-w.sourceIndex})},[t,e,f]),tt=u.useMemo(()=>{var c;if(B||V.length<=1||!f)return"";const s=t.findIndex(w=>String(w.key)===f.key),l=s>=0?t[s]:void 0;if(!(l!=null&&l.sortable))return"";((c=U.current)==null?void 0:c.ownerDocument)??typeof document>"u";const d=vt(l,ht(f.key,s));return Qe({columnKey:f.key,columnHeader:d,direction:f.direction})},[t,Qe,B,f,V.length]),L=!B&&V.length>1&&t.some(s=>s.sortable),nt=Math.max(t.length,1);return((at=U.current)==null?void 0:at.ownerDocument)??typeof document>"u",u.useEffect(()=>{L||(ze(null),I(null),z(null))},[L]),u.useEffect(()=>{if(L){Ve(!1);return}const s=U.current;if(!s){Ve(!1);return}const l=s.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!l)return;const d=()=>{const w=s.scrollWidth-s.clientWidth>0;Ve(x=>x===w?x:w)};d(),l.addEventListener("resize",d);let c=null;return typeof l.ResizeObserver=="function"&&(c=new l.ResizeObserver(d),c.observe(s)),()=>{l.removeEventListener("resize",d),c==null||c.disconnect()}},[t.length,e.length,L,B]),o.jsxs("div",{ref:U,"data-aurora-table-scroll-container":"",role:L?void 0:"region",tabIndex:L?void 0:0,"aria-label":L||G?void 0:et??"Data table scroll container","aria-labelledby":L?void 0:G,"aria-keyshortcuts":L||!ja?void 0:Ua,onKeyDown:s=>{if(L||s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey||s.target!==s.currentTarget)return;const l=s.currentTarget,d=Math.max(0,l.scrollWidth-l.clientWidth);if(d<=0)return;const c=l.clientWidth,w=Math.max(Ga,Math.floor(c*.3)),x=T=>{T!==0&&(s.preventDefault(),Xa(l,T))},H=T=>{s.preventDefault(),eo(l,T)};switch(s.key){case"ArrowRight":x(w);return;case"ArrowLeft":x(-w);return;case"PageDown":x(c);return;case"PageUp":x(-c);return;case"Home":H(0);return;case"End":H(d);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[tt?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:tt}):null,o.jsxs("table",{"aria-label":et,"aria-labelledby":G,"aria-busy":B||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:560},children:[Xe?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:r}):null,o.jsx("thead",{children:o.jsx("tr",{children:t.map((s,l)=>{const d=String(s.key),c=Q[l]??`${d}__index-${l}`,w=!!s.sortable,x=V.length>1,H=w&&(f==null?void 0:f.key)===d?f.direction:void 0,T=!B&&x?H:void 0,W=T?T==="asc"?"ascending":"descending":void 0,j=s.align??"left",ot=vt(s,ht(d,l)),X=H==="asc"?"desc":"asc",Wa=Je({columnKey:d,columnHeader:ot,nextDirection:X}),rt=te(s.sortLabelledBy),Pa=rt?void 0:te(Wa,xt({columnHeader:ot,nextDirection:X})),A=B||!x,Na=A?void 0:K.length>1?_a:ka,st=!A&&Ia===c,it=!A&&Ka===c,ct=!A&&La===c,Ma=st||ct,lt=()=>{A||(_e({key:d,direction:X}),qe==null||qe(d,X))};return o.jsx("th",{scope:"col","aria-sort":W,style:{textAlign:j,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:s.width},children:w?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:i=>{$.current[c]=i},"aria-labelledby":rt,"aria-label":Pa,"aria-keyshortcuts":Na,disabled:A,onClick:i=>{const R=Date.now()-Y.current,ee=i.detail===0&&Oe.current===c&&Y.current>0&&R<=bt;J(),!ee&&lt()},onMouseEnter:()=>{A||ze(c)},onMouseLeave:()=>{ze(i=>i===c?null:i),I(i=>i===c?null:i)},onPointerDown:i=>{A||i.ctrlKey||Ye(i.button)&&(O.current=!1,z(R=>R===c?null:R),I(c))},onPointerUp:i=>{Ye(i.button)&&I(R=>R===c?null:R)},onMouseDown:i=>{A||i.button!==0||i.ctrlKey||(O.current=!1,z(R=>R===c?null:R),I(c))},onMouseUp:i=>{i.button===0&&I(R=>R===c?null:R)},onPointerCancel:()=>{I(i=>i===c?null:i)},onFocus:()=>{if(A){z(i=>i===c?null:i);return}z(i=>Qa($.current[c],O.current)?c:i===c?null:i)},onBlur:()=>{z(i=>i===c?null:i),I(i=>i===c?null:i)},onKeyDown:i=>{var ee,ut,dt,mt,yt;if(O.current=!0,$e==null||$e(i),i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey)return;if(i.key==="Home"){const D=K[0];if(!D)return;i.preventDefault(),(ee=$.current[D])==null||ee.focus();return}if(i.key==="End"){const D=K[K.length-1];if(!D)return;i.preventDefault(),(ut=$.current[D])==null||ut.focus();return}if(i.key==="PageDown"||i.key==="PageUp"){const D=K.indexOf(c);if(D<0)return;const pt=i.key==="PageDown"?1:-1,_=Math.max(0,Math.min(K.length-1,D+pt));if(_===D)return;i.preventDefault();const Ge=K[_];(dt=$.current[Ge])==null||dt.focus();return}if(i.key==="ArrowLeft"||i.key==="ArrowRight"){const D=K.indexOf(c);if(D<0)return;const _=(i.currentTarget.ownerDocument.defaultView??window).getComputedStyle(i.currentTarget).direction,Ge=(mt=i.currentTarget.closest("[dir]"))==null?void 0:mt.getAttribute("dir"),$a=(_==="rtl"||_==="ltr"?_:Ge==="rtl"?"rtl":"ltr")==="rtl"?"ArrowLeft":"ArrowRight",qa=i.key===$a?1:-1,wt=Math.max(0,Math.min(K.length-1,D+qa));if(wt===D)return;i.preventDefault();const Oa=K[wt];(yt=$.current[Oa])==null||yt.focus();return}if(!St(i.key)||Ja(i)||(i.preventDefault(),i.repeat))return;I(c),Oe.current=c,Y.current=Date.now();const R=i.currentTarget.ownerDocument.defaultView??window;q.current!==null&&(Z.current??R).clearTimeout(q.current),Z.current=R,q.current=R.setTimeout(()=>{J()},bt),lt()},onKeyUp:i=>{i.altKey||i.ctrlKey||i.metaKey||St(i.key)&&I(R=>R===c?null:R)},style:{border:Ma?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:it?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":st?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:A?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:A?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:ct?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:it?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,o.jsx("span",{"aria-hidden":"true",children:T==="asc"?"▲":T==="desc"?"▼":"↕"})]}):s.header},c)})})}),o.jsx("tbody",{children:B?o.jsx("tr",{children:o.jsx("td",{colSpan:nt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Aa})})}):V.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:nt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Ca})})}):V.map((s,l)=>{const d=s.row,c=String(s.sourceIndex),w=Fa[s.sourceIndex]??c;return o.jsx("tr",{style:{background:l%2===0?"transparent":"var(--aurora-surface-elevated)"},children:t.map((x,H)=>{const T=x.render?x.render(d,l,s.sourceIndex):String(d[String(x.key)]??""),W=Q[H]??`${String(x.key)}__index-${H}`,j={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:x.align??"left"};return x.rowHeader?o.jsx("th",{scope:"row",style:{...j,fontWeight:"var(--aurora-font-weight-medium)"},children:T},W):o.jsx("td",{style:j,children:T},W)})},w)})})]})]})}function xt({columnHeader:t,nextDirection:e}){return`${t} sort ${e==="asc"?"ascending":"descending"}`}function Za({columnHeader:t,direction:e}){return`Sorted by ${t} ${e==="asc"?"ascending":"descending"}.`}function St(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Ja(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ye(t){return typeof t!="number"||t<=0}function Qa(t,e){if(!t)return e;try{return t.matches(":focus-visible")||e}catch{return e}}function Pe(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>Pe(e)):u.isValidElement(t)}function Ze(t){if(typeof t=="string")return t;if(typeof t=="number")return String(t);if(Array.isArray(t))return Ne(t.map(n=>Ze(n)).filter(n=>n.length>0).join(" "));if(!u.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";if(typeof e["aria-label"]=="string"){const n=Ne(e["aria-label"]);if(n.length>0)return n}return Ze(e.children)}function Ne(t){return t.replace(/\s+/g," ").trim()}function te(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function Xa(t,e){if(typeof t.scrollBy=="function"){t.scrollBy({left:e,behavior:"auto"});return}t.scrollLeft+=e}function eo(t,e){if(typeof t.scrollTo=="function"){t.scrollTo({left:e,behavior:"auto"});return}t.scrollLeft=e}y.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T | string;
  header: React.ReactNode;
  sortLabel?: string;
  sortLabelledBy?: string;
  width?: number | string;
  align?: TableAlign;
  rowHeader?: boolean;
  render?: (row: T, rowIndex: number, sourceIndex: number) => React.ReactNode;
  sortable?: boolean;
  sortAccessor?: (row: T) => string | number | Date;
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"sortLabel",value:{name:"string",required:!1}},{key:"sortLabelledBy",value:{name:"string",required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:t=>t.status,render:t=>{const e=t.status==="ready"?"success":t.status==="review"?"default":"danger";return o.jsx(Va,{tone:e,children:t.status})}}];function ft(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}function Bt(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}function to(){const[t,e]=u.useState(!1);return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:"Toggle loading"}),o.jsx(y,{columns:S,data:v,loading:t,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const wo={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},ne={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id"})})},ae={render:()=>o.jsx(p,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(y,{caption:"Release readiness board",columns:S,data:v,rowKey:t=>t.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("columnheader",{name:/Issue/}),r=e.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(e.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},oe={render:()=>{const t=[...S,{key:"action",header:"Action",width:160,render:e=>o.jsx(za,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${e.id}`,children:"Open Ticket"})}];return o.jsx(y,{columns:t,data:v,rowKey:e=>e.id})}},re={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Issue sort ascending"});await a(e.getByText("No release items yet.")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},se={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},ie={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v,defaultSortKey:"id",rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(e.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},ce={render:()=>o.jsxs(p,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:E,children:"When sortable controls are unavailable, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(y,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).toHaveAttribute("role","region"),await a(n).toHaveAttribute("tabindex","0");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let h=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>h,set:B=>{h=B}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:B=0})=>{h+=Number(B)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:B=0})=>{h=Number(B)||0}}),g(r,new r.Event("resize")),await P(()=>{a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await m.tab(),await a(n).toHaveFocus(),g.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),g.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const N=B=>B.preventDefault();n.addEventListener("keydown",N,!0),g.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",N,!0),await m.tab(),await a(e.getByRole("button",{name:"After table"})).toHaveFocus()}},le={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:E,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id"})]}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),r.focus(),await m.click(n),await m.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},ue={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:E,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Status sort ascending"}),r=e.getByRole("button",{name:"After table"});g.mouseDown(n),n.focus(),await m.click(r),await m.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},de={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("table",{name:"Data table"}),r=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(e.getByText("Syncing release feed...")).toBeInTheDocument(),await a(e.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(h).not.toHaveAttribute("aria-sort")}},me={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("status")).toHaveTextContent("Loading data...")}},ye={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:[],emptyContent:"   "})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("status")).toHaveTextContent("No data available.")}},pe={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(y,{columns:S,data:v,loading:!0,loadingContent:0}),o.jsx(y,{columns:S,data:[],emptyContent:0})]}),play:async({canvasElement:t})=>{const n=b(t).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},we={render:()=>o.jsx(to,{}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Toggle loading"}),r=e.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),await m.click(n);const h=e.getByRole("button",{name:"Issue sort descending"});await a(h).toBeDisabled(),await a(h.style.transform).toContain("translateY(0"),await a(h.style.boxShadow).toBe("none")}},be={render:function(){const[e,n]=u.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:E,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:e})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id",onSortChange:(r,h)=>n(`${r} ${h}`)})]})},play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Before table"}),r=e.getByRole("button",{name:"Issue sort descending"}),h=e.getByTestId("primary-pointer-sort-state");await m.click(n),await m.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),g.mouseDown(r,{button:2}),g.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(h).toHaveTextContent("id asc"),g.mouseDown(r,{button:0}),await P(()=>{a(r.style.transform).toContain("translateY(1px)")}),g.pointerCancel(r),await P(()=>{a(r.style.transform).toContain("translateY(0")}),await a(h).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await P(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await P(()=>{a(r.style.transform).toContain("translateY(0")}),await a(h).toHaveTextContent("id asc"),await m.click(r),await a(h).toHaveTextContent("id desc")}},ge={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{ariaLabel:"Release checklist table",columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},ve={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},he={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{caption:0,columns:S,data:v,rowKey:t=>t.id})}),play:async({canvasElement:t})=>{const n=b(t).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},xe={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(y,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:v,rowKey:t=>t.id})]}),play:async({canvasElement:t})=>{const n=b(t).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},Se={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:t=>t.id,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(e.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function no(){const[t,e]=u.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:E,children:["Active sort: ",o.jsx("strong",{style:Me,children:t})]}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id",onSortChange:(n,r)=>e(`${n} ${r}`)})]})}function ao(){const[t,e]=u.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:E,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:E,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:Me,children:t})]}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>e(`${n} ${r}`)})]})}const fe={render:()=>o.jsx(no,{}),play:async({canvasElement:t})=>{const e=b(t),n=t.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=e.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await m.keyboard("{ArrowRight}");const h=e.getByRole("button",{name:"Component sort ascending"});await a(h).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await m.keyboard("{End}");const N=e.getByRole("button",{name:"Status sort ascending"});await a(N).toHaveFocus(),await m.keyboard("{Home}"),await a(r).toHaveFocus(),await m.keyboard("{PageDown}");const B=e.getByRole("button",{name:"Component sort ascending"});await a(B).toHaveFocus(),await m.keyboard("{PageUp}"),await a(r).toHaveFocus(),await m.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const F=e.getByRole("button",{name:"Issue sort ascending"}),C=F.closest("th");await a(C).toHaveAttribute("aria-sort","descending"),g.keyDown(F,{key:"Enter",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(C).toHaveAttribute("aria-sort","descending"),F.focus(),g.keyDown(F,{key:"Space",repeat:!0}),await a(e.getByText("id desc")).toBeInTheDocument(),await a(C).toHaveAttribute("aria-sort","descending"),await m.keyboard("{Space}"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(C).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const k=e.getByRole("button",{name:"Issue sort descending"});k.focus(),g.keyDown(k,{key:"ArrowRight",ctrlKey:!0}),g.keyDown(k,{key:"ArrowLeft",metaKey:!0}),g.keyDown(k,{key:"End",ctrlKey:!0}),g.keyDown(k,{key:"Home",altKey:!0}),g.keyDown(k,{key:"PageDown",metaKey:!0}),g.keyDown(k,{key:"PageUp",ctrlKey:!0}),await a(k).toHaveFocus(),g.keyDown(k,{key:"Enter",ctrlKey:!0}),g.keyDown(k,{key:"Space",metaKey:!0}),await a(e.getByText("id asc")).toBeInTheDocument(),await a(C).toHaveAttribute("aria-sort","ascending");const M=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});M.preventDefault(),k.dispatchEvent(M),await a(e.getByText("id asc")).toBeInTheDocument(),await a(C).toHaveAttribute("aria-sort","ascending"),await m.keyboard("{Shift>}{Enter}{/Shift}"),await P(()=>{a(e.getByText("id desc")).toBeInTheDocument(),a(C).toHaveAttribute("aria-sort","descending")}),e.getByRole("button",{name:"Issue sort ascending"}).focus(),await m.keyboard("{Shift>}{Space}{/Shift}"),await P(()=>{a(e.getByText("id asc")).toBeInTheDocument(),a(C).toHaveAttribute("aria-sort","ascending")})}},Be={render:()=>o.jsx(ao,{}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Issue sort descending"});n.focus(),g.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(e.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),g.keyDown(n,{key:"Enter"}),await a(e.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Re={render:()=>o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:E,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(y,{columns:S,data:v,defaultSortKey:"id"})})]}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Issue sort descending"}),r=e.getByRole("button",{name:"Component sort ascending"});n.focus(),g.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),g.keyDown(n,{key:"ArrowRight",metaKey:!0}),g.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await m.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await m.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function oo(){const[t,e]=u.useState("id asc");return o.jsxs(p,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:E,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:E,children:["Active sort: ",o.jsx("strong",{style:Me,children:t})]}),o.jsx(y,{columns:S,data:v,defaultSortKey:"id",onSortChange:(n,r)=>e(`${n} ${r}`)})]})}const ke={render:()=>o.jsx(oo,{}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("columnheader",{name:/Issue/}),r=e.getByRole("button",{name:"Issue sort descending"});await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),ft(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),ft(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Bt(r,"Enter"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Bt(r,"Space"),await a(e.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await m.keyboard("{Enter}"),await a(e.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Te={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:S,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:t,nextDirection:e})=>`按${e==="asc"?"升序":"降序"}排序：${t}`,getSortStatusText:({columnHeader:t,direction:e})=>`当前排序：${t}（${e==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"按降序排序：Issue"});await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await m.click(n),await a(e.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},He={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=e.getByRole("button",{name:"Release date sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(e.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},De={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=e.getByRole("button",{name:"Release status sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ee={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=e.getByRole("button",{name:"Release status sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ae={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=e.getByRole("button",{name:"Column 1 sort descending"});await m.click(n),await a(e.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},Ce={render:()=>o.jsx(p,{maxWidth:"min(100%, 780px)",children:o.jsx(y,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:t})=>{const e=b(t);await a(e.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=e.getByRole("button",{name:"release stage ready sort descending"});await m.click(n),await a(e.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},Ie={render:()=>o.jsxs(p,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(y,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await m.click(n),await a(e.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Ke={render:()=>{const t=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(p,{maxWidth:"min(100%, 620px)",children:o.jsx(y,{columns:t,data:v,defaultSortKey:"status"})})},play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("columnheader",{name:"Component"}),r=e.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(e.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function ro(){const[t,e]=u.useState(!1),n=u.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:t,width:140}],[t]);return o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:E,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:E,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:Me,children:t?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Load status sortable schema"}),o.jsx(y,{columns:n,data:v,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Le={render:()=>o.jsx(ro,{}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("button",{name:"Load status sortable schema"}),r=e.getByRole("columnheader",{name:"Status"});await a(e.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(e.queryByRole("status")).not.toBeInTheDocument(),await m.click(n),await a(e.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(e.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(e.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(e.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},Ta=v.map(t=>({...t,note:""})),Ha=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:t=>o.jsx("input",{defaultValue:t.note,"aria-label":`${t.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],je={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:Ha,data:Ta,defaultSortKey:"component"})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(n,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Fe={render:()=>o.jsx(p,{maxWidth:"min(100%, 720px)",children:o.jsx(y,{columns:Ha,data:Ta,defaultSortKey:"component",rowKey:(t,e)=>`${e}-${t.id}`})}),play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("textbox",{name:"BTN-102 note"});await m.type(n,"persist me"),await m.click(e.getByRole("button",{name:"Component sort descending"})),await a(e.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},so=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],We={render:()=>o.jsxs(p,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:E,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(y,{columns:[{key:"key",header:"Item",sortable:!0,render:(t,e,n)=>`${t.key} (visual:${e}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:so,defaultSortKey:"score"})]}),play:async({canvasElement:t})=>{const e=b(t);await m.click(e.getByRole("button",{name:"Score sort descending"})),await a(e.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(e.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Rt,kt,Tt;ne.parameters={...ne.parameters,docs:{...(Rt=ne.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Tt=(kt=ne.parameters)==null?void 0:kt.docs)==null?void 0:Tt.source}}};var Ht,Dt,Et;ae.parameters={...ae.parameters,docs:{...(Ht=ae.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Et=(Dt=ae.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};var At,Ct,It;oe.parameters={...oe.parameters,docs:{...(At=oe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(It=(Ct=oe.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};var Kt,Lt,jt;re.parameters={...re.parameters,docs:{...(Kt=re.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(jt=(Lt=re.parameters)==null?void 0:Lt.docs)==null?void 0:jt.source}}};var Ft,Wt,Pt;se.parameters={...se.parameters,docs:{...(Ft=se.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Pt=(Wt=se.parameters)==null?void 0:Wt.docs)==null?void 0:Pt.source}}};var Nt,Mt,$t;ie.parameters={...ie.parameters,docs:{...(Nt=ie.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...($t=(Mt=ie.parameters)==null?void 0:Mt.docs)==null?void 0:$t.source}}};var qt,Ot,zt;ce.parameters={...ce.parameters,docs:{...(qt=ce.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        When sortable controls are unavailable, focus the scroll region and use Arrow/Home/End/Page
        keys to pan overflowed columns.
      </p>
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
    await expect(scrollContainer).toHaveAttribute("role", "region");
    await expect(scrollContainer).toHaveAttribute("tabindex", "0");
    const ownerWindow = scrollContainer?.ownerDocument.defaultView ?? window;
    let mockedScrollLeft = 0;
    Object.defineProperty(scrollContainer as HTMLDivElement, "clientWidth", {
      configurable: true,
      value: 220
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollWidth", {
      configurable: true,
      value: 640
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollLeft", {
      configurable: true,
      get: () => mockedScrollLeft,
      set: (value: number) => {
        mockedScrollLeft = value;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollBy", {
      configurable: true,
      value: ({
        left = 0
      }: ScrollToOptions) => {
        mockedScrollLeft += Number(left) || 0;
      }
    });
    Object.defineProperty(scrollContainer as HTMLDivElement, "scrollTo", {
      configurable: true,
      value: ({
        left = 0
      }: ScrollToOptions) => {
        mockedScrollLeft = Number(left) || 0;
      }
    });
    fireEvent(ownerWindow, new ownerWindow.Event("resize"));
    await waitFor(() => {
      expect(scrollContainer).toHaveAttribute("aria-keyshortcuts", "ArrowLeft ArrowRight Home End PageDown PageUp");
    });
    await userEvent.tab();
    await expect(scrollContainer).toHaveFocus();
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowRight"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBeGreaterThan(0);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "Home"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    const preemptScrollHandler = (event: KeyboardEvent) => event.preventDefault();
    (scrollContainer as HTMLDivElement).addEventListener("keydown", preemptScrollHandler, true);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowRight"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    (scrollContainer as HTMLDivElement).removeEventListener("keydown", preemptScrollHandler, true);
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After table"
    })).toHaveFocus();
  }
}`,...(zt=(Ot=ce.parameters)==null?void 0:Ot.docs)==null?void 0:zt.source}}};var Vt,_t,Ut;le.parameters={...le.parameters,docs:{...(Vt=le.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ut=(_t=le.parameters)==null?void 0:_t.docs)==null?void 0:Ut.source}}};var Gt,Yt,Zt;ue.parameters={...ue.parameters,docs:{...(Gt=ue.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Zt=(Yt=ue.parameters)==null?void 0:Yt.docs)==null?void 0:Zt.source}}};var Jt,Qt,Xt;de.parameters={...de.parameters,docs:{...(Jt=de.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=de.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var en,tn,nn;me.parameters={...me.parameters,docs:{...(en=me.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(nn=(tn=me.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,rn;ye.parameters={...ye.parameters,docs:{...(an=ye.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(rn=(on=ye.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var sn,cn,ln;pe.parameters={...pe.parameters,docs:{...(sn=pe.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <Table columns={columns} data={rows} loading loadingContent={0} />
      <Table columns={columns} data={[]} emptyContent={0} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const statuses = canvas.getAllByRole("status");
    await expect(statuses).toHaveLength(2);
    await expect(statuses[0]).toHaveTextContent("0");
    await expect(statuses[1]).toHaveTextContent("0");
  }
}`,...(ln=(cn=pe.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var un,dn,mn;we.parameters={...we.parameters,docs:{...(un=we.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(mn=(dn=we.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var yn,pn,wn;be.parameters={...be.parameters,docs:{...(yn=be.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(wn=(pn=be.parameters)==null?void 0:pn.docs)==null?void 0:wn.source}}};var bn,gn,vn;ge.parameters={...ge.parameters,docs:{...(bn=ge.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(vn=(gn=ge.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var hn,xn,Sn;ve.parameters={...ve.parameters,docs:{...(hn=ve.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(Sn=(xn=ve.parameters)==null?void 0:xn.docs)==null?void 0:Sn.source}}};var fn,Bn,Rn;he.parameters={...he.parameters,docs:{...(fn=he.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table caption={0} columns={columns} data={rows} rowKey={row => row.id} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "0"
    });
    await expect(table).not.toHaveAttribute("aria-label");
  }
}`,...(Rn=(Bn=he.parameters)==null?void 0:Bn.docs)==null?void 0:Rn.source}}};var kn,Tn,Hn;xe.parameters={...xe.parameters,docs:{...(kn=xe.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(Hn=(Tn=xe.parameters)==null?void 0:Tn.docs)==null?void 0:Hn.source}}};var Dn,En,An;Se.parameters={...Se.parameters,docs:{...(Dn=Se.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(An=(En=Se.parameters)==null?void 0:En.docs)==null?void 0:An.source}}};var Cn,In,Kn;fe.parameters={...fe.parameters,docs:{...(Cn=fe.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
    const preemptedEnterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true
    });
    preemptedEnterEvent.preventDefault();
    issueSortDesc.dispatchEvent(preemptedEnterEvent);
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
}`,...(Kn=(In=fe.parameters)==null?void 0:In.docs)==null?void 0:Kn.source}}};var Ln,jn,Fn;Be.parameters={...Be.parameters,docs:{...(Ln=Be.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  render: () => <ManagedSortKeysPreemptedLocallyDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const issueSort = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    issueSort.focus();
    fireEvent.keyDown(issueSort, {
      key: "ArrowRight"
    });
    await expect(issueSort).toHaveFocus();
    await expect(canvas.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc");
    fireEvent.keyDown(issueSort, {
      key: "Enter"
    });
    await expect(canvas.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
  }
}`,...(Fn=(jn=Be.parameters)==null?void 0:jn.docs)==null?void 0:Fn.source}}};var Wn,Pn,Nn;Re.parameters={...Re.parameters,docs:{...(Wn=Re.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Nn=(Pn=Re.parameters)==null?void 0:Pn.docs)==null?void 0:Nn.source}}};var Mn,$n,qn;ke.parameters={...ke.parameters,docs:{...(Mn=ke.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(qn=($n=ke.parameters)==null?void 0:$n.docs)==null?void 0:qn.source}}};var On,zn,Vn;Te.parameters={...Te.parameters,docs:{...(On=Te.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(Vn=(zn=Te.parameters)==null?void 0:zn.docs)==null?void 0:Vn.source}}};var _n,Un,Gn;He.parameters={...He.parameters,docs:{...(_n=He.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Gn=(Un=He.parameters)==null?void 0:Un.docs)==null?void 0:Gn.source}}};var Yn,Zn,Jn;De.parameters={...De.parameters,docs:{...(Yn=De.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(Jn=(Zn=De.parameters)==null?void 0:Zn.docs)==null?void 0:Jn.source}}};var Qn,Xn,ea;Ee.parameters={...Ee.parameters,docs:{...(Qn=Ee.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
}`,...(ea=(Xn=Ee.parameters)==null?void 0:Xn.docs)==null?void 0:ea.source}}};var ta,na,aa;Ae.parameters={...Ae.parameters,docs:{...(ta=Ae.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "   ",
      header: <span aria-hidden="true">🚦</span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      "   ": "Review",
      component: "Dialog"
    }, {
      "   ": "Ready",
      component: "Button"
    }]} defaultSortKey="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "Column 1 sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Column 1 sort ascending"
    })).toBeInTheDocument();
  }
}`,...(aa=(na=Ae.parameters)==null?void 0:na.docs)==null?void 0:aa.source}}};var oa,ra,sa;Ce.parameters={...Ce.parameters,docs:{...(oa=Ce.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={[{
      key: "release_stage-ready",
      header: <span aria-hidden="true">🚦</span>,
      sortable: true
    }, {
      key: "component",
      header: "Component",
      sortable: true
    }]} data={[{
      "release_stage-ready": "Review",
      component: "Dialog"
    }, {
      "release_stage-ready": "Ready",
      component: "Button"
    }]} defaultSortKey="release_stage-ready" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");
    const descendingButton = canvas.getByRole("button", {
      name: "release stage ready sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "release stage ready sort ascending"
    })).toBeInTheDocument();
  }
}`,...(sa=(ra=Ce.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ia,ca,la;Ie.parameters={...Ie.parameters,docs:{...(ia=Ie.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)" gap={10}>
      <h3 id="table-status-sort-heading" style={{
      margin: 0,
      fontSize: "var(--aurora-font-size-sm)"
    }}>
        Release status
      </h3>
      <Table columns={[{
      key: "status",
      header: <span aria-hidden="true">🚦</span>,
      sortLabelledBy: "table-status-sort-heading",
      sortLabel: "Fallback status",
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
    const sortButton = canvas.getByRole("button", {
      name: "Release status"
    });
    await expect(sortButton).toHaveAttribute("aria-labelledby", "table-status-sort-heading");
    await expect(sortButton).not.toHaveAttribute("aria-label");
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending.");
    await userEvent.click(sortButton);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.");
  }
}`,...(la=(ca=Ie.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var ua,da,ma;Ke.parameters={...Ke.parameters,docs:{...(ua=Ke.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(ma=(da=Ke.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ya,pa,wa;Le.parameters={...Le.parameters,docs:{...(ya=Le.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(wa=(pa=Le.parameters)==null?void 0:pa.docs)==null?void 0:wa.source}}};var ba,ga,va;je.parameters={...je.parameters,docs:{...(ba=je.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=je.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,Sa;Fe.parameters={...Fe.parameters,docs:{...(ha=Fe.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(Sa=(xa=Fe.parameters)==null?void 0:xa.docs)==null?void 0:Sa.source}}};var fa,Ba,Ra;We.parameters={...We.parameters,docs:{...(fa=We.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(Ra=(Ba=We.parameters)==null?void 0:Ba.docs)==null?void 0:Ra.source}}};const bo=["ReleaseChecklist","DescendingDefaultSortDirection","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{ve as AccessibleNameFallback,xe as AccessibleNameLabelledByHeading,ge as AccessibleNameWithoutCaption,Ee as AriaLabelHeaderAutoSortLabel,ye as BlankEmptyContentFallback,Ae as BlankKeySortLabelFallback,me as BlankLoadingContentFallback,Le as DeferredColumnsDefaultSortRecovery,ae as DescendingDefaultSortDirection,re as EmptyState,je as FallbackRowKeyStability,ke as ImeCompositionGuard,Ke as InvalidDefaultSortKeyFallback,le as KeyboardFocusRingAfterPointer,ue as KeyboardFocusRingShiftTabReentry,ce as KeyboardReachableScrollContainer,we as LoadingDisablesResetsSortVisualState,de as LoadingState,Te as LocalizedSortLabels,Be as ManagedSortKeysPreemptedByLocalHandler,Ce as NormalizedKeySortLabelFallback,he as NumericCaptionName,pe as NumericFeedbackCopySemantics,be as PrimaryPointerOnlySortPress,ne as ReleaseChecklist,We as RenderIndexSemantics,De as RichTextHeaderAutoSortLabel,Se as RowHeaderSemantics,Re as RtlArrowNavigation,se as SingleRowSortDisabled,ie as SingleSortableColumnShortcutHints,He as SortLabelForCustomHeader,Ie as SortLabelledByPrecedence,fe as SortTelemetry,Fe as SourceIndexRowKeyStability,oe as WithRowAction,bo as __namedExportsOrder,wo as default};
