import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as Ro}from"./Button-DvJUO9m9.js";import{r as y}from"./index-BWu4c2F4.js";import{B as eo}from"./Badge-Cvc2u0v9.js";import{within as d,expect as a,userEvent as p,fireEvent as g,waitFor as M}from"./index-DgAF9SIF.js";import{S as w,s as T,a as Q}from"./storyShowcase-DlKirntE.js";const to="Enter Space",ko=`${to} Home End PageDown PageUp ArrowLeft ArrowRight`,To="ArrowLeft ArrowRight Home End PageDown PageUp",Ho=48,Do=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),kt=400;function Tt(e,t,n,r){if(!n)return null;const b=e.findIndex(D=>String(D.key)===n&&N(D));return b<0?null:{key:n,direction:r,renderKey:t[b]??`${n}__index-${b}`}}function Ht(e,t,n){if(typeof e.sortLabel=="string"&&e.sortLabel.trim().length>0)return e.sortLabel.trim();const r=Z(ct(e.header));return r.length>0?r:t}function Dt(e,t){const n=Z(e.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:t>=0?`Column ${t+1}`:"Column"}function m({columns:e,data:t,rowKey:n,minTableWidth:r,caption:b,ariaLabel:D,ariaLabelledBy:k,loading:O=!1,loadingContent:j="Loading data...",emptyContent:C="No data available.",defaultSortKey:$,defaultSortDirection:lt="asc",getSortAriaLabel:ro=Et,getSortStatusText:ut=Ct,onSortKeyDown:Qe,onSortChange:Xe}){const dt=Ze(b),so=Ze(j),io=Ze(C),co=so?j:"Loading data...",lo=io?C:"No data available.",F=no(O,!1),et=Lo(lt,"asc"),X=ce(k),mt=X?void 0:ce(D,dt?void 0:"Data table"),uo=Io(r),q=y.useRef({}),tt=y.useRef(null),nt=y.useRef(null),ee=y.useRef(0),z=y.useRef(null),te=y.useRef(null),V=y.useRef(!0);y.useRef(null),y.useRef(null),y.useRef(null);const[mo,at]=y.useState(null),[yo,W]=y.useState(null),[po,_]=y.useState(null),[wo,ot]=y.useState(!1);y.useEffect(()=>{var i;const s=((i=tt.current)==null?void 0:i.ownerDocument)??document,l=S=>{S.metaKey||S.altKey||S.ctrlKey||(V.current=!0)},u=S=>{"button"in S&&!it(S.button)||"ctrlKey"in S&&S.ctrlKey||(V.current=!1)};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",u,!0),s.addEventListener("mousedown",u,!0),s.addEventListener("touchstart",u,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",u,!0),s.removeEventListener("mousedown",u,!0),s.removeEventListener("touchstart",u,!0)}},[]);const ne=y.useCallback(()=>{nt.current=null,ee.current=0,z.current!==null&&((te.current??window).clearTimeout(z.current),z.current=null),te.current=null},[]);y.useEffect(()=>()=>{ne()},[ne]);const A=y.useMemo(()=>{const s=new Map;return e.map(l=>{const u=String(l.key),i=s.get(u)??0;return s.set(u,i+1),i===0?u:`${u}__duplicate-${i}`})},[e]),bo=y.useMemo(()=>e.map(s=>Ko(s.width)),[e]),[x,ae]=y.useState(()=>Tt(e,A,$,et)),P=y.useMemo(()=>F||t.length<=1?[]:e.reduce((s,l,u)=>(N(l)&&s.push(A[u]??`${String(l.key)}__index-${u}`),s),[]),[e,t.length,A,F]);y.useEffect(()=>{if(!x)return;const s=A.findIndex(i=>i===x.renderKey);if(s>=0&&N(e[s]))return;const l=e.findIndex(i=>N(i)&&String(i.key)===x.key);if(l<0){ae(null);return}const u=A[l]??`${x.key}__index-${l}`;u!==x.renderKey&&ae(i=>i&&{...i,renderKey:u})},[e,A,x]),y.useEffect(()=>{if(x)return;const s=Tt(e,A,$,et);s&&ae(s)},[e,$,A,et,x]);const rt=y.useMemo(()=>t.map((s,l)=>String(n?n(s,l):l)),[t,n]),go=y.useMemo(()=>{const s=new Map;return rt.map((l,u)=>{const i=s.get(l)??0;return s.set(l,i+1),i===0?l:`${l}__dup-${u}`})},[rt]);y.useEffect(()=>{},[n,rt]),y.useEffect(()=>{},[e]),y.useEffect(()=>{},[e]);const U=y.useMemo(()=>{const s=t.map((h,B)=>({row:h,sourceIndex:B}));if(!x)return s;const l=A.findIndex(h=>h===x.renderKey),u=l>=0?l:e.findIndex(h=>String(h.key)===x.key),i=u>=0?e[u]:void 0;if(!i||!N(i))return s;const S=i.sortAccessor??(h=>{const B=h[String(i.key)];return B instanceof Date||typeof B=="number"||typeof B=="string"?B:String(B??"")});return s.sort((h,B)=>{const H=S(h.row),E=S(B.row);if(typeof H=="string"&&typeof E=="string"){const Y=Do.compare(H,E);return Y!==0?x.direction==="asc"?Y:-Y:h.sourceIndex-B.sourceIndex}const L=H instanceof Date?H.getTime():H,oe=E instanceof Date?E.getTime():E;return L<oe?x.direction==="asc"?-1:1:L>oe?x.direction==="asc"?1:-1:h.sourceIndex-B.sourceIndex})},[e,t,A,x]),vo=typeof document>"u"?void 0:document,yt=y.useMemo(()=>{if(F||U.length<=1||!x)return"";const s=A.findIndex(H=>H===x.renderKey),l=s>=0?s:e.findIndex(H=>String(H.key)===x.key),u=l>=0?e[l]:void 0;if(!u||!N(u))return"";const i=Ht(u,Dt(x.key,l)),S={columnKey:x.key,columnHeader:i,direction:x.direction},h=Ct(S),B=ut(S);return Eo(B,h)},[e,ut,vo,A,F,x,U.length]),J=!F&&U.length>1&&e.some(s=>N(s)),G=!J&&wo,pt=Math.max(e.length,1);return y.useEffect(()=>{J||(at(null),W(null),_(null))},[J]),y.useEffect(()=>{if(J){ot(!1);return}const s=tt.current;if(!s){ot(!1);return}const l=s.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!l)return;const u=()=>{const S=s.scrollWidth-s.clientWidth>0;ot(h=>h===S?h:S)};u(),l.addEventListener("resize",u);let i=null;return typeof l.ResizeObserver=="function"&&(i=new l.ResizeObserver(u),i.observe(s)),()=>{l.removeEventListener("resize",u),i==null||i.disconnect()}},[e.length,t.length,J,F]),o.jsxs("div",{ref:tt,"data-aurora-table-scroll-container":"",role:G?"region":void 0,tabIndex:G?0:void 0,"aria-label":G?X?void 0:mt??"Data table scroll container":void 0,"aria-labelledby":G?X:void 0,"aria-keyshortcuts":G?To:void 0,onKeyDown:s=>{if(!G||s.defaultPrevented||s.altKey||s.ctrlKey||s.metaKey||s.target!==s.currentTarget)return;const l=s.currentTarget,u=Math.max(0,l.scrollWidth-l.clientWidth);if(u<=0)return;const i=l.clientWidth,S=Math.max(Ho,Math.floor(i*.3)),h=It(l),B=h==="rtl"?"ArrowLeft":"ArrowRight",H=L=>{L!==0&&(s.preventDefault(),jo(l,L))},E=L=>{s.preventDefault(),Fo(l,L)};switch(s.key){case"ArrowLeft":case"ArrowRight":H(s.key===B?S:-S);return;case"PageDown":H(i);return;case"PageUp":H(-i);return;case"Home":E(h==="rtl"?u:0);return;case"End":E(h==="rtl"?0:u);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[yt?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:yt}):null,o.jsxs("table",{"aria-label":mt,"aria-labelledby":X,"aria-busy":F||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:uo},children:[dt?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:b}):null,o.jsx("thead",{children:o.jsx("tr",{children:e.map((s,l)=>{const u=String(s.key),i=A[l]??`${u}__index-${l}`,S=N(s),h=U.length>1,B=S&&(x==null?void 0:x.key)===u?x.direction:void 0,H=B&&(x==null?void 0:x.renderKey)===i?B:void 0,E=!F&&h?H:void 0,L=E?E==="asc"?"ascending":"descending":void 0,oe=s.align??"left",Y=Ht(s,Dt(u,l)),re=B==="asc"?"desc":"asc",ho=ro({columnKey:u,columnHeader:Y,nextDirection:re}),wt=ce(s.sortLabelledBy),xo=wt?void 0:ce(ho,Et({columnHeader:Y,nextDirection:re})),K=F||!h,So=K?void 0:P.length>1?ko:to,bt=!K&&mo===i,gt=!K&&yo===i,vt=!K&&po===i,fo=bt||vt,ht=()=>{K||(ae({key:u,direction:re,renderKey:i}),Xe==null||Xe(u,re))};return o.jsx("th",{scope:"col","aria-sort":L,style:{textAlign:oe,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:bo[l]},children:S?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:c=>{q.current[i]=c},"aria-labelledby":wt,"aria-label":xo,"aria-keyshortcuts":So,disabled:K,onClick:c=>{const R=Date.now()-ee.current,se=c.detail===0&&nt.current===i&&ee.current>0&&R<=kt;ne(),!se&&ht()},onMouseEnter:()=>{K||at(i)},onMouseLeave:()=>{at(c=>c===i?null:c),W(c=>c===i?null:c)},onPointerDown:c=>{K||c.ctrlKey||it(c.button)&&(V.current=!1,_(R=>R===i?null:R),W(i))},onPointerUp:c=>{it(c.button)&&W(R=>R===i?null:R)},onMouseDown:c=>{K||c.button!==0||c.ctrlKey||(V.current=!1,_(R=>R===i?null:R),W(i))},onMouseUp:c=>{c.button===0&&W(R=>R===i?null:R)},onPointerCancel:()=>{W(c=>c===i?null:c)},onFocus:()=>{if(K){_(c=>c===i?null:c);return}_(c=>Ao(q.current[i],V.current)?i:c===i?null:c)},onBlur:()=>{_(c=>c===i?null:c),W(c=>c===i?null:c)},onKeyDown:c=>{var se,xt,St,ft;if(V.current=!0,Qe==null||Qe(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(c.key==="Home"){const I=P[0];if(!I)return;c.preventDefault(),(se=q.current[I])==null||se.focus();return}if(c.key==="End"){const I=P[P.length-1];if(!I)return;c.preventDefault(),(xt=q.current[I])==null||xt.focus();return}if(c.key==="PageDown"||c.key==="PageUp"){const I=P.indexOf(i);if(I<0)return;const Bt=c.key==="PageDown"?1:-1,ie=Math.max(0,Math.min(P.length-1,I+Bt));if(ie===I)return;c.preventDefault();const st=P[ie];(St=q.current[st])==null||St.focus();return}if(c.key==="ArrowLeft"||c.key==="ArrowRight"){const I=P.indexOf(i);if(I<0)return;const ie=It(c.currentTarget)==="rtl"?"ArrowLeft":"ArrowRight",st=c.key===ie?1:-1,Rt=Math.max(0,Math.min(P.length-1,I+st));if(Rt===I)return;c.preventDefault();const Bo=P[Rt];(ft=q.current[Bo])==null||ft.focus();return}if(!At(c.key)||Co(c)||(c.preventDefault(),c.repeat))return;W(i),nt.current=i,ee.current=Date.now();const R=c.currentTarget.ownerDocument.defaultView??window;z.current!==null&&(te.current??R).clearTimeout(z.current),te.current=R,z.current=R.setTimeout(()=>{ne()},kt),ht()},onKeyUp:c=>{c.altKey||c.ctrlKey||c.metaKey||At(c.key)&&W(R=>R===i?null:R)},style:{border:fo?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:gt?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":bt?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:K?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:K?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:vt?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:gt?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[s.header,o.jsx("span",{"aria-hidden":"true",children:E==="asc"?"▲":E==="desc"?"▼":"↕"})]}):s.header},i)})})}),o.jsx("tbody",{children:F?o.jsx("tr",{children:o.jsx("td",{colSpan:pt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:co})})}):U.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:pt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:lo})})}):U.map((s,l)=>{const u=s.row,i=String(s.sourceIndex),S=go[s.sourceIndex]??i;return o.jsx("tr",{style:{background:l%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map((h,B)=>{const H=h.render?h.render(u,l,s.sourceIndex):String(u[String(h.key)]??""),E=A[B]??`${String(h.key)}__index-${B}`,L={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:h.align??"left"};return h.rowHeader?o.jsx("th",{scope:"row",style:{...L,fontWeight:"var(--aurora-font-weight-medium)"},children:H},E):o.jsx("td",{style:L,children:H},E)})},S)})})]})]})}function Et({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function Ct({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function Eo(e,t){if(typeof e=="string"){const n=Z(e);if(n.length>0)return n}return t}function At(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Co(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function it(e){return typeof e!="number"||e<=0}function Ao(e,t){if(!e)return t;try{return e.matches(":focus-visible")||t}catch{return t}}function It(e){var b;const n=(e.ownerDocument.defaultView??window).getComputedStyle(e).direction;return n==="rtl"||n==="ltr"?n:((b=e.closest("[dir]"))==null?void 0:b.getAttribute("dir"))==="rtl"?"rtl":"ltr"}function Io(e){if(typeof e=="number")return Number.isFinite(e)&&e>0?e:560;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}return 560}function Lo(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="asc"||n==="desc")return n}return t}function Ko(e){if(typeof e=="number")return Number.isFinite(e)&&e>=0?e:void 0;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}}function no(e,t){return typeof e!="boolean"?t:e}function N(e){return no(e==null?void 0:e.sortable,!1)}function Ze(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Ze(t)):y.isValidElement(e)}function ct(e){if(typeof e=="string")return e;if(typeof e=="number")return String(e);if(Array.isArray(e))return Z(e.map(n=>ct(n)).filter(n=>n.length>0).join(" "));if(!y.isValidElement(e))return"";const t=e.props;if(t["aria-hidden"]===!0||t["aria-hidden"]==="true")return"";if(typeof t["aria-label"]=="string"){const n=Z(t["aria-label"]);if(n.length>0)return n}return ct(t.children)}function Z(e){return e.replace(/\s+/g," ").trim()}function ce(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function jo(e,t){if(typeof e.scrollBy=="function"){e.scrollBy({left:t,behavior:"auto"});return}e.scrollLeft+=t}function Fo(e,t){if(typeof e.scrollTo=="function"){e.scrollTo({left:t,behavior:"auto"});return}e.scrollLeft=t}m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"sortLabel",value:{name:"string",required:!1}},{key:"sortLabelledBy",value:{name:"string",required:!1}},{key:"width",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"rowHeader",value:{name:"boolean",required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(row: T, rowIndex: number, sourceIndex: number) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"number"},name:"sourceIndex"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"sortAccessor",value:{name:"signature",type:"function",raw:"(row: T) => string | number | Date",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number | Date",elements:[{name:"string"},{name:"number"},{name:"Date"}]}},required:!1}}]}}],raw:"Array<TableColumn<T>>"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, rowIndex: number) => string",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"rowIndex"}],return:{name:"string"}}},description:""},minTableWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading data..."',computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No data available."',computed:!1}},defaultSortKey:{required:!1,tsType:{name:"string"},description:""},defaultSortDirection:{required:!1,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:"",defaultValue:{value:'"asc"',computed:!1}},getSortAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const v=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],f=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return o.jsx(eo,{tone:t,children:e.status})}}];function Lt(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function Kt(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function Wo(){const[e,t]=y.useState(!1);return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>t(n=>!n),children:"Toggle loading"}),o.jsx(m,{columns:f,data:v,loading:e,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const Yo={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},le={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(m,{caption:"Release readiness board",columns:f,data:v,rowKey:e=>e.id,defaultSortKey:"id"})})},ue={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(m,{caption:"Release readiness board",columns:f,data:v,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},de={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Runtime sort-direction config from CMS/JSON should normalize mixed-case tokens before sorting."}),o.jsx(m,{caption:"Runtime sort direction normalization",columns:f,data:v,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:" DESC "})]}),play:async({canvasElement:e})=>{const n=d(e).getByRole("table",{name:"Runtime sort direction normalization"}),r=d(n).getByRole("columnheader",{name:/Issue/});await a(r).toHaveAttribute("aria-sort","descending"),await a(d(n).getAllByRole("rowheader")[0]).toHaveTextContent("DLG-210"),await a(d(n).getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},me={render:()=>{const e=[...f,{key:"action",header:"Action",width:160,render:t=>o.jsx(Ro,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return o.jsx(m,{columns:e,data:v,rowKey:t=>t.id})}},ye={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Issue sort ascending"});await a(t.getByText("No release items yet.")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},pe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},we={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v,defaultSortKey:"id",rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(t.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},be={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:T,children:"When sortable controls are unavailable and horizontal overflow exists, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=d(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:k=>{b=k}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:k=0})=>{b+=Number(k)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:k=0})=>{b=Number(k)||0}}),g(r,new r.Event("resize")),await M(()=>{a(n).toHaveAttribute("role","region"),a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await p.tab(),await a(n).toHaveFocus(),g.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),g.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const D=k=>k.preventDefault();n.addEventListener("keydown",D,!0),g.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",D,!0),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},ge={render:()=>o.jsxs(w,{maxWidth:"760px",gap:10,children:[o.jsx("p",{style:T,children:"Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:v}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=d(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex"),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await p.tab(),await a(t.getByRole("button",{name:"Before table"})).toHaveFocus(),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},ve={render:()=>o.jsxs(w,{maxWidth:"360px",gap:10,children:[o.jsxs("p",{style:T,children:["Use ",o.jsx("code",{children:"minTableWidth"})," to keep compact layouts readable without forcing overflow."]}),o.jsx(m,{minTableWidth:320,columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:v})]}),play:async({canvasElement:e})=>{const n=d(e).getByRole("table",{name:"Data table"}),r=e.querySelector("[data-aurora-table-scroll-container]");await a(n).toHaveStyle({minWidth:"320px"}),await a(r).not.toHaveAttribute("role"),await a(r).not.toHaveAttribute("tabindex"),await a(r).not.toHaveAttribute("aria-keyshortcuts")}},he={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:T,children:"In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual direction."}),o.jsx("div",{dir:"rtl",children:o.jsx(m,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:v})})]}),play:async({canvasElement:e})=>{const t=d(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull();const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:k=>{b=k}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:k=0})=>{b+=Number(k)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:k=0})=>{b=Number(k)||0}}),g(r,new r.Event("resize")),await M(()=>{a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),n.focus(),await a(n).toHaveFocus(),g.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBeGreaterThan(0),g.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(420),g.keyDown(n,{key:"End"}),await a(n.scrollLeft).toBe(0);const D=k=>k.preventDefault();n.addEventListener("keydown",D,!0),g.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",D,!0),await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},xe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(m,{columns:f,data:v,defaultSortKey:"id"})]}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),r.focus(),await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},Se={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(m,{columns:f,data:v,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Status sort ascending"}),r=t.getByRole("button",{name:"After table"});g.mouseDown(n),n.focus(),await p.click(r),await p.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},fe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:v,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(t.getByText("Syncing release feed...")).toBeInTheDocument(),await a(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(b).not.toHaveAttribute("aria-sort")}},Be={render:()=>{const[e,t]=y.useState("none"),n=[{key:"id",header:"Issue",width:120,sortable:"true",rowHeader:!0},{key:"status",header:"Status",width:160,sortable:!0,sortAccessor:r=>r.status,render:r=>{const b=r.status==="ready"?"success":r.status==="review"?"default":"danger";return o.jsx(eo,{tone:b,children:r.status})}}];return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:T,children:"Runtime bool-like config from CMS/JSON should degrade safely: invalid `loading` and `columns[].sortable` values fall back to deterministic `false`."}),o.jsxs("p",{style:T,children:["Sort trace:"," ",o.jsx("strong",{"data-testid":"table-runtime-boolean-sort-trace",style:Q,children:e})]}),o.jsx(m,{columns:n,data:v,defaultSortKey:"id",loading:"invalid-loading-flag",loadingContent:"Should stay hidden",onSortChange:(r,b)=>t(`${r} ${b}`)})]})},play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("columnheader",{name:/Issue/}),b=t.getByRole("columnheader",{name:/Status/}),D=t.getByRole("button",{name:/Status sort/});await a(n).not.toHaveAttribute("aria-busy"),await a(t.queryByText("Should stay hidden")).not.toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"BTN-102"})).toBeInTheDocument(),await a(r).not.toHaveAttribute("aria-sort"),await a(d(r).queryByRole("button")).toBeNull(),await a(D).toBeEnabled(),await a(D).toHaveAttribute("aria-keyshortcuts","Enter Space"),await p.click(D),await a(b).toHaveAttribute("aria-sort","ascending"),await a(t.getByTestId("table-runtime-boolean-sort-trace")).toHaveTextContent("status asc")}},Re={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:v,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("status")).toHaveTextContent("Loading data...")}},ke={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:[],emptyContent:"   "})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("status")).toHaveTextContent("No data available.")}},Te={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(m,{columns:f,data:v,loading:!0,loadingContent:0}),o.jsx(m,{columns:f,data:[],emptyContent:0})]}),play:async({canvasElement:e})=>{const n=d(e).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},He={render:()=>o.jsx(Wo,{}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Toggle loading"}),r=t.getByRole("button",{name:"Issue sort descending"});g.mouseDown(r),await p.click(n);const b=t.getByRole("button",{name:"Issue sort descending"});await a(b).toBeDisabled(),await a(b.style.transform).toContain("translateY(0"),await a(b.style.boxShadow).toBe("none")}},De={render:function(){const[t,n]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:T,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:t})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(m,{columns:f,data:v,defaultSortKey:"id",onSortChange:(r,b)=>n(`${r} ${b}`)})]})},play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByTestId("primary-pointer-sort-state");await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),g.mouseDown(r,{button:2}),g.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(b).toHaveTextContent("id asc"),g.mouseDown(r,{button:0}),await M(()=>{a(r.style.transform).toContain("translateY(1px)")}),g.pointerCancel(r),await M(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await M(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await M(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),await p.click(r),await a(b).toHaveTextContent("id desc")}},Ee={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{ariaLabel:"Release checklist table",columns:f,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Ce={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},Ae={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{caption:0,columns:f,data:v,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const n=d(e).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},Ie={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(m,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:f,data:v,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const n=d(e).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},Le={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:v,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function Po(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:T,children:["Active sort: ",o.jsx("strong",{style:Q,children:e})]}),o.jsx(m,{columns:f,data:v,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}function No(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:T,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:T,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:Q,children:e})]}),o.jsx(m,{columns:f,data:v,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const Ke={render:()=>o.jsx(Po,{}),play:async({canvasElement:e})=>{const t=d(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=t.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await p.keyboard("{ArrowRight}");const b=t.getByRole("button",{name:"Component sort ascending"});await a(b).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{End}");const D=t.getByRole("button",{name:"Status sort ascending"});await a(D).toHaveFocus(),await p.keyboard("{Home}"),await a(r).toHaveFocus(),await p.keyboard("{PageDown}");const k=t.getByRole("button",{name:"Component sort ascending"});await a(k).toHaveFocus(),await p.keyboard("{PageUp}"),await a(r).toHaveFocus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const O=t.getByRole("button",{name:"Issue sort ascending"}),j=O.closest("th");await a(j).toHaveAttribute("aria-sort","descending"),g.keyDown(O,{key:"Enter",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),O.focus(),g.keyDown(O,{key:"Space",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),await p.keyboard("{Space}"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const C=t.getByRole("button",{name:"Issue sort descending"});C.focus(),g.keyDown(C,{key:"ArrowRight",ctrlKey:!0}),g.keyDown(C,{key:"ArrowLeft",metaKey:!0}),g.keyDown(C,{key:"End",ctrlKey:!0}),g.keyDown(C,{key:"Home",altKey:!0}),g.keyDown(C,{key:"PageDown",metaKey:!0}),g.keyDown(C,{key:"PageUp",ctrlKey:!0}),await a(C).toHaveFocus(),g.keyDown(C,{key:"Enter",ctrlKey:!0}),g.keyDown(C,{key:"Space",metaKey:!0}),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending");const $=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});$.preventDefault(),C.dispatchEvent($),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await p.keyboard("{Shift>}{Enter}{/Shift}"),await M(()=>{a(t.getByText("id desc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","descending")}),t.getByRole("button",{name:"Issue sort ascending"}).focus(),await p.keyboard("{Shift>}{Space}{/Shift}"),await M(()=>{a(t.getByText("id asc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","ascending")})}},je={render:()=>o.jsx(No,{}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Issue sort descending"});n.focus(),g.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),g.keyDown(n,{key:"Enter"}),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Fe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:T,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(m,{columns:f,data:v,defaultSortKey:"id"})})]}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Issue sort descending"}),r=t.getByRole("button",{name:"Component sort ascending"});n.focus(),g.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),g.keyDown(n,{key:"ArrowRight",metaKey:!0}),g.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function Mo(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:T,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:T,children:["Active sort: ",o.jsx("strong",{style:Q,children:e})]}),o.jsx(m,{columns:f,data:v,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const We={render:()=>o.jsx(Mo,{}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Lt(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Lt(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Kt(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Kt(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Pe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:v,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"按降序排序：Issue"});await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await p.click(n),await a(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},Ne={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:f,data:v,defaultSortKey:"id",getSortStatusText:()=>"   "})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.")}},Me={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=t.getByRole("button",{name:"Release date sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},Oe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},$e={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},qe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=t.getByRole("button",{name:"Column 1 sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},ze={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(m,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:e})=>{const t=d(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=t.getByRole("button",{name:"release stage ready sort descending"});await p.click(n),await a(t.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},Ve={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(m,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},_e={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(w,{maxWidth:"min(100%, 620px)",children:o.jsx(m,{columns:e,data:v,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("columnheader",{name:"Component"}),r=t.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function Oo(){const[e,t]=y.useState(!1),n=y.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:e,width:140}],[e]);return o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:T,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:T,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:Q,children:e?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>t(!0),children:"Load status sortable schema"}),o.jsx(m,{columns:n,data:v,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ue={render:()=>o.jsx(Oo,{}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("button",{name:"Load status sortable schema"}),r=t.getByRole("columnheader",{name:"Status"});await a(t.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await p.click(n),await a(t.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},ao=v.map(e=>({...e,note:""})),oo=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>o.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Ge={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(m,{columns:oo,data:ao,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ye={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(m,{columns:oo,data:ao,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=d(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},$o=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Je={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:T,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(m,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,n)=>`${e.key} (visual:${t}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:$o,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=d(e);await p.click(t.getByRole("button",{name:"Score sort descending"})),await a(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var jt,Ft,Wt;le.parameters={...le.parameters,docs:{...(jt=le.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Wt=(Ft=le.parameters)==null?void 0:Ft.docs)==null?void 0:Wt.source}}};var Pt,Nt,Mt;ue.parameters={...ue.parameters,docs:{...(Pt=ue.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Mt=(Nt=ue.parameters)==null?void 0:Nt.docs)==null?void 0:Mt.source}}};var Ot,$t,qt;de.parameters={...de.parameters,docs:{...(Ot=de.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <p style={storyMutedTextStyle}>
        Runtime sort-direction config from CMS/JSON should normalize mixed-case tokens before
        sorting.
      </p>
      <Table caption="Runtime sort direction normalization" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" defaultSortDirection={" DESC " as unknown as "desc"} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Runtime sort direction normalization"
    });
    const issueHeader = within(table).getByRole("columnheader", {
      name: /Issue/
    });
    await expect(issueHeader).toHaveAttribute("aria-sort", "descending");
    await expect(within(table).getAllByRole("rowheader")[0]).toHaveTextContent("DLG-210");
    await expect(within(table).getByRole("button", {
      name: "Issue sort ascending"
    })).toBeInTheDocument();
  }
}`,...(qt=($t=de.parameters)==null?void 0:$t.docs)==null?void 0:qt.source}}};var zt,Vt,_t;me.parameters={...me.parameters,docs:{...(zt=me.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(_t=(Vt=me.parameters)==null?void 0:Vt.docs)==null?void 0:_t.source}}};var Ut,Gt,Yt;ye.parameters={...ye.parameters,docs:{...(Ut=ye.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Yt=(Gt=ye.parameters)==null?void 0:Gt.docs)==null?void 0:Yt.source}}};var Jt,Zt,Qt;pe.parameters={...pe.parameters,docs:{...(Jt=pe.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Qt=(Zt=pe.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};var Xt,en,tn;we.parameters={...we.parameters,docs:{...(Xt=we.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(tn=(en=we.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;be.parameters={...be.parameters,docs:{...(nn=be.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        When sortable controls are unavailable and horizontal overflow exists, focus the scroll
        region and use Arrow/Home/End/Page keys to pan overflowed columns.
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
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
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
      expect(scrollContainer).toHaveAttribute("role", "region");
      expect(scrollContainer).toHaveAttribute("tabindex", "0");
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
}`,...(on=(an=be.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,sn,cn;ge.parameters={...ge.parameters,docs:{...(rn=ge.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="760px" gap={10}>
      <p style={storyMutedTextStyle}>
        Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop.
      </p>
      <button type="button">Before table</button>
      <Table columns={[{
      key: "id",
      header: "Issue"
    }, {
      key: "component",
      header: "Component"
    }]} data={rows} />
      <button type="button">After table</button>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    await expect(scrollContainer).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "Before table"
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After table"
    })).toHaveFocus();
  }
}`,...(cn=(sn=ge.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var ln,un,dn;ve.parameters={...ve.parameters,docs:{...(ln=ve.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="360px" gap={10}>
      <p style={storyMutedTextStyle}>
        Use <code>minTableWidth</code> to keep compact layouts readable without forcing overflow.
      </p>
      <Table minTableWidth={320} columns={[{
      key: "id",
      header: "Issue"
    }, {
      key: "component",
      header: "Component"
    }]} data={rows} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Data table"
    });
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(table).toHaveStyle({
      minWidth: "320px"
    });
    await expect(scrollContainer).not.toHaveAttribute("role");
    await expect(scrollContainer).not.toHaveAttribute("tabindex");
    await expect(scrollContainer).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(dn=(un=ve.parameters)==null?void 0:un.docs)==null?void 0:dn.source}}};var mn,yn,pn;he.parameters={...he.parameters,docs:{...(mn=he.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="220px" gap={10}>
      <p style={storyMutedTextStyle}>
        In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual
        direction.
      </p>
      <div dir="rtl">
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
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvasElement.querySelector("[data-aurora-table-scroll-container]") as HTMLDivElement | null;
    await expect(scrollContainer).not.toBeNull();
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
      expect(scrollContainer).toHaveAttribute("tabindex", "0");
      expect(scrollContainer).toHaveAttribute("aria-keyshortcuts", "ArrowLeft ArrowRight Home End PageDown PageUp");
    });
    (scrollContainer as HTMLDivElement).focus();
    await expect(scrollContainer).toHaveFocus();
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowLeft"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBeGreaterThan(0);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "Home"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(420);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "End"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    const preemptScrollHandler = (event: KeyboardEvent) => event.preventDefault();
    (scrollContainer as HTMLDivElement).addEventListener("keydown", preemptScrollHandler, true);
    fireEvent.keyDown(scrollContainer as HTMLDivElement, {
      key: "ArrowLeft"
    });
    await expect((scrollContainer as HTMLDivElement).scrollLeft).toBe(0);
    (scrollContainer as HTMLDivElement).removeEventListener("keydown", preemptScrollHandler, true);
    await expect(canvas.getByRole("table", {
      name: "Data table"
    })).toBeInTheDocument();
  }
}`,...(pn=(yn=he.parameters)==null?void 0:yn.docs)==null?void 0:pn.source}}};var wn,bn,gn;xe.parameters={...xe.parameters,docs:{...(wn=xe.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(gn=(bn=xe.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var vn,hn,xn;Se.parameters={...Se.parameters,docs:{...(vn=Se.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(xn=(hn=Se.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var Sn,fn,Bn;fe.parameters={...fe.parameters,docs:{...(Sn=fe.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Bn=(fn=fe.parameters)==null?void 0:fn.docs)==null?void 0:Bn.source}}};var Rn,kn,Tn;Be.parameters={...Be.parameters,docs:{...(Rn=Be.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
  render: () => {
    const [sortTrace, setSortTrace] = React.useState("none");
    const runtimeColumns: Array<TableColumn<ReleaseRow>> = [{
      key: "id",
      header: "Issue",
      width: 120,
      sortable: "true" as unknown as boolean,
      rowHeader: true
    }, {
      key: "status",
      header: "Status",
      width: 160,
      sortable: true,
      sortAccessor: row => row.status,
      render: row => {
        const tone = row.status === "ready" ? "success" : row.status === "review" ? "default" : "danger";
        return <Badge tone={tone}>{row.status}</Badge>;
      }
    }];
    return <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
        <p style={storyMutedTextStyle}>
          Runtime bool-like config from CMS/JSON should degrade safely: invalid \`loading\` and
          \`columns[].sortable\` values fall back to deterministic \`false\`.
        </p>
        <p style={storyMutedTextStyle}>
          Sort trace:{" "}
          <strong data-testid="table-runtime-boolean-sort-trace" style={storyEmphasisTextStyle}>
            {sortTrace}
          </strong>
        </p>
        <Table columns={runtimeColumns} data={rows} defaultSortKey="id" loading={"invalid-loading-flag" as unknown as boolean} loadingContent="Should stay hidden" onSortChange={(key, direction) => setSortTrace(\`\${key} \${direction}\`)} />
      </StoryShowcaseFrame>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table", {
      name: "Data table"
    });
    const issueHeader = canvas.getByRole("columnheader", {
      name: /Issue/
    });
    const statusHeader = canvas.getByRole("columnheader", {
      name: /Status/
    });
    const statusSortButton = canvas.getByRole("button", {
      name: /Status sort/
    });
    await expect(table).not.toHaveAttribute("aria-busy");
    await expect(canvas.queryByText("Should stay hidden")).not.toBeInTheDocument();
    await expect(canvas.getByRole("rowheader", {
      name: "BTN-102"
    })).toBeInTheDocument();
    await expect(issueHeader).not.toHaveAttribute("aria-sort");
    await expect(within(issueHeader).queryByRole("button")).toBeNull();
    await expect(statusSortButton).toBeEnabled();
    await expect(statusSortButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await userEvent.click(statusSortButton);
    await expect(statusHeader).toHaveAttribute("aria-sort", "ascending");
    await expect(canvas.getByTestId("table-runtime-boolean-sort-trace")).toHaveTextContent("status asc");
  }
}`,...(Tn=(kn=Be.parameters)==null?void 0:kn.docs)==null?void 0:Tn.source}}};var Hn,Dn,En;Re.parameters={...Re.parameters,docs:{...(Hn=Re.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(En=(Dn=Re.parameters)==null?void 0:Dn.docs)==null?void 0:En.source}}};var Cn,An,In;ke.parameters={...ke.parameters,docs:{...(Cn=ke.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(In=(An=ke.parameters)==null?void 0:An.docs)==null?void 0:In.source}}};var Ln,Kn,jn;Te.parameters={...Te.parameters,docs:{...(Ln=Te.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(jn=(Kn=Te.parameters)==null?void 0:Kn.docs)==null?void 0:jn.source}}};var Fn,Wn,Pn;He.parameters={...He.parameters,docs:{...(Fn=He.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
}`,...(Pn=(Wn=He.parameters)==null?void 0:Wn.docs)==null?void 0:Pn.source}}};var Nn,Mn,On;De.parameters={...De.parameters,docs:{...(Nn=De.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
}`,...(On=(Mn=De.parameters)==null?void 0:Mn.docs)==null?void 0:On.source}}};var $n,qn,zn;Ee.parameters={...Ee.parameters,docs:{...($n=Ee.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(zn=(qn=Ee.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var Vn,_n,Un;Ce.parameters={...Ce.parameters,docs:{...(Vn=Ce.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(Un=(_n=Ce.parameters)==null?void 0:_n.docs)==null?void 0:Un.source}}};var Gn,Yn,Jn;Ae.parameters={...Ae.parameters,docs:{...(Gn=Ae.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(Jn=(Yn=Ae.parameters)==null?void 0:Yn.docs)==null?void 0:Jn.source}}};var Zn,Qn,Xn;Ie.parameters={...Ie.parameters,docs:{...(Zn=Ie.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
}`,...(Xn=(Qn=Ie.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var ea,ta,na;Le.parameters={...Le.parameters,docs:{...(ea=Le.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(na=(ta=Le.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var aa,oa,ra;Ke.parameters={...Ke.parameters,docs:{...(aa=Ke.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(ra=(oa=Ke.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var sa,ia,ca;je.parameters={...je.parameters,docs:{...(sa=je.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ca=(ia=je.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,da;Fe.parameters={...Fe.parameters,docs:{...(la=Fe.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(da=(ua=Fe.parameters)==null?void 0:ua.docs)==null?void 0:da.source}}};var ma,ya,pa;We.parameters={...We.parameters,docs:{...(ma=We.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(pa=(ya=We.parameters)==null?void 0:ya.docs)==null?void 0:pa.source}}};var wa,ba,ga;Pe.parameters={...Pe.parameters,docs:{...(wa=Pe.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(ga=(ba=Pe.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var va,ha,xa;Ne.parameters={...Ne.parameters,docs:{...(va=Ne.parameters)==null?void 0:va.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} defaultSortKey="id" getSortStatusText={() => "   "} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");
  }
}`,...(xa=(ha=Ne.parameters)==null?void 0:ha.docs)==null?void 0:xa.source}}};var Sa,fa,Ba;Me.parameters={...Me.parameters,docs:{...(Sa=Me.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ba=(fa=Me.parameters)==null?void 0:fa.docs)==null?void 0:Ba.source}}};var Ra,ka,Ta;Oe.parameters={...Oe.parameters,docs:{...(Ra=Oe.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Ta=(ka=Oe.parameters)==null?void 0:ka.docs)==null?void 0:Ta.source}}};var Ha,Da,Ea;$e.parameters={...$e.parameters,docs:{...(Ha=$e.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Ea=(Da=$e.parameters)==null?void 0:Da.docs)==null?void 0:Ea.source}}};var Ca,Aa,Ia;qe.parameters={...qe.parameters,docs:{...(Ca=qe.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ia=(Aa=qe.parameters)==null?void 0:Aa.docs)==null?void 0:Ia.source}}};var La,Ka,ja;ze.parameters={...ze.parameters,docs:{...(La=ze.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(ja=(Ka=ze.parameters)==null?void 0:Ka.docs)==null?void 0:ja.source}}};var Fa,Wa,Pa;Ve.parameters={...Ve.parameters,docs:{...(Fa=Ve.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(Pa=(Wa=Ve.parameters)==null?void 0:Wa.docs)==null?void 0:Pa.source}}};var Na,Ma,Oa;_e.parameters={..._e.parameters,docs:{...(Na=_e.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(Oa=(Ma=_e.parameters)==null?void 0:Ma.docs)==null?void 0:Oa.source}}};var $a,qa,za;Ue.parameters={...Ue.parameters,docs:{...($a=Ue.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(za=(qa=Ue.parameters)==null?void 0:qa.docs)==null?void 0:za.source}}};var Va,_a,Ua;Ge.parameters={...Ge.parameters,docs:{...(Va=Ge.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Ua=(_a=Ge.parameters)==null?void 0:_a.docs)==null?void 0:Ua.source}}};var Ga,Ya,Ja;Ye.parameters={...Ye.parameters,docs:{...(Ga=Ye.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
}`,...(Ja=(Ya=Ye.parameters)==null?void 0:Ya.docs)==null?void 0:Ja.source}}};var Za,Qa,Xa;Je.parameters={...Je.parameters,docs:{...(Za=Je.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(Xa=(Qa=Je.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};const Jo=["ReleaseChecklist","DescendingDefaultSortDirection","RuntimeSortDirectionNormalization","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","ScrollContainerSkipsTabStopWithoutOverflow","CompactMinWidthWithoutOverflow","RtlScrollContainerKeyboardPanning","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","RuntimeBooleanConfigNormalization","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortStatusTextFallback","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RenderIndexSemantics"];export{Ce as AccessibleNameFallback,Ie as AccessibleNameLabelledByHeading,Ee as AccessibleNameWithoutCaption,$e as AriaLabelHeaderAutoSortLabel,ke as BlankEmptyContentFallback,qe as BlankKeySortLabelFallback,Re as BlankLoadingContentFallback,ve as CompactMinWidthWithoutOverflow,Ue as DeferredColumnsDefaultSortRecovery,ue as DescendingDefaultSortDirection,ye as EmptyState,Ge as FallbackRowKeyStability,We as ImeCompositionGuard,_e as InvalidDefaultSortKeyFallback,xe as KeyboardFocusRingAfterPointer,Se as KeyboardFocusRingShiftTabReentry,be as KeyboardReachableScrollContainer,He as LoadingDisablesResetsSortVisualState,fe as LoadingState,Pe as LocalizedSortLabels,je as ManagedSortKeysPreemptedByLocalHandler,ze as NormalizedKeySortLabelFallback,Ae as NumericCaptionName,Te as NumericFeedbackCopySemantics,De as PrimaryPointerOnlySortPress,le as ReleaseChecklist,Je as RenderIndexSemantics,Oe as RichTextHeaderAutoSortLabel,Le as RowHeaderSemantics,Fe as RtlArrowNavigation,he as RtlScrollContainerKeyboardPanning,Be as RuntimeBooleanConfigNormalization,de as RuntimeSortDirectionNormalization,ge as ScrollContainerSkipsTabStopWithoutOverflow,pe as SingleRowSortDisabled,we as SingleSortableColumnShortcutHints,Me as SortLabelForCustomHeader,Ve as SortLabelledByPrecedence,Ne as SortStatusTextFallback,Ke as SortTelemetry,Ye as SourceIndexRowKeyStability,me as WithRowAction,Jo as __namedExportsOrder,Yo as default};
