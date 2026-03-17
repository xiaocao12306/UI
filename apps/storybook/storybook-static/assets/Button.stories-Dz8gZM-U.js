import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as e}from"./Button-Hgh0jeno.js";import{B as m}from"./Badge-Dkm8CRgf.js";import"./index-BWu4c2F4.js";function v({style:x,...h}){return n.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:26,borderRadius:"var(--aurora-radius-pill)",border:"1px solid var(--aurora-border-default)",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)",...x},...h})}v.__docgenInfo={description:"",methods:[],displayName:"Tag"};const j={title:"Core/Button",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},a={args:{variant:"solid",size:"md"}},t={render:()=>n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(e,{variant:"solid",children:"Solid"}),n.jsx(e,{variant:"outline",children:"Outline"}),n.jsx(e,{variant:"ghost",children:"Ghost"})]}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx(v,{children:"Token: button.solid.bg"}),n.jsx(m,{tone:"success",children:"Theme-aware"})]})]})},i={render:()=>n.jsxs("div",{style:{width:780,display:"grid",gap:16},children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Default + Disabled"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[n.jsx(e,{variant:"solid",children:"Solid"}),n.jsx(e,{variant:"outline",children:"Outline"}),n.jsx(e,{variant:"ghost",children:"Ghost"}),n.jsx(e,{variant:"solid",disabled:!0,children:"Solid Disabled"}),n.jsx(e,{variant:"outline",disabled:!0,children:"Outline Disabled"}),n.jsx(e,{variant:"ghost",disabled:!0,children:"Ghost Disabled"})]})]}),n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("strong",{children:"Loading + Size"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[n.jsx(e,{size:"sm",loading:!0,loadingText:"Loading",children:"Save"}),n.jsx(e,{size:"md",loading:!0,children:"Generate Response"}),n.jsx(e,{size:"lg",variant:"outline",loading:!0,loadingText:"Publishing",children:"Publish"})]})]}),n.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard focus and pressed states are interactive in canvas: use Tab / Enter / Space to validate."})]})};var s,r,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(d=(r=a.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var o,l,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,c,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const S=["Primary","VariantMatrix","StateMatrix"];export{a as Primary,i as StateMatrix,t as VariantMatrix,S as __namedExportsOrder,j as default};
