import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as f}from"./Button-DvJUO9m9.js";import{l as Kt,P as Yt,F as qt}from"./bodyScrollLock-DU3WNas9.js";import{D as Mt}from"./focusTabbable-gnwmp6b7.js";import{D as Ut}from"./Dropdown-Bcl61lZq.js";import{within as u,expect as o,fireEvent as d,waitFor as g,userEvent as l}from"./index-DgAF9SIF.js";import{b as m,s as B,a as D}from"./storyShowcase-DlKirntE.js";import"./index-DlVbWVVj.js";function S(n,e){return typeof n!="boolean"?e:n}function y({open:n,side:e="right",title:a,description:c,children:r,restoreFocus:b=!0,closeOnEscape:w=!0,closeOnOutsidePointer:x=!0,showCloseButton:St=!0,closeLabel:Z="Close drawer",ariaLabel:ee,ariaLabelledBy:te,onEscapeKeyDown:ne,onPointerDownOutside:ae,onCloseButtonKeyDown:oe,onCloseReason:C,onOpenChange:re}){const ye=i.useId(),pe=i.useId(),we=jt(c),[se,me]=i.useState(!1),[be,v]=i.useState(!1),[ge,I]=i.useState(!1),k=i.useRef(!0);i.useRef(null);const Ft=i.useRef(null),[E,Ht]=i.useState(null),Ot=typeof Z=="string"&&Z.trim().length>0?Z.trim():"Close drawer",j=typeof te=="string"&&te.trim().length>0?te.trim():void 0,fe=j===void 0&&typeof ee=="string"&&ee.trim().length>0?ee.trim():void 0,ve=le(a).length>0,he=j?void 0:fe??(ve?void 0:"Drawer"),At=fe!==void 0||j!==void 0,Pt=S(b,!0),Be=S(w,!0),Nt=S(x,!0),Lt=S(St,!0),ie=i.useCallback(s=>{C==null||C(s),re(!1)},[C,re]);return i.useEffect(()=>{},[At,ve]),i.useEffect(()=>{if(!(!n||!E))return Kt(E.ownerDocument)},[n,E]),i.useEffect(()=>{if(!n||!E)return;const s=E.ownerDocument,De=h=>{h.metaKey||h.altKey||h.ctrlKey||(k.current=!0)},R=h=>{"button"in h&&!ce(h.button)||"ctrlKey"in h&&h.ctrlKey||(k.current=!1)};return s.addEventListener("keydown",De,!0),s.addEventListener("pointerdown",R,!0),s.addEventListener("mousedown",R,!0),s.addEventListener("touchstart",R,!0),()=>{s.removeEventListener("keydown",De,!0),s.removeEventListener("pointerdown",R,!0),s.removeEventListener("mousedown",R,!0),s.removeEventListener("touchstart",R,!0)}},[n,E]),n?t.jsx(Yt,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(Mt,{onEscapeKeyDown:s=>{if(ne==null||ne(s),!s.defaultPrevented){if(!Be){s.preventDefault();return}s.preventDefault(),ie("escape-key")}},onPointerDownOutside:s=>{if(ae==null||ae(s),!s.defaultPrevented){if(!Nt){s.preventDefault();return}s.preventDefault(),ie("outside-pointer")}},onDismiss:()=>re(!1),children:t.jsx(qt,{restoreFocus:Pt,children:t.jsxs("aside",{ref:s=>{Ft.current=s,Ht(s)},role:"dialog","aria-modal":"true","aria-label":he,"aria-labelledby":j??(he?void 0:ye),"aria-describedby":we?pe:void 0,"aria-keyshortcuts":Be?"Escape":void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:ye,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:a}),we?t.jsx("p",{id:pe,style:{margin:0,color:"var(--aurora-text-secondary)"},children:c}):null]}),Lt?t.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>ie("close-button"),"aria-label":Ot,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{me(!0)},onMouseLeave:()=>{me(!1),v(!1)},onPointerDown:s=>{s.ctrlKey||ce(s.button)&&(k.current=!1,I(!1),v(!0))},onPointerUp:s=>{ce(s.button)&&v(!1)},onMouseDown:s=>{s.button===0&&!s.ctrlKey&&(k.current=!1,I(!1)),s.button===0&&!s.ctrlKey&&v(!0)},onMouseUp:s=>{s.button===0&&v(!1)},onPointerCancel:()=>{v(!1)},onKeyDown:s=>{k.current=!0,oe==null||oe(s),!s.defaultPrevented&&(zt(s)||xe(s.key)&&!Vt(s)&&v(!0))},onKeyUp:s=>{xe(s.key)&&v(!1)},onFocus:s=>{I(Gt(s.currentTarget,k.current))},onBlur:()=>{I(!1),v(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:se||ge?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:be?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":se?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:se?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ge?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:be?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:r})]})})})})}):null}function Gt(n,e){try{return n.matches(":focus-visible")||e}catch{return e}}function ce(n){return typeof n!="number"||n<=0}function xe(n){return n==="Enter"||n===" "||n==="Space"||n==="Spacebar"}function Vt(n){return n.altKey||n.ctrlKey||n.metaKey}function zt(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function le(n){if(typeof n=="string")return F(n);if(typeof n=="number")return F(String(n));if(Array.isArray(n))return F(n.map(a=>le(a)).filter(a=>a.length>0).join(" "));if(!i.isValidElement(n))return"";const e=n.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?F(e["aria-label"]):le(e.children)}function jt(n){return n==null||typeof n=="boolean"?!1:typeof n=="string"?n.trim().length>0:typeof n=="number"?!0:Array.isArray(n)?n.some(e=>jt(e)):i.isValidElement(n)}function F(n){return n.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseButtonKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const xn={title:"Overlay/Drawer",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},T={display:"grid",gap:10},de={display:"grid",gap:10,justifyItems:"start"},p={margin:0},ue={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function _t(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(y,{open:n,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:T,children:[t.jsx("p",{style:p,children:"Use this panel to narrow incident review scope."}),t.jsx(f,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const H={render:()=>t.jsx(_t,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body);await l.click(e.getByRole("button",{name:"Open Drawer"})),await o(await a.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(a.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function $t(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx("h3",{id:"drawer-heading",style:{margin:0},children:"Release checklist drawer heading"}),t.jsx(y,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist drawer",ariaLabelledBy:"drawer-heading",children:t.jsx("p",{style:p,children:"Drawer name should follow visible heading binding."})})]})}const O={render:()=>t.jsx($t,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("dialog",{name:"Release checklist drawer heading"});await o(a).toHaveAttribute("aria-labelledby","drawer-heading"),await o(a).not.toHaveAttribute("aria-label")}};function Wt(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings drawer",children:t.jsx("p",{style:p,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const A={render:()=>t.jsx(Wt,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("dialog",{name:"Automation settings drawer"});await o(a).toHaveAttribute("aria-label","Automation settings drawer"),await o(a).not.toHaveAttribute("aria-labelledby")}};function Jt(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),children:t.jsx("p",{style:p,children:"Icon-only title now keeps fallback drawer naming."})})})}const P={render:()=>t.jsx(Jt,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("dialog",{name:"Drawer"});await o(a).toHaveAttribute("aria-label","Drawer"),await o(a).not.toHaveAttribute("aria-labelledby")}};function Qt(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:"Numeric description drawer",description:0,children:t.jsx("p",{style:p,children:"Drawer description supports numeric ReactNode content."})})})}const N={render:()=>t.jsx(Qt,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Numeric description drawer"}),c=e.getAllByText("0");await o(c).toHaveLength(1),await o(c[0].tagName).toBe("P"),await o(a).toHaveAttribute("aria-describedby",c[0].id)}};function Xt(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:T,children:[t.jsx("p",{style:p,children:"Outside click and Escape are disabled in this flow."}),t.jsx(f,{onClick:()=>e(!1),children:"I understand"})]})})]})}const L={render:()=>t.jsx(Xt,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("dialog",{name:"Security checklist"});await o(a).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{Escape}"),await o(a).toBeInTheDocument(),await l.click(e.getByRole("button",{name:"I understand"})),await o(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function Zt(){const[n,e]=i.useState(!1),[a,c]=i.useState("none");return t.jsx(m,{align:"start",children:t.jsxs("div",{style:de,children:[t.jsx("button",{type:"button","data-testid":"drawer-runtime-outside-target","aria-label":"Drawer runtime outside target",style:ue}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-runtime-close-reason",style:D,children:a})]}),t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Runtime Config Drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Runtime config drawer",restoreFocus:0,closeOnEscape:0,closeOnOutsidePointer:null,showCloseButton:0,onCloseReason:r=>c(r),children:t.jsx("p",{style:p,children:"Runtime boolean normalization keeps dismiss policy and close affordance stable."})})]})})}const K={render:()=>t.jsx(Zt,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body),c=e.getByRole("button",{name:"Open Runtime Config Drawer"}),r=e.getByTestId("drawer-runtime-outside-target");await l.click(c);const b=await a.findByRole("dialog",{name:"Runtime config drawer"});await o(b).toHaveAttribute("aria-keyshortcuts","Escape"),await o(a.getByRole("button",{name:"Close drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Runtime config drawer"})).not.toBeInTheDocument(),await o(c).toHaveFocus(),await o(e.getByTestId("drawer-runtime-close-reason")).toHaveTextContent("escape-key"),await l.click(c),await o(await a.findByRole("dialog",{name:"Runtime config drawer"})).toBeInTheDocument(),await l.pointer({target:r,keys:"[MouseLeft]"}),await o(a.queryByRole("dialog",{name:"Runtime config drawer"})).not.toBeInTheDocument(),await o(e.getByTestId("drawer-runtime-close-reason")).toHaveTextContent("outside-pointer")}};function en(){const[n,e]=i.useState(!0),[a,c]=i.useState(0),[r,b]=i.useState(0);return t.jsx(m,{align:"start",children:t.jsxs("div",{style:de,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:ue}),t.jsxs("p",{style:B,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:D,children:a})]}),t.jsxs("p",{style:B,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:D,children:r})]}),t.jsx(y,{open:n,onOpenChange:e,title:"Guarded drawer",onEscapeKeyDown:w=>{w.preventDefault(),c(x=>x+1)},onPointerDownOutside:w=>{w.preventDefault(),b(x=>x+1)},children:t.jsx("p",{style:p,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const Y={render:()=>t.jsx(en,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=e.getByTestId("drawer-guard-outside-target");await o(await e.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await l.click(a),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function tn(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:p,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const q={render:()=>t.jsx(tn,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});d.mouseDown(a,{button:2}),await o(a.style.transform).toContain("translateY(0"),d.mouseDown(a),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),d.pointerCancel(a),await g(()=>{o(a.style.transform).toContain("translateY(0")}),a.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),a.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(0")}),d.mouseDown(a),d.mouseUp(a),await o(a.style.transform).toContain("translateY(0")}};function nn(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:t.jsxs("div",{style:T,children:[t.jsx("p",{style:p,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const M={render:()=>t.jsx(nn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("button",{name:"Drawer content action"}),c=await e.findByRole("button",{name:"Focus intent close drawer"});await l.click(a),await o(a).toHaveFocus(),await l.tab(),await o(c).toHaveFocus(),await o(c.getAttribute("style")).toContain("var(--aurora-focus-ring)"),d.mouseDown(c,{button:0,ctrlKey:!0}),await o(c.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function an(){const[n,e]=i.useState(!0);return t.jsx(m,{align:"start",children:t.jsx(y,{open:n,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:p,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const U={render:()=>t.jsx(an,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=n.ownerDocument,c=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await o(c).toHaveAttribute("aria-keyshortcuts","Escape");const r=await e.findByRole("button",{name:"Close drawer"});await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),d.keyDown(r,{key:"Enter",ctrlKey:!0}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyUp(r,{key:"Enter",ctrlKey:!0});const b=w=>{(w.key==="Enter"||w.key===" "||w.key==="Space"||w.key==="Spacebar")&&w.preventDefault()};try{a.addEventListener("keydown",b,!0),d.keyDown(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(0")})}finally{a.removeEventListener("keydown",b,!0)}d.keyDown(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Enter",keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")})}};function on(){return t.jsx(m,{align:"start",children:t.jsx(y,{open:!0,onOpenChange:()=>{},title:"Locally preempted keyboard close drawer",description:"Local close-button key guards should suppress pressed feedback.",onCloseButtonKeyDown:n=>{(n.key==="Enter"||n.key===" "||n.key==="Space"||n.key==="Spacebar")&&n.preventDefault()},children:t.jsx("p",{style:p,children:"Local guards preempt managed close-button keyboard feedback."})})})}const G={render:()=>t.jsx(on,{}),play:async({canvasElement:n})=>{const a=await u(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});a.focus(),d.keyDown(a,{key:"Enter"}),await g(()=>{o(a.style.transform).toContain("translateY(0")}),d.keyUp(a,{key:"Enter"}),d.keyDown(a,{key:"Space"}),await g(()=>{o(a.style.transform).toContain("translateY(0")}),d.keyUp(a,{key:"Space"})}};function rn(){const[n,e]=i.useState(!1),[a,c]=i.useState("none"),[r,b]=i.useState("none");return t.jsx(m,{align:"start",children:t.jsxs("div",{style:de,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:ue}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:D,children:a})]}),t.jsxs("p",{style:B,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:D,children:r})]}),t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(y,{open:n,onOpenChange:w=>{e(w),w||b(x=>`${x} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:w=>{c(w),b(`reason:${w}`)},children:t.jsx("p",{style:p,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const V={render:()=>t.jsx(rn,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body),c=e.getByTestId("drawer-outside-target");await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await l.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await l.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await l.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),c.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(a.getByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await l.pointer({target:c,keys:"[MouseLeft]"}),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function sn(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(y,{open:n,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:p,children:"Use close button and verify trigger focus restoration."})})]})}const z={render:()=>t.jsx(sn,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body),c=e.getByRole("button",{name:"Open Focus Return Drawer"});await l.click(c),await o(await a.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(c).toHaveFocus()}};function cn(){const[n,e]=i.useState(!0);return t.jsxs(m,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:T,children:[t.jsx("p",{style:p,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(f,{children:"Primary drawer action"}),t.jsx(f,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const _={render:()=>t.jsx(cn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),a=await e.findByRole("button",{name:"Close drawer"}),c=e.getByRole("button",{name:"Primary drawer action"}),r=e.getByRole("button",{name:"Secondary drawer action"}),b=e.getByRole("button",{name:"Outside after drawer"});a.focus(),await o(a).toHaveFocus(),await l.tab(),await o(c).toHaveFocus(),await l.tab(),await o(r).toHaveFocus(),await l.tab(),await o(a).toHaveFocus(),await o(b).not.toHaveFocus(),await l.tab({shift:!0}),await o(r).toHaveFocus()}};function ln(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",gap:8,children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(y,{open:n,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:p,children:"Use this mode when close flow intentionally hands off focus."})})]})}const $={render:()=>t.jsx(ln,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body),c=e.getByRole("button",{name:"Open No Focus Return Drawer"});await l.click(c),await o(await a.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(c).not.toHaveFocus()}};function dn(){const[n,e]=i.useState(!1);return t.jsxs(m,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(y,{open:n,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:T,children:[t.jsx("p",{style:p,children:"Escape should close dropdown first, then drawer."}),t.jsx(Ut,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const W={render:()=>t.jsx(dn,{}),play:async({canvasElement:n})=>{const e=u(n),a=u(n.ownerDocument.body);await l.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await a.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Drawer actions"})),await o(a.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(a.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function un(){const[n,e]=i.useState(!0);return t.jsx(y,{open:n,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:p,children:"Escape should be ignored while IME composition is active."})})}const J={render:()=>t.jsx(un,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=u(e.body);await o(await a.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",isComposing:!0}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",keyCode:229}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function yn(){const[n,e]=i.useState(!0),[a,c]=i.useState(0);return i.useEffect(()=>{const r=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",r,!0),()=>{document.removeEventListener("keydown",r,!0)}},[]),t.jsxs(m,{align:"start",children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:D,children:a})]}),t.jsx(y,{open:n,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>c(r=>r+1),children:t.jsx("p",{style:p,children:"Escape should remain preempted by global handlers."})})]})}const Q={render:()=>t.jsx(yn,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=u(e.body);await o(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",ctrlKey:!0}),d.keyDown(e,{key:"Escape",altKey:!0}),d.keyDown(e,{key:"Escape",metaKey:!0}),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await l.keyboard("{Escape}"),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function pn(){const[n,e]=i.useState(!0),[a,c]=i.useState(0),[r,b]=i.useState("none");return t.jsxs(m,{align:"start",children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:D,children:a})]}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:D,children:r})]}),t.jsx(y,{open:n,onOpenChange:e,title:"Repeat escape drawer",onEscapeKeyDown:()=>c(w=>w+1),onCloseReason:b,children:t.jsx("p",{style:p,children:"Repeated Escape keydown should not close this drawer."})})]})}const X={render:()=>t.jsx(pn,{}),play:async({canvasElement:n})=>{const e=n.ownerDocument,a=u(e.body);await o(await a.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),d.keyDown(e,{key:"Escape",repeat:!0}),await o(a.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var ke,Ee,Re;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Te,Ce,Ie;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ie=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var je,Se,Fe;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var He,Oe,Ae;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(Oe=P.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Pe,Ne,Le;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Le=(Ne=N.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var Ke,Ye,qe;L.parameters={...L.parameters,docs:{...(Ke=L.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(qe=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};var Me,Ue,Ge;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const openButton = canvas.getByRole("button", {
      name: "Open Runtime Config Drawer"
    });
    const outsideTarget = canvas.getByTestId("drawer-runtime-outside-target");
    await userEvent.click(openButton);
    const drawer = await body.findByRole("dialog", {
      name: "Runtime config drawer"
    });
    await expect(drawer).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(body.getByRole("button", {
      name: "Close drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Runtime config drawer"
    })).not.toBeInTheDocument();
    await expect(openButton).toHaveFocus();
    await expect(canvas.getByTestId("drawer-runtime-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(openButton);
    await expect(await body.findByRole("dialog", {
      name: "Runtime config drawer"
    })).toBeInTheDocument();
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(body.queryByRole("dialog", {
      name: "Runtime config drawer"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("drawer-runtime-close-reason")).toHaveTextContent("outside-pointer");
  }
}`,...(Ge=(Ue=K.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Ve,ze,_e;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(_e=(ze=Y.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var $e,We,Je;q.parameters={...q.parameters,docs:{...($e=q.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Je=(We=q.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=M.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;U.parameters={...U.parameters,docs:{...(et=U.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=U.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,rt;G.parameters={...G.parameters,docs:{...(at=G.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(ot=G.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var st,it,ct;V.parameters={...V.parameters,docs:{...(st=V.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(it=V.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,dt,ut;z.parameters={...z.parameters,docs:{...(lt=z.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ut=(dt=z.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var yt,pt,wt;_.parameters={..._.parameters,docs:{...(yt=_.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(wt=(pt=_.parameters)==null?void 0:pt.docs)==null?void 0:wt.source}}};var mt,bt,gt;$.parameters={...$.parameters,docs:{...(mt=$.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(gt=(bt=$.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var ft,vt,ht;W.parameters={...W.parameters,docs:{...(ft=W.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(ht=(vt=W.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var Bt,Dt,xt;J.parameters={...J.parameters,docs:{...(Bt=J.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(xt=(Dt=J.parameters)==null?void 0:Dt.docs)==null?void 0:xt.source}}};var kt,Et,Rt;Q.parameters={...Q.parameters,docs:{...(kt=Q.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Rt=(Et=Q.parameters)==null?void 0:Et.docs)==null?void 0:Rt.source}}};var Tt,Ct,It;X.parameters={...X.parameters,docs:{...(Tt=X.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(It=(Ct=X.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};const kn=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonTextTitleAutoNameFallback","NumericDescriptionSemantics","NonDismissible","RuntimeBooleanConfigNormalization","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{U as CloseButtonKeyboardPressedState,G as CloseButtonManagedKeysPreemptedByLocalHandler,q as CloseButtonPrimaryPointerOnly,V as CloseReasonTelemetry,Y as DismissGuardHooks,J as EscapeIgnoresImeComposition,Q as EscapePreemptedByGlobalHandler,X as EscapeRepeatGuard,M as FocusIntentReentry,z as FocusReturn,_ as FocusTrapKeyboardCycle,A as IconTitleAriaLabelFallback,H as Interactive,O as LabelledByPrecedence,W as NestedDismissOrder,$ as NoFocusReturn,L as NonDismissible,P as NonTextTitleAutoNameFallback,N as NumericDescriptionSemantics,K as RuntimeBooleanConfigNormalization,kn as __namedExportsOrder,xn as default};
