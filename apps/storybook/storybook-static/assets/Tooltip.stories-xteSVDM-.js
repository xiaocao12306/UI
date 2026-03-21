import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as v}from"./Button-COG9o64O.js";import{r as a}from"./index-BWu4c2F4.js";import{within as B,userEvent as g,expect as l,waitFor as E,fireEvent as T}from"./index-DgAF9SIF.js";import{s as fe,S as ge}from"./storyShowcase-Bw5VyCj0.js";function we(o,e){switch(o){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function q({content:o,children:e,open:n,defaultOpen:h,onOpenChange:f,disabled:p=!1,delayDuration:K=250,closeDelay:j=80,side:le="top",sideOffset:ce=8,maxWidth:se=320}){const[ue,de]=a.useState(h??!1),A=a.useId(),L=a.useRef(null),d=a.useRef(null),s=a.useRef(null),w=a.useRef(null),y=a.useRef(null),H=n!==void 0,b=H?n:ue,m=a.useCallback(()=>{var t;return((t=L.current)==null?void 0:t.ownerDocument.defaultView)??window},[]),u=a.useCallback(t=>{p&&t||b!==t&&(H||de(t),f==null||f(t))},[p,H,b,f]),x=a.useCallback(()=>{d.current!==null&&((w.current??m()).clearTimeout(d.current),d.current=null,w.current=null),s.current!==null&&((y.current??m()).clearTimeout(s.current),s.current=null,y.current=null)},[m]),F=a.useCallback(()=>{x(),u(!1)},[x,u]),pe=a.useCallback(()=>{p||(s.current!==null&&((y.current??m()).clearTimeout(s.current),s.current=null,y.current=null),u(!0))},[p,m,u]),M=a.useCallback(()=>{if(p)return;const t=m();if(s.current!==null&&((y.current??t).clearTimeout(s.current),s.current=null,y.current=null),K<=0){u(!0);return}d.current!==null&&(w.current??t).clearTimeout(d.current),w.current=t,d.current=t.setTimeout(()=>{u(!0),d.current=null,w.current=null},K)},[K,p,m,u]),W=a.useCallback(()=>{const t=m();if(d.current!==null&&((w.current??t).clearTimeout(d.current),d.current=null,w.current=null),j<=0){u(!1);return}s.current!==null&&(y.current??t).clearTimeout(s.current),y.current=t,s.current=t.setTimeout(()=>{u(!1),s.current=null,y.current=null},j)},[j,m,u]);a.useEffect(()=>x,[x]),a.useEffect(()=>{p&&b&&u(!1)},[p,b,u]);const V=b&&!p,G=a.Children.only(e),i=G.props,ye=[i["aria-describedby"],V?A:void 0].filter(Boolean).join(" ")||void 0,me=a.cloneElement(G,{"aria-describedby":ye,onMouseEnter:t=>{var c;(c=i.onMouseEnter)==null||c.call(i,t),t.defaultPrevented||M()},onMouseLeave:t=>{var c;(c=i.onMouseLeave)==null||c.call(i,t),t.defaultPrevented||W()},onFocus:t=>{var c;(c=i.onFocus)==null||c.call(i,t),t.defaultPrevented||pe()},onBlur:t=>{var c;(c=i.onBlur)==null||c.call(i,t),t.defaultPrevented||F()},onKeyDown:t=>{var c;(c=i.onKeyDown)==null||c.call(i,t),!t.defaultPrevented&&t.key==="Escape"&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.repeat&&!he(t)&&F()}});return r.jsxs("span",{ref:L,style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[me,V?r.jsx("span",{id:A,role:"tooltip","aria-keyshortcuts":"Escape",onMouseEnter:M,onMouseLeave:W,style:{position:"absolute",...we(le,ce),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:se,zIndex:"var(--aurora-z-overlay)"},children:o}):null]})}function he(o){const e=o.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}q.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};function ie({children:o,gap:e=12}){return r.jsx(ge,{maxWidth:"min(100%, 520px)",gap:e,children:o})}const Re={title:"Overlay/Tooltip",component:q,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},R={args:{children:r.jsx(v,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:o})=>{const e=B(o),n=await e.findByRole("button",{name:"Keyboard Shortcut"});await g.hover(n),await l(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await l(e.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts","Escape"),await g.unhover(n),await E(()=>{l(e.queryByRole("tooltip")).not.toBeInTheDocument()}),n.focus(),await l(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await g.keyboard("{Escape}"),await E(()=>{l(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},k={args:{content:"Only unmodified Escape should close this tooltip.",children:r.jsx(v,{variant:"outline",children:"Escape Guard Trigger"})},play:async({canvasElement:o})=>{const e=B(o),n=await e.findByRole("button",{name:"Escape Guard Trigger"});n.focus(),await l(await e.findByRole("tooltip")).toHaveTextContent("Only unmodified Escape should close this tooltip."),T.keyDown(n,{key:"Escape",ctrlKey:!0}),T.keyDown(n,{key:"Escape",altKey:!0}),T.keyDown(n,{key:"Escape",metaKey:!0}),T.keyDown(n,{key:"Escape",repeat:!0}),T.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await l(e.getByRole("tooltip")).toBeInTheDocument(),await g.keyboard("{Shift>}{Escape}{/Shift}"),await E(()=>{l(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},C={args:{content:"Theme tokens are inherited from AuroraProvider.",children:r.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},D={args:{disabled:!0,content:"This tooltip should never open",children:r.jsx(v,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:o})=>{const e=B(o),n=await e.findByRole("button",{name:"Disabled Tooltip"});await g.hover(n),await E(()=>{l(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function ve({content:o,children:e}){const[n,h]=a.useState(!1);return r.jsxs(ie,{children:[r.jsx(v,{onClick:()=>h(f=>!f),children:n?"Hide tooltip":"Show tooltip"}),r.jsx(q,{open:n,onOpenChange:h,content:o,children:e})]})}const S={args:{content:"Controlled tooltip content",children:r.jsx(v,{variant:"outline",children:"Controlled target"})},render:o=>r.jsx(ve,{content:o.content,children:o.children}),play:async({canvasElement:o})=>{const e=B(o),n=await e.findByRole("button",{name:"Show tooltip"});await g.click(n),await l(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await g.keyboard("{Escape}"),await E(()=>{l(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},I={args:{content:"Tooltip with described-by lifecycle checks",children:r.jsx(v,{variant:"outline",children:"Lifecycle target"})},render:o=>r.jsxs(ie,{gap:8,children:[r.jsx(q,{content:o.content,closeDelay:0,children:r.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),r.jsx("small",{id:"helper-id",style:fe,children:"Existing helper narration"})]}),play:async({canvasElement:o})=>{const e=B(o),n=await e.findByRole("button",{name:"Lifecycle target"});n.focus();const f=(await e.findByRole("tooltip")).getAttribute("id");await l(n.getAttribute("aria-describedby")??"").toContain("helper-id"),await l(n.getAttribute("aria-describedby")??"").toContain(f),await g.keyboard("{Escape}"),await l(e.queryByRole("tooltip")).not.toBeInTheDocument(),await l(n).toHaveAttribute("aria-describedby","helper-id")}};var O,U,_;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts", "Escape");
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
}`,...(_=(U=R.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,z,N;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    content: "Only unmodified Escape should close this tooltip.",
    children: <Button variant="outline">Escape Guard Trigger</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Escape Guard Trigger"
    });
    trigger.focus();
    await expect(await canvas.findByRole("tooltip")).toHaveTextContent("Only unmodified Escape should close this tooltip.");
    fireEvent.keyDown(trigger, {
      key: "Escape",
      ctrlKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "Escape",
      altKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "Escape",
      metaKey: true
    });
    fireEvent.keyDown(trigger, {
      key: "Escape",
      repeat: true
    });
    fireEvent.keyDown(trigger, {
      key: "Escape",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByRole("tooltip")).toBeInTheDocument();
    await userEvent.keyboard("{Shift>}{Escape}{/Shift}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
}`,...(N=(z=k.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var X,Y,J;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,Z,P;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(P=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:P.source}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,re;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const ke=["Default","EscapeModifierGuard","InlineHint","Disabled","Controlled","DescribedByLifecycle"];export{S as Controlled,R as Default,I as DescribedByLifecycle,D as Disabled,k as EscapeModifierGuard,C as InlineHint,ke as __namedExportsOrder,Re as default};
