import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as m}from"./Button-BNFQVefv.js";import{l as we,P as ge,F as ve}from"./bodyScrollLock-DtRy56KP.js";import{D as be}from"./DismissableLayer-BWoUnDZk.js";import{D as fe}from"./Dropdown-CYoe68YA.js";import{within as c,expect as r,userEvent as o,fireEvent as M}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function u({open:a,side:e="right",title:n,description:i,children:l,restoreFocus:p=!0,closeOnEscape:w=!0,closeOnOutsidePointer:E=!0,showCloseButton:ye=!0,closeLabel:me="Close drawer",onEscapeKeyDown:I,onPointerDownOutside:k,onCloseReason:y,onOpenChange:j}){const H=s.useId(),S=s.useId(),[C,N]=s.useState(!1),[q,g]=s.useState(!1),[P,O]=s.useState(!1),F=s.useRef(!0),pe=s.useCallback(d=>{y==null||y(d),j(!1)},[y,j]);return s.useEffect(()=>{if(a)return we()},[a]),a?t.jsx(ge,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(be,{onEscapeKeyDown:d=>{if(I==null||I(d),!d.defaultPrevented){if(!w){d.preventDefault();return}y==null||y("escape-key")}},onPointerDownOutside:d=>{if(k==null||k(d),!d.defaultPrevented){if(!E){d.preventDefault();return}y==null||y("outside-pointer")}},onDismiss:()=>j(!1),children:t.jsx(ve,{restoreFocus:p,children:t.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":H,"aria-describedby":i?S:void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:H,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),i?t.jsx("p",{id:S,style:{margin:0,color:"var(--aurora-text-secondary)"},children:i}):null]}),ye?t.jsx("button",{type:"button",onClick:()=>pe("close-button"),"aria-label":me,onMouseEnter:()=>{N(!0)},onMouseLeave:()=>{N(!1),g(!1)},onMouseDown:()=>{F.current=!1,O(!1),g(!0)},onMouseUp:()=>{g(!1)},onKeyDown:()=>{F.current=!0},onFocus:d=>{O(he(d.currentTarget,F.current))},onBlur:()=>{O(!1),g(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:C||P?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:q?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":C?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:C?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:P?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:q?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:l})]})})})})}):null}function he(a,e){try{return a.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Me={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function xe(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),t.jsx(m,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const v={render:()=>t.jsx(xe,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await o.click(e.getByRole("button",{name:"Open Drawer"})),await r(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function Be(){const[a,e]=s.useState(!0);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),t.jsx(m,{onClick:()=>e(!1),children:"I understand"})]})})]})}const b={render:()=>t.jsx(Be,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Security checklist"});await o.keyboard("{Escape}"),await r(n).toBeInTheDocument(),await o.click(e.getByRole("button",{name:"I understand"})),await r(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function De(){const[a,e]=s.useState(!1),[n,i]=s.useState("none"),[l,p]=s.useState("none");return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:{color:"var(--aurora-text-primary)"},children:l})]}),t.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:a,onOpenChange:w=>{e(w),w||p(E=>`${E} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:w=>{i(w),p(`reason:${w}`)},children:t.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const f={render:()=>t.jsx(De,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByTestId("drawer-outside-target");await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.pointer({target:i,keys:"[MouseLeft]"}),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Te(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const h={render:()=>t.jsx(Te,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByRole("button",{name:"Open Focus Return Drawer"});await o.click(i),await r(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(i).toHaveFocus()}};function Re(){const[a,e]=s.useState(!0);return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(m,{children:"Primary drawer action"}),t.jsx(m,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const x={render:()=>t.jsx(Re,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body),n=await e.findByRole("button",{name:"Close drawer"}),i=e.getByRole("button",{name:"Primary drawer action"}),l=e.getByRole("button",{name:"Secondary drawer action"}),p=e.getByRole("button",{name:"Outside after drawer"});n.focus(),await r(n).toHaveFocus(),await o.tab(),await r(i).toHaveFocus(),await o.tab(),await r(l).toHaveFocus(),await o.tab(),await r(n).toHaveFocus(),await r(p).not.toHaveFocus(),await o.tab({shift:!0}),await r(l).toHaveFocus()}};function Ee(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[t.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:{margin:0},children:"Use this mode when close flow intentionally hands off focus."})})]})}const B={render:()=>t.jsx(Ee,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByRole("button",{name:"Open No Focus Return Drawer"});await o.click(i),await r(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(i).not.toHaveFocus()}};function Ie(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),t.jsx(fe,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const D={render:()=>t.jsx(Ie,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await o.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Drawer actions"})),await r(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function ke(){const[a,e]=s.useState(!0);return t.jsx(u,{open:a,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const T={render:()=>t.jsx(ke,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=c(e.body);await r(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),M.keyDown(e,{key:"Escape",isComposing:!0}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),M.keyDown(e,{key:"Escape",keyCode:229}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function je(){const[a,e]=s.useState(!0),[n,i]=s.useState(0);return s.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>i(l=>l+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const R={render:()=>t.jsx(je,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body);await r(await e.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};var L,A,V;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(A=v.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var K,z,G;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var U,_,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(_=f.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var $,W,J;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(W=h.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var Q,X,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,oe;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=D.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Preempted escape drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Preempted escape drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-escape-calls")).toHaveTextContent("0");
  }
}`,...(ue=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Le=["Interactive","NonDismissible","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{f as CloseReasonTelemetry,T as EscapeIgnoresImeComposition,R as EscapePreemptedByGlobalHandler,h as FocusReturn,x as FocusTrapKeyboardCycle,v as Interactive,D as NestedDismissOrder,B as NoFocusReturn,b as NonDismissible,Le as __namedExportsOrder,Me as default};
