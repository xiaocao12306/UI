import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./Button-CqW9672c.js";import{B as m}from"./Badge-Dkm8CRgf.js";function c({style:p,...u}){return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",height:26,borderRadius:"var(--aurora-radius-pill)",border:"1px solid var(--aurora-border-default)",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)",...p},...u})}c.__docgenInfo={description:"",methods:[],displayName:"Tag"};const y={title:"Core/Button",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Button variant and size are fully token-driven; switch theme from toolbar to verify semantic mapping."}}},args:{children:"Generate Response"}},a={args:{variant:"solid",size:"md"}},r={render:()=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{variant:"solid",children:"Solid"}),e.jsx(n,{variant:"outline",children:"Outline"}),e.jsx(n,{variant:"ghost",children:"Ghost"})]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(c,{children:"Token: button.solid.bg"}),e.jsx(m,{tone:"success",children:"Theme-aware"})]})]})};var t,s,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "solid",
    size: "md"
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,d,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const h=["Primary","VariantMatrix"];export{a as Primary,r as VariantMatrix,h as __namedExportsOrder,y as default};
