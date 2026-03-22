import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as v}from"./Button-DzwIPD-D.js";import{l as ut,P as yt,F as pt}from"./bodyScrollLock-D0vp0S5S.js";import{D as wt}from"./DismissableLayer-0MVldSzJ.js";import{D as mt}from"./Dropdown-1ufCVyLp.js";import{within as d,expect as o,fireEvent as l,waitFor as g,userEvent as c}from"./index-DgAF9SIF.js";import{b as w,s as D,a as x}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function u({open:n,side:t="right",title:a,description:r,children:p,restoreFocus:b=!0,closeOnEscape:m=!0,closeOnOutsidePointer:B=!0,showCloseButton:st=!0,closeLabel:z="Close drawer",ariaLabel:_,ariaLabelledBy:$,onEscapeKeyDown:W,onPointerDownOutside:J,onCloseReason:R,onOpenChange:Q}){const ae=i.useId(),oe=i.useId(),[X,re]=i.useState(!1),[se,f]=i.useState(!1),[ie,I]=i.useState(!1),E=i.useRef(!0);i.useRef(null);const it=i.useRef(null),[k,ct]=i.useState(null),lt=typeof z=="string"&&z.trim().length>0?z.trim():"Close drawer",Z=typeof $=="string"&&$.trim().length>0?$.trim():void 0,ee=Z===void 0&&typeof _=="string"&&_.trim().length>0?_.trim():void 0,dt=ee!==void 0||Z!==void 0,te=i.useCallback(s=>{R==null||R(s),Q(!1)},[R,Q]);return i.useEffect(()=>{},[dt,a]),i.useEffect(()=>{if(!(!n||!k))return ut(k.ownerDocument)},[n,k]),i.useEffect(()=>{if(!n||!k)return;const s=k.ownerDocument,ce=h=>{h.metaKey||h.altKey||h.ctrlKey||(E.current=!0)},T=h=>{"button"in h&&!ne(h.button)||"ctrlKey"in h&&h.ctrlKey||(E.current=!1)};return s.addEventListener("keydown",ce,!0),s.addEventListener("pointerdown",T,!0),s.addEventListener("mousedown",T,!0),s.addEventListener("touchstart",T,!0),()=>{s.removeEventListener("keydown",ce,!0),s.removeEventListener("pointerdown",T,!0),s.removeEventListener("mousedown",T,!0),s.removeEventListener("touchstart",T,!0)}},[n,k]),n?e.jsx(yt,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:e.jsx(wt,{onEscapeKeyDown:s=>{if(W==null||W(s),!s.defaultPrevented){if(!m){s.preventDefault();return}s.preventDefault(),te("escape-key")}},onPointerDownOutside:s=>{if(J==null||J(s),!s.defaultPrevented){if(!B){s.preventDefault();return}s.preventDefault(),te("outside-pointer")}},onDismiss:()=>Q(!1),children:e.jsx(pt,{restoreFocus:b,children:e.jsxs("aside",{ref:s=>{it.current=s,ct(s)},role:"dialog","aria-modal":"true","aria-label":ee,"aria-labelledby":Z??(ee?void 0:ae),"aria-describedby":r?oe:void 0,"aria-keyshortcuts":m?"Escape":void 0,"data-side":t,style:{position:"absolute",top:0,bottom:0,[t]:0,width:"min(420px, 90vw)",borderLeft:t==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:t==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:t==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:t==="left"?"var(--aurora-radius-lg)":0},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("h2",{id:ae,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:a}),r?e.jsx("p",{id:oe,style:{margin:0,color:"var(--aurora-text-secondary)"},children:r}):null]}),st?e.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>te("close-button"),"aria-label":lt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{re(!0)},onMouseLeave:()=>{re(!1),f(!1)},onPointerDown:s=>{s.ctrlKey||ne(s.button)&&(E.current=!1,I(!1),f(!0))},onPointerUp:s=>{ne(s.button)&&f(!1)},onMouseDown:s=>{s.button===0&&!s.ctrlKey&&(E.current=!1,I(!1)),s.button===0&&!s.ctrlKey&&f(!0)},onMouseUp:s=>{s.button===0&&f(!1)},onPointerCancel:()=>{f(!1)},onKeyDown:s=>{E.current=!0,!vt(s)&&le(s.key)&&!gt(s)&&f(!0)},onKeyUp:s=>{le(s.key)&&f(!1)},onFocus:s=>{I(bt(s.currentTarget,E.current))},onBlur:()=>{I(!1),f(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:X||ie?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:se?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":X?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:X?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ie?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:se?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),e.jsx("div",{style:{overflow:"auto"},children:p})]})})})})}):null}function bt(n,t){try{return n.matches(":focus-visible")}catch{return t}}function ne(n){return typeof n!="number"||n<=0}function le(n){return n==="Enter"||n===" "||n==="Space"||n==="Spacebar"}function gt(n){return n.altKey||n.ctrlKey||n.metaKey}function vt(n){const t=n.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Ut={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},C={display:"grid",gap:10},ot={display:"grid",gap:10,justifyItems:"start"},y={margin:0},rt={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function ft(){const[n,t]=i.useState(!1);return e.jsxs(w,{align:"start",children:[e.jsx(v,{variant:"outline",onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(u,{open:n,onOpenChange:t,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:e.jsxs("div",{style:C,children:[e.jsx("p",{style:y,children:"Use this panel to narrow incident review scope."}),e.jsx(v,{onClick:()=>t(!1),children:"Apply and close"})]})})]})}const j={render:()=>e.jsx(ft,{}),play:async({canvasElement:n})=>{const t=d(n),a=d(n.ownerDocument.body);await c.click(t.getByRole("button",{name:"Open Drawer"})),await o(await a.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(a.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function ht(){const[n,t]=i.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx("h3",{id:"drawer-heading",style:{margin:0},children:"Release checklist drawer heading"}),e.jsx(u,{open:n,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist drawer",ariaLabelledBy:"drawer-heading",children:e.jsx("p",{style:y,children:"Drawer name should follow visible heading binding."})})]})}const F={render:()=>e.jsx(ht,{}),play:async({canvasElement:n})=>{const a=await d(n.ownerDocument.body).findByRole("dialog",{name:"Release checklist drawer heading"});await o(a).toHaveAttribute("aria-labelledby","drawer-heading"),await o(a).not.toHaveAttribute("aria-label")}};function Bt(){const[n,t]=i.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(u,{open:n,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings drawer",children:e.jsx("p",{style:y,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const S={render:()=>e.jsx(Bt,{}),play:async({canvasElement:n})=>{const a=await d(n.ownerDocument.body).findByRole("dialog",{name:"Automation settings drawer"});await o(a).toHaveAttribute("aria-label","Automation settings drawer"),await o(a).not.toHaveAttribute("aria-labelledby")}};function Dt(){const[n,t]=i.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx(v,{variant:"outline",onClick:()=>t(!0),children:"Reopen Drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:e.jsxs("div",{style:C,children:[e.jsx("p",{style:y,children:"Outside click and Escape are disabled in this flow."}),e.jsx(v,{onClick:()=>t(!1),children:"I understand"})]})})]})}const O={render:()=>e.jsx(Dt,{}),play:async({canvasElement:n})=>{const t=d(n.ownerDocument.body),a=await t.findByRole("dialog",{name:"Security checklist"});await o(a).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{Escape}"),await o(a).toBeInTheDocument(),await c.click(t.getByRole("button",{name:"I understand"})),await o(t.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function xt(){const[n,t]=i.useState(!0),[a,r]=i.useState(0),[p,b]=i.useState(0);return e.jsx(w,{align:"start",children:e.jsxs("div",{style:ot,children:[e.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:rt}),e.jsxs("p",{style:D,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:x,children:a})]}),e.jsxs("p",{style:D,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:x,children:p})]}),e.jsx(u,{open:n,onOpenChange:t,title:"Guarded drawer",onEscapeKeyDown:m=>{m.preventDefault(),r(B=>B+1)},onPointerDownOutside:m=>{m.preventDefault(),b(B=>B+1)},children:e.jsx("p",{style:y,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const H={render:()=>e.jsx(xt,{}),play:async({canvasElement:n})=>{const t=d(n.ownerDocument.body),a=t.getByTestId("drawer-guard-outside-target");await o(await t.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(t.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await c.click(a),await o(t.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(t.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function Et(){const[n,t]=i.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx(v,{variant:"outline",onClick:()=>t(!0),children:"Reopen Drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:e.jsx("p",{style:y,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const P={render:()=>e.jsx(Et,{}),play:async({canvasElement:n})=>{const a=await d(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});l.mouseDown(a,{button:2}),await o(a.style.transform).toContain("translateY(0"),l.mouseDown(a),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),l.pointerCancel(a),await g(()=>{o(a.style.transform).toContain("translateY(0")}),a.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),a.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(0")}),l.mouseDown(a),l.mouseUp(a),await o(a.style.transform).toContain("translateY(0")}};function kt(){const[n,t]=i.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(u,{open:n,onOpenChange:t,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:e.jsxs("div",{style:C,children:[e.jsx("p",{style:y,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),e.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const A={render:()=>e.jsx(kt,{}),play:async({canvasElement:n})=>{const t=d(n.ownerDocument.body),a=await t.findByRole("button",{name:"Drawer content action"}),r=await t.findByRole("button",{name:"Focus intent close drawer"});await c.click(a),await o(a).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await o(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),l.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function Tt(){const[n,t]=i.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(u,{open:n,onOpenChange:t,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:e.jsx("p",{style:y,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const K={render:()=>e.jsx(Tt,{}),play:async({canvasElement:n})=>{const t=d(n.ownerDocument.body),a=await t.findByRole("dialog",{name:"Keyboard pressed close affordance"});await o(a).toHaveAttribute("aria-keyshortcuts","Escape");const r=await t.findByRole("button",{name:"Close drawer"});await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),l.keyDown(r,{key:"Enter",ctrlKey:!0}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyUp(r,{key:"Enter",ctrlKey:!0}),l.keyDown(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")})}};function Ct(){const[n,t]=i.useState(!1),[a,r]=i.useState("none"),[p,b]=i.useState("none");return e.jsx(w,{align:"start",children:e.jsxs("div",{style:ot,children:[e.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:rt}),e.jsxs("p",{style:D,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"drawer-close-reason",style:x,children:a})]}),e.jsxs("p",{style:D,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"drawer-close-trace",style:x,children:p})]}),e.jsx(v,{variant:"outline",onClick:()=>t(!0),children:"Open Telemetry Drawer"}),e.jsx(u,{open:n,onOpenChange:m=>{t(m),m||b(B=>`${B} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:m=>{r(m),b(`reason:${m}`)},children:e.jsx("p",{style:y,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const L={render:()=>e.jsx(Ct,{}),play:async({canvasElement:n})=>{const t=d(n),a=d(n.ownerDocument.body),r=t.getByTestId("drawer-outside-target");await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await c.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await c.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(a.getByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await c.pointer({target:r,keys:"[MouseLeft]"}),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Rt(){const[n,t]=i.useState(!1);return e.jsxs(w,{align:"start",children:[e.jsx(v,{variant:"outline",onClick:()=>t(!0),children:"Open Focus Return Drawer"}),e.jsx(u,{open:n,onOpenChange:t,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:e.jsx("p",{style:y,children:"Use close button and verify trigger focus restoration."})})]})}const N={render:()=>e.jsx(Rt,{}),play:async({canvasElement:n})=>{const t=d(n),a=d(n.ownerDocument.body),r=t.getByRole("button",{name:"Open Focus Return Drawer"});await c.click(r),await o(await a.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(r).toHaveFocus()}};function It(){const[n,t]=i.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx("button",{type:"button",children:"Outside before drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Focus trap drawer",children:e.jsxs("div",{style:C,children:[e.jsx("p",{style:y,children:"Tab and Shift+Tab should cycle within the drawer."}),e.jsx(v,{children:"Primary drawer action"}),e.jsx(v,{variant:"outline",children:"Secondary drawer action"})]})}),e.jsx("button",{type:"button",children:"Outside after drawer"})]})}const Y={render:()=>e.jsx(It,{}),play:async({canvasElement:n})=>{const t=d(n.ownerDocument.body),a=await t.findByRole("button",{name:"Close drawer"}),r=t.getByRole("button",{name:"Primary drawer action"}),p=t.getByRole("button",{name:"Secondary drawer action"}),b=t.getByRole("button",{name:"Outside after drawer"});a.focus(),await o(a).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await c.tab(),await o(p).toHaveFocus(),await c.tab(),await o(a).toHaveFocus(),await o(b).not.toHaveFocus(),await c.tab({shift:!0}),await o(p).toHaveFocus()}};function jt(){const[n,t]=i.useState(!1);return e.jsxs(w,{align:"start",gap:8,children:[e.jsx(v,{variant:"outline",onClick:()=>t(!0),children:"Open No Focus Return Drawer"}),e.jsx("button",{type:"button",children:"Post-close target"}),e.jsx(u,{open:n,onOpenChange:t,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:e.jsx("p",{style:y,children:"Use this mode when close flow intentionally hands off focus."})})]})}const q={render:()=>e.jsx(jt,{}),play:async({canvasElement:n})=>{const t=d(n),a=d(n.ownerDocument.body),r=t.getByRole("button",{name:"Open No Focus Return Drawer"});await c.click(r),await o(await a.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(r).not.toHaveFocus()}};function Ft(){const[n,t]=i.useState(!1);return e.jsxs(w,{align:"start",children:[e.jsx(v,{variant:"outline",onClick:()=>t(!0),children:"Open Nested Overlay Drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Nested overlay drawer",children:e.jsxs("div",{style:C,children:[e.jsx("p",{style:y,children:"Escape should close dropdown first, then drawer."}),e.jsx(mt,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const M={render:()=>e.jsx(Ft,{}),play:async({canvasElement:n})=>{const t=d(n),a=d(n.ownerDocument.body);await c.click(t.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await a.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Drawer actions"})),await o(a.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(a.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function St(){const[n,t]=i.useState(!0);return e.jsx(u,{open:n,onOpenChange:t,title:"IME composition drawer",children:e.jsx("p",{style:y,children:"Escape should be ignored while IME composition is active."})})}const G={render:()=>e.jsx(St,{}),play:async({canvasElement:n})=>{const t=n.ownerDocument,a=d(t.body);await o(await a.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",isComposing:!0}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",keyCode:229}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function Ot(){const[n,t]=i.useState(!0),[a,r]=i.useState(0);return i.useEffect(()=>{const p=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",p,!0),()=>{document.removeEventListener("keydown",p,!0)}},[]),e.jsxs(w,{align:"start",children:[e.jsxs("p",{style:D,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"drawer-escape-calls",style:x,children:a})]}),e.jsx(u,{open:n,onOpenChange:t,title:"Preempted escape drawer",onEscapeKeyDown:()=>r(p=>p+1),children:e.jsx("p",{style:y,children:"Escape should remain preempted by global handlers."})})]})}const U={render:()=>e.jsx(Ot,{}),play:async({canvasElement:n})=>{const t=n.ownerDocument,a=d(t.body);await o(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",ctrlKey:!0}),l.keyDown(t,{key:"Escape",altKey:!0}),l.keyDown(t,{key:"Escape",metaKey:!0}),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function Ht(){const[n,t]=i.useState(!0),[a,r]=i.useState(0),[p,b]=i.useState("none");return e.jsxs(w,{align:"start",children:[e.jsxs("p",{style:D,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:x,children:a})]}),e.jsxs("p",{style:D,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:x,children:p})]}),e.jsx(u,{open:n,onOpenChange:t,title:"Repeat escape drawer",onEscapeKeyDown:()=>r(m=>m+1),onCloseReason:b,children:e.jsx("p",{style:y,children:"Repeated Escape keydown should not close this drawer."})})]})}const V={render:()=>e.jsx(Ht,{}),play:async({canvasElement:n})=>{const t=n.ownerDocument,a=d(t.body);await o(await a.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",repeat:!0}),await o(a.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var de,ue,ye;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <InteractiveDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Release filters"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(body.queryByRole("dialog", {
      name: "Release filters"
    })).not.toBeInTheDocument();
  }
}`,...(ye=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var pe,we,me;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <LabelledByPrecedenceDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", {
      name: "Release checklist drawer heading"
    });
    await expect(drawer).toHaveAttribute("aria-labelledby", "drawer-heading");
    await expect(drawer).not.toHaveAttribute("aria-label");
  }
}`,...(me=(we=F.parameters)==null?void 0:we.docs)==null?void 0:me.source}}};var be,ge,ve;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <IconTitleAriaLabelFallbackDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", {
      name: "Automation settings drawer"
    });
    await expect(drawer).toHaveAttribute("aria-label", "Automation settings drawer");
    await expect(drawer).not.toHaveAttribute("aria-labelledby");
  }
}`,...(ve=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var fe,he,Be;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <NonDismissibleDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Security checklist"
    });
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{Escape}");
    await expect(dialog).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "I understand"
    }));
    await expect(body.queryByRole("dialog", {
      name: "Security checklist"
    })).not.toBeInTheDocument();
  }
}`,...(Be=(he=O.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var De,xe,Ee;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <DismissGuardDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = body.getByTestId("drawer-guard-outside-target");
    await expect(await body.findByRole("dialog", {
      name: "Guarded drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Guarded drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1");
    await userEvent.click(outsideTarget);
    await expect(body.getByRole("dialog", {
      name: "Guarded drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1");
  }
}`,...(Ee=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var ke,Te,Ce;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <CloseButtonPrimaryPointerOnlyDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close drawer"
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
}`,...(Ce=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Re,Ie,je;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <FocusIntentReentryDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawerAction = await body.findByRole("button", {
      name: "Drawer content action"
    });
    const closeButton = await body.findByRole("button", {
      name: "Focus intent close drawer"
    });
    await userEvent.click(drawerAction);
    await expect(drawerAction).toHaveFocus();
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    fireEvent.mouseDown(closeButton, {
      button: 0,
      ctrlKey: true
    });
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
  }
}`,...(je=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Fe,Se,Oe;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <CloseButtonKeyboardPressedDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", {
      name: "Keyboard pressed close affordance"
    });
    await expect(drawer).toHaveAttribute("aria-keyshortcuts", "Escape");
    const closeButton = await body.findByRole("button", {
      name: "Close drawer"
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
  }
}`,...(Oe=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Oe.source}}};var He,Pe,Ae;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("drawer-outside-target");
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("none");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    outsideTarget.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      button: 0,
      ctrlKey: true,
      pointerType: "mouse"
    }));
    await expect(body.getByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key");
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
}`,...(Ae=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Ke,Le,Ne;N.parameters={...N.parameters,docs:{...(Ke=N.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <FocusReturnDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Open Focus Return Drawer"
    });
    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", {
      name: "Focus return drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(trigger).toHaveFocus();
  }
}`,...(Ne=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var Ye,qe,Me;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <FocusTrapKeyboardCycleDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close drawer"
    });
    const primaryAction = body.getByRole("button", {
      name: "Primary drawer action"
    });
    const secondaryAction = body.getByRole("button", {
      name: "Secondary drawer action"
    });
    const outsideAfter = body.getByRole("button", {
      name: "Outside after drawer"
    });
    closeButton.focus();
    await expect(closeButton).toHaveFocus();
    await userEvent.tab();
    await expect(primaryAction).toHaveFocus();
    await userEvent.tab();
    await expect(secondaryAction).toHaveFocus();
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(outsideAfter).not.toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(secondaryAction).toHaveFocus();
  }
}`,...(Me=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var Ge,Ue,Ve;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <FocusReturnDisabledDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Open No Focus Return Drawer"
    });
    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", {
      name: "No focus return drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(trigger).not.toHaveFocus();
  }
}`,...(Ve=(Ue=q.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var ze,_e,$e;M.parameters={...M.parameters,docs:{...(ze=M.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <NestedOverlayDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Nested Overlay Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Nested overlay drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Drawer actions"
    }));
    await expect(body.getByRole("menu", {
      name: "Drawer actions"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("menu", {
      name: "Drawer actions"
    })).not.toBeInTheDocument();
    await expect(body.getByRole("dialog", {
      name: "Nested overlay drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Nested overlay drawer"
    })).not.toBeInTheDocument();
  }
}`,...($e=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var We,Je,Qe;G.parameters={...G.parameters,docs:{...(We=G.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <EscapeImeGuardDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "IME composition drawer"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      isComposing: true
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition drawer"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      keyCode: 229
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "IME composition drawer"
    })).not.toBeInTheDocument();
  }
}`,...(Qe=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;U.parameters={...U.parameters,docs:{...(Xe=U.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Preempted escape drawer"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      ctrlKey: true
    });
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      altKey: true
    });
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      metaKey: true
    });
    await expect(body.getByRole("dialog", {
      name: "Preempted escape drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-escape-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Preempted escape drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-escape-calls")).toHaveTextContent("0");
  }
}`,...(et=(Ze=U.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;V.parameters={...V.parameters,docs:{...(tt=V.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => <EscapeRepeatDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Repeat escape drawer"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      repeat: true
    });
    await expect(body.getByRole("dialog", {
      name: "Repeat escape drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0");
    await expect(body.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none");
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Repeat escape drawer"
    })).not.toBeInTheDocument();
    await expect(body.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1");
    await expect(body.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key");
  }
}`,...(at=(nt=V.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const Vt=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{K as CloseButtonKeyboardPressedState,P as CloseButtonPrimaryPointerOnly,L as CloseReasonTelemetry,H as DismissGuardHooks,G as EscapeIgnoresImeComposition,U as EscapePreemptedByGlobalHandler,V as EscapeRepeatGuard,A as FocusIntentReentry,N as FocusReturn,Y as FocusTrapKeyboardCycle,S as IconTitleAriaLabelFallback,j as Interactive,F as LabelledByPrecedence,M as NestedDismissOrder,q as NoFocusReturn,O as NonDismissible,Vt as __namedExportsOrder,Ut as default};
