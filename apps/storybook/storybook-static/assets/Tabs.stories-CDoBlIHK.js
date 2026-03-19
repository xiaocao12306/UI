import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as ya}from"./Badge-ZJmMstsz.js";import{within as v,expect as t,userEvent as d,fireEvent as J}from"./index-DgAF9SIF.js";function Ra(a,e,n,o){var w,A;if(a.length===0)return-1;const l=(w=a[e])!=null&&w.disabled?-1:e;let b=e;for(let h=0;h<a.length;h+=1){if(b+=n,o)b<0?b=a.length-1:b>=a.length&&(b=0);else if(b<0||b>=a.length)return l;if(!((A=a[b])!=null&&A.disabled))return b}return l}function Ba(a){return a.findIndex(e=>!e.disabled)}function Ha(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function p({items:a,value:e,defaultValue:n,ariaLabel:o="Tabs",ariaLabelledBy:l,orientation:b="horizontal",activationMode:w="automatic",loop:A=!0,onValueChange:h}){var ie;const C=u.useId(),ne=u.useRef(null),Q=u.useRef([]),j=u.useRef(null),x=u.useRef(null),B=u.useRef(!0),X=(ie=a.find(r=>!r.disabled))==null?void 0:ie.key,[Z,se]=u.useState(n??X),[ga,ee]=u.useState(null),[ma,H]=u.useState(null),[fa,S]=u.useState(null);u.useEffect(()=>{const r=y=>{y.metaKey||y.altKey||y.ctrlKey||(B.current=!0)},i=()=>{B.current=!1};return document.addEventListener("keydown",r,!0),document.addEventListener("pointerdown",i,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("touchstart",i,!0),()=>{document.removeEventListener("keydown",r,!0),document.removeEventListener("pointerdown",i,!0),document.removeEventListener("mousedown",i,!0),document.removeEventListener("touchstart",i,!0)}},[]);const oe=e??Z,g=a.some(r=>r.key===oe&&!r.disabled)?oe:X,[re,E]=u.useState(g),xa=a.some(r=>r.key===re&&!r.disabled)?re:g;u.useEffect(()=>{e===void 0&&g!==Z&&se(g)},[g,Z,e]),u.useEffect(()=>{E(g)},[g]),u.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]),u.useEffect(()=>{const r=new Set(a.filter(i=>!i.disabled).map(i=>i.key));ee(i=>i&&!r.has(i)?null:i),H(i=>i&&!r.has(i)?null:i),S(i=>i&&!r.has(i)?null:i)},[a]);const Ta=u.useCallback(()=>{j.current=null,x.current!==null&&(window.clearTimeout(x.current),x.current=null)},[]),ae=u.useCallback(r=>{const i=a.find(y=>y.key===r);!i||i.disabled||r===g||(e===void 0&&se(r),h==null||h(r))},[g,a,h,e]);return s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx("div",{ref:ne,role:"tablist","aria-label":l?void 0:o,"aria-labelledby":l,"aria-orientation":b,"aria-disabled":X?void 0:!0,onBlurCapture:r=>{const i=r.relatedTarget;i&&r.currentTarget.contains(i)||E(g)},style:{display:"flex",gap:6,flexWrap:b==="horizontal"?"wrap":"nowrap",flexDirection:b==="vertical"?"column":"row"},children:a.map((r,i)=>{const y=r.key===g,m=!!r.disabled,le=!m&&ga===r.key,ce=!m&&ma===r.key,de=!m&&fa===r.key,ka=le||de;return s.jsx("button",{ref:c=>{Q.current[i]=c},id:`${C}-tab-${i}`,type:"button",role:"tab","aria-selected":y,"aria-controls":`${C}-panel-${i}`,"aria-disabled":m||void 0,"aria-keyshortcuts":w==="manual"&&!m?"Enter Space":void 0,tabIndex:xa===r.key?0:-1,disabled:m,onClick:c=>{E(r.key);const f=w==="manual"&&c.detail===0&&j.current===r.key;Ta(),!f&&ae(r.key)},onMouseEnter:()=>{m||ee(r.key)},onMouseLeave:()=>{ee(c=>c===r.key?null:c),H(c=>c===r.key?null:c)},onMouseDown:c=>{m||(B.current=!1,S(f=>f===r.key?null:f),c.button===0&&H(r.key))},onMouseUp:c=>{c.button===0&&H(f=>f===r.key?null:f)},onFocus:()=>{if(E(r.key),m){S(c=>c===r.key?null:c);return}S(c=>ja(Q.current[i],B.current)?r.key:c===r.key?null:c)},onBlur:()=>{S(c=>c===r.key?null:c),H(c=>c===r.key?null:c)},onKeyDown:c=>{if(B.current=!0,w==="manual"&&Sa(c.key)){if(Ea(c)||(c.preventDefault(),c.repeat))return;j.current=r.key,x.current!==null&&window.clearTimeout(x.current),x.current=window.setTimeout(()=>{j.current=null,x.current=null},0),ae(r.key);return}const f=R=>{var be,pe;const te=(be=a[R])==null?void 0:be.key;te&&(E(te),w==="automatic"&&ae(te),(pe=Q.current[R])==null||pe.focus())};if(c.key==="Home"){c.preventDefault();const R=Ba(a);f(R);return}if(c.key==="End"){c.preventDefault();const R=Ha(a);f(R);return}const ue=Aa({orientation:b,key:c.key,isRtl:b==="horizontal"&&Ca(ne.current)});if(!ue)return;c.preventDefault();const ha=Ra(a,i,ue,A);f(ha)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:y?"1px solid var(--aurora-accent-default)":ka?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":ce?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":le?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:m?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:m?"not-allowed":"pointer",boxShadow:de?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ce?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),a.map((r,i)=>{const y=r.key===g;return s.jsx("div",{id:`${C}-panel-${i}`,role:"tabpanel","aria-labelledby":`${C}-tab-${i}`,tabIndex:y?0:-1,hidden:!y,style:{display:y?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function Sa(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Ea(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Aa({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Ca(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function ja(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const T=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],k={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55},wa={color:"var(--aurora-text-secondary)",fontSize:13};function ve(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const Na={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:T,defaultValue:"spec"}},L={};function La(){const[a,e]=u.useState("build");return s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:wa,children:"Current stage"}),s.jsx(ya,{tone:"default",children:a})]}),s.jsx(p,{items:T,value:a,onValueChange:e})]})}function Ia(){const[a,e]=u.useState(!1);return s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),s.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}const I={render:()=>s.jsx(La,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Release"}),o=e.getByRole("tab",{name:"Spec"});await d.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await d.keyboard("{Home}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus()}},V={render:()=>s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("p",{style:k,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),s.jsx("button",{type:"button",children:"Before tabs"}),s.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:T})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("button",{name:"Before tabs"});J.mouseDown(n),n.focus(),await d.click(o),await d.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},D={render:()=>s.jsx(Ia,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Disable Build tab"}),o=e.getByRole("tab",{name:"Build"});J.mouseDown(o),await d.click(n);const l=e.getByRole("tab",{name:"Build"});await t(l).toBeDisabled(),await t(l.style.transform).toContain("translateY(0"),await t(l.style.boxShadow).toBe("none")}},F={render:function(){const[e,n]=u.useState("spec"),[o,l]=u.useState(0);return s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[s.jsxs("p",{style:k,children:["Active tab: ",s.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",s.jsx("strong",{"data-testid":"primary-pointer-count",children:o})]}),s.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,items:T,onValueChange:b=>{n(b),l(w=>w+1)}})]})},play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),o=e.getByTestId("primary-pointer-active"),l=e.getByTestId("primary-pointer-count");J.mouseDown(n,{button:2}),J.mouseUp(n,{button:2}),await t(o).toHaveTextContent("spec"),await t(l).toHaveTextContent("0"),await d.click(n),await t(o).toHaveTextContent("build"),await t(l).toHaveTextContent("1")}},P={render:()=>s.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},M={render:()=>s.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const o=e.getAllByRole("tab");await t(o).toHaveLength(2),o.forEach(l=>{t(l).toBeDisabled(),t(l).not.toHaveAttribute("aria-keyshortcuts"),t(l).toHaveAttribute("aria-selected","false"),t(l).toHaveAttribute("tabindex","-1")})}},K={render:()=>s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("p",{style:k,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),s.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),l=e.getByRole("tab",{name:"Blocked"});await d.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(l).toHaveAttribute("aria-disabled","true"),await d.keyboard("{End}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus(),await d.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},N={render:()=>s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsxs("p",{style:k,children:["Set ",s.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),s.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:T})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await d.click(o),await d.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await d.click(n),await d.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function Va(){const a=u.useId();return s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[s.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),s.jsx(p,{ariaLabelledBy:a,items:T,defaultValue:"spec"})]})}const q={render:()=>s.jsx(Va,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},z={render:()=>s.jsx("div",{style:{width:"min(100%, 620px)"},children:s.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const o=e.getByRole("tab",{name:"Spec"});await d.click(o),await d.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},O={render:()=>s.jsxs("div",{dir:"rtl",style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("p",{style:k,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),s.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:T})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await d.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await d.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await d.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},U={render:()=>s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("p",{style:k,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),s.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await d.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),await d.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await d.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await d.keyboard("{End}"),await t(o).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),o.focus(),await d.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},$={render:()=>s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("p",{style:k,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),s.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),s.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Build"}),l=e.getByRole("button",{name:"Outside focus target"});await d.click(n),await d.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(o).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(o).toHaveAttribute("tabindex","0"),await d.click(l),await t(l).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(o).toHaveAttribute("tabindex","-1")}},G={render:()=>s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("p",{style:k,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),s.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Build"});await d.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await d.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","false"),ve(o,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),ve(o,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),o.focus(),await t(o).toHaveFocus(),await d.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(o).toHaveAttribute("aria-selected","true")}},Y={render:()=>s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[s.jsx("p",{style:k,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),s.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Backlog"}),o=e.getByRole("tab",{name:"Review"}),l=e.getByRole("tab",{name:"Ship"});await d.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(o).toHaveAttribute("aria-disabled","true"),await t(o).not.toHaveAttribute("aria-keyshortcuts"),await d.keyboard("{ArrowDown}"),await t(l).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await d.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Da(){const[a,e]=u.useState("build"),[n,o]=u.useState(0);return s.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:wa,children:"Value change events"}),s.jsx(ya,{tone:"default","data-testid":"change-count",children:n})]}),s.jsx(p,{items:T,value:a,onValueChange:l=>{e(l),o(b=>b+1)}})]})}const _={render:()=>s.jsx(Da,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),o=e.getByRole("tab",{name:"Release"}),l=e.getByTestId("change-count");await d.click(n),await t(l).toHaveTextContent("0"),await d.click(o),await t(l).toHaveTextContent("1"),await d.click(o),await t(l).toHaveTextContent("1")}},W={render:()=>s.jsx(p,{items:T,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),l=n.getAttribute("aria-controls"),b=o.getAttribute("aria-controls");await t(l).toBeTruthy(),await t(b).toBeTruthy(),await t(document.getElementById(l)).not.toBeNull(),await t(document.getElementById(b)).not.toBeNull();const w=document.getElementById(b);await t(w).toHaveAttribute("hidden"),await d.click(o),await t(w).not.toHaveAttribute("hidden")}};var ye,we,ge;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:"{}",...(ge=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var me,fe,xe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(xe=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Te,ke,he;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(he=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};var Re,Be,He;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <DisableVisualResetTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const disableButton = canvas.getByRole("button", {
      name: "Disable Build tab"
    });
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    fireEvent.mouseDown(buildTab);
    await userEvent.click(disableButton);
    const disabledBuildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    await expect(disabledBuildTab).toBeDisabled();
    await expect(disabledBuildTab.style.transform).toContain("translateY(0");
    await expect(disabledBuildTab.style.boxShadow).toBe("none");
  }
}`,...(He=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Se,Ee,Ae;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: function RenderPrimaryPointerOnlyPressedState() {
    const [activeKey, setActiveKey] = React.useState("spec");
    const [changeCount, setChangeCount] = React.useState(0);
    return <div style={{
      width: "min(100%, 620px)",
      display: "grid",
      gap: 10
    }}>
        <p style={storyHelperTextStyle}>
          Active tab: <strong data-testid="primary-pointer-active">{activeKey}</strong> | Change
          count: <strong data-testid="primary-pointer-count">{changeCount}</strong>
        </p>
        <Tabs ariaLabel="Primary pointer tabs" value={activeKey} items={productTabs} onValueChange={nextKey => {
        setActiveKey(nextKey);
        setChangeCount(current => current + 1);
      }} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    const activeValue = canvas.getByTestId("primary-pointer-active");
    const changeCount = canvas.getByTestId("primary-pointer-count");
    fireEvent.mouseDown(buildTab, {
      button: 2
    });
    fireEvent.mouseUp(buildTab, {
      button: 2
    });
    await expect(activeValue).toHaveTextContent("spec");
    await expect(changeCount).toHaveTextContent("0");
    await userEvent.click(buildTab);
    await expect(activeValue).toHaveTextContent("build");
    await expect(changeCount).toHaveTextContent("1");
  }
}`,...(Ae=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Ce,je,Le;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Le=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Ie,Ve,De;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(De=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var Fe,Pe,Me;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var Ke,Ne,qe;N.parameters={...N.parameters,docs:{...(Ke=N.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=N.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var ze,Oe,Ue;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Ue=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var $e,Ge,Ye;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var _e,We,Je;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Je=(We=O.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;$.parameters={...$.parameters,docs:{...(ea=$.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=$.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,oa;G.parameters={...G.parameters,docs:{...(na=G.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(sa=G.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ra,ia,la;Y.parameters={...Y.parameters,docs:{...(ra=Y.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(la=(ia=Y.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,da,ua;_.parameters={..._.parameters,docs:{...(ca=_.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(ua=(da=_.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ba,pa,va;W.parameters={...W.parameters,docs:{...(ba=W.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(pa=W.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};const qa=["Default","Controlled","KeyboardFocusRingAfterPointer","DisabledTabVisualReset","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{M as AllTabsDisabled,_ as ChangeTelemetry,I as Controlled,W as ControlsReferenceMountedPanels,L as Default,D as DisabledTabVisualReset,G as ImeCompositionGuard,V as KeyboardFocusRingAfterPointer,K as KeyboardNavigationGuide,q as LabelledByHeading,U as ManualActivation,$ as ManualFocusResetOnBlur,Y as ManualVerticalActivation,N as NoLoopNavigation,F as PrimaryPointerOnlyPressedState,O as RtlKeyboardNavigation,z as Vertical,P as WithDisabledTab,qa as __namedExportsOrder,Na as default};
