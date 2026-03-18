import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as u}from"./Button-Hgh0jeno.js";import{within as v,expect as i,userEvent as y,fireEvent as ge}from"./index-DgAF9SIF.js";const xe={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},we={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},p=[];function N(t){const e=p.lastIndexOf(t);e>=0&&p.splice(e,1),p.push(t)}function Te(t){const e=p.lastIndexOf(t);e>=0&&p.splice(e,1)}function Be(t){return p[p.length-1]===t}function c({open:t,title:e,description:o,action:l,tone:s="info",live:b,duration:q=4e3,pauseOnHover:d=!0,closeOnEscape:O=!0,onEscapeKeyDown:h,closeLabel:ve="Close toast",ariaLabel:L,position:be="bottom-right",onClose:E,onOpenChange:x}){const w=r.useRef(null),[G,f]=r.useState({hover:!1,focus:!1}),A=d&&(G.hover||G.focus),F=r.useId(),P=r.useId();r.useEffect(()=>{const n=w.current;if(!(!t||!n))return N(n),()=>{Te(n)}},[t]),r.useEffect(()=>{t||f({hover:!1,focus:!1})},[t]);const g=r.useCallback(()=>{E==null||E(),x==null||x(!1)},[E,x]),H=r.useCallback(()=>{const n=w.current;!t||!n||N(n)},[t]);if(r.useEffect(()=>{if(!t||q<=0||d&&A)return;const n=window.setTimeout(()=>{g()},q);return()=>{window.clearTimeout(n)}},[g,q,t,d,A]),r.useEffect(()=>{if(!t||!O)return;const n=m=>{if(m.key!=="Escape")return;const M=w.current;!M||!Be(M)||(h==null||h(m),!m.defaultPrevented&&(m.preventDefault(),g()))};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[g,O,h,t]),!t)return null;const he=s==="danger"?"alert":"status",Ee=b??(s==="danger"?"assertive":"polite");return a.jsxs("div",{ref:w,role:he,"aria-live":Ee,"aria-atomic":"true","aria-label":L,"aria-labelledby":L?void 0:F,"aria-describedby":o?P:void 0,onMouseEnter:()=>{H(),d&&f(n=>({...n,hover:!0}))},onMouseLeave:()=>{d&&f(n=>({...n,hover:!1}))},onFocusCapture:()=>{H(),d&&f(n=>({...n,focus:!0}))},onBlurCapture:n=>{d&&!n.currentTarget.contains(n.relatedTarget)&&f(m=>({...m,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...xe[s],...we[be]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:F,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:g,"aria-label":ve,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",cursor:"pointer",color:"var(--aurora-text-secondary)",width:28,height:28},children:"×"})]}),o?a.jsx("div",{id:P,style:{color:"var(--aurora-text-secondary)"},children:o}):null,l?a.jsx("div",{children:l}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Oe={title:"Feedback/Toast",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},T={};function Re(){const[t,e]=r.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(c,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",position:"top-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",position:"top-right"}),a.jsx(c,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",position:"bottom-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",position:"bottom-right"})]})}const B={render:()=>a.jsx(Re,{})};function De(){const[t,e]=r.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(c,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(u,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const R={render:()=>a.jsx(De,{}),play:async({canvasElement:t})=>{const e=v(t);await i(e.getByRole("status")).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close blocking notice"})),await i(e.queryByRole("status")).not.toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Reopen"})),await i(e.getByRole("status")).toBeInTheDocument()}};function ye(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(c,{open:t.first,onOpenChange:o=>{e(l=>({...l,first:o}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(c,{open:t.second,onOpenChange:o=>{e(l=>({...l,second:o}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const D={render:()=>a.jsx(ye,{})},k={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(ye,{})]})};function ke(){const[t,e]=r.useState(!0),[o,l]=r.useState(!0);return r.useEffect(()=>{if(!o)return;const s=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",s,!0),()=>{document.removeEventListener("keydown",s,!0)}},[o]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(s=>!s),children:o?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function je(){const[t,e]=r.useState(!0),[o,l]=r.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(s=>!s),children:o?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:s=>{o&&s.preventDefault()}})]})}const j={render:()=>a.jsx(ke,{}),play:async({canvasElement:t})=>{const e=v(t.ownerDocument.body),o=t.ownerDocument;await i(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),ge.keyDown(o,{key:"Escape"}),await i(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable global Escape handler"})),await i(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close toast"})),await i(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},S={render:()=>a.jsx(je,{}),play:async({canvasElement:t})=>{const e=v(t.ownerDocument.body),o=t.ownerDocument;await i(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),ge.keyDown(o,{key:"Escape"}),await i(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await i(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},I={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=v(t.ownerDocument.body);await i(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},C={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=v(t.ownerDocument.body);await i(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var V,_,W;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(W=(_=T.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var z,K,J;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(J=(K=B.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Y,Q,U;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(U=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...($=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,re;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,ce;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,de;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,fe;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const Le=["Default","ToneMatrix","ActionRequired","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapeGuardedByToastHandler","AriaLabelOverride","LiveRegionOff"];export{R as ActionRequired,I as AriaLabelOverride,T as Default,S as EscapeGuardedByToastHandler,j as EscapePreemptedByGlobalHandler,D as EscapeStackOrder,k as FocusedToastEscapesFirst,C as LiveRegionOff,B as ToneMatrix,Le as __namedExportsOrder,Oe as default};
