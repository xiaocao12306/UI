import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./Badge-Cvc2u0v9.js";import{within as k,expect as n}from"./index-DgAF9SIF.js";const R={title:"Core/Badge",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Status badge for concise semantic signals in dashboards and AI interaction traces."}}},args:{children:"Stable"}},s={},r={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[e.jsx(a,{children:"Default"}),e.jsx(a,{tone:"success",children:"Passed"}),e.jsx(a,{tone:"danger",children:"Failed"})]})},c={render:()=>e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{children:"Queued"}),e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Prompt is waiting for the model response."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{tone:"success",children:"Grounded"}),e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Citations and reasoning checks passed."})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{tone:"danger",children:"Needs review"}),e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Low-confidence branch detected."})]})]}),play:async({canvasElement:i})=>{const t=k(i);await n(t.getByText("Queued")).toBeInTheDocument(),await n(t.getByText("Grounded")).toBeInTheDocument(),await n(t.getByText("Needs review")).toBeInTheDocument()}},o={render:()=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(a,{tone:" SUCCESS ",children:"Runtime success token"}),e.jsx(a,{tone:"critical",children:"Runtime fallback token"})]}),play:async({canvasElement:i})=>{const t=k(i),d=t.getByText("Runtime success token").getAttribute("style")??"";await n(d).toContain("var(--aurora-feedback-success-bg)"),await n(d).toContain("var(--aurora-feedback-success-border)");const l=t.getByText("Runtime fallback token").getAttribute("style")??"";await n(l).toContain("var(--aurora-surface-elevated)"),await n(l).toContain("var(--aurora-border-default)")}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,y,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  }}>
      <Badge>Default</Badge>
      <Badge tone="success">Passed</Badge>
      <Badge tone="danger">Failed</Badge>
    </div>
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,B,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(B=c.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var h,b,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 8
  }}>
      <Badge tone={" SUCCESS " as unknown as "success"}>Runtime success token</Badge>
      <Badge tone={"critical" as unknown as "default"}>Runtime fallback token</Badge>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const runtimeSuccessBadge = canvas.getByText("Runtime success token");
    const successStyle = runtimeSuccessBadge.getAttribute("style") ?? "";
    await expect(successStyle).toContain("var(--aurora-feedback-success-bg)");
    await expect(successStyle).toContain("var(--aurora-feedback-success-border)");
    const runtimeFallbackBadge = canvas.getByText("Runtime fallback token");
    const fallbackStyle = runtimeFallbackBadge.getAttribute("style") ?? "";
    await expect(fallbackStyle).toContain("var(--aurora-surface-elevated)");
    await expect(fallbackStyle).toContain("var(--aurora-border-default)");
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const D=["Default","ToneMatrix","AiInteractionStatus","RuntimeToneConfigNormalization"];export{c as AiInteractionStatus,s as Default,o as RuntimeToneConfigNormalization,r as ToneMatrix,D as __namedExportsOrder,R as default};
