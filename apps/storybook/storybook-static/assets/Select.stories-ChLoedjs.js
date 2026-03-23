import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{f as Ye}from"./FieldStyles-CQy9UjBZ.js";import{a as Ze}from"./a11y-CU5SQrEA.js";import{B as N}from"./Badge-ZJmMstsz.js";import{within as y,expect as r,userEvent as g,fireEvent as et}from"./index-DgAF9SIF.js";import{s as w,S as tt}from"./storyShowcase-DlKirntE.js";const d=s.forwardRef(function({style:t,invalid:n,disabled:c,value:l,defaultValue:i,onChange:b,onFocus:v,onBlur:x,onMouseEnter:M,onMouseLeave:U,onMouseDown:_,onPointerDown:q,"aria-invalid":Ue,"aria-label":_e,"aria-labelledby":qe,"aria-keyshortcuts":Ge,children:ae,...We},S){const G=s.useRef(null);s.useRef(null);const[W,$]=s.useState(!1),[ne,R]=s.useState(!1),[oe,J]=s.useState(!1),Q=s.useRef(void 0),j=s.useRef(!1),re=Ze(n,Ue),X=re!==void 0,V=E(c,!1),h=V,se=Z(qe),$e=se?void 0:Z(_e),Je=h?void 0:Z(Ge)??"ArrowDown ArrowUp",Y=s.useMemo(()=>ee(ae),[ae]),k=s.useMemo(()=>nt(Y),[Y]),Qe=s.useMemo(()=>k.map(o=>o.value),[k]);s.useEffect(()=>{},[Qe]),s.useLayoutEffect(()=>{const o=G.current;if(!o)return;const f=H(o.value);if(f===void 0)return;const u=ie(k,f);u>=0&&u!==o.selectedIndex&&(o.selectedIndex=u),Q.current=H(o.value)},[k,l]),s.useEffect(()=>{h&&($(!1),R(!1),J(!1))},[h]),s.useEffect(()=>{var B;const o=((B=G.current)==null?void 0:B.ownerDocument)??document,f=p=>{p.metaKey||p.altKey||p.ctrlKey||(j.current=!0)},u=p=>{"button"in p&&!ce(p.button)||"ctrlKey"in p&&p.ctrlKey||(j.current=!1)};return o.addEventListener("keydown",f,!0),o.addEventListener("pointerdown",u,!0),o.addEventListener("mousedown",u,!0),o.addEventListener("touchstart",u,!0),()=>{o.removeEventListener("keydown",f,!0),o.removeEventListener("pointerdown",u,!0),o.removeEventListener("mousedown",u,!0),o.removeEventListener("touchstart",u,!0)}},[]);const Xe=s.useCallback(o=>{if(G.current=o,typeof S=="function"){S(o);return}S&&(S.current=o)},[S]);return e.jsx("select",{ref:Xe,...We,value:l,defaultValue:i,disabled:V,"aria-label":$e,"aria-labelledby":se,"aria-invalid":re,"aria-keyshortcuts":Je,"data-invalid":X?"true":void 0,"data-focused":W?"true":void 0,"data-focus-visible":ne?"true":void 0,"data-hovered":oe?"true":void 0,"data-aurora-reduced-motion":"transition",style:{...Ye,transition:"border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",borderColor:X?"var(--aurora-color-red-500)":W||oe&&!h?"var(--aurora-border-strong)":"var(--aurora-input-border)",boxShadow:W&&ne&&!h?`0 0 0 3px ${X?"color-mix(in srgb, var(--aurora-color-red-500) 25%, transparent)":"color-mix(in srgb, var(--aurora-input-focus-ring) 38%, transparent)"}`:"none",background:V?"color-mix(in srgb, var(--aurora-input-bg) 80%, var(--aurora-surface-elevated))":"var(--aurora-input-bg)",color:V?"color-mix(in srgb, var(--aurora-input-text) 60%, transparent)":"var(--aurora-input-text)",cursor:V?"not-allowed":"pointer",...t},onChange:o=>{const f=H(o.currentTarget.value);if(f!==void 0){const p=ie(k,f);p>=0&&p!==o.currentTarget.selectedIndex&&(o.currentTarget.selectedIndex=p)}const u=H(o.currentTarget.value),B=Q.current;Q.current=u,!(u!==void 0&&B!==void 0&&u===B)&&(b==null||b(o))},onFocus:o=>{$(!0),R(at(o.currentTarget,j.current)),v==null||v(o)},onBlur:o=>{$(!1),R(!1),x==null||x(o)},onMouseDown:o=>{o.button===0&&!o.ctrlKey&&(j.current=!1,R(!1)),_==null||_(o)},onPointerDown:o=>{ce(o.button)&&!o.ctrlKey&&(j.current=!1,R(!1)),q==null||q(o)},onMouseEnter:o=>{h||J(!0),M==null||M(o)},onMouseLeave:o=>{J(!1),U==null||U(o)},children:Y})});function E(a,t){return typeof a!="boolean"?t:a}function Z(a){if(typeof a!="string")return;const t=a.trim();return t.length>0?t:void 0}function at(a,t){try{return a.matches(":focus-visible")||t}catch{return t}}function ce(a){return typeof a!="number"||a<=0}function ee(a){return s.Children.map(a,t=>{if(!s.isValidElement(t))return t;const n=typeof t.type=="string"?t.type:null;if(n==="option"){const l=t.props;return s.cloneElement(t,{disabled:E(l.disabled,!1)})}if(n==="optgroup"){const l=t.props;return s.cloneElement(t,{disabled:E(l.disabled,!1),children:ee(l.children)})}const c=t.props;return s.cloneElement(t,{children:ee(c.children)})})}function nt(a){const t=[],n=(c,l=!1)=>{s.Children.forEach(c,i=>{if(!s.isValidElement(i))return;const b=typeof i.type=="string"?i.type:null;if(b==="option"){const v=i.props,x=H(v.value,v.children);x!==void 0&&t.push({value:x,disabled:l||E(v.disabled,!1)});return}if(b==="optgroup"){const v=i.props;n(v.children,l||E(v.disabled,!1));return}n(i.props.children,l)})};return n(a),t}function H(a,t){if(a==null){const n=te(t);return n.length>0?n:void 0}return String(a)}function te(a){return typeof a=="string"?le(a):typeof a=="number"?String(a):Array.isArray(a)?le(a.map(t=>te(t)).filter(t=>t.length>0).join(" ")):s.isValidElement(a)?te(a.props.children):""}function le(a){return a.replace(/\s+/g," ").trim()}function ie(a,t){let n=-1,c=-1;for(let l=0;l<a.length;l+=1){const i=a[l];if(i.value===t&&(n===-1&&(n=l),!i.disabled)){c=l;break}}return c!==-1?c:n}d.__docgenInfo={description:"",methods:[],displayName:"Select",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}}};function m({children:a,gap:t=10}){return e.jsx(tt,{maxWidth:"min(100%, 360px)",gap:t,children:a})}const mt={title:"Form/Select",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Select provides native option picking with Aurora token styling, invalid semantics, and disabled boundaries."}}}};function ot(){const[a,t]=s.useState("react");return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected"}),e.jsx(N,{children:a})]}),e.jsxs(d,{"aria-label":"Framework select",value:a,onChange:n=>t(n.target.value),children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"}),e.jsx("option",{value:"svelte",children:"Svelte"})]})]})}function rt(){const[a,t]=s.useState("react"),[n,c]=s.useState(0);return e.jsxs(m,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"onChange count"}),e.jsx(N,{"data-testid":"duplicate-select-change-count",children:n})]}),e.jsxs(d,{"aria-label":"Duplicate interaction guard select",value:a,onChange:l=>{t(l.target.value),c(i=>i+1)},children:[e.jsx("option",{value:"react",children:"React primary"}),e.jsx("option",{value:"react",children:"React secondary"}),e.jsx("option",{value:"vue",children:"Vue"})]})]})}const I={render:()=>e.jsx(ot,{}),play:async({canvasElement:a})=>{const n=y(a).getByRole("combobox",{name:"Framework select"});await g.selectOptions(n,"vue"),await r(n).toHaveValue("vue")}},A={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:w,children:"Duplicate values fall back to the first enabled option for deterministic selected-state semantics."}),e.jsxs(d,{"aria-label":"Duplicate semantics select",defaultValue:"react",children:[e.jsx("option",{value:"react",disabled:!0,children:"React disabled"}),e.jsx("option",{value:"react",children:"React enabled"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const t=y(a),n=t.getByRole("combobox",{name:"Duplicate semantics select"}),c=t.getAllByRole("option");await r(n).toHaveValue("react"),await r(n).toHaveProperty("selectedIndex",1),await r(c[0]).toHaveProperty("selected",!1),await r(c[1]).toHaveProperty("selected",!0)}},C={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:w,children:"Options without explicit values use text fallback and keep duplicate selected-state semantics deterministic."}),e.jsxs(d,{"aria-label":"Implicit duplicate semantics select",defaultValue:"React",children:[e.jsx("option",{disabled:!0,children:"React"}),e.jsx("option",{children:"React"}),e.jsx("option",{children:"Vue"})]})]}),play:async({canvasElement:a})=>{const t=y(a),n=t.getByRole("combobox",{name:"Implicit duplicate semantics select"}),c=t.getAllByRole("option");await r(n).toHaveValue("React"),await r(n).toHaveProperty("selectedIndex",1),await r(c[0]).toHaveProperty("selected",!1),await r(c[1]).toHaveProperty("selected",!0)}},T={render:()=>e.jsx(rt,{}),play:async({canvasElement:a})=>{const t=y(a),n=t.getByRole("combobox",{name:"Duplicate interaction guard select"}),c=t.getAllByRole("option"),l=t.getByTestId("duplicate-select-change-count");await g.selectOptions(n,c[1]),await r(n).toHaveProperty("selectedIndex",0),await r(l).toHaveTextContent("0"),await g.selectOptions(n,"vue"),await r(n).toHaveValue("vue"),await r(l).toHaveTextContent("1")}},D={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(d,{"aria-label":"Environment select",invalid:!0,defaultValue:"","aria-describedby":"environment-error",children:[e.jsx("option",{value:"",disabled:!0,children:"Select environment"}),e.jsx("option",{value:"prod",children:"Production"}),e.jsx("option",{value:"stage",children:"Staging"})]}),e.jsx("p",{id:"environment-error",style:{...w,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))"},children:"Environment is required before deployment."})]})},F={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("label",{htmlFor:"storybook-select-blank-label",style:w,children:"Framework label"}),e.jsxs(d,{id:"storybook-select-blank-label","aria-label":"   ",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const n=y(a).getByRole("combobox",{name:"Framework label"});await r(n).not.toHaveAttribute("aria-label")}},P={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{id:"storybook-select-heading",style:w,children:"Framework heading"}),e.jsxs(d,{"aria-label":"Framework fallback name","aria-labelledby":"storybook-select-heading",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const n=y(a).getByRole("combobox",{name:"Framework heading"});await r(n).toHaveAttribute("aria-labelledby","storybook-select-heading"),await r(n).not.toHaveAttribute("aria-label")}},L={args:{"aria-label":"Disabled framework select",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"},"react"),e.jsx("option",{value:"vue",children:"Vue"},"vue")]}},O={render:()=>e.jsxs(m,{gap:8,children:[e.jsxs(d,{"aria-label":"Actionable select shortcuts",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]}),e.jsxs(d,{"aria-label":"Disabled select shortcuts",disabled:!0,defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const t=y(a);await r(t.getByRole("combobox",{name:"Actionable select shortcuts"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await r(t.getByRole("combobox",{name:"Disabled select shortcuts"})).not.toHaveAttribute("aria-keyshortcuts")}};function st(){const[a,t]=s.useState("react"),[n,c]=s.useState(0);return e.jsxs(m,{gap:8,children:[e.jsxs(d,{"aria-label":"Runtime boolean select",disabled:"true",value:a,onChange:l=>{t(l.target.value),c(i=>i+1)},children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",disabled:"true",children:"Vue"}),e.jsx("optgroup",{label:"Legacy",disabled:"true",children:e.jsx("option",{value:"legacy",children:"Legacy"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsxs(N,{tone:"default",children:["Value: ",e.jsx("span",{"data-testid":"select-runtime-value",children:a})]}),e.jsxs(N,{tone:"default",children:["Changes: ",e.jsx("span",{"data-testid":"select-runtime-events",children:n})]})]})]})}const K={render:()=>e.jsx(st,{}),play:async({canvasElement:a})=>{const t=y(a),n=t.getByRole("combobox",{name:"Runtime boolean select"}),c=t.getByRole("option",{name:"Vue"}),l=t.getByRole("option",{name:"Legacy"}),i=t.getByTestId("select-runtime-value"),b=t.getByTestId("select-runtime-events");await r(n).not.toBeDisabled(),await r(n).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await r(c).not.toBeDisabled(),await r(l).not.toBeDisabled(),await r(i).toHaveTextContent("react"),await r(b).toHaveTextContent("0"),await g.selectOptions(n,"vue"),await r(n).toHaveValue("vue"),await r(i).toHaveTextContent("vue"),await r(b).toHaveTextContent("1")}},z={render:()=>e.jsxs(m,{gap:8,children:[e.jsx("p",{style:w,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores select focus-visible state."}),e.jsx("button",{type:"button",children:"Before select"}),e.jsxs(d,{"aria-label":"Focus intent select",defaultValue:"react",children:[e.jsx("option",{value:"react",children:"React"}),e.jsx("option",{value:"vue",children:"Vue"})]})]}),play:async({canvasElement:a})=>{const t=y(a),n=await t.findByRole("button",{name:"Before select"}),c=t.getByRole("combobox",{name:"Focus intent select"});await g.click(n),await g.tab(),await r(c).toHaveFocus(),await r(c).toHaveAttribute("data-focus-visible","true"),et.mouseDown(c,{button:0,ctrlKey:!0}),await r(c).toHaveAttribute("data-focus-visible","true")}};var ue,de,pe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=I.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ve,me,be;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(me=A.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,fe,xe;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(xe=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var he,ge,we;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var Se,Re,je;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var Ve,ke,Be;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Be=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var He,Ee,Ie;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ie=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Ae,Ce,Te;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Te=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var De,Fe,Pe;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Pe=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Le,Oe,Ke;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationSelect />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox", {
      name: "Runtime boolean select"
    });
    const vue = canvas.getByRole("option", {
      name: "Vue"
    });
    const legacy = canvas.getByRole("option", {
      name: "Legacy"
    });
    const value = canvas.getByTestId("select-runtime-value");
    const events = canvas.getByTestId("select-runtime-events");
    await expect(select).not.toBeDisabled();
    await expect(select).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    await expect(vue).not.toBeDisabled();
    await expect(legacy).not.toBeDisabled();
    await expect(value).toHaveTextContent("react");
    await expect(events).toHaveTextContent("0");
    await userEvent.selectOptions(select, "vue");
    await expect(select).toHaveValue("vue");
    await expect(value).toHaveTextContent("vue");
    await expect(events).toHaveTextContent("1");
  }
}`,...(Ke=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:Ke.source}}};var ze,Ne,Me;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};const bt=["Controlled","DuplicateValueSelectedSemantics","ImplicitDuplicateValueSemantics","DuplicateValueInteractionNoopTelemetry","InvalidState","BlankAriaLabelFallback","LabelledByPrecedence","DisabledState","ShortcutHintPrecision","RuntimeBooleanConfigNormalization","FocusIntentReentry"];export{F as BlankAriaLabelFallback,I as Controlled,L as DisabledState,T as DuplicateValueInteractionNoopTelemetry,A as DuplicateValueSelectedSemantics,z as FocusIntentReentry,C as ImplicitDuplicateValueSemantics,D as InvalidState,P as LabelledByPrecedence,K as RuntimeBooleanConfigNormalization,O as ShortcutHintPrecision,bt as __namedExportsOrder,mt as default};
