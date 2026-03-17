import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{B as E}from"./Button-Hgh0jeno.js";import{I as i}from"./Input-CsKcV-PN.js";import{within as H,userEvent as h,expect as p}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-DazNkYNk.js";function d({label:t,htmlFor:a,description:r,error:l,required:c,disabled:s,children:o}){const A=n.useId(),f=n.useId(),v=n.useId(),N=n.isValidElement(o)&&typeof o.type!="symbol"?o.props.id:void 0,x=a??N??A,V=!!l,C=[r?f:null,l?v:null].filter(Boolean).join(" "),k=n.isValidElement(o)&&typeof o.type!="symbol"?n.cloneElement(o,{id:x,"aria-describedby":C||void 0,"aria-errormessage":l?v:void 0,"aria-invalid":V?!0:void 0,"aria-required":c||void 0,required:c||void 0,disabled:s||o.props.disabled}):o;return e.jsxs("div",{style:{display:"grid",gap:6},"aria-disabled":s||void 0,children:[e.jsxs("label",{htmlFor:x,style:{color:s?"color-mix(in srgb, var(--aurora-text-primary) 60%, transparent)":"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",display:"inline-flex",gap:4,alignItems:"center"},children:[t,c?e.jsx("span",{style:{color:"var(--aurora-color-red-500)"},children:"*"}):null]}),e.jsx("div",{children:k}),r?e.jsx("small",{id:f,style:{color:s?"color-mix(in srgb, var(--aurora-text-secondary) 70%, transparent)":"var(--aurora-text-secondary)"},children:r}):null,l?e.jsx("small",{id:v,role:"alert",style:{color:"var(--aurora-color-red-500)"},children:l}):null]})}d.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const L={title:"Form/Input",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},m={},u={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(i,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(E,{children:"Send"})]}),e.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})},y={render:()=>e.jsxs("div",{style:{width:560,display:"grid",gap:12},children:[e.jsx(d,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(i,{placeholder:"Type project name..."})}),e.jsx(d,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(i,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(d,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(i,{placeholder:"Disabled field"})}),e.jsx(d,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(i,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})};function _(){const[t,a]=n.useState(""),[r,l]=n.useState(!1),c=r&&t.trim().length===0;return e.jsxs("div",{style:{width:560,display:"grid",gap:10},children:[e.jsx(d,{label:"Prompt",error:c?"Prompt is required.":void 0,children:e.jsx(i,{"aria-label":"Prompt input",value:t,placeholder:"Describe release note summary...",onChange:s=>a(s.target.value),onBlur:()=>l(!0)})}),e.jsxs("small",{style:{color:"var(--aurora-text-secondary)"},"data-testid":"char-count",children:[t.length," chars"]}),e.jsx(E,{disabled:t.trim().length===0,children:"Submit Prompt"})]})}const b={render:()=>e.jsx(_,{}),play:async({canvasElement:t})=>{const a=H(t),r=await a.findByRole("textbox",{name:"Prompt input"});await h.click(r),await h.tab(),await p(a.getByRole("alert")).toHaveTextContent("Prompt is required."),await p(a.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await h.type(r,"Release summary"),await p(a.queryByRole("alert")).not.toBeInTheDocument(),await p(a.getByTestId("char-count")).toHaveTextContent("15 chars"),await p(a.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}};var g,w,R;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var j,I,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 520,
    display: "grid",
    gap: 8
  }}>
      <label htmlFor="prompt" style={{
      fontWeight: 600
    }}>
        Prompt Draft
      </label>
      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 8
    }}>
        <Input id="prompt" placeholder="Ask Aurora AI to scaffold a new dialog flow..." aria-label="AI prompt" />
        <Button>Send</Button>
      </div>
      <small style={{
      color: "var(--aurora-text-secondary)"
    }}>
        Tip: switch theme in toolbar to validate input token contrast.
      </small>
    </div>
}`,...(F=(I=u.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var B,T,D;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 560,
    display: "grid",
    gap: 12
  }}>
      <FormField label="Default" description="Hover and focus to verify border and ring states.">
        <Input placeholder="Type project name..." />
      </FormField>

      <FormField label="Error" error="Please provide a valid email address." required>
        <Input placeholder="name@company.com" defaultValue="invalid-email" />
      </FormField>

      <FormField label="Disabled" description="Disabled fields remain readable with lower emphasis." disabled>
        <Input placeholder="Disabled field" />
      </FormField>

      <FormField label="Read-only" description="Read-only fields are focusable but not editable.">
        <Input value="release/0.1.0" readOnly aria-label="Release branch" />
      </FormField>
    </div>
}`,...(D=(T=y.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var S,P,q;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ValidationFlowDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
    await userEvent.click(input);
    await userEvent.tab();
    await expect(canvas.getByRole("alert")).toHaveTextContent("Prompt is required.");
    await expect(canvas.getByRole("button", {
      name: "Submit Prompt"
    })).toBeDisabled();
    await userEvent.type(input, "Release summary");
    await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
    await expect(canvas.getByTestId("char-count")).toHaveTextContent("15 chars");
    await expect(canvas.getByRole("button", {
      name: "Submit Prompt"
    })).not.toBeDisabled();
  }
}`,...(q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const Q=["Default","AiPromptStyle","StateMatrix","ValidationFlow"];export{u as AiPromptStyle,m as Default,y as StateMatrix,b as ValidationFlow,Q as __namedExportsOrder,L as default};
