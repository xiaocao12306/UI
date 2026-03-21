import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as Y}from"./index-BWu4c2F4.js";import{I as Z}from"./Input-DzIHcUXT.js";import{a as $,m as f}from"./a11y-CU5SQrEA.js";import{B as ee}from"./Badge-ZJmMstsz.js";import{within as l,expect as i,fireEvent as J,userEvent as k}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function n({value:a,defaultValue:r,onValueChange:t,onChange:s,invalid:Q,errorMessageId:g,...o}){const h=$(Q,o["aria-invalid"]),w=h!==void 0,U=f(o["aria-describedby"],w?g:void 0),X=w?f(o["aria-errormessage"],g):o["aria-errormessage"];return e.jsx(Z,{...o,type:"date",value:a,defaultValue:r,"aria-describedby":U,"aria-errormessage":X,"aria-invalid":h,onChange:x=>{s==null||s(x),t==null||t(x.target.value)}})}n.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessageId:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"Form/DatePicker",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"DatePicker wraps a date input with Aurora token styling and controlled/uncontrolled date selection support."}}},args:{"aria-label":"Release date",onValueChange:()=>{}}};function ae(){const[a,r]=Y.useState("2026-03-17");return e.jsxs("div",{style:{width:360,display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Selected date"}),e.jsx(ee,{tone:"default",children:a})]}),e.jsx(n,{"aria-label":"Release date",value:a,onValueChange:r,min:"2026-01-01",max:"2026-12-31"})]})}const d={render:()=>e.jsx(ae,{}),play:async({canvasElement:a})=>{const r=l(a),t=r.getByLabelText("Release date");J.change(t,{target:{value:"2026-04-02"}}),await i(r.getByText("2026-04-02")).toBeInTheDocument()}},c={args:{"aria-label":"Release date",defaultValue:"2026-01-09",invalid:!0}},u={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx(n,{"aria-label":"Release date",defaultValue:"2026-02-10",invalid:!0,"aria-describedby":"release-date-help",errorMessageId:"release-date-error",onValueChange:()=>{}}),e.jsx("p",{id:"release-date-help",style:{margin:0,color:"var(--aurora-text-primary)",fontSize:13},children:"Choose a date between February and December."}),e.jsx("p",{id:"release-date-error",style:{margin:0,color:"color-mix(in srgb, var(--aurora-color-red-500) 86%, var(--aurora-text-primary))",fontSize:13},children:"Release date must be in the approved launch window."})]}),play:async({canvasElement:a})=>{const t=l(a).getByLabelText("Release date");await i(t).toHaveAttribute("aria-describedby","release-date-help release-date-error"),await i(t).toHaveAttribute("aria-errormessage","release-date-error")}},p={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(n,{"aria-label":"Default date picker",defaultValue:"2026-03-17",onValueChange:()=>{}}),e.jsx(n,{"aria-label":"Invalid date picker",defaultValue:"2025-12-31",min:"2026-01-01",invalid:!0,onValueChange:()=>{}}),e.jsx(n,{"aria-label":"Read only date picker",value:"2026-07-01",readOnly:!0,onValueChange:()=>{}}),e.jsx(n,{"aria-label":"Disabled date picker",defaultValue:"2026-08-15",disabled:!0,onValueChange:()=>{}})]})},y={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(n,{"aria-label":"Date shortcut hint input",defaultValue:"2026-08-15",onValueChange:()=>{}}),e.jsx(n,{"aria-label":"Date shortcut custom input","aria-keyshortcuts":"Enter",defaultValue:"2026-08-16",onValueChange:()=>{}})]}),play:async({canvasElement:a})=>{const r=l(a);await i(r.getByLabelText("Date shortcut hint input")).not.toHaveAttribute("aria-keyshortcuts"),await i(r.getByLabelText("Date shortcut custom input")).toHaveAttribute("aria-keyshortcuts","Enter")}},v={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{id:"release-window-label",style:{margin:0,color:"var(--aurora-text-primary)",fontWeight:600},children:"Release window"}),e.jsx(n,{"aria-label":"   ","aria-labelledby":"release-window-label",defaultValue:"2026-11-09"})]}),play:async({canvasElement:a})=>{const t=l(a).getByLabelText("Release window");await i(t).toHaveAttribute("aria-labelledby","release-window-label"),await i(t).not.toHaveAttribute("aria-label")}},b={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("h3",{id:"release-calendar-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Release calendar"}),e.jsx(n,{"aria-label":"Release date","aria-labelledby":"release-calendar-heading",defaultValue:"2026-06-15"})]}),play:async({canvasElement:a})=>{const t=l(a).getByLabelText("Release calendar");await i(t).toHaveAttribute("aria-labelledby","release-calendar-heading"),await i(t).not.toHaveAttribute("aria-label")}},m={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores date input focus-visible state."}),e.jsx("button",{type:"button",children:"Before date input"}),e.jsx(n,{"aria-label":"Focus intent date",defaultValue:"2026-08-15",onValueChange:()=>{}})]}),play:async({canvasElement:a})=>{const r=l(a),t=await r.findByRole("button",{name:"Before date input"}),s=r.getByLabelText("Focus intent date");await k.click(t),await k.tab(),await i(s).toHaveFocus(),await i(s).toHaveAttribute("data-focus-visible","true"),J.mouseDown(s,{button:0,ctrlKey:!0}),await i(s).toHaveAttribute("data-focus-visible","true")}};var V,D,B;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var R,j,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    "aria-label": "Release date",
    defaultValue: "2026-01-09",
    invalid: true
  }
}`,...(E=(j=c.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var H,T,A;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,I,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var L,P,F;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(P=y.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var M,q,z;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var W,_,O;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var K,N,G;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(N=m.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const ce=["Controlled","InvalidState","InvalidWithHelper","StateMatrix","ShortcutHintPrecision","BlankAriaLabelFallback","LabelledByPrecedence","FocusIntentReentry"];export{v as BlankAriaLabelFallback,d as Controlled,m as FocusIntentReentry,c as InvalidState,u as InvalidWithHelper,b as LabelledByPrecedence,y as ShortcutHintPrecision,p as StateMatrix,ce as __namedExportsOrder,de as default};
