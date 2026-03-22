import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Wt}from"./Button-B21ouHNm.js";import{B as K}from"./Badge-ZJmMstsz.js";import{within as y,expect as t,userEvent as l,fireEvent as v,waitFor as H}from"./index-DgAF9SIF.js";import{s as x,S as $e}from"./storyShowcase-DlKirntE.js";const _t={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function Ye(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function He(a,e,n,s){var g,k;if(a.length===0)return-1;const r=(g=a[e])!=null&&g.disabled?-1:e;let u=e;for(let B=0;B<a.length;B+=1){if(u+=n,s)u<0?u=a.length-1:u>=a.length&&(u=0);else if(u<0||u>=a.length)return r;if(!((k=a[u])!=null&&k.disabled))return u}return r}function Gt(a){return a.findIndex(e=>!e.disabled)}function Jt(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function Zt(a,e,n){var s,r,u,g;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let k=0;k<a.length;k+=1){const B=e+k;if(B>=0&&B<a.length&&!((s=a[B])!=null&&s.disabled))return((r=a[B])==null?void 0:r.key)??n;if(k===0)continue;const C=e-k;if(C>=0&&C<a.length&&!((u=a[C])!=null&&u.disabled))return((g=a[C])==null?void 0:g.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:r,orientation:u="horizontal",activationMode:g="automatic",loop:k=!0,onTabKeyDown:B,onValueChange:C}){var Ie,Pe;const j=b.useId(),Te=b.useRef(null),xe=b.useRef([]),U=b.useRef(null),D=b.useRef(null),L=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const F=b.useRef(!0),[Lt,Ft]=b.useState(()=>Ye(a)),It=(Ie=a[0])==null?void 0:Ie.key,I=(Pe=a.find(i=>!i.disabled))==null?void 0:Pe.key,[he,Ae]=b.useState(n??I),[Pt,ke]=b.useState(null),[Mt,S]=b.useState(null),[Vt,P]=b.useState(null),Kt=$(s,"Tabs"),Ce=$(r),De=a.length>0&&!I,je=b.useMemo(()=>on(j,a),[j,a]),Le=b.useMemo(()=>sn(a),[a]),Nt=b.useMemo(()=>a.reduce((i,d)=>d.disabled?i:i+1,0),[a]);b.useEffect(()=>{},[a]),b.useEffect(()=>{},[a]),b.useEffect(()=>{Ft(Ye(a))},[a]),b.useEffect(()=>{},[I,a,e]),b.useEffect(()=>{var E;const i=((E=Te.current)==null?void 0:E.ownerDocument)??document,d=f=>{f.metaKey||f.altKey||f.ctrlKey||(F.current=!0)},m=f=>{"button"in f&&!Se(f.button)||"ctrlKey"in f&&f.ctrlKey||(F.current=!1)};return i.addEventListener("keydown",d,!0),i.addEventListener("pointerdown",m,!0),i.addEventListener("mousedown",m,!0),i.addEventListener("touchstart",m,!0),()=>{i.removeEventListener("keydown",d,!0),i.removeEventListener("pointerdown",m,!0),i.removeEventListener("mousedown",m,!0),i.removeEventListener("touchstart",m,!0)}},[]);const O=e??he,M=a.find(i=>i.key===O),R=M&&!M.disabled?O:I?e===void 0&&O&&!M?Zt(a,Lt[O],I):I:(M==null?void 0:M.key)??It,[Fe,V]=b.useState(R),Ut=a.some(i=>i.key===Fe&&!i.disabled)?Fe:R;b.useEffect(()=>{e===void 0&&R!==he&&Ae(R)},[R,he,e]),b.useEffect(()=>{V(R)},[R]),b.useEffect(()=>()=>{D.current!==null&&(L.current??window).clearTimeout(D.current)},[]),b.useEffect(()=>{const i=new Set(a.filter(d=>!d.disabled).map(d=>d.key));ke(d=>d&&!i.has(d)?null:d),S(d=>d&&!i.has(d)?null:d),P(d=>d&&!i.has(d)?null:d)},[a]);const Ot=b.useCallback(()=>{U.current=null,D.current!==null&&((L.current??window).clearTimeout(D.current),D.current=null),L.current=null},[]),Re=b.useCallback(i=>{const d=a.find(m=>m.key===i);!d||d.disabled||i===R||(e===void 0&&Ae(i),C==null||C(i))},[R,a,C,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:Te,role:"tablist","aria-label":Ce?void 0:Kt,"aria-labelledby":Ce,"aria-orientation":u,"aria-disabled":De?!0:void 0,tabIndex:De?0:void 0,onBlurCapture:i=>{const d=i.relatedTarget;d&&i.currentTarget.contains(d)||V(R)},style:{display:"flex",gap:6,flexWrap:u==="horizontal"?"wrap":"nowrap",flexDirection:u==="vertical"?"column":"row"},children:a.map((i,d)=>{const m=je[d],E=i.key===R,f=!!i.disabled,Me=!f&&Pt===i.key,Ve=!f&&Mt===i.key,Ke=!f&&Vt===i.key,zt=Me||Ke,Be=$(i.ariaLabelledBy),Ne=Be?void 0:$(i.ariaLabel),$t=Ee(i.label),Yt=Be||Ne||$t?void 0:nn(i.key,d);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:c=>{xe.current[d]=c},id:(m==null?void 0:m.tabId)??`${j}-tab-${d}`,type:"button",role:"tab","aria-labelledby":Be,"aria-label":Ne??Yt,"aria-selected":E,"aria-controls":(m==null?void 0:m.panelId)??`${j}-panel-${d}`,"aria-disabled":f||void 0,"aria-keyshortcuts":f||Nt<=1?void 0:Qt(g,u),tabIndex:f?-1:Ut===i.key?0:-1,disabled:f,onClick:c=>{V(i.key);const T=g==="manual"&&c.detail===0&&U.current===i.key;Ot(),!T&&Re(i.key)},onMouseEnter:()=>{f||ke(i.key)},onMouseLeave:()=>{ke(c=>c===i.key?null:c),S(c=>c===i.key?null:c)},onPointerDown:c=>{f||c.ctrlKey||Se(c.button)&&(F.current=!1,P(T=>T===i.key?null:T),S(i.key))},onPointerUp:c=>{Se(c.button)&&S(T=>T===i.key?null:T)},onMouseDown:c=>{f||c.button!==0||c.ctrlKey||(F.current=!1,P(T=>T===i.key?null:T),S(i.key))},onMouseUp:c=>{c.button===0&&S(T=>T===i.key?null:T)},onPointerCancel:()=>{S(c=>c===i.key?null:c)},onFocus:()=>{if(V(i.key),f){P(c=>c===i.key?null:c);return}P(c=>tn(xe.current[d],F.current)?i.key:c===i.key?null:c)},onBlur:()=>{P(c=>c===i.key?null:c),S(c=>c===i.key?null:c)},onKeyDown:c=>{if(F.current=!0,B==null||B(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(g==="manual"&&qe(c.key)){if(Xt(c)||(c.preventDefault(),c.repeat))return;S(i.key),U.current=i.key;const h=c.currentTarget.ownerDocument.defaultView??window;D.current!==null&&(L.current??h).clearTimeout(D.current),L.current=h,D.current=h.setTimeout(()=>{U.current=null,D.current=null,L.current=null},0),Re(i.key);return}const T=h=>{var Oe,ze;const z=(Oe=a[h])==null?void 0:Oe.key;z&&(V(z),g==="automatic"&&Re(z),(ze=xe.current[h])==null||ze.focus())};if(c.key==="Home"){c.preventDefault();const h=Gt(a);T(h);return}if(c.key==="End"){c.preventDefault();const h=Jt(a);T(h);return}if(c.key==="PageDown"){c.preventDefault();const h=He(a,d,1,k);T(h);return}if(c.key==="PageUp"){c.preventDefault();const h=He(a,d,-1,k);T(h);return}const Ue=en({orientation:u,key:c.key,isRtl:u==="horizontal"&&an(Te.current)});if(!Ue)return;c.preventDefault();const qt=He(a,d,Ue,k);T(qt)},onKeyUp:c=>{qe(c.key)&&S(T=>T===i.key?null:T)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:E?"1px solid var(--aurora-accent-default)":zt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:E?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":Ve?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":Me?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:f?"not-allowed":"pointer",boxShadow:Ke?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Ve?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:i.label},Le[d]??`${i.key}__dup-${d}`)})}),a.map((i,d)=>{const m=je[d],E=i.key===R;return o.jsx("div",{id:(m==null?void 0:m.panelId)??`${j}-panel-${d}`,role:"tabpanel","aria-labelledby":(m==null?void 0:m.tabId)??`${j}-tab-${d}`,tabIndex:E?0:-1,hidden:!E,style:{display:E?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:i.content},`${Le[d]??`${i.key}__dup-${d}`}__panel`)})]})}function qe(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Se(a){return typeof a!="number"||a<=0}function Qt(a,e){return _t[a][e]}function Xt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function en({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function an(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function tn(a,e){if(!a)return e;try{return a.matches(":focus-visible")||e}catch{return e}}function Ee(a){if(typeof a=="string")return a.trim().length>0;if(typeof a=="number")return!0;if(Array.isArray(a))return a.some(n=>Ee(n));if(!b.isValidElement(a))return!1;const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?!1:typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?!0:Ee(e.children)}function $(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function nn(a,e){const n=cn(a.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:`Tab ${e+1}`}function on(a,e){const n=new Map;return e.map(s=>{const r=rn(s.key),u=(n.get(r)??0)+1;n.set(r,u);const g=u>1?`${r}-${u}`:r;return{tabId:`${a}-tab-${g}`,panelId:`${a}-panel-${g}`}})}function sn(a){const e=new Map;return a.map((n,s)=>{const r=e.get(n.key)??0;return e.set(n.key,r+1),r===0?n.key:`${n.key}__dup-${s}`})}function rn(a){const e=encodeURIComponent(a).replace(/%/g,"_");return e.length>0?e:"item"}function cn(a){return a.replace(/\s+/g," ").trim()}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onTabKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const A=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],N={color:"var(--aurora-text-secondary)",fontSize:13},We="min(100%, 620px)",_e="Home End PageDown PageUp ArrowLeft ArrowRight",Ge="Home End PageDown PageUp ArrowUp ArrowDown",Je="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Ze="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function w({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx($e,{maxWidth:We,gap:e,children:a})}):o.jsx($e,{maxWidth:We,gap:e,children:a})}function Qe(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}function Xe(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const Sn={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:A,defaultValue:"spec"}},Y={};function ln(){const[a,e]=b.useState("build");return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Current stage"}),o.jsx(K,{tone:"default",children:a})]}),o.jsx(p,{items:A,value:a,onValueChange:e})]})}function un(){const[a,e]=b.useState(!1);return o.jsxs(w,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function bn(){const[a,e]=b.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(w,{children:[o.jsx(Wt,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const q={render:()=>o.jsx(ln,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},W={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:A})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});v.mouseDown(n),n.focus(),await l.click(s),await l.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},_={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),o.jsx(p,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:A}),o.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"After tabs"}),r=e.getByRole("tabpanel");v.mouseDown(n),n.focus(),await l.click(s),await l.tab({shift:!0}),await t(r).toHaveFocus(),await l.tab({shift:!0}),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},G={render:()=>o.jsx(un,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});v.mouseDown(s),await l.click(n);const r=e.getByRole("tab",{name:"Build"});await t(r).toBeDisabled(),await t(r.style.transform).toContain("translateY(0"),await t(r.style.boxShadow).toBe("none")}},J={render:()=>o.jsx(bn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await l.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},Z={render:function(){const[e,n]=b.useState("spec"),[s,r]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("p",{style:x,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:A,onValueChange:u=>{n(u),r(g=>g+1)}})]})},play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Build"}),u=e.getByTestId("primary-pointer-active"),g=e.getByTestId("primary-pointer-count");await l.click(n),await l.tab(),await t(s).toHaveFocus(),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await t(r.style.boxShadow).toContain("0 0 0 3px"),await t(u).toHaveTextContent("spec"),await t(g).toHaveTextContent("0"),v.mouseDown(r,{button:0}),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(g).toHaveTextContent("0"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(g).toHaveTextContent("0"),await l.click(r),await t(u).toHaveTextContent("build"),await t(g).toHaveTextContent("1")}},Q={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},X={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true"),await t(n).toHaveAttribute("tabindex","0");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach((r,u)=>{t(r).toBeDisabled(),t(r).not.toHaveAttribute("aria-keyshortcuts"),t(r).toHaveAttribute("aria-selected",u===0?"true":"false"),t(r).toHaveAttribute("tabindex","-1")}),await t(e.getByRole("tabpanel",{name:"Spec"})).toBeVisible(),await t(e.getByText("Specification stage is disabled.")).toBeInTheDocument(),await l.tab(),await t(n).toHaveFocus()}},ee={render:()=>o.jsxs(w,{children:[o.jsx("button",{type:"button",children:"Before empty tabs"}),o.jsx(p,{ariaLabel:"Empty tabs",items:[]}),o.jsx("button",{type:"button",children:"After empty tabs"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Empty tabs"});await t(n).not.toHaveAttribute("tabindex"),await t(n).not.toHaveAttribute("aria-disabled"),await t(e.queryByRole("tab")).not.toBeInTheDocument(),await t(e.queryByRole("tabpanel")).not.toBeInTheDocument(),await l.tab(),await t(e.getByRole("button",{name:"Before empty tabs"})).toHaveFocus(),await l.tab(),await t(e.getByRole("button",{name:"After empty tabs"})).toHaveFocus()}},ae={render:()=>o.jsx(p,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Security Review"}),r=e.getByRole("tab",{name:"Release"});await t(n).not.toHaveAttribute("aria-keyshortcuts"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await l.keyboard("{ArrowRight}"),await l.keyboard("{Enter}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await t(e.getByText("Specification stage is active.")).toBeInTheDocument()}},te={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByRole("tab",{name:"Blocked"});await l.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-keyshortcuts",_e),await t(s).toHaveAttribute("aria-keyshortcuts",_e),await t(r).toHaveAttribute("aria-disabled","true"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await l.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),v.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),v.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},ne={render:()=>o.jsxs(w,{children:[o.jsxs("p",{style:x,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:A})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(s),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.click(n),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function dn(){const a=b.useId();return o.jsxs(w,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:A,defaultValue:"spec"})]})}function pn(){return o.jsxs(w,{children:[o.jsxs("p",{style:x,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function yn(){return o.jsxs(w,{children:[o.jsxs("p",{style:x,children:["Non-text tabs without explicit naming still get fallback accessible names derived from",o.jsx("code",{children:" items[].key "})," and normalized for readability to avoid unnamed tab controls in production."]}),o.jsx(p,{ariaLabel:"Fallback naming tabs",defaultValue:"overview-stage",items:[{key:"overview-stage",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),content:"Overview panel keeps fallback naming deterministic."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function vn(){return o.jsxs(w,{gap:10,children:[o.jsxs("p",{style:x,children:["Icon tabs can bind to external visible headings with ",o.jsx("code",{children:"items[].ariaLabelledBy"}),"; when both naming props are present, ",o.jsx("code",{children:"ariaLabelledBy"})," takes precedence."]}),o.jsx("h3",{id:"tabs-icon-overview-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Navigation overview"}),o.jsx(p,{ariaLabel:"Icon labelledby tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Fallback overview label",ariaLabelledBy:"tabs-icon-overview-heading",content:"Overview panel binds icon tab naming to visible heading."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const oe={render:()=>o.jsx(dn,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},se={render:()=>o.jsx(pn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},re={render:()=>o.jsx(yn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"overview stage"});await t(n).toHaveAttribute("aria-label","overview stage"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.")}},ie={render:()=>o.jsx(vn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-labelledby","tabs-icon-overview-heading"),await t(n).not.toHaveAttribute("aria-label"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel binds icon tab naming to visible heading.")}},ce={render:()=>o.jsx(w,{children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Review"}),u=e.getByRole("tab",{name:"Release"});await l.click(s),await t(s).toHaveAttribute("aria-keyshortcuts",Ge),await t(u).toHaveAttribute("aria-keyshortcuts",Ge),await t(r).not.toHaveAttribute("aria-keyshortcuts"),v.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),v.keyDown(s,{key:"ArrowUp",metaKey:!0}),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowDown}"),await t(u).toHaveAttribute("aria-selected","true")}},le={render:()=>o.jsxs(w,{dir:"rtl",children:[o.jsx("p",{style:x,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:A})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},ue={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",Je),await t(s).toHaveAttribute("aria-keyshortcuts",Je),await l.keyboard("{ArrowRight}");const r=e.getByRole("tab",{name:"Build"});await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Shift>}{Enter}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await l.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},be={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(p,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=y(a).getByRole("tab",{name:"Build"});v.keyDown(n,{key:"Enter",ctrlKey:!0}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),v.keyDown(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),v.keyUp(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),v.keyDown(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),v.keyUp(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toContain("translateY(0")})}};function wn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Manual activation changes"}),o.jsx(K,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function gn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Global shortcut guards that preempt keydown should keep tablist selection and roving focus stable."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Tab value changes"}),o.jsx(K,{tone:"default","data-testid":"managed-key-preempt-change-count",children:n})]}),o.jsx("div",{onKeyDownCapture:r=>r.preventDefault(),children:o.jsx(p,{ariaLabel:"Managed key preempt tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})})]})}function mn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Local tab key guards should be able to preempt managed navigation/activation keys."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Tab value changes"}),o.jsx(K,{tone:"default","data-testid":"managed-key-local-preempt-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Managed key local preempt tabs",activationMode:"manual",value:a,onTabKeyDown:r=>{(r.key==="Enter"||r.key==="ArrowRight")&&r.preventDefault()},onValueChange:r=>{e(r),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const de={render:()=>o.jsx(wn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("manual-repeat-change-count");await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),v.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),v.keyDown(r,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(u).toHaveTextContent("2")}},pe={render:()=>o.jsx(gn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByTestId("managed-key-preempt-change-count");await l.click(n),await t(r).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),v.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0"),v.focus(s),v.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0")}},ye={render:()=>o.jsx(mn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByTestId("managed-key-local-preempt-change-count");await l.click(n),await t(r).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),v.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0"),v.focus(s),v.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0")}},ve={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("button",{name:"Outside focus target"});await l.click(n),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await l.click(r),await t(r).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},we={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),Qe(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Qe(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Xe(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Xe(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},ge={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),r=e.getByRole("tab",{name:"Ship"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",Ze),await t(r).toHaveAttribute("aria-keyshortcuts",Ze),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{ArrowDown}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function fn(){const[a,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Value change events"}),o.jsx(K,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:A,value:a,onValueChange:r=>{e(r),s(u=>u+1)}})]})}const me={render:()=>o.jsx(fn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByTestId("change-count");await l.click(n),await t(r).toHaveTextContent("0"),await l.click(s),await t(r).toHaveTextContent("1"),await l.click(s),await t(r).toHaveTextContent("1")}},fe={render:()=>o.jsx(p,{items:A,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=n.getAttribute("aria-controls"),u=s.getAttribute("aria-controls");await t(r).toBeTruthy(),await t(u).toBeTruthy(),await t(document.getElementById(r)).not.toBeNull(),await t(document.getElementById(u)).not.toBeNull();const g=document.getElementById(u);await t(g).toHaveAttribute("hidden"),await l.click(s),await t(g).not.toHaveAttribute("hidden")}};var ea,aa,ta;Y.parameters={...Y.parameters,docs:{...(ea=Y.parameters)==null?void 0:ea.docs,source:{originalSource:"{}",...(ta=(aa=Y.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,oa,sa;q.parameters={...q.parameters,docs:{...(na=q.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(sa=(oa=q.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ra,ia,ca;W.parameters={...W.parameters,docs:{...(ra=W.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ca=(ia=W.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,ba;_.parameters={..._.parameters,docs:{...(la=_.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ba=(ua=_.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var da,pa,ya;G.parameters={...G.parameters,docs:{...(da=G.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(pa=G.parameters)==null?void 0:pa.docs)==null?void 0:ya.source}}};var va,wa,ga;J.parameters={...J.parameters,docs:{...(va=J.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ga=(wa=J.parameters)==null?void 0:wa.docs)==null?void 0:ga.source}}};var ma,fa,Ta;Z.parameters={...Z.parameters,docs:{...(ma=Z.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(Ta=(fa=Z.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var xa,ha,ka;Q.parameters={...Q.parameters,docs:{...(xa=Q.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(ka=(ha=Q.parameters)==null?void 0:ha.docs)==null?void 0:ka.source}}};var Ra,Ba,Ha;X.parameters={...X.parameters,docs:{...(Ra=X.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
    await expect(tabList).toHaveAttribute("tabindex", "0");
    const allTabs = canvas.getAllByRole("tab");
    await expect(allTabs).toHaveLength(2);
    allTabs.forEach((tab, index) => {
      expect(tab).toBeDisabled();
      expect(tab).not.toHaveAttribute("aria-keyshortcuts");
      expect(tab).toHaveAttribute("aria-selected", index === 0 ? "true" : "false");
      expect(tab).toHaveAttribute("tabindex", "-1");
    });
    await expect(canvas.getByRole("tabpanel", {
      name: "Spec"
    })).toBeVisible();
    await expect(canvas.getByText("Specification stage is disabled.")).toBeInTheDocument();
    await userEvent.tab();
    await expect(tabList).toHaveFocus();
  }
}`,...(Ha=(Ba=X.parameters)==null?void 0:Ba.docs)==null?void 0:Ha.source}}};var Sa,Ea,Aa;ee.parameters={...ee.parameters,docs:{...(Sa=ee.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <button type="button">Before empty tabs</button>
      <Tabs ariaLabel="Empty tabs" items={[]} />
      <button type="button">After empty tabs</button>
    </TabsShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", {
      name: "Empty tabs"
    });
    await expect(tabList).not.toHaveAttribute("tabindex");
    await expect(tabList).not.toHaveAttribute("aria-disabled");
    await expect(canvas.queryByRole("tab")).not.toBeInTheDocument();
    await expect(canvas.queryByRole("tabpanel")).not.toBeInTheDocument();
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "Before empty tabs"
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After empty tabs"
    })).toHaveFocus();
  }
}`,...(Aa=(Ea=ee.parameters)==null?void 0:Ea.docs)==null?void 0:Aa.source}}};var Ca,Da,ja;ae.parameters={...ae.parameters,docs:{...(Ca=ae.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(ja=(Da=ae.parameters)==null?void 0:Da.docs)==null?void 0:ja.source}}};var La,Fa,Ia;te.parameters={...te.parameters,docs:{...(La=te.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Ia=(Fa=te.parameters)==null?void 0:Fa.docs)==null?void 0:Ia.source}}};var Pa,Ma,Va;ne.parameters={...ne.parameters,docs:{...(Pa=ne.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Va=(Ma=ne.parameters)==null?void 0:Ma.docs)==null?void 0:Va.source}}};var Ka,Na,Ua;oe.parameters={...oe.parameters,docs:{...(Ka=oe.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Ua=(Na=oe.parameters)==null?void 0:Na.docs)==null?void 0:Ua.source}}};var Oa,za,$a;se.parameters={...se.parameters,docs:{...(Oa=se.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...($a=(za=se.parameters)==null?void 0:za.docs)==null?void 0:$a.source}}};var Ya,qa,Wa;re.parameters={...re.parameters,docs:{...(Ya=re.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  render: () => <NonTextFallbackNamingTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconTab = canvas.getByRole("tab", {
      name: "overview stage"
    });
    await expect(iconTab).toHaveAttribute("aria-label", "overview stage");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.");
  }
}`,...(Wa=(qa=re.parameters)==null?void 0:qa.docs)==null?void 0:Wa.source}}};var _a,Ga,Ja;ie.parameters={...ie.parameters,docs:{...(_a=ie.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(Ja=(Ga=ie.parameters)==null?void 0:Ga.docs)==null?void 0:Ja.source}}};var Za,Qa,Xa;ce.parameters={...ce.parameters,docs:{...(Za=ce.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(Xa=(Qa=ce.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var et,at,tt;le.parameters={...le.parameters,docs:{...(et=le.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(tt=(at=le.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};var nt,ot,st;ue.parameters={...ue.parameters,docs:{...(nt=ue.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(ot=ue.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,it,ct;be.parameters={...be.parameters,docs:{...(rt=be.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ct=(it=be.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,ut,bt;de.parameters={...de.parameters,docs:{...(lt=de.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(bt=(ut=de.parameters)==null?void 0:ut.docs)==null?void 0:bt.source}}};var dt,pt,yt;pe.parameters={...pe.parameters,docs:{...(dt=pe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedDemo />,
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
    const changeCount = canvas.getByTestId("managed-key-preempt-change-count");
    await userEvent.click(specTab);
    await expect(changeCount).toHaveTextContent("0");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    fireEvent.keyDown(specTab, {
      key: "ArrowRight"
    });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
    fireEvent.focus(buildTab);
    fireEvent.keyDown(buildTab, {
      key: "Enter"
    });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
  }
}`,...(yt=(pt=pe.parameters)==null?void 0:pt.docs)==null?void 0:yt.source}}};var vt,wt,gt;ye.parameters={...ye.parameters,docs:{...(vt=ye.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedLocallyDemo />,
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
    const changeCount = canvas.getByTestId("managed-key-local-preempt-change-count");
    await userEvent.click(specTab);
    await expect(changeCount).toHaveTextContent("0");
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    fireEvent.keyDown(specTab, {
      key: "ArrowRight"
    });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
    fireEvent.focus(buildTab);
    fireEvent.keyDown(buildTab, {
      key: "Enter"
    });
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Specification stage.");
    await expect(changeCount).toHaveTextContent("0");
  }
}`,...(gt=(wt=ye.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var mt,ft,Tt;ve.parameters={...ve.parameters,docs:{...(mt=ve.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(Tt=(ft=ve.parameters)==null?void 0:ft.docs)==null?void 0:Tt.source}}};var xt,ht,kt;we.parameters={...we.parameters,docs:{...(xt=we.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(kt=(ht=we.parameters)==null?void 0:ht.docs)==null?void 0:kt.source}}};var Rt,Bt,Ht;ge.parameters={...ge.parameters,docs:{...(Rt=ge.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ht=(Bt=ge.parameters)==null?void 0:Bt.docs)==null?void 0:Ht.source}}};var St,Et,At;me.parameters={...me.parameters,docs:{...(St=me.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(At=(Et=me.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var Ct,Dt,jt;fe.parameters={...fe.parameters,docs:{...(Ct=fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(jt=(Dt=fe.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};const En=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","EmptyTabsSkipTabStop","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","NonTextFallbackNaming","IconOnlyLabelledByPrecedence","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{X as AllTabsDisabled,me as ChangeTelemetry,q as Controlled,fe as ControlsReferenceMountedPanels,Y as Default,G as DisabledTabVisualReset,ee as EmptyTabsSkipTabStop,se as IconOnlyLabelNaming,ie as IconOnlyLabelledByPrecedence,we as ImeCompositionGuard,W as KeyboardFocusRingAfterPointer,_ as KeyboardFocusRingShiftTabReentry,te as KeyboardNavigationGuide,oe as LabelledByHeading,pe as ManagedKeysPreemptedByGlobalHandler,ye as ManagedKeysPreemptedByLocalHandler,ue as ManualActivation,be as ManualActivationPressedFeedback,de as ManualActivationRepeatGuard,ve as ManualFocusResetOnBlur,ge as ManualVerticalActivation,ne as NoLoopNavigation,re as NonTextFallbackNaming,Z as PrimaryPointerOnlyPressedState,J as RemovedActiveTabFallback,le as RtlKeyboardNavigation,ae as SingleActionableTab,ce as Vertical,Q as WithDisabledTab,En as __namedExportsOrder,Sn as default};
