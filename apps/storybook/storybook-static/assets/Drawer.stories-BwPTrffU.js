import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as d}from"./Button-BCHo91JE.js";import{l as Z,P as $,F as ee}from"./bodyScrollLock-DtRy56KP.js";import{D as ae}from"./DismissableLayer-DGNgq5OX.js";import{D as ne}from"./Dropdown-CG_1bOes.js";import{within as c,expect as r,fireEvent as I,userEvent as o}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function l({open:n,side:a="right",title:t,description:i,children:u,restoreFocus:m=!0,closeOnEscape:Q=!0,closeOnOutsidePointer:W=!0,showCloseButton:X=!0,closeLabel:Y="Close drawer",onEscapeKeyDown:D,onPointerDownOutside:B,onOpenChange:R}){const x=s.useId(),E=s.useId();return s.useEffect(()=>{if(n)return Z()},[n]),n?e.jsx($,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:e.jsx(ae,{onEscapeKeyDown:p=>{D==null||D(p),Q||p.preventDefault()},onPointerDownOutside:p=>{B==null||B(p),W||p.preventDefault()},onDismiss:()=>R(!1),children:e.jsx(ee,{restoreFocus:m,children:e.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":x,"aria-describedby":i?E:void 0,"data-side":a,style:{position:"absolute",top:0,bottom:0,[a]:0,width:"min(420px, 90vw)",borderLeft:a==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:a==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:a==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:a==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:a==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:a==="left"?"var(--aurora-radius-lg)":0},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("h2",{id:x,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:t}),i?e.jsx("p",{id:E,style:{margin:0,color:"var(--aurora-text-secondary)"},children:i}):null]}),X?e.jsx("button",{type:"button",onClick:()=>R(!1),"aria-label":Y,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-secondary)",width:30,height:30,cursor:"pointer"},children:"×"}):null]}),e.jsx("div",{style:{overflow:"auto"},children:u})]})})})})}):null}l.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const ve={title:"Overlay/Drawer",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function te(){const[n,a]=s.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>a(!0),children:"Open Drawer"}),e.jsx(l,{open:n,onOpenChange:a,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),e.jsx(d,{onClick:()=>a(!1),children:"Apply and close"})]})})]})}const y={render:()=>e.jsx(te,{}),play:async({canvasElement:n})=>{const a=c(n),t=c(n.ownerDocument.body);await o.click(a.getByRole("button",{name:"Open Drawer"})),await r(await t.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Close drawer"})),await r(t.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function re(){const[n,a]=s.useState(!0);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>a(!0),children:"Reopen Drawer"}),e.jsx(l,{open:n,onOpenChange:a,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),e.jsx(d,{onClick:()=>a(!1),children:"I understand"})]})})]})}const w={render:()=>e.jsx(re,{}),play:async({canvasElement:n})=>{const a=c(n.ownerDocument.body),t=await a.findByRole("dialog",{name:"Security checklist"});await o.keyboard("{Escape}"),await r(t).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"I understand"})),await r(a.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function oe(){const[n,a]=s.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>a(!0),children:"Open Focus Return Drawer"}),e.jsx(l,{open:n,onOpenChange:a,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:e.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const g={render:()=>e.jsx(oe,{}),play:async({canvasElement:n})=>{const a=c(n),t=c(n.ownerDocument.body),i=a.getByRole("button",{name:"Open Focus Return Drawer"});await o.click(i),await r(await t.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Close drawer"})),await r(i).toHaveFocus()}};function se(){const[n,a]=s.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[e.jsx(d,{variant:"outline",onClick:()=>a(!0),children:"Open No Focus Return Drawer"}),e.jsx("button",{type:"button",children:"Post-close target"}),e.jsx(l,{open:n,onOpenChange:a,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:e.jsx("p",{style:{margin:0},children:"Use this mode when close flow intentionally hands off focus."})})]})}const h={render:()=>e.jsx(se,{}),play:async({canvasElement:n})=>{const a=c(n),t=c(n.ownerDocument.body),i=a.getByRole("button",{name:"Open No Focus Return Drawer"});await o.click(i),await r(await t.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Close drawer"})),await r(i).not.toHaveFocus()}};function ie(){const[n,a]=s.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>a(!0),children:"Open Nested Overlay Drawer"}),e.jsx(l,{open:n,onOpenChange:a,title:"Nested overlay drawer",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),e.jsx(ne,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const v={render:()=>e.jsx(ie,{}),play:async({canvasElement:n})=>{const a=c(n),t=c(n.ownerDocument.body);await o.click(a.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await t.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"Drawer actions"})),await r(t.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(t.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(t.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(t.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function ce(){const[n,a]=s.useState(!0);return e.jsx(l,{open:n,onOpenChange:a,title:"IME composition drawer",children:e.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const b={render:()=>e.jsx(ce,{}),play:async({canvasElement:n})=>{const a=n.ownerDocument,t=c(a.body);await r(await t.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),I.keyDown(a,{key:"Escape",isComposing:!0}),await r(t.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),I.keyDown(a,{key:"Escape",keyCode:229}),await r(t.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(t.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function le(){const[n,a]=s.useState(!0),[t,i]=s.useState(0);return s.useEffect(()=>{const u=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",u,!0),()=>{document.removeEventListener("keydown",u,!0)}},[]),e.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:10,justifyItems:"start"},children:[e.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"drawer-escape-calls",style:{color:"var(--aurora-text-primary)"},children:t})]}),e.jsx(l,{open:n,onOpenChange:a,title:"Preempted escape drawer",onEscapeKeyDown:()=>i(u=>u+1),children:e.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const f={render:()=>e.jsx(le,{}),play:async({canvasElement:n})=>{const a=c(n.ownerDocument.body);await r(await a.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(a.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r(a.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};var k,j,T;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(j=y.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var O,C,N;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(C=w.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var F,q,S;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(q=g.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var H,P,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(P=h.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var L,V,z;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(V=v.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var G,_,U;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(_=b.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var A,K,J;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(K=f.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const be=["Interactive","NonDismissible","FocusReturn","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{b as EscapeIgnoresImeComposition,f as EscapePreemptedByGlobalHandler,g as FocusReturn,y as Interactive,v as NestedDismissOrder,h as NoFocusReturn,w as NonDismissible,be as __namedExportsOrder,ve as default};
