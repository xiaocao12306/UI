import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BWu4c2F4.js";import{B as t}from"./Button-DS9RTxKh.js";import{T as G}from"./Tag-Dmp9Dfgr.js";import{B as F}from"./Badge-ZJmMstsz.js";import{within as x,expect as s,userEvent as l,fireEvent as b}from"./index-DgAF9SIF.js";import{S as v,s as h}from"./storyShowcase-CGhlt2ZW.js";const J={title:"Core/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},d={args:{variant:"solid",size:"md"}},c={render:()=>n.jsxs(v,{maxWidth:"min(100%, 760px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{variant:"solid",children:"Solid"}),n.jsx(t,{variant:"outline",children:"Outline"}),n.jsx(t,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(G,{children:"Token: button.solid.bg"}),n.jsx(F,{tone:"success",children:"Theme-aware"})]})]})},u={render:()=>n.jsxs(v,{maxWidth:"min(100%, 800px)",gap:16,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{variant:"solid",children:"Solid"}),n.jsx(t,{variant:"outline",children:"Outline"}),n.jsx(t,{variant:"ghost",children:"Ghost"}),n.jsx(t,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(t,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(t,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(t,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(t,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(t,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:h,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function M(){const[o,e]=g.useState(0),[i,a]=g.useState(!0);return n.jsxs(v,{maxWidth:"min(100%, 560px)",gap:12,children:[n.jsxs("p",{style:h,children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:o})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{onClick:()=>e(r=>r+1),children:"Run Action"}),n.jsx(t,{variant:"outline",loading:i,onClick:()=>e(r=>r+10),children:"Background Task"}),n.jsx(t,{variant:"outline",onClick:()=>a(r=>!r),children:i?"Enable Background Task":"Disable Background Task"})]})]})}const p={render:()=>n.jsx(M,{}),play:async({canvasElement:o})=>{const e=x(o);(await e.findByRole("button",{name:"Run Action"})).focus(),await l.keyboard("{Enter}"),await l.keyboard(" "),await s(e.getByTestId("activation-count")).toHaveTextContent("2");const a=e.getByRole("button",{name:"Background Task"});await s(a).toBeDisabled(),await s(a).toHaveAttribute("aria-busy","true"),await l.click(e.getByRole("button",{name:"Enable Background Task"})),await s(a).not.toBeDisabled(),await l.click(a),await s(e.getByTestId("activation-count")).toHaveTextContent("12")}},m={render:function(){const[e,i]=g.useState(0);return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx(t,{onClick:()=>i(a=>a+1),children:"Primary Pointer Only"}),n.jsxs("small",{children:["Activation count: ",n.jsx("span",{"data-testid":"primary-pointer-count",children:e})]})]})},play:async({canvasElement:o})=>{const e=x(o),i=await e.findByRole("button",{name:"Primary Pointer Only"}),a=e.getByTestId("primary-pointer-count");b.mouseDown(i,{button:2}),b.mouseUp(i,{button:2}),await s(a).toHaveTextContent("0"),await l.click(i),await s(a).toHaveTextContent("1")}},y={render:()=>n.jsxs(v,{maxWidth:"min(100%, 560px)",gap:10,children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(t,{"aria-label":"Add release note",variant:"outline",children:n.jsx("span",{"aria-hidden":"true",children:"+"})}),n.jsx(t,{"aria-label":"Open settings",variant:"ghost",children:n.jsx("span",{"aria-hidden":"true",children:"⚙"})})]}),n.jsxs("small",{style:h,children:["Icon-only buttons should always provide an accessible name via ",n.jsx("code",{children:"aria-label"})," or"," ",n.jsx("code",{children:"aria-labelledby"}),"."]})]}),play:async({canvasElement:o})=>{const e=x(o);await s(e.getByRole("button",{name:"Add release note"})).toBeInTheDocument(),await s(e.getByRole("button",{name:"Open settings"})).toBeInTheDocument()}};var B,w,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var f,S,T;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var k,E,D;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var A,P,R;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <KeyboardActivationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const runAction = await canvas.findByRole("button", {
      name: "Run Action"
    });
    runAction.focus();
    await userEvent.keyboard("{Enter}");
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
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var O,C,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var W,z,H;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(z=y.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const Q=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","PrimaryPointerOnly","IconOnlyAccessibleName"];export{y as IconOnlyAccessibleName,p as KeyboardActivation,d as Primary,m as PrimaryPointerOnly,u as StateMatrix,c as VariantMatrix,Q as __namedExportsOrder,J as default};
