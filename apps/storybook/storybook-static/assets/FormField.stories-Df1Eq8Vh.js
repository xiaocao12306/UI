import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as l}from"./Input-lqSQxTzG.js";import{F as i}from"./FormField-Cq8zizPY.js";import{within as u,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const D={title:"Form/FormField",component:i,tags:["autodocs"],args:{label:"Field label",children:e.jsx(l,{"aria-label":"Field input"})},parameters:{layout:"centered",docs:{description:{component:"FormField composes label, description, and error semantics around any form control while preserving child aria contracts."}}}},d={render:()=>e.jsxs("div",{style:{width:520},children:[e.jsx(i,{label:"Deployment window",description:"Use local timezone for all rollouts.",error:"End date must be after start date.",children:e.jsx(l,{"aria-describedby":"custom-window-help",defaultValue:"2026-03-12"})}),e.jsx("p",{id:"custom-window-help",style:{margin:"8px 0 0",color:"var(--aurora-text-primary)",fontSize:13},children:"Custom helper: choose an off-peak deployment slot."})]}),play:async({canvasElement:r})=>{const n=u(r),a=n.getByRole("textbox",{name:"Deployment window"}),s=(a.getAttribute("aria-describedby")??"").split(" ").filter(Boolean),j=(a.getAttribute("aria-errormessage")??"").split(" ").filter(Boolean),[y]=n.getAllByRole("alert");await t(a).toHaveAttribute("aria-invalid","true"),await t(s).toContain("custom-window-help"),await t(s).toContain(y.id),await t(j).toContain(y.id)}},c={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(i,{label:"API token",children:e.jsx(l,{required:!0,placeholder:"Enter CI token"})}),e.jsx(i,{label:"Read-only channel",description:"Managed by organization policy.",disabled:!0,children:e.jsx(l,{defaultValue:"stable"})})]}),play:async({canvasElement:r})=>{const n=u(r),a=n.getByRole("textbox",{name:/API token/}),o=n.getByRole("textbox",{name:"Read-only channel"});await t(a).toHaveAttribute("required"),await t(a).toHaveAttribute("aria-required","true"),await t(o).toBeDisabled()}},p={render:()=>e.jsx("div",{style:{width:520},children:e.jsx(i,{label:"External field",htmlFor:"external-control",children:e.jsx(e.Fragment,{children:e.jsx(l,{id:"external-control",defaultValue:"owner@aurora.dev"})})})}),play:async({canvasElement:r})=>{const n=u(r),a=n.getByRole("textbox",{name:"External field"}),o=n.getByText("External field");await t(a).toHaveAttribute("id","external-control"),await t(o).toHaveAttribute("for","external-control")}},m={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:10},children:[e.jsx("p",{id:"custom-formfield-name",style:{margin:0},children:"Custom field heading"}),e.jsx(i,{label:"Internal label",children:e.jsx(l,{"aria-label":"Should be ignored","aria-labelledby":"custom-formfield-name"})})]}),play:async({canvasElement:r})=>{const n=u(r),a=n.getByRole("textbox"),o=n.getByText("Internal label"),s=a.getAttribute("aria-labelledby")??"";await t(a).not.toHaveAttribute("aria-label"),await t(s.split(" ")).toContain("custom-formfield-name"),await t(o).toHaveAttribute("id");const b=o.getAttribute("id");if(!b)throw new Error("expected generated label id");await t(s.split(" ")).toContain(b)}};var x,w,g;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(w=d.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var v,h,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,B,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var A,E,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 10
  }}>
      <p id="custom-formfield-name" style={{
      margin: 0
    }}>
        Custom field heading
      </p>
      <FormField label="Internal label">
        <Input aria-label="Should be ignored" aria-labelledby="custom-formfield-name" />
      </FormField>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    const label = canvas.getByText("Internal label");
    const labelledBy = input.getAttribute("aria-labelledby") ?? "";
    await expect(input).not.toHaveAttribute("aria-label");
    await expect(labelledBy.split(" ")).toContain("custom-formfield-name");
    await expect(label).toHaveAttribute("id");
    const labelId = label.getAttribute("id");
    if (!labelId) {
      throw new Error("expected generated label id");
    }
    await expect(labelledBy.split(" ")).toContain(labelId);
  }
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const P=["WithInputControl","InheritedControlSemantics","ExternalControlAssociation","LabelledByPrecedence"];export{p as ExternalControlAssociation,c as InheritedControlSemantics,m as LabelledByPrecedence,d as WithInputControl,P as __namedExportsOrder,D as default};
