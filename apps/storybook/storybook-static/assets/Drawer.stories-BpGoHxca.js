import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as b}from"./Button-BMxlc9Nj.js";import{l as Le,P as Ve,F as ze}from"./bodyScrollLock-D0vp0S5S.js";import{D as _e}from"./DismissableLayer-DAyP3iyR.js";import{D as $e}from"./Dropdown-n4IFWXQu.js";import{within as l,expect as o,fireEvent as d,waitFor as h,userEvent as i}from"./index-DgAF9SIF.js";import{b as g,s as B,a as D}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function y({open:a,side:t="right",title:n,description:r,children:u,restoreFocus:w=!0,closeOnEscape:p=!0,closeOnOutsidePointer:f=!0,showCloseButton:Ae=!0,closeLabel:q="Close drawer",onEscapeKeyDown:A,onPointerDownOutside:Y,onCloseReason:v,onOpenChange:M}){const z=s.useId(),_=s.useId(),[G,$]=s.useState(!1),[W,x]=s.useState(!1),[J,U]=s.useState(!1),L=s.useRef(!0),Ye=s.useRef(null),[V,Me]=s.useState(null),Ge=typeof q=="string"&&q.trim().length>0?q.trim():"Close drawer",Ue=s.useCallback(c=>{v==null||v(c),M(!1)},[v,M]);return s.useEffect(()=>{if(!(!a||!V))return Le(V.ownerDocument)},[a,V]),a?e.jsx(Ve,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:e.jsx(_e,{onEscapeKeyDown:c=>{if(A==null||A(c),!c.defaultPrevented){if(!p){c.preventDefault();return}v==null||v("escape-key")}},onPointerDownOutside:c=>{if(Y==null||Y(c),!c.defaultPrevented){if(!f){c.preventDefault();return}v==null||v("outside-pointer")}},onDismiss:()=>M(!1),children:e.jsx(ze,{restoreFocus:w,children:e.jsxs("aside",{ref:c=>{Ye.current=c,Me(c)},role:"dialog","aria-modal":"true","aria-labelledby":z,"aria-describedby":r?_:void 0,"aria-keyshortcuts":p?"Escape":void 0,"data-side":t,style:{position:"absolute",top:0,bottom:0,[t]:0,width:"min(420px, 90vw)",borderLeft:t==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:t==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:t==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:t==="left"?"var(--aurora-radius-lg)":0},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("h2",{id:z,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),r?e.jsx("p",{id:_,style:{margin:0,color:"var(--aurora-text-secondary)"},children:r}):null]}),Ae?e.jsx("button",{"data-aurora-reduced-motion":"transition",type:"button",onClick:()=>Ue("close-button"),"aria-label":Ge,"aria-keyshortcuts":"Enter Space",onMouseEnter:()=>{$(!0)},onMouseLeave:()=>{$(!1),x(!1)},onMouseDown:c=>{c.button===0&&(L.current=!1,U(!1)),c.button===0&&x(!0)},onMouseUp:c=>{c.button===0&&x(!1)},onKeyDown:c=>{L.current=!0,Q(c.key)&&!Je(c)&&x(!0)},onKeyUp:c=>{Q(c.key)&&x(!1)},onFocus:c=>{U(We(c.currentTarget,L.current))},onBlur:()=>{U(!1),x(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:G||J?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:W?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":G?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:G?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:J?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:W?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),e.jsx("div",{style:{overflow:"auto"},children:u})]})})})})}):null}function We(a,t){try{return a.matches(":focus-visible")}catch{return t}}function Q(a){return a==="Enter"||a===" "||a==="Space"||a==="Spacebar"}function Je(a){return a.altKey||a.ctrlKey||a.metaKey}y.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const ft={title:"Overlay/Drawer",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},K={display:"grid",gap:10},Ke={display:"grid",gap:10,justifyItems:"start"},m={margin:0},qe={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Qe(){const[a,t]=s.useState(!1);return e.jsxs(g,{align:"start",children:[e.jsx(b,{variant:"outline",onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(y,{open:a,onOpenChange:t,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:e.jsxs("div",{style:K,children:[e.jsx("p",{style:m,children:"Use this panel to narrow incident review scope."}),e.jsx(b,{onClick:()=>t(!1),children:"Apply and close"})]})})]})}const E={render:()=>e.jsx(Qe,{}),play:async({canvasElement:a})=>{const t=l(a),n=l(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Drawer"})),await o(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Close drawer"})),await o(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function Xe(){const[a,t]=s.useState(!0);return e.jsxs(g,{align:"start",children:[e.jsx(b,{variant:"outline",onClick:()=>t(!0),children:"Reopen Drawer"}),e.jsx(y,{open:a,onOpenChange:t,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:e.jsxs("div",{style:K,children:[e.jsx("p",{style:m,children:"Outside click and Escape are disabled in this flow."}),e.jsx(b,{onClick:()=>t(!1),children:"I understand"})]})})]})}const T={render:()=>e.jsx(Xe,{}),play:async({canvasElement:a})=>{const t=l(a.ownerDocument.body),n=await t.findByRole("dialog",{name:"Security checklist"});await o(n).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{Escape}"),await o(n).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"I understand"})),await o(t.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function Ze(){const[a,t]=s.useState(!0),[n,r]=s.useState(0),[u,w]=s.useState(0);return e.jsx(g,{align:"start",children:e.jsxs("div",{style:Ke,children:[e.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:qe}),e.jsxs("p",{style:B,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:D,children:n})]}),e.jsxs("p",{style:B,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:D,children:u})]}),e.jsx(y,{open:a,onOpenChange:t,title:"Guarded drawer",onEscapeKeyDown:p=>{p.preventDefault(),r(f=>f+1)},onPointerDownOutside:p=>{p.preventDefault(),w(f=>f+1)},children:e.jsx("p",{style:m,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const k={render:()=>e.jsx(Ze,{}),play:async({canvasElement:a})=>{const t=l(a.ownerDocument.body),n=t.getByTestId("drawer-guard-outside-target");await o(await t.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(t.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await i.click(n),await o(t.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(t.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function et(){const[a,t]=s.useState(!0);return e.jsxs(g,{align:"start",children:[e.jsx(b,{variant:"outline",onClick:()=>t(!0),children:"Reopen Drawer"}),e.jsx(y,{open:a,onOpenChange:t,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:e.jsx("p",{style:m,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const R={render:()=>e.jsx(et,{}),play:async({canvasElement:a})=>{const n=await l(a.ownerDocument.body).findByRole("button",{name:"Close drawer"});d.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),d.mouseDown(n),d.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function tt(){const[a,t]=s.useState(!0);return e.jsx(g,{align:"start",children:e.jsx(y,{open:a,onOpenChange:t,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only.",children:e.jsx("p",{style:m,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})})}const C={render:()=>e.jsx(tt,{}),play:async({canvasElement:a})=>{const t=l(a.ownerDocument.body),n=await t.findByRole("dialog",{name:"Keyboard pressed close affordance"});await o(n).toHaveAttribute("aria-keyshortcuts","Escape");const r=await t.findByRole("button",{name:"Close drawer"});await o(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),r.focus(),d.keyDown(r,{key:"Enter",ctrlKey:!0}),await h(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyUp(r,{key:"Enter",ctrlKey:!0}),d.keyDown(r,{key:"Enter"}),await h(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Enter"}),await h(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Spacebar"}),await h(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Spacebar"}),await h(()=>{o(r.style.transform).toContain("translateY(0")}),d.keyDown(r,{key:"Space"}),await h(()=>{o(r.style.transform).toContain("translateY(1px)")}),d.keyUp(r,{key:"Space"}),await h(()=>{o(r.style.transform).toContain("translateY(0")})}};function at(){const[a,t]=s.useState(!1),[n,r]=s.useState("none"),[u,w]=s.useState("none");return e.jsx(g,{align:"start",children:e.jsxs("div",{style:Ke,children:[e.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:qe}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"drawer-close-reason",style:D,children:n})]}),e.jsxs("p",{style:B,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"drawer-close-trace",style:D,children:u})]}),e.jsx(b,{variant:"outline",onClick:()=>t(!0),children:"Open Telemetry Drawer"}),e.jsx(y,{open:a,onOpenChange:p=>{t(p),p||w(f=>`${f} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:p=>{r(p),w(`reason:${p}`)},children:e.jsx("p",{style:m,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const I={render:()=>e.jsx(at,{}),play:async({canvasElement:a})=>{const t=l(a),n=l(a.ownerDocument.body),r=t.getByTestId("drawer-outside-target");await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await i.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Close drawer"})),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await i.pointer({target:r,keys:"[MouseLeft]"}),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function nt(){const[a,t]=s.useState(!1);return e.jsxs(g,{align:"start",children:[e.jsx(b,{variant:"outline",onClick:()=>t(!0),children:"Open Focus Return Drawer"}),e.jsx(y,{open:a,onOpenChange:t,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:e.jsx("p",{style:m,children:"Use close button and verify trigger focus restoration."})})]})}const j={render:()=>e.jsx(nt,{}),play:async({canvasElement:a})=>{const t=l(a),n=l(a.ownerDocument.body),r=t.getByRole("button",{name:"Open Focus Return Drawer"});await i.click(r),await o(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Close drawer"})),await o(r).toHaveFocus()}};function ot(){const[a,t]=s.useState(!0);return e.jsxs(g,{align:"start",children:[e.jsx("button",{type:"button",children:"Outside before drawer"}),e.jsx(y,{open:a,onOpenChange:t,title:"Focus trap drawer",children:e.jsxs("div",{style:K,children:[e.jsx("p",{style:m,children:"Tab and Shift+Tab should cycle within the drawer."}),e.jsx(b,{children:"Primary drawer action"}),e.jsx(b,{variant:"outline",children:"Secondary drawer action"})]})}),e.jsx("button",{type:"button",children:"Outside after drawer"})]})}const S={render:()=>e.jsx(ot,{}),play:async({canvasElement:a})=>{const t=l(a.ownerDocument.body),n=await t.findByRole("button",{name:"Close drawer"}),r=t.getByRole("button",{name:"Primary drawer action"}),u=t.getByRole("button",{name:"Secondary drawer action"}),w=t.getByRole("button",{name:"Outside after drawer"});n.focus(),await o(n).toHaveFocus(),await i.tab(),await o(r).toHaveFocus(),await i.tab(),await o(u).toHaveFocus(),await i.tab(),await o(n).toHaveFocus(),await o(w).not.toHaveFocus(),await i.tab({shift:!0}),await o(u).toHaveFocus()}};function rt(){const[a,t]=s.useState(!1);return e.jsxs(g,{align:"start",gap:8,children:[e.jsx(b,{variant:"outline",onClick:()=>t(!0),children:"Open No Focus Return Drawer"}),e.jsx("button",{type:"button",children:"Post-close target"}),e.jsx(y,{open:a,onOpenChange:t,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:e.jsx("p",{style:m,children:"Use this mode when close flow intentionally hands off focus."})})]})}const O={render:()=>e.jsx(rt,{}),play:async({canvasElement:a})=>{const t=l(a),n=l(a.ownerDocument.body),r=t.getByRole("button",{name:"Open No Focus Return Drawer"});await i.click(r),await o(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Close drawer"})),await o(r).not.toHaveFocus()}};function st(){const[a,t]=s.useState(!1);return e.jsxs(g,{align:"start",children:[e.jsx(b,{variant:"outline",onClick:()=>t(!0),children:"Open Nested Overlay Drawer"}),e.jsx(y,{open:a,onOpenChange:t,title:"Nested overlay drawer",children:e.jsxs("div",{style:K,children:[e.jsx("p",{style:m,children:"Escape should close dropdown first, then drawer."}),e.jsx($e,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const F={render:()=>e.jsx(st,{}),play:async({canvasElement:a})=>{const t=l(a),n=l(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Drawer actions"})),await o(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function it(){const[a,t]=s.useState(!0);return e.jsx(y,{open:a,onOpenChange:t,title:"IME composition drawer",children:e.jsx("p",{style:m,children:"Escape should be ignored while IME composition is active."})})}const H={render:()=>e.jsx(it,{}),play:async({canvasElement:a})=>{const t=a.ownerDocument,n=l(t.body);await o(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(t,{key:"Escape",isComposing:!0}),await o(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),d.keyDown(t,{key:"Escape",keyCode:229}),await o(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function ct(){const[a,t]=s.useState(!0),[n,r]=s.useState(0);return s.useEffect(()=>{const u=w=>{w.key==="Escape"&&w.preventDefault()};return document.addEventListener("keydown",u,!0),()=>{document.removeEventListener("keydown",u,!0)}},[]),e.jsxs(g,{align:"start",children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"drawer-escape-calls",style:D,children:n})]}),e.jsx(y,{open:a,onOpenChange:t,title:"Preempted escape drawer",onEscapeKeyDown:()=>r(u=>u+1),children:e.jsx("p",{style:m,children:"Escape should remain preempted by global handlers."})})]})}const P={render:()=>e.jsx(ct,{}),play:async({canvasElement:a})=>{const t=a.ownerDocument,n=l(t.body);await o(await n.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),d.keyDown(t,{key:"Escape",ctrlKey:!0}),d.keyDown(t,{key:"Escape",altKey:!0}),d.keyDown(t,{key:"Escape",metaKey:!0}),await o(n.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await o(n.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function lt(){const[a,t]=s.useState(!0),[n,r]=s.useState(0),[u,w]=s.useState("none");return e.jsxs(g,{align:"start",children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:D,children:n})]}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:D,children:u})]}),e.jsx(y,{open:a,onOpenChange:t,title:"Repeat escape drawer",onEscapeKeyDown:()=>r(p=>p+1),onCloseReason:w,children:e.jsx("p",{style:m,children:"Repeated Escape keydown should not close this drawer."})})]})}const N={render:()=>e.jsx(lt,{}),play:async({canvasElement:a})=>{const t=a.ownerDocument,n=l(t.body);await o(await n.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),d.keyDown(t,{key:"Escape",repeat:!0}),await o(n.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(n.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(n.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await i.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(n.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(n.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var X,Z,ee;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,re,se;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,ye;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
  }
}`,...(ye=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var pe,we,me;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(we=I.parameters)==null?void 0:we.docs)==null?void 0:me.source}}};var ge,be,ve;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,he,Be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Be=(he=S.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var De,xe,Ee;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ee=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Te,ke,Re;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Re=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Ce,Ie,je;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(je=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Se,Oe,Fe;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Fe=(Oe=P.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var He,Pe,Ne;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ne=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};const ht=["Interactive","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","CloseButtonKeyboardPressedState","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{C as CloseButtonKeyboardPressedState,R as CloseButtonPrimaryPointerOnly,I as CloseReasonTelemetry,k as DismissGuardHooks,H as EscapeIgnoresImeComposition,P as EscapePreemptedByGlobalHandler,N as EscapeRepeatGuard,j as FocusReturn,S as FocusTrapKeyboardCycle,E as Interactive,F as NestedDismissOrder,O as NoFocusReturn,T as NonDismissible,ht as __namedExportsOrder,ft as default};
