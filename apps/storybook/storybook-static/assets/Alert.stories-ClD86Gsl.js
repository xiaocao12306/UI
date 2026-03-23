import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as Ue}from"./Button-CYa37MZO.js";import{within as m,expect as s,fireEvent as c,waitFor as k,userEvent as K}from"./index-DgAF9SIF.js";import{S as _e}from"./storyShowcase-DlKirntE.js";const We={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function Ge(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="info"||n==="success"||n==="warning"||n==="danger")return n}return t}function Ye(e){if(typeof e=="string"){const t=e.trim().toLowerCase();if(t==="polite"||t==="assertive"||t==="off")return t}}function i({tone:e="info",title:t,description:n,live:o,ariaLabel:f,ariaLabelledBy:p,onClose:y,closeLabel:I="Dismiss alert",children:U,style:Ie,...Ne}){const _=l.useId(),[qe,N]=l.useState(!1),[W,w]=l.useState(!1),[G,q]=l.useState(!1),[M,u]=l.useState(!1);l.useRef(!1);const Y=l.useRef(null),b=l.useRef(!1),$=Ge(e,"info"),Me=Ye(o),J=$==="danger"?"alert":"status",Ve=Me??(J==="alert"?"assertive":"polite"),h=F(t),Q=F(n),X=F(U),ze=typeof I=="string"&&I.trim().length>0?I.trim():"Dismiss alert",A=typeof p=="string"&&p.trim().length>0?p.trim():void 0,Z=A===void 0&&typeof f=="string"&&f.trim().length>0?f.trim():void 0,ee=O(t).length>0,Oe=Z!==void 0||A!==void 0,te=A?void 0:Z??(h&&!ee?"Alert":void 0);return l.useEffect(()=>{},[Oe,ee,h]),l.useEffect(()=>{y||(N(!1),w(!1),q(!1),u(!1))},[y]),l.useEffect(()=>{var ae;if(!y)return;const r=((ae=Y.current)==null?void 0:ae.ownerDocument)??document,ne=v=>{v.metaKey||v.altKey||v.ctrlKey||(b.current=!0)},g=v=>{"button"in v&&!z(v.button)||"ctrlKey"in v&&v.ctrlKey||(b.current=!1)};return r.addEventListener("keydown",ne,!0),r.addEventListener("pointerdown",g,!0),r.addEventListener("mousedown",g,!0),r.addEventListener("touchstart",g,!0),()=>{r.removeEventListener("keydown",ne,!0),r.removeEventListener("pointerdown",g,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0)}},[y]),a.jsx("div",{role:J,"aria-live":Ve,"aria-label":te,"aria-labelledby":A??(te?void 0:h?_:void 0),style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...We[$],...Ie},...Ne,children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"grid",gap:Q||X?4:0},children:[h?a.jsx("strong",{id:_,children:t}):null,Q?a.jsx("div",{children:n}):null,X?a.jsx("div",{children:U}):null]}),y?a.jsx("button",{ref:Y,type:"button","aria-label":ze,"aria-keyshortcuts":"Enter Space","data-focus-visible":W?"true":void 0,"data-pressed":M?"true":void 0,onClick:()=>y(),onFocus:r=>{N(!0),w(Je(r.currentTarget,b.current))},onBlur:()=>{N(!1),w(!1),u(!1)},onMouseEnter:()=>{q(!0)},onMouseLeave:()=>{q(!1),u(!1)},onMouseDown:r=>{r.button!==0||r.ctrlKey||(b.current=!1,w(!1),u(!0))},onMouseUp:r=>{r.button===0&&u(!1)},onPointerDown:r=>{!z(r.button)||r.ctrlKey||(b.current=!1,w(!1),u(!0))},onPointerUp:r=>{z(r.button)&&u(!1)},onPointerCancel:()=>{u(!1)},onKeyDown:r=>{b.current=!0,!r.defaultPrevented&&($e(r)||(r.ctrlKey||r.metaKey||r.altKey)&&V(r.key)||V(r.key)&&u(!0))},onKeyUp:r=>{V(r.key)&&u(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${G?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:M?"color-mix(in srgb, currentColor 24%, transparent)":G?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:M?"translateY(1px)":"translateY(0)",boxShadow:qe&&W?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function V(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function $e(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Je(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function z(e){return typeof e!="number"||e<=0}function F(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>F(t)):l.isValidElement(e)}function O(e){if(typeof e=="string")return x(e);if(typeof e=="number")return x(String(e));if(Array.isArray(e))return x(e.map(n=>O(n)).filter(n=>n.length>0).join(" "));if(!l.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?x(t["aria-label"]):O(t.children)}function x(e){return e.replace(/\s+/g," ").trim()}i.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function d({children:e}){return a.jsx(_e,{maxWidth:"min(100%, 560px)",children:e})}const at={title:"Feedback/Alert",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},B={},E={render:()=>a.jsxs(d,{children:[a.jsx(i,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),a.jsx(i,{tone:"success",title:"Success",description:"Release published successfully."}),a.jsx(i,{tone:"warning",title:"Warning",description:"Manual approval is required."}),a.jsx(i,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})},R={render:()=>a.jsxs(d,{children:[a.jsx(i,{tone:" DANGER ",live:" ASSERTIVE ",title:"Danger from runtime token",description:"Trim/lowercase runtime tokens map to supported alert semantics."}),a.jsx(i,{tone:"critical",live:"LOUD",title:"Fallback from invalid token",description:"Invalid runtime tokens fall back to default info/polite semantics."})]}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("alert",{name:"Danger from runtime token"});await s(n).toHaveAttribute("aria-live","assertive");const o=t.getByRole("status",{name:"Fallback from invalid token"});await s(o).toHaveAttribute("aria-live","polite")}};function Qe(){const[e,t]=l.useState(!0);return a.jsxs(d,{children:[a.jsx(Ue,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),e?a.jsx(i,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>t(!1),closeLabel:"Dismiss pending action"}):null]})}const S={render:()=>a.jsx(Qe,{}),play:async({canvasElement:e})=>{const t=m(e);await s(t.getByRole("status")).toBeInTheDocument(),await K.click(t.getByRole("button",{name:"Dismiss pending action"})),await s(t.queryByRole("status")).not.toBeInTheDocument(),await K.click(t.getByRole("button",{name:"Reopen"})),await s(t.getByRole("status")).toBeInTheDocument()}},D={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>a.jsx(d,{children:a.jsx(i,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("status",{name:"Release readiness alert"});await s(n).toBeInTheDocument(),await s(t.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},C={render:()=>a.jsxs(d,{children:[a.jsx("h3",{id:"alert-heading",style:{margin:0},children:"Release readiness heading"}),a.jsx(i,{title:"Release readiness",description:"Status copy inherits visible heading naming.",ariaLabel:"Fallback release readiness alert",ariaLabelledBy:"alert-heading"})]}),play:async({canvasElement:e})=>{const n=m(e).getByRole("status",{name:"Release readiness heading"});await s(n).toHaveAttribute("aria-labelledby","alert-heading"),await s(n).not.toHaveAttribute("aria-label")}},H={render:()=>a.jsx(d,{children:a.jsx(i,{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("status",{name:"Alert"});await s(n).toHaveAttribute("aria-label","Alert"),await s(n).not.toHaveAttribute("aria-labelledby")}},j={render:()=>a.jsx(d,{children:a.jsx(i,{title:0,description:0,children:0})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("status"),o=t.getAllByText("0");await s(o).toHaveLength(3),await s(n).toHaveTextContent("000")}},T={render:()=>a.jsxs(d,{children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),a.jsx("button",{type:"button",children:"Before alert close"}),a.jsx(i,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const t=m(e),n=await t.findByRole("button",{name:"Before alert close"}),o=t.getByRole("button",{name:"Focus intent dismiss"});await K.click(n),await K.tab(),await s(o).toHaveFocus(),await s(o).toHaveAttribute("data-focus-visible","true"),c.mouseDown(o,{button:0,ctrlKey:!0}),await s(o).toHaveAttribute("data-focus-visible","true")}},L={render:()=>a.jsx(d,{children:a.jsx(i,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const t=m(e),n=e.ownerDocument,o=t.getByRole("button",{name:"Pressed-state dismiss"});o.focus(),await s(o).toHaveFocus(),await s(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.keyDown(o,{key:"Enter",ctrlKey:!0}),await s(o).not.toHaveAttribute("data-pressed");const f=p=>{(p.key==="Enter"||p.key===" "||p.key==="Space"||p.key==="Spacebar")&&p.preventDefault()};try{n.addEventListener("keydown",f,!0),c.keyDown(o,{key:"Enter"}),await s(o).not.toHaveAttribute("data-pressed"),c.keyDown(o,{key:"Space"}),await s(o).not.toHaveAttribute("data-pressed")}finally{n.removeEventListener("keydown",f,!0)}c.keyDown(o,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(o).not.toHaveAttribute("data-pressed"),c.keyDown(o,{key:"Enter",keyCode:229,which:229}),await s(o).not.toHaveAttribute("data-pressed")}},P={render:()=>a.jsx(d,{children:a.jsx(i,{tone:"warning",title:"Pending action",description:"Close button should expose pointer pressed feedback only for primary pointer intent.",onClose:()=>{},closeLabel:"Pointer-pressed dismiss"})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("button",{name:"Pointer-pressed dismiss"});c.mouseDown(n,{button:2}),await s(n).not.toHaveAttribute("data-pressed"),c.mouseDown(n,{button:0,ctrlKey:!0}),await s(n).not.toHaveAttribute("data-pressed"),c.mouseDown(n,{button:0}),await k(()=>{s(n).toHaveAttribute("data-pressed","true")}),c.pointerCancel(n),await k(()=>{s(n).not.toHaveAttribute("data-pressed")}),c.mouseDown(n,{button:0}),await k(()=>{s(n).toHaveAttribute("data-pressed","true")}),c.mouseUp(n,{button:0}),await k(()=>{s(n).not.toHaveAttribute("data-pressed")})}};var re,se,oe;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:"{}",...(oe=(se=B.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,ce;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,pe;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone={" DANGER " as unknown as "danger"} live={" ASSERTIVE " as unknown as "assertive"} title="Danger from runtime token" description="Trim/lowercase runtime tokens map to supported alert semantics." />
      <Alert tone={"critical" as unknown as "info"} live={"LOUD" as unknown as "polite"} title="Fallback from invalid token" description="Invalid runtime tokens fall back to default info/polite semantics." />
    </AlertShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const normalizedAlert = canvas.getByRole("alert", {
      name: "Danger from runtime token"
    });
    await expect(normalizedAlert).toHaveAttribute("aria-live", "assertive");
    const fallbackAlert = canvas.getByRole("status", {
      name: "Fallback from invalid token"
    });
    await expect(fallbackAlert).toHaveAttribute("aria-live", "polite");
  }
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ve,fe;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ye,be,ge;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var we,he,Ae;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ae=(he=C.parameters)==null?void 0:he.docs)==null?void 0:Ae.source}}};var ke,xe,Be;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Ee,Re,Se;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};var De,Ce,He;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(He=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var je,Te,Le;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Le=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var Pe,Fe,Ke;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ke=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:Ke.source}}};const rt=["Default","ToneMatrix","RuntimeConfigNormalization","Dismissible","AccessibilityMetadata","LabelledByPrecedence","NonTextTitleAutoNameFallback","NumericContentSemantics","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonPrimaryPointerOnly"];export{D as AccessibilityMetadata,L as CloseButtonKeyboardPressedState,P as CloseButtonPrimaryPointerOnly,B as Default,S as Dismissible,T as FocusIntentReentry,C as LabelledByPrecedence,H as NonTextTitleAutoNameFallback,j as NumericContentSemantics,R as RuntimeConfigNormalization,E as ToneMatrix,rt as __namedExportsOrder,at as default};
