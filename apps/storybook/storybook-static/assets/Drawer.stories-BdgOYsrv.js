import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as d}from"./Button-DKyBbf41.js";import{P as A,F as G}from"./FocusScope-Db3t2k9z.js";import{D as J}from"./DismissableLayer-B4f576w9.js";import{D as K}from"./Dropdown-CgnMekiV.js";import{within as i,userEvent as o,expect as r}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function u({open:a,side:t="right",title:n,description:s,children:V,restoreFocus:L=!0,closeOnEscape:P=!0,closeOnOutsidePointer:z=!0,showCloseButton:_=!0,closeLabel:U="Close drawer",onEscapeKeyDown:v,onPointerDownOutside:h,onOpenChange:b}){const f=l.useId(),D=l.useId();return l.useEffect(()=>{if(!a||typeof document>"u")return;const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[a]),a?e.jsx(A,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:e.jsx(J,{onEscapeKeyDown:c=>{v==null||v(c),P||c.preventDefault()},onPointerDownOutside:c=>{h==null||h(c),z||c.preventDefault()},onDismiss:()=>b(!1),children:e.jsx(G,{restoreFocus:L,children:e.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":f,"aria-describedby":s?D:void 0,"data-side":t,style:{position:"absolute",top:0,bottom:0,[t]:0,width:"min(420px, 90vw)",borderLeft:t==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:t==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:t==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:t==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:t==="left"?"var(--aurora-radius-lg)":0},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("h2",{id:f,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),s?e.jsx("p",{id:D,style:{margin:0,color:"var(--aurora-text-secondary)"},children:s}):null]}),_?e.jsx("button",{type:"button",onClick:()=>b(!1),"aria-label":U,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-secondary)",width:30,height:30,cursor:"pointer"},children:"×"}):null]}),e.jsx("div",{style:{overflow:"auto"},children:V})]})})})})}):null}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const se={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function M(){const[a,t]=l.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>t(!0),children:"Open Drawer"}),e.jsx(u,{open:a,onOpenChange:t,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),e.jsx(d,{onClick:()=>t(!1),children:"Apply and close"})]})})]})}const m={render:()=>e.jsx(M,{}),play:async({canvasElement:a})=>{const t=i(a),n=i(a.ownerDocument.body);await o.click(t.getByRole("button",{name:"Open Drawer"})),await r(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function Q(){const[a,t]=l.useState(!0);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>t(!0),children:"Reopen Drawer"}),e.jsx(u,{open:a,onOpenChange:t,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),e.jsx(d,{onClick:()=>t(!1),children:"I understand"})]})})]})}const p={render:()=>e.jsx(Q,{}),play:async({canvasElement:a})=>{const t=i(a.ownerDocument.body),n=await t.findByRole("dialog",{name:"Security checklist"});await o.keyboard("{Escape}"),await r(n).toBeInTheDocument(),await o.click(t.getByRole("button",{name:"I understand"})),await r(t.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function W(){const[a,t]=l.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>t(!0),children:"Open Focus Return Drawer"}),e.jsx(u,{open:a,onOpenChange:t,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:e.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const y={render:()=>e.jsx(W,{}),play:async({canvasElement:a})=>{const t=i(a),n=i(a.ownerDocument.body),s=t.getByRole("button",{name:"Open Focus Return Drawer"});await o.click(s),await r(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(s).toHaveFocus()}};function X(){const[a,t]=l.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[e.jsx(d,{variant:"outline",onClick:()=>t(!0),children:"Open No Focus Return Drawer"}),e.jsx("button",{type:"button",children:"Post-close target"}),e.jsx(u,{open:a,onOpenChange:t,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:e.jsx("p",{style:{margin:0},children:"Use this mode when close flow intentionally hands off focus."})})]})}const w={render:()=>e.jsx(X,{}),play:async({canvasElement:a})=>{const t=i(a),n=i(a.ownerDocument.body),s=t.getByRole("button",{name:"Open No Focus Return Drawer"});await o.click(s),await r(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(s).not.toHaveFocus()}};function Y(){const[a,t]=l.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(d,{variant:"outline",onClick:()=>t(!0),children:"Open Nested Overlay Drawer"}),e.jsx(u,{open:a,onOpenChange:t,title:"Nested overlay drawer",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),e.jsx(K,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const g={render:()=>e.jsx(Y,{}),play:async({canvasElement:a})=>{const t=i(a),n=i(a.ownerDocument.body);await o.click(t.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Drawer actions"})),await r(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};var R,x,B;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var k,j,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(j=p.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var O,T,I;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(T=y.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var N,C,F;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(C=w.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var q,S,H;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(S=g.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const ie=["Interactive","NonDismissible","FocusReturn","NoFocusReturn","NestedDismissOrder"];export{y as FocusReturn,m as Interactive,g as NestedDismissOrder,w as NoFocusReturn,p as NonDismissible,ie as __namedExportsOrder,se as default};
