import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as f}from"./Button-DvJUO9m9.js";import{l as Vt,P as Gt,F as zt}from"./bodyScrollLock-DU3WNas9.js";import{D as _t}from"./focusTabbable-gnwmp6b7.js";import{D as $t}from"./Dropdown-Bcl61lZq.js";import{within as u,expect as o,fireEvent as d,waitFor as g,userEvent as l}from"./index-DgAF9SIF.js";import{b as w,s as D,a as x}from"./storyShowcase-DlKirntE.js";import"./index-DlVbWVVj.js";function H(e,n){return typeof e!="boolean"?n:e}function Wt(e,n){if(typeof e=="string"){const a=e.trim().toLowerCase();if(a==="left"||a==="right")return a}return n}function y({open:e,side:n="right",title:a,description:c,children:r,restoreFocus:b=!0,closeOnEscape:m=!0,closeOnOutsidePointer:k=!0,showCloseButton:Pt=!0,closeLabel:te="Close drawer",ariaLabel:ne,ariaLabelledBy:ae,onEscapeKeyDown:oe,onPointerDownOutside:re,onCloseButtonKeyDown:se,onCloseReason:I,onOpenChange:ie}){const we=i.useId(),me=i.useId(),be=At(c),[ce,ge]=i.useState(!1),[fe,v]=i.useState(!1),[ve,j]=i.useState(!1),E=i.useRef(!0);i.useRef(null);const Nt=i.useRef(null),[R,Lt]=i.useState(null),Kt=typeof te=="string"&&te.trim().length>0?te.trim():"Close drawer",S=typeof ae=="string"&&ae.trim().length>0?ae.trim():void 0,he=S===void 0&&typeof ne=="string"&&ne.trim().length>0?ne.trim():void 0,Be=ue(a).length>0,De=S?void 0:he??(Be?void 0:"Drawer"),Yt=he!==void 0||S!==void 0,qt=H(b,!0),xe=H(m,!0),Mt=H(k,!0),Ut=H(Pt,!0),h=Wt(n,"right"),le=i.useCallback(s=>{I==null||I(s),ie(!1)},[I,ie]);return i.useEffect(()=>{},[Yt,Be]),i.useEffect(()=>{if(!(!e||!R))return Vt(R.ownerDocument)},[e,R]),i.useEffect(()=>{if(!e||!R)return;const s=R.ownerDocument,ke=B=>{B.metaKey||B.altKey||B.ctrlKey||(E.current=!0)},T=B=>{"button"in B&&!de(B.button)||"ctrlKey"in B&&B.ctrlKey||(E.current=!1)};return s.addEventListener("keydown",ke,!0),s.addEventListener("pointerdown",T,!0),s.addEventListener("mousedown",T,!0),s.addEventListener("touchstart",T,!0),()=>{s.removeEventListener("keydown",ke,!0),s.removeEventListener("pointerdown",T,!0),s.removeEventListener("mousedown",T,!0),s.removeEventListener("touchstart",T,!0)}},[e,R]),e?t.jsx(Gt,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(_t,{onEscapeKeyDown:s=>{if(oe==null||oe(s),!s.defaultPrevented){if(!xe){s.preventDefault();return}s.preventDefault(),le("escape-key")}},onPointerDownOutside:s=>{if(re==null||re(s),!s.defaultPrevented){if(!Mt){s.preventDefault();return}s.preventDefault(),le("outside-pointer")}},onDismiss:()=>ie(!1),children:t.jsx(zt,{restoreFocus:qt,children:t.jsxs("aside",{ref:s=>{Nt.current=s,Lt(s)},role:"dialog","aria-modal":"true","aria-label":De,"aria-labelledby":S??(De?void 0:we),"aria-describedby":be?me:void 0,"aria-keyshortcuts":xe?"Escape":void 0,"data-side":h,style:{position:"absolute",top:0,bottom:0,[h]:0,width:"min(420px, 90vw)",borderLeft:h==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:h==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:h==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:h==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:h==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:h==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:we,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:a}),be?t.jsx("p",{id:me,style:{margin:0,color:"var(--aurora-text-secondary)"},children:c}):null]}),Ut?t.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>le("close-button"),"aria-label":Kt,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{ge(!0)},onMouseLeave:()=>{ge(!1),v(!1)},onPointerDown:s=>{s.ctrlKey||de(s.button)&&(E.current=!1,j(!1),v(!0))},onPointerUp:s=>{de(s.button)&&v(!1)},onMouseDown:s=>{s.button===0&&!s.ctrlKey&&(E.current=!1,j(!1)),s.button===0&&!s.ctrlKey&&v(!0)},onMouseUp:s=>{s.button===0&&v(!1)},onPointerCancel:()=>{v(!1)},onKeyDown:s=>{E.current=!0,se==null||se(s),!s.defaultPrevented&&(Xt(s)||Ee(s.key)&&!Qt(s)&&v(!0))},onKeyUp:s=>{Ee(s.key)&&v(!1)},onFocus:s=>{j(Jt(s.currentTarget,E.current))},onBlur:()=>{j(!1),v(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:ce||ve?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:fe?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":ce?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:ce?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:ve?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:fe?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:r})]})})})})}):null}function Jt(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function de(e){return typeof e!="number"||e<=0}function Ee(e){return e==="Enter"||e===" "||e==="Space"||e==="Spacebar"}function Qt(e){return e.altKey||e.ctrlKey||e.metaKey}function Xt(e){const n=e.nativeEvent;return n.isComposing?!0:typeof n.keyCode=="number"&&n.keyCode===229}function ue(e){if(typeof e=="string")return F(e);if(typeof e=="number")return F(String(e));if(Array.isArray(e))return F(e.map(a=>ue(a)).filter(a=>a.length>0).join(" "));if(!i.isValidElement(e))return"";const n=e.props;return n["aria-hidden"]===!0||n["aria-hidden"]==="true"?"":typeof n["aria-label"]=="string"&&n["aria-label"].trim().length>0?F(n["aria-label"]):ue(n.children)}function At(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(n=>At(n)):i.isValidElement(e)}function F(e){return e.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseButtonKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const jn={title:"Overlay/Drawer",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},C={display:"grid",gap:10},ye={display:"grid",gap:10,justifyItems:"start"},p={margin:0},pe={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Zt(){const[e,n]=i.useState(!1);return t.jsxs(w,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Open Drawer"}),t.jsx(y,{open:e,onOpenChange:n,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:p,children:"Use this panel to narrow incident review scope."}),t.jsx(f,{onClick:()=>n(!1),children:"Apply and close"})]})})]})}const O={render:()=>t.jsx(Zt,{}),play:async({canvasElement:e})=>{const n=u(e),a=u(e.ownerDocument.body);await l.click(n.getByRole("button",{name:"Open Drawer"})),await o(await a.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(a.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function en(){const[e,n]=i.useState(!0);return t.jsxs(w,{align:"start",children:[t.jsx("h3",{id:"drawer-heading",style:{margin:0},children:"Release checklist drawer heading"}),t.jsx(y,{open:e,onOpenChange:n,title:t.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist drawer",ariaLabelledBy:"drawer-heading",children:t.jsx("p",{style:p,children:"Drawer name should follow visible heading binding."})})]})}const A={render:()=>t.jsx(en,{}),play:async({canvasElement:e})=>{const a=await u(e.ownerDocument.body).findByRole("dialog",{name:"Release checklist drawer heading"});await o(a).toHaveAttribute("aria-labelledby","drawer-heading"),await o(a).not.toHaveAttribute("aria-label")}};function tn(){const[e,n]=i.useState(!0);return t.jsx(w,{align:"start",children:t.jsx(y,{open:e,onOpenChange:n,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings drawer",children:t.jsx("p",{style:p,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const P={render:()=>t.jsx(tn,{}),play:async({canvasElement:e})=>{const a=await u(e.ownerDocument.body).findByRole("dialog",{name:"Automation settings drawer"});await o(a).toHaveAttribute("aria-label","Automation settings drawer"),await o(a).not.toHaveAttribute("aria-labelledby")}};function nn(){const[e,n]=i.useState(!0);return t.jsx(w,{align:"start",children:t.jsx(y,{open:e,onOpenChange:n,title:t.jsx("span",{"aria-hidden":!0,children:"⚙️"}),children:t.jsx("p",{style:p,children:"Icon-only title now keeps fallback drawer naming."})})})}const N={render:()=>t.jsx(nn,{}),play:async({canvasElement:e})=>{const a=await u(e.ownerDocument.body).findByRole("dialog",{name:"Drawer"});await o(a).toHaveAttribute("aria-label","Drawer"),await o(a).not.toHaveAttribute("aria-labelledby")}};function an(){const[e,n]=i.useState(!0);return t.jsx(w,{align:"start",children:t.jsx(y,{open:e,onOpenChange:n,title:"Numeric description drawer",description:0,children:t.jsx("p",{style:p,children:"Drawer description supports numeric ReactNode content."})})})}const L={render:()=>t.jsx(an,{}),play:async({canvasElement:e})=>{const n=u(e.ownerDocument.body),a=await n.findByRole("dialog",{name:"Numeric description drawer"}),c=n.getAllByText("0");await o(c).toHaveLength(1),await o(c[0].tagName).toBe("P"),await o(a).toHaveAttribute("aria-describedby",c[0].id)}};function on(){const[e,n]=i.useState(!0);return t.jsxs(w,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Reopen Drawer"}),t.jsx(y,{open:e,onOpenChange:n,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:p,children:"Outside click and Escape are disabled in this flow."}),t.jsx(f,{onClick:()=>n(!1),children:"I understand"})]})})]})}const K={render:()=>t.jsx(on,{}),play:async({canvasElement:e})=>{const n=u(e.ownerDocument.body),a=await n.findByRole("dialog",{name:"Security checklist"});await o(a).not.toHaveAttribute("aria-keyshortcuts"),await l.keyboard("{Escape}"),await o(a).toBeInTheDocument(),await l.click(n.getByRole("button",{name:"I understand"})),await o(n.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function rn(){const[e,n]=i.useState(!0);return t.jsx(w,{align:"start",children:t.jsx(y,{open:e,onOpenChange:n,title:"Runtime visual config drawer",side:" center ",children:t.jsx("p",{style:p,children:"Runtime visual token normalization keeps drawer placement fallback deterministic."})})})}const Y={render:()=>t.jsx(rn,{}),play:async({canvasElement:e})=>{const a=await u(e.ownerDocument.body).findByRole("dialog",{name:"Runtime visual config drawer"});await o(a).toHaveAttribute("data-side","right"),await o(a).toHaveStyle({right:"0px"})}};function sn(){const[e,n]=i.useState(!1),[a,c]=i.useState("none");return t.jsx(w,{align:"start",children:t.jsxs("div",{style:ye,children:[t.jsx("button",{type:"button","data-testid":"drawer-runtime-outside-target","aria-label":"Drawer runtime outside target",style:pe}),t.jsxs("p",{style:D,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-runtime-close-reason",style:x,children:a})]}),t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Open Runtime Config Drawer"}),t.jsx(y,{open:e,onOpenChange:n,title:"Runtime config drawer",restoreFocus:0,closeOnEscape:0,closeOnOutsidePointer:null,showCloseButton:0,onCloseReason:r=>c(r),children:t.jsx("p",{style:p,children:"Runtime boolean normalization keeps dismiss policy and close affordance stable."})})]})})}const q={render:()=>t.jsx(sn,{}),play:async({canvasElement:e})=>{const n=u(e),a=u(e.ownerDocument.body),c=n.getByRole("button",{name:"Open Runtime Config Drawer"}),r=n.getByTestId("drawer-runtime-outside-target");await l.click(c);const b=await a.findByRole("dialog",{name:"Runtime config drawer"});await o(b).toHaveAttribute("aria-keyshortcuts","Escape"),await o(a.getByRole("button",{name:"Close drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Runtime config drawer"})).not.toBeInTheDocument(),await o(c).toHaveFocus(),await o(n.getByTestId("drawer-runtime-close-reason")).toHaveTextContent("escape-key"),await l.click(c),await o(await a.findByRole("dialog",{name:"Runtime config drawer"})).toBeInTheDocument(),await l.pointer({target:r,keys:"[MouseLeft]"}),await o(a.queryByRole("dialog",{name:"Runtime config drawer"})).not.toBeInTheDocument(),await o(n.getByTestId("drawer-runtime-close-reason")).toHaveTextContent("outside-pointer")}};function cn(){const[e,n]=i.useState(!0),[a,c]=i.useState(0),[r,b]=i.useState(0);return t.jsx(w,{align:"start",children:t.jsxs("div",{style:ye,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:pe}),t.jsxs("p",{style:D,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:D,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:x,children:r})]}),t.jsx(y,{open:e,onOpenChange:n,title:"Guarded drawer",onEscapeKeyDown:m=>{m.preventDefault(),c(k=>k+1)},onPointerDownOutside:m=>{m.preventDefault(),b(k=>k+1)},children:t.jsx("p",{style:p,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const M={render:()=>t.jsx(cn,{}),play:async({canvasElement:e})=>{const n=u(e.ownerDocument.body),a=n.getByTestId("drawer-guard-outside-target");await o(await n.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(n.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await l.click(a),await o(n.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function ln(){const[e,n]=i.useState(!0);return t.jsxs(w,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Reopen Drawer"}),t.jsx(y,{open:e,onOpenChange:n,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:p,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const U={render:()=>t.jsx(ln,{}),play:async({canvasElement:e})=>{const a=await u(e.ownerDocument.body).findByRole("button",{name:"Close drawer"});d.mouseDown(a,{button:2}),await o(a.style.transform).toContain("translateY(0"),d.mouseDown(a),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),d.pointerCancel(a),await g(()=>{o(a.style.transform).toContain("translateY(0")}),a.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(1px)")}),a.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(a.style.transform).toContain("translateY(0")}),d.mouseDown(a),d.mouseUp(a),await o(a.style.transform).toContain("translateY(0")}};function dn(){const[e,n]=i.useState(!0);return t.jsx(w,{align:"start",children:t.jsx(y,{open:e,onOpenChange:n,title:"Focus intent re-entry drawer",closeLabel:"Focus intent close drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:p,children:"Click the in-drawer action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Drawer content action"})]})})})}const V={render:()=>t.jsx(dn,{}),play:async({canvasElement:e})=>{const n=u(e.ownerDocument.body),a=await n.findByRole("button",{name:"Drawer content action"}),c=await n.findByRole("button",{name:"Focus intent close drawer"});await l.click(a),await o(a).toHaveFocus(),await l.tab(),await o(c).toHaveFocus(),await o(c.getAttribute("style")).toContain("var(--aurora-focus-ring)"),d.mouseDown(c,{button:0,ctrlKey:!0}),await o(c.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function un(){const[e,n]=i.useState(!0);return t.jsx(w,{align:"start",children:t.jsx(y,{open:e,onOpenChange:n,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:p,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const G={render:()=>t.jsx(un,{}),play:async({canvasElement:e})=>{const n=u(e.ownerDocument.body),a=e.ownerDocument,c=await n.findByRole("dialog",{name:"Keyboard pressed close affordance"});await o(c).toHaveAttribute("aria-keyshortcuts","Escape");const r=await n.findByRole("button",{name:"Close drawer"});await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),d.keyDown(r,{key:"Enter",ctrlKey:!0}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyUp(r,{key:"Enter",ctrlKey:!0});const b=m=>{(m.key==="Enter"||m.key===" "||m.key==="Space"||m.key==="Spacebar")&&m.preventDefault()};try{a.addEventListener("keydown",b,!0),d.keyDown(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(0")})}finally{a.removeEventListener("keydown",b,!0)}d.keyDown(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Enter"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Spacebar"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Space"}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Enter",keyCode:229,which:229}),await g(()=>{o(r.style.transform).toContain("translateY(0")})}};function yn(){return t.jsx(w,{align:"start",children:t.jsx(y,{open:!0,onOpenChange:()=>{},title:"Locally preempted keyboard close drawer",description:"Local close-button key guards should suppress pressed feedback.",onCloseButtonKeyDown:e=>{(e.key==="Enter"||e.key===" "||e.key==="Space"||e.key==="Spacebar")&&e.preventDefault()},children:t.jsx("p",{style:p,children:"Local guards preempt managed close-button keyboard feedback."})})})}const z={render:()=>t.jsx(yn,{}),play:async({canvasElement:e})=>{const a=await u(e.ownerDocument.body).findByRole("button",{name:"Close drawer"});a.focus(),d.keyDown(a,{key:"Enter"}),await g(()=>{o(a.style.transform).toContain("translateY(0")}),d.keyUp(a,{key:"Enter"}),d.keyDown(a,{key:"Space"}),await g(()=>{o(a.style.transform).toContain("translateY(0")}),d.keyUp(a,{key:"Space"})}};function pn(){const[e,n]=i.useState(!1),[a,c]=i.useState("none"),[r,b]=i.useState("none");return t.jsx(w,{align:"start",children:t.jsxs("div",{style:ye,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:pe}),t.jsxs("p",{style:D,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:x,children:a})]}),t.jsxs("p",{style:D,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:x,children:r})]}),t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Open Telemetry Drawer"}),t.jsx(y,{open:e,onOpenChange:m=>{n(m),m||b(k=>`${k} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:m=>{c(m),b(`reason:${m}`)},children:t.jsx("p",{style:p,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const _={render:()=>t.jsx(pn,{}),play:async({canvasElement:e})=>{const n=u(e),a=u(e.ownerDocument.body),c=n.getByTestId("drawer-outside-target");await o(n.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(n.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await l.click(n.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(n.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(n.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await l.click(n.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(n.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(n.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await l.click(n.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),c.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(a.getByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await l.pointer({target:c,keys:"[MouseLeft]"}),await o(n.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(n.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function wn(){const[e,n]=i.useState(!1);return t.jsxs(w,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Open Focus Return Drawer"}),t.jsx(y,{open:e,onOpenChange:n,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:p,children:"Use close button and verify trigger focus restoration."})})]})}const $={render:()=>t.jsx(wn,{}),play:async({canvasElement:e})=>{const n=u(e),a=u(e.ownerDocument.body),c=n.getByRole("button",{name:"Open Focus Return Drawer"});await l.click(c),await o(await a.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(c).toHaveFocus()}};function mn(){const[e,n]=i.useState(!0);return t.jsxs(w,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(y,{open:e,onOpenChange:n,title:"Focus trap drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:p,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(f,{children:"Primary drawer action"}),t.jsx(f,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const W={render:()=>t.jsx(mn,{}),play:async({canvasElement:e})=>{const n=u(e.ownerDocument.body),a=await n.findByRole("button",{name:"Close drawer"}),c=n.getByRole("button",{name:"Primary drawer action"}),r=n.getByRole("button",{name:"Secondary drawer action"}),b=n.getByRole("button",{name:"Outside after drawer"});a.focus(),await o(a).toHaveFocus(),await l.tab(),await o(c).toHaveFocus(),await l.tab(),await o(r).toHaveFocus(),await l.tab(),await o(a).toHaveFocus(),await o(b).not.toHaveFocus(),await l.tab({shift:!0}),await o(r).toHaveFocus()}};function bn(){const[e,n]=i.useState(!1);return t.jsxs(w,{align:"start",gap:8,children:[t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(y,{open:e,onOpenChange:n,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:p,children:"Use this mode when close flow intentionally hands off focus."})})]})}const J={render:()=>t.jsx(bn,{}),play:async({canvasElement:e})=>{const n=u(e),a=u(e.ownerDocument.body),c=n.getByRole("button",{name:"Open No Focus Return Drawer"});await l.click(c),await o(await a.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Close drawer"})),await o(c).not.toHaveFocus()}};function gn(){const[e,n]=i.useState(!1);return t.jsxs(w,{align:"start",children:[t.jsx(f,{variant:"outline",onClick:()=>n(!0),children:"Open Nested Overlay Drawer"}),t.jsx(y,{open:e,onOpenChange:n,title:"Nested overlay drawer",children:t.jsxs("div",{style:C,children:[t.jsx("p",{style:p,children:"Escape should close dropdown first, then drawer."}),t.jsx($t,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const Q={render:()=>t.jsx(gn,{}),play:async({canvasElement:e})=>{const n=u(e),a=u(e.ownerDocument.body);await l.click(n.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await a.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await l.click(a.getByRole("button",{name:"Drawer actions"})),await o(a.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(a.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function fn(){const[e,n]=i.useState(!0);return t.jsx(y,{open:e,onOpenChange:n,title:"IME composition drawer",children:t.jsx("p",{style:p,children:"Escape should be ignored while IME composition is active."})})}const X={render:()=>t.jsx(fn,{}),play:async({canvasElement:e})=>{const n=e.ownerDocument,a=u(n.body);await o(await a.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape",isComposing:!0}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape",keyCode:229}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function vn(){const[e,n]=i.useState(!0),[a,c]=i.useState(0);return i.useEffect(()=>{const r=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",r,!0),()=>{document.removeEventListener("keydown",r,!0)}},[]),t.jsxs(w,{align:"start",children:[t.jsxs("p",{style:D,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:x,children:a})]}),t.jsx(y,{open:e,onOpenChange:n,title:"Preempted escape drawer",onEscapeKeyDown:()=>c(r=>r+1),children:t.jsx("p",{style:p,children:"Escape should remain preempted by global handlers."})})]})}const Z={render:()=>t.jsx(vn,{}),play:async({canvasElement:e})=>{const n=e.ownerDocument,a=u(n.body);await o(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape",ctrlKey:!0}),d.keyDown(n,{key:"Escape",altKey:!0}),d.keyDown(n,{key:"Escape",metaKey:!0}),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await l.keyboard("{Escape}"),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function hn(){const[e,n]=i.useState(!0),[a,c]=i.useState(0),[r,b]=i.useState("none");return t.jsxs(w,{align:"start",children:[t.jsxs("p",{style:D,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:x,children:a})]}),t.jsxs("p",{style:D,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:x,children:r})]}),t.jsx(y,{open:e,onOpenChange:n,title:"Repeat escape drawer",onEscapeKeyDown:()=>c(m=>m+1),onCloseReason:b,children:t.jsx("p",{style:p,children:"Repeated Escape keydown should not close this drawer."})})]})}const ee={render:()=>t.jsx(hn,{}),play:async({canvasElement:e})=>{const n=e.ownerDocument,a=u(n.body);await o(await a.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),d.keyDown(n,{key:"Escape",repeat:!0}),await o(a.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await l.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var Re,Te,Ce;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ce=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Ie,je,Se;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var He,Fe,Oe;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Oe=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};var Ae,Pe,Ne;N.parameters={...N.parameters,docs:{...(Ae=N.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ne=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var Le,Ke,Ye;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ye=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var qe,Me,Ue;K.parameters={...K.parameters,docs:{...(qe=K.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ue=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var Ve,Ge,ze;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <RuntimeVisualConfigNormalizationDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const drawer = await body.findByRole("dialog", {
      name: "Runtime visual config drawer"
    });
    await expect(drawer).toHaveAttribute("data-side", "right");
    await expect(drawer).toHaveStyle({
      right: "0px"
    });
  }
}`,...(ze=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var _e,$e,We;q.parameters={...q.parameters,docs:{...(_e=q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(We=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};var Je,Qe,Xe;M.parameters={...M.parameters,docs:{...(Je=M.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=M.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=U.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,ot;V.parameters={...V.parameters,docs:{...(nt=V.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(at=V.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var rt,st,it;G.parameters={...G.parameters,docs:{...(rt=G.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=G.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,lt,dt;z.parameters={...z.parameters,docs:{...(ct=z.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(lt=z.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,yt,pt;_.parameters={..._.parameters,docs:{...(ut=_.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(yt=_.parameters)==null?void 0:yt.docs)==null?void 0:pt.source}}};var wt,mt,bt;$.parameters={...$.parameters,docs:{...(wt=$.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(bt=(mt=$.parameters)==null?void 0:mt.docs)==null?void 0:bt.source}}};var gt,ft,vt;W.parameters={...W.parameters,docs:{...(gt=W.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(ft=W.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};var ht,Bt,Dt;J.parameters={...J.parameters,docs:{...(ht=J.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Dt=(Bt=J.parameters)==null?void 0:Bt.docs)==null?void 0:Dt.source}}};var xt,kt,Et;Q.parameters={...Q.parameters,docs:{...(xt=Q.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Et=(kt=Q.parameters)==null?void 0:kt.docs)==null?void 0:Et.source}}};var Rt,Tt,Ct;X.parameters={...X.parameters,docs:{...(Rt=X.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ct=(Tt=X.parameters)==null?void 0:Tt.docs)==null?void 0:Ct.source}}};var It,jt,St;Z.parameters={...Z.parameters,docs:{...(It=Z.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(St=(jt=Z.parameters)==null?void 0:jt.docs)==null?void 0:St.source}}};var Ht,Ft,Ot;ee.parameters={...ee.parameters,docs:{...(Ht=ee.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ot=(Ft=ee.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};const Sn=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonTextTitleAutoNameFallback","NumericDescriptionSemantics","NonDismissible","RuntimeVisualConfigNormalization","RuntimeBooleanConfigNormalization","DismissGuardHooks","CloseButtonPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{G as CloseButtonKeyboardPressedState,z as CloseButtonManagedKeysPreemptedByLocalHandler,U as CloseButtonPrimaryPointerOnly,_ as CloseReasonTelemetry,M as DismissGuardHooks,X as EscapeIgnoresImeComposition,Z as EscapePreemptedByGlobalHandler,ee as EscapeRepeatGuard,V as FocusIntentReentry,$ as FocusReturn,W as FocusTrapKeyboardCycle,P as IconTitleAriaLabelFallback,O as Interactive,A as LabelledByPrecedence,Q as NestedDismissOrder,J as NoFocusReturn,K as NonDismissible,N as NonTextTitleAutoNameFallback,L as NumericDescriptionSemantics,q as RuntimeBooleanConfigNormalization,Y as RuntimeVisualConfigNormalization,Sn as __namedExportsOrder,jn as default};
