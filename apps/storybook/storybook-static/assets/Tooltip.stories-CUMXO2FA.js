import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{B as h}from"./Button-BMxlc9Nj.js";import{r as o}from"./index-BWu4c2F4.js";import{within as D,userEvent as b,expect as u,waitFor as S}from"./index-DgAF9SIF.js";import{s as ue,S as de}from"./storyShowcase-Bw5VyCj0.js";function pe(n,t){switch(n){case"top":return{bottom:`calc(100% + ${t}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${t}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${t}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${t}px)`,left:"50%",transform:"translateX(-50%)"}}}function k({content:n,children:t,open:r,defaultOpen:w,onOpenChange:f,disabled:p=!1,delayDuration:I=250,closeDelay:q=80,side:ne="top",sideOffset:oe=8,maxWidth:re=320}){const[ae,ie]=o.useState(w??!1),H=o.useId(),K=o.useRef(null),d=o.useRef(null),c=o.useRef(null),g=o.useRef(null),m=o.useRef(null),j=r!==void 0,v=j?r:ae,y=o.useCallback(()=>{var e;return((e=K.current)==null?void 0:e.ownerDocument.defaultView)??window},[]),s=o.useCallback(e=>{p&&e||v!==e&&(j||ie(e),f==null||f(e))},[p,j,v,f]),T=o.useCallback(()=>{d.current!==null&&((g.current??y()).clearTimeout(d.current),d.current=null,g.current=null),c.current!==null&&((m.current??y()).clearTimeout(c.current),c.current=null,m.current=null)},[y]),L=o.useCallback(()=>{T(),s(!1)},[T,s]),le=o.useCallback(()=>{p||(c.current!==null&&((m.current??y()).clearTimeout(c.current),c.current=null,m.current=null),s(!0))},[p,y,s]),A=o.useCallback(()=>{if(p)return;const e=y();if(c.current!==null&&((m.current??e).clearTimeout(c.current),c.current=null,m.current=null),I<=0){s(!0);return}d.current!==null&&(g.current??e).clearTimeout(d.current),g.current=e,d.current=e.setTimeout(()=>{s(!0),d.current=null,g.current=null},I)},[I,p,y,s]),F=o.useCallback(()=>{const e=y();if(d.current!==null&&((g.current??e).clearTimeout(d.current),d.current=null,g.current=null),q<=0){s(!1);return}c.current!==null&&(m.current??e).clearTimeout(c.current),m.current=e,c.current=e.setTimeout(()=>{s(!1),c.current=null,m.current=null},q)},[q,y,s]);o.useEffect(()=>T,[T]),o.useEffect(()=>{p&&v&&s(!1)},[p,v,s]);const M=v&&!p,W=o.Children.only(t),a=W.props,ce=[a["aria-describedby"],M?H:void 0].filter(Boolean).join(" ")||void 0,se=o.cloneElement(W,{"aria-describedby":ce,onMouseEnter:e=>{var l;(l=a.onMouseEnter)==null||l.call(a,e),e.defaultPrevented||A()},onMouseLeave:e=>{var l;(l=a.onMouseLeave)==null||l.call(a,e),e.defaultPrevented||F()},onFocus:e=>{var l;(l=a.onFocus)==null||l.call(a,e),e.defaultPrevented||le()},onBlur:e=>{var l;(l=a.onBlur)==null||l.call(a,e),e.defaultPrevented||L()},onKeyDown:e=>{var l;(l=a.onKeyDown)==null||l.call(a,e),!e.defaultPrevented&&e.key==="Escape"&&L()}});return i.jsxs("span",{ref:K,style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[se,M?i.jsx("span",{id:H,role:"tooltip",onMouseEnter:A,onMouseLeave:F,style:{position:"absolute",...pe(ne,oe),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:re,zIndex:"var(--aurora-z-overlay)"},children:n}):null]})}k.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};function te({children:n,gap:t=12}){return i.jsx(de,{maxWidth:"min(100%, 520px)",gap:t,children:n})}const ve={title:"Overlay/Tooltip",component:k,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},x={args:{children:i.jsx(h,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:n})=>{const t=D(n),r=await t.findByRole("button",{name:"Keyboard Shortcut"});await b.hover(r),await u(await t.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await b.unhover(r),await S(()=>{u(t.queryByRole("tooltip")).not.toBeInTheDocument()}),r.focus(),await u(await t.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await b.keyboard("{Escape}"),await S(()=>{u(t.queryByRole("tooltip")).not.toBeInTheDocument()})}},B={args:{content:"Theme tokens are inherited from AuroraProvider.",children:i.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},R={args:{disabled:!0,content:"This tooltip should never open",children:i.jsx(h,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:n})=>{const t=D(n),r=await t.findByRole("button",{name:"Disabled Tooltip"});await b.hover(r),await S(()=>{u(t.queryByRole("tooltip")).not.toBeInTheDocument()})}};function me({content:n,children:t}){const[r,w]=o.useState(!1);return i.jsxs(te,{children:[i.jsx(h,{onClick:()=>w(f=>!f),children:r?"Hide tooltip":"Show tooltip"}),i.jsx(k,{open:r,onOpenChange:w,content:n,children:t})]})}const C={args:{content:"Controlled tooltip content",children:i.jsx(h,{variant:"outline",children:"Controlled target"})},render:n=>i.jsx(me,{content:n.content,children:n.children}),play:async({canvasElement:n})=>{const t=D(n),r=await t.findByRole("button",{name:"Show tooltip"});await b.click(r),await u(await t.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await t.findByRole("button",{name:"Controlled target"})).focus(),await b.keyboard("{Escape}"),await S(()=>{u(t.queryByRole("tooltip")).not.toBeInTheDocument()})}},E={args:{content:"Tooltip with described-by lifecycle checks",children:i.jsx(h,{variant:"outline",children:"Lifecycle target"})},render:n=>i.jsxs(te,{gap:8,children:[i.jsx(k,{content:n.content,closeDelay:0,children:i.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),i.jsx("small",{id:"helper-id",style:ue,children:"Existing helper narration"})]}),play:async({canvasElement:n})=>{const t=D(n),r=await t.findByRole("button",{name:"Lifecycle target"});r.focus();const f=(await t.findByRole("tooltip")).getAttribute("id");await u(r.getAttribute("aria-describedby")??"").toContain("helper-id"),await u(r.getAttribute("aria-describedby")??"").toContain(f),await b.keyboard("{Escape}"),await u(t.queryByRole("tooltip")).not.toBeInTheDocument(),await u(r).toHaveAttribute("aria-describedby","helper-id")}};var V,U,_;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,z,N;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(z=B.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var O,X,Y;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var G,J,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,P,ee;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=(P=E.parameters)==null?void 0:P.docs)==null?void 0:ee.source}}};const he=["Default","InlineHint","Disabled","Controlled","DescribedByLifecycle"];export{C as Controlled,x as Default,E as DescribedByLifecycle,R as Disabled,B as InlineHint,he as __namedExportsOrder,ve as default};
