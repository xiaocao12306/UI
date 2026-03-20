import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-BWu4c2F4.js";import{a as N}from"./a11y-CU5SQrEA.js";import{B as G}from"./Badge-ZJmMstsz.js";import{within as O,userEvent as _,expect as L}from"./index-DgAF9SIF.js";function u({name:r,value:t,defaultValue:l,options:q,onChange:d,ariaLabel:c,invalid:z,"aria-invalid":A,disabled:n=!1,direction:p="vertical"}){const[k,C]=w.useState(l),T=t??k,m=N(z,A),E=m!==void 0,I=typeof c=="string"&&c.trim().length>0?c.trim():void 0,V=(e,B)=>{n||B||(t===void 0&&C(e),d==null||d(e))};return a.jsx("div",{style:{display:p==="horizontal"?"flex":"grid",gap:8,alignItems:p==="horizontal"?"center":void 0},role:"radiogroup","aria-label":I??r,"aria-invalid":m,children:q.map(e=>a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:n||e.disabled?.7:1,cursor:n||e.disabled?"not-allowed":"pointer"},children:[a.jsx("input",{type:"radio",name:r,value:e.value,checked:T===e.value,disabled:n||e.disabled,onChange:()=>V(e.value,e.disabled),style:{marginTop:2,accentColor:E?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:n||e.disabled?"not-allowed":"pointer"}}),a.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[a.jsx("span",{children:e.label}),e.description?a.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},e.value))})}u.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const S=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],P={title:"Form/RadioGroup",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:S}};function D(){const[r,t]=w.useState("m");return a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),a.jsx(G,{children:r})]}),a.jsx(u,{name:"Size selection",value:r,onChange:t,options:S})]})}const s={render:()=>a.jsx(D,{}),play:async({canvasElement:r})=>{const l=O(r).getByRole("radio",{name:/Large/i});await _.click(l),await L(l).toBeChecked()}},i={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},o={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}};var v,y,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var R,h,j;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const Q=["Controlled","InvalidState","DisabledOption"];export{s as Controlled,o as DisabledOption,i as InvalidState,Q as __namedExportsOrder,P as default};
