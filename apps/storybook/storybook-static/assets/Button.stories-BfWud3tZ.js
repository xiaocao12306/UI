import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{B as o}from"./Button-DirECuRH.js";import{T as V}from"./Tag-Dmp9Dfgr.js";import{B as _}from"./Badge-ZJmMstsz.js";import{within as y,userEvent as l,expect as e,waitFor as c,fireEvent as r}from"./index-DgAF9SIF.js";import{S as d,s as p}from"./storyShowcase-Bw5VyCj0.js";const ot={title:"Core/Button",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},v={args:{variant:"solid",size:"md"}},m={render:()=>t.jsxs(d,{maxWidth:"min(100%, 760px)",gap:12,children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(o,{variant:"solid",children:"Solid"}),t.jsx(o,{variant:"outline",children:"Outline"}),t.jsx(o,{variant:"ghost",children:"Ghost"})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(V,{children:"Token: button.solid.bg"}),t.jsx(_,{tone:"success",children:"Theme-aware"})]})]})},x={render:()=>t.jsxs(d,{maxWidth:"min(100%, 800px)",gap:16,children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("strong",{children:"Default + Disabled"}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(o,{variant:"solid",children:"Solid"}),t.jsx(o,{variant:"outline",children:"Outline"}),t.jsx(o,{variant:"ghost",children:"Ghost"}),t.jsx(o,{variant:"solid",disabled:!0,children:"Solid Disabled"}),t.jsx(o,{variant:"outline",disabled:!0,children:"Outline Disabled"}),t.jsx(o,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("strong",{children:"Loading + Size"}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[t.jsx(o,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),t.jsx(o,{size:"md",loading:!0,children:"Generate Response"}),t.jsx(o,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),t.jsx("small",{style:p,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function J(){const[s,a]=f.useState(0),[n,i]=f.useState(!0);return t.jsxs(d,{maxWidth:"min(100%, 560px)",gap:12,children:[t.jsxs("p",{style:p,children:["Activation count: ",t.jsx("strong",{"data-testid":"activation-count",children:s})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(o,{onClick:()=>a(u=>u+1),children:"Run Action"}),t.jsx(o,{variant:"outline",loading:n,onClick:()=>a(u=>u+10),children:"Background Task"}),t.jsx(o,{variant:"outline",onClick:()=>i(u=>!u),children:n?"Enable Background Task":"Disable Background Task"})]})]})}const b={render:()=>t.jsx(J,{}),play:async({canvasElement:s})=>{const a=y(s),n=await a.findByRole("button",{name:"Run Action"});n.focus(),r.keyDown(n,{key:"Enter",ctrlKey:!0}),r.keyUp(n,{key:"Enter",ctrlKey:!0}),await e(a.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Enter",metaKey:!0}),r.keyUp(n,{key:"Enter",metaKey:!0}),await e(a.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:" ",altKey:!0}),r.keyUp(n,{key:" ",altKey:!0}),await e(a.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await c(()=>{e(n.style.transform).not.toContain("translateY(1px)")}),await e(a.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Enter",keyCode:229,which:229}),await c(()=>{e(n.style.transform).not.toContain("translateY(1px)")}),await e(a.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Space"}),await c(()=>{e(n.style.transform).toContain("translateY(1px)")}),r.keyUp(n,{key:"Space"}),await c(()=>{e(n.style.transform).not.toContain("translateY(1px)")}),await l.keyboard("{Shift>}{Enter}{/Shift}"),await l.keyboard(" "),await e(a.getByTestId("activation-count")).toHaveTextContent("2");const i=a.getByRole("button",{name:"Background Task"});await e(i).toBeDisabled(),await e(i).toHaveAttribute("aria-busy","true"),await l.click(a.getByRole("button",{name:"Enable Background Task"})),await e(i).not.toBeDisabled(),await l.click(i),await e(a.getByTestId("activation-count")).toHaveTextContent("12")}};function Q(){return t.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[t.jsxs("p",{style:p,children:["Click first, then press ",t.jsx("kbd",{children:"Tab"})," to re-enter and verify button focus-visible fallback."]}),t.jsx("button",{type:"button",children:"Before button"}),t.jsx(o,{variant:"outline",children:"Focus intent target"})]})}const g={render:()=>t.jsx(Q,{}),play:async({canvasElement:s})=>{const a=y(s),n=await a.findByRole("button",{name:"Before button"}),i=a.getByRole("button",{name:"Focus intent target"});await l.click(n),await l.tab(),await e(i).toHaveFocus(),await c(()=>{e(i.style.boxShadow).toContain("0 0 0 3px")}),r.mouseDown(i,{button:0,ctrlKey:!0}),await c(()=>{e(i.style.boxShadow).toContain("0 0 0 3px")})}},h={render:function(){const[a,n]=f.useState(0);return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx(o,{onClick:()=>n(i=>i+1),children:"Primary Pointer Only"}),t.jsxs("small",{children:["Activation count: ",t.jsx("span",{"data-testid":"primary-pointer-count",children:a})]})]})},play:async({canvasElement:s})=>{const a=y(s),n=await a.findByRole("button",{name:"Primary Pointer Only"}),i=a.getByTestId("primary-pointer-count");r.mouseDown(n,{button:2}),r.mouseUp(n,{button:2}),await e(i).toHaveTextContent("0"),r.mouseDown(n),await c(()=>{e(n.style.transform).toContain("translateY(1px)")}),r.pointerCancel(n),await c(()=>{e(n.style.transform).not.toContain("translateY(1px)")}),await e(i).toHaveTextContent("0"),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await c(()=>{e(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await c(()=>{e(n.style.transform).not.toContain("translateY(1px)")}),await e(i).toHaveTextContent("0"),await l.click(n),await e(i).toHaveTextContent("1")}},w={render:()=>t.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(o,{"aria-label":"Add release note",variant:"outline",children:t.jsx("span",{"aria-hidden":"true",children:"+"})}),t.jsx(o,{"aria-label":"Open settings",variant:"ghost",children:t.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),t.jsxs("small",{style:p,children:["Icon-only buttons should always provide an accessible name via ",t.jsx("code",{children:"aria-label"})," or"," ",t.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:s})=>{const a=y(s);await e(a.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await e(a.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}},B={render:()=>t.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[t.jsx("h3",{id:"button-icon-heading",style:{margin:0},children:"Release quick action"}),t.jsx(o,{"aria-label":"Fallback quick action","aria-labelledby":"button-icon-heading",variant:"outline",children:t.jsx("span",{"aria-hidden":"true",children:"+"})}),t.jsxs("small",{style:p,children:["When both naming props exist, ",t.jsx("code",{children:"aria-labelledby"})," stays canonical and"," ",t.jsx("code",{children:"aria-label"})," fallback is suppressed."]})]}),play:async({canvasElement:s})=>{const n=await y(s).findByRole("button",{name:"Release quick action"});await e(n).toHaveAttribute("aria-labelledby","button-icon-heading"),await e(n).not.toHaveAttribute("aria-label")}};var k,T,E;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(E=(T=v.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var j,C,S;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var D,A,R;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(A=x.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var I,F,H;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var P,O,K;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(O=g.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var W,Y,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var U,G,M;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(G=w.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var L,q,N;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(q=B.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const it=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","FocusIntentReentry","PrimaryPointerOnly","IconOnlyAccessibleName","IconOnlyLabelledByPrecedence"];export{g as FocusIntentReentry,w as IconOnlyAccessibleName,B as IconOnlyLabelledByPrecedence,b as KeyboardActivation,v as Primary,h as PrimaryPointerOnly,x as StateMatrix,m as VariantMatrix,it as __namedExportsOrder,ot as default};
