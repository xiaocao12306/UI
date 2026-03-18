import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{B as Ce}from"./Badge-Dkm8CRgf.js";import{within as v,userEvent as l,expect as t}from"./index-DgAF9SIF.js";function Fe(a,e,s,r){var w,R;if(a.length===0)return-1;const i=(w=a[e])!=null&&w.disabled?-1:e;let c=e;for(let m=0;m<a.length;m+=1){if(c+=s,r)c<0?c=a.length-1:c>=a.length&&(c=0);else if(c<0||c>=a.length)return i;if(!((R=a[c])!=null&&R.disabled))return c}return i}function Ne(a){return a.findIndex(e=>!e.disabled)}function Pe(a){var e;for(let s=a.length-1;s>=0;s-=1)if(!((e=a[s])!=null&&e.disabled))return s;return-1}function d({items:a,value:e,defaultValue:s,ariaLabel:r="Tabs",ariaLabelledBy:i,orientation:c="horizontal",activationMode:w="automatic",loop:R=!0,onValueChange:m}){var G;const T=p.useId(),K=p.useRef(null),z=p.useRef([]),$=(G=a.find(o=>!o.disabled))==null?void 0:G.key,[N,U]=p.useState(s??$),_=e??N,b=a.some(o=>o.key===_&&!o.disabled)?_:$,[W,h]=p.useState(b),Ve=a.some(o=>o.key===W&&!o.disabled)?W:b;p.useEffect(()=>{e===void 0&&b!==N&&U(b)},[b,N,e]),p.useEffect(()=>{h(b)},[b]);const P=p.useCallback(o=>{const y=a.find(g=>g.key===o);!y||y.disabled||o===b||(e===void 0&&U(o),m==null||m(o))},[b,a,m,e]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{ref:K,role:"tablist","aria-label":i?void 0:r,"aria-labelledby":i,"aria-orientation":c,style:{display:"flex",gap:6,flexWrap:c==="horizontal"?"wrap":"nowrap",flexDirection:c==="vertical"?"column":"row"},children:a.map((o,y)=>{const g=o.key===b,x=!!o.disabled;return n.jsx("button",{ref:u=>{z.current[y]=u},id:`${T}-tab-${y}`,type:"button",role:"tab","aria-selected":g,"aria-controls":`${T}-panel-${y}`,"aria-disabled":x||void 0,tabIndex:Ve===o.key?0:-1,disabled:x,onClick:u=>{h(o.key),!(w==="manual"&&u.detail===0)&&P(o.key)},onFocus:()=>{h(o.key)},onKeyDown:u=>{if(w==="manual"&&Me(u.key)){u.preventDefault(),P(o.key);return}const M=k=>{var J,Q;const q=(J=a[k])==null?void 0:J.key;q&&(h(q),w==="automatic"&&P(q),(Q=z.current[k])==null||Q.focus())};if(u.key==="Home"){u.preventDefault();const k=Ne(a);M(k);return}if(u.key==="End"){u.preventDefault();const k=Pe(a);M(k);return}const O=qe({orientation:c,key:u.key,isRtl:c==="horizontal"&&Ke(K.current)});if(!O)return;u.preventDefault();const De=Fe(a,y,O,R);M(De)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:g?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:x?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:x?"not-allowed":"pointer"},children:o.label},o.key)})}),a.map((o,y)=>{const g=o.key===b;return n.jsx("div",{id:`${T}-panel-${y}`,role:"tabpanel","aria-labelledby":`${T}-tab-${y}`,tabIndex:g?0:-1,hidden:!g,style:{display:g?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:o.content},o.key)})]})}function Me(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function qe({orientation:a,key:e,isRtl:s}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return s?-1:1;if(e==="ArrowLeft")return s?1:-1}function Ke(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}d.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const f=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Je={title:"Data/Tabs",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:f,defaultValue:"spec"}},B={};function ze(){const[a,e]=p.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(Ce,{tone:"default",children:a})]}),n.jsx(d,{items:f,value:a,onValueChange:e})]})}const H={render:()=>n.jsx(ze,{}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Release"}),r=e.getByRole("tab",{name:"Spec"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(s).toHaveFocus(),await l.keyboard("{Home}"),await t(r).toHaveAttribute("aria-selected","true"),await t(r).toHaveFocus()}},E={render:()=>n.jsx(d,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},S={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(d,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await l.click(s),await t(s).toHaveAttribute("aria-selected","true"),await t(i).toHaveAttribute("aria-disabled","true"),await l.keyboard("{End}"),await t(r).toHaveAttribute("aria-selected","true"),await t(r).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},A={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Set ",n.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),n.jsx(d,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:f})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await l.click(r),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r).toHaveAttribute("aria-selected","true"),await l.click(s),await l.keyboard("{ArrowLeft}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true")}};function $e(){const a=p.useId();return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),n.jsx(d,{ariaLabelledBy:a,items:f,defaultValue:"spec"})]})}const j={render:()=>n.jsx($e,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},I={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(d,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(s).toHaveAttribute("aria-orientation","vertical");const r=e.getByRole("tab",{name:"Spec"});await l.click(r),await l.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},L={render:()=>n.jsxs("div",{dir:"rtl",style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),n.jsx(d,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:f})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true")}},C={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),n.jsx(d,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await l.keyboard("{End}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),r.focus(),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},V={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),n.jsx(d,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Backlog"}),r=e.getByRole("tab",{name:"Ship"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{ArrowDown}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Ue(){const[a,e]=p.useState("build"),[s,r]=p.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(Ce,{tone:"default","data-testid":"change-count",children:s})]}),n.jsx(d,{items:f,value:a,onValueChange:i=>{e(i),r(c=>c+1)}})]})}const D={render:()=>n.jsx(Ue,{}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await l.click(s),await t(i).toHaveTextContent("0"),await l.click(r),await t(i).toHaveTextContent("1"),await l.click(r),await t(i).toHaveTextContent("1")}},F={render:()=>n.jsx(d,{items:f,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),i=s.getAttribute("aria-controls"),c=r.getAttribute("aria-controls");await t(i).toBeTruthy(),await t(c).toBeTruthy(),await t(document.getElementById(i)).not.toBeNull(),await t(document.getElementById(c)).not.toBeNull();const w=document.getElementById(c);await t(w).toHaveAttribute("hidden"),await l.click(r),await t(w).not.toHaveAttribute("hidden")}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:"{}",...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;H.parameters={...H.parameters,docs:{...(ee=H.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ControlledTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    await userEvent.click(releaseTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Publish with changesets");
    await expect(releaseTab).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
  }
}`,...(te=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,re;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(se=E.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ce;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,ue;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,be,ye;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(ye=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ve,we,ge;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=(we=I.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var me,fe,ke;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ke=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Re,Te,he;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage.");
  }
}`,...(he=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var xe,Be,He;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(He=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Ee,Se,Ae;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ae=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var je,Ie,Le;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Le=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};const Qe=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{D as ChangeTelemetry,H as Controlled,F as ControlsReferenceMountedPanels,B as Default,S as KeyboardNavigationGuide,j as LabelledByHeading,C as ManualActivation,V as ManualVerticalActivation,A as NoLoopNavigation,L as RtlKeyboardNavigation,I as Vertical,E as WithDisabledTab,Qe as __namedExportsOrder,Je as default};
