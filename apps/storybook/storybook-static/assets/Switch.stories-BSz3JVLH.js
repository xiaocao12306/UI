import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-BWu4c2F4.js";import{a as ne}from"./a11y-CU5SQrEA.js";import{B as ie}from"./Badge-fH5xjxKG.js";import{within as X,userEvent as G,expect as T}from"./index-DgAF9SIF.js";const l=t.forwardRef(function({checked:o,defaultChecked:n=!1,onCheckedChange:u,disabled:r=!1,invalid:J,label:p,description:d,style:Q,type:W,onClick:y,onFocus:h,onBlur:x,onMouseEnter:w,onMouseLeave:k,onMouseDown:S,onMouseUp:R,onKeyDown:j,"aria-invalid":Y,...c},Z){const[D,F]=t.useState(n),[U,B]=t.useState(!1),[M,C]=t.useState(!1),[ee,f]=t.useState(!1),A=ne(J,Y),v=A!==void 0,E=t.useId(),P=t.useId(),I=o!==void 0,i=I?o:D,ae=[c["aria-describedby"],d?E:void 0].filter(Boolean).join(" ")||void 0,re=c["aria-label"]||c["aria-labelledby"]||!p?c["aria-labelledby"]:P,te=v?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",se=v?"var(--aurora-color-red-500)":M&&!r?"var(--aurora-border-strong)":"var(--aurora-border-default)",oe=r?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":v?i?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":i?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)",q=t.useCallback(()=>{if(r)return;const e=!i;I||F(e),u==null||u(e)},[i,r,I,u]);return a.jsxs("button",{...c,ref:Z,type:W??"button",role:"switch","aria-checked":i,"aria-invalid":A,"aria-disabled":r||void 0,"aria-describedby":ae,"aria-labelledby":re,disabled:r,"data-state":i?"checked":"unchecked","data-invalid":v?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:r?"not-allowed":"pointer",opacity:r?.72:1,...Q},onClick:e=>{y==null||y(e),!e.defaultPrevented&&q()},onFocus:e=>{B(!0),h==null||h(e)},onBlur:e=>{B(!1),f(!1),x==null||x(e)},onMouseEnter:e=>{C(!0),w==null||w(e)},onMouseLeave:e=>{C(!1),f(!1),k==null||k(e)},onMouseDown:e=>{f(!0),S==null||S(e)},onMouseUp:e=>{f(!1),R==null||R(e)},onKeyDown:e=>{j==null||j(e),!(e.defaultPrevented||r)&&(e.key===" "||e.key==="Spacebar")&&(e.preventDefault(),q())},children:[a.jsx("span",{"aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${se}`,background:oe,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:U?`0 0 0 3px ${te}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:a.jsx("span",{style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${i?20:0}px) scale(${ee?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),p||d?a.jsxs("span",{style:{display:"grid",gap:d?2:0,paddingTop:1},children:[p?a.jsx("span",{id:P,children:p}):null,d?a.jsx("span",{id:E,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:d}):null]}):null]})});l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ve={title:"Form/Switch",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function de(){const[s,o]=t.useState(!0);return a.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current state"}),a.jsx(ie,{tone:s?"success":"danger",children:s?"Enabled":"Paused"})]}),a.jsx(l,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:s,onCheckedChange:o})]})}const m={render:()=>a.jsx(de,{}),play:async({canvasElement:s})=>{const o=X(s),n=o.getByRole("switch",{name:"Live updates"});await G.click(n),await T(n).toHaveAttribute("aria-checked","false"),await T(o.getByText("Paused")).toBeInTheDocument()}},b={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[a.jsx(l,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),a.jsx(l,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},g={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press Space to toggle this switch."},play:async({canvasElement:s})=>{const n=X(s).getByRole("switch",{name:"Keyboard mode"});n.focus(),await G.keyboard("[Space]"),await T(n).toHaveAttribute("aria-checked","true")}};var H,N,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var $,z,K;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </div>
}`,...(K=(z=b.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var O,V,L;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(V=g.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const me=["Controlled","InvalidAndDisabled","KeyboardToggle"];export{m as Controlled,b as InvalidAndDisabled,g as KeyboardToggle,me as __namedExportsOrder,ve as default};
