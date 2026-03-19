import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as p}from"./Button-BNFQVefv.js";import{within as y,expect as s,userEvent as m,waitFor as b,fireEvent as S}from"./index-DgAF9SIF.js";const Et={info:{borderColor:"var(--aurora-feedback-info-border)",background:"color-mix(in srgb, var(--aurora-feedback-info-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},success:{borderColor:"var(--aurora-feedback-success-border)",background:"color-mix(in srgb, var(--aurora-feedback-success-bg) 58%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"var(--aurora-feedback-warning-border)",background:"color-mix(in srgb, var(--aurora-feedback-warning-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"var(--aurora-feedback-danger-border)",background:"color-mix(in srgb, var(--aurora-feedback-danger-bg) 62%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},Rt={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},x=[],Dt=14,re={"bottom-right":[],"bottom-left":[],"top-right":[],"top-left":[]},se=new Set;function ie(){se.forEach(t=>{t()})}function Ct(t){return se.add(t),()=>{se.delete(t)}}function be(t){const e=x.lastIndexOf(t);e>=0&&x.splice(e,1),x.push(t),ie()}function St(t){const e=x.lastIndexOf(t);e>=0&&(x.splice(e,1),ie())}function gt(t){const e=re[t],n=t.startsWith("bottom")?-1:1;e.forEach((r,c)=>{const l=e.length-1-c;r.style.setProperty("--aurora-toast-stack-offset",`${l*n*Dt}px`)})}function xe(t,e){const n=re[e],r=n.lastIndexOf(t);r>=0&&n.splice(r,1),n.push(t),gt(e)}function It(t,e){const n=re[e],r=n.lastIndexOf(t);t.style.removeProperty("--aurora-toast-stack-offset"),!(r<0)&&(n.splice(r,1),gt(e))}function ke(t){for(let e=x.length-1;e>=0;e-=1){const n=x[e];if((n==null?void 0:n.dataset.closeOnEscape)==="true")return n===t}return!1}function jt(t){return t.isComposing?!0:t.keyCode===229}function u({open:t,title:e,description:n,action:r,tone:c="info",live:l,duration:I,pauseOnHover:d=!0,closeOnEscape:f=!0,onEscapeKeyDown:j,closeLabel:wt="Close toast",ariaLabel:ce,position:k="bottom-right",onClose:H,onCloseReason:A,onOpenChange:O}){const T=o.useRef(null),ee=o.useRef(!0),te=o.useRef(!1),h=o.useRef(null),R=o.useRef(0),D=o.Children.toArray(r).length>0,w=I??(D?0:4e3),B=o.useRef(w),[ue,C]=o.useState({hover:!1,focus:!1}),[ae,le]=o.useState(!1),[de,q]=o.useState(!1),[pe,ne]=o.useState(!1),[bt,xt]=o.useState(!1),me=d&&(ue.hover||ue.focus),ye=o.useId(),fe=o.useId(),F=o.useCallback(()=>{const i=T.current;xt(!!(t&&f&&i&&ke(i)))},[f,t]);o.useEffect(()=>{F()},[F]),o.useEffect(()=>Ct(F),[F]),o.useEffect(()=>{const i=T.current;if(!(!t||!i))return be(i),xe(i,k),()=>{St(i),It(i,k)}},[t,k]),o.useEffect(()=>{!t||!T.current||ie()},[f,t]),o.useEffect(()=>{t||C({hover:!1,focus:!1}),te.current=!1},[t]);const v=o.useCallback(()=>{h.current!==null&&(window.clearTimeout(h.current),h.current=null),R.current=0},[]),E=o.useCallback(i=>{te.current||(te.current=!0,v(),A==null||A(i),H==null||H(),O==null||O(!1))},[v,H,A,O]),kt=o.useCallback(()=>{E("close-button")},[E]),ve=o.useCallback(()=>{E("escape-key")},[E]),oe=o.useCallback(()=>{E("timeout")},[E]),ge=o.useCallback(()=>{const i=T.current;!t||!i||(be(i),xe(i,k))},[t,k]),P=o.useCallback(i=>{if(i<=0){oe();return}v(),B.current=i,R.current=Date.now(),h.current=window.setTimeout(()=>{h.current=null,R.current=0,B.current=0,oe()},i)},[v,oe]),he=o.useCallback(()=>{if(h.current===null||R.current===0)return;const i=Date.now()-R.current;B.current=Math.max(0,B.current-i),v()},[v]);if(o.useEffect(()=>{if(v(),B.current=w,!(!t||w<=0))return P(w),()=>{v()}},[v,t,w,P]),o.useEffect(()=>{if(!(!t||w<=0||!d)){if(me){he();return}h.current===null&&P(B.current)}},[t,he,d,me,w,P]),o.useEffect(()=>{if(!t||!f)return;const i=g=>{if(g.key!=="Escape"||g.repeat||jt(g))return;const we=T.current;!we||!ke(we)||g.defaultPrevented||(j==null||j(g),!g.defaultPrevented&&(g.preventDefault(),ve()))};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[ve,f,j,t]),!t)return null;const Tt=D?c==="danger"?"alertdialog":"dialog":c==="danger"?"alert":"status",Bt=D?void 0:l??(c==="danger"?"assertive":"polite");return a.jsxs("div",{ref:T,role:Tt,"data-close-on-escape":f?"true":"false","aria-modal":D?"false":void 0,"aria-live":Bt,"aria-atomic":"true","aria-keyshortcuts":bt?"Escape":void 0,"aria-label":ce,"aria-labelledby":ce?void 0:ye,"aria-describedby":n?fe:void 0,onMouseEnter:()=>{ge(),d&&C(i=>({...i,hover:!0}))},onMouseLeave:()=>{d&&C(i=>({...i,hover:!1}))},onFocusCapture:()=>{ge(),d&&C(i=>({...i,focus:!0}))},onBlurCapture:i=>{d&&!i.currentTarget.contains(i.relatedTarget)&&C(g=>({...g,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,transform:"translateY(var(--aurora-toast-stack-offset, 0px))",transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)",...Et[c],...Rt[k]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:ye,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:kt,"aria-label":wt,onMouseEnter:()=>{le(!0)},onMouseLeave:()=>{le(!1),q(!1)},onMouseDown:()=>{ee.current=!1,ne(!1),q(!0)},onMouseUp:()=>{q(!1)},onKeyDown:()=>{ee.current=!0},onFocus:i=>{ne(Ht(i.currentTarget,ee.current))},onBlur:()=>{ne(!1),q(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ae||pe?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:de?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ae?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",cursor:"pointer",color:ae?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:pe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:28,height:28,transform:de?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"})]}),n?a.jsx("div",{id:fe,style:{color:"var(--aurora-text-secondary)"},children:n}):null,D?a.jsx("div",{children:r}):null]})}function Ht(t,e){try{return t.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},live:{required:!1,tsType:{name:"union",raw:'"polite" | "assertive" | "off"',elements:[{name:"literal",value:'"polite"'},{name:"literal",value:'"assertive"'},{name:"literal",value:'"off"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: ToastCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "timeout"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"timeout"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Yt={title:"Feedback/Toast",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},L={};function At(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(u,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",duration:0,position:"top-right"}),a.jsx(u,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",duration:0,position:"bottom-left"}),a.jsx(u,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",duration:0,position:"bottom-right"})]})}const M={render:()=>a.jsx(At,{})};function Ot(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const V={render:()=>a.jsx(Ot,{}),play:async({canvasElement:t})=>{const e=y(t),n=e.getByRole("dialog");await s(n).toBeInTheDocument(),await s(n).not.toHaveAttribute("aria-keyshortcuts"),await m.click(e.getByRole("button",{name:"Close blocking notice"})),await s(e.queryByRole("dialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("dialog")).toBeInTheDocument()}};function qt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,closeOnEscape:!1,closeLabel:"Close incident notice",title:"Production incident requires approval",description:"Incident severity is high. Confirm rollback owner before continuing.",tone:"danger",action:a.jsx(p,{size:"sm",onClick:()=>e(!1),children:"Confirm owner"})})]})}const G={render:()=>a.jsx(qt,{}),play:async({canvasElement:t})=>{const e=y(t);await s(e.getByRole("alertdialog")).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close incident notice"})),await s(e.queryByRole("alertdialog")).not.toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Reopen"})),await s(e.getByRole("alertdialog")).toBeInTheDocument()}};function Ft(){const[t,e]=o.useState(!0),[n,r]=o.useState("none"),[c,l]=o.useState("N/A"),I=o.useCallback(d=>{l(f=>f==="N/A"?d:`${f} -> ${d}`)},[]);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",a.jsx("strong",{"data-testid":"toast-close-trace",style:{color:"var(--aurora-text-primary)"},children:c})]}),a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Timeout branch is validated in a dedicated story: `TimeoutCloseReason`."}),a.jsx(p,{variant:"outline",onClick:()=>{l("N/A"),e(!0)},children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:d=>{e(d),d||I("open:false")},duration:0,title:"Close reason telemetry",description:"Track whether this toast closed from click, Escape, or timeout.",onCloseReason:d=>{r(d),I(`reason:${d}`)}})]})}const N={render:()=>a.jsx(Ft,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await b(()=>{s(e.getByRole("status",{name:"Close reason telemetry"})).toHaveAttribute("aria-keyshortcuts","Escape")}),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("none"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("N/A"),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("close-button"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await m.click(e.getByRole("button",{name:"Reopen Toast"})),await m.keyboard("{Escape}"),await s(e.getByTestId("toast-close-reason")).toHaveTextContent("escape-key"),await s(e.getByTestId("toast-close-trace")).toHaveTextContent("reason:escape-key -> open:false")}};function Pt(){const[t,e]=o.useState(!0),[n,r]=o.useState("none");return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"toast-timeout-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(p,{variant:"outline",onClick:()=>{r("none"),e(!0)},children:"Reopen Timed Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:300,title:"Timeout close telemetry",description:"This toast should close via timeout and emit timeout reason.",onCloseReason:r})]})}const K={render:()=>a.jsx(Pt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(await e.findByRole("status",{name:"Timeout close telemetry"})).toBeInTheDocument(),await b(()=>{s(e.queryByRole("status",{name:"Timeout close telemetry"})).not.toBeInTheDocument()}),await s(e.getByTestId("toast-timeout-reason")).toHaveTextContent("timeout")}};function ht(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const _={render:()=>a.jsx(ht,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First notice"}),r=await e.findByRole("status",{name:"Second notice"});await b(()=>{s(n).not.toHaveAttribute("aria-keyshortcuts"),s(r).toHaveAttribute("aria-keyshortcuts","Escape")}),await m.click(y(r).getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Second notice"})).not.toBeInTheDocument(),await b(()=>{s(e.getByRole("status",{name:"First notice"})).toHaveAttribute("aria-keyshortcuts","Escape")})}};function Lt(){const[t,e]=o.useState({first:!0,second:!0}),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(p,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Pin top toast":"Unpin top toast"}),a.jsx(u,{open:t.first,onOpenChange:c=>{e(l=>({...l,first:c}))},title:"Base notice",description:"Shortcut hint should move here when top toast is pinned.",tone:"info",duration:0,position:"top-left"}),a.jsx(u,{open:t.second,onOpenChange:c=>{e(l=>({...l,second:c}))},closeOnEscape:n,title:"Top notice",description:"Shortcut hint should follow this toast when Escape is enabled.",tone:"success",duration:0,position:"top-left"})]})}const W={render:()=>a.jsx(Lt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument,r=await e.findByRole("status",{name:"Base notice"}),c=await e.findByRole("status",{name:"Top notice"});await b(()=>{s(r).not.toHaveAttribute("aria-keyshortcuts"),s(c).toHaveAttribute("aria-keyshortcuts","Escape")}),await m.click(e.getByRole("button",{name:"Pin top toast"})),await b(()=>{s(r).toHaveAttribute("aria-keyshortcuts","Escape"),s(c).not.toHaveAttribute("aria-keyshortcuts")}),await m.click(e.getByRole("button",{name:"Unpin top toast"})),await b(()=>{s(r).not.toHaveAttribute("aria-keyshortcuts"),s(c).toHaveAttribute("aria-keyshortcuts","Escape")}),S.keyDown(n,{key:"Escape",repeat:!0}),await s(e.getByRole("status",{name:"Base notice"})).toBeInTheDocument(),await s(e.getByRole("status",{name:"Top notice"})).toBeInTheDocument()}};function Mt(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:280,padding:16},children:[a.jsx(p,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen stack"}),a.jsx(u,{open:t.first,onOpenChange:n=>{e(r=>({...r,first:n}))},title:"First stack item",description:"Older toast should offset away from viewport edge.",tone:"info",duration:0,position:"bottom-right"}),a.jsx(u,{open:t.second,onOpenChange:n=>{e(r=>({...r,second:n}))},title:"Second stack item",description:"Latest toast remains anchored to viewport edge.",tone:"success",duration:0,position:"bottom-right"})]})}const z={render:()=>a.jsx(Mt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("status",{name:"First stack item"}),r=await e.findByRole("status",{name:"Second stack item"});await s(n.getAttribute("style")).toContain("--aurora-toast-stack-offset: -14px"),await s(r.getAttribute("style")).toContain("--aurora-toast-stack-offset: 0px")}},U={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(ht,{})]})};function Vt(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const c=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}function Gt(){const[t,e]=o.useState(!0),[n,r]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(p,{variant:"ghost",onClick:()=>r(c=>!c),children:n?"Disable toast Escape guard":"Enable toast Escape guard"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Toast-level Escape guard",description:"Toast can intercept Escape locally before close logic runs.",tone:"info",onEscapeKeyDown:c=>{n&&c.preventDefault()}})]})}function Nt(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"IME composition guard",description:"Escape during active composition should not dismiss this toast.",tone:"info",action:a.jsx("input",{"aria-label":"Inline response",placeholder:"Type with IME..."})})]})}function Kt(){const[t,e]=o.useState(!0),[n,r]=o.useState(0);return o.useEffect(()=>{const c=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"escape-hook-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(u,{open:t,onOpenChange:e,duration:0,title:"Preempted escape skips toast hook",description:"Global escape preemption should prevent toast-level escape callback execution.",tone:"info",onEscapeKeyDown:()=>r(c=>c+1)})]})}const Y={render:()=>a.jsx(Vt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable global Escape handler"})),await s(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},$={render:()=>a.jsx(Kt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape"}),await s(e.getByTestId("escape-hook-count")).toHaveTextContent("0"),await s(e.getByRole("status",{name:"Preempted escape skips toast hook"})).toBeInTheDocument()}},J={render:()=>a.jsx(Gt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape"}),await s(e.getByRole("status",{name:"Toast-level Escape guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Disable toast Escape guard"})),await s(e.getByRole("button",{name:"Enable toast Escape guard"})).toBeInTheDocument()}},Q={render:()=>a.jsx(Nt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),S.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await s(e.getByRole("dialog",{name:"IME composition guard"})).toBeInTheDocument(),await m.click(e.getByRole("button",{name:"Close toast"})),await s(e.queryByRole("dialog",{name:"IME composition guard"})).not.toBeInTheDocument()}},X={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}},Z={args:{title:"Background sync",description:"Silent status updates are visible but not announced.",live:"off",duration:0},play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(e.getByRole("status",{name:"Background sync"})).toHaveAttribute("aria-live","off")}};var Te,Be,Ee;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:"{}",...(Ee=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Re,De,Ce;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(Ce=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Ce.source}}};var Se,Ie,je;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var He,Ae,Oe;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Oe=(Ae=G.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var qe,Fe,Pe;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Pe=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Le,Me,Ve;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ge,Ne,Ke;_.parameters={..._.parameters,docs:{...(Ge=_.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ke=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var _e,We,ze;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(ze=(We=W.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ue,Ye,$e;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...($e=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;U.parameters={...U.parameters,docs:{...(Je=U.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=Y.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;$.parameters={...$.parameters,docs:{...(at=$.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=$.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,it;J.parameters={...J.parameters,docs:{...(st=J.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(it=(rt=J.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ct,ut,lt;Q.parameters={...Q.parameters,docs:{...(ct=Q.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(ut=Q.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var dt,pt,mt;X.parameters={...X.parameters,docs:{...(dt=X.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=X.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ft,vt;Z.parameters={...Z.parameters,docs:{...(yt=Z.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(ft=Z.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};const $t=["Default","ToneMatrix","ActionRequired","ActionRequiredDanger","CloseReasonTelemetry","TimeoutCloseReason","EscapeStackOrder","EscapeShortcutSync","StackedViewportOffset","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","EscapePreemptedSkipsToastHook","EscapeGuardedByToastHandler","EscapeIgnoresImeComposition","AriaLabelOverride","LiveRegionOff"];export{V as ActionRequired,G as ActionRequiredDanger,X as AriaLabelOverride,N as CloseReasonTelemetry,L as Default,J as EscapeGuardedByToastHandler,Q as EscapeIgnoresImeComposition,Y as EscapePreemptedByGlobalHandler,$ as EscapePreemptedSkipsToastHook,W as EscapeShortcutSync,_ as EscapeStackOrder,U as FocusedToastEscapesFirst,Z as LiveRegionOff,z as StackedViewportOffset,K as TimeoutCloseReason,M as ToneMatrix,$t as __namedExportsOrder,Yt as default};
