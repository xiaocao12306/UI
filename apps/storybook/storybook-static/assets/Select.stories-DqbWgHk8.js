import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{f as we}from"./FieldStyles-CQy9UjBZ.js";import{a as Se}from"./a11y-CU5SQrEA.js";import{B as ke}from"./Badge-ZJmMstsz.js";import{within as x,expect as i,userEvent as T,fireEvent as je}from"./index-DgAF9SIF.js";import{s as E,S as Ve}from"./storyShowcase-Bw5VyCj0.js";const u=n.forwardRef(function({style:r,invalid:o,disabled:s,onFocus:l,onBlur:d,onMouseEnter:p,onMouseLeave:A,onMouseDown:F,onPointerDown:B,"aria-invalid":pe,"aria-label":ve,"aria-labelledby":be,"aria-keyshortcuts":me,children:H,...ye},y){const O=n.useRef(null);n.useRef(null);const[I,D]=n.useState(!1),[P,f]=n.useState(!1),[_,L]=n.useState(!1),h=n.useRef(!1),q=Se(o,pe),K=q!==void 0,v=!!s,U=C(be),fe=U?void 0:C(ve),he=v?void 0:C(me)??"ArrowDown ArrowUp",xe=n.useMemo(()=>Ee(H),[H]);n.useEffect(()=>{},[xe]),n.useEffect(()=>{v&&(D(!1),f(!1),L(!1))},[v]),n.useEffect(()=>{var z;const t=((z=O.current)==null?void 0:z.ownerDocument)??document,N=c=>{c.metaKey||c.altKey||c.ctrlKey||(h.current=!0)},b=c=>{"button"in c&&typeof c.button=="number"&&c.button!==0||"ctrlKey"in c&&c.ctrlKey||(h.current=!1)};return t.addEventListener("keydown",N,!0),t.addEventListener("pointerdown",b,!0),t.addEventListener("mousedown",b,!0),t.addEventListener("touchstart",b,!0),()=>{t.removeEventListener("keydown",N,!0),t.removeEventListener("pointerdown",b,!0),t.removeEventListener("mousedown",b,!0),t.removeEventListener("touchstart",b,!0)}},[]);const ge=n.useCallback(t=>{if(O.current=t,typeof y=="function"){y(t);return}y&&(y.current=t)},[y]);return e.jsx("select",{ref:ge,...ye,disabled:s,"aria-label":fe,"aria-labelledby":U,"aria-invalid":q,"aria-keyshortcuts":he,"data-invalid":K?"true":void 0,"data-focused":I?"true":void 0,"data-focus-visible":P?"true":void 0,"data-hovered":_?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...we,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:K?"var(--aurora-color-red-500)":I||_&&!v?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:I&&P&&!v?`0 0 0 3px ${K?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:s?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:s?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:s?"not-allowed":"pointer",...r},onFocus:t=>{D(!0),f(Re(t.currentTarget,h.current)),l==null||l(t)},onBlur:t=>{D(!1),f(!1),d==null||d(t)},onMouseDown:t=>{t.button===0&&!t.ctrlKey&&(h.current=!1,f(!1)),F==null||F(t)},onPointerDown:t=>{t.button===0&&!t.ctrlKey&&(h.current=!1,f(!1)),B==null||B(t)},onMouseEnter:t=>{v||L(!0),p==null||p(t)},onMouseLeave:t=>{L(!1),A==null||A(t)},children:H})});function C(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function Re(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}function Ee(a){const r=[],o=s=>{n.Children.forEach(s,l=>{if(!n.isValidElement(l))return;const d=typeof l.type=="string"?l.type:null;if(d==="option"){const p=Ae(l.props.value);p!==void 0&&r.push(p);return}if(d==="optgroup"){o(l.props.children);return}o(l.props.children)})};return o(a),r}function Ae(a){if(a!=null)return String(a)}u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function m({children:a,gap:r=10}){return e.jsx(Ve,{maxWidth:"min(100%, 360px)",gap:r,children:a})}const Te={title:"Form/Select",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function Fe(){const[a,r]=n.useState("react");return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(ke,{children:a})]}),e.jsxs(u,{"aria-label":"Framework select",value:a,onChange:o=>r(o.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const g={render:()=>e.jsx(Fe,{}),play:async({canvasElement:a})=>{const o=x(a).getByRole("combobox",{name:"Framework select"});await T.selectOptions(o,"vue"),await i(o).toHaveValue("vue")}},w={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(u,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...E,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},S={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:E,children:"Framework label"}),e.jsxs(u,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const o=x(a).getByRole("combobox",{name:"Framework label"});await i(o).not.toHaveAttribute("aria-label")}},k={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:E,children:"Framework heading"}),e.jsxs(u,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const o=x(a).getByRole("combobox",{name:"Framework heading"});await i(o).toHaveAttribute("aria-labelledby","storybook-select-heading"),await i(o).not.toHaveAttribute("aria-label")}},j={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},V={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(u,{"aria-label":"Actionable select shortcuts",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]}),e.jsxs(u,{"aria-label":"Disabled select shortcuts",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=x(a);await i(r.getByRole("combobox",{name:"Actionable select shortcuts"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await i(r.getByRole("combobox",{name:"Disabled select shortcuts"})).not.toHaveAttribute("aria-keyshortcuts")}},R={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:E,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(u,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=x(a),o=await r.findByRole("button",{name:"Before select"}),s=r.getByRole("combobox",{name:"Focus intent select"});await T.click(o),await T.tab(),await i(s).toHaveFocus(),await i(s).toHaveAttribute("data-focus-visible","true"),je.mouseDown(s,{button:0,ctrlKey:!0}),await i(s).toHaveAttribute("data-focus-visible","true")}};var W,$,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,M;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(M=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var ee,te,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,oe,ne;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,le,ce;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,ue,de;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(select, {
      button: 0,
      ctrlKey: true
    });
    await expect(select).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(de=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const Oe=["Controlled","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","ShortcutHintPrecision","FocusIntentReentry"];export{S as BlankAriaLabelFallback,g as Controlled,j as DisabledState,R as FocusIntentReentry,w as InvalidState,k as LabelledByPrecedence,V as ShortcutHintPrecision,Oe as __namedExportsOrder,Te as default};
