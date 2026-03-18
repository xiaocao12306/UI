import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-BWu4c2F4.js";import{B as A}from"./Button-BCHo91JE.js";import{I as C}from"./Input-CK-2zJ6Z.js";import{P as y}from"./Popover-M8N8Nc2N.js";import{within as s,userEvent as r,expect as a}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./DismissableLayer-DGNgq5OX.js";const U={title:"Overlay/Popover",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},l={args:{children:n.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:t})=>{const e=s(t),o=await e.findByRole("button",{name:"Open Popover"});await r.click(o),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),o.focus(),await r.keyboard("{ArrowDown}"),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},p={args:{triggerLabel:"Edit Name",children:n.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[n.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),n.jsx(C,{id:"name",defaultValue:"Aurora Team"}),n.jsx(A,{size:"sm",children:"Save"})]})}},g={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:n.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:t})=>{const e=s(t),o=await e.findByRole("button",{name:"More context actions"});await r.click(o),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},d={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:n.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:t=>n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsx(y,{...t}),n.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:t})=>{const e=s(t),o=await e.findByRole("button",{name:"Review policy"});await r.click(o),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"Outside target"})),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},m={args:{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsx(y,{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),n.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:t})=>{const e=s(t),o=await e.findByRole("button",{name:"Focus Policy"});await r.click(o),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const i=e.getByRole("button",{name:"Popover Next Focus Target"});await r.click(i),await a(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await a(i).toHaveFocus()}};function q(){const[t,e]=v.useState(!1),[o,i]=v.useState(0);return v.useEffect(()=>{const c=w=>{w.key==="Escape"&&w.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"popover-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),n.jsx(y,{triggerLabel:"Preempted popover",open:t,onOpenChange:e,onEscapeKeyDown:()=>i(c=>c+1),children:n.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const u={args:{triggerLabel:"Preempted popover",children:n.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})},render:()=>n.jsx(q,{}),play:async({canvasElement:t})=>{const e=s(t),o=await e.findByRole("button",{name:"Preempted popover"});await r.click(o),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a(e.getByTestId("popover-escape-calls")).toHaveTextContent("0")}};var h,b,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var x,P,E;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var f,T,D;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(T=g.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var R,I,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var j,O,L;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var F,S,N;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const J=["Default","WithInteractiveContent","IconTrigger","NonDismissible","OutsideDismissFocusTransfer","EscapePreemptedByGlobalHandler"];export{l as Default,u as EscapePreemptedByGlobalHandler,g as IconTrigger,d as NonDismissible,m as OutsideDismissFocusTransfer,p as WithInteractiveContent,J as __namedExportsOrder,U as default};
