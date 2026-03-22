import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as Ie}from"./Button-DirECuRH.js";import{within as m,expect as s,fireEvent as c,waitFor as w,userEvent as T}from"./index-DgAF9SIF.js";import{S as Ne}from"./storyShowcase-Bw5VyCj0.js";const qe={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function o({tone:e="info",title:t,description:n,live:d,ariaLabel:P,ariaLabelledBy:L,onClose:b,closeLabel:F="Dismiss alert",children:U,style:He,...je}){const[Te,K]=i.useState(!1),[_,v]=i.useState(!1),[z,I]=i.useState(!1),[N,l]=i.useState(!1);i.useRef(!1);const W=i.useRef(null),f=i.useRef(!1),Y=e==="danger"?"alert":"status",Pe=d??(Y==="alert"?"assertive":"polite"),q=j(t),$=j(n),G=j(U),Le=typeof F=="string"&&F.trim().length>0?F.trim():"Dismiss alert",g=typeof L=="string"&&L.trim().length>0?L.trim():void 0,J=g===void 0&&typeof P=="string"&&P.trim().length>0?P.trim():void 0,Q=O(t).length>0,Fe=J!==void 0||g!==void 0,Ke=g?void 0:J??(q&&!Q?"Alert":void 0);return i.useEffect(()=>{},[Fe,Q,q]),i.useEffect(()=>{b||(K(!1),v(!1),I(!1),l(!1))},[b]),i.useEffect(()=>{var Z;if(!b)return;const r=((Z=W.current)==null?void 0:Z.ownerDocument)??document,X=p=>{p.metaKey||p.altKey||p.ctrlKey||(f.current=!0)},y=p=>{"button"in p&&!V(p.button)||"ctrlKey"in p&&p.ctrlKey||(f.current=!1)};return r.addEventListener("keydown",X,!0),r.addEventListener("pointerdown",y,!0),r.addEventListener("mousedown",y,!0),r.addEventListener("touchstart",y,!0),()=>{r.removeEventListener("keydown",X,!0),r.removeEventListener("pointerdown",y,!0),r.removeEventListener("mousedown",y,!0),r.removeEventListener("touchstart",y,!0)}},[b]),a.jsx("div",{role:Y,"aria-live":Pe,"aria-label":Ke,"aria-labelledby":g,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...qe[e],...He},...je,children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"grid",gap:$||G?4:0},children:[q?a.jsx("strong",{children:t}):null,$?a.jsx("div",{children:n}):null,G?a.jsx("div",{children:U}):null]}),b?a.jsx("button",{ref:W,type:"button","aria-label":Le,"aria-keyshortcuts":"Enter Space","data-focus-visible":_?"true":void 0,"data-pressed":N?"true":void 0,onClick:()=>b(),onFocus:r=>{K(!0),v(Ve(r.currentTarget,f.current))},onBlur:()=>{K(!1),v(!1),l(!1)},onMouseEnter:()=>{I(!0)},onMouseLeave:()=>{I(!1),l(!1)},onMouseDown:r=>{r.button!==0||r.ctrlKey||(f.current=!1,v(!1),l(!0))},onMouseUp:r=>{r.button===0&&l(!1)},onPointerDown:r=>{!V(r.button)||r.ctrlKey||(f.current=!1,v(!1),l(!0))},onPointerUp:r=>{V(r.button)&&l(!1)},onPointerCancel:()=>{l(!1)},onKeyDown:r=>{f.current=!0,!Me(r)&&((r.ctrlKey||r.metaKey||r.altKey)&&M(r.key)||M(r.key)&&l(!0))},onKeyUp:r=>{M(r.key)&&l(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${z?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:N?"color-mix(in srgb, currentColor 24%, transparent)":z?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:N?"translateY(1px)":"translateY(0)",boxShadow:Te&&_?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function M(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Me(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Ve(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function V(e){return typeof e!="number"||e<=0}function j(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>j(t)):i.isValidElement(e)}function O(e){if(typeof e=="string")return h(e);if(typeof e=="number")return h(String(e));if(Array.isArray(e))return h(e.map(n=>O(n)).filter(n=>n.length>0).join(" "));if(!i.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?h(t["aria-label"]):O(t.children)}function h(e){return e.replace(/\s+/g," ").trim()}o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function u({children:e}){return a.jsx(Ne,{maxWidth:"min(100%, 560px)",children:e})}const $e={title:"Feedback/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},x={},B={render:()=>a.jsxs(u,{children:[a.jsx(o,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),a.jsx(o,{tone:"success",title:"Success",description:"Release published successfully."}),a.jsx(o,{tone:"warning",title:"Warning",description:"Manual approval is required."}),a.jsx(o,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function Oe(){const[e,t]=i.useState(!0);return a.jsxs(u,{children:[a.jsx(Ie,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),e?a.jsx(o,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>t(!1),closeLabel:"Dismiss pending action"}):null]})}const A={render:()=>a.jsx(Oe,{}),play:async({canvasElement:e})=>{const t=m(e);await s(t.getByRole("status")).toBeInTheDocument(),await T.click(t.getByRole("button",{name:"Dismiss pending action"})),await s(t.queryByRole("status")).not.toBeInTheDocument(),await T.click(t.getByRole("button",{name:"Reopen"})),await s(t.getByRole("status")).toBeInTheDocument()}},k={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>a.jsx(u,{children:a.jsx(o,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("status",{name:"Release readiness alert"});await s(n).toBeInTheDocument(),await s(t.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},E={render:()=>a.jsxs(u,{children:[a.jsx("h3",{id:"alert-heading",style:{margin:0},children:"Release readiness heading"}),a.jsx(o,{title:"Release readiness",description:"Status copy inherits visible heading naming.",ariaLabel:"Fallback release readiness alert",ariaLabelledBy:"alert-heading"})]}),play:async({canvasElement:e})=>{const n=m(e).getByRole("status",{name:"Release readiness heading"});await s(n).toHaveAttribute("aria-labelledby","alert-heading"),await s(n).not.toHaveAttribute("aria-label")}},R={render:()=>a.jsx(u,{children:a.jsx(o,{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("status",{name:"Alert"});await s(n).toHaveAttribute("aria-label","Alert"),await s(n).not.toHaveAttribute("aria-labelledby")}},S={render:()=>a.jsx(u,{children:a.jsx(o,{title:0,description:0,children:0})}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("status"),d=t.getAllByText("0");await s(d).toHaveLength(3),await s(n).toHaveTextContent("000")}},C={render:()=>a.jsxs(u,{children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),a.jsx("button",{type:"button",children:"Before alert close"}),a.jsx(o,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const t=m(e),n=await t.findByRole("button",{name:"Before alert close"}),d=t.getByRole("button",{name:"Focus intent dismiss"});await T.click(n),await T.tab(),await s(d).toHaveFocus(),await s(d).toHaveAttribute("data-focus-visible","true"),c.mouseDown(d,{button:0,ctrlKey:!0}),await s(d).toHaveAttribute("data-focus-visible","true")}},D={render:()=>a.jsx(u,{children:a.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("button",{name:"Pressed-state dismiss"});n.focus(),await s(n).toHaveFocus(),await s(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.keyDown(n,{key:"Enter",ctrlKey:!0}),await s(n).not.toHaveAttribute("data-pressed"),c.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(n).not.toHaveAttribute("data-pressed"),c.keyDown(n,{key:"Enter",keyCode:229,which:229}),await s(n).not.toHaveAttribute("data-pressed")}},H={render:()=>a.jsx(u,{children:a.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pointer pressed feedback only for primary pointer intent.",onClose:()=>{},closeLabel:"Pointer-pressed dismiss"})}),play:async({canvasElement:e})=>{const n=m(e).getByRole("button",{name:"Pointer-pressed dismiss"});c.mouseDown(n,{button:2}),await s(n).not.toHaveAttribute("data-pressed"),c.mouseDown(n,{button:0,ctrlKey:!0}),await s(n).not.toHaveAttribute("data-pressed"),c.mouseDown(n,{button:0}),await w(()=>{s(n).toHaveAttribute("data-pressed","true")}),c.pointerCancel(n),await w(()=>{s(n).not.toHaveAttribute("data-pressed")}),c.mouseDown(n,{button:0}),await w(()=>{s(n).toHaveAttribute("data-pressed","true")}),c.mouseUp(n,{button:0}),await w(()=>{s(n).not.toHaveAttribute("data-pressed")})}};var ee,te,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:"{}",...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,re,se;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,le;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,de;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,be;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(me=E.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var fe,ye,ve;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var ge,we,he;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(we=S.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var xe,Be,Ae;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ae=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var ke,Ee,Re;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Se,Ce,De;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(De=(Ce=H.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};const Ge=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","LabelledByPrecedence","NonTextTitleAutoNameFallback","NumericContentSemantics","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonPrimaryPointerOnly"];export{k as AccessibilityMetadata,D as CloseButtonKeyboardPressedState,H as CloseButtonPrimaryPointerOnly,x as Default,A as Dismissible,C as FocusIntentReentry,E as LabelledByPrecedence,R as NonTextTitleAutoNameFallback,S as NumericContentSemantics,B as ToneMatrix,Ge as __namedExportsOrder,$e as default};
