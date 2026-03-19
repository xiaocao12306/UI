import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as ze}from"./Badge-fH5xjxKG.js";import{within as w,userEvent as i,expect as t}from"./index-DgAF9SIF.js";function Je(a,e,r,l){var y,x;if(a.length===0)return-1;const u=(y=a[e])!=null&&y.disabled?-1:e;let c=e;for(let k=0;k<a.length;k+=1){if(c+=r,l)c<0?c=a.length-1:c>=a.length&&(c=0);else if(c<0||c>=a.length)return u;if(!((x=a[c])!=null&&x.disabled))return c}return u}function Qe(a){return a.findIndex(e=>!e.disabled)}function Xe(a){var e;for(let r=a.length-1;r>=0;r-=1)if(!((e=a[r])!=null&&e.disabled))return r;return-1}function b({items:a,value:e,defaultValue:r,ariaLabel:l="Tabs",ariaLabelledBy:u,orientation:c="horizontal",activationMode:y="automatic",loop:x=!0,onValueChange:k}){var Z;const B=d.useId(),G=d.useRef(null),z=d.useRef([]),H=d.useRef(null),g=d.useRef(null),$=d.useRef(!0),Y=(Z=a.find(n=>!n.disabled))==null?void 0:Z.key,[U,O]=d.useState(r??Y),[$e,J]=d.useState(null),[Ue,S]=d.useState(null),[_e,A]=d.useState(null),Q=e??U,p=a.some(n=>n.key===Q&&!n.disabled)?Q:Y,[X,E]=d.useState(p),We=a.some(n=>n.key===X&&!n.disabled)?X:p;d.useEffect(()=>{e===void 0&&p!==U&&O(p)},[p,U,e]),d.useEffect(()=>{E(p)},[p]),d.useEffect(()=>()=>{g.current!==null&&window.clearTimeout(g.current)},[]);const Ge=d.useCallback(()=>{H.current=null,g.current!==null&&(window.clearTimeout(g.current),g.current=null)},[]),_=d.useCallback(n=>{const v=a.find(m=>m.key===n);!v||v.disabled||n===p||(e===void 0&&O(n),k==null||k(n))},[p,a,k,e]);return s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx("div",{ref:G,role:"tablist","aria-label":u?void 0:l,"aria-labelledby":u,"aria-orientation":c,style:{display:"flex",gap:6,flexWrap:c==="horizontal"?"wrap":"nowrap",flexDirection:c==="vertical"?"column":"row"},children:a.map((n,v)=>{const m=n.key===p,f=!!n.disabled,ee=$e===n.key,ae=Ue===n.key,te=_e===n.key,Ye=ee||te;return s.jsx("button",{ref:o=>{z.current[v]=o},id:`${B}-tab-${v}`,type:"button",role:"tab","aria-selected":m,"aria-controls":`${B}-panel-${v}`,"aria-disabled":f||void 0,"aria-keyshortcuts":y==="manual"&&!f?"Enter Space":void 0,tabIndex:We===n.key?0:-1,disabled:f,onClick:o=>{E(n.key);const R=y==="manual"&&o.detail===0&&H.current===n.key;Ge(),!R&&_(n.key)},onMouseEnter:()=>{f||J(n.key)},onMouseLeave:()=>{J(o=>o===n.key?null:o),S(o=>o===n.key?null:o)},onMouseDown:()=>{f||($.current=!1,A(o=>o===n.key?null:o),S(n.key))},onMouseUp:()=>{S(o=>o===n.key?null:o)},onFocus:()=>{if(E(n.key),f){A(o=>o===n.key?null:o);return}A(o=>ta(z.current[v],$.current)?n.key:o===n.key?null:o)},onBlur:()=>{A(o=>o===n.key?null:o),S(o=>o===n.key?null:o)},onKeyDown:o=>{if($.current=!0,y==="manual"&&Ze(o.key)){if(o.preventDefault(),o.repeat)return;H.current=n.key,g.current!==null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{H.current=null,g.current=null},0),_(n.key);return}const R=h=>{var re,se;const W=(re=a[h])==null?void 0:re.key;W&&(E(W),y==="automatic"&&_(W),(se=z.current[h])==null||se.focus())};if(o.key==="Home"){o.preventDefault();const h=Qe(a);R(h);return}if(o.key==="End"){o.preventDefault();const h=Xe(a);R(h);return}const ne=ea({orientation:c,key:o.key,isRtl:c==="horizontal"&&aa(G.current)});if(!ne)return;o.preventDefault();const Oe=Je(a,v,ne,x);R(Oe)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:m?"1px solid var(--aurora-accent-default)":Ye?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:m?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":ae?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":ee?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:f?"not-allowed":"pointer",boxShadow:te?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ae?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:n.label},n.key)})}),a.map((n,v)=>{const m=n.key===p;return s.jsx("div",{id:`${B}-panel-${v}`,role:"tabpanel","aria-labelledby":`${B}-tab-${v}`,tabIndex:m?0:-1,hidden:!m,style:{display:m?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:n.content},n.key)})]})}function Ze(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function ea({orientation:a,key:e,isRtl:r}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return r?-1:1;if(e==="ArrowLeft")return r?1:-1}function aa(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function ta(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const T=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],da={title:"Data/Tabs",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:T,defaultValue:"spec"}},j={};function na(){const[a,e]=d.useState("build");return s.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),s.jsx(ze,{tone:"default",children:a})]}),s.jsx(b,{items:T,value:a,onValueChange:e})]})}const I={render:()=>s.jsx(na,{}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Release"}),l=e.getByRole("tab",{name:"Spec"});await i.click(r),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(r).toHaveFocus(),await i.keyboard("{Home}"),await t(l).toHaveAttribute("aria-selected","true"),await t(l).toHaveFocus()}},L={render:()=>s.jsx(b,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},V={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),s.jsx(b,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),u=e.getByRole("tab",{name:"Blocked"});await i.click(r),await t(r).toHaveAttribute("aria-selected","true"),await t(u).toHaveAttribute("aria-disabled","true"),await i.keyboard("{End}"),await t(l).toHaveAttribute("aria-selected","true"),await t(l).toHaveFocus(),await i.keyboard("{Home}"),await t(r).toHaveAttribute("aria-selected","true"),await t(r).toHaveFocus()}},C={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Set ",s.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),s.jsx(b,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:T})]}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(l),await i.keyboard("{ArrowRight}"),await t(l).toHaveFocus(),await t(l).toHaveAttribute("aria-selected","true"),await i.click(r),await i.keyboard("{ArrowLeft}"),await t(r).toHaveFocus(),await t(r).toHaveAttribute("aria-selected","true")}};function ra(){const a=d.useId();return s.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[s.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),s.jsx(b,{ariaLabelledBy:a,items:T,defaultValue:"spec"})]})}const D={render:()=>s.jsx(ra,{}),play:async({canvasElement:a})=>{const e=w(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},F={render:()=>s.jsx("div",{style:{width:620},children:s.jsx(b,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(r).toHaveAttribute("aria-orientation","vertical");const l=e.getByRole("tab",{name:"Spec"});await i.click(l),await i.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},N={render:()=>s.jsxs("div",{dir:"rtl",style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),s.jsx(b,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:T})]}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(r),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await i.keyboard("{ArrowRight}"),await t(l).toHaveFocus(),await t(l).toHaveAttribute("aria-selected","true"),await i.keyboard("{ArrowLeft}"),await t(r).toHaveFocus(),await t(r).toHaveAttribute("aria-selected","true")}},P={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),s.jsx(b,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(r),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await i.keyboard("{End}"),await t(l).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),l.focus(),await i.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},M={render:()=>s.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),s.jsx(b,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Backlog"}),l=e.getByRole("tab",{name:"Review"}),u=e.getByRole("tab",{name:"Ship"});await i.click(r),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(u).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).toHaveAttribute("aria-disabled","true"),await t(l).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{ArrowDown}"),await t(u).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function sa(){const[a,e]=d.useState("build"),[r,l]=d.useState(0);return s.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),s.jsx(ze,{tone:"default","data-testid":"change-count",children:r})]}),s.jsx(b,{items:T,value:a,onValueChange:u=>{e(u),l(c=>c+1)}})]})}const q={render:()=>s.jsx(sa,{}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Build"}),l=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("change-count");await i.click(r),await t(u).toHaveTextContent("0"),await i.click(l),await t(u).toHaveTextContent("1"),await i.click(l),await t(u).toHaveTextContent("1")}},K={render:()=>s.jsx(b,{items:T,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=w(a),r=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),u=r.getAttribute("aria-controls"),c=l.getAttribute("aria-controls");await t(u).toBeTruthy(),await t(c).toBeTruthy(),await t(document.getElementById(u)).not.toBeNull(),await t(document.getElementById(c)).not.toBeNull();const y=document.getElementById(c);await t(y).toHaveAttribute("hidden"),await i.click(l),await t(y).not.toHaveAttribute("hidden")}};var oe,le,ie;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:"{}",...(ie=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ke=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Te,he,Re;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Re=(he=D.parameters)==null?void 0:he.docs)==null?void 0:Re.source}}};var xe,Be,He;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(He=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Se,Ae,Ee;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var je,Ie,Le;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
