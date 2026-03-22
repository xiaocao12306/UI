import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as w}from"./Button-DirECuRH.js";import{h as fn}from"./DismissableLayer-0MVldSzJ.js";import{P as vn}from"./Popover-Bmp3DcW1.js";import{within as y,expect as o,userEvent as f,fireEvent as u,waitFor as d}from"./index-DgAF9SIF.js";import{s as wn,a as gn,b as hn}from"./storyShowcase-Bw5VyCj0.js";const bn={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Bn={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},kn=14,Ke=new WeakMap;function En(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function S(t){const e=Ke.get(t);if(e)return e;const n={escapeStack:[],visualStacks:En(),listeners:new Set};return Ke.set(t,n),n}function De(t){S(t).listeners.forEach(n=>{n()})}function xn(t,e){const n=S(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function Ye(t,e){const n=S(t),r=n.escapeStack.lastIndexOf(e);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(e),De(t)}function Tn(t,e){const n=S(t),r=n.escapeStack.lastIndexOf(e);r>=0&&(n.escapeStack.splice(r,1),De(t))}function sn(t,e){const n=t.visualStacks[e],r=e.startsWith("bottom")?-1:1;n.forEach((i,p)=>{const D=n.length-1-p;i.style.setProperty("--aurora-toast-stack-offset",`${D*r*kn}px`)})}function Me(t,e,n){const r=S(t),i=r.visualStacks[n],p=i.lastIndexOf(e);p>=0&&i.splice(p,1),i.push(e),sn(r,n)}function Dn(t,e,n){const r=S(t),i=r.visualStacks[n],p=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(p<0)&&(i.splice(p,1),sn(r,n))}function Ve(t,e){const n=S(t);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function Rn(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:n,action:r,tone:i="info",live:p,duration:D,pauseOnHover:g=!0,closeOnEscape:E=!0,onEscapeKeyDown:q,closeLabel:ve="Close toast",ariaLabel:we,ariaLabelledBy:ge,position:I="bottom-right",onClose:K,onCloseReason:Y,onOpenChange:M}){const k=c.useRef(null);c.useRef(!1);const j=c.useRef(!0),he=c.useRef(!1),R=c.useRef(null),V=c.useRef(null),O=c.useRef(0),P=Te(r),C=D??(P?0:4e3),H=c.useRef(C),[cn,Re]=c.useState(!1),[Ce,L]=c.useState({hover:!1,focus:!1}),[be,Se]=c.useState(!1),[Ie,x]=c.useState(!1),[je,N]=c.useState(!1),[un,ln]=c.useState(!1),He=cn||g&&(Ce.hover||Ce.focus),Ae=c.useId(),Fe=c.useId(),Oe=Te(n),Be=typeof ge=="string"&&ge.trim().length>0?ge.trim():void 0,ke=Be===void 0&&typeof we=="string"&&we.trim().length>0?we.trim():void 0,dn=typeof ve=="string"&&ve.trim().length>0?ve.trim():"Close toast",U=c.useCallback(()=>{const s=k.current;ln(!!(t&&E&&s&&Ve(s.ownerDocument,s)))},[E,t]);c.useEffect(()=>{U()},[U]),c.useEffect(()=>{var m;const s=(m=k.current)==null?void 0:m.ownerDocument;if(s)return xn(s,U)},[U]),c.useEffect(()=>{const s=k.current;if(!t||!s)return;const m=s.ownerDocument;return Ye(m,s),Me(m,s,I),()=>{Tn(m,s),Dn(m,s,I)}},[t,I]),c.useEffect(()=>{!t||!k.current||De(k.current.ownerDocument)},[E,t]),c.useEffect(()=>{t||(L({hover:!1,focus:!1}),Re(!1)),he.current=!1},[t]),c.useEffect(()=>{var h;if(!t)return;const s=((h=k.current)==null?void 0:h.ownerDocument)??document,m=()=>{Re(s.visibilityState==="hidden")};return m(),s.addEventListener("visibilitychange",m),()=>{s.removeEventListener("visibilitychange",m)}},[t]),c.useEffect(()=>{var b;if(!t)return;const s=((b=k.current)==null?void 0:b.ownerDocument)??document,m=B=>{B.metaKey||B.altKey||B.ctrlKey||(j.current=!0)},h=B=>{"button"in B&&!xe(B.button)||"ctrlKey"in B&&B.ctrlKey||(j.current=!1)};return s.addEventListener("keydown",m,!0),s.addEventListener("pointerdown",h,!0),s.addEventListener("mousedown",h,!0),s.addEventListener("touchstart",h,!0),()=>{s.removeEventListener("keydown",m,!0),s.removeEventListener("pointerdown",h,!0),s.removeEventListener("mousedown",h,!0),s.removeEventListener("touchstart",h,!0)}},[t]);const T=c.useCallback(()=>{R.current!==null&&((V.current??window).clearTimeout(R.current),R.current=null),V.current=null,O.current=0},[]),A=c.useCallback(s=>{he.current||(he.current=!0,T(),Y==null||Y(s),K==null||K(),M==null||M(!1))},[T,K,Y,M]),pn=c.useCallback(()=>{A("close-button")},[A]),Pe=c.useCallback(()=>{A("escape-key")},[A]),Ee=c.useCallback(()=>{A("timeout")},[A]),Le=c.useCallback(()=>{const s=k.current;if(!t||!s)return;const m=s.ownerDocument;Ye(m,s),Me(m,s,I)},[t,I]),G=c.useCallback(s=>{var h;if(s<=0){Ee();return}T(),H.current=s,O.current=Date.now();const m=((h=k.current)==null?void 0:h.ownerDocument.defaultView)??window;V.current=m,R.current=m.setTimeout(()=>{R.current=null,V.current=null,O.current=0,H.current=0,Ee()},s)},[T,Ee]),qe=c.useCallback(()=>{if(R.current===null||O.current===0)return;const s=Date.now()-O.current;H.current=Math.max(0,H.current-s),T()},[T]);if(c.useEffect(()=>{if(T(),H.current=C,!(!t||C<=0))return G(C),()=>{T()}},[T,t,C,G]),c.useEffect(()=>{if(!(!t||C<=0)){if(He){qe();return}R.current===null&&G(H.current)}},[t,qe,g,He,C,G]),c.useEffect(()=>{var h;if(!t||!E)return;const s=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||Rn(b))return;const B=k.current;!B||!Ve(B.ownerDocument,B)||fn(B.ownerDocument)||b.defaultPrevented||(q==null||q(b),!b.defaultPrevented&&(b.preventDefault(),Pe()))},m=((h=k.current)==null?void 0:h.ownerDocument)??document;return m.addEventListener("keydown",s),()=>{m.removeEventListener("keydown",s)}},[Pe,E,q,t]),c.useEffect(()=>{},[ke,Be,e]),!t)return null;const mn=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",yn=P?void 0:p??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:k,role:mn,"data-close-on-escape":E?"true":"false","aria-modal":P?"false":void 0,"aria-live":yn,"aria-atomic":"true","aria-keyshortcuts":un?"Escape":void 0,"aria-label":ke,"aria-labelledby":Be??(ke?void 0:Ae),"aria-describedby":Oe?Fe:void 0,onMouseEnter:()=>{Le(),g&&L(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&L(s=>({...s,hover:!1}))},onFocusCapture:()=>{Le(),g&&L(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&L(m=>({...m,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...bn[i],...Bn[I]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Ae,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:pn,"aria-label":dn,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Se(!0)},onMouseLeave:()=>{Se(!1),x(!1)},onPointerDown:s=>{s.ctrlKey||xe(s.button)&&(j.current=!1,N(!1),x(!0))},onPointerUp:s=>{xe(s.button)&&x(!1)},onMouseDown:s=>{s.button!==0||s.ctrlKey||(j.current=!1,N(!1),x(!0))},onMouseUp:s=>{s.button===0&&x(!1)},onPointerCancel:()=>{x(!1)},onKeyDown:s=>{j.current=!0,!In(s)&&Ne(s.key)&&!Sn(s)&&!s.repeat&&x(!0)},onKeyUp:s=>{Ne(s.key)&&x(!1)},onFocus:s=>{N(Cn(s.currentTarget,j.current))},onBlur:()=>{N(!1),x(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:be||je?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Ie?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":be?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:be?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:je?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:Ie?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),Oe?a.jsx("div",{id:Fe,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:r}):null]})}function Cn(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}function Ne(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function Sn(t){return t.ctrlKey||t.metaKey||t.altKey}function In(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function xe(t){return typeof t!="number"||t<=0}function Te(t){return t==null||typeof t=="boolean"?!1:typeof t=="string"?t.trim().length>0:typeof t=="number"?!0:Array.isArray(t)?t.some(e=>Te(e)):c.isValidElement(t)}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const F={...wn},fe={...gn};function v({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(hn,{minHeight:e,align:n,gap:8,children:t})}const ta={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function jn(t){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),t.dispatchEvent(e)}const W={};function Hn(){const[t,e]=c.useState(!0);return a.jsxs(v,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const _={render:()=>a.jsx(Hn,{})};function An(){const[t,e]=c.useState(!0);return a.jsxs(v,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const z={render:()=>a.jsx(An,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});u.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),u.mouseDown(n),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.pointerCancel(n),await d(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.mouseDown(n),u.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function Fn(){return a.jsx(v,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const $={render:()=>a.jsx(Fn,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),u.keyDown(n,{key:"Enter",ctrlKey:!0}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter",ctrlKey:!0}),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")})}};function On(){return a.jsxs(v,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const J={render:()=>a.jsx(On,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("button",{name:"Before toast close"}),r=await e.findByRole("button",{name:"Close toast"});await f.click(n),await o(n).toHaveFocus(),await f.tab(),await o(r).toHaveFocus(),await o(r.style.boxShadow).toContain("0 0 0 3px"),u.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.style.boxShadow).toContain("0 0 0 3px")}};function Pn(){const[t,e]=c.useState(!0);return a.jsxs(v,{children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(w,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const Q={render:()=>a.jsx(Pn,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await f.click(e.getByRole("button",{name:"Close blocking notice"})),await o(e.queryByRole("dialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("dialog")).toBeInTheDocument()}};function Ln(){const[t,e]=c.useState(!0);return a.jsxs(v,{children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(w,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const X={render:()=>a.jsx(Ln,{}),play:async({canvasElement:t})=>{const e=y(t);await o(e.getByRole("alertdialog")).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close incident notice"})),await o(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("alertdialog")).toBeInTheDocument()}};function qn(){return a.jsx(v,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update",description:"Blank action content should not upgrade toast role semantics.",action:"   "})})}const Z={render:()=>a.jsx(qn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Passive update"})).toBeInTheDocument(),await o(e.queryByRole("dialog",{name:"Passive update"})).toBeNull()}};function Kn(){const[t,e]=c.useState(!0),[n,r]=c.useState("none"),[i,p]=c.useState("N/A"),D=c.useCallback(g=>{p(E=>E==="N/A"?g:`${E} -> ${g}`)},[]);return a.jsxs(v,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:fe,children:n})]}),a.jsxs("p",{style:F,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:fe,children:i})]}),a.jsx("p",{style:F,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(w,{variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:g=>{e(g),g||D("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{r(g),D(`reason:${g}`)}})]})}const ee={render:()=>a.jsx(Kn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await d(()=>{o(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await f.click(e.getByRole("button",{name:"Close toast"})),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await f.click(e.getByRole("button",{name:"Reopen Toast"})),u.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),e.getByRole("status",{name:"Close reason telemetry"}).focus(),await f.keyboard("{Shift>}{Escape}{/Shift}"),await d(()=>{o(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await d(()=>{o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function Yn(){const[t,e]=c.useState(!0),[n,r]=c.useState("none");return a.jsxs(v,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:fe,children:n})]}),a.jsx(w,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const te={render:()=>a.jsx(Yn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await d(()=>{o(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function rn(){const[t,e]=c.useState({first:!0,second:!0});return a.jsxs(v,{children:[a.jsx(w,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const ne={render:()=>a.jsx(rn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"First notice"}),i=await e.findByRole("status",{name:"Second notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",ctrlKey:!0}),u.keyDown(n,{key:"Escape",metaKey:!0}),await o(i).toBeInTheDocument(),await f.click(y(i).getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await d(()=>{o(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Mn(){const[t,e]=c.useState({first:!0,second:!0}),[n,r]=c.useState(!0);return a.jsxs(v,{minHeight:280,align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(l,{open:t.first,onOpenChange:i=>{e(p=>({...p,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:t.second,onOpenChange:i=>{e(p=>({...p,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const ae={render:()=>a.jsx(Mn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(e.getByRole("button",{name:"Pin top toast"})),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await f.click(e.getByRole("button",{name:"Unpin top toast"})),await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",repeat:!0}),await o(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Vn(){const[t,e]=c.useState({first:!0,second:!0});return a.jsxs(v,{minHeight:280,children:[a.jsx(w,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const oe={render:()=>a.jsx(Vn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},se={render:()=>a.jsxs(v,{minHeight:280,children:[a.jsx("p",{style:F,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(rn,{})]}),play:async({canvasElement:t})=>{const e=t.ownerDocument,n=y(e.body),r=await n.findByRole("status",{name:"First notice"}),i=await n.findByRole("status",{name:"Second notice"});await y(r).findByRole("button",{name:"Close toast"}).then(D=>D.focus()),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await f.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await f.click(n.getByRole("button",{name:/reopen stack/i}));const p=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),u.mouseEnter(p),await d(()=>{o(p).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await f.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function Nn(){const[t,e]=c.useState(!0),[n,r]=c.useState(!0);return c.useEffect(()=>{if(!n)return;const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(v,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Un(){const[t,e]=c.useState(!0),[n,r]=c.useState(!0);return a.jsxs(v,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Gn(){const[t,e]=c.useState(!0);return a.jsxs(v,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Wn(){const[t,e]=c.useState(!0),[n,r]=c.useState(0);return c.useEffect(()=>{const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(v,{align:"start",children:[a.jsxs("p",{style:F,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:fe,children:n})]}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}function _n(){const[t,e]=c.useState(!0);return a.jsxs(v,{align:"start",children:[a.jsx(vn,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const re={render:()=>a.jsx(Nn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable global Escape handler"})),await o(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},ce={render:()=>a.jsx(Wn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},ie={render:()=>a.jsx(_n,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Open escape overlay"})),await o(e.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(e.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(e.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},ue={render:()=>a.jsx(Un,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await o(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},le={render:()=>a.jsx(Gn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),jn(n),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},de={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},pe={render:()=>a.jsx(v,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:"Release notice",description:0})}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=e.getByRole("status",{name:"Release notice"}),r=e.getAllByText("0");await o(r).toHaveLength(1),await o(n).toHaveAttribute("aria-describedby",r[0].id)}},me={render:()=>a.jsxs(v,{align:"start",children:[a.jsx("h3",{id:"toast-heading",style:{margin:0},children:"Build artifact ready heading"}),a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Fallback build artifact notification",ariaLabelledBy:"toast-heading"})]}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("status",{name:"Build artifact ready heading"});await o(n).toHaveAttribute("aria-labelledby","toast-heading"),await o(n).not.toHaveAttribute("aria-label")}},ye={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Ue,Ge,We;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:"{}",...(We=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var _e,ze,$e;_.parameters={..._.parameters,docs:{...(_e=_.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...($e=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
  }
}`,...(tt=(et=$.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,ot;J.parameters={...J.parameters,docs:{...(nt=J.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(at=J.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var st,rt,ct;Q.parameters={...Q.parameters,docs:{...(st=Q.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(rt=Q.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,ut,lt;X.parameters={...X.parameters,docs:{...(it=X.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ut=X.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,pt,mt;Z.parameters={...Z.parameters,docs:{...(dt=Z.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=Z.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ft,vt;ee.parameters={...ee.parameters,docs:{...(yt=ee.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(ft=ee.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};var wt,gt,ht;te.parameters={...te.parameters,docs:{...(wt=te.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(ht=(gt=te.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var bt,Bt,kt;ne.parameters={...ne.parameters,docs:{...(bt=ne.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(kt=(Bt=ne.parameters)==null?void 0:Bt.docs)==null?void 0:kt.source}}};var Et,xt,Tt;ae.parameters={...ae.parameters,docs:{...(Et=ae.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Tt=(xt=ae.parameters)==null?void 0:xt.docs)==null?void 0:Tt.source}}};var Dt,Rt,Ct;oe.parameters={...oe.parameters,docs:{...(Dt=oe.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Ct=(Rt=oe.parameters)==null?void 0:Rt.docs)==null?void 0:Ct.source}}};var St,It,jt;se.parameters={...se.parameters,docs:{...(St=se.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(jt=(It=se.parameters)==null?void 0:It.docs)==null?void 0:jt.source}}};var Ht,At,Ft;re.parameters={...re.parameters,docs:{...(Ht=re.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ft=(At=re.parameters)==null?void 0:At.docs)==null?void 0:Ft.source}}};var Ot,Pt,Lt;ce.parameters={...ce.parameters,docs:{...(Ot=ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Lt=(Pt=ce.parameters)==null?void 0:Pt.docs)==null?void 0:Lt.source}}};var qt,Kt,Yt;ie.parameters={...ie.parameters,docs:{...(qt=ie.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Yt=(Kt=ie.parameters)==null?void 0:Kt.docs)==null?void 0:Yt.source}}};var Mt,Vt,Nt;ue.parameters={...ue.parameters,docs:{...(Mt=ue.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Nt=(Vt=ue.parameters)==null?void 0:Vt.docs)==null?void 0:Nt.source}}};var Ut,Gt,Wt;le.parameters={...le.parameters,docs:{...(Ut=le.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Wt=(Gt=le.parameters)==null?void 0:Gt.docs)==null?void 0:Wt.source}}};var _t,zt,$t;de.parameters={...de.parameters,docs:{...(_t=de.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...($t=(zt=de.parameters)==null?void 0:zt.docs)==null?void 0:$t.source}}};var Jt,Qt,Xt;pe.parameters={...pe.parameters,docs:{...(Jt=pe.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Qt=pe.parameters)==null?void 0:Qt.docs)==null?void 0:Xt.source}}};var Zt,en,tn;me.parameters={...me.parameters,docs:{...(Zt=me.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(tn=(en=me.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;ye.parameters={...ye.parameters,docs:{...(nn=ye.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=ye.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};const na=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","FocusIntentReentry","ActionRequired","ActionRequiredDanger","BlankActionSemantics","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","NumericDescriptionSemantics","LabelledByPrecedence","LiveRegionOff"];export{Q as ActionRequired,X as ActionRequiredDanger,de as AriaLabelOverride,Z as BlankActionSemantics,$ as CloseButtonKeyboardPressedState,z as CloseButtonPrimaryPointerOnly,ee as CloseReasonTelemetry,W as Default,ue as EscapeGuardedByToastHandler,le as EscapeIgnoresImeComposition,re as EscapePreemptedByGlobalHandler,ie as EscapePreemptedByOverlayLayer,ce as EscapePreemptedSkipsToastHook,ae as EscapeShortcutSync,ne as EscapeStackOrder,J as FocusIntentReentry,se as FocusedToastEscapesFirst,me as LabelledByPrecedence,ye as LiveRegionOff,pe as NumericDescriptionSemantics,oe as StackedViewportOffset,te as TimeoutCloseReason,_ as ToneMatrix,na as __namedExportsOrder,ta as default};
