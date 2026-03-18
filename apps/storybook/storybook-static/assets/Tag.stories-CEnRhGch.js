import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as n}from"./Tag-Dmp9Dfgr.js";import{within as T,expect as r}from"./index-DgAF9SIF.js";const w={title:"Core/Tag",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Neutral metadata chip for filters, environment labels, and branch markers."}}},args:{children:"release/0.1.0"}},t={},o={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[e.jsx(n,{children:"cloud"}),e.jsx(n,{children:"frontend"}),e.jsx(n,{children:"design-system"}),e.jsx(n,{style:{borderColor:"var(--aurora-color-blue-500)",color:"var(--aurora-color-blue-500)"},children:"priority"})]}),play:async({canvasElement:c})=>{const a=T(c);await r(a.getByText("cloud")).toBeInTheDocument(),await r(a.getByText("frontend")).toBeInTheDocument(),await r(a.getByText("design-system")).toBeInTheDocument(),await r(a.getByText("priority")).toBeInTheDocument()}},s={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(n,{children:"conversation-id: 1438"}),e.jsx(n,{children:"scope: docs"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(n,{style:{borderColor:"var(--aurora-color-blue-500)",color:"var(--aurora-color-blue-500)"},children:"memory synced"}),e.jsx(n,{style:{borderColor:"var(--aurora-color-red-500)",color:"var(--aurora-color-red-500)"},children:"awaiting approval"})]})]}),play:async({canvasElement:c})=>{const a=T(c);await r(a.getByText("conversation-id: 1438")).toBeInTheDocument(),await r(a.getByText("scope: docs")).toBeInTheDocument(),await r(a.getByText("memory synced")).toBeInTheDocument(),await r(a.getByText("awaiting approval")).toBeInTheDocument()}};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("cloud")).toBeInTheDocument();
    await expect(canvas.getByText("frontend")).toBeInTheDocument();
    await expect(canvas.getByText("design-system")).toBeInTheDocument();
    await expect(canvas.getByText("priority")).toBeInTheDocument();
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,u,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const I=["Default","MetadataRow","AiContextMarkers"];export{s as AiContextMarkers,t as Default,o as MetadataRow,I as __namedExportsOrder,w as default};
