import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as le}from"./index-BWu4c2F4.js";import{I as se}from"./Input-B9xcXif8.js";import{a as oe,m as D}from"./a11y-CU5SQrEA.js";import{B as de}from"./Badge-ZJmMstsz.js";import{within as s,expect as n,fireEvent as $,userEvent as V}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function i({value:a,defaultValue:r,onValueChange:t,onChange:l,invalid:ee,errorMessageId:h,"aria-label":ae,"aria-labelledby":te,...o}){const w=oe(ee,o["aria-invalid"]),x=w!==void 0,re=D(o["aria-describedby"],x?h:void 0),ne=x?D(o["aria-errormessage"],h):o["aria-errormessage"],f=B(te),ie=f===void 0?B(ae,"Date picker"):void 0;return e.jsx(se,{...o,type:"date",value:a,defaultValue:r,"aria-label":ie,"aria-labelledby":f,"aria-describedby":re,"aria-errormessage":ne,"aria-invalid":w,onChange:k=>{l==null||l(k),t==null||t(k.target.value)}})}function B(a,r){return typeof a=="string"&&a.trim().length>0?a.trim():r}i.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const he={title:"Form/DatePicker",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function ce(){const[a,r]=le.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected date"}),e.jsx(de,{tone:"default",children:a})]}),e.jsx(i,{"aria-label":"Release date",value:a,onValueChange:r,min:"2026-01-01",max:"2026-12-31"})]})}const d={render:()=>e.jsx(ce,{}),play:async({canvasElement:a})=>{const r=s(a),t=r.getByLabelText("Release date");$.change(t,{target:{value:"2026-04-02"}}),await n(r.getByText("2026-04-02")).toBeInTheDocument()}},c={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},u={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(i,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Release date must be in the approved launch window."})]}),play:async({canvasElement:a})=>{const t=s(a).getByLabelText("Release date");await n(t).toHaveAttribute("aria-describedby","release-date-help release-date-error"),await n(t).toHaveAttribute("aria-errormessage","release-date-error")}},p={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(i,{"aria-label":"Default date picker",defaultValue:"2026-03-17",onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Invalid date picker",defaultValue:"2025-12-31",min:"2026-01-01",invalid:!0,onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Read only date picker",value:"2026-07-01",readOnly:!0,onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Disabled date picker",defaultValue:"2026-08-15",disabled:!0,onValueChange:()=>{}})]})},b={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(i,{"aria-label":"Date shortcut hint input",defaultValue:"2026-08-15",onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Date shortcut custom input","aria-keyshortcuts":"Enter",defaultValue:"2026-08-16",onValueChange:()=>{}})]}),play:async({canvasElement:a})=>{const r=s(a);await n(r.getByLabelText("Date shortcut hint input")).not.toHaveAttribute("aria-keyshortcuts"),await n(r.getByLabelText("Date shortcut custom input")).toHaveAttribute("aria-keyshortcuts","Enter")}},v={args:{"aria-label":"   ",defaultValue:"2026-10-08"},play:async({canvasElement:a})=>{const t=s(a).getByLabelText("Date picker");await n(t).toHaveAttribute("aria-label","Date picker"),await n(t).not.toHaveAttribute("aria-labelledby")}},y={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"release-window-label",style:{margin:0,color:"var(--aurora-text-primary)",fontWeight:600},children:"Release window"}),e.jsx(i,{"aria-label":"   ","aria-labelledby":"release-window-label",defaultValue:"2026-11-09"})]}),play:async({canvasElement:a})=>{const t=s(a).getByLabelText("Release window");await n(t).toHaveAttribute("aria-labelledby","release-window-label"),await n(t).not.toHaveAttribute("aria-label")}},m={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("h3",{id:"release-calendar-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Release calendar"}),e.jsx(i,{"aria-label":"Release date","aria-labelledby":"release-calendar-heading",defaultValue:"2026-06-15"})]}),play:async({canvasElement:a})=>{const t=s(a).getByLabelText("Release calendar");await n(t).toHaveAttribute("aria-labelledby","release-calendar-heading"),await n(t).not.toHaveAttribute("aria-label")}},g={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores date input focus-visible state."}),e.jsx("button",{type:"button",children:"Before date input"}),e.jsx(i,{"aria-label":"Focus intent date",defaultValue:"2026-08-15",onValueChange:()=>{}})]}),play:async({canvasElement:a})=>{const r=s(a),t=await r.findByRole("button",{name:"Before date input"}),l=r.getByLabelText("Focus intent date");await V.click(t),await V.tab(),await n(l).toHaveFocus(),await n(l).toHaveAttribute("data-focus-visible","true"),$.mouseDown(l,{button:0,ctrlKey:!0}),await n(l).toHaveAttribute("data-focus-visible","true")}};var E,H,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(H=d.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var R,j,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var L,C,S;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var I,P,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var M,q,z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <DatePicker aria-label="Date shortcut hint input" defaultValue="2026-08-15" onValueChange={() => {}} />
      <DatePicker aria-label="Date shortcut custom input" aria-keyshortcuts="Enter" defaultValue="2026-08-16" onValueChange={() => {}} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText("Date shortcut hint input")).not.toHaveAttribute("aria-keyshortcuts");
    await expect(canvas.getByLabelText("Date shortcut custom input")).toHaveAttribute("aria-keyshortcuts", "Enter");
  }
}`,...(z=(q=b.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var N,W,_;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    "aria-label": "   ",
    defaultValue: "2026-10-08"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Date picker");
    await expect(input).toHaveAttribute("aria-label", "Date picker");
    await expect(input).not.toHaveAttribute("aria-labelledby");
  }
}`,...(_=(W=v.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,K,G;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(K=y.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,U;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(input, {
      button: 0,
      ctrlKey: true
    });
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const we=["Controlled","InvalidState","InvalidWithHelper","StateMatrix","ShortcutHintPrecision","DefaultNameFallback","BlankAriaLabelFallback","LabelledByPrecedence","FocusIntentReentry"];export{y as BlankAriaLabelFallback,d as Controlled,v as DefaultNameFallback,g as FocusIntentReentry,c as InvalidState,u as InvalidWithHelper,m as LabelledByPrecedence,b as ShortcutHintPrecision,p as StateMatrix,we as __namedExportsOrder,he as default};
