import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as w}from"./Button-DvJUO9m9.js";import{h as ia}from"./focusTabbable-gnwmp6b7.js";import{P as ca}from"./Popover-Ck-3x_Zo.js";import{within as m,expect as o,userEvent as v,fireEvent as u,waitFor as d}from"./index-DgAF9SIF.js";import{s as la,a as ua,b as da}from"./storyShowcase-DlKirntE.js";const ma={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},pa=new Set(["button","link","menuitem","option","tab","checkbox","switch","radio","textbox","combobox","spinbutton","treeitem"]),ya={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},fa=14,at=new WeakMap;function va(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function A(e){const t=at.get(e);if(t)return t;const n={escapeStack:[],visualStacks:va(),listeners:new Set};return at.set(e,n),n}function Me(e){A(e).listeners.forEach(n=>{n()})}function wa(e,t){const n=A(e);return n.listeners.add(t),()=>{n.listeners.delete(t)}}function ot(e,t){const n=A(e),s=n.escapeStack.lastIndexOf(t);s>=0&&n.escapeStack.splice(s,1),n.escapeStack.push(t),Me(e)}function ba(e,t){const n=A(e),s=n.escapeStack.lastIndexOf(t);s>=0&&(n.escapeStack.splice(s,1),Me(e))}function Wn(e,t){const n=e.visualStacks[t],s=t.startsWith("bottom")?-1:1;n.forEach((c,p)=>{const k=n.length-1-p;c.style.setProperty("--aurora-toast-stack-offset",`${k*s*fa}px`)})}function st(e,t,n){const s=A(e),c=s.visualStacks[n],p=c.lastIndexOf(t);p>=0&&c.splice(p,1),c.push(t),Wn(s,n)}function ga(e,t,n){const s=A(e),c=s.visualStacks[n],p=c.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(p<0)&&(c.splice(p,1),Wn(s,n))}function rt(e,t){const n=A(e);for(let s=n.escapeStack.length-1;s>=0;s-=1){const c=n.escapeStack[s];if((c==null?void 0:c.dataset.closeOnEscape)==="true")return c===t}return!1}function ha(e){return e.isComposing?!0:e.keyCode===229}function l({open:e,title:t,description:n,action:s,tone:c="info",live:p,duration:k,pauseOnHover:B=!0,closeOnEscape:H=!0,onEscapeKeyDown:O,onCloseButtonKeyDown:T,closeLabel:R="Close toast",ariaLabel:je,ariaLabelledBy:Ae,position:Jn="bottom-right",onClose:U,onCloseReason:G,onOpenChange:W}){const x=i.useRef(null);i.useRef(!1);const P=i.useRef(!0),He=i.useRef(!1),I=i.useRef(null),_=i.useRef(null),K=i.useRef(0),Qn=Ye(s),$=V(s),J=ka(c,"info"),F=Ea(Jn,"bottom-right"),Y=it(B,!0),L=it(H,!0),j=xa(k,$?0:4e3),q=i.useRef(j),[Xn,ze]=i.useState(!1),[Ve,M]=i.useState({hover:!1,focus:!1}),[Oe,Ue]=i.useState(!1),[Ge,D]=i.useState(!1),[We,Q]=i.useState(!1),[Zn,ea]=i.useState(!1),_e=Xn||Y&&(Ve.hover||Ve.focus),$e=i.useId(),Je=i.useId(),Qe=Ye(n),Xe=Ie(n),Pe=Xe.length>0,z=typeof Ae=="string"&&Ae.trim().length>0?Ae.trim():void 0,Fe=z===void 0&&typeof je=="string"&&je.trim().length>0?je.trim():void 0,Le=Ca(t),Ze=z?void 0:Fe??(Le?void 0:Pe?Xe:"Toast"),ta=z===void 0&&Fe===void 0&&!Le&&Pe,na=typeof R=="string"&&R.trim().length>0?R.trim():"Close toast",X=i.useCallback(()=>{const r=x.current;ea(!!(e&&L&&r&&rt(r.ownerDocument,r)))},[e,L]);i.useEffect(()=>{X()},[X]),i.useEffect(()=>{var f;const r=(f=x.current)==null?void 0:f.ownerDocument;if(r)return wa(r,X)},[X]),i.useEffect(()=>{const r=x.current;if(!e||!r)return;const f=r.ownerDocument;return ot(f,r),st(f,r,F),()=>{ba(f,r),ga(f,r,F)}},[e,F]),i.useEffect(()=>{!e||!x.current||Me(x.current.ownerDocument)},[e,L]),i.useEffect(()=>{e||(M({hover:!1,focus:!1}),ze(!1)),He.current=!1},[e]),i.useEffect(()=>{var b;if(!e)return;const r=((b=x.current)==null?void 0:b.ownerDocument)??document,f=()=>{ze(r.visibilityState==="hidden")};return f(),r.addEventListener("visibilitychange",f),()=>{r.removeEventListener("visibilitychange",f)}},[e]),i.useEffect(()=>{var g;if(!e)return;const r=((g=x.current)==null?void 0:g.ownerDocument)??document,f=h=>{h.metaKey||h.altKey||h.ctrlKey||(P.current=!0)},b=h=>{"button"in h&&!Ne(h.button)||"ctrlKey"in h&&h.ctrlKey||(P.current=!1)};return r.addEventListener("keydown",f,!0),r.addEventListener("pointerdown",b,!0),r.addEventListener("mousedown",b,!0),r.addEventListener("touchstart",b,!0),()=>{r.removeEventListener("keydown",f,!0),r.removeEventListener("pointerdown",b,!0),r.removeEventListener("mousedown",b,!0),r.removeEventListener("touchstart",b,!0)}},[e]);const C=i.useCallback(()=>{I.current!==null&&((_.current??window).clearTimeout(I.current),I.current=null),_.current=null,K.current=0},[]),N=i.useCallback(r=>{He.current||(He.current=!0,C(),G==null||G(r),U==null||U(),W==null||W(!1))},[C,U,G,W]),aa=i.useCallback(()=>{N("close-button")},[N]),et=i.useCallback(()=>{N("escape-key")},[N]),qe=i.useCallback(()=>{N("timeout")},[N]),tt=i.useCallback(()=>{const r=x.current;if(!e||!r)return;const f=r.ownerDocument;ot(f,r),st(f,r,F)},[e,F]),Z=i.useCallback(r=>{var b;if(r<=0){qe();return}C(),q.current=r,K.current=Date.now();const f=((b=x.current)==null?void 0:b.ownerDocument.defaultView)??window;_.current=f,I.current=f.setTimeout(()=>{I.current=null,_.current=null,K.current=0,q.current=0,qe()},r)},[C,qe]),nt=i.useCallback(()=>{if(I.current===null||K.current===0)return;const r=Date.now()-K.current;q.current=Math.max(0,q.current-r),C()},[C]);if(i.useEffect(()=>{if(C(),q.current=j,!(!e||j<=0))return Z(j),()=>{C()}},[C,e,j,Z]),i.useEffect(()=>{if(!(!e||j<=0)){if(_e){nt();return}I.current===null&&Z(q.current)}},[e,nt,_e,j,Z]),i.useEffect(()=>{var b;if(!e||!L)return;const r=g=>{if(g.key!=="Escape"||g.altKey||g.ctrlKey||g.metaKey||g.repeat||ha(g))return;const h=x.current;!h||!rt(h.ownerDocument,h)||ia(h.ownerDocument)||g.defaultPrevented||(O==null||O(g),!g.defaultPrevented&&(g.preventDefault(),et()))},f=((b=x.current)==null?void 0:b.ownerDocument)??document;return f.addEventListener("keydown",r),()=>{f.removeEventListener("keydown",r)}},[et,O,e,L]),i.useEffect(()=>{},[Fe,Pe,Le,z]),!e)return null;const oa=$?J==="danger"?"alertdialog":"dialog":J==="danger"?"alert":"status",sa=Ta(p,J==="danger"?"assertive":"polite"),ra=$?void 0:sa;return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:x,role:oa,"data-close-on-escape":L?"true":"false","aria-modal":$?"false":void 0,"aria-live":ra,"aria-atomic":"true","aria-keyshortcuts":Zn?"Escape":void 0,"aria-label":Ze,"aria-labelledby":z??(Ze?void 0:$e),"aria-describedby":Qe&&!ta?Je:void 0,onMouseEnter:()=>{tt(),Y&&M(r=>({...r,hover:!0}))},onMouseLeave:()=>{Y&&M(r=>({...r,hover:!1}))},onFocusCapture:()=>{tt(),Y&&M(r=>({...r,focus:!0}))},onBlurCapture:r=>{Y&&!r.currentTarget.contains(r.relatedTarget)&&M(f=>({...f,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...ma[J],...ya[F]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:$e,style:{color:"var(--aurora-text-primary)"},children:t}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:aa,"aria-label":na,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Ue(!0)},onMouseLeave:()=>{Ue(!1),D(!1)},onPointerDown:r=>{r.ctrlKey||Ne(r.button)&&(P.current=!1,Q(!1),D(!0))},onPointerUp:r=>{Ne(r.button)&&D(!1)},onMouseDown:r=>{r.button!==0||r.ctrlKey||(P.current=!1,Q(!1),D(!0))},onMouseUp:r=>{r.button===0&&D(!1)},onPointerCancel:()=>{D(!1)},onKeyDown:r=>{P.current=!0,T==null||T(r),!r.defaultPrevented&&(Da(r)||ct(r.key)&&!Ra(r)&&!r.repeat&&D(!0))},onKeyUp:r=>{ct(r.key)&&D(!1)},onFocus:r=>{Q(Ba(r.currentTarget,P.current))},onBlur:()=>{Q(!1),D(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:Oe||We?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Ge?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":Oe?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:Oe?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:We?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:Ge?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),Qe?a.jsx("div",{id:Je,style:{color:"var(--aurora-text-secondary)"},children:n}):null,Qn?a.jsx("div",{children:s}):null]})}function Ba(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function xa(e,t){return typeof e!="number"||!Number.isFinite(e)?t:e}function it(e,t){return typeof e!="boolean"?t:e}function ka(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="info"||n==="success"||n==="warning"||n==="danger")return n}return t}function Ea(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="bottom-right"||n==="bottom-left"||n==="top-right"||n==="top-left")return n}return t}function Ta(e,t){if(typeof e=="string"){const n=e.trim().toLowerCase();if(n==="polite"||n==="assertive"||n==="off")return n}return t}function ct(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Ra(e){return e.ctrlKey||e.metaKey||e.altKey}function Da(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Ne(e){return typeof e!="number"||e<=0}function Ca(e){return Ie(e).length>0}function Ie(e){if(typeof e=="string")return Ke(e);if(typeof e=="number")return String(e);if(Array.isArray(e))return Ke(e.map(n=>Ie(n)).filter(n=>n.length>0).join(" "));if(!i.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?Ke(t["aria-label"]):Ie(t.children)}function Ye(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Ye(t)):i.isValidElement(e)}function V(e){if(e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number")return!1;if(Array.isArray(e))return e.some(n=>V(n));if(!i.isValidElement(e))return!1;const t=e.props;return e.type===i.Fragment?V(t.children):typeof e.type=="string"?Sa(e.type,t)||lt(t)?!0:V(t.children):lt(t)?!0:V(t.children)}function Sa(e,t){if(_n(t))return!1;const n=e.toLowerCase();return n==="button"||n==="input"||n==="select"||n==="textarea"?!0:n==="a"?typeof t.href=="string"&&t.href.trim().length>0:!1}function lt(e){if(_n(e))return!1;const t=Ia(e.role),n=typeof e.onClick=="function"||typeof e.onKeyDown=="function"||typeof e.onKeyUp=="function"||typeof e.onKeyPress=="function"||typeof e.onMouseDown=="function"||typeof e.onPointerDown=="function"||typeof e.onTouchStart=="function",s=typeof e.href=="string"&&e.href.trim().length>0||typeof e.to=="string"&&e.to.trim().length>0,c=typeof e.tabIndex=="number"&&e.tabIndex>=0;return t||s||e.contentEditable===!0||n?!0:c}function _n(e){return e.disabled===!0||e["aria-disabled"]===!0||e["aria-disabled"]==="true"}function Ia(e){return typeof e!="string"?!1:e.split(/\s+/).some(t=>pa.has(t.trim().toLowerCase()))}function Ke(e){return e.replace(/\s+/g," ").trim()}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseButtonKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const E={...la},S={...ua};function y({children:e,minHeight:t=260,align:n="stretch"}){return a.jsx(da,{minHeight:t,align:n,gap:8,children:e})}const ro={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function ja(e){const t=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const ee={};function Aa(){const[e,t]=i.useState(!0);return a.jsxs(y,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:e,onOpenChange:t,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:e,onOpenChange:t,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const te={render:()=>a.jsx(Aa,{})};function Ha(){return a.jsxs(y,{minHeight:320,align:"start",children:[a.jsx("p",{style:E,children:"Runtime tone/position config from CMS or JSON payloads should normalize mixed-case tokens and fall back safely for invalid values."}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Runtime visual normalization",description:"Mixed-case runtime tokens should still map to supported danger + top-left visuals.",tone:" DANGER ",position:" TOP-LEFT "}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Runtime visual fallback",description:"Invalid runtime tokens should degrade to info + bottom-right defaults.",tone:"invalid-tone",position:"invalid-position"})]})}const ne={render:()=>a.jsx(Ha,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=await t.findByRole("alert",{name:"Runtime visual normalization"}),s=await t.findByRole("status",{name:"Runtime visual fallback"});await o(n).toHaveStyle({top:"16px",left:"16px"}),await o(n.getAttribute("style")).toContain("var(--aurora-feedback-danger-border)"),await o(s).toHaveStyle({right:"16px",bottom:"16px"}),await o(s.getAttribute("style")).toContain("var(--aurora-feedback-info-border)"),await o(s).toHaveAttribute("aria-live","polite")}};function Oa(){return a.jsxs(y,{minHeight:320,align:"start",children:[a.jsx("p",{style:E,children:"Runtime live config should normalize mixed-case tokens and fallback to tone-driven defaults when token is invalid."}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Runtime live normalization",description:"Mixed-case runtime live token should normalize to assertive.",live:" ASSERTIVE "}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,tone:" DANGER ",title:"Runtime live fallback",description:"Invalid runtime live token should fallback to tone-driven assertive.",live:"invalid-live"})]})}const ae={render:()=>a.jsx(Oa,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=await t.findByRole("status",{name:"Runtime live normalization"}),s=await t.findByRole("alert",{name:"Runtime live fallback"});await o(n).toHaveAttribute("aria-live","assertive"),await o(s).toHaveAttribute("aria-live","assertive")}};function Pa(){const[e,t]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const oe={render:()=>a.jsx(Pa,{}),play:async({canvasElement:e})=>{const n=m(e.ownerDocument.body).getByRole("button",{name:"Close toast"});u.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),u.mouseDown(n),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.pointerCancel(n),await d(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.mouseDown(n),u.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function Fa(){return a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const se={render:()=>a.jsx(Fa,{}),play:async({canvasElement:e})=>{const n=m(e.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),u.keyDown(n,{key:"Enter",ctrlKey:!0}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter",ctrlKey:!0}),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")});const s=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});s.preventDefault(),n.dispatchEvent(s),await d(()=>{o(n.style.transform).toContain("translateY(0")})}};function La(){return a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Locally preempted keyboard close",description:"Local close-button key guards should suppress pressed feedback.",tone:"info",onCloseButtonKeyDown:e=>{(e.key==="Enter"||e.key===" "||e.key==="Space"||e.key==="Spacebar")&&e.preventDefault()}})})}const re={render:()=>a.jsx(La,{}),play:async({canvasElement:e})=>{const n=m(e.ownerDocument.body).getByRole("button",{name:"Close toast"});n.focus(),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter"}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Space"})}};function qa(){return a.jsxs(y,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const ie={render:()=>a.jsx(qa,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=await t.findByRole("button",{name:"Before toast close"}),s=await t.findByRole("button",{name:"Close toast"});await v.click(n),await o(n).toHaveFocus(),await v.tab(),await o(s).toHaveFocus(),await o(s.style.boxShadow).toContain("0 0 0 3px"),u.mouseDown(s,{button:0,ctrlKey:!0}),await o(s.style.boxShadow).toContain("0 0 0 3px")}};function Na(){const[e,t]=i.useState(!0);return a.jsxs(y,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Acknowledge"})})]})}const ce={render:()=>a.jsx(Na,{}),play:async({canvasElement:e})=>{const t=m(e),n=t.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(t.getByRole("button",{name:"Close blocking notice"})),await o(t.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("dialog")).toBeInTheDocument()}};function Ka(){const[e,t]=i.useState(!0);return a.jsxs(y,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Confirm owner"})})]})}const le={render:()=>a.jsx(Ka,{}),play:async({canvasElement:e})=>{const t=m(e);await o(t.getByRole("alertdialog")).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close incident notice"})),await o(t.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("alertdialog")).toBeInTheDocument()}};function Ya(){return a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update",description:"Blank action content should not upgrade toast role semantics.",action:"   "})})}const ue={render:()=>a.jsx(Ya,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive update"})).toBeNull()}};function Ma(){return a.jsxs(y,{align:"start",children:[a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update text",description:"Text action content should not upgrade toast role semantics.",action:"Undo later"}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update element",description:"Non-interactive action elements should keep passive toast semantics.",action:a.jsx("span",{children:"Undo later"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required nested",description:"Interactive descendants still upgrade toast role semantics.",action:a.jsx("span",{children:a.jsx("button",{type:"button",children:"Undo now"})})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required focusable",description:"Focusable action nodes should also upgrade toast role semantics.",action:a.jsx("span",{tabIndex:0,children:"Review details"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive target-only anchor",description:"Anchor actions without href should stay passive.",action:a.jsx("a",{target:"_blank",rel:"noreferrer",children:"Open docs target-only"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Actionable docs link",description:"Anchor actions with href should upgrade to interactive toast semantics.",action:a.jsx("a",{href:"https://example.com/docs",target:"_blank",rel:"noreferrer",children:"Open docs link"})})]})}const de={render:()=>a.jsx(Ma,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update text"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive update element"})).toBeInTheDocument(),await o(t.getAllByText("Undo later")).toHaveLength(2),await o(t.queryByRole("dialog",{name:"Passive update text"})).toBeNull(),await o(t.queryByRole("dialog",{name:"Passive update element"})).toBeNull(),await o(t.getByRole("dialog",{name:"Action required nested"})).toBeInTheDocument(),await o(t.getByRole("dialog",{name:"Action required focusable"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive target-only anchor"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive target-only anchor"})).toBeNull(),await o(t.getByRole("dialog",{name:"Actionable docs link"})).toBeInTheDocument(),await o(t.getByRole("link",{name:"Open docs link"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Undo now"})).toBeInTheDocument(),await o(t.getByText("Review details")).toBeInTheDocument(),await o(t.getByText("Open docs target-only")).toBeInTheDocument()}};function za(){const[e,t]=i.useState(!0),[n,s]=i.useState("none"),[c,p]=i.useState("N/A"),k=i.useCallback(B=>{p(H=>H==="N/A"?B:`${H} -> ${B}`)},[]);return a.jsxs(y,{align:"start",children:[a.jsxs("p",{style:E,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:S,children:n})]}),a.jsxs("p",{style:E,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:S,children:c})]}),a.jsx("p",{style:E,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(w,{variant:"outline",onClick:()=>{p("N/A"),t(!0)},children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:B=>{t(B),B||k("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:B=>{s(B),k(`reason:${B}`)}})]})}const me={render:()=>a.jsx(za,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument;await d(()=>{o(t.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(t.getByRole("button",{name:"Reopen Toast"})),u.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(t.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),t.getByRole("status",{name:"Close reason telemetry"}).focus(),await v.keyboard("{Shift>}{Escape}{/Shift}"),await d(()=>{o(t.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await d(()=>{o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function Va(){const[e,t]=i.useState(!0),[n,s]=i.useState("none");return a.jsxs(y,{align:"start",children:[a.jsxs("p",{style:E,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:S,children:n})]}),a.jsx(w,{variant:"outline",onClick:()=>{s("none"),t(!0)},children:"Reopen Timed Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:s})]})}const pe={render:()=>a.jsx(Va,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body);await o(await t.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await d(()=>{o(t.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(t.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function $n(){const[e,t]=i.useState({first:!0,second:!0});return a.jsxs(y,{children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(s=>({...s,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(s=>({...s,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const ye={render:()=>a.jsx($n,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument,s=await t.findByRole("status",{name:"First notice"}),c=await t.findByRole("status",{name:"Second notice"});await d(()=>{o(s).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",ctrlKey:!0}),u.keyDown(n,{key:"Escape",metaKey:!0}),await o(c).toBeInTheDocument(),await v.click(m(c).getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await d(()=>{o(t.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Ua(){const[e,t]=i.useState({first:!0,second:!0}),[n,s]=i.useState(!0);return a.jsxs(y,{minHeight:280,align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(w,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(l,{open:e.first,onOpenChange:c=>{t(p=>({...p,first:c}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e.second,onOpenChange:c=>{t(p=>({...p,second:c}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const fe={render:()=>a.jsx(Ua,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument,s=await t.findByRole("status",{name:"Base notice"}),c=await t.findByRole("status",{name:"Top notice"});await d(()=>{o(s).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(t.getByRole("button",{name:"Pin top toast"})),await d(()=>{o(s).toHaveAttribute("aria-keyshortcuts","Escape"),o(c).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(t.getByRole("button",{name:"Unpin top toast"})),await d(()=>{o(s).not.toHaveAttribute("aria-keyshortcuts"),o(c).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",repeat:!0}),await o(t.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Ga(){const[e,t]=i.useState(!0),[n,s]=i.useState("none"),[c,p]=i.useState(0),[k,B]=i.useState(0),[H,O]=i.useState(0);return i.useEffect(()=>{if(!e)return;const T=window.setInterval(()=>{p(R=>R+1)},50);return()=>{window.clearInterval(T)}},[e]),a.jsxs(y,{align:"start",minHeight:320,children:[a.jsx("p",{style:E,children:"Runtime bool-like config from CMS/JSON should degrade safely: invalid flags fall back to defaults (`pauseOnHover=true`, `closeOnEscape=true`)."}),a.jsxs("p",{style:E,children:["Reason:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-close-reason",style:S,children:n})," ","· Probe ticks:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-probe-ticks",style:S,children:c})," ","· Timeout closes:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-timeout-count",style:S,children:k})," ","· Escape closes:"," ",a.jsx("strong",{"data-testid":"runtime-boolean-escape-count",style:S,children:H})]}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(w,{variant:"outline",onClick:()=>{s("none"),p(0),t(!0)},children:"Reopen runtime toast"}),a.jsx("button",{type:"button",children:"Outside focus target"})]}),a.jsx(l,{open:e,onOpenChange:t,duration:120,pauseOnHover:"invalid-pause-flag",closeOnEscape:0,title:"Runtime boolean fallback",description:"Invalid bool props should preserve hover/focus pause and Escape dismissal.",tone:"info",onCloseReason:T=>{s(T),T==="timeout"&&B(R=>R+1),T==="escape-key"&&O(R=>R+1)}})]})}const ve={render:()=>a.jsx(Ga,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument,s=await t.findByRole("button",{name:"Close toast"});s.focus(),await d(()=>{o(s).toHaveFocus()}),await d(()=>{o(Number(t.getByTestId("runtime-boolean-probe-ticks").textContent??"0")).toBeGreaterThanOrEqual(4)}),await o(t.getByRole("status",{name:"Runtime boolean fallback"})).toBeInTheDocument(),await o(t.getByTestId("runtime-boolean-timeout-count")).toHaveTextContent("0"),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("status",{name:"Runtime boolean fallback"})).not.toBeInTheDocument()}),await o(t.getByTestId("runtime-boolean-close-reason")).toHaveTextContent("escape-key"),await o(t.getByTestId("runtime-boolean-escape-count")).toHaveTextContent("1"),await v.click(t.getByRole("button",{name:"Reopen runtime toast"}));const c=await t.findByRole("status",{name:"Runtime boolean fallback"});await o(c).toHaveAttribute("aria-keyshortcuts","Escape")}};function Wa(){const[e,t]=i.useState({first:!0,second:!0});return a.jsxs(y,{minHeight:280,children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(s=>({...s,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(s=>({...s,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const we={render:()=>a.jsx(Wa,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=await t.findByRole("status",{name:"First stack item"}),s=await t.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(s.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},be={render:()=>a.jsxs(y,{minHeight:280,children:[a.jsx("p",{style:E,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx($n,{})]}),play:async({canvasElement:e})=>{const t=e.ownerDocument,n=m(t.body),s=await n.findByRole("status",{name:"First notice"}),c=await n.findByRole("status",{name:"Second notice"});await m(s).findByRole("button",{name:"Close toast"}).then(k=>k.focus()),await d(()=>{o(s).toHaveAttribute("aria-keyshortcuts","Escape"),o(c).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await v.click(n.getByRole("button",{name:/reopen stack/i}));const p=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),u.mouseEnter(p),await d(()=>{o(p).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function _a(){const[e,t]=i.useState(!0),[n,s]=i.useState(!0);return i.useEffect(()=>{if(!n)return;const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function $a(){const[e,t]=i.useState(!0),[n,s]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>s(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function Ja(){const[e,t]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Qa(){const[e,t]=i.useState(!0),[n,s]=i.useState(0);return i.useEffect(()=>{const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs(y,{align:"start",children:[a.jsxs("p",{style:E,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:S,children:n})]}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>s(c=>c+1)})]})}function Xa(){const[e,t]=i.useState(!0);return a.jsxs(y,{align:"start",children:[a.jsx(ca,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const ge={render:()=>a.jsx(_a,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable global Escape handler"})),await o(t.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},he={render:()=>a.jsx(Qa,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},Be={render:()=>a.jsx(Xa,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Open escape overlay"})),await o(t.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},xe={render:()=>a.jsx($a,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable toast Escape guard"})),await o(t.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ke={render:()=>a.jsx(Ja,{}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),ja(n),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},Ee={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body);await o(t.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},Te={render:()=>a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:"Release notice",description:0})}),play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body),n=t.getByRole("status",{name:"Release notice"}),s=t.getAllByText("0");await o(s).toHaveLength(1),await o(n).toHaveAttribute("aria-describedby",s[0].id)}},Re={render:()=>a.jsxs(y,{align:"start",children:[a.jsx("h3",{id:"toast-heading",style:{margin:0},children:"Build artifact ready heading"}),a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Fallback build artifact notification",ariaLabelledBy:"toast-heading"})]}),play:async({canvasElement:e})=>{const n=m(e.ownerDocument.body).getByRole("status",{name:"Build artifact ready heading"});await o(n).toHaveAttribute("aria-labelledby","toast-heading"),await o(n).not.toHaveAttribute("aria-label")}},De={render:()=>a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"})})}),play:async({canvasElement:e})=>{const n=m(e.ownerDocument.body).getByRole("status",{name:"Toast"});await o(n).toHaveAttribute("aria-label","Toast"),await o(n).not.toHaveAttribute("aria-labelledby")}},Ce={render:()=>a.jsx(y,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=m(e.ownerDocument.body).getByRole("status",{name:"Auto fallback name for icon-only title."});await o(n).toHaveAttribute("aria-label","Auto fallback name for icon-only title."),await o(n).not.toHaveAttribute("aria-labelledby"),await o(n).not.toHaveAttribute("aria-describedby")}},Se={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:e})=>{const t=m(e.ownerDocument.body);await o(t.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var ut,dt,mt;ee.parameters={...ee.parameters,docs:{...(ut=ee.parameters)==null?void 0:ut.docs,source:{originalSource:"{}",...(mt=(dt=ee.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var pt,yt,ft;te.parameters={...te.parameters,docs:{...(pt=te.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(ft=(yt=te.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var vt,wt,bt;ne.parameters={...ne.parameters,docs:{...(vt=ne.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(bt=(wt=ne.parameters)==null?void 0:wt.docs)==null?void 0:bt.source}}};var gt,ht,Bt;ae.parameters={...ae.parameters,docs:{...(gt=ae.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  render: () => <RuntimeLiveConfigNormalizationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const normalized = await canvas.findByRole("status", {
      name: "Runtime live normalization"
    });
    const fallback = await canvas.findByRole("alert", {
      name: "Runtime live fallback"
    });
    await expect(normalized).toHaveAttribute("aria-live", "assertive");
    await expect(fallback).toHaveAttribute("aria-live", "assertive");
  }
}`,...(Bt=(ht=ae.parameters)==null?void 0:ht.docs)==null?void 0:Bt.source}}};var xt,kt,Et;oe.parameters={...oe.parameters,docs:{...(xt=oe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Et=(kt=oe.parameters)==null?void 0:kt.docs)==null?void 0:Et.source}}};var Tt,Rt,Dt;se.parameters={...se.parameters,docs:{...(Tt=se.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Dt=(Rt=se.parameters)==null?void 0:Rt.docs)==null?void 0:Dt.source}}};var Ct,St,It;re.parameters={...re.parameters,docs:{...(Ct=re.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(It=(St=re.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var jt,At,Ht;ie.parameters={...ie.parameters,docs:{...(jt=ie.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ht=(At=ie.parameters)==null?void 0:At.docs)==null?void 0:Ht.source}}};var Ot,Pt,Ft;ce.parameters={...ce.parameters,docs:{...(Ot=ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Ft=(Pt=ce.parameters)==null?void 0:Pt.docs)==null?void 0:Ft.source}}};var Lt,qt,Nt;le.parameters={...le.parameters,docs:{...(Lt=le.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Nt=(qt=le.parameters)==null?void 0:qt.docs)==null?void 0:Nt.source}}};var Kt,Yt,Mt;ue.parameters={...ue.parameters,docs:{...(Kt=ue.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Mt=(Yt=ue.parameters)==null?void 0:Yt.docs)==null?void 0:Mt.source}}};var zt,Vt,Ut;de.parameters={...de.parameters,docs:{...(zt=de.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ut=(Vt=de.parameters)==null?void 0:Vt.docs)==null?void 0:Ut.source}}};var Gt,Wt,_t;me.parameters={...me.parameters,docs:{...(Gt=me.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(_t=(Wt=me.parameters)==null?void 0:Wt.docs)==null?void 0:_t.source}}};var $t,Jt,Qt;pe.parameters={...pe.parameters,docs:{...($t=pe.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Qt=(Jt=pe.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Zt,en;ye.parameters={...ye.parameters,docs:{...(Xt=ye.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
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
}`,...(en=(Zt=ye.parameters)==null?void 0:Zt.docs)==null?void 0:en.source}}};var tn,nn,an;fe.parameters={...fe.parameters,docs:{...(tn=fe.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(an=(nn=fe.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,sn,rn;ve.parameters={...ve.parameters,docs:{...(on=ve.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(sn=ve.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var cn,ln,un;we.parameters={...we.parameters,docs:{...(cn=we.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(un=(ln=we.parameters)==null?void 0:ln.docs)==null?void 0:un.source}}};var dn,mn,pn;be.parameters={...be.parameters,docs:{...(dn=be.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(pn=(mn=be.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var yn,fn,vn;ge.parameters={...ge.parameters,docs:{...(yn=ge.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(vn=(fn=ge.parameters)==null?void 0:fn.docs)==null?void 0:vn.source}}};var wn,bn,gn;he.parameters={...he.parameters,docs:{...(wn=he.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(gn=(bn=he.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var hn,Bn,xn;Be.parameters={...Be.parameters,docs:{...(hn=Be.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(xn=(Bn=Be.parameters)==null?void 0:Bn.docs)==null?void 0:xn.source}}};var kn,En,Tn;xe.parameters={...xe.parameters,docs:{...(kn=xe.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(Tn=(En=xe.parameters)==null?void 0:En.docs)==null?void 0:Tn.source}}};var Rn,Dn,Cn;ke.parameters={...ke.parameters,docs:{...(Rn=ke.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Cn=(Dn=ke.parameters)==null?void 0:Dn.docs)==null?void 0:Cn.source}}};var Sn,In,jn;Ee.parameters={...Ee.parameters,docs:{...(Sn=Ee.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(jn=(In=Ee.parameters)==null?void 0:In.docs)==null?void 0:jn.source}}};var An,Hn,On;Te.parameters={...Te.parameters,docs:{...(An=Te.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(On=(Hn=Te.parameters)==null?void 0:Hn.docs)==null?void 0:On.source}}};var Pn,Fn,Ln;Re.parameters={...Re.parameters,docs:{...(Pn=Re.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(Ln=(Fn=Re.parameters)==null?void 0:Fn.docs)==null?void 0:Ln.source}}};var qn,Nn,Kn;De.parameters={...De.parameters,docs:{...(qn=De.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Kn=(Nn=De.parameters)==null?void 0:Nn.docs)==null?void 0:Kn.source}}};var Yn,Mn,zn;Ce.parameters={...Ce.parameters,docs:{...(Yn=Ce.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(zn=(Mn=Ce.parameters)==null?void 0:Mn.docs)==null?void 0:zn.source}}};var Vn,Un,Gn;Se.parameters={...Se.parameters,docs:{...(Vn=Se.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
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
}`,...(Gn=(Un=Se.parameters)==null?void 0:Un.docs)==null?void 0:Gn.source}}};const io=["Default","ToneMatrix","RuntimeVisualConfigNormalization","RuntimeLiveConfigNormalization","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","FocusIntentReentry","ActionRequired","ActionRequiredDanger","BlankActionSemantics","TextActionSemantics","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","RuntimeBooleanConfigNormalization","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","NumericDescriptionSemantics","LabelledByPrecedence","NonTextTitleAutoNameFallback","NonTextTitleDescriptionNameFallback","LiveRegionOff"];export{ce as ActionRequired,le as ActionRequiredDanger,Ee as AriaLabelOverride,ue as BlankActionSemantics,se as CloseButtonKeyboardPressedState,re as CloseButtonManagedKeysPreemptedByLocalHandler,oe as CloseButtonPrimaryPointerOnly,me as CloseReasonTelemetry,ee as Default,xe as EscapeGuardedByToastHandler,ke as EscapeIgnoresImeComposition,ge as EscapePreemptedByGlobalHandler,Be as EscapePreemptedByOverlayLayer,he as EscapePreemptedSkipsToastHook,fe as EscapeShortcutSync,ye as EscapeStackOrder,ie as FocusIntentReentry,be as FocusedToastEscapesFirst,Re as LabelledByPrecedence,Se as LiveRegionOff,De as NonTextTitleAutoNameFallback,Ce as NonTextTitleDescriptionNameFallback,Te as NumericDescriptionSemantics,ve as RuntimeBooleanConfigNormalization,ae as RuntimeLiveConfigNormalization,ne as RuntimeVisualConfigNormalization,we as StackedViewportOffset,de as TextActionSemantics,pe as TimeoutCloseReason,te as ToneMatrix,io as __namedExportsOrder,ro as default};
