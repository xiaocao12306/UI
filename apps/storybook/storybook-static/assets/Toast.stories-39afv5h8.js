import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as w}from"./Button-B21ouHNm.js";import{h as Un}from"./focusTabbable-gnwmp6b7.js";import{P as Vn}from"./Popover-CI5AwEb2.js";import{within as p,expect as o,userEvent as v,fireEvent as u,waitFor as d}from"./index-DgAF9SIF.js";import{s as Gn,a as Wn,b as _n}from"./storyShowcase-DlKirntE.js";const zn={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},$n=new Set(["button","link","menuitem","option","tab","checkbox","switch","radio","textbox","combobox","spinbutton","treeitem"]),Jn={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},Qn=14,Qe=new WeakMap;function Xn(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function S(e){const t=Qe.get(e);if(t)return t;const n={escapeStack:[],visualStacks:Xn(),listeners:new Set};return Qe.set(e,n),n}function Oe(e){S(e).listeners.forEach(n=>{n()})}function Zn(e,t){const n=S(e);return n.listeners.add(t),()=>{n.listeners.delete(t)}}function Xe(e,t){const n=S(e),r=n.escapeStack.lastIndexOf(t);r>=0&&n.escapeStack.splice(r,1),n.escapeStack.push(t),Oe(e)}function ea(e,t){const n=S(e),r=n.escapeStack.lastIndexOf(t);r>=0&&(n.escapeStack.splice(r,1),Oe(e))}function jn(e,t){const n=e.visualStacks[t],r=t.startsWith("bottom")?-1:1;n.forEach((i,m)=>{const D=n.length-1-m;i.style.setProperty("--aurora-toast-stack-offset",`${D*r*Qn}px`)})}function Ze(e,t,n){const r=S(e),i=r.visualStacks[n],m=i.lastIndexOf(t);m>=0&&i.splice(m,1),i.push(t),jn(r,n)}function ta(e,t,n){const r=S(e),i=r.visualStacks[n],m=i.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(m<0)&&(i.splice(m,1),jn(r,n))}function et(e,t){const n=S(e);for(let r=n.escapeStack.length-1;r>=0;r-=1){const i=n.escapeStack[r];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===t}return!1}function na(e){return e.isComposing?!0:e.keyCode===229}function l({open:e,title:t,description:n,action:r,tone:i="info",live:m,duration:D,pauseOnHover:g=!0,closeOnEscape:k=!0,onEscapeKeyDown:K,onCloseButtonKeyDown:ke,closeLabel:Ee="Close toast",ariaLabel:Te,ariaLabelledBy:De,position:I="bottom-right",onClose:Y,onCloseReason:N,onOpenChange:M}){const x=c.useRef(null);c.useRef(!1);const j=c.useRef(!0),Re=c.useRef(!1),R=c.useRef(null),U=c.useRef(null),F=c.useRef(0),Pn=Fe(r),V=q(r),C=D??(V?0:4e3),A=c.useRef(C),[Fn,Le]=c.useState(!1),[qe,O]=c.useState({hover:!1,focus:!1}),[Ce,Ke]=c.useState(!1),[Ye,E]=c.useState(!1),[Ne,G]=c.useState(!1),[On,Ln]=c.useState(!1),Me=Fn||g&&(qe.hover||qe.focus),Ue=c.useId(),Ve=c.useId(),Ge=Fe(n),We=Be(n),Se=We.length>0,L=typeof De=="string"&&De.trim().length>0?De.trim():void 0,Ie=L===void 0&&typeof Te=="string"&&Te.trim().length>0?Te.trim():void 0,je=ra(t),_e=L?void 0:Ie??(je?void 0:Se?We:"Toast"),qn=L===void 0&&Ie===void 0&&!je&&Se,Kn=typeof Ee=="string"&&Ee.trim().length>0?Ee.trim():"Close toast",W=c.useCallback(()=>{const s=x.current;Ln(!!(e&&k&&s&&et(s.ownerDocument,s)))},[k,e]);c.useEffect(()=>{W()},[W]),c.useEffect(()=>{var y;const s=(y=x.current)==null?void 0:y.ownerDocument;if(s)return Zn(s,W)},[W]),c.useEffect(()=>{const s=x.current;if(!e||!s)return;const y=s.ownerDocument;return Xe(y,s),Ze(y,s,I),()=>{ea(y,s),ta(y,s,I)}},[e,I]),c.useEffect(()=>{!e||!x.current||Oe(x.current.ownerDocument)},[k,e]),c.useEffect(()=>{e||(O({hover:!1,focus:!1}),Le(!1)),Re.current=!1},[e]),c.useEffect(()=>{var h;if(!e)return;const s=((h=x.current)==null?void 0:h.ownerDocument)??document,y=()=>{Le(s.visibilityState==="hidden")};return y(),s.addEventListener("visibilitychange",y),()=>{s.removeEventListener("visibilitychange",y)}},[e]),c.useEffect(()=>{var b;if(!e)return;const s=((b=x.current)==null?void 0:b.ownerDocument)??document,y=B=>{B.metaKey||B.altKey||B.ctrlKey||(j.current=!0)},h=B=>{"button"in B&&!He(B.button)||"ctrlKey"in B&&B.ctrlKey||(j.current=!1)};return s.addEventListener("keydown",y,!0),s.addEventListener("pointerdown",h,!0),s.addEventListener("mousedown",h,!0),s.addEventListener("touchstart",h,!0),()=>{s.removeEventListener("keydown",y,!0),s.removeEventListener("pointerdown",h,!0),s.removeEventListener("mousedown",h,!0),s.removeEventListener("touchstart",h,!0)}},[e]);const T=c.useCallback(()=>{R.current!==null&&((U.current??window).clearTimeout(R.current),R.current=null),U.current=null,F.current=0},[]),H=c.useCallback(s=>{Re.current||(Re.current=!0,T(),N==null||N(s),Y==null||Y(),M==null||M(!1))},[T,Y,N,M]),Yn=c.useCallback(()=>{H("close-button")},[H]),ze=c.useCallback(()=>{H("escape-key")},[H]),Ae=c.useCallback(()=>{H("timeout")},[H]),$e=c.useCallback(()=>{const s=x.current;if(!e||!s)return;const y=s.ownerDocument;Xe(y,s),Ze(y,s,I)},[e,I]),_=c.useCallback(s=>{var h;if(s<=0){Ae();return}T(),A.current=s,F.current=Date.now();const y=((h=x.current)==null?void 0:h.ownerDocument.defaultView)??window;U.current=y,R.current=y.setTimeout(()=>{R.current=null,U.current=null,F.current=0,A.current=0,Ae()},s)},[T,Ae]),Je=c.useCallback(()=>{if(R.current===null||F.current===0)return;const s=Date.now()-F.current;A.current=Math.max(0,A.current-s),T()},[T]);if(c.useEffect(()=>{if(T(),A.current=C,!(!e||C<=0))return _(C),()=>{T()}},[T,e,C,_]),c.useEffect(()=>{if(!(!e||C<=0)){if(Me){Je();return}R.current===null&&_(A.current)}},[e,Je,g,Me,C,_]),c.useEffect(()=>{var h;if(!e||!k)return;const s=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||na(b))return;const B=x.current;!B||!et(B.ownerDocument,B)||Un(B.ownerDocument)||b.defaultPrevented||(K==null||K(b),!b.defaultPrevented&&(b.preventDefault(),ze()))},y=((h=x.current)==null?void 0:h.ownerDocument)??document;return y.addEventListener("keydown",s),()=>{y.removeEventListener("keydown",s)}},[ze,k,K,e]),c.useEffect(()=>{},[Ie,Se,je,L]),!e)return null;const Nn=V?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Mn=V?void 0:m??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:x,role:Nn,"data-close-on-escape":k?"true":"false","aria-modal":V?"false":void 0,"aria-live":Mn,"aria-atomic":"true","aria-keyshortcuts":On?"Escape":void 0,"aria-label":_e,"aria-labelledby":L??(_e?void 0:Ue),"aria-describedby":Ge&&!qn?Ve:void 0,onMouseEnter:()=>{$e(),g&&O(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&O(s=>({...s,hover:!1}))},onFocusCapture:()=>{$e(),g&&O(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&O(y=>({...y,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...zn[i],...Jn[I]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Ue,style:{color:"var(--aurora-text-primary)"},children:t}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Yn,"aria-label":Kn,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Ke(!0)},onMouseLeave:()=>{Ke(!1),E(!1)},onPointerDown:s=>{s.ctrlKey||He(s.button)&&(j.current=!1,G(!1),E(!0))},onPointerUp:s=>{He(s.button)&&E(!1)},onMouseDown:s=>{s.button!==0||s.ctrlKey||(j.current=!1,G(!1),E(!0))},onMouseUp:s=>{s.button===0&&E(!1)},onPointerCancel:()=>{E(!1)},onKeyDown:s=>{j.current=!0,ke==null||ke(s),!s.defaultPrevented&&(sa(s)||tt(s.key)&&!oa(s)&&!s.repeat&&E(!0))},onKeyUp:s=>{tt(s.key)&&E(!1)},onFocus:s=>{G(aa(s.currentTarget,j.current))},onBlur:()=>{G(!1),E(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:Ce||Ne?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Ye?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":Ce?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:Ce?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Ne?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:Ye?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),Ge?a.jsx("div",{id:Ve,style:{color:"var(--aurora-text-secondary)"},children:n}):null,Pn?a.jsx("div",{children:r}):null]})}function aa(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function tt(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function oa(e){return e.ctrlKey||e.metaKey||e.altKey}function sa(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function He(e){return typeof e!="number"||e<=0}function ra(e){return Be(e).length>0}function Be(e){if(typeof e=="string")return Pe(e);if(typeof e=="number")return String(e);if(Array.isArray(e))return Pe(e.map(n=>Be(n)).filter(n=>n.length>0).join(" "));if(!c.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?Pe(t["aria-label"]):Be(t.children)}function Fe(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Fe(t)):c.isValidElement(e)}function q(e){if(e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number")return!1;if(Array.isArray(e))return e.some(n=>q(n));if(!c.isValidElement(e))return!1;const t=e.props;return e.type===c.Fragment?q(t.children):typeof e.type=="string"?ca(e.type,t)||nt(t)?!0:q(t.children):nt(t)?!0:q(t.children)}function ca(e,t){if(An(t))return!1;const n=e.toLowerCase();return n==="button"||n==="input"||n==="select"||n==="textarea"?!0:n==="a"?typeof t.href=="string"&&t.href.trim().length>0:!1}function nt(e){if(An(e))return!1;const t=ia(e.role),n=typeof e.onClick=="function"||typeof e.onKeyDown=="function"||typeof e.onKeyUp=="function"||typeof e.onKeyPress=="function"||typeof e.onMouseDown=="function"||typeof e.onPointerDown=="function"||typeof e.onTouchStart=="function",r=typeof e.href=="string"&&e.href.trim().length>0||typeof e.to=="string"&&e.to.trim().length>0,i=typeof e.tabIndex=="number"&&e.tabIndex>=0;return t||r||e.contentEditable===!0||n?!0:i}function An(e){return e.disabled===!0||e["aria-disabled"]===!0||e["aria-disabled"]==="true"}function ia(e){return typeof e!="string"?!1:e.split(/\s+/).some(t=>$n.has(t.trim().toLowerCase()))}function Pe(e){return e.replace(/\s+/g," ").trim()}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseButtonKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const P={...Gn},xe={...Wn};function f({children:e,minHeight:t=260,align:n="stretch"}){return a.jsx(_n,{minHeight:t,align:n,gap:8,children:e})}const Fa={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function la(e){const t=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const z={};function ua(){const[e,t]=c.useState(!0);return a.jsxs(f,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toasts"})}),a.jsx(l,{open:e,onOpenChange:t,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(l,{open:e,onOpenChange:t,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(l,{open:e,onOpenChange:t,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const $={render:()=>a.jsx(ua,{})};function da(){const[e,t]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const J={render:()=>a.jsx(da,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});u.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),u.mouseDown(n),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.pointerCancel(n),await d(()=>{o(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.mouseDown(n),u.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function pa(){return a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only, and ignore IME composition keys.",tone:"info"})})}const Q={render:()=>a.jsx(pa,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),u.keyDown(n,{key:"Enter",ctrlKey:!0}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter",ctrlKey:!0}),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Spacebar"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(1px)")}),u.keyUp(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyDown(n,{key:"Enter",keyCode:229,which:229}),await d(()=>{o(n.style.transform).toContain("translateY(0")});const r=new KeyboardEvent("keydown",{key:"Enter",bubbles:!0,cancelable:!0});r.preventDefault(),n.dispatchEvent(r),await d(()=>{o(n.style.transform).toContain("translateY(0")})}};function ma(){return a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Locally preempted keyboard close",description:"Local close-button key guards should suppress pressed feedback.",tone:"info",onCloseButtonKeyDown:e=>{(e.key==="Enter"||e.key===" "||e.key==="Space"||e.key==="Spacebar")&&e.preventDefault()}})})}const X={render:()=>a.jsx(ma,{}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("button",{name:"Close toast"});n.focus(),u.keyDown(n,{key:"Enter"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Enter"}),u.keyDown(n,{key:"Space"}),await d(()=>{o(n.style.transform).toContain("translateY(0")}),u.keyUp(n,{key:"Space"})}};function ya(){return a.jsxs(f,{align:"start",children:[a.jsx("button",{type:"button",children:"Before toast close"}),a.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Focus intent re-entry toast",description:"Click the preceding control first, then Tab to verify close-button focus ring recovery.",tone:"info"})]})}const Z={render:()=>a.jsx(ya,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=await t.findByRole("button",{name:"Before toast close"}),r=await t.findByRole("button",{name:"Close toast"});await v.click(n),await o(n).toHaveFocus(),await v.tab(),await o(r).toHaveFocus(),await o(r.style.boxShadow).toContain("0 0 0 3px"),u.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.style.boxShadow).toContain("0 0 0 3px")}};function fa(){const[e,t]=c.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Acknowledge"})})]})}const ee={render:()=>a.jsx(fa,{}),play:async({canvasElement:e})=>{const t=p(e),n=t.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await v.click(t.getByRole("button",{name:"Close blocking notice"})),await o(t.queryByRole("dialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("dialog")).toBeInTheDocument()}};function va(){const[e,t]=c.useState(!0);return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(w,{size:"sm",onClick:()=>t(!1),children:"Confirm owner"})})]})}const te={render:()=>a.jsx(va,{}),play:async({canvasElement:e})=>{const t=p(e);await o(t.getByRole("alertdialog")).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close incident notice"})),await o(t.queryByRole("alertdialog")).not.toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Reopen"})),await o(t.getByRole("alertdialog")).toBeInTheDocument()}};function wa(){return a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update",description:"Blank action content should not upgrade toast role semantics.",action:"   "})})}const ne={render:()=>a.jsx(wa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive update"})).toBeNull()}};function ga(){return a.jsxs(f,{align:"start",children:[a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update text",description:"Text action content should not upgrade toast role semantics.",action:"Undo later"}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive update element",description:"Non-interactive action elements should keep passive toast semantics.",action:a.jsx("span",{children:"Undo later"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required nested",description:"Interactive descendants still upgrade toast role semantics.",action:a.jsx("span",{children:a.jsx("button",{type:"button",children:"Undo now"})})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Action required focusable",description:"Focusable action nodes should also upgrade toast role semantics.",action:a.jsx("span",{tabIndex:0,children:"Review details"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Passive target-only anchor",description:"Anchor actions without href should stay passive.",action:a.jsx("a",{target:"_blank",rel:"noreferrer",children:"Open docs target-only"})}),a.jsx(l,{open:!0,onOpenChange:()=>{},title:"Actionable docs link",description:"Anchor actions with href should upgrade to interactive toast semantics.",action:a.jsx("a",{href:"https://example.com/docs",target:"_blank",rel:"noreferrer",children:"Open docs link"})})]})}const ae={render:()=>a.jsx(ga,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Passive update text"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive update element"})).toBeInTheDocument(),await o(t.getAllByText("Undo later")).toHaveLength(2),await o(t.queryByRole("dialog",{name:"Passive update text"})).toBeNull(),await o(t.queryByRole("dialog",{name:"Passive update element"})).toBeNull(),await o(t.getByRole("dialog",{name:"Action required nested"})).toBeInTheDocument(),await o(t.getByRole("dialog",{name:"Action required focusable"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Passive target-only anchor"})).toBeInTheDocument(),await o(t.queryByRole("dialog",{name:"Passive target-only anchor"})).toBeNull(),await o(t.getByRole("dialog",{name:"Actionable docs link"})).toBeInTheDocument(),await o(t.getByRole("link",{name:"Open docs link"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Undo now"})).toBeInTheDocument(),await o(t.getByText("Review details")).toBeInTheDocument(),await o(t.getByText("Open docs target-only")).toBeInTheDocument()}};function ha(){const[e,t]=c.useState(!0),[n,r]=c.useState("none"),[i,m]=c.useState("N/A"),D=c.useCallback(g=>{m(k=>k==="N/A"?g:`${k} -> ${g}`)},[]);return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:P,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:xe,children:n})]}),a.jsxs("p",{style:P,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:xe,children:i})]}),a.jsx("p",{style:P,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(w,{variant:"outline",onClick:()=>{m("N/A"),t(!0)},children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:g=>{t(g),g||D("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{r(g),D(`reason:${g}`)}})]})}const oe={render:()=>a.jsx(ha,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await d(()=>{o(t.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await v.click(t.getByRole("button",{name:"Reopen Toast"})),u.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(t.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(t.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),t.getByRole("status",{name:"Close reason telemetry"}).focus(),await v.keyboard("{Shift>}{Escape}{/Shift}"),await d(()=>{o(t.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await d(()=>{o(t.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function ba(){const[e,t]=c.useState(!0),[n,r]=c.useState("none");return a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:P,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:xe,children:n})]}),a.jsx(w,{variant:"outline",onClick:()=>{r("none"),t(!0)},children:"Reopen Timed Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const se={render:()=>a.jsx(ba,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(await t.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await d(()=>{o(t.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(t.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Hn(){const[e,t]=c.useState({first:!0,second:!0});return a.jsxs(f,{children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const re={render:()=>a.jsx(Hn,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument,r=await t.findByRole("status",{name:"First notice"}),i=await t.findByRole("status",{name:"Second notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",ctrlKey:!0}),u.keyDown(n,{key:"Escape",metaKey:!0}),await o(i).toBeInTheDocument(),await v.click(p(i).getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await d(()=>{o(t.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Ba(){const[e,t]=c.useState({first:!0,second:!0}),[n,r]=c.useState(!0);return a.jsxs(f,{minHeight:280,align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(l,{open:e.first,onOpenChange:i=>{t(m=>({...m,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(l,{open:e.second,onOpenChange:i=>{t(m=>({...m,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const ce={render:()=>a.jsx(Ba,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument,r=await t.findByRole("status",{name:"Base notice"}),i=await t.findByRole("status",{name:"Top notice"});await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await v.click(t.getByRole("button",{name:"Pin top toast"})),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.click(t.getByRole("button",{name:"Unpin top toast"})),await d(()=>{o(r).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),u.keyDown(n,{key:"Escape",repeat:!0}),await o(t.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(t.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function xa(){const[e,t]=c.useState({first:!0,second:!0});return a.jsxs(f,{minHeight:280,children:[a.jsx(w,{variant:"outline",onClick:()=>t({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(l,{open:e.first,onOpenChange:n=>{t(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(l,{open:e.second,onOpenChange:n=>{t(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const ie={render:()=>a.jsx(xa,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=await t.findByRole("status",{name:"First stack item"}),r=await t.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},le={render:()=>a.jsxs(f,{minHeight:280,children:[a.jsx("p",{style:P,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Hn,{})]}),play:async({canvasElement:e})=>{const t=e.ownerDocument,n=p(t.body),r=await n.findByRole("status",{name:"First notice"}),i=await n.findByRole("status",{name:"Second notice"});await p(r).findByRole("button",{name:"Close toast"}).then(D=>D.focus()),await d(()=>{o(r).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await v.click(n.getByRole("button",{name:/reopen stack/i}));const m=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),u.mouseEnter(m),await d(()=>{o(m).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await v.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function ka(){const[e,t]=c.useState(!0),[n,r]=c.useState(!0);return c.useEffect(()=>{if(!n)return;const i=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Ea(){const[e,t]=c.useState(!0),[n,r]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(w,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Ta(){const[e,t]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Toast"}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Da(){const[e,t]=c.useState(!0),[n,r]=c.useState(0);return c.useEffect(()=>{const i=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(f,{align:"start",children:[a.jsxs("p",{style:P,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:xe,children:n})]}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}function Ra(){const[e,t]=c.useState(!0);return a.jsxs(f,{align:"start",children:[a.jsx(Vn,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(l,{open:e,onOpenChange:t,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const ue={render:()=>a.jsx(ka,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable global Escape handler"})),await o(t.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},de={render:()=>a.jsx(Da,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(t.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},pe={render:()=>a.jsx(Ra,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Open escape overlay"})),await o(t.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(t.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await d(()=>{o(t.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},me={render:()=>a.jsx(Ea,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape"}),await o(t.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Disable toast Escape guard"})),await o(t.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ye={render:()=>a.jsx(Ta,{}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=e.ownerDocument;await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),u.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),la(n),await o(t.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await v.click(t.getByRole("button",{name:"Close toast"})),await o(t.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},fe={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},ve={render:()=>a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:"Release notice",description:0})}),play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body),n=t.getByRole("status",{name:"Release notice"}),r=t.getAllByText("0");await o(r).toHaveLength(1),await o(n).toHaveAttribute("aria-describedby",r[0].id)}},we={render:()=>a.jsxs(f,{align:"start",children:[a.jsx("h3",{id:"toast-heading",style:{margin:0},children:"Build artifact ready heading"}),a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Fallback build artifact notification",ariaLabelledBy:"toast-heading"})]}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Build artifact ready heading"});await o(n).toHaveAttribute("aria-labelledby","toast-heading"),await o(n).not.toHaveAttribute("aria-label")}},ge={render:()=>a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"})})}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Toast"});await o(n).toHaveAttribute("aria-label","Toast"),await o(n).not.toHaveAttribute("aria-labelledby")}},he={render:()=>a.jsx(f,{align:"start",children:a.jsx(l,{open:!0,duration:0,title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Auto fallback name for icon-only title."})}),play:async({canvasElement:e})=>{const n=p(e.ownerDocument.body).getByRole("status",{name:"Auto fallback name for icon-only title."});await o(n).toHaveAttribute("aria-label","Auto fallback name for icon-only title."),await o(n).not.toHaveAttribute("aria-labelledby"),await o(n).not.toHaveAttribute("aria-describedby")}},be={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:e})=>{const t=p(e.ownerDocument.body);await o(t.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var at,ot,st;z.parameters={...z.parameters,docs:{...(at=z.parameters)==null?void 0:at.docs,source:{originalSource:"{}",...(st=(ot=z.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,ct,it;$.parameters={...$.parameters,docs:{...(rt=$.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(it=(ct=$.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var lt,ut,dt;J.parameters={...J.parameters,docs:{...(lt=J.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(dt=(ut=J.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var pt,mt,yt;Q.parameters={...Q.parameters,docs:{...(pt=Q.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=Q.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var ft,vt,wt;X.parameters={...X.parameters,docs:{...(ft=X.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(wt=(vt=X.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var gt,ht,bt;Z.parameters={...Z.parameters,docs:{...(gt=Z.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(bt=(ht=Z.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var Bt,xt,kt;ee.parameters={...ee.parameters,docs:{...(Bt=ee.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(kt=(xt=ee.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var Et,Tt,Dt;te.parameters={...te.parameters,docs:{...(Et=te.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Dt=(Tt=te.parameters)==null?void 0:Tt.docs)==null?void 0:Dt.source}}};var Rt,Ct,St;ne.parameters={...ne.parameters,docs:{...(Rt=ne.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(St=(Ct=ne.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var It,jt,At;ae.parameters={...ae.parameters,docs:{...(It=ae.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(At=(jt=ae.parameters)==null?void 0:jt.docs)==null?void 0:At.source}}};var Ht,Pt,Ft;oe.parameters={...oe.parameters,docs:{...(Ht=oe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ft=(Pt=oe.parameters)==null?void 0:Pt.docs)==null?void 0:Ft.source}}};var Ot,Lt,qt;se.parameters={...se.parameters,docs:{...(Ot=se.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(qt=(Lt=se.parameters)==null?void 0:Lt.docs)==null?void 0:qt.source}}};var Kt,Yt,Nt;re.parameters={...re.parameters,docs:{...(Kt=re.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Nt=(Yt=re.parameters)==null?void 0:Yt.docs)==null?void 0:Nt.source}}};var Mt,Ut,Vt;ce.parameters={...ce.parameters,docs:{...(Mt=ce.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Vt=(Ut=ce.parameters)==null?void 0:Ut.docs)==null?void 0:Vt.source}}};var Gt,Wt,_t;ie.parameters={...ie.parameters,docs:{...(Gt=ie.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(_t=(Wt=ie.parameters)==null?void 0:Wt.docs)==null?void 0:_t.source}}};var zt,$t,Jt;le.parameters={...le.parameters,docs:{...(zt=le.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Jt=($t=le.parameters)==null?void 0:$t.docs)==null?void 0:Jt.source}}};var Qt,Xt,Zt;ue.parameters={...ue.parameters,docs:{...(Qt=ue.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=ue.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var en,tn,nn;de.parameters={...de.parameters,docs:{...(en=de.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(nn=(tn=de.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var an,on,sn;pe.parameters={...pe.parameters,docs:{...(an=pe.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(sn=(on=pe.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,ln;me.parameters={...me.parameters,docs:{...(rn=me.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(ln=(cn=me.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var un,dn,pn;ye.parameters={...ye.parameters,docs:{...(un=ye.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(pn=(dn=ye.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var mn,yn,fn;fe.parameters={...fe.parameters,docs:{...(mn=fe.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(fn=(yn=fe.parameters)==null?void 0:yn.docs)==null?void 0:fn.source}}};var vn,wn,gn;ve.parameters={...ve.parameters,docs:{...(vn=ve.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(gn=(wn=ve.parameters)==null?void 0:wn.docs)==null?void 0:gn.source}}};var hn,bn,Bn;we.parameters={...we.parameters,docs:{...(hn=we.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(Bn=(bn=we.parameters)==null?void 0:bn.docs)==null?void 0:Bn.source}}};var xn,kn,En;ge.parameters={...ge.parameters,docs:{...(xn=ge.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(En=(kn=ge.parameters)==null?void 0:kn.docs)==null?void 0:En.source}}};var Tn,Dn,Rn;he.parameters={...he.parameters,docs:{...(Tn=he.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Rn=(Dn=he.parameters)==null?void 0:Dn.docs)==null?void 0:Rn.source}}};var Cn,Sn,In;be.parameters={...be.parameters,docs:{...(Cn=be.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(In=(Sn=be.parameters)==null?void 0:Sn.docs)==null?void 0:In.source}}};const Oa=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","FocusIntentReentry","ActionRequired","ActionRequiredDanger","BlankActionSemantics","TextActionSemantics","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","NumericDescriptionSemantics","LabelledByPrecedence","NonTextTitleAutoNameFallback","NonTextTitleDescriptionNameFallback","LiveRegionOff"];export{ee as ActionRequired,te as ActionRequiredDanger,fe as AriaLabelOverride,ne as BlankActionSemantics,Q as CloseButtonKeyboardPressedState,X as CloseButtonManagedKeysPreemptedByLocalHandler,J as CloseButtonPrimaryPointerOnly,oe as CloseReasonTelemetry,z as Default,me as EscapeGuardedByToastHandler,ye as EscapeIgnoresImeComposition,ue as EscapePreemptedByGlobalHandler,pe as EscapePreemptedByOverlayLayer,de as EscapePreemptedSkipsToastHook,ce as EscapeShortcutSync,re as EscapeStackOrder,Z as FocusIntentReentry,le as FocusedToastEscapesFirst,we as LabelledByPrecedence,be as LiveRegionOff,ge as NonTextTitleAutoNameFallback,he as NonTextTitleDescriptionNameFallback,ve as NumericDescriptionSemantics,ie as StackedViewportOffset,ae as TextActionSemantics,se as TimeoutCloseReason,$ as ToneMatrix,Oa as __namedExportsOrder,Fa as default};
