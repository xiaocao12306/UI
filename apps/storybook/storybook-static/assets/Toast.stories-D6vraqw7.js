import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as l}from"./Button-CnyYpMYZ.js";import{within as m,expect as s,userEvent as y,fireEvent as h,waitFor as x}from"./index-DgAF9SIF.js";const St={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},It={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},k=[],jt=14,ie={"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]},re=new Set;function ce(){re.forEach(t=>{t()})}function Ht(t){return re.add(t),()=>{re.delete(t)}}function xe(t){const e=k.lastIndexOf(t);e>=0&&k.splice(e,1),k.push(t),ce()}function Ot(t){const e=k.lastIndexOf(t);e>=0&&(k.splice(e,1),ce())}function xt(t){const e=ie[t],n=t.startsWith("bottom")?-1:1;e.forEach((r,c)=>{const d=e.length-1-c;r.style.setProperty("--aurora-toast-stack-offset",`${d*n*jt}px`)})}function ke(t,e){const n=ie[e],r=n.lastIndexOf(t);r>=0&&n.splice(r,1),n.push(t),xt(e)}function At(t,e){const n=ie[e],r=n.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(r<0)&&(n.splice(r,1),xt(e))}function Be(t){for(let e=k.length-1;e>=0;e-=1){const n=k[e];if((n==null?void 0:n.dataset.closeOnEscape)==="true")return n===t}return!1}function qt(t){return t.isComposing?!0:t.keyCode===229}function u({open:t,title:e,description:n,action:r,tone:c="info",live:d,duration:I,pauseOnHover:p=!0,closeOnEscape:f=!0,onEscapeKeyDown:j,closeLabel:Bt="Close toast",ariaLabel:ue,position:B="bottom-right",onClose:H,onCloseReason:O,onOpenChange:A}){const T=o.useRef(null),te=o.useRef(!0),ae=o.useRef(!1),w=o.useRef(null),D=o.useRef(0),C=o.Children.toArray(r).length>0,b=I??(C?0:4e3),E=o.useRef(b),[le,S]=o.useState({hover:!1,focus:!1}),[ne,de]=o.useState(!1),[pe,q]=o.useState(!1),[me,oe]=o.useState(!1),[Tt,Et]=o.useState(!1),ye=p&&(le.hover||le.focus),fe=o.useId(),ve=o.useId(),P=o.useCallback(()=>{const i=T.current;Et(!!(t&&f&&i&&Be(i)))},[f,t]);o.useEffect(()=>{P()},[P]),o.useEffect(()=>Ht(P),[P]),o.useEffect(()=>{const i=T.current;if(!(!t||!i))return xe(i),ke(i,B),()=>{Ot(i),At(i,B)}},[t,B]),o.useEffect(()=>{!t||!T.current||ce()},[f,t]),o.useEffect(()=>{t||S({hover:!1,focus:!1}),ae.current=!1},[t]);const v=o.useCallback(()=>{w.current!==null&&(window.clearTimeout(w.current),w.current=null),D.current=0},[]),R=o.useCallback(i=>{ae.current||(ae.current=!0,v(),O==null||O(i),H==null||H(),A==null||A(!1))},[v,H,O,A]),Rt=o.useCallback(()=>{R("close-button")},[R]),ge=o.useCallback(()=>{R("escape-key")},[R]),se=o.useCallback(()=>{R("timeout")},[R]),he=o.useCallback(()=>{const i=T.current;!t||!i||(xe(i),ke(i,B))},[t,B]),F=o.useCallback(i=>{if(i<=0){se();return}v(),E.current=i,D.current=Date.now(),w.current=window.setTimeout(()=>{w.current=null,D.current=0,E.current=0,se()},i)},[v,se]),we=o.useCallback(()=>{if(w.current===null||D.current===0)return;const i=Date.now()-D.current;E.current=Math.max(0,E.current-i),v()},[v]);if(o.useEffect(()=>{if(v(),E.current=b,!(!t||b<=0))return F(b),()=>{v()}},[v,t,b,F]),o.useEffect(()=>{if(!(!t||b<=0||!p)){if(ye){we();return}w.current===null&&F(E.current)}},[t,we,p,ye,b,F]),o.useEffect(()=>{if(!t||!f)return;const i=g=>{if(g.key!=="Escape"||g.repeat||qt(g))return;const be=T.current;!be||!Be(be)||g.defaultPrevented||(j==null||j(g),!g.defaultPrevented&&(g.preventDefault(),ge()))};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[ge,f,j,t]),!t)return null;const Dt=C?c==="danger"?"alertdialog":"dialog":c==="danger"?"alert":"status",Ct=C?void 0:d??(c==="danger"?"assertive":"polite");return a.jsxs("div",{ref:T,role:Dt,"data-close-on-escape":f?"true":"false","aria-modal":C?"false":void 0,"aria-live":Ct,"aria-atomic":"true","aria-keyshortcuts":Tt?"Escape":void 0,"aria-label":ue,"aria-labelledby":ue?void 0:fe,"aria-describedby":n?ve:void 0,onMouseEnter:()=>{he(),p&&S(i=>({...i,hover:!0}))},onMouseLeave:()=>{p&&S(i=>({...i,hover:!1}))},onFocusCapture:()=>{he(),p&&S(i=>({...i,focus:!0}))},onBlurCapture:i=>{p&&!i.currentTarget.contains(i.relatedTarget)&&S(g=>({...g,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...St[c],...It[B]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:fe,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:Rt,"aria-label":Bt,onMouseEnter:()=>{de(!0)},onMouseLeave:()=>{de(!1),q(!1)},onMouseDown:i=>{i.button===0&&(te.current=!1,oe(!1),q(!0))},onMouseUp:i=>{i.button===0&&q(!1)},onKeyDown:()=>{te.current=!0},onFocus:i=>{oe(Pt(i.currentTarget,te.current))},onBlur:()=>{oe(!1),q(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ne||me?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:pe?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ne?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ne?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:me?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:pe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:ve,style:{color:"var(--aurora-text-secondary)"},children:n}):null,C?a.jsx("div",{children:r}):null]})}function Pt(t,e){try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Zt={title:"Feedback/Toast",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},L={};function Ft(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(u,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(u,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const M={render:()=>a.jsx(Ft,{})};function Lt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const V={render:()=>a.jsx(Lt,{}),play:async({canvasElement:t})=>{const n=m(t.ownerDocument.body).getByRole("button",{name:"Close toast"});h.mouseDown(n,{button:2}),await s(n.style.transform).toContain("translateY(0"),h.mouseDown(n),h.mouseUp(n),await s(n.style.transform).toContain("translateY(0")}};function Mt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(l,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const G={render:()=>a.jsx(Mt,{}),play:async({canvasElement:t})=>{const e=m(t),n=e.getByRole("dialog");await s(n).toBeInTheDocument(),await s(n).not.toHaveAttribute("aria-keyshortcuts"),await y.click(e.getByRole("button",{name:"Close blocking notice"})),await s(e.queryByRole("dialog")).not.toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("dialog")).toBeInTheDocument()}};function Vt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(l,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const N={render:()=>a.jsx(Vt,{}),play:async({canvasElement:t})=>{const e=m(t);await s(e.getByRole("alertdialog")).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close incident notice"})),await s(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("alertdialog")).toBeInTheDocument()}};function Gt(){const[t,e]=o.useState(!0),[n,r]=o.useState("none"),[c,d]=o.useState("N/A"),I=o.useCallback(p=>{d(f=>f==="N/A"?p:`${f} -> ${p}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:c})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(l,{variant:"outline",onClick:()=>{d("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:p=>{e(p),p||I("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:p=>{r(p),I(`reason:${p}`)}})]})}const K={render:()=>a.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await x(()=>{s(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await y.click(e.getByRole("button",{name:"Close toast"})),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await y.click(e.getByRole("button",{name:"Reopen Toast"})),await y.keyboard("{Escape}"),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function Nt(){const[t,e]=o.useState(!0),[n,r]=o.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(l,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const Y={render:()=>a.jsx(Nt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await s(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await x(()=>{s(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await s(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function kt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const U={render:()=>a.jsx(kt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),r=await e.findByRole("status",{name:"Second notice"});await x(()=>{s(n).not.toHaveAttribute("aria-keyshortcuts"),s(r).toHaveAttribute("aria-keyshortcuts","Escape")}),await y.click(m(r).getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await x(()=>{s(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Kt(){const[t,e]=o.useState({first:!0,second:!0}),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(u,{open:t.first,onOpenChange:c=>{e(d=>({...d,first:c}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t.second,onOpenChange:c=>{e(d=>({...d,second:c}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const _={render:()=>a.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),c=await e.findByRole("status",{name:"Top notice"});await x(()=>{s(r).not.toHaveAttribute("aria-keyshortcuts"),s(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await y.click(e.getByRole("button",{name:"Pin top toast"})),await x(()=>{s(r).toHaveAttribute("aria-keyshortcuts","Escape"),s(c).not.toHaveAttribute("aria-keyshortcuts")}),await y.click(e.getByRole("button",{name:"Unpin top toast"})),await x(()=>{s(r).not.toHaveAttribute("aria-keyshortcuts"),s(c).toHaveAttribute("aria-keyshortcuts","Escape")}),h.keyDown(n,{key:"Escape",repeat:!0}),await s(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await s(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Yt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const W={render:()=>a.jsx(Yt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await s(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await s(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},z={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(kt,{})]})};function Ut(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const c=d=>{d.key==="Escape"&&d.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function _t(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function Wt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function zt(){const[t,e]=o.useState(!0),[n,r]=o.useState(0);return o.useEffect(()=>{const c=d=>{d.key==="Escape"&&d.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(c=>c+1)})]})}const $={render:()=>a.jsx(Ut,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),h.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable global Escape handler"})),await s(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},J={render:()=>a.jsx(zt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),h.keyDown(n,{key:"Escape"}),await s(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},Q={render:()=>a.jsx(_t,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),h.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await s(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},X={render:()=>a.jsx(Wt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),h.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},Z={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await s(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},ee={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await s(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Te,Ee,Re;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:"{}",...(Re=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var De,Ce,Se;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Se=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Ie,je,He;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(He=(je=V.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Oe,Ae,qe;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(qe=(Ae=G.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Pe,Fe,Le;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Le=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Me,Ve,Ge;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Ne,Ke,Ye;Y.parameters={...Y.parameters,docs:{...(Ne=Y.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ye=(Ke=Y.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Ue,_e,We;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(We=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var ze,$e,Je;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Je=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;z.parameters={...z.parameters,docs:{...(et=z.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=z.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,ot,st;$.parameters={...$.parameters,docs:{...(nt=$.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(ot=$.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,it,ct;J.parameters={...J.parameters,docs:{...(rt=J.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ct=(it=J.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var ut,lt,dt;Q.parameters={...Q.parameters,docs:{...(ut=Q.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(lt=Q.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var pt,mt,yt;X.parameters={...X.parameters,docs:{...(pt=X.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=X.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var ft,vt,gt;Z.parameters={...Z.parameters,docs:{...(ft=Z.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(gt=(vt=Z.parameters)==null?void 0:vt.docs)==null?void 0:gt.source}}};var ht,wt,bt;ee.parameters={...ee.parameters,docs:{...(ht=ee.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(bt=(wt=ee.parameters)==null?void 0:wt.docs)==null?void 0:bt.source}}};const ea=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{G as ActionRequired,N as ActionRequiredDanger,Z as AriaLabelOverride,V as CloseButtonPrimaryPointerOnly,K as CloseReasonTelemetry,L as Default,Q as EscapeGuardedByToastHandler,X as EscapeIgnoresImeComposition,$ as EscapePreemptedByGlobalHandler,J as EscapePreemptedSkipsToastHook,_ as EscapeShortcutSync,U as EscapeStackOrder,z as FocusedToastEscapesFirst,ee as LiveRegionOff,W as StackedViewportOffset,Y as TimeoutCloseReason,M as ToneMatrix,ea as __namedExportsOrder,Zt as default};
