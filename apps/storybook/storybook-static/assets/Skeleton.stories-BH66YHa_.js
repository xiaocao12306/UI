import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{within as k,expect as w}from"./index-DgAF9SIF.js";function t({width:a="100%",height:n=16,radius:d,variant:r="rect",animated:c=!0,ariaLabel:s,style:b,...S}){const j=d??(r==="circle"?"9999px":r==="text"?"var(--aurora-radius-pill)":"var(--aurora-radius-sm)"),T=r==="circle"?a??n:a,I=r==="text"?n??14:n;return e.jsxs(e.Fragment,{children:[c?e.jsx("style",{children:"@keyframes aurora-skeleton-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }"}):null,e.jsx("div",{role:s?"status":void 0,"aria-label":s,"aria-live":s?"polite":void 0,"aria-busy":s?!0:void 0,"aria-hidden":s?void 0:!0,style:{width:T,height:I,borderRadius:j,background:"linear-gradient(90deg, var(--aurora-skeleton-base) 0%, var(--aurora-skeleton-highlight) 50%, var(--aurora-skeleton-base) 100%)",backgroundSize:"200% 100%",animation:c?"aurora-skeleton-shimmer 1.2s ease-in-out infinite":void 0,...b},...S})]})}t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"rect" | "text" | "circle"',elements:[{name:"literal",value:'"rect"'},{name:"literal",value:'"text"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"rect"',computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Feedback/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Skeleton supports decorative and narrated loading states with shape variants and animation toggles."}}},args:{width:320,height:16}},i={play:async({canvasElement:a})=>{const d=k(a).getByTestId("story-skeleton-default");await w(d).toHaveAttribute("aria-hidden","true")},render:a=>e.jsx(t,{"data-testid":"story-skeleton-default",...a})},o={render:()=>e.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{variant:"circle",width:42,height:42}),e.jsxs("div",{style:{display:"grid",gap:6,flex:1},children:[e.jsx(t,{variant:"text",width:"42%"}),e.jsx(t,{variant:"text",width:"68%"})]})]}),e.jsx(t,{height:96})]})},l={args:{width:360,height:18,ariaLabel:"Loading release list",animated:!1},play:async({canvasElement:a})=>{const n=k(a);await w(await n.findByRole("status",{name:"Loading release list"})).toBeInTheDocument()}};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("story-skeleton-default");
    await expect(skeleton).toHaveAttribute("aria-hidden", "true");
  },
  render: args => <Skeleton data-testid="story-skeleton-default" {...args} />
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,v,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,f,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const R=["Default","ProfileCard","NarratedStatus"];export{i as Default,l as NarratedStatus,o as ProfileCard,R as __namedExportsOrder,E as default};
