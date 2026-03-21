import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as ae}from"./Button-BMxlc9Nj.js";import{I as oe}from"./Input-D3M9Xqpz.js";import{P as u}from"./Popover-DyeThL2l.js";import{within as l,expect as n,userEvent as s,fireEvent as v}from"./index-DgAF9SIF.js";import{s as re,a as se,S as ce}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./DismissableLayer-DAyP3iyR.js";const g={...re},d={...se};function y({children:o}){return t.jsx(ce,{maxWidth:"min(100%, 620px)",gap:12,children:o})}const De={title:"Overlay/Popover",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},m={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Open Popover"});await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown"),await s.click(a);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Escape"),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown"),a.focus(),await s.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(a).not.toHaveAttribute("aria-keyshortcuts")}};function ie(){const[o,e]=i.useState(0);return t.jsxs(y,{children:[t.jsxs("p",{style:g,children:["ArrowDown open calls:"," ",t.jsx("strong",{"data-testid":"popover-arrowdown-open-calls",style:d,children:o})]}),t.jsx(u,{triggerLabel:"ArrowDown Guard Popover",onOpenChange:a=>{a&&e(r=>r+1)},children:t.jsx("p",{style:{margin:0},children:"Only unmodified ArrowDown should open this popover."})})]})}const w={render:()=>t.jsx(ie,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"ArrowDown Guard Popover"});await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown"),a.focus(),v.keyDown(a,{key:"ArrowDown",ctrlKey:!0}),v.keyDown(a,{key:"ArrowDown",altKey:!0}),v.keyDown(a,{key:"ArrowDown",metaKey:!0}),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("0"),await s.keyboard("{ArrowDown}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(a).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("1")}},h={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(oe,{id:"name",defaultValue:"Aurora Team"}),t.jsx(ae,{size:"sm",children:"Save"})]})}},x={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:t.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"More context actions"});await s.click(a),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},T={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:t.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:o=>t.jsxs(y,{children:[t.jsx(u,{...o}),t.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Review policy"});await s.click(a);const r=e.getByRole("dialog",{name:"Popover content"});await n(r).toBeInTheDocument(),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Outside target"})),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};function pe(){const[o,e]=i.useState(0),[a,r]=i.useState(0);return t.jsxs(y,{children:[t.jsxs("p",{style:g,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-escape-calls",style:d,children:o})]}),t.jsxs("p",{style:g,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"popover-guard-outside-calls",style:d,children:a})]}),t.jsx(u,{triggerLabel:"Guarded popover",onEscapeKeyDown:c=>{c.preventDefault(),e(p=>p+1)},onPointerDownOutside:c=>{c.preventDefault(),r(p=>p+1)},children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})}),t.jsx("button",{type:"button",children:"Guarded outside target"})]})}const B={args:{triggerLabel:"Guarded popover",children:t.jsx("p",{style:{margin:0},children:"Dismiss hooks can block Escape/outside close paths."})},render:()=>t.jsx(pe,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Guarded popover"}),r=e.getByRole("button",{name:"Guarded outside target"});await s.click(a),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-escape-calls")).toHaveTextContent("1"),await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-guard-outside-calls")).toHaveTextContent("1")}},k={args:{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>t.jsxs(y,{children:[t.jsx(u,{triggerLabel:"Focus Policy",children:t.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),t.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Focus Policy"});await s.click(a),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const r=e.getByRole("button",{name:"Popover Next Focus Target"});await s.click(r),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(r).toHaveFocus()}};function le(){const[o,e]=i.useState("none"),[a,r]=i.useState("none");return t.jsxs(y,{children:[t.jsxs("p",{style:g,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-close-reason",style:d,children:o})]}),t.jsxs("p",{style:g,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"popover-close-trace",style:d,children:a})]}),t.jsx(u,{triggerLabel:"Telemetry popover",onOpenChange:c=>{c||r(p=>`${p} -> open:false`)},onCloseReason:c=>{e(c),r(`reason:${c}`)},children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})}),t.jsx("button",{type:"button",children:"Outside target"})]})}const D={args:{triggerLabel:"Telemetry popover",children:t.jsx("p",{style:{margin:0},children:"Track trigger / Escape / outside close behavior."})},render:()=>t.jsx(le,{}),play:async({canvasElement:o})=>{const e=l(o),a=await e.findByRole("button",{name:"Telemetry popover"}),r=e.getByRole("button",{name:"Outside target"});await n(e.getByTestId("popover-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("none"),await s.click(a),await s.keyboard("{Escape}"),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(a),await s.click(r),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await s.click(a),await s.click(a),await n(e.getByTestId("popover-close-reason")).toHaveTextContent("trigger-click"),await n(e.getByTestId("popover-close-trace")).toHaveTextContent("reason:trigger-click -> open:false")}};function ge(){const[o,e]=i.useState(!1),[a,r]=i.useState(0);return i.useEffect(()=>{const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),t.jsxs(y,{children:[t.jsxs("p",{style:g,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-escape-calls",style:d,children:a})]}),t.jsx(u,{triggerLabel:"Preempted popover",open:o,onOpenChange:e,onEscapeKeyDown:()=>r(c=>c+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const b={args:{triggerLabel:"Preempted popover",children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>t.jsx(ge,{}),play:async({canvasElement:o})=>{const e=l(o),a=o.ownerDocument,r=await e.findByRole("button",{name:"Preempted popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),v.keyDown(a,{key:"Escape",ctrlKey:!0}),v.keyDown(a,{key:"Escape",altKey:!0}),v.keyDown(a,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0"),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};function de(){const[o,e]=i.useState(!1),[a,r]=i.useState(0),[c,p]=i.useState("none");return t.jsxs(y,{children:[t.jsxs("p",{style:g,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"popover-repeat-escape-calls",style:d,children:a})]}),t.jsxs("p",{style:g,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"popover-repeat-close-reason",style:d,children:c})]}),t.jsx(u,{triggerLabel:"Repeat Escape Popover",open:o,onOpenChange:e,onEscapeKeyDown:()=>r(ne=>ne+1),onCloseReason:p,children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})})]})}const E={args:{triggerLabel:"Repeat Escape Popover",children:t.jsx("p",{style:{margin:0},children:"Repeated Escape keydown should not close this popover."})},render:()=>t.jsx(de,{}),play:async({canvasElement:o})=>{const e=l(o),a=o.ownerDocument,r=await e.findByRole("button",{name:"Repeat Escape Popover"});await s.click(r),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),v.keyDown(a,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("0"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("none"),await s.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await n(e.getByTestId("popover-repeat-escape-calls")).toHaveTextContent("1"),await n(e.getByTestId("popover-repeat-close-reason")).toHaveTextContent("escape-key")}};var P,R,f;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    await userEvent.click(trigger);
    const dialog = canvas.getByRole("dialog", {
      name: "Popover content"
    });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(f=(R=m.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var I,j,C;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <TriggerArrowDownModifierGuardPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "ArrowDown Guard Popover"
    });
    await expect(trigger).toHaveAttribute("aria-keyshortcuts", "ArrowDown");
    trigger.focus();
    fireEvent.keyDown(trigger, {
      key: "ArrowDown",
      ctrlKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "ArrowDown",
      altKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "ArrowDown",
      metaKey: true
    });
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await expect(trigger).not.toHaveAttribute("aria-keyshortcuts");
    await expect(canvas.getByTestId("popover-arrowdown-open-calls")).toHaveTextContent("1");
  }
}`,...(C=(j=w.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var H,A,S;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(S=(A=h.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var L,O,G;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(O=x.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var F,K,q;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    const dialog = canvas.getByRole("dialog", {
      name: "Popover content"
    });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
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
}`,...(q=(K=T.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var M,N,z;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(z=(N=B.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var W,V,Q;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=(V=k.parameters)==null?void 0:V.docs)==null?void 0:Q.source}}};var _,$,U;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=($=D.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var J,X,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const be=["Default","TriggerArrowDownModifierGuard","WithInteractiveContent","IconTrigger","NonDismissible","DismissGuardHooks","OutsideDismissFocusTransfer","CloseReasonTelemetry","EscapePreemptedByGlobalHandler","EscapeRepeatGuard"];export{D as CloseReasonTelemetry,m as Default,B as DismissGuardHooks,b as EscapePreemptedByGlobalHandler,E as EscapeRepeatGuard,x as IconTrigger,T as NonDismissible,k as OutsideDismissFocusTransfer,w as TriggerArrowDownModifierGuard,h as WithInteractiveContent,be as __namedExportsOrder,De as default};
