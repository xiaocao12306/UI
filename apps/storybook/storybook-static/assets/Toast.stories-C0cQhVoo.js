import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as v}from"./Button-Bcz0jJFO.js";import{h as Xt}from"./DismissableLayer-0MVldSzJ.js";import{P as Zt}from"./Popover-DP4Y59aM.js";import{within as f,expect as o,userEvent as y,fireEvent as u,waitFor as l}from"./index-DgAF9SIF.js";import{s as en,a as tn,b as nn}from"./storyShowcase-Bw5VyCj0.js";const an={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},on={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},sn=14,Fe=new WeakMap;function rn(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function S(t){const e=Fe.get(t);if(e)return e;const n={escapeStack:[],visualStacks:rn(),listeners:new Set};return Fe.set(t,n),n}function be(t){S(t).listeners.forEach(n=>{n()})}function cn(t,e){const n=S(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function Oe(t,e){const n=S(t),c=n.escapeStack.lastIndexOf(e);c>=0&&n.escapeStack.splice(c,1),n.escapeStack.push(e),be(t)}function un(t,e){const n=S(t),c=n.escapeStack.lastIndexOf(e);c>=0&&(n.escapeStack.splice(c,1),be(t))}function Ut(t,e){const n=t.visualStacks[e],c=e.startsWith("bottom")?-1:1;n.forEach((i,d)=>{const D=n.length-1-d;i.style.setProperty("--aurora-toast-stack-offset",`${D*c*sn}px`)})}function He(t,e,n){const c=S(t),i=c.visualStacks[n],d=i.lastIndexOf(e);d>=0&&i.splice(d,1),i.push(e),Ut(c,n)}function ln(t,e,n){const c=S(t),i=c.visualStacks[n],d=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(d<0)&&(i.splice(d,1),Ut(c,n))}function Ae(t,e){const n=S(t);for(let c=n.escapeStack.length-1;c>=0;c-=1){const i=n.escapeStack[c];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function dn(t){return t.isComposing?!0:t.keyCode===229}function m({open:t,title:e,description:n,action:c,tone:i="info",live:d,duration:D,pauseOnHover:g=!0,closeOnEscape:E=!0,onEscapeKeyDown:K,closeLabel:me="Close toast",ariaLabel:ye,position:I="bottom-right",onClose:L,onCloseReason:Y,onOpenChange:M}){const k=r.useRef(null);r.useRef(!1);const j=r.useRef(!0),fe=r.useRef(!1),R=r.useRef(null),V=r.useRef(null),A=r.useRef(0),P=r.Children.toArray(c).length>0,C=D??(P?0:4e3),F=r.useRef(C),[Nt,Be]=r.useState(!1),[ke,q]=r.useState({hover:!1,focus:!1}),[ve,Ee]=r.useState(!1),[xe,x]=r.useState(!1),[Te,U]=r.useState(!1),[Wt,_t]=r.useState(!1),De=Nt||g&&(ke.hover||ke.focus),Re=r.useId(),Ce=r.useId(),we=typeof ye=="string"&&ye.trim().length>0?ye.trim():void 0,zt=typeof me=="string"&&me.trim().length>0?me.trim():"Close toast",G=r.useCallback(()=>{const s=k.current;_t(!!(t&&E&&s&&Ae(s.ownerDocument,s)))},[E,t]);r.useEffect(()=>{G()},[G]),r.useEffect(()=>{var p;const s=(p=k.current)==null?void 0:p.ownerDocument;if(s)return cn(s,G)},[G]),r.useEffect(()=>{const s=k.current;if(!t||!s)return;const p=s.ownerDocument;return Oe(p,s),He(p,s,I),()=>{un(p,s),ln(p,s,I)}},[t,I]),r.useEffect(()=>{!t||!k.current||be(k.current.ownerDocument)},[E,t]),r.useEffect(()=>{t||(q({hover:!1,focus:!1}),Be(!1)),fe.current=!1},[t]),r.useEffect(()=>{var h;if(!t)return;const s=((h=k.current)==null?void 0:h.ownerDocument)??document,p=()=>{Be(s.visibilityState==="hidden")};return p(),s.addEventListener("visibilitychange",p),()=>{s.removeEventListener("visibilitychange",p)}},[t]),r.useEffect(()=>{var b;if(!t)return;const s=((b=k.current)==null?void 0:b.ownerDocument)??document,p=B=>{B.metaKey||B.altKey||B.ctrlKey||(j.current=!0)},h=B=>{"button"in B&&!he(B.button)||"ctrlKey"in B&&B.ctrlKey||(j.current=!1)};return s.addEventListener("keydown",p,!0),s.addEventListener("pointerdown",h,!0),s.addEventListener("mousedown",h,!0),s.addEventListener("touchstart",h,!0),()=>{s.removeEventListener("keydown",p,!0),s.removeEventListener("pointerdown",h,!0),s.removeEventListener("mousedown",h,!0),s.removeEventListener("touchstart",h,!0)}},[t]);const T=r.useCallback(()=>{R.current!==null&&((V.current??window).clearTimeout(R.current),R.current=null),V.current=null,A.current=0},[]),O=r.useCallback(s=>{fe.current||(fe.current=!0,T(),Y==null||Y(s),L==null||L(),M==null||M(!1))},[T,L,Y,M]),$t=r.useCallback(()=>{O("close-button")},[O]),Se=r.useCallback(()=>{O("escape-key")},[O]),ge=r.useCallback(()=>{O("timeout")},[O]),Ie=r.useCallback(()=>{const s=k.current;if(!t||!s)return;const p=s.ownerDocument;Oe(p,s),He(p,s,I)},[t,I]),N=r.useCallback(s=>{var h;if(s<=0){ge();return}T(),F.current=s,A.current=Date.now();const p=((h=k.current)==null?void 0:h.ownerDocument.defaultView)??window;V.current=p,R.current=p.setTimeout(()=>{R.current=null,V.current=null,A.current=0,F.current=0,ge()},s)},[T,ge]),je=r.useCallback(()=>{if(R.current===null||A.current===0)return;const s=Date.now()-A.current;F.current=Math.max(0,F.current-s),T()},[T]);if(r.useEffect(()=>{if(T(),F.current=C,!(!t||C<=0))return N(C),()=>{T()}},[T,t,C,N]),r.useEffect(()=>{if(!(!t||C<=0)){if(De){je();return}R.current===null&&N(F.current)}},[t,je,g,De,C,N]),r.useEffect(()=>{var h;if(!t||!E)return;const s=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||dn(b))return;const B=k.current;!B||!Ae(B.ownerDocument,B)||Xt(B.ownerDocument)||b.defaultPrevented||(K==null||K(b),!b.defaultPrevented&&(b.preventDefault(),Se()))},p=((h=k.current)==null?void 0:h.ownerDocument)??document;return p.addEventListener("keydown",s),()=>{p.removeEventListener("keydown",s)}},[Se,E,K,t]),r.useEffect(()=>{},[we,e]),!t)return null;const Jt=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Qt=P?void 0:d??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:k,role:Jt,"data-close-on-escape":E?"true":"false","aria-modal":P?"false":void 0,"aria-live":Qt,"aria-atomic":"true","aria-keyshortcuts":Wt?"Escape":void 0,"aria-label":we,"aria-labelledby":we?void 0:Re,"aria-describedby":n?Ce:void 0,onMouseEnter:()=>{Ie(),g&&q(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&q(s=>({...s,hover:!1}))},onFocusCapture:()=>{Ie(),g&&q(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&q(p=>({...p,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...an[i],...on[I]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Re,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:$t,"aria-label":zt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Ee(!0)},onMouseLeave:()=>{Ee(!1),x(!1)},onPointerDown:s=>{s.ctrlKey||he(s.button)&&(j.current=!1,U(!1),x(!0))},onPointerUp:s=>{he(s.button)&&x(!1)},onMouseDown:s=>{s.button!==0||s.ctrlKey||(j.current=!1,U(!1),x(!0))},onMouseUp:s=>{s.button===0&&x(!1)},onPointerCancel:()=>{x(!1)},onKeyDown:s=>{j.current=!0,!yn(s)&&Pe(s.key)&&!mn(s)&&!s.repeat&&x(!0)},onKeyUp:s=>{Pe(s.key)&&x(!1)},onFocus:s=>{U(pn(s.currentTarget,j.current))},onBlur:()=>{U(!1),x(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ve||Te?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:xe?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ve?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ve?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Te?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:xe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:Ce,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:c}):null]})}function pn(t,e){try{return t.matches(":focus-visible")}catch{return e}}function Pe(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function mn(t){return t.ctrlKey||t.metaKey||t.altKey}function yn(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function he(t){return typeof t!="number"||t<=0}m.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const H={...en},pe={...tn};function w({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(nn,{minHeight:e,align:n,gap:8,children:t})}const Kn={title:"Feedback/Toast",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function fn(t){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),t.dispatchEvent(e)}const W={};function vn(){const[t,e]=r.useState(!0);return a.jsxs(w,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(m,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(m,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(m,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(m,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const _={render:()=>a.jsx(vn,{})};function wn(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(m,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const z={render:()=>a.jsx(wn,{}),play:async({canvasElement:t})=>{const n=f(t.ownerDocument.body).getByRole("button",{name:"Close toast"});u.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),u.mouseDown(n),await l(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.pointerCancel(n),await l(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await l(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await l(()=>{o(n.style.transform).toContain("translateY(0")}),u.mouseDown(n),u.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function gn(){return a.jsx(w,{align:"start",children:a.jsx(m,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const $={render:()=>a.jsx(gn,{}),play:async({canvasElement:t})=>{const n=f(t.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),u.keyDown(n,{key:"Enter",ctrlKey:!0}),await l(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter",ctrlKey:!0}),u.keyDown(n,{key:"Enter"}),await l(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Enter"}),await l(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Spacebar"}),await l(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Spacebar"}),await l(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Space"}),await l(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Space"}),await l(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await l(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",keyCode:229,which:229}),await l(()=>{o(n.style.transform).toContain("translateY(0")})}};function hn(){return a.jsxs(w,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(m,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const J={render:()=>a.jsx(hn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=await e.findByRole("button",{name:"Before toast close"}),c=await e.findByRole("button",{name:"Close toast"});await y.click(n),await o(n).toHaveFocus(),await y.tab(),await o(c).toHaveFocus(),await o(c.style.boxShadow).toContain("0 0 0 3px"),u.mouseDown(c,{button:0,ctrlKey:!0}),await o(c.style.boxShadow).toContain("0 0 0 3px")}};function bn(){const[t,e]=r.useState(!0);return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(m,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(v,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const Q={render:()=>a.jsx(bn,{}),play:async({canvasElement:t})=>{const e=f(t),n=e.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await y.click(e.getByRole("button",{name:"Close blocking notice"})),await o(e.queryByRole("dialog")).not.toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("dialog")).toBeInTheDocument()}};function Bn(){const[t,e]=r.useState(!0);return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(m,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(v,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const X={render:()=>a.jsx(Bn,{}),play:async({canvasElement:t})=>{const e=f(t);await o(e.getByRole("alertdialog")).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close incident notice"})),await o(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("alertdialog")).toBeInTheDocument()}};function kn(){const[t,e]=r.useState(!0),[n,c]=r.useState("none"),[i,d]=r.useState("N/A"),D=r.useCallback(g=>{d(E=>E==="N/A"?g:`${E} -> ${g}`)},[]);return a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:pe,children:n})]}),a.jsxs("p",{style:H,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:pe,children:i})]}),a.jsx("p",{style:H,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(v,{variant:"outline",onClick:()=>{d("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(m,{open:t,onOpenChange:g=>{e(g),g||D("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{c(g),D(`reason:${g}`)}})]})}const Z={render:()=>a.jsx(kn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await l(()=>{o(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await y.click(e.getByRole("button",{name:"Close toast"})),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await y.click(e.getByRole("button",{name:"Reopen Toast"})),u.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),e.getByRole("status",{name:"Close reason telemetry"}).focus(),await y.keyboard("{Shift>}{Escape}{/Shift}"),await l(()=>{o(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await l(()=>{o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function En(){const[t,e]=r.useState(!0),[n,c]=r.useState("none");return a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:pe,children:n})]}),a.jsx(v,{variant:"outline",onClick:()=>{c("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(m,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:c})]})}const ee={render:()=>a.jsx(En,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await o(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await l(()=>{o(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Gt(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(m,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(m,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const te={render:()=>a.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument,c=await e.findByRole("status",{name:"First notice"}),i=await e.findByRole("status",{name:"Second notice"});await l(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",ctrlKey:!0}),u.keyDown(n,{key:"Escape",metaKey:!0}),await o(i).toBeInTheDocument(),await y.click(f(i).getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await l(()=>{o(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function xn(){const[t,e]=r.useState({first:!0,second:!0}),[n,c]=r.useState(!0);return a.jsxs(w,{minHeight:280,align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(m,{open:t.first,onOpenChange:i=>{e(d=>({...d,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(m,{open:t.second,onOpenChange:i=>{e(d=>({...d,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const ne={render:()=>a.jsx(xn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument,c=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await l(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await y.click(e.getByRole("button",{name:"Pin top toast"})),await l(()=>{o(c).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await y.click(e.getByRole("button",{name:"Unpin top toast"})),await l(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",repeat:!0}),await o(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Tn(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs(w,{minHeight:280,children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(m,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(m,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const ae={render:()=>a.jsx(Tn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),c=await e.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(c.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},oe={render:()=>a.jsxs(w,{minHeight:280,children:[a.jsx("p",{style:H,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Gt,{})]}),play:async({canvasElement:t})=>{const e=t.ownerDocument,n=f(e.body),c=await n.findByRole("status",{name:"First notice"}),i=await n.findByRole("status",{name:"Second notice"});await f(c).findByRole("button",{name:"Close toast"}).then(D=>D.focus()),await l(()=>{o(c).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await y.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await y.click(n.getByRole("button",{name:/reopen stack/i}));const d=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),u.mouseEnter(d),await l(()=>{o(d).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await y.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function Dn(){const[t,e]=r.useState(!0),[n,c]=r.useState(!0);return r.useEffect(()=>{if(!n)return;const i=d=>{d.key==="Escape"&&d.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(m,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Rn(){const[t,e]=r.useState(!0),[n,c]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(m,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Cn(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(m,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Sn(){const[t,e]=r.useState(!0),[n,c]=r.useState(0);return r.useEffect(()=>{const i=d=>{d.key==="Escape"&&d.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:H,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:pe,children:n})]}),a.jsx(m,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}function In(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(Zt,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(m,{open:t,onOpenChange:e,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const se={render:()=>a.jsx(Dn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable global Escape handler"})),await o(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},re={render:()=>a.jsx(Sn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},ce={render:()=>a.jsx(In,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Open escape overlay"})),await o(e.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await l(()=>{o(e.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await l(()=>{o(e.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},ie={render:()=>a.jsx(Rn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await o(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ue={render:()=>a.jsx(Cn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),fn(n),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},le={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await o(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},de={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await o(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var qe,Ke,Le;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:"{}",...(Le=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var Ye,Me,Ve;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ve=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ue,Ge,Ne;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ne=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var We,_e,ze;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(ze=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var $e,Je,Qe;J.parameters={...J.parameters,docs:{...($e=J.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;X.parameters={...X.parameters,docs:{...(tt=X.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=X.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,st,rt;Z.parameters={...Z.parameters,docs:{...(ot=Z.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=Z.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ct,it,ut;ee.parameters={...ee.parameters,docs:{...(ct=ee.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(it=ee.parameters)==null?void 0:it.docs)==null?void 0:ut.source}}};var lt,dt,pt;te.parameters={...te.parameters,docs:{...(lt=te.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=te.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,yt,ft;ne.parameters={...ne.parameters,docs:{...(mt=ne.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ft=(yt=ne.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var vt,wt,gt;ae.parameters={...ae.parameters,docs:{...(vt=ae.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=ae.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var ht,bt,Bt;oe.parameters={...oe.parameters,docs:{...(ht=oe.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Bt=(bt=oe.parameters)==null?void 0:bt.docs)==null?void 0:Bt.source}}};var kt,Et,xt;se.parameters={...se.parameters,docs:{...(kt=se.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(xt=(Et=se.parameters)==null?void 0:Et.docs)==null?void 0:xt.source}}};var Tt,Dt,Rt;re.parameters={...re.parameters,docs:{...(Tt=re.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Rt=(Dt=re.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var Ct,St,It;ce.parameters={...ce.parameters,docs:{...(Ct=ce.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(It=(St=ce.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var jt,Ft,Ot;ie.parameters={...ie.parameters,docs:{...(jt=ie.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ot=(Ft=ie.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};var Ht,At,Pt;ue.parameters={...ue.parameters,docs:{...(Ht=ue.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Pt=(At=ue.parameters)==null?void 0:At.docs)==null?void 0:Pt.source}}};var qt,Kt,Lt;le.parameters={...le.parameters,docs:{...(qt=le.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Lt=(Kt=le.parameters)==null?void 0:Kt.docs)==null?void 0:Lt.source}}};var Yt,Mt,Vt;de.parameters={...de.parameters,docs:{...(Yt=de.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Vt=(Mt=de.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};const Ln=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","FocusIntentReentry","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{Q as ActionRequired,X as ActionRequiredDanger,le as AriaLabelOverride,$ as CloseButtonKeyboardPressedState,z as CloseButtonPrimaryPointerOnly,Z as CloseReasonTelemetry,W as Default,ie as EscapeGuardedByToastHandler,ue as EscapeIgnoresImeComposition,se as EscapePreemptedByGlobalHandler,ce as EscapePreemptedByOverlayLayer,re as EscapePreemptedSkipsToastHook,ne as EscapeShortcutSync,te as EscapeStackOrder,J as FocusIntentReentry,oe as FocusedToastEscapesFirst,de as LiveRegionOff,ae as StackedViewportOffset,ee as TimeoutCloseReason,_ as ToneMatrix,Ln as __namedExportsOrder,Kn as default};
