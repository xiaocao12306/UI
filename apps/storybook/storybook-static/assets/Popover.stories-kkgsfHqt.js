import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Button-Hgh0jeno.js";import{I as k}from"./Input-CY7BO4jw.js";import{P as T}from"./Popover-DGAvuI1O.js";import{within as g,userEvent as a,expect as t}from"./index-DgAF9SIF.js";import"./index-BWu4c2F4.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";import"./DismissableLayer-B4f576w9.js";const q={title:"Overlay/Popover",component:T,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},i={args:{children:n.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:r})=>{const e=g(r),o=await e.findByRole("button",{name:"Open Popover"});await a.click(o),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await a.keyboard("{Escape}"),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),o.focus(),await a.keyboard("{ArrowDown}"),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},s={args:{triggerLabel:"Edit Name",children:n.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[n.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),n.jsx(k,{id:"name",defaultValue:"Aurora Team"}),n.jsx(D,{size:"sm",children:"Save"})]})}},c={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:n.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:r})=>{const e=g(r),o=await e.findByRole("button",{name:"More context actions"});await a.click(o),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},l={args:{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsx(T,{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),n.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:r})=>{const e=g(r),o=await e.findByRole("button",{name:"Focus Policy"});await a.click(o),await t(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const m=e.getByRole("button",{name:"Popover Next Focus Target"});await a.click(m),await t(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await t(m).toHaveFocus()}};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,v,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var h,b,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var B,f,P;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(f=l.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const z=["Default","WithInteractiveContent","IconTrigger","OutsideDismissFocusTransfer"];export{i as Default,c as IconTrigger,l as OutsideDismissFocusTransfer,s as WithInteractiveContent,z as __namedExportsOrder,q as default};
