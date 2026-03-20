import{j as f}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{within as A,expect as g}from"./index-DgAF9SIF.js";import{S as Q}from"./storyShowcase-Bw5VyCj0.js";function x({text:e,speed:u=16,streaming:t=!0,startDelay:w=0,cursor:k=!0,cursorChar:F="|",showCursorWhenDone:M=!1,preserveLineBreaks:_=!0,onComplete:a,onProgress:o,live:N="polite",label:v="Streaming text",style:O,...U}){const h=c.useRef(null),[T,y]=c.useState(t?"":e),r=c.useRef(!1),s=e.length,z=typeof v=="string"&&v.trim().length>0?v.trim():"Streaming text";c.useEffect(()=>{var S;if(r.current=!1,!t){y(e),r.current||(r.current=!0,a==null||a());return}let l=0,n=null;y("");const i=((S=h.current)==null?void 0:S.ownerDocument.defaultView)??window,J=()=>{n=i.setInterval(()=>{l+=1;const q=e.slice(0,l);y(q),o==null||o(q,l,s),l>=s&&(n!==null&&(i.clearInterval(n),n=null),r.current||(r.current=!0,a==null||a()))},Math.max(8,u))};if(s===0){r.current||(r.current=!0,a==null||a());return}const K=i.setTimeout(J,Math.max(0,w));return()=>{i.clearTimeout(K),n!==null&&i.clearInterval(n)}},[a,o,u,w,t,e,s]);const b=T.length>=s,G=k&&t&&(!b||M);return f.jsxs("span",{ref:h,role:"status","aria-label":z,"aria-live":N,"aria-busy":t&&!b,style:{whiteSpace:_?"pre-wrap":"normal",...O},...U,children:[T,G?f.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:F}):null]})}x.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}}}};const B="Aurora UI streaming response is rendering.",C={title:"Feedback/StreamingText",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:B,speed:18}},m={play:async({canvasElement:e})=>{const t=await A(e).findByRole("status",{name:"Streaming text"});await g(t).toHaveAttribute("aria-live","polite")}},d={args:{streaming:!1},play:async({canvasElement:e})=>{const t=await A(e).findByRole("status",{name:"Streaming text"});await g(t).toHaveAttribute("aria-busy","false"),await g(t).toHaveTextContent(B)}},p={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>f.jsx(Q,{maxWidth:"min(100%, 380px)",children:f.jsx(x,{...e})})};var V,L,I;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var R,D,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var j,H,W;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
}`,...(W=(H=p.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const P=["Default","InstantDone","MultilineCursor"];export{m as Default,d as InstantDone,p as MultilineCursor,P as __namedExportsOrder,C as default};
