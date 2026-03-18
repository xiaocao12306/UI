import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as k}from"./Button-BCHo91JE.js";import{I as j}from"./Input-CK-2zJ6Z.js";import{P as m}from"./Popover-D_QOF5RA.js";import{within as p,userEvent as o,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./DismissableLayer-B4f576w9.js";const W={title:"Overlay/Popover",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},i={args:{children:n.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:a})=>{const e=p(a),r=await e.findByRole("button",{name:"Open Popover"});await o.click(r),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),r.focus(),await o.keyboard("{ArrowDown}"),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},s={args:{triggerLabel:"Edit Name",children:n.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[n.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),n.jsx(j,{id:"name",defaultValue:"Aurora Team"}),n.jsx(k,{size:"sm",children:"Save"})]})}},c={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:n.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:a})=>{const e=p(a),r=await e.findByRole("button",{name:"More context actions"});await o.click(r),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},l={args:{triggerLabel:"Review policy",closeOnEscape:!1,closeOnOutsidePointer:!1,children:n.jsx("p",{style:{margin:0},children:"This popover must be closed via trigger toggle."})},render:a=>n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsx(m,{...a}),n.jsx("button",{type:"button",children:"Outside target"})]}),play:async({canvasElement:a})=>{const e=p(a),r=await e.findByRole("button",{name:"Review policy"});await o.click(r),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await o.keyboard("{Escape}"),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await o.click(e.getByRole("button",{name:"Outside target"})),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},g={args:{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsx(m,{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),n.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:a})=>{const e=p(a),r=await e.findByRole("button",{name:"Focus Policy"});await o.click(r),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const d=e.getByRole("button",{name:"Popover Next Focus Target"});await o.click(d),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await t(d).toHaveFocus()}};var u,y,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,h,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var B,x,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(x=c.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var f,R,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var D,E,I;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const C=["Default","WithInteractiveContent","IconTrigger","NonDismissible","OutsideDismissFocusTransfer"];export{i as Default,c as IconTrigger,l as NonDismissible,g as OutsideDismissFocusTransfer,s as WithInteractiveContent,C as __namedExportsOrder,W as default};
