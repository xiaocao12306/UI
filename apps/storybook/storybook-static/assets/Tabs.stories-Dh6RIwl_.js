import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as Dt}from"./Button-DirECuRH.js";import{B as ke}from"./Badge-ZJmMstsz.js";import{within as v,expect as t,userEvent as l,fireEvent as T,waitFor as S}from"./index-DgAF9SIF.js";import{s as x,S as Me}from"./storyShowcase-Bw5VyCj0.js";const jt={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function Ke(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function Te(a,e,n,s){var y,k;if(a.length===0)return-1;const r=(y=a[e])!=null&&y.disabled?-1:e;let u=e;for(let R=0;R<a.length;R+=1){if(u+=n,s)u<0?u=a.length-1:u>=a.length&&(u=0);else if(u<0||u>=a.length)return r;if(!((k=a[u])!=null&&k.disabled))return u}return r}function Lt(a){return a.findIndex(e=>!e.disabled)}function Ft(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function It(a,e,n){var s,r,u,y;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let k=0;k<a.length;k+=1){const R=e+k;if(R>=0&&R<a.length&&!((s=a[R])!=null&&s.disabled))return((r=a[R])==null?void 0:r.key)??n;if(k===0)continue;const H=e-k;if(H>=0&&H<a.length&&!((u=a[H])!=null&&u.disabled))return((y=a[H])==null?void 0:y.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:r,orientation:u="horizontal",activationMode:y="automatic",loop:k=!0,onValueChange:R}){var Ce;const H=d.useId(),pe=d.useRef(null),ve=d.useRef([]),P=d.useRef(null),D=d.useRef(null),j=d.useRef(null);d.useRef(null),d.useRef(null),d.useRef(null);const L=d.useRef(!0),[mt,ft]=d.useState(()=>Ke(a)),V=(Ce=a.find(i=>!i.disabled))==null?void 0:Ce.key,[ye,Be]=d.useState(n??V),[Tt,we]=d.useState(null),[xt,A]=d.useState(null),[ht,F]=d.useState(null),kt=N(s,"Tabs"),He=N(r),Se=d.useMemo(()=>Ot(H,a),[H,a]),Ae=d.useMemo(()=>zt(a),[a]),Rt=d.useMemo(()=>a.reduce((i,b)=>b.disabled?i:i+1,0),[a]);d.useEffect(()=>{},[a]),d.useEffect(()=>{},[a]),d.useEffect(()=>{ft(Ke(a))},[a]),d.useEffect(()=>{},[a,e]),d.useEffect(()=>{var E;const i=((E=pe.current)==null?void 0:E.ownerDocument)??document,b=m=>{m.metaKey||m.altKey||m.ctrlKey||(L.current=!0)},w=m=>{"button"in m&&!xe(m.button)||"ctrlKey"in m&&m.ctrlKey||(L.current=!1)};return i.addEventListener("keydown",b,!0),i.addEventListener("pointerdown",w,!0),i.addEventListener("mousedown",w,!0),i.addEventListener("touchstart",w,!0),()=>{i.removeEventListener("keydown",b,!0),i.removeEventListener("pointerdown",w,!0),i.removeEventListener("mousedown",w,!0),i.removeEventListener("touchstart",w,!0)}},[]);const M=e??ye,ge=a.find(i=>i.key===M),B=ge&&!ge.disabled?M:e===void 0&&M&&!ge?It(a,mt[M],V):V,[Ee,I]=d.useState(B),Bt=a.some(i=>i.key===Ee&&!i.disabled)?Ee:B;d.useEffect(()=>{e===void 0&&B!==ye&&Be(B)},[B,ye,e]),d.useEffect(()=>{I(B)},[B]),d.useEffect(()=>()=>{D.current!==null&&(j.current??window).clearTimeout(D.current)},[]),d.useEffect(()=>{const i=new Set(a.filter(b=>!b.disabled).map(b=>b.key));we(b=>b&&!i.has(b)?null:b),A(b=>b&&!i.has(b)?null:b),F(b=>b&&!i.has(b)?null:b)},[a]);const Ht=d.useCallback(()=>{P.current=null,D.current!==null&&((j.current??window).clearTimeout(D.current),D.current=null),j.current=null},[]),me=d.useCallback(i=>{const b=a.find(w=>w.key===i);!b||b.disabled||i===B||(e===void 0&&Be(i),R==null||R(i))},[B,a,R,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:pe,role:"tablist","aria-label":He?void 0:kt,"aria-labelledby":He,"aria-orientation":u,"aria-disabled":V?void 0:!0,onBlurCapture:i=>{const b=i.relatedTarget;b&&i.currentTarget.contains(b)||I(B)},style:{display:"flex",gap:6,flexWrap:u==="horizontal"?"wrap":"nowrap",flexDirection:u==="vertical"?"column":"row"},children:a.map((i,b)=>{const w=Se[b],E=i.key===B,m=!!i.disabled,De=!m&&Tt===i.key,je=!m&&xt===i.key,Le=!m&&ht===i.key,St=De||Le,fe=N(i.ariaLabelledBy),Fe=fe?void 0:N(i.ariaLabel),At=he(i.label),Et=fe||Fe||At?void 0:Ut(i.key,b);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:c=>{ve.current[b]=c},id:(w==null?void 0:w.tabId)??`${H}-tab-${b}`,type:"button",role:"tab","aria-labelledby":fe,"aria-label":Fe??Et,"aria-selected":E,"aria-controls":(w==null?void 0:w.panelId)??`${H}-panel-${b}`,"aria-disabled":m||void 0,"aria-keyshortcuts":m||Rt<=1?void 0:Pt(y,u),tabIndex:Bt===i.key?0:-1,disabled:m,onClick:c=>{I(i.key);const g=y==="manual"&&c.detail===0&&P.current===i.key;Ht(),!g&&me(i.key)},onMouseEnter:()=>{m||we(i.key)},onMouseLeave:()=>{we(c=>c===i.key?null:c),A(c=>c===i.key?null:c)},onPointerDown:c=>{m||c.ctrlKey||xe(c.button)&&(L.current=!1,F(g=>g===i.key?null:g),A(i.key))},onPointerUp:c=>{xe(c.button)&&A(g=>g===i.key?null:g)},onMouseDown:c=>{m||c.button!==0||c.ctrlKey||(L.current=!1,F(g=>g===i.key?null:g),A(i.key))},onMouseUp:c=>{c.button===0&&A(g=>g===i.key?null:g)},onPointerCancel:()=>{A(c=>c===i.key?null:c)},onFocus:()=>{if(I(i.key),m){F(c=>c===i.key?null:c);return}F(c=>Nt(ve.current[b],L.current)?i.key:c===i.key?null:c)},onBlur:()=>{F(c=>c===i.key?null:c),A(c=>c===i.key?null:c)},onKeyDown:c=>{if(L.current=!0,c.altKey||c.ctrlKey||c.metaKey)return;if(y==="manual"&&Ne(c.key)){if(Vt(c)||(c.preventDefault(),c.repeat))return;A(i.key),P.current=i.key;const h=c.currentTarget.ownerDocument.defaultView??window;D.current!==null&&(j.current??h).clearTimeout(D.current),j.current=h,D.current=h.setTimeout(()=>{P.current=null,D.current=null,j.current=null},0),me(i.key);return}const g=h=>{var Pe,Ve;const K=(Pe=a[h])==null?void 0:Pe.key;K&&(I(K),y==="automatic"&&me(K),(Ve=ve.current[h])==null||Ve.focus())};if(c.key==="Home"){c.preventDefault();const h=Lt(a);g(h);return}if(c.key==="End"){c.preventDefault();const h=Ft(a);g(h);return}if(c.key==="PageDown"){c.preventDefault();const h=Te(a,b,1,k);g(h);return}if(c.key==="PageUp"){c.preventDefault();const h=Te(a,b,-1,k);g(h);return}const Ie=Mt({orientation:u,key:c.key,isRtl:u==="horizontal"&&Kt(pe.current)});if(!Ie)return;c.preventDefault();const Ct=Te(a,b,Ie,k);g(Ct)},onKeyUp:c=>{Ne(c.key)&&A(g=>g===i.key?null:g)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:E?"1px solid var(--aurora-accent-default)":St?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:E?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":je?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":De?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:m?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:m?"not-allowed":"pointer",boxShadow:Le?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:je?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:i.label},Ae[b]??`${i.key}__dup-${b}`)})}),a.map((i,b)=>{const w=Se[b],E=i.key===B;return o.jsx("div",{id:(w==null?void 0:w.panelId)??`${H}-panel-${b}`,role:"tabpanel","aria-labelledby":(w==null?void 0:w.tabId)??`${H}-tab-${b}`,tabIndex:E?0:-1,hidden:!E,style:{display:E?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:i.content},`${Ae[b]??`${i.key}__dup-${b}`}__panel`)})]})}function Ne(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function xe(a){return typeof a!="number"||a<=0}function Pt(a,e){return jt[a][e]}function Vt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Mt({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Kt(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function Nt(a,e){if(!a)return e;try{return a.matches(":focus-visible")||e}catch{return e}}function he(a){if(typeof a=="string")return a.trim().length>0;if(typeof a=="number")return!0;if(Array.isArray(a))return a.some(n=>he(n));if(!d.isValidElement(a))return!1;const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?!1:typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?!0:he(e.children)}function N(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function Ut(a,e){const n=a.trim();return n.length>0?n:`Tab ${e+1}`}function Ot(a,e){const n=new Map;return e.map(s=>{const r=Yt(s.key),u=(n.get(r)??0)+1;n.set(r,u);const y=u>1?`${r}-${u}`:r;return{tabId:`${a}-tab-${y}`,panelId:`${a}-panel-${y}`}})}function zt(a){const e=new Map;return a.map((n,s)=>{const r=e.get(n.key)??0;return e.set(n.key,r+1),r===0?n.key:`${n.key}__dup-${s}`})}function Yt(a){const e=encodeURIComponent(a).replace(/%/g,"_");return e.length>0?e:"item"}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const C=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],Re={color:"var(--aurora-text-secondary)",fontSize:13},Ue="min(100%, 620px)",Oe="Home End PageDown PageUp ArrowLeft ArrowRight",ze="Home End PageDown PageUp ArrowUp ArrowDown",Ye="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",$e="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function f({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(Me,{maxWidth:Ue,gap:e,children:a})}):o.jsx(Me,{maxWidth:Ue,gap:e,children:a})}function qe(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}function We(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const rn={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:C,defaultValue:"spec"}},U={};function $t(){const[a,e]=d.useState("build");return o.jsxs(f,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:Re,children:"Current stage"}),o.jsx(ke,{tone:"default",children:a})]}),o.jsx(p,{items:C,value:a,onValueChange:e})]})}function qt(){const[a,e]=d.useState(!1);return o.jsxs(f,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function Wt(){const[a,e]=d.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(f,{children:[o.jsx(Dt,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const O={render:()=>o.jsx($t,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},z={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});T.mouseDown(n),n.focus(),await l.click(s),await l.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},Y={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),o.jsx(p,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:C}),o.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"After tabs"}),r=e.getByRole("tabpanel");T.mouseDown(n),n.focus(),await l.click(s),await l.tab({shift:!0}),await t(r).toHaveFocus(),await l.tab({shift:!0}),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},$={render:()=>o.jsx(qt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});T.mouseDown(s),await l.click(n);const r=e.getByRole("tab",{name:"Build"});await t(r).toBeDisabled(),await t(r.style.transform).toContain("translateY(0"),await t(r.style.boxShadow).toBe("none")}},q={render:()=>o.jsx(Wt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await l.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},W={render:function(){const[e,n]=d.useState("spec"),[s,r]=d.useState(0);return o.jsxs(f,{gap:10,children:[o.jsxs("p",{style:x,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:C,onValueChange:u=>{n(u),r(y=>y+1)}})]})},play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Build"}),u=e.getByTestId("primary-pointer-active"),y=e.getByTestId("primary-pointer-count");await l.click(n),await l.tab(),await t(s).toHaveFocus(),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r.style.boxShadow).toContain("0 0 0 3px"),T.mouseDown(r,{button:2}),T.mouseUp(r,{button:2}),await t(r.style.boxShadow).toContain("0 0 0 3px"),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),T.mouseDown(r,{button:0}),await S(()=>{t(r.style.transform).toContain("translateY(1px)")}),T.pointerCancel(r),await S(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await S(()=>{t(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await S(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),await l.click(r),await t(u).toHaveTextContent("build"),await t(y).toHaveTextContent("1")}},_={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},G={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach(r=>{t(r).toBeDisabled(),t(r).not.toHaveAttribute("aria-keyshortcuts"),t(r).toHaveAttribute("aria-selected","false"),t(r).toHaveAttribute("tabindex","-1")})}},J={render:()=>o.jsx(p,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Security Review"}),r=e.getByRole("tab",{name:"Release"});await t(n).not.toHaveAttribute("aria-keyshortcuts"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await l.keyboard("{ArrowRight}"),await l.keyboard("{Enter}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await t(e.getByText("Specification stage is active.")).toBeInTheDocument()}},Q={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByRole("tab",{name:"Blocked"});await l.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-keyshortcuts",Oe),await t(s).toHaveAttribute("aria-keyshortcuts",Oe),await t(r).toHaveAttribute("aria-disabled","true"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await l.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),T.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),T.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},X={render:()=>o.jsxs(f,{children:[o.jsxs("p",{style:x,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(s),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.click(n),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function _t(){const a=d.useId();return o.jsxs(f,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:C,defaultValue:"spec"})]})}function Gt(){return o.jsxs(f,{children:[o.jsxs("p",{style:x,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Jt(){return o.jsxs(f,{children:[o.jsxs("p",{style:x,children:["Non-text tabs without explicit naming still get fallback accessible names derived from",o.jsx("code",{children:" items[].key "})," to avoid unnamed tab controls in production."]}),o.jsx(p,{ariaLabel:"Fallback naming tabs",defaultValue:"overview-stage",items:[{key:"overview-stage",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),content:"Overview panel keeps fallback naming deterministic."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Qt(){return o.jsxs(f,{gap:10,children:[o.jsxs("p",{style:x,children:["Icon tabs can bind to external visible headings with ",o.jsx("code",{children:"items[].ariaLabelledBy"}),"; when both naming props are present, ",o.jsx("code",{children:"ariaLabelledBy"})," takes precedence."]}),o.jsx("h3",{id:"tabs-icon-overview-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Navigation overview"}),o.jsx(p,{ariaLabel:"Icon labelledby tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Fallback overview label",ariaLabelledBy:"tabs-icon-overview-heading",content:"Overview panel binds icon tab naming to visible heading."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const Z={render:()=>o.jsx(_t,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},ee={render:()=>o.jsx(Gt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},ae={render:()=>o.jsx(Jt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"overview-stage"});await t(n).toHaveAttribute("aria-label","overview-stage"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.")}},te={render:()=>o.jsx(Qt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-labelledby","tabs-icon-overview-heading"),await t(n).not.toHaveAttribute("aria-label"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel binds icon tab naming to visible heading.")}},ne={render:()=>o.jsx(f,{children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Review"}),u=e.getByRole("tab",{name:"Release"});await l.click(s),await t(s).toHaveAttribute("aria-keyshortcuts",ze),await t(u).toHaveAttribute("aria-keyshortcuts",ze),await t(r).not.toHaveAttribute("aria-keyshortcuts"),T.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),T.keyDown(s,{key:"ArrowUp",metaKey:!0}),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowDown}"),await t(u).toHaveAttribute("aria-selected","true")}},oe={render:()=>o.jsxs(f,{dir:"rtl",children:[o.jsx("p",{style:x,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},se={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",Ye),await t(s).toHaveAttribute("aria-keyshortcuts",Ye),await l.keyboard("{ArrowRight}");const r=e.getByRole("tab",{name:"Build"});await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Shift>}{Enter}{/Shift}"),await S(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await l.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await S(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},re={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(p,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=v(a).getByRole("tab",{name:"Build"});T.keyDown(n,{key:"Enter",ctrlKey:!0}),await S(()=>{t(n.style.transform).toContain("translateY(0")}),T.keyDown(n,{key:"Enter"}),await S(()=>{t(n.style.transform).toBe("translateY(1px)")}),T.keyUp(n,{key:"Enter"}),await S(()=>{t(n.style.transform).toContain("translateY(0")}),T.keyDown(n,{key:"Spacebar"}),await S(()=>{t(n.style.transform).toBe("translateY(1px)")}),T.keyUp(n,{key:"Spacebar"}),await S(()=>{t(n.style.transform).toContain("translateY(0")})}};function Xt(){const[a,e]=d.useState("spec"),[n,s]=d.useState(0);return o.jsxs(f,{gap:10,children:[o.jsx("p",{style:x,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:Re,children:"Manual activation changes"}),o.jsx(ke,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const ie={render:()=>o.jsx(Xt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("manual-repeat-change-count");await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),T.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),T.keyDown(r,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(u).toHaveTextContent("2")}},ce={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("button",{name:"Outside focus target"});await l.click(n),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await l.click(r),await t(r).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},le={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),qe(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),qe(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),We(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),We(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},ue={render:()=>o.jsxs(f,{children:[o.jsx("p",{style:x,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),r=e.getByRole("tab",{name:"Ship"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",$e),await t(r).toHaveAttribute("aria-keyshortcuts",$e),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{ArrowDown}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function Zt(){const[a,e]=d.useState("build"),[n,s]=d.useState(0);return o.jsxs(f,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:Re,children:"Value change events"}),o.jsx(ke,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:C,value:a,onValueChange:r=>{e(r),s(u=>u+1)}})]})}const be={render:()=>o.jsx(Zt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByTestId("change-count");await l.click(n),await t(r).toHaveTextContent("0"),await l.click(s),await t(r).toHaveTextContent("1"),await l.click(s),await t(r).toHaveTextContent("1")}},de={render:()=>o.jsx(p,{items:C,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=n.getAttribute("aria-controls"),u=s.getAttribute("aria-controls");await t(r).toBeTruthy(),await t(u).toBeTruthy(),await t(document.getElementById(r)).not.toBeNull(),await t(document.getElementById(u)).not.toBeNull();const y=document.getElementById(u);await t(y).toHaveAttribute("hidden"),await l.click(s),await t(y).not.toHaveAttribute("hidden")}};var _e,Ge,Je;U.parameters={...U.parameters,docs:{...(_e=U.parameters)==null?void 0:_e.docs,source:{originalSource:"{}",...(Je=(Ge=U.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=O.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;z.parameters={...z.parameters,docs:{...(ea=z.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=z.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,oa,sa;Y.parameters={...Y.parameters,docs:{...(na=Y.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(sa=(oa=Y.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ra,ia,ca;$.parameters={...$.parameters,docs:{...(ra=$.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ca=(ia=$.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,ba;q.parameters={...q.parameters,docs:{...(la=q.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ba=(ua=q.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var da,pa,va;W.parameters={...W.parameters,docs:{...(da=W.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(va=(pa=W.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ya,wa,ga;_.parameters={..._.parameters,docs:{...(ya=_.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ga=(wa=_.parameters)==null?void 0:wa.docs)==null?void 0:ga.source}}};var ma,fa,Ta;G.parameters={...G.parameters,docs:{...(ma=G.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(Ta=(fa=G.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var xa,ha,ka;J.parameters={...J.parameters,docs:{...(xa=J.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(ka=(ha=J.parameters)==null?void 0:ha.docs)==null?void 0:ka.source}}};var Ra,Ba,Ha;Q.parameters={...Q.parameters,docs:{...(Ra=Q.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Ha=(Ba=Q.parameters)==null?void 0:Ba.docs)==null?void 0:Ha.source}}};var Sa,Aa,Ea;X.parameters={...X.parameters,docs:{...(Sa=X.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ea=(Aa=X.parameters)==null?void 0:Aa.docs)==null?void 0:Ea.source}}};var Ca,Da,ja;Z.parameters={...Z.parameters,docs:{...(Ca=Z.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(ja=(Da=Z.parameters)==null?void 0:Da.docs)==null?void 0:ja.source}}};var La,Fa,Ia;ee.parameters={...ee.parameters,docs:{...(La=ee.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Ia=(Fa=ee.parameters)==null?void 0:Fa.docs)==null?void 0:Ia.source}}};var Pa,Va,Ma;ae.parameters={...ae.parameters,docs:{...(Pa=ae.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  render: () => <NonTextFallbackNamingTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconTab = canvas.getByRole("tab", {
      name: "overview-stage"
    });
    await expect(iconTab).toHaveAttribute("aria-label", "overview-stage");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.");
  }
}`,...(Ma=(Va=ae.parameters)==null?void 0:Va.docs)==null?void 0:Ma.source}}};var Ka,Na,Ua;te.parameters={...te.parameters,docs:{...(Ka=te.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  render: () => <IconOnlyLabelledByTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconTab = canvas.getByRole("tab", {
      name: "Navigation overview"
    });
    await expect(iconTab).toHaveAttribute("aria-labelledby", "tabs-icon-overview-heading");
    await expect(iconTab).not.toHaveAttribute("aria-label");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Overview panel binds icon tab naming to visible heading.");
  }
}`,...(Ua=(Na=te.parameters)==null?void 0:Na.docs)==null?void 0:Ua.source}}};var Oa,za,Ya;ne.parameters={...ne.parameters,docs:{...(Oa=ne.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(Ya=(za=ne.parameters)==null?void 0:za.docs)==null?void 0:Ya.source}}};var $a,qa,Wa;oe.parameters={...oe.parameters,docs:{...($a=oe.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(Wa=(qa=oe.parameters)==null?void 0:qa.docs)==null?void 0:Wa.source}}};var _a,Ga,Ja;se.parameters={...se.parameters,docs:{...(_a=se.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(Ja=(Ga=se.parameters)==null?void 0:Ga.docs)==null?void 0:Ja.source}}};var Qa,Xa,Za;re.parameters={...re.parameters,docs:{...(Qa=re.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
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
}`,...(Za=(Xa=re.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var et,at,tt;ie.parameters={...ie.parameters,docs:{...(et=ie.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(tt=(at=ie.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};var nt,ot,st;ce.parameters={...ce.parameters,docs:{...(nt=ce.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(ot=ce.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,it,ct;le.parameters={...le.parameters,docs:{...(rt=le.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ct=(it=le.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,ut,bt;ue.parameters={...ue.parameters,docs:{...(lt=ue.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(bt=(ut=ue.parameters)==null?void 0:ut.docs)==null?void 0:bt.source}}};var dt,pt,vt;be.parameters={...be.parameters,docs:{...(dt=be.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(vt=(pt=be.parameters)==null?void 0:pt.docs)==null?void 0:vt.source}}};var yt,wt,gt;de.parameters={...de.parameters,docs:{...(yt=de.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=de.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};const cn=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","NonTextFallbackNaming","IconOnlyLabelledByPrecedence","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{G as AllTabsDisabled,be as ChangeTelemetry,O as Controlled,de as ControlsReferenceMountedPanels,U as Default,$ as DisabledTabVisualReset,ee as IconOnlyLabelNaming,te as IconOnlyLabelledByPrecedence,le as ImeCompositionGuard,z as KeyboardFocusRingAfterPointer,Y as KeyboardFocusRingShiftTabReentry,Q as KeyboardNavigationGuide,Z as LabelledByHeading,se as ManualActivation,re as ManualActivationPressedFeedback,ie as ManualActivationRepeatGuard,ce as ManualFocusResetOnBlur,ue as ManualVerticalActivation,X as NoLoopNavigation,ae as NonTextFallbackNaming,W as PrimaryPointerOnlyPressedState,q as RemovedActiveTabFallback,oe as RtlKeyboardNavigation,J as SingleActionableTab,ne as Vertical,_ as WithDisabledTab,cn as __namedExportsOrder,rn as default};
