import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{within as k,expect as l,userEvent as B}from"./index-DgAF9SIF.js";function w({title:i="Model reasoning",steps:e,defaultOpen:a=!1}){const[d,R]=p.useState(a),c=p.useId();return t.jsxs("section",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-elevated)",overflow:"hidden"},children:[t.jsxs("button",{type:"button",onClick:()=>R(r=>!r),"aria-expanded":d,"aria-controls":c,style:{width:"100%",height:38,border:0,background:"transparent",textAlign:"left",padding:"0 12px",color:"var(--aurora-text-primary)",fontWeight:600,cursor:"pointer"},children:[d?"▼":"▶"," ",i]}),d?t.jsx("ol",{id:c,style:{margin:0,padding:"0 12px 12px 28px",color:"var(--aurora-text-secondary)",display:"grid",gap:8},children:e.length>0?e.map((r,E)=>t.jsx("li",{children:r},`${E}-${r}`)):t.jsx("li",{children:"No reasoning steps captured."})}):null]})}w.__docgenInfo={description:"",methods:[],displayName:"ReasoningPanel",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Model reasoning"',computed:!1}},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const T={title:"AI/ReasoningPanel",component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"ReasoningPanel exposes collapsible model thinking steps with accessible expand/collapse semantics."}}},args:{title:"Model reasoning",steps:["Understand release scope","Group changes by area","Generate review-ready summary"]}},n={play:async({canvasElement:i})=>{const e=k(i),a=await e.findByRole("button",{name:/Model reasoning/});await l(a).toHaveAttribute("aria-expanded","false"),await B.click(a),await l(a).toHaveAttribute("aria-expanded","true"),await l(e.getByText("Understand release scope")).toBeInTheDocument()}},s={args:{defaultOpen:!0}},o={args:{steps:[]}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: /Model reasoning/
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Understand release scope")).toBeInTheDocument();
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,f,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,b,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    steps: []
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const D=["Default","OpenByDefault","EmptyFallback"];export{n as Default,o as EmptyFallback,s as OpenByDefault,D as __namedExportsOrder,T as default};
