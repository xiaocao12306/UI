import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as v}from"./Button-DmF53JnK.js";import{h as Qt}from"./DismissableLayer-CvOMiBFU.js";import{P as Xt}from"./Popover-BTdO5ZUn.js";import{within as f,expect as o,userEvent as y,fireEvent as d,waitFor as m}from"./index-DgAF9SIF.js";import{s as Zt,a as en,b as tn}from"./storyShowcase-Bw5VyCj0.js";const nn={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},an={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},on=14,je=new WeakMap;function sn(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function C(t){const e=je.get(t);if(e)return e;const n={escapeStack:[],visualStacks:sn(),listeners:new Set};return je.set(t,n),n}function he(t){C(t).listeners.forEach(n=>{n()})}function rn(t,e){const n=C(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function Oe(t,e){const n=C(t),c=n.escapeStack.lastIndexOf(e);c>=0&&n.escapeStack.splice(c,1),n.escapeStack.push(e),he(t)}function cn(t,e){const n=C(t),c=n.escapeStack.lastIndexOf(e);c>=0&&(n.escapeStack.splice(c,1),he(t))}function Vt(t,e){const n=t.visualStacks[e],c=e.startsWith("bottom")?-1:1;n.forEach((i,u)=>{const x=n.length-1-u;i.style.setProperty("--aurora-toast-stack-offset",`${x*c*on}px`)})}function Fe(t,e,n){const c=C(t),i=c.visualStacks[n],u=i.lastIndexOf(e);u>=0&&i.splice(u,1),i.push(e),Vt(c,n)}function un(t,e,n){const c=C(t),i=c.visualStacks[n],u=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(u<0)&&(i.splice(u,1),Vt(c,n))}function He(t,e){const n=C(t);for(let c=n.escapeStack.length-1;c>=0;c-=1){const i=n.escapeStack[c];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function ln(t){return t.isComposing?!0:t.keyCode===229}function p({open:t,title:e,description:n,action:c,tone:i="info",live:u,duration:x,pauseOnHover:g=!0,closeOnEscape:k=!0,onEscapeKeyDown:L,closeLabel:pe="Close toast",ariaLabel:me,position:S="bottom-right",onClose:K,onCloseReason:M,onOpenChange:Y}){const B=r.useRef(null);r.useRef(!1);const H=r.useRef(!0),ye=r.useRef(!1),D=r.useRef(null),V=r.useRef(null),A=r.useRef(0),P=r.Children.toArray(c).length>0,R=x??(P?0:4e3),I=r.useRef(R),[Ut,be]=r.useState(!1),[Be,q]=r.useState({hover:!1,focus:!1}),[fe,ke]=r.useState(!1),[Ee,j]=r.useState(!1),[xe,ve]=r.useState(!1),[Nt,Wt]=r.useState(!1),Te=Ut||g&&(Be.hover||Be.focus),De=r.useId(),Re=r.useId(),we=typeof me=="string"&&me.trim().length>0?me.trim():void 0,_t=typeof pe=="string"&&pe.trim().length>0?pe.trim():"Close toast",G=r.useCallback(()=>{const s=B.current;Wt(!!(t&&k&&s&&He(s.ownerDocument,s)))},[k,t]);r.useEffect(()=>{G()},[G]),r.useEffect(()=>{var l;const s=(l=B.current)==null?void 0:l.ownerDocument;if(s)return rn(s,G)},[G]),r.useEffect(()=>{const s=B.current;if(!t||!s)return;const l=s.ownerDocument;return Oe(l,s),Fe(l,s,S),()=>{cn(l,s),un(l,s,S)}},[t,S]),r.useEffect(()=>{!t||!B.current||he(B.current.ownerDocument)},[k,t]),r.useEffect(()=>{t||(q({hover:!1,focus:!1}),be(!1)),ye.current=!1},[t]),r.useEffect(()=>{var h;if(!t)return;const s=((h=B.current)==null?void 0:h.ownerDocument)??document,l=()=>{be(s.visibilityState==="hidden")};return l(),s.addEventListener("visibilitychange",l),()=>{s.removeEventListener("visibilitychange",l)}},[t]),r.useEffect(()=>{var b;if(!t)return;const s=((b=B.current)==null?void 0:b.ownerDocument)??document,l=T=>{T.metaKey||T.altKey||T.ctrlKey||(H.current=!0)},h=()=>{H.current=!1};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",h,!0),s.addEventListener("mousedown",h,!0),s.addEventListener("touchstart",h,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",h,!0),s.removeEventListener("mousedown",h,!0),s.removeEventListener("touchstart",h,!0)}},[t]);const E=r.useCallback(()=>{D.current!==null&&((V.current??window).clearTimeout(D.current),D.current=null),V.current=null,A.current=0},[]),O=r.useCallback(s=>{ye.current||(ye.current=!0,E(),M==null||M(s),K==null||K(),Y==null||Y(!1))},[E,K,M,Y]),zt=r.useCallback(()=>{O("close-button")},[O]),Ce=r.useCallback(()=>{O("escape-key")},[O]),ge=r.useCallback(()=>{O("timeout")},[O]),Se=r.useCallback(()=>{const s=B.current;if(!t||!s)return;const l=s.ownerDocument;Oe(l,s),Fe(l,s,S)},[t,S]),U=r.useCallback(s=>{var h;if(s<=0){ge();return}E(),I.current=s,A.current=Date.now();const l=((h=B.current)==null?void 0:h.ownerDocument.defaultView)??window;V.current=l,D.current=l.setTimeout(()=>{D.current=null,V.current=null,A.current=0,I.current=0,ge()},s)},[E,ge]),Ie=r.useCallback(()=>{if(D.current===null||A.current===0)return;const s=Date.now()-A.current;I.current=Math.max(0,I.current-s),E()},[E]);if(r.useEffect(()=>{if(E(),I.current=R,!(!t||R<=0))return U(R),()=>{E()}},[E,t,R,U]),r.useEffect(()=>{if(!(!t||R<=0)){if(Te){Ie();return}D.current===null&&U(I.current)}},[t,Ie,g,Te,R,U]),r.useEffect(()=>{var h;if(!t||!k)return;const s=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||ln(b))return;const T=B.current;!T||!He(T.ownerDocument,T)||Qt(T.ownerDocument)||b.defaultPrevented||(L==null||L(b),!b.defaultPrevented&&(b.preventDefault(),Ce()))},l=((h=B.current)==null?void 0:h.ownerDocument)??document;return l.addEventListener("keydown",s),()=>{l.removeEventListener("keydown",s)}},[Ce,k,L,t]),r.useEffect(()=>{},[we,e]),!t)return null;const $t=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Jt=P?void 0:u??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:B,role:$t,"data-close-on-escape":k?"true":"false","aria-modal":P?"false":void 0,"aria-live":Jt,"aria-atomic":"true","aria-keyshortcuts":Nt?"Escape":void 0,"aria-label":we,"aria-labelledby":we?void 0:De,"aria-describedby":n?Re:void 0,onMouseEnter:()=>{Se(),g&&q(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&q(s=>({...s,hover:!1}))},onFocusCapture:()=>{Se(),g&&q(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&q(l=>({...l,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...nn[i],...an[S]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:De,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:zt,"aria-label":_t,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{ke(!0)},onMouseLeave:()=>{ke(!1),j(!1)},onMouseDown:s=>{s.button===0&&(H.current=!1,ve(!1),j(!0))},onMouseUp:s=>{s.button===0&&j(!1)},onKeyDown:s=>{H.current=!0,!mn(s)&&Ae(s.key)&&!pn(s)&&!s.repeat&&j(!0)},onKeyUp:s=>{Ae(s.key)&&j(!1)},onFocus:s=>{ve(dn(s.currentTarget,H.current))},onBlur:()=>{ve(!1),j(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:fe||xe?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Ee?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":fe?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:fe?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:xe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:Ee?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:Re,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:c}):null]})}function dn(t,e){try{return t.matches(":focus-visible")}catch{return e}}function Ae(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function pn(t){return t.ctrlKey||t.metaKey||t.altKey}function mn(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}p.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const F={...Zt},de={...en};function w({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(tn,{minHeight:e,align:n,gap:8,children:t})}const qn={title:"Feedback/Toast",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function yn(t){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),t.dispatchEvent(e)}const N={};function fn(){const[t,e]=r.useState(!0);return a.jsxs(w,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(p,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(p,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(p,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(p,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const W={render:()=>a.jsx(fn,{})};function vn(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const _={render:()=>a.jsx(vn,{}),play:async({canvasElement:t})=>{const n=f(t.ownerDocument.body).getByRole("button",{name:"Close toast"});d.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),d.mouseDown(n),d.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function wn(){return a.jsx(w,{align:"start",children:a.jsx(p,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const z={render:()=>a.jsx(wn,{}),play:async({canvasElement:t})=>{const n=f(t.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),d.keyDown(n,{key:"Enter",ctrlKey:!0}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),d.keyUp(n,{key:"Enter",ctrlKey:!0}),d.keyDown(n,{key:"Enter"}),await m(()=>{o(n.style.transform).toContain("translateY(1px)")}),d.keyUp(n,{key:"Enter"}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),d.keyDown(n,{key:"Spacebar"}),await m(()=>{o(n.style.transform).toContain("translateY(1px)")}),d.keyUp(n,{key:"Spacebar"}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),d.keyDown(n,{key:"Space"}),await m(()=>{o(n.style.transform).toContain("translateY(1px)")}),d.keyUp(n,{key:"Space"}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),d.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),d.keyDown(n,{key:"Enter",keyCode:229,which:229}),await m(()=>{o(n.style.transform).toContain("translateY(0")})}};function gn(){return a.jsxs(w,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(p,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const $={render:()=>a.jsx(gn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=await e.findByRole("button",{name:"Before toast close"}),c=await e.findByRole("button",{name:"Close toast"});await y.click(n),await o(n).toHaveFocus(),await y.tab(),await o(c).toHaveFocus(),await o(c.style.boxShadow).toContain("0 0 0 3px")}};function hn(){const[t,e]=r.useState(!0);return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(p,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(v,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const J={render:()=>a.jsx(hn,{}),play:async({canvasElement:t})=>{const e=f(t),n=e.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await y.click(e.getByRole("button",{name:"Close blocking notice"})),await o(e.queryByRole("dialog")).not.toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("dialog")).toBeInTheDocument()}};function bn(){const[t,e]=r.useState(!0);return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(p,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(v,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const Q={render:()=>a.jsx(bn,{}),play:async({canvasElement:t})=>{const e=f(t);await o(e.getByRole("alertdialog")).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close incident notice"})),await o(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("alertdialog")).toBeInTheDocument()}};function Bn(){const[t,e]=r.useState(!0),[n,c]=r.useState("none"),[i,u]=r.useState("N/A"),x=r.useCallback(g=>{u(k=>k==="N/A"?g:`${k} -> ${g}`)},[]);return a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:de,children:n})]}),a.jsxs("p",{style:F,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:de,children:i})]}),a.jsx("p",{style:F,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(v,{variant:"outline",onClick:()=>{u("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(p,{open:t,onOpenChange:g=>{e(g),g||x("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{c(g),x(`reason:${g}`)}})]})}const X={render:()=>a.jsx(Bn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await m(()=>{o(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await y.click(e.getByRole("button",{name:"Close toast"})),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await y.click(e.getByRole("button",{name:"Reopen Toast"})),d.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),e.getByRole("status",{name:"Close reason telemetry"}).focus(),await y.keyboard("{Shift>}{Escape}{/Shift}"),await m(()=>{o(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await m(()=>{o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function kn(){const[t,e]=r.useState(!0),[n,c]=r.useState("none");return a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:de,children:n})]}),a.jsx(v,{variant:"outline",onClick:()=>{c("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(p,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:c})]})}const Z={render:()=>a.jsx(kn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await o(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await m(()=>{o(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Gt(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(p,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const ee={render:()=>a.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument,c=await e.findByRole("status",{name:"First notice"}),i=await e.findByRole("status",{name:"Second notice"});await m(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),d.keyDown(n,{key:"Escape",ctrlKey:!0}),d.keyDown(n,{key:"Escape",metaKey:!0}),await o(i).toBeInTheDocument(),await y.click(f(i).getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await m(()=>{o(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function En(){const[t,e]=r.useState({first:!0,second:!0}),[n,c]=r.useState(!0);return a.jsxs(w,{minHeight:280,align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(p,{open:t.first,onOpenChange:i=>{e(u=>({...u,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(p,{open:t.second,onOpenChange:i=>{e(u=>({...u,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const te={render:()=>a.jsx(En,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument,c=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await m(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await y.click(e.getByRole("button",{name:"Pin top toast"})),await m(()=>{o(c).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await y.click(e.getByRole("button",{name:"Unpin top toast"})),await m(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),d.keyDown(n,{key:"Escape",repeat:!0}),await o(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function xn(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs(w,{minHeight:280,children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(p,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(p,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const ne={render:()=>a.jsx(xn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),c=await e.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(c.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},ae={render:()=>a.jsxs(w,{minHeight:280,children:[a.jsx("p",{style:F,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Gt,{})]}),play:async({canvasElement:t})=>{const e=t.ownerDocument,n=f(e.body),c=await n.findByRole("status",{name:"First notice"}),i=await n.findByRole("status",{name:"Second notice"});await f(c).findByRole("button",{name:"Close toast"}).then(x=>x.focus()),await m(()=>{o(c).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await y.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await y.click(n.getByRole("button",{name:/reopen stack/i}));const u=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),d.mouseEnter(u),await m(()=>{o(u).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await y.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function Tn(){const[t,e]=r.useState(!0),[n,c]=r.useState(!0);return r.useEffect(()=>{if(!n)return;const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(p,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Dn(){const[t,e]=r.useState(!0),[n,c]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(p,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Rn(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Cn(){const[t,e]=r.useState(!0),[n,c]=r.useState(0);return r.useEffect(()=>{const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:F,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:de,children:n})]}),a.jsx(p,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}function Sn(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(Xt,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(p,{open:t,onOpenChange:e,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const oe={render:()=>a.jsx(Tn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable global Escape handler"})),await o(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},se={render:()=>a.jsx(Cn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape"}),await o(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},re={render:()=>a.jsx(Sn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Open escape overlay"})),await o(e.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape"}),await m(()=>{o(e.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape"}),await m(()=>{o(e.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},ce={render:()=>a.jsx(Dn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await o(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ie={render:()=>a.jsx(Rn,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),yn(n),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await y.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ue={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await o(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},le={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await o(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Pe,qe,Le;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:"{}",...(Le=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Ke,Me,Ye;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ye=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Ye.source}}};var Ve,Ge,Ue;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
    fireEvent.mouseUp(closeButton);
    await expect(closeButton.style.transform).toContain("translateY(0");
  }
}`,...(Ue=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Ne,We,_e;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(We=z.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var ze,$e,Je;$.parameters={...$.parameters,docs:{...(ze=$.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
  }
}`,...(Je=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;J.parameters={...J.parameters,docs:{...(Qe=J.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;Q.parameters={...Q.parameters,docs:{...(et=Q.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=Q.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,st;X.parameters={...X.parameters,docs:{...(at=X.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(ot=X.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,ct,it;Z.parameters={...Z.parameters,docs:{...(rt=Z.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(ct=Z.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var ut,lt,dt;ee.parameters={...ee.parameters,docs:{...(ut=ee.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(lt=ee.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var pt,mt,yt;te.parameters={...te.parameters,docs:{...(pt=te.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=te.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var ft,vt,wt;ne.parameters={...ne.parameters,docs:{...(ft=ne.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(wt=(vt=ne.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var gt,ht,bt;ae.parameters={...ae.parameters,docs:{...(gt=ae.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(bt=(ht=ae.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var Bt,kt,Et;oe.parameters={...oe.parameters,docs:{...(Bt=oe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Et=(kt=oe.parameters)==null?void 0:kt.docs)==null?void 0:Et.source}}};var xt,Tt,Dt;se.parameters={...se.parameters,docs:{...(xt=se.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Dt=(Tt=se.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var Rt,Ct,St;re.parameters={...re.parameters,docs:{...(Rt=re.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(St=(Ct=re.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var It,jt,Ot;ce.parameters={...ce.parameters,docs:{...(It=ce.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ot=(jt=ce.parameters)==null?void 0:jt.docs)==null?void 0:Ot.source}}};var Ft,Ht,At;ie.parameters={...ie.parameters,docs:{...(Ft=ie.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(At=(Ht=ie.parameters)==null?void 0:Ht.docs)==null?void 0:At.source}}};var Pt,qt,Lt;ue.parameters={...ue.parameters,docs:{...(Pt=ue.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Lt=(qt=ue.parameters)==null?void 0:qt.docs)==null?void 0:Lt.source}}};var Kt,Mt,Yt;le.parameters={...le.parameters,docs:{...(Kt=le.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Yt=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Yt.source}}};const Ln=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","FocusIntentReentry","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{J as ActionRequired,Q as ActionRequiredDanger,ue as AriaLabelOverride,z as CloseButtonKeyboardPressedState,_ as CloseButtonPrimaryPointerOnly,X as CloseReasonTelemetry,N as Default,ce as EscapeGuardedByToastHandler,ie as EscapeIgnoresImeComposition,oe as EscapePreemptedByGlobalHandler,re as EscapePreemptedByOverlayLayer,se as EscapePreemptedSkipsToastHook,te as EscapeShortcutSync,ee as EscapeStackOrder,$ as FocusIntentReentry,ae as FocusedToastEscapesFirst,le as LiveRegionOff,ne as StackedViewportOffset,Z as TimeoutCloseReason,W as ToneMatrix,Ln as __namedExportsOrder,qn as default};
