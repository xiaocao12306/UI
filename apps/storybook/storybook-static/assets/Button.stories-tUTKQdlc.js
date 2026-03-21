import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BWu4c2F4.js";import{B as a}from"./Button-BMxlc9Nj.js";import{T as F}from"./Tag-Dmp9Dfgr.js";import{B as U}from"./Badge-ZJmMstsz.js";import{within as h,expect as i,fireEvent as r,waitFor as B,userEvent as c}from"./index-DgAF9SIF.js";import{S as x,s as b}from"./storyShowcase-Bw5VyCj0.js";const J={title:"Core/Button",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},d={args:{variant:"solid",size:"md"}},u={render:()=>n.jsxs(x,{maxWidth:"min(100%, 760px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(a,{variant:"solid",children:"Solid"}),n.jsx(a,{variant:"outline",children:"Outline"}),n.jsx(a,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(F,{children:"Token: button.solid.bg"}),n.jsx(U,{tone:"success",children:"Theme-aware"})]})]})},y={render:()=>n.jsxs(x,{maxWidth:"min(100%, 800px)",gap:16,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(a,{variant:"solid",children:"Solid"}),n.jsx(a,{variant:"outline",children:"Outline"}),n.jsx(a,{variant:"ghost",children:"Ghost"}),n.jsx(a,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(a,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(a,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(a,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(a,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(a,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:b,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function G(){const[s,e]=g.useState(0),[t,o]=g.useState(!0);return n.jsxs(x,{maxWidth:"min(100%, 560px)",gap:12,children:[n.jsxs("p",{style:b,children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:s})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(a,{onClick:()=>e(l=>l+1),children:"Run Action"}),n.jsx(a,{variant:"outline",loading:t,onClick:()=>e(l=>l+10),children:"Background Task"}),n.jsx(a,{variant:"outline",onClick:()=>o(l=>!l),children:t?"Enable Background Task":"Disable Background Task"})]})]})}const p={render:()=>n.jsx(G,{}),play:async({canvasElement:s})=>{const e=h(s),t=await e.findByRole("button",{name:"Run Action"});t.focus(),r.keyDown(t,{key:"Enter",ctrlKey:!0}),r.keyUp(t,{key:"Enter",ctrlKey:!0}),await i(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(t,{key:"Enter",metaKey:!0}),r.keyUp(t,{key:"Enter",metaKey:!0}),await i(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(t,{key:" ",altKey:!0}),r.keyUp(t,{key:" ",altKey:!0}),await i(e.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(t,{key:"Space"}),await B(()=>{i(t.style.transform).toContain("translateY(1px)")}),r.keyUp(t,{key:"Space"}),await B(()=>{i(t.style.transform).not.toContain("translateY(1px)")}),await c.keyboard("{Shift>}{Enter}{/Shift}"),await c.keyboard(" "),await i(e.getByTestId("activation-count")).toHaveTextContent("2");const o=e.getByRole("button",{name:"Background Task"});await i(o).toBeDisabled(),await i(o).toHaveAttribute("aria-busy","true"),await c.click(e.getByRole("button",{name:"Enable Background Task"})),await i(o).not.toBeDisabled(),await c.click(o),await i(e.getByTestId("activation-count")).toHaveTextContent("12")}},v={render:function(){const[e,t]=g.useState(0);return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx(a,{onClick:()=>t(o=>o+1),children:"Primary Pointer Only"}),n.jsxs("small",{children:["Activation count: ",n.jsx("span",{"data-testid":"primary-pointer-count",children:e})]})]})},play:async({canvasElement:s})=>{const e=h(s),t=await e.findByRole("button",{name:"Primary Pointer Only"}),o=e.getByTestId("primary-pointer-count");r.mouseDown(t,{button:2}),r.mouseUp(t,{button:2}),await i(o).toHaveTextContent("0"),await c.click(t),await i(o).toHaveTextContent("1")}},m={render:()=>n.jsxs(x,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(a,{"aria-label":"Add release note",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsx(a,{"aria-label":"Open settings",variant:"ghost",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),n.jsxs("small",{style:b,children:["Icon-only buttons should always provide an accessible name via ",n.jsx("code",{children:"aria-label"})," or"," ",n.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:s})=>{const e=h(s);await i(e.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await i(e.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}};var w,k,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var T,S,j;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(S=u.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var E,A,D;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(A=y.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var C,I,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(I=p.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,O,K;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(O=v.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var H,W,z;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const Q=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","PrimaryPointerOnly","IconOnlyAccessibleName"];export{m as IconOnlyAccessibleName,p as KeyboardActivation,d as Primary,v as PrimaryPointerOnly,y as StateMatrix,u as VariantMatrix,Q as __namedExportsOrder,J as default};
