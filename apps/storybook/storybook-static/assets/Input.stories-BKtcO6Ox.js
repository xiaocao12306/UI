import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as F}from"./index-BWu4c2F4.js";import{B as J}from"./Button-BMxlc9Nj.js";import{I as i}from"./Input-o58Aer5Z.js";import{F as s}from"./FormField-Cq8zizPY.js";import{within as m,expect as a,userEvent as d,fireEvent as l}from"./index-DgAF9SIF.js";import{S as u,a as Q,s as k}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const se={title:"Form/Input",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},y={},b={render:()=>e.jsxs(u,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(i,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(J,{children:"Send"})]}),e.jsx("small",{style:Q,children:"Tip: switch theme in toolbar to validate input token contrast."})]})},v={render:()=>e.jsxs(u,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(s,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(i,{placeholder:"Type project name..."})}),e.jsx(s,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(i,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(s,{label:"Required inherited from control",children:e.jsx(i,{placeholder:"Inherited required field",required:!0})}),e.jsx(s,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(i,{placeholder:"Disabled field"})}),e.jsx(s,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(i,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})},x={render:()=>e.jsxs(u,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(s,{label:"Keyboard interaction",description:"Tab focus should show ring; Enter feedback is suppressed during IME composition.",children:e.jsx(i,{defaultValue:"release-notes"})}),e.jsx(s,{label:"Read-only propagated",children:e.jsx(i,{"aria-label":"Read-only propagated input",readOnly:!0,defaultValue:"stable"})}),e.jsx(s,{label:"Disabled interaction guard",disabled:!0,children:e.jsx(i,{"aria-label":"Disabled interaction guard input",placeholder:"Disabled input"})})]}),play:async({canvasElement:r})=>{const n=m(r),t=await n.findByRole("textbox",{name:"Keyboard interaction"}),o=n.getByText("Keyboard interaction").closest("label");await d.click(t),await a(t).toHaveAttribute("data-focused","true"),await a(o).toHaveAttribute("id"),await a(t.getAttribute("aria-labelledby")??"").toContain((o==null?void 0:o.id)??""),l.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",ctrlKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",metaKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",altKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",shiftKey:!0}),l.keyUp(t,{key:"Enter",shiftKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter"}),l.keyUp(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active");const c=n.getByRole("textbox",{name:"Read-only propagated input"});await a(c).toHaveAttribute("readonly"),c.focus(),l.keyDown(c,{key:"Enter"}),l.keyUp(c,{key:"Enter"}),await a(c).not.toHaveAttribute("data-active");const p=n.getByRole("textbox",{name:"Disabled interaction guard input"});await a(p).toBeDisabled(),await d.hover(p),await a(p).not.toHaveAttribute("data-hovered")}};function X(){return e.jsxs(u,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsxs("p",{style:k,children:["Click first, then press ",e.jsx("kbd",{children:"Tab"})," to verify keyboard re-entry restores focus-visible state on input."]}),e.jsx("button",{type:"button",children:"Before input"}),e.jsx(i,{"aria-label":"Focus intent re-entry input",placeholder:"Tab back into this field"})]})}const h={render:()=>e.jsx(X,{}),play:async({canvasElement:r})=>{const n=m(r),t=await n.findByRole("button",{name:"Before input"}),o=n.getByRole("textbox",{name:"Focus intent re-entry input"});await d.click(o),await a(o).toHaveAttribute("data-focused","true"),await d.click(t),await d.tab(),await a(o).toHaveFocus(),await a(o).toHaveAttribute("data-focus-visible","true")}};function Y(){const[r,n]=F.useState(""),[t,o]=F.useState(!1),c=t&&r.trim().length===0;return e.jsxs(u,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsx(s,{label:"Prompt",error:c?"Prompt is required.":void 0,children:e.jsx(i,{"aria-label":"Prompt input",value:r,placeholder:"Describe release note summary...",onChange:p=>n(p.target.value),onBlur:()=>o(!0)})}),e.jsxs("small",{style:Q,"data-testid":"char-count",children:[r.length," chars"]}),e.jsx(J,{disabled:r.trim().length===0,children:"Submit Prompt"})]})}const w={render:()=>e.jsx(Y,{}),play:async({canvasElement:r})=>{const n=m(r),t=await n.findByRole("textbox",{name:"Prompt input"});await d.click(t),await d.tab(),await a(n.getByRole("alert")).toHaveTextContent("Prompt is required."),await a(n.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await d.type(t,"Release summary"),await a(n.queryByRole("alert")).not.toBeInTheDocument(),await a(n.getByTestId("char-count")).toHaveTextContent("15 chars"),await a(n.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},f={render:()=>e.jsxs(u,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(s,{label:"Grammar review",children:e.jsx(i,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:k,children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:r})=>{const t=await m(r).findByRole("textbox",{name:"Grammar review input"});await a(t).toHaveAttribute("aria-invalid","grammar")}},g={render:()=>e.jsxs(u,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(s,{label:"Release scope",children:e.jsx(i,{"aria-label":"   ",defaultValue:"stable"})}),e.jsxs("small",{style:k,children:["Blank ",e.jsx("code",{children:"aria-label"})," values are ignored so visible label association remains the accessible name source."]})]}),play:async({canvasElement:r})=>{const t=await m(r).findByRole("textbox",{name:"Release scope"});await a(t).not.toHaveAttribute("aria-label")}};var I,E,S;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(S=(E=y.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var B,j,R;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(j=b.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var A,D,H;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(D=v.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var T,P,K;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(P=x.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var q,V,C;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <FocusIntentReentryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before input"
    });
    const input = canvas.getByRole("textbox", {
      name: "Focus intent re-entry input"
    });
    await userEvent.click(input);
    await expect(input).toHaveAttribute("data-focused", "true");
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(C=(V=h.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var W,O,M;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(O=w.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var G,U,L;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(U=f.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var N,_,z;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(z=(_=g.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const le=["Default","AiPromptStyle","StateMatrix","InteractionA11yParity","FocusIntentReentry","ValidationFlow","InvalidTokenSemantics","BlankAriaLabelFallback"];export{b as AiPromptStyle,g as BlankAriaLabelFallback,y as Default,h as FocusIntentReentry,x as InteractionA11yParity,f as InvalidTokenSemantics,v as StateMatrix,w as ValidationFlow,le as __namedExportsOrder,se as default};
