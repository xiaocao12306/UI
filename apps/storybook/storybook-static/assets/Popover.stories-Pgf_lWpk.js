import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as qe}from"./Button-DirECuRH.js";import{I as Ge}from"./Input-CMwa0OIu.js";import{P as c}from"./Popover-ZMDQgMom.js";import{within as p,expect as n,userEvent as s,fireEvent as y}from"./index-DgAF9SIF.js";import{s as Ke,a as Me,S as ze}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./DismissableLayer-0MVldSzJ.js";const g={...Ke},v={...Me};function l({children:a}){return t.jsx(ze,{maxWidth:"min(100%, 620px)",gap:12,children:a})}const pt={title:"Overlay/Popover",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape/outside dismissal plus boundary Tab dismiss focus transfer. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}};function Ve(a){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),a.dispatchEvent(e)}const m={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Open Popover"});await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),await s.click(o);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await n(o).not.toHaveAttribute("aria-keyshortcuts"),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),o.focus(),await s.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}};function Qe(){const[a,e]=d.useState(0);return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["ArrowDown open calls:"," ",t.jsx("strong",{"data-testid":"popover-arrowdown-open-calls",style:v,children:a})]}),t.jsx(c,{triggerLabel:"ArrowDown Guard Popover",onOpenChange:o=>{o&&e(r=>r+1)},children:t.jsx("p",{style:{margin:0},children:"Only unmodified ArrowDown should open this popover."})})]})}const w={args:{triggerLabel:"ArrowDown Guard Popover",children:t.jsx("p",{style:{margin:0},children:"Only unmodified ArrowDown should open this popover."})},render:()=>t.jsx(Qe,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"ArrowDown Guard Popover"});await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),o.focus(),y.keyDown(o,{key:"ArrowDown",ctrlKey:!0}),y.keyDown(o,{key:"ArrowDown",altKey:!0}),y.keyDown(o,{key:"ArrowDown",metaKey:!0}),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("0"),await s.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("1")}},b={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(Ge,{id:"name",defaultValue:"Aurora Team"}),t.jsx(qe,{size:"sm",children:"Save"})]})}},h={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:t.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"More context actions"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},T={args:{triggerLabel:"⋯",triggerAriaLabel:"Fallback popover actions",triggerAriaLabelledBy:"popover-trigger-heading",children:t.jsx("p",{style:{margin:0},children:"Visible heading naming should win."})},render:a=>t.jsxs(l,{children:[t.jsx("h3",{id:"popover-trigger-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Popover heading actions"}),t.jsx(c,{...a})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Popover heading actions"});await n(o).toHaveAttribute("aria-labelledby","popover-trigger-heading"),await n(o).not.toHaveAttribute("aria-label"),await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},B={render:()=>t.jsxs(l,{children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("h3",{id:"popover-trigger-name-heading",style:{margin:0},children:"Context actions"}),t.jsx(c,{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),triggerAriaLabelledBy:"popover-trigger-name-heading",contentLabel:"Heading linked popover content",children:t.jsx("p",{style:{margin:0},children:"Heading-linked trigger naming path."})})]}),t.jsx(c,{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),triggerAriaLabel:"Quick actions",contentLabel:"Aria label popover content",children:t.jsx("p",{style:{margin:0},children:"Standalone trigger naming path."})})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Context actions"}),r=e.getByRole("button",{name:"Quick actions"});await n(o).toHaveAttribute("aria-labelledby","popover-trigger-name-heading"),await n(o).not.toHaveAttribute("aria-label"),await n(r).toHaveAttribute("aria-label","Quick actions"),await s.click(o),await n(e.getByRole("dialog",{name:"Heading linked popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await s.click(r),await n(e.getByRole("dialog",{name:"Aria label popover content"})).toBeInTheDocument()}},x={args:{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),children:t.jsx("p",{style:{margin:0},children:"Auto-named trigger fallback content."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Open popover"});await n(o).toHaveAttribute("aria-label","Open popover"),await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},P={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:t.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:a=>t.jsxs(l,{children:[t.jsx(c,{...a}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Review policy"});await s.click(o);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Tab"),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};function $e(){const[a,e]=d.useState(0),[o,r]=d.useState(0);return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-escape-calls",style:v,children:a})]}),t.jsxs("p",{style:g,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-outside-calls",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Guarded popover",onEscapeKeyDown:i=>{i.preventDefault(),e(u=>u+1)},onPointerDownOutside:i=>{i.preventDefault(),r(u=>u+1)},children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})}const k={args:{triggerLabel:"Guarded popover",children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})},render:()=>t.jsx($e,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Guarded popover"}),r=e.getByRole("button",{name:"Guarded outside target"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1"),await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1")}};function We(){return t.jsxs(l,{children:[t.jsx("p",{style:g,children:"Nested popovers should dismiss one layer at a time: first Escape closes inner, second Escape closes outer."}),t.jsx(c,{triggerLabel:"Outer popover",contentLabel:"Outer popover content",children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Outer layer content."}),t.jsx(c,{triggerLabel:"Inner popover",contentLabel:"Inner popover content",children:t.jsx("p",{style:{margin:0},children:"Inner layer content."})})]})})]})}const D={args:{triggerLabel:"Outer popover",contentLabel:"Outer popover content",children:t.jsx("p",{style:{margin:0},children:"Outer layer content."})},render:()=>t.jsx(We,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Outer popover"});await s.click(o),await n(e.getByRole("dialog",{name:"Outer popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Inner popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Inner popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Inner popover content"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outer popover content"})).toBeInTheDocument(),await n(r).toHaveFocus(),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Outer popover content"})).not.toBeInTheDocument(),await n(o).toHaveFocus()}};function Ue(){const[a,e]=d.useState("none"),o=r=>{e(i=>i==="none"?r:`${i} -> ${r}`)};return t.jsxs(l,{children:[t.jsx("p",{style:g,children:"Outside pointer should dismiss nested popovers one layer at a time."}),t.jsx(c,{triggerLabel:"Outer outside-order popover",contentLabel:"Outer outside-order popover content",onCloseReason:r=>o(`outer:reason:${r}`),onOpenChange:r=>{r||o("outer:open:false")},children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Outer layer content."}),t.jsx(c,{triggerLabel:"Inner outside-order popover",contentLabel:"Inner outside-order popover content",onCloseReason:r=>o(`inner:reason:${r}`),onOpenChange:r=>{r||o("inner:open:false")},children:t.jsx("p",{style:{margin:0},children:"Inner layer content."})})]})}),t.jsx("button",{type:"button",children:"Popover nested outside target"}),t.jsxs("p",{style:g,children:["Nested close trace:"," ",t.jsx("strong",{"data-testid":"popover-nested-outside-trace",style:v,children:a})]})]})}const E={args:{triggerLabel:"Outer outside-order popover",contentLabel:"Outer outside-order popover content",children:t.jsx("p",{style:{margin:0},children:"Outer layer content."})},render:()=>t.jsx(Ue,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Outer outside-order popover"});await s.click(o),await n(e.getByRole("dialog",{name:"Outer outside-order popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Inner outside-order popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Inner outside-order popover content"})).toBeInTheDocument();const i=e.getByRole("button",{name:"Popover nested outside target"});await s.click(i),await n(e.queryByRole("dialog",{name:"Inner outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outer outside-order popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false"),await s.click(i),await n(e.queryByRole("dialog",{name:"Outer outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false -> outer:reason:outside-pointer -> outer:open:false")}},R={args:{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>t.jsxs(l,{children:[t.jsx(c,{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Focus Policy"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Popover Next Focus Target"});await s.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},I={args:{triggerLabel:"Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Tab Boundary Action"})},render:()=>t.jsxs(l,{children:[t.jsx(c,{triggerLabel:"Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Tab Boundary Action"})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Tab Flow Popover"}),r=e.getByRole("button",{name:"Popover Next Focus Target"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Boundary Action"})).toHaveFocus(),await s.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},f={args:{triggerLabel:"Shift+Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Shift+Tab Boundary Action"})},render:()=>t.jsxs(l,{children:[t.jsx("button",{type:"button",children:"Popover Previous Focus Target"}),t.jsx(c,{triggerLabel:"Shift+Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Shift+Tab Boundary Action"})})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Shift+Tab Flow Popover"}),r=e.getByRole("button",{name:"Popover Previous Focus Target"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Shift+Tab Boundary Action"})).toHaveFocus(),await s.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},j={render:()=>t.jsxs(l,{children:[t.jsx(c,{triggerLabel:"Popover Tab Skip",children:t.jsx("button",{type:"button",children:"Popover Tab Skip Action"})}),t.jsx("button",{type:"button",style:{display:"none"},children:"Popover Hidden Candidate"}),t.jsx("div",{inert:!0,children:t.jsx("button",{type:"button",children:"Popover Inert Candidate"})}),t.jsx("button",{type:"button",children:"Popover Visible Candidate"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Popover Tab Skip"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Skip Action"})).toHaveFocus(),await s.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Visible Candidate"})).toHaveFocus()}};function _e(){const[a,e]=d.useState("none"),[o,r]=d.useState("none");return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-close-reason",style:v,children:a})]}),t.jsxs("p",{style:g,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"popover-close-trace",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Telemetry popover",onOpenChange:i=>{i||r(u=>`${u} -> open:false`)},onCloseReason:i=>{e(i),r(`reason:${i}`)},children:t.jsx("button",{type:"button",children:"Telemetry primary action"})}),t.jsx("button",{type:"button",children:"Outside target"})]})}const H={args:{triggerLabel:"Telemetry popover",children:t.jsx("button",{type:"button",children:"Telemetry primary action"})},render:()=>t.jsx(_e,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Telemetry popover"}),r=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("popover-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("none"),await s.click(o),await s.keyboard("{Escape}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(o),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await s.click(r),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await s.click(o),await n(e.getByRole("button",{name:"Telemetry primary action"})).toHaveFocus(),await s.keyboard("{Tab}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("tab-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await n(r).toHaveFocus(),await s.click(o),await s.click(o),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false")}};function Je(){const[a,e]=d.useState(!1),[o,r]=d.useState(0);return d.useEffect(()=>{const i=u=>{u.key==="Escape"&&u.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-escape-calls",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Preempted popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(i=>i+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const C={args:{triggerLabel:"Preempted popover",children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>t.jsx(Je,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Preempted popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),y.keyDown(o,{key:"Escape",ctrlKey:!0}),y.keyDown(o,{key:"Escape",altKey:!0}),y.keyDown(o,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};function Xe(){const[a,e]=d.useState(!1),[o,r]=d.useState(0),[i,u]=d.useState("none");return t.jsxs(l,{children:[t.jsxs("p",{style:g,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-repeat-escape-calls",style:v,children:o})]}),t.jsxs("p",{style:g,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-repeat-close-reason",style:v,children:i})]}),t.jsx(c,{triggerLabel:"Repeat Escape Popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(Ne=>Ne+1),onCloseReason:u,children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})})]})}const A={args:{triggerLabel:"Repeat Escape Popover",children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})},render:()=>t.jsx(Xe,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Repeat Escape Popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),y.keyDown(o,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key")}};function Ye(){const[a,e]=d.useState(!0);return t.jsx(l,{children:t.jsx(c,{triggerLabel:"IME composition popover",open:a,onOpenChange:e,children:t.jsx("p",{style:{margin:0},children:"Escape during IME composition should not dismiss this popover."})})})}const L={args:{triggerLabel:"IME composition popover",children:t.jsx("p",{style:{margin:0},children:"Escape during IME composition should not dismiss this popover."})},render:()=>t.jsx(Ye,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"IME composition popover"});await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),y.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),Ve(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var O,S,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(S=m.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var N,q,G;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(q=w.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,M,z;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(z=(M=b.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var V,Q,$;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var W,U,_;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(U=T.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var J,X,Y;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,se,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,pe,le;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var de,ge,ue;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var ve,ye,me;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(me=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var we,be,he;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(he=(be=I.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Te,Be,xe;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(xe=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var Pe,ke,De;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(De=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ee,Re,Ie;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var fe,je,He;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(He=(je=C.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Ce,Ae,Le;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Le=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var Oe,Se,Fe;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};const lt=["Default","TriggerArrowDownModifierGuard","WithInteractiveContent","IconTrigger","TriggerLabelledByPrecedence","NonTextTriggerNameFallback","NonTextTriggerAutoNameFallback","NonDismissible","DismissGuardHooks","NestedDismissOrder","NestedOutsideDismissOrder","OutsideDismissFocusTransfer","TabDismissToNextControl","ShiftTabDismissToPreviousControl","TabDismissSkipsUnfocusableCandidates","CloseReasonTelemetry","EscapePreemptedByGlobalHandler","EscapeRepeatGuard","EscapeIgnoresImeComposition"];export{H as CloseReasonTelemetry,m as Default,k as DismissGuardHooks,L as EscapeIgnoresImeComposition,C as EscapePreemptedByGlobalHandler,A as EscapeRepeatGuard,h as IconTrigger,D as NestedDismissOrder,E as NestedOutsideDismissOrder,P as NonDismissible,x as NonTextTriggerAutoNameFallback,B as NonTextTriggerNameFallback,R as OutsideDismissFocusTransfer,f as ShiftTabDismissToPreviousControl,j as TabDismissSkipsUnfocusableCandidates,I as TabDismissToNextControl,w as TriggerArrowDownModifierGuard,T as TriggerLabelledByPrecedence,b as WithInteractiveContent,lt as __namedExportsOrder,pt as default};
