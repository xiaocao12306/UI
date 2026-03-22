import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as Se}from"./Button-DirECuRH.js";import{within as m,expect as s,fireEvent as l,waitFor as g,userEvent as D}from"./index-DgAF9SIF.js";import{S as De}from"./storyShowcase-Bw5VyCj0.js";const He={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function o({tone:e="info",title:n,description:t,live:u,ariaLabel:H,ariaLabelledBy:j,onClose:b,closeLabel:P="Dismiss alert",children:q,style:xe,...Be}){const[Ae,L]=c.useState(!1),[M,v]=c.useState(!1),[N,T]=c.useState(!1),[F,i]=c.useState(!1),V=c.useRef(null),y=c.useRef(!1),O=e==="danger"?"alert":"status",ke=u??(O==="alert"?"assertive":"polite"),Ee=typeof P=="string"&&P.trim().length>0?P.trim():"Dismiss alert",U=typeof j=="string"&&j.trim().length>0?j.trim():void 0,Re=U===void 0&&typeof H=="string"&&H.trim().length>0?H.trim():void 0,Ce=S(n),_=S(t),W=S(q);return c.useEffect(()=>{b||(L(!1),v(!1),T(!1),i(!1))},[b]),c.useEffect(()=>{var Y;if(!b)return;const r=((Y=V.current)==null?void 0:Y.ownerDocument)??document,z=d=>{d.metaKey||d.altKey||d.ctrlKey||(y.current=!0)},f=d=>{"button"in d&&!I(d.button)||"ctrlKey"in d&&d.ctrlKey||(y.current=!1)};return r.addEventListener("keydown",z,!0),r.addEventListener("pointerdown",f,!0),r.addEventListener("mousedown",f,!0),r.addEventListener("touchstart",f,!0),()=>{r.removeEventListener("keydown",z,!0),r.removeEventListener("pointerdown",f,!0),r.removeEventListener("mousedown",f,!0),r.removeEventListener("touchstart",f,!0)}},[b]),a.jsx("div",{role:O,"aria-live":ke,"aria-label":Re,"aria-labelledby":U,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...He[e],...xe},...Be,children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"grid",gap:_||W?4:0},children:[Ce?a.jsx("strong",{children:n}):null,_?a.jsx("div",{children:t}):null,W?a.jsx("div",{children:q}):null]}),b?a.jsx("button",{ref:V,type:"button","aria-label":Ee,"aria-keyshortcuts":"Enter Space","data-focus-visible":M?"true":void 0,"data-pressed":F?"true":void 0,onClick:()=>b(),onFocus:r=>{L(!0),v(Pe(r.currentTarget,y.current))},onBlur:()=>{L(!1),v(!1),i(!1)},onMouseEnter:()=>{T(!0)},onMouseLeave:()=>{T(!1),i(!1)},onMouseDown:r=>{r.button!==0||r.ctrlKey||(y.current=!1,v(!1),i(!0))},onMouseUp:r=>{r.button===0&&i(!1)},onPointerDown:r=>{!I(r.button)||r.ctrlKey||(y.current=!1,v(!1),i(!0))},onPointerUp:r=>{I(r.button)&&i(!1)},onPointerCancel:()=>{i(!1)},onKeyDown:r=>{y.current=!0,!je(r)&&((r.ctrlKey||r.metaKey||r.altKey)&&K(r.key)||K(r.key)&&i(!0))},onKeyUp:r=>{K(r.key)&&i(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${N?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:F?"color-mix(in srgb, currentColor 24%, transparent)":N?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:F?"translateY(1px)":"translateY(0)",boxShadow:Ae&&M?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function K(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function je(e){const n=e.nativeEvent;return n.isComposing?!0:typeof n.keyCode=="number"&&n.keyCode===229}function Pe(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function I(e){return typeof e!="number"||e<=0}function S(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(n=>S(n)):c.isValidElement(e)}o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function p({children:e}){return a.jsx(De,{maxWidth:"min(100%, 560px)",children:e})}const Me={title:"Feedback/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},w={},h={render:()=>a.jsxs(p,{children:[a.jsx(o,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),a.jsx(o,{tone:"success",title:"Success",description:"Release published successfully."}),a.jsx(o,{tone:"warning",title:"Warning",description:"Manual approval is required."}),a.jsx(o,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function Le(){const[e,n]=c.useState(!0);return a.jsxs(p,{children:[a.jsx(Se,{variant:"outline",onClick:()=>n(!0),children:"Reopen"}),e?a.jsx(o,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>n(!1),closeLabel:"Dismiss pending action"}):null]})}const x={render:()=>a.jsx(Le,{}),play:async({canvasElement:e})=>{const n=m(e);await s(n.getByRole("status")).toBeInTheDocument(),await D.click(n.getByRole("button",{name:"Dismiss pending action"})),await s(n.queryByRole("status")).not.toBeInTheDocument(),await D.click(n.getByRole("button",{name:"Reopen"})),await s(n.getByRole("status")).toBeInTheDocument()}},B={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>a.jsx(p,{children:a.jsx(o,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const n=m(e),t=n.getByRole("status",{name:"Release readiness alert"});await s(t).toBeInTheDocument(),await s(n.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},A={render:()=>a.jsxs(p,{children:[a.jsx("h3",{id:"alert-heading",style:{margin:0},children:"Release readiness heading"}),a.jsx(o,{title:"Release readiness",description:"Status copy inherits visible heading naming.",ariaLabel:"Fallback release readiness alert",ariaLabelledBy:"alert-heading"})]}),play:async({canvasElement:e})=>{const t=m(e).getByRole("status",{name:"Release readiness heading"});await s(t).toHaveAttribute("aria-labelledby","alert-heading"),await s(t).not.toHaveAttribute("aria-label")}},k={render:()=>a.jsx(p,{children:a.jsx(o,{title:0,description:0,children:0})}),play:async({canvasElement:e})=>{const n=m(e),t=n.getByRole("status"),u=n.getAllByText("0");await s(u).toHaveLength(3),await s(t).toHaveTextContent("000")}},E={render:()=>a.jsxs(p,{children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),a.jsx("button",{type:"button",children:"Before alert close"}),a.jsx(o,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const n=m(e),t=await n.findByRole("button",{name:"Before alert close"}),u=n.getByRole("button",{name:"Focus intent dismiss"});await D.click(t),await D.tab(),await s(u).toHaveFocus(),await s(u).toHaveAttribute("data-focus-visible","true"),l.mouseDown(u,{button:0,ctrlKey:!0}),await s(u).toHaveAttribute("data-focus-visible","true")}},R={render:()=>a.jsx(p,{children:a.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const t=m(e).getByRole("button",{name:"Pressed-state dismiss"});t.focus(),await s(t).toHaveFocus(),await s(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),l.keyDown(t,{key:"Enter",ctrlKey:!0}),await s(t).not.toHaveAttribute("data-pressed"),l.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(t).not.toHaveAttribute("data-pressed"),l.keyDown(t,{key:"Enter",keyCode:229,which:229}),await s(t).not.toHaveAttribute("data-pressed")}},C={render:()=>a.jsx(p,{children:a.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pointer pressed feedback only for primary pointer intent.",onClose:()=>{},closeLabel:"Pointer-pressed dismiss"})}),play:async({canvasElement:e})=>{const t=m(e).getByRole("button",{name:"Pointer-pressed dismiss"});l.mouseDown(t,{button:2}),await s(t).not.toHaveAttribute("data-pressed"),l.mouseDown(t,{button:0,ctrlKey:!0}),await s(t).not.toHaveAttribute("data-pressed"),l.mouseDown(t,{button:0}),await g(()=>{s(t).toHaveAttribute("data-pressed","true")}),l.pointerCancel(t),await g(()=>{s(t).not.toHaveAttribute("data-pressed")}),l.mouseDown(t,{button:0}),await g(()=>{s(t).toHaveAttribute("data-pressed","true")}),l.mouseUp(t,{button:0}),await g(()=>{s(t).not.toHaveAttribute("data-pressed")})}};var $,G,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,re,se;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,be;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(me=E.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,fe,ve;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ge,we,he;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(we=C.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};const Ne=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","LabelledByPrecedence","NumericContentSemantics","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonPrimaryPointerOnly"];export{B as AccessibilityMetadata,R as CloseButtonKeyboardPressedState,C as CloseButtonPrimaryPointerOnly,w as Default,x as Dismissible,E as FocusIntentReentry,A as LabelledByPrecedence,k as NumericContentSemantics,h as ToneMatrix,Ne as __namedExportsOrder,Me as default};
