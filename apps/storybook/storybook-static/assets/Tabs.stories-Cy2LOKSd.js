import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as Y}from"./Badge-Dkm8CRgf.js";import{within as Z,userEvent as $,expect as V}from"./index-DgAF9SIF.js";function T(e,t,d){var s;if(e.length===0)return-1;let n=t;for(let o=0;o<e.length;o+=1)if(n=(n+d+e.length)%e.length,!((s=e[n])!=null&&s.disabled))return n;return-1}function f({items:e,value:t,defaultValue:d,ariaLabel:n="Tabs",onValueChange:s}){var B;const o=c.useId(),g=c.useRef([]),S=(B=e.find(a=>!a.disabled))==null?void 0:B.key,[h,j]=c.useState(d??S),E=t??h,u=e.some(a=>a.key===E&&!a.disabled)?E:S;c.useEffect(()=>{t===void 0&&u!==h&&j(u)},[u,h,t]);const m=c.useCallback(a=>{const b=e.find(i=>i.key===a);!b||b.disabled||(t===void 0&&j(a),s==null||s(a))},[e,s,t]);return r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("div",{role:"tablist","aria-label":n,"aria-orientation":"horizontal",style:{display:"flex",gap:6,flexWrap:"wrap"},children:e.map((a,b)=>{const i=a.key===u,k=!!a.disabled;return r.jsx("button",{ref:l=>{g.current[b]=l},id:`${o}-tab-${a.key}`,type:"button",role:"tab","aria-selected":i,"aria-controls":`${o}-panel-${a.key}`,"aria-disabled":k||void 0,tabIndex:i?0:-1,disabled:k,onClick:()=>m(a.key),onKeyDown:l=>{var L,H,K,q,N,D;if(!["ArrowLeft","ArrowRight","Home","End"].includes(l.key))return;if(l.preventDefault(),l.key==="Home"){const p=T(e,-1,1),y=(L=e[p])==null?void 0:L.key;y&&(m(y),(H=g.current[p])==null||H.focus());return}if(l.key==="End"){const p=T(e,0,-1),y=(K=e[p])==null?void 0:K.key;y&&(m(y),(q=g.current[p])==null||q.focus());return}const A=T(e,b,l.key==="ArrowRight"?1:-1),I=(N=e[A])==null?void 0:N.key;I&&(m(I),(D=g.current[A])==null||D.focus())},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:i?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:i?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:k?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:k?"not-allowed":"pointer"},children:a.label},a.key)})}),e.map(a=>a.key===u?r.jsx("div",{id:`${o}-panel-${a.key}`,role:"tabpanel","aria-labelledby":`${o}-tab-${a.key}`,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:a.content},a.key):null)]})}f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const X=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],se={title:"Data/Tabs",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:X,defaultValue:"spec"}},v={};function ee(){const[e,t]=c.useState("build");return r.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),r.jsx(Y,{tone:"default",children:e})]}),r.jsx(f,{items:X,value:e,onValueChange:t})]})}const R={render:()=>r.jsx(ee,{}),play:async({canvasElement:e})=>{const t=Z(e),d=t.getByRole("tab",{name:"Release"});await $.click(d),await V(t.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),t.getByRole("tablist",{name:"Tabs"}).focus(),await $.keyboard("{Home}"),await V(t.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},x={render:()=>r.jsx(f,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},w={render:()=>r.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: use ArrowLeft/ArrowRight to move, Home to jump first enabled tab, End to jump last enabled tab."}),r.jsx(f,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]})};var C,P,_;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(_=(P=v.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var W,G,z;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ControlledTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    await userEvent.click(releaseTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Publish with changesets");
    const tabList = canvas.getByRole("tablist", {
      name: "Tabs"
    });
    tabList.focus();
    await userEvent.keyboard("{Home}");
    await expect(canvas.getByRole("tab", {
      name: "Spec"
    })).toHaveAttribute("aria-selected", "true");
  }
}`,...(z=(G=R.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var O,F,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Tabs ariaLabel="Release stages" defaultValue="spec" items={[{
    key: "spec",
    label: "Spec",
    content: "Specification stage is active."
  }, {
    key: "security",
    label: "Security Review",
    content: "Security review is pending.",
    disabled: true
  }, {
    key: "release",
    label: "Release",
    content: "Release checklist is ready."
  }]} />
}`,...(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var M,Q,U;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Keyboard: use ArrowLeft/ArrowRight to move, Home to jump first enabled tab, End to jump last enabled tab.
      </p>
      <Tabs ariaLabel="Keyboard guide tabs" defaultValue="spec" items={[{
      key: "blocked",
      label: "Blocked",
      content: "Blocked tab",
      disabled: true
    }, {
      key: "spec",
      label: "Spec",
      content: "Specification stage."
    }, {
      key: "review",
      label: "Review",
      content: "Review stage.",
      disabled: true
    }, {
      key: "release",
      label: "Release",
      content: "Release stage."
    }]} />
    </div>
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const oe=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide"];export{R as Controlled,v as Default,w as KeyboardNavigationGuide,x as WithDisabledTab,oe as __namedExportsOrder,se as default};
