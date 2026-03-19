import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as d}from"./Button-B4acg7WI.js";import{within as y,expect as r,userEvent as f,fireEvent as w,waitFor as B}from"./index-DgAF9SIF.js";const It={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},jt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Ht=14,ke=new WeakMap;function Ot(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function T(t){const e=ke.get(t);if(e)return e;const n={escapeStack:[],visualStacks:Ot(),listeners:new Set};return ke.set(t,n),n}function ie(t){T(t).listeners.forEach(n=>{n()})}function At(t,e){const n=T(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function xe(t,e){const n=T(t),s=n.escapeStack.lastIndexOf(e);s>=0&&n.escapeStack.splice(s,1),n.escapeStack.push(e),ie(t)}function qt(t,e){const n=T(t),s=n.escapeStack.lastIndexOf(e);s>=0&&(n.escapeStack.splice(s,1),ie(t))}function xt(t,e){const n=t.visualStacks[e],s=e.startsWith("bottom")?-1:1;n.forEach((c,u)=>{const E=n.length-1-u;c.style.setProperty("--aurora-toast-stack-offset",`${E*s*Ht}px`)})}function Be(t,e,n){const s=T(t),c=s.visualStacks[n],u=c.lastIndexOf(e);u>=0&&c.splice(u,1),c.push(e),xt(s,n)}function Pt(t,e,n){const s=T(t),c=s.visualStacks[n],u=c.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(u<0)&&(c.splice(u,1),xt(s,n))}function Te(t,e){const n=T(t);for(let s=n.escapeStack.length-1;s>=0;s-=1){const c=n.escapeStack[s];if((c==null?void 0:c.dataset.closeOnEscape)==="true")return c===e}return!1}function Ft(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:n,action:s,tone:c="info",live:u,duration:E,pauseOnHover:p=!0,closeOnEscape:v=!0,onEscapeKeyDown:H,closeLabel:Tt="Close toast",ariaLabel:ue,position:R="bottom-right",onClose:O,onCloseReason:A,onOpenChange:q}){const g=o.useRef(null),ae=o.useRef(!0),ne=o.useRef(!1),b=o.useRef(null),S=o.useRef(0),I=o.Children.toArray(s).length>0,k=E??(I?0:4e3),D=o.useRef(k),[le,j]=o.useState({hover:!1,focus:!1}),[oe,de]=o.useState(!1),[pe,P]=o.useState(!1),[me,se]=o.useState(!1),[Et,Rt]=o.useState(!1),ye=p&&(le.hover||le.focus),fe=o.useId(),ve=o.useId(),F=o.useCallback(()=>{const i=g.current;Rt(!!(t&&v&&i&&Te(i.ownerDocument,i)))},[v,t]);o.useEffect(()=>{F()},[F]),o.useEffect(()=>{var m;const i=(m=g.current)==null?void 0:m.ownerDocument;if(i)return At(i,F)},[F]),o.useEffect(()=>{const i=g.current;if(!t||!i)return;const m=i.ownerDocument;return xe(m,i),Be(m,i,R),()=>{qt(m,i),Pt(m,i,R)}},[t,R]),o.useEffect(()=>{!t||!g.current||ie(g.current.ownerDocument)},[v,t]),o.useEffect(()=>{t||j({hover:!1,focus:!1}),ne.current=!1},[t]);const h=o.useCallback(()=>{b.current!==null&&(window.clearTimeout(b.current),b.current=null),S.current=0},[]),C=o.useCallback(i=>{ne.current||(ne.current=!0,h(),A==null||A(i),O==null||O(),q==null||q(!1))},[h,O,A,q]),Dt=o.useCallback(()=>{C("close-button")},[C]),ge=o.useCallback(()=>{C("escape-key")},[C]),re=o.useCallback(()=>{C("timeout")},[C]),he=o.useCallback(()=>{const i=g.current;if(!t||!i)return;const m=i.ownerDocument;xe(m,i),Be(m,i,R)},[t,R]),L=o.useCallback(i=>{if(i<=0){re();return}h(),D.current=i,S.current=Date.now(),b.current=window.setTimeout(()=>{b.current=null,S.current=0,D.current=0,re()},i)},[h,re]),we=o.useCallback(()=>{if(b.current===null||S.current===0)return;const i=Date.now()-S.current;D.current=Math.max(0,D.current-i),h()},[h]);if(o.useEffect(()=>{if(h(),D.current=k,!(!t||k<=0))return L(k),()=>{h()}},[h,t,k,L]),o.useEffect(()=>{if(!(!t||k<=0||!p)){if(ye){we();return}b.current===null&&L(D.current)}},[t,we,p,ye,k,L]),o.useEffect(()=>{var be;if(!t||!v)return;const i=x=>{if(x.key!=="Escape"||x.repeat||Ft(x))return;const ce=g.current;!ce||!Te(ce.ownerDocument,ce)||x.defaultPrevented||(H==null||H(x),!x.defaultPrevented&&(x.preventDefault(),ge()))},m=((be=g.current)==null?void 0:be.ownerDocument)??document;return m.addEventListener("keydown",i),()=>{m.removeEventListener("keydown",i)}},[ge,v,H,t]),!t)return null;const Ct=I?c==="danger"?"alertdialog":"dialog":c==="danger"?"alert":"status",St=I?void 0:u??(c==="danger"?"assertive":"polite");return a.jsxs("div",{ref:g,role:Ct,"data-close-on-escape":v?"true":"false","aria-modal":I?"false":void 0,"aria-live":St,"aria-atomic":"true","aria-keyshortcuts":Et?"Escape":void 0,"aria-label":ue,"aria-labelledby":ue?void 0:fe,"aria-describedby":n?ve:void 0,onMouseEnter:()=>{he(),p&&j(i=>({...i,hover:!0}))},onMouseLeave:()=>{p&&j(i=>({...i,hover:!1}))},onFocusCapture:()=>{he(),p&&j(i=>({...i,focus:!0}))},onBlurCapture:i=>{p&&!i.currentTarget.contains(i.relatedTarget)&&j(m=>({...m,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...It[c],...jt[R]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:fe,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:Dt,"aria-label":Tt,onMouseEnter:()=>{de(!0)},onMouseLeave:()=>{de(!1),P(!1)},onMouseDown:i=>{i.button===0&&(ae.current=!1,se(!1),P(!0))},onMouseUp:i=>{i.button===0&&P(!1)},onKeyDown:()=>{ae.current=!0},onFocus:i=>{se(Lt(i.currentTarget,ae.current))},onBlur:()=>{se(!1),P(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:oe||me?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:pe?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":oe?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:oe?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:me?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:pe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:ve,style:{color:"var(--aurora-text-secondary)"},children:n}):null,I?a.jsx("div",{children:s}):null]})}function Lt(t,e){try{return t.matches(":focus-visible")}catch{return e}}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const ta={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},M={};function Mt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const V={render:()=>a.jsx(Mt,{})};function Vt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const G={render:()=>a.jsx(Vt,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});w.mouseDown(n,{button:2}),await r(n.style.transform).toContain("translateY(0"),w.mouseDown(n),w.mouseUp(n),await r(n.style.transform).toContain("translateY(0")}};function Gt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(d,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const N={render:()=>a.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await r(n).toBeInTheDocument(),await r(n).not.toHaveAttribute("aria-keyshortcuts"),await f.click(e.getByRole("button",{name:"Close blocking notice"})),await r(e.queryByRole("dialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("dialog")).toBeInTheDocument()}};function Nt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(d,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const K={render:()=>a.jsx(Nt,{}),play:async({canvasElement:t})=>{const e=y(t);await r(e.getByRole("alertdialog")).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close incident notice"})),await r(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("alertdialog")).toBeInTheDocument()}};function Kt(){const[t,e]=o.useState(!0),[n,s]=o.useState("none"),[c,u]=o.useState("N/A"),E=o.useCallback(p=>{u(v=>v==="N/A"?p:`${v} -> ${p}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:c})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(d,{variant:"outline",onClick:()=>{u("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:p=>{e(p),p||E("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:p=>{s(p),E(`reason:${p}`)}})]})}const Y={render:()=>a.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await B(()=>{r(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await f.click(e.getByRole("button",{name:"Close toast"})),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await f.click(e.getByRole("button",{name:"Reopen Toast"})),await f.keyboard("{Escape}"),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function Yt(){const[t,e]=o.useState(!0),[n,s]=o.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(d,{variant:"outline",onClick:()=>{s("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:s})]})}const U={render:()=>a.jsx(Yt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await r(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await B(()=>{r(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await r(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Bt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(s=>({...s,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(s=>({...s,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const W={render:()=>a.jsx(Bt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),s=await e.findByRole("status",{name:"Second notice"});await B(()=>{r(n).not.toHaveAttribute("aria-keyshortcuts"),r(s).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(y(s).getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await B(()=>{r(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Ut(){const[t,e]=o.useState({first:!0,second:!0}),[n,s]=o.useState(!0);return a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(d,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(l,{open:t.first,onOpenChange:c=>{e(u=>({...u,first:c}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t.second,onOpenChange:c=>{e(u=>({...u,second:c}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const _={render:()=>a.jsx(Ut,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,s=await e.findByRole("status",{name:"Base notice"}),c=await e.findByRole("status",{name:"Top notice"});await B(()=>{r(s).not.toHaveAttribute("aria-keyshortcuts"),r(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(e.getByRole("button",{name:"Pin top toast"})),await B(()=>{r(s).toHaveAttribute("aria-keyshortcuts","Escape"),r(c).not.toHaveAttribute("aria-keyshortcuts")}),await f.click(e.getByRole("button",{name:"Unpin top toast"})),await B(()=>{r(s).not.toHaveAttribute("aria-keyshortcuts"),r(c).toHaveAttribute("aria-keyshortcuts","Escape")}),w.keyDown(n,{key:"Escape",repeat:!0}),await r(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await r(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Wt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(s=>({...s,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(s=>({...s,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const z={render:()=>a.jsx(Wt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),s=await e.findByRole("status",{name:"Second stack item"});await r(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await r(s.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},$={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Bt,{})]})};function _t(){const[t,e]=o.useState(!0),[n,s]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const c=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function zt(){const[t,e]=o.useState(!0),[n,s]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function $t(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Jt(){const[t,e]=o.useState(!0),[n,s]=o.useState(0);return o.useEffect(()=>{const c=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>s(c=>c+1)})]})}const J={render:()=>a.jsx(_t,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),w.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable global Escape handler"})),await r(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},Q={render:()=>a.jsx(Jt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),w.keyDown(n,{key:"Escape"}),await r(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},X={render:()=>a.jsx(zt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),w.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await r(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},Z={render:()=>a.jsx($t,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),w.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ee={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await r(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},te={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await r(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Ee,Re,De;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:"{}",...(De=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ce,Se,Ie;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ie=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var je,He,Oe;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(He=G.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Ae,qe,Pe;N.parameters={...N.parameters,docs:{...(Ae=N.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Pe=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Fe,Le,Me;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Le=K.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ve,Ge,Ne;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ke,Ye,Ue;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ue=(Ye=U.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var We,_e,ze;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(ze=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var $e,Je,Qe;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=_.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=z.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;$.parameters={...$.parameters,docs:{...(tt=$.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=$.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,st,rt;J.parameters={...J.parameters,docs:{...(ot=J.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=J.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ct,it,ut;Q.parameters={...Q.parameters,docs:{...(ct=Q.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(it=Q.parameters)==null?void 0:it.docs)==null?void 0:ut.source}}};var lt,dt,pt;X.parameters={...X.parameters,docs:{...(lt=X.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=X.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,yt,ft;Z.parameters={...Z.parameters,docs:{...(mt=Z.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ft=(yt=Z.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var vt,gt,ht;ee.parameters={...ee.parameters,docs:{...(vt=ee.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(ht=(gt=ee.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var wt,bt,kt;te.parameters={...te.parameters,docs:{...(wt=te.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(kt=(bt=te.parameters)==null?void 0:bt.docs)==null?void 0:kt.source}}};const aa=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{N as ActionRequired,K as ActionRequiredDanger,ee as AriaLabelOverride,G as CloseButtonPrimaryPointerOnly,Y as CloseReasonTelemetry,M as Default,X as EscapeGuardedByToastHandler,Z as EscapeIgnoresImeComposition,J as EscapePreemptedByGlobalHandler,Q as EscapePreemptedSkipsToastHook,_ as EscapeShortcutSync,W as EscapeStackOrder,$ as FocusedToastEscapesFirst,te as LiveRegionOff,z as StackedViewportOffset,U as TimeoutCloseReason,V as ToneMatrix,aa as __namedExportsOrder,ta as default};
