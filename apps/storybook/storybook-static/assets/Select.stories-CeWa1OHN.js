import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{f as Be}from"./FieldStyles-CQy9UjBZ.js";import{a as Ae}from"./a11y-CU5SQrEA.js";import{B as He}from"./Badge-ZJmMstsz.js";import{within as h,expect as i,userEvent as q,fireEvent as Fe}from"./index-DgAF9SIF.js";import{s as k,S as Ie}from"./storyShowcase-DlKirntE.js";const d=s.forwardRef(function({style:r,invalid:n,disabled:o,onFocus:l,onBlur:c,onMouseEnter:m,onMouseLeave:p,onMouseDown:y,onPointerDown:D,"aria-invalid":xe,"aria-label":ge,"aria-labelledby":Se,"aria-keyshortcuts":we,children:P,...ke},x){const L=s.useRef(null);s.useRef(null);const[K,C]=s.useState(!1),[M,g]=s.useState(!1),[U,T]=s.useState(!1),S=s.useRef(!1),N=Ae(n,xe),O=N!==void 0,f=!!o,z=_(Se),je=z?void 0:_(ge),Ve=f?void 0:_(we)??"ArrowDown ArrowUp",j=s.useMemo(()=>Pe(P),[P]),Re=s.useMemo(()=>j.map(t=>t.value),[j]);s.useEffect(()=>{},[Re]),s.useLayoutEffect(()=>{const t=L.current;if(!t)return;const w=he(t.value);if(w===void 0)return;const u=Le(j,w);u<0||u===t.selectedIndex||(t.selectedIndex=u)},[j]),s.useEffect(()=>{f&&(C(!1),g(!1),T(!1))},[f]),s.useEffect(()=>{var G;const t=((G=L.current)==null?void 0:G.ownerDocument)??document,w=v=>{v.metaKey||v.altKey||v.ctrlKey||(S.current=!0)},u=v=>{"button"in v&&!W(v.button)||"ctrlKey"in v&&v.ctrlKey||(S.current=!1)};return t.addEventListener("keydown",w,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("touchstart",u,!0),()=>{t.removeEventListener("keydown",w,!0),t.removeEventListener("pointerdown",u,!0),t.removeEventListener("mousedown",u,!0),t.removeEventListener("touchstart",u,!0)}},[]);const Ee=s.useCallback(t=>{if(L.current=t,typeof x=="function"){x(t);return}x&&(x.current=t)},[x]);return e.jsx("select",{ref:Ee,...ke,disabled:o,"aria-label":je,"aria-labelledby":z,"aria-invalid":N,"aria-keyshortcuts":Ve,"data-invalid":O?"true":void 0,"data-focused":K?"true":void 0,"data-focus-visible":M?"true":void 0,"data-hovered":U?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...Be,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:O?"var(--aurora-color-red-500)":K||U&&!f?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:K&&M&&!f?`0 0 0 3px ${O?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:o?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:o?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:o?"not-allowed":"pointer",...r},onFocus:t=>{C(!0),g(De(t.currentTarget,S.current)),l==null||l(t)},onBlur:t=>{C(!1),g(!1),c==null||c(t)},onMouseDown:t=>{t.button===0&&!t.ctrlKey&&(S.current=!1,g(!1)),y==null||y(t)},onPointerDown:t=>{W(t.button)&&!t.ctrlKey&&(S.current=!1,g(!1)),D==null||D(t)},onMouseEnter:t=>{f||T(!0),m==null||m(t)},onMouseLeave:t=>{T(!1),p==null||p(t)},children:P})});function _(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function De(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}function W(a){return typeof a!="number"||a<=0}function Pe(a){const r=[],n=(o,l=!1)=>{s.Children.forEach(o,c=>{if(!s.isValidElement(c))return;const m=typeof c.type=="string"?c.type:null;if(m==="option"){const p=c.props,y=he(p.value);y!==void 0&&r.push({value:y,disabled:l||!!p.disabled});return}if(m==="optgroup"){const p=c.props;n(p.children,l||!!p.disabled);return}n(c.props.children,l)})};return n(a),r}function he(a){if(a!=null)return String(a)}function Le(a,r){let n=-1,o=-1;for(let l=0;l<a.length;l+=1){const c=a[l];if(c.value===r&&(n===-1&&(n=l),!c.disabled)){o=l;break}}return o!==-1?o:n}d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function b({children:a,gap:r=10}){return e.jsx(Ie,{maxWidth:"min(100%, 360px)",gap:r,children:a})}const Ne={title:"Form/Select",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function Ke(){const[a,r]=s.useState("react");return e.jsxs(b,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(He,{children:a})]}),e.jsxs(d,{"aria-label":"Framework select",value:a,onChange:n=>r(n.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const V={render:()=>e.jsx(Ke,{}),play:async({canvasElement:a})=>{const n=h(a).getByRole("combobox",{name:"Framework select"});await q.selectOptions(n,"vue"),await i(n).toHaveValue("vue")}},R={render:()=>e.jsxs(b,{gap:8,children:[e.jsx("p",{style:k,children:"Duplicate values fall back to the first enabled option for deterministic selected-state semantics."}),e.jsxs(d,{"aria-label":"Duplicate semantics select",defaultValue:"react",children:[e.jsx("option",{value:"react",disabled:!0,children:"React disabled"}),e.jsx("option",{value:"react",children:"React enabled"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=h(a),n=r.getByRole("combobox",{name:"Duplicate semantics select"}),o=r.getAllByRole("option");await i(n).toHaveValue("react"),await i(n).toHaveProperty("selectedIndex",1),await i(o[0]).toHaveProperty("selected",!1),await i(o[1]).toHaveProperty("selected",!0)}},E={render:()=>e.jsxs(b,{gap:8,children:[e.jsxs(d,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...k,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},B={render:()=>e.jsxs(b,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:k,children:"Framework label"}),e.jsxs(d,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const n=h(a).getByRole("combobox",{name:"Framework label"});await i(n).not.toHaveAttribute("aria-label")}},A={render:()=>e.jsxs(b,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:k,children:"Framework heading"}),e.jsxs(d,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const n=h(a).getByRole("combobox",{name:"Framework heading"});await i(n).toHaveAttribute("aria-labelledby","storybook-select-heading"),await i(n).not.toHaveAttribute("aria-label")}},H={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},F={render:()=>e.jsxs(b,{gap:8,children:[e.jsxs(d,{"aria-label":"Actionable select shortcuts",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]}),e.jsxs(d,{"aria-label":"Disabled select shortcuts",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=h(a);await i(r.getByRole("combobox",{name:"Actionable select shortcuts"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await i(r.getByRole("combobox",{name:"Disabled select shortcuts"})).not.toHaveAttribute("aria-keyshortcuts")}},I={render:()=>e.jsxs(b,{gap:8,children:[e.jsx("p",{style:k,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(d,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const r=h(a),n=await r.findByRole("button",{name:"Before select"}),o=r.getByRole("combobox",{name:"Focus intent select"});await q.click(n),await q.tab(),await i(o).toHaveFocus(),await i(o).toHaveAttribute("data-focus-visible","true"),Fe.mouseDown(o,{button:0,ctrlKey:!0}),await i(o).toHaveAttribute("data-focus-visible","true")}};var $,J,Q;V.parameters={...V.parameters,docs:{...($=V.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(J=V.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <p style={storyMutedTextStyle}>
        Duplicate values fall back to the first enabled option for deterministic selected-state semantics.
      </p>
      <Select aria-label="Duplicate semantics select" defaultValue="react">
        <option value="react" disabled>
          React disabled
        </option>
        <option value="react">React enabled</option>
        <option value="vue">Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Duplicate semantics select"
    });
    const options = canvas.getAllByRole("option");
    await expect(select).toHaveValue("react");
    await expect(select).toHaveProperty("selectedIndex", 1);
    await expect(options[0]).toHaveProperty("selected", false);
    await expect(options[1]).toHaveProperty("selected", true);
  }
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,oe;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,le,ce;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,ue,de;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,ve,be;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var me,ye,fe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};const ze=["Controlled","DuplicateValueSelectedSemantics","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","ShortcutHintPrecision","FocusIntentReentry"];export{B as BlankAriaLabelFallback,V as Controlled,H as DisabledState,R as DuplicateValueSelectedSemantics,I as FocusIntentReentry,E as InvalidState,A as LabelledByPrecedence,F as ShortcutHintPrecision,ze as __namedExportsOrder,Ne as default};
