import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{a as _e}from"./a11y-CU5SQrEA.js";import{B as Re}from"./Badge-ZJmMstsz.js";import{within as m,userEvent as c,expect as i,fireEvent as O}from"./index-DgAF9SIF.js";import{S as w}from"./storyShowcase-Bw5VyCj0.js";const l=o.forwardRef(function({checked:n,defaultChecked:t=!1,onCheckedChange:d,disabled:s=!1,invalid:je,label:x,description:f,style:Ie,type:He,onClick:H,onFocus:K,onBlur:T,onMouseEnter:P,onMouseLeave:F,onMouseDown:L,onMouseUp:D,onPointerDown:G,onKeyDown:W,"aria-invalid":Ke,"aria-label":Te,"aria-labelledby":Pe,..._},v){const[Fe,Le]=o.useState(t),[De,q]=o.useState(!1),[$,b]=o.useState(!1),[Ge,z]=o.useState(!1),[X,g]=o.useState(!1),y=o.useRef(!0),J=o.useRef(null),M=_e(je,Ke),k=M!==void 0,Q=o.useId(),Y=o.useId(),N=n!==void 0,u=N?n:Fe,V=re(Pe),Z=V?void 0:re(Te),We=[_["aria-describedby"],f?Q:void 0].filter(Boolean).join(" ")||void 0,qe=Z||V||!x?V:Y,ze=k?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",Ne=k?"var(--aurora-color-red-500)":Ge&&!s?"var(--aurora-border-strong)":"var(--aurora-border-default)",Ve=s?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":k?u?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":u?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";o.useEffect(()=>{s&&(q(!1),b(!1),z(!1),g(!1))},[s]),o.useEffect(()=>{var ae;const e=((ae=J.current)==null?void 0:ae.ownerDocument)??document,ee=p=>{p.metaKey||p.altKey||p.ctrlKey||(y.current=!0)},h=p=>{"button"in p&&typeof p.button=="number"&&p.button!==0||(y.current=!1)};return e.addEventListener("keydown",ee,!0),e.addEventListener("pointerdown",h,!0),e.addEventListener("mousedown",h,!0),e.addEventListener("touchstart",h,!0),()=>{e.removeEventListener("keydown",ee,!0),e.removeEventListener("pointerdown",h,!0),e.removeEventListener("mousedown",h,!0),e.removeEventListener("touchstart",h,!0)}},[]);const Oe=o.useCallback(e=>{if(J.current=e,typeof v=="function"){v(e);return}v&&(v.current=e)},[v]),U=o.useCallback(()=>{if(s)return;const e=!u;N||Le(e),d==null||d(e)},[u,s,N,d]);return r.jsxs("button",{..._,ref:Oe,type:He??"button",role:"switch","aria-checked":u,"aria-invalid":M,"aria-disabled":s||void 0,"aria-label":Z,"aria-describedby":We,"aria-labelledby":qe,disabled:s,"data-state":u?"checked":"unchecked","data-invalid":k?"true":void 0,"data-pressed":X?"true":void 0,"data-focus-visible":$?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:s?"not-allowed":"pointer",opacity:s?.72:1,...Ie},onClick:e=>{H==null||H(e),!e.defaultPrevented&&U()},onFocus:e=>{q(!0),b($e(e.currentTarget,y.current)),K==null||K(e)},onBlur:e=>{q(!1),b(!1),g(!1),T==null||T(e)},onMouseEnter:e=>{s||z(!0),P==null||P(e)},onMouseLeave:e=>{z(!1),g(!1),F==null||F(e)},onMouseDown:e=>{e.button===0&&(y.current=!1,b(!1)),!s&&e.button===0&&g(!0),L==null||L(e)},onPointerDown:e=>{e.button===0&&(y.current=!1,b(!1)),G==null||G(e)},onMouseUp:e=>{e.button===0&&g(!1),D==null||D(e)},onKeyDown:e=>{y.current=!0,W==null||W(e),!(e.defaultPrevented||s)&&((e.ctrlKey||e.metaKey||e.altKey)&&te(e.key)||te(e.key)&&(e.preventDefault(),U()))},children:[r.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${Ne}`,background:Ve,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:De&&$?`0 0 0 3px ${ze}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${u?20:0}px) scale(${X?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),x||f?r.jsxs("span",{style:{display:"grid",gap:f?2:0,paddingTop:1},children:[x?r.jsx("span",{id:Y,children:x}):null,f?r.jsx("span",{id:Q,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:f}):null]}):null]})});function te(a){return a===" "||a==="Space"||a==="Spacebar"}function re(a){if(typeof a!="string")return;const n=a.trim();return n.length>0?n:void 0}function $e(a,n){try{return a.matches(":focus-visible")||n}catch{return n}}l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const aa={title:"Form/Switch",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function Xe(){const[a,n]=o.useState(!0);return r.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),r.jsx(Re,{tone:a?"success":"danger",children:a?"Enabled":"Paused"})]}),r.jsx(l,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:a,onCheckedChange:n})]})}const S={render:()=>r.jsx(Xe,{}),play:async({canvasElement:a})=>{const n=m(a),t=n.getByRole("switch",{name:"Live updates"});await c.click(t),await i(t).toHaveAttribute("aria-checked","false"),await i(n.getByText("Paused")).toBeInTheDocument()}},B={render:()=>r.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(l,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),r.jsx(l,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},E={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press Space to toggle this switch."},play:async({canvasElement:a})=>{const t=m(a).getByRole("switch",{name:"Keyboard mode"});t.focus(),await c.keyboard("[Space]"),await i(t).toHaveAttribute("aria-checked","true")}},A={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:a})=>{const t=m(a).getByRole("switch",{name:"Modified keyboard mode"});t.focus(),O.keyDown(t,{key:" ",ctrlKey:!0}),O.keyDown(t,{key:"Space",metaKey:!0}),O.keyDown(t,{key:"Spacebar",altKey:!0}),await i(t).toHaveAttribute("aria-checked","false"),await c.keyboard("[Space]"),await i(t).toHaveAttribute("aria-checked","true")}},C={render:()=>r.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),r.jsx(l,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const t=m(a).getByRole("switch",{name:"Approval switch heading"});await i(t).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await i(t).not.toHaveAttribute("aria-label")}};function Je(){const[a,n]=o.useState(!1);return r.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(l,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:a,onCheckedChange:n,onClick:t=>{t.preventDefault()}}),r.jsx(Re,{tone:a?"success":"default",children:a?"Enabled":"Blocked"})]})}const R={render:()=>r.jsx(Je,{}),play:async({canvasElement:a})=>{const n=m(a),t=n.getByRole("switch",{name:"Guarded toggle"});await c.click(t),await i(t).toHaveAttribute("aria-checked","false"),await i(n.getByText("Blocked")).toBeInTheDocument()}},j={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:a})=>{const t=m(a).getByRole("switch",{name:"Pointer priority"});await c.pointer([{target:t,keys:"[MouseLeft>]"}]),await i(t).toHaveAttribute("data-pressed","true"),await c.unhover(t),await i(t).not.toHaveAttribute("data-pressed")}},I={render:()=>r.jsxs(w,{maxWidth:"min(100%, 380px)",gap:10,children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),r.jsx("button",{type:"button",children:"Before switch"}),r.jsx(l,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const n=m(a),t=await n.findByRole("button",{name:"Before switch"}),d=n.getByRole("switch",{name:"Focus intent switch"});await c.click(t),await c.tab(),await i(d).toHaveFocus(),await i(d).toHaveAttribute("data-focus-visible","true")}};var ne,oe,se;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,le;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(le=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ye,he;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var fe,ve,be;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,we,xe;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(we=R.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ke,Se,Be;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Ee,Ae,Ce;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={10}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores switch
        focus-visible state.
      </p>
      <button type="button">Before switch</button>
      <Switch label="Focus intent switch" description="Keyboard re-entry should restore focus ring semantics." defaultChecked={false} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before switch"
    });
    const control = canvas.getByRole("switch", {
      name: "Focus intent switch"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(control).toHaveFocus();
    await expect(control).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(Ce=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};const ta=["Controlled","InvalidAndDisabled","KeyboardToggle","KeyboardModifierGuard","LabelledByPrecedence","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{R as ClickPreventDefaultGuard,S as Controlled,I as FocusIntentReentry,B as InvalidAndDisabled,A as KeyboardModifierGuard,E as KeyboardToggle,C as LabelledByPrecedence,j as PointerPrimaryOnly,ta as __namedExportsOrder,aa as default};
