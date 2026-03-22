import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{P as zn}from"./Popover-CI5AwEb2.js";import{D as d}from"./Dropdown-6geyszt7.js";import{within as l,userEvent as r,expect as n,fireEvent as i,waitFor as B}from"./index-DgAF9SIF.js";import{S as y,s as w,a as g}from"./storyShowcase-DlKirntE.js";import"./focusTabbable-gnwmp6b7.js";import"./Button-B21ouHNm.js";const p=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],ht={title:"Overlay/Dropdown",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:p}},b={display:"grid",gap:12,justifyItems:"start"},k={display:"grid",gap:8,justifyItems:"start"},Xn={margin:0};function Yn(o,e){const a=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),o.dispatchEvent(a)}const h={},T={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},x={args:{label:"⋯",triggerAriaLabel:"More actions",items:p},play:async({canvasElement:o})=>{const e=l(o);await r.click(await e.findByRole("button",{name:"More actions"})),await n(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},D={render:()=>t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("h3",{id:"dropdown-heading",style:{margin:0},children:"Release actions menu"}),t.jsx(d,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Fallback release actions",triggerAriaLabelledBy:"dropdown-heading",items:p})]}),play:async({canvasElement:o})=>{const e=l(o.ownerDocument.body),a=await e.findByRole("button",{name:"Release actions menu"});await n(a).toHaveAttribute("aria-labelledby","dropdown-heading"),await n(a).not.toHaveAttribute("aria-label"),await r.click(a),await n(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument()}},R={render:()=>t.jsxs(y,{gap:12,children:[t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("h3",{id:"dropdown-trigger-name-heading",style:{margin:0},children:"Release actions menu"}),t.jsx(d,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabelledBy:"dropdown-trigger-name-heading",items:p})]}),t.jsx(d,{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),triggerAriaLabel:"Quick actions",items:p})]}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Release actions menu"}),s=e.getByRole("button",{name:"Quick actions"});await n(a).toHaveAttribute("aria-labelledby","dropdown-trigger-name-heading"),await n(a).not.toHaveAttribute("aria-label"),await n(s).toHaveAttribute("aria-label","Quick actions"),await r.click(a),await n(e.getByRole("menu",{name:"Release actions menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await r.click(s),await n(e.getByRole("menu",{name:"Quick actions"})).toBeInTheDocument()}},E={args:{label:t.jsx("span",{"aria-hidden":!0,children:"⋯"}),items:p},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Open dropdown menu"});await n(a).toHaveAttribute("aria-label","Open dropdown menu"),await r.click(a),await n(e.getByRole("menu",{name:"Open dropdown menu"})).toBeInTheDocument()}},I={args:{label:"Icon items",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:o})=>{const e=l(o);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menu",{name:"Icon items"});await n(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await n(a).toBeInTheDocument()}},H={args:{label:"TextValue item names",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),textValue:"Archive"}]},play:async({canvasElement:o})=>{const e=l(o);await r.click(await e.findByRole("button",{name:"TextValue item names"}));const a=e.getByRole("menu",{name:"TextValue item names"});await n(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await n(a).toBeInTheDocument()}},f={args:{label:"AriaLabel typeahead",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive"}]},play:async({canvasElement:o})=>{const e=l(o);await r.click(await e.findByRole("button",{name:"AriaLabel typeahead"}));const a=e.getByRole("menu",{name:"AriaLabel typeahead"});await n(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await n(a).toBeInTheDocument()}},A={render:()=>t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("h3",{id:"dropdown-item-heading",style:{margin:0},children:"Settings action"}),t.jsx(d,{label:"Icon items",items:[{key:"settings",label:t.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Fallback settings label",ariaLabelledBy:"dropdown-item-heading",textValue:"Settings"},{key:"archive",label:t.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]})]}),play:async({canvasElement:o})=>{const e=l(o.ownerDocument.body);await r.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menuitem",{name:"Settings action"});await n(a).toHaveAttribute("aria-labelledby","dropdown-item-heading"),await n(a).not.toHaveAttribute("aria-label")}},C={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:p},render:o=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(d,{...o}),t.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Blocking actions"});await r.click(a);const s=e.getByRole("menu",{name:"Blocking actions"});await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab"),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function tt(){const[o,e]=u.useState(0),[a,s]=u.useState(0);return t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:g,children:o})]}),t.jsxs("p",{style:w,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:g,children:a})]}),t.jsx(d,{label:"Guarded menu",onEscapeKeyDown:c=>{c.preventDefault(),e(m=>m+1)},onPointerDownOutside:c=>{c.preventDefault(),s(m=>m+1)},items:p}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const S={render:()=>t.jsx(tt,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Guarded menu"}),s=e.getByRole("button",{name:"Guarded outside target"});await r.click(a),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await r.click(s),await n(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function at(){const[o,e]=u.useState(!1),[a,s]=u.useState(0);return u.useEffect(()=>{const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-escape-calls",style:g,children:a})]}),t.jsx(d,{label:"Preempted Escape Menu",open:o,onOpenChange:e,onEscapeKeyDown:()=>s(c=>c+1),items:p})]})})}const F={render:()=>t.jsx(at,{}),play:async({canvasElement:o})=>{const e=l(o),a=o.ownerDocument,s=await e.findByRole("button",{name:"Preempted Escape Menu"});await r.click(s),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),i.keyDown(a,{key:"Escape",ctrlKey:!0}),i.keyDown(a,{key:"Escape",altKey:!0}),i.keyDown(a,{key:"Escape",metaKey:!0}),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function ot(){const[o,e]=u.useState(0);return t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Selected actions:"," ",t.jsx("strong",{"data-testid":"dropdown-managed-key-select-count",style:g,children:o})]}),t.jsx("div",{onKeyDownCapture:a=>a.preventDefault(),children:t.jsx(d,{label:"Preempted Managed Key Menu",items:[{key:"run",label:"Run",onSelect:()=>e(a=>a+1)},{key:"archive",label:"Archive"}]})})]})})}const M={render:()=>t.jsx(ot,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Preempted Managed Key Menu"});i.keyDown(a,{key:"ArrowDown"}),await n(e.queryByRole("menu",{name:"Preempted Managed Key Menu"})).toBeNull(),await r.click(a);const s=e.getByRole("menu",{name:"Preempted Managed Key Menu"}),c=e.getByRole("menuitem",{name:"Run"});await n(c).toHaveFocus(),i.keyDown(s,{key:"ArrowDown"}),await n(c).toHaveFocus(),i.keyDown(c,{key:"Enter"}),await n(e.getByTestId("dropdown-managed-key-select-count")).toHaveTextContent("0"),await n(e.getByRole("menu",{name:"Preempted Managed Key Menu"})).toBeInTheDocument()}};function st(){const[o,e]=u.useState(!1),[a,s]=u.useState(0),[c,m]=u.useState("none");return t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsxs("p",{style:w,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:g,children:a})]}),t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:g,children:c})]}),t.jsx(d,{label:"Repeat Escape Menu",open:o,onOpenChange:e,onEscapeKeyDown:()=>s(v=>v+1),onCloseReason:m,items:p})]})})}const j={render:()=>t.jsx(st,{}),play:async({canvasElement:o})=>{const e=l(o),a=o.ownerDocument,s=await e.findByRole("button",{name:"Repeat Escape Menu"});await r.click(s),await n(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),i.keyDown(a,{key:"Escape",repeat:!0}),await n(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function rt(){const[o,e]=u.useState("none"),a=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return t.jsxs(y,{gap:8,children:[t.jsxs("p",{style:w,children:["Selected action:"," ",t.jsx("strong",{"data-testid":"dropdown-selected-action",style:g,children:o})]}),t.jsx(d,{label:"Release Actions",items:a})]})}const P={render:()=>t.jsx(rt,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Release Actions"});await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await r.click(a);const s=e.getByRole("menu");await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"),await n(a).not.toHaveAttribute("aria-keyshortcuts");const c=e.getByRole("menuitem",{name:"Duplicate"}),m=e.getByRole("menuitem",{name:"Archive"});await n(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(m).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{End}");const v=e.getByRole("menuitem",{name:"Delete"});await n(v).toHaveFocus(),i.keyDown(v,{key:"Enter",ctrlKey:!0}),await n(e.getByRole("menu")).toBeInTheDocument(),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),i.keyDown(v,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Yn(v,"Enter"),await n(e.getByRole("menu")).toBeInTheDocument(),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),i.keyDown(v,{key:"Enter",repeat:!0}),await n(e.getByRole("menu")).toBeInTheDocument(),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await r.keyboard("{Enter}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await n(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),a.focus(),await r.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await r.keyboard("{Escape}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),a.focus(),await r.keyboard("{ArrowUp}"),await n(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus()}};function ct(){const[o,e]=u.useState(!1),a=u.useMemo(()=>[{key:"deploy",label:"Deploy now"},{key:"deploy",label:"Deploy later"},{key:"archive",label:"Archive"}],[]),s=o?[{key:"share",label:"Share release"},...a]:a;return t.jsxs(y,{gap:8,children:[t.jsxs("p",{style:w,children:["Prepend action:"," ",t.jsx("strong",{"data-testid":"dropdown-duplicate-rerender-prepend-state",style:g,children:o?"on":"off"})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(d,{label:"Duplicate Stability Menu",items:s}),t.jsx("button",{type:"button",onClick:()=>e(c=>!c),children:"Toggle prepend action"})]})]})}const K={render:()=>t.jsx(ct,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Duplicate Stability Menu"});await r.click(a),await n(e.getByRole("menuitem",{name:"Deploy now"})).toHaveFocus(),await r.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Deploy later"})).toHaveFocus(),i.click(e.getByRole("button",{name:"Toggle prepend action"})),await B(()=>{n(e.getByTestId("dropdown-duplicate-rerender-prepend-state")).toHaveTextContent("on")}),await B(()=>{n(e.getByRole("menuitem",{name:"Deploy later"})).toHaveFocus()})}},O={args:{label:"Modifier Arrow Guard",items:p},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Modifier Arrow Guard"});await r.click(a);const s=e.getByRole("menu",{name:"Modifier Arrow Guard"}),c=e.getByRole("menuitem",{name:"Duplicate"});await n(c).toHaveFocus(),i.keyDown(s,{key:"ArrowDown",ctrlKey:!0}),i.keyDown(s,{key:"ArrowUp",metaKey:!0}),i.keyDown(s,{key:"ArrowDown",altKey:!0}),await n(c).toHaveFocus(),await n(s).toBeInTheDocument(),await r.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus()}};function it(){const[o,e]=u.useState(0);return t.jsxs(y,{gap:8,children:[t.jsxs("p",{style:w,children:["Tab dismiss calls:"," ",t.jsx("strong",{"data-testid":"dropdown-tab-dismiss-calls",style:g,children:o})]}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.jsx(d,{label:"Tab Modifier Guard",items:p,onCloseReason:a=>{a==="tab-key"&&e(s=>s+1)}}),t.jsx("button",{type:"button",children:"Next control"})]})]})}const L={render:()=>t.jsx(it,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Tab Modifier Guard"});await r.click(a);const s=e.getByRole("menu",{name:"Tab Modifier Guard"});await n(s).toBeInTheDocument(),i.keyDown(s,{key:"Tab",ctrlKey:!0}),i.keyDown(s,{key:"Tab",altKey:!0}),i.keyDown(s,{key:"Tab",metaKey:!0}),await n(e.getByRole("menu",{name:"Tab Modifier Guard"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("0"),a.focus(),i.keyDown(a,{key:"Tab",ctrlKey:!0}),i.keyDown(a,{key:"Tab",altKey:!0}),i.keyDown(a,{key:"Tab",metaKey:!0}),await n(e.getByRole("menu",{name:"Tab Modifier Guard"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("0"),i.keyDown(a,{key:"Tab"}),await B(()=>{n(e.queryByRole("menu",{name:"Tab Modifier Guard"})).not.toBeInTheDocument()}),await B(()=>{n(e.getByRole("button",{name:"Next control"})).toHaveFocus()}),await B(()=>{n(e.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("1")})}};function lt(){const[o,e]=u.useState(0),[a,s]=u.useState(0);return t.jsxs(y,{gap:8,children:[t.jsxs("p",{style:w,children:["Selection calls:"," ",t.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-selection-count",style:g,children:o})]}),t.jsxs("p",{style:w,children:["Item-close reasons:"," ",t.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-close-count",style:g,children:a})]}),t.jsx(d,{open:!0,label:"Keyboard Dedupe Menu",onOpenChange:()=>{},onCloseReason:c=>{c==="item-select"&&s(m=>m+1)},items:[{key:"run",label:"Run",onSelect:()=>{e(c=>c+1)}},{key:"archive",label:"Archive"}]})]})}const q={render:()=>t.jsx(lt,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("menuitem",{name:"Run"});i.keyDown(a,{key:"Enter"}),await B(()=>{n(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),n(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")}),i.click(a,{detail:0}),await B(()=>{n(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),n(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")})}};function dt(){const[o,e]=u.useState("none"),[a,s]=u.useState("none");return t.jsx(y,{gap:8,children:t.jsxs("div",{style:k,children:[t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-close-reason",style:g,children:o})]}),t.jsxs("p",{style:w,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dropdown-close-trace",style:g,children:a})]}),t.jsx(d,{label:"Telemetry Menu",onOpenChange:c=>{c||s(m=>`${m} -> open:false`)},onCloseReason:c=>{e(c),s(m=>m==="select"?`select -> reason:${c}`:`reason:${c}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{s("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",children:"Outside target"})]})})}const G={render:()=>t.jsx(dt,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Telemetry Menu"}),s=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await r.click(a),await r.click(e.getByRole("menuitem",{name:"Duplicate"})),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await r.click(a),await r.keyboard("{Escape}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(a),s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("menu",{name:"Telemetry Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await r.click(s),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await r.click(a),await r.click(a),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await r.click(a),await r.keyboard("{Tab}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await n(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await n(s).toHaveFocus()}};function ut(){const[o,e]=u.useState(!0),[a,s]=u.useState(!1),[c,m]=u.useState(0),[v,Zn]=u.useState("none");return t.jsx(y,{gap:8,children:t.jsxs("div",{style:k,children:[t.jsxs("p",{style:w,children:["Close requests:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:g,children:c})]}),t.jsxs("p",{style:w,children:["Pending parent close:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:g,children:a?"yes":"no"})]}),t.jsxs("p",{style:w,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:g,children:v})]}),t.jsx(d,{label:"Controlled Contract Menu",open:o,onOpenChange:et=>{if(et){e(!0),s(!1);return}a||(m(nt=>nt+1),s(!0))},onCloseReason:Zn,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",onClick:()=>{e(!1),s(!1)},children:"Apply close request"})]})})}const N={render:()=>t.jsx(ut,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Controlled Contract Menu"}),s=e.getByRole("button",{name:"Apply close request"});await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await r.click(s),await n(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await r.click(a),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await r.click(s),await n(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},V={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Quick Actions"});await r.click(a);const s=e.getByRole("menu");await r.keyboard("{PageDown}"),await n(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await r.keyboard("{PageUp}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await r.keyboard("res"),await n(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await n(s).toBeInTheDocument()}},U={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"IME Typeahead Guard"});await r.click(a);const s=e.getByRole("menu");await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),i.keyDown(s,{key:"a",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),Yn(s,"a"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},Q={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"All Disabled Keyboard"});await r.click(a),await n(e.getByRole("menu",{name:"All Disabled Keyboard"})).toHaveFocus(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"All Disabled Keyboard"})).not.toBeInTheDocument(),await n(a).toHaveFocus(),await r.keyboard("{ArrowDown}");const s=e.getByRole("menu",{name:"All Disabled Keyboard"});await n(s).toHaveFocus(),await n(s).toHaveAttribute("tabindex","-1"),await n(s).toHaveAttribute("aria-keyshortcuts","Tab Escape");const c=e.getAllByRole("menuitem");c.forEach(v=>{n(v).toHaveAttribute("aria-disabled","true"),n(v).toHaveAttribute("tabindex","-1")}),i.keyDown(s,{key:"ArrowDown"}),i.keyDown(s,{key:"ArrowUp"}),i.keyDown(s,{key:"Home"}),i.keyDown(s,{key:"End"}),i.keyDown(s,{key:"PageDown"}),i.keyDown(s,{key:"PageUp"}),i.keyDown(s,{key:"Enter"}),await n(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),c.forEach(v=>{n(v).toHaveAttribute("tabindex","-1")});const m=new KeyboardEvent("keydown",{key:"ArrowDown",bubbles:!0,cancelable:!0});s.dispatchEvent(m),await n(m.defaultPrevented).toBe(!1),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"All Disabled Keyboard"})).not.toBeInTheDocument(),await n(a).toHaveFocus(),await r.keyboard("{ArrowUp}"),await n(e.getByRole("menu",{name:"All Disabled Keyboard"})).toHaveFocus()}},$={args:{label:"Single Actionable Keyboard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0}]},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Single Actionable Keyboard"});await r.click(a);const s=e.getByRole("menu",{name:"Single Actionable Keyboard"});await n(s).toHaveAttribute("aria-keyshortcuts","Tab Escape"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),i.keyDown(s,{key:"ArrowDown"}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(e.getByRole("menuitem",{name:"Archive"})).not.toHaveAttribute("aria-keyshortcuts");const c=new KeyboardEvent("keydown",{key:"Home",bubbles:!0,cancelable:!0});s.dispatchEvent(c),await n(c.defaultPrevented).toBe(!1)}},J={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(d,{label:"Focus Policy",items:p}),t.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Focus Policy"});await r.click(a),await n(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const s=e.getByRole("button",{name:"Next Focus Target"});await r.click(s),await n(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await n(s).toHaveFocus()}},_={render:()=>t.jsx(y,{gap:12,children:t.jsx("div",{style:b,children:t.jsx(d,{label:"Escape Focus Policy",items:p})})}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Escape Focus Policy"});await r.click(a),await n(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await n(a).toHaveFocus()}},W={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(d,{label:"Tab Flow Menu",items:p}),t.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Tab Flow Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Tab}"),await n(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},z={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx("button",{type:"button",children:"Before Menu Control"}),t.jsx(d,{label:"Shift+Tab Flow Menu",items:p})]})}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Shift+Tab Flow Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Shift+Tab Flow Menu"})).toBeInTheDocument(),await r.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("menu",{name:"Shift+Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"Before Menu Control"})).toHaveFocus()}},X={render:()=>t.jsx(y,{gap:12,children:t.jsx("div",{style:b,children:t.jsx(d,{label:"Tab Fallback Menu",items:p})})}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Tab Fallback Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Tab Fallback Menu"})).toBeInTheDocument(),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("{Tab}"),await n(e.queryByRole("menu",{name:"Tab Fallback Menu"})).not.toBeInTheDocument(),await n(a).toHaveFocus(),await r.click(a),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("{Shift>}{Tab}{/Shift}"),await n(e.queryByRole("menu",{name:"Tab Fallback Menu"})).not.toBeInTheDocument(),await n(a).toHaveFocus()}},Y={render:()=>t.jsx(y,{gap:12,children:t.jsxs("div",{style:b,children:[t.jsx(d,{label:"Tab Skip Menu",items:p}),t.jsx("button",{type:"button",style:{display:"none"},children:"Hidden Menu Candidate"}),t.jsx("div",{inert:!0,children:t.jsx("button",{type:"button",children:"Inert Menu Candidate"})}),t.jsx("button",{type:"button",children:"Visible Menu Candidate"})]})}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Tab Skip Menu"});await r.click(a),await n(e.getByRole("menu",{name:"Tab Skip Menu"})).toBeInTheDocument(),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await r.keyboard("{Tab}"),await B(()=>{n(e.queryByRole("menu",{name:"Tab Skip Menu"})).not.toBeInTheDocument()}),await n(e.getByRole("button",{name:"Visible Menu Candidate"})).toHaveFocus()}},Z={render:()=>t.jsx(y,{gap:8,children:t.jsx(zn,{triggerLabel:"Open container",children:t.jsxs("div",{style:k,children:[t.jsx("p",{style:Xn,children:"Popover shell"}),t.jsx(d,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:o})=>{const e=l(o);await r.click(await e.findByRole("button",{name:"Open container"})),await r.click(e.getByRole("button",{name:"Inner actions"})),await n(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};function mt(){const[o,e]=u.useState("none"),a=s=>{e(c=>c==="none"?s:`${c} -> ${s}`)};return t.jsx(y,{gap:8,children:t.jsxs("div",{style:k,children:[t.jsx(zn,{triggerLabel:"Open outside-order container",contentLabel:"Outside-order popover content",onCloseReason:s=>a(`popover:reason:${s}`),onOpenChange:s=>{s||a("popover:open:false")},children:t.jsxs("div",{style:k,children:[t.jsx("p",{style:Xn,children:"Outside pointer should dismiss inner layer first."}),t.jsx(d,{label:"Inner outside-order menu",onCloseReason:s=>a(`dropdown:reason:${s}`),onOpenChange:s=>{s||a("dropdown:open:false")},items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),t.jsx("button",{type:"button",children:"Outside order target"}),t.jsxs("p",{style:w,children:["Nested close trace:"," ",t.jsx("strong",{"data-testid":"dropdown-nested-outside-trace",style:g,children:o})]})]})})}const ee={render:()=>t.jsx(mt,{}),play:async({canvasElement:o})=>{const e=l(o);await r.click(await e.findByRole("button",{name:"Open outside-order container"})),await r.click(e.getByRole("button",{name:"Inner outside-order menu"})),await n(e.getByRole("menu",{name:"Inner outside-order menu"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside order target"})),await n(e.queryByRole("menu",{name:"Inner outside-order menu"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false"),await r.click(e.getByRole("button",{name:"Outside order target"})),await n(e.queryByRole("dialog",{name:"Outside-order popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false")}};var ne,te,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:"{}",...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,se,re;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=T.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ce,ie,le;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ue,me;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,pe,we;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:we.source}}};var ge,ve,be;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: <span aria-hidden>⋯</span>,
    items
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Open dropdown menu"
    });
    await expect(trigger).toHaveAttribute("aria-label", "Open dropdown menu");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Open dropdown menu"
    })).toBeInTheDocument();
  }
}`,...(be=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Be,ke,he;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(he=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};var Te,xe,De;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var Re,Ee,Ie;f.parameters={...f.parameters,docs:{...(Re=f.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var He,fe,Ae;A.parameters={...A.parameters,docs:{...(He=A.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var Ce,Se,Fe;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var Me,je,Pe;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var Ke,Oe,Le;F.parameters={...F.parameters,docs:{...(Ke=F.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Le=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var qe,Ge,Ne;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ve,Ue,Qe;j.parameters={...j.parameters,docs:{...(Ve=j.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Qe=(Ue=j.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var $e,Je,_e;P.parameters={...P.parameters,docs:{...($e=P.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    dispatchLegacyImeKeyDown(deleteItem, "Enter");
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
}`,...(_e=(Je=P.parameters)==null?void 0:Je.docs)==null?void 0:_e.source}}};var We,ze,Xe;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <DuplicateKeyRerenderStabilityDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Duplicate Stability Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menuitem", {
      name: "Deploy now"
    })).toHaveFocus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", {
      name: "Deploy later"
    })).toHaveFocus();
    fireEvent.click(canvas.getByRole("button", {
      name: "Toggle prepend action"
    }));
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-duplicate-rerender-prepend-state")).toHaveTextContent("on");
    });
    await waitFor(() => {
      expect(canvas.getByRole("menuitem", {
        name: "Deploy later"
      })).toHaveFocus();
    });
  }
}`,...(Xe=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;O.parameters={...O.parameters,docs:{...(Ye=O.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(en=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,an;L.parameters={...L.parameters,docs:{...(nn=L.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: () => <TabModifierDismissGuardDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Tab Modifier Guard"
    });
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu", {
      name: "Tab Modifier Guard"
    });
    await expect(menu).toBeInTheDocument();
    fireEvent.keyDown(menu, {
      key: "Tab",
      ctrlKey: true
    });
    fireEvent.keyDown(menu, {
      key: "Tab",
      altKey: true
    });
    fireEvent.keyDown(menu, {
      key: "Tab",
      metaKey: true
    });
    await expect(canvas.getByRole("menu", {
      name: "Tab Modifier Guard"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("0");
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
    await expect(canvas.getByRole("menu", {
      name: "Tab Modifier Guard"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("0");
    fireEvent.keyDown(trigger, {
      key: "Tab"
    });
    await waitFor(() => {
      expect(canvas.queryByRole("menu", {
        name: "Tab Modifier Guard"
      })).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByRole("button", {
        name: "Next control"
      })).toHaveFocus();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("dropdown-tab-dismiss-calls")).toHaveTextContent("1");
    });
  }
}`,...(an=(tn=L.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var on,sn,rn;q.parameters={...q.parameters,docs:{...(on=q.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(sn=q.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var cn,ln,dn;G.parameters={...G.parameters,docs:{...(cn=G.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(dn=(ln=G.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var un,mn,yn;N.parameters={...N.parameters,docs:{...(un=N.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(yn=(mn=N.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};var pn,wn,gn;V.parameters={...V.parameters,docs:{...(pn=V.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(gn=(wn=V.parameters)==null?void 0:wn.docs)==null?void 0:gn.source}}};var vn,bn,Bn;U.parameters={...U.parameters,docs:{...(vn=U.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(Bn=(bn=U.parameters)==null?void 0:bn.docs)==null?void 0:Bn.source}}};var kn,hn,Tn;Q.parameters={...Q.parameters,docs:{...(kn=Q.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(Tn=(hn=Q.parameters)==null?void 0:hn.docs)==null?void 0:Tn.source}}};var xn,Dn,Rn;$.parameters={...$.parameters,docs:{...(xn=$.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(Rn=(Dn=$.parameters)==null?void 0:Dn.docs)==null?void 0:Rn.source}}};var En,In,Hn;J.parameters={...J.parameters,docs:{...(En=J.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
}`,...(Hn=(In=J.parameters)==null?void 0:In.docs)==null?void 0:Hn.source}}};var fn,An,Cn;_.parameters={..._.parameters,docs:{...(fn=_.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(Cn=(An=_.parameters)==null?void 0:An.docs)==null?void 0:Cn.source}}};var Sn,Fn,Mn;W.parameters={...W.parameters,docs:{...(Sn=W.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Mn=(Fn=W.parameters)==null?void 0:Fn.docs)==null?void 0:Mn.source}}};var jn,Pn,Kn;z.parameters={...z.parameters,docs:{...(jn=z.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Kn=(Pn=z.parameters)==null?void 0:Pn.docs)==null?void 0:Kn.source}}};var On,Ln,qn;X.parameters={...X.parameters,docs:{...(On=X.parameters)==null?void 0:On.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame gap={12}>
      <div style={storyStackStyle}>
        <Dropdown label="Tab Fallback Menu" items={items} />
      </div>
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Tab Fallback Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Tab Fallback Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await expect(canvas.queryByRole("menu", {
      name: "Tab Fallback Menu"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
    await userEvent.keyboard("{Shift>}{Tab}{/Shift}");
    await expect(canvas.queryByRole("menu", {
      name: "Tab Fallback Menu"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveFocus();
  }
}`,...(qn=(Ln=X.parameters)==null?void 0:Ln.docs)==null?void 0:qn.source}}};var Gn,Nn,Vn;Y.parameters={...Y.parameters,docs:{...(Gn=Y.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(Vn=(Nn=Y.parameters)==null?void 0:Nn.docs)==null?void 0:Vn.source}}};var Un,Qn,$n;Z.parameters={...Z.parameters,docs:{...(Un=Z.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...($n=(Qn=Z.parameters)==null?void 0:Qn.docs)==null?void 0:$n.source}}};var Jn,_n,Wn;ee.parameters={...ee.parameters,docs:{...(Jn=ee.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(Wn=(_n=ee.parameters)==null?void 0:_n.docs)==null?void 0:Wn.source}}};const Tt=["Default","DenseActions","IconTrigger","TriggerLabelledByPrecedence","NonTextTriggerNameFallback","NonTextTriggerAutoNameFallback","IconItemNaming","IconItemTextValueNameFallback","IconItemAriaLabelTypeahead","IconItemLabelledByPrecedence","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","DuplicateKeyRerenderStability","ModifierArrowNavigationGuard","TabModifierDismissGuard","KeyboardActivationDedupe","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","SingleActionableShortcutHints","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","ShiftTabDismissToPreviousControl","TabDismissFallbackToTrigger","TabDismissSkipsUnfocusableCandidates","NestedDismissOrder","NestedOutsideDismissOrder"];export{Q as AllItemsDisabledKeyboardNoop,G as CloseReasonTelemetry,N as ControlledOpenContract,h as Default,T as DenseActions,S as DismissGuardHooks,K as DuplicateKeyRerenderStability,_ as EscapeDismissFocusReturn,F as EscapePreemptedByGlobalHandler,j as EscapeRepeatGuard,f as IconItemAriaLabelTypeahead,A as IconItemLabelledByPrecedence,I as IconItemNaming,H as IconItemTextValueNameFallback,x as IconTrigger,q as KeyboardActivationDedupe,M as ManagedKeysPreemptedByGlobalHandler,O as ModifierArrowNavigationGuard,Z as NestedDismissOrder,ee as NestedOutsideDismissOrder,C as NonDismissible,E as NonTextTriggerAutoNameFallback,R as NonTextTriggerNameFallback,J as OutsideDismissFocusTransfer,P as SelectionTelemetry,z as ShiftTabDismissToPreviousControl,$ as SingleActionableShortcutHints,X as TabDismissFallbackToTrigger,Y as TabDismissSkipsUnfocusableCandidates,W as TabDismissToNextControl,L as TabModifierDismissGuard,D as TriggerLabelledByPrecedence,U as TypeaheadIgnoresImeComposition,V as TypeaheadNavigation,Tt as __namedExportsOrder,ht as default};
