import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as i}from"./Input-CMwa0OIu.js";import{F as o}from"./FormField-DJwMaa8B.js";import{within as d,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const T={title:"Form/FormField",component:o,tags:["autodocs"],args:{label:"Field label",children:e.jsx(i,{"aria-label":"Field input"})},parameters:{layout:"centered",docs:{description:{component:"FormField composes label, description, and error semantics around any form control while preserving child aria contracts."}}}},c={render:()=>e.jsxs("div",{style:{width:520},children:[e.jsx(o,{label:"Deployment window",description:"Use local timezone for all rollouts.",error:"End date must be after start date.",children:e.jsx(i,{"aria-describedby":"custom-window-help",defaultValue:"2026-03-12"})}),e.jsx("p",{id:"custom-window-help",style:{margin:"8px 0 0",color:"var(--aurora-text-primary)",fontSize:13},children:"Custom helper: choose an off-peak deployment slot."})]}),play:async({canvasElement:l})=>{const a=d(l),n=a.getByRole("textbox",{name:"Deployment window"}),s=(n.getAttribute("aria-describedby")??"").split(" ").filter(Boolean),S=(n.getAttribute("aria-errormessage")??"").split(" ").filter(Boolean),[x]=a.getAllByRole("alert");await t(n).toHaveAttribute("aria-invalid","true"),await t(s).toContain("custom-window-help"),await t(s).toContain(x.id),await t(S).toContain(x.id)}},p={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(o,{label:"API token",children:e.jsx(i,{required:!0,placeholder:"Enter CI token"})}),e.jsx(o,{label:"Read-only channel",description:"Managed by organization policy.",disabled:!0,children:e.jsx(i,{defaultValue:"stable"})})]}),play:async({canvasElement:l})=>{const a=d(l),n=a.getByRole("textbox",{name:/API token/}),r=a.getByRole("textbox",{name:"Read-only channel"});await t(n).toHaveAttribute("required"),await t(n).toHaveAttribute("aria-required","true"),await t(r).toBeDisabled()}},b={render:()=>e.jsx("div",{style:{width:520},children:e.jsx(o,{label:"External field",htmlFor:"external-control",children:e.jsx(e.Fragment,{children:e.jsx(i,{id:"external-control",defaultValue:"owner@aurora.dev"})})})}),play:async({canvasElement:l})=>{const a=d(l),n=a.getByRole("textbox",{name:"External field"}),r=a.getByText("External field");await t(n).toHaveAttribute("id","external-control"),await t(r).toHaveAttribute("for","external-control")}},u={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:10},children:[e.jsx("p",{id:"custom-formfield-name",style:{margin:0},children:"Custom field heading"}),e.jsx(o,{label:"Internal label",children:e.jsx(i,{"aria-label":"Should be ignored","aria-labelledby":"custom-formfield-name"})})]}),play:async({canvasElement:l})=>{const a=d(l),n=a.getByRole("textbox"),r=a.getByText("Internal label"),s=n.getAttribute("aria-labelledby")??"";await t(n).not.toHaveAttribute("aria-label"),await t(s.split(" ")).toContain("custom-formfield-name"),await t(r).toHaveAttribute("id");const y=r.getAttribute("id");if(!y)throw new Error("expected generated label id");await t(s.split(" ")).toContain(y)}},m={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:12},children:[e.jsx("p",{id:"release-scope-heading",style:{margin:0,fontWeight:600},children:"Release scope"}),e.jsx(o,{label:e.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",alignItems:"center"},children:"⚙️"}),children:e.jsx(i,{"aria-labelledby":"release-scope-heading",defaultValue:"production"})}),e.jsx(o,{label:e.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",alignItems:"center"},children:"🧪"}),children:e.jsx(i,{"aria-label":"Experiment channel",defaultValue:"beta-canary"})})]}),play:async({canvasElement:l})=>{const a=d(l),n=a.getByRole("textbox",{name:"Release scope"}),r=a.getByRole("textbox",{name:"Experiment channel"}),s=n.getAttribute("aria-labelledby")??"";await t(s.split(" ")).toContain("release-scope-heading"),await t(r).toHaveAttribute("aria-label","Experiment channel")}};var g,h,w;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(h=c.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,f,I;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(f=p.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var B,F,A;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(F=b.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var E,j,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(j=u.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var C,H,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 12
  }}>
      <p id="release-scope-heading" style={{
      margin: 0,
      fontWeight: 600
    }}>
        Release scope
      </p>
      <FormField label={<span aria-hidden="true" style={{
      display: "inline-flex",
      alignItems: "center"
    }}>
            ⚙️
          </span>}>
        <Input aria-labelledby="release-scope-heading" defaultValue="production" />
      </FormField>

      <FormField label={<span aria-hidden="true" style={{
      display: "inline-flex",
      alignItems: "center"
    }}>
            🧪
          </span>}>
        <Input aria-label="Experiment channel" defaultValue="beta-canary" />
      </FormField>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const labelledByInput = canvas.getByRole("textbox", {
      name: "Release scope"
    });
    const ariaLabelInput = canvas.getByRole("textbox", {
      name: "Experiment channel"
    });
    const labelledBy = labelledByInput.getAttribute("aria-labelledby") ?? "";
    await expect(labelledBy.split(" ")).toContain("release-scope-heading");
    await expect(ariaLabelInput).toHaveAttribute("aria-label", "Experiment channel");
  }
}`,...(k=(H=m.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const N=["WithInputControl","InheritedControlSemantics","ExternalControlAssociation","LabelledByPrecedence","NonTextLabelNameFallback"];export{b as ExternalControlAssociation,p as InheritedControlSemantics,u as LabelledByPrecedence,m as NonTextLabelNameFallback,c as WithInputControl,N as __namedExportsOrder,T as default};
