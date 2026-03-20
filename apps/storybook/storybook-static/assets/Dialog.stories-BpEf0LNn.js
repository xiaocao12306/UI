import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as g}from"./Button-BhfMIoQv.js";import{I as be}from"./Input-pKdbw4ss.js";import{T as De}from"./Textarea-C2HCxZDO.js";import{D as d}from"./Dialog-DJrTABMX.js";import{D as Be}from"./Dropdown-CAW9LzpQ.js";import{within as r,expect as n,userEvent as s,fireEvent as D}from"./index-DgAF9SIF.js";import{S as m,s as w,a as b}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DAyP3iyR.js";const Ue={title:"Overlay/Dialog",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},he={display:"grid",gap:12},H={display:"grid",gap:10},ve={display:"flex",gap:8,justifyContent:"end"},me={display:"grid",gap:12,justifyItems:"start"},p={margin:0},we={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function xe(){const[o,t]=i.useState(!1);return e.jsxs(m,{gap:12,children:[e.jsx(g,{onClick:()=>t(!0),children:"Open Draft Dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Create AI Draft",children:e.jsxs("div",{style:H,children:[e.jsx(be,{placeholder:"Title","aria-label":"Title"}),e.jsx(De,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(g,{children:"Save Draft"})]})})]})}function Te(){const[o,t]=i.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"Review Prompt Plan",children:e.jsx("p",{style:p,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const h={render:()=>e.jsx(xe,{}),play:async({canvasElement:o})=>{const t=r(o),a=r(o.ownerDocument.body);await s.click(t.getByRole("button",{name:"Open Draft Dialog"})),await n(await a.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Ee(){const[o,t]=i.useState(!1);return e.jsxs(m,{gap:12,children:[e.jsx(g,{onClick:()=>t(!0),children:"Open Focus Return Dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Focus Return",children:e.jsx("p",{style:p,children:"Close this dialog and focus should return to the trigger button."})})]})}const v={render:()=>e.jsx(Ee,{}),play:async({canvasElement:o})=>{const t=r(o),a=r(o.ownerDocument.body),c=t.getByRole("button",{name:"Open Focus Return Dialog"});await s.click(c),await n(await a.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close dialog"})),await n(c).toHaveFocus()}};function fe(){const[o,t]=i.useState(!0);return e.jsxs(m,{gap:12,children:[e.jsx("button",{type:"button",children:"Outside before dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Focus trap dialog",children:e.jsxs("div",{style:H,children:[e.jsx("p",{style:p,children:"Tab and Shift+Tab should cycle within the dialog."}),e.jsx(g,{children:"Primary dialog action"}),e.jsx(g,{variant:"outline",children:"Secondary dialog action"})]})}),e.jsx("button",{type:"button",children:"Outside after dialog"})]})}const x={render:()=>e.jsx(fe,{}),play:async({canvasElement:o})=>{const t=r(o.ownerDocument.body),a=await t.findByRole("button",{name:"Close dialog"}),c=t.getByRole("button",{name:"Primary dialog action"}),l=t.getByRole("button",{name:"Secondary dialog action"}),u=t.getByRole("button",{name:"Outside after dialog"});a.focus(),await n(a).toHaveFocus(),await s.tab(),await n(c).toHaveFocus(),await s.tab(),await n(l).toHaveFocus(),await s.tab(),await n(a).toHaveFocus(),await n(u).not.toHaveFocus(),await s.tab({shift:!0}),await n(l).toHaveFocus()}};function Re(){const[o,t]=i.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"Focus intent pointer policy",children:e.jsx("p",{style:p,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const T={render:()=>e.jsx(Re,{}),play:async({canvasElement:o})=>{const a=await r(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await s.tab(),await n(a).toHaveFocus(),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)");const c=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});a.dispatchEvent(c),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await s.pointer([{target:a,keys:"[MouseLeft>]"}]),await n(a.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}},E={render:()=>e.jsx(Te,{})};function Ie(){const[o,t]=i.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:he,children:[e.jsx("p",{style:p,children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:ve,children:[e.jsx(g,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(g,{onClick:()=>t(!1),children:"Confirm"})]})]})})}const f={render:()=>e.jsx(Ie,{}),play:async({canvasElement:o})=>{const t=r(o.ownerDocument.body);await n(await t.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.click(t.getByRole("button",{name:"Cancel"})),await n(t.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function Ce(){const[o,t]=i.useState(!0),[a,c]=i.useState(0),[l,u]=i.useState(0);return e.jsx(m,{gap:12,children:e.jsxs("div",{style:me,children:[e.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:we}),e.jsxs("p",{style:w,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:b,children:a})]}),e.jsxs("p",{style:w,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:b,children:l})]}),e.jsx(d,{open:o,onOpenChange:t,title:"Guarded dismissal dialog",onEscapeKeyDown:y=>{y.preventDefault(),c(B=>B+1)},onPointerDownOutside:y=>{y.preventDefault(),u(B=>B+1)},children:e.jsx("p",{style:p,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const R={render:()=>e.jsx(Ce,{}),play:async({canvasElement:o})=>{const t=r(o.ownerDocument.body),a=t.getByTestId("dialog-guard-outside-target");await n(await t.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await s.click(a),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function ke(){const[o,t]=i.useState(!1),[a,c]=i.useState("none"),[l,u]=i.useState("none");return e.jsx(m,{gap:12,children:e.jsxs("div",{style:me,children:[e.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:we}),e.jsxs("p",{style:w,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-close-reason",style:b,children:a})]}),e.jsxs("p",{style:w,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"dialog-close-trace",style:b,children:l})]}),e.jsx(g,{onClick:()=>t(!0),children:"Open Telemetry Dialog"}),e.jsx(d,{open:o,onOpenChange:y=>{t(y),y||u(B=>`${B} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:y=>{c(y),u(`reason:${y}`)},children:e.jsx("p",{style:p,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const I={render:()=>e.jsx(ke,{}),play:async({canvasElement:o})=>{const t=r(o),a=r(o.ownerDocument.body),c=t.getByTestId("dialog-outside-target");await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await s.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close dialog"})),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await s.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.pointer({target:c,keys:"[MouseLeft]"}),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function je(){const[o,t]=i.useState(!1);return e.jsxs(m,{gap:12,children:[e.jsx(g,{onClick:()=>t(!0),children:"Open Nested Overlay Dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:H,children:[e.jsx("p",{style:p,children:"Escape should close dropdown first, then dialog."}),e.jsx(Be,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const C={render:()=>e.jsx(je,{}),play:async({canvasElement:o})=>{const t=r(o),a=r(o.ownerDocument.body);await s.click(t.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await a.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Dialog actions"})),await n(a.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(a.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function Oe(){const[o,t]=i.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"IME composition dialog",children:e.jsx("p",{style:p,children:"Escape should be ignored while IME composition is active."})})}const k={render:()=>e.jsx(Oe,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=r(t.body);await n(await a.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),D.keyDown(t,{key:"Escape",isComposing:!0}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),D.keyDown(t,{key:"Escape",keyCode:229}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function He(){const[o,t]=i.useState(!0),[a,c]=i.useState(0);return i.useEffect(()=>{const l=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),e.jsxs(m,{gap:12,children:[e.jsxs("p",{style:w,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-escape-calls",style:b,children:a})]}),e.jsx(d,{open:o,onOpenChange:t,title:"Preempted escape dialog",onEscapeKeyDown:()=>c(l=>l+1),children:e.jsx("p",{style:p,children:"Escape should remain preempted by global handlers."})})]})}const j={render:()=>e.jsx(He,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=r(t.body);await n(await a.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),D.keyDown(t,{key:"Escape",ctrlKey:!0}),D.keyDown(t,{key:"Escape",altKey:!0}),D.keyDown(t,{key:"Escape",metaKey:!0}),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};function Se(){const[o,t]=i.useState(!0),[a,c]=i.useState(0),[l,u]=i.useState("none");return e.jsxs(m,{gap:12,children:[e.jsxs("p",{style:w,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-escape-calls",style:b,children:a})]}),e.jsxs("p",{style:w,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-close-reason",style:b,children:l})]}),e.jsx(d,{open:o,onOpenChange:t,title:"Repeat escape dialog",onEscapeKeyDown:()=>c(y=>y+1),onCloseReason:u,children:e.jsx("p",{style:p,children:"Repeated Escape keydown should not close this dialog."})})]})}const O={render:()=>e.jsx(Se,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=r(t.body);await n(await a.findByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),D.keyDown(t,{key:"Escape",repeat:!0}),await n(a.getByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Repeat escape dialog"})).not.toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key")}};var S,F,P;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(F=h.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var A,M,N;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(M=v.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var G,q,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(q=x.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var L,_,$;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(_=T.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,J,Q;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,V,W;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(V=f.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,re;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var le,de,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDialog />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Preempted escape dialog"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      ctrlKey: true
    });
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      altKey: true
    });
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      metaKey: true
    });
    await expect(body.getByRole("dialog", {
      name: "Preempted escape dialog"
    })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-escape-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Preempted escape dialog"
    })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-escape-calls")).toHaveTextContent("0");
  }
}`,...(ue=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ye,pe,ge;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <EscapeRepeatDialogDemo />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Repeat escape dialog"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      repeat: true
    });
    await expect(body.getByRole("dialog", {
      name: "Repeat escape dialog"
    })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0");
    await expect(body.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none");
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Repeat escape dialog"
    })).not.toBeInTheDocument();
    await expect(body.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1");
    await expect(body.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key");
  }
}`,...(ge=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Ve=["Interactive","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{I as CloseReasonTelemetry,R as DismissGuardHooks,k as EscapeIgnoresImeComposition,j as EscapePreemptedByGlobalHandler,O as EscapeRepeatGuard,T as FocusIntentPrimaryPointerOnly,v as FocusReturn,x as FocusTrapKeyboardCycle,h as Interactive,C as NestedDismissOrder,f as NonDismissable,E as OpenByDefault,Ve as __namedExportsOrder,Ue as default};
