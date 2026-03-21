import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as o}from"./Input-D3M9Xqpz.js";import{F as i}from"./FormField-B0TxcgCy.js";import{within as p,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const M={title:"Form/FormField",component:i,tags:["autodocs"],args:{label:"Field label",children:e.jsx(o,{"aria-label":"Field input"})},parameters:{layout:"centered",docs:{description:{component:"FormField composes label, description, and error semantics around any form control while preserving child aria contracts."}}}},s={render:()=>e.jsxs("div",{style:{width:520},children:[e.jsx(i,{label:"Deployment window",description:"Use local timezone for all rollouts.",error:"End date must be after start date.",children:e.jsx(o,{"aria-describedby":"custom-window-help",defaultValue:"2026-03-12"})}),e.jsx("p",{id:"custom-window-help",style:{margin:"8px 0 0",color:"var(--aurora-text-primary)",fontSize:13},children:"Custom helper: choose an off-peak deployment slot."})]}),play:async({canvasElement:r})=>{const n=p(r),a=n.getByRole("textbox",{name:"Deployment window"}),u=(a.getAttribute("aria-describedby")??"").split(" ").filter(Boolean),F=(a.getAttribute("aria-errormessage")??"").split(" ").filter(Boolean),[m]=n.getAllByRole("alert");await t(a).toHaveAttribute("aria-invalid","true"),await t(u).toContain("custom-window-help"),await t(u).toContain(m.id),await t(F).toContain(m.id)}},d={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(i,{label:"API token",children:e.jsx(o,{required:!0,placeholder:"Enter CI token"})}),e.jsx(i,{label:"Read-only channel",description:"Managed by organization policy.",disabled:!0,children:e.jsx(o,{defaultValue:"stable"})})]}),play:async({canvasElement:r})=>{const n=p(r),a=n.getByRole("textbox",{name:/API token/}),l=n.getByRole("textbox",{name:"Read-only channel"});await t(a).toHaveAttribute("required"),await t(a).toHaveAttribute("aria-required","true"),await t(l).toBeDisabled()}},c={render:()=>e.jsx("div",{style:{width:520},children:e.jsx(i,{label:"External field",htmlFor:"external-control",children:e.jsx(e.Fragment,{children:e.jsx(o,{id:"external-control",defaultValue:"owner@aurora.dev"})})})}),play:async({canvasElement:r})=>{const n=p(r),a=n.getByRole("textbox",{name:"External field"}),l=n.getByText("External field");await t(a).toHaveAttribute("id","external-control"),await t(l).toHaveAttribute("for","external-control")}};var x,b,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,h,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,f,I;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520
  }}>
      <FormField label="External field" htmlFor="external-control">
        <>
          <Input id="external-control" defaultValue="owner@aurora.dev" />
        </>
      </FormField>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: "External field"
    });
    const label = canvas.getByText("External field");
    await expect(input).toHaveAttribute("id", "external-control");
    await expect(label).toHaveAttribute("for", "external-control");
  }
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const S=["WithInputControl","InheritedControlSemantics","ExternalControlAssociation"];export{c as ExternalControlAssociation,d as InheritedControlSemantics,s as WithInputControl,S as __namedExportsOrder,M as default};
