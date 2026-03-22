import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as Ne}from"./Button-DirECuRH.js";import{within as m,expect as s,fireEvent as c,waitFor as h,userEvent as P}from"./index-DgAF9SIF.js";import{S as qe}from"./storyShowcase-Bw5VyCj0.js";const Me={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function i({tone:e="info",title:t,description:n,live:d,ariaLabel:L,ariaLabelledBy:F,onClose:b,closeLabel:I="Dismiss alert",children:U,style:Te,...Pe}){const _=o.useId(),[Le,K]=o.useState(!1),[z,v]=o.useState(!1),[W,N]=o.useState(!1),[q,l]=o.useState(!1);o.useRef(!1);const Y=o.useRef(null),f=o.useRef(!1),$=e==="danger"?"alert":"status",Fe=d??($==="alert"?"assertive":"polite"),g=T(t),G=T(n),J=T(U),Ie=typeof I=="string"&&I.trim().length>0?I.trim():"Dismiss alert",w=typeof F=="string"&&F.trim().length>0?F.trim():void 0,Q=w===void 0&&typeof L=="string"&&L.trim().length>0?L.trim():void 0,X=O(t).length>0,Ke=Q!==void 0||w!==void 0,Z=w?void 0:Q??(g&&!X?"Alert":void 0);return o.useEffect(()=>{},[Ke,X,g]),o.useEffect(()=>{b||(K(!1),v(!1),N(!1),l(!1))},[b]),o.useEffect(()=>{var te;if(!b)return;const r=((te=Y.current)==null?void 0:te.ownerDocument)??document,ee=p=>{p.metaKey||p.altKey||p.ctrlKey||(f.current=!0)},y=p=>{"button"in p&&!V(p.button)||"ctrlKey"in p&&p.ctrlKey||(f.current=!1)};return r.addEventListener("keydown",ee,!0),r.addEventListener("pointerdown",y,!0),r.addEventListener("mousedown",y,!0),r.addEventListener("touchstart",y,!0),()=>{r.removeEventListener("keydown",ee,!0),r.removeEventListener("pointerdown",y,!0),r.removeEventListener("mousedown",y,!0),r.removeEventListener("touchstart",y,!0)}},[b]),a.jsx("div",{role:$,"aria-live":Fe,"aria-label":Z,"aria-labelledby":w??(Z?void 0:g?_:void 0),style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...Me[e],...Te},...Pe,children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"grid",gap:G||J?4:0},children:[g?a.jsx("strong",{id:_,children:t}):null,G?a.jsx("div",{children:n}):null,J?a.jsx("div",{children:U}):null]}),b?a.jsx("button",{ref:Y,type:"button","aria-label":Ie,"aria-keyshortcuts":"Enter Space","data-focus-visible":z?"true":void 0,"data-pressed":q?"true":void 0,onClick:()=>b(),onFocus:r=>{K(!0),v(Oe(r.currentTarget,f.current))},onBlur:()=>{K(!1),v(!1),l(!1)},onMouseEnter:()=>{N(!0)},onMouseLeave:()=>{N(!1),l(!1)},onMouseDown:r=>{r.button!==0||r.ctrlKey||(f.current=!1,v(!1),l(!0))},onMouseUp:r=>{r.button===0&&l(!1)},onPointerDown:r=>{!V(r.button)||r.ctrlKey||(f.current=!1,v(!1),l(!0))},onPointerUp:r=>{V(r.button)&&l(!1)},onPointerCancel:()=>{l(!1)},onKeyDown:r=>{f.current=!0,!Ve(r)&&((r.ctrlKey||r.metaKey||r.altKey)&&M(r.key)||M(r.key)&&l(!0))},onKeyUp:r=>{M(r.key)&&l(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${W?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:q?"color-mix(in srgb, currentColor 24%, transparent)":W?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:q?"translateY(1px)":"translateY(0)",boxShadow:Le&&z?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function M(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Ve(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Oe(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function V(e){return typeof e!="number"||e<=0}function T(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>T(t)):o.isValidElement(e)}function O(e){if(typeof e=="string")return x(e);if(typeof e=="number")return x(String(e));if(Array.isArray(e))return x(e.map(n=>O(n)).filter(n=>n.length>0).join(" "));if(!o.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?x(t["aria-label"]):O(t.children)}function x(e){return e.replace(/\s+/g," ").trim()}i.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function u({children:e}){return a.jsx(qe,{maxWidth:"min(100%, 560px)",children:e})}const Ge={title:"Feedback/Alert",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},B={},A={render:()=>a.jsxs(u,{children:[a.jsx(i,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),a.jsx(i,{tone:"success",title:"Success",description:"Release published successfully."}),a.jsx(i,{tone:"warning",title:"Warning",description:"Manual approval is required."}),a.jsx(i,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function Ue(){const[e,t]=o.useState(!0);return a.jsxs(u,{children:[a.jsx(Ne,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),e?a.jsx(i,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>t(!1),closeLabel:"Dismiss pending action"}):null]})}const k={render:()=>a.jsx(Ue,{}),play:async({canvasElement:e})=>{const t=m(e);await s(t.getByRole("status")).toBeInTheDocument(),await P.click(t.getByRole("button",{name:"Dismiss pending action"})),await s(t.queryByRole("status")).not.toBeInTheDocument(),await P.click(t.getByRole("button",{name:"Reopen"})),await s(t.getByRole("status")).toBeInTheDocument()}},E={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>a.jsx(u,{children:a.jsx(i,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("status",{name:"Release readiness alert"});await s(n).toBeInTheDocument(),await s(t.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},R={render:()=>a.jsxs(u,{children:[a.jsx("h3",{id:"alert-heading",style:{margin:0},children:"Release readiness heading"}),a.jsx(i,{title:"Release readiness",description:"Status copy inherits visible heading naming.",ariaLabel:"Fallback release readiness alert",ariaLabelledBy:"alert-heading"})]}),play:async({canvasElement:e})=>{const n=m(e).getByRole("status",{name:"Release readiness heading"});await s(n).toHaveAttribute("aria-labelledby","alert-heading"),await s(n).not.toHaveAttribute("aria-label")}},S={render:()=>a.jsx(u,{children:a.jsx(i,{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("status",{name:"Alert"});await s(n).toHaveAttribute("aria-label","Alert"),await s(n).not.toHaveAttribute("aria-labelledby")}},C={render:()=>a.jsx(u,{children:a.jsx(i,{title:0,description:0,children:0})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("status"),d=t.getAllByText("0");await s(d).toHaveLength(3),await s(n).toHaveTextContent("000")}},D={render:()=>a.jsxs(u,{children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),a.jsx("button",{type:"button",children:"Before alert close"}),a.jsx(i,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const t=m(e),n=await t.findByRole("button",{name:"Before alert close"}),d=t.getByRole("button",{name:"Focus intent dismiss"});await P.click(n),await P.tab(),await s(d).toHaveFocus(),await s(d).toHaveAttribute("data-focus-visible","true"),c.mouseDown(d,{button:0,ctrlKey:!0}),await s(d).toHaveAttribute("data-focus-visible","true")}},H={render:()=>a.jsx(u,{children:a.jsx(i,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("button",{name:"Pressed-state dismiss"});n.focus(),await s(n).toHaveFocus(),await s(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.keyDown(n,{key:"Enter",ctrlKey:!0}),await s(n).not.toHaveAttribute("data-pressed"),c.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(n).not.toHaveAttribute("data-pressed"),c.keyDown(n,{key:"Enter",keyCode:229,which:229}),await s(n).not.toHaveAttribute("data-pressed")}},j={render:()=>a.jsx(u,{children:a.jsx(i,{tone:"warning",title:"Pending action",description:"Close button should expose pointer pressed feedback only for primary pointer intent.",onClose:()=>{},closeLabel:"Pointer-pressed dismiss"})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("button",{name:"Pointer-pressed dismiss"});c.mouseDown(n,{button:2}),await s(n).not.toHaveAttribute("data-pressed"),c.mouseDown(n,{button:0,ctrlKey:!0}),await s(n).not.toHaveAttribute("data-pressed"),c.mouseDown(n,{button:0}),await h(()=>{s(n).toHaveAttribute("data-pressed","true")}),c.pointerCancel(n),await h(()=>{s(n).not.toHaveAttribute("data-pressed")}),c.mouseDown(n,{button:0}),await h(()=>{s(n).toHaveAttribute("data-pressed","true")}),c.mouseUp(n,{button:0}),await h(()=>{s(n).not.toHaveAttribute("data-pressed")})}};var ne,ae,re;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:"{}",...(re=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,oe,ie;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(ie=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,ue;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <DismissibleAlertDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Dismiss pending action"
    }));
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("status")).toBeInTheDocument();
  }
}`,...(ue=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    title: "Release readiness",
    description: "Status copy is exposed through an explicit accessible name.",
    ariaLabel: "Release readiness alert"
  },
  render: args => <AlertShowcase>
      <Alert {...args} onClose={() => {}} closeLabel="Dismiss release readiness alert" />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status", {
      name: "Release readiness alert"
    });
    await expect(alert).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Dismiss release readiness alert"
    })).toHaveAttribute("aria-keyshortcuts", "Enter Space");
  }
}`,...(me=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,fe,ye;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <h3 id="alert-heading" style={{
      margin: 0
    }}>
        Release readiness heading
      </h3>
      <Alert title="Release readiness" description="Status copy inherits visible heading naming." ariaLabel="Fallback release readiness alert" ariaLabelledBy="alert-heading" />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status", {
      name: "Release readiness heading"
    });
    await expect(alert).toHaveAttribute("aria-labelledby", "alert-heading");
    await expect(alert).not.toHaveAttribute("aria-label");
  }
}`,...(ye=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,ge,we;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert title={<span aria-hidden>✅</span>} description="Auto fallback name for icon-only title." />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status", {
      name: "Alert"
    });
    await expect(alert).toHaveAttribute("aria-label", "Alert");
    await expect(alert).not.toHaveAttribute("aria-labelledby");
  }
}`,...(we=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var he,xe,Be;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert title={0} description={0}>
        {0}
      </Alert>
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("status");
    const contentNodes = canvas.getAllByText("0");
    await expect(contentNodes).toHaveLength(3);
    await expect(alert).toHaveTextContent("000");
  }
}`,...(Be=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Ae,ke,Ee;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores close-button
        focus-visible state.
      </p>
      <button type="button">Before alert close</button>
      <Alert tone="warning" title="Pending action" description="Close affordance should restore keyboard focus ring on re-entry." onClose={() => {}} closeLabel="Focus intent dismiss" />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before alert close"
    });
    const closeButton = canvas.getByRole("button", {
      name: "Focus intent dismiss"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(closeButton, {
      button: 0,
      ctrlKey: true
    });
    await expect(closeButton).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(Ee=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Re,Se,Ce;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="warning" title="Pending action" description="Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys." onClose={() => {}} closeLabel="Pressed-state dismiss" />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole("button", {
      name: "Pressed-state dismiss"
    });
    closeButton.focus();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      keyCode: 229,
      which: 229
    });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
  }
}`,...(Ce=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var De,He,je;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="warning" title="Pending action" description="Close button should expose pointer pressed feedback only for primary pointer intent." onClose={() => {}} closeLabel="Pointer-pressed dismiss" />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole("button", {
      name: "Pointer-pressed dismiss"
    });
    fireEvent.mouseDown(closeButton, {
      button: 2
    });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
    fireEvent.mouseDown(closeButton, {
      button: 0,
      ctrlKey: true
    });
    await expect(closeButton).not.toHaveAttribute("data-pressed");
    fireEvent.mouseDown(closeButton, {
      button: 0
    });
    await waitFor(() => {
      expect(closeButton).toHaveAttribute("data-pressed", "true");
    });
    fireEvent.pointerCancel(closeButton);
    await waitFor(() => {
      expect(closeButton).not.toHaveAttribute("data-pressed");
    });
    fireEvent.mouseDown(closeButton, {
      button: 0
    });
    await waitFor(() => {
      expect(closeButton).toHaveAttribute("data-pressed", "true");
    });
    fireEvent.mouseUp(closeButton, {
      button: 0
    });
    await waitFor(() => {
      expect(closeButton).not.toHaveAttribute("data-pressed");
    });
  }
}`,...(je=(He=j.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};const Je=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","LabelledByPrecedence","NonTextTitleAutoNameFallback","NumericContentSemantics","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonPrimaryPointerOnly"];export{E as AccessibilityMetadata,H as CloseButtonKeyboardPressedState,j as CloseButtonPrimaryPointerOnly,B as Default,k as Dismissible,D as FocusIntentReentry,R as LabelledByPrecedence,S as NonTextTitleAutoNameFallback,C as NumericContentSemantics,A as ToneMatrix,Je as __namedExportsOrder,Ge as default};
