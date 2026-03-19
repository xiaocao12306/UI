import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as u}from"./Button-CnyYpMYZ.js";import{I as ae}from"./Input-BevFdX6c.js";import{T as ne}from"./Textarea-C2HCxZDO.js";import{D as l}from"./Dialog-B2OlqLN0.js";import{D as oe}from"./Dropdown-9nj8cmmV.js";import{within as r,expect as n,userEvent as s,fireEvent as T}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-CnEUF6y7.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";const Ie={title:"Overlay/Dialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function se(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(u,{onClick:()=>e(!0),children:"Open Draft Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Create AI Draft",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx(ae,{placeholder:"Title","aria-label":"Title"}),t.jsx(ne,{placeholder:"Describe expected output...","aria-label":"Description"}),t.jsx(u,{children:"Save Draft"})]})})]})}function ie(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Review Prompt Plan",children:t.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const m={render:()=>t.jsx(se,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Draft Dialog"})),await n(await o.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function re(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(u,{onClick:()=>e(!0),children:"Open Focus Return Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Focus Return",children:t.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const g={render:()=>t.jsx(re,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body),c=e.getByRole("button",{name:"Open Focus Return Dialog"});await s.click(c),await n(await o.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Close dialog"})),await n(c).toHaveFocus()}};function ce(){const[a,e]=i.useState(!0);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("button",{type:"button",children:"Outside before dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Focus trap dialog",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Tab and Shift+Tab should cycle within the dialog."}),t.jsx(u,{children:"Primary dialog action"}),t.jsx(u,{variant:"outline",children:"Secondary dialog action"})]})}),t.jsx("button",{type:"button",children:"Outside after dialog"})]})}const w={render:()=>t.jsx(ce,{}),play:async({canvasElement:a})=>{const e=r(a.ownerDocument.body),o=await e.findByRole("button",{name:"Close dialog"}),c=e.getByRole("button",{name:"Primary dialog action"}),d=e.getByRole("button",{name:"Secondary dialog action"}),y=e.getByRole("button",{name:"Outside after dialog"});o.focus(),await n(o).toHaveFocus(),await s.tab(),await n(c).toHaveFocus(),await s.tab(),await n(d).toHaveFocus(),await s.tab(),await n(o).toHaveFocus(),await n(y).not.toHaveFocus(),await s.tab({shift:!0}),await n(d).toHaveFocus()}};function le(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Focus intent pointer policy",children:t.jsx("p",{style:{margin:0},children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const b={render:()=>t.jsx(le,{}),play:async({canvasElement:a})=>{const o=await r(a.ownerDocument.body).findByRole("button",{name:"Close dialog"});await s.tab(),await n(o).toHaveFocus(),await n(o.getAttribute("style")).toContain("var(--aurora-focus-ring)");const c=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});o.dispatchEvent(c),await n(o.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await s.pointer([{target:o,keys:"[MouseLeft>]"}]),await n(o.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}},v={render:()=>t.jsx(ie,{})};function de(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),t.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[t.jsx(u,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),t.jsx(u,{onClick:()=>e(!1),children:"Confirm"})]})]})})}const D={render:()=>t.jsx(de,{}),play:async({canvasElement:a})=>{const e=r(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Cancel"})),await n(e.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function ue(){const[a,e]=i.useState(!1),[o,c]=i.useState("none"),[d,y]=i.useState("none");return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-close-reason",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dialog-close-trace",style:{color:"var(--aurora-text-primary)"},children:d})]}),t.jsx(u,{onClick:()=>e(!0),children:"Open Telemetry Dialog"}),t.jsx(l,{open:a,onOpenChange:p=>{e(p),p||y(te=>`${te} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:p=>{c(p),y(`reason:${p}`)},children:t.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const B={render:()=>t.jsx(ue,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body),c=e.getByTestId("dialog-outside-target");await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.pointer({target:c,keys:"[MouseLeft]"}),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function ye(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(u,{onClick:()=>e(!0),children:"Open Nested Overlay Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Nested Overlay Dialog",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then dialog."}),t.jsx(oe,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const h={render:()=>t.jsx(ye,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await o.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Dialog actions"})),await n(o.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(o.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function pe(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"IME composition dialog",children:t.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const x={render:()=>t.jsx(pe,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,o=r(e.body);await n(await o.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),T.keyDown(e,{key:"Escape",isComposing:!0}),await n(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),T.keyDown(e,{key:"Escape",keyCode:229}),await n(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function me(){const[a,e]=i.useState(!0),[o,c]=i.useState(0);return i.useEffect(()=>{const d=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",d,!0),()=>{document.removeEventListener("keydown",d,!0)}},[]),t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsx(l,{open:a,onOpenChange:e,title:"Preempted escape dialog",onEscapeKeyDown:()=>c(d=>d+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const f={render:()=>t.jsx(me,{}),play:async({canvasElement:a})=>{const e=r(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};var E,C,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var I,k,j;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(k=g.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var O,F,H;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <FocusTrapKeyboardCycleDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close dialog"
    });
    const primaryAction = body.getByRole("button", {
      name: "Primary dialog action"
    });
    const secondaryAction = body.getByRole("button", {
      name: "Secondary dialog action"
    });
    const outsideAfter = body.getByRole("button", {
      name: "Outside after dialog"
    });
    closeButton.focus();
    await expect(closeButton).toHaveFocus();
    await userEvent.tab();
    await expect(primaryAction).toHaveFocus();
    await userEvent.tab();
    await expect(secondaryAction).toHaveFocus();
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(outsideAfter).not.toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(secondaryAction).toHaveFocus();
  }
}`,...(H=(F=w.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var S,P,A;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <FocusIntentPrimaryPointerDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close dialog"
    });
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    const secondaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 1
    });
    closeButton.dispatchEvent(secondaryMouseDown);
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    await userEvent.pointer([{
      target: closeButton,
      keys: "[MouseLeft>]"
    }]);
    await expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
  }
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var M,N,q;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var L,K,G;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(K=D.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var _,$,z;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("dialog-outside-target");
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("none");
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
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
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
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
}`,...(z=($=B.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var J,Q,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ke=["Interactive","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","OpenByDefault","NonDismissable","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{B as CloseReasonTelemetry,x as EscapeIgnoresImeComposition,f as EscapePreemptedByGlobalHandler,b as FocusIntentPrimaryPointerOnly,g as FocusReturn,w as FocusTrapKeyboardCycle,m as Interactive,h as NestedDismissOrder,D as NonDismissable,v as OpenByDefault,ke as __namedExportsOrder,Ie as default};
