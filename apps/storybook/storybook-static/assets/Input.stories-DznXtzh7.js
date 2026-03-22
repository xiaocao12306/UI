import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./index-BWu4c2F4.js";import{B as Z}from"./Button--WiRqiCc.js";import{I as r}from"./Input-T1Re0BqC.js";import{F as s}from"./FormField-Cq8zizPY.js";import{within as p,expect as a,userEvent as c,fireEvent as i}from"./index-DgAF9SIF.js";import{S as d,a as $,s as F}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const ue={title:"Form/Input",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},b={},y={render:()=>e.jsxs(d,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(r,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(Z,{children:"Send"})]}),e.jsx("small",{style:$,children:"Tip: switch theme in toolbar to validate input token contrast."})]})},h={render:()=>e.jsxs(d,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(s,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(r,{placeholder:"Type project name..."})}),e.jsx(s,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(r,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(s,{label:"Required inherited from control",children:e.jsx(r,{placeholder:"Inherited required field",required:!0})}),e.jsx(s,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(r,{placeholder:"Disabled field"})}),e.jsx(s,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(r,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})},v={render:()=>e.jsxs(d,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(s,{label:"Keyboard interaction",description:"Tab focus should show ring; Enter feedback is suppressed during IME composition.",children:e.jsx(r,{defaultValue:"release-notes"})}),e.jsx(s,{label:"Read-only propagated",children:e.jsx(r,{"aria-label":"Read-only propagated input",readOnly:!0,defaultValue:"stable"})}),e.jsx(s,{label:"Disabled interaction guard",disabled:!0,children:e.jsx(r,{"aria-label":"Disabled interaction guard input",placeholder:"Disabled input"})})]}),play:async({canvasElement:o})=>{const n=p(o),t=await n.findByRole("textbox",{name:"Keyboard interaction"}),l=n.getByText("Keyboard interaction").closest("label");await c.click(t),await a(t).toHaveAttribute("data-focused","true"),await a(l).toHaveAttribute("id"),await a(t.getAttribute("aria-labelledby")??"").toContain((l==null?void 0:l.id)??""),i.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await a(t).not.toHaveAttribute("data-active"),i.keyDown(t,{key:"Enter",ctrlKey:!0}),await a(t).not.toHaveAttribute("data-active"),i.keyDown(t,{key:"Enter",metaKey:!0}),await a(t).not.toHaveAttribute("data-active"),i.keyDown(t,{key:"Enter",altKey:!0}),await a(t).not.toHaveAttribute("data-active"),i.keyDown(t,{key:"Enter",shiftKey:!0}),i.keyUp(t,{key:"Enter",shiftKey:!0}),await a(t).not.toHaveAttribute("data-active"),i.keyDown(t,{key:"Enter"}),i.keyUp(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active"),i.pointerDown(t,{pointerType:"touch",button:0}),await a(t).toHaveAttribute("data-active","true"),i.pointerCancel(t),await a(t).not.toHaveAttribute("data-active"),i.pointerDown(t,{pointerType:"touch",button:0}),await a(t).toHaveAttribute("data-active","true"),i.pointerUp(t,{pointerType:"touch",button:0}),await a(t).not.toHaveAttribute("data-active");const u=n.getByRole("textbox",{name:"Read-only propagated input"});await a(u).toHaveAttribute("readonly"),u.focus(),i.keyDown(u,{key:"Enter"}),i.keyUp(u,{key:"Enter"}),await a(u).not.toHaveAttribute("data-active");const m=n.getByRole("textbox",{name:"Disabled interaction guard input"});await a(m).toBeDisabled(),await c.hover(m),await a(m).not.toHaveAttribute("data-hovered")}},x={render:()=>e.jsxs(d,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(s,{label:"Actionable shortcut input",description:"Actionable inputs should expose Enter shortcut hints.",children:e.jsx(r,{})}),e.jsx(s,{label:"Read-only shortcut input",description:"Read-only inputs should not advertise keyboard shortcuts.",children:e.jsx(r,{readOnly:!0,defaultValue:"release/0.1.0"})}),e.jsx(s,{label:"Disabled shortcut input",description:"Disabled inputs should not advertise keyboard shortcuts.",disabled:!0,children:e.jsx(r,{})}),e.jsx(s,{label:"Date shortcut input",description:"Non-text input types should not expose default Enter shortcut hints.",children:e.jsx(r,{type:"date","aria-label":"Date shortcut input control"})})]}),play:async({canvasElement:o})=>{const n=p(o);await a(n.getByRole("textbox",{name:/^Actionable shortcut input/})).toHaveAttribute("aria-keyshortcuts","Enter"),await a(n.getByRole("textbox",{name:/^Read-only shortcut input/})).not.toHaveAttribute("aria-keyshortcuts"),await a(n.getByRole("textbox",{name:/^Disabled shortcut input/})).not.toHaveAttribute("aria-keyshortcuts"),await a(n.getByLabelText("Date shortcut input control")).not.toHaveAttribute("aria-keyshortcuts")}};function ee(){return e.jsxs(d,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsxs("p",{style:F,children:["Click first, then press ",e.jsx("kbd",{children:"Tab"})," to verify keyboard re-entry restores focus-visible state on input."]}),e.jsx("button",{type:"button",children:"Before input"}),e.jsx(r,{"aria-label":"Focus intent re-entry input",placeholder:"Tab back into this field"})]})}const w={render:()=>e.jsx(ee,{}),play:async({canvasElement:o})=>{const n=p(o),t=await n.findByRole("button",{name:"Before input"}),l=n.getByRole("textbox",{name:"Focus intent re-entry input"});await c.click(l),await a(l).toHaveAttribute("data-focused","true"),await c.click(t),await c.tab(),await a(l).toHaveFocus(),await a(l).toHaveAttribute("data-focus-visible","true"),i.mouseDown(l,{button:0,ctrlKey:!0}),await a(l).toHaveAttribute("data-focus-visible","true")}};function te(){const[o,n]=I.useState(""),[t,l]=I.useState(!1),u=t&&o.trim().length===0;return e.jsxs(d,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsx(s,{label:"Prompt",error:u?"Prompt is required.":void 0,children:e.jsx(r,{"aria-label":"Prompt input",value:o,placeholder:"Describe release note summary...",onChange:m=>n(m.target.value),onBlur:()=>l(!0)})}),e.jsxs("small",{style:$,"data-testid":"char-count",children:[o.length," chars"]}),e.jsx(Z,{disabled:o.trim().length===0,children:"Submit Prompt"})]})}const f={render:()=>e.jsx(te,{}),play:async({canvasElement:o})=>{const n=p(o),t=await n.findByRole("textbox",{name:"Prompt input"});await c.click(t),await c.tab(),await a(n.getByRole("alert")).toHaveTextContent("Prompt is required."),await a(n.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await c.type(t,"Release summary"),await a(n.queryByRole("alert")).not.toBeInTheDocument(),await a(n.getByTestId("char-count")).toHaveTextContent("15 chars"),await a(n.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},k={render:()=>e.jsxs(d,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(s,{label:"Grammar review",children:e.jsx(r,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:F,children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:o})=>{const t=await p(o).findByRole("textbox",{name:"Grammar review input"});await a(t).toHaveAttribute("aria-invalid","grammar")}},g={render:()=>e.jsxs(d,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(s,{label:"Release scope",children:e.jsx(r,{"aria-label":"   ",defaultValue:"stable"})}),e.jsxs("small",{style:F,children:["Blank ",e.jsx("code",{children:"aria-label"})," values are ignored so visible label association remains the accessible name source."]})]}),play:async({canvasElement:o})=>{const t=await p(o).findByRole("textbox",{name:"Release scope"});await a(t).not.toHaveAttribute("aria-label")}};var E,A,D;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(D=(A=b.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var R,j,B;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(j=y.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,H,T;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(H=h.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var P,K,V;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    fireEvent.pointerDown(keyboardInput, {
      pointerType: "touch",
      button: 0
    });
    await expect(keyboardInput).toHaveAttribute("data-active", "true");
    fireEvent.pointerCancel(keyboardInput);
    await expect(keyboardInput).not.toHaveAttribute("data-active");
    fireEvent.pointerDown(keyboardInput, {
      pointerType: "touch",
      button: 0
    });
    await expect(keyboardInput).toHaveAttribute("data-active", "true");
    fireEvent.pointerUp(keyboardInput, {
      pointerType: "touch",
      button: 0
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
}`,...(V=(K=v.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var C,W,q;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
      <FormField label="Actionable shortcut input" description="Actionable inputs should expose Enter shortcut hints.">
        <Input />
      </FormField>

      <FormField label="Read-only shortcut input" description="Read-only inputs should not advertise keyboard shortcuts.">
        <Input readOnly defaultValue="release/0.1.0" />
      </FormField>

      <FormField label="Disabled shortcut input" description="Disabled inputs should not advertise keyboard shortcuts." disabled>
        <Input />
      </FormField>

      <FormField label="Date shortcut input" description="Non-text input types should not expose default Enter shortcut hints.">
        <Input type="date" aria-label="Date shortcut input control" />
      </FormField>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("textbox", {
      name: /^Actionable shortcut input/
    })).toHaveAttribute("aria-keyshortcuts", "Enter");
    await expect(canvas.getByRole("textbox", {
      name: /^Read-only shortcut input/
    })).not.toHaveAttribute("aria-keyshortcuts");
    await expect(canvas.getByRole("textbox", {
      name: /^Disabled shortcut input/
    })).not.toHaveAttribute("aria-keyshortcuts");
    await expect(canvas.getByLabelText("Date shortcut input control")).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(q=(W=x.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,U,M;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(input, {
      button: 0,
      ctrlKey: true
    });
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(M=(U=w.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var G,L,N;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(L=f.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var _,z,J;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(z=k.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const pe=["Default","AiPromptStyle","StateMatrix","InteractionA11yParity","ShortcutHintPrecision","FocusIntentReentry","ValidationFlow","InvalidTokenSemantics","BlankAriaLabelFallback"];export{y as AiPromptStyle,g as BlankAriaLabelFallback,b as Default,w as FocusIntentReentry,v as InteractionA11yParity,k as InvalidTokenSemantics,x as ShortcutHintPrecision,h as StateMatrix,f as ValidationFlow,pe as __namedExportsOrder,ue as default};
