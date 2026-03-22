import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as h,expect as l}from"./index-DgAF9SIF.js";import{S as $}from"./storyShowcase-Bw5VyCj0.js";const C={default:"var(--aurora-accent-default)",success:"var(--aurora-color-green-500)",warning:"var(--aurora-color-amber-500)",danger:"var(--aurora-color-red-500)"},O={sm:6,md:8};function G(a,s,r){return Math.min(Math.max(a,s),r)}function n({value:a=0,min:s=0,max:r=100,indeterminate:t=!1,tone:M="default",size:E="md",label:m="Progress",ariaLabel:g,ariaLabelledBy:v,valueText:W,showValueLabel:F=!1,style:k,...I}){const o=Number.isFinite(s)?s:0,b=Number.isFinite(r)&&r>o?r:o+100,y=G(Number.isFinite(a)?a:o,o,b),w=(y-o)/(b-o)*100,z=typeof m=="string"&&m.trim().length>0?m.trim():"Progress",f=typeof v=="string"&&v.trim().length>0?v.trim():void 0,N=f===void 0&&typeof g=="string"&&g.trim().length>0?g.trim():void 0,_=f?void 0:N??z,x=W??(t?"Loading":`${Math.round(w)}%`);return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("div",{role:"progressbar","aria-label":_,"aria-labelledby":f,"aria-valuemin":o,"aria-valuemax":b,"aria-valuenow":t?void 0:y,"aria-valuetext":x,style:{position:"relative",width:"100%",height:O[E],borderRadius:"var(--aurora-radius-pill)",background:"var(--aurora-surface-elevated)",overflow:"hidden",...k},...I,children:e.jsx("div",{"data-aurora-reduced-motion":t?"animate transform-reset":"transition",style:{width:t?"35%":`${w}%`,height:"100%",background:C[M],transition:t?void 0:"width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",animation:t?"aurora-progress-indeterminate 1200ms ease-in-out infinite":void 0,willChange:t?"transform":void 0}})}),F?e.jsx("span",{style:{fontSize:"var(--aurora-font-size-xs)",color:"var(--aurora-text-secondary)"},children:x}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Progress"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},valueText:{required:!1,tsType:{name:"string"},description:""},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function p({children:a,maxWidth:s="min(100%, 360px)",gap:r=10}){return e.jsx($,{maxWidth:s,gap:r,children:a})}const U={title:"Feedback/Progress",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."}}},args:{value:62,label:"Deployment progress",showValueLabel:!0}},i={render:a=>e.jsx(p,{maxWidth:"min(100%, 320px)",children:e.jsx(n,{...a})}),play:async({canvasElement:a})=>{const s=h(a),r=await s.findByRole("progressbar",{name:"Deployment progress"});await l(r).toHaveAttribute("aria-valuenow","62"),await l(s.getByText("62%")).toBeInTheDocument()}},u={render:()=>e.jsxs(p,{gap:12,children:[e.jsx(n,{value:28,tone:"default",label:"Default progress",showValueLabel:!0}),e.jsx(n,{value:46,tone:"success",label:"Success progress",showValueLabel:!0}),e.jsx(n,{value:64,tone:"warning",label:"Warning progress",showValueLabel:!0}),e.jsx(n,{value:82,tone:"danger",label:"Danger progress",showValueLabel:!0})]})},c={args:{indeterminate:!0,valueText:"Syncing deployment artifacts",showValueLabel:!0},render:a=>e.jsx(p,{maxWidth:"min(100%, 320px)",children:e.jsx(n,{...a})}),play:async({canvasElement:a})=>{const r=await h(a).findByRole("progressbar",{name:"Deployment progress"});await l(r).not.toHaveAttribute("aria-valuenow"),await l(r).toHaveAttribute("aria-valuetext","Syncing deployment artifacts")}},d={render:()=>e.jsxs(p,{maxWidth:"min(100%, 320px)",children:[e.jsx("h3",{id:"progress-heading",style:{margin:0},children:"Release pipeline heading"}),e.jsx(n,{value:62,label:"Deployment progress",ariaLabel:"Fallback progress label",ariaLabelledBy:"progress-heading"})]}),play:async({canvasElement:a})=>{const r=await h(a).findByRole("progressbar",{name:"Release pipeline heading"});await l(r).toHaveAttribute("aria-labelledby","progress-heading"),await l(r).not.toHaveAttribute("aria-label")}};var P,S,V;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var L,T,j;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ProgressShowcase gap={12}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </ProgressShowcase>
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var D,B,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var R,q,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ProgressShowcase maxWidth="min(100%, 320px)">
      <h3 id="progress-heading" style={{
      margin: 0
    }}>
        Release pipeline heading
      </h3>
      <Progress value={62} label="Deployment progress" ariaLabel="Fallback progress label" ariaLabelledBy="progress-heading" />
    </ProgressShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressbar = await canvas.findByRole("progressbar", {
      name: "Release pipeline heading"
    });
    await expect(progressbar).toHaveAttribute("aria-labelledby", "progress-heading");
    await expect(progressbar).not.toHaveAttribute("aria-label");
  }
}`,...(H=(q=d.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const X=["Default","ToneMatrix","Indeterminate","LabelledByPrecedence"];export{i as Default,c as Indeterminate,d as LabelledByPrecedence,u as ToneMatrix,X as __namedExportsOrder,U as default};
