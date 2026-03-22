import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Yt}from"./Button-B21ouHNm.js";import{B as U}from"./Badge-ZJmMstsz.js";import{within as v,expect as t,userEvent as i,fireEvent as m,waitFor as H}from"./index-DgAF9SIF.js";import{s as x,S as Ge}from"./storyShowcase-DlKirntE.js";const rn={automatic:{horizontal:"Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Home End PageDown PageUp ArrowUp ArrowDown"},manual:{horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"}};function Je(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function Le(a,e,n,s){var f,R;if(a.length===0)return-1;const r=(f=a[e])!=null&&f.disabled?-1:e;let l=e;for(let E=0;E<a.length;E+=1){if(l+=n,s)l<0?l=a.length-1:l>=a.length&&(l=0);else if(l<0||l>=a.length)return r;if(!((R=a[l])!=null&&R.disabled))return l}return r}function Ze(a){return a.findIndex(e=>!e.disabled)}function cn(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function ln(a,e,n){var s,r,l,f;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let R=0;R<a.length;R+=1){const E=e+R;if(E>=0&&E<a.length&&!((s=a[E])!=null&&s.disabled))return((r=a[E])==null?void 0:r.key)??n;if(R===0)continue;const D=e-R;if(D>=0&&D<a.length&&!((l=a[D])!=null&&l.disabled))return((f=a[D])==null?void 0:f.key)??n}return n}function y({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:r,orientation:l="horizontal",activationMode:f="automatic",loop:R=!0,onTabKeyDown:E,onValueChange:D}){var Ne,Ue;const I=b.useId(),Se=b.useRef(null),He=b.useRef([]),$=b.useRef(null),j=b.useRef(null),F=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const P=b.useRef(!0),[qt,Wt]=b.useState(()=>Je(a)),_t=(Ne=a[0])==null?void 0:Ne.key,M=(Ue=a.find(u=>!u.disabled))==null?void 0:Ue.key,L=b.useMemo(()=>Ze(a),[a]),[Ee,Pe]=b.useState(n??M),[Gt,Ae]=b.useState(null),[Jt,A]=b.useState(null),[Zt,V]=b.useState(null),Qt=_(s,"Tabs"),Me=_(r),Ve=a.length>0&&!M,Ke=b.useMemo(()=>wn(I,a),[I,a]),Y=b.useMemo(()=>gn(a),[a]),Xt=b.useMemo(()=>a.reduce((u,d)=>d.disabled?u:u+1,0),[a]);b.useEffect(()=>{},[a]),b.useEffect(()=>{},[a]),b.useEffect(()=>{Wt(Je(a))},[a]),b.useEffect(()=>{},[M,a,e]),b.useEffect(()=>{var p;const u=((p=Se.current)==null?void 0:p.ownerDocument)??document,d=S=>{S.metaKey||S.altKey||S.ctrlKey||(P.current=!0)},w=S=>{"button"in S&&!Ie(S.button)||"ctrlKey"in S&&S.ctrlKey||(P.current=!1)};return u.addEventListener("keydown",d,!0),u.addEventListener("pointerdown",w,!0),u.addEventListener("mousedown",w,!0),u.addEventListener("touchstart",w,!0),()=>{u.removeEventListener("keydown",d,!0),u.removeEventListener("pointerdown",w,!0),u.removeEventListener("mousedown",w,!0),u.removeEventListener("touchstart",w,!0)}},[]);const q=e??Ee,K=a.find(u=>u.key===q),B=K&&!K.disabled?q:M?e===void 0&&q&&!K?ln(a,qt[q],M):M:(K==null?void 0:K.key)??_t,N=b.useMemo(()=>{if(!B)return L>=0?L:a.length>0?0:-1;const u=a.findIndex(d=>d.key===B);return u>=0?u:L>=0?L:a.length>0?0:-1},[B,L,a]),[Ce,z]=b.useState(B),en=b.useMemo(()=>{var d;const u=Ce===void 0?-1:a.findIndex(w=>w.key===Ce&&!w.disabled);return u>=0?u:N>=0&&!((d=a[N])!=null&&d.disabled)?N:L},[N,L,Ce,a]);b.useEffect(()=>{e===void 0&&B!==Ee&&Pe(B)},[B,Ee,e]),b.useEffect(()=>{z(B)},[B]),b.useEffect(()=>()=>{j.current!==null&&(F.current??window).clearTimeout(j.current)},[]),b.useEffect(()=>{const u=new Set(Y.filter((d,w)=>{var p;return!((p=a[w])!=null&&p.disabled)}));Ae(d=>d&&!u.has(d)?null:d),A(d=>d&&!u.has(d)?null:d),V(d=>d&&!u.has(d)?null:d)},[Y,a]);const an=b.useCallback(()=>{$.current=null,j.current!==null&&((F.current??window).clearTimeout(j.current),j.current=null),F.current=null},[]),De=b.useCallback(u=>{const d=a.find(w=>w.key===u);!d||d.disabled||u===B||(e===void 0&&Pe(u),D==null||D(u))},[B,a,D,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:Se,role:"tablist","aria-label":Me?void 0:Qt,"aria-labelledby":Me,"aria-orientation":l,"aria-disabled":Ve?!0:void 0,tabIndex:Ve?0:void 0,onBlurCapture:u=>{const d=u.relatedTarget;d&&u.currentTarget.contains(d)||z(B)},style:{display:"flex",gap:6,flexWrap:l==="horizontal"?"wrap":"nowrap",flexDirection:l==="vertical"?"column":"row"},children:a.map((u,d)=>{const w=Ke[d],p=Y[d]??`${u.key}__dup-${d}`,S=d===N,k=!!u.disabled,Oe=!k&&Gt===p,ze=!k&&Jt===p,$e=!k&&Zt===p,tn=Oe||$e,je=_(u.ariaLabelledBy),Ye=je?void 0:_(u.ariaLabel),nn=Fe(u.label),on=je||Ye||nn?void 0:vn(u.key,d);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:c=>{He.current[d]=c},id:(w==null?void 0:w.tabId)??`${I}-tab-${d}`,type:"button",role:"tab","aria-labelledby":je,"aria-label":Ye??on,"aria-selected":S,"aria-controls":(w==null?void 0:w.panelId)??`${I}-panel-${d}`,"aria-disabled":k||void 0,"aria-keyshortcuts":k||Xt<=1?void 0:un(f,l),tabIndex:k?-1:en===d?0:-1,disabled:k,onClick:c=>{z(u.key);const T=f==="manual"&&c.detail===0&&$.current===p;an(),!T&&De(u.key)},onMouseEnter:()=>{k||Ae(p)},onMouseLeave:()=>{Ae(c=>c===p?null:c),A(c=>c===p?null:c)},onPointerDown:c=>{k||c.ctrlKey||Ie(c.button)&&(P.current=!1,V(T=>T===p?null:T),A(p))},onPointerUp:c=>{Ie(c.button)&&A(T=>T===p?null:T)},onMouseDown:c=>{k||c.button!==0||c.ctrlKey||(P.current=!1,V(T=>T===p?null:T),A(p))},onMouseUp:c=>{c.button===0&&A(T=>T===p?null:T)},onPointerCancel:()=>{A(c=>c===p?null:c)},onFocus:()=>{if(z(u.key),k){V(c=>c===p?null:c);return}V(c=>yn(He.current[d],P.current)?p:c===p?null:c)},onBlur:()=>{V(c=>c===p?null:c),A(c=>c===p?null:c)},onKeyDown:c=>{if(P.current=!0,E==null||E(c),c.defaultPrevented||c.altKey||c.ctrlKey||c.metaKey)return;if(f==="manual"&&Qe(c.key)){if(bn(c)||(c.preventDefault(),c.repeat))return;A(p),$.current=p;const h=c.currentTarget.ownerDocument.defaultView??window;j.current!==null&&(F.current??h).clearTimeout(j.current),F.current=h,j.current=h.setTimeout(()=>{$.current=null,j.current=null,F.current=null},0),De(u.key);return}const T=h=>{var We,_e;const W=(We=a[h])==null?void 0:We.key;W&&(z(W),f==="automatic"&&De(W),(_e=He.current[h])==null||_e.focus())};if(c.key==="Home"){c.preventDefault();const h=Ze(a);T(h);return}if(c.key==="End"){c.preventDefault();const h=cn(a);T(h);return}if(c.key==="PageDown"){c.preventDefault();const h=Le(a,d,1,R);T(h);return}if(c.key==="PageUp"){c.preventDefault();const h=Le(a,d,-1,R);T(h);return}const qe=dn({orientation:l,key:c.key,isRtl:l==="horizontal"&&pn(Se.current)});if(!qe)return;c.preventDefault();const sn=Le(a,d,qe,R);T(sn)},onKeyUp:c=>{Qe(c.key)&&A(T=>T===p?null:T)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:S?"1px solid var(--aurora-accent-default)":tn?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:S?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":ze?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":Oe?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:k?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:k?"not-allowed":"pointer",boxShadow:$e?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ze?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:u.label},p)})}),a.map((u,d)=>{const w=Ke[d],p=d===N;return o.jsx("div",{id:(w==null?void 0:w.panelId)??`${I}-panel-${d}`,role:"tabpanel","aria-labelledby":(w==null?void 0:w.tabId)??`${I}-tab-${d}`,tabIndex:p?0:-1,hidden:!p,style:{display:p?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:u.content},`${Y[d]??`${u.key}__dup-${d}`}__panel`)})]})}function Qe(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Ie(a){return typeof a!="number"||a<=0}function un(a,e){return rn[a][e]}function bn(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function dn({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function pn(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function yn(a,e){if(!a)return e;try{return a.matches(":focus-visible")||e}catch{return e}}function Fe(a){if(typeof a=="string")return a.trim().length>0;if(typeof a=="number")return!0;if(Array.isArray(a))return a.some(n=>Fe(n));if(!b.isValidElement(a))return!1;const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?!1:typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?!0:Fe(e.children)}function _(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function vn(a,e){const n=fn(a.trim().replace(/[_-]+/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"));return n.length>0&&/[0-9A-Za-z]/.test(n)?n:`Tab ${e+1}`}function wn(a,e){const n=new Map;return e.map(s=>{const r=mn(s.key),l=(n.get(r)??0)+1;n.set(r,l);const f=l>1?`${r}-${l}`:r;return{tabId:`${a}-tab-${f}`,panelId:`${a}-panel-${f}`}})}function gn(a){const e=new Map;return a.map(n=>{const s=e.get(n.key)??0;return e.set(n.key,s+1),s===0?n.key:`${n.key}__dup-${s}`})}function mn(a){const e=encodeURIComponent(a).replace(/%/g,"_");return e.length>0?e:"item"}function fn(a){return a.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onTabKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const C=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],O={color:"var(--aurora-text-secondary)",fontSize:13},Xe="min(100%, 620px)",ea="Home End PageDown PageUp ArrowLeft ArrowRight",aa="Home End PageDown PageUp ArrowUp ArrowDown",ta="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",na="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function g({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(Ge,{maxWidth:Xe,gap:e,children:a})}):o.jsx(Ge,{maxWidth:Xe,gap:e,children:a})}function oa(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}function sa(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const Nn={title:"Data/Tabs",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:C,defaultValue:"spec"}},G={};function Tn(){const[a,e]=b.useState("build");return o.jsxs(g,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Current stage"}),o.jsx(U,{tone:"default",children:a})]}),o.jsx(y,{items:C,value:a,onValueChange:e})]})}function xn(){const[a,e]=b.useState(!1);return o.jsxs(g,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(y,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function hn(){const[a,e]=b.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(g,{children:[o.jsx(Yt,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(y,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const J={render:()=>o.jsx(Tn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await i.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},Z={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(y,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});m.mouseDown(n),n.focus(),await i.click(s),await i.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},Q={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Pointer focus keeps ring hidden, then reverse keyboard navigation (Shift+Tab) restores focus-visible ring for the active tab."}),o.jsx(y,{ariaLabel:"Shift+Tab focus ring fallback tabs",defaultValue:"spec",items:C}),o.jsx("button",{type:"button",children:"After tabs"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"After tabs"}),r=e.getByRole("tabpanel");m.mouseDown(n),n.focus(),await i.click(s),await i.tab({shift:!0}),await t(r).toHaveFocus(),await i.tab({shift:!0}),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},X={render:()=>o.jsx(xn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});m.mouseDown(s),await i.click(n);const r=e.getByRole("tab",{name:"Build"});await t(r).toBeDisabled(),await t(r.style.transform).toContain("translateY(0"),await t(r.style.boxShadow).toBe("none")}},ee={render:()=>o.jsx(hn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await i.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},ae={render:function(){const[e,n]=b.useState("spec"),[s,r]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsxs("p",{style:x,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(y,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:C,onValueChange:l=>{n(l),r(f=>f+1)}})]})},play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Build"}),l=e.getByTestId("primary-pointer-active"),f=e.getByTestId("primary-pointer-count");await i.click(n),await i.tab(),await t(s).toHaveFocus(),await i.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(r.style.boxShadow).toContain("0 0 0 3px"),m.mouseDown(r,{button:2}),m.mouseUp(r,{button:2}),await t(r.style.boxShadow).toContain("0 0 0 3px"),await t(l).toHaveTextContent("spec"),await t(f).toHaveTextContent("0"),m.mouseDown(r,{button:0}),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),m.pointerCancel(r),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(l).toHaveTextContent("spec"),await t(f).toHaveTextContent("0"),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(1px)")}),r.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await H(()=>{t(r.style.transform).toContain("translateY(0")}),await t(l).toHaveTextContent("spec"),await t(f).toHaveTextContent("0"),await i.click(r),await t(l).toHaveTextContent("build"),await t(f).toHaveTextContent("1")}},te={render:()=>o.jsx(y,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},ne={render:()=>o.jsx(y,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true"),await t(n).toHaveAttribute("tabindex","0");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach((r,l)=>{t(r).toBeDisabled(),t(r).not.toHaveAttribute("aria-keyshortcuts"),t(r).toHaveAttribute("aria-selected",l===0?"true":"false"),t(r).toHaveAttribute("tabindex","-1")}),await t(e.getByRole("tabpanel",{name:"Spec"})).toBeVisible(),await t(e.getByText("Specification stage is disabled.")).toBeInTheDocument(),await i.tab(),await t(n).toHaveFocus()}},oe={render:()=>o.jsxs(g,{children:[o.jsx("button",{type:"button",children:"Before empty tabs"}),o.jsx(y,{ariaLabel:"Empty tabs",items:[]}),o.jsx("button",{type:"button",children:"After empty tabs"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Empty tabs"});await t(n).not.toHaveAttribute("tabindex"),await t(n).not.toHaveAttribute("aria-disabled"),await t(e.queryByRole("tab")).not.toBeInTheDocument(),await t(e.queryByRole("tabpanel")).not.toBeInTheDocument(),await i.tab(),await t(e.getByRole("button",{name:"Before empty tabs"})).toHaveFocus(),await i.tab(),await t(e.getByRole("button",{name:"After empty tabs"})).toHaveFocus()}},se={render:()=>o.jsx(y,{ariaLabel:"Single actionable tab example",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is blocked.",disabled:!0},{key:"release",label:"Release",content:"Release stage is blocked.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Security Review"}),r=e.getByRole("tab",{name:"Release"});await t(n).not.toHaveAttribute("aria-keyshortcuts"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),n.focus(),await i.keyboard("{ArrowRight}"),await i.keyboard("{Enter}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await t(e.getByText("Specification stage is active.")).toBeInTheDocument()}},re={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(y,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByRole("tab",{name:"Blocked"});await i.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-keyshortcuts",ea),await t(s).toHaveAttribute("aria-keyshortcuts",ea),await t(r).toHaveAttribute("aria-disabled","true"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await i.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await i.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await i.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),m.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),m.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},ie={render:()=>o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(y,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await i.click(s),await i.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await i.click(n),await i.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function kn(){const a=b.useId();return o.jsxs(g,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(y,{ariaLabelledBy:a,items:C,defaultValue:"spec"})]})}function Rn(){return o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(y,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Bn(){return o.jsxs(g,{children:[o.jsxs("p",{style:x,children:["Non-text tabs without explicit naming still get fallback accessible names derived from",o.jsx("code",{children:" items[].key "})," and normalized for readability to avoid unnamed tab controls in production."]}),o.jsx(y,{ariaLabel:"Fallback naming tabs",defaultValue:"overview-stage",items:[{key:"overview-stage",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),content:"Overview panel keeps fallback naming deterministic."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}function Sn(){return o.jsxs(g,{gap:10,children:[o.jsxs("p",{style:x,children:["Icon tabs can bind to external visible headings with ",o.jsx("code",{children:"items[].ariaLabelledBy"}),"; when both naming props are present, ",o.jsx("code",{children:"ariaLabelledBy"})," takes precedence."]}),o.jsx("h3",{id:"tabs-icon-overview-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Navigation overview"}),o.jsx(y,{ariaLabel:"Icon labelledby tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Fallback overview label",ariaLabelledBy:"tabs-icon-overview-heading",content:"Overview panel binds icon tab naming to visible heading."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const ce={render:()=>o.jsx(kn,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},le={render:()=>o.jsx(Rn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},ue={render:()=>o.jsx(Bn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"overview stage"});await t(n).toHaveAttribute("aria-label","overview stage"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps fallback naming deterministic.")}},be={render:()=>o.jsx(Sn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-labelledby","tabs-icon-overview-heading"),await t(n).not.toHaveAttribute("aria-label"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel binds icon tab naming to visible heading.")}},de={render:()=>o.jsx(g,{children:o.jsx(y,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"}),r=e.getByRole("tab",{name:"Review"}),l=e.getByRole("tab",{name:"Release"});await i.click(s),await t(s).toHaveAttribute("aria-keyshortcuts",aa),await t(l).toHaveAttribute("aria-keyshortcuts",aa),await t(r).not.toHaveAttribute("aria-keyshortcuts"),m.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),m.keyDown(s,{key:"ArrowUp",metaKey:!0}),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await i.keyboard("{ArrowDown}"),await t(l).toHaveAttribute("aria-selected","true")}},pe={render:()=>o.jsxs(g,{dir:"rtl",children:[o.jsx("p",{style:x,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(y,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:C})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await i.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await i.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},ye={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(y,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",ta),await t(s).toHaveAttribute("aria-keyshortcuts",ta),await i.keyboard("{ArrowRight}");const r=e.getByRole("tab",{name:"Build"});await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await i.keyboard("{Shift>}{Enter}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await i.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await i.keyboard("{Shift>}{Space}{/Shift}"),await H(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},ve={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(y,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=v(a).getByRole("tab",{name:"Build"});m.keyDown(n,{key:"Enter",ctrlKey:!0}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),m.keyDown(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),m.keyUp(n,{key:"Enter"}),await H(()=>{t(n.style.transform).toContain("translateY(0")}),m.keyDown(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toBe("translateY(1px)")}),m.keyUp(n,{key:"Spacebar"}),await H(()=>{t(n.style.transform).toContain("translateY(0")})}};function Hn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Manual activation changes"}),o.jsx(U,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(y,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),s(l=>l+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function En(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Global shortcut guards that preempt keydown should keep tablist selection and roving focus stable."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Tab value changes"}),o.jsx(U,{tone:"default","data-testid":"managed-key-preempt-change-count",children:n})]}),o.jsx("div",{onKeyDownCapture:r=>r.preventDefault(),children:o.jsx(y,{ariaLabel:"Managed key preempt tabs",activationMode:"manual",value:a,onValueChange:r=>{e(r),s(l=>l+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})})]})}function An(){const[a,e]=b.useState(0),n=b.useMemo(()=>a%2===0?[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."}]:[{key:"lint",label:"Lint",content:"Lint stage."},{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."}],[a]);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Duplicate-key tabs should keep focused tab identity stable when a non-duplicate tab is prepended during rerender."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Refresh version"}),o.jsx(U,{tone:"default","data-testid":"tabs-duplicate-refresh-version",children:a})]}),o.jsx(Yt,{size:"sm",variant:"outline",onPointerDown:s=>s.preventDefault(),onMouseDown:s=>s.preventDefault(),onClick:()=>e(s=>s+1),children:"Refresh tabs list"}),o.jsx(y,{ariaLabel:"Duplicate key rerender stability tabs",defaultValue:"spec",items:n})]})}function Cn(){return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Duplicate-key tabs should keep hover, focus-ring, and pressed visuals scoped to the interacted duplicate occurrence."}),o.jsx(y,{ariaLabel:"Duplicate key interaction isolation tabs",defaultValue:"release",items:[{key:"build",label:"Build",content:"Build stage."},{key:"build",label:"Build backup",content:"Build backup stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}function Dn(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsx("p",{style:x,children:"Local tab key guards should be able to preempt managed navigation/activation keys."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Tab value changes"}),o.jsx(U,{tone:"default","data-testid":"managed-key-local-preempt-change-count",children:n})]}),o.jsx(y,{ariaLabel:"Managed key local preempt tabs",activationMode:"manual",value:a,onTabKeyDown:r=>{(r.key==="Enter"||r.key==="ArrowRight")&&r.preventDefault()},onValueChange:r=>{e(r),s(l=>l+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const we={render:()=>o.jsx(Hn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("tab",{name:"Release"}),l=e.getByTestId("manual-repeat-change-count");await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(l).toHaveTextContent("0"),await i.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(l).toHaveTextContent("0"),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(l).toHaveTextContent("1"),await i.keyboard("{ArrowRight}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),m.keyDown(r,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(l).toHaveTextContent("1"),await i.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(l).toHaveTextContent("2")}},ge={render:()=>o.jsx(An,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build backup"});m.click(e.getByRole("button",{name:"Refresh tabs list"})),await H(()=>{t(e.getByTestId("tabs-duplicate-refresh-version")).toHaveTextContent("1")}),await t(e.getByRole("tab",{name:"Build backup"})).toBe(n)}},me={render:()=>o.jsx(Cn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Build backup"});await i.hover(s),await t(s.getAttribute("style")).toContain("var(--aurora-accent-default) 52%"),await t(n.getAttribute("style")).not.toContain("var(--aurora-accent-default) 52%")}},fe={render:()=>o.jsx(En,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByTestId("managed-key-preempt-change-count");await i.click(n),await t(r).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0"),m.focus(s),m.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0")}},Te={render:()=>o.jsx(Dn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByTestId("managed-key-local-preempt-change-count");await i.click(n),await t(r).toHaveTextContent("0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),m.keyDown(n,{key:"ArrowRight"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0"),m.focus(s),m.keyDown(s,{key:"Enter"}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(r).toHaveTextContent("0")}},xe={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(y,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),r=e.getByRole("button",{name:"Outside focus target"});await i.click(n),await i.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await i.click(r),await t(r).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},he={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(y,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await i.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),oa(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),oa(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),sa(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),sa(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},ke={render:()=>o.jsxs(g,{children:[o.jsx("p",{style:x,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(y,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),r=e.getByRole("tab",{name:"Ship"});await i.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",na),await t(r).toHaveAttribute("aria-keyshortcuts",na),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{ArrowDown}"),await t(r).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await i.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function jn(){const[a,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs(g,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:O,children:"Value change events"}),o.jsx(U,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(y,{items:C,value:a,onValueChange:r=>{e(r),s(l=>l+1)}})]})}const Re={render:()=>o.jsx(jn,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),r=e.getByTestId("change-count");await i.click(n),await t(r).toHaveTextContent("0"),await i.click(s),await t(r).toHaveTextContent("1"),await i.click(s),await t(r).toHaveTextContent("1")}},Be={render:()=>o.jsx(y,{items:C,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),r=n.getAttribute("aria-controls"),l=s.getAttribute("aria-controls");await t(r).toBeTruthy(),await t(l).toBeTruthy(),await t(document.getElementById(r)).not.toBeNull(),await t(document.getElementById(l)).not.toBeNull();const f=document.getElementById(l);await t(f).toHaveAttribute("hidden"),await i.click(s),await t(f).not.toHaveAttribute("hidden")}};var ra,ia,ca;G.parameters={...G.parameters,docs:{...(ra=G.parameters)==null?void 0:ra.docs,source:{originalSource:"{}",...(ca=(ia=G.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,ba;J.parameters={...J.parameters,docs:{...(la=J.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ba=(ua=J.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var da,pa,ya;Z.parameters={...Z.parameters,docs:{...(da=Z.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ya=(pa=Z.parameters)==null?void 0:pa.docs)==null?void 0:ya.source}}};var va,wa,ga;Q.parameters={...Q.parameters,docs:{...(va=Q.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ga=(wa=Q.parameters)==null?void 0:wa.docs)==null?void 0:ga.source}}};var ma,fa,Ta;X.parameters={...X.parameters,docs:{...(ma=X.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(Ta=(fa=X.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var xa,ha,ka;ee.parameters={...ee.parameters,docs:{...(xa=ee.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(ka=(ha=ee.parameters)==null?void 0:ha.docs)==null?void 0:ka.source}}};var Ra,Ba,Sa;ae.parameters={...ae.parameters,docs:{...(Ra=ae.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Sa=(Ba=ae.parameters)==null?void 0:Ba.docs)==null?void 0:Sa.source}}};var Ha,Ea,Aa;te.parameters={...te.parameters,docs:{...(Ha=te.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Aa=(Ea=te.parameters)==null?void 0:Ea.docs)==null?void 0:Aa.source}}};var Ca,Da,ja;ne.parameters={...ne.parameters,docs:{...(Ca=ne.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(ja=(Da=ne.parameters)==null?void 0:Da.docs)==null?void 0:ja.source}}};var La,Ia,Fa;oe.parameters={...oe.parameters,docs:{...(La=oe.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Fa=(Ia=oe.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Pa,Ma,Va;se.parameters={...se.parameters,docs:{...(Pa=se.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Va=(Ma=se.parameters)==null?void 0:Ma.docs)==null?void 0:Va.source}}};var Ka,Na,Ua;re.parameters={...re.parameters,docs:{...(Ka=re.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Ua=(Na=re.parameters)==null?void 0:Na.docs)==null?void 0:Ua.source}}};var Oa,za,$a;ie.parameters={...ie.parameters,docs:{...(Oa=ie.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...($a=(za=ie.parameters)==null?void 0:za.docs)==null?void 0:$a.source}}};var Ya,qa,Wa;ce.parameters={...ce.parameters,docs:{...(Ya=ce.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(Wa=(qa=ce.parameters)==null?void 0:qa.docs)==null?void 0:Wa.source}}};var _a,Ga,Ja;le.parameters={...le.parameters,docs:{...(_a=le.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(Ja=(Ga=le.parameters)==null?void 0:Ga.docs)==null?void 0:Ja.source}}};var Za,Qa,Xa;ue.parameters={...ue.parameters,docs:{...(Za=ue.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(Xa=(Qa=ue.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var et,at,tt;be.parameters={...be.parameters,docs:{...(et=be.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(tt=(at=be.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};var nt,ot,st;de.parameters={...de.parameters,docs:{...(nt=de.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(ot=de.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,it,ct;pe.parameters={...pe.parameters,docs:{...(rt=pe.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ct=(it=pe.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,ut,bt;ye.parameters={...ye.parameters,docs:{...(lt=ye.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(bt=(ut=ye.parameters)==null?void 0:ut.docs)==null?void 0:bt.source}}};var dt,pt,yt;ve.parameters={...ve.parameters,docs:{...(dt=ve.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(pt=ve.parameters)==null?void 0:pt.docs)==null?void 0:yt.source}}};var vt,wt,gt;we.parameters={...we.parameters,docs:{...(vt=we.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=we.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var mt,ft,Tt;ge.parameters={...ge.parameters,docs:{...(mt=ge.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(Tt=(ft=ge.parameters)==null?void 0:ft.docs)==null?void 0:Tt.source}}};var xt,ht,kt;me.parameters={...me.parameters,docs:{...(xt=me.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(kt=(ht=me.parameters)==null?void 0:ht.docs)==null?void 0:kt.source}}};var Rt,Bt,St;fe.parameters={...fe.parameters,docs:{...(Rt=fe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(St=(Bt=fe.parameters)==null?void 0:Bt.docs)==null?void 0:St.source}}};var Ht,Et,At;Te.parameters={...Te.parameters,docs:{...(Ht=Te.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(At=(Et=Te.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var Ct,Dt,jt;xe.parameters={...xe.parameters,docs:{...(Ct=xe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(jt=(Dt=xe.parameters)==null?void 0:Dt.docs)==null?void 0:jt.source}}};var Lt,It,Ft;he.parameters={...he.parameters,docs:{...(Lt=he.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Ft=(It=he.parameters)==null?void 0:It.docs)==null?void 0:Ft.source}}};var Pt,Mt,Vt;ke.parameters={...ke.parameters,docs:{...(Pt=ke.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Vt=(Mt=ke.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};var Kt,Nt,Ut;Re.parameters={...Re.parameters,docs:{...(Kt=Re.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Ut=(Nt=Re.parameters)==null?void 0:Nt.docs)==null?void 0:Ut.source}}};var Ot,zt,$t;Be.parameters={...Be.parameters,docs:{...(Ot=Be.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...($t=(zt=Be.parameters)==null?void 0:zt.docs)==null?void 0:$t.source}}};const Un=["Default","Controlled","KeyboardFocusRingAfterPointer","KeyboardFocusRingShiftTabReentry","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","EmptyTabsSkipTabStop","SingleActionableTab","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","NonTextFallbackNaming","IconOnlyLabelledByPrecedence","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","DuplicateKeyRerenderStability","DuplicateKeyInteractionIsolation","ManagedKeysPreemptedByGlobalHandler","ManagedKeysPreemptedByLocalHandler","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{ne as AllTabsDisabled,Re as ChangeTelemetry,J as Controlled,Be as ControlsReferenceMountedPanels,G as Default,X as DisabledTabVisualReset,me as DuplicateKeyInteractionIsolation,ge as DuplicateKeyRerenderStability,oe as EmptyTabsSkipTabStop,le as IconOnlyLabelNaming,be as IconOnlyLabelledByPrecedence,he as ImeCompositionGuard,Z as KeyboardFocusRingAfterPointer,Q as KeyboardFocusRingShiftTabReentry,re as KeyboardNavigationGuide,ce as LabelledByHeading,fe as ManagedKeysPreemptedByGlobalHandler,Te as ManagedKeysPreemptedByLocalHandler,ye as ManualActivation,ve as ManualActivationPressedFeedback,we as ManualActivationRepeatGuard,xe as ManualFocusResetOnBlur,ke as ManualVerticalActivation,ie as NoLoopNavigation,ue as NonTextFallbackNaming,ae as PrimaryPointerOnlyPressedState,ee as RemovedActiveTabFallback,pe as RtlKeyboardNavigation,se as SingleActionableTab,de as Vertical,te as WithDisabledTab,Un as __namedExportsOrder,Nn as default};
