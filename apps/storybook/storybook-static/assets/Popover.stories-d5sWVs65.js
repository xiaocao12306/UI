import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as K}from"./Button-DS9RTxKh.js";import{I as Q}from"./Input-pKdbw4ss.js";import{P as d}from"./Popover-DXsesf5W.js";import{within as p,expect as a,userEvent as r}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./DismissableLayer-BWoUnDZk.js";const oe={title:"Overlay/Popover",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},g={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:o})=>{const e=p(o),n=await e.findByRole("button",{name:"Open Popover"});await r.click(n),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),n.focus(),await r.keyboard("{ArrowDown}"),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},u={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(Q,{id:"name",defaultValue:"Aurora Team"}),t.jsx(K,{size:"sm",children:"Save"})]})}},m={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:t.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:o})=>{const e=p(o),n=await e.findByRole("button",{name:"More context actions"});await r.click(n),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},v={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:t.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:o=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(d,{...o}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:o})=>{const e=p(o),n=await e.findByRole("button",{name:"Review policy"});await r.click(n),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside target"})),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};function V(){const[o,e]=l.useState(0),[n,s]=l.useState(0);return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-outside-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(d,{triggerLabel:"Guarded popover",onEscapeKeyDown:c=>{c.preventDefault(),e(i=>i+1)},onPointerDownOutside:c=>{c.preventDefault(),s(i=>i+1)},children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})}const y={render:()=>t.jsx(V,{}),play:async({canvasElement:o})=>{const e=p(o),n=await e.findByRole("button",{name:"Guarded popover"}),s=e.getByRole("button",{name:"Guarded outside target"});await r.click(n),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a(e.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1"),await r.click(s),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a(e.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1")}},w={args:{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(d,{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:o})=>{const e=p(o),n=await e.findByRole("button",{name:"Focus Policy"});await r.click(n),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const s=e.getByRole("button",{name:"Popover Next Focus Target"});await r.click(s),await a(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await a(s).toHaveFocus()}};function _(){const[o,e]=l.useState("none"),[n,s]=l.useState("none");return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-close-reason",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"popover-close-trace",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(d,{triggerLabel:"Telemetry popover",onOpenChange:c=>{c||s(i=>`${i} -> open:false`)},onCloseReason:c=>{e(c),s(`reason:${c}`)},children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})}),t.jsx("button",{type:"button",children:"Outside target"})]})}const x={args:{triggerLabel:"Telemetry popover",children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})},render:()=>t.jsx(_,{}),play:async({canvasElement:o})=>{const e=p(o),n=await e.findByRole("button",{name:"Telemetry popover"}),s=e.getByRole("button",{name:"Outside target"});await a(e.getByTestId("popover-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("popover-close-trace")).toHaveTextContent("none"),await r.click(n),await r.keyboard("{Escape}"),await a(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(n),await r.click(s),await a(e.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await r.click(n),await r.click(n),await a(e.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click"),await a(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false")}};function $(){const[o,e]=l.useState(!1),[n,s]=l.useState(0);return l.useEffect(()=>{const c=i=>{i.key==="Escape"&&i.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(d,{triggerLabel:"Preempted popover",open:o,onOpenChange:e,onEscapeKeyDown:()=>s(c=>c+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const h={args:{triggerLabel:"Preempted popover",children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>t.jsx($,{}),play:async({canvasElement:o})=>{const e=p(o),n=await e.findByRole("button",{name:"Preempted popover"});await r.click(n),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};var T,B,b;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(B=g.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var E,f,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(f=u.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var P,I,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var D,j,C;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(j=v.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var H,L,O;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <DismissGuardPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Guarded popover"
    });
    const outsideTarget = canvas.getByRole("button", {
      name: "Guarded outside target"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1");
    await userEvent.click(outsideTarget);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1");
  }
}`,...(O=(L=y.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var S,F,G;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(G=(F=w.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var N,A,q;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("none");
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    await userEvent.click(trigger);
    await userEvent.click(outsideTarget);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await expect(canvas.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click");
    await expect(canvas.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false");
  }
}`,...(q=(A=x.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var z,M,W;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const re=["Default","WithInteractiveContent","IconTrigger","NonDismissible","DismissGuardHooks","OutsideDismissFocusTransfer","CloseReasonTelemetry","EscapePreemptedByGlobalHandler"];export{x as CloseReasonTelemetry,g as Default,y as DismissGuardHooks,h as EscapePreemptedByGlobalHandler,m as IconTrigger,v as NonDismissible,w as OutsideDismissFocusTransfer,u as WithInteractiveContent,re as __namedExportsOrder,oe as default};
