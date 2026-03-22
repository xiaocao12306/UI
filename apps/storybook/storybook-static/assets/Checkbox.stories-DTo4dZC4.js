import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{a as je}from"./a11y-CU5SQrEA.js";import{B as Ie}from"./Badge-ZJmMstsz.js";import{within as u,userEvent as V,expect as o,fireEvent as He}from"./index-DgAF9SIF.js";const s=c.forwardRef(function({label:n,description:r,invalid:i,indeterminate:R=!1,disabled:h,style:fe,onFocus:j,onBlur:I,onMouseDown:H,onPointerDown:T,onKeyDown:L,"aria-invalid":ge,"aria-label":we,"aria-labelledby":Be,"aria-keyshortcuts":Ee,...N},p){const[_,F]=c.useState(!1),[O,y]=c.useState(!1),m=c.useRef(null),d=c.useRef(!1);c.useRef(null);const D=c.useId(),G=c.useId(),Y=je(i,ge),$=Y!==void 0,x=!!h,K=P(n),k=P(r),v=q(Be),z=v?void 0:q(we),Ce=x?void 0:q(Ee)??"Space",Se=[N["aria-describedby"],k?D:void 0].filter(Boolean).join(" ")||void 0,Ae=z||v||!K?v:G;c.useEffect(()=>{x&&(F(!1),y(!1))},[x]),c.useEffect(()=>{var Q;const t=((Q=m.current)==null?void 0:Q.ownerDocument)??document,J=l=>{l.metaKey||l.altKey||l.ctrlKey||(d.current=!0)},b=l=>{"button"in l&&!U(l.button)||"ctrlKey"in l&&l.ctrlKey||(d.current=!1)};return t.addEventListener("keydown",J,!0),t.addEventListener("pointerdown",b,!0),t.addEventListener("mousedown",b,!0),t.addEventListener("touchstart",b,!0),()=>{t.removeEventListener("keydown",J,!0),t.removeEventListener("pointerdown",b,!0),t.removeEventListener("mousedown",b,!0),t.removeEventListener("touchstart",b,!0)}},[]),c.useEffect(()=>{},[z,v,n]),c.useEffect(()=>{m.current&&(m.current.indeterminate=R)},[R]);const Re=c.useCallback(t=>{m.current=t,typeof p=="function"?p(t):p&&(p.current=t)},[p]);return a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:h?"not-allowed":"pointer",opacity:h?.75:1,...fe},children:[a.jsx("input",{...N,ref:Re,type:"checkbox",disabled:h,"aria-label":z,"aria-labelledby":Ae,"aria-invalid":Y,"aria-checked":R?"mixed":N["aria-checked"],"aria-describedby":Se,"aria-keyshortcuts":Ce,"data-focused":_?"true":void 0,"data-focus-visible":O?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:$?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:h?"not-allowed":"pointer",boxShadow:_&&O&&!x?`0 0 0 3px ${$?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:t=>{F(!0),y(Te(t.currentTarget,d.current)),j==null||j(t)},onBlur:t=>{F(!1),y(!1),I==null||I(t)},onMouseDown:t=>{t.button===0&&!t.ctrlKey&&(d.current=!1,y(!1)),H==null||H(t)},onPointerDown:t=>{U(t.button)&&!t.ctrlKey&&(d.current=!1,y(!1)),T==null||T(t)},onKeyDown:t=>{d.current=!0,L==null||L(t)}}),K||k?a.jsxs("span",{style:{display:"grid",gap:k?2:0},children:[K?a.jsx("span",{id:G,children:n}):null,k?a.jsx("span",{id:D,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:r}):null]}):null]})});function q(e){if(typeof e!="string")return;const n=e.trim();return n.length>0?n:void 0}function P(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(n=>P(n)):c.isValidElement(e)}function Te(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function U(e){return typeof e!="number"||e<=0}s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ve={title:"Form/Checkbox",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function Le(){const[e,n]=c.useState(!0);return a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),a.jsx(Ie,{tone:e?"success":"danger",children:e?"Enabled":"Disabled"})]}),a.jsx(s,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:e,onChange:r=>n(r.currentTarget.checked)})]})}const f={render:()=>a.jsx(Le,{}),play:async({canvasElement:e})=>{const r=u(e).getByRole("checkbox",{name:"Enable AI memory"});await V.click(r),await o(r).not.toBeChecked()}},g={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},w={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[a.jsx(s,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),a.jsx(s,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})},B={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[a.jsx(s,{label:"Shortcut metadata checkbox",description:"Actionable checkboxes should expose Space shortcut hints."}),a.jsx(s,{label:"Blocked shortcut metadata checkbox",description:"Disabled checkboxes should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:e})=>{const n=u(e);await o(n.getByRole("checkbox",{name:/^Shortcut metadata checkbox/})).toHaveAttribute("aria-keyshortcuts","Space"),await o(n.getByRole("checkbox",{name:/^Blocked shortcut metadata checkbox/})).not.toHaveAttribute("aria-keyshortcuts")}},E={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{id:"checkbox-story-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Checkbox heading"}),a.jsx(s,{"aria-label":"Fallback checkbox name","aria-labelledby":"checkbox-story-heading",label:"Release gate",description:"aria-labelledby should remain canonical."})]}),play:async({canvasElement:e})=>{const r=u(e).getByRole("checkbox",{name:"Checkbox heading"});await o(r).toHaveAttribute("aria-labelledby","checkbox-story-heading"),await o(r).not.toHaveAttribute("aria-label")}},C={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{id:"checkbox-icon-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Notification opt-in"}),a.jsx(s,{"aria-label":"Fallback notification checkbox","aria-labelledby":"checkbox-icon-heading",label:a.jsx("span",{"aria-hidden":"true",children:"🔔"}),description:"Icon-only label should still keep canonical external naming."})]}),play:async({canvasElement:e})=>{const r=u(e).getByRole("checkbox",{name:"Notification opt-in"});await o(r).toHaveAttribute("aria-labelledby","checkbox-icon-heading"),await o(r).not.toHaveAttribute("aria-label")}},S={args:{label:0,description:0},play:async({canvasElement:e})=>{const n=u(e),r=n.getByRole("checkbox"),i=r.getAttribute("aria-describedby");await o(r).toHaveAccessibleName("0"),await o(i).toBeTruthy(),await o(n.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},A={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox focus-visible state."}),a.jsx("button",{type:"button",children:"Before checkbox"}),a.jsx(s,{label:"Focus intent checkbox",description:"Keyboard re-entry should restore focus ring semantics."})]}),play:async({canvasElement:e})=>{const n=u(e),r=await n.findByRole("button",{name:"Before checkbox"}),i=n.getByRole("checkbox",{name:/^Focus intent checkbox/});await V.click(r),await V.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),He.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var W,X,Z;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var M,ee,ae;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ce,oe,se;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(se=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,de;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=E.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var be,ue,he;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var pe,ye,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var xe,ke,ve;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ve=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};const Pe=["Controlled","Indeterminate","InvalidAndDisabled","ShortcutHintPrecision","LabelledByPrecedence","IconLabelledByPrecedence","NumericContentSemantics","FocusIntentReentry"];export{f as Controlled,A as FocusIntentReentry,C as IconLabelledByPrecedence,g as Indeterminate,w as InvalidAndDisabled,E as LabelledByPrecedence,S as NumericContentSemantics,B as ShortcutHintPrecision,Pe as __namedExportsOrder,Ve as default};
