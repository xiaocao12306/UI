import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as yt}from"./Button-COG9o64O.js";import{B as me}from"./Badge-ZJmMstsz.js";import{within as v,expect as a,userEvent as c,fireEvent as f,waitFor as C}from"./index-DgAF9SIF.js";import{s as k,S as Ee}from"./storyShowcase-Bw5VyCj0.js";const wt={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function Ce(t){return t.reduce((e,n,s)=>(e[n.key]=s,e),{})}function we(t,e,n,s){var w,h;if(t.length===0)return-1;const i=(w=t[e])!=null&&w.disabled?-1:e;let u=e;for(let R=0;R<t.length;R+=1){if(u+=n,s)u<0?u=t.length-1:u>=t.length&&(u=0);else if(u<0||u>=t.length)return i;if(!((h=t[u])!=null&&h.disabled))return u}return i}function gt(t){return t.findIndex(e=>!e.disabled)}function mt(t){var e;for(let n=t.length-1;n>=0;n-=1)if(!((e=t[n])!=null&&e.disabled))return n;return-1}function ft(t,e,n){var s,i,u,w;if(!Array.isArray(t)||t.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let h=0;h<t.length;h+=1){const R=e+h;if(R>=0&&R<t.length&&!((s=t[R])!=null&&s.disabled))return((i=t[R])==null?void 0:i.key)??n;if(h===0)continue;const H=e-h;if(H>=0&&H<t.length&&!((u=t[H])!=null&&u.disabled))return((w=t[H])==null?void 0:w.key)??n}return n}function p({items:t,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:i,orientation:u="horizontal",activationMode:w="automatic",loop:h=!0,onValueChange:R}){var he;const H=b.useId(),ue=b.useRef(null),be=b.useRef([]),P=b.useRef(null),A=b.useRef(null),D=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const L=b.useRef(!0),[nt,ot]=b.useState(()=>Ce(t)),V=(he=t.find(r=>!r.disabled))==null?void 0:he.key,[de,Te]=b.useState(n??V),[st,pe]=b.useState(null),[rt,E]=b.useState(null),[it,F]=b.useState(null),ct=ge(s,"Tabs"),xe=ge(i),lt=b.useMemo(()=>t.reduce((r,d)=>d.disabled?r:r+1,0),[t]);b.useEffect(()=>{},[t]),b.useEffect(()=>{},[t]),b.useEffect(()=>{ot(Ce(t))},[t]),b.useEffect(()=>{},[t,e]),b.useEffect(()=>{var T;const r=((T=ue.current)==null?void 0:T.ownerDocument)??document,d=j=>{j.metaKey||j.altKey||j.ctrlKey||(L.current=!0)},g=()=>{L.current=!1};return r.addEventListener("keydown",d,!0),r.addEventListener("pointerdown",g,!0),r.addEventListener("mousedown",g,!0),r.addEventListener("touchstart",g,!0),()=>{r.removeEventListener("keydown",d,!0),r.removeEventListener("pointerdown",g,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0)}},[]);const M=e??de,ve=t.find(r=>r.key===M),B=ve&&!ve.disabled?M:e===void 0&&M&&!ve?ft(t,nt[M],V):V,[ke,I]=b.useState(B),ut=t.some(r=>r.key===ke&&!r.disabled)?ke:B;b.useEffect(()=>{e===void 0&&B!==de&&Te(B)},[B,de,e]),b.useEffect(()=>{I(B)},[B]),b.useEffect(()=>()=>{A.current!==null&&(D.current??window).clearTimeout(A.current)},[]),b.useEffect(()=>{const r=new Set(t.filter(d=>!d.disabled).map(d=>d.key));pe(d=>d&&!r.has(d)?null:d),E(d=>d&&!r.has(d)?null:d),F(d=>d&&!r.has(d)?null:d)},[t]);const bt=b.useCallback(()=>{P.current=null,A.current!==null&&((D.current??window).clearTimeout(A.current),A.current=null),D.current=null},[]),ye=b.useCallback(r=>{const d=t.find(g=>g.key===r);!d||d.disabled||r===B||(e===void 0&&Te(r),R==null||R(r))},[B,t,R,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:ue,role:"tablist","aria-label":xe?void 0:ct,"aria-labelledby":xe,"aria-orientation":u,"aria-disabled":V?void 0:!0,onBlurCapture:r=>{const d=r.relatedTarget;d&&r.currentTarget.contains(d)||I(B)},style:{display:"flex",gap:6,flexWrap:u==="horizontal"?"wrap":"nowrap",flexDirection:u==="vertical"?"column":"row"},children:t.map((r,d)=>{const g=r.key===B,T=!!r.disabled,j=!T&&st===r.key,Re=!T&&rt===r.key,Be=!T&&it===r.key,dt=j||Be,pt=ge(r.ariaLabel);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:l=>{be.current[d]=l},id:`${H}-tab-${d}`,type:"button",role:"tab","aria-label":pt,"aria-selected":g,"aria-controls":`${H}-panel-${d}`,"aria-disabled":T||void 0,"aria-keyshortcuts":T||lt<=1?void 0:Tt(w,u),tabIndex:ut===r.key?0:-1,disabled:T,onClick:l=>{I(r.key);const m=w==="manual"&&l.detail===0&&P.current===r.key;bt(),!m&&ye(r.key)},onMouseEnter:()=>{T||pe(r.key)},onMouseLeave:()=>{pe(l=>l===r.key?null:l),E(l=>l===r.key?null:l)},onMouseDown:l=>{T||l.button===0&&(L.current=!1,F(m=>m===r.key?null:m),E(r.key))},onMouseUp:l=>{l.button===0&&E(m=>m===r.key?null:m)},onFocus:()=>{if(I(r.key),T){F(l=>l===r.key?null:l);return}F(l=>Rt(be.current[d],L.current)?r.key:l===r.key?null:l)},onBlur:()=>{F(l=>l===r.key?null:l),E(l=>l===r.key?null:l)},onKeyDown:l=>{if(L.current=!0,l.altKey||l.ctrlKey||l.metaKey)return;if(w==="manual"&&De(l.key)){if(xt(l)||(l.preventDefault(),l.repeat))return;E(r.key),P.current=r.key;const x=l.currentTarget.ownerDocument.defaultView??window;A.current!==null&&(D.current??x).clearTimeout(A.current),D.current=x,A.current=x.setTimeout(()=>{P.current=null,A.current=null,D.current=null},0),ye(r.key);return}const m=x=>{var He,Ae;const K=(He=t[x])==null?void 0:He.key;K&&(I(K),w==="automatic"&&ye(K),(Ae=be.current[x])==null||Ae.focus())};if(l.key==="Home"){l.preventDefault();const x=gt(t);m(x);return}if(l.key==="End"){l.preventDefault();const x=mt(t);m(x);return}if(l.key==="PageDown"){l.preventDefault();const x=we(t,d,1,h);m(x);return}if(l.key==="PageUp"){l.preventDefault();const x=we(t,d,-1,h);m(x);return}const Se=kt({orientation:u,key:l.key,isRtl:u==="horizontal"&&ht(ue.current)});if(!Se)return;l.preventDefault();const vt=we(t,d,Se,h);m(vt)},onKeyUp:l=>{De(l.key)&&E(m=>m===r.key?null:m)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:g?"1px solid var(--aurora-accent-default)":dt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":Re?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":j?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:T?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:T?"not-allowed":"pointer",boxShadow:Be?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Re?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),t.map((r,d)=>{const g=r.key===B;return o.jsx("div",{id:`${H}-panel-${d}`,role:"tabpanel","aria-labelledby":`${H}-tab-${d}`,tabIndex:g?0:-1,hidden:!g,style:{display:g?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function De(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Tt(t,e){return wt[t][e]}function xt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function kt({orientation:t,key:e,isRtl:n}){if(t==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function ht(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(t).direction==="rtl":!1}function Rt(t,e){if(!t)return e;try{return t.matches(":focus-visible")}catch{return e}}function ge(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const S=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],fe={color:"var(--aurora-text-secondary)",fontSize:13},je="min(100%, 620px)",Le="Home End PageDown PageUp ArrowLeft ArrowRight",Fe="Home End PageDown PageUp ArrowUp ArrowDown",Ie="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Pe="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function y({children:t,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(Ee,{maxWidth:je,gap:e,children:t})}):o.jsx(Ee,{maxWidth:je,gap:e,children:t})}function Ve(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}function Me(t,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),t.dispatchEvent(n)}const Mt={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:S,defaultValue:"spec"}},U={};function Bt(){const[t,e]=b.useState("build");return o.jsxs(y,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:fe,children:"Current stage"}),o.jsx(me,{tone:"default",children:t})]}),o.jsx(p,{items:S,value:t,onValueChange:e})]})}function St(){const[t,e]=b.useState(!1);return o.jsxs(y,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:t},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function Ht(){const[t,e]=b.useState(!1),n=t?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(y,{children:[o.jsx(yt,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const N={render:()=>o.jsx(Bt,{}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await c.click(n),await a(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await a(n).toHaveFocus(),await c.keyboard("{Home}"),await a(s).toHaveAttribute("aria-selected","true"),await a(s).toHaveFocus()}},O={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:S})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});f.mouseDown(n),n.focus(),await c.click(s),await c.tab(),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},z={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),o.jsx(p,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:S}),o.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"After tabs"}),i=e.getByRole("tabpanel");f.mouseDown(n),n.focus(),await c.click(s),await c.tab({shift:!0}),await a(i).toHaveFocus(),await c.tab({shift:!0}),await a(n).toHaveFocus(),await a(n.style.boxShadow).toContain("0 0 0 3px")}},q={render:()=>o.jsx(St,{}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});f.mouseDown(s),await c.click(n);const i=e.getByRole("tab",{name:"Build"});await a(i).toBeDisabled(),await a(i.style.transform).toContain("translateY(0"),await a(i.style.boxShadow).toBe("none")}},W={render:()=>o.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("button",{name:"Remove Build tab"});await a(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await c.click(n);const s=e.getByRole("tab",{name:"Release"});await a(s).toHaveAttribute("aria-selected","true"),await a(s).toHaveAttribute("tabindex","0"),await a(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},Y={render:function(){const[e,n]=b.useState("spec"),[s,i]=b.useState(0);return o.jsxs(y,{gap:10,children:[o.jsxs("p",{style:k,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:S,onValueChange:u=>{n(u),i(w=>w+1)}})]})},play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"}),u=e.getByTestId("primary-pointer-active"),w=e.getByTestId("primary-pointer-count");await c.click(n),await c.tab(),await a(s).toHaveFocus(),await c.keyboard("{ArrowRight}"),await a(i).toHaveFocus(),await a(i.style.boxShadow).toContain("0 0 0 3px"),f.mouseDown(i,{button:2}),f.mouseUp(i,{button:2}),await a(i.style.boxShadow).toContain("0 0 0 3px"),await a(u).toHaveTextContent("spec"),await a(w).toHaveTextContent("0"),await c.click(i),await a(u).toHaveTextContent("build"),await a(w).toHaveTextContent("1")}},G={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},$={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tablist",{name:"All disabled release tabs"});await a(n).toHaveAttribute("aria-disabled","true");const s=e.getAllByRole("tab");await a(s).toHaveLength(2),s.forEach(i=>{a(i).toBeDisabled(),a(i).not.toHaveAttribute("aria-keyshortcuts"),a(i).toHaveAttribute("aria-selected","false"),a(i).toHaveAttribute("tabindex","-1")})}},_={render:()=>o.jsx(p,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Security Review"}),i=e.getByRole("tab",{name:"Release"});await a(n).not.toHaveAttribute("aria-keyshortcuts"),await a(s).not.toHaveAttribute("aria-keyshortcuts"),await a(i).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await c.keyboard("{ArrowRight}"),await c.keyboard("{Enter}"),await a(n).toHaveAttribute("aria-selected","true"),await a(n).toHaveFocus(),await a(e.getByText("Specification stage is active.")).toBeInTheDocument()}},J={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await c.click(n),await a(n).toHaveAttribute("aria-selected","true"),await a(n).toHaveAttribute("aria-keyshortcuts",Le),await a(s).toHaveAttribute("aria-keyshortcuts",Le),await a(i).toHaveAttribute("aria-disabled","true"),await a(i).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{End}"),await a(s).toHaveAttribute("aria-selected","true"),await a(s).toHaveFocus(),await c.keyboard("{PageUp}"),await a(n).toHaveAttribute("aria-selected","true"),await a(n).toHaveFocus(),await c.keyboard("{PageDown}"),await a(s).toHaveAttribute("aria-selected","true"),await a(s).toHaveFocus(),await c.keyboard("{Home}"),await a(n).toHaveAttribute("aria-selected","true"),await a(n).toHaveFocus(),f.keyDown(n,{key:"End",ctrlKey:!0}),await a(n).toHaveAttribute("aria-selected","true"),await a(n).toHaveFocus(),f.keyDown(n,{key:"PageDown",ctrlKey:!0}),await a(n).toHaveAttribute("aria-selected","true"),await a(n).toHaveFocus()}},Q={render:()=>o.jsxs(y,{children:[o.jsxs("p",{style:k,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:S})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(s),await c.keyboard("{ArrowRight}"),await a(s).toHaveFocus(),await a(s).toHaveAttribute("aria-selected","true"),await c.click(n),await c.keyboard("{ArrowLeft}"),await a(n).toHaveFocus(),await a(n).toHaveAttribute("aria-selected","true")}};function At(){const t=b.useId();return o.jsxs(y,{gap:10,children:[o.jsx("h3",{id:t,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:t,items:S,defaultValue:"spec"})]})}function Et(){return o.jsxs(y,{children:[o.jsxs("p",{style:k,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const X={render:()=>o.jsx(At,{}),play:async({canvasElement:t})=>{const e=v(t);await a(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},Z={render:()=>o.jsx(Et,{}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Navigation overview"});await a(n).toHaveAttribute("aria-selected","true"),await a(n).toHaveAttribute("aria-controls"),await a(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},ee={render:()=>o.jsx(y,{children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await a(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Review"}),u=e.getByRole("tab",{name:"Release"});await c.click(s),await a(s).toHaveAttribute("aria-keyshortcuts",Fe),await a(u).toHaveAttribute("aria-keyshortcuts",Fe),await a(i).not.toHaveAttribute("aria-keyshortcuts"),f.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),f.keyDown(s,{key:"ArrowUp",metaKey:!0}),await a(s).toHaveFocus(),await a(s).toHaveAttribute("aria-selected","true"),await c.keyboard("{ArrowDown}"),await a(u).toHaveAttribute("aria-selected","true")}},ae={render:()=>o.jsxs(y,{dir:"rtl",children:[o.jsx("p",{style:k,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:S})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(n),await a(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await c.keyboard("{ArrowRight}"),await a(s).toHaveFocus(),await a(s).toHaveAttribute("aria-selected","true"),await c.keyboard("{ArrowLeft}"),await a(n).toHaveFocus(),await a(n).toHaveAttribute("aria-selected","true")}},te={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(n),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await a(n).toHaveAttribute("aria-keyshortcuts",Ie),await a(s).toHaveAttribute("aria-keyshortcuts",Ie),await c.keyboard("{ArrowRight}");const i=e.getByRole("tab",{name:"Build"});await a(i).toHaveFocus(),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{Shift>}{Enter}{/Shift}"),await C(()=>{a(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await c.keyboard("{End}"),await a(s).toHaveFocus(),await a(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await c.keyboard("{Shift>}{Space}{/Shift}"),await C(()=>{a(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},ne={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(p,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:t})=>{const n=v(t).getByRole("tab",{name:"Build"});f.keyDown(n,{key:"Enter",ctrlKey:!0}),await C(()=>{a(n.style.transform).toContain("translateY(0")}),f.keyDown(n,{key:"Enter"}),await C(()=>{a(n.style.transform).toBe("translateY(1px)")}),f.keyUp(n,{key:"Enter"}),await C(()=>{a(n.style.transform).toContain("translateY(0")}),f.keyDown(n,{key:"Spacebar"}),await C(()=>{a(n.style.transform).toBe("translateY(1px)")}),f.keyUp(n,{key:"Spacebar"}),await C(()=>{a(n.style.transform).toContain("translateY(0")})}};function Ct(){const[t,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(y,{gap:10,children:[o.jsx("p",{style:k,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:fe,children:"Manual activation changes"}),o.jsx(me,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:t,onValueChange:i=>{e(i),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const oe={render:()=>o.jsx(Ct,{}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("manual-repeat-change-count");await c.click(n),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await a(u).toHaveTextContent("0"),await c.keyboard("{ArrowRight}"),await a(s).toHaveFocus(),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),f.keyDown(s,{key:"Enter",repeat:!0}),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await a(u).toHaveTextContent("0"),await c.keyboard("{Enter}"),await a(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await a(u).toHaveTextContent("1"),await c.keyboard("{ArrowRight}"),await a(i).toHaveFocus(),await a(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),f.keyDown(i,{key:" ",repeat:!0}),await a(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await a(u).toHaveTextContent("1"),await c.keyboard("{Space}"),await a(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await a(u).toHaveTextContent("2")}},se={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("button",{name:"Outside focus target"});await c.click(n),await c.keyboard("{ArrowRight}"),await a(s).toHaveFocus(),await a(n).toHaveAttribute("aria-selected","true"),await a(s).toHaveAttribute("aria-selected","false"),await a(n).toHaveAttribute("tabindex","-1"),await a(s).toHaveAttribute("tabindex","0"),await c.click(i),await a(i).toHaveFocus(),await a(n).toHaveAttribute("tabindex","0"),await a(s).toHaveAttribute("tabindex","-1")}},re={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await c.click(n),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{ArrowRight}"),await a(s).toHaveFocus(),await a(s).toHaveAttribute("aria-selected","false"),Ve(s,"Enter"),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await a(s).toHaveAttribute("aria-selected","false"),Ve(s,"Space"),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await a(s).toHaveAttribute("aria-selected","false"),Me(s,"Enter"),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await a(s).toHaveAttribute("aria-selected","false"),Me(s,"Space"),await a(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await a(s).toHaveAttribute("aria-selected","false"),s.focus(),await a(s).toHaveFocus(),await c.keyboard("{Enter}"),await a(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await a(s).toHaveAttribute("aria-selected","true")}},ie={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:k,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),i=e.getByRole("tab",{name:"Ship"});await c.click(n),await a(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await a(n).toHaveAttribute("aria-keyshortcuts",Pe),await a(i).toHaveAttribute("aria-keyshortcuts",Pe),await a(s).toHaveAttribute("aria-disabled","true"),await a(s).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{ArrowDown}"),await a(i).toHaveFocus(),await a(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await c.keyboard("{Enter}"),await a(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Dt(){const[t,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs(y,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:fe,children:"Value change events"}),o.jsx(me,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:S,value:t,onValueChange:i=>{e(i),s(u=>u+1)}})]})}const ce={render:()=>o.jsx(Dt,{}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await c.click(n),await a(i).toHaveTextContent("0"),await c.click(s),await a(i).toHaveTextContent("1"),await c.click(s),await a(i).toHaveTextContent("1")}},le={render:()=>o.jsx(p,{items:S,defaultValue:"spec"}),play:async({canvasElement:t})=>{const e=v(t),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=n.getAttribute("aria-controls"),u=s.getAttribute("aria-controls");await a(i).toBeTruthy(),await a(u).toBeTruthy(),await a(document.getElementById(i)).not.toBeNull(),await a(document.getElementById(u)).not.toBeNull();const w=document.getElementById(u);await a(w).toHaveAttribute("hidden"),await c.click(s),await a(w).not.toHaveAttribute("hidden")}};var Ke,Ue,Ne;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:"{}",...(Ne=(Ue=U.parameters)==null?void 0:Ue.docs)==null?void 0:Ne.source}}};var Oe,ze,qe;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(qe=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:qe.source}}};var We,Ye,Ge;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ge=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var $e,_e,Je;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Je=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;q.parameters={...q.parameters,docs:{...(Qe=q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=q.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;W.parameters={...W.parameters,docs:{...(ea=W.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=W.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,oa,sa;Y.parameters={...Y.parameters,docs:{...(na=Y.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(sa=(oa=Y.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ra,ia,ca;G.parameters={...G.parameters,docs:{...(ra=G.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ca=(ia=G.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,ba;$.parameters={...$.parameters,docs:{...(la=$.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ba=(ua=$.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var da,pa,va;_.parameters={..._.parameters,docs:{...(da=_.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(va=(pa=_.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ya,wa,ga;J.parameters={...J.parameters,docs:{...(ya=J.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ga=(wa=J.parameters)==null?void 0:wa.docs)==null?void 0:ga.source}}};var ma,fa,Ta;Q.parameters={...Q.parameters,docs:{...(ma=Q.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(Ta=(fa=Q.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var xa,ka,ha;X.parameters={...X.parameters,docs:{...(xa=X.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(ha=(ka=X.parameters)==null?void 0:ka.docs)==null?void 0:ha.source}}};var Ra,Ba,Sa;Z.parameters={...Z.parameters,docs:{...(Ra=Z.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Sa=(Ba=Z.parameters)==null?void 0:Ba.docs)==null?void 0:Sa.source}}};var Ha,Aa,Ea;ee.parameters={...ee.parameters,docs:{...(Ha=ee.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Ea=(Aa=ee.parameters)==null?void 0:Aa.docs)==null?void 0:Ea.source}}};var Ca,Da,ja;ae.parameters={...ae.parameters,docs:{...(Ca=ae.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(ja=(Da=ae.parameters)==null?void 0:Da.docs)==null?void 0:ja.source}}};var La,Fa,Ia;te.parameters={...te.parameters,docs:{...(La=te.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Ia=(Fa=te.parameters)==null?void 0:Fa.docs)==null?void 0:Ia.source}}};var Pa,Va,Ma;ne.parameters={...ne.parameters,docs:{...(Pa=ne.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Ma=(Va=ne.parameters)==null?void 0:Va.docs)==null?void 0:Ma.source}}};var Ka,Ua,Na;oe.parameters={...oe.parameters,docs:{...(Ka=oe.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Na=(Ua=oe.parameters)==null?void 0:Ua.docs)==null?void 0:Na.source}}};var Oa,za,qa;se.parameters={...se.parameters,docs:{...(Oa=se.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(qa=(za=se.parameters)==null?void 0:za.docs)==null?void 0:qa.source}}};var Wa,Ya,Ga;re.parameters={...re.parameters,docs:{...(Wa=re.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Ga=(Ya=re.parameters)==null?void 0:Ya.docs)==null?void 0:Ga.source}}};var $a,_a,Ja;ie.parameters={...ie.parameters,docs:{...($a=ie.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(Ja=(_a=ie.parameters)==null?void 0:_a.docs)==null?void 0:Ja.source}}};var Qa,Xa,Za;ce.parameters={...ce.parameters,docs:{...(Qa=ce.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
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
}`,...(Za=(Xa=ce.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var et,at,tt;le.parameters={...le.parameters,docs:{...(et=le.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(tt=(at=le.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};const Kt=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{$ as AllTabsDisabled,ce as ChangeTelemetry,N as Controlled,le as ControlsReferenceMountedPanels,U as Default,q as DisabledTabVisualReset,Z as IconOnlyLabelNaming,re as ImeCompositionGuard,O as KeyboardFocusRingAfterPointer,z as KeyboardFocusRingShiftTabReentry,J as KeyboardNavigationGuide,X as LabelledByHeading,te as ManualActivation,ne as ManualActivationPressedFeedback,oe as ManualActivationRepeatGuard,se as ManualFocusResetOnBlur,ie as ManualVerticalActivation,Q as NoLoopNavigation,Y as PrimaryPointerOnlyPressedState,W as RemovedActiveTabFallback,ae as RtlKeyboardNavigation,_ as SingleActionableTab,ee as Vertical,G as WithDisabledTab,Kt as __namedExportsOrder,Mt as default};
