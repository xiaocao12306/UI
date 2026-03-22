import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as b}from"./Button-DzwIPD-D.js";import{I as Fe}from"./Input-CMwa0OIu.js";import{T as Ae}from"./Textarea-BnJNX4pg.js";import{D as d}from"./Dialog-CqB9aBsb.js";import{D as Pe}from"./Dropdown-1ufCVyLp.js";import{within as l,expect as n,fireEvent as c,waitFor as y,userEvent as i}from"./index-DgAF9SIF.js";import{S as w,s as B,a as h}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-0MVldSzJ.js";const mt={title:"Overlay/Dialog",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},Ke={display:"grid",gap:12},K={display:"grid",gap:10},Ye={display:"flex",gap:8,justifyContent:"end"},He={display:"grid",gap:12,justifyItems:"start"},u={margin:0},Se={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Le(){const[o,t]=r.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Draft Dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Create AI Draft",children:e.jsxs("div",{style:K,children:[e.jsx(Fe,{placeholder:"Title","aria-label":"Title"}),e.jsx(Ae,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(b,{children:"Save Draft"})]})})]})}function Me(){const[o,t]=r.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"Review Prompt Plan",children:e.jsx("p",{style:u,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const x={render:()=>e.jsx(Le,{}),play:async({canvasElement:o})=>{const t=l(o),a=l(o.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Draft Dialog"})),await n(await a.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Ne(){const[o,t]=r.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx("h3",{id:"dialog-heading",style:{margin:0},children:"Release checklist dialog heading"}),e.jsx(d,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist dialog",ariaLabelledBy:"dialog-heading",children:e.jsx("p",{style:u,children:"Dialog name should follow visible heading binding."})})]})}const v={render:()=>e.jsx(Ne,{}),play:async({canvasElement:o})=>{const a=await l(o.ownerDocument.body).findByRole("dialog",{name:"Release checklist dialog heading"});await n(a).toHaveAttribute("aria-labelledby","dialog-heading"),await n(a).not.toHaveAttribute("aria-label")}};function Ge(){const[o,t]=r.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(d,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings dialog",children:e.jsx("p",{style:u,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const f={render:()=>e.jsx(Ge,{}),play:async({canvasElement:o})=>{const a=await l(o.ownerDocument.body).findByRole("dialog",{name:"Automation settings dialog"});await n(a).toHaveAttribute("aria-label","Automation settings dialog"),await n(a).not.toHaveAttribute("aria-labelledby")}};function qe(){const[o,t]=r.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Focus Return Dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Focus Return",children:e.jsx("p",{style:u,children:"Close this dialog and focus should return to the trigger button."})})]})}const E={render:()=>e.jsx(qe,{}),play:async({canvasElement:o})=>{const t=l(o),a=l(o.ownerDocument.body),s=t.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(s),await n(await a.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(s).toHaveFocus()}};function Ue(){const[o,t]=r.useState(!0);return e.jsxs(w,{gap:12,children:[e.jsx("button",{type:"button",children:"Outside before dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Focus trap dialog",children:e.jsxs("div",{style:K,children:[e.jsx("p",{style:u,children:"Tab and Shift+Tab should cycle within the dialog."}),e.jsx(b,{children:"Primary dialog action"}),e.jsx(b,{variant:"outline",children:"Secondary dialog action"})]})}),e.jsx("button",{type:"button",children:"Outside after dialog"})]})}const T={render:()=>e.jsx(Ue,{}),play:async({canvasElement:o})=>{const t=l(o.ownerDocument.body),a=await t.findByRole("button",{name:"Close dialog"}),s=t.getByRole("button",{name:"Primary dialog action"}),p=t.getByRole("button",{name:"Secondary dialog action"}),g=t.getByRole("button",{name:"Outside after dialog"});a.focus(),await n(a).toHaveFocus(),await i.tab(),await n(s).toHaveFocus(),await i.tab(),await n(p).toHaveFocus(),await i.tab(),await n(a).toHaveFocus(),await n(g).not.toHaveFocus(),await i.tab({shift:!0}),await n(p).toHaveFocus()}};function _e(){const[o,t]=r.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"Focus intent pointer policy",children:e.jsx("p",{style:u,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const C={render:()=>e.jsx(_e,{}),play:async({canvasElement:o})=>{const a=await l(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await i.tab(),await n(a).toHaveFocus(),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)");const s=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});a.dispatchEvent(s),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await n(a.style.transform).toContain("0"),await i.pointer([{target:a,keys:"[MouseLeft>]"}]),await y(()=>{n(a.style.transform).toContain("1px")}),await n(a.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}};function $e(){const[o,t]=r.useState(!0);return e.jsx(w,{gap:12,children:e.jsxs(d,{open:o,onOpenChange:t,title:"Focus intent re-entry dialog",closeLabel:"Focus intent close dialog",children:[e.jsx("p",{style:u,children:"Click the in-dialog action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),e.jsx("button",{type:"button",children:"Dialog content action"})]})})}const k={render:()=>e.jsx($e,{}),play:async({canvasElement:o})=>{const t=l(o.ownerDocument.body),a=await t.findByRole("button",{name:"Dialog content action"}),s=await t.findByRole("button",{name:"Focus intent close dialog"});await i.click(a),await n(a).toHaveFocus(),await i.tab(),await n(s).toHaveFocus(),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)"),c.mouseDown(s,{button:0,ctrlKey:!0}),await n(s.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function ze(){const[o,t]=r.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:e.jsx("p",{style:u,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})}const R={render:()=>e.jsx(ze,{}),play:async({canvasElement:o})=>{const t=l(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Keyboard pressed close affordance"});await n(a).toHaveAttribute("aria-keyshortcuts","Escape");const s=await t.findByRole("button",{name:"Close dialog"});await n(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.mouseDown(s,{button:0}),await y(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.pointerCancel(s),await y(()=>{n(s.style.transform).toContain("translateY(0")}),c.pointerDown(s,{pointerType:"touch",button:0}),await y(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.pointerUp(s,{pointerType:"touch",button:0}),await y(()=>{n(s.style.transform).toContain("translateY(0")}),s.focus(),c.keyDown(s,{key:"Enter",ctrlKey:!0}),await y(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyUp(s,{key:"Enter",ctrlKey:!0}),c.keyDown(s,{key:"Enter"}),await y(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Enter"}),await y(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Spacebar"}),await y(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Spacebar"}),await y(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Space"}),await y(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Space"}),await y(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await y(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Enter",keyCode:229,which:229}),await y(()=>{n(s.style.transform).toContain("translateY(0")})}},I={render:()=>e.jsx(Me,{})};function Ve(){const[o,t]=r.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:Ke,children:[e.jsx("p",{style:u,children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:Ye,children:[e.jsx(b,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(b,{onClick:()=>t(!1),children:"Confirm"})]})]})})}const j={render:()=>e.jsx(Ve,{}),play:async({canvasElement:o})=>{const t=l(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Critical Confirmation"});await n(a).toBeInTheDocument(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Cancel"})),await n(t.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function Je(){const[o,t]=r.useState(!0),[a,s]=r.useState(0),[p,g]=r.useState(0);return e.jsx(w,{gap:12,children:e.jsxs("div",{style:He,children:[e.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:Se}),e.jsxs("p",{style:B,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:h,children:a})]}),e.jsxs("p",{style:B,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:h,children:p})]}),e.jsx(d,{open:o,onOpenChange:t,title:"Guarded dismissal dialog",onEscapeKeyDown:m=>{m.preventDefault(),s(D=>D+1)},onPointerDownOutside:m=>{m.preventDefault(),g(D=>D+1)},children:e.jsx("p",{style:u,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const O={render:()=>e.jsx(Je,{}),play:async({canvasElement:o})=>{const t=l(o.ownerDocument.body),a=t.getByTestId("dialog-guard-outside-target");await n(await t.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await i.click(a),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function Qe(){const[o,t]=r.useState(!1),[a,s]=r.useState("none"),[p,g]=r.useState("none");return e.jsx(w,{gap:12,children:e.jsxs("div",{style:He,children:[e.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:Se}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-close-reason",style:h,children:a})]}),e.jsxs("p",{style:B,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"dialog-close-trace",style:h,children:p})]}),e.jsx(b,{onClick:()=>t(!0),children:"Open Telemetry Dialog"}),e.jsx(d,{open:o,onOpenChange:m=>{t(m),m||g(D=>`${D} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:m=>{s(m),g(`reason:${m}`)},children:e.jsx("p",{style:u,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const H={render:()=>e.jsx(Qe,{}),play:async({canvasElement:o})=>{const t=l(o),a=l(o.ownerDocument.body),s=t.getByTestId("dialog-outside-target");await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(a.getByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await i.pointer({target:s,keys:"[MouseLeft]"}),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function We(){const[o,t]=r.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Nested Overlay Dialog"}),e.jsx(d,{open:o,onOpenChange:t,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:K,children:[e.jsx("p",{style:u,children:"Escape should close dropdown first, then dialog."}),e.jsx(Pe,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const S={render:()=>e.jsx(We,{}),play:async({canvasElement:o})=>{const t=l(o),a=l(o.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await a.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Dialog actions"})),await n(a.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(a.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function Xe(){const[o,t]=r.useState(!0);return e.jsx(d,{open:o,onOpenChange:t,title:"IME composition dialog",children:e.jsx("p",{style:u,children:"Escape should be ignored while IME composition is active."})})}const F={render:()=>e.jsx(Xe,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=l(t.body);await n(await a.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",isComposing:!0}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",keyCode:229}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function Ze(){const[o,t]=r.useState(!0),[a,s]=r.useState(0);return r.useEffect(()=>{const p=g=>{g.key==="Escape"&&g.preventDefault()};return document.addEventListener("keydown",p,!0),()=>{document.removeEventListener("keydown",p,!0)}},[]),e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-escape-calls",style:h,children:a})]}),e.jsx(d,{open:o,onOpenChange:t,title:"Preempted escape dialog",onEscapeKeyDown:()=>s(p=>p+1),children:e.jsx("p",{style:u,children:"Escape should remain preempted by global handlers."})})]})}const A={render:()=>e.jsx(Ze,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=l(t.body);await n(await a.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",ctrlKey:!0}),c.keyDown(t,{key:"Escape",altKey:!0}),c.keyDown(t,{key:"Escape",metaKey:!0}),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};function et(){const[o,t]=r.useState(!0),[a,s]=r.useState(0),[p,g]=r.useState("none");return e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-escape-calls",style:h,children:a})]}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-close-reason",style:h,children:p})]}),e.jsx(d,{open:o,onOpenChange:t,title:"Repeat escape dialog",onEscapeKeyDown:()=>s(m=>m+1),onCloseReason:g,children:e.jsx("p",{style:u,children:"Repeated Escape keydown should not close this dialog."})})]})}const P={render:()=>e.jsx(et,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=l(t.body);await n(await a.findByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",repeat:!0}),await n(a.getByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none"),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Repeat escape dialog"})).not.toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key")}};var Y,L,M;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,G,q;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <LabelledByPrecedenceDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Release checklist dialog heading"
    });
    await expect(dialog).toHaveAttribute("aria-labelledby", "dialog-heading");
    await expect(dialog).not.toHaveAttribute("aria-label");
  }
}`,...(q=(G=v.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var U,_,$;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <IconTitleAriaLabelFallbackDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Automation settings dialog"
    });
    await expect(dialog).toHaveAttribute("aria-label", "Automation settings dialog");
    await expect(dialog).not.toHaveAttribute("aria-labelledby");
  }
}`,...($=(_=f.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,V,J;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(V=E.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Q,W,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,re;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,le,de;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(de=(le=I.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,ye,pe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};var ge,me,we;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(me=O.parameters)==null?void 0:me.docs)==null?void 0:we.source}}};var be,Be,he;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:he.source}}};var De,xe,ve;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ve=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,Ee,Te;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Te=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Ce,ke,Re;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Ie,je,Oe;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Oe=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};const wt=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{R as CloseButtonKeyboardPressedState,H as CloseReasonTelemetry,O as DismissGuardHooks,F as EscapeIgnoresImeComposition,A as EscapePreemptedByGlobalHandler,P as EscapeRepeatGuard,C as FocusIntentPrimaryPointerOnly,k as FocusIntentReentry,E as FocusReturn,T as FocusTrapKeyboardCycle,f as IconTitleAriaLabelFallback,x as Interactive,v as LabelledByPrecedence,S as NestedDismissOrder,j as NonDismissable,I as OpenByDefault,wt as __namedExportsOrder,mt as default};
