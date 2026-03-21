import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{a as Ie}from"./a11y-CU5SQrEA.js";import{B as ye}from"./Badge-ZJmMstsz.js";import{within as u,userEvent as d,expect as o,fireEvent as D}from"./index-DgAF9SIF.js";import{S as A}from"./storyShowcase-Bw5VyCj0.js";const l=i.forwardRef(function({checked:n,defaultChecked:t=!1,onCheckedChange:m,disabled:s=!1,invalid:he,label:y,description:p,style:ve,type:be,onClick:B,onFocus:C,onBlur:E,onMouseEnter:R,onMouseLeave:j,onMouseDown:P,onMouseUp:I,onKeyDown:H,"aria-invalid":fe,"aria-label":ge,"aria-labelledby":we,...G},xe){const[ke,Se]=i.useState(t),[Ae,L]=i.useState(!1),[Be,q]=i.useState(!1),[F,h]=i.useState(!1),N=Ie(he,fe),v=N!==void 0,W=i.useId(),O=i.useId(),T=n!==void 0,c=T?n:ke,K=V(we),z=K?void 0:V(ge),Ce=[G["aria-describedby"],p?W:void 0].filter(Boolean).join(" ")||void 0,Ee=z||K||!y?K:O,Re=v?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",je=v?"var(--aurora-color-red-500)":Be&&!s?"var(--aurora-border-strong)":"var(--aurora-border-default)",Pe=s?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":v?c?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":c?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)",_=i.useCallback(()=>{if(s)return;const e=!c;T||Se(e),m==null||m(e)},[c,s,T,m]);return r.jsxs("button",{...G,ref:xe,type:be??"button",role:"switch","aria-checked":c,"aria-invalid":N,"aria-disabled":s||void 0,"aria-label":z,"aria-describedby":Ce,"aria-labelledby":Ee,disabled:s,"data-state":c?"checked":"unchecked","data-invalid":v?"true":void 0,"data-pressed":F?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:s?"not-allowed":"pointer",opacity:s?.72:1,...ve},onClick:e=>{B==null||B(e),!e.defaultPrevented&&_()},onFocus:e=>{L(!0),C==null||C(e)},onBlur:e=>{L(!1),h(!1),E==null||E(e)},onMouseEnter:e=>{q(!0),R==null||R(e)},onMouseLeave:e=>{q(!1),h(!1),j==null||j(e)},onMouseDown:e=>{!s&&e.button===0&&h(!0),P==null||P(e)},onMouseUp:e=>{e.button===0&&h(!1),I==null||I(e)},onKeyDown:e=>{H==null||H(e),!(e.defaultPrevented||s)&&((e.ctrlKey||e.metaKey||e.altKey)&&$(e.key)||$(e.key)&&(e.preventDefault(),_()))},children:[r.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${je}`,background:Pe,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:Ae?`0 0 0 3px ${Re}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${c?20:0}px) scale(${F?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),y||p?r.jsxs("span",{style:{display:"grid",gap:p?2:0,paddingTop:1},children:[y?r.jsx("span",{id:O,children:y}):null,p?r.jsx("span",{id:W,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:p}):null]}):null]})});function $(a){return a===" "||a==="Space"||a==="Spacebar"}function V(a){if(typeof a!="string")return;const n=a.trim();return n.length>0?n:void 0}l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ne={title:"Form/Switch",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function He(){const[a,n]=i.useState(!0);return r.jsxs(A,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),r.jsx(ye,{tone:a?"success":"danger",children:a?"Enabled":"Paused"})]}),r.jsx(l,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:a,onCheckedChange:n})]})}const b={render:()=>r.jsx(He,{}),play:async({canvasElement:a})=>{const n=u(a),t=n.getByRole("switch",{name:"Live updates"});await d.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(n.getByText("Paused")).toBeInTheDocument()}},f={render:()=>r.jsxs(A,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(l,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),r.jsx(l,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},g={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press Space to toggle this switch."},play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Keyboard mode"});t.focus(),await d.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},w={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Modified keyboard mode"});t.focus(),D.keyDown(t,{key:" ",ctrlKey:!0}),D.keyDown(t,{key:"Space",metaKey:!0}),D.keyDown(t,{key:"Spacebar",altKey:!0}),await o(t).toHaveAttribute("aria-checked","false"),await d.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},x={render:()=>r.jsxs(A,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),r.jsx(l,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Approval switch heading"});await o(t).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(t).not.toHaveAttribute("aria-label")}};function Te(){const[a,n]=i.useState(!1);return r.jsxs(A,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(l,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:a,onCheckedChange:n,onClick:t=>{t.preventDefault()}}),r.jsx(ye,{tone:a?"success":"default",children:a?"Enabled":"Blocked"})]})}const k={render:()=>r.jsx(Te,{}),play:async({canvasElement:a})=>{const n=u(a),t=n.getByRole("switch",{name:"Guarded toggle"});await d.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(n.getByText("Blocked")).toBeInTheDocument()}},S={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Pointer priority"});await d.pointer([{target:t,keys:"[MouseLeft>]"}]),await o(t).toHaveAttribute("data-pressed","true"),await d.unhover(t),await o(t).not.toHaveAttribute("data-pressed")}};var X,J,M;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <ControlledSwitch />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Live updates"
    });
    await userEvent.click(control);
    await expect(control).toHaveAttribute("aria-checked", "false");
    await expect(canvas.getByText("Paused")).toBeInTheDocument();
  }
}`,...(M=(J=b.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var Q,Y,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var U,ee,ae;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: "Keyboard mode",
    description: "Press Space to toggle this switch."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Keyboard mode"
    });
    control.focus();
    await userEvent.keyboard("[Space]");
    await expect(control).toHaveAttribute("aria-checked", "true");
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: "Modified keyboard mode",
    description: "Ctrl/Meta/Alt + Space should not toggle this switch."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Modified keyboard mode"
    });
    control.focus();
    fireEvent.keyDown(control, {
      key: " ",
      ctrlKey: true
    });
    fireEvent.keyDown(control, {
      key: "Space",
      metaKey: true
    });
    fireEvent.keyDown(control, {
      key: "Spacebar",
      altKey: true
    });
    await expect(control).toHaveAttribute("aria-checked", "false");
    await userEvent.keyboard("[Space]");
    await expect(control).toHaveAttribute("aria-checked", "true");
  }
}`,...(ne=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,se,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <p id="switch-labelledby-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)"
    }}>
        Approval switch heading
      </p>
      <Switch label="Approval gate" description="aria-labelledby should stay canonical when both naming props exist." aria-label="Fallback approval switch name" aria-labelledby="switch-labelledby-heading" defaultChecked={false} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Approval switch heading"
    });
    await expect(control).toHaveAttribute("aria-labelledby", "switch-labelledby-heading");
    await expect(control).not.toHaveAttribute("aria-label");
  }
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,de;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <GuardedClickSwitch />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Guarded toggle"
    });
    await userEvent.click(control);
    await expect(control).toHaveAttribute("aria-checked", "false");
    await expect(canvas.getByText("Blocked")).toBeInTheDocument();
  }
}`,...(de=(le=k.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,pe,me;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: "Pointer priority",
    description: "Primary button press should expose and release pressed visuals."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Pointer priority"
    });
    await userEvent.pointer([{
      target: control,
      keys: "[MouseLeft>]"
    }]);
    await expect(control).toHaveAttribute("data-pressed", "true");
    await userEvent.unhover(control);
    await expect(control).not.toHaveAttribute("data-pressed");
  }
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const We=["Controlled","InvalidAndDisabled","KeyboardToggle","KeyboardModifierGuard","LabelledByPrecedence","ClickPreventDefaultGuard","PointerPrimaryOnly"];export{k as ClickPreventDefaultGuard,b as Controlled,f as InvalidAndDisabled,w as KeyboardModifierGuard,g as KeyboardToggle,x as LabelledByPrecedence,S as PointerPrimaryOnly,We as __namedExportsOrder,Ne as default};
