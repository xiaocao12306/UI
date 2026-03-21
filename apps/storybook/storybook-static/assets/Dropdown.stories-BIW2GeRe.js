import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{P as $e}from"./Popover-DKo9grEn.js";import{D as y}from"./Dropdown-HPPhmppp.js";import{within as d,userEvent as s,expect as t,fireEvent as u,waitFor as K}from"./index-DgAF9SIF.js";import{S as w,s as m,a as p}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-DAyP3iyR.js";import"./Button-Cn1nutIP.js";const g=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],lt={title:"Overlay/Dropdown",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:g}},v={display:"grid",gap:12,justifyItems:"start"},q={display:"grid",gap:8,justifyItems:"start"},Je={margin:0},B={},b={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},k={args:{label:"⋯",triggerAriaLabel:"More actions",items:g},play:async({canvasElement:o})=>{const e=d(o);await s.click(await e.findByRole("button",{name:"More actions"})),await t(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},T={args:{label:"Icon items",items:[{key:"settings",label:n.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:n.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:o})=>{const e=d(o);await s.click(await e.findByRole("button",{name:"Icon items"}));const a=e.getByRole("menu",{name:"Icon items"});await t(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await t(a).toBeInTheDocument()}},x={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:g},render:o=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(y,{...o}),n.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Blocking actions"});await s.click(a),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Outside target"})),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function _e(){const[o,e]=l.useState(0),[a,c]=l.useState(0);return n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:m,children:["Escape guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:p,children:o})]}),n.jsxs("p",{style:m,children:["Outside guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:p,children:a})]}),n.jsx(y,{label:"Guarded menu",onEscapeKeyDown:r=>{r.preventDefault(),e(i=>i+1)},onPointerDownOutside:r=>{r.preventDefault(),c(i=>i+1)},items:g}),n.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const h={render:()=>n.jsx(_e,{}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Guarded menu"}),c=e.getByRole("button",{name:"Guarded outside target"});await s.click(a),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await s.click(c),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function ze(){const[o,e]=l.useState(!1),[a,c]=l.useState(0);return l.useEffect(()=>{const r=i=>{i.key==="Escape"&&i.preventDefault()};return document.addEventListener("keydown",r,!0),()=>{document.removeEventListener("keydown",r,!0)}},[]),n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:m,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-escape-calls",style:p,children:a})]}),n.jsx(y,{label:"Preempted Escape Menu",open:o,onOpenChange:e,onEscapeKeyDown:()=>c(r=>r+1),items:g})]})})}const D={render:()=>n.jsx(ze,{}),play:async({canvasElement:o})=>{const e=d(o),a=o.ownerDocument,c=await e.findByRole("button",{name:"Preempted Escape Menu"});await s.click(c),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),u.keyDown(a,{key:"Escape",ctrlKey:!0}),u.keyDown(a,{key:"Escape",altKey:!0}),u.keyDown(a,{key:"Escape",metaKey:!0}),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function We(){const[o,e]=l.useState(!1),[a,c]=l.useState(0),[r,i]=l.useState("none");return n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:m,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:p,children:a})]}),n.jsxs("p",{style:m,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:p,children:r})]}),n.jsx(y,{label:"Repeat Escape Menu",open:o,onOpenChange:e,onEscapeKeyDown:()=>c(O=>O+1),onCloseReason:i,items:g})]})})}const E={render:()=>n.jsx(We,{}),play:async({canvasElement:o})=>{const e=d(o),a=o.ownerDocument,c=await e.findByRole("button",{name:"Repeat Escape Menu"});await s.click(c),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),u.keyDown(a,{key:"Escape",repeat:!0}),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function Xe(){const[o,e]=l.useState("none"),a=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return n.jsxs(w,{gap:8,children:[n.jsxs("p",{style:m,children:["Selected action:"," ",n.jsx("strong",{"data-testid":"dropdown-selected-action",style:p,children:o})]}),n.jsx(y,{label:"Release Actions",items:a})]})}const R={render:()=>n.jsx(Xe,{}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Release Actions"});await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await s.click(a),await t(e.getByRole("menu")).toBeInTheDocument();const c=e.getByRole("menuitem",{name:"Duplicate"}),r=e.getByRole("menuitem",{name:"Archive"});await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await s.keyboard("{End}");const i=e.getByRole("menuitem",{name:"Delete"});await t(i).toHaveFocus(),u.keyDown(i,{key:"Enter",ctrlKey:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),u.keyDown(i,{key:"Enter",repeat:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await s.keyboard("{Enter}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),a.focus(),await s.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};function Ye(){const[o,e]=l.useState(0),[a,c]=l.useState(0);return n.jsxs(w,{gap:8,children:[n.jsxs("p",{style:m,children:["Selection calls:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-selection-count",style:p,children:o})]}),n.jsxs("p",{style:m,children:["Item-close reasons:"," ",n.jsx("strong",{"data-testid":"dropdown-keyboard-dedupe-close-count",style:p,children:a})]}),n.jsx(y,{open:!0,label:"Keyboard Dedupe Menu",onOpenChange:()=>{},onCloseReason:r=>{r==="item-select"&&c(i=>i+1)},items:[{key:"run",label:"Run",onSelect:()=>{e(r=>r+1)}},{key:"archive",label:"Archive"}]})]})}const I={render:()=>n.jsx(Ye,{}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("menuitem",{name:"Run"});u.keyDown(a,{key:"Enter"}),await K(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")}),u.click(a,{detail:0}),await K(()=>{t(e.getByTestId("dropdown-keyboard-dedupe-selection-count")).toHaveTextContent("1"),t(e.getByTestId("dropdown-keyboard-dedupe-close-count")).toHaveTextContent("1")})}};function Ze(){const[o,e]=l.useState("none"),[a,c]=l.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:q,children:[n.jsxs("p",{style:m,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-close-reason",style:p,children:o})]}),n.jsxs("p",{style:m,children:["Last close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-close-trace",style:p,children:a})]}),n.jsx(y,{label:"Telemetry Menu",onOpenChange:r=>{r||c(i=>`${i} -> open:false`)},onCloseReason:r=>{e(r),c(i=>i==="select"?`select -> reason:${r}`:`reason:${r}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{c("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",children:"Outside target"})]})})}const C={render:()=>n.jsx(Ze,{}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Telemetry Menu"}),c=e.getByRole("button",{name:"Outside target"});await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await s.click(a),await s.click(e.getByRole("menuitem",{name:"Duplicate"})),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await s.click(a),await s.keyboard("{Escape}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(a),await s.click(c),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await s.click(a),await s.click(a),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await s.click(a),await s.keyboard("{Tab}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await t(c).toHaveFocus()}};function et(){const[o,e]=l.useState(!0),[a,c]=l.useState(!1),[r,i]=l.useState(0),[O,Ve]=l.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:q,children:[n.jsxs("p",{style:m,children:["Close requests:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:p,children:r})]}),n.jsxs("p",{style:m,children:["Pending parent close:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:p,children:a?"yes":"no"})]}),n.jsxs("p",{style:m,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:p,children:O})]}),n.jsx(y,{label:"Controlled Contract Menu",open:o,onOpenChange:Ue=>{if(Ue){e(!0),c(!1);return}a||(i(Qe=>Qe+1),c(!0))},onCloseReason:Ve,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",onClick:()=>{e(!1),c(!1)},children:"Apply close request"})]})})}const H={render:()=>n.jsx(et,{}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Controlled Contract Menu"}),c=e.getByRole("button",{name:"Apply close request"});await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await s.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await s.click(c),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await s.click(a),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await s.click(c),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},f={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Quick Actions"});await s.click(a);const c=e.getByRole("menu");await s.keyboard("{PageDown}"),await t(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await s.keyboard("{PageUp}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await s.keyboard("res"),await t(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await t(c).toBeInTheDocument()}},S={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"IME Typeahead Guard"});await s.click(a);const c=e.getByRole("menu");await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),u.keyDown(c,{key:"a",isComposing:!0,keyCode:229,which:229}),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await s.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},A={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"All Disabled Keyboard"});await s.click(a);const c=e.getByRole("menu",{name:"All Disabled Keyboard"}),r=e.getAllByRole("menuitem");r.forEach(i=>{t(i).toHaveAttribute("aria-disabled","true"),t(i).toHaveAttribute("tabindex","-1")}),u.keyDown(c,{key:"ArrowDown"}),u.keyDown(c,{key:"ArrowUp"}),u.keyDown(c,{key:"Home"}),u.keyDown(c,{key:"End"}),u.keyDown(c,{key:"PageDown"}),u.keyDown(c,{key:"PageUp"}),u.keyDown(c,{key:"Enter"}),await t(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),r.forEach(i=>{t(i).toHaveAttribute("tabindex","-1")})}},j={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(y,{label:"Focus Policy",items:g}),n.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Focus Policy"});await s.click(a),await t(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const c=e.getByRole("button",{name:"Next Focus Target"});await s.click(c),await t(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await t(c).toHaveFocus()}},F={render:()=>n.jsx(w,{gap:12,children:n.jsx("div",{style:v,children:n.jsx(y,{label:"Escape Focus Policy",items:g})})}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Escape Focus Policy"});await s.click(a),await t(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await t(a).toHaveFocus()}},M={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(y,{label:"Tab Flow Menu",items:g}),n.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:o})=>{const e=d(o),a=await e.findByRole("button",{name:"Tab Flow Menu"});await s.click(a),await t(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await s.keyboard("{Tab}"),await t(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},P={render:()=>n.jsx(w,{gap:8,children:n.jsx($e,{triggerLabel:"Open container",children:n.jsxs("div",{style:q,children:[n.jsx("p",{style:Je,children:"Popover shell"}),n.jsx(y,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:o})=>{const e=d(o);await s.click(await e.findByRole("button",{name:"Open container"})),await s.click(e.getByRole("button",{name:"Inner actions"})),await t(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var G,N,L;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:"{}",...(L=(N=B.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var V,U,Q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Q=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var $,J,_;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(J=k.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var z,W,X;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("menu", {
      name: "Blocking actions"
    })).toBeInTheDocument();
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
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ce;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var re,ie,le;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ue,me;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <SelectionTelemetryDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Release Actions"
    });
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("none");
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
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
    await expect(canvas.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete");
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
  }
}`,...(me=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ye,we;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(we=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ge,ve,Be;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Be=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var be,ke,Te;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Te=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var xe,he,De;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(De=(he=f.parameters)==null?void 0:he.docs)==null?void 0:De.source}}};var Ee,Re,Ie;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Ce,He,fe;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(fe=(He=A.parameters)==null?void 0:He.docs)==null?void 0:fe.source}}};var Se,Ae,je;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Fe,Me,Pe;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Oe,qe,Ke;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ge,Ne,Le;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Le=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};const dt=["Default","DenseActions","IconTrigger","IconItemNaming","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","KeyboardActivationDedupe","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder"];export{A as AllItemsDisabledKeyboardNoop,C as CloseReasonTelemetry,H as ControlledOpenContract,B as Default,b as DenseActions,h as DismissGuardHooks,F as EscapeDismissFocusReturn,D as EscapePreemptedByGlobalHandler,E as EscapeRepeatGuard,T as IconItemNaming,k as IconTrigger,I as KeyboardActivationDedupe,P as NestedDismissOrder,x as NonDismissible,j as OutsideDismissFocusTransfer,R as SelectionTelemetry,M as TabDismissToNextControl,S as TypeaheadIgnoresImeComposition,f as TypeaheadNavigation,dt as __namedExportsOrder,lt as default};
