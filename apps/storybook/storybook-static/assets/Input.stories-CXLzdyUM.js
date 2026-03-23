import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as H}from"./index-BWu4c2F4.js";import{B as ve}from"./Button-CYa37MZO.js";import{I as o}from"./Input-Dqn1yoLu.js";import{F as i}from"./FormField-CHmEmU2O.js";import{within as d,expect as a,userEvent as p,fireEvent as l,waitFor as b}from"./index-DgAF9SIF.js";import{S as c,a as D,s as y}from"./storyShowcase-DlKirntE.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const De={title:"Form/Input",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},v={},h={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(o,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(ve,{children:"Send"})]}),e.jsx("small",{style:D,children:"Tip: switch theme in toolbar to validate input token contrast."})]})},x={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(o,{placeholder:"Type project name..."})}),e.jsx(i,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(o,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(i,{label:"Required inherited from control",children:e.jsx(o,{placeholder:"Inherited required field",required:!0})}),e.jsx(i,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(o,{placeholder:"Disabled field"})}),e.jsx(i,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(o,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})},w={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Keyboard interaction",description:"Tab focus should show ring; Enter feedback is suppressed during IME composition.",children:e.jsx(o,{defaultValue:"release-notes"})}),e.jsx(i,{label:"Read-only propagated",children:e.jsx(o,{"aria-label":"Read-only propagated input",readOnly:!0,defaultValue:"stable"})}),e.jsx(i,{label:"Disabled interaction guard",disabled:!0,children:e.jsx(o,{"aria-label":"Disabled interaction guard input",placeholder:"Disabled input"})})]}),play:async({canvasElement:r})=>{const n=d(r),t=await n.findByRole("textbox",{name:"Keyboard interaction"}),s=n.getByText("Keyboard interaction").closest("label");await p.click(t),await a(t).toHaveAttribute("data-focused","true"),await a(s).toHaveAttribute("id"),await a(t.getAttribute("aria-labelledby")??"").toContain((s==null?void 0:s.id)??""),l.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",ctrlKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",metaKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",altKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter",shiftKey:!0}),l.keyUp(t,{key:"Enter",shiftKey:!0}),await a(t).not.toHaveAttribute("data-active"),l.keyDown(t,{key:"Enter"}),l.keyUp(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active"),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await b(()=>{a(t).toHaveAttribute("data-active","true")}),l.pointerCancel(t),await b(()=>{a(t).not.toHaveAttribute("data-active")}),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await b(()=>{a(t).toHaveAttribute("data-active","true")}),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await b(()=>{a(t).not.toHaveAttribute("data-active")});const u=n.getByRole("textbox",{name:"Read-only propagated input"});await a(u).toHaveAttribute("readonly"),u.focus(),l.keyDown(u,{key:"Enter"}),l.keyUp(u,{key:"Enter"}),await a(u).not.toHaveAttribute("data-active");const m=n.getByRole("textbox",{name:"Disabled interaction guard input"});await a(m).toBeDisabled(),await p.hover(m),await a(m).not.toHaveAttribute("data-hovered")}};function he(){const[r,n]=H.useState(0);return e.jsx("div",{onKeyDownCapture:t=>{t.key==="Enter"&&t.preventDefault()},children:e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Preempted enter input",description:"Global key guards can preempt Enter before local active-feedback handlers.",children:e.jsx(o,{onKeyDown:t=>{!t.defaultPrevented&&t.key==="Enter"&&n(s=>s+1)}})}),e.jsxs("p",{style:y,children:["Enter handler calls:"," ",e.jsx("strong",{"data-testid":"input-preempted-enter-calls",style:D,children:r})]})]})})}const k={render:()=>e.jsx(he,{}),play:async({canvasElement:r})=>{const n=d(r),t=await n.findByRole("textbox",{name:/^Preempted enter input/});l.keyDown(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active"),await a(n.getByTestId("input-preempted-enter-calls")).toHaveTextContent("0")}};function xe(){const[r,n]=H.useState(0);return e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Locally preempted enter input",description:"Input-level key guards can preempt Enter before local active-feedback handlers.",children:e.jsx(o,{onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),n(s=>s+1))}})}),e.jsxs("p",{style:y,children:["Enter handler calls:"," ",e.jsx("strong",{"data-testid":"input-local-preempted-enter-calls",style:D,children:r})]})]})}const f={render:()=>e.jsx(xe,{}),play:async({canvasElement:r})=>{const n=d(r),t=await n.findByRole("textbox",{name:/^Locally preempted enter input/});l.keyDown(t,{key:"Enter"}),await a(t).not.toHaveAttribute("data-active"),await a(n.getByTestId("input-local-preempted-enter-calls")).toHaveTextContent("1")}},g={render:()=>e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:12,children:[e.jsx(i,{label:"Actionable shortcut input",description:"Actionable inputs should expose Enter shortcut hints.",children:e.jsx(o,{})}),e.jsx(i,{label:"Read-only shortcut input",description:"Read-only inputs should not advertise keyboard shortcuts.",children:e.jsx(o,{readOnly:!0,defaultValue:"release/0.1.0"})}),e.jsx(i,{label:"Disabled shortcut input",description:"Disabled inputs should not advertise keyboard shortcuts.",disabled:!0,children:e.jsx(o,{})}),e.jsx(i,{label:"Date shortcut input",description:"Non-text input types should not expose default Enter shortcut hints.",children:e.jsx(o,{type:"date","aria-label":"Date shortcut input control"})})]}),play:async({canvasElement:r})=>{const n=d(r);await a(n.getByRole("textbox",{name:/^Actionable shortcut input/})).toHaveAttribute("aria-keyshortcuts","Enter"),await a(n.getByRole("textbox",{name:/^Read-only shortcut input/})).not.toHaveAttribute("aria-keyshortcuts"),await a(n.getByRole("textbox",{name:/^Disabled shortcut input/})).not.toHaveAttribute("aria-keyshortcuts"),await a(n.getByLabelText("Date shortcut input control")).not.toHaveAttribute("aria-keyshortcuts")}},E={render:()=>e.jsx(c,{maxWidth:"min(100%, 600px)",gap:12,children:e.jsx(i,{label:"Blank type fallback input",description:"Blank input type should normalize to text semantics with Enter shortcut hints.",children:e.jsx(o,{type:"   ","aria-label":"Blank type fallback input control"})})}),play:async({canvasElement:r})=>{const t=d(r).getByRole("textbox",{name:"Blank type fallback input control"});await a(t).toHaveAttribute("type","text"),await a(t).toHaveAttribute("aria-keyshortcuts","Enter")}},F={render:()=>e.jsx(c,{maxWidth:"min(100%, 600px)",gap:12,children:e.jsx(i,{label:"Uppercase type normalization input",description:"Uppercase and padded type tokens should normalize to lowercase text-like semantics.",children:e.jsx(o,{type:" EMAIL ","aria-label":"Uppercase type normalization input control"})})}),play:async({canvasElement:r})=>{const t=d(r).getByRole("textbox",{name:"Uppercase type normalization input control"});await a(t).toHaveAttribute("type","email"),await a(t).toHaveAttribute("aria-keyshortcuts","Enter")}};function we(){return e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsxs("p",{style:y,children:["Click first, then press ",e.jsx("kbd",{children:"Tab"})," to verify keyboard re-entry restores focus-visible state on input."]}),e.jsx("button",{type:"button",children:"Before input"}),e.jsx(o,{"aria-label":"Focus intent re-entry input",placeholder:"Tab back into this field"})]})}const I={render:()=>e.jsx(we,{}),play:async({canvasElement:r})=>{const n=d(r),t=await n.findByRole("button",{name:"Before input"}),s=n.getByRole("textbox",{name:"Focus intent re-entry input"});await p.click(s),await a(s).toHaveAttribute("data-focused","true"),await p.click(t),await p.tab(),await a(s).toHaveFocus(),await a(s).toHaveAttribute("data-focus-visible","true"),l.mouseDown(s,{button:0,ctrlKey:!0}),await a(s).toHaveAttribute("data-focus-visible","true")}};function ke(){const[r,n]=H.useState(""),[t,s]=H.useState(!1),u=t&&r.trim().length===0;return e.jsxs(c,{maxWidth:"min(100%, 600px)",gap:10,children:[e.jsx(i,{label:"Prompt",error:u?"Prompt is required.":void 0,children:e.jsx(o,{"aria-label":"Prompt input",value:r,placeholder:"Describe release note summary...",onChange:m=>n(m.target.value),onBlur:()=>s(!0)})}),e.jsxs("small",{style:D,"data-testid":"char-count",children:[r.length," chars"]}),e.jsx(ve,{disabled:r.trim().length===0,children:"Submit Prompt"})]})}const A={render:()=>e.jsx(ke,{}),play:async({canvasElement:r})=>{const n=d(r),t=await n.findByRole("textbox",{name:"Prompt input"});await p.click(t),await p.tab(),await a(n.getByRole("alert")).toHaveTextContent("Prompt is required."),await a(n.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await p.type(t,"Release summary"),await a(n.queryByRole("alert")).not.toBeInTheDocument(),await a(n.getByTestId("char-count")).toHaveTextContent("15 chars"),await a(n.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}},B={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(i,{label:"Grammar review",children:e.jsx(o,{"aria-label":"Grammar review input","aria-invalid":"grammar",defaultValue:"Needs grammar check"})}),e.jsxs("small",{style:y,children:["Preserves ",e.jsx("code",{children:'aria-invalid="grammar"'})," for assistive-tech integrations that distinguish grammar/spelling corrections."]})]}),play:async({canvasElement:r})=>{const t=await d(r).findByRole("textbox",{name:"Grammar review input"});await a(t).toHaveAttribute("aria-invalid","grammar")}},j={render:()=>e.jsxs(c,{maxWidth:"min(100%, 560px)",gap:8,children:[e.jsx(i,{label:"Release scope",children:e.jsx(o,{"aria-label":"   ",defaultValue:"stable"})}),e.jsxs("small",{style:y,children:["Blank ",e.jsx("code",{children:"aria-label"})," values are ignored so visible label association remains the accessible name source."]})]}),play:async({canvasElement:r})=>{const t=await d(r).findByRole("textbox",{name:"Release scope"});await a(t).not.toHaveAttribute("aria-label")}};var S,R,T;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(T=(R=v.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var P,K,C;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(K=h.parameters)==null?void 0:K.docs)==null?void 0:C.source}}};var W,M,V;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(M=x.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var U,q,O;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(O=(q=w.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var L,z,G;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(z=k.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var N,_,J;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedLocallyInputDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: /^Locally preempted enter input/
    });
    fireEvent.keyDown(input, {
      key: "Enter"
    });
    await expect(input).not.toHaveAttribute("data-active");
    await expect(canvas.getByTestId("input-local-preempted-enter-calls")).toHaveTextContent("1");
  }
}`,...(J=(_=f.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
      <FormField label="Blank type fallback input" description="Blank input type should normalize to text semantics with Enter shortcut hints.">
        <Input type="   " aria-label="Blank type fallback input control" />
      </FormField>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: "Blank type fallback input control"
    });
    await expect(input).toHaveAttribute("type", "text");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter");
  }
}`,...(ee=($=E.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 600px)" gap={12}>
      <FormField label="Uppercase type normalization input" description="Uppercase and padded type tokens should normalize to lowercase text-like semantics.">
        <Input type=" EMAIL " aria-label="Uppercase type normalization input control" />
      </FormField>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", {
      name: "Uppercase type normalization input control"
    });
    await expect(input).toHaveAttribute("type", "email");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter");
  }
}`,...(ne=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,ie;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,le,ce;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,ue;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ye,be;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const Se=["Default","AiPromptStyle","StateMatrix","InteractionA11yParity","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","ShortcutHintPrecision","BlankTypeFallback","UppercaseTypeNormalization","FocusIntentReentry","ValidationFlow","InvalidTokenSemantics","BlankAriaLabelFallback"];export{h as AiPromptStyle,j as BlankAriaLabelFallback,E as BlankTypeFallback,v as Default,I as FocusIntentReentry,w as InteractionA11yParity,B as InvalidTokenSemantics,k as ManagedKeysPreemptedByGlobalHandler,f as ManagedKeysPreemptedByLocalHandler,g as ShortcutHintPrecision,x as StateMatrix,F as UppercaseTypeNormalization,A as ValidationFlow,Se as __namedExportsOrder,De as default};
