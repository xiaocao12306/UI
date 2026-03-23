import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as pe}from"./Button-CYa37MZO.js";import{r as l}from"./index-BWu4c2F4.js";import{within as o,expect as i}from"./index-DgAF9SIF.js";import{S as ue}from"./storyShowcase-DlKirntE.js";const ye={default:{},info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-accent-default) 6%, var(--aurora-surface-default))"},warning:{borderColor:"color-mix(in srgb, var(--aurora-color-amber-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-amber-500) 8%, var(--aurora-surface-default))"},danger:{borderColor:"color-mix(in srgb, var(--aurora-color-red-500) 42%, var(--aurora-border-default))",background:"color-mix(in srgb, var(--aurora-color-red-500) 8%, var(--aurora-surface-default))"}};function fe(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="default"||n==="info"||n==="warning"||n==="danger")return n}return t}function r({title:e,description:t,action:n,icon:c,tone:S="default",align:d="center",titleAs:ne="strong",ariaLabel:E,ariaLabelledBy:R,role:re,style:ie,...se}){const A=l.useId(),N=l.useId(),oe=fe(S,"default"),le=ne,j=d==="center";l.useRef(!1);const B=w(t),ce=w(n),de=w(c),m=typeof R=="string"&&R.trim().length>0?R.trim():void 0,T=m===void 0&&typeof E=="string"&&E.trim().length>0?E.trim():void 0,C=k(e).length>0,me=T!==void 0||m!==void 0,W=m?void 0:T??(C?void 0:"Empty state");return l.useEffect(()=>{},[me,C]),a.jsxs("div",{role:re??"status","aria-live":"polite","aria-label":W,"aria-labelledby":m??(W?void 0:A),"aria-describedby":B?N:void 0,style:{border:"1px dashed var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",padding:24,display:"grid",justifyItems:j?"center":"start",gap:10,textAlign:j?"center":"left",...ye[oe],...ie},...se,children:[de?a.jsx("div",{"aria-hidden":!0,children:c}):null,a.jsx(le,{id:A,style:{color:"var(--aurora-text-primary)",margin:0,fontSize:"var(--aurora-font-size-md)"},children:e}),B?a.jsx("p",{id:N,style:{color:"var(--aurora-text-secondary)",margin:0},children:t}):null,ce?a.jsx("div",{children:n}):null]})}function w(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>w(t)):l.isValidElement(e)}function k(e){if(typeof e=="string")return p(e);if(typeof e=="number")return p(String(e));if(Array.isArray(e))return p(e.map(n=>k(n)).filter(n=>n.length>0).join(" "));if(!l.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?p(t["aria-label"]):k(t.children)}function p(e){return e.replace(/\s+/g," ").trim()}r.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"default" | "info" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"center" | "left"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},titleAs:{required:!1,tsType:{name:"union",raw:'"h2" | "h3" | "h4" | "strong"',elements:[{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"strong"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};function s({children:e,maxWidth:t="min(100%, 420px)",gap:n=10}){return a.jsx(ue,{maxWidth:t,gap:n,children:e})}const we={title:"Feedback/Empty",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Empty provides accessible placeholder states with optional icon/action and tone guidance."}}},args:{title:"No releases yet",description:"Create your first release to start tracking rollout quality."}},u={render:e=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const n=await o(e).findByRole("status");await i(n).toHaveTextContent("No releases yet")}},y={args:{icon:a.jsx("span",{"aria-hidden":!0,style:{fontSize:20},children:"🧭"}),action:a.jsx(pe,{size:"sm",children:"Create release"})},render:e=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const t=o(e);await i(await t.findByRole("button",{name:"Create release"})).toBeInTheDocument()}},f={args:{title:"No releases yet",description:"Accessible naming can be provided explicitly for richer announcement copy.",ariaLabel:"Release empty state"},render:e=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{...e})}),play:async({canvasElement:e})=>{const t=o(e);await i(await t.findByRole("status",{name:"Release empty state"})).toBeInTheDocument()}},g={render:()=>a.jsxs(s,{maxWidth:"min(100%, 360px)",children:[a.jsx("h3",{id:"empty-heading",style:{margin:0},children:"Release state heading"}),a.jsx(r,{title:a.jsx("span",{"aria-hidden":!0,children:"📦"}),description:"Explicit heading binding should take precedence over ariaLabel fallback.",ariaLabel:"Fallback empty state",ariaLabelledBy:"empty-heading"})]}),play:async({canvasElement:e})=>{const n=await o(e).findByRole("status",{name:"Release state heading"});await i(n).toHaveAttribute("aria-labelledby","empty-heading"),await i(n).not.toHaveAttribute("aria-label")}},h={render:()=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{title:a.jsx("span",{"aria-hidden":!0,children:"📦"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=await o(e).findByRole("status",{name:"Empty state"});await i(n).toHaveAttribute("aria-label","Empty state"),await i(n).not.toHaveAttribute("aria-labelledby")}},b={render:()=>a.jsxs(s,{gap:12,children:[a.jsx(r,{title:"Default",description:"Baseline empty state."}),a.jsx(r,{title:"Info",description:"No synced records yet.",tone:"info"}),a.jsx(r,{title:"Warning",description:"No eligible items for this filter.",tone:"warning"}),a.jsx(r,{title:"Danger",description:"No data returned due to request failure.",tone:"danger"})]})},v={render:()=>a.jsxs(s,{gap:12,children:[a.jsx(r,{title:"Runtime warning token",description:"Mixed-case warning token should normalize.",tone:" WARNING "}),a.jsx(r,{title:"Runtime fallback token",description:"Invalid tone token should fallback to default visual style.",tone:"critical"})]}),play:async({canvasElement:e})=>{const t=o(e),c=(await t.findByRole("status",{name:"Runtime warning token"})).getAttribute("style")??"";await i(c).toContain("var(--aurora-color-amber-500)");const d=(await t.findByRole("status",{name:"Runtime fallback token"})).getAttribute("style")??"";await i(d).not.toContain("var(--aurora-color-amber-500)"),await i(d).not.toContain("var(--aurora-color-red-500)")}},x={render:()=>a.jsx(s,{maxWidth:"min(100%, 360px)",children:a.jsx(r,{title:"No numeric telemetry",description:0,action:0,icon:0})}),play:async({canvasElement:e})=>{const t=o(e),n=await t.findByRole("status");await i(n).toHaveAttribute("aria-describedby"),await i(t.getAllByText("0").length).toBeGreaterThanOrEqual(3)}};var I,q,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var H,L,D;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(L=y.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var F,M,V;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(M=f.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var G,_,O;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var P,J,K;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <EmptyShowcase gap={12}>
      <Empty title="Default" description="Baseline empty state." />
      <Empty title="Info" description="No synced records yet." tone="info" />
      <Empty title="Warning" description="No eligible items for this filter." tone="warning" />
      <Empty title="Danger" description="No data returned due to request failure." tone="danger" />
    </EmptyShowcase>
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <EmptyShowcase gap={12}>
      <Empty title="Runtime warning token" description="Mixed-case warning token should normalize." tone={" WARNING " as unknown as "warning"} />
      <Empty title="Runtime fallback token" description="Invalid tone token should fallback to default visual style." tone={"critical" as unknown as "default"} />
    </EmptyShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const runtimeWarning = await canvas.findByRole("status", {
      name: "Runtime warning token"
    });
    const warningStyle = runtimeWarning.getAttribute("style") ?? "";
    await expect(warningStyle).toContain("var(--aurora-color-amber-500)");
    const runtimeFallback = await canvas.findByRole("status", {
      name: "Runtime fallback token"
    });
    const fallbackStyle = runtimeFallback.getAttribute("style") ?? "";
    await expect(fallbackStyle).not.toContain("var(--aurora-color-amber-500)");
    await expect(fallbackStyle).not.toContain("var(--aurora-color-red-500)");
  }
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Ee=["Default","WithAction","AccessibilityMetadata","LabelledByPrecedence","NonTextTitleAutoNameFallback","ToneMatrix","RuntimeToneConfigNormalization","NumericContentSemantics"];export{f as AccessibilityMetadata,u as Default,g as LabelledByPrecedence,h as NonTextTitleAutoNameFallback,x as NumericContentSemantics,v as RuntimeToneConfigNormalization,b as ToneMatrix,y as WithAction,Ee as __namedExportsOrder,we as default};
