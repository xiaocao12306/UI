import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as L}from"./index-BWu4c2F4.js";import{a as M}from"./a11y-CU5SQrEA.js";import{B as J}from"./Badge-ZJmMstsz.js";import{within as E,userEvent as K,expect as m}from"./index-DgAF9SIF.js";function c({name:r,value:n,defaultValue:t,options:T,onChange:p,ariaLabel:C,ariaLabelledBy:V,invalid:I,"aria-invalid":N,disabled:l=!1,direction:y="vertical"}){const[G,H]=L.useState(t),O=n??G,g=M(I,N),_=g!==void 0,u=b(V),D=u?void 0:b(C),P=(e,F)=>{l||F||(n===void 0&&H(e),p==null||p(e))};return a.jsx("div",{style:{display:y==="horizontal"?"flex":"grid",gap:8,alignItems:y==="horizontal"?"center":void 0},role:"radiogroup","aria-label":u?void 0:D??r,"aria-labelledby":u,"aria-invalid":g,children:T.map(e=>a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:l||e.disabled?.7:1,cursor:l||e.disabled?"not-allowed":"pointer"},children:[a.jsx("input",{type:"radio",name:r,value:e.value,checked:O===e.value,disabled:l||e.disabled,onChange:()=>P(e.value,e.disabled),style:{marginTop:2,accentColor:_?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:l||e.disabled?"not-allowed":"pointer"}}),a.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[a.jsx("span",{children:e.label}),e.description?a.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},e.value))})}function b(r){if(typeof r!="string")return;const n=r.trim();return n.length>0?n:void 0}c.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const v=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],$={title:"Form/RadioGroup",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:v}};function Q(){const[r,n]=L.useState("m");return a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),a.jsx(J,{children:r})]}),a.jsx(c,{name:"Size selection",value:r,onChange:n,options:v})]})}const i={render:()=>a.jsx(Q,{}),play:async({canvasElement:r})=>{const t=E(r).getByRole("radio",{name:/Large/i});await K.click(t),await m(t).toBeChecked()}},s={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},o={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},d={render:()=>a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),a.jsx(c,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:v})]}),play:async({canvasElement:r})=>{const t=E(r).getByRole("radiogroup",{name:"Release preference heading"});await m(t).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await m(t).not.toHaveAttribute("aria-label")}};var f,x,R;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var h,w,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var A,S,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var q,B,z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 12
  }}>
      <p id="radiogroup-story-heading" style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Release preference heading
      </p>
      <RadioGroup name="Release preference fallback" ariaLabel="Release preference fallback label" ariaLabelledBy="radiogroup-story-heading" defaultValue="m" options={options} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", {
      name: "Release preference heading"
    });
    await expect(group).toHaveAttribute("aria-labelledby", "radiogroup-story-heading");
    await expect(group).not.toHaveAttribute("aria-label");
  }
}`,...(z=(B=d.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};const ee=["Controlled","InvalidState","DisabledOption","LabelledByPrecedence"];export{i as Controlled,o as DisabledOption,s as InvalidState,d as LabelledByPrecedence,ee as __namedExportsOrder,$ as default};
