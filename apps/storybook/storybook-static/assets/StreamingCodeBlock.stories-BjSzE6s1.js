import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{expect as l,waitFor as S}from"./index-DgAF9SIF.js";function h({code:e,language:t="txt",speed:r=8}){const u=c.useRef(null),[p,s]=c.useState("");return c.useEffect(()=>{var f;if(r<=0||e.length===0){s(e);return}let i=0;s("");const d=((f=u.current)==null?void 0:f.ownerDocument.defaultView)??window,m=d.setInterval(()=>{i+=1,s(e.slice(0,i)),i>=e.length&&d.clearInterval(m)},r);return()=>{d.clearInterval(m)}},[e,r]),a.jsxs("div",{ref:u,"aria-busy":p.length<e.length,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"hidden"},children:[a.jsx("header",{style:{height:34,borderBottom:"1px solid var(--aurora-border-default)",display:"flex",alignItems:"center",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:t}),a.jsx("pre",{style:{margin:0,padding:12,background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre-wrap"},children:a.jsx("code",{children:p})})]})}h.__docgenInfo={description:"",methods:[],displayName:"StreamingCodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"txt"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const R={title:"AI/StreamingCodeBlock",component:h,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."}}},args:{language:"bash",code:"pnpm verify",speed:12}},o={play:async({canvasElement:e})=>{const t=e.querySelector("[aria-busy]"),r=e.querySelector("code");await l(t).toHaveAttribute("aria-busy","true"),await S(()=>{l(r).toHaveTextContent("pnpm verify"),l(t).toHaveAttribute("aria-busy","false")})}},n={args:{language:"ts",code:"export const releaseReady = true;",speed:0}};var y,g,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,b,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const q=["Default","InstantRender"];export{o as Default,n as InstantRender,q as __namedExportsOrder,R as default};
