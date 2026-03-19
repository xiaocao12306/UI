import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BWu4c2F4.js";import{B as C}from"./Button-CnyYpMYZ.js";import{I as r}from"./Input-BmAd4R65.js";import{F as o}from"./FormField-DYhF-Rf9.js";import{within as w,userEvent as c,expect as t,fireEvent as m}from"./index-DgAF9SIF.js";import{S as p,a as G,s as K}from"./storyShowcase-r-xztSD8.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const Z={title:"Form/Input",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},u={},b={render:()=>e.jsxs(p,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(r,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(C,{children:"Send"})]}),e.jsx("small",{style:G,children:"Tip: switch theme in toolbar to validate input token contrast."})]})},y={render:()=>e.jsxs(p,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(o,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(r,{placeholder:"Type project name..."})}),e.jsx(o,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(r,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(o,{label:"Required inherited from control",children:e.jsx(r,{placeholder:"Inherited required field",required:!0})}),e.jsx(o,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(r,{placeholder:"Disabled field"})}),e.jsx(o,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(r,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})},h={render:()=>e.jsxs(p,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(o,{label:"Keyboard interaction",description:"Tab focus should show ring; Enter should show pressed feedback.",children:e.jsx(r,{defaultValue:"release-notes"})}),e.jsx(o,{label:"Read-only propagated",children:e.jsx(r,{"aria-label":"Read-only propagated input",readOnly:!0,defaultValue:"stable"})}),e.jsx(o,{label:"Disabled interaction guard",disabled:!0,children:e.jsx(r,{"aria-label":"Disabled interaction guard input",placeholder:"Disabled input"})})]}),play:async({canvasElement:i})=>{const a=w(i),n=await a.findByRole("textbox",{name:"Keyboard interaction"}),s=a.getByText("Keyboard interaction").closest("label");await c.click(n),await t(n).toHaveAttribute("data-focused","true"),await t(s).toHaveAttribute("id"),await t(n.getAttribute("aria-labelledby")??"").toContain((s==null?void 0:s.id)??""),m.keyDown(n,{key:"Enter"}),m.keyUp(n,{key:"Enter"}),await t(n).not.toHaveAttribute("data-active");const l=a.getByRole("textbox",{name:"Read-only propagated input"});await t(l).toHaveAttribute("readonly"),l.focus(),m.keyDown(l,{key:"Enter"}),m.keyUp(l,{key:"Enter"}),await t(l).not.toHaveAttribute("data-active");const d=a.getByRole("textbox",{name:"Disabled interaction guard input"});await t(d).toBeDisabled(),await c.hover(d),await t(d).not.toHaveAttribute("data-hovered")}};function M(){const[i,a]=g.useState(""),[n,s]=g.useState(!1),l=n&&i.trim().length===0;return e.jsxs(p,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsx(o,{label:"Prompt",error:l?"Prompt is required.":void 0,children:e.jsx(r,{"aria-label":"Prompt input",value:i,placeholder:"Describe release note summary...",onChange:d=>a(d.target.value),onBlur:()=>s(!0)})}),e.jsxs("small",{style:G,"data-testid":"char-count",children:[i.length," chars"]}),e.jsx(C,{disabled:i.trim().length===0,children:"Submit Prompt"})]})}const x={render:()=>e.jsx(M,{}),play:async({canvasElement:i})=>{const a=w(i),n=await a.findByRole("textbox",{name:"Prompt input"});await c.click(n),await c.tab(),await t(a.getByRole("alert")).toHaveTextContent("Prompt is required."),await t(a.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await c.type(n,"Release summary"),await t(a.queryByRole("alert")).not.toBeInTheDocument(),await t(a.getByTestId("char-count")).toHaveTextContent("15 chars"),await t(a.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},v={render:()=>e.jsxs(p,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(o,{label:"Grammar review",children:e.jsx(r,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:K,children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:i})=>{const n=await w(i).findByRole("textbox",{name:"Grammar review input"});await t(n).toHaveAttribute("aria-invalid","grammar")}};var f,F,I;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var S,j,k;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={8}>
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
      <small style={storyEmphasisTextStyle}>
        Tip: switch theme in toolbar to validate input token contrast.
      </small>
    </StoryShowcaseFrame>
}`,...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var E,B,D;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
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
    </StoryShowcaseFrame>
}`,...(D=(B=y.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var R,A,T;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
      <FormField label="Keyboard interaction" description="Tab focus should show ring; Enter should show pressed feedback.">
        <Input defaultValue="release-notes" />
      </FormField>

      <FormField label="Read-only propagated">
        <Input aria-label="Read-only propagated input" readOnly defaultValue="stable" />
      </FormField>

      <FormField label="Disabled interaction guard" disabled>
        <Input aria-label="Disabled interaction guard input" placeholder="Disabled input" />
      </FormField>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const keyboardInput = await canvas.findByRole("textbox", {
      name: "Keyboard interaction"
    });
    const label = canvas.getByText("Keyboard interaction").closest("label");
    await userEvent.click(keyboardInput);
    await expect(keyboardInput).toHaveAttribute("data-focused", "true");
    await expect(label).toHaveAttribute("id");
    await expect(keyboardInput.getAttribute("aria-labelledby") ?? "").toContain(label?.id ?? "");
    fireEvent.keyDown(keyboardInput, {
      key: "Enter"
    });
    fireEvent.keyUp(keyboardInput, {
      key: "Enter"
    });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    const readOnlyInput = canvas.getByRole("textbox", {
      name: "Read-only propagated input"
    });
    await expect(readOnlyInput).toHaveAttribute("readonly");
    readOnlyInput.focus();
    fireEvent.keyDown(readOnlyInput, {
      key: "Enter"
    });
    fireEvent.keyUp(readOnlyInput, {
      key: "Enter"
    });
    await expect(readOnlyInput).not.toHaveAttribute("data-active");
    const disabledInput = canvas.getByRole("textbox", {
      name: "Disabled interaction guard input"
    });
    await expect(disabledInput).toBeDisabled();
    await userEvent.hover(disabledInput);
    await expect(disabledInput).not.toHaveAttribute("data-hovered");
  }
}`,...(T=(A=h.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var P,H,q;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var V,O,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={8}>
      <FormField label="Grammar review">
        <Input aria-label="Grammar review input" aria-invalid="grammar" defaultValue="Needs grammar check" />
      </FormField>
      <small style={storyMutedTextStyle}>
        Preserves <code>aria-invalid=&quot;grammar&quot;</code> for assistive-tech integrations that distinguish
        grammar/spelling corrections.
      </small>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: "Grammar review input"
    });
    await expect(input).toHaveAttribute("aria-invalid", "grammar");
  }
}`,...(W=(O=v.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const $=["Default","AiPromptStyle","StateMatrix","InteractionA11yParity","ValidationFlow","InvalidTokenSemantics"];export{b as AiPromptStyle,u as Default,h as InteractionA11yParity,v as InvalidTokenSemantics,y as StateMatrix,x as ValidationFlow,$ as __namedExportsOrder,Z as default};
