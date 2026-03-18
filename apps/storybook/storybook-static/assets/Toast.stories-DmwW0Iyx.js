import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{B as l}from"./Button-DeQ1OHWt.js";import{within as y,expect as r,userEvent as p,fireEvent as _}from"./index-DgAF9SIF.js";const Xe={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Ze={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},h=[];function ce(t){const e=h.lastIndexOf(t);e>=0&&h.splice(e,1),h.push(t)}function $e(t){const e=h.lastIndexOf(t);e>=0&&h.splice(e,1)}function et(t){for(let e=h.length-1;e>=0;e-=1){const o=h[e];if((o==null?void 0:o.dataset.closeOnEscape)==="true")return o===t}return!1}function tt(t){return t.isComposing?!0:t.keyCode===229}function u({open:t,title:e,description:o,action:c,tone:i="info",live:f,duration:g=4e3,pauseOnHover:v=!0,closeOnEscape:K=!0,onEscapeKeyDown:B,closeLabel:ze="Close toast",ariaLabel:Q,position:Ye="bottom-right",onClose:T,onCloseReason:R,onOpenChange:D}){const C=n.useRef(null),W=n.useRef(!0),z=n.useRef(!1),b=n.useRef(null),x=n.useRef(0),E=n.useRef(g),[X,k]=n.useState({hover:!1,focus:!1}),[Y,Z]=n.useState(!1),[$,I]=n.useState(!1),[ee,J]=n.useState(!1),te=v&&(X.hover||X.focus),ae=n.useId(),ne=n.useId();n.useEffect(()=>{const s=C.current;if(!(!t||!s))return ce(s),()=>{$e(s)}},[t]),n.useEffect(()=>{t||k({hover:!1,focus:!1}),z.current=!1},[t]);const d=n.useCallback(()=>{b.current!==null&&(window.clearTimeout(b.current),b.current=null),x.current=0},[]),w=n.useCallback(s=>{z.current||(z.current=!0,d(),R==null||R(s),T==null||T(),D==null||D(!1))},[d,T,R,D]),Je=n.useCallback(()=>{w("close-button")},[w]),oe=n.useCallback(()=>{w("escape-key")},[w]),U=n.useCallback(()=>{w("timeout")},[w]),se=n.useCallback(()=>{const s=C.current;!t||!s||ce(s)},[t]),j=n.useCallback(s=>{if(s<=0){U();return}d(),E.current=s,x.current=Date.now(),b.current=window.setTimeout(()=>{b.current=null,x.current=0,E.current=0,U()},s)},[d,U]),re=n.useCallback(()=>{if(b.current===null||x.current===0)return;const s=Date.now()-x.current;E.current=Math.max(0,E.current-s),d()},[d]);if(n.useEffect(()=>{if(d(),E.current=g,!(!t||g<=0))return j(g),()=>{d()}},[d,g,t,j]),n.useEffect(()=>{if(!(!t||g<=0||!v)){if(te){re();return}b.current===null&&j(E.current)}},[g,t,re,v,te,j]),n.useEffect(()=>{if(!t||!K)return;const s=m=>{if(m.key!=="Escape"||tt(m))return;const ie=C.current;!ie||!et(ie)||m.defaultPrevented||(B==null||B(m),!m.defaultPrevented&&(m.preventDefault(),oe()))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[oe,K,B,t]),!t)return null;const Ue=i==="danger"?"alert":"status",Qe=f??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:C,role:Ue,"data-close-on-escape":K?"true":"false","aria-live":Qe,"aria-atomic":"true","aria-label":Q,"aria-labelledby":Q?void 0:ae,"aria-describedby":o?ne:void 0,onMouseEnter:()=>{se(),v&&k(s=>({...s,hover:!0}))},onMouseLeave:()=>{v&&k(s=>({...s,hover:!1}))},onFocusCapture:()=>{se(),v&&k(s=>({...s,focus:!0}))},onBlurCapture:s=>{v&&!s.currentTarget.contains(s.relatedTarget)&&k(m=>({...m,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...Xe[i],...Ze[Ye]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:ae,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:Je,"aria-label":ze,onMouseEnter:()=>{Z(!0)},onMouseLeave:()=>{Z(!1),I(!1)},onMouseDown:()=>{W.current=!1,J(!1),I(!0)},onMouseUp:()=>{I(!1)},onKeyDown:()=>{W.current=!0},onFocus:s=>{J(at(s.currentTarget,W.current))},onBlur:()=>{J(!1),I(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:Y||ee?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:$?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":Y?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:Y?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ee?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:$?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),o?a.jsx("div",{id:ne,style:{color:"var(--aurora-text-secondary)"},children:o}):null,c?a.jsx("div",{children:c}):null]})}function at(t,e){try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const yt={title:"Feedback/Toast",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},S={};function nt(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(u,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(u,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const q={render:()=>a.jsx(nt,{})};function ot(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(l,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const H={render:()=>a.jsx(ot,{}),play:async({canvasElement:t})=>{const e=y(t);await r(e.getByRole("status")).toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Close blocking notice"})),await r(e.queryByRole("status")).not.toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("status")).toBeInTheDocument()}};function st(){const[t,e]=n.useState(!0),[o,c]=n.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:i=>c(i)})]})}const O={render:()=>a.jsx(st,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await r(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await p.click(e.getByRole("button",{name:"Close toast"})),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await p.click(e.getByRole("button",{name:"Reopen Toast"})),await p.keyboard("{Escape}"),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}};function We(){const[t,e]=n.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(l,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(u,{open:t.first,onOpenChange:o=>{e(c=>({...c,first:o}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(u,{open:t.second,onOpenChange:o=>{e(c=>({...c,second:o}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const P={render:()=>a.jsx(We,{})},L={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(We,{})]})};function rt(){const[t,e]=n.useState(!0),[o,c]=n.useState(!0);return n.useEffect(()=>{if(!o)return;const i=f=>{f.key==="Escape"&&f.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[o]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{variant:"ghost",onClick:()=>c(i=>!i),children:o?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function it(){const[t,e]=n.useState(!0),[o,c]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{variant:"ghost",onClick:()=>c(i=>!i),children:o?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{o&&i.preventDefault()}})]})}function ct(){const[t,e]=n.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(l,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function ut(){const[t,e]=n.useState(!0),[o,c]=n.useState(0);return n.useEffect(()=>{const i=f=>{f.key==="Escape"&&f.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}const M={render:()=>a.jsx(rt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),_.keyDown(o,{key:"Escape"}),await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Disable global Escape handler"})),await r(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},F={render:()=>a.jsx(ut,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),_.keyDown(o,{key:"Escape"}),await r(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},G={render:()=>a.jsx(it,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),_.keyDown(o,{key:"Escape"}),await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await r(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},A={render:()=>a.jsx(ct,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),o=t.ownerDocument;await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),_.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("status",{name:"IME composition guard"})).toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"IME composition guard"})).not.toBeInTheDocument()}},V={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await r(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},N={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await r(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var ue,le,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:"{}",...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,me,ye;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(ye=(me=q.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var fe,ge,ve;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,he,Ee;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ee=(he=O.parameters)==null?void 0:he.docs)==null?void 0:Ee.source}}};var we,xe,ke;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(ke=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Be,Te,Re;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Re=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var De,Ce,Ie;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var je,Se,qe;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(qe=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var He,Oe,Pe;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Le,Me,Fe;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Fe=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ge,Ae,Ve;V.parameters={...V.parameters,docs:{...(Ge=V.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ve=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var Ne,_e,Ke;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ke=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};const ft=["Default","ToneMatrix","ActionRequired","CloseReasonTelemetry","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{H as ActionRequired,V as AriaLabelOverride,O as CloseReasonTelemetry,S as Default,G as EscapeGuardedByToastHandler,A as EscapeIgnoresImeComposition,M as EscapePreemptedByGlobalHandler,F as EscapePreemptedSkipsToastHook,P as EscapeStackOrder,L as FocusedToastEscapesFirst,N as LiveRegionOff,q as ToneMatrix,ft as __namedExportsOrder,yt as default};
