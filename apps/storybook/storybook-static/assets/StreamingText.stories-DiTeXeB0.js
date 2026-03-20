import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{within as R,expect as v}from"./index-DgAF9SIF.js";import{S as z}from"./storyShowcase-Bw5VyCj0.js";function y({text:e,speed:i=16,streaming:t=!0,startDelay:x=0,cursor:H=!0,cursorChar:A="|",showCursorWhenDone:B=!1,preserveLineBreaks:W=!0,onComplete:a,onProgress:u,live:k="polite",label:F="Streaming text",style:M,..._}){const[w,p]=f.useState(t?"":e),r=f.useRef(!1),s=e.length;f.useEffect(()=>{if(r.current=!1,!t){p(e),r.current||(r.current=!0,a==null||a());return}let o=0,n=null;p("");const O=()=>{n=window.setInterval(()=>{o+=1;const h=e.slice(0,o);p(h),u==null||u(h,o,s),o>=s&&(n!==null&&(window.clearInterval(n),n=null),r.current||(r.current=!0,a==null||a()))},Math.max(8,i))};if(s===0){r.current||(r.current=!0,a==null||a());return}const U=window.setTimeout(O,Math.max(0,x));return()=>{window.clearTimeout(U),n!==null&&window.clearInterval(n)}},[a,u,i,x,t,e,s]);const g=w.length>=s,N=H&&t&&(!g||B);return d.jsxs("span",{role:"status","aria-label":F,"aria-live":k,"aria-busy":t&&!g,style:{whiteSpace:W?"pre-wrap":"normal",...M},..._,children:[w,N?d.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:A}):null]})}y.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}}}};const j="Aurora UI streaming response is rendering.",X={title:"Feedback/StreamingText",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:j,speed:18}},l={play:async({canvasElement:e})=>{const t=await R(e).findByRole("status",{name:"Streaming text"});await v(t).toHaveAttribute("aria-live","polite")}},c={args:{streaming:!1},play:async({canvasElement:e})=>{const t=await R(e).findByRole("status",{name:"Streaming text"});await v(t).toHaveAttribute("aria-busy","false"),await v(t).toHaveTextContent(j)}},m={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>d.jsx(z,{maxWidth:"min(100%, 380px)",children:d.jsx(y,{...e})})};var T,b,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var q,V,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var L,E,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <StoryShowcaseFrame maxWidth="min(100%, 380px)">
      <StreamingText {...args} />
    </StoryShowcaseFrame>
}`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const Y=["Default","InstantDone","MultilineCursor"];export{l as Default,c as InstantDone,m as MultilineCursor,Y as __namedExportsOrder,X as default};
