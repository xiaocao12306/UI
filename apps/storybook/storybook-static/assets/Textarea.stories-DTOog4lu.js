import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as t}from"./Textarea-Cv11yY2F.js";import{within as h,userEvent as l,expect as x}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-BfGecBuf.js";const z={title:"Form/Textarea",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Textarea shares Input token styling while supporting multiline editing, invalid state wiring, and disabled/read-only boundaries."}}},args:{"aria-label":"Message",placeholder:"Write release notes for this version..."}},a={args:{defaultValue:""},play:async({canvasElement:v})=>{const s=h(v).getByRole("textbox",{name:"Message"});await l.click(s),await l.keyboard("Delivery-ready"),await x(s).toHaveValue("Delivery-ready")}},r={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(t,{"aria-label":"Release summary",defaultValue:"Needs QA validation.",invalid:!0,"aria-describedby":"release-summary-help release-summary-error"}),e.jsx("p",{id:"release-summary-help",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Include impact, rollback plan, and owner contact."}),e.jsx("p",{id:"release-summary-error",style:{margin:0,color:"var(--aurora-color-red-500)",fontSize:13},children:"Summary cannot be shorter than 30 characters."})]})},n={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:13},children:"Read-only template"}),e.jsx(t,{"aria-label":"Read-only template",readOnly:!0,defaultValue:`Release owner: Platform Team
Rollback: feature flag`})]}),e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:13},children:"Disabled while syncing"}),e.jsx(t,{"aria-label":"Disabled while syncing",disabled:!0,defaultValue:"Synchronizing from source of truth..."})]})]})};var i,o,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,y,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <Textarea aria-label="Release summary" defaultValue="Needs QA validation." invalid aria-describedby="release-summary-help release-summary-error" />
      <p id="release-summary-help" style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Include impact, rollback plan, and owner contact.
      </p>
      <p id="release-summary-error" style={{
      margin: 0,
      color: "var(--aurora-color-red-500)",
      fontSize: 13
    }}>
        Summary cannot be shorter than 30 characters.
      </p>
    </div>
}`,...(p=(y=r.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        color: "var(--aurora-text-secondary)",
        fontSize: 13
      }}>Read-only template</span>
        <Textarea aria-label="Read-only template" readOnly defaultValue={"Release owner: Platform Team\\nRollback: feature flag"} />
      </div>
      <div style={{
      display: "grid",
      gap: 6
    }}>
        <span style={{
        color: "var(--aurora-text-secondary)",
        fontSize: 13
      }}>Disabled while syncing</span>
        <Textarea aria-label="Disabled while syncing" disabled defaultValue="Synchronizing from source of truth..." />
      </div>
    </div>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const V=["Default","InvalidWithHelper","DisabledAndReadOnly"];export{a as Default,n as DisabledAndReadOnly,r as InvalidWithHelper,V as __namedExportsOrder,z as default};
