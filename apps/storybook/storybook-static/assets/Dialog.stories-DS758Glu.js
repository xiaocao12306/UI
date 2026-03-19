import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as d}from"./Button-DeQ1OHWt.js";import{I as U}from"./Input-B0g8SV4q.js";import{T as V}from"./Textarea-C2HCxZDO.js";import{D as l}from"./Dialog-CFqGnmxp.js";import{D as W}from"./Dropdown-DTLCHkM1.js";import{within as r,expect as n,userEvent as s,fireEvent as x}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";const Be={title:"Overlay/Dialog",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function X(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(d,{onClick:()=>e(!0),children:"Open Draft Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Create AI Draft",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx(U,{placeholder:"Title","aria-label":"Title"}),t.jsx(V,{placeholder:"Describe expected output...","aria-label":"Description"}),t.jsx(d,{children:"Save Draft"})]})})]})}function Y(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Review Prompt Plan",children:t.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const g={render:()=>t.jsx(X,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Draft Dialog"})),await n(await o.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}};function Z(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(d,{onClick:()=>e(!0),children:"Open Focus Return Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Focus Return",children:t.jsx("p",{style:{margin:0},children:"Close this dialog and focus should return to the trigger button."})})]})}const u={render:()=>t.jsx(Z,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body),c=e.getByRole("button",{name:"Open Focus Return Dialog"});await s.click(c),await n(await o.findByRole("dialog",{name:"Focus Return"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Close dialog"})),await n(c).toHaveFocus()}},w={render:()=>t.jsx(Y,{})};function ee(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),t.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[t.jsx(d,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),t.jsx(d,{onClick:()=>e(!1),children:"Confirm"})]})]})})}const D={render:()=>t.jsx(ee,{}),play:async({canvasElement:a})=>{const e=r(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await s.click(e.getByRole("button",{name:"Cancel"})),await n(e.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};function te(){const[a,e]=i.useState(!1),[o,c]=i.useState("none"),[p,y]=i.useState("none");return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx("button",{type:"button","data-testid":"dialog-outside-target","aria-label":"Dialog outside target",style:{position:"absolute",left:0,top:0,width:1,height:1,opacity:0}}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",t.jsx("strong",{"data-testid":"dialog-close-reason",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close trace:"," ",t.jsx("strong",{"data-testid":"dialog-close-trace",style:{color:"var(--aurora-text-primary)"},children:p})]}),t.jsx(d,{onClick:()=>e(!0),children:"Open Telemetry Dialog"}),t.jsx(l,{open:a,onOpenChange:m=>{e(m),m||y(Q=>`${Q} -> open:false`)},title:"Close Reason Telemetry",onCloseReason:m=>{c(m),y(`reason:${m}`)},children:t.jsx("p",{style:{margin:0},children:"Track close-button, Escape, and outside-pointer dismiss reasons."})})]})}const B={render:()=>t.jsx(te,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body),c=e.getByTestId("dialog-outside-target");await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("none"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await s.click(e.getByRole("button",{name:"Open Telemetry Dialog"})),await n(await o.findByRole("dialog",{name:"Close Reason Telemetry"})).toBeInTheDocument(),await s.pointer({target:c,keys:"[MouseLeft]"}),await n(e.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false")}};function ae(){const[a,e]=i.useState(!1);return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(d,{onClick:()=>e(!0),children:"Open Nested Overlay Dialog"}),t.jsx(l,{open:a,onOpenChange:e,title:"Nested Overlay Dialog",children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx("p",{style:{margin:0},children:"Escape should close dropdown first, then dialog."}),t.jsx(W,{label:"Dialog actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})})]})}const v={render:()=>t.jsx(ae,{}),play:async({canvasElement:a})=>{const e=r(a),o=r(a.ownerDocument.body);await s.click(e.getByRole("button",{name:"Open Nested Overlay Dialog"})),await n(await o.findByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.click(o.getByRole("button",{name:"Dialog actions"})),await n(o.getByRole("menu",{name:"Dialog actions"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("menu",{name:"Dialog actions"})).not.toBeInTheDocument(),await n(o.getByRole("dialog",{name:"Nested Overlay Dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"Nested Overlay Dialog"})).not.toBeInTheDocument()}};function ne(){const[a,e]=i.useState(!0);return t.jsx(l,{open:a,onOpenChange:e,title:"IME composition dialog",children:t.jsx("p",{style:{margin:0},children:"Escape should be ignored while IME composition is active."})})}const h={render:()=>t.jsx(ne,{}),play:async({canvasElement:a})=>{const e=a.ownerDocument,o=r(e.body);await n(await o.findByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),x.keyDown(e,{key:"Escape",isComposing:!0}),await n(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),x.keyDown(e,{key:"Escape",keyCode:229}),await n(o.getByRole("dialog",{name:"IME composition dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(o.queryByRole("dialog",{name:"IME composition dialog"})).not.toBeInTheDocument()}};function oe(){const[a,e]=i.useState(!0),[o,c]=i.useState(0);return i.useEffect(()=>{const p=y=>{y.key==="Escape"&&y.preventDefault()};return document.addEventListener("keydown",p,!0),()=>{document.removeEventListener("keydown",p,!0)}},[]),t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"dialog-escape-calls",style:{color:"var(--aurora-text-primary)"},children:o})]}),t.jsx(l,{open:a,onOpenChange:e,title:"Preempted escape dialog",onEscapeKeyDown:()=>c(p=>p+1),children:t.jsx("p",{style:{margin:0},children:"Escape should remain preempted by global handlers."})})]})}const b={render:()=>t.jsx(oe,{}),play:async({canvasElement:a})=>{const e=r(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Preempted escape dialog"})).toBeInTheDocument(),await n(e.getByTestId("dialog-escape-calls")).toHaveTextContent("0")}};var T,E,f;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <InteractiveDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Draft Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Create AI Draft"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Create AI Draft"
    })).not.toBeInTheDocument();
  }
}`,...(f=(E=g.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var I,R,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <FocusReturnDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole("button", {
      name: "Open Focus Return Dialog"
    });
    await userEvent.click(trigger);
    await expect(await body.findByRole("dialog", {
      name: "Focus Return"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close dialog"
    }));
    await expect(trigger).toHaveFocus();
  }
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var k,O,j;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(j=(O=w.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var H,S,N;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <NonDismissableDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Critical Confirmation"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Critical Confirmation"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Cancel"
    }));
    await expect(body.queryByRole("dialog", {
      name: "Critical Confirmation"
    })).not.toBeInTheDocument();
  }
}`,...(N=(S=D.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var F,M,P;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const outsideTarget = canvas.getByTestId("dialog-outside-target");
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("none");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Close dialog"
    }));
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:close-button -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Telemetry Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Close Reason Telemetry"
    })).toBeInTheDocument();
    await userEvent.pointer({
      target: outsideTarget,
      keys: "[MouseLeft]"
    });
    await expect(canvas.getByTestId("dialog-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("dialog-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
  }
}`,...(P=(M=B.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var q,L,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <NestedOverlayDialog />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open Nested Overlay Dialog"
    }));
    await expect(await body.findByRole("dialog", {
      name: "Nested Overlay Dialog"
    })).toBeInTheDocument();
    await userEvent.click(body.getByRole("button", {
      name: "Dialog actions"
    }));
    await expect(body.getByRole("menu", {
      name: "Dialog actions"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("menu", {
      name: "Dialog actions"
    })).not.toBeInTheDocument();
    await expect(body.getByRole("dialog", {
      name: "Nested Overlay Dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "Nested Overlay Dialog"
    })).not.toBeInTheDocument();
  }
}`,...(A=(L=v.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var G,_,$;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <EscapeImeGuardDialog />,
  play: async ({
    canvasElement
  }) => {
    const ownerDocument = canvasElement.ownerDocument;
    const body = within(ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "IME composition dialog"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      isComposing: true
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition dialog"
    })).toBeInTheDocument();
    fireEvent.keyDown(ownerDocument, {
      key: "Escape",
      keyCode: 229
    });
    await expect(body.getByRole("dialog", {
      name: "IME composition dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.queryByRole("dialog", {
      name: "IME composition dialog"
    })).not.toBeInTheDocument();
  }
}`,...($=(_=h.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,K,J;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDialog />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByRole("dialog", {
      name: "Preempted escape dialog"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(body.getByRole("dialog", {
      name: "Preempted escape dialog"
    })).toBeInTheDocument();
    await expect(body.getByTestId("dialog-escape-calls")).toHaveTextContent("0");
  }
}`,...(J=(K=b.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const ve=["Interactive","FocusReturn","OpenByDefault","NonDismissable","CloseReasonTelemetry","NestedDismissOrder","EscapeIgnoresImeComposition","EscapePreemptedByGlobalHandler"];export{B as CloseReasonTelemetry,h as EscapeIgnoresImeComposition,b as EscapePreemptedByGlobalHandler,u as FocusReturn,g as Interactive,v as NestedDismissOrder,D as NonDismissable,w as OpenByDefault,ve as __namedExportsOrder,Be as default};
