import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as u}from"./Button-DeQ1OHWt.js";import{within as p,expect as i,userEvent as d,fireEvent as z}from"./index-DgAF9SIF.js";const lt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},ut={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},h=[],dt=14,ee={"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]};function me(t){const e=h.lastIndexOf(t);e>=0&&h.splice(e,1),h.push(t)}function pt(t){const e=h.lastIndexOf(t);e>=0&&h.splice(e,1)}function nt(t){const e=ee[t],n=t.startsWith("bottom")?-1:1;e.forEach((r,c)=>{const m=e.length-1-c;r.style.setProperty("--aurora-toast-stack-offset",`${m*n*dt}px`)})}function fe(t,e){const n=ee[e],r=n.lastIndexOf(t);r>=0&&n.splice(r,1),n.push(t),nt(e)}function mt(t,e){const n=ee[e],r=n.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(r<0)&&(n.splice(r,1),nt(e))}function ft(t){for(let e=h.length-1;e>=0;e-=1){const n=h[e];if((n==null?void 0:n.dataset.closeOnEscape)==="true")return n===t}return!1}function gt(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:n,action:r,tone:c="info",live:m,duration:y=4e3,pauseOnHover:v=!0,closeOnEscape:Y=!0,onEscapeKeyDown:T,closeLabel:st="Close toast",ariaLabel:te,position:w="bottom-right",onClose:R,onCloseReason:D,onOpenChange:C}){const I=o.useRef(null),J=o.useRef(!0),U=o.useRef(!1),b=o.useRef(null),E=o.useRef(0),k=o.useRef(y),[ae,B]=o.useState({hover:!1,focus:!1}),[$,ne]=o.useState(!1),[oe,S]=o.useState(!1),[se,Q]=o.useState(!1),re=v&&(ae.hover||ae.focus),ie=o.useId(),ce=o.useId();o.useEffect(()=>{const s=I.current;if(!(!t||!s))return me(s),fe(s,w),()=>{pt(s),mt(s,w)}},[t,w]),o.useEffect(()=>{t||B({hover:!1,focus:!1}),U.current=!1},[t]);const f=o.useCallback(()=>{b.current!==null&&(window.clearTimeout(b.current),b.current=null),E.current=0},[]),x=o.useCallback(s=>{U.current||(U.current=!0,f(),D==null||D(s),R==null||R(),C==null||C(!1))},[f,R,D,C]),rt=o.useCallback(()=>{x("close-button")},[x]),le=o.useCallback(()=>{x("escape-key")},[x]),X=o.useCallback(()=>{x("timeout")},[x]),ue=o.useCallback(()=>{const s=I.current;!t||!s||(me(s),fe(s,w))},[t,w]),j=o.useCallback(s=>{if(s<=0){X();return}f(),k.current=s,E.current=Date.now(),b.current=window.setTimeout(()=>{b.current=null,E.current=0,k.current=0,X()},s)},[f,X]),de=o.useCallback(()=>{if(b.current===null||E.current===0)return;const s=Date.now()-E.current;k.current=Math.max(0,k.current-s),f()},[f]);if(o.useEffect(()=>{if(f(),k.current=y,!(!t||y<=0))return j(y),()=>{f()}},[f,y,t,j]),o.useEffect(()=>{if(!(!t||y<=0||!v)){if(re){de();return}b.current===null&&j(k.current)}},[y,t,de,v,re,j]),o.useEffect(()=>{if(!t||!Y)return;const s=g=>{if(g.key!=="Escape"||gt(g))return;const pe=I.current;!pe||!ft(pe)||g.defaultPrevented||(T==null||T(g),!g.defaultPrevented&&(g.preventDefault(),le()))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[le,Y,T,t]),!t)return null;const Z=r!=null,it=Z?c==="danger"?"alertdialog":"dialog":c==="danger"?"alert":"status",ct=Z?void 0:m??(c==="danger"?"assertive":"polite");return a.jsxs("div",{ref:I,role:it,"data-close-on-escape":Y?"true":"false","aria-modal":Z?"false":void 0,"aria-live":ct,"aria-atomic":"true","aria-label":te,"aria-labelledby":te?void 0:ie,"aria-describedby":n?ce:void 0,onMouseEnter:()=>{ue(),v&&B(s=>({...s,hover:!0}))},onMouseLeave:()=>{v&&B(s=>({...s,hover:!1}))},onFocusCapture:()=>{ue(),v&&B(s=>({...s,focus:!0}))},onBlurCapture:s=>{v&&!s.currentTarget.contains(s.relatedTarget)&&B(g=>({...g,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...lt[c],...ut[w]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:ie,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:rt,"aria-label":st,onMouseEnter:()=>{ne(!0)},onMouseLeave:()=>{ne(!1),S(!1)},onMouseDown:()=>{J.current=!1,Q(!1),S(!0)},onMouseUp:()=>{S(!1)},onKeyDown:()=>{J.current=!0},onFocus:s=>{Q(yt(s.currentTarget,J.current))},onBlur:()=>{Q(!1),S(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:$||se?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:oe?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":$?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:$?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:se?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:oe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:ce,style:{color:"var(--aurora-text-secondary)"},children:n}):null,r?a.jsx("div",{children:r}):null]})}function yt(t,e){try{return t.matches(":focus-visible")}catch{return e}}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const St={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},O={};function vt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const q={render:()=>a.jsx(vt,{})};function bt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(u,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const H={render:()=>a.jsx(bt,{}),play:async({canvasElement:t})=>{const e=p(t);await i(e.getByRole("dialog")).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close blocking notice"})),await i(e.queryByRole("dialog")).not.toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Reopen"})),await i(e.getByRole("dialog")).toBeInTheDocument()}};function ht(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(u,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const P={render:()=>a.jsx(ht,{}),play:async({canvasElement:t})=>{const e=p(t);await i(e.getByRole("alertdialog")).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close incident notice"})),await i(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Reopen"})),await i(e.getByRole("alertdialog")).toBeInTheDocument()}};function wt(){const[t,e]=o.useState(!0),[n,r]=o.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:c=>r(c)})]})}const L={render:()=>a.jsx(wt,{}),play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body);await i(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await d.click(e.getByRole("button",{name:"Close toast"})),await i(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await d.click(e.getByRole("button",{name:"Reopen Toast"})),await d.keyboard("{Escape}"),await i(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}};function ot(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const A={render:()=>a.jsx(ot,{})};function kt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const F={render:()=>a.jsx(kt,{}),play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await i(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await i(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},M={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(ot,{})]})};function xt(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Et(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function Bt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Tt(){const[t,e]=o.useState(!0),[n,r]=o.useState(0);return o.useEffect(()=>{const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(c=>c+1)})]})}const V={render:()=>a.jsx(xt,{}),play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body),n=t.ownerDocument;await i(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),z.keyDown(n,{key:"Escape"}),await i(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Disable global Escape handler"})),await i(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close toast"})),await i(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},G={render:()=>a.jsx(Tt,{}),play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body),n=t.ownerDocument;await i(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),z.keyDown(n,{key:"Escape"}),await i(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await i(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},N={render:()=>a.jsx(Et,{}),play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body),n=t.ownerDocument;await i(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),z.keyDown(n,{key:"Escape"}),await i(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await i(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},_={render:()=>a.jsx(Bt,{}),play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body),n=t.ownerDocument;await i(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),z.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await i(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close toast"})),await i(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},K={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body);await i(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},W={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=p(t.ownerDocument.body);await i(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var ge,ye,ve;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:"{}",...(ve=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,he,we;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(we=(he=q.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var ke,xe,Ee;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <ActionRequiredToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close blocking notice"
    }));
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(Ee=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Be,Te,Re;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Re=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var De,Ce,Ie;L.parameters={...L.parameters,docs:{...(De=L.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("none");
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Toast"
    }));
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("escape-key");
  }
}`,...(Ie=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var Se,je,Oe;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(Oe=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var qe,He,Pe;F.parameters={...F.parameters,docs:{...(qe=F.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Pe=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Pe.source}}};var Le,Ae,Fe;M.parameters={...M.parameters,docs:{...(Le=M.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Fe=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var Me,Ve,Ge;V.parameters={...V.parameters,docs:{...(Me=V.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Ne,_e,Ke;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ke=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var We,ze,Ye;N.parameters={...N.parameters,docs:{...(We=N.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ye=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:Ye.source}}};var Je,Ue,$e;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...($e=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Qe,Xe,Ze;K.parameters={...K.parameters,docs:{...(Qe=K.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=K.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;W.parameters={...W.parameters,docs:{...(et=W.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=W.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};const jt=["Default","ToneMatrix","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","EscapeStackOrder","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{H as ActionRequired,P as ActionRequiredDanger,K as AriaLabelOverride,L as CloseReasonTelemetry,O as Default,N as EscapeGuardedByToastHandler,_ as EscapeIgnoresImeComposition,V as EscapePreemptedByGlobalHandler,G as EscapePreemptedSkipsToastHook,A as EscapeStackOrder,M as FocusedToastEscapesFirst,W as LiveRegionOff,F as StackedViewportOffset,q as ToneMatrix,jt as __namedExportsOrder,St as default};
