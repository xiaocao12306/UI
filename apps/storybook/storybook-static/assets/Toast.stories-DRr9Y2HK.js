import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as d}from"./Button-DeQ1OHWt.js";import{within as y,expect as s,userEvent as m,waitFor as te,fireEvent as J}from"./index-DgAF9SIF.js";const gt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},vt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},w=[],ht=14,ne={"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]},ae=new Set;function ct(){ae.forEach(t=>{t()})}function bt(t){return ae.add(t),()=>{ae.delete(t)}}function ge(t){const e=w.lastIndexOf(t);e>=0&&w.splice(e,1),w.push(t),ct()}function wt(t){const e=w.lastIndexOf(t);e>=0&&(w.splice(e,1),ct())}function it(t){const e=ne[t],n=t.startsWith("bottom")?-1:1;e.forEach((c,i)=>{const p=e.length-1-i;c.style.setProperty("--aurora-toast-stack-offset",`${p*n*ht}px`)})}function ve(t,e){const n=ne[e],c=n.lastIndexOf(t);c>=0&&n.splice(c,1),n.push(t),it(e)}function kt(t,e){const n=ne[e],c=n.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(c<0)&&(n.splice(c,1),it(e))}function he(t){for(let e=w.length-1;e>=0;e-=1){const n=w[e];if((n==null?void 0:n.dataset.closeOnEscape)==="true")return n===t}return!1}function xt(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:n,action:c,tone:i="info",live:p,duration:f=4e3,pauseOnHover:u=!0,closeOnEscape:v=!0,onEscapeKeyDown:D,closeLabel:ut="Close toast",ariaLabel:oe,position:k="bottom-right",onClose:C,onCloseReason:I,onOpenChange:S}){const B=o.useRef(null),U=o.useRef(!0),Q=o.useRef(!1),b=o.useRef(null),T=o.useRef(0),x=o.useRef(f),[se,R]=o.useState({hover:!1,focus:!1}),[X,re]=o.useState(!1),[ce,j]=o.useState(!1),[ie,Z]=o.useState(!1),[dt,pt]=o.useState(!1),le=u&&(se.hover||se.focus),ue=o.useId(),de=o.useId(),H=o.useCallback(()=>{const r=B.current;pt(!!(t&&v&&r&&he(r)))},[v,t]);o.useEffect(()=>{H()},[H]),o.useEffect(()=>bt(H),[H]),o.useEffect(()=>{const r=B.current;if(!(!t||!r))return ge(r),ve(r,k),()=>{wt(r),kt(r,k)}},[t,k]),o.useEffect(()=>{t||R({hover:!1,focus:!1}),Q.current=!1},[t]);const g=o.useCallback(()=>{b.current!==null&&(window.clearTimeout(b.current),b.current=null),T.current=0},[]),E=o.useCallback(r=>{Q.current||(Q.current=!0,g(),I==null||I(r),C==null||C(),S==null||S(!1))},[g,C,I,S]),mt=o.useCallback(()=>{E("close-button")},[E]),pe=o.useCallback(()=>{E("escape-key")},[E]),ee=o.useCallback(()=>{E("timeout")},[E]),me=o.useCallback(()=>{const r=B.current;!t||!r||(ge(r),ve(r,k))},[t,k]),O=o.useCallback(r=>{if(r<=0){ee();return}g(),x.current=r,T.current=Date.now(),b.current=window.setTimeout(()=>{b.current=null,T.current=0,x.current=0,ee()},r)},[g,ee]),ye=o.useCallback(()=>{if(b.current===null||T.current===0)return;const r=Date.now()-T.current;x.current=Math.max(0,x.current-r),g()},[g]);if(o.useEffect(()=>{if(g(),x.current=f,!(!t||f<=0))return O(f),()=>{g()}},[g,f,t,O]),o.useEffect(()=>{if(!(!t||f<=0||!u)){if(le){ye();return}b.current===null&&O(x.current)}},[f,t,ye,u,le,O]),o.useEffect(()=>{if(!t||!v)return;const r=h=>{if(h.key!=="Escape"||xt(h))return;const fe=B.current;!fe||!he(fe)||h.defaultPrevented||(D==null||D(h),!h.defaultPrevented&&(h.preventDefault(),pe()))};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[pe,v,D,t]),!t)return null;const A=o.Children.toArray(c).length>0,yt=A?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",ft=A?void 0:p??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:B,role:yt,"data-close-on-escape":v?"true":"false","aria-modal":A?"false":void 0,"aria-live":ft,"aria-atomic":"true","aria-keyshortcuts":dt?"Escape":void 0,"aria-label":oe,"aria-labelledby":oe?void 0:ue,"aria-describedby":n?de:void 0,onMouseEnter:()=>{me(),u&&R(r=>({...r,hover:!0}))},onMouseLeave:()=>{u&&R(r=>({...r,hover:!1}))},onFocusCapture:()=>{me(),u&&R(r=>({...r,focus:!0}))},onBlurCapture:r=>{u&&!r.currentTarget.contains(r.relatedTarget)&&R(h=>({...h,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...gt[i],...vt[k]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:ue,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:mt,"aria-label":ut,onMouseEnter:()=>{re(!0)},onMouseLeave:()=>{re(!1),j(!1)},onMouseDown:()=>{U.current=!1,Z(!1),j(!0)},onMouseUp:()=>{j(!1)},onKeyDown:()=>{U.current=!0},onFocus:r=>{Z(Et(r.currentTarget,U.current))},onBlur:()=>{Z(!1),j(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:X||ie?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ce?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":X?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:X?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ie?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:ce?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:de,style:{color:"var(--aurora-text-secondary)"},children:n}):null,A?a.jsx("div",{children:c}):null]})}function Et(t,e){try{return t.matches(":focus-visible")}catch{return e}}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Pt={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},q={};function Bt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const F={render:()=>a.jsx(Bt,{})};function Tt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(d,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const P={render:()=>a.jsx(Tt,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await s(n).toBeInTheDocument(),await s(n).not.toHaveAttribute("aria-keyshortcuts"),await m.click(e.getByRole("button",{name:"Close blocking notice"})),await s(e.queryByRole("dialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("dialog")).toBeInTheDocument()}};function Rt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(d,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const L={render:()=>a.jsx(Rt,{}),play:async({canvasElement:t})=>{const e=y(t);await s(e.getByRole("alertdialog")).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close incident notice"})),await s(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("alertdialog")).toBeInTheDocument()}};function Dt(){const[t,e]=o.useState(!0),[n,c]=o.useState("none"),[i,p]=o.useState("N/A"),f=o.useCallback(u=>{p(v=>v==="N/A"?u:`${v} -> ${u}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:i})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout reason is documented but not asserted in play due timing instability."}),a.jsx(d,{variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:u=>{e(u),u||f("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:u=>{c(u),f(`reason:${u}`)}})]})}const M={render:()=>a.jsx(Dt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await te(()=>{s(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await m.click(e.getByRole("button",{name:"Reopen Toast"})),await m.keyboard("{Escape}"),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function lt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const V={render:()=>a.jsx(lt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),c=await e.findByRole("status",{name:"Second notice"});await te(()=>{s(n).not.toHaveAttribute("aria-keyshortcuts"),s(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await m.click(y(c).getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await te(()=>{s(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Ct(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const G={render:()=>a.jsx(Ct,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),c=await e.findByRole("status",{name:"Second stack item"});await s(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await s(c.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},N={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(lt,{})]})};function It(){const[t,e]=o.useState(!0),[n,c]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function St(){const[t,e]=o.useState(!0),[n,c]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function jt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Ht(){const[t,e]=o.useState(!0),[n,c]=o.useState(0);return o.useEffect(()=>{const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}const K={render:()=>a.jsx(It,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),J.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable global Escape handler"})),await s(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},_={render:()=>a.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),J.keyDown(n,{key:"Escape"}),await s(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},W={render:()=>a.jsx(St,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),J.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await s(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},z={render:()=>a.jsx(jt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),J.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},Y={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},$={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var be,we,ke;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:"{}",...(ke=(we=q.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var xe,Ee,Be;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Be=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Te,Re,De;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ce,Ie,Se;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var je,He,Oe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(He=M.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Ae,qe,Fe;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Fe=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Pe,Le,Me;G.parameters={...G.parameters,docs:{...(Pe=G.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(Le=G.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ve,Ge,Ne;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ke,_e,We;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(We=(_e=K.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var ze,Ye,$e;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...($e=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var Je,Ue,Qe;W.parameters={...W.parameters,docs:{...(Je=W.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Qe=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=z.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;Y.parameters={...Y.parameters,docs:{...(tt=Y.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=Y.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,st,rt;$.parameters={...$.parameters,docs:{...(ot=$.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=$.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};const Lt=["Default","ToneMatrix","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","EscapeStackOrder","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{P as ActionRequired,L as ActionRequiredDanger,Y as AriaLabelOverride,M as CloseReasonTelemetry,q as Default,W as EscapeGuardedByToastHandler,z as EscapeIgnoresImeComposition,K as EscapePreemptedByGlobalHandler,_ as EscapePreemptedSkipsToastHook,V as EscapeStackOrder,N as FocusedToastEscapesFirst,$ as LiveRegionOff,G as StackedViewportOffset,F as ToneMatrix,Lt as __namedExportsOrder,Pt as default};
