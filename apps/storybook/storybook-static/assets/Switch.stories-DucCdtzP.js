import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as he}from"./a11y-CU5SQrEA.js";import{B as ae}from"./Badge-ZJmMstsz.js";import{within as k,userEvent as p,expect as c}from"./index-DgAF9SIF.js";import{S as E}from"./storyShowcase-CGhlt2ZW.js";const d=s.forwardRef(function({checked:n,defaultChecked:t=!1,onCheckedChange:m,disabled:o=!1,invalid:te,label:v,description:l,style:re,type:ne,onClick:S,onFocus:B,onBlur:C,onMouseEnter:R,onMouseLeave:j,onMouseDown:I,onMouseUp:P,onKeyDown:T,"aria-invalid":oe,...u},se){const[ie,ce]=s.useState(t),[de,H]=s.useState(!1),[le,q]=s.useState(!1),[G,f]=s.useState(!1),D=he(te,oe),h=D!==void 0,N=s.useId(),O=s.useId(),A=n!==void 0,i=A?n:ie,ue=[u["aria-describedby"],l?N:void 0].filter(Boolean).join(" ")||void 0,pe=u["aria-label"]||u["aria-labelledby"]||!v?u["aria-labelledby"]:O,me=h?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",ve=h?"var(--aurora-color-red-500)":le&&!o?"var(--aurora-border-strong)":"var(--aurora-border-default)",fe=o?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":h?i?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":i?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)",W=s.useCallback(()=>{if(o)return;const e=!i;A||ce(e),m==null||m(e)},[i,o,A,m]);return a.jsxs("button",{...u,ref:se,type:ne??"button",role:"switch","aria-checked":i,"aria-invalid":D,"aria-disabled":o||void 0,"aria-describedby":ue,"aria-labelledby":pe,disabled:o,"data-state":i?"checked":"unchecked","data-invalid":h?"true":void 0,"data-pressed":G?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:o?"not-allowed":"pointer",opacity:o?.72:1,...re},onClick:e=>{S==null||S(e),!e.defaultPrevented&&W()},onFocus:e=>{H(!0),B==null||B(e)},onBlur:e=>{H(!1),f(!1),C==null||C(e)},onMouseEnter:e=>{q(!0),R==null||R(e)},onMouseLeave:e=>{q(!1),f(!1),j==null||j(e)},onMouseDown:e=>{!o&&e.button===0&&f(!0),I==null||I(e)},onMouseUp:e=>{e.button===0&&f(!1),P==null||P(e)},onKeyDown:e=>{T==null||T(e),!(e.defaultPrevented||o)&&(e.key===" "||e.key==="Spacebar")&&(e.preventDefault(),W())},children:[a.jsx("span",{"aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${ve}`,background:fe,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:de?`0 0 0 3px ${me}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:a.jsx("span",{style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${i?20:0}px) scale(${G?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),v||l?a.jsxs("span",{style:{display:"grid",gap:l?2:0,paddingTop:1},children:[v?a.jsx("span",{id:O,children:v}):null,l?a.jsx("span",{id:N,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:l}):null]}):null]})});d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ce={title:"Form/Switch",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function ye(){const[r,n]=s.useState(!0);return a.jsxs(E,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),a.jsx(ae,{tone:r?"success":"danger",children:r?"Enabled":"Paused"})]}),a.jsx(d,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:r,onCheckedChange:n})]})}const y={render:()=>a.jsx(ye,{}),play:async({canvasElement:r})=>{const n=k(r),t=n.getByRole("switch",{name:"Live updates"});await p.click(t),await c(t).toHaveAttribute("aria-checked","false"),await c(n.getByText("Paused")).toBeInTheDocument()}},g={render:()=>a.jsxs(E,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsx(d,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),a.jsx(d,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},b={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press Space to toggle this switch."},play:async({canvasElement:r})=>{const t=k(r).getByRole("switch",{name:"Keyboard mode"});t.focus(),await p.keyboard("[Space]"),await c(t).toHaveAttribute("aria-checked","true")}};function ge(){const[r,n]=s.useState(!1);return a.jsxs(E,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsx(d,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:r,onCheckedChange:n,onClick:t=>{t.preventDefault()}}),a.jsx(ae,{tone:r?"success":"default",children:r?"Enabled":"Blocked"})]})}const x={render:()=>a.jsx(ge,{}),play:async({canvasElement:r})=>{const n=k(r),t=n.getByRole("switch",{name:"Guarded toggle"});await p.click(t),await c(t).toHaveAttribute("aria-checked","false"),await c(n.getByText("Blocked")).toBeInTheDocument()}},w={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:r})=>{const t=k(r).getByRole("switch",{name:"Pointer priority"});await p.pointer([{target:t,keys:"[MouseLeft>]"}]),await c(t).toHaveAttribute("data-pressed","true"),await p.unhover(t),await c(t).not.toHaveAttribute("data-pressed")}};var _,$,z;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=($=y.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var K,L,F;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var V,X,J;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(X=b.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var U,M,ee;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(ee=(M=w.parameters)==null?void 0:M.docs)==null?void 0:ee.source}}};const Re=["Controlled","InvalidAndDisabled","KeyboardToggle","ClickPreventDefaultGuard","PointerPrimaryOnly"];export{x as ClickPreventDefaultGuard,y as Controlled,g as InvalidAndDisabled,b as KeyboardToggle,w as PointerPrimaryOnly,Re as __namedExportsOrder,Ce as default};
