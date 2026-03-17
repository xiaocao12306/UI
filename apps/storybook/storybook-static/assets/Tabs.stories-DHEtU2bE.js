import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as pe}from"./Badge-Dkm8CRgf.js";import{within as j,userEvent as b,expect as c}from"./index-DgAF9SIF.js";function D(e,a,o){var s;if(e.length===0)return-1;let r=a;for(let l=0;l<e.length;l+=1)if(r=(r+o+e.length)%e.length,!((s=e[r])!=null&&s.disabled))return r;return-1}function p({items:e,value:a,defaultValue:o,ariaLabel:r="Tabs",orientation:s="horizontal",onValueChange:l}){var L;const y=u.useId(),f=u.useRef([]),C=(L=e.find(t=>!t.disabled))==null?void 0:L.key,[H,V]=u.useState(o??C),P=a??H,v=e.some(t=>t.key===P&&!t.disabled)?P:C;u.useEffect(()=>{a===void 0&&v!==H&&V(v)},[v,H,a]);const k=u.useCallback(t=>{const i=e.find(g=>g.key===t);!i||i.disabled||t===v||(a===void 0&&V(t),l==null||l(t))},[v,e,l,a]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{role:"tablist","aria-label":r,"aria-orientation":s,style:{display:"flex",gap:6,flexWrap:s==="horizontal"?"wrap":"nowrap",flexDirection:s==="vertical"?"column":"row"},children:e.map((t,i)=>{const g=t.key===v,h=!!t.disabled;return n.jsx("button",{ref:d=>{f.current[i]=d},id:`${y}-tab-${t.key}`,type:"button",role:"tab","aria-selected":g,"aria-controls":`${y}-panel-${t.key}`,"aria-disabled":h||void 0,tabIndex:g?0:-1,disabled:h,onClick:()=>k(t.key),onKeyDown:d=>{var z,$,_,U,W,G;if(d.key==="Home"){d.preventDefault();const m=D(e,-1,1),w=(z=e[m])==null?void 0:z.key;w&&(k(w),($=f.current[m])==null||$.focus());return}if(d.key==="End"){d.preventDefault();const m=D(e,0,-1),w=(_=e[m])==null?void 0:_.key;w&&(k(w),(U=f.current[m])==null||U.focus());return}const N=(s==="horizontal"?{ArrowRight:1,ArrowLeft:-1}:{ArrowDown:1,ArrowUp:-1})[d.key];if(!N)return;d.preventDefault();const K=D(e,i,N),q=(W=e[K])==null?void 0:W.key;q&&(k(q),(G=f.current[K])==null||G.focus())},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:g?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:h?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:h?"not-allowed":"pointer"},children:t.label},t.key)})}),e.map(t=>{const i=t.key===v;return n.jsx("div",{id:`${y}-panel-${t.key}`,role:"tabpanel","aria-labelledby":`${y}-tab-${t.key}`,hidden:!i,style:{display:i?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:t.content},t.key)})]})}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const I=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],he={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:I,defaultValue:"spec"}},R={};function ye(){const[e,a]=u.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(pe,{tone:"default",children:e})]}),n.jsx(p,{items:I,value:e,onValueChange:a})]})}const x={render:()=>n.jsx(ye,{}),play:async({canvasElement:e})=>{const a=j(e),o=a.getByRole("tab",{name:"Release"});await b.click(o),await c(a.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),a.getByRole("tablist",{name:"Tabs"}).focus(),await b.keyboard("{Home}"),await c(a.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},T={render:()=>n.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},B={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]})},S={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:e})=>{const a=j(e),o=a.getByRole("tablist",{name:"Vertical workflow tabs"});await c(o).toHaveAttribute("aria-orientation","vertical");const r=a.getByRole("tab",{name:"Spec"});await b.click(r),await b.keyboard("{ArrowDown}"),await c(a.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}};function ve(){const[e,a]=u.useState("build"),[o,r]=u.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(pe,{tone:"default","data-testid":"change-count",children:o})]}),n.jsx(p,{items:I,value:e,onValueChange:s=>{a(s),r(l=>l+1)}})]})}const E={render:()=>n.jsx(ve,{}),play:async({canvasElement:e})=>{const a=j(e),o=a.getByRole("tab",{name:"Build"}),r=a.getByRole("tab",{name:"Release"}),s=a.getByTestId("change-count");await b.click(o),await c(s).toHaveTextContent("0"),await b.click(r),await c(s).toHaveTextContent("1"),await b.click(r),await c(s).toHaveTextContent("1")}},A={render:()=>n.jsx(p,{items:I,defaultValue:"spec"}),play:async({canvasElement:e})=>{const a=j(e),o=a.getByRole("tab",{name:"Spec"}),r=a.getByRole("tab",{name:"Release"}),s=o.getAttribute("aria-controls"),l=r.getAttribute("aria-controls");await c(s).toBeTruthy(),await c(l).toBeTruthy(),await c(document.getElementById(s)).not.toBeNull(),await c(document.getElementById(l)).not.toBeNull();const y=document.getElementById(l);await c(y).toHaveAttribute("hidden"),await b.click(r),await c(y).not.toHaveAttribute("hidden")}};var M,O,F;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(F=(O=R.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,Q,X;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,se,oe;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ce,ie;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,be;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const Re=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","Vertical","ChangeTelemetry","ControlsReferenceMountedPanels"];export{E as ChangeTelemetry,x as Controlled,A as ControlsReferenceMountedPanels,R as Default,B as KeyboardNavigationGuide,S as Vertical,T as WithDisabledTab,Re as __namedExportsOrder,he as default};
