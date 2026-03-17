import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{I as y}from"./Input-vIzakoOT.js";import{B as x}from"./Badge-Dkm8CRgf.js";import{within as h,fireEvent as D,expect as T}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function o({value:a,defaultValue:t,onValueChange:n,invalid:m=!1,...g}){return e.jsx(y,{...g,type:"date",value:a,defaultValue:t,"aria-invalid":m||void 0,onChange:v=>n==null?void 0:n(v.target.value)})}o.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const R={title:"Form/DatePicker",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function j(){const[a,t]=f.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected date"}),e.jsx(x,{tone:"default",children:a})]}),e.jsx(o,{"aria-label":"Release date",value:a,onValueChange:t,min:"2026-01-01",max:"2026-12-31"})]})}const r={render:()=>e.jsx(j,{}),play:async({canvasElement:a})=>{const t=h(a),n=t.getByLabelText("Release date");D.change(n,{target:{value:"2026-04-02"}}),await T(t.getByText("2026-04-02")).toBeInTheDocument()}},s={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ControlledDatePickerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release date");
    fireEvent.change(input, {
      target: {
        value: "2026-04-02"
      }
    });
    await expect(canvas.getByText("2026-04-02")).toBeInTheDocument();
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["Controlled","InvalidState"];export{r as Controlled,s as InvalidState,P as __namedExportsOrder,R as default};
