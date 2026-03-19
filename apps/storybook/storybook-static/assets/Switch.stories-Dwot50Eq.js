import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{a as ue}from"./a11y-CU5SQrEA.js";import{B as pe}from"./Badge-ZJmMstsz.js";import{within as C,userEvent as x,expect as l}from"./index-DgAF9SIF.js";import{S as Z}from"./storyShowcase-r-xztSD8.js";const u=n.forwardRef(function({checked:o,defaultChecked:r=!1,onCheckedChange:p,disabled:s=!1,invalid:D,label:m,description:c,style:U,type:M,onClick:w,onFocus:k,onBlur:S,onMouseEnter:R,onMouseLeave:j,onMouseDown:I,onMouseUp:P,onKeyDown:A,"aria-invalid":ee,...d},ae){const[re,te]=n.useState(r),[se,T]=n.useState(!1),[oe,E]=n.useState(!1),[H,v]=n.useState(!1),q=ue(D,ee),f=q!==void 0,N=n.useId(),O=n.useId(),B=o!==void 0,i=B?o:re,ne=[d["aria-describedby"],c?N:void 0].filter(Boolean).join(" ")||void 0,ie=d["aria-label"]||d["aria-labelledby"]||!m?d["aria-labelledby"]:O,ce=f?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",de=f?"var(--aurora-color-red-500)":oe&&!s?"var(--aurora-border-strong)":"var(--aurora-border-default)",le=s?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":f?i?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":i?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)",_=n.useCallback(()=>{if(s)return;const e=!i;B||te(e),p==null||p(e)},[i,s,B,p]);return a.jsxs("button",{...d,ref:ae,type:M??"button",role:"switch","aria-checked":i,"aria-invalid":q,"aria-disabled":s||void 0,"aria-describedby":ne,"aria-labelledby":ie,disabled:s,"data-state":i?"checked":"unchecked","data-invalid":f?"true":void 0,"data-pressed":H?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:s?"not-allowed":"pointer",opacity:s?.72:1,...U},onClick:e=>{w==null||w(e),!e.defaultPrevented&&_()},onFocus:e=>{T(!0),k==null||k(e)},onBlur:e=>{T(!1),v(!1),S==null||S(e)},onMouseEnter:e=>{E(!0),R==null||R(e)},onMouseLeave:e=>{E(!1),v(!1),j==null||j(e)},onMouseDown:e=>{!s&&e.button===0&&v(!0),I==null||I(e)},onMouseUp:e=>{e.button===0&&v(!1),P==null||P(e)},onKeyDown:e=>{A==null||A(e),!(e.defaultPrevented||s)&&(e.key===" "||e.key==="Spacebar")&&(e.preventDefault(),_())},children:[a.jsx("span",{"aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${de}`,background:le,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:se?`0 0 0 3px ${ce}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:a.jsx("span",{style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${i?20:0}px) scale(${H?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),m||c?a.jsxs("span",{style:{display:"grid",gap:c?2:0,paddingTop:1},children:[m?a.jsx("span",{id:O,children:m}):null,c?a.jsx("span",{id:N,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:c}):null]}):null]})});u.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const xe={title:"Form/Switch",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function me(){const[t,o]=n.useState(!0);return a.jsxs(Z,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),a.jsx(pe,{tone:t?"success":"danger",children:t?"Enabled":"Paused"})]}),a.jsx(u,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:t,onCheckedChange:o})]})}const y={render:()=>a.jsx(me,{}),play:async({canvasElement:t})=>{const o=C(t),r=o.getByRole("switch",{name:"Live updates"});await x.click(r),await l(r).toHaveAttribute("aria-checked","false"),await l(o.getByText("Paused")).toBeInTheDocument()}},h={render:()=>a.jsxs(Z,{maxWidth:"min(100%, 380px)",gap:12,children:[a.jsx(u,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),a.jsx(u,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},b={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press Space to toggle this switch."},play:async({canvasElement:t})=>{const r=C(t).getByRole("switch",{name:"Keyboard mode"});r.focus(),await x.keyboard("[Space]"),await l(r).toHaveAttribute("aria-checked","true")}},g={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:t})=>{const r=C(t).getByRole("switch",{name:"Pointer priority"});await x.pointer([{target:r,keys:"[MouseLeft>]"}]),await l(r).toHaveAttribute("data-pressed","true"),await x.unhover(r),await l(r).not.toHaveAttribute("data-pressed")}};var $,z,K;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(z=y.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var L,W,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(F=(W=h.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var V,X,G;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(X=b.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,Y;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const we=["Controlled","InvalidAndDisabled","KeyboardToggle","PointerPrimaryOnly"];export{y as Controlled,h as InvalidAndDisabled,b as KeyboardToggle,g as PointerPrimaryOnly,we as __namedExportsOrder,xe as default};
