import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as ke}from"./Badge-Dkm8CRgf.js";import{within as v,userEvent as c,expect as s}from"./index-DgAF9SIF.js";function N(a,e,o){var l;if(a.length===0)return-1;let r=e;for(let i=0;i<a.length;i+=1)if(r=(r+o+a.length)%a.length,!((l=a[r])!=null&&l.disabled))return r;return-1}function p({items:a,value:e,defaultValue:o,ariaLabel:r="Tabs",ariaLabelledBy:l,orientation:i="horizontal",activationMode:m="automatic",onValueChange:k}){var $;const R=b.useId(),q=b.useRef([]),K=($=a.find(t=>!t.disabled))==null?void 0:$.key,[V,F]=b.useState(o??K),M=e??V,d=a.some(t=>t.key===M&&!t.disabled)?M:K,[z,x]=b.useState(d),Re=a.some(t=>t.key===z&&!t.disabled)?z:d;b.useEffect(()=>{e===void 0&&d!==V&&F(d)},[d,V,e]),b.useEffect(()=>{x(d)},[d]);const D=b.useCallback(t=>{const y=a.find(w=>w.key===t);!y||y.disabled||t===d||(e===void 0&&F(t),k==null||k(t))},[d,a,k,e]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{role:"tablist","aria-label":l?void 0:r,"aria-labelledby":l,"aria-orientation":i,style:{display:"flex",gap:6,flexWrap:i==="horizontal"?"wrap":"nowrap",flexDirection:i==="vertical"?"column":"row"},children:a.map((t,y)=>{const w=t.key===d,T=!!t.disabled;return n.jsx("button",{ref:u=>{q.current[y]=u},id:`${R}-tab-${t.key}`,type:"button",role:"tab","aria-selected":w,"aria-controls":`${R}-panel-${t.key}`,"aria-disabled":T||void 0,tabIndex:Re===t.key?0:-1,disabled:T,onClick:()=>{x(t.key),D(t.key)},onFocus:()=>{x(t.key)},onKeyDown:u=>{if(m==="manual"&&(u.key==="Enter"||u.key===" ")){u.preventDefault(),D(t.key);return}const L=g=>{var U,W;const P=(U=a[g])==null?void 0:U.key;P&&(x(P),m==="automatic"&&D(P),(W=q.current[g])==null||W.focus())};if(u.key==="Home"){u.preventDefault();const g=N(a,-1,1);L(g);return}if(u.key==="End"){u.preventDefault();const g=N(a,0,-1);L(g);return}const _=(i==="horizontal"?{ArrowRight:1,ArrowLeft:-1}:{ArrowDown:1,ArrowUp:-1})[u.key];if(!_)return;u.preventDefault();const xe=N(a,y,_);L(xe)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:w?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:T?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:T?"not-allowed":"pointer"},children:t.label},t.key)})}),a.map(t=>{const y=t.key===d;return n.jsx("div",{id:`${R}-panel-${t.key}`,role:"tabpanel","aria-labelledby":`${R}-tab-${t.key}`,hidden:!y,style:{display:y?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:t.content},t.key)})]})}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const f=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Ie={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:f,defaultValue:"spec"}},h={};function Te(){const[a,e]=b.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(ke,{tone:"default",children:a})]}),n.jsx(p,{items:f,value:a,onValueChange:e})]})}const B={render:()=>n.jsx(Te,{}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Release"});await c.click(o),await s(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),e.getByRole("tablist",{name:"Tabs"}).focus(),await c.keyboard("{Home}"),await s(e.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},E={render:()=>n.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},H={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),l=e.getByRole("tab",{name:"Blocked"});await c.click(o),await s(o).toHaveAttribute("aria-selected","true"),await s(l).toHaveAttribute("aria-disabled","true"),await c.keyboard("{End}"),await s(r).toHaveAttribute("aria-selected","true"),await s(r).toHaveFocus(),await c.keyboard("{Home}"),await s(o).toHaveAttribute("aria-selected","true"),await s(o).toHaveFocus()}};function he(){const a=b.useId();return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),n.jsx(p,{ariaLabelledBy:a,items:f,defaultValue:"spec"})]})}const S={render:()=>n.jsx(he,{}),play:async({canvasElement:a})=>{const e=v(a);await s(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},A={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tablist",{name:"Vertical workflow tabs"});await s(o).toHaveAttribute("aria-orientation","vertical");const r=e.getByRole("tab",{name:"Spec"});await c.click(r),await c.keyboard("{ArrowDown}"),await s(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},j={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),n.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await c.click(o),await s(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{ArrowRight}"),await s(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await s(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{Enter}"),await s(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await c.keyboard("{End}"),await s(r).toHaveFocus(),await s(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),r.focus(),await c.keyboard("{Enter}"),await s(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}};function Be(){const[a,e]=b.useState("build"),[o,r]=b.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(ke,{tone:"default","data-testid":"change-count",children:o})]}),n.jsx(p,{items:f,value:a,onValueChange:l=>{e(l),r(i=>i+1)}})]})}const I={render:()=>n.jsx(Be,{}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),l=e.getByTestId("change-count");await c.click(o),await s(l).toHaveTextContent("0"),await c.click(r),await s(l).toHaveTextContent("1"),await c.click(r),await s(l).toHaveTextContent("1")}},C={render:()=>n.jsx(p,{items:f,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),l=o.getAttribute("aria-controls"),i=r.getAttribute("aria-controls");await s(l).toBeTruthy(),await s(i).toBeTruthy(),await s(document.getElementById(l)).not.toBeNull(),await s(document.getElementById(i)).not.toBeNull();const m=document.getElementById(i);await s(m).toHaveAttribute("hidden"),await c.click(r),await s(m).not.toHaveAttribute("hidden")}};var G,O,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(J=(O=h.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Q,X,Y;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(fe=(we=C.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};const Ce=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","LabelledByHeading","Vertical","ManualActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{I as ChangeTelemetry,B as Controlled,C as ControlsReferenceMountedPanels,h as Default,H as KeyboardNavigationGuide,S as LabelledByHeading,j as ManualActivation,A as Vertical,E as WithDisabledTab,Ce as __namedExportsOrder,Ie as default};
