import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as ee}from"./index-BWu4c2F4.js";import{P as ne}from"./Popover-B09rIYNS.js";import{D as i}from"./Dropdown-BcGrxntx.js";import{within as c,userEvent as a,expect as n,fireEvent as ae}from"./index-DgAF9SIF.js";import"./DismissableLayer-qdN3j-ic.js";import"./Button-BCHo91JE.js";const l=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],me={title:"Overlay/Dropdown",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:l}},u={},m={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},y={args:{label:"⋯",triggerAriaLabel:"More actions",items:l},play:async({canvasElement:t})=>{const e=c(t);await a.click(await e.findByRole("button",{name:"More actions"})),await n(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},d={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:l},render:t=>o.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[o.jsx(i,{...t}),o.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:t})=>{const e=c(t),s=await e.findByRole("button",{name:"Blocking actions"});await a.click(s),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function te(){const[t,e]=ee.useState("none"),s=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return o.jsxs("div",{style:{display:"grid",gap:8},children:[o.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",o.jsx("strong",{children:t})]}),o.jsx(i,{label:"Release Actions",items:s})]})}const p={render:()=>o.jsx(te,{}),play:async({canvasElement:t})=>{const e=c(t),s=await e.findByRole("button",{name:"Release Actions"});await a.click(s),await n(e.getByRole("menu")).toBeInTheDocument(),await a.keyboard("{End}"),await n(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await a.keyboard("{Enter}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),await n(e.getByText("Delete")).toBeInTheDocument(),s.focus(),await a.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}},g={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:t})=>{const e=c(t),s=await e.findByRole("button",{name:"Quick Actions"});await a.click(s);const r=e.getByRole("menu");await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await a.keyboard("res"),await n(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await n(r).toBeInTheDocument()}},v={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:t})=>{const e=c(t),s=await e.findByRole("button",{name:"IME Typeahead Guard"});await a.click(s);const r=e.getByRole("menu");await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),ae.keyDown(r,{key:"a",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},w={render:()=>o.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[o.jsx(i,{label:"Focus Policy",items:l}),o.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:t})=>{const e=c(t),s=await e.findByRole("button",{name:"Focus Policy"});await a.click(s),await n(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Next Focus Target"});await a.click(r),await n(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},b={render:()=>o.jsx("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:o.jsx(i,{label:"Escape Focus Policy",items:l})}),play:async({canvasElement:t})=>{const e=c(t),s=await e.findByRole("button",{name:"Escape Focus Policy"});await a.click(s),await n(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await n(s).toHaveFocus()}},B={render:()=>o.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[o.jsx(i,{label:"Tab Flow Menu",items:l}),o.jsx("button",{type:"button",children:"After Menu Control"})]}),play:async({canvasElement:t})=>{const e=c(t),s=await e.findByRole("button",{name:"Tab Flow Menu"});await a.click(s),await n(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await a.keyboard("{Tab}"),await n(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},k={render:()=>o.jsx(ne,{triggerLabel:"Open container",children:o.jsxs("div",{style:{display:"grid",gap:8},children:[o.jsx("p",{style:{margin:0},children:"Popover shell"}),o.jsx(i,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),play:async({canvasElement:t})=>{const e=c(t);await a.click(await e.findByRole("button",{name:"Open container"})),await a.click(e.getByRole("button",{name:"Inner actions"})),await n(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var R,h,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(D=(h=u.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var E,T,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(T=m.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var I,F,f;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(F=y.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var A,j,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var M,H,S;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SelectionTelemetryDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Release Actions"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("menuitem", {
      name: "Delete"
    })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();
    await expect(canvas.getByText("Delete")).toBeInTheDocument();
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
  }
}`,...(S=(H=p.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var O,C,N;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(C=g.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var q,G,L;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(G=v.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var Q,V,J;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(V=w.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var _,z,K;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(z=b.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var U,W,X;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(W=B.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ye=["Default","DenseActions","IconTrigger","NonDismissible","SelectionTelemetry","TypeaheadNavigation","TypeaheadIgnoresImeComposition","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder"];export{u as Default,m as DenseActions,b as EscapeDismissFocusReturn,y as IconTrigger,k as NestedDismissOrder,d as NonDismissible,w as OutsideDismissFocusTransfer,p as SelectionTelemetry,B as TabDismissToNextControl,v as TypeaheadIgnoresImeComposition,g as TypeaheadNavigation,ye as __namedExportsOrder,me as default};
