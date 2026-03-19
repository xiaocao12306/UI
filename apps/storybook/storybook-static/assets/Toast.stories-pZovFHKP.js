import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as p}from"./Button-DS9RTxKh.js";import{within as y,expect as c,userEvent as f,fireEvent as k,waitFor as T}from"./index-DgAF9SIF.js";const It={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},jt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Ht=14,ke=new WeakMap;function Ot(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function R(t){const e=ke.get(t);if(e)return e;const n={escapeStack:[],visualStacks:Ot(),listeners:new Set};return ke.set(t,n),n}function ue(t){R(t).listeners.forEach(n=>{n()})}function At(t,e){const n=R(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function xe(t,e){const n=R(t),r=n.escapeStack.lastIndexOf(e);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(e),ue(t)}function Pt(t,e){const n=R(t),r=n.escapeStack.lastIndexOf(e);r>=0&&(n.escapeStack.splice(r,1),ue(t))}function xt(t,e){const n=t.visualStacks[e],r=e.startsWith("bottom")?-1:1;n.forEach((i,u)=>{const D=n.length-1-u;i.style.setProperty("--aurora-toast-stack-offset",`${D*r*Ht}px`)})}function Be(t,e,n){const r=R(t),i=r.visualStacks[n],u=i.lastIndexOf(e);u>=0&&i.splice(u,1),i.push(e),xt(r,n)}function qt(t,e,n){const r=R(t),i=r.visualStacks[n],u=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(u<0)&&(i.splice(u,1),xt(r,n))}function Ee(t,e){const n=R(t);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function Ft(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:n,action:r,tone:i="info",live:u,duration:D,pauseOnHover:m=!0,closeOnEscape:h=!0,onEscapeKeyDown:P,closeLabel:Et="Close toast",ariaLabel:le,position:C="bottom-right",onClose:q,onCloseReason:F,onOpenChange:L}){const v=o.useRef(null),j=o.useRef(!0),se=o.useRef(!1),x=o.useRef(null),H=o.useRef(0),O=o.Children.toArray(r).length>0,B=D??(O?0:4e3),S=o.useRef(B),[de,A]=o.useState({hover:!1,focus:!1}),[re,pe]=o.useState(!1),[me,M]=o.useState(!1),[ye,ce]=o.useState(!1),[Tt,Rt]=o.useState(!1),fe=m&&(de.hover||de.focus),ve=o.useId(),ge=o.useId(),V=o.useCallback(()=>{const s=v.current;Rt(!!(t&&h&&s&&Ee(s.ownerDocument,s)))},[h,t]);o.useEffect(()=>{V()},[V]),o.useEffect(()=>{var d;const s=(d=v.current)==null?void 0:d.ownerDocument;if(s)return At(s,V)},[V]),o.useEffect(()=>{const s=v.current;if(!t||!s)return;const d=s.ownerDocument;return xe(d,s),Be(d,s,C),()=>{Pt(d,s),qt(d,s,C)}},[t,C]),o.useEffect(()=>{!t||!v.current||ue(v.current.ownerDocument)},[h,t]),o.useEffect(()=>{t||A({hover:!1,focus:!1}),se.current=!1},[t]),o.useEffect(()=>{var g;if(!t)return;const s=((g=v.current)==null?void 0:g.ownerDocument)??document,d=E=>{E.metaKey||E.altKey||E.ctrlKey||(j.current=!0)},b=()=>{j.current=!1};return s.addEventListener("keydown",d,!0),s.addEventListener("pointerdown",b,!0),s.addEventListener("mousedown",b,!0),s.addEventListener("touchstart",b,!0),()=>{s.removeEventListener("keydown",d,!0),s.removeEventListener("pointerdown",b,!0),s.removeEventListener("mousedown",b,!0),s.removeEventListener("touchstart",b,!0)}},[t]);const w=o.useCallback(()=>{x.current!==null&&(window.clearTimeout(x.current),x.current=null),H.current=0},[]),I=o.useCallback(s=>{se.current||(se.current=!0,w(),F==null||F(s),q==null||q(),L==null||L(!1))},[w,q,F,L]),Dt=o.useCallback(()=>{I("close-button")},[I]),he=o.useCallback(()=>{I("escape-key")},[I]),ie=o.useCallback(()=>{I("timeout")},[I]),we=o.useCallback(()=>{const s=v.current;if(!t||!s)return;const d=s.ownerDocument;xe(d,s),Be(d,s,C)},[t,C]),G=o.useCallback(s=>{if(s<=0){ie();return}w(),S.current=s,H.current=Date.now(),x.current=window.setTimeout(()=>{x.current=null,H.current=0,S.current=0,ie()},s)},[w,ie]),be=o.useCallback(()=>{if(x.current===null||H.current===0)return;const s=Date.now()-H.current;S.current=Math.max(0,S.current-s),w()},[w]);if(o.useEffect(()=>{if(w(),S.current=B,!(!t||B<=0))return G(B),()=>{w()}},[w,t,B,G]),o.useEffect(()=>{if(!(!t||B<=0||!m)){if(fe){be();return}x.current===null&&G(S.current)}},[t,be,m,fe,B,G]),o.useEffect(()=>{var b;if(!t||!h)return;const s=g=>{if(g.key!=="Escape"||g.repeat||Ft(g))return;const E=v.current;!E||!Ee(E.ownerDocument,E)||g.defaultPrevented||(P==null||P(g),!g.defaultPrevented&&(g.preventDefault(),he()))},d=((b=v.current)==null?void 0:b.ownerDocument)??document;return d.addEventListener("keydown",s),()=>{d.removeEventListener("keydown",s)}},[he,h,P,t]),!t)return null;const Ct=O?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",St=O?void 0:u??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:v,role:Ct,"data-close-on-escape":h?"true":"false","aria-modal":O?"false":void 0,"aria-live":St,"aria-atomic":"true","aria-keyshortcuts":Tt?"Escape":void 0,"aria-label":le,"aria-labelledby":le?void 0:ve,"aria-describedby":n?ge:void 0,onMouseEnter:()=>{we(),m&&A(s=>({...s,hover:!0}))},onMouseLeave:()=>{m&&A(s=>({...s,hover:!1}))},onFocusCapture:()=>{we(),m&&A(s=>({...s,focus:!0}))},onBlurCapture:s=>{m&&!s.currentTarget.contains(s.relatedTarget)&&A(d=>({...d,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...It[i],...jt[C]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:ve,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:Dt,"aria-label":Et,onMouseEnter:()=>{pe(!0)},onMouseLeave:()=>{pe(!1),M(!1)},onMouseDown:s=>{s.button===0&&(j.current=!1,ce(!1),M(!0))},onMouseUp:s=>{s.button===0&&M(!1)},onKeyDown:()=>{j.current=!0},onFocus:s=>{ce(Lt(s.currentTarget,j.current))},onBlur:()=>{ce(!1),M(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:re||ye?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:me?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":re?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:re?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ye?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:me?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:ge,style:{color:"var(--aurora-text-secondary)"},children:n}):null,O?a.jsx("div",{children:r}):null]})}function Lt(t,e){try{return t.matches(":focus-visible")}catch{return e}}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const ta={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},N={};function Mt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const K={render:()=>a.jsx(Mt,{})};function Vt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const Y={render:()=>a.jsx(Vt,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});k.mouseDown(n,{button:2}),await c(n.style.transform).toContain("translateY(0"),k.mouseDown(n),k.mouseUp(n),await c(n.style.transform).toContain("translateY(0")}};function Gt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const U={render:()=>a.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await c(n).toBeInTheDocument(),await c(n).not.toHaveAttribute("aria-keyshortcuts"),await f.click(e.getByRole("button",{name:"Close blocking notice"})),await c(e.queryByRole("dialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("dialog")).toBeInTheDocument()}};function Nt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const W={render:()=>a.jsx(Nt,{}),play:async({canvasElement:t})=>{const e=y(t);await c(e.getByRole("alertdialog")).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close incident notice"})),await c(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("alertdialog")).toBeInTheDocument()}};function Kt(){const[t,e]=o.useState(!0),[n,r]=o.useState("none"),[i,u]=o.useState("N/A"),D=o.useCallback(m=>{u(h=>h==="N/A"?m:`${h} -> ${m}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:i})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(p,{variant:"outline",onClick:()=>{u("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:m=>{e(m),m||D("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:m=>{r(m),D(`reason:${m}`)}})]})}const _={render:()=>a.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await T(()=>{c(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await f.click(e.getByRole("button",{name:"Close toast"})),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await f.click(e.getByRole("button",{name:"Reopen Toast"})),await f.keyboard("{Escape}"),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function Yt(){const[t,e]=o.useState(!0),[n,r]=o.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(p,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const z={render:()=>a.jsx(Yt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await T(()=>{c(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await c(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Bt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const $={render:()=>a.jsx(Bt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),r=await e.findByRole("status",{name:"Second notice"});await T(()=>{c(n).not.toHaveAttribute("aria-keyshortcuts"),c(r).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(y(r).getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await T(()=>{c(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Ut(){const[t,e]=o.useState({first:!0,second:!0}),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(l,{open:t.first,onOpenChange:i=>{e(u=>({...u,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t.second,onOpenChange:i=>{e(u=>({...u,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const J={render:()=>a.jsx(Ut,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await T(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(e.getByRole("button",{name:"Pin top toast"})),await T(()=>{c(r).toHaveAttribute("aria-keyshortcuts","Escape"),c(i).not.toHaveAttribute("aria-keyshortcuts")}),await f.click(e.getByRole("button",{name:"Unpin top toast"})),await T(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),k.keyDown(n,{key:"Escape",repeat:!0}),await c(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await c(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Wt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const Q={render:()=>a.jsx(Wt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await c(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await c(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},X={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Bt,{})]})};function _t(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function zt(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function $t(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Jt(){const[t,e]=o.useState(!0),[n,r]=o.useState(0);return o.useEffect(()=>{const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}const Z={render:()=>a.jsx(_t,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable global Escape handler"})),await c(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},ee={render:()=>a.jsx(Jt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape"}),await c(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},te={render:()=>a.jsx(zt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await c(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ae={render:()=>a.jsx($t,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ne={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},oe={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Te,Re,De;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:"{}",...(De=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ce,Se,Ie;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ie=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var je,He,Oe;Y.parameters={...Y.parameters,docs:{...(je=Y.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(He=Y.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Ae,Pe,qe;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(qe=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Fe,Le,Me;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ve,Ge,Ne;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ke,Ye,Ue;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ue=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var We,_e,ze;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(ze=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var $e,Je,Qe;J.parameters={...J.parameters,docs:{...($e=J.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;X.parameters={...X.parameters,docs:{...(tt=X.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: 280,
    padding: 16,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </div>
}`,...(nt=(at=X.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,st,rt;Z.parameters={...Z.parameters,docs:{...(ot=Z.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=Z.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ct,it,ut;ee.parameters={...ee.parameters,docs:{...(ct=ee.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(it=ee.parameters)==null?void 0:it.docs)==null?void 0:ut.source}}};var lt,dt,pt;te.parameters={...te.parameters,docs:{...(lt=te.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=te.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,yt,ft;ae.parameters={...ae.parameters,docs:{...(mt=ae.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ft=(yt=ae.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var vt,gt,ht;ne.parameters={...ne.parameters,docs:{...(vt=ne.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(ht=(gt=ne.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var wt,bt,kt;oe.parameters={...oe.parameters,docs:{...(wt=oe.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(kt=(bt=oe.parameters)==null?void 0:bt.docs)==null?void 0:kt.source}}};const aa=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{U as ActionRequired,W as ActionRequiredDanger,ne as AriaLabelOverride,Y as CloseButtonPrimaryPointerOnly,_ as CloseReasonTelemetry,N as Default,te as EscapeGuardedByToastHandler,ae as EscapeIgnoresImeComposition,Z as EscapePreemptedByGlobalHandler,ee as EscapePreemptedSkipsToastHook,J as EscapeShortcutSync,$ as EscapeStackOrder,X as FocusedToastEscapesFirst,oe as LiveRegionOff,Q as StackedViewportOffset,z as TimeoutCloseReason,K as ToneMatrix,aa as __namedExportsOrder,ta as default};
