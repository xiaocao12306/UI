import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as y,expect as l}from"./index-DgAF9SIF.js";import{S as C}from"./storyShowcase-DlKirntE.js";const O={default:"var(--aurora-accent-default)",success:"var(--aurora-color-green-500)",warning:"var(--aurora-color-amber-500)",danger:"var(--aurora-color-red-500)"},G={sm:6,md:8};function J(a,s,r){return Math.min(Math.max(a,s),r)}function n({value:a=0,min:s=0,max:r=100,indeterminate:t=!1,tone:E="default",size:W="md",label:m="Progress",ariaLabel:g,ariaLabelledBy:v,valueText:b,showValueLabel:k=!1,style:F,...I}){const o=Number.isFinite(s)?s:0,f=Number.isFinite(r)&&r>o?r:o+100,w=J(Number.isFinite(a)?a:o,o,f),x=(w-o)/(f-o)*100,z=typeof m=="string"&&m.trim().length>0?m.trim():"Progress",h=typeof v=="string"&&v.trim().length>0?v.trim():void 0,N=h===void 0&&typeof g=="string"&&g.trim().length>0?g.trim():void 0,_=h?void 0:N??z,$=t?"Loading":`${Math.round(x)}%`,P=typeof b=="string"&&b.trim().length>0?b.trim():$;return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx("div",{role:"progressbar","aria-label":_,"aria-labelledby":h,"aria-valuemin":o,"aria-valuemax":f,"aria-valuenow":t?void 0:w,"aria-valuetext":P,style:{position:"relative",width:"100%",height:G[W],borderRadius:"var(--aurora-radius-pill)",background:"var(--aurora-surface-elevated)",overflow:"hidden",...F},...I,children:e.jsx("div",{"data-aurora-reduced-motion":t?"animate transform-reset":"transition",style:{width:t?"35%":`${x}%`,height:"100%",background:O[E],transition:t?void 0:"width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",animation:t?"aurora-progress-indeterminate 1200ms ease-in-out infinite":void 0,willChange:t?"transform":void 0}})}),k?e.jsx("span",{style:{fontSize:"var(--aurora-font-size-xs)",color:"var(--aurora-text-secondary)"},children:P}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Progress"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},valueText:{required:!1,tsType:{name:"string"},description:""},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function p({children:a,maxWidth:s="min(100%, 360px)",gap:r=10}){return e.jsx(C,{maxWidth:s,gap:r,children:a})}const X={title:"Feedback/Progress",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."}}},args:{value:62,label:"Deployment progress",showValueLabel:!0}},i={render:a=>e.jsx(p,{maxWidth:"min(100%, 320px)",children:e.jsx(n,{...a})}),play:async({canvasElement:a})=>{const s=y(a),r=await s.findByRole("progressbar",{name:"Deployment progress"});await l(r).toHaveAttribute("aria-valuenow","62"),await l(s.getByText("62%")).toBeInTheDocument()}},c={render:()=>e.jsxs(p,{gap:12,children:[e.jsx(n,{value:28,tone:"default",label:"Default progress",showValueLabel:!0}),e.jsx(n,{value:46,tone:"success",label:"Success progress",showValueLabel:!0}),e.jsx(n,{value:64,tone:"warning",label:"Warning progress",showValueLabel:!0}),e.jsx(n,{value:82,tone:"danger",label:"Danger progress",showValueLabel:!0})]})},u={args:{indeterminate:!0,valueText:"Syncing deployment artifacts",showValueLabel:!0},render:a=>e.jsx(p,{maxWidth:"min(100%, 320px)",children:e.jsx(n,{...a})}),play:async({canvasElement:a})=>{const r=await y(a).findByRole("progressbar",{name:"Deployment progress"});await l(r).not.toHaveAttribute("aria-valuenow"),await l(r).toHaveAttribute("aria-valuetext","Syncing deployment artifacts")}},d={render:()=>e.jsxs(p,{maxWidth:"min(100%, 320px)",children:[e.jsx("h3",{id:"progress-heading",style:{margin:0},children:"Release pipeline heading"}),e.jsx(n,{value:62,label:"Deployment progress",ariaLabel:"Fallback progress label",ariaLabelledBy:"progress-heading"})]}),play:async({canvasElement:a})=>{const r=await y(a).findByRole("progressbar",{name:"Release pipeline heading"});await l(r).toHaveAttribute("aria-labelledby","progress-heading"),await l(r).not.toHaveAttribute("aria-label")}};var S,V,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(V=i.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var T,j,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ProgressShowcase gap={12}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </ProgressShowcase>
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var B,A,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var q,H,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Y=["Default","ToneMatrix","Indeterminate","LabelledByPrecedence"];export{i as Default,u as Indeterminate,d as LabelledByPrecedence,c as ToneMatrix,Y as __namedExportsOrder,X as default};
