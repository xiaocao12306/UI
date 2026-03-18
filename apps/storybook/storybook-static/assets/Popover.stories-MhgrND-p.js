import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./index-BWu4c2F4.js";import{B as z}from"./Button-DeQ1OHWt.js";import{I as M}from"./Input-CK-2zJ6Z.js";import{P as c}from"./Popover-BwLjAUhJ.js";import{within as i,expect as r,userEvent as o}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./DismissableLayer-DGNgq5OX.js";const $={title:"Overlay/Popover",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},p={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:a})=>{const e=i(a),n=await e.findByRole("button",{name:"Open Popover"});await o.click(n),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),n.focus(),await o.keyboard("{ArrowDown}"),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},g={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(M,{id:"name",defaultValue:"Aurora Team"}),t.jsx(z,{size:"sm",children:"Save"})]})}},d={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:t.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:a})=>{const e=i(a),n=await e.findByRole("button",{name:"More context actions"});await o.click(n),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},m={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:t.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:a=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(c,{...a}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:a})=>{const e=i(a),n=await e.findByRole("button",{name:"Review policy"});await o.click(n),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await o.click(e.getByRole("button",{name:"Outside target"})),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},u={args:{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(c,{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=i(a),n=await e.findByRole("button",{name:"Focus Policy"});await o.click(n),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const s=e.getByRole("button",{name:"Popover Next Focus Target"});await o.click(s),await r(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await r(s).toHaveFocus()}};function W(){const[a,e]=w.useState("none");return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-close-reason",style:{color:"var(--aurora-text-primary)"},children:a})]}),t.jsx(c,{triggerLabel:"Telemetry popover",onCloseReason:n=>e(n),children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})}),t.jsx("button",{type:"button",children:"Outside target"})]})}const y={args:{triggerLabel:"Telemetry popover",children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})},render:()=>t.jsx(W,{}),play:async({canvasElement:a})=>{const e=i(a),n=await e.findByRole("button",{name:"Telemetry popover"}),s=e.getByRole("button",{name:"Outside target"});await r(e.getByTestId("popover-close-reason")).toHaveTextContent("none"),await o.click(n),await o.keyboard("{Escape}"),await r(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await o.click(n),await o.click(s),await r(e.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer"),await o.click(n),await o.click(n),await r(e.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click")}};function G(){const[a,e]=w.useState(!1),[n,s]=w.useState(0);return w.useEffect(()=>{const l=h=>{h.key==="Escape"&&h.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(c,{triggerLabel:"Preempted popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>s(l=>l+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const v={args:{triggerLabel:"Preempted popover",children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>t.jsx(G,{}),play:async({canvasElement:a})=>{const e=i(a),n=await e.findByRole("button",{name:"Preempted popover"});await o.click(n),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await r(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};var b,x,B;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      margin: 0
    }}>Popover content for quick context editing.</p>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Open Popover"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
  }
}`,...(B=(x=p.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var T,E,P;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Edit Name",
    children: <div style={{
      width: 280,
      display: "grid",
      gap: 8
    }}>
        <label htmlFor="name" style={{
        fontSize: "var(--aurora-font-size-sm)",
        fontWeight: 600
      }}>
          Display name
        </label>
        <Input id="name" defaultValue="Aurora Team" />
        <Button size="sm">Save</Button>
      </div>
  }
}`,...(P=(E=g.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var f,k,R;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    triggerLabel: "⋯",
    triggerAriaLabel: "More context actions",
    children: <p style={{
      margin: 0
    }}>Quick context actions from icon trigger.</p>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "More context actions"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
  }
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var I,D,j;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Review policy",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    children: <p style={{
      margin: 0
    }}>This popover must be closed via trigger toggle.</p>
  },
  render: args => <div style={{
    display: "grid",
    gap: 12,
    justifyItems: "start"
  }}>
      <Popover {...args} />
      <button type="button">Outside target</button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Review policy"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside target"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
  }
}`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var L,O,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Focus Policy",
    children: <p style={{
      margin: 0
    }}>Dismiss me by clicking outside.</p>
  },
  render: () => <div style={{
    display: "grid",
    gap: 12,
    justifyItems: "start"
  }}>
      <Popover triggerLabel="Focus Policy">
        <p style={{
        margin: 0
      }}>Dismiss me by clicking outside.</p>
      </Popover>
      <button type="button">Popover Next Focus Target</button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Focus Policy"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    const outsideTarget = canvas.getByRole("button", {
      name: "Popover Next Focus Target"
    });
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(outsideTarget).toHaveFocus();
  }
}`,...(C=(O=u.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var F,H,S;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Telemetry popover",
    children: <p style={{
      margin: 0
    }}>Track trigger / Escape / outside close behavior.</p>
  },
  render: () => <CloseReasonTelemetryPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Telemetry popover"
    });
    const outsideTarget = canvas.getByRole("button", {
      name: "Outside target"
    });
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("none");
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(trigger);
    await userEvent.click(outsideTarget);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer");
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click");
  }
}`,...(S=(H=y.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var N,A,q;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Preempted popover",
    children: <p style={{
      margin: 0
    }}>Escape should remain preempted by global handlers.</p>
  },
  render: () => <EscapePreemptedPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Preempted popover"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");
  }
}`,...(q=(A=v.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const ee=["Default","WithInteractiveContent","IconTrigger","NonDismissible","OutsideDismissFocusTransfer","CloseReasonTelemetry","EscapePreemptedByGlobalHandler"];export{y as CloseReasonTelemetry,p as Default,v as EscapePreemptedByGlobalHandler,d as IconTrigger,m as NonDismissible,u as OutsideDismissFocusTransfer,g as WithInteractiveContent,ee as __namedExportsOrder,$ as default};
