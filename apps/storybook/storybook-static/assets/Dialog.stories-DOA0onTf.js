import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{B as s}from"./Button-Hgh0jeno.js";import{I as C}from"./Input-DFzLAeTZ.js";import{T as B}from"./Textarea-CSw2lv_O.js";import{D as c}from"./Dialog-Cnf6Xxt0.js";import{within as d,userEvent as l,expect as t}from"./index-DgAF9SIF.js";import"./a11y-H6OEtEva.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-0Dn_Gr2D.js";const z={title:"Overlay/Dialog",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dialog is built on FocusScope + DismissableLayer and supports Escape/outside-pointer dismissal by default."}}},args:{open:!1,title:"Dialog",children:"Dialog content",onOpenChange:()=>{}}};function v(){const[a,n]=p.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Draft Dialog"}),e.jsx(c,{open:a,onOpenChange:n,title:"Create AI Draft",children:e.jsxs("div",{style:{display:"grid",gap:10},children:[e.jsx(C,{placeholder:"Title","aria-label":"Title"}),e.jsx(B,{placeholder:"Describe expected output...","aria-label":"Description"}),e.jsx(s,{children:"Save Draft"})]})})]})}function I(){const[a,n]=p.useState(!0);return e.jsx(c,{open:a,onOpenChange:n,title:"Review Prompt Plan",children:e.jsx("p",{style:{margin:0},children:"Escape and outside pointer interactions should dismiss this dialog."})})}const o={render:()=>e.jsx(v,{}),play:async({canvasElement:a})=>{const n=d(a),m=d(a.ownerDocument.body);await l.click(n.getByRole("button",{name:"Open Draft Dialog"})),await t(await m.findByRole("dialog",{name:"Create AI Draft"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await t(m.queryByRole("dialog",{name:"Create AI Draft"})).not.toBeInTheDocument()}},i={render:()=>e.jsx(I,{})};function j(){const[a,n]=p.useState(!0);return e.jsx(c,{open:a,onOpenChange:n,title:"Critical Confirmation",description:"This dialog requires an explicit action and ignores Escape / outside clicks.",closeOnEscape:!1,closeOnOutsidePointer:!1,size:"lg",children:e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("p",{style:{margin:0},children:"Review the migration plan before confirming release."}),e.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"end"},children:[e.jsx(s,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Confirm"})]})]})})}const r={render:()=>e.jsx(j,{}),play:async({canvasElement:a})=>{const n=d(a.ownerDocument.body);await t(await n.findByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await t(n.getByRole("dialog",{name:"Critical Confirmation"})).toBeInTheDocument(),await l.click(n.getByRole("button",{name:"Cancel"})),await t(n.queryByRole("dialog",{name:"Critical Confirmation"})).not.toBeInTheDocument()}};var u,y,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var D,f,h;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <InitiallyOpenDialog />
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const F=["Interactive","OpenByDefault","NonDismissable"];export{o as Interactive,r as NonDismissable,i as OpenByDefault,F as __namedExportsOrder,z as default};
