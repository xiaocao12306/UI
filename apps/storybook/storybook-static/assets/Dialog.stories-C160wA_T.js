import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{B as r}from"./Button-Hgh0jeno.js";import{I as E}from"./Input-CY7BO4jw.js";import{T as I}from"./Textarea-Br71u4Ao.js";import{D as c}from"./Dialog-lfL8UqXn.js";import{within as s,userEvent as o,expect as a}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";const M={title:"Overlay/Dialog",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function O(){const[t,n]=m.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(r,{onClick:()=>n(!0),children:"Open Draft Dialog"}),e.jsx(c,{open:t,onOpenChange:n,title:"Create AI Draft",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(E,{placeholder:"Title","aria-label":"Title"}),e.jsx(I,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(r,{children:"Save Draft"})]})})]})}function k(){const[t,n]=m.useState(!0);return e.jsx(c,{open:t,onOpenChange:n,title:"Review Prompt Plan",children:e.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const l={render:()=>e.jsx(O,{}),play:async({canvasElement:t})=>{const n=s(t),i=s(t.ownerDocument.body);await o.click(n.getByRole("button",{name:"Open Draft Dialog"})),await a(await i.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await a(i.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function T(){const[t,n]=m.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(r,{onClick:()=>n(!0),children:"Open Focus Return Dialog"}),e.jsx(c,{open:t,onOpenChange:n,title:"Focus Return",children:e.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const d={render:()=>e.jsx(T,{}),play:async({canvasElement:t})=>{const n=s(t),i=s(t.ownerDocument.body),g=n.getByRole("button",{name:"Open Focus Return Dialog"});await o.click(g),await a(await i.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await o.click(i.getByRole("button",{name:"Close dialog"})),await a(g).toHaveFocus()}},u={render:()=>e.jsx(k,{})};function F(){const[t,n]=m.useState(!0);return e.jsx(c,{open:t,onOpenChange:n,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[e.jsx(r,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(r,{onClick:()=>n(!1),children:"Confirm"})]})]})})}const p={render:()=>e.jsx(F,{}),play:async({canvasElement:t})=>{const n=s(t.ownerDocument.body);await a(await n.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await a(n.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await o.click(n.getByRole("button",{name:"Cancel"})),await a(n.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};var y,D,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(D=l.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var h,w,b;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,v,B;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(B=(v=u.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var C,R,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(R=p.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const Q=["Interactive","FocusReturn","OpenByDefault","NonDismissable"];export{d as FocusReturn,l as Interactive,p as NonDismissable,u as OpenByDefault,Q as __namedExportsOrder,M as default};
