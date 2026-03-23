import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{u as Q}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as f,expect as n}from"./index-DgAF9SIF.js";function X(e){return Math.min(Math.max(e,2),6)}function Y(e,t){return Number.isFinite(e)?X(Math.trunc(e)):t}function Z(e,t){return Number.isFinite(e)?Math.max(80,Math.trunc(e)):t}function v({label:e="Loading",ariaLabel:t,ariaLabelledBy:a,interval:M=280,dotCount:I=3,running:p=!0,respectReducedMotion:P=!0,live:j,style:F,...V}){const g=i.useRef(null),_=Q(g),s=Y(I,3),y=Z(M,280),o=p&&!(P&&_),k=typeof e=="string"&&e.trim().length>0?e.trim():"Loading",m=typeof a=="string"&&a.trim().length>0?a.trim():void 0,N=m===void 0&&typeof t=="string"&&t.trim().length>0?t.trim():void 0,O=m?void 0:N??k,[U,b]=i.useState(0);i.useEffect(()=>{b(0)},[s,o]),i.useEffect(()=>{var w;if(!o)return;const h=((w=g.current)==null?void 0:w.ownerDocument.defaultView)??window,J=h.setInterval(()=>{b(K=>(K+1)%s)},y);return()=>{h.clearInterval(J)}},[s,y,o]);const W=o?U+1:s,z=".".repeat(W).padEnd(s," "),G=j??(p?"polite":"off");return u.jsx("span",{ref:g,role:"status","aria-label":O,"aria-labelledby":m,"aria-live":G,"aria-busy":p,style:{color:"var(--aurora-text-secondary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre",...F},...V,children:z})}v.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},dotCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""}}};const ne={title:"Feedback/LoadingDots",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."}}},args:{label:"Loading suggestions",dotCount:3}},r={play:async({canvasElement:e})=>{const a=await f(e).findByRole("status",{name:"Loading suggestions"});await n(a).toHaveAttribute("aria-live","polite"),await n(a).toHaveAttribute("aria-busy","true")}},l={args:{interval:560,dotCount:4}},d={args:{running:!1,live:"off",dotCount:4},play:async({canvasElement:e})=>{const a=await f(e).findByRole("status",{name:"Loading suggestions"});await n(a).toHaveAttribute("aria-busy","false"),await n(a).toHaveTextContent("....")}},c={render:()=>u.jsxs("div",{style:{display:"grid",gap:10},children:[u.jsx("h3",{id:"loading-heading",style:{margin:0},children:"Suggestion loading heading"}),u.jsx(v,{label:"Loading suggestions",ariaLabel:"Fallback loading status",ariaLabelledBy:"loading-heading"})]}),play:async({canvasElement:e})=>{const a=await f(e).findByRole("status",{name:"Suggestion loading heading"});await n(a).toHaveAttribute("aria-labelledby","loading-heading"),await n(a).not.toHaveAttribute("aria-label")}};var x,L,A;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(L=r.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var E,H,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    interval: 560,
    dotCount: 4
  }
}`,...(R=(H=l.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var S,D,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var B,C,q;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <h3 id="loading-heading" style={{
      margin: 0
    }}>
        Suggestion loading heading
      </h3>
      <LoadingDots label="Loading suggestions" ariaLabel="Fallback loading status" ariaLabelledBy="loading-heading" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dots = await canvas.findByRole("status", {
      name: "Suggestion loading heading"
    });
    await expect(dots).toHaveAttribute("aria-labelledby", "loading-heading");
    await expect(dots).not.toHaveAttribute("aria-label");
  }
}`,...(q=(C=c.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const se=["Default","SlowPulse","Paused","LabelledByPrecedence"];export{r as Default,c as LabelledByPrecedence,d as Paused,l as SlowPulse,se as __namedExportsOrder,ne as default};
