import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{a as ye}from"./a11y-CU5SQrEA.js";import{B as xe}from"./Badge-ZJmMstsz.js";import{within as S,userEvent as T,expect as i,fireEvent as ke}from"./index-DgAF9SIF.js";const o=c.forwardRef(function({label:r,description:n,invalid:l,indeterminate:C=!1,disabled:b,style:se,onFocus:E,onBlur:B,onMouseDown:j,onPointerDown:R,onKeyDown:A,"aria-invalid":ie,"aria-label":le,"aria-labelledby":de,"aria-keyshortcuts":ue,...I},h){const[F,H]=c.useState(!1),[K,p]=c.useState(!1),m=c.useRef(null),d=c.useRef(!1),z=c.useId(),N=ye(l,ie),V=N!==void 0,y=!!b,q=L(de),be=q?void 0:L(le),he=y?void 0:L(ue)??"Space",pe=[I["aria-describedby"],n?z:void 0].filter(Boolean).join(" ")||void 0;c.useEffect(()=>{y&&(H(!1),p(!1))},[y]),c.useEffect(()=>{var P;const e=((P=m.current)==null?void 0:P.ownerDocument)??document,_=s=>{s.metaKey||s.altKey||s.ctrlKey||(d.current=!0)},u=s=>{"button"in s&&!Y(s.button)||"ctrlKey"in s&&s.ctrlKey||(d.current=!1)};return e.addEventListener("keydown",_,!0),e.addEventListener("pointerdown",u,!0),e.addEventListener("mousedown",u,!0),e.addEventListener("touchstart",u,!0),()=>{e.removeEventListener("keydown",_,!0),e.removeEventListener("pointerdown",u,!0),e.removeEventListener("mousedown",u,!0),e.removeEventListener("touchstart",u,!0)}},[]),c.useEffect(()=>{m.current&&(m.current.indeterminate=C)},[C]);const me=c.useCallback(e=>{m.current=e,typeof h=="function"?h(e):h&&(h.current=e)},[h]);return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:b?"not-allowed":"pointer",opacity:b?.75:1,...se},children:[t.jsx("input",{...I,ref:me,type:"checkbox",disabled:b,"aria-label":be,"aria-labelledby":q,"aria-invalid":N,"aria-checked":C?"mixed":I["aria-checked"],"aria-describedby":pe,"aria-keyshortcuts":he,"data-focused":F?"true":void 0,"data-focus-visible":K?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:V?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:b?"not-allowed":"pointer",boxShadow:F&&K&&!y?`0 0 0 3px ${V?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:e=>{H(!0),p(ve(e.currentTarget,d.current)),E==null||E(e)},onBlur:e=>{H(!1),p(!1),B==null||B(e)},onMouseDown:e=>{e.button===0&&!e.ctrlKey&&(d.current=!1,p(!1)),j==null||j(e)},onPointerDown:e=>{Y(e.button)&&!e.ctrlKey&&(d.current=!1,p(!1)),R==null||R(e)},onKeyDown:e=>{d.current=!0,A==null||A(e)}}),r||n?t.jsxs("span",{style:{display:"grid",gap:n?2:0},children:[r?t.jsx("span",{children:r}):null,n?t.jsx("span",{id:z,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:n}):null]}):null]})});function L(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function ve(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}function Y(a){return typeof a!="number"||a<=0}o.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Be={title:"Form/Checkbox",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function fe(){const[a,r]=c.useState(!0);return t.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),t.jsx(xe,{tone:a?"success":"danger",children:a?"Enabled":"Disabled"})]}),t.jsx(o,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:a,onChange:n=>r(n.currentTarget.checked)})]})}const x={render:()=>t.jsx(fe,{}),play:async({canvasElement:a})=>{const n=S(a).getByRole("checkbox",{name:"Enable AI memory"});await T.click(n),await i(n).not.toBeChecked()}},k={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},v={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[t.jsx(o,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),t.jsx(o,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})},f={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[t.jsx(o,{label:"Shortcut metadata checkbox",description:"Actionable checkboxes should expose Space shortcut hints."}),t.jsx(o,{label:"Blocked shortcut metadata checkbox",description:"Disabled checkboxes should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:a})=>{const r=S(a);await i(r.getByRole("checkbox",{name:/^Shortcut metadata checkbox/})).toHaveAttribute("aria-keyshortcuts","Space"),await i(r.getByRole("checkbox",{name:/^Blocked shortcut metadata checkbox/})).not.toHaveAttribute("aria-keyshortcuts")}},g={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[t.jsx("p",{id:"checkbox-story-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Checkbox heading"}),t.jsx(o,{"aria-label":"Fallback checkbox name","aria-labelledby":"checkbox-story-heading",label:"Release gate",description:"aria-labelledby should remain canonical."})]}),play:async({canvasElement:a})=>{const n=S(a).getByRole("checkbox",{name:"Checkbox heading"});await i(n).toHaveAttribute("aria-labelledby","checkbox-story-heading"),await i(n).not.toHaveAttribute("aria-label")}},w={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox focus-visible state."}),t.jsx("button",{type:"button",children:"Before checkbox"}),t.jsx(o,{label:"Focus intent checkbox",description:"Keyboard re-entry should restore focus ring semantics."})]}),play:async({canvasElement:a})=>{const r=S(a),n=await r.findByRole("button",{name:"Before checkbox"}),l=r.getByRole("checkbox",{name:/^Focus intent checkbox/});await T.click(n),await T.tab(),await i(l).toHaveFocus(),await i(l).toHaveAttribute("data-focus-visible","true"),ke.mouseDown(l,{button:0,ctrlKey:!0}),await i(l).toHaveAttribute("data-focus-visible","true")}};var D,O,$;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(O=x.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var G,J,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,M,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(M=f.parameters)==null?void 0:M.docs)==null?void 0:ee.source}}};var te,ae,re;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,ce,oe;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};const je=["Controlled","Indeterminate","InvalidAndDisabled","ShortcutHintPrecision","LabelledByPrecedence","FocusIntentReentry"];export{x as Controlled,w as FocusIntentReentry,k as Indeterminate,v as InvalidAndDisabled,g as LabelledByPrecedence,f as ShortcutHintPrecision,je as __namedExportsOrder,Be as default};
