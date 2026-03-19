import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as d}from"./Button-DeQ1OHWt.js";import{within as g,expect as r,userEvent as m,fireEvent as $}from"./index-DgAF9SIF.js";const lt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},ut={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},w=[],dt=14,ee={"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]};function me(t){const e=w.lastIndexOf(t);e>=0&&w.splice(e,1),w.push(t)}function pt(t){const e=w.lastIndexOf(t);e>=0&&w.splice(e,1)}function nt(t){const e=ee[t],n=t.startsWith("bottom")?-1:1;e.forEach((i,c)=>{const p=e.length-1-c;i.style.setProperty("--aurora-toast-stack-offset",`${p*n*dt}px`)})}function ye(t,e){const n=ee[e],i=n.lastIndexOf(t);i>=0&&n.splice(i,1),n.push(t),nt(e)}function mt(t,e){const n=ee[e],i=n.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(i<0)&&(n.splice(i,1),nt(e))}function yt(t){for(let e=w.length-1;e>=0;e-=1){const n=w[e];if((n==null?void 0:n.dataset.closeOnEscape)==="true")return n===t}return!1}function gt(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:n,action:i,tone:c="info",live:p,duration:y=4e3,pauseOnHover:u=!0,closeOnEscape:h=!0,onEscapeKeyDown:R,closeLabel:st="Close toast",ariaLabel:te,position:x="bottom-right",onClose:D,onCloseReason:C,onOpenChange:I}){const S=o.useRef(null),J=o.useRef(!0),U=o.useRef(!1),b=o.useRef(null),T=o.useRef(0),k=o.useRef(y),[ae,B]=o.useState({hover:!1,focus:!1}),[Q,ne]=o.useState(!1),[oe,j]=o.useState(!1),[se,X]=o.useState(!1),re=u&&(ae.hover||ae.focus),ie=o.useId(),ce=o.useId();o.useEffect(()=>{const s=S.current;if(!(!t||!s))return me(s),ye(s,x),()=>{pt(s),mt(s,x)}},[t,x]),o.useEffect(()=>{t||B({hover:!1,focus:!1}),U.current=!1},[t]);const f=o.useCallback(()=>{b.current!==null&&(window.clearTimeout(b.current),b.current=null),T.current=0},[]),E=o.useCallback(s=>{U.current||(U.current=!0,f(),C==null||C(s),D==null||D(),I==null||I(!1))},[f,D,C,I]),rt=o.useCallback(()=>{E("close-button")},[E]),le=o.useCallback(()=>{E("escape-key")},[E]),Z=o.useCallback(()=>{E("timeout")},[E]),ue=o.useCallback(()=>{const s=S.current;!t||!s||(me(s),ye(s,x))},[t,x]),H=o.useCallback(s=>{if(s<=0){Z();return}f(),k.current=s,T.current=Date.now(),b.current=window.setTimeout(()=>{b.current=null,T.current=0,k.current=0,Z()},s)},[f,Z]),de=o.useCallback(()=>{if(b.current===null||T.current===0)return;const s=Date.now()-T.current;k.current=Math.max(0,k.current-s),f()},[f]);if(o.useEffect(()=>{if(f(),k.current=y,!(!t||y<=0))return H(y),()=>{f()}},[f,y,t,H]),o.useEffect(()=>{if(!(!t||y<=0||!u)){if(re){de();return}b.current===null&&H(k.current)}},[y,t,de,u,re,H]),o.useEffect(()=>{if(!t||!h)return;const s=v=>{if(v.key!=="Escape"||gt(v))return;const pe=S.current;!pe||!yt(pe)||v.defaultPrevented||(R==null||R(v),!v.defaultPrevented&&(v.preventDefault(),le()))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[le,h,R,t]),!t)return null;const O=o.Children.toArray(i).length>0,it=O?c==="danger"?"alertdialog":"dialog":c==="danger"?"alert":"status",ct=O?void 0:p??(c==="danger"?"assertive":"polite");return a.jsxs("div",{ref:S,role:it,"data-close-on-escape":h?"true":"false","aria-modal":O?"false":void 0,"aria-live":ct,"aria-atomic":"true","aria-keyshortcuts":h?"Escape":void 0,"aria-label":te,"aria-labelledby":te?void 0:ie,"aria-describedby":n?ce:void 0,onMouseEnter:()=>{ue(),u&&B(s=>({...s,hover:!0}))},onMouseLeave:()=>{u&&B(s=>({...s,hover:!1}))},onFocusCapture:()=>{ue(),u&&B(s=>({...s,focus:!0}))},onBlurCapture:s=>{u&&!s.currentTarget.contains(s.relatedTarget)&&B(v=>({...v,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...lt[c],...ut[x]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:ie,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:rt,"aria-label":st,onMouseEnter:()=>{ne(!0)},onMouseLeave:()=>{ne(!1),j(!1)},onMouseDown:()=>{J.current=!1,X(!1),j(!0)},onMouseUp:()=>{j(!1)},onKeyDown:()=>{J.current=!0},onFocus:s=>{X(ft(s.currentTarget,J.current))},onBlur:()=>{X(!1),j(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:Q||se?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:oe?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":Q?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:Q?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:se?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:oe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:ce,style:{color:"var(--aurora-text-secondary)"},children:n}):null,O?a.jsx("div",{children:i}):null]})}function ft(t,e){try{return t.matches(":focus-visible")}catch{return e}}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const St={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},q={};function vt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const A={render:()=>a.jsx(vt,{})};function ht(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(d,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const P={render:()=>a.jsx(ht,{}),play:async({canvasElement:t})=>{const e=g(t),n=e.getByRole("dialog");await r(n).toBeInTheDocument(),await r(n).not.toHaveAttribute("aria-keyshortcuts"),await m.click(e.getByRole("button",{name:"Close blocking notice"})),await r(e.queryByRole("dialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("dialog")).toBeInTheDocument()}};function bt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(d,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const L={render:()=>a.jsx(bt,{}),play:async({canvasElement:t})=>{const e=g(t);await r(e.getByRole("alertdialog")).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close incident notice"})),await r(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("alertdialog")).toBeInTheDocument()}};function wt(){const[t,e]=o.useState(!0),[n,i]=o.useState("none"),[c,p]=o.useState("N/A"),y=o.useCallback(u=>{p(h=>h==="N/A"?u:`${h} -> ${u}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:c})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout reason is documented but not asserted in play due timing instability."}),a.jsx(d,{variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:u=>{e(u),u||y("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:u=>{i(u),y(`reason:${u}`)}})]})}const F={render:()=>a.jsx(wt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await r(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape"),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await m.click(e.getByRole("button",{name:"Close toast"})),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await m.click(e.getByRole("button",{name:"Reopen Toast"})),await m.keyboard("{Escape}"),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function ot(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(i=>({...i,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(i=>({...i,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const M={render:()=>a.jsx(ot,{})};function xt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(d,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(i=>({...i,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(i=>({...i,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const V={render:()=>a.jsx(xt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),i=await e.findByRole("status",{name:"Second stack item"});await r(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await r(i.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},G={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(ot,{})]})};function kt(){const[t,e]=o.useState(!0),[n,i]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{variant:"ghost",onClick:()=>i(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Et(){const[t,e]=o.useState(!0),[n,i]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{variant:"ghost",onClick:()=>i(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function Tt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(d,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Bt(){const[t,e]=o.useState(!0),[n,i]=o.useState(0);return o.useEffect(()=>{const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>i(c=>c+1)})]})}const N={render:()=>a.jsx(kt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),$.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable global Escape handler"})),await r(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},_={render:()=>a.jsx(Bt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),$.keyDown(n,{key:"Escape"}),await r(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},K={render:()=>a.jsx(Et,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),$.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await r(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},W={render:()=>a.jsx(Tt,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),$.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},z={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await r(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},Y={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await r(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var ge,fe,ve;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:"{}",...(ve=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var he,be,we;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(we=(be=A.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var xe,ke,Ee;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Te,Be,Re;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Re=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var De,Ce,Ie;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Close reason telemetry"
    })).toHaveAttribute("aria-keyshortcuts", "Escape");
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
}`,...(Ie=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var Se,je,He;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(He=(je=M.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Oe,qe,Ae;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ae=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:Ae.source}}};var Pe,Le,Fe;G.parameters={...G.parameters,docs:{...(Pe=G.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Fe=(Le=G.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var Me,Ve,Ge;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Ne,_e,Ke;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ke=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var We,ze,Ye;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var $e,Je,Ue;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ue=(Je=W.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Qe,Xe,Ze;z.parameters={...z.parameters,docs:{...(Qe=z.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;Y.parameters={...Y.parameters,docs:{...(et=Y.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=Y.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};const jt=["Default","ToneMatrix","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","EscapeStackOrder","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{P as ActionRequired,L as ActionRequiredDanger,z as AriaLabelOverride,F as CloseReasonTelemetry,q as Default,K as EscapeGuardedByToastHandler,W as EscapeIgnoresImeComposition,N as EscapePreemptedByGlobalHandler,_ as EscapePreemptedSkipsToastHook,M as EscapeStackOrder,G as FocusedToastEscapesFirst,Y as LiveRegionOff,V as StackedViewportOffset,A as ToneMatrix,jt as __namedExportsOrder,St as default};
