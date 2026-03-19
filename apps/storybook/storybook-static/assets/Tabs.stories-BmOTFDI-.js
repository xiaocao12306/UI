import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as We}from"./Badge-ZJmMstsz.js";import{within as y,expect as t,userEvent as i}from"./index-DgAF9SIF.js";function ea(a,e,n,l){var w,x;if(a.length===0)return-1;const c=(w=a[e])!=null&&w.disabled?-1:e;let d=e;for(let k=0;k<a.length;k+=1){if(d+=n,l)d<0?d=a.length-1:d>=a.length&&(d=0);else if(d<0||d>=a.length)return c;if(!((x=a[d])!=null&&x.disabled))return d}return c}function aa(a){return a.findIndex(e=>!e.disabled)}function ta(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function b({items:a,value:e,defaultValue:n,ariaLabel:l="Tabs",ariaLabelledBy:c,orientation:d="horizontal",activationMode:w="automatic",loop:x=!0,onValueChange:k}){var ee;const B=u.useId(),O=u.useRef(null),$=u.useRef([]),H=u.useRef(null),g=u.useRef(null),U=u.useRef(!0),_=(ee=a.find(r=>!r.disabled))==null?void 0:ee.key,[W,J]=u.useState(n??_),[Ge,Q]=u.useState(null),[Ye,A]=u.useState(null),[Oe,S]=u.useState(null),X=e??W,p=a.some(r=>r.key===X&&!r.disabled)?X:_,[Z,E]=u.useState(p),Je=a.some(r=>r.key===Z&&!r.disabled)?Z:p;u.useEffect(()=>{e===void 0&&p!==W&&J(p)},[p,W,e]),u.useEffect(()=>{E(p)},[p]),u.useEffect(()=>()=>{g.current!==null&&window.clearTimeout(g.current)},[]);const Qe=u.useCallback(()=>{H.current=null,g.current!==null&&(window.clearTimeout(g.current),g.current=null)},[]),G=u.useCallback(r=>{const v=a.find(m=>m.key===r);!v||v.disabled||r===p||(e===void 0&&J(r),k==null||k(r))},[p,a,k,e]);return s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx("div",{ref:O,role:"tablist","aria-label":c?void 0:l,"aria-labelledby":c,"aria-orientation":d,"aria-disabled":_?void 0:!0,style:{display:"flex",gap:6,flexWrap:d==="horizontal"?"wrap":"nowrap",flexDirection:d==="vertical"?"column":"row"},children:a.map((r,v)=>{const m=r.key===p,f=!!r.disabled,ae=Ge===r.key,te=Ye===r.key,ne=Oe===r.key,Xe=ae||ne;return s.jsx("button",{ref:o=>{$.current[v]=o},id:`${B}-tab-${v}`,type:"button",role:"tab","aria-selected":m,"aria-controls":`${B}-panel-${v}`,"aria-disabled":f||void 0,"aria-keyshortcuts":w==="manual"&&!f?"Enter Space":void 0,tabIndex:Je===r.key?0:-1,disabled:f,onClick:o=>{E(r.key);const h=w==="manual"&&o.detail===0&&H.current===r.key;Qe(),!h&&G(r.key)},onMouseEnter:()=>{f||Q(r.key)},onMouseLeave:()=>{Q(o=>o===r.key?null:o),A(o=>o===r.key?null:o)},onMouseDown:()=>{f||(U.current=!1,S(o=>o===r.key?null:o),A(r.key))},onMouseUp:()=>{A(o=>o===r.key?null:o)},onFocus:()=>{if(E(r.key),f){S(o=>o===r.key?null:o);return}S(o=>oa($.current[v],U.current)?r.key:o===r.key?null:o)},onBlur:()=>{S(o=>o===r.key?null:o),A(o=>o===r.key?null:o)},onKeyDown:o=>{if(U.current=!0,w==="manual"&&na(o.key)){if(o.preventDefault(),o.repeat)return;H.current=r.key,g.current!==null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{H.current=null,g.current=null},0),G(r.key);return}const h=R=>{var se,oe;const Y=(se=a[R])==null?void 0:se.key;Y&&(E(Y),w==="automatic"&&G(Y),(oe=$.current[R])==null||oe.focus())};if(o.key==="Home"){o.preventDefault();const R=aa(a);h(R);return}if(o.key==="End"){o.preventDefault();const R=ta(a);h(R);return}const re=ra({orientation:d,key:o.key,isRtl:d==="horizontal"&&sa(O.current)});if(!re)return;o.preventDefault();const Ze=ea(a,v,re,x);h(Ze)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:m?"1px solid var(--aurora-accent-default)":Xe?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:m?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":te?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":ae?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:f?"not-allowed":"pointer",boxShadow:ne?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:te?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),a.map((r,v)=>{const m=r.key===p;return s.jsx("div",{id:`${B}-panel-${v}`,role:"tabpanel","aria-labelledby":`${B}-tab-${v}`,tabIndex:m?0:-1,hidden:!m,style:{display:m?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function na(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function ra({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function sa(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function oa(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const T=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],va={title:"Data/Tabs",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:T,defaultValue:"spec"}},L={};function la(){const[a,e]=u.useState("build");return s.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),s.jsx(We,{tone:"default",children:a})]}),s.jsx(b,{items:T,value:a,onValueChange:e})]})}const j={render:()=>s.jsx(la,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Release"}),l=e.getByRole("tab",{name:"Spec"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await i.keyboard("{Home}"),await t(l).toHaveAttribute("aria-selected","true"),await t(l).toHaveFocus()}},I={render:()=>s.jsx(b,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},V={render:()=>s.jsx(b,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const l=e.getAllByRole("tab");await t(l).toHaveLength(2),l.forEach(c=>{t(c).toBeDisabled(),t(c).not.toHaveAttribute("aria-keyshortcuts"),t(c).toHaveAttribute("aria-selected","false"),t(c).toHaveAttribute("tabindex","-1")})}},C={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),s.jsx(b,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),c=e.getByRole("tab",{name:"Blocked"});await i.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(c).toHaveAttribute("aria-disabled","true"),await i.keyboard("{End}"),await t(l).toHaveAttribute("aria-selected","true"),await t(l).toHaveFocus(),await i.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},D={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Set ",s.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),s.jsx(b,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:T})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(l),await i.keyboard("{ArrowRight}"),await t(l).toHaveFocus(),await t(l).toHaveAttribute("aria-selected","true"),await i.click(n),await i.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function ia(){const a=u.useId();return s.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[s.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),s.jsx(b,{ariaLabelledBy:a,items:T,defaultValue:"spec"})]})}const F={render:()=>s.jsx(ia,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},N={render:()=>s.jsx("div",{style:{width:620},children:s.jsx(b,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const l=e.getByRole("tab",{name:"Spec"});await i.click(l),await i.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},P={render:()=>s.jsxs("div",{dir:"rtl",style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),s.jsx(b,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:T})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await i.keyboard("{ArrowRight}"),await t(l).toHaveFocus(),await t(l).toHaveAttribute("aria-selected","true"),await i.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},M={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),s.jsx(b,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await i.keyboard("{End}"),await t(l).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),l.focus(),await i.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},q={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),s.jsx(b,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Backlog"}),l=e.getByRole("tab",{name:"Review"}),c=e.getByRole("tab",{name:"Ship"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).toHaveAttribute("aria-disabled","true"),await t(l).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{ArrowDown}"),await t(c).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function ca(){const[a,e]=u.useState("build"),[n,l]=u.useState(0);return s.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),s.jsx(We,{tone:"default","data-testid":"change-count",children:n})]}),s.jsx(b,{items:T,value:a,onValueChange:c=>{e(c),l(d=>d+1)}})]})}const K={render:()=>s.jsx(ca,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),l=e.getByRole("tab",{name:"Release"}),c=e.getByTestId("change-count");await i.click(n),await t(c).toHaveTextContent("0"),await i.click(l),await t(c).toHaveTextContent("1"),await i.click(l),await t(c).toHaveTextContent("1")}},z={render:()=>s.jsx(b,{items:T,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),c=n.getAttribute("aria-controls"),d=l.getAttribute("aria-controls");await t(c).toBeTruthy(),await t(d).toBeTruthy(),await t(document.getElementById(c)).not.toBeNull(),await t(document.getElementById(d)).not.toBeNull();const w=document.getElementById(d);await t(w).toHaveAttribute("hidden"),await i.click(l),await t(w).not.toHaveAttribute("hidden")}};var le,ie,ce;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:"{}",...(ce=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,be;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var pe,ve,ye;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var we,ge,me;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <Tabs ariaLabel="All disabled release tabs" activationMode="manual" items={[{
    key: "spec",
    label: "Spec",
    content: "Specification stage is disabled.",
    disabled: true
  }, {
    key: "release",
    label: "Release",
    content: "Release stage is disabled.",
    disabled: true
  }]} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", {
      name: "All disabled release tabs"
    });
    await expect(tabList).toHaveAttribute("aria-disabled", "true");
    const allTabs = canvas.getAllByRole("tab");
    await expect(allTabs).toHaveLength(2);
    allTabs.forEach(tab => {
      expect(tab).toBeDisabled();
      expect(tab).not.toHaveAttribute("aria-keyshortcuts");
      expect(tab).toHaveAttribute("aria-selected", "false");
      expect(tab).toHaveAttribute("tabindex", "-1");
    });
  }
}`,...(me=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var fe,ke,Te;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown.
        Home jumps to first enabled tab, End jumps to last enabled tab.
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
}`,...(Te=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Re,he,xe;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Set <code>loop=&#123;false&#125;</code> to keep Arrow navigation at tablist boundaries
        instead of wrapping.
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
}`,...(xe=(he=D.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Be,He,Ae;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Ae=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var Se,Ee,Le;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Le=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var je,Ie,Ve;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div dir="rtl" style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the
        next tab.
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
}`,...(Ve=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Ce,De,Fe;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to
        activate.
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
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
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
}`,...(Fe=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Ne,Pe,Me;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus;
        Enter/Space activates.
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
    const reviewTab = canvas.getByRole("tab", {
      name: "Review"
    });
    const shipTab = canvas.getByRole("tab", {
      name: "Ship"
    });
    await userEvent.click(backlogTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent.");
    await expect(backlogTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(shipTab).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(reviewTab).toHaveAttribute("aria-disabled", "true");
    await expect(reviewTab).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{ArrowDown}");
    await expect(shipTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent.");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.");
  }
}`,...(Me=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var qe,Ke,ze;K.parameters={...K.parameters,docs:{...(qe=K.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var $e,Ue,_e;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(_e=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:_e.source}}};const ya=["Default","Controlled","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{V as AllTabsDisabled,K as ChangeTelemetry,j as Controlled,z as ControlsReferenceMountedPanels,L as Default,C as KeyboardNavigationGuide,F as LabelledByHeading,M as ManualActivation,q as ManualVerticalActivation,D as NoLoopNavigation,P as RtlKeyboardNavigation,N as Vertical,I as WithDisabledTab,ya as __namedExportsOrder,va as default};
