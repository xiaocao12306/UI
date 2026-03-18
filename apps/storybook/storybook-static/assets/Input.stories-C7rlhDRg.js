import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as P}from"./Button-BCHo91JE.js";import{I as r}from"./Input-CK-2zJ6Z.js";import{F as n}from"./FormField-tjrV3Sij.js";import{within as T,expect as o,userEvent as p}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const _={title:"Form/Input",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},l={},s={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(r,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(P,{children:"Send"})]}),e.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})},d={render:()=>e.jsxs("div",{style:{width:560,display:"grid",gap:12},children:[e.jsx(n,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(r,{placeholder:"Type project name..."})}),e.jsx(n,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(r,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(n,{label:"Required inherited from control",children:e.jsx(r,{placeholder:"Inherited required field",required:!0})}),e.jsx(n,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(r,{placeholder:"Disabled field"})}),e.jsx(n,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(r,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})};function k(){const[t,a]=u.useState(""),[i,q]=u.useState(!1),E=i&&t.trim().length===0;return e.jsxs("div",{style:{width:560,display:"grid",gap:10},children:[e.jsx(n,{label:"Prompt",error:E?"Prompt is required.":void 0,children:e.jsx(r,{"aria-label":"Prompt input",value:t,placeholder:"Describe release note summary...",onChange:A=>a(A.target.value),onBlur:()=>q(!0)})}),e.jsxs("small",{style:{color:"var(--aurora-text-secondary)"},"data-testid":"char-count",children:[t.length," chars"]}),e.jsx(P,{disabled:t.trim().length===0,children:"Submit Prompt"})]})}const c={render:()=>e.jsx(k,{}),play:async({canvasElement:t})=>{const a=T(t),i=await a.findByRole("textbox",{name:"Prompt input"});await p.click(i),await p.tab(),await o(a.getByRole("alert")).toHaveTextContent("Prompt is required."),await o(a.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await p.type(i,"Release summary"),await o(a.queryByRole("alert")).not.toBeInTheDocument(),await o(a.getByTestId("char-count")).toHaveTextContent("15 chars"),await o(a.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},m={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[e.jsx(n,{label:"Grammar review",children:e.jsx(r,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:{color:"var(--aurora-text-secondary)"},children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:t})=>{const i=await T(t).findByRole("textbox",{name:"Grammar review input"});await o(i).toHaveAttribute("aria-invalid","grammar")}};var h,v,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,g,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 8
  }}>
      <label htmlFor="prompt" style={{
      fontWeight: 600
    }}>
        Prompt Draft
      </label>
      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 8
    }}>
        <Input id="prompt" placeholder="Ask Aurora AI to scaffold a new dialog flow..." aria-label="AI prompt" />
        <Button>Send</Button>
      </div>
      <small style={{
      color: "var(--aurora-text-secondary)"
    }}>
        Tip: switch theme in toolbar to validate input token contrast.
      </small>
    </div>
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,w,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 560,
    display: "grid",
    gap: 12
  }}>
      <FormField label="Default" description="Hover and focus to verify border and ring states.">
        <Input placeholder="Type project name..." />
      </FormField>

      <FormField label="Error" error="Please provide a valid email address." required>
        <Input placeholder="name@company.com" defaultValue="invalid-email" />
      </FormField>

      <FormField label="Required inherited from control">
        <Input placeholder="Inherited required field" required />
      </FormField>

      <FormField label="Disabled" description="Disabled fields remain readable with lower emphasis." disabled>
        <Input placeholder="Disabled field" />
      </FormField>

      <FormField label="Read-only" description="Read-only fields are focusable but not editable.">
        <Input value="release/0.1.0" readOnly aria-label="Release branch" />
      </FormField>
    </div>
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var j,B,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ValidationFlowDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
    await userEvent.click(input);
    await userEvent.tab();
    await expect(canvas.getByRole("alert")).toHaveTextContent("Prompt is required.");
    await expect(canvas.getByRole("button", {
      name: "Submit Prompt"
    })).toBeDisabled();
    await userEvent.type(input, "Release summary");
    await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    await expect(canvas.getByTestId("char-count")).toHaveTextContent("15 chars");
    await expect(canvas.getByRole("button", {
      name: "Submit Prompt"
    })).not.toBeDisabled();
  }
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var R,D,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 8
  }}>
      <FormField label="Grammar review">
        <Input aria-label="Grammar review input" aria-invalid="grammar" defaultValue="Needs grammar check" />
      </FormField>
      <small style={{
      color: "var(--aurora-text-secondary)"
    }}>
        Preserves <code>aria-invalid=&quot;grammar&quot;</code> for assistive-tech integrations that distinguish
        grammar/spelling corrections.
      </small>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: "Grammar review input"
    });
    await expect(input).toHaveAttribute("aria-invalid", "grammar");
  }
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const z=["Default","AiPromptStyle","StateMatrix","ValidationFlow","InvalidTokenSemantics"];export{s as AiPromptStyle,l as Default,m as InvalidTokenSemantics,d as StateMatrix,c as ValidationFlow,z as __namedExportsOrder,_ as default};
