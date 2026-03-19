import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as r}from"./Tag-Dmp9Dfgr.js";import{within as x,expect as n}from"./index-DgAF9SIF.js";const b={title:"Core/Tag",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Neutral metadata chip for filters, environment labels, and branch markers."}}},args:{children:"release/0.1.0"}},o={},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[e.jsx(r,{children:"cloud"}),e.jsx(r,{children:"frontend"}),e.jsx(r,{children:"design-system"}),e.jsx(r,{style:{borderColor:"var(--aurora-color-blue-500)",background:"color-mix(in srgb, var(--aurora-color-blue-500) 16%, var(--aurora-surface-elevated))",color:"var(--aurora-text-primary)"},children:"priority"})]}),play:async({canvasElement:c})=>{const a=x(c);await n(a.getByText("cloud")).toBeInTheDocument(),await n(a.getByText("frontend")).toBeInTheDocument(),await n(a.getByText("design-system")).toBeInTheDocument(),await n(a.getByText("priority")).toBeInTheDocument()}},s={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(r,{children:"conversation-id: 1438"}),e.jsx(r,{children:"scope: docs"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(r,{style:{borderColor:"var(--aurora-color-blue-500)",background:"color-mix(in srgb, var(--aurora-color-blue-500) 16%, var(--aurora-surface-elevated))",color:"var(--aurora-text-primary)"},children:"memory synced"}),e.jsx(r,{style:{borderColor:"var(--aurora-color-red-500)",background:"color-mix(in srgb, var(--aurora-color-red-500) 16%, var(--aurora-surface-elevated))",color:"var(--aurora-text-primary)"},children:"awaiting approval"})]})]}),play:async({canvasElement:c})=>{const a=x(c);await n(a.getByText("conversation-id: 1438")).toBeInTheDocument(),await n(a.getByText("scope: docs")).toBeInTheDocument(),await n(a.getByText("memory synced")).toBeInTheDocument(),await n(a.getByText("awaiting approval")).toBeInTheDocument()}};var i,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      background: "color-mix(in srgb, var(--aurora-color-blue-500) 16%, var(--aurora-surface-elevated))",
      color: "var(--aurora-text-primary)"
    }}>
        priority
      </Tag>
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        background: "color-mix(in srgb, var(--aurora-color-blue-500) 16%, var(--aurora-surface-elevated))",
        color: "var(--aurora-text-primary)"
      }}>
          memory synced
        </Tag>
        <Tag style={{
        borderColor: "var(--aurora-color-red-500)",
        background: "color-mix(in srgb, var(--aurora-color-red-500) 16%, var(--aurora-surface-elevated))",
        color: "var(--aurora-text-primary)"
      }}>
          awaiting approval
        </Tag>
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
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const w=["Default","MetadataRow","AiContextMarkers"];export{s as AiContextMarkers,o as Default,t as MetadataRow,w as __namedExportsOrder,b as default};
