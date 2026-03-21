import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-BWu4c2F4.js";import{B as e}from"./Button-Cn1nutIP.js";import{T as z}from"./Tag-Dmp9Dfgr.js";import{B as G}from"./Badge-ZJmMstsz.js";import{within as h,expect as i,fireEvent as r,userEvent as c}from"./index-DgAF9SIF.js";import{S as g,s as b}from"./storyShowcase-Bw5VyCj0.js";const J={title:"Core/Button",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},d={args:{variant:"solid",size:"md"}},u={render:()=>n.jsxs(g,{maxWidth:"min(100%, 760px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(e,{variant:"solid",children:"Solid"}),n.jsx(e,{variant:"outline",children:"Outline"}),n.jsx(e,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(z,{children:"Token: button.solid.bg"}),n.jsx(G,{tone:"success",children:"Theme-aware"})]})]})},y={render:()=>n.jsxs(g,{maxWidth:"min(100%, 800px)",gap:16,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(e,{variant:"solid",children:"Solid"}),n.jsx(e,{variant:"outline",children:"Outline"}),n.jsx(e,{variant:"ghost",children:"Ghost"}),n.jsx(e,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(e,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(e,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(e,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(e,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(e,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:b,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function U(){const[s,t]=x.useState(0),[a,o]=x.useState(!0);return n.jsxs(g,{maxWidth:"min(100%, 560px)",gap:12,children:[n.jsxs("p",{style:b,children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:s})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(e,{onClick:()=>t(l=>l+1),children:"Run Action"}),n.jsx(e,{variant:"outline",loading:a,onClick:()=>t(l=>l+10),children:"Background Task"}),n.jsx(e,{variant:"outline",onClick:()=>o(l=>!l),children:a?"Enable Background Task":"Disable Background Task"})]})]})}const p={render:()=>n.jsx(U,{}),play:async({canvasElement:s})=>{const t=h(s),a=await t.findByRole("button",{name:"Run Action"});a.focus(),r.keyDown(a,{key:"Enter",ctrlKey:!0}),r.keyUp(a,{key:"Enter",ctrlKey:!0}),await i(t.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(a,{key:"Enter",metaKey:!0}),r.keyUp(a,{key:"Enter",metaKey:!0}),await i(t.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(a,{key:" ",altKey:!0}),r.keyUp(a,{key:" ",altKey:!0}),await i(t.getByTestId("activation-count")).toHaveTextContent("0"),await c.keyboard("{Shift>}{Enter}{/Shift}"),await c.keyboard(" "),await i(t.getByTestId("activation-count")).toHaveTextContent("2");const o=t.getByRole("button",{name:"Background Task"});await i(o).toBeDisabled(),await i(o).toHaveAttribute("aria-busy","true"),await c.click(t.getByRole("button",{name:"Enable Background Task"})),await i(o).not.toBeDisabled(),await c.click(o),await i(t.getByTestId("activation-count")).toHaveTextContent("12")}},v={render:function(){const[t,a]=x.useState(0);return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx(e,{onClick:()=>a(o=>o+1),children:"Primary Pointer Only"}),n.jsxs("small",{children:["Activation count: ",n.jsx("span",{"data-testid":"primary-pointer-count",children:t})]})]})},play:async({canvasElement:s})=>{const t=h(s),a=await t.findByRole("button",{name:"Primary Pointer Only"}),o=t.getByTestId("primary-pointer-count");r.mouseDown(a,{button:2}),r.mouseUp(a,{button:2}),await i(o).toHaveTextContent("0"),await c.click(a),await i(o).toHaveTextContent("1")}},m={render:()=>n.jsxs(g,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(e,{"aria-label":"Add release note",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsx(e,{"aria-label":"Open settings",variant:"ghost",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),n.jsxs("small",{style:b,children:["Icon-only buttons should always provide an accessible name via ",n.jsx("code",{children:"aria-label"})," or"," ",n.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:s})=>{const t=h(s);await i(t.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await i(t.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}};var B,w,f;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(f=(w=d.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var k,T,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,E,D;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(E=y.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var A,C,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var P,R,O;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(R=v.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var K,H,W;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const Q=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","PrimaryPointerOnly","IconOnlyAccessibleName"];export{m as IconOnlyAccessibleName,p as KeyboardActivation,d as Primary,v as PrimaryPointerOnly,y as StateMatrix,u as VariantMatrix,Q as __namedExportsOrder,J as default};
