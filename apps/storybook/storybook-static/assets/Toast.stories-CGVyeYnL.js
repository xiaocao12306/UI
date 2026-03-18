import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as u}from"./Button-BCHo91JE.js";import{within as y,expect as s,userEvent as g,fireEvent as M}from"./index-DgAF9SIF.js";const Re={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},De={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},m=[];function _(t){const e=m.lastIndexOf(t);e>=0&&m.splice(e,1),m.push(t)}function ke(t){const e=m.lastIndexOf(t);e>=0&&m.splice(e,1)}function Ie(t){return m[m.length-1]===t}function je(t){return t.isComposing?!0:t.keyCode===229}function c({open:t,title:e,description:n,action:l,tone:i="info",live:b,duration:O=4e3,pauseOnHover:d=!0,closeOnEscape:L=!0,onEscapeKeyDown:h,closeLabel:we="Close toast",ariaLabel:G,position:xe="bottom-right",onClose:E,onOpenChange:w}){const x=r.useRef(null),[A,f]=r.useState({hover:!1,focus:!1}),F=d&&(A.hover||A.focus),H=r.useId(),P=r.useId();r.useEffect(()=>{const o=x.current;if(!(!t||!o))return _(o),()=>{ke(o)}},[t]),r.useEffect(()=>{t||f({hover:!1,focus:!1})},[t]);const v=r.useCallback(()=>{E==null||E(),w==null||w(!1)},[E,w]),N=r.useCallback(()=>{const o=x.current;!t||!o||_(o)},[t]);if(r.useEffect(()=>{if(!t||O<=0||d&&F)return;const o=window.setTimeout(()=>{v()},O);return()=>{window.clearTimeout(o)}},[v,O,t,d,F]),r.useEffect(()=>{if(!t||!L)return;const o=p=>{if(p.key!=="Escape"||je(p))return;const V=x.current;!V||!Ie(V)||(h==null||h(p),!p.defaultPrevented&&(p.preventDefault(),v()))};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[v,L,h,t]),!t)return null;const Be=i==="danger"?"alert":"status",Te=b??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:x,role:Be,"aria-live":Te,"aria-atomic":"true","aria-label":G,"aria-labelledby":G?void 0:H,"aria-describedby":n?P:void 0,onMouseEnter:()=>{N(),d&&f(o=>({...o,hover:!0}))},onMouseLeave:()=>{d&&f(o=>({...o,hover:!1}))},onFocusCapture:()=>{N(),d&&f(o=>({...o,focus:!0}))},onBlurCapture:o=>{d&&!o.currentTarget.contains(o.relatedTarget)&&f(p=>({...p,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...Re[i],...De[xe]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:H,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:v,"aria-label":we,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",cursor:"pointer",color:"var(--aurora-text-secondary)",width:28,height:28},children:"×"})]}),n?a.jsx("div",{id:P,style:{color:"var(--aurora-text-secondary)"},children:n}):null,l?a.jsx("div",{children:l}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const He={title:"Feedback/Toast",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},B={};function Ce(){const[t,e]=r.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(c,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(c,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const T={render:()=>a.jsx(Ce,{})};function Se(){const[t,e]=r.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(c,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(u,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const R={render:()=>a.jsx(Se,{}),play:async({canvasElement:t})=>{const e=y(t);await s(e.getByRole("status")).toBeInTheDocument(),await g.click(e.getByRole("button",{name:"Close blocking notice"})),await s(e.queryByRole("status")).not.toBeInTheDocument(),await g.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("status")).toBeInTheDocument()}};function Ee(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(c,{open:t.first,onOpenChange:n=>{e(l=>({...l,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(c,{open:t.second,onOpenChange:n=>{e(l=>({...l,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const D={render:()=>a.jsx(Ee,{})},k={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Ee,{})]})};function qe(){const[t,e]=r.useState(!0),[n,l]=r.useState(!0);return r.useEffect(()=>{if(!n)return;const i=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Oe(){const[t,e]=r.useState(!0),[n,l]=r.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Me(){const[t,e]=r.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}const I={render:()=>a.jsx(qe,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),M.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await g.click(e.getByRole("button",{name:"Disable global Escape handler"})),await s(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await g.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},j={render:()=>a.jsx(Oe,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),M.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await g.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await s(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},C={render:()=>a.jsx(Me,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),M.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await s(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),await g.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"IME composition guard"})).not.toBeInTheDocument()}},S={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},q={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var W,z,K;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(K=(z=B.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var J,Y,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Q=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var U,X,Z;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,oe;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,ie;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,ue;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,pe,me;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,ye,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ve,be,he;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(be=q.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const Pe=["Default","ToneMatrix","ActionRequired","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{R as ActionRequired,S as AriaLabelOverride,B as Default,j as EscapeGuardedByToastHandler,C as EscapeIgnoresImeComposition,I as EscapePreemptedByGlobalHandler,D as EscapeStackOrder,k as FocusedToastEscapesFirst,q as LiveRegionOff,T as ToneMatrix,Pe as __namedExportsOrder,He as default};
