import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as w}from"./Button-CYa37MZO.js";import{h as na}from"./focusTabbable-gnwmp6b7.js";import{P as aa}from"./Popover-C9OV1CP4.js";import{within as p,expect as o,userEvent as v,fireEvent as u,waitFor as d}from"./index-DgAF9SIF.js";import{s as oa,a as sa,b as ra}from"./storyShowcase-DlKirntE.js";const ia={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},ca=new Set(["button","link","menuitem","option","tab","checkbox","switch","radio","textbox","combobox","spinbutton","treeitem"]),la={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},ua=14,nt=new WeakMap;function da(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function A(e){const t=nt.get(e);if(t)return t;const n={escapeStack:[],visualStacks:da(),listeners:new Set};return nt.set(e,n),n}function Ye(e){A(e).listeners.forEach(n=>{n()})}function pa(e,t){const n=A(e);return n.listeners.add(t),()=>{n.listeners.delete(t)}}function at(e,t){const n=A(e),s=n.escapeStack.lastIndexOf(t);s>=0&&n.escapeStack.splice(s,1),n.escapeStack.push(t),Ye(e)}function ma(e,t){const n=A(e),s=n.escapeStack.lastIndexOf(t);s>=0&&(n.escapeStack.splice(s,1),Ye(e))}function Un(e,t){const n=e.visualStacks[t],s=t.startsWith("bottom")?-1:1;n.forEach((c,m)=>{const k=n.length-1-m;c.style.setProperty("--aurora-toast-stack-offset",`${k*s*ua}px`)})}function ot(e,t,n){const s=A(e),c=s.visualStacks[n],m=c.lastIndexOf(t);m>=0&&c.splice(m,1),c.push(t),Un(s,n)}function ya(e,t,n){const s=A(e),c=s.visualStacks[n],m=c.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(m<0)&&(c.splice(m,1),Un(s,n))}function st(e,t){const n=A(e);for(let s=n.escapeStack.length-1;s>=0;s-=1){const c=n.escapeStack[s];if((c==null?void 0:c.dataset.closeOnEscape)==="true")return c===t}return!1}function fa(e){return e.isComposing?!0:e.keyCode===229}function l({open:e,title:t,description:n,action:s,tone:c="info",live:m,duration:k,pauseOnHover:B=!0,closeOnEscape:H=!0,onEscapeKeyDown:O,onCloseButtonKeyDown:E,closeLabel:T="Close toast",ariaLabel:Ie,ariaLabelledBy:je,position:Gn="bottom-right",onClose:z,onCloseReason:G,onOpenChange:W}){const x=i.useRef(null);i.useRef(!1);const P=i.useRef(!0),Ae=i.useRef(!1),I=i.useRef(null),_=i.useRef(null),N=i.useRef(0),Wn=Ne(s),$=V(s),J=ga(c,"info"),F=ba(Gn,"bottom-right"),Y=rt(B,!0),L=rt(H,!0),j=wa(k,$?0:4e3),q=i.useRef(j),[_n,Me]=i.useState(!1),[Ue,M]=i.useState({hover:!1,focus:!1}),[He,Ve]=i.useState(!1),[ze,R]=i.useState(!1),[Ge,Q]=i.useState(!1),[$n,Jn]=i.useState(!1),We=_n||Y&&(Ue.hover||Ue.focus),_e=i.useId(),$e=i.useId(),Je=Ne(n),Qe=Se(n),Oe=Qe.length>0,U=typeof je=="string"&&je.trim().length>0?je.trim():void 0,Pe=U===void 0&&typeof Ie=="string"&&Ie.trim().length>0?Ie.trim():void 0,Fe=xa(t),Xe=U?void 0:Pe??(Fe?void 0:Oe?Qe:"Toast"),Qn=U===void 0&&Pe===void 0&&!Fe&&Oe,Xn=typeof T=="string"&&T.trim().length>0?T.trim():"Close toast",X=i.useCallback(()=>{const r=x.current;Jn(!!(e&&L&&r&&st(r.ownerDocument,r)))},[e,L]);i.useEffect(()=>{X()},[X]),i.useEffect(()=>{var f;const r=(f=x.current)==null?void 0:f.ownerDocument;if(r)return pa(r,X)},[X]),i.useEffect(()=>{const r=x.current;if(!e||!r)return;const f=r.ownerDocument;return at(f,r),ot(f,r,F),()=>{ma(f,r),ya(f,r,F)}},[e,F]),i.useEffect(()=>{!e||!x.current||Ye(x.current.ownerDocument)},[e,L]),i.useEffect(()=>{e||(M({hover:!1,focus:!1}),Me(!1)),Ae.current=!1},[e]),i.useEffect(()=>{var g;if(!e)return;const r=((g=x.current)==null?void 0:g.ownerDocument)??document,f=()=>{Me(r.visibilityState==="hidden")};return f(),r.addEventListener("visibilitychange",f),()=>{r.removeEventListener("visibilitychange",f)}},[e]),i.useEffect(()=>{var b;if(!e)return;const r=((b=x.current)==null?void 0:b.ownerDocument)??document,f=h=>{h.metaKey||h.altKey||h.ctrlKey||(P.current=!0)},g=h=>{"button"in h&&!qe(h.button)||"ctrlKey"in h&&h.ctrlKey||(P.current=!1)};return r.addEventListener("keydown",f,!0),r.addEventListener("pointerdown",g,!0),r.addEventListener("mousedown",g,!0),r.addEventListener("touchstart",g,!0),()=>{r.removeEventListener("keydown",f,!0),r.removeEventListener("pointerdown",g,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0)}},[e]);const D=i.useCallback(()=>{I.current!==null&&((_.current??window).clearTimeout(I.current),I.current=null),_.current=null,N.current=0},[]),K=i.useCallback(r=>{Ae.current||(Ae.current=!0,D(),G==null||G(r),z==null||z(),W==null||W(!1))},[D,z,G,W]),Zn=i.useCallback(()=>{K("close-button")},[K]),Ze=i.useCallback(()=>{K("escape-key")},[K]),Le=i.useCallback(()=>{K("timeout")},[K]),et=i.useCallback(()=>{const r=x.current;if(!e||!r)return;const f=r.ownerDocument;at(f,r),ot(f,r,F)},[e,F]),Z=i.useCallback(r=>{var g;if(r<=0){Le();return}D(),q.current=r,N.current=Date.now();const f=((g=x.current)==null?void 0:g.ownerDocument.defaultView)??window;_.current=f,I.current=f.setTimeout(()=>{I.current=null,_.current=null,N.current=0,q.current=0,Le()},r)},[D,Le]),tt=i.useCallback(()=>{if(I.current===null||N.current===0)return;const r=Date.now()-N.current;q.current=Math.max(0,q.current-r),D()},[D]);if(i.useEffect(()=>{if(D(),q.current=j,!(!e||j<=0))return Z(j),()=>{D()}},[D,e,j,Z]),i.useEffect(()=>{if(!(!e||j<=0)){if(We){tt();return}I.current===null&&Z(q.current)}},[e,tt,We,j,Z]),i.useEffect(()=>{var g;if(!e||!L)return;const r=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||fa(b))return;const h=x.current;!h||!st(h.ownerDocument,h)||na(h.ownerDocument)||b.defaultPrevented||(O==null||O(b),!b.defaultPrevented&&(b.preventDefault(),Ze()))},f=((g=x.current)==null?void 0:g.ownerDocument)??document;return f.addEventListener("keydown",r),()=>{f.removeEventListener("keydown",r)}},[Ze,O,e,L]),i.useEffect(()=>{},[Pe,Oe,Fe,U]),!e)return null;const ea=$?J==="danger"?"alertdialog":"dialog":J==="danger"?"alert":"status",ta=$?void 0:m??(J==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:x,role:ea,"data-close-on-escape":L?"true":"false","aria-modal":$?"false":void 0,"aria-live":ta,"aria-atomic":"true","aria-keyshortcuts":$n?"Escape":void 0,"aria-label":Xe,"aria-labelledby":U??(Xe?void 0:_e),"aria-describedby":Je&&!Qn?$e:void 0,onMouseEnter:()=>{et(),Y&&M(r=>({...r,hover:!0}))},onMouseLeave:()=>{Y&&M(r=>({...r,hover:!1}))},onFocusCapture:()=>{et(),Y&&M(r=>({...r,focus:!0}))},onBlurCapture:r=>{Y&&!r.currentTarget.contains(r.relatedTarget)&&M(f=>({...f,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...ia[J],...la[F]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:_e,style:{color:"var(--aurora-text-primary)"},children:t}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Zn,"aria-label":Xn,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Ve(!0)},onMouseLeave:()=>{Ve(!1),R(!1)},onPointerDown:r=>{r.ctrlKey||qe(r.button)&&(P.current=!1,Q(!1),R(!0))},onPointerUp:r=>{qe(r.button)&&R(!1)},onMouseDown:r=>{r.button!==0||r.ctrlKey||(P.current=!1,Q(!1),R(!0))},onMouseUp:r=>{r.button===0&&R(!1)},onPointerCancel:()=>{R(!1)},onKeyDown:r=>{P.current=!0,E==null||E(r),!r.defaultPrevented&&(Ba(r)||it(r.key)&&!ha(r)&&!r.repeat&&R(!0))},onKeyUp:r=>{it(r.key)&&R(!1)},onFocus:r=>{Q(va(r.currentTarget,P.current))},onBlur:()=>{Q(!1),R(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:He||Ge?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ze?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":He?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:He?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Ge?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:ze?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),Je?a.jsx("div",{id:$e,style:{color:"var(--aurora-text-secondary)"},children:n}):null,Wn?a.jsx("div",{children:s}):null]})}function va(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function wa(e,t){return typeof e!="number"||!Number.isFinite(e)?t:e}function rt(e,t){return typeof e!="boolean"?t:e}function ga(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="info"||n==="success"||n==="warning"||n==="danger")return n}return t}function ba(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="bottom-right"||n==="bottom-left"||n==="top-right"||n==="top-left")return n}return t}function it(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function ha(e){return e.ctrlKey||e.metaKey||e.altKey}function Ba(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function qe(e){return typeof e!="number"||e<=0}function xa(e){return Se(e).length>0}function Se(e){if(typeof e=="string")return Ke(e);if(typeof e=="number")return String(e);if(Array.isArray(e))return Ke(e.map(n=>Se(n)).filter(n=>n.length>0).join(" "));if(!i.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?Ke(t["aria-label"]):Se(t.children)}function Ne(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Ne(t)):i.isValidElement(e)}function V(e){if(e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number")return!1;if(Array.isArray(e))return e.some(n=>V(n));if(!i.isValidElement(e))return!1;const t=e.props;return e.type===i.Fragment?V(t.children):typeof e.type=="string"?ka(e.type,t)||ct(t)?!0:V(t.children):ct(t)?!0:V(t.children)}function ka(e,t){if(Vn(t))return!1;const n=e.toLowerCase();return n==="button"||n==="input"||n==="select"||n==="textarea"?!0:n==="a"?typeof t.href=="string"&&t.href.trim().length>0:!1}function ct(e){if(Vn(e))return!1;const t=Ea(e.role),n=typeof e.onClick=="function"||typeof e.onKeyDown=="function"||typeof e.onKeyUp=="function"||typeof e.onKeyPress=="function"||typeof e.onMouseDown=="function"||typeof e.onPointerDown=="function"||typeof e.onTouchStart=="function",s=typeof e.href=="string"&&e.href.trim().length>0||typeof e.to=="string"&&e.to.trim().length>0,c=typeof e.tabIndex=="number"&&e.tabIndex>=0;return t||s||e.contentEditable===!0||n?!0:c}function Vn(e){return e.disabled===!0||e["aria-disabled"]===!0||e["aria-disabled"]==="true"}function Ea(e){return typeof e!="string"?!1:e.split(/\s+/).some(t=>ca.has(t.trim().toLowerCase()))}function Ke(e){return e.replace(/\s+/g," ").trim()}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseButtonKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const C={...oa},S={...sa};function y({children:e,minHeight:t=260,align:n="stretch"}){return a.jsx(ra,{minHeight:t,align:n,gap:8,children:e})}const Za={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function Ta(e){const t=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const ee={};function Ra(){const[e,t]=i.useState(!0);return a.jsxs(y,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:e,onOpenChange:t,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:e,onOpenChange:t,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const te={render:()=>a.jsx(Ra,{})};function Da(){return a.jsxs(y,{minHeight:320,align:"start",children:[a.jsx("p",{style:C,children:"Runtime tone/position config from CMS or JSON payloads should normalize mixed-case tokens and fall back safely for invalid values."}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Runtime visual normalization",description:"Mixed-case runtime tokens should still map to supported danger + top-left visuals.",tone:" DANGER ",position:" TOP-LEFT "}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Runtime visual fallback",description:"Invalid runtime tokens should degrade to info + bottom-right defaults.",tone:"invalid-tone",position:"invalid-position"})]})}const ne={render:()=>a.jsx(Da,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=await t.findByRole("alert",{name:"Runtime visual normalization"}),s=await t.findByRole("status",{name:"Runtime visual fallback"});await o(n).toHaveStyle({top:"16px",left:"16px"}),await o(n.getAttribute("style")).toContain("var(--aurora-feedback-danger-border)"),await o(s).toHaveStyle({right:"16px",bottom:"16px"}),await o(s.getAttribute("style")).toContain("var(--aurora-feedback-info-border)"),await o(s).toHaveAttribute("aria-live","polite")}};function Ca(){const[e,t]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const ae={render:()=>a.jsx(Ca,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});u.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),u.mouseDown(n),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.pointerCancel(n),await d(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.mouseDown(n),u.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function Sa(){return a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const oe={render:()=>a.jsx(Sa,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),u.keyDown(n,{key:"Enter",ctrlKey:!0}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter",ctrlKey:!0}),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")});const s=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});s.preventDefault(),n.dispatchEvent(s),await d(()=>{o(n.style.transform).toContain("translateY(0")})}};function Ia(){return a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Locally preempted keyboard close",description:"Local close-button key guards should suppress pressed feedback.",tone:"info",onCloseButtonKeyDown:e=>{(e.key==="Enter"||e.key===" "||e.key==="Space"||e.key==="Spacebar")&&e.preventDefault()}})})}const se={render:()=>a.jsx(Ia,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});n.focus(),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter"}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Space"})}};function ja(){return a.jsxs(y,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const re={render:()=>a.jsx(ja,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=await t.findByRole("button",{name:"Before toast close"}),s=await t.findByRole("button",{name:"Close toast"});await v.click(n),await o(n).toHaveFocus(),await v.tab(),await o(s).toHaveFocus(),await o(s.style.boxShadow).toContain("0 0 0 3px"),u.mouseDown(s,{button:0,ctrlKey:!0}),await o(s.style.boxShadow).toContain("0 0 0 3px")}};function Aa(){const[e,t]=i.useState(!0);return a.jsxs(y,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Acknowledge"})})]})}const ie={render:()=>a.jsx(Aa,{}),play:async({canvasElement:e})=>{const t=p(e),n=t.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(t.getByRole("button",{name:"Close blocking notice"})),await o(t.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("dialog")).toBeInTheDocument()}};function Ha(){const[e,t]=i.useState(!0);return a.jsxs(y,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Confirm owner"})})]})}const ce={render:()=>a.jsx(Ha,{}),play:async({canvasElement:e})=>{const t=p(e);await o(t.getByRole("alertdialog")).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close incident notice"})),await o(t.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("alertdialog")).toBeInTheDocument()}};function Oa(){return a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update",description:"Blank action content should not upgrade toast role semantics.",action:"   "})})}const le={render:()=>a.jsx(Oa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive update"})).toBeNull()}};function Pa(){return a.jsxs(y,{align:"start",children:[a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update text",description:"Text action content should not upgrade toast role semantics.",action:"Undo later"}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update element",description:"Non-interactive action elements should keep passive toast semantics.",action:a.jsx("span",{children:"Undo later"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required nested",description:"Interactive descendants still upgrade toast role semantics.",action:a.jsx("span",{children:a.jsx("button",{type:"button",children:"Undo now"})})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required focusable",description:"Focusable action nodes should also upgrade toast role semantics.",action:a.jsx("span",{tabIndex:0,children:"Review details"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive target-only anchor",description:"Anchor actions without href should stay passive.",action:a.jsx("a",{target:"_blank",rel:"noreferrer",children:"Open docs target-only"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Actionable docs link",description:"Anchor actions with href should upgrade to interactive toast semantics.",action:a.jsx("a",{href:"https://example.com/docs",target:"_blank",rel:"noreferrer",children:"Open docs link"})})]})}const ue={render:()=>a.jsx(Pa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update text"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive update element"})).toBeInTheDocument(),await o(t.getAllByText("Undo later")).toHaveLength(2),await o(t.queryByRole("dialog",{name:"Passive update text"})).toBeNull(),await o(t.queryByRole("dialog",{name:"Passive update element"})).toBeNull(),await o(t.getByRole("dialog",{name:"Action required nested"})).toBeInTheDocument(),await o(t.getByRole("dialog",{name:"Action required focusable"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive target-only anchor"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive target-only anchor"})).toBeNull(),await o(t.getByRole("dialog",{name:"Actionable docs link"})).toBeInTheDocument(),await o(t.getByRole("link",{name:"Open docs link"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Undo now"})).toBeInTheDocument(),await o(t.getByText("Review details")).toBeInTheDocument(),await o(t.getByText("Open docs target-only")).toBeInTheDocument()}};function Fa(){const[e,t]=i.useState(!0),[n,s]=i.useState("none"),[c,m]=i.useState("N/A"),k=i.useCallback(B=>{m(H=>H==="N/A"?B:`${H} -> ${B}`)},[]);return a.jsxs(y,{align:"start",children:[a.jsxs("p",{style:C,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:S,children:n})]}),a.jsxs("p",{style:C,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:S,children:c})]}),a.jsx("p",{style:C,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(w,{variant:"outline",onClick:()=>{m("N/A"),t(!0)},children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:B=>{t(B),B||k("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:B=>{s(B),k(`reason:${B}`)}})]})}const de={render:()=>a.jsx(Fa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await d(()=>{o(t.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(t.getByRole("button",{name:"Reopen Toast"})),u.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(t.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),t.getByRole("status",{name:"Close reason telemetry"}).focus(),await v.keyboard("{Shift>}{Escape}{/Shift}"),await d(()=>{o(t.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await d(()=>{o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function La(){const[e,t]=i.useState(!0),[n,s]=i.useState("none");return a.jsxs(y,{align:"start",children:[a.jsxs("p",{style:C,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:S,children:n})]}),a.jsx(w,{variant:"outline",onClick:()=>{s("none"),t(!0)},children:"Reopen Timed Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:s})]})}const pe={render:()=>a.jsx(La,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(await t.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await d(()=>{o(t.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(t.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function zn(){const[e,t]=i.useState({first:!0,second:!0});return a.jsxs(y,{children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(s=>({...s,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(s=>({...s,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const me={render:()=>a.jsx(zn,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument,s=await t.findByRole("status",{name:"First notice"}),c=await t.findByRole("status",{name:"Second notice"});await d(()=>{o(s).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",ctrlKey:!0}),u.keyDown(n,{key:"Escape",metaKey:!0}),await o(c).toBeInTheDocument(),await v.click(p(c).getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await d(()=>{o(t.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function qa(){const[e,t]=i.useState({first:!0,second:!0}),[n,s]=i.useState(!0);return a.jsxs(y,{minHeight:280,align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(w,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(l,{open:e.first,onOpenChange:c=>{t(m=>({...m,first:c}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e.second,onOpenChange:c=>{t(m=>({...m,second:c}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const ye={render:()=>a.jsx(qa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument,s=await t.findByRole("status",{name:"Base notice"}),c=await t.findByRole("status",{name:"Top notice"});await d(()=>{o(s).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(t.getByRole("button",{name:"Pin top toast"})),await d(()=>{o(s).toHaveAttribute("aria-keyshortcuts","Escape"),o(c).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(t.getByRole("button",{name:"Unpin top toast"})),await d(()=>{o(s).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",repeat:!0}),await o(t.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Ka(){const[e,t]=i.useState(!0),[n,s]=i.useState("none"),[c,m]=i.useState(0),[k,B]=i.useState(0),[H,O]=i.useState(0);return i.useEffect(()=>{if(!e)return;const E=window.setInterval(()=>{m(T=>T+1)},50);return()=>{window.clearInterval(E)}},[e]),a.jsxs(y,{align:"start",minHeight:320,children:[a.jsx("p",{style:C,children:"Runtime bool-like config from CMS/JSON should degrade safely: invalid flags fall back to defaults (`pauseOnHover=true`, `closeOnEscape=true`)."}),a.jsxs("p",{style:C,children:["Reason:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-close-reason",style:S,children:n})," ","· Probe ticks:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-probe-ticks",style:S,children:c})," ","· Timeout closes:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-timeout-count",style:S,children:k})," ","· Escape closes:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-escape-count",style:S,children:H})]}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(w,{variant:"outline",onClick:()=>{s("none"),m(0),t(!0)},children:"Reopen runtime toast"}),a.jsx("button",{type:"button",children:"Outside focus target"})]}),a.jsx(l,{open:e,onOpenChange:t,duration:120,pauseOnHover:"invalid-pause-flag",closeOnEscape:0,title:"Runtime boolean fallback",description:"Invalid bool props should preserve hover/focus pause and Escape dismissal.",tone:"info",onCloseReason:E=>{s(E),E==="timeout"&&B(T=>T+1),E==="escape-key"&&O(T=>T+1)}})]})}const fe={render:()=>a.jsx(Ka,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument,s=await t.findByRole("button",{name:"Close toast"});s.focus(),await d(()=>{o(s).toHaveFocus()}),await d(()=>{o(Number(t.getByTestId("runtime-boolean-probe-ticks").textContent??"0")).toBeGreaterThanOrEqual(4)}),await o(t.getByRole("status",{name:"Runtime boolean fallback"})).toBeInTheDocument(),await o(t.getByTestId("runtime-boolean-timeout-count")).toHaveTextContent("0"),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("status",{name:"Runtime boolean fallback"})).not.toBeInTheDocument()}),await o(t.getByTestId("runtime-boolean-close-reason")).toHaveTextContent("escape-key"),await o(t.getByTestId("runtime-boolean-escape-count")).toHaveTextContent("1"),await v.click(t.getByRole("button",{name:"Reopen runtime toast"}));const c=await t.findByRole("status",{name:"Runtime boolean fallback"});await o(c).toHaveAttribute("aria-keyshortcuts","Escape")}};function Na(){const[e,t]=i.useState({first:!0,second:!0});return a.jsxs(y,{minHeight:280,children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(s=>({...s,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(s=>({...s,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const ve={render:()=>a.jsx(Na,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=await t.findByRole("status",{name:"First stack item"}),s=await t.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(s.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},we={render:()=>a.jsxs(y,{minHeight:280,children:[a.jsx("p",{style:C,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(zn,{})]}),play:async({canvasElement:e})=>{const t=e.ownerDocument,n=p(t.body),s=await n.findByRole("status",{name:"First notice"}),c=await n.findByRole("status",{name:"Second notice"});await p(s).findByRole("button",{name:"Close toast"}).then(k=>k.focus()),await d(()=>{o(s).toHaveAttribute("aria-keyshortcuts","Escape"),o(c).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await v.click(n.getByRole("button",{name:/reopen stack/i}));const m=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),u.mouseEnter(m),await d(()=>{o(m).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function Ya(){const[e,t]=i.useState(!0),[n,s]=i.useState(!0);return i.useEffect(()=>{if(!n)return;const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Ma(){const[e,t]=i.useState(!0),[n,s]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function Ua(){const[e,t]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Va(){const[e,t]=i.useState(!0),[n,s]=i.useState(0);return i.useEffect(()=>{const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs(y,{align:"start",children:[a.jsxs("p",{style:C,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:S,children:n})]}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>s(c=>c+1)})]})}function za(){const[e,t]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(aa,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const ge={render:()=>a.jsx(Ya,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable global Escape handler"})),await o(t.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},be={render:()=>a.jsx(Va,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},he={render:()=>a.jsx(za,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Open escape overlay"})),await o(t.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},Be={render:()=>a.jsx(Ma,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable toast Escape guard"})),await o(t.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},xe={render:()=>a.jsx(Ua,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),Ta(n),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ke={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},Ee={render:()=>a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:"Release notice",description:0})}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=t.getByRole("status",{name:"Release notice"}),s=t.getAllByText("0");await o(s).toHaveLength(1),await o(n).toHaveAttribute("aria-describedby",s[0].id)}},Te={render:()=>a.jsxs(y,{align:"start",children:[a.jsx("h3",{id:"toast-heading",style:{margin:0},children:"Build artifact ready heading"}),a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Fallback build artifact notification",ariaLabelledBy:"toast-heading"})]}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Build artifact ready heading"});await o(n).toHaveAttribute("aria-labelledby","toast-heading"),await o(n).not.toHaveAttribute("aria-label")}},Re={render:()=>a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"})})}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Toast"});await o(n).toHaveAttribute("aria-label","Toast"),await o(n).not.toHaveAttribute("aria-labelledby")}},De={render:()=>a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Auto fallback name for icon-only title."});await o(n).toHaveAttribute("aria-label","Auto fallback name for icon-only title."),await o(n).not.toHaveAttribute("aria-labelledby"),await o(n).not.toHaveAttribute("aria-describedby")}},Ce={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var lt,ut,dt;ee.parameters={...ee.parameters,docs:{...(lt=ee.parameters)==null?void 0:lt.docs,source:{originalSource:"{}",...(dt=(ut=ee.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var pt,mt,yt;te.parameters={...te.parameters,docs:{...(pt=te.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(yt=(mt=te.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var ft,vt,wt;ne.parameters={...ne.parameters,docs:{...(ft=ne.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: () => <RuntimeVisualConfigNormalizationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const normalized = await canvas.findByRole("alert", {
      name: "Runtime visual normalization"
    });
    const fallback = await canvas.findByRole("status", {
      name: "Runtime visual fallback"
    });
    await expect(normalized).toHaveStyle({
      top: "16px",
      left: "16px"
    });
    await expect(normalized.getAttribute("style")).toContain("var(--aurora-feedback-danger-border)");
    await expect(fallback).toHaveStyle({
      right: "16px",
      bottom: "16px"
    });
    await expect(fallback.getAttribute("style")).toContain("var(--aurora-feedback-info-border)");
    await expect(fallback).toHaveAttribute("aria-live", "polite");
  }
}`,...(wt=(vt=ne.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var gt,bt,ht;ae.parameters={...ae.parameters,docs:{...(gt=ae.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ht=(bt=ae.parameters)==null?void 0:bt.docs)==null?void 0:ht.source}}};var Bt,xt,kt;oe.parameters={...oe.parameters,docs:{...(Bt=oe.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(kt=(xt=oe.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var Et,Tt,Rt;se.parameters={...se.parameters,docs:{...(Et=se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  render: () => <CloseButtonManagedKeysPreemptedByLocalHandlerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeButton = canvas.getByRole("button", {
      name: "Close toast"
    });
    closeButton.focus();
    fireEvent.keyDown(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Enter"
    });
    fireEvent.keyDown(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Space"
    });
  }
}`,...(Rt=(Tt=se.parameters)==null?void 0:Tt.docs)==null?void 0:Rt.source}}};var Dt,Ct,St;re.parameters={...re.parameters,docs:{...(Dt=re.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(St=(Ct=re.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var It,jt,At;ie.parameters={...ie.parameters,docs:{...(It=ie.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(At=(jt=ie.parameters)==null?void 0:jt.docs)==null?void 0:At.source}}};var Ht,Ot,Pt;ce.parameters={...ce.parameters,docs:{...(Ht=ce.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Pt=(Ot=ce.parameters)==null?void 0:Ot.docs)==null?void 0:Pt.source}}};var Ft,Lt,qt;le.parameters={...le.parameters,docs:{...(Ft=le.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(qt=(Lt=le.parameters)==null?void 0:Lt.docs)==null?void 0:qt.source}}};var Kt,Nt,Yt;ue.parameters={...ue.parameters,docs:{...(Kt=ue.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("status", {
      name: "Passive target-only anchor"
    })).toBeInTheDocument();
    await expect(canvas.queryByRole("dialog", {
      name: "Passive target-only anchor"
    })).toBeNull();
    await expect(canvas.getByRole("dialog", {
      name: "Actionable docs link"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("link", {
      name: "Open docs link"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Undo now"
    })).toBeInTheDocument();
    await expect(canvas.getByText("Review details")).toBeInTheDocument();
    await expect(canvas.getByText("Open docs target-only")).toBeInTheDocument();
  }
}`,...(Yt=(Nt=ue.parameters)==null?void 0:Nt.docs)==null?void 0:Yt.source}}};var Mt,Ut,Vt;de.parameters={...de.parameters,docs:{...(Mt=de.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Vt=(Ut=de.parameters)==null?void 0:Ut.docs)==null?void 0:Vt.source}}};var zt,Gt,Wt;pe.parameters={...pe.parameters,docs:{...(zt=pe.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Wt=(Gt=pe.parameters)==null?void 0:Gt.docs)==null?void 0:Wt.source}}};var _t,$t,Jt;me.parameters={...me.parameters,docs:{...(_t=me.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Jt=($t=me.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;ye.parameters={...ye.parameters,docs:{...(Qt=ye.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=ye.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var en,tn,nn;fe.parameters={...fe.parameters,docs:{...(en=fe.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    const closeButton = await canvas.findByRole("button", {
      name: "Close toast"
    });
    closeButton.focus();
    await waitFor(() => {
      expect(closeButton).toHaveFocus();
    });
    await waitFor(() => {
      expect(Number(canvas.getByTestId("runtime-boolean-probe-ticks").textContent ?? "0")).toBeGreaterThanOrEqual(4);
    });
    await expect(canvas.getByRole("status", {
      name: "Runtime boolean fallback"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("runtime-boolean-timeout-count")).toHaveTextContent("0");
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await waitFor(() => {
      expect(canvas.queryByRole("status", {
        name: "Runtime boolean fallback"
      })).not.toBeInTheDocument();
    });
    await expect(canvas.getByTestId("runtime-boolean-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("runtime-boolean-escape-count")).toHaveTextContent("1");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen runtime toast"
    }));
    const reopened = await canvas.findByRole("status", {
      name: "Runtime boolean fallback"
    });
    await expect(reopened).toHaveAttribute("aria-keyshortcuts", "Escape");
  }
}`,...(nn=(tn=fe.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,sn;ve.parameters={...ve.parameters,docs:{...(an=ve.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(sn=(on=ve.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,ln;we.parameters={...we.parameters,docs:{...(rn=we.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(ln=(cn=we.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var un,dn,pn;ge.parameters={...ge.parameters,docs:{...(un=ge.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(pn=(dn=ge.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var mn,yn,fn;be.parameters={...be.parameters,docs:{...(mn=be.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(fn=(yn=be.parameters)==null?void 0:yn.docs)==null?void 0:fn.source}}};var vn,wn,gn;he.parameters={...he.parameters,docs:{...(vn=he.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(gn=(wn=he.parameters)==null?void 0:wn.docs)==null?void 0:gn.source}}};var bn,hn,Bn;Be.parameters={...Be.parameters,docs:{...(bn=Be.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(Bn=(hn=Be.parameters)==null?void 0:hn.docs)==null?void 0:Bn.source}}};var xn,kn,En;xe.parameters={...xe.parameters,docs:{...(xn=xe.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(En=(kn=xe.parameters)==null?void 0:kn.docs)==null?void 0:En.source}}};var Tn,Rn,Dn;ke.parameters={...ke.parameters,docs:{...(Tn=ke.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Dn=(Rn=ke.parameters)==null?void 0:Rn.docs)==null?void 0:Dn.source}}};var Cn,Sn,In;Ee.parameters={...Ee.parameters,docs:{...(Cn=Ee.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(In=(Sn=Ee.parameters)==null?void 0:Sn.docs)==null?void 0:In.source}}};var jn,An,Hn;Te.parameters={...Te.parameters,docs:{...(jn=Te.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Hn=(An=Te.parameters)==null?void 0:An.docs)==null?void 0:Hn.source}}};var On,Pn,Fn;Re.parameters={...Re.parameters,docs:{...(On=Re.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(Fn=(Pn=Re.parameters)==null?void 0:Pn.docs)==null?void 0:Fn.source}}};var Ln,qn,Kn;De.parameters={...De.parameters,docs:{...(Ln=De.parameters)==null?void 0:Ln.docs,source:{originalSource:`{
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
}`,...(Kn=(qn=De.parameters)==null?void 0:qn.docs)==null?void 0:Kn.source}}};var Nn,Yn,Mn;Ce.parameters={...Ce.parameters,docs:{...(Nn=Ce.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
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
}`,...(Mn=(Yn=Ce.parameters)==null?void 0:Yn.docs)==null?void 0:Mn.source}}};const eo=["Default","ToneMatrix","RuntimeVisualConfigNormalization","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","FocusIntentReentry","ActionRequired","ActionRequiredDanger","BlankActionSemantics","TextActionSemantics","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","RuntimeBooleanConfigNormalization","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","NumericDescriptionSemantics","LabelledByPrecedence","NonTextTitleAutoNameFallback","NonTextTitleDescriptionNameFallback","LiveRegionOff"];export{ie as ActionRequired,ce as ActionRequiredDanger,ke as AriaLabelOverride,le as BlankActionSemantics,oe as CloseButtonKeyboardPressedState,se as CloseButtonManagedKeysPreemptedByLocalHandler,ae as CloseButtonPrimaryPointerOnly,de as CloseReasonTelemetry,ee as Default,Be as EscapeGuardedByToastHandler,xe as EscapeIgnoresImeComposition,ge as EscapePreemptedByGlobalHandler,he as EscapePreemptedByOverlayLayer,be as EscapePreemptedSkipsToastHook,ye as EscapeShortcutSync,me as EscapeStackOrder,re as FocusIntentReentry,we as FocusedToastEscapesFirst,Te as LabelledByPrecedence,Ce as LiveRegionOff,Re as NonTextTitleAutoNameFallback,De as NonTextTitleDescriptionNameFallback,Ee as NumericDescriptionSemantics,fe as RuntimeBooleanConfigNormalization,ne as RuntimeVisualConfigNormalization,ve as StackedViewportOffset,ue as TextActionSemantics,pe as TimeoutCloseReason,te as ToneMatrix,eo as __namedExportsOrder,Za as default};
