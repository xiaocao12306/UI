import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./Badge-fH5xjxKG.js";import{within as v,expect as d}from"./index-DgAF9SIF.js";const w={title:"Core/Badge",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Status badge for concise semantic signals in dashboards and AI interaction traces."}}},args:{children:"Stable"}},a={},s={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(n,{children:"Default"}),e.jsx(n,{tone:"success",children:"Passed"}),e.jsx(n,{tone:"danger",children:"Failed"})]})},t={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(n,{children:"Queued"}),e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Prompt is waiting for the model response."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(n,{tone:"success",children:"Grounded"}),e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Citations and reasoning checks passed."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(n,{tone:"danger",children:"Needs review"}),e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Low-confidence branch detected."})]})]}),play:async({canvasElement:y})=>{const r=v(y);await d(r.getByText("Queued")).toBeInTheDocument(),await d(r.getByText("Grounded")).toBeInTheDocument(),await d(r.getByText("Needs review")).toBeInTheDocument()}};var o,c,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }}>
      <Badge>Default</Badge>
      <Badge tone="success">Passed</Badge>
      <Badge tone="danger">Failed</Badge>
    </div>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,x,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <Badge>Queued</Badge>
        <span style={{
        color: "var(--aurora-text-secondary)"
      }}>Prompt is waiting for the model response.</span>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <Badge tone="success">Grounded</Badge>
        <span style={{
        color: "var(--aurora-text-secondary)"
      }}>Citations and reasoning checks passed.</span>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <Badge tone="danger">Needs review</Badge>
        <span style={{
        color: "var(--aurora-text-secondary)"
      }}>Low-confidence branch detected.</span>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Queued")).toBeInTheDocument();
    await expect(canvas.getByText("Grounded")).toBeInTheDocument();
    await expect(canvas.getByText("Needs review")).toBeInTheDocument();
  }
}`,...(m=(x=t.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const j=["Default","ToneMatrix","AiInteractionStatus"];export{t as AiInteractionStatus,a as Default,s as ToneMatrix,j as __namedExportsOrder,w as default};
