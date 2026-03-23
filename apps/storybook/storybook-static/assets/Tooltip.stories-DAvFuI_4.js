import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as b}from"./Button-B21ouHNm.js";import{r as i}from"./index-BWu4c2F4.js";import{within as v,userEvent as y,expect as r,waitFor as B,fireEvent as T}from"./index-DgAF9SIF.js";import{s as Ce,S as Ge}from"./storyShowcase-DlKirntE.js";function Qe(t,e){switch(t){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function J(t,e){return Number.isFinite(t)?Math.max(0,Math.trunc(t)):e}function Ue(t,e){return Number.isFinite(t)?Math.trunc(t):e}function P(t,e){return typeof t!="boolean"?e:t}function _e(t,e){if(typeof t=="number")return Number.isFinite(t)&&t>=0?t:e;const n=t.trim();return n.length>0?n:e}function E({content:t,children:e,open:n,defaultOpen:l,onOpenChange:h,disabled:De=!1,closeOnEscape:Se=!0,delayDuration:je=250,closeDelay:Ie=80,side:He="top",sideOffset:qe=8,maxWidth:Ae=320}){const[Le,Ke]=i.useState(l??!1),W=i.useId(),V=i.useRef(null),p=i.useRef(null),u=i.useRef(null),w=i.useRef(null),m=i.useRef(null),F=n!==void 0,x=F?n:Le;i.useRef(!1);const N=J(je,250),M=J(Ie,80),Fe=Ue(qe,8),Ne=_e(Ae,320),g=P(De,!1),G=P(Se,!0),f=i.useCallback(()=>{var o;return((o=V.current)==null?void 0:o.ownerDocument.defaultView)??window},[]),d=i.useCallback(o=>{g&&o||x!==o&&(F||Ke(o),h==null||h(o))},[g,F,x,h]),R=i.useCallback(()=>{p.current!==null&&((w.current??f()).clearTimeout(p.current),p.current=null,w.current=null),u.current!==null&&((m.current??f()).clearTimeout(u.current),u.current=null,m.current=null)},[f]),Q=i.useCallback(()=>{R(),d(!1)},[R,d]),Me=i.useCallback(()=>{g||(u.current!==null&&((m.current??f()).clearTimeout(u.current),u.current=null,m.current=null),d(!0))},[g,f,d]),U=i.useCallback(()=>{if(g)return;const o=f();if(u.current!==null&&((m.current??o).clearTimeout(u.current),u.current=null,m.current=null),N<=0){d(!0);return}p.current!==null&&(w.current??o).clearTimeout(p.current),w.current=o,p.current=o.setTimeout(()=>{d(!0),p.current=null,w.current=null},N)},[g,f,N,d]),_=i.useCallback(()=>{const o=f();if(p.current!==null&&((w.current??o).clearTimeout(p.current),p.current=null,w.current=null),M<=0){d(!1);return}u.current!==null&&(m.current??o).clearTimeout(u.current),m.current=o,u.current=o.setTimeout(()=>{d(!1),u.current=null,m.current=null},M)},[f,M,d]);i.useEffect(()=>R,[R]),i.useEffect(()=>{g&&x&&d(!1)},[g,x,d]);const $=x&&!g,X=i.Children.only(e),s=X.props,z=L(s["aria-labelledby"]),Y=z===void 0?L(s["aria-label"]):void 0,ze=z===void 0&&Y===void 0?L(s.title):void 0,Oe=O(s.children).length>0,We=[s["aria-describedby"],$?W:void 0].filter(Boolean).join(" ")||void 0;i.useEffect(()=>{},[Oe,Y,z,ze]);const Ve=i.cloneElement(X,{"aria-describedby":We,onMouseEnter:o=>{var c;(c=s.onMouseEnter)==null||c.call(s,o),o.defaultPrevented||U()},onMouseLeave:o=>{var c;(c=s.onMouseLeave)==null||c.call(s,o),o.defaultPrevented||_()},onFocus:o=>{var c;(c=s.onFocus)==null||c.call(s,o),o.defaultPrevented||Me()},onBlur:o=>{var c;(c=s.onBlur)==null||c.call(s,o),o.defaultPrevented||Q()},onKeyDown:o=>{var c;(c=s.onKeyDown)==null||c.call(s,o),!o.defaultPrevented&&G&&o.key==="Escape"&&!o.altKey&&!o.ctrlKey&&!o.metaKey&&!o.repeat&&!$e(o)&&Q()}});return a.jsxs("span",{ref:V,style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[Ve,$?a.jsx("span",{id:W,role:"tooltip","aria-keyshortcuts":G?"Escape":void 0,onMouseEnter:U,onMouseLeave:_,style:{position:"absolute",...Qe(He,Fe),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:Ne,zIndex:"var(--aurora-z-overlay)"},children:t}):null]})}function $e(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function O(t){if(typeof t=="string"||typeof t=="number")return Z(String(t));if(t==null||typeof t=="boolean")return"";if(Array.isArray(t))return Z(t.map(l=>O(l)).filter(l=>l.length>0).join(" "));if(!i.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";const n=L(e["aria-label"]);return n||O(e.children)}function L(t){if(typeof t=="string"&&t.trim().length>0)return t.trim()}function Z(t){return t.replace(/\s+/g," ").trim()}E.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};function K({children:t,gap:e=12}){return a.jsx(Ge,{maxWidth:"min(100%, 520px)",gap:e,children:t})}const nt={title:"Overlay/Tooltip",component:E,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},k={args:{children:a.jsx(b,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Keyboard Shortcut"});await y.hover(n),await r(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await r(e.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts","Escape"),await y.unhover(n),await B(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()}),n.focus(),await r(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await y.keyboard("{Escape}"),await B(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},C={args:{content:"Only unmodified Escape should close this tooltip.",children:a.jsx(b,{variant:"outline",children:"Escape Guard Trigger"})},play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Escape Guard Trigger"});n.focus(),await r(await e.findByRole("tooltip")).toHaveTextContent("Only unmodified Escape should close this tooltip."),T.keyDown(n,{key:"Escape",ctrlKey:!0}),T.keyDown(n,{key:"Escape",altKey:!0}),T.keyDown(n,{key:"Escape",metaKey:!0}),T.keyDown(n,{key:"Escape",repeat:!0}),T.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await r(e.getByRole("tooltip")).toBeInTheDocument(),await y.keyboard("{Shift>}{Escape}{/Shift}"),await B(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},D={args:{closeOnEscape:!1,content:"Escape is disabled; blur or pointer leave should close this tooltip.",children:a.jsx(b,{variant:"outline",children:"Escape Disabled Trigger"})},play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Escape Disabled Trigger"});n.focus();const l=await e.findByRole("tooltip");await r(l).toHaveTextContent("Escape is disabled; blur or pointer leave should close this tooltip."),await r(l).not.toHaveAttribute("aria-keyshortcuts"),T.keyDown(n,{key:"Escape"}),await r(e.getByRole("tooltip")).toBeInTheDocument(),T.blur(n),await y.unhover(n),await B(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function Xe(){const[t,e]=i.useState(0);return a.jsxs(K,{gap:8,children:[a.jsxs("p",{style:Ce,children:["Escape close count: ",a.jsx("strong",{"data-testid":"tooltip-runtime-close-count",children:t})]}),a.jsx(E,{content:"Runtime booleans should normalize to enabled Escape and interactive trigger.",delayDuration:0,closeDelay:0,disabled:"true",closeOnEscape:0,onOpenChange:n=>{n||e(l=>l+1)},children:a.jsx(b,{variant:"outline",children:"Runtime Boolean Trigger"})})]})}const S={args:{content:"Runtime booleans should normalize to enabled Escape and interactive trigger.",children:a.jsx(b,{variant:"outline",children:"Runtime Boolean Trigger"})},render:()=>a.jsx(Xe,{}),play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Runtime Boolean Trigger"});await r(e.getByTestId("tooltip-runtime-close-count")).toHaveTextContent("0"),n.focus();const l=await e.findByRole("tooltip");await r(l).toHaveAttribute("aria-keyshortcuts","Escape"),await r(l).toHaveTextContent("Runtime booleans should normalize to enabled Escape and interactive trigger."),await y.keyboard("{Escape}"),await B(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()}),await r(e.getByTestId("tooltip-runtime-close-count")).toHaveTextContent("1")}},j={args:{content:"Theme tokens are inherited from AuroraProvider.",children:a.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},I={args:{disabled:!0,content:"This tooltip should never open",children:a.jsx(b,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Disabled Tooltip"});await y.hover(n),await B(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function Ye({content:t,children:e}){const[n,l]=i.useState(!1);return a.jsxs(K,{children:[a.jsx(b,{onClick:()=>l(h=>!h),children:n?"Hide tooltip":"Show tooltip"}),a.jsx(E,{open:n,onOpenChange:l,content:t,children:e})]})}const H={args:{content:"Controlled tooltip content",children:a.jsx(b,{variant:"outline",children:"Controlled target"})},render:t=>a.jsx(Ye,{content:t.content,children:t.children}),play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Show tooltip"});await y.click(n),await r(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await y.keyboard("{Escape}"),await B(()=>{r(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},q={args:{content:"Tooltip with described-by lifecycle checks",children:a.jsx(b,{variant:"outline",children:"Lifecycle target"})},render:t=>a.jsxs(K,{gap:8,children:[a.jsx(E,{content:t.content,closeDelay:0,children:a.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),a.jsx("small",{id:"helper-id",style:Ce,children:"Existing helper narration"})]}),play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Lifecycle target"});n.focus();const h=(await e.findByRole("tooltip")).getAttribute("id");await r(n.getAttribute("aria-describedby")??"").toContain("helper-id"),await r(n.getAttribute("aria-describedby")??"").toContain(h),await y.keyboard("{Escape}"),await r(e.queryByRole("tooltip")).not.toBeInTheDocument(),await r(n).toHaveAttribute("aria-describedby","helper-id")}},A={args:{content:"Labelled-by tooltip trigger",children:a.jsx("button",{type:"button",children:"Tooltip help"})},render:()=>a.jsxs(K,{children:[a.jsx("h3",{id:"tooltip-trigger-name-heading",style:{margin:0},children:"Tooltip help"}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(E,{content:"Labelled-by tooltip trigger",children:a.jsx("button",{type:"button","aria-labelledby":"tooltip-trigger-name-heading",children:a.jsx("span",{"aria-hidden":"true",children:"ⓘ"})})}),a.jsx(E,{content:"Aria-label tooltip trigger",children:a.jsx("button",{type:"button","aria-label":"Quick help",children:a.jsx("span",{"aria-hidden":"true",children:"ⓘ"})})})]})]}),play:async({canvasElement:t})=>{const e=v(t),n=await e.findByRole("button",{name:"Tooltip help"}),l=e.getByRole("button",{name:"Quick help"});await r(n).toHaveAttribute("aria-labelledby","tooltip-trigger-name-heading"),await r(l).toHaveAttribute("aria-label","Quick help")}};var ee,te,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,re;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,le,se;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(le=D.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,ue,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    content: "Runtime booleans should normalize to enabled Escape and interactive trigger.",
    children: <Button variant="outline">Runtime Boolean Trigger</Button>
  },
  render: () => <RuntimeBooleanConfigNormalizationTooltipStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Runtime Boolean Trigger"
    });
    await expect(canvas.getByTestId("tooltip-runtime-close-count")).toHaveTextContent("0");
    trigger.focus();
    const tooltip = await canvas.findByRole("tooltip");
    await expect(tooltip).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(tooltip).toHaveTextContent("Runtime booleans should normalize to enabled Escape and interactive trigger.");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("tooltip")).not.toBeInTheDocument();
    });
    await expect(canvas.getByTestId("tooltip-runtime-close-count")).toHaveTextContent("1");
  }
}`,...(de=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,ye,me;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var ge,fe,be;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var he,ve,we;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Te,Be,Ee;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var xe,Re,ke;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    content: "Labelled-by tooltip trigger",
    children: <button type="button">Tooltip help</button>
  },
  render: () => <TooltipShowcase>
      <h3 id="tooltip-trigger-name-heading" style={{
      margin: 0
    }}>
        Tooltip help
      </h3>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <Tooltip content="Labelled-by tooltip trigger">
          <button type="button" aria-labelledby="tooltip-trigger-name-heading">
            <span aria-hidden="true">ⓘ</span>
          </button>
        </Tooltip>
        <Tooltip content="Aria-label tooltip trigger">
          <button type="button" aria-label="Quick help">
            <span aria-hidden="true">ⓘ</span>
          </button>
        </Tooltip>
      </div>
    </TooltipShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const labelledByTrigger = await canvas.findByRole("button", {
      name: "Tooltip help"
    });
    const ariaLabelTrigger = canvas.getByRole("button", {
      name: "Quick help"
    });
    await expect(labelledByTrigger).toHaveAttribute("aria-labelledby", "tooltip-trigger-name-heading");
    await expect(ariaLabelTrigger).toHaveAttribute("aria-label", "Quick help");
  }
}`,...(ke=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};const ot=["Default","EscapeModifierGuard","EscapeDisabled","RuntimeBooleanConfigNormalization","InlineHint","Disabled","Controlled","DescribedByLifecycle","NonTextTriggerNameFallback"];export{H as Controlled,k as Default,q as DescribedByLifecycle,I as Disabled,D as EscapeDisabled,C as EscapeModifierGuard,j as InlineHint,A as NonTextTriggerNameFallback,S as RuntimeBooleanConfigNormalization,ot as __namedExportsOrder,nt as default};
