import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as ot}from"./Button-BMxlc9Nj.js";import{B as we}from"./Badge-ZJmMstsz.js";import{within as v,expect as t,userEvent as c,fireEvent as x,waitFor as C}from"./index-DgAF9SIF.js";import{s as B,S as He}from"./storyShowcase-Bw5VyCj0.js";const Ee={horizontal:"Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",vertical:"Enter Space Home End PageDown PageUp ArrowUp ArrowDown"};function Ae(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function ve(a,e,n,s){var y,k;if(a.length===0)return-1;const i=(y=a[e])!=null&&y.disabled?-1:e;let u=e;for(let h=0;h<a.length;h+=1){if(u+=n,s)u<0?u=a.length-1:u>=a.length&&(u=0);else if(u<0||u>=a.length)return i;if(!((k=a[u])!=null&&k.disabled))return u}return i}function st(a){return a.findIndex(e=>!e.disabled)}function rt(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function it(a,e,n){var s,i,u,y;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let k=0;k<a.length;k+=1){const h=e+k;if(h>=0&&h<a.length&&!((s=a[h])!=null&&s.disabled))return((i=a[h])==null?void 0:i.key)??n;if(k===0)continue;const S=e-k;if(S>=0&&S<a.length&&!((u=a[S])!=null&&u.disabled))return((y=a[S])==null?void 0:y.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:i,orientation:u="horizontal",activationMode:y="automatic",loop:k=!0,onValueChange:h}){var xe;const S=b.useId(),ce=b.useRef(null),le=b.useRef([]),V=b.useRef(null),H=b.useRef(null),D=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const L=b.useRef(!0),[Ga,$a]=b.useState(()=>Ae(a)),M=(xe=a.find(r=>!r.disabled))==null?void 0:xe.key,[ue,me]=b.useState(n??M),[_a,be]=b.useState(null),[Ja,A]=b.useState(null),[Qa,F]=b.useState(null),Xa=ye(s,"Tabs"),fe=ye(i);b.useEffect(()=>{},[a]),b.useEffect(()=>{},[a]),b.useEffect(()=>{$a(Ae(a))},[a]),b.useEffect(()=>{},[a,e]),b.useEffect(()=>{var f;const r=((f=ce.current)==null?void 0:f.ownerDocument)??document,d=j=>{j.metaKey||j.altKey||j.ctrlKey||(L.current=!0)},g=()=>{L.current=!1};return r.addEventListener("keydown",d,!0),r.addEventListener("pointerdown",g,!0),r.addEventListener("mousedown",g,!0),r.addEventListener("touchstart",g,!0),()=>{r.removeEventListener("keydown",d,!0),r.removeEventListener("pointerdown",g,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0)}},[]);const P=e??ue,de=a.find(r=>r.key===P),R=de&&!de.disabled?P:e===void 0&&P&&!de?it(a,Ga[P],M):M,[Te,I]=b.useState(R),Za=a.some(r=>r.key===Te&&!r.disabled)?Te:R;b.useEffect(()=>{e===void 0&&R!==ue&&me(R)},[R,ue,e]),b.useEffect(()=>{I(R)},[R]),b.useEffect(()=>()=>{H.current!==null&&(D.current??window).clearTimeout(H.current)},[]),b.useEffect(()=>{const r=new Set(a.filter(d=>!d.disabled).map(d=>d.key));be(d=>d&&!r.has(d)?null:d),A(d=>d&&!r.has(d)?null:d),F(d=>d&&!r.has(d)?null:d)},[a]);const et=b.useCallback(()=>{V.current=null,H.current!==null&&((D.current??window).clearTimeout(H.current),H.current=null),D.current=null},[]),pe=b.useCallback(r=>{const d=a.find(g=>g.key===r);!d||d.disabled||r===R||(e===void 0&&me(r),h==null||h(r))},[R,a,h,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:ce,role:"tablist","aria-label":fe?void 0:Xa,"aria-labelledby":fe,"aria-orientation":u,"aria-disabled":M?void 0:!0,onBlurCapture:r=>{const d=r.relatedTarget;d&&r.currentTarget.contains(d)||I(R)},style:{display:"flex",gap:6,flexWrap:u==="horizontal"?"wrap":"nowrap",flexDirection:u==="vertical"?"column":"row"},children:a.map((r,d)=>{const g=r.key===R,f=!!r.disabled,j=!f&&_a===r.key,ke=!f&&Ja===r.key,he=!f&&Qa===r.key,at=j||he,tt=ye(r.ariaLabel);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:l=>{le.current[d]=l},id:`${S}-tab-${d}`,type:"button",role:"tab","aria-label":tt,"aria-selected":g,"aria-controls":`${S}-panel-${d}`,"aria-disabled":f||void 0,"aria-keyshortcuts":y==="manual"&&!f?ct(u):void 0,tabIndex:Za===r.key?0:-1,disabled:f,onClick:l=>{I(r.key);const m=y==="manual"&&l.detail===0&&V.current===r.key;et(),!m&&pe(r.key)},onMouseEnter:()=>{f||be(r.key)},onMouseLeave:()=>{be(l=>l===r.key?null:l),A(l=>l===r.key?null:l)},onMouseDown:l=>{f||l.button===0&&(L.current=!1,F(m=>m===r.key?null:m),A(r.key))},onMouseUp:l=>{l.button===0&&A(m=>m===r.key?null:m)},onFocus:()=>{if(I(r.key),f){F(l=>l===r.key?null:l);return}F(l=>dt(le.current[d],L.current)?r.key:l===r.key?null:l)},onBlur:()=>{F(l=>l===r.key?null:l),A(l=>l===r.key?null:l)},onKeyDown:l=>{if(L.current=!0,l.altKey||l.ctrlKey||l.metaKey)return;if(y==="manual"&&Ce(l.key)){if(lt(l)||(l.preventDefault(),l.repeat))return;A(r.key),V.current=r.key;const T=l.currentTarget.ownerDocument.defaultView??window;H.current!==null&&(D.current??T).clearTimeout(H.current),D.current=T,H.current=T.setTimeout(()=>{V.current=null,H.current=null,D.current=null},0),pe(r.key);return}const m=T=>{var Be,Se;const K=(Be=a[T])==null?void 0:Be.key;K&&(I(K),y==="automatic"&&pe(K),(Se=le.current[T])==null||Se.focus())};if(l.key==="Home"){l.preventDefault();const T=st(a);m(T);return}if(l.key==="End"){l.preventDefault();const T=rt(a);m(T);return}if(l.key==="PageDown"){l.preventDefault();const T=ve(a,d,1,k);m(T);return}if(l.key==="PageUp"){l.preventDefault();const T=ve(a,d,-1,k);m(T);return}const Re=ut({orientation:u,key:l.key,isRtl:u==="horizontal"&&bt(ce.current)});if(!Re)return;l.preventDefault();const nt=ve(a,d,Re,k);m(nt)},onKeyUp:l=>{Ce(l.key)&&A(m=>m===r.key?null:m)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:g?"1px solid var(--aurora-accent-default)":at?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":ke?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":j?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:f?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:f?"not-allowed":"pointer",boxShadow:he?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:ke?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),a.map((r,d)=>{const g=r.key===R;return o.jsx("div",{id:`${S}-panel-${d}`,role:"tabpanel","aria-labelledby":`${S}-tab-${d}`,tabIndex:g?0:-1,hidden:!g,style:{display:g?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function Ce(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function ct(a){return a==="vertical"?Ee.vertical:Ee.horizontal}function lt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ut({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function bt(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function dt(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}function ye(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const E=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],ge={color:"var(--aurora-text-secondary)",fontSize:13},De="min(100%, 620px)",je="Enter Space Home End PageDown PageUp ArrowLeft ArrowRight",Le="Enter Space Home End PageDown PageUp ArrowUp ArrowDown";function w({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(He,{maxWidth:De,gap:e,children:a})}):o.jsx(He,{maxWidth:De,gap:e,children:a})}function Fe(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const St={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:E,defaultValue:"spec"}},N={};function pt(){const[a,e]=b.useState("build");return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ge,children:"Current stage"}),o.jsx(we,{tone:"default",children:a})]}),o.jsx(p,{items:E,value:a,onValueChange:e})]})}function vt(){const[a,e]=b.useState(!1);return o.jsxs(w,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function yt(){const[a,e]=b.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(w,{children:[o.jsx(ot,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const U={render:()=>o.jsx(pt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await c.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},O={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:B,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:E})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});x.mouseDown(n),n.focus(),await c.click(s),await c.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},z={render:()=>o.jsx(vt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});x.mouseDown(s),await c.click(n);const i=e.getByRole("tab",{name:"Build"});await t(i).toBeDisabled(),await t(i.style.transform).toContain("translateY(0"),await t(i.style.boxShadow).toBe("none")}},q={render:()=>o.jsx(yt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await c.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},W={render:function(){const[e,n]=b.useState("spec"),[s,i]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("p",{style:B,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:E,onValueChange:u=>{n(u),i(y=>y+1)}})]})},play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"}),u=e.getByTestId("primary-pointer-active"),y=e.getByTestId("primary-pointer-count");await c.click(n),await c.tab(),await t(s).toHaveFocus(),await c.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(i.style.boxShadow).toContain("0 0 0 3px"),x.mouseDown(i,{button:2}),x.mouseUp(i,{button:2}),await t(i.style.boxShadow).toContain("0 0 0 3px"),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),await c.click(i),await t(u).toHaveTextContent("build"),await t(y).toHaveTextContent("1")}},Y={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},G={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach(i=>{t(i).toBeDisabled(),t(i).not.toHaveAttribute("aria-keyshortcuts"),t(i).toHaveAttribute("aria-selected","false"),t(i).toHaveAttribute("tabindex","-1")})}},$={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:B,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await c.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(i).toHaveAttribute("aria-disabled","true"),await c.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await c.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await c.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await c.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),x.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),x.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},_={render:()=>o.jsxs(w,{children:[o.jsxs("p",{style:B,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:E})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(s),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await c.click(n),await c.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function wt(){const a=b.useId();return o.jsxs(w,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:E,defaultValue:"spec"})]})}function gt(){return o.jsxs(w,{children:[o.jsxs("p",{style:B,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const J={render:()=>o.jsx(wt,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},Q={render:()=>o.jsx(gt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},X={render:()=>o.jsx(w,{children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"});await c.click(s),await c.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},Z={render:()=>o.jsxs(w,{dir:"rtl",children:[o.jsx("p",{style:B,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:E})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await c.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},ee={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:B,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts",je),await t(s).toHaveAttribute("aria-keyshortcuts",je),await c.keyboard("{ArrowRight}");const i=e.getByRole("tab",{name:"Build"});await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{Shift>}{Enter}{/Shift}"),await C(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await c.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await c.keyboard("{Shift>}{Space}{/Shift}"),await C(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}},ae={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:B,children:"Manual activation tab triggers expose pressed-state feedback while Enter/Space is held, and clear it on keyup."}),o.jsx(p,{ariaLabel:"Manual pressed feedback tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const n=v(a).getByRole("tab",{name:"Build"});x.keyDown(n,{key:"Enter",ctrlKey:!0}),await C(()=>{t(n.style.transform).toContain("translateY(0")}),x.keyDown(n,{key:"Enter"}),await C(()=>{t(n.style.transform).toBe("translateY(1px)")}),x.keyUp(n,{key:"Enter"}),await C(()=>{t(n.style.transform).toContain("translateY(0")}),x.keyDown(n,{key:"Spacebar"}),await C(()=>{t(n.style.transform).toBe("translateY(1px)")}),x.keyUp(n,{key:"Spacebar"}),await C(()=>{t(n.style.transform).toContain("translateY(0")})}};function mt(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:B,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ge,children:"Manual activation changes"}),o.jsx(we,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:i=>{e(i),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const te={render:()=>o.jsx(mt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("manual-repeat-change-count");await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),x.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await c.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await c.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),x.keyDown(i,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await c.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(u).toHaveTextContent("2")}},ne={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:B,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("button",{name:"Outside focus target"});await c.click(n),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await c.click(i),await t(i).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},oe={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:B,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),Fe(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Fe(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await c.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},se={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:B,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),i=e.getByRole("tab",{name:"Ship"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts",Le),await t(i).toHaveAttribute("aria-keyshortcuts",Le),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{ArrowDown}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await c.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function ft(){const[a,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ge,children:"Value change events"}),o.jsx(we,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:E,value:a,onValueChange:i=>{e(i),s(u=>u+1)}})]})}const re={render:()=>o.jsx(ft,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await c.click(n),await t(i).toHaveTextContent("0"),await c.click(s),await t(i).toHaveTextContent("1"),await c.click(s),await t(i).toHaveTextContent("1")}},ie={render:()=>o.jsx(p,{items:E,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=n.getAttribute("aria-controls"),u=s.getAttribute("aria-controls");await t(i).toBeTruthy(),await t(u).toBeTruthy(),await t(document.getElementById(i)).not.toBeNull(),await t(document.getElementById(u)).not.toBeNull();const y=document.getElementById(u);await t(y).toHaveAttribute("hidden"),await c.click(s),await t(y).not.toHaveAttribute("hidden")}};var Ie,Ve,Me;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:"{}",...(Me=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var Pe,Ke,Ne;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var Ue,Oe,ze;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(ze=(Oe=O.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var qe,We,Ye;z.parameters={...z.parameters,docs:{...(qe=z.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ye=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var Ge,$e,_e;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(_e=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:_e.source}}};var Je,Qe,Xe;W.parameters={...W.parameters,docs:{...(Je=W.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,ea,aa;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(aa=(ea=Y.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,oa;G.parameters={...G.parameters,docs:{...(ta=G.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(na=G.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var sa,ra,ia;$.parameters={...$.parameters,docs:{...(sa=$.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ia=(ra=$.parameters)==null?void 0:ra.docs)==null?void 0:ia.source}}};var ca,la,ua;_.parameters={..._.parameters,docs:{...(ca=_.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(ua=(la=_.parameters)==null?void 0:la.docs)==null?void 0:ua.source}}};var ba,da,pa;J.parameters={...J.parameters,docs:{...(ba=J.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(pa=(da=J.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var va,ya,wa;Q.parameters={...Q.parameters,docs:{...(va=Q.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(wa=(ya=Q.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var ga,ma,fa;X.parameters={...X.parameters,docs:{...(ga=X.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(fa=(ma=X.parameters)==null?void 0:ma.docs)==null?void 0:fa.source}}};var Ta,xa,ka;Z.parameters={...Z.parameters,docs:{...(Ta=Z.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(ka=(xa=Z.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var ha,Ra,Ba;ee.parameters={...ee.parameters,docs:{...(ha=ee.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(Ba=(Ra=ee.parameters)==null?void 0:Ra.docs)==null?void 0:Ba.source}}};var Sa,Ha,Ea;ae.parameters={...ae.parameters,docs:{...(Sa=ae.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Ea=(Ha=ae.parameters)==null?void 0:Ha.docs)==null?void 0:Ea.source}}};var Aa,Ca,Da;te.parameters={...te.parameters,docs:{...(Aa=te.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Da=(Ca=te.parameters)==null?void 0:Ca.docs)==null?void 0:Da.source}}};var ja,La,Fa;ne.parameters={...ne.parameters,docs:{...(ja=ne.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(Fa=(La=ne.parameters)==null?void 0:La.docs)==null?void 0:Fa.source}}};var Ia,Va,Ma;oe.parameters={...oe.parameters,docs:{...(Ia=oe.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(Ma=(Va=oe.parameters)==null?void 0:Va.docs)==null?void 0:Ma.source}}};var Pa,Ka,Na;se.parameters={...se.parameters,docs:{...(Pa=se.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Na=(Ka=se.parameters)==null?void 0:Ka.docs)==null?void 0:Na.source}}};var Ua,Oa,za;re.parameters={...re.parameters,docs:{...(Ua=re.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(za=(Oa=re.parameters)==null?void 0:Oa.docs)==null?void 0:za.source}}};var qa,Wa,Ya;ie.parameters={...ie.parameters,docs:{...(qa=ie.parameters)==null?void 0:qa.docs,source:{originalSource:`{
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
}`,...(Ya=(Wa=ie.parameters)==null?void 0:Wa.docs)==null?void 0:Ya.source}}};const Ht=["Default","Controlled","KeyboardFocusRingAfterPointer","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationPressedFeedback","ManualActivationRepeatGuard","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{G as AllTabsDisabled,re as ChangeTelemetry,U as Controlled,ie as ControlsReferenceMountedPanels,N as Default,z as DisabledTabVisualReset,Q as IconOnlyLabelNaming,oe as ImeCompositionGuard,O as KeyboardFocusRingAfterPointer,$ as KeyboardNavigationGuide,J as LabelledByHeading,ee as ManualActivation,ae as ManualActivationPressedFeedback,te as ManualActivationRepeatGuard,ne as ManualFocusResetOnBlur,se as ManualVerticalActivation,_ as NoLoopNavigation,W as PrimaryPointerOnlyPressedState,q as RemovedActiveTabFallback,Z as RtlKeyboardNavigation,X as Vertical,Y as WithDisabledTab,Ht as __namedExportsOrder,St as default};
