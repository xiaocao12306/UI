import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{f as xe}from"./FieldStyles-CQy9UjBZ.js";import{a as ge}from"./a11y-CU5SQrEA.js";import{B as Se}from"./Badge-ZJmMstsz.js";import{within as y,expect as c,userEvent as T}from"./index-DgAF9SIF.js";import{s as j,S as we}from"./storyShowcase-Bw5VyCj0.js";const s=n.forwardRef(function({style:r,invalid:o,disabled:l,onFocus:R,onBlur:V,onMouseEnter:E,onMouseLeave:F,onMouseDown:A,onPointerDown:B,"aria-invalid":de,"aria-label":ve,"aria-labelledby":be,"aria-keyshortcuts":pe,...me},b){const K=n.useRef(null),[H,I]=n.useState(!1),[P,p]=n.useState(!1),[_,L]=n.useState(!1),m=n.useRef(!1),q=ge(o,de),D=q!==void 0,u=!!l,O=C(be),ye=O?void 0:C(ve),he=u?void 0:C(pe)??"ArrowDown ArrowUp";n.useEffect(()=>{u&&(I(!1),p(!1),L(!1))},[u]),n.useEffect(()=>{var N;const t=((N=K.current)==null?void 0:N.ownerDocument)??document,U=i=>{i.metaKey||i.altKey||i.ctrlKey||(m.current=!0)},d=i=>{"button"in i&&typeof i.button=="number"&&i.button!==0||(m.current=!1)};return t.addEventListener("keydown",U,!0),t.addEventListener("pointerdown",d,!0),t.addEventListener("mousedown",d,!0),t.addEventListener("touchstart",d,!0),()=>{t.removeEventListener("keydown",U,!0),t.removeEventListener("pointerdown",d,!0),t.removeEventListener("mousedown",d,!0),t.removeEventListener("touchstart",d,!0)}},[]);const fe=n.useCallback(t=>{if(K.current=t,typeof b=="function"){b(t);return}b&&(b.current=t)},[b]);return e.jsx("select",{ref:fe,...me,disabled:l,"aria-label":ye,"aria-labelledby":O,"aria-invalid":q,"aria-keyshortcuts":he,"data-invalid":D?"true":void 0,"data-focused":H?"true":void 0,"data-focus-visible":P?"true":void 0,"data-hovered":_?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...xe,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:D?"var(--aurora-color-red-500)":H||_&&!u?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:H&&P&&!u?`0 0 0 3px ${D?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:l?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:l?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:l?"not-allowed":"pointer",...r},onFocus:t=>{I(!0),p(ke(t.currentTarget,m.current)),R==null||R(t)},onBlur:t=>{I(!1),p(!1),V==null||V(t)},onMouseDown:t=>{t.button===0&&(m.current=!1,p(!1)),A==null||A(t)},onPointerDown:t=>{t.button===0&&(m.current=!1,p(!1)),B==null||B(t)},onMouseEnter:t=>{u||L(!0),E==null||E(t)},onMouseLeave:t=>{L(!1),F==null||F(t)}})});function C(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function ke(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}s.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function v({children:a,gap:r=10}){return e.jsx(we,{maxWidth:"min(100%, 360px)",gap:r,children:a})}const Ie={title:"Form/Select",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function je(){const[a,r]=n.useState("react");return e.jsxs(v,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(Se,{children:a})]}),e.jsxs(s,{"aria-label":"Framework select",value:a,onChange:o=>r(o.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const h={render:()=>e.jsx(je,{}),play:async({canvasElement:a})=>{const o=y(a).getByRole("combobox",{name:"Framework select"});await T.selectOptions(o,"vue"),await c(o).toHaveValue("vue")}},f={render:()=>e.jsxs(v,{gap:8,children:[e.jsxs(s,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...j,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},x={render:()=>e.jsxs(v,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:j,children:"Framework label"}),e.jsxs(s,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const o=y(a).getByRole("combobox",{name:"Framework label"});await c(o).not.toHaveAttribute("aria-label")}},g={render:()=>e.jsxs(v,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:j,children:"Framework heading"}),e.jsxs(s,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const o=y(a).getByRole("combobox",{name:"Framework heading"});await c(o).toHaveAttribute("aria-labelledby","storybook-select-heading"),await c(o).not.toHaveAttribute("aria-label")}},S={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},w={render:()=>e.jsxs(v,{gap:8,children:[e.jsxs(s,{"aria-label":"Actionable select shortcuts",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]}),e.jsxs(s,{"aria-label":"Disabled select shortcuts",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=y(a);await c(r.getByRole("combobox",{name:"Actionable select shortcuts"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await c(r.getByRole("combobox",{name:"Disabled select shortcuts"})).not.toHaveAttribute("aria-keyshortcuts")}},k={render:()=>e.jsxs(v,{gap:8,children:[e.jsx("p",{style:j,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(s,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=y(a),o=await r.findByRole("button",{name:"Before select"}),l=r.getByRole("combobox",{name:"Focus intent select"});await T.click(o),await T.tab(),await c(l).toHaveFocus(),await c(l).toHaveAttribute("data-focus-visible","true")}};var z,W,$;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ControlledSelectDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Framework select"
    });
    await userEvent.selectOptions(select, "vue");
    await expect(select).toHaveValue("vue");
  }
}`,...($=(W=h.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <Select aria-label="Environment select" invalid defaultValue="" aria-describedby="environment-error">
        <option value="" disabled>
          Select environment
        </option>
        <option value="prod">Production</option>
        <option value="stage">Staging</option>
      </Select>
      <p id="environment-error" style={{
      ...storyMutedTextStyle,
      color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"
    }}>
        Environment is required before deployment.
      </p>
    </SelectShowcase>
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <label htmlFor="storybook-select-blank-label" style={storyMutedTextStyle}>
        Framework label
      </label>
      <Select id="storybook-select-blank-label" aria-label="   " defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Framework label"
    });
    await expect(select).not.toHaveAttribute("aria-label");
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var M,ee,te;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <p id="storybook-select-heading" style={storyMutedTextStyle}>
        Framework heading
      </p>
      <Select aria-label="Framework fallback name" aria-labelledby="storybook-select-heading" defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Framework heading"
    });
    await expect(select).toHaveAttribute("aria-labelledby", "storybook-select-heading");
    await expect(select).not.toHaveAttribute("aria-label");
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    "aria-label": "Disabled framework select",
    disabled: true,
    defaultValue: "react",
    children: [<option value="react" key="react">
        React
      </option>, <option value="vue" key="vue">
        Vue
      </option>]
  }
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,se,le;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <Select aria-label="Actionable select shortcuts" defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
      <Select aria-label="Disabled select shortcuts" disabled defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("combobox", {
      name: "Actionable select shortcuts"
    })).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    await expect(canvas.getByRole("combobox", {
      name: "Disabled select shortcuts"
    })).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(le=(se=w.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ie,ue;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <p style={storyMutedTextStyle}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores select
        focus-visible state.
      </p>
      <button type="button">Before select</button>
      <Select aria-label="Focus intent select" defaultValue="react">
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before select"
    });
    const select = canvas.getByRole("combobox", {
      name: "Focus intent select"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(select).toHaveFocus();
    await expect(select).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(ue=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const Le=["Controlled","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","ShortcutHintPrecision","FocusIntentReentry"];export{x as BlankAriaLabelFallback,h as Controlled,S as DisabledState,k as FocusIntentReentry,f as InvalidState,g as LabelledByPrecedence,w as ShortcutHintPrecision,Le as __namedExportsOrder,Ie as default};
