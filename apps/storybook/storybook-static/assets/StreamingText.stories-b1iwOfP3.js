import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{u as ie}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as L,expect as u}from"./index-DgAF9SIF.js";import{S as G}from"./storyShowcase-DlKirntE.js";function h({text:e,speed:i=16,streaming:a=!0,startDelay:A=0,cursor:J=!0,cursorChar:K="|",showCursorWhenDone:Q=!1,preserveLineBreaks:X=!0,onComplete:t,onProgress:c,live:Y="polite",label:x="Streaming text",ariaLabel:b,ariaLabelledBy:w,respectReducedMotion:Z=!0,style:$,...P}){const S=p.useRef(null),C=ie(S),m=a&&!(Z&&C),[V,T]=p.useState(a?"":e),n=p.useRef(!1),o=e.length,ee=typeof x=="string"&&x.trim().length>0?x.trim():"Streaming text",R=typeof w=="string"&&w.trim().length>0?w.trim():void 0,ae=R===void 0&&typeof b=="string"&&b.trim().length>0?b.trim():void 0,te=R?void 0:ae??ee;p.useEffect(()=>{var E;if(n.current=!1,!m){T(e),n.current||(n.current=!0,t==null||t());return}let d=0,s=null;T("");const l=((E=S.current)==null?void 0:E.ownerDocument.defaultView)??window,re=()=>{s=l.setInterval(()=>{d+=1;const H=e.slice(0,d);T(H),c==null||c(H,d,o),d>=o&&(s!==null&&(l.clearInterval(s),s=null),n.current||(n.current=!0,t==null||t()))},Math.max(8,i))};if(o===0){n.current||(n.current=!0,t==null||t());return}const se=l.setTimeout(re,Math.max(0,A));return()=>{l.clearTimeout(se),s!==null&&l.clearInterval(s)}},[t,c,m,i,A,e,o]);const B=V.length>=o,ne=J&&m&&(!B||Q);return r.jsxs("span",{ref:S,role:"status","aria-label":te,"aria-labelledby":R,"aria-live":Y,"aria-busy":m&&!B,style:{whiteSpace:X?"pre-wrap":"normal",...$},...P,children:[V,ne?r.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:K}):null]})}h.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const q="Aurora UI streaming response is rendering.",de={title:"Feedback/StreamingText",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:q,speed:18}},f={play:async({canvasElement:e})=>{const a=await L(e).findByRole("status",{name:"Streaming text"});await u(a).toHaveAttribute("aria-live","polite")}},g={args:{streaming:!1},play:async({canvasElement:e})=>{const a=await L(e).findByRole("status",{name:"Streaming text"});await u(a).toHaveAttribute("aria-busy","false"),await u(a).toHaveTextContent(q)}},v={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>r.jsx(G,{maxWidth:"min(100%, 380px)",children:r.jsx(h,{...e})})},y={render:()=>r.jsxs(G,{maxWidth:"min(100%, 380px)",children:[r.jsx("h3",{id:"streaming-heading",style:{margin:0},children:"Release streaming heading"}),r.jsx(h,{text:q,streaming:!1,ariaLabel:"Fallback streaming status",ariaLabelledBy:"streaming-heading"})]}),play:async({canvasElement:e})=>{const a=await L(e).findByRole("status",{name:"Release streaming heading"});await u(a).toHaveAttribute("aria-labelledby","streaming-heading"),await u(a).not.toHaveAttribute("aria-label")}};var j,I,D;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(D=(I=f.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var F,W,M;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(W=g.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var k,_,N;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
}`,...(N=(_=v.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var O,U,z;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(U=y.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const pe=["Default","InstantDone","MultilineCursor","LabelledByPrecedence"];export{f as Default,g as InstantDone,y as LabelledByPrecedence,v as MultilineCursor,pe as __namedExportsOrder,de as default};
