import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{within as b,expect as r,userEvent as _}from"./index-DgAF9SIF.js";function f({title:e="Model reasoning",steps:a,defaultOpen:t=!1,expandLabel:o,collapseLabel:U,emptyText:h="No reasoning steps captured.",listAriaLabel:W="Reasoning steps",listAriaLabelledBy:J}){const[l,K]=i.useState(t),w=i.useId(),R=i.useMemo(()=>a.filter(s=>s.trim().length>0),[a]),B=x(e),Q=E(o,"Expand reasoning panel",B),X=E(U,"Collapse reasoning panel",B),Y=$(h)?h:"No reasoning steps captured.",A=v(J),Z=A?void 0:v(W)??"Reasoning steps";return n.jsxs("section",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-elevated)",overflow:"hidden"},children:[n.jsxs("button",{type:"button",onClick:()=>K(s=>!s),"aria-expanded":l,"aria-controls":w,"aria-label":l?X:Q,"aria-keyshortcuts":"Enter Space",style:{width:"100%",height:38,border:0,background:"transparent",textAlign:"left",padding:"0 12px",color:"var(--aurora-text-primary)",fontWeight:600,cursor:"pointer"},children:[n.jsx("span",{"aria-hidden":"true",style:{marginRight:8},children:l?"▼":"▶"}),n.jsx("span",{children:e})]}),l?n.jsx("ol",{id:w,"aria-label":Z,"aria-labelledby":A,style:{margin:0,padding:"0 12px 12px 28px",color:"var(--aurora-text-secondary)",display:"grid",gap:8},children:R.length>0?R.map((s,ee)=>n.jsx("li",{children:s},`${ee}-${s}`)):n.jsx("li",{children:Y})}):null]})}function v(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}function E(e,a,t){const o=v(e);return o||(t.length===0?a:`${a}: ${t}`)}function x(e){if(typeof e=="string")return c(e);if(typeof e=="number")return c(String(e));if(Array.isArray(e))return c(e.map(t=>x(t)).filter(t=>t.length>0).join(" "));if(!i.isValidElement(e))return"";const a=e.props;return a["aria-hidden"]===!0||a["aria-hidden"]==="true"?"":typeof a["aria-label"]=="string"&&a["aria-label"].trim().length>0?c(a["aria-label"]):x(a.children)}function c(e){return e.replace(/\s+/g," ").trim()}function $(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(a=>$(a)):i.isValidElement(e)}f.__docgenInfo={description:"",methods:[],displayName:"ReasoningPanel",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Model reasoning"',computed:!1}},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandLabel:{required:!1,tsType:{name:"string"},description:""},collapseLabel:{required:!1,tsType:{name:"string"},description:""},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No reasoning steps captured."',computed:!1}},listAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Reasoning steps"',computed:!1}},listAriaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"AI/ReasoningPanel",component:f,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"ReasoningPanel exposes collapsible model thinking steps with accessible expand/collapse semantics."}}},args:{title:"Model reasoning",steps:["Understand release scope","Group changes by area","Generate review-ready summary"]}},p={play:async({canvasElement:e})=>{const a=b(e),t=await a.findByRole("button",{name:"Expand reasoning panel: Model reasoning"});await r(t).toHaveAttribute("aria-expanded","false"),await r(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await _.click(t),await r(t).toHaveAttribute("aria-expanded","true"),await r(t).toHaveAttribute("aria-label","Collapse reasoning panel: Model reasoning"),await r(a.getByText("Understand release scope")).toBeInTheDocument()}},d={args:{defaultOpen:!0}},u={args:{steps:[]}},g={args:{title:"推理过程",steps:["收集上下文","梳理约束","输出执行计划"],expandLabel:"展开推理面板",collapseLabel:"收起推理面板",listAriaLabel:"推理步骤",emptyText:"暂无推理步骤。"},play:async({canvasElement:e})=>{const a=b(e),t=await a.findByRole("button",{name:"展开推理面板"});await _.click(t),await r(a.getByRole("button",{name:"收起推理面板"})).toHaveAttribute("aria-expanded","true"),await r(a.getByRole("list",{name:"推理步骤"})).toBeInTheDocument()}},m={render:()=>n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("h3",{id:"reasoning-heading",style:{margin:0},children:"Reasoning timeline heading"}),n.jsx(f,{defaultOpen:!0,steps:["Gather requirements","Draft API contract"],listAriaLabel:"Fallback reasoning steps",listAriaLabelledBy:"reasoning-heading"})]}),play:async({canvasElement:e})=>{const t=await b(e).findByRole("list",{name:"Reasoning timeline heading"});await r(t).toHaveAttribute("aria-labelledby","reasoning-heading"),await r(t).not.toHaveAttribute("aria-label")}},y={render:()=>n.jsx(f,{defaultOpen:!0,steps:["   "],emptyText:"   "}),play:async({canvasElement:e})=>{const a=b(e);await r(a.getByText("No reasoning steps captured.")).toBeInTheDocument(),await r(a.getByRole("list",{name:"Reasoning steps"})).toBeInTheDocument()}};var T,L,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Expand reasoning panel: Model reasoning"
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(toggle).toHaveAttribute("aria-label", "Collapse reasoning panel: Model reasoning");
    await expect(canvas.getByText("Understand release scope")).toBeInTheDocument();
  }
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var j,D,H;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,S,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    steps: []
  }
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var O,P,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var M,C,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var V,z,G;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const ie=["Default","OpenByDefault","EmptyFallback","LocalizedLabels","LabelledByPrecedence","BlankStepFallback"];export{y as BlankStepFallback,p as Default,u as EmptyFallback,m as LabelledByPrecedence,g as LocalizedLabels,d as OpenByDefault,ie as __namedExportsOrder,se as default};
