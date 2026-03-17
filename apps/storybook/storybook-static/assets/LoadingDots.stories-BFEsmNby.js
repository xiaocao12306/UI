import{j as I}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{within as x,expect as l}from"./index-DgAF9SIF.js";function R(e){return Math.min(Math.max(e,2),6)}function L({label:e="Loading",interval:n=280,dotCount:a=3,running:t=!0,live:h,style:C,...E}){const s=R(a),[D,c]=u.useState(0);u.useEffect(()=>{c(0)},[s,t]),u.useEffect(()=>{if(!t)return;const A=window.setInterval(()=>{c(q=>(q+1)%s)},Math.max(80,n));return()=>{window.clearInterval(A)}},[n,t,s]);const H=t?D+1:s,T=".".repeat(H).padEnd(s," "),S=h??(t?"polite":"off");return I.jsx("span",{role:"status","aria-label":e,"aria-live":S,"aria-busy":t,style:{color:"var(--aurora-text-secondary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre",...C},...E,children:T})}L.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},dotCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""}}};const _={title:"Feedback/LoadingDots",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."}}},args:{label:"Loading suggestions",dotCount:3}},o={play:async({canvasElement:e})=>{const a=await x(e).findByRole("status",{name:"Loading suggestions"});await l(a).toHaveAttribute("aria-live","polite"),await l(a).toHaveAttribute("aria-busy","true")}},r={args:{interval:560,dotCount:4}},i={args:{running:!1,live:"off",dotCount:4},play:async({canvasElement:e})=>{const a=await x(e).findByRole("status",{name:"Loading suggestions"});await l(a).toHaveAttribute("aria-busy","false"),await l(a).toHaveTextContent("....")}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dots = await canvas.findByRole("status", {
      name: "Loading suggestions"
    });
    await expect(dots).toHaveAttribute("aria-live", "polite");
    await expect(dots).toHaveAttribute("aria-busy", "true");
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,v,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    interval: 560,
    dotCount: 4
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,w,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    running: false,
    live: "off",
    dotCount: 4
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dots = await canvas.findByRole("status", {
      name: "Loading suggestions"
    });
    await expect(dots).toHaveAttribute("aria-busy", "false");
    await expect(dots).toHaveTextContent("....");
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const j=["Default","SlowPulse","Paused"];export{o as Default,i as Paused,r as SlowPulse,j as __namedExportsOrder,_ as default};
