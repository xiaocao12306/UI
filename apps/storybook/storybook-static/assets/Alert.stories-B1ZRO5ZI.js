import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as ie}from"./Button-COG9o64O.js";import{within as R,expect as o,fireEvent as ce,userEvent as B}from"./index-DgAF9SIF.js";import{S as le}from"./storyShowcase-Bw5VyCj0.js";const ue={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function s({tone:a="info",title:n,description:r,live:b,ariaLabel:k,onClose:u,closeLabel:S="Dismiss alert",children:E,style:te,...ae}){const[ne,D]=i.useState(!1),[T,m]=i.useState(!1),[I,A]=i.useState(!1),[C,c]=i.useState(!1),L=i.useRef(null),d=i.useRef(!1),F=a==="danger"?"alert":"status",re=b??(F==="alert"?"assertive":"polite"),se=typeof S=="string"&&S.trim().length>0?S.trim():"Dismiss alert",oe=typeof k=="string"&&k.trim().length>0?k.trim():void 0;return i.useEffect(()=>{u||(D(!1),m(!1),A(!1),c(!1))},[u]),i.useEffect(()=>{var H;if(!u)return;const t=((H=L.current)==null?void 0:H.ownerDocument)??document,P=l=>{l.metaKey||l.altKey||l.ctrlKey||(d.current=!0)},p=l=>{"button"in l&&typeof l.button=="number"&&l.button!==0||(d.current=!1)};return t.addEventListener("keydown",P,!0),t.addEventListener("pointerdown",p,!0),t.addEventListener("mousedown",p,!0),t.addEventListener("touchstart",p,!0),()=>{t.removeEventListener("keydown",P,!0),t.removeEventListener("pointerdown",p,!0),t.removeEventListener("mousedown",p,!0),t.removeEventListener("touchstart",p,!0)}},[u]),e.jsx("div",{role:F,"aria-live":re,"aria-label":oe,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...ue[a],...te},...ae,children:e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"grid",gap:r||E?4:0},children:[n?e.jsx("strong",{children:n}):null,r?e.jsx("div",{children:r}):null,E?e.jsx("div",{children:E}):null]}),u?e.jsx("button",{ref:L,type:"button","aria-label":se,"aria-keyshortcuts":"Enter Space","data-focus-visible":T?"true":void 0,"data-pressed":C?"true":void 0,onClick:()=>u(),onFocus:t=>{D(!0),m(de(t.currentTarget,d.current))},onBlur:()=>{D(!1),m(!1),c(!1)},onMouseEnter:()=>{A(!0)},onMouseLeave:()=>{A(!1),c(!1)},onMouseDown:t=>{t.button===0&&(d.current=!1,m(!1),c(!0))},onMouseUp:t=>{t.button===0&&c(!1)},onPointerDown:t=>{t.button===0&&(d.current=!1,m(!1))},onKeyDown:t=>{d.current=!0,!((t.ctrlKey||t.metaKey||t.altKey)&&j(t.key))&&j(t.key)&&c(!0)},onKeyUp:t=>{j(t.key)&&c(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${I?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:C?"color-mix(in srgb, currentColor 24%, transparent)":I?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:C?"translateY(1px)":"translateY(0)",boxShadow:ne&&T?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function j(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function de(a,n){try{return a.matches(":focus-visible")||n}catch{return n}}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function f({children:a}){return e.jsx(le,{maxWidth:"min(100%, 560px)",children:a})}const ye={title:"Feedback/Alert",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},g={},v={render:()=>e.jsxs(f,{children:[e.jsx(s,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),e.jsx(s,{tone:"success",title:"Success",description:"Release published successfully."}),e.jsx(s,{tone:"warning",title:"Warning",description:"Manual approval is required."}),e.jsx(s,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function pe(){const[a,n]=i.useState(!0);return e.jsxs(f,{children:[e.jsx(ie,{variant:"outline",onClick:()=>n(!0),children:"Reopen"}),a?e.jsx(s,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>n(!1),closeLabel:"Dismiss pending action"}):null]})}const y={render:()=>e.jsx(pe,{}),play:async({canvasElement:a})=>{const n=R(a);await o(n.getByRole("status")).toBeInTheDocument(),await B.click(n.getByRole("button",{name:"Dismiss pending action"})),await o(n.queryByRole("status")).not.toBeInTheDocument(),await B.click(n.getByRole("button",{name:"Reopen"})),await o(n.getByRole("status")).toBeInTheDocument()}},w={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:a=>e.jsx(f,{children:e.jsx(s,{...a,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:a})=>{const n=R(a),r=n.getByRole("status",{name:"Release readiness alert"});await o(r).toBeInTheDocument(),await o(n.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},x={render:()=>e.jsxs(f,{children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),e.jsx("button",{type:"button",children:"Before alert close"}),e.jsx(s,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:a})=>{const n=R(a),r=await n.findByRole("button",{name:"Before alert close"}),b=n.getByRole("button",{name:"Focus intent dismiss"});await B.click(r),await B.tab(),await o(b).toHaveFocus(),await o(b).toHaveAttribute("data-focus-visible","true")}},h={render:()=>e.jsx(f,{children:e.jsx(s,{tone:"warning",title:"Pending action",description:"Close button should expose pressed-state feedback only for unmodified Enter/Space.",onClose:()=>{},closeLabel:"Pressed-state dismiss"})}),play:async({canvasElement:a})=>{const r=R(a).getByRole("button",{name:"Pressed-state dismiss"});r.focus(),await o(r).toHaveFocus(),await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),ce.keyDown(r,{key:"Enter",ctrlKey:!0}),await o(r).not.toHaveAttribute("data-pressed")}};var K,q,M;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(M=(q=g.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var N,V,_;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var O,W,z;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var U,Y,$;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="warning" title="Pending action" description="Close button should expose pressed-state feedback only for unmodified Enter/Space." onClose={() => {}} closeLabel="Pressed-state dismiss" />
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
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const we=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","FocusIntentReentry","CloseButtonKeyboardPressedState"];export{w as AccessibilityMetadata,h as CloseButtonKeyboardPressedState,g as Default,y as Dismissible,x as FocusIntentReentry,v as ToneMatrix,we as __namedExportsOrder,ye as default};
