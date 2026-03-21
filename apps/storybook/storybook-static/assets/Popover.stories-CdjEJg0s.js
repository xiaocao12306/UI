import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as Z}from"./Button-DsGPnCUO.js";import{I as ee}from"./Input-7y9QhjTU.js";import{P as u}from"./Popover-BcwP_FXD.js";import{within as p,expect as n,userEvent as s,fireEvent as k}from"./index-DgAF9SIF.js";import{s as te,a as ne,S as ae}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./DismissableLayer-DAyP3iyR.js";const d={...te},g={...ne};function v({children:a}){return t.jsx(ae,{maxWidth:"min(100%, 620px)",gap:12,children:a})}const he={title:"Overlay/Popover",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},m={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Open Popover"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),o.focus(),await s.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},y={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(ee,{id:"name",defaultValue:"Aurora Team"}),t.jsx(Z,{size:"sm",children:"Save"})]})}},w={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:t.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"More context actions"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},h={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:t.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:a=>t.jsxs(v,{children:[t.jsx(u,{...a}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Review policy"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};function oe(){const[a,e]=l.useState(0),[o,r]=l.useState(0);return t.jsxs(v,{children:[t.jsxs("p",{style:d,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-escape-calls",style:g,children:a})]}),t.jsxs("p",{style:d,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-outside-calls",style:g,children:o})]}),t.jsx(u,{triggerLabel:"Guarded popover",onEscapeKeyDown:c=>{c.preventDefault(),e(i=>i+1)},onPointerDownOutside:c=>{c.preventDefault(),r(i=>i+1)},children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})}const x={args:{triggerLabel:"Guarded popover",children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})},render:()=>t.jsx(oe,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Guarded popover"}),r=e.getByRole("button",{name:"Guarded outside target"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1"),await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1")}},T={args:{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>t.jsxs(v,{children:[t.jsx(u,{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Focus Policy"});await s.click(o),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Popover Next Focus Target"});await s.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}};function se(){const[a,e]=l.useState("none"),[o,r]=l.useState("none");return t.jsxs(v,{children:[t.jsxs("p",{style:d,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-close-reason",style:g,children:a})]}),t.jsxs("p",{style:d,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"popover-close-trace",style:g,children:o})]}),t.jsx(u,{triggerLabel:"Telemetry popover",onOpenChange:c=>{c||r(i=>`${i} -> open:false`)},onCloseReason:c=>{e(c),r(`reason:${c}`)},children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})}),t.jsx("button",{type:"button",children:"Outside target"})]})}const B={args:{triggerLabel:"Telemetry popover",children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})},render:()=>t.jsx(se,{}),play:async({canvasElement:a})=>{const e=p(a),o=await e.findByRole("button",{name:"Telemetry popover"}),r=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("popover-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("none"),await s.click(o),await s.keyboard("{Escape}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(o),await s.click(r),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await s.click(o),await s.click(o),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false")}};function re(){const[a,e]=l.useState(!1),[o,r]=l.useState(0);return l.useEffect(()=>{const c=i=>{i.key==="Escape"&&i.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),t.jsxs(v,{children:[t.jsxs("p",{style:d,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-escape-calls",style:g,children:o})]}),t.jsx(u,{triggerLabel:"Preempted popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(c=>c+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const E={args:{triggerLabel:"Preempted popover",children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>t.jsx(re,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Preempted popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),k.keyDown(o,{key:"Escape",ctrlKey:!0}),k.keyDown(o,{key:"Escape",altKey:!0}),k.keyDown(o,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};function ce(){const[a,e]=l.useState(!1),[o,r]=l.useState(0),[c,i]=l.useState("none");return t.jsxs(v,{children:[t.jsxs("p",{style:d,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-repeat-escape-calls",style:g,children:o})]}),t.jsxs("p",{style:d,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-repeat-close-reason",style:g,children:c})]}),t.jsx(u,{triggerLabel:"Repeat Escape Popover",open:a,onOpenChange:e,onEscapeKeyDown:()=>r(Y=>Y+1),onCloseReason:i,children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})})]})}const b={args:{triggerLabel:"Repeat Escape Popover",children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})},render:()=>t.jsx(ce,{}),play:async({canvasElement:a})=>{const e=p(a),o=a.ownerDocument,r=await e.findByRole("button",{name:"Repeat Escape Popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),k.keyDown(o,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key")}};var D,P,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var I,f,j;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(f=y.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,H,S;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(H=w.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var L,O,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Review policy",
    closeOnEscape: false,
    closeOnOutsidePointer: false,
    children: <p style={{
      margin: 0
    }}>This popover must be closed via trigger toggle.</p>
  },
  render: args => <PopoverShowcase>
      <Popover {...args} />
      <button type="button">Outside target</button>
    </PopoverShowcase>,
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
}`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var G,K,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Guarded popover",
    children: <p style={{
      margin: 0
    }}>Dismiss hooks can block Escape/outside close paths.</p>
  },
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
}`,...(q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var N,A,z;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Focus Policy",
    children: <p style={{
      margin: 0
    }}>Dismiss me by clicking outside.</p>
  },
  render: () => <PopoverShowcase>
      <Popover triggerLabel="Focus Policy">
        <p style={{
        margin: 0
      }}>Dismiss me by clicking outside.</p>
      </Popover>
      <button type="button">Popover Next Focus Target</button>
    </PopoverShowcase>,
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
}`,...(z=(A=T.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var M,W,V;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(W=B.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var Q,_,$;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", {
      name: "Preempted popover"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
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
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-escape-calls")).toHaveTextContent("0");
  }
}`,...($=(_=E.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var U,J,X;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Repeat Escape Popover",
    children: <p style={{
      margin: 0
    }}>Repeated Escape keydown should not close this popover.</p>
  },
  render: () => <EscapeRepeatPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const trigger = await canvas.findByRole("button", {
      name: "Repeat Escape Popover"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      repeat: true
    });
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0");
    await expect(canvas.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1");
    await expect(canvas.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key");
  }
}`,...(X=(J=b.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const xe=["Default","WithInteractiveContent","IconTrigger","NonDismissible","DismissGuardHooks","OutsideDismissFocusTransfer","CloseReasonTelemetry","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{B as CloseReasonTelemetry,m as Default,x as DismissGuardHooks,E as EscapePreemptedByGlobalHandler,b as EscapeRepeatGuard,w as IconTrigger,h as NonDismissible,T as OutsideDismissFocusTransfer,y as WithInteractiveContent,xe as __namedExportsOrder,he as default};
