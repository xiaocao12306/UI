import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as he}from"./Button-DzwIPD-D.js";import{within as y,expect as s,fireEvent as c,waitFor as g,userEvent as S}from"./index-DgAF9SIF.js";import{S as Be}from"./storyShowcase-Bw5VyCj0.js";const xe={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function o({tone:t="info",title:r,description:e,live:p,ariaLabel:D,ariaLabelledBy:C,onClose:m,closeLabel:H="Dismiss alert",children:j,style:be,...fe}){const[ye,P]=l.useState(!1),[I,v]=l.useState(!1),[q,L]=l.useState(!1),[F,i]=l.useState(!1),M=l.useRef(null),b=l.useRef(!1),N=t==="danger"?"alert":"status",ve=p??(N==="alert"?"assertive":"polite"),ge=typeof H=="string"&&H.trim().length>0?H.trim():"Dismiss alert",V=typeof C=="string"&&C.trim().length>0?C.trim():void 0,we=V===void 0&&typeof D=="string"&&D.trim().length>0?D.trim():void 0;return l.useEffect(()=>{m||(P(!1),v(!1),L(!1),i(!1))},[m]),l.useEffect(()=>{var U;if(!m)return;const a=((U=M.current)==null?void 0:U.ownerDocument)??document,O=u=>{u.metaKey||u.altKey||u.ctrlKey||(b.current=!0)},f=u=>{"button"in u&&!T(u.button)||"ctrlKey"in u&&u.ctrlKey||(b.current=!1)};return a.addEventListener("keydown",O,!0),a.addEventListener("pointerdown",f,!0),a.addEventListener("mousedown",f,!0),a.addEventListener("touchstart",f,!0),()=>{a.removeEventListener("keydown",O,!0),a.removeEventListener("pointerdown",f,!0),a.removeEventListener("mousedown",f,!0),a.removeEventListener("touchstart",f,!0)}},[m]),n.jsx("div",{role:N,"aria-live":ve,"aria-label":we,"aria-labelledby":V,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...xe[t],...be},...fe,children:n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[n.jsxs("div",{style:{display:"grid",gap:e||j?4:0},children:[r?n.jsx("strong",{children:r}):null,e?n.jsx("div",{children:e}):null,j?n.jsx("div",{children:j}):null]}),m?n.jsx("button",{ref:M,type:"button","aria-label":ge,"aria-keyshortcuts":"Enter Space","data-focus-visible":I?"true":void 0,"data-pressed":F?"true":void 0,onClick:()=>m(),onFocus:a=>{P(!0),v(Ae(a.currentTarget,b.current))},onBlur:()=>{P(!1),v(!1),i(!1)},onMouseEnter:()=>{L(!0)},onMouseLeave:()=>{L(!1),i(!1)},onMouseDown:a=>{a.button!==0||a.ctrlKey||(b.current=!1,v(!1),i(!0))},onMouseUp:a=>{a.button===0&&i(!1)},onPointerDown:a=>{!T(a.button)||a.ctrlKey||(b.current=!1,v(!1),i(!0))},onPointerUp:a=>{T(a.button)&&i(!1)},onPointerCancel:()=>{i(!1)},onKeyDown:a=>{b.current=!0,!ke(a)&&((a.ctrlKey||a.metaKey||a.altKey)&&K(a.key)||K(a.key)&&i(!0))},onKeyUp:a=>{K(a.key)&&i(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${q?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:F?"color-mix(in srgb, currentColor 24%, transparent)":q?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:F?"translateY(1px)":"translateY(0)",boxShadow:ye&&I?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function K(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function ke(t){const r=t.nativeEvent;return r.isComposing?!0:typeof r.keyCode=="number"&&r.keyCode===229}function Ae(t,r){try{return t.matches(":focus-visible")||r}catch{return r}}function T(t){return typeof t!="number"||t<=0}o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function d({children:t}){return n.jsx(Be,{maxWidth:"min(100%, 560px)",children:t})}const je={title:"Feedback/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},w={},h={render:()=>n.jsxs(d,{children:[n.jsx(o,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),n.jsx(o,{tone:"success",title:"Success",description:"Release published successfully."}),n.jsx(o,{tone:"warning",title:"Warning",description:"Manual approval is required."}),n.jsx(o,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function Ee(){const[t,r]=l.useState(!0);return n.jsxs(d,{children:[n.jsx(he,{variant:"outline",onClick:()=>r(!0),children:"Reopen"}),t?n.jsx(o,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>r(!1),closeLabel:"Dismiss pending action"}):null]})}const B={render:()=>n.jsx(Ee,{}),play:async({canvasElement:t})=>{const r=y(t);await s(r.getByRole("status")).toBeInTheDocument(),await S.click(r.getByRole("button",{name:"Dismiss pending action"})),await s(r.queryByRole("status")).not.toBeInTheDocument(),await S.click(r.getByRole("button",{name:"Reopen"})),await s(r.getByRole("status")).toBeInTheDocument()}},x={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:t=>n.jsx(d,{children:n.jsx(o,{...t,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:t})=>{const r=y(t),e=r.getByRole("status",{name:"Release readiness alert"});await s(e).toBeInTheDocument(),await s(r.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},k={render:()=>n.jsxs(d,{children:[n.jsx("h3",{id:"alert-heading",style:{margin:0},children:"Release readiness heading"}),n.jsx(o,{title:"Release readiness",description:"Status copy inherits visible heading naming.",ariaLabel:"Fallback release readiness alert",ariaLabelledBy:"alert-heading"})]}),play:async({canvasElement:t})=>{const e=y(t).getByRole("status",{name:"Release readiness heading"});await s(e).toHaveAttribute("aria-labelledby","alert-heading"),await s(e).not.toHaveAttribute("aria-label")}},A={render:()=>n.jsxs(d,{children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),n.jsx("button",{type:"button",children:"Before alert close"}),n.jsx(o,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:t})=>{const r=y(t),e=await r.findByRole("button",{name:"Before alert close"}),p=r.getByRole("button",{name:"Focus intent dismiss"});await S.click(e),await S.tab(),await s(p).toHaveFocus(),await s(p).toHaveAttribute("data-focus-visible","true"),c.mouseDown(p,{button:0,ctrlKey:!0}),await s(p).toHaveAttribute("data-focus-visible","true")}},E={render:()=>n.jsx(d,{children:n.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:t})=>{const e=y(t).getByRole("button",{name:"Pressed-state dismiss"});e.focus(),await s(e).toHaveFocus(),await s(e).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.keyDown(e,{key:"Enter",ctrlKey:!0}),await s(e).not.toHaveAttribute("data-pressed"),c.keyDown(e,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(e).not.toHaveAttribute("data-pressed"),c.keyDown(e,{key:"Enter",keyCode:229,which:229}),await s(e).not.toHaveAttribute("data-pressed")}},R={render:()=>n.jsx(d,{children:n.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pointer pressed feedback only for primary pointer intent.",onClose:()=>{},closeLabel:"Pointer-pressed dismiss"})}),play:async({canvasElement:t})=>{const e=y(t).getByRole("button",{name:"Pointer-pressed dismiss"});c.mouseDown(e,{button:2}),await s(e).not.toHaveAttribute("data-pressed"),c.mouseDown(e,{button:0,ctrlKey:!0}),await s(e).not.toHaveAttribute("data-pressed"),c.mouseDown(e,{button:0}),await g(()=>{s(e).toHaveAttribute("data-pressed","true")}),c.pointerCancel(e),await g(()=>{s(e).not.toHaveAttribute("data-pressed")}),c.mouseDown(e,{button:0}),await g(()=>{s(e).toHaveAttribute("data-pressed","true")}),c.mouseUp(e,{button:0}),await g(()=>{s(e).not.toHaveAttribute("data-pressed")})}};var _,W,z;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(z=(W=w.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var Y,$,G;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(G=($=h.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,oe,ie;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,pe,me;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Pe=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","LabelledByPrecedence","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonPrimaryPointerOnly"];export{x as AccessibilityMetadata,E as CloseButtonKeyboardPressedState,R as CloseButtonPrimaryPointerOnly,w as Default,B as Dismissible,A as FocusIntentReentry,k as LabelledByPrecedence,h as ToneMatrix,Pe as __namedExportsOrder,je as default};
