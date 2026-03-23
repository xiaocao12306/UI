import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{T as l}from"./Textarea-2AxIGrwS.js";import{B as g}from"./Badge-ZJmMstsz.js";import{within as o,expect as t,userEvent as v,fireEvent as P}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";const X={title:"Form/Textarea",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Textarea shares Input token styling while supporting multiline editing, invalid state wiring, and disabled/read-only boundaries."}}},args:{"aria-label":"Message",placeholder:"Write release notes for this version..."}},d={args:{defaultValue:""},play:async({canvasElement:r})=>{const a=o(r).getByRole("textbox",{name:"Message"});await v.click(a),await v.keyboard("Delivery-ready"),await t(a).toHaveValue("Delivery-ready")}},c={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(l,{"aria-label":"Release summary",defaultValue:"Needs QA validation.",invalid:!0,"aria-describedby":"release-summary-help release-summary-error"}),e.jsx("p",{id:"release-summary-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Include impact, rollback plan, and owner contact."}),e.jsx("p",{id:"release-summary-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Summary cannot be shorter than 30 characters."})]})},u={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"storybook-textarea-blank-label",style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary label"}),e.jsx(l,{id:"storybook-textarea-blank-label","aria-label":"   ",defaultValue:"Release summary draft..."})]}),play:async({canvasElement:r})=>{const a=o(r).getByRole("textbox",{name:"Release summary label"});await t(a).not.toHaveAttribute("aria-label")}},y={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"storybook-textarea-heading",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Release summary heading"}),e.jsx(l,{"aria-label":"Fallback release summary","aria-labelledby":"storybook-textarea-heading",defaultValue:"Heading-driven label should win."})]}),play:async({canvasElement:r})=>{const a=o(r).getByRole("textbox",{name:"Release summary heading"});await t(a).toHaveAttribute("aria-labelledby","storybook-textarea-heading"),await t(a).not.toHaveAttribute("aria-label")}},m={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Read-only template"}),e.jsx(l,{"aria-label":"Read-only template",readOnly:!0,defaultValue:`Release owner: Platform Team
Rollback: feature flag`})]}),e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)",fontSize:13},children:"Disabled while syncing"}),e.jsx(l,{"aria-label":"Disabled while syncing",disabled:!0,defaultValue:"Synchronizing from source of truth..."})]})]})};function W(){const[r,n]=b.useState("Initial draft"),[a,s]=b.useState(0);return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsx(l,{"aria-label":"Runtime boolean textarea",value:r,disabled:"true",readOnly:"true",onChange:i=>{n(i.target.value),s(M=>M+1)}}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsxs(g,{tone:"default",children:["Value: ",e.jsx("span",{"data-testid":"textarea-runtime-value",children:r})]}),e.jsxs(g,{tone:"default",children:["Changes: ",e.jsx("span",{"data-testid":"textarea-runtime-events",children:a})]})]})]})}const p={render:()=>e.jsx(W,{}),play:async({canvasElement:r})=>{const n=o(r),a=n.getByRole("textbox",{name:"Runtime boolean textarea"}),s=n.getByTestId("textarea-runtime-value"),i=n.getByTestId("textarea-runtime-events");await t(a).not.toBeDisabled(),await t(a).not.toHaveAttribute("readonly"),await t(s).toHaveTextContent("Initial draft"),await t(i).toHaveTextContent("0"),P.change(a,{target:{value:"Delivery-ready update"}}),await t(a).toHaveValue("Delivery-ready update"),await t(s).toHaveTextContent("Delivery-ready update"),await t(i).toHaveTextContent("1")}},x={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores textarea focus-visible state."}),e.jsx("button",{type:"button",children:"Before textarea"}),e.jsx(l,{"aria-label":"Focus intent textarea",defaultValue:"Release summary draft"})]}),play:async({canvasElement:r})=>{const n=o(r),a=await n.findByRole("button",{name:"Before textarea"}),s=n.getByRole("textbox",{name:"Focus intent textarea"});await v.click(a),await v.tab(),await t(s).toHaveFocus(),await t(s).toHaveAttribute("data-focus-visible","true"),P.mouseDown(s,{button:0,ctrlKey:!0}),await t(s).toHaveAttribute("data-focus-visible","true")}};var h,f,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var R,k,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var j,H,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(H=u.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var S,E,D;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(E=y.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var z,V,C;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(C=(V=m.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var A,F,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationTextarea />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole("textbox", {
      name: "Runtime boolean textarea"
    });
    const value = canvas.getByTestId("textarea-runtime-value");
    const events = canvas.getByTestId("textarea-runtime-events");
    await expect(textarea).not.toBeDisabled();
    await expect(textarea).not.toHaveAttribute("readonly");
    await expect(value).toHaveTextContent("Initial draft");
    await expect(events).toHaveTextContent("0");
    fireEvent.change(textarea, {
      target: {
        value: "Delivery-ready update"
      }
    });
    await expect(textarea).toHaveValue("Delivery-ready update");
    await expect(value).toHaveTextContent("Delivery-ready update");
    await expect(events).toHaveTextContent("1");
  }
}`,...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var N,O,L;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores textarea
        focus-visible state.
      </p>
      <button type="button">Before textarea</button>
      <Textarea aria-label="Focus intent textarea" defaultValue="Release summary draft" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before textarea"
    });
    const textarea = canvas.getByRole("textbox", {
      name: "Focus intent textarea"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(textarea).toHaveFocus();
    await expect(textarea).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(textarea, {
      button: 0,
      ctrlKey: true
    });
    await expect(textarea).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(L=(O=x.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const Y=["Default","InvalidWithHelper","BlankAriaLabelFallback","LabelledByPrecedence","DisabledAndReadOnly","RuntimeBooleanConfigNormalization","FocusIntentReentry"];export{u as BlankAriaLabelFallback,d as Default,m as DisabledAndReadOnly,x as FocusIntentReentry,c as InvalidWithHelper,y as LabelledByPrecedence,p as RuntimeBooleanConfigNormalization,Y as __namedExportsOrder,X as default};
