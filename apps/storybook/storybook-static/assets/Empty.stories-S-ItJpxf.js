import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as oe}from"./Button-DirECuRH.js";import{r as o}from"./index-BWu4c2F4.js";import{within as l,expect as i}from"./index-DgAF9SIF.js";import{S as le}from"./storyShowcase-Bw5VyCj0.js";const ce={default:{},info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-accent-default) 6%, var(--aurora-surface-default))"},warning:{borderColor:"color-mix(in srgb, var(--aurora-color-amber-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-amber-500) 8%, var(--aurora-surface-default))"},danger:{borderColor:"color-mix(in srgb, var(--aurora-color-red-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-red-500) 8%, var(--aurora-surface-default))"}};function r({title:e,description:t,action:n,icon:E,tone:Y="default",align:Z="center",titleAs:$="strong",ariaLabel:x,ariaLabelledBy:b,role:ee,style:ae,...te}){const R=o.useId(),j=o.useId(),ne=$,A=Z==="center";o.useRef(!1);const S=v(t),re=v(n),ie=v(E),c=typeof b=="string"&&b.trim().length>0?b.trim():void 0,N=c===void 0&&typeof x=="string"&&x.trim().length>0?x.trim():void 0,B=w(e).length>0,se=N!==void 0||c!==void 0,T=c?void 0:N??(B?void 0:"Empty state");return o.useEffect(()=>{},[se,B]),a.jsxs("div",{role:ee??"status","aria-live":"polite","aria-label":T,"aria-labelledby":c??(T?void 0:R),"aria-describedby":S?j:void 0,style:{border:"1px dashed var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",padding:24,display:"grid",justifyItems:A?"center":"start",gap:10,textAlign:A?"center":"left",...ce[Y],...ae},...te,children:[ie?a.jsx("div",{"aria-hidden":!0,children:E}):null,a.jsx(ne,{id:R,style:{color:"var(--aurora-text-primary)",margin:0,fontSize:"var(--aurora-font-size-md)"},children:e}),S?a.jsx("p",{id:j,style:{color:"var(--aurora-text-secondary)",margin:0},children:t}):null,re?a.jsx("div",{children:n}):null]})}function v(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>v(t)):o.isValidElement(e)}function w(e){if(typeof e=="string")return d(e);if(typeof e=="number")return d(String(e));if(Array.isArray(e))return d(e.map(n=>w(n)).filter(n=>n.length>0).join(" "));if(!o.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?d(t["aria-label"]):w(t.children)}function d(e){return e.replace(/\s+/g," ").trim()}r.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"default" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"center" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},titleAs:{required:!1,tsType:{name:"union",raw:'"h2" | "h3" | "h4" | "strong"',elements:[{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"strong"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};function s({children:e,maxWidth:t="min(100%, 420px)",gap:n=10}){return a.jsx(le,{maxWidth:t,gap:n,children:e})}const he={title:"Feedback/Empty",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Empty provides accessible placeholder states with optional icon/action and tone guidance."}}},args:{title:"No releases yet",description:"Create your first release to start tracking rollout quality."}},m={render:e=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const n=await l(e).findByRole("status");await i(n).toHaveTextContent("No releases yet")}},p={args:{icon:a.jsx("span",{"aria-hidden":!0,style:{fontSize:20},children:"🧭"}),action:a.jsx(oe,{size:"sm",children:"Create release"})},render:e=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const t=l(e);await i(await t.findByRole("button",{name:"Create release"})).toBeInTheDocument()}},u={args:{title:"No releases yet",description:"Accessible naming can be provided explicitly for richer announcement copy.",ariaLabel:"Release empty state"},render:e=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const t=l(e);await i(await t.findByRole("status",{name:"Release empty state"})).toBeInTheDocument()}},y={render:()=>a.jsxs(s,{maxWidth:"min(100%, 360px)",children:[a.jsx("h3",{id:"empty-heading",style:{margin:0},children:"Release state heading"}),a.jsx(r,{title:a.jsx("span",{"aria-hidden":!0,children:"📦"}),description:"Explicit heading binding should take precedence over ariaLabel fallback.",ariaLabel:"Fallback empty state",ariaLabelledBy:"empty-heading"})]}),play:async({canvasElement:e})=>{const n=await l(e).findByRole("status",{name:"Release state heading"});await i(n).toHaveAttribute("aria-labelledby","empty-heading"),await i(n).not.toHaveAttribute("aria-label")}},h={render:()=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{title:a.jsx("span",{"aria-hidden":!0,children:"📦"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=await l(e).findByRole("status",{name:"Empty state"});await i(n).toHaveAttribute("aria-label","Empty state"),await i(n).not.toHaveAttribute("aria-labelledby")}},f={render:()=>a.jsxs(s,{gap:12,children:[a.jsx(r,{title:"Default",description:"Baseline empty state."}),a.jsx(r,{title:"Info",description:"No synced records yet.",tone:"info"}),a.jsx(r,{title:"Warning",description:"No eligible items for this filter.",tone:"warning"}),a.jsx(r,{title:"Danger",description:"No data returned due to request failure.",tone:"danger"})]})},g={render:()=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{title:"No numeric telemetry",description:0,action:0,icon:0})}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("status");await i(n).toHaveAttribute("aria-describedby"),await i(t.getAllByText("0").length).toBeGreaterThanOrEqual(3)}};var C,W,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty {...args} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveTextContent("No releases yet");
  }
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var q,I,H;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    icon: <span aria-hidden style={{
      fontSize: 20
    }}>🧭</span>,
    action: <Button size="sm">Create release</Button>
  },
  render: args => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty {...args} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", {
      name: "Create release"
    })).toBeInTheDocument();
  }
}`,...(H=(I=p.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var D,L,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "No releases yet",
    description: "Accessible naming can be provided explicitly for richer announcement copy.",
    ariaLabel: "Release empty state"
  },
  render: args => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty {...args} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("status", {
      name: "Release empty state"
    })).toBeInTheDocument();
  }
}`,...(z=(L=u.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var F,M,V;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <EmptyShowcase maxWidth="min(100%, 360px)">
      <h3 id="empty-heading" style={{
      margin: 0
    }}>
        Release state heading
      </h3>
      <Empty title={<span aria-hidden>📦</span>} description="Explicit heading binding should take precedence over ariaLabel fallback." ariaLabel="Fallback empty state" ariaLabelledBy="empty-heading" />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status", {
      name: "Release state heading"
    });
    await expect(empty).toHaveAttribute("aria-labelledby", "empty-heading");
    await expect(empty).not.toHaveAttribute("aria-label");
  }
}`,...(V=(M=y.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var _,O,P;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty title={<span aria-hidden>📦</span>} description="Auto fallback name for icon-only title." />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status", {
      name: "Empty state"
    });
    await expect(empty).toHaveAttribute("aria-label", "Empty state");
    await expect(empty).not.toHaveAttribute("aria-labelledby");
  }
}`,...(P=(O=h.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <EmptyShowcase gap={12}>
      <Empty title="Default" description="Baseline empty state." />
      <Empty title="Info" description="No synced records yet." tone="info" />
      <Empty title="Warning" description="No eligible items for this filter." tone="warning" />
      <Empty title="Danger" description="No data returned due to request failure." tone="danger" />
    </EmptyShowcase>
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <EmptyShowcase maxWidth="min(100%, 360px)">
      <Empty title="No numeric telemetry" description={0} action={0} icon={0} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const empty = await canvas.findByRole("status");
    await expect(empty).toHaveAttribute("aria-describedby");
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(3);
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const fe=["Default","WithAction","AccessibilityMetadata","LabelledByPrecedence","NonTextTitleAutoNameFallback","ToneMatrix","NumericContentSemantics"];export{u as AccessibilityMetadata,m as Default,y as LabelledByPrecedence,h as NonTextTitleAutoNameFallback,g as NumericContentSemantics,f as ToneMatrix,p as WithAction,fe as __namedExportsOrder,he as default};
