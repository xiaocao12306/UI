import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as zt}from"./Button-B21ouHNm.js";import{B as K}from"./Badge-ZJmMstsz.js";import{within as y,expect as t,userEvent as l,fireEvent as v,waitFor as H}from"./index-DgAF9SIF.js";import{s as x,S as ze}from"./storyShowcase-DlKirntE.js";const $t={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function $e(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function Be(a,e,n,s){var w,k;if(a.length===0)return-1;const r=(w=a[e])!=null&&w.disabled?-1:e;let u=e;for(let B=0;B<a.length;B+=1){if(u+=n,s)u<0?u=a.length-1:u>=a.length&&(u=0);else if(u<0||u>=a.length)return r;if(!((k=a[u])!=null&&k.disabled))return u}return r}function Yt(a){return a.findIndex(e=>!e.disabled)}function qt(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function Wt(a,e,n){var s,r,u,w;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let k=0;k<a.length;k+=1){const B=e+k;if(B>=0&&B<a.length&&!((s=a[B])!=null&&s.disabled))return((r=a[B])==null?void 0:r.key)??n;if(k===0)continue;const C=e-k;if(C>=0&&C<a.length&&!((u=a[C])!=null&&u.disabled))return((w=a[C])==null?void 0:w.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:r,orientation:u="horizontal",activationMode:w="automatic",loop:k=!0,onTabKeyDown:B,onValueChange:C}){var Fe,Ie;const j=b.useId(),fe=b.useRef(null),Te=b.useRef([]),U=b.useRef(null),D=b.useRef(null),L=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const F=b.useRef(!0),[At,Ct]=b.useState(()=>$e(a)),Dt=(Fe=a[0])==null?void 0:Fe.key,I=(Ie=a.find(i=>!i.disabled))==null?void 0:Ie.key,[xe,Ee]=b.useState(n??I),[jt,he]=b.useState(null),[Lt,S]=b.useState(null),[Ft,P]=b.useState(null),It=$(s,"Tabs"),Ae=$(r),Ce=a.length>0&&!I,De=b.useMemo(()=>en(j,a),[j,a]),je=b.useMemo(()=>an(a),[a]),Pt=b.useMemo(()=>a.reduce((i,d)=>d.disabled?i:i+1,0),[a]);b.useEffect(()=>{},[a]),b.useEffect(()=>{},[a]),b.useEffect(()=>{Ct($e(a))},[a]),b.useEffect(()=>{},[I,a,e]),b.useEffect(()=>{var E;const i=((E=fe.current)==null?void 0:E.ownerDocument)??document,d=f=>{f.metaKey||f.altKey||f.ctrlKey||(F.current=!0)},m=f=>{"button"in f&&!He(f.button)||"ctrlKey"in f&&f.ctrlKey||(F.current=!1)};return i.addEventListener("keydown",d,!0),i.addEventListener("pointerdown",m,!0),i.addEventListener("mousedown",m,!0),i.addEventListener("touchstart",m,!0),()=>{i.removeEventListener("keydown",d,!0),i.removeEventListener("pointerdown",m,!0),i.removeEventListener("mousedown",m,!0),i.removeEventListener("touchstart",m,!0)}},[]);const O=e??xe,M=a.find(i=>i.key===O),R=M&&!M.disabled?O:I?e===void 0&&O&&!M?Wt(a,At[O],I):I:(M==null?void 0:M.key)??Dt,[Le,V]=b.useState(R),Mt=a.some(i=>i.key===Le&&!i.disabled)?Le:R;b.useEffect(()=>{e===void 0&&R!==xe&&Ee(R)},[R,xe,e]),b.useEffect(()=>{V(R)},[R]),b.useEffect(()=>()=>{D.current!==null&&(L.current??window).clearTimeout(D.current)},[]),b.useEffect(()=>{const i=new Set(a.filter(d=>!d.disabled).map(d=>d.key));he(d=>d&&!i.has(d)?null:d),S(d=>d&&!i.has(d)?null:d),P(d=>d&&!i.has(d)?null:d)},[a]);const Vt=b.useCallback(()=>{U.current=null,D.current!==null&&((L.current??window).clearTimeout(D.current),D.current=null),L.current=null},[]),ke=b.useCallback(i=>{const d=a.find(m=>m.key===i);!d||d.disabled||i===R||(e===void 0&&Ee(i),C==null||C(i))},[R,a,C,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:fe,role:"tablist","aria-label":Ae?void 0:It,"aria-labelledby":Ae,"aria-orientation":u,"aria-disabled":Ce?!0:void 0,tabIndex:Ce?0:void 0,onBlurCapture:i=>{const d=i.relatedTarget;d&&i.currentTarget.contains(d)||V(R)},style:{display:"flex",gap:6,flexWrap:u==="horizontal"?"wrap":"nowrap",flexDirection:u==="vertical"?"column":"row"},children:a.map((i,d)=>{const m=De[d],E=i.key===R,f=!!i.disabled,Pe=!f&&jt===i.key,Me=!f&&Lt===i.key,Ve=!f&&Ft===i.key,Kt=Pe||Ve,Re=$(i.ariaLabelledBy),Ke=Re?void 0:$(i.ariaLabel),Nt=Se(i.label),Ut=Re||Ke||Nt?void 0:Xt(i.key,d);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:c=>{Te.current[d]=c},id:(m==null?void 0:m.tabId)??`${j}-tab-${d}`,type:"button",role:"tab","aria-labelledby":Re,"aria-label":Ke??Ut,"aria-selected":E,"aria-controls":(m==null?void 0:m.panelId)??`${j}-panel-${d}`,"aria-disabled":f||void 0,"aria-keyshortcuts":f||Pt<=1?void 0:_t(w,u),tabIndex:f?-1:Mt===i.key?0:-1,disabled:f,onClick:c=>{V(i.key);const T=w==="manual"&&c.detail===0&&U.current===i.key;Vt(),!T&&ke(i.key)},onMouseEnter:()=>{f||he(i.key)},onMouseLeave:()=>{he(c=>c===i.key?null:c),S(c=>c===i.key?null:c)},onPointerDown:c=>{f||c.ctrlKey||He(c.button)&&(F.current=!1,P(T=>T===i.key?null:T),S(i.key))},onPointerUp:c=>{He(c.button)&&S(T=>T===i.key?null:T)},onMouseDown:c=>{f||c.button!==0||c.ctrlKey||(F.current=!1,P(T=>T===i.key?null:T),S(i.key))},onMouseUp:c=>{c.button===0&&S(T=>T===i.key?null:T)},onPointerCancel:()=>{S(c=>c===i.key?null:c)},onFocus:()=>{if(V(i.key),f){P(c=>c===i.key?null:c);return}P(c=>Qt(Te.current[d],F.current)?i.key:c===i.key?null:c)},onBlur:()=>{P(c=>c===i.key?null:c),S(c=>c===i.key?null:c)},onKeyDown:c=>{if(F.current=!0,B==null||B(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(w==="manual"&&Ye(c.key)){if(Gt(c)||(c.preventDefault(),c.repeat))return;S(i.key),U.current=i.key;const h=c.currentTarget.ownerDocument.defaultView??window;D.current!==null&&(L.current??h).clearTimeout(D.current),L.current=h,D.current=h.setTimeout(()=>{U.current=null,D.current=null,L.current=null},0),ke(i.key);return}const T=h=>{var Ue,Oe;const z=(Ue=a[h])==null?void 0:Ue.key;z&&(V(z),w==="automatic"&&ke(z),(Oe=Te.current[h])==null||Oe.focus())};if(c.key==="Home"){c.preventDefault();const h=Yt(a);T(h);return}if(c.key==="End"){c.preventDefault();const h=qt(a);T(h);return}if(c.key==="PageDown"){c.preventDefault();const h=Be(a,d,1,k);T(h);return}if(c.key==="PageUp"){c.preventDefault();const h=Be(a,d,-1,k);T(h);return}const Ne=Jt({orientation:u,key:c.key,isRtl:u==="horizontal"&&Zt(fe.current)});if(!Ne)return;c.preventDefault();const Ot=Be(a,d,Ne,k);T(Ot)},onKeyUp:c=>{Ye(c.key)&&S(T=>T===i.key?null:T)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:E?"1px solid var(--aurora-accent-default)":Kt?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:E?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":Me?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":Pe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:f?"not-allowed":"pointer",boxShadow:Ve?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Me?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:i.label},je[d]??`${i.key}__dup-${d}`)})}),a.map((i,d)=>{const m=De[d],E=i.key===R;return o.jsx("div",{id:(m==null?void 0:m.panelId)??`${j}-panel-${d}`,role:"tabpanel","aria-labelledby":(m==null?void 0:m.tabId)??`${j}-tab-${d}`,tabIndex:E?0:-1,hidden:!E,style:{display:E?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:i.content},`${je[d]??`${i.key}__dup-${d}`}__panel`)})]})}function Ye(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function He(a){return typeof a!="number"||a<=0}function _t(a,e){return $t[a][e]}function Gt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Jt({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Zt(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function Qt(a,e){if(!a)return e;try{return a.matches(":focus-visible")||e}catch{return e}}function Se(a){if(typeof a=="string")return a.trim().length>0;if(typeof a=="number")return!0;if(Array.isArray(a))return a.some(n=>Se(n));if(!b.isValidElement(a))return!1;const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?!1:typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?!0:Se(e.children)}function $(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function Xt(a,e){const n=nn(a.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:`Tab ${e+1}`}function en(a,e){const n=new Map;return e.map(s=>{const r=tn(s.key),u=(n.get(r)??0)+1;n.set(r,u);const w=u>1?`${r}-${u}`:r;return{tabId:`${a}-tab-${w}`,panelId:`${a}-panel-${w}`}})}function an(a){const e=new Map;return a.map((n,s)=>{const r=e.get(n.key)??0;return e.set(n.key,r+1),r===0?n.key:`${n.key}__dup-${s}`})}function tn(a){const e=encodeURIComponent(a).replace(/%/g,"_");return e.length>0?e:"item"}function nn(a){return a.replace(/\s+/g," ").trim()}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onTabKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const A=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],N={color:"var(--aurora-text-secondary)",fontSize:13},qe="min(100%, 620px)",We="Home End PageDown PageUp ArrowLeft ArrowRight",_e="Home End PageDown PageUp ArrowUp ArrowDown",Ge="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Je="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function g({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(ze,{maxWidth:qe,gap:e,children:a})}):o.jsx(ze,{maxWidth:qe,gap:e,children:a})}function Ze(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}function Qe(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const kn={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:A,defaultValue:"spec"}},Y={};function on(){const[a,e]=b.useState("build");return o.jsxs(g,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Current stage"}),o.jsx(K,{tone:"default",children:a})]}),o.jsx(p,{items:A,value:a,onValueChange:e})]})}function sn(){const[a,e]=b.useState(!1);return o.jsxs(g,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function rn(){const[a,e]=b.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(g,{children:[o.jsx(zt,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const q={render:()=>o.jsx(on,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await l.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},W={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:A})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});v.mouseDown(n),n.focus(),await l.click(s),await l.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},_={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),o.jsx(p,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:A}),o.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"After tabs"}),r=e.getByRole("tabpanel");v.mouseDown(n),n.focus(),await l.click(s),await l.tab({shift:!0}),await t(r).toHaveFocus(),await l.tab({shift:!0}),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},G={render:()=>o.jsx(sn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});v.mouseDown(s),await l.click(n);const r=e.getByRole("tab",{name:"Build"});await t(r).toBeDisabled(),await t(r.style.transform).toContain("translateY(0"),await t(r.style.boxShadow).toBe("none")}},J={render:()=>o.jsx(rn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await l.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},Z={render:function(){const[e,n]=b.useState("spec"),[s,r]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsxs("p",{style:x,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:A,onValueChange:u=>{n(u),r(w=>w+1)}})]})},play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Build"}),u=e.getByTestId("primary-pointer-active"),w=e.getByTestId("primary-pointer-count");await l.click(n),await l.tab(),await t(s).toHaveFocus(),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r.style.boxShadow).toContain("0 0 0 3px"),v.mouseDown(r,{button:2}),v.mouseUp(r,{button:2}),await t(r.style.boxShadow).toContain("0 0 0 3px"),await t(u).toHaveTextContent("spec"),await t(w).toHaveTextContent("0"),v.mouseDown(r,{button:0}),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),v.pointerCancel(r),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(w).toHaveTextContent("0"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(u).toHaveTextContent("spec"),await t(w).toHaveTextContent("0"),await l.click(r),await t(u).toHaveTextContent("build"),await t(w).toHaveTextContent("1")}},Q={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},X={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true"),await t(n).toHaveAttribute("tabindex","0");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach((r,u)=>{t(r).toBeDisabled(),t(r).not.toHaveAttribute("aria-keyshortcuts"),t(r).toHaveAttribute("aria-selected",u===0?"true":"false"),t(r).toHaveAttribute("tabindex","-1")}),await t(e.getByRole("tabpanel",{name:"Spec"})).toBeVisible(),await t(e.getByText("Specification stage is disabled.")).toBeInTheDocument(),await l.tab(),await t(n).toHaveFocus()}},ee={render:()=>o.jsx(p,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Security Review"}),r=e.getByRole("tab",{name:"Release"});await t(n).not.toHaveAttribute("aria-keyshortcuts"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await l.keyboard("{ArrowRight}"),await l.keyboard("{Enter}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await t(e.getByText("Specification stage is active.")).toBeInTheDocument()}},ae={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByRole("tab",{name:"Blocked"});await l.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-keyshortcuts",We),await t(s).toHaveAttribute("aria-keyshortcuts",We),await t(r).toHaveAttribute("aria-disabled","true"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await l.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await l.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),v.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),v.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},te={render:()=>o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:A})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(s),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.click(n),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function cn(){const a=b.useId();return o.jsxs(g,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:A,defaultValue:"spec"})]})}function ln(){return o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function un(){return o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Non-text tabs without explicit naming still get fallback accessible names derived from",o.jsx("code",{children:" items[].key "})," and normalized for readability to avoid unnamed tab controls in production."]}),o.jsx(p,{ariaLabel:"Fallback naming tabs",defaultValue:"overview-stage",items:[{key:"overview-stage",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),content:"Overview panel keeps fallback naming deterministic."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function bn(){return o.jsxs(g,{gap:10,children:[o.jsxs("p",{style:x,children:["Icon tabs can bind to external visible headings with ",o.jsx("code",{children:"items[].ariaLabelledBy"}),"; when both naming props are present, ",o.jsx("code",{children:"ariaLabelledBy"})," takes precedence."]}),o.jsx("h3",{id:"tabs-icon-overview-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Navigation overview"}),o.jsx(p,{ariaLabel:"Icon labelledby tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Fallback overview label",ariaLabelledBy:"tabs-icon-overview-heading",content:"Overview panel binds icon tab naming to visible heading."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const ne={render:()=>o.jsx(cn,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},oe={render:()=>o.jsx(ln,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},se={render:()=>o.jsx(un,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"overview stage"});await t(n).toHaveAttribute("aria-label","overview stage"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.")}},re={render:()=>o.jsx(bn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-labelledby","tabs-icon-overview-heading"),await t(n).not.toHaveAttribute("aria-label"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel binds icon tab naming to visible heading.")}},ie={render:()=>o.jsx(g,{children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Review"}),u=e.getByRole("tab",{name:"Release"});await l.click(s),await t(s).toHaveAttribute("aria-keyshortcuts",_e),await t(u).toHaveAttribute("aria-keyshortcuts",_e),await t(r).not.toHaveAttribute("aria-keyshortcuts"),v.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),v.keyDown(s,{key:"ArrowUp",metaKey:!0}),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowDown}"),await t(u).toHaveAttribute("aria-selected","true")}},ce={render:()=>o.jsxs(g,{dir:"rtl",children:[o.jsx("p",{style:x,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:A})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await l.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},le={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",Ge),await t(s).toHaveAttribute("aria-keyshortcuts",Ge),await l.keyboard("{ArrowRight}");const r=e.getByRole("tab",{name:"Build"});await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{Shift>}{Enter}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await l.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await l.keyboard("{Shift>}{Space}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},ue={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(p,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=y(a).getByRole("tab",{name:"Build"});v.keyDown(n,{key:"Enter",ctrlKey:!0}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),v.keyDown(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),v.keyUp(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),v.keyDown(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),v.keyUp(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toContain("translateY(0")})}};function dn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Manual activation changes"}),o.jsx(K,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function pn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Global shortcut guards that preempt keydown should keep tablist selection and roving focus stable."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Tab value changes"}),o.jsx(K,{tone:"default","data-testid":"managed-key-preempt-change-count",children:n})]}),o.jsx("div",{onKeyDownCapture:r=>r.preventDefault(),children:o.jsx(p,{ariaLabel:"Managed key preempt tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})})]})}function yn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Local tab key guards should be able to preempt managed navigation/activation keys."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Tab value changes"}),o.jsx(K,{tone:"default","data-testid":"managed-key-local-preempt-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Managed key local preempt tabs",activationMode:"manual",value:a,onTabKeyDown:r=>{(r.key==="Enter"||r.key==="ArrowRight")&&r.preventDefault()},onValueChange:r=>{e(r),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const be={render:()=>o.jsx(dn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("manual-repeat-change-count");await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),v.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),v.keyDown(r,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await l.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(u).toHaveTextContent("2")}},de={render:()=>o.jsx(pn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByTestId("managed-key-preempt-change-count");await l.click(n),await t(r).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),v.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0"),v.focus(s),v.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0")}},pe={render:()=>o.jsx(yn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByTestId("managed-key-local-preempt-change-count");await l.click(n),await t(r).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),v.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0"),v.focus(s),v.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0")}},ye={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("button",{name:"Outside focus target"});await l.click(n),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await l.click(r),await t(r).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},ve={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await l.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),Ze(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Ze(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Qe(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Qe(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},we={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),r=e.getByRole("tab",{name:"Ship"});await l.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",Je),await t(r).toHaveAttribute("aria-keyshortcuts",Je),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{ArrowDown}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await l.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function vn(){const[a,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:N,children:"Value change events"}),o.jsx(K,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:A,value:a,onValueChange:r=>{e(r),s(u=>u+1)}})]})}const ge={render:()=>o.jsx(vn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByTestId("change-count");await l.click(n),await t(r).toHaveTextContent("0"),await l.click(s),await t(r).toHaveTextContent("1"),await l.click(s),await t(r).toHaveTextContent("1")}},me={render:()=>o.jsx(p,{items:A,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=n.getAttribute("aria-controls"),u=s.getAttribute("aria-controls");await t(r).toBeTruthy(),await t(u).toBeTruthy(),await t(document.getElementById(r)).not.toBeNull(),await t(document.getElementById(u)).not.toBeNull();const w=document.getElementById(u);await t(w).toHaveAttribute("hidden"),await l.click(s),await t(w).not.toHaveAttribute("hidden")}};var Xe,ea,aa;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:"{}",...(aa=(ea=Y.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,oa;q.parameters={...q.parameters,docs:{...(ta=q.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(na=q.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var sa,ra,ia;W.parameters={...W.parameters,docs:{...(sa=W.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ia=(ra=W.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var ca,la,ua;_.parameters={..._.parameters,docs:{...(ca=_.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(ua=(la=_.parameters)==null?void 0:la.docs)==null?void 0:ua.source}}};var ba,da,pa;G.parameters={...G.parameters,docs:{...(ba=G.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(pa=(da=G.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ya,va,wa;J.parameters={...J.parameters,docs:{...(ya=J.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(wa=(va=J.parameters)==null?void 0:va.docs)==null?void 0:wa.source}}};var ga,ma,fa;Z.parameters={...Z.parameters,docs:{...(ga=Z.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(fa=(ma=Z.parameters)==null?void 0:ma.docs)==null?void 0:fa.source}}};var Ta,xa,ha;Q.parameters={...Q.parameters,docs:{...(Ta=Q.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(ha=(xa=Q.parameters)==null?void 0:xa.docs)==null?void 0:ha.source}}};var ka,Ra,Ba;X.parameters={...X.parameters,docs:{...(ka=X.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(Ba=(Ra=X.parameters)==null?void 0:Ra.docs)==null?void 0:Ba.source}}};var Ha,Sa,Ea;ee.parameters={...ee.parameters,docs:{...(Ha=ee.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Ea=(Sa=ee.parameters)==null?void 0:Sa.docs)==null?void 0:Ea.source}}};var Aa,Ca,Da;ae.parameters={...ae.parameters,docs:{...(Aa=ae.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Da=(Ca=ae.parameters)==null?void 0:Ca.docs)==null?void 0:Da.source}}};var ja,La,Fa;te.parameters={...te.parameters,docs:{...(ja=te.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Fa=(La=te.parameters)==null?void 0:La.docs)==null?void 0:Fa.source}}};var Ia,Pa,Ma;ne.parameters={...ne.parameters,docs:{...(Ia=ne.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Ma=(Pa=ne.parameters)==null?void 0:Pa.docs)==null?void 0:Ma.source}}};var Va,Ka,Na;oe.parameters={...oe.parameters,docs:{...(Va=oe.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Na=(Ka=oe.parameters)==null?void 0:Ka.docs)==null?void 0:Na.source}}};var Ua,Oa,za;se.parameters={...se.parameters,docs:{...(Ua=se.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(za=(Oa=se.parameters)==null?void 0:Oa.docs)==null?void 0:za.source}}};var $a,Ya,qa;re.parameters={...re.parameters,docs:{...($a=re.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(qa=(Ya=re.parameters)==null?void 0:Ya.docs)==null?void 0:qa.source}}};var Wa,_a,Ga;ie.parameters={...ie.parameters,docs:{...(Wa=ie.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Ga=(_a=ie.parameters)==null?void 0:_a.docs)==null?void 0:Ga.source}}};var Ja,Za,Qa;ce.parameters={...ce.parameters,docs:{...(Ja=ce.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
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
}`,...(Qa=(Za=ce.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var Xa,et,at;le.parameters={...le.parameters,docs:{...(Xa=le.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
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
}`,...(at=(et=le.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var tt,nt,ot;ue.parameters={...ue.parameters,docs:{...(tt=ue.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(ot=(nt=ue.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,it;be.parameters={...be.parameters,docs:{...(st=be.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(it=(rt=be.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ct,lt,ut;de.parameters={...de.parameters,docs:{...(ct=de.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(lt=de.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var bt,dt,pt;pe.parameters={...pe.parameters,docs:{...(bt=pe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=pe.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var yt,vt,wt;ye.parameters={...ye.parameters,docs:{...(yt=ye.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(wt=(vt=ye.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var gt,mt,ft;ve.parameters={...ve.parameters,docs:{...(gt=ve.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ft=(mt=ve.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var Tt,xt,ht;we.parameters={...we.parameters,docs:{...(Tt=we.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(ht=(xt=we.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var kt,Rt,Bt;ge.parameters={...ge.parameters,docs:{...(kt=ge.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Bt=(Rt=ge.parameters)==null?void 0:Rt.docs)==null?void 0:Bt.source}}};var Ht,St,Et;me.parameters={...me.parameters,docs:{...(Ht=me.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Et=(St=me.parameters)==null?void 0:St.docs)==null?void 0:Et.source}}};const Rn=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","NonTextFallbackNaming","IconOnlyLabelledByPrecedence","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{X as AllTabsDisabled,ge as ChangeTelemetry,q as Controlled,me as ControlsReferenceMountedPanels,Y as Default,G as DisabledTabVisualReset,oe as IconOnlyLabelNaming,re as IconOnlyLabelledByPrecedence,ve as ImeCompositionGuard,W as KeyboardFocusRingAfterPointer,_ as KeyboardFocusRingShiftTabReentry,ae as KeyboardNavigationGuide,ne as LabelledByHeading,de as ManagedKeysPreemptedByGlobalHandler,pe as ManagedKeysPreemptedByLocalHandler,le as ManualActivation,ue as ManualActivationPressedFeedback,be as ManualActivationRepeatGuard,ye as ManualFocusResetOnBlur,we as ManualVerticalActivation,te as NoLoopNavigation,se as NonTextFallbackNaming,Z as PrimaryPointerOnlyPressedState,J as RemovedActiveTabFallback,ce as RtlKeyboardNavigation,ee as SingleActionableTab,ie as Vertical,Q as WithDisabledTab,Rn as __namedExportsOrder,kn as default};
