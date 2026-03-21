import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{P as Ne}from"./Popover-DKo9grEn.js";import{D as m}from"./Dropdown-D8w7RnVu.js";import{within as l,userEvent as a,expect as t,fireEvent as u}from"./index-DgAF9SIF.js";import{S as w,s as y,a as p}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-DAyP3iyR.js";import"./Button-Cn1nutIP.js";const g=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],at={title:"Overlay/Dropdown",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End/PageUp/PageDown), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:g}},v={display:"grid",gap:12,justifyItems:"start"},O={display:"grid",gap:8,justifyItems:"start"},Le={margin:0},B={},b={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},k={args:{label:"⋯",triggerAriaLabel:"More actions",items:g},play:async({canvasElement:s})=>{const e=l(s);await a.click(await e.findByRole("button",{name:"More actions"})),await t(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},T={args:{label:"Icon items",items:[{key:"settings",label:n.jsx("span",{"aria-hidden":"true",children:"⚙"}),ariaLabel:"Settings",textValue:"Settings"},{key:"archive",label:n.jsx("span",{"aria-hidden":"true",children:"🗄"}),ariaLabel:"Archive",textValue:"Archive"}]},play:async({canvasElement:s})=>{const e=l(s);await a.click(await e.findByRole("button",{name:"Icon items"}));const o=e.getByRole("menu",{name:"Icon items"});await t(e.getByRole("menuitem",{name:"Settings"})).toBeInTheDocument(),await a.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus(),await t(o).toBeInTheDocument()}},x={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:g},render:s=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(m,{...s}),n.jsx("button",{type:"button",children:"Outside target"})]})}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Blocking actions"});await a.click(o),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.click(e.getByRole("button",{name:"Outside target"})),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function Ve(){const[s,e]=d.useState(0),[o,c]=d.useState(0);return n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:y,children:["Escape guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-escape-calls",style:p,children:s})]}),n.jsxs("p",{style:y,children:["Outside guard calls:"," ",n.jsx("strong",{"data-testid":"dropdown-guard-outside-calls",style:p,children:o})]}),n.jsx(m,{label:"Guarded menu",onEscapeKeyDown:r=>{r.preventDefault(),e(i=>i+1)},onPointerDownOutside:r=>{r.preventDefault(),c(i=>i+1)},items:g}),n.jsx("button",{type:"button",children:"Guarded outside target"})]})})}const h={render:()=>n.jsx(Ve,{}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Guarded menu"}),c=e.getByRole("button",{name:"Guarded outside target"});await a.click(o),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-escape-calls")).toHaveTextContent("1"),await a.click(c),await t(e.getByRole("menu",{name:"Guarded menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-guard-outside-calls")).toHaveTextContent("1")}};function Ue(){const[s,e]=d.useState(!1),[o,c]=d.useState(0);return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&i.preventDefault()};return document.addEventListener("keydown",r,!0),()=>{document.removeEventListener("keydown",r,!0)}},[]),n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:y,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-escape-calls",style:p,children:o})]}),n.jsx(m,{label:"Preempted Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>c(r=>r+1),items:g})]})})}const D={render:()=>n.jsx(Ue,{}),play:async({canvasElement:s})=>{const e=l(s),o=s.ownerDocument,c=await e.findByRole("button",{name:"Preempted Escape Menu"});await a.click(c),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),u.keyDown(o,{key:"Escape",ctrlKey:!0}),u.keyDown(o,{key:"Escape",altKey:!0}),u.keyDown(o,{key:"Escape",metaKey:!0}),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0"),await a.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function Qe(){const[s,e]=d.useState(!1),[o,c]=d.useState(0),[r,i]=d.useState("none");return n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsxs("p",{style:y,children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-escape-calls",style:p,children:o})]}),n.jsxs("p",{style:y,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-repeat-close-reason",style:p,children:r})]}),n.jsx(m,{label:"Repeat Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>c(P=>P+1),onCloseReason:i,items:g})]})})}const E={render:()=>n.jsx(Qe,{}),play:async({canvasElement:s})=>{const e=l(s),o=s.ownerDocument,c=await e.findByRole("button",{name:"Repeat Escape Menu"});await a.click(c),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),u.keyDown(o,{key:"Escape",repeat:!0}),await t(e.getByRole("menu",{name:"Repeat Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("none"),await a.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Repeat Escape Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-repeat-escape-calls")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-repeat-close-reason")).toHaveTextContent("escape-key")}};function $e(){const[s,e]=d.useState("none"),o=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return n.jsxs(w,{gap:8,children:[n.jsxs("p",{style:y,children:["Selected action:"," ",n.jsx("strong",{"data-testid":"dropdown-selected-action",style:p,children:s})]}),n.jsx(m,{label:"Release Actions",items:o})]})}const R={render:()=>n.jsx($e,{}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Release Actions"});await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await a.click(o),await t(e.getByRole("menu")).toBeInTheDocument();const c=e.getByRole("menuitem",{name:"Duplicate"}),r=e.getByRole("menuitem",{name:"Archive"});await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await a.keyboard("{End}");const i=e.getByRole("menuitem",{name:"Delete"});await t(i).toHaveFocus(),u.keyDown(i,{key:"Enter",ctrlKey:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),u.keyDown(i,{key:"Enter",repeat:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await a.keyboard("{Enter}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),o.focus(),await a.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};function Je(){const[s,e]=d.useState("none"),[o,c]=d.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:O,children:[n.jsxs("p",{style:y,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-close-reason",style:p,children:s})]}),n.jsxs("p",{style:y,children:["Last close trace:"," ",n.jsx("strong",{"data-testid":"dropdown-close-trace",style:p,children:o})]}),n.jsx(m,{label:"Telemetry Menu",onOpenChange:r=>{r||c(i=>`${i} -> open:false`)},onCloseReason:r=>{e(r),c(i=>i==="select"?`select -> reason:${r}`:`reason:${r}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{c("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",children:"Outside target"})]})})}const I={render:()=>n.jsx(Je,{}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Telemetry Menu"}),c=e.getByRole("button",{name:"Outside target"});await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await a.click(o),await a.click(e.getByRole("menuitem",{name:"Duplicate"})),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await a.click(o),await a.keyboard("{Escape}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await a.click(o),await a.click(c),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await a.click(o),await a.click(o),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await a.click(o),await a.keyboard("{Tab}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await t(c).toHaveFocus()}};function _e(){const[s,e]=d.useState(!0),[o,c]=d.useState(!1),[r,i]=d.useState(0),[P,qe]=d.useState("none");return n.jsx(w,{gap:8,children:n.jsxs("div",{style:O,children:[n.jsxs("p",{style:y,children:["Close requests:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-close-requests",style:p,children:r})]}),n.jsxs("p",{style:y,children:["Pending parent close:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-pending-close",style:p,children:o?"yes":"no"})]}),n.jsxs("p",{style:y,children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"dropdown-controlled-last-reason",style:p,children:P})]}),n.jsx(m,{label:"Controlled Contract Menu",open:s,onOpenChange:Ge=>{if(Ge){e(!0),c(!1);return}o||(i(Ke=>Ke+1),c(!0))},onCloseReason:qe,items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),n.jsx("button",{type:"button",onClick:()=>{e(!1),c(!1)},children:"Apply close request"})]})})}const C={render:()=>n.jsx(_e,{}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Controlled Contract Menu"}),c=e.getByRole("button",{name:"Apply close request"});await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("0"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await a.click(o),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("1"),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("yes"),await a.click(c),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-pending-close")).toHaveTextContent("no"),await a.click(o),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Controlled Contract Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-controlled-last-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-controlled-close-requests")).toHaveTextContent("2"),await a.click(c),await t(e.queryByRole("menu",{name:"Controlled Contract Menu"})).not.toBeInTheDocument()}},H={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Quick Actions"});await a.click(o);const c=e.getByRole("menu");await a.keyboard("{PageDown}"),await t(e.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await a.keyboard("{PageUp}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await a.keyboard("a"),await t(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await a.keyboard("a"),await t(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await a.keyboard("res"),await t(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await t(c).toBeInTheDocument()}},f={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"IME Typeahead Guard"});await a.click(o);const c=e.getByRole("menu");await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),u.keyDown(c,{key:"a",isComposing:!0,keyCode:229,which:229}),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await a.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},S={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"All Disabled Keyboard"});await a.click(o);const c=e.getByRole("menu",{name:"All Disabled Keyboard"}),r=e.getAllByRole("menuitem");r.forEach(i=>{t(i).toHaveAttribute("aria-disabled","true"),t(i).toHaveAttribute("tabindex","-1")}),u.keyDown(c,{key:"ArrowDown"}),u.keyDown(c,{key:"ArrowUp"}),u.keyDown(c,{key:"Home"}),u.keyDown(c,{key:"End"}),u.keyDown(c,{key:"PageDown"}),u.keyDown(c,{key:"PageUp"}),u.keyDown(c,{key:"Enter"}),await t(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),r.forEach(i=>{t(i).toHaveAttribute("tabindex","-1")})}},A={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(m,{label:"Focus Policy",items:g}),n.jsx("button",{type:"button",children:"Next Focus Target"})]})}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Focus Policy"});await a.click(o),await t(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const c=e.getByRole("button",{name:"Next Focus Target"});await a.click(c),await t(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await t(c).toHaveFocus()}},j={render:()=>n.jsx(w,{gap:12,children:n.jsx("div",{style:v,children:n.jsx(m,{label:"Escape Focus Policy",items:g})})}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Escape Focus Policy"});await a.click(o),await t(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await t(o).toHaveFocus()}},F={render:()=>n.jsx(w,{gap:12,children:n.jsxs("div",{style:v,children:[n.jsx(m,{label:"Tab Flow Menu",items:g}),n.jsx("button",{type:"button",children:"After Menu Control"})]})}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Tab Flow Menu"});await a.click(o),await t(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await a.keyboard("{Tab}"),await t(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},M={render:()=>n.jsx(w,{gap:8,children:n.jsx(Ne,{triggerLabel:"Open container",children:n.jsxs("div",{style:O,children:[n.jsx("p",{style:Le,children:"Popover shell"}),n.jsx(m,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})}),play:async({canvasElement:s})=>{const e=l(s);await a.click(await e.findByRole("button",{name:"Open container"})),await a.click(e.getByRole("button",{name:"Inner actions"})),await t(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var q,G,K;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(K=(G=B.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var N,L,V;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(L=b.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var U,Q,$;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var J,_,z;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(z=(_=T.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var W,X,Y;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ce,re;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ie,le,de;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ye;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var pe,we,ge;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(we=C.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var ve,Be,be;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:be.source}}};var ke,Te,xe;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(xe=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var he,De,Ee;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Re,Ie,Ce;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var He,fe,Se;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Se=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ae,je,Fe;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Fe=(je=F.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Me,Pe,Oe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Oe=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};const ot=["Default","DenseActions","IconTrigger","IconItemNaming","NonDismissible","DismissGuardHooks","EscapePreemptedByGlobalHandler","EscapeRepeatGuard","SelectionTelemetry","CloseReasonTelemetry","ControlledOpenContract","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder"];export{S as AllItemsDisabledKeyboardNoop,I as CloseReasonTelemetry,C as ControlledOpenContract,B as Default,b as DenseActions,h as DismissGuardHooks,j as EscapeDismissFocusReturn,D as EscapePreemptedByGlobalHandler,E as EscapeRepeatGuard,T as IconItemNaming,k as IconTrigger,M as NestedDismissOrder,x as NonDismissible,A as OutsideDismissFocusTransfer,R as SelectionTelemetry,F as TabDismissToNextControl,f as TypeaheadIgnoresImeComposition,H as TypeaheadNavigation,ot as __namedExportsOrder,at as default};
