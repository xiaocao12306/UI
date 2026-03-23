import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{f as ze}from"./FieldStyles-CQy9UjBZ.js";import{a as Ue}from"./a11y-CU5SQrEA.js";import{B as Te}from"./Badge-ZJmMstsz.js";import{within as y,expect as c,userEvent as E,fireEvent as Ge}from"./index-DgAF9SIF.js";import{s as g,S as We}from"./storyShowcase-DlKirntE.js";const p=s.forwardRef(function({style:a,invalid:r,disabled:o,value:l,defaultValue:u,onChange:f,onFocus:v,onBlur:x,onMouseEnter:L,onMouseLeave:K,onMouseDown:M,onPointerDown:N,"aria-invalid":Pe,"aria-label":Ce,"aria-labelledby":Oe,"aria-keyshortcuts":Le,children:_,...Ke},w){const q=s.useRef(null);s.useRef(null);const[z,U]=s.useState(!1),[X,S]=s.useState(!1),[Y,G]=s.useState(!1),W=s.useRef(void 0),k=s.useRef(!1),Z=Ue(r,Pe),$=Z!==void 0,h=!!o,ee=J(Oe),Me=ee?void 0:J(Ce),Ne=h?void 0:J(Le)??"ArrowDown ArrowUp",j=s.useMemo(()=>Je(_),[_]),_e=s.useMemo(()=>j.map(n=>n.value),[j]);s.useEffect(()=>{},[_e]),s.useLayoutEffect(()=>{const n=q.current;if(!n)return;const b=V(n.value);if(b===void 0)return;const i=ne(j,b);i>=0&&i!==n.selectedIndex&&(n.selectedIndex=i),W.current=V(n.value)},[j,l]),s.useEffect(()=>{h&&(U(!1),S(!1),G(!1))},[h]),s.useEffect(()=>{var R;const n=((R=q.current)==null?void 0:R.ownerDocument)??document,b=d=>{d.metaKey||d.altKey||d.ctrlKey||(k.current=!0)},i=d=>{"button"in d&&!te(d.button)||"ctrlKey"in d&&d.ctrlKey||(k.current=!1)};return n.addEventListener("keydown",b,!0),n.addEventListener("pointerdown",i,!0),n.addEventListener("mousedown",i,!0),n.addEventListener("touchstart",i,!0),()=>{n.removeEventListener("keydown",b,!0),n.removeEventListener("pointerdown",i,!0),n.removeEventListener("mousedown",i,!0),n.removeEventListener("touchstart",i,!0)}},[]);const qe=s.useCallback(n=>{if(q.current=n,typeof w=="function"){w(n);return}w&&(w.current=n)},[w]);return e.jsx("select",{ref:qe,...Ke,value:l,defaultValue:u,disabled:o,"aria-label":Me,"aria-labelledby":ee,"aria-invalid":Z,"aria-keyshortcuts":Ne,"data-invalid":$?"true":void 0,"data-focused":z?"true":void 0,"data-focus-visible":X?"true":void 0,"data-hovered":Y?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...ze,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:$?"var(--aurora-color-red-500)":z||Y&&!h?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:z&&X&&!h?`0 0 0 3px ${$?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:o?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:o?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:o?"not-allowed":"pointer",...a},onChange:n=>{const b=V(n.currentTarget.value);if(b!==void 0){const d=ne(j,b);d>=0&&d!==n.currentTarget.selectedIndex&&(n.currentTarget.selectedIndex=d)}const i=V(n.currentTarget.value),R=W.current;W.current=i,!(i!==void 0&&R!==void 0&&i===R)&&(f==null||f(n))},onFocus:n=>{U(!0),S($e(n.currentTarget,k.current)),v==null||v(n)},onBlur:n=>{U(!1),S(!1),x==null||x(n)},onMouseDown:n=>{n.button===0&&!n.ctrlKey&&(k.current=!1,S(!1)),M==null||M(n)},onPointerDown:n=>{te(n.button)&&!n.ctrlKey&&(k.current=!1,S(!1)),N==null||N(n)},onMouseEnter:n=>{h||G(!0),L==null||L(n)},onMouseLeave:n=>{G(!1),K==null||K(n)},children:_})});function J(t){if(typeof t!="string")return;const a=t.trim();return a.length>0?a:void 0}function $e(t,a){try{return t.matches(":focus-visible")||a}catch{return a}}function te(t){return typeof t!="number"||t<=0}function Je(t){const a=[],r=(o,l=!1)=>{s.Children.forEach(o,u=>{if(!s.isValidElement(u))return;const f=typeof u.type=="string"?u.type:null;if(f==="option"){const v=u.props,x=V(v.value,v.children);x!==void 0&&a.push({value:x,disabled:l||!!v.disabled});return}if(f==="optgroup"){const v=u.props;r(v.children,l||!!v.disabled);return}r(u.props.children,l)})};return r(t),a}function V(t,a){if(t==null){const r=Q(a);return r.length>0?r:void 0}return String(t)}function Q(t){return typeof t=="string"?ae(t):typeof t=="number"?String(t):Array.isArray(t)?ae(t.map(a=>Q(a)).filter(a=>a.length>0).join(" ")):s.isValidElement(t)?Q(t.props.children):""}function ae(t){return t.replace(/\s+/g," ").trim()}function ne(t,a){let r=-1,o=-1;for(let l=0;l<t.length;l+=1){const u=t[l];if(u.value===a&&(r===-1&&(r=l),!u.disabled)){o=l;break}}return o!==-1?o:r}p.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function m({children:t,gap:a=10}){return e.jsx(We,{maxWidth:"min(100%, 360px)",gap:a,children:t})}const ot={title:"Form/Select",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function Qe(){const[t,a]=s.useState("react");return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(Te,{children:t})]}),e.jsxs(p,{"aria-label":"Framework select",value:t,onChange:r=>a(r.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}function Xe(){const[t,a]=s.useState("react"),[r,o]=s.useState(0);return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"onChange count"}),e.jsx(Te,{"data-testid":"duplicate-select-change-count",children:r})]}),e.jsxs(p,{"aria-label":"Duplicate interaction guard select",value:t,onChange:l=>{a(l.target.value),o(u=>u+1)},children:[e.jsx("option",{value:"react",children:"React primary"}),e.jsx("option",{value:"react",children:"React secondary"}),e.jsx("option",{value:"vue",children:"Vue"})]})]})}const H={render:()=>e.jsx(Qe,{}),play:async({canvasElement:t})=>{const r=y(t).getByRole("combobox",{name:"Framework select"});await E.selectOptions(r,"vue"),await c(r).toHaveValue("vue")}},B={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:g,children:"Duplicate values fall back to the first enabled option for deterministic selected-state semantics."}),e.jsxs(p,{"aria-label":"Duplicate semantics select",defaultValue:"react",children:[e.jsx("option",{value:"react",disabled:!0,children:"React disabled"}),e.jsx("option",{value:"react",children:"React enabled"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=y(t),r=a.getByRole("combobox",{name:"Duplicate semantics select"}),o=a.getAllByRole("option");await c(r).toHaveValue("react"),await c(r).toHaveProperty("selectedIndex",1),await c(o[0]).toHaveProperty("selected",!1),await c(o[1]).toHaveProperty("selected",!0)}},I={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:g,children:"Options without explicit values use text fallback and keep duplicate selected-state semantics deterministic."}),e.jsxs(p,{"aria-label":"Implicit duplicate semantics select",defaultValue:"React",children:[e.jsx("option",{disabled:!0,children:"React"}),e.jsx("option",{children:"React"}),e.jsx("option",{children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=y(t),r=a.getByRole("combobox",{name:"Implicit duplicate semantics select"}),o=a.getAllByRole("option");await c(r).toHaveValue("React"),await c(r).toHaveProperty("selectedIndex",1),await c(o[0]).toHaveProperty("selected",!1),await c(o[1]).toHaveProperty("selected",!0)}},A={render:()=>e.jsx(Xe,{}),play:async({canvasElement:t})=>{const a=y(t),r=a.getByRole("combobox",{name:"Duplicate interaction guard select"}),o=a.getAllByRole("option"),l=a.getByTestId("duplicate-select-change-count");await E.selectOptions(r,o[1]),await c(r).toHaveProperty("selectedIndex",0),await c(l).toHaveTextContent("0"),await E.selectOptions(r,"vue"),await c(r).toHaveValue("vue"),await c(l).toHaveTextContent("1")}},D={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(p,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...g,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},F={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:g,children:"Framework label"}),e.jsxs(p,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const r=y(t).getByRole("combobox",{name:"Framework label"});await c(r).not.toHaveAttribute("aria-label")}},T={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:g,children:"Framework heading"}),e.jsxs(p,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const r=y(t).getByRole("combobox",{name:"Framework heading"});await c(r).toHaveAttribute("aria-labelledby","storybook-select-heading"),await c(r).not.toHaveAttribute("aria-label")}},P={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},C={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(p,{"aria-label":"Actionable select shortcuts",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]}),e.jsxs(p,{"aria-label":"Disabled select shortcuts",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=y(t);await c(a.getByRole("combobox",{name:"Actionable select shortcuts"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await c(a.getByRole("combobox",{name:"Disabled select shortcuts"})).not.toHaveAttribute("aria-keyshortcuts")}},O={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:g,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(p,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:t})=>{const a=y(t),r=await a.findByRole("button",{name:"Before select"}),o=a.getByRole("combobox",{name:"Focus intent select"});await E.click(r),await E.tab(),await c(o).toHaveFocus(),await c(o).toHaveAttribute("data-focus-visible","true"),Ge.mouseDown(o,{button:0,ctrlKey:!0}),await c(o).toHaveAttribute("data-focus-visible","true")}};var re,oe,se;H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ce,le,ie;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ie=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,de,pe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=I.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ve,me,be;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <DuplicateTelemetrySelectDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Duplicate interaction guard select"
    });
    const options = canvas.getAllByRole("option");
    const changeCount = canvas.getByTestId("duplicate-select-change-count");
    await userEvent.selectOptions(select, options[1]);
    await expect(select).toHaveProperty("selectedIndex", 0);
    await expect(changeCount).toHaveTextContent("0");
    await userEvent.selectOptions(select, "vue");
    await expect(select).toHaveValue("vue");
    await expect(changeCount).toHaveTextContent("1");
  }
}`,...(be=(me=A.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,fe,xe;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(xe=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var he,ge,we;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var Se,ke,je;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};var Re,Ve,Ee;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ee=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source}}};var He,Be,Ie;C.parameters={...C.parameters,docs:{...(He=C.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ie=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source}}};var Ae,De,Fe;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Fe=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};const st=["Controlled","DuplicateValueSelectedSemantics","ImplicitDuplicateValueSemantics","DuplicateValueInteractionNoopTelemetry","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","ShortcutHintPrecision","FocusIntentReentry"];export{F as BlankAriaLabelFallback,H as Controlled,P as DisabledState,A as DuplicateValueInteractionNoopTelemetry,B as DuplicateValueSelectedSemantics,O as FocusIntentReentry,I as ImplicitDuplicateValueSemantics,D as InvalidState,T as LabelledByPrecedence,C as ShortcutHintPrecision,st as __namedExportsOrder,ot as default};
