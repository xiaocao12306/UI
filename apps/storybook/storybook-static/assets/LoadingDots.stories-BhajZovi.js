import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{u as K}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as f,expect as n}from"./index-DgAF9SIF.js";function Q(a){return Math.min(Math.max(a,2),6)}function v({label:a="Loading",ariaLabel:t,ariaLabelledBy:e,interval:y=280,dotCount:P=3,running:p=!0,respectReducedMotion:j=!0,live:M,style:V,...I}){const g=i.useRef(null),F=K(g),s=Q(P),o=p&&!(j&&F),_=typeof a=="string"&&a.trim().length>0?a.trim():"Loading",m=typeof e=="string"&&e.trim().length>0?e.trim():void 0,k=m===void 0&&typeof t=="string"&&t.trim().length>0?t.trim():void 0,N=m?void 0:k??_,[O,b]=i.useState(0);i.useEffect(()=>{b(0)},[s,o]),i.useEffect(()=>{var h;if(!o)return;const w=((h=g.current)==null?void 0:h.ownerDocument.defaultView)??window,G=w.setInterval(()=>{b(J=>(J+1)%s)},Math.max(80,y));return()=>{w.clearInterval(G)}},[y,s,o]);const U=o?O+1:s,W=".".repeat(U).padEnd(s," "),z=M??(p?"polite":"off");return u.jsx("span",{ref:g,role:"status","aria-label":N,"aria-labelledby":m,"aria-live":z,"aria-busy":p,style:{color:"var(--aurora-text-secondary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre",...V},...I,children:W})}v.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},dotCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""}}};const ee={title:"Feedback/LoadingDots",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."}}},args:{label:"Loading suggestions",dotCount:3}},r={play:async({canvasElement:a})=>{const e=await f(a).findByRole("status",{name:"Loading suggestions"});await n(e).toHaveAttribute("aria-live","polite"),await n(e).toHaveAttribute("aria-busy","true")}},l={args:{interval:560,dotCount:4}},d={args:{running:!1,live:"off",dotCount:4},play:async({canvasElement:a})=>{const e=await f(a).findByRole("status",{name:"Loading suggestions"});await n(e).toHaveAttribute("aria-busy","false"),await n(e).toHaveTextContent("....")}},c={render:()=>u.jsxs("div",{style:{display:"grid",gap:10},children:[u.jsx("h3",{id:"loading-heading",style:{margin:0},children:"Suggestion loading heading"}),u.jsx(v,{label:"Loading suggestions",ariaLabel:"Fallback loading status",ariaLabelledBy:"loading-heading"})]}),play:async({canvasElement:a})=>{const e=await f(a).findByRole("status",{name:"Suggestion loading heading"});await n(e).toHaveAttribute("aria-labelledby","loading-heading"),await n(e).not.toHaveAttribute("aria-label")}};var x,L,A;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(H=l.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var S,T,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(T=d.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var C,D,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(q=(D=c.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const ae=["Default","SlowPulse","Paused","LabelledByPrecedence"];export{r as Default,c as LabelledByPrecedence,d as Paused,l as SlowPulse,ae as __namedExportsOrder,ee as default};
