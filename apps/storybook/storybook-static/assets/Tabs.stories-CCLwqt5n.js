import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as ke}from"./Badge-Dkm8CRgf.js";import{within as m,userEvent as p,expect as s}from"./index-DgAF9SIF.js";function N(e,a,o){var l;if(e.length===0)return-1;let r=a;for(let c=0;c<e.length;c+=1)if(r=(r+o+e.length)%e.length,!((l=e[r])!=null&&l.disabled))return r;return-1}function b({items:e,value:a,defaultValue:o,ariaLabel:r="Tabs",ariaLabelledBy:l,orientation:c="horizontal",activationMode:v="automatic",onValueChange:k}){var F;const R=u.useId(),q=u.useRef([]),K=(F=e.find(t=>!t.disabled))==null?void 0:F.key,[C,M]=u.useState(o??K),z=a??C,i=e.some(t=>t.key===z&&!t.disabled)?z:K,[$,h]=u.useState(i),Re=e.some(t=>t.key===$&&!t.disabled)?$:i;u.useEffect(()=>{a===void 0&&i!==C&&M(i)},[i,C,a]),u.useEffect(()=>{h(i)},[i]);const D=u.useCallback(t=>{const y=e.find(w=>w.key===t);!y||y.disabled||t===i||(a===void 0&&M(t),k==null||k(t))},[i,e,k,a]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{role:"tablist","aria-label":l?void 0:r,"aria-labelledby":l,"aria-orientation":c,style:{display:"flex",gap:6,flexWrap:c==="horizontal"?"wrap":"nowrap",flexDirection:c==="vertical"?"column":"row"},children:e.map((t,y)=>{const w=t.key===i,x=!!t.disabled;return n.jsx("button",{ref:d=>{q.current[y]=d},id:`${R}-tab-${t.key}`,type:"button",role:"tab","aria-selected":w,"aria-controls":`${R}-panel-${t.key}`,"aria-disabled":x||void 0,tabIndex:Re===t.key?0:-1,disabled:x,onClick:()=>{h(t.key),D(t.key)},onFocus:()=>{h(t.key)},onKeyDown:d=>{if(v==="manual"&&(d.key==="Enter"||d.key===" ")){d.preventDefault(),D(t.key);return}const L=g=>{var U,W;const P=(U=e[g])==null?void 0:U.key;P&&(h(P),v==="automatic"&&D(P),(W=q.current[g])==null||W.focus())};if(d.key==="Home"){d.preventDefault();const g=N(e,-1,1);L(g);return}if(d.key==="End"){d.preventDefault();const g=N(e,0,-1);L(g);return}const _=(c==="horizontal"?{ArrowRight:1,ArrowLeft:-1}:{ArrowDown:1,ArrowUp:-1})[d.key];if(!_)return;d.preventDefault();const he=N(e,y,_);L(he)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:w?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:x?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:x?"not-allowed":"pointer"},children:t.label},t.key)})}),e.map(t=>{const y=t.key===i;return n.jsx("div",{id:`${R}-panel-${t.key}`,role:"tabpanel","aria-labelledby":`${R}-tab-${t.key}`,hidden:!y,style:{display:y?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:t.content},t.key)})]})}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const f=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Ie={title:"Data/Tabs",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:f,defaultValue:"spec"}},T={};function xe(){const[e,a]=u.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(ke,{tone:"default",children:e})]}),n.jsx(b,{items:f,value:e,onValueChange:a})]})}const B={render:()=>n.jsx(xe,{}),play:async({canvasElement:e})=>{const a=m(e),o=a.getByRole("tab",{name:"Release"});await p.click(o),await s(a.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),a.getByRole("tablist",{name:"Tabs"}).focus(),await p.keyboard("{Home}"),await s(a.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},S={render:()=>n.jsx(b,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},E={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(b,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]})};function Te(){const e=u.useId();return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsx("h3",{id:e,style:{margin:0},children:"Release Stages"}),n.jsx(b,{ariaLabelledBy:e,items:f,defaultValue:"spec"})]})}const j={render:()=>n.jsx(Te,{}),play:async({canvasElement:e})=>{const a=m(e);await s(a.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},H={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(b,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:e})=>{const a=m(e),o=a.getByRole("tablist",{name:"Vertical workflow tabs"});await s(o).toHaveAttribute("aria-orientation","vertical");const r=a.getByRole("tab",{name:"Spec"});await p.click(r),await p.keyboard("{ArrowDown}"),await s(a.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},A={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),n.jsx(b,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:e})=>{const a=m(e),o=a.getByRole("tab",{name:"Spec"});await p.click(o),await s(a.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await p.keyboard("{ArrowRight}"),await s(a.getByRole("tab",{name:"Build"})).toHaveFocus(),await s(a.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await p.keyboard("{Enter}"),await s(a.getByRole("tabpanel")).toHaveTextContent("Build stage.")}};function Be(){const[e,a]=u.useState("build"),[o,r]=u.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(ke,{tone:"default","data-testid":"change-count",children:o})]}),n.jsx(b,{items:f,value:e,onValueChange:l=>{a(l),r(c=>c+1)}})]})}const I={render:()=>n.jsx(Be,{}),play:async({canvasElement:e})=>{const a=m(e),o=a.getByRole("tab",{name:"Build"}),r=a.getByRole("tab",{name:"Release"}),l=a.getByTestId("change-count");await p.click(o),await s(l).toHaveTextContent("0"),await p.click(r),await s(l).toHaveTextContent("1"),await p.click(r),await s(l).toHaveTextContent("1")}},V={render:()=>n.jsx(b,{items:f,defaultValue:"spec"}),play:async({canvasElement:e})=>{const a=m(e),o=a.getByRole("tab",{name:"Spec"}),r=a.getByRole("tab",{name:"Release"}),l=o.getAttribute("aria-controls"),c=r.getAttribute("aria-controls");await s(l).toBeTruthy(),await s(c).toBeTruthy(),await s(document.getElementById(l)).not.toBeNull(),await s(document.getElementById(c)).not.toBeNull();const v=document.getElementById(c);await s(v).toHaveAttribute("hidden"),await p.click(r),await s(v).not.toHaveAttribute("hidden")}};var G,O,J;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(J=(O=T.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Q,X,Y;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
    </div>
}`,...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,le;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(le=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ie,de;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,be;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", {
      name: "Build"
    })).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
  }
}`,...(be=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ye,ge,me;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(me=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ve,we,fe;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(we=V.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};const Ve=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","LabelledByHeading","Vertical","ManualActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{I as ChangeTelemetry,B as Controlled,V as ControlsReferenceMountedPanels,T as Default,E as KeyboardNavigationGuide,j as LabelledByHeading,A as ManualActivation,H as Vertical,S as WithDisabledTab,Ve as __namedExportsOrder,Ie as default};
