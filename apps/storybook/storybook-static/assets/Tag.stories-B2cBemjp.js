import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as a}from"./Tag-Dmp9Dfgr.js";import{within as x,expect as o}from"./index-DgAF9SIF.js";const w={title:"Core/Tag",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Neutral metadata chip for filters, environment labels, and branch markers."}}},args:{children:"release/0.1.0"}},n={},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[e.jsx(a,{children:"cloud"}),e.jsx(a,{children:"frontend"}),e.jsx(a,{children:"design-system"}),e.jsx(a,{style:{borderColor:"var(--aurora-color-blue-500)",color:"var(--aurora-color-blue-500)"},children:"priority"})]})},s={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{children:"conversation-id: 1438"}),e.jsx(a,{children:"scope: docs"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{style:{borderColor:"var(--aurora-color-blue-500)",color:"var(--aurora-color-blue-500)"},children:"memory synced"}),e.jsx(a,{style:{borderColor:"var(--aurora-color-red-500)",color:"var(--aurora-color-red-500)"},children:"awaiting approval"})]})]}),play:async({canvasElement:v})=>{const r=x(v);await o(r.getByText("conversation-id: 1438")).toBeInTheDocument(),await o(r.getByText("scope: docs")).toBeInTheDocument(),await o(r.getByText("memory synced")).toBeInTheDocument(),await o(r.getByText("awaiting approval")).toBeInTheDocument()}};var c,l,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8
  }}>
      <Tag>cloud</Tag>
      <Tag>frontend</Tag>
      <Tag>design-system</Tag>
      <Tag style={{
      borderColor: "var(--aurora-color-blue-500)",
      color: "var(--aurora-color-blue-500)"
    }}>priority</Tag>
    </div>
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,y,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <Tag>conversation-id: 1438</Tag>
        <Tag>scope: docs</Tag>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <Tag style={{
        borderColor: "var(--aurora-color-blue-500)",
        color: "var(--aurora-color-blue-500)"
      }}>memory synced</Tag>
        <Tag style={{
        borderColor: "var(--aurora-color-red-500)",
        color: "var(--aurora-color-red-500)"
      }}>awaiting approval</Tag>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("conversation-id: 1438")).toBeInTheDocument();
    await expect(canvas.getByText("scope: docs")).toBeInTheDocument();
    await expect(canvas.getByText("memory synced")).toBeInTheDocument();
    await expect(canvas.getByText("awaiting approval")).toBeInTheDocument();
  }
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const b=["Default","MetadataRow","AiContextMarkers"];export{s as AiContextMarkers,n as Default,t as MetadataRow,b as __namedExportsOrder,w as default};
