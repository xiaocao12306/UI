import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as w}from"./Button-rBVi27TD.js";import{h as In}from"./DismissableLayer-0MVldSzJ.js";import{P as jn}from"./Popover-BXRvYEtZ.js";import{within as y,expect as o,userEvent as v,fireEvent as l,waitFor as d}from"./index-DgAF9SIF.js";import{s as An,a as Hn,b as Fn}from"./storyShowcase-Bw5VyCj0.js";const Pn={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},On=new Set(["button","link","menuitem","option","tab","checkbox","switch","radio","textbox","combobox","spinbutton","treeitem"]),qn={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Ln=14,Ge=new WeakMap;function Kn(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function S(e){const t=Ge.get(e);if(t)return t;const n={escapeStack:[],visualStacks:Kn(),listeners:new Set};return Ge.set(e,n),n}function Se(e){S(e).listeners.forEach(n=>{n()})}function Yn(e,t){const n=S(e);return n.listeners.add(t),()=>{n.listeners.delete(t)}}function We(e,t){const n=S(e),r=n.escapeStack.lastIndexOf(t);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(t),Se(e)}function Nn(e,t){const n=S(e),r=n.escapeStack.lastIndexOf(t);r>=0&&(n.escapeStack.splice(r,1),Se(e))}function hn(e,t){const n=e.visualStacks[t],r=t.startsWith("bottom")?-1:1;n.forEach((i,p)=>{const D=n.length-1-p;i.style.setProperty("--aurora-toast-stack-offset",`${D*r*Ln}px`)})}function _e(e,t,n){const r=S(e),i=r.visualStacks[n],p=i.lastIndexOf(t);p>=0&&i.splice(p,1),i.push(t),hn(r,n)}function Mn(e,t,n){const r=S(e),i=r.visualStacks[n],p=i.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(p<0)&&(i.splice(p,1),hn(r,n))}function ze(e,t){const n=S(e);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===t}return!1}function Un(e){return e.isComposing?!0:e.keyCode===229}function u({open:e,title:t,description:n,action:r,tone:i="info",live:p,duration:D,pauseOnHover:g=!0,closeOnEscape:E=!0,onEscapeKeyDown:L,closeLabel:be="Close toast",ariaLabel:Be,ariaLabelledBy:xe,position:I="bottom-right",onClose:K,onCloseReason:Y,onOpenChange:N}){const x=c.useRef(null);c.useRef(!1);const j=c.useRef(!0),Ee=c.useRef(!1),R=c.useRef(null),M=c.useRef(null),P=c.useRef(0),xn=Ce(r),U=q(r),C=D??(U?0:4e3),A=c.useRef(C),[En,Ie]=c.useState(!1),[je,O]=c.useState({hover:!1,focus:!1}),[ke,Ae]=c.useState(!1),[He,k]=c.useState(!1),[Fe,V]=c.useState(!1),[kn,Tn]=c.useState(!1),Pe=En||g&&(je.hover||je.focus),Oe=c.useId(),qe=c.useId(),Le=Ce(n),G=typeof xe=="string"&&xe.trim().length>0?xe.trim():void 0,Ke=G===void 0&&typeof Be=="string"&&Be.trim().length>0?Be.trim():void 0,Ye=Re(t),Ne=G?void 0:Ke??(Ye?void 0:"Toast"),Dn=typeof be=="string"&&be.trim().length>0?be.trim():"Close toast",W=c.useCallback(()=>{const s=x.current;Tn(!!(e&&E&&s&&ze(s.ownerDocument,s)))},[E,e]);c.useEffect(()=>{W()},[W]),c.useEffect(()=>{var m;const s=(m=x.current)==null?void 0:m.ownerDocument;if(s)return Yn(s,W)},[W]),c.useEffect(()=>{const s=x.current;if(!e||!s)return;const m=s.ownerDocument;return We(m,s),_e(m,s,I),()=>{Nn(m,s),Mn(m,s,I)}},[e,I]),c.useEffect(()=>{!e||!x.current||Se(x.current.ownerDocument)},[E,e]),c.useEffect(()=>{e||(O({hover:!1,focus:!1}),Ie(!1)),Ee.current=!1},[e]),c.useEffect(()=>{var h;if(!e)return;const s=((h=x.current)==null?void 0:h.ownerDocument)??document,m=()=>{Ie(s.visibilityState==="hidden")};return m(),s.addEventListener("visibilitychange",m),()=>{s.removeEventListener("visibilitychange",m)}},[e]),c.useEffect(()=>{var b;if(!e)return;const s=((b=x.current)==null?void 0:b.ownerDocument)??document,m=B=>{B.metaKey||B.altKey||B.ctrlKey||(j.current=!0)},h=B=>{"button"in B&&!De(B.button)||"ctrlKey"in B&&B.ctrlKey||(j.current=!1)};return s.addEventListener("keydown",m,!0),s.addEventListener("pointerdown",h,!0),s.addEventListener("mousedown",h,!0),s.addEventListener("touchstart",h,!0),()=>{s.removeEventListener("keydown",m,!0),s.removeEventListener("pointerdown",h,!0),s.removeEventListener("mousedown",h,!0),s.removeEventListener("touchstart",h,!0)}},[e]);const T=c.useCallback(()=>{R.current!==null&&((M.current??window).clearTimeout(R.current),R.current=null),M.current=null,P.current=0},[]),H=c.useCallback(s=>{Ee.current||(Ee.current=!0,T(),Y==null||Y(s),K==null||K(),N==null||N(!1))},[T,K,Y,N]),Rn=c.useCallback(()=>{H("close-button")},[H]),Me=c.useCallback(()=>{H("escape-key")},[H]),Te=c.useCallback(()=>{H("timeout")},[H]),Ue=c.useCallback(()=>{const s=x.current;if(!e||!s)return;const m=s.ownerDocument;We(m,s),_e(m,s,I)},[e,I]),_=c.useCallback(s=>{var h;if(s<=0){Te();return}T(),A.current=s,P.current=Date.now();const m=((h=x.current)==null?void 0:h.ownerDocument.defaultView)??window;M.current=m,R.current=m.setTimeout(()=>{R.current=null,M.current=null,P.current=0,A.current=0,Te()},s)},[T,Te]),Ve=c.useCallback(()=>{if(R.current===null||P.current===0)return;const s=Date.now()-P.current;A.current=Math.max(0,A.current-s),T()},[T]);if(c.useEffect(()=>{if(T(),A.current=C,!(!e||C<=0))return _(C),()=>{T()}},[T,e,C,_]),c.useEffect(()=>{if(!(!e||C<=0)){if(Pe){Ve();return}R.current===null&&_(A.current)}},[e,Ve,g,Pe,C,_]),c.useEffect(()=>{var h;if(!e||!E)return;const s=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||Un(b))return;const B=x.current;!B||!ze(B.ownerDocument,B)||In(B.ownerDocument)||b.defaultPrevented||(L==null||L(b),!b.defaultPrevented&&(b.preventDefault(),Me()))},m=((h=x.current)==null?void 0:h.ownerDocument)??document;return m.addEventListener("keydown",s),()=>{m.removeEventListener("keydown",s)}},[Me,E,L,e]),c.useEffect(()=>{},[Ke,Ye,G]),!e)return null;const Cn=U?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Sn=U?void 0:p??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:x,role:Cn,"data-close-on-escape":E?"true":"false","aria-modal":U?"false":void 0,"aria-live":Sn,"aria-atomic":"true","aria-keyshortcuts":kn?"Escape":void 0,"aria-label":Ne,"aria-labelledby":G??(Ne?void 0:Oe),"aria-describedby":Le?qe:void 0,onMouseEnter:()=>{Ue(),g&&O(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&O(s=>({...s,hover:!1}))},onFocusCapture:()=>{Ue(),g&&O(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&O(m=>({...m,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Pn[i],...qn[I]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Oe,style:{color:"var(--aurora-text-primary)"},children:t}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Rn,"aria-label":Dn,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Ae(!0)},onMouseLeave:()=>{Ae(!1),k(!1)},onPointerDown:s=>{s.ctrlKey||De(s.button)&&(j.current=!1,V(!1),k(!0))},onPointerUp:s=>{De(s.button)&&k(!1)},onMouseDown:s=>{s.button!==0||s.ctrlKey||(j.current=!1,V(!1),k(!0))},onMouseUp:s=>{s.button===0&&k(!1)},onPointerCancel:()=>{k(!1)},onKeyDown:s=>{j.current=!0,!s.defaultPrevented&&(Wn(s)||$e(s.key)&&!Gn(s)&&!s.repeat&&k(!0))},onKeyUp:s=>{$e(s.key)&&k(!1)},onFocus:s=>{V(Vn(s.currentTarget,j.current))},onBlur:()=>{V(!1),k(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ke||Fe?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:He?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ke?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ke?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Fe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:He?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),Le?a.jsx("div",{id:qe,style:{color:"var(--aurora-text-secondary)"},children:n}):null,xn?a.jsx("div",{children:r}):null]})}function Vn(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function $e(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Gn(e){return e.ctrlKey||e.metaKey||e.altKey}function Wn(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function De(e){return typeof e!="number"||e<=0}function Re(e){if(typeof e=="string")return e.trim().length>0;if(typeof e=="number")return!0;if(Array.isArray(e))return e.some(n=>Re(n));if(!c.isValidElement(e))return!1;const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?!1:typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?!0:Re(t.children)}function Ce(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Ce(t)):c.isValidElement(e)}function q(e){if(e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number")return!1;if(Array.isArray(e))return e.some(n=>q(n));if(!c.isValidElement(e))return!1;const t=e.props;return e.type===c.Fragment?q(t.children):typeof e.type=="string"?_n(e.type,t)||Je(t)?!0:q(t.children):Je(t)?!0:q(t.children)}function _n(e,t){if(bn(t))return!1;const n=e.toLowerCase();return n==="button"||n==="input"||n==="select"||n==="textarea"?!0:n==="a"?typeof t.href=="string"&&t.href.trim().length>0||typeof t.target=="string":!1}function Je(e){if(bn(e))return!1;const t=zn(e.role),n=typeof e.onClick=="function"||typeof e.onKeyDown=="function"||typeof e.onKeyUp=="function"||typeof e.onKeyPress=="function"||typeof e.onMouseDown=="function"||typeof e.onPointerDown=="function"||typeof e.onTouchStart=="function",r=typeof e.href=="string"&&e.href.trim().length>0||typeof e.to=="string"&&e.to.trim().length>0,i=typeof e.tabIndex=="number"&&e.tabIndex>=0;return t||r||e.contentEditable===!0||n?!0:i&&(t||n)}function bn(e){return e.disabled===!0||e["aria-disabled"]===!0||e["aria-disabled"]==="true"}function zn(e){return typeof e!="string"?!1:e.split(/\s+/).some(t=>On.has(t.trim().toLowerCase()))}u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const F={...An},he={...Hn};function f({children:e,minHeight:t=260,align:n="stretch"}){return a.jsx(Fn,{minHeight:t,align:n,gap:8,children:e})}const ba={title:"Feedback/Toast",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function $n(e){const t=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const z={};function Jn(){const[e,t]=c.useState(!0);return a.jsxs(f,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toasts"})}),a.jsx(u,{open:e,onOpenChange:t,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:e,onOpenChange:t,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(u,{open:e,onOpenChange:t,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(u,{open:e,onOpenChange:t,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const $={render:()=>a.jsx(Jn,{})};function Qn(){const[e,t]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(u,{open:e,onOpenChange:t,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const J={render:()=>a.jsx(Qn,{}),play:async({canvasElement:e})=>{const n=y(e.ownerDocument.body).getByRole("button",{name:"Close toast"});l.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),l.mouseDown(n),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.pointerCancel(n),await d(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.mouseDown(n),l.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function Xn(){return a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const Q={render:()=>a.jsx(Xn,{}),play:async({canvasElement:e})=>{const n=y(e.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),l.keyDown(n,{key:"Enter",ctrlKey:!0}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyUp(n,{key:"Enter",ctrlKey:!0}),l.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.keyUp(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.keyUp(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),l.keyUp(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),l.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")});const r=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});r.preventDefault(),n.dispatchEvent(r),await d(()=>{o(n.style.transform).toContain("translateY(0")})}};function Zn(){return a.jsxs(f,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(u,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const X={render:()=>a.jsx(Zn,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=await t.findByRole("button",{name:"Before toast close"}),r=await t.findByRole("button",{name:"Close toast"});await v.click(n),await o(n).toHaveFocus(),await v.tab(),await o(r).toHaveFocus(),await o(r.style.boxShadow).toContain("0 0 0 3px"),l.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.style.boxShadow).toContain("0 0 0 3px")}};function ea(){const[e,t]=c.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(u,{open:e,onOpenChange:t,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Acknowledge"})})]})}const Z={render:()=>a.jsx(ea,{}),play:async({canvasElement:e})=>{const t=y(e),n=t.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(t.getByRole("button",{name:"Close blocking notice"})),await o(t.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("dialog")).toBeInTheDocument()}};function ta(){const[e,t]=c.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(u,{open:e,onOpenChange:t,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Confirm owner"})})]})}const ee={render:()=>a.jsx(ta,{}),play:async({canvasElement:e})=>{const t=y(e);await o(t.getByRole("alertdialog")).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close incident notice"})),await o(t.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("alertdialog")).toBeInTheDocument()}};function na(){return a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,onOpenChange:()=>{},title:"Passive update",description:"Blank action content should not upgrade toast role semantics.",action:"   "})})}const te={render:()=>a.jsx(na,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive update"})).toBeNull()}};function aa(){return a.jsxs(f,{align:"start",children:[a.jsx(u,{open:!0,onOpenChange:()=>{},title:"Passive update text",description:"Text action content should not upgrade toast role semantics.",action:"Undo later"}),a.jsx(u,{open:!0,onOpenChange:()=>{},title:"Passive update element",description:"Non-interactive action elements should keep passive toast semantics.",action:a.jsx("span",{children:"Undo later"})}),a.jsx(u,{open:!0,onOpenChange:()=>{},title:"Action required nested",description:"Interactive descendants still upgrade toast role semantics.",action:a.jsx("span",{children:a.jsx("button",{type:"button",children:"Undo now"})})})]})}const ne={render:()=>a.jsx(aa,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update text"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive update element"})).toBeInTheDocument(),await o(t.getAllByText("Undo later")).toHaveLength(2),await o(t.queryByRole("dialog",{name:"Passive update text"})).toBeNull(),await o(t.queryByRole("dialog",{name:"Passive update element"})).toBeNull(),await o(t.getByRole("dialog",{name:"Action required nested"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Undo now"})).toBeInTheDocument()}};function oa(){const[e,t]=c.useState(!0),[n,r]=c.useState("none"),[i,p]=c.useState("N/A"),D=c.useCallback(g=>{p(E=>E==="N/A"?g:`${E} -> ${g}`)},[]);return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:he,children:n})]}),a.jsxs("p",{style:F,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:he,children:i})]}),a.jsx("p",{style:F,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(w,{variant:"outline",onClick:()=>{p("N/A"),t(!0)},children:"Reopen Toast"}),a.jsx(u,{open:e,onOpenChange:g=>{t(g),g||D("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{r(g),D(`reason:${g}`)}})]})}const ae={render:()=>a.jsx(oa,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument;await d(()=>{o(t.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(t.getByRole("button",{name:"Reopen Toast"})),l.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(t.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),t.getByRole("status",{name:"Close reason telemetry"}).focus(),await v.keyboard("{Shift>}{Escape}{/Shift}"),await d(()=>{o(t.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await d(()=>{o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function sa(){const[e,t]=c.useState(!0),[n,r]=c.useState("none");return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:he,children:n})]}),a.jsx(w,{variant:"outline",onClick:()=>{r("none"),t(!0)},children:"Reopen Timed Toast"}),a.jsx(u,{open:e,onOpenChange:t,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const oe={render:()=>a.jsx(sa,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body);await o(await t.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await d(()=>{o(t.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(t.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Bn(){const[e,t]=c.useState({first:!0,second:!0});return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(u,{open:e.first,onOpenChange:n=>{t(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(u,{open:e.second,onOpenChange:n=>{t(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const se={render:()=>a.jsx(Bn,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument,r=await t.findByRole("status",{name:"First notice"}),i=await t.findByRole("status",{name:"Second notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),l.keyDown(n,{key:"Escape",ctrlKey:!0}),l.keyDown(n,{key:"Escape",metaKey:!0}),await o(i).toBeInTheDocument(),await v.click(y(i).getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await d(()=>{o(t.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function ra(){const[e,t]=c.useState({first:!0,second:!0}),[n,r]=c.useState(!0);return a.jsxs(f,{minHeight:280,align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(u,{open:e.first,onOpenChange:i=>{t(p=>({...p,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:e.second,onOpenChange:i=>{t(p=>({...p,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const re={render:()=>a.jsx(ra,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument,r=await t.findByRole("status",{name:"Base notice"}),i=await t.findByRole("status",{name:"Top notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(t.getByRole("button",{name:"Pin top toast"})),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(t.getByRole("button",{name:"Unpin top toast"})),await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),l.keyDown(n,{key:"Escape",repeat:!0}),await o(t.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function ca(){const[e,t]=c.useState({first:!0,second:!0});return a.jsxs(f,{minHeight:280,children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(u,{open:e.first,onOpenChange:n=>{t(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(u,{open:e.second,onOpenChange:n=>{t(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const ce={render:()=>a.jsx(ca,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=await t.findByRole("status",{name:"First stack item"}),r=await t.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},ie={render:()=>a.jsxs(f,{minHeight:280,children:[a.jsx("p",{style:F,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Bn,{})]}),play:async({canvasElement:e})=>{const t=e.ownerDocument,n=y(t.body),r=await n.findByRole("status",{name:"First notice"}),i=await n.findByRole("status",{name:"Second notice"});await y(r).findByRole("button",{name:"Close toast"}).then(D=>D.focus()),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await v.click(n.getByRole("button",{name:/reopen stack/i}));const p=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),l.mouseEnter(p),await d(()=>{o(p).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function ia(){const[e,t]=c.useState(!0),[n,r]=c.useState(!0);return c.useEffect(()=>{if(!n)return;const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(u,{open:e,onOpenChange:t,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function ua(){const[e,t]=c.useState(!0),[n,r]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(u,{open:e,onOpenChange:t,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function la(){const[e,t]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(u,{open:e,onOpenChange:t,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function da(){const[e,t]=c.useState(!0),[n,r]=c.useState(0);return c.useEffect(()=>{const i=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:he,children:n})]}),a.jsx(u,{open:e,onOpenChange:t,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}function pa(){const[e,t]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(jn,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(u,{open:e,onOpenChange:t,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const ue={render:()=>a.jsx(ia,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable global Escape handler"})),await o(t.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},le={render:()=>a.jsx(da,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await o(t.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},de={render:()=>a.jsx(pa,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Open escape overlay"})),await o(t.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},pe={render:()=>a.jsx(ua,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable toast Escape guard"})),await o(t.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},me={render:()=>a.jsx(la,{}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),l.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),$n(n),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ye={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body);await o(t.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},fe={render:()=>a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,duration:0,title:"Release notice",description:0})}),play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body),n=t.getByRole("status",{name:"Release notice"}),r=t.getAllByText("0");await o(r).toHaveLength(1),await o(n).toHaveAttribute("aria-describedby",r[0].id)}},ve={render:()=>a.jsxs(f,{align:"start",children:[a.jsx("h3",{id:"toast-heading",style:{margin:0},children:"Build artifact ready heading"}),a.jsx(u,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Fallback build artifact notification",ariaLabelledBy:"toast-heading"})]}),play:async({canvasElement:e})=>{const n=y(e.ownerDocument.body).getByRole("status",{name:"Build artifact ready heading"});await o(n).toHaveAttribute("aria-labelledby","toast-heading"),await o(n).not.toHaveAttribute("aria-label")}},we={render:()=>a.jsx(f,{align:"start",children:a.jsx(u,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=y(e.ownerDocument.body).getByRole("status",{name:"Toast"});await o(n).toHaveAttribute("aria-label","Toast"),await o(n).not.toHaveAttribute("aria-labelledby")}},ge={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:e})=>{const t=y(e.ownerDocument.body);await o(t.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Qe,Xe,Ze;z.parameters={...z.parameters,docs:{...(Qe=z.parameters)==null?void 0:Qe.docs,source:{originalSource:"{}",...(Ze=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;$.parameters={...$.parameters,docs:{...(et=$.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(nt=(tt=$.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,st;J.parameters={...J.parameters,docs:{...(at=J.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(ot=J.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,ct,it;Q.parameters={...Q.parameters,docs:{...(rt=Q.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(ct=Q.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var ut,lt,dt;X.parameters={...X.parameters,docs:{...(ut=X.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(lt=X.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var pt,mt,yt;Z.parameters={...Z.parameters,docs:{...(pt=Z.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=Z.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var ft,vt,wt;ee.parameters={...ee.parameters,docs:{...(ft=ee.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(wt=(vt=ee.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var gt,ht,bt;te.parameters={...te.parameters,docs:{...(gt=te.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(bt=(ht=te.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var Bt,xt,Et;ne.parameters={...ne.parameters,docs:{...(Bt=ne.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: () => <TextActionSemanticsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Passive update text"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("status", {
      name: "Passive update element"
    })).toBeInTheDocument();
    await expect(canvas.getAllByText("Undo later")).toHaveLength(2);
    await expect(canvas.queryByRole("dialog", {
      name: "Passive update text"
    })).toBeNull();
    await expect(canvas.queryByRole("dialog", {
      name: "Passive update element"
    })).toBeNull();
    await expect(canvas.getByRole("dialog", {
      name: "Action required nested"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Undo now"
    })).toBeInTheDocument();
  }
}`,...(Et=(xt=ne.parameters)==null?void 0:xt.docs)==null?void 0:Et.source}}};var kt,Tt,Dt;ae.parameters={...ae.parameters,docs:{...(kt=ae.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Dt=(Tt=ae.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var Rt,Ct,St;oe.parameters={...oe.parameters,docs:{...(Rt=oe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(St=(Ct=oe.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var It,jt,At;se.parameters={...se.parameters,docs:{...(It=se.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(At=(jt=se.parameters)==null?void 0:jt.docs)==null?void 0:At.source}}};var Ht,Ft,Pt;re.parameters={...re.parameters,docs:{...(Ht=re.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Pt=(Ft=re.parameters)==null?void 0:Ft.docs)==null?void 0:Pt.source}}};var Ot,qt,Lt;ce.parameters={...ce.parameters,docs:{...(Ot=ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Lt=(qt=ce.parameters)==null?void 0:qt.docs)==null?void 0:Lt.source}}};var Kt,Yt,Nt;ie.parameters={...ie.parameters,docs:{...(Kt=ie.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Nt=(Yt=ie.parameters)==null?void 0:Yt.docs)==null?void 0:Nt.source}}};var Mt,Ut,Vt;ue.parameters={...ue.parameters,docs:{...(Mt=ue.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Vt=(Ut=ue.parameters)==null?void 0:Ut.docs)==null?void 0:Vt.source}}};var Gt,Wt,_t;le.parameters={...le.parameters,docs:{...(Gt=le.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(_t=(Wt=le.parameters)==null?void 0:Wt.docs)==null?void 0:_t.source}}};var zt,$t,Jt;de.parameters={...de.parameters,docs:{...(zt=de.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Jt=($t=de.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;pe.parameters={...pe.parameters,docs:{...(Qt=pe.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=pe.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var en,tn,nn;me.parameters={...me.parameters,docs:{...(en=me.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=me.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,sn;ye.parameters={...ye.parameters,docs:{...(an=ye.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(sn=(on=ye.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,un;fe.parameters={...fe.parameters,docs:{...(rn=fe.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(un=(cn=fe.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var ln,dn,pn;ve.parameters={...ve.parameters,docs:{...(ln=ve.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(pn=(dn=ve.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var mn,yn,fn;we.parameters={...we.parameters,docs:{...(mn=we.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(fn=(yn=we.parameters)==null?void 0:yn.docs)==null?void 0:fn.source}}};var vn,wn,gn;ge.parameters={...ge.parameters,docs:{...(vn=ge.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(gn=(wn=ge.parameters)==null?void 0:wn.docs)==null?void 0:gn.source}}};const Ba=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","FocusIntentReentry","ActionRequired","ActionRequiredDanger","BlankActionSemantics","TextActionSemantics","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","NumericDescriptionSemantics","LabelledByPrecedence","NonTextTitleAutoNameFallback","LiveRegionOff"];export{Z as ActionRequired,ee as ActionRequiredDanger,ye as AriaLabelOverride,te as BlankActionSemantics,Q as CloseButtonKeyboardPressedState,J as CloseButtonPrimaryPointerOnly,ae as CloseReasonTelemetry,z as Default,pe as EscapeGuardedByToastHandler,me as EscapeIgnoresImeComposition,ue as EscapePreemptedByGlobalHandler,de as EscapePreemptedByOverlayLayer,le as EscapePreemptedSkipsToastHook,re as EscapeShortcutSync,se as EscapeStackOrder,X as FocusIntentReentry,ie as FocusedToastEscapesFirst,ve as LabelledByPrecedence,ge as LiveRegionOff,we as NonTextTitleAutoNameFallback,fe as NumericDescriptionSemantics,ce as StackedViewportOffset,ne as TextActionSemantics,oe as TimeoutCloseReason,$ as ToneMatrix,Ba as __namedExportsOrder,ba as default};
