import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{P as me}from"./Popover-B7y8yO8m.js";import{D as i}from"./Dropdown-CqyhqKdI.js";import{within as r,expect as n,userEvent as a,fireEvent as de}from"./index-DgAF9SIF.js";import"./DismissableLayer-DGNgq5OX.js";import"./Button-BCHo91JE.js";const l=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],Re={title:"Overlay/Dropdown",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:l}},d={},y={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},p={args:{label:"⋯",triggerAriaLabel:"More actions",items:l},play:async({canvasElement:s})=>{const e=r(s);await a.click(await e.findByRole("button",{name:"More actions"})),await n(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},g={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:l},render:s=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(i,{...s}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Blocking actions"});await a.click(o),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await a.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function ye(){const[s,e]=u.useState(!1),[o,c]=u.useState(0);return u.useEffect(()=>{const m=h=>{h.key==="Escape"&&h.preventDefault()};return document.addEventListener("keydown",m,!0),()=>{document.removeEventListener("keydown",m,!0)}},[]),t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsx(i,{label:"Preempted Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>c(m=>m+1),items:l})]})}const v={render:()=>t.jsx(ye,{}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Preempted Escape Menu"});await a.click(o),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function pe(){const[s,e]=u.useState("none"),o=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",t.jsx("strong",{children:s})]}),t.jsx(i,{label:"Release Actions",items:o})]})}const w={render:()=>t.jsx(pe,{}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Release Actions"});await a.click(o),await n(e.getByRole("menu")).toBeInTheDocument(),await a.keyboard("{End}"),await n(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await a.keyboard("{Enter}"),await n(e.queryByRole("menu")).not.toBeInTheDocument(),await n(e.getByText("Delete")).toBeInTheDocument(),o.focus(),await a.keyboard("{ArrowDown}"),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};function ge(){const[s,e]=u.useState("none");return t.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-close-reason",style:{color:"var(--aurora-text-primary)"},children:s})]}),t.jsx(i,{label:"Telemetry Menu",onCloseReason:o=>e(o),items:[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",children:"Outside target"})]})}const b={render:()=>t.jsx(ge,{}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Telemetry Menu"}),c=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await a.click(o),await a.click(e.getByRole("menuitem",{name:"Duplicate"})),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await a.click(o),await a.keyboard("{Escape}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await a.click(o),await a.click(c),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await a.click(o),await a.click(o),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await a.click(o),await a.keyboard("{Tab}"),await n(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await n(c).toHaveFocus()}},B={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Quick Actions"});await a.click(o);const c=e.getByRole("menu");await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await a.keyboard("res"),await n(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await n(c).toBeInTheDocument()}},k={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"IME Typeahead Guard"});await a.click(o);const c=e.getByRole("menu");await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),de.keyDown(c,{key:"a",isComposing:!0,keyCode:229,which:229}),await n(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await a.keyboard("a"),await n(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},T={render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(i,{label:"Focus Policy",items:l}),t.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Focus Policy"});await a.click(o),await n(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const c=e.getByRole("button",{name:"Next Focus Target"});await a.click(c),await n(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await n(c).toHaveFocus()}},E={render:()=>t.jsx("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:t.jsx(i,{label:"Escape Focus Policy",items:l})}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Escape Focus Policy"});await a.click(o),await n(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await n(o).toHaveFocus()}},R={render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(i,{label:"Tab Flow Menu",items:l}),t.jsx("button",{type:"button",children:"After Menu Control"})]}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Tab Flow Menu"});await a.click(o),await n(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await a.keyboard("{Tab}"),await n(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await n(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},x={render:()=>t.jsx(me,{triggerLabel:"Open container",children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Popover shell"}),t.jsx(i,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),play:async({canvasElement:s})=>{const e=r(s);await a.click(await e.findByRole("button",{name:"Open container"})),await a.click(e.getByRole("button",{name:"Inner actions"})),await n(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var D,I,f;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(f=(I=d.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var F,j,P;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(j=y.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var H,A,C;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var M,S,O;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(S=g.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var N,q,L;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(q=v.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var G,Q,V;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var J,_,K;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    await userEvent.click(trigger);
    await userEvent.click(canvas.getByRole("menuitem", {
      name: "Duplicate"
    }));
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select");
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(trigger);
    await userEvent.click(outsideTarget);
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer");
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click");
    await userEvent.click(trigger);
    await userEvent.keyboard("{Tab}");
    await expect(canvas.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key");
    await expect(outsideTarget).toHaveFocus();
  }
}`,...(K=(_=b.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var z,U,W;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,oe;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(te=E.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ce,re;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ie,le,ue;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};const xe=["Default","DenseActions","IconTrigger","NonDismissible","EscapePreemptedByGlobalHandler","SelectionTelemetry","CloseReasonTelemetry","TypeaheadNavigation","TypeaheadIgnoresImeComposition","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder"];export{b as CloseReasonTelemetry,d as Default,y as DenseActions,E as EscapeDismissFocusReturn,v as EscapePreemptedByGlobalHandler,p as IconTrigger,x as NestedDismissOrder,g as NonDismissible,T as OutsideDismissFocusTransfer,w as SelectionTelemetry,R as TabDismissToNextControl,k as TypeaheadIgnoresImeComposition,B as TypeaheadNavigation,xe as __namedExportsOrder,Re as default};
