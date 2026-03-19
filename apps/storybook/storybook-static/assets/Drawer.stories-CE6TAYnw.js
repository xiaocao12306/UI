import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as p}from"./Button-BNFQVefv.js";import{l as ue,P as me,F as pe}from"./bodyScrollLock-DtRy56KP.js";import{D as ye}from"./DismissableLayer-BWoUnDZk.js";import{D as we}from"./Dropdown-CYoe68YA.js";import{within as c,expect as r,userEvent as s,fireEvent as P}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function u({open:a,side:e="right",title:n,description:i,children:m,restoreFocus:y=!0,closeOnEscape:w=!0,closeOnOutsidePointer:R=!0,showCloseButton:ce=!0,closeLabel:le="Close drawer",onEscapeKeyDown:E,onPointerDownOutside:I,onCloseReason:d,onOpenChange:k}){const H=o.useId(),N=o.useId(),[j,S]=o.useState(!1),[F,g]=o.useState(!1),[q,C]=o.useState(!1),O=o.useRef(!0),de=o.useCallback(l=>{d==null||d(l),k(!1)},[d,k]);return o.useEffect(()=>{if(a)return ue()},[a]),a?t.jsx(me,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(ye,{onEscapeKeyDown:l=>{if(E==null||E(l),!l.defaultPrevented){if(!w){l.preventDefault();return}d==null||d("escape-key")}},onPointerDownOutside:l=>{if(I==null||I(l),!l.defaultPrevented){if(!R){l.preventDefault();return}d==null||d("outside-pointer")}},onDismiss:()=>k(!1),children:t.jsx(pe,{restoreFocus:y,children:t.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":H,"aria-describedby":i?N:void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:H,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),i?t.jsx("p",{id:N,style:{margin:0,color:"var(--aurora-text-secondary)"},children:i}):null]}),ce?t.jsx("button",{type:"button",onClick:()=>de("close-button"),"aria-label":le,onMouseEnter:()=>{S(!0)},onMouseLeave:()=>{S(!1),g(!1)},onMouseDown:()=>{O.current=!1,C(!1),g(!0)},onMouseUp:()=>{g(!1)},onKeyDown:()=>{O.current=!0},onFocus:l=>{C(ge(l.currentTarget,O.current))},onBlur:()=>{C(!1),g(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:j||q?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:F?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":j?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:j?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:q?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:F?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:m})]})})})})}):null}function ge(a,e){try{return a.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Ne={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function ve(){const[a,e]=o.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),t.jsx(p,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const v={render:()=>t.jsx(ve,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Drawer"})),await r(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await s.click(n.getByRole("button",{name:"Close drawer"})),await r(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function be(){const[a,e]=o.useState(!0);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),t.jsx(p,{onClick:()=>e(!1),children:"I understand"})]})})]})}const b={render:()=>t.jsx(be,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Security checklist"});await s.keyboard("{Escape}"),await r(n).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"I understand"})),await r(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function fe(){const[a,e]=o.useState(!1),[n,i]=o.useState("none"),[m,y]=o.useState("none");return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:{color:"var(--aurora-text-primary)"},children:m})]}),t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:a,onOpenChange:w=>{e(w),w||y(R=>`${R} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:w=>{i(w),y(`reason:${w}`)},children:t.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const f={render:()=>t.jsx(fe,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByTestId("drawer-outside-target");await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await s.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await s.click(n.getByRole("button",{name:"Close drawer"})),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await s.pointer({target:i,keys:"[MouseLeft]"}),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await r(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function he(){const[a,e]=o.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const h={render:()=>t.jsx(he,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByRole("button",{name:"Open Focus Return Drawer"});await s.click(i),await r(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await s.click(n.getByRole("button",{name:"Close drawer"})),await r(i).toHaveFocus()}};function De(){const[a,e]=o.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:{margin:0},children:"Use this mode when close flow intentionally hands off focus."})})]})}const D={render:()=>t.jsx(De,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),i=e.getByRole("button",{name:"Open No Focus Return Drawer"});await s.click(i),await r(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await s.click(n.getByRole("button",{name:"Close drawer"})),await r(i).not.toHaveFocus()}};function xe(){const[a,e]=o.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),t.jsx(we,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const x={render:()=>t.jsx(xe,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await s.click(n.getByRole("button",{name:"Drawer actions"})),await r(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await r(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function Be(){const[a,e]=o.useState(!0);return t.jsx(u,{open:a,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const B={render:()=>t.jsx(Be,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=c(e.body);await r(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),P.keyDown(e,{key:"Escape",isComposing:!0}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),P.keyDown(e,{key:"Escape",keyCode:229}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function Te(){const[a,e]=o.useState(!0),[n,i]=o.useState(0);return o.useEffect(()=>{const m=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",m,!0),()=>{document.removeEventListener("keydown",m,!0)}},[]),t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>i(m=>m+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const T={render:()=>t.jsx(Te,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body);await r(await e.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};var M,L,V;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(L=v.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var z,G,U;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var _,A,K;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(A=f.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var Y,$,W;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(W=($=h.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var J,Q,X;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ie;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Se=["Interactive","NonDismissible","CloseReasonTelemetry","FocusReturn","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{f as CloseReasonTelemetry,B as EscapeIgnoresImeComposition,T as EscapePreemptedByGlobalHandler,h as FocusReturn,v as Interactive,x as NestedDismissOrder,D as NoFocusReturn,b as NonDismissible,Se as __namedExportsOrder,Ne as default};
