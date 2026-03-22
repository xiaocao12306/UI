import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as f}from"./Button-B21ouHNm.js";import{l as jt,P as St,F as Ft}from"./bodyScrollLock-DU3WNas9.js";import{D as Ht}from"./focusTabbable-gnwmp6b7.js";import{D as Ot}from"./Dropdown-6geyszt7.js";import{within as u,expect as r,fireEvent as d,waitFor as b,userEvent as l}from"./index-DgAF9SIF.js";import{b as m,s as B,a as x}from"./storyShowcase-DlKirntE.js";import"./index-DlVbWVVj.js";function y({open:n,side:e="right",title:a,description:c,children:s,restoreFocus:g=!0,closeOnEscape:p=!0,closeOnOutsidePointer:D=!0,showCloseButton:Et=!0,closeLabel:Q="Close drawer",ariaLabel:X,ariaLabelledBy:Z,onEscapeKeyDown:ee,onPointerDownOutside:te,onCloseButtonKeyDown:ne,onCloseReason:R,onOpenChange:ae}){const ce=i.useId(),le=i.useId(),de=Bt(c),[re,ue]=i.useState(!1),[ye,v]=i.useState(!1),[pe,I]=i.useState(!1),k=i.useRef(!0);i.useRef(null);const Tt=i.useRef(null),[E,Ct]=i.useState(null),Rt=typeof Q=="string"&&Q.trim().length>0?Q.trim():"Close drawer",j=typeof Z=="string"&&Z.trim().length>0?Z.trim():void 0,we=j===void 0&&typeof X=="string"&&X.trim().length>0?X.trim():void 0,me=ie(a).length>0,be=j?void 0:we??(me?void 0:"Drawer"),It=we!==void 0||j!==void 0,oe=i.useCallback(o=>{R==null||R(o),ae(!1)},[R,ae]);return i.useEffect(()=>{},[It,me]),i.useEffect(()=>{if(!(!n||!E))return jt(E.ownerDocument)},[n,E]),i.useEffect(()=>{if(!n||!E)return;const o=E.ownerDocument,ge=h=>{h.metaKey||h.altKey||h.ctrlKey||(k.current=!0)},T=h=>{"button"in h&&!se(h.button)||"ctrlKey"in h&&h.ctrlKey||(k.current=!1)};return o.addEventListener("keydown",ge,!0),o.addEventListener("pointerdown",T,!0),o.addEventListener("mousedown",T,!0),o.addEventListener("touchstart",T,!0),()=>{o.removeEventListener("keydown",ge,!0),o.removeEventListener("pointerdown",T,!0),o.removeEventListener("mousedown",T,!0),o.removeEventListener("touchstart",T,!0)}},[n,E]),n?t.jsx(St,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(Ht,{onEscapeKeyDown:o=>{if(ee==null||ee(o),!o.defaultPrevented){if(!p){o.preventDefault();return}o.preventDefault(),oe("escape-key")}},onPointerDownOutside:o=>{if(te==null||te(o),!o.defaultPrevented){if(!D){o.preventDefault();return}o.preventDefault(),oe("outside-pointer")}},onDismiss:()=>ae(!1),children:t.jsx(Ft,{restoreFocus:g,children:t.jsxs("aside",{ref:o=>{Tt.current=o,Ct(o)},role:"dialog","aria-modal":"true","aria-label":be,"aria-labelledby":j??(be?void 0:ce),"aria-describedby":de?le:void 0,"aria-keyshortcuts":p?"Escape":void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:ce,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:a}),de?t.jsx("p",{id:le,style:{margin:0,color:"var(--aurora-text-secondary)"},children:c}):null]}),Et?t.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>oe("close-button"),"aria-label":Rt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{ue(!0)},onMouseLeave:()=>{ue(!1),v(!1)},onPointerDown:o=>{o.ctrlKey||se(o.button)&&(k.current=!1,I(!1),v(!0))},onPointerUp:o=>{se(o.button)&&v(!1)},onMouseDown:o=>{o.button===0&&!o.ctrlKey&&(k.current=!1,I(!1)),o.button===0&&!o.ctrlKey&&v(!0)},onMouseUp:o=>{o.button===0&&v(!1)},onPointerCancel:()=>{v(!1)},onKeyDown:o=>{k.current=!0,ne==null||ne(o),!o.defaultPrevented&&(Nt(o)||fe(o.key)&&!Pt(o)&&v(!0))},onKeyUp:o=>{fe(o.key)&&v(!1)},onFocus:o=>{I(At(o.currentTarget,k.current))},onBlur:()=>{I(!1),v(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:re||pe?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:ye?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":re?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:re?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:pe?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:ye?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:s})]})})})})}):null}function At(n,e){try{return n.matches(":focus-visible")||e}catch{return e}}function se(n){return typeof n!="number"||n<=0}function fe(n){return n==="Enter"||n===" "||n==="Space"||n==="Spacebar"}function Pt(n){return n.altKey||n.ctrlKey||n.metaKey}function Nt(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ie(n){if(typeof n=="string")return S(n);if(typeof n=="number")return S(String(n));if(Array.isArray(n))return S(n.map(a=>ie(a)).filter(a=>a.length>0).join(" "));if(!i.isValidElement(n))return"";const e=n.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?S(e["aria-label"]):ie(e.children)}function Bt(n){return n==null||typeof n=="boolean"?!1:typeof n=="string"?n.trim().length>0:typeof n=="number"?!0:Array.isArray(n)?n.some(e=>Bt(e)):i.isValidElement(n)}function S(n){return n.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseButtonKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const pn={title:"Overlay/Drawer",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},C={display:"grid",gap:10},xt={display:"grid",gap:10,justifyItems:"start"},w={margin:0},kt={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Kt(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(y,{open:n,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Use this panel to narrow incident review scope."}),t.jsx(f,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const F={render:()=>t.jsx(Kt,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body);await l.click(e.getByRole("button",{name:"Open Drawer"})),await r(await a.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await r(a.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function Lt(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx("h3",{id:"drawer-heading",style:{margin:0},children:"Release checklist drawer heading"}),t.jsx(y,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist drawer",ariaLabelledBy:"drawer-heading",children:t.jsx("p",{style:w,children:"Drawer name should follow visible heading binding."})})]})}const H={render:()=>t.jsx(Lt,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("dialog",{name:"Release checklist drawer heading"});await r(a).toHaveAttribute("aria-labelledby","drawer-heading"),await r(a).not.toHaveAttribute("aria-label")}};function Yt(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings drawer",children:t.jsx("p",{style:w,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const O={render:()=>t.jsx(Yt,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("dialog",{name:"Automation settings drawer"});await r(a).toHaveAttribute("aria-label","Automation settings drawer"),await r(a).not.toHaveAttribute("aria-labelledby")}};function qt(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),children:t.jsx("p",{style:w,children:"Icon-only title now keeps fallback drawer naming."})})})}const A={render:()=>t.jsx(qt,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("dialog",{name:"Drawer"});await r(a).toHaveAttribute("aria-label","Drawer"),await r(a).not.toHaveAttribute("aria-labelledby")}};function Mt(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:"Numeric description drawer",description:0,children:t.jsx("p",{style:w,children:"Drawer description supports numeric ReactNode content."})})})}const P={render:()=>t.jsx(Mt,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Numeric description drawer"}),c=e.getAllByText("0");await r(c).toHaveLength(1),await r(c[0].tagName).toBe("P"),await r(a).toHaveAttribute("aria-describedby",c[0].id)}};function Ut(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Outside click and Escape are disabled in this flow."}),t.jsx(f,{onClick:()=>e(!1),children:"I understand"})]})})]})}const N={render:()=>t.jsx(Ut,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Security checklist"});await r(a).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{Escape}"),await r(a).toBeInTheDocument(),await l.click(e.getByRole("button",{name:"I understand"})),await r(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function Gt(){const[n,e]=i.useState(!0),[a,c]=i.useState(0),[s,g]=i.useState(0);return t.jsx(m,{align:"start",children:t.jsxs("div",{style:xt,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:kt}),t.jsxs("p",{style:B,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:B,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:x,children:s})]}),t.jsx(y,{open:n,onOpenChange:e,title:"Guarded drawer",onEscapeKeyDown:p=>{p.preventDefault(),c(D=>D+1)},onPointerDownOutside:p=>{p.preventDefault(),g(D=>D+1)},children:t.jsx("p",{style:w,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const K={render:()=>t.jsx(Gt,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=e.getByTestId("drawer-guard-outside-target");await r(await e.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await l.click(a),await r(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function Vt(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:w,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const L={render:()=>t.jsx(Vt,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});d.mouseDown(a,{button:2}),await r(a.style.transform).toContain("translateY(0"),d.mouseDown(a),await b(()=>{r(a.style.transform).toContain("translateY(1px)")}),d.pointerCancel(a),await b(()=>{r(a.style.transform).toContain("translateY(0")}),a.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await b(()=>{r(a.style.transform).toContain("translateY(1px)")}),a.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await b(()=>{r(a.style.transform).toContain("translateY(0")}),d.mouseDown(a),d.mouseUp(a),await r(a.style.transform).toContain("translateY(0")}};function zt(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const Y={render:()=>t.jsx(zt,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("button",{name:"Drawer content action"}),c=await e.findByRole("button",{name:"Focus intent close drawer"});await l.click(a),await r(a).toHaveFocus(),await l.tab(),await r(c).toHaveFocus(),await r(c.getAttribute("style")).toContain("var(--aurora-focus-ring)"),d.mouseDown(c,{button:0,ctrlKey:!0}),await r(c.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function _t(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:w,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const q={render:()=>t.jsx(_t,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=n.ownerDocument,c=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await r(c).toHaveAttribute("aria-keyshortcuts","Escape");const s=await e.findByRole("button",{name:"Close drawer"});await r(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),s.focus(),d.keyDown(s,{key:"Enter",ctrlKey:!0}),await b(()=>{r(s.style.transform).toContain("translateY(0")}),d.keyUp(s,{key:"Enter",ctrlKey:!0});const g=p=>{(p.key==="Enter"||p.key===" "||p.key==="Space"||p.key==="Spacebar")&&p.preventDefault()};try{a.addEventListener("keydown",g,!0),d.keyDown(s,{key:"Enter"}),await b(()=>{r(s.style.transform).toContain("translateY(0")}),d.keyDown(s,{key:"Space"}),await b(()=>{r(s.style.transform).toContain("translateY(0")})}finally{a.removeEventListener("keydown",g,!0)}d.keyDown(s,{key:"Enter"}),await b(()=>{r(s.style.transform).toContain("translateY(1px)")}),d.keyUp(s,{key:"Enter"}),await b(()=>{r(s.style.transform).toContain("translateY(0")}),d.keyDown(s,{key:"Spacebar"}),await b(()=>{r(s.style.transform).toContain("translateY(1px)")}),d.keyUp(s,{key:"Spacebar"}),await b(()=>{r(s.style.transform).toContain("translateY(0")}),d.keyDown(s,{key:"Space"}),await b(()=>{r(s.style.transform).toContain("translateY(1px)")}),d.keyUp(s,{key:"Space"}),await b(()=>{r(s.style.transform).toContain("translateY(0")}),d.keyDown(s,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await b(()=>{r(s.style.transform).toContain("translateY(0")}),d.keyDown(s,{key:"Enter",keyCode:229,which:229}),await b(()=>{r(s.style.transform).toContain("translateY(0")})}};function $t(){return t.jsx(m,{align:"start",children:t.jsx(y,{open:!0,onOpenChange:()=>{},title:"Locally preempted keyboard close drawer",description:"Local close-button key guards should suppress pressed feedback.",onCloseButtonKeyDown:n=>{(n.key==="Enter"||n.key===" "||n.key==="Space"||n.key==="Spacebar")&&n.preventDefault()},children:t.jsx("p",{style:w,children:"Local guards preempt managed close-button keyboard feedback."})})})}const M={render:()=>t.jsx($t,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});a.focus(),d.keyDown(a,{key:"Enter"}),await b(()=>{r(a.style.transform).toContain("translateY(0")}),d.keyUp(a,{key:"Enter"}),d.keyDown(a,{key:"Space"}),await b(()=>{r(a.style.transform).toContain("translateY(0")}),d.keyUp(a,{key:"Space"})}};function Wt(){const[n,e]=i.useState(!1),[a,c]=i.useState("none"),[s,g]=i.useState("none");return t.jsx(m,{align:"start",children:t.jsxs("div",{style:xt,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:kt}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:x,children:a})]}),t.jsxs("p",{style:B,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:x,children:s})]}),t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(y,{open:n,onOpenChange:p=>{e(p),p||g(D=>`${D} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:p=>{c(p),g(`reason:${p}`)},children:t.jsx("p",{style:w,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const U={render:()=>t.jsx(Wt,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body),c=e.getByTestId("drawer-outside-target");await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await l.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await l.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await l.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),c.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await r(a.getByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await l.pointer({target:c,keys:"[MouseLeft]"}),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Jt(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(y,{open:n,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:w,children:"Use close button and verify trigger focus restoration."})})]})}const G={render:()=>t.jsx(Jt,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body),c=e.getByRole("button",{name:"Open Focus Return Drawer"});await l.click(c),await r(await a.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await r(c).toHaveFocus()}};function Qt(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(f,{children:"Primary drawer action"}),t.jsx(f,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const V={render:()=>t.jsx(Qt,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("button",{name:"Close drawer"}),c=e.getByRole("button",{name:"Primary drawer action"}),s=e.getByRole("button",{name:"Secondary drawer action"}),g=e.getByRole("button",{name:"Outside after drawer"});a.focus(),await r(a).toHaveFocus(),await l.tab(),await r(c).toHaveFocus(),await l.tab(),await r(s).toHaveFocus(),await l.tab(),await r(a).toHaveFocus(),await r(g).not.toHaveFocus(),await l.tab({shift:!0}),await r(s).toHaveFocus()}};function Xt(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",gap:8,children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(y,{open:n,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:w,children:"Use this mode when close flow intentionally hands off focus."})})]})}const z={render:()=>t.jsx(Xt,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body),c=e.getByRole("button",{name:"Open No Focus Return Drawer"});await l.click(c),await r(await a.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await r(c).not.toHaveFocus()}};function Zt(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:w,children:"Escape should close dropdown first, then drawer."}),t.jsx(Ot,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const _={render:()=>t.jsx(Zt,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body);await l.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await a.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Drawer actions"})),await r(a.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await r(a.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(a.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await r(a.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function en(){const[n,e]=i.useState(!0);return t.jsx(y,{open:n,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:w,children:"Escape should be ignored while IME composition is active."})})}const $={render:()=>t.jsx(en,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=u(e.body);await r(await a.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",isComposing:!0}),await r(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",keyCode:229}),await r(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await r(a.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function tn(){const[n,e]=i.useState(!0),[a,c]=i.useState(0);return i.useEffect(()=>{const s=g=>{g.key==="Escape"&&g.preventDefault()};return document.addEventListener("keydown",s,!0),()=>{document.removeEventListener("keydown",s,!0)}},[]),t.jsxs(m,{align:"start",children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:x,children:a})]}),t.jsx(y,{open:n,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>c(s=>s+1),children:t.jsx("p",{style:w,children:"Escape should remain preempted by global handlers."})})]})}const W={render:()=>t.jsx(tn,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=u(e.body);await r(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",ctrlKey:!0}),d.keyDown(e,{key:"Escape",altKey:!0}),d.keyDown(e,{key:"Escape",metaKey:!0}),await r(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await l.keyboard("{Escape}"),await r(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function nn(){const[n,e]=i.useState(!0),[a,c]=i.useState(0),[s,g]=i.useState("none");return t.jsxs(m,{align:"start",children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:x,children:s})]}),t.jsx(y,{open:n,onOpenChange:e,title:"Repeat escape drawer",onEscapeKeyDown:()=>c(p=>p+1),onCloseReason:g,children:t.jsx("p",{style:w,children:"Repeated Escape keydown should not close this drawer."})})]})}const J={render:()=>t.jsx(nn,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=u(e.body);await r(await a.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",repeat:!0}),await r(a.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await r(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await r(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await l.keyboard("{Escape}"),await r(a.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await r(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await r(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var ve,he,De;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(De=(he=F.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var Be,xe,ke;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Ee,Te,Ce;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Re,Ie,je;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(je=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Se,Fe,He;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(He=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Oe,Ae,Pe;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Pe=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Ne,Ke,Le;K.parameters={...K.parameters,docs:{...(Ne=K.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Le=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var Ye,qe,Me;L.parameters={...L.parameters,docs:{...(Ye=L.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Me=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var Ue,Ge,Ve;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ve=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var ze,_e,$e;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <CloseButtonKeyboardPressedDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const ownerDocument = canvasElement.ownerDocument;
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
    const preemptActivationKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Space" || event.key === "Spacebar") {
        event.preventDefault();
      }
    };
    try {
      ownerDocument.addEventListener("keydown", preemptActivationKeys, true);
      fireEvent.keyDown(closeButton, {
        key: "Enter"
      });
      await waitFor(() => {
        expect(closeButton.style.transform).toContain("translateY(0");
      });
      fireEvent.keyDown(closeButton, {
        key: "Space"
      });
      await waitFor(() => {
        expect(closeButton.style.transform).toContain("translateY(0");
      });
    } finally {
      ownerDocument.removeEventListener("keydown", preemptActivationKeys, true);
    }
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
}`,...($e=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var We,Je,Qe;M.parameters={...M.parameters,docs:{...(We=M.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <CloseButtonManagedKeysPreemptedByLocalHandlerDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close drawer"
    });
    closeButton.focus();
    fireEvent.keyDown(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Enter"
    });
    fireEvent.keyDown(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Space"
    });
  }
}`,...(Qe=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;U.parameters={...U.parameters,docs:{...(Xe=U.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=U.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;G.parameters={...G.parameters,docs:{...(tt=G.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=G.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var rt,ot,st;V.parameters={...V.parameters,docs:{...(rt=V.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(st=(ot=V.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var it,ct,lt;z.parameters={...z.parameters,docs:{...(it=z.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ct=z.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,ut,yt;_.parameters={..._.parameters,docs:{...(dt=_.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(ut=_.parameters)==null?void 0:ut.docs)==null?void 0:yt.source}}};var pt,wt,mt;$.parameters={...$.parameters,docs:{...(pt=$.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(mt=(wt=$.parameters)==null?void 0:wt.docs)==null?void 0:mt.source}}};var bt,gt,ft;W.parameters={...W.parameters,docs:{...(bt=W.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(ft=(gt=W.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var vt,ht,Dt;J.parameters={...J.parameters,docs:{...(vt=J.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(Dt=(ht=J.parameters)==null?void 0:ht.docs)==null?void 0:Dt.source}}};const wn=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonTextTitleAutoNameFallback","NumericDescriptionSemantics","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{q as CloseButtonKeyboardPressedState,M as CloseButtonManagedKeysPreemptedByLocalHandler,L as CloseButtonPrimaryPointerOnly,U as CloseReasonTelemetry,K as DismissGuardHooks,$ as EscapeIgnoresImeComposition,W as EscapePreemptedByGlobalHandler,J as EscapeRepeatGuard,Y as FocusIntentReentry,G as FocusReturn,V as FocusTrapKeyboardCycle,O as IconTitleAriaLabelFallback,F as Interactive,H as LabelledByPrecedence,_ as NestedDismissOrder,z as NoFocusReturn,N as NonDismissible,A as NonTextTitleAutoNameFallback,P as NumericDescriptionSemantics,wn as __namedExportsOrder,pn as default};
