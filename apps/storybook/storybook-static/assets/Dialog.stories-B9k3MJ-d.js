import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as l}from"./Button-BCHo91JE.js";import{I as _}from"./Input-CK-2zJ6Z.js";import{T as z}from"./Textarea-C2HCxZDO.js";import{D as c}from"./Dialog-D3FAqkbz.js";import{D as K}from"./Dropdown-CG_1bOes.js";import{within as r,expect as o,fireEvent as B,userEvent as i}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DGNgq5OX.js";const pe={title:"Overlay/Dialog",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function J(){const[a,n]=s.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(l,{onClick:()=>n(!0),children:"Open Draft Dialog"}),e.jsx(c,{open:a,onOpenChange:n,title:"Create AI Draft",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(_,{placeholder:"Title","aria-label":"Title"}),e.jsx(z,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(l,{children:"Save Draft"})]})})]})}function Q(){const[a,n]=s.useState(!0);return e.jsx(c,{open:a,onOpenChange:n,title:"Review Prompt Plan",children:e.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const m={render:()=>e.jsx(J,{}),play:async({canvasElement:a})=>{const n=r(a),t=r(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open Draft Dialog"})),await o(await t.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function U(){const[a,n]=s.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(l,{onClick:()=>n(!0),children:"Open Focus Return Dialog"}),e.jsx(c,{open:a,onOpenChange:n,title:"Focus Return",children:e.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const u={render:()=>e.jsx(U,{}),play:async({canvasElement:a})=>{const n=r(a),t=r(a.ownerDocument.body),d=n.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(d),await o(await t.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Close dialog"})),await o(d).toHaveFocus()}},y={render:()=>e.jsx(Q,{})};function V(){const[a,n]=s.useState(!0);return e.jsx(c,{open:a,onOpenChange:n,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[e.jsx(l,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(l,{onClick:()=>n(!1),children:"Confirm"})]})]})})}const g={render:()=>e.jsx(V,{}),play:async({canvasElement:a})=>{const n=r(a.ownerDocument.body);await o(await n.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Cancel"})),await o(n.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function W(){const[a,n]=s.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(l,{onClick:()=>n(!0),children:"Open Nested Overlay Dialog"}),e.jsx(c,{open:a,onOpenChange:n,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then dialog."}),e.jsx(K,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const D={render:()=>e.jsx(W,{}),play:async({canvasElement:a})=>{const n=r(a),t=r(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open Nested Overlay Dialog"})),await o(await t.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Dialog actions"})),await o(t.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await o(t.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function X(){const[a,n]=s.useState(!0);return e.jsx(c,{open:a,onOpenChange:n,title:"IME composition dialog",children:e.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const w={render:()=>e.jsx(X,{}),play:async({canvasElement:a})=>{const n=a.ownerDocument,t=r(n.body);await o(await t.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),B.keyDown(n,{key:"Escape",isComposing:!0}),await o(t.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),B.keyDown(n,{key:"Escape",keyCode:229}),await o(t.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function Y(){const[a,n]=s.useState(!0),[t,d]=s.useState(0);return s.useEffect(()=>{const p=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",p,!0),()=>{document.removeEventListener("keydown",p,!0)}},[]),e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-escape-calls",style:{color:"var(--aurora-text-primary)"},children:t})]}),e.jsx(c,{open:a,onOpenChange:n,title:"Preempted escape dialog",onEscapeKeyDown:()=>d(p=>p+1),children:e.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const h={render:()=>e.jsx(Y,{}),play:async({canvasElement:a})=>{const n=r(a.ownerDocument.body);await o(await n.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await o(n.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};var E,v,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,I,R;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var C,O,k;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(k=(O=y.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var T,j,N;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(j=g.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,F,P;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(F=D.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var q,M,A;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(M=w.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var H,G,L;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Preempted escape dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Preempted escape dialog"
    })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-escape-calls")).toHaveTextContent("0");
  }
}`,...(L=(G=h.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const me=["Interactive","FocusReturn","OpenByDefault","NonDismissable","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{w as EscapeIgnoresImeComposition,h as EscapePreemptedByGlobalHandler,u as FocusReturn,m as Interactive,D as NestedDismissOrder,g as NonDismissable,y as OpenByDefault,me as __namedExportsOrder,pe as default};
