import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as w}from"./Button-rBVi27TD.js";import{h as kn}from"./DismissableLayer-0MVldSzJ.js";import{P as En}from"./Popover-BXRvYEtZ.js";import{within as y,expect as o,userEvent as v,fireEvent as l,waitFor as d}from"./index-DgAF9SIF.js";import{s as xn,a as Tn,b as Dn}from"./storyShowcase-Bw5VyCj0.js";const Rn={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Cn={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Sn=14,Ve=new WeakMap;function In(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function S(t){const e=Ve.get(t);if(e)return e;const n={escapeStack:[],visualStacks:In(),listeners:new Set};return Ve.set(t,n),n}function Re(t){S(t).listeners.forEach(n=>{n()})}function jn(t,e){const n=S(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function Ue(t,e){const n=S(t),r=n.escapeStack.lastIndexOf(e);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(e),Re(t)}function An(t,e){const n=S(t),r=n.escapeStack.lastIndexOf(e);r>=0&&(n.escapeStack.splice(r,1),Re(t))}function mn(t,e){const n=t.visualStacks[e],r=e.startsWith("bottom")?-1:1;n.forEach((i,p)=>{const D=n.length-1-p;i.style.setProperty("--aurora-toast-stack-offset",`${D*r*Sn}px`)})}function Ge(t,e,n){const r=S(t),i=r.visualStacks[n],p=i.lastIndexOf(e);p>=0&&i.splice(p,1),i.push(e),mn(r,n)}function Hn(t,e,n){const r=S(t),i=r.visualStacks[n],p=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(p<0)&&(i.splice(p,1),mn(r,n))}function We(t,e){const n=S(t);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function Fn(t){return t.isComposing?!0:t.keyCode===229}function u({open:t,title:e,description:n,action:r,tone:i="info",live:p,duration:D,pauseOnHover:g=!0,closeOnEscape:E=!0,onEscapeKeyDown:q,closeLabel:ge="Close toast",ariaLabel:be,ariaLabelledBy:he,position:I="bottom-right",onClose:K,onCloseReason:Y,onOpenChange:M}){const k=c.useRef(null);c.useRef(!1);const j=c.useRef(!0),Be=c.useRef(!1),R=c.useRef(null),N=c.useRef(null),O=c.useRef(0),P=De(r),C=D??(P?0:4e3),A=c.useRef(C),[fn,Ce]=c.useState(!1),[Se,L]=c.useState({hover:!1,focus:!1}),[ke,Ie]=c.useState(!1),[je,x]=c.useState(!1),[Ae,V]=c.useState(!1),[vn,wn]=c.useState(!1),He=fn||g&&(Se.hover||Se.focus),Fe=c.useId(),Oe=c.useId(),Pe=De(n),U=typeof he=="string"&&he.trim().length>0?he.trim():void 0,Le=U===void 0&&typeof be=="string"&&be.trim().length>0?be.trim():void 0,qe=Te(e),Ke=U?void 0:Le??(qe?void 0:"Toast"),gn=typeof ge=="string"&&ge.trim().length>0?ge.trim():"Close toast",G=c.useCallback(()=>{const s=k.current;wn(!!(t&&E&&s&&We(s.ownerDocument,s)))},[E,t]);c.useEffect(()=>{G()},[G]),c.useEffect(()=>{var m;const s=(m=k.current)==null?void 0:m.ownerDocument;if(s)return jn(s,G)},[G]),c.useEffect(()=>{const s=k.current;if(!t||!s)return;const m=s.ownerDocument;return Ue(m,s),Ge(m,s,I),()=>{An(m,s),Hn(m,s,I)}},[t,I]),c.useEffect(()=>{!t||!k.current||Re(k.current.ownerDocument)},[E,t]),c.useEffect(()=>{t||(L({hover:!1,focus:!1}),Ce(!1)),Be.current=!1},[t]),c.useEffect(()=>{var b;if(!t)return;const s=((b=k.current)==null?void 0:b.ownerDocument)??document,m=()=>{Ce(s.visibilityState==="hidden")};return m(),s.addEventListener("visibilitychange",m),()=>{s.removeEventListener("visibilitychange",m)}},[t]),c.useEffect(()=>{var h;if(!t)return;const s=((h=k.current)==null?void 0:h.ownerDocument)??document,m=B=>{B.metaKey||B.altKey||B.ctrlKey||(j.current=!0)},b=B=>{"button"in B&&!xe(B.button)||"ctrlKey"in B&&B.ctrlKey||(j.current=!1)};return s.addEventListener("keydown",m,!0),s.addEventListener("pointerdown",b,!0),s.addEventListener("mousedown",b,!0),s.addEventListener("touchstart",b,!0),()=>{s.removeEventListener("keydown",m,!0),s.removeEventListener("pointerdown",b,!0),s.removeEventListener("mousedown",b,!0),s.removeEventListener("touchstart",b,!0)}},[t]);const T=c.useCallback(()=>{R.current!==null&&((N.current??window).clearTimeout(R.current),R.current=null),N.current=null,O.current=0},[]),H=c.useCallback(s=>{Be.current||(Be.current=!0,T(),Y==null||Y(s),K==null||K(),M==null||M(!1))},[T,K,Y,M]),bn=c.useCallback(()=>{H("close-button")},[H]),Ye=c.useCallback(()=>{H("escape-key")},[H]),Ee=c.useCallback(()=>{H("timeout")},[H]),Me=c.useCallback(()=>{const s=k.current;if(!t||!s)return;const m=s.ownerDocument;Ue(m,s),Ge(m,s,I)},[t,I]),W=c.useCallback(s=>{var b;if(s<=0){Ee();return}T(),A.current=s,O.current=Date.now();const m=((b=k.current)==null?void 0:b.ownerDocument.defaultView)??window;N.current=m,R.current=m.setTimeout(()=>{R.current=null,N.current=null,O.current=0,A.current=0,Ee()},s)},[T,Ee]),Ne=c.useCallback(()=>{if(R.current===null||O.current===0)return;const s=Date.now()-O.current;A.current=Math.max(0,A.current-s),T()},[T]);if(c.useEffect(()=>{if(T(),A.current=C,!(!t||C<=0))return W(C),()=>{T()}},[T,t,C,W]),c.useEffect(()=>{if(!(!t||C<=0)){if(He){Ne();return}R.current===null&&W(A.current)}},[t,Ne,g,He,C,W]),c.useEffect(()=>{var b;if(!t||!E)return;const s=h=>{if(h.key!=="Escape"||h.altKey||h.ctrlKey||h.metaKey||h.repeat||Fn(h))return;const B=k.current;!B||!We(B.ownerDocument,B)||kn(B.ownerDocument)||h.defaultPrevented||(q==null||q(h),!h.defaultPrevented&&(h.preventDefault(),Ye()))},m=((b=k.current)==null?void 0:b.ownerDocument)??document;return m.addEventListener("keydown",s),()=>{m.removeEventListener("keydown",s)}},[Ye,E,q,t]),c.useEffect(()=>{},[Le,qe,U]),!t)return null;const hn=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Bn=P?void 0:p??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:k,role:hn,"data-close-on-escape":E?"true":"false","aria-modal":P?"false":void 0,"aria-live":Bn,"aria-atomic":"true","aria-keyshortcuts":vn?"Escape":void 0,"aria-label":Ke,"aria-labelledby":U??(Ke?void 0:Fe),"aria-describedby":Pe?Oe:void 0,onMouseEnter:()=>{Me(),g&&L(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&L(s=>({...s,hover:!1}))},onFocusCapture:()=>{Me(),g&&L(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&L(m=>({...m,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Rn[i],...Cn[I]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Fe,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:bn,"aria-label":gn,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Ie(!0)},onMouseLeave:()=>{Ie(!1),x(!1)},onPointerDown:s=>{s.ctrlKey||xe(s.button)&&(j.current=!1,V(!1),x(!0))},onPointerUp:s=>{xe(s.button)&&x(!1)},onMouseDown:s=>{s.button!==0||s.ctrlKey||(j.current=!1,V(!1),x(!0))},onMouseUp:s=>{s.button===0&&x(!1)},onPointerCancel:()=>{x(!1)},onKeyDown:s=>{j.current=!0,!s.defaultPrevented&&(Ln(s)||_e(s.key)&&!Pn(s)&&!s.repeat&&x(!0))},onKeyUp:s=>{_e(s.key)&&x(!1)},onFocus:s=>{V(On(s.currentTarget,j.current))},onBlur:()=>{V(!1),x(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ke||Ae?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:je?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ke?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ke?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Ae?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:je?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),Pe?a.jsx("div",{id:Oe,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:r}):null]})}function On(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}function _e(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Pn(t){return t.ctrlKey||t.metaKey||t.altKey}function Ln(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function xe(t){return typeof t!="number"||t<=0}function Te(t){if(typeof t=="string")return t.trim().length>0;if(typeof t=="number")return!0;if(Array.isArray(t))return t.some(n=>Te(n));if(!c.isValidElement(t))return!1;const e=t.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?!1:typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?!0:Te(e.children)}function De(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>De(e)):c.isValidElement(t)}u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const F={...xn},we={...Tn};function f({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(Dn,{minHeight:e,align:n,gap:8,children:t})}const ia={title:"Feedback/Toast",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function qn(t){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),t.dispatchEvent(e)}const _={};function Kn(){const[t,e]=c.useState(!0);return a.jsxs(f,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(u,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(u,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const z={render:()=>a.jsx(Kn,{})};function Yn(){const[t,e]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const $={render:()=>a.jsx(Yn,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});l.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),l.mouseDown(n),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.pointerCancel(n),await d(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.mouseDown(n),l.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function Mn(){return a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const J={render:()=>a.jsx(Mn,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),l.keyDown(n,{key:"Enter",ctrlKey:!0}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyUp(n,{key:"Enter",ctrlKey:!0}),l.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.keyUp(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.keyUp(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.keyUp(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")});const r=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});r.preventDefault(),n.dispatchEvent(r),await d(()=>{o(n.style.transform).toContain("translateY(0")})}};function Nn(){return a.jsxs(f,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(u,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const Q={render:()=>a.jsx(Nn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("button",{name:"Before toast close"}),r=await e.findByRole("button",{name:"Close toast"});await v.click(n),await o(n).toHaveFocus(),await v.tab(),await o(r).toHaveFocus(),await o(r.style.boxShadow).toContain("0 0 0 3px"),l.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.style.boxShadow).toContain("0 0 0 3px")}};function Vn(){const[t,e]=c.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(w,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const X={render:()=>a.jsx(Vn,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(e.getByRole("button",{name:"Close blocking notice"})),await o(e.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("dialog")).toBeInTheDocument()}};function Un(){const[t,e]=c.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(w,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const Z={render:()=>a.jsx(Un,{}),play:async({canvasElement:t})=>{const e=y(t);await o(e.getByRole("alertdialog")).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close incident notice"})),await o(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("alertdialog")).toBeInTheDocument()}};function Gn(){return a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,onOpenChange:()=>{},title:"Passive update",description:"Blank action content should not upgrade toast role semantics.",action:"   "})})}const ee={render:()=>a.jsx(Gn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Passive update"})).toBeInTheDocument(),await o(e.queryByRole("dialog",{name:"Passive update"})).toBeNull()}};function Wn(){const[t,e]=c.useState(!0),[n,r]=c.useState("none"),[i,p]=c.useState("N/A"),D=c.useCallback(g=>{p(E=>E==="N/A"?g:`${E} -> ${g}`)},[]);return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:we,children:n})]}),a.jsxs("p",{style:F,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:we,children:i})]}),a.jsx("p",{style:F,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(w,{variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:g=>{e(g),g||D("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{r(g),D(`reason:${g}`)}})]})}const te={render:()=>a.jsx(Wn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await d(()=>{o(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(e.getByRole("button",{name:"Close toast"})),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(e.getByRole("button",{name:"Reopen Toast"})),l.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),e.getByRole("status",{name:"Close reason telemetry"}).focus(),await v.keyboard("{Shift>}{Escape}{/Shift}"),await d(()=>{o(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await d(()=>{o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function _n(){const[t,e]=c.useState(!0),[n,r]=c.useState("none");return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:we,children:n})]}),a.jsx(w,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const ne={render:()=>a.jsx(_n,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await d(()=>{o(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function yn(){const[t,e]=c.useState({first:!0,second:!0});return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const ae={render:()=>a.jsx(yn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"First notice"}),i=await e.findByRole("status",{name:"Second notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),l.keyDown(n,{key:"Escape",ctrlKey:!0}),l.keyDown(n,{key:"Escape",metaKey:!0}),await o(i).toBeInTheDocument(),await v.click(y(i).getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await d(()=>{o(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function zn(){const[t,e]=c.useState({first:!0,second:!0}),[n,r]=c.useState(!0);return a.jsxs(f,{minHeight:280,align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(u,{open:t.first,onOpenChange:i=>{e(p=>({...p,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t.second,onOpenChange:i=>{e(p=>({...p,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const oe={render:()=>a.jsx(zn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(e.getByRole("button",{name:"Pin top toast"})),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(e.getByRole("button",{name:"Unpin top toast"})),await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),l.keyDown(n,{key:"Escape",repeat:!0}),await o(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function $n(){const[t,e]=c.useState({first:!0,second:!0});return a.jsxs(f,{minHeight:280,children:[a.jsx(w,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const se={render:()=>a.jsx($n,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},re={render:()=>a.jsxs(f,{minHeight:280,children:[a.jsx("p",{style:F,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(yn,{})]}),play:async({canvasElement:t})=>{const e=t.ownerDocument,n=y(e.body),r=await n.findByRole("status",{name:"First notice"}),i=await n.findByRole("status",{name:"Second notice"});await y(r).findByRole("button",{name:"Close toast"}).then(D=>D.focus()),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await v.click(n.getByRole("button",{name:/reopen stack/i}));const p=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),l.mouseEnter(p),await d(()=>{o(p).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function Jn(){const[t,e]=c.useState(!0),[n,r]=c.useState(!0);return c.useEffect(()=>{if(!n)return;const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Qn(){const[t,e]=c.useState(!0),[n,r]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Xn(){const[t,e]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Zn(){const[t,e]=c.useState(!0),[n,r]=c.useState(0);return c.useEffect(()=>{const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:we,children:n})]}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}function ea(){const[t,e]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(En,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const ce={render:()=>a.jsx(Jn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable global Escape handler"})),await o(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},ie={render:()=>a.jsx(Zn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await o(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},ue={render:()=>a.jsx(ea,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Open escape overlay"})),await o(e.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await d(()=>{o(e.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await d(()=>{o(e.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},le={render:()=>a.jsx(Qn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await o(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},de={render:()=>a.jsx(Xn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),qn(n),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},pe={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},me={render:()=>a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,duration:0,title:"Release notice",description:0})}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=e.getByRole("status",{name:"Release notice"}),r=e.getAllByText("0");await o(r).toHaveLength(1),await o(n).toHaveAttribute("aria-describedby",r[0].id)}},ye={render:()=>a.jsxs(f,{align:"start",children:[a.jsx("h3",{id:"toast-heading",style:{margin:0},children:"Build artifact ready heading"}),a.jsx(u,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Fallback build artifact notification",ariaLabelledBy:"toast-heading"})]}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("status",{name:"Build artifact ready heading"});await o(n).toHaveAttribute("aria-labelledby","toast-heading"),await o(n).not.toHaveAttribute("aria-label")}},fe={render:()=>a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("status",{name:"Toast"});await o(n).toHaveAttribute("aria-label","Toast"),await o(n).not.toHaveAttribute("aria-labelledby")}},ve={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var ze,$e,Je;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:"{}",...(Je=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;z.parameters={...z.parameters,docs:{...(Qe=z.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ze=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;$.parameters={...$.parameters,docs:{...(et=$.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => <CloseButtonPrimaryPointerOnlyDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeButton = canvas.getByRole("button", {
      name: "Close toast"
    });
    fireEvent.mouseDown(closeButton, {
      button: 2
    });
    await expect(closeButton.style.transform).toContain("translateY(0");
    fireEvent.mouseDown(closeButton);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(closeButton);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    closeButton.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    closeButton.dispatchEvent(new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.mouseDown(closeButton);
    fireEvent.mouseUp(closeButton);
    await expect(closeButton.style.transform).toContain("translateY(0");
  }
}`,...(nt=(tt=$.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,st;J.parameters={...J.parameters,docs:{...(at=J.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <CloseButtonKeyboardPressedStateDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeButton = canvas.getByRole("button", {
      name: "Close toast"
    });
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    closeButton.focus();
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      ctrlKey: true
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Enter",
      ctrlKey: true
    });
    fireEvent.keyDown(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Spacebar"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, {
      key: "Spacebar"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      keyCode: 229,
      which: 229
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    const preemptedEnterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true
    });
    preemptedEnterEvent.preventDefault();
    closeButton.dispatchEvent(preemptedEnterEvent);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
  }
}`,...(st=(ot=J.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,ct,it;Q.parameters={...Q.parameters,docs:{...(rt=Q.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => <FocusIntentReentryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before toast close"
    });
    const closeButton = await canvas.findByRole("button", {
      name: "Close toast"
    });
    await userEvent.click(beforeButton);
    await expect(beforeButton).toHaveFocus();
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.style.boxShadow).toContain("0 0 0 3px");
    fireEvent.mouseDown(closeButton, {
      button: 0,
      ctrlKey: true
    });
    await expect(closeButton.style.boxShadow).toContain("0 0 0 3px");
  }
}`,...(it=(ct=Q.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var ut,lt,dt;X.parameters={...X.parameters,docs:{...(ut=X.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <ActionRequiredToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole("dialog");
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.click(canvas.getByRole("button", {
      name: "Close blocking notice"
    }));
    await expect(canvas.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("dialog")).toBeInTheDocument();
  }
}`,...(dt=(lt=X.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var pt,mt,yt;Z.parameters={...Z.parameters,docs:{...(pt=Z.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => <DangerActionToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("alertdialog")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close incident notice"
    }));
    await expect(canvas.queryByRole("alertdialog")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("alertdialog")).toBeInTheDocument();
  }
}`,...(yt=(mt=Z.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var ft,vt,wt;ee.parameters={...ee.parameters,docs:{...(ft=ee.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: () => <BlankActionSemanticsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Passive update"
    })).toBeInTheDocument();
    await expect(canvas.queryByRole("dialog", {
      name: "Passive update"
    })).toBeNull();
  }
}`,...(wt=(vt=ee.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var gt,bt,ht;te.parameters={...te.parameters,docs:{...(gt=te.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await waitFor(() => {
      expect(canvas.getByRole("status", {
        name: "Close reason telemetry"
      })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("N/A");
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Toast"
    }));
    fireEvent.keyDown(doc, {
      key: "Escape",
      ctrlKey: true
    });
    await expect(canvas.getByRole("status", {
      name: "Close reason telemetry"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("close-button");
    const telemetryToast = canvas.getByRole("status", {
      name: "Close reason telemetry"
    });
    telemetryToast.focus();
    await userEvent.keyboard("{Shift>}{Escape}{/Shift}");
    await waitFor(() => {
      expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("escape-key");
    });
    await waitFor(() => {
      expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    });
  }
}`,...(ht=(bt=te.parameters)==null?void 0:bt.docs)==null?void 0:ht.source}}};var Bt,kt,Et;ne.parameters={...ne.parameters,docs:{...(Bt=ne.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: () => <TimeoutCloseReasonDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(await canvas.findByRole("status", {
      name: "Timeout close telemetry"
    })).toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.queryByRole("status", {
        name: "Timeout close telemetry"
      })).not.toBeInTheDocument();
    });
    await expect(canvas.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout");
  }
}`,...(Et=(kt=ne.parameters)==null?void 0:kt.docs)==null?void 0:Et.source}}};var xt,Tt,Dt;ae.parameters={...ae.parameters,docs:{...(xt=ae.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    const first = await canvas.findByRole("status", {
      name: "First notice"
    });
    const second = await canvas.findByRole("status", {
      name: "Second notice"
    });
    await waitFor(() => {
      expect(first).not.toHaveAttribute("aria-keyshortcuts");
      expect(second).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    fireEvent.keyDown(doc, {
      key: "Escape",
      ctrlKey: true
    });
    fireEvent.keyDown(doc, {
      key: "Escape",
      metaKey: true
    });
    await expect(second).toBeInTheDocument();
    await userEvent.click(within(second).getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("status", {
      name: "Second notice"
    })).not.toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.getByRole("status", {
        name: "First notice"
      })).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
  }
}`,...(Dt=(Tt=ae.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var Rt,Ct,St;oe.parameters={...oe.parameters,docs:{...(Rt=oe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  render: () => <EscapeShortcutSyncDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    const baseToast = await canvas.findByRole("status", {
      name: "Base notice"
    });
    const topToast = await canvas.findByRole("status", {
      name: "Top notice"
    });
    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Pin top toast"
    }));
    await waitFor(() => {
      expect(baseToast).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(topToast).not.toHaveAttribute("aria-keyshortcuts");
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Unpin top toast"
    }));
    await waitFor(() => {
      expect(baseToast).not.toHaveAttribute("aria-keyshortcuts");
      expect(topToast).toHaveAttribute("aria-keyshortcuts", "Escape");
    });
    fireEvent.keyDown(doc, {
      key: "Escape",
      repeat: true
    });
    await expect(canvas.getByRole("status", {
      name: "Base notice"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("status", {
      name: "Top notice"
    })).toBeInTheDocument();
  }
}`,...(St=(Ct=oe.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var It,jt,At;se.parameters={...se.parameters,docs:{...(It=se.parameters)==null?void 0:It.docs,source:{originalSource:`{
  render: () => <StackedViewportOffsetDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const first = await canvas.findByRole("status", {
      name: "First stack item"
    });
    const second = await canvas.findByRole("status", {
      name: "Second stack item"
    });
    await expect(first.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px");
    await expect(second.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px");
  }
}`,...(At=(jt=se.parameters)==null?void 0:jt.docs)==null?void 0:At.source}}};var Ht,Ft,Ot;re.parameters={...re.parameters,docs:{...(Ht=re.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  render: () => <ToastShowcase minHeight={280}>
      <p style={toastTelemetryTextStyle}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </ToastShowcase>,
  play: async ({
    canvasElement
  }) => {
    const doc = canvasElement.ownerDocument;
    const canvas = within(doc.body);
    const first = await canvas.findByRole("status", {
      name: "First notice"
    });
    const second = await canvas.findByRole("status", {
      name: "Second notice"
    });
    await within(first).findByRole("button", {
      name: "Close toast"
    }).then(button => button.focus());
    await waitFor(() => {
      expect(first).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(second).not.toHaveAttribute("aria-keyshortcuts");
    });
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("status", {
      name: "First notice"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("status", {
      name: "Second notice"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: /reopen stack/i
    }));
    const reopenedFirst = await canvas.findByRole("status", {
      name: "First notice"
    });
    await canvas.findByRole("status", {
      name: "Second notice"
    });
    fireEvent.mouseEnter(reopenedFirst);
    await waitFor(() => {
      expect(reopenedFirst).toHaveAttribute("aria-keyshortcuts", "Escape");
      expect(canvas.getByRole("status", {
        name: "Second notice"
      })).not.toHaveAttribute("aria-keyshortcuts");
    });
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("status", {
      name: "First notice"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("status", {
      name: "Second notice"
    })).toBeInTheDocument();
  }
}`,...(Ot=(Ft=re.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};var Pt,Lt,qt;ce.parameters={...ce.parameters,docs:{...(Pt=ce.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Global Escape override"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await expect(canvas.getByRole("status", {
      name: "Global Escape override"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Disable global Escape handler"
    }));
    await expect(canvas.getByRole("button", {
      name: "Enable global Escape handler"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("status", {
      name: "Global Escape override"
    })).not.toBeInTheDocument();
  }
}`,...(qt=(Lt=ce.parameters)==null?void 0:Lt.docs)==null?void 0:qt.source}}};var Kt,Yt,Mt;ie.parameters={...ie.parameters,docs:{...(Kt=ie.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  render: () => <EscapePreemptedSkipsHookDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Preempted escape skips toast hook"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await expect(canvas.getByTestId("escape-hook-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("status", {
      name: "Preempted escape skips toast hook"
    })).toBeInTheDocument();
  }
}`,...(Mt=(Yt=ie.parameters)==null?void 0:Yt.docs)==null?void 0:Mt.source}}};var Nt,Vt,Ut;ue.parameters={...ue.parameters,docs:{...(Nt=ue.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  render: () => <EscapePreemptedByOverlayLayerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Overlay-aware toast"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Open escape overlay"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Escape overlay"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await waitFor(() => {
      expect(canvas.queryByRole("dialog", {
        name: "Escape overlay"
      })).not.toBeInTheDocument();
    });
    await expect(canvas.getByRole("status", {
      name: "Overlay-aware toast"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await waitFor(() => {
      expect(canvas.queryByRole("status", {
        name: "Overlay-aware toast"
      })).not.toBeInTheDocument();
    });
  }
}`,...(Ut=(Vt=ue.parameters)==null?void 0:Vt.docs)==null?void 0:Ut.source}}};var Gt,Wt,_t;le.parameters={...le.parameters,docs:{...(Gt=le.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  render: () => <EscapeGuardedByToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Toast-level Escape guard"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await expect(canvas.getByRole("status", {
      name: "Toast-level Escape guard"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Disable toast Escape guard"
    }));
    await expect(canvas.getByRole("button", {
      name: "Enable toast Escape guard"
    })).toBeInTheDocument();
  }
}`,...(_t=(Wt=le.parameters)==null?void 0:Wt.docs)==null?void 0:_t.source}}};var zt,$t,Jt;de.parameters={...de.parameters,docs:{...(zt=de.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  render: () => <EscapeImeCompositionDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("dialog", {
      name: "IME composition guard"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByRole("dialog", {
      name: "IME composition guard"
    })).toBeInTheDocument();
    dispatchLegacyImeEscape(doc);
    await expect(canvas.getByRole("dialog", {
      name: "IME composition guard"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("dialog", {
      name: "IME composition guard"
    })).not.toBeInTheDocument();
  }
}`,...(Jt=($t=de.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;pe.parameters={...pe.parameters,docs:{...(Qt=pe.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    title: <span aria-hidden>✅</span>,
    description: "Build artifact is ready.",
    ariaLabel: "Build artifact ready notification"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Build artifact ready notification"
    })).toBeInTheDocument();
  }
}`,...(Zt=(Xt=pe.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var en,tn,nn;me.parameters={...me.parameters,docs:{...(en=me.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: () => <ToastShowcase align="start">
      <Toast open duration={0} title="Release notice" description={0} />
    </ToastShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const toast = canvas.getByRole("status", {
      name: "Release notice"
    });
    const descriptions = canvas.getAllByText("0");
    await expect(descriptions).toHaveLength(1);
    await expect(toast).toHaveAttribute("aria-describedby", descriptions[0].id);
  }
}`,...(nn=(tn=me.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,sn;ye.parameters={...ye.parameters,docs:{...(an=ye.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: () => <ToastShowcase align="start">
      <h3 id="toast-heading" style={{
      margin: 0
    }}>
        Build artifact ready heading
      </h3>
      <Toast open duration={0} title={<span aria-hidden>✅</span>} description="Build artifact is ready." ariaLabel="Fallback build artifact notification" ariaLabelledBy="toast-heading" />
    </ToastShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const toast = canvas.getByRole("status", {
      name: "Build artifact ready heading"
    });
    await expect(toast).toHaveAttribute("aria-labelledby", "toast-heading");
    await expect(toast).not.toHaveAttribute("aria-label");
  }
}`,...(sn=(on=ye.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,un;fe.parameters={...fe.parameters,docs:{...(rn=fe.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: () => <ToastShowcase align="start">
      <Toast open duration={0} title={<span aria-hidden>✅</span>} description="Auto fallback name for icon-only title." />
    </ToastShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const toast = canvas.getByRole("status", {
      name: "Toast"
    });
    await expect(toast).toHaveAttribute("aria-label", "Toast");
    await expect(toast).not.toHaveAttribute("aria-labelledby");
  }
}`,...(un=(cn=fe.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var ln,dn,pn;ve.parameters={...ve.parameters,docs:{...(ln=ve.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  args: {
    title: "Background sync",
    description: "Silent status updates are visible but not announced.",
    live: "off",
    duration: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Background sync"
    })).toHaveAttribute("aria-live", "off");
  }
}`,...(pn=(dn=ve.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};const ua=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","FocusIntentReentry","ActionRequired","ActionRequiredDanger","BlankActionSemantics","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","NumericDescriptionSemantics","LabelledByPrecedence","NonTextTitleAutoNameFallback","LiveRegionOff"];export{X as ActionRequired,Z as ActionRequiredDanger,pe as AriaLabelOverride,ee as BlankActionSemantics,J as CloseButtonKeyboardPressedState,$ as CloseButtonPrimaryPointerOnly,te as CloseReasonTelemetry,_ as Default,le as EscapeGuardedByToastHandler,de as EscapeIgnoresImeComposition,ce as EscapePreemptedByGlobalHandler,ue as EscapePreemptedByOverlayLayer,ie as EscapePreemptedSkipsToastHook,oe as EscapeShortcutSync,ae as EscapeStackOrder,Q as FocusIntentReentry,re as FocusedToastEscapesFirst,ye as LabelledByPrecedence,ve as LiveRegionOff,fe as NonTextTitleAutoNameFallback,me as NumericDescriptionSemantics,se as StackedViewportOffset,ne as TimeoutCloseReason,z as ToneMatrix,ua as __namedExportsOrder,ia as default};
