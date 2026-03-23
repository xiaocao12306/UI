import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{B as i}from"./Button-DvJUO9m9.js";import{T as ut}from"./Tag-Dmp9Dfgr.js";import{B as dt}from"./Badge-Cvc2u0v9.js";import{within as y,userEvent as l,expect as a,waitFor as c,fireEvent as s}from"./index-DgAF9SIF.js";import{S as u,s as d}from"./storyShowcase-DlKirntE.js";const Ct={title:"Core/Button",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},v={args:{variant:"solid",size:"md"}},b={render:()=>n.jsxs(u,{maxWidth:"min(100%, 760px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(i,{variant:"solid",children:"Solid"}),n.jsx(i,{variant:"outline",children:"Outline"}),n.jsx(i,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(ut,{children:"Token: button.solid.bg"}),n.jsx(dt,{tone:"success",children:"Theme-aware"})]})]})},x={render:()=>n.jsxs(u,{maxWidth:"min(100%, 800px)",gap:16,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(i,{variant:"solid",children:"Solid"}),n.jsx(i,{variant:"outline",children:"Outline"}),n.jsx(i,{variant:"ghost",children:"Ghost"}),n.jsx(i,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(i,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(i,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(i,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(i,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(i,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:d,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function yt(){const[o,e]=m.useState(0);return n.jsxs(u,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("p",{style:d,children:["Activation count: ",n.jsx("strong",{"data-testid":"button-runtime-loading-count",children:o})]}),n.jsx(i,{variant:"outline",loading:"true",onClick:()=>e(t=>t+1),children:"Runtime loading fallback"}),n.jsx("small",{style:d,children:"Invalid runtime boolean config should degrade to non-loading so button interactions stay available."})]})}const w={render:()=>n.jsx(yt,{}),play:async({canvasElement:o})=>{const e=y(o),t=await e.findByRole("button",{name:"Runtime loading fallback"}),r=e.getByTestId("button-runtime-loading-count");await a(t).not.toBeDisabled(),await a(t).not.toHaveAttribute("aria-busy"),await a(t).not.toHaveAttribute("data-loading"),await l.click(t),await a(r).toHaveTextContent("1")}},g={render:()=>n.jsxs(u,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsx(i,{variant:" OUTLINE ",size:" LG ",children:"Runtime visual token"}),n.jsx(i,{variant:"fancy",size:"xl",children:"Runtime visual fallback"})]}),play:async({canvasElement:o})=>{const e=y(o),r=(await e.findByRole("button",{name:"Runtime visual token"})).getAttribute("style")??"";await a(r).toContain("var(--aurora-button-height-lg)"),await a(r).toContain("var(--aurora-button-border)");const S=(await e.findByRole("button",{name:"Runtime visual fallback"})).getAttribute("style")??"";await a(S).toContain("var(--aurora-button-height-md)"),await a(S).toContain("var(--aurora-button-solid-bg)")}};function pt(){const[o,e]=m.useState(0),[t,r]=m.useState(!0);return n.jsxs(u,{maxWidth:"min(100%, 560px)",gap:12,children:[n.jsxs("p",{style:d,children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:o})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(i,{onClick:()=>e(p=>p+1),children:"Run Action"}),n.jsx(i,{variant:"outline",loading:t,onClick:()=>e(p=>p+10),children:"Background Task"}),n.jsx(i,{variant:"outline",onClick:()=>r(p=>!p),children:t?"Enable Background Task":"Disable Background Task"})]})]})}const h={render:()=>n.jsx(pt,{}),play:async({canvasElement:o})=>{const e=y(o),t=await e.findByRole("button",{name:"Run Action"});t.focus(),s.keyDown(t,{key:"Enter",ctrlKey:!0}),s.keyUp(t,{key:"Enter",ctrlKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),s.keyDown(t,{key:"Enter",metaKey:!0}),s.keyUp(t,{key:"Enter",metaKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),s.keyDown(t,{key:" ",altKey:!0}),s.keyUp(t,{key:" ",altKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),s.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),s.keyDown(t,{key:"Enter",keyCode:229,which:229}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),s.keyDown(t,{key:"Space"}),await c(()=>{a(t.style.transform).toContain("translateY(1px)")}),s.keyUp(t,{key:"Space"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await l.keyboard("{Shift>}{Enter}{/Shift}"),await l.keyboard(" "),await a(e.getByTestId("activation-count")).toHaveTextContent("2");const r=e.getByRole("button",{name:"Background Task"});await a(r).toBeDisabled(),await a(r).toHaveAttribute("aria-busy","true"),await l.click(e.getByRole("button",{name:"Enable Background Task"})),await a(r).not.toBeDisabled(),await l.click(r),await a(e.getByTestId("activation-count")).toHaveTextContent("12")}};function mt(){const[o,e]=m.useState(0);return n.jsx("div",{onKeyDownCapture:t=>{(t.key==="Enter"||t.key===" "||t.key==="Space"||t.key==="Spacebar")&&t.preventDefault()},children:n.jsxs(u,{maxWidth:"min(100%, 520px)",gap:10,children:[n.jsxs("p",{style:d,children:["Activation count: ",n.jsx("strong",{"data-testid":"button-preempted-activation-count",children:o})]}),n.jsx(i,{onClick:()=>e(t=>t+1),children:"Preempted Action"})]})})}const k={render:()=>n.jsx(mt,{}),play:async({canvasElement:o})=>{const e=y(o),t=await e.findByRole("button",{name:"Preempted Action"});t.focus(),s.keyDown(t,{key:"Enter"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),s.keyUp(t,{key:"Enter"}),s.keyDown(t,{key:"Space"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),s.keyUp(t,{key:"Space"}),await a(e.getByTestId("button-preempted-activation-count")).toHaveTextContent("0"),await l.click(t),await a(e.getByTestId("button-preempted-activation-count")).toHaveTextContent("1")}};function vt(){const[o,e]=m.useState(0);return n.jsxs(u,{maxWidth:"min(100%, 520px)",gap:10,children:[n.jsxs("p",{style:d,children:["Activation count: ",n.jsx("strong",{"data-testid":"button-local-preempted-activation-count",children:o})]}),n.jsx(i,{onClick:()=>e(t=>t+1),onKeyDown:t=>{(t.key==="Enter"||t.key===" "||t.key==="Space"||t.key==="Spacebar")&&t.preventDefault()},children:"Locally preempted action"})]})}const f={render:()=>n.jsx(vt,{}),play:async({canvasElement:o})=>{const e=y(o),t=await e.findByRole("button",{name:"Locally preempted action"});t.focus(),s.keyDown(t,{key:"Enter"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),s.keyUp(t,{key:"Enter"}),s.keyDown(t,{key:"Space"}),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),s.keyUp(t,{key:"Space"}),await a(e.getByTestId("button-local-preempted-activation-count")).toHaveTextContent("0"),await l.click(t),await a(e.getByTestId("button-local-preempted-activation-count")).toHaveTextContent("1")}};function bt(){return n.jsxs(u,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("p",{style:d,children:["Click first, then press ",n.jsx("kbd",{children:"Tab"})," to re-enter and verify button focus-visible fallback."]}),n.jsx("button",{type:"button",children:"Before button"}),n.jsx(i,{variant:"outline",children:"Focus intent target"})]})}const B={render:()=>n.jsx(bt,{}),play:async({canvasElement:o})=>{const e=y(o),t=await e.findByRole("button",{name:"Before button"}),r=e.getByRole("button",{name:"Focus intent target"});await l.click(t),await l.tab(),await a(r).toHaveFocus(),await c(()=>{a(r.style.boxShadow).toContain("0 0 0 3px")}),s.mouseDown(r,{button:0,ctrlKey:!0}),await c(()=>{a(r.style.boxShadow).toContain("0 0 0 3px")})}},C={render:function(){const[e,t]=m.useState(0);return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx(i,{onClick:()=>t(r=>r+1),children:"Primary Pointer Only"}),n.jsxs("small",{children:["Activation count: ",n.jsx("span",{"data-testid":"primary-pointer-count",children:e})]})]})},play:async({canvasElement:o})=>{const e=y(o),t=await e.findByRole("button",{name:"Primary Pointer Only"}),r=e.getByTestId("primary-pointer-count");s.mouseDown(t,{button:2}),s.mouseUp(t,{button:2}),await a(r).toHaveTextContent("0"),s.mouseDown(t),await c(()=>{a(t.style.transform).toContain("translateY(1px)")}),s.pointerCancel(t),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(r).toHaveTextContent("0"),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await c(()=>{a(t.style.transform).toContain("translateY(1px)")}),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await c(()=>{a(t.style.transform).not.toContain("translateY(1px)")}),await a(r).toHaveTextContent("0"),await l.click(t),await a(r).toHaveTextContent("1")}},E={render:()=>n.jsxs(u,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(i,{"aria-label":"Add release note",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsx(i,{"aria-label":"Open settings",variant:"ghost",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),n.jsxs("small",{style:d,children:["Icon-only buttons should always provide an accessible name via ",n.jsx("code",{children:"aria-label"})," or"," ",n.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:o})=>{const e=y(o);await a(e.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}},T={render:()=>n.jsxs(u,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsx("h3",{id:"button-icon-heading",style:{margin:0},children:"Release quick action"}),n.jsx(i,{"aria-label":"Fallback quick action","aria-labelledby":"button-icon-heading",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsxs("small",{style:d,children:["When both naming props exist, ",n.jsx("code",{children:"aria-labelledby"})," stays canonical and"," ",n.jsx("code",{children:"aria-label"})," fallback is suppressed."]})]}),play:async({canvasElement:o})=>{const t=await y(o).findByRole("button",{name:"Release quick action"});await a(t).toHaveAttribute("aria-labelledby","button-icon-heading"),await a(t).not.toHaveAttribute("aria-label")}};var j,R,D;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(D=(R=v.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,H,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(H=b.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var P,F,K;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(F=x.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var z,O,W;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationButtonDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: "Runtime loading fallback"
    });
    const count = canvas.getByTestId("button-runtime-loading-count");
    await expect(button).not.toBeDisabled();
    await expect(button).not.toHaveAttribute("aria-busy");
    await expect(button).not.toHaveAttribute("data-loading");
    await userEvent.click(button);
    await expect(count).toHaveTextContent("1");
  }
}`,...(W=(O=w.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var Y,U,L;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 560px)" gap={10}>
      <Button variant={" OUTLINE " as unknown as "outline"} size={" LG " as unknown as "lg"}>
        Runtime visual token
      </Button>
      <Button variant={"fancy" as unknown as "solid"} size={"xl" as unknown as "md"}>
        Runtime visual fallback
      </Button>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const normalizedButton = await canvas.findByRole("button", {
      name: "Runtime visual token"
    });
    const normalizedStyle = normalizedButton.getAttribute("style") ?? "";
    await expect(normalizedStyle).toContain("var(--aurora-button-height-lg)");
    await expect(normalizedStyle).toContain("var(--aurora-button-border)");
    const fallbackButton = await canvas.findByRole("button", {
      name: "Runtime visual fallback"
    });
    const fallbackStyle = fallbackButton.getAttribute("style") ?? "";
    await expect(fallbackStyle).toContain("var(--aurora-button-height-md)");
    await expect(fallbackStyle).toContain("var(--aurora-button-solid-bg)");
  }
}`,...(L=(U=g.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var M,G,N;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(G=h.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var q,V,_;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(V=k.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,tt;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(tt=($=B.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var nt,et,at;C.parameters={...C.parameters,docs:{...(nt=C.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(at=(et=C.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var ot,it,rt;E.parameters={...E.parameters,docs:{...(ot=E.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(it=E.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var st,ct,lt;T.parameters={...T.parameters,docs:{...(st=T.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(lt=(ct=T.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};const Et=["Primary","VariantMatrix","StateMatrix","RuntimeBooleanConfigNormalization","RuntimeVisualConfigNormalization","KeyboardActivation","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","FocusIntentReentry","PrimaryPointerOnly","IconOnlyAccessibleName","IconOnlyLabelledByPrecedence"];export{B as FocusIntentReentry,E as IconOnlyAccessibleName,T as IconOnlyLabelledByPrecedence,h as KeyboardActivation,k as ManagedKeysPreemptedByGlobalHandler,f as ManagedKeysPreemptedByLocalHandler,v as Primary,C as PrimaryPointerOnly,w as RuntimeBooleanConfigNormalization,g as RuntimeVisualConfigNormalization,x as StateMatrix,b as VariantMatrix,Et as __namedExportsOrder,Ct as default};
