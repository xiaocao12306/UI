import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as B}from"./index-BWu4c2F4.js";import{B as o}from"./Button-DmF53JnK.js";import{T as M}from"./Tag-Dmp9Dfgr.js";import{B as L}from"./Badge-ZJmMstsz.js";import{within as w,userEvent as c,expect as a,waitFor as d,fireEvent as r}from"./index-DgAF9SIF.js";import{S as u,s as b}from"./storyShowcase-Bw5VyCj0.js";const tt={title:"Core/Button",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},y={args:{variant:"solid",size:"md"}},p={render:()=>t.jsxs(u,{maxWidth:"min(100%, 760px)",gap:12,children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(o,{variant:"solid",children:"Solid"}),t.jsx(o,{variant:"outline",children:"Outline"}),t.jsx(o,{variant:"ghost",children:"Ghost"})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(M,{children:"Token: button.solid.bg"}),t.jsx(L,{tone:"success",children:"Theme-aware"})]})]})},v={render:()=>t.jsxs(u,{maxWidth:"min(100%, 800px)",gap:16,children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("strong",{children:"Default + Disabled"}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(o,{variant:"solid",children:"Solid"}),t.jsx(o,{variant:"outline",children:"Outline"}),t.jsx(o,{variant:"ghost",children:"Ghost"}),t.jsx(o,{variant:"solid",disabled:!0,children:"Solid Disabled"}),t.jsx(o,{variant:"outline",disabled:!0,children:"Outline Disabled"}),t.jsx(o,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("strong",{children:"Loading + Size"}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[t.jsx(o,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),t.jsx(o,{size:"md",loading:!0,children:"Generate Response"}),t.jsx(o,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),t.jsx("small",{style:b,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function N(){const[s,e]=B.useState(0),[n,i]=B.useState(!0);return t.jsxs(u,{maxWidth:"min(100%, 560px)",gap:12,children:[t.jsxs("p",{style:b,children:["Activation count: ",t.jsx("strong",{"data-testid":"activation-count",children:s})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[t.jsx(o,{onClick:()=>e(l=>l+1),children:"Run Action"}),t.jsx(o,{variant:"outline",loading:n,onClick:()=>e(l=>l+10),children:"Background Task"}),t.jsx(o,{variant:"outline",onClick:()=>i(l=>!l),children:n?"Enable Background Task":"Disable Background Task"})]})]})}const m={render:()=>t.jsx(N,{}),play:async({canvasElement:s})=>{const e=w(s),n=await e.findByRole("button",{name:"Run Action"});n.focus(),r.keyDown(n,{key:"Enter",ctrlKey:!0}),r.keyUp(n,{key:"Enter",ctrlKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Enter",metaKey:!0}),r.keyUp(n,{key:"Enter",metaKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:" ",altKey:!0}),r.keyUp(n,{key:" ",altKey:!0}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{a(n.style.transform).not.toContain("translateY(1px)")}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{a(n.style.transform).not.toContain("translateY(1px)")}),await a(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(n,{key:"Space"}),await d(()=>{a(n.style.transform).toContain("translateY(1px)")}),r.keyUp(n,{key:"Space"}),await d(()=>{a(n.style.transform).not.toContain("translateY(1px)")}),await c.keyboard("{Shift>}{Enter}{/Shift}"),await c.keyboard(" "),await a(e.getByTestId("activation-count")).toHaveTextContent("2");const i=e.getByRole("button",{name:"Background Task"});await a(i).toBeDisabled(),await a(i).toHaveAttribute("aria-busy","true"),await c.click(e.getByRole("button",{name:"Enable Background Task"})),await a(i).not.toBeDisabled(),await c.click(i),await a(e.getByTestId("activation-count")).toHaveTextContent("12")}};function V(){return t.jsxs(u,{maxWidth:"min(100%, 560px)",gap:10,children:[t.jsxs("p",{style:b,children:["Click first, then press ",t.jsx("kbd",{children:"Tab"})," to re-enter and verify button focus-visible fallback."]}),t.jsx("button",{type:"button",children:"Before button"}),t.jsx(o,{variant:"outline",children:"Focus intent target"})]})}const x={render:()=>t.jsx(V,{}),play:async({canvasElement:s})=>{const e=w(s),n=await e.findByRole("button",{name:"Before button"}),i=e.getByRole("button",{name:"Focus intent target"});await c.click(n),await c.tab(),await a(i).toHaveFocus(),await d(()=>{a(i.style.boxShadow).toContain("0 0 0 3px")})}},g={render:function(){const[e,n]=B.useState(0);return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx(o,{onClick:()=>n(i=>i+1),children:"Primary Pointer Only"}),t.jsxs("small",{children:["Activation count: ",t.jsx("span",{"data-testid":"primary-pointer-count",children:e})]})]})},play:async({canvasElement:s})=>{const e=w(s),n=await e.findByRole("button",{name:"Primary Pointer Only"}),i=e.getByTestId("primary-pointer-count");r.mouseDown(n,{button:2}),r.mouseUp(n,{button:2}),await a(i).toHaveTextContent("0"),await c.click(n),await a(i).toHaveTextContent("1")}},h={render:()=>t.jsxs(u,{maxWidth:"min(100%, 560px)",gap:10,children:[t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(o,{"aria-label":"Add release note",variant:"outline",children:t.jsx("span",{"aria-hidden":"true",children:"+"})}),t.jsx(o,{"aria-label":"Open settings",variant:"ghost",children:t.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),t.jsxs("small",{style:b,children:["Icon-only buttons should always provide an accessible name via ",t.jsx("code",{children:"aria-label"})," or"," ",t.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:s})=>{const e=w(s);await a(e.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}};var f,k,T;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(T=(k=y.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,E,S;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(E=p.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var C,D,A;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(D=v.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var I,R,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var H,P,O;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
  }
}`,...(O=(P=x.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var K,W,z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    await userEvent.click(button);
    await expect(count).toHaveTextContent("1");
  }
}`,...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var U,G,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};const nt=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","FocusIntentReentry","PrimaryPointerOnly","IconOnlyAccessibleName"];export{x as FocusIntentReentry,h as IconOnlyAccessibleName,m as KeyboardActivation,y as Primary,g as PrimaryPointerOnly,v as StateMatrix,p as VariantMatrix,nt as __namedExportsOrder,tt as default};
