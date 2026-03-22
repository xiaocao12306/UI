import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as Ue}from"./Button-B21ouHNm.js";import{I as _e}from"./Input-DCFTlK0_.js";import{P as c}from"./Popover-D2imkB1S.js";import{within as p,expect as n,userEvent as s,fireEvent as y}from"./index-DgAF9SIF.js";import{s as Je,a as Xe,S as Ye}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./focusTabbable-gnwmp6b7.js";const g={...Je},v={...Xe};function l({children:a}){return t.jsx(Ye,{maxWidth:"min(100%, 620px)",gap:12,children:a})}const ht={title:"Overlay/Popover",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape/outside dismissal plus boundary Tab dismiss focus transfer. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}};function Ze(a){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),a.dispatchEvent(e)}const w={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Open Popover"});await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),await s.click(o);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await n(o).not.toHaveAttribute("aria-keyshortcuts"),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),o.focus(),await s.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}};function et(){const[a,e]=d.useState(0);return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["ArrowDown open calls:"," ",t.jsx("strong",{"data-testid":"popover-arrowdown-open-calls",style:v,children:a})]}),t.jsx(c,{triggerLabel:"ArrowDown Guard Popover",onOpenChange:o=>{o&&e(r=>r+1)},children:t.jsx("p",{style:{margin:0},children:"Only unmodified ArrowDown should open this popover."})})]})}const b={args:{triggerLabel:"ArrowDown Guard Popover",children:t.jsx("p",{style:{margin:0},children:"Only unmodified ArrowDown should open this popover."})},render:()=>t.jsx(et,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"ArrowDown Guard Popover"});await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),o.focus(),y.keyDown(o,{key:"ArrowDown",ctrlKey:!0}),y.keyDown(o,{key:"ArrowDown",altKey:!0}),y.keyDown(o,{key:"ArrowDown",metaKey:!0}),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("0"),await s.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("1")}},h={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(_e,{id:"name",defaultValue:"Aurora Team"}),t.jsx(Ue,{size:"sm",children:"Save"})]})}},T={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:t.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"More context actions"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},B={args:{triggerLabel:"⋯",triggerAriaLabel:"Fallback popover actions",triggerAriaLabelledBy:"popover-trigger-heading",children:t.jsx("p",{style:{margin:0},children:"Visible heading naming should win."})},render:a=>t.jsxs(l,{children:[t.jsx("h3",{id:"popover-trigger-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Popover heading actions"}),t.jsx(c,{...a})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Popover heading actions"});await n(o).toHaveAttribute("aria-labelledby","popover-trigger-heading"),await n(o).not.toHaveAttribute("aria-label"),await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},x={render:()=>t.jsxs(l,{children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("h3",{id:"popover-trigger-name-heading",style:{margin:0},children:"Context actions"}),t.jsx(c,{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),triggerAriaLabelledBy:"popover-trigger-name-heading",contentLabel:"Heading linked popover content",children:t.jsx("p",{style:{margin:0},children:"Heading-linked trigger naming path."})})]}),t.jsx(c,{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),triggerAriaLabel:"Quick actions",contentLabel:"Aria label popover content",children:t.jsx("p",{style:{margin:0},children:"Standalone trigger naming path."})})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Context actions"}),r=e.getByRole("button",{name:"Quick actions"});await n(o).toHaveAttribute("aria-labelledby","popover-trigger-name-heading"),await n(o).not.toHaveAttribute("aria-label"),await n(r).toHaveAttribute("aria-label","Quick actions"),await s.click(o),await n(e.getByRole("dialog",{name:"Heading linked popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await s.click(r),await n(e.getByRole("dialog",{name:"Aria label popover content"})).toBeInTheDocument()}},P={args:{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),children:t.jsx("p",{style:{margin:0},children:"Auto-named trigger fallback content."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Open popover"});await n(o).toHaveAttribute("aria-label","Open popover"),await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},k={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:t.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:a=>t.jsxs(l,{children:[t.jsx(c,{...a}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Review policy"});await s.click(o);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Tab"),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};function tt(){const[a,e]=d.useState(0),[o,r]=d.useState(0);return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-escape-calls",style:v,children:a})]}),t.jsxs("p",{style:g,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-outside-calls",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Guarded popover",onEscapeKeyDown:i=>{i.preventDefault(),e(u=>u+1)},onPointerDownOutside:i=>{i.preventDefault(),r(u=>u+1)},children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})}const D={args:{triggerLabel:"Guarded popover",children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})},render:()=>t.jsx(tt,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Guarded popover"}),r=e.getByRole("button",{name:"Guarded outside target"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1"),await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1")}};function nt(){return t.jsxs(l,{children:[t.jsx("p",{style:g,children:"Nested popovers should dismiss one layer at a time: first Escape closes inner, second Escape closes outer."}),t.jsx(c,{triggerLabel:"Outer popover",contentLabel:"Outer popover content",children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Outer layer content."}),t.jsx(c,{triggerLabel:"Inner popover",contentLabel:"Inner popover content",children:t.jsx("p",{style:{margin:0},children:"Inner layer content."})})]})})]})}const R={args:{triggerLabel:"Outer popover",contentLabel:"Outer popover content",children:t.jsx("p",{style:{margin:0},children:"Outer layer content."})},render:()=>t.jsx(nt,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Outer popover"});await s.click(o),await n(e.getByRole("dialog",{name:"Outer popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Inner popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Inner popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Inner popover content"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outer popover content"})).toBeInTheDocument(),await n(r).toHaveFocus(),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Outer popover content"})).not.toBeInTheDocument(),await n(o).toHaveFocus()}};function ot(){const[a,e]=d.useState("none"),o=r=>{e(i=>i==="none"?r:`${i} -> ${r}`)};return t.jsxs(l,{children:[t.jsx("p",{style:g,children:"Outside pointer should dismiss nested popovers one layer at a time."}),t.jsx(c,{triggerLabel:"Outer outside-order popover",contentLabel:"Outer outside-order popover content",onCloseReason:r=>o(`outer:reason:${r}`),onOpenChange:r=>{r||o("outer:open:false")},children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Outer layer content."}),t.jsx(c,{triggerLabel:"Inner outside-order popover",contentLabel:"Inner outside-order popover content",onCloseReason:r=>o(`inner:reason:${r}`),onOpenChange:r=>{r||o("inner:open:false")},children:t.jsx("p",{style:{margin:0},children:"Inner layer content."})})]})}),t.jsx("button",{type:"button",children:"Popover nested outside target"}),t.jsxs("p",{style:g,children:["Nested close trace:"," ",t.jsx("strong",{"data-testid":"popover-nested-outside-trace",style:v,children:a})]})]})}const E={args:{triggerLabel:"Outer outside-order popover",contentLabel:"Outer outside-order popover content",children:t.jsx("p",{style:{margin:0},children:"Outer layer content."})},render:()=>t.jsx(ot,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Outer outside-order popover"});await s.click(o),await n(e.getByRole("dialog",{name:"Outer outside-order popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Inner outside-order popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Inner outside-order popover content"})).toBeInTheDocument();const i=e.getByRole("button",{name:"Popover nested outside target"});await s.click(i),await n(e.queryByRole("dialog",{name:"Inner outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outer outside-order popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false"),await s.click(i),await n(e.queryByRole("dialog",{name:"Outer outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false -> outer:reason:outside-pointer -> outer:open:false")}},I={args:{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>t.jsxs(l,{children:[t.jsx(c,{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Focus Policy"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Popover Next Focus Target"});await s.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},f={args:{triggerLabel:"Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Tab Boundary Action"})},render:()=>t.jsxs(l,{children:[t.jsx(c,{triggerLabel:"Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Tab Boundary Action"})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Tab Flow Popover"}),r=e.getByRole("button",{name:"Popover Next Focus Target"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Boundary Action"})).toHaveFocus(),await s.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},j={args:{triggerLabel:"Shift+Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Shift+Tab Boundary Action"})},render:()=>t.jsxs(l,{children:[t.jsx("button",{type:"button",children:"Popover Previous Focus Target"}),t.jsx(c,{triggerLabel:"Shift+Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Shift+Tab Boundary Action"})})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Shift+Tab Flow Popover"}),r=e.getByRole("button",{name:"Popover Previous Focus Target"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Shift+Tab Boundary Action"})).toHaveFocus(),await s.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},H={render:()=>t.jsx(l,{children:t.jsx(c,{triggerLabel:"Popover Tab Fallback",children:t.jsx("button",{type:"button",children:"Popover Tab Fallback Action"})})}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Popover Tab Fallback"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Fallback Action"})).toHaveFocus(),await s.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(o).toHaveFocus(),await s.click(o),await n(e.getByRole("button",{name:"Popover Tab Fallback Action"})).toHaveFocus(),await s.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(o).toHaveFocus()}},C={render:()=>t.jsxs(l,{children:[t.jsx(c,{triggerLabel:"Popover Tab Skip",children:t.jsx("button",{type:"button",children:"Popover Tab Skip Action"})}),t.jsx("button",{type:"button",style:{display:"none"},children:"Popover Hidden Candidate"}),t.jsx("div",{inert:!0,children:t.jsx("button",{type:"button",children:"Popover Inert Candidate"})}),t.jsx("button",{type:"button",children:"Popover Visible Candidate"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Popover Tab Skip"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Skip Action"})).toHaveFocus(),await s.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Visible Candidate"})).toHaveFocus()}};function at(){const[a,e]=d.useState("none"),[o,r]=d.useState("none");return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-close-reason",style:v,children:a})]}),t.jsxs("p",{style:g,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"popover-close-trace",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Telemetry popover",onOpenChange:i=>{i||r(u=>`${u} -> open:false`)},onCloseReason:i=>{e(i),r(`reason:${i}`)},children:t.jsx("button",{type:"button",children:"Telemetry primary action"})}),t.jsx("button",{type:"button",children:"Outside target"})]})}const A={args:{triggerLabel:"Telemetry popover",children:t.jsx("button",{type:"button",children:"Telemetry primary action"})},render:()=>t.jsx(at,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Telemetry popover"}),r=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("popover-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("none"),await s.click(o),await s.keyboard("{Escape}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(o),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await s.click(r),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await s.click(o),await n(e.getByRole("button",{name:"Telemetry primary action"})).toHaveFocus(),await s.keyboard("{Tab}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("tab-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await n(r).toHaveFocus(),await s.click(o),await s.click(o),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false")}};function rt(){const[a,e]=d.useState(!1),[o,r]=d.useState(0);return d.useEffect(()=>{const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-escape-calls",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Preempted popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(i=>i+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const S={args:{triggerLabel:"Preempted popover",children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>t.jsx(rt,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Preempted popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),y.keyDown(o,{key:"Escape",ctrlKey:!0}),y.keyDown(o,{key:"Escape",altKey:!0}),y.keyDown(o,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};function st(){const[a,e]=d.useState(!1),[o,r]=d.useState(0),[i,u]=d.useState("none");return t.jsx("div",{onKeyDownCapture:m=>{(m.key==="ArrowDown"||m.key==="Tab")&&m.preventDefault()},children:t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Open calls:"," ",t.jsx("strong",{"data-testid":"popover-managed-open-calls",style:v,children:o})]}),t.jsxs("p",{style:g,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-managed-close-reason",style:v,children:i})]}),t.jsx(c,{triggerLabel:"Managed keys popover",open:a,onOpenChange:m=>{m&&r(We=>We+1),e(m)},onCloseReason:u,children:t.jsx("button",{type:"button",children:"Popover managed boundary action"})})]})})}const L={args:{triggerLabel:"Managed keys popover",children:t.jsx("button",{type:"button",children:"Popover managed boundary action"})},render:()=>t.jsx(st,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Managed keys popover"});o.focus(),y.keyDown(o,{key:"ArrowDown"}),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-managed-open-calls")).toHaveTextContent("0"),await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover managed boundary action"})).toHaveFocus(),await n(e.getByTestId("popover-managed-open-calls")).toHaveTextContent("1"),await s.keyboard("{Tab}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-managed-close-reason")).toHaveTextContent("none")}};function it(){const[a,e]=d.useState(!1),[o,r]=d.useState(0),[i,u]=d.useState("none");return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-repeat-escape-calls",style:v,children:o})]}),t.jsxs("p",{style:g,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-repeat-close-reason",style:v,children:i})]}),t.jsx(c,{triggerLabel:"Repeat Escape Popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(m=>m+1),onCloseReason:u,children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})})]})}const O={args:{triggerLabel:"Repeat Escape Popover",children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})},render:()=>t.jsx(it,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Repeat Escape Popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),y.keyDown(o,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key")}};function ct(){const[a,e]=d.useState(!0);return t.jsx(l,{children:t.jsx(c,{triggerLabel:"IME composition popover",open:a,onOpenChange:e,children:t.jsx("p",{style:{margin:0},children:"Escape during IME composition should not dismiss this popover."})})})}const F={args:{triggerLabel:"IME composition popover",children:t.jsx("p",{style:{margin:0},children:"Escape during IME composition should not dismiss this popover."})},render:()=>t.jsx(ct,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"IME composition popover"});await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),y.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),Ze(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var q,N,G;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      margin: 0
    }}>Popover content for quick context editing.</p>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Open Popover"
    });
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    await userEvent.click(trigger);
    const dialog = canvas.getByRole("dialog", {
      name: "Popover content"
    });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Tab Escape");
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(G=(N=w.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var M,K,z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    triggerLabel: "ArrowDown Guard Popover",
    children: <p style={{
      margin: 0
    }}>Only unmodified ArrowDown should open this popover.</p>
  },
  render: () => <TriggerArrowDownModifierGuardPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "ArrowDown Guard Popover"
    });
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    trigger.focus();
    fireEvent.keyDown(trigger, {
      key: "ArrowDown",
      ctrlKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "ArrowDown",
      altKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "ArrowDown",
      metaKey: true
    });
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    await expect(canvas.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("1");
  }
}`,...(z=(K=b.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var V,Q,$;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Edit Name",
    children: <div style={{
      width: 280,
      display: "grid",
      gap: 8
    }}>
        <label htmlFor="name" style={{
        fontSize: "var(--aurora-font-size-sm)",
        fontWeight: 600
      }}>
          Display name
        </label>
        <Input id="name" defaultValue="Aurora Team" />
        <Button size="sm">Save</Button>
      </div>
  }
}`,...($=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var W,U,_;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    triggerLabel: "⋯",
    triggerAriaLabel: "More context actions",
    children: <p style={{
      margin: 0
    }}>Quick context actions from icon trigger.</p>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "More context actions"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
  }
}`,...(_=(U=T.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var J,X,Y;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    triggerLabel: "⋯",
    triggerAriaLabel: "Fallback popover actions",
    triggerAriaLabelledBy: "popover-trigger-heading",
    children: <p style={{
      margin: 0
    }}>Visible heading naming should win.</p>
  },
  render: args => <PopoverShowcase>
      <h3 id="popover-trigger-heading" style={{
      margin: 0,
      fontSize: "var(--aurora-font-size-sm)"
    }}>
        Popover heading actions
      </h3>
      <Popover {...args} />
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Popover heading actions"
    });
    await expect(trigger).toHaveAttribute("aria-labelledby", "popover-trigger-heading");
    await expect(trigger).not.toHaveAttribute("aria-label");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
  }
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <PopoverShowcase>
      <div style={{
      display: "grid",
      gap: 8
    }}>
        <h3 id="popover-trigger-name-heading" style={{
        margin: 0
      }}>
          Context actions
        </h3>
        <Popover triggerLabel={<span aria-hidden="true">⋯</span>} triggerAriaLabelledBy="popover-trigger-name-heading" contentLabel="Heading linked popover content">
          <p style={{
          margin: 0
        }}>Heading-linked trigger naming path.</p>
        </Popover>
      </div>
      <Popover triggerLabel={<span aria-hidden="true">⋯</span>} triggerAriaLabel="Quick actions" contentLabel="Aria label popover content">
        <p style={{
        margin: 0
      }}>Standalone trigger naming path.</p>
      </Popover>
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const headingTrigger = await canvas.findByRole("button", {
      name: "Context actions"
    });
    const ariaLabelTrigger = canvas.getByRole("button", {
      name: "Quick actions"
    });
    await expect(headingTrigger).toHaveAttribute("aria-labelledby", "popover-trigger-name-heading");
    await expect(headingTrigger).not.toHaveAttribute("aria-label");
    await expect(ariaLabelTrigger).toHaveAttribute("aria-label", "Quick actions");
    await userEvent.click(headingTrigger);
    await expect(canvas.getByRole("dialog", {
      name: "Heading linked popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await userEvent.click(ariaLabelTrigger);
    await expect(canvas.getByRole("dialog", {
      name: "Aria label popover content"
    })).toBeInTheDocument();
  }
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    triggerLabel: <span aria-hidden="true">⋯</span>,
    children: <p style={{
      margin: 0
    }}>Auto-named trigger fallback content.</p>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Open popover"
    });
    await expect(trigger).toHaveAttribute("aria-label", "Open popover");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
  }
}`,...(ae=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,se,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Review policy",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    children: <p style={{
      margin: 0
    }}>This popover must be closed via trigger toggle.</p>
  },
  render: args => <PopoverShowcase>
      <Popover {...args} />
      <button type="button">Outside target</button>
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Review policy"
    });
    await userEvent.click(trigger);
    const dialog = canvas.getByRole("dialog", {
      name: "Popover content"
    });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Tab");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside target"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
  }
}`,...(ie=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,pe,le;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Guarded popover",
    children: <p style={{
      margin: 0
    }}>Dismiss hooks can block Escape/outside close paths.</p>
  },
  render: () => <DismissGuardPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Guarded popover"
    });
    const outsideTarget = canvas.getByRole("button", {
      name: "Guarded outside target"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1");
    await userEvent.click(outsideTarget);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1");
  }
}`,...(le=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var de,ge,ue;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Outer popover",
    contentLabel: "Outer popover content",
    children: <p style={{
      margin: 0
    }}>Outer layer content.</p>
  },
  render: () => <NestedDismissOrderPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const outerTrigger = await canvas.findByRole("button", {
      name: "Outer popover"
    });
    await userEvent.click(outerTrigger);
    await expect(canvas.getByRole("dialog", {
      name: "Outer popover content"
    })).toBeInTheDocument();
    const innerTrigger = canvas.getByRole("button", {
      name: "Inner popover"
    });
    await userEvent.click(innerTrigger);
    await expect(canvas.getByRole("dialog", {
      name: "Inner popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Inner popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Outer popover content"
    })).toBeInTheDocument();
    await expect(innerTrigger).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Outer popover content"
    })).not.toBeInTheDocument();
    await expect(outerTrigger).toHaveFocus();
  }
}`,...(ue=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var ve,ye,me;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Outer outside-order popover",
    contentLabel: "Outer outside-order popover content",
    children: <p style={{
      margin: 0
    }}>Outer layer content.</p>
  },
  render: () => <NestedOutsideDismissOrderPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const outerTrigger = await canvas.findByRole("button", {
      name: "Outer outside-order popover"
    });
    await userEvent.click(outerTrigger);
    await expect(canvas.getByRole("dialog", {
      name: "Outer outside-order popover content"
    })).toBeInTheDocument();
    const innerTrigger = canvas.getByRole("button", {
      name: "Inner outside-order popover"
    });
    await userEvent.click(innerTrigger);
    await expect(canvas.getByRole("dialog", {
      name: "Inner outside-order popover content"
    })).toBeInTheDocument();
    const outsideTarget = canvas.getByRole("button", {
      name: "Popover nested outside target"
    });
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("dialog", {
      name: "Inner outside-order popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Outer outside-order popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false");
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("dialog", {
      name: "Outer outside-order popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false -> outer:reason:outside-pointer -> outer:open:false");
  }
}`,...(me=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var we,be,he;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Focus Policy",
    children: <p style={{
      margin: 0
    }}>Dismiss me by clicking outside.</p>
  },
  render: () => <PopoverShowcase>
      <Popover triggerLabel="Focus Policy">
        <p style={{
        margin: 0
      }}>Dismiss me by clicking outside.</p>
      </Popover>
      <button type="button">Popover Next Focus Target</button>
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Focus Policy"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    const outsideTarget = canvas.getByRole("button", {
      name: "Popover Next Focus Target"
    });
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(outsideTarget).toHaveFocus();
  }
}`,...(he=(be=I.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Te,Be,xe;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Tab Flow Popover",
    children: <button type="button">Popover Tab Boundary Action</button>
  },
  render: () => <PopoverShowcase>
      <Popover triggerLabel="Tab Flow Popover">
        <button type="button">Popover Tab Boundary Action</button>
      </Popover>
      <button type="button">Popover Next Focus Target</button>
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Tab Flow Popover"
    });
    const nextTarget = canvas.getByRole("button", {
      name: "Popover Next Focus Target"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Popover Tab Boundary Action"
    })).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(nextTarget).toHaveFocus();
  }
}`,...(xe=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var Pe,ke,De;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Shift+Tab Flow Popover",
    children: <button type="button">Popover Shift+Tab Boundary Action</button>
  },
  render: () => <PopoverShowcase>
      <button type="button">Popover Previous Focus Target</button>
      <Popover triggerLabel="Shift+Tab Flow Popover">
        <button type="button">Popover Shift+Tab Boundary Action</button>
      </Popover>
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Shift+Tab Flow Popover"
    });
    const previousTarget = canvas.getByRole("button", {
      name: "Popover Previous Focus Target"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Popover Shift+Tab Boundary Action"
    })).toHaveFocus();
    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(previousTarget).toHaveFocus();
  }
}`,...(De=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Re,Ee,Ie;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <PopoverShowcase>
      <Popover triggerLabel="Popover Tab Fallback">
        <button type="button">Popover Tab Fallback Action</button>
      </Popover>
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Popover Tab Fallback"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Popover Tab Fallback Action"
    })).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
    await userEvent.click(trigger);
    await expect(canvas.getByRole("button", {
      name: "Popover Tab Fallback Action"
    })).toHaveFocus();
    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
  }
}`,...(Ie=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var fe,je,He;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <PopoverShowcase>
      <Popover triggerLabel="Popover Tab Skip">
        <button type="button">Popover Tab Skip Action</button>
      </Popover>
      <button type="button" style={{
      display: "none"
    }}>
        Popover Hidden Candidate
      </button>
      <div inert={true}>
        <button type="button">Popover Inert Candidate</button>
      </div>
      <button type="button">Popover Visible Candidate</button>
    </PopoverShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Popover Tab Skip"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Popover Tab Skip Action"
    })).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Popover Visible Candidate"
    })).toHaveFocus();
  }
}`,...(He=(je=C.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Ce,Ae,Se;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Telemetry popover",
    children: <button type="button">Telemetry primary action</button>
  },
  render: () => <CloseReasonTelemetryPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Telemetry popover"
    });
    const outsideTarget = canvas.getByRole("button", {
      name: "Outside target"
    });
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("none");
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    await userEvent.click(trigger);
    outsideTarget.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      button: 0,
      ctrlKey: true,
      pointerType: "mouse"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(outsideTarget);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("button", {
      name: "Telemetry primary action"
    })).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("tab-key");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:tab-key -> open:false");
    await expect(outsideTarget).toHaveFocus();
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false");
  }
}`,...(Se=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var Le,Oe,Fe;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Preempted popover",
    children: <p style={{
      margin: 0
    }}>Escape should remain preempted by global handlers.</p>
  },
  render: () => <EscapePreemptedPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", {
      name: "Preempted popover"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
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
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");
  }
}`,...(Fe=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var qe,Ne,Ge;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Managed keys popover",
    children: <button type="button">Popover managed boundary action</button>
  },
  render: () => <ManagedKeysPreemptedPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Managed keys popover"
    });
    trigger.focus();
    fireEvent.keyDown(trigger, {
      key: "ArrowDown"
    });
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-managed-open-calls")).toHaveTextContent("0");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Popover managed boundary action"
    })).toHaveFocus();
    await expect(canvas.getByTestId("popover-managed-open-calls")).toHaveTextContent("1");
    await userEvent.keyboard("{Tab}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-managed-close-reason")).toHaveTextContent("none");
  }
}`,...(Ge=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Ge.source}}};var Me,Ke,ze;O.parameters={...O.parameters,docs:{...(Me=O.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Repeat Escape Popover",
    children: <p style={{
      margin: 0
    }}>Repeated Escape keydown should not close this popover.</p>
  },
  render: () => <EscapeRepeatPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", {
      name: "Repeat Escape Popover"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      repeat: true
    });
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0");
    await expect(canvas.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1");
    await expect(canvas.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key");
  }
}`,...(ze=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var Ve,Qe,$e;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    triggerLabel: "IME composition popover",
    children: <p style={{
      margin: 0
    }}>Escape during IME composition should not dismiss this popover.</p>
  },
  render: () => <EscapeImeCompositionPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", {
      name: "IME composition popover"
    });
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    dispatchLegacyImeEscape(ownerDocument);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.click(trigger);
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
  }
}`,...($e=(Qe=F.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source}}};const Tt=["Default","TriggerArrowDownModifierGuard","WithInteractiveContent","IconTrigger","TriggerLabelledByPrecedence","NonTextTriggerNameFallback","NonTextTriggerAutoNameFallback","NonDismissible","DismissGuardHooks","NestedDismissOrder","NestedOutsideDismissOrder","OutsideDismissFocusTransfer","TabDismissToNextControl","ShiftTabDismissToPreviousControl","TabDismissFallbackToTrigger","TabDismissSkipsUnfocusableCandidates","CloseReasonTelemetry","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","EscapeRepeatGuard","EscapeIgnoresImeComposition"];export{A as CloseReasonTelemetry,w as Default,D as DismissGuardHooks,F as EscapeIgnoresImeComposition,S as EscapePreemptedByGlobalHandler,O as EscapeRepeatGuard,T as IconTrigger,L as ManagedKeysPreemptedByGlobalHandler,R as NestedDismissOrder,E as NestedOutsideDismissOrder,k as NonDismissible,P as NonTextTriggerAutoNameFallback,x as NonTextTriggerNameFallback,I as OutsideDismissFocusTransfer,j as ShiftTabDismissToPreviousControl,H as TabDismissFallbackToTrigger,C as TabDismissSkipsUnfocusableCandidates,f as TabDismissToNextControl,b as TriggerArrowDownModifierGuard,B as TriggerLabelledByPrecedence,h as WithInteractiveContent,Tt as __namedExportsOrder,ht as default};
