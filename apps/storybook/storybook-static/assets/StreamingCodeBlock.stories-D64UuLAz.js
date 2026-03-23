import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{u as O}from"./usePrefersReducedMotion-BRO3uCOn.js";import{expect as t,waitFor as W}from"./index-DgAF9SIF.js";function J(e,a){return Number.isFinite(e)?Math.trunc(e):a}function x({code:e,language:a="txt",speed:l=8,label:d="Streaming code block",ariaLabel:c,ariaLabelledBy:u,live:F="off",respectReducedMotion:N=!0,style:V,..._}){const p=b.useRef(null),D=O(p),m=J(l,8),h=m>0&&e.length>0&&!(N&&D),[w,g]=b.useState(""),P=typeof d=="string"&&d.trim().length>0?d.trim():"Streaming code block",v=typeof u=="string"&&u.trim().length>0?u.trim():void 0,z=v===void 0&&typeof c=="string"&&c.trim().length>0?c.trim():void 0,G=v?void 0:z??P;return b.useEffect(()=>{var H;if(!h){g(e);return}let f=0;g("");const y=((H=p.current)==null?void 0:H.ownerDocument.defaultView)??window,S=y.setInterval(()=>{f+=1,g(e.slice(0,f)),f>=e.length&&y.clearInterval(S)},Math.max(1,m));return()=>{y.clearInterval(S)}},[e,m,h]),r.jsxs("div",{ref:p,role:"region","aria-label":G,"aria-labelledby":v,"aria-live":F,"aria-busy":w.length<e.length,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"hidden",...V},..._,children:[r.jsx("header",{style:{height:34,borderBottom:"1px solid var(--aurora-border-default)",display:"flex",alignItems:"center",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}),r.jsx("pre",{style:{margin:0,padding:12,background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre-wrap"},children:r.jsx("code",{children:w})})]})}x.__docgenInfo={description:"",methods:[],displayName:"StreamingCodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"txt"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming code block"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"off"',computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Y={title:"AI/StreamingCodeBlock",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."}}},args:{language:"bash",code:"pnpm verify",speed:12,label:"CI command stream",live:"off"}},o={play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]"),l=e.querySelector("code");await t(a).toHaveAttribute("role","region"),await t(a).toHaveAttribute("aria-label","CI command stream"),await t(a).toHaveAttribute("aria-live","off"),await t(a).toHaveAttribute("aria-busy","true"),await W(()=>{t(l).toHaveTextContent("pnpm verify"),t(a).toHaveAttribute("aria-busy","false")})}},n={args:{language:"ts",code:"export const releaseReady = true;",speed:0}},i={args:{language:"tsx",code:"export function ShipGate() { return true; }",speed:10,live:"polite",label:"Release streaming code output"},play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]");await t(a).toHaveAttribute("aria-label","Release streaming code output"),await t(a).toHaveAttribute("aria-live","polite")}},s={render:()=>r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("h3",{id:"code-heading",style:{margin:0},children:"Release code heading"}),r.jsx(x,{language:"ts",code:"export const releaseReady = true;",speed:0,label:"Code stream",ariaLabel:"Fallback code region",ariaLabelledBy:"code-heading"})]}),play:async({canvasElement:e})=>{const a=e.querySelector("[role='region']");await t(a).toHaveAttribute("aria-labelledby","code-heading"),await t(a).not.toHaveAttribute("aria-label")}};var A,R,q;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var E,L,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
}`,...(T=(L=n.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var C,k,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var B,j,M;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(M=(j=s.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const Z=["Default","InstantRender","LiveNarration","LabelledByPrecedence"];export{o as Default,n as InstantRender,s as LabelledByPrecedence,i as LiveNarration,Z as __namedExportsOrder,Y as default};
