import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as i}from"./Input-BmAd4R65.js";import{F as s}from"./FormField-DYhF-Rf9.js";import{within as g,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const j={title:"Form/FormField",component:s,tags:["autodocs"],args:{label:"Field label",children:e.jsx(i,{"aria-label":"Field input"})},parameters:{layout:"centered",docs:{description:{component:"FormField composes label, description, and error semantics around any form control while preserving child aria contracts."}}}},o={render:()=>e.jsxs("div",{style:{width:520},children:[e.jsx(s,{label:"Deployment window",description:"Use local timezone for all rollouts.",error:"End date must be after start date.",children:e.jsx(i,{"aria-describedby":"custom-window-help",defaultValue:"2026-03-12"})}),e.jsx("p",{id:"custom-window-help",style:{margin:"8px 0 0",color:"var(--aurora-text-primary)",fontSize:13},children:"Custom helper: choose an off-peak deployment slot."})]}),play:async({canvasElement:l})=>{const a=g(l),n=a.getByRole("textbox",{name:"Deployment window"}),c=(n.getAttribute("aria-describedby")??"").split(" ").filter(Boolean),h=(n.getAttribute("aria-errormessage")??"").split(" ").filter(Boolean),[p]=a.getAllByRole("alert");await t(n).toHaveAttribute("aria-invalid","true"),await t(c).toContain("custom-window-help"),await t(c).toContain(p.id),await t(h).toContain(p.id)}},r={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(s,{label:"API token",children:e.jsx(i,{required:!0,placeholder:"Enter CI token"})}),e.jsx(s,{label:"Read-only channel",description:"Managed by organization policy.",disabled:!0,children:e.jsx(i,{defaultValue:"stable"})})]}),play:async({canvasElement:l})=>{const a=g(l),n=a.getByRole("textbox",{name:/API token/}),d=a.getByRole("textbox",{name:"Read-only channel"});await t(n).toHaveAttribute("required"),await t(n).toHaveAttribute("aria-required","true"),await t(d).toBeDisabled()}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520
  }}>
      <FormField label="Deployment window" description="Use local timezone for all rollouts." error="End date must be after start date.">
        <Input aria-describedby="custom-window-help" defaultValue="2026-03-12" />
      </FormField>
      <p id="custom-window-help" style={{
      margin: "8px 0 0",
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Custom helper: choose an off-peak deployment slot.
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
    const [alert] = canvas.getAllByRole("alert");
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(describedByIds).toContain("custom-window-help");
    await expect(describedByIds).toContain(alert.id);
    await expect(errorMessageIds).toContain(alert.id);
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,w,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const k=["WithInputControl","InheritedControlSemantics"];export{r as InheritedControlSemantics,o as WithInputControl,k as __namedExportsOrder,j as default};
