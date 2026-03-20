import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as p}from"./Button-DsGPnCUO.js";import{within as f,expect as c,userEvent as v,fireEvent as x,waitFor as D}from"./index-DgAF9SIF.js";import{s as Lt,a as Mt,b as Vt}from"./storyShowcase-Bw5VyCj0.js";const Kt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Gt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Nt=14,Ce=new WeakMap;function Wt(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function R(t){const e=Ce.get(t);if(e)return e;const n={escapeStack:[],visualStacks:Wt(),listeners:new Set};return Ce.set(t,n),n}function ve(t){R(t).listeners.forEach(n=>{n()})}function Yt(t,e){const n=R(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function Se(t,e){const n=R(t),r=n.escapeStack.lastIndexOf(e);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(e),ve(t)}function Ut(t,e){const n=R(t),r=n.escapeStack.lastIndexOf(e);r>=0&&(n.escapeStack.splice(r,1),ve(t))}function St(t,e){const n=t.visualStacks[e],r=e.startsWith("bottom")?-1:1;n.forEach((i,l)=>{const C=n.length-1-l;i.style.setProperty("--aurora-toast-stack-offset",`${C*r*Nt}px`)})}function Ie(t,e,n){const r=R(t),i=r.visualStacks[n],l=i.lastIndexOf(e);l>=0&&i.splice(l,1),i.push(e),St(r,n)}function _t(t,e,n){const r=R(t),i=r.visualStacks[n],l=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(l<0)&&(i.splice(l,1),St(r,n))}function je(t,e){const n=R(t);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function zt(t){return t.isComposing?!0:t.keyCode===229}function d({open:t,title:e,description:n,action:r,tone:i="info",live:l,duration:C,pauseOnHover:m=!0,closeOnEscape:b=!0,onEscapeKeyDown:F,closeLabel:ue="Close toast",ariaLabel:le,position:S="bottom-right",onClose:L,onCloseReason:M,onOpenChange:V}){const h=o.useRef(null);o.useRef(!1);const O=o.useRef(!0),de=o.useRef(!1),T=o.useRef(null),K=o.useRef(null),A=o.useRef(0),P=o.Children.toArray(r).length>0,B=C??(P?0:4e3),I=o.useRef(B),[jt,ge]=o.useState(!1),[we,q]=o.useState({hover:!1,focus:!1}),[pe,he]=o.useState(!1),[be,G]=o.useState(!1),[ke,me]=o.useState(!1),[Ht,Ot]=o.useState(!1),xe=jt||m&&(we.hover||we.focus),Te=o.useId(),Be=o.useId(),ye=typeof le=="string"&&le.trim().length>0?le.trim():void 0,At=typeof ue=="string"&&ue.trim().length>0?ue.trim():"Close toast",N=o.useCallback(()=>{const s=h.current;Ot(!!(t&&b&&s&&je(s.ownerDocument,s)))},[b,t]);o.useEffect(()=>{N()},[N]),o.useEffect(()=>{var u;const s=(u=h.current)==null?void 0:u.ownerDocument;if(s)return Yt(s,N)},[N]),o.useEffect(()=>{const s=h.current;if(!t||!s)return;const u=s.ownerDocument;return Se(u,s),Ie(u,s,S),()=>{Ut(u,s),_t(u,s,S)}},[t,S]),o.useEffect(()=>{!t||!h.current||ve(h.current.ownerDocument)},[b,t]),o.useEffect(()=>{t||(q({hover:!1,focus:!1}),ge(!1)),de.current=!1},[t]),o.useEffect(()=>{var y;if(!t)return;const s=((y=h.current)==null?void 0:y.ownerDocument)??document,u=()=>{ge(s.visibilityState==="hidden")};return u(),s.addEventListener("visibilitychange",u),()=>{s.removeEventListener("visibilitychange",u)}},[t]),o.useEffect(()=>{var w;if(!t)return;const s=((w=h.current)==null?void 0:w.ownerDocument)??document,u=E=>{E.metaKey||E.altKey||E.ctrlKey||(O.current=!0)},y=()=>{O.current=!1};return s.addEventListener("keydown",u,!0),s.addEventListener("pointerdown",y,!0),s.addEventListener("mousedown",y,!0),s.addEventListener("touchstart",y,!0),()=>{s.removeEventListener("keydown",u,!0),s.removeEventListener("pointerdown",y,!0),s.removeEventListener("mousedown",y,!0),s.removeEventListener("touchstart",y,!0)}},[t]);const k=o.useCallback(()=>{T.current!==null&&((K.current??window).clearTimeout(T.current),T.current=null),K.current=null,A.current=0},[]),j=o.useCallback(s=>{de.current||(de.current=!0,k(),M==null||M(s),L==null||L(),V==null||V(!1))},[k,L,M,V]),Pt=o.useCallback(()=>{j("close-button")},[j]),Ee=o.useCallback(()=>{j("escape-key")},[j]),fe=o.useCallback(()=>{j("timeout")},[j]),De=o.useCallback(()=>{const s=h.current;if(!t||!s)return;const u=s.ownerDocument;Se(u,s),Ie(u,s,S)},[t,S]),W=o.useCallback(s=>{var y;if(s<=0){fe();return}k(),I.current=s,A.current=Date.now();const u=((y=h.current)==null?void 0:y.ownerDocument.defaultView)??window;K.current=u,T.current=u.setTimeout(()=>{T.current=null,K.current=null,A.current=0,I.current=0,fe()},s)},[k,fe]),Re=o.useCallback(()=>{if(T.current===null||A.current===0)return;const s=Date.now()-A.current;I.current=Math.max(0,I.current-s),k()},[k]);if(o.useEffect(()=>{if(k(),I.current=B,!(!t||B<=0))return W(B),()=>{k()}},[k,t,B,W]),o.useEffect(()=>{if(!(!t||B<=0)){if(xe){Re();return}T.current===null&&W(I.current)}},[t,Re,m,xe,B,W]),o.useEffect(()=>{var y;if(!t||!b)return;const s=w=>{if(w.key!=="Escape"||w.altKey||w.ctrlKey||w.metaKey||w.repeat||zt(w))return;const E=h.current;!E||!je(E.ownerDocument,E)||w.defaultPrevented||(F==null||F(w),!w.defaultPrevented&&(w.preventDefault(),Ee()))},u=((y=h.current)==null?void 0:y.ownerDocument)??document;return u.addEventListener("keydown",s),()=>{u.removeEventListener("keydown",s)}},[Ee,b,F,t]),o.useEffect(()=>{},[ye,e]),!t)return null;const qt=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Ft=P?void 0:l??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:h,role:qt,"data-close-on-escape":b?"true":"false","aria-modal":P?"false":void 0,"aria-live":Ft,"aria-atomic":"true","aria-keyshortcuts":Ht?"Escape":void 0,"aria-label":ye,"aria-labelledby":ye?void 0:Te,"aria-describedby":n?Be:void 0,onMouseEnter:()=>{De(),m&&q(s=>({...s,hover:!0}))},onMouseLeave:()=>{m&&q(s=>({...s,hover:!1}))},onFocusCapture:()=>{De(),m&&q(s=>({...s,focus:!0}))},onBlurCapture:s=>{m&&!s.currentTarget.contains(s.relatedTarget)&&q(u=>({...u,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Kt[i],...Gt[S]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Te,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Pt,"aria-label":At,onMouseEnter:()=>{he(!0)},onMouseLeave:()=>{he(!1),G(!1)},onMouseDown:s=>{s.button===0&&(O.current=!1,me(!1),G(!0))},onMouseUp:s=>{s.button===0&&G(!1)},onKeyDown:()=>{O.current=!0},onFocus:s=>{me($t(s.currentTarget,O.current))},onBlur:()=>{me(!1),G(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:pe||ke?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:be?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":pe?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:pe?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ke?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:be?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:Be,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:r}):null]})}function $t(t,e){try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const H={...Lt},ie={...Mt};function g({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(Vt,{minHeight:e,align:n,gap:8,children:t})}const ma={title:"Feedback/Toast",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},Y={};function Jt(){const[t,e]=o.useState(!0);return a.jsxs(g,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(d,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(d,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const U={render:()=>a.jsx(Jt,{})};function Qt(){const[t,e]=o.useState(!0);return a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const _={render:()=>a.jsx(Qt,{}),play:async({canvasElement:t})=>{const n=f(t.ownerDocument.body).getByRole("button",{name:"Close toast"});x.mouseDown(n,{button:2}),await c(n.style.transform).toContain("translateY(0"),x.mouseDown(n),x.mouseUp(n),await c(n.style.transform).toContain("translateY(0")}};function Xt(){const[t,e]=o.useState(!0);return a.jsxs(g,{children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const z={render:()=>a.jsx(Xt,{}),play:async({canvasElement:t})=>{const e=f(t),n=e.getByRole("dialog");await c(n).toBeInTheDocument(),await c(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(e.getByRole("button",{name:"Close blocking notice"})),await c(e.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("dialog")).toBeInTheDocument()}};function Zt(){const[t,e]=o.useState(!0);return a.jsxs(g,{children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const $={render:()=>a.jsx(Zt,{}),play:async({canvasElement:t})=>{const e=f(t);await c(e.getByRole("alertdialog")).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close incident notice"})),await c(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("alertdialog")).toBeInTheDocument()}};function ea(){const[t,e]=o.useState(!0),[n,r]=o.useState("none"),[i,l]=o.useState("N/A"),C=o.useCallback(m=>{l(b=>b==="N/A"?m:`${b} -> ${m}`)},[]);return a.jsxs(g,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:ie,children:n})]}),a.jsxs("p",{style:H,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:ie,children:i})]}),a.jsx("p",{style:H,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(p,{variant:"outline",onClick:()=>{l("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:m=>{e(m),m||C("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:m=>{r(m),C(`reason:${m}`)}})]})}const J={render:()=>a.jsx(ea,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await D(()=>{c(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(e.getByRole("button",{name:"Close toast"})),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(e.getByRole("button",{name:"Reopen Toast"})),x.keyDown(t.ownerDocument,{key:"Escape",ctrlKey:!0}),await c(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await v.keyboard("{Escape}"),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function ta(){const[t,e]=o.useState(!0),[n,r]=o.useState("none");return a.jsxs(g,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:ie,children:n})]}),a.jsx(p,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const Q={render:()=>a.jsx(ta,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await c(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await D(()=>{c(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await c(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function It(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs(g,{children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const X={render:()=>a.jsx(It,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),r=await e.findByRole("status",{name:"Second notice"});await D(()=>{c(n).not.toHaveAttribute("aria-keyshortcuts"),c(r).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(f(r).getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await D(()=>{c(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function aa(){const[t,e]=o.useState({first:!0,second:!0}),[n,r]=o.useState(!0);return a.jsxs(g,{minHeight:280,align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(d,{open:t.first,onOpenChange:i=>{e(l=>({...l,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t.second,onOpenChange:i=>{e(l=>({...l,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const Z={render:()=>a.jsx(aa,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await D(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(e.getByRole("button",{name:"Pin top toast"})),await D(()=>{c(r).toHaveAttribute("aria-keyshortcuts","Escape"),c(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(e.getByRole("button",{name:"Unpin top toast"})),await D(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),x.keyDown(n,{key:"Escape",repeat:!0}),await c(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await c(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function na(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs(g,{minHeight:280,children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const ee={render:()=>a.jsx(na,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await c(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await c(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},te={render:()=>a.jsxs(g,{minHeight:280,children:[a.jsx("p",{style:H,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(It,{})]})};function oa(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const i=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function sa(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function ra(){const[t,e]=o.useState(!0);return a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function ca(){const[t,e]=o.useState(!0),[n,r]=o.useState(0);return o.useEffect(()=>{const i=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(g,{align:"start",children:[a.jsxs("p",{style:H,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:ie,children:n})]}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}const ae={render:()=>a.jsx(oa,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable global Escape handler"})),await c(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},ne={render:()=>a.jsx(ca,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape"}),await c(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},oe={render:()=>a.jsx(sa,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await c(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},se={render:()=>a.jsx(ra,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},re={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await c(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},ce={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await c(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var He,Oe,Ae;Y.parameters={...Y.parameters,docs:{...(He=Y.parameters)==null?void 0:He.docs,source:{originalSource:"{}",...(Ae=(Oe=Y.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Pe,qe,Fe;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Fe=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Le,Me,Ve;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <CloseButtonPrimaryPointerOnlyDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeButton = canvas.getByRole("button", {
      name: "Close toast"
    });
    fireEvent.mouseDown(closeButton, {
      button: 2
    });
    await expect(closeButton.style.transform).toContain("translateY(0");
    fireEvent.mouseDown(closeButton);
    fireEvent.mouseUp(closeButton);
    await expect(closeButton.style.transform).toContain("translateY(0");
  }
}`,...(Ve=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ke,Ge,Ne;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <ActionRequiredToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole("dialog");
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.click(canvas.getByRole("button", {
      name: "Close blocking notice"
    }));
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(Ne=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var We,Ye,Ue;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <DangerActionToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("alertdialog")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close incident notice"
    }));
    await expect(canvas.queryByRole("alertdialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("alertdialog")).toBeInTheDocument();
  }
}`,...(Ue=(Ye=$.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var _e,ze,$e;J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await waitFor(() => {
      expect(canvas.getByRole("status", {
        name: "Close reason telemetry"
      })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("N/A");
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Toast"
    }));
    fireEvent.keyDown(canvasElement.ownerDocument, {
      key: "Escape",
      ctrlKey: true
    });
    await expect(canvas.getByRole("status", {
      name: "Close reason telemetry"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
  }
}`,...($e=(ze=J.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;Q.parameters={...Q.parameters,docs:{...(Je=Q.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <TimeoutCloseReasonDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(await canvas.findByRole("status", {
      name: "Timeout close telemetry"
    })).toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.queryByRole("status", {
        name: "Timeout close telemetry"
      })).not.toBeInTheDocument();
    });
    await expect(canvas.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout");
  }
}`,...(Xe=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const first = await canvas.findByRole("status", {
      name: "First notice"
    });
    const second = await canvas.findByRole("status", {
      name: "Second notice"
    });
    await waitFor(() => {
      expect(first).not.toHaveAttribute("aria-keyshortcuts");
      expect(second).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    await userEvent.click(within(second).getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("status", {
      name: "Second notice"
    })).not.toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.getByRole("status", {
        name: "First notice"
      })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
  }
}`,...(tt=(et=X.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;Z.parameters={...Z.parameters,docs:{...(at=Z.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <EscapeShortcutSyncDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    const baseToast = await canvas.findByRole("status", {
      name: "Base notice"
    });
    const topToast = await canvas.findByRole("status", {
      name: "Top notice"
    });
    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Pin top toast"
    }));
    await waitFor(() => {
      expect(baseToast).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(topToast).not.toHaveAttribute("aria-keyshortcuts");
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Unpin top toast"
    }));
    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    fireEvent.keyDown(doc, {
      key: "Escape",
      repeat: true
    });
    await expect(canvas.getByRole("status", {
      name: "Base notice"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("status", {
      name: "Top notice"
    })).toBeInTheDocument();
  }
}`,...(ot=(nt=Z.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,ct;ee.parameters={...ee.parameters,docs:{...(st=ee.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => <StackedViewportOffsetDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const first = await canvas.findByRole("status", {
      name: "First stack item"
    });
    const second = await canvas.findByRole("status", {
      name: "Second stack item"
    });
    await expect(first.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px");
    await expect(second.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px");
  }
}`,...(ct=(rt=ee.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,ut,lt;te.parameters={...te.parameters,docs:{...(it=te.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: () => <ToastShowcase minHeight={280}>
      <p style={toastTelemetryTextStyle}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </ToastShowcase>
}`,...(lt=(ut=te.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,pt,mt;ae.parameters={...ae.parameters,docs:{...(dt=ae.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Global Escape override"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await expect(canvas.getByRole("status", {
      name: "Global Escape override"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Disable global Escape handler"
    }));
    await expect(canvas.getByRole("button", {
      name: "Enable global Escape handler"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("status", {
      name: "Global Escape override"
    })).not.toBeInTheDocument();
  }
}`,...(mt=(pt=ae.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ft,vt;ne.parameters={...ne.parameters,docs:{...(yt=ne.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <EscapePreemptedSkipsHookDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Preempted escape skips toast hook"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await expect(canvas.getByTestId("escape-hook-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("status", {
      name: "Preempted escape skips toast hook"
    })).toBeInTheDocument();
  }
}`,...(vt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};var gt,wt,ht;oe.parameters={...oe.parameters,docs:{...(gt=oe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  render: () => <EscapeGuardedByToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Toast-level Escape guard"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await expect(canvas.getByRole("status", {
      name: "Toast-level Escape guard"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Disable toast Escape guard"
    }));
    await expect(canvas.getByRole("button", {
      name: "Enable toast Escape guard"
    })).toBeInTheDocument();
  }
}`,...(ht=(wt=oe.parameters)==null?void 0:wt.docs)==null?void 0:ht.source}}};var bt,kt,xt;se.parameters={...se.parameters,docs:{...(bt=se.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  render: () => <EscapeImeCompositionDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("dialog", {
      name: "IME composition guard"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByRole("dialog", {
      name: "IME composition guard"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("dialog", {
      name: "IME composition guard"
    })).not.toBeInTheDocument();
  }
}`,...(xt=(kt=se.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var Tt,Bt,Et;re.parameters={...re.parameters,docs:{...(Tt=re.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    title: <span aria-hidden>✅</span>,
    description: "Build artifact is ready.",
    ariaLabel: "Build artifact ready notification"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Build artifact ready notification"
    })).toBeInTheDocument();
  }
}`,...(Et=(Bt=re.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var Dt,Rt,Ct;ce.parameters={...ce.parameters,docs:{...(Dt=ce.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    title: "Background sync",
    description: "Silent status updates are visible but not announced.",
    live: "off",
    duration: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Background sync"
    })).toHaveAttribute("aria-live", "off");
  }
}`,...(Ct=(Rt=ce.parameters)==null?void 0:Rt.docs)==null?void 0:Ct.source}}};const ya=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{z as ActionRequired,$ as ActionRequiredDanger,re as AriaLabelOverride,_ as CloseButtonPrimaryPointerOnly,J as CloseReasonTelemetry,Y as Default,oe as EscapeGuardedByToastHandler,se as EscapeIgnoresImeComposition,ae as EscapePreemptedByGlobalHandler,ne as EscapePreemptedSkipsToastHook,Z as EscapeShortcutSync,X as EscapeStackOrder,te as FocusedToastEscapesFirst,ce as LiveRegionOff,ee as StackedViewportOffset,Q as TimeoutCloseReason,U as ToneMatrix,ya as __namedExportsOrder,ma as default};
