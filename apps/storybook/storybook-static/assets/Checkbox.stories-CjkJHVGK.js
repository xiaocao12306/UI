import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{a as me}from"./a11y-CU5SQrEA.js";import{B as ye}from"./Badge-ZJmMstsz.js";import{within as S,userEvent as T,expect as i}from"./index-DgAF9SIF.js";const s=c.forwardRef(function({label:a,description:n,invalid:p,indeterminate:C=!1,disabled:u,style:oe,onFocus:E,onBlur:B,onMouseDown:j,onPointerDown:R,onKeyDown:I,"aria-invalid":se,"aria-label":ie,"aria-labelledby":le,"aria-keyshortcuts":de,...A},b){const[F,H]=c.useState(!1),[z,h]=c.useState(!1),m=c.useRef(null),l=c.useRef(!1),K=c.useId(),N=me(p,se),V=N!==void 0,y=!!u,q=L(le),ue=q?void 0:L(ie),be=y?void 0:L(de)??"Space",he=[A["aria-describedby"],n?K:void 0].filter(Boolean).join(" ")||void 0;c.useEffect(()=>{y&&(H(!1),h(!1))},[y]),c.useEffect(()=>{var Y;const e=((Y=m.current)==null?void 0:Y.ownerDocument)??document,_=o=>{o.metaKey||o.altKey||o.ctrlKey||(l.current=!0)},d=o=>{"button"in o&&typeof o.button=="number"&&o.button!==0||"ctrlKey"in o&&o.ctrlKey||(l.current=!1)};return e.addEventListener("keydown",_,!0),e.addEventListener("pointerdown",d,!0),e.addEventListener("mousedown",d,!0),e.addEventListener("touchstart",d,!0),()=>{e.removeEventListener("keydown",_,!0),e.removeEventListener("pointerdown",d,!0),e.removeEventListener("mousedown",d,!0),e.removeEventListener("touchstart",d,!0)}},[]),c.useEffect(()=>{m.current&&(m.current.indeterminate=C)},[C]);const pe=c.useCallback(e=>{m.current=e,typeof b=="function"?b(e):b&&(b.current=e)},[b]);return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:u?"not-allowed":"pointer",opacity:u?.75:1,...oe},children:[t.jsx("input",{...A,ref:pe,type:"checkbox",disabled:u,"aria-label":ue,"aria-labelledby":q,"aria-invalid":N,"aria-checked":C?"mixed":A["aria-checked"],"aria-describedby":he,"aria-keyshortcuts":be,"data-focused":F?"true":void 0,"data-focus-visible":z?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:V?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:u?"not-allowed":"pointer",boxShadow:F&&z&&!y?`0 0 0 3px ${V?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:e=>{H(!0),h(xe(e.currentTarget,l.current)),E==null||E(e)},onBlur:e=>{H(!1),h(!1),B==null||B(e)},onMouseDown:e=>{e.button===0&&(l.current=!1,h(!1)),j==null||j(e)},onPointerDown:e=>{e.button===0&&(l.current=!1,h(!1)),R==null||R(e)},onKeyDown:e=>{l.current=!0,I==null||I(e)}}),a||n?t.jsxs("span",{style:{display:"grid",gap:n?2:0},children:[a?t.jsx("span",{children:a}):null,n?t.jsx("span",{id:K,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:n}):null]}):null]})});function L(r){if(typeof r!="string")return;const a=r.trim();return a.length>0?a:void 0}function xe(r,a){try{return r.matches(":focus-visible")||a}catch{return a}}s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ce={title:"Form/Checkbox",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function ke(){const[r,a]=c.useState(!0);return t.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),t.jsx(ye,{tone:r?"success":"danger",children:r?"Enabled":"Disabled"})]}),t.jsx(s,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:r,onChange:n=>a(n.currentTarget.checked)})]})}const x={render:()=>t.jsx(ke,{}),play:async({canvasElement:r})=>{const n=S(r).getByRole("checkbox",{name:"Enable AI memory"});await T.click(n),await i(n).not.toBeChecked()}},k={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},v={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[t.jsx(s,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),t.jsx(s,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})},f={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[t.jsx(s,{label:"Shortcut metadata checkbox",description:"Actionable checkboxes should expose Space shortcut hints."}),t.jsx(s,{label:"Blocked shortcut metadata checkbox",description:"Disabled checkboxes should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:r})=>{const a=S(r);await i(a.getByRole("checkbox",{name:/^Shortcut metadata checkbox/})).toHaveAttribute("aria-keyshortcuts","Space"),await i(a.getByRole("checkbox",{name:/^Blocked shortcut metadata checkbox/})).not.toHaveAttribute("aria-keyshortcuts")}},g={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[t.jsx("p",{id:"checkbox-story-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Checkbox heading"}),t.jsx(s,{"aria-label":"Fallback checkbox name","aria-labelledby":"checkbox-story-heading",label:"Release gate",description:"aria-labelledby should remain canonical."})]}),play:async({canvasElement:r})=>{const n=S(r).getByRole("checkbox",{name:"Checkbox heading"});await i(n).toHaveAttribute("aria-labelledby","checkbox-story-heading"),await i(n).not.toHaveAttribute("aria-label")}},w={render:()=>t.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox focus-visible state."}),t.jsx("button",{type:"button",children:"Before checkbox"}),t.jsx(s,{label:"Focus intent checkbox",description:"Keyboard re-entry should restore focus ring semantics."})]}),play:async({canvasElement:r})=>{const a=S(r),n=await a.findByRole("button",{name:"Before checkbox"}),p=a.getByRole("checkbox",{name:/^Focus intent checkbox/});await T.click(n),await T.tab(),await i(p).toHaveFocus(),await i(p).toHaveAttribute("data-focus-visible","true")}};var O,P,$;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(P=x.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var G,J,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,D,M;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(M=(D=f.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var ee,te,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,ce;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
  }
}`,...(ce=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};const Ee=["Controlled","Indeterminate","InvalidAndDisabled","ShortcutHintPrecision","LabelledByPrecedence","FocusIntentReentry"];export{x as Controlled,w as FocusIntentReentry,k as Indeterminate,v as InvalidAndDisabled,g as LabelledByPrecedence,f as ShortcutHintPrecision,Ee as __namedExportsOrder,Ce as default};
