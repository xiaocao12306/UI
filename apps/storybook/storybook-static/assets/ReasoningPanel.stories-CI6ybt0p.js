import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{within as y,expect as s,userEvent as V}from"./index-DgAF9SIF.js";function b({title:e="Model reasoning",steps:a,defaultOpen:t=!1,expandLabel:G="Expand reasoning panel",collapseLabel:M="Collapse reasoning panel",emptyText:v="No reasoning steps captured.",listAriaLabel:_="Reasoning steps",listAriaLabelledBy:z}){const[i,U]=m.useState(t),f=m.useId(),x=m.useMemo(()=>a.filter(r=>r.trim().length>0),[a]),$=F(v)?v:"No reasoning steps captured.",W=o(G)??"Expand reasoning panel",J=o(M)??"Collapse reasoning panel",h=o(z),K=h?void 0:o(_)??"Reasoning steps";return n.jsxs("section",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-elevated)",overflow:"hidden"},children:[n.jsxs("button",{type:"button",onClick:()=>U(r=>!r),"aria-expanded":i,"aria-controls":f,"aria-label":i?J:W,"aria-keyshortcuts":"Enter Space",style:{width:"100%",height:38,border:0,background:"transparent",textAlign:"left",padding:"0 12px",color:"var(--aurora-text-primary)",fontWeight:600,cursor:"pointer"},children:[n.jsx("span",{"aria-hidden":"true",style:{marginRight:8},children:i?"▼":"▶"}),n.jsx("span",{children:e})]}),i?n.jsx("ol",{id:f,"aria-label":K,"aria-labelledby":h,style:{margin:0,padding:"0 12px 12px 28px",color:"var(--aurora-text-secondary)",display:"grid",gap:8},children:x.length>0?x.map((r,Q)=>n.jsx("li",{children:r},`${Q}-${r}`)):n.jsx("li",{children:$})}):null]})}function o(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}function F(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(a=>F(a)):m.isValidElement(e)}b.__docgenInfo={description:"",methods:[],displayName:"ReasoningPanel",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Model reasoning"',computed:!1}},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Expand reasoning panel"',computed:!1}},collapseLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Collapse reasoning panel"',computed:!1}},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No reasoning steps captured."',computed:!1}},listAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Reasoning steps"',computed:!1}},listAriaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"AI/ReasoningPanel",component:b,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"ReasoningPanel exposes collapsible model thinking steps with accessible expand/collapse semantics."}}},args:{title:"Model reasoning",steps:["Understand release scope","Group changes by area","Generate review-ready summary"]}},l={play:async({canvasElement:e})=>{const a=y(e),t=await a.findByRole("button",{name:"Expand reasoning panel"});await s(t).toHaveAttribute("aria-expanded","false"),await s(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await V.click(t),await s(t).toHaveAttribute("aria-expanded","true"),await s(t).toHaveAttribute("aria-label","Collapse reasoning panel"),await s(a.getByText("Understand release scope")).toBeInTheDocument()}},c={args:{defaultOpen:!0}},p={args:{steps:[]}},d={args:{title:"推理过程",steps:["收集上下文","梳理约束","输出执行计划"],expandLabel:"展开推理面板",collapseLabel:"收起推理面板",listAriaLabel:"推理步骤",emptyText:"暂无推理步骤。"},play:async({canvasElement:e})=>{const a=y(e),t=await a.findByRole("button",{name:"展开推理面板"});await V.click(t),await s(a.getByRole("button",{name:"收起推理面板"})).toHaveAttribute("aria-expanded","true"),await s(a.getByRole("list",{name:"推理步骤"})).toBeInTheDocument()}},u={render:()=>n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("h3",{id:"reasoning-heading",style:{margin:0},children:"Reasoning timeline heading"}),n.jsx(b,{defaultOpen:!0,steps:["Gather requirements","Draft API contract"],listAriaLabel:"Fallback reasoning steps",listAriaLabelledBy:"reasoning-heading"})]}),play:async({canvasElement:e})=>{const t=await y(e).findByRole("list",{name:"Reasoning timeline heading"});await s(t).toHaveAttribute("aria-labelledby","reasoning-heading"),await s(t).not.toHaveAttribute("aria-label")}},g={render:()=>n.jsx(b,{defaultOpen:!0,steps:["   "],emptyText:"   "}),play:async({canvasElement:e})=>{const a=y(e);await s(a.getByText("No reasoning steps captured.")).toBeInTheDocument(),await s(a.getByRole("list",{name:"Reasoning steps"})).toBeInTheDocument()}};var w,R,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Expand reasoning panel"
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(toggle).toHaveAttribute("aria-label", "Collapse reasoning panel");
    await expect(canvas.getByText("Understand release scope")).toBeInTheDocument();
  }
}`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var A,E,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,k,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    steps: []
  }
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var H,I,j;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var S,N,O;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <h3 id="reasoning-heading" style={{
      margin: 0
    }}>
        Reasoning timeline heading
      </h3>
      <ReasoningPanel defaultOpen steps={["Gather requirements", "Draft API contract"]} listAriaLabel="Fallback reasoning steps" listAriaLabelledBy="reasoning-heading" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const list = await canvas.findByRole("list", {
      name: "Reasoning timeline heading"
    });
    await expect(list).toHaveAttribute("aria-labelledby", "reasoning-heading");
    await expect(list).not.toHaveAttribute("aria-label");
  }
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var q,P,C;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ReasoningPanel defaultOpen steps={["   "]} emptyText="   " />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("No reasoning steps captured.")).toBeInTheDocument();
    await expect(canvas.getByRole("list", {
      name: "Reasoning steps"
    })).toBeInTheDocument();
  }
}`,...(C=(P=g.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const te=["Default","OpenByDefault","EmptyFallback","LocalizedLabels","LabelledByPrecedence","BlankStepFallback"];export{g as BlankStepFallback,l as Default,p as EmptyFallback,u as LabelledByPrecedence,d as LocalizedLabels,c as OpenByDefault,te as __namedExportsOrder,ae as default};
