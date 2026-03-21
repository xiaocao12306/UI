import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as b}from"./Button-DmF53JnK.js";import{l as Qe,P as Xe,F as Ze}from"./bodyScrollLock-D0vp0S5S.js";import{D as et}from"./DismissableLayer-CvOMiBFU.js";import{D as tt}from"./Dropdown-CuAZbR0g.js";import{within as d,expect as o,fireEvent as l,waitFor as v,userEvent as c}from"./index-DgAF9SIF.js";import{b as g,s as h,a as B}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function u({open:a,side:e="right",title:n,description:r,children:y,restoreFocus:m=!0,closeOnEscape:p=!0,closeOnOutsidePointer:f=!0,showCloseButton:_e=!0,closeLabel:M="Close drawer",onEscapeKeyDown:G,onPointerDownOutside:U,onCloseReason:T,onOpenChange:V}){const J=i.useId(),Q=i.useId(),[z,X]=i.useState(!1),[Z,D]=i.useState(!1),[ee,_]=i.useState(!1),k=i.useRef(!0),$e=i.useRef(null),[x,We]=i.useState(null),Je=typeof M=="string"&&M.trim().length>0?M.trim():"Close drawer",$=i.useCallback(s=>{T==null||T(s),V(!1)},[T,V]);return i.useEffect(()=>{if(!(!a||!x))return Qe(x.ownerDocument)},[a,x]),i.useEffect(()=>{if(!a||!x)return;const s=x.ownerDocument,te=W=>{W.metaKey||W.altKey||W.ctrlKey||(k.current=!0)},E=()=>{k.current=!1};return s.addEventListener("keydown",te,!0),s.addEventListener("pointerdown",E,!0),s.addEventListener("mousedown",E,!0),s.addEventListener("touchstart",E,!0),()=>{s.removeEventListener("keydown",te,!0),s.removeEventListener("pointerdown",E,!0),s.removeEventListener("mousedown",E,!0),s.removeEventListener("touchstart",E,!0)}},[a,x]),a?t.jsx(Xe,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(et,{onEscapeKeyDown:s=>{if(G==null||G(s),!s.defaultPrevented){if(!p){s.preventDefault();return}s.preventDefault(),$("escape-key")}},onPointerDownOutside:s=>{if(U==null||U(s),!s.defaultPrevented){if(!f){s.preventDefault();return}s.preventDefault(),$("outside-pointer")}},onDismiss:()=>V(!1),children:t.jsx(Ze,{restoreFocus:m,children:t.jsxs("aside",{ref:s=>{$e.current=s,We(s)},role:"dialog","aria-modal":"true","aria-labelledby":J,"aria-describedby":r?Q:void 0,"aria-keyshortcuts":p?"Escape":void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:J,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),r?t.jsx("p",{id:Q,style:{margin:0,color:"var(--aurora-text-secondary)"},children:r}):null]}),_e?t.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>$("close-button"),"aria-label":Je,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{X(!0)},onMouseLeave:()=>{X(!1),D(!1)},onMouseDown:s=>{s.button===0&&(k.current=!1,_(!1)),s.button===0&&D(!0)},onMouseUp:s=>{s.button===0&&D(!1)},onKeyDown:s=>{k.current=!0,!ot(s)&&ae(s.key)&&!nt(s)&&D(!0)},onKeyUp:s=>{ae(s.key)&&D(!1)},onFocus:s=>{_(at(s.currentTarget,k.current))},onBlur:()=>{_(!1),D(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:z||ee?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:Z?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":z?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:z?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ee?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:Z?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:y})]})})})})}):null}function at(a,e){try{return a.matches(":focus-visible")}catch{return e}}function ae(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function nt(a){return a.altKey||a.ctrlKey||a.metaKey}function ot(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Ct={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},R={display:"grid",gap:10},Ve={display:"grid",gap:10,justifyItems:"start"},w={margin:0},ze={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function rt(){const[a,e]=i.useState(!1);return t.jsxs(g,{align:"start",children:[t.jsx(b,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:w,children:"Use this panel to narrow incident review scope."}),t.jsx(b,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const C={render:()=>t.jsx(rt,{}),play:async({canvasElement:a})=>{const e=d(a),n=d(a.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Drawer"})),await o(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await o(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function st(){const[a,e]=i.useState(!0);return t.jsxs(g,{align:"start",children:[t.jsx(b,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:w,children:"Outside click and Escape are disabled in this flow."}),t.jsx(b,{onClick:()=>e(!1),children:"I understand"})]})})]})}const I={render:()=>t.jsx(st,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Security checklist"});await o(n).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{Escape}"),await o(n).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"I understand"})),await o(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function it(){const[a,e]=i.useState(!0),[n,r]=i.useState(0),[y,m]=i.useState(0);return t.jsx(g,{align:"start",children:t.jsxs("div",{style:Ve,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:ze}),t.jsxs("p",{style:h,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:B,children:n})]}),t.jsxs("p",{style:h,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:B,children:y})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Guarded drawer",onEscapeKeyDown:p=>{p.preventDefault(),r(f=>f+1)},onPointerDownOutside:p=>{p.preventDefault(),m(f=>f+1)},children:t.jsx("p",{style:w,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const j={render:()=>t.jsx(it,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),n=e.getByTestId("drawer-guard-outside-target");await o(await e.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await c.click(n),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function ct(){const[a,e]=i.useState(!0);return t.jsxs(g,{align:"start",children:[t.jsx(b,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:w,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const S={render:()=>t.jsx(ct,{}),play:async({canvasElement:a})=>{const n=await d(a.ownerDocument.body).findByRole("button",{name:"Close drawer"});l.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),l.mouseDown(n),l.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function lt(){const[a,e]=i.useState(!0);return t.jsx(g,{align:"start",children:t.jsx(u,{open:a,onOpenChange:e,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:w,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const F={render:()=>t.jsx(lt,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),n=await e.findByRole("button",{name:"Drawer content action"}),r=await e.findByRole("button",{name:"Focus intent close drawer"});await c.click(n),await o(n).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await o(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function dt(){const[a,e]=i.useState(!0);return t.jsx(g,{align:"start",children:t.jsx(u,{open:a,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:w,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const O={render:()=>t.jsx(dt,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await o(n).toHaveAttribute("aria-keyshortcuts","Escape");const r=await e.findByRole("button",{name:"Close drawer"});await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),l.keyDown(r,{key:"Enter",ctrlKey:!0}),await v(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyUp(r,{key:"Enter",ctrlKey:!0}),l.keyDown(r,{key:"Enter"}),await v(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Enter"}),await v(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Spacebar"}),await v(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Spacebar"}),await v(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Space"}),await v(()=>{o(r.style.transform).toContain("translateY(1px)")}),l.keyUp(r,{key:"Space"}),await v(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await v(()=>{o(r.style.transform).toContain("translateY(0")}),l.keyDown(r,{key:"Enter",keyCode:229,which:229}),await v(()=>{o(r.style.transform).toContain("translateY(0")})}};function ut(){const[a,e]=i.useState(!1),[n,r]=i.useState("none"),[y,m]=i.useState("none");return t.jsx(g,{align:"start",children:t.jsxs("div",{style:Ve,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:ze}),t.jsxs("p",{style:h,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:B,children:n})]}),t.jsxs("p",{style:h,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:B,children:y})]}),t.jsx(b,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:a,onOpenChange:p=>{e(p),p||m(f=>`${f} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:p=>{r(p),m(`reason:${p}`)},children:t.jsx("p",{style:w,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const H={render:()=>t.jsx(ut,{}),play:async({canvasElement:a})=>{const e=d(a),n=d(a.ownerDocument.body),r=e.getByTestId("drawer-outside-target");await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.pointer({target:r,keys:"[MouseLeft]"}),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function yt(){const[a,e]=i.useState(!1);return t.jsxs(g,{align:"start",children:[t.jsx(b,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:w,children:"Use close button and verify trigger focus restoration."})})]})}const P={render:()=>t.jsx(yt,{}),play:async({canvasElement:a})=>{const e=d(a),n=d(a.ownerDocument.body),r=e.getByRole("button",{name:"Open Focus Return Drawer"});await c.click(r),await o(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await o(r).toHaveFocus()}};function pt(){const[a,e]=i.useState(!0);return t.jsxs(g,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:w,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(b,{children:"Primary drawer action"}),t.jsx(b,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const K={render:()=>t.jsx(pt,{}),play:async({canvasElement:a})=>{const e=d(a.ownerDocument.body),n=await e.findByRole("button",{name:"Close drawer"}),r=e.getByRole("button",{name:"Primary drawer action"}),y=e.getByRole("button",{name:"Secondary drawer action"}),m=e.getByRole("button",{name:"Outside after drawer"});n.focus(),await o(n).toHaveFocus(),await c.tab(),await o(r).toHaveFocus(),await c.tab(),await o(y).toHaveFocus(),await c.tab(),await o(n).toHaveFocus(),await o(m).not.toHaveFocus(),await c.tab({shift:!0}),await o(y).toHaveFocus()}};function wt(){const[a,e]=i.useState(!1);return t.jsxs(g,{align:"start",gap:8,children:[t.jsx(b,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:w,children:"Use this mode when close flow intentionally hands off focus."})})]})}const N={render:()=>t.jsx(wt,{}),play:async({canvasElement:a})=>{const e=d(a),n=d(a.ownerDocument.body),r=e.getByRole("button",{name:"Open No Focus Return Drawer"});await c.click(r),await o(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await o(r).not.toHaveFocus()}};function mt(){const[a,e]=i.useState(!1);return t.jsxs(g,{align:"start",children:[t.jsx(b,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:w,children:"Escape should close dropdown first, then drawer."}),t.jsx(tt,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const q={render:()=>t.jsx(mt,{}),play:async({canvasElement:a})=>{const e=d(a),n=d(a.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Drawer actions"})),await o(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function gt(){const[a,e]=i.useState(!0);return t.jsx(u,{open:a,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:w,children:"Escape should be ignored while IME composition is active."})})}const A={render:()=>t.jsx(gt,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=d(e.body);await o(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",isComposing:!0}),await o(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",keyCode:229}),await o(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function bt(){const[a,e]=i.useState(!0),[n,r]=i.useState(0);return i.useEffect(()=>{const y=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("keydown",y,!0)}},[]),t.jsxs(g,{align:"start",children:[t.jsxs("p",{style:h,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:B,children:n})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>r(y=>y+1),children:t.jsx("p",{style:w,children:"Escape should remain preempted by global handlers."})})]})}const Y={render:()=>t.jsx(bt,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=d(e.body);await o(await n.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",ctrlKey:!0}),l.keyDown(e,{key:"Escape",altKey:!0}),l.keyDown(e,{key:"Escape",metaKey:!0}),await o(n.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await o(n.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function vt(){const[a,e]=i.useState(!0),[n,r]=i.useState(0),[y,m]=i.useState("none");return t.jsxs(g,{align:"start",children:[t.jsxs("p",{style:h,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:B,children:n})]}),t.jsxs("p",{style:h,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:B,children:y})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Repeat escape drawer",onEscapeKeyDown:()=>r(p=>p+1),onCloseReason:m,children:t.jsx("p",{style:w,children:"Repeated Escape keydown should not close this drawer."})})]})}const L={render:()=>t.jsx(vt,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=d(e.body);await o(await n.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",repeat:!0}),await o(n.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(n.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await c.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(n.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(n.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var ne,oe,re;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,ce;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ye,pe,we;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    fireEvent.mouseUp(closeButton);
    await expect(closeButton.style.transform).toContain("translateY(0");
  }
}`,...(we=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:we.source}}};var me,ge,be;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
  }
}`,...(be=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,fe,he;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var Be,De,xe;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
}`,...(xe=(De=H.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var Ee,ke,Re;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Re=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Te,Ce,Ie;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ie=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var je,Se,Fe;N.parameters={...N.parameters,docs:{...(je=N.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var Oe,He,Pe;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Pe=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Pe.source}}};var Ke,Ne,qe;A.parameters={...A.parameters,docs:{...(Ke=A.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Ae,Ye,Le;Y.parameters={...Y.parameters,docs:{...(Ae=Y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(Ye=Y.parameters)==null?void 0:Ye.docs)==null?void 0:Le.source}}};var Me,Ge,Ue;L.parameters={...L.parameters,docs:{...(Me=L.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};const It=["Interactive","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{O as CloseButtonKeyboardPressedState,S as CloseButtonPrimaryPointerOnly,H as CloseReasonTelemetry,j as DismissGuardHooks,A as EscapeIgnoresImeComposition,Y as EscapePreemptedByGlobalHandler,L as EscapeRepeatGuard,F as FocusIntentReentry,P as FocusReturn,K as FocusTrapKeyboardCycle,C as Interactive,q as NestedDismissOrder,N as NoFocusReturn,I as NonDismissible,It as __namedExportsOrder,Ct as default};
