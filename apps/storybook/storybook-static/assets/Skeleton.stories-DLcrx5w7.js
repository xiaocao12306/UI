import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{within as g,expect as r}from"./index-DgAF9SIF.js";function y(e,a){if(typeof e=="number")return Number.isFinite(e)&&e>=0?e:a;if(typeof e=="string"){const n=e.trim();return n.length>0?n:a}return a}function _(e,a){return typeof e!="boolean"?a:e}function s({width:e="100%",height:a=16,radius:n,variant:i="rect",animated:F=!0,ariaLabel:p,ariaLabelledBy:h,style:V,...z}){const f=_(F,!0),C=y(n,i==="circle"?"9999px":i==="text"?"var(--aurora-radius-pill)":"var(--aurora-radius-sm)"),D=y(i==="circle"?e??a:e,"100%"),P=y(i==="text"?a??14:a,16),v=typeof h=="string"&&h.trim().length>0?h.trim():void 0,b=v===void 0&&typeof p=="string"&&p.trim().length>0?p.trim():void 0,o=b!==void 0||v!==void 0;return t.jsx("div",{"data-aurora-reduced-motion":f?"animate":void 0,role:o?"status":void 0,"aria-label":b,"aria-labelledby":v,"aria-live":o?"polite":void 0,"aria-busy":o?!0:void 0,"aria-hidden":o?void 0:!0,style:{width:D,height:P,borderRadius:C,background:"linear-gradient(90deg, var(--aurora-skeleton-base) 0%, var(--aurora-skeleton-highlight) 50%, var(--aurora-skeleton-base) 100%)",backgroundSize:"200% 100%",animation:f?"aurora-skeleton-shimmer 1.2s ease-in-out infinite":void 0,...V},...z})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"rect" | "text" | "circle"',elements:[{name:"literal",value:'"rect"'},{name:"literal",value:'"text"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"rect"',computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Feedback/Skeleton",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Skeleton supports decorative and narrated loading states with shape variants and animation toggles."}}},args:{width:320,height:16}},l={play:async({canvasElement:e})=>{const n=g(e).getByTestId("story-skeleton-default");await r(n).toHaveAttribute("aria-hidden","true")},render:e=>t.jsx(s,{"data-testid":"story-skeleton-default",...e})},d={render:()=>t.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[t.jsx(s,{variant:"circle",width:42,height:42}),t.jsxs("div",{style:{display:"grid",gap:6,flex:1},children:[t.jsx(s,{variant:"text",width:"42%"}),t.jsx(s,{variant:"text",width:"68%"})]})]}),t.jsx(s,{height:96})]})},c={args:{width:360,height:18,ariaLabel:"Loading release list",animated:!1},play:async({canvasElement:e})=>{const a=g(e);await r(await a.findByRole("status",{name:"Loading release list"})).toBeInTheDocument()}},u={args:{width:320,height:16,animated:"false"},render:e=>t.jsx(s,{"data-testid":"story-skeleton-runtime-boolean",...e}),play:async({canvasElement:e})=>{const n=g(e).getByTestId("story-skeleton-runtime-boolean");await r(n).toHaveAttribute("data-aurora-reduced-motion","animate")}},m={render:()=>t.jsxs("div",{style:{width:360,display:"grid",gap:8},children:[t.jsx("h3",{id:"skeleton-heading",style:{margin:0},children:"Loading release list heading"}),t.jsx(s,{width:360,height:18,animated:!1,ariaLabel:"Fallback loading release list",ariaLabelledBy:"skeleton-heading"})]}),play:async({canvasElement:e})=>{const n=await g(e).findByRole("status",{name:"Loading release list heading"});await r(n).toHaveAttribute("aria-labelledby","skeleton-heading"),await r(n).not.toHaveAttribute("aria-label")}};var k,w,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("story-skeleton-default");
    await expect(skeleton).toHaveAttribute("aria-hidden", "true");
  },
  render: args => <Skeleton data-testid="story-skeleton-default" {...args} />
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,B,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var j,T,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var R,E,H;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    width: 320,
    height: 16,
    animated: "false" as unknown as boolean
  },
  render: args => <Skeleton data-testid="story-skeleton-runtime-boolean" {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvas.getByTestId("story-skeleton-runtime-boolean");
    await expect(skeleton).toHaveAttribute("data-aurora-reduced-motion", "animate");
  }
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var I,q,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const J=["Default","ProfileCard","NarratedStatus","RuntimeBooleanConfigNormalization","LabelledByPrecedence"];export{l as Default,m as LabelledByPrecedence,c as NarratedStatus,d as ProfileCard,u as RuntimeBooleanConfigNormalization,J as __namedExportsOrder,G as default};
