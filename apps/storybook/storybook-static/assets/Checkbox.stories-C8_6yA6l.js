import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{a as ze}from"./a11y-CU5SQrEA.js";import{B as Ke}from"./Badge-ZJmMstsz.js";import{within as d,userEvent as I,expect as c,fireEvent as qe}from"./index-DgAF9SIF.js";function W(e,t){return typeof e!="boolean"?t:e}const i=o.forwardRef(function({label:t,description:r,invalid:s,indeterminate:Ce=!1,disabled:Se,style:Re,onFocus:j,onBlur:H,onMouseDown:T,onPointerDown:L,onKeyDown:N,"aria-invalid":Ae,"aria-label":Ie,"aria-labelledby":je,"aria-keyshortcuts":He,...F},h){const[_,z]=o.useState(!1),[O,p]=o.useState(!1),y=o.useRef(null),b=o.useRef(!1);o.useRef(null);const G=o.useId(),Y=o.useId(),$=ze(s,Ae),J=$!==void 0,m=W(Se,!1),K=W(Ce,!1),x=m,q=P(t),k=P(r),v=D(je),V=v?void 0:D(Ie),Te=x?void 0:D(He)??"Space",Le=[F["aria-describedby"],k?G:void 0].filter(Boolean).join(" ")||void 0,Ne=V||v||!q?v:Y;o.useEffect(()=>{x&&(z(!1),p(!1))},[x]),o.useEffect(()=>{var U;const n=((U=y.current)==null?void 0:U.ownerDocument)??document,Q=l=>{l.metaKey||l.altKey||l.ctrlKey||(b.current=!0)},u=l=>{"button"in l&&!X(l.button)||"ctrlKey"in l&&l.ctrlKey||(b.current=!1)};return n.addEventListener("keydown",Q,!0),n.addEventListener("pointerdown",u,!0),n.addEventListener("mousedown",u,!0),n.addEventListener("touchstart",u,!0),()=>{n.removeEventListener("keydown",Q,!0),n.removeEventListener("pointerdown",u,!0),n.removeEventListener("mousedown",u,!0),n.removeEventListener("touchstart",u,!0)}},[]),o.useEffect(()=>{},[V,v,t]),o.useEffect(()=>{y.current&&(y.current.indeterminate=K)},[K]);const Fe=o.useCallback(n=>{y.current=n,typeof h=="function"?h(n):h&&(h.current=n)},[h]);return a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:m?"not-allowed":"pointer",opacity:m?.75:1,...Re},children:[a.jsx("input",{...F,ref:Fe,type:"checkbox",disabled:m,"aria-label":V,"aria-labelledby":Ne,"aria-invalid":$,"aria-checked":K?"mixed":F["aria-checked"],"aria-describedby":Le,"aria-keyshortcuts":Te,"data-focused":_?"true":void 0,"data-focus-visible":O?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:J?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:m?"not-allowed":"pointer",boxShadow:_&&O&&!x?`0 0 0 3px ${J?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:n=>{z(!0),p(Ve(n.currentTarget,b.current)),j==null||j(n)},onBlur:n=>{z(!1),p(!1),H==null||H(n)},onMouseDown:n=>{n.button===0&&!n.ctrlKey&&(b.current=!1,p(!1)),T==null||T(n)},onPointerDown:n=>{X(n.button)&&!n.ctrlKey&&(b.current=!1,p(!1)),L==null||L(n)},onKeyDown:n=>{b.current=!0,N==null||N(n)}}),q||k?a.jsxs("span",{style:{display:"grid",gap:k?2:0},children:[q?a.jsx("span",{id:Y,children:t}):null,k?a.jsx("span",{id:G,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:r}):null]}):null]})});function D(e){if(typeof e!="string")return;const t=e.trim();return t.length>0?t:void 0}function P(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>P(t)):o.isValidElement(e)}function Ve(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function X(e){return typeof e!="number"||e<=0}i.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const $e={title:"Form/Checkbox",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function De(){const[e,t]=o.useState(!0);return a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),a.jsx(Ke,{tone:e?"success":"danger",children:e?"Enabled":"Disabled"})]}),a.jsx(i,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:e,onChange:r=>t(r.currentTarget.checked)})]})}const g={render:()=>a.jsx(De,{}),play:async({canvasElement:e})=>{const r=d(e).getByRole("checkbox",{name:"Enable AI memory"});await I.click(r),await c(r).not.toBeChecked()}},f={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},w={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[a.jsx(i,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),a.jsx(i,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})},B={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[a.jsx(i,{label:"Shortcut metadata checkbox",description:"Actionable checkboxes should expose Space shortcut hints."}),a.jsx(i,{label:"Blocked shortcut metadata checkbox",description:"Disabled checkboxes should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:e})=>{const t=d(e);await c(t.getByRole("checkbox",{name:/^Shortcut metadata checkbox/})).toHaveAttribute("aria-keyshortcuts","Space"),await c(t.getByRole("checkbox",{name:/^Blocked shortcut metadata checkbox/})).not.toHaveAttribute("aria-keyshortcuts")}},E={render:()=>a.jsx("div",{style:{width:320,display:"grid",gap:14},children:a.jsx(i,{label:"Runtime boolean checkbox",description:"Invalid runtime booleans should degrade to actionable, non-mixed checkbox behavior.",disabled:"true",indeterminate:"true"})}),play:async({canvasElement:e})=>{const r=d(e).getByRole("checkbox",{name:/^Runtime boolean checkbox/});await c(r).not.toBeDisabled(),await c(r).not.toHaveAttribute("aria-checked","mixed"),await c(r).toHaveAttribute("aria-keyshortcuts","Space"),await c(r.indeterminate).toBe(!1),await I.click(r),await c(r).toBeChecked()}},C={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{id:"checkbox-story-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Checkbox heading"}),a.jsx(i,{"aria-label":"Fallback checkbox name","aria-labelledby":"checkbox-story-heading",label:"Release gate",description:"aria-labelledby should remain canonical."})]}),play:async({canvasElement:e})=>{const r=d(e).getByRole("checkbox",{name:"Checkbox heading"});await c(r).toHaveAttribute("aria-labelledby","checkbox-story-heading"),await c(r).not.toHaveAttribute("aria-label")}},S={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{id:"checkbox-icon-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Notification opt-in"}),a.jsx(i,{"aria-label":"Fallback notification checkbox","aria-labelledby":"checkbox-icon-heading",label:a.jsx("span",{"aria-hidden":"true",children:"🔔"}),description:"Icon-only label should still keep canonical external naming."})]}),play:async({canvasElement:e})=>{const r=d(e).getByRole("checkbox",{name:"Notification opt-in"});await c(r).toHaveAttribute("aria-labelledby","checkbox-icon-heading"),await c(r).not.toHaveAttribute("aria-label")}},R={args:{label:0,description:0},play:async({canvasElement:e})=>{const t=d(e),r=t.getByRole("checkbox"),s=r.getAttribute("aria-describedby");await c(r).toHaveAccessibleName("0"),await c(s).toBeTruthy(),await c(t.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},A={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox focus-visible state."}),a.jsx("button",{type:"button",children:"Before checkbox"}),a.jsx(i,{label:"Focus intent checkbox",description:"Keyboard re-entry should restore focus ring semantics."})]}),play:async({canvasElement:e})=>{const t=d(e),r=await t.findByRole("button",{name:"Before checkbox"}),s=t.getByRole("checkbox",{name:/^Focus intent checkbox/});await I.click(r),await I.tab(),await c(s).toHaveFocus(),await c(s).toHaveAttribute("data-focus-visible","true"),qe.mouseDown(s,{button:0,ctrlKey:!0}),await c(s).toHaveAttribute("data-focus-visible","true")}};var Z,M,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <ControlledCheckbox />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: "Enable AI memory"
    });
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  }
}`,...(ee=(M=g.parameters)==null?void 0:M.docs)==null?void 0:ee.source}}};var ae,te,ne;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ce,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(oe=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var ie,se,le;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox label="Shortcut metadata checkbox" description="Actionable checkboxes should expose Space shortcut hints." />
      <Checkbox label="Blocked shortcut metadata checkbox" description="Disabled checkboxes should not advertise keyboard shortcuts." disabled defaultChecked />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("checkbox", {
      name: /^Shortcut metadata checkbox/
    })).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(canvas.getByRole("checkbox", {
      name: /^Blocked shortcut metadata checkbox/
    })).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(le=(se=B.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,be,ue;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox label="Runtime boolean checkbox" description="Invalid runtime booleans should degrade to actionable, non-mixed checkbox behavior." disabled={"true" as unknown as boolean} indeterminate={"true" as unknown as boolean} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: /^Runtime boolean checkbox/
    }) as HTMLInputElement;
    await expect(checkbox).not.toBeDisabled();
    await expect(checkbox).not.toHaveAttribute("aria-checked", "mixed");
    await expect(checkbox).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(checkbox.indeterminate).toBe(false);
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  }
}`,...(ue=(be=E.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var he,pe,me;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 10
  }}>
      <p id="checkbox-story-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)"
    }}>
        Checkbox heading
      </p>
      <Checkbox aria-label="Fallback checkbox name" aria-labelledby="checkbox-story-heading" label="Release gate" description="aria-labelledby should remain canonical." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: "Checkbox heading"
    });
    await expect(checkbox).toHaveAttribute("aria-labelledby", "checkbox-story-heading");
    await expect(checkbox).not.toHaveAttribute("aria-label");
  }
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ye,xe,ke;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 10
  }}>
      <p id="checkbox-icon-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)"
    }}>
        Notification opt-in
      </p>
      <Checkbox aria-label="Fallback notification checkbox" aria-labelledby="checkbox-icon-heading" label={<span aria-hidden="true">🔔</span>} description="Icon-only label should still keep canonical external naming." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: "Notification opt-in"
    });
    await expect(checkbox).toHaveAttribute("aria-labelledby", "checkbox-icon-heading");
    await expect(checkbox).not.toHaveAttribute("aria-label");
  }
}`,...(ke=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var ve,ge,fe;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 0,
    description: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    const describedById = checkbox.getAttribute("aria-describedby");
    await expect(checkbox).toHaveAccessibleName("0");
    await expect(describedById).toBeTruthy();
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(2);
  }
}`,...(fe=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var we,Be,Ee;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 10
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox
        focus-visible state.
      </p>
      <button type="button">Before checkbox</button>
      <Checkbox label="Focus intent checkbox" description="Keyboard re-entry should restore focus ring semantics." />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before checkbox"
    });
    const checkbox = canvas.getByRole("checkbox", {
      name: /^Focus intent checkbox/
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(checkbox).toHaveFocus();
    await expect(checkbox).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(checkbox, {
      button: 0,
      ctrlKey: true
    });
    await expect(checkbox).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(Ee=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};const Je=["Controlled","Indeterminate","InvalidAndDisabled","ShortcutHintPrecision","RuntimeBooleanConfigNormalization","LabelledByPrecedence","IconLabelledByPrecedence","NumericContentSemantics","FocusIntentReentry"];export{g as Controlled,A as FocusIntentReentry,S as IconLabelledByPrecedence,f as Indeterminate,w as InvalidAndDisabled,C as LabelledByPrecedence,R as NumericContentSemantics,E as RuntimeBooleanConfigNormalization,B as ShortcutHintPrecision,Je as __namedExportsOrder,$e as default};
