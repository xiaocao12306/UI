import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as x}from"./index-BWu4c2F4.js";import{u as X}from"./usePrefersReducedMotion-BRO3uCOn.js";import{expect as t,waitFor as _}from"./index-DgAF9SIF.js";function Y(e,a){return Number.isFinite(e)?Math.trunc(e):a}function Z(e,a){return typeof e!="boolean"?a:e}function h({code:e,language:a="txt",speed:o=8,label:d="Streaming code block",ariaLabel:u,ariaLabelledBy:p,live:D="off",respectReducedMotion:P=!0,style:G,...O}){const m=x.useRef(null),W=X(m),f=Y(o,8),J=Z(P,!0),w=f>0&&e.length>0&&!(J&&W),[H,g]=x.useState(""),K=typeof d=="string"&&d.trim().length>0?d.trim():"Streaming code block",v=typeof p=="string"&&p.trim().length>0?p.trim():void 0,Q=v===void 0&&typeof u=="string"&&u.trim().length>0?u.trim():void 0,U=v?void 0:Q??K;return x.useEffect(()=>{var A;if(!w){g(e);return}let y=0;g("");const b=((A=m.current)==null?void 0:A.ownerDocument.defaultView)??window,S=b.setInterval(()=>{y+=1,g(e.slice(0,y)),y>=e.length&&b.clearInterval(S)},Math.max(1,f));return()=>{b.clearInterval(S)}},[e,f,w]),r.jsxs("div",{ref:m,role:"region","aria-label":U,"aria-labelledby":v,"aria-live":D,"aria-busy":H.length<e.length,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"hidden",...G},...O,children:[r.jsx("header",{style:{height:34,borderBottom:"1px solid var(--aurora-border-default)",display:"flex",alignItems:"center",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}),r.jsx("pre",{style:{margin:0,padding:12,background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre-wrap"},children:r.jsx("code",{children:H})})]})}h.__docgenInfo={description:"",methods:[],displayName:"StreamingCodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"txt"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming code block"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"off"',computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const re={title:"AI/StreamingCodeBlock",component:h,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."}}},args:{language:"bash",code:"pnpm verify",speed:12,label:"CI command stream",live:"off"}},n={play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]"),o=e.querySelector("code");await t(a).toHaveAttribute("role","region"),await t(a).toHaveAttribute("aria-label","CI command stream"),await t(a).toHaveAttribute("aria-live","off"),await t(a).toHaveAttribute("aria-busy","true"),await _(()=>{t(o).toHaveTextContent("pnpm verify"),t(a).toHaveAttribute("aria-busy","false")})}},s={args:{language:"ts",code:"export const releaseReady = true;",speed:0}},i={args:{language:"tsx",code:"export function ShipGate() { return true; }",speed:10,live:"polite",label:"Release streaming code output"},play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]");await t(a).toHaveAttribute("aria-label","Release streaming code output"),await t(a).toHaveAttribute("aria-live","polite")}},l={args:{language:"bash",code:"echo runtime-safe",speed:10,live:"off",respectReducedMotion:"false"},play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]"),o=e.querySelector("code");await t(a).toHaveAttribute("aria-live","off"),await t(a).toHaveAttribute("aria-busy","true"),await _(()=>{t(o).toHaveTextContent("echo runtime-safe"),t(a).toHaveAttribute("aria-busy","false")})}},c={render:()=>r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("h3",{id:"code-heading",style:{margin:0},children:"Release code heading"}),r.jsx(h,{language:"ts",code:"export const releaseReady = true;",speed:0,label:"Code stream",ariaLabel:"Fallback code region",ariaLabelledBy:"code-heading"})]}),play:async({canvasElement:e})=>{const a=e.querySelector("[role='region']");await t(a).toHaveAttribute("aria-labelledby","code-heading"),await t(a).not.toHaveAttribute("aria-label")}};var R,q,E;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(q=n.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var T,C,L;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
}`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var M,k,B;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var N,I,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    language: "bash",
    code: "echo runtime-safe",
    speed: 10,
    live: "off",
    respectReducedMotion: "false" as unknown as boolean
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[aria-busy]") as HTMLElement;
    const codeNode = canvasElement.querySelector("code") as HTMLElement;
    await expect(root).toHaveAttribute("aria-live", "off");
    await expect(root).toHaveAttribute("aria-busy", "true");
    await waitFor(() => {
      expect(codeNode).toHaveTextContent("echo runtime-safe");
      expect(root).toHaveAttribute("aria-busy", "false");
    });
  }
}`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var F,V,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const oe=["Default","InstantRender","LiveNarration","RuntimeBooleanConfigNormalization","LabelledByPrecedence"];export{n as Default,s as InstantRender,c as LabelledByPrecedence,i as LiveNarration,l as RuntimeBooleanConfigNormalization,oe as __namedExportsOrder,re as default};
