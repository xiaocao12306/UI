import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as p}from"./Button-DS9RTxKh.js";import{I as ie}from"./Input-pKdbw4ss.js";import{T as re}from"./Textarea-C2HCxZDO.js";import{D as l}from"./Dialog-B2OlqLN0.js";import{D as ce}from"./Dropdown-Dl3sJ6Vu.js";import{within as c,expect as n,userEvent as s,fireEvent as C}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-CnEUF6y7.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";const Fe={title:"Overlay/Dialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function le(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(p,{onClick:()=>e(!0),children:"Open Draft Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Create AI Draft",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx(ie,{placeholder:"Title","aria-label":"Title"}),t.jsx(re,{placeholder:"Describe expected output...","aria-label":"Description"}),t.jsx(p,{children:"Save Draft"})]})})]})}function de(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Review Prompt Plan",children:t.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const m={render:()=>t.jsx(le,{}),play:async({canvasElement:a})=>{const e=c(a),o=c(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Draft Dialog"})),await n(await o.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function ue(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(p,{onClick:()=>e(!0),children:"Open Focus Return Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Focus Return",children:t.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const w={render:()=>t.jsx(ue,{}),play:async({canvasElement:a})=>{const e=c(a),o=c(a.ownerDocument.body),r=e.getByRole("button",{name:"Open Focus Return Dialog"});await s.click(r),await n(await o.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Close dialog"})),await n(r).toHaveFocus()}};function ye(){const[a,e]=i.useState(!0);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("button",{type:"button",children:"Outside before dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Focus trap dialog",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Tab and Shift+Tab should cycle within the dialog."}),t.jsx(p,{children:"Primary dialog action"}),t.jsx(p,{variant:"outline",children:"Secondary dialog action"})]})}),t.jsx("button",{type:"button",children:"Outside after dialog"})]})}const b={render:()=>t.jsx(ye,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body),o=await e.findByRole("button",{name:"Close dialog"}),r=e.getByRole("button",{name:"Primary dialog action"}),d=e.getByRole("button",{name:"Secondary dialog action"}),u=e.getByRole("button",{name:"Outside after dialog"});o.focus(),await n(o).toHaveFocus(),await s.tab(),await n(r).toHaveFocus(),await s.tab(),await n(d).toHaveFocus(),await s.tab(),await n(o).toHaveFocus(),await n(u).not.toHaveFocus(),await s.tab({shift:!0}),await n(d).toHaveFocus()}};function pe(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Focus intent pointer policy",children:t.jsx("p",{style:{margin:0},children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const v={render:()=>t.jsx(pe,{}),play:async({canvasElement:a})=>{const o=await c(a.ownerDocument.body).findByRole("button",{name:"Close dialog"});await s.tab(),await n(o).toHaveFocus(),await n(o.getAttribute("style")).toContain("var(--aurora-focus-ring)");const r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});o.dispatchEvent(r),await n(o.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await s.pointer([{target:o,keys:"[MouseLeft>]"}]),await n(o.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}},D={render:()=>t.jsx(de,{})};function ge(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),t.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[t.jsx(p,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),t.jsx(p,{onClick:()=>e(!1),children:"Confirm"})]})]})})}const B={render:()=>t.jsx(ge,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Cancel"})),await n(e.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function me(){const[a,e]=i.useState(!0),[o,r]=i.useState(0),[d,u]=i.useState(0);return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:{color:"var(--aurora-text-primary)"},children:d})]}),t.jsx(l,{open:a,onOpenChange:e,title:"Guarded dismissal dialog",onEscapeKeyDown:y=>{y.preventDefault(),r(g=>g+1)},onPointerDownOutside:y=>{y.preventDefault(),u(g=>g+1)},children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})}const h={render:()=>t.jsx(me,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body),o=e.getByTestId("dialog-guard-outside-target");await n(await e.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await s.click(o),await n(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function we(){const[a,e]=i.useState(!1),[o,r]=i.useState("none"),[d,u]=i.useState("none");return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-close-reason",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dialog-close-trace",style:{color:"var(--aurora-text-primary)"},children:d})]}),t.jsx(p,{onClick:()=>e(!0),children:"Open Telemetry Dialog"}),t.jsx(l,{open:a,onOpenChange:y=>{e(y),y||u(g=>`${g} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:y=>{r(y),u(`reason:${y}`)},children:t.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const x={render:()=>t.jsx(we,{}),play:async({canvasElement:a})=>{const e=c(a),o=c(a.ownerDocument.body),r=e.getByTestId("dialog-outside-target");await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.pointer({target:r,keys:"[MouseLeft]"}),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function be(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(p,{onClick:()=>e(!0),children:"Open Nested Overlay Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Nested Overlay Dialog",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then dialog."}),t.jsx(ce,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const T={render:()=>t.jsx(be,{}),play:async({canvasElement:a})=>{const e=c(a),o=c(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await o.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Dialog actions"})),await n(o.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(o.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function ve(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"IME composition dialog",children:t.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const f={render:()=>t.jsx(ve,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,o=c(e.body);await n(await o.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),C.keyDown(e,{key:"Escape",isComposing:!0}),await n(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),C.keyDown(e,{key:"Escape",keyCode:229}),await n(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function De(){const[a,e]=i.useState(!0),[o,r]=i.useState(0);return i.useEffect(()=>{const d=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",d,!0),()=>{document.removeEventListener("keydown",d,!0)}},[]),t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsx(l,{open:a,onOpenChange:e,title:"Preempted escape dialog",onEscapeKeyDown:()=>r(d=>d+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const E={render:()=>t.jsx(De,{}),play:async({canvasElement:a})=>{const e=c(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};var I,R,j;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var k,O,H;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(O=w.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var F,S,P;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(S=b.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var A,M,N;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(M=v.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var G,q,L;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(L=(q=D.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var K,_,$;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(_=B.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,J,Q;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DismissGuardDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = body.getByTestId("dialog-guard-outside-target");
    await expect(await body.findByRole("dialog", {
      name: "Guarded dismissal dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Guarded dismissal dialog"
    })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1");
    await userEvent.click(outsideTarget);
    await expect(body.getByRole("dialog", {
      name: "Guarded dismissal dialog"
    })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1");
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,V,W;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(V=x.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,se;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const Se=["Interactive","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{x as CloseReasonTelemetry,h as DismissGuardHooks,f as EscapeIgnoresImeComposition,E as EscapePreemptedByGlobalHandler,v as FocusIntentPrimaryPointerOnly,w as FocusReturn,b as FocusTrapKeyboardCycle,m as Interactive,T as NestedDismissOrder,B as NonDismissable,D as OpenByDefault,Se as __namedExportsOrder,Fe as default};
