import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as p}from"./Button-Cn1nutIP.js";import{within as m,expect as r,userEvent as h,fireEvent as v,waitFor as w}from"./index-DgAF9SIF.js";import{s as Gt,a as Nt,b as Ut}from"./storyShowcase-Bw5VyCj0.js";const Wt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},_t={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},zt=14,Se=new WeakMap;function $t(){return{"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]}}function R(t){const e=Se.get(t);if(e)return e;const n={escapeStack:[],visualStacks:$t(),listeners:new Set};return Se.set(t,n),n}function ge(t){R(t).listeners.forEach(n=>{n()})}function Jt(t,e){const n=R(t);return n.listeners.add(e),()=>{n.listeners.delete(e)}}function Ie(t,e){const n=R(t),c=n.escapeStack.lastIndexOf(e);c>=0&&n.escapeStack.splice(c,1),n.escapeStack.push(e),ge(t)}function Qt(t,e){const n=R(t),c=n.escapeStack.lastIndexOf(e);c>=0&&(n.escapeStack.splice(c,1),ge(t))}function At(t,e){const n=t.visualStacks[e],c=e.startsWith("bottom")?-1:1;n.forEach((i,l)=>{const C=n.length-1-l;i.style.setProperty("--aurora-toast-stack-offset",`${C*c*zt}px`)})}function je(t,e,n){const c=R(t),i=c.visualStacks[n],l=i.lastIndexOf(e);l>=0&&i.splice(l,1),i.push(e),At(c,n)}function Xt(t,e,n){const c=R(t),i=c.visualStacks[n],l=i.lastIndexOf(e);e.style.removeProperty("--aurora-toast-stack-offset"),!(l<0)&&(i.splice(l,1),At(c,n))}function He(t,e){const n=R(t);for(let c=n.escapeStack.length-1;c>=0;c-=1){const i=n.escapeStack[c];if((i==null?void 0:i.dataset.closeOnEscape)==="true")return i===e}return!1}function Zt(t){return t.isComposing?!0:t.keyCode===229}function d({open:t,title:e,description:n,action:c,tone:i="info",live:l,duration:C,pauseOnHover:y=!0,closeOnEscape:B=!0,onEscapeKeyDown:L,closeLabel:le="Close toast",ariaLabel:de,position:S="bottom-right",onClose:K,onCloseReason:M,onOpenChange:V}){const k=s.useRef(null);s.useRef(!1);const A=s.useRef(!0),pe=s.useRef(!1),E=s.useRef(null),Y=s.useRef(null),F=s.useRef(0),P=s.Children.toArray(c).length>0,T=C??(P?0:4e3),I=s.useRef(T),[Pt,we]=s.useState(!1),[he,q]=s.useState({hover:!1,focus:!1}),[me,be]=s.useState(!1),[ke,j]=s.useState(!1),[Be,ye]=s.useState(!1),[qt,Lt]=s.useState(!1),xe=Pt||y&&(he.hover||he.focus),Ee=s.useId(),Te=s.useId(),fe=typeof de=="string"&&de.trim().length>0?de.trim():void 0,Kt=typeof le=="string"&&le.trim().length>0?le.trim():"Close toast",G=s.useCallback(()=>{const o=k.current;Lt(!!(t&&B&&o&&He(o.ownerDocument,o)))},[B,t]);s.useEffect(()=>{G()},[G]),s.useEffect(()=>{var u;const o=(u=k.current)==null?void 0:u.ownerDocument;if(o)return Jt(o,G)},[G]),s.useEffect(()=>{const o=k.current;if(!t||!o)return;const u=o.ownerDocument;return Ie(u,o),je(u,o,S),()=>{Qt(u,o),Xt(u,o,S)}},[t,S]),s.useEffect(()=>{!t||!k.current||ge(k.current.ownerDocument)},[B,t]),s.useEffect(()=>{t||(q({hover:!1,focus:!1}),we(!1)),pe.current=!1},[t]),s.useEffect(()=>{var f;if(!t)return;const o=((f=k.current)==null?void 0:f.ownerDocument)??document,u=()=>{we(o.visibilityState==="hidden")};return u(),o.addEventListener("visibilitychange",u),()=>{o.removeEventListener("visibilitychange",u)}},[t]),s.useEffect(()=>{var b;if(!t)return;const o=((b=k.current)==null?void 0:b.ownerDocument)??document,u=D=>{D.metaKey||D.altKey||D.ctrlKey||(A.current=!0)},f=()=>{A.current=!1};return o.addEventListener("keydown",u,!0),o.addEventListener("pointerdown",f,!0),o.addEventListener("mousedown",f,!0),o.addEventListener("touchstart",f,!0),()=>{o.removeEventListener("keydown",u,!0),o.removeEventListener("pointerdown",f,!0),o.removeEventListener("mousedown",f,!0),o.removeEventListener("touchstart",f,!0)}},[t]);const x=s.useCallback(()=>{E.current!==null&&((Y.current??window).clearTimeout(E.current),E.current=null),Y.current=null,F.current=0},[]),H=s.useCallback(o=>{pe.current||(pe.current=!0,x(),M==null||M(o),K==null||K(),V==null||V(!1))},[x,K,M,V]),Mt=s.useCallback(()=>{H("close-button")},[H]),De=s.useCallback(()=>{H("escape-key")},[H]),ve=s.useCallback(()=>{H("timeout")},[H]),Re=s.useCallback(()=>{const o=k.current;if(!t||!o)return;const u=o.ownerDocument;Ie(u,o),je(u,o,S)},[t,S]),N=s.useCallback(o=>{var f;if(o<=0){ve();return}x(),I.current=o,F.current=Date.now();const u=((f=k.current)==null?void 0:f.ownerDocument.defaultView)??window;Y.current=u,E.current=u.setTimeout(()=>{E.current=null,Y.current=null,F.current=0,I.current=0,ve()},o)},[x,ve]),Ce=s.useCallback(()=>{if(E.current===null||F.current===0)return;const o=Date.now()-F.current;I.current=Math.max(0,I.current-o),x()},[x]);if(s.useEffect(()=>{if(x(),I.current=T,!(!t||T<=0))return N(T),()=>{x()}},[x,t,T,N]),s.useEffect(()=>{if(!(!t||T<=0)){if(xe){Ce();return}E.current===null&&N(I.current)}},[t,Ce,y,xe,T,N]),s.useEffect(()=>{var f;if(!t||!B)return;const o=b=>{if(b.key!=="Escape"||b.altKey||b.ctrlKey||b.metaKey||b.repeat||Zt(b))return;const D=k.current;!D||!He(D.ownerDocument,D)||b.defaultPrevented||(L==null||L(b),!b.defaultPrevented&&(b.preventDefault(),De()))},u=((f=k.current)==null?void 0:f.ownerDocument)??document;return u.addEventListener("keydown",o),()=>{u.removeEventListener("keydown",o)}},[De,B,L,t]),s.useEffect(()=>{},[fe,e]),!t)return null;const Vt=P?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",Yt=P?void 0:l??(i==="danger"?"assertive":"polite");return a.jsxs("div",{"data-aurora-reduced-motion":"transition",ref:k,role:Vt,"data-close-on-escape":B?"true":"false","aria-modal":P?"false":void 0,"aria-live":Yt,"aria-atomic":"true","aria-keyshortcuts":qt?"Escape":void 0,"aria-label":fe,"aria-labelledby":fe?void 0:Ee,"aria-describedby":n?Te:void 0,onMouseEnter:()=>{Re(),y&&q(o=>({...o,hover:!0}))},onMouseLeave:()=>{y&&q(o=>({...o,hover:!1}))},onFocusCapture:()=>{Re(),y&&q(o=>({...o,focus:!0}))},onBlurCapture:o=>{y&&!o.currentTarget.contains(o.relatedTarget)&&q(u=>({...u,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Wt[i],..._t[S]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:Ee,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:Mt,"aria-label":Kt,onMouseEnter:()=>{be(!0)},onMouseLeave:()=>{be(!1),j(!1)},onMouseDown:o=>{o.button===0&&(A.current=!1,ye(!1),j(!0))},onMouseUp:o=>{o.button===0&&j(!1)},onKeyDown:o=>{A.current=!0,Oe(o.key)&&!tn(o)&&j(!0)},onKeyUp:o=>{Oe(o.key)&&j(!1)},onFocus:o=>{ye(en(o.currentTarget,A.current))},onBlur:()=>{ye(!1),j(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:me||Be?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ke?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":me?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:me?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Be?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:ke?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:Te,style:{color:"var(--aurora-text-secondary)"},children:n}):null,P?a.jsx("div",{children:c}):null]})}function en(t,e){try{return t.matches(":focus-visible")}catch{return e}}function Oe(t){return t==="Enter"||t===" "||t==="Spacebar"}function tn(t){return t.ctrlKey||t.metaKey||t.altKey}d.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const O={...Gt},ue={...Nt};function g({children:t,minHeight:e=260,align:n="stretch"}){return a.jsx(Ut,{minHeight:e,align:n,gap:8,children:t})}const kn={title:"Feedback/Toast",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},U={};function nn(){const[t,e]=s.useState(!0);return a.jsxs(g,{minHeight:460,children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(d,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(d,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(d,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const W={render:()=>a.jsx(nn,{})};function an(){const[t,e]=s.useState(!0);return a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",tone:"info"})]})}const _={render:()=>a.jsx(an,{}),play:async({canvasElement:t})=>{const n=m(t.ownerDocument.body).getByRole("button",{name:"Close toast"});v.mouseDown(n,{button:2}),await r(n.style.transform).toContain("translateY(0"),v.mouseDown(n),v.mouseUp(n),await r(n.style.transform).toContain("translateY(0")}};function on(){return a.jsx(g,{align:"start",children:a.jsx(d,{open:!0,onOpenChange:()=>{},duration:0,title:"Keyboard pressed close affordance",description:"Close button should expose pressed-state feedback for unmodified Enter/Space only.",tone:"info"})})}const z={render:()=>a.jsx(on,{}),play:async({canvasElement:t})=>{const n=m(t.ownerDocument.body).getByRole("button",{name:"Close toast"});n.focus(),v.keyDown(n,{key:"Enter",ctrlKey:!0}),await w(()=>{r(n.style.transform).toContain("translateY(0")}),v.keyUp(n,{key:"Enter",ctrlKey:!0}),v.keyDown(n,{key:"Enter"}),await w(()=>{r(n.style.transform).toContain("translateY(1px)")}),v.keyUp(n,{key:"Enter"}),await w(()=>{r(n.style.transform).toContain("translateY(0")}),v.keyDown(n,{key:"Spacebar"}),await w(()=>{r(n.style.transform).toContain("translateY(1px)")}),v.keyUp(n,{key:"Spacebar"}),await w(()=>{r(n.style.transform).toContain("translateY(0")})}};function sn(){const[t,e]=s.useState(!0);return a.jsxs(g,{children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const $={render:()=>a.jsx(sn,{}),play:async({canvasElement:t})=>{const e=m(t),n=e.getByRole("dialog");await r(n).toBeInTheDocument(),await r(n).not.toHaveAttribute("aria-keyshortcuts"),await h.click(e.getByRole("button",{name:"Close blocking notice"})),await r(e.queryByRole("dialog")).not.toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("dialog")).toBeInTheDocument()}};function rn(){const[t,e]=s.useState(!0);return a.jsxs(g,{children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const J={render:()=>a.jsx(rn,{}),play:async({canvasElement:t})=>{const e=m(t);await r(e.getByRole("alertdialog")).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Close incident notice"})),await r(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Reopen"})),await r(e.getByRole("alertdialog")).toBeInTheDocument()}};function cn(){const[t,e]=s.useState(!0),[n,c]=s.useState("none"),[i,l]=s.useState("N/A"),C=s.useCallback(y=>{l(B=>B==="N/A"?y:`${B} -> ${y}`)},[]);return a.jsxs(g,{align:"start",children:[a.jsxs("p",{style:O,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:ue,children:n})]}),a.jsxs("p",{style:O,children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:ue,children:i})]}),a.jsx("p",{style:O,children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(p,{variant:"outline",onClick:()=>{l("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:y=>{e(y),y||C("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:y=>{c(y),C(`reason:${y}`)}})]})}const Q={render:()=>a.jsx(cn,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await w(()=>{r(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await h.click(e.getByRole("button",{name:"Close toast"})),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await r(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await h.click(e.getByRole("button",{name:"Reopen Toast"})),v.keyDown(n,{key:"Escape",ctrlKey:!0}),await r(e.getByRole("status",{name:"Close reason telemetry"})).toBeInTheDocument(),await r(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),e.getByRole("status",{name:"Close reason telemetry"}).focus(),await h.keyboard("{Shift>}{Escape}{/Shift}"),await w(()=>{r(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key")}),await w(()=>{r(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")})}};function un(){const[t,e]=s.useState(!0),[n,c]=s.useState("none");return a.jsxs(g,{align:"start",children:[a.jsxs("p",{style:O,children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:ue,children:n})]}),a.jsx(p,{variant:"outline",onClick:()=>{c("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:c})]})}const X={render:()=>a.jsx(un,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await w(()=>{r(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await r(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function Ft(){const[t,e]=s.useState({first:!0,second:!0});return a.jsxs(g,{children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const Z={render:()=>a.jsx(Ft,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),c=await e.findByRole("status",{name:"Second notice"});await w(()=>{r(n).not.toHaveAttribute("aria-keyshortcuts"),r(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await h.click(m(c).getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await w(()=>{r(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function ln(){const[t,e]=s.useState({first:!0,second:!0}),[n,c]=s.useState(!0);return a.jsxs(g,{minHeight:280,align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(d,{open:t.first,onOpenChange:i=>{e(l=>({...l,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(d,{open:t.second,onOpenChange:i=>{e(l=>({...l,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const ee={render:()=>a.jsx(ln,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument,c=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await w(()=>{r(c).not.toHaveAttribute("aria-keyshortcuts"),r(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await h.click(e.getByRole("button",{name:"Pin top toast"})),await w(()=>{r(c).toHaveAttribute("aria-keyshortcuts","Escape"),r(i).not.toHaveAttribute("aria-keyshortcuts")}),await h.click(e.getByRole("button",{name:"Unpin top toast"})),await w(()=>{r(c).not.toHaveAttribute("aria-keyshortcuts"),r(i).toHaveAttribute("aria-keyshortcuts","Escape")}),v.keyDown(n,{key:"Escape",repeat:!0}),await r(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await r(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function dn(){const[t,e]=s.useState({first:!0,second:!0});return a.jsxs(g,{minHeight:280,children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(d,{open:t.first,onOpenChange:n=>{e(c=>({...c,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(d,{open:t.second,onOpenChange:n=>{e(c=>({...c,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const te={render:()=>a.jsx(dn,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),c=await e.findByRole("status",{name:"Second stack item"});await r(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await r(c.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},ne={render:()=>a.jsxs(g,{minHeight:280,children:[a.jsx("p",{style:O,children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(Ft,{})]})};function pn(){const[t,e]=s.useState(!0),[n,c]=s.useState(!0);return s.useEffect(()=>{if(!n)return;const i=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function mn(){const[t,e]=s.useState(!0),[n,c]=s.useState(!0);return a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>c(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function yn(){const[t,e]=s.useState(!0);return a.jsxs(g,{align:"start",children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function fn(){const[t,e]=s.useState(!0),[n,c]=s.useState(0);return s.useEffect(()=>{const i=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs(g,{align:"start",children:[a.jsxs("p",{style:O,children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:ue,children:n})]}),a.jsx(d,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>c(i=>i+1)})]})}const ae={render:()=>a.jsx(pn,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),v.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Disable global Escape handler"})),await r(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},oe={render:()=>a.jsx(fn,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),v.keyDown(n,{key:"Escape"}),await r(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await r(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},se={render:()=>a.jsx(mn,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),v.keyDown(n,{key:"Escape"}),await r(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await r(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},re={render:()=>a.jsx(yn,{}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),n=t.ownerDocument;await r(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),v.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await h.click(e.getByRole("button",{name:"Close toast"})),await r(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},ce={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},ie={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body);await r(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Ae,Fe,Pe;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:"{}",...(Pe=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var qe,Le,Ke;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ke=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ke.source}}};var Me,Ve,Ye;_.parameters={..._.parameters,docs:{...(Me=_.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ye=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var Ge,Ne,Ue;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <CloseButtonKeyboardPressedStateDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeButton = canvas.getByRole("button", {
      name: "Close toast"
    });
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
  }
}`,...(Ue=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var We,_e,ze;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(ze=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var $e,Je,Qe;J.parameters={...J.parameters,docs:{...($e=J.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;X.parameters={...X.parameters,docs:{...(tt=X.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=X.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,st,rt;Z.parameters={...Z.parameters,docs:{...(ot=Z.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=Z.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ct,it,ut;ee.parameters={...ee.parameters,docs:{...(ct=ee.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(it=ee.parameters)==null?void 0:it.docs)==null?void 0:ut.source}}};var lt,dt,pt;te.parameters={...te.parameters,docs:{...(lt=te.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=te.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,yt,ft;ne.parameters={...ne.parameters,docs:{...(mt=ne.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: () => <ToastShowcase minHeight={280}>
      <p style={toastTelemetryTextStyle}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </ToastShowcase>
}`,...(ft=(yt=ne.parameters)==null?void 0:yt.docs)==null?void 0:ft.source}}};var vt,gt,wt;ae.parameters={...ae.parameters,docs:{...(vt=ae.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(wt=(gt=ae.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var ht,bt,kt;oe.parameters={...oe.parameters,docs:{...(ht=oe.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(bt=oe.parameters)==null?void 0:bt.docs)==null?void 0:kt.source}}};var Bt,xt,Et;se.parameters={...se.parameters,docs:{...(Bt=se.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Et=(xt=se.parameters)==null?void 0:xt.docs)==null?void 0:Et.source}}};var Tt,Dt,Rt;re.parameters={...re.parameters,docs:{...(Tt=re.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Rt=(Dt=re.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var Ct,St,It;ce.parameters={...ce.parameters,docs:{...(Ct=ce.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(It=(St=ce.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var jt,Ht,Ot;ie.parameters={...ie.parameters,docs:{...(jt=ie.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ot=(Ht=ie.parameters)==null?void 0:Ht.docs)==null?void 0:Ot.source}}};const Bn=["Default","ToneMatrix","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{$ as ActionRequired,J as ActionRequiredDanger,ce as AriaLabelOverride,z as CloseButtonKeyboardPressedState,_ as CloseButtonPrimaryPointerOnly,Q as CloseReasonTelemetry,U as Default,se as EscapeGuardedByToastHandler,re as EscapeIgnoresImeComposition,ae as EscapePreemptedByGlobalHandler,oe as EscapePreemptedSkipsToastHook,ee as EscapeShortcutSync,Z as EscapeStackOrder,ne as FocusedToastEscapesFirst,ie as LiveRegionOff,te as StackedViewportOffset,X as TimeoutCloseReason,W as ToneMatrix,Bn as __namedExportsOrder,kn as default};
