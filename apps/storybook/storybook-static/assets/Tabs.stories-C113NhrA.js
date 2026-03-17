import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{B as ve}from"./Badge-Dkm8CRgf.js";import{within as w,userEvent as u,expect as r}from"./index-DgAF9SIF.js";function L(a,e,l){var o;if(a.length===0)return-1;let s=e;for(let c=0;c<a.length;c+=1)if(s=(s+l+a.length)%a.length,!((o=a[s])!=null&&o.disabled))return s;return-1}function b({items:a,value:e,defaultValue:l,ariaLabel:s="Tabs",orientation:o="horizontal",activationMode:c="automatic",onValueChange:v}){var z;const f=p.useId(),P=p.useRef([]),N=(z=a.find(t=>!t.disabled))==null?void 0:z.key,[I,q]=p.useState(l??N),K=e??I,i=a.some(t=>t.key===K&&!t.disabled)?K:N,[M,k]=p.useState(i),ge=a.some(t=>t.key===M&&!t.disabled)?M:i;p.useEffect(()=>{e===void 0&&i!==I&&q(i)},[i,I,e]),p.useEffect(()=>{k(i)},[i]);const C=p.useCallback(t=>{const y=a.find(m=>m.key===t);!y||y.disabled||t===i||(e===void 0&&q(t),v==null||v(t))},[i,a,v,e]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{role:"tablist","aria-label":s,"aria-orientation":o,style:{display:"flex",gap:6,flexWrap:o==="horizontal"?"wrap":"nowrap",flexDirection:o==="vertical"?"column":"row"},children:a.map((t,y)=>{const m=t.key===i,R=!!t.disabled;return n.jsx("button",{ref:d=>{P.current[y]=d},id:`${f}-tab-${t.key}`,type:"button",role:"tab","aria-selected":m,"aria-controls":`${f}-panel-${t.key}`,"aria-disabled":R||void 0,tabIndex:ge===t.key?0:-1,disabled:R,onClick:()=>{k(t.key),C(t.key)},onFocus:()=>{k(t.key)},onKeyDown:d=>{if(c==="manual"&&(d.key==="Enter"||d.key===" ")){d.preventDefault(),C(t.key);return}const V=g=>{var F,_;const D=(F=a[g])==null?void 0:F.key;D&&(k(D),c==="automatic"&&C(D),(_=P.current[g])==null||_.focus())};if(d.key==="Home"){d.preventDefault();const g=L(a,-1,1);V(g);return}if(d.key==="End"){d.preventDefault();const g=L(a,0,-1);V(g);return}const $=(o==="horizontal"?{ArrowRight:1,ArrowLeft:-1}:{ArrowDown:1,ArrowUp:-1})[d.key];if(!$)return;d.preventDefault();const me=L(a,y,$);V(me)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:m?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:m?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:R?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:R?"not-allowed":"pointer"},children:t.label},t.key)})}),a.map(t=>{const y=t.key===i;return n.jsx("div",{id:`${f}-panel-${t.key}`,role:"tabpanel","aria-labelledby":`${f}-tab-${t.key}`,hidden:!y,style:{display:y?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:t.content},t.key)})]})}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const H=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Be={title:"Data/Tabs",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:H,defaultValue:"spec"}},h={};function we(){const[a,e]=p.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(ve,{tone:"default",children:a})]}),n.jsx(b,{items:H,value:a,onValueChange:e})]})}const x={render:()=>n.jsx(we,{}),play:async({canvasElement:a})=>{const e=w(a),l=e.getByRole("tab",{name:"Release"});await u.click(l),await r(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),e.getByRole("tablist",{name:"Tabs"}).focus(),await u.keyboard("{Home}"),await r(e.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},T={render:()=>n.jsx(b,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},B={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(b,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]})},S={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(b,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=w(a),l=e.getByRole("tablist",{name:"Vertical workflow tabs"});await r(l).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"});await u.click(s),await u.keyboard("{ArrowDown}"),await r(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},E={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),n.jsx(b,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=w(a),l=e.getByRole("tab",{name:"Spec"});await u.click(l),await r(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await u.keyboard("{ArrowRight}"),await r(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await r(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await u.keyboard("{Enter}"),await r(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}};function fe(){const[a,e]=p.useState("build"),[l,s]=p.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(ve,{tone:"default","data-testid":"change-count",children:l})]}),n.jsx(b,{items:H,value:a,onValueChange:o=>{e(o),s(c=>c+1)}})]})}const A={render:()=>n.jsx(fe,{}),play:async({canvasElement:a})=>{const e=w(a),l=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),o=e.getByTestId("change-count");await u.click(l),await r(o).toHaveTextContent("0"),await u.click(s),await r(o).toHaveTextContent("1"),await u.click(s),await r(o).toHaveTextContent("1")}},j={render:()=>n.jsx(b,{items:H,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=w(a),l=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),o=l.getAttribute("aria-controls"),c=s.getAttribute("aria-controls");await r(o).toBeTruthy(),await r(c).toBeTruthy(),await r(document.getElementById(o)).not.toBeNull(),await r(document.getElementById(c)).not.toBeNull();const v=document.getElementById(c);await r(v).toHaveAttribute("hidden"),await u.click(s),await r(v).not.toHaveAttribute("hidden")}};var U,W,G;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var O,J,Q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ce;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,ue;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,be,ye;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Se=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","Vertical","ManualActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{A as ChangeTelemetry,x as Controlled,j as ControlsReferenceMountedPanels,h as Default,B as KeyboardNavigationGuide,E as ManualActivation,S as Vertical,T as WithDisabledTab,Se as __namedExportsOrder,Be as default};
