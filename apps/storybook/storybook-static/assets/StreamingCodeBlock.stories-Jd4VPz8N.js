import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{expect as d,waitFor as b}from"./index-DgAF9SIF.js";function x({code:e,language:a="txt",speed:r=8}){const[c,n]=u.useState("");return u.useEffect(()=>{if(r<=0||e.length===0){n(e);return}let i=0;n("");const l=window.setInterval(()=>{i+=1,n(e.slice(0,i)),i>=e.length&&window.clearInterval(l)},r);return()=>{window.clearInterval(l)}},[e,r]),t.jsxs("div",{"aria-busy":c.length<e.length,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"hidden"},children:[t.jsx("header",{style:{height:34,borderBottom:"1px solid var(--aurora-border-default)",display:"flex",alignItems:"center",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}),t.jsx("pre",{style:{margin:0,padding:12,background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre-wrap"},children:t.jsx("code",{children:c})})]})}x.__docgenInfo={description:"",methods:[],displayName:"StreamingCodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"txt"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const E={title:"AI/StreamingCodeBlock",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."}}},args:{language:"bash",code:"pnpm verify",speed:12}},o={play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]"),r=e.querySelector("code");await d(a).toHaveAttribute("aria-busy","true"),await b(()=>{d(r).toHaveTextContent("pnpm verify"),d(a).toHaveAttribute("aria-busy","false")})}},s={args:{language:"ts",code:"export const releaseReady = true;",speed:0}};var p,m,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;
    const codeNode = canvasElement.querySelector("code") as HTMLElement;
    await expect(root).toHaveAttribute("aria-busy", "true");
    await waitFor(() => {
      expect(codeNode).toHaveTextContent("pnpm verify");
      expect(root).toHaveAttribute("aria-busy", "false");
    });
  }
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const H=["Default","InstantRender"];export{o as Default,s as InstantRender,H as __namedExportsOrder,E as default};
