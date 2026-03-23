import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as b}from"./Button-CYa37MZO.js";import{I as Qe}from"./Input-B9xcXif8.js";import{T as We}from"./Textarea-2AxIGrwS.js";import{D as u}from"./Dialog-Z81qOWIv.js";import{D as Xe}from"./Dropdown-CFoU9rmX.js";import{within as d,expect as n,fireEvent as l,waitFor as p,userEvent as r}from"./index-DgAF9SIF.js";import{S as w,s as B,a as D}from"./storyShowcase-DlKirntE.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-DU3WNas9.js";import"./index-DlVbWVVj.js";import"./focusTabbable-gnwmp6b7.js";const At={title:"Overlay/Dialog",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}},Ze={display:"grid",gap:12},M={display:"grid",gap:10},et={display:"flex",gap:8,justifyContent:"end"},q={display:"grid",gap:12,justifyItems:"start"},y={margin:0},G={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function tt(){const[o,t]=c.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Draft Dialog"}),e.jsx(u,{open:o,onOpenChange:t,title:"Create AI Draft",children:e.jsxs("div",{style:M,children:[e.jsx(Qe,{placeholder:"Title","aria-label":"Title"}),e.jsx(We,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(b,{children:"Save Draft"})]})})]})}function nt(){const[o,t]=c.useState(!0);return e.jsx(u,{open:o,onOpenChange:t,title:"Review Prompt Plan",children:e.jsx("p",{style:y,children:"Escape and outside pointer interactions should dismiss this dialog."})})}const x={render:()=>e.jsx(tt,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body);await r.click(t.getByRole("button",{name:"Open Draft Dialog"})),await n(await a.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function at(){const[o,t]=c.useState(!0);return e.jsxs(w,{align:"start",children:[e.jsx("h3",{id:"dialog-heading",style:{margin:0},children:"Release checklist dialog heading"}),e.jsx(u,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"✅"}),ariaLabel:"Fallback release checklist dialog",ariaLabelledBy:"dialog-heading",children:e.jsx("p",{style:y,children:"Dialog name should follow visible heading binding."})})]})}const v={render:()=>e.jsx(at,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Release checklist dialog heading"});await n(a).toHaveAttribute("aria-labelledby","dialog-heading"),await n(a).not.toHaveAttribute("aria-label")}};function ot(){const[o,t]=c.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(u,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),ariaLabel:"Automation settings dialog",children:e.jsx("p",{style:y,children:"Icon-only title should keep explicit ariaLabel naming."})})})}const f={render:()=>e.jsx(ot,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Automation settings dialog"});await n(a).toHaveAttribute("aria-label","Automation settings dialog"),await n(a).not.toHaveAttribute("aria-labelledby")}};function st(){const[o,t]=c.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(u,{open:o,onOpenChange:t,title:e.jsx("span",{"aria-hidden":!0,children:"⚙️"}),children:e.jsx("p",{style:y,children:"Icon-only title now keeps fallback dialog naming."})})})}const k={render:()=>e.jsx(st,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("dialog",{name:"Dialog"});await n(a).toHaveAttribute("aria-label","Dialog"),await n(a).not.toHaveAttribute("aria-labelledby")}};function it(){const[o,t]=c.useState(!0);return e.jsx(w,{align:"start",children:e.jsx(u,{open:o,onOpenChange:t,title:"Numeric description dialog",description:0,children:e.jsx("p",{style:y,children:"Dialog description supports numeric ReactNode content."})})})}const E={render:()=>e.jsx(it,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Numeric description dialog"}),i=t.getAllByText("0");await n(i).toHaveLength(1),await n(i[0].tagName).toBe("P"),await n(a).toHaveAttribute("aria-describedby",i[0].id)}};function rt(){const[o,t]=c.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Focus Return Dialog"}),e.jsx(u,{open:o,onOpenChange:t,title:"Focus Return",children:e.jsx("p",{style:y,children:"Close this dialog and focus should return to the trigger button."})})]})}const C={render:()=>e.jsx(rt,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body),i=t.getByRole("button",{name:"Open Focus Return Dialog"});await r.click(i),await n(await a.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await r.click(a.getByRole("button",{name:"Close dialog"})),await n(i).toHaveFocus()}};function ct(){const[o,t]=c.useState(!0);return e.jsxs(w,{gap:12,children:[e.jsx("button",{type:"button",children:"Outside before dialog"}),e.jsx(u,{open:o,onOpenChange:t,title:"Focus trap dialog",children:e.jsxs("div",{style:M,children:[e.jsx("p",{style:y,children:"Tab and Shift+Tab should cycle within the dialog."}),e.jsx(b,{children:"Primary dialog action"}),e.jsx(b,{variant:"outline",children:"Secondary dialog action"})]})}),e.jsx("button",{type:"button",children:"Outside after dialog"})]})}const T={render:()=>e.jsx(ct,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("button",{name:"Close dialog"}),i=t.getByRole("button",{name:"Primary dialog action"}),s=t.getByRole("button",{name:"Secondary dialog action"}),m=t.getByRole("button",{name:"Outside after dialog"});a.focus(),await n(a).toHaveFocus(),await r.tab(),await n(i).toHaveFocus(),await r.tab(),await n(s).toHaveFocus(),await r.tab(),await n(a).toHaveFocus(),await n(m).not.toHaveFocus(),await r.tab({shift:!0}),await n(s).toHaveFocus()}};function lt(){const[o,t]=c.useState(!0);return e.jsx(u,{open:o,onOpenChange:t,title:"Focus intent pointer policy",children:e.jsx("p",{style:y,children:"Non-primary mouse down should not clear close-button focus-visible feedback."})})}const R={render:()=>e.jsx(lt,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});await r.tab(),await n(a).toHaveFocus(),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)");const i=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:1});a.dispatchEvent(i),await n(a.getAttribute("style")).toContain("var(--aurora-focus-ring)"),await n(a.style.transform).toContain("0"),await r.pointer([{target:a,keys:"[MouseLeft>]"}]),await p(()=>{n(a.style.transform).toContain("1px")}),await n(a.getAttribute("style")).not.toContain("var(--aurora-focus-ring)")}};function dt(){const[o,t]=c.useState(!0);return e.jsx(w,{gap:12,children:e.jsxs(u,{open:o,onOpenChange:t,title:"Focus intent re-entry dialog",closeLabel:"Focus intent close dialog",children:[e.jsx("p",{style:y,children:"Click the in-dialog action first, then Tab to verify owner-document keyboard intent restores close-button focus ring."}),e.jsx("button",{type:"button",children:"Dialog content action"})]})})}const I={render:()=>e.jsx(dt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("button",{name:"Dialog content action"}),i=await t.findByRole("button",{name:"Focus intent close dialog"});await r.click(a),await n(a).toHaveFocus(),await r.tab(),await n(i).toHaveFocus(),await n(i.getAttribute("style")).toContain("var(--aurora-focus-ring)"),l.mouseDown(i,{button:0,ctrlKey:!0}),await n(i.getAttribute("style")).toContain("var(--aurora-focus-ring)")}};function ut(){const[o,t]=c.useState(!0);return e.jsx(u,{open:o,onOpenChange:t,title:"Keyboard pressed close affordance",description:"Close button should expose pressed feedback on unmodified Enter/Space only, and ignore IME composition keys.",children:e.jsx("p",{style:y,children:"Validate keyboard activation parity with pointer pressed-state feedback."})})}const j={render:()=>e.jsx(ut,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=o.ownerDocument,i=await t.findByRole("dialog",{name:"Keyboard pressed close affordance"});await n(i).toHaveAttribute("aria-keyshortcuts","Escape");const s=await t.findByRole("button",{name:"Close dialog"});await n(s).toHaveAttribute("aria-keyshortcuts","Enter Space"),l.mouseDown(s,{button:0}),await p(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.pointerCancel(s),await p(()=>{n(s.style.transform).toContain("translateY(0")}),l.pointerDown(s,{pointerType:"touch",button:0}),await p(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.pointerUp(s,{pointerType:"touch",button:0}),await p(()=>{n(s.style.transform).toContain("translateY(0")}),s.focus(),l.keyDown(s,{key:"Enter",ctrlKey:!0}),await p(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyUp(s,{key:"Enter",ctrlKey:!0});const m=g=>{(g.key==="Enter"||g.key===" "||g.key==="Space"||g.key==="Spacebar")&&g.preventDefault()};try{a.addEventListener("keydown",m,!0),l.keyDown(s,{key:"Enter"}),await p(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Space"}),await p(()=>{n(s.style.transform).toContain("translateY(0")})}finally{a.removeEventListener("keydown",m,!0)}l.keyDown(s,{key:"Enter"}),await p(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Enter"}),await p(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Spacebar"}),await p(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Spacebar"}),await p(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Space"}),await p(()=>{n(s.style.transform).toContain("translateY(1px)")}),l.keyUp(s,{key:"Space"}),await p(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await p(()=>{n(s.style.transform).toContain("translateY(0")}),l.keyDown(s,{key:"Enter",keyCode:229,which:229}),await p(()=>{n(s.style.transform).toContain("translateY(0")})}};function yt(){return e.jsx(u,{open:!0,onOpenChange:()=>{},title:"Locally preempted keyboard close dialog",description:"Local close-button key guards should suppress pressed feedback.",onCloseButtonKeyDown:o=>{(o.key==="Enter"||o.key===" "||o.key==="Space"||o.key==="Spacebar")&&o.preventDefault()},children:e.jsx("p",{style:y,children:"Local guards preempt managed close-button keyboard feedback."})})}const O={render:()=>e.jsx(yt,{}),play:async({canvasElement:o})=>{const a=await d(o.ownerDocument.body).findByRole("button",{name:"Close dialog"});a.focus(),l.keyDown(a,{key:"Enter"}),await p(()=>{n(a.style.transform).toContain("translateY(0")}),l.keyUp(a,{key:"Enter"}),l.keyDown(a,{key:"Space"}),await p(()=>{n(a.style.transform).toContain("translateY(0")}),l.keyUp(a,{key:"Space"})}},S={render:()=>e.jsx(nt,{})};function pt(){const[o,t]=c.useState(!0);return e.jsx(u,{open:o,onOpenChange:t,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:Ze,children:[e.jsx("p",{style:y,children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:et,children:[e.jsx(b,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(b,{onClick:()=>t(!1),children:"Confirm"})]})]})})}const H={render:()=>e.jsx(pt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=await t.findByRole("dialog",{name:"Critical Confirmation"});await n(a).toBeInTheDocument(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await r.click(t.getByRole("button",{name:"Cancel"})),await n(t.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function gt(){const[o,t]=c.useState(!1),[a,i]=c.useState("none");return e.jsx(w,{gap:12,children:e.jsxs("div",{style:q,children:[e.jsx("button",{type:"button","data-testid":"dialog-runtime-outside-target","aria-label":"Dialog runtime outside target",style:G}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-runtime-close-reason",style:D,children:a})]}),e.jsx(b,{onClick:()=>t(!0),children:"Open Runtime Config Dialog"}),e.jsx(u,{open:o,onOpenChange:t,title:"Runtime config dialog",restoreFocus:0,closeOnEscape:0,closeOnOutsidePointer:null,showCloseButton:0,onCloseReason:s=>i(s),children:e.jsx("p",{style:y,children:"Runtime boolean normalization keeps dismiss policy and close affordance stable."})})]})})}const F={render:()=>e.jsx(gt,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body),i=t.getByRole("button",{name:"Open Runtime Config Dialog"}),s=t.getByTestId("dialog-runtime-outside-target");await r.click(i);const m=await a.findByRole("dialog",{name:"Runtime config dialog"});await n(m).toHaveAttribute("aria-keyshortcuts","Escape"),await n(a.getByRole("button",{name:"Close dialog"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Runtime config dialog"})).not.toBeInTheDocument(),await n(i).toHaveFocus(),await n(t.getByTestId("dialog-runtime-close-reason")).toHaveTextContent("escape-key"),await r.click(i),await n(await a.findByRole("dialog",{name:"Runtime config dialog"})).toBeInTheDocument(),await r.pointer({target:s,keys:"[MouseLeft]"}),await n(a.queryByRole("dialog",{name:"Runtime config dialog"})).not.toBeInTheDocument(),await n(t.getByTestId("dialog-runtime-close-reason")).toHaveTextContent("outside-pointer")}};function mt(){const[o,t]=c.useState(!0),[a,i]=c.useState(0),[s,m]=c.useState(0);return e.jsx(w,{gap:12,children:e.jsxs("div",{style:q,children:[e.jsx("button",{type:"button","data-testid":"dialog-guard-outside-target","aria-label":"Dialog guard outside target",style:G}),e.jsxs("p",{style:B,children:["Escape guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-escape-calls",style:D,children:a})]}),e.jsxs("p",{style:B,children:["Outside guard calls:"," ",e.jsx("strong",{"data-testid":"dialog-guard-outside-calls",style:D,children:s})]}),e.jsx(u,{open:o,onOpenChange:t,title:"Guarded dismissal dialog",onEscapeKeyDown:g=>{g.preventDefault(),i(h=>h+1)},onPointerDownOutside:g=>{g.preventDefault(),m(h=>h+1)},children:e.jsx("p",{style:y,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const A={render:()=>e.jsx(mt,{}),play:async({canvasElement:o})=>{const t=d(o.ownerDocument.body),a=t.getByTestId("dialog-guard-outside-target");await n(await t.findByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-escape-calls")).toHaveTextContent("1"),await r.click(a),await n(t.getByRole("dialog",{name:"Guarded dismissal dialog"})).toBeInTheDocument(),await n(t.getByTestId("dialog-guard-outside-calls")).toHaveTextContent("1")}};function wt(){const[o,t]=c.useState(!1),[a,i]=c.useState("none"),[s,m]=c.useState("none");return e.jsx(w,{gap:12,children:e.jsxs("div",{style:q,children:[e.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:G}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-close-reason",style:D,children:a})]}),e.jsxs("p",{style:B,children:["Last close trace:"," ",e.jsx("strong",{"data-testid":"dialog-close-trace",style:D,children:s})]}),e.jsx(b,{onClick:()=>t(!0),children:"Open Telemetry Dialog"}),e.jsx(u,{open:o,onOpenChange:g=>{t(g),g||m(h=>`${h} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:g=>{i(g),m(`reason:${g}`)},children:e.jsx("p",{style:y,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const P={render:()=>e.jsx(wt,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body),i=t.getByTestId("dialog-outside-target");await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await r.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await r.click(a.getByRole("button",{name:"Close dialog"})),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await r.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(t.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await a.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),i.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(a.getByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await r.pointer({target:i,keys:"[MouseLeft]"}),await n(t.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(t.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function bt(){const[o,t]=c.useState(!1);return e.jsxs(w,{gap:12,children:[e.jsx(b,{onClick:()=>t(!0),children:"Open Nested Overlay Dialog"}),e.jsx(u,{open:o,onOpenChange:t,title:"Nested Overlay Dialog",children:e.jsxs("div",{style:M,children:[e.jsx("p",{style:y,children:"Escape should close dropdown first, then dialog."}),e.jsx(Xe,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const L={render:()=>e.jsx(bt,{}),play:async({canvasElement:o})=>{const t=d(o),a=d(o.ownerDocument.body);await r.click(t.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await a.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await r.click(a.getByRole("button",{name:"Dialog actions"})),await n(a.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(a.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(a.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function Bt(){const[o,t]=c.useState(!0);return e.jsx(u,{open:o,onOpenChange:t,title:"IME composition dialog",children:e.jsx("p",{style:y,children:"Escape should be ignored while IME composition is active."})})}const N={render:()=>e.jsx(Bt,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",isComposing:!0}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",keyCode:229}),await n(a.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function Dt(){const[o,t]=c.useState(!0),[a,i]=c.useState(0);return c.useEffect(()=>{const s=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",s,!0),()=>{document.removeEventListener("keydown",s,!0)}},[]),e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-escape-calls",style:D,children:a})]}),e.jsx(u,{open:o,onOpenChange:t,title:"Preempted escape dialog",onEscapeKeyDown:()=>i(s=>s+1),children:e.jsx("p",{style:y,children:"Escape should remain preempted by global handlers."})})]})}const K={render:()=>e.jsx(Dt,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",ctrlKey:!0}),l.keyDown(t,{key:"Escape",altKey:!0}),l.keyDown(t,{key:"Escape",metaKey:!0}),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0"),await r.keyboard("{Escape}"),await n(a.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};function ht(){const[o,t]=c.useState(!0),[a,i]=c.useState(0),[s,m]=c.useState("none");return e.jsxs(w,{gap:12,children:[e.jsxs("p",{style:B,children:["Escape hook calls:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-escape-calls",style:D,children:a})]}),e.jsxs("p",{style:B,children:["Last close reason:"," ",e.jsx("strong",{"data-testid":"dialog-repeat-close-reason",style:D,children:s})]}),e.jsx(u,{open:o,onOpenChange:t,title:"Repeat escape dialog",onEscapeKeyDown:()=>i(g=>g+1),onCloseReason:m,children:e.jsx("p",{style:y,children:"Repeated Escape keydown should not close this dialog."})})]})}const Y={render:()=>e.jsx(ht,{}),play:async({canvasElement:o})=>{const t=o.ownerDocument,a=d(t.body);await n(await a.findByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),l.keyDown(t,{key:"Escape",repeat:!0}),await n(a.getByRole("dialog",{name:"Repeat escape dialog"})).toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("0"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("none"),await r.keyboard("{Escape}"),await n(a.queryByRole("dialog",{name:"Repeat escape dialog"})).not.toBeInTheDocument(),await n(a.getByTestId("dialog-repeat-escape-calls")).toHaveTextContent("1"),await n(a.getByTestId("dialog-repeat-close-reason")).toHaveTextContent("escape-key")}};var U,z,_;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(_=(z=x.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var $,V,J;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(V=v.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Q,W,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,re;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,le,de;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=T.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,ye,pe;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};var ge,me,we;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(me=I.parameters)==null?void 0:me.docs)==null?void 0:we.source}}};var be,Be,De;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(De=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var he,xe,ve;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,ke,Ee;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(Ee=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ce,Te,Re;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var Ie,je,Oe;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const openButton = canvas.getByRole("button", {
      name: "Open Runtime Config Dialog"
    });
    const outsideTarget = canvas.getByTestId("dialog-runtime-outside-target");
    await userEvent.click(openButton);
    const dialog = await body.findByRole("dialog", {
      name: "Runtime config dialog"
    });
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(body.getByRole("button", {
      name: "Close dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Runtime config dialog"
    })).not.toBeInTheDocument();
    await expect(openButton).toHaveFocus();
    await expect(canvas.getByTestId("dialog-runtime-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(openButton);
    await expect(await body.findByRole("dialog", {
      name: "Runtime config dialog"
    })).toBeInTheDocument();
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(body.queryByRole("dialog", {
      name: "Runtime config dialog"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dialog-runtime-close-reason")).toHaveTextContent("outside-pointer");
  }
}`,...(Oe=(je=F.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var Se,He,Fe;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Fe=(He=A.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var Ae,Pe,Le;P.parameters={...P.parameters,docs:{...(Ae=P.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Ne,Ke,Ye;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ye=(Ke=L.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Me,qe,Ge;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ge=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};var Ue,ze,_e;K.parameters={...K.parameters,docs:{...(Ue=K.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(_e=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var $e,Ve,Je;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Je=(Ve=Y.parameters)==null?void 0:Ve.docs)==null?void 0:Je.source}}};const Pt=["Interactive","LabelledByPrecedence","IconTitleAriaLabelFallback","NonTextTitleAutoNameFallback","NumericDescriptionSemantics","FocusReturn","FocusTrapKeyboardCycle","FocusIntentPrimaryPointerOnly","FocusIntentReentry","CloseButtonKeyboardPressedState","CloseButtonManagedKeysPreemptedByLocalHandler","OpenByDefault","NonDismissable","RuntimeBooleanConfigNormalization","DismissGuardHooks","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{j as CloseButtonKeyboardPressedState,O as CloseButtonManagedKeysPreemptedByLocalHandler,P as CloseReasonTelemetry,A as DismissGuardHooks,N as EscapeIgnoresImeComposition,K as EscapePreemptedByGlobalHandler,Y as EscapeRepeatGuard,R as FocusIntentPrimaryPointerOnly,I as FocusIntentReentry,C as FocusReturn,T as FocusTrapKeyboardCycle,f as IconTitleAriaLabelFallback,x as Interactive,v as LabelledByPrecedence,L as NestedDismissOrder,H as NonDismissable,k as NonTextTitleAutoNameFallback,E as NumericDescriptionSemantics,S as OpenByDefault,F as RuntimeBooleanConfigNormalization,Pt as __namedExportsOrder,At as default};
