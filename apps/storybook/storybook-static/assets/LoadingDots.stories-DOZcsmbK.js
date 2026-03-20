import{j as P}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{within as C,expect as c}from"./index-DgAF9SIF.js";function _(e){return Math.min(Math.max(e,2),6)}function E({label:e="Loading",interval:n=280,dotCount:t=3,running:a=!0,live:D,style:H,...T}){const l=o.useRef(null),s=_(t),R=typeof e=="string"&&e.trim().length>0?e.trim():"Loading",[S,d]=o.useState(0);o.useEffect(()=>{d(0)},[s,a]),o.useEffect(()=>{var m;if(!a)return;const p=((m=l.current)==null?void 0:m.ownerDocument.defaultView)??window,V=p.setInterval(()=>{d(B=>(B+1)%s)},Math.max(80,n));return()=>{p.clearInterval(V)}},[n,a,s]);const A=a?S+1:s,q=".".repeat(A).padEnd(s," "),I=D??(a?"polite":"off");return P.jsx("span",{ref:l,role:"status","aria-label":R,"aria-live":I,"aria-busy":a,style:{color:"var(--aurora-text-secondary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre",...H},...T,children:q})}E.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},dotCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""}}};const k={title:"Feedback/LoadingDots",component:E,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."}}},args:{label:"Loading suggestions",dotCount:3}},r={play:async({canvasElement:e})=>{const t=await C(e).findByRole("status",{name:"Loading suggestions"});await c(t).toHaveAttribute("aria-live","polite"),await c(t).toHaveAttribute("aria-busy","true")}},i={args:{interval:560,dotCount:4}},u={args:{running:!1,live:"off",dotCount:4},play:async({canvasElement:e})=>{const t=await C(e).findByRole("status",{name:"Loading suggestions"});await c(t).toHaveAttribute("aria-busy","false"),await c(t).toHaveTextContent("....")}};var f,v,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,w,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    interval: 560,
    dotCount: 4
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,L,h;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(L=u.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};const N=["Default","SlowPulse","Paused"];export{r as Default,u as Paused,i as SlowPulse,N as __namedExportsOrder,k as default};
