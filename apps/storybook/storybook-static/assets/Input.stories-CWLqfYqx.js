import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as A}from"./index-BWu4c2F4.js";import{B as re}from"./Button-rBVi27TD.js";import{I as o}from"./Input-ueoPJ8SP.js";import{F as i}from"./FormField-Xof8ejB2.js";import{within as p,expect as a,userEvent as d,fireEvent as l,waitFor as m}from"./index-DgAF9SIF.js";import{S as c,a as D,s as I}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const he={title:"Form/Input",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},y={},v={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(o,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(re,{children:"Send"})]}),e.jsx("small",{style:D,children:"Tip: switch theme in toolbar to validate input token contrast."})]})},h={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(o,{placeholder:"Type project name..."})}),e.jsx(i,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(o,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(i,{label:"Required inherited from control",children:e.jsx(o,{placeholder:"Inherited required field",required:!0})}),e.jsx(i,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(o,{placeholder:"Disabled field"})}),e.jsx(i,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(o,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})},x={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Keyboard interaction",description:"Tab focus should show ring; Enter feedback is suppressed during IME composition.",children:e.jsx(o,{defaultValue:"release-notes"})}),e.jsx(i,{label:"Read-only propagated",children:e.jsx(o,{"aria-label":"Read-only propagated input",readOnly:!0,defaultValue:"stable"})}),e.jsx(i,{label:"Disabled interaction guard",disabled:!0,children:e.jsx(o,{"aria-label":"Disabled interaction guard input",placeholder:"Disabled input"})})]}),play:async({canvasElement:r})=>{const n=p(r),t=await n.findByRole("textbox",{name:"Keyboard interaction"}),s=n.getByText("Keyboard interaction").closest("label");await d.click(t),await a(t).toHaveAttribute("data-focused","true"),await a(s).toHaveAttribute("id"),await a(t.getAttribute("aria-labelledby")??"").toContain((s==null?void 0:s.id)??""),l.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",ctrlKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",metaKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",altKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",shiftKey:!0}),l.keyUp(t,{key:"Enter",shiftKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter"}),l.keyUp(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active"),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await m(()=>{a(t).toHaveAttribute("data-active","true")}),l.pointerCancel(t),await m(()=>{a(t).not.toHaveAttribute("data-active")}),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await m(()=>{a(t).toHaveAttribute("data-active","true")}),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await m(()=>{a(t).not.toHaveAttribute("data-active")});const u=n.getByRole("textbox",{name:"Read-only propagated input"});await a(u).toHaveAttribute("readonly"),u.focus(),l.keyDown(u,{key:"Enter"}),l.keyUp(u,{key:"Enter"}),await a(u).not.toHaveAttribute("data-active");const b=n.getByRole("textbox",{name:"Disabled interaction guard input"});await a(b).toBeDisabled(),await d.hover(b),await a(b).not.toHaveAttribute("data-hovered")}};function oe(){const[r,n]=A.useState(0);return e.jsx("div",{onKeyDownCapture:t=>{t.key==="Enter"&&t.preventDefault()},children:e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Preempted enter input",description:"Global key guards can preempt Enter before local active-feedback handlers.",children:e.jsx(o,{onKeyDown:t=>{!t.defaultPrevented&&t.key==="Enter"&&n(s=>s+1)}})}),e.jsxs("p",{style:I,children:["Enter handler calls:"," ",e.jsx("strong",{"data-testid":"input-preempted-enter-calls",style:D,children:r})]})]})})}const w={render:()=>e.jsx(oe,{}),play:async({canvasElement:r})=>{const n=p(r),t=await n.findByRole("textbox",{name:/^Preempted enter input/});l.keyDown(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active"),await a(n.getByTestId("input-preempted-enter-calls")).toHaveTextContent("0")}},f={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Actionable shortcut input",description:"Actionable inputs should expose Enter shortcut hints.",children:e.jsx(o,{})}),e.jsx(i,{label:"Read-only shortcut input",description:"Read-only inputs should not advertise keyboard shortcuts.",children:e.jsx(o,{readOnly:!0,defaultValue:"release/0.1.0"})}),e.jsx(i,{label:"Disabled shortcut input",description:"Disabled inputs should not advertise keyboard shortcuts.",disabled:!0,children:e.jsx(o,{})}),e.jsx(i,{label:"Date shortcut input",description:"Non-text input types should not expose default Enter shortcut hints.",children:e.jsx(o,{type:"date","aria-label":"Date shortcut input control"})})]}),play:async({canvasElement:r})=>{const n=p(r);await a(n.getByRole("textbox",{name:/^Actionable shortcut input/})).toHaveAttribute("aria-keyshortcuts","Enter"),await a(n.getByRole("textbox",{name:/^Read-only shortcut input/})).not.toHaveAttribute("aria-keyshortcuts"),await a(n.getByRole("textbox",{name:/^Disabled shortcut input/})).not.toHaveAttribute("aria-keyshortcuts"),await a(n.getByLabelText("Date shortcut input control")).not.toHaveAttribute("aria-keyshortcuts")}};function ie(){return e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsxs("p",{style:I,children:["Click first, then press ",e.jsx("kbd",{children:"Tab"})," to verify keyboard re-entry restores focus-visible state on input."]}),e.jsx("button",{type:"button",children:"Before input"}),e.jsx(o,{"aria-label":"Focus intent re-entry input",placeholder:"Tab back into this field"})]})}const k={render:()=>e.jsx(ie,{}),play:async({canvasElement:r})=>{const n=p(r),t=await n.findByRole("button",{name:"Before input"}),s=n.getByRole("textbox",{name:"Focus intent re-entry input"});await d.click(s),await a(s).toHaveAttribute("data-focused","true"),await d.click(t),await d.tab(),await a(s).toHaveFocus(),await a(s).toHaveAttribute("data-focus-visible","true"),l.mouseDown(s,{button:0,ctrlKey:!0}),await a(s).toHaveAttribute("data-focus-visible","true")}};function se(){const[r,n]=A.useState(""),[t,s]=A.useState(!1),u=t&&r.trim().length===0;return e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsx(i,{label:"Prompt",error:u?"Prompt is required.":void 0,children:e.jsx(o,{"aria-label":"Prompt input",value:r,placeholder:"Describe release note summary...",onChange:b=>n(b.target.value),onBlur:()=>s(!0)})}),e.jsxs("small",{style:D,"data-testid":"char-count",children:[r.length," chars"]}),e.jsx(re,{disabled:r.trim().length===0,children:"Submit Prompt"})]})}const g={render:()=>e.jsx(se,{}),play:async({canvasElement:r})=>{const n=p(r),t=await n.findByRole("textbox",{name:"Prompt input"});await d.click(t),await d.tab(),await a(n.getByRole("alert")).toHaveTextContent("Prompt is required."),await a(n.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await d.type(t,"Release summary"),await a(n.queryByRole("alert")).not.toBeInTheDocument(),await a(n.getByTestId("char-count")).toHaveTextContent("15 chars"),await a(n.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},F={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(i,{label:"Grammar review",children:e.jsx(o,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:I,children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:r})=>{const t=await p(r).findByRole("textbox",{name:"Grammar review input"});await a(t).toHaveAttribute("aria-invalid","grammar")}},E={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(i,{label:"Release scope",children:e.jsx(o,{"aria-label":"   ",defaultValue:"stable"})}),e.jsxs("small",{style:I,children:["Blank ",e.jsx("code",{children:"aria-label"})," values are ignored so visible label association remains the accessible name source."]})]}),play:async({canvasElement:r})=>{const t=await p(r).findByRole("textbox",{name:"Release scope"});await a(t).not.toHaveAttribute("aria-label")}};var j,B,H;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(H=(B=y.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var R,S,T;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(S=v.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var P,K,C;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(K=h.parameters)==null?void 0:K.docs)==null?void 0:C.source}}};var V,W,q;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    keyboardInput.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(keyboardInput).toHaveAttribute("data-active", "true");
    });
    fireEvent.pointerCancel(keyboardInput);
    await waitFor(() => {
      expect(keyboardInput).not.toHaveAttribute("data-active");
    });
    keyboardInput.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(keyboardInput).toHaveAttribute("data-active", "true");
    });
    keyboardInput.dispatchEvent(new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(keyboardInput).not.toHaveAttribute("data-active");
    });
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
}`,...(q=(W=x.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,M,G;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedInputDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: /^Preempted enter input/
    });
    fireEvent.keyDown(input, {
      key: "Enter"
    });
    await expect(input).not.toHaveAttribute("data-active");
    await expect(canvas.getByTestId("input-preempted-enter-calls")).toHaveTextContent("0");
  }
}`,...(G=(M=w.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var U,L,N;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(N=(L=f.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var _,z,J;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(z=k.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=F.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const xe=["Default","AiPromptStyle","StateMatrix","InteractionA11yParity","ManagedKeysPreemptedByGlobalHandler","ShortcutHintPrecision","FocusIntentReentry","ValidationFlow","InvalidTokenSemantics","BlankAriaLabelFallback"];export{v as AiPromptStyle,E as BlankAriaLabelFallback,y as Default,k as FocusIntentReentry,x as InteractionA11yParity,F as InvalidTokenSemantics,w as ManagedKeysPreemptedByGlobalHandler,f as ShortcutHintPrecision,h as StateMatrix,g as ValidationFlow,xe as __namedExportsOrder,he as default};
