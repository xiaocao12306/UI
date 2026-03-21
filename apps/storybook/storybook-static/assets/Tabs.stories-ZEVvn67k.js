import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-BWu4c2F4.js";import{B as Ja}from"./Button-Cn1nutIP.js";import{B as ve}from"./Badge-ZJmMstsz.js";import{within as v,expect as t,userEvent as c,fireEvent as E,waitFor as Be}from"./index-DgAF9SIF.js";import{s as R,S as Se}from"./storyShowcase-Bw5VyCj0.js";function He(a){return a.reduce((e,n,s)=>(e[n.key]=s,e),{})}function de(a,e,n,s){var y,x;if(a.length===0)return-1;const i=(y=a[e])!=null&&y.disabled?-1:e;let u=e;for(let k=0;k<a.length;k+=1){if(u+=n,s)u<0?u=a.length-1:u>=a.length&&(u=0);else if(u<0||u>=a.length)return i;if(!((x=a[u])!=null&&x.disabled))return u}return i}function Qa(a){return a.findIndex(e=>!e.disabled)}function Xa(a){var e;for(let n=a.length-1;n>=0;n-=1)if(!((e=a[n])!=null&&e.disabled))return n;return-1}function Za(a,e,n){var s,i,u,y;if(!Array.isArray(a)||a.length===0||typeof e!="number"||Number.isNaN(e))return n;for(let x=0;x<a.length;x+=1){const k=e+x;if(k>=0&&k<a.length&&!((s=a[k])!=null&&s.disabled))return((i=a[k])==null?void 0:i.key)??n;if(x===0)continue;const B=e-x;if(B>=0&&B<a.length&&!((u=a[B])!=null&&u.disabled))return((y=a[B])==null?void 0:y.key)??n}return n}function p({items:a,value:e,defaultValue:n,ariaLabel:s="Tabs",ariaLabelledBy:i,orientation:u="horizontal",activationMode:y="automatic",loop:x=!0,onValueChange:k}){var fe;const B=b.useId(),re=b.useRef(null),ie=b.useRef([]),F=b.useRef(null),S=b.useRef(null),A=b.useRef(null);b.useRef(null),b.useRef(null),b.useRef(null);const j=b.useRef(!0),[Ka,Na]=b.useState(()=>He(a)),V=(fe=a.find(r=>!r.disabled))==null?void 0:fe.key,[ce,we]=b.useState(n??V),[Oa,le]=b.useState(null),[qa,D]=b.useState(null),[Wa,L]=b.useState(null),Ua=pe(s,"Tabs"),ge=pe(i);b.useEffect(()=>{},[a]),b.useEffect(()=>{},[a]),b.useEffect(()=>{Na(He(a))},[a]),b.useEffect(()=>{},[a,e]),b.useEffect(()=>{var m;const r=((m=re.current)==null?void 0:m.ownerDocument)??document,d=C=>{C.metaKey||C.altKey||C.ctrlKey||(j.current=!0)},g=()=>{j.current=!1};return r.addEventListener("keydown",d,!0),r.addEventListener("pointerdown",g,!0),r.addEventListener("mousedown",g,!0),r.addEventListener("touchstart",g,!0),()=>{r.removeEventListener("keydown",d,!0),r.removeEventListener("pointerdown",g,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0)}},[]);const M=e??ce,ue=a.find(r=>r.key===M),h=ue&&!ue.disabled?M:e===void 0&&M&&!ue?Za(a,Ka[M],V):V,[me,I]=b.useState(h),za=a.some(r=>r.key===me&&!r.disabled)?me:h;b.useEffect(()=>{e===void 0&&h!==ce&&we(h)},[h,ce,e]),b.useEffect(()=>{I(h)},[h]),b.useEffect(()=>()=>{S.current!==null&&(A.current??window).clearTimeout(S.current)},[]),b.useEffect(()=>{const r=new Set(a.filter(d=>!d.disabled).map(d=>d.key));le(d=>d&&!r.has(d)?null:d),D(d=>d&&!r.has(d)?null:d),L(d=>d&&!r.has(d)?null:d)},[a]);const Ga=b.useCallback(()=>{F.current=null,S.current!==null&&((A.current??window).clearTimeout(S.current),S.current=null),A.current=null},[]),be=b.useCallback(r=>{const d=a.find(g=>g.key===r);!d||d.disabled||r===h||(e===void 0&&we(r),k==null||k(r))},[h,a,k,e]);return o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("div",{ref:re,role:"tablist","aria-label":ge?void 0:Ua,"aria-labelledby":ge,"aria-orientation":u,"aria-disabled":V?void 0:!0,onBlurCapture:r=>{const d=r.relatedTarget;d&&r.currentTarget.contains(d)||I(h)},style:{display:"flex",gap:6,flexWrap:u==="horizontal"?"wrap":"nowrap",flexDirection:u==="vertical"?"column":"row"},children:a.map((r,d)=>{const g=r.key===h,m=!!r.disabled,C=!m&&Oa===r.key,Te=!m&&qa===r.key,xe=!m&&Wa===r.key,$a=C||xe,Ya=pe(r.ariaLabel);return o.jsx("button",{"data-aurora-reduced-motion":"transition",ref:l=>{ie.current[d]=l},id:`${B}-tab-${d}`,type:"button",role:"tab","aria-label":Ya,"aria-selected":g,"aria-controls":`${B}-panel-${d}`,"aria-disabled":m||void 0,"aria-keyshortcuts":y==="manual"&&!m?"Enter Space":void 0,tabIndex:za===r.key?0:-1,disabled:m,onClick:l=>{I(r.key);const T=y==="manual"&&l.detail===0&&F.current===r.key;Ga(),!T&&be(r.key)},onMouseEnter:()=>{m||le(r.key)},onMouseLeave:()=>{le(l=>l===r.key?null:l),D(l=>l===r.key?null:l)},onMouseDown:l=>{m||l.button===0&&(j.current=!1,L(T=>T===r.key?null:T),D(r.key))},onMouseUp:l=>{l.button===0&&D(T=>T===r.key?null:T)},onFocus:()=>{if(I(r.key),m){L(l=>l===r.key?null:l);return}L(l=>ot(ie.current[d],j.current)?r.key:l===r.key?null:l)},onBlur:()=>{L(l=>l===r.key?null:l),D(l=>l===r.key?null:l)},onKeyDown:l=>{if(j.current=!0,l.altKey||l.ctrlKey||l.metaKey)return;if(y==="manual"&&et(l.key)){if(at(l)||(l.preventDefault(),l.repeat))return;F.current=r.key;const f=l.currentTarget.ownerDocument.defaultView??window;S.current!==null&&(A.current??f).clearTimeout(S.current),A.current=f,S.current=f.setTimeout(()=>{F.current=null,S.current=null,A.current=null},0),be(r.key);return}const T=f=>{var he,Re;const P=(he=a[f])==null?void 0:he.key;P&&(I(P),y==="automatic"&&be(P),(Re=ie.current[f])==null||Re.focus())};if(l.key==="Home"){l.preventDefault();const f=Qa(a);T(f);return}if(l.key==="End"){l.preventDefault();const f=Xa(a);T(f);return}if(l.key==="PageDown"){l.preventDefault();const f=de(a,d,1,x);T(f);return}if(l.key==="PageUp"){l.preventDefault();const f=de(a,d,-1,x);T(f);return}const ke=tt({orientation:u,key:l.key,isRtl:u==="horizontal"&&nt(re.current)});if(!ke)return;l.preventDefault();const _a=de(a,d,ke,x);T(_a)},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:g?"1px solid var(--aurora-accent-default)":$a?"1px solid color-mix(in srgb, var(--aurora-accent-default) 52%, var(--aurora-border-default))":"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":Te?"color-mix(in srgb, var(--aurora-surface-elevated) 70%, var(--aurora-surface-default))":C?"color-mix(in srgb, var(--aurora-surface-elevated) 86%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:m?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:m?"not-allowed":"pointer",boxShadow:xe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 42%, transparent)":"none",transform:Te?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.label},r.key)})}),a.map((r,d)=>{const g=r.key===h;return o.jsx("div",{id:`${B}-panel-${d}`,role:"tabpanel","aria-labelledby":`${B}-tab-${d}`,tabIndex:g?0:-1,hidden:!g,style:{display:g?void 0:"none",border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:r.content},r.key)})]})}function et(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function at(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function tt({orientation:a,key:e,isRtl:n}){if(a==="vertical")return e==="ArrowDown"?1:e==="ArrowUp"?-1:void 0;if(e==="ArrowRight")return n?-1:1;if(e==="ArrowLeft")return n?1:-1}function nt(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const n=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return n?n.getComputedStyle(a).direction==="rtl":!1}function ot(a,e){if(!a)return e;try{return a.matches(":focus-visible")}catch{return e}}function pe(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}p.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:'"automatic" | "manual"',elements:[{name:"literal",value:'"automatic"'},{name:"literal",value:'"manual"'}]},description:"",defaultValue:{value:'"automatic"',computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const H=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],ye={color:"var(--aurora-text-secondary)",fontSize:13},Ee="min(100%, 620px)";function w({children:a,gap:e=12,dir:n}){return n?o.jsx("div",{dir:n,children:o.jsx(Se,{maxWidth:Ee,gap:e,children:a})}):o.jsx(Se,{maxWidth:Ee,gap:e,children:a})}function Ae(a,e){const n=new KeyboardEvent("keydown",{key:e,bubbles:!0});Object.defineProperty(n,"isComposing",{value:!0}),Object.defineProperty(n,"keyCode",{value:229}),a.dispatchEvent(n)}const mt={title:"Data/Tabs",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support horizontal/vertical keyboard navigation (Arrow/Home/End/PageUp/PageDown) and theme-aware state styling for data-heavy dashboards."}}},args:{items:H,defaultValue:"spec"}},K={};function st(){const[a,e]=b.useState("build");return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ye,children:"Current stage"}),o.jsx(ve,{tone:"default",children:a})]}),o.jsx(p,{items:H,value:a,onValueChange:e})]})}function rt(){const[a,e]=b.useState(!1);return o.jsxs(w,{children:[o.jsx("button",{type:"button",onClick:()=>e(!0),children:"Disable Build tab"}),o.jsx(p,{ariaLabel:"Disable visual reset tabs",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"build",label:"Build",content:"Build stage is active.",disabled:a},{key:"release",label:"Release",content:"Release stage is active."}]})]})}function it(){const[a,e]=b.useState(!1),n=a?[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}]:[{key:"spec",label:"Spec",content:"Spec stage remains available."},{key:"build",label:"Build",content:"Build stage is active before removal."},{key:"release",label:"Release",content:"Release stage becomes the nearest fallback."}];return o.jsxs(w,{children:[o.jsx(Ja,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Remove Build tab"}),o.jsx(p,{ariaLabel:"Removal fallback tabs",defaultValue:"build",items:n})]})}const N={render:()=>o.jsx(st,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Release"}),s=e.getByRole("tab",{name:"Spec"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),await t(n).toHaveFocus(),await c.keyboard("{Home}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus()}},O={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:R,children:"Pointer focus keeps ring hidden, then keyboard Tab navigation restores focus-visible ring for the active tab."}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Focus ring fallback tabs",defaultValue:"spec",items:H})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("button",{name:"Before tabs"});E.mouseDown(n),n.focus(),await c.click(s),await c.tab(),await t(n).toHaveFocus(),await t(n.style.boxShadow).toContain("0 0 0 3px")}},q={render:()=>o.jsx(rt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Disable Build tab"}),s=e.getByRole("tab",{name:"Build"});E.mouseDown(s),await c.click(n);const i=e.getByRole("tab",{name:"Build"});await t(i).toBeDisabled(),await t(i.style.transform).toContain("translateY(0"),await t(i.style.boxShadow).toBe("none")}},W={render:()=>o.jsx(it,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Remove Build tab"});await t(e.getByRole("tab",{name:"Build"})).toHaveAttribute("aria-selected","true"),await c.click(n);const s=e.getByRole("tab",{name:"Release"});await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("tabindex","0"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage becomes the nearest fallback.")}},U={render:function(){const[e,n]=b.useState("spec"),[s,i]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("p",{style:R,children:["Active tab: ",o.jsx("strong",{"data-testid":"primary-pointer-active",children:e})," | Change count: ",o.jsx("strong",{"data-testid":"primary-pointer-count",children:s})]}),o.jsx("button",{type:"button",children:"Before tabs"}),o.jsx(p,{ariaLabel:"Primary pointer tabs",value:e,activationMode:"manual",items:H,onValueChange:u=>{n(u),i(y=>y+1)}})]})},play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("button",{name:"Before tabs"}),s=e.getByRole("tab",{name:"Spec"}),i=e.getByRole("tab",{name:"Build"}),u=e.getByTestId("primary-pointer-active"),y=e.getByTestId("primary-pointer-count");await c.click(n),await c.tab(),await t(s).toHaveFocus(),await c.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(i.style.boxShadow).toContain("0 0 0 3px"),E.mouseDown(i,{button:2}),E.mouseUp(i,{button:2}),await t(i.style.boxShadow).toContain("0 0 0 3px"),await t(u).toHaveTextContent("spec"),await t(y).toHaveTextContent("0"),await c.click(i),await t(u).toHaveTextContent("build"),await t(y).toHaveTextContent("1")}},z={render:()=>o.jsx(p,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},G={render:()=>o.jsx(p,{ariaLabel:"All disabled release tabs",activationMode:"manual",items:[{key:"spec",label:"Spec",content:"Specification stage is disabled.",disabled:!0},{key:"release",label:"Release",content:"Release stage is disabled.",disabled:!0}]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"All disabled release tabs"});await t(n).toHaveAttribute("aria-disabled","true");const s=e.getAllByRole("tab");await t(s).toHaveLength(2),s.forEach(i=>{t(i).toBeDisabled(),t(i).not.toHaveAttribute("aria-keyshortcuts"),t(i).toHaveAttribute("aria-selected","false"),t(i).toHaveAttribute("tabindex","-1")})}},$={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:R,children:"Keyboard: horizontal tabs use ArrowLeft/ArrowRight, vertical tabs use ArrowUp/ArrowDown. Home jumps to first enabled tab, End jumps to last enabled tab, and PageUp/PageDown move to the previous/next enabled tab."}),o.jsx(p,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByRole("tab",{name:"Blocked"});await c.click(n),await t(n).toHaveAttribute("aria-selected","true"),await t(i).toHaveAttribute("aria-disabled","true"),await c.keyboard("{End}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await c.keyboard("{PageUp}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),await c.keyboard("{PageDown}"),await t(s).toHaveAttribute("aria-selected","true"),await t(s).toHaveFocus(),await c.keyboard("{Home}"),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),E.keyDown(n,{key:"End",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus(),E.keyDown(n,{key:"PageDown",ctrlKey:!0}),await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveFocus()}},Y={render:()=>o.jsxs(w,{children:[o.jsxs("p",{style:R,children:["Set ",o.jsx("code",{children:"loop={false}"})," to keep Arrow navigation at tablist boundaries instead of wrapping."]}),o.jsx(p,{ariaLabel:"No loop tabs",defaultValue:"spec",loop:!1,items:H})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(s),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await c.click(n),await c.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}};function ct(){const a=b.useId();return o.jsxs(w,{gap:10,children:[o.jsx("h3",{id:a,style:{margin:0},children:"Release Stages"}),o.jsx(p,{ariaLabelledBy:a,items:H,defaultValue:"spec"})]})}function lt(){return o.jsxs(w,{children:[o.jsxs("p",{style:R,children:["Icon tabs should expose explicit naming through ",o.jsx("code",{children:"items[].ariaLabel"})," so keyboard and screen-reader navigation stay clear."]}),o.jsx(p,{ariaLabel:"Icon label tabs",defaultValue:"overview",items:[{key:"overview",label:o.jsx("span",{"aria-hidden":"true",children:"🧭"}),ariaLabel:"Navigation overview",content:"Overview panel keeps icon-only tab naming explicit."},{key:"release",label:"Release",content:"Release panel remains text-labeled."}]})]})}const _={render:()=>o.jsx(ct,{}),play:async({canvasElement:a})=>{const e=v(a);await t(e.getByRole("tablist",{name:"Release Stages"})).toBeInTheDocument()}},J={render:()=>o.jsx(lt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Navigation overview"});await t(n).toHaveAttribute("aria-selected","true"),await t(n).toHaveAttribute("aria-controls"),await t(e.getByRole("tabpanel")).toHaveTextContent("Overview panel keeps icon-only tab naming explicit.")}},Q={render:()=>o.jsx(w,{children:o.jsx(p,{ariaLabel:"Vertical workflow tabs",orientation:"vertical",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tablist",{name:"Vertical workflow tabs"});await t(n).toHaveAttribute("aria-orientation","vertical");const s=e.getByRole("tab",{name:"Spec"});await c.click(s),await c.keyboard("{ArrowDown}"),await t(e.getByRole("tab",{name:"Release"})).toHaveAttribute("aria-selected","true")}},X={render:()=>o.jsxs(w,{dir:"rtl",children:[o.jsx("p",{style:R,children:"In RTL layouts, horizontal ArrowRight moves to the previous tab and ArrowLeft moves to the next tab."}),o.jsx(p,{ariaLabel:"RTL workflow tabs",defaultValue:"spec",items:H})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Token contract, component API"),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","true"),await c.keyboard("{ArrowLeft}"),await t(n).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true")}},Z={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:R,children:"Manual mode keeps panel selection stable while arrows move focus; press Enter or Space to activate."}),o.jsx(p,{ariaLabel:"Manual activation tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),await c.keyboard("{ArrowRight}");const i=e.getByRole("tab",{name:"Build"});await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{Shift>}{Enter}{/Shift}"),await Be(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Build stage.")}),await c.keyboard("{End}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),s.focus(),await c.keyboard("{Shift>}{Space}{/Shift}"),await Be(()=>{t(e.getByRole("tabpanel")).toHaveTextContent("Release stage.")})}};function ut(){const[a,e]=b.useState("spec"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsx("p",{style:R,children:"Manual activation ignores repeated Enter/Space keydown so long-press does not trigger duplicate value changes."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ye,children:"Manual activation changes"}),o.jsx(ve,{tone:"default","data-testid":"manual-repeat-change-count",children:n})]}),o.jsx(p,{ariaLabel:"Manual repeat guard tabs",activationMode:"manual",value:a,onValueChange:i=>{e(i),s(u=>u+1)},items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]})}const ee={render:()=>o.jsx(ut,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("tab",{name:"Release"}),u=e.getByTestId("manual-repeat-change-count");await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),E.keyDown(s,{key:"Enter",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(u).toHaveTextContent("0"),await c.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await c.keyboard("{ArrowRight}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),E.keyDown(i,{key:" ",repeat:!0}),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(u).toHaveTextContent("1"),await c.keyboard("{Space}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Release stage."),await t(u).toHaveTextContent("2")}},ae={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:R,children:"In manual mode, moving focus with arrows does not change selection. After leaving the tablist, roving focus returns to the selected tab for the next keyboard entry."}),o.jsx(p,{ariaLabel:"Manual blur reset tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]}),o.jsx("button",{type:"button",children:"Outside focus target"})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"}),i=e.getByRole("button",{name:"Outside focus target"});await c.click(n),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(n).toHaveAttribute("aria-selected","true"),await t(s).toHaveAttribute("aria-selected","false"),await t(n).toHaveAttribute("tabindex","-1"),await t(s).toHaveAttribute("tabindex","0"),await c.click(i),await t(i).toHaveFocus(),await t(n).toHaveAttribute("tabindex","0"),await t(s).toHaveAttribute("tabindex","-1")}},te={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:R,children:"In manual mode, Enter and Space are ignored while IME composition is active, so CJK confirmation does not activate a tab by accident."}),o.jsx(p,{ariaLabel:"Manual activation IME guard tabs",activationMode:"manual",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage."},{key:"build",label:"Build",content:"Build stage."},{key:"release",label:"Release",content:"Release stage."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Build"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await c.keyboard("{ArrowRight}"),await t(s).toHaveFocus(),await t(s).toHaveAttribute("aria-selected","false"),Ae(s,"Enter"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),Ae(s,"Space"),await t(e.getByRole("tabpanel")).toHaveTextContent("Specification stage."),await t(s).toHaveAttribute("aria-selected","false"),s.focus(),await t(s).toHaveFocus(),await c.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Build stage."),await t(s).toHaveAttribute("aria-selected","true")}},ne={render:()=>o.jsxs(w,{children:[o.jsx("p",{style:R,children:"Vertical + manual mode keeps selection stable while ArrowUp/ArrowDown move focus; Enter/Space activates."}),o.jsx(p,{ariaLabel:"Manual vertical release tabs",orientation:"vertical",activationMode:"manual",defaultValue:"backlog",items:[{key:"backlog",label:"Backlog",content:"Backlog scope and release intent."},{key:"review",label:"Review",content:"Review and signoff.",disabled:!0},{key:"ship",label:"Ship",content:"Ship checklist and release notes."}]})]}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Backlog"}),s=e.getByRole("tab",{name:"Review"}),i=e.getByRole("tab",{name:"Ship"});await c.click(n),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await t(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(i).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(s).toHaveAttribute("aria-disabled","true"),await t(s).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{ArrowDown}"),await t(i).toHaveFocus(),await t(e.getByRole("tabpanel")).toHaveTextContent("Backlog scope and release intent."),await c.keyboard("{Enter}"),await t(e.getByRole("tabpanel")).toHaveTextContent("Ship checklist and release notes.")}};function bt(){const[a,e]=b.useState("build"),[n,s]=b.useState(0);return o.jsxs(w,{gap:10,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:ye,children:"Value change events"}),o.jsx(ve,{tone:"default","data-testid":"change-count",children:n})]}),o.jsx(p,{items:H,value:a,onValueChange:i=>{e(i),s(u=>u+1)}})]})}const oe={render:()=>o.jsx(bt,{}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Build"}),s=e.getByRole("tab",{name:"Release"}),i=e.getByTestId("change-count");await c.click(n),await t(i).toHaveTextContent("0"),await c.click(s),await t(i).toHaveTextContent("1"),await c.click(s),await t(i).toHaveTextContent("1")}},se={render:()=>o.jsx(p,{items:H,defaultValue:"spec"}),play:async({canvasElement:a})=>{const e=v(a),n=e.getByRole("tab",{name:"Spec"}),s=e.getByRole("tab",{name:"Release"}),i=n.getAttribute("aria-controls"),u=s.getAttribute("aria-controls");await t(i).toBeTruthy(),await t(u).toBeTruthy(),await t(document.getElementById(i)).not.toBeNull(),await t(document.getElementById(u)).not.toBeNull();const y=document.getElementById(u);await t(y).toHaveAttribute("hidden"),await c.click(s),await t(y).not.toHaveAttribute("hidden")}};var Ce,je,De;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:"{}",...(De=(je=K.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var Le,Ie,Fe;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Fe=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var Ve,Me,Pe;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Pe=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Ke,Ne,Oe;q.parameters={...q.parameters,docs:{...(Ke=q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Oe=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var qe,We,Ue;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ue=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var ze,Ge,$e;U.parameters={...U.parameters,docs:{...(ze=U.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...($e=(Ge=U.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};var Ye,_e,Je;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=G.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;$.parameters={...$.parameters,docs:{...(ea=$.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=$.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,oa,sa;Y.parameters={...Y.parameters,docs:{...(na=Y.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(sa=(oa=Y.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var ra,ia,ca;_.parameters={..._.parameters,docs:{...(ra=_.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => <LabelledByHeadingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("tablist", {
      name: "Release Stages"
    })).toBeInTheDocument();
  }
}`,...(ca=(ia=_.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ua,ba;J.parameters={...J.parameters,docs:{...(la=J.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ba=(ua=J.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var da,pa,va;Q.parameters={...Q.parameters,docs:{...(da=Q.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(va=(pa=Q.parameters)==null?void 0:pa.docs)==null?void 0:va.source}}};var ya,wa,ga;X.parameters={...X.parameters,docs:{...(ya=X.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ga=(wa=X.parameters)==null?void 0:wa.docs)==null?void 0:ga.source}}};var ma,fa,Ta;Z.parameters={...Z.parameters,docs:{...(ma=Z.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(Ta=(fa=Z.parameters)==null?void 0:fa.docs)==null?void 0:Ta.source}}};var xa,ka,ha;ee.parameters={...ee.parameters,docs:{...(xa=ee.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(ha=(ka=ee.parameters)==null?void 0:ka.docs)==null?void 0:ha.source}}};var Ra,Ba,Sa;ae.parameters={...ae.parameters,docs:{...(Ra=ae.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Sa=(Ba=ae.parameters)==null?void 0:Ba.docs)==null?void 0:Sa.source}}};var Ha,Ea,Aa;te.parameters={...te.parameters,docs:{...(Ha=te.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Aa=(Ea=te.parameters)==null?void 0:Ea.docs)==null?void 0:Aa.source}}};var Ca,ja,Da;ne.parameters={...ne.parameters,docs:{...(Ca=ne.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Da=(ja=ne.parameters)==null?void 0:ja.docs)==null?void 0:Da.source}}};var La,Ia,Fa;oe.parameters={...oe.parameters,docs:{...(La=oe.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Fa=(Ia=oe.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Va,Ma,Pa;se.parameters={...se.parameters,docs:{...(Va=se.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Pa=(Ma=se.parameters)==null?void 0:Ma.docs)==null?void 0:Pa.source}}};const ft=["Default","Controlled","KeyboardFocusRingAfterPointer","DisabledTabVisualReset","RemovedActiveTabFallback","PrimaryPointerOnlyPressedState","WithDisabledTab","AllTabsDisabled","KeyboardNavigationGuide","NoLoopNavigation","LabelledByHeading","IconOnlyLabelNaming","Vertical","RtlKeyboardNavigation","ManualActivation","ManualActivationRepeatGuard","ManualFocusResetOnBlur","ImeCompositionGuard","ManualVerticalActivation","ChangeTelemetry","ControlsReferenceMountedPanels"];export{G as AllTabsDisabled,oe as ChangeTelemetry,N as Controlled,se as ControlsReferenceMountedPanels,K as Default,q as DisabledTabVisualReset,J as IconOnlyLabelNaming,te as ImeCompositionGuard,O as KeyboardFocusRingAfterPointer,$ as KeyboardNavigationGuide,_ as LabelledByHeading,Z as ManualActivation,ee as ManualActivationRepeatGuard,ae as ManualFocusResetOnBlur,ne as ManualVerticalActivation,Y as NoLoopNavigation,U as PrimaryPointerOnlyPressedState,W as RemovedActiveTabFallback,X as RtlKeyboardNavigation,Q as Vertical,z as WithDisabledTab,ft as __namedExportsOrder,mt as default};
