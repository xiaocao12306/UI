import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as d}from"./Button-CqW9672c.js";import{I as p}from"./Input-C0xZx5PC.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";const g={title:"Form/Input",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},r={},e={render:()=>t.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[t.jsx(p,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),t.jsx(d,{children:"Send"})]}),t.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 8
  }}>
      <label htmlFor="prompt" style={{
      fontWeight: 600
    }}>
        Prompt Draft
      </label>
      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 8
    }}>
        <Input id="prompt" placeholder="Ask Aurora AI to scaffold a new dialog flow..." aria-label="AI prompt" />
        <Button>Send</Button>
      </div>
      <small style={{
      color: "var(--aurora-text-secondary)"
    }}>
        Tip: switch theme in toolbar to validate input token contrast.
      </small>
    </div>
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const y=["Default","AiPromptStyle"];export{e as AiPromptStyle,r as Default,y as __namedExportsOrder,g as default};
