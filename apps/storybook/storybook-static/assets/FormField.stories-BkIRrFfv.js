import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as o}from"./Input-DCFTlK0_.js";import{F as s}from"./FormField-Xof8ejB2.js";import{within as c,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const _={title:"Form/FormField",component:s,tags:["autodocs"],args:{label:"Field label",children:e.jsx(o,{"aria-label":"Field input"})},parameters:{layout:"centered",docs:{description:{component:"FormField composes label, description, and error semantics around any form control while preserving child aria contracts."}}}},b={render:()=>e.jsxs("div",{style:{width:520},children:[e.jsx(s,{label:"Deployment window",description:"Use local timezone for all rollouts.",error:"End date must be after start date.",children:e.jsx(o,{"aria-describedby":"custom-window-help",defaultValue:"2026-03-12"})}),e.jsx("p",{id:"custom-window-help",style:{margin:"8px 0 0",color:"var(--aurora-text-primary)",fontSize:13},children:"Custom helper: choose an off-peak deployment slot."})]}),play:async({canvasElement:l})=>{const a=c(l),n=a.getByRole("textbox",{name:"Deployment window"}),i=(n.getAttribute("aria-describedby")??"").split(" ").filter(Boolean),p=(n.getAttribute("aria-errormessage")??"").split(" ").filter(Boolean),[h]=a.getAllByRole("alert");await t(n).toHaveAttribute("aria-invalid","true"),await t(i).toContain("custom-window-help"),await t(i).toContain(h.id),await t(p).toContain(h.id)}},m={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(s,{label:"API token",children:e.jsx(o,{required:!0,placeholder:"Enter CI token"})}),e.jsx(s,{label:"Read-only channel",description:"Managed by organization policy.",disabled:!0,children:e.jsx(o,{defaultValue:"stable"})})]}),play:async({canvasElement:l})=>{const a=c(l),n=a.getByRole("textbox",{name:/API token/}),r=a.getByRole("textbox",{name:"Read-only channel"});await t(n).toHaveAttribute("required"),await t(n).toHaveAttribute("aria-required","true"),await t(r).toBeDisabled()}},u={render:()=>e.jsx("div",{style:{width:520},children:e.jsx(s,{label:"External field",htmlFor:"external-control",children:e.jsx(e.Fragment,{children:e.jsx(o,{id:"external-control",defaultValue:"owner@aurora.dev"})})})}),play:async({canvasElement:l})=>{const a=c(l),n=a.getByRole("textbox",{name:"External field"}),r=a.getByText("External field");await t(n).toHaveAttribute("id","external-control"),await t(r).toHaveAttribute("for","external-control")}},y={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:10},children:[e.jsx("p",{id:"custom-formfield-name",style:{margin:0},children:"Custom field heading"}),e.jsx(s,{label:"Internal label",children:e.jsx(o,{"aria-label":"Should be ignored","aria-labelledby":"custom-formfield-name"})})]}),play:async({canvasElement:l})=>{const a=c(l),n=a.getByRole("textbox"),r=a.getByText("Internal label"),i=n.getAttribute("aria-labelledby")??"";await t(n).not.toHaveAttribute("aria-label"),await t(i.split(" ")).toContain("custom-formfield-name"),await t(r).toHaveAttribute("id");const d=r.getAttribute("id");if(!d)throw new Error("expected generated label id");await t(i.split(" ")).toContain(d)}},x={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:12},children:[e.jsx("p",{id:"release-scope-heading",style:{margin:0,fontWeight:600},children:"Release scope"}),e.jsx(s,{label:e.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",alignItems:"center"},children:"⚙️"}),children:e.jsx(o,{"aria-labelledby":"release-scope-heading",defaultValue:"production"})}),e.jsx(s,{label:e.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",alignItems:"center"},children:"🧪"}),children:e.jsx(o,{"aria-label":"Experiment channel",defaultValue:"beta-canary"})})]}),play:async({canvasElement:l})=>{const a=c(l),n=a.getByRole("textbox",{name:"Release scope"}),r=a.getByRole("textbox",{name:"Experiment channel"}),i=n.getAttribute("aria-labelledby")??"";await t(i.split(" ")).toContain("release-scope-heading"),await t(r).toHaveAttribute("aria-label","Experiment channel")}},g={render:()=>e.jsx("div",{style:{width:520},children:e.jsx(s,{label:"Retry attempts",description:0,error:0,children:e.jsx(o,{})})}),play:async({canvasElement:l})=>{const a=c(l),n=a.getByRole("textbox",{name:"Retry attempts"}),r=n.getAttribute("aria-describedby")??"",i=n.getAttribute("aria-errormessage"),[d,p]=a.getAllByText("0");await t(d.tagName).toBe("SMALL"),await t(p).toHaveAttribute("role","alert"),await t(n).toHaveAttribute("aria-invalid","true"),await t(r.split(" ").filter(Boolean)).toContain(d.id),await t(r.split(" ").filter(Boolean)).toContain(p.id),await t(i).toBe(p.id)}};var w,v,f;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(v=b.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var B,I,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(I=m.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var A,E,j;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(E=u.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var R,C,H;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(C=y.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var M,S,k;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(k=(S=x.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var L,V,N;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520
  }}>
      <FormField label="Retry attempts" description={0} error={0}>
        <Input />
      </FormField>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: "Retry attempts"
    });
    const describedBy = input.getAttribute("aria-describedby") ?? "";
    const errorMessage = input.getAttribute("aria-errormessage");
    const [description, alert] = canvas.getAllByText("0");
    await expect(description.tagName).toBe("SMALL");
    await expect(alert).toHaveAttribute("role", "alert");
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(describedBy.split(" ").filter(Boolean)).toContain(description.id);
    await expect(describedBy.split(" ").filter(Boolean)).toContain(alert.id);
    await expect(errorMessage).toBe(alert.id);
  }
}`,...(N=(V=g.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const O=["WithInputControl","InheritedControlSemantics","ExternalControlAssociation","LabelledByPrecedence","NonTextLabelNameFallback","NumericMessageSemantics"];export{u as ExternalControlAssociation,m as InheritedControlSemantics,y as LabelledByPrecedence,x as NonTextLabelNameFallback,g as NumericMessageSemantics,b as WithInputControl,O as __namedExportsOrder,_ as default};
