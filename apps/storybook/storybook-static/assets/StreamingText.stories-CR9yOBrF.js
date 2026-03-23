import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{u as he}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as x,expect as r}from"./index-DgAF9SIF.js";import{S as Y}from"./storyShowcase-DlKirntE.js";function we(e,a){return Number.isFinite(e)?Math.max(8,Math.trunc(e)):a}function xe(e,a){return Number.isFinite(e)?Math.max(0,Math.trunc(e)):a}function c(e,a){return typeof e!="boolean"?a:e}function b({text:e,speed:a=16,streaming:t=!0,startDelay:Z=0,cursor:$=!0,cursorChar:ee="|",showCursorWhenDone:te=!1,preserveLineBreaks:ae=!0,onComplete:n,onProgress:m,live:ne="polite",label:S="Streaming text",ariaLabel:T,ariaLabelledBy:R,respectReducedMotion:re=!0,style:se,...ie}){const B=f.useRef(null),oe=he(B),q=c(t,!0),le=c($,!0),ue=c(te,!1),ce=c(ae,!0),me=c(re,!0),d=q&&!(me&&oe),k=we(a,16),D=xe(Z,0),[E,L]=f.useState(q?"":e),s=f.useRef(!1),l=e.length,de=typeof S=="string"&&S.trim().length>0?S.trim():"Streaming text",A=typeof R=="string"&&R.trim().length>0?R.trim():void 0,pe=A===void 0&&typeof T=="string"&&T.trim().length>0?T.trim():void 0,fe=A?void 0:pe??de;f.useEffect(()=>{var V;if(s.current=!1,!d){L(e),s.current||(s.current=!0,n==null||n());return}let p=0,o=null;L("");const u=((V=B.current)==null?void 0:V.ownerDocument.defaultView)??window,ge=()=>{o=u.setInterval(()=>{p+=1;const F=e.slice(0,p);L(F),m==null||m(F,p,l),p>=l&&(o!==null&&(u.clearInterval(o),o=null),s.current||(s.current=!0,n==null||n()))},k)};if(l===0){s.current||(s.current=!0,n==null||n());return}const ye=u.setTimeout(ge,D);return()=>{u.clearTimeout(ye),o!==null&&u.clearInterval(o)}},[n,m,k,D,d,e,l]);const M=E.length>=l,ve=le&&d&&(!M||ue);return i.jsxs("span",{ref:B,role:"status","aria-label":fe,"aria-labelledby":A,"aria-live":ne,"aria-busy":d&&!M,style:{whiteSpace:ce?"pre-wrap":"normal",...se},...ie,children:[E,ve?i.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:ee}):null]})}b.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const H="Aurora UI streaming response is rendering.",Le={title:"Feedback/StreamingText",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:H,speed:18}},v={play:async({canvasElement:e})=>{const t=await x(e).findByRole("status",{name:"Streaming text"});await r(t).toHaveAttribute("aria-live","polite")}},g={args:{streaming:!1},play:async({canvasElement:e})=>{const t=await x(e).findByRole("status",{name:"Streaming text"});await r(t).toHaveAttribute("aria-busy","false"),await r(t).toHaveTextContent(H)}},y={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>i.jsx(Y,{maxWidth:"min(100%, 380px)",children:i.jsx(b,{...e})})},h={args:{text:`A
B`,speed:20,streaming:"false",cursor:"false",showCursorWhenDone:"true",preserveLineBreaks:"false",respectReducedMotion:"false"},play:async({canvasElement:e})=>{const t=await x(e).findByRole("status",{name:"Streaming text"});await r(t).toHaveAttribute("aria-busy","true"),await r(t).toHaveAttribute("aria-live","polite"),await r(t).toHaveTextContent("|"),await r(t).toHaveStyle({whiteSpace:"pre-wrap"})}},w={render:()=>i.jsxs(Y,{maxWidth:"min(100%, 380px)",children:[i.jsx("h3",{id:"streaming-heading",style:{margin:0},children:"Release streaming heading"}),i.jsx(b,{text:H,streaming:!1,ariaLabel:"Fallback streaming status",ariaLabelledBy:"streaming-heading"})]}),play:async({canvasElement:e})=>{const t=await x(e).findByRole("status",{name:"Release streaming heading"});await r(t).toHaveAttribute("aria-labelledby","streaming-heading"),await r(t).not.toHaveAttribute("aria-label")}};var W,j,I;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(I=(j=v.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,N,_;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var z,O,U;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
}`,...(U=(O=y.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: "A\\nB",
    speed: 20,
    streaming: "false" as unknown as boolean,
    cursor: "false" as unknown as boolean,
    showCursorWhenDone: "true" as unknown as boolean,
    preserveLineBreaks: "false" as unknown as boolean,
    respectReducedMotion: "false" as unknown as boolean
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-busy", "true");
    await expect(status).toHaveAttribute("aria-live", "polite");
    await expect(status).toHaveTextContent("|");
    await expect(status).toHaveStyle({
      whiteSpace: "pre-wrap"
    });
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ae=["Default","InstantDone","MultilineCursor","RuntimeBooleanConfigNormalization","LabelledByPrecedence"];export{v as Default,g as InstantDone,w as LabelledByPrecedence,y as MultilineCursor,h as RuntimeBooleanConfigNormalization,Ae as __namedExportsOrder,Le as default};
