import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as b}from"./Button-B21ouHNm.js";import{I as $e}from"./Input-D3V7c3Pn.js";import{T as ze}from"./Textarea-BnJNX4pg.js";import{D as y}from"./Dialog-Cbs75tsL.js";import{D as Ve}from"./Dropdown-6geyszt7.js";import{within as d,expect as n,fireEvent as c,waitFor as u,userEvent as i}from"./index-DgAF9SIF.js";import{S as w,s as B,a as D}from"./storyShowcase-DlKirntE.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-DU3WNas9.js";import"./index-DlVbWVVj.js";import"./focusTabbable-gnwmp6b7.js";const jt={title:"Overlay/Dialog",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},Je={display:"grid",gap:12},Y={display:"grid",gap:10},Qe={display:"flex",gap:8,justifyContent:"end"},qe={display:"grid",gap:12,justifyItems:"start"},p={margin:0},_e={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function We(){const[o,t]=l.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Draft Dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Create AI Draft",children:e.jsxs("div",{style:Y,children:[e.jsx($e,{placeholder:"Title","aria-label":"Title"}),e.jsx(ze,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(b,{children:"Save Draft"})]})})]})}function Xe(){const[o,t]=l.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Review Prompt Plan",children:e.jsx("p",{style:p,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const x={render:()=>e.jsx(We,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Draft Dialog"})),await n(await a.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Ze(){const[o,t]=l.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx("h3",{id:"dialog-heading",style:{margin:0},children:"Release checklist dialog heading"}),e.jsx(y,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist dialog",ariaLabelledBy:"dialog-heading",children:e.jsx("p",{style:p,children:"Dialog name should follow visible heading binding."})})]})}const v={render:()=>e.jsx(Ze,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Release checklist dialog heading"});await n(a).toHaveAttribute("aria-labelledby","dialog-heading"),await n(a).not.toHaveAttribute("aria-label")}};function et(){const[o,t]=l.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(y,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings dialog",children:e.jsx("p",{style:p,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const f={render:()=>e.jsx(et,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Automation settings dialog"});await n(a).toHaveAttribute("aria-label","Automation settings dialog"),await n(a).not.toHaveAttribute("aria-labelledby")}};function tt(){const[o,t]=l.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(y,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),children:e.jsx("p",{style:p,children:"Icon-only title now keeps fallback dialog naming."})})})}const k={render:()=>e.jsx(tt,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Dialog"});await n(a).toHaveAttribute("aria-label","Dialog"),await n(a).not.toHaveAttribute("aria-labelledby")}};function nt(){const[o,t]=l.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(y,{open:o,onOpenChange:t,title:"Numeric description dialog",description:0,children:e.jsx("p",{style:p,children:"Dialog description supports numeric ReactNode content."})})})}const E={render:()=>e.jsx(nt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Numeric description dialog"}),r=t.getAllByText("0");await n(r).toHaveLength(1),await n(r[0].tagName).toBe("P"),await n(a).toHaveAttribute("aria-describedby",r[0].id)}};function at(){const[o,t]=l.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Focus Return Dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Focus Return",children:e.jsx("p",{style:p,children:"Close this dialog and focus should return to the trigger button."})})]})}const C={render:()=>e.jsx(at,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body),r=t.getByRole("button",{name:"Open Focus Return Dialog"});await i.click(r),await n(await a.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(r).toHaveFocus()}};function ot(){const[o,t]=l.useState(!0);return e.jsxs(w,{gap:12,children:[e.jsx("button",{type:"button",children:"Outside before dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Focus trap dialog",children:e.jsxs("div",{style:Y,children:[e.jsx("p",{style:p,children:"Tab and Shift+Tab should cycle within the dialog."}),e.jsx(b,{children:"Primary dialog action"}),e.jsx(b,{variant:"outline",children:"Secondary dialog action"})]})}),e.jsx("button",{type:"button",children:"Outside after dialog"})]})}const T={render:()=>e.jsx(ot,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("button",{name:"Close dialog"}),r=t.getByRole("button",{name:"Primary dialog action"}),s=t.getByRole("button",{name:"Secondary dialog action"}),m=t.getByRole("button",{name:"Outside after dialog"});a.focus(),await n(a).toHaveFocus(),await i.tab(),await n(r).toHaveFocus(),await i.tab(),await n(s).toHaveFocus(),await i.tab(),await n(a).toHaveFocus(),await n(m).not.toHaveFocus(),await i.tab({shift:!0}),await n(s).toHaveFocus()}};function st(){const[o,t]=l.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Focus intent pointer policy",children:e.jsx("p",{style:p,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const R={render:()=>e.jsx(st,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await i.tab(),await n(a).toHaveFocus(),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)");const r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});a.dispatchEvent(r),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await n(a.style.transform).toContain("0"),await i.pointer([{target:a,keys:"[MouseLeft>]"}]),await u(()=>{n(a.style.transform).toContain("1px")}),await n(a.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}};function it(){const[o,t]=l.useState(!0);return e.jsx(w,{gap:12,children:e.jsxs(y,{open:o,onOpenChange:t,title:"Focus intent re-entry dialog",closeLabel:"Focus intent close dialog",children:[e.jsx("p",{style:p,children:"Click the in-dialog action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),e.jsx("button",{type:"button",children:"Dialog content action"})]})})}const I={render:()=>e.jsx(it,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("button",{name:"Dialog content action"}),r=await t.findByRole("button",{name:"Focus intent close dialog"});await i.click(a),await n(a).toHaveFocus(),await i.tab(),await n(r).toHaveFocus(),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),c.mouseDown(r,{button:0,ctrlKey:!0}),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function rt(){const[o,t]=l.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:e.jsx("p",{style:p,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})}const j={render:()=>e.jsx(rt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=o.ownerDocument,r=await t.findByRole("dialog",{name:"Keyboard pressed close affordance"});await n(r).toHaveAttribute("aria-keyshortcuts","Escape");const s=await t.findByRole("button",{name:"Close dialog"});await n(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),c.mouseDown(s,{button:0}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.pointerCancel(s),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.pointerDown(s,{pointerType:"touch",button:0}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.pointerUp(s,{pointerType:"touch",button:0}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),s.focus(),c.keyDown(s,{key:"Enter",ctrlKey:!0}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyUp(s,{key:"Enter",ctrlKey:!0});const m=g=>{(g.key==="Enter"||g.key===" "||g.key==="Space"||g.key==="Spacebar")&&g.preventDefault()};try{a.addEventListener("keydown",m,!0),c.keyDown(s,{key:"Enter"}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Space"}),await u(()=>{n(s.style.transform).toContain("translateY(0")})}finally{a.removeEventListener("keydown",m,!0)}c.keyDown(s,{key:"Enter"}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Enter"}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Spacebar"}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Spacebar"}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Space"}),await u(()=>{n(s.style.transform).toContain("translateY(1px)")}),c.keyUp(s,{key:"Space"}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await u(()=>{n(s.style.transform).toContain("translateY(0")}),c.keyDown(s,{key:"Enter",keyCode:229,which:229}),await u(()=>{n(s.style.transform).toContain("translateY(0")})}};function ct(){return e.jsx(y,{open:!0,onOpenChange:()=>{},title:"Locally preempted keyboard close dialog",description:"Local close-button key guards should suppress pressed feedback.",onCloseButtonKeyDown:o=>{(o.key==="Enter"||o.key===" "||o.key==="Space"||o.key==="Spacebar")&&o.preventDefault()},children:e.jsx("p",{style:p,children:"Local guards preempt managed close-button keyboard feedback."})})}const S={render:()=>e.jsx(ct,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});a.focus(),c.keyDown(a,{key:"Enter"}),await u(()=>{n(a.style.transform).toContain("translateY(0")}),c.keyUp(a,{key:"Enter"}),c.keyDown(a,{key:"Space"}),await u(()=>{n(a.style.transform).toContain("translateY(0")}),c.keyUp(a,{key:"Space"})}},O={render:()=>e.jsx(Xe,{})};function lt(){const[o,t]=l.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:Je,children:[e.jsx("p",{style:p,children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:Qe,children:[e.jsx(b,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(b,{onClick:()=>t(!1),children:"Confirm"})]})]})})}const H={render:()=>e.jsx(lt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Critical Confirmation"});await n(a).toBeInTheDocument(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await i.click(t.getByRole("button",{name:"Cancel"})),await n(t.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function dt(){const[o,t]=l.useState(!0),[a,r]=l.useState(0),[s,m]=l.useState(0);return e.jsx(w,{gap:12,children:e.jsxs("div",{style:qe,children:[e.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:_e}),e.jsxs("p",{style:B,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:D,children:a})]}),e.jsxs("p",{style:B,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:D,children:s})]}),e.jsx(y,{open:o,onOpenChange:t,title:"Guarded dismissal dialog",onEscapeKeyDown:g=>{g.preventDefault(),r(h=>h+1)},onPointerDownOutside:g=>{g.preventDefault(),m(h=>h+1)},children:e.jsx("p",{style:p,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const F={render:()=>e.jsx(dt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=t.getByTestId("dialog-guard-outside-target");await n(await t.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await i.click(a),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function yt(){const[o,t]=l.useState(!1),[a,r]=l.useState("none"),[s,m]=l.useState("none");return e.jsx(w,{gap:12,children:e.jsxs("div",{style:qe,children:[e.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:_e}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-close-reason",style:D,children:a})]}),e.jsxs("p",{style:B,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"dialog-close-trace",style:D,children:s})]}),e.jsx(b,{onClick:()=>t(!0),children:"Open Telemetry Dialog"}),e.jsx(y,{open:o,onOpenChange:g=>{t(g),g||m(h=>`${h} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:g=>{r(g),m(`reason:${g}`)},children:e.jsx("p",{style:p,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const A={render:()=>e.jsx(yt,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body),r=t.getByTestId("dialog-outside-target");await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Close dialog"})),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(a.getByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await i.pointer({target:r,keys:"[MouseLeft]"}),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function ut(){const[o,t]=l.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Nested Overlay Dialog"}),e.jsx(y,{open:o,onOpenChange:t,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:Y,children:[e.jsx("p",{style:p,children:"Escape should close dropdown first, then dialog."}),e.jsx(Ve,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const P={render:()=>e.jsx(ut,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await a.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Dialog actions"})),await n(a.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(a.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function pt(){const[o,t]=l.useState(!0);return e.jsx(y,{open:o,onOpenChange:t,title:"IME composition dialog",children:e.jsx("p",{style:p,children:"Escape should be ignored while IME composition is active."})})}const K={render:()=>e.jsx(pt,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",isComposing:!0}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",keyCode:229}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function gt(){const[o,t]=l.useState(!0),[a,r]=l.useState(0);return l.useEffect(()=>{const s=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",s,!0),()=>{document.removeEventListener("keydown",s,!0)}},[]),e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-escape-calls",style:D,children:a})]}),e.jsx(y,{open:o,onOpenChange:t,title:"Preempted escape dialog",onEscapeKeyDown:()=>r(s=>s+1),children:e.jsx("p",{style:p,children:"Escape should remain preempted by global handlers."})})]})}const L={render:()=>e.jsx(gt,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",ctrlKey:!0}),c.keyDown(t,{key:"Escape",altKey:!0}),c.keyDown(t,{key:"Escape",metaKey:!0}),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};function mt(){const[o,t]=l.useState(!0),[a,r]=l.useState(0),[s,m]=l.useState("none");return e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-escape-calls",style:D,children:a})]}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-close-reason",style:D,children:s})]}),e.jsx(y,{open:o,onOpenChange:t,title:"Repeat escape dialog",onEscapeKeyDown:()=>r(g=>g+1),onCloseReason:m,children:e.jsx("p",{style:p,children:"Repeated Escape keydown should not close this dialog."})})]})}const N={render:()=>e.jsx(mt,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),c.keyDown(t,{key:"Escape",repeat:!0}),await n(a.getByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none"),await i.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Repeat escape dialog"})).not.toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key")}};var M,G,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(G=x.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var q,_,$;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,V,J;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(V=f.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Q,W,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=k.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,te;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,re;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,le,de;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ye,ue,pe;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(pe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,me,we;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(me=j.parameters)==null?void 0:me.docs)==null?void 0:we.source}}};var be,Be,De;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <CloseButtonManagedKeysPreemptedByLocalHandlerDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close dialog"
    });
    closeButton.focus();
    fireEvent.keyDown(closeButton, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Enter"
    });
    fireEvent.keyDown(closeButton, {
      key: "Space"
    });
    await waitFor(() => {
      expect(closeButton.style.transform).toContain("translateY(0");
    });
    fireEvent.keyUp(closeButton, {
      key: "Space"
    });
  }
}`,...(De=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var he,xe,ve;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(ve=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,ke,Ee;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ce,Te,Re;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var Ie,je,Se;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Oe,He,Fe;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Fe=(He=P.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var Ae,Pe,Ke;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ke=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:Ke.source}}};var Le,Ne,Ye;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ye=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};var Me,Ge,Ue;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};const St=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonTextTitleAutoNameFallback","NumericDescriptionSemantics","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","OpenByDefault","NonDismissable","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{j as CloseButtonKeyboardPressedState,S as CloseButtonManagedKeysPreemptedByLocalHandler,A as CloseReasonTelemetry,F as DismissGuardHooks,K as EscapeIgnoresImeComposition,L as EscapePreemptedByGlobalHandler,N as EscapeRepeatGuard,R as FocusIntentPrimaryPointerOnly,I as FocusIntentReentry,C as FocusReturn,T as FocusTrapKeyboardCycle,f as IconTitleAriaLabelFallback,x as Interactive,v as LabelledByPrecedence,P as NestedDismissOrder,H as NonDismissable,k as NonTextTitleAutoNameFallback,E as NumericDescriptionSemantics,O as OpenByDefault,St as __namedExportsOrder,jt as default};
