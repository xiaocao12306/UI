import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Te}from"./Badge-Dkm8CRgf.js";import{within as v,userEvent as l,expect as n}from"./index-DgAF9SIF.js";function N(a,e,o){var c;if(a.length===0)return-1;let r=e;for(let i=0;i<a.length;i+=1)if(r=(r+o+a.length)%a.length,!((c=a[r])!=null&&c.disabled))return r;return-1}function p({items:a,value:e,defaultValue:o,ariaLabel:r="Tabs",ariaLabelledBy:c,orientation:i="horizontal",activationMode:g="automatic",onValueChange:R}){var U;const f=b.useId(),q=b.useRef([]),F=(U=a.find(s=>!s.disabled))==null?void 0:U.key,[D,K]=b.useState(o??F),z=e??D,u=a.some(s=>s.key===z&&!s.disabled)?z:F,[$,h]=b.useState(u),Be=a.some(s=>s.key===$&&!s.disabled)?$:u;b.useEffect(()=>{e===void 0&&u!==D&&K(u)},[u,D,e]),b.useEffect(()=>{h(u)},[u]);const L=b.useCallback(s=>{const y=a.find(w=>w.key===s);!y||y.disabled||s===u||(e===void 0&&K(s),R==null||R(s))},[u,a,R,e]);return t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("div",{role:"tablist","aria-label":c?void 0:r,"aria-labelledby":c,"aria-orientation":i,style:{display:"flex",gap:6,flexWrap:i==="horizontal"?"wrap":"nowrap",flexDirection:i==="vertical"?"column":"row"},children:a.map((s,y)=>{const w=s.key===u,x=!!s.disabled;return t.jsx("button",{ref:d=>{q.current[y]=d},id:`${f}-tab-${s.key}`,type:"button",role:"tab","aria-selected":w,"aria-controls":`${f}-panel-${s.key}`,"aria-disabled":x||void 0,tabIndex:Be===s.key?0:-1,disabled:x,onClick:d=>{h(s.key),!(g==="manual"&&d.detail===0)&&L(s.key)},onFocus:()=>{h(s.key)},onKeyDown:d=>{if(g==="manual"&&Se(d.key)){d.preventDefault(),L(s.key);return}const P=m=>{var W,G;const M=(W=a[m])==null?void 0:W.key;M&&(h(M),g==="automatic"&&L(M),(G=q.current[m])==null||G.focus())};if(d.key==="Home"){d.preventDefault();const m=N(a,-1,1);P(m);return}if(d.key==="End"){d.preventDefault();const m=N(a,0,-1);P(m);return}const _=(i==="horizontal"?{ArrowRight:1,ArrowLeft:-1}:{ArrowDown:1,ArrowUp:-1})[d.key];if(!_)return;d.preventDefault();const Ee=N(a,y,_);P(Ee)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:w?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:x?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:x?"not-allowed":"pointer"},children:s.label},s.key)})}),a.map(s=>{const y=s.key===u;return t.jsx("div",{id:`${f}-panel-${s.key}`,role:"tabpanel","aria-labelledby":`${f}-tab-${s.key}`,hidden:!y,style:{display:y?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:s.content},s.key)})]})}function Se(a){return a==="Enter"||a===" "||a==="Spacebar"}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const k=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Pe={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:k,defaultValue:"spec"}},T={};function He(){const[a,e]=b.useState("build");return t.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),t.jsx(Te,{tone:"default",children:a})]}),t.jsx(p,{items:k,value:a,onValueChange:e})]})}const B={render:()=>t.jsx(He,{}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Release"});await l.click(o),await n(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),e.getByRole("tablist",{name:"Tabs"}).focus(),await l.keyboard("{Home}"),await n(e.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},E={render:()=>t.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},S={render:()=>t.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),t.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),c=e.getByRole("tab",{name:"Blocked"});await l.click(o),await n(o).toHaveAttribute("aria-selected","true"),await n(c).toHaveAttribute("aria-disabled","true"),await l.keyboard("{End}"),await n(r).toHaveAttribute("aria-selected","true"),await n(r).toHaveFocus(),await l.keyboard("{Home}"),await n(o).toHaveAttribute("aria-selected","true"),await n(o).toHaveFocus()}};function Ae(){const a=b.useId();return t.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[t.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),t.jsx(p,{ariaLabelledBy:a,items:k,defaultValue:"spec"})]})}const H={render:()=>t.jsx(Ae,{}),play:async({canvasElement:a})=>{const e=v(a);await n(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},A={render:()=>t.jsx("div",{style:{width:620},children:t.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tablist",{name:"Vertical workflow tabs"});await n(o).toHaveAttribute("aria-orientation","vertical");const r=e.getByRole("tab",{name:"Spec"});await l.click(r),await l.keyboard("{ArrowDown}"),await n(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},j={render:()=>t.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),t.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await l.click(o),await n(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await n(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await n(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Enter}"),await n(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await l.keyboard("{End}"),await n(r).toHaveFocus(),await n(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),r.focus(),await l.keyboard("{Enter}"),await n(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},C={render:()=>t.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),t.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Backlog"}),r=e.getByRole("tab",{name:"Ship"});await l.click(o),await n(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{ArrowDown}"),await n(r).toHaveFocus(),await n(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await n(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function je(){const[a,e]=b.useState("build"),[o,r]=b.useState(0);return t.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),t.jsx(Te,{tone:"default","data-testid":"change-count",children:o})]}),t.jsx(p,{items:k,value:a,onValueChange:c=>{e(c),r(i=>i+1)}})]})}const I={render:()=>t.jsx(je,{}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),c=e.getByTestId("change-count");await l.click(o),await n(c).toHaveTextContent("0"),await l.click(r),await n(c).toHaveTextContent("1"),await l.click(r),await n(c).toHaveTextContent("1")}},V={render:()=>t.jsx(p,{items:k,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),c=o.getAttribute("aria-controls"),i=r.getAttribute("aria-controls");await n(c).toBeTruthy(),await n(i).toBeTruthy(),await n(document.getElementById(c)).not.toBeNull(),await n(document.getElementById(i)).not.toBeNull();const g=document.getElementById(i);await n(g).toHaveAttribute("hidden"),await l.click(r),await n(g).not.toHaveAttribute("hidden")}};var O,J,Q;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ce;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(ce=(le=H.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,ue;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var be,pe,ye;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ve,ge,me;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates.
      </p>
      <Tabs ariaLabel="Manual vertical release tabs" orientation="vertical" activationMode="manual" defaultValue="backlog" items={[{
      key: "backlog",
      label: "Backlog",
      content: "Backlog scope and release intent."
    }, {
      key: "review",
      label: "Review",
      content: "Review and signoff.",
      disabled: true
    }, {
      key: "ship",
      label: "Ship",
      content: "Ship checklist and release notes."
    }]} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const backlogTab = canvas.getByRole("tab", {
      name: "Backlog"
    });
    const shipTab = canvas.getByRole("tab", {
      name: "Ship"
    });
    await userEvent.click(backlogTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent.");
    await userEvent.keyboard("{ArrowDown}");
    await expect(shipTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent.");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.");
  }
}`,...(me=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var we,ke,Re;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Re=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var fe,he,xe;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};const Me=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","LabelledByHeading","Vertical","ManualActivation","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{I as ChangeTelemetry,B as Controlled,V as ControlsReferenceMountedPanels,T as Default,S as KeyboardNavigationGuide,H as LabelledByHeading,j as ManualActivation,C as ManualVerticalActivation,A as Vertical,E as WithDisabledTab,Me as __namedExportsOrder,Pe as default};
