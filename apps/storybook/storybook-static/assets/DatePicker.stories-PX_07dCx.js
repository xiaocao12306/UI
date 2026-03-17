import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as R}from"./index-BWu4c2F4.js";import{I as S}from"./Input-DFzLAeTZ.js";import{r as T}from"./a11y-H6OEtEva.js";import{B as E}from"./Badge-Dkm8CRgf.js";import{within as B,fireEvent as P,expect as M}from"./index-DgAF9SIF.js";function a({value:r,defaultValue:t,onValueChange:n,onChange:o,invalid:w,errorMessageId:I,...c}){const u=T(w,c["aria-invalid"]),C=[c["aria-describedby"],u?I:void 0].filter(Boolean).join(" ")||void 0;return e.jsx(S,{...c,type:"date",value:r,defaultValue:t,"aria-describedby":C,"aria-invalid":u||void 0,onChange:p=>{o==null||o(p),n==null||n(p.target.value)}})}a.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Form/DatePicker",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function q(){const[r,t]=R.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected date"}),e.jsx(E,{tone:"default",children:r})]}),e.jsx(a,{"aria-label":"Release date",value:r,onValueChange:t,min:"2026-01-01",max:"2026-12-31"})]})}const i={render:()=>e.jsx(q,{}),play:async({canvasElement:r})=>{const t=B(r),n=t.getByLabelText("Release date");P.change(n,{target:{value:"2026-04-02"}}),await M(t.getByText("2026-04-02")).toBeInTheDocument()}},l={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},s={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(a,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"var(--aurora-color-red-500)",fontSize:13},children:"Release date must be in the approved launch window."})]})},d={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(a,{"aria-label":"Default date picker",defaultValue:"2026-03-17",onValueChange:()=>{}}),e.jsx(a,{"aria-label":"Invalid date picker",defaultValue:"2025-12-31",min:"2026-01-01",invalid:!0,onValueChange:()=>{}}),e.jsx(a,{"aria-label":"Read only date picker",value:"2026-07-01",readOnly:!0,onValueChange:()=>{}}),e.jsx(a,{"aria-label":"Disabled date picker",defaultValue:"2026-08-15",disabled:!0,onValueChange:()=>{}})]})};var m,v,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,h,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,x,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var V,k,j;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <DatePicker aria-label="Default date picker" defaultValue="2026-03-17" onValueChange={() => {}} />
      <DatePicker aria-label="Invalid date picker" defaultValue="2025-12-31" min="2026-01-01" invalid onValueChange={() => {}} />
      <DatePicker aria-label="Read only date picker" value="2026-07-01" readOnly onValueChange={() => {}} />
      <DatePicker aria-label="Disabled date picker" defaultValue="2026-08-15" disabled onValueChange={() => {}} />
    </div>
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const A=["Controlled","InvalidState","InvalidWithHelper","StateMatrix"];export{i as Controlled,l as InvalidState,s as InvalidWithHelper,d as StateMatrix,A as __namedExportsOrder,W as default};
