import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as X}from"./index-BWu4c2F4.js";import{P as Y}from"./Popover-N1GXP9dy.js";import{D as i}from"./Dropdown-CgnMekiV.js";import{within as c,userEvent as a,expect as n}from"./index-DgAF9SIF.js";import"./DismissableLayer-B4f576w9.js";import"./Button-DKyBbf41.js";const r=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],ce={title:"Overlay/Dropdown",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:r}},u={},m={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},y={args:{label:"⋯",triggerAriaLabel:"More actions",items:r},play:async({canvasElement:o})=>{const e=c(o);await a.click(await e.findByRole("button",{name:"More actions"})),await n(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},d={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:r},render:o=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(i,{...o}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Blocking actions"});await a.click(s),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function Z(){const[o,e]=X.useState("none"),s=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",t.jsx("strong",{children:o})]}),t.jsx(i,{label:"Release Actions",items:s})]})}const p={render:()=>t.jsx(Z,{}),play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Release Actions"});await a.click(s),await n(e.getByRole("menu")).toBeInTheDocument(),await a.keyboard("{End}"),await n(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await a.keyboard("{Enter}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),await n(e.getByText("Delete")).toBeInTheDocument(),s.focus(),await a.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}},g={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Quick Actions"});await a.click(s);const l=e.getByRole("menu");await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await a.keyboard("res"),await n(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await n(l).toBeInTheDocument()}},v={render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(i,{label:"Focus Policy",items:r}),t.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Focus Policy"});await a.click(s),await n(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const l=e.getByRole("button",{name:"Next Focus Target"});await a.click(l),await n(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await n(l).toHaveFocus()}},w={render:()=>t.jsx("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:t.jsx(i,{label:"Escape Focus Policy",items:r})}),play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Escape Focus Policy"});await a.click(s),await n(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await n(s).toHaveFocus()}},b={render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(i,{label:"Tab Flow Menu",items:r}),t.jsx("button",{type:"button",children:"After Menu Control"})]}),play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Tab Flow Menu"});await a.click(s),await n(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await a.keyboard("{Tab}"),await n(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},B={render:()=>t.jsx(Y,{triggerLabel:"Open container",children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Popover shell"}),t.jsx(i,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),play:async({canvasElement:o})=>{const e=c(o);await a.click(await e.findByRole("button",{name:"Open container"})),await a.click(e.getByRole("button",{name:"Inner actions"})),await n(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var k,R,D;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var h,T,E;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var x,I,F;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(I=y.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var f,A,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(A=d.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var P,O,S;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var M,H,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var q,C,L;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(C=v.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var Q,V,J;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(V=w.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var _,z,G;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,U,W;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const ie=["Default","DenseActions","IconTrigger","NonDismissible","SelectionTelemetry","TypeaheadNavigation","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder"];export{u as Default,m as DenseActions,w as EscapeDismissFocusReturn,y as IconTrigger,B as NestedDismissOrder,d as NonDismissible,v as OutsideDismissFocusTransfer,p as SelectionTelemetry,b as TabDismissToNextControl,g as TypeaheadNavigation,ie as __namedExportsOrder,ce as default};
