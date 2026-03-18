import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Ce}from"./Badge-Dkm8CRgf.js";import{within as y,userEvent as l,expect as t}from"./index-DgAF9SIF.js";function Ne(a,e,s,o){var v,R;if(a.length===0)return-1;const c=(v=a[e])!=null&&v.disabled?-1:e;let i=e;for(let w=0;w<a.length;w+=1){if(i+=s,o)i<0?i=a.length-1:i>=a.length&&(i=0);else if(i<0||i>=a.length)return c;if(!((R=a[i])!=null&&R.disabled))return i}return c}function Fe(a){return a.findIndex(e=>!e.disabled)}function Pe(a){var e;for(let s=a.length-1;s>=0;s-=1)if(!((e=a[s])!=null&&e.disabled))return s;return-1}function d({items:a,value:e,defaultValue:s,ariaLabel:o="Tabs",ariaLabelledBy:c,orientation:i="horizontal",activationMode:v="automatic",loop:R=!0,onValueChange:w}){var G;const h=b.useId(),K=b.useRef(null),z=b.useRef([]),$=(G=a.find(r=>!r.disabled))==null?void 0:G.key,[F,U]=b.useState(s??$),_=e??F,p=a.some(r=>r.key===_&&!r.disabled)?_:$,[W,T]=b.useState(p),Ve=a.some(r=>r.key===W&&!r.disabled)?W:p;b.useEffect(()=>{e===void 0&&p!==F&&U(p)},[p,F,e]),b.useEffect(()=>{T(p)},[p]);const P=b.useCallback(r=>{const g=a.find(k=>k.key===r);!g||g.disabled||r===p||(e===void 0&&U(r),w==null||w(r))},[p,a,w,e]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{ref:K,role:"tablist","aria-label":c?void 0:o,"aria-labelledby":c,"aria-orientation":i,style:{display:"flex",gap:6,flexWrap:i==="horizontal"?"wrap":"nowrap",flexDirection:i==="vertical"?"column":"row"},children:a.map((r,g)=>{const k=r.key===p,x=!!r.disabled;return n.jsx("button",{ref:u=>{z.current[g]=u},id:`${h}-tab-${r.key}`,type:"button",role:"tab","aria-selected":k,"aria-controls":`${h}-panel-${r.key}`,"aria-disabled":x||void 0,tabIndex:Ve===r.key?0:-1,disabled:x,onClick:u=>{T(r.key),!(v==="manual"&&u.detail===0)&&P(r.key)},onFocus:()=>{T(r.key)},onKeyDown:u=>{if(v==="manual"&&Me(u.key)){u.preventDefault(),P(r.key);return}const M=f=>{var J,Q;const q=(J=a[f])==null?void 0:J.key;q&&(T(q),v==="automatic"&&P(q),(Q=z.current[f])==null||Q.focus())};if(u.key==="Home"){u.preventDefault();const f=Fe(a);M(f);return}if(u.key==="End"){u.preventDefault();const f=Pe(a);M(f);return}const O=qe({orientation:i,key:u.key,isRtl:i==="horizontal"&&Ke(K.current)});if(!O)return;u.preventDefault();const De=Ne(a,g,O,R);M(De)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:k?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:k?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:x?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:x?"not-allowed":"pointer"},children:r.label},r.key)})}),a.map(r=>{const g=r.key===p;return n.jsx("div",{id:`${h}-panel-${r.key}`,role:"tabpanel","aria-labelledby":`${h}-tab-${r.key}`,hidden:!g,style:{display:g?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function Me(a){return a==="Enter"||a===" "||a==="Spacebar"}function qe({orientation:a,key:e,isRtl:s}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return s?-1:1;if(e==="ArrowLeft")return s?1:-1}function Ke(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}d.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const m=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Je={title:"Data/Tabs",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:m,defaultValue:"spec"}},B={};function ze(){const[a,e]=b.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(Ce,{tone:"default",children:a})]}),n.jsx(d,{items:m,value:a,onValueChange:e})]})}const E={render:()=>n.jsx(ze,{}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Release"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),e.getByRole("tablist",{name:"Tabs"}).focus(),await l.keyboard("{Home}"),await t(e.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},H={render:()=>n.jsx(d,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},A={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(d,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),c=e.getByRole("tab",{name:"Blocked"});await l.click(s),await t(s).toHaveAttribute("aria-selected","true"),await t(c).toHaveAttribute("aria-disabled","true"),await l.keyboard("{End}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},S={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Set ",n.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),n.jsx(d,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:m})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(o),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await l.click(s),await l.keyboard("{ArrowLeft}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true")}};function $e(){const a=b.useId();return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),n.jsx(d,{ariaLabelledBy:a,items:m,defaultValue:"spec"})]})}const j={render:()=>n.jsx($e,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},L={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(d,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(s).toHaveAttribute("aria-orientation","vertical");const o=e.getByRole("tab",{name:"Spec"});await l.click(o),await l.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},I={render:()=>n.jsxs("div",{dir:"rtl",style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),n.jsx(d,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:m})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true")}},C={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),n.jsx(d,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await l.keyboard("{End}"),await t(o).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),o.focus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},V={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),n.jsx(d,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Backlog"}),o=e.getByRole("tab",{name:"Ship"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{ArrowDown}"),await t(o).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Ue(){const[a,e]=b.useState("build"),[s,o]=b.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(Ce,{tone:"default","data-testid":"change-count",children:s})]}),n.jsx(d,{items:m,value:a,onValueChange:c=>{e(c),o(i=>i+1)}})]})}const D={render:()=>n.jsx(Ue,{}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Build"}),o=e.getByRole("tab",{name:"Release"}),c=e.getByTestId("change-count");await l.click(s),await t(c).toHaveTextContent("0"),await l.click(o),await t(c).toHaveTextContent("1"),await l.click(o),await t(c).toHaveTextContent("1")}},N={render:()=>n.jsx(d,{items:m,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),c=s.getAttribute("aria-controls"),i=o.getAttribute("aria-controls");await t(c).toBeTruthy(),await t(i).toBeTruthy(),await t(document.getElementById(c)).not.toBeNull(),await t(document.getElementById(i)).not.toBeNull();const v=document.getElementById(i);await t(v).toHaveAttribute("hidden"),await l.click(o),await t(v).not.toHaveAttribute("hidden")}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:"{}",...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(se=H.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ie;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Set <code>loop=&#123;false&#125;</code> to keep Arrow navigation at tablist boundaries instead of wrapping.
      </p>
      <Tabs ariaLabel="No loop tabs" defaultValue="spec" loop={false} items={productTabs} />
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
    await userEvent.click(releaseTab);
    await userEvent.keyboard("{ArrowRight}");
    await expect(releaseTab).toHaveFocus();
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowLeft}");
    await expect(specTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
  }
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var be,pe,ye;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(ye=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ve,ge,we;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var me,fe,ke;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div dir="rtl" style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab.
      </p>
      <Tabs ariaLabel="RTL workflow tabs" defaultValue="spec" items={productTabs} />
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
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Token contract, component API");
    await userEvent.keyboard("{ArrowRight}");
    await expect(releaseTab).toHaveFocus();
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowLeft}");
    await expect(specTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
  }
}`,...(ke=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Re,he,Te;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Te=(he=C.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var xe,Be,Ee;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ee=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var He,Ae,Se;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Se=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var je,Le,Ie;N.parameters={...N.parameters,docs:{...(je=N.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ie=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};const Qe=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{D as ChangeTelemetry,E as Controlled,N as ControlsReferenceMountedPanels,B as Default,A as KeyboardNavigationGuide,j as LabelledByHeading,C as ManualActivation,V as ManualVerticalActivation,S as NoLoopNavigation,I as RtlKeyboardNavigation,L as Vertical,H as WithDisabledTab,Qe as __namedExportsOrder,Je as default};
