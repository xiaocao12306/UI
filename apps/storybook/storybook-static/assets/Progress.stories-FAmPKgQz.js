import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{within as c,expect as t}from"./index-DgAF9SIF.js";import{S as se}from"./storyShowcase-DlKirntE.js";const ne={default:"var(--aurora-accent-default)",success:"var(--aurora-color-green-500)",warning:"var(--aurora-color-amber-500)",danger:"var(--aurora-color-red-500)"},te={sm:6,md:8};function oe(e,r,a){return Math.min(Math.max(e,r),a)}function B(e,r){return typeof e!="boolean"?r:e}function ie(e,r){if(typeof e=="string"){const a=e.trim().toLowerCase();if(a==="default"||a==="success"||a==="warning"||a==="danger")return a}return r}function le(e,r){if(typeof e=="string"){const a=e.trim().toLowerCase();if(a==="sm"||a==="md")return a}return r}function n({value:e=0,min:r=0,max:a=100,indeterminate:v=!1,tone:$="default",size:O="md",label:f="Progress",ariaLabel:h,ariaLabelledBy:y,valueText:w,showValueLabel:G=!1,style:J,...K}){const o=B(v,!1),Q=B(G,!1),X=ie($,"default"),Y=le(O,"md"),i=Number.isFinite(r)?r:0,x=Number.isFinite(a)&&a>i?a:i+100,P=oe(Number.isFinite(e)?e:i,i,x),R=(P-i)/(x-i)*100,Z=typeof f=="string"&&f.trim().length>0?f.trim():"Progress",S=typeof y=="string"&&y.trim().length>0?y.trim():void 0,ee=S===void 0&&typeof h=="string"&&h.trim().length>0?h.trim():void 0,ae=S?void 0:ee??Z,re=o?"Loading":`${Math.round(R)}%`,V=typeof w=="string"&&w.trim().length>0?w.trim():re;return s.jsxs("div",{style:{display:"grid",gap:6},children:[s.jsx("div",{role:"progressbar","aria-label":ae,"aria-labelledby":S,"aria-valuemin":i,"aria-valuemax":x,"aria-valuenow":o?void 0:P,"aria-valuetext":V,style:{position:"relative",width:"100%",height:te[Y],borderRadius:"var(--aurora-radius-pill)",background:"var(--aurora-surface-elevated)",overflow:"hidden",...J},...K,children:s.jsx("div",{"data-aurora-reduced-motion":o?"animate transform-reset":"transition",style:{width:o?"35%":`${R}%`,height:"100%",background:ne[X],transition:o?void 0:"width var(--aurora-motion-duration-normal) var(--aurora-motion-easing-standard)",animation:o?"aurora-progress-indeterminate 1200ms ease-in-out infinite":void 0,willChange:o?"transform":void 0}})}),Q?s.jsx("span",{style:{fontSize:"var(--aurora-font-size-xs)",color:"var(--aurora-text-secondary)"},children:V}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Progress"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},valueText:{required:!1,tsType:{name:"string"},description:""},showValueLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function l({children:e,maxWidth:r="min(100%, 360px)",gap:a=10}){return s.jsx(se,{maxWidth:r,gap:a,children:e})}const pe={title:"Feedback/Progress",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Progress supports determinate and indeterminate states with semantic aria labels and optional helper value text."}}},args:{value:62,label:"Deployment progress",showValueLabel:!0}},u={render:e=>s.jsx(l,{maxWidth:"min(100%, 320px)",children:s.jsx(n,{...e})}),play:async({canvasElement:e})=>{const r=c(e),a=await r.findByRole("progressbar",{name:"Deployment progress"});await t(a).toHaveAttribute("aria-valuenow","62"),await t(r.getByText("62%")).toBeInTheDocument()}},d={render:()=>s.jsxs(l,{gap:12,children:[s.jsx(n,{value:28,tone:"default",label:"Default progress",showValueLabel:!0}),s.jsx(n,{value:46,tone:"success",label:"Success progress",showValueLabel:!0}),s.jsx(n,{value:64,tone:"warning",label:"Warning progress",showValueLabel:!0}),s.jsx(n,{value:82,tone:"danger",label:"Danger progress",showValueLabel:!0})]})},p={args:{indeterminate:!0,valueText:"Syncing deployment artifacts",showValueLabel:!0},render:e=>s.jsx(l,{maxWidth:"min(100%, 320px)",children:s.jsx(n,{...e})}),play:async({canvasElement:e})=>{const a=await c(e).findByRole("progressbar",{name:"Deployment progress"});await t(a).not.toHaveAttribute("aria-valuenow"),await t(a).toHaveAttribute("aria-valuetext","Syncing deployment artifacts")}},m={args:{value:62,label:"Deployment progress",indeterminate:"true",showValueLabel:"true"},render:e=>s.jsx(l,{maxWidth:"min(100%, 320px)",children:s.jsx(n,{...e})}),play:async({canvasElement:e})=>{const r=c(e),a=await r.findByRole("progressbar",{name:"Deployment progress"});await t(a).toHaveAttribute("aria-valuenow","62"),await t(a).toHaveAttribute("aria-valuetext","62%"),await t(r.queryByText("62%")).not.toBeInTheDocument()}},g={render:()=>s.jsxs(l,{maxWidth:"min(100%, 320px)",children:[s.jsx(n,{value:62,label:"Runtime normalized progress",tone:" SUCCESS ",size:" SM "}),s.jsx(n,{value:62,label:"Runtime fallback progress",tone:"critical",size:"large"})]}),play:async({canvasElement:e})=>{const r=c(e),a=await r.findByRole("progressbar",{name:"Runtime normalized progress"});await t(a).toHaveStyle({height:"6px"});const v=await r.findByRole("progressbar",{name:"Runtime fallback progress"});await t(v).toHaveStyle({height:"8px"})}},b={render:()=>s.jsxs(l,{maxWidth:"min(100%, 320px)",children:[s.jsx("h3",{id:"progress-heading",style:{margin:0},children:"Release pipeline heading"}),s.jsx(n,{value:62,label:"Deployment progress",ariaLabel:"Fallback progress label",ariaLabelledBy:"progress-heading"})]}),play:async({canvasElement:e})=>{const a=await c(e).findByRole("progressbar",{name:"Release pipeline heading"});await t(a).toHaveAttribute("aria-labelledby","progress-heading"),await t(a).not.toHaveAttribute("aria-label")}};var L,T,j;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(T=u.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var z,D,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ProgressShowcase gap={12}>
      <Progress value={28} tone="default" label="Default progress" showValueLabel />
      <Progress value={46} tone="success" label="Success progress" showValueLabel />
      <Progress value={64} tone="warning" label="Warning progress" showValueLabel />
      <Progress value={82} tone="danger" label="Danger progress" showValueLabel />
    </ProgressShowcase>
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var H,A,E;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var q,W,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(W=m.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var M,F,I;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ProgressShowcase maxWidth="min(100%, 320px)">
      <Progress value={62} label="Runtime normalized progress" tone={" SUCCESS " as unknown as "success"} size={" SM " as unknown as "sm"} />
      <Progress value={62} label="Runtime fallback progress" tone={"critical" as unknown as "default"} size={"large" as unknown as "md"} />
    </ProgressShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const normalizedProgressbar = await canvas.findByRole("progressbar", {
      name: "Runtime normalized progress"
    });
    await expect(normalizedProgressbar).toHaveStyle({
      height: "6px"
    });
    const fallbackProgressbar = await canvas.findByRole("progressbar", {
      name: "Runtime fallback progress"
    });
    await expect(fallbackProgressbar).toHaveStyle({
      height: "8px"
    });
  }
}`,...(I=(F=g.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var N,_,U;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(_=b.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const me=["Default","ToneMatrix","Indeterminate","RuntimeBooleanConfigNormalization","RuntimeVisualConfigNormalization","LabelledByPrecedence"];export{u as Default,p as Indeterminate,b as LabelledByPrecedence,m as RuntimeBooleanConfigNormalization,g as RuntimeVisualConfigNormalization,d as ToneMatrix,me as __namedExportsOrder,pe as default};
