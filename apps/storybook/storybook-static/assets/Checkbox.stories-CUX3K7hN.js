import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{a as le}from"./a11y-CU5SQrEA.js";import{B as de}from"./Badge-ZJmMstsz.js";import{within as L,userEvent as A,expect as m}from"./index-DgAF9SIF.js";const c=o.forwardRef(function({label:t,description:n,invalid:p,indeterminate:g=!1,disabled:d,style:te,onFocus:w,onBlur:C,onMouseDown:E,onPointerDown:j,onKeyDown:S,"aria-invalid":re,"aria-label":ne,"aria-labelledby":oe,...R},u){const[T,B]=o.useState(!1),[F,b]=o.useState(!1),y=o.useRef(null),i=o.useRef(!1),z=o.useId(),H=le(p,re),N=H!==void 0,I=!!d,V=K(oe),se=V?void 0:K(ne),ce=[R["aria-describedby"],n?z:void 0].filter(Boolean).join(" ")||void 0;o.useEffect(()=>{I&&(B(!1),b(!1))},[I]),o.useEffect(()=>{var _;const e=((_=y.current)==null?void 0:_.ownerDocument)??document,q=s=>{s.metaKey||s.altKey||s.ctrlKey||(i.current=!0)},l=s=>{"button"in s&&typeof s.button=="number"&&s.button!==0||(i.current=!1)};return e.addEventListener("keydown",q,!0),e.addEventListener("pointerdown",l,!0),e.addEventListener("mousedown",l,!0),e.addEventListener("touchstart",l,!0),()=>{e.removeEventListener("keydown",q,!0),e.removeEventListener("pointerdown",l,!0),e.removeEventListener("mousedown",l,!0),e.removeEventListener("touchstart",l,!0)}},[]),o.useEffect(()=>{y.current&&(y.current.indeterminate=g)},[g]);const ie=o.useCallback(e=>{y.current=e,typeof u=="function"?u(e):u&&(u.current=e)},[u]);return a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:d?"not-allowed":"pointer",opacity:d?.75:1,...te},children:[a.jsx("input",{...R,ref:ie,type:"checkbox",disabled:d,"aria-label":se,"aria-labelledby":V,"aria-invalid":H,"aria-checked":g?"mixed":R["aria-checked"],"aria-describedby":ce,"data-focused":T?"true":void 0,"data-focus-visible":F?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:N?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:d?"not-allowed":"pointer",boxShadow:T&&F&&!I?`0 0 0 3px ${N?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:e=>{B(!0),b(ue(e.currentTarget,i.current)),w==null||w(e)},onBlur:e=>{B(!1),b(!1),C==null||C(e)},onMouseDown:e=>{e.button===0&&(i.current=!1,b(!1)),E==null||E(e)},onPointerDown:e=>{e.button===0&&(i.current=!1,b(!1)),j==null||j(e)},onKeyDown:e=>{i.current=!0,S==null||S(e)}}),t||n?a.jsxs("span",{style:{display:"grid",gap:n?2:0},children:[t?a.jsx("span",{children:t}):null,n?a.jsx("span",{id:z,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:n}):null]}):null]})});function K(r){if(typeof r!="string")return;const t=r.trim();return t.length>0?t:void 0}function ue(r,t){try{return r.matches(":focus-visible")||t}catch{return t}}c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ve={title:"Form/Checkbox",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function be(){const[r,t]=o.useState(!0);return a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),a.jsx(de,{tone:r?"success":"danger",children:r?"Enabled":"Disabled"})]}),a.jsx(c,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:r,onChange:n=>t(n.currentTarget.checked)})]})}const h={render:()=>a.jsx(be,{}),play:async({canvasElement:r})=>{const n=L(r).getByRole("checkbox",{name:"Enable AI memory"});await A.click(n),await m(n).not.toBeChecked()}},x={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},v={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[a.jsx(c,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),a.jsx(c,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})},f={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{id:"checkbox-story-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Checkbox heading"}),a.jsx(c,{"aria-label":"Fallback checkbox name","aria-labelledby":"checkbox-story-heading",label:"Release gate",description:"aria-labelledby should remain canonical."})]}),play:async({canvasElement:r})=>{const n=L(r).getByRole("checkbox",{name:"Checkbox heading"});await m(n).toHaveAttribute("aria-labelledby","checkbox-story-heading"),await m(n).not.toHaveAttribute("aria-label")}},k={render:()=>a.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores checkbox focus-visible state."}),a.jsx("button",{type:"button",children:"Before checkbox"}),a.jsx(c,{label:"Focus intent checkbox",description:"Keyboard re-entry should restore focus ring semantics."})]}),play:async({canvasElement:r})=>{const t=L(r),n=await t.findByRole("button",{name:"Before checkbox"}),p=t.getByRole("checkbox",{name:/^Focus intent checkbox/});await A.click(n),await A.tab(),await m(p).toHaveFocus(),await m(p).toHaveAttribute("data-focus-visible","true")}};var Y,O,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,P,D;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(D=(P=f.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var M,ee,ae;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(ae=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const fe=["Controlled","Indeterminate","InvalidAndDisabled","LabelledByPrecedence","FocusIntentReentry"];export{h as Controlled,k as FocusIntentReentry,x as Indeterminate,v as InvalidAndDisabled,f as LabelledByPrecedence,fe as __namedExportsOrder,ve as default};
