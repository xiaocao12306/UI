import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as be}from"./Button-Bcz0jJFO.js";import{within as y,expect as s,fireEvent as R,userEvent as E}from"./index-DgAF9SIF.js";import{S as ye}from"./storyShowcase-Bw5VyCj0.js";const ge={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function o({tone:e="info",title:n,description:r,live:u,ariaLabel:A,ariaLabelledBy:S,onClose:d,closeLabel:D="Dismiss alert",children:C,style:le,...ue}){const[de,j]=i.useState(!1),[I,b]=i.useState(!1),[K,H]=i.useState(!1),[L,l]=i.useState(!1),F=i.useRef(null),p=i.useRef(!1),P=e==="danger"?"alert":"status",pe=u??(P==="alert"?"assertive":"polite"),me=typeof D=="string"&&D.trim().length>0?D.trim():"Dismiss alert",q=typeof S=="string"&&S.trim().length>0?S.trim():void 0,fe=q===void 0&&typeof A=="string"&&A.trim().length>0?A.trim():void 0;return i.useEffect(()=>{d||(j(!1),b(!1),H(!1),l(!1))},[d]),i.useEffect(()=>{var N;if(!d)return;const a=((N=F.current)==null?void 0:N.ownerDocument)??document,M=c=>{c.metaKey||c.altKey||c.ctrlKey||(p.current=!0)},m=c=>{"button"in c&&!V(c.button)||"ctrlKey"in c&&c.ctrlKey||(p.current=!1)};return a.addEventListener("keydown",M,!0),a.addEventListener("pointerdown",m,!0),a.addEventListener("mousedown",m,!0),a.addEventListener("touchstart",m,!0),()=>{a.removeEventListener("keydown",M,!0),a.removeEventListener("pointerdown",m,!0),a.removeEventListener("mousedown",m,!0),a.removeEventListener("touchstart",m,!0)}},[d]),t.jsx("div",{role:P,"aria-live":pe,"aria-label":fe,"aria-labelledby":q,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...ge[e],...le},...ue,children:t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"grid",gap:r||C?4:0},children:[n?t.jsx("strong",{children:n}):null,r?t.jsx("div",{children:r}):null,C?t.jsx("div",{children:C}):null]}),d?t.jsx("button",{ref:F,type:"button","aria-label":me,"aria-keyshortcuts":"Enter Space","data-focus-visible":I?"true":void 0,"data-pressed":L?"true":void 0,onClick:()=>d(),onFocus:a=>{j(!0),b(we(a.currentTarget,p.current))},onBlur:()=>{j(!1),b(!1),l(!1)},onMouseEnter:()=>{H(!0)},onMouseLeave:()=>{H(!1),l(!1)},onMouseDown:a=>{a.button!==0||a.ctrlKey||(p.current=!1,b(!1),l(!0))},onMouseUp:a=>{a.button===0&&l(!1)},onPointerDown:a=>{!V(a.button)||a.ctrlKey||(p.current=!1,b(!1))},onKeyDown:a=>{p.current=!0,!ve(a)&&((a.ctrlKey||a.metaKey||a.altKey)&&T(a.key)||T(a.key)&&l(!0))},onKeyUp:a=>{T(a.key)&&l(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${K?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:L?"color-mix(in srgb, currentColor 24%, transparent)":K?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:L?"translateY(1px)":"translateY(0)",boxShadow:de&&I?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function T(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function ve(e){const n=e.nativeEvent;return n.isComposing?!0:typeof n.keyCode=="number"&&n.keyCode===229}function we(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function V(e){return typeof e!="number"||e<=0}o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function f({children:e}){return t.jsx(ye,{maxWidth:"min(100%, 560px)",children:e})}const Ae={title:"Feedback/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},g={},v={render:()=>t.jsxs(f,{children:[t.jsx(o,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),t.jsx(o,{tone:"success",title:"Success",description:"Release published successfully."}),t.jsx(o,{tone:"warning",title:"Warning",description:"Manual approval is required."}),t.jsx(o,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function he(){const[e,n]=i.useState(!0);return t.jsxs(f,{children:[t.jsx(be,{variant:"outline",onClick:()=>n(!0),children:"Reopen"}),e?t.jsx(o,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>n(!1),closeLabel:"Dismiss pending action"}):null]})}const w={render:()=>t.jsx(he,{}),play:async({canvasElement:e})=>{const n=y(e);await s(n.getByRole("status")).toBeInTheDocument(),await E.click(n.getByRole("button",{name:"Dismiss pending action"})),await s(n.queryByRole("status")).not.toBeInTheDocument(),await E.click(n.getByRole("button",{name:"Reopen"})),await s(n.getByRole("status")).toBeInTheDocument()}},h={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>t.jsx(f,{children:t.jsx(o,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const n=y(e),r=n.getByRole("status",{name:"Release readiness alert"});await s(r).toBeInTheDocument(),await s(n.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},x={render:()=>t.jsxs(f,{children:[t.jsx("h3",{id:"alert-heading",style:{margin:0},children:"Release readiness heading"}),t.jsx(o,{title:"Release readiness",description:"Status copy inherits visible heading naming.",ariaLabel:"Fallback release readiness alert",ariaLabelledBy:"alert-heading"})]}),play:async({canvasElement:e})=>{const r=y(e).getByRole("status",{name:"Release readiness heading"});await s(r).toHaveAttribute("aria-labelledby","alert-heading"),await s(r).not.toHaveAttribute("aria-label")}},B={render:()=>t.jsxs(f,{children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),t.jsx("button",{type:"button",children:"Before alert close"}),t.jsx(o,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const n=y(e),r=await n.findByRole("button",{name:"Before alert close"}),u=n.getByRole("button",{name:"Focus intent dismiss"});await E.click(r),await E.tab(),await s(u).toHaveFocus(),await s(u).toHaveAttribute("data-focus-visible","true"),R.mouseDown(u,{button:0,ctrlKey:!0}),await s(u).toHaveAttribute("data-focus-visible","true")}},k={render:()=>t.jsx(f,{children:t.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const r=y(e).getByRole("button",{name:"Pressed-state dismiss"});r.focus(),await s(r).toHaveFocus(),await s(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),R.keyDown(r,{key:"Enter",ctrlKey:!0}),await s(r).not.toHaveAttribute("data-pressed"),R.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed"),R.keyDown(r,{key:"Enter",keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed")}};var _,O,W;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(W=(O=g.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var z,U,Y;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(Y=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,G,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,se;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ce;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Se=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","LabelledByPrecedence","FocusIntentReentry","CloseButtonKeyboardPressedState"];export{h as AccessibilityMetadata,k as CloseButtonKeyboardPressedState,g as Default,w as Dismissible,B as FocusIntentReentry,x as LabelledByPrecedence,v as ToneMatrix,Se as __namedExportsOrder,Ae as default};
