import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as w}from"./Button-BhfMIoQv.js";import{l as Ge,P as Me,F as Ke}from"./bodyScrollLock-D0vp0S5S.js";import{D as Le}from"./DismissableLayer-DAyP3iyR.js";import{D as Ae}from"./Dropdown-CAW9LzpQ.js";import{within as l,fireEvent as v,expect as o,userEvent as s}from"./index-DgAF9SIF.js";import{b as g,s as f,a as D}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function u({open:n,side:t="right",title:a,description:i,children:d,restoreFocus:y=!0,closeOnEscape:p=!0,closeOnOutsidePointer:h=!0,showCloseButton:He=!0,closeLabel:N="Close drawer",onEscapeKeyDown:q,onPointerDownOutside:G,onCloseReason:b,onOpenChange:M}){const U=r.useId(),Y=r.useId(),[K,z]=r.useState(!1),[_,B]=r.useState(!1),[$,L]=r.useState(!1),A=r.useRef(!0),Fe=r.useRef(null),[V,Pe]=r.useState(null),Ne=typeof N=="string"&&N.trim().length>0?N.trim():"Close drawer",qe=r.useCallback(c=>{b==null||b(c),M(!1)},[b,M]);return r.useEffect(()=>{if(!(!n||!V))return Ge(V.ownerDocument)},[n,V]),n?e.jsx(Me,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:e.jsx(Le,{onEscapeKeyDown:c=>{if(q==null||q(c),!c.defaultPrevented){if(!p){c.preventDefault();return}b==null||b("escape-key")}},onPointerDownOutside:c=>{if(G==null||G(c),!c.defaultPrevented){if(!h){c.preventDefault();return}b==null||b("outside-pointer")}},onDismiss:()=>M(!1),children:e.jsx(Ke,{restoreFocus:y,children:e.jsxs("aside",{ref:c=>{Fe.current=c,Pe(c)},role:"dialog","aria-modal":"true","aria-labelledby":U,"aria-describedby":i?Y:void 0,"data-side":t,style:{position:"absolute",top:0,bottom:0,[t]:0,width:"min(420px, 90vw)",borderLeft:t==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:t==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:t==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:t==="left"?"var(--aurora-radius-lg)":0},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("h2",{id:U,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:a}),i?e.jsx("p",{id:Y,style:{margin:0,color:"var(--aurora-text-secondary)"},children:i}):null]}),He?e.jsx("button",{type:"button",onClick:()=>qe("close-button"),"aria-label":Ne,onMouseEnter:()=>{z(!0)},onMouseLeave:()=>{z(!1),B(!1)},onMouseDown:c=>{c.button===0&&(A.current=!1,L(!1)),c.button===0&&B(!0)},onMouseUp:c=>{c.button===0&&B(!1)},onKeyDown:()=>{A.current=!0},onFocus:c=>{L(Ve(c.currentTarget,A.current))},onBlur:()=>{L(!1),B(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:K||$?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:_?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":K?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:K?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:$?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:_?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),e.jsx("div",{style:{overflow:"auto"},children:d})]})})})})}):null}function Ve(n,t){try{return n.matches(":focus-visible")}catch{return t}}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const ut={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},P={display:"grid",gap:10},Oe={display:"grid",gap:10,justifyItems:"start"},m={margin:0},Se={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Ue(){const[n,t]=r.useState(!1);return e.jsxs(g,{align:"start",children:[e.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(u,{open:n,onOpenChange:t,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:e.jsxs("div",{style:P,children:[e.jsx("p",{style:m,children:"Use this panel to narrow incident review scope."}),e.jsx(w,{onClick:()=>t(!1),children:"Apply and close"})]})})]})}const x={render:()=>e.jsx(Ue,{}),play:async({canvasElement:n})=>{const t=l(n),a=l(n.ownerDocument.body);await s.click(t.getByRole("button",{name:"Open Drawer"})),await o(await a.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close drawer"})),await o(a.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function Ye(){const[n,t]=r.useState(!0);return e.jsxs(g,{align:"start",children:[e.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:e.jsxs("div",{style:P,children:[e.jsx("p",{style:m,children:"Outside click and Escape are disabled in this flow."}),e.jsx(w,{onClick:()=>t(!1),children:"I understand"})]})})]})}const T={render:()=>e.jsx(Ye,{}),play:async({canvasElement:n})=>{const t=l(n.ownerDocument.body),a=await t.findByRole("dialog",{name:"Security checklist"});await s.keyboard("{Escape}"),await o(a).toBeInTheDocument(),await s.click(t.getByRole("button",{name:"I understand"})),await o(t.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function ze(){const[n,t]=r.useState(!0),[a,i]=r.useState(0),[d,y]=r.useState(0);return e.jsx(g,{align:"start",children:e.jsxs("div",{style:Oe,children:[e.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:Se}),e.jsxs("p",{style:f,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:D,children:a})]}),e.jsxs("p",{style:f,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:D,children:d})]}),e.jsx(u,{open:n,onOpenChange:t,title:"Guarded drawer",onEscapeKeyDown:p=>{p.preventDefault(),i(h=>h+1)},onPointerDownOutside:p=>{p.preventDefault(),y(h=>h+1)},children:e.jsx("p",{style:m,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const R={render:()=>e.jsx(ze,{}),play:async({canvasElement:n})=>{const t=l(n.ownerDocument.body),a=t.getByTestId("drawer-guard-outside-target");await o(await t.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(t.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(t.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await s.click(a),await o(t.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(t.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function _e(){const[n,t]=r.useState(!0);return e.jsxs(g,{align:"start",children:[e.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Reopen Drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:e.jsx("p",{style:m,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const E={render:()=>e.jsx(_e,{}),play:async({canvasElement:n})=>{const a=await l(n.ownerDocument.body).findByRole("button",{name:"Close drawer"});v.mouseDown(a,{button:2}),await o(a.style.transform).toContain("translateY(0"),v.mouseDown(a),v.mouseUp(a),await o(a.style.transform).toContain("translateY(0")}};function $e(){const[n,t]=r.useState(!1),[a,i]=r.useState("none"),[d,y]=r.useState("none");return e.jsx(g,{align:"start",children:e.jsxs("div",{style:Oe,children:[e.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:Se}),e.jsxs("p",{style:f,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"drawer-close-reason",style:D,children:a})]}),e.jsxs("p",{style:f,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"drawer-close-trace",style:D,children:d})]}),e.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Open Telemetry Drawer"}),e.jsx(u,{open:n,onOpenChange:p=>{t(p),p||y(h=>`${h} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:p=>{i(p),y(`reason:${p}`)},children:e.jsx("p",{style:m,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const k={render:()=>e.jsx($e,{}),play:async({canvasElement:n})=>{const t=l(n),a=l(n.ownerDocument.body),i=t.getByTestId("drawer-outside-target");await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await s.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close drawer"})),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await s.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(t.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await a.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await s.pointer({target:i,keys:"[MouseLeft]"}),await o(t.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(t.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function We(){const[n,t]=r.useState(!1);return e.jsxs(g,{align:"start",children:[e.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Open Focus Return Drawer"}),e.jsx(u,{open:n,onOpenChange:t,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:e.jsx("p",{style:m,children:"Use close button and verify trigger focus restoration."})})]})}const I={render:()=>e.jsx(We,{}),play:async({canvasElement:n})=>{const t=l(n),a=l(n.ownerDocument.body),i=t.getByRole("button",{name:"Open Focus Return Drawer"});await s.click(i),await o(await a.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close drawer"})),await o(i).toHaveFocus()}};function Je(){const[n,t]=r.useState(!0);return e.jsxs(g,{align:"start",children:[e.jsx("button",{type:"button",children:"Outside before drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Focus trap drawer",children:e.jsxs("div",{style:P,children:[e.jsx("p",{style:m,children:"Tab and Shift+Tab should cycle within the drawer."}),e.jsx(w,{children:"Primary drawer action"}),e.jsx(w,{variant:"outline",children:"Secondary drawer action"})]})}),e.jsx("button",{type:"button",children:"Outside after drawer"})]})}const C={render:()=>e.jsx(Je,{}),play:async({canvasElement:n})=>{const t=l(n.ownerDocument.body),a=await t.findByRole("button",{name:"Close drawer"}),i=t.getByRole("button",{name:"Primary drawer action"}),d=t.getByRole("button",{name:"Secondary drawer action"}),y=t.getByRole("button",{name:"Outside after drawer"});a.focus(),await o(a).toHaveFocus(),await s.tab(),await o(i).toHaveFocus(),await s.tab(),await o(d).toHaveFocus(),await s.tab(),await o(a).toHaveFocus(),await o(y).not.toHaveFocus(),await s.tab({shift:!0}),await o(d).toHaveFocus()}};function Qe(){const[n,t]=r.useState(!1);return e.jsxs(g,{align:"start",gap:8,children:[e.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Open No Focus Return Drawer"}),e.jsx("button",{type:"button",children:"Post-close target"}),e.jsx(u,{open:n,onOpenChange:t,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:e.jsx("p",{style:m,children:"Use this mode when close flow intentionally hands off focus."})})]})}const j={render:()=>e.jsx(Qe,{}),play:async({canvasElement:n})=>{const t=l(n),a=l(n.ownerDocument.body),i=t.getByRole("button",{name:"Open No Focus Return Drawer"});await s.click(i),await o(await a.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close drawer"})),await o(i).not.toHaveFocus()}};function Xe(){const[n,t]=r.useState(!1);return e.jsxs(g,{align:"start",children:[e.jsx(w,{variant:"outline",onClick:()=>t(!0),children:"Open Nested Overlay Drawer"}),e.jsx(u,{open:n,onOpenChange:t,title:"Nested overlay drawer",children:e.jsxs("div",{style:P,children:[e.jsx("p",{style:m,children:"Escape should close dropdown first, then drawer."}),e.jsx(Ae,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const O={render:()=>e.jsx(Xe,{}),play:async({canvasElement:n})=>{const t=l(n),a=l(n.ownerDocument.body);await s.click(t.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await a.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Drawer actions"})),await o(a.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(a.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(a.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function Ze(){const[n,t]=r.useState(!0);return e.jsx(u,{open:n,onOpenChange:t,title:"IME composition drawer",children:e.jsx("p",{style:m,children:"Escape should be ignored while IME composition is active."})})}const S={render:()=>e.jsx(Ze,{}),play:async({canvasElement:n})=>{const t=n.ownerDocument,a=l(t.body);await o(await a.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),v.keyDown(t,{key:"Escape",isComposing:!0}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),v.keyDown(t,{key:"Escape",keyCode:229}),await o(a.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function et(){const[n,t]=r.useState(!0),[a,i]=r.useState(0);return r.useEffect(()=>{const d=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",d,!0),()=>{document.removeEventListener("keydown",d,!0)}},[]),e.jsxs(g,{align:"start",children:[e.jsxs("p",{style:f,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"drawer-escape-calls",style:D,children:a})]}),e.jsx(u,{open:n,onOpenChange:t,title:"Preempted escape drawer",onEscapeKeyDown:()=>i(d=>d+1),children:e.jsx("p",{style:m,children:"Escape should remain preempted by global handlers."})})]})}const H={render:()=>e.jsx(et,{}),play:async({canvasElement:n})=>{const t=n.ownerDocument,a=l(t.body);await o(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),v.keyDown(t,{key:"Escape",ctrlKey:!0}),v.keyDown(t,{key:"Escape",altKey:!0}),v.keyDown(t,{key:"Escape",metaKey:!0}),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await o(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};function tt(){const[n,t]=r.useState(!0),[a,i]=r.useState(0),[d,y]=r.useState("none");return e.jsxs(g,{align:"start",children:[e.jsxs("p",{style:f,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"drawer-repeat-escape-calls",style:D,children:a})]}),e.jsxs("p",{style:f,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"drawer-repeat-close-reason",style:D,children:d})]}),e.jsx(u,{open:n,onOpenChange:t,title:"Repeat escape drawer",onEscapeKeyDown:()=>i(p=>p+1),onCloseReason:y,children:e.jsx("p",{style:m,children:"Repeated Escape keydown should not close this drawer."})})]})}const F={render:()=>e.jsx(tt,{}),play:async({canvasElement:n})=>{const t=n.ownerDocument,a=l(t.body);await o(await a.findByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),v.keyDown(t,{key:"Escape",repeat:!0}),await o(a.getByRole("dialog",{name:"Repeat escape drawer"})).toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("0"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await o(a.queryByRole("dialog",{name:"Repeat escape drawer"})).not.toBeInTheDocument(),await o(a.getByTestId("drawer-repeat-escape-calls")).toHaveTextContent("1"),await o(a.getByTestId("drawer-repeat-close-reason")).toHaveTextContent("escape-key")}};var W,J,Q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <NonDismissibleDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Security checklist"
    });
    await userEvent.keyboard("{Escape}");
    await expect(dialog).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "I understand"
    }));
    await expect(body.queryByRole("dialog", {
      name: "Security checklist"
    })).not.toBeInTheDocument();
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,re,se;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=E.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,ye;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ye=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var pe,me,we;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(we=(me=C.parameters)==null?void 0:me.docs)==null?void 0:we.source}}};var ge,be,ve;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var he,fe,De;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(De=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:De.source}}};var Be,xe,Te;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Te=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Re,Ee,ke;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(ke=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Ie,Ce,je;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(je=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};const yt=["Interactive","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{E as CloseButtonPrimaryPointerOnly,k as CloseReasonTelemetry,R as DismissGuardHooks,S as EscapeIgnoresImeComposition,H as EscapePreemptedByGlobalHandler,F as EscapeRepeatGuard,I as FocusReturn,C as FocusTrapKeyboardCycle,x as Interactive,O as NestedDismissOrder,j as NoFocusReturn,T as NonDismissible,yt as __namedExportsOrder,ut as default};
