import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{I as ve}from"./Input-B9xcXif8.js";import{a as be,m as j}from"./a11y-CU5SQrEA.js";import{B as k}from"./Badge-Cvc2u0v9.js";import{within as l,expect as r,fireEvent as B,userEvent as R}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function i({value:a,defaultValue:n,onValueChange:t,onChange:s,invalid:o,errorMessageId:c,"aria-label":le,"aria-labelledby":oe,...d}){const de=ye(o),D=be(de,d["aria-invalid"]),H=D!==void 0,ce=j(d["aria-describedby"],H?c:void 0),ue=H?j(d["aria-errormessage"],c):d["aria-errormessage"],T=E(oe),pe=T===void 0?E(le,"Date picker"):void 0;return e.jsx(ve,{...d,type:"date",value:a,defaultValue:n,"aria-label":pe,"aria-labelledby":T,"aria-describedby":ce,"aria-errormessage":ue,"aria-invalid":D,onChange:V=>{s==null||s(V),t==null||t(V.target.value)}})}function ye(a){if(typeof a=="boolean")return a}function E(a,n){return typeof a=="string"&&a.trim().length>0?a.trim():n}i.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const He={title:"Form/DatePicker",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function me(){const[a,n]=f.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected date"}),e.jsx(k,{tone:"default",children:a})]}),e.jsx(i,{"aria-label":"Release date",value:a,onValueChange:n,min:"2026-01-01",max:"2026-12-31"})]})}const u={render:()=>e.jsx(me,{}),play:async({canvasElement:a})=>{const n=l(a),t=n.getByLabelText("Release date");B.change(t,{target:{value:"2026-04-02"}}),await r(n.getByText("2026-04-02")).toBeInTheDocument()}},p={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},v={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(i,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Release date must be in the approved launch window."})]}),play:async({canvasElement:a})=>{const t=l(a).getByLabelText("Release date");await r(t).toHaveAttribute("aria-describedby","release-date-help release-date-error"),await r(t).toHaveAttribute("aria-errormessage","release-date-error")}},b={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(i,{"aria-label":"Default date picker",defaultValue:"2026-03-17",onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Invalid date picker",defaultValue:"2025-12-31",min:"2026-01-01",invalid:!0,onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Read only date picker",value:"2026-07-01",readOnly:!0,onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Disabled date picker",defaultValue:"2026-08-15",disabled:!0,onValueChange:()=>{}})]})},y={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(i,{"aria-label":"Date shortcut hint input",defaultValue:"2026-08-15",onValueChange:()=>{}}),e.jsx(i,{"aria-label":"Date shortcut custom input","aria-keyshortcuts":"Enter",defaultValue:"2026-08-16",onValueChange:()=>{}})]}),play:async({canvasElement:a})=>{const n=l(a);await r(n.getByLabelText("Date shortcut hint input")).not.toHaveAttribute("aria-keyshortcuts"),await r(n.getByLabelText("Date shortcut custom input")).toHaveAttribute("aria-keyshortcuts","Enter")}};function ge(){const[a,n]=f.useState("2026-08-15"),[t,s]=f.useState(0);return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsx(i,{"aria-label":"Runtime boolean date picker",value:a,invalid:"true",disabled:"true",onValueChange:o=>{n(o),s(c=>c+1)}}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsxs(k,{tone:"default",children:["Value: ",e.jsx("span",{"data-testid":"datepicker-runtime-value",children:a})]}),e.jsxs(k,{tone:"default",children:["Changes: ",e.jsx("span",{"data-testid":"datepicker-runtime-events",children:t})]})]})]})}const m={render:()=>e.jsx(ge,{}),play:async({canvasElement:a})=>{const n=l(a),t=n.getByLabelText("Runtime boolean date picker"),s=n.getByTestId("datepicker-runtime-value"),o=n.getByTestId("datepicker-runtime-events");await r(t).not.toBeDisabled(),await r(t).not.toHaveAttribute("aria-invalid"),await r(s).toHaveTextContent("2026-08-15"),await r(o).toHaveTextContent("0"),B.change(t,{target:{value:"2026-09-01"}}),await r(s).toHaveTextContent("2026-09-01"),await r(o).toHaveTextContent("1")}},g={args:{"aria-label":"   ",defaultValue:"2026-10-08"},play:async({canvasElement:a})=>{const t=l(a).getByLabelText("Date picker");await r(t).toHaveAttribute("aria-label","Date picker"),await r(t).not.toHaveAttribute("aria-labelledby")}},h={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"release-window-label",style:{margin:0,color:"var(--aurora-text-primary)",fontWeight:600},children:"Release window"}),e.jsx(i,{"aria-label":"   ","aria-labelledby":"release-window-label",defaultValue:"2026-11-09"})]}),play:async({canvasElement:a})=>{const t=l(a).getByLabelText("Release window");await r(t).toHaveAttribute("aria-labelledby","release-window-label"),await r(t).not.toHaveAttribute("aria-label")}},x={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("h3",{id:"release-calendar-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Release calendar"}),e.jsx(i,{"aria-label":"Release date","aria-labelledby":"release-calendar-heading",defaultValue:"2026-06-15"})]}),play:async({canvasElement:a})=>{const t=l(a).getByLabelText("Release calendar");await r(t).toHaveAttribute("aria-labelledby","release-calendar-heading"),await r(t).not.toHaveAttribute("aria-label")}},w={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores date input focus-visible state."}),e.jsx("button",{type:"button",children:"Before date input"}),e.jsx(i,{"aria-label":"Focus intent date",defaultValue:"2026-08-15",onValueChange:()=>{}})]}),play:async({canvasElement:a})=>{const n=l(a),t=await n.findByRole("button",{name:"Before date input"}),s=n.getByLabelText("Focus intent date");await R.click(t),await R.tab(),await r(s).toHaveFocus(),await r(s).toHaveAttribute("data-focus-visible","true"),B.mouseDown(s,{button:0,ctrlKey:!0}),await r(s).toHaveAttribute("data-focus-visible","true")}};var C,A,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,S,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(P=(S=p.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var F,z,N;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(z=v.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var M,q,W;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(q=b.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var _,O,K;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(O=y.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var G,J,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationDatePicker />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Runtime boolean date picker");
    const value = canvas.getByTestId("datepicker-runtime-value");
    const events = canvas.getByTestId("datepicker-runtime-events");
    await expect(input).not.toBeDisabled();
    await expect(input).not.toHaveAttribute("aria-invalid");
    await expect(value).toHaveTextContent("2026-08-15");
    await expect(events).toHaveTextContent("0");
    fireEvent.change(input, {
      target: {
        value: "2026-09-01"
      }
    });
    await expect(value).toHaveTextContent("2026-09-01");
    await expect(events).toHaveTextContent("1");
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ie,se;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Te=["Controlled","InvalidState","InvalidWithHelper","StateMatrix","ShortcutHintPrecision","RuntimeBooleanConfigNormalization","DefaultNameFallback","BlankAriaLabelFallback","LabelledByPrecedence","FocusIntentReentry"];export{h as BlankAriaLabelFallback,u as Controlled,g as DefaultNameFallback,w as FocusIntentReentry,p as InvalidState,v as InvalidWithHelper,x as LabelledByPrecedence,m as RuntimeBooleanConfigNormalization,y as ShortcutHintPrecision,b as StateMatrix,Te as __namedExportsOrder,He as default};
