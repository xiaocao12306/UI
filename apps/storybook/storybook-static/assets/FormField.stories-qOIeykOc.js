import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as l}from"./Input-B9xcXif8.js";import{F as o}from"./FormField-CHmEmU2O.js";import{within as d,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const K={title:"Form/FormField",component:o,tags:["autodocs"],args:{label:"Field label",children:e.jsx(l,{"aria-label":"Field input"})},parameters:{layout:"centered",docs:{description:{component:"FormField composes label, description, and error semantics around any form control while preserving child aria contracts."}}}},m={render:()=>e.jsxs("div",{style:{width:520},children:[e.jsx(o,{label:"Deployment window",description:"Use local timezone for all rollouts.",error:"End date must be after start date.",children:e.jsx(l,{"aria-describedby":"custom-window-help",defaultValue:"2026-03-12"})}),e.jsx("p",{id:"custom-window-help",style:{margin:"8px 0 0",color:"var(--aurora-text-primary)",fontSize:13},children:"Custom helper: choose an off-peak deployment slot."})]}),play:async({canvasElement:i})=>{const a=d(i),n=a.getByRole("textbox",{name:"Deployment window"}),s=(n.getAttribute("aria-describedby")??"").split(" ").filter(Boolean),p=(n.getAttribute("aria-errormessage")??"").split(" ").filter(Boolean),[w]=a.getAllByRole("alert");await t(n).toHaveAttribute("aria-invalid","true"),await t(s).toContain("custom-window-help"),await t(s).toContain(w.id),await t(p).toContain(w.id)}},b={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(o,{label:"API token",children:e.jsx(l,{required:!0,placeholder:"Enter CI token"})}),e.jsx(o,{label:"Read-only channel",description:"Managed by organization policy.",disabled:!0,children:e.jsx(l,{defaultValue:"stable"})})]}),play:async({canvasElement:i})=>{const a=d(i),n=a.getByRole("textbox",{name:/API token/}),r=a.getByRole("textbox",{name:"Read-only channel"});await t(n).toHaveAttribute("required"),await t(n).toHaveAttribute("aria-required","true"),await t(r).toBeDisabled()}},u={render:()=>e.jsx("div",{style:{width:520},children:e.jsx(o,{label:"External field",htmlFor:"external-control",children:e.jsx(e.Fragment,{children:e.jsx(l,{id:"external-control",defaultValue:"owner@aurora.dev"})})})}),play:async({canvasElement:i})=>{const a=d(i),n=a.getByRole("textbox",{name:"External field"}),r=a.getByText("External field");await t(n).toHaveAttribute("id","external-control"),await t(r).toHaveAttribute("for","external-control")}},y={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:10},children:[e.jsx("p",{id:"custom-formfield-name",style:{margin:0},children:"Custom field heading"}),e.jsx(o,{label:"Internal label",children:e.jsx(l,{"aria-label":"Should be ignored","aria-labelledby":"custom-formfield-name"})})]}),play:async({canvasElement:i})=>{const a=d(i),n=a.getByRole("textbox"),r=a.getByText("Internal label"),s=n.getAttribute("aria-labelledby")??"";await t(n).not.toHaveAttribute("aria-label"),await t(s.split(" ")).toContain("custom-formfield-name"),await t(r).toHaveAttribute("id");const c=r.getAttribute("id");if(!c)throw new Error("expected generated label id");await t(s.split(" ")).toContain(c)}},x={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:12},children:[e.jsx("p",{id:"release-scope-heading",style:{margin:0,fontWeight:600},children:"Release scope"}),e.jsx(o,{label:e.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",alignItems:"center"},children:"⚙️"}),children:e.jsx(l,{"aria-labelledby":"release-scope-heading",defaultValue:"production"})}),e.jsx(o,{label:e.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",alignItems:"center"},children:"🧪"}),children:e.jsx(l,{"aria-label":"Experiment channel",defaultValue:"beta-canary"})})]}),play:async({canvasElement:i})=>{const a=d(i),n=a.getByRole("textbox",{name:"Release scope"}),r=a.getByRole("textbox",{name:"Experiment channel"}),s=n.getAttribute("aria-labelledby")??"";await t(s.split(" ")).toContain("release-scope-heading"),await t(r).toHaveAttribute("aria-label","Experiment channel")}},g={render:()=>e.jsx("div",{style:{width:520},children:e.jsx(o,{label:"Retry attempts",description:0,error:0,children:e.jsx(l,{})})}),play:async({canvasElement:i})=>{const a=d(i),n=a.getByRole("textbox",{name:"Retry attempts"}),r=n.getAttribute("aria-describedby")??"",s=n.getAttribute("aria-errormessage"),[c,p]=a.getAllByText("0");await t(c.tagName).toBe("SMALL"),await t(p).toHaveAttribute("role","alert"),await t(n).toHaveAttribute("aria-invalid","true"),await t(r.split(" ").filter(Boolean)).toContain(c.id),await t(r.split(" ").filter(Boolean)).toContain(p.id),await t(s).toBe(p.id)}},v={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:14},children:[e.jsx(o,{label:"Optional email",children:e.jsx(l,{"aria-errormessage":"optional-error-id"})}),e.jsx(o,{label:"Invalid email",children:e.jsx(l,{"aria-invalid":"grammar","aria-errormessage":"invalid-error-id"})})]}),play:async({canvasElement:i})=>{const a=d(i),n=a.getByRole("textbox",{name:"Optional email"}),r=a.getByRole("textbox",{name:"Invalid email"});await t(n).not.toHaveAttribute("aria-errormessage"),await t(r).toHaveAttribute("aria-invalid","grammar"),await t(r).toHaveAttribute("aria-errormessage","invalid-error-id")}};var h,I,B;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var f,F,A;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(F=b.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var E,j,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(j=u.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var C,H,M;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(H=y.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var S,k,L;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(k=x.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var V,N,T;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(N=g.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var q,z,D;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 14
  }}>
      <FormField label="Optional email">
        <Input aria-errormessage="optional-error-id" />
      </FormField>

      <FormField label="Invalid email">
        <Input aria-invalid="grammar" aria-errormessage="invalid-error-id" />
      </FormField>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const optionalInput = canvas.getByRole("textbox", {
      name: "Optional email"
    });
    const invalidInput = canvas.getByRole("textbox", {
      name: "Invalid email"
    });
    await expect(optionalInput).not.toHaveAttribute("aria-errormessage");
    await expect(invalidInput).toHaveAttribute("aria-invalid", "grammar");
    await expect(invalidInput).toHaveAttribute("aria-errormessage", "invalid-error-id");
  }
}`,...(D=(z=v.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const Q=["WithInputControl","InheritedControlSemantics","ExternalControlAssociation","LabelledByPrecedence","NonTextLabelNameFallback","NumericMessageSemantics","ErrorMessageInvalidContract"];export{v as ErrorMessageInvalidContract,u as ExternalControlAssociation,b as InheritedControlSemantics,y as LabelledByPrecedence,x as NonTextLabelNameFallback,g as NumericMessageSemantics,m as WithInputControl,Q as __namedExportsOrder,K as default};
