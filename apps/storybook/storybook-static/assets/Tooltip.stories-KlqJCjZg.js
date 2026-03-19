import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as w}from"./Button-DS9RTxKh.js";import{r as i}from"./index-BWu4c2F4.js";import{within as R,userEvent as y,expect as u,waitFor as B}from"./index-DgAF9SIF.js";import{s as ie,S as le}from"./storyShowcase-Bw5VyCj0.js";function se(t,e){switch(t){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function C({content:t,children:e,open:o,defaultOpen:f,onOpenChange:m,disabled:p=!1,delayDuration:E=250,closeDelay:S=80,side:Z="top",sideOffset:P=8,maxWidth:ee=320}){const[te,ne]=i.useState(f??!1),I=i.useId(),d=i.useRef(null),s=i.useRef(null),D=o!==void 0,k=D?o:te,c=i.useCallback(n=>{p&&n||(D||ne(n),m==null||m(n))},[p,D,m]),g=i.useCallback(()=>{d.current!==null&&(window.clearTimeout(d.current),d.current=null),s.current!==null&&(window.clearTimeout(s.current),s.current=null)},[]),q=i.useCallback(()=>{g(),c(!1)},[g,c]),oe=i.useCallback(()=>{p||(s.current!==null&&(window.clearTimeout(s.current),s.current=null),c(!0))},[p,c]),j=i.useCallback(()=>{if(!p){if(s.current!==null&&(window.clearTimeout(s.current),s.current=null),E<=0){c(!0);return}d.current!==null&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{c(!0),d.current=null},E)}},[E,p,c]),H=i.useCallback(()=>{if(d.current!==null&&(window.clearTimeout(d.current),d.current=null),S<=0){c(!1);return}s.current!==null&&window.clearTimeout(s.current),s.current=window.setTimeout(()=>{c(!1),s.current=null},S)},[S,c]);i.useEffect(()=>g,[g]),i.useEffect(()=>{p&&k&&c(!1)},[p,k,c]);const K=k&&!p,L=i.Children.only(e),a=L.props,ae=[a["aria-describedby"],K?I:void 0].filter(Boolean).join(" ")||void 0,re=i.cloneElement(L,{"aria-describedby":ae,onMouseEnter:n=>{var l;(l=a.onMouseEnter)==null||l.call(a,n),n.defaultPrevented||j()},onMouseLeave:n=>{var l;(l=a.onMouseLeave)==null||l.call(a,n),n.defaultPrevented||H()},onFocus:n=>{var l;(l=a.onFocus)==null||l.call(a,n),n.defaultPrevented||oe()},onBlur:n=>{var l;(l=a.onBlur)==null||l.call(a,n),n.defaultPrevented||q()},onKeyDown:n=>{var l;(l=a.onKeyDown)==null||l.call(a,n),!n.defaultPrevented&&n.key==="Escape"&&q()}});return r.jsxs("span",{style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[re,K?r.jsx("span",{id:I,role:"tooltip",onMouseEnter:j,onMouseLeave:H,style:{position:"absolute",...se(Z,P),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:ee,zIndex:"var(--aurora-z-overlay)"},children:t}):null]})}C.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};function Q({children:t,gap:e=12}){return r.jsx(le,{maxWidth:"min(100%, 520px)",gap:e,children:t})}const fe={title:"Overlay/Tooltip",component:C,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},b={args:{children:r.jsx(w,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:t})=>{const e=R(t),o=await e.findByRole("button",{name:"Keyboard Shortcut"});await y.hover(o),await u(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await y.unhover(o),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()}),o.focus(),await u(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await y.keyboard("{Escape}"),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},v={args:{content:"Theme tokens are inherited from AuroraProvider.",children:r.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},h={args:{disabled:!0,content:"This tooltip should never open",children:r.jsx(w,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:t})=>{const e=R(t),o=await e.findByRole("button",{name:"Disabled Tooltip"});await y.hover(o),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function ce({content:t,children:e}){const[o,f]=i.useState(!1);return r.jsxs(Q,{children:[r.jsx(w,{onClick:()=>f(m=>!m),children:o?"Hide tooltip":"Show tooltip"}),r.jsx(C,{open:o,onOpenChange:f,content:t,children:e})]})}const T={args:{content:"Controlled tooltip content",children:r.jsx(w,{variant:"outline",children:"Controlled target"})},render:t=>r.jsx(ce,{content:t.content,children:t.children}),play:async({canvasElement:t})=>{const e=R(t),o=await e.findByRole("button",{name:"Show tooltip"});await y.click(o),await u(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await y.keyboard("{Escape}"),await B(()=>{u(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},x={args:{content:"Tooltip with described-by lifecycle checks",children:r.jsx(w,{variant:"outline",children:"Lifecycle target"})},render:t=>r.jsxs(Q,{gap:8,children:[r.jsx(C,{content:t.content,closeDelay:0,children:r.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),r.jsx("small",{id:"helper-id",style:ie,children:"Existing helper narration"})]}),play:async({canvasElement:t})=>{const e=R(t),o=await e.findByRole("button",{name:"Lifecycle target"});o.focus();const m=(await e.findByRole("tooltip")).getAttribute("id");await u(o.getAttribute("aria-describedby")??"").toContain("helper-id"),await u(o.getAttribute("aria-describedby")??"").toContain(m),await y.keyboard("{Escape}"),await u(e.queryByRole("tooltip")).not.toBeInTheDocument(),await u(o).toHaveAttribute("aria-describedby","helper-id")}};var A,F,M;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,U,_;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(U=v.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,z,N;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(z=h.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var W,O,X;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(O=T.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var Y,G,J;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    content: "Tooltip with described-by lifecycle checks",
    children: <Button variant="outline">Lifecycle target</Button>
  },
  render: args => <TooltipShowcase gap={8}>
      <Tooltip content={args.content} closeDelay={0}>
        <button type="button" aria-describedby="helper-id">
          Lifecycle target
        </button>
      </Tooltip>
      <small id="helper-id" style={storyMutedTextStyle}>
        Existing helper narration
      </small>
    </TooltipShowcase>,
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
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const we=["Default","InlineHint","Disabled","Controlled","DescribedByLifecycle"];export{T as Controlled,b as Default,x as DescribedByLifecycle,h as Disabled,v as InlineHint,we as __namedExportsOrder,fe as default};
