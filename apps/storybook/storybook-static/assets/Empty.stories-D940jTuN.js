import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as M}from"./Button-DirECuRH.js";import{r as m}from"./index-BWu4c2F4.js";import{within as p,expect as d}from"./index-DgAF9SIF.js";import{S as O}from"./storyShowcase-Bw5VyCj0.js";const F={default:{},info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-accent-default) 6%, var(--aurora-surface-default))"},warning:{borderColor:"color-mix(in srgb, var(--aurora-color-amber-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-amber-500) 8%, var(--aurora-surface-default))"},danger:{borderColor:"color-mix(in srgb, var(--aurora-color-red-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-red-500) 8%, var(--aurora-surface-default))"}};function r({title:e,description:t,action:n,icon:y,tone:A="default",align:I="center",titleAs:W="strong",role:D,style:z,...k}){const f=m.useId(),g=m.useId(),H=W,h=I==="center",x=l(t),V=l(n),_=l(y);return a.jsxs("div",{role:D??"status","aria-live":"polite","aria-labelledby":f,"aria-describedby":x?g:void 0,style:{border:"1px dashed var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",padding:24,display:"grid",justifyItems:h?"center":"start",gap:10,textAlign:h?"center":"left",...F[A],...z},...k,children:[_?a.jsx("div",{"aria-hidden":!0,children:y}):null,a.jsx(H,{id:f,style:{color:"var(--aurora-text-primary)",margin:0,fontSize:"var(--aurora-font-size-md)"},children:e}),x?a.jsx("p",{id:g,style:{color:"var(--aurora-text-secondary)",margin:0},children:t}):null,V?a.jsx("div",{children:n}):null]})}function l(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>l(t)):m.isValidElement(e)}r.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"default" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"center" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},titleAs:{required:!1,tsType:{name:"union",raw:'"h2" | "h3" | "h4" | "strong"',elements:[{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"strong"',computed:!1}}}};function u({children:e,maxWidth:t="min(100%, 420px)",gap:n=10}){return a.jsx(O,{maxWidth:t,gap:n,children:e})}const Q={title:"Feedback/Empty",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Empty provides accessible placeholder states with optional icon/action and tone guidance."}}},args:{title:"No releases yet",description:"Create your first release to start tracking rollout quality."}},o={render:e=>a.jsx(u,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const n=await p(e).findByRole("status");await d(n).toHaveTextContent("No releases yet")}},s={args:{icon:a.jsx("span",{"aria-hidden":!0,style:{fontSize:20},children:"🧭"}),action:a.jsx(M,{size:"sm",children:"Create release"})},render:e=>a.jsx(u,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const t=p(e);await d(await t.findByRole("button",{name:"Create release"})).toBeInTheDocument()}},i={render:()=>a.jsxs(u,{gap:12,children:[a.jsx(r,{title:"Default",description:"Baseline empty state."}),a.jsx(r,{title:"Info",description:"No synced records yet.",tone:"info"}),a.jsx(r,{title:"Warning",description:"No eligible items for this filter.",tone:"warning"}),a.jsx(r,{title:"Danger",description:"No data returned due to request failure.",tone:"danger"})]})},c={render:()=>a.jsx(u,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{title:"No numeric telemetry",description:0,action:0,icon:0})}),play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("status");await d(n).toHaveAttribute("aria-describedby"),await d(t.getAllByText("0").length).toBeGreaterThanOrEqual(3)}};var v,w,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var E,R,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var j,S,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <EmptyShowcase gap={12}>
      <Empty title="Default" description="Baseline empty state." />
      <Empty title="Info" description="No synced records yet." tone="info" />
      <Empty title="Warning" description="No eligible items for this filter." tone="warning" />
      <Empty title="Danger" description="No data returned due to request failure." tone="danger" />
    </EmptyShowcase>
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,C,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty title="No numeric telemetry" description={0} action={0} icon={0} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveAttribute("aria-describedby");
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(3);
  }
}`,...(q=(C=c.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const U=["Default","WithAction","ToneMatrix","NumericContentSemantics"];export{o as Default,c as NumericContentSemantics,i as ToneMatrix,s as WithAction,U as __namedExportsOrder,Q as default};
