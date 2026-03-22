import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as f}from"./Button-DirECuRH.js";import{l as kt,P as Tt,F as Rt}from"./bodyScrollLock-D0vp0S5S.js";import{D as Ct}from"./DismissableLayer-0MVldSzJ.js";import{D as It}from"./Dropdown-D5fDLn-l.js";import{within as l,expect as r,fireEvent as d,waitFor as g,userEvent as c}from"./index-DgAF9SIF.js";import{b as p,s as x,a as B}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function u({open:a,side:e="right",title:n,description:o,children:w,restoreFocus:b=!0,closeOnEscape:m=!0,closeOnOutsidePointer:D=!0,showCloseButton:ht=!0,closeLabel:J="Close drawer",ariaLabel:Q,ariaLabelledBy:X,onEscapeKeyDown:Z,onPointerDownOutside:ee,onCloseReason:C,onOpenChange:te}){const se=i.useId(),ie=i.useId(),ce=gt(o),[ae,le]=i.useState(!1),[de,v]=i.useState(!1),[ue,I]=i.useState(!1),E=i.useRef(!0);i.useRef(null);const Dt=i.useRef(null),[k,xt]=i.useState(null),Bt=typeof J=="string"&&J.trim().length>0?J.trim():"Close drawer",j=typeof X=="string"&&X.trim().length>0?X.trim():void 0,ye=j===void 0&&typeof Q=="string"&&Q.trim().length>0?Q.trim():void 0,pe=oe(n).length>0,we=j?void 0:ye??(pe?void 0:"Drawer"),Et=ye!==void 0||j!==void 0,ne=i.useCallback(s=>{C==null||C(s),te(!1)},[C,te]);return i.useEffect(()=>{},[Et,pe]),i.useEffect(()=>{if(!(!a||!k))return kt(k.ownerDocument)},[a,k]),i.useEffect(()=>{if(!a||!k)return;const s=k.ownerDocument,me=h=>{h.metaKey||h.altKey||h.ctrlKey||(E.current=!0)},T=h=>{"button"in h&&!re(h.button)||"ctrlKey"in h&&h.ctrlKey||(E.current=!1)};return s.addEventListener("keydown",me,!0),s.addEventListener("pointerdown",T,!0),s.addEventListener("mousedown",T,!0),s.addEventListener("touchstart",T,!0),()=>{s.removeEventListener("keydown",me,!0),s.removeEventListener("pointerdown",T,!0),s.removeEventListener("mousedown",T,!0),s.removeEventListener("touchstart",T,!0)}},[a,k]),a?t.jsx(Tt,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(Ct,{onEscapeKeyDown:s=>{if(Z==null||Z(s),!s.defaultPrevented){if(!m){s.preventDefault();return}s.preventDefault(),ne("escape-key")}},onPointerDownOutside:s=>{if(ee==null||ee(s),!s.defaultPrevented){if(!D){s.preventDefault();return}s.preventDefault(),ne("outside-pointer")}},onDismiss:()=>te(!1),children:t.jsx(Rt,{restoreFocus:b,children:t.jsxs("aside",{ref:s=>{Dt.current=s,xt(s)},role:"dialog","aria-modal":"true","aria-label":we,"aria-labelledby":j??(we?void 0:se),"aria-describedby":ce?ie:void 0,"aria-keyshortcuts":m?"Escape":void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:se,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),ce?t.jsx("p",{id:ie,style:{margin:0,color:"var(--aurora-text-secondary)"},children:o}):null]}),ht?t.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>ne("close-button"),"aria-label":Bt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{le(!0)},onMouseLeave:()=>{le(!1),v(!1)},onPointerDown:s=>{s.ctrlKey||re(s.button)&&(E.current=!1,I(!1),v(!0))},onPointerUp:s=>{re(s.button)&&v(!1)},onMouseDown:s=>{s.button===0&&!s.ctrlKey&&(E.current=!1,I(!1)),s.button===0&&!s.ctrlKey&&v(!0)},onMouseUp:s=>{s.button===0&&v(!1)},onPointerCancel:()=>{v(!1)},onKeyDown:s=>{E.current=!0,!Ft(s)&&be(s.key)&&!St(s)&&v(!0)},onKeyUp:s=>{be(s.key)&&v(!1)},onFocus:s=>{I(jt(s.currentTarget,E.current))},onBlur:()=>{I(!1),v(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ae||ue?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:de?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ae?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:ae?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ue?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:de?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:w})]})})})})}):null}function jt(a,e){try{return a.matches(":focus-visible")||e}catch{return e}}function re(a){return typeof a!="number"||a<=0}function be(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function St(a){return a.altKey||a.ctrlKey||a.metaKey}function Ft(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function oe(a){if(typeof a=="string")return S(a);if(typeof a=="number")return S(String(a));if(Array.isArray(a))return S(a.map(n=>oe(n)).filter(n=>n.length>0).join(" "));if(!i.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?S(e["aria-label"]):oe(e.children)}function gt(a){return a==null||typeof a=="boolean"?!1:typeof a=="string"?a.trim().length>0:typeof a=="number"?!0:Array.isArray(a)?a.some(e=>gt(e)):i.isValidElement(a)}function S(a){return a.replace(/\s+/g," ").trim()}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const sa={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},R={display:"grid",gap:10},ft={display:"grid",gap:10,justifyItems:"start"},y={margin:0},vt={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Ht(){const[a,e]=i.useState(!1);return t.jsxs(p,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Use this panel to narrow incident review scope."}),t.jsx(f,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const F={render:()=>t.jsx(Ht,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Drawer"})),await r(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await r(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function Ot(){const[a,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx("h3",{id:"drawer-heading",style:{margin:0},children:"Release checklist drawer heading"}),t.jsx(u,{open:a,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist drawer",ariaLabelledBy:"drawer-heading",children:t.jsx("p",{style:y,children:"Drawer name should follow visible heading binding."})})]})}const H={render:()=>t.jsx(Ot,{}),play:async({canvasElement:a})=>{const n=await l(a.ownerDocument.body).findByRole("dialog",{name:"Release checklist drawer heading"});await r(n).toHaveAttribute("aria-labelledby","drawer-heading"),await r(n).not.toHaveAttribute("aria-label")}};function At(){const[a,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:a,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings drawer",children:t.jsx("p",{style:y,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const O={render:()=>t.jsx(At,{}),play:async({canvasElement:a})=>{const n=await l(a.ownerDocument.body).findByRole("dialog",{name:"Automation settings drawer"});await r(n).toHaveAttribute("aria-label","Automation settings drawer"),await r(n).not.toHaveAttribute("aria-labelledby")}};function Pt(){const[a,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:a,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),children:t.jsx("p",{style:y,children:"Icon-only title now keeps fallback drawer naming."})})})}const A={render:()=>t.jsx(Pt,{}),play:async({canvasElement:a})=>{const n=await l(a.ownerDocument.body).findByRole("dialog",{name:"Drawer"});await r(n).toHaveAttribute("aria-label","Drawer"),await r(n).not.toHaveAttribute("aria-labelledby")}};function Nt(){const[a,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:a,onOpenChange:e,title:"Numeric description drawer",description:0,children:t.jsx("p",{style:y,children:"Drawer description supports numeric ReactNode content."})})})}const P={render:()=>t.jsx(Nt,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Numeric description drawer"}),o=e.getAllByText("0");await r(o).toHaveLength(1),await r(o[0].tagName).toBe("P"),await r(n).toHaveAttribute("aria-describedby",o[0].id)}};function Kt(){const[a,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Outside click and Escape are disabled in this flow."}),t.jsx(f,{onClick:()=>e(!1),children:"I understand"})]})})]})}const N={render:()=>t.jsx(Kt,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Security checklist"});await r(n).not.toHaveAttribute("aria-keyshortcuts"),await c.keyboard("{Escape}"),await r(n).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"I understand"})),await r(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function Lt(){const[a,e]=i.useState(!0),[n,o]=i.useState(0),[w,b]=i.useState(0);return t.jsx(p,{align:"start",children:t.jsxs("div",{style:ft,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:vt}),t.jsxs("p",{style:x,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:B,children:n})]}),t.jsxs("p",{style:x,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:B,children:w})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Guarded drawer",onEscapeKeyDown:m=>{m.preventDefault(),o(D=>D+1)},onPointerDownOutside:m=>{m.preventDefault(),b(D=>D+1)},children:t.jsx("p",{style:y,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const K={render:()=>t.jsx(Lt,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=e.getByTestId("drawer-guard-outside-target");await r(await e.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await c.click(n),await r(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function Yt(){const[a,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:y,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const L={render:()=>t.jsx(Yt,{}),play:async({canvasElement:a})=>{const n=await l(a.ownerDocument.body).findByRole("button",{name:"Close drawer"});d.mouseDown(n,{button:2}),await r(n.style.transform).toContain("translateY(0"),d.mouseDown(n),await g(()=>{r(n.style.transform).toContain("translateY(1px)")}),d.pointerCancel(n),await g(()=>{r(n.style.transform).toContain("translateY(0")}),n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{r(n.style.transform).toContain("translateY(1px)")}),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{r(n.style.transform).toContain("translateY(0")}),d.mouseDown(n),d.mouseUp(n),await r(n.style.transform).toContain("translateY(0")}};function qt(){const[a,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:a,onOpenChange:e,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const Y={render:()=>t.jsx(qt,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=await e.findByRole("button",{name:"Drawer content action"}),o=await e.findByRole("button",{name:"Focus intent close drawer"});await c.click(n),await r(n).toHaveFocus(),await c.tab(),await r(o).toHaveFocus(),await r(o.getAttribute("style")).toContain("var(--aurora-focus-ring)"),d.mouseDown(o,{button:0,ctrlKey:!0}),await r(o.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function Mt(){const[a,e]=i.useState(!0);return t.jsx(p,{align:"start",children:t.jsx(u,{open:a,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:y,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const q={render:()=>t.jsx(Mt,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await r(n).toHaveAttribute("aria-keyshortcuts","Escape");const o=await e.findByRole("button",{name:"Close drawer"});await r(o).toHaveAttribute("aria-keyshortcuts","Enter Space"),o.focus(),d.keyDown(o,{key:"Enter",ctrlKey:!0}),await g(()=>{r(o.style.transform).toContain("translateY(0")}),d.keyUp(o,{key:"Enter",ctrlKey:!0}),d.keyDown(o,{key:"Enter"}),await g(()=>{r(o.style.transform).toContain("translateY(1px)")}),d.keyUp(o,{key:"Enter"}),await g(()=>{r(o.style.transform).toContain("translateY(0")}),d.keyDown(o,{key:"Spacebar"}),await g(()=>{r(o.style.transform).toContain("translateY(1px)")}),d.keyUp(o,{key:"Spacebar"}),await g(()=>{r(o.style.transform).toContain("translateY(0")}),d.keyDown(o,{key:"Space"}),await g(()=>{r(o.style.transform).toContain("translateY(1px)")}),d.keyUp(o,{key:"Space"}),await g(()=>{r(o.style.transform).toContain("translateY(0")}),d.keyDown(o,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await g(()=>{r(o.style.transform).toContain("translateY(0")}),d.keyDown(o,{key:"Enter",keyCode:229,which:229}),await g(()=>{r(o.style.transform).toContain("translateY(0")})}};function Gt(){const[a,e]=i.useState(!1),[n,o]=i.useState("none"),[w,b]=i.useState("none");return t.jsx(p,{align:"start",children:t.jsxs("div",{style:ft,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:vt}),t.jsxs("p",{style:x,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:B,children:n})]}),t.jsxs("p",{style:x,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:B,children:w})]}),t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:a,onOpenChange:m=>{e(m),m||b(D=>`${D} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:m=>{o(m),b(`reason:${m}`)},children:t.jsx("p",{style:y,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const M={render:()=>t.jsx(Gt,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body),o=e.getByTestId("drawer-outside-target");await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),o.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await r(n.getByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await c.pointer({target:o,keys:"[MouseLeft]"}),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Ut(){const[a,e]=i.useState(!1);return t.jsxs(p,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:y,children:"Use close button and verify trigger focus restoration."})})]})}const G={render:()=>t.jsx(Ut,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body),o=e.getByRole("button",{name:"Open Focus Return Drawer"});await c.click(o),await r(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await r(o).toHaveFocus()}};function Vt(){const[a,e]=i.useState(!0);return t.jsxs(p,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(f,{children:"Primary drawer action"}),t.jsx(f,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const U={render:()=>t.jsx(Vt,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=await e.findByRole("button",{name:"Close drawer"}),o=e.getByRole("button",{name:"Primary drawer action"}),w=e.getByRole("button",{name:"Secondary drawer action"}),b=e.getByRole("button",{name:"Outside after drawer"});n.focus(),await r(n).toHaveFocus(),await c.tab(),await r(o).toHaveFocus(),await c.tab(),await r(w).toHaveFocus(),await c.tab(),await r(n).toHaveFocus(),await r(b).not.toHaveFocus(),await c.tab({shift:!0}),await r(w).toHaveFocus()}};function zt(){const[a,e]=i.useState(!1);return t.jsxs(p,{align:"start",gap:8,children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:y,children:"Use this mode when close flow intentionally hands off focus."})})]})}const V={render:()=>t.jsx(zt,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body),o=e.getByRole("button",{name:"Open No Focus Return Drawer"});await c.click(o),await r(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Close drawer"})),await r(o).not.toHaveFocus()}};function _t(){const[a,e]=i.useState(!1);return t.jsxs(p,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:R,children:[t.jsx("p",{style:y,children:"Escape should close dropdown first, then drawer."}),t.jsx(It,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const z={render:()=>t.jsx(_t,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body);await c.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.click(n.getByRole("button",{name:"Drawer actions"})),await r(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await r(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function $t(){const[a,e]=i.useState(!0);return t.jsx(u,{open:a,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:y,children:"Escape should be ignored while IME composition is active."})})}const _={render:()=>t.jsx($t,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=l(e.body);await r(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",isComposing:!0}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",keyCode:229}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function Wt(){const[a,e]=i.useState(!0),[n,o]=i.useState(0);return i.useEffect(()=>{const w=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",w,!0),()=>{document.removeEventListener("keydown",w,!0)}},[]),t.jsxs(p,{align:"start",children:[t.jsxs("p",{style:x,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:B,children:n})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>o(w=>w+1),children:t.jsx("p",{style:y,children:"Escape should remain preempted by global handlers."})})]})}const $={render:()=>t.jsx(Wt,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=l(e.body);await r(await n.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",ctrlKey:!0}),d.keyDown(e,{key:"Escape",altKey:!0}),d.keyDown(e,{key:"Escape",metaKey:!0}),await r(n.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(n.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await c.keyboard("{Escape}"),await r(n.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(n.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function Jt(){const[a,e]=i.useState(!0),[n,o]=i.useState(0),[w,b]=i.useState("none");return t.jsxs(p,{align:"start",children:[t.jsxs("p",{style:x,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:B,children:n})]}),t.jsxs("p",{style:x,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:B,children:w})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Repeat escape drawer",onEscapeKeyDown:()=>o(m=>m+1),onCloseReason:b,children:t.jsx("p",{style:y,children:"Repeated Escape keydown should not close this drawer."})})]})}const W={render:()=>t.jsx(Jt,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=l(e.body);await r(await n.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",repeat:!0}),await r(n.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await r(n.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await r(n.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await c.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await r(n.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await r(n.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var ge,fe,ve;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var he,De,xe;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(De=H.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var Be,Ee,ke;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Te,Re,Ce;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <NonTextTitleAutoNameFallbackDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", {
      name: "Drawer"
    });
    await expect(drawer).toHaveAttribute("aria-label", "Drawer");
    await expect(drawer).not.toHaveAttribute("aria-labelledby");
  }
}`,...(Ce=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var Ie,je,Se;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Fe,He,Oe;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Oe=(He=N.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Ae,Pe,Ne;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ne=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var Ke,Le,Ye;L.parameters={...L.parameters,docs:{...(Ke=L.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ye=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Ye.source}}};var qe,Me,Ge;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ge=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var Ue,Ve,ze;q.parameters={...q.parameters,docs:{...(Ue=q.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(ze=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var _e,$e,We;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(We=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};var Je,Qe,Xe;G.parameters={...G.parameters,docs:{...(Je=G.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=G.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=U.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,rt;V.parameters={...V.parameters,docs:{...(at=V.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(nt=V.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var ot,st,it;z.parameters={...z.parameters,docs:{...(ot=z.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(st=z.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,lt,dt;_.parameters={..._.parameters,docs:{...(ct=_.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(lt=_.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,yt,pt;$.parameters={...$.parameters,docs:{...(ut=$.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(yt=$.parameters)==null?void 0:yt.docs)==null?void 0:pt.source}}};var wt,mt,bt;W.parameters={...W.parameters,docs:{...(wt=W.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(bt=(mt=W.parameters)==null?void 0:mt.docs)==null?void 0:bt.source}}};const ia=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonTextTitleAutoNameFallback","NumericDescriptionSemantics","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{q as CloseButtonKeyboardPressedState,L as CloseButtonPrimaryPointerOnly,M as CloseReasonTelemetry,K as DismissGuardHooks,_ as EscapeIgnoresImeComposition,$ as EscapePreemptedByGlobalHandler,W as EscapeRepeatGuard,Y as FocusIntentReentry,G as FocusReturn,U as FocusTrapKeyboardCycle,O as IconTitleAriaLabelFallback,F as Interactive,H as LabelledByPrecedence,z as NestedDismissOrder,V as NoFocusReturn,N as NonDismissible,A as NonTextTitleAutoNameFallback,P as NumericDescriptionSemantics,ia as __namedExportsOrder,sa as default};
