import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as h,expect as u}from"./index-DgAF9SIF.js";function t({width:a="100%",height:n=16,radius:s,variant:i="rect",animated:v=!0,ariaLabel:m,ariaLabelledBy:p,style:q,...H}){const I=s??(i==="circle"?"9999px":i==="text"?"var(--aurora-radius-pill)":"var(--aurora-radius-sm)"),R=i==="circle"?a??n:a,D=i==="text"?n??14:n,g=typeof p=="string"&&p.trim().length>0?p.trim():void 0,y=g===void 0&&typeof m=="string"&&m.trim().length>0?m.trim():void 0,r=y!==void 0||g!==void 0;return e.jsx("div",{"data-aurora-reduced-motion":v?"animate":void 0,role:r?"status":void 0,"aria-label":y,"aria-labelledby":g,"aria-live":r?"polite":void 0,"aria-busy":r?!0:void 0,"aria-hidden":r?void 0:!0,style:{width:R,height:D,borderRadius:I,background:"linear-gradient(90deg, var(--aurora-skeleton-base) 0%, var(--aurora-skeleton-highlight) 50%, var(--aurora-skeleton-base) 100%)",backgroundSize:"200% 100%",animation:v?"aurora-skeleton-shimmer 1.2s ease-in-out infinite":void 0,...q},...H})}t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"rect" | "text" | "circle"',elements:[{name:"literal",value:'"rect"'},{name:"literal",value:'"text"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"rect"',computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Feedback/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Skeleton supports decorative and narrated loading states with shape variants and animation toggles."}}},args:{width:320,height:16}},l={play:async({canvasElement:a})=>{const s=h(a).getByTestId("story-skeleton-default");await u(s).toHaveAttribute("aria-hidden","true")},render:a=>e.jsx(t,{"data-testid":"story-skeleton-default",...a})},d={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{variant:"circle",width:42,height:42}),e.jsxs("div",{style:{display:"grid",gap:6,flex:1},children:[e.jsx(t,{variant:"text",width:"42%"}),e.jsx(t,{variant:"text",width:"68%"})]})]}),e.jsx(t,{height:96})]})},o={args:{width:360,height:18,ariaLabel:"Loading release list",animated:!1},play:async({canvasElement:a})=>{const n=h(a);await u(await n.findByRole("status",{name:"Loading release list"})).toBeInTheDocument()}},c={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[e.jsx("h3",{id:"skeleton-heading",style:{margin:0},children:"Loading release list heading"}),e.jsx(t,{width:360,height:18,animated:!1,ariaLabel:"Fallback loading release list",ariaLabelledBy:"skeleton-heading"})]}),play:async({canvasElement:a})=>{const s=await h(a).findByRole("status",{name:"Loading release list heading"});await u(s).toHaveAttribute("aria-labelledby","skeleton-heading"),await u(s).not.toHaveAttribute("aria-label")}};var f,b,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("story-skeleton-default");
    await expect(skeleton).toHaveAttribute("aria-hidden", "true");
  },
  render: args => <Skeleton data-testid="story-skeleton-default" {...args} />
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var k,x,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <div style={{
      display: "flex",
      gap: 12,
      alignItems: "center"
    }}>
        <Skeleton variant="circle" width={42} height={42} />
        <div style={{
        display: "grid",
        gap: 6,
        flex: 1
      }}>
          <Skeleton variant="text" width="42%" />
          <Skeleton variant="text" width="68%" />
        </div>
      </div>
      <Skeleton height={96} />
    </div>
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var L,j,B;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    width: 360,
    height: 18,
    ariaLabel: "Loading release list",
    animated: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("status", {
      name: "Loading release list"
    })).toBeInTheDocument();
  }
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var T,A,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 8
  }}>
      <h3 id="skeleton-heading" style={{
      margin: 0
    }}>
        Loading release list heading
      </h3>
      <Skeleton width={360} height={18} animated={false} ariaLabel="Fallback loading release list" ariaLabelledBy="skeleton-heading" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = await canvas.findByRole("status", {
      name: "Loading release list heading"
    });
    await expect(skeleton).toHaveAttribute("aria-labelledby", "skeleton-heading");
    await expect(skeleton).not.toHaveAttribute("aria-label");
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const F=["Default","ProfileCard","NarratedStatus","LabelledByPrecedence"];export{l as Default,c as LabelledByPrecedence,o as NarratedStatus,d as ProfileCard,F as __namedExportsOrder,_ as default};
