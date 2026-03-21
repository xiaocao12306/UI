import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as W}from"./index-BWu4c2F4.js";import{I as _}from"./Input-D3M9Xqpz.js";import{a as O,m as x}from"./a11y-CU5SQrEA.js";import{B as N}from"./Badge-ZJmMstsz.js";import{within as m,expect as l,fireEvent as G}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function t({value:r,defaultValue:n,onValueChange:a,onChange:v,invalid:q,errorMessageId:y,...i}){const b=O(q,i["aria-invalid"]),g=b!==void 0,F=x(i["aria-describedby"],g?y:void 0),z=g?x(i["aria-errormessage"],y):i["aria-errormessage"];return e.jsx(_,{...i,type:"date",value:r,defaultValue:n,"aria-describedby":F,"aria-errormessage":z,"aria-invalid":b,onChange:h=>{v==null||v(h),a==null||a(h.target.value)}})}t.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"Form/DatePicker",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function J(){const[r,n]=W.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected date"}),e.jsx(N,{tone:"default",children:r})]}),e.jsx(t,{"aria-label":"Release date",value:r,onValueChange:n,min:"2026-01-01",max:"2026-12-31"})]})}const s={render:()=>e.jsx(J,{}),play:async({canvasElement:r})=>{const n=m(r),a=n.getByLabelText("Release date");G.change(a,{target:{value:"2026-04-02"}}),await l(n.getByText("2026-04-02")).toBeInTheDocument()}},d={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},o={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(t,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Release date must be in the approved launch window."})]}),play:async({canvasElement:r})=>{const a=m(r).getByLabelText("Release date");await l(a).toHaveAttribute("aria-describedby","release-date-help release-date-error"),await l(a).toHaveAttribute("aria-errormessage","release-date-error")}},c={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(t,{"aria-label":"Default date picker",defaultValue:"2026-03-17",onValueChange:()=>{}}),e.jsx(t,{"aria-label":"Invalid date picker",defaultValue:"2025-12-31",min:"2026-01-01",invalid:!0,onValueChange:()=>{}}),e.jsx(t,{"aria-label":"Read only date picker",value:"2026-07-01",readOnly:!0,onValueChange:()=>{}}),e.jsx(t,{"aria-label":"Disabled date picker",defaultValue:"2026-08-15",disabled:!0,onValueChange:()=>{}})]})},p={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"release-window-label",style:{margin:0,color:"var(--aurora-text-primary)",fontWeight:600},children:"Release window"}),e.jsx(t,{"aria-label":"   ","aria-labelledby":"release-window-label",defaultValue:"2026-11-09"})]}),play:async({canvasElement:r})=>{const a=m(r).getByLabelText("Release window");await l(a).toHaveAttribute("aria-labelledby","release-window-label"),await l(a).not.toHaveAttribute("aria-label")}},u={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("h3",{id:"release-calendar-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Release calendar"}),e.jsx(t,{"aria-label":"Release date","aria-labelledby":"release-calendar-heading",defaultValue:"2026-06-15"})]}),play:async({canvasElement:r})=>{const a=m(r).getByLabelText("Release calendar");await l(a).toHaveAttribute("aria-labelledby","release-calendar-heading"),await l(a).not.toHaveAttribute("aria-label")}};var w,f,R;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(f=s.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var k,V,j;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var D,I,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <DatePicker aria-label="Release date" defaultValue="2026-02-10" invalid aria-describedby="release-date-help" errorMessageId="release-date-error" onValueChange={() => {}} />
      <p id="release-date-help" style={{
      margin: 0,
      color: "var(--aurora-text-primary)",
      fontSize: 13
    }}>
        Choose a date between February and December.
      </p>
      <p id="release-date-error" style={{
      margin: 0,
      color: "color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",
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
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var B,A,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var H,S,C;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <p id="release-window-label" style={{
      margin: 0,
      color: "var(--aurora-text-primary)",
      fontWeight: 600
    }}>
        Release window
      </p>
      <DatePicker aria-label="   " aria-labelledby="release-window-label" defaultValue="2026-11-09" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release window");
    await expect(input).toHaveAttribute("aria-labelledby", "release-window-label");
    await expect(input).not.toHaveAttribute("aria-label");
  }
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var L,P,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <h3 id="release-calendar-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)"
    }}>
        Release calendar
      </h3>
      <DatePicker aria-label="Release date" aria-labelledby="release-calendar-heading" defaultValue="2026-06-15" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Release calendar");
    await expect(input).toHaveAttribute("aria-labelledby", "release-calendar-heading");
    await expect(input).not.toHaveAttribute("aria-label");
  }
}`,...(M=(P=u.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const ae=["Controlled","InvalidState","InvalidWithHelper","StateMatrix","BlankAriaLabelFallback","LabelledByPrecedence"];export{p as BlankAriaLabelFallback,s as Controlled,d as InvalidState,o as InvalidWithHelper,u as LabelledByPrecedence,c as StateMatrix,ae as __namedExportsOrder,ee as default};
