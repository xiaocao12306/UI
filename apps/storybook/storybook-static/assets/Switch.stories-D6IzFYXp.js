import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as xe}from"./a11y-CU5SQrEA.js";import{B as oe}from"./Badge-ZJmMstsz.js";import{within as w,userEvent as u,expect as c}from"./index-DgAF9SIF.js";import{S as H}from"./storyShowcase-Bw5VyCj0.js";const d=s.forwardRef(function({checked:n,defaultChecked:t=!1,onCheckedChange:p,disabled:o=!1,invalid:se,label:m,description:l,style:ie,type:ce,onClick:k,onFocus:S,onBlur:C,onMouseEnter:B,onMouseLeave:R,onMouseDown:j,onMouseUp:I,onKeyDown:P,"aria-invalid":de,"aria-label":T,"aria-labelledby":E,...q},le){const[ue,pe]=s.useState(t),[me,G]=s.useState(!1),[ve,D]=s.useState(!1),[N,v]=s.useState(!1),O=xe(se,de),f=O!==void 0,W=s.useId(),_=s.useId(),A=n!==void 0,i=A?n:ue,$=typeof T=="string"&&T.trim().length>0?T.trim():void 0,z=typeof E=="string"&&E.trim().length>0?E.trim():void 0,fe=[q["aria-describedby"],l?W:void 0].filter(Boolean).join(" ")||void 0,he=$||z||!m?z:_,ge=f?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",ye=f?"var(--aurora-color-red-500)":ve&&!o?"var(--aurora-border-strong)":"var(--aurora-border-default)",be=o?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":f?i?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":i?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)",K=s.useCallback(()=>{if(o)return;const e=!i;A||pe(e),p==null||p(e)},[i,o,A,p]);return a.jsxs("button",{...q,ref:le,type:ce??"button",role:"switch","aria-checked":i,"aria-invalid":O,"aria-disabled":o||void 0,"aria-label":$,"aria-describedby":fe,"aria-labelledby":he,disabled:o,"data-state":i?"checked":"unchecked","data-invalid":f?"true":void 0,"data-pressed":N?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:o?"not-allowed":"pointer",opacity:o?.72:1,...ie},onClick:e=>{k==null||k(e),!e.defaultPrevented&&K()},onFocus:e=>{G(!0),S==null||S(e)},onBlur:e=>{G(!1),v(!1),C==null||C(e)},onMouseEnter:e=>{D(!0),B==null||B(e)},onMouseLeave:e=>{D(!1),v(!1),R==null||R(e)},onMouseDown:e=>{!o&&e.button===0&&v(!0),j==null||j(e)},onMouseUp:e=>{e.button===0&&v(!1),I==null||I(e)},onKeyDown:e=>{P==null||P(e),!(e.defaultPrevented||o)&&(e.key===" "||e.key==="Spacebar")&&(e.preventDefault(),K())},children:[a.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${ye}`,background:be,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:me?`0 0 0 3px ${ge}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:a.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${i?20:0}px) scale(${N?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),m||l?a.jsxs("span",{style:{display:"grid",gap:l?2:0,paddingTop:1},children:[m?a.jsx("span",{id:_,children:m}):null,l?a.jsx("span",{id:W,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:l}):null]}):null]})});d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Pe={title:"Form/Switch",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function we(){const[r,n]=s.useState(!0);return a.jsxs(H,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),a.jsx(oe,{tone:r?"success":"danger",children:r?"Enabled":"Paused"})]}),a.jsx(d,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:r,onCheckedChange:n})]})}const h={render:()=>a.jsx(we,{}),play:async({canvasElement:r})=>{const n=w(r),t=n.getByRole("switch",{name:"Live updates"});await u.click(t),await c(t).toHaveAttribute("aria-checked","false"),await c(n.getByText("Paused")).toBeInTheDocument()}},g={render:()=>a.jsxs(H,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsx(d,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),a.jsx(d,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},y={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press Space to toggle this switch."},play:async({canvasElement:r})=>{const t=w(r).getByRole("switch",{name:"Keyboard mode"});t.focus(),await u.keyboard("[Space]"),await c(t).toHaveAttribute("aria-checked","true")}};function ke(){const[r,n]=s.useState(!1);return a.jsxs(H,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsx(d,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:r,onCheckedChange:n,onClick:t=>{t.preventDefault()}}),a.jsx(oe,{tone:r?"success":"default",children:r?"Enabled":"Blocked"})]})}const b={render:()=>a.jsx(ke,{}),play:async({canvasElement:r})=>{const n=w(r),t=n.getByRole("switch",{name:"Guarded toggle"});await u.click(t),await c(t).toHaveAttribute("aria-checked","false"),await c(n.getByText("Blocked")).toBeInTheDocument()}},x={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:r})=>{const t=w(r).getByRole("switch",{name:"Pointer priority"});await u.pointer([{target:t,keys:"[MouseLeft>]"}]),await c(t).toHaveAttribute("data-pressed","true"),await u.unhover(t),await c(t).not.toHaveAttribute("data-pressed")}};var F,V,L;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(V=h.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var X,J,Q;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,U;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(U=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var M,ee,ae;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Te=["Controlled","InvalidAndDisabled","KeyboardToggle","ClickPreventDefaultGuard","PointerPrimaryOnly"];export{b as ClickPreventDefaultGuard,h as Controlled,g as InvalidAndDisabled,y as KeyboardToggle,x as PointerPrimaryOnly,Te as __namedExportsOrder,Pe as default};
