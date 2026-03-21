import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{B as ae}from"./Button-COG9o64O.js";import{within as j,expect as l,userEvent as x}from"./index-DgAF9SIF.js";import{S as ne}from"./storyShowcase-Bw5VyCj0.js";const se={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function s({tone:r="info",title:a,description:o,live:f,ariaLabel:B,onClose:u,closeLabel:R="Dismiss alert",children:k,style:Q,...X}){const[Z,S]=n.useState(!1),[C,m]=n.useState(!1),[T,D]=n.useState(!1),[E,i]=n.useState(!1),I=n.useRef(null),d=n.useRef(!1),L=r==="danger"?"alert":"status",ee=f??(L==="alert"?"assertive":"polite"),te=typeof R=="string"&&R.trim().length>0?R.trim():"Dismiss alert",re=typeof B=="string"&&B.trim().length>0?B.trim():void 0;return n.useEffect(()=>{u||(S(!1),m(!1),D(!1),i(!1))},[u]),n.useEffect(()=>{var q;if(!u)return;const e=((q=I.current)==null?void 0:q.ownerDocument)??document,F=c=>{c.metaKey||c.altKey||c.ctrlKey||(d.current=!0)},p=c=>{"button"in c&&typeof c.button=="number"&&c.button!==0||(d.current=!1)};return e.addEventListener("keydown",F,!0),e.addEventListener("pointerdown",p,!0),e.addEventListener("mousedown",p,!0),e.addEventListener("touchstart",p,!0),()=>{e.removeEventListener("keydown",F,!0),e.removeEventListener("pointerdown",p,!0),e.removeEventListener("mousedown",p,!0),e.removeEventListener("touchstart",p,!0)}},[u]),t.jsx("div",{role:L,"aria-live":ee,"aria-label":re,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...se[r],...Q},...X,children:t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"grid",gap:o||k?4:0},children:[a?t.jsx("strong",{children:a}):null,o?t.jsx("div",{children:o}):null,k?t.jsx("div",{children:k}):null]}),u?t.jsx("button",{ref:I,type:"button","aria-label":te,"aria-keyshortcuts":"Enter Space","data-focus-visible":C?"true":void 0,"data-pressed":E?"true":void 0,onClick:()=>u(),onFocus:e=>{S(!0),m(oe(e.currentTarget,d.current))},onBlur:()=>{S(!1),m(!1),i(!1)},onMouseEnter:()=>{D(!0)},onMouseLeave:()=>{D(!1),i(!1)},onMouseDown:e=>{e.button===0&&(d.current=!1,m(!1),i(!0))},onMouseUp:e=>{e.button===0&&i(!1)},onPointerDown:e=>{e.button===0&&(d.current=!1,m(!1))},onKeyDown:e=>{d.current=!0,!((e.ctrlKey||e.metaKey||e.altKey)&&A(e.key))&&A(e.key)&&i(!0)},onKeyUp:e=>{A(e.key)&&i(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:`1px solid ${T?"color-mix(in srgb, currentColor 48%, transparent)":"color-mix(in srgb, currentColor 35%, transparent)"}`,background:E?"color-mix(in srgb, currentColor 24%, transparent)":T?"color-mix(in srgb, currentColor 16%, transparent)":"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1,transform:E?"translateY(1px)":"translateY(0)",boxShadow:Z&&C?"0 0 0 3px color-mix(in srgb, currentColor 26%, transparent)":"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]})})}function A(r){return r==="Enter"||r===" "||r==="Space"||r==="Spacebar"}function oe(r,a){try{return r.matches(":focus-visible")||a}catch{return a}}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function h({children:r}){return t.jsx(ne,{maxWidth:"min(100%, 560px)",children:r})}const me={title:"Feedback/Alert",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},b={},g={render:()=>t.jsxs(h,{children:[t.jsx(s,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),t.jsx(s,{tone:"success",title:"Success",description:"Release published successfully."}),t.jsx(s,{tone:"warning",title:"Warning",description:"Manual approval is required."}),t.jsx(s,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function ie(){const[r,a]=n.useState(!0);return t.jsxs(h,{children:[t.jsx(ae,{variant:"outline",onClick:()=>a(!0),children:"Reopen"}),r?t.jsx(s,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>a(!1),closeLabel:"Dismiss pending action"}):null]})}const v={render:()=>t.jsx(ie,{}),play:async({canvasElement:r})=>{const a=j(r);await l(a.getByRole("status")).toBeInTheDocument(),await x.click(a.getByRole("button",{name:"Dismiss pending action"})),await l(a.queryByRole("status")).not.toBeInTheDocument(),await x.click(a.getByRole("button",{name:"Reopen"})),await l(a.getByRole("status")).toBeInTheDocument()}},y={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:r=>t.jsx(h,{children:t.jsx(s,{...r,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:r})=>{const a=j(r),o=a.getByRole("status",{name:"Release readiness alert"});await l(o).toBeInTheDocument(),await l(a.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}},w={render:()=>t.jsxs(h,{children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores close-button focus-visible state."}),t.jsx("button",{type:"button",children:"Before alert close"}),t.jsx(s,{tone:"warning",title:"Pending action",description:"Close affordance should restore keyboard focus ring on re-entry.",onClose:()=>{},closeLabel:"Focus intent dismiss"})]}),play:async({canvasElement:r})=>{const a=j(r),o=await a.findByRole("button",{name:"Before alert close"}),f=a.getByRole("button",{name:"Focus intent dismiss"});await x.click(o),await x.tab(),await l(f).toHaveFocus(),await l(f).toHaveAttribute("data-focus-visible","true")}};var M,K,H;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(H=(K=b.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var P,N,V;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(V=(N=g.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,O,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(O=v.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var z,U,Y;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(U=y.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,G,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const fe=["Default","ToneMatrix","Dismissible","AccessibilityMetadata","FocusIntentReentry"];export{y as AccessibilityMetadata,b as Default,v as Dismissible,w as FocusIntentReentry,g as ToneMatrix,fe as __namedExportsOrder,me as default};
