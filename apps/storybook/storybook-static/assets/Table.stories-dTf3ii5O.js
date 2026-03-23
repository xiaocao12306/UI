import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as Vo}from"./Button-DvJUO9m9.js";import{r as y}from"./index-BWu4c2F4.js";import{B as ho}from"./Badge-Cvc2u0v9.js";import{within as l,expect as a,userEvent as p,fireEvent as v,waitFor as N}from"./index-DgAF9SIF.js";import{S as w,s as R,a as X}from"./storyShowcase-DlKirntE.js";const xo="Enter Space",_o=`${xo} Home End PageDown PageUp ArrowLeft ArrowRight`,Uo="ArrowLeft ArrowRight Home End PageDown PageUp",Go=48,Yo=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),At=400;function It(e,t,n,r){if(!n)return null;const b=e.findIndex(E=>String(E.key)===n&&M(E));return b<0?null:{key:n,direction:r,renderKey:t[b]??`${n}__index-${b}`}}function Lt(e,t,n){if(typeof e.sortLabel=="string"&&e.sortLabel.trim().length>0)return e.sortLabel.trim();const r=Q(yt(e.header));return r.length>0?r:t}function Kt(e,t){const n=Q(e.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:t>=0?`Column ${t+1}`:"Column"}function u({columns:e,data:t,rowKey:n,minTableWidth:r,caption:b,ariaLabel:E,ariaLabelledBy:T,loading:$=!1,loadingContent:j="Loading data...",emptyContent:C="No data available.",defaultSortKey:q,defaultSortDirection:pt="asc",getSortAriaLabel:Ro=jt,getSortStatusText:wt=Ft,onSortKeyDown:nt,onSortChange:at}){const bt=tt(b),ko=tt(j),To=tt(C),Ho=ko?j:"Loading data...",Do=To?C:"No data available.",F=So($,!1),ot=er(pt,"asc"),ee=ce(T),gt=ee?void 0:ce(E,bt?void 0:"Data table"),Eo=Xo(r),z=y.useRef({}),rt=y.useRef(null),st=y.useRef(null),te=y.useRef(0),V=y.useRef(null),ne=y.useRef(null),_=y.useRef(!0);y.useRef(null),y.useRef(null);const Co=y.useRef(!1),Ao=y.useRef(!1);y.useRef(null);const Io=y.useRef(!1),Lo=y.useRef(!1),[Ko,it]=y.useState(null),[jo,W]=y.useState(null),[Fo,U]=y.useState(null),[Wo,ct]=y.useState(!1);y.useEffect(()=>{var s;const i=((s=rt.current)==null?void 0:s.ownerDocument)??document,m=f=>{f.metaKey||f.altKey||f.ctrlKey||(_.current=!0)},d=f=>{"button"in f&&!mt(f.button)||"ctrlKey"in f&&f.ctrlKey||(_.current=!1)};return i.addEventListener("keydown",m,!0),i.addEventListener("pointerdown",d,!0),i.addEventListener("mousedown",d,!0),i.addEventListener("touchstart",d,!0),()=>{i.removeEventListener("keydown",m,!0),i.removeEventListener("pointerdown",d,!0),i.removeEventListener("mousedown",d,!0),i.removeEventListener("touchstart",d,!0)}},[]);const ae=y.useCallback(()=>{st.current=null,te.current=0,V.current!==null&&((ne.current??window).clearTimeout(V.current),V.current=null),ne.current=null},[]);y.useEffect(()=>()=>{ae()},[ae]);const A=y.useMemo(()=>{const i=new Map;return e.map(m=>{const d=String(m.key),s=i.get(d)??0;return i.set(d,s+1),s===0?d:`${d}__duplicate-${s}`})},[e]),Po=y.useMemo(()=>e.map(i=>tr(i.width)),[e]),[x,oe]=y.useState(()=>It(e,A,q,ot)),P=y.useMemo(()=>F||t.length<=1?[]:e.reduce((i,m,d)=>(M(m)&&i.push(A[d]??`${String(m.key)}__index-${d}`),i),[]),[e,t.length,A,F]);y.useEffect(()=>{if(!x)return;const i=A.findIndex(s=>s===x.renderKey);if(i>=0&&M(e[i]))return;const m=e.findIndex(s=>M(s)&&String(s.key)===x.key);if(m<0){oe(null);return}const d=A[m]??`${x.key}__index-${m}`;d!==x.renderKey&&oe(s=>s&&{...s,renderKey:d})},[e,A,x]),y.useEffect(()=>{if(x)return;const i=It(e,A,q,ot);i&&oe(i)},[e,q,A,ot,x]);const lt=y.useMemo(()=>{let i=!1;const m=t.map((d,s)=>{if(!n)return String(s);try{return String(n(d,s))}catch{return i=!0,String(s)}});return i||(Co.current=!1),m},[t,n]),Mo=y.useMemo(()=>{const i=new Map;return lt.map((m,d)=>{const s=i.get(m)??0;return i.set(m,s+1),s===0?m:`${m}__dup-${d}`})},[lt]);y.useEffect(()=>{},[n,lt]),y.useEffect(()=>{},[e]),y.useEffect(()=>{},[e]);const G=y.useMemo(()=>{const i=t.map((h,B)=>({row:h,sourceIndex:B}));if(!x)return i;const m=A.findIndex(h=>h===x.renderKey),d=m>=0?m:e.findIndex(h=>String(h.key)===x.key),s=d>=0?e[d]:void 0;if(!s||!M(s))return i;const f=s.sortAccessor??(h=>{const B=h[String(s.key)];return B instanceof Date||typeof B=="number"||typeof B=="string"?B:String(B??"")});return i.sort((h,B)=>{const H=f(h.row),D=f(B.row);if(typeof H=="string"&&typeof D=="string"){const J=Yo.compare(H,D);return J!==0?x.direction==="asc"?J:-J:h.sourceIndex-B.sourceIndex}const L=H instanceof Date?H.getTime():H,O=D instanceof Date?D.getTime():D;return L<O?x.direction==="asc"?-1:1:L>O?x.direction==="asc"?1:-1:h.sourceIndex-B.sourceIndex})},[e,t,A,x]),No=typeof document>"u"?void 0:document,vt=y.useMemo(()=>{if(F||G.length<=1||!x)return"";const i=A.findIndex(H=>H===x.renderKey),m=i>=0?i:e.findIndex(H=>String(H.key)===x.key),d=m>=0?e[m]:void 0;if(!d||!M(d))return"";const s=Lt(d,Kt(x.key,m)),f={columnKey:x.key,columnHeader:s,direction:x.direction},h=Ft(f);let B;try{B=wt(f),Lo.current=!1}catch{B=void 0}return Jo(B,h)},[e,wt,No,A,F,x,G.length]),Z=!F&&G.length>1&&e.some(i=>M(i)),Y=!Z&&Wo,ht=Math.max(e.length,1);return y.useEffect(()=>{Z||(it(null),W(null),U(null))},[Z]),y.useEffect(()=>{if(Z){ct(!1);return}const i=rt.current;if(!i){ct(!1);return}const m=i.ownerDocument.defaultView??(typeof window>"u"?void 0:window);if(!m)return;const d=()=>{const f=i.scrollWidth-i.clientWidth>0;ct(h=>h===f?h:f)};d(),m.addEventListener("resize",d);let s=null;return typeof m.ResizeObserver=="function"&&(s=new m.ResizeObserver(d),s.observe(i)),()=>{m.removeEventListener("resize",d),s==null||s.disconnect()}},[e.length,t.length,Z,F]),o.jsxs("div",{ref:rt,"data-aurora-table-scroll-container":"",role:Y?"region":void 0,tabIndex:Y?0:void 0,"aria-label":Y?ee?void 0:gt??"Data table scroll container":void 0,"aria-labelledby":Y?ee:void 0,"aria-keyshortcuts":Y?Uo:void 0,onKeyDown:i=>{if(!Y||i.defaultPrevented||i.altKey||i.ctrlKey||i.metaKey||i.target!==i.currentTarget)return;const m=i.currentTarget,d=Math.max(0,m.scrollWidth-m.clientWidth);if(d<=0)return;const s=m.clientWidth,f=Math.max(Go,Math.floor(s*.3)),h=Pt(m),B=h==="rtl"?"ArrowLeft":"ArrowRight",H=L=>{L!==0&&(i.preventDefault(),nr(m,L))},D=L=>{i.preventDefault(),ar(m,L)};switch(i.key){case"ArrowLeft":case"ArrowRight":H(i.key===B?f:-f);return;case"PageDown":H(s);return;case"PageUp":H(-s);return;case"Home":D(h==="rtl"?d:0);return;case"End":D(h==="rtl"?0:d);return;default:return}},style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"auto"},children:[vt?o.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:vt}):null,o.jsxs("table",{"aria-label":gt,"aria-labelledby":ee,"aria-busy":F||void 0,style:{width:"100%",borderCollapse:"collapse",minWidth:Eo},children:[bt?o.jsx("caption",{style:{textAlign:"left",padding:"10px 12px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-sm)",borderBottom:"1px solid var(--aurora-border-default)"},children:b}):null,o.jsx("thead",{children:o.jsx("tr",{children:e.map((i,m)=>{const d=String(i.key),s=A[m]??`${d}__index-${m}`,f=M(i),h=G.length>1,B=f&&(x==null?void 0:x.key)===d?x.direction:void 0,H=B&&(x==null?void 0:x.renderKey)===s?B:void 0,D=!F&&h?H:void 0,L=D?D==="asc"?"ascending":"descending":void 0,O=i.align??"left",J=Lt(i,Kt(d,m)),ut=B==="asc"?"desc":"asc",xt={columnKey:d,columnHeader:J,nextDirection:ut};let re;try{re=Ro(xt),Io.current=!1}catch{re=void 0}const St=ce(i.sortLabelledBy),Oo=St?void 0:ce(typeof re=="string"?re:void 0,jt(xt)),K=F||!h,$o=K?void 0:P.length>1?_o:xo,ft=!K&&Ko===s,Bt=!K&&jo===s,Rt=!K&&Fo===s,qo=ft||Rt,kt=()=>{K||(oe({key:d,direction:ut,renderKey:s}),at==null||at(d,ut))};return o.jsx("th",{scope:"col","aria-sort":L,style:{textAlign:O,color:"var(--aurora-text-secondary)",background:"var(--aurora-surface-elevated)",borderBottom:"1px solid var(--aurora-border-default)",padding:"10px 12px",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",width:Po[m]},children:f?o.jsxs("button",{"data-aurora-reduced-motion":"transition",type:"button",ref:c=>{z.current[s]=c},"aria-labelledby":St,"aria-label":Oo,"aria-keyshortcuts":$o,disabled:K,onClick:c=>{const k=Date.now()-te.current,se=c.detail===0&&st.current===s&&te.current>0&&k<=At;ae(),!se&&kt()},onMouseEnter:()=>{K||it(s)},onMouseLeave:()=>{it(c=>c===s?null:c),W(c=>c===s?null:c)},onPointerDown:c=>{K||c.ctrlKey||mt(c.button)&&(_.current=!1,U(k=>k===s?null:k),W(s))},onPointerUp:c=>{mt(c.button)&&W(k=>k===s?null:k)},onMouseDown:c=>{K||c.button!==0||c.ctrlKey||(_.current=!1,U(k=>k===s?null:k),W(s))},onMouseUp:c=>{c.button===0&&W(k=>k===s?null:k)},onPointerCancel:()=>{W(c=>c===s?null:c)},onFocus:()=>{if(K){U(c=>c===s?null:c);return}U(c=>Qo(z.current[s],_.current)?s:c===s?null:c)},onBlur:()=>{U(c=>c===s?null:c),W(c=>c===s?null:c)},onKeyDown:c=>{var se,Tt,Ht,Dt;if(_.current=!0,nt==null||nt(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(c.key==="Home"){const I=P[0];if(!I)return;c.preventDefault(),(se=z.current[I])==null||se.focus();return}if(c.key==="End"){const I=P[P.length-1];if(!I)return;c.preventDefault(),(Tt=z.current[I])==null||Tt.focus();return}if(c.key==="PageDown"||c.key==="PageUp"){const I=P.indexOf(s);if(I<0)return;const Et=c.key==="PageDown"?1:-1,ie=Math.max(0,Math.min(P.length-1,I+Et));if(ie===I)return;c.preventDefault();const dt=P[ie];(Ht=z.current[dt])==null||Ht.focus();return}if(c.key==="ArrowLeft"||c.key==="ArrowRight"){const I=P.indexOf(s);if(I<0)return;const ie=Pt(c.currentTarget)==="rtl"?"ArrowLeft":"ArrowRight",dt=c.key===ie?1:-1,Ct=Math.max(0,Math.min(P.length-1,I+dt));if(Ct===I)return;c.preventDefault();const zo=P[Ct];(Dt=z.current[zo])==null||Dt.focus();return}if(!Wt(c.key)||Zo(c)||(c.preventDefault(),c.repeat))return;W(s),st.current=s,te.current=Date.now();const k=c.currentTarget.ownerDocument.defaultView??window;V.current!==null&&(ne.current??k).clearTimeout(V.current),ne.current=k,V.current=k.setTimeout(()=>{ae()},At),kt()},onKeyUp:c=>{c.altKey||c.ctrlKey||c.metaKey||Wt(c.key)&&W(k=>k===s?null:k)},style:{border:qo?"1px solid color-mix(in srgb, var(--aurora-accent-default) 48%, transparent)":"1px solid transparent",borderRadius:"var(--aurora-radius-sm)",background:Bt?"color-mix(in srgb, var(--aurora-surface-elevated) 68%, var(--aurora-surface-default))":ft?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"transparent",font:"inherit",cursor:K?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",gap:6,padding:"2px 6px",color:K?"color-mix(in srgb, var(--aurora-text-secondary) 88%, var(--aurora-text-primary))":"inherit",boxShadow:Rt?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Bt?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:[i.header,o.jsx("span",{"aria-hidden":"true",children:D==="asc"?"▲":D==="desc"?"▼":"↕"})]}):i.header},s)})})}),o.jsx("tbody",{children:F?o.jsx("tr",{children:o.jsx("td",{colSpan:ht,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Ho})})}):G.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:ht,style:{padding:"16px 12px",color:"var(--aurora-text-secondary)",textAlign:"center"},children:o.jsx("span",{role:"status","aria-live":"polite",children:Do})})}):G.map((i,m)=>{const d=i.row,s=String(i.sourceIndex),f=Mo[i.sourceIndex]??s;return o.jsx("tr",{style:{background:m%2===0?"transparent":"var(--aurora-surface-elevated)"},children:e.map((h,B)=>{const H=String(d[String(h.key)]??"");let D;if(h.render)try{D=h.render(d,m,i.sourceIndex),Ao.current=!1}catch{D=H}else D=H;const L=A[B]??`${String(h.key)}__index-${B}`,O={padding:"10px 12px",borderBottom:"1px solid var(--aurora-border-default)",color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",textAlign:h.align??"left"};return h.rowHeader?o.jsx("th",{scope:"row",style:{...O,fontWeight:"var(--aurora-font-weight-medium)"},children:D},L):o.jsx("td",{style:O,children:D},L)})},f)})})]})]})}function jt({columnHeader:e,nextDirection:t}){return`${e} sort ${t==="asc"?"ascending":"descending"}`}function Ft({columnHeader:e,direction:t}){return`Sorted by ${e} ${t==="asc"?"ascending":"descending"}.`}function Jo(e,t){if(typeof e=="string"){const n=Q(e);if(n.length>0)return n}return t}function Wt(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Zo(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function mt(e){return typeof e!="number"||e<=0}function Qo(e,t){if(!e)return t;try{return e.matches(":focus-visible")||t}catch{return t}}function Pt(e){var b;const n=(e.ownerDocument.defaultView??window).getComputedStyle(e).direction;return n==="rtl"||n==="ltr"?n:((b=e.closest("[dir]"))==null?void 0:b.getAttribute("dir"))==="rtl"?"rtl":"ltr"}function Xo(e){if(typeof e=="number")return Number.isFinite(e)&&e>0?e:560;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}return 560}function er(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="asc"||n==="desc")return n}return t}function tr(e){if(typeof e=="number")return Number.isFinite(e)&&e>=0?e:void 0;if(typeof e=="string"){const t=e.trim();if(t.length>0)return t}}function So(e,t){return typeof e!="boolean"?t:e}function M(e){return So(e==null?void 0:e.sortable,!1)}function tt(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>tt(t)):y.isValidElement(e)}function yt(e){if(typeof e=="string")return e;if(typeof e=="number")return String(e);if(Array.isArray(e))return Q(e.map(n=>yt(n)).filter(n=>n.length>0).join(" "));if(!y.isValidElement(e))return"";const t=e.props;if(t["aria-hidden"]===!0||t["aria-hidden"]==="true")return"";if(typeof t["aria-label"]=="string"){const n=Q(t["aria-label"]);if(n.length>0)return n}return yt(t.children)}function Q(e){return e.replace(/\s+/g," ").trim()}function ce(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function nr(e,t){if(typeof e.scrollBy=="function"){e.scrollBy({left:t,behavior:"auto"});return}e.scrollLeft+=t}function ar(e,t){if(typeof e.scrollTo=="function"){e.scrollTo({left:t,behavior:"auto"});return}e.scrollLeft=t}u.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}},onSortKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: TableSortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""}}};const g=[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"},{id:"DLG-210",component:"Dialog",owner:"Platform UI",status:"review"},{id:"AIP-501",component:"PromptInput",owner:"AI UX",status:"blocked"}],S=[{key:"id",header:"Issue",width:120,sortable:!0,rowHeader:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",width:140,sortable:!0,sortAccessor:e=>e.status,render:e=>{const t=e.status==="ready"?"success":e.status==="review"?"default":"danger";return o.jsx(ho,{tone:t,children:e.status})}}];function Mt(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function Nt(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}function or(){const[e,t]=y.useState(!1);return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("button",{type:"button",onClick:()=>t(n=>!n),children:"Toggle loading"}),o.jsx(u,{columns:S,data:g,loading:e,loadingContent:"Syncing release feed...",defaultSortKey:"id"})]})}const br={title:"Data/Table",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Table accepts typed column definitions and custom cell renderers for status-heavy ops screens."}}}},le={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(u,{caption:"Release readiness board",columns:S,data:g,rowKey:e=>e.id,defaultSortKey:"id"})})},ue={render:()=>o.jsx(w,{maxWidth:"min(100%, 840px)",gap:10,children:o.jsx(u,{caption:"Release readiness board",columns:S,data:g,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:"desc"})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getAllByRole("rowheader")[0];await a(n).toHaveAttribute("aria-sort","descending"),await a(r).toHaveTextContent("DLG-210"),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},de={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:R,children:"Runtime sort-direction config from CMS/JSON should normalize mixed-case tokens before sorting."}),o.jsx(u,{caption:"Runtime sort direction normalization",columns:S,data:g,rowKey:e=>e.id,defaultSortKey:"id",defaultSortDirection:" DESC "})]}),play:async({canvasElement:e})=>{const n=l(e).getByRole("table",{name:"Runtime sort direction normalization"}),r=l(n).getByRole("columnheader",{name:/Issue/});await a(r).toHaveAttribute("aria-sort","descending"),await a(l(n).getAllByRole("rowheader")[0]).toHaveTextContent("DLG-210"),await a(l(n).getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},me={render:()=>{const e=[...S,{key:"action",header:"Action",width:160,render:t=>o.jsx(Vo,{size:"sm",variant:"outline",onClick:n=>n.preventDefault(),"aria-label":`Open ${t.id}`,children:"Open Ticket"})}];return o.jsx(u,{columns:e,data:g,rowKey:t=>t.id})}},ye={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:[],emptyContent:"No release items yet."})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Issue sort ascending"});await a(t.getByText("No release items yet.")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("No release items yet."),await a(n).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts")}},pe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:[{id:"BTN-102",component:"Button",owner:"Design System",status:"ready"}],defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("columnheader",{name:/Issue/});await a(n).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Issue sort descending"})).toBeDisabled()}},we={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:[{key:"id",header:"Issue",sortable:!0,rowHeader:!0},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g,defaultSortKey:"id",rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await a(t.getByRole("columnheader",{name:/Issue/})).toHaveAttribute("aria-sort","ascending")}},be={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:R,children:"When sortable controls are unavailable and horizontal overflow exists, focus the scroll region and use Arrow/Home/End/Page keys to pan overflowed columns."}),o.jsx(u,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=l(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex");const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:T=>{b=T}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:T=0})=>{b+=Number(T)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:T=0})=>{b=Number(T)||0}}),v(r,new r.Event("resize")),await N(()=>{a(n).toHaveAttribute("role","region"),a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),await p.tab(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(0);const E=T=>T.preventDefault();n.addEventListener("keydown",E,!0),v.keyDown(n,{key:"ArrowRight"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",E,!0),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},ge={render:()=>o.jsxs(w,{maxWidth:"760px",gap:10,children:[o.jsx("p",{style:R,children:"Non-sortable tables without horizontal overflow should not insert an extra keyboard tab stop."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(u,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:g}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=l(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("role"),await a(n).not.toHaveAttribute("tabindex"),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await p.tab(),await a(t.getByRole("button",{name:"Before table"})).toHaveFocus(),await p.tab(),await a(t.getByRole("button",{name:"After table"})).toHaveFocus()}},ve={render:()=>o.jsxs(w,{maxWidth:"360px",gap:10,children:[o.jsxs("p",{style:R,children:["Use ",o.jsx("code",{children:"minTableWidth"})," to keep compact layouts readable without forcing overflow."]}),o.jsx(u,{minTableWidth:320,columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"}],data:g})]}),play:async({canvasElement:e})=>{const n=l(e).getByRole("table",{name:"Data table"}),r=e.querySelector("[data-aurora-table-scroll-container]");await a(n).toHaveStyle({minWidth:"320px"}),await a(r).not.toHaveAttribute("role"),await a(r).not.toHaveAttribute("tabindex"),await a(r).not.toHaveAttribute("aria-keyshortcuts")}},he={render:()=>o.jsxs(w,{maxWidth:"220px",gap:10,children:[o.jsx("p",{style:R,children:"In RTL layouts, non-sortable table overflow keeps Arrow/Home/End panning aligned with visual direction."}),o.jsx("div",{dir:"rtl",children:o.jsx(u,{columns:[{key:"id",header:"Issue"},{key:"component",header:"Component"},{key:"owner",header:"Owner"},{key:"status",header:"Status"}],data:g})})]}),play:async({canvasElement:e})=>{const t=l(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull();const r=(n==null?void 0:n.ownerDocument.defaultView)??window;let b=0;Object.defineProperty(n,"clientWidth",{configurable:!0,value:220}),Object.defineProperty(n,"scrollWidth",{configurable:!0,value:640}),Object.defineProperty(n,"scrollLeft",{configurable:!0,get:()=>b,set:T=>{b=T}}),Object.defineProperty(n,"scrollBy",{configurable:!0,value:({left:T=0})=>{b+=Number(T)||0}}),Object.defineProperty(n,"scrollTo",{configurable:!0,value:({left:T=0})=>{b=Number(T)||0}}),v(r,new r.Event("resize")),await N(()=>{a(n).toHaveAttribute("tabindex","0"),a(n).toHaveAttribute("aria-keyshortcuts","ArrowLeft ArrowRight Home End PageDown PageUp")}),n.focus(),await a(n).toHaveFocus(),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBeGreaterThan(0),v.keyDown(n,{key:"Home"}),await a(n.scrollLeft).toBe(420),v.keyDown(n,{key:"End"}),await a(n.scrollLeft).toBe(0);const E=T=>T.preventDefault();n.addEventListener("keydown",E,!0),v.keyDown(n,{key:"ArrowLeft"}),await a(n.scrollLeft).toBe(0),n.removeEventListener("keydown",E,!0),await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},xe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:R,children:"Sort button hides focus ring on pointer focus, then restores focus-visible ring when users return with keyboard Tab navigation."}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(u,{columns:S,data:g,defaultSortKey:"id"})]}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),r.focus(),await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px")}},Se={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:R,children:"Sort button hides focus ring on pointer focus, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the sortable header."}),o.jsx(u,{columns:S,data:g,defaultSortKey:"id"}),o.jsx("button",{type:"button",children:"After table"})]}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Status sort ascending"}),r=t.getByRole("button",{name:"After table"});v.mouseDown(n),n.focus(),await p.click(r),await p.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},fe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:g,loading:!0,loadingContent:"Syncing release feed...",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByRole("columnheader",{name:/Issue/});await a(n).toHaveAttribute("aria-busy","true"),await a(t.getByText("Syncing release feed...")).toBeInTheDocument(),await a(t.queryByRole("rowheader",{name:"BTN-102"})).not.toBeInTheDocument(),await a(r).toBeDisabled(),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await a(b).not.toHaveAttribute("aria-sort")}},Be={render:()=>{const[e,t]=y.useState("none"),n=[{key:"id",header:"Issue",width:120,sortable:"true",rowHeader:!0},{key:"status",header:"Status",width:160,sortable:!0,sortAccessor:r=>r.status,render:r=>{const b=r.status==="ready"?"success":r.status==="review"?"default":"danger";return o.jsx(ho,{tone:b,children:r.status})}}];return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsx("p",{style:R,children:"Runtime bool-like config from CMS/JSON should degrade safely: invalid `loading` and `columns[].sortable` values fall back to deterministic `false`."}),o.jsxs("p",{style:R,children:["Sort trace:"," ",o.jsx("strong",{"data-testid":"table-runtime-boolean-sort-trace",style:X,children:e})]}),o.jsx(u,{columns:n,data:g,defaultSortKey:"id",loading:"invalid-loading-flag",loadingContent:"Should stay hidden",onSortChange:(r,b)=>t(`${r} ${b}`)})]})},play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("table",{name:"Data table"}),r=t.getByRole("columnheader",{name:/Issue/}),b=t.getByRole("columnheader",{name:/Status/}),E=t.getByRole("button",{name:/Status sort/});await a(n).not.toHaveAttribute("aria-busy"),await a(t.queryByText("Should stay hidden")).not.toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"BTN-102"})).toBeInTheDocument(),await a(r).not.toHaveAttribute("aria-sort"),await a(l(r).queryByRole("button")).toBeNull(),await a(E).toBeEnabled(),await a(E).toHaveAttribute("aria-keyshortcuts","Enter Space"),await p.click(E),await a(b).toHaveAttribute("aria-sort","ascending"),await a(t.getByTestId("table-runtime-boolean-sort-trace")).toHaveTextContent("status asc")}},Re={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:g,loading:!0,loadingContent:"   ",defaultSortKey:"id"})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("status")).toHaveTextContent("Loading data...")}},ke={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:[],emptyContent:"   "})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("status")).toHaveTextContent("No data available.")}},Te={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx(u,{columns:S,data:g,loading:!0,loadingContent:0}),o.jsx(u,{columns:S,data:[],emptyContent:0})]}),play:async({canvasElement:e})=>{const n=l(e).getAllByRole("status");await a(n).toHaveLength(2),await a(n[0]).toHaveTextContent("0"),await a(n[1]).toHaveTextContent("0")}},He={render:()=>o.jsx(or,{}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Toggle loading"}),r=t.getByRole("button",{name:"Issue sort descending"});v.mouseDown(r),await p.click(n);const b=t.getByRole("button",{name:"Issue sort descending"});await a(b).toBeDisabled(),await a(b.style.transform).toContain("translateY(0"),await a(b.style.boxShadow).toBe("none")}},De={render:function(){const[t,n]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:10,children:[o.jsxs("p",{style:R,children:["Active sort: ",o.jsx("strong",{"data-testid":"primary-pointer-sort-state",children:t})]}),o.jsx("button",{type:"button",children:"Before table"}),o.jsx(u,{columns:S,data:g,defaultSortKey:"id",onSortChange:(r,b)=>n(`${r} ${b}`)})]})},play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Before table"}),r=t.getByRole("button",{name:"Issue sort descending"}),b=t.getByTestId("primary-pointer-sort-state");await p.click(n),await p.tab(),await a(r).toHaveFocus(),await a(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await a(r.style.boxShadow).toContain("0 0 0 3px"),await a(b).toHaveTextContent("id asc"),v.mouseDown(r,{button:0}),await N(()=>{a(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await N(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await N(()=>{a(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await N(()=>{a(r.style.transform).toContain("translateY(0")}),await a(b).toHaveTextContent("id asc"),await p.click(r),await a(b).toHaveTextContent("id desc")}},Ee={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{ariaLabel:"Release checklist table",columns:S,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("table",{name:"Release checklist table"})).toBeInTheDocument()}},Ce={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("table",{name:"Data table"})).toBeInTheDocument()}},Ae={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{caption:0,columns:S,data:g,rowKey:e=>e.id})}),play:async({canvasElement:e})=>{const n=l(e).getByRole("table",{name:"0"});await a(n).not.toHaveAttribute("aria-label")}},Ie={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"release-board-heading",style:{margin:0},children:"Release board metrics"}),o.jsx(u,{ariaLabelledBy:"release-board-heading",ariaLabel:"Fallback table label",columns:S,data:g,rowKey:e=>e.id})]}),play:async({canvasElement:e})=>{const n=l(e).getByRole("table",{name:"Release board metrics"});await a(n).toHaveAttribute("aria-labelledby","release-board-heading"),await a(n).not.toHaveAttribute("aria-label")}},Le={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:[{key:"component",header:"Component",rowHeader:!0,sortable:!0},{key:"owner",header:"Owner",sortable:!0},{key:"status",header:"Status",sortable:!0}],data:g,rowKey:e=>e.id,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("rowheader",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("rowheader",{name:"Dialog"})).toBeInTheDocument()}};function rr(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsxs("p",{style:R,children:["Active sort: ",o.jsx("strong",{style:X,children:e})]}),o.jsx(u,{columns:S,data:g,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}function sr(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:R,children:"Local sort-key guards should preempt sortable-header navigation and activation."}),o.jsxs("p",{style:R,children:["Active sort:"," ",o.jsx("strong",{"data-testid":"table-local-preempt-sort-state",style:X,children:e})]}),o.jsx(u,{columns:S,data:g,defaultSortKey:"id",onSortKeyDown:n=>{(n.key==="Enter"||n.key==="ArrowRight")&&n.preventDefault()},onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const Ke={render:()=>o.jsx(rr,{}),play:async({canvasElement:e})=>{const t=l(e),n=e.querySelector("[data-aurora-table-scroll-container]");await a(n).not.toBeNull(),await a(n).not.toHaveAttribute("tabindex");const r=t.getByRole("button",{name:"Issue sort descending"});await a(r).toHaveAttribute("aria-keyshortcuts","Enter Space Home End PageDown PageUp ArrowLeft ArrowRight"),r.focus(),await p.keyboard("{ArrowRight}");const b=t.getByRole("button",{name:"Component sort ascending"});await a(b).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{End}");const E=t.getByRole("button",{name:"Status sort ascending"});await a(E).toHaveFocus(),await p.keyboard("{Home}"),await a(r).toHaveFocus(),await p.keyboard("{PageDown}");const T=t.getByRole("button",{name:"Component sort ascending"});await a(T).toHaveFocus(),await p.keyboard("{PageUp}"),await a(r).toHaveFocus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.");const $=t.getByRole("button",{name:"Issue sort ascending"}),j=$.closest("th");await a(j).toHaveAttribute("aria-sort","descending"),v.keyDown($,{key:"Enter",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),$.focus(),v.keyDown($,{key:"Space",repeat:!0}),await a(t.getByText("id desc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","descending"),await p.keyboard("{Space}"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.");const C=t.getByRole("button",{name:"Issue sort descending"});C.focus(),v.keyDown(C,{key:"ArrowRight",ctrlKey:!0}),v.keyDown(C,{key:"ArrowLeft",metaKey:!0}),v.keyDown(C,{key:"End",ctrlKey:!0}),v.keyDown(C,{key:"Home",altKey:!0}),v.keyDown(C,{key:"PageDown",metaKey:!0}),v.keyDown(C,{key:"PageUp",ctrlKey:!0}),await a(C).toHaveFocus(),v.keyDown(C,{key:"Enter",ctrlKey:!0}),v.keyDown(C,{key:"Space",metaKey:!0}),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending");const q=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});q.preventDefault(),C.dispatchEvent(q),await a(t.getByText("id asc")).toBeInTheDocument(),await a(j).toHaveAttribute("aria-sort","ascending"),await p.keyboard("{Shift>}{Enter}{/Shift}"),await N(()=>{a(t.getByText("id desc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","descending")}),t.getByRole("button",{name:"Issue sort ascending"}).focus(),await p.keyboard("{Shift>}{Space}{/Shift}"),await N(()=>{a(t.getByText("id asc")).toBeInTheDocument(),a(j).toHaveAttribute("aria-sort","ascending")})}},je={render:()=>o.jsx(sr,{}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Issue sort descending"});n.focus(),v.keyDown(n,{key:"ArrowRight"}),await a(n).toHaveFocus(),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),v.keyDown(n,{key:"Enter"}),await a(t.getByTestId("table-local-preempt-sort-state")).toHaveTextContent("id asc"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending.")}},Fe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:R,children:"In RTL layout, ArrowLeft/ArrowRight sortable-header traversal follows visual column order."}),o.jsx("div",{dir:"rtl",children:o.jsx(u,{columns:S,data:g,defaultSortKey:"id"})})]}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Issue sort descending"}),r=t.getByRole("button",{name:"Component sort ascending"});n.focus(),v.keyDown(n,{key:"ArrowLeft",ctrlKey:!0}),v.keyDown(n,{key:"ArrowRight",metaKey:!0}),v.keyDown(n,{key:"ArrowLeft",altKey:!0}),await a(n).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus(),await p.keyboard("{ArrowLeft}"),await a(r).toHaveFocus(),await p.keyboard("{ArrowRight}"),await a(n).toHaveFocus()}};function ir(){const[e,t]=y.useState("id asc");return o.jsxs(w,{maxWidth:"min(100%, 840px)",gap:8,children:[o.jsx("p",{style:R,children:"IME composition guards Enter and Space so sortable headers do not toggle while users confirm CJK input."}),o.jsxs("p",{style:R,children:["Active sort: ",o.jsx("strong",{style:X,children:e})]}),o.jsx(u,{columns:S,data:g,defaultSortKey:"id",onSortChange:(n,r)=>t(`${n} ${r}`)})]})}const We={render:()=>o.jsx(ir,{}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("columnheader",{name:/Issue/}),r=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Mt(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Mt(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Nt(r,"Enter"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),Nt(r,"Space"),await a(t.getByText("id asc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","ascending"),r.focus(),await p.keyboard("{Enter}"),await a(t.getByText("id desc")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-sort","descending")}},Pe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:g,defaultSortKey:"id",getSortAriaLabel:({columnHeader:e,nextDirection:t})=>`按${t==="asc"?"升序":"降序"}排序：${e}`,getSortStatusText:({columnHeader:e,direction:t})=>`当前排序：${e}（${t==="asc"?"升序":"降序"}）`})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"按降序排序：Issue"});await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（升序）"),await p.click(n),await a(t.getByRole("button",{name:"按升序排序：Issue"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("当前排序：Issue（降序）")}},Me={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:g,defaultSortKey:"id",getSortAriaLabel:()=>{throw new Error("runtime aria-label formatter failure")}})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Issue sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Issue sort ascending"})).toBeInTheDocument()}},Ne={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:g,defaultSortKey:"id",getSortStatusText:()=>"   "})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.")}},Oe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:S,data:g,defaultSortKey:"id",getSortStatusText:()=>{throw new Error("runtime status formatter failure")}})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Issue sort descending"});await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Issue descending.")}},$e={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:[{key:"releasedAt",header:o.jsx("span",{"aria-hidden":"true",children:"📅"}),sortLabel:"Release date",sortable:!0},{key:"component",header:"Component",sortable:!0},{key:"owner",header:"Owner"}],data:[{releasedAt:"2026-03-19",component:"Dialog",owner:"Platform UI"},{releasedAt:"2026-01-10",component:"Button",owner:"Design System"}],defaultSortKey:"releasedAt"})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date ascending.");const n=t.getByRole("button",{name:"Release date sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release date sort ascending"})).toBeInTheDocument(),await a(t.getByRole("status")).toHaveTextContent("Sorted by Release date descending.")}},qe={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:[{key:"status",header:o.jsxs("span",{children:[o.jsx("span",{"aria-hidden":"true",children:"🚦"})," Release status"]}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},ze={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:[{key:"status",header:o.jsx("span",{"aria-label":"Release status",children:o.jsx("span",{"aria-hidden":"true",children:"🚦"})}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Release status ascending.");const n=t.getByRole("button",{name:"Release status sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Release status sort ascending"})).toBeInTheDocument()}},Ve={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:[{key:"   ",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"   ":"Review",component:"Dialog"},{"   ":"Ready",component:"Button"}],defaultSortKey:"   "})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by Column 1 ascending.");const n=t.getByRole("button",{name:"Column 1 sort descending"});await p.click(n),await a(t.getByRole("button",{name:"Column 1 sort ascending"})).toBeInTheDocument()}},_e={render:()=>o.jsx(w,{maxWidth:"min(100%, 780px)",children:o.jsx(u,{columns:[{key:"release_stage-ready",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{"release_stage-ready":"Review",component:"Dialog"},{"release_stage-ready":"Ready",component:"Button"}],defaultSortKey:"release_stage-ready"})}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("status")).toHaveTextContent("Sorted by release stage ready ascending.");const n=t.getByRole("button",{name:"release stage ready sort descending"});await p.click(n),await a(t.getByRole("button",{name:"release stage ready sort ascending"})).toBeInTheDocument()}},Ue={render:()=>o.jsxs(w,{maxWidth:"min(100%, 780px)",gap:10,children:[o.jsx("h3",{id:"table-status-sort-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Release status"}),o.jsx(u,{columns:[{key:"status",header:o.jsx("span",{"aria-hidden":"true",children:"🚦"}),sortLabelledBy:"table-status-sort-heading",sortLabel:"Fallback status",sortable:!0},{key:"component",header:"Component",sortable:!0}],data:[{status:"Review",component:"Dialog"},{status:"Ready",component:"Button"}],defaultSortKey:"status"})]}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Release status"});await a(n).toHaveAttribute("aria-labelledby","table-status-sort-heading"),await a(n).not.toHaveAttribute("aria-label"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status ascending."),await p.click(n),await a(t.getByRole("status")).toHaveTextContent("Sorted by Fallback status descending.")}},Ge={render:()=>{const e=[{key:"component",header:"Component",sortable:!0},{key:"status",header:"Status",width:140}];return o.jsx(w,{maxWidth:"min(100%, 620px)",children:o.jsx(u,{columns:e,data:g,defaultSortKey:"status"})})},play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("columnheader",{name:"Component"}),r=t.getByRole("columnheader",{name:"Status"});await a(n).not.toHaveAttribute("aria-sort"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.queryByRole("button",{name:/Status sort/})).not.toBeInTheDocument(),await a(t.getAllByRole("cell")[0]).toHaveTextContent("Button")}};function cr(){const[e,t]=y.useState(!1),n=y.useMemo(()=>[{key:"component",header:"Component",sortable:!0,rowHeader:!0},{key:"status",header:"Status",sortable:e,width:140}],[e]);return o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:R,children:"Async column schema can enable a previously unavailable default sort key after rerender."}),o.jsxs("p",{style:R,children:["Status column sortable:"," ",o.jsx("strong",{"data-testid":"table-status-sortable",style:X,children:e?"yes":"no"})]}),o.jsx("button",{type:"button",onClick:()=>t(!0),children:"Load status sortable schema"}),o.jsx(u,{columns:n,data:g,rowKey:r=>r.id,defaultSortKey:"status"})]})}const Ye={render:()=>o.jsx(cr,{}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("button",{name:"Load status sortable schema"}),r=t.getByRole("columnheader",{name:"Status"});await a(t.getByTestId("table-status-sortable")).toHaveTextContent("no"),await a(r).not.toHaveAttribute("aria-sort"),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("Button"),await a(t.queryByRole("status")).not.toBeInTheDocument(),await p.click(n),await a(t.getByTestId("table-status-sortable")).toHaveTextContent("yes"),await a(r).toHaveAttribute("aria-sort","ascending"),await a(t.getByRole("button",{name:"Status sort descending"})).toBeEnabled(),await a(t.getAllByRole("rowheader")[0]).toHaveTextContent("PromptInput"),await a(t.getByRole("status")).toHaveTextContent("Sorted by Status ascending.")}},fo=g.map(e=>({...e,note:""})),Bo=[{key:"component",header:"Component",sortable:!0},{key:"note",header:"QA Note",render:e=>o.jsx("input",{defaultValue:e.note,"aria-label":`${e.id} note`,style:{width:"100%",borderRadius:6,border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",padding:"6px 8px"}})}],Je={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(u,{columns:Bo,data:fo,defaultSortKey:"component"})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Ze={render:()=>o.jsx(w,{maxWidth:"min(100%, 720px)",children:o.jsx(u,{columns:Bo,data:fo,defaultSortKey:"component",rowKey:(e,t)=>`${t}-${e.id}`})}),play:async({canvasElement:e})=>{const t=l(e),n=t.getByRole("textbox",{name:"BTN-102 note"});await p.type(n,"persist me"),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("textbox",{name:"BTN-102 note"})).toHaveValue("persist me")}},Qe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:R,children:"When `rowKey` throws at runtime, table falls back to source-index row keys and keeps sort flows stable."}),o.jsx(u,{columns:S,data:g,defaultSortKey:"component",rowKey:(e,t)=>{if(e.id==="DLG-210")throw new Error("row key formatter failed");return`${t}-${e.id}`}})]}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("cell",{name:"Button"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Dialog"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"PromptInput"})).toBeInTheDocument(),await p.click(t.getByRole("button",{name:"Component sort descending"})),await a(t.getByRole("cell",{name:"Dialog"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Button"})).toBeInTheDocument()}},Xe={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:R,children:"When `columns[].render` throws, table falls back to raw cell values so one cell renderer failure cannot crash the whole table."}),o.jsx(u,{columns:[{key:"component",header:"Component",sortable:!0,render:e=>{if(e.component==="Dialog")throw new Error("component cell render failed");return`Component ${e.component}`}},{key:"owner",header:"Owner",sortable:!0}],data:g,defaultSortKey:"component"})]}),play:async({canvasElement:e})=>{const t=l(e);await a(t.getByRole("cell",{name:"Component Button"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Dialog"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Component PromptInput"})).toBeInTheDocument(),await p.click(t.getByRole("button",{name:"Owner sort ascending"})),await a(t.getByRole("cell",{name:"Dialog"})).toBeInTheDocument()}},lr=[{key:"Alpha",score:1},{key:"Beta",score:2},{key:"Gamma",score:3}],et={render:()=>o.jsxs(w,{maxWidth:"min(100%, 760px)",gap:8,children:[o.jsx("p",{style:R,children:"`render(row, rowIndex, sourceIndex)` exposes both sorted row position and source-data position."}),o.jsx(u,{columns:[{key:"key",header:"Item",sortable:!0,render:(e,t,n)=>`${e.key} (visual:${t}, source:${n})`},{key:"score",header:"Score",sortable:!0}],data:lr,defaultSortKey:"score"})]}),play:async({canvasElement:e})=>{const t=l(e);await p.click(t.getByRole("button",{name:"Score sort descending"})),await a(t.getByRole("cell",{name:"Gamma (visual:0, source:2)"})).toBeInTheDocument(),await a(t.getByRole("cell",{name:"Alpha (visual:2, source:0)"})).toBeInTheDocument()}};var Ot,$t,qt;le.parameters={...le.parameters,docs:{...(Ot=le.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 840px)" gap={10}>
      <Table caption="Release readiness board" columns={columns} data={rows} rowKey={row => row.id} defaultSortKey="id" />
    </StoryShowcaseFrame>
}`,...(qt=($t=le.parameters)==null?void 0:$t.docs)==null?void 0:qt.source}}};var zt,Vt,_t;ue.parameters={...ue.parameters,docs:{...(zt=ue.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(_t=(Vt=ue.parameters)==null?void 0:Vt.docs)==null?void 0:_t.source}}};var Ut,Gt,Yt;de.parameters={...de.parameters,docs:{...(Ut=de.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Yt=(Gt=de.parameters)==null?void 0:Gt.docs)==null?void 0:Yt.source}}};var Jt,Zt,Qt;me.parameters={...me.parameters,docs:{...(Jt=me.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Qt=(Zt=me.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};var Xt,en,tn;ye.parameters={...ye.parameters,docs:{...(Xt=ye.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(tn=(en=ye.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;pe.parameters={...pe.parameters,docs:{...(nn=pe.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=pe.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var rn,sn,cn;we.parameters={...we.parameters,docs:{...(rn=we.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(cn=(sn=we.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var ln,un,dn;be.parameters={...be.parameters,docs:{...(ln=be.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(dn=(un=be.parameters)==null?void 0:un.docs)==null?void 0:dn.source}}};var mn,yn,pn;ge.parameters={...ge.parameters,docs:{...(mn=ge.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(pn=(yn=ge.parameters)==null?void 0:yn.docs)==null?void 0:pn.source}}};var wn,bn,gn;ve.parameters={...ve.parameters,docs:{...(wn=ve.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(gn=(bn=ve.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var vn,hn,xn;he.parameters={...he.parameters,docs:{...(vn=he.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(xn=(hn=he.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var Sn,fn,Bn;xe.parameters={...xe.parameters,docs:{...(Sn=xe.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Bn=(fn=xe.parameters)==null?void 0:fn.docs)==null?void 0:Bn.source}}};var Rn,kn,Tn;Se.parameters={...Se.parameters,docs:{...(Rn=Se.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Tn=(kn=Se.parameters)==null?void 0:kn.docs)==null?void 0:Tn.source}}};var Hn,Dn,En;fe.parameters={...fe.parameters,docs:{...(Hn=fe.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
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
}`,...(En=(Dn=fe.parameters)==null?void 0:Dn.docs)==null?void 0:En.source}}};var Cn,An,In;Be.parameters={...Be.parameters,docs:{...(Cn=Be.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(In=(An=Be.parameters)==null?void 0:An.docs)==null?void 0:In.source}}};var Ln,Kn,jn;Re.parameters={...Re.parameters,docs:{...(Ln=Re.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={rows} loading loadingContent="   " defaultSortKey="id" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading data...");
  }
}`,...(jn=(Kn=Re.parameters)==null?void 0:Kn.docs)==null?void 0:jn.source}}};var Fn,Wn,Pn;ke.parameters={...ke.parameters,docs:{...(Fn=ke.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 780px)">
      <Table columns={columns} data={[]} emptyContent="   " />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent("No data available.");
  }
}`,...(Pn=(Wn=ke.parameters)==null?void 0:Wn.docs)==null?void 0:Pn.source}}};var Mn,Nn,On;Te.parameters={...Te.parameters,docs:{...(Mn=Te.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(On=(Nn=Te.parameters)==null?void 0:Nn.docs)==null?void 0:On.source}}};var $n,qn,zn;He.parameters={...He.parameters,docs:{...($n=He.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(zn=(qn=He.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var Vn,_n,Un;De.parameters={...De.parameters,docs:{...(Vn=De.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(Un=(_n=De.parameters)==null?void 0:_n.docs)==null?void 0:Un.source}}};var Gn,Yn,Jn;Ee.parameters={...Ee.parameters,docs:{...(Gn=Ee.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(Jn=(Yn=Ee.parameters)==null?void 0:Yn.docs)==null?void 0:Jn.source}}};var Zn,Qn,Xn;Ce.parameters={...Ce.parameters,docs:{...(Zn=Ce.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
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
}`,...(Xn=(Qn=Ce.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var ea,ta,na;Ae.parameters={...Ae.parameters,docs:{...(ea=Ae.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(na=(ta=Ae.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var aa,oa,ra;Ie.parameters={...Ie.parameters,docs:{...(aa=Ie.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(ra=(oa=Ie.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var sa,ia,ca;Le.parameters={...Le.parameters,docs:{...(sa=Le.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ca=(ia=Le.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,da;Ke.parameters={...Ke.parameters,docs:{...(la=Ke.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(da=(ua=Ke.parameters)==null?void 0:ua.docs)==null?void 0:da.source}}};var ma,ya,pa;je.parameters={...je.parameters,docs:{...(ma=je.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(pa=(ya=je.parameters)==null?void 0:ya.docs)==null?void 0:pa.source}}};var wa,ba,ga;Fe.parameters={...Fe.parameters,docs:{...(wa=Fe.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(ga=(ba=Fe.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var va,ha,xa;We.parameters={...We.parameters,docs:{...(va=We.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(xa=(ha=We.parameters)==null?void 0:ha.docs)==null?void 0:xa.source}}};var Sa,fa,Ba;Pe.parameters={...Pe.parameters,docs:{...(Sa=Pe.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ba=(fa=Pe.parameters)==null?void 0:fa.docs)==null?void 0:Ba.source}}};var Ra,ka,Ta;Me.parameters={...Me.parameters,docs:{...(Ra=Me.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Ta=(ka=Me.parameters)==null?void 0:ka.docs)==null?void 0:Ta.source}}};var Ha,Da,Ea;Ne.parameters={...Ne.parameters,docs:{...(Ha=Ne.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Ea=(Da=Ne.parameters)==null?void 0:Da.docs)==null?void 0:Ea.source}}};var Ca,Aa,Ia;Oe.parameters={...Oe.parameters,docs:{...(Ca=Oe.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ia=(Aa=Oe.parameters)==null?void 0:Aa.docs)==null?void 0:Ia.source}}};var La,Ka,ja;$e.parameters={...$e.parameters,docs:{...(La=$e.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(ja=(Ka=$e.parameters)==null?void 0:Ka.docs)==null?void 0:ja.source}}};var Fa,Wa,Pa;qe.parameters={...qe.parameters,docs:{...(Fa=qe.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(Pa=(Wa=qe.parameters)==null?void 0:Wa.docs)==null?void 0:Pa.source}}};var Ma,Na,Oa;ze.parameters={...ze.parameters,docs:{...(Ma=ze.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
}`,...(Oa=(Na=ze.parameters)==null?void 0:Na.docs)==null?void 0:Oa.source}}};var $a,qa,za;Ve.parameters={...Ve.parameters,docs:{...($a=Ve.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(za=(qa=Ve.parameters)==null?void 0:qa.docs)==null?void 0:za.source}}};var Va,_a,Ua;_e.parameters={..._e.parameters,docs:{...(Va=_e.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Ua=(_a=_e.parameters)==null?void 0:_a.docs)==null?void 0:Ua.source}}};var Ga,Ya,Ja;Ue.parameters={...Ue.parameters,docs:{...(Ga=Ue.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
}`,...(Ja=(Ya=Ue.parameters)==null?void 0:Ya.docs)==null?void 0:Ja.source}}};var Za,Qa,Xa;Ge.parameters={...Ge.parameters,docs:{...(Za=Ge.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(Xa=(Qa=Ge.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var eo,to,no;Ye.parameters={...Ye.parameters,docs:{...(eo=Ye.parameters)==null?void 0:eo.docs,source:{originalSource:`{
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
}`,...(no=(to=Ye.parameters)==null?void 0:to.docs)==null?void 0:no.source}}};var ao,oo,ro;Je.parameters={...Je.parameters,docs:{...(ao=Je.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(ro=(oo=Je.parameters)==null?void 0:oo.docs)==null?void 0:ro.source}}};var so,io,co;Ze.parameters={...Ze.parameters,docs:{...(so=Ze.parameters)==null?void 0:so.docs,source:{originalSource:`{
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
}`,...(co=(io=Ze.parameters)==null?void 0:io.docs)==null?void 0:co.source}}};var lo,uo,mo;Qe.parameters={...Qe.parameters,docs:{...(lo=Qe.parameters)==null?void 0:lo.docs,source:{originalSource:`{
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
}`,...(mo=(uo=Qe.parameters)==null?void 0:uo.docs)==null?void 0:mo.source}}};var yo,po,wo;Xe.parameters={...Xe.parameters,docs:{...(yo=Xe.parameters)==null?void 0:yo.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 760px)" gap={8}>
      <p style={storyMutedTextStyle}>
        When \`columns[].render\` throws, table falls back to raw cell values so one cell renderer
        failure cannot crash the whole table.
      </p>
      <Table columns={[{
      key: "component",
      header: "Component",
      sortable: true,
      render: (row: ReleaseRow) => {
        if (row.component === "Dialog") {
          throw new Error("component cell render failed");
        }
        return \`Component \${row.component}\`;
      }
    }, {
      key: "owner",
      header: "Owner",
      sortable: true
    }]} data={rows} defaultSortKey="component" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("cell", {
      name: "Component Button"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", {
      name: "Dialog"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("cell", {
      name: "Component PromptInput"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Owner sort ascending"
    }));
    await expect(canvas.getByRole("cell", {
      name: "Dialog"
    })).toBeInTheDocument();
  }
}`,...(wo=(po=Xe.parameters)==null?void 0:po.docs)==null?void 0:wo.source}}};var bo,go,vo;et.parameters={...et.parameters,docs:{...(bo=et.parameters)==null?void 0:bo.docs,source:{originalSource:`{
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
}`,...(vo=(go=et.parameters)==null?void 0:go.docs)==null?void 0:vo.source}}};const gr=["ReleaseChecklist","DescendingDefaultSortDirection","RuntimeSortDirectionNormalization","WithRowAction","EmptyState","SingleRowSortDisabled","SingleSortableColumnShortcutHints","KeyboardReachableScrollContainer","ScrollContainerSkipsTabStopWithoutOverflow","CompactMinWidthWithoutOverflow","RtlScrollContainerKeyboardPanning","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","LoadingState","RuntimeBooleanConfigNormalization","BlankLoadingContentFallback","BlankEmptyContentFallback","NumericFeedbackCopySemantics","LoadingDisablesResetsSortVisualState","PrimaryPointerOnlySortPress","AccessibleNameWithoutCaption","AccessibleNameFallback","NumericCaptionName","AccessibleNameLabelledByHeading","RowHeaderSemantics","SortTelemetry","ManagedSortKeysPreemptedByLocalHandler","RtlArrowNavigation","ImeCompositionGuard","LocalizedSortLabels","SortAriaLabelErrorFallback","SortStatusTextFallback","SortStatusTextErrorFallback","SortLabelForCustomHeader","RichTextHeaderAutoSortLabel","AriaLabelHeaderAutoSortLabel","BlankKeySortLabelFallback","NormalizedKeySortLabelFallback","SortLabelledByPrecedence","InvalidDefaultSortKeyFallback","DeferredColumnsDefaultSortRecovery","FallbackRowKeyStability","SourceIndexRowKeyStability","RowKeyCallbackThrowFallback","CellRenderErrorFallback","RenderIndexSemantics"];export{Ce as AccessibleNameFallback,Ie as AccessibleNameLabelledByHeading,Ee as AccessibleNameWithoutCaption,ze as AriaLabelHeaderAutoSortLabel,ke as BlankEmptyContentFallback,Ve as BlankKeySortLabelFallback,Re as BlankLoadingContentFallback,Xe as CellRenderErrorFallback,ve as CompactMinWidthWithoutOverflow,Ye as DeferredColumnsDefaultSortRecovery,ue as DescendingDefaultSortDirection,ye as EmptyState,Je as FallbackRowKeyStability,We as ImeCompositionGuard,Ge as InvalidDefaultSortKeyFallback,xe as KeyboardFocusRingAfterPointer,Se as KeyboardFocusRingShiftTabReentry,be as KeyboardReachableScrollContainer,He as LoadingDisablesResetsSortVisualState,fe as LoadingState,Pe as LocalizedSortLabels,je as ManagedSortKeysPreemptedByLocalHandler,_e as NormalizedKeySortLabelFallback,Ae as NumericCaptionName,Te as NumericFeedbackCopySemantics,De as PrimaryPointerOnlySortPress,le as ReleaseChecklist,et as RenderIndexSemantics,qe as RichTextHeaderAutoSortLabel,Le as RowHeaderSemantics,Qe as RowKeyCallbackThrowFallback,Fe as RtlArrowNavigation,he as RtlScrollContainerKeyboardPanning,Be as RuntimeBooleanConfigNormalization,de as RuntimeSortDirectionNormalization,ge as ScrollContainerSkipsTabStopWithoutOverflow,pe as SingleRowSortDisabled,we as SingleSortableColumnShortcutHints,Me as SortAriaLabelErrorFallback,$e as SortLabelForCustomHeader,Ue as SortLabelledByPrecedence,Oe as SortStatusTextErrorFallback,Ne as SortStatusTextFallback,Ke as SortTelemetry,Ze as SourceIndexRowKeyStability,me as WithRowAction,gr as __namedExportsOrder,br as default};
