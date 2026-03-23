import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as Qt}from"./Button-CYa37MZO.js";import{B as O}from"./Badge-ZJmMstsz.js";import{within as v,expect as t,userEvent as r,fireEvent as m,waitFor as S}from"./index-DgAF9SIF.js";import{s as x,S as ea}from"./storyShowcase-DlKirntE.js";const yn={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function aa(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function Pe(a,e,n,s){var T,A;if(a.length===0)return-1;const i=(T=a[e])!=null&&T.disabled?-1:e;let d=e;for(let H=0;H<a.length;H+=1){if(d+=n,s)d<0?d=a.length-1:d>=a.length&&(d=0);else if(d<0||d>=a.length)return i;if(!((A=a[d])!=null&&A.disabled))return d}return i}function ta(a){return a.findIndex(e=>!e.disabled)}function vn(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function wn(a,e,n){var s,i,d,T;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let A=0;A<a.length;A+=1){const H=e+A;if(H>=0&&H<a.length&&!((s=a[H])!=null&&s.disabled))return((i=a[H])==null?void 0:i.key)??n;if(A===0)continue;const D=e-A;if(D>=0&&D<a.length&&!((d=a[D])!=null&&d.disabled))return((T=a[D])==null?void 0:T.key)??n}return n}function y({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:i,orientation:d,activationMode:T,loop:A,onTabKeyDown:H,onValueChange:D}){var Ye,qe;const I=u.useId(),Ee=u.useRef(null),Ce=u.useRef([]),Y=u.useRef(null),j=u.useRef(null),F=u.useRef(null);u.useRef(null),u.useRef(null),u.useRef(null);const M=u.useRef(!0),[Xt,en]=u.useState(()=>aa(a)),an=(Ye=a[0])==null?void 0:Ye.key,P=(qe=a.find(l=>!l.disabled))==null?void 0:qe.key,L=u.useMemo(()=>ta(a),[a]),[De,ze]=u.useState(n??P),[tn,je]=u.useState(null),[nn,E]=u.useState(null),[on,V]=u.useState(null),K=gn(d),q=mn(T),Le=fn(A),sn=J(s,"Tabs"),Oe=J(i),Ue=a.length>0&&!P,$e=u.useMemo(()=>Sn(I,a),[I,a]),W=u.useMemo(()=>Hn(a),[a]),rn=u.useMemo(()=>a.reduce((l,b)=>b.disabled?l:l+1,0),[a]);u.useEffect(()=>{},[a]),u.useEffect(()=>{},[a]),u.useEffect(()=>{en(aa(a))},[a]),u.useEffect(()=>{},[P,a,e]),u.useEffect(()=>{var p;const l=((p=Ee.current)==null?void 0:p.ownerDocument)??document,b=B=>{B.metaKey||B.altKey||B.ctrlKey||(M.current=!0)},w=B=>{"button"in B&&!Ve(B.button)||"ctrlKey"in B&&B.ctrlKey||(M.current=!1)};return l.addEventListener("keydown",b,!0),l.addEventListener("pointerdown",w,!0),l.addEventListener("mousedown",w,!0),l.addEventListener("touchstart",w,!0),()=>{l.removeEventListener("keydown",b,!0),l.removeEventListener("pointerdown",w,!0),l.removeEventListener("mousedown",w,!0),l.removeEventListener("touchstart",w,!0)}},[]);const _=e??De,N=a.find(l=>l.key===_),R=N&&!N.disabled?_:P?e===void 0&&_&&!N?wn(a,Xt[_],P):P:(N==null?void 0:N.key)??an,z=u.useMemo(()=>{if(!R)return L>=0?L:a.length>0?0:-1;const l=a.findIndex(b=>b.key===R);return l>=0?l:L>=0?L:a.length>0?0:-1},[R,L,a]),[Ie,$]=u.useState(R),cn=u.useMemo(()=>{var b;const l=Ie===void 0?-1:a.findIndex(w=>w.key===Ie&&!w.disabled);return l>=0?l:z>=0&&!((b=a[z])!=null&&b.disabled)?z:L},[z,L,Ie,a]);u.useEffect(()=>{e===void 0&&R!==De&&ze(R)},[R,De,e]),u.useEffect(()=>{$(R)},[R]),u.useEffect(()=>()=>{j.current!==null&&(F.current??window).clearTimeout(j.current)},[]),u.useEffect(()=>{const l=new Set(W.filter((b,w)=>{var p;return!((p=a[w])!=null&&p.disabled)}));je(b=>b&&!l.has(b)?null:b),E(b=>b&&!l.has(b)?null:b),V(b=>b&&!l.has(b)?null:b)},[W,a]);const ln=u.useCallback(()=>{Y.current=null,j.current!==null&&((F.current??window).clearTimeout(j.current),j.current=null),F.current=null},[]),Fe=u.useCallback(l=>{const b=a.find(w=>w.key===l);!b||b.disabled||l===R||(e===void 0&&ze(l),D==null||D(l))},[R,a,D,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:Ee,role:"tablist","aria-label":Oe?void 0:sn,"aria-labelledby":Oe,"aria-orientation":K,"aria-disabled":Ue?!0:void 0,tabIndex:Ue?0:void 0,onBlurCapture:l=>{const b=l.relatedTarget;b&&l.currentTarget.contains(b)||$(R)},style:{display:"flex",gap:6,flexWrap:K==="horizontal"?"wrap":"nowrap",flexDirection:K==="vertical"?"column":"row"},children:a.map((l,b)=>{const w=$e[b],p=W[b]??`${l.key}__dup-${b}`,B=b===z,k=!!l.disabled,We=!k&&tn===p,_e=!k&&nn===p,Ge=!k&&on===p,un=We||Ge,Me=J(l.ariaLabelledBy),Je=Me?void 0:J(l.ariaLabel),bn=Ke(l.label),dn=Me||Je||bn?void 0:Bn(l.key,b);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:c=>{Ce.current[b]=c},id:(w==null?void 0:w.tabId)??`${I}-tab-${b}`,type:"button",role:"tab","aria-labelledby":Me,"aria-label":Je??dn,"aria-selected":B,"aria-controls":(w==null?void 0:w.panelId)??`${I}-panel-${b}`,"aria-disabled":k||void 0,"aria-keyshortcuts":k||rn<=1?void 0:Tn(q,K),tabIndex:k?-1:cn===b?0:-1,disabled:k,onClick:c=>{$(l.key);const f=q==="manual"&&c.detail===0&&Y.current===p;ln(),!f&&Fe(l.key)},onMouseEnter:()=>{k||je(p)},onMouseLeave:()=>{je(c=>c===p?null:c),E(c=>c===p?null:c)},onPointerDown:c=>{k||c.ctrlKey||Ve(c.button)&&(M.current=!1,V(f=>f===p?null:f),E(p))},onPointerUp:c=>{Ve(c.button)&&E(f=>f===p?null:f)},onMouseDown:c=>{k||c.button!==0||c.ctrlKey||(M.current=!1,V(f=>f===p?null:f),E(p))},onMouseUp:c=>{c.button===0&&E(f=>f===p?null:f)},onPointerCancel:()=>{E(c=>c===p?null:c)},onFocus:()=>{if($(l.key),k){V(c=>c===p?null:c);return}V(c=>Rn(Ce.current[b],M.current)?p:c===p?null:c)},onBlur:()=>{V(c=>c===p?null:c),E(c=>c===p?null:c)},onKeyDown:c=>{if(M.current=!0,H==null||H(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(q==="manual"&&na(c.key)){if(xn(c)||(c.preventDefault(),c.repeat))return;E(p),Y.current=p;const h=c.currentTarget.ownerDocument.defaultView??window;j.current!==null&&(F.current??h).clearTimeout(j.current),F.current=h,j.current=h.setTimeout(()=>{Y.current=null,j.current=null,F.current=null},0),Fe(l.key);return}const f=h=>{var Qe,Xe;const G=(Qe=a[h])==null?void 0:Qe.key;G&&($(G),q==="automatic"&&Fe(G),(Xe=Ce.current[h])==null||Xe.focus())};if(c.key==="Home"){c.preventDefault();const h=ta(a);f(h);return}if(c.key==="End"){c.preventDefault();const h=vn(a);f(h);return}if(c.key==="PageDown"){c.preventDefault();const h=Pe(a,b,1,Le);f(h);return}if(c.key==="PageUp"){c.preventDefault();const h=Pe(a,b,-1,Le);f(h);return}const Ze=hn({orientation:K,key:c.key,isRtl:K==="horizontal"&&kn(Ee.current)});if(!Ze)return;c.preventDefault();const pn=Pe(a,b,Ze,Le);f(pn)},onKeyUp:c=>{na(c.key)&&E(f=>f===p?null:f)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:B?"1px solid var(--aurora-accent-default)":un?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:B?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":_e?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":We?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:k?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:k?"not-allowed":"pointer",boxShadow:Ge?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:_e?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:l.label},p)})}),a.map((l,b)=>{const w=$e[b],p=b===z;return o.jsx("div",{id:(w==null?void 0:w.panelId)??`${I}-panel-${b}`,role:"tabpanel","aria-labelledby":(w==null?void 0:w.tabId)??`${I}-tab-${b}`,tabIndex:p?0:-1,hidden:!p,style:{display:p?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:l.content},`${W[b]??`${l.key}__dup-${b}`}__panel`)})]})}function na(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Ve(a){return typeof a!="number"||a<=0}function gn(a){return typeof a!="string"?"horizontal":a.trim().toLowerCase()==="vertical"?"vertical":"horizontal"}function mn(a){return typeof a!="string"?"automatic":a.trim().toLowerCase()==="manual"?"manual":"automatic"}function fn(a){return typeof a!="boolean"?!0:a}function Tn(a,e){return yn[a][e]}function xn(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function hn({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function kn(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function Rn(a,e){if(!a)return e;try{return a.matches(":focus-visible")||e}catch{return e}}function Ke(a){if(typeof a=="string")return a.trim().length>0;if(typeof a=="number")return!0;if(Array.isArray(a))return a.some(n=>Ke(n));if(!u.isValidElement(a))return!1;const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?!1:typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?!0:Ke(e.children)}function J(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function Bn(a,e){const n=En(a.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:`Tab ${e+1}`}function Sn(a,e){const n=new Map;return e.map(s=>{const i=An(s.key),d=(n.get(i)??0)+1;n.set(i,d);const T=d>1?`${i}-${d}`:i;return{tabId:`${a}-tab-${T}`,panelId:`${a}-panel-${T}`}})}function Hn(a){const e=new Map;return a.map(n=>{const s=e.get(n.key)??0;return e.set(n.key,s+1),s===0?n.key:`${n.key}__dup-${s}`})}function An(a){const e=encodeURIComponent(a).replace(/%/g,"_");return e.length>0?e:"item"}function En(a){return a.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:""},loop:{required:!1,tsType:{name:"boolean"},description:""},onTabKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const C=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],U={color:"var(--aurora-text-secondary)",fontSize:13},oa="min(100%, 620px)",sa="Home End PageDown PageUp ArrowLeft ArrowRight",ia="Home End PageDown PageUp ArrowUp ArrowDown",ra="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Ne="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function g({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(ea,{maxWidth:oa,gap:e,children:a})}):o.jsx(ea,{maxWidth:oa,gap:e,children:a})}function ca(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}function la(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const Jn={title:"Data/Tabs",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:C,defaultValue:"spec"}},Z={};function Cn(){const[a,e]=u.useState("build");return o.jsxs(g,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:U,children:"Current stage"}),o.jsx(O,{tone:"default",children:a})]}),o.jsx(y,{items:C,value:a,onValueChange:e})]})}function Dn(){const[a,e]=u.useState(!1);return o.jsxs(g,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(y,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function jn(){const[a,e]=u.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(g,{children:[o.jsx(Qt,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(y,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const Q={render:()=>o.jsx(Cn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await r.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},X={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(y,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});m.mouseDown(n),n.focus(),await r.click(s),await r.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},ee={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),o.jsx(y,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:C}),o.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"After tabs"}),i=e.getByRole("tabpanel");m.mouseDown(n),n.focus(),await r.click(s),await r.tab({shift:!0}),await t(i).toHaveFocus(),await r.tab({shift:!0}),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},ae={render:()=>o.jsx(Dn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});m.mouseDown(s),await r.click(n);const i=e.getByRole("tab",{name:"Build"});await t(i).toBeDisabled(),await t(i.style.transform).toContain("translateY(0"),await t(i.style.boxShadow).toBe("none")}},te={render:()=>o.jsx(jn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await r.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},ne={render:function(){const[e,n]=u.useState("spec"),[s,i]=u.useState(0);return o.jsxs(g,{gap:10,children:[o.jsxs("p",{style:x,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(y,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:C,onValueChange:d=>{n(d),i(T=>T+1)}})]})},play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"}),d=e.getByTestId("primary-pointer-active"),T=e.getByTestId("primary-pointer-count");await r.click(n),await r.tab(),await t(s).toHaveFocus(),await r.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(i.style.boxShadow).toContain("0 0 0 3px"),m.mouseDown(i,{button:2}),m.mouseUp(i,{button:2}),await t(i.style.boxShadow).toContain("0 0 0 3px"),await t(d).toHaveTextContent("spec"),await t(T).toHaveTextContent("0"),m.mouseDown(i,{button:0}),await S(()=>{t(i.style.transform).toContain("translateY(1px)")}),m.pointerCancel(i),await S(()=>{t(i.style.transform).toContain("translateY(0")}),await t(d).toHaveTextContent("spec"),await t(T).toHaveTextContent("0"),i.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await S(()=>{t(i.style.transform).toContain("translateY(1px)")}),i.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await S(()=>{t(i.style.transform).toContain("translateY(0")}),await t(d).toHaveTextContent("spec"),await t(T).toHaveTextContent("0"),await r.click(i),await t(d).toHaveTextContent("build"),await t(T).toHaveTextContent("1")}},oe={render:()=>o.jsx(y,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},se={render:()=>o.jsx(y,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true"),await t(n).toHaveAttribute("tabindex","0");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach((i,d)=>{t(i).toBeDisabled(),t(i).not.toHaveAttribute("aria-keyshortcuts"),t(i).toHaveAttribute("aria-selected",d===0?"true":"false"),t(i).toHaveAttribute("tabindex","-1")}),await t(e.getByRole("tabpanel",{name:"Spec"})).toBeVisible(),await t(e.getByText("Specification stage is disabled.")).toBeInTheDocument(),await r.tab(),await t(n).toHaveFocus()}},ie={render:()=>o.jsxs(g,{children:[o.jsx("button",{type:"button",children:"Before empty tabs"}),o.jsx(y,{ariaLabel:"Empty tabs",items:[]}),o.jsx("button",{type:"button",children:"After empty tabs"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Empty tabs"});await t(n).not.toHaveAttribute("tabindex"),await t(n).not.toHaveAttribute("aria-disabled"),await t(e.queryByRole("tab")).not.toBeInTheDocument(),await t(e.queryByRole("tabpanel")).not.toBeInTheDocument(),await r.tab(),await t(e.getByRole("button",{name:"Before empty tabs"})).toHaveFocus(),await r.tab(),await t(e.getByRole("button",{name:"After empty tabs"})).toHaveFocus()}},re={render:()=>o.jsx(y,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Security Review"}),i=e.getByRole("tab",{name:"Release"});await t(n).not.toHaveAttribute("aria-keyshortcuts"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await t(i).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await r.keyboard("{ArrowRight}"),await r.keyboard("{Enter}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await t(e.getByText("Specification stage is active.")).toBeInTheDocument()}},ce={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(y,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await r.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-keyshortcuts",sa),await t(s).toHaveAttribute("aria-keyshortcuts",sa),await t(i).toHaveAttribute("aria-disabled","true"),await t(i).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await r.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await r.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await r.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),m.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),m.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},le={render:()=>o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(y,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await r.click(s),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.click(n),await r.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},ue={render:()=>o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Runtime string config from CMS/JSON should normalize safely: mixed-case"," ",o.jsx("code",{children:"orientation"}),"/",o.jsx("code",{children:"activationMode"})," map to supported values, and invalid"," ",o.jsx("code",{children:"loop"})," falls back to wrapping navigation."]}),o.jsx(y,{ariaLabel:"Runtime normalized tabs",defaultValue:"spec",orientation:" VERTICAL ",activationMode:" MANUAL ",loop:"invalid-loop",items:[{key:"spec",label:"Spec",content:"Spec stays selected until manual activation confirms a new tab."},{key:"build",label:"Build",content:"Build activation is manual + wraps at boundary."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Runtime normalized tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"});await t(n).toHaveAttribute("aria-orientation","vertical"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-keyshortcuts",Ne),await r.click(s),await r.keyboard("{ArrowDown}"),await t(i).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.keyboard("{Enter}"),await t(i).toHaveAttribute("aria-selected","true"),await r.keyboard("{ArrowDown}"),await t(s).toHaveFocus()}};function Ln(){const a=u.useId();return o.jsxs(g,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(y,{ariaLabelledBy:a,items:C,defaultValue:"spec"})]})}function In(){return o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(y,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Fn(){return o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Non-text tabs without explicit naming still get fallback accessible names derived from",o.jsx("code",{children:" items[].key "})," and normalized for readability to avoid unnamed tab controls in production."]}),o.jsx(y,{ariaLabel:"Fallback naming tabs",defaultValue:"overview-stage",items:[{key:"overview-stage",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),content:"Overview panel keeps fallback naming deterministic."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Mn(){return o.jsxs(g,{gap:10,children:[o.jsxs("p",{style:x,children:["Icon tabs can bind to external visible headings with ",o.jsx("code",{children:"items[].ariaLabelledBy"}),"; when both naming props are present, ",o.jsx("code",{children:"ariaLabelledBy"})," takes precedence."]}),o.jsx("h3",{id:"tabs-icon-overview-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Navigation overview"}),o.jsx(y,{ariaLabel:"Icon labelledby tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Fallback overview label",ariaLabelledBy:"tabs-icon-overview-heading",content:"Overview panel binds icon tab naming to visible heading."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const be={render:()=>o.jsx(Ln,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},de={render:()=>o.jsx(In,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},pe={render:()=>o.jsx(Fn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"overview stage"});await t(n).toHaveAttribute("aria-label","overview stage"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.")}},ye={render:()=>o.jsx(Mn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-labelledby","tabs-icon-overview-heading"),await t(n).not.toHaveAttribute("aria-label"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel binds icon tab naming to visible heading.")}},ve={render:()=>o.jsx(g,{children:o.jsx(y,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Review"}),d=e.getByRole("tab",{name:"Release"});await r.click(s),await t(s).toHaveAttribute("aria-keyshortcuts",ia),await t(d).toHaveAttribute("aria-keyshortcuts",ia),await t(i).not.toHaveAttribute("aria-keyshortcuts"),m.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),m.keyDown(s,{key:"ArrowUp",metaKey:!0}),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.keyboard("{ArrowDown}"),await t(d).toHaveAttribute("aria-selected","true")}},we={render:()=>o.jsxs(g,{dir:"rtl",children:[o.jsx("p",{style:x,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(y,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await r.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},ge={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(y,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",ra),await t(s).toHaveAttribute("aria-keyshortcuts",ra),await r.keyboard("{ArrowRight}");const i=e.getByRole("tab",{name:"Build"});await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await r.keyboard("{Shift>}{Enter}{/Shift}"),await S(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await r.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await r.keyboard("{Shift>}{Space}{/Shift}"),await S(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},me={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(y,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=v(a).getByRole("tab",{name:"Build"});m.keyDown(n,{key:"Enter",ctrlKey:!0}),await S(()=>{t(n.style.transform).toContain("translateY(0")}),m.keyDown(n,{key:"Enter"}),await S(()=>{t(n.style.transform).toBe("translateY(1px)")}),m.keyUp(n,{key:"Enter"}),await S(()=>{t(n.style.transform).toContain("translateY(0")}),m.keyDown(n,{key:"Spacebar"}),await S(()=>{t(n.style.transform).toBe("translateY(1px)")}),m.keyUp(n,{key:"Spacebar"}),await S(()=>{t(n.style.transform).toContain("translateY(0")})}};function Pn(){const[a,e]=u.useState("spec"),[n,s]=u.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:U,children:"Manual activation changes"}),o.jsx(O,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(y,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:i=>{e(i),s(d=>d+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function Vn(){const[a,e]=u.useState("spec"),[n,s]=u.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Global shortcut guards that preempt keydown should keep tablist selection and roving focus stable."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:U,children:"Tab value changes"}),o.jsx(O,{tone:"default","data-testid":"managed-key-preempt-change-count",children:n})]}),o.jsx("div",{onKeyDownCapture:i=>i.preventDefault(),children:o.jsx(y,{ariaLabel:"Managed key preempt tabs",activationMode:"manual",value:a,onValueChange:i=>{e(i),s(d=>d+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})})]})}function Kn(){const[a,e]=u.useState(0),n=u.useMemo(()=>a%2===0?[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."}]:[{key:"lint",label:"Lint",content:"Lint stage."},{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."}],[a]);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Duplicate-key tabs should keep focused tab identity stable when a non-duplicate tab is prepended during rerender."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:U,children:"Refresh version"}),o.jsx(O,{tone:"default","data-testid":"tabs-duplicate-refresh-version",children:a})]}),o.jsx(Qt,{size:"sm",variant:"outline",onPointerDown:s=>s.preventDefault(),onMouseDown:s=>s.preventDefault(),onClick:()=>e(s=>s+1),children:"Refresh tabs list"}),o.jsx(y,{ariaLabel:"Duplicate key rerender stability tabs",defaultValue:"spec",items:n})]})}function Nn(){return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Duplicate-key tabs should keep hover, focus-ring, and pressed visuals scoped to the interacted duplicate occurrence."}),o.jsx(y,{ariaLabel:"Duplicate key interaction isolation tabs",defaultValue:"release",items:[{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function zn(){const[a,e]=u.useState("spec"),[n,s]=u.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Local tab key guards should be able to preempt managed navigation/activation keys."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:U,children:"Tab value changes"}),o.jsx(O,{tone:"default","data-testid":"managed-key-local-preempt-change-count",children:n})]}),o.jsx(y,{ariaLabel:"Managed key local preempt tabs",activationMode:"manual",value:a,onTabKeyDown:i=>{(i.key==="Enter"||i.key==="ArrowRight")&&i.preventDefault()},onValueChange:i=>{e(i),s(d=>d+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const fe={render:()=>o.jsx(Pn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("tab",{name:"Release"}),d=e.getByTestId("manual-repeat-change-count");await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(d).toHaveTextContent("0"),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(d).toHaveTextContent("0"),await r.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(d).toHaveTextContent("1"),await r.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),m.keyDown(i,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(d).toHaveTextContent("1"),await r.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(d).toHaveTextContent("2")}},Te={render:()=>o.jsx(Kn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build backup"});m.click(e.getByRole("button",{name:"Refresh tabs list"})),await S(()=>{t(e.getByTestId("tabs-duplicate-refresh-version")).toHaveTextContent("1")}),await t(e.getByRole("tab",{name:"Build backup"})).toBe(n)}},xe={render:()=>o.jsx(Nn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Build backup"});await r.hover(s),await t(s.getAttribute("style")).toContain("var(--aurora-accent-default) 52%"),await t(n.getAttribute("style")).not.toContain("var(--aurora-accent-default) 52%")}},he={render:()=>o.jsx(Vn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByTestId("managed-key-preempt-change-count");await r.click(n),await t(i).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0"),m.focus(s),m.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0")}},ke={render:()=>o.jsx(zn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByTestId("managed-key-local-preempt-change-count");await r.click(n),await t(i).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0"),m.focus(s),m.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(i).toHaveTextContent("0")}},Re={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(y,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("button",{name:"Outside focus target"});await r.click(n),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await r.click(i),await t(i).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},Be={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(y,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await r.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),ca(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),ca(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),la(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),la(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await r.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},Se={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(y,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),i=e.getByRole("tab",{name:"Ship"});await r.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",Ne),await t(i).toHaveAttribute("aria-keyshortcuts",Ne),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{ArrowDown}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await r.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function On(){const[a,e]=u.useState("build"),[n,s]=u.useState(0);return o.jsxs(g,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:U,children:"Value change events"}),o.jsx(O,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(y,{items:C,value:a,onValueChange:i=>{e(i),s(d=>d+1)}})]})}const He={render:()=>o.jsx(On,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await r.click(n),await t(i).toHaveTextContent("0"),await r.click(s),await t(i).toHaveTextContent("1"),await r.click(s),await t(i).toHaveTextContent("1")}},Ae={render:()=>o.jsx(y,{items:C,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=n.getAttribute("aria-controls"),d=s.getAttribute("aria-controls");await t(i).toBeTruthy(),await t(d).toBeTruthy(),await t(document.getElementById(i)).not.toBeNull(),await t(document.getElementById(d)).not.toBeNull();const T=document.getElementById(d);await t(T).toHaveAttribute("hidden"),await r.click(s),await t(T).not.toHaveAttribute("hidden")}};var ua,ba,da;Z.parameters={...Z.parameters,docs:{...(ua=Z.parameters)==null?void 0:ua.docs,source:{originalSource:"{}",...(da=(ba=Z.parameters)==null?void 0:ba.docs)==null?void 0:da.source}}};var pa,ya,va;Q.parameters={...Q.parameters,docs:{...(pa=Q.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(va=(ya=Q.parameters)==null?void 0:ya.docs)==null?void 0:va.source}}};var wa,ga,ma;X.parameters={...X.parameters,docs:{...(wa=X.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(ma=(ga=X.parameters)==null?void 0:ga.docs)==null?void 0:ma.source}}};var fa,Ta,xa;ee.parameters={...ee.parameters,docs:{...(fa=ee.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(xa=(Ta=ee.parameters)==null?void 0:Ta.docs)==null?void 0:xa.source}}};var ha,ka,Ra;ae.parameters={...ae.parameters,docs:{...(ha=ae.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(Ra=(ka=ae.parameters)==null?void 0:ka.docs)==null?void 0:Ra.source}}};var Ba,Sa,Ha;te.parameters={...te.parameters,docs:{...(Ba=te.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(Ha=(Sa=te.parameters)==null?void 0:Sa.docs)==null?void 0:Ha.source}}};var Aa,Ea,Ca;ne.parameters={...ne.parameters,docs:{...(Aa=ne.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ca=(Ea=ne.parameters)==null?void 0:Ea.docs)==null?void 0:Ca.source}}};var Da,ja,La;oe.parameters={...oe.parameters,docs:{...(Da=oe.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
}`,...(La=(ja=oe.parameters)==null?void 0:ja.docs)==null?void 0:La.source}}};var Ia,Fa,Ma;se.parameters={...se.parameters,docs:{...(Ia=se.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(Ma=(Fa=se.parameters)==null?void 0:Fa.docs)==null?void 0:Ma.source}}};var Pa,Va,Ka;ie.parameters={...ie.parameters,docs:{...(Pa=ie.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Ka=(Va=ie.parameters)==null?void 0:Va.docs)==null?void 0:Ka.source}}};var Na,za,Oa;re.parameters={...re.parameters,docs:{...(Na=re.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(Oa=(za=re.parameters)==null?void 0:za.docs)==null?void 0:Oa.source}}};var Ua,$a,Ya;ce.parameters={...ce.parameters,docs:{...(Ua=ce.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(Ya=($a=ce.parameters)==null?void 0:$a.docs)==null?void 0:Ya.source}}};var qa,Wa,_a;le.parameters={...le.parameters,docs:{...(qa=le.parameters)==null?void 0:qa.docs,source:{originalSource:`{
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
}`,...(_a=(Wa=le.parameters)==null?void 0:Wa.docs)==null?void 0:_a.source}}};var Ga,Ja,Za;ue.parameters={...ue.parameters,docs:{...(Ga=ue.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  render: () => <TabsShowcase>
      <p style={storyMutedTextStyle}>
        Runtime string config from CMS/JSON should normalize safely: mixed-case{" "}
        <code>orientation</code>/<code>activationMode</code> map to supported values, and invalid{" "}
        <code>loop</code> falls back to wrapping navigation.
      </p>
      <Tabs ariaLabel="Runtime normalized tabs" defaultValue="spec" orientation={" VERTICAL " as unknown as "horizontal" | "vertical"} activationMode={" MANUAL " as unknown as "automatic" | "manual"} loop={"invalid-loop" as unknown as boolean} items={[{
      key: "spec",
      label: "Spec",
      content: "Spec stays selected until manual activation confirms a new tab."
    }, {
      key: "build",
      label: "Build",
      content: "Build activation is manual + wraps at boundary."
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
    await expect(tabList).toHaveAttribute("aria-orientation", "vertical");
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await expect(specTab).toHaveAttribute("aria-keyshortcuts", manualVerticalTabShortcuts);
    await userEvent.click(specTab);
    await userEvent.keyboard("{ArrowDown}");
    await expect(buildTab).toHaveFocus();
    await expect(specTab).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{Enter}");
    await expect(buildTab).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{ArrowDown}");
    await expect(specTab).toHaveFocus();
  }
}`,...(Za=(Ja=ue.parameters)==null?void 0:Ja.docs)==null?void 0:Za.source}}};var Qa,Xa,et;be.parameters={...be.parameters,docs:{...(Qa=be.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(et=(Xa=be.parameters)==null?void 0:Xa.docs)==null?void 0:et.source}}};var at,tt,nt;de.parameters={...de.parameters,docs:{...(at=de.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(nt=(tt=de.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,st,it;pe.parameters={...pe.parameters,docs:{...(ot=pe.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(st=pe.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var rt,ct,lt;ye.parameters={...ye.parameters,docs:{...(rt=ye.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(ct=ye.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,bt,dt;ve.parameters={...ve.parameters,docs:{...(ut=ve.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(bt=ve.parameters)==null?void 0:bt.docs)==null?void 0:dt.source}}};var pt,yt,vt;we.parameters={...we.parameters,docs:{...(pt=we.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(vt=(yt=we.parameters)==null?void 0:yt.docs)==null?void 0:vt.source}}};var wt,gt,mt;ge.parameters={...ge.parameters,docs:{...(wt=ge.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(mt=(gt=ge.parameters)==null?void 0:gt.docs)==null?void 0:mt.source}}};var ft,Tt,xt;me.parameters={...me.parameters,docs:{...(ft=me.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(xt=(Tt=me.parameters)==null?void 0:Tt.docs)==null?void 0:xt.source}}};var ht,kt,Rt;fe.parameters={...fe.parameters,docs:{...(ht=fe.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Rt=(kt=fe.parameters)==null?void 0:kt.docs)==null?void 0:Rt.source}}};var Bt,St,Ht;Te.parameters={...Te.parameters,docs:{...(Bt=Te.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ht=(St=Te.parameters)==null?void 0:St.docs)==null?void 0:Ht.source}}};var At,Et,Ct;xe.parameters={...xe.parameters,docs:{...(At=xe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ct=(Et=xe.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var Dt,jt,Lt;he.parameters={...he.parameters,docs:{...(Dt=he.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Lt=(jt=he.parameters)==null?void 0:jt.docs)==null?void 0:Lt.source}}};var It,Ft,Mt;ke.parameters={...ke.parameters,docs:{...(It=ke.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Mt=(Ft=ke.parameters)==null?void 0:Ft.docs)==null?void 0:Mt.source}}};var Pt,Vt,Kt;Re.parameters={...Re.parameters,docs:{...(Pt=Re.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Kt=(Vt=Re.parameters)==null?void 0:Vt.docs)==null?void 0:Kt.source}}};var Nt,zt,Ot;Be.parameters={...Be.parameters,docs:{...(Nt=Be.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ot=(zt=Be.parameters)==null?void 0:zt.docs)==null?void 0:Ot.source}}};var Ut,$t,Yt;Se.parameters={...Se.parameters,docs:{...(Ut=Se.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Yt=($t=Se.parameters)==null?void 0:$t.docs)==null?void 0:Yt.source}}};var qt,Wt,_t;He.parameters={...He.parameters,docs:{...(qt=He.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(_t=(Wt=He.parameters)==null?void 0:Wt.docs)==null?void 0:_t.source}}};var Gt,Jt,Zt;Ae.parameters={...Ae.parameters,docs:{...(Gt=Ae.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(Zt=(Jt=Ae.parameters)==null?void 0:Jt.docs)==null?void 0:Zt.source}}};const Zn=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","EmptyTabsSkipTabStop","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","RuntimeConfigNormalization","LabelledByHeading","IconOnlyLabelNaming","NonTextFallbackNaming","IconOnlyLabelledByPrecedence","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","DuplicateKeyRerenderStability","DuplicateKeyInteractionIsolation","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{se as AllTabsDisabled,He as ChangeTelemetry,Q as Controlled,Ae as ControlsReferenceMountedPanels,Z as Default,ae as DisabledTabVisualReset,xe as DuplicateKeyInteractionIsolation,Te as DuplicateKeyRerenderStability,ie as EmptyTabsSkipTabStop,de as IconOnlyLabelNaming,ye as IconOnlyLabelledByPrecedence,Be as ImeCompositionGuard,X as KeyboardFocusRingAfterPointer,ee as KeyboardFocusRingShiftTabReentry,ce as KeyboardNavigationGuide,be as LabelledByHeading,he as ManagedKeysPreemptedByGlobalHandler,ke as ManagedKeysPreemptedByLocalHandler,ge as ManualActivation,me as ManualActivationPressedFeedback,fe as ManualActivationRepeatGuard,Re as ManualFocusResetOnBlur,Se as ManualVerticalActivation,le as NoLoopNavigation,pe as NonTextFallbackNaming,ne as PrimaryPointerOnlyPressedState,te as RemovedActiveTabFallback,we as RtlKeyboardNavigation,ue as RuntimeConfigNormalization,re as SingleActionableTab,ve as Vertical,oe as WithDisabledTab,Zn as __namedExportsOrder,Jn as default};
