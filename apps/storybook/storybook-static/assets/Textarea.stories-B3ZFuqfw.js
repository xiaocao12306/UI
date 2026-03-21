import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as t}from"./Textarea-9fBAoVFj.js";import{within as m,expect as n,userEvent as u}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const M={title:"Form/Textarea",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Textarea shares Input token styling while supporting multiline editing, invalid state wiring, and disabled/read-only boundaries."}}},args:{"aria-label":"Message",placeholder:"Write release notes for this version..."}},l={args:{defaultValue:""},play:async({canvasElement:r})=>{const a=m(r).getByRole("textbox",{name:"Message"});await u.click(a),await u.keyboard("Delivery-ready"),await n(a).toHaveValue("Delivery-ready")}},i={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(t,{"aria-label":"Release summary",defaultValue:"Needs QA validation.",invalid:!0,"aria-describedby":"release-summary-help release-summary-error"}),e.jsx("p",{id:"release-summary-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Include impact, rollback plan, and owner contact."}),e.jsx("p",{id:"release-summary-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Summary cannot be shorter than 30 characters."})]})},o={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"storybook-textarea-blank-label",style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary label"}),e.jsx(t,{id:"storybook-textarea-blank-label","aria-label":"   ",defaultValue:"Release summary draft..."})]}),play:async({canvasElement:r})=>{const a=m(r).getByRole("textbox",{name:"Release summary label"});await n(a).not.toHaveAttribute("aria-label")}},d={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"storybook-textarea-heading",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary heading"}),e.jsx(t,{"aria-label":"Fallback release summary","aria-labelledby":"storybook-textarea-heading",defaultValue:"Heading-driven label should win."})]}),play:async({canvasElement:r})=>{const a=m(r).getByRole("textbox",{name:"Release summary heading"});await n(a).toHaveAttribute("aria-labelledby","storybook-textarea-heading"),await n(a).not.toHaveAttribute("aria-label")}},c={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Read-only template"}),e.jsx(t,{"aria-label":"Read-only template",readOnly:!0,defaultValue:`Release owner: Platform Team
Rollback: feature flag`})]}),e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Disabled while syncing"}),e.jsx(t,{"aria-label":"Disabled while syncing",disabled:!0,defaultValue:"Synchronizing from source of truth..."})]})]})},y={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores textarea focus-visible state."}),e.jsx("button",{type:"button",children:"Before textarea"}),e.jsx(t,{"aria-label":"Focus intent textarea",defaultValue:"Release summary draft"})]}),play:async({canvasElement:r})=>{const s=m(r),a=await s.findByRole("button",{name:"Before textarea"}),p=s.getByRole("textbox",{name:"Focus intent textarea"});await u.click(a),await u.tab(),await n(p).toHaveFocus(),await n(p).toHaveAttribute("data-focus-visible","true")}};var b,x,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultValue: ""
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", {
      name: "Message"
    });
    await userEvent.click(textarea);
    await userEvent.keyboard("Delivery-ready");
    await expect(textarea).toHaveValue("Delivery-ready");
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <Textarea aria-label="Release summary" defaultValue="Needs QA validation." invalid aria-describedby="release-summary-help release-summary-error" />
      <p id="release-summary-help" style={{
      margin: 0,
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Include impact, rollback plan, and owner contact.
      </p>
      <p id="release-summary-error" style={{
      margin: 0,
      color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",
      fontSize: 13
    }}>
        Summary cannot be shorter than 30 characters.
      </p>
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,R,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <label htmlFor="storybook-textarea-blank-label" style={{
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Release summary label
      </label>
      <Textarea id="storybook-textarea-blank-label" aria-label="   " defaultValue="Release summary draft..." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", {
      name: "Release summary label"
    });
    await expect(textarea).not.toHaveAttribute("aria-label");
  }
}`,...(k=(R=o.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var S,j,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <p id="storybook-textarea-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Release summary heading
      </p>
      <Textarea aria-label="Fallback release summary" aria-labelledby="storybook-textarea-heading" defaultValue="Heading-driven label should win." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", {
      name: "Release summary heading"
    });
    await expect(textarea).toHaveAttribute("aria-labelledby", "storybook-textarea-heading");
    await expect(textarea).not.toHaveAttribute("aria-label");
  }
}`,...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var z,E,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <div style={{
      display: "grid",
      gap: 6
    }}>
        <span style={{
        color: "var(--aurora-text-primary)",
        fontSize: 13
      }}>Read-only template</span>
        <Textarea aria-label="Read-only template" readOnly defaultValue={"Release owner: Platform Team\\nRollback: feature flag"} />
      </div>
      <div style={{
      display: "grid",
      gap: 6
    }}>
        <span style={{
        color: "var(--aurora-text-primary)",
        fontSize: 13
      }}>Disabled while syncing</span>
        <Textarea aria-label="Disabled while syncing" disabled defaultValue="Synchronizing from source of truth..." />
      </div>
    </div>
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var V,F,A;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores textarea
        focus-visible state.
      </p>
      <button type="button">Before textarea</button>
      <Textarea aria-label="Focus intent textarea" defaultValue="Release summary draft" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before textarea"
    });
    const textarea = canvas.getByRole("textbox", {
      name: "Focus intent textarea"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(textarea).toHaveFocus();
    await expect(textarea).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(A=(F=y.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const W=["Default","InvalidWithHelper","BlankAriaLabelFallback","LabelledByPrecedence","DisabledAndReadOnly","FocusIntentReentry"];export{o as BlankAriaLabelFallback,l as Default,c as DisabledAndReadOnly,y as FocusIntentReentry,i as InvalidWithHelper,d as LabelledByPrecedence,W as __namedExportsOrder,M as default};
