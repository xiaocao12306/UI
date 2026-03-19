import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-BWu4c2F4.js";import{P as ve}from"./Popover-DK3EuSCd.js";import{D as d}from"./Dropdown-CYoe68YA.js";import{within as l,userEvent as n,expect as t,fireEvent as u}from"./index-DgAF9SIF.js";import"./DismissableLayer-BWoUnDZk.js";import"./Button-BNFQVefv.js";const m=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],Ie={title:"Overlay/Dropdown",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:m}},p={},g={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},v={args:{label:"⋯",triggerAriaLabel:"More actions",items:m},play:async({canvasElement:s})=>{const e=l(s);await n.click(await e.findByRole("button",{name:"More actions"})),await t(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},w={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:m},render:s=>a.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[a.jsx(d,{...s}),a.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Blocking actions"});await n.click(o),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await n.click(e.getByRole("button",{name:"Outside target"})),await t(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function we(){const[s,e]=y.useState(!1),[o,c]=y.useState(0);return y.useEffect(()=>{const r=i=>{i.key==="Escape"&&i.preventDefault()};return document.addEventListener("keydown",r,!0),()=>{document.removeEventListener("keydown",r,!0)}},[]),a.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"dropdown-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(d,{label:"Preempted Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>c(r=>r+1),items:m})]})}const b={render:()=>a.jsx(we,{}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Preempted Escape Menu"});await n.click(o),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await t(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await t(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function be(){const[s,e]=y.useState("none"),o=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return a.jsxs("div",{style:{display:"grid",gap:8},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action:"," ",a.jsx("strong",{"data-testid":"dropdown-selected-action",style:{color:"var(--aurora-text-primary)"},children:s})]}),a.jsx(d,{label:"Release Actions",items:o})]})}const B={render:()=>a.jsx(be,{}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Release Actions"});await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await n.click(o),await t(e.getByRole("menu")).toBeInTheDocument();const c=e.getByRole("menuitem",{name:"Duplicate"}),r=e.getByRole("menuitem",{name:"Archive"});await t(c).toHaveAttribute("aria-keyshortcuts","Enter Space"),await t(r).not.toHaveAttribute("aria-keyshortcuts"),await n.keyboard("{End}");const i=e.getByRole("menuitem",{name:"Delete"});await t(i).toHaveFocus(),u.keyDown(i,{key:"Enter",repeat:!0}),await t(e.getByRole("menu")).toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("none"),await n.keyboard("{Enter}"),await t(e.queryByRole("menu")).not.toBeInTheDocument(),await t(e.getByTestId("dropdown-selected-action")).toHaveTextContent("Delete"),o.focus(),await n.keyboard("{ArrowDown}"),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};function Be(){const[s,e]=y.useState("none"),[o,c]=y.useState("none");return a.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"dropdown-close-reason",style:{color:"var(--aurora-text-primary)"},children:s})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",a.jsx("strong",{"data-testid":"dropdown-close-trace",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(d,{label:"Telemetry Menu",onOpenChange:r=>{r||c(i=>`${i} -> open:false`)},onCloseReason:r=>{e(r),c(i=>i==="select"?`select -> reason:${r}`:`reason:${r}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{c("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),a.jsx("button",{type:"button",children:"Outside target"})]})}const k={render:()=>a.jsx(Be,{}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Telemetry Menu"}),c=e.getByRole("button",{name:"Outside target"});await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await n.click(o),await n.click(e.getByRole("menuitem",{name:"Duplicate"})),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await n.click(o),await n.keyboard("{Escape}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await n.click(o),await n.click(c),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await n.click(o),await n.click(o),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await n.click(o),await n.keyboard("{Tab}"),await t(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await t(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await t(c).toHaveFocus()}},T={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Quick Actions"});await n.click(o);const c=e.getByRole("menu");await n.keyboard("a"),await t(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await n.keyboard("a"),await t(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await n.keyboard("res"),await t(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await t(c).toBeInTheDocument()}},x={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"IME Typeahead Guard"});await n.click(o);const c=e.getByRole("menu");await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),u.keyDown(c,{key:"a",isComposing:!0,keyCode:229,which:229}),await t(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n.keyboard("a"),await t(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},E={args:{label:"All Disabled Keyboard",items:[{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",disabled:!0}]},play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"All Disabled Keyboard"});await n.click(o);const c=e.getByRole("menu",{name:"All Disabled Keyboard"}),r=e.getAllByRole("menuitem");r.forEach(i=>{t(i).toHaveAttribute("aria-disabled","true"),t(i).toHaveAttribute("tabindex","-1")}),u.keyDown(c,{key:"ArrowDown"}),u.keyDown(c,{key:"ArrowUp"}),u.keyDown(c,{key:"Home"}),u.keyDown(c,{key:"End"}),u.keyDown(c,{key:"Enter"}),await t(e.getByRole("menu",{name:"All Disabled Keyboard"})).toBeInTheDocument(),r.forEach(i=>{t(i).toHaveAttribute("tabindex","-1")})}},R={render:()=>a.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[a.jsx(d,{label:"Focus Policy",items:m}),a.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Focus Policy"});await n.click(o),await t(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const c=e.getByRole("button",{name:"Next Focus Target"});await n.click(c),await t(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await t(c).toHaveFocus()}},h={render:()=>a.jsx("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:a.jsx(d,{label:"Escape Focus Policy",items:m})}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Escape Focus Policy"});await n.click(o),await t(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await t(o).toHaveFocus()}},D={render:()=>a.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[a.jsx(d,{label:"Tab Flow Menu",items:m}),a.jsx("button",{type:"button",children:"After Menu Control"})]}),play:async({canvasElement:s})=>{const e=l(s),o=await e.findByRole("button",{name:"Tab Flow Menu"});await n.click(o),await t(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await n.keyboard("{Tab}"),await t(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await t(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},I={render:()=>a.jsx(ve,{triggerLabel:"Open container",children:a.jsxs("div",{style:{display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0},children:"Popover shell"}),a.jsx(d,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),play:async({canvasElement:s})=>{const e=l(s);await n.click(await e.findByRole("button",{name:"Open container"})),await n.click(e.getByRole("button",{name:"Inner actions"})),await t(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await t(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var f,H,A;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(A=(H=p.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var F,C,j;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(C=g.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var P,M,S;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(M=v.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var O,N,q;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Blocking actions",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    items
  },
  render: args => <div style={{
    display: "grid",
    gap: 12,
    justifyItems: "start"
  }}>
      <Dropdown {...args} />
      <button type="button">Outside target</button>
    </div>,
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
}`,...(q=(N=w.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var K,L,G;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Preempted Escape Menu"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Preempted Escape Menu"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("menu", {
      name: "Preempted Escape Menu"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("dropdown-escape-calls")).toHaveTextContent("0");
  }
}`,...(G=(L=b.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var Q,V,$;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(V=B.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var J,U,_;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(_=(U=k.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var z,W,X;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
      key: "Enter"
    });
    await expect(canvas.getByRole("menu", {
      name: "All Disabled Keyboard"
    })).toBeInTheDocument();
    menuItems.forEach(item => {
      expect(item).toHaveAttribute("tabindex", "-1");
    });
  }
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ce;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    justifyItems: "start"
  }}>
      <Dropdown label="Focus Policy" items={items} />
      <button type="button">Next Focus Target</button>
    </div>,
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
}`,...(ce=(se=R.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var re,ie,le;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    justifyItems: "start"
  }}>
      <Dropdown label="Escape Focus Policy" items={items} />
    </div>,
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
}`,...(le=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ue,me;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    justifyItems: "start"
  }}>
      <Dropdown label="Tab Flow Menu" items={items} />
      <button type="button">After Menu Control</button>
    </div>,
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
}`,...(me=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ye,pe,ge;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <Popover triggerLabel="Open container">
      <div style={{
      display: "grid",
      gap: 8
    }}>
        <p style={{
        margin: 0
      }}>Popover shell</p>
        <Dropdown label="Inner actions" items={[{
        key: "duplicate",
        label: "Duplicate"
      }, {
        key: "archive",
        label: "Archive"
      }]} />
      </div>
    </Popover>,
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
}`,...(ge=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const fe=["Default","DenseActions","IconTrigger","NonDismissible","EscapePreemptedByGlobalHandler","SelectionTelemetry","CloseReasonTelemetry","TypeaheadNavigation","TypeaheadIgnoresImeComposition","AllItemsDisabledKeyboardNoop","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder"];export{E as AllItemsDisabledKeyboardNoop,k as CloseReasonTelemetry,p as Default,g as DenseActions,h as EscapeDismissFocusReturn,b as EscapePreemptedByGlobalHandler,v as IconTrigger,I as NestedDismissOrder,w as NonDismissible,R as OutsideDismissFocusTransfer,B as SelectionTelemetry,D as TabDismissToNextControl,x as TypeaheadIgnoresImeComposition,T as TypeaheadNavigation,fe as __namedExportsOrder,Ie as default};
