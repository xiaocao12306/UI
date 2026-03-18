import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as u}from"./Button-BCHo91JE.js";import{within as g,expect as r,userEvent as v,fireEvent as P}from"./index-DgAF9SIF.js";const je={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Ce={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},y=[];function K(t){const e=y.lastIndexOf(t);e>=0&&y.splice(e,1),y.push(t)}function Se(t){const e=y.lastIndexOf(t);e>=0&&y.splice(e,1)}function qe(t){return y[y.length-1]===t}function Oe(t){return t.isComposing?!0:t.keyCode===229}function c({open:t,title:e,description:n,action:l,tone:i="info",live:p,duration:H=4e3,pauseOnHover:m=!0,closeOnEscape:L=!0,onEscapeKeyDown:b,closeLabel:Te="Close toast",ariaLabel:M,position:De="bottom-right",onClose:E,onOpenChange:w}){const x=o.useRef(null),[G,f]=o.useState({hover:!1,focus:!1}),A=m&&(G.hover||G.focus),F=o.useId(),N=o.useId();o.useEffect(()=>{const s=x.current;if(!(!t||!s))return K(s),()=>{Se(s)}},[t]),o.useEffect(()=>{t||f({hover:!1,focus:!1})},[t]);const h=o.useCallback(()=>{E==null||E(),w==null||w(!1)},[E,w]),V=o.useCallback(()=>{const s=x.current;!t||!s||K(s)},[t]);if(o.useEffect(()=>{if(!t||H<=0||m&&A)return;const s=window.setTimeout(()=>{h()},H);return()=>{window.clearTimeout(s)}},[h,H,t,m,A]),o.useEffect(()=>{if(!t||!L)return;const s=d=>{if(d.key!=="Escape"||Oe(d))return;const _=x.current;!_||!qe(_)||d.defaultPrevented||(b==null||b(d),!d.defaultPrevented&&(d.preventDefault(),h()))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[h,L,b,t]),!t)return null;const Re=i==="danger"?"alert":"status",Ie=p??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:x,role:Re,"aria-live":Ie,"aria-atomic":"true","aria-label":M,"aria-labelledby":M?void 0:F,"aria-describedby":n?N:void 0,onMouseEnter:()=>{V(),m&&f(s=>({...s,hover:!0}))},onMouseLeave:()=>{m&&f(s=>({...s,hover:!1}))},onFocusCapture:()=>{V(),m&&f(s=>({...s,focus:!0}))},onBlurCapture:s=>{m&&!s.currentTarget.contains(s.relatedTarget)&&f(d=>({...d,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...je[i],...Ce[De]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:F,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:h,"aria-label":Te,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",cursor:"pointer",color:"var(--aurora-text-secondary)",width:28,height:28},children:"×"})]}),n?a.jsx("div",{id:N,style:{color:"var(--aurora-text-secondary)"},children:n}):null,l?a.jsx("div",{children:l}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Ke={title:"Feedback/Toast",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},k={};function Pe(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(c,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(c,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const B={render:()=>a.jsx(Pe,{})};function He(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(c,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(u,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const T={render:()=>a.jsx(He,{}),play:async({canvasElement:t})=>{const e=g(t);await r(e.getByRole("status")).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close blocking notice"})),await r(e.queryByRole("status")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("status")).toBeInTheDocument()}};function Be(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(c,{open:t.first,onOpenChange:n=>{e(l=>({...l,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(c,{open:t.second,onOpenChange:n=>{e(l=>({...l,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const D={render:()=>a.jsx(Be,{})},R={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Be,{})]})};function Le(){const[t,e]=o.useState(!0),[n,l]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Me(){const[t,e]=o.useState(!0),[n,l]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Ge(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Ae(){const[t,e]=o.useState(!0),[n,l]=o.useState(0);return o.useEffect(()=>{const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>l(i=>i+1)})]})}const I={render:()=>a.jsx(Le,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),P.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable global Escape handler"})),await r(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},j={render:()=>a.jsx(Ae,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),P.keyDown(n,{key:"Escape"}),await r(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},C={render:()=>a.jsx(Me,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),P.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await r(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},S={render:()=>a.jsx(Ge,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),P.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"IME composition guard"})).not.toBeInTheDocument()}},q={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await r(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},O={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await r(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var W,z,J;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(J=(z=k.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Y,Q,U;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(U=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(ae=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,se;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,ce;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ce=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,de;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,ye;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var ge,ve,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var he,be,Ee;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(be=q.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};var we,xe,ke;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};const We=["Default","ToneMatrix","ActionRequired","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{T as ActionRequired,q as AriaLabelOverride,k as Default,C as EscapeGuardedByToastHandler,S as EscapeIgnoresImeComposition,I as EscapePreemptedByGlobalHandler,j as EscapePreemptedSkipsToastHook,D as EscapeStackOrder,R as FocusedToastEscapesFirst,O as LiveRegionOff,B as ToneMatrix,We as __namedExportsOrder,Ke as default};
