import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as J}from"./index-BWu4c2F4.js";import{I as K}from"./Input-o58Aer5Z.js";import{a as Q,m as x}from"./a11y-CU5SQrEA.js";import{B as U}from"./Badge-ZJmMstsz.js";import{within as d,expect as i,fireEvent as X,userEvent as f}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function n({value:t,defaultValue:r,onValueChange:a,onChange:l,invalid:O,errorMessageId:m,...s}){const g=Q(O,s["aria-invalid"]),h=g!==void 0,N=x(s["aria-describedby"],h?m:void 0),G=h?x(s["aria-errormessage"],m):s["aria-errormessage"];return e.jsx(K,{...s,type:"date",value:t,defaultValue:r,"aria-describedby":N,"aria-errormessage":G,"aria-invalid":g,onChange:w=>{l==null||l(w),a==null||a(w.target.value)}})}n.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const ie={title:"Form/DatePicker",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function Y(){const[t,r]=J.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected date"}),e.jsx(U,{tone:"default",children:t})]}),e.jsx(n,{"aria-label":"Release date",value:t,onValueChange:r,min:"2026-01-01",max:"2026-12-31"})]})}const o={render:()=>e.jsx(Y,{}),play:async({canvasElement:t})=>{const r=d(t),a=r.getByLabelText("Release date");X.change(a,{target:{value:"2026-04-02"}}),await i(r.getByText("2026-04-02")).toBeInTheDocument()}},c={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},u={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(n,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Release date must be in the approved launch window."})]}),play:async({canvasElement:t})=>{const a=d(t).getByLabelText("Release date");await i(a).toHaveAttribute("aria-describedby","release-date-help release-date-error"),await i(a).toHaveAttribute("aria-errormessage","release-date-error")}},p={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(n,{"aria-label":"Default date picker",defaultValue:"2026-03-17",onValueChange:()=>{}}),e.jsx(n,{"aria-label":"Invalid date picker",defaultValue:"2025-12-31",min:"2026-01-01",invalid:!0,onValueChange:()=>{}}),e.jsx(n,{"aria-label":"Read only date picker",value:"2026-07-01",readOnly:!0,onValueChange:()=>{}}),e.jsx(n,{"aria-label":"Disabled date picker",defaultValue:"2026-08-15",disabled:!0,onValueChange:()=>{}})]})},v={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"release-window-label",style:{margin:0,color:"var(--aurora-text-primary)",fontWeight:600},children:"Release window"}),e.jsx(n,{"aria-label":"   ","aria-labelledby":"release-window-label",defaultValue:"2026-11-09"})]}),play:async({canvasElement:t})=>{const a=d(t).getByLabelText("Release window");await i(a).toHaveAttribute("aria-labelledby","release-window-label"),await i(a).not.toHaveAttribute("aria-label")}},y={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("h3",{id:"release-calendar-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Release calendar"}),e.jsx(n,{"aria-label":"Release date","aria-labelledby":"release-calendar-heading",defaultValue:"2026-06-15"})]}),play:async({canvasElement:t})=>{const a=d(t).getByLabelText("Release calendar");await i(a).toHaveAttribute("aria-labelledby","release-calendar-heading"),await i(a).not.toHaveAttribute("aria-label")}},b={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores date input focus-visible state."}),e.jsx("button",{type:"button",children:"Before date input"}),e.jsx(n,{"aria-label":"Focus intent date",defaultValue:"2026-08-15",onValueChange:()=>{}})]}),play:async({canvasElement:t})=>{const r=d(t),a=await r.findByRole("button",{name:"Before date input"}),l=r.getByLabelText("Focus intent date");await f.click(a),await f.tab(),await i(l).toHaveFocus(),await i(l).toHaveAttribute("data-focus-visible","true")}};var k,R,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(R=o.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var V,j,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,T,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(T=u.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var I,A,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var S,L,F;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(L=v.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var P,M,q;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var z,W,_;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores date input
        focus-visible state.
      </p>
      <button type="button">Before date input</button>
      <DatePicker aria-label="Focus intent date" defaultValue="2026-08-15" onValueChange={() => {}} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before date input"
    });
    const input = canvas.getByLabelText("Focus intent date");
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(_=(W=b.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const le=["Controlled","InvalidState","InvalidWithHelper","StateMatrix","BlankAriaLabelFallback","LabelledByPrecedence","FocusIntentReentry"];export{v as BlankAriaLabelFallback,o as Controlled,b as FocusIntentReentry,c as InvalidState,u as InvalidWithHelper,y as LabelledByPrecedence,p as StateMatrix,le as __namedExportsOrder,ie as default};
