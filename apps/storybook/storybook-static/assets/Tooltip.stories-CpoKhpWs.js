import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as h}from"./Button-Hgh0jeno.js";import{r as v}from"./index-BWu4c2F4.js";import{within as x,expect as i,userEvent as b,waitFor as g}from"./index-DgAF9SIF.js";function y({content:a,children:e}){const[s,t]=v.useState(!1);return r.jsxs("span",{style:{position:"relative",display:"inline-flex"},onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onFocus:()=>t(!0),onBlur:()=>t(!1),onKeyDown:f=>{f.key==="Escape"&&t(!1)},children:[e,s?r.jsx("span",{role:"tooltip",style:{position:"absolute",top:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)",background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"nowrap",zIndex:1200},children:a}):null]})}y.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const B={title:"Overlay/Tooltip",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip opens on hover/focus and closes on leave/blur for keyboard and pointer parity."}}},args:{content:"Use Cmd/Ctrl + K to open command palette."}},o={args:{children:r.jsx(h,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:a})=>{const e=x(a);(await e.findByRole("button",{name:"Keyboard Shortcut"})).focus(),await i(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await b.keyboard("{Escape}"),await g(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},n={args:{content:"Theme tokens are inherited from AuroraProvider.",children:r.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <Button variant="outline">Keyboard Shortcut</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Keyboard Shortcut"
    });
    trigger.focus();
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette.");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: "Theme tokens are inherited from AuroraProvider.",
    children: <button type="button" style={{
      border: 0,
      background: "transparent",
      color: "var(--aurora-text-secondary)",
      textDecoration: "underline",
      cursor: "pointer"
    }}>
        Token inheritance
      </button>
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const k=["Default","InlineHint"];export{o as Default,n as InlineHint,k as __namedExportsOrder,B as default};
