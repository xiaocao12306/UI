import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as y}from"./Button-BMxlc9Nj.js";import{h as _t}from"./DismissableLayer-CvOMiBFU.js";import{P as zt}from"./Popover-BBqjLa8s.js";import{within as f,expect as s,userEvent as h,fireEvent as p,waitFor as m}from"./index-DgAF9SIF.js";import{s as $t,a as Jt,b as Qt}from"./storyShowcase-Bw5VyCj0.js";const Xt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Zt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},ea=14,Ie=new WeakMap;function ta(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function R(t){const e=Ie.get(t);if(e)return e;const a={escapeStack:[],visualStacks:ta(),listeners:new Set};return Ie.set(t,a),a}function ge(t){R(t).listeners.forEach(a=>{a()})}function aa(t,e){const a=R(t);return a.listeners.add(e),()=>{a.listeners.delete(e)}}function je(t,e){const a=R(t),c=a.escapeStack.lastIndexOf(e);c>=0&&a.escapeStack.splice(c,1),a.escapeStack.push(e),ge(t)}function na(t,e){const a=R(t),c=a.escapeStack.lastIndexOf(e);c>=0&&(a.escapeStack.splice(c,1),ge(t))}function Lt(t,e){const a=t.visualStacks[e],c=e.startsWith("bottom")?-1:1;a.forEach((i,d)=>{const C=a.length-1-d;i.style.setProperty("--aurora-toast-stack-offset",`${C*c*ea}px`)})}function Oe(t,e,a){const c=R(t),i=c.visualStacks[a],d=i.lastIndexOf(e);d>=0&&i.splice(d,1),i.push(e),Lt(c,a)}function oa(t,e,a){const c=R(t),i=c.visualStacks[a],d=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(d<0)&&(i.splice(d,1),Lt(c,a))}function He(t,e){const a=R(t);for(let c=a.escapeStack.length-1;c>=0;c-=1){const i=a.escapeStack[c];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function sa(t){return t.isComposing?!0:t.keyCode===229}function l({open:t,title:e,description:a,action:c,tone:i="info",live:d,duration:C,pauseOnHover:w=!0,closeOnEscape:B=!0,onEscapeKeyDown:L,closeLabel:de="Close toast",ariaLabel:pe,position:S="bottom-right",onClose:K,onCloseReason:M,onOpenChange:Y}){const k=r.useRef(null);r.useRef(!1);const A=r.useRef(!0),me=r.useRef(!1),T=r.useRef(null),V=r.useRef(null),P=r.useRef(0),F=r.Children.toArray(c).length>0,D=C??(F?0:4e3),I=r.useRef(D),[Mt,he]=r.useState(!1),[be,q]=r.useState({hover:!1,focus:!1}),[ye,ke]=r.useState(!1),[Be,j]=r.useState(!1),[Ee,fe]=r.useState(!1),[Yt,Vt]=r.useState(!1),xe=Mt||w&&(be.hover||be.focus),Te=r.useId(),De=r.useId(),ve=typeof pe=="string"&&pe.trim().length>0?pe.trim():void 0,Gt=typeof de=="string"&&de.trim().length>0?de.trim():"Close toast",G=r.useCallback(()=>{const o=k.current;Vt(!!(t&&B&&o&&He(o.ownerDocument,o)))},[B,t]);r.useEffect(()=>{G()},[G]),r.useEffect(()=>{var u;const o=(u=k.current)==null?void 0:u.ownerDocument;if(o)return aa(o,G)},[G]),r.useEffect(()=>{const o=k.current;if(!t||!o)return;const u=o.ownerDocument;return je(u,o),Oe(u,o,S),()=>{na(u,o),oa(u,o,S)}},[t,S]),r.useEffect(()=>{!t||!k.current||ge(k.current.ownerDocument)},[B,t]),r.useEffect(()=>{t||(q({hover:!1,focus:!1}),he(!1)),me.current=!1},[t]),r.useEffect(()=>{var g;if(!t)return;const o=((g=k.current)==null?void 0:g.ownerDocument)??document,u=()=>{he(o.visibilityState==="hidden")};return u(),o.addEventListener("visibilitychange",u),()=>{o.removeEventListener("visibilitychange",u)}},[t]),r.useEffect(()=>{var b;if(!t)return;const o=((b=k.current)==null?void 0:b.ownerDocument)??document,u=x=>{x.metaKey||x.altKey||x.ctrlKey||(A.current=!0)},g=()=>{A.current=!1};return o.addEventListener("keydown",u,!0),o.addEventListener("pointerdown",g,!0),o.addEventListener("mousedown",g,!0),o.addEventListener("touchstart",g,!0),()=>{o.removeEventListener("keydown",u,!0),o.removeEventListener("pointerdown",g,!0),o.removeEventListener("mousedown",g,!0),o.removeEventListener("touchstart",g,!0)}},[t]);const E=r.useCallback(()=>{T.current!==null&&((V.current??window).clearTimeout(T.current),T.current=null),V.current=null,P.current=0},[]),O=r.useCallback(o=>{me.current||(me.current=!0,E(),M==null||M(o),K==null||K(),Y==null||Y(!1))},[E,K,M,Y]),Ut=r.useCallback(()=>{O("close-button")},[O]),Re=r.useCallback(()=>{O("escape-key")},[O]),we=r.useCallback(()=>{O("timeout")},[O]),Ce=r.useCallback(()=>{const o=k.current;if(!t||!o)return;const u=o.ownerDocument;je(u,o),Oe(u,o,S)},[t,S]),U=r.useCallback(o=>{var g;if(o<=0){we();return}E(),I.current=o,P.current=Date.now();const u=((g=k.current)==null?void 0:g.ownerDocument.defaultView)??window;V.current=u,T.current=u.setTimeout(()=>{T.current=null,V.current=null,P.current=0,I.current=0,we()},o)},[E,we]),Se=r.useCallback(()=>{if(T.current===null||P.current===0)return;const o=Date.now()-P.current;I.current=Math.max(0,I.current-o),E()},[E]);if(r.useEffect(()=>{if(E(),I.current=D,!(!t||D<=0))return U(D),()=>{E()}},[E,t,D,U]),r.useEffect(()=>{if(!(!t||D<=0)){if(xe){Se();return}T.current===null&&U(I.current)}},[t,Se,w,xe,D,U]),r.useEffect(()=>{var g;if(!t||!B)return;const o=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||sa(b))return;const x=k.current;!x||!He(x.ownerDocument,x)||_t(x.ownerDocument)||b.defaultPrevented||(L==null||L(b),!b.defaultPrevented&&(b.preventDefault(),Re()))},u=((g=k.current)==null?void 0:g.ownerDocument)??document;return u.addEventListener("keydown",o),()=>{u.removeEventListener("keydown",o)}},[Re,B,L,t]),r.useEffect(()=>{},[ve,e]),!t)return null;const Nt=F?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Wt=F?void 0:d??(i==="danger"?"assertive":"polite");return n.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:k,role:Nt,"data-close-on-escape":B?"true":"false","aria-modal":F?"false":void 0,"aria-live":Wt,"aria-atomic":"true","aria-keyshortcuts":Yt?"Escape":void 0,"aria-label":ve,"aria-labelledby":ve?void 0:Te,"aria-describedby":a?De:void 0,onMouseEnter:()=>{Ce(),w&&q(o=>({...o,hover:!0}))},onMouseLeave:()=>{w&&q(o=>({...o,hover:!1}))},onFocusCapture:()=>{Ce(),w&&q(o=>({...o,focus:!0}))},onBlurCapture:o=>{w&&!o.currentTarget.contains(o.relatedTarget)&&q(u=>({...u,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Xt[i],...Zt[S]},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[n.jsx("strong",{id:Te,style:{color:"var(--aurora-text-primary)"},children:e}),n.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Ut,"aria-label":Gt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{ke(!0)},onMouseLeave:()=>{ke(!1),j(!1)},onMouseDown:o=>{o.button===0&&(A.current=!1,fe(!1),j(!0))},onMouseUp:o=>{o.button===0&&j(!1)},onKeyDown:o=>{A.current=!0,Ae(o.key)&&!ca(o)&&j(!0)},onKeyUp:o=>{Ae(o.key)&&j(!1)},onFocus:o=>{fe(ra(o.currentTarget,A.current))},onBlur:()=>{fe(!1),j(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ye||Ee?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Be?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ye?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ye?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Ee?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:Be?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),a?n.jsx("div",{id:De,style:{color:"var(--aurora-text-secondary)"},children:a}):null,F?n.jsx("div",{children:c}):null]})}function ra(t,e){try{return t.matches(":focus-visible")}catch{return e}}function Ae(t){return t==="Enter"||t===" "||t==="Space"||t==="Spacebar"}function ca(t){return t.ctrlKey||t.metaKey||t.altKey}l.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const H={...$t},le={...Jt};function v({children:t,minHeight:e=260,align:a="stretch"}){return n.jsx(Qt,{minHeight:e,align:a,gap:8,children:t})}const Sa={title:"Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},N={};function ia(){const[t,e]=r.useState(!0);return n.jsxs(v,{minHeight:460,children:[n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(y,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),n.jsx(l,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),n.jsx(l,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),n.jsx(l,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),n.jsx(l,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const W={render:()=>n.jsx(ia,{})};function ua(){const[t,e]=r.useState(!0);return n.jsxs(v,{align:"start",children:[n.jsx(y,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),n.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const _={render:()=>n.jsx(ua,{}),play:async({canvasElement:t})=>{const a=f(t.ownerDocument.body).getByRole("button",{name:"Close toast"});p.mouseDown(a,{button:2}),await s(a.style.transform).toContain("translateY(0"),p.mouseDown(a),p.mouseUp(a),await s(a.style.transform).toContain("translateY(0")}};function la(){return n.jsx(v,{align:"start",children:n.jsx(l,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only.",tone:"info"})})}const z={render:()=>n.jsx(la,{}),play:async({canvasElement:t})=>{const a=f(t.ownerDocument.body).getByRole("button",{name:"Close toast"});await s(a).toHaveAttribute("aria-keyshortcuts","Enter Space"),a.focus(),p.keyDown(a,{key:"Enter",ctrlKey:!0}),await m(()=>{s(a.style.transform).toContain("translateY(0")}),p.keyUp(a,{key:"Enter",ctrlKey:!0}),p.keyDown(a,{key:"Enter"}),await m(()=>{s(a.style.transform).toContain("translateY(1px)")}),p.keyUp(a,{key:"Enter"}),await m(()=>{s(a.style.transform).toContain("translateY(0")}),p.keyDown(a,{key:"Spacebar"}),await m(()=>{s(a.style.transform).toContain("translateY(1px)")}),p.keyUp(a,{key:"Spacebar"}),await m(()=>{s(a.style.transform).toContain("translateY(0")}),p.keyDown(a,{key:"Space"}),await m(()=>{s(a.style.transform).toContain("translateY(1px)")}),p.keyUp(a,{key:"Space"}),await m(()=>{s(a.style.transform).toContain("translateY(0")})}};function da(){const[t,e]=r.useState(!0);return n.jsxs(v,{children:[n.jsx(y,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),n.jsx(l,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:n.jsx(y,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const $={render:()=>n.jsx(da,{}),play:async({canvasElement:t})=>{const e=f(t),a=e.getByRole("dialog");await s(a).toBeInTheDocument(),await s(a).not.toHaveAttribute("aria-keyshortcuts"),await h.click(e.getByRole("button",{name:"Close blocking notice"})),await s(e.queryByRole("dialog")).not.toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("dialog")).toBeInTheDocument()}};function pa(){const[t,e]=r.useState(!0);return n.jsxs(v,{children:[n.jsx(y,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),n.jsx(l,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:n.jsx(y,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const J={render:()=>n.jsx(pa,{}),play:async({canvasElement:t})=>{const e=f(t);await s(e.getByRole("alertdialog")).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Close incident notice"})),await s(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("alertdialog")).toBeInTheDocument()}};function ma(){const[t,e]=r.useState(!0),[a,c]=r.useState("none"),[i,d]=r.useState("N/A"),C=r.useCallback(w=>{d(B=>B==="N/A"?w:`${B} -> ${w}`)},[]);return n.jsxs(v,{align:"start",children:[n.jsxs("p",{style:H,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"toast-close-reason",style:le,children:a})]}),n.jsxs("p",{style:H,children:["Close trace:"," ",n.jsx("strong",{"data-testid":"toast-close-trace",style:le,children:i})]}),n.jsx("p",{style:H,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),n.jsx(y,{variant:"outline",onClick:()=>{d("N/A"),e(!0)},children:"Reopen Toast"}),n.jsx(l,{open:t,onOpenChange:w=>{e(w),w||C("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:w=>{c(w),C(`reason:${w}`)}})]})}const Q={render:()=>n.jsx(ma,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=t.ownerDocument;await m(()=>{s(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await h.click(e.getByRole("button",{name:"Close toast"})),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await h.click(e.getByRole("button",{name:"Reopen Toast"})),p.keyDown(a,{key:"Escape",ctrlKey:!0}),await s(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),e.getByRole("status",{name:"Close reason telemetry"}).focus(),await h.keyboard("{Shift>}{Escape}{/Shift}"),await m(()=>{s(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await m(()=>{s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function ya(){const[t,e]=r.useState(!0),[a,c]=r.useState("none");return n.jsxs(v,{align:"start",children:[n.jsxs("p",{style:H,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"toast-timeout-reason",style:le,children:a})]}),n.jsx(y,{variant:"outline",onClick:()=>{c("none"),e(!0)},children:"Reopen Timed Toast"}),n.jsx(l,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:c})]})}const X={render:()=>n.jsx(ya,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await s(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await m(()=>{s(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await s(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Kt(){const[t,e]=r.useState({first:!0,second:!0});return n.jsxs(v,{children:[n.jsx(y,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),n.jsx(l,{open:t.first,onOpenChange:a=>{e(c=>({...c,first:a}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),n.jsx(l,{open:t.second,onOpenChange:a=>{e(c=>({...c,second:a}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const Z={render:()=>n.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=await e.findByRole("status",{name:"First notice"}),c=await e.findByRole("status",{name:"Second notice"});await m(()=>{s(a).not.toHaveAttribute("aria-keyshortcuts"),s(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await h.click(f(c).getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await m(()=>{s(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function fa(){const[t,e]=r.useState({first:!0,second:!0}),[a,c]=r.useState(!0);return n.jsxs(v,{minHeight:280,align:"start",children:[n.jsx(y,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),n.jsx(y,{variant:"ghost",onClick:()=>c(i=>!i),children:a?"Pin top toast":"Unpin top toast"}),n.jsx(l,{open:t.first,onOpenChange:i=>{e(d=>({...d,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),n.jsx(l,{open:t.second,onOpenChange:i=>{e(d=>({...d,second:i}))},closeOnEscape:a,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const ee={render:()=>n.jsx(fa,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=t.ownerDocument,c=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await m(()=>{s(c).not.toHaveAttribute("aria-keyshortcuts"),s(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await h.click(e.getByRole("button",{name:"Pin top toast"})),await m(()=>{s(c).toHaveAttribute("aria-keyshortcuts","Escape"),s(i).not.toHaveAttribute("aria-keyshortcuts")}),await h.click(e.getByRole("button",{name:"Unpin top toast"})),await m(()=>{s(c).not.toHaveAttribute("aria-keyshortcuts"),s(i).toHaveAttribute("aria-keyshortcuts","Escape")}),p.keyDown(a,{key:"Escape",repeat:!0}),await s(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await s(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function va(){const[t,e]=r.useState({first:!0,second:!0});return n.jsxs(v,{minHeight:280,children:[n.jsx(y,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),n.jsx(l,{open:t.first,onOpenChange:a=>{e(c=>({...c,first:a}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),n.jsx(l,{open:t.second,onOpenChange:a=>{e(c=>({...c,second:a}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const te={render:()=>n.jsx(va,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=await e.findByRole("status",{name:"First stack item"}),c=await e.findByRole("status",{name:"Second stack item"});await s(a.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await s(c.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},ae={render:()=>n.jsxs(v,{minHeight:280,children:[n.jsx("p",{style:H,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),n.jsx(Kt,{})]})};function wa(){const[t,e]=r.useState(!0),[a,c]=r.useState(!0);return r.useEffect(()=>{if(!a)return;const i=d=>{d.key==="Escape"&&d.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[a]),n.jsxs(v,{align:"start",children:[n.jsx(y,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),n.jsx(y,{variant:"ghost",onClick:()=>c(i=>!i),children:a?"Disable global Escape handler":"Enable global Escape handler"}),n.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function ga(){const[t,e]=r.useState(!0),[a,c]=r.useState(!0);return n.jsxs(v,{align:"start",children:[n.jsx(y,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),n.jsx(y,{variant:"ghost",onClick:()=>c(i=>!i),children:a?"Disable toast Escape guard":"Enable toast Escape guard"}),n.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{a&&i.preventDefault()}})]})}function ha(){const[t,e]=r.useState(!0);return n.jsxs(v,{align:"start",children:[n.jsx(y,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),n.jsx(l,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:n.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function ba(){const[t,e]=r.useState(!0),[a,c]=r.useState(0);return r.useEffect(()=>{const i=d=>{d.key==="Escape"&&d.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),n.jsxs(v,{align:"start",children:[n.jsxs("p",{style:H,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"escape-hook-count",style:le,children:a})]}),n.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}function ka(){const[t,e]=r.useState(!0);return n.jsxs(v,{align:"start",children:[n.jsx(zt,{triggerLabel:"Open escape overlay",contentLabel:"Escape overlay",children:n.jsx("p",{style:{margin:0},children:"This overlay should consume the first Escape key press."})}),n.jsx(l,{open:t,onOpenChange:e,duration:0,title:"Overlay-aware toast",description:"Escape closes this toast only after the top overlay layer is gone.",tone:"info"})]})}const ne={render:()=>n.jsx(wa,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=t.ownerDocument;await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),p.keyDown(a,{key:"Escape"}),await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Disable global Escape handler"})),await s(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},oe={render:()=>n.jsx(ba,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=t.ownerDocument;await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),p.keyDown(a,{key:"Escape"}),await s(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},se={render:()=>n.jsx(ka,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=t.ownerDocument;await s(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Open escape overlay"})),await s(e.getByRole("dialog",{name:"Escape overlay"})).toBeInTheDocument(),p.keyDown(a,{key:"Escape"}),await m(()=>{s(e.queryByRole("dialog",{name:"Escape overlay"})).not.toBeInTheDocument()}),await s(e.getByRole("status",{name:"Overlay-aware toast"})).toBeInTheDocument(),p.keyDown(a,{key:"Escape"}),await m(()=>{s(e.queryByRole("status",{name:"Overlay-aware toast"})).not.toBeInTheDocument()})}},re={render:()=>n.jsx(ga,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=t.ownerDocument;await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),p.keyDown(a,{key:"Escape"}),await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await s(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},ce={render:()=>n.jsx(ha,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),a=t.ownerDocument;await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),p.keyDown(a,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ie={args:{title:n.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await s(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},ue={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await s(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Pe,Fe,qe;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:"{}",...(qe=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Le,Ke,Me;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(tt=(et=Q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;X.parameters={...X.parameters,docs:{...(at=X.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=X.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,ct;Z.parameters={...Z.parameters,docs:{...(st=Z.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
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
}`,...(mt=(pt=te.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ft,vt;ae.parameters={...ae.parameters,docs:{...(yt=ae.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <ToastShowcase minHeight={280}>
      <p style={toastTelemetryTextStyle}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </ToastShowcase>
}`,...(vt=(ft=ae.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};var wt,gt,ht;ne.parameters={...ne.parameters,docs:{...(wt=ne.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(ht=(gt=ne.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var bt,kt,Bt;oe.parameters={...oe.parameters,docs:{...(bt=oe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Bt=(kt=oe.parameters)==null?void 0:kt.docs)==null?void 0:Bt.source}}};var Et,xt,Tt;se.parameters={...se.parameters,docs:{...(Et=se.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(At=(Ht=ie.parameters)==null?void 0:Ht.docs)==null?void 0:At.source}}};var Pt,Ft,qt;ue.parameters={...ue.parameters,docs:{...(Pt=ue.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(qt=(Ft=ue.parameters)==null?void 0:Ft.docs)==null?void 0:qt.source}}};const Ia=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapePreemptedByOverlayLayer","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{$ as ActionRequired,J as ActionRequiredDanger,ie as AriaLabelOverride,z as CloseButtonKeyboardPressedState,_ as CloseButtonPrimaryPointerOnly,Q as CloseReasonTelemetry,N as Default,re as EscapeGuardedByToastHandler,ce as EscapeIgnoresImeComposition,ne as EscapePreemptedByGlobalHandler,se as EscapePreemptedByOverlayLayer,oe as EscapePreemptedSkipsToastHook,ee as EscapeShortcutSync,Z as EscapeStackOrder,ae as FocusedToastEscapesFirst,ue as LiveRegionOff,te as StackedViewportOffset,X as TimeoutCloseReason,W as ToneMatrix,Ia as __namedExportsOrder,Sa as default};
