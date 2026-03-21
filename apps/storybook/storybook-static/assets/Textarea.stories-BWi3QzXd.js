import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{T as r}from"./Textarea-Di0XIAdb.js";import{within as c,expect as d,userEvent as m}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const F={title:"Form/Textarea",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Textarea shares Input token styling while supporting multiline editing, invalid state wiring, and disabled/read-only boundaries."}}},args:{"aria-label":"Message",placeholder:"Write release notes for this version..."}},n={args:{defaultValue:""},play:async({canvasElement:t})=>{const e=c(t).getByRole("textbox",{name:"Message"});await m.click(e),await m.keyboard("Delivery-ready"),await d(e).toHaveValue("Delivery-ready")}},l={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[a.jsx(r,{"aria-label":"Release summary",defaultValue:"Needs QA validation.",invalid:!0,"aria-describedby":"release-summary-help release-summary-error"}),a.jsx("p",{id:"release-summary-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Include impact, rollback plan, and owner contact."}),a.jsx("p",{id:"release-summary-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Summary cannot be shorter than 30 characters."})]})},s={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[a.jsx("label",{htmlFor:"storybook-textarea-blank-label",style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary label"}),a.jsx(r,{id:"storybook-textarea-blank-label","aria-label":"   ",defaultValue:"Release summary draft..."})]}),play:async({canvasElement:t})=>{const e=c(t).getByRole("textbox",{name:"Release summary label"});await d(e).not.toHaveAttribute("aria-label")}},i={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[a.jsx("p",{id:"storybook-textarea-heading",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary heading"}),a.jsx(r,{"aria-label":"Fallback release summary","aria-labelledby":"storybook-textarea-heading",defaultValue:"Heading-driven label should win."})]}),play:async({canvasElement:t})=>{const e=c(t).getByRole("textbox",{name:"Release summary heading"});await d(e).toHaveAttribute("aria-labelledby","storybook-textarea-heading"),await d(e).not.toHaveAttribute("aria-label")}},o={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"grid",gap:6},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Read-only template"}),a.jsx(r,{"aria-label":"Read-only template",readOnly:!0,defaultValue:`Release owner: Platform Team
Rollback: feature flag`})]}),a.jsxs("div",{style:{display:"grid",gap:6},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Disabled while syncing"}),a.jsx(r,{"aria-label":"Disabled while syncing",disabled:!0,defaultValue:"Synchronizing from source of truth..."})]})]})};var p,u,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: ""
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", {
      name: "Message"
    });
    await userEvent.click(textarea);
    await userEvent.keyboard("Delivery-ready");
    await expect(textarea).toHaveValue("Delivery-ready");
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,v,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <Textarea aria-label="Release summary" defaultValue="Needs QA validation." invalid aria-describedby="release-summary-help release-summary-error" />
      <p id="release-summary-help" style={{
      margin: 0,
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Include impact, rollback plan, and owner contact.
      </p>
      <p id="release-summary-error" style={{
      margin: 0,
      color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",
      fontSize: 13
    }}>
        Summary cannot be shorter than 30 characters.
      </p>
    </div>
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,f,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <label htmlFor="storybook-textarea-blank-label" style={{
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Release summary label
      </label>
      <Textarea id="storybook-textarea-blank-label" aria-label="   " defaultValue="Release summary draft..." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", {
      name: "Release summary label"
    });
    await expect(textarea).not.toHaveAttribute("aria-label");
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var k,R,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <p id="storybook-textarea-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Release summary heading
      </p>
      <Textarea aria-label="Fallback release summary" aria-labelledby="storybook-textarea-heading" defaultValue="Heading-driven label should win." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", {
      name: "Release summary heading"
    });
    await expect(textarea).toHaveAttribute("aria-labelledby", "storybook-textarea-heading");
    await expect(textarea).not.toHaveAttribute("aria-label");
  }
}`,...(S=(R=i.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var j,z,V;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <div style={{
      display: "grid",
      gap: 6
    }}>
        <span style={{
        color: "var(--aurora-text-primary)",
        fontSize: 13
      }}>Read-only template</span>
        <Textarea aria-label="Read-only template" readOnly defaultValue={"Release owner: Platform Team\\nRollback: feature flag"} />
      </div>
      <div style={{
      display: "grid",
      gap: 6
    }}>
        <span style={{
        color: "var(--aurora-text-primary)",
        fontSize: 13
      }}>Disabled while syncing</span>
        <Textarea aria-label="Disabled while syncing" disabled defaultValue="Synchronizing from source of truth..." />
      </div>
    </div>
}`,...(V=(z=o.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};const I=["Default","InvalidWithHelper","BlankAriaLabelFallback","LabelledByPrecedence","DisabledAndReadOnly"];export{s as BlankAriaLabelFallback,n as Default,o as DisabledAndReadOnly,l as InvalidWithHelper,i as LabelledByPrecedence,I as __namedExportsOrder,F as default};
