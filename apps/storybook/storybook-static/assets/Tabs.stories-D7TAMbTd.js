import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as Ge}from"./Badge-ZJmMstsz.js";import{within as y,expect as t,userEvent as i}from"./index-DgAF9SIF.js";function ta(a,e,n,l){var w,B;if(a.length===0)return-1;const c=(w=a[e])!=null&&w.disabled?-1:e;let d=e;for(let k=0;k<a.length;k+=1){if(d+=n,l)d<0?d=a.length-1:d>=a.length&&(d=0);else if(d<0||d>=a.length)return c;if(!((B=a[d])!=null&&B.disabled))return d}return c}function na(a){return a.findIndex(e=>!e.disabled)}function sa(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function b({items:a,value:e,defaultValue:n,ariaLabel:l="Tabs",ariaLabelledBy:c,orientation:d="horizontal",activationMode:w="automatic",loop:B=!0,onValueChange:k}){var ae;const H=u.useId(),J=u.useRef(null),U=u.useRef([]),A=u.useRef(null),g=u.useRef(null),_=u.useRef(!0),W=(ae=a.find(s=>!s.disabled))==null?void 0:ae.key,[G,Q]=u.useState(n??W),[Oe,X]=u.useState(null),[Je,S]=u.useState(null),[Qe,E]=u.useState(null),Z=e??G,p=a.some(s=>s.key===Z&&!s.disabled)?Z:W,[ee,L]=u.useState(p),Xe=a.some(s=>s.key===ee&&!s.disabled)?ee:p;u.useEffect(()=>{e===void 0&&p!==G&&Q(p)},[p,G,e]),u.useEffect(()=>{L(p)},[p]),u.useEffect(()=>()=>{g.current!==null&&window.clearTimeout(g.current)},[]);const Ze=u.useCallback(()=>{A.current=null,g.current!==null&&(window.clearTimeout(g.current),g.current=null)},[]),Y=u.useCallback(s=>{const v=a.find(m=>m.key===s);!v||v.disabled||s===p||(e===void 0&&Q(s),k==null||k(s))},[p,a,k,e]);return r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("div",{ref:J,role:"tablist","aria-label":c?void 0:l,"aria-labelledby":c,"aria-orientation":d,"aria-disabled":W?void 0:!0,style:{display:"flex",gap:6,flexWrap:d==="horizontal"?"wrap":"nowrap",flexDirection:d==="vertical"?"column":"row"},children:a.map((s,v)=>{const m=s.key===p,f=!!s.disabled,te=Oe===s.key,ne=Je===s.key,se=Qe===s.key,ea=te||se;return r.jsx("button",{ref:o=>{U.current[v]=o},id:`${H}-tab-${v}`,type:"button",role:"tab","aria-selected":m,"aria-controls":`${H}-panel-${v}`,"aria-disabled":f||void 0,"aria-keyshortcuts":w==="manual"&&!f?"Enter Space":void 0,tabIndex:Xe===s.key?0:-1,disabled:f,onClick:o=>{L(s.key);const h=w==="manual"&&o.detail===0&&A.current===s.key;Ze(),!h&&Y(s.key)},onMouseEnter:()=>{f||X(s.key)},onMouseLeave:()=>{X(o=>o===s.key?null:o),S(o=>o===s.key?null:o)},onMouseDown:()=>{f||(_.current=!1,E(o=>o===s.key?null:o),S(s.key))},onMouseUp:()=>{S(o=>o===s.key?null:o)},onFocus:()=>{if(L(s.key),f){E(o=>o===s.key?null:o);return}E(o=>ca(U.current[v],_.current)?s.key:o===s.key?null:o)},onBlur:()=>{E(o=>o===s.key?null:o),S(o=>o===s.key?null:o)},onKeyDown:o=>{if(_.current=!0,w==="manual"&&ra(o.key)){if(oa(o)||(o.preventDefault(),o.repeat))return;A.current=s.key,g.current!==null&&window.clearTimeout(g.current),g.current=window.setTimeout(()=>{A.current=null,g.current=null},0),Y(s.key);return}const h=x=>{var oe,le;const O=(oe=a[x])==null?void 0:oe.key;O&&(L(O),w==="automatic"&&Y(O),(le=U.current[x])==null||le.focus())};if(o.key==="Home"){o.preventDefault();const x=na(a);h(x);return}if(o.key==="End"){o.preventDefault();const x=sa(a);h(x);return}const re=la({orientation:d,key:o.key,isRtl:d==="horizontal"&&ia(J.current)});if(!re)return;o.preventDefault();const aa=ta(a,v,re,B);h(aa)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:m?"1px solid var(--aurora-accent-default)":ea?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:m?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":ne?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":te?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:f?"not-allowed":"pointer",boxShadow:se?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ne?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:s.label},s.key)})}),a.map((s,v)=>{const m=s.key===p;return r.jsx("div",{id:`${H}-panel-${v}`,role:"tabpanel","aria-labelledby":`${H}-tab-${v}`,tabIndex:m?0:-1,hidden:!m,style:{display:m?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:s.content},s.key)})]})}function ra(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function oa(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function la({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function ia(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function ca(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const T=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],R={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55},Ye={color:"var(--aurora-text-secondary)",fontSize:13},ga={title:"Data/Tabs",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:T,defaultValue:"spec"}},j={};function da(){const[a,e]=u.useState("build");return r.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:Ye,children:"Current stage"}),r.jsx(Ge,{tone:"default",children:a})]}),r.jsx(b,{items:T,value:a,onValueChange:e})]})}const C={render:()=>r.jsx(da,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Release"}),l=e.getByRole("tab",{name:"Spec"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await i.keyboard("{Home}"),await t(l).toHaveAttribute("aria-selected","true"),await t(l).toHaveFocus()}},I={render:()=>r.jsx(b,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},V={render:()=>r.jsx(b,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const l=e.getAllByRole("tab");await t(l).toHaveLength(2),l.forEach(c=>{t(c).toBeDisabled(),t(c).not.toHaveAttribute("aria-keyshortcuts"),t(c).toHaveAttribute("aria-selected","false"),t(c).toHaveAttribute("tabindex","-1")})}},D={render:()=>r.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[r.jsx("p",{style:R,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),r.jsx(b,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),c=e.getByRole("tab",{name:"Blocked"});await i.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(c).toHaveAttribute("aria-disabled","true"),await i.keyboard("{End}"),await t(l).toHaveAttribute("aria-selected","true"),await t(l).toHaveFocus(),await i.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},F={render:()=>r.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[r.jsxs("p",{style:R,children:["Set ",r.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),r.jsx(b,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:T})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(l),await i.keyboard("{ArrowRight}"),await t(l).toHaveFocus(),await t(l).toHaveAttribute("aria-selected","true"),await i.click(n),await i.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function ua(){const a=u.useId();return r.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[r.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),r.jsx(b,{ariaLabelledBy:a,items:T,defaultValue:"spec"})]})}const N={render:()=>r.jsx(ua,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},P={render:()=>r.jsx("div",{style:{width:"min(100%, 620px)"},children:r.jsx(b,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const l=e.getByRole("tab",{name:"Spec"});await i.click(l),await i.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},M={render:()=>r.jsxs("div",{dir:"rtl",style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[r.jsx("p",{style:R,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),r.jsx(b,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:T})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await i.keyboard("{ArrowRight}"),await t(l).toHaveFocus(),await t(l).toHaveAttribute("aria-selected","true"),await i.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},q={render:()=>r.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[r.jsx("p",{style:R,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),r.jsx(b,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await i.keyboard("{End}"),await t(l).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),l.focus(),await i.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},z={render:()=>r.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[r.jsx("p",{style:R,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),r.jsx(b,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Backlog"}),l=e.getByRole("tab",{name:"Review"}),c=e.getByRole("tab",{name:"Ship"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).toHaveAttribute("aria-disabled","true"),await t(l).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{ArrowDown}"),await t(c).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function ba(){const[a,e]=u.useState("build"),[n,l]=u.useState(0);return r.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:Ye,children:"Value change events"}),r.jsx(Ge,{tone:"default","data-testid":"change-count",children:n})]}),r.jsx(b,{items:T,value:a,onValueChange:c=>{e(c),l(d=>d+1)}})]})}const K={render:()=>r.jsx(ba,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),l=e.getByRole("tab",{name:"Release"}),c=e.getByTestId("change-count");await i.click(n),await t(c).toHaveTextContent("0"),await i.click(l),await t(c).toHaveTextContent("1"),await i.click(l),await t(c).toHaveTextContent("1")}},$={render:()=>r.jsx(b,{items:T,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),l=e.getByRole("tab",{name:"Release"}),c=n.getAttribute("aria-controls"),d=l.getAttribute("aria-controls");await t(c).toBeTruthy(),await t(d).toBeTruthy(),await t(document.getElementById(c)).not.toBeNull(),await t(document.getElementById(d)).not.toBeNull();const w=document.getElementById(d);await t(w).toHaveAttribute("hidden"),await i.click(l),await t(w).not.toHaveAttribute("hidden")}};var ie,ce,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:"{}",...(de=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,be,pe;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(be=C.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ve,ye,we;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ge,me,fe;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(me=V.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ke,Te,xe;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
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
}`,...(xe=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var he,Re,Be;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
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
}`,...(Be=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var He,Ae,Se;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Se=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var Ee,Le,je;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)"
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
}`,...(je=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var Ce,Ie,Ve;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div dir="rtl" style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
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
}`,...(Ve=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var De,Fe,Ne;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
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
}`,...(Ne=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var Pe,Me,qe;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
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
}`,...(qe=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var ze,Ke,$e;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...($e=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var Ue,_e,We;$.parameters={...$.parameters,docs:{...(Ue=$.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(We=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};const ma=["Default","Controlled","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{V as AllTabsDisabled,K as ChangeTelemetry,C as Controlled,$ as ControlsReferenceMountedPanels,j as Default,D as KeyboardNavigationGuide,N as LabelledByHeading,q as ManualActivation,z as ManualVerticalActivation,F as NoLoopNavigation,M as RtlKeyboardNavigation,P as Vertical,I as WithDisabledTab,ma as __namedExportsOrder,ga as default};
