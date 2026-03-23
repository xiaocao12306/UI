import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{B as w}from"./Button-B21ouHNm.js";import{r}from"./index-BWu4c2F4.js";import{within as T,userEvent as f,expect as i,waitFor as E,fireEvent as v}from"./index-DgAF9SIF.js";import{s as Ke,S as Fe}from"./storyShowcase-DlKirntE.js";function Me(t,e){switch(t){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function Y(t,e){return Number.isFinite(t)?Math.max(0,Math.trunc(t)):e}function Ne(t,e){return Number.isFinite(t)?Math.trunc(t):e}function We(t,e){if(typeof t=="number")return Number.isFinite(t)&&t>=0?t:e;const n=t.trim();return n.length>0?n:e}function B({content:t,children:e,open:n,defaultOpen:s,onOpenChange:b,disabled:y=!1,closeOnEscape:O=!0,delayDuration:Ee=250,closeDelay:Be=80,side:xe="top",sideOffset:Re=8,maxWidth:ke=320}){const[De,Ce]=r.useState(s??!1),V=r.useId(),G=r.useRef(null),d=r.useRef(null),u=r.useRef(null),h=r.useRef(null),m=r.useRef(null),L=n!==void 0,x=L?n:De;r.useRef(!1);const K=Y(Ee,250),F=Y(Be,80),Se=Ne(Re,8),je=We(ke,320),g=r.useCallback(()=>{var o;return((o=G.current)==null?void 0:o.ownerDocument.defaultView)??window},[]),p=r.useCallback(o=>{y&&o||x!==o&&(L||Ce(o),b==null||b(o))},[y,L,x,b]),R=r.useCallback(()=>{d.current!==null&&((h.current??g()).clearTimeout(d.current),d.current=null,h.current=null),u.current!==null&&((m.current??g()).clearTimeout(u.current),u.current=null,m.current=null)},[g]),Q=r.useCallback(()=>{R(),p(!1)},[R,p]),Ie=r.useCallback(()=>{y||(u.current!==null&&((m.current??g()).clearTimeout(u.current),u.current=null,m.current=null),p(!0))},[y,g,p]),z=r.useCallback(()=>{if(y)return;const o=g();if(u.current!==null&&((m.current??o).clearTimeout(u.current),u.current=null,m.current=null),K<=0){p(!0);return}d.current!==null&&(h.current??o).clearTimeout(d.current),h.current=o,d.current=o.setTimeout(()=>{p(!0),d.current=null,h.current=null},K)},[y,g,K,p]),U=r.useCallback(()=>{const o=g();if(d.current!==null&&((h.current??o).clearTimeout(d.current),d.current=null,h.current=null),F<=0){p(!1);return}u.current!==null&&(m.current??o).clearTimeout(u.current),m.current=o,u.current=o.setTimeout(()=>{p(!1),u.current=null,m.current=null},F)},[g,F,p]);r.useEffect(()=>R,[R]),r.useEffect(()=>{y&&x&&p(!1)},[y,x,p]);const _=x&&!y,$=r.Children.only(e),l=$.props,M=H(l["aria-labelledby"]),X=M===void 0?H(l["aria-label"]):void 0,qe=M===void 0&&X===void 0?H(l.title):void 0,Ae=N(l.children).length>0,He=[l["aria-describedby"],_?V:void 0].filter(Boolean).join(" ")||void 0;r.useEffect(()=>{},[Ae,X,M,qe]);const Le=r.cloneElement($,{"aria-describedby":He,onMouseEnter:o=>{var c;(c=l.onMouseEnter)==null||c.call(l,o),o.defaultPrevented||z()},onMouseLeave:o=>{var c;(c=l.onMouseLeave)==null||c.call(l,o),o.defaultPrevented||U()},onFocus:o=>{var c;(c=l.onFocus)==null||c.call(l,o),o.defaultPrevented||Ie()},onBlur:o=>{var c;(c=l.onBlur)==null||c.call(l,o),o.defaultPrevented||Q()},onKeyDown:o=>{var c;(c=l.onKeyDown)==null||c.call(l,o),!o.defaultPrevented&&O&&o.key==="Escape"&&!o.altKey&&!o.ctrlKey&&!o.metaKey&&!o.repeat&&!Oe(o)&&Q()}});return a.jsxs("span",{ref:G,style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[Le,_?a.jsx("span",{id:V,role:"tooltip","aria-keyshortcuts":O?"Escape":void 0,onMouseEnter:z,onMouseLeave:U,style:{position:"absolute",...Me(xe,Se),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:je,zIndex:"var(--aurora-z-overlay)"},children:t}):null]})}function Oe(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function N(t){if(typeof t=="string"||typeof t=="number")return J(String(t));if(t==null||typeof t=="boolean")return"";if(Array.isArray(t))return J(t.map(s=>N(s)).filter(s=>s.length>0).join(" "));if(!r.isValidElement(t))return"";const e=t.props;if(e["aria-hidden"]===!0||e["aria-hidden"]==="true")return"";const n=H(e["aria-label"]);return n||N(e.children)}function H(t){if(typeof t=="string"&&t.trim().length>0)return t.trim()}function J(t){return t.replace(/\s+/g," ").trim()}B.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};function W({children:t,gap:e=12}){return a.jsx(Fe,{maxWidth:"min(100%, 520px)",gap:e,children:t})}const $e={title:"Overlay/Tooltip",component:B,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},k={args:{children:a.jsx(w,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:t})=>{const e=T(t),n=await e.findByRole("button",{name:"Keyboard Shortcut"});await f.hover(n),await i(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await i(e.getByRole("tooltip")).toHaveAttribute("aria-keyshortcuts","Escape"),await f.unhover(n),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()}),n.focus(),await i(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await f.keyboard("{Escape}"),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},D={args:{content:"Only unmodified Escape should close this tooltip.",children:a.jsx(w,{variant:"outline",children:"Escape Guard Trigger"})},play:async({canvasElement:t})=>{const e=T(t),n=await e.findByRole("button",{name:"Escape Guard Trigger"});n.focus(),await i(await e.findByRole("tooltip")).toHaveTextContent("Only unmodified Escape should close this tooltip."),v.keyDown(n,{key:"Escape",ctrlKey:!0}),v.keyDown(n,{key:"Escape",altKey:!0}),v.keyDown(n,{key:"Escape",metaKey:!0}),v.keyDown(n,{key:"Escape",repeat:!0}),v.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await i(e.getByRole("tooltip")).toBeInTheDocument(),await f.keyboard("{Shift>}{Escape}{/Shift}"),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},C={args:{closeOnEscape:!1,content:"Escape is disabled; blur or pointer leave should close this tooltip.",children:a.jsx(w,{variant:"outline",children:"Escape Disabled Trigger"})},play:async({canvasElement:t})=>{const e=T(t),n=await e.findByRole("button",{name:"Escape Disabled Trigger"});n.focus();const s=await e.findByRole("tooltip");await i(s).toHaveTextContent("Escape is disabled; blur or pointer leave should close this tooltip."),await i(s).not.toHaveAttribute("aria-keyshortcuts"),v.keyDown(n,{key:"Escape"}),await i(e.getByRole("tooltip")).toBeInTheDocument(),v.blur(n),await f.unhover(n),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},S={args:{content:"Theme tokens are inherited from AuroraProvider.",children:a.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},j={args:{disabled:!0,content:"This tooltip should never open",children:a.jsx(w,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:t})=>{const e=T(t),n=await e.findByRole("button",{name:"Disabled Tooltip"});await f.hover(n),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function Ve({content:t,children:e}){const[n,s]=r.useState(!1);return a.jsxs(W,{children:[a.jsx(w,{onClick:()=>s(b=>!b),children:n?"Hide tooltip":"Show tooltip"}),a.jsx(B,{open:n,onOpenChange:s,content:t,children:e})]})}const I={args:{content:"Controlled tooltip content",children:a.jsx(w,{variant:"outline",children:"Controlled target"})},render:t=>a.jsx(Ve,{content:t.content,children:t.children}),play:async({canvasElement:t})=>{const e=T(t),n=await e.findByRole("button",{name:"Show tooltip"});await f.click(n),await i(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await f.keyboard("{Escape}"),await E(()=>{i(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},q={args:{content:"Tooltip with described-by lifecycle checks",children:a.jsx(w,{variant:"outline",children:"Lifecycle target"})},render:t=>a.jsxs(W,{gap:8,children:[a.jsx(B,{content:t.content,closeDelay:0,children:a.jsx("button",{type:"button","aria-describedby":"helper-id",children:"Lifecycle target"})}),a.jsx("small",{id:"helper-id",style:Ke,children:"Existing helper narration"})]}),play:async({canvasElement:t})=>{const e=T(t),n=await e.findByRole("button",{name:"Lifecycle target"});n.focus();const b=(await e.findByRole("tooltip")).getAttribute("id");await i(n.getAttribute("aria-describedby")??"").toContain("helper-id"),await i(n.getAttribute("aria-describedby")??"").toContain(b),await f.keyboard("{Escape}"),await i(e.queryByRole("tooltip")).not.toBeInTheDocument(),await i(n).toHaveAttribute("aria-describedby","helper-id")}},A={args:{content:"Labelled-by tooltip trigger",children:a.jsx("button",{type:"button",children:"Tooltip help"})},render:()=>a.jsxs(W,{children:[a.jsx("h3",{id:"tooltip-trigger-name-heading",style:{margin:0},children:"Tooltip help"}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(B,{content:"Labelled-by tooltip trigger",children:a.jsx("button",{type:"button","aria-labelledby":"tooltip-trigger-name-heading",children:a.jsx("span",{"aria-hidden":"true",children:"ⓘ"})})}),a.jsx(B,{content:"Aria-label tooltip trigger",children:a.jsx("button",{type:"button","aria-label":"Quick help",children:a.jsx("span",{"aria-hidden":"true",children:"ⓘ"})})})]})]}),play:async({canvasElement:t})=>{const e=T(t),n=await e.findByRole("button",{name:"Tooltip help"}),s=e.getByRole("button",{name:"Quick help"});await i(n).toHaveAttribute("aria-labelledby","tooltip-trigger-name-heading"),await i(s).toHaveAttribute("aria-label","Quick help")}};var P,Z,ee;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,re,ie;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,se,ce;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ue,pe,de;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ye,me,ge;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,be,he;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(be=q.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ve,we,Te;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Te=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};const Xe=["Default","EscapeModifierGuard","EscapeDisabled","InlineHint","Disabled","Controlled","DescribedByLifecycle","NonTextTriggerNameFallback"];export{I as Controlled,k as Default,q as DescribedByLifecycle,j as Disabled,C as EscapeDisabled,D as EscapeModifierGuard,S as InlineHint,A as NonTextTriggerNameFallback,Xe as __namedExportsOrder,$e as default};
