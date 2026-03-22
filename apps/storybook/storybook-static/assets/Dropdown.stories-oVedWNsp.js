import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{P as vt}from"./Popover-v9qgIDyK.js";import{D as u}from"./Dropdown-C_XIgq4B.js";import{within as i,userEvent as r,expect as t,fireEvent as d,waitFor as $}from"./index-DgAF9SIF.js";import{S as p,s as y,a as w}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-0MVldSzJ.js";import"./Button-DirECuRH.js";const g=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],Lt={title:"Overlay/Dropdown",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:g}},v={display:"grid",gap:12,justifyItems:"start"},B={display:"grid",gap:8,justifyItems:"start"},bt={margin:0};function Tt(s,e){const a=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),s.dispatchEvent(a)}const h={},k={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},T={args:{label:"⋯",triggerAriaLabel:"More actions",items:g},play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"More actions"})),await t(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},x={render:()=>n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsx("h3",{id:"dropdown-heading",style:{margin:0},children:"Release actions menu"}),n.jsx(u,{label:n.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Fallback release actions",triggerAriaLabelledBy:"dropdown-heading",items:g})]}),play:async({canvasElement:s})=>{const e=i(s.ownerDocument.body),a=await e.findByRole("button",{name:"Release actions menu"});await t(a).toHaveAttribute("aria-labelledby","dropdown-heading"),await t(a).not.toHaveAttribute("aria-label"),await r.click(a),await t(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument()}},D={render:()=>n.jsxs(p,{gap:12,children:[n.jsxs("div",{style:{display:"grid",gap:8},children:[n.jsx("h3",{id:"dropdown-trigger-name-heading",style:{margin:0},children:"Release actions menu"}),n.jsx(u,{label:n.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabelledBy:"dropdown-trigger-name-heading",items:g})]}),n.jsx(u,{label:n.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Quick actions",items:g})]}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Release actions menu"}),o=e.getByRole("button",{name:"Quick actions"});await t(a).toHaveAttribute("aria-labelledby","dropdown-trigger-name-heading"),await t(a).not.toHaveAttribute("aria-label"),await t(o).toHaveAttribute("aria-label","Quick actions"),await r.click(a),await t(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await r.click(o),await t(e.getByRole("menu",{name:"Quick actions"})).toBeInTheDocument()}},R={args:{label:"Icon items",items:[{key:"settings",label:n.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:n.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menu",{name:"Icon items"});await t(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await t(a).toBeInTheDocument()}},E={render:()=>n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsx("h3",{id:"dropdown-item-heading",style:{margin:0},children:"Settings action"}),n.jsx(u,{label:"Icon items",items:[{key:"settings",label:n.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Fallback settings label",ariaLabelledBy:"dropdown-item-heading",textValue:"Settings"},{key:"archive",label:n.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]})]}),play:async({canvasElement:s})=>{const e=i(s.ownerDocument.body);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menuitem",{name:"Settings action"});await t(a).toHaveAttribute("aria-labelledby","dropdown-item-heading"),await t(a).not.toHaveAttribute("aria-label")}},I={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:g},render:s=>n.jsx(p,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(u,{...s}),n.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Blocking actions"});await r.click(a);const o=e.getByRole("menu",{name:"Blocking actions"});await t(o).toBeInTheDocument(),await t(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab"),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside target"})),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function xt(){const[s,e]=m.useState(0),[a,o]=m.useState(0);return n.jsx(p,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:y,children:["Escape guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:w,children:s})]}),n.jsxs("p",{style:y,children:["Outside guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:w,children:a})]}),n.jsx(u,{label:"Guarded menu",onEscapeKeyDown:c=>{c.preventDefault(),e(l=>l+1)},onPointerDownOutside:c=>{c.preventDefault(),o(l=>l+1)},items:g}),n.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const H={render:()=>n.jsx(xt,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Guarded menu"}),o=e.getByRole("button",{name:"Guarded outside target"});await r.click(a),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await r.click(o),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function Dt(){const[s,e]=m.useState(!1),[a,o]=m.useState(0);return m.useEffect(()=>{const c=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),n.jsx(p,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:y,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-escape-calls",style:w,children:a})]}),n.jsx(u,{label:"Preempted Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>o(c=>c+1),items:g})]})})}const A={render:()=>n.jsx(Dt,{}),play:async({canvasElement:s})=>{const e=i(s),a=s.ownerDocument,o=await e.findByRole("button",{name:"Preempted Escape Menu"});await r.click(o),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),d.keyDown(a,{key:"Escape",ctrlKey:!0}),d.keyDown(a,{key:"Escape",altKey:!0}),d.keyDown(a,{key:"Escape",metaKey:!0}),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function Rt(){const[s,e]=m.useState(!1),[a,o]=m.useState(0),[c,l]=m.useState("none");return n.jsx(p,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:y,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:w,children:a})]}),n.jsxs("p",{style:y,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:w,children:c})]}),n.jsx(u,{label:"Repeat Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>o(b=>b+1),onCloseReason:l,items:g})]})})}const C={render:()=>n.jsx(Rt,{}),play:async({canvasElement:s})=>{const e=i(s),a=s.ownerDocument,o=await e.findByRole("button",{name:"Repeat Escape Menu"});await r.click(o),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),d.keyDown(a,{key:"Escape",repeat:!0}),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await r.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function Et(){const[s,e]=m.useState("none"),a=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return n.jsxs(p,{gap:8,children:[n.jsxs("p",{style:y,children:["Selected action:"," ",n.jsx("strong",{"data-testid":"dropdown-selected-action",style:w,children:s})]}),n.jsx(u,{label:"Release Actions",items:a})]})}const f={render:()=>n.jsx(Et,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Release Actions"});await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await t(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await r.click(a);const o=e.getByRole("menu");await t(o).toBeInTheDocument(),await t(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"),await t(a).not.toHaveAttribute("aria-keyshortcuts");const c=e.getByRole("menuitem",{name:"Duplicate"}),l=e.getByRole("menuitem",{name:"Archive"});await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(l).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{End}");const b=e.getByRole("menuitem",{name:"Delete"});await t(b).toHaveFocus(),d.keyDown(b,{key:"Enter",ctrlKey:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),d.keyDown(b,{key:"Enter",repeat:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await r.keyboard("{Enter}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),await t(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),a.focus(),await r.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await t(a).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{Escape}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),a.focus(),await r.keyboard("{ArrowUp}"),await t(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus()}},S={args:{label:"Modifier Arrow Guard",items:g},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Modifier Arrow Guard"});await r.click(a);const o=e.getByRole("menu",{name:"Modifier Arrow Guard"}),c=e.getByRole("menuitem",{name:"Duplicate"});await t(c).toHaveFocus(),d.keyDown(o,{key:"ArrowDown",ctrlKey:!0}),d.keyDown(o,{key:"ArrowUp",metaKey:!0}),d.keyDown(o,{key:"ArrowDown",altKey:!0}),await t(c).toHaveFocus(),await t(o).toBeInTheDocument(),await r.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus()}};function It(){const[s,e]=m.useState(0),[a,o]=m.useState(0);return n.jsxs(p,{gap:8,children:[n.jsxs("p",{style:y,children:["Selection calls:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-selection-count",style:w,children:s})]}),n.jsxs("p",{style:y,children:["Item-close reasons:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-close-count",style:w,children:a})]}),n.jsx(u,{open:!0,label:"Keyboard Dedupe Menu",onOpenChange:()=>{},onCloseReason:c=>{c==="item-select"&&o(l=>l+1)},items:[{key:"run",label:"Run",onSelect:()=>{e(c=>c+1)}},{key:"archive",label:"Archive"}]})]})}const j={render:()=>n.jsx(It,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("menuitem",{name:"Run"});d.keyDown(a,{key:"Enter"}),await $(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")}),d.click(a,{detail:0}),await $(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")})}};function Ht(){const[s,e]=m.useState("none"),[a,o]=m.useState("none");return n.jsx(p,{gap:8,children:n.jsxs("div",{style:B,children:[n.jsxs("p",{style:y,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-close-reason",style:w,children:s})]}),n.jsxs("p",{style:y,children:["Last close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-close-trace",style:w,children:a})]}),n.jsx(u,{label:"Telemetry Menu",onOpenChange:c=>{c||o(l=>`${l} -> open:false`)},onCloseReason:c=>{e(c),o(l=>l==="select"?`select -> reason:${c}`:`reason:${c}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{o("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",children:"Outside target"})]})})}const F={render:()=>n.jsx(Ht,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Telemetry Menu"}),o=e.getByRole("button",{name:"Outside target"});await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await r.click(a),await r.click(e.getByRole("menuitem",{name:"Duplicate"})),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await r.click(a),await r.keyboard("{Escape}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(a),o.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await t(e.getByRole("menu",{name:"Telemetry Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await r.click(o),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await r.click(a),await r.click(a),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await r.click(a),await r.keyboard("{Tab}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await t(o).toHaveFocus()}};function At(){const[s,e]=m.useState(!0),[a,o]=m.useState(!1),[c,l]=m.useState(0),[b,Bt]=m.useState("none");return n.jsx(p,{gap:8,children:n.jsxs("div",{style:B,children:[n.jsxs("p",{style:y,children:["Close requests:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:w,children:c})]}),n.jsxs("p",{style:y,children:["Pending parent close:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:w,children:a?"yes":"no"})]}),n.jsxs("p",{style:y,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:w,children:b})]}),n.jsx(u,{label:"Controlled Contract Menu",open:s,onOpenChange:ht=>{if(ht){e(!0),o(!1);return}a||(l(kt=>kt+1),o(!0))},onCloseReason:Bt,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",onClick:()=>{e(!1),o(!1)},children:"Apply close request"})]})})}const M={render:()=>n.jsx(At,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Controlled Contract Menu"}),o=e.getByRole("button",{name:"Apply close request"});await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await r.click(o),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await r.click(o),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},P={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Quick Actions"});await r.click(a);const o=e.getByRole("menu");await r.keyboard("{PageDown}"),await t(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await r.keyboard("{PageUp}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await r.keyboard("res"),await t(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await t(o).toBeInTheDocument()}},O={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"IME Typeahead Guard"});await r.click(a);const o=e.getByRole("menu");await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),d.keyDown(o,{key:"a",isComposing:!0,keyCode:229,which:229}),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),Tt(o,"a"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},K={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"All Disabled Keyboard"});await r.click(a);const o=e.getByRole("menu",{name:"All Disabled Keyboard"});await t(o).toHaveAttribute("aria-keyshortcuts","Tab Escape");const c=e.getAllByRole("menuitem");c.forEach(l=>{t(l).toHaveAttribute("aria-disabled","true"),t(l).toHaveAttribute("tabindex","-1")}),d.keyDown(o,{key:"ArrowDown"}),d.keyDown(o,{key:"ArrowUp"}),d.keyDown(o,{key:"Home"}),d.keyDown(o,{key:"End"}),d.keyDown(o,{key:"PageDown"}),d.keyDown(o,{key:"PageUp"}),d.keyDown(o,{key:"Enter"}),await t(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),c.forEach(l=>{t(l).toHaveAttribute("tabindex","-1")})}},L={args:{label:"Single Actionable Keyboard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Single Actionable Keyboard"});await r.click(a);const o=e.getByRole("menu",{name:"Single Actionable Keyboard"});await t(o).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),d.keyDown(o,{key:"ArrowDown"}),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(e.getByRole("menuitem",{name:"Archive"})).not.toHaveAttribute("aria-keyshortcuts")}},q={render:()=>n.jsx(p,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(u,{label:"Focus Policy",items:g}),n.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Focus Policy"});await r.click(a),await t(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const o=e.getByRole("button",{name:"Next Focus Target"});await r.click(o),await t(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await t(o).toHaveFocus()}},G={render:()=>n.jsx(p,{gap:12,children:n.jsx("div",{style:v,children:n.jsx(u,{label:"Escape Focus Policy",items:g})})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Escape Focus Policy"});await r.click(a),await t(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await t(a).toHaveFocus()}},N={render:()=>n.jsx(p,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(u,{label:"Tab Flow Menu",items:g}),n.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Tab Flow Menu"});await r.click(a),await t(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Tab}"),await t(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},U={render:()=>n.jsx(p,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx("button",{type:"button",children:"Before Menu Control"}),n.jsx(u,{label:"Shift+Tab Flow Menu",items:g})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Shift+Tab Flow Menu"});await r.click(a),await t(e.getByRole("menu",{name:"Shift+Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Shift>}{Tab}{/Shift}"),await t(e.queryByRole("menu",{name:"Shift+Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"Before Menu Control"})).toHaveFocus()}},Q={render:()=>n.jsx(p,{gap:8,children:n.jsx(vt,{triggerLabel:"Open container",children:n.jsxs("div",{style:B,children:[n.jsx("p",{style:bt,children:"Popover shell"}),n.jsx(u,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"Open container"})),await r.click(e.getByRole("button",{name:"Inner actions"})),await t(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};function Ct(){const[s,e]=m.useState("none"),a=o=>{e(c=>c==="none"?o:`${c} -> ${o}`)};return n.jsx(p,{gap:8,children:n.jsxs("div",{style:B,children:[n.jsx(vt,{triggerLabel:"Open outside-order container",contentLabel:"Outside-order popover content",onCloseReason:o=>a(`popover:reason:${o}`),onOpenChange:o=>{o||a("popover:open:false")},children:n.jsxs("div",{style:B,children:[n.jsx("p",{style:bt,children:"Outside pointer should dismiss inner layer first."}),n.jsx(u,{label:"Inner outside-order menu",onCloseReason:o=>a(`dropdown:reason:${o}`),onOpenChange:o=>{o||a("dropdown:open:false")},items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),n.jsx("button",{type:"button",children:"Outside order target"}),n.jsxs("p",{style:y,children:["Nested close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-nested-outside-trace",style:w,children:s})]})]})})}const V={render:()=>n.jsx(Ct,{}),play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"Open outside-order container"})),await r.click(e.getByRole("button",{name:"Inner outside-order menu"})),await t(e.getByRole("menu",{name:"Inner outside-order menu"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside order target"})),await t(e.queryByRole("menu",{name:"Inner outside-order menu"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false"),await r.click(e.getByRole("button",{name:"Outside order target"})),await t(e.queryByRole("dialog",{name:"Outside-order popover content"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false")}};var J,_,z;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(z=(_=h.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var W,X,Y;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Project Menu",
    items: [{
      key: "view",
      label: "View details"
    }, {
      key: "copy",
      label: "Copy link"
    }, {
      key: "tag",
      label: "Add tag"
    }, {
      key: "export",
      label: "Export JSON"
    }, {
      key: "remove",
      label: "Remove",
      disabled: true
    }]
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "⋯",
    triggerAriaLabel: "More actions",
    items
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "More actions"
    }));
    await expect(canvas.getByRole("menu", {
      name: "More actions"
    })).toBeInTheDocument();
  }
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <h3 id="dropdown-heading" style={{
      margin: 0
    }}>
        Release actions menu
      </h3>
      <Dropdown label={<span aria-hidden>⋯</span>} triggerAriaLabel="Fallback release actions" triggerAriaLabelledBy="dropdown-heading" items={items} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const trigger = await canvas.findByRole("button", {
      name: "Release actions menu"
    });
    await expect(trigger).toHaveAttribute("aria-labelledby", "dropdown-heading");
    await expect(trigger).not.toHaveAttribute("aria-label");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Release actions menu"
    })).toBeInTheDocument();
  }
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ce;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={12}>
      <div style={{
      display: "grid",
      gap: 8
    }}>
        <h3 id="dropdown-trigger-name-heading" style={{
        margin: 0
      }}>
          Release actions menu
        </h3>
        <Dropdown label={<span aria-hidden>⋯</span>} triggerAriaLabelledBy="dropdown-trigger-name-heading" items={items} />
      </div>
      <Dropdown label={<span aria-hidden>⋯</span>} triggerAriaLabel="Quick actions" items={items} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const labelledByTrigger = await canvas.findByRole("button", {
      name: "Release actions menu"
    });
    const ariaLabelTrigger = canvas.getByRole("button", {
      name: "Quick actions"
    });
    await expect(labelledByTrigger).toHaveAttribute("aria-labelledby", "dropdown-trigger-name-heading");
    await expect(labelledByTrigger).not.toHaveAttribute("aria-label");
    await expect(ariaLabelTrigger).toHaveAttribute("aria-label", "Quick actions");
    await userEvent.click(labelledByTrigger);
    await expect(canvas.getByRole("menu", {
      name: "Release actions menu"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await userEvent.click(ariaLabelTrigger);
    await expect(canvas.getByRole("menu", {
      name: "Quick actions"
    })).toBeInTheDocument();
  }
}`,...(ce=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ie,le,de;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: "Icon items",
    items: [{
      key: "settings",
      label: <span aria-hidden="true">⚙</span>,
      ariaLabel: "Settings",
      textValue: "Settings"
    }, {
      key: "archive",
      label: <span aria-hidden="true">🗄</span>,
      ariaLabel: "Archive",
      textValue: "Archive"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Icon items"
    }));
    const menu = canvas.getByRole("menu", {
      name: "Icon items"
    });
    await expect(canvas.getByRole("menuitem", {
      name: "Settings"
    })).toBeInTheDocument();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", {
      name: "Archive"
    })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <h3 id="dropdown-item-heading" style={{
      margin: 0
    }}>
        Settings action
      </h3>
      <Dropdown label="Icon items" items={[{
      key: "settings",
      label: <span aria-hidden="true">⚙</span>,
      ariaLabel: "Fallback settings label",
      ariaLabelledBy: "dropdown-item-heading",
      textValue: "Settings"
    }, {
      key: "archive",
      label: <span aria-hidden="true">🗄</span>,
      ariaLabel: "Archive",
      textValue: "Archive"
    }]} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Icon items"
    }));
    const settingsItem = canvas.getByRole("menuitem", {
      name: "Settings action"
    });
    await expect(settingsItem).toHaveAttribute("aria-labelledby", "dropdown-item-heading");
    await expect(settingsItem).not.toHaveAttribute("aria-label");
  }
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,we,ge;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: "Blocking actions",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    items
  },
  render: args => <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
      <Dropdown {...args} />
      <button type="button">Outside target</button>
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Blocking actions"
    });
    await userEvent.click(trigger);
    const blockingMenu = canvas.getByRole("menu", {
      name: "Blocking actions"
    });
    await expect(blockingMenu).toBeInTheDocument();
    await expect(blockingMenu).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Tab");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", {
      name: "Blocking actions"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside target"
    }));
    await expect(canvas.getByRole("menu", {
      name: "Blocking actions"
    })).toBeInTheDocument();
  }
}`,...(ge=(we=I.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var ve,be,Be;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <DismissGuardDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Guarded menu"
    });
    const outsideTarget = canvas.getByRole("button", {
      name: "Guarded outside target"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Guarded menu"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", {
      name: "Guarded menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1");
    await userEvent.click(outsideTarget);
    await expect(canvas.getByRole("menu", {
      name: "Guarded menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1");
  }
}`,...(Be=(be=H.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};var he,ke,Te;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", {
      name: "Preempted Escape Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Preempted Escape Menu"
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
    await expect(canvas.getByRole("menu", {
      name: "Preempted Escape Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-escape-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", {
      name: "Preempted Escape Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-escape-calls")).toHaveTextContent("0");
  }
}`,...(Te=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var xe,De,Re;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <EscapeRepeatDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", {
      name: "Repeat Escape Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Repeat Escape Menu"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      repeat: true
    });
    await expect(canvas.getByRole("menu", {
      name: "Repeat Escape Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0");
    await expect(canvas.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", {
      name: "Repeat Escape Menu"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1");
    await expect(canvas.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key");
  }
}`,...(Re=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ee,Ie,He;f.parameters={...f.parameters,docs:{...(Ee=f.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <SelectionTelemetryDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Release Actions"
    });
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await expect(menu).toBeInTheDocument();
    await expect(menu).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Tab Escape");
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    const duplicateItem = canvas.getByRole("menuitem", {
      name: "Duplicate"
    });
    const archiveItem = canvas.getByRole("menuitem", {
      name: "Archive"
    });
    await expect(duplicateItem).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(archiveItem).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{End}");
    const deleteItem = canvas.getByRole("menuitem", {
      name: "Delete"
    });
    await expect(deleteItem).toHaveFocus();
    fireEvent.keyDown(deleteItem, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    fireEvent.keyDown(deleteItem, {
      key: "Enter",
      repeat: true
    });
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp");
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete");
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();
    trigger.focus();
    await userEvent.keyboard("{ArrowUp}");
    await expect(canvas.getByRole("menuitem", {
      name: "Delete"
    })).toHaveFocus();
  }
}`,...(He=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:He.source}}};var Ae,Ce,fe;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    label: "Modifier Arrow Guard",
    items
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Modifier Arrow Guard"
    });
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", {
      name: "Modifier Arrow Guard"
    });
    const duplicateItem = canvas.getByRole("menuitem", {
      name: "Duplicate"
    });
    await expect(duplicateItem).toHaveFocus();
    fireEvent.keyDown(menu, {
      key: "ArrowDown",
      ctrlKey: true
    });
    fireEvent.keyDown(menu, {
      key: "ArrowUp",
      metaKey: true
    });
    fireEvent.keyDown(menu, {
      key: "ArrowDown",
      altKey: true
    });
    await expect(duplicateItem).toHaveFocus();
    await expect(menu).toBeInTheDocument();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", {
      name: "Rename"
    })).toHaveFocus();
  }
}`,...(fe=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:fe.source}}};var Se,je,Fe;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <KeyboardActivationDedupeDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const runItem = await canvas.findByRole("menuitem", {
      name: "Run"
    });
    fireEvent.keyDown(runItem, {
      key: "Enter"
    });
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1");
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1");
    });
    fireEvent.click(runItem, {
      detail: 0
    });
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1");
      expect(canvas.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1");
    });
  }
}`,...(Fe=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Me,Pe,Oe;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Telemetry Menu"
    });
    const outsideTarget = canvas.getByRole("button", {
      name: "Outside target"
    });
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("none");
    await userEvent.click(trigger);
    await userEvent.click(canvas.getByRole("menuitem", {
      name: "Duplicate"
    }));
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false");
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    await userEvent.click(trigger);
    outsideTarget.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      button: 0,
      ctrlKey: true,
      pointerType: "mouse"
    }));
    await expect(canvas.getByRole("menu", {
      name: "Telemetry Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(outsideTarget);
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false");
    await userEvent.click(trigger);
    await userEvent.keyboard("{Tab}");
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key");
    await expect(canvas.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false");
    await expect(outsideTarget).toHaveFocus();
  }
}`,...(Oe=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};var Ke,Le,qe;M.parameters={...M.parameters,docs:{...(Ke=M.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <ControlledContractDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Controlled Contract Menu"
    });
    const applyCloseButton = canvas.getByRole("button", {
      name: "Apply close request"
    });
    await expect(canvas.getByRole("menu", {
      name: "Controlled Contract Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0");
    await expect(canvas.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Controlled Contract Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click");
    await expect(canvas.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1");
    await expect(canvas.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes");
    await userEvent.click(applyCloseButton);
    await expect(canvas.queryByRole("menu", {
      name: "Controlled Contract Menu"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Controlled Contract Menu"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", {
      name: "Controlled Contract Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2");
    await userEvent.click(applyCloseButton);
    await expect(canvas.queryByRole("menu", {
      name: "Controlled Contract Menu"
    })).not.toBeInTheDocument();
  }
}`,...(qe=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Ge,Ne,Ue;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    label: "Quick Actions",
    items: [{
      key: "duplicate",
      label: "Duplicate"
    }, {
      key: "archive",
      label: "Archive",
      disabled: true
    }, {
      key: "add-note",
      label: "Add note"
    }, {
      key: "assign",
      label: "Assign"
    }, {
      key: "resume",
      label: "Resume card",
      textValue: "Résumé"
    }, {
      key: "rename",
      label: "Rename"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Quick Actions"
    });
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await userEvent.keyboard("{PageDown}");
    await expect(canvas.getByRole("menuitem", {
      name: "Rename"
    })).toHaveFocus();
    await userEvent.keyboard("{PageUp}");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", {
      name: "Add note"
    })).toHaveFocus();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", {
      name: "Assign"
    })).toHaveFocus();
    await userEvent.keyboard("res");
    await expect(canvas.getByRole("menuitem", {
      name: "Resume card"
    })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
}`,...(Ue=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Qe,Ve,$e;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    label: "IME Typeahead Guard",
    items: [{
      key: "duplicate",
      label: "Duplicate"
    }, {
      key: "archive",
      label: "Archive"
    }, {
      key: "rename",
      label: "Rename"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "IME Typeahead Guard"
    });
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    fireEvent.keyDown(menu, {
      key: "a",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    dispatchLegacyImeKeyDown(menu, "a");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", {
      name: "Archive"
    })).toHaveFocus();
  }
}`,...($e=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};var Je,_e,ze;K.parameters={...K.parameters,docs:{...(Je=K.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    label: "All Disabled Keyboard",
    items: [{
      key: "archive",
      label: "Archive",
      disabled: true
    }, {
      key: "delete",
      label: "Delete",
      disabled: true
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "All Disabled Keyboard"
    });
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", {
      name: "All Disabled Keyboard"
    });
    await expect(menu).toHaveAttribute("aria-keyshortcuts", "Tab Escape");
    const menuItems = canvas.getAllByRole("menuitem");
    menuItems.forEach(item => {
      expect(item).toHaveAttribute("aria-disabled", "true");
      expect(item).toHaveAttribute("tabindex", "-1");
    });
    fireEvent.keyDown(menu, {
      key: "ArrowDown"
    });
    fireEvent.keyDown(menu, {
      key: "ArrowUp"
    });
    fireEvent.keyDown(menu, {
      key: "Home"
    });
    fireEvent.keyDown(menu, {
      key: "End"
    });
    fireEvent.keyDown(menu, {
      key: "PageDown"
    });
    fireEvent.keyDown(menu, {
      key: "PageUp"
    });
    fireEvent.keyDown(menu, {
      key: "Enter"
    });
    await expect(canvas.getByRole("menu", {
      name: "All Disabled Keyboard"
    })).toBeInTheDocument();
    menuItems.forEach(item => {
      expect(item).toHaveAttribute("tabindex", "-1");
    });
  }
}`,...(ze=(_e=K.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var We,Xe,Ye;L.parameters={...L.parameters,docs:{...(We=L.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    label: "Single Actionable Keyboard",
    items: [{
      key: "duplicate",
      label: "Duplicate"
    }, {
      key: "archive",
      label: "Archive",
      disabled: true
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Single Actionable Keyboard"
    });
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", {
      name: "Single Actionable Keyboard"
    });
    await expect(menu).toHaveAttribute("aria-keyshortcuts", "Tab Escape");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    fireEvent.keyDown(menu, {
      key: "ArrowDown"
    });
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(canvas.getByRole("menuitem", {
      name: "Archive"
    })).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(Ye=(Xe=L.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;q.parameters={...q.parameters,docs:{...(Ze=q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Focus Policy" items={items} />
        <button type="button">Next Focus Target</button>
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Focus Policy"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Focus Policy"
    })).toBeInTheDocument();
    const outsideTarget = canvas.getByRole("button", {
      name: "Next Focus Target"
    });
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("menu", {
      name: "Focus Policy"
    })).not.toBeInTheDocument();
    await expect(outsideTarget).toHaveFocus();
  }
}`,...(tt=(et=q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,ot;G.parameters={...G.parameters,docs:{...(nt=G.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Escape Focus Policy" items={items} />
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Escape Focus Policy"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Escape Focus Policy"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", {
      name: "Escape Focus Policy"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
  }
}`,...(ot=(at=G.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var st,rt,ct;N.parameters={...N.parameters,docs:{...(st=N.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Tab Flow Menu" items={items} />
        <button type="button">After Menu Control</button>
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Tab Flow Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Tab Flow Menu"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Tab}");
    await expect(canvas.queryByRole("menu", {
      name: "Tab Flow Menu"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "After Menu Control"
    })).toHaveFocus();
  }
}`,...(ct=(rt=N.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,lt,dt;U.parameters={...U.parameters,docs:{...(it=U.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <button type="button">Before Menu Control</button>
        <Dropdown label="Shift+Tab Flow Menu" items={items} />
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Shift+Tab Flow Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Shift+Tab Flow Menu"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    await expect(canvas.queryByRole("menu", {
      name: "Shift+Tab Flow Menu"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Before Menu Control"
    })).toHaveFocus();
  }
}`,...(dt=(lt=U.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;Q.parameters={...Q.parameters,docs:{...(ut=Q.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={8}>
      <Popover triggerLabel="Open container">
        <div style={storyTelemetryStackStyle}>
          <p style={storyParagraphStyle}>Popover shell</p>
          <Dropdown label="Inner actions" items={[{
          key: "duplicate",
          label: "Duplicate"
        }, {
          key: "archive",
          label: "Archive"
        }]} />
        </div>
      </Popover>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Open container"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Inner actions"
    }));
    await expect(canvas.getByRole("menu", {
      name: "Inner actions"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", {
      name: "Inner actions"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
  }
}`,...(pt=(mt=Q.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,gt;V.parameters={...V.parameters,docs:{...(yt=V.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <NestedOutsideDismissOrderDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Open outside-order container"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Inner outside-order menu"
    }));
    await expect(canvas.getByRole("menu", {
      name: "Inner outside-order menu"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Outside-order popover content"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside order target"
    }));
    await expect(canvas.queryByRole("menu", {
      name: "Inner outside-order menu"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Outside-order popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside order target"
    }));
    await expect(canvas.queryByRole("dialog", {
      name: "Outside-order popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false");
  }
}`,...(gt=(wt=V.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};const qt=["Default","DenseActions","IconTrigger","TriggerLabelledByPrecedence","NonTextTriggerNameFallback","IconItemNaming","IconItemLabelledByPrecedence","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","ModifierArrowNavigationGuard","KeyboardActivationDedupe","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","SingleActionableShortcutHints","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","ShiftTabDismissToPreviousControl","NestedDismissOrder","NestedOutsideDismissOrder"];export{K as AllItemsDisabledKeyboardNoop,F as CloseReasonTelemetry,M as ControlledOpenContract,h as Default,k as DenseActions,H as DismissGuardHooks,G as EscapeDismissFocusReturn,A as EscapePreemptedByGlobalHandler,C as EscapeRepeatGuard,E as IconItemLabelledByPrecedence,R as IconItemNaming,T as IconTrigger,j as KeyboardActivationDedupe,S as ModifierArrowNavigationGuard,Q as NestedDismissOrder,V as NestedOutsideDismissOrder,I as NonDismissible,D as NonTextTriggerNameFallback,q as OutsideDismissFocusTransfer,f as SelectionTelemetry,U as ShiftTabDismissToPreviousControl,L as SingleActionableShortcutHints,N as TabDismissToNextControl,x as TriggerLabelledByPrecedence,O as TypeaheadIgnoresImeComposition,P as TypeaheadNavigation,qt as __namedExportsOrder,Lt as default};
