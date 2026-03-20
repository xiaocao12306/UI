import{j}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{u as F}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as E,expect as c}from"./index-DgAF9SIF.js";function k(e){return Math.min(Math.max(e,2),6)}function R({label:e="Loading",interval:s=280,dotCount:t=3,running:l=!0,respectReducedMotion:D=!0,live:T,style:H,...A}){const d=o.useRef(null),S=F(d),a=k(t),n=l&&!(D&&S),q=typeof e=="string"&&e.trim().length>0?e.trim():"Loading",[M,p]=o.useState(0);o.useEffect(()=>{p(0)},[a,n]),o.useEffect(()=>{var f;if(!n)return;const m=((f=d.current)==null?void 0:f.ownerDocument.defaultView)??window,B=m.setInterval(()=>{p(_=>(_+1)%a)},Math.max(80,s));return()=>{m.clearInterval(B)}},[s,a,n]);const V=n?M+1:a,I=".".repeat(V).padEnd(a," "),P=T??(l?"polite":"off");return j.jsx("span",{ref:d,role:"status","aria-label":q,"aria-live":P,"aria-busy":l,style:{color:"var(--aurora-text-secondary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre",...H},...A,children:I})}R.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},dotCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""}}};const z={title:"Feedback/LoadingDots",component:R,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."}}},args:{label:"Loading suggestions",dotCount:3}},r={play:async({canvasElement:e})=>{const t=await E(e).findByRole("status",{name:"Loading suggestions"});await c(t).toHaveAttribute("aria-live","polite"),await c(t).toHaveAttribute("aria-busy","true")}},i={args:{interval:560,dotCount:4}},u={args:{running:!1,live:"off",dotCount:4},play:async({canvasElement:e})=>{const t=await E(e).findByRole("status",{name:"Loading suggestions"});await c(t).toHaveAttribute("aria-busy","false"),await c(t).toHaveTextContent("....")}};var v,g,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,b,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    interval: 560,
    dotCount: 4
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var L,h,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(h=u.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const G=["Default","SlowPulse","Paused"];export{r as Default,u as Paused,i as SlowPulse,G as __namedExportsOrder,z as default};
