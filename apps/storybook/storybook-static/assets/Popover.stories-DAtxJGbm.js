import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as D}from"./Button-Hgh0jeno.js";import{I as z}from"./Input-DFzLAeTZ.js";import{r as o}from"./index-BWu4c2F4.js";import{D as S}from"./DismissableLayer-0Dn_Gr2D.js";import{within as N,userEvent as p,expect as m}from"./index-DgAF9SIF.js";import"./a11y-H6OEtEva.js";function B({triggerLabel:c,children:a,open:r,defaultOpen:P,onOpenChange:s,align:I="start",sideOffset:E=8,contentLabel:T="Popover content"}){const[k,q]=o.useState(P??!1),f=o.useId(),v=o.useRef(null),g=o.useRef(null),d=r!==void 0,n=d?r:k,u=o.useCallback(e=>{d||q(e),s==null||s(e)},[d,s]);o.useEffect(()=>{if(!n)return;const e=g.current;if(!e)return;(e.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')??e).focus()},[n]);const j=I==="start"?{left:0}:{right:0};return t.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[t.jsx(D,{ref:v,variant:"outline","aria-haspopup":"dialog","aria-expanded":n,"aria-controls":f,onClick:()=>u(!n),onKeyDown:e=>{e.key==="ArrowDown"&&!n&&(e.preventDefault(),u(!0))},children:c}),n?t.jsx(S,{id:f,ref:g,role:"dialog","aria-label":T,tabIndex:-1,onDismiss:()=>{var e;u(!1),(e=v.current)==null||e.focus()},style:{position:"absolute",top:`calc(100% + ${E}px)`,minWidth:220,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",padding:10,zIndex:"var(--aurora-z-overlay)",...j},children:a}):null]})}B.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{triggerLabel:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},contentLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Popover content"',computed:!1}}}};const K={title:"Overlay/Popover",component:B,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Popover supports controlled/uncontrolled mode with Escape and outside pointer dismissal. Use ArrowDown on trigger for keyboard open."}}},args:{triggerLabel:"Open Popover"}},i={args:{children:t.jsx("p",{style:{margin:0},children:"Popover content for quick context editing."})},play:async({canvasElement:c})=>{const a=N(c),r=await a.findByRole("button",{name:"Open Popover"});await p.click(r),await m(a.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await p.keyboard("{Escape}"),await m(a.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument(),r.focus(),await p.keyboard("{ArrowDown}"),await m(a.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument()}},l={args:{triggerLabel:"Edit Name",children:t.jsxs("div",{style:{width:280,display:"grid",gap:8},children:[t.jsx("label",{htmlFor:"name",style:{fontSize:"var(--aurora-font-size-sm)",fontWeight:600},children:"Display name"}),t.jsx(z,{id:"name",defaultValue:"Aurora Team"}),t.jsx(D,{size:"sm",children:"Save"})]})}};var y,b,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var h,x,R;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(x=l.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const U=["Default","WithInteractiveContent"];export{i as Default,l as WithInteractiveContent,U as __namedExportsOrder,K as default};
