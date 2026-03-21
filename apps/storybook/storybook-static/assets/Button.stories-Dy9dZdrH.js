import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-BWu4c2F4.js";import{B as a}from"./Button-COG9o64O.js";import{T as L}from"./Tag-Dmp9Dfgr.js";import{B as Y}from"./Badge-ZJmMstsz.js";import{within as h,userEvent as c,expect as o,waitFor as B,fireEvent as r}from"./index-DgAF9SIF.js";import{S as d,s as b}from"./storyShowcase-Bw5VyCj0.js";const nn={title:"Core/Button",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},u={args:{variant:"solid",size:"md"}},y={render:()=>n.jsxs(d,{maxWidth:"min(100%, 760px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(a,{variant:"solid",children:"Solid"}),n.jsx(a,{variant:"outline",children:"Outline"}),n.jsx(a,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(L,{children:"Token: button.solid.bg"}),n.jsx(Y,{tone:"success",children:"Theme-aware"})]})]})},p={render:()=>n.jsxs(d,{maxWidth:"min(100%, 800px)",gap:16,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(a,{variant:"solid",children:"Solid"}),n.jsx(a,{variant:"outline",children:"Outline"}),n.jsx(a,{variant:"ghost",children:"Ghost"}),n.jsx(a,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(a,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(a,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(a,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(a,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(a,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:b,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function N(){const[s,t]=w.useState(0),[e,i]=w.useState(!0);return n.jsxs(d,{maxWidth:"min(100%, 560px)",gap:12,children:[n.jsxs("p",{style:b,children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:s})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(a,{onClick:()=>t(l=>l+1),children:"Run Action"}),n.jsx(a,{variant:"outline",loading:e,onClick:()=>t(l=>l+10),children:"Background Task"}),n.jsx(a,{variant:"outline",onClick:()=>i(l=>!l),children:e?"Enable Background Task":"Disable Background Task"})]})]})}const v={render:()=>n.jsx(N,{}),play:async({canvasElement:s})=>{const t=h(s),e=await t.findByRole("button",{name:"Run Action"});e.focus(),r.keyDown(e,{key:"Enter",ctrlKey:!0}),r.keyUp(e,{key:"Enter",ctrlKey:!0}),await o(t.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(e,{key:"Enter",metaKey:!0}),r.keyUp(e,{key:"Enter",metaKey:!0}),await o(t.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(e,{key:" ",altKey:!0}),r.keyUp(e,{key:" ",altKey:!0}),await o(t.getByTestId("activation-count")).toHaveTextContent("0"),r.keyDown(e,{key:"Space"}),await B(()=>{o(e.style.transform).toContain("translateY(1px)")}),r.keyUp(e,{key:"Space"}),await B(()=>{o(e.style.transform).not.toContain("translateY(1px)")}),await c.keyboard("{Shift>}{Enter}{/Shift}"),await c.keyboard(" "),await o(t.getByTestId("activation-count")).toHaveTextContent("2");const i=t.getByRole("button",{name:"Background Task"});await o(i).toBeDisabled(),await o(i).toHaveAttribute("aria-busy","true"),await c.click(t.getByRole("button",{name:"Enable Background Task"})),await o(i).not.toBeDisabled(),await c.click(i),await o(t.getByTestId("activation-count")).toHaveTextContent("12")}};function V(){return n.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("p",{style:b,children:["Click first, then press ",n.jsx("kbd",{children:"Tab"})," to re-enter and verify button focus-visible fallback."]}),n.jsx("button",{type:"button",children:"Before button"}),n.jsx(a,{variant:"outline",children:"Focus intent target"})]})}const m={render:()=>n.jsx(V,{}),play:async({canvasElement:s})=>{const t=h(s),e=await t.findByRole("button",{name:"Before button"}),i=t.getByRole("button",{name:"Focus intent target"});await c.click(e),await c.tab(),await o(i).toHaveFocus(),await B(()=>{o(i.style.boxShadow).toContain("0 0 0 3px")})}},x={render:function(){const[t,e]=w.useState(0);return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx(a,{onClick:()=>e(i=>i+1),children:"Primary Pointer Only"}),n.jsxs("small",{children:["Activation count: ",n.jsx("span",{"data-testid":"primary-pointer-count",children:t})]})]})},play:async({canvasElement:s})=>{const t=h(s),e=await t.findByRole("button",{name:"Primary Pointer Only"}),i=t.getByTestId("primary-pointer-count");r.mouseDown(e,{button:2}),r.mouseUp(e,{button:2}),await o(i).toHaveTextContent("0"),await c.click(e),await o(i).toHaveTextContent("1")}},g={render:()=>n.jsxs(d,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(a,{"aria-label":"Add release note",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsx(a,{"aria-label":"Open settings",variant:"ghost",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),n.jsxs("small",{style:b,children:["Icon-only buttons should always provide an accessible name via ",n.jsx("code",{children:"aria-label"})," or"," ",n.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:s})=>{const t=h(s);await o(t.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}};var f,k,T;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var j,S,E;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(S=y.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var D,A,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var R,I,P;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(I=v.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var F,O,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(O=m.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,W,z;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(z=(W=x.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var U,G,M;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const tn=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","FocusIntentReentry","PrimaryPointerOnly","IconOnlyAccessibleName"];export{m as FocusIntentReentry,g as IconOnlyAccessibleName,v as KeyboardActivation,u as Primary,x as PrimaryPointerOnly,p as StateMatrix,y as VariantMatrix,tn as __namedExportsOrder,nn as default};
