import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as j,expect as c}from"./index-DgAF9SIF.js";import{S as H}from"./storyShowcase-Bw5VyCj0.js";const R={default:"var(--aurora-accent-default)",success:"var(--aurora-color-green-500)",warning:"var(--aurora-color-amber-500)",danger:"var(--aurora-color-red-500)"},W={sm:6,md:8};function F(a,s,r){return Math.min(Math.max(a,s),r)}function n({value:a=0,min:s=0,max:r=100,indeterminate:t=!1,tone:L="default",size:D="md",label:d="Progress",valueText:q,showValueLabel:M=!1,style:B,...A}){const o=Number.isFinite(s)?s:0,p=Number.isFinite(r)&&r>o?r:o+100,g=F(Number.isFinite(a)?a:o,o,p),v=(g-o)/(p-o)*100,E=typeof d=="string"&&d.trim().length>0?d.trim():"Progress",f=q??(t?"Loading":`${Math.round(v)}%`);return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsxs("div",{role:"progressbar","aria-label":E,"aria-valuemin":o,"aria-valuemax":p,"aria-valuenow":t?void 0:g,"aria-valuetext":f,style:{position:"relative",width:"100%",height:W[D],borderRadius:"var(--aurora-radius-pill)",background:"var(--aurora-surface-elevated)",overflow:"hidden",...B},...A,children:[t?e.jsx("style",{children:"@keyframes aurora-progress-indeterminate { 0% { transform: translateX(-110%); } 100% { transform: translateX(330%); } }"}):null,e.jsx("div",{"data-aurora-reduced-motion":t?"animate transform-reset":"transition",style:{width:t?"35%":`${v}%`,height:"100%",background:R[L],transition:t?void 0:"width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",animation:t?"aurora-progress-indeterminate 1200ms ease-in-out infinite":void 0,willChange:t?"transform":void 0}})]}),M?e.jsx("span",{style:{fontSize:"var(--aurora-font-size-xs)",color:"var(--aurora-text-secondary)"},children:f}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Progress"',computed:!1}},valueText:{required:!1,tsType:{name:"string"},description:""},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function m({children:a,maxWidth:s="min(100%, 360px)",gap:r=10}){return e.jsx(H,{maxWidth:s,gap:r,children:a})}const N={title:"Feedback/Progress",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."}}},args:{value:62,label:"Deployment progress",showValueLabel:!0}},l={render:a=>e.jsx(m,{maxWidth:"min(100%, 320px)",children:e.jsx(n,{...a})}),play:async({canvasElement:a})=>{const s=j(a),r=await s.findByRole("progressbar",{name:"Deployment progress"});await c(r).toHaveAttribute("aria-valuenow","62"),await c(s.getByText("62%")).toBeInTheDocument()}},i={render:()=>e.jsxs(m,{gap:12,children:[e.jsx(n,{value:28,tone:"default",label:"Default progress",showValueLabel:!0}),e.jsx(n,{value:46,tone:"success",label:"Success progress",showValueLabel:!0}),e.jsx(n,{value:64,tone:"warning",label:"Warning progress",showValueLabel:!0}),e.jsx(n,{value:82,tone:"danger",label:"Danger progress",showValueLabel:!0})]})},u={args:{indeterminate:!0,valueText:"Syncing deployment artifacts",showValueLabel:!0},render:a=>e.jsx(m,{maxWidth:"min(100%, 320px)",children:e.jsx(n,{...a})}),play:async({canvasElement:a})=>{const r=await j(a).findByRole("progressbar",{name:"Deployment progress"});await c(r).not.toHaveAttribute("aria-valuenow"),await c(r).toHaveAttribute("aria-valuetext","Syncing deployment artifacts")}};var b,w,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(w=l.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var x,y,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ProgressShowcase gap={12}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </ProgressShowcase>
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var V,P,T;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(P=u.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const _=["Default","ToneMatrix","Indeterminate"];export{l as Default,u as Indeterminate,i as ToneMatrix,_ as __namedExportsOrder,N as default};
