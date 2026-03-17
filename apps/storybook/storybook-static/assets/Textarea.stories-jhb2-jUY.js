import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as l}from"./Textarea-CSw2lv_O.js";import{within as v,userEvent as s,expect as x}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./a11y-H6OEtEva.js";const D={title:"Form/Textarea",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Textarea shares Input token styling while supporting multiline editing, invalid state wiring, and disabled/read-only boundaries."}}},args:{"aria-label":"Message",placeholder:"Write release notes for this version..."}},a={args:{defaultValue:""},play:async({canvasElement:h})=>{const t=v(h).getByRole("textbox",{name:"Message"});await s.click(t),await s.keyboard("Delivery-ready"),await x(t).toHaveValue("Delivery-ready")}},r={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(l,{"aria-label":"Release summary",defaultValue:"Needs QA validation.",invalid:!0,"aria-describedby":"release-summary-help release-summary-error"}),e.jsx("p",{id:"release-summary-help",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Include impact, rollback plan, and owner contact."}),e.jsx("p",{id:"release-summary-error",style:{margin:0,color:"var(--aurora-color-red-500)",fontSize:13},children:"Summary cannot be shorter than 30 characters."})]})},n={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:13},children:"Read-only template"}),e.jsx(l,{"aria-label":"Read-only template",readOnly:!0,defaultValue:`Release owner: Platform Team
Rollback: feature flag`})]}),e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:13},children:"Disabled while syncing"}),e.jsx(l,{"aria-label":"Disabled while syncing",disabled:!0,defaultValue:"Synchronizing from source of truth..."})]})]})};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,y,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <label style={{
      display: "grid",
      gap: 6
    }}>
        <span style={{
        color: "var(--aurora-text-secondary)",
        fontSize: 13
      }}>Read-only template</span>
        <Textarea aria-label="Read-only template" readOnly defaultValue={"Release owner: Platform Team\\nRollback: feature flag"} />
      </label>
      <label style={{
      display: "grid",
      gap: 6
    }}>
        <span style={{
        color: "var(--aurora-text-secondary)",
        fontSize: 13
      }}>Disabled while syncing</span>
        <Textarea aria-label="Disabled while syncing" disabled defaultValue="Synchronizing from source of truth..." />
      </label>
    </div>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const z=["Default","InvalidWithHelper","DisabledAndReadOnly"];export{a as Default,n as DisabledAndReadOnly,r as InvalidWithHelper,z as __namedExportsOrder,D as default};
