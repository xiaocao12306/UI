import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as r}from"./Button-DKyBbf41.js";import{I as T}from"./Input-CK-2zJ6Z.js";import{T as N}from"./Textarea-C2HCxZDO.js";import{D as l}from"./Dialog-lfL8UqXn.js";import{D as F}from"./Dropdown-CgnMekiV.js";import{within as s,userEvent as i,expect as o}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";const Z={title:"Overlay/Dialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function S(){const[a,n]=c.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(r,{onClick:()=>n(!0),children:"Open Draft Dialog"}),e.jsx(l,{open:a,onOpenChange:n,title:"Create AI Draft",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(T,{placeholder:"Title","aria-label":"Title"}),e.jsx(N,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(r,{children:"Save Draft"})]})})]})}function q(){const[a,n]=c.useState(!0);return e.jsx(l,{open:a,onOpenChange:n,title:"Review Prompt Plan",children:e.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const d={render:()=>e.jsx(S,{}),play:async({canvasElement:a})=>{const n=s(a),t=s(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open Draft Dialog"})),await o(await t.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function A(){const[a,n]=c.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(r,{onClick:()=>n(!0),children:"Open Focus Return Dialog"}),e.jsx(l,{open:a,onOpenChange:n,title:"Focus Return",children:e.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const u={render:()=>e.jsx(A,{}),play:async({canvasElement:a})=>{const n=s(a),t=s(a.ownerDocument.body),g=n.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(g),await o(await t.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Close dialog"})),await o(g).toHaveFocus()}},m={render:()=>e.jsx(q,{})};function P(){const[a,n]=c.useState(!0);return e.jsx(l,{open:a,onOpenChange:n,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[e.jsx(r,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(r,{onClick:()=>n(!1),children:"Confirm"})]})]})})}const p={render:()=>e.jsx(P,{}),play:async({canvasElement:a})=>{const n=s(a.ownerDocument.body);await o(await n.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Cancel"})),await o(n.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function H(){const[a,n]=c.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(r,{onClick:()=>n(!0),children:"Open Nested Overlay Dialog"}),e.jsx(l,{open:a,onOpenChange:n,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then dialog."}),e.jsx(F,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const y={render:()=>e.jsx(H,{}),play:async({canvasElement:a})=>{const n=s(a),t=s(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open Nested Overlay Dialog"})),await o(await t.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Dialog actions"})),await o(t.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await o(t.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};var D,h,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <InteractiveDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Draft Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Create AI Draft"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Create AI Draft"
    })).not.toBeInTheDocument();
  }
}`,...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var b,v,B;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <FocusReturnDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Open Focus Return Dialog"
    });
    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", {
      name: "Focus Return"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close dialog"
    }));
    await expect(trigger).toHaveFocus();
  }
}`,...(B=(v=u.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var f,x,R;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(R=(x=m.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var O,C,E;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <NonDismissableDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Critical Confirmation"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Critical Confirmation"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Cancel"
    }));
    await expect(body.queryByRole("dialog", {
      name: "Critical Confirmation"
    })).not.toBeInTheDocument();
  }
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,j,k;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <NestedOverlayDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Nested Overlay Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Nested Overlay Dialog"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Dialog actions"
    }));
    await expect(body.getByRole("menu", {
      name: "Dialog actions"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("menu", {
      name: "Dialog actions"
    })).not.toBeInTheDocument();
    await expect(body.getByRole("dialog", {
      name: "Nested Overlay Dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Nested Overlay Dialog"
    })).not.toBeInTheDocument();
  }
}`,...(k=(j=y.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const $=["Interactive","FocusReturn","OpenByDefault","NonDismissable","NestedDismissOrder"];export{u as FocusReturn,d as Interactive,y as NestedDismissOrder,p as NonDismissable,m as OpenByDefault,$ as __namedExportsOrder,Z as default};
