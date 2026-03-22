import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as w}from"./Button-DirECuRH.js";import{r}from"./index-BWu4c2F4.js";import{within as T,userEvent as f,expect as i,waitFor as E,fireEvent as v}from"./index-DgAF9SIF.js";import{s as Ie,S as qe}from"./storyShowcase-Bw5VyCj0.js";function Ae(t,e){switch(t){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function B({content:t,children:e,open:a,defaultOpen:s,onOpenChange:b,disabled:y=!1,closeOnEscape:O=!0,delayDuration:K=250,closeDelay:L=80,side:Te="top",sideOffset:Ee=8,maxWidth:Be=320}){const[xe,Re]=r.useState(s??!1),W=r.useId(),G=r.useRef(null),d=r.useRef(null),u=r.useRef(null),h=r.useRef(null),m=r.useRef(null),F=a!==void 0,x=F?a:xe;r.useRef(!1);const g=r.useCallback(()=>{var n;return((n=G.current)==null?void 0:n.ownerDocument.defaultView)??window},[]),p=r.useCallback(n=>{y&&n||x!==n&&(F||Re(n),b==null||b(n))},[y,F,x,b]),R=r.useCallback(()=>{d.current!==null&&((h.current??g()).clearTimeout(d.current),d.current=null,h.current=null),u.current!==null&&((m.current??g()).clearTimeout(u.current),u.current=null,m.current=null)},[g]),Q=r.useCallback(()=>{R(),p(!1)},[R,p]),ke=r.useCallback(()=>{y||(u.current!==null&&((m.current??g()).clearTimeout(u.current),u.current=null,m.current=null),p(!0))},[y,g,p]),U=r.useCallback(()=>{if(y)return;const n=g();if(u.current!==null&&((m.current??n).clearTimeout(u.current),u.current=null,m.current=null),K<=0){p(!0);return}d.current!==null&&(h.current??n).clearTimeout(d.current),h.current=n,d.current=n.setTimeout(()=>{p(!0),d.current=null,h.current=null},K)},[K,y,g,p]),z=r.useCallback(()=>{const n=g();if(d.current!==null&&((h.current??n).clearTimeout(d.current),d.current=null,h.current=null),L<=0){p(!1);return}u.current!==null&&(m.current??n).clearTimeout(u.current),m.current=n,u.current=n.setTimeout(()=>{p(!1),u.current=null,m.current=null},L)},[L,g,p]);r.useEffect(()=>R,[R]),r.useEffect(()=>{y&&x&&p(!1)},[y,x,p]);const _=x&&!y,$=r.Children.only(e),l=$.props,M=H(l["aria-labelledby"]),X=M===void 0?H(l["aria-label"]):void 0,Ce=M===void 0&&X===void 0?H(l.title):void 0,De=N(l.children).length>0,Se=[l["aria-describedby"],_?W:void 0].filter(Boolean).join(" ")||void 0;r.useEffect(()=>{},[De,X,M,Ce]);const je=r.cloneElement($,{"aria-describedby":Se,onMouseEnter:n=>{var c;(c=l.onMouseEnter)==null||c.call(l,n),n.defaultPrevented||U()},onMouseLeave:n=>{var c;(c=l.onMouseLeave)==null||c.call(l,n),n.defaultPrevented||z()},onFocus:n=>{var c;(c=l.onFocus)==null||c.call(l,n),n.defaultPrevented||ke()},onBlur:n=>{var c;(c=l.onBlur)==null||c.call(l,n),n.defaultPrevented||Q()},onKeyDown:n=>{var c;(c=l.onKeyDown)==null||c.call(l,n),!n.defaultPrevented&&O&&n.key==="Escape"&&!n.altKey&&!n.ctrlKey&&!n.metaKey&&!n.repeat&&!He(n)&&Q()}});return o.jsxs("span",{ref:G,style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[je,_?o.jsx("span",{id:W,role:"tooltip","aria-keyshortcuts":O?"Escape":void 0,onMouseEnter:U,onMouseLeave:z,style:{position:"absolute",...Ae(Te,Ee),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:Be,zIndex:"var(--aurora-z-overlay)"},children:t}):null]})}function He(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function N(t){if(typeof t=="string"||typeof t=="number")return Y(String(t));if(t==null||typeof t=="boolean")return"";if(Array.isArray(t))return Y(t.map(s=>N(s)).filter(s=>s.length>0).join(" "));if(!r.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";const a=H(e["aria-label"]);return a||N(e.children)}function H(t){if(typeof t=="string"&&t.trim().length>0)return t.trim()}function Y(t){return t.replace(/\s+/g," ").trim()}B.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};function V({children:t,gap:e=12}){return o.jsx(qe,{maxWidth:"min(100%, 520px)",gap:e,children:t})}const Oe={title:"Overlay/Tooltip",component:B,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},k={args:{children:o.jsx(w,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:t})=>{const e=T(t),a=await e.findByRole("button",{name:"Keyboard Shortcut"});await f.hover(a),await i(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await i(e.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts","Escape"),await f.unhover(a),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()}),a.focus(),await i(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await f.keyboard("{Escape}"),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},C={args:{content:"Only unmodified Escape should close this tooltip.",children:o.jsx(w,{variant:"outline",children:"Escape Guard Trigger"})},play:async({canvasElement:t})=>{const e=T(t),a=await e.findByRole("button",{name:"Escape Guard Trigger"});a.focus(),await i(await e.findByRole("tooltip")).toHaveTextContent("Only unmodified Escape should close this tooltip."),v.keyDown(a,{key:"Escape",ctrlKey:!0}),v.keyDown(a,{key:"Escape",altKey:!0}),v.keyDown(a,{key:"Escape",metaKey:!0}),v.keyDown(a,{key:"Escape",repeat:!0}),v.keyDown(a,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await i(e.getByRole("tooltip")).toBeInTheDocument(),await f.keyboard("{Shift>}{Escape}{/Shift}"),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},D={args:{closeOnEscape:!1,content:"Escape is disabled; blur or pointer leave should close this tooltip.",children:o.jsx(w,{variant:"outline",children:"Escape Disabled Trigger"})},play:async({canvasElement:t})=>{const e=T(t),a=await e.findByRole("button",{name:"Escape Disabled Trigger"});a.focus();const s=await e.findByRole("tooltip");await i(s).toHaveTextContent("Escape is disabled; blur or pointer leave should close this tooltip."),await i(s).not.toHaveAttribute("aria-keyshortcuts"),v.keyDown(a,{key:"Escape"}),await i(e.getByRole("tooltip")).toBeInTheDocument(),v.blur(a),await f.unhover(a),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},S={args:{content:"Theme tokens are inherited from AuroraProvider.",children:o.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},j={args:{disabled:!0,content:"This tooltip should never open",children:o.jsx(w,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:t})=>{const e=T(t),a=await e.findByRole("button",{name:"Disabled Tooltip"});await f.hover(a),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function Ke({content:t,children:e}){const[a,s]=r.useState(!1);return o.jsxs(V,{children:[o.jsx(w,{onClick:()=>s(b=>!b),children:a?"Hide tooltip":"Show tooltip"}),o.jsx(B,{open:a,onOpenChange:s,content:t,children:e})]})}const I={args:{content:"Controlled tooltip content",children:o.jsx(w,{variant:"outline",children:"Controlled target"})},render:t=>o.jsx(Ke,{content:t.content,children:t.children}),play:async({canvasElement:t})=>{const e=T(t),a=await e.findByRole("button",{name:"Show tooltip"});await f.click(a),await i(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await f.keyboard("{Escape}"),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},q={args:{content:"Tooltip with described-by lifecycle checks",children:o.jsx(w,{variant:"outline",children:"Lifecycle target"})},render:t=>o.jsxs(V,{gap:8,children:[o.jsx(B,{content:t.content,closeDelay:0,children:o.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),o.jsx("small",{id:"helper-id",style:Ie,children:"Existing helper narration"})]}),play:async({canvasElement:t})=>{const e=T(t),a=await e.findByRole("button",{name:"Lifecycle target"});a.focus();const b=(await e.findByRole("tooltip")).getAttribute("id");await i(a.getAttribute("aria-describedby")??"").toContain("helper-id"),await i(a.getAttribute("aria-describedby")??"").toContain(b),await f.keyboard("{Escape}"),await i(e.queryByRole("tooltip")).not.toBeInTheDocument(),await i(a).toHaveAttribute("aria-describedby","helper-id")}},A={render:()=>o.jsxs(V,{children:[o.jsx("h3",{id:"tooltip-trigger-name-heading",style:{margin:0},children:"Tooltip help"}),o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(B,{content:"Labelled-by tooltip trigger",children:o.jsx("button",{type:"button","aria-labelledby":"tooltip-trigger-name-heading",children:o.jsx("span",{"aria-hidden":"true",children:"ⓘ"})})}),o.jsx(B,{content:"Aria-label tooltip trigger",children:o.jsx("button",{type:"button","aria-label":"Quick help",children:o.jsx("span",{"aria-hidden":"true",children:"ⓘ"})})})]})]}),play:async({canvasElement:t})=>{const e=T(t),a=await e.findByRole("button",{name:"Tooltip help"}),s=e.getByRole("button",{name:"Quick help"});await i(a).toHaveAttribute("aria-labelledby","tooltip-trigger-name-heading"),await i(s).toHaveAttribute("aria-label","Quick help")}};var J,P,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(P=k.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var ee,te,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,re;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,le,se;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(le=S.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,ue,pe;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,ye,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var ge,fe,be;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var he,ve,we;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};const We=["Default","EscapeModifierGuard","EscapeDisabled","InlineHint","Disabled","Controlled","DescribedByLifecycle","NonTextTriggerNameFallback"];export{I as Controlled,k as Default,q as DescribedByLifecycle,j as Disabled,D as EscapeDisabled,C as EscapeModifierGuard,S as InlineHint,A as NonTextTriggerNameFallback,We as __namedExportsOrder,Oe as default};
