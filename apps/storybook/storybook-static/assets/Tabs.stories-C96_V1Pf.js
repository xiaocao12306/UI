import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as La}from"./Button-DS9RTxKh.js";import{B as Ta}from"./Badge-ZJmMstsz.js";import{within as y,expect as t,userEvent as l,fireEvent as L}from"./index-DgAF9SIF.js";function we(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function Ia(a,e,n,s){var v,T;if(a.length===0)return-1;const i=(v=a[e])!=null&&v.disabled?-1:e;let b=e;for(let m=0;m<a.length;m+=1){if(b+=n,s)b<0?b=a.length-1:b>=a.length&&(b=0);else if(b<0||b>=a.length)return i;if(!((T=a[b])!=null&&T.disabled))return b}return i}function Da(a){return a.findIndex(e=>!e.disabled)}function Va(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function Fa(a,e,n){var s,i,b,v;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let T=0;T<a.length;T+=1){const m=e+T;if(m>=0&&m<a.length&&!((s=a[m])!=null&&s.disabled))return((i=a[m])==null?void 0:i.key)??n;if(T===0)continue;const k=e-T;if(k>=0&&k<a.length&&!((b=a[k])!=null&&b.disabled))return((v=a[k])==null?void 0:v.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:i,orientation:b="horizontal",activationMode:v="automatic",loop:T=!0,onValueChange:m}){var ue;const k=d.useId(),ae=d.useRef(null),te=d.useRef([]),I=d.useRef(null),h=d.useRef(null);d.useRef(null),d.useRef(null);const E=d.useRef(!0),[ha,Ra]=d.useState(()=>we(a)),D=(ue=a.find(r=>!r.disabled))==null?void 0:ue.key,[ne,le]=d.useState(n??D),[Ba,se]=d.useState(null),[Ha,A]=d.useState(null),[Sa,C]=d.useState(null);d.useEffect(()=>{},[a]),d.useEffect(()=>{Ra(we(a))},[a]),d.useEffect(()=>{},[a,e]),d.useEffect(()=>{var g;const r=((g=ae.current)==null?void 0:g.ownerDocument)??document,u=H=>{H.metaKey||H.altKey||H.ctrlKey||(E.current=!0)},w=()=>{E.current=!1};return r.addEventListener("keydown",u,!0),r.addEventListener("pointerdown",w,!0),r.addEventListener("mousedown",w,!0),r.addEventListener("touchstart",w,!0),()=>{r.removeEventListener("keydown",u,!0),r.removeEventListener("pointerdown",w,!0),r.removeEventListener("mousedown",w,!0),r.removeEventListener("touchstart",w,!0)}},[]);const V=e??ne,oe=a.find(r=>r.key===V),f=oe&&!oe.disabled?V:e===void 0&&V&&!oe?Fa(a,ha[V],D):D,[ce,j]=d.useState(f),Ea=a.some(r=>r.key===ce&&!r.disabled)?ce:f;d.useEffect(()=>{e===void 0&&f!==ne&&le(f)},[f,ne,e]),d.useEffect(()=>{j(f)},[f]),d.useEffect(()=>()=>{h.current!==null&&window.clearTimeout(h.current)},[]),d.useEffect(()=>{const r=new Set(a.filter(u=>!u.disabled).map(u=>u.key));se(u=>u&&!r.has(u)?null:u),A(u=>u&&!r.has(u)?null:u),C(u=>u&&!r.has(u)?null:u)},[a]);const Aa=d.useCallback(()=>{I.current=null,h.current!==null&&(window.clearTimeout(h.current),h.current=null)},[]),re=d.useCallback(r=>{const u=a.find(w=>w.key===r);!u||u.disabled||r===f||(e===void 0&&le(r),m==null||m(r))},[f,a,m,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:ae,role:"tablist","aria-label":i?void 0:s,"aria-labelledby":i,"aria-orientation":b,"aria-disabled":D?void 0:!0,onBlurCapture:r=>{const u=r.relatedTarget;u&&r.currentTarget.contains(u)||j(f)},style:{display:"flex",gap:6,flexWrap:b==="horizontal"?"wrap":"nowrap",flexDirection:b==="vertical"?"column":"row"},children:a.map((r,u)=>{const w=r.key===f,g=!!r.disabled,H=!g&&Ba===r.key,de=!g&&Ha===r.key,be=!g&&Sa===r.key,Ca=H||be;return o.jsx("button",{ref:c=>{te.current[u]=c},id:`${k}-tab-${u}`,type:"button",role:"tab","aria-selected":w,"aria-controls":`${k}-panel-${u}`,"aria-disabled":g||void 0,"aria-keyshortcuts":v==="manual"&&!g?"Enter Space":void 0,tabIndex:Ea===r.key?0:-1,disabled:g,onClick:c=>{j(r.key);const x=v==="manual"&&c.detail===0&&I.current===r.key;Aa(),!x&&re(r.key)},onMouseEnter:()=>{g||se(r.key)},onMouseLeave:()=>{se(c=>c===r.key?null:c),A(c=>c===r.key?null:c)},onMouseDown:c=>{g||c.button===0&&(E.current=!1,C(x=>x===r.key?null:x),A(r.key))},onMouseUp:c=>{c.button===0&&A(x=>x===r.key?null:x)},onFocus:()=>{if(j(r.key),g){C(c=>c===r.key?null:c);return}C(c=>qa(te.current[u],E.current)?r.key:c===r.key?null:c)},onBlur:()=>{C(c=>c===r.key?null:c),A(c=>c===r.key?null:c)},onKeyDown:c=>{if(E.current=!0,c.altKey||c.ctrlKey||c.metaKey)return;if(v==="manual"&&Pa(c.key)){if(Ma(c)||(c.preventDefault(),c.repeat))return;I.current=r.key,h.current!==null&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{I.current=null,h.current=null},0),re(r.key);return}const x=S=>{var ve,ye;const ie=(ve=a[S])==null?void 0:ve.key;ie&&(j(ie),v==="automatic"&&re(ie),(ye=te.current[S])==null||ye.focus())};if(c.key==="Home"){c.preventDefault();const S=Da(a);x(S);return}if(c.key==="End"){c.preventDefault();const S=Va(a);x(S);return}const pe=Ka({orientation:b,key:c.key,isRtl:b==="horizontal"&&Na(ae.current)});if(!pe)return;c.preventDefault();const ja=Ia(a,u,pe,T);x(ja)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:w?"1px solid var(--aurora-accent-default)":Ca?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":de?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":H?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:g?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:g?"not-allowed":"pointer",boxShadow:be?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:de?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),a.map((r,u)=>{const w=r.key===f;return o.jsx("div",{id:`${k}-panel-${u}`,role:"tabpanel","aria-labelledby":`${k}-tab-${u}`,tabIndex:w?0:-1,hidden:!w,style:{display:w?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function Pa(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Ma(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ka({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Na(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function qa(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const R=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],B={margin:0,color:"var(--aurora-text-secondary)",fontSize:13,lineHeight:1.55},ka={color:"var(--aurora-text-secondary)",fontSize:13};function ge(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const Xa={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:R,defaultValue:"spec"}},F={};function za(){const[a,e]=d.useState("build");return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ka,children:"Current stage"}),o.jsx(Ta,{tone:"default",children:a})]}),o.jsx(p,{items:R,value:a,onValueChange:e})]})}function Oa(){const[a,e]=d.useState(!1);return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function Ua(){const[a,e]=d.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx(La,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const P={render:()=>o.jsx(za,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},M={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:B,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:R})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});L.mouseDown(n),n.focus(),await l.click(s),await l.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},K={render:()=>o.jsx(Oa,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});L.mouseDown(s),await l.click(n);const i=e.getByRole("tab",{name:"Build"});await t(i).toBeDisabled(),await t(i.style.transform).toContain("translateY(0"),await t(i.style.boxShadow).toBe("none")}},N={render:()=>o.jsx(Ua,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await l.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},q={render:function(){const[e,n]=d.useState("spec"),[s,i]=d.useState(0);return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[o.jsxs("p",{style:B,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:R,onValueChange:b=>{n(b),i(v=>v+1)}})]})},play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"}),b=e.getByTestId("primary-pointer-active"),v=e.getByTestId("primary-pointer-count");await l.click(n),await l.tab(),await t(s).toHaveFocus(),await l.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(i.style.boxShadow).toContain("0 0 0 3px"),L.mouseDown(i,{button:2}),L.mouseUp(i,{button:2}),await t(i.style.boxShadow).toContain("0 0 0 3px"),await t(b).toHaveTextContent("spec"),await t(v).toHaveTextContent("0"),await l.click(i),await t(b).toHaveTextContent("build"),await t(v).toHaveTextContent("1")}},z={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},O={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach(i=>{t(i).toBeDisabled(),t(i).not.toHaveAttribute("aria-keyshortcuts"),t(i).toHaveAttribute("aria-selected","false"),t(i).toHaveAttribute("tabindex","-1")})}},U={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:B,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await l.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(i).toHaveAttribute("aria-disabled","true"),await l.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),L.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},$={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsxs("p",{style:B,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:R})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(s),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.click(n),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function $a(){const a=d.useId();return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:R,defaultValue:"spec"})]})}const G={render:()=>o.jsx($a,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},Y={render:()=>o.jsx("div",{style:{width:"min(100%, 620px)"},children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"});await l.click(s),await l.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},_={render:()=>o.jsxs("div",{dir:"rtl",style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:B,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:R})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},W={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:B,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),await l.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await l.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},J={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:B,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("button",{name:"Outside focus target"});await l.click(n),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await l.click(i),await t(i).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},Q={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:B,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),ge(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),ge(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},X={render:()=>o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:12},children:[o.jsx("p",{style:B,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),i=e.getByRole("tab",{name:"Ship"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(i).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{ArrowDown}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Ga(){const[a,e]=d.useState("build"),[n,s]=d.useState(0);return o.jsxs("div",{style:{width:"min(100%, 620px)",display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ka,children:"Value change events"}),o.jsx(Ta,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:R,value:a,onValueChange:i=>{e(i),s(b=>b+1)}})]})}const Z={render:()=>o.jsx(Ga,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await l.click(n),await t(i).toHaveTextContent("0"),await l.click(s),await t(i).toHaveTextContent("1"),await l.click(s),await t(i).toHaveTextContent("1")}},ee={render:()=>o.jsx(p,{items:R,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=n.getAttribute("aria-controls"),b=s.getAttribute("aria-controls");await t(i).toBeTruthy(),await t(b).toBeTruthy(),await t(document.getElementById(i)).not.toBeNull(),await t(document.getElementById(b)).not.toBeNull();const v=document.getElementById(b);await t(v).toHaveAttribute("hidden"),await l.click(s),await t(v).not.toHaveAttribute("hidden")}};var me,fe,xe;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:"{}",...(xe=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Te,ke,he;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(he=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};var Re,Be,He;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(He=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Se,Ee,Ae;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Ee=K.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Ce,je,Le;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <RemoveActiveTabFallbackDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const removeButton = canvas.getByRole("button", {
      name: "Remove Build tab"
    });
    await expect(canvas.getByRole("tab", {
      name: "Build"
    })).toHaveAttribute("aria-selected", "true");
    await userEvent.click(removeButton);
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
    await expect(releaseTab).toHaveAttribute("tabindex", "0");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.");
  }
}`,...(Le=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Ie,De,Ve;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
        <button type="button">Before tabs</button>
        <Tabs ariaLabel="Primary pointer tabs" value={activeKey} activationMode="manual" items={productTabs} onValueChange={nextKey => {
        setActiveKey(nextKey);
        setChangeCount(current => current + 1);
      }} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = canvas.getByRole("button", {
      name: "Before tabs"
    });
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    const activeValue = canvas.getByTestId("primary-pointer-active");
    const changeCount = canvas.getByTestId("primary-pointer-count");
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(specTab).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(buildTab.style.boxShadow).toContain("0 0 0 3px");
    fireEvent.mouseDown(buildTab, {
      button: 2
    });
    fireEvent.mouseUp(buildTab, {
      button: 2
    });
    await expect(buildTab.style.boxShadow).toContain("0 0 0 3px");
    await expect(activeValue).toHaveTextContent("spec");
    await expect(changeCount).toHaveTextContent("0");
    await userEvent.click(buildTab);
    await expect(activeValue).toHaveTextContent("build");
    await expect(changeCount).toHaveTextContent("1");
  }
}`,...(Ve=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var Fe,Pe,Me;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var Ke,Ne,qe;O.parameters={...O.parameters,docs:{...(Ke=O.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var ze,Oe,Ue;U.parameters={...U.parameters,docs:{...(ze=U.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
    fireEvent.keyDown(specTab, {
      key: "End",
      ctrlKey: true
    });
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
  }
}`,...(Ue=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var $e,Ge,Ye;$.parameters={...$.parameters,docs:{...($e=$.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var _e,We,Je;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Je=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;Y.parameters={...Y.parameters,docs:{...(Qe=Y.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;_.parameters={..._.parameters,docs:{...(ea=_.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=_.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,sa,oa;W.parameters={...W.parameters,docs:{...(na=W.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(oa=(sa=W.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ra,ia,la;J.parameters={...J.parameters,docs:{...(ra=J.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(la=(ia=J.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,ua,da;Q.parameters={...Q.parameters,docs:{...(ca=Q.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(da=(ua=Q.parameters)==null?void 0:ua.docs)==null?void 0:da.source}}};var ba,pa,va;X.parameters={...X.parameters,docs:{...(ba=X.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(pa=X.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ya,wa,ga;Z.parameters={...Z.parameters,docs:{...(ya=Z.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ga=(wa=Z.parameters)==null?void 0:wa.docs)==null?void 0:ga.source}}};var ma,fa,xa;ee.parameters={...ee.parameters,docs:{...(ma=ee.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(xa=(fa=ee.parameters)==null?void 0:fa.docs)==null?void 0:xa.source}}};const Za=["Default","Controlled","KeyboardFocusRingAfterPointer","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","Vertical","RtlKeyboardNavigation","ManualActivation","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{O as AllTabsDisabled,Z as ChangeTelemetry,P as Controlled,ee as ControlsReferenceMountedPanels,F as Default,K as DisabledTabVisualReset,Q as ImeCompositionGuard,M as KeyboardFocusRingAfterPointer,U as KeyboardNavigationGuide,G as LabelledByHeading,W as ManualActivation,J as ManualFocusResetOnBlur,X as ManualVerticalActivation,$ as NoLoopNavigation,q as PrimaryPointerOnlyPressedState,N as RemovedActiveTabFallback,_ as RtlKeyboardNavigation,Y as Vertical,z as WithDisabledTab,Za as __namedExportsOrder,Xa as default};
