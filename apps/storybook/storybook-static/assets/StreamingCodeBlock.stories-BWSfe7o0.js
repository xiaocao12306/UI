import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-BWu4c2F4.js";import{expect as t,waitFor as D}from"./index-DgAF9SIF.js";function b({code:e,language:a="txt",speed:o=8,label:d="Streaming code block",ariaLabel:c,ariaLabelledBy:u,live:j="off",style:F,...N}){const f=y.useRef(null),[x,p]=y.useState(""),V=typeof d=="string"&&d.trim().length>0?d.trim():"Streaming code block",m=typeof u=="string"&&u.trim().length>0?u.trim():void 0,M=m===void 0&&typeof c=="string"&&c.trim().length>0?c.trim():void 0,_=m?void 0:M??V;return y.useEffect(()=>{var w;if(o<=0||e.length===0){p(e);return}let g=0;p("");const v=((w=f.current)==null?void 0:w.ownerDocument.defaultView)??window,h=v.setInterval(()=>{g+=1,p(e.slice(0,g)),g>=e.length&&v.clearInterval(h)},o);return()=>{v.clearInterval(h)}},[e,o]),r.jsxs("div",{ref:f,role:"region","aria-label":_,"aria-labelledby":m,"aria-live":j,"aria-busy":x.length<e.length,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"hidden",...F},...N,children:[r.jsx("header",{style:{height:34,borderBottom:"1px solid var(--aurora-border-default)",display:"flex",alignItems:"center",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}),r.jsx("pre",{style:{margin:0,padding:12,background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre-wrap"},children:r.jsx("code",{children:x})})]})}b.__docgenInfo={description:"",methods:[],displayName:"StreamingCodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"txt"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming code block"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"off"',computed:!1}}}};const O={title:"AI/StreamingCodeBlock",component:b,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."}}},args:{language:"bash",code:"pnpm verify",speed:12,label:"CI command stream",live:"off"}},n={play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]"),o=e.querySelector("code");await t(a).toHaveAttribute("role","region"),await t(a).toHaveAttribute("aria-label","CI command stream"),await t(a).toHaveAttribute("aria-live","off"),await t(a).toHaveAttribute("aria-busy","true"),await D(()=>{t(o).toHaveTextContent("pnpm verify"),t(a).toHaveAttribute("aria-busy","false")})}},i={args:{language:"ts",code:"export const releaseReady = true;",speed:0}},s={args:{language:"tsx",code:"export function ShipGate() { return true; }",speed:10,live:"polite",label:"Release streaming code output"},play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]");await t(a).toHaveAttribute("aria-label","Release streaming code output"),await t(a).toHaveAttribute("aria-live","polite")}},l={render:()=>r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("h3",{id:"code-heading",style:{margin:0},children:"Release code heading"}),r.jsx(b,{language:"ts",code:"export const releaseReady = true;",speed:0,label:"Code stream",ariaLabel:"Fallback code region",ariaLabelledBy:"code-heading"})]}),play:async({canvasElement:e})=>{const a=e.querySelector("[role='region']");await t(a).toHaveAttribute("aria-labelledby","code-heading"),await t(a).not.toHaveAttribute("aria-label")}};var S,H,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(H=n.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var R,q,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var L,T,k;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,I,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <h3 id="code-heading" style={{
      margin: 0
    }}>
        Release code heading
      </h3>
      <StreamingCodeBlock language="ts" code="export const releaseReady = true;" speed={0} label="Code stream" ariaLabel="Fallback code region" ariaLabelledBy="code-heading" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[role='region']") as HTMLElement;
    await expect(root).toHaveAttribute("aria-labelledby", "code-heading");
    await expect(root).not.toHaveAttribute("aria-label");
  }
}`,...(B=(I=l.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const W=["Default","InstantRender","LiveNarration","LabelledByPrecedence"];export{n as Default,i as InstantRender,l as LabelledByPrecedence,s as LiveNarration,W as __namedExportsOrder,O as default};
