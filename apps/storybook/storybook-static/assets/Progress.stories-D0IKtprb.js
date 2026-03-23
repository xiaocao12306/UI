import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{within as g,expect as t}from"./index-DgAF9SIF.js";import{S as X}from"./storyShowcase-DlKirntE.js";const Y={default:"var(--aurora-accent-default)",success:"var(--aurora-color-green-500)",warning:"var(--aurora-color-amber-500)",danger:"var(--aurora-color-red-500)"},Z={sm:6,md:8};function ee(e,s,r){return Math.min(Math.max(e,s),r)}function V(e,s){return typeof e!="boolean"?s:e}function n({value:e=0,min:s=0,max:r=100,indeterminate:z=!1,tone:N="default",size:_="md",label:v="Progress",ariaLabel:b,ariaLabelledBy:f,valueText:h,showValueLabel:C=!1,style:$,...O}){const o=V(z,!1),G=V(C,!1),i=Number.isFinite(s)?s:0,y=Number.isFinite(r)&&r>i?r:i+100,x=ee(Number.isFinite(e)?e:i,i,y),S=(x-i)/(y-i)*100,J=typeof v=="string"&&v.trim().length>0?v.trim():"Progress",w=typeof f=="string"&&f.trim().length>0?f.trim():void 0,K=w===void 0&&typeof b=="string"&&b.trim().length>0?b.trim():void 0,Q=w?void 0:K??J,U=o?"Loading":`${Math.round(S)}%`,P=typeof h=="string"&&h.trim().length>0?h.trim():U;return a.jsxs("div",{style:{display:"grid",gap:6},children:[a.jsx("div",{role:"progressbar","aria-label":Q,"aria-labelledby":w,"aria-valuemin":i,"aria-valuemax":y,"aria-valuenow":o?void 0:x,"aria-valuetext":P,style:{position:"relative",width:"100%",height:Z[_],borderRadius:"var(--aurora-radius-pill)",background:"var(--aurora-surface-elevated)",overflow:"hidden",...$},...O,children:a.jsx("div",{"data-aurora-reduced-motion":o?"animate transform-reset":"transition",style:{width:o?"35%":`${S}%`,height:"100%",background:Y[N],transition:o?void 0:"width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",animation:o?"aurora-progress-indeterminate 1200ms ease-in-out infinite":void 0,willChange:o?"transform":void 0}})}),G?a.jsx("span",{style:{fontSize:"var(--aurora-font-size-xs)",color:"var(--aurora-text-secondary)"},children:P}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Progress"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},valueText:{required:!1,tsType:{name:"string"},description:""},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function l({children:e,maxWidth:s="min(100%, 360px)",gap:r=10}){return a.jsx(X,{maxWidth:s,gap:r,children:e})}const ne={title:"Feedback/Progress",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."}}},args:{value:62,label:"Deployment progress",showValueLabel:!0}},c={render:e=>a.jsx(l,{maxWidth:"min(100%, 320px)",children:a.jsx(n,{...e})}),play:async({canvasElement:e})=>{const s=g(e),r=await s.findByRole("progressbar",{name:"Deployment progress"});await t(r).toHaveAttribute("aria-valuenow","62"),await t(s.getByText("62%")).toBeInTheDocument()}},u={render:()=>a.jsxs(l,{gap:12,children:[a.jsx(n,{value:28,tone:"default",label:"Default progress",showValueLabel:!0}),a.jsx(n,{value:46,tone:"success",label:"Success progress",showValueLabel:!0}),a.jsx(n,{value:64,tone:"warning",label:"Warning progress",showValueLabel:!0}),a.jsx(n,{value:82,tone:"danger",label:"Danger progress",showValueLabel:!0})]})},d={args:{indeterminate:!0,valueText:"Syncing deployment artifacts",showValueLabel:!0},render:e=>a.jsx(l,{maxWidth:"min(100%, 320px)",children:a.jsx(n,{...e})}),play:async({canvasElement:e})=>{const r=await g(e).findByRole("progressbar",{name:"Deployment progress"});await t(r).not.toHaveAttribute("aria-valuenow"),await t(r).toHaveAttribute("aria-valuetext","Syncing deployment artifacts")}},p={args:{value:62,label:"Deployment progress",indeterminate:"true",showValueLabel:"true"},render:e=>a.jsx(l,{maxWidth:"min(100%, 320px)",children:a.jsx(n,{...e})}),play:async({canvasElement:e})=>{const s=g(e),r=await s.findByRole("progressbar",{name:"Deployment progress"});await t(r).toHaveAttribute("aria-valuenow","62"),await t(r).toHaveAttribute("aria-valuetext","62%"),await t(s.queryByText("62%")).not.toBeInTheDocument()}},m={render:()=>a.jsxs(l,{maxWidth:"min(100%, 320px)",children:[a.jsx("h3",{id:"progress-heading",style:{margin:0},children:"Release pipeline heading"}),a.jsx(n,{value:62,label:"Deployment progress",ariaLabel:"Fallback progress label",ariaLabelledBy:"progress-heading"})]}),play:async({canvasElement:e})=>{const r=await g(e).findByRole("progressbar",{name:"Release pipeline heading"});await t(r).toHaveAttribute("aria-labelledby","progress-heading"),await t(r).not.toHaveAttribute("aria-label")}};var L,T,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var j,D,A;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ProgressShowcase gap={12}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </ProgressShowcase>
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var R,H,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(H=d.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var E,W,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 62,
    label: "Deployment progress",
    indeterminate: "true" as unknown as boolean,
    showValueLabel: "true" as unknown as boolean
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
    await expect(progressbar).toHaveAttribute("aria-valuenow", "62");
    await expect(progressbar).toHaveAttribute("aria-valuetext", "62%");
    await expect(canvas.queryByText("62%")).not.toBeInTheDocument();
  }
}`,...(k=(W=p.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var M,F,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const te=["Default","ToneMatrix","Indeterminate","RuntimeBooleanConfigNormalization","LabelledByPrecedence"];export{c as Default,d as Indeterminate,m as LabelledByPrecedence,p as RuntimeBooleanConfigNormalization,u as ToneMatrix,te as __namedExportsOrder,ne as default};
