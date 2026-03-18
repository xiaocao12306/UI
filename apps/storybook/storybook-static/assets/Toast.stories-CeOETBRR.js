import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{B as l}from"./Button-DeQ1OHWt.js";import{within as m,expect as r,userEvent as d,fireEvent as L}from"./index-DgAF9SIF.js";const We={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},ze={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},v=[];function ae(t){const e=v.lastIndexOf(t);e>=0&&v.splice(e,1),v.push(t)}function Ye(t){const e=v.lastIndexOf(t);e>=0&&v.splice(e,1)}function Je(t){for(let e=v.length-1;e>=0;e-=1){const o=v[e];if((o==null?void 0:o.dataset.closeOnEscape)==="true")return o===t}return!1}function Ue(t){return t.isComposing?!0:t.keyCode===229}function u({open:t,title:e,description:o,action:c,tone:i="info",live:y,duration:F=4e3,pauseOnHover:g=!0,closeOnEscape:G=!0,onEscapeKeyDown:h,closeLabel:Ae="Close toast",ariaLabel:K,position:Ve="bottom-right",onClose:E,onCloseReason:w,onOpenChange:x}){const B=n.useRef(null),A=n.useRef(!0),V=n.useRef(!1),[W,b]=n.useState({hover:!1,focus:!1}),[N,z]=n.useState(!1),[Y,k]=n.useState(!1),[J,_]=n.useState(!1),U=g&&(W.hover||W.focus),Q=n.useId(),X=n.useId();n.useEffect(()=>{const s=B.current;if(!(!t||!s))return ae(s),()=>{Ye(s)}},[t]),n.useEffect(()=>{t||b({hover:!1,focus:!1}),V.current=!1},[t]);const f=n.useCallback(s=>{V.current||(V.current=!0,w==null||w(s),E==null||E(),x==null||x(!1))},[E,w,x]),Ne=n.useCallback(()=>{f("close-button")},[f]),Z=n.useCallback(()=>{f("escape-key")},[f]),$=n.useCallback(()=>{f("timeout")},[f]),ee=n.useCallback(()=>{const s=B.current;!t||!s||ae(s)},[t]);if(n.useEffect(()=>{if(!t||F<=0||g&&U)return;const s=window.setTimeout(()=>{$()},F);return()=>{window.clearTimeout(s)}},[$,F,t,g,U]),n.useEffect(()=>{if(!t||!G)return;const s=p=>{if(p.key!=="Escape"||Ue(p))return;const te=B.current;!te||!Je(te)||p.defaultPrevented||(h==null||h(p),!p.defaultPrevented&&(p.preventDefault(),Z()))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[Z,G,h,t]),!t)return null;const _e=i==="danger"?"alert":"status",Ke=y??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:B,role:_e,"data-close-on-escape":G?"true":"false","aria-live":Ke,"aria-atomic":"true","aria-label":K,"aria-labelledby":K?void 0:Q,"aria-describedby":o?X:void 0,onMouseEnter:()=>{ee(),g&&b(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&b(s=>({...s,hover:!1}))},onFocusCapture:()=>{ee(),g&&b(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&b(p=>({...p,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...We[i],...ze[Ve]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Q,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:Ne,"aria-label":Ae,onMouseEnter:()=>{z(!0)},onMouseLeave:()=>{z(!1),k(!1)},onMouseDown:()=>{A.current=!1,_(!1),k(!0)},onMouseUp:()=>{k(!1)},onKeyDown:()=>{A.current=!0},onFocus:s=>{_(Qe(s.currentTarget,A.current))},onBlur:()=>{_(!1),k(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:N||J?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Y?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":N?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:N?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:J?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:Y?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),o?a.jsx("div",{id:X,style:{color:"var(--aurora-text-secondary)"},children:o}):null,c?a.jsx("div",{children:c}):null]})}function Qe(t,e){try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const ct={title:"Feedback/Toast",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},T={};function Xe(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(u,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(u,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const D={render:()=>a.jsx(Xe,{})};function Ze(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(l,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const R={render:()=>a.jsx(Ze,{}),play:async({canvasElement:t})=>{const e=m(t);await r(e.getByRole("status")).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close blocking notice"})),await r(e.queryByRole("status")).not.toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("status")).toBeInTheDocument()}};function $e(){const[t,e]=n.useState(!0),[o,c]=n.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:i=>c(i)})]})}const I={render:()=>a.jsx($e,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await d.click(e.getByRole("button",{name:"Close toast"})),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await d.click(e.getByRole("button",{name:"Reopen Toast"})),await d.keyboard("{Escape}"),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}};function Ge(){const[t,e]=n.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(u,{open:t.first,onOpenChange:o=>{e(c=>({...c,first:o}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(u,{open:t.second,onOpenChange:o=>{e(c=>({...c,second:o}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const C={render:()=>a.jsx(Ge,{})},j={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Ge,{})]})};function et(){const[t,e]=n.useState(!0),[o,c]=n.useState(!0);return n.useEffect(()=>{if(!o)return;const i=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[o]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{variant:"ghost",onClick:()=>c(i=>!i),children:o?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function tt(){const[t,e]=n.useState(!0),[o,c]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{variant:"ghost",onClick:()=>c(i=>!i),children:o?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{o&&i.preventDefault()}})]})}function at(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function nt(){const[t,e]=n.useState(!0),[o,c]=n.useState(0);return n.useEffect(()=>{const i=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}const S={render:()=>a.jsx(et,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape"}),await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Disable global Escape handler"})),await r(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},q={render:()=>a.jsx(nt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape"}),await r(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},H={render:()=>a.jsx(tt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape"}),await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await r(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},O={render:()=>a.jsx(at,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"IME composition guard"})).not.toBeInTheDocument()}},P={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},M={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var ne,oe,se;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:"{}",...(se=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,ce;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(ce=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,le,de;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <ActionRequiredToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close blocking notice"
    }));
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("status")).toBeInTheDocument();
  }
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,me,ye;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ge,ve,fe;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(fe=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,he,Ee;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ee=(he=j.parameters)==null?void 0:he.docs)==null?void 0:Ee.source}}};var we,xe,Be;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var ke,Te,De;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Re,Ie,Ce;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var je,Se,qe;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <EscapeImeCompositionDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "IME composition guard"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByRole("status", {
      name: "IME composition guard"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("status", {
      name: "IME composition guard"
    })).not.toBeInTheDocument();
  }
}`,...(qe=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var He,Oe,Pe;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=P.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Me,Le,Fe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Fe=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};const ut=["Default","ToneMatrix","ActionRequired","CloseReasonTelemetry","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{R as ActionRequired,P as AriaLabelOverride,I as CloseReasonTelemetry,T as Default,H as EscapeGuardedByToastHandler,O as EscapeIgnoresImeComposition,S as EscapePreemptedByGlobalHandler,q as EscapePreemptedSkipsToastHook,C as EscapeStackOrder,j as FocusedToastEscapesFirst,M as LiveRegionOff,D as ToneMatrix,ut as __namedExportsOrder,ct as default};
