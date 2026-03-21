import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BWu4c2F4.js";import{B as U}from"./Button-BMxlc9Nj.js";import{I as r}from"./Input-D3M9Xqpz.js";import{F as o}from"./FormField-Cq8zizPY.js";import{within as f,expect as t,userEvent as u,fireEvent as l}from"./index-DgAF9SIF.js";import{S as c,a as L,s as N}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const te={title:"Form/Input",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},m={},y={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(r,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(U,{children:"Send"})]}),e.jsx("small",{style:L,children:"Tip: switch theme in toolbar to validate input token contrast."})]})},b={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(o,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(r,{placeholder:"Type project name..."})}),e.jsx(o,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(r,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(o,{label:"Required inherited from control",children:e.jsx(r,{placeholder:"Inherited required field",required:!0})}),e.jsx(o,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(r,{placeholder:"Disabled field"})}),e.jsx(o,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(r,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})},v={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(o,{label:"Keyboard interaction",description:"Tab focus should show ring; Enter feedback is suppressed during IME composition.",children:e.jsx(r,{defaultValue:"release-notes"})}),e.jsx(o,{label:"Read-only propagated",children:e.jsx(r,{"aria-label":"Read-only propagated input",readOnly:!0,defaultValue:"stable"})}),e.jsx(o,{label:"Disabled interaction guard",disabled:!0,children:e.jsx(r,{"aria-label":"Disabled interaction guard input",placeholder:"Disabled input"})})]}),play:async({canvasElement:i})=>{const n=f(i),a=await n.findByRole("textbox",{name:"Keyboard interaction"}),d=n.getByText("Keyboard interaction").closest("label");await u.click(a),await t(a).toHaveAttribute("data-focused","true"),await t(d).toHaveAttribute("id"),await t(a.getAttribute("aria-labelledby")??"").toContain((d==null?void 0:d.id)??""),l.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await t(a).not.toHaveAttribute("data-active"),l.keyDown(a,{key:"Enter",ctrlKey:!0}),await t(a).not.toHaveAttribute("data-active"),l.keyDown(a,{key:"Enter",metaKey:!0}),await t(a).not.toHaveAttribute("data-active"),l.keyDown(a,{key:"Enter",altKey:!0}),await t(a).not.toHaveAttribute("data-active"),l.keyDown(a,{key:"Enter",shiftKey:!0}),l.keyUp(a,{key:"Enter",shiftKey:!0}),await t(a).not.toHaveAttribute("data-active"),l.keyDown(a,{key:"Enter"}),l.keyUp(a,{key:"Enter"}),await t(a).not.toHaveAttribute("data-active");const s=n.getByRole("textbox",{name:"Read-only propagated input"});await t(s).toHaveAttribute("readonly"),s.focus(),l.keyDown(s,{key:"Enter"}),l.keyUp(s,{key:"Enter"}),await t(s).not.toHaveAttribute("data-active");const p=n.getByRole("textbox",{name:"Disabled interaction guard input"});await t(p).toBeDisabled(),await u.hover(p),await t(p).not.toHaveAttribute("data-hovered")}};function _(){const[i,n]=g.useState(""),[a,d]=g.useState(!1),s=a&&i.trim().length===0;return e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsx(o,{label:"Prompt",error:s?"Prompt is required.":void 0,children:e.jsx(r,{"aria-label":"Prompt input",value:i,placeholder:"Describe release note summary...",onChange:p=>n(p.target.value),onBlur:()=>d(!0)})}),e.jsxs("small",{style:L,"data-testid":"char-count",children:[i.length," chars"]}),e.jsx(U,{disabled:i.trim().length===0,children:"Submit Prompt"})]})}const h={render:()=>e.jsx(_,{}),play:async({canvasElement:i})=>{const n=f(i),a=await n.findByRole("textbox",{name:"Prompt input"});await u.click(a),await u.tab(),await t(n.getByRole("alert")).toHaveTextContent("Prompt is required."),await t(n.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await u.type(a,"Release summary"),await t(n.queryByRole("alert")).not.toBeInTheDocument(),await t(n.getByTestId("char-count")).toHaveTextContent("15 chars"),await t(n.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},x={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(o,{label:"Grammar review",children:e.jsx(r,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:N,children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:i})=>{const a=await f(i).findByRole("textbox",{name:"Grammar review input"});await t(a).toHaveAttribute("aria-invalid","grammar")}},w={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(o,{label:"Release scope",children:e.jsx(r,{"aria-label":"   ",defaultValue:"stable"})}),e.jsxs("small",{style:N,children:["Blank ",e.jsx("code",{children:"aria-label"})," values are ignored so visible label association remains the accessible name source."]})]}),play:async({canvasElement:i})=>{const a=await f(i).findByRole("textbox",{name:"Release scope"});await t(a).not.toHaveAttribute("aria-label")}};var k,F,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var E,S,D;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(S=y.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var j,A,B;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(A=b.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,H,T;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(H=v.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var P,K,q;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var V,C,W;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(C=x.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var O,M,G;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={8}>
      <FormField label="Release scope">
        <Input aria-label="   " defaultValue="stable" />
      </FormField>
      <small style={storyMutedTextStyle}>
        Blank <code>aria-label</code> values are ignored so visible label association remains the
        accessible name source.
      </small>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: "Release scope"
    });
    await expect(input).not.toHaveAttribute("aria-label");
  }
}`,...(G=(M=w.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const ne=["Default","AiPromptStyle","StateMatrix","InteractionA11yParity","ValidationFlow","InvalidTokenSemantics","BlankAriaLabelFallback"];export{y as AiPromptStyle,w as BlankAriaLabelFallback,m as Default,v as InteractionA11yParity,x as InvalidTokenSemantics,b as StateMatrix,h as ValidationFlow,ne as __namedExportsOrder,te as default};
