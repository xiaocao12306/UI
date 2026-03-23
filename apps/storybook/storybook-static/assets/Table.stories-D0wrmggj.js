import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as No}from"./Button-DvJUO9m9.js";import{r as y}from"./index-BWu4c2F4.js";import{B as wo}from"./Badge-Cvc2u0v9.js";import{within as u,expect as a,userEvent as p,fireEvent as v,waitFor as N}from"./index-DgAF9SIF.js";import{S as w,s as k,a as Q}from"./storyShowcase-DlKirntE.js";const bo="Enter Space",$o=`${bo} Home End PageDown PageUp ArrowLeft ArrowRight`,Oo="ArrowLeft ArrowRight Home End PageDown PageUp",qo=48,zo=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Ct=400;function At(e,t,n,r){if(!n)return null;const b=e.findIndex(D=>String(D.key)===n&&M(D));return b<0?null:{key:n,direction:r,renderKey:t[b]??`${n}__index-${b}`}}function It(e,t,n){if(typeof e.sortLabel=="string"&&e.sortLabel.trim().length>0)return e.sortLabel.trim();const r=Z(mt(e.header));return r.length>0?r:t}function Lt(e,t){const n=Z(e.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:t>=0?`Column ${t+1}`:"Column"}function d({columns:e,data:t,rowKey:n,minTableWidth:r,caption:b,ariaLabel:D,ariaLabelledBy:T,loading:$=!1,loadingContent:j="Loading data...",emptyContent:C="No data available.",defaultSortKey:O,defaultSortDirection:yt="asc",getSortAriaLabel:xo=Kt,getSortStatusText:pt=jt,onSortKeyDown:tt,onSortChange:nt}){const wt=et(b),So=et(j),fo=et(C),Bo=So?j:"Loading data...",Ro=fo?C:"No data available.",F=go($,!1),at=Yo(yt,"asc"),X=ce(T),bt=X?void 0:ce(D,wt?void 0:"Data table"),ko=Go(r),q=y.useRef({}),ot=y.useRef(null),rt=y.useRef(null),ee=y.useRef(0),z=y.useRef(null),te=y.useRef(null),V=y.useRef(!0);y.useRef(null),y.useRef(null);const To=y.useRef(!1);y.useRef(null);const Ho=y.useRef(!1),Do=y.useRef(!1),[Eo,st]=y.useState(null),[Co,W]=y.useState(null),[Ao,_]=y.useState(null),[Io,it]=y.useState(!1);y.useEffect(()=>{var s;const i=((s=ot.current)==null?void 0:s.ownerDocument)??document,m=f=>{f.metaKey||f.altKey||f.ctrlKey||(V.current=!0)},l=f=>{"button"in f&&!dt(f.button)||"ctrlKey"in f&&f.ctrlKey||(V.current=!1)};return i.addEventListener("keydown",m,!0),i.addEventListener("pointerdown",l,!0),i.addEventListener("mousedown",l,!0),i.addEventListener("touchstart",l,!0),()=>{i.removeEventListener("keydown",m,!0),i.removeEventListener("pointerdown",l,!0),i.removeEventListener("mousedown",l,!0),i.removeEventListener("touchstart",l,!0)}},[]);const ne=y.useCallback(()=>{rt.current=null,ee.current=0,z.current!==null&&((te.current??window).clearTimeout(z.current),z.current=null),te.current=null},[]);y.useEffect(()=>()=>{ne()},[ne]);const A=y.useMemo(()=>{const i=new Map;return e.map(m=>{const l=String(m.key),s=i.get(l)??0;return i.set(l,s+1),s===0?l:`${l}__duplicate-${s}`})},[e]),Lo=y.useMemo(()=>e.map(i=>Jo(i.width)),[e]),[x,ae]=y.useState(()=>At(e,A,O,at)),P=y.useMemo(()=>F||t.length<=1?[]:e.reduce((i,m,l)=>(M(m)&&i.push(A[l]??`${String(m.key)}__index-${l}`),i),[]),[e,t.length,A,F]);y.useEffect(()=>{if(!x)return;const i=A.findIndex(s=>s===x.renderKey);if(i>=0&&M(e[i]))return;const m=e.findIndex(s=>M(s)&&String(s.key)===x.key);if(m<0){ae(null);return}const l=A[m]??`${x.key}__index-${m}`;l!==x.renderKey&&ae(s=>s&&{...s,renderKey:l})},[e,A,x]),y.useEffect(()=>{if(x)return;const i=At(e,A,O,at);i&&ae(i)},[e,O,A,at,x]);const ct=y.useMemo(()=>{let i=!1;const m=t.map((l,s)=>{if(!n)return String(s);try{return String(n(l,s))}catch{return i=!0,String(s)}});return i||(To.current=!1),m},[t,n]),Ko=y.useMemo(()=>{const i=new Map;return ct.map((m,l)=>{const s=i.get(m)??0;return i.set(m,s+1),s===0?m:`${m}__dup-${l}`})},[ct]);y.useEffect(()=>{},[n,ct]),y.useEffect(()=>{},[e]),y.useEffect(()=>{},[e]);const U=y.useMemo(()=>{const i=t.map((h,B)=>({row:h,sourceIndex:B}));if(!x)return i;const m=A.findIndex(h=>h===x.renderKey),l=m>=0?m:e.findIndex(h=>String(h.key)===x.key),s=l>=0?e[l]:void 0;if(!s||!M(s))return i;const f=s.sortAccessor??(h=>{const B=h[String(s.key)];return B instanceof Date||typeof B=="number"||typeof B=="string"?B:String(B??"")});return i.sort((h,B)=>{const H=f(h.row),E=f(B.row);if(typeof H=="string"&&typeof E=="string"){const J=zo.compare(H,E);return J!==0?x.direction==="asc"?J:-J:h.sourceIndex-B.sourceIndex}const L=H instanceof Date?H.getTime():H,oe=E instanceof Date?E.getTime():E;return L<oe?x.direction==="asc"?-1:1:L>oe?x.direction==="asc"?1:-1:h.sourceIndex-B.sourceIndex})},[e,t,A,x]),jo=typeof document>"u"?void 0:document,gt=y.useMemo(()=>{if(F||U.length<=1||!x)return"";const i=A.findIndex(H=>H===x.renderKey),m=i>=0?i:e.findIndex(H=>String(H.key)===x.key),l=m>=0?e[m]:void 0;if(!l||!M(l))return"";const s=It(l,Lt(x.key,m)),f={columnKey:x.key,columnHeader:s,direction:x.direction},h=jt(f);let B;try{B=pt(f),Do.current=!1}catch{B=void 0}return Vo(B,h)},[e,pt,jo,A,F,x,U.length]),Y=!F&&U.length>1&&e.some(i=>M(i)),G=!Y&&Io,vt=Math.max(e.length,1);return y.useEffect(()=>{Y||(st(null),W(null),_(null))},[Y]),y.useEffect(()=>{if(Y){it(!1);return}const i=ot.current;if(!i){it(!1);return}const m=i.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!m)return;const l=()=>{const f=i.scrollWidth-i.clientWidth>0;it(h=>h===f?h:f)};l(),m.addEventListener("resize",l);let s=null;return typeof m.ResizeObserver=="function"&&(s=new m.ResizeObserver(l),s.observe(i)),()=>{m.removeEventListener("resize",l),s==null||s.disconnect()}},[e.length,t.length,Y,F]),o.jsxs("div",{ref:ot,"data-aurora-table-scroll-container":"",role:G?"region":void 0,tabIndex:G?0:void 0,"aria-label":G?X?void 0:bt??"Data table scroll container":void 0,"aria-labelledby":G?X:void 0,"aria-keyshortcuts":G?Oo:void 0,onKeyDown:i=>{if(!G||i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey||i.target!==i.currentTarget)return;const m=i.currentTarget,l=Math.max(0,m.scrollWidth-m.clientWidth);if(l<=0)return;const s=m.clientWidth,f=Math.max(qo,Math.floor(s*.3)),h=Wt(m),B=h==="rtl"?"ArrowLeft":"ArrowRight",H=L=>{L!==0&&(i.preventDefault(),Zo(m,L))},E=L=>{i.preventDefault(),Qo(m,L)};switch(i.key){case"ArrowLeft":case"ArrowRight":H(i.key===B?f:-f);return;case"PageDown":H(s);return;case"PageUp":H(-s);return;case"Home":E(h==="rtl"?l:0);return;case"End":E(h==="rtl"?0:l);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[gt?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:gt}):null,o.jsxs("table",{"aria-label":bt,"aria-labelledby":X,"aria-busy":F||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:ko},children:[wt?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:b}):null,o.jsx("thead",{children:o.jsx("tr",{children:e.map((i,m)=>{const l=String(i.key),s=A[m]??`${l}__index-${m}`,f=M(i),h=U.length>1,B=f&&(x==null?void 0:x.key)===l?x.direction:void 0,H=B&&(x==null?void 0:x.renderKey)===s?B:void 0,E=!F&&h?H:void 0,L=E?E==="asc"?"ascending":"descending":void 0,oe=i.align??"left",J=It(i,Lt(l,m)),lt=B==="asc"?"desc":"asc",ht={columnKey:l,columnHeader:J,nextDirection:lt};let re;try{re=xo(ht),Ho.current=!1}catch{re=void 0}const xt=ce(i.sortLabelledBy),Fo=xt?void 0:ce(typeof re=="string"?re:void 0,Kt(ht)),K=F||!h,Wo=K?void 0:P.length>1?$o:bo,St=!K&&Eo===s,ft=!K&&Co===s,Bt=!K&&Ao===s,Po=St||Bt,Rt=()=>{K||(ae({key:l,direction:lt,renderKey:s}),nt==null||nt(l,lt))};return o.jsx("th",{scope:"col","aria-sort":L,style:{textAlign:oe,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:Lo[m]},children:f?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:c=>{q.current[s]=c},"aria-labelledby":xt,"aria-label":Fo,"aria-keyshortcuts":Wo,disabled:K,onClick:c=>{const R=Date.now()-ee.current,se=c.detail===0&&rt.current===s&&ee.current>0&&R<=Ct;ne(),!se&&Rt()},onMouseEnter:()=>{K||st(s)},onMouseLeave:()=>{st(c=>c===s?null:c),W(c=>c===s?null:c)},onPointerDown:c=>{K||c.ctrlKey||dt(c.button)&&(V.current=!1,_(R=>R===s?null:R),W(s))},onPointerUp:c=>{dt(c.button)&&W(R=>R===s?null:R)},onMouseDown:c=>{K||c.button!==0||c.ctrlKey||(V.current=!1,_(R=>R===s?null:R),W(s))},onMouseUp:c=>{c.button===0&&W(R=>R===s?null:R)},onPointerCancel:()=>{W(c=>c===s?null:c)},onFocus:()=>{if(K){_(c=>c===s?null:c);return}_(c=>Uo(q.current[s],V.current)?s:c===s?null:c)},onBlur:()=>{_(c=>c===s?null:c),W(c=>c===s?null:c)},onKeyDown:c=>{var se,kt,Tt,Ht;if(V.current=!0,tt==null||tt(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(c.key==="Home"){const I=P[0];if(!I)return;c.preventDefault(),(se=q.current[I])==null||se.focus();return}if(c.key==="End"){const I=P[P.length-1];if(!I)return;c.preventDefault(),(kt=q.current[I])==null||kt.focus();return}if(c.key==="PageDown"||c.key==="PageUp"){const I=P.indexOf(s);if(I<0)return;const Dt=c.key==="PageDown"?1:-1,ie=Math.max(0,Math.min(P.length-1,I+Dt));if(ie===I)return;c.preventDefault();const ut=P[ie];(Tt=q.current[ut])==null||Tt.focus();return}if(c.key==="ArrowLeft"||c.key==="ArrowRight"){const I=P.indexOf(s);if(I<0)return;const ie=Wt(c.currentTarget)==="rtl"?"ArrowLeft":"ArrowRight",ut=c.key===ie?1:-1,Et=Math.max(0,Math.min(P.length-1,I+ut));if(Et===I)return;c.preventDefault();const Mo=P[Et];(Ht=q.current[Mo])==null||Ht.focus();return}if(!Ft(c.key)||_o(c)||(c.preventDefault(),c.repeat))return;W(s),rt.current=s,ee.current=Date.now();const R=c.currentTarget.ownerDocument.defaultView??window;z.current!==null&&(te.current??R).clearTimeout(z.current),te.current=R,z.current=R.setTimeout(()=>{ne()},Ct),Rt()},onKeyUp:c=>{c.altKey||c.ctrlKey||c.metaKey||Ft(c.key)&&W(R=>R===s?null:R)},style:{border:Po?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:ft?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":St?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:K?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:K?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Bt?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ft?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,o.jsx("span",{"aria-hidden":"true",children:E==="asc"?"▲":E==="desc"?"▼":"↕"})]}):i.header},s)})})}),o.jsx("tbody",{children:F?o.jsx("tr",{children:o.jsx("td",{colSpan:vt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Bo})})}):U.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:vt,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Ro})})}):U.map((i,m)=>{const l=i.row,s=String(i.sourceIndex),f=Ko[i.sourceIndex]??s;return o.jsx("tr",{style:{background:m%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map((h,B)=>{const H=h.render?h.render(l,m,i.sourceIndex):String(l[String(h.key)]??""),E=A[B]??`${String(h.key)}__index-${B}`,L={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:h.align??"left"};return h.rowHeader?o.jsx("th",{scope:"row",style:{...L,fontWeight:"var(--aurora-font-weight-medium)"},children:H},E):o.jsx("td",{style:L,children:H},E)})},f)})})]})]})}function Kt({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function jt({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function Vo(e,t){if(typeof e=="string"){const n=Z(e);if(n.length>0)return n}return t}function Ft(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function _o(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function dt(e){return typeof e!="number"||e<=0}function Uo(e,t){if(!e)return t;try{return e.matches(":focus-visible")||t}catch{return t}}function Wt(e){var b;const n=(e.ownerDocument.defaultView??window).getComputedStyle(e).direction;return n==="rtl"||n==="ltr"?n:((b=e.closest("[dir]"))==null?void 0:b.getAttribute("dir"))==="rtl"?"rtl":"ltr"}function Go(e){if(typeof e=="number")return Number.isFinite(e)&&e>0?e:560;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}return 560}function Yo(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="asc"||n==="desc")return n}return t}function Jo(e){if(typeof e=="number")return Number.isFinite(e)&&e>=0?e:void 0;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}}function go(e,t){return typeof e!="boolean"?t:e}function M(e){return go(e==null?void 0:e.sortable,!1)}function et(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>et(t)):y.isValidElement(e)}function mt(e){if(typeof e=="string")return e;if(typeof e=="number")return String(e);if(Array.isArray(e))return Z(e.map(n=>mt(n)).filter(n=>n.length>0).join(" "));if(!y.isValidElement(e))return"";const t=e.props;if(t["aria-hidden"]===!0||t["aria-hidden"]==="true")return"";if(typeof t["aria-label"]=="string"){const n=Z(t["aria-label"]);if(n.length>0)return n}return mt(t.children)}function Z(e){return e.replace(/\s+/g," ").trim()}function ce(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function Zo(e,t){if(typeof e.scrollBy=="function"){e.scrollBy({left:t,behavior:"auto"});return}e.scrollLeft+=t}function Qo(e,t){if(typeof e.scrollTo=="function"){e.scrollTo({left:t,behavior:"auto"});return}e.scrollLeft=t}d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return o.jsx(wo,{tone:t,children:e.status})}}];function Pt(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function Mt(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function Xo(){const[e,t]=y.useState(!1);return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>t(n=>!n),children:"Toggle loading"}),o.jsx(d,{columns:S,data:g,loading:e,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const dr={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},le={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(d,{caption:"Release readiness board",columns:S,data:g,rowKey:e=>e.id,defaultSortKey:"id"})})},ue={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(d,{caption:"Release readiness board",columns:S,data:g,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},de={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:k,children:"Runtime sort-direction config from CMS/JSON should normalize mixed-case tokens before sorting."}),o.jsx(d,{caption:"Runtime sort direction normalization",columns:S,data:g,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:" DESC "})]}),play:async({canvasElement:e})=>{const n=u(e).getByRole("table",{name:"Runtime sort direction normalization"}),r=u(n).getByRole("columnheader",{name:/Issue/});await a(r).toHaveAttribute("aria-sort","descending"),await a(u(n).getAllByRole("rowheader")[0]).toHaveTextContent("DLG-210"),await a(u(n).getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},me={render:()=>{const e=[...S,{key:"action",header:"Action",width:160,render:t=>o.jsx(No,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return o.jsx(d,{columns:e,data:g,rowKey:t=>t.id})}},ye={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Issue sort ascending"});await a(t.getByText("No release items yet.")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},pe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},we={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g,defaultSortKey:"id",rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(t.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},be={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:k,children:"When sortable controls are unavailable and horizontal overflow exists, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=u(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:T=>{b=T}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:T=0})=>{b+=Number(T)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:T=0})=>{b=Number(T)||0}}),v(r,new r.Event("resize")),await N(()=>{a(n).toHaveAttribute("role","region"),a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await p.tab(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const D=T=>T.preventDefault();n.addEventListener("keydown",D,!0),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",D,!0),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},ge={render:()=>o.jsxs(w,{maxWidth:"760px",gap:10,children:[o.jsx("p",{style:k,children:"Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:g}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=u(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex"),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await p.tab(),await a(t.getByRole("button",{name:"Before table"})).toHaveFocus(),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},ve={render:()=>o.jsxs(w,{maxWidth:"360px",gap:10,children:[o.jsxs("p",{style:k,children:["Use ",o.jsx("code",{children:"minTableWidth"})," to keep compact layouts readable without forcing overflow."]}),o.jsx(d,{minTableWidth:320,columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:g})]}),play:async({canvasElement:e})=>{const n=u(e).getByRole("table",{name:"Data table"}),r=e.querySelector("[data-aurora-table-scroll-container]");await a(n).toHaveStyle({minWidth:"320px"}),await a(r).not.toHaveAttribute("role"),await a(r).not.toHaveAttribute("tabindex"),await a(r).not.toHaveAttribute("aria-keyshortcuts")}},he={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:k,children:"In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual direction."}),o.jsx("div",{dir:"rtl",children:o.jsx(d,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g})})]}),play:async({canvasElement:e})=>{const t=u(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull();const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:T=>{b=T}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:T=0})=>{b+=Number(T)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:T=0})=>{b=Number(T)||0}}),v(r,new r.Event("resize")),await N(()=>{a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),n.focus(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(420),v.keyDown(n,{key:"End"}),await a(n.scrollLeft).toBe(0);const D=T=>T.preventDefault();n.addEventListener("keydown",D,!0),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",D,!0),await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},xe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:k,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(d,{columns:S,data:g,defaultSortKey:"id"})]}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),r.focus(),await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},Se={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:k,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(d,{columns:S,data:g,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Status sort ascending"}),r=t.getByRole("button",{name:"After table"});v.mouseDown(n),n.focus(),await p.click(r),await p.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},fe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(t.getByText("Syncing release feed...")).toBeInTheDocument(),await a(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(b).not.toHaveAttribute("aria-sort")}},Be={render:()=>{const[e,t]=y.useState("none"),n=[{key:"id",header:"Issue",width:120,sortable:"true",rowHeader:!0},{key:"status",header:"Status",width:160,sortable:!0,sortAccessor:r=>r.status,render:r=>{const b=r.status==="ready"?"success":r.status==="review"?"default":"danger";return o.jsx(wo,{tone:b,children:r.status})}}];return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:k,children:"Runtime bool-like config from CMS/JSON should degrade safely: invalid `loading` and `columns[].sortable` values fall back to deterministic `false`."}),o.jsxs("p",{style:k,children:["Sort trace:"," ",o.jsx("strong",{"data-testid":"table-runtime-boolean-sort-trace",style:Q,children:e})]}),o.jsx(d,{columns:n,data:g,defaultSortKey:"id",loading:"invalid-loading-flag",loadingContent:"Should stay hidden",onSortChange:(r,b)=>t(`${r} ${b}`)})]})},play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("columnheader",{name:/Issue/}),b=t.getByRole("columnheader",{name:/Status/}),D=t.getByRole("button",{name:/Status sort/});await a(n).not.toHaveAttribute("aria-busy"),await a(t.queryByText("Should stay hidden")).not.toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"BTN-102"})).toBeInTheDocument(),await a(r).not.toHaveAttribute("aria-sort"),await a(u(r).queryByRole("button")).toBeNull(),await a(D).toBeEnabled(),await a(D).toHaveAttribute("aria-keyshortcuts","Enter Space"),await p.click(D),await a(b).toHaveAttribute("aria-sort","ascending"),await a(t.getByTestId("table-runtime-boolean-sort-trace")).toHaveTextContent("status asc")}},Re={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:g,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("status")).toHaveTextContent("Loading data...")}},ke={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:[],emptyContent:"   "})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("status")).toHaveTextContent("No data available.")}},Te={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(d,{columns:S,data:g,loading:!0,loadingContent:0}),o.jsx(d,{columns:S,data:[],emptyContent:0})]}),play:async({canvasElement:e})=>{const n=u(e).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},He={render:()=>o.jsx(Xo,{}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Toggle loading"}),r=t.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),await p.click(n);const b=t.getByRole("button",{name:"Issue sort descending"});await a(b).toBeDisabled(),await a(b.style.transform).toContain("translateY(0"),await a(b.style.boxShadow).toBe("none")}},De={render:function(){const[t,n]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:k,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:t})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(d,{columns:S,data:g,defaultSortKey:"id",onSortChange:(r,b)=>n(`${r} ${b}`)})]})},play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByTestId("primary-pointer-sort-state");await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(b).toHaveTextContent("id asc"),v.mouseDown(r,{button:0}),await N(()=>{a(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await N(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await N(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await N(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),await p.click(r),await a(b).toHaveTextContent("id desc")}},Ee={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{ariaLabel:"Release checklist table",columns:S,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Ce={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},Ae={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{caption:0,columns:S,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const n=u(e).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},Ie={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(d,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:g,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const n=u(e).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},Le={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function er(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:k,children:["Active sort: ",o.jsx("strong",{style:Q,children:e})]}),o.jsx(d,{columns:S,data:g,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}function tr(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:k,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:k,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:Q,children:e})]}),o.jsx(d,{columns:S,data:g,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const Ke={render:()=>o.jsx(er,{}),play:async({canvasElement:e})=>{const t=u(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=t.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await p.keyboard("{ArrowRight}");const b=t.getByRole("button",{name:"Component sort ascending"});await a(b).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{End}");const D=t.getByRole("button",{name:"Status sort ascending"});await a(D).toHaveFocus(),await p.keyboard("{Home}"),await a(r).toHaveFocus(),await p.keyboard("{PageDown}");const T=t.getByRole("button",{name:"Component sort ascending"});await a(T).toHaveFocus(),await p.keyboard("{PageUp}"),await a(r).toHaveFocus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const $=t.getByRole("button",{name:"Issue sort ascending"}),j=$.closest("th");await a(j).toHaveAttribute("aria-sort","descending"),v.keyDown($,{key:"Enter",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),$.focus(),v.keyDown($,{key:"Space",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),await p.keyboard("{Space}"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const C=t.getByRole("button",{name:"Issue sort descending"});C.focus(),v.keyDown(C,{key:"ArrowRight",ctrlKey:!0}),v.keyDown(C,{key:"ArrowLeft",metaKey:!0}),v.keyDown(C,{key:"End",ctrlKey:!0}),v.keyDown(C,{key:"Home",altKey:!0}),v.keyDown(C,{key:"PageDown",metaKey:!0}),v.keyDown(C,{key:"PageUp",ctrlKey:!0}),await a(C).toHaveFocus(),v.keyDown(C,{key:"Enter",ctrlKey:!0}),v.keyDown(C,{key:"Space",metaKey:!0}),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending");const O=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});O.preventDefault(),C.dispatchEvent(O),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await p.keyboard("{Shift>}{Enter}{/Shift}"),await N(()=>{a(t.getByText("id desc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","descending")}),t.getByRole("button",{name:"Issue sort ascending"}).focus(),await p.keyboard("{Shift>}{Space}{/Shift}"),await N(()=>{a(t.getByText("id asc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","ascending")})}},je={render:()=>o.jsx(tr,{}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Issue sort descending"});n.focus(),v.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),v.keyDown(n,{key:"Enter"}),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Fe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:k,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(d,{columns:S,data:g,defaultSortKey:"id"})})]}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Issue sort descending"}),r=t.getByRole("button",{name:"Component sort ascending"});n.focus(),v.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),v.keyDown(n,{key:"ArrowRight",metaKey:!0}),v.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function nr(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:k,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:k,children:["Active sort: ",o.jsx("strong",{style:Q,children:e})]}),o.jsx(d,{columns:S,data:g,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const We={render:()=>o.jsx(nr,{}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Pt(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Pt(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Mt(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Mt(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Pe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"按降序排序：Issue"});await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await p.click(n),await a(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},Me={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:g,defaultSortKey:"id",getSortAriaLabel:()=>{throw new Error("runtime aria-label formatter failure")}})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Issue sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},Ne={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:g,defaultSortKey:"id",getSortStatusText:()=>"   "})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.")}},$e={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:S,data:g,defaultSortKey:"id",getSortStatusText:()=>{throw new Error("runtime status formatter failure")}})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.")}},Oe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=t.getByRole("button",{name:"Release date sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},qe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ze={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ve={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=t.getByRole("button",{name:"Column 1 sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},_e={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(d,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=t.getByRole("button",{name:"release stage ready sort descending"});await p.click(n),await a(t.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},Ue={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(d,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Ge={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(w,{maxWidth:"min(100%, 620px)",children:o.jsx(d,{columns:e,data:g,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("columnheader",{name:"Component"}),r=t.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function ar(){const[e,t]=y.useState(!1),n=y.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:e,width:140}],[e]);return o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:k,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:k,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:Q,children:e?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>t(!0),children:"Load status sortable schema"}),o.jsx(d,{columns:n,data:g,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ye={render:()=>o.jsx(ar,{}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("button",{name:"Load status sortable schema"}),r=t.getByRole("columnheader",{name:"Status"});await a(t.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await p.click(n),await a(t.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},vo=g.map(e=>({...e,note:""})),ho=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>o.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Je={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(d,{columns:ho,data:vo,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ze={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(d,{columns:ho,data:vo,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Qe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:k,children:"When `rowKey` throws at runtime, table falls back to source-index row keys and keeps sort flows stable."}),o.jsx(d,{columns:S,data:g,defaultSortKey:"component",rowKey:(e,t)=>{if(e.id==="DLG-210")throw new Error("row key formatter failed");return`${t}-${e.id}`}})]}),play:async({canvasElement:e})=>{const t=u(e);await a(t.getByRole("cell",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Dialog"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"PromptInput"})).toBeInTheDocument(),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("cell",{name:"Dialog"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Button"})).toBeInTheDocument()}},or=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],Xe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:k,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(d,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,n)=>`${e.key} (visual:${t}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:or,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=u(e);await p.click(t.getByRole("button",{name:"Score sort descending"})),await a(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Nt,$t,Ot;le.parameters={...le.parameters,docs:{...(Nt=le.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(Ot=($t=le.parameters)==null?void 0:$t.docs)==null?void 0:Ot.source}}};var qt,zt,Vt;ue.parameters={...ue.parameters,docs:{...(qt=ue.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Vt=(zt=ue.parameters)==null?void 0:zt.docs)==null?void 0:Vt.source}}};var _t,Ut,Gt;de.parameters={...de.parameters,docs:{...(_t=de.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Gt=(Ut=de.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var Yt,Jt,Zt;me.parameters={...me.parameters,docs:{...(Yt=me.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Zt=(Jt=me.parameters)==null?void 0:Jt.docs)==null?void 0:Zt.source}}};var Qt,Xt,en;ye.parameters={...ye.parameters,docs:{...(Qt=ye.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(en=(Xt=ye.parameters)==null?void 0:Xt.docs)==null?void 0:en.source}}};var tn,nn,an;pe.parameters={...pe.parameters,docs:{...(tn=pe.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(an=(nn=pe.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,rn,sn;we.parameters={...we.parameters,docs:{...(on=we.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(sn=(rn=we.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var cn,ln,un;be.parameters={...be.parameters,docs:{...(cn=be.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(un=(ln=be.parameters)==null?void 0:ln.docs)==null?void 0:un.source}}};var dn,mn,yn;ge.parameters={...ge.parameters,docs:{...(dn=ge.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(yn=(mn=ge.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};var pn,wn,bn;ve.parameters={...ve.parameters,docs:{...(pn=ve.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(bn=(wn=ve.parameters)==null?void 0:wn.docs)==null?void 0:bn.source}}};var gn,vn,hn;he.parameters={...he.parameters,docs:{...(gn=he.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(hn=(vn=he.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var xn,Sn,fn;xe.parameters={...xe.parameters,docs:{...(xn=xe.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(fn=(Sn=xe.parameters)==null?void 0:Sn.docs)==null?void 0:fn.source}}};var Bn,Rn,kn;Se.parameters={...Se.parameters,docs:{...(Bn=Se.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(kn=(Rn=Se.parameters)==null?void 0:Rn.docs)==null?void 0:kn.source}}};var Tn,Hn,Dn;fe.parameters={...fe.parameters,docs:{...(Tn=fe.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Dn=(Hn=fe.parameters)==null?void 0:Hn.docs)==null?void 0:Dn.source}}};var En,Cn,An;Be.parameters={...Be.parameters,docs:{...(En=Be.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(An=(Cn=Be.parameters)==null?void 0:Cn.docs)==null?void 0:An.source}}};var In,Ln,Kn;Re.parameters={...Re.parameters,docs:{...(In=Re.parameters)==null?void 0:In.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(Kn=(Ln=Re.parameters)==null?void 0:Ln.docs)==null?void 0:Kn.source}}};var jn,Fn,Wn;ke.parameters={...ke.parameters,docs:{...(jn=ke.parameters)==null?void 0:jn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(Wn=(Fn=ke.parameters)==null?void 0:Fn.docs)==null?void 0:Wn.source}}};var Pn,Mn,Nn;Te.parameters={...Te.parameters,docs:{...(Pn=Te.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(Nn=(Mn=Te.parameters)==null?void 0:Mn.docs)==null?void 0:Nn.source}}};var $n,On,qn;He.parameters={...He.parameters,docs:{...($n=He.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(qn=(On=He.parameters)==null?void 0:On.docs)==null?void 0:qn.source}}};var zn,Vn,_n;De.parameters={...De.parameters,docs:{...(zn=De.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
}`,...(_n=(Vn=De.parameters)==null?void 0:Vn.docs)==null?void 0:_n.source}}};var Un,Gn,Yn;Ee.parameters={...Ee.parameters,docs:{...(Un=Ee.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(Yn=(Gn=Ee.parameters)==null?void 0:Gn.docs)==null?void 0:Yn.source}}};var Jn,Zn,Qn;Ce.parameters={...Ce.parameters,docs:{...(Jn=Ce.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(Qn=(Zn=Ce.parameters)==null?void 0:Zn.docs)==null?void 0:Qn.source}}};var Xn,ea,ta;Ae.parameters={...Ae.parameters,docs:{...(Xn=Ae.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(ta=(ea=Ae.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,aa,oa;Ie.parameters={...Ie.parameters,docs:{...(na=Ie.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(aa=Ie.parameters)==null?void 0:aa.docs)==null?void 0:oa.source}}};var ra,sa,ia;Le.parameters={...Le.parameters,docs:{...(ra=Le.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(sa=Le.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var ca,la,ua;Ke.parameters={...Ke.parameters,docs:{...(ca=Ke.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(ua=(la=Ke.parameters)==null?void 0:la.docs)==null?void 0:ua.source}}};var da,ma,ya;je.parameters={...je.parameters,docs:{...(da=je.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(ma=je.parameters)==null?void 0:ma.docs)==null?void 0:ya.source}}};var pa,wa,ba;Fe.parameters={...Fe.parameters,docs:{...(pa=Fe.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ba=(wa=Fe.parameters)==null?void 0:wa.docs)==null?void 0:ba.source}}};var ga,va,ha;We.parameters={...We.parameters,docs:{...(ga=We.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(ha=(va=We.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var xa,Sa,fa;Pe.parameters={...Pe.parameters,docs:{...(xa=Pe.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(fa=(Sa=Pe.parameters)==null?void 0:Sa.docs)==null?void 0:fa.source}}};var Ba,Ra,ka;Me.parameters={...Me.parameters,docs:{...(Ba=Me.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} defaultSortKey="id" getSortAriaLabel={() => {
      throw new Error("runtime aria-label formatter failure");
    }} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const descendingButton = canvas.getByRole("button", {
      name: "Issue sort descending"
    });
    await userEvent.click(descendingButton);
    await expect(canvas.getByRole("button", {
      name: "Issue sort ascending"
    })).toBeInTheDocument();
  }
}`,...(ka=(Ra=Me.parameters)==null?void 0:Ra.docs)==null?void 0:ka.source}}};var Ta,Ha,Da;Ne.parameters={...Ne.parameters,docs:{...(Ta=Ne.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Da=(Ha=Ne.parameters)==null?void 0:Ha.docs)==null?void 0:Da.source}}};var Ea,Ca,Aa;$e.parameters={...$e.parameters,docs:{...(Ea=$e.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} defaultSortKey="id" getSortStatusText={() => {
      throw new Error("runtime status formatter failure");
    }} />
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
}`,...(Aa=(Ca=$e.parameters)==null?void 0:Ca.docs)==null?void 0:Aa.source}}};var Ia,La,Ka;Oe.parameters={...Oe.parameters,docs:{...(Ia=Oe.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(Ka=(La=Oe.parameters)==null?void 0:La.docs)==null?void 0:Ka.source}}};var ja,Fa,Wa;qe.parameters={...qe.parameters,docs:{...(ja=qe.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Wa=(Fa=qe.parameters)==null?void 0:Fa.docs)==null?void 0:Wa.source}}};var Pa,Ma,Na;ze.parameters={...ze.parameters,docs:{...(Pa=ze.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Na=(Ma=ze.parameters)==null?void 0:Ma.docs)==null?void 0:Na.source}}};var $a,Oa,qa;Ve.parameters={...Ve.parameters,docs:{...($a=Ve.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(qa=(Oa=Ve.parameters)==null?void 0:Oa.docs)==null?void 0:qa.source}}};var za,Va,_a;_e.parameters={..._e.parameters,docs:{...(za=_e.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(_a=(Va=_e.parameters)==null?void 0:Va.docs)==null?void 0:_a.source}}};var Ua,Ga,Ya;Ue.parameters={...Ue.parameters,docs:{...(Ua=Ue.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(Ya=(Ga=Ue.parameters)==null?void 0:Ga.docs)==null?void 0:Ya.source}}};var Ja,Za,Qa;Ge.parameters={...Ge.parameters,docs:{...(Ja=Ge.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
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
}`,...(Qa=(Za=Ge.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var Xa,eo,to;Ye.parameters={...Ye.parameters,docs:{...(Xa=Ye.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
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
}`,...(to=(eo=Ye.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};var no,ao,oo;Je.parameters={...Je.parameters,docs:{...(no=Je.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(oo=(ao=Je.parameters)==null?void 0:ao.docs)==null?void 0:oo.source}}};var ro,so,io;Ze.parameters={...Ze.parameters,docs:{...(ro=Ze.parameters)==null?void 0:ro.docs,source:{originalSource:`{
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
}`,...(io=(so=Ze.parameters)==null?void 0:so.docs)==null?void 0:io.source}}};var co,lo,uo;Qe.parameters={...Qe.parameters,docs:{...(co=Qe.parameters)==null?void 0:co.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 760px)" gap={8}>
      <p style={storyMutedTextStyle}>
        When \`rowKey\` throws at runtime, table falls back to source-index row keys and keeps sort
        flows stable.
      </p>
      <Table columns={columns} data={rows} defaultSortKey="component" rowKey={(row, rowIndex) => {
      if (row.id === "DLG-210") {
        throw new Error("row key formatter failed");
      }
      return \`\${rowIndex}-\${row.id}\`;
    }} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("cell", {
      name: "Button"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", {
      name: "Dialog"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", {
      name: "PromptInput"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Component sort descending"
    }));
    await expect(canvas.getByRole("cell", {
      name: "Dialog"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", {
      name: "Button"
    })).toBeInTheDocument();
  }
}`,...(uo=(lo=Qe.parameters)==null?void 0:lo.docs)==null?void 0:uo.source}}};var mo,yo,po;Xe.parameters={...Xe.parameters,docs:{...(mo=Xe.parameters)==null?void 0:mo.docs,source:{originalSource:`{
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
}`,...(po=(yo=Xe.parameters)==null?void 0:yo.docs)==null?void 0:po.source}}};const mr=["ReleaseChecklist","DescendingDefaultSortDirection","RuntimeSortDirectionNormalization","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","ScrollContainerSkipsTabStopWithoutOverflow","CompactMinWidthWithoutOverflow","RtlScrollContainerKeyboardPanning","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","RuntimeBooleanConfigNormalization","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortAriaLabelErrorFallback","SortStatusTextFallback","SortStatusTextErrorFallback","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RowKeyCallbackThrowFallback","RenderIndexSemantics"];export{Ce as AccessibleNameFallback,Ie as AccessibleNameLabelledByHeading,Ee as AccessibleNameWithoutCaption,ze as AriaLabelHeaderAutoSortLabel,ke as BlankEmptyContentFallback,Ve as BlankKeySortLabelFallback,Re as BlankLoadingContentFallback,ve as CompactMinWidthWithoutOverflow,Ye as DeferredColumnsDefaultSortRecovery,ue as DescendingDefaultSortDirection,ye as EmptyState,Je as FallbackRowKeyStability,We as ImeCompositionGuard,Ge as InvalidDefaultSortKeyFallback,xe as KeyboardFocusRingAfterPointer,Se as KeyboardFocusRingShiftTabReentry,be as KeyboardReachableScrollContainer,He as LoadingDisablesResetsSortVisualState,fe as LoadingState,Pe as LocalizedSortLabels,je as ManagedSortKeysPreemptedByLocalHandler,_e as NormalizedKeySortLabelFallback,Ae as NumericCaptionName,Te as NumericFeedbackCopySemantics,De as PrimaryPointerOnlySortPress,le as ReleaseChecklist,Xe as RenderIndexSemantics,qe as RichTextHeaderAutoSortLabel,Le as RowHeaderSemantics,Qe as RowKeyCallbackThrowFallback,Fe as RtlArrowNavigation,he as RtlScrollContainerKeyboardPanning,Be as RuntimeBooleanConfigNormalization,de as RuntimeSortDirectionNormalization,ge as ScrollContainerSkipsTabStopWithoutOverflow,pe as SingleRowSortDisabled,we as SingleSortableColumnShortcutHints,Me as SortAriaLabelErrorFallback,Oe as SortLabelForCustomHeader,Ue as SortLabelledByPrecedence,$e as SortStatusTextErrorFallback,Ne as SortStatusTextFallback,Ke as SortTelemetry,Ze as SourceIndexRowKeyStability,me as WithRowAction,mr as __namedExportsOrder,dr as default};
