import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as H}from"./index-BWu4c2F4.js";import{I as A}from"./Input-B0g8SV4q.js";import{a as M,m as y}from"./a11y-CU5SQrEA.js";import{B as P}from"./Badge-Dkm8CRgf.js";import{within as C,fireEvent as q,expect as u}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function t({value:a,defaultValue:n,onValueChange:r,onChange:c,invalid:E,errorMessageId:p,...i}){const m=M(E,i["aria-invalid"]),v=m!==void 0,S=y(i["aria-describedby"],v?p:void 0),B=v?y(i["aria-errormessage"],p):i["aria-errormessage"];return e.jsx(A,{...i,type:"date",value:a,defaultValue:n,"aria-describedby":S,"aria-errormessage":B,"aria-invalid":m,onChange:g=>{c==null||c(g),r==null||r(g.target.value)}})}t.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Form/DatePicker",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function L(){const[a,n]=H.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected date"}),e.jsx(P,{tone:"default",children:a})]}),e.jsx(t,{"aria-label":"Release date",value:a,onValueChange:n,min:"2026-01-01",max:"2026-12-31"})]})}const s={render:()=>e.jsx(L,{}),play:async({canvasElement:a})=>{const n=C(a),r=n.getByLabelText("Release date");q.change(r,{target:{value:"2026-04-02"}}),await u(n.getByText("2026-04-02")).toBeInTheDocument()}},l={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},d={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(t,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"var(--aurora-color-red-500)",fontSize:13},children:"Release date must be in the approved launch window."})]}),play:async({canvasElement:a})=>{const r=C(a).getByLabelText("Release date");await u(r).toHaveAttribute("aria-describedby","release-date-help release-date-error"),await u(r).toHaveAttribute("aria-errormessage","release-date-error")}},o={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(t,{"aria-label":"Default date picker",defaultValue:"2026-03-17",onValueChange:()=>{}}),e.jsx(t,{"aria-label":"Invalid date picker",defaultValue:"2025-12-31",min:"2026-01-01",invalid:!0,onValueChange:()=>{}}),e.jsx(t,{"aria-label":"Read only date picker",value:"2026-07-01",readOnly:!0,onValueChange:()=>{}}),e.jsx(t,{"aria-label":"Disabled date picker",defaultValue:"2026-08-15",disabled:!0,onValueChange:()=>{}})]})};var b,h,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,w,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var V,k,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release date");
    await expect(input).toHaveAttribute("aria-describedby", "release-date-help release-date-error");
    await expect(input).toHaveAttribute("aria-errormessage", "release-date-error");
  }
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var j,R,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const K=["Controlled","InvalidState","InvalidWithHelper","StateMatrix"];export{s as Controlled,l as InvalidState,d as InvalidWithHelper,o as StateMatrix,K as __namedExportsOrder,J as default};
