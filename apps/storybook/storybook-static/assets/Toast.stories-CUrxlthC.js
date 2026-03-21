import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as v}from"./Button-COG9o64O.js";import{h as _t}from"./DismissableLayer-CvOMiBFU.js";import{P as zt}from"./Popover-D_FkSQtk.js";import{within as y,expect as o,userEvent as f,fireEvent as p,waitFor as m}from"./index-DgAF9SIF.js";import{s as $t,a as Jt,b as Qt}from"./storyShowcase-Bw5VyCj0.js";const Xt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Zt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},en=14,Ie=new WeakMap;function tn(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function C(t){const e=Ie.get(t);if(e)return e;const n={escapeStack:[],visualStacks:tn(),listeners:new Set};return Ie.set(t,n),n}function ge(t){C(t).listeners.forEach(n=>{n()})}function nn(t,e){const n=C(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function je(t,e){const n=C(t),c=n.escapeStack.lastIndexOf(e);c>=0&&n.escapeStack.splice(c,1),n.escapeStack.push(e),ge(t)}function an(t,e){const n=C(t),c=n.escapeStack.lastIndexOf(e);c>=0&&(n.escapeStack.splice(c,1),ge(t))}function Lt(t,e){const n=t.visualStacks[e],c=e.startsWith("bottom")?-1:1;n.forEach((i,u)=>{const x=n.length-1-u;i.style.setProperty("--aurora-toast-stack-offset",`${x*c*en}px`)})}function Oe(t,e,n){const c=C(t),i=c.visualStacks[n],u=i.lastIndexOf(e);u>=0&&i.splice(u,1),i.push(e),Lt(c,n)}function on(t,e,n){const c=C(t),i=c.visualStacks[n],u=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(u<0)&&(i.splice(u,1),Lt(c,n))}function He(t,e){const n=C(t);for(let c=n.escapeStack.length-1;c>=0;c-=1){const i=n.escapeStack[c];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function sn(t){return t.isComposing?!0:t.keyCode===229}function d({open:t,title:e,description:n,action:c,tone:i="info",live:u,duration:x,pauseOnHover:g=!0,closeOnEscape:k=!0,onEscapeKeyDown:L,closeLabel:de="Close toast",ariaLabel:pe,position:S="bottom-right",onClose:K,onCloseReason:M,onOpenChange:Y}){const B=r.useRef(null);r.useRef(!1);const A=r.useRef(!0),me=r.useRef(!1),D=r.useRef(null),V=r.useRef(null),F=r.useRef(0),P=r.Children.toArray(c).length>0,R=x??(P?0:4e3),I=r.useRef(R),[Mt,he]=r.useState(!1),[be,q]=r.useState({hover:!1,focus:!1}),[ye,Be]=r.useState(!1),[ke,j]=r.useState(!1),[Ee,fe]=r.useState(!1),[Yt,Vt]=r.useState(!1),xe=Mt||g&&(be.hover||be.focus),Te=r.useId(),De=r.useId(),ve=typeof pe=="string"&&pe.trim().length>0?pe.trim():void 0,Gt=typeof de=="string"&&de.trim().length>0?de.trim():"Close toast",G=r.useCallback(()=>{const s=B.current;Vt(!!(t&&k&&s&&He(s.ownerDocument,s)))},[k,t]);r.useEffect(()=>{G()},[G]),r.useEffect(()=>{var l;const s=(l=B.current)==null?void 0:l.ownerDocument;if(s)return nn(s,G)},[G]),r.useEffect(()=>{const s=B.current;if(!t||!s)return;const l=s.ownerDocument;return je(l,s),Oe(l,s,S),()=>{an(l,s),on(l,s,S)}},[t,S]),r.useEffect(()=>{!t||!B.current||ge(B.current.ownerDocument)},[k,t]),r.useEffect(()=>{t||(q({hover:!1,focus:!1}),he(!1)),me.current=!1},[t]),r.useEffect(()=>{var h;if(!t)return;const s=((h=B.current)==null?void 0:h.ownerDocument)??document,l=()=>{he(s.visibilityState==="hidden")};return l(),s.addEventListener("visibilitychange",l),()=>{s.removeEventListener("visibilitychange",l)}},[t]),r.useEffect(()=>{var b;if(!t)return;const s=((b=B.current)==null?void 0:b.ownerDocument)??document,l=T=>{T.metaKey||T.altKey||T.ctrlKey||(A.current=!0)},h=()=>{A.current=!1};return s.addEventListener("keydown",l,!0),s.addEventListener("pointerdown",h,!0),s.addEventListener("mousedown",h,!0),s.addEventListener("touchstart",h,!0),()=>{s.removeEventListener("keydown",l,!0),s.removeEventListener("pointerdown",h,!0),s.removeEventListener("mousedown",h,!0),s.removeEventListener("touchstart",h,!0)}},[t]);const E=r.useCallback(()=>{D.current!==null&&((V.current??window).clearTimeout(D.current),D.current=null),V.current=null,F.current=0},[]),O=r.useCallback(s=>{me.current||(me.current=!0,E(),M==null||M(s),K==null||K(),Y==null||Y(!1))},[E,K,M,Y]),Ut=r.useCallback(()=>{O("close-button")},[O]),Re=r.useCallback(()=>{O("escape-key")},[O]),we=r.useCallback(()=>{O("timeout")},[O]),Ce=r.useCallback(()=>{const s=B.current;if(!t||!s)return;const l=s.ownerDocument;je(l,s),Oe(l,s,S)},[t,S]),U=r.useCallback(s=>{var h;if(s<=0){we();return}E(),I.current=s,F.current=Date.now();const l=((h=B.current)==null?void 0:h.ownerDocument.defaultView)??window;V.current=l,D.current=l.setTimeout(()=>{D.current=null,V.current=null,F.current=0,I.current=0,we()},s)},[E,we]),Se=r.useCallback(()=>{if(D.current===null||F.current===0)return;const s=Date.now()-F.current;I.current=Math.max(0,I.current-s),E()},[E]);if(r.useEffect(()=>{if(E(),I.current=R,!(!t||R<=0))return U(R),()=>{E()}},[E,t,R,U]),r.useEffect(()=>{if(!(!t||R<=0)){if(xe){Se();return}D.current===null&&U(I.current)}},[t,Se,g,xe,R,U]),r.useEffect(()=>{var h;if(!t||!k)return;const s=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||sn(b))return;const T=B.current;!T||!He(T.ownerDocument,T)||_t(T.ownerDocument)||b.defaultPrevented||(L==null||L(b),!b.defaultPrevented&&(b.preventDefault(),Re()))},l=((h=B.current)==null?void 0:h.ownerDocument)??document;return l.addEventListener("keydown",s),()=>{l.removeEventListener("keydown",s)}},[Re,k,L,t]),r.useEffect(()=>{},[ve,e]),!t)return null;const Nt=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Wt=P?void 0:u??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:B,role:Nt,"data-close-on-escape":k?"true":"false","aria-modal":P?"false":void 0,"aria-live":Wt,"aria-atomic":"true","aria-keyshortcuts":Yt?"Escape":void 0,"aria-label":ve,"aria-labelledby":ve?void 0:Te,"aria-describedby":n?De:void 0,onMouseEnter:()=>{Ce(),g&&q(s=>({...s,hover:!0}))},onMouseLeave:()=>{g&&q(s=>({...s,hover:!1}))},onFocusCapture:()=>{Ce(),g&&q(s=>({...s,focus:!0}))},onBlurCapture:s=>{g&&!s.currentTarget.contains(s.relatedTarget)&&q(l=>({...l,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Xt[i],...Zt[S]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Te,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Ut,"aria-label":Gt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Be(!0)},onMouseLeave:()=>{Be(!1),j(!1)},onMouseDown:s=>{s.button===0&&(A.current=!1,fe(!1),j(!0))},onMouseUp:s=>{s.button===0&&j(!1)},onKeyDown:s=>{A.current=!0,Ae(s.key)&&!cn(s)&&j(!0)},onKeyUp:s=>{Ae(s.key)&&j(!1)},onFocus:s=>{fe(rn(s.currentTarget,A.current))},onBlur:()=>{fe(!1),j(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ye||Ee?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ke?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ye?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ye?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Ee?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:ke?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:De,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:c}):null]})}function rn(t,e){try{return t.matches(":focus-visible")}catch{return e}}function Ae(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function cn(t){return t.ctrlKey||t.metaKey||t.altKey}d.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const H={...$t},le={...Jt};function w({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(Qt,{minHeight:e,align:n,gap:8,children:t})}const jn={title:"Feedback/Toast",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}};function un(t){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),t.dispatchEvent(e)}const N={};function ln(){const[t,e]=r.useState(!0);return a.jsxs(w,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(d,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(d,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const W={render:()=>a.jsx(ln,{})};function dn(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const _={render:()=>a.jsx(dn,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});p.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),p.mouseDown(n),p.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function pn(){return a.jsx(w,{align:"start",children:a.jsx(d,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only.",tone:"info"})})}const z={render:()=>a.jsx(pn,{}),play:async({canvasElement:t})=>{const n=y(t.ownerDocument.body).getByRole("button",{name:"Close toast"});await o(n).toHaveAttribute("aria-keyshortcuts","Enter Space"),n.focus(),p.keyDown(n,{key:"Enter",ctrlKey:!0}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),p.keyUp(n,{key:"Enter",ctrlKey:!0}),p.keyDown(n,{key:"Enter"}),await m(()=>{o(n.style.transform).toContain("translateY(1px)")}),p.keyUp(n,{key:"Enter"}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),p.keyDown(n,{key:"Spacebar"}),await m(()=>{o(n.style.transform).toContain("translateY(1px)")}),p.keyUp(n,{key:"Spacebar"}),await m(()=>{o(n.style.transform).toContain("translateY(0")}),p.keyDown(n,{key:"Space"}),await m(()=>{o(n.style.transform).toContain("translateY(1px)")}),p.keyUp(n,{key:"Space"}),await m(()=>{o(n.style.transform).toContain("translateY(0")})}};function mn(){const[t,e]=r.useState(!0);return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(v,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const $={render:()=>a.jsx(mn,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await o(n).toBeInTheDocument(),await o(n).not.toHaveAttribute("aria-keyshortcuts"),await f.click(e.getByRole("button",{name:"Close blocking notice"})),await o(e.queryByRole("dialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("dialog")).toBeInTheDocument()}};function yn(){const[t,e]=r.useState(!0);return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(v,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const J={render:()=>a.jsx(yn,{}),play:async({canvasElement:t})=>{const e=y(t);await o(e.getByRole("alertdialog")).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close incident notice"})),await o(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Reopen"})),await o(e.getByRole("alertdialog")).toBeInTheDocument()}};function fn(){const[t,e]=r.useState(!0),[n,c]=r.useState("none"),[i,u]=r.useState("N/A"),x=r.useCallback(g=>{u(k=>k==="N/A"?g:`${k} -> ${g}`)},[]);return a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:le,children:n})]}),a.jsxs("p",{style:H,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:le,children:i})]}),a.jsx("p",{style:H,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(v,{variant:"outline",onClick:()=>{u("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:g=>{e(g),g||x("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:g=>{c(g),x(`reason:${g}`)}})]})}const Q={render:()=>a.jsx(fn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await m(()=>{o(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await f.click(e.getByRole("button",{name:"Close toast"})),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await f.click(e.getByRole("button",{name:"Reopen Toast"})),p.keyDown(n,{key:"Escape",ctrlKey:!0}),await o(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await o(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),e.getByRole("status",{name:"Close reason telemetry"}).focus(),await f.keyboard("{Shift>}{Escape}{/Shift}"),await m(()=>{o(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await m(()=>{o(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function vn(){const[t,e]=r.useState(!0),[n,c]=r.useState("none");return a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:H,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:le,children:n})]}),a.jsx(v,{variant:"outline",onClick:()=>{c("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:c})]})}const X={render:()=>a.jsx(vn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await m(()=>{o(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await o(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Kt(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs(w,{children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const Z={render:()=>a.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,c=await e.findByRole("status",{name:"First notice"}),i=await e.findByRole("status",{name:"Second notice"});await m(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),p.keyDown(n,{key:"Escape",ctrlKey:!0}),p.keyDown(n,{key:"Escape",metaKey:!0}),await o(i).toBeInTheDocument(),await f.click(y(i).getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await m(()=>{o(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function wn(){const[t,e]=r.useState({first:!0,second:!0}),[n,c]=r.useState(!0);return a.jsxs(w,{minHeight:280,align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(d,{open:t.first,onOpenChange:i=>{e(u=>({...u,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t.second,onOpenChange:i=>{e(u=>({...u,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const ee={render:()=>a.jsx(wn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,c=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await m(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await f.click(e.getByRole("button",{name:"Pin top toast"})),await m(()=>{o(c).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await f.click(e.getByRole("button",{name:"Unpin top toast"})),await m(()=>{o(c).not.toHaveAttribute("aria-keyshortcuts"),o(i).toHaveAttribute("aria-keyshortcuts","Escape")}),p.keyDown(n,{key:"Escape",repeat:!0}),await o(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await o(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function gn(){const[t,e]=r.useState({first:!0,second:!0});return a.jsxs(w,{minHeight:280,children:[a.jsx(v,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const te={render:()=>a.jsx(gn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),c=await e.findByRole("status",{name:"Second stack item"});await o(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await o(c.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},ne={render:()=>a.jsxs(w,{minHeight:280,children:[a.jsx("p",{style:H,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Kt,{})]}),play:async({canvasElement:t})=>{const e=t.ownerDocument,n=y(e.body),c=await n.findByRole("status",{name:"First notice"}),i=await n.findByRole("status",{name:"Second notice"});await y(c).findByRole("button",{name:"Close toast"}).then(x=>x.focus()),await m(()=>{o(c).toHaveAttribute("aria-keyshortcuts","Escape"),o(i).not.toHaveAttribute("aria-keyshortcuts")}),await f.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument(),await f.click(n.getByRole("button",{name:/reopen stack/i}));const u=await n.findByRole("status",{name:"First notice"});await n.findByRole("status",{name:"Second notice"}),p.mouseEnter(u),await m(()=>{o(u).toHaveAttribute("aria-keyshortcuts","Escape"),o(n.getByRole("status",{name:"Second notice"})).not.toHaveAttribute("aria-keyshortcuts")}),await f.keyboard("{Escape}"),await o(n.queryByRole("status",{name:"First notice"})).not.toBeInTheDocument(),await o(n.getByRole("status",{name:"Second notice"})).toBeInTheDocument()}};function hn(){const[t,e]=r.useState(!0),[n,c]=r.useState(!0);return r.useEffect(()=>{if(!n)return;const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function bn(){const[t,e]=r.useState(!0),[n,c]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(v,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Bn(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function kn(){const[t,e]=r.useState(!0),[n,c]=r.useState(0);return r.useEffect(()=>{const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(w,{align:"start",children:[a.jsxs("p",{style:H,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:le,children:n})]}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}function En(){const[t,e]=r.useState(!0);return a.jsxs(w,{align:"start",children:[a.jsx(zt,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:a.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const ae={render:()=>a.jsx(hn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),p.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable global Escape handler"})),await o(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},oe={render:()=>a.jsx(kn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),p.keyDown(n,{key:"Escape"}),await o(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await o(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},se={render:()=>a.jsx(En,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Open escape overlay"})),await o(e.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),p.keyDown(n,{key:"Escape"}),await m(()=>{o(e.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await o(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),p.keyDown(n,{key:"Escape"}),await m(()=>{o(e.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},re={render:()=>a.jsx(bn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),p.keyDown(n,{key:"Escape"}),await o(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await o(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ce={render:()=>a.jsx(Bn,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),p.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),un(n),await o(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await f.click(e.getByRole("button",{name:"Close toast"})),await o(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ie={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},ue={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await o(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Fe,Pe,qe;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:"{}",...(qe=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Le,Ke,Me;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Me=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Ye,Ve,Ge;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Ue,Ne,We;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
  }
}`,...(We=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var _e,ze,$e;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...($e=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=J.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=Q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,ot;X.parameters={...X.parameters,docs:{...(nt=X.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(at=X.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var st,rt,ct;Z.parameters={...Z.parameters,docs:{...(st=Z.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(rt=Z.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,ut,lt;ee.parameters={...ee.parameters,docs:{...(it=ee.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ut=ee.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,pt,mt;te.parameters={...te.parameters,docs:{...(dt=te.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=te.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ft,vt;ne.parameters={...ne.parameters,docs:{...(yt=ne.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};var wt,gt,ht;ae.parameters={...ae.parameters,docs:{...(wt=ae.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(ht=(gt=ae.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var bt,Bt,kt;oe.parameters={...oe.parameters,docs:{...(bt=oe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(kt=(Bt=oe.parameters)==null?void 0:Bt.docs)==null?void 0:kt.source}}};var Et,xt,Tt;se.parameters={...se.parameters,docs:{...(Et=se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Tt=(xt=se.parameters)==null?void 0:xt.docs)==null?void 0:Tt.source}}};var Dt,Rt,Ct;re.parameters={...re.parameters,docs:{...(Dt=re.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Ct=(Rt=re.parameters)==null?void 0:Rt.docs)==null?void 0:Ct.source}}};var St,It,jt;ce.parameters={...ce.parameters,docs:{...(St=ce.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(jt=(It=ce.parameters)==null?void 0:It.docs)==null?void 0:jt.source}}};var Ot,Ht,At;ie.parameters={...ie.parameters,docs:{...(Ot=ie.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(At=(Ht=ie.parameters)==null?void 0:Ht.docs)==null?void 0:At.source}}};var Ft,Pt,qt;ue.parameters={...ue.parameters,docs:{...(Ft=ue.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(qt=(Pt=ue.parameters)==null?void 0:Pt.docs)==null?void 0:qt.source}}};const On=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{$ as ActionRequired,J as ActionRequiredDanger,ie as AriaLabelOverride,z as CloseButtonKeyboardPressedState,_ as CloseButtonPrimaryPointerOnly,Q as CloseReasonTelemetry,N as Default,re as EscapeGuardedByToastHandler,ce as EscapeIgnoresImeComposition,ae as EscapePreemptedByGlobalHandler,se as EscapePreemptedByOverlayLayer,oe as EscapePreemptedSkipsToastHook,ee as EscapeShortcutSync,Z as EscapeStackOrder,ne as FocusedToastEscapesFirst,ue as LiveRegionOff,te as StackedViewportOffset,X as TimeoutCloseReason,W as ToneMatrix,On as __namedExportsOrder,jn as default};
