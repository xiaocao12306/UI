import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as j}from"./index-BWu4c2F4.js";import{I as D}from"./Input-vIzakoOT.js";import{B as I}from"./Badge-Dkm8CRgf.js";import{within as R,fireEvent as S,expect as T}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function o({value:a,defaultValue:r,onValueChange:t,invalid:d=!1,errorMessageId:x,...l}){const b=[l["aria-describedby"],d?x:void 0].filter(Boolean).join(" ")||void 0;return e.jsx(D,{...l,type:"date",value:a,defaultValue:r,"aria-describedby":b,"aria-invalid":d||void 0,onChange:w=>t==null?void 0:t(w.target.value)})}o.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Form/DatePicker",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function B(){const[a,r]=j.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected date"}),e.jsx(I,{tone:"default",children:a})]}),e.jsx(o,{"aria-label":"Release date",value:a,onValueChange:r,min:"2026-01-01",max:"2026-12-31"})]})}const n={render:()=>e.jsx(B,{}),play:async({canvasElement:a})=>{const r=R(a),t=r.getByLabelText("Release date");S.change(t,{target:{value:"2026-04-02"}}),await T(r.getByText("2026-04-02")).toBeInTheDocument()}},s={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},i={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(o,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"var(--aurora-color-red-500)",fontSize:13},children:"Release date must be in the approved launch window."})]})};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,f,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <DatePicker aria-label="Release date" defaultValue="2026-02-10" invalid aria-describedby="release-date-help" errorMessageId="release-date-error" onValueChange={() => {}} />
      <p id="release-date-help" style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Choose a date between February and December.
      </p>
      <p id="release-date-error" style={{
      margin: 0,
      color: "var(--aurora-color-red-500)",
      fontSize: 13
    }}>
        Release date must be in the approved launch window.
      </p>
    </div>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _=["Controlled","InvalidState","InvalidWithHelper"];export{n as Controlled,s as InvalidState,i as InvalidWithHelper,_ as __namedExportsOrder,z as default};
