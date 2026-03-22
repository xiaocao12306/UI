import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as w}from"./Button-Bcz0jJFO.js";import{I as Te}from"./Input-CMwa0OIu.js";import{T as ke}from"./Textarea-Db9nbHYK.js";import{D as d}from"./Dialog-DXNwdCKh.js";import{D as Re}from"./Dropdown-CADnpb6E.js";import{within as l,expect as n,fireEvent as c,waitFor as u,userEvent as i}from"./index-DgAF9SIF.js";import{S as b,s as B,a as D}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-0MVldSzJ.js";const st={title:"Overlay/Dialog",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},Ie={display:"grid",gap:12},A={display:"grid",gap:10},je={display:"flex",gap:8,justifyContent:"end"},Ee={display:"grid",gap:12,justifyItems:"start"},p={margin:0},Ce={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Oe(){const[o,e]=r.useState(!1);return t.jsxs(b,{gap:12,children:[t.jsx(w,{onClick:()=>e(!0),children:"Open Draft Dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Create AI Draft",children:t.jsxs("div",{style:A,children:[t.jsx(Te,{placeholder:"Title","aria-label":"Title"}),t.jsx(ke,{placeholder:"Describe expected output...","aria-label":"Description"}),t.jsx(w,{children:"Save Draft"})]})})]})}function Se(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Review Prompt Plan",children:t.jsx("p",{style:p,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const v={render:()=>t.jsx(Oe,{}),play:async({canvasElement:o})=>{const e=l(o),a=l(o.ownerDocument.body);await i.click(e.getByRole("button",{name:"Open Draft Dialog"})),await n(await a.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Fe(){const[o,e]=r.useState(!1);return t.jsxs(b,{gap:12,children:[t.jsx(w,{onClick:()=>e(!0),children:"Open Focus Return Dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Focus Return",children:t.jsx("p",{style:p,children:"Close this dialog and focus should return to the trigger button."})})]})}const h={render:()=>t.jsx(Fe,{}),play:async({canvasElement:o})=>{const e=l(o),a=l(o.ownerDocument.body),s=e.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(s),await n(await a.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(s).toHaveFocus()}};function He(){const[o,e]=r.useState(!0);return t.jsxs(b,{gap:12,children:[t.jsx("button",{type:"button",children:"Outside before dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Focus trap dialog",children:t.jsxs("div",{style:A,children:[t.jsx("p",{style:p,children:"Tab and Shift+Tab should cycle within the dialog."}),t.jsx(w,{children:"Primary dialog action"}),t.jsx(w,{variant:"outline",children:"Secondary dialog action"})]})}),t.jsx("button",{type:"button",children:"Outside after dialog"})]})}const f={render:()=>t.jsx(He,{}),play:async({canvasElement:o})=>{const e=l(o.ownerDocument.body),a=await e.findByRole("button",{name:"Close dialog"}),s=e.getByRole("button",{name:"Primary dialog action"}),y=e.getByRole("button",{name:"Secondary dialog action"}),g=e.getByRole("button",{name:"Outside after dialog"});a.focus(),await n(a).toHaveFocus(),await i.tab(),await n(s).toHaveFocus(),await i.tab(),await n(y).toHaveFocus(),await i.tab(),await n(a).toHaveFocus(),await n(g).not.toHaveFocus(),await i.tab({shift:!0}),await n(y).toHaveFocus()}};function Ae(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Focus intent pointer policy",children:t.jsx("p",{style:p,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const E={render:()=>t.jsx(Ae,{}),play:async({canvasElement:o})=>{const a=await l(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await i.tab(),await n(a).toHaveFocus(),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)");const s=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});a.dispatchEvent(s),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await n(a.style.transform).toContain("0"),await i.pointer([{target:a,keys:"[MouseLeft>]"}]),await u(()=>{n(a.style.transform).toContain("1px")}),await n(a.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}};function Pe(){const[o,e]=r.useState(!0);return t.jsx(b,{gap:12,children:t.jsxs(d,{open:o,onOpenChange:e,title:"Focus intent re-entry dialog",closeLabel:"Focus intent close dialog",children:[t.jsx("p",{style:p,children:"Click the in-dialog action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),t.jsx("button",{type:"button",children:"Dialog content action"})]})})}const C={render:()=>t.jsx(Pe,{}),play:async({canvasElement:o})=>{const e=l(o.ownerDocument.body),a=await e.findByRole("button",{name:"Dialog content action"}),s=await e.findByRole("button",{name:"Focus intent close dialog"});await i.click(a),await n(a).toHaveFocus(),await i.tab(),await n(s).toHaveFocus(),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)"),c.mouseDown(s,{button:0,ctrlKey:!0}),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function Ke(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:t.jsx("p",{style:p,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})}const T={render:()=>t.jsx(Ke,{}),play:async({canvasElement:o})=>{const e=l(o.ownerDocument.body),a=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await n(a).toHaveAttribute("aria-keyshortcuts","Escape");const s=await e.findByRole("button",{name:"Close dialog"});await n(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.mouseDown(s,{button:0}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.pointerCancel(s),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.pointerDown(s,{pointerType:"touch",button:0}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.pointerUp(s,{pointerType:"touch",button:0}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),s.focus(),c.keyDown(s,{key:"Enter",ctrlKey:!0}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyUp(s,{key:"Enter",ctrlKey:!0}),c.keyDown(s,{key:"Enter"}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Enter"}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Spacebar"}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Spacebar"}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Space"}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Space"}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Enter",keyCode:229,which:229}),await u(()=>{n(s.style.transform).toContain("translateY(0")})}},k={render:()=>t.jsx(Se,{})};function Ye(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:t.jsxs("div",{style:Ie,children:[t.jsx("p",{style:p,children:"Review the migration plan before confirming release."}),t.jsxs("div",{style:je,children:[t.jsx(w,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),t.jsx(w,{onClick:()=>e(!1),children:"Confirm"})]})]})})}const R={render:()=>t.jsx(Ye,{}),play:async({canvasElement:o})=>{const e=l(o.ownerDocument.body),a=await e.findByRole("dialog",{name:"Critical Confirmation"});await n(a).toBeInTheDocument(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Cancel"})),await n(e.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function Me(){const[o,e]=r.useState(!0),[a,s]=r.useState(0),[y,g]=r.useState(0);return t.jsx(b,{gap:12,children:t.jsxs("div",{style:Ee,children:[t.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:Ce}),t.jsxs("p",{style:B,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:D,children:a})]}),t.jsxs("p",{style:B,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:D,children:y})]}),t.jsx(d,{open:o,onOpenChange:e,title:"Guarded dismissal dialog",onEscapeKeyDown:m=>{m.preventDefault(),s(x=>x+1)},onPointerDownOutside:m=>{m.preventDefault(),g(x=>x+1)},children:t.jsx("p",{style:p,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const I={render:()=>t.jsx(Me,{}),play:async({canvasElement:o})=>{const e=l(o.ownerDocument.body),a=e.getByTestId("dialog-guard-outside-target");await n(await e.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await i.click(a),await n(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function Ne(){const[o,e]=r.useState(!1),[a,s]=r.useState("none"),[y,g]=r.useState("none");return t.jsx(b,{gap:12,children:t.jsxs("div",{style:Ee,children:[t.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:Ce}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-close-reason",style:D,children:a})]}),t.jsxs("p",{style:B,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dialog-close-trace",style:D,children:y})]}),t.jsx(w,{onClick:()=>e(!0),children:"Open Telemetry Dialog"}),t.jsx(d,{open:o,onOpenChange:m=>{e(m),m||g(x=>`${x} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:m=>{s(m),g(`reason:${m}`)},children:t.jsx("p",{style:p,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const j={render:()=>t.jsx(Ne,{}),play:async({canvasElement:o})=>{const e=l(o),a=l(o.ownerDocument.body),s=e.getByTestId("dialog-outside-target");await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(a.getByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await i.pointer({target:s,keys:"[MouseLeft]"}),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Ge(){const[o,e]=r.useState(!1);return t.jsxs(b,{gap:12,children:[t.jsx(w,{onClick:()=>e(!0),children:"Open Nested Overlay Dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Nested Overlay Dialog",children:t.jsxs("div",{style:A,children:[t.jsx("p",{style:p,children:"Escape should close dropdown first, then dialog."}),t.jsx(Re,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const O={render:()=>t.jsx(Ge,{}),play:async({canvasElement:o})=>{const e=l(o),a=l(o.ownerDocument.body);await i.click(e.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await a.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Dialog actions"})),await n(a.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(a.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function qe(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"IME composition dialog",children:t.jsx("p",{style:p,children:"Escape should be ignored while IME composition is active."})})}const S={render:()=>t.jsx(qe,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,a=l(e.body);await n(await a.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),c.keyDown(e,{key:"Escape",isComposing:!0}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),c.keyDown(e,{key:"Escape",keyCode:229}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function Le(){const[o,e]=r.useState(!0),[a,s]=r.useState(0);return r.useEffect(()=>{const y=g=>{g.key==="Escape"&&g.preventDefault()};return document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("keydown",y,!0)}},[]),t.jsxs(b,{gap:12,children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-escape-calls",style:D,children:a})]}),t.jsx(d,{open:o,onOpenChange:e,title:"Preempted escape dialog",onEscapeKeyDown:()=>s(y=>y+1),children:t.jsx("p",{style:p,children:"Escape should remain preempted by global handlers."})})]})}const F={render:()=>t.jsx(Le,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,a=l(e.body);await n(await a.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),c.keyDown(e,{key:"Escape",ctrlKey:!0}),c.keyDown(e,{key:"Escape",altKey:!0}),c.keyDown(e,{key:"Escape",metaKey:!0}),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};function Ue(){const[o,e]=r.useState(!0),[a,s]=r.useState(0),[y,g]=r.useState("none");return t.jsxs(b,{gap:12,children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-repeat-escape-calls",style:D,children:a})]}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-repeat-close-reason",style:D,children:y})]}),t.jsx(d,{open:o,onOpenChange:e,title:"Repeat escape dialog",onEscapeKeyDown:()=>s(m=>m+1),onCloseReason:g,children:t.jsx("p",{style:p,children:"Repeated Escape keydown should not close this dialog."})})]})}const H={render:()=>t.jsx(Ue,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,a=l(e.body);await n(await a.findByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),c.keyDown(e,{key:"Escape",repeat:!0}),await n(a.getByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none"),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Repeat escape dialog"})).not.toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key")}};var P,K,Y;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var M,N,G;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(N=h.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var q,L,U;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(L=f.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var _,$,z;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    await expect(closeButton.style.transform).toContain("0");
    await userEvent.pointer([{
      target: closeButton,
      keys: "[MouseLeft>]"
    }]);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("1px");
    });
    await expect(closeButton.getAttribute("style")).not.toContain("var(--aurora-focus-ring)");
  }
}`,...(z=($=E.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var V,J,Q;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <FocusIntentReentryDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialogAction = await body.findByRole("button", {
      name: "Dialog content action"
    });
    const closeButton = await body.findByRole("button", {
      name: "Focus intent close dialog"
    });
    await userEvent.click(dialogAction);
    await expect(dialogAction).toHaveFocus();
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    fireEvent.mouseDown(closeButton, {
      button: 0,
      ctrlKey: true
    });
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
  }
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Z;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <CloseButtonKeyboardPressedDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Keyboard pressed close affordance"
    });
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Escape");
    const closeButton = await body.findByRole("button", {
      name: "Close dialog"
    });
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    fireEvent.mouseDown(closeButton, {
      button: 0
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerCancel(closeButton);
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.pointerDown(closeButton, {
      pointerType: "touch",
      button: 0
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.pointerUp(closeButton, {
      pointerType: "touch",
      button: 0
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    closeButton.focus();
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      ctrlKey: true
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Enter",
      ctrlKey: true
    });
    fireEvent.keyDown(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Spacebar"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, {
      key: "Spacebar"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(1px)");
    });
    fireEvent.keyUp(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyDown(closeButton, {
      key: "Enter",
      keyCode: 229,
      which: 229
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
  }
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <NonDismissableDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Critical Confirmation"
    });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
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
}`,...(se=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,re,ce;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var le,de,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
    outsideTarget.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      button: 0,
      ctrlKey: true,
      pointerType: "mouse"
    }));
    await expect(body.getByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key");
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
}`,...(ue=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ye,pe,ge;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,we,be;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(we=S.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var Be,De,xe;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(xe=(De=F.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var ve,he,fe;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(he=H.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};const it=["Interactive","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{T as CloseButtonKeyboardPressedState,j as CloseReasonTelemetry,I as DismissGuardHooks,S as EscapeIgnoresImeComposition,F as EscapePreemptedByGlobalHandler,H as EscapeRepeatGuard,E as FocusIntentPrimaryPointerOnly,C as FocusIntentReentry,h as FocusReturn,f as FocusTrapKeyboardCycle,v as Interactive,O as NestedDismissOrder,R as NonDismissable,k as OpenByDefault,it as __namedExportsOrder,st as default};
