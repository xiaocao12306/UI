import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./Badge-ZJmMstsz.js";import{within as v,expect as d}from"./index-DgAF9SIF.js";const w={title:"Core/Badge",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Status badge for concise semantic signals in dashboards and AI interaction traces."}}},args:{children:"Stable"}},n={},s={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(a,{children:"Default"}),e.jsx(a,{tone:"success",children:"Passed"}),e.jsx(a,{tone:"danger",children:"Failed"})]})},t={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{children:"Queued"}),e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Prompt is waiting for the model response."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{tone:"success",children:"Grounded"}),e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Citations and reasoning checks passed."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{tone:"danger",children:"Needs review"}),e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Low-confidence branch detected."})]})]}),play:async({canvasElement:y})=>{const r=v(y);await d(r.getByText("Queued")).toBeInTheDocument(),await d(r.getByText("Grounded")).toBeInTheDocument(),await d(r.getByText("Needs review")).toBeInTheDocument()}};var o,i,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }}>
      <Badge>Default</Badge>
      <Badge tone="success">Passed</Badge>
      <Badge tone="danger">Failed</Badge>
    </div>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        color: "var(--aurora-text-primary)"
      }}>Prompt is waiting for the model response.</span>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <Badge tone="success">Grounded</Badge>
        <span style={{
        color: "var(--aurora-text-primary)"
      }}>Citations and reasoning checks passed.</span>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
        <Badge tone="danger">Needs review</Badge>
        <span style={{
        color: "var(--aurora-text-primary)"
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
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const j=["Default","ToneMatrix","AiInteractionStatus"];export{t as AiInteractionStatus,n as Default,s as ToneMatrix,j as __namedExportsOrder,w as default};
