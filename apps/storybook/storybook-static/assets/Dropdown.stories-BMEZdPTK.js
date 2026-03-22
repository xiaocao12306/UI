import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{P as Kn}from"./Popover-DMEweo-D.js";import{D as u}from"./Dropdown-B9XgV2Y-.js";import{within as i,userEvent as r,expect as n,fireEvent as l,waitFor as X}from"./index-DgAF9SIF.js";import{S as y,s as w,a as g}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-0MVldSzJ.js";import"./Button-rBVi27TD.js";const p=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],ct={title:"Overlay/Dropdown",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:p}},b={display:"grid",gap:12,justifyItems:"start"},B={display:"grid",gap:8,justifyItems:"start"},Ln={margin:0};function Vn(o,e){const a=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),o.dispatchEvent(a)}const h={},k={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},x={args:{label:"⋯",triggerAriaLabel:"More actions",items:p},play:async({canvasElement:o})=>{const e=i(o);await r.click(await e.findByRole("button",{name:"More actions"})),await n(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},T={render:()=>t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("h3",{id:"dropdown-heading",style:{margin:0},children:"Release actions menu"}),t.jsx(u,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Fallback release actions",triggerAriaLabelledBy:"dropdown-heading",items:p})]}),play:async({canvasElement:o})=>{const e=i(o.ownerDocument.body),a=await e.findByRole("button",{name:"Release actions menu"});await n(a).toHaveAttribute("aria-labelledby","dropdown-heading"),await n(a).not.toHaveAttribute("aria-label"),await r.click(a),await n(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument()}},D={render:()=>t.jsxs(y,{gap:12,children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("h3",{id:"dropdown-trigger-name-heading",style:{margin:0},children:"Release actions menu"}),t.jsx(u,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabelledBy:"dropdown-trigger-name-heading",items:p})]}),t.jsx(u,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Quick actions",items:p})]}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Release actions menu"}),s=e.getByRole("button",{name:"Quick actions"});await n(a).toHaveAttribute("aria-labelledby","dropdown-trigger-name-heading"),await n(a).not.toHaveAttribute("aria-label"),await n(s).toHaveAttribute("aria-label","Quick actions"),await r.click(a),await n(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await r.click(s),await n(e.getByRole("menu",{name:"Quick actions"})).toBeInTheDocument()}},R={args:{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),items:p},play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Open menu"});await n(a).toHaveAttribute("aria-label","Open menu"),await r.click(a),await n(e.getByRole("menu",{name:"Open menu"})).toBeInTheDocument()}},E={args:{label:"Icon items",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:o})=>{const e=i(o);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menu",{name:"Icon items"});await n(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await n(a).toBeInTheDocument()}},I={args:{label:"TextValue item names",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),textValue:"Archive"}]},play:async({canvasElement:o})=>{const e=i(o);await r.click(await e.findByRole("button",{name:"TextValue item names"}));const a=e.getByRole("menu",{name:"TextValue item names"});await n(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await n(a).toBeInTheDocument()}},A={args:{label:"AriaLabel typeahead",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive"}]},play:async({canvasElement:o})=>{const e=i(o);await r.click(await e.findByRole("button",{name:"AriaLabel typeahead"}));const a=e.getByRole("menu",{name:"AriaLabel typeahead"});await n(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await n(a).toBeInTheDocument()}},H={render:()=>t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("h3",{id:"dropdown-item-heading",style:{margin:0},children:"Settings action"}),t.jsx(u,{label:"Icon items",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Fallback settings label",ariaLabelledBy:"dropdown-item-heading",textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]})]}),play:async({canvasElement:o})=>{const e=i(o.ownerDocument.body);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menuitem",{name:"Settings action"});await n(a).toHaveAttribute("aria-labelledby","dropdown-item-heading"),await n(a).not.toHaveAttribute("aria-label")}},f={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:p},render:o=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(u,{...o}),t.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Blocking actions"});await r.click(a);const s=e.getByRole("menu",{name:"Blocking actions"});await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab"),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function Un(){const[o,e]=m.useState(0),[a,s]=m.useState(0);return t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:g,children:o})]}),t.jsxs("p",{style:w,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:g,children:a})]}),t.jsx(u,{label:"Guarded menu",onEscapeKeyDown:c=>{c.preventDefault(),e(d=>d+1)},onPointerDownOutside:c=>{c.preventDefault(),s(d=>d+1)},items:p}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const C={render:()=>t.jsx(Un,{}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Guarded menu"}),s=e.getByRole("button",{name:"Guarded outside target"});await r.click(a),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await r.click(s),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function Qn(){const[o,e]=m.useState(!1),[a,s]=m.useState(0);return m.useEffect(()=>{const c=d=>{d.key==="Escape"&&d.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-escape-calls",style:g,children:a})]}),t.jsx(u,{label:"Preempted Escape Menu",open:o,onOpenChange:e,onEscapeKeyDown:()=>s(c=>c+1),items:p})]})})}const S={render:()=>t.jsx(Qn,{}),play:async({canvasElement:o})=>{const e=i(o),a=o.ownerDocument,s=await e.findByRole("button",{name:"Preempted Escape Menu"});await r.click(s),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),l.keyDown(a,{key:"Escape",ctrlKey:!0}),l.keyDown(a,{key:"Escape",altKey:!0}),l.keyDown(a,{key:"Escape",metaKey:!0}),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function $n(){const[o,e]=m.useState(0);return t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Selected actions:"," ",t.jsx("strong",{"data-testid":"dropdown-managed-key-select-count",style:g,children:o})]}),t.jsx("div",{onKeyDownCapture:a=>a.preventDefault(),children:t.jsx(u,{label:"Preempted Managed Key Menu",items:[{key:"run",label:"Run",onSelect:()=>e(a=>a+1)},{key:"archive",label:"Archive"}]})})]})})}const F={render:()=>t.jsx($n,{}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Preempted Managed Key Menu"});l.keyDown(a,{key:"ArrowDown"}),await n(e.queryByRole("menu",{name:"Preempted Managed Key Menu"})).toBeNull(),await r.click(a);const s=e.getByRole("menu",{name:"Preempted Managed Key Menu"}),c=e.getByRole("menuitem",{name:"Run"});await n(c).toHaveFocus(),l.keyDown(s,{key:"ArrowDown"}),await n(c).toHaveFocus(),l.keyDown(c,{key:"Enter"}),await n(e.getByTestId("dropdown-managed-key-select-count")).toHaveTextContent("0"),await n(e.getByRole("menu",{name:"Preempted Managed Key Menu"})).toBeInTheDocument()}};function Jn(){const[o,e]=m.useState(!1),[a,s]=m.useState(0),[c,d]=m.useState("none");return t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:g,children:a})]}),t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:g,children:c})]}),t.jsx(u,{label:"Repeat Escape Menu",open:o,onOpenChange:e,onEscapeKeyDown:()=>s(v=>v+1),onCloseReason:d,items:p})]})})}const j={render:()=>t.jsx(Jn,{}),play:async({canvasElement:o})=>{const e=i(o),a=o.ownerDocument,s=await e.findByRole("button",{name:"Repeat Escape Menu"});await r.click(s),await n(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),l.keyDown(a,{key:"Escape",repeat:!0}),await n(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function _n(){const[o,e]=m.useState("none"),a=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return t.jsxs(y,{gap:8,children:[t.jsxs("p",{style:w,children:["Selected action:"," ",t.jsx("strong",{"data-testid":"dropdown-selected-action",style:g,children:o})]}),t.jsx(u,{label:"Release Actions",items:a})]})}const M={render:()=>t.jsx(_n,{}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Release Actions"});await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await r.click(a);const s=e.getByRole("menu");await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"),await n(a).not.toHaveAttribute("aria-keyshortcuts");const c=e.getByRole("menuitem",{name:"Duplicate"}),d=e.getByRole("menuitem",{name:"Archive"});await n(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(d).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{End}");const v=e.getByRole("menuitem",{name:"Delete"});await n(v).toHaveFocus(),l.keyDown(v,{key:"Enter",ctrlKey:!0}),await n(e.getByRole("menu")).toBeInTheDocument(),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),l.keyDown(v,{key:"Enter",repeat:!0}),await n(e.getByRole("menu")).toBeInTheDocument(),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await r.keyboard("{Enter}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),a.focus(),await r.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{Escape}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),a.focus(),await r.keyboard("{ArrowUp}"),await n(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus()}},P={args:{label:"Modifier Arrow Guard",items:p},play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Modifier Arrow Guard"});await r.click(a);const s=e.getByRole("menu",{name:"Modifier Arrow Guard"}),c=e.getByRole("menuitem",{name:"Duplicate"});await n(c).toHaveFocus(),l.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),l.keyDown(s,{key:"ArrowUp",metaKey:!0}),l.keyDown(s,{key:"ArrowDown",altKey:!0}),await n(c).toHaveFocus(),await n(s).toBeInTheDocument(),await r.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus()}};function zn(){const[o,e]=m.useState(0),[a,s]=m.useState(0);return t.jsxs(y,{gap:8,children:[t.jsxs("p",{style:w,children:["Selection calls:"," ",t.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-selection-count",style:g,children:o})]}),t.jsxs("p",{style:w,children:["Item-close reasons:"," ",t.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-close-count",style:g,children:a})]}),t.jsx(u,{open:!0,label:"Keyboard Dedupe Menu",onOpenChange:()=>{},onCloseReason:c=>{c==="item-select"&&s(d=>d+1)},items:[{key:"run",label:"Run",onSelect:()=>{e(c=>c+1)}},{key:"archive",label:"Archive"}]})]})}const O={render:()=>t.jsx(zn,{}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("menuitem",{name:"Run"});l.keyDown(a,{key:"Enter"}),await X(()=>{n(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),n(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")}),l.click(a,{detail:0}),await X(()=>{n(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),n(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")})}};function Wn(){const[o,e]=m.useState("none"),[a,s]=m.useState("none");return t.jsx(y,{gap:8,children:t.jsxs("div",{style:B,children:[t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-close-reason",style:g,children:o})]}),t.jsxs("p",{style:w,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dropdown-close-trace",style:g,children:a})]}),t.jsx(u,{label:"Telemetry Menu",onOpenChange:c=>{c||s(d=>`${d} -> open:false`)},onCloseReason:c=>{e(c),s(d=>d==="select"?`select -> reason:${c}`:`reason:${c}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{s("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",children:"Outside target"})]})})}const K={render:()=>t.jsx(Wn,{}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Telemetry Menu"}),s=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await r.click(a),await r.click(e.getByRole("menuitem",{name:"Duplicate"})),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await r.click(a),await r.keyboard("{Escape}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(a),s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("menu",{name:"Telemetry Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await r.click(s),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await r.click(a),await r.click(a),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await r.click(a),await r.keyboard("{Tab}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await n(s).toHaveFocus()}};function Xn(){const[o,e]=m.useState(!0),[a,s]=m.useState(!1),[c,d]=m.useState(0),[v,qn]=m.useState("none");return t.jsx(y,{gap:8,children:t.jsxs("div",{style:B,children:[t.jsxs("p",{style:w,children:["Close requests:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:g,children:c})]}),t.jsxs("p",{style:w,children:["Pending parent close:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:g,children:a?"yes":"no"})]}),t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:g,children:v})]}),t.jsx(u,{label:"Controlled Contract Menu",open:o,onOpenChange:Nn=>{if(Nn){e(!0),s(!1);return}a||(d(Gn=>Gn+1),s(!0))},onCloseReason:qn,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",onClick:()=>{e(!1),s(!1)},children:"Apply close request"})]})})}const L={render:()=>t.jsx(Xn,{}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Controlled Contract Menu"}),s=e.getByRole("button",{name:"Apply close request"});await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await r.click(s),await n(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await r.click(s),await n(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},q={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Quick Actions"});await r.click(a);const s=e.getByRole("menu");await r.keyboard("{PageDown}"),await n(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await r.keyboard("{PageUp}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await r.keyboard("res"),await n(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await n(s).toBeInTheDocument()}},N={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"IME Typeahead Guard"});await r.click(a);const s=e.getByRole("menu");await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),l.keyDown(s,{key:"a",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),Vn(s,"a"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},G={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"All Disabled Keyboard"});await r.click(a),await n(e.getByRole("menu",{name:"All Disabled Keyboard"})).toHaveFocus(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"All Disabled Keyboard"})).not.toBeInTheDocument(),await n(a).toHaveFocus(),await r.keyboard("{ArrowDown}");const s=e.getByRole("menu",{name:"All Disabled Keyboard"});await n(s).toHaveFocus(),await n(s).toHaveAttribute("tabindex","-1"),await n(s).toHaveAttribute("aria-keyshortcuts","Tab Escape");const c=e.getAllByRole("menuitem");c.forEach(v=>{n(v).toHaveAttribute("aria-disabled","true"),n(v).toHaveAttribute("tabindex","-1")}),l.keyDown(s,{key:"ArrowDown"}),l.keyDown(s,{key:"ArrowUp"}),l.keyDown(s,{key:"Home"}),l.keyDown(s,{key:"End"}),l.keyDown(s,{key:"PageDown"}),l.keyDown(s,{key:"PageUp"}),l.keyDown(s,{key:"Enter"}),await n(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),c.forEach(v=>{n(v).toHaveAttribute("tabindex","-1")});const d=new KeyboardEvent("keydown",{key:"ArrowDown",bubbles:!0,cancelable:!0});s.dispatchEvent(d),await n(d.defaultPrevented).toBe(!1),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"All Disabled Keyboard"})).not.toBeInTheDocument(),await n(a).toHaveFocus(),await r.keyboard("{ArrowUp}"),await n(e.getByRole("menu",{name:"All Disabled Keyboard"})).toHaveFocus()}},V={args:{label:"Single Actionable Keyboard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0}]},play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Single Actionable Keyboard"});await r.click(a);const s=e.getByRole("menu",{name:"Single Actionable Keyboard"});await n(s).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),l.keyDown(s,{key:"ArrowDown"}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(e.getByRole("menuitem",{name:"Archive"})).not.toHaveAttribute("aria-keyshortcuts");const c=new KeyboardEvent("keydown",{key:"Home",bubbles:!0,cancelable:!0});s.dispatchEvent(c),await n(c.defaultPrevented).toBe(!1)}},U={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(u,{label:"Focus Policy",items:p}),t.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Focus Policy"});await r.click(a),await n(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const s=e.getByRole("button",{name:"Next Focus Target"});await r.click(s),await n(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await n(s).toHaveFocus()}},Q={render:()=>t.jsx(y,{gap:12,children:t.jsx("div",{style:b,children:t.jsx(u,{label:"Escape Focus Policy",items:p})})}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Escape Focus Policy"});await r.click(a),await n(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await n(a).toHaveFocus()}},$={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(u,{label:"Tab Flow Menu",items:p}),t.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Tab Flow Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Tab}"),await n(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},J={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx("button",{type:"button",children:"Before Menu Control"}),t.jsx(u,{label:"Shift+Tab Flow Menu",items:p})]})}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Shift+Tab Flow Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Shift+Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("menu",{name:"Shift+Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Before Menu Control"})).toHaveFocus()}},_={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(u,{label:"Tab Skip Menu",items:p}),t.jsx("button",{type:"button",style:{display:"none"},children:"Hidden Menu Candidate"}),t.jsx("div",{inert:!0,children:t.jsx("button",{type:"button",children:"Inert Menu Candidate"})}),t.jsx("button",{type:"button",children:"Visible Menu Candidate"})]})}),play:async({canvasElement:o})=>{const e=i(o),a=await e.findByRole("button",{name:"Tab Skip Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Tab Skip Menu"})).toBeInTheDocument(),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("{Tab}"),await X(()=>{n(e.queryByRole("menu",{name:"Tab Skip Menu"})).not.toBeInTheDocument()}),await n(e.getByRole("button",{name:"Visible Menu Candidate"})).toHaveFocus()}},z={render:()=>t.jsx(y,{gap:8,children:t.jsx(Kn,{triggerLabel:"Open container",children:t.jsxs("div",{style:B,children:[t.jsx("p",{style:Ln,children:"Popover shell"}),t.jsx(u,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:o})=>{const e=i(o);await r.click(await e.findByRole("button",{name:"Open container"})),await r.click(e.getByRole("button",{name:"Inner actions"})),await n(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};function Yn(){const[o,e]=m.useState("none"),a=s=>{e(c=>c==="none"?s:`${c} -> ${s}`)};return t.jsx(y,{gap:8,children:t.jsxs("div",{style:B,children:[t.jsx(Kn,{triggerLabel:"Open outside-order container",contentLabel:"Outside-order popover content",onCloseReason:s=>a(`popover:reason:${s}`),onOpenChange:s=>{s||a("popover:open:false")},children:t.jsxs("div",{style:B,children:[t.jsx("p",{style:Ln,children:"Outside pointer should dismiss inner layer first."}),t.jsx(u,{label:"Inner outside-order menu",onCloseReason:s=>a(`dropdown:reason:${s}`),onOpenChange:s=>{s||a("dropdown:open:false")},items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),t.jsx("button",{type:"button",children:"Outside order target"}),t.jsxs("p",{style:w,children:["Nested close trace:"," ",t.jsx("strong",{"data-testid":"dropdown-nested-outside-trace",style:g,children:o})]})]})})}const W={render:()=>t.jsx(Yn,{}),play:async({canvasElement:o})=>{const e=i(o);await r.click(await e.findByRole("button",{name:"Open outside-order container"})),await r.click(e.getByRole("button",{name:"Inner outside-order menu"})),await n(e.getByRole("menu",{name:"Inner outside-order menu"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside order target"})),await n(e.queryByRole("menu",{name:"Inner outside-order menu"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false"),await r.click(e.getByRole("button",{name:"Outside order target"})),await n(e.queryByRole("dialog",{name:"Outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false")}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,se,re;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ce,ie,le;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ue,me;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,pe,we;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    label: <span aria-hidden>⋯</span>,
    items
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Open menu"
    });
    await expect(trigger).toHaveAttribute("aria-label", "Open menu");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Open menu"
    })).toBeInTheDocument();
  }
}`,...(we=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:we.source}}};var ge,ve,be;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Be,he,ke;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    label: "TextValue item names",
    items: [{
      key: "settings",
      label: <span aria-hidden="true">⚙</span>,
      textValue: "Settings"
    }, {
      key: "archive",
      label: <span aria-hidden="true">🗄</span>,
      textValue: "Archive"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "TextValue item names"
    }));
    const menu = canvas.getByRole("menu", {
      name: "TextValue item names"
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
}`,...(ke=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var xe,Te,De;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: "AriaLabel typeahead",
    items: [{
      key: "settings",
      label: <span aria-hidden="true">⚙</span>,
      ariaLabel: "Settings"
    }, {
      key: "archive",
      label: <span aria-hidden="true">🗄</span>,
      ariaLabel: "Archive"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "AriaLabel typeahead"
    }));
    const menu = canvas.getByRole("menu", {
      name: "AriaLabel typeahead"
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
}`,...(De=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Re,Ee,Ie;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Ae,He,fe;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(fe=(He=f.parameters)==null?void 0:He.docs)==null?void 0:fe.source}}};var Ce,Se,Fe;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var je,Me,Pe;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Pe=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Oe,Ke,Le;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Preempted Managed Key Menu"
    });
    fireEvent.keyDown(trigger, {
      key: "ArrowDown"
    });
    await expect(canvas.queryByRole("menu", {
      name: "Preempted Managed Key Menu"
    })).toBeNull();
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", {
      name: "Preempted Managed Key Menu"
    });
    const runItem = canvas.getByRole("menuitem", {
      name: "Run"
    });
    await expect(runItem).toHaveFocus();
    fireEvent.keyDown(menu, {
      key: "ArrowDown"
    });
    await expect(runItem).toHaveFocus();
    fireEvent.keyDown(runItem, {
      key: "Enter"
    });
    await expect(canvas.getByTestId("dropdown-managed-key-select-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("menu", {
      name: "Preempted Managed Key Menu"
    })).toBeInTheDocument();
  }
}`,...(Le=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var qe,Ne,Ge;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ge=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:Ge.source}}};var Ve,Ue,Qe;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Qe=(Ue=M.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var $e,Je,_e;P.parameters={...P.parameters,docs:{...($e=P.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(_e=(Je=P.parameters)==null?void 0:Je.docs)==null?void 0:_e.source}}};var ze,We,Xe;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Xe=(We=O.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(en=(Ze=K.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,an;L.parameters={...L.parameters,docs:{...(nn=L.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(an=(tn=L.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var on,sn,rn;q.parameters={...q.parameters,docs:{...(on=q.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(sn=q.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var cn,ln,dn;N.parameters={...N.parameters,docs:{...(cn=N.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(dn=(ln=N.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var un,mn,yn;G.parameters={...G.parameters,docs:{...(un=G.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("menu", {
      name: "All Disabled Keyboard"
    })).toHaveFocus();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", {
      name: "All Disabled Keyboard"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard("{ArrowDown}");
    const menu = canvas.getByRole("menu", {
      name: "All Disabled Keyboard"
    });
    await expect(menu).toHaveFocus();
    await expect(menu).toHaveAttribute("tabindex", "-1");
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
    const blockedArrowDown = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: true,
      cancelable: true
    });
    menu.dispatchEvent(blockedArrowDown);
    await expect(blockedArrowDown.defaultPrevented).toBe(false);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", {
      name: "All Disabled Keyboard"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard("{ArrowUp}");
    await expect(canvas.getByRole("menu", {
      name: "All Disabled Keyboard"
    })).toHaveFocus();
  }
}`,...(yn=(mn=G.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};var pn,wn,gn;V.parameters={...V.parameters,docs:{...(pn=V.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
    const unhandledHome = new KeyboardEvent("keydown", {
      key: "Home",
      bubbles: true,
      cancelable: true
    });
    menu.dispatchEvent(unhandledHome);
    await expect(unhandledHome.defaultPrevented).toBe(false);
  }
}`,...(gn=(wn=V.parameters)==null?void 0:wn.docs)==null?void 0:gn.source}}};var vn,bn,Bn;U.parameters={...U.parameters,docs:{...(vn=U.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(Bn=(bn=U.parameters)==null?void 0:bn.docs)==null?void 0:Bn.source}}};var hn,kn,xn;Q.parameters={...Q.parameters,docs:{...(hn=Q.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(xn=(kn=Q.parameters)==null?void 0:kn.docs)==null?void 0:xn.source}}};var Tn,Dn,Rn;$.parameters={...$.parameters,docs:{...(Tn=$.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Rn=(Dn=$.parameters)==null?void 0:Dn.docs)==null?void 0:Rn.source}}};var En,In,An;J.parameters={...J.parameters,docs:{...(En=J.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(An=(In=J.parameters)==null?void 0:In.docs)==null?void 0:An.source}}};var Hn,fn,Cn;_.parameters={..._.parameters,docs:{...(Hn=_.parameters)==null?void 0:Hn.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Tab Skip Menu" items={items} />
        <button type="button" style={{
        display: "none"
      }}>
          Hidden Menu Candidate
        </button>
        <div inert={true}>
          <button type="button">Inert Menu Candidate</button>
        </div>
        <button type="button">Visible Menu Candidate</button>
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Tab Skip Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Tab Skip Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await waitFor(() => {
      expect(canvas.queryByRole("menu", {
        name: "Tab Skip Menu"
      })).not.toBeInTheDocument();
    });
    await expect(canvas.getByRole("button", {
      name: "Visible Menu Candidate"
    })).toHaveFocus();
  }
}`,...(Cn=(fn=_.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var Sn,Fn,jn;z.parameters={...z.parameters,docs:{...(Sn=z.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(jn=(Fn=z.parameters)==null?void 0:Fn.docs)==null?void 0:jn.source}}};var Mn,Pn,On;W.parameters={...W.parameters,docs:{...(Mn=W.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(On=(Pn=W.parameters)==null?void 0:Pn.docs)==null?void 0:On.source}}};const it=["Default","DenseActions","IconTrigger","TriggerLabelledByPrecedence","NonTextTriggerNameFallback","NonTextTriggerAutoNameFallback","IconItemNaming","IconItemTextValueNameFallback","IconItemAriaLabelTypeahead","IconItemLabelledByPrecedence","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","ModifierArrowNavigationGuard","KeyboardActivationDedupe","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","SingleActionableShortcutHints","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","ShiftTabDismissToPreviousControl","TabDismissSkipsUnfocusableCandidates","NestedDismissOrder","NestedOutsideDismissOrder"];export{G as AllItemsDisabledKeyboardNoop,K as CloseReasonTelemetry,L as ControlledOpenContract,h as Default,k as DenseActions,C as DismissGuardHooks,Q as EscapeDismissFocusReturn,S as EscapePreemptedByGlobalHandler,j as EscapeRepeatGuard,A as IconItemAriaLabelTypeahead,H as IconItemLabelledByPrecedence,E as IconItemNaming,I as IconItemTextValueNameFallback,x as IconTrigger,O as KeyboardActivationDedupe,F as ManagedKeysPreemptedByGlobalHandler,P as ModifierArrowNavigationGuard,z as NestedDismissOrder,W as NestedOutsideDismissOrder,f as NonDismissible,R as NonTextTriggerAutoNameFallback,D as NonTextTriggerNameFallback,U as OutsideDismissFocusTransfer,M as SelectionTelemetry,J as ShiftTabDismissToPreviousControl,V as SingleActionableShortcutHints,_ as TabDismissSkipsUnfocusableCandidates,$ as TabDismissToNextControl,T as TriggerLabelledByPrecedence,N as TypeaheadIgnoresImeComposition,q as TypeaheadNavigation,it as __namedExportsOrder,ct as default};
