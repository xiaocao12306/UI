import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as f}from"./Button-Bcz0jJFO.js";import{l as Xe,P as Ze,F as et}from"./bodyScrollLock-D0vp0S5S.js";import{D as tt}from"./DismissableLayer-0MVldSzJ.js";import{D as nt}from"./Dropdown-DJG4uK_6.js";import{within as d,expect as o,fireEvent as l,waitFor as b,userEvent as c}from"./index-DgAF9SIF.js";import{b as g,s as D,a as x}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function u({open:n,side:e="right",title:a,description:r,children:y,restoreFocus:m=!0,closeOnEscape:p=!0,closeOnOutsidePointer:B=!0,showCloseButton:$e=!0,closeLabel:U="Close drawer",onEscapeKeyDown:V,onPointerDownOutside:z,onCloseReason:R,onOpenChange:_}){const Q=i.useId(),X=i.useId(),[$,Z]=i.useState(!1),[ee,v]=i.useState(!1),[te,I]=i.useState(!1),E=i.useRef(!0),We=i.useRef(null),[k,Je]=i.useState(null),Qe=typeof U=="string"&&U.trim().length>0?U.trim():"Close drawer",W=i.useCallback(s=>{R==null||R(s),_(!1)},[R,_]);return i.useEffect(()=>{if(!(!n||!k))return Xe(k.ownerDocument)},[n,k]),i.useEffect(()=>{if(!n||!k)return;const s=k.ownerDocument,ne=h=>{h.metaKey||h.altKey||h.ctrlKey||(E.current=!0)},T=h=>{"button"in h&&!J(h.button)||"ctrlKey"in h&&h.ctrlKey||(E.current=!1)};return s.addEventListener("keydown",ne,!0),s.addEventListener("pointerdown",T,!0),s.addEventListener("mousedown",T,!0),s.addEventListener("touchstart",T,!0),()=>{s.removeEventListener("keydown",ne,!0),s.removeEventListener("pointerdown",T,!0),s.removeEventListener("mousedown",T,!0),s.removeEventListener("touchstart",T,!0)}},[n,k]),n?t.jsx(Ze,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(tt,{onEscapeKeyDown:s=>{if(V==null||V(s),!s.defaultPrevented){if(!p){s.preventDefault();return}s.preventDefault(),W("escape-key")}},onPointerDownOutside:s=>{if(z==null||z(s),!s.defaultPrevented){if(!B){s.preventDefault();return}s.preventDefault(),W("outside-pointer")}},onDismiss:()=>_(!1),children:t.jsx(et,{restoreFocus:m,children:t.jsxs("aside",{ref:s=>{We.current=s,Je(s)},role:"dialog","aria-modal":"true","aria-labelledby":Q,"aria-describedby":r?X:void 0,"aria-keyshortcuts":p?"Escape":void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:Q,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:a}),r?t.jsx("p",{id:X,style:{margin:0,color:"var(--aurora-text-secondary)"},children:r}):null]}),$e?t.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>W("close-button"),"aria-label":Qe,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{Z(!0)},onMouseLeave:()=>{Z(!1),v(!1)},onPointerDown:s=>{s.ctrlKey||J(s.button)&&(E.current=!1,I(!1),v(!0))},onPointerUp:s=>{J(s.button)&&v(!1)},onMouseDown:s=>{s.button===0&&!s.ctrlKey&&(E.current=!1,I(!1)),s.button===0&&!s.ctrlKey&&v(!0)},onMouseUp:s=>{s.button===0&&v(!1)},onPointerCancel:()=>{v(!1)},onKeyDown:s=>{E.current=!0,!rt(s)&&ae(s.key)&&!ot(s)&&v(!0)},onKeyUp:s=>{ae(s.key)&&v(!1)},onFocus:s=>{I(at(s.currentTarget,E.current))},onBlur:()=>{I(!1),v(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:$||te?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ee?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":$?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:$?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:te?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:ee?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:y})]})})})})}):null}function at(n,e){try{return n.matches(":focus-visible")}catch{return e}}function J(n){return typeof n!="number"||n<=0}function ae(n){return n==="Enter"||n===" "||n==="Space"||n==="Spacebar"}function ot(n){return n.altKey||n.ctrlKey||n.metaKey}function rt(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const It={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},C={display:"grid",gap:10},ze={display:"grid",gap:10,justifyItems:"start"},w={margin:0},_e={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function st(){const[n,e]=i.useState(!1);return t.jsxs(g,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:n,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Use this panel to narrow incident review scope."}),t.jsx(f,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const j={render:()=>t.jsx(st,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Drawer"})),await o(await a.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(a.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function it(){const[n,e]=i.useState(!0);return t.jsxs(g,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Outside click and Escape are disabled in this flow."}),t.jsx(f,{onClick:()=>e(!1),children:"I understand"})]})})]})}const S={render:()=>t.jsx(it,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Security checklist"});await o(a).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{Escape}"),await o(a).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"I understand"})),await o(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function ct(){const[n,e]=i.useState(!0),[a,r]=i.useState(0),[y,m]=i.useState(0);return t.jsx(g,{align:"start",children:t.jsxs("div",{style:ze,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:_e}),t.jsxs("p",{style:D,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:D,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:x,children:y})]}),t.jsx(u,{open:n,onOpenChange:e,title:"Guarded drawer",onEscapeKeyDown:p=>{p.preventDefault(),r(B=>B+1)},onPointerDownOutside:p=>{p.preventDefault(),m(B=>B+1)},children:t.jsx("p",{style:w,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const F={render:()=>t.jsx(ct,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=e.getByTestId("drawer-guard-outside-target");await o(await e.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await c.click(a),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function lt(){const[n,e]=i.useState(!0);return t.jsxs(g,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:w,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const O={render:()=>t.jsx(lt,{}),play:async({canvasElement:n})=>{const a=await d(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});l.mouseDown(a,{button:2}),await o(a.style.transform).toContain("translateY(0"),l.mouseDown(a),await b(()=>{o(a.style.transform).toContain("translateY(1px)")}),l.pointerCancel(a),await b(()=>{o(a.style.transform).toContain("translateY(0")}),a.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await b(()=>{o(a.style.transform).toContain("translateY(1px)")}),a.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await b(()=>{o(a.style.transform).toContain("translateY(0")}),l.mouseDown(a),l.mouseUp(a),await o(a.style.transform).toContain("translateY(0")}};function dt(){const[n,e]=i.useState(!0);return t.jsx(g,{align:"start",children:t.jsx(u,{open:n,onOpenChange:e,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const H={render:()=>t.jsx(dt,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("button",{name:"Drawer content action"}),r=await e.findByRole("button",{name:"Focus intent close drawer"});await c.click(a),await o(a).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await o(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),l.mouseDown(r,{button:0,ctrlKey:!0}),await o(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function ut(){const[n,e]=i.useState(!0);return t.jsx(g,{align:"start",children:t.jsx(u,{open:n,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:w,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const P={render:()=>t.jsx(ut,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await o(a).toHaveAttribute("aria-keyshortcuts","Escape");const r=await e.findByRole("button",{name:"Close drawer"});await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),l.keyDown(r,{key:"Enter",ctrlKey:!0}),await b(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyUp(r,{key:"Enter",ctrlKey:!0}),l.keyDown(r,{key:"Enter"}),await b(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Enter"}),await b(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Spacebar"}),await b(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Spacebar"}),await b(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Space"}),await b(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Space"}),await b(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await b(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",keyCode:229,which:229}),await b(()=>{o(r.style.transform).toContain("translateY(0")})}};function yt(){const[n,e]=i.useState(!1),[a,r]=i.useState("none"),[y,m]=i.useState("none");return t.jsx(g,{align:"start",children:t.jsxs("div",{style:ze,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:_e}),t.jsxs("p",{style:D,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:x,children:a})]}),t.jsxs("p",{style:D,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:x,children:y})]}),t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:n,onOpenChange:p=>{e(p),p||m(B=>`${B} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:p=>{r(p),m(`reason:${p}`)},children:t.jsx("p",{style:w,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const K={render:()=>t.jsx(yt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body),r=e.getByTestId("drawer-outside-target");await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(a.getByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await c.pointer({target:r,keys:"[MouseLeft]"}),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function pt(){const[n,e]=i.useState(!1);return t.jsxs(g,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:n,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:w,children:"Use close button and verify trigger focus restoration."})})]})}const N={render:()=>t.jsx(pt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body),r=e.getByRole("button",{name:"Open Focus Return Drawer"});await c.click(r),await o(await a.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(r).toHaveFocus()}};function wt(){const[n,e]=i.useState(!0);return t.jsxs(g,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(f,{children:"Primary drawer action"}),t.jsx(f,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const Y={render:()=>t.jsx(wt,{}),play:async({canvasElement:n})=>{const e=d(n.ownerDocument.body),a=await e.findByRole("button",{name:"Close drawer"}),r=e.getByRole("button",{name:"Primary drawer action"}),y=e.getByRole("button",{name:"Secondary drawer action"}),m=e.getByRole("button",{name:"Outside after drawer"});a.focus(),await o(a).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await c.tab(),await o(y).toHaveFocus(),await c.tab(),await o(a).toHaveFocus(),await o(m).not.toHaveFocus(),await c.tab({shift:!0}),await o(y).toHaveFocus()}};function mt(){const[n,e]=i.useState(!1);return t.jsxs(g,{align:"start",gap:8,children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:n,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:w,children:"Use this mode when close flow intentionally hands off focus."})})]})}const A={render:()=>t.jsx(mt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body),r=e.getByRole("button",{name:"Open No Focus Return Drawer"});await c.click(r),await o(await a.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Close drawer"})),await o(r).not.toHaveFocus()}};function bt(){const[n,e]=i.useState(!1);return t.jsxs(g,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:n,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Escape should close dropdown first, then drawer."}),t.jsx(nt,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const q={render:()=>t.jsx(bt,{}),play:async({canvasElement:n})=>{const e=d(n),a=d(n.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await a.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.click(a.getByRole("button",{name:"Drawer actions"})),await o(a.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(a.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function gt(){const[n,e]=i.useState(!0);return t.jsx(u,{open:n,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:w,children:"Escape should be ignored while IME composition is active."})})}const L={render:()=>t.jsx(gt,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=d(e.body);await o(await a.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",isComposing:!0}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",keyCode:229}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function ft(){const[n,e]=i.useState(!0),[a,r]=i.useState(0);return i.useEffect(()=>{const y=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("keydown",y,!0)}},[]),t.jsxs(g,{align:"start",children:[t.jsxs("p",{style:D,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:x,children:a})]}),t.jsx(u,{open:n,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>r(y=>y+1),children:t.jsx("p",{style:w,children:"Escape should remain preempted by global handlers."})})]})}const M={render:()=>t.jsx(ft,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=d(e.body);await o(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",ctrlKey:!0}),l.keyDown(e,{key:"Escape",altKey:!0}),l.keyDown(e,{key:"Escape",metaKey:!0}),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function vt(){const[n,e]=i.useState(!0),[a,r]=i.useState(0),[y,m]=i.useState("none");return t.jsxs(g,{align:"start",children:[t.jsxs("p",{style:D,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:D,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:x,children:y})]}),t.jsx(u,{open:n,onOpenChange:e,title:"Repeat escape drawer",onEscapeKeyDown:()=>r(p=>p+1),onCloseReason:m,children:t.jsx("p",{style:w,children:"Repeated Escape keydown should not close this drawer."})})]})}const G={render:()=>t.jsx(vt,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=d(e.body);await o(await a.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",repeat:!0}),await o(a.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await c.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var oe,re,se;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,ye;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ye=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var pe,we,me;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(we=O.parameters)==null?void 0:we.docs)==null?void 0:me.source}}};var be,ge,fe;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,he,Be;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Be=(he=P.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var De,xe,Ee;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ee=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var ke,Te,Ce;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ce=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Re,Ie,je;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(je=(Ie=Y.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Se,Fe,Oe;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Oe=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var He,Pe,Ke;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ke=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:Ke.source}}};var Ne,Ye,Ae;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ae=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:Ae.source}}};var qe,Le,Me;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Me=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Ge,Ue,Ve;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ve=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};const jt=["Interactive","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{P as CloseButtonKeyboardPressedState,O as CloseButtonPrimaryPointerOnly,K as CloseReasonTelemetry,F as DismissGuardHooks,L as EscapeIgnoresImeComposition,M as EscapePreemptedByGlobalHandler,G as EscapeRepeatGuard,H as FocusIntentReentry,N as FocusReturn,Y as FocusTrapKeyboardCycle,j as Interactive,q as NestedDismissOrder,A as NoFocusReturn,S as NonDismissible,jt as __namedExportsOrder,It as default};
