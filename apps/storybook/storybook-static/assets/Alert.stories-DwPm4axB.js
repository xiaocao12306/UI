import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as Ne}from"./Button-B21ouHNm.js";import{within as y,expect as s,fireEvent as l,waitFor as A,userEvent as F}from"./index-DgAF9SIF.js";import{S as qe}from"./storyShowcase-DlKirntE.js";const Me={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function c({tone:e="info",title:t,description:a,live:o,ariaLabel:b,ariaLabelledBy:d,onClose:v,closeLabel:K="Dismiss alert",children:U,style:Te,...Le}){const _=i.useId(),[Pe,I]=i.useState(!1),[z,w]=i.useState(!1),[W,N]=i.useState(!1),[q,u]=i.useState(!1);i.useRef(!1);const Y=i.useRef(null),f=i.useRef(!1),$=e==="danger"?"alert":"status",Fe=o??($==="alert"?"assertive":"polite"),h=P(t),G=P(a),J=P(U),Ke=typeof K=="string"&&K.trim().length>0?K.trim():"Dismiss alert",x=typeof d=="string"&&d.trim().length>0?d.trim():void 0,Q=x===void 0&&typeof b=="string"&&b.trim().length>0?b.trim():void 0,X=O(t).length>0,Ie=Q!==void 0||x!==void 0,Z=x?void 0:Q??(h&&!X?"Alert":void 0);return i.useEffect(()=>{},[Ie,X,h]),i.useEffect(()=>{v||(I(!1),w(!1),N(!1),u(!1))},[v]),i.useEffect(()=>{var te;if(!v)return;const r=((te=Y.current)==null?void 0:te.ownerDocument)??document,ee=m=>{m.metaKey||m.altKey||m.ctrlKey||(f.current=!0)},g=m=>{"button"in m&&!V(m.button)||"ctrlKey"in m&&m.ctrlKey||(f.current=!1)};return r.addEventListener("keydown",ee,!0),r.addEventListener("pointerdown",g,!0),r.addEventListener("mousedown",g,!0),r.addEventListener("touchstart",g,!0),()=>{r.removeEventListener("keydown",ee,!0),r.removeEventListener("pointerdown",g,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0)}},[v]),n.jsx("div",{role:$,"aria-live":Fe,"aria-label":Z,"aria-labelledby":x??(Z?void 0:h?_:void 0),style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...Me[e],...Te},...Le,children:n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[n.jsxs("div",{style:{display:"grid",gap:G||J?4:0},children:[h?n.jsx("strong",{id:_,children:t}):null,G?n.jsx("div",{children:a}):null,J?n.jsx("div",{children:U}):null]}),v?n.jsx("button",{ref:Y,type:"button","aria-label":Ke,"aria-keyshortcuts":"Enter Space","data-focus-visible":z?"true":void 0,"data-pressed":q?"true":void 0,onClick:()=>v(),onFocus:r=>{I(!0),w(Oe(r.currentTarget,f.current))},onBlur:()=>{I(!1),w(!1),u(!1)},onMouseEnter:()=>{N(!0)},onMouseLeave:()=>{N(!1),u(!1)},onMouseDown:r=>{r.button!==0||r.ctrlKey||(f.current=!1,w(!1),u(!0))},onMouseUp:r=>{r.button===0&&u(!1)},onPointerDown:r=>{!V(r.button)||r.ctrlKey||(f.current=!1,w(!1),u(!0))},onPointerUp:r=>{V(r.button)&&u(!1)},onPointerCancel:()=>{u(!1)},onKeyDown:r=>{f.current=!0,!r.defaultPrevented&&(Ve(r)||(r.ctrlKey||r.metaKey||r.altKey)&&M(r.key)||M(r.key)&&u(!0))},onKeyUp:r=>{M(r.key)&&u(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${W?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:q?"color-mix(in srgb, currentColor 24%, transparent)":W?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:q?"translateY(1px)":"translateY(0)",boxShadow:Pe&&z?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function M(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Ve(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Oe(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function V(e){return typeof e!="number"||e<=0}function P(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>P(t)):i.isValidElement(e)}function O(e){if(typeof e=="string")return B(e);if(typeof e=="number")return B(String(e));if(Array.isArray(e))return B(e.map(a=>O(a)).filter(a=>a.length>0).join(" "));if(!i.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?B(t["aria-label"]):O(t.children)}function B(e){return e.replace(/\s+/g," ").trim()}c.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function p({children:e}){return n.jsx(qe,{maxWidth:"min(100%, 560px)",children:e})}const Ge={title:"Feedback/Alert",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},k={},E={render:()=>n.jsxs(p,{children:[n.jsx(c,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),n.jsx(c,{tone:"success",title:"Success",description:"Release published successfully."}),n.jsx(c,{tone:"warning",title:"Warning",description:"Manual approval is required."}),n.jsx(c,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function Ue(){const[e,t]=i.useState(!0);return n.jsxs(p,{children:[n.jsx(Ne,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),e?n.jsx(c,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>t(!1),closeLabel:"Dismiss pending action"}):null]})}const R={render:()=>n.jsx(Ue,{}),play:async({canvasElement:e})=>{const t=y(e);await s(t.getByRole("status")).toBeInTheDocument(),await F.click(t.getByRole("button",{name:"Dismiss pending action"})),await s(t.queryByRole("status")).not.toBeInTheDocument(),await F.click(t.getByRole("button",{name:"Reopen"})),await s(t.getByRole("status")).toBeInTheDocument()}},S={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>n.jsx(p,{children:n.jsx(c,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("status",{name:"Release readiness alert"});await s(a).toBeInTheDocument(),await s(t.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},D={render:()=>n.jsxs(p,{children:[n.jsx("h3",{id:"alert-heading",style:{margin:0},children:"Release readiness heading"}),n.jsx(c,{title:"Release readiness",description:"Status copy inherits visible heading naming.",ariaLabel:"Fallback release readiness alert",ariaLabelledBy:"alert-heading"})]}),play:async({canvasElement:e})=>{const a=y(e).getByRole("status",{name:"Release readiness heading"});await s(a).toHaveAttribute("aria-labelledby","alert-heading"),await s(a).not.toHaveAttribute("aria-label")}},C={render:()=>n.jsx(p,{children:n.jsx(c,{title:n.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const a=y(e).getByRole("status",{name:"Alert"});await s(a).toHaveAttribute("aria-label","Alert"),await s(a).not.toHaveAttribute("aria-labelledby")}},H={render:()=>n.jsx(p,{children:n.jsx(c,{title:0,description:0,children:0})}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("status"),o=t.getAllByText("0");await s(o).toHaveLength(3),await s(a).toHaveTextContent("000")}},j={render:()=>n.jsxs(p,{children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),n.jsx("button",{type:"button",children:"Before alert close"}),n.jsx(c,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const t=y(e),a=await t.findByRole("button",{name:"Before alert close"}),o=t.getByRole("button",{name:"Focus intent dismiss"});await F.click(a),await F.tab(),await s(o).toHaveFocus(),await s(o).toHaveAttribute("data-focus-visible","true"),l.mouseDown(o,{button:0,ctrlKey:!0}),await s(o).toHaveAttribute("data-focus-visible","true")}},T={render:()=>n.jsx(p,{children:n.jsx(c,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const t=y(e),a=e.ownerDocument,o=t.getByRole("button",{name:"Pressed-state dismiss"});o.focus(),await s(o).toHaveFocus(),await s(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),l.keyDown(o,{key:"Enter",ctrlKey:!0}),await s(o).not.toHaveAttribute("data-pressed");const b=d=>{(d.key==="Enter"||d.key===" "||d.key==="Space"||d.key==="Spacebar")&&d.preventDefault()};try{a.addEventListener("keydown",b,!0),l.keyDown(o,{key:"Enter"}),await s(o).not.toHaveAttribute("data-pressed"),l.keyDown(o,{key:"Space"}),await s(o).not.toHaveAttribute("data-pressed")}finally{a.removeEventListener("keydown",b,!0)}l.keyDown(o,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(o).not.toHaveAttribute("data-pressed"),l.keyDown(o,{key:"Enter",keyCode:229,which:229}),await s(o).not.toHaveAttribute("data-pressed")}},L={render:()=>n.jsx(p,{children:n.jsx(c,{tone:"warning",title:"Pending action",description:"Close button should expose pointer pressed feedback only for primary pointer intent.",onClose:()=>{},closeLabel:"Pointer-pressed dismiss"})}),play:async({canvasElement:e})=>{const a=y(e).getByRole("button",{name:"Pointer-pressed dismiss"});l.mouseDown(a,{button:2}),await s(a).not.toHaveAttribute("data-pressed"),l.mouseDown(a,{button:0,ctrlKey:!0}),await s(a).not.toHaveAttribute("data-pressed"),l.mouseDown(a,{button:0}),await A(()=>{s(a).toHaveAttribute("data-pressed","true")}),l.pointerCancel(a),await A(()=>{s(a).not.toHaveAttribute("data-pressed")}),l.mouseDown(a,{button:0}),await A(()=>{s(a).toHaveAttribute("data-pressed","true")}),l.mouseUp(a,{button:0}),await A(()=>{s(a).not.toHaveAttribute("data-pressed")})}};var ne,ae,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:"{}",...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,oe,ie;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(ie=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,ue;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,pe,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ye,be,ve;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,ge,we;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var he,xe,Ae;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ae=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};var Be,ke,Ee;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Re,Se,De;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="warning" title="Pending action" description="Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys." onClose={() => {}} closeLabel="Pressed-state dismiss" />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
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
    const preemptActivationKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Space" || event.key === "Spacebar") {
        event.preventDefault();
      }
    };
    try {
      ownerDocument.addEventListener("keydown", preemptActivationKeys, true);
      fireEvent.keyDown(closeButton, {
        key: "Enter"
      });
      await expect(closeButton).not.toHaveAttribute("data-pressed");
      fireEvent.keyDown(closeButton, {
        key: "Space"
      });
      await expect(closeButton).not.toHaveAttribute("data-pressed");
    } finally {
      ownerDocument.removeEventListener("keydown", preemptActivationKeys, true);
    }
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
}`,...(De=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var Ce,He,je;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(je=(He=L.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};const Je=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","LabelledByPrecedence","NonTextTitleAutoNameFallback","NumericContentSemantics","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonPrimaryPointerOnly"];export{S as AccessibilityMetadata,T as CloseButtonKeyboardPressedState,L as CloseButtonPrimaryPointerOnly,k as Default,R as Dismissible,j as FocusIntentReentry,D as LabelledByPrecedence,C as NonTextTitleAutoNameFallback,H as NumericContentSemantics,E as ToneMatrix,Je as __namedExportsOrder,Ge as default};
