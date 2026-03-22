import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BWu4c2F4.js";import{u as G}from"./usePrefersReducedMotion-BRO3uCOn.js";import{expect as t,waitFor as O}from"./index-DgAF9SIF.js";function b({code:e,language:a="txt",speed:o=8,label:d="Streaming code block",ariaLabel:c,ariaLabelledBy:u,live:M="off",respectReducedMotion:V=!0,style:F,...N}){const p=f.useRef(null),_=G(p),x=o>0&&e.length>0&&!(V&&_),[h,m]=f.useState(""),D=typeof d=="string"&&d.trim().length>0?d.trim():"Streaming code block",g=typeof u=="string"&&u.trim().length>0?u.trim():void 0,P=g===void 0&&typeof c=="string"&&c.trim().length>0?c.trim():void 0,z=g?void 0:P??D;return f.useEffect(()=>{var S;if(!x){m(e);return}let v=0;m("");const y=((S=p.current)==null?void 0:S.ownerDocument.defaultView)??window,w=y.setInterval(()=>{v+=1,m(e.slice(0,v)),v>=e.length&&y.clearInterval(w)},o);return()=>{y.clearInterval(w)}},[e,x,o]),r.jsxs("div",{ref:p,role:"region","aria-label":z,"aria-labelledby":g,"aria-live":M,"aria-busy":h.length<e.length,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",overflow:"hidden",...F},...N,children:[r.jsx("header",{style:{height:34,borderBottom:"1px solid var(--aurora-border-default)",display:"flex",alignItems:"center",padding:"0 10px",color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a}),r.jsx("pre",{style:{margin:0,padding:12,background:"var(--aurora-surface-default)",color:"var(--aurora-text-primary)",fontFamily:"var(--aurora-font-family-mono)",whiteSpace:"pre-wrap"},children:r.jsx("code",{children:h})})]})}b.__docgenInfo={description:"",methods:[],displayName:"StreamingCodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"txt"',computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Streaming code block"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"off"',computed:!1}},respectReducedMotion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const U={title:"AI/StreamingCodeBlock",component:b,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"StreamingCodeBlock reveals generated code progressively and marks busy state until streaming completes."}}},args:{language:"bash",code:"pnpm verify",speed:12,label:"CI command stream",live:"off"}},n={play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]"),o=e.querySelector("code");await t(a).toHaveAttribute("role","region"),await t(a).toHaveAttribute("aria-label","CI command stream"),await t(a).toHaveAttribute("aria-live","off"),await t(a).toHaveAttribute("aria-busy","true"),await O(()=>{t(o).toHaveTextContent("pnpm verify"),t(a).toHaveAttribute("aria-busy","false")})}},i={args:{language:"ts",code:"export const releaseReady = true;",speed:0}},s={args:{language:"tsx",code:"export function ShipGate() { return true; }",speed:10,live:"polite",label:"Release streaming code output"},play:async({canvasElement:e})=>{const a=e.querySelector("[aria-busy]");await t(a).toHaveAttribute("aria-label","Release streaming code output"),await t(a).toHaveAttribute("aria-live","polite")}},l={render:()=>r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("h3",{id:"code-heading",style:{margin:0},children:"Release code heading"}),r.jsx(b,{language:"ts",code:"export const releaseReady = true;",speed:0,label:"Code stream",ariaLabel:"Fallback code region",ariaLabelledBy:"code-heading"})]}),play:async({canvasElement:e})=>{const a=e.querySelector("[role='region']");await t(a).toHaveAttribute("aria-labelledby","code-heading"),await t(a).not.toHaveAttribute("aria-label")}};var H,A,R;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var q,E,L;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    language: "ts",
    code: "export const releaseReady = true;",
    speed: 0
  }
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,k,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var I,B,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(B=l.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const X=["Default","InstantRender","LiveNarration","LabelledByPrecedence"];export{n as Default,i as InstantRender,l as LabelledByPrecedence,s as LiveNarration,X as __namedExportsOrder,U as default};
