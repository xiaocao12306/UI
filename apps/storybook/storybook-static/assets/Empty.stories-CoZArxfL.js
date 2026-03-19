import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Button-CnyYpMYZ.js";import{r as p}from"./index-BWu4c2F4.js";import{within as R,expect as j}from"./index-DgAF9SIF.js";const S={default:{},info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-accent-default) 6%, var(--aurora-surface-default))"},warning:{borderColor:"color-mix(in srgb, var(--aurora-color-amber-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-amber-500) 8%, var(--aurora-surface-default))"},danger:{borderColor:"color-mix(in srgb, var(--aurora-color-red-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-red-500) 8%, var(--aurora-surface-default))"}};function t({title:a,description:r,action:n,icon:l,tone:E="default",align:N="center",titleAs:T="strong",role:B,style:C,...q}){const d=p.useId(),c=p.useId(),I=T,u=N==="center";return e.jsxs("div",{role:B??"status","aria-live":"polite","aria-labelledby":d,"aria-describedby":r?c:void 0,style:{border:"1px dashed var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",padding:24,display:"grid",justifyItems:u?"center":"start",gap:10,textAlign:u?"center":"left",...S[E],...C},...q,children:[l?e.jsx("div",{"aria-hidden":!0,children:l}):null,e.jsx(I,{id:d,style:{color:"var(--aurora-text-primary)",margin:0,fontSize:"var(--aurora-font-size-md)"},children:a}),r?e.jsx("p",{id:c,style:{color:"var(--aurora-text-secondary)",margin:0},children:r}):null,n?e.jsx("div",{children:n}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"default" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"center" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},titleAs:{required:!1,tsType:{name:"union",raw:'"h2" | "h3" | "h4" | "strong"',elements:[{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"strong"',computed:!1}}}};const _={title:"Feedback/Empty",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Empty provides accessible placeholder states with optional icon/action and tone guidance."}}},args:{title:"No releases yet",description:"Create your first release to start tracking rollout quality."}},o={render:a=>e.jsx("div",{style:{width:360},children:e.jsx(t,{...a})}),play:async({canvasElement:a})=>{const n=await R(a).findByRole("status");await j(n).toHaveTextContent("No releases yet")}},i={args:{icon:e.jsx("span",{"aria-hidden":!0,style:{fontSize:20},children:"🧭"}),action:e.jsx(D,{size:"sm",children:"Create release"})},render:a=>e.jsx("div",{style:{width:360},children:e.jsx(t,{...a})}),play:async({canvasElement:a})=>{const r=R(a);await j(await r.findByRole("button",{name:"Create release"})).toBeInTheDocument()}},s={render:()=>e.jsxs("div",{style:{width:420,display:"grid",gap:12},children:[e.jsx(t,{title:"Default",description:"Baseline empty state."}),e.jsx(t,{title:"Info",description:"No synced records yet.",tone:"info"}),e.jsx(t,{title:"Warning",description:"No eligible items for this filter.",tone:"warning"}),e.jsx(t,{title:"Danger",description:"No data returned due to request failure.",tone:"danger"})]})};var m,f,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 360
  }}>
      <Empty {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveTextContent("No releases yet");
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,g,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    icon: <span aria-hidden style={{
      fontSize: 20
    }}>🧭</span>,
    action: <Button size="sm">Create release</Button>
  },
  render: args => <div style={{
    width: 360
  }}>
      <Empty {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", {
      name: "Create release"
    })).toBeInTheDocument();
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,b,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 420,
    display: "grid",
    gap: 12
  }}>
      <Empty title="Default" description="Baseline empty state." />
      <Empty title="Info" description="No synced records yet." tone="info" />
      <Empty title="Warning" description="No eligible items for this filter." tone="warning" />
      <Empty title="Danger" description="No data returned due to request failure." tone="danger" />
    </div>
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const M=["Default","WithAction","ToneMatrix"];export{o as Default,s as ToneMatrix,i as WithAction,M as __namedExportsOrder,_ as default};
