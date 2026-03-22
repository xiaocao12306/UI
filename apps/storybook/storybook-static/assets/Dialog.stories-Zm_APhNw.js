import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as b}from"./Button-rBVi27TD.js";import{I as Ge}from"./Input-ueoPJ8SP.js";import{T as qe}from"./Textarea-BnJNX4pg.js";import{D as y}from"./Dialog-BiLcKCgO.js";import{D as Ue}from"./Dropdown-CwM2dI-W.js";import{within as d,expect as n,fireEvent as l,waitFor as g,userEvent as i}from"./index-DgAF9SIF.js";import{S as w,s as D,a as B}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-0MVldSzJ.js";const kt={title:"Overlay/Dialog",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},_e={display:"grid",gap:12},L={display:"grid",gap:10},$e={display:"flex",gap:8,justifyContent:"end"},Ye={display:"grid",gap:12,justifyItems:"start"},p={margin:0},Me={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function ze(){const[o,t]=c.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Draft Dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Create AI Draft",children:e.jsxs("div",{style:L,children:[e.jsx(Ge,{placeholder:"Title","aria-label":"Title"}),e.jsx(qe,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(b,{children:"Save Draft"})]})})]})}function Ve(){const[o,t]=c.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Review Prompt Plan",children:e.jsx("p",{style:p,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const v={render:()=>e.jsx(ze,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Draft Dialog"})),await n(await a.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Je(){const[o,t]=c.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx("h3",{id:"dialog-heading",style:{margin:0},children:"Release checklist dialog heading"}),e.jsx(y,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist dialog",ariaLabelledBy:"dialog-heading",children:e.jsx("p",{style:p,children:"Dialog name should follow visible heading binding."})})]})}const x={render:()=>e.jsx(Je,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Release checklist dialog heading"});await n(a).toHaveAttribute("aria-labelledby","dialog-heading"),await n(a).not.toHaveAttribute("aria-label")}};function Qe(){const[o,t]=c.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(y,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings dialog",children:e.jsx("p",{style:p,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const f={render:()=>e.jsx(Qe,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Automation settings dialog"});await n(a).toHaveAttribute("aria-label","Automation settings dialog"),await n(a).not.toHaveAttribute("aria-labelledby")}};function We(){const[o,t]=c.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(y,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),children:e.jsx("p",{style:p,children:"Icon-only title now keeps fallback dialog naming."})})})}const E={render:()=>e.jsx(We,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Dialog"});await n(a).toHaveAttribute("aria-label","Dialog"),await n(a).not.toHaveAttribute("aria-labelledby")}};function Xe(){const[o,t]=c.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(y,{open:o,onOpenChange:t,title:"Numeric description dialog",description:0,children:e.jsx("p",{style:p,children:"Dialog description supports numeric ReactNode content."})})})}const k={render:()=>e.jsx(Xe,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Numeric description dialog"}),r=t.getAllByText("0");await n(r).toHaveLength(1),await n(r[0].tagName).toBe("P"),await n(a).toHaveAttribute("aria-describedby",r[0].id)}};function Ze(){const[o,t]=c.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Focus Return Dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Focus Return",children:e.jsx("p",{style:p,children:"Close this dialog and focus should return to the trigger button."})})]})}const T={render:()=>e.jsx(Ze,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body),r=t.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(r),await n(await a.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(r).toHaveFocus()}};function et(){const[o,t]=c.useState(!0);return e.jsxs(w,{gap:12,children:[e.jsx("button",{type:"button",children:"Outside before dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Focus trap dialog",children:e.jsxs("div",{style:L,children:[e.jsx("p",{style:p,children:"Tab and Shift+Tab should cycle within the dialog."}),e.jsx(b,{children:"Primary dialog action"}),e.jsx(b,{variant:"outline",children:"Secondary dialog action"})]})}),e.jsx("button",{type:"button",children:"Outside after dialog"})]})}const C={render:()=>e.jsx(et,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("button",{name:"Close dialog"}),r=t.getByRole("button",{name:"Primary dialog action"}),s=t.getByRole("button",{name:"Secondary dialog action"}),m=t.getByRole("button",{name:"Outside after dialog"});a.focus(),await n(a).toHaveFocus(),await i.tab(),await n(r).toHaveFocus(),await i.tab(),await n(s).toHaveFocus(),await i.tab(),await n(a).toHaveFocus(),await n(m).not.toHaveFocus(),await i.tab({shift:!0}),await n(s).toHaveFocus()}};function tt(){const[o,t]=c.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Focus intent pointer policy",children:e.jsx("p",{style:p,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const R={render:()=>e.jsx(tt,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await i.tab(),await n(a).toHaveFocus(),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)");const r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});a.dispatchEvent(r),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await n(a.style.transform).toContain("0"),await i.pointer([{target:a,keys:"[MouseLeft>]"}]),await g(()=>{n(a.style.transform).toContain("1px")}),await n(a.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}};function nt(){const[o,t]=c.useState(!0);return e.jsx(w,{gap:12,children:e.jsxs(y,{open:o,onOpenChange:t,title:"Focus intent re-entry dialog",closeLabel:"Focus intent close dialog",children:[e.jsx("p",{style:p,children:"Click the in-dialog action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),e.jsx("button",{type:"button",children:"Dialog content action"})]})})}const I={render:()=>e.jsx(nt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("button",{name:"Dialog content action"}),r=await t.findByRole("button",{name:"Focus intent close dialog"});await i.click(a),await n(a).toHaveFocus(),await i.tab(),await n(r).toHaveFocus(),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),l.mouseDown(r,{button:0,ctrlKey:!0}),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function at(){const[o,t]=c.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:e.jsx("p",{style:p,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})}const j={render:()=>e.jsx(at,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=o.ownerDocument,r=await t.findByRole("dialog",{name:"Keyboard pressed close affordance"});await n(r).toHaveAttribute("aria-keyshortcuts","Escape");const s=await t.findByRole("button",{name:"Close dialog"});await n(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),l.mouseDown(s,{button:0}),await g(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.pointerCancel(s),await g(()=>{n(s.style.transform).toContain("translateY(0")}),l.pointerDown(s,{pointerType:"touch",button:0}),await g(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.pointerUp(s,{pointerType:"touch",button:0}),await g(()=>{n(s.style.transform).toContain("translateY(0")}),s.focus(),l.keyDown(s,{key:"Enter",ctrlKey:!0}),await g(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyUp(s,{key:"Enter",ctrlKey:!0});const m=u=>{(u.key==="Enter"||u.key===" "||u.key==="Space"||u.key==="Spacebar")&&u.preventDefault()};try{a.addEventListener("keydown",m,!0),l.keyDown(s,{key:"Enter"}),await g(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Space"}),await g(()=>{n(s.style.transform).toContain("translateY(0")})}finally{a.removeEventListener("keydown",m,!0)}l.keyDown(s,{key:"Enter"}),await g(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Enter"}),await g(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Spacebar"}),await g(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Spacebar"}),await g(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Space"}),await g(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Space"}),await g(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await g(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Enter",keyCode:229,which:229}),await g(()=>{n(s.style.transform).toContain("translateY(0")})}},O={render:()=>e.jsx(Ve,{})};function ot(){const[o,t]=c.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:_e,children:[e.jsx("p",{style:p,children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:$e,children:[e.jsx(b,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(b,{onClick:()=>t(!1),children:"Confirm"})]})]})})}const S={render:()=>e.jsx(ot,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Critical Confirmation"});await n(a).toBeInTheDocument(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Cancel"})),await n(t.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function st(){const[o,t]=c.useState(!0),[a,r]=c.useState(0),[s,m]=c.useState(0);return e.jsx(w,{gap:12,children:e.jsxs("div",{style:Ye,children:[e.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:Me}),e.jsxs("p",{style:D,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:B,children:a})]}),e.jsxs("p",{style:D,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:B,children:s})]}),e.jsx(y,{open:o,onOpenChange:t,title:"Guarded dismissal dialog",onEscapeKeyDown:u=>{u.preventDefault(),r(h=>h+1)},onPointerDownOutside:u=>{u.preventDefault(),m(h=>h+1)},children:e.jsx("p",{style:p,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const H={render:()=>e.jsx(st,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=t.getByTestId("dialog-guard-outside-target");await n(await t.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await i.click(a),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function it(){const[o,t]=c.useState(!1),[a,r]=c.useState("none"),[s,m]=c.useState("none");return e.jsx(w,{gap:12,children:e.jsxs("div",{style:Ye,children:[e.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:Me}),e.jsxs("p",{style:D,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-close-reason",style:B,children:a})]}),e.jsxs("p",{style:D,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"dialog-close-trace",style:B,children:s})]}),e.jsx(b,{onClick:()=>t(!0),children:"Open Telemetry Dialog"}),e.jsx(y,{open:o,onOpenChange:u=>{t(u),u||m(h=>`${h} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:u=>{r(u),m(`reason:${u}`)},children:e.jsx("p",{style:p,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const F={render:()=>e.jsx(it,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body),r=t.getByTestId("dialog-outside-target");await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(a.getByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await i.pointer({target:r,keys:"[MouseLeft]"}),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function rt(){const[o,t]=c.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Nested Overlay Dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:L,children:[e.jsx("p",{style:p,children:"Escape should close dropdown first, then dialog."}),e.jsx(Ue,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const A={render:()=>e.jsx(rt,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await a.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Dialog actions"})),await n(a.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(a.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function ct(){const[o,t]=c.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"IME composition dialog",children:e.jsx("p",{style:p,children:"Escape should be ignored while IME composition is active."})})}const P={render:()=>e.jsx(ct,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",isComposing:!0}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",keyCode:229}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function lt(){const[o,t]=c.useState(!0),[a,r]=c.useState(0);return c.useEffect(()=>{const s=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",s,!0),()=>{document.removeEventListener("keydown",s,!0)}},[]),e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:D,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-escape-calls",style:B,children:a})]}),e.jsx(y,{open:o,onOpenChange:t,title:"Preempted escape dialog",onEscapeKeyDown:()=>r(s=>s+1),children:e.jsx("p",{style:p,children:"Escape should remain preempted by global handlers."})})]})}const N={render:()=>e.jsx(lt,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",ctrlKey:!0}),l.keyDown(t,{key:"Escape",altKey:!0}),l.keyDown(t,{key:"Escape",metaKey:!0}),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};function dt(){const[o,t]=c.useState(!0),[a,r]=c.useState(0),[s,m]=c.useState("none");return e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:D,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-escape-calls",style:B,children:a})]}),e.jsxs("p",{style:D,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-close-reason",style:B,children:s})]}),e.jsx(y,{open:o,onOpenChange:t,title:"Repeat escape dialog",onEscapeKeyDown:()=>r(u=>u+1),onCloseReason:m,children:e.jsx("p",{style:p,children:"Repeated Escape keydown should not close this dialog."})})]})}const K={render:()=>e.jsx(dt,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",repeat:!0}),await n(a.getByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none"),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Repeat escape dialog"})).not.toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key")}};var Y,M,G;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(M=v.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var q,U,_;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,z,V;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(z=f.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var J,Q,W;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <NonTextTitleAutoNameFallbackDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Dialog"
    });
    await expect(dialog).toHaveAttribute("aria-label", "Dialog");
    await expect(dialog).not.toHaveAttribute("aria-labelledby");
  }
}`,...(W=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,ee;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <NumericDescriptionDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Numeric description dialog"
    });
    const descriptions = body.getAllByText("0");
    await expect(descriptions).toHaveLength(1);
    await expect(descriptions[0].tagName).toBe("P");
    await expect(dialog).toHaveAttribute("aria-describedby", descriptions[0].id);
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ie;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,ce,le;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ye,ue;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ue.source}}};var pe,ge,me;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <CloseButtonKeyboardPressedDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const ownerDocument = canvasElement.ownerDocument;
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
    const preemptActivationKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Space" || event.key === "Spacebar") {
        event.preventDefault();
      }
    };
    try {
      ownerDocument.addEventListener("keydown", preemptActivationKeys, true);
      fireEvent.keyDown(closeButton, {
        key: "Enter"
      });
      await waitFor(() => {
        expect(closeButton.style.transform).toContain("translateY(0");
      });
      fireEvent.keyDown(closeButton, {
        key: "Space"
      });
      await waitFor(() => {
        expect(closeButton.style.transform).toContain("translateY(0");
      });
    } finally {
      ownerDocument.removeEventListener("keydown", preemptActivationKeys, true);
    }
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
}`,...(me=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var we,be,De;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(De=(be=O.parameters)==null?void 0:be.docs)==null?void 0:De.source}}};var Be,he,ve;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ve=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var xe,fe,Ee;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ee=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};var ke,Te,Ce;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ce=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Re,Ie,je;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(je=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Oe,Se,He;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(He=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:He.source}}};var Fe,Ae,Pe;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Ne,Ke,Le;K.parameters={...K.parameters,docs:{...(Ne=K.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Le=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};const Tt=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonTextTitleAutoNameFallback","NumericDescriptionSemantics","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{j as CloseButtonKeyboardPressedState,F as CloseReasonTelemetry,H as DismissGuardHooks,P as EscapeIgnoresImeComposition,N as EscapePreemptedByGlobalHandler,K as EscapeRepeatGuard,R as FocusIntentPrimaryPointerOnly,I as FocusIntentReentry,T as FocusReturn,C as FocusTrapKeyboardCycle,f as IconTitleAriaLabelFallback,v as Interactive,x as LabelledByPrecedence,A as NestedDismissOrder,S as NonDismissable,E as NonTextTitleAutoNameFallback,k as NumericDescriptionSemantics,O as OpenByDefault,Tt as __namedExportsOrder,kt as default};
