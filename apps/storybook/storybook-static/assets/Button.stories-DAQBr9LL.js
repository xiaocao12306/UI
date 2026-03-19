import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-BWu4c2F4.js";import{B as t}from"./Button-CnyYpMYZ.js";import{T as W}from"./Tag-Dmp9Dfgr.js";import{B as z}from"./Badge-ZJmMstsz.js";import{within as A,userEvent as l,expect as o,fireEvent as y}from"./index-DgAF9SIF.js";import{S as g,s as O}from"./storyShowcase-r-xztSD8.js";const V={title:"Core/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},d={args:{variant:"solid",size:"md"}},c={render:()=>n.jsxs(g,{maxWidth:"min(100%, 760px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{variant:"solid",children:"Solid"}),n.jsx(t,{variant:"outline",children:"Outline"}),n.jsx(t,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(W,{children:"Token: button.solid.bg"}),n.jsx(z,{tone:"success",children:"Theme-aware"})]})]})},u={render:()=>n.jsxs(g,{maxWidth:"min(100%, 800px)",gap:16,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{variant:"solid",children:"Solid"}),n.jsx(t,{variant:"outline",children:"Outline"}),n.jsx(t,{variant:"ghost",children:"Ghost"}),n.jsx(t,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(t,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(t,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(t,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(t,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(t,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:O,children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function H(){const[s,e]=v.useState(0),[i,a]=v.useState(!0);return n.jsxs(g,{maxWidth:"min(100%, 560px)",gap:12,children:[n.jsxs("p",{style:O,children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:s})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{onClick:()=>e(r=>r+1),children:"Run Action"}),n.jsx(t,{variant:"outline",loading:i,style:{color:"var(--aurora-text-primary)",borderColor:"var(--aurora-border-strong)"},onClick:()=>e(r=>r+10),children:"Background Task"}),n.jsx(t,{variant:"outline",onClick:()=>a(r=>!r),children:i?"Enable Background Task":"Disable Background Task"})]})]})}const p={render:()=>n.jsx(H,{}),play:async({canvasElement:s})=>{const e=A(s);(await e.findByRole("button",{name:"Run Action"})).focus(),await l.keyboard("{Enter}"),await l.keyboard(" "),await o(e.getByTestId("activation-count")).toHaveTextContent("2");const a=e.getByRole("button",{name:"Background Task"});await o(a).toBeDisabled(),await o(a).toHaveAttribute("aria-busy","true"),await l.click(e.getByRole("button",{name:"Enable Background Task"})),await o(a).not.toBeDisabled(),await l.click(a),await o(e.getByTestId("activation-count")).toHaveTextContent("12")}},m={render:function(){const[e,i]=v.useState(0);return n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx(t,{onClick:()=>i(a=>a+1),children:"Primary Pointer Only"}),n.jsxs("small",{children:["Activation count: ",n.jsx("span",{"data-testid":"primary-pointer-count",children:e})]})]})},play:async({canvasElement:s})=>{const e=A(s),i=await e.findByRole("button",{name:"Primary Pointer Only"}),a=e.getByTestId("primary-pointer-count");y.mouseDown(i,{button:2}),y.mouseUp(i,{button:2}),await o(a).toHaveTextContent("0"),await l.click(i),await o(a).toHaveTextContent("1")}};var x,h,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var B,w,f;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(w=c.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var j,T,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,E,P;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var C,D,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const _=["Primary","VariantMatrix","StateMatrix","KeyboardActivation","PrimaryPointerOnly"];export{p as KeyboardActivation,d as Primary,m as PrimaryPointerOnly,u as StateMatrix,c as VariantMatrix,_ as __namedExportsOrder,V as default};
