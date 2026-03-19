import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{P as me}from"./Popover-DxMZTkSb.js";import{D as l}from"./Dropdown-CDrPyIxd.js";import{within as r,expect as a,userEvent as n,fireEvent as de}from"./index-DgAF9SIF.js";import"./DismissableLayer-BWoUnDZk.js";import"./Button-DeQ1OHWt.js";const u=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],Ee={title:"Overlay/Dropdown",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:u}},y={},p={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},g={args:{label:"⋯",triggerAriaLabel:"More actions",items:u},play:async({canvasElement:s})=>{const e=r(s);await n.click(await e.findByRole("button",{name:"More actions"})),await a(e.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}},v={args:{label:"Blocking actions",closeOnEscape:!1,closeOnOutsidePointer:!1,items:u},render:s=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(l,{...s}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Blocking actions"});await n.click(o),await a(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await a(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument(),await n.click(e.getByRole("button",{name:"Outside target"})),await a(e.getByRole("menu",{name:"Blocking actions"})).toBeInTheDocument()}};function ye(){const[s,e]=d.useState(!1),[o,c]=d.useState(0);return d.useEffect(()=>{const i=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",i,!0),()=>{document.removeEventListener("keydown",i,!0)}},[]),t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dropdown-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsx(l,{label:"Preempted Escape Menu",open:s,onOpenChange:e,onEscapeKeyDown:()=>c(i=>i+1),items:u})]})}const w={render:()=>t.jsx(ye,{}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Preempted Escape Menu"});await n.click(o),await a(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await a(e.getByRole("menu",{name:"Preempted Escape Menu"})).toBeInTheDocument(),await a(e.getByTestId("dropdown-escape-calls")).toHaveTextContent("0")}};function pe(){const[s,e]=d.useState("none"),o=[{key:"duplicate",label:"Duplicate",onSelect:()=>e("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>e("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>e("Delete")}];return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",t.jsx("strong",{children:s})]}),t.jsx(l,{label:"Release Actions",items:o})]})}const b={render:()=>t.jsx(pe,{}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Release Actions"});await n.click(o),await a(e.getByRole("menu")).toBeInTheDocument(),await n.keyboard("{End}"),await a(e.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await n.keyboard("{Enter}"),await a(e.queryByRole("menu")).not.toBeInTheDocument(),await a(e.getByText("Delete")).toBeInTheDocument(),o.focus(),await n.keyboard("{ArrowDown}"),await a(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};function ge(){const[s,e]=d.useState("none"),[o,c]=d.useState("none");return t.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dropdown-close-reason",style:{color:"var(--aurora-text-primary)"},children:s})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dropdown-close-trace",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsx(l,{label:"Telemetry Menu",onOpenChange:i=>{i||c(m=>`${m} -> open:false`)},onCloseReason:i=>{e(i),c(m=>m==="select"?`select -> reason:${i}`:`reason:${i}`)},items:[{key:"duplicate",label:"Duplicate",onSelect:()=>{c("select")}},{key:"rename",label:"Rename"},{key:"archive",label:"Archive"}]}),t.jsx("button",{type:"button",children:"Outside target"})]})}const B={render:()=>t.jsx(ge,{}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Telemetry Menu"}),c=e.getByRole("button",{name:"Outside target"});await a(e.getByTestId("dropdown-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("dropdown-close-trace")).toHaveTextContent("none"),await n.click(o),await n.click(e.getByRole("menuitem",{name:"Duplicate"})),await a(e.getByTestId("dropdown-close-reason")).toHaveTextContent("item-select"),await a(e.getByTestId("dropdown-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await n.click(o),await n.keyboard("{Escape}"),await a(e.getByTestId("dropdown-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await n.click(o),await n.click(c),await a(e.getByTestId("dropdown-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await n.click(o),await n.click(o),await a(e.getByTestId("dropdown-close-reason")).toHaveTextContent("trigger-click"),await a(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:trigger-click -> open:false"),await n.click(o),await n.keyboard("{Tab}"),await a(e.getByTestId("dropdown-close-reason")).toHaveTextContent("tab-key"),await a(e.getByTestId("dropdown-close-trace")).toHaveTextContent("reason:tab-key -> open:false"),await a(c).toHaveFocus()}},k={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Quick Actions"});await n.click(o);const c=e.getByRole("menu");await n.keyboard("a"),await a(e.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await n.keyboard("a"),await a(e.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await n.keyboard("res"),await a(e.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await a(c).toBeInTheDocument()}},T={args:{label:"IME Typeahead Guard",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"rename",label:"Rename"}]},play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"IME Typeahead Guard"});await n.click(o);const c=e.getByRole("menu");await a(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),de.keyDown(c,{key:"a",isComposing:!0,keyCode:229,which:229}),await a(e.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus(),await n.keyboard("a"),await a(e.getByRole("menuitem",{name:"Archive"})).toHaveFocus()}},x={render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(l,{label:"Focus Policy",items:u}),t.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Focus Policy"});await n.click(o),await a(e.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const c=e.getByRole("button",{name:"Next Focus Target"});await n.click(c),await a(e.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await a(c).toHaveFocus()}},E={render:()=>t.jsx("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:t.jsx(l,{label:"Escape Focus Policy",items:u})}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Escape Focus Policy"});await n.click(o),await a(e.getByRole("menu",{name:"Escape Focus Policy"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await a(e.queryByRole("menu",{name:"Escape Focus Policy"})).not.toBeInTheDocument(),await a(o).toHaveFocus()}},R={render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(l,{label:"Tab Flow Menu",items:u}),t.jsx("button",{type:"button",children:"After Menu Control"})]}),play:async({canvasElement:s})=>{const e=r(s),o=await e.findByRole("button",{name:"Tab Flow Menu"});await n.click(o),await a(e.getByRole("menu",{name:"Tab Flow Menu"})).toBeInTheDocument(),await n.keyboard("{Tab}"),await a(e.queryByRole("menu",{name:"Tab Flow Menu"})).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"After Menu Control"})).toHaveFocus()}},h={render:()=>t.jsx(me,{triggerLabel:"Open container",children:t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsx("p",{style:{margin:0},children:"Popover shell"}),t.jsx(l,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),play:async({canvasElement:s})=>{const e=r(s);await n.click(await e.findByRole("button",{name:"Open container"})),await n.click(e.getByRole("button",{name:"Inner actions"})),await a(e.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await a(e.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var D,I,f;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(f=(I=y.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var F,H,C;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(H=p.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var j,P,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(P=g.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var M,S,O;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(S=v.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var N,q,L;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(q=w.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var G,Q,V;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var $,J,_;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(J=B.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var K,z,U;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(z=k.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var W,X,Y;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,oe;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ie,le,ue;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};const Re=["Default","DenseActions","IconTrigger","NonDismissible","EscapePreemptedByGlobalHandler","SelectionTelemetry","CloseReasonTelemetry","TypeaheadNavigation","TypeaheadIgnoresImeComposition","OutsideDismissFocusTransfer","EscapeDismissFocusReturn","TabDismissToNextControl","NestedDismissOrder"];export{B as CloseReasonTelemetry,y as Default,p as DenseActions,E as EscapeDismissFocusReturn,w as EscapePreemptedByGlobalHandler,g as IconTrigger,h as NestedDismissOrder,v as NonDismissible,x as OutsideDismissFocusTransfer,b as SelectionTelemetry,R as TabDismissToNextControl,T as TypeaheadIgnoresImeComposition,k as TypeaheadNavigation,Re as __namedExportsOrder,Ee as default};
