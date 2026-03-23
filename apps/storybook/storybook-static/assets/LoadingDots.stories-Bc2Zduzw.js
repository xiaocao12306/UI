import{j as p}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{u as te}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as g,expect as n}from"./index-DgAF9SIF.js";function ne(e){return Math.min(Math.max(e,2),6)}function oe(e,t){return Number.isFinite(e)?ne(Math.trunc(e)):t}function se(e,t){return Number.isFinite(e)?Math.max(80,Math.trunc(e)):t}function L(e,t){return typeof e!="boolean"?t:e}function y({label:e="Loading",ariaLabel:t,ariaLabelledBy:a,interval:V=280,dotCount:k=3,running:N=!0,respectReducedMotion:_=!0,live:z,style:O,...U}){const m=i.useRef(null),W=te(m),o=oe(k,3),b=se(V,280),f=L(N,!0),G=L(_,!0),s=f&&!(G&&W),J=typeof e=="string"&&e.trim().length>0?e.trim():"Loading",v=typeof a=="string"&&a.trim().length>0?a.trim():void 0,K=v===void 0&&typeof t=="string"&&t.trim().length>0?t.trim():void 0,Q=v?void 0:K??J,[X,w]=i.useState(0);i.useEffect(()=>{w(0)},[o,s]),i.useEffect(()=>{var x;if(!s)return;const h=((x=m.current)==null?void 0:x.ownerDocument.defaultView)??window,ee=h.setInterval(()=>{w(ae=>(ae+1)%o)},b);return()=>{h.clearInterval(ee)}},[o,b,s]);const Y=s?X+1:o,Z=".".repeat(Y).padEnd(o," "),$=z??(f?"polite":"off");return p.jsx("span",{ref:m,role:"status","aria-label":Q,"aria-labelledby":v,"aria-live":$,"aria-busy":f,style:{color:"var(--aurora-text-secondary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre",...O},...U,children:Z})}y.__docgenInfo={description:"",methods:[],displayName:"LoadingDots",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loading"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},dotCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""}}};const ue={title:"Feedback/LoadingDots",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"LoadingDots supports configurable rhythm, accessible status narration, and paused states for waiting UIs."}}},args:{label:"Loading suggestions",dotCount:3}},r={play:async({canvasElement:e})=>{const a=await g(e).findByRole("status",{name:"Loading suggestions"});await n(a).toHaveAttribute("aria-live","polite"),await n(a).toHaveAttribute("aria-busy","true")}},l={args:{interval:560,dotCount:4}},d={args:{running:!1,live:"off",dotCount:4},play:async({canvasElement:e})=>{const a=await g(e).findByRole("status",{name:"Loading suggestions"});await n(a).toHaveAttribute("aria-busy","false"),await n(a).toHaveTextContent("....")}},u={args:{label:"Runtime boolean loading",running:"false",respectReducedMotion:"false",dotCount:4},play:async({canvasElement:e})=>{const a=await g(e).findByRole("status",{name:"Runtime boolean loading"});await n(a).toHaveAttribute("aria-busy","true"),await n(a).toHaveAttribute("aria-live","polite")}},c={render:()=>p.jsxs("div",{style:{display:"grid",gap:10},children:[p.jsx("h3",{id:"loading-heading",style:{margin:0},children:"Suggestion loading heading"}),p.jsx(y,{label:"Loading suggestions",ariaLabel:"Fallback loading status",ariaLabelledBy:"loading-heading"})]}),play:async({canvasElement:e})=>{const a=await g(e).findByRole("status",{name:"Suggestion loading heading"});await n(a).toHaveAttribute("aria-labelledby","loading-heading"),await n(a).not.toHaveAttribute("aria-label")}};var R,A,H;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(A=r.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var B,C,E;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    interval: 560,
    dotCount: 4
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,D,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var T,q,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Runtime boolean loading",
    running: "false" as unknown as boolean,
    respectReducedMotion: "false" as unknown as boolean,
    dotCount: 4
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dots = await canvas.findByRole("status", {
      name: "Runtime boolean loading"
    });
    await expect(dots).toHaveAttribute("aria-busy", "true");
    await expect(dots).toHaveAttribute("aria-live", "polite");
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var I,P,j;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(P=c.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const ce=["Default","SlowPulse","Paused","RuntimeBooleanConfigNormalization","LabelledByPrecedence"];export{r as Default,c as LabelledByPrecedence,d as Paused,u as RuntimeBooleanConfigNormalization,l as SlowPulse,ce as __namedExportsOrder,ue as default};
