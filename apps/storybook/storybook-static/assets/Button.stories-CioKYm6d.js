import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{B as t}from"./Button-Hgh0jeno.js";import{B as E}from"./Badge-Dkm8CRgf.js";import{within as D,userEvent as r,expect as o}from"./index-DgAF9SIF.js";function S({style:i,...a}){return n.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:26,borderRadius:"var(--aurora-radius-pill)",border:"1px solid var(--aurora-border-default)",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)",...i},...a})}S.__docgenInfo={description:"",methods:[],displayName:"Tag"};const O={title:"Core/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},d={args:{variant:"solid",size:"md"}},l={render:()=>n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{variant:"solid",children:"Solid"}),n.jsx(t,{variant:"outline",children:"Outline"}),n.jsx(t,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(S,{children:"Token: button.solid.bg"}),n.jsx(E,{tone:"success",children:"Theme-aware"})]})]})},c={render:()=>n.jsxs("div",{style:{width:780,display:"grid",gap:16},children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{variant:"solid",children:"Solid"}),n.jsx(t,{variant:"outline",children:"Outline"}),n.jsx(t,{variant:"ghost",children:"Ghost"}),n.jsx(t,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(t,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(t,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(t,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(t,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(t,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};function A(){const[i,a]=p.useState(0),[g,e]=p.useState(!0);return n.jsxs("div",{style:{width:520,display:"grid",gap:12},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Activation count: ",n.jsx("strong",{"data-testid":"activation-count",children:i})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(t,{onClick:()=>a(s=>s+1),children:"Run Action"}),n.jsx(t,{loading:g,onClick:()=>a(s=>s+10),children:"Background Task"}),n.jsx(t,{variant:"outline",onClick:()=>e(s=>!s),children:g?"Enable Background Task":"Disable Background Task"})]})]})}const u={render:()=>n.jsx(A,{}),play:async({canvasElement:i})=>{const a=D(i);(await a.findByRole("button",{name:"Run Action"})).focus(),await r.keyboard("{Enter}"),await r.keyboard(" "),await o(a.getByTestId("activation-count")).toHaveTextContent("2");const e=a.getByRole("button",{name:"Background Task"});await o(e).toBeDisabled(),await o(e).toHaveAttribute("aria-busy","true"),await r.click(a.getByRole("button",{name:"Enable Background Task"})),await o(e).not.toBeDisabled(),await r.click(e),await o(a.getByTestId("activation-count")).toHaveTextContent("12")}};var v,x,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var m,h,B;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
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
    </div>
}`,...(B=(h=l.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var b,f,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 780,
    display: "grid",
    gap: 16
  }}>
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

      <small style={{
      color: "var(--aurora-text-secondary)"
    }}>
        Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate.
      </small>
    </div>
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,T,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const W=["Primary","VariantMatrix","StateMatrix","KeyboardActivation"];export{u as KeyboardActivation,d as Primary,c as StateMatrix,l as VariantMatrix,W as __namedExportsOrder,O as default};
