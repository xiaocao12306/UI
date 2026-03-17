import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{B}from"./Button-Hgh0jeno.js";import{r as o}from"./index-BWu4c2F4.js";import{within as k,userEvent as p,expect as c,waitFor as T}from"./index-DgAF9SIF.js";function y(t,e){return n=>{t==null||t(n),n.defaultPrevented||e(n)}}function ee(t,e){switch(t){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function D({content:t,children:e,open:n,defaultOpen:m,onOpenChange:u,disabled:s=!1,delayDuration:x=250,closeDelay:R=80,side:W="top",sideOffset:X=8,maxWidth:Y=320}){const[G,J]=o.useState(m??!1),q=o.useId(),l=o.useRef(null),a=o.useRef(null),C=n!==void 0,E=C?n:G,r=o.useCallback(f=>{s&&f||(C||J(f),u==null||u(f))},[s,C,u]),w=o.useCallback(()=>{l.current!==null&&(window.clearTimeout(l.current),l.current=null),a.current!==null&&(window.clearTimeout(a.current),a.current=null)},[]),I=o.useCallback(()=>{w(),r(!1)},[w,r]),Q=o.useCallback(()=>{s||(a.current!==null&&(window.clearTimeout(a.current),a.current=null),r(!0))},[s,r]),S=o.useCallback(()=>{if(!s){if(a.current!==null&&(window.clearTimeout(a.current),a.current=null),x<=0){r(!0);return}l.current!==null&&window.clearTimeout(l.current),l.current=window.setTimeout(()=>{r(!0),l.current=null},x)}},[x,s,r]),j=o.useCallback(()=>{if(l.current!==null&&(window.clearTimeout(l.current),l.current=null),R<=0){r(!1);return}a.current!==null&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>{r(!1),a.current=null},R)},[R,r]);o.useEffect(()=>w,[w]),o.useEffect(()=>{s&&E&&r(!1)},[s,E,r]);const K=E&&!s,F=o.Children.only(e),d=F.props,Z=[d["aria-describedby"],K?q:void 0].filter(Boolean).join(" ")||void 0;return i.jsxs("span",{style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[o.cloneElement(F,{"aria-describedby":Z,onMouseEnter:y(d.onMouseEnter,()=>S()),onMouseLeave:y(d.onMouseLeave,()=>j()),onFocus:y(d.onFocus,()=>Q()),onBlur:y(d.onBlur,()=>I()),onKeyDown:y(d.onKeyDown,f=>{f.key==="Escape"&&I()})}),K?i.jsx("span",{id:q,role:"tooltip",onMouseEnter:S,onMouseLeave:j,style:{position:"absolute",...ee(W,X),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:Y,zIndex:1200},children:t}):null]})}D.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};const le={title:"Overlay/Tooltip",component:D,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},v={args:{children:i.jsx(B,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:t})=>{const e=k(t),n=await e.findByRole("button",{name:"Keyboard Shortcut"});await p.hover(n),await c(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await p.unhover(n),await T(()=>{c(e.queryByRole("tooltip")).not.toBeInTheDocument()}),n.focus(),await c(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await p.keyboard("{Escape}"),await T(()=>{c(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},h={args:{content:"Theme tokens are inherited from AuroraProvider.",children:i.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},g={args:{disabled:!0,content:"This tooltip should never open",children:i.jsx(B,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:t})=>{const e=k(t),n=await e.findByRole("button",{name:"Disabled Tooltip"});await p.hover(n),await T(()=>{c(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function te({content:t,children:e}){const[n,m]=o.useState(!1);return i.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[i.jsx(B,{onClick:()=>m(u=>!u),children:n?"Hide tooltip":"Show tooltip"}),i.jsx(D,{open:n,onOpenChange:m,content:t,children:e})]})}const b={args:{content:"Controlled tooltip content",children:i.jsx(B,{variant:"outline",children:"Controlled target"})},render:t=>i.jsx(te,{content:t.content,children:t.children}),play:async({canvasElement:t})=>{const e=k(t),n=await e.findByRole("button",{name:"Show tooltip"});await p.click(n),await c(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await p.keyboard("{Escape}"),await T(()=>{c(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};var H,M,V;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(M=v.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var P,U,_;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,L,N;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(N=(L=g.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var z,A,O;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    content: "Controlled tooltip content",
    children: <Button variant="outline">Controlled target</Button>
  },
  render: args => <ControlledTooltipStory content={args.content} children={args.children} />,
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
}`,...(O=(A=b.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const ie=["Default","InlineHint","Disabled","Controlled"];export{b as Controlled,v as Default,g as Disabled,h as InlineHint,ie as __namedExportsOrder,le as default};
