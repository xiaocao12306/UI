import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Button-DmF53JnK.js";import{r as p}from"./index-BWu4c2F4.js";import{within as R,expect as j}from"./index-DgAF9SIF.js";import{S as W}from"./storyShowcase-Bw5VyCj0.js";const z={default:{},info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-accent-default) 6%, var(--aurora-surface-default))"},warning:{borderColor:"color-mix(in srgb, var(--aurora-color-amber-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-amber-500) 8%, var(--aurora-surface-default))"},danger:{borderColor:"color-mix(in srgb, var(--aurora-color-red-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-red-500) 8%, var(--aurora-surface-default))"}};function r({title:a,description:t,action:n,icon:c,tone:N="default",align:S="center",titleAs:T="strong",role:B,style:C,...q}){const d=p.useId(),u=p.useId(),I=T,m=S==="center";return e.jsxs("div",{role:B??"status","aria-live":"polite","aria-labelledby":d,"aria-describedby":t?u:void 0,style:{border:"1px dashed var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",padding:24,display:"grid",justifyItems:m?"center":"start",gap:10,textAlign:m?"center":"left",...z[N],...C},...q,children:[c?e.jsx("div",{"aria-hidden":!0,children:c}):null,e.jsx(I,{id:d,style:{color:"var(--aurora-text-primary)",margin:0,fontSize:"var(--aurora-font-size-md)"},children:a}),t?e.jsx("p",{id:u,style:{color:"var(--aurora-text-secondary)",margin:0},children:t}):null,n?e.jsx("div",{children:n}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"default" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"center" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},titleAs:{required:!1,tsType:{name:"union",raw:'"h2" | "h3" | "h4" | "strong"',elements:[{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"strong"',computed:!1}}}};function l({children:a,maxWidth:t="min(100%, 420px)",gap:n=10}){return e.jsx(W,{maxWidth:t,gap:n,children:a})}const F={title:"Feedback/Empty",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Empty provides accessible placeholder states with optional icon/action and tone guidance."}}},args:{title:"No releases yet",description:"Create your first release to start tracking rollout quality."}},o={render:a=>e.jsx(l,{maxWidth:"min(100%, 360px)",children:e.jsx(r,{...a})}),play:async({canvasElement:a})=>{const n=await R(a).findByRole("status");await j(n).toHaveTextContent("No releases yet")}},s={args:{icon:e.jsx("span",{"aria-hidden":!0,style:{fontSize:20},children:"🧭"}),action:e.jsx(D,{size:"sm",children:"Create release"})},render:a=>e.jsx(l,{maxWidth:"min(100%, 360px)",children:e.jsx(r,{...a})}),play:async({canvasElement:a})=>{const t=R(a);await j(await t.findByRole("button",{name:"Create release"})).toBeInTheDocument()}},i={render:()=>e.jsxs(l,{gap:12,children:[e.jsx(r,{title:"Default",description:"Baseline empty state."}),e.jsx(r,{title:"Info",description:"No synced records yet.",tone:"info"}),e.jsx(r,{title:"Warning",description:"No eligible items for this filter.",tone:"warning"}),e.jsx(r,{title:"Danger",description:"No data returned due to request failure.",tone:"danger"})]})};var f,y,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty {...args} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveTextContent("No releases yet");
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    icon: <span aria-hidden style={{
      fontSize: 20
    }}>🧭</span>,
    action: <Button size="sm">Create release</Button>
  },
  render: args => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty {...args} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", {
      name: "Create release"
    })).toBeInTheDocument();
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,b,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <EmptyShowcase gap={12}>
      <Empty title="Default" description="Baseline empty state." />
      <Empty title="Info" description="No synced records yet." tone="info" />
      <Empty title="Warning" description="No eligible items for this filter." tone="warning" />
      <Empty title="Danger" description="No data returned due to request failure." tone="danger" />
    </EmptyShowcase>
}`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const H=["Default","WithAction","ToneMatrix"];export{o as Default,i as ToneMatrix,s as WithAction,H as __namedExportsOrder,F as default};
