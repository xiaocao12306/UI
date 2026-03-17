import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-BWu4c2F4.js";import{r as _}from"./a11y-DazNkYNk.js";import{B as D}from"./Badge-Dkm8CRgf.js";import{within as Y,userEvent as O,expect as P}from"./index-DgAF9SIF.js";const c=t.forwardRef(function({label:s,description:a,invalid:z,indeterminate:p=!1,disabled:i,style:A,onFocus:u,onBlur:b,"aria-invalid":B,...x},o){const[f,v]=t.useState(!1),y=t.useRef(null),g=t.useId(),h=_(z,B),N=[x["aria-describedby"],a?g:void 0].filter(Boolean).join(" ")||void 0;t.useEffect(()=>{y.current&&(y.current.indeterminate=p)},[p]);const q=t.useCallback(r=>{y.current=r,typeof o=="function"?o(r):o&&(o.current=r)},[o]);return e.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:10,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",cursor:i?"not-allowed":"pointer",opacity:i?.75:1,...A},children:[e.jsx("input",{...x,ref:q,type:"checkbox",disabled:i,"aria-invalid":h||void 0,"aria-checked":p?"mixed":x["aria-checked"],"aria-describedby":N,"data-focused":f?"true":void 0,style:{margin:"2px 0 0",width:16,height:16,accentColor:h?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:i?"not-allowed":"pointer",boxShadow:f?`0 0 0 3px ${h?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)"}`:"none"},onFocus:r=>{v(!0),u==null||u(r)},onBlur:r=>{v(!1),b==null||b(r)}}),s||a?e.jsxs("span",{style:{display:"grid",gap:a?2:0},children:[s?e.jsx("span",{children:s}):null,a?e.jsx("span",{id:g,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}):null]}):null]})});c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const L={title:"Form/Checkbox",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Checkbox supports label/description narration, indeterminate state, and invalid/disabled visual semantics."}}}};function V(){const[n,s]=t.useState(!0);return e.jsxs("div",{style:{width:320,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current state"}),e.jsx(D,{tone:n?"success":"danger",children:n?"Enabled":"Disabled"})]}),e.jsx(c,{"aria-label":"Enable AI memory",label:"Enable AI memory",description:"Persist short-term context between prompts.",checked:n,onChange:a=>s(a.currentTarget.checked)})]})}const l={render:()=>e.jsx(V,{}),play:async({canvasElement:n})=>{const a=Y(n).getByRole("checkbox",{name:"Enable AI memory"});await O.click(a),await P(a).not.toBeChecked()}},d={args:{"aria-label":"Select all rows",label:"Select all rows",description:"Some rows are already selected.",indeterminate:!0}},m={render:()=>e.jsxs("div",{style:{width:320,display:"grid",gap:14},children:[e.jsx(c,{"aria-label":"Terms agreement",label:"Terms agreement",description:"You must accept terms before continuing.",invalid:!0}),e.jsx(c,{"aria-label":"System lock",label:"System lock",description:"Controlled by organization policy.",disabled:!0,defaultChecked:!0})]})};var k,C,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,j,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select all rows",
    label: "Select all rows",
    description: "Some rows are already selected.",
    indeterminate: true
  }
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var E,R,T;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: "grid",
    gap: 14
  }}>
      <Checkbox aria-label="Terms agreement" label="Terms agreement" description="You must accept terms before continuing." invalid />
      <Checkbox aria-label="System lock" label="System lock" description="Controlled by organization policy." disabled defaultChecked />
    </div>
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const M=["Controlled","Indeterminate","InvalidAndDisabled"];export{l as Controlled,d as Indeterminate,m as InvalidAndDisabled,M as __namedExportsOrder,L as default};
