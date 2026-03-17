import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as d}from"./Input-C1lkqvCi.js";import{F as i}from"./FormField-BE5Iwla2.js";import{within as h,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-BfGecBuf.js";const j={title:"Form/FormField",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"FormField composes label, description, and error semantics around any form control while preserving child aria contracts."}}}},o={render:()=>e.jsxs("div",{style:{width:520},children:[e.jsx(i,{label:"Deployment window",description:"Use local timezone for all rollouts.",error:"End date must be after start date.",children:e.jsx(d,{"aria-describedby":"custom-window-help","aria-errormessage":"custom-window-error",defaultValue:"2026-03-12"})}),e.jsx("p",{id:"custom-window-help",style:{margin:"8px 0 0",color:"var(--aurora-text-secondary)",fontSize:13},children:"Custom helper: choose an off-peak deployment slot."}),e.jsx("p",{id:"custom-window-error",style:{margin:"4px 0 0",color:"var(--aurora-color-red-500)",fontSize:13},children:"Custom error: overlapping with freeze window."})]}),play:async({canvasElement:s})=>{const r=h(s),n=r.getByRole("textbox",{name:"Deployment window"}),c=(n.getAttribute("aria-describedby")??"").split(" ").filter(Boolean),p=(n.getAttribute("aria-errormessage")??"").split(" ").filter(Boolean),m=r.getByRole("alert");await t(n).toHaveAttribute("aria-invalid","true"),await t(c).toContain("custom-window-help"),await t(c).toContain(m.id),await t(p).toContain("custom-window-error"),await t(p).toContain(m.id)}},a={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(i,{label:"API token",children:e.jsx(d,{required:!0,placeholder:"Enter CI token"})}),e.jsx(i,{label:"Read-only channel",description:"Managed by organization policy.",disabled:!0,children:e.jsx(d,{defaultValue:"stable"})})]}),play:async({canvasElement:s})=>{const r=h(s),n=r.getByRole("textbox",{name:/API token/}),l=r.getByRole("textbox",{name:"Read-only channel"});await t(n).toHaveAttribute("required"),await t(n).toHaveAttribute("aria-required","true"),await t(l).toBeDisabled()}};var u,w,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520
  }}>
      <FormField label="Deployment window" description="Use local timezone for all rollouts." error="End date must be after start date.">
        <Input aria-describedby="custom-window-help" aria-errormessage="custom-window-error" defaultValue="2026-03-12" />
      </FormField>
      <p id="custom-window-help" style={{
      margin: "8px 0 0",
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Custom helper: choose an off-peak deployment slot.
      </p>
      <p id="custom-window-error" style={{
      margin: "4px 0 0",
      color: "var(--aurora-color-red-500)",
      fontSize: 13
    }}>
        Custom error: overlapping with freeze window.
      </p>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: "Deployment window"
    });
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    const describedByIds = describedBy.split(" ").filter(Boolean);
    const errorMessage = input.getAttribute("aria-errormessage") ?? "";
    const errorMessageIds = errorMessage.split(" ").filter(Boolean);
    const alert = canvas.getByRole("alert");
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(describedByIds).toContain("custom-window-help");
    await expect(describedByIds).toContain(alert.id);
    await expect(errorMessageIds).toContain("custom-window-error");
    await expect(errorMessageIds).toContain(alert.id);
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,g,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 14
  }}>
      <FormField label="API token">
        <Input required placeholder="Enter CI token" />
      </FormField>

      <FormField label="Read-only channel" description="Managed by organization policy." disabled>
        <Input defaultValue="stable" />
      </FormField>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tokenInput = canvas.getByRole("textbox", {
      name: /API token/
    });
    const disabledInput = canvas.getByRole("textbox", {
      name: "Read-only channel"
    });
    await expect(tokenInput).toHaveAttribute("required");
    await expect(tokenInput).toHaveAttribute("aria-required", "true");
    await expect(disabledInput).toBeDisabled();
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const k=["WithInputControl","InheritedControlSemantics"];export{a as InheritedControlSemantics,o as WithInputControl,k as __namedExportsOrder,j as default};
