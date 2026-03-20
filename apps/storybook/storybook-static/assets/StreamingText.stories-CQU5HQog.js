import{j as v}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{u as Z}from"./usePrefersReducedMotion-BRO3uCOn.js";import{within as A,expect as h}from"./index-DgAF9SIF.js";import{S as $}from"./storyShowcase-Bw5VyCj0.js";function w({text:e,speed:u=16,streaming:a=!0,startDelay:T=0,cursor:k=!0,cursorChar:F="|",showCursorWhenDone:_=!1,preserveLineBreaks:N=!0,onComplete:t,onProgress:o,live:O="polite",label:g="Streaming text",respectReducedMotion:U=!0,style:z,...G}){const y=m.useRef(null),J=Z(y),l=a&&!(U&&J),[b,x]=m.useState(a?"":e),r=m.useRef(!1),s=e.length,K=typeof g=="string"&&g.trim().length>0?g.trim():"Streaming text";m.useEffect(()=>{var q;if(r.current=!1,!l){x(e),r.current||(r.current=!0,t==null||t());return}let c=0,n=null;x("");const i=((q=y.current)==null?void 0:q.ownerDocument.defaultView)??window,X=()=>{n=i.setInterval(()=>{c+=1;const R=e.slice(0,c);x(R),o==null||o(R,c,s),c>=s&&(n!==null&&(i.clearInterval(n),n=null),r.current||(r.current=!0,t==null||t()))},Math.max(8,u))};if(s===0){r.current||(r.current=!0,t==null||t());return}const Y=i.setTimeout(X,Math.max(0,T));return()=>{i.clearTimeout(Y),n!==null&&i.clearInterval(n)}},[t,o,l,u,T,e,s]);const S=b.length>=s,Q=k&&l&&(!S||_);return v.jsxs("span",{ref:y,role:"status","aria-label":K,"aria-live":O,"aria-busy":l&&!S,style:{whiteSpace:N?"pre-wrap":"normal",...z},...G,children:[b,Q?v.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:F}):null]})}w.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const B="Aurora UI streaming response is rendering.",re={title:"Feedback/StreamingText",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:B,speed:18}},d={play:async({canvasElement:e})=>{const a=await A(e).findByRole("status",{name:"Streaming text"});await h(a).toHaveAttribute("aria-live","polite")}},p={args:{streaming:!1},play:async({canvasElement:e})=>{const a=await A(e).findByRole("status",{name:"Streaming text"});await h(a).toHaveAttribute("aria-busy","false"),await h(a).toHaveTextContent(B)}},f={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>v.jsx($,{maxWidth:"min(100%, 380px)",children:v.jsx(w,{...e})})};var V,L,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(I=(L=d.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var D,E,M;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var j,H,W;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
}`,...(W=(H=f.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const ne=["Default","InstantDone","MultilineCursor"];export{d as Default,p as InstantDone,f as MultilineCursor,ne as __namedExportsOrder,re as default};
