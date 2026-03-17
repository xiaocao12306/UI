import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./Badge-Dkm8CRgf.js";const y={title:"Core/Badge",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Status badge for concise semantic signals in dashboards and AI interaction traces."}}},args:{children:"Stable"}},s={},n={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(a,{children:"Default"}),e.jsx(a,{tone:"success",children:"Passed"}),e.jsx(a,{tone:"danger",children:"Failed"})]})},r={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{children:"Queued"}),e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Prompt is waiting for the model response."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{tone:"success",children:"Grounded"}),e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Citations and reasoning checks passed."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{tone:"danger",children:"Needs review"}),e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Low-confidence branch detected."})]})]})};var t,d,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }}>
      <Badge>Default</Badge>
      <Badge tone="success">Passed</Badge>
      <Badge tone="danger">Failed</Badge>
    </div>
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    </div>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const v=["Default","ToneMatrix","AiInteractionStatus"];export{r as AiInteractionStatus,s as Default,n as ToneMatrix,v as __namedExportsOrder,y as default};
