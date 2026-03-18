import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{B as x}from"./Button-BCHo91JE.js";import{r}from"./index-BWu4c2F4.js";import{within as R,userEvent as y,expect as u,waitFor as B}from"./index-DgAF9SIF.js";function re(o,e){switch(o){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function C({content:o,children:e,open:n,defaultOpen:f,onOpenChange:m,disabled:p=!1,delayDuration:E=250,closeDelay:D=80,side:Q="top",sideOffset:Z=8,maxWidth:P=320}){const[ee,te]=r.useState(f??!1),q=r.useId(),d=r.useRef(null),s=r.useRef(null),k=n!==void 0,I=k?n:ee,c=r.useCallback(t=>{p&&t||(k||te(t),m==null||m(t))},[p,k,m]),w=r.useCallback(()=>{d.current!==null&&(window.clearTimeout(d.current),d.current=null),s.current!==null&&(window.clearTimeout(s.current),s.current=null)},[]),j=r.useCallback(()=>{w(),c(!1)},[w,c]),ne=r.useCallback(()=>{p||(s.current!==null&&(window.clearTimeout(s.current),s.current=null),c(!0))},[p,c]),S=r.useCallback(()=>{if(!p){if(s.current!==null&&(window.clearTimeout(s.current),s.current=null),E<=0){c(!0);return}d.current!==null&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{c(!0),d.current=null},E)}},[E,p,c]),H=r.useCallback(()=>{if(d.current!==null&&(window.clearTimeout(d.current),d.current=null),D<=0){c(!1);return}s.current!==null&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{c(!1),s.current=null},D)},[D,c]);r.useEffect(()=>w,[w]),r.useEffect(()=>{p&&I&&c(!1)},[p,I,c]);const K=I&&!p,A=r.Children.only(e),a=A.props,oe=[a["aria-describedby"],K?q:void 0].filter(Boolean).join(" ")||void 0,ae=r.cloneElement(A,{"aria-describedby":oe,onMouseEnter:t=>{var i;(i=a.onMouseEnter)==null||i.call(a,t),t.defaultPrevented||S()},onMouseLeave:t=>{var i;(i=a.onMouseLeave)==null||i.call(a,t),t.defaultPrevented||H()},onFocus:t=>{var i;(i=a.onFocus)==null||i.call(a,t),t.defaultPrevented||ne()},onBlur:t=>{var i;(i=a.onBlur)==null||i.call(a,t),t.defaultPrevented||j()},onKeyDown:t=>{var i;(i=a.onKeyDown)==null||i.call(a,t),!t.defaultPrevented&&t.key==="Escape"&&j()}});return l.jsxs("span",{style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[ae,K?l.jsx("span",{id:q,role:"tooltip",onMouseEnter:S,onMouseLeave:H,style:{position:"absolute",...re(Q,Z),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:P,zIndex:"var(--aurora-z-overlay)"},children:o}):null]})}C.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};const de={title:"Overlay/Tooltip",component:C,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},b={args:{children:l.jsx(x,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:o})=>{const e=R(o),n=await e.findByRole("button",{name:"Keyboard Shortcut"});await y.hover(n),await u(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await y.unhover(n),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()}),n.focus(),await u(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await y.keyboard("{Escape}"),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},g={args:{content:"Theme tokens are inherited from AuroraProvider.",children:l.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},v={args:{disabled:!0,content:"This tooltip should never open",children:l.jsx(x,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:o})=>{const e=R(o),n=await e.findByRole("button",{name:"Disabled Tooltip"});await y.hover(n),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function ie({content:o,children:e}){const[n,f]=r.useState(!1);return l.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[l.jsx(x,{onClick:()=>f(m=>!m),children:n?"Hide tooltip":"Show tooltip"}),l.jsx(C,{open:n,onOpenChange:f,content:o,children:e})]})}const h={args:{content:"Controlled tooltip content",children:l.jsx(x,{variant:"outline",children:"Controlled target"})},render:o=>l.jsx(ie,{content:o.content,children:o.children}),play:async({canvasElement:o})=>{const e=R(o),n=await e.findByRole("button",{name:"Show tooltip"});await y.click(n),await u(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await y.keyboard("{Escape}"),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},T={render:()=>l.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[l.jsx(C,{content:"Tooltip with described-by lifecycle checks",closeDelay:0,children:l.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),l.jsx("small",{id:"helper-id",style:{color:"var(--aurora-text-secondary)"},children:"Existing helper narration"})]}),play:async({canvasElement:o})=>{const e=R(o),n=await e.findByRole("button",{name:"Lifecycle target"});n.focus();const m=(await e.findByRole("tooltip")).getAttribute("id");await u(n.getAttribute("aria-describedby")??"").toContain("helper-id"),await u(n.getAttribute("aria-describedby")??"").toContain(m),await y.keyboard("{Escape}"),await u(e.queryByRole("tooltip")).not.toBeInTheDocument(),await u(n).toHaveAttribute("aria-describedby","helper-id")}};var L,F,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    await userEvent.hover(trigger);
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette.");
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
    trigger.focus();
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette.");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
}`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,U,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(U=g.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,z,N;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    content: "This tooltip should never open",
    children: <Button variant="ghost">Disabled Tooltip</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Disabled Tooltip"
    });
    await userEvent.hover(trigger);
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
}`,...(N=(z=v.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var O,W,X;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    content: "Controlled tooltip content",
    children: <Button variant="outline">Controlled target</Button>
  },
  render: args => <ControlledTooltipStory content={args.content}>{args.children}</ControlledTooltipStory>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.findByRole("button", {
      name: "Show tooltip"
    });
    await userEvent.click(toggleButton);
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content");
    const target = await canvas.findByRole("button", {
      name: "Controlled target"
    });
    target.focus();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,G,J;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 8,
    justifyItems: "start"
  }}>
      <Tooltip content="Tooltip with described-by lifecycle checks" closeDelay={0}>
        <button type="button" aria-describedby="helper-id">
          Lifecycle target
        </button>
      </Tooltip>
      <small id="helper-id" style={{
      color: "var(--aurora-text-secondary)"
    }}>
        Existing helper narration
      </small>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Lifecycle target"
    });
    trigger.focus();
    const tooltip = await canvas.findByRole("tooltip");
    const tooltipId = tooltip.getAttribute("id") as string;
    await expect(trigger.getAttribute("aria-describedby") ?? "").toContain("helper-id");
    await expect(trigger.getAttribute("aria-describedby") ?? "").toContain(tooltipId);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    await expect(trigger).toHaveAttribute("aria-describedby", "helper-id");
  }
}`,...(J=(G=T.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const pe=["Default","InlineHint","Disabled","Controlled","DescribedByLifecycle"];export{h as Controlled,b as Default,T as DescribedByLifecycle,v as Disabled,g as InlineHint,pe as __namedExportsOrder,de as default};
