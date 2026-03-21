import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{B as b}from"./Button-Bo_zcy9W.js";import{r as a}from"./index-BWu4c2F4.js";import{within as T,userEvent as g,expect as r,waitFor as E,fireEvent as h}from"./index-DgAF9SIF.js";import{s as be,S as Ee}from"./storyShowcase-Bw5VyCj0.js";function Te(o,e){switch(o){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function j({content:o,children:e,open:n,defaultOpen:p,onOpenChange:w,disabled:y=!1,closeOnEscape:F=!0,delayDuration:K=250,closeDelay:H=80,side:pe="top",sideOffset:ye=8,maxWidth:me=320}){const[fe,ge]=a.useState(p??!1),L=a.useId(),M=a.useRef(null),d=a.useRef(null),c=a.useRef(null),v=a.useRef(null),m=a.useRef(null),A=n!==void 0,B=A?n:fe,f=a.useCallback(()=>{var t;return((t=M.current)==null?void 0:t.ownerDocument.defaultView)??window},[]),u=a.useCallback(t=>{y&&t||B!==t&&(A||ge(t),w==null||w(t))},[y,A,B,w]),x=a.useCallback(()=>{d.current!==null&&((v.current??f()).clearTimeout(d.current),d.current=null,v.current=null),c.current!==null&&((m.current??f()).clearTimeout(c.current),c.current=null,m.current=null)},[f]),O=a.useCallback(()=>{x(),u(!1)},[x,u]),we=a.useCallback(()=>{y||(c.current!==null&&((m.current??f()).clearTimeout(c.current),c.current=null,m.current=null),u(!0))},[y,f,u]),V=a.useCallback(()=>{if(y)return;const t=f();if(c.current!==null&&((m.current??t).clearTimeout(c.current),c.current=null,m.current=null),K<=0){u(!0);return}d.current!==null&&(v.current??t).clearTimeout(d.current),v.current=t,d.current=t.setTimeout(()=>{u(!0),d.current=null,v.current=null},K)},[K,y,f,u]),W=a.useCallback(()=>{const t=f();if(d.current!==null&&((v.current??t).clearTimeout(d.current),d.current=null,v.current=null),H<=0){u(!1);return}c.current!==null&&(m.current??t).clearTimeout(c.current),m.current=t,c.current=t.setTimeout(()=>{u(!1),c.current=null,m.current=null},H)},[H,f,u]);a.useEffect(()=>x,[x]),a.useEffect(()=>{y&&B&&u(!1)},[y,B,u]);const G=B&&!y,U=a.Children.only(e),s=U.props,ve=[s["aria-describedby"],G?L:void 0].filter(Boolean).join(" ")||void 0,he=a.cloneElement(U,{"aria-describedby":ve,onMouseEnter:t=>{var l;(l=s.onMouseEnter)==null||l.call(s,t),t.defaultPrevented||V()},onMouseLeave:t=>{var l;(l=s.onMouseLeave)==null||l.call(s,t),t.defaultPrevented||W()},onFocus:t=>{var l;(l=s.onFocus)==null||l.call(s,t),t.defaultPrevented||we()},onBlur:t=>{var l;(l=s.onBlur)==null||l.call(s,t),t.defaultPrevented||O()},onKeyDown:t=>{var l;(l=s.onKeyDown)==null||l.call(s,t),!t.defaultPrevented&&F&&t.key==="Escape"&&!t.altKey&&!t.ctrlKey&&!t.metaKey&&!t.repeat&&!Be(t)&&O()}});return i.jsxs("span",{ref:M,style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[he,G?i.jsx("span",{id:L,role:"tooltip","aria-keyshortcuts":F?"Escape":void 0,onMouseEnter:V,onMouseLeave:W,style:{position:"absolute",...Te(pe,ye),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:me,zIndex:"var(--aurora-z-overlay)"},children:o}):null]})}function Be(o){const e=o.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}j.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};function de({children:o,gap:e=12}){return i.jsx(Ee,{maxWidth:"min(100%, 520px)",gap:e,children:o})}const Ie={title:"Overlay/Tooltip",component:j,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},R={args:{children:i.jsx(b,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:o})=>{const e=T(o),n=await e.findByRole("button",{name:"Keyboard Shortcut"});await g.hover(n),await r(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await r(e.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts","Escape"),await g.unhover(n),await E(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()}),n.focus(),await r(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await g.keyboard("{Escape}"),await E(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},k={args:{content:"Only unmodified Escape should close this tooltip.",children:i.jsx(b,{variant:"outline",children:"Escape Guard Trigger"})},play:async({canvasElement:o})=>{const e=T(o),n=await e.findByRole("button",{name:"Escape Guard Trigger"});n.focus(),await r(await e.findByRole("tooltip")).toHaveTextContent("Only unmodified Escape should close this tooltip."),h.keyDown(n,{key:"Escape",ctrlKey:!0}),h.keyDown(n,{key:"Escape",altKey:!0}),h.keyDown(n,{key:"Escape",metaKey:!0}),h.keyDown(n,{key:"Escape",repeat:!0}),h.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("tooltip")).toBeInTheDocument(),await g.keyboard("{Shift>}{Escape}{/Shift}"),await E(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},C={args:{closeOnEscape:!1,content:"Escape is disabled; blur or pointer leave should close this tooltip.",children:i.jsx(b,{variant:"outline",children:"Escape Disabled Trigger"})},play:async({canvasElement:o})=>{const e=T(o),n=await e.findByRole("button",{name:"Escape Disabled Trigger"});n.focus();const p=await e.findByRole("tooltip");await r(p).toHaveTextContent("Escape is disabled; blur or pointer leave should close this tooltip."),await r(p).not.toHaveAttribute("aria-keyshortcuts"),h.keyDown(n,{key:"Escape"}),await r(e.getByRole("tooltip")).toBeInTheDocument(),h.blur(n),await g.unhover(n),await E(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},D={args:{content:"Theme tokens are inherited from AuroraProvider.",children:i.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},S={args:{disabled:!0,content:"This tooltip should never open",children:i.jsx(b,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:o})=>{const e=T(o),n=await e.findByRole("button",{name:"Disabled Tooltip"});await g.hover(n),await E(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function xe({content:o,children:e}){const[n,p]=a.useState(!1);return i.jsxs(de,{children:[i.jsx(b,{onClick:()=>p(w=>!w),children:n?"Hide tooltip":"Show tooltip"}),i.jsx(j,{open:n,onOpenChange:p,content:o,children:e})]})}const I={args:{content:"Controlled tooltip content",children:i.jsx(b,{variant:"outline",children:"Controlled target"})},render:o=>i.jsx(xe,{content:o.content,children:o.children}),play:async({canvasElement:o})=>{const e=T(o),n=await e.findByRole("button",{name:"Show tooltip"});await g.click(n),await r(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await g.keyboard("{Escape}"),await E(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},q={args:{content:"Tooltip with described-by lifecycle checks",children:i.jsx(b,{variant:"outline",children:"Lifecycle target"})},render:o=>i.jsxs(de,{gap:8,children:[i.jsx(j,{content:o.content,closeDelay:0,children:i.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),i.jsx("small",{id:"helper-id",style:be,children:"Existing helper narration"})]}),play:async({canvasElement:o})=>{const e=T(o),n=await e.findByRole("button",{name:"Lifecycle target"});n.focus();const w=(await e.findByRole("tooltip")).getAttribute("id");await r(n.getAttribute("aria-describedby")??"").toContain("helper-id"),await r(n.getAttribute("aria-describedby")??"").toContain(w),await g.keyboard("{Escape}"),await r(e.queryByRole("tooltip")).not.toBeInTheDocument(),await r(n).toHaveAttribute("aria-describedby","helper-id")}};var _,$,z;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=($=R.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var N,X,Y;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,Q,Z;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    closeOnEscape: false,
    content: "Escape is disabled; blur or pointer leave should close this tooltip.",
    children: <Button variant="outline">Escape Disabled Trigger</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Escape Disabled Trigger"
    });
    trigger.focus();
    const tooltip = await canvas.findByRole("tooltip");
    await expect(tooltip).toHaveTextContent("Escape is disabled; blur or pointer leave should close this tooltip.");
    await expect(tooltip).not.toHaveAttribute("aria-keyshortcuts");
    fireEvent.keyDown(trigger, {
      key: "Escape"
    });
    await expect(canvas.getByRole("tooltip")).toBeInTheDocument();
    fireEvent.blur(trigger);
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  }
}`,...(Z=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var P,ee,te;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ie,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ce,ue;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(ce=q.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const qe=["Default","EscapeModifierGuard","EscapeDisabled","InlineHint","Disabled","Controlled","DescribedByLifecycle"];export{I as Controlled,R as Default,q as DescribedByLifecycle,S as Disabled,C as EscapeDisabled,k as EscapeModifierGuard,D as InlineHint,qe as __namedExportsOrder,Ie as default};
