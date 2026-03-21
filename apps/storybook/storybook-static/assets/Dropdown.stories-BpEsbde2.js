import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{P as tt}from"./Popover-D_FkSQtk.js";import{D as m}from"./Dropdown-DcpWn204.js";import{within as l,userEvent as r,expect as t,fireEvent as d,waitFor as U}from"./index-DgAF9SIF.js";import{S as w,s as p,a as y}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-CvOMiBFU.js";import"./Button-COG9o64O.js";const g=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],ht={title:"Overlay/Dropdown",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:g}},v={display:"grid",gap:12,justifyItems:"start"},b={display:"grid",gap:8,justifyItems:"start"},nt={margin:0};function rt(s,e){const a=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),s.dispatchEvent(a)}const k={},T={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},x={args:{label:"⋯",triggerAriaLabel:"More actions",items:g},play:async({canvasElement:s})=>{const e=l(s);await r.click(await e.findByRole("button",{name:"More actions"})),await t(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},h={args:{label:"Icon items",items:[{key:"settings",label:n.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:n.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:s})=>{const e=l(s);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menu",{name:"Icon items"});await t(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await t(a).toBeInTheDocument()}},D={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:g},render:s=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(m,{...s}),n.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Blocking actions"});await r.click(a);const o=e.getByRole("menu",{name:"Blocking actions"});await t(o).toBeInTheDocument(),await t(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab"),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside target"})),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function ct(){const[s,e]=u.useState(0),[a,o]=u.useState(0);return n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:p,children:["Escape guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:y,children:s})]}),n.jsxs("p",{style:p,children:["Outside guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:y,children:a})]}),n.jsx(m,{label:"Guarded menu",onEscapeKeyDown:c=>{c.preventDefault(),e(i=>i+1)},onPointerDownOutside:c=>{c.preventDefault(),o(i=>i+1)},items:g}),n.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const R={render:()=>n.jsx(ct,{}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Guarded menu"}),o=e.getByRole("button",{name:"Guarded outside target"});await r.click(a),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await r.click(o),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function it(){const[s,e]=u.useState(!1),[a,o]=u.useState(0);return u.useEffect(()=>{const c=i=>{i.key==="Escape"&&i.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:p,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-escape-calls",style:y,children:a})]}),n.jsx(m,{label:"Preempted Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>o(c=>c+1),items:g})]})})}const E={render:()=>n.jsx(it,{}),play:async({canvasElement:s})=>{const e=l(s),a=s.ownerDocument,o=await e.findByRole("button",{name:"Preempted Escape Menu"});await r.click(o),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),d.keyDown(a,{key:"Escape",ctrlKey:!0}),d.keyDown(a,{key:"Escape",altKey:!0}),d.keyDown(a,{key:"Escape",metaKey:!0}),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function lt(){const[s,e]=u.useState(!1),[a,o]=u.useState(0),[c,i]=u.useState("none");return n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:p,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:y,children:a})]}),n.jsxs("p",{style:p,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:y,children:c})]}),n.jsx(m,{label:"Repeat Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>o(B=>B+1),onCloseReason:i,items:g})]})})}const I={render:()=>n.jsx(lt,{}),play:async({canvasElement:s})=>{const e=l(s),a=s.ownerDocument,o=await e.findByRole("button",{name:"Repeat Escape Menu"});await r.click(o),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),d.keyDown(a,{key:"Escape",repeat:!0}),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await r.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function dt(){const[s,e]=u.useState("none"),a=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return n.jsxs(w,{gap:8,children:[n.jsxs("p",{style:p,children:["Selected action:"," ",n.jsx("strong",{"data-testid":"dropdown-selected-action",style:y,children:s})]}),n.jsx(m,{label:"Release Actions",items:a})]})}const C={render:()=>n.jsx(dt,{}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Release Actions"});await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await t(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await r.click(a);const o=e.getByRole("menu");await t(o).toBeInTheDocument(),await t(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"),await t(a).not.toHaveAttribute("aria-keyshortcuts");const c=e.getByRole("menuitem",{name:"Duplicate"}),i=e.getByRole("menuitem",{name:"Archive"});await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(i).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{End}");const B=e.getByRole("menuitem",{name:"Delete"});await t(B).toHaveFocus(),d.keyDown(B,{key:"Enter",ctrlKey:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),d.keyDown(B,{key:"Enter",repeat:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await r.keyboard("{Enter}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),await t(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),a.focus(),await r.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await t(a).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{Escape}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),a.focus(),await r.keyboard("{ArrowUp}"),await t(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus()}},f={args:{label:"Modifier Arrow Guard",items:g},play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Modifier Arrow Guard"});await r.click(a);const o=e.getByRole("menu",{name:"Modifier Arrow Guard"}),c=e.getByRole("menuitem",{name:"Duplicate"});await t(c).toHaveFocus(),d.keyDown(o,{key:"ArrowDown",ctrlKey:!0}),d.keyDown(o,{key:"ArrowUp",metaKey:!0}),d.keyDown(o,{key:"ArrowDown",altKey:!0}),await t(c).toHaveFocus(),await t(o).toBeInTheDocument(),await r.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus()}};function ut(){const[s,e]=u.useState(0),[a,o]=u.useState(0);return n.jsxs(w,{gap:8,children:[n.jsxs("p",{style:p,children:["Selection calls:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-selection-count",style:y,children:s})]}),n.jsxs("p",{style:p,children:["Item-close reasons:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-close-count",style:y,children:a})]}),n.jsx(m,{open:!0,label:"Keyboard Dedupe Menu",onOpenChange:()=>{},onCloseReason:c=>{c==="item-select"&&o(i=>i+1)},items:[{key:"run",label:"Run",onSelect:()=>{e(c=>c+1)}},{key:"archive",label:"Archive"}]})]})}const H={render:()=>n.jsx(ut,{}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("menuitem",{name:"Run"});d.keyDown(a,{key:"Enter"}),await U(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")}),d.click(a,{detail:0}),await U(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")})}};function mt(){const[s,e]=u.useState("none"),[a,o]=u.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:b,children:[n.jsxs("p",{style:p,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-close-reason",style:y,children:s})]}),n.jsxs("p",{style:p,children:["Last close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-close-trace",style:y,children:a})]}),n.jsx(m,{label:"Telemetry Menu",onOpenChange:c=>{c||o(i=>`${i} -> open:false`)},onCloseReason:c=>{e(c),o(i=>i==="select"?`select -> reason:${c}`:`reason:${c}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{o("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",children:"Outside target"})]})})}const A={render:()=>n.jsx(mt,{}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Telemetry Menu"}),o=e.getByRole("button",{name:"Outside target"});await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await r.click(a),await r.click(e.getByRole("menuitem",{name:"Duplicate"})),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await r.click(a),await r.keyboard("{Escape}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(a),await r.click(o),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await r.click(a),await r.click(a),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await r.click(a),await r.keyboard("{Tab}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await t(o).toHaveFocus()}};function pt(){const[s,e]=u.useState(!0),[a,o]=u.useState(!1),[c,i]=u.useState(0),[B,at]=u.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:b,children:[n.jsxs("p",{style:p,children:["Close requests:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:y,children:c})]}),n.jsxs("p",{style:p,children:["Pending parent close:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:y,children:a?"yes":"no"})]}),n.jsxs("p",{style:p,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:y,children:B})]}),n.jsx(m,{label:"Controlled Contract Menu",open:s,onOpenChange:ot=>{if(ot){e(!0),o(!1);return}a||(i(st=>st+1),o(!0))},onCloseReason:at,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",onClick:()=>{e(!1),o(!1)},children:"Apply close request"})]})})}const S={render:()=>n.jsx(pt,{}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Controlled Contract Menu"}),o=e.getByRole("button",{name:"Apply close request"});await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await r.click(o),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await r.click(o),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},F={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Quick Actions"});await r.click(a);const o=e.getByRole("menu");await r.keyboard("{PageDown}"),await t(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await r.keyboard("{PageUp}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await r.keyboard("res"),await t(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await t(o).toBeInTheDocument()}},j={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"IME Typeahead Guard"});await r.click(a);const o=e.getByRole("menu");await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),d.keyDown(o,{key:"a",isComposing:!0,keyCode:229,which:229}),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),rt(o,"a"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},M={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"All Disabled Keyboard"});await r.click(a);const o=e.getByRole("menu",{name:"All Disabled Keyboard"}),c=e.getAllByRole("menuitem");c.forEach(i=>{t(i).toHaveAttribute("aria-disabled","true"),t(i).toHaveAttribute("tabindex","-1")}),d.keyDown(o,{key:"ArrowDown"}),d.keyDown(o,{key:"ArrowUp"}),d.keyDown(o,{key:"Home"}),d.keyDown(o,{key:"End"}),d.keyDown(o,{key:"PageDown"}),d.keyDown(o,{key:"PageUp"}),d.keyDown(o,{key:"Enter"}),await t(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),c.forEach(i=>{t(i).toHaveAttribute("tabindex","-1")})}},P={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(m,{label:"Focus Policy",items:g}),n.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Focus Policy"});await r.click(a),await t(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const o=e.getByRole("button",{name:"Next Focus Target"});await r.click(o),await t(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await t(o).toHaveFocus()}},O={render:()=>n.jsx(w,{gap:12,children:n.jsx("div",{style:v,children:n.jsx(m,{label:"Escape Focus Policy",items:g})})}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Escape Focus Policy"});await r.click(a),await t(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await t(a).toHaveFocus()}},q={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(m,{label:"Tab Flow Menu",items:g}),n.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Tab Flow Menu"});await r.click(a),await t(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Tab}"),await t(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},K={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx("button",{type:"button",children:"Before Menu Control"}),n.jsx(m,{label:"Shift+Tab Flow Menu",items:g})]})}),play:async({canvasElement:s})=>{const e=l(s),a=await e.findByRole("button",{name:"Shift+Tab Flow Menu"});await r.click(a),await t(e.getByRole("menu",{name:"Shift+Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Shift>}{Tab}{/Shift}"),await t(e.queryByRole("menu",{name:"Shift+Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"Before Menu Control"})).toHaveFocus()}},G={render:()=>n.jsx(w,{gap:8,children:n.jsx(tt,{triggerLabel:"Open container",children:n.jsxs("div",{style:b,children:[n.jsx("p",{style:nt,children:"Popover shell"}),n.jsx(m,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:s})=>{const e=l(s);await r.click(await e.findByRole("button",{name:"Open container"})),await r.click(e.getByRole("button",{name:"Inner actions"})),await t(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};function yt(){const[s,e]=u.useState("none"),a=o=>{e(c=>c==="none"?o:`${c} -> ${o}`)};return n.jsx(w,{gap:8,children:n.jsxs("div",{style:b,children:[n.jsx(tt,{triggerLabel:"Open outside-order container",contentLabel:"Outside-order popover content",onCloseReason:o=>a(`popover:reason:${o}`),onOpenChange:o=>{o||a("popover:open:false")},children:n.jsxs("div",{style:b,children:[n.jsx("p",{style:nt,children:"Outside pointer should dismiss inner layer first."}),n.jsx(m,{label:"Inner outside-order menu",onCloseReason:o=>a(`dropdown:reason:${o}`),onOpenChange:o=>{o||a("dropdown:open:false")},items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),n.jsx("button",{type:"button",children:"Outside order target"}),n.jsxs("p",{style:p,children:["Nested close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-nested-outside-trace",style:y,children:s})]})]})})}const N={render:()=>n.jsx(yt,{}),play:async({canvasElement:s})=>{const e=l(s);await r.click(await e.findByRole("button",{name:"Open outside-order container"})),await r.click(e.getByRole("button",{name:"Inner outside-order menu"})),await t(e.getByRole("menu",{name:"Inner outside-order menu"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside order target"})),await t(e.queryByRole("menu",{name:"Inner outside-order menu"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false"),await r.click(e.getByRole("button",{name:"Outside order target"})),await t(e.queryByRole("dialog",{name:"Outside-order popover content"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false")}};var L,V,$;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...($=(V=k.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var Q,J,_;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(_=(J=T.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var z,W,X;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,re;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=R.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ce,ie,le;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ue,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ye,we;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(we=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ge,ve,Be;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Be=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var be,ke,Te;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var xe,he,De;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(De=(he=A.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var Re,Ee,Ie;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Ce,fe,He;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(He=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:He.source}}};var Ae,Se,Fe;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var je,Me,Pe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Pe=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Oe,qe,Ke;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=P.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ge,Ne,Ue;O.parameters={...O.parameters,docs:{...(Ge=O.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Le,Ve,$e;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...($e=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};var Qe,Je,_e;K.parameters={...K.parameters,docs:{...(Qe=K.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(_e=(Je=K.parameters)==null?void 0:Je.docs)==null?void 0:_e.source}}};var ze,We,Xe;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Xe=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,et;N.parameters={...N.parameters,docs:{...(Ye=N.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(et=(Ze=N.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};const Dt=["Default","DenseActions","IconTrigger","IconItemNaming","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","ModifierArrowNavigationGuard","KeyboardActivationDedupe","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","ShiftTabDismissToPreviousControl","NestedDismissOrder","NestedOutsideDismissOrder"];export{M as AllItemsDisabledKeyboardNoop,A as CloseReasonTelemetry,S as ControlledOpenContract,k as Default,T as DenseActions,R as DismissGuardHooks,O as EscapeDismissFocusReturn,E as EscapePreemptedByGlobalHandler,I as EscapeRepeatGuard,h as IconItemNaming,x as IconTrigger,H as KeyboardActivationDedupe,f as ModifierArrowNavigationGuard,G as NestedDismissOrder,N as NestedOutsideDismissOrder,D as NonDismissible,P as OutsideDismissFocusTransfer,C as SelectionTelemetry,K as ShiftTabDismissToPreviousControl,q as TabDismissToNextControl,j as TypeaheadIgnoresImeComposition,F as TypeaheadNavigation,Dt as __namedExportsOrder,ht as default};
