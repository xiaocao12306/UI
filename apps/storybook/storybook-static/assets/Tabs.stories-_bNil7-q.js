import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as Ve}from"./Badge-fH5xjxKG.js";import{within as v,userEvent as l,expect as t}from"./index-DgAF9SIF.js";function Ne(a,e,s,r){var w,T;if(a.length===0)return-1;const i=(w=a[e])!=null&&w.disabled?-1:e;let c=e;for(let m=0;m<a.length;m+=1){if(c+=s,r)c<0?c=a.length-1:c>=a.length&&(c=0);else if(c<0||c>=a.length)return i;if(!((T=a[c])!=null&&T.disabled))return c}return i}function Pe(a){return a.findIndex(e=>!e.disabled)}function Me(a){var e;for(let s=a.length-1;s>=0;s-=1)if(!((e=a[s])!=null&&e.disabled))return s;return-1}function u({items:a,value:e,defaultValue:s,ariaLabel:r="Tabs",ariaLabelledBy:i,orientation:c="horizontal",activationMode:w="automatic",loop:T=!0,onValueChange:m}){var O;const h=d.useId(),z=d.useRef(null),$=d.useRef([]),P=d.useRef(null),U=(O=a.find(o=>!o.disabled))==null?void 0:O.key,[M,_]=d.useState(s??U),W=e??M,b=a.some(o=>o.key===W&&!o.disabled)?W:U,[G,x]=d.useState(b),De=a.some(o=>o.key===G&&!o.disabled)?G:b;d.useEffect(()=>{e===void 0&&b!==M&&_(b)},[b,M,e]),d.useEffect(()=>{x(b)},[b]);const q=d.useCallback(o=>{const y=a.find(g=>g.key===o);!y||y.disabled||o===b||(e===void 0&&_(o),m==null||m(o))},[b,a,m,e]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{ref:z,role:"tablist","aria-label":i?void 0:r,"aria-labelledby":i,"aria-orientation":c,style:{display:"flex",gap:6,flexWrap:c==="horizontal"?"wrap":"nowrap",flexDirection:c==="vertical"?"column":"row"},children:a.map((o,y)=>{const g=o.key===b,B=!!o.disabled;return n.jsx("button",{ref:p=>{$.current[y]=p},id:`${h}-tab-${y}`,type:"button",role:"tab","aria-selected":g,"aria-controls":`${h}-panel-${y}`,"aria-disabled":B||void 0,tabIndex:De===o.key?0:-1,disabled:B,onClick:p=>{x(o.key);const R=w==="manual"&&p.detail===0&&P.current===o.key;P.current=null,!R&&q(o.key)},onFocus:()=>{x(o.key)},onKeyDown:p=>{if(w==="manual"&&qe(p.key)){p.preventDefault(),P.current=o.key,q(o.key);return}const R=k=>{var Q,X;const K=(Q=a[k])==null?void 0:Q.key;K&&(x(K),w==="automatic"&&q(K),(X=$.current[k])==null||X.focus())};if(p.key==="Home"){p.preventDefault();const k=Pe(a);R(k);return}if(p.key==="End"){p.preventDefault();const k=Me(a);R(k);return}const J=Ke({orientation:c,key:p.key,isRtl:c==="horizontal"&&ze(z.current)});if(!J)return;p.preventDefault();const Fe=Ne(a,y,J,T);R(Fe)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:g?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:B?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:B?"not-allowed":"pointer"},children:o.label},o.key)})}),a.map((o,y)=>{const g=o.key===b;return n.jsx("div",{id:`${h}-panel-${y}`,role:"tabpanel","aria-labelledby":`${h}-tab-${y}`,tabIndex:g?0:-1,hidden:!g,style:{display:g?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:o.content},o.key)})]})}function qe(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Ke({orientation:a,key:e,isRtl:s}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return s?-1:1;if(e==="ArrowLeft")return s?1:-1}function ze(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}u.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const f=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Qe={title:"Data/Tabs",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:f,defaultValue:"spec"}},H={};function $e(){const[a,e]=d.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(Ve,{tone:"default",children:a})]}),n.jsx(u,{items:f,value:a,onValueChange:e})]})}const E={render:()=>n.jsx($e,{}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Release"}),r=e.getByRole("tab",{name:"Spec"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(s).toHaveFocus(),await l.keyboard("{Home}"),await t(r).toHaveAttribute("aria-selected","true"),await t(r).toHaveFocus()}},S={render:()=>n.jsx(u,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},A={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),n.jsx(u,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await l.click(s),await t(s).toHaveAttribute("aria-selected","true"),await t(i).toHaveAttribute("aria-disabled","true"),await l.keyboard("{End}"),await t(r).toHaveAttribute("aria-selected","true"),await t(r).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},j={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Set ",n.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),n.jsx(u,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:f})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await l.click(r),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r).toHaveAttribute("aria-selected","true"),await l.click(s),await l.keyboard("{ArrowLeft}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true")}};function Ue(){const a=d.useId();return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),n.jsx(u,{ariaLabelledBy:a,items:f,defaultValue:"spec"})]})}const I={render:()=>n.jsx(Ue,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},L={render:()=>n.jsx("div",{style:{width:620},children:n.jsx(u,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(s).toHaveAttribute("aria-orientation","vertical");const r=e.getByRole("tab",{name:"Spec"});await l.click(r),await l.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},C={render:()=>n.jsxs("div",{dir:"rtl",style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),n.jsx(u,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:f})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true")}},V={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),n.jsx(u,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await l.keyboard("{End}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),r.focus(),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},D={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),n.jsx(u,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Backlog"}),r=e.getByRole("tab",{name:"Ship"});await l.click(s),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{ArrowDown}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function _e(){const[a,e]=d.useState("build"),[s,r]=d.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(Ve,{tone:"default","data-testid":"change-count",children:s})]}),n.jsx(u,{items:f,value:a,onValueChange:i=>{e(i),r(c=>c+1)}})]})}const F={render:()=>n.jsx(_e,{}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await l.click(s),await t(i).toHaveTextContent("0"),await l.click(r),await t(i).toHaveTextContent("1"),await l.click(r),await t(i).toHaveTextContent("1")}},N={render:()=>n.jsx(u,{items:f,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Release"}),i=s.getAttribute("aria-controls"),c=r.getAttribute("aria-controls");await t(i).toBeTruthy(),await t(c).toBeTruthy(),await t(document.getElementById(i)).not.toBeNull(),await t(document.getElementById(c)).not.toBeNull();const w=document.getElementById(c);await t(w).toHaveAttribute("hidden"),await l.click(r),await t(w).not.toHaveAttribute("hidden")}};var Y,Z,ee;H.parameters={...H.parameters,docs:{...(Y=H.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(ee=(Z=H.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,oe;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ce,ie;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,ye,ve;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(ve=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var we,ge,me;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(me=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var fe,ke,Re;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Re=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Te,he,xe;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(xe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Be,He,Ee;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(He=D.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var Se,Ae,je;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Ie,Le,Ce;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ce=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source}}};const Xe=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{F as ChangeTelemetry,E as Controlled,N as ControlsReferenceMountedPanels,H as Default,A as KeyboardNavigationGuide,I as LabelledByHeading,V as ManualActivation,D as ManualVerticalActivation,j as NoLoopNavigation,C as RtlKeyboardNavigation,L as Vertical,S as WithDisabledTab,Xe as __namedExportsOrder,Qe as default};
