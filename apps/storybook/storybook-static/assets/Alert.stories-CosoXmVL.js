import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as le}from"./Button-Bcz0jJFO.js";import{within as E,expect as s,fireEvent as B,userEvent as k}from"./index-DgAF9SIF.js";import{S as ue}from"./storyShowcase-Bw5VyCj0.js";const de={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function o({tone:e="info",title:n,description:r,live:u,ariaLabel:R,onClose:d,closeLabel:S="Dismiss alert",children:A,style:ae,...re}){const[se,D]=i.useState(!1),[I,f]=i.useState(!1),[K,C]=i.useState(!1),[j,l]=i.useState(!1),T=i.useRef(null),p=i.useRef(!1),L=e==="danger"?"alert":"status",oe=u??(L==="alert"?"assertive":"polite"),ie=typeof S=="string"&&S.trim().length>0?S.trim():"Dismiss alert",ce=typeof R=="string"&&R.trim().length>0?R.trim():void 0;return i.useEffect(()=>{d||(D(!1),f(!1),C(!1),l(!1))},[d]),i.useEffect(()=>{var P;if(!d)return;const t=((P=T.current)==null?void 0:P.ownerDocument)??document,F=c=>{c.metaKey||c.altKey||c.ctrlKey||(p.current=!0)},m=c=>{"button"in c&&!M(c.button)||"ctrlKey"in c&&c.ctrlKey||(p.current=!1)};return t.addEventListener("keydown",F,!0),t.addEventListener("pointerdown",m,!0),t.addEventListener("mousedown",m,!0),t.addEventListener("touchstart",m,!0),()=>{t.removeEventListener("keydown",F,!0),t.removeEventListener("pointerdown",m,!0),t.removeEventListener("mousedown",m,!0),t.removeEventListener("touchstart",m,!0)}},[d]),a.jsx("div",{role:L,"aria-live":oe,"aria-label":ce,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...de[e],...ae},...re,children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"grid",gap:r||A?4:0},children:[n?a.jsx("strong",{children:n}):null,r?a.jsx("div",{children:r}):null,A?a.jsx("div",{children:A}):null]}),d?a.jsx("button",{ref:T,type:"button","aria-label":ie,"aria-keyshortcuts":"Enter Space","data-focus-visible":I?"true":void 0,"data-pressed":j?"true":void 0,onClick:()=>d(),onFocus:t=>{D(!0),f(me(t.currentTarget,p.current))},onBlur:()=>{D(!1),f(!1),l(!1)},onMouseEnter:()=>{C(!0)},onMouseLeave:()=>{C(!1),l(!1)},onMouseDown:t=>{t.button!==0||t.ctrlKey||(p.current=!1,f(!1),l(!0))},onMouseUp:t=>{t.button===0&&l(!1)},onPointerDown:t=>{!M(t.button)||t.ctrlKey||(p.current=!1,f(!1))},onKeyDown:t=>{p.current=!0,!pe(t)&&((t.ctrlKey||t.metaKey||t.altKey)&&H(t.key)||H(t.key)&&l(!0))},onKeyUp:t=>{H(t.key)&&l(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${K?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:j?"color-mix(in srgb, currentColor 24%, transparent)":K?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:j?"translateY(1px)":"translateY(0)",boxShadow:se&&I?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function H(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function pe(e){const n=e.nativeEvent;return n.isComposing?!0:typeof n.keyCode=="number"&&n.keyCode===229}function me(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function M(e){return typeof e!="number"||e<=0}o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function b({children:e}){return a.jsx(ue,{maxWidth:"min(100%, 560px)",children:e})}const he={title:"Feedback/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},y={},v={render:()=>a.jsxs(b,{children:[a.jsx(o,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),a.jsx(o,{tone:"success",title:"Success",description:"Release published successfully."}),a.jsx(o,{tone:"warning",title:"Warning",description:"Manual approval is required."}),a.jsx(o,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function fe(){const[e,n]=i.useState(!0);return a.jsxs(b,{children:[a.jsx(le,{variant:"outline",onClick:()=>n(!0),children:"Reopen"}),e?a.jsx(o,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>n(!1),closeLabel:"Dismiss pending action"}):null]})}const g={render:()=>a.jsx(fe,{}),play:async({canvasElement:e})=>{const n=E(e);await s(n.getByRole("status")).toBeInTheDocument(),await k.click(n.getByRole("button",{name:"Dismiss pending action"})),await s(n.queryByRole("status")).not.toBeInTheDocument(),await k.click(n.getByRole("button",{name:"Reopen"})),await s(n.getByRole("status")).toBeInTheDocument()}},w={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>a.jsx(b,{children:a.jsx(o,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const n=E(e),r=n.getByRole("status",{name:"Release readiness alert"});await s(r).toBeInTheDocument(),await s(n.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},h={render:()=>a.jsxs(b,{children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),a.jsx("button",{type:"button",children:"Before alert close"}),a.jsx(o,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const n=E(e),r=await n.findByRole("button",{name:"Before alert close"}),u=n.getByRole("button",{name:"Focus intent dismiss"});await k.click(r),await k.tab(),await s(u).toHaveFocus(),await s(u).toHaveAttribute("data-focus-visible","true"),B.mouseDown(u,{button:0,ctrlKey:!0}),await s(u).toHaveAttribute("data-focus-visible","true")}},x={render:()=>a.jsx(b,{children:a.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const r=E(e).getByRole("button",{name:"Pressed-state dismiss"});r.focus(),await s(r).toHaveFocus(),await s(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),B.keyDown(r,{key:"Enter",ctrlKey:!0}),await s(r).not.toHaveAttribute("data-pressed"),B.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed"),B.keyDown(r,{key:"Enter",keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed")}};var q,N,V;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(V=(N=y.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,O,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(W=(O=v.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var z,U,Y;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,G,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const xe=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","FocusIntentReentry","CloseButtonKeyboardPressedState"];export{w as AccessibilityMetadata,x as CloseButtonKeyboardPressedState,y as Default,g as Dismissible,h as FocusIntentReentry,v as ToneMatrix,xe as __namedExportsOrder,he as default};
