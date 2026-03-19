import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as ra}from"./Badge-ZJmMstsz.js";import{within as v,expect as t,userEvent as l,fireEvent as ya}from"./index-DgAF9SIF.js";function wa(a,e,n,s){var g,S;if(a.length===0)return-1;const c=(g=a[e])!=null&&g.disabled?-1:e;let d=e;for(let T=0;T<a.length;T+=1){if(d+=n,s)d<0?d=a.length-1:d>=a.length&&(d=0);else if(d<0||d>=a.length)return c;if(!((S=a[d])!=null&&S.disabled))return d}return c}function ga(a){return a.findIndex(e=>!e.disabled)}function ma(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:c,orientation:d="horizontal",activationMode:g="automatic",loop:S=!0,onValueChange:T}){var se;const A=b.useId(),Z=b.useRef(null),W=b.useRef([]),E=b.useRef(null),m=b.useRef(null),R=b.useRef(!0),J=(se=a.find(r=>!r.disabled))==null?void 0:se.key,[Y,ee]=b.useState(n??J),[la,ae]=b.useState(null),[ca,L]=b.useState(null),[da,j]=b.useState(null);b.useEffect(()=>{const r=y=>{y.metaKey||y.altKey||y.ctrlKey||(R.current=!0)},u=()=>{R.current=!1};return document.addEventListener("keydown",r,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("touchstart",u,!0),()=>{document.removeEventListener("keydown",r,!0),document.removeEventListener("pointerdown",u,!0),document.removeEventListener("mousedown",u,!0),document.removeEventListener("touchstart",u,!0)}},[]);const te=e??Y,w=a.some(r=>r.key===te&&!r.disabled)?te:J,[ne,B]=b.useState(w),ua=a.some(r=>r.key===ne&&!r.disabled)?ne:w;b.useEffect(()=>{e===void 0&&w!==Y&&ee(w)},[w,Y,e]),b.useEffect(()=>{B(w)},[w]),b.useEffect(()=>()=>{m.current!==null&&window.clearTimeout(m.current)},[]);const ba=b.useCallback(()=>{E.current=null,m.current!==null&&(window.clearTimeout(m.current),m.current=null)},[]),Q=b.useCallback(r=>{const u=a.find(y=>y.key===r);!u||u.disabled||r===w||(e===void 0&&ee(r),T==null||T(r))},[w,a,T,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:Z,role:"tablist","aria-label":c?void 0:s,"aria-labelledby":c,"aria-orientation":d,"aria-disabled":J?void 0:!0,onBlurCapture:r=>{const u=r.relatedTarget;u&&r.currentTarget.contains(u)||B(w)},style:{display:"flex",gap:6,flexWrap:d==="horizontal"?"wrap":"nowrap",flexDirection:d==="vertical"?"column":"row"},children:a.map((r,u)=>{const y=r.key===w,f=!!r.disabled,oe=la===r.key,re=ca===r.key,ie=da===r.key,pa=oe||ie;return o.jsx("button",{ref:i=>{W.current[u]=i},id:`${A}-tab-${u}`,type:"button",role:"tab","aria-selected":y,"aria-controls":`${A}-panel-${u}`,"aria-disabled":f||void 0,"aria-keyshortcuts":g==="manual"&&!f?"Enter Space":void 0,tabIndex:ua===r.key?0:-1,disabled:f,onClick:i=>{B(r.key);const H=g==="manual"&&i.detail===0&&E.current===r.key;ba(),!H&&Q(r.key)},onMouseEnter:()=>{f||ae(r.key)},onMouseLeave:()=>{ae(i=>i===r.key?null:i),L(i=>i===r.key?null:i)},onMouseDown:()=>{f||(R.current=!1,j(i=>i===r.key?null:i),L(r.key))},onMouseUp:()=>{L(i=>i===r.key?null:i)},onFocus:()=>{if(B(r.key),f){j(i=>i===r.key?null:i);return}j(i=>ha(W.current[u],R.current)?r.key:i===r.key?null:i)},onBlur:()=>{j(i=>i===r.key?null:i),L(i=>i===r.key?null:i)},onKeyDown:i=>{if(R.current=!0,g==="manual"&&fa(i.key)){if(ka(i)||(i.preventDefault(),i.repeat))return;E.current=r.key,m.current!==null&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>{E.current=null,m.current=null},0),Q(r.key);return}const H=h=>{var ce,de;const X=(ce=a[h])==null?void 0:ce.key;X&&(B(X),g==="automatic"&&Q(X),(de=W.current[h])==null||de.focus())};if(i.key==="Home"){i.preventDefault();const h=ga(a);H(h);return}if(i.key==="End"){i.preventDefault();const h=ma(a);H(h);return}const le=xa({orientation:d,key:i.key,isRtl:d==="horizontal"&&Ta(Z.current)});if(!le)return;i.preventDefault();const va=wa(a,u,le,S);H(va)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:y?"1px solid var(--aurora-accent-default)":pa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":re?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":oe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:f?"not-allowed":"pointer",boxShadow:ie?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:re?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),a.map((r,u)=>{const y=r.key===w;return o.jsx("div",{id:`${A}-panel-${u}`,role:"tabpanel","aria-labelledby":`${A}-tab-${u}`,tabIndex:y?0:-1,hidden:!y,style:{display:y?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function fa(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function ka(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function xa({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Ta(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function ha(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const k=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],x={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55},ia={color:"var(--aurora-text-secondary)",fontSize:13};function ue(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const ja={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:k,defaultValue:"spec"}},C={};function Ra(){const[a,e]=b.useState("build");return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ia,children:"Current stage"}),o.jsx(ra,{tone:"default",children:a})]}),o.jsx(p,{items:k,value:a,onValueChange:e})]})}const I={render:()=>o.jsx(Ra,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},V={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:k})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});ya.mouseDown(n),n.focus(),await l.click(s),await l.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},F={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},D={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach(c=>{t(c).toBeDisabled(),t(c).not.toHaveAttribute("aria-keyshortcuts"),t(c).toHaveAttribute("aria-selected","false"),t(c).toHaveAttribute("tabindex","-1")})}},M={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:x,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),c=e.getByRole("tab",{name:"Blocked"});await l.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(c).toHaveAttribute("aria-disabled","true"),await l.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},P={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsxs("p",{style:x,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:k})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(s),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.click(n),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function Ba(){const a=b.useId();return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:k,defaultValue:"spec"})]})}const K={render:()=>o.jsx(Ba,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},N={render:()=>o.jsx("div",{style:{width:"min(100%, 620px)"},children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"});await l.click(s),await l.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},q={render:()=>o.jsxs("div",{dir:"rtl",style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:x,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:k})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},z={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:x,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),await l.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await l.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},O={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:x,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),c=e.getByRole("button",{name:"Outside focus target"});await l.click(n),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await l.click(c),await t(c).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},$={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:x,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),ue(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),ue(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},U={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:x,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),c=e.getByRole("tab",{name:"Ship"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{ArrowDown}"),await t(c).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Ha(){const[a,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ia,children:"Value change events"}),o.jsx(ra,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:k,value:a,onValueChange:c=>{e(c),s(d=>d+1)}})]})}const G={render:()=>o.jsx(Ha,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),c=e.getByTestId("change-count");await l.click(n),await t(c).toHaveTextContent("0"),await l.click(s),await t(c).toHaveTextContent("1"),await l.click(s),await t(c).toHaveTextContent("1")}},_={render:()=>o.jsx(p,{items:k,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),c=n.getAttribute("aria-controls"),d=s.getAttribute("aria-controls");await t(c).toBeTruthy(),await t(d).toBeTruthy(),await t(document.getElementById(c)).not.toBeNull(),await t(document.getElementById(d)).not.toBeNull();const g=document.getElementById(d);await t(g).toHaveAttribute("hidden"),await l.click(s),await t(g).not.toHaveAttribute("hidden")}};var be,pe,ve;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:"{}",...(ve=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ye,we,ge;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(we=I.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var me,fe,ke;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
        Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring
        for the active tab.
      </p>
      <button type="button">Before tabs</button>
      <Tabs ariaLabel="Focus ring fallback tabs" defaultValue="spec" items={productTabs} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    const beforeButton = canvas.getByRole("button", {
      name: "Before tabs"
    });
    fireEvent.mouseDown(specTab);
    specTab.focus();
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(specTab).toHaveFocus();
    await expect(specTab.style.boxShadow).toContain("0 0 0 3px");
  }
}`,...(ke=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var xe,Te,he;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var Re,Be,He;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(He=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Se,Ae,Ee;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var Le,je,Ce;P.parameters={...P.parameters,docs:{...(Le=P.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ce=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Ie,Ve,Fe;K.parameters={...K.parameters,docs:{...(Ie=K.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Fe=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var De,Me,Pe;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Pe=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Ke,Ne,qe;q.parameters={...q.parameters,docs:{...(Ke=q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var ze,Oe,$e;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...($e=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Ue,Ge,_e;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
        In manual mode, moving focus with arrows does not change selection. After leaving the
        tablist, roving focus returns to the selected tab for the next keyboard entry.
      </p>
      <Tabs ariaLabel="Manual blur reset tabs" activationMode="manual" defaultValue="spec" items={[{
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
      <button type="button">Outside focus target</button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    const outsideButton = canvas.getByRole("button", {
      name: "Outside focus target"
    });
    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");
    await expect(specTab).toHaveAttribute("tabindex", "-1");
    await expect(buildTab).toHaveAttribute("tabindex", "0");
    await userEvent.click(outsideButton);
    await expect(outsideButton).toHaveFocus();
    await expect(specTab).toHaveAttribute("tabindex", "0");
    await expect(buildTab).toHaveAttribute("tabindex", "-1");
  }
}`,...(_e=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var We,Je,Ye;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "min(100%, 620px)",
    display: "grid",
    gap: 12
  }}>
      <p style={storyHelperTextStyle}>
        In manual mode, Enter and Space are ignored while IME composition is active, so CJK
        confirmation does not activate a tab by accident.
      </p>
      <Tabs ariaLabel="Manual activation IME guard tabs" activationMode="manual" defaultValue="spec" items={[{
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
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(buildTab).toHaveAttribute("aria-selected", "false");
    dispatchImeKeyDown(buildTab, "Enter");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");
    dispatchImeKeyDown(buildTab, "Space");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");
    buildTab.focus();
    await expect(buildTab).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "true");
  }
}`,...(Ye=(Je=$.parameters)==null?void 0:Je.docs)==null?void 0:Ye.source}}};var Qe,Xe,Ze;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;G.parameters={...G.parameters,docs:{...(ea=G.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=G.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,oa;_.parameters={..._.parameters,docs:{...(na=_.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(sa=_.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};const Ca=["Default","Controlled","KeyboardFocusRingAfterPointer","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{D as AllTabsDisabled,G as ChangeTelemetry,I as Controlled,_ as ControlsReferenceMountedPanels,C as Default,$ as ImeCompositionGuard,V as KeyboardFocusRingAfterPointer,M as KeyboardNavigationGuide,K as LabelledByHeading,z as ManualActivation,O as ManualFocusResetOnBlur,U as ManualVerticalActivation,P as NoLoopNavigation,q as RtlKeyboardNavigation,N as Vertical,F as WithDisabledTab,Ca as __namedExportsOrder,ja as default};
