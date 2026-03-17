import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as S}from"./Button-Hgh0jeno.js";import{I as H}from"./Input-CY7BO4jw.js";import{r as s}from"./index-BWu4c2F4.js";import{D as K}from"./DismissableLayer-0Dn_Gr2D.js";import{within as b,userEvent as c,expect as i}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function w({triggerLabel:o,triggerAriaLabel:e,children:a,open:l,defaultOpen:z,onOpenChange:d,align:A="start",sideOffset:O=8,contentLabel:V="Popover content"}){const[W,M]=s.useState(z??!1),h=s.useId(),x=s.useRef(null),P=s.useRef(null),v=l!==void 0,r=v?l:W,u=s.useCallback(t=>{v||M(t),d==null||d(t)},[v,d]);s.useEffect(()=>{if(!r)return;const t=P.current;if(!t)return;(t.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')??t).focus()},[r]);const _=A==="start"?{left:0}:{right:0};return n.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[n.jsx(S,{ref:x,variant:"outline","aria-label":e,"aria-haspopup":"dialog","aria-expanded":r,"aria-controls":r?h:void 0,onClick:()=>u(!r),onKeyDown:t=>{t.key==="ArrowDown"&&!r&&(t.preventDefault(),u(!0))},children:o}),r?n.jsx(K,{id:h,ref:P,role:"dialog","aria-label":V,tabIndex:-1,onEscapeKeyDown:t=>{var f;t.defaultPrevented||(t.preventDefault(),u(!1),(f=x.current)==null||f.focus())},onPointerDownOutside:t=>{t.defaultPrevented||u(!1)},style:{position:"absolute",top:`calc(100% + ${O}px)`,minWidth:220,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",padding:10,zIndex:"var(--aurora-z-overlay)",..._},children:a}):null]})}w.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{triggerLabel:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerAriaLabel:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},contentLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Popover content"',computed:!1}}}};const Z={title:"Overlay/Popover",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},p={args:{children:n.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:o})=>{const e=b(o),a=await e.findByRole("button",{name:"Open Popover"});await c.click(a),await i(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await i(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),a.focus(),await c.keyboard("{ArrowDown}"),await i(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},m={args:{triggerLabel:"Edit Name",children:n.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[n.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),n.jsx(H,{id:"name",defaultValue:"Aurora Team"}),n.jsx(S,{size:"sm",children:"Save"})]})}},g={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:n.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:o})=>{const e=b(o),a=await e.findByRole("button",{name:"More context actions"});await c.click(a),await i(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},y={args:{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})},render:()=>n.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[n.jsx(w,{triggerLabel:"Focus Policy",children:n.jsx("p",{style:{margin:0},children:"Dismiss me by clicking outside."})}),n.jsx("button",{type:"button",children:"Popover Next Focus Target"})]}),play:async({canvasElement:o})=>{const e=b(o),a=await e.findByRole("button",{name:"Focus Policy"});await c.click(a),await i(e.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument();const l=e.getByRole("button",{name:"Popover Next Focus Target"});await c.click(l),await i(e.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),await i(l).toHaveFocus()}};var B,T,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var D,I,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(I=m.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,j,F;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(j=g.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var q,L,N;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(L=y.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const ee=["Default","WithInteractiveContent","IconTrigger","OutsideDismissFocusTransfer"];export{p as Default,g as IconTrigger,y as OutsideDismissFocusTransfer,m as WithInteractiveContent,ee as __namedExportsOrder,Z as default};
