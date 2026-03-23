import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{within as v,expect as u}from"./index-DgAF9SIF.js";function h(e,t){if(typeof e=="number")return Number.isFinite(e)&&e>=0?e:t;if(typeof e=="string"){const n=e.trim();return n.length>0?n:t}return t}function i({width:e="100%",height:t=16,radius:n,variant:s="rect",animated:y=!0,ariaLabel:m,ariaLabelledBy:p,style:q,...H}){const I=h(n,s==="circle"?"9999px":s==="text"?"var(--aurora-radius-pill)":"var(--aurora-radius-sm)"),V=h(s==="circle"?e??t:e,"100%"),D=h(s==="text"?t??14:t,16),g=typeof p=="string"&&p.trim().length>0?p.trim():void 0,f=g===void 0&&typeof m=="string"&&m.trim().length>0?m.trim():void 0,r=f!==void 0||g!==void 0;return a.jsx("div",{"data-aurora-reduced-motion":y?"animate":void 0,role:r?"status":void 0,"aria-label":f,"aria-labelledby":g,"aria-live":r?"polite":void 0,"aria-busy":r?!0:void 0,"aria-hidden":r?void 0:!0,style:{width:V,height:D,borderRadius:I,background:"linear-gradient(90deg, var(--aurora-skeleton-base) 0%, var(--aurora-skeleton-highlight) 50%, var(--aurora-skeleton-base) 100%)",backgroundSize:"200% 100%",animation:y?"aurora-skeleton-shimmer 1.2s ease-in-out infinite":void 0,...q},...H})}i.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"rect" | "text" | "circle"',elements:[{name:"literal",value:'"rect"'},{name:"literal",value:'"text"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"rect"',computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Feedback/Skeleton",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Skeleton supports decorative and narrated loading states with shape variants and animation toggles."}}},args:{width:320,height:16}},l={play:async({canvasElement:e})=>{const n=v(e).getByTestId("story-skeleton-default");await u(n).toHaveAttribute("aria-hidden","true")},render:e=>a.jsx(i,{"data-testid":"story-skeleton-default",...e})},o={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[a.jsx(i,{variant:"circle",width:42,height:42}),a.jsxs("div",{style:{display:"grid",gap:6,flex:1},children:[a.jsx(i,{variant:"text",width:"42%"}),a.jsx(i,{variant:"text",width:"68%"})]})]}),a.jsx(i,{height:96})]})},d={args:{width:360,height:18,ariaLabel:"Loading release list",animated:!1},play:async({canvasElement:e})=>{const t=v(e);await u(await t.findByRole("status",{name:"Loading release list"})).toBeInTheDocument()}},c={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[a.jsx("h3",{id:"skeleton-heading",style:{margin:0},children:"Loading release list heading"}),a.jsx(i,{width:360,height:18,animated:!1,ariaLabel:"Fallback loading release list",ariaLabelledBy:"skeleton-heading"})]}),play:async({canvasElement:e})=>{const n=await v(e).findByRole("status",{name:"Loading release list heading"});await u(n).toHaveAttribute("aria-labelledby","skeleton-heading"),await u(n).not.toHaveAttribute("aria-label")}};var b,k,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("story-skeleton-default");
    await expect(skeleton).toHaveAttribute("aria-hidden", "true");
  },
  render: args => <Skeleton data-testid="story-skeleton-default" {...args} />
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var x,S,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(S=o.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var j,B,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var R,A,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const z=["Default","ProfileCard","NarratedStatus","LabelledByPrecedence"];export{l as Default,c as LabelledByPrecedence,d as NarratedStatus,o as ProfileCard,z as __namedExportsOrder,_ as default};
