import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as p}from"./Button-DS9RTxKh.js";import{within as y,expect as c,userEvent as v,fireEvent as k,waitFor as T}from"./index-DgAF9SIF.js";const Ht={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Ot={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},At=14,xe=new WeakMap;function Pt(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function D(t){const e=xe.get(t);if(e)return e;const n={escapeStack:[],visualStacks:Pt(),listeners:new Set};return xe.set(t,n),n}function ue(t){D(t).listeners.forEach(n=>{n()})}function qt(t,e){const n=D(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function Be(t,e){const n=D(t),r=n.escapeStack.lastIndexOf(e);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(e),ue(t)}function Lt(t,e){const n=D(t),r=n.escapeStack.lastIndexOf(e);r>=0&&(n.escapeStack.splice(r,1),ue(t))}function Bt(t,e){const n=t.visualStacks[e],r=e.startsWith("bottom")?-1:1;n.forEach((i,u)=>{const R=n.length-1-u;i.style.setProperty("--aurora-toast-stack-offset",`${R*r*At}px`)})}function Ee(t,e,n){const r=D(t),i=r.visualStacks[n],u=i.lastIndexOf(e);u>=0&&i.splice(u,1),i.push(e),Bt(r,n)}function Ft(t,e,n){const r=D(t),i=r.visualStacks[n],u=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(u<0)&&(i.splice(u,1),Bt(r,n))}function Te(t,e){const n=D(t);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function Mt(t){return t.isComposing?!0:t.keyCode===229}function d({open:t,title:e,description:n,action:r,tone:i="info",live:u,duration:R,pauseOnHover:m=!0,closeOnEscape:w=!0,onEscapeKeyDown:P,closeLabel:Tt="Close toast",ariaLabel:le,position:C="bottom-right",onClose:q,onCloseReason:L,onOpenChange:F}){const g=s.useRef(null),j=s.useRef(!0),se=s.useRef(!1),x=s.useRef(null),H=s.useRef(0),O=s.Children.toArray(r).length>0,B=R??(O?0:4e3),S=s.useRef(B),[Dt,de]=s.useState(!1),[pe,A]=s.useState({hover:!1,focus:!1}),[re,me]=s.useState(!1),[ye,M]=s.useState(!1),[ve,ce]=s.useState(!1),[Rt,Ct]=s.useState(!1),fe=Dt||m&&(pe.hover||pe.focus),ge=s.useId(),he=s.useId(),V=s.useCallback(()=>{const o=g.current;Ct(!!(t&&w&&o&&Te(o.ownerDocument,o)))},[w,t]);s.useEffect(()=>{V()},[V]),s.useEffect(()=>{var l;const o=(l=g.current)==null?void 0:l.ownerDocument;if(o)return qt(o,V)},[V]),s.useEffect(()=>{const o=g.current;if(!t||!o)return;const l=o.ownerDocument;return Be(l,o),Ee(l,o,C),()=>{Lt(l,o),Ft(l,o,C)}},[t,C]),s.useEffect(()=>{!t||!g.current||ue(g.current.ownerDocument)},[w,t]),s.useEffect(()=>{t||(A({hover:!1,focus:!1}),de(!1)),se.current=!1},[t]),s.useEffect(()=>{var f;if(!t)return;const o=((f=g.current)==null?void 0:f.ownerDocument)??document,l=()=>{de(o.visibilityState==="hidden")};return l(),o.addEventListener("visibilitychange",l),()=>{o.removeEventListener("visibilitychange",l)}},[t]),s.useEffect(()=>{var h;if(!t)return;const o=((h=g.current)==null?void 0:h.ownerDocument)??document,l=E=>{E.metaKey||E.altKey||E.ctrlKey||(j.current=!0)},f=()=>{j.current=!1};return o.addEventListener("keydown",l,!0),o.addEventListener("pointerdown",f,!0),o.addEventListener("mousedown",f,!0),o.addEventListener("touchstart",f,!0),()=>{o.removeEventListener("keydown",l,!0),o.removeEventListener("pointerdown",f,!0),o.removeEventListener("mousedown",f,!0),o.removeEventListener("touchstart",f,!0)}},[t]);const b=s.useCallback(()=>{x.current!==null&&(window.clearTimeout(x.current),x.current=null),H.current=0},[]),I=s.useCallback(o=>{se.current||(se.current=!0,b(),L==null||L(o),q==null||q(),F==null||F(!1))},[b,q,L,F]),St=s.useCallback(()=>{I("close-button")},[I]),we=s.useCallback(()=>{I("escape-key")},[I]),ie=s.useCallback(()=>{I("timeout")},[I]),be=s.useCallback(()=>{const o=g.current;if(!t||!o)return;const l=o.ownerDocument;Be(l,o),Ee(l,o,C)},[t,C]),G=s.useCallback(o=>{if(o<=0){ie();return}b(),S.current=o,H.current=Date.now(),x.current=window.setTimeout(()=>{x.current=null,H.current=0,S.current=0,ie()},o)},[b,ie]),ke=s.useCallback(()=>{if(x.current===null||H.current===0)return;const o=Date.now()-H.current;S.current=Math.max(0,S.current-o),b()},[b]);if(s.useEffect(()=>{if(b(),S.current=B,!(!t||B<=0))return G(B),()=>{b()}},[b,t,B,G]),s.useEffect(()=>{if(!(!t||B<=0)){if(fe){ke();return}x.current===null&&G(S.current)}},[t,ke,m,fe,B,G]),s.useEffect(()=>{var f;if(!t||!w)return;const o=h=>{if(h.key!=="Escape"||h.repeat||Mt(h))return;const E=g.current;!E||!Te(E.ownerDocument,E)||h.defaultPrevented||(P==null||P(h),!h.defaultPrevented&&(h.preventDefault(),we()))},l=((f=g.current)==null?void 0:f.ownerDocument)??document;return l.addEventListener("keydown",o),()=>{l.removeEventListener("keydown",o)}},[we,w,P,t]),!t)return null;const It=O?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",jt=O?void 0:u??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:g,role:It,"data-close-on-escape":w?"true":"false","aria-modal":O?"false":void 0,"aria-live":jt,"aria-atomic":"true","aria-keyshortcuts":Rt?"Escape":void 0,"aria-label":le,"aria-labelledby":le?void 0:ge,"aria-describedby":n?he:void 0,onMouseEnter:()=>{be(),m&&A(o=>({...o,hover:!0}))},onMouseLeave:()=>{m&&A(o=>({...o,hover:!1}))},onFocusCapture:()=>{be(),m&&A(o=>({...o,focus:!0}))},onBlurCapture:o=>{m&&!o.currentTarget.contains(o.relatedTarget)&&A(l=>({...l,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Ht[i],...Ot[C]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:ge,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:St,"aria-label":Tt,onMouseEnter:()=>{me(!0)},onMouseLeave:()=>{me(!1),M(!1)},onMouseDown:o=>{o.button===0&&(j.current=!1,ce(!1),M(!0))},onMouseUp:o=>{o.button===0&&M(!1)},onKeyDown:()=>{j.current=!0},onFocus:o=>{ce(Vt(o.currentTarget,j.current))},onBlur:()=>{ce(!1),M(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:re||ve?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ye?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":re?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:re?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ve?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:ye?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:he,style:{color:"var(--aurora-text-secondary)"},children:n}):null,O?a.jsx("div",{children:r}):null]})}function Vt(t,e){try{return t.matches(":focus-visible")}catch{return e}}d.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const na={title:"Feedback/Toast",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},N={};function Gt(){const[t,e]=s.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(d,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(d,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const K={render:()=>a.jsx(Gt,{})};function Nt(){const[t,e]=s.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const Y={render:()=>a.jsx(Nt,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});k.mouseDown(n,{button:2}),await c(n.style.transform).toContain("translateY(0"),k.mouseDown(n),k.mouseUp(n),await c(n.style.transform).toContain("translateY(0")}};function Kt(){const[t,e]=s.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const U={render:()=>a.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await c(n).toBeInTheDocument(),await c(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(e.getByRole("button",{name:"Close blocking notice"})),await c(e.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("dialog")).toBeInTheDocument()}};function Yt(){const[t,e]=s.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const W={render:()=>a.jsx(Yt,{}),play:async({canvasElement:t})=>{const e=y(t);await c(e.getByRole("alertdialog")).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close incident notice"})),await c(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await c(e.getByRole("alertdialog")).toBeInTheDocument()}};function Ut(){const[t,e]=s.useState(!0),[n,r]=s.useState("none"),[i,u]=s.useState("N/A"),R=s.useCallback(m=>{u(w=>w==="N/A"?m:`${w} -> ${m}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:i})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(p,{variant:"outline",onClick:()=>{u("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:m=>{e(m),m||R("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:m=>{r(m),R(`reason:${m}`)}})]})}const _={render:()=>a.jsx(Ut,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await T(()=>{c(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(e.getByRole("button",{name:"Close toast"})),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(e.getByRole("button",{name:"Reopen Toast"})),await v.keyboard("{Escape}"),await c(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await c(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function Wt(){const[t,e]=s.useState(!0),[n,r]=s.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(p,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const z={render:()=>a.jsx(Wt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await T(()=>{c(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await c(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Et(){const[t,e]=s.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const $={render:()=>a.jsx(Et,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),r=await e.findByRole("status",{name:"Second notice"});await T(()=>{c(n).not.toHaveAttribute("aria-keyshortcuts"),c(r).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(y(r).getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await T(()=>{c(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function _t(){const[t,e]=s.useState({first:!0,second:!0}),[n,r]=s.useState(!0);return a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(d,{open:t.first,onOpenChange:i=>{e(u=>({...u,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t.second,onOpenChange:i=>{e(u=>({...u,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const J={render:()=>a.jsx(_t,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await T(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(e.getByRole("button",{name:"Pin top toast"})),await T(()=>{c(r).toHaveAttribute("aria-keyshortcuts","Escape"),c(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(e.getByRole("button",{name:"Unpin top toast"})),await T(()=>{c(r).not.toHaveAttribute("aria-keyshortcuts"),c(i).toHaveAttribute("aria-keyshortcuts","Escape")}),k.keyDown(n,{key:"Escape",repeat:!0}),await c(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await c(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function zt(){const[t,e]=s.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const Q={render:()=>a.jsx(zt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await c(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await c(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},X={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Et,{})]})};function $t(){const[t,e]=s.useState(!0),[n,r]=s.useState(!0);return s.useEffect(()=>{if(!n)return;const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Jt(){const[t,e]=s.useState(!0),[n,r]=s.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Qt(){const[t,e]=s.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Xt(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return s.useEffect(()=>{const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}const Z={render:()=>a.jsx($t,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable global Escape handler"})),await c(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},ee={render:()=>a.jsx(Xt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape"}),await c(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await c(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},te={render:()=>a.jsx(Jt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape"}),await c(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await c(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ae={render:()=>a.jsx(Qt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),k.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await c(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await c(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ne={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},oe={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await c(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var De,Re,Ce;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:"{}",...(Ce=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var Se,Ie,je;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(je=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var He,Oe,Ae;Y.parameters={...Y.parameters,docs:{...(He=Y.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(Oe=Y.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Pe,qe,Le;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Le=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Fe,Me,Ve;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ge,Ne,Ke;_.parameters={..._.parameters,docs:{...(Ge=_.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ke=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var Ye,Ue,We;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(We=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var _e,ze,$e;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...($e=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=J.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=Q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;X.parameters={...X.parameters,docs:{...(at=X.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=X.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,ct;Z.parameters={...Z.parameters,docs:{...(st=Z.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(rt=Z.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,ut,lt;ee.parameters={...ee.parameters,docs:{...(it=ee.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ut=ee.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,pt,mt;te.parameters={...te.parameters,docs:{...(dt=te.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=te.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,vt,ft;ae.parameters={...ae.parameters,docs:{...(yt=ae.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ft=(vt=ae.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};var gt,ht,wt;ne.parameters={...ne.parameters,docs:{...(gt=ne.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(wt=(ht=ne.parameters)==null?void 0:ht.docs)==null?void 0:wt.source}}};var bt,kt,xt;oe.parameters={...oe.parameters,docs:{...(bt=oe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(kt=oe.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};const oa=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{U as ActionRequired,W as ActionRequiredDanger,ne as AriaLabelOverride,Y as CloseButtonPrimaryPointerOnly,_ as CloseReasonTelemetry,N as Default,te as EscapeGuardedByToastHandler,ae as EscapeIgnoresImeComposition,Z as EscapePreemptedByGlobalHandler,ee as EscapePreemptedSkipsToastHook,J as EscapeShortcutSync,$ as EscapeStackOrder,X as FocusedToastEscapesFirst,oe as LiveRegionOff,Q as StackedViewportOffset,z as TimeoutCloseReason,K as ToneMatrix,oa as __namedExportsOrder,na as default};
