import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{f as De}from"./FieldStyles-CQy9UjBZ.js";import{a as Le}from"./a11y-CU5SQrEA.js";import{B as Te}from"./Badge-ZJmMstsz.js";import{within as b,expect as l,userEvent as q,fireEvent as Ke}from"./index-DgAF9SIF.js";import{s as x,S as Ce}from"./storyShowcase-DlKirntE.js";const u=s.forwardRef(function({style:a,invalid:r,disabled:o,onFocus:c,onBlur:i,onMouseEnter:y,onMouseLeave:d,onMouseDown:f,onPointerDown:D,"aria-invalid":je,"aria-label":Ve,"aria-labelledby":Ee,"aria-keyshortcuts":Be,children:L,...He},g){const T=s.useRef(null);s.useRef(null);const[K,C]=s.useState(!1),[z,w]=s.useState(!1),[N,O]=s.useState(!1),S=s.useRef(!1),G=Le(r,je),M=G!==void 0,h=!!o,W=_(Ee),Ae=W?void 0:_(Ve),Ie=h?void 0:_(Be)??"ArrowDown ArrowUp",R=s.useMemo(()=>Me(L),[L]),Fe=s.useMemo(()=>R.map(n=>n.value),[R]);s.useEffect(()=>{},[Fe]),s.useLayoutEffect(()=>{const n=T.current;if(!n)return;const k=Re(n.value);if(k===void 0)return;const p=_e(R,k);p<0||p===n.selectedIndex||(n.selectedIndex=p)},[R]),s.useEffect(()=>{h&&(C(!1),w(!1),O(!1))},[h]),s.useEffect(()=>{var $;const n=(($=T.current)==null?void 0:$.ownerDocument)??document,k=v=>{v.metaKey||v.altKey||v.ctrlKey||(S.current=!0)},p=v=>{"button"in v&&!J(v.button)||"ctrlKey"in v&&v.ctrlKey||(S.current=!1)};return n.addEventListener("keydown",k,!0),n.addEventListener("pointerdown",p,!0),n.addEventListener("mousedown",p,!0),n.addEventListener("touchstart",p,!0),()=>{n.removeEventListener("keydown",k,!0),n.removeEventListener("pointerdown",p,!0),n.removeEventListener("mousedown",p,!0),n.removeEventListener("touchstart",p,!0)}},[]);const Pe=s.useCallback(n=>{if(T.current=n,typeof g=="function"){g(n);return}g&&(g.current=n)},[g]);return e.jsx("select",{ref:Pe,...He,disabled:o,"aria-label":Ae,"aria-labelledby":W,"aria-invalid":G,"aria-keyshortcuts":Ie,"data-invalid":M?"true":void 0,"data-focused":K?"true":void 0,"data-focus-visible":z?"true":void 0,"data-hovered":N?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...De,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:M?"var(--aurora-color-red-500)":K||N&&!h?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:K&&z&&!h?`0 0 0 3px ${M?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:o?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:o?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:o?"not-allowed":"pointer",...a},onFocus:n=>{C(!0),w(Oe(n.currentTarget,S.current)),c==null||c(n)},onBlur:n=>{C(!1),w(!1),i==null||i(n)},onMouseDown:n=>{n.button===0&&!n.ctrlKey&&(S.current=!1,w(!1)),f==null||f(n)},onPointerDown:n=>{J(n.button)&&!n.ctrlKey&&(S.current=!1,w(!1)),D==null||D(n)},onMouseEnter:n=>{h||O(!0),y==null||y(n)},onMouseLeave:n=>{O(!1),d==null||d(n)},children:L})});function _(t){if(typeof t!="string")return;const a=t.trim();return a.length>0?a:void 0}function Oe(t,a){try{return t.matches(":focus-visible")||a}catch{return a}}function J(t){return typeof t!="number"||t<=0}function Me(t){const a=[],r=(o,c=!1)=>{s.Children.forEach(o,i=>{if(!s.isValidElement(i))return;const y=typeof i.type=="string"?i.type:null;if(y==="option"){const d=i.props,f=Re(d.value,d.children);f!==void 0&&a.push({value:f,disabled:c||!!d.disabled});return}if(y==="optgroup"){const d=i.props;r(d.children,c||!!d.disabled);return}r(i.props.children,c)})};return r(t),a}function Re(t,a){if(t==null){const r=U(a);return r.length>0?r:void 0}return String(t)}function U(t){return typeof t=="string"?Q(t):typeof t=="number"?String(t):Array.isArray(t)?Q(t.map(a=>U(a)).filter(a=>a.length>0).join(" ")):s.isValidElement(t)?U(t.props.children):""}function Q(t){return t.replace(/\s+/g," ").trim()}function _e(t,a){let r=-1,o=-1;for(let c=0;c<t.length;c+=1){const i=t[c];if(i.value===a&&(r===-1&&(r=c),!i.disabled)){o=c;break}}return o!==-1?o:r}u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function m({children:t,gap:a=10}){return e.jsx(Ce,{maxWidth:"min(100%, 360px)",gap:a,children:t})}const Qe={title:"Form/Select",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function qe(){const[t,a]=s.useState("react");return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(Te,{children:t})]}),e.jsxs(u,{"aria-label":"Framework select",value:t,onChange:r=>a(r.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}const j={render:()=>e.jsx(qe,{}),play:async({canvasElement:t})=>{const r=b(t).getByRole("combobox",{name:"Framework select"});await q.selectOptions(r,"vue"),await l(r).toHaveValue("vue")}},V={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:x,children:"Duplicate values fall back to the first enabled option for deterministic selected-state semantics."}),e.jsxs(u,{"aria-label":"Duplicate semantics select",defaultValue:"react",children:[e.jsx("option",{value:"react",disabled:!0,children:"React disabled"}),e.jsx("option",{value:"react",children:"React enabled"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=b(t),r=a.getByRole("combobox",{name:"Duplicate semantics select"}),o=a.getAllByRole("option");await l(r).toHaveValue("react"),await l(r).toHaveProperty("selectedIndex",1),await l(o[0]).toHaveProperty("selected",!1),await l(o[1]).toHaveProperty("selected",!0)}},E={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:x,children:"Options without explicit values use text fallback and keep duplicate selected-state semantics deterministic."}),e.jsxs(u,{"aria-label":"Implicit duplicate semantics select",defaultValue:"React",children:[e.jsx("option",{disabled:!0,children:"React"}),e.jsx("option",{children:"React"}),e.jsx("option",{children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=b(t),r=a.getByRole("combobox",{name:"Implicit duplicate semantics select"}),o=a.getAllByRole("option");await l(r).toHaveValue("React"),await l(r).toHaveProperty("selectedIndex",1),await l(o[0]).toHaveProperty("selected",!1),await l(o[1]).toHaveProperty("selected",!0)}},B={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(u,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...x,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},H={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:x,children:"Framework label"}),e.jsxs(u,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const r=b(t).getByRole("combobox",{name:"Framework label"});await l(r).not.toHaveAttribute("aria-label")}},A={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:x,children:"Framework heading"}),e.jsxs(u,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const r=b(t).getByRole("combobox",{name:"Framework heading"});await l(r).toHaveAttribute("aria-labelledby","storybook-select-heading"),await l(r).not.toHaveAttribute("aria-label")}},I={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},F={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(u,{"aria-label":"Actionable select shortcuts",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]}),e.jsxs(u,{"aria-label":"Disabled select shortcuts",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=b(t);await l(a.getByRole("combobox",{name:"Actionable select shortcuts"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await l(a.getByRole("combobox",{name:"Disabled select shortcuts"})).not.toHaveAttribute("aria-keyshortcuts")}},P={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:x,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(u,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=b(t),r=await a.findByRole("button",{name:"Before select"}),o=a.getByRole("combobox",{name:"Focus intent select"});await q.click(r),await q.tab(),await l(o).toHaveFocus(),await l(o).toHaveAttribute("data-focus-visible","true"),Ke.mouseDown(o,{button:0,ctrlKey:!0}),await l(o).toHaveAttribute("data-focus-visible","true")}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,oe;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <SelectShowcase gap={8}>
      <p style={storyMutedTextStyle}>
        Options without explicit values use text fallback and keep duplicate selected-state semantics deterministic.
      </p>
      <Select aria-label="Implicit duplicate semantics select" defaultValue="React">
        <option disabled>React</option>
        <option>React</option>
        <option>Vue</option>
      </Select>
    </SelectShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Implicit duplicate semantics select"
    });
    const options = canvas.getAllByRole("option");
    await expect(select).toHaveValue("React");
    await expect(select).toHaveProperty("selectedIndex", 1);
    await expect(options[0]).toHaveProperty("selected", false);
    await expect(options[1]).toHaveProperty("selected", true);
  }
}`,...(oe=(re=E.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,le,ce;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,ue,de;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,ve,me;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var be,ye,fe;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var he,xe,ge;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var we,Se,ke;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};const Xe=["Controlled","DuplicateValueSelectedSemantics","ImplicitDuplicateValueSemantics","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","ShortcutHintPrecision","FocusIntentReentry"];export{H as BlankAriaLabelFallback,j as Controlled,I as DisabledState,V as DuplicateValueSelectedSemantics,P as FocusIntentReentry,E as ImplicitDuplicateValueSemantics,B as InvalidState,A as LabelledByPrecedence,F as ShortcutHintPrecision,Xe as __namedExportsOrder,Qe as default};
