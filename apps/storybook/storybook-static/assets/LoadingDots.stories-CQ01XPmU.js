import{j as R}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{within as x,expect as c}from"./index-DgAF9SIF.js";function B(e){return Math.min(Math.max(e,2),6)}function L({label:e="Loading",interval:n=280,dotCount:a=3,running:t=!0,live:h,style:C,...E}){const s=B(a),D=typeof e=="string"&&e.trim().length>0?e.trim():"Loading",[H,u]=l.useState(0);l.useEffect(()=>{u(0)},[s,t]),l.useEffect(()=>{if(!t)return;const q=window.setInterval(()=>{u(I=>(I+1)%s)},Math.max(80,n));return()=>{window.clearInterval(q)}},[n,t,s]);const T=t?H+1:s,S=".".repeat(T).padEnd(s," "),A=h??(t?"polite":"off");return R.jsx("span",{role:"status","aria-label":D,"aria-live":A,"aria-busy":t,style:{color:"var(--aurora-text-secondary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre",...C},...E,children:S})}L.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},dotCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""}}};const j={title:"Feedback/LoadingDots",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."}}},args:{label:"Loading suggestions",dotCount:3}},o={play:async({canvasElement:e})=>{const a=await x(e).findByRole("status",{name:"Loading suggestions"});await c(a).toHaveAttribute("aria-live","polite"),await c(a).toHaveAttribute("aria-busy","true")}},r={args:{interval:560,dotCount:4}},i={args:{running:!1,live:"off",dotCount:4},play:async({canvasElement:e})=>{const a=await x(e).findByRole("status",{name:"Loading suggestions"});await c(a).toHaveAttribute("aria-busy","false"),await c(a).toHaveTextContent("....")}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const M=["Default","SlowPulse","Paused"];export{o as Default,i as Paused,r as SlowPulse,M as __namedExportsOrder,j as default};
