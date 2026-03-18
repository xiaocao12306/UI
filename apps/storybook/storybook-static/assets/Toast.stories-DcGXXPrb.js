import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{B as u}from"./Button-DeQ1OHWt.js";import{within as m,expect as r,userEvent as d,fireEvent as L}from"./index-DgAF9SIF.js";const Ke={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},We={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},v=[];function te(t){const e=v.lastIndexOf(t);e>=0&&v.splice(e,1),v.push(t)}function ze(t){const e=v.lastIndexOf(t);e>=0&&v.splice(e,1)}function Ye(t){return v[v.length-1]===t}function Je(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:o,action:c,tone:i="info",live:y,duration:F=4e3,pauseOnHover:g=!0,closeOnEscape:N=!0,onEscapeKeyDown:h,closeLabel:Ge="Close toast",ariaLabel:_,position:Ae="bottom-right",onClose:E,onCloseReason:w,onOpenChange:x}){const B=n.useRef(null),G=n.useRef(!0),[K,b]=n.useState({hover:!1,focus:!1}),[A,W]=n.useState(!1),[z,k]=n.useState(!1),[Y,V]=n.useState(!1),J=g&&(K.hover||K.focus),U=n.useId(),Q=n.useId();n.useEffect(()=>{const s=B.current;if(!(!t||!s))return te(s),()=>{ze(s)}},[t]),n.useEffect(()=>{t||b({hover:!1,focus:!1})},[t]);const f=n.useCallback(s=>{w==null||w(s),E==null||E(),x==null||x(!1)},[E,w,x]),Ve=n.useCallback(()=>{f("close-button")},[f]),X=n.useCallback(()=>{f("escape-key")},[f]),Z=n.useCallback(()=>{f("timeout")},[f]),$=n.useCallback(()=>{const s=B.current;!t||!s||te(s)},[t]);if(n.useEffect(()=>{if(!t||F<=0||g&&J)return;const s=window.setTimeout(()=>{Z()},F);return()=>{window.clearTimeout(s)}},[Z,F,t,g,J]),n.useEffect(()=>{if(!t||!N)return;const s=p=>{if(p.key!=="Escape"||Je(p))return;const ee=B.current;!ee||!Ye(ee)||p.defaultPrevented||(h==null||h(p),!p.defaultPrevented&&(p.preventDefault(),X()))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[X,N,h,t]),!t)return null;const Ne=i==="danger"?"alert":"status",_e=y??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:B,role:Ne,"aria-live":_e,"aria-atomic":"true","aria-label":_,"aria-labelledby":_?void 0:U,"aria-describedby":o?Q:void 0,onMouseEnter:()=>{$(),g&&b(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&b(s=>({...s,hover:!1}))},onFocusCapture:()=>{$(),g&&b(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&b(p=>({...p,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...Ke[i],...We[Ae]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:U,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:Ve,"aria-label":Ge,onMouseEnter:()=>{W(!0)},onMouseLeave:()=>{W(!1),k(!1)},onMouseDown:()=>{G.current=!1,V(!1),k(!0)},onMouseUp:()=>{k(!1)},onKeyDown:()=>{G.current=!0},onFocus:s=>{V(Ue(s.currentTarget,G.current))},onBlur:()=>{V(!1),k(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:A||Y?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:z?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":A?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:A?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Y?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:z?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),o?a.jsx("div",{id:Q,style:{color:"var(--aurora-text-secondary)"},children:o}):null,c?a.jsx("div",{children:c}):null]})}function Ue(t,e){try{return t.matches(":focus-visible")}catch{return e}}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const it={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},T={};function Qe(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const D={render:()=>a.jsx(Qe,{})};function Xe(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(u,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const R={render:()=>a.jsx(Xe,{}),play:async({canvasElement:t})=>{const e=m(t);await r(e.getByRole("status")).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close blocking notice"})),await r(e.queryByRole("status")).not.toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("status")).toBeInTheDocument()}};function Ze(){const[t,e]=n.useState(!0),[o,c]=n.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:i=>c(i)})]})}const I={render:()=>a.jsx(Ze,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await d.click(e.getByRole("button",{name:"Close toast"})),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await d.click(e.getByRole("button",{name:"Reopen Toast"})),await d.keyboard("{Escape}"),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}};function Fe(){const[t,e]=n.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:t.first,onOpenChange:o=>{e(c=>({...c,first:o}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:t.second,onOpenChange:o=>{e(c=>({...c,second:o}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const C={render:()=>a.jsx(Fe,{})},j={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Fe,{})]})};function $e(){const[t,e]=n.useState(!0),[o,c]=n.useState(!0);return n.useEffect(()=>{if(!o)return;const i=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[o]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>c(i=>!i),children:o?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function et(){const[t,e]=n.useState(!0),[o,c]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>c(i=>!i),children:o?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{o&&i.preventDefault()}})]})}function tt(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function at(){const[t,e]=n.useState(!0),[o,c]=n.useState(0);return n.useEffect(()=>{const i=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}const S={render:()=>a.jsx($e,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape"}),await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Disable global Escape handler"})),await r(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},q={render:()=>a.jsx(at,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape"}),await r(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},H={render:()=>a.jsx(et,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape"}),await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await r(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},O={render:()=>a.jsx(tt,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),L.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),await d.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"IME composition guard"})).not.toBeInTheDocument()}},P={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},M={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var ae,ne,oe;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:"{}",...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,re,ie;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(ie=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,le,ue;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,pe,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ye,ge,ve;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(ve=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var fe,be,he;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(be=j.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Ee,we,xe;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(xe=(we=S.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Be,ke,Te;q.parameters={...q.parameters,docs:{...(Be=q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Te=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var De,Re,Ie;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Ce,je,Se;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(je=O.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var qe,He,Oe;P.parameters={...P.parameters,docs:{...(qe=P.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Oe=(He=P.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Pe,Me,Le;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Le=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};const ct=["Default","ToneMatrix","ActionRequired","CloseReasonTelemetry","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{R as ActionRequired,P as AriaLabelOverride,I as CloseReasonTelemetry,T as Default,H as EscapeGuardedByToastHandler,O as EscapeIgnoresImeComposition,S as EscapePreemptedByGlobalHandler,q as EscapePreemptedSkipsToastHook,C as EscapeStackOrder,j as FocusedToastEscapesFirst,M as LiveRegionOff,D as ToneMatrix,ct as __namedExportsOrder,it as default};
