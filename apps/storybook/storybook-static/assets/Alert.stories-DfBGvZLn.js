import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as ce}from"./Button-C2hvm-Aa.js";import{within as B,expect as s,fireEvent as j,userEvent as k}from"./index-DgAF9SIF.js";import{S as le}from"./storyShowcase-Bw5VyCj0.js";const ue={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function o({tone:e="info",title:t,description:r,live:b,ariaLabel:E,onClose:u,closeLabel:R="Dismiss alert",children:S,style:ne,...ae}){const[re,A]=i.useState(!1),[T,m]=i.useState(!1),[H,C]=i.useState(!1),[D,c]=i.useState(!1),L=i.useRef(null),d=i.useRef(!1),F=e==="danger"?"alert":"status",se=b??(F==="alert"?"assertive":"polite"),oe=typeof R=="string"&&R.trim().length>0?R.trim():"Dismiss alert",ie=typeof E=="string"&&E.trim().length>0?E.trim():void 0;return i.useEffect(()=>{u||(A(!1),m(!1),C(!1),c(!1))},[u]),i.useEffect(()=>{var K;if(!u)return;const n=((K=L.current)==null?void 0:K.ownerDocument)??document,P=l=>{l.metaKey||l.altKey||l.ctrlKey||(d.current=!0)},p=l=>{"button"in l&&typeof l.button=="number"&&l.button!==0||(d.current=!1)};return n.addEventListener("keydown",P,!0),n.addEventListener("pointerdown",p,!0),n.addEventListener("mousedown",p,!0),n.addEventListener("touchstart",p,!0),()=>{n.removeEventListener("keydown",P,!0),n.removeEventListener("pointerdown",p,!0),n.removeEventListener("mousedown",p,!0),n.removeEventListener("touchstart",p,!0)}},[u]),a.jsx("div",{role:F,"aria-live":se,"aria-label":ie,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...ue[e],...ne},...ae,children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"grid",gap:r||S?4:0},children:[t?a.jsx("strong",{children:t}):null,r?a.jsx("div",{children:r}):null,S?a.jsx("div",{children:S}):null]}),u?a.jsx("button",{ref:L,type:"button","aria-label":oe,"aria-keyshortcuts":"Enter Space","data-focus-visible":T?"true":void 0,"data-pressed":D?"true":void 0,onClick:()=>u(),onFocus:n=>{A(!0),m(pe(n.currentTarget,d.current))},onBlur:()=>{A(!1),m(!1),c(!1)},onMouseEnter:()=>{C(!0)},onMouseLeave:()=>{C(!1),c(!1)},onMouseDown:n=>{n.button===0&&(d.current=!1,m(!1),c(!0))},onMouseUp:n=>{n.button===0&&c(!1)},onPointerDown:n=>{n.button===0&&(d.current=!1,m(!1))},onKeyDown:n=>{d.current=!0,!de(n)&&((n.ctrlKey||n.metaKey||n.altKey)&&I(n.key)||I(n.key)&&c(!0))},onKeyUp:n=>{I(n.key)&&c(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${H?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:D?"color-mix(in srgb, currentColor 24%, transparent)":H?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:D?"translateY(1px)":"translateY(0)",boxShadow:re&&T?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function I(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function de(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function pe(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function f({children:e}){return a.jsx(le,{maxWidth:"min(100%, 560px)",children:e})}const we={title:"Feedback/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},y={},v={render:()=>a.jsxs(f,{children:[a.jsx(o,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),a.jsx(o,{tone:"success",title:"Success",description:"Release published successfully."}),a.jsx(o,{tone:"warning",title:"Warning",description:"Manual approval is required."}),a.jsx(o,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function me(){const[e,t]=i.useState(!0);return a.jsxs(f,{children:[a.jsx(ce,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),e?a.jsx(o,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>t(!1),closeLabel:"Dismiss pending action"}):null]})}const g={render:()=>a.jsx(me,{}),play:async({canvasElement:e})=>{const t=B(e);await s(t.getByRole("status")).toBeInTheDocument(),await k.click(t.getByRole("button",{name:"Dismiss pending action"})),await s(t.queryByRole("status")).not.toBeInTheDocument(),await k.click(t.getByRole("button",{name:"Reopen"})),await s(t.getByRole("status")).toBeInTheDocument()}},w={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:e=>a.jsx(f,{children:a.jsx(o,{...e,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:e})=>{const t=B(e),r=t.getByRole("status",{name:"Release readiness alert"});await s(r).toBeInTheDocument(),await s(t.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},h={render:()=>a.jsxs(f,{children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),a.jsx("button",{type:"button",children:"Before alert close"}),a.jsx(o,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:e})=>{const t=B(e),r=await t.findByRole("button",{name:"Before alert close"}),b=t.getByRole("button",{name:"Focus intent dismiss"});await k.click(r),await k.tab(),await s(b).toHaveFocus(),await s(b).toHaveAttribute("data-focus-visible","true")}},x={render:()=>a.jsx(f,{children:a.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:e})=>{const r=B(e).getByRole("button",{name:"Pressed-state dismiss"});r.focus(),await s(r).toHaveFocus(),await s(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),j.keyDown(r,{key:"Enter",ctrlKey:!0}),await s(r).not.toHaveAttribute("data-pressed"),j.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed"),j.keyDown(r,{key:"Enter",keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed")}};var M,q,N;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(N=(q=y.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var V,_,O;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(O=(_=v.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var W,z,U;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(z=g.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var Y,$,G;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=($=w.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const he=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","FocusIntentReentry","CloseButtonKeyboardPressedState"];export{w as AccessibilityMetadata,x as CloseButtonKeyboardPressedState,y as Default,g as Dismissible,h as FocusIntentReentry,v as ToneMatrix,he as __namedExportsOrder,we as default};
