import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as p}from"./Button-DeQ1OHWt.js";import{l as ue,P as me,F as pe}from"./bodyScrollLock-DtRy56KP.js";import{D as ye}from"./DismissableLayer-BWoUnDZk.js";import{D as we}from"./Dropdown-CDrPyIxd.js";import{within as c,expect as r,userEvent as o,fireEvent as q}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function u({open:a,side:e="right",title:n,description:i,children:m,restoreFocus:y=!0,closeOnEscape:se=!0,closeOnOutsidePointer:ie=!0,showCloseButton:ce=!0,closeLabel:le="Close drawer",onEscapeKeyDown:R,onPointerDownOutside:E,onCloseReason:d,onOpenChange:T}){const C=s.useId(),O=s.useId(),[k,N]=s.useState(!1),[F,w]=s.useState(!1),[S,I]=s.useState(!1),j=s.useRef(!0),de=s.useCallback(l=>{d==null||d(l),T(!1)},[d,T]);return s.useEffect(()=>{if(a)return ue()},[a]),a?t.jsx(me,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(ye,{onEscapeKeyDown:l=>{if(R==null||R(l),!l.defaultPrevented){if(!se){l.preventDefault();return}d==null||d("escape-key")}},onPointerDownOutside:l=>{if(E==null||E(l),!l.defaultPrevented){if(!ie){l.preventDefault();return}d==null||d("outside-pointer")}},onDismiss:()=>T(!1),children:t.jsx(pe,{restoreFocus:y,children:t.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":C,"aria-describedby":i?O:void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:C,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),i?t.jsx("p",{id:O,style:{margin:0,color:"var(--aurora-text-secondary)"},children:i}):null]}),ce?t.jsx("button",{type:"button",onClick:()=>de("close-button"),"aria-label":le,onMouseEnter:()=>{N(!0)},onMouseLeave:()=>{N(!1),w(!1)},onMouseDown:()=>{j.current=!1,I(!1),w(!0)},onMouseUp:()=>{w(!1)},onKeyDown:()=>{j.current=!0},onFocus:l=>{I(ge(l.currentTarget,j.current))},onBlur:()=>{I(!1),w(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:k||S?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:F?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":k?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:k?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:S?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:F?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:m})]})})})})}):null}function ge(a,e){try{return a.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Fe={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function ve(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),t.jsx(p,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const g={render:()=>t.jsx(ve,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await o.click(e.getByRole("button",{name:"Open Drawer"})),await r(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function be(){const[a,e]=s.useState(!0);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),t.jsx(p,{onClick:()=>e(!1),children:"I understand"})]})})]})}const v={render:()=>t.jsx(be,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Security checklist"});await o.keyboard("{Escape}"),await r(n).toBeInTheDocument(),await o.click(e.getByRole("button",{name:"I understand"})),await r(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function he(){const[a,e]=s.useState(!1),[n,i]=s.useState("none");return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Close reason telemetry drawer",onCloseReason:m=>i(m),children:t.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const b={render:()=>t.jsx(he,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByTestId("drawer-outside-target");await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.pointer({target:i,keys:"[MouseLeft]"}),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer")}};function fe(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const h={render:()=>t.jsx(fe,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByRole("button",{name:"Open Focus Return Drawer"});await o.click(i),await r(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(i).toHaveFocus()}};function De(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:{margin:0},children:"Use this mode when close flow intentionally hands off focus."})})]})}const f={render:()=>t.jsx(De,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByRole("button",{name:"Open No Focus Return Drawer"});await o.click(i),await r(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(i).not.toHaveFocus()}};function Be(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),t.jsx(we,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const D={render:()=>t.jsx(Be,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await o.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Drawer actions"})),await r(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function xe(){const[a,e]=s.useState(!0);return t.jsx(u,{open:a,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const B={render:()=>t.jsx(xe,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=c(e.body);await r(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),q.keyDown(e,{key:"Escape",isComposing:!0}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),q.keyDown(e,{key:"Escape",keyCode:229}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function Re(){const[a,e]=s.useState(!0),[n,i]=s.useState(0);return s.useEffect(()=>{const m=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",m,!0),()=>{document.removeEventListener("keydown",m,!0)}},[]),t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>i(m=>m+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const x={render:()=>t.jsx(Re,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body);await r(await e.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};var H,P,M;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(P=g.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var L,V,z;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(V=v.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var G,U,_;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("drawer-outside-target");
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("none");
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
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key");
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
  }
}`,...(_=(U=b.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var A,K,Y;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(Y=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var W,J,Q;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,oe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Se=["Interactive","NonDismissible","CloseReasonTelemetry","FocusReturn","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{b as CloseReasonTelemetry,B as EscapeIgnoresImeComposition,x as EscapePreemptedByGlobalHandler,h as FocusReturn,g as Interactive,D as NestedDismissOrder,f as NoFocusReturn,v as NonDismissible,Se as __namedExportsOrder,Fe as default};
