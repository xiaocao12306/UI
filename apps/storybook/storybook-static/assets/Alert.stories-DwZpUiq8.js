import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as ce}from"./Button-Bcz0jJFO.js";import{within as E,expect as s,fireEvent as B,userEvent as k}from"./index-DgAF9SIF.js";import{S as le}from"./storyShowcase-Bw5VyCj0.js";const ue={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function o({tone:t="info",title:n,description:r,live:u,ariaLabel:R,onClose:d,closeLabel:S="Dismiss alert",children:A,style:ne,...ae}){const[re,D]=c.useState(!1),[I,f]=c.useState(!1),[K,C]=c.useState(!1),[j,l]=c.useState(!1),T=c.useRef(null),p=c.useRef(!1),L=t==="danger"?"alert":"status",se=u??(L==="alert"?"assertive":"polite"),oe=typeof S=="string"&&S.trim().length>0?S.trim():"Dismiss alert",ie=typeof R=="string"&&R.trim().length>0?R.trim():void 0;return c.useEffect(()=>{d||(D(!1),f(!1),C(!1),l(!1))},[d]),c.useEffect(()=>{var P;if(!d)return;const e=((P=T.current)==null?void 0:P.ownerDocument)??document,F=i=>{i.metaKey||i.altKey||i.ctrlKey||(p.current=!0)},m=i=>{"button"in i&&typeof i.button=="number"&&i.button!==0||"ctrlKey"in i&&i.ctrlKey||(p.current=!1)};return e.addEventListener("keydown",F,!0),e.addEventListener("pointerdown",m,!0),e.addEventListener("mousedown",m,!0),e.addEventListener("touchstart",m,!0),()=>{e.removeEventListener("keydown",F,!0),e.removeEventListener("pointerdown",m,!0),e.removeEventListener("mousedown",m,!0),e.removeEventListener("touchstart",m,!0)}},[d]),a.jsx("div",{role:L,"aria-live":se,"aria-label":ie,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...ue[t],...ne},...ae,children:a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"grid",gap:r||A?4:0},children:[n?a.jsx("strong",{children:n}):null,r?a.jsx("div",{children:r}):null,A?a.jsx("div",{children:A}):null]}),d?a.jsx("button",{ref:T,type:"button","aria-label":oe,"aria-keyshortcuts":"Enter Space","data-focus-visible":I?"true":void 0,"data-pressed":j?"true":void 0,onClick:()=>d(),onFocus:e=>{D(!0),f(pe(e.currentTarget,p.current))},onBlur:()=>{D(!1),f(!1),l(!1)},onMouseEnter:()=>{C(!0)},onMouseLeave:()=>{C(!1),l(!1)},onMouseDown:e=>{e.button!==0||e.ctrlKey||(p.current=!1,f(!1),l(!0))},onMouseUp:e=>{e.button===0&&l(!1)},onPointerDown:e=>{e.button!==0||e.ctrlKey||(p.current=!1,f(!1))},onKeyDown:e=>{p.current=!0,!de(e)&&((e.ctrlKey||e.metaKey||e.altKey)&&H(e.key)||H(e.key)&&l(!0))},onKeyUp:e=>{H(e.key)&&l(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${K?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:j?"color-mix(in srgb, currentColor 24%, transparent)":K?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:j?"translateY(1px)":"translateY(0)",boxShadow:re&&I?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function H(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function de(t){const n=t.nativeEvent;return n.isComposing?!0:typeof n.keyCode=="number"&&n.keyCode===229}function pe(t,n){try{return t.matches(":focus-visible")||n}catch{return n}}o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function b({children:t}){return a.jsx(le,{maxWidth:"min(100%, 560px)",children:t})}const we={title:"Feedback/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},y={},v={render:()=>a.jsxs(b,{children:[a.jsx(o,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),a.jsx(o,{tone:"success",title:"Success",description:"Release published successfully."}),a.jsx(o,{tone:"warning",title:"Warning",description:"Manual approval is required."}),a.jsx(o,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function me(){const[t,n]=c.useState(!0);return a.jsxs(b,{children:[a.jsx(ce,{variant:"outline",onClick:()=>n(!0),children:"Reopen"}),t?a.jsx(o,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>n(!1),closeLabel:"Dismiss pending action"}):null]})}const g={render:()=>a.jsx(me,{}),play:async({canvasElement:t})=>{const n=E(t);await s(n.getByRole("status")).toBeInTheDocument(),await k.click(n.getByRole("button",{name:"Dismiss pending action"})),await s(n.queryByRole("status")).not.toBeInTheDocument(),await k.click(n.getByRole("button",{name:"Reopen"})),await s(n.getByRole("status")).toBeInTheDocument()}},w={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:t=>a.jsx(b,{children:a.jsx(o,{...t,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:t})=>{const n=E(t),r=n.getByRole("status",{name:"Release readiness alert"});await s(r).toBeInTheDocument(),await s(n.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},h={render:()=>a.jsxs(b,{children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),a.jsx("button",{type:"button",children:"Before alert close"}),a.jsx(o,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:t})=>{const n=E(t),r=await n.findByRole("button",{name:"Before alert close"}),u=n.getByRole("button",{name:"Focus intent dismiss"});await k.click(r),await k.tab(),await s(u).toHaveFocus(),await s(u).toHaveAttribute("data-focus-visible","true"),B.mouseDown(u,{button:0,ctrlKey:!0}),await s(u).toHaveAttribute("data-focus-visible","true")}},x={render:()=>a.jsx(b,{children:a.jsx(o,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space, and ignore IME composition keys.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:t})=>{const r=E(t).getByRole("button",{name:"Pressed-state dismiss"});r.focus(),await s(r).toHaveFocus(),await s(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),B.keyDown(r,{key:"Enter",ctrlKey:!0}),await s(r).not.toHaveAttribute("data-pressed"),B.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed"),B.keyDown(r,{key:"Enter",keyCode:229,which:229}),await s(r).not.toHaveAttribute("data-pressed")}};var M,q,N;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(N=(q=y.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var V,_,O;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(closeButton, {
      button: 0,
      ctrlKey: true
    });
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
