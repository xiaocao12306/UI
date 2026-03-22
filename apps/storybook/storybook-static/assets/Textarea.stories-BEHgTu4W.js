import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as n}from"./Textarea-BnJNX4pg.js";import{within as p,expect as r,userEvent as m,fireEvent as D}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const W={title:"Form/Textarea",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Textarea shares Input token styling while supporting multiline editing, invalid state wiring, and disabled/read-only boundaries."}}},args:{"aria-label":"Message",placeholder:"Write release notes for this version..."}},i={args:{defaultValue:""},play:async({canvasElement:t})=>{const a=p(t).getByRole("textbox",{name:"Message"});await m.click(a),await m.keyboard("Delivery-ready"),await r(a).toHaveValue("Delivery-ready")}},o={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(n,{"aria-label":"Release summary",defaultValue:"Needs QA validation.",invalid:!0,"aria-describedby":"release-summary-help release-summary-error"}),e.jsx("p",{id:"release-summary-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Include impact, rollback plan, and owner contact."}),e.jsx("p",{id:"release-summary-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Summary cannot be shorter than 30 characters."})]})},d={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"storybook-textarea-blank-label",style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary label"}),e.jsx(n,{id:"storybook-textarea-blank-label","aria-label":"   ",defaultValue:"Release summary draft..."})]}),play:async({canvasElement:t})=>{const a=p(t).getByRole("textbox",{name:"Release summary label"});await r(a).not.toHaveAttribute("aria-label")}},c={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"storybook-textarea-heading",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary heading"}),e.jsx(n,{"aria-label":"Fallback release summary","aria-labelledby":"storybook-textarea-heading",defaultValue:"Heading-driven label should win."})]}),play:async({canvasElement:t})=>{const a=p(t).getByRole("textbox",{name:"Release summary heading"});await r(a).toHaveAttribute("aria-labelledby","storybook-textarea-heading"),await r(a).not.toHaveAttribute("aria-label")}},y={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Read-only template"}),e.jsx(n,{"aria-label":"Read-only template",readOnly:!0,defaultValue:`Release owner: Platform Team
Rollback: feature flag`})]}),e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Disabled while syncing"}),e.jsx(n,{"aria-label":"Disabled while syncing",disabled:!0,defaultValue:"Synchronizing from source of truth..."})]})]})},u={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores textarea focus-visible state."}),e.jsx("button",{type:"button",children:"Before textarea"}),e.jsx(n,{"aria-label":"Focus intent textarea",defaultValue:"Release summary draft"})]}),play:async({canvasElement:t})=>{const s=p(t),a=await s.findByRole("button",{name:"Before textarea"}),l=s.getByRole("textbox",{name:"Focus intent textarea"});await m.click(a),await m.tab(),await r(l).toHaveFocus(),await r(l).toHaveAttribute("data-focus-visible","true"),D.mouseDown(l,{button:0,ctrlKey:!0}),await r(l).toHaveAttribute("data-focus-visible","true")}};var b,x,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,R,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var S,j,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var E,H,z;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(H=y.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var A,V,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(textarea, {
      button: 0,
      ctrlKey: true
    });
    await expect(textarea).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(F=(V=u.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const C=["Default","InvalidWithHelper","BlankAriaLabelFallback","LabelledByPrecedence","DisabledAndReadOnly","FocusIntentReentry"];export{d as BlankAriaLabelFallback,i as Default,y as DisabledAndReadOnly,u as FocusIntentReentry,o as InvalidWithHelper,c as LabelledByPrecedence,C as __namedExportsOrder,W as default};
