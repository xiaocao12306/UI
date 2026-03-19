import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as p}from"./Button-BNFQVefv.js";import{within as y,expect as s,userEvent as m,waitFor as T,fireEvent as S}from"./index-DgAF9SIF.js";const kt={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},xt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},w=[],Et=14,se={"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]},oe=new Set;function re(){oe.forEach(t=>{t()})}function Bt(t){return oe.add(t),()=>{oe.delete(t)}}function be(t){const e=w.lastIndexOf(t);e>=0&&w.splice(e,1),w.push(t),re()}function Tt(t){const e=w.lastIndexOf(t);e>=0&&(w.splice(e,1),re())}function mt(t){const e=se[t],n=t.startsWith("bottom")?-1:1;e.forEach((r,i)=>{const l=e.length-1-i;r.style.setProperty("--aurora-toast-stack-offset",`${l*n*Et}px`)})}function we(t,e){const n=se[e],r=n.lastIndexOf(t);r>=0&&n.splice(r,1),n.push(t),mt(e)}function Rt(t,e){const n=se[e],r=n.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(r<0)&&(n.splice(r,1),mt(e))}function ke(t){for(let e=w.length-1;e>=0;e-=1){const n=w[e];if((n==null?void 0:n.dataset.closeOnEscape)==="true")return n===t}return!1}function Dt(t){return t.isComposing?!0:t.keyCode===229}function u({open:t,title:e,description:n,action:r,tone:i="info",live:l,duration:I,pauseOnHover:d=!0,closeOnEscape:f=!0,onEscapeKeyDown:j,closeLabel:ft="Close toast",ariaLabel:ce,position:k="bottom-right",onClose:H,onCloseReason:A,onOpenChange:O}){const x=o.useRef(null),Z=o.useRef(!0),ee=o.useRef(!1),h=o.useRef(null),R=o.useRef(0),D=o.Children.toArray(r).length>0,b=I??(D?0:4e3),E=o.useRef(b),[ie,C]=o.useState({hover:!1,focus:!1}),[te,ue]=o.useState(!1),[le,q]=o.useState(!1),[de,ae]=o.useState(!1),[gt,vt]=o.useState(!1),pe=d&&(ie.hover||ie.focus),me=o.useId(),ye=o.useId(),F=o.useCallback(()=>{const c=x.current;vt(!!(t&&f&&c&&ke(c)))},[f,t]);o.useEffect(()=>{F()},[F]),o.useEffect(()=>Bt(F),[F]),o.useEffect(()=>{const c=x.current;if(!(!t||!c))return be(c),we(c,k),()=>{Tt(c),Rt(c,k)}},[t,k]),o.useEffect(()=>{!t||!x.current||re()},[f,t]),o.useEffect(()=>{t||C({hover:!1,focus:!1}),ee.current=!1},[t]);const g=o.useCallback(()=>{h.current!==null&&(window.clearTimeout(h.current),h.current=null),R.current=0},[]),B=o.useCallback(c=>{ee.current||(ee.current=!0,g(),A==null||A(c),H==null||H(),O==null||O(!1))},[g,H,A,O]),ht=o.useCallback(()=>{B("close-button")},[B]),fe=o.useCallback(()=>{B("escape-key")},[B]),ne=o.useCallback(()=>{B("timeout")},[B]),ge=o.useCallback(()=>{const c=x.current;!t||!c||(be(c),we(c,k))},[t,k]),P=o.useCallback(c=>{if(c<=0){ne();return}g(),E.current=c,R.current=Date.now(),h.current=window.setTimeout(()=>{h.current=null,R.current=0,E.current=0,ne()},c)},[g,ne]),ve=o.useCallback(()=>{if(h.current===null||R.current===0)return;const c=Date.now()-R.current;E.current=Math.max(0,E.current-c),g()},[g]);if(o.useEffect(()=>{if(g(),E.current=b,!(!t||b<=0))return P(b),()=>{g()}},[g,t,b,P]),o.useEffect(()=>{if(!(!t||b<=0||!d)){if(pe){ve();return}h.current===null&&P(E.current)}},[t,ve,d,pe,b,P]),o.useEffect(()=>{if(!t||!f)return;const c=v=>{if(v.key!=="Escape"||v.repeat||Dt(v))return;const he=x.current;!he||!ke(he)||v.defaultPrevented||(j==null||j(v),!v.defaultPrevented&&(v.preventDefault(),fe()))};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[fe,f,j,t]),!t)return null;const bt=D?i==="danger"?"alertdialog":"dialog":i==="danger"?"alert":"status",wt=D?void 0:l??(i==="danger"?"assertive":"polite");return a.jsxs("div",{ref:x,role:bt,"data-close-on-escape":f?"true":"false","aria-modal":D?"false":void 0,"aria-live":wt,"aria-atomic":"true","aria-keyshortcuts":gt?"Escape":void 0,"aria-label":ce,"aria-labelledby":ce?void 0:me,"aria-describedby":n?ye:void 0,onMouseEnter:()=>{ge(),d&&C(c=>({...c,hover:!0}))},onMouseLeave:()=>{d&&C(c=>({...c,hover:!1}))},onFocusCapture:()=>{ge(),d&&C(c=>({...c,focus:!0}))},onBlurCapture:c=>{d&&!c.currentTarget.contains(c.relatedTarget)&&C(v=>({...v,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...kt[i],...xt[k]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:me,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:ht,"aria-label":ft,onMouseEnter:()=>{ue(!0)},onMouseLeave:()=>{ue(!1),q(!1)},onMouseDown:()=>{Z.current=!1,ae(!1),q(!0)},onMouseUp:()=>{q(!1)},onKeyDown:()=>{Z.current=!0},onFocus:c=>{ae(Ct(c.currentTarget,Z.current))},onBlur:()=>{ae(!1),q(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:te||de?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:le?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":te?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:te?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:de?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:le?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:ye,style:{color:"var(--aurora-text-secondary)"},children:n}):null,D?a.jsx("div",{children:r}):null]})}function Ct(t,e){try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Kt={title:"Feedback/Toast",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},L={};function St(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(u,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(u,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const M={render:()=>a.jsx(St,{})};function It(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const V={render:()=>a.jsx(It,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await s(n).toBeInTheDocument(),await s(n).not.toHaveAttribute("aria-keyshortcuts"),await m.click(e.getByRole("button",{name:"Close blocking notice"})),await s(e.queryByRole("dialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("dialog")).toBeInTheDocument()}};function jt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const G={render:()=>a.jsx(jt,{}),play:async({canvasElement:t})=>{const e=y(t);await s(e.getByRole("alertdialog")).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close incident notice"})),await s(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("alertdialog")).toBeInTheDocument()}};function Ht(){const[t,e]=o.useState(!0),[n,r]=o.useState("none"),[i,l]=o.useState("N/A"),I=o.useCallback(d=>{l(f=>f==="N/A"?d:`${f} -> ${d}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:i})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout reason is documented but not asserted in play due timing instability."}),a.jsx(p,{variant:"outline",onClick:()=>{l("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:d=>{e(d),d||I("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:d=>{r(d),I(`reason:${d}`)}})]})}const N={render:()=>a.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await T(()=>{s(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await m.click(e.getByRole("button",{name:"Reopen Toast"})),await m.keyboard("{Escape}"),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function yt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const K={render:()=>a.jsx(yt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),r=await e.findByRole("status",{name:"Second notice"});await T(()=>{s(n).not.toHaveAttribute("aria-keyshortcuts"),s(r).toHaveAttribute("aria-keyshortcuts","Escape")}),await m.click(y(r).getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await T(()=>{s(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function At(){const[t,e]=o.useState({first:!0,second:!0}),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(u,{open:t.first,onOpenChange:i=>{e(l=>({...l,first:i}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t.second,onOpenChange:i=>{e(l=>({...l,second:i}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const _={render:()=>a.jsx(At,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),i=await e.findByRole("status",{name:"Top notice"});await T(()=>{s(r).not.toHaveAttribute("aria-keyshortcuts"),s(i).toHaveAttribute("aria-keyshortcuts","Escape")}),await m.click(e.getByRole("button",{name:"Pin top toast"})),await T(()=>{s(r).toHaveAttribute("aria-keyshortcuts","Escape"),s(i).not.toHaveAttribute("aria-keyshortcuts")}),await m.click(e.getByRole("button",{name:"Unpin top toast"})),await T(()=>{s(r).not.toHaveAttribute("aria-keyshortcuts"),s(i).toHaveAttribute("aria-keyshortcuts","Escape")}),S.keyDown(n,{key:"Escape",repeat:!0}),await s(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await s(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Ot(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const W={render:()=>a.jsx(Ot,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await s(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await s(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},z={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(yt,{})]})};function qt(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const i=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Ft(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(i=>!i),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:i=>{n&&i.preventDefault()}})]})}function Pt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Lt(){const[t,e]=o.useState(!0),[n,r]=o.useState(0);return o.useEffect(()=>{const i=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(i=>i+1)})]})}const U={render:()=>a.jsx(qt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable global Escape handler"})),await s(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},Y={render:()=>a.jsx(Lt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape"}),await s(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},$={render:()=>a.jsx(Ft,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await s(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},J={render:()=>a.jsx(Pt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},Q={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},X={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var xe,Ee,Be;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:"{}",...(Be=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Te,Re,De;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(De=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ce,Se,Ie;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var je,He,Ae;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ae=(He=G.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var Oe,qe,Fe;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
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
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("toast-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
  }
}`,...(Fe=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Pe,Le,Me;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(Le=K.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ve,Ge,Ne;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ke,_e,We;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(We=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var ze,Ue,Ye;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: 280,
    padding: 16,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </div>
}`,...(Ye=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var $e,Je,Qe;U.parameters={...U.parameters,docs:{...($e=U.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=U.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=Y.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;$.parameters={...$.parameters,docs:{...(tt=$.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=$.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,st,rt;J.parameters={...J.parameters,docs:{...(ot=J.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(st=J.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ct,it,ut;Q.parameters={...Q.parameters,docs:{...(ct=Q.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(it=Q.parameters)==null?void 0:it.docs)==null?void 0:ut.source}}};var lt,dt,pt;X.parameters={...X.parameters,docs:{...(lt=X.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(pt=(dt=X.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};const _t=["Default","ToneMatrix","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{V as ActionRequired,G as ActionRequiredDanger,Q as AriaLabelOverride,N as CloseReasonTelemetry,L as Default,$ as EscapeGuardedByToastHandler,J as EscapeIgnoresImeComposition,U as EscapePreemptedByGlobalHandler,Y as EscapePreemptedSkipsToastHook,_ as EscapeShortcutSync,K as EscapeStackOrder,z as FocusedToastEscapesFirst,X as LiveRegionOff,W as StackedViewportOffset,M as ToneMatrix,_t as __namedExportsOrder,Kt as default};
