import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{P as Je}from"./Popover-BBqjLa8s.js";import{D as y}from"./Dropdown-uDYrXmi-.js";import{within as d,userEvent as s,expect as t,fireEvent as u,waitFor as G}from"./index-DgAF9SIF.js";import{S as w,s as p,a as m}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-CvOMiBFU.js";import"./Button-BMxlc9Nj.js";const g=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],yt={title:"Overlay/Dropdown",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:g}},B={display:"grid",gap:12,justifyItems:"start"},b={display:"grid",gap:8,justifyItems:"start"},_e={margin:0},k={},T={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},x={args:{label:"⋯",triggerAriaLabel:"More actions",items:g},play:async({canvasElement:c})=>{const e=d(c);await s.click(await e.findByRole("button",{name:"More actions"})),await t(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},h={args:{label:"Icon items",items:[{key:"settings",label:n.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:n.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:c})=>{const e=d(c);await s.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menu",{name:"Icon items"});await t(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await t(a).toBeInTheDocument()}},D={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:g},render:c=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:B,children:[n.jsx(y,{...c}),n.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Blocking actions"});await s.click(a);const o=e.getByRole("menu",{name:"Blocking actions"});await t(o).toBeInTheDocument(),await t(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab"),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Outside target"})),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function Ye(){const[c,e]=l.useState(0),[a,o]=l.useState(0);return n.jsx(w,{gap:12,children:n.jsxs("div",{style:B,children:[n.jsxs("p",{style:p,children:["Escape guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:m,children:c})]}),n.jsxs("p",{style:p,children:["Outside guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:m,children:a})]}),n.jsx(y,{label:"Guarded menu",onEscapeKeyDown:r=>{r.preventDefault(),e(i=>i+1)},onPointerDownOutside:r=>{r.preventDefault(),o(i=>i+1)},items:g}),n.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const R={render:()=>n.jsx(Ye,{}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Guarded menu"}),o=e.getByRole("button",{name:"Guarded outside target"});await s.click(a),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await s.click(o),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function Ze(){const[c,e]=l.useState(!1),[a,o]=l.useState(0);return l.useEffect(()=>{const r=i=>{i.key==="Escape"&&i.preventDefault()};return document.addEventListener("keydown",r,!0),()=>{document.removeEventListener("keydown",r,!0)}},[]),n.jsx(w,{gap:12,children:n.jsxs("div",{style:B,children:[n.jsxs("p",{style:p,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-escape-calls",style:m,children:a})]}),n.jsx(y,{label:"Preempted Escape Menu",open:c,onOpenChange:e,onEscapeKeyDown:()=>o(r=>r+1),items:g})]})})}const E={render:()=>n.jsx(Ze,{}),play:async({canvasElement:c})=>{const e=d(c),a=c.ownerDocument,o=await e.findByRole("button",{name:"Preempted Escape Menu"});await s.click(o),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),u.keyDown(a,{key:"Escape",ctrlKey:!0}),u.keyDown(a,{key:"Escape",altKey:!0}),u.keyDown(a,{key:"Escape",metaKey:!0}),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function et(){const[c,e]=l.useState(!1),[a,o]=l.useState(0),[r,i]=l.useState("none");return n.jsx(w,{gap:12,children:n.jsxs("div",{style:B,children:[n.jsxs("p",{style:p,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:m,children:a})]}),n.jsxs("p",{style:p,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:m,children:r})]}),n.jsx(y,{label:"Repeat Escape Menu",open:c,onOpenChange:e,onEscapeKeyDown:()=>o(v=>v+1),onCloseReason:i,items:g})]})})}const I={render:()=>n.jsx(et,{}),play:async({canvasElement:c})=>{const e=d(c),a=c.ownerDocument,o=await e.findByRole("button",{name:"Repeat Escape Menu"});await s.click(o),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),u.keyDown(a,{key:"Escape",repeat:!0}),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function tt(){const[c,e]=l.useState("none"),a=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return n.jsxs(w,{gap:8,children:[n.jsxs("p",{style:p,children:["Selected action:"," ",n.jsx("strong",{"data-testid":"dropdown-selected-action",style:m,children:c})]}),n.jsx(y,{label:"Release Actions",items:a})]})}const C={render:()=>n.jsx(tt,{}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Release Actions"});await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await t(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await s.click(a);const o=e.getByRole("menu");await t(o).toBeInTheDocument(),await t(o).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Tab Escape"),await t(a).not.toHaveAttribute("aria-keyshortcuts");const r=e.getByRole("menuitem",{name:"Duplicate"}),i=e.getByRole("menuitem",{name:"Archive"});await t(r).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(i).not.toHaveAttribute("aria-keyshortcuts"),await s.keyboard("{End}");const v=e.getByRole("menuitem",{name:"Delete"});await t(v).toHaveFocus(),u.keyDown(v,{key:"Enter",ctrlKey:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),u.keyDown(v,{key:"Enter",repeat:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await s.keyboard("{Enter}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),await t(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp"),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),a.focus(),await s.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await t(a).not.toHaveAttribute("aria-keyshortcuts"),await s.keyboard("{Escape}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),a.focus(),await s.keyboard("{ArrowUp}"),await t(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus()}};function nt(){const[c,e]=l.useState(0),[a,o]=l.useState(0);return n.jsxs(w,{gap:8,children:[n.jsxs("p",{style:p,children:["Selection calls:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-selection-count",style:m,children:c})]}),n.jsxs("p",{style:p,children:["Item-close reasons:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-close-count",style:m,children:a})]}),n.jsx(y,{open:!0,label:"Keyboard Dedupe Menu",onOpenChange:()=>{},onCloseReason:r=>{r==="item-select"&&o(i=>i+1)},items:[{key:"run",label:"Run",onSelect:()=>{e(r=>r+1)}},{key:"archive",label:"Archive"}]})]})}const H={render:()=>n.jsx(nt,{}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("menuitem",{name:"Run"});u.keyDown(a,{key:"Enter"}),await G(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")}),u.click(a,{detail:0}),await G(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")})}};function at(){const[c,e]=l.useState("none"),[a,o]=l.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:b,children:[n.jsxs("p",{style:p,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-close-reason",style:m,children:c})]}),n.jsxs("p",{style:p,children:["Last close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-close-trace",style:m,children:a})]}),n.jsx(y,{label:"Telemetry Menu",onOpenChange:r=>{r||o(i=>`${i} -> open:false`)},onCloseReason:r=>{e(r),o(i=>i==="select"?`select -> reason:${r}`:`reason:${r}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{o("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",children:"Outside target"})]})})}const f={render:()=>n.jsx(at,{}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Telemetry Menu"}),o=e.getByRole("button",{name:"Outside target"});await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await s.click(a),await s.click(e.getByRole("menuitem",{name:"Duplicate"})),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await s.click(a),await s.keyboard("{Escape}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(a),await s.click(o),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await s.click(a),await s.click(a),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await s.click(a),await s.keyboard("{Tab}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await t(o).toHaveFocus()}};function ot(){const[c,e]=l.useState(!0),[a,o]=l.useState(!1),[r,i]=l.useState(0),[v,ze]=l.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:b,children:[n.jsxs("p",{style:p,children:["Close requests:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:m,children:r})]}),n.jsxs("p",{style:p,children:["Pending parent close:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:m,children:a?"yes":"no"})]}),n.jsxs("p",{style:p,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:m,children:v})]}),n.jsx(y,{label:"Controlled Contract Menu",open:c,onOpenChange:We=>{if(We){e(!0),o(!1);return}a||(i(Xe=>Xe+1),o(!0))},onCloseReason:ze,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",onClick:()=>{e(!1),o(!1)},children:"Apply close request"})]})})}const A={render:()=>n.jsx(ot,{}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Controlled Contract Menu"}),o=e.getByRole("button",{name:"Apply close request"});await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await s.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await s.click(o),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await s.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await s.click(o),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},S={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Quick Actions"});await s.click(a);const o=e.getByRole("menu");await s.keyboard("{PageDown}"),await t(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await s.keyboard("{PageUp}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await s.keyboard("res"),await t(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await t(o).toBeInTheDocument()}},j={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"IME Typeahead Guard"});await s.click(a);const o=e.getByRole("menu");await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),u.keyDown(o,{key:"a",isComposing:!0,keyCode:229,which:229}),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},F={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"All Disabled Keyboard"});await s.click(a);const o=e.getByRole("menu",{name:"All Disabled Keyboard"}),r=e.getAllByRole("menuitem");r.forEach(i=>{t(i).toHaveAttribute("aria-disabled","true"),t(i).toHaveAttribute("tabindex","-1")}),u.keyDown(o,{key:"ArrowDown"}),u.keyDown(o,{key:"ArrowUp"}),u.keyDown(o,{key:"Home"}),u.keyDown(o,{key:"End"}),u.keyDown(o,{key:"PageDown"}),u.keyDown(o,{key:"PageUp"}),u.keyDown(o,{key:"Enter"}),await t(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),r.forEach(i=>{t(i).toHaveAttribute("tabindex","-1")})}},P={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:B,children:[n.jsx(y,{label:"Focus Policy",items:g}),n.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Focus Policy"});await s.click(a),await t(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const o=e.getByRole("button",{name:"Next Focus Target"});await s.click(o),await t(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await t(o).toHaveFocus()}},M={render:()=>n.jsx(w,{gap:12,children:n.jsx("div",{style:B,children:n.jsx(y,{label:"Escape Focus Policy",items:g})})}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Escape Focus Policy"});await s.click(a),await t(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await t(a).toHaveFocus()}},O={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:B,children:[n.jsx(y,{label:"Tab Flow Menu",items:g}),n.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:c})=>{const e=d(c),a=await e.findByRole("button",{name:"Tab Flow Menu"});await s.click(a),await t(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await s.keyboard("{Tab}"),await t(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},q={render:()=>n.jsx(w,{gap:8,children:n.jsx(Je,{triggerLabel:"Open container",children:n.jsxs("div",{style:b,children:[n.jsx("p",{style:_e,children:"Popover shell"}),n.jsx(y,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:c})=>{const e=d(c);await s.click(await e.findByRole("button",{name:"Open container"})),await s.click(e.getByRole("button",{name:"Inner actions"})),await t(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};function st(){const[c,e]=l.useState("none"),a=o=>{e(r=>r==="none"?o:`${r} -> ${o}`)};return n.jsx(w,{gap:8,children:n.jsxs("div",{style:b,children:[n.jsx(Je,{triggerLabel:"Open outside-order container",contentLabel:"Outside-order popover content",onCloseReason:o=>a(`popover:reason:${o}`),onOpenChange:o=>{o||a("popover:open:false")},children:n.jsxs("div",{style:b,children:[n.jsx("p",{style:_e,children:"Outside pointer should dismiss inner layer first."}),n.jsx(y,{label:"Inner outside-order menu",onCloseReason:o=>a(`dropdown:reason:${o}`),onOpenChange:o=>{o||a("dropdown:open:false")},items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),n.jsx("button",{type:"button",children:"Outside order target"}),n.jsxs("p",{style:p,children:["Nested close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-nested-outside-trace",style:m,children:c})]})]})})}const K={render:()=>n.jsx(st,{}),play:async({canvasElement:c})=>{const e=d(c);await s.click(await e.findByRole("button",{name:"Open outside-order container"})),await s.click(e.getByRole("button",{name:"Inner outside-order menu"})),await t(e.getByRole("menu",{name:"Inner outside-order menu"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Outside order target"})),await t(e.queryByRole("menu",{name:"Inner outside-order menu"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Outside-order popover content"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false"),await s.click(e.getByRole("button",{name:"Outside order target"})),await t(e.queryByRole("dialog",{name:"Outside-order popover content"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-nested-outside-trace")).toHaveTextContent("dropdown:reason:outside-pointer -> dropdown:open:false -> popover:reason:outside-pointer -> popover:open:false")}};var N,U,L;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(L=(U=k.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var V,$,Q;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Q=($=T.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var J,_,z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(z=(_=x.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var W,X,Y;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ce,re;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ie,le,de;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=I.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,pe,me;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ye,we,ge;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(we=H.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var ve,Be,be;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:be.source}}};var ke,Te,xe;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(xe=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var he,De,Re;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Re=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ee,Ie,Ce;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", {
      name: "Archive"
    })).toHaveFocus();
  }
}`,...(Ce=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var He,fe,Ae;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var Se,je,Fe;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Fe=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Pe,Me,Oe;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var qe,Ke,Ge;O.parameters={...O.parameters,docs:{...(qe=O.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ge=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Ne,Ue,Le;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Le=(Ue=q.parameters)==null?void 0:Ue.docs)==null?void 0:Le.source}}};var Ve,$e,Qe;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Qe=($e=K.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};const wt=["Default","DenseActions","IconTrigger","IconItemNaming","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","KeyboardActivationDedupe","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder","NestedOutsideDismissOrder"];export{F as AllItemsDisabledKeyboardNoop,f as CloseReasonTelemetry,A as ControlledOpenContract,k as Default,T as DenseActions,R as DismissGuardHooks,M as EscapeDismissFocusReturn,E as EscapePreemptedByGlobalHandler,I as EscapeRepeatGuard,h as IconItemNaming,x as IconTrigger,H as KeyboardActivationDedupe,q as NestedDismissOrder,K as NestedOutsideDismissOrder,D as NonDismissible,P as OutsideDismissFocusTransfer,C as SelectionTelemetry,O as TabDismissToNextControl,j as TypeaheadIgnoresImeComposition,S as TypeaheadNavigation,wt as __namedExportsOrder,yt as default};
