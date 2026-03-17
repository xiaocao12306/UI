import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as E}from"./Button-Hgh0jeno.js";import{I as V}from"./Input-C1lkqvCi.js";import{r}from"./index-BWu4c2F4.js";import{D as W}from"./DismissableLayer-0Dn_Gr2D.js";import{within as k,userEvent as u,expect as p}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-BfGecBuf.js";function q({triggerLabel:i,triggerAriaLabel:t,children:o,open:f,defaultOpen:j,onOpenChange:s,align:L="start",sideOffset:S=8,contentLabel:z="Popover content"}){const[A,N]=r.useState(j??!1),v=r.useId(),y=r.useRef(null),b=r.useRef(null),m=f!==void 0,a=m?f:A,g=r.useCallback(e=>{m||N(e),s==null||s(e)},[m,s]);r.useEffect(()=>{if(!a)return;const e=b.current;if(!e)return;(e.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')??e).focus()},[a]);const O=L==="start"?{left:0}:{right:0};return n.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[n.jsx(E,{ref:y,variant:"outline","aria-label":t,"aria-haspopup":"dialog","aria-expanded":a,"aria-controls":a?v:void 0,onClick:()=>g(!a),onKeyDown:e=>{e.key==="ArrowDown"&&!a&&(e.preventDefault(),g(!0))},children:i}),a?n.jsx(W,{id:v,ref:b,role:"dialog","aria-label":z,tabIndex:-1,onDismiss:()=>{var e;g(!1),(e=y.current)==null||e.focus()},style:{position:"absolute",top:`calc(100% + ${S}px)`,minWidth:220,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",padding:10,zIndex:"var(--aurora-z-overlay)",...O},children:o}):null]})}q.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{triggerLabel:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerAriaLabel:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},contentLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Popover content"',computed:!1}}}};const H={title:"Overlay/Popover",component:q,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},c={args:{children:n.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:i})=>{const t=k(i),o=await t.findByRole("button",{name:"Open Popover"});await u.click(o),await p(t.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await u.keyboard("{Escape}"),await p(t.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),o.focus(),await u.keyboard("{ArrowDown}"),await p(t.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},l={args:{triggerLabel:"Edit Name",children:n.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[n.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),n.jsx(V,{id:"name",defaultValue:"Aurora Team"}),n.jsx(E,{size:"sm",children:"Save"})]})}},d={args:{triggerLabel:"⋯",triggerAriaLabel:"More context actions",children:n.jsx("p",{style:{margin:0},children:"Quick context actions from icon trigger."})},play:async({canvasElement:i})=>{const t=k(i),o=await t.findByRole("button",{name:"More context actions"});await u.click(o),await p(t.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}};var w,h,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var R,B,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,T,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const J=["Default","WithInteractiveContent","IconTrigger"];export{c as Default,d as IconTrigger,l as WithInteractiveContent,J as __namedExportsOrder,H as default};
