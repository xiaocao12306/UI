import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as C}from"./Button-Hgh0jeno.js";import{I as l}from"./Input-BX0mitHu.js";import{a as L,m as R,r as Q}from"./a11y-yJ-B0ZWx.js";import{within as U,userEvent as g,expect as m}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function d({label:n,htmlFor:r,description:i,error:s,required:v,disabled:c,children:t}){const k=o.useId(),x=o.useId(),f=o.useId(),a=o.isValidElement(t)&&typeof t.type!="symbol"?t.props:void 0,H=o.isValidElement(t)&&typeof t.type!="symbol"?a==null?void 0:a.id:void 0,w=r??H??k,P=!!s,M=a==null?void 0:a["aria-describedby"],_=a==null?void 0:a["aria-errormessage"],O=a==null?void 0:a["aria-invalid"],W=L(typeof(a==null?void 0:a.required)=="boolean"?a.required:void 0,a==null?void 0:a["aria-required"]),h=!!(v||W),z=P||Q(void 0,O),G=R(M,i?x:void 0,s?f:void 0),J=R(_,s?f:void 0),K=o.isValidElement(t)&&typeof t.type!="symbol"?o.cloneElement(t,{id:w,"aria-describedby":G,"aria-errormessage":J,"aria-invalid":z||void 0,"aria-required":h||void 0,required:h||void 0,disabled:c||(a==null?void 0:a.disabled)}):t;return e.jsxs("div",{style:{display:"grid",gap:6},"aria-disabled":c||void 0,children:[e.jsxs("label",{htmlFor:w,style:{color:c?"color-mix(in srgb, var(--aurora-text-primary) 60%, transparent)":"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",display:"inline-flex",gap:4,alignItems:"center"},children:[n,h?e.jsx("span",{style:{color:"var(--aurora-color-red-500)"},children:"*"}):null]}),e.jsx("div",{children:K}),i?e.jsx("small",{id:x,style:{color:c?"color-mix(in srgb, var(--aurora-text-secondary) 70%, transparent)":"var(--aurora-text-secondary)"},children:i}):null,s?e.jsx("small",{id:f,role:"alert",style:{color:"var(--aurora-color-red-500)"},children:s}):null]})}d.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const oe={title:"Form/Input",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},p={},u={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(l,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(C,{children:"Send"})]}),e.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})},y={render:()=>e.jsxs("div",{style:{width:560,display:"grid",gap:12},children:[e.jsx(d,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(l,{placeholder:"Type project name..."})}),e.jsx(d,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(l,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(d,{label:"Required inherited from control",children:e.jsx(l,{placeholder:"Inherited required field",required:!0})}),e.jsx(d,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(l,{placeholder:"Disabled field"})}),e.jsx(d,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(l,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})};function X(){const[n,r]=o.useState(""),[i,s]=o.useState(!1),v=i&&n.trim().length===0;return e.jsxs("div",{style:{width:560,display:"grid",gap:10},children:[e.jsx(d,{label:"Prompt",error:v?"Prompt is required.":void 0,children:e.jsx(l,{"aria-label":"Prompt input",value:n,placeholder:"Describe release note summary...",onChange:c=>r(c.target.value),onBlur:()=>s(!0)})}),e.jsxs("small",{style:{color:"var(--aurora-text-secondary)"},"data-testid":"char-count",children:[n.length," chars"]}),e.jsx(C,{disabled:n.trim().length===0,children:"Submit Prompt"})]})}const b={render:()=>e.jsx(X,{}),play:async({canvasElement:n})=>{const r=U(n),i=await r.findByRole("textbox",{name:"Prompt input"});await g.click(i),await g.tab(),await m(r.getByRole("alert")).toHaveTextContent("Prompt is required."),await m(r.getByRole("button",{name:"Submit Prompt"})).toBeDisabled(),await g.type(i,"Release summary"),await m(r.queryByRole("alert")).not.toBeInTheDocument(),await m(r.getByTestId("char-count")).toHaveTextContent("15 chars"),await m(r.getByRole("button",{name:"Submit Prompt"})).not.toBeDisabled()}};var I,j,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(F=(j=p.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var q,B,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var T,S,E;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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

      <FormField label="Required inherited from control">
        <Input placeholder="Inherited required field" required />
      </FormField>

      <FormField label="Disabled" description="Disabled fields remain readable with lower emphasis." disabled>
        <Input placeholder="Disabled field" />
      </FormField>

      <FormField label="Read-only" description="Read-only fields are focusable but not editable.">
        <Input value="release/0.1.0" readOnly aria-label="Release branch" />
      </FormField>
    </div>
}`,...(E=(S=y.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,V,N;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(V=b.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const ne=["Default","AiPromptStyle","StateMatrix","ValidationFlow"];export{u as AiPromptStyle,p as Default,y as StateMatrix,b as ValidationFlow,ne as __namedExportsOrder,oe as default};
