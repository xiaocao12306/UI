import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{B as O}from"./Button-Cn1nutIP.js";import{I as r}from"./Input-7y9QhjTU.js";import{F as l}from"./FormField-ZaHPw_tE.js";import{within as w,userEvent as p,expect as a,fireEvent as o}from"./index-DgAF9SIF.js";import{S as u,a as W,s as G}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const Z={title:"Form/Input",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},m={},y={render:()=>e.jsxs(u,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(r,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(O,{children:"Send"})]}),e.jsx("small",{style:W,children:"Tip: switch theme in toolbar to validate input token contrast."})]})},b={render:()=>e.jsxs(u,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(l,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(r,{placeholder:"Type project name..."})}),e.jsx(l,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(r,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(l,{label:"Required inherited from control",children:e.jsx(r,{placeholder:"Inherited required field",required:!0})}),e.jsx(l,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(r,{placeholder:"Disabled field"})}),e.jsx(l,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(r,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})},v={render:()=>e.jsxs(u,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(l,{label:"Keyboard interaction",description:"Tab focus should show ring; Enter feedback is suppressed during IME composition.",children:e.jsx(r,{defaultValue:"release-notes"})}),e.jsx(l,{label:"Read-only propagated",children:e.jsx(r,{"aria-label":"Read-only propagated input",readOnly:!0,defaultValue:"stable"})}),e.jsx(l,{label:"Disabled interaction guard",disabled:!0,children:e.jsx(r,{"aria-label":"Disabled interaction guard input",placeholder:"Disabled input"})})]}),play:async({canvasElement:i})=>{const n=w(i),t=await n.findByRole("textbox",{name:"Keyboard interaction"}),d=n.getByText("Keyboard interaction").closest("label");await p.click(t),await a(t).toHaveAttribute("data-focused","true"),await a(d).toHaveAttribute("id"),await a(t.getAttribute("aria-labelledby")??"").toContain((d==null?void 0:d.id)??""),o.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await a(t).not.toHaveAttribute("data-active"),o.keyDown(t,{key:"Enter",ctrlKey:!0}),await a(t).not.toHaveAttribute("data-active"),o.keyDown(t,{key:"Enter",metaKey:!0}),await a(t).not.toHaveAttribute("data-active"),o.keyDown(t,{key:"Enter",altKey:!0}),await a(t).not.toHaveAttribute("data-active"),o.keyDown(t,{key:"Enter",shiftKey:!0}),o.keyUp(t,{key:"Enter",shiftKey:!0}),await a(t).not.toHaveAttribute("data-active"),o.keyDown(t,{key:"Enter"}),o.keyUp(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active");const s=n.getByRole("textbox",{name:"Read-only propagated input"});await a(s).toHaveAttribute("readonly"),s.focus(),o.keyDown(s,{key:"Enter"}),o.keyUp(s,{key:"Enter"}),await a(s).not.toHaveAttribute("data-active");const c=n.getByRole("textbox",{name:"Disabled interaction guard input"});await a(c).toBeDisabled(),await p.hover(c),await a(c).not.toHaveAttribute("data-hovered")}};function M(){const[i,n]=f.useState(""),[t,d]=f.useState(!1),s=t&&i.trim().length===0;return e.jsxs(u,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsx(l,{label:"Prompt",error:s?"Prompt is required.":void 0,children:e.jsx(r,{"aria-label":"Prompt input",value:i,placeholder:"Describe release note summary...",onChange:c=>n(c.target.value),onBlur:()=>d(!0)})}),e.jsxs("small",{style:W,"data-testid":"char-count",children:[i.length," chars"]}),e.jsx(O,{disabled:i.trim().length===0,children:"Submit Prompt"})]})}const h={render:()=>e.jsx(M,{}),play:async({canvasElement:i})=>{const n=w(i),t=await n.findByRole("textbox",{name:"Prompt input"});await p.click(t),await p.tab(),await a(n.getByRole("alert")).toHaveTextContent("Prompt is required."),await a(n.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await p.type(t,"Release summary"),await a(n.queryByRole("alert")).not.toBeInTheDocument(),await a(n.getByTestId("char-count")).toHaveTextContent("15 chars"),await a(n.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},x={render:()=>e.jsxs(u,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(l,{label:"Grammar review",children:e.jsx(r,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:G,children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:i})=>{const t=await w(i).findByRole("textbox",{name:"Grammar review input"});await a(t).toHaveAttribute("aria-invalid","grammar")}};var g,k,I;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var E,F,D;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(F=y.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var S,j,A;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(j=b.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var B,R,H;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
      <FormField label="Keyboard interaction" description="Tab focus should show ring; Enter feedback is suppressed during IME composition.">
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
      key: "Enter",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    fireEvent.keyDown(keyboardInput, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    fireEvent.keyDown(keyboardInput, {
      key: "Enter",
      metaKey: true
    });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    fireEvent.keyDown(keyboardInput, {
      key: "Enter",
      altKey: true
    });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    fireEvent.keyDown(keyboardInput, {
      key: "Enter",
      shiftKey: true
    });
    fireEvent.keyUp(keyboardInput, {
      key: "Enter",
      shiftKey: true
    });
    await expect(keyboardInput).not.toHaveAttribute("data-active");
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
}`,...(H=(R=v.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var T,P,K;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(P=h.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var q,C,V;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(C=x.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const $=["Default","AiPromptStyle","StateMatrix","InteractionA11yParity","ValidationFlow","InvalidTokenSemantics"];export{y as AiPromptStyle,m as Default,v as InteractionA11yParity,x as InvalidTokenSemantics,b as StateMatrix,h as ValidationFlow,$ as __namedExportsOrder,Z as default};
