import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as le}from"./Badge-Dkm8CRgf.js";import{within as H,userEvent as m,expect as c}from"./index-DgAF9SIF.js";function S(e,a,l){var r;if(e.length===0)return-1;let s=a;for(let o=0;o<e.length;o+=1)if(s=(s+l+e.length)%e.length,!((r=e[s])!=null&&r.disabled))return s;return-1}function y({items:e,value:a,defaultValue:l,ariaLabel:s="Tabs",onValueChange:r}){var N;const o=d.useId(),u=d.useRef([]),A=(N=e.find(t=>!t.disabled))==null?void 0:N.key,[j,C]=d.useState(l??A),P=a??j,b=e.some(t=>t.key===P&&!t.disabled)?P:A;d.useEffect(()=>{a===void 0&&b!==j&&C(b)},[b,j,a]);const w=d.useCallback(t=>{const i=e.find(g=>g.key===t);!i||i.disabled||t===b||(a===void 0&&C(t),r==null||r(t))},[b,e,r,a]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{role:"tablist","aria-label":s,"aria-orientation":"horizontal",style:{display:"flex",gap:6,flexWrap:"wrap"},children:e.map((t,i)=>{const g=t.key===b,k=!!t.disabled;return n.jsx("button",{ref:p=>{u.current[i]=p},id:`${o}-tab-${t.key}`,type:"button",role:"tab","aria-selected":g,"aria-controls":`${o}-panel-${t.key}`,"aria-disabled":k||void 0,tabIndex:g?0:-1,disabled:k,onClick:()=>w(t.key),onKeyDown:p=>{var K,V,q,$,_,W;if(!["ArrowLeft","ArrowRight","Home","End"].includes(p.key))return;if(p.preventDefault(),p.key==="Home"){const v=S(e,-1,1),f=(K=e[v])==null?void 0:K.key;f&&(w(f),(V=u.current[v])==null||V.focus());return}if(p.key==="End"){const v=S(e,0,-1),f=(q=e[v])==null?void 0:q.key;f&&(w(f),($=u.current[v])==null||$.focus());return}const L=S(e,i,p.key==="ArrowRight"?1:-1),D=(_=e[L])==null?void 0:_.key;D&&(w(D),(W=u.current[L])==null||W.focus())},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:g?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:k?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:k?"not-allowed":"pointer"},children:t.label},t.key)})}),e.map(t=>{const i=t.key===b;return n.jsx("div",{id:`${o}-panel-${t.key}`,role:"tabpanel","aria-labelledby":`${o}-tab-${t.key}`,hidden:!i,style:{display:i?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:t.content},t.key)})]})}y.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const I=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],ye={title:"Data/Tabs",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:I,defaultValue:"spec"}},h={};function ce(){const[e,a]=d.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(le,{tone:"default",children:e})]}),n.jsx(y,{items:I,value:e,onValueChange:a})]})}const x={render:()=>n.jsx(ce,{}),play:async({canvasElement:e})=>{const a=H(e),l=a.getByRole("tab",{name:"Release"});await m.click(l),await c(a.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),a.getByRole("tablist",{name:"Tabs"}).focus(),await m.keyboard("{Home}"),await c(a.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},R={render:()=>n.jsx(y,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},T={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: use ArrowLeft/ArrowRight to move, Home to jump first enabled tab, End to jump last enabled tab."}),n.jsx(y,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]})};function ie(){const[e,a]=d.useState("build"),[l,s]=d.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(le,{tone:"default","data-testid":"change-count",children:l})]}),n.jsx(y,{items:I,value:e,onValueChange:r=>{a(r),s(o=>o+1)}})]})}const B={render:()=>n.jsx(ie,{}),play:async({canvasElement:e})=>{const a=H(e),l=a.getByRole("tab",{name:"Build"}),s=a.getByRole("tab",{name:"Release"}),r=a.getByTestId("change-count");await m.click(l),await c(r).toHaveTextContent("0"),await m.click(s),await c(r).toHaveTextContent("1"),await m.click(s),await c(r).toHaveTextContent("1")}},E={render:()=>n.jsx(y,{items:I,defaultValue:"spec"}),play:async({canvasElement:e})=>{const a=H(e),l=a.getByRole("tab",{name:"Spec"}),s=a.getByRole("tab",{name:"Release"}),r=l.getAttribute("aria-controls"),o=s.getAttribute("aria-controls");await c(r).toBeTruthy(),await c(o).toBeTruthy(),await c(document.getElementById(r)).not.toBeNull(),await c(document.getElementById(o)).not.toBeNull();const u=document.getElementById(o);await c(u).toHaveAttribute("hidden"),await m.click(s),await c(u).not.toHaveAttribute("hidden")}};var G,M,z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(z=(M=h.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var O,F,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Q,U,X;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=R.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <ChangeTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    const counter = canvas.getByTestId("change-count");
    await userEvent.click(buildTab);
    await expect(counter).toHaveTextContent("0");
    await userEvent.click(releaseTab);
    await expect(counter).toHaveTextContent("1");
    await userEvent.click(releaseTab);
    await expect(counter).toHaveTextContent("1");
  }
}`,...(ne=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,se,oe;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Tabs items={productTabs} defaultValue="spec" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    const specPanelId = specTab.getAttribute("aria-controls");
    const releasePanelId = releaseTab.getAttribute("aria-controls");
    await expect(specPanelId).toBeTruthy();
    await expect(releasePanelId).toBeTruthy();
    await expect(document.getElementById(specPanelId!)).not.toBeNull();
    await expect(document.getElementById(releasePanelId!)).not.toBeNull();
    const releasePanel = document.getElementById(releasePanelId!);
    await expect(releasePanel).toHaveAttribute("hidden");
    await userEvent.click(releaseTab);
    await expect(releasePanel).not.toHaveAttribute("hidden");
  }
}`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const ge=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","ChangeTelemetry","ControlsReferenceMountedPanels"];export{B as ChangeTelemetry,x as Controlled,E as ControlsReferenceMountedPanels,h as Default,T as KeyboardNavigationGuide,R as WithDisabledTab,ge as __namedExportsOrder,ye as default};
