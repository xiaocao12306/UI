import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as w}from"./Button-rBVi27TD.js";import{h as Ln}from"./focusTabbable-gnwmp6b7.js";import{P as Kn}from"./Popover-DYhUPXSW.js";import{within as p,expect as o,userEvent as v,fireEvent as u,waitFor as d}from"./index-DgAF9SIF.js";import{s as Nn,a as Yn,b as Mn}from"./storyShowcase-Bw5VyCj0.js";const Un={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Vn=new Set(["button","link","menuitem","option","tab","checkbox","switch","radio","textbox","combobox","spinbutton","treeitem"]),Gn={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Wn=14,$e=new WeakMap;function zn(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function S(e){const t=$e.get(e);if(t)return t;const n={escapeStack:[],visualStacks:zn(),listeners:new Set};return $e.set(e,n),n}function Fe(e){S(e).listeners.forEach(n=>{n()})}function _n(e,t){const n=S(e);return n.listeners.add(t),()=>{n.listeners.delete(t)}}function Je(e,t){const n=S(e),r=n.escapeStack.lastIndexOf(t);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(t),Fe(e)}function $n(e,t){const n=S(e),r=n.escapeStack.lastIndexOf(t);r>=0&&(n.escapeStack.splice(r,1),Fe(e))}function Dn(e,t){const n=e.visualStacks[t],r=t.startsWith("bottom")?-1:1;n.forEach((c,m)=>{const D=n.length-1-m;c.style.setProperty("--aurora-toast-stack-offset",`${D*r*Wn}px`)})}function Qe(e,t,n){const r=S(e),c=r.visualStacks[n],m=c.lastIndexOf(t);m>=0&&c.splice(m,1),c.push(t),Dn(r,n)}function Jn(e,t,n){const r=S(e),c=r.visualStacks[n],m=c.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(m<0)&&(c.splice(m,1),Dn(r,n))}function Xe(e,t){const n=S(e);for(let r=n.escapeStack.length-1;r>=0;r-=1){const c=n.escapeStack[r];if((c==null?void 0:c.dataset.closeOnEscape)==="true")return c===t}return!1}function Qn(e){return e.isComposing?!0:e.keyCode===229}function l({open:e,title:t,description:n,action:r,tone:c="info",live:m,duration:D,pauseOnHover:g=!0,closeOnEscape:k=!0,onEscapeKeyDown:K,closeLabel:xe="Close toast",ariaLabel:ke,ariaLabelledBy:Ee,position:I="bottom-right",onClose:N,onCloseReason:Y,onOpenChange:M}){const x=i.useRef(null);i.useRef(!1);const j=i.useRef(!0),Te=i.useRef(!1),R=i.useRef(null),U=i.useRef(null),P=i.useRef(0),Sn=He(r),V=L(r),C=D??(V?0:4e3),A=i.useRef(C),[In,Pe]=i.useState(!1),[Oe,O]=i.useState({hover:!1,focus:!1}),[De,qe]=i.useState(!1),[Le,E]=i.useState(!1),[Ke,G]=i.useState(!1),[jn,An]=i.useState(!1),Ne=In||g&&(Oe.hover||Oe.focus),Ye=i.useId(),Me=i.useId(),Ue=He(n),Ve=he(n),Re=Ve.length>0,q=typeof Ee=="string"&&Ee.trim().length>0?Ee.trim():void 0,Ce=q===void 0&&typeof ke=="string"&&ke.trim().length>0?ke.trim():void 0,Se=ta(t),Ge=q?void 0:Ce??(Se?void 0:Re?Ve:"Toast"),Hn=q===void 0&&Ce===void 0&&!Se&&Re,Fn=typeof xe=="string"&&xe.trim().length>0?xe.trim():"Close toast",W=i.useCallback(()=>{const s=x.current;An(!!(e&&k&&s&&Xe(s.ownerDocument,s)))},[k,e]);i.useEffect(()=>{W()},[W]),i.useEffect(()=>{var y;const s=(y=x.current)==null?void 0:y.ownerDocument;if(s)return _n(s,W)},[W]),i.useEffect(()=>{const s=x.current;if(!e||!s)return;const y=s.ownerDocument;return Je(y,s),Qe(y,s,I),()=>{$n(y,s),Jn(y,s,I)}},[e,I]),i.useEffect(()=>{!e||!x.current||Fe(x.current.ownerDocument)},[k,e]),i.useEffect(()=>{e||(O({hover:!1,focus:!1}),Pe(!1)),Te.current=!1},[e]),i.useEffect(()=>{var b;if(!e)return;const s=((b=x.current)==null?void 0:b.ownerDocument)??document,y=()=>{Pe(s.visibilityState==="hidden")};return y(),s.addEventListener("visibilitychange",y),()=>{s.removeEventListener("visibilitychange",y)}},[e]),i.useEffect(()=>{var h;if(!e)return;const s=((h=x.current)==null?void 0:h.ownerDocument)??document,y=B=>{B.metaKey||B.altKey||B.ctrlKey||(j.current=!0)},b=B=>{"button"in B&&!je(B.button)||"ctrlKey"in B&&B.ctrlKey||(j.current=!1)};return s.addEventListener("keydown",y,!0),s.addEventListener("pointerdown",b,!0),s.addEventListener("mousedown",b,!0),s.addEventListener("touchstart",b,!0),()=>{s.removeEventListener("keydown",y,!0),s.removeEventListener("pointerdown",b,!0),s.removeEventListener("mousedown",b,!0),s.removeEventListener("touchstart",b,!0)}},[e]);const T=i.useCallback(()=>{R.current!==null&&((U.current??window).clearTimeout(R.current),R.current=null),U.current=null,P.current=0},[]),H=i.useCallback(s=>{Te.current||(Te.current=!0,T(),Y==null||Y(s),N==null||N(),M==null||M(!1))},[T,N,Y,M]),Pn=i.useCallback(()=>{H("close-button")},[H]),We=i.useCallback(()=>{H("escape-key")},[H]),Ie=i.useCallback(()=>{H("timeout")},[H]),ze=i.useCallback(()=>{const s=x.current;if(!e||!s)return;const y=s.ownerDocument;Je(y,s),Qe(y,s,I)},[e,I]),z=i.useCallback(s=>{var b;if(s<=0){Ie();return}T(),A.current=s,P.current=Date.now();const y=((b=x.current)==null?void 0:b.ownerDocument.defaultView)??window;U.current=y,R.current=y.setTimeout(()=>{R.current=null,U.current=null,P.current=0,A.current=0,Ie()},s)},[T,Ie]),_e=i.useCallback(()=>{if(R.current===null||P.current===0)return;const s=Date.now()-P.current;A.current=Math.max(0,A.current-s),T()},[T]);if(i.useEffect(()=>{if(T(),A.current=C,!(!e||C<=0))return z(C),()=>{T()}},[T,e,C,z]),i.useEffect(()=>{if(!(!e||C<=0)){if(Ne){_e();return}R.current===null&&z(A.current)}},[e,_e,g,Ne,C,z]),i.useEffect(()=>{var b;if(!e||!k)return;const s=h=>{if(h.key!=="Escape"||h.altKey||h.ctrlKey||h.metaKey||h.repeat||Qn(h))return;const B=x.current;!B||!Xe(B.ownerDocument,B)||Ln(B.ownerDocument)||h.defaultPrevented||(K==null||K(h),!h.defaultPrevented&&(h.preventDefault(),We()))},y=((b=x.current)==null?void 0:b.ownerDocument)??document;return y.addEventListener("keydown",s),()=>{y.removeEventListener("keydown",s)}},[We,k,K,e]),i.useEffect(()=>{},[Ce,Re,Se,q]),!e)return null;const On=V?c==="danger"?"alertdialog":"dialog":c==="danger"?"alert":"status",qn=V?void 0:m??(c==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:x,role:On,"data-close-on-escape":k?"true":"false","aria-modal":V?"false":void 0,"aria-live":qn,"aria-atomic":"true","aria-keyshortcuts":jn?"Escape":void 0,"aria-label":Ge,"aria-labelledby":q??(Ge?void 0:Ye),"aria-describedby":Ue&&!Hn?Me:void 0,onMouseEnter:()=>{ze(),g&&O(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&O(s=>({...s,hover:!1}))},onFocusCapture:()=>{ze(),g&&O(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&O(y=>({...y,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Un[c],...Gn[I]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Ye,style:{color:"var(--aurora-text-primary)"},children:t}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Pn,"aria-label":Fn,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{qe(!0)},onMouseLeave:()=>{qe(!1),E(!1)},onPointerDown:s=>{s.ctrlKey||je(s.button)&&(j.current=!1,G(!1),E(!0))},onPointerUp:s=>{je(s.button)&&E(!1)},onMouseDown:s=>{s.button!==0||s.ctrlKey||(j.current=!1,G(!1),E(!0))},onMouseUp:s=>{s.button===0&&E(!1)},onPointerCancel:()=>{E(!1)},onKeyDown:s=>{j.current=!0,!s.defaultPrevented&&(ea(s)||Ze(s.key)&&!Zn(s)&&!s.repeat&&E(!0))},onKeyUp:s=>{Ze(s.key)&&E(!1)},onFocus:s=>{G(Xn(s.currentTarget,j.current))},onBlur:()=>{G(!1),E(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:De||Ke?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Le?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":De?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:De?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Ke?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:Le?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),Ue?a.jsx("div",{id:Me,style:{color:"var(--aurora-text-secondary)"},children:n}):null,Sn?a.jsx("div",{children:r}):null]})}function Xn(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function Ze(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Zn(e){return e.ctrlKey||e.metaKey||e.altKey}function ea(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function je(e){return typeof e!="number"||e<=0}function ta(e){return he(e).length>0}function he(e){if(typeof e=="string")return Ae(e);if(typeof e=="number")return String(e);if(Array.isArray(e))return Ae(e.map(n=>he(n)).filter(n=>n.length>0).join(" "));if(!i.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?Ae(t["aria-label"]):he(t.children)}function He(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>He(t)):i.isValidElement(e)}function L(e){if(e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number")return!1;if(Array.isArray(e))return e.some(n=>L(n));if(!i.isValidElement(e))return!1;const t=e.props;return e.type===i.Fragment?L(t.children):typeof e.type=="string"?na(e.type,t)||et(t)?!0:L(t.children):et(t)?!0:L(t.children)}function na(e,t){if(Rn(t))return!1;const n=e.toLowerCase();return n==="button"||n==="input"||n==="select"||n==="textarea"?!0:n==="a"?typeof t.href=="string"&&t.href.trim().length>0||typeof t.target=="string":!1}function et(e){if(Rn(e))return!1;const t=aa(e.role),n=typeof e.onClick=="function"||typeof e.onKeyDown=="function"||typeof e.onKeyUp=="function"||typeof e.onKeyPress=="function"||typeof e.onMouseDown=="function"||typeof e.onPointerDown=="function"||typeof e.onTouchStart=="function",r=typeof e.href=="string"&&e.href.trim().length>0||typeof e.to=="string"&&e.to.trim().length>0,c=typeof e.tabIndex=="number"&&e.tabIndex>=0;return t||r||e.contentEditable===!0||n?!0:c}function Rn(e){return e.disabled===!0||e["aria-disabled"]===!0||e["aria-disabled"]==="true"}function aa(e){return typeof e!="string"?!1:e.split(/\s+/).some(t=>Vn.has(t.trim().toLowerCase()))}function Ae(e){return e.replace(/\s+/g," ").trim()}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const F={...Nn},Be={...Yn};function f({children:e,minHeight:t=260,align:n="stretch"}){return a.jsx(Mn,{minHeight:t,align:n,gap:8,children:e})}const Sa={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function oa(e){const t=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const _={};function sa(){const[e,t]=i.useState(!0);return a.jsxs(f,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:e,onOpenChange:t,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:e,onOpenChange:t,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const $={render:()=>a.jsx(sa,{})};function ra(){const[e,t]=i.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const J={render:()=>a.jsx(ra,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});u.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),u.mouseDown(n),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.pointerCancel(n),await d(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.mouseDown(n),u.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function ia(){return a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const Q={render:()=>a.jsx(ia,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),u.keyDown(n,{key:"Enter",ctrlKey:!0}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter",ctrlKey:!0}),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")});const r=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});r.preventDefault(),n.dispatchEvent(r),await d(()=>{o(n.style.transform).toContain("translateY(0")})}};function ca(){return a.jsxs(f,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const X={render:()=>a.jsx(ca,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=await t.findByRole("button",{name:"Before toast close"}),r=await t.findByRole("button",{name:"Close toast"});await v.click(n),await o(n).toHaveFocus(),await v.tab(),await o(r).toHaveFocus(),await o(r.style.boxShadow).toContain("0 0 0 3px"),u.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.style.boxShadow).toContain("0 0 0 3px")}};function la(){const[e,t]=i.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Acknowledge"})})]})}const Z={render:()=>a.jsx(la,{}),play:async({canvasElement:e})=>{const t=p(e),n=t.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(t.getByRole("button",{name:"Close blocking notice"})),await o(t.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("dialog")).toBeInTheDocument()}};function ua(){const[e,t]=i.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Confirm owner"})})]})}const ee={render:()=>a.jsx(ua,{}),play:async({canvasElement:e})=>{const t=p(e);await o(t.getByRole("alertdialog")).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close incident notice"})),await o(t.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("alertdialog")).toBeInTheDocument()}};function da(){return a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update",description:"Blank action content should not upgrade toast role semantics.",action:"   "})})}const te={render:()=>a.jsx(da,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive update"})).toBeNull()}};function pa(){return a.jsxs(f,{align:"start",children:[a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update text",description:"Text action content should not upgrade toast role semantics.",action:"Undo later"}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update element",description:"Non-interactive action elements should keep passive toast semantics.",action:a.jsx("span",{children:"Undo later"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required nested",description:"Interactive descendants still upgrade toast role semantics.",action:a.jsx("span",{children:a.jsx("button",{type:"button",children:"Undo now"})})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required focusable",description:"Focusable action nodes should also upgrade toast role semantics.",action:a.jsx("span",{tabIndex:0,children:"Review details"})})]})}const ne={render:()=>a.jsx(pa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update text"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive update element"})).toBeInTheDocument(),await o(t.getAllByText("Undo later")).toHaveLength(2),await o(t.queryByRole("dialog",{name:"Passive update text"})).toBeNull(),await o(t.queryByRole("dialog",{name:"Passive update element"})).toBeNull(),await o(t.getByRole("dialog",{name:"Action required nested"})).toBeInTheDocument(),await o(t.getByRole("dialog",{name:"Action required focusable"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Undo now"})).toBeInTheDocument(),await o(t.getByText("Review details")).toBeInTheDocument()}};function ma(){const[e,t]=i.useState(!0),[n,r]=i.useState("none"),[c,m]=i.useState("N/A"),D=i.useCallback(g=>{m(k=>k==="N/A"?g:`${k} -> ${g}`)},[]);return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:Be,children:n})]}),a.jsxs("p",{style:F,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:Be,children:c})]}),a.jsx("p",{style:F,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(w,{variant:"outline",onClick:()=>{m("N/A"),t(!0)},children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:g=>{t(g),g||D("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{r(g),D(`reason:${g}`)}})]})}const ae={render:()=>a.jsx(ma,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await d(()=>{o(t.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(t.getByRole("button",{name:"Reopen Toast"})),u.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(t.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),t.getByRole("status",{name:"Close reason telemetry"}).focus(),await v.keyboard("{Shift>}{Escape}{/Shift}"),await d(()=>{o(t.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await d(()=>{o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function ya(){const[e,t]=i.useState(!0),[n,r]=i.useState("none");return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:Be,children:n})]}),a.jsx(w,{variant:"outline",onClick:()=>{r("none"),t(!0)},children:"Reopen Timed Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const oe={render:()=>a.jsx(ya,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(await t.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await d(()=>{o(t.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(t.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Cn(){const[e,t]=i.useState({first:!0,second:!0});return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const se={render:()=>a.jsx(Cn,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument,r=await t.findByRole("status",{name:"First notice"}),c=await t.findByRole("status",{name:"Second notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",ctrlKey:!0}),u.keyDown(n,{key:"Escape",metaKey:!0}),await o(c).toBeInTheDocument(),await v.click(p(c).getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await d(()=>{o(t.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function fa(){const[e,t]=i.useState({first:!0,second:!0}),[n,r]=i.useState(!0);return a.jsxs(f,{minHeight:280,align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(w,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(l,{open:e.first,onOpenChange:c=>{t(m=>({...m,first:c}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e.second,onOpenChange:c=>{t(m=>({...m,second:c}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const re={render:()=>a.jsx(fa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument,r=await t.findByRole("status",{name:"Base notice"}),c=await t.findByRole("status",{name:"Top notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(t.getByRole("button",{name:"Pin top toast"})),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(c).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(t.getByRole("button",{name:"Unpin top toast"})),await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",repeat:!0}),await o(t.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function va(){const[e,t]=i.useState({first:!0,second:!0});return a.jsxs(f,{minHeight:280,children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const ie={render:()=>a.jsx(va,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=await t.findByRole("status",{name:"First stack item"}),r=await t.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},ce={render:()=>a.jsxs(f,{minHeight:280,children:[a.jsx("p",{style:F,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Cn,{})]}),play:async({canvasElement:e})=>{const t=e.ownerDocument,n=p(t.body),r=await n.findByRole("status",{name:"First notice"}),c=await n.findByRole("status",{name:"Second notice"});await p(r).findByRole("button",{name:"Close toast"}).then(D=>D.focus()),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(c).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await v.click(n.getByRole("button",{name:/reopen stack/i}));const m=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),u.mouseEnter(m),await d(()=>{o(m).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function wa(){const[e,t]=i.useState(!0),[n,r]=i.useState(!0);return i.useEffect(()=>{if(!n)return;const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function ga(){const[e,t]=i.useState(!0),[n,r]=i.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function ba(){const[e,t]=i.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function ha(){const[e,t]=i.useState(!0),[n,r]=i.useState(0);return i.useEffect(()=>{const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:F,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:Be,children:n})]}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(c=>c+1)})]})}function Ba(){const[e,t]=i.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(Kn,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const le={render:()=>a.jsx(wa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable global Escape handler"})),await o(t.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},ue={render:()=>a.jsx(ha,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},de={render:()=>a.jsx(Ba,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Open escape overlay"})),await o(t.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},pe={render:()=>a.jsx(ga,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable toast Escape guard"})),await o(t.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},me={render:()=>a.jsx(ba,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),oa(n),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ye={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},fe={render:()=>a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:"Release notice",description:0})}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=t.getByRole("status",{name:"Release notice"}),r=t.getAllByText("0");await o(r).toHaveLength(1),await o(n).toHaveAttribute("aria-describedby",r[0].id)}},ve={render:()=>a.jsxs(f,{align:"start",children:[a.jsx("h3",{id:"toast-heading",style:{margin:0},children:"Build artifact ready heading"}),a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Fallback build artifact notification",ariaLabelledBy:"toast-heading"})]}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Build artifact ready heading"});await o(n).toHaveAttribute("aria-labelledby","toast-heading"),await o(n).not.toHaveAttribute("aria-label")}},we={render:()=>a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"})})}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Toast"});await o(n).toHaveAttribute("aria-label","Toast"),await o(n).not.toHaveAttribute("aria-labelledby")}},ge={render:()=>a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Auto fallback name for icon-only title."});await o(n).toHaveAttribute("aria-label","Auto fallback name for icon-only title."),await o(n).not.toHaveAttribute("aria-labelledby"),await o(n).not.toHaveAttribute("aria-describedby")}},be={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var tt,nt,at;_.parameters={..._.parameters,docs:{...(tt=_.parameters)==null?void 0:tt.docs,source:{originalSource:"{}",...(at=(nt=_.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,st,rt;$.parameters={...$.parameters,docs:{...(ot=$.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(rt=(st=$.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var it,ct,lt;J.parameters={...J.parameters,docs:{...(it=J.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ct=J.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,dt,pt;Q.parameters={...Q.parameters,docs:{...(ut=Q.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(dt=Q.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,yt,ft;X.parameters={...X.parameters,docs:{...(mt=X.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ft=(yt=X.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var vt,wt,gt;Z.parameters={...Z.parameters,docs:{...(vt=Z.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=Z.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var bt,ht,Bt;ee.parameters={...ee.parameters,docs:{...(bt=ee.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Bt=(ht=ee.parameters)==null?void 0:ht.docs)==null?void 0:Bt.source}}};var xt,kt,Et;te.parameters={...te.parameters,docs:{...(xt=te.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Et=(kt=te.parameters)==null?void 0:kt.docs)==null?void 0:Et.source}}};var Tt,Dt,Rt;ne.parameters={...ne.parameters,docs:{...(Tt=ne.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("dialog", {
      name: "Action required focusable"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Undo now"
    })).toBeInTheDocument();
    await expect(canvas.getByText("Review details")).toBeInTheDocument();
  }
}`,...(Rt=(Dt=ne.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var Ct,St,It;ae.parameters={...ae.parameters,docs:{...(Ct=ae.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(It=(St=ae.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var jt,At,Ht;oe.parameters={...oe.parameters,docs:{...(jt=oe.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ht=(At=oe.parameters)==null?void 0:At.docs)==null?void 0:Ht.source}}};var Ft,Pt,Ot;se.parameters={...se.parameters,docs:{...(Ft=se.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=se.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var qt,Lt,Kt;re.parameters={...re.parameters,docs:{...(qt=re.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Kt=(Lt=re.parameters)==null?void 0:Lt.docs)==null?void 0:Kt.source}}};var Nt,Yt,Mt;ie.parameters={...ie.parameters,docs:{...(Nt=ie.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Mt=(Yt=ie.parameters)==null?void 0:Yt.docs)==null?void 0:Mt.source}}};var Ut,Vt,Gt;ce.parameters={...ce.parameters,docs:{...(Ut=ce.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Gt=(Vt=ce.parameters)==null?void 0:Vt.docs)==null?void 0:Gt.source}}};var Wt,zt,_t;le.parameters={...le.parameters,docs:{...(Wt=le.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(_t=(zt=le.parameters)==null?void 0:zt.docs)==null?void 0:_t.source}}};var $t,Jt,Qt;ue.parameters={...ue.parameters,docs:{...($t=ue.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=ue.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,en;de.parameters={...de.parameters,docs:{...(Xt=de.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=de.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,an;pe.parameters={...pe.parameters,docs:{...(tn=pe.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(an=(nn=pe.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,sn,rn;me.parameters={...me.parameters,docs:{...(on=me.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(sn=me.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var cn,ln,un;ye.parameters={...ye.parameters,docs:{...(cn=ye.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(un=(ln=ye.parameters)==null?void 0:ln.docs)==null?void 0:un.source}}};var dn,pn,mn;fe.parameters={...fe.parameters,docs:{...(dn=fe.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(mn=(pn=fe.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var yn,fn,vn;ve.parameters={...ve.parameters,docs:{...(yn=ve.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(vn=(fn=ve.parameters)==null?void 0:fn.docs)==null?void 0:vn.source}}};var wn,gn,bn;we.parameters={...we.parameters,docs:{...(wn=we.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  render: () => <ToastShowcase align="start">
      <Toast open duration={0} title={<span aria-hidden>✅</span>} />
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
}`,...(bn=(gn=we.parameters)==null?void 0:gn.docs)==null?void 0:bn.source}}};var hn,Bn,xn;ge.parameters={...ge.parameters,docs:{...(hn=ge.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  render: () => <ToastShowcase align="start">
      <Toast open duration={0} title={<span aria-hidden>✅</span>} description="Auto fallback name for icon-only title." />
    </ToastShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const toast = canvas.getByRole("status", {
      name: "Auto fallback name for icon-only title."
    });
    await expect(toast).toHaveAttribute("aria-label", "Auto fallback name for icon-only title.");
    await expect(toast).not.toHaveAttribute("aria-labelledby");
    await expect(toast).not.toHaveAttribute("aria-describedby");
  }
}`,...(xn=(Bn=ge.parameters)==null?void 0:Bn.docs)==null?void 0:xn.source}}};var kn,En,Tn;be.parameters={...be.parameters,docs:{...(kn=be.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(Tn=(En=be.parameters)==null?void 0:En.docs)==null?void 0:Tn.source}}};const Ia=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","FocusIntentReentry","ActionRequired","ActionRequiredDanger","BlankActionSemantics","TextActionSemantics","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","NumericDescriptionSemantics","LabelledByPrecedence","NonTextTitleAutoNameFallback","NonTextTitleDescriptionNameFallback","LiveRegionOff"];export{Z as ActionRequired,ee as ActionRequiredDanger,ye as AriaLabelOverride,te as BlankActionSemantics,Q as CloseButtonKeyboardPressedState,J as CloseButtonPrimaryPointerOnly,ae as CloseReasonTelemetry,_ as Default,pe as EscapeGuardedByToastHandler,me as EscapeIgnoresImeComposition,le as EscapePreemptedByGlobalHandler,de as EscapePreemptedByOverlayLayer,ue as EscapePreemptedSkipsToastHook,re as EscapeShortcutSync,se as EscapeStackOrder,X as FocusIntentReentry,ce as FocusedToastEscapesFirst,ve as LabelledByPrecedence,be as LiveRegionOff,we as NonTextTitleAutoNameFallback,ge as NonTextTitleDescriptionNameFallback,fe as NumericDescriptionSemantics,ie as StackedViewportOffset,ne as TextActionSemantics,oe as TimeoutCloseReason,$ as ToneMatrix,Ia as __namedExportsOrder,Sa as default};
