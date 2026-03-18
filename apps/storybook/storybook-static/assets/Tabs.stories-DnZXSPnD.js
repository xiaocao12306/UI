import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Re}from"./Badge-Dkm8CRgf.js";import{within as v,userEvent as c,expect as s}from"./index-DgAF9SIF.js";function N(e,a,o){var l;if(e.length===0)return-1;let r=a;for(let i=0;i<e.length;i+=1)if(r=(r+o+e.length)%e.length,!((l=e[r])!=null&&l.disabled))return r;return-1}function p({items:e,value:a,defaultValue:o,ariaLabel:r="Tabs",ariaLabelledBy:l,orientation:i="horizontal",activationMode:g="automatic",onValueChange:R}){var $;const k=b.useId(),q=b.useRef([]),K=($=e.find(t=>!t.disabled))==null?void 0:$.key,[V,F]=b.useState(o??K),z=a??V,u=e.some(t=>t.key===z&&!t.disabled)?z:K,[M,x]=b.useState(u),ke=e.some(t=>t.key===M&&!t.disabled)?M:u;b.useEffect(()=>{a===void 0&&u!==V&&F(u)},[u,V,a]),b.useEffect(()=>{x(u)},[u]);const D=b.useCallback(t=>{const y=e.find(w=>w.key===t);!y||y.disabled||t===u||(a===void 0&&F(t),R==null||R(t))},[u,e,R,a]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{role:"tablist","aria-label":l?void 0:r,"aria-labelledby":l,"aria-orientation":i,style:{display:"flex",gap:6,flexWrap:i==="horizontal"?"wrap":"nowrap",flexDirection:i==="vertical"?"column":"row"},children:e.map((t,y)=>{const w=t.key===u,T=!!t.disabled;return n.jsx("button",{ref:d=>{q.current[y]=d},id:`${k}-tab-${t.key}`,type:"button",role:"tab","aria-selected":w,"aria-controls":`${k}-panel-${t.key}`,"aria-disabled":T||void 0,tabIndex:ke===t.key?0:-1,disabled:T,onClick:d=>{x(t.key),!(g==="manual"&&d.detail===0)&&D(t.key)},onFocus:()=>{x(t.key)},onKeyDown:d=>{if(g==="manual"&&Te(d.key)){d.preventDefault(),D(t.key);return}const L=m=>{var U,W;const P=(U=e[m])==null?void 0:U.key;P&&(x(P),g==="automatic"&&D(P),(W=q.current[m])==null||W.focus())};if(d.key==="Home"){d.preventDefault();const m=N(e,-1,1);L(m);return}if(d.key==="End"){d.preventDefault();const m=N(e,0,-1);L(m);return}const _=(i==="horizontal"?{ArrowRight:1,ArrowLeft:-1}:{ArrowDown:1,ArrowUp:-1})[d.key];if(!_)return;d.preventDefault();const xe=N(e,y,_);L(xe)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:w?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:T?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:T?"not-allowed":"pointer"},children:t.label},t.key)})}),e.map(t=>{const y=t.key===u;return n.jsx("div",{id:`${k}-panel-${t.key}`,role:"tabpanel","aria-labelledby":`${k}-tab-${t.key}`,hidden:!y,style:{display:y?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:t.content},t.key)})]})}function Te(e){return e==="Enter"||e===" "||e==="Spacebar"}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const f=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Ce={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:f,defaultValue:"spec"}},h={};function he(){const[e,a]=b.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(Re,{tone:"default",children:e})]}),n.jsx(p,{items:f,value:e,onValueChange:a})]})}const B={render:()=>n.jsx(he,{}),play:async({canvasElement:e})=>{const a=v(e),o=a.getByRole("tab",{name:"Release"});await c.click(o),await s(a.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),a.getByRole("tablist",{name:"Tabs"}).focus(),await c.keyboard("{Home}"),await s(a.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},E={render:()=>n.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},H={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:e})=>{const a=v(e),o=a.getByRole("tab",{name:"Spec"}),r=a.getByRole("tab",{name:"Release"}),l=a.getByRole("tab",{name:"Blocked"});await c.click(o),await s(o).toHaveAttribute("aria-selected","true"),await s(l).toHaveAttribute("aria-disabled","true"),await c.keyboard("{End}"),await s(r).toHaveAttribute("aria-selected","true"),await s(r).toHaveFocus(),await c.keyboard("{Home}"),await s(o).toHaveAttribute("aria-selected","true"),await s(o).toHaveFocus()}};function Be(){const e=b.useId();return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsx("h3",{id:e,style:{margin:0},children:"Release Stages"}),n.jsx(p,{ariaLabelledBy:e,items:f,defaultValue:"spec"})]})}const S={render:()=>n.jsx(Be,{}),play:async({canvasElement:e})=>{const a=v(e);await s(a.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},A={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:e})=>{const a=v(e),o=a.getByRole("tablist",{name:"Vertical workflow tabs"});await s(o).toHaveAttribute("aria-orientation","vertical");const r=a.getByRole("tab",{name:"Spec"});await c.click(r),await c.keyboard("{ArrowDown}"),await s(a.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},j={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),n.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:e})=>{const a=v(e),o=a.getByRole("tab",{name:"Spec"}),r=a.getByRole("tab",{name:"Release"});await c.click(o),await s(a.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{ArrowRight}"),await s(a.getByRole("tab",{name:"Build"})).toHaveFocus(),await s(a.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{Enter}"),await s(a.getByRole("tabpanel")).toHaveTextContent("Build stage."),await c.keyboard("{End}"),await s(r).toHaveFocus(),await s(a.getByRole("tabpanel")).toHaveTextContent("Build stage."),r.focus(),await c.keyboard("{Enter}"),await s(a.getByRole("tabpanel")).toHaveTextContent("Release stage.")}};function Ee(){const[e,a]=b.useState("build"),[o,r]=b.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(Re,{tone:"default","data-testid":"change-count",children:o})]}),n.jsx(p,{items:f,value:e,onValueChange:l=>{a(l),r(i=>i+1)}})]})}const I={render:()=>n.jsx(Ee,{}),play:async({canvasElement:e})=>{const a=v(e),o=a.getByRole("tab",{name:"Build"}),r=a.getByRole("tab",{name:"Release"}),l=a.getByTestId("change-count");await c.click(o),await s(l).toHaveTextContent("0"),await c.click(r),await s(l).toHaveTextContent("1"),await c.click(r),await s(l).toHaveTextContent("1")}},C={render:()=>n.jsx(p,{items:f,defaultValue:"spec"}),play:async({canvasElement:e})=>{const a=v(e),o=a.getByRole("tab",{name:"Spec"}),r=a.getByRole("tab",{name:"Release"}),l=o.getAttribute("aria-controls"),i=r.getAttribute("aria-controls");await s(l).toBeTruthy(),await s(i).toBeTruthy(),await s(document.getElementById(l)).not.toBeNull(),await s(document.getElementById(i)).not.toBeNull();const g=document.getElementById(i);await s(g).toHaveAttribute("hidden"),await c.click(r),await s(g).not.toHaveAttribute("hidden")}};var G,O,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(J=(O=h.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Q,X,Y;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;H.parameters={...H.parameters,docs:{...(te=H.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first
        enabled tab, End jumps to last enabled tab.
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
    </div>,
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
    const blockedTab = canvas.getByRole("tab", {
      name: "Blocked"
    });
    await userEvent.click(specTab);
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(blockedTab).toHaveAttribute("aria-disabled", "true");
    await userEvent.keyboard("{End}");
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await expect(releaseTab).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
  }
}`,...(se=(ne=H.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,le;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(le=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ie,de;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620
  }}>
      <Tabs ariaLabel="Vertical workflow tabs" orientation="vertical" defaultValue="spec" items={[{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", {
      name: "Vertical workflow tabs"
    });
    await expect(tabList).toHaveAttribute("aria-orientation", "vertical");
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("tab", {
      name: "Release"
    })).toHaveAttribute("aria-selected", "true");
  }
}`,...(de=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,be,pe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate.
      </p>
      <Tabs ariaLabel="Manual activation tabs" activationMode="manual" defaultValue="spec" items={[{
      key: "spec",
      label: "Spec",
      content: "Specification stage."
    }, {
      key: "build",
      label: "Build",
      content: "Build stage."
    }, {
      key: "release",
      label: "Release",
      content: "Release stage."
    }]} />
    </div>,
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
    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", {
      name: "Build"
    })).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await userEvent.keyboard("{End}");
    await expect(releaseTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    releaseTab.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage.");
  }
}`,...(pe=(be=j.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ye,ve,ge;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var me,we,fe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(we=C.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};const Ve=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","LabelledByHeading","Vertical","ManualActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{I as ChangeTelemetry,B as Controlled,C as ControlsReferenceMountedPanels,h as Default,H as KeyboardNavigationGuide,S as LabelledByHeading,j as ManualActivation,A as Vertical,E as WithDisabledTab,Ve as __namedExportsOrder,Ce as default};
