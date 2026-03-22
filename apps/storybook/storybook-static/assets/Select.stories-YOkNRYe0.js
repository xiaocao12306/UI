import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{f as Se}from"./FieldStyles-CQy9UjBZ.js";import{a as ke}from"./a11y-CU5SQrEA.js";import{B as je}from"./Badge-ZJmMstsz.js";import{within as x,expect as c,userEvent as T,fireEvent as Ve}from"./index-DgAF9SIF.js";import{s as E,S as Re}from"./storyShowcase-Bw5VyCj0.js";const i=o.forwardRef(function({style:r,invalid:n,disabled:s,onFocus:l,onBlur:d,onMouseEnter:p,onMouseLeave:A,onMouseDown:B,onPointerDown:F,"aria-invalid":ve,"aria-label":be,"aria-labelledby":me,"aria-keyshortcuts":ye,children:H,...fe},y){const P=o.useRef(null);o.useRef(null);const[I,D]=o.useState(!1),[O,f]=o.useState(!1),[_,L]=o.useState(!1),h=o.useRef(!1),q=ke(n,ve),K=q!==void 0,v=!!s,U=C(me),he=U?void 0:C(be),xe=v?void 0:C(ye)??"ArrowDown ArrowUp",ge=o.useMemo(()=>Ae(H),[H]);o.useEffect(()=>{},[ge]),o.useEffect(()=>{v&&(D(!1),f(!1),L(!1))},[v]),o.useEffect(()=>{var z;const a=((z=P.current)==null?void 0:z.ownerDocument)??document,N=u=>{u.metaKey||u.altKey||u.ctrlKey||(h.current=!0)},b=u=>{"button"in u&&!W(u.button)||"ctrlKey"in u&&u.ctrlKey||(h.current=!1)};return a.addEventListener("keydown",N,!0),a.addEventListener("pointerdown",b,!0),a.addEventListener("mousedown",b,!0),a.addEventListener("touchstart",b,!0),()=>{a.removeEventListener("keydown",N,!0),a.removeEventListener("pointerdown",b,!0),a.removeEventListener("mousedown",b,!0),a.removeEventListener("touchstart",b,!0)}},[]);const we=o.useCallback(a=>{if(P.current=a,typeof y=="function"){y(a);return}y&&(y.current=a)},[y]);return e.jsx("select",{ref:we,...fe,disabled:s,"aria-label":he,"aria-labelledby":U,"aria-invalid":q,"aria-keyshortcuts":xe,"data-invalid":K?"true":void 0,"data-focused":I?"true":void 0,"data-focus-visible":O?"true":void 0,"data-hovered":_?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...Se,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:K?"var(--aurora-color-red-500)":I||_&&!v?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:I&&O&&!v?`0 0 0 3px ${K?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:s?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:s?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:s?"not-allowed":"pointer",...r},onFocus:a=>{D(!0),f(Ee(a.currentTarget,h.current)),l==null||l(a)},onBlur:a=>{D(!1),f(!1),d==null||d(a)},onMouseDown:a=>{a.button===0&&!a.ctrlKey&&(h.current=!1,f(!1)),B==null||B(a)},onPointerDown:a=>{W(a.button)&&!a.ctrlKey&&(h.current=!1,f(!1)),F==null||F(a)},onMouseEnter:a=>{v||L(!0),p==null||p(a)},onMouseLeave:a=>{L(!1),A==null||A(a)},children:H})});function C(t){if(typeof t!="string")return;const r=t.trim();return r.length>0?r:void 0}function Ee(t,r){try{return t.matches(":focus-visible")||r}catch{return r}}function W(t){return typeof t!="number"||t<=0}function Ae(t){const r=[],n=s=>{o.Children.forEach(s,l=>{if(!o.isValidElement(l))return;const d=typeof l.type=="string"?l.type:null;if(d==="option"){const p=Be(l.props.value);p!==void 0&&r.push(p);return}if(d==="optgroup"){n(l.props.children);return}n(l.props.children)})};return n(t),r}function Be(t){if(t!=null)return String(t)}i.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function m({children:t,gap:r=10}){return e.jsx(Re,{maxWidth:"min(100%, 360px)",gap:r,children:t})}const Pe={title:"Form/Select",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function Fe(){const[t,r]=o.useState("react");return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(je,{children:t})]}),e.jsxs(i,{"aria-label":"Framework select",value:t,onChange:n=>r(n.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const g={render:()=>e.jsx(Fe,{}),play:async({canvasElement:t})=>{const n=x(t).getByRole("combobox",{name:"Framework select"});await T.selectOptions(n,"vue"),await c(n).toHaveValue("vue")}},w={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(i,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...E,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},S={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:E,children:"Framework label"}),e.jsxs(i,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const n=x(t).getByRole("combobox",{name:"Framework label"});await c(n).not.toHaveAttribute("aria-label")}},k={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:E,children:"Framework heading"}),e.jsxs(i,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const n=x(t).getByRole("combobox",{name:"Framework heading"});await c(n).toHaveAttribute("aria-labelledby","storybook-select-heading"),await c(n).not.toHaveAttribute("aria-label")}},j={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},V={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(i,{"aria-label":"Actionable select shortcuts",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]}),e.jsxs(i,{"aria-label":"Disabled select shortcuts",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const r=x(t);await c(r.getByRole("combobox",{name:"Actionable select shortcuts"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await c(r.getByRole("combobox",{name:"Disabled select shortcuts"})).not.toHaveAttribute("aria-keyshortcuts")}},R={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:E,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(i,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const r=x(t),n=await r.findByRole("button",{name:"Before select"}),s=r.getByRole("combobox",{name:"Focus intent select"});await T.click(n),await T.tab(),await c(s).toHaveFocus(),await c(s).toHaveAttribute("data-focus-visible","true"),Ve.mouseDown(s,{button:0,ctrlKey:!0}),await c(s).toHaveAttribute("data-focus-visible","true")}};var $,G,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,M,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(M=S.parameters)==null?void 0:M.docs)==null?void 0:ee.source}}};var te,ae,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,oe,se;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ce,ie;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,de,pe;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Oe=["Controlled","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","ShortcutHintPrecision","FocusIntentReentry"];export{S as BlankAriaLabelFallback,g as Controlled,j as DisabledState,R as FocusIntentReentry,w as InvalidState,k as LabelledByPrecedence,V as ShortcutHintPrecision,Oe as __namedExportsOrder,Pe as default};
