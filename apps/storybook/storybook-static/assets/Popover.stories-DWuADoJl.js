import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BWu4c2F4.js";import{B as st}from"./Button-DvJUO9m9.js";import{I as ct}from"./Input-B9xcXif8.js";import{P as c}from"./Popover-Ck-3x_Zo.js";import{within as l,expect as n,userEvent as i,fireEvent as u,waitFor as M}from"./index-DgAF9SIF.js";import{s as lt,a as pt,S as gt}from"./storyShowcase-DlKirntE.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./focusTabbable-gnwmp6b7.js";const d={...lt},v={...pt};function p({children:a}){return t.jsx(gt,{maxWidth:"min(100%, 620px)",gap:12,children:a})}const At={title:"Overlay/Popover",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape/outside dismissal plus boundary Tab dismiss focus transfer. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}};function dt(a){const e=new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),a.dispatchEvent(e)}const w={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Open Popover"});await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),await i.click(o);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await n(o).not.toHaveAttribute("aria-keyshortcuts"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),o.focus(),await i.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-keyshortcuts")}};function ut(){const[a,e]=g.useState(0);return t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["ArrowDown open calls:"," ",t.jsx("strong",{"data-testid":"popover-arrowdown-open-calls",style:v,children:a})]}),t.jsx(c,{triggerLabel:"ArrowDown Guard Popover",onOpenChange:o=>{o&&e(r=>r+1)},children:t.jsx("p",{style:{margin:0},children:"Only unmodified ArrowDown should open this popover."})})]})}const b={args:{triggerLabel:"ArrowDown Guard Popover",children:t.jsx("p",{style:{margin:0},children:"Only unmodified ArrowDown should open this popover."})},render:()=>t.jsx(ut,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"ArrowDown Guard Popover"});await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown"),o.focus(),u.keyDown(o,{key:"ArrowDown",ctrlKey:!0}),u.keyDown(o,{key:"ArrowDown",altKey:!0}),u.keyDown(o,{key:"ArrowDown",metaKey:!0}),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("0"),await i.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("1")}};function vt(){const[a,e]=g.useState(0);return t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["Tab dismiss calls:"," ",t.jsx("strong",{"data-testid":"popover-trigger-tab-dismiss-calls",style:v,children:a})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(c,{triggerLabel:"Trigger Tab Guard Popover",onCloseReason:o=>{o==="tab-key"&&e(r=>r+1)},children:t.jsx("button",{type:"button",children:"Popover primary action"})}),t.jsx("button",{type:"button",children:"Next page action"})]})]})}const h={args:{triggerLabel:"Trigger Tab Guard Popover",children:t.jsx("button",{type:"button",children:"Popover primary action"})},render:()=>t.jsx(vt,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Trigger Tab Guard Popover"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),o.focus(),u.keyDown(o,{key:"Tab",ctrlKey:!0}),u.keyDown(o,{key:"Tab",altKey:!0}),u.keyDown(o,{key:"Tab",metaKey:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-trigger-tab-dismiss-calls")).toHaveTextContent("0"),u.keyDown(o,{key:"Tab"}),await M(()=>{n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}),await M(()=>{n(e.getByRole("button",{name:"Next page action"})).toHaveFocus()}),await M(()=>{n(e.getByTestId("popover-trigger-tab-dismiss-calls")).toHaveTextContent("1")})}},T={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(ct,{id:"name",defaultValue:"Aurora Team"}),t.jsx(st,{size:"sm",children:"Save"})]})}},B={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:t.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"More context actions"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},x={args:{triggerLabel:"⋯",triggerAriaLabel:"Fallback popover actions",triggerAriaLabelledBy:"popover-trigger-heading",children:t.jsx("p",{style:{margin:0},children:"Visible heading naming should win."})},render:a=>t.jsxs(p,{children:[t.jsx("h3",{id:"popover-trigger-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Popover heading actions"}),t.jsx(c,{...a})]}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Popover heading actions"});await n(o).toHaveAttribute("aria-labelledby","popover-trigger-heading"),await n(o).not.toHaveAttribute("aria-label"),await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},k={args:{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),children:t.jsx("p",{style:{margin:0},children:"Standalone trigger naming path."})},render:()=>t.jsxs(p,{children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("h3",{id:"popover-trigger-name-heading",style:{margin:0},children:"Context actions"}),t.jsx(c,{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),triggerAriaLabelledBy:"popover-trigger-name-heading",contentLabel:"Heading linked popover content",children:t.jsx("p",{style:{margin:0},children:"Heading-linked trigger naming path."})})]}),t.jsx(c,{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),triggerAriaLabel:"Quick actions",contentLabel:"Aria label popover content",children:t.jsx("p",{style:{margin:0},children:"Standalone trigger naming path."})})]}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Context actions"}),r=e.getByRole("button",{name:"Quick actions"});await n(o).toHaveAttribute("aria-labelledby","popover-trigger-name-heading"),await n(o).not.toHaveAttribute("aria-label"),await n(r).toHaveAttribute("aria-label","Quick actions"),await i.click(o),await n(e.getByRole("dialog",{name:"Heading linked popover content"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await i.click(r),await n(e.getByRole("dialog",{name:"Aria label popover content"})).toBeInTheDocument()}},P={args:{triggerLabel:t.jsx("span",{"aria-hidden":"true",children:"⋯"}),children:t.jsx("p",{style:{margin:0},children:"Auto-named trigger fallback content."})},play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Open popover"});await n(o).toHaveAttribute("aria-label","Open popover"),await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};function mt(){const[a,e]=g.useState("none");return t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-runtime-close-reason",style:v,children:a})]}),t.jsx("p",{style:d,children:"Runtime config values from CMS/JSON payloads should normalize non-boolean dismiss flags and fall back to enabled Escape/outside dismissal."}),t.jsx(c,{triggerLabel:"Runtime config popover",closeOnEscape:0,closeOnOutsidePointer:"false",onCloseReason:o=>e(o),children:t.jsx("p",{style:{margin:0},children:"Runtime boolean normalization keeps dismiss policy stable."})}),t.jsx("button",{type:"button",children:"Runtime config outside target"})]})}const R={args:{triggerLabel:"Runtime config popover",children:t.jsx("p",{style:{margin:0},children:"Runtime boolean normalization keeps dismiss policy stable."})},render:()=>t.jsx(mt,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Runtime config popover"}),r=e.getByRole("button",{name:"Runtime config outside target"});await i.click(o);const s=e.getByRole("dialog",{name:"Popover content"});await n(s).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-runtime-close-reason")).toHaveTextContent("escape-key"),await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await i.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-runtime-close-reason")).toHaveTextContent("outside-pointer")}};function yt(){return t.jsxs(p,{children:[t.jsx("p",{style:d,children:"Runtime visual config should normalize invalid align tokens to keep placement deterministic."}),t.jsx(c,{triggerLabel:"Runtime visual popover",align:" middle ",children:t.jsx("p",{style:{margin:0},children:"Runtime visual normalization keeps horizontal alignment stable."})})]})}const D={args:{triggerLabel:"Runtime visual popover",children:t.jsx("p",{style:{margin:0},children:"Runtime visual normalization keeps horizontal alignment stable."})},render:()=>t.jsx(yt,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Runtime visual popover"});await i.click(o);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toHaveStyle({left:"0px"})}},E={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:t.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:a=>t.jsxs(p,{children:[t.jsx(c,{...a}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Review policy"});await i.click(o);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Tab"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};function wt(){const[a,e]=g.useState(0),[o,r]=g.useState(0);return t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-escape-calls",style:v,children:a})]}),t.jsxs("p",{style:d,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-outside-calls",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Guarded popover",onEscapeKeyDown:s=>{s.preventDefault(),e(m=>m+1)},onPointerDownOutside:s=>{s.preventDefault(),r(m=>m+1)},children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})}const I={args:{triggerLabel:"Guarded popover",children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})},render:()=>t.jsx(wt,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Guarded popover"}),r=e.getByRole("button",{name:"Guarded outside target"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1"),await i.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1")}};function bt(){return t.jsxs(p,{children:[t.jsx("p",{style:d,children:"Nested popovers should dismiss one layer at a time: first Escape closes inner, second Escape closes outer."}),t.jsx(c,{triggerLabel:"Outer popover",contentLabel:"Outer popover content",children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Outer layer content."}),t.jsx(c,{triggerLabel:"Inner popover",contentLabel:"Inner popover content",children:t.jsx("p",{style:{margin:0},children:"Inner layer content."})})]})})]})}const f={args:{triggerLabel:"Outer popover",contentLabel:"Outer popover content",children:t.jsx("p",{style:{margin:0},children:"Outer layer content."})},render:()=>t.jsx(bt,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Outer popover"});await i.click(o),await n(e.getByRole("dialog",{name:"Outer popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Inner popover"});await i.click(r),await n(e.getByRole("dialog",{name:"Inner popover content"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Inner popover content"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outer popover content"})).toBeInTheDocument(),await n(r).toHaveFocus(),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Outer popover content"})).not.toBeInTheDocument(),await n(o).toHaveFocus()}};function ht(){const[a,e]=g.useState("none"),o=r=>{e(s=>s==="none"?r:`${s} -> ${r}`)};return t.jsxs(p,{children:[t.jsx("p",{style:d,children:"Outside pointer should dismiss nested popovers one layer at a time."}),t.jsx(c,{triggerLabel:"Outer outside-order popover",contentLabel:"Outer outside-order popover content",onCloseReason:r=>o(`outer:reason:${r}`),onOpenChange:r=>{r||o("outer:open:false")},children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Outer layer content."}),t.jsx(c,{triggerLabel:"Inner outside-order popover",contentLabel:"Inner outside-order popover content",onCloseReason:r=>o(`inner:reason:${r}`),onOpenChange:r=>{r||o("inner:open:false")},children:t.jsx("p",{style:{margin:0},children:"Inner layer content."})})]})}),t.jsx("button",{type:"button",children:"Popover nested outside target"}),t.jsxs("p",{style:d,children:["Nested close trace:"," ",t.jsx("strong",{"data-testid":"popover-nested-outside-trace",style:v,children:a})]})]})}const j={args:{triggerLabel:"Outer outside-order popover",contentLabel:"Outer outside-order popover content",children:t.jsx("p",{style:{margin:0},children:"Outer layer content."})},render:()=>t.jsx(ht,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Outer outside-order popover"});await i.click(o),await n(e.getByRole("dialog",{name:"Outer outside-order popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Inner outside-order popover"});await i.click(r),await n(e.getByRole("dialog",{name:"Inner outside-order popover content"})).toBeInTheDocument();const s=e.getByRole("button",{name:"Popover nested outside target"});await i.click(s),await n(e.queryByRole("dialog",{name:"Inner outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outer outside-order popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false"),await i.click(s),await n(e.queryByRole("dialog",{name:"Outer outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-nested-outside-trace")).toHaveTextContent("inner:reason:outside-pointer -> inner:open:false -> outer:reason:outside-pointer -> outer:open:false")}},H={args:{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>t.jsxs(p,{children:[t.jsx(c,{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Focus Policy"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Popover Next Focus Target"});await i.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},C={args:{triggerLabel:"Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Tab Boundary Action"})},render:()=>t.jsxs(p,{children:[t.jsx(c,{triggerLabel:"Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Tab Boundary Action"})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Tab Flow Popover"}),r=e.getByRole("button",{name:"Popover Next Focus Target"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Boundary Action"})).toHaveFocus(),await i.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},S={args:{triggerLabel:"Shift+Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Shift+Tab Boundary Action"})},render:()=>t.jsxs(p,{children:[t.jsx("button",{type:"button",children:"Popover Previous Focus Target"}),t.jsx(c,{triggerLabel:"Shift+Tab Flow Popover",children:t.jsx("button",{type:"button",children:"Popover Shift+Tab Boundary Action"})})]}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Shift+Tab Flow Popover"}),r=e.getByRole("button",{name:"Popover Previous Focus Target"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Shift+Tab Boundary Action"})).toHaveFocus(),await i.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},L={args:{triggerLabel:"Popover Tab Fallback",children:t.jsx("button",{type:"button",children:"Popover Tab Fallback Action"})},render:()=>t.jsx(p,{children:t.jsx(c,{triggerLabel:"Popover Tab Fallback",children:t.jsx("button",{type:"button",children:"Popover Tab Fallback Action"})})}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Popover Tab Fallback"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Fallback Action"})).toHaveFocus(),await i.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(o).toHaveFocus(),await i.click(o),await n(e.getByRole("button",{name:"Popover Tab Fallback Action"})).toHaveFocus(),await i.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(o).toHaveFocus()}},A={args:{triggerLabel:"Popover Tab Skip",children:t.jsx("button",{type:"button",children:"Popover Tab Skip Action"})},render:()=>t.jsxs(p,{children:[t.jsx(c,{triggerLabel:"Popover Tab Skip",children:t.jsx("button",{type:"button",children:"Popover Tab Skip Action"})}),t.jsx("button",{type:"button",style:{display:"none"},children:"Popover Hidden Candidate"}),t.jsx("div",{inert:!0,children:t.jsx("button",{type:"button",children:"Popover Inert Candidate"})}),t.jsx("button",{type:"button",children:"Popover Visible Candidate"})]}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Popover Tab Skip"});await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Tab Skip Action"})).toHaveFocus(),await i.keyboard("{Tab}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover Visible Candidate"})).toHaveFocus()}};function Tt(){const[a,e]=g.useState("none"),[o,r]=g.useState("none");return t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-close-reason",style:v,children:a})]}),t.jsxs("p",{style:d,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"popover-close-trace",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Telemetry popover",onOpenChange:s=>{s||r(m=>`${m} -> open:false`)},onCloseReason:s=>{e(s),r(`reason:${s}`)},children:t.jsx("button",{type:"button",children:"Telemetry primary action"})}),t.jsx("button",{type:"button",children:"Outside target"})]})}const F={args:{triggerLabel:"Telemetry popover",children:t.jsx("button",{type:"button",children:"Telemetry primary action"})},render:()=>t.jsx(Tt,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Telemetry popover"}),r=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("popover-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("none"),await i.click(o),await i.keyboard("{Escape}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(o),r.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await i.click(r),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(o),await n(e.getByRole("button",{name:"Telemetry primary action"})).toHaveFocus(),await i.keyboard("{Tab}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("tab-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await n(r).toHaveFocus(),await i.click(o),await i.click(o),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false")}};function Bt(){const[a,e]=g.useState(!1),[o,r]=g.useState(0);return g.useEffect(()=>{const s=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",s,!0),()=>{document.removeEventListener("keydown",s,!0)}},[]),t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-escape-calls",style:v,children:o})]}),t.jsx(c,{triggerLabel:"Preempted popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(s=>s+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const O={args:{triggerLabel:"Preempted popover",children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>t.jsx(Bt,{}),play:async({canvasElement:a})=>{const e=l(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Preempted popover"});await i.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),u.keyDown(o,{key:"Escape",ctrlKey:!0}),u.keyDown(o,{key:"Escape",altKey:!0}),u.keyDown(o,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};function xt(){const[a,e]=g.useState(!1),[o,r]=g.useState(0),[s,m]=g.useState("none");return t.jsx("div",{onKeyDownCapture:y=>{(y.key==="ArrowDown"||y.key==="Tab")&&y.preventDefault()},children:t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["Open calls:"," ",t.jsx("strong",{"data-testid":"popover-managed-open-calls",style:v,children:o})]}),t.jsxs("p",{style:d,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-managed-close-reason",style:v,children:s})]}),t.jsx(c,{triggerLabel:"Managed keys popover",open:a,onOpenChange:y=>{y&&r(it=>it+1),e(y)},onCloseReason:m,children:t.jsx("button",{type:"button",children:"Popover managed boundary action"})})]})})}const N={args:{triggerLabel:"Managed keys popover",children:t.jsx("button",{type:"button",children:"Popover managed boundary action"})},render:()=>t.jsx(xt,{}),play:async({canvasElement:a})=>{const e=l(a),o=await e.findByRole("button",{name:"Managed keys popover"});o.focus(),u.keyDown(o,{key:"ArrowDown"}),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-managed-open-calls")).toHaveTextContent("0"),await i.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"Popover managed boundary action"})).toHaveFocus(),await n(e.getByTestId("popover-managed-open-calls")).toHaveTextContent("1"),await i.keyboard("{Tab}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-managed-close-reason")).toHaveTextContent("none")}};function kt(){const[a,e]=g.useState(!1),[o,r]=g.useState(0),[s,m]=g.useState("none");return t.jsxs(p,{children:[t.jsxs("p",{style:d,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-repeat-escape-calls",style:v,children:o})]}),t.jsxs("p",{style:d,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-repeat-close-reason",style:v,children:s})]}),t.jsx(c,{triggerLabel:"Repeat Escape Popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(y=>y+1),onCloseReason:m,children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})})]})}const q={args:{triggerLabel:"Repeat Escape Popover",children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})},render:()=>t.jsx(kt,{}),play:async({canvasElement:a})=>{const e=l(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Repeat Escape Popover"});await i.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),u.keyDown(o,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key")}};function Pt(){const[a,e]=g.useState(!0);return t.jsx(p,{children:t.jsx(c,{triggerLabel:"IME composition popover",open:a,onOpenChange:e,children:t.jsx("p",{style:{margin:0},children:"Escape during IME composition should not dismiss this popover."})})})}const G={args:{triggerLabel:"IME composition popover",children:t.jsx("p",{style:{margin:0},children:"Escape during IME composition should not dismiss this popover."})},render:()=>t.jsx(Pt,{}),play:async({canvasElement:a})=>{const e=l(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"IME composition popover"});await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),u.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),dt(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await i.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var z,K,V;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(K=w.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var Q,$,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=($=b.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var U,_,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Trigger Tab Guard Popover",
    children: <button type="button">Popover primary action</button>
  },
  render: () => <TriggerTabModifierGuardPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Trigger Tab Guard Popover"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    trigger.focus();
    fireEvent.keyDown(trigger, {
      key: "Tab",
      ctrlKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "Tab",
      altKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "Tab",
      metaKey: true
    });
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-trigger-tab-dismiss-calls")).toHaveTextContent("0");
    fireEvent.keyDown(trigger, {
      key: "Tab"
    });
    await waitFor(() => {
      expect(canvas.queryByRole("dialog", {
        name: "Popover content"
      })).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByRole("button", {
        name: "Next page action"
      })).toHaveFocus();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("popover-trigger-tab-dismiss-calls")).toHaveTextContent("1");
    });
  }
}`,...(J=(_=h.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,re;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,se,ce;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    triggerLabel: <span aria-hidden="true">⋯</span>,
    children: <p style={{
      margin: 0
    }}>Standalone trigger naming path.</p>
  },
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
}`,...(ce=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,pe,ge;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ge=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var de,ue,ve;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Runtime config popover",
    children: <p style={{
      margin: 0
    }}>Runtime boolean normalization keeps dismiss policy stable.</p>
  },
  render: () => <RuntimeBooleanConfigNormalizationPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Runtime config popover"
    });
    const outsideTarget = canvas.getByRole("button", {
      name: "Runtime config outside target"
    });
    await userEvent.click(trigger);
    const dialog = canvas.getByRole("dialog", {
      name: "Popover content"
    });
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Tab Escape");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-runtime-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-runtime-close-reason")).toHaveTextContent("outside-pointer");
  }
}`,...(ve=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};var me,ye,we;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Runtime visual popover",
    children: <p style={{
      margin: 0
    }}>Runtime visual normalization keeps horizontal alignment stable.</p>
  },
  render: () => <RuntimeVisualConfigNormalizationPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Runtime visual popover"
    });
    await userEvent.click(trigger);
    const dialog = canvas.getByRole("dialog", {
      name: "Popover content"
    });
    await expect(dialog).toHaveStyle({
      left: "0px"
    });
  }
}`,...(we=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var be,he,Te;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(he=E.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var Be,xe,ke;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Pe,Re,De;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(De=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ee,Ie,fe;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(fe=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}};var je,He,Ce;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ce=(He=H.parameters)==null?void 0:He.docs)==null?void 0:Ce.source}}};var Se,Le,Ae;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Le=C.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var Fe,Oe,Ne;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ne=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.source}}};var qe,Ge,Me;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Popover Tab Fallback",
    children: <button type="button">Popover Tab Fallback Action</button>
  },
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
}`,...(Me=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var ze,Ke,Ve;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Popover Tab Skip",
    children: <button type="button">Popover Tab Skip Action</button>
  },
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
}`,...(Ve=(Ke=A.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.source}}};var Qe,$e,We;F.parameters={...F.parameters,docs:{...(Qe=F.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(We=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};var Ue,_e,Je;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Je=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;N.parameters={...N.parameters,docs:{...(Xe=N.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=N.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,nt;q.parameters={...q.parameters,docs:{...(et=q.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=q.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,at,rt;G.parameters={...G.parameters,docs:{...(ot=G.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(at=G.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};const Ft=["Default","TriggerArrowDownModifierGuard","TriggerTabModifierGuard","WithInteractiveContent","IconTrigger","TriggerLabelledByPrecedence","NonTextTriggerNameFallback","NonTextTriggerAutoNameFallback","RuntimeBooleanConfigNormalization","RuntimeVisualConfigNormalization","NonDismissible","DismissGuardHooks","NestedDismissOrder","NestedOutsideDismissOrder","OutsideDismissFocusTransfer","TabDismissToNextControl","ShiftTabDismissToPreviousControl","TabDismissFallbackToTrigger","TabDismissSkipsUnfocusableCandidates","CloseReasonTelemetry","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","EscapeRepeatGuard","EscapeIgnoresImeComposition"];export{F as CloseReasonTelemetry,w as Default,I as DismissGuardHooks,G as EscapeIgnoresImeComposition,O as EscapePreemptedByGlobalHandler,q as EscapeRepeatGuard,B as IconTrigger,N as ManagedKeysPreemptedByGlobalHandler,f as NestedDismissOrder,j as NestedOutsideDismissOrder,E as NonDismissible,P as NonTextTriggerAutoNameFallback,k as NonTextTriggerNameFallback,H as OutsideDismissFocusTransfer,R as RuntimeBooleanConfigNormalization,D as RuntimeVisualConfigNormalization,S as ShiftTabDismissToPreviousControl,L as TabDismissFallbackToTrigger,A as TabDismissSkipsUnfocusableCandidates,C as TabDismissToNextControl,b as TriggerArrowDownModifierGuard,x as TriggerLabelledByPrecedence,h as TriggerTabModifierGuard,T as WithInteractiveContent,Ft as __namedExportsOrder,At as default};
