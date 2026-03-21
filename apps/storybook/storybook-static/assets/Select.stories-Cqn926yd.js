import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{f as be}from"./FieldStyles-CQy9UjBZ.js";import{a as pe}from"./a11y-CU5SQrEA.js";import{B as me}from"./Badge-ZJmMstsz.js";import{within as w,expect as u,userEvent as C}from"./index-DgAF9SIF.js";import{s as k,S as ye}from"./storyShowcase-Bw5VyCj0.js";const c=o.forwardRef(function({style:r,invalid:n,disabled:s,onFocus:j,onBlur:E,onMouseEnter:F,onMouseLeave:R,onMouseDown:V,onPointerDown:B,"aria-invalid":le,"aria-label":ce,"aria-labelledby":ie,...ue},d){const T=o.useRef(null),[A,H]=o.useState(!1),[K,v]=o.useState(!1),[_,I]=o.useState(!1),b=o.useRef(!1),q=pe(n,le),L=q!==void 0,p=!!s,D=P(ie),de=D?void 0:P(ce);o.useEffect(()=>{p&&(H(!1),v(!1),I(!1))},[p]),o.useEffect(()=>{var N;const t=((N=T.current)==null?void 0:N.ownerDocument)??document,O=l=>{l.metaKey||l.altKey||l.ctrlKey||(b.current=!0)},i=l=>{"button"in l&&typeof l.button=="number"&&l.button!==0||(b.current=!1)};return t.addEventListener("keydown",O,!0),t.addEventListener("pointerdown",i,!0),t.addEventListener("mousedown",i,!0),t.addEventListener("touchstart",i,!0),()=>{t.removeEventListener("keydown",O,!0),t.removeEventListener("pointerdown",i,!0),t.removeEventListener("mousedown",i,!0),t.removeEventListener("touchstart",i,!0)}},[]);const ve=o.useCallback(t=>{if(T.current=t,typeof d=="function"){d(t);return}d&&(d.current=t)},[d]);return e.jsx("select",{ref:ve,...ue,disabled:s,"aria-label":de,"aria-labelledby":D,"aria-invalid":q,"data-invalid":L?"true":void 0,"data-focused":A?"true":void 0,"data-focus-visible":K?"true":void 0,"data-hovered":_?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...be,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:L?"var(--aurora-color-red-500)":A||_&&!p?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:A&&K&&!p?`0 0 0 3px ${L?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:s?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:s?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:s?"not-allowed":"pointer",...r},onFocus:t=>{H(!0),v(fe(t.currentTarget,b.current)),j==null||j(t)},onBlur:t=>{H(!1),v(!1),E==null||E(t)},onMouseDown:t=>{t.button===0&&(b.current=!1,v(!1)),V==null||V(t)},onPointerDown:t=>{t.button===0&&(b.current=!1,v(!1)),B==null||B(t)},onMouseEnter:t=>{p||I(!0),F==null||F(t)},onMouseLeave:t=>{I(!1),R==null||R(t)}})});function P(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function fe(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}c.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function m({children:a,gap:r=10}){return e.jsx(ye,{maxWidth:"min(100%, 360px)",gap:r,children:a})}const Fe={title:"Form/Select",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function he(){const[a,r]=o.useState("react");return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(me,{children:a})]}),e.jsxs(c,{"aria-label":"Framework select",value:a,onChange:n=>r(n.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const y={render:()=>e.jsx(he,{}),play:async({canvasElement:a})=>{const n=w(a).getByRole("combobox",{name:"Framework select"});await C.selectOptions(n,"vue"),await u(n).toHaveValue("vue")}},f={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(c,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...k,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},h={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:k,children:"Framework label"}),e.jsxs(c,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const n=w(a).getByRole("combobox",{name:"Framework label"});await u(n).not.toHaveAttribute("aria-label")}},x={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:k,children:"Framework heading"}),e.jsxs(c,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const n=w(a).getByRole("combobox",{name:"Framework heading"});await u(n).toHaveAttribute("aria-labelledby","storybook-select-heading"),await u(n).not.toHaveAttribute("aria-label")}},g={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},S={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:k,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(c,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=w(a),n=await r.findByRole("button",{name:"Before select"}),s=r.getByRole("combobox",{name:"Focus intent select"});await C.click(n),await C.tab(),await u(s).toHaveFocus(),await u(s).toHaveAttribute("data-focus-visible","true")}};var z,W,$;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(W=y.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,M,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(M=x.parameters)==null?void 0:M.docs)==null?void 0:ee.source}}};var te,ae,re;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,oe,se;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const Re=["Controlled","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","FocusIntentReentry"];export{h as BlankAriaLabelFallback,y as Controlled,g as DisabledState,S as FocusIntentReentry,f as InvalidState,x as LabelledByPrecedence,Re as __namedExportsOrder,Fe as default};
