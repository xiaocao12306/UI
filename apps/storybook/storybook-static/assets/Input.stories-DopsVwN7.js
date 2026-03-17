import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as N}from"./Button-Drf1sTuy.js";import{I as o}from"./Input-vIzakoOT.js";import{r as a}from"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";function l({label:R,htmlFor:w,description:c,error:t,required:p,disabled:s,children:r}){const T=a.useId(),u=a.useId(),m=a.useId(),D=a.isValidElement(r)&&typeof r.type!="symbol"?r.props.id:void 0,y=w??D??T,A=!!t,S=[c?u:null,t?m:null].filter(Boolean).join(" "),q=a.isValidElement(r)&&typeof r.type!="symbol"?a.cloneElement(r,{id:y,"aria-describedby":S||void 0,"aria-errormessage":t?m:void 0,"aria-invalid":A?!0:void 0,"aria-required":p||void 0,required:p||void 0,disabled:s||r.props.disabled}):r;return e.jsxs("div",{style:{display:"grid",gap:6},"aria-disabled":s||void 0,children:[e.jsxs("label",{htmlFor:y,style:{color:s?"color-mix(in srgb, var(--aurora-text-primary) 60%, transparent)":"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",fontWeight:"var(--aurora-font-weight-medium)",display:"inline-flex",gap:4,alignItems:"center"},children:[R,p?e.jsx("span",{style:{color:"var(--aurora-color-red-500)"},children:"*"}):null]}),e.jsx("div",{children:q}),c?e.jsx("small",{id:u,style:{color:s?"color-mix(in srgb, var(--aurora-text-secondary) 70%, transparent)":"var(--aurora-text-secondary)"},children:c}):null,t?e.jsx("small",{id:m,role:"alert",style:{color:"var(--aurora-color-red-500)"},children:t}):null]})}l.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Form/Input",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Input uses shared field tokens and is suitable for search, filters, and AI prompt prefill interactions."}}},args:{placeholder:"Search release notes..."}},i={},d={render:()=>e.jsxs("div",{style:{width:520,display:"grid",gap:8},children:[e.jsx("label",{htmlFor:"prompt",style:{fontWeight:600},children:"Prompt Draft"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:8},children:[e.jsx(o,{id:"prompt",placeholder:"Ask Aurora AI to scaffold a new dialog flow...","aria-label":"AI prompt"}),e.jsx(N,{children:"Send"})]}),e.jsx("small",{style:{color:"var(--aurora-text-secondary)"},children:"Tip: switch theme in toolbar to validate input token contrast."})]})},n={render:()=>e.jsxs("div",{style:{width:560,display:"grid",gap:12},children:[e.jsx(l,{label:"Default",description:"Hover and focus to verify border and ring states.",children:e.jsx(o,{placeholder:"Type project name..."})}),e.jsx(l,{label:"Error",error:"Please provide a valid email address.",required:!0,children:e.jsx(o,{placeholder:"name@company.com",defaultValue:"invalid-email"})}),e.jsx(l,{label:"Disabled",description:"Disabled fields remain readable with lower emphasis.",disabled:!0,children:e.jsx(o,{placeholder:"Disabled field"})}),e.jsx(l,{label:"Read-only",description:"Read-only fields are focusable but not editable.",children:e.jsx(o,{value:"release/0.1.0",readOnly:!0,"aria-label":"Release branch"})})]})};var f,b,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,g,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var j,I,F;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(I=n.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const C=["Default","AiPromptStyle","StateMatrix"];export{d as AiPromptStyle,i as Default,n as StateMatrix,C as __namedExportsOrder,_ as default};
