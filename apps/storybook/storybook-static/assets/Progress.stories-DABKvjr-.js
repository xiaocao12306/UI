import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as T,expect as c}from"./index-DgAF9SIF.js";import{S as E}from"./storyShowcase-Bw5VyCj0.js";const H={default:"var(--aurora-accent-default)",success:"var(--aurora-color-green-500)",warning:"var(--aurora-color-amber-500)",danger:"var(--aurora-color-red-500)"},R={sm:6,md:8};function W(a,s,r){return Math.min(Math.max(a,s),r)}function t({value:a=0,min:s=0,max:r=100,indeterminate:n=!1,tone:j="default",size:D="md",label:L="Progress",valueText:q,showValueLabel:M=!1,style:B,...A}){const o=Number.isFinite(s)?s:0,d=Number.isFinite(r)&&r>o?r:o+100,m=W(Number.isFinite(a)?a:o,o,d),g=(m-o)/(d-o)*100,v=q??(n?"Loading":`${Math.round(g)}%`);return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsxs("div",{role:"progressbar","aria-label":L,"aria-valuemin":o,"aria-valuemax":d,"aria-valuenow":n?void 0:m,"aria-valuetext":v,style:{position:"relative",width:"100%",height:R[D],borderRadius:"var(--aurora-radius-pill)",background:"var(--aurora-surface-elevated)",overflow:"hidden",...B},...A,children:[n?e.jsx("style",{children:"@keyframes aurora-progress-indeterminate { 0% { transform: translateX(-110%); } 100% { transform: translateX(330%); } }"}):null,e.jsx("div",{style:{width:n?"35%":`${g}%`,height:"100%",background:H[j],transition:n?void 0:"width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",animation:n?"aurora-progress-indeterminate 1200ms ease-in-out infinite":void 0,willChange:n?"transform":void 0}})]}),M?e.jsx("span",{style:{fontSize:"var(--aurora-font-size-xs)",color:"var(--aurora-text-secondary)"},children:v}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Progress"',computed:!1}},valueText:{required:!1,tsType:{name:"string"},description:""},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function p({children:a,maxWidth:s="min(100%, 360px)",gap:r=10}){return e.jsx(E,{maxWidth:s,gap:r,children:a})}const z={title:"Feedback/Progress",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."}}},args:{value:62,label:"Deployment progress",showValueLabel:!0}},l={render:a=>e.jsx(p,{maxWidth:"min(100%, 320px)",children:e.jsx(t,{...a})}),play:async({canvasElement:a})=>{const s=T(a),r=await s.findByRole("progressbar",{name:"Deployment progress"});await c(r).toHaveAttribute("aria-valuenow","62"),await c(s.getByText("62%")).toBeInTheDocument()}},i={render:()=>e.jsxs(p,{gap:12,children:[e.jsx(t,{value:28,tone:"default",label:"Default progress",showValueLabel:!0}),e.jsx(t,{value:46,tone:"success",label:"Success progress",showValueLabel:!0}),e.jsx(t,{value:64,tone:"warning",label:"Warning progress",showValueLabel:!0}),e.jsx(t,{value:82,tone:"danger",label:"Danger progress",showValueLabel:!0})]})},u={args:{indeterminate:!0,valueText:"Syncing deployment artifacts",showValueLabel:!0},render:a=>e.jsx(p,{maxWidth:"min(100%, 320px)",children:e.jsx(t,{...a})}),play:async({canvasElement:a})=>{const r=await T(a).findByRole("progressbar",{name:"Deployment progress"});await c(r).not.toHaveAttribute("aria-valuenow"),await c(r).toHaveAttribute("aria-valuetext","Syncing deployment artifacts")}};var f,b,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <ProgressShowcase maxWidth="min(100%, 320px)">
      <Progress {...args} />
    </ProgressShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressbar = await canvas.findByRole("progressbar", {
      name: "Deployment progress"
    });
    await expect(progressbar).toHaveAttribute("aria-valuenow", "62");
    await expect(canvas.getByText("62%")).toBeInTheDocument();
  }
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ProgressShowcase gap={12}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </ProgressShowcase>
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,V,P;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    valueText: "Syncing deployment artifacts",
    showValueLabel: true
  },
  render: args => <ProgressShowcase maxWidth="min(100%, 320px)">
      <Progress {...args} />
    </ProgressShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressbar = await canvas.findByRole("progressbar", {
      name: "Deployment progress"
    });
    await expect(progressbar).not.toHaveAttribute("aria-valuenow");
    await expect(progressbar).toHaveAttribute("aria-valuetext", "Syncing deployment artifacts");
  }
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const N=["Default","ToneMatrix","Indeterminate"];export{l as Default,u as Indeterminate,i as ToneMatrix,N as __namedExportsOrder,z as default};
