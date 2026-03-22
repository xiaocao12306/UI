import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as ft}from"./Button-Bcz0jJFO.js";import{B as fe}from"./Badge-ZJmMstsz.js";import{within as g,expect as t,userEvent as l,fireEvent as T,waitFor as H}from"./index-DgAF9SIF.js";import{s as k,S as Le}from"./storyShowcase-Bw5VyCj0.js";const Tt={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function Fe(a){return a.reduce((e,n,o)=>(e[n.key]=o,e),{})}function we(a,e,n,o){var y,h;if(a.length===0)return-1;const r=(y=a[e])!=null&&y.disabled?-1:e;let u=e;for(let R=0;R<a.length;R+=1){if(u+=n,o)u<0?u=a.length-1:u>=a.length&&(u=0);else if(u<0||u>=a.length)return r;if(!((h=a[u])!=null&&h.disabled))return u}return r}function xt(a){return a.findIndex(e=>!e.disabled)}function kt(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function ht(a,e,n){var o,r,u,y;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let h=0;h<a.length;h+=1){const R=e+h;if(R>=0&&R<a.length&&!((o=a[R])!=null&&o.disabled))return((r=a[R])==null?void 0:r.key)??n;if(h===0)continue;const S=e-h;if(S>=0&&S<a.length&&!((u=a[S])!=null&&u.disabled))return((y=a[S])==null?void 0:y.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:o="Tabs",ariaLabelledBy:r,orientation:u="horizontal",activationMode:y="automatic",loop:h=!0,onValueChange:R}){var Se;const S=d.useId(),ue=d.useRef(null),be=d.useRef([]),I=d.useRef(null),D=d.useRef(null),j=d.useRef(null);d.useRef(null),d.useRef(null),d.useRef(null);const L=d.useRef(!0),[it,ct]=d.useState(()=>Fe(a)),V=(Se=a.find(i=>!i.disabled))==null?void 0:Se.key,[de,xe]=d.useState(n??V),[lt,pe]=d.useState(null),[ut,A]=d.useState(null),[bt,F]=d.useState(null),dt=me(o,"Tabs"),ke=me(r),he=d.useMemo(()=>Et(S,a),[S,a]),Re=d.useMemo(()=>Ct(a),[a]),pt=d.useMemo(()=>a.reduce((i,b)=>b.disabled?i:i+1,0),[a]);d.useEffect(()=>{},[a]),d.useEffect(()=>{},[a]),d.useEffect(()=>{ct(Fe(a))},[a]),d.useEffect(()=>{},[a,e]),d.useEffect(()=>{var E;const i=((E=ue.current)==null?void 0:E.ownerDocument)??document,b=m=>{m.metaKey||m.altKey||m.ctrlKey||(L.current=!0)},v=m=>{"button"in m&&!ge(m.button)||"ctrlKey"in m&&m.ctrlKey||(L.current=!1)};return i.addEventListener("keydown",b,!0),i.addEventListener("pointerdown",v,!0),i.addEventListener("mousedown",v,!0),i.addEventListener("touchstart",v,!0),()=>{i.removeEventListener("keydown",b,!0),i.removeEventListener("pointerdown",v,!0),i.removeEventListener("mousedown",v,!0),i.removeEventListener("touchstart",v,!0)}},[]);const M=e??de,ye=a.find(i=>i.key===M),B=ye&&!ye.disabled?M:e===void 0&&M&&!ye?ht(a,it[M],V):V,[Be,P]=d.useState(B),yt=a.some(i=>i.key===Be&&!i.disabled)?Be:B;d.useEffect(()=>{e===void 0&&B!==de&&xe(B)},[B,de,e]),d.useEffect(()=>{P(B)},[B]),d.useEffect(()=>()=>{D.current!==null&&(j.current??window).clearTimeout(D.current)},[]),d.useEffect(()=>{const i=new Set(a.filter(b=>!b.disabled).map(b=>b.key));pe(b=>b&&!i.has(b)?null:b),A(b=>b&&!i.has(b)?null:b),F(b=>b&&!i.has(b)?null:b)},[a]);const vt=d.useCallback(()=>{I.current=null,D.current!==null&&((j.current??window).clearTimeout(D.current),D.current=null),j.current=null},[]),ve=d.useCallback(i=>{const b=a.find(v=>v.key===i);!b||b.disabled||i===B||(e===void 0&&xe(i),R==null||R(i))},[B,a,R,e]);return s.jsxs("div",{style:{display:"grid",gap:10},children:[s.jsx("div",{ref:ue,role:"tablist","aria-label":ke?void 0:dt,"aria-labelledby":ke,"aria-orientation":u,"aria-disabled":V?void 0:!0,onBlurCapture:i=>{const b=i.relatedTarget;b&&i.currentTarget.contains(b)||P(B)},style:{display:"flex",gap:6,flexWrap:u==="horizontal"?"wrap":"nowrap",flexDirection:u==="vertical"?"column":"row"},children:a.map((i,b)=>{const v=he[b],E=i.key===B,m=!!i.disabled,He=!m&&lt===i.key,Ae=!m&&ut===i.key,Ee=!m&&bt===i.key,wt=He||Ee,gt=me(i.ariaLabel);return s.jsx("button",{"data-aurora-reduced-motion":"transition",ref:c=>{be.current[b]=c},id:(v==null?void 0:v.tabId)??`${S}-tab-${b}`,type:"button",role:"tab","aria-label":gt,"aria-selected":E,"aria-controls":(v==null?void 0:v.panelId)??`${S}-panel-${b}`,"aria-disabled":m||void 0,"aria-keyshortcuts":m||pt<=1?void 0:Rt(y,u),tabIndex:yt===i.key?0:-1,disabled:m,onClick:c=>{P(i.key);const w=y==="manual"&&c.detail===0&&I.current===i.key;vt(),!w&&ve(i.key)},onMouseEnter:()=>{m||pe(i.key)},onMouseLeave:()=>{pe(c=>c===i.key?null:c),A(c=>c===i.key?null:c)},onPointerDown:c=>{m||c.ctrlKey||ge(c.button)&&(L.current=!1,F(w=>w===i.key?null:w),A(i.key))},onPointerUp:c=>{ge(c.button)&&A(w=>w===i.key?null:w)},onMouseDown:c=>{m||c.button!==0||c.ctrlKey||(L.current=!1,F(w=>w===i.key?null:w),A(i.key))},onMouseUp:c=>{c.button===0&&A(w=>w===i.key?null:w)},onPointerCancel:()=>{A(c=>c===i.key?null:c)},onFocus:()=>{if(P(i.key),m){F(c=>c===i.key?null:c);return}F(c=>At(be.current[b],L.current)?i.key:c===i.key?null:c)},onBlur:()=>{F(c=>c===i.key?null:c),A(c=>c===i.key?null:c)},onKeyDown:c=>{if(L.current=!0,c.altKey||c.ctrlKey||c.metaKey)return;if(y==="manual"&&Pe(c.key)){if(Bt(c)||(c.preventDefault(),c.repeat))return;A(i.key),I.current=i.key;const x=c.currentTarget.ownerDocument.defaultView??window;D.current!==null&&(j.current??x).clearTimeout(D.current),j.current=x,D.current=x.setTimeout(()=>{I.current=null,D.current=null,j.current=null},0),ve(i.key);return}const w=x=>{var De,je;const K=(De=a[x])==null?void 0:De.key;K&&(P(K),y==="automatic"&&ve(K),(je=be.current[x])==null||je.focus())};if(c.key==="Home"){c.preventDefault();const x=xt(a);w(x);return}if(c.key==="End"){c.preventDefault();const x=kt(a);w(x);return}if(c.key==="PageDown"){c.preventDefault();const x=we(a,b,1,h);w(x);return}if(c.key==="PageUp"){c.preventDefault();const x=we(a,b,-1,h);w(x);return}const Ce=St({orientation:u,key:c.key,isRtl:u==="horizontal"&&Ht(ue.current)});if(!Ce)return;c.preventDefault();const mt=we(a,b,Ce,h);w(mt)},onKeyUp:c=>{Pe(c.key)&&A(w=>w===i.key?null:w)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:E?"1px solid var(--aurora-accent-default)":wt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:E?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":Ae?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":He?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:m?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:m?"not-allowed":"pointer",boxShadow:Ee?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Ae?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:i.label},Re[b]??`${i.key}__dup-${b}`)})}),a.map((i,b)=>{const v=he[b],E=i.key===B;return s.jsx("div",{id:(v==null?void 0:v.panelId)??`${S}-panel-${b}`,role:"tabpanel","aria-labelledby":(v==null?void 0:v.tabId)??`${S}-tab-${b}`,tabIndex:E?0:-1,hidden:!E,style:{display:E?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:i.content},`${Re[b]??`${i.key}__dup-${b}`}__panel`)})]})}function Pe(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function ge(a){return typeof a!="number"||a<=0}function Rt(a,e){return Tt[a][e]}function Bt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function St({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Ht(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function At(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}function me(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function Et(a,e){const n=new Map;return e.map(o=>{const r=Dt(o.key),u=(n.get(r)??0)+1;n.set(r,u);const y=u>1?`${r}-${u}`:r;return{tabId:`${a}-tab-${y}`,panelId:`${a}-panel-${y}`}})}function Ct(a){const e=new Map;return a.map((n,o)=>{const r=e.get(n.key)??0;return e.set(n.key,r+1),r===0?n.key:`${n.key}__dup-${o}`})}function Dt(a){const e=encodeURIComponent(a).replace(/%/g,"_");return e.length>0?e:"item"}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const C=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Te={color:"var(--aurora-text-secondary)",fontSize:13},Ie="min(100%, 620px)",Ve="Home End PageDown PageUp ArrowLeft ArrowRight",Me="Home End PageDown PageUp ArrowUp ArrowDown",Ke="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Ue="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function f({children:a,gap:e=12,dir:n}){return n?s.jsx("div",{dir:n,children:s.jsx(Le,{maxWidth:Ie,gap:e,children:a})}):s.jsx(Le,{maxWidth:Ie,gap:e,children:a})}function Ne(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}function ze(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const $t={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:C,defaultValue:"spec"}},U={};function jt(){const[a,e]=d.useState("build");return s.jsxs(f,{gap:10,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:Te,children:"Current stage"}),s.jsx(fe,{tone:"default",children:a})]}),s.jsx(p,{items:C,value:a,onValueChange:e})]})}function Lt(){const[a,e]=d.useState(!1);return s.jsxs(f,{children:[s.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),s.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function Ft(){const[a,e]=d.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return s.jsxs(f,{children:[s.jsx(ft,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),s.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const N={render:()=>s.jsx(jt,{}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Release"}),o=e.getByRole("tab",{name:"Spec"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await l.keyboard("{Home}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus()}},z={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),s.jsx("button",{type:"button",children:"Before tabs"}),s.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("button",{name:"Before tabs"});T.mouseDown(n),n.focus(),await l.click(o),await l.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},O={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),s.jsx(p,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:C}),s.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("button",{name:"After tabs"}),r=e.getByRole("tabpanel");T.mouseDown(n),n.focus(),await l.click(o),await l.tab({shift:!0}),await t(r).toHaveFocus(),await l.tab({shift:!0}),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},Y={render:()=>s.jsx(Lt,{}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("button",{name:"Disable Build tab"}),o=e.getByRole("tab",{name:"Build"});T.mouseDown(o),await l.click(n);const r=e.getByRole("tab",{name:"Build"});await t(r).toBeDisabled(),await t(r.style.transform).toContain("translateY(0"),await t(r.style.boxShadow).toBe("none")}},$={render:()=>s.jsx(Ft,{}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await l.click(n);const o=e.getByRole("tab",{name:"Release"});await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},q={render:function(){const[e,n]=d.useState("spec"),[o,r]=d.useState(0);return s.jsxs(f,{gap:10,children:[s.jsxs("p",{style:k,children:["Active tab: ",s.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",s.jsx("strong",{"data-testid":"primary-pointer-count",children:o})]}),s.jsx("button",{type:"button",children:"Before tabs"}),s.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:C,onValueChange:u=>{n(u),r(y=>y+1)}})]})},play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("button",{name:"Before tabs"}),o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Build"}),u=e.getByTestId("primary-pointer-active"),y=e.getByTestId("primary-pointer-count");await l.click(n),await l.tab(),await t(o).toHaveFocus(),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r.style.boxShadow).toContain("0 0 0 3px"),T.mouseDown(r,{button:2}),T.mouseUp(r,{button:2}),await t(r.style.boxShadow).toContain("0 0 0 3px"),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),T.mouseDown(r,{button:0}),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),T.pointerCancel(r),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),await l.click(r),await t(u).toHaveTextContent("build"),await t(y).toHaveTextContent("1")}},W={render:()=>s.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},_={render:()=>s.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const o=e.getAllByRole("tab");await t(o).toHaveLength(2),o.forEach(r=>{t(r).toBeDisabled(),t(r).not.toHaveAttribute("aria-keyshortcuts"),t(r).toHaveAttribute("aria-selected","false"),t(r).toHaveAttribute("tabindex","-1")})}},G={render:()=>s.jsx(p,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Security Review"}),r=e.getByRole("tab",{name:"Release"});await t(n).not.toHaveAttribute("aria-keyshortcuts"),await t(o).not.toHaveAttribute("aria-keyshortcuts"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await l.keyboard("{ArrowRight}"),await l.keyboard("{Enter}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await t(e.getByText("Specification stage is active.")).toBeInTheDocument()}},J={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),s.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),r=e.getByRole("tab",{name:"Blocked"});await l.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-keyshortcuts",Ve),await t(o).toHaveAttribute("aria-keyshortcuts",Ve),await t(r).toHaveAttribute("aria-disabled","true"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{End}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus(),await l.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await l.keyboard("{PageDown}"),await t(o).toHaveAttribute("aria-selected","true"),await t(o).toHaveFocus(),await l.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),T.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),T.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},Q={render:()=>s.jsxs(f,{children:[s.jsxs("p",{style:k,children:["Set ",s.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),s.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:C})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(o),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await l.click(n),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function Pt(){const a=d.useId();return s.jsxs(f,{gap:10,children:[s.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),s.jsx(p,{ariaLabelledBy:a,items:C,defaultValue:"spec"})]})}function It(){return s.jsxs(f,{children:[s.jsxs("p",{style:k,children:["Icon tabs should expose explicit naming through ",s.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),s.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:s.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const X={render:()=>s.jsx(Pt,{}),play:async({canvasElement:a})=>{const e=g(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},Z={render:()=>s.jsx(It,{}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},ee={render:()=>s.jsx(f,{children:s.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const o=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Review"}),u=e.getByRole("tab",{name:"Release"});await l.click(o),await t(o).toHaveAttribute("aria-keyshortcuts",Me),await t(u).toHaveAttribute("aria-keyshortcuts",Me),await t(r).not.toHaveAttribute("aria-keyshortcuts"),T.keyDown(o,{key:"ArrowDown",ctrlKey:!0}),T.keyDown(o,{key:"ArrowUp",metaKey:!0}),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowDown}"),await t(u).toHaveAttribute("aria-selected","true")}},ae={render:()=>s.jsxs(f,{dir:"rtl",children:[s.jsx("p",{style:k,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),s.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},te={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),s.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",Ke),await t(o).toHaveAttribute("aria-keyshortcuts",Ke),await l.keyboard("{ArrowRight}");const r=e.getByRole("tab",{name:"Build"});await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Shift>}{Enter}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await l.keyboard("{End}"),await t(o).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),o.focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},ne={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),s.jsx(p,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=g(a).getByRole("tab",{name:"Build"});T.keyDown(n,{key:"Enter",ctrlKey:!0}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),T.keyDown(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),T.keyUp(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),T.keyDown(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),T.keyUp(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toContain("translateY(0")})}};function Vt(){const[a,e]=d.useState("spec"),[n,o]=d.useState(0);return s.jsxs(f,{gap:10,children:[s.jsx("p",{style:k,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:Te,children:"Manual activation changes"}),s.jsx(fe,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),s.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),o(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const oe={render:()=>s.jsx(Vt,{}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("manual-repeat-change-count");await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),T.keyDown(o,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),T.keyDown(r,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(u).toHaveTextContent("2")}},se={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),s.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),s.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Build"}),r=e.getByRole("button",{name:"Outside focus target"});await l.click(n),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(o).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(o).toHaveAttribute("tabindex","0"),await l.click(r),await t(r).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(o).toHaveAttribute("tabindex","-1")}},re={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),s.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Build"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(o).toHaveFocus(),await t(o).toHaveAttribute("aria-selected","false"),Ne(o,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),Ne(o,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),ze(o,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),ze(o,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(o).toHaveAttribute("aria-selected","false"),o.focus(),await t(o).toHaveFocus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(o).toHaveAttribute("aria-selected","true")}},ie={render:()=>s.jsxs(f,{children:[s.jsx("p",{style:k,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),s.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Backlog"}),o=e.getByRole("tab",{name:"Review"}),r=e.getByRole("tab",{name:"Ship"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",Ue),await t(r).toHaveAttribute("aria-keyshortcuts",Ue),await t(o).toHaveAttribute("aria-disabled","true"),await t(o).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{ArrowDown}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Mt(){const[a,e]=d.useState("build"),[n,o]=d.useState(0);return s.jsxs(f,{gap:10,children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:Te,children:"Value change events"}),s.jsx(fe,{tone:"default","data-testid":"change-count",children:n})]}),s.jsx(p,{items:C,value:a,onValueChange:r=>{e(r),o(u=>u+1)}})]})}const ce={render:()=>s.jsx(Mt,{}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Build"}),o=e.getByRole("tab",{name:"Release"}),r=e.getByTestId("change-count");await l.click(n),await t(r).toHaveTextContent("0"),await l.click(o),await t(r).toHaveTextContent("1"),await l.click(o),await t(r).toHaveTextContent("1")}},le={render:()=>s.jsx(p,{items:C,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=g(a),n=e.getByRole("tab",{name:"Spec"}),o=e.getByRole("tab",{name:"Release"}),r=n.getAttribute("aria-controls"),u=o.getAttribute("aria-controls");await t(r).toBeTruthy(),await t(u).toBeTruthy(),await t(document.getElementById(r)).not.toBeNull(),await t(document.getElementById(u)).not.toBeNull();const y=document.getElementById(u);await t(y).toHaveAttribute("hidden"),await l.click(o),await t(y).not.toHaveAttribute("hidden")}};var Oe,Ye,$e;U.parameters={...U.parameters,docs:{...(Oe=U.parameters)==null?void 0:Oe.docs,source:{originalSource:"{}",...($e=(Ye=U.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var qe,We,_e;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(_e=(We=N.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Ge,Je,Qe;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,ea;O.parameters={...O.parameters,docs:{...(Xe=O.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores
        focus-visible ring for the active tab.
      </p>
      <Tabs ariaLabel="Shift+Tab focus ring fallback tabs" defaultValue="spec" items={productTabs} />
      <button type="button">After tabs</button>
    </TabsShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    const afterButton = canvas.getByRole("button", {
      name: "After tabs"
    });
    const panel = canvas.getByRole("tabpanel");
    fireEvent.mouseDown(specTab);
    specTab.focus();
    await userEvent.click(afterButton);
    await userEvent.tab({
      shift: true
    });
    await expect(panel).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(specTab).toHaveFocus();
    await expect(specTab.style.boxShadow).toContain("0 0 0 3px");
  }
}`,...(ea=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,na;Y.parameters={...Y.parameters,docs:{...(aa=Y.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(na=(ta=Y.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var oa,sa,ra;$.parameters={...$.parameters,docs:{...(oa=$.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ra=(sa=$.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ia,ca,la;q.parameters={...q.parameters,docs:{...(ia=q.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(buildTab, {
      button: 0
    });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(buildTab);
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
    await expect(activeValue).toHaveTextContent("spec");
    await expect(changeCount).toHaveTextContent("0");
    buildTab.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(1px)");
    });
    buildTab.dispatchEvent(new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
    await expect(activeValue).toHaveTextContent("spec");
    await expect(changeCount).toHaveTextContent("0");
    await userEvent.click(buildTab);
    await expect(activeValue).toHaveTextContent("build");
    await expect(changeCount).toHaveTextContent("1");
  }
}`,...(la=(ca=q.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var ua,ba,da;W.parameters={...W.parameters,docs:{...(ua=W.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(da=(ba=W.parameters)==null?void 0:ba.docs)==null?void 0:da.source}}};var pa,ya,va;_.parameters={..._.parameters,docs:{...(pa=_.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(va=(ya=_.parameters)==null?void 0:ya.docs)==null?void 0:va.source}}};var wa,ga,ma;G.parameters={...G.parameters,docs:{...(wa=G.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  render: () => <Tabs ariaLabel="Single actionable tab example" activationMode="manual" items={[{
    key: "spec",
    label: "Spec",
    content: "Specification stage is active."
  }, {
    key: "security",
    label: "Security Review",
    content: "Security review is blocked.",
    disabled: true
  }, {
    key: "release",
    label: "Release",
    content: "Release stage is blocked.",
    disabled: true
  }]} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    const securityTab = canvas.getByRole("tab", {
      name: "Security Review"
    });
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    await expect(specTab).not.toHaveAttribute("aria-keyshortcuts");
    await expect(securityTab).not.toHaveAttribute("aria-keyshortcuts");
    await expect(releaseTab).not.toHaveAttribute("aria-keyshortcuts");
    specTab.focus();
    await userEvent.keyboard("{ArrowRight}");
    await userEvent.keyboard("{Enter}");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveFocus();
    await expect(canvas.getByText("Specification stage is active.")).toBeInTheDocument();
  }
}`,...(ma=(ga=G.parameters)==null?void 0:ga.docs)==null?void 0:ma.source}}};var fa,Ta,xa;J.parameters={...J.parameters,docs:{...(fa=J.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", automaticHorizontalTabShortcuts);
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", automaticHorizontalTabShortcuts);
    await expect(blockedTab).toHaveAttribute("aria-disabled", "true");
    await expect(blockedTab).not.toHaveAttribute("aria-keyshortcuts");
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
}`,...(xa=(Ta=J.parameters)==null?void 0:Ta.docs)==null?void 0:xa.source}}};var ka,ha,Ra;Q.parameters={...Q.parameters,docs:{...(ka=Q.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(Ra=(ha=Q.parameters)==null?void 0:ha.docs)==null?void 0:Ra.source}}};var Ba,Sa,Ha;X.parameters={...X.parameters,docs:{...(Ba=X.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Ha=(Sa=X.parameters)==null?void 0:Sa.docs)==null?void 0:Ha.source}}};var Aa,Ea,Ca;Z.parameters={...Z.parameters,docs:{...(Aa=Z.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ca=(Ea=Z.parameters)==null?void 0:Ea.docs)==null?void 0:Ca.source}}};var Da,ja,La;ee.parameters={...ee.parameters,docs:{...(Da=ee.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
    const reviewTab = canvas.getByRole("tab", {
      name: "Review"
    });
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    await userEvent.click(specTab);
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", automaticVerticalTabShortcuts);
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", automaticVerticalTabShortcuts);
    await expect(reviewTab).not.toHaveAttribute("aria-keyshortcuts");
    fireEvent.keyDown(specTab, {
      key: "ArrowDown",
      ctrlKey: true
    });
    fireEvent.keyDown(specTab, {
      key: "ArrowUp",
      metaKey: true
    });
    await expect(specTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowDown}");
    await expect(releaseTab).toHaveAttribute("aria-selected", "true");
  }
}`,...(La=(ja=ee.parameters)==null?void 0:ja.docs)==null?void 0:La.source}}};var Fa,Pa,Ia;ae.parameters={...ae.parameters,docs:{...(Fa=ae.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(Ia=(Pa=ae.parameters)==null?void 0:Pa.docs)==null?void 0:Ia.source}}};var Va,Ma,Ka;te.parameters={...te.parameters,docs:{...(Va=te.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", manualHorizontalTabShortcuts);
    await expect(releaseTab).toHaveAttribute("aria-keyshortcuts", manualHorizontalTabShortcuts);
    await userEvent.keyboard("{ArrowRight}");
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    await expect(buildTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await userEvent.keyboard("{Shift>}{Enter}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    });
    await userEvent.keyboard("{End}");
    await expect(releaseTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    releaseTab.focus();
    await userEvent.keyboard("{Shift>}{Space}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage.");
    });
  }
}`,...(Ka=(Ma=te.parameters)==null?void 0:Ma.docs)==null?void 0:Ka.source}}};var Ua,Na,za;ne.parameters={...ne.parameters,docs:{...(Ua=ne.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and
        clear it on keyup.
      </p>
      <Tabs ariaLabel="Manual pressed feedback tabs" activationMode="manual" defaultValue="spec" items={[{
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
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    fireEvent.keyDown(buildTab, {
      key: "Enter",
      ctrlKey: true
    });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(buildTab, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(buildTab.style.transform).toBe("translateY(1px)");
    });
    fireEvent.keyUp(buildTab, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(buildTab, {
      key: "Spacebar"
    });
    await waitFor(() => {
      expect(buildTab.style.transform).toBe("translateY(1px)");
    });
    fireEvent.keyUp(buildTab, {
      key: "Spacebar"
    });
    await waitFor(() => {
      expect(buildTab.style.transform).toContain("translateY(0");
    });
  }
}`,...(za=(Na=ne.parameters)==null?void 0:Na.docs)==null?void 0:za.source}}};var Oa,Ya,$a;oe.parameters={...oe.parameters,docs:{...(Oa=oe.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  render: () => <ManualActivationRepeatGuardDemo />,
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
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    const changeCount = canvas.getByTestId("manual-repeat-change-count");
    await userEvent.click(specTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
    await userEvent.keyboard("{ArrowRight}");
    await expect(buildTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    fireEvent.keyDown(buildTab, {
      key: "Enter",
      repeat: true
    });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await expect(changeCount).toHaveTextContent("1");
    await userEvent.keyboard("{ArrowRight}");
    await expect(releaseTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    fireEvent.keyDown(releaseTab, {
      key: " ",
      repeat: true
    });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await expect(changeCount).toHaveTextContent("1");
    await userEvent.keyboard("{Space}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Release stage.");
    await expect(changeCount).toHaveTextContent("2");
  }
}`,...($a=(Ya=oe.parameters)==null?void 0:Ya.docs)==null?void 0:$a.source}}};var qa,Wa,_a;se.parameters={...se.parameters,docs:{...(qa=se.parameters)==null?void 0:qa.docs,source:{originalSource:`{
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
}`,...(_a=(Wa=se.parameters)==null?void 0:Wa.docs)==null?void 0:_a.source}}};var Ga,Ja,Qa;re.parameters={...re.parameters,docs:{...(Ga=re.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
    dispatchLegacyImeKeyDown(buildTab, "Enter");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");
    dispatchLegacyImeKeyDown(buildTab, "Space");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "false");
    buildTab.focus();
    await expect(buildTab).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Build stage.");
    await expect(buildTab).toHaveAttribute("aria-selected", "true");
  }
}`,...(Qa=(Ja=re.parameters)==null?void 0:Ja.docs)==null?void 0:Qa.source}}};var Xa,Za,et;ie.parameters={...ie.parameters,docs:{...(Xa=ie.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
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
    await expect(backlogTab).toHaveAttribute("aria-keyshortcuts", manualVerticalTabShortcuts);
    await expect(shipTab).toHaveAttribute("aria-keyshortcuts", manualVerticalTabShortcuts);
    await expect(reviewTab).toHaveAttribute("aria-disabled", "true");
    await expect(reviewTab).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{ArrowDown}");
    await expect(shipTab).toHaveFocus();
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent.");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.");
  }
}`,...(et=(Za=ie.parameters)==null?void 0:Za.docs)==null?void 0:et.source}}};var at,tt,nt;ce.parameters={...ce.parameters,docs:{...(at=ce.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ce.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,st,rt;le.parameters={...le.parameters,docs:{...(ot=le.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=le.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};const qt=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{_ as AllTabsDisabled,ce as ChangeTelemetry,N as Controlled,le as ControlsReferenceMountedPanels,U as Default,Y as DisabledTabVisualReset,Z as IconOnlyLabelNaming,re as ImeCompositionGuard,z as KeyboardFocusRingAfterPointer,O as KeyboardFocusRingShiftTabReentry,J as KeyboardNavigationGuide,X as LabelledByHeading,te as ManualActivation,ne as ManualActivationPressedFeedback,oe as ManualActivationRepeatGuard,se as ManualFocusResetOnBlur,ie as ManualVerticalActivation,Q as NoLoopNavigation,q as PrimaryPointerOnlyPressedState,$ as RemovedActiveTabFallback,ae as RtlKeyboardNavigation,G as SingleActionableTab,ee as Vertical,W as WithDisabledTab,qt as __namedExportsOrder,$t as default};
