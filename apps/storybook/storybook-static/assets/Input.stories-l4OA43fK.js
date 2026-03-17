import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{B as D}from"./Button-Hgh0jeno.js";import{I as t}from"./Input-CY7BO4jw.js";import{F as n}from"./FormField-CWhxX9un.js";import{within as S,userEvent as p,expect as o}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";const M={title:"Form/Input",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},i={},s={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(t,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(D,{children:"Send"})]}),e.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})},d={render:()=>e.jsxs("div",{style:{width:560,display:"grid",gap:12},children:[e.jsx(n,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(t,{placeholder:"Type project name..."})}),e.jsx(n,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(t,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(n,{label:"Required inherited from control",children:e.jsx(t,{placeholder:"Inherited required field",required:!0})}),e.jsx(n,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(t,{placeholder:"Disabled field"})}),e.jsx(n,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(t,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})};function T(){const[r,a]=m.useState(""),[l,I]=m.useState(!1),R=l&&r.trim().length===0;return e.jsxs("div",{style:{width:560,display:"grid",gap:10},children:[e.jsx(n,{label:"Prompt",error:R?"Prompt is required.":void 0,children:e.jsx(t,{"aria-label":"Prompt input",value:r,placeholder:"Describe release note summary...",onChange:P=>a(P.target.value),onBlur:()=>I(!0)})}),e.jsxs("small",{style:{color:"var(--aurora-text-secondary)"},"data-testid":"char-count",children:[r.length," chars"]}),e.jsx(D,{disabled:r.trim().length===0,children:"Submit Prompt"})]})}const c={render:()=>e.jsx(T,{}),play:async({canvasElement:r})=>{const a=S(r),l=await a.findByRole("textbox",{name:"Prompt input"});await p.click(l),await p.tab(),await o(a.getByRole("alert")).toHaveTextContent("Prompt is required."),await o(a.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await p.type(l,"Release summary"),await o(a.queryByRole("alert")).not.toBeInTheDocument(),await o(a.getByTestId("char-count")).toHaveTextContent("15 chars"),await o(a.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}};var u,h,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,v,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,g,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(g=d.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var F,j,B;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const W=["Default","AiPromptStyle","StateMatrix","ValidationFlow"];export{s as AiPromptStyle,i as Default,d as StateMatrix,c as ValidationFlow,W as __namedExportsOrder,M as default};
