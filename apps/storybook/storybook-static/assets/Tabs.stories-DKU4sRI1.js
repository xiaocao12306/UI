import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Xt}from"./Button-CYa37MZO.js";import{B as z}from"./Badge-ZJmMstsz.js";import{within as y,expect as t,userEvent as r,fireEvent as m,waitFor as H}from"./index-DgAF9SIF.js";import{s as x,S as aa}from"./storyShowcase-DlKirntE.js";const yn={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function ta(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function Ke(a,e,n,s){if(a.length===0)return-1;const i=k(a[e])?-1:e;let l=e;for(let f=0;f<a.length;f+=1){if(l+=n,s)l<0?l=a.length-1:l>=a.length&&(l=0);else if(l<0||l>=a.length)return i;if(!k(a[l]))return l}return i}function na(a){return a.findIndex(e=>!k(e))}function wn(a){for(let e=a.length-1;e>=0;e-=1)if(!k(a[e]))return e;return-1}function mn(a,e,n){var s,i;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let l=0;l<a.length;l+=1){const f=e+l;if(f>=0&&f<a.length&&!k(a[f]))return((s=a[f])==null?void 0:s.key)??n;if(l===0)continue;const j=e-l;if(j>=0&&j<a.length&&!k(a[j]))return((i=a[j])==null?void 0:i.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:i,orientation:l,activationMode:f,loop:j,onTabKeyDown:Ce,onValueChange:$}){var qe,We;const L=b.useId(),De=b.useRef(null),je=b.useRef([]),Y=b.useRef(null),C=b.useRef(null),I=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const F=b.useRef(!0),[en,an]=b.useState(()=>ta(a)),tn=(qe=a[0])==null?void 0:qe.key,M=(We=a.find(u=>!k(u)))==null?void 0:We.key,D=b.useMemo(()=>na(a),[a]),[Le,Oe]=b.useState(n??M),[nn,Ie]=b.useState(null),[on,A]=b.useState(null),[sn,P]=b.useState(null),V=gn(l),q=fn(f),Fe=Tn(j),rn=J(s,"Tabs"),Ue=J(i),$e=a.length>0&&!M,Ye=b.useMemo(()=>An(L,a),[L,a]),W=b.useMemo(()=>En(a),[a]),cn=b.useMemo(()=>a.reduce((u,d)=>k(d)?u:u+1,0),[a]);b.useEffect(()=>{},[a]),b.useEffect(()=>{},[a]),b.useEffect(()=>{an(ta(a))},[a]),b.useEffect(()=>{},[M,a,e]),b.useEffect(()=>{var v;const u=((v=De.current)==null?void 0:v.ownerDocument)??document,d=S=>{S.metaKey||S.altKey||S.ctrlKey||(F.current=!0)},g=S=>{"button"in S&&!Ne(S.button)||"ctrlKey"in S&&S.ctrlKey||(F.current=!1)};return u.addEventListener("keydown",d,!0),u.addEventListener("pointerdown",g,!0),u.addEventListener("mousedown",g,!0),u.addEventListener("touchstart",g,!0),()=>{u.removeEventListener("keydown",d,!0),u.removeEventListener("pointerdown",g,!0),u.removeEventListener("mousedown",g,!0),u.removeEventListener("touchstart",g,!0)}},[]);const _=e??Le,K=a.find(u=>u.key===_),B=K&&!k(K)?_:M?e===void 0&&_&&!K?mn(a,en[_],M):M:(K==null?void 0:K.key)??tn,N=b.useMemo(()=>{if(!B)return D>=0?D:a.length>0?0:-1;const u=a.findIndex(d=>d.key===B);return u>=0?u:D>=0?D:a.length>0?0:-1},[B,D,a]),[Me,U]=b.useState(B),ln=b.useMemo(()=>{const u=Me===void 0?-1:a.findIndex(d=>d.key===Me&&!k(d));return u>=0?u:N>=0&&!k(a[N])?N:D},[N,D,Me,a]);b.useEffect(()=>{e===void 0&&B!==Le&&Oe(B)},[B,Le,e]),b.useEffect(()=>{U(B)},[B]),b.useEffect(()=>()=>{C.current!==null&&(I.current??window).clearTimeout(C.current)},[]),b.useEffect(()=>{const u=new Set(W.filter((d,g)=>!k(a[g])));Ie(d=>d&&!u.has(d)?null:d),A(d=>d&&!u.has(d)?null:d),P(d=>d&&!u.has(d)?null:d)},[W,a]);const un=b.useCallback(()=>{Y.current=null,C.current!==null&&((I.current??window).clearTimeout(C.current),C.current=null),I.current=null},[]),Pe=b.useCallback(u=>{const d=a.find(g=>g.key===u);!d||k(d)||u===B||(e===void 0&&Oe(u),$==null||$(u))},[B,a,$,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:De,role:"tablist","aria-label":Ue?void 0:rn,"aria-labelledby":Ue,"aria-orientation":V,"aria-disabled":$e?!0:void 0,tabIndex:$e?0:void 0,onBlurCapture:u=>{const d=u.relatedTarget;d&&u.currentTarget.contains(d)||U(B)},style:{display:"flex",gap:6,flexWrap:V==="horizontal"?"wrap":"nowrap",flexDirection:V==="vertical"?"column":"row"},children:a.map((u,d)=>{const g=Ye[d],v=W[d]??`${u.key}__dup-${d}`,S=d===N,R=k(u),_e=!R&&nn===v,Ge=!R&&on===v,Je=!R&&sn===v,bn=_e||Je,Ve=J(u.ariaLabelledBy),Ze=Ve?void 0:J(u.ariaLabel),dn=ze(u.label),pn=Ve||Ze||dn?void 0:Hn(u.key,d);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:c=>{je.current[d]=c},id:(g==null?void 0:g.tabId)??`${L}-tab-${d}`,type:"button",role:"tab","aria-labelledby":Ve,"aria-label":Ze??pn,"aria-selected":S,"aria-controls":(g==null?void 0:g.panelId)??`${L}-panel-${d}`,"aria-disabled":R||void 0,"aria-keyshortcuts":R||cn<=1?void 0:hn(q,V),tabIndex:R?-1:ln===d?0:-1,disabled:R,onClick:c=>{U(u.key);const T=q==="manual"&&c.detail===0&&Y.current===v;un(),!T&&Pe(u.key)},onMouseEnter:()=>{R||Ie(v)},onMouseLeave:()=>{Ie(c=>c===v?null:c),A(c=>c===v?null:c)},onPointerDown:c=>{R||c.ctrlKey||Ne(c.button)&&(F.current=!1,P(T=>T===v?null:T),A(v))},onPointerUp:c=>{Ne(c.button)&&A(T=>T===v?null:T)},onMouseDown:c=>{R||c.button!==0||c.ctrlKey||(F.current=!1,P(T=>T===v?null:T),A(v))},onMouseUp:c=>{c.button===0&&A(T=>T===v?null:T)},onPointerCancel:()=>{A(c=>c===v?null:c)},onFocus:()=>{if(U(u.key),R){P(c=>c===v?null:c);return}P(c=>Sn(je.current[d],F.current)?v:c===v?null:c)},onBlur:()=>{P(c=>c===v?null:c),A(c=>c===v?null:c)},onKeyDown:c=>{if(F.current=!0,Ce==null||Ce(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(q==="manual"&&oa(c.key)){if(kn(c)||(c.preventDefault(),c.repeat))return;A(v),Y.current=v;const h=c.currentTarget.ownerDocument.defaultView??window;C.current!==null&&(I.current??h).clearTimeout(C.current),I.current=h,C.current=h.setTimeout(()=>{Y.current=null,C.current=null,I.current=null},0),Pe(u.key);return}const T=h=>{var Xe,ea;const G=(Xe=a[h])==null?void 0:Xe.key;G&&(U(G),q==="automatic"&&Pe(G),(ea=je.current[h])==null||ea.focus())};if(c.key==="Home"){c.preventDefault();const h=na(a);T(h);return}if(c.key==="End"){c.preventDefault();const h=wn(a);T(h);return}if(c.key==="PageDown"){c.preventDefault();const h=Ke(a,d,1,Fe);T(h);return}if(c.key==="PageUp"){c.preventDefault();const h=Ke(a,d,-1,Fe);T(h);return}const Qe=Rn({orientation:V,key:c.key,isRtl:V==="horizontal"&&Bn(De.current)});if(!Qe)return;c.preventDefault();const vn=Ke(a,d,Qe,Fe);T(vn)},onKeyUp:c=>{oa(c.key)&&A(T=>T===v?null:T)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:S?"1px solid var(--aurora-accent-default)":bn?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:S?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":Ge?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":_e?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:R?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:R?"not-allowed":"pointer",boxShadow:Je?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Ge?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:u.label},v)})}),a.map((u,d)=>{const g=Ye[d],v=d===N;return o.jsx("div",{id:(g==null?void 0:g.panelId)??`${L}-panel-${d}`,role:"tabpanel","aria-labelledby":(g==null?void 0:g.tabId)??`${L}-tab-${d}`,tabIndex:v?0:-1,hidden:!v,style:{display:v?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:u.content},`${W[d]??`${u.key}__dup-${d}`}__panel`)})]})}function oa(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Ne(a){return typeof a!="number"||a<=0}function gn(a){return typeof a!="string"?"horizontal":a.trim().toLowerCase()==="vertical"?"vertical":"horizontal"}function fn(a){return typeof a!="string"?"automatic":a.trim().toLowerCase()==="manual"?"manual":"automatic"}function Tn(a){return typeof a!="boolean"?!0:a}function xn(a,e){return typeof a!="boolean"?e:a}function k(a){return xn(a==null?void 0:a.disabled,!1)}function hn(a,e){return yn[a][e]}function kn(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Rn({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function Bn(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function Sn(a,e){if(!a)return e;try{return a.matches(":focus-visible")||e}catch{return e}}function ze(a){if(typeof a=="string")return a.trim().length>0;if(typeof a=="number")return!0;if(Array.isArray(a))return a.some(n=>ze(n));if(!b.isValidElement(a))return!1;const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?!1:typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?!0:ze(e.children)}function J(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function Hn(a,e){const n=Dn(a.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:`Tab ${e+1}`}function An(a,e){const n=new Map;return e.map(s=>{const i=Cn(s.key),l=(n.get(i)??0)+1;n.set(i,l);const f=l>1?`${i}-${l}`:i;return{tabId:`${a}-tab-${f}`,panelId:`${a}-panel-${f}`}})}function En(a){const e=new Map;return a.map(n=>{const s=e.get(n.key)??0;return e.set(n.key,s+1),s===0?n.key:`${n.key}__dup-${s}`})}function Cn(a){const e=encodeURIComponent(a).replace(/%/g,"_");return e.length>0?e:"item"}function Dn(a){return a.replace(/\s+/g," ").trim()}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:""},loop:{required:!1,tsType:{name:"boolean"},description:""},onTabKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const E=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],O={color:"var(--aurora-text-secondary)",fontSize:13},sa="min(100%, 620px)",ia="Home End PageDown PageUp ArrowLeft ArrowRight",ra="Home End PageDown PageUp ArrowUp ArrowDown",ca="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Ee="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function w({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(aa,{maxWidth:sa,gap:e,children:a})}):o.jsx(aa,{maxWidth:sa,gap:e,children:a})}function la(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}function ua(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const Qn={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:E,defaultValue:"spec"}},Z={};function jn(){const[a,e]=b.useState("build");return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Current stage"}),o.jsx(z,{tone:"default",children:a})]}),o.jsx(p,{items:E,value:a,onValueChange:e})]})}function Ln(){const[a,e]=b.useState(!1);return o.jsxs(w,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function In(){const[a,e]=b.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(w,{children:[o.jsx(Xt,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const Q={render:()=>o.jsx(jn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await r.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},X={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:E})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});m.mouseDown(n),n.focus(),await r.click(s),await r.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},ee={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),o.jsx(p,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:E}),o.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"After tabs"}),i=e.getByRole("tabpanel");m.mouseDown(n),n.focus(),await r.click(s),await r.tab({shift:!0}),await t(i).toHaveFocus(),await r.tab({shift:!0}),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},ae={render:()=>o.jsx(Ln,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});m.mouseDown(s),await r.click(n);const i=e.getByRole("tab",{name:"Build"});await t(i).toBeDisabled(),await t(i.style.transform).toContain("translateY(0"),await t(i.style.boxShadow).toBe("none")}},te={render:()=>o.jsx(In,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await r.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},ne={render:function(){const[e,n]=b.useState("spec"),[s,i]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("p",{style:x,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:E,onValueChange:l=>{n(l),i(f=>f+1)}})]})},play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"}),l=e.getByTestId("primary-pointer-active"),f=e.getByTestId("primary-pointer-count");await r.click(n),await r.tab(),await t(s).toHaveFocus(),await r.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(i.style.boxShadow).toContain("0 0 0 3px"),m.mouseDown(i,{button:2}),m.mouseUp(i,{button:2}),await t(i.style.boxShadow).toContain("0 0 0 3px"),await t(l).toHaveTextContent("spec"),await t(f).toHaveTextContent("0"),m.mouseDown(i,{button:0}),await H(()=>{t(i.style.transform).toContain("translateY(1px)")}),m.pointerCancel(i),await H(()=>{t(i.style.transform).toContain("translateY(0")}),await t(l).toHaveTextContent("spec"),await t(f).toHaveTextContent("0"),i.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(i.style.transform).toContain("translateY(1px)")}),i.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(i.style.transform).toContain("translateY(0")}),await t(l).toHaveTextContent("spec"),await t(f).toHaveTextContent("0"),await r.click(i),await t(l).toHaveTextContent("build"),await t(f).toHaveTextContent("1")}},oe={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},se={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true"),await t(n).toHaveAttribute("tabindex","0");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach((i,l)=>{t(i).toBeDisabled(),t(i).not.toHaveAttribute("aria-keyshortcuts"),t(i).toHaveAttribute("aria-selected",l===0?"true":"false"),t(i).toHaveAttribute("tabindex","-1")}),await t(e.getByRole("tabpanel",{name:"Spec"})).toBeVisible(),await t(e.getByText("Specification stage is disabled.")).toBeInTheDocument(),await r.tab(),await t(n).toHaveFocus()}},ie={render:()=>o.jsxs(w,{children:[o.jsx("button",{type:"button",children:"Before empty tabs"}),o.jsx(p,{ariaLabel:"Empty tabs",items:[]}),o.jsx("button",{type:"button",children:"After empty tabs"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Empty tabs"});await t(n).not.toHaveAttribute("tabindex"),await t(n).not.toHaveAttribute("aria-disabled"),await t(e.queryByRole("tab")).not.toBeInTheDocument(),await t(e.queryByRole("tabpanel")).not.toBeInTheDocument(),await r.tab(),await t(e.getByRole("button",{name:"Before empty tabs"})).toHaveFocus(),await r.tab(),await t(e.getByRole("button",{name:"After empty tabs"})).toHaveFocus()}},re={render:()=>o.jsx(p,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Security Review"}),i=e.getByRole("tab",{name:"Release"});await t(n).not.toHaveAttribute("aria-keyshortcuts"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await t(i).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await r.keyboard("{ArrowRight}"),await r.keyboard("{Enter}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await t(e.getByText("Specification stage is active.")).toBeInTheDocument()}},ce={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await r.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-keyshortcuts",ia),await t(s).toHaveAttribute("aria-keyshortcuts",ia),await t(i).toHaveAttribute("aria-disabled","true"),await t(i).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await r.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await r.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await r.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),m.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),m.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},le={render:()=>o.jsxs(w,{children:[o.jsxs("p",{style:x,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:E})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await r.click(s),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.click(n),await r.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},ue={render:()=>o.jsxs(w,{children:[o.jsxs("p",{style:x,children:["Runtime string config from CMS/JSON should normalize safely: mixed-case"," ",o.jsx("code",{children:"orientation"}),"/",o.jsx("code",{children:"activationMode"})," map to supported values, and invalid"," ",o.jsx("code",{children:"loop"}),"/",o.jsx("code",{children:"items[].disabled"})," falls back to actionable wrapping semantics."]}),o.jsx(p,{ariaLabel:"Runtime normalized tabs",defaultValue:"spec",orientation:" VERTICAL ",activationMode:" MANUAL ",loop:"invalid-loop",items:[{key:"spec",label:"Spec",content:"Spec stays selected until manual activation confirms a new tab."},{key:"build",label:"Build",content:"Build activation is manual + wraps at boundary."},{key:"review",label:"Review",content:"Invalid runtime disabled flag should not lock this tab.",disabled:"false"}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Runtime normalized tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"}),l=e.getByRole("tab",{name:"Review"});await t(n).toHaveAttribute("aria-orientation","vertical"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-keyshortcuts",Ee),await t(l).not.toBeDisabled(),await t(l).toHaveAttribute("aria-keyshortcuts",Ee),await r.click(s),await r.keyboard("{ArrowDown}"),await t(i).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.keyboard("{Enter}"),await t(i).toHaveAttribute("aria-selected","true"),await r.keyboard("{ArrowDown}"),await t(l).toHaveFocus(),await r.keyboard("{ArrowDown}"),await t(s).toHaveFocus()}};function Fn(){const a=b.useId();return o.jsxs(w,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:E,defaultValue:"spec"})]})}function Mn(){return o.jsxs(w,{children:[o.jsxs("p",{style:x,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Pn(){return o.jsxs(w,{children:[o.jsxs("p",{style:x,children:["Non-text tabs without explicit naming still get fallback accessible names derived from",o.jsx("code",{children:" items[].key "})," and normalized for readability to avoid unnamed tab controls in production."]}),o.jsx(p,{ariaLabel:"Fallback naming tabs",defaultValue:"overview-stage",items:[{key:"overview-stage",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),content:"Overview panel keeps fallback naming deterministic."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Vn(){return o.jsxs(w,{gap:10,children:[o.jsxs("p",{style:x,children:["Icon tabs can bind to external visible headings with ",o.jsx("code",{children:"items[].ariaLabelledBy"}),"; when both naming props are present, ",o.jsx("code",{children:"ariaLabelledBy"})," takes precedence."]}),o.jsx("h3",{id:"tabs-icon-overview-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Navigation overview"}),o.jsx(p,{ariaLabel:"Icon labelledby tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Fallback overview label",ariaLabelledBy:"tabs-icon-overview-heading",content:"Overview panel binds icon tab naming to visible heading."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const be={render:()=>o.jsx(Fn,{}),play:async({canvasElement:a})=>{const e=y(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},de={render:()=>o.jsx(Mn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},pe={render:()=>o.jsx(Pn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"overview stage"});await t(n).toHaveAttribute("aria-label","overview stage"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.")}},ve={render:()=>o.jsx(Vn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-labelledby","tabs-icon-overview-heading"),await t(n).not.toHaveAttribute("aria-label"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel binds icon tab naming to visible heading.")}},ye={render:()=>o.jsx(w,{children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Review"}),l=e.getByRole("tab",{name:"Release"});await r.click(s),await t(s).toHaveAttribute("aria-keyshortcuts",ra),await t(l).toHaveAttribute("aria-keyshortcuts",ra),await t(i).not.toHaveAttribute("aria-keyshortcuts"),m.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),m.keyDown(s,{key:"ArrowUp",metaKey:!0}),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.keyboard("{ArrowDown}"),await t(l).toHaveAttribute("aria-selected","true")}},we={render:()=>o.jsxs(w,{dir:"rtl",children:[o.jsx("p",{style:x,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:E})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},me={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",ca),await t(s).toHaveAttribute("aria-keyshortcuts",ca),await r.keyboard("{ArrowRight}");const i=e.getByRole("tab",{name:"Build"});await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await r.keyboard("{Shift>}{Enter}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await r.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await r.keyboard("{Shift>}{Space}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},ge={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(p,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=y(a).getByRole("tab",{name:"Build"});m.keyDown(n,{key:"Enter",ctrlKey:!0}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),m.keyDown(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),m.keyUp(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),m.keyDown(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),m.keyUp(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toContain("translateY(0")})}};function Kn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Manual activation changes"}),o.jsx(z,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:i=>{e(i),s(l=>l+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function Nn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Global shortcut guards that preempt keydown should keep tablist selection and roving focus stable."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Tab value changes"}),o.jsx(z,{tone:"default","data-testid":"managed-key-preempt-change-count",children:n})]}),o.jsx("div",{onKeyDownCapture:i=>i.preventDefault(),children:o.jsx(p,{ariaLabel:"Managed key preempt tabs",activationMode:"manual",value:a,onValueChange:i=>{e(i),s(l=>l+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})})]})}function zn(){const[a,e]=b.useState(0),n=b.useMemo(()=>a%2===0?[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."}]:[{key:"lint",label:"Lint",content:"Lint stage."},{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."}],[a]);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Duplicate-key tabs should keep focused tab identity stable when a non-duplicate tab is prepended during rerender."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Refresh version"}),o.jsx(z,{tone:"default","data-testid":"tabs-duplicate-refresh-version",children:a})]}),o.jsx(Xt,{size:"sm",variant:"outline",onPointerDown:s=>s.preventDefault(),onMouseDown:s=>s.preventDefault(),onClick:()=>e(s=>s+1),children:"Refresh tabs list"}),o.jsx(p,{ariaLabel:"Duplicate key rerender stability tabs",defaultValue:"spec",items:n})]})}function On(){return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Duplicate-key tabs should keep hover, focus-ring, and pressed visuals scoped to the interacted duplicate occurrence."}),o.jsx(p,{ariaLabel:"Duplicate key interaction isolation tabs",defaultValue:"release",items:[{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function Un(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:x,children:"Local tab key guards should be able to preempt managed navigation/activation keys."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Tab value changes"}),o.jsx(z,{tone:"default","data-testid":"managed-key-local-preempt-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Managed key local preempt tabs",activationMode:"manual",value:a,onTabKeyDown:i=>{(i.key==="Enter"||i.key==="ArrowRight")&&i.preventDefault()},onValueChange:i=>{e(i),s(l=>l+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const fe={render:()=>o.jsx(Kn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("tab",{name:"Release"}),l=e.getByTestId("manual-repeat-change-count");await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(l).toHaveTextContent("0"),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(l).toHaveTextContent("0"),await r.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(l).toHaveTextContent("1"),await r.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),m.keyDown(i,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(l).toHaveTextContent("1"),await r.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(l).toHaveTextContent("2")}},Te={render:()=>o.jsx(zn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build backup"});m.click(e.getByRole("button",{name:"Refresh tabs list"})),await H(()=>{t(e.getByTestId("tabs-duplicate-refresh-version")).toHaveTextContent("1")}),await t(e.getByRole("tab",{name:"Build backup"})).toBe(n)}},xe={render:()=>o.jsx(On,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Build backup"});await r.hover(s),await t(s.getAttribute("style")).toContain("var(--aurora-accent-default) 52%"),await t(n.getAttribute("style")).not.toContain("var(--aurora-accent-default) 52%")}},he={render:()=>o.jsx(Nn,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByTestId("managed-key-preempt-change-count");await r.click(n),await t(i).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0"),m.focus(s),m.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0")}},ke={render:()=>o.jsx(Un,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByTestId("managed-key-local-preempt-change-count");await r.click(n),await t(i).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0"),m.focus(s),m.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0")}},Re={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("button",{name:"Outside focus target"});await r.click(n),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await r.click(i),await t(i).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},Be={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),la(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),la(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),ua(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),ua(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await r.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},Se={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:x,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),i=e.getByRole("tab",{name:"Ship"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",Ee),await t(i).toHaveAttribute("aria-keyshortcuts",Ee),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{ArrowDown}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await r.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function $n(){const[a,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Value change events"}),o.jsx(z,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:E,value:a,onValueChange:i=>{e(i),s(l=>l+1)}})]})}const He={render:()=>o.jsx($n,{}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await r.click(n),await t(i).toHaveTextContent("0"),await r.click(s),await t(i).toHaveTextContent("1"),await r.click(s),await t(i).toHaveTextContent("1")}},Ae={render:()=>o.jsx(p,{items:E,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=y(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=n.getAttribute("aria-controls"),l=s.getAttribute("aria-controls");await t(i).toBeTruthy(),await t(l).toBeTruthy(),await t(document.getElementById(i)).not.toBeNull(),await t(document.getElementById(l)).not.toBeNull();const f=document.getElementById(l);await t(f).toHaveAttribute("hidden"),await r.click(s),await t(f).not.toHaveAttribute("hidden")}};var ba,da,pa;Z.parameters={...Z.parameters,docs:{...(ba=Z.parameters)==null?void 0:ba.docs,source:{originalSource:"{}",...(pa=(da=Z.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var va,ya,wa;Q.parameters={...Q.parameters,docs:{...(va=Q.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(wa=(ya=Q.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var ma,ga,fa;X.parameters={...X.parameters,docs:{...(ma=X.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(fa=(ga=X.parameters)==null?void 0:ga.docs)==null?void 0:fa.source}}};var Ta,xa,ha;ee.parameters={...ee.parameters,docs:{...(Ta=ee.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(ha=(xa=ee.parameters)==null?void 0:xa.docs)==null?void 0:ha.source}}};var ka,Ra,Ba;ae.parameters={...ae.parameters,docs:{...(ka=ae.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(Ba=(Ra=ae.parameters)==null?void 0:Ra.docs)==null?void 0:Ba.source}}};var Sa,Ha,Aa;te.parameters={...te.parameters,docs:{...(Sa=te.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Aa=(Ha=te.parameters)==null?void 0:Ha.docs)==null?void 0:Aa.source}}};var Ea,Ca,Da;ne.parameters={...ne.parameters,docs:{...(Ea=ne.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Da=(Ca=ne.parameters)==null?void 0:Ca.docs)==null?void 0:Da.source}}};var ja,La,Ia;oe.parameters={...oe.parameters,docs:{...(ja=oe.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Ia=(La=oe.parameters)==null?void 0:La.docs)==null?void 0:Ia.source}}};var Fa,Ma,Pa;se.parameters={...se.parameters,docs:{...(Fa=se.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(Pa=(Ma=se.parameters)==null?void 0:Ma.docs)==null?void 0:Pa.source}}};var Va,Ka,Na;ie.parameters={...ie.parameters,docs:{...(Va=ie.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Na=(Ka=ie.parameters)==null?void 0:Ka.docs)==null?void 0:Na.source}}};var za,Oa,Ua;re.parameters={...re.parameters,docs:{...(za=re.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(Ua=(Oa=re.parameters)==null?void 0:Oa.docs)==null?void 0:Ua.source}}};var $a,Ya,qa;ce.parameters={...ce.parameters,docs:{...($a=ce.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(qa=(Ya=ce.parameters)==null?void 0:Ya.docs)==null?void 0:qa.source}}};var Wa,_a,Ga;le.parameters={...le.parameters,docs:{...(Wa=le.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Ga=(_a=le.parameters)==null?void 0:_a.docs)==null?void 0:Ga.source}}};var Ja,Za,Qa;ue.parameters={...ue.parameters,docs:{...(Ja=ue.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Runtime string config from CMS/JSON should normalize safely: mixed-case{" "}
        <code>orientation</code>/<code>activationMode</code> map to supported values, and invalid{" "}
        <code>loop</code>/<code>items[].disabled</code> falls back to actionable wrapping semantics.
      </p>
      <Tabs ariaLabel="Runtime normalized tabs" defaultValue="spec" orientation={" VERTICAL " as unknown as "horizontal" | "vertical"} activationMode={" MANUAL " as unknown as "automatic" | "manual"} loop={"invalid-loop" as unknown as boolean} items={[{
      key: "spec",
      label: "Spec",
      content: "Spec stays selected until manual activation confirms a new tab."
    }, {
      key: "build",
      label: "Build",
      content: "Build activation is manual + wraps at boundary."
    }, {
      key: "review",
      label: "Review",
      content: "Invalid runtime disabled flag should not lock this tab.",
      disabled: "false" as unknown as boolean
    }]} />
    </TabsShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabList = canvas.getByRole("tablist", {
      name: "Runtime normalized tabs"
    });
    const specTab = canvas.getByRole("tab", {
      name: "Spec"
    });
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    const reviewTab = canvas.getByRole("tab", {
      name: "Review"
    });
    await expect(tabList).toHaveAttribute("aria-orientation", "vertical");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", manualVerticalTabShortcuts);
    await expect(reviewTab).not.toBeDisabled();
    await expect(reviewTab).toHaveAttribute("aria-keyshortcuts", manualVerticalTabShortcuts);
    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowDown}");
    await expect(buildTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{Enter}");
    await expect(buildTab).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowDown}");
    await expect(reviewTab).toHaveFocus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(specTab).toHaveFocus();
  }
}`,...(Qa=(Za=ue.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var Xa,et,at;be.parameters={...be.parameters,docs:{...(Xa=be.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(at=(et=be.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var tt,nt,ot;de.parameters={...de.parameters,docs:{...(tt=de.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(ot=(nt=de.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,it,rt;pe.parameters={...pe.parameters,docs:{...(st=pe.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(rt=(it=pe.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ct,lt,ut;ve.parameters={...ve.parameters,docs:{...(ct=ve.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(lt=ve.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var bt,dt,pt;ye.parameters={...ye.parameters,docs:{...(bt=ye.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=ye.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var vt,yt,wt;we.parameters={...we.parameters,docs:{...(vt=we.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(wt=(yt=we.parameters)==null?void 0:yt.docs)==null?void 0:wt.source}}};var mt,gt,ft;me.parameters={...me.parameters,docs:{...(mt=me.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ft=(gt=me.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var Tt,xt,ht;ge.parameters={...ge.parameters,docs:{...(Tt=ge.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(ht=(xt=ge.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var kt,Rt,Bt;fe.parameters={...fe.parameters,docs:{...(kt=fe.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Bt=(Rt=fe.parameters)==null?void 0:Rt.docs)==null?void 0:Bt.source}}};var St,Ht,At;Te.parameters={...Te.parameters,docs:{...(St=Te.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: () => <DuplicateKeyRerenderStabilityDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const duplicateTab = canvas.getByRole("tab", {
      name: "Build backup"
    });
    fireEvent.click(canvas.getByRole("button", {
      name: "Refresh tabs list"
    }));
    await waitFor(() => {
      expect(canvas.getByTestId("tabs-duplicate-refresh-version")).toHaveTextContent("1");
    });
    await expect(canvas.getByRole("tab", {
      name: "Build backup"
    })).toBe(duplicateTab);
  }
}`,...(At=(Ht=Te.parameters)==null?void 0:Ht.docs)==null?void 0:At.source}}};var Et,Ct,Dt;xe.parameters={...xe.parameters,docs:{...(Et=xe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  render: () => <DuplicateKeyInteractionIsolationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const primaryDuplicateTab = canvas.getByRole("tab", {
      name: "Build"
    });
    const secondaryDuplicateTab = canvas.getByRole("tab", {
      name: "Build backup"
    });
    await userEvent.hover(secondaryDuplicateTab);
    await expect(secondaryDuplicateTab.getAttribute("style")).toContain("var(--aurora-accent-default) 52%");
    await expect(primaryDuplicateTab.getAttribute("style")).not.toContain("var(--aurora-accent-default) 52%");
  }
}`,...(Dt=(Ct=xe.parameters)==null?void 0:Ct.docs)==null?void 0:Dt.source}}};var jt,Lt,It;he.parameters={...he.parameters,docs:{...(jt=he.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(It=(Lt=he.parameters)==null?void 0:Lt.docs)==null?void 0:It.source}}};var Ft,Mt,Pt;ke.parameters={...ke.parameters,docs:{...(Ft=ke.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Pt=(Mt=ke.parameters)==null?void 0:Mt.docs)==null?void 0:Pt.source}}};var Vt,Kt,Nt;Re.parameters={...Re.parameters,docs:{...(Vt=Re.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Nt=(Kt=Re.parameters)==null?void 0:Kt.docs)==null?void 0:Nt.source}}};var zt,Ot,Ut;Be.parameters={...Be.parameters,docs:{...(zt=Be.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Ot=Be.parameters)==null?void 0:Ot.docs)==null?void 0:Ut.source}}};var $t,Yt,qt;Se.parameters={...Se.parameters,docs:{...($t=Se.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(qt=(Yt=Se.parameters)==null?void 0:Yt.docs)==null?void 0:qt.source}}};var Wt,_t,Gt;He.parameters={...He.parameters,docs:{...(Wt=He.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Gt=(_t=He.parameters)==null?void 0:_t.docs)==null?void 0:Gt.source}}};var Jt,Zt,Qt;Ae.parameters={...Ae.parameters,docs:{...(Jt=Ae.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Qt=(Zt=Ae.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};const Xn=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","EmptyTabsSkipTabStop","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","RuntimeConfigNormalization","LabelledByHeading","IconOnlyLabelNaming","NonTextFallbackNaming","IconOnlyLabelledByPrecedence","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","DuplicateKeyRerenderStability","DuplicateKeyInteractionIsolation","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{se as AllTabsDisabled,He as ChangeTelemetry,Q as Controlled,Ae as ControlsReferenceMountedPanels,Z as Default,ae as DisabledTabVisualReset,xe as DuplicateKeyInteractionIsolation,Te as DuplicateKeyRerenderStability,ie as EmptyTabsSkipTabStop,de as IconOnlyLabelNaming,ve as IconOnlyLabelledByPrecedence,Be as ImeCompositionGuard,X as KeyboardFocusRingAfterPointer,ee as KeyboardFocusRingShiftTabReentry,ce as KeyboardNavigationGuide,be as LabelledByHeading,he as ManagedKeysPreemptedByGlobalHandler,ke as ManagedKeysPreemptedByLocalHandler,me as ManualActivation,ge as ManualActivationPressedFeedback,fe as ManualActivationRepeatGuard,Re as ManualFocusResetOnBlur,Se as ManualVerticalActivation,le as NoLoopNavigation,pe as NonTextFallbackNaming,ne as PrimaryPointerOnlyPressedState,te as RemovedActiveTabFallback,we as RtlKeyboardNavigation,ue as RuntimeConfigNormalization,re as SingleActionableTab,ye as Vertical,oe as WithDisabledTab,Xn as __namedExportsOrder,Qn as default};
