import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as p}from"./Button-BCHo91JE.js";import{l as re,P as oe,F as se}from"./bodyScrollLock-DtRy56KP.js";import{D as ie}from"./DismissableLayer-DGNgq5OX.js";import{D as ce}from"./Dropdown-CqyhqKdI.js";import{within as c,expect as r,userEvent as o,fireEvent as I}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function d({open:a,side:e="right",title:n,description:s,children:m,restoreFocus:y=!0,closeOnEscape:$=!0,closeOnOutsidePointer:ee=!0,showCloseButton:te=!0,closeLabel:ae="Close drawer",onEscapeKeyDown:x,onPointerDownOutside:R,onCloseReason:l,onOpenChange:E}){const T=i.useId(),k=i.useId(),ne=i.useCallback(u=>{l==null||l(u),E(!1)},[l,E]);return i.useEffect(()=>{if(a)return re()},[a]),a?t.jsx(oe,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(ie,{onEscapeKeyDown:u=>{if(x==null||x(u),!u.defaultPrevented){if(!$){u.preventDefault();return}l==null||l("escape-key")}},onPointerDownOutside:u=>{if(R==null||R(u),!u.defaultPrevented){if(!ee){u.preventDefault();return}l==null||l("outside-pointer")}},onDismiss:()=>E(!1),children:t.jsx(se,{restoreFocus:y,children:t.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":T,"aria-describedby":s?k:void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:T,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),s?t.jsx("p",{id:k,style:{margin:0,color:"var(--aurora-text-secondary)"},children:s}):null]}),te?t.jsx("button",{type:"button",onClick:()=>ne("close-button"),"aria-label":ae,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-secondary)",width:30,height:30,cursor:"pointer"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:m})]})})})})}):null}d.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Ee={title:"Overlay/Drawer",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function le(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(d,{open:a,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),t.jsx(p,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const w={render:()=>t.jsx(le,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await o.click(e.getByRole("button",{name:"Open Drawer"})),await r(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function de(){const[a,e]=i.useState(!0);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(d,{open:a,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),t.jsx(p,{onClick:()=>e(!1),children:"I understand"})]})})]})}const g={render:()=>t.jsx(de,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Security checklist"});await o.keyboard("{Escape}"),await r(n).toBeInTheDocument(),await o.click(e.getByRole("button",{name:"I understand"})),await r(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function ue(){const[a,e]=i.useState(!1),[n,s]=i.useState("none");return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(d,{open:a,onOpenChange:e,title:"Close reason telemetry drawer",onCloseReason:m=>s(m),children:t.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const v={render:()=>t.jsx(ue,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),s=e.getByTestId("drawer-outside-target");await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await r(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await o.pointer({target:s,keys:"[MouseLeft]"}),await r(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer")}};function me(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(d,{open:a,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const b={render:()=>t.jsx(me,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),s=e.getByRole("button",{name:"Open Focus Return Drawer"});await o.click(s),await r(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(s).toHaveFocus()}};function pe(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(d,{open:a,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:{margin:0},children:"Use this mode when close flow intentionally hands off focus."})})]})}const h={render:()=>t.jsx(pe,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body),s=e.getByRole("button",{name:"Open No Focus Return Drawer"});await o.click(s),await r(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(s).not.toHaveFocus()}};function ye(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:16},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(d,{open:a,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),t.jsx(ce,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const f={render:()=>t.jsx(ye,{}),play:async({canvasElement:a})=>{const e=c(a),n=c(a.ownerDocument.body);await o.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Drawer actions"})),await r(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function we(){const[a,e]=i.useState(!0);return t.jsx(d,{open:a,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const D={render:()=>t.jsx(we,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=c(e.body);await r(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),I.keyDown(e,{key:"Escape",isComposing:!0}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),I.keyDown(e,{key:"Escape",keyCode:229}),await r(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function ge(){const[a,e]=i.useState(!0),[n,s]=i.useState(0);return i.useEffect(()=>{const m=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",m,!0),()=>{document.removeEventListener("keydown",m,!0)}},[]),t.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(d,{open:a,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>s(m=>m+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const B={render:()=>t.jsx(ge,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body);await r(await e.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(e.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};var j,C,O;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(C=w.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var N,F,S;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(F=g.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var q,H,P;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(H=v.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var M,L,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(L=b.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var z,G,_;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(G=h.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var U,A,K;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(A=f.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var W,J,Q;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Te=["Interactive","NonDismissible","CloseReasonTelemetry","FocusReturn","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{v as CloseReasonTelemetry,D as EscapeIgnoresImeComposition,B as EscapePreemptedByGlobalHandler,b as FocusReturn,w as Interactive,f as NestedDismissOrder,h as NoFocusReturn,g as NonDismissible,Te as __namedExportsOrder,Ee as default};
