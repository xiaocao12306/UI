import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as j,expect as d}from"./index-DgAF9SIF.js";const A={default:"var(--aurora-accent-default)",success:"var(--aurora-color-green-500)",warning:"var(--aurora-color-amber-500)",danger:"var(--aurora-color-red-500)"},E={sm:6,md:8};function H(a,s,r){return Math.min(Math.max(a,s),r)}function t({value:a=0,min:s=0,max:r=100,indeterminate:n=!1,tone:D="default",size:L="md",label:P="Progress",valueText:S,showValueLabel:q=!1,style:M,...B}){const o=Number.isFinite(s)?s:0,c=Number.isFinite(r)&&r>o?r:o+100,p=H(Number.isFinite(a)?a:o,o,c),m=(p-o)/(c-o)*100,g=S??(n?"Loading":`${Math.round(m)}%`);return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsxs("div",{role:"progressbar","aria-label":P,"aria-valuemin":o,"aria-valuemax":c,"aria-valuenow":n?void 0:p,"aria-valuetext":g,style:{position:"relative",width:"100%",height:E[L],borderRadius:"var(--aurora-radius-pill)",background:"var(--aurora-surface-elevated)",overflow:"hidden",...M},...B,children:[n?e.jsx("style",{children:"@keyframes aurora-progress-indeterminate { 0% { transform: translateX(-110%); } 100% { transform: translateX(330%); } }"}):null,e.jsx("div",{style:{width:n?"35%":`${m}%`,height:"100%",background:A[D],transition:n?void 0:"width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",animation:n?"aurora-progress-indeterminate 1200ms ease-in-out infinite":void 0,willChange:n?"transform":void 0}})]}),q?e.jsx("span",{style:{fontSize:"var(--aurora-font-size-xs)",color:"var(--aurora-text-secondary)"},children:g}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Progress"',computed:!1}},valueText:{required:!1,tsType:{name:"string"},description:""},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const k={title:"Feedback/Progress",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."}}},args:{value:62,label:"Deployment progress",showValueLabel:!0}},l={render:a=>e.jsx("div",{style:{width:320},children:e.jsx(t,{...a})}),play:async({canvasElement:a})=>{const s=j(a),r=await s.findByRole("progressbar",{name:"Deployment progress"});await d(r).toHaveAttribute("aria-valuenow","62"),await d(s.getByText("62%")).toBeInTheDocument()}},i={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsx(t,{value:28,tone:"default",label:"Default progress",showValueLabel:!0}),e.jsx(t,{value:46,tone:"success",label:"Success progress",showValueLabel:!0}),e.jsx(t,{value:64,tone:"warning",label:"Warning progress",showValueLabel:!0}),e.jsx(t,{value:82,tone:"danger",label:"Danger progress",showValueLabel:!0})]})},u={args:{indeterminate:!0,valueText:"Syncing deployment artifacts",showValueLabel:!0},render:a=>e.jsx("div",{style:{width:320},children:e.jsx(t,{...a})}),play:async({canvasElement:a})=>{const r=await j(a).findByRole("progressbar",{name:"Deployment progress"});await d(r).not.toHaveAttribute("aria-valuenow"),await d(r).toHaveAttribute("aria-valuetext","Syncing deployment artifacts")}};var v,f,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 320
  }}>
      <Progress {...args} />
    </div>,
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
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,w,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </div>
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var x,V,T;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    valueText: "Syncing deployment artifacts",
    showValueLabel: true
  },
  render: args => <div style={{
    width: 320
  }}>
      <Progress {...args} />
    </div>,
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
}`,...(T=(V=u.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const z=["Default","ToneMatrix","Indeterminate"];export{l as Default,u as Indeterminate,i as ToneMatrix,z as __namedExportsOrder,k as default};
