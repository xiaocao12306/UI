import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as P}from"./Button-BNFQVefv.js";import{I as r}from"./Input-B0g8SV4q.js";import{F as n}from"./FormField-CliZLGrq.js";import{within as T,expect as l,userEvent as p}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const _={title:"Form/Input",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},o={},s={render:()=>e.jsxs("div",{style:{width:"min(100%, 520px)",display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(r,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(P,{children:"Send"})]}),e.jsx("small",{style:{color:"var(--aurora-text-primary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})},d={render:()=>e.jsxs("div",{style:{width:"min(100%, 560px)",display:"grid",gap:12},children:[e.jsx(n,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(r,{placeholder:"Type project name..."})}),e.jsx(n,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(r,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(n,{label:"Required inherited from control",children:e.jsx(r,{placeholder:"Inherited required field",required:!0})}),e.jsx(n,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(r,{placeholder:"Disabled field"})}),e.jsx(n,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(r,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})};function k(){const[t,a]=u.useState(""),[i,q]=u.useState(!1),E=i&&t.trim().length===0;return e.jsxs("div",{style:{width:"min(100%, 560px)",display:"grid",gap:10},children:[e.jsx(n,{label:"Prompt",error:E?"Prompt is required.":void 0,children:e.jsx(r,{"aria-label":"Prompt input",value:t,placeholder:"Describe release note summary...",onChange:A=>a(A.target.value),onBlur:()=>q(!0)})}),e.jsxs("small",{style:{color:"var(--aurora-text-primary)"},"data-testid":"char-count",children:[t.length," chars"]}),e.jsx(P,{disabled:t.trim().length===0,children:"Submit Prompt"})]})}const m={render:()=>e.jsx(k,{}),play:async({canvasElement:t})=>{const a=T(t),i=await a.findByRole("textbox",{name:"Prompt input"});await p.click(i),await p.tab(),await l(a.getByRole("alert")).toHaveTextContent("Prompt is required."),await l(a.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await p.type(i,"Release summary"),await l(a.queryByRole("alert")).not.toBeInTheDocument(),await l(a.getByTestId("char-count")).toHaveTextContent("15 chars"),await l(a.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},c={render:()=>e.jsxs("div",{style:{width:"min(100%, 520px)",display:"grid",gap:8},children:[e.jsx(n,{label:"Grammar review",children:e.jsx(r,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:{color:"var(--aurora-text-primary)"},children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:t})=>{const i=await T(t).findByRole("textbox",{name:"Grammar review input"});await l(i).toHaveAttribute("aria-invalid","grammar")}};var h,v,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,x,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 520px)",
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
      color: "var(--aurora-text-primary)"
    }}>
        Tip: switch theme in toolbar to validate input token contrast.
      </small>
    </div>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,w,F;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 560px)",
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
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var j,B,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var R,D,S;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 520px)",
    display: "grid",
    gap: 8
  }}>
      <FormField label="Grammar review">
        <Input aria-label="Grammar review input" aria-invalid="grammar" defaultValue="Needs grammar check" />
      </FormField>
      <small style={{
      color: "var(--aurora-text-primary)"
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
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const z=["Default","AiPromptStyle","StateMatrix","ValidationFlow","InvalidTokenSemantics"];export{s as AiPromptStyle,o as Default,c as InvalidTokenSemantics,d as StateMatrix,m as ValidationFlow,z as __namedExportsOrder,_ as default};
