import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as v}from"./Button-DirECuRH.js";import{l as gt,P as vt,F as ft}from"./bodyScrollLock-D0vp0S5S.js";import{D as ht}from"./DismissableLayer-0MVldSzJ.js";import{D as Dt}from"./Dropdown-C_XIgq4B.js";import{within as d,expect as o,fireEvent as l,waitFor as g,userEvent as c}from"./index-DgAF9SIF.js";import{b as p,s as B,a as x}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function u({open:n,side:e="right",title:a,description:r,children:w,restoreFocus:b=!0,closeOnEscape:m=!0,closeOnOutsidePointer:D=!0,showCloseButton:yt=!0,closeLabel:_="Close drawer",ariaLabel:$,ariaLabelledBy:W,onEscapeKeyDown:J,onPointerDownOutside:Q,onCloseReason:C,onOpenChange:X}){const oe=i.useId(),re=i.useId(),se=lt(r),[Z,ie]=i.useState(!1),[ce,f]=i.useState(!1),[le,I]=i.useState(!1),E=i.useRef(!0);i.useRef(null);const pt=i.useRef(null),[k,wt]=i.useState(null),mt=typeof _=="string"&&_.trim().length>0?_.trim():"Close drawer",ee=typeof W=="string"&&W.trim().length>0?W.trim():void 0,te=ee===void 0&&typeof $=="string"&&$.trim().length>0?$.trim():void 0,bt=te!==void 0||ee!==void 0,ne=i.useCallback(s=>{C==null||C(s),X(!1)},[C,X]);return i.useEffect(()=>{},[bt,a]),i.useEffect(()=>{if(!(!n||!k))return gt(k.ownerDocument)},[n,k]),i.useEffect(()=>{if(!n||!k)return;const s=k.ownerDocument,de=h=>{h.metaKey||h.altKey||h.ctrlKey||(E.current=!0)},T=h=>{"button"in h&&!ae(h.button)||"ctrlKey"in h&&h.ctrlKey||(E.current=!1)};return s.addEventListener("keydown",de,!0),s.addEventListener("pointerdown",T,!0),s.addEventListener("mousedown",T,!0),s.addEventListener("touchstart",T,!0),()=>{s.removeEventListener("keydown",de,!0),s.removeEventListener("pointerdown",T,!0),s.removeEventListener("mousedown",T,!0),s.removeEventListener("touchstart",T,!0)}},[n,k]),n?t.jsx(vt,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(ht,{onEscapeKeyDown:s=>{if(J==null||J(s),!s.defaultPrevented){if(!m){s.preventDefault();return}s.preventDefault(),ne("escape-key")}},onPointerDownOutside:s=>{if(Q==null||Q(s),!s.defaultPrevented){if(!D){s.preventDefault();return}s.preventDefault(),ne("outside-pointer")}},onDismiss:()=>X(!1),children:t.jsx(ft,{restoreFocus:b,children:t.jsxs("aside",{ref:s=>{pt.current=s,wt(s)},role:"dialog","aria-modal":"true","aria-label":te,"aria-labelledby":ee??(te?void 0:oe),"aria-describedby":se?re:void 0,"aria-keyshortcuts":m?"Escape":void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:oe,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:a}),se?t.jsx("p",{id:re,style:{margin:0,color:"var(--aurora-text-secondary)"},children:r}):null]}),yt?t.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>ne("close-button"),"aria-label":mt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{ie(!0)},onMouseLeave:()=>{ie(!1),f(!1)},onPointerDown:s=>{s.ctrlKey||ae(s.button)&&(E.current=!1,I(!1),f(!0))},onPointerUp:s=>{ae(s.button)&&f(!1)},onMouseDown:s=>{s.button===0&&!s.ctrlKey&&(E.current=!1,I(!1)),s.button===0&&!s.ctrlKey&&f(!0)},onMouseUp:s=>{s.button===0&&f(!1)},onPointerCancel:()=>{f(!1)},onKeyDown:s=>{E.current=!0,!Et(s)&&ue(s.key)&&!xt(s)&&f(!0)},onKeyUp:s=>{ue(s.key)&&f(!1)},onFocus:s=>{I(Bt(s.currentTarget,E.current))},onBlur:()=>{I(!1),f(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:Z||le?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ce?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":Z?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:Z?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:le?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:ce?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:w})]})})})})}):null}function Bt(n,e){try{return n.matches(":focus-visible")||e}catch{return e}}function ae(n){return typeof n!="number"||n<=0}function ue(n){return n==="Enter"||n===" "||n==="Space"||n==="Spacebar"}function xt(n){return n.altKey||n.ctrlKey||n.metaKey}function Et(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function lt(n){return n==null||typeof n=="boolean"?!1:typeof n=="string"?n.trim().length>0:typeof n=="number"?!0:Array.isArray(n)?n.some(e=>lt(e)):i.isValidElement(n)}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Qt={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},R={display:"grid",gap:10},dt={display:"grid",gap:10,justifyItems:"start"},y={margin:0},ut={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function kt(){const[n,e]=i.useState(!1);return t.jsxs(p,{align:"start",children:[t.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:n,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Use this panel to narrow incident review scope."}),t.jsx(v,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const j={render:()=>t.jsx(kt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Drawer"})),await o(await a.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(a.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function Tt(){const[n,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx("h3",{id:"drawer-heading",style:{margin:0},children:"Release checklist drawer heading"}),t.jsx(u,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist drawer",ariaLabelledBy:"drawer-heading",children:t.jsx("p",{style:y,children:"Drawer name should follow visible heading binding."})})]})}const S={render:()=>t.jsx(Tt,{}),play:async({canvasElement:n})=>{const a=await d(n.ownerDocument.body).findByRole("dialog",{name:"Release checklist drawer heading"});await o(a).toHaveAttribute("aria-labelledby","drawer-heading"),await o(a).not.toHaveAttribute("aria-label")}};function Rt(){const[n,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings drawer",children:t.jsx("p",{style:y,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const F={render:()=>t.jsx(Rt,{}),play:async({canvasElement:n})=>{const a=await d(n.ownerDocument.body).findByRole("dialog",{name:"Automation settings drawer"});await o(a).toHaveAttribute("aria-label","Automation settings drawer"),await o(a).not.toHaveAttribute("aria-labelledby")}};function Ct(){const[n,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:n,onOpenChange:e,title:"Numeric description drawer",description:0,children:t.jsx("p",{style:y,children:"Drawer description supports numeric ReactNode content."})})})}const H={render:()=>t.jsx(Ct,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Numeric description drawer"}),r=e.getAllByText("0");await o(r).toHaveLength(1),await o(r[0].tagName).toBe("P"),await o(a).toHaveAttribute("aria-describedby",r[0].id)}};function It(){const[n,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Outside click and Escape are disabled in this flow."}),t.jsx(v,{onClick:()=>e(!1),children:"I understand"})]})})]})}const O={render:()=>t.jsx(It,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Security checklist"});await o(a).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{Escape}"),await o(a).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"I understand"})),await o(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function jt(){const[n,e]=i.useState(!0),[a,r]=i.useState(0),[w,b]=i.useState(0);return t.jsx(p,{align:"start",children:t.jsxs("div",{style:dt,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:ut}),t.jsxs("p",{style:B,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:B,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:x,children:w})]}),t.jsx(u,{open:n,onOpenChange:e,title:"Guarded drawer",onEscapeKeyDown:m=>{m.preventDefault(),r(D=>D+1)},onPointerDownOutside:m=>{m.preventDefault(),b(D=>D+1)},children:t.jsx("p",{style:y,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const P={render:()=>t.jsx(jt,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=e.getByTestId("drawer-guard-outside-target");await o(await e.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await c.click(a),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function St(){const[n,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:y,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const A={render:()=>t.jsx(St,{}),play:async({canvasElement:n})=>{const a=await d(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});l.mouseDown(a,{button:2}),await o(a.style.transform).toContain("translateY(0"),l.mouseDown(a),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),l.pointerCancel(a),await g(()=>{o(a.style.transform).toContain("translateY(0")}),a.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),a.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(0")}),l.mouseDown(a),l.mouseUp(a),await o(a.style.transform).toContain("translateY(0")}};function Ft(){const[n,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:n,onOpenChange:e,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const N={render:()=>t.jsx(Ft,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("button",{name:"Drawer content action"}),r=await e.findByRole("button",{name:"Focus intent close drawer"});await c.click(a),await o(a).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await o(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),l.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function Ht(){const[n,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:n,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:y,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const K={render:()=>t.jsx(Ht,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await o(a).toHaveAttribute("aria-keyshortcuts","Escape");const r=await e.findByRole("button",{name:"Close drawer"});await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),l.keyDown(r,{key:"Enter",ctrlKey:!0}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyUp(r,{key:"Enter",ctrlKey:!0}),l.keyDown(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")})}};function Ot(){const[n,e]=i.useState(!1),[a,r]=i.useState("none"),[w,b]=i.useState("none");return t.jsx(p,{align:"start",children:t.jsxs("div",{style:dt,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:ut}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:x,children:a})]}),t.jsxs("p",{style:B,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:x,children:w})]}),t.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:n,onOpenChange:m=>{e(m),m||b(D=>`${D} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:m=>{r(m),b(`reason:${m}`)},children:t.jsx("p",{style:y,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const L={render:()=>t.jsx(Ot,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body),r=e.getByTestId("drawer-outside-target");await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(a.getByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await c.pointer({target:r,keys:"[MouseLeft]"}),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Pt(){const[n,e]=i.useState(!1);return t.jsxs(p,{align:"start",children:[t.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:n,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:y,children:"Use close button and verify trigger focus restoration."})})]})}const Y={render:()=>t.jsx(Pt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body),r=e.getByRole("button",{name:"Open Focus Return Drawer"});await c.click(r),await o(await a.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(r).toHaveFocus()}};function At(){const[n,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(v,{children:"Primary drawer action"}),t.jsx(v,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const q={render:()=>t.jsx(At,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("button",{name:"Close drawer"}),r=e.getByRole("button",{name:"Primary drawer action"}),w=e.getByRole("button",{name:"Secondary drawer action"}),b=e.getByRole("button",{name:"Outside after drawer"});a.focus(),await o(a).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await c.tab(),await o(w).toHaveFocus(),await c.tab(),await o(a).toHaveFocus(),await o(b).not.toHaveFocus(),await c.tab({shift:!0}),await o(w).toHaveFocus()}};function Nt(){const[n,e]=i.useState(!1);return t.jsxs(p,{align:"start",gap:8,children:[t.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:n,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:y,children:"Use this mode when close flow intentionally hands off focus."})})]})}const M={render:()=>t.jsx(Nt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body),r=e.getByRole("button",{name:"Open No Focus Return Drawer"});await c.click(r),await o(await a.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(r).not.toHaveFocus()}};function Kt(){const[n,e]=i.useState(!1);return t.jsxs(p,{align:"start",children:[t.jsx(v,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Escape should close dropdown first, then drawer."}),t.jsx(Dt,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const G={render:()=>t.jsx(Kt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await a.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Drawer actions"})),await o(a.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(a.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function Lt(){const[n,e]=i.useState(!0);return t.jsx(u,{open:n,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:y,children:"Escape should be ignored while IME composition is active."})})}const U={render:()=>t.jsx(Lt,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=d(e.body);await o(await a.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",isComposing:!0}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",keyCode:229}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function Yt(){const[n,e]=i.useState(!0),[a,r]=i.useState(0);return i.useEffect(()=>{const w=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0)}},[]),t.jsxs(p,{align:"start",children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:x,children:a})]}),t.jsx(u,{open:n,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>r(w=>w+1),children:t.jsx("p",{style:y,children:"Escape should remain preempted by global handlers."})})]})}const V={render:()=>t.jsx(Yt,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=d(e.body);await o(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",ctrlKey:!0}),l.keyDown(e,{key:"Escape",altKey:!0}),l.keyDown(e,{key:"Escape",metaKey:!0}),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function qt(){const[n,e]=i.useState(!0),[a,r]=i.useState(0),[w,b]=i.useState("none");return t.jsxs(p,{align:"start",children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:x,children:w})]}),t.jsx(u,{open:n,onOpenChange:e,title:"Repeat escape drawer",onEscapeKeyDown:()=>r(m=>m+1),onCloseReason:b,children:t.jsx("p",{style:y,children:"Repeated Escape keydown should not close this drawer."})})]})}const z={render:()=>t.jsx(qt,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=d(e.body);await o(await a.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",repeat:!0}),await o(a.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var ye,pe,we;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:we.source}}};var me,be,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ve,fe,he;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var De,Be,xe;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <NumericDescriptionDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", {
      name: "Numeric description drawer"
    });
    const descriptions = body.getAllByText("0");
    await expect(descriptions).toHaveLength(1);
    await expect(descriptions[0].tagName).toBe("P");
    await expect(drawer).toHaveAttribute("aria-describedby", descriptions[0].id);
  }
}`,...(xe=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var Ee,ke,Te;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Re,Ce,Ie;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var je,Se,Fe;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var He,Oe,Pe;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Pe=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Ae,Ne,Ke;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ke=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var Le,Ye,qe;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(qe=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};var Me,Ge,Ue;Y.parameters={...Y.parameters,docs:{...(Me=Y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Ve,ze,_e;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(_e=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var $e,We,Je;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Je=(We=M.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=G.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;U.parameters={...U.parameters,docs:{...(et=U.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=U.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,rt;V.parameters={...V.parameters,docs:{...(at=V.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(ot=V.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var st,it,ct;z.parameters={...z.parameters,docs:{...(st=z.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(it=z.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};const Xt=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NumericDescriptionSemantics","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{K as CloseButtonKeyboardPressedState,A as CloseButtonPrimaryPointerOnly,L as CloseReasonTelemetry,P as DismissGuardHooks,U as EscapeIgnoresImeComposition,V as EscapePreemptedByGlobalHandler,z as EscapeRepeatGuard,N as FocusIntentReentry,Y as FocusReturn,q as FocusTrapKeyboardCycle,F as IconTitleAriaLabelFallback,j as Interactive,S as LabelledByPrecedence,G as NestedDismissOrder,M as NoFocusReturn,O as NonDismissible,H as NumericDescriptionSemantics,Xt as __namedExportsOrder,Qt as default};
