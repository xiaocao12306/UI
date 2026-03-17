import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-BWu4c2F4.js";import{a as oe}from"./a11y-A0m7L4y_.js";import{B as ne}from"./Badge-Dkm8CRgf.js";import{within as L,userEvent as X,expect as T}from"./index-DgAF9SIF.js";const u=t.forwardRef(function({checked:o,defaultChecked:n=!1,onCheckedChange:p,disabled:r=!1,invalid:G,label:f,description:d,style:J,type:Q,onClick:y,onFocus:h,onBlur:x,onMouseEnter:w,onMouseLeave:k,onMouseDown:S,onMouseUp:R,onKeyDown:j,"aria-invalid":W,...c},Y){const[Z,D]=t.useState(n),[F,B]=t.useState(!1),[U,C]=t.useState(!1),[M,v]=t.useState(!1),l=oe(G,W),A=t.useId(),E=t.useId(),I=o!==void 0,i=I?o:Z,ee=[c["aria-describedby"],d?A:void 0].filter(Boolean).join(" ")||void 0,ae=c["aria-label"]||c["aria-labelledby"]||!f?c["aria-labelledby"]:E,re=l?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",te=l?"var(--aurora-color-red-500)":U&&!r?"var(--aurora-border-strong)":"var(--aurora-border-default)",se=r?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":l?i?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":i?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)",P=t.useCallback(()=>{if(r)return;const e=!i;I||D(e),p==null||p(e)},[i,r,I,p]);return a.jsxs("button",{...c,ref:Y,type:Q??"button",role:"switch","aria-checked":i,"aria-invalid":l||void 0,"aria-disabled":r||void 0,"aria-describedby":ee,"aria-labelledby":ae,disabled:r,"data-state":i?"checked":"unchecked","data-invalid":l?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:r?"not-allowed":"pointer",opacity:r?.72:1,...J},onClick:e=>{y==null||y(e),!e.defaultPrevented&&P()},onFocus:e=>{B(!0),h==null||h(e)},onBlur:e=>{B(!1),v(!1),x==null||x(e)},onMouseEnter:e=>{C(!0),w==null||w(e)},onMouseLeave:e=>{C(!1),v(!1),k==null||k(e)},onMouseDown:e=>{v(!0),S==null||S(e)},onMouseUp:e=>{v(!1),R==null||R(e)},onKeyDown:e=>{j==null||j(e),!(e.defaultPrevented||r)&&(e.key===" "||e.key==="Spacebar")&&(e.preventDefault(),P())},children:[a.jsx("span",{"aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${te}`,background:se,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:F?`0 0 0 3px ${re}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:a.jsx("span",{style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${i?20:0}px) scale(${M?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),f||d?a.jsxs("span",{style:{display:"grid",gap:d?2:0,paddingTop:1},children:[f?a.jsx("span",{id:E,children:f}):null,d?a.jsx("span",{id:A,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:d}):null]}):null]})});u.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const fe={title:"Form/Switch",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function ie(){const[s,o]=t.useState(!0);return a.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current state"}),a.jsx(ne,{tone:s?"success":"danger",children:s?"Enabled":"Paused"})]}),a.jsx(u,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:s,onCheckedChange:o})]})}const m={render:()=>a.jsx(ie,{}),play:async({canvasElement:s})=>{const o=L(s),n=o.getByRole("switch",{name:"Live updates"});await X.click(n),await T(n).toHaveAttribute("aria-checked","false"),await T(o.getByText("Paused")).toBeInTheDocument()}},b={render:()=>a.jsxs("div",{style:{width:360,display:"grid",gap:12},children:[a.jsx(u,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),a.jsx(u,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},g={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press Space to toggle this switch."},play:async({canvasElement:s})=>{const n=L(s).getByRole("switch",{name:"Keyboard mode"});n.focus(),await X.keyboard("[Space]"),await T(n).toHaveAttribute("aria-checked","true")}};var q,H,N;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,$,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "grid",
    gap: 12
  }}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </div>
}`,...(z=($=b.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var K,O,V;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const ve=["Controlled","InvalidAndDisabled","KeyboardToggle"];export{m as Controlled,b as InvalidAndDisabled,g as KeyboardToggle,ve as __namedExportsOrder,fe as default};
