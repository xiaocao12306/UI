import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{u as le}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as L,expect as u}from"./index-DgAF9SIF.js";import{S as J}from"./storyShowcase-DlKirntE.js";function ue(e,n){return Number.isFinite(e)?Math.max(8,Math.trunc(e)):n}function ce(e,n){return Number.isFinite(e)?Math.max(0,Math.trunc(e)):n}function h({text:e,speed:n=16,streaming:t=!0,startDelay:K=0,cursor:Q=!0,cursorChar:X="|",showCursorWhenDone:Y=!1,preserveLineBreaks:Z=!0,onComplete:a,onProgress:c,live:$="polite",label:x="Streaming text",ariaLabel:b,ariaLabelledBy:w,respectReducedMotion:P=!0,style:C,...ee}){const S=p.useRef(null),te=le(S),m=t&&!(P&&te),A=ue(n,16),V=ce(K,0),[B,T]=p.useState(t?"":e),r=p.useRef(!1),o=e.length,ae=typeof x=="string"&&x.trim().length>0?x.trim():"Streaming text",R=typeof w=="string"&&w.trim().length>0?w.trim():void 0,ne=R===void 0&&typeof b=="string"&&b.trim().length>0?b.trim():void 0,re=R?void 0:ne??ae;p.useEffect(()=>{var E;if(r.current=!1,!m){T(e),r.current||(r.current=!0,a==null||a());return}let d=0,i=null;T("");const l=((E=S.current)==null?void 0:E.ownerDocument.defaultView)??window,ie=()=>{i=l.setInterval(()=>{d+=1;const F=e.slice(0,d);T(F),c==null||c(F,d,o),d>=o&&(i!==null&&(l.clearInterval(i),i=null),r.current||(r.current=!0,a==null||a()))},A)};if(o===0){r.current||(r.current=!0,a==null||a());return}const oe=l.setTimeout(ie,V);return()=>{l.clearTimeout(oe),i!==null&&l.clearInterval(i)}},[a,c,A,V,m,e,o]);const D=B.length>=o,se=Q&&m&&(!D||Y);return s.jsxs("span",{ref:S,role:"status","aria-label":re,"aria-labelledby":R,"aria-live":$,"aria-busy":m&&!D,style:{whiteSpace:Z?"pre-wrap":"normal",...C},...ee,children:[B,se?s.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:X}):null]})}h.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const q="Aurora UI streaming response is rendering.",ve={title:"Feedback/StreamingText",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:q,speed:18}},f={play:async({canvasElement:e})=>{const t=await L(e).findByRole("status",{name:"Streaming text"});await u(t).toHaveAttribute("aria-live","polite")}},g={args:{streaming:!1},play:async({canvasElement:e})=>{const t=await L(e).findByRole("status",{name:"Streaming text"});await u(t).toHaveAttribute("aria-busy","false"),await u(t).toHaveTextContent(q)}},v={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>s.jsx(J,{maxWidth:"min(100%, 380px)",children:s.jsx(h,{...e})})},y={render:()=>s.jsxs(J,{maxWidth:"min(100%, 380px)",children:[s.jsx("h3",{id:"streaming-heading",style:{margin:0},children:"Release streaming heading"}),s.jsx(h,{text:q,streaming:!1,ariaLabel:"Fallback streaming status",ariaLabelledBy:"streaming-heading"})]}),play:async({canvasElement:e})=>{const t=await L(e).findByRole("status",{name:"Release streaming heading"});await u(t).toHaveAttribute("aria-labelledby","streaming-heading"),await u(t).not.toHaveAttribute("aria-label")}};var H,j,I;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(I=(j=f.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var M,W,k;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    streaming: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-busy", "false");
    await expect(status).toHaveTextContent(sample);
  }
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var _,N,O;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
}`,...(O=(N=v.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,z,G;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <h3 id="streaming-heading" style={{
      margin: 0
    }}>
        Release streaming heading
      </h3>
      <StreamingText text={sample} streaming={false} ariaLabel="Fallback streaming status" ariaLabelledBy="streaming-heading" />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Release streaming heading"
    });
    await expect(status).toHaveAttribute("aria-labelledby", "streaming-heading");
    await expect(status).not.toHaveAttribute("aria-label");
  }
}`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const ye=["Default","InstantDone","MultilineCursor","LabelledByPrecedence"];export{f as Default,g as InstantDone,y as LabelledByPrecedence,v as MultilineCursor,ye as __namedExportsOrder,ve as default};
