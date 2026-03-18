import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as ze}from"./Badge-fH5xjxKG.js";import{within as y,userEvent as c,expect as n}from"./index-DgAF9SIF.js";function Je(a,e,s,l){var w,x;if(a.length===0)return-1;const u=(w=a[e])!=null&&w.disabled?-1:e;let i=e;for(let f=0;f<a.length;f+=1){if(i+=s,l)i<0?i=a.length-1:i>=a.length&&(i=0);else if(i<0||i>=a.length)return u;if(!((x=a[i])!=null&&x.disabled))return i}return u}function Qe(a){return a.findIndex(e=>!e.disabled)}function Xe(a){var e;for(let s=a.length-1;s>=0;s-=1)if(!((e=a[s])!=null&&e.disabled))return s;return-1}function b({items:a,value:e,defaultValue:s,ariaLabel:l="Tabs",ariaLabelledBy:u,orientation:i="horizontal",activationMode:w="automatic",loop:x=!0,onValueChange:f}){var Z;const B=d.useId(),G=d.useRef(null),z=d.useRef([]),H=d.useRef(null),g=d.useRef(null),$=d.useRef(!0),Y=(Z=a.find(t=>!t.disabled))==null?void 0:Z.key,[U,O]=d.useState(s??Y),[$e,J]=d.useState(null),[Ue,S]=d.useState(null),[_e,E]=d.useState(null),Q=e??U,p=a.some(t=>t.key===Q&&!t.disabled)?Q:Y,[X,A]=d.useState(p),We=a.some(t=>t.key===X&&!t.disabled)?X:p;d.useEffect(()=>{e===void 0&&p!==U&&O(p)},[p,U,e]),d.useEffect(()=>{A(p)},[p]),d.useEffect(()=>()=>{g.current!==null&&window.clearTimeout(g.current)},[]);const Ge=d.useCallback(()=>{H.current=null,g.current!==null&&(window.clearTimeout(g.current),g.current=null)},[]),_=d.useCallback(t=>{const v=a.find(m=>m.key===t);!v||v.disabled||t===p||(e===void 0&&O(t),f==null||f(t))},[p,a,f,e]);return r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("div",{ref:G,role:"tablist","aria-label":u?void 0:l,"aria-labelledby":u,"aria-orientation":i,style:{display:"flex",gap:6,flexWrap:i==="horizontal"?"wrap":"nowrap",flexDirection:i==="vertical"?"column":"row"},children:a.map((t,v)=>{const m=t.key===p,k=!!t.disabled,ee=$e===t.key,ae=Ue===t.key,te=_e===t.key,Ye=ee||te;return r.jsx("button",{ref:o=>{z.current[v]=o},id:`${B}-tab-${v}`,type:"button",role:"tab","aria-selected":m,"aria-controls":`${B}-panel-${v}`,"aria-disabled":k||void 0,tabIndex:We===t.key?0:-1,disabled:k,onClick:o=>{A(t.key);const h=w==="manual"&&o.detail===0&&H.current===t.key;Ge(),!h&&_(t.key)},onMouseEnter:()=>{k||J(t.key)},onMouseLeave:()=>{J(o=>o===t.key?null:o),S(o=>o===t.key?null:o)},onMouseDown:()=>{k||($.current=!1,E(o=>o===t.key?null:o),S(t.key))},onMouseUp:()=>{S(o=>o===t.key?null:o)},onFocus:()=>{if(A(t.key),k){E(o=>o===t.key?null:o);return}E(o=>ta(z.current[v],$.current)?t.key:o===t.key?null:o)},onBlur:()=>{E(o=>o===t.key?null:o),S(o=>o===t.key?null:o)},onKeyDown:o=>{if($.current=!0,w==="manual"&&Ze(o.key)){o.preventDefault(),H.current=t.key,g.current!==null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{H.current=null,g.current=null},0),_(t.key);return}const h=T=>{var re,se;const W=(re=a[T])==null?void 0:re.key;W&&(A(W),w==="automatic"&&_(W),(se=z.current[T])==null||se.focus())};if(o.key==="Home"){o.preventDefault();const T=Qe(a);h(T);return}if(o.key==="End"){o.preventDefault();const T=Xe(a);h(T);return}const ne=ea({orientation:i,key:o.key,isRtl:i==="horizontal"&&aa(G.current)});if(!ne)return;o.preventDefault();const Oe=Je(a,v,ne,x);h(Oe)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:m?"1px solid var(--aurora-accent-default)":Ye?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:m?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":ae?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":ee?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:k?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:k?"not-allowed":"pointer",boxShadow:te?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ae?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:t.label},t.key)})}),a.map((t,v)=>{const m=t.key===p;return r.jsx("div",{id:`${B}-panel-${v}`,role:"tabpanel","aria-labelledby":`${B}-tab-${v}`,tabIndex:m?0:-1,hidden:!m,style:{display:m?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:t.content},t.key)})]})}function Ze(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function ea({orientation:a,key:e,isRtl:s}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return s?-1:1;if(e==="ArrowLeft")return s?1:-1}function aa(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function ta(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const R=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],da={title:"Data/Tabs",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:R,defaultValue:"spec"}},j={};function na(){const[a,e]=d.useState("build");return r.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),r.jsx(ze,{tone:"default",children:a})]}),r.jsx(b,{items:R,value:a,onValueChange:e})]})}const I={render:()=>r.jsx(na,{}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Release"}),l=e.getByRole("tab",{name:"Spec"});await c.click(s),await n(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await n(s).toHaveFocus(),await c.keyboard("{Home}"),await n(l).toHaveAttribute("aria-selected","true"),await n(l).toHaveFocus()}},L={render:()=>r.jsx(b,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},V={render:()=>r.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),r.jsx(b,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),u=e.getByRole("tab",{name:"Blocked"});await c.click(s),await n(s).toHaveAttribute("aria-selected","true"),await n(u).toHaveAttribute("aria-disabled","true"),await c.keyboard("{End}"),await n(l).toHaveAttribute("aria-selected","true"),await n(l).toHaveFocus(),await c.keyboard("{Home}"),await n(s).toHaveAttribute("aria-selected","true"),await n(s).toHaveFocus()}},C={render:()=>r.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Set ",r.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),r.jsx(b,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:R})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await c.click(l),await c.keyboard("{ArrowRight}"),await n(l).toHaveFocus(),await n(l).toHaveAttribute("aria-selected","true"),await c.click(s),await c.keyboard("{ArrowLeft}"),await n(s).toHaveFocus(),await n(s).toHaveAttribute("aria-selected","true")}};function ra(){const a=d.useId();return r.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[r.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),r.jsx(b,{ariaLabelledBy:a,items:R,defaultValue:"spec"})]})}const D={render:()=>r.jsx(ra,{}),play:async({canvasElement:a})=>{const e=y(a);await n(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},F={render:()=>r.jsx("div",{style:{width:620},children:r.jsx(b,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tablist",{name:"Vertical workflow tabs"});await n(s).toHaveAttribute("aria-orientation","vertical");const l=e.getByRole("tab",{name:"Spec"});await c.click(l),await c.keyboard("{ArrowDown}"),await n(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},N={render:()=>r.jsxs("div",{dir:"rtl",style:{width:620,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),r.jsx(b,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:R})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await c.click(s),await n(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await c.keyboard("{ArrowRight}"),await n(l).toHaveFocus(),await n(l).toHaveAttribute("aria-selected","true"),await c.keyboard("{ArrowLeft}"),await n(s).toHaveFocus(),await n(s).toHaveAttribute("aria-selected","true")}},P={render:()=>r.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),r.jsx(b,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await c.click(s),await n(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{ArrowRight}"),await n(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await n(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{Enter}"),await n(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await c.keyboard("{End}"),await n(l).toHaveFocus(),await n(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),l.focus(),await c.keyboard("{Space}"),await n(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},M={render:()=>r.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),r.jsx(b,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Backlog"}),l=e.getByRole("tab",{name:"Ship"});await c.click(s),await n(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await c.keyboard("{ArrowDown}"),await n(l).toHaveFocus(),await n(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await c.keyboard("{Enter}"),await n(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function sa(){const[a,e]=d.useState("build"),[s,l]=d.useState(0);return r.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),r.jsx(ze,{tone:"default","data-testid":"change-count",children:s})]}),r.jsx(b,{items:R,value:a,onValueChange:u=>{e(u),l(i=>i+1)}})]})}const q={render:()=>r.jsx(sa,{}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Build"}),l=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("change-count");await c.click(s),await n(u).toHaveTextContent("0"),await c.click(l),await n(u).toHaveTextContent("1"),await c.click(l),await n(u).toHaveTextContent("1")}},K={render:()=>r.jsx(b,{items:R,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),s=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),u=s.getAttribute("aria-controls"),i=l.getAttribute("aria-controls");await n(u).toBeTruthy(),await n(i).toBeTruthy(),await n(document.getElementById(u)).not.toBeNull(),await n(document.getElementById(i)).not.toBeNull();const w=document.getElementById(i);await n(w).toHaveAttribute("hidden"),await c.click(l),await n(w).not.toHaveAttribute("hidden")}};var oe,le,ce;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:"{}",...(ce=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,ue;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var be,pe,ve;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ye,we,ge;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(we=V.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var me,fe,ke;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ke=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Re,Te,he;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(he=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var xe,Be,He;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(He=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Se,Ee,Ae;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var je,Ie,Le;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Le=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Ve,Ce,De;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(De=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var Fe,Ne,Pe;q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var Me,qe,Ke;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};const ua=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{q as ChangeTelemetry,I as Controlled,K as ControlsReferenceMountedPanels,j as Default,V as KeyboardNavigationGuide,D as LabelledByHeading,P as ManualActivation,M as ManualVerticalActivation,C as NoLoopNavigation,N as RtlKeyboardNavigation,F as Vertical,L as WithDisabledTab,ua as __namedExportsOrder,da as default};
