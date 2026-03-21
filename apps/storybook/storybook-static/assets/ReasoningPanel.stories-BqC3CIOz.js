import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BWu4c2F4.js";import{within as T,expect as s,userEvent as A}from"./index-DgAF9SIF.js";function k({title:e="Model reasoning",steps:a,defaultOpen:t=!1,expandLabel:j="Expand reasoning panel",collapseLabel:D="Collapse reasoning panel",emptyText:H="No reasoning steps captured.",listAriaLabel:I="Reasoning steps"}){const[r,N]=g.useState(t),u=g.useId(),q=d(j)??"Expand reasoning panel",C=d(D)??"Collapse reasoning panel",O=d(I)??"Reasoning steps";return n.jsxs("section",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-elevated)",overflow:"hidden"},children:[n.jsxs("button",{type:"button",onClick:()=>N(o=>!o),"aria-expanded":r,"aria-controls":u,"aria-label":r?C:q,style:{width:"100%",height:38,border:0,background:"transparent",textAlign:"left",padding:"0 12px",color:"var(--aurora-text-primary)",fontWeight:600,cursor:"pointer"},children:[n.jsx("span",{"aria-hidden":"true",style:{marginRight:8},children:r?"▼":"▶"}),n.jsx("span",{children:e})]}),r?n.jsx("ol",{id:u,"aria-label":O,style:{margin:0,padding:"0 12px 12px 28px",color:"var(--aurora-text-secondary)",display:"grid",gap:8},children:a.length>0?a.map((o,V)=>n.jsx("li",{children:o},`${V}-${o}`)):n.jsx("li",{children:H})}):null]})}function d(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}k.__docgenInfo={description:"",methods:[],displayName:"ReasoningPanel",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Model reasoning"',computed:!1}},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Expand reasoning panel"',computed:!1}},collapseLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Collapse reasoning panel"',computed:!1}},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No reasoning steps captured."',computed:!1}},listAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Reasoning steps"',computed:!1}}}};const M={title:"AI/ReasoningPanel",component:k,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"ReasoningPanel exposes collapsible model thinking steps with accessible expand/collapse semantics."}}},args:{title:"Model reasoning",steps:["Understand release scope","Group changes by area","Generate review-ready summary"]}},l={play:async({canvasElement:e})=>{const a=T(e),t=await a.findByRole("button",{name:"Expand reasoning panel"});await s(t).toHaveAttribute("aria-expanded","false"),await A.click(t),await s(t).toHaveAttribute("aria-expanded","true"),await s(t).toHaveAttribute("aria-label","Collapse reasoning panel"),await s(a.getByText("Understand release scope")).toBeInTheDocument()}},i={args:{defaultOpen:!0}},p={args:{steps:[]}},c={args:{title:"推理过程",steps:["收集上下文","梳理约束","输出执行计划"],expandLabel:"展开推理面板",collapseLabel:"收起推理面板",listAriaLabel:"推理步骤",emptyText:"暂无推理步骤。"},play:async({canvasElement:e})=>{const a=T(e),t=await a.findByRole("button",{name:"展开推理面板"});await A.click(t),await s(a.getByRole("button",{name:"收起推理面板"})).toHaveAttribute("aria-expanded","true"),await s(a.getByRole("list",{name:"推理步骤"})).toBeInTheDocument()}};var m,x,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Expand reasoning panel"
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(toggle).toHaveAttribute("aria-label", "Collapse reasoning panel");
    await expect(canvas.getByText("Understand release scope")).toBeInTheDocument();
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,f,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,h,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    steps: []
  }
}`,...(R=(h=p.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var E,L,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: "推理过程",
    steps: ["收集上下文", "梳理约束", "输出执行计划"],
    expandLabel: "展开推理面板",
    collapseLabel: "收起推理面板",
    listAriaLabel: "推理步骤",
    emptyText: "暂无推理步骤。"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "展开推理面板"
    });
    await userEvent.click(toggle);
    await expect(canvas.getByRole("button", {
      name: "收起推理面板"
    })).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByRole("list", {
      name: "推理步骤"
    })).toBeInTheDocument();
  }
}`,...(B=(L=c.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const U=["Default","OpenByDefault","EmptyFallback","LocalizedLabels"];export{l as Default,p as EmptyFallback,c as LocalizedLabels,i as OpenByDefault,U as __namedExportsOrder,M as default};
