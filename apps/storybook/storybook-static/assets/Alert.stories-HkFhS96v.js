import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-BWu4c2F4.js";import{B as _}from"./Button-COG9o64O.js";import{within as T,expect as n,userEvent as f}from"./index-DgAF9SIF.js";import{S as H}from"./storyShowcase-Bw5VyCj0.js";const O={info:{background:"var(--aurora-feedback-info-bg)",borderColor:"var(--aurora-feedback-info-border)",color:"var(--aurora-feedback-info-text)"},success:{background:"var(--aurora-feedback-success-bg)",borderColor:"var(--aurora-feedback-success-border)",color:"var(--aurora-feedback-success-text)"},warning:{background:"var(--aurora-feedback-warning-bg)",borderColor:"var(--aurora-feedback-warning-border)",color:"var(--aurora-feedback-warning-text)"},danger:{background:"var(--aurora-feedback-danger-bg)",borderColor:"var(--aurora-feedback-danger-border)",color:"var(--aurora-feedback-danger-text)"}};function r({tone:t="info",title:a,description:s,live:E,ariaLabel:d,onClose:g,closeLabel:u="Dismiss alert",children:p,style:C,...I}){const b=t==="danger"?"alert":"status",q=E??(b==="alert"?"assertive":"polite"),M=typeof u=="string"&&u.trim().length>0?u.trim():"Dismiss alert",N=typeof d=="string"&&d.trim().length>0?d.trim():void 0;return e.jsx("div",{role:b,"aria-live":q,"aria-label":N,style:{borderRadius:"var(--aurora-radius-md)",border:"1px solid",padding:"10px 12px",display:"grid",gap:6,...O[t],...C},...I,children:e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"start",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"grid",gap:s||p?4:0},children:[a?e.jsx("strong",{children:a}):null,s?e.jsx("div",{children:s}):null,p?e.jsx("div",{children:p}):null]}),g?e.jsx("button",{type:"button","aria-label":M,"aria-keyshortcuts":"Enter Space",onClick:()=>g(),style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid color-mix(in srgb, currentColor 35%, transparent)",background:"transparent",color:"inherit",cursor:"pointer",width:24,height:24,lineHeight:1},children:"×"}):null]})})}r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Dismiss alert"',computed:!1}}}};function m({children:t}){return e.jsx(H,{maxWidth:"min(100%, 560px)",children:t})}const G={title:"Feedback/Alert",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Alert provides status/alert live-region semantics, tone variants, and optional dismiss actions for operational notices."}}},args:{tone:"info",title:"Release queued",description:"Deployment starts after quality checks complete."}},i={},o={render:()=>e.jsxs(m,{children:[e.jsx(r,{tone:"info",title:"Info",description:"Build is waiting for CI capacity."}),e.jsx(r,{tone:"success",title:"Success",description:"Release published successfully."}),e.jsx(r,{tone:"warning",title:"Warning",description:"Manual approval is required."}),e.jsx(r,{tone:"danger",title:"Danger",description:"Rollback triggered due to failed migration."})]})};function W(){const[t,a]=L.useState(!0);return e.jsxs(m,{children:[e.jsx(_,{variant:"outline",onClick:()=>a(!0),children:"Reopen"}),t?e.jsx(r,{tone:"warning",title:"Pending action",description:"Set NPM_TOKEN before triggering real publish.",onClose:()=>a(!1),closeLabel:"Dismiss pending action"}):null]})}const l={render:()=>e.jsx(W,{}),play:async({canvasElement:t})=>{const a=T(t);await n(a.getByRole("status")).toBeInTheDocument(),await f.click(a.getByRole("button",{name:"Dismiss pending action"})),await n(a.queryByRole("status")).not.toBeInTheDocument(),await f.click(a.getByRole("button",{name:"Reopen"})),await n(a.getByRole("status")).toBeInTheDocument()}},c={args:{title:"Release readiness",description:"Status copy is exposed through an explicit accessible name.",ariaLabel:"Release readiness alert"},render:t=>e.jsx(m,{children:e.jsx(r,{...t,onClose:()=>{},closeLabel:"Dismiss release readiness alert"})}),play:async({canvasElement:t})=>{const a=T(t),s=a.getByRole("status",{name:"Release readiness alert"});await n(s).toBeInTheDocument(),await n(a.getByRole("button",{name:"Dismiss release readiness alert"})).toHaveAttribute("aria-keyshortcuts","Enter Space")}};var v,y,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,w,R;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <AlertShowcase>
      <Alert tone="info" title="Info" description="Build is waiting for CI capacity." />
      <Alert tone="success" title="Success" description="Release published successfully." />
      <Alert tone="warning" title="Warning" description="Manual approval is required." />
      <Alert tone="danger" title="Danger" description="Rollback triggered due to failed migration." />
    </AlertShowcase>
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var k,D,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var j,S,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const J=["Default","ToneMatrix","Dismissible","AccessibilityMetadata"];export{c as AccessibilityMetadata,i as Default,l as Dismissible,o as ToneMatrix,J as __namedExportsOrder,G as default};
