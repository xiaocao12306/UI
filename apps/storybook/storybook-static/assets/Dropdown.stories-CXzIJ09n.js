import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BWu4c2F4.js";import{P as Tn}from"./Popover-v9qgIDyK.js";import{D as u}from"./Dropdown-C_XIgq4B.js";import{within as i,userEvent as r,expect as n,fireEvent as d,waitFor as J}from"./index-DgAF9SIF.js";import{S as p,s as w,a as g}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-0MVldSzJ.js";import"./Button-DirECuRH.js";const y=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],Vn={title:"Overlay/Dropdown",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:y}},v={display:"grid",gap:12,justifyItems:"start"},B={display:"grid",gap:8,justifyItems:"start"},xn={margin:0};function In(s,e){const a=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),s.dispatchEvent(a)}const h={},k={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},T={args:{label:"⋯",triggerAriaLabel:"More actions",items:y},play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"More actions"})),await n(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},x={render:()=>t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("h3",{id:"dropdown-heading",style:{margin:0},children:"Release actions menu"}),t.jsx(u,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Fallback release actions",triggerAriaLabelledBy:"dropdown-heading",items:y})]}),play:async({canvasElement:s})=>{const e=i(s.ownerDocument.body),a=await e.findByRole("button",{name:"Release actions menu"});await n(a).toHaveAttribute("aria-labelledby","dropdown-heading"),await n(a).not.toHaveAttribute("aria-label"),await r.click(a),await n(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument()}},D={render:()=>t.jsxs(p,{gap:12,children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("h3",{id:"dropdown-trigger-name-heading",style:{margin:0},children:"Release actions menu"}),t.jsx(u,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabelledBy:"dropdown-trigger-name-heading",items:y})]}),t.jsx(u,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Quick actions",items:y})]}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Release actions menu"}),o=e.getByRole("button",{name:"Quick actions"});await n(a).toHaveAttribute("aria-labelledby","dropdown-trigger-name-heading"),await n(a).not.toHaveAttribute("aria-label"),await n(o).toHaveAttribute("aria-label","Quick actions"),await r.click(a),await n(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await r.click(o),await n(e.getByRole("menu",{name:"Quick actions"})).toBeInTheDocument()}},R={args:{label:"Icon items",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menu",{name:"Icon items"});await n(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await n(a).toBeInTheDocument()}},E={render:()=>t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("h3",{id:"dropdown-item-heading",style:{margin:0},children:"Settings action"}),t.jsx(u,{label:"Icon items",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Fallback settings label",ariaLabelledBy:"dropdown-item-heading",textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]})]}),play:async({canvasElement:s})=>{const e=i(s.ownerDocument.body);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menuitem",{name:"Settings action"});await n(a).toHaveAttribute("aria-labelledby","dropdown-item-heading"),await n(a).not.toHaveAttribute("aria-label")}},I={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:y},render:s=>t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsx(u,{...s}),t.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Blocking actions"});await r.click(a);const o=e.getByRole("menu",{name:"Blocking actions"});await n(o).toBeInTheDocument(),await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab"),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function Cn(){const[s,e]=m.useState(0),[a,o]=m.useState(0);return t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsxs("p",{style:w,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:g,children:s})]}),t.jsxs("p",{style:w,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:g,children:a})]}),t.jsx(u,{label:"Guarded menu",onEscapeKeyDown:c=>{c.preventDefault(),e(l=>l+1)},onPointerDownOutside:c=>{c.preventDefault(),o(l=>l+1)},items:y}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const C={render:()=>t.jsx(Cn,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Guarded menu"}),o=e.getByRole("button",{name:"Guarded outside target"});await r.click(a),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await r.click(o),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function Hn(){const[s,e]=m.useState(!1),[a,o]=m.useState(0);return m.useEffect(()=>{const c=l=>{l.key==="Escape"&&l.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsxs("p",{style:w,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-escape-calls",style:g,children:a})]}),t.jsx(u,{label:"Preempted Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>o(c=>c+1),items:y})]})})}const H={render:()=>t.jsx(Hn,{}),play:async({canvasElement:s})=>{const e=i(s),a=s.ownerDocument,o=await e.findByRole("button",{name:"Preempted Escape Menu"});await r.click(o),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),d.keyDown(a,{key:"Escape",ctrlKey:!0}),d.keyDown(a,{key:"Escape",altKey:!0}),d.keyDown(a,{key:"Escape",metaKey:!0}),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function An(){const[s,e]=m.useState(!1),[a,o]=m.useState(0),[c,l]=m.useState("none");return t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsxs("p",{style:w,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:g,children:a})]}),t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:g,children:c})]}),t.jsx(u,{label:"Repeat Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>o(b=>b+1),onCloseReason:l,items:y})]})})}const A={render:()=>t.jsx(An,{}),play:async({canvasElement:s})=>{const e=i(s),a=s.ownerDocument,o=await e.findByRole("button",{name:"Repeat Escape Menu"});await r.click(o),await n(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),d.keyDown(a,{key:"Escape",repeat:!0}),await n(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function fn(){const[s,e]=m.useState("none"),a=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return t.jsxs(p,{gap:8,children:[t.jsxs("p",{style:w,children:["Selected action:"," ",t.jsx("strong",{"data-testid":"dropdown-selected-action",style:g,children:s})]}),t.jsx(u,{label:"Release Actions",items:a})]})}const f={render:()=>t.jsx(fn,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Release Actions"});await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await r.click(a);const o=e.getByRole("menu");await n(o).toBeInTheDocument(),await n(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"),await n(a).not.toHaveAttribute("aria-keyshortcuts");const c=e.getByRole("menuitem",{name:"Duplicate"}),l=e.getByRole("menuitem",{name:"Archive"});await n(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(l).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{End}");const b=e.getByRole("menuitem",{name:"Delete"});await n(b).toHaveFocus(),d.keyDown(b,{key:"Enter",ctrlKey:!0}),await n(e.getByRole("menu")).toBeInTheDocument(),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),d.keyDown(b,{key:"Enter",repeat:!0}),await n(e.getByRole("menu")).toBeInTheDocument(),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await r.keyboard("{Enter}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),a.focus(),await r.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{Escape}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),a.focus(),await r.keyboard("{ArrowUp}"),await n(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus()}},S={args:{label:"Modifier Arrow Guard",items:y},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Modifier Arrow Guard"});await r.click(a);const o=e.getByRole("menu",{name:"Modifier Arrow Guard"}),c=e.getByRole("menuitem",{name:"Duplicate"});await n(c).toHaveFocus(),d.keyDown(o,{key:"ArrowDown",ctrlKey:!0}),d.keyDown(o,{key:"ArrowUp",metaKey:!0}),d.keyDown(o,{key:"ArrowDown",altKey:!0}),await n(c).toHaveFocus(),await n(o).toBeInTheDocument(),await r.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus()}};function Sn(){const[s,e]=m.useState(0),[a,o]=m.useState(0);return t.jsxs(p,{gap:8,children:[t.jsxs("p",{style:w,children:["Selection calls:"," ",t.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-selection-count",style:g,children:s})]}),t.jsxs("p",{style:w,children:["Item-close reasons:"," ",t.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-close-count",style:g,children:a})]}),t.jsx(u,{open:!0,label:"Keyboard Dedupe Menu",onOpenChange:()=>{},onCloseReason:c=>{c==="item-select"&&o(l=>l+1)},items:[{key:"run",label:"Run",onSelect:()=>{e(c=>c+1)}},{key:"archive",label:"Archive"}]})]})}const j={render:()=>t.jsx(Sn,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("menuitem",{name:"Run"});d.keyDown(a,{key:"Enter"}),await J(()=>{n(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),n(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")}),d.click(a,{detail:0}),await J(()=>{n(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),n(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")})}};function jn(){const[s,e]=m.useState("none"),[a,o]=m.useState("none");return t.jsx(p,{gap:8,children:t.jsxs("div",{style:B,children:[t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-close-reason",style:g,children:s})]}),t.jsxs("p",{style:w,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dropdown-close-trace",style:g,children:a})]}),t.jsx(u,{label:"Telemetry Menu",onOpenChange:c=>{c||o(l=>`${l} -> open:false`)},onCloseReason:c=>{e(c),o(l=>l==="select"?`select -> reason:${c}`:`reason:${c}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{o("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",children:"Outside target"})]})})}const F={render:()=>t.jsx(jn,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Telemetry Menu"}),o=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await r.click(a),await r.click(e.getByRole("menuitem",{name:"Duplicate"})),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await r.click(a),await r.keyboard("{Escape}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(a),o.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("menu",{name:"Telemetry Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await r.click(o),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await r.click(a),await r.click(a),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await r.click(a),await r.keyboard("{Tab}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await n(o).toHaveFocus()}};function Fn(){const[s,e]=m.useState(!0),[a,o]=m.useState(!1),[c,l]=m.useState(0),[b,Dn]=m.useState("none");return t.jsx(p,{gap:8,children:t.jsxs("div",{style:B,children:[t.jsxs("p",{style:w,children:["Close requests:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:g,children:c})]}),t.jsxs("p",{style:w,children:["Pending parent close:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:g,children:a?"yes":"no"})]}),t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:g,children:b})]}),t.jsx(u,{label:"Controlled Contract Menu",open:s,onOpenChange:Rn=>{if(Rn){e(!0),o(!1);return}a||(l(En=>En+1),o(!0))},onCloseReason:Dn,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",onClick:()=>{e(!1),o(!1)},children:"Apply close request"})]})})}const M={render:()=>t.jsx(Fn,{}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Controlled Contract Menu"}),o=e.getByRole("button",{name:"Apply close request"});await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await r.click(o),await n(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await r.click(o),await n(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},P={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Quick Actions"});await r.click(a);const o=e.getByRole("menu");await r.keyboard("{PageDown}"),await n(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await r.keyboard("{PageUp}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await r.keyboard("res"),await n(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await n(o).toBeInTheDocument()}},O={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"IME Typeahead Guard"});await r.click(a);const o=e.getByRole("menu");await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),d.keyDown(o,{key:"a",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),In(o,"a"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},K={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"All Disabled Keyboard"});await r.click(a);const o=e.getByRole("menu",{name:"All Disabled Keyboard"});await n(o).toHaveAttribute("aria-keyshortcuts","Tab Escape");const c=e.getAllByRole("menuitem");c.forEach(l=>{n(l).toHaveAttribute("aria-disabled","true"),n(l).toHaveAttribute("tabindex","-1")}),d.keyDown(o,{key:"ArrowDown"}),d.keyDown(o,{key:"ArrowUp"}),d.keyDown(o,{key:"Home"}),d.keyDown(o,{key:"End"}),d.keyDown(o,{key:"PageDown"}),d.keyDown(o,{key:"PageUp"}),d.keyDown(o,{key:"Enter"}),await n(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),c.forEach(l=>{n(l).toHaveAttribute("tabindex","-1")})}},L={args:{label:"Single Actionable Keyboard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0}]},play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Single Actionable Keyboard"});await r.click(a);const o=e.getByRole("menu",{name:"Single Actionable Keyboard"});await n(o).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),d.keyDown(o,{key:"ArrowDown"}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(e.getByRole("menuitem",{name:"Archive"})).not.toHaveAttribute("aria-keyshortcuts")}},q={render:()=>t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsx(u,{label:"Focus Policy",items:y}),t.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Focus Policy"});await r.click(a),await n(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const o=e.getByRole("button",{name:"Next Focus Target"});await r.click(o),await n(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await n(o).toHaveFocus()}},G={render:()=>t.jsx(p,{gap:12,children:t.jsx("div",{style:v,children:t.jsx(u,{label:"Escape Focus Policy",items:y})})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Escape Focus Policy"});await r.click(a),await n(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await n(a).toHaveFocus()}},N={render:()=>t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsx(u,{label:"Tab Flow Menu",items:y}),t.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Tab Flow Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Tab}"),await n(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},U={render:()=>t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsx("button",{type:"button",children:"Before Menu Control"}),t.jsx(u,{label:"Shift+Tab Flow Menu",items:y})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Shift+Tab Flow Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Shift+Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("menu",{name:"Shift+Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Before Menu Control"})).toHaveFocus()}},V={render:()=>t.jsx(p,{gap:12,children:t.jsxs("div",{style:v,children:[t.jsx(u,{label:"Tab Skip Menu",items:y}),t.jsx("button",{type:"button",style:{display:"none"},children:"Hidden Menu Candidate"}),t.jsx("div",{inert:!0,children:t.jsx("button",{type:"button",children:"Inert Menu Candidate"})}),t.jsx("button",{type:"button",children:"Visible Menu Candidate"})]})}),play:async({canvasElement:s})=>{const e=i(s),a=await e.findByRole("button",{name:"Tab Skip Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Tab Skip Menu"})).toBeInTheDocument(),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("{Tab}"),await J(()=>{n(e.queryByRole("menu",{name:"Tab Skip Menu"})).not.toBeInTheDocument()}),await n(e.getByRole("button",{name:"Visible Menu Candidate"})).toHaveFocus()}},Q={render:()=>t.jsx(p,{gap:8,children:t.jsx(Tn,{triggerLabel:"Open container",children:t.jsxs("div",{style:B,children:[t.jsx("p",{style:xn,children:"Popover shell"}),t.jsx(u,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"Open container"})),await r.click(e.getByRole("button",{name:"Inner actions"})),await n(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};function Mn(){const[s,e]=m.useState("none"),a=o=>{e(c=>c==="none"?o:`${c} -> ${o}`)};return t.jsx(p,{gap:8,children:t.jsxs("div",{style:B,children:[t.jsx(Tn,{triggerLabel:"Open outside-order container",contentLabel:"Outside-order popover content",onCloseReason:o=>a(`popover:reason:${o}`),onOpenChange:o=>{o||a("popover:open:false")},children:t.jsxs("div",{style:B,children:[t.jsx("p",{style:xn,children:"Outside pointer should dismiss inner layer first."}),t.jsx(u,{label:"Inner outside-order menu",onCloseReason:o=>a(`dropdown:reason:${o}`),onOpenChange:o=>{o||a("dropdown:open:false")},items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),t.jsx("button",{type:"button",children:"Outside order target"}),t.jsxs("p",{style:w,children:["Nested close trace:"," ",t.jsx("strong",{"data-testid":"dropdown-nested-outside-trace",style:g,children:s})]})]})})}const $={render:()=>t.jsx(Mn,{}),play:async({canvasElement:s})=>{const e=i(s);await r.click(await e.findByRole("button",{name:"Open outside-order container"})),await r.click(e.getByRole("button",{name:"Inner outside-order menu"})),await n(e.getByRole("menu",{name:"Inner outside-order menu"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside order target"})),await n(e.queryByRole("menu",{name:"Inner outside-order menu"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false"),await r.click(e.getByRole("button",{name:"Outside order target"})),await n(e.queryByRole("dialog",{name:"Outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false")}};var _,z,W;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(W=(z=h.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,oe,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ce,ie;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,de,ue;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ye;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var we,ge,ve;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,Be,he;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(Be=C.parameters)==null?void 0:Be.docs)==null?void 0:he.source}}};var ke,Te,xe;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(xe=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var De,Re,Ee;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Ie,Ce,He;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(He=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var Ae,fe,Se;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Se=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var je,Fe,Me;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Me=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Pe,Oe,Ke;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ke=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Ke.source}}};var Le,qe,Ge;M.parameters={...M.parameters,docs:{...(Le=M.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ge=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};var Ne,Ue,Ve;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ve=(Ue=P.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var Qe,$e,Je;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Je=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var _e,ze,We;K.parameters={...K.parameters,docs:{...(_e=K.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(We=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var Xe,Ye,Ze;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,tn;q.parameters={...q.parameters,docs:{...(en=q.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(tn=(nn=q.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,on,sn;G.parameters={...G.parameters,docs:{...(an=G.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(sn=(on=G.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,ln;N.parameters={...N.parameters,docs:{...(rn=N.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(ln=(cn=N.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var dn,un,mn;U.parameters={...U.parameters,docs:{...(dn=U.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(mn=(un=U.parameters)==null?void 0:un.docs)==null?void 0:mn.source}}};var pn,yn,wn;V.parameters={...V.parameters,docs:{...(pn=V.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(wn=(yn=V.parameters)==null?void 0:yn.docs)==null?void 0:wn.source}}};var gn,vn,bn;Q.parameters={...Q.parameters,docs:{...(gn=Q.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(bn=(vn=Q.parameters)==null?void 0:vn.docs)==null?void 0:bn.source}}};var Bn,hn,kn;$.parameters={...$.parameters,docs:{...(Bn=$.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(kn=(hn=$.parameters)==null?void 0:hn.docs)==null?void 0:kn.source}}};const Qn=["Default","DenseActions","IconTrigger","TriggerLabelledByPrecedence","NonTextTriggerNameFallback","IconItemNaming","IconItemLabelledByPrecedence","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","ModifierArrowNavigationGuard","KeyboardActivationDedupe","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","SingleActionableShortcutHints","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","ShiftTabDismissToPreviousControl","TabDismissSkipsUnfocusableCandidates","NestedDismissOrder","NestedOutsideDismissOrder"];export{K as AllItemsDisabledKeyboardNoop,F as CloseReasonTelemetry,M as ControlledOpenContract,h as Default,k as DenseActions,C as DismissGuardHooks,G as EscapeDismissFocusReturn,H as EscapePreemptedByGlobalHandler,A as EscapeRepeatGuard,E as IconItemLabelledByPrecedence,R as IconItemNaming,T as IconTrigger,j as KeyboardActivationDedupe,S as ModifierArrowNavigationGuard,Q as NestedDismissOrder,$ as NestedOutsideDismissOrder,I as NonDismissible,D as NonTextTriggerNameFallback,q as OutsideDismissFocusTransfer,f as SelectionTelemetry,U as ShiftTabDismissToPreviousControl,L as SingleActionableShortcutHints,V as TabDismissSkipsUnfocusableCandidates,N as TabDismissToNextControl,x as TriggerLabelledByPrecedence,O as TypeaheadIgnoresImeComposition,P as TypeaheadNavigation,Qn as __namedExportsOrder,Vn as default};
