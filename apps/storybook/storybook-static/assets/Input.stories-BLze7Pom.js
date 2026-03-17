import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as N}from"./Button-Hgh0jeno.js";import{I as s}from"./Input-CsKcV-PN.js";import{r as J}from"./a11y-DazNkYNk.js";import{within as K,userEvent as x,expect as p}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function c({label:n,htmlFor:t,description:i,error:l,required:m,disabled:d,children:r}){const C=o.useId(),h=o.useId(),f=o.useId(),a=o.isValidElement(r)&&typeof r.type!="symbol"?r.props:void 0,k=o.isValidElement(r)&&typeof r.type!="symbol"?a==null?void 0:a.id:void 0,g=t??k??C,H=!!l,P=a==null?void 0:a["aria-describedby"],_=a==null?void 0:a["aria-errormessage"],M=a==null?void 0:a["aria-invalid"],O=!!(a!=null&&a.required||a!=null&&a["aria-required"]),w=!!(m||O),W=H||J(void 0,M),z=[P,i?h:null,l?f:null].filter(Boolean).join(" "),G=o.isValidElement(r)&&typeof r.type!="symbol"?o.cloneElement(r,{id:g,"aria-describedby":z||void 0,"aria-errormessage":l?f:_,"aria-invalid":W||void 0,"aria-required":w||void 0,required:w||void 0,disabled:d||(a==null?void 0:a.disabled)}):r;return e.jsxs("div",{style:{display:"grid",gap:6},"aria-disabled":d||void 0,children:[e.jsxs("label",{htmlFor:g,style:{color:d?"color-mix(in srgb, var(--aurora-text-primary) 60%, transparent)":"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",display:"inline-flex",gap:4,alignItems:"center"},children:[n,m?e.jsx("span",{style:{color:"var(--aurora-color-red-500)"},children:"*"}):null]}),e.jsx("div",{children:G}),i?e.jsx("small",{id:h,style:{color:d?"color-mix(in srgb, var(--aurora-text-secondary) 70%, transparent)":"var(--aurora-text-secondary)"},children:i}):null,l?e.jsx("small",{id:f,role:"alert",style:{color:"var(--aurora-color-red-500)"},children:l}):null]})}c.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ae={title:"Form/Input",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},u={},y={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(s,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(N,{children:"Send"})]}),e.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})},b={render:()=>e.jsxs("div",{style:{width:560,display:"grid",gap:12},children:[e.jsx(c,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(s,{placeholder:"Type project name..."})}),e.jsx(c,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(s,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(c,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(s,{placeholder:"Disabled field"})}),e.jsx(c,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(s,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})};function L(){const[n,t]=o.useState(""),[i,l]=o.useState(!1),m=i&&n.trim().length===0;return e.jsxs("div",{style:{width:560,display:"grid",gap:10},children:[e.jsx(c,{label:"Prompt",error:m?"Prompt is required.":void 0,children:e.jsx(s,{"aria-label":"Prompt input",value:n,placeholder:"Describe release note summary...",onChange:d=>t(d.target.value),onBlur:()=>l(!0)})}),e.jsxs("small",{style:{color:"var(--aurora-text-secondary)"},"data-testid":"char-count",children:[n.length," chars"]}),e.jsx(N,{disabled:n.trim().length===0,children:"Submit Prompt"})]})}const v={render:()=>e.jsx(L,{}),play:async({canvasElement:n})=>{const t=K(n),i=await t.findByRole("textbox",{name:"Prompt input"});await x.click(i),await x.tab(),await p(t.getByRole("alert")).toHaveTextContent("Prompt is required."),await p(t.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await x.type(i,"Release summary"),await p(t.queryByRole("alert")).not.toBeInTheDocument(),await p(t.getByTestId("char-count")).toHaveTextContent("15 chars"),await p(t.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}};var R,I,j;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(j=(I=u.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var B,F,D;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(F=y.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var T,q,S;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(q=b.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var E,A,V;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(A=v.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const te=["Default","AiPromptStyle","StateMatrix","ValidationFlow"];export{y as AiPromptStyle,u as Default,b as StateMatrix,v as ValidationFlow,te as __namedExportsOrder,ae as default};
