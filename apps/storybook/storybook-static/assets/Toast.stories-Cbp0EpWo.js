import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as u}from"./Button-Hgh0jeno.js";import{within as S,expect as i,userEvent as v,fireEvent as ue}from"./index-DgAF9SIF.js";const ye={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},ve={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},p=[];function A(t){const e=p.lastIndexOf(t);e>=0&&p.splice(e,1),p.push(t)}function be(t){const e=p.lastIndexOf(t);e>=0&&p.splice(e,1)}function he(t){return p[p.length-1]===t}function c({open:t,title:e,description:o,action:l,tone:s="info",duration:m=4e3,pauseOnHover:d=!0,closeOnEscape:C=!0,onEscapeKeyDown:b,closeLabel:pe="Close toast",ariaLabel:q,position:me="bottom-right",onClose:h,onOpenChange:E}){const x=r.useRef(null),[O,f]=r.useState({hover:!1,focus:!1}),G=d&&(O.hover||O.focus),L=r.useId(),F=r.useId();r.useEffect(()=>{const n=x.current;if(!(!t||!n))return A(n),()=>{be(n)}},[t]),r.useEffect(()=>{t||f({hover:!1,focus:!1})},[t]);const y=r.useCallback(()=>{h==null||h(),E==null||E(!1)},[h,E]),P=r.useCallback(()=>{const n=x.current;!t||!n||A(n)},[t]);if(r.useEffect(()=>{if(!t||m<=0||d&&G)return;const n=window.setTimeout(()=>{y()},m);return()=>{window.clearTimeout(n)}},[y,m,t,d,G]),r.useEffect(()=>{if(!t||!C)return;const n=g=>{if(g.key!=="Escape")return;const M=x.current;!M||!he(M)||(b==null||b(g),!g.defaultPrevented&&(g.preventDefault(),y()))};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[y,C,b,t]),!t)return null;const ge=s==="danger"?"alert":"status",fe=s==="danger"?"assertive":"polite";return a.jsxs("div",{ref:x,role:ge,"aria-live":fe,"aria-atomic":"true","aria-label":q,"aria-labelledby":q?void 0:L,"aria-describedby":o?F:void 0,onMouseEnter:()=>{P(),d&&f(n=>({...n,hover:!0}))},onMouseLeave:()=>{d&&f(n=>({...n,hover:!1}))},onFocusCapture:()=>{P(),d&&f(n=>({...n,focus:!0}))},onBlurCapture:n=>{d&&!n.currentTarget.contains(n.relatedTarget)&&f(g=>({...g,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...ye[s],...ve[me]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:L,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:y,"aria-label":pe,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",cursor:"pointer",color:"var(--aurora-text-secondary)",width:28,height:28},children:"×"})]}),o?a.jsx("div",{id:F,style:{color:"var(--aurora-text-secondary)"},children:o}):null,l?a.jsx("div",{children:l}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const je={title:"Feedback/Toast",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},w={};function Ee(){const[t,e]=r.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(c,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",position:"top-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",position:"top-right"}),a.jsx(c,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",position:"bottom-left"}),a.jsx(c,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",position:"bottom-right"})]})}const T={render:()=>a.jsx(Ee,{})};function xe(){const[t,e]=r.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(c,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(u,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const B={render:()=>a.jsx(xe,{}),play:async({canvasElement:t})=>{const e=S(t);await i(e.getByRole("status")).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close blocking notice"})),await i(e.queryByRole("status")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await i(e.getByRole("status")).toBeInTheDocument()}};function de(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(u,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(c,{open:t.first,onOpenChange:o=>{e(l=>({...l,first:o}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(c,{open:t.second,onOpenChange:o=>{e(l=>({...l,second:o}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const R={render:()=>a.jsx(de,{})},D={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(de,{})]})};function we(){const[t,e]=r.useState(!0),[o,l]=r.useState(!0);return r.useEffect(()=>{if(!o)return;const s=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",s,!0),()=>{document.removeEventListener("keydown",s,!0)}},[o]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(s=>!s),children:o?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Te(){const[t,e]=r.useState(!0),[o,l]=r.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(u,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{variant:"ghost",onClick:()=>l(s=>!s),children:o?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(c,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:s=>{o&&s.preventDefault()}})]})}const k={render:()=>a.jsx(we,{}),play:async({canvasElement:t})=>{const e=S(t.ownerDocument.body),o=t.ownerDocument;await i(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),ue.keyDown(o,{key:"Escape"}),await i(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable global Escape handler"})),await i(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await i(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},j={render:()=>a.jsx(Te,{}),play:async({canvasElement:t})=>{const e=S(t.ownerDocument.body),o=t.ownerDocument;await i(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),ue.keyDown(o,{key:"Escape"}),await i(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await i(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},I={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=S(t.ownerDocument.body);await i(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}};var N,H,V;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(V=(H=w.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var _,W,z;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(z=(W=T.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var K,J,Y;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(J=B.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Q,U,X;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(X=(U=R.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=D.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,re,se;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Ie=["Default","ToneMatrix","ActionRequired","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapeGuardedByToastHandler","AriaLabelOverride"];export{B as ActionRequired,I as AriaLabelOverride,w as Default,j as EscapeGuardedByToastHandler,k as EscapePreemptedByGlobalHandler,R as EscapeStackOrder,D as FocusedToastEscapesFirst,T as ToneMatrix,Ie as __namedExportsOrder,je as default};
