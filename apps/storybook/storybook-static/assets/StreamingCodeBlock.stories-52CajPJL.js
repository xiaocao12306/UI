import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{expect as a,waitFor as C}from"./index-DgAF9SIF.js";function q({code:e,language:t="txt",speed:r=8,label:l="Streaming code block",live:E="off",style:I,...T}){const m=p.useRef(null),[f,c]=p.useState(""),k=typeof l=="string"&&l.trim().length>0?l.trim():"Streaming code block";return p.useEffect(()=>{var g;if(r<=0||e.length===0){c(e);return}let u=0;c("");const d=((g=m.current)==null?void 0:g.ownerDocument.defaultView)??window,v=d.setInterval(()=>{u+=1,c(e.slice(0,u)),u>=e.length&&d.clearInterval(v)},r);return()=>{d.clearInterval(v)}},[e,r]),o.jsxs("div",{ref:m,role:"region","aria-label":k,"aria-live":E,"aria-busy":f.length<e.length,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"hidden",...I},...T,children:[o.jsx("header",{style:{height:34,borderBottom:"1px solid var(--aurora-border-default)",display:"flex",alignItems:"center",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:t}),o.jsx("pre",{style:{margin:0,padding:12,background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre-wrap"},children:o.jsx("code",{children:f})})]})}q.__docgenInfo={description:"",methods:[],displayName:"StreamingCodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"txt"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming code block"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"off"',computed:!1}}}};const V={title:"AI/StreamingCodeBlock",component:q,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."}}},args:{language:"bash",code:"pnpm verify",speed:12,label:"CI command stream",live:"off"}},n={play:async({canvasElement:e})=>{const t=e.querySelector("[aria-busy]"),r=e.querySelector("code");await a(t).toHaveAttribute("role","region"),await a(t).toHaveAttribute("aria-label","CI command stream"),await a(t).toHaveAttribute("aria-live","off"),await a(t).toHaveAttribute("aria-busy","true"),await C(()=>{a(r).toHaveTextContent("pnpm verify"),a(t).toHaveAttribute("aria-busy","false")})}},s={args:{language:"ts",code:"export const releaseReady = true;",speed:0}},i={args:{language:"tsx",code:"export function ShipGate() { return true; }",speed:10,live:"polite",label:"Release streaming code output"},play:async({canvasElement:e})=>{const t=e.querySelector("[aria-busy]");await a(t).toHaveAttribute("aria-label","Release streaming code output"),await a(t).toHaveAttribute("aria-live","polite")}};var y,b,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;
    const codeNode = canvasElement.querySelector("code") as HTMLElement;
    await expect(root).toHaveAttribute("role", "region");
    await expect(root).toHaveAttribute("aria-label", "CI command stream");
    await expect(root).toHaveAttribute("aria-live", "off");
    await expect(root).toHaveAttribute("aria-busy", "true");
    await waitFor(() => {
      expect(codeNode).toHaveTextContent("pnpm verify");
      expect(root).toHaveAttribute("aria-busy", "false");
    });
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,S,H;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
}`,...(H=(S=s.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var h,A,R;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    language: "tsx",
    code: "export function ShipGate() { return true; }",
    speed: 10,
    live: "polite",
    label: "Release streaming code output"
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;
    await expect(root).toHaveAttribute("aria-label", "Release streaming code output");
    await expect(root).toHaveAttribute("aria-live", "polite");
  }
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const B=["Default","InstantRender","LiveNarration"];export{n as Default,s as InstantRender,i as LiveNarration,B as __namedExportsOrder,V as default};
