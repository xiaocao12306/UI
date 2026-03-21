import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as m}from"./Button-BMxlc9Nj.js";import{I as ve}from"./Input-D3M9Xqpz.js";import{T as fe}from"./Textarea-rdjUZYOj.js";import{D as d}from"./Dialog-B49Hc1Re.js";import{D as Ee}from"./Dropdown-n4IFWXQu.js";import{within as c,expect as a,fireEvent as l,waitFor as w,userEvent as i}from"./index-DgAF9SIF.js";import{S as b,s as B,a as D}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DAyP3iyR.js";const et={title:"Overlay/Dialog",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},Te={display:"grid",gap:12},F={display:"grid",gap:10},Ce={display:"flex",gap:8,justifyContent:"end"},xe={display:"grid",gap:12,justifyItems:"start"},u={margin:0},he={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function ke(){const[o,e]=r.useState(!1);return t.jsxs(b,{gap:12,children:[t.jsx(m,{onClick:()=>e(!0),children:"Open Draft Dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Create AI Draft",children:t.jsxs("div",{style:F,children:[t.jsx(ve,{placeholder:"Title","aria-label":"Title"}),t.jsx(fe,{placeholder:"Describe expected output...","aria-label":"Description"}),t.jsx(m,{children:"Save Draft"})]})})]})}function Re(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Review Prompt Plan",children:t.jsx("p",{style:u,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const h={render:()=>t.jsx(ke,{}),play:async({canvasElement:o})=>{const e=c(o),n=c(o.ownerDocument.body);await i.click(e.getByRole("button",{name:"Open Draft Dialog"})),await a(await n.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(n.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Ie(){const[o,e]=r.useState(!1);return t.jsxs(b,{gap:12,children:[t.jsx(m,{onClick:()=>e(!0),children:"Open Focus Return Dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Focus Return",children:t.jsx("p",{style:u,children:"Close this dialog and focus should return to the trigger button."})})]})}const v={render:()=>t.jsx(Ie,{}),play:async({canvasElement:o})=>{const e=c(o),n=c(o.ownerDocument.body),s=e.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(s),await a(await n.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Close dialog"})),await a(s).toHaveFocus()}};function je(){const[o,e]=r.useState(!0);return t.jsxs(b,{gap:12,children:[t.jsx("button",{type:"button",children:"Outside before dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Focus trap dialog",children:t.jsxs("div",{style:F,children:[t.jsx("p",{style:u,children:"Tab and Shift+Tab should cycle within the dialog."}),t.jsx(m,{children:"Primary dialog action"}),t.jsx(m,{variant:"outline",children:"Secondary dialog action"})]})}),t.jsx("button",{type:"button",children:"Outside after dialog"})]})}const f={render:()=>t.jsx(je,{}),play:async({canvasElement:o})=>{const e=c(o.ownerDocument.body),n=await e.findByRole("button",{name:"Close dialog"}),s=e.getByRole("button",{name:"Primary dialog action"}),y=e.getByRole("button",{name:"Secondary dialog action"}),p=e.getByRole("button",{name:"Outside after dialog"});n.focus(),await a(n).toHaveFocus(),await i.tab(),await a(s).toHaveFocus(),await i.tab(),await a(y).toHaveFocus(),await i.tab(),await a(n).toHaveFocus(),await a(p).not.toHaveFocus(),await i.tab({shift:!0}),await a(y).toHaveFocus()}};function Oe(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Focus intent pointer policy",children:t.jsx("p",{style:u,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const E={render:()=>t.jsx(Oe,{}),play:async({canvasElement:o})=>{const n=await c(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await i.tab(),await a(n).toHaveFocus(),await a(n.getAttribute("style")).toContain("var(--aurora-focus-ring)");const s=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});n.dispatchEvent(s),await a(n.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await a(n.style.transform).toContain("0"),await i.pointer([{target:n,keys:"[MouseLeft>]"}]),await w(()=>{a(n.style.transform).toContain("1px")}),await a(n.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}};function Se(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only.",children:t.jsx("p",{style:u,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})}const T={render:()=>t.jsx(Se,{}),play:async({canvasElement:o})=>{const e=c(o.ownerDocument.body),n=await e.findByRole("dialog",{name:"Keyboard pressed close affordance"});await a(n).toHaveAttribute("aria-keyshortcuts","Escape");const s=await e.findByRole("button",{name:"Close dialog"});await a(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),s.focus(),l.keyDown(s,{key:"Enter",ctrlKey:!0}),await w(()=>{a(s.style.transform).toContain("translateY(0")}),l.keyUp(s,{key:"Enter",ctrlKey:!0}),l.keyDown(s,{key:"Enter"}),await w(()=>{a(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Enter"}),await w(()=>{a(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Spacebar"}),await w(()=>{a(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Spacebar"}),await w(()=>{a(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Space"}),await w(()=>{a(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Space"}),await w(()=>{a(s.style.transform).toContain("translateY(0")})}},C={render:()=>t.jsx(Re,{})};function He(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:t.jsxs("div",{style:Te,children:[t.jsx("p",{style:u,children:"Review the migration plan before confirming release."}),t.jsxs("div",{style:Ce,children:[t.jsx(m,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),t.jsx(m,{onClick:()=>e(!1),children:"Confirm"})]})]})})}const k={render:()=>t.jsx(He,{}),play:async({canvasElement:o})=>{const e=c(o.ownerDocument.body),n=await e.findByRole("dialog",{name:"Critical Confirmation"});await a(n).toBeInTheDocument(),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Cancel"})),await a(e.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function Fe(){const[o,e]=r.useState(!0),[n,s]=r.useState(0),[y,p]=r.useState(0);return t.jsx(b,{gap:12,children:t.jsxs("div",{style:xe,children:[t.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:he}),t.jsxs("p",{style:B,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:D,children:n})]}),t.jsxs("p",{style:B,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:D,children:y})]}),t.jsx(d,{open:o,onOpenChange:e,title:"Guarded dismissal dialog",onEscapeKeyDown:g=>{g.preventDefault(),s(x=>x+1)},onPointerDownOutside:g=>{g.preventDefault(),p(x=>x+1)},children:t.jsx("p",{style:u,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const R={render:()=>t.jsx(Fe,{}),play:async({canvasElement:o})=>{const e=c(o.ownerDocument.body),n=e.getByTestId("dialog-guard-outside-target");await a(await e.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await a(e.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await i.click(n),await a(e.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await a(e.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function Pe(){const[o,e]=r.useState(!1),[n,s]=r.useState("none"),[y,p]=r.useState("none");return t.jsx(b,{gap:12,children:t.jsxs("div",{style:xe,children:[t.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:he}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-close-reason",style:D,children:n})]}),t.jsxs("p",{style:B,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dialog-close-trace",style:D,children:y})]}),t.jsx(m,{onClick:()=>e(!0),children:"Open Telemetry Dialog"}),t.jsx(d,{open:o,onOpenChange:g=>{e(g),g||p(x=>`${x} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:g=>{s(g),p(`reason:${g}`)},children:t.jsx("p",{style:u,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const I={render:()=>t.jsx(Pe,{}),play:async({canvasElement:o})=>{const e=c(o),n=c(o.ownerDocument.body),s=e.getByTestId("dialog-outside-target");await a(e.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await a(await n.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Close dialog"})),await a(e.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await a(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await a(await n.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await a(await n.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.pointer({target:s,keys:"[MouseLeft]"}),await a(e.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Ae(){const[o,e]=r.useState(!1);return t.jsxs(b,{gap:12,children:[t.jsx(m,{onClick:()=>e(!0),children:"Open Nested Overlay Dialog"}),t.jsx(d,{open:o,onOpenChange:e,title:"Nested Overlay Dialog",children:t.jsxs("div",{style:F,children:[t.jsx("p",{style:u,children:"Escape should close dropdown first, then dialog."}),t.jsx(Ee,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const j={render:()=>t.jsx(Ae,{}),play:async({canvasElement:o})=>{const e=c(o),n=c(o.ownerDocument.body);await i.click(e.getByRole("button",{name:"Open Nested Overlay Dialog"})),await a(await n.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(n.getByRole("button",{name:"Dialog actions"})),await a(n.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(n.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await a(n.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(n.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function Ke(){const[o,e]=r.useState(!0);return t.jsx(d,{open:o,onOpenChange:e,title:"IME composition dialog",children:t.jsx("p",{style:u,children:"Escape should be ignored while IME composition is active."})})}const O={render:()=>t.jsx(Ke,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,n=c(e.body);await a(await n.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",isComposing:!0}),await a(n.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",keyCode:229}),await a(n.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(n.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function Me(){const[o,e]=r.useState(!0),[n,s]=r.useState(0);return r.useEffect(()=>{const y=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("keydown",y,!0)}},[]),t.jsxs(b,{gap:12,children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-escape-calls",style:D,children:n})]}),t.jsx(d,{open:o,onOpenChange:e,title:"Preempted escape dialog",onEscapeKeyDown:()=>s(y=>y+1),children:t.jsx("p",{style:u,children:"Escape should remain preempted by global handlers."})})]})}const S={render:()=>t.jsx(Me,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,n=c(e.body);await a(await n.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",ctrlKey:!0}),l.keyDown(e,{key:"Escape",altKey:!0}),l.keyDown(e,{key:"Escape",metaKey:!0}),await a(n.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await a(n.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(n.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await a(n.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};function Ne(){const[o,e]=r.useState(!0),[n,s]=r.useState(0),[y,p]=r.useState("none");return t.jsxs(b,{gap:12,children:[t.jsxs("p",{style:B,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-repeat-escape-calls",style:D,children:n})]}),t.jsxs("p",{style:B,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-repeat-close-reason",style:D,children:y})]}),t.jsx(d,{open:o,onOpenChange:e,title:"Repeat escape dialog",onEscapeKeyDown:()=>s(g=>g+1),onCloseReason:p,children:t.jsx("p",{style:u,children:"Repeated Escape keydown should not close this dialog."})})]})}const H={render:()=>t.jsx(Ne,{}),play:async({canvasElement:o})=>{const e=o.ownerDocument,n=c(e.body);await a(await n.findByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),l.keyDown(e,{key:"Escape",repeat:!0}),await a(n.getByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),await a(n.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0"),await a(n.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none"),await i.keyboard("{Escape}"),await a(n.queryByRole("dialog",{name:"Repeat escape dialog"})).not.toBeInTheDocument(),await a(n.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1"),await a(n.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key")}};var P,A,K;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(A=h.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var M,N,G;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(N=v.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var Y,q,L;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(L=(q=f.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var U,_,$;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(_=E.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,V,J;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  }
}`,...(J=(V=T.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Q,W,X;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(X=(W=C.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,oe;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,re;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,le,de;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ye,ue,pe;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(pe=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,me,we;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(me=S.parameters)==null?void 0:me.docs)==null?void 0:we.source}}};var be,Be,De;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(De=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};const tt=["Interactive","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","CloseButtonKeyboardPressedState","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{T as CloseButtonKeyboardPressedState,I as CloseReasonTelemetry,R as DismissGuardHooks,O as EscapeIgnoresImeComposition,S as EscapePreemptedByGlobalHandler,H as EscapeRepeatGuard,E as FocusIntentPrimaryPointerOnly,v as FocusReturn,f as FocusTrapKeyboardCycle,h as Interactive,j as NestedDismissOrder,k as NonDismissable,C as OpenByDefault,tt as __namedExportsOrder,et as default};
