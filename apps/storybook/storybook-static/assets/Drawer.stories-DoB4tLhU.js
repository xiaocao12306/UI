import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as c}from"./Button-Hgh0jeno.js";import{P as z,F as P}from"./FocusScope-Db3t2k9z.js";import{D as _}from"./DismissableLayer-B4f576w9.js";import{D as A}from"./Dropdown-Bosod_GK.js";import{within as l,userEvent as o,expect as r}from"./index-DgAF9SIF.js";import"./index-DlVbWVVj.js";function u({open:t,side:a="right",title:n,description:d,children:C,restoreFocus:F=!0,closeOnEscape:S=!0,closeOnOutsidePointer:H=!0,showCloseButton:V=!0,closeLabel:L="Close drawer",onEscapeKeyDown:g,onPointerDownOutside:v,onOpenChange:h}){const b=s.useId(),f=s.useId();return s.useEffect(()=>{if(!t||typeof document>"u")return;const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}},[t]),t?e.jsx(z,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:e.jsx(_,{onEscapeKeyDown:i=>{g==null||g(i),S||i.preventDefault()},onPointerDownOutside:i=>{v==null||v(i),H||i.preventDefault()},onDismiss:()=>h(!1),children:e.jsx(P,{restoreFocus:F,children:e.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":b,"aria-describedby":d?f:void 0,"data-side":a,style:{position:"absolute",top:0,bottom:0,[a]:0,width:"min(420px, 90vw)",borderLeft:a==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:a==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:a==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:a==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:a==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:a==="left"?"var(--aurora-radius-lg)":0},children:[e.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx("h2",{id:b,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),d?e.jsx("p",{id:f,style:{margin:0,color:"var(--aurora-text-secondary)"},children:d}):null]}),V?e.jsx("button",{type:"button",onClick:()=>h(!1),"aria-label":L,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-secondary)",width:30,height:30,cursor:"pointer"},children:"×"}):null]}),e.jsx("div",{style:{overflow:"auto"},children:C})]})})})})}):null}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const ae={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}};function U(){const[t,a]=s.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(c,{variant:"outline",onClick:()=>a(!0),children:"Open Drawer"}),e.jsx(u,{open:t,onOpenChange:a,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Use this panel to narrow incident review scope."}),e.jsx(c,{onClick:()=>a(!1),children:"Apply and close"})]})})]})}const m={render:()=>e.jsx(U,{}),play:async({canvasElement:t})=>{const a=l(t),n=l(t.ownerDocument.body);await o.click(a.getByRole("button",{name:"Open Drawer"})),await r(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function G(){const[t,a]=s.useState(!0);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(c,{variant:"outline",onClick:()=>a(!0),children:"Reopen Drawer"}),e.jsx(u,{open:t,onOpenChange:a,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Outside click and Escape are disabled in this flow."}),e.jsx(c,{onClick:()=>a(!1),children:"I understand"})]})})]})}const p={render:()=>e.jsx(G,{}),play:async({canvasElement:t})=>{const a=l(t.ownerDocument.body),n=await a.findByRole("dialog",{name:"Security checklist"});await o.keyboard("{Escape}"),await r(n).toBeInTheDocument(),await o.click(a.getByRole("button",{name:"I understand"})),await r(a.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function J(){const[t,a]=s.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(c,{variant:"outline",onClick:()=>a(!0),children:"Open Focus Return Drawer"}),e.jsx(u,{open:t,onOpenChange:a,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:e.jsx("p",{style:{margin:0},children:"Use close button and verify trigger focus restoration."})})]})}const y={render:()=>e.jsx(J,{}),play:async({canvasElement:t})=>{const a=l(t),n=l(t.ownerDocument.body),d=a.getByRole("button",{name:"Open Focus Return Drawer"});await o.click(d),await r(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Close drawer"})),await r(d).toHaveFocus()}};function K(){const[t,a]=s.useState(!1);return e.jsxs("div",{style:{minHeight:420,padding:16},children:[e.jsx(c,{variant:"outline",onClick:()=>a(!0),children:"Open Nested Overlay Drawer"}),e.jsx(u,{open:t,onOpenChange:a,title:"Nested overlay drawer",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then drawer."}),e.jsx(A,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const w={render:()=>e.jsx(K,{}),play:async({canvasElement:t})=>{const a=l(t),n=l(t.ownerDocument.body);await o.click(a.getByRole("button",{name:"Open Nested Overlay Drawer"})),await r(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Drawer actions"})),await r(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await r(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};var D,R,x;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(R=m.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var B,k,j;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(k=p.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var E,T,I;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(T=y.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var O,N,q;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(N=w.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const te=["Interactive","NonDismissible","FocusReturn","NestedDismissOrder"];export{y as FocusReturn,m as Interactive,w as NestedDismissOrder,p as NonDismissible,te as __namedExportsOrder,ae as default};
