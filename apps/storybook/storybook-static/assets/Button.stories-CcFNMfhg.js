import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{B as i}from"./Button-B21ouHNm.js";import{T as nt}from"./Tag-Dmp9Dfgr.js";import{B as et}from"./Badge-ZJmMstsz.js";import{within as u,userEvent as l,expect as a,waitFor as c,fireEvent as o}from"./index-DgAF9SIF.js";import{S as d,s as p}from"./storyShowcase-DlKirntE.js";const mt={title:"Core/Button",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},v={args:{variant:"solid",size:"md"}},x={render:()=>n.jsxs(d,{maxWidth:"min(100%, 760px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(i,{variant:"solid",children:"Solid"}),n.jsx(i,{variant:"outline",children:"Outline"}),n.jsx(i,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(nt,{children:"Token: button.solid.bg"}),n.jsx(et,{tone:"success",children:"Theme-aware"})]})]})},b={render:()=>n.jsxs(d,{maxWidth:"min(100%, 800px)",gap:16,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(i,{variant:"solid",children:"Solid"}),n.jsx(i,{variant:"outline",children:"Outline"}),n.jsx(i,{variant:"ghost",children:"Ghost"}),n.jsx(i,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(i,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(i,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(i,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(i,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(i,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:p,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function at(){const[r,e]=m.useState(0),[t,s]=m.useState(!0);return n.jsxs(d,{maxWidth:"min(100%, 560px)",gap:12,children:[n.jsxs("p",{style:p,children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:r})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(i,{onClick:()=>e(y=>y+1),children:"Run Action"}),n.jsx(i,{variant:"outline",loading:t,onClick:()=>e(y=>y+10),children:"Background Task"}),n.jsx(i,{variant:"outline",onClick:()=>s(y=>!y),children:t?"Enable Background Task":"Disable Background Task"})]})]})}const w={render:()=>n.jsx(at,{}),play:async({canvasElement:r})=>{const e=u(r),t=await e.findByRole("button",{name:"Run Action"});t.focus(),o.keyDown(t,{key:"Enter",ctrlKey:!0}),o.keyUp(t,{key:"Enter",ctrlKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),o.keyDown(t,{key:"Enter",metaKey:!0}),o.keyUp(t,{key:"Enter",metaKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),o.keyDown(t,{key:" ",altKey:!0}),o.keyUp(t,{key:" ",altKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),o.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),o.keyDown(t,{key:"Enter",keyCode:229,which:229}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),o.keyDown(t,{key:"Space"}),await c(()=>{a(t.style.transform).toContain("translateY(1px)")}),o.keyUp(t,{key:"Space"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await l.keyboard("{Shift>}{Enter}{/Shift}"),await l.keyboard(" "),await a(e.getByTestId("activation-count")).toHaveTextContent("2");const s=e.getByRole("button",{name:"Background Task"});await a(s).toBeDisabled(),await a(s).toHaveAttribute("aria-busy","true"),await l.click(e.getByRole("button",{name:"Enable Background Task"})),await a(s).not.toBeDisabled(),await l.click(s),await a(e.getByTestId("activation-count")).toHaveTextContent("12")}};function ot(){const[r,e]=m.useState(0);return n.jsx("div",{onKeyDownCapture:t=>{(t.key==="Enter"||t.key===" "||t.key==="Space"||t.key==="Spacebar")&&t.preventDefault()},children:n.jsxs(d,{maxWidth:"min(100%, 520px)",gap:10,children:[n.jsxs("p",{style:p,children:["Activation count: ",n.jsx("strong",{"data-testid":"button-preempted-activation-count",children:r})]}),n.jsx(i,{onClick:()=>e(t=>t+1),children:"Preempted Action"})]})})}const g={render:()=>n.jsx(ot,{}),play:async({canvasElement:r})=>{const e=u(r),t=await e.findByRole("button",{name:"Preempted Action"});t.focus(),o.keyDown(t,{key:"Enter"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),o.keyUp(t,{key:"Enter"}),o.keyDown(t,{key:"Space"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),o.keyUp(t,{key:"Space"}),await a(e.getByTestId("button-preempted-activation-count")).toHaveTextContent("0"),await l.click(t),await a(e.getByTestId("button-preempted-activation-count")).toHaveTextContent("1")}};function it(){const[r,e]=m.useState(0);return n.jsxs(d,{maxWidth:"min(100%, 520px)",gap:10,children:[n.jsxs("p",{style:p,children:["Activation count: ",n.jsx("strong",{"data-testid":"button-local-preempted-activation-count",children:r})]}),n.jsx(i,{onClick:()=>e(t=>t+1),onKeyDown:t=>{(t.key==="Enter"||t.key===" "||t.key==="Space"||t.key==="Spacebar")&&t.preventDefault()},children:"Locally preempted action"})]})}const h={render:()=>n.jsx(it,{}),play:async({canvasElement:r})=>{const e=u(r),t=await e.findByRole("button",{name:"Locally preempted action"});t.focus(),o.keyDown(t,{key:"Enter"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),o.keyUp(t,{key:"Enter"}),o.keyDown(t,{key:"Space"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),o.keyUp(t,{key:"Space"}),await a(e.getByTestId("button-local-preempted-activation-count")).toHaveTextContent("0"),await l.click(t),await a(e.getByTestId("button-local-preempted-activation-count")).toHaveTextContent("1")}};function rt(){return n.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("p",{style:p,children:["Click first, then press ",n.jsx("kbd",{children:"Tab"})," to re-enter and verify button focus-visible fallback."]}),n.jsx("button",{type:"button",children:"Before button"}),n.jsx(i,{variant:"outline",children:"Focus intent target"})]})}const k={render:()=>n.jsx(rt,{}),play:async({canvasElement:r})=>{const e=u(r),t=await e.findByRole("button",{name:"Before button"}),s=e.getByRole("button",{name:"Focus intent target"});await l.click(t),await l.tab(),await a(s).toHaveFocus(),await c(()=>{a(s.style.boxShadow).toContain("0 0 0 3px")}),o.mouseDown(s,{button:0,ctrlKey:!0}),await c(()=>{a(s.style.boxShadow).toContain("0 0 0 3px")})}},f={render:function(){const[e,t]=m.useState(0);return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx(i,{onClick:()=>t(s=>s+1),children:"Primary Pointer Only"}),n.jsxs("small",{children:["Activation count: ",n.jsx("span",{"data-testid":"primary-pointer-count",children:e})]})]})},play:async({canvasElement:r})=>{const e=u(r),t=await e.findByRole("button",{name:"Primary Pointer Only"}),s=e.getByTestId("primary-pointer-count");o.mouseDown(t,{button:2}),o.mouseUp(t,{button:2}),await a(s).toHaveTextContent("0"),o.mouseDown(t),await c(()=>{a(t.style.transform).toContain("translateY(1px)")}),o.pointerCancel(t),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(s).toHaveTextContent("0"),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await c(()=>{a(t.style.transform).toContain("translateY(1px)")}),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(s).toHaveTextContent("0"),await l.click(t),await a(s).toHaveTextContent("1")}},B={render:()=>n.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(i,{"aria-label":"Add release note",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsx(i,{"aria-label":"Open settings",variant:"ghost",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),n.jsxs("small",{style:p,children:["Icon-only buttons should always provide an accessible name via ",n.jsx("code",{children:"aria-label"})," or"," ",n.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:r})=>{const e=u(r);await a(e.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}},E={render:()=>n.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsx("h3",{id:"button-icon-heading",style:{margin:0},children:"Release quick action"}),n.jsx(i,{"aria-label":"Fallback quick action","aria-labelledby":"button-icon-heading",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsxs("small",{style:p,children:["When both naming props exist, ",n.jsx("code",{children:"aria-labelledby"})," stays canonical and"," ",n.jsx("code",{children:"aria-label"})," fallback is suppressed."]})]}),play:async({canvasElement:r})=>{const t=await u(r).findByRole("button",{name:"Release quick action"});await a(t).toHaveAttribute("aria-labelledby","button-icon-heading"),await a(t).not.toHaveAttribute("aria-label")}};var T,C,S;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(S=(C=v.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var j,D,A;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 760px)" gap={12}>
      <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }}>
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div style={{
      display: "flex",
      gap: 8,
      alignItems: "center"
    }}>
        <Tag>Token: button.solid.bg</Tag>
        <Badge tone="success">Theme-aware</Badge>
      </div>
    </StoryShowcaseFrame>
}`,...(A=(D=x.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var H,I,R;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 800px)" gap={16}>
      <div style={{
      display: "grid",
      gap: 8
    }}>
        <strong>Default + Disabled</strong>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="solid" disabled>
            Solid Disabled
          </Button>
          <Button variant="outline" disabled>
            Outline Disabled
          </Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>
        </div>
      </div>

      <div style={{
      display: "grid",
      gap: 8
    }}>
        <strong>Loading + Size</strong>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8
      }}>
          <Button size="sm" loading loadingText="Loading">
            Save
          </Button>
          <Button size="md" loading>
            Generate Response
          </Button>
          <Button size="lg" variant="outline" loading loadingText="Publishing">
            Publish
          </Button>
        </div>
      </div>

      <small style={storyMutedTextStyle}>
        Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to
        validate.
      </small>
    </StoryShowcaseFrame>
}`,...(R=(I=b.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,F,K;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <KeyboardActivationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const runAction = await canvas.findByRole("button", {
      name: "Run Action"
    });
    runAction.focus();
    fireEvent.keyDown(runAction, {
      key: "Enter",
      ctrlKey: true
    });
    fireEvent.keyUp(runAction, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");
    fireEvent.keyDown(runAction, {
      key: "Enter",
      metaKey: true
    });
    fireEvent.keyUp(runAction, {
      key: "Enter",
      metaKey: true
    });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");
    fireEvent.keyDown(runAction, {
      key: " ",
      altKey: true
    });
    fireEvent.keyUp(runAction, {
      key: " ",
      altKey: true
    });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");
    fireEvent.keyDown(runAction, {
      key: "Enter",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await waitFor(() => {
      expect(runAction.style.transform).not.toContain("translateY(1px)");
    });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");
    fireEvent.keyDown(runAction, {
      key: "Enter",
      keyCode: 229,
      which: 229
    });
    await waitFor(() => {
      expect(runAction.style.transform).not.toContain("translateY(1px)");
    });
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("0");
    fireEvent.keyDown(runAction, {
      key: "Space"
    });
    await waitFor(() => {
      expect(runAction.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(runAction, {
      key: "Space"
    });
    await waitFor(() => {
      expect(runAction.style.transform).not.toContain("translateY(1px)");
    });
    await userEvent.keyboard("{Shift>}{Enter}{/Shift}");
    await userEvent.keyboard(" ");
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("2");
    const loadingButton = canvas.getByRole("button", {
      name: "Background Task"
    });
    await expect(loadingButton).toBeDisabled();
    await expect(loadingButton).toHaveAttribute("aria-busy", "true");
    await userEvent.click(canvas.getByRole("button", {
      name: "Enable Background Task"
    }));
    await expect(loadingButton).not.toBeDisabled();
    await userEvent.click(loadingButton);
    await expect(canvas.getByTestId("activation-count")).toHaveTextContent("12");
  }
}`,...(K=(F=w.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Y,O,W;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedButtonDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: "Preempted Action"
    });
    button.focus();
    fireEvent.keyDown(button, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(button.style.transform).not.toContain("translateY(1px)");
    });
    fireEvent.keyUp(button, {
      key: "Enter"
    });
    fireEvent.keyDown(button, {
      key: "Space"
    });
    await waitFor(() => {
      expect(button.style.transform).not.toContain("translateY(1px)");
    });
    fireEvent.keyUp(button, {
      key: "Space"
    });
    await expect(canvas.getByTestId("button-preempted-activation-count")).toHaveTextContent("0");
    await userEvent.click(button);
    await expect(canvas.getByTestId("button-preempted-activation-count")).toHaveTextContent("1");
  }
}`,...(W=(O=g.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var U,M,L;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedLocallyButtonDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: "Locally preempted action"
    });
    button.focus();
    fireEvent.keyDown(button, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(button.style.transform).not.toContain("translateY(1px)");
    });
    fireEvent.keyUp(button, {
      key: "Enter"
    });
    fireEvent.keyDown(button, {
      key: "Space"
    });
    await waitFor(() => {
      expect(button.style.transform).not.toContain("translateY(1px)");
    });
    fireEvent.keyUp(button, {
      key: "Space"
    });
    await expect(canvas.getByTestId("button-local-preempted-activation-count")).toHaveTextContent("0");
    await userEvent.click(button);
    await expect(canvas.getByTestId("button-local-preempted-activation-count")).toHaveTextContent("1");
  }
}`,...(L=(M=h.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var z,G,q;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <FocusIntentReentryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before button"
    });
    const target = canvas.getByRole("button", {
      name: "Focus intent target"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(target).toHaveFocus();
    await waitFor(() => {
      expect(target.style.boxShadow).toContain("0 0 0 3px");
    });
    fireEvent.mouseDown(target, {
      button: 0,
      ctrlKey: true
    });
    await waitFor(() => {
      expect(target.style.boxShadow).toContain("0 0 0 3px");
    });
  }
}`,...(q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var N,V,_;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function RenderPrimaryPointerOnly() {
    const [count, setCount] = React.useState(0);
    return <div style={{
      display: "grid",
      gap: 8
    }}>
        <Button onClick={() => setCount(value => value + 1)}>Primary Pointer Only</Button>
        <small>
          Activation count: <span data-testid="primary-pointer-count">{count}</span>
        </small>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: "Primary Pointer Only"
    });
    const count = canvas.getByTestId("primary-pointer-count");
    fireEvent.mouseDown(button, {
      button: 2
    });
    fireEvent.mouseUp(button, {
      button: 2
    });
    await expect(count).toHaveTextContent("0");
    fireEvent.mouseDown(button);
    await waitFor(() => {
      expect(button.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(button);
    await waitFor(() => {
      expect(button.style.transform).not.toContain("translateY(1px)");
    });
    await expect(count).toHaveTextContent("0");
    button.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(button.style.transform).toContain("translateY(1px)");
    });
    button.dispatchEvent(new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(button.style.transform).not.toContain("translateY(1px)");
    });
    await expect(count).toHaveTextContent("0");
    await userEvent.click(button);
    await expect(count).toHaveTextContent("1");
  }
}`,...(_=(V=f.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var J,Q,X;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={10}>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <Button aria-label="Add release note" variant="outline">
          <span aria-hidden="true">+</span>
        </Button>
        <Button aria-label="Open settings" variant="ghost">
          <span aria-hidden="true">⚙</span>
        </Button>
      </div>
      <small style={storyMutedTextStyle}>
        Icon-only buttons should always provide an accessible name via <code>aria-label</code> or{" "}
        <code>aria-labelledby</code>.
      </small>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", {
      name: "Add release note"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Open settings"
    })).toBeInTheDocument();
  }
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,tt;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={10}>
      <h3 id="button-icon-heading" style={{
      margin: 0
    }}>
        Release quick action
      </h3>
      <Button aria-label="Fallback quick action" aria-labelledby="button-icon-heading" variant="outline">
        <span aria-hidden="true">+</span>
      </Button>
      <small style={storyMutedTextStyle}>
        When both naming props exist, <code>aria-labelledby</code> stays canonical and{" "}
        <code>aria-label</code> fallback is suppressed.
      </small>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: "Release quick action"
    });
    await expect(button).toHaveAttribute("aria-labelledby", "button-icon-heading");
    await expect(button).not.toHaveAttribute("aria-label");
  }
}`,...(tt=($=E.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};const vt=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","FocusIntentReentry","PrimaryPointerOnly","IconOnlyAccessibleName","IconOnlyLabelledByPrecedence"];export{k as FocusIntentReentry,B as IconOnlyAccessibleName,E as IconOnlyLabelledByPrecedence,w as KeyboardActivation,g as ManagedKeysPreemptedByGlobalHandler,h as ManagedKeysPreemptedByLocalHandler,v as Primary,f as PrimaryPointerOnly,b as StateMatrix,x as VariantMatrix,vt as __namedExportsOrder,mt as default};
