import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as M}from"./index-BWu4c2F4.js";import{P as L}from"./Popover-DGAvuI1O.js";import{D as g}from"./Dropdown-Bosod_GK.js";import{within as c,userEvent as a,expect as n}from"./index-DgAF9SIF.js";import"./DismissableLayer-B4f576w9.js";import"./Button-Hgh0jeno.js";const v=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],U={title:"Overlay/Dropdown",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:v}},i={},l={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},m={args:{label:"⋯",triggerAriaLabel:"More actions",items:v},play:async({canvasElement:o})=>{const e=c(o);await a.click(await e.findByRole("button",{name:"More actions"})),await n(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}};function Q(){const[o,e]=M.useState("none"),s=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",t.jsx("strong",{children:o})]}),t.jsx(g,{label:"Release Actions",items:s})]})}const u={render:()=>t.jsx(Q,{}),play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Release Actions"});await a.click(s),await n(e.getByRole("menu")).toBeInTheDocument(),await a.keyboard("{End}"),await n(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await a.keyboard("{Enter}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),await n(e.getByText("Delete")).toBeInTheDocument(),s.focus(),await a.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}},d={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Quick Actions"});await a.click(s);const r=e.getByRole("menu");await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await a.keyboard("res"),await n(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await n(r).toBeInTheDocument()}},y={render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(g,{label:"Focus Policy",items:v}),t.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:o})=>{const e=c(o),s=await e.findByRole("button",{name:"Focus Policy"});await a.click(s),await n(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Next Focus Target"});await a.click(r),await n(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}},p={render:()=>t.jsx(L,{triggerLabel:"Open container",children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Popover shell"}),t.jsx(g,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),play:async({canvasElement:o})=>{const e=c(o);await a.click(await e.findByRole("button",{name:"Open container"})),await a.click(e.getByRole("button",{name:"Inner actions"})),await n(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var w,b,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var k,R,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var h,x,T;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(x=m.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var E,I,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(I=u.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var F,f,P;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(f=d.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var S,j,H;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(j=y.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var O,N,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const W=["Default","DenseActions","IconTrigger","SelectionTelemetry","TypeaheadNavigation","OutsideDismissFocusTransfer","NestedDismissOrder"];export{i as Default,l as DenseActions,m as IconTrigger,p as NestedDismissOrder,y as OutsideDismissFocusTransfer,u as SelectionTelemetry,d as TypeaheadNavigation,W as __namedExportsOrder,U as default};
