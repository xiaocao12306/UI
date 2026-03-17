import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{B}from"./Button-Hgh0jeno.js";import{r as o}from"./index-BWu4c2F4.js";import{within as k,userEvent as f,expect as p,waitFor as T}from"./index-DgAF9SIF.js";function te(a,e){switch(a){case"top":return{bottom:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"};case"right":return{left:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"left":return{right:`calc(100% + ${e}px)`,top:"50%",transform:"translateY(-50%)"};case"bottom":default:return{top:`calc(100% + ${e}px)`,left:"50%",transform:"translateX(-50%)"}}}function D({content:a,children:e,open:l,defaultOpen:y,onOpenChange:m,disabled:d=!1,delayDuration:x=250,closeDelay:C=80,side:X="top",sideOffset:Y=8,maxWidth:G=320}){const[J,Q]=o.useState(y??!1),q=o.useId(),c=o.useRef(null),i=o.useRef(null),R=l!==void 0,E=R?l:J,s=o.useCallback(t=>{d&&t||(R||Q(t),m==null||m(t))},[d,R,m]),w=o.useCallback(()=>{c.current!==null&&(window.clearTimeout(c.current),c.current=null),i.current!==null&&(window.clearTimeout(i.current),i.current=null)},[]),S=o.useCallback(()=>{w(),s(!1)},[w,s]),Z=o.useCallback(()=>{d||(i.current!==null&&(window.clearTimeout(i.current),i.current=null),s(!0))},[d,s]),I=o.useCallback(()=>{if(!d){if(i.current!==null&&(window.clearTimeout(i.current),i.current=null),x<=0){s(!0);return}c.current!==null&&window.clearTimeout(c.current),c.current=window.setTimeout(()=>{s(!0),c.current=null},x)}},[x,d,s]),j=o.useCallback(()=>{if(c.current!==null&&(window.clearTimeout(c.current),c.current=null),C<=0){s(!1);return}i.current!==null&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>{s(!1),i.current=null},C)},[C,s]);o.useEffect(()=>w,[w]),o.useEffect(()=>{d&&E&&s(!1)},[d,E,s]);const K=E&&!d,H=o.Children.only(e),n=H.props,P=[n["aria-describedby"],K?q:void 0].filter(Boolean).join(" ")||void 0,ee=o.cloneElement(H,{"aria-describedby":P,onMouseEnter:t=>{var r;(r=n.onMouseEnter)==null||r.call(n,t),t.defaultPrevented||I()},onMouseLeave:t=>{var r;(r=n.onMouseLeave)==null||r.call(n,t),t.defaultPrevented||j()},onFocus:t=>{var r;(r=n.onFocus)==null||r.call(n,t),t.defaultPrevented||Z()},onBlur:t=>{var r;(r=n.onBlur)==null||r.call(n,t),t.defaultPrevented||S()},onKeyDown:t=>{var r;(r=n.onKeyDown)==null||r.call(n,t),!t.defaultPrevented&&t.key==="Escape"&&S()}});return u.jsxs("span",{style:{position:"relative",display:"inline-flex",maxWidth:"100%"},children:[ee,K?u.jsx("span",{id:q,role:"tooltip",onMouseEnter:I,onMouseLeave:j,style:{position:"absolute",...te(X,Y),background:"var(--aurora-color-slate-900)",color:"white",padding:"6px 8px",borderRadius:6,fontSize:12,whiteSpace:"normal",maxWidth:G,zIndex:"var(--aurora-z-overlay)"},children:a}):null]})}D.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},sideOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}}}};const ie={title:"Overlay/Tooltip",component:D,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip supports controlled/uncontrolled mode, pointer delay, and deterministic Escape/blur close behavior."}}},args:{content:"Use Cmd/Ctrl + K to open command palette.",delayDuration:200,side:"top"}},v={args:{children:u.jsx(B,{variant:"outline",children:"Keyboard Shortcut"})},play:async({canvasElement:a})=>{const e=k(a),l=await e.findByRole("button",{name:"Keyboard Shortcut"});await f.hover(l),await p(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await f.unhover(l),await T(()=>{p(e.queryByRole("tooltip")).not.toBeInTheDocument()}),l.focus(),await p(await e.findByRole("tooltip")).toHaveTextContent("Use Cmd/Ctrl + K to open command palette."),await f.keyboard("{Escape}"),await T(()=>{p(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},g={args:{content:"Theme tokens are inherited from AuroraProvider.",children:u.jsx("button",{type:"button",style:{border:0,background:"transparent",color:"var(--aurora-text-secondary)",textDecoration:"underline",cursor:"pointer"},children:"Token inheritance"})}},h={args:{disabled:!0,content:"This tooltip should never open",children:u.jsx(B,{variant:"ghost",children:"Disabled Tooltip"})},play:async({canvasElement:a})=>{const e=k(a),l=await e.findByRole("button",{name:"Disabled Tooltip"});await f.hover(l),await T(()=>{p(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};function ne({content:a,children:e}){const[l,y]=o.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[u.jsx(B,{onClick:()=>y(m=>!m),children:l?"Hide tooltip":"Show tooltip"}),u.jsx(D,{open:l,onOpenChange:y,content:a,children:e})]})}const b={args:{content:"Controlled tooltip content",children:u.jsx(B,{variant:"outline",children:"Controlled target"})},render:a=>u.jsx(ne,{content:a.content,children:a.children}),play:async({canvasElement:a})=>{const e=k(a),l=await e.findByRole("button",{name:"Show tooltip"});await f.click(l),await p(await e.findByRole("tooltip")).toHaveTextContent("Controlled tooltip content"),(await e.findByRole("button",{name:"Controlled target"})).focus(),await f.keyboard("{Escape}"),await T(()=>{p(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};var F,M,V;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(M=v.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var U,_,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(_=g.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,L,N;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var A,O,W;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(O=b.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const se=["Default","InlineHint","Disabled","Controlled"];export{b as Controlled,v as Default,h as Disabled,g as InlineHint,se as __namedExportsOrder,ie as default};
