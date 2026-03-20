import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as k,expect as b}from"./index-DgAF9SIF.js";function t({width:a="100%",height:n=16,radius:l,variant:s="rect",animated:u=!0,ariaLabel:c,style:S,...j}){const T=l??(s==="circle"?"9999px":s==="text"?"var(--aurora-radius-pill)":"var(--aurora-radius-sm)"),I=s==="circle"?a??n:a,q=s==="text"?n??14:n,r=typeof c=="string"&&c.trim().length>0?c.trim():void 0;return e.jsx("div",{"data-aurora-reduced-motion":u?"animate":void 0,role:r?"status":void 0,"aria-label":r,"aria-live":r?"polite":void 0,"aria-busy":r?!0:void 0,"aria-hidden":r?void 0:!0,style:{width:I,height:q,borderRadius:T,background:"linear-gradient(90deg, var(--aurora-skeleton-base) 0%, var(--aurora-skeleton-highlight) 50%, var(--aurora-skeleton-base) 100%)",backgroundSize:"200% 100%",animation:u?"aurora-skeleton-shimmer 1.2s ease-in-out infinite":void 0,...S},...j})}t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"rect" | "text" | "circle"',elements:[{name:"literal",value:'"rect"'},{name:"literal",value:'"text"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"rect"',computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Feedback/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Skeleton supports decorative and narrated loading states with shape variants and animation toggles."}}},args:{width:320,height:16}},i={play:async({canvasElement:a})=>{const l=k(a).getByTestId("story-skeleton-default");await b(l).toHaveAttribute("aria-hidden","true")},render:a=>e.jsx(t,{"data-testid":"story-skeleton-default",...a})},o={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{variant:"circle",width:42,height:42}),e.jsxs("div",{style:{display:"grid",gap:6,flex:1},children:[e.jsx(t,{variant:"text",width:"42%"}),e.jsx(t,{variant:"text",width:"68%"})]})]}),e.jsx(t,{height:96})]})},d={args:{width:360,height:18,ariaLabel:"Loading release list",animated:!1},play:async({canvasElement:a})=>{const n=k(a);await b(await n.findByRole("status",{name:"Loading release list"})).toBeInTheDocument()}};var m,p,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("story-skeleton-default");
    await expect(skeleton).toHaveAttribute("aria-hidden", "true");
  },
  render: args => <Skeleton data-testid="story-skeleton-default" {...args} />
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,h,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,x,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const R=["Default","ProfileCard","NarratedStatus"];export{i as Default,d as NarratedStatus,o as ProfileCard,R as __namedExportsOrder,L as default};
