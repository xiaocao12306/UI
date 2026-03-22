import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{a as Re}from"./a11y-CU5SQrEA.js";import{B as Ae}from"./Badge-ZJmMstsz.js";import{within as u,userEvent as z,expect as o,fireEvent as je}from"./index-DgAF9SIF.js";const s=c.forwardRef(function({label:n,description:r,invalid:i,indeterminate:R=!1,disabled:h,style:ve,onFocus:A,onBlur:j,onMouseDown:I,onPointerDown:H,onKeyDown:T,"aria-invalid":fe,"aria-label":ge,"aria-labelledby":we,"aria-keyshortcuts":Be,...L},p){const[V,F]=c.useState(!1),[P,y]=c.useState(!1),m=c.useRef(null),d=c.useRef(!1);c.useRef(null);const _=c.useId(),O=Re(i,fe),D=O!==void 0,x=!!h,G=q(n),k=q(r),N=K(we),Y=N?void 0:K(ge),Ee=x?void 0:K(Be)??"Space",Ce=[L["aria-describedby"],k?_:void 0].filter(Boolean).join(" ")||void 0;c.useEffect(()=>{x&&(F(!1),y(!1))},[x]),c.useEffect(()=>{var J;const t=((J=m.current)==null?void 0:J.ownerDocument)??document,$=l=>{l.metaKey||l.altKey||l.ctrlKey||(d.current=!0)},b=l=>{"button"in l&&!Q(l.button)||"ctrlKey"in l&&l.ctrlKey||(d.current=!1)};return t.addEventListener("keydown",$,!0),t.addEventListener("pointerdown",b,!0),t.addEventListener("mousedown",b,!0),t.addEventListener("touchstart",b,!0),()=>{t.removeEventListener("keydown",$,!0),t.removeEventListener("pointerdown",b,!0),t.removeEventListener("mousedown",b,!0),t.removeEventListener("touchstart",b,!0)}},[]),c.useEffect(()=>{},[Y,N,r,n]),c.useEffect(()=>{m.current&&(m.current.indeterminate=R)},[R]);const Se=c.useCallback(t=>{m.current=t,typeof p=="function"?p(t):p&&(p.current=t)},[p]);return a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:h?"not-allowed":"pointer",opacity:h?.75:1,...ve},children:[a.jsx("input",{...L,ref:Se,type:"checkbox",disabled:h,"aria-label":Y,"aria-labelledby":N,"aria-invalid":O,"aria-checked":R?"mixed":L["aria-checked"],"aria-describedby":Ce,"aria-keyshortcuts":Ee,"data-focused":V?"true":void 0,"data-focus-visible":P?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:D?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:h?"not-allowed":"pointer",boxShadow:V&&P&&!x?`0 0 0 3px ${D?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:t=>{F(!0),y(Ie(t.currentTarget,d.current)),A==null||A(t)},onBlur:t=>{F(!1),y(!1),j==null||j(t)},onMouseDown:t=>{t.button===0&&!t.ctrlKey&&(d.current=!1,y(!1)),I==null||I(t)},onPointerDown:t=>{Q(t.button)&&!t.ctrlKey&&(d.current=!1,y(!1)),H==null||H(t)},onKeyDown:t=>{d.current=!0,T==null||T(t)}}),G||k?a.jsxs("span",{style:{display:"grid",gap:k?2:0},children:[G?a.jsx("span",{children:n}):null,k?a.jsx("span",{id:_,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:r}):null]}):null]})});function K(e){if(typeof e!="string")return;const n=e.trim();return n.length>0?n:void 0}function q(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(n=>q(n)):c.isValidElement(e)}function Ie(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function Q(e){return typeof e!="number"||e<=0}s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ze={title:"Form/Checkbox",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function He(){const[e,n]=c.useState(!0);return a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),a.jsx(Ae,{tone:e?"success":"danger",children:e?"Enabled":"Disabled"})]}),a.jsx(s,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:e,onChange:r=>n(r.currentTarget.checked)})]})}const v={render:()=>a.jsx(He,{}),play:async({canvasElement:e})=>{const r=u(e).getByRole("checkbox",{name:"Enable AI memory"});await z.click(r),await o(r).not.toBeChecked()}},f={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},g={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[a.jsx(s,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),a.jsx(s,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})},w={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[a.jsx(s,{label:"Shortcut metadata checkbox",description:"Actionable checkboxes should expose Space shortcut hints."}),a.jsx(s,{label:"Blocked shortcut metadata checkbox",description:"Disabled checkboxes should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:e})=>{const n=u(e);await o(n.getByRole("checkbox",{name:/^Shortcut metadata checkbox/})).toHaveAttribute("aria-keyshortcuts","Space"),await o(n.getByRole("checkbox",{name:/^Blocked shortcut metadata checkbox/})).not.toHaveAttribute("aria-keyshortcuts")}},B={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{id:"checkbox-story-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Checkbox heading"}),a.jsx(s,{"aria-label":"Fallback checkbox name","aria-labelledby":"checkbox-story-heading",label:"Release gate",description:"aria-labelledby should remain canonical."})]}),play:async({canvasElement:e})=>{const r=u(e).getByRole("checkbox",{name:"Checkbox heading"});await o(r).toHaveAttribute("aria-labelledby","checkbox-story-heading"),await o(r).not.toHaveAttribute("aria-label")}},E={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{id:"checkbox-icon-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Notification opt-in"}),a.jsx(s,{"aria-label":"Fallback notification checkbox","aria-labelledby":"checkbox-icon-heading",label:a.jsx("span",{"aria-hidden":"true",children:"🔔"}),description:"Icon-only label should still keep canonical external naming."})]}),play:async({canvasElement:e})=>{const r=u(e).getByRole("checkbox",{name:"Notification opt-in"});await o(r).toHaveAttribute("aria-labelledby","checkbox-icon-heading"),await o(r).not.toHaveAttribute("aria-label")}},C={args:{label:0,description:0},play:async({canvasElement:e})=>{const n=u(e),i=n.getByRole("checkbox").getAttribute("aria-describedby");await o(i).toBeTruthy(),await o(n.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},S={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox focus-visible state."}),a.jsx("button",{type:"button",children:"Before checkbox"}),a.jsx(s,{label:"Focus intent checkbox",description:"Keyboard re-entry should restore focus ring semantics."})]}),play:async({canvasElement:e})=>{const n=u(e),r=await n.findByRole("button",{name:"Before checkbox"}),i=n.getByRole("checkbox",{name:/^Focus intent checkbox/});await z.click(r),await z.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),je.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var U,W,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,M,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(ee=(M=f.parameters)==null?void 0:M.docs)==null?void 0:ee.source}}};var ae,te,ne;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ce,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var se,ie,le;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,be,ue;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(be=E.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var he,pe,ye;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
    await expect(describedById).toBeTruthy();
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(2);
  }
}`,...(ye=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var me,xe,ke;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ke=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};const qe=["Controlled","Indeterminate","InvalidAndDisabled","ShortcutHintPrecision","LabelledByPrecedence","IconLabelledByPrecedence","NumericContentSemantics","FocusIntentReentry"];export{v as Controlled,S as FocusIntentReentry,E as IconLabelledByPrecedence,f as Indeterminate,g as InvalidAndDisabled,B as LabelledByPrecedence,C as NumericContentSemantics,w as ShortcutHintPrecision,qe as __namedExportsOrder,ze as default};
