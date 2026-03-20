import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as g}from"./Button-BhfMIoQv.js";import{I as pe}from"./Input-pKdbw4ss.js";import{T as ge}from"./Textarea-C2HCxZDO.js";import{D as l}from"./Dialog-Baix7LEt.js";import{D as me}from"./Dropdown-blEXx4nD.js";import{within as r,expect as n,userEvent as s,fireEvent as b}from"./index-DgAF9SIF.js";import{S as m,s as D,a as B}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BFUe1l9-.js";const _e={title:"Overlay/Dialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},we={display:"grid",gap:12},O={display:"grid",gap:10},be={display:"flex",gap:8,justifyContent:"end"},ue={display:"grid",gap:12,justifyItems:"start"},u={margin:0},ye={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function De(){const[o,e]=i.useState(!1);return t.jsxs(m,{gap:12,children:[t.jsx(g,{onClick:()=>e(!0),children:"Open Draft Dialog"}),t.jsx(l,{open:o,onOpenChange:e,title:"Create AI Draft",children:t.jsxs("div",{style:O,children:[t.jsx(pe,{placeholder:"Title","aria-label":"Title"}),t.jsx(ge,{placeholder:"Describe expected output...","aria-label":"Description"}),t.jsx(g,{children:"Save Draft"})]})})]})}function Be(){const[o,e]=i.useState(!0);return t.jsx(l,{open:o,onOpenChange:e,title:"Review Prompt Plan",children:t.jsx("p",{style:u,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const h={render:()=>t.jsx(De,{}),play:async({canvasElement:o})=>{const e=r(o),a=r(o.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Draft Dialog"})),await n(await a.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function he(){const[o,e]=i.useState(!1);return t.jsxs(m,{gap:12,children:[t.jsx(g,{onClick:()=>e(!0),children:"Open Focus Return Dialog"}),t.jsx(l,{open:o,onOpenChange:e,title:"Focus Return",children:t.jsx("p",{style:u,children:"Close this dialog and focus should return to the trigger button."})})]})}const v={render:()=>t.jsx(he,{}),play:async({canvasElement:o})=>{const e=r(o),a=r(o.ownerDocument.body),c=e.getByRole("button",{name:"Open Focus Return Dialog"});await s.click(c),await n(await a.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close dialog"})),await n(c).toHaveFocus()}};function ve(){const[o,e]=i.useState(!0);return t.jsxs(m,{gap:12,children:[t.jsx("button",{type:"button",children:"Outside before dialog"}),t.jsx(l,{open:o,onOpenChange:e,title:"Focus trap dialog",children:t.jsxs("div",{style:O,children:[t.jsx("p",{style:u,children:"Tab and Shift+Tab should cycle within the dialog."}),t.jsx(g,{children:"Primary dialog action"}),t.jsx(g,{variant:"outline",children:"Secondary dialog action"})]})}),t.jsx("button",{type:"button",children:"Outside after dialog"})]})}const x={render:()=>t.jsx(ve,{}),play:async({canvasElement:o})=>{const e=r(o.ownerDocument.body),a=await e.findByRole("button",{name:"Close dialog"}),c=e.getByRole("button",{name:"Primary dialog action"}),d=e.getByRole("button",{name:"Secondary dialog action"}),y=e.getByRole("button",{name:"Outside after dialog"});a.focus(),await n(a).toHaveFocus(),await s.tab(),await n(c).toHaveFocus(),await s.tab(),await n(d).toHaveFocus(),await s.tab(),await n(a).toHaveFocus(),await n(y).not.toHaveFocus(),await s.tab({shift:!0}),await n(d).toHaveFocus()}};function xe(){const[o,e]=i.useState(!0);return t.jsx(l,{open:o,onOpenChange:e,title:"Focus intent pointer policy",children:t.jsx("p",{style:u,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const T={render:()=>t.jsx(xe,{}),play:async({canvasElement:o})=>{const a=await r(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await s.tab(),await n(a).toHaveFocus(),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)");const c=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});a.dispatchEvent(c),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await s.pointer([{target:a,keys:"[MouseLeft>]"}]),await n(a.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}},f={render:()=>t.jsx(Be,{})};function Te(){const[o,e]=i.useState(!0);return t.jsx(l,{open:o,onOpenChange:e,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:t.jsxs("div",{style:we,children:[t.jsx("p",{style:u,children:"Review the migration plan before confirming release."}),t.jsxs("div",{style:be,children:[t.jsx(g,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),t.jsx(g,{onClick:()=>e(!1),children:"Confirm"})]})]})})}const E={render:()=>t.jsx(Te,{}),play:async({canvasElement:o})=>{const e=r(o.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Cancel"})),await n(e.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function fe(){const[o,e]=i.useState(!0),[a,c]=i.useState(0),[d,y]=i.useState(0);return t.jsx(m,{gap:12,children:t.jsxs("div",{style:ue,children:[t.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:ye}),t.jsxs("p",{style:D,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:B,children:a})]}),t.jsxs("p",{style:D,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:B,children:d})]}),t.jsx(l,{open:o,onOpenChange:e,title:"Guarded dismissal dialog",onEscapeKeyDown:p=>{p.preventDefault(),c(w=>w+1)},onPointerDownOutside:p=>{p.preventDefault(),y(w=>w+1)},children:t.jsx("p",{style:u,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const C={render:()=>t.jsx(fe,{}),play:async({canvasElement:o})=>{const e=r(o.ownerDocument.body),a=e.getByTestId("dialog-guard-outside-target");await n(await e.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await s.click(a),await n(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function Ee(){const[o,e]=i.useState(!1),[a,c]=i.useState("none"),[d,y]=i.useState("none");return t.jsx(m,{gap:12,children:t.jsxs("div",{style:ue,children:[t.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:ye}),t.jsxs("p",{style:D,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-close-reason",style:B,children:a})]}),t.jsxs("p",{style:D,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dialog-close-trace",style:B,children:d})]}),t.jsx(g,{onClick:()=>e(!0),children:"Open Telemetry Dialog"}),t.jsx(l,{open:o,onOpenChange:p=>{e(p),p||y(w=>`${w} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:p=>{c(p),y(`reason:${p}`)},children:t.jsx("p",{style:u,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const I={render:()=>t.jsx(Ee,{}),play:async({canvasElement:o})=>{const e=r(o),a=r(o.ownerDocument.body),c=e.getByTestId("dialog-outside-target");await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.pointer({target:c,keys:"[MouseLeft]"}),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Ce(){const[o,e]=i.useState(!1);return t.jsxs(m,{gap:12,children:[t.jsx(g,{onClick:()=>e(!0),children:"Open Nested Overlay Dialog"}),t.jsx(l,{open:o,onOpenChange:e,title:"Nested Overlay Dialog",children:t.jsxs("div",{style:O,children:[t.jsx("p",{style:u,children:"Escape should close dropdown first, then dialog."}),t.jsx(me,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const R={render:()=>t.jsx(Ce,{}),play:async({canvasElement:o})=>{const e=r(o),a=r(o.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await a.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.click(a.getByRole("button",{name:"Dialog actions"})),await n(a.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(a.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function Ie(){const[o,e]=i.useState(!0);return t.jsx(l,{open:o,onOpenChange:e,title:"IME composition dialog",children:t.jsx("p",{style:u,children:"Escape should be ignored while IME composition is active."})})}const k={render:()=>t.jsx(Ie,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,a=r(e.body);await n(await a.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),b.keyDown(e,{key:"Escape",isComposing:!0}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),b.keyDown(e,{key:"Escape",keyCode:229}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function Re(){const[o,e]=i.useState(!0),[a,c]=i.useState(0);return i.useEffect(()=>{const d=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",d,!0),()=>{document.removeEventListener("keydown",d,!0)}},[]),t.jsxs(m,{gap:12,children:[t.jsxs("p",{style:D,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-escape-calls",style:B,children:a})]}),t.jsx(l,{open:o,onOpenChange:e,title:"Preempted escape dialog",onEscapeKeyDown:()=>c(d=>d+1),children:t.jsx("p",{style:u,children:"Escape should remain preempted by global handlers."})})]})}const j={render:()=>t.jsx(Re,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,a=r(e.body);await n(await a.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),b.keyDown(e,{key:"Escape",ctrlKey:!0}),b.keyDown(e,{key:"Escape",altKey:!0}),b.keyDown(e,{key:"Escape",metaKey:!0}),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};var S,H,F;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(H=h.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var P,A,M;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(A=v.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var N,G,K;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var q,L,_;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(L=T.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var $,z,J;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(J=(z=f.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,V;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(U=E.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,oe;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,ce;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var re,le,de;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const $e=["Interactive","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{I as CloseReasonTelemetry,C as DismissGuardHooks,k as EscapeIgnoresImeComposition,j as EscapePreemptedByGlobalHandler,T as FocusIntentPrimaryPointerOnly,v as FocusReturn,x as FocusTrapKeyboardCycle,h as Interactive,R as NestedDismissOrder,E as NonDismissable,f as OpenByDefault,$e as __namedExportsOrder,_e as default};
