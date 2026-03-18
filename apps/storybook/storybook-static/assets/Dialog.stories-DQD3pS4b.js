import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as c}from"./Button-BCHo91JE.js";import{I as M}from"./Input-CK-2zJ6Z.js";import{T as A}from"./Textarea-C2HCxZDO.js";import{D as r}from"./Dialog-Jm9gV4rt.js";import{D as P}from"./Dropdown-BcGrxntx.js";import{within as s,expect as t,fireEvent as w,userEvent as i}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-qdN3j-ic.js";const te={title:"Overlay/Dialog",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function G(){const[a,n]=l.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(c,{onClick:()=>n(!0),children:"Open Draft Dialog"}),e.jsx(r,{open:a,onOpenChange:n,title:"Create AI Draft",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(M,{placeholder:"Title","aria-label":"Title"}),e.jsx(A,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(c,{children:"Save Draft"})]})})]})}function H(){const[a,n]=l.useState(!0);return e.jsx(r,{open:a,onOpenChange:n,title:"Review Prompt Plan",children:e.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const d={render:()=>e.jsx(G,{}),play:async({canvasElement:a})=>{const n=s(a),o=s(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open Draft Dialog"})),await t(await o.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await t(o.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function _(){const[a,n]=l.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(c,{onClick:()=>n(!0),children:"Open Focus Return Dialog"}),e.jsx(r,{open:a,onOpenChange:n,title:"Focus Return",children:e.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const m={render:()=>e.jsx(_,{}),play:async({canvasElement:a})=>{const n=s(a),o=s(a.ownerDocument.body),D=n.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(D),await t(await o.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(o.getByRole("button",{name:"Close dialog"})),await t(D).toHaveFocus()}},p={render:()=>e.jsx(H,{})};function z(){const[a,n]=l.useState(!0);return e.jsx(r,{open:a,onOpenChange:n,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[e.jsx(c,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(c,{onClick:()=>n(!1),children:"Confirm"})]})]})})}const u={render:()=>e.jsx(z,{}),play:async({canvasElement:a})=>{const n=s(a.ownerDocument.body);await t(await n.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await t(n.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Cancel"})),await t(n.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function L(){const[a,n]=l.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(c,{onClick:()=>n(!0),children:"Open Nested Overlay Dialog"}),e.jsx(r,{open:a,onOpenChange:n,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then dialog."}),e.jsx(P,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const y={render:()=>e.jsx(L,{}),play:async({canvasElement:a})=>{const n=s(a),o=s(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open Nested Overlay Dialog"})),await t(await o.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(o.getByRole("button",{name:"Dialog actions"})),await t(o.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await t(o.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await t(o.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await t(o.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function J(){const[a,n]=l.useState(!0);return e.jsx(r,{open:a,onOpenChange:n,title:"IME composition dialog",children:e.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const g={render:()=>e.jsx(J,{}),play:async({canvasElement:a})=>{const n=a.ownerDocument,o=s(n.body);await t(await o.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),w.keyDown(n,{key:"Escape",isComposing:!0}),await t(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),w.keyDown(n,{key:"Escape",keyCode:229}),await t(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await t(o.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};var h,b,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(b=d.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var v,E,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(E=m.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var x,I,R;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var C,O,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(O=u.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var j,T,N;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(T=y.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var S,F,q;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <EscapeImeGuardDialog />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "IME composition dialog"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      isComposing: true
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition dialog"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      keyCode: 229
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "IME composition dialog"
    })).not.toBeInTheDocument();
  }
}`,...(q=(F=g.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const ie=["Interactive","FocusReturn","OpenByDefault","NonDismissable","NestedDismissOrder","EscapeIgnoresImeComposition"];export{g as EscapeIgnoresImeComposition,m as FocusReturn,d as Interactive,y as NestedDismissOrder,u as NonDismissable,p as OpenByDefault,ie as __namedExportsOrder,te as default};
