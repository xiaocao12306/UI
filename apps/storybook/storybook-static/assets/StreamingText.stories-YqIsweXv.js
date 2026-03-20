import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-BWu4c2F4.js";import{within as j,expect as y}from"./index-DgAF9SIF.js";import{S as G}from"./storyShowcase-Bw5VyCj0.js";function g({text:e,speed:i=16,streaming:t=!0,startDelay:x=0,cursor:A=!0,cursorChar:B="|",showCursorWhenDone:W=!1,preserveLineBreaks:k=!0,onComplete:a,onProgress:u,live:F="polite",label:p="Streaming text",style:M,..._}){const[w,f]=v.useState(t?"":e),r=v.useRef(!1),s=e.length,N=typeof p=="string"&&p.trim().length>0?p.trim():"Streaming text";v.useEffect(()=>{if(r.current=!1,!t){f(e),r.current||(r.current=!0,a==null||a());return}let o=0,n=null;f("");const U=()=>{n=window.setInterval(()=>{o+=1;const T=e.slice(0,o);f(T),u==null||u(T,o,s),o>=s&&(n!==null&&(window.clearInterval(n),n=null),r.current||(r.current=!0,a==null||a()))},Math.max(8,i))};if(s===0){r.current||(r.current=!0,a==null||a());return}const z=window.setTimeout(U,Math.max(0,x));return()=>{window.clearTimeout(z),n!==null&&window.clearInterval(n)}},[a,u,i,x,t,e,s]);const h=w.length>=s,O=A&&t&&(!h||W);return d.jsxs("span",{role:"status","aria-label":N,"aria-live":F,"aria-busy":t&&!h,style:{whiteSpace:k?"pre-wrap":"normal",...M},..._,children:[w,O?d.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:B}):null]})}g.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}}}};const H="Aurora UI streaming response is rendering.",Y={title:"Feedback/StreamingText",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:H,speed:18}},l={play:async({canvasElement:e})=>{const t=await j(e).findByRole("status",{name:"Streaming text"});await y(t).toHaveAttribute("aria-live","polite")}},c={args:{streaming:!1},play:async({canvasElement:e})=>{const t=await j(e).findByRole("status",{name:"Streaming text"});await y(t).toHaveAttribute("aria-busy","false"),await y(t).toHaveTextContent(H)}},m={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>d.jsx(G,{maxWidth:"min(100%, 380px)",children:d.jsx(g,{...e})})};var b,S,q;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(q=(S=l.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var L,V,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var E,D,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const Z=["Default","InstantDone","MultilineCursor"];export{l as Default,c as InstantDone,m as MultilineCursor,Z as __namedExportsOrder,Y as default};
