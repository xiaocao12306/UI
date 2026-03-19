import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as p}from"./Button-DS9RTxKh.js";import{within as y,expect as c,userEvent as f,fireEvent as x,waitFor as D}from"./index-DgAF9SIF.js";import{s as Pt,a as qt,b as Ft}from"./storyShowcase-Bw5VyCj0.js";const Lt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Mt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Vt=14,Ee=new WeakMap;function Gt(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function R(t){const e=Ee.get(t);if(e)return e;const n={escapeStack:[],visualStacks:Gt(),listeners:new Set};return Ee.set(t,n),n}function pe(t){R(t).listeners.forEach(n=>{n()})}function Nt(t,e){const n=R(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function De(t,e){const n=R(t),r=n.escapeStack.lastIndexOf(e);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(e),pe(t)}function Kt(t,e){const n=R(t),r=n.escapeStack.lastIndexOf(e);r>=0&&(n.escapeStack.splice(r,1),pe(t))}function Dt(t,e){const n=t.visualStacks[e],r=e.startsWith("bottom")?-1:1;n.forEach((i,u)=>{const C=n.length-1-u;i.style.setProperty("--aurora-toast-stack-offset",`${C*r*Vt}px`)})}function Re(t,e,n){const r=R(t),i=r.visualStacks[n],u=i.lastIndexOf(e);u>=0&&i.splice(u,1),i.push(e),Dt(r,n)}function Yt(t,e,n){const r=R(t),i=r.visualStacks[n],u=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(u<0)&&(i.splice(u,1),Dt(r,n))}function Ce(t,e){const n=R(t);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function Ut(t){return t.isComposing?!0:t.keyCode===229}function d({open:t,title:e,description:n,action:r,tone:i="info",live:u,duration:C,pauseOnHover:m=!0,closeOnEscape:b=!0,onEscapeKeyDown:F,closeLabel:Ct="Close toast",ariaLabel:me,position:S="bottom-right",onClose:L,onCloseReason:M,onOpenChange:V}){const h=s.useRef(null),O=s.useRef(!0),ie=s.useRef(!1),T=s.useRef(null),A=s.useRef(0),P=s.Children.toArray(r).length>0,B=C??(P?0:4e3),I=s.useRef(B),[St,ye]=s.useState(!1),[fe,q]=s.useState({hover:!1,focus:!1}),[ue,ve]=s.useState(!1),[ge,G]=s.useState(!1),[he,le]=s.useState(!1),[It,jt]=s.useState(!1),we=St||m&&(fe.hover||fe.focus),be=s.useId(),ke=s.useId(),N=s.useCallback(()=>{const o=h.current;jt(!!(t&&b&&o&&Ce(o.ownerDocument,o)))},[b,t]);s.useEffect(()=>{N()},[N]),s.useEffect(()=>{var l;const o=(l=h.current)==null?void 0:l.ownerDocument;if(o)return Nt(o,N)},[N]),s.useEffect(()=>{const o=h.current;if(!t||!o)return;const l=o.ownerDocument;return De(l,o),Re(l,o,S),()=>{Kt(l,o),Yt(l,o,S)}},[t,S]),s.useEffect(()=>{!t||!h.current||pe(h.current.ownerDocument)},[b,t]),s.useEffect(()=>{t||(q({hover:!1,focus:!1}),ye(!1)),ie.current=!1},[t]),s.useEffect(()=>{var g;if(!t)return;const o=((g=h.current)==null?void 0:g.ownerDocument)??document,l=()=>{ye(o.visibilityState==="hidden")};return l(),o.addEventListener("visibilitychange",l),()=>{o.removeEventListener("visibilitychange",l)}},[t]),s.useEffect(()=>{var w;if(!t)return;const o=((w=h.current)==null?void 0:w.ownerDocument)??document,l=E=>{E.metaKey||E.altKey||E.ctrlKey||(O.current=!0)},g=()=>{O.current=!1};return o.addEventListener("keydown",l,!0),o.addEventListener("pointerdown",g,!0),o.addEventListener("mousedown",g,!0),o.addEventListener("touchstart",g,!0),()=>{o.removeEventListener("keydown",l,!0),o.removeEventListener("pointerdown",g,!0),o.removeEventListener("mousedown",g,!0),o.removeEventListener("touchstart",g,!0)}},[t]);const k=s.useCallback(()=>{T.current!==null&&(window.clearTimeout(T.current),T.current=null),A.current=0},[]),j=s.useCallback(o=>{ie.current||(ie.current=!0,k(),M==null||M(o),L==null||L(),V==null||V(!1))},[k,L,M,V]),Ht=s.useCallback(()=>{j("close-button")},[j]),xe=s.useCallback(()=>{j("escape-key")},[j]),de=s.useCallback(()=>{j("timeout")},[j]),Te=s.useCallback(()=>{const o=h.current;if(!t||!o)return;const l=o.ownerDocument;De(l,o),Re(l,o,S)},[t,S]),K=s.useCallback(o=>{if(o<=0){de();return}k(),I.current=o,A.current=Date.now(),T.current=window.setTimeout(()=>{T.current=null,A.current=0,I.current=0,de()},o)},[k,de]),Be=s.useCallback(()=>{if(T.current===null||A.current===0)return;const o=Date.now()-A.current;I.current=Math.max(0,I.current-o),k()},[k]);if(s.useEffect(()=>{if(k(),I.current=B,!(!t||B<=0))return K(B),()=>{k()}},[k,t,B,K]),s.useEffect(()=>{if(!(!t||B<=0)){if(we){Be();return}T.current===null&&K(I.current)}},[t,Be,m,we,B,K]),s.useEffect(()=>{var g;if(!t||!b)return;const o=w=>{if(w.key!=="Escape"||w.repeat||Ut(w))return;const E=h.current;!E||!Ce(E.ownerDocument,E)||w.defaultPrevented||(F==null||F(w),!w.defaultPrevented&&(w.preventDefault(),xe()))},l=((g=h.current)==null?void 0:g.ownerDocument)??document;return l.addEventListener("keydown",o),()=>{l.removeEventListener("keydown",o)}},[xe,b,F,t]),!t)return null;const Ot=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",At=P?void 0:u??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:h,role:Ot,"data-close-on-escape":b?"true":"false","aria-modal":P?"false":void 0,"aria-live":At,"aria-atomic":"true","aria-keyshortcuts":It?"Escape":void 0,"aria-label":me,"aria-labelledby":me?void 0:be,"aria-describedby":n?ke:void 0,onMouseEnter:()=>{Te(),m&&q(o=>({...o,hover:!0}))},onMouseLeave:()=>{m&&q(o=>({...o,hover:!1}))},onFocusCapture:()=>{Te(),m&&q(o=>({...o,focus:!0}))},onBlurCapture:o=>{m&&!o.currentTarget.contains(o.relatedTarget)&&q(l=>({...l,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Lt[i],...Mt[S]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:be,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:Ht,"aria-label":Ct,onMouseEnter:()=>{ve(!0)},onMouseLeave:()=>{ve(!1),G(!1)},onMouseDown:o=>{o.button===0&&(O.current=!1,le(!1),G(!0))},onMouseUp:o=>{o.button===0&&G(!1)},onKeyDown:()=>{O.current=!0},onFocus:o=>{le(Wt(o.currentTarget,O.current))},onBlur:()=>{le(!1),G(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ue||he?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ge?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ue?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ue?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:he?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:ge?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:ke,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:r}):null]})}function Wt(t,e){try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const H={...Pt},ce={...qt};function v({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(Ft,{minHeight:e,align:n,gap:8,children:t})}const la={title:"Feedback/Toast",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},Y={};function _t(){const[t,e]=s.useState(!0);return a.jsxs(v,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(d,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(d,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const U={render:()=>a.jsx(_t,{})};function zt(){const[t,e]=s.useState(!0);return a.jsxs(v,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const W={render:()=>a.jsx(zt,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});x.mouseDown(n,{button:2}),await c(n.style.transform).toContain("translateY(0"),x.mouseDown(n),x.mouseUp(n),await c(n.style.transform).toContain("translateY(0")}};function $t(){const[t,e]=s.useState(!0);return a.jsxs(v,{children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const _={render:()=>a.jsx($t,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await c(n).toBeInTheDocument(),await c(n).not.toHaveAttribute("aria-keyshortcuts"),await f.click(e.getByRole("button",{name:"Close blocking notice"})),await c(e.queryByRole("dialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("dialog")).toBeInTheDocument()}};function Jt(){const[t,e]=s.useState(!0);return a.jsxs(v,{children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const z={render:()=>a.jsx(Jt,{}),play:async({canvasElement:t})=>{const e=y(t);await c(e.getByRole("alertdialog")).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close incident notice"})),await c(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("alertdialog")).toBeInTheDocument()}};function Qt(){const[t,e]=s.useState(!0),[n,r]=s.useState("none"),[i,u]=s.useState("N/A"),C=s.useCallback(m=>{u(b=>b==="N/A"?m:`${b} -> ${m}`)},[]);return a.jsxs(v,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:ce,children:n})]}),a.jsxs("p",{style:H,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:ce,children:i})]}),a.jsx("p",{style:H,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(p,{variant:"outline",onClick:()=>{u("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:m=>{e(m),m||C("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:m=>{r(m),C(`reason:${m}`)}})]})}const $={render:()=>a.jsx(Qt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await D(()=>{c(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await f.click(e.getByRole("button",{name:"Close toast"})),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await f.click(e.getByRole("button",{name:"Reopen Toast"})),await f.keyboard("{Escape}"),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function Xt(){const[t,e]=s.useState(!0),[n,r]=s.useState("none");return a.jsxs(v,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:ce,children:n})]}),a.jsx(p,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const J={render:()=>a.jsx(Xt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await D(()=>{c(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await c(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Rt(){const[t,e]=s.useState({first:!0,second:!0});return a.jsxs(v,{children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const Q={render:()=>a.jsx(Rt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),r=await e.findByRole("status",{name:"Second notice"});await D(()=>{c(n).not.toHaveAttribute("aria-keyshortcuts"),c(r).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(y(r).getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await D(()=>{c(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Zt(){const[t,e]=s.useState({first:!0,second:!0}),[n,r]=s.useState(!0);return a.jsxs(v,{minHeight:280,align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(d,{open:t.first,onOpenChange:i=>{e(u=>({...u,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t.second,onOpenChange:i=>{e(u=>({...u,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const X={render:()=>a.jsx(Zt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await D(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(e.getByRole("button",{name:"Pin top toast"})),await D(()=>{c(r).toHaveAttribute("aria-keyshortcuts","Escape"),c(i).not.toHaveAttribute("aria-keyshortcuts")}),await f.click(e.getByRole("button",{name:"Unpin top toast"})),await D(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),x.keyDown(n,{key:"Escape",repeat:!0}),await c(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await c(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function ea(){const[t,e]=s.useState({first:!0,second:!0});return a.jsxs(v,{minHeight:280,children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const Z={render:()=>a.jsx(ea,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await c(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await c(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},ee={render:()=>a.jsxs(v,{minHeight:280,children:[a.jsx("p",{style:H,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Rt,{})]})};function ta(){const[t,e]=s.useState(!0),[n,r]=s.useState(!0);return s.useEffect(()=>{if(!n)return;const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(v,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function aa(){const[t,e]=s.useState(!0),[n,r]=s.useState(!0);return a.jsxs(v,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function na(){const[t,e]=s.useState(!0);return a.jsxs(v,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function oa(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return s.useEffect(()=>{const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(v,{align:"start",children:[a.jsxs("p",{style:H,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:ce,children:n})]}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}const te={render:()=>a.jsx(ta,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable global Escape handler"})),await c(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},ae={render:()=>a.jsx(oa,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape"}),await c(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},ne={render:()=>a.jsx(aa,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await c(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},oe={render:()=>a.jsx(na,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),x.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},se={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},re={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Se,Ie,je;Y.parameters={...Y.parameters,docs:{...(Se=Y.parameters)==null?void 0:Se.docs,source:{originalSource:"{}",...(je=(Ie=Y.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var He,Oe,Ae;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ae=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Pe,qe,Fe;W.parameters={...W.parameters,docs:{...(Pe=W.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Fe=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Le,Me,Ve;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ge,Ne,Ke;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ke=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var Ye,Ue,We;$.parameters={...$.parameters,docs:{...(Ye=$.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
  }
}`,...(We=(Ue=$.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var _e,ze,$e;J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...($e=(ze=J.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;Q.parameters={...Q.parameters,docs:{...(Je=Q.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=X.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;Z.parameters={...Z.parameters,docs:{...(at=Z.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Z.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,ct;ee.parameters={...ee.parameters,docs:{...(st=ee.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => <ToastShowcase minHeight={280}>
      <p style={toastTelemetryTextStyle}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </ToastShowcase>
}`,...(ct=(rt=ee.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,ut,lt;te.parameters={...te.parameters,docs:{...(it=te.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ut=te.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,pt,mt;ae.parameters={...ae.parameters,docs:{...(dt=ae.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=ae.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ft,vt;ne.parameters={...ne.parameters,docs:{...(yt=ne.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};var gt,ht,wt;oe.parameters={...oe.parameters,docs:{...(gt=oe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(wt=(ht=oe.parameters)==null?void 0:ht.docs)==null?void 0:wt.source}}};var bt,kt,xt;se.parameters={...se.parameters,docs:{...(bt=se.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(kt=se.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var Tt,Bt,Et;re.parameters={...re.parameters,docs:{...(Tt=re.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=re.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};const da=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{_ as ActionRequired,z as ActionRequiredDanger,se as AriaLabelOverride,W as CloseButtonPrimaryPointerOnly,$ as CloseReasonTelemetry,Y as Default,ne as EscapeGuardedByToastHandler,oe as EscapeIgnoresImeComposition,te as EscapePreemptedByGlobalHandler,ae as EscapePreemptedSkipsToastHook,X as EscapeShortcutSync,Q as EscapeStackOrder,ee as FocusedToastEscapesFirst,re as LiveRegionOff,Z as StackedViewportOffset,J as TimeoutCloseReason,U as ToneMatrix,da as __namedExportsOrder,la as default};
