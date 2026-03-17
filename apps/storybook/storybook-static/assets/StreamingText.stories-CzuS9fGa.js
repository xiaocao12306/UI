import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{within as R,expect as v}from"./index-DgAF9SIF.js";function y({text:e,speed:i=16,streaming:t=!0,startDelay:g=0,cursor:H=!0,cursorChar:A="|",showCursorWhenDone:B=!1,preserveLineBreaks:k=!0,onComplete:a,onProgress:u,live:M="polite",label:_="Streaming text",style:W,...F}){const[w,p]=f.useState(t?"":e),n=f.useRef(!1),s=e.length;f.useEffect(()=>{if(n.current=!1,!t){p(e),n.current||(n.current=!0,a==null||a());return}let l=0,r=null;p("");const O=()=>{r=window.setInterval(()=>{l+=1;const h=e.slice(0,l);p(h),u==null||u(h,l,s),l>=s&&(r!==null&&(window.clearInterval(r),r=null),n.current||(n.current=!0,a==null||a()))},Math.max(8,i))};if(s===0){n.current||(n.current=!0,a==null||a());return}const U=window.setTimeout(O,Math.max(0,g));return()=>{window.clearTimeout(U),r!==null&&window.clearInterval(r)}},[a,u,i,g,t,e,s]);const x=w.length>=s,N=H&&t&&(!x||B);return m.jsxs("span",{role:"status","aria-label":_,"aria-live":M,"aria-busy":t&&!x,style:{whiteSpace:k?"pre-wrap":"normal",...W},...F,children:[w,N?m.jsx("span",{"aria-hidden":!0,style:{color:"var(--aurora-streaming-cursor)",marginLeft:2},children:A}):null]})}y.__docgenInfo={description:"",methods:[],displayName:"StreamingText",props:{text:{required:!0,tsType:{name:"string"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cursor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cursorChar:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"|"',computed:!1}},showCursorWhenDone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveLineBreaks:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(visibleText: string, count: number, total: number) => void",signature:{arguments:[{type:{name:"string"},name:"visibleText"},{type:{name:"number"},name:"count"},{type:{name:"number"},name:"total"}],return:{name:"void"}}},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"polite"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming text"',computed:!1}}}};const j="Aurora UI streaming response is rendering.",K={title:"Feedback/StreamingText",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"StreamingText covers realtime token rendering with optional cursor policy and completion callbacks."}}},args:{text:j,speed:18}},o={play:async({canvasElement:e})=>{const t=await R(e).findByRole("status",{name:"Streaming text"});await v(t).toHaveAttribute("aria-live","polite")}},c={args:{streaming:!1},play:async({canvasElement:e})=>{const t=await R(e).findByRole("status",{name:"Streaming text"});await v(t).toHaveAttribute("aria-busy","false"),await v(t).toHaveTextContent(j)}},d={args:{text:`Line one
Line two
Line three`,cursorChar:"▋",showCursorWhenDone:!0},render:e=>m.jsx("div",{style:{width:360},children:m.jsx(y,{...e})})};var T,b,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const status = await canvas.findByRole("status", {
      name: "Streaming text"
    });
    await expect(status).toHaveAttribute("aria-live", "polite");
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var q,V,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var L,E,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: "Line one\\nLine two\\nLine three",
    cursorChar: "▋",
    showCursorWhenDone: true
  },
  render: args => <div style={{
    width: 360
  }}>
      <StreamingText {...args} />
    </div>
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const Q=["Default","InstantDone","MultilineCursor"];export{o as Default,c as InstantDone,d as MultilineCursor,Q as __namedExportsOrder,K as default};
