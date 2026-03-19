import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{B as g}from"./Button-BNFQVefv.js";import{r}from"./index-BWu4c2F4.js";import{within as R,userEvent as y,expect as u,waitFor as x}from"./index-DgAF9SIF.js";function re(n,e){switch(n){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function C({content:n,children:e,open:o,defaultOpen:f,onOpenChange:m,disabled:p=!1,delayDuration:E=250,closeDelay:D=80,side:Q="top",sideOffset:Z=8,maxWidth:P=320}){const[ee,te]=r.useState(f??!1),j=r.useId(),d=r.useRef(null),s=r.useRef(null),k=o!==void 0,I=k?o:ee,c=r.useCallback(t=>{p&&t||(k||te(t),m==null||m(t))},[p,k,m]),w=r.useCallback(()=>{d.current!==null&&(window.clearTimeout(d.current),d.current=null),s.current!==null&&(window.clearTimeout(s.current),s.current=null)},[]),q=r.useCallback(()=>{w(),c(!1)},[w,c]),ne=r.useCallback(()=>{p||(s.current!==null&&(window.clearTimeout(s.current),s.current=null),c(!0))},[p,c]),S=r.useCallback(()=>{if(!p){if(s.current!==null&&(window.clearTimeout(s.current),s.current=null),E<=0){c(!0);return}d.current!==null&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{c(!0),d.current=null},E)}},[E,p,c]),H=r.useCallback(()=>{if(d.current!==null&&(window.clearTimeout(d.current),d.current=null),D<=0){c(!1);return}s.current!==null&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{c(!1),s.current=null},D)},[D,c]);r.useEffect(()=>w,[w]),r.useEffect(()=>{p&&I&&c(!1)},[p,I,c]);const K=I&&!p,L=r.Children.only(e),a=L.props,oe=[a["aria-describedby"],K?j:void 0].filter(Boolean).join(" ")||void 0,ae=r.cloneElement(L,{"aria-describedby":oe,onMouseEnter:t=>{var l;(l=a.onMouseEnter)==null||l.call(a,t),t.defaultPrevented||S()},onMouseLeave:t=>{var l;(l=a.onMouseLeave)==null||l.call(a,t),t.defaultPrevented||H()},onFocus:t=>{var l;(l=a.onFocus)==null||l.call(a,t),t.defaultPrevented||ne()},onBlur:t=>{var l;(l=a.onBlur)==null||l.call(a,t),t.defaultPrevented||q()},onKeyDown:t=>{var l;(l=a.onKeyDown)==null||l.call(a,t),!t.defaultPrevented&&t.key==="Escape"&&q()}});return i.jsxs("span",{style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[ae,K?i.jsx("span",{id:j,role:"tooltip",onMouseEnter:S,onMouseLeave:H,style:{position:"absolute",...re(Q,Z),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:P,zIndex:"var(--aurora-z-overlay)"},children:n}):null]})}C.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};const de={title:"Overlay/Tooltip",component:C,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},v={args:{children:i.jsx(g,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:n})=>{const e=R(n),o=await e.findByRole("button",{name:"Keyboard Shortcut"});await y.hover(o),await u(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await y.unhover(o),await x(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()}),o.focus(),await u(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await y.keyboard("{Escape}"),await x(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},b={args:{content:"Theme tokens are inherited from AuroraProvider.",children:i.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},h={args:{disabled:!0,content:"This tooltip should never open",children:i.jsx(g,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:n})=>{const e=R(n),o=await e.findByRole("button",{name:"Disabled Tooltip"});await y.hover(o),await x(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function ie({content:n,children:e}){const[o,f]=r.useState(!1);return i.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[i.jsx(g,{onClick:()=>f(m=>!m),children:o?"Hide tooltip":"Show tooltip"}),i.jsx(C,{open:o,onOpenChange:f,content:n,children:e})]})}const T={args:{content:"Controlled tooltip content",children:i.jsx(g,{variant:"outline",children:"Controlled target"})},render:n=>i.jsx(ie,{content:n.content,children:n.children}),play:async({canvasElement:n})=>{const e=R(n),o=await e.findByRole("button",{name:"Show tooltip"});await y.click(o),await u(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await y.keyboard("{Escape}"),await x(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},B={args:{content:"Tooltip with described-by lifecycle checks",children:i.jsx(g,{variant:"outline",children:"Lifecycle target"})},render:n=>i.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[i.jsx(C,{content:n.content,closeDelay:0,children:i.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),i.jsx("small",{id:"helper-id",style:{color:"var(--aurora-text-secondary)"},children:"Existing helper narration"})]}),play:async({canvasElement:n})=>{const e=R(n),o=await e.findByRole("button",{name:"Lifecycle target"});o.focus();const m=(await e.findByRole("tooltip")).getAttribute("id");await u(o.getAttribute("aria-describedby")??"").toContain("helper-id"),await u(o.getAttribute("aria-describedby")??"").toContain(m),await y.keyboard("{Escape}"),await u(e.queryByRole("tooltip")).not.toBeInTheDocument(),await u(o).toHaveAttribute("aria-describedby","helper-id")}};var A,F,M;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(F=v.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,U,_;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(U=b.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,z,N;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(z=h.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var O,W,X;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,G,J;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    content: "Tooltip with described-by lifecycle checks",
    children: <Button variant="outline">Lifecycle target</Button>
  },
  render: args => <div style={{
    display: "grid",
    gap: 8,
    justifyItems: "start"
  }}>
      <Tooltip content={args.content} closeDelay={0}>
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
}`,...(J=(G=B.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const pe=["Default","InlineHint","Disabled","Controlled","DescribedByLifecycle"];export{T as Controlled,v as Default,B as DescribedByLifecycle,h as Disabled,b as InlineHint,pe as __namedExportsOrder,de as default};
