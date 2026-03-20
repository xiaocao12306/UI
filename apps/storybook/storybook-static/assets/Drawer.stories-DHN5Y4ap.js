import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{B as p}from"./Button-DS9RTxKh.js";import{l as Ce,P as Oe,F as Se}from"./bodyScrollLock-CnEUF6y7.js";import{D as Fe}from"./DismissableLayer-BWoUnDZk.js";import{D as He}from"./Dropdown-DfiXkt2x.js";import{within as l,fireEvent as f,expect as o,userEvent as r}from"./index-DgAF9SIF.js";import{b,s as h,a as B}from"./storyShowcase-Bw5VyCj0.js";import"./index-DlVbWVVj.js";function u({open:a,side:e="right",title:n,description:i,children:d,restoreFocus:y=!0,closeOnEscape:m=!0,closeOnOutsidePointer:v=!0,showCloseButton:Ie=!0,closeLabel:ke="Close drawer",onEscapeKeyDown:N,onPointerDownOutside:P,onCloseReason:g,onOpenChange:q}){const A=s.useId(),V=s.useId(),[M,K]=s.useState(!1),[U,D]=s.useState(!1),[Y,G]=s.useState(!1),L=s.useRef(!0),je=s.useCallback(c=>{g==null||g(c),q(!1)},[g,q]);return s.useEffect(()=>{if(a)return Ce()},[a]),a?t.jsx(Oe,{children:t.jsx("div",{style:{position:"fixed",inset:0,background:"var(--aurora-overlay-bg)",backdropFilter:"blur(var(--aurora-overlay-blur))",zIndex:"var(--aurora-z-modal)"},children:t.jsx(Fe,{onEscapeKeyDown:c=>{if(N==null||N(c),!c.defaultPrevented){if(!m){c.preventDefault();return}g==null||g("escape-key")}},onPointerDownOutside:c=>{if(P==null||P(c),!c.defaultPrevented){if(!v){c.preventDefault();return}g==null||g("outside-pointer")}},onDismiss:()=>q(!1),children:t.jsx(Se,{restoreFocus:y,children:t.jsxs("aside",{role:"dialog","aria-modal":"true","aria-labelledby":A,"aria-describedby":i?V:void 0,"data-side":e,style:{position:"absolute",top:0,bottom:0,[e]:0,width:"min(420px, 90vw)",borderLeft:e==="right"?"1px solid var(--aurora-panel-border)":void 0,borderRight:e==="left"?"1px solid var(--aurora-panel-border)":void 0,background:"var(--aurora-panel-bg)",boxShadow:"var(--aurora-panel-shadow)",padding:16,display:"grid",gridTemplateRows:"auto 1fr",gap:12,borderTopLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderBottomLeftRadius:e==="right"?"var(--aurora-radius-lg)":0,borderTopRightRadius:e==="left"?"var(--aurora-radius-lg)":0,borderBottomRightRadius:e==="left"?"var(--aurora-radius-lg)":0},children:[t.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8},children:[t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("h2",{id:A,style:{margin:0,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-lg)"},children:n}),i?t.jsx("p",{id:V,style:{margin:0,color:"var(--aurora-text-secondary)"},children:i}):null]}),Ie?t.jsx("button",{type:"button",onClick:()=>je("close-button"),"aria-label":ke,onMouseEnter:()=>{K(!0)},onMouseLeave:()=>{K(!1),D(!1)},onMouseDown:c=>{c.button===0&&(L.current=!1,G(!1)),c.button===0&&D(!0)},onMouseUp:c=>{c.button===0&&D(!1)},onKeyDown:()=>{L.current=!0},onFocus:c=>{G(Ne(c.currentTarget,L.current))},onBlur:()=>{G(!1),D(!1)},style:{borderRadius:"var(--aurora-radius-sm)",border:M||Y?"1px solid var(--aurora-border-strong)":"1px solid var(--aurora-border-default)",background:U?"color-mix(in srgb, var(--aurora-surface-elevated) 66%, var(--aurora-surface-default))":M?"color-mix(in srgb, var(--aurora-surface-elevated) 82%, var(--aurora-surface-default))":"var(--aurora-surface-elevated)",color:M?"var(--aurora-text-primary)":"var(--aurora-text-secondary)",boxShadow:Y?"0 0 0 3px color-mix(in srgb, var(--aurora-focus-ring) 45%, transparent)":"none",width:30,height:30,cursor:"pointer",transform:U?"translateY(1px)":"translateY(0)",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:"×"}):null]}),t.jsx("div",{style:{overflow:"auto"},children:d})]})})})})}):null}function Ne(a,e){try{return a.matches(":focus-visible")}catch{return e}}u.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close drawer"',computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: DrawerCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const at={title:"Overlay/Drawer",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Drawer supports left/right panel placement, optional helper description, and configurable dismiss behavior for blocking workflows."}}},args:{open:!0,side:"right",title:"Release filters",description:"Refine release list by environment and risk level.",children:"Drawer content",onOpenChange:()=>{}}},H={display:"grid",gap:10},Re={display:"grid",gap:10,justifyItems:"start"},w={margin:0},Ee={position:"absolute",left:0,top:0,width:1,height:1,opacity:0};function Pe(){const[a,e]=s.useState(!1);return t.jsxs(b,{align:"start",children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Release filters",description:"Filter environment, owner, and severity.",children:t.jsxs("div",{style:H,children:[t.jsx("p",{style:w,children:"Use this panel to narrow incident review scope."}),t.jsx(p,{onClick:()=>e(!1),children:"Apply and close"})]})})]})}const x={render:()=>t.jsx(Pe,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body);await r.click(e.getByRole("button",{name:"Open Drawer"})),await o(await n.findByRole("dialog",{name:"Release filters"})).toBeInTheDocument(),await r.click(n.getByRole("button",{name:"Close drawer"})),await o(n.queryByRole("dialog",{name:"Release filters"})).not.toBeInTheDocument()}};function qe(){const[a,e]=s.useState(!0);return t.jsxs(b,{align:"start",children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Security checklist",description:"Dismiss by completing required action.",side:"left",closeOnEscape:!1,closeOnOutsidePointer:!1,showCloseButton:!1,children:t.jsxs("div",{style:H,children:[t.jsx("p",{style:w,children:"Outside click and Escape are disabled in this flow."}),t.jsx(p,{onClick:()=>e(!1),children:"I understand"})]})})]})}const T={render:()=>t.jsx(qe,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=await e.findByRole("dialog",{name:"Security checklist"});await r.keyboard("{Escape}"),await o(n).toBeInTheDocument(),await r.click(e.getByRole("button",{name:"I understand"})),await o(e.queryByRole("dialog",{name:"Security checklist"})).not.toBeInTheDocument()}};function Me(){const[a,e]=s.useState(!0),[n,i]=s.useState(0),[d,y]=s.useState(0);return t.jsx(b,{align:"start",children:t.jsxs("div",{style:Re,children:[t.jsx("button",{type:"button","data-testid":"drawer-guard-outside-target","aria-label":"Drawer guard outside target",style:Ee}),t.jsxs("p",{style:h,children:["Escape guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-escape-calls",style:B,children:n})]}),t.jsxs("p",{style:h,children:["Outside guard calls:"," ",t.jsx("strong",{"data-testid":"drawer-guard-outside-calls",style:B,children:d})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Guarded drawer",onEscapeKeyDown:m=>{m.preventDefault(),i(v=>v+1)},onPointerDownOutside:m=>{m.preventDefault(),y(v=>v+1)},children:t.jsx("p",{style:w,children:"Dismiss hooks can block Escape and outside pointer close paths."})})]})})}const R={render:()=>t.jsx(Me,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=e.getByTestId("drawer-guard-outside-target");await o(await e.findByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1"),await r.click(n),await o(e.getByRole("dialog",{name:"Guarded drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1")}};function Ge(){const[a,e]=s.useState(!0);return t.jsxs(b,{align:"start",children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Reopen Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Primary pointer close affordance",description:"Close button should only show pressed state for primary pointer interactions.",children:t.jsx("p",{style:w,children:"Validate close-button pressed feedback with primary pointer only."})})]})}const E={render:()=>t.jsx(Ge,{}),play:async({canvasElement:a})=>{const n=await l(a.ownerDocument.body).findByRole("button",{name:"Close drawer"});f.mouseDown(n,{button:2}),await o(n.style.transform).toContain("translateY(0"),f.mouseDown(n),f.mouseUp(n),await o(n.style.transform).toContain("translateY(0")}};function Le(){const[a,e]=s.useState(!1),[n,i]=s.useState("none"),[d,y]=s.useState("none");return t.jsx(b,{align:"start",children:t.jsxs("div",{style:Re,children:[t.jsx("button",{type:"button","data-testid":"drawer-outside-target","aria-label":"Drawer outside target",style:Ee}),t.jsxs("p",{style:h,children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"drawer-close-reason",style:B,children:n})]}),t.jsxs("p",{style:h,children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"drawer-close-trace",style:B,children:d})]}),t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Telemetry Drawer"}),t.jsx(u,{open:a,onOpenChange:m=>{e(m),m||y(v=>`${v} -> open:false`)},title:"Close reason telemetry drawer",onCloseReason:m=>{i(m),y(`reason:${m}`)},children:t.jsx("p",{style:w,children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})})}const I={render:()=>t.jsx(Le,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body),i=e.getByTestId("drawer-outside-target");await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("none"),await r.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await r.click(n.getByRole("button",{name:"Close drawer"})),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await r.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await r.click(e.getByRole("button",{name:"Open Telemetry Drawer"})),await o(await n.findByRole("dialog",{name:"Close reason telemetry drawer"})).toBeInTheDocument(),await r.pointer({target:i,keys:"[MouseLeft]"}),await o(e.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer"),await o(e.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function Ae(){const[a,e]=s.useState(!1);return t.jsxs(b,{align:"start",children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Focus Return Drawer"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"Focus return drawer",description:"Closing should restore focus to trigger by default.",children:t.jsx("p",{style:w,children:"Use close button and verify trigger focus restoration."})})]})}const k={render:()=>t.jsx(Ae,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body),i=e.getByRole("button",{name:"Open Focus Return Drawer"});await r.click(i),await o(await n.findByRole("dialog",{name:"Focus return drawer"})).toBeInTheDocument(),await r.click(n.getByRole("button",{name:"Close drawer"})),await o(i).toHaveFocus()}};function Ve(){const[a,e]=s.useState(!0);return t.jsxs(b,{align:"start",children:[t.jsx("button",{type:"button",children:"Outside before drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Focus trap drawer",children:t.jsxs("div",{style:H,children:[t.jsx("p",{style:w,children:"Tab and Shift+Tab should cycle within the drawer."}),t.jsx(p,{children:"Primary drawer action"}),t.jsx(p,{variant:"outline",children:"Secondary drawer action"})]})}),t.jsx("button",{type:"button",children:"Outside after drawer"})]})}const j={render:()=>t.jsx(Ve,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body),n=await e.findByRole("button",{name:"Close drawer"}),i=e.getByRole("button",{name:"Primary drawer action"}),d=e.getByRole("button",{name:"Secondary drawer action"}),y=e.getByRole("button",{name:"Outside after drawer"});n.focus(),await o(n).toHaveFocus(),await r.tab(),await o(i).toHaveFocus(),await r.tab(),await o(d).toHaveFocus(),await r.tab(),await o(n).toHaveFocus(),await o(y).not.toHaveFocus(),await r.tab({shift:!0}),await o(d).toHaveFocus()}};function Ke(){const[a,e]=s.useState(!1);return t.jsxs(b,{align:"start",gap:8,children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open No Focus Return Drawer"}),t.jsx("button",{type:"button",children:"Post-close target"}),t.jsx(u,{open:a,onOpenChange:e,side:"right",title:"No focus return drawer",description:"Closing should not force focus back to the trigger.",restoreFocus:!1,children:t.jsx("p",{style:w,children:"Use this mode when close flow intentionally hands off focus."})})]})}const C={render:()=>t.jsx(Ke,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body),i=e.getByRole("button",{name:"Open No Focus Return Drawer"});await r.click(i),await o(await n.findByRole("dialog",{name:"No focus return drawer"})).toBeInTheDocument(),await r.click(n.getByRole("button",{name:"Close drawer"})),await o(i).not.toHaveFocus()}};function Ue(){const[a,e]=s.useState(!1);return t.jsxs(b,{align:"start",children:[t.jsx(p,{variant:"outline",onClick:()=>e(!0),children:"Open Nested Overlay Drawer"}),t.jsx(u,{open:a,onOpenChange:e,title:"Nested overlay drawer",children:t.jsxs("div",{style:H,children:[t.jsx("p",{style:w,children:"Escape should close dropdown first, then drawer."}),t.jsx(He,{label:"Drawer actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const O={render:()=>t.jsx(Ue,{}),play:async({canvasElement:a})=>{const e=l(a),n=l(a.ownerDocument.body);await r.click(e.getByRole("button",{name:"Open Nested Overlay Drawer"})),await o(await n.findByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await r.click(n.getByRole("button",{name:"Drawer actions"})),await o(n.getByRole("menu",{name:"Drawer actions"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await o(n.queryByRole("menu",{name:"Drawer actions"})).not.toBeInTheDocument(),await o(n.getByRole("dialog",{name:"Nested overlay drawer"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"Nested overlay drawer"})).not.toBeInTheDocument()}};function Ye(){const[a,e]=s.useState(!0);return t.jsx(u,{open:a,onOpenChange:e,title:"IME composition drawer",children:t.jsx("p",{style:w,children:"Escape should be ignored while IME composition is active."})})}const S={render:()=>t.jsx(Ye,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,n=l(e.body);await o(await n.findByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),f.keyDown(e,{key:"Escape",isComposing:!0}),await o(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),f.keyDown(e,{key:"Escape",keyCode:229}),await o(n.getByRole("dialog",{name:"IME composition drawer"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"IME composition drawer"})).not.toBeInTheDocument()}};function ze(){const[a,e]=s.useState(!0),[n,i]=s.useState(0);return s.useEffect(()=>{const d=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",d,!0),()=>{document.removeEventListener("keydown",d,!0)}},[]),t.jsxs(b,{align:"start",children:[t.jsxs("p",{style:h,children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"drawer-escape-calls",style:B,children:n})]}),t.jsx(u,{open:a,onOpenChange:e,title:"Preempted escape drawer",onEscapeKeyDown:()=>i(d=>d+1),children:t.jsx("p",{style:w,children:"Escape should remain preempted by global handlers."})})]})}const F={render:()=>t.jsx(ze,{}),play:async({canvasElement:a})=>{const e=l(a.ownerDocument.body);await o(await e.findByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await r.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Preempted escape drawer"})).toBeInTheDocument(),await o(e.getByTestId("drawer-escape-calls")).toHaveTextContent("0")}};var z,_,$;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <InteractiveDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Release filters"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(body.queryByRole("dialog", {
      name: "Release filters"
    })).not.toBeInTheDocument();
  }
}`,...($=(_=x.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var W,J,Q;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <NonDismissibleDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Security checklist"
    });
    await userEvent.keyboard("{Escape}");
    await expect(dialog).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "I understand"
    }));
    await expect(body.queryByRole("dialog", {
      name: "Security checklist"
    })).not.toBeInTheDocument();
  }
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <DismissGuardDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = body.getByTestId("drawer-guard-outside-target");
    await expect(await body.findByRole("dialog", {
      name: "Guarded drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Guarded drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-guard-escape-calls")).toHaveTextContent("1");
    await userEvent.click(outsideTarget);
    await expect(body.getByRole("dialog", {
      name: "Guarded drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-guard-outside-calls")).toHaveTextContent("1");
  }
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <CloseButtonPrimaryPointerOnlyDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close drawer"
    });
    fireEvent.mouseDown(closeButton, {
      button: 2
    });
    await expect(closeButton.style.transform).toContain("translateY(0");
    fireEvent.mouseDown(closeButton);
    fireEvent.mouseUp(closeButton);
    await expect(closeButton.style.transform).toContain("translateY(0");
  }
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,re,se;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("drawer-outside-target");
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("none");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:close-button -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close reason telemetry drawer"
    })).toBeInTheDocument();
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(canvas.getByTestId("drawer-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("drawer-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
}`,...(se=(re=I.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <FocusReturnDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Open Focus Return Drawer"
    });
    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", {
      name: "Focus return drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(trigger).toHaveFocus();
  }
}`,...(le=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,ye;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <FocusTrapKeyboardCycleDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const closeButton = await body.findByRole("button", {
      name: "Close drawer"
    });
    const primaryAction = body.getByRole("button", {
      name: "Primary drawer action"
    });
    const secondaryAction = body.getByRole("button", {
      name: "Secondary drawer action"
    });
    const outsideAfter = body.getByRole("button", {
      name: "Outside after drawer"
    });
    closeButton.focus();
    await expect(closeButton).toHaveFocus();
    await userEvent.tab();
    await expect(primaryAction).toHaveFocus();
    await userEvent.tab();
    await expect(secondaryAction).toHaveFocus();
    await userEvent.tab();
    await expect(closeButton).toHaveFocus();
    await expect(outsideAfter).not.toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(secondaryAction).toHaveFocus();
  }
}`,...(ye=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var me,pe,we;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <FocusReturnDisabledDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Open No Focus Return Drawer"
    });
    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", {
      name: "No focus return drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close drawer"
    }));
    await expect(trigger).not.toHaveFocus();
  }
}`,...(we=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:we.source}}};var ge,be,ve;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <NestedOverlayDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Nested Overlay Drawer"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Nested overlay drawer"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Drawer actions"
    }));
    await expect(body.getByRole("menu", {
      name: "Drawer actions"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("menu", {
      name: "Drawer actions"
    })).not.toBeInTheDocument();
    await expect(body.getByRole("dialog", {
      name: "Nested overlay drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Nested overlay drawer"
    })).not.toBeInTheDocument();
  }
}`,...(ve=(be=O.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,he,Be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <EscapeImeGuardDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "IME composition drawer"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      isComposing: true
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition drawer"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      keyCode: 229
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "IME composition drawer"
    })).not.toBeInTheDocument();
  }
}`,...(Be=(he=S.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var De,xe,Te;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDrawerDemo />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Preempted escape drawer"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Preempted escape drawer"
    })).toBeInTheDocument();
    await expect(body.getByTestId("drawer-escape-calls")).toHaveTextContent("0");
  }
}`,...(Te=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};const nt=["Interactive","NonDismissible","DismissGuardHooks","CloseButtonPrimaryPointerOnly","CloseReasonTelemetry","FocusReturn","FocusTrapKeyboardCycle","NoFocusReturn","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{E as CloseButtonPrimaryPointerOnly,I as CloseReasonTelemetry,R as DismissGuardHooks,S as EscapeIgnoresImeComposition,F as EscapePreemptedByGlobalHandler,k as FocusReturn,j as FocusTrapKeyboardCycle,x as Interactive,O as NestedDismissOrder,C as NoFocusReturn,T as NonDismissible,nt as __namedExportsOrder,at as default};
