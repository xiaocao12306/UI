import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as j}from"./index-BWu4c2F4.js";import{r as V}from"./a11y-yJ-B0ZWx.js";import{B}from"./Badge-Dkm8CRgf.js";import{within as N,userEvent as G,expect as L}from"./index-DgAF9SIF.js";function u({name:r,value:t,defaultValue:l,options:S,onChange:d,ariaLabel:q,invalid:z,"aria-invalid":k,disabled:n=!1,direction:p="vertical"}){const[C,T]=j.useState(l),E=t??C,c=V(z,k),A=(e,I)=>{n||I||(t===void 0&&T(e),d==null||d(e))};return a.jsx("div",{style:{display:p==="horizontal"?"flex":"grid",gap:8,alignItems:p==="horizontal"?"center":void 0},role:"radiogroup","aria-label":q??r,"aria-invalid":c||void 0,children:S.map(e=>a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:n||e.disabled?.7:1,cursor:n||e.disabled?"not-allowed":"pointer"},children:[a.jsx("input",{type:"radio",name:r,value:e.value,checked:E===e.value,disabled:n||e.disabled,"aria-invalid":c||void 0,onChange:()=>A(e.value,e.disabled),style:{marginTop:2,accentColor:c?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:n||e.disabled?"not-allowed":"pointer"}}),a.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[a.jsx("span",{children:e.label}),e.description?a.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},e.value))})}u.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const w=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],J={title:"Form/RadioGroup",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:w}};function O(){const[r,t]=j.useState("m");return a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),a.jsx(B,{children:r})]}),a.jsx(u,{name:"Size selection",value:r,onChange:t,options:w})]})}const i={render:()=>a.jsx(O,{}),play:async({canvasElement:r})=>{const l=N(r).getByRole("radio",{name:/Large/i});await G.click(l),await L(l).toBeChecked()}},s={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},o={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}};var m,v,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ControlledRadioGroup />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const large = canvas.getByRole("radio", {
      name: /Large/i
    });
    await userEvent.click(large);
    await expect(large).toBeChecked();
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: "Approval",
    invalid: true,
    options: [{
      label: "Approved",
      value: "approved"
    }, {
      label: "Rejected",
      value: "rejected"
    }]
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,R,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: "Release track",
    defaultValue: "stable",
    options: [{
      label: "Stable",
      value: "stable"
    }, {
      label: "Canary",
      value: "canary",
      disabled: true
    }, {
      label: "Experimental",
      value: "experimental"
    }]
  }
}`,...(h=(R=o.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};const K=["Controlled","InvalidState","DisabledOption"];export{i as Controlled,o as DisabledOption,s as InvalidState,K as __namedExportsOrder,J as default};
