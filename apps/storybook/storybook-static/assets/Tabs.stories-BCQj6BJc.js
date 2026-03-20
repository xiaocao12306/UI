import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as za}from"./Button-BhfMIoQv.js";import{B as La}from"./Badge-ZJmMstsz.js";import{within as y,expect as t,userEvent as l,fireEvent as C}from"./index-DgAF9SIF.js";import{s as R,S as ke}from"./storyShowcase-Bw5VyCj0.js";function he(a){return a.reduce((e,n,o)=>(e[n.key]=o,e),{})}function be(a,e,n,o){var v,x;if(a.length===0)return-1;const c=(v=a[e])!=null&&v.disabled?-1:e;let d=e;for(let k=0;k<a.length;k+=1){if(d+=n,o)d<0?d=a.length-1:d>=a.length&&(d=0);else if(d<0||d>=a.length)return c;if(!((x=a[d])!=null&&x.disabled))return d}return c}function $a(a){return a.findIndex(e=>!e.disabled)}function Ga(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function Ya(a,e,n){var o,c,d,v;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let x=0;x<a.length;x+=1){const k=e+x;if(k>=0&&k<a.length&&!((o=a[k])!=null&&o.disabled))return((c=a[k])==null?void 0:c.key)??n;if(x===0)continue;const B=e-x;if(B>=0&&B<a.length&&!((d=a[B])!=null&&d.disabled))return((v=a[B])==null?void 0:v.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:o="Tabs",ariaLabelledBy:c,orientation:d="horizontal",activationMode:v="automatic",loop:x=!0,onValueChange:k}){var we;const B=b.useId(),oe=b.useRef(null),re=b.useRef([]),V=b.useRef(null),S=b.useRef(null),A=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const j=b.useRef(!0),[Ia,Va]=b.useState(()=>he(a)),F=(we=a.find(r=>!r.disabled))==null?void 0:we.key,[ie,pe]=b.useState(n??F),[Fa,ce]=b.useState(null),[Pa,L]=b.useState(null),[Ma,D]=b.useState(null),Ka=de(o,"Tabs"),ve=de(c);b.useEffect(()=>{},[a]),b.useEffect(()=>{},[a]),b.useEffect(()=>{Va(he(a))},[a]),b.useEffect(()=>{},[a,e]),b.useEffect(()=>{var g;const r=((g=oe.current)==null?void 0:g.ownerDocument)??document,u=E=>{E.metaKey||E.altKey||E.ctrlKey||(j.current=!0)},w=()=>{j.current=!1};return r.addEventListener("keydown",u,!0),r.addEventListener("pointerdown",w,!0),r.addEventListener("mousedown",w,!0),r.addEventListener("touchstart",w,!0),()=>{r.removeEventListener("keydown",u,!0),r.removeEventListener("pointerdown",w,!0),r.removeEventListener("mousedown",w,!0),r.removeEventListener("touchstart",w,!0)}},[]);const P=e??ie,le=a.find(r=>r.key===P),h=le&&!le.disabled?P:e===void 0&&P&&!le?Ya(a,Ia[P],F):F,[ye,I]=b.useState(h),Na=a.some(r=>r.key===ye&&!r.disabled)?ye:h;b.useEffect(()=>{e===void 0&&h!==ie&&pe(h)},[h,ie,e]),b.useEffect(()=>{I(h)},[h]),b.useEffect(()=>()=>{S.current!==null&&(A.current??window).clearTimeout(S.current)},[]),b.useEffect(()=>{const r=new Set(a.filter(u=>!u.disabled).map(u=>u.key));ce(u=>u&&!r.has(u)?null:u),L(u=>u&&!r.has(u)?null:u),D(u=>u&&!r.has(u)?null:u)},[a]);const Oa=b.useCallback(()=>{V.current=null,S.current!==null&&((A.current??window).clearTimeout(S.current),S.current=null),A.current=null},[]),ue=b.useCallback(r=>{const u=a.find(w=>w.key===r);!u||u.disabled||r===h||(e===void 0&&pe(r),k==null||k(r))},[h,a,k,e]);return s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx("div",{ref:oe,role:"tablist","aria-label":ve?void 0:Ka,"aria-labelledby":ve,"aria-orientation":d,"aria-disabled":F?void 0:!0,onBlurCapture:r=>{const u=r.relatedTarget;u&&r.currentTarget.contains(u)||I(h)},style:{display:"flex",gap:6,flexWrap:d==="horizontal"?"wrap":"nowrap",flexDirection:d==="vertical"?"column":"row"},children:a.map((r,u)=>{const w=r.key===h,g=!!r.disabled,E=!g&&Fa===r.key,me=!g&&Pa===r.key,ge=!g&&Ma===r.key,qa=E||ge,Wa=de(r.ariaLabel);return s.jsx("button",{ref:i=>{re.current[u]=i},id:`${B}-tab-${u}`,type:"button",role:"tab","aria-label":Wa,"aria-selected":w,"aria-controls":`${B}-panel-${u}`,"aria-disabled":g||void 0,"aria-keyshortcuts":v==="manual"&&!g?"Enter Space":void 0,tabIndex:Na===r.key?0:-1,disabled:g,onClick:i=>{I(r.key);const T=v==="manual"&&i.detail===0&&V.current===r.key;Oa(),!T&&ue(r.key)},onMouseEnter:()=>{g||ce(r.key)},onMouseLeave:()=>{ce(i=>i===r.key?null:i),L(i=>i===r.key?null:i)},onMouseDown:i=>{g||i.button===0&&(j.current=!1,D(T=>T===r.key?null:T),L(r.key))},onMouseUp:i=>{i.button===0&&L(T=>T===r.key?null:T)},onFocus:()=>{if(I(r.key),g){D(i=>i===r.key?null:i);return}D(i=>Za(re.current[u],j.current)?r.key:i===r.key?null:i)},onBlur:()=>{D(i=>i===r.key?null:i),L(i=>i===r.key?null:i)},onKeyDown:i=>{if(j.current=!0,i.altKey||i.ctrlKey||i.metaKey)return;if(v==="manual"&&_a(i.key)){if(Ja(i)||(i.preventDefault(),i.repeat))return;V.current=r.key;const f=i.currentTarget.ownerDocument.defaultView??window;S.current!==null&&(A.current??f).clearTimeout(S.current),A.current=f,S.current=f.setTimeout(()=>{V.current=null,S.current=null,A.current=null},0),ue(r.key);return}const T=f=>{var Te,xe;const M=(Te=a[f])==null?void 0:Te.key;M&&(I(M),v==="automatic"&&ue(M),(xe=re.current[f])==null||xe.focus())};if(i.key==="Home"){i.preventDefault();const f=$a(a);T(f);return}if(i.key==="End"){i.preventDefault();const f=Ga(a);T(f);return}if(i.key==="PageDown"){i.preventDefault();const f=be(a,u,1,x);T(f);return}if(i.key==="PageUp"){i.preventDefault();const f=be(a,u,-1,x);T(f);return}const fe=Qa({orientation:d,key:i.key,isRtl:d==="horizontal"&&Xa(oe.current)});if(!fe)return;i.preventDefault();const Ua=be(a,u,fe,x);T(Ua)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:w?"1px solid var(--aurora-accent-default)":qa?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":me?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":E?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:g?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:g?"not-allowed":"pointer",boxShadow:ge?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:me?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),a.map((r,u)=>{const w=r.key===h;return s.jsx("div",{id:`${B}-panel-${u}`,role:"tabpanel","aria-labelledby":`${B}-tab-${u}`,tabIndex:w?0:-1,hidden:!w,style:{display:w?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function _a(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Ja(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Qa({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Xa(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function Za(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}function de(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const H=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Da={color:"var(--aurora-text-secondary)",fontSize:13},Re="min(100%, 620px)";function m({children:a,gap:e=12,dir:n}){return n?s.jsx("div",{dir:n,children:s.jsx(ke,{maxWidth:Re,gap:e,children:a})}):s.jsx(ke,{maxWidth:Re,gap:e,children:a})}function Be(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const dt={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:H,defaultValue:"spec"}},K={};function et(){const[a,e]=b.useState("build");return s.jsxs(m,{gap:10,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:Da,children:"Current stage"}),s.jsx(La,{tone:"default",children:a})]}),s.jsx(p,{items:H,value:a,onValueChange:e})]})}function at(){const[a,e]=b.useState(!1);return s.jsxs(m,{children:[s.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),s.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function tt(){const[a,e]=b.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return s.jsxs(m,{children:[s.jsx(za,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),s.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const N={render:()=>s.jsx(et,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Release"}),o=e.getByRole("tab",{name:"Spec"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await l.keyboard("{Home}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus()}},O={render:()=>s.jsxs(m,{children:[s.jsx("p",{style:R,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),s.jsx("button",{type:"button",children:"Before tabs"}),s.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:H})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("button",{name:"Before tabs"});C.mouseDown(n),n.focus(),await l.click(o),await l.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},q={render:()=>s.jsx(at,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Disable Build tab"}),o=e.getByRole("tab",{name:"Build"});C.mouseDown(o),await l.click(n);const c=e.getByRole("tab",{name:"Build"});await t(c).toBeDisabled(),await t(c.style.transform).toContain("translateY(0"),await t(c.style.boxShadow).toBe("none")}},W={render:()=>s.jsx(tt,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await l.click(n);const o=e.getByRole("tab",{name:"Release"});await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},U={render:function(){const[e,n]=b.useState("spec"),[o,c]=b.useState(0);return s.jsxs(m,{gap:10,children:[s.jsxs("p",{style:R,children:["Active tab: ",s.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",s.jsx("strong",{"data-testid":"primary-pointer-count",children:o})]}),s.jsx("button",{type:"button",children:"Before tabs"}),s.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:H,onValueChange:d=>{n(d),c(v=>v+1)}})]})},play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Before tabs"}),o=e.getByRole("tab",{name:"Spec"}),c=e.getByRole("tab",{name:"Build"}),d=e.getByTestId("primary-pointer-active"),v=e.getByTestId("primary-pointer-count");await l.click(n),await l.tab(),await t(o).toHaveFocus(),await l.keyboard("{ArrowRight}"),await t(c).toHaveFocus(),await t(c.style.boxShadow).toContain("0 0 0 3px"),C.mouseDown(c,{button:2}),C.mouseUp(c,{button:2}),await t(c.style.boxShadow).toContain("0 0 0 3px"),await t(d).toHaveTextContent("spec"),await t(v).toHaveTextContent("0"),await l.click(c),await t(d).toHaveTextContent("build"),await t(v).toHaveTextContent("1")}},z={render:()=>s.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},$={render:()=>s.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const o=e.getAllByRole("tab");await t(o).toHaveLength(2),o.forEach(c=>{t(c).toBeDisabled(),t(c).not.toHaveAttribute("aria-keyshortcuts"),t(c).toHaveAttribute("aria-selected","false"),t(c).toHaveAttribute("tabindex","-1")})}},G={render:()=>s.jsxs(m,{children:[s.jsx("p",{style:R,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),s.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),c=e.getByRole("tab",{name:"Blocked"});await l.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(c).toHaveAttribute("aria-disabled","true"),await l.keyboard("{End}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus(),await l.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await l.keyboard("{PageDown}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus(),await l.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),C.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),C.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},Y={render:()=>s.jsxs(m,{children:[s.jsxs("p",{style:R,children:["Set ",s.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),s.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:H})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(o),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await l.click(n),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function nt(){const a=b.useId();return s.jsxs(m,{gap:10,children:[s.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),s.jsx(p,{ariaLabelledBy:a,items:H,defaultValue:"spec"})]})}function st(){return s.jsxs(m,{children:[s.jsxs("p",{style:R,children:["Icon tabs should expose explicit naming through ",s.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),s.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:s.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const _={render:()=>s.jsx(nt,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},J={render:()=>s.jsx(st,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},Q={render:()=>s.jsx(m,{children:s.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const o=e.getByRole("tab",{name:"Spec"});await l.click(o),await l.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},X={render:()=>s.jsxs(m,{dir:"rtl",children:[s.jsx("p",{style:R,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),s.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:H})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},Z={render:()=>s.jsxs(m,{children:[s.jsx("p",{style:R,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),s.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),await l.keyboard("{ArrowRight}"),await t(e.getByRole("tab",{name:"Build"})).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await l.keyboard("{End}"),await t(o).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),o.focus(),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")}},ee={render:()=>s.jsxs(m,{children:[s.jsx("p",{style:R,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),s.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),s.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Build"}),c=e.getByRole("button",{name:"Outside focus target"});await l.click(n),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(o).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(o).toHaveAttribute("tabindex","0"),await l.click(c),await t(c).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(o).toHaveAttribute("tabindex","-1")}},ae={render:()=>s.jsxs(m,{children:[s.jsx("p",{style:R,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),s.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Build"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","false"),Be(o,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),Be(o,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),o.focus(),await t(o).toHaveFocus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(o).toHaveAttribute("aria-selected","true")}},te={render:()=>s.jsxs(m,{children:[s.jsx("p",{style:R,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),s.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Backlog"}),o=e.getByRole("tab",{name:"Review"}),c=e.getByRole("tab",{name:"Ship"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(o).toHaveAttribute("aria-disabled","true"),await t(o).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{ArrowDown}"),await t(c).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function ot(){const[a,e]=b.useState("build"),[n,o]=b.useState(0);return s.jsxs(m,{gap:10,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:Da,children:"Value change events"}),s.jsx(La,{tone:"default","data-testid":"change-count",children:n})]}),s.jsx(p,{items:H,value:a,onValueChange:c=>{e(c),o(d=>d+1)}})]})}const ne={render:()=>s.jsx(ot,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),o=e.getByRole("tab",{name:"Release"}),c=e.getByTestId("change-count");await l.click(n),await t(c).toHaveTextContent("0"),await l.click(o),await t(c).toHaveTextContent("1"),await l.click(o),await t(c).toHaveTextContent("1")}},se={render:()=>s.jsx(p,{items:H,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),c=n.getAttribute("aria-controls"),d=o.getAttribute("aria-controls");await t(c).toBeTruthy(),await t(d).toBeTruthy(),await t(document.getElementById(c)).not.toBeNull(),await t(document.getElementById(d)).not.toBeNull();const v=document.getElementById(d);await t(v).toHaveAttribute("hidden"),await l.click(o),await t(v).not.toHaveAttribute("hidden")}};var Se,He,Ae;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:"{}",...(Ae=(He=K.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var Ee,Ce,je;N.parameters={...N.parameters,docs:{...(Ee=N.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(je=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Le,De,Ie;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring
        for the active tab.
      </p>
      <button type="button">Before tabs</button>
      <Tabs ariaLabel="Focus ring fallback tabs" defaultValue="spec" items={productTabs} />
    </TabsShowcase>,
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
}`,...(Ie=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Ve,Fe,Pe;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Pe=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Me,Ke,Ne;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ne=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var Oe,qe,We;U.parameters={...U.parameters,docs:{...(Oe=U.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: function RenderPrimaryPointerOnlyPressedState() {
    const [activeKey, setActiveKey] = React.useState("spec");
    const [changeCount, setChangeCount] = React.useState(0);
    return <TabsShowcase gap={10}>
        <p style={storyMutedTextStyle}>
          Active tab: <strong data-testid="primary-pointer-active">{activeKey}</strong> | Change
          count: <strong data-testid="primary-pointer-count">{changeCount}</strong>
        </p>
        <button type="button">Before tabs</button>
        <Tabs ariaLabel="Primary pointer tabs" value={activeKey} activationMode="manual" items={productTabs} onValueChange={nextKey => {
        setActiveKey(nextKey);
        setChangeCount(current => current + 1);
      }} />
      </TabsShowcase>;
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
}`,...(We=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:We.source}}};var Ue,ze,$e;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...($e=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Ge,Ye,_e;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(_e=(Ye=$.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source}}};var Je,Qe,Xe;G.parameters={...G.parameters,docs:{...(Je=G.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown.
        Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to
        the previous/next enabled tab.
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
    </TabsShowcase>,
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
    await userEvent.keyboard("{PageUp}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
    await userEvent.keyboard("{PageDown}");
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
    fireEvent.keyDown(specTab, {
      key: "PageDown",
      ctrlKey: true
    });
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
  }
}`,...(Xe=(Qe=G.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,ea,aa;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Set <code>loop=&#123;false&#125;</code> to keep Arrow navigation at tablist boundaries
        instead of wrapping.
      </p>
      <Tabs ariaLabel="No loop tabs" defaultValue="spec" loop={false} items={productTabs} />
    </TabsShowcase>,
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
}`,...(aa=(ea=Y.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,sa;_.parameters={..._.parameters,docs:{...(ta=_.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(sa=(na=_.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var oa,ra,ia;J.parameters={...J.parameters,docs:{...(oa=J.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: () => <IconOnlyLabelTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconTab = canvas.getByRole("tab", {
      name: "Navigation overview"
    });
    await expect(iconTab).toHaveAttribute("aria-selected", "true");
    await expect(iconTab).toHaveAttribute("aria-controls");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.");
  }
}`,...(ia=(ra=J.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var ca,la,ua;Q.parameters={...Q.parameters,docs:{...(ca=Q.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
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
    </TabsShowcase>,
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
}`,...(ua=(la=Q.parameters)==null?void 0:la.docs)==null?void 0:ua.source}}};var ba,da,pa;X.parameters={...X.parameters,docs:{...(ba=X.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  render: () => <TabsShowcase dir="rtl">
      <p style={storyMutedTextStyle}>
        In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the
        next tab.
      </p>
      <Tabs ariaLabel="RTL workflow tabs" defaultValue="spec" items={productTabs} />
    </TabsShowcase>,
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
}`,...(pa=(da=X.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var va,ya,wa;Z.parameters={...Z.parameters,docs:{...(va=Z.parameters)==null?void 0:va.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>,
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
}`,...(wa=(ya=Z.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var ma,ga,fa;ee.parameters={...ee.parameters,docs:{...(ma=ee.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>,
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
}`,...(fa=(ga=ee.parameters)==null?void 0:ga.docs)==null?void 0:fa.source}}};var Ta,xa,ka;ae.parameters={...ae.parameters,docs:{...(Ta=ae.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>,
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
}`,...(ka=(xa=ae.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var ha,Ra,Ba;te.parameters={...te.parameters,docs:{...(ha=te.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
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
    </TabsShowcase>,
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
}`,...(Ba=(Ra=te.parameters)==null?void 0:Ra.docs)==null?void 0:Ba.source}}};var Sa,Ha,Aa;ne.parameters={...ne.parameters,docs:{...(Sa=ne.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Aa=(Ha=ne.parameters)==null?void 0:Ha.docs)==null?void 0:Aa.source}}};var Ea,Ca,ja;se.parameters={...se.parameters,docs:{...(Ea=se.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(ja=(Ca=se.parameters)==null?void 0:Ca.docs)==null?void 0:ja.source}}};const pt=["Default","Controlled","KeyboardFocusRingAfterPointer","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","Vertical","RtlKeyboardNavigation","ManualActivation","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{$ as AllTabsDisabled,ne as ChangeTelemetry,N as Controlled,se as ControlsReferenceMountedPanels,K as Default,q as DisabledTabVisualReset,J as IconOnlyLabelNaming,ae as ImeCompositionGuard,O as KeyboardFocusRingAfterPointer,G as KeyboardNavigationGuide,_ as LabelledByHeading,Z as ManualActivation,ee as ManualFocusResetOnBlur,te as ManualVerticalActivation,Y as NoLoopNavigation,U as PrimaryPointerOnlyPressedState,W as RemovedActiveTabFallback,X as RtlKeyboardNavigation,Q as Vertical,z as WithDisabledTab,pt as __namedExportsOrder,dt as default};
