import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as d}from"./Button-BCHo91JE.js";import{l as Q,P as W,F as X}from"./bodyScrollLock-DtRy56KP.js";import{D as Y}from"./DismissableLayer-qdN3j-ic.js";import{D as Z}from"./Dropdown-BcGrxntx.js";import{within as s,expect as r,fireEvent as B,userEvent as o}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function l({open:a,side:n="right",title:t,description:i,children:_,restoreFocus:U=!0,closeOnEscape:A=!0,closeOnOutsidePointer:G=!0,showCloseButton:J=!0,closeLabel:K="Close drawer",onEscapeKeyDown:v,onPointerDownOutside:b,onOpenChange:f}){const D=c.useId(),R=c.useId();return c.useEffect(()=>{if(a)return Q()},[a]),a?e.jsx(W,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:e.jsx(Y,{onEscapeKeyDown:u=>{v==null||v(u),A||u.preventDefault()},onPointerDownOutside:u=>{b==null||b(u),G||u.preventDefault()},onDismiss:()=>f(!1),children:e.jsx(X,{restoreFocus:U,children:e.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":D,"aria-describedby":i?R:void 0,"data-side":n,style:{position:"absolute",top:0,bottom:0,[n]:0,width:"min(420px, 90vw)",borderLeft:n==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:n==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:n==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:n==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:n==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:n==="left"?"var(--aurora-radius-lg)":0},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("h2",{id:D,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:t}),i?e.jsx("p",{id:R,style:{margin:0,color:"var(--aurora-text-secondary)"},children:i}):null]}),J?e.jsx("button",{type:"button",onClick:()=>f(!1),"aria-label":K,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-secondary)",width:30,height:30,cursor:"pointer"},children:"×"}):null]}),e.jsx("div",{style:{overflow:"auto"},children:_})]})})})})}):null}l.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const pe={title:"Overlay/Drawer",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function $(){const[a,n]=c.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>n(!0),children:"Open Drawer"}),e.jsx(l,{open:a,onOpenChange:n,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),e.jsx(d,{onClick:()=>n(!1),children:"Apply and close"})]})})]})}const m={render:()=>e.jsx($,{}),play:async({canvasElement:a})=>{const n=s(a),t=s(a.ownerDocument.body);await o.click(n.getByRole("button",{name:"Open Drawer"})),await r(await t.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Close drawer"})),await r(t.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function ee(){const[a,n]=c.useState(!0);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>n(!0),children:"Reopen Drawer"}),e.jsx(l,{open:a,onOpenChange:n,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),e.jsx(d,{onClick:()=>n(!1),children:"I understand"})]})})]})}const p={render:()=>e.jsx(ee,{}),play:async({canvasElement:a})=>{const n=s(a.ownerDocument.body),t=await n.findByRole("dialog",{name:"Security checklist"});await o.keyboard("{Escape}"),await r(t).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"I understand"})),await r(n.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function ne(){const[a,n]=c.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>n(!0),children:"Open Focus Return Drawer"}),e.jsx(l,{open:a,onOpenChange:n,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:e.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const y={render:()=>e.jsx(ne,{}),play:async({canvasElement:a})=>{const n=s(a),t=s(a.ownerDocument.body),i=n.getByRole("button",{name:"Open Focus Return Drawer"});await o.click(i),await r(await t.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Close drawer"})),await r(i).toHaveFocus()}};function ae(){const[a,n]=c.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[e.jsx(d,{variant:"outline",onClick:()=>n(!0),children:"Open No Focus Return Drawer"}),e.jsx("button",{type:"button",children:"Post-close target"}),e.jsx(l,{open:a,onOpenChange:n,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:e.jsx("p",{style:{margin:0},children:"Use this mode when close flow intentionally hands off focus."})})]})}const w={render:()=>e.jsx(ae,{}),play:async({canvasElement:a})=>{const n=s(a),t=s(a.ownerDocument.body),i=n.getByRole("button",{name:"Open No Focus Return Drawer"});await o.click(i),await r(await t.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Close drawer"})),await r(i).not.toHaveFocus()}};function te(){const[a,n]=c.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>n(!0),children:"Open Nested Overlay Drawer"}),e.jsx(l,{open:a,onOpenChange:n,title:"Nested overlay drawer",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),e.jsx(Z,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const g={render:()=>e.jsx(te,{}),play:async({canvasElement:a})=>{const n=s(a),t=s(a.ownerDocument.body);await o.click(n.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await t.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Drawer actions"})),await r(t.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(t.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(t.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(t.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function re(){const[a,n]=c.useState(!0);return e.jsx(l,{open:a,onOpenChange:n,title:"IME composition drawer",children:e.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const h={render:()=>e.jsx(re,{}),play:async({canvasElement:a})=>{const n=a.ownerDocument,t=s(n.body);await r(await t.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),B.keyDown(n,{key:"Escape",isComposing:!0}),await r(t.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),B.keyDown(n,{key:"Escape",keyCode:229}),await r(t.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(t.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};var x,E,k;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(E=m.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var I,j,T;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(j=p.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var O,C,N;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(C=y.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var F,q,S;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(q=w.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var M,H,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(H=g.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var L,P,z;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const ye=["Interactive","NonDismissible","FocusReturn","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition"];export{h as EscapeIgnoresImeComposition,y as FocusReturn,m as Interactive,g as NestedDismissOrder,w as NoFocusReturn,p as NonDismissible,ye as __namedExportsOrder,pe as default};
