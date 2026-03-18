import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as d}from"./Button-DeQ1OHWt.js";import{I as Q}from"./Input-B0g8SV4q.js";import{T as U}from"./Textarea-C2HCxZDO.js";import{D as l}from"./Dialog-Num8nDMQ.js";import{D as V}from"./Dropdown-B-64Oxt2.js";import{within as r,expect as o,userEvent as i,fireEvent as v}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DGNgq5OX.js";const we={title:"Overlay/Dialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function W(){const[a,e]=s.useState(!1);return n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsx(d,{onClick:()=>e(!0),children:"Open Draft Dialog"}),n.jsx(l,{open:a,onOpenChange:e,title:"Create AI Draft",children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(Q,{placeholder:"Title","aria-label":"Title"}),n.jsx(U,{placeholder:"Describe expected output...","aria-label":"Description"}),n.jsx(d,{children:"Save Draft"})]})})]})}function X(){const[a,e]=s.useState(!0);return n.jsx(l,{open:a,onOpenChange:e,title:"Review Prompt Plan",children:n.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const p={render:()=>n.jsx(W,{}),play:async({canvasElement:a})=>{const e=r(a),t=r(a.ownerDocument.body);await i.click(e.getByRole("button",{name:"Open Draft Dialog"})),await o(await t.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Y(){const[a,e]=s.useState(!1);return n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsx(d,{onClick:()=>e(!0),children:"Open Focus Return Dialog"}),n.jsx(l,{open:a,onOpenChange:e,title:"Focus Return",children:n.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const y={render:()=>n.jsx(Y,{}),play:async({canvasElement:a})=>{const e=r(a),t=r(a.ownerDocument.body),c=e.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(c),await o(await t.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Close dialog"})),await o(c).toHaveFocus()}},u={render:()=>n.jsx(X,{})};function Z(){const[a,e]=s.useState(!0);return n.jsx(l,{open:a,onOpenChange:e,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[n.jsx(d,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),n.jsx(d,{onClick:()=>e(!1),children:"Confirm"})]})]})})}const g={render:()=>n.jsx(Z,{}),play:async({canvasElement:a})=>{const e=r(a.ownerDocument.body);await o(await e.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Cancel"})),await o(e.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function $(){const[a,e]=s.useState(!1),[t,c]=s.useState("none");return n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dialog-close-reason",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(d,{onClick:()=>e(!0),children:"Open Telemetry Dialog"}),n.jsx(l,{open:a,onOpenChange:e,title:"Close Reason Telemetry",onCloseReason:m=>c(m),children:n.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const w={render:()=>n.jsx($,{}),play:async({canvasElement:a})=>{const e=r(a),t=r(a.ownerDocument.body),c=e.getByTestId("dialog-outside-target");await o(e.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await o(await t.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Close dialog"})),await o(e.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await o(await t.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await o(await t.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.pointer({target:c,keys:"[MouseLeft]"}),await o(e.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer")}};function ee(){const[a,e]=s.useState(!1);return n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsx(d,{onClick:()=>e(!0),children:"Open Nested Overlay Dialog"}),n.jsx(l,{open:a,onOpenChange:e,title:"Nested Overlay Dialog",children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then dialog."}),n.jsx(V,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const D={render:()=>n.jsx(ee,{}),play:async({canvasElement:a})=>{const e=r(a),t=r(a.ownerDocument.body);await i.click(e.getByRole("button",{name:"Open Nested Overlay Dialog"})),await o(await t.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Dialog actions"})),await o(t.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await o(t.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function ne(){const[a,e]=s.useState(!0);return n.jsx(l,{open:a,onOpenChange:e,title:"IME composition dialog",children:n.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const h={render:()=>n.jsx(ne,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,t=r(e.body);await o(await t.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),v.keyDown(e,{key:"Escape",isComposing:!0}),await o(t.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),v.keyDown(e,{key:"Escape",keyCode:229}),await o(t.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(t.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function ae(){const[a,e]=s.useState(!0),[t,c]=s.useState(0);return s.useEffect(()=>{const m=b=>{b.key==="Escape"&&b.preventDefault()};return document.addEventListener("keydown",m,!0),()=>{document.removeEventListener("keydown",m,!0)}},[]),n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dialog-escape-calls",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(l,{open:a,onOpenChange:e,title:"Preempted escape dialog",onEscapeKeyDown:()=>c(m=>m+1),children:n.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const B={render:()=>n.jsx(ae,{}),play:async({canvasElement:a})=>{const e=r(a.ownerDocument.body);await o(await e.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await o(e.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};var x,E,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var R,f,I;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(f=y.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var C,k,O;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var j,S,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(S=g.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var H,F,M;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("dialog-outside-target");
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("none");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close dialog"
    }));
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("close-button");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer");
  }
}`,...(M=(F=w.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var P,q,L;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(q=D.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var A,G,_;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(G=h.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var z,K,J;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(K=B.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const De=["Interactive","FocusReturn","OpenByDefault","NonDismissable","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{w as CloseReasonTelemetry,h as EscapeIgnoresImeComposition,B as EscapePreemptedByGlobalHandler,y as FocusReturn,p as Interactive,D as NestedDismissOrder,g as NonDismissable,u as OpenByDefault,De as __namedExportsOrder,we as default};
