import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{within as o,expect as n,userEvent as J}from"./index-DgAF9SIF.js";function v({title:e="Model reasoning",steps:a,defaultOpen:t=!1,expandLabel:l,collapseLabel:Q,emptyText:w="No reasoning steps captured.",listAriaLabel:X="Reasoning steps",listAriaLabelledBy:Y}){const Z=ie(t,!1),[c,ee]=i.useState(Z),R=i.useId(),B=i.useMemo(()=>a.filter(r=>r.trim().length>0),[a]),A=h(e),ae=T(l,"Expand reasoning panel",A),te=T(Q,"Collapse reasoning panel",A),ne=K(w)?w:"No reasoning steps captured.",E=x(Y),se=E?void 0:x(X)??"Reasoning steps";return s.jsxs("section",{style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-elevated)",overflow:"hidden"},children:[s.jsxs("button",{type:"button",onClick:()=>ee(r=>!r),"aria-expanded":c,"aria-controls":R,"aria-label":c?te:ae,"aria-keyshortcuts":"Enter Space",style:{width:"100%",height:38,border:0,background:"transparent",textAlign:"left",padding:"0 12px",color:"var(--aurora-text-primary)",fontWeight:600,cursor:"pointer"},children:[s.jsx("span",{"aria-hidden":"true",style:{marginRight:8},children:c?"▼":"▶"}),s.jsx("span",{children:e})]}),c?s.jsx("ol",{id:R,"aria-label":se,"aria-labelledby":E,style:{margin:0,padding:"0 12px 12px 28px",color:"var(--aurora-text-secondary)",display:"grid",gap:8},children:B.length>0?B.map((r,re)=>s.jsx("li",{children:r},`${re}-${r}`)):s.jsx("li",{children:ne})}):null]})}function ie(e,a){return typeof e!="boolean"?a:e}function x(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}function T(e,a,t){const l=x(e);return l||(t.length===0?a:`${a}: ${t}`)}function h(e){if(typeof e=="string")return p(e);if(typeof e=="number")return p(String(e));if(Array.isArray(e))return p(e.map(t=>h(t)).filter(t=>t.length>0).join(" "));if(!i.isValidElement(e))return"";const a=e.props;return a["aria-hidden"]===!0||a["aria-hidden"]==="true"?"":typeof a["aria-label"]=="string"&&a["aria-label"].trim().length>0?p(a["aria-label"]):h(a.children)}function p(e){return e.replace(/\s+/g," ").trim()}function K(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(a=>K(a)):i.isValidElement(e)}v.__docgenInfo={description:"",methods:[],displayName:"ReasoningPanel",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Model reasoning"',computed:!1}},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandLabel:{required:!1,tsType:{name:"string"},description:""},collapseLabel:{required:!1,tsType:{name:"string"},description:""},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No reasoning steps captured."',computed:!1}},listAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Reasoning steps"',computed:!1}},listAriaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"AI/ReasoningPanel",component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"ReasoningPanel exposes collapsible model thinking steps with accessible expand/collapse semantics."}}},args:{title:"Model reasoning",steps:["Understand release scope","Group changes by area","Generate review-ready summary"]}},d={play:async({canvasElement:e})=>{const a=o(e),t=await a.findByRole("button",{name:"Expand reasoning panel: Model reasoning"});await n(t).toHaveAttribute("aria-expanded","false"),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await J.click(t),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-label","Collapse reasoning panel: Model reasoning"),await n(a.getByText("Understand release scope")).toBeInTheDocument()}},u={args:{defaultOpen:!0}},g={args:{defaultOpen:"true"},play:async({canvasElement:e})=>{const a=o(e),t=await a.findByRole("button",{name:"Expand reasoning panel: Model reasoning"});await n(t).toHaveAttribute("aria-expanded","false"),await n(a.queryByRole("list")).toBeNull()}},m={args:{steps:[]}},y={args:{title:"推理过程",steps:["收集上下文","梳理约束","输出执行计划"],expandLabel:"展开推理面板",collapseLabel:"收起推理面板",listAriaLabel:"推理步骤",emptyText:"暂无推理步骤。"},play:async({canvasElement:e})=>{const a=o(e),t=await a.findByRole("button",{name:"展开推理面板"});await J.click(t),await n(a.getByRole("button",{name:"收起推理面板"})).toHaveAttribute("aria-expanded","true"),await n(a.getByRole("list",{name:"推理步骤"})).toBeInTheDocument()}},f={render:()=>s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx("h3",{id:"reasoning-heading",style:{margin:0},children:"Reasoning timeline heading"}),s.jsx(v,{defaultOpen:!0,steps:["Gather requirements","Draft API contract"],listAriaLabel:"Fallback reasoning steps",listAriaLabelledBy:"reasoning-heading"})]}),play:async({canvasElement:e})=>{const t=await o(e).findByRole("list",{name:"Reasoning timeline heading"});await n(t).toHaveAttribute("aria-labelledby","reasoning-heading"),await n(t).not.toHaveAttribute("aria-label")}},b={render:()=>s.jsx(v,{defaultOpen:!0,steps:["   "],emptyText:"   "}),play:async({canvasElement:e})=>{const a=o(e);await n(a.getByText("No reasoning steps captured.")).toBeInTheDocument(),await n(a.getByRole("list",{name:"Reasoning steps"})).toBeInTheDocument()}};var L,k,N;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(k=d.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var H,D,S;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(S=(D=u.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var j,I,O;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultOpen: "true" as unknown as boolean
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole("button", {
      name: "Expand reasoning panel: Model reasoning"
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(canvas.queryByRole("list")).toBeNull();
  }
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var q,P,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps: []
  }
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var C,F,z;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(F=y.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var V,G,_;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(G=f.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var $,U,W;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(W=(U=b.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const ue=["Default","OpenByDefault","RuntimeBooleanConfigNormalization","EmptyFallback","LocalizedLabels","LabelledByPrecedence","BlankStepFallback"];export{b as BlankStepFallback,d as Default,m as EmptyFallback,f as LabelledByPrecedence,y as LocalizedLabels,u as OpenByDefault,g as RuntimeBooleanConfigNormalization,ue as __namedExportsOrder,de as default};
