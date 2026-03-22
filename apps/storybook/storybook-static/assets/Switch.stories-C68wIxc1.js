import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as ot}from"./a11y-CU5SQrEA.js";import{B as qe}from"./Badge-ZJmMstsz.js";import{within as h,userEvent as y,expect as o,fireEvent as c,waitFor as ce}from"./index-DgAF9SIF.js";import{S as f}from"./storyShowcase-Bw5VyCj0.js";const d=s.forwardRef(function({checked:r,defaultChecked:t=!1,onCheckedChange:u,disabled:i=!1,invalid:Me,label:x,description:w,style:ze,type:Ne,onClick:D,onFocus:F,onBlur:L,onMouseEnter:P,onMouseLeave:G,onMouseDown:W,onMouseUp:q,onPointerDown:M,onPointerUp:z,onPointerCancel:N,onKeyDown:V,onKeyUp:O,"aria-invalid":Ve,"aria-label":Oe,"aria-labelledby":_e,"aria-keyshortcuts":$e,...Y},g){const[Xe,Je]=s.useState(t),[Qe,_]=s.useState(!1),[Z,k]=s.useState(!1),[Ye,$]=s.useState(!1),[U,l]=s.useState(!1),b=s.useRef(!0),ee=s.useRef(null),te=ot(Me,Ve),S=te!==void 0,ae=s.useId(),re=s.useId(),X=r!==void 0,m=X?r:Xe,J=Q(_e),ne=J?void 0:Q(Oe),Ze=i?void 0:Q($e)??"Space",Ue=[Y["aria-describedby"],w?ae:void 0].filter(Boolean).join(" ")||void 0,et=ne||J||!x?J:re,tt=S?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",at=S?"var(--aurora-color-red-500)":Ye&&!i?"var(--aurora-border-strong)":"var(--aurora-border-default)",rt=i?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":S?m?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":m?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";s.useEffect(()=>{i&&(_(!1),k(!1),$(!1),l(!1))},[i]),s.useEffect(()=>{var ie;const e=((ie=ee.current)==null?void 0:ie.ownerDocument)??document,se=p=>{p.metaKey||p.altKey||p.ctrlKey||(b.current=!0)},v=p=>{"button"in p&&typeof p.button=="number"&&p.button!==0||"ctrlKey"in p&&p.ctrlKey||(b.current=!1)};return e.addEventListener("keydown",se,!0),e.addEventListener("pointerdown",v,!0),e.addEventListener("mousedown",v,!0),e.addEventListener("touchstart",v,!0),()=>{e.removeEventListener("keydown",se,!0),e.removeEventListener("pointerdown",v,!0),e.removeEventListener("mousedown",v,!0),e.removeEventListener("touchstart",v,!0)}},[]);const nt=s.useCallback(e=>{if(ee.current=e,typeof g=="function"){g(e);return}g&&(g.current=e)},[g]),oe=s.useCallback(()=>{if(i)return;const e=!m;X||Je(e),u==null||u(e)},[m,i,X,u]);return n.jsxs("button",{...Y,ref:nt,type:Ne??"button",role:"switch","aria-checked":m,"aria-invalid":te,"aria-disabled":i||void 0,"aria-label":ne,"aria-describedby":Ue,"aria-labelledby":et,"aria-keyshortcuts":Ze,disabled:i,"data-state":m?"checked":"unchecked","data-invalid":S?"true":void 0,"data-pressed":U?"true":void 0,"data-focus-visible":Z?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.72:1,...ze},onClick:e=>{D==null||D(e),!e.defaultPrevented&&oe()},onFocus:e=>{_(!0),k(ct(e.currentTarget,b.current)),F==null||F(e)},onBlur:e=>{_(!1),k(!1),l(!1),L==null||L(e)},onMouseEnter:e=>{i||$(!0),P==null||P(e)},onMouseLeave:e=>{$(!1),l(!1),G==null||G(e)},onMouseDown:e=>{e.button===0&&!e.ctrlKey&&(b.current=!1,k(!1)),!i&&e.button===0&&!e.ctrlKey&&l(!0),W==null||W(e)},onPointerDown:e=>{e.button===0&&!e.ctrlKey&&(b.current=!1,k(!1)),!i&&e.pointerType!=="mouse"&&!e.ctrlKey&&(typeof e.button!="number"||e.button===0)&&l(!0),M==null||M(e)},onPointerUp:e=>{e.pointerType!=="mouse"&&(typeof e.button!="number"||e.button===0)&&l(!1),z==null||z(e)},onPointerCancel:e=>{l(!1),N==null||N(e)},onMouseUp:e=>{e.button===0&&l(!1),q==null||q(e)},onKeyDown:e=>{b.current=!0,V==null||V(e),!(e.defaultPrevented||i)&&le(e.key)&&(it(e)||st(e)||(e.preventDefault(),l(!0),oe()))},onKeyUp:e=>{le(e.key)&&l(!1),O==null||O(e)},children:[n.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${at}`,background:rt,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:Qe&&Z?`0 0 0 3px ${tt}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:n.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${m?20:0}px) scale(${U?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),x||w?n.jsxs("span",{style:{display:"grid",gap:w?2:0,paddingTop:1},children:[x?n.jsx("span",{id:re,children:x}):null,w?n.jsx("span",{id:ae,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:w}):null]}):null]})});function le(a){return a===" "||a==="Space"||a==="Spacebar"}function st(a){return a.ctrlKey||a.metaKey||a.altKey}function it(a){const r=a.nativeEvent;return r.isComposing?!0:typeof r.keyCode=="number"&&r.keyCode===229}function Q(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function ct(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const vt={title:"Form/Switch",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function lt(){const[a,r]=s.useState(!0);return n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),n.jsx(qe,{tone:a?"success":"danger",children:a?"Enabled":"Paused"})]}),n.jsx(d,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:a,onCheckedChange:r})]})}const A={render:()=>n.jsx(lt,{}),play:async({canvasElement:a})=>{const r=h(a),t=r.getByRole("switch",{name:"Live updates"});await y.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(r.getByText("Paused")).toBeInTheDocument()}},E={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(d,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),n.jsx(d,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},C={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(d,{label:"Shortcut metadata switch",description:"Actionable switches should expose Space shortcut hints.",defaultChecked:!1}),n.jsx(d,{label:"Blocked shortcut metadata switch",description:"Disabled switches should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:a})=>{const r=h(a);await o(r.getByRole("switch",{name:"Shortcut metadata switch"})).toHaveAttribute("aria-keyshortcuts","Space"),await o(r.getByRole("switch",{name:"Blocked shortcut metadata switch"})).not.toHaveAttribute("aria-keyshortcuts")}},B={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press and hold Space to toggle with visible pressed feedback."},play:async({canvasElement:a})=>{const t=h(a).getByRole("switch",{name:"Keyboard mode"});t.focus(),c.keyDown(t,{key:" "}),await ce(()=>{o(t).toHaveAttribute("data-pressed","true")}),await o(t).toHaveAttribute("aria-checked","true"),c.keyUp(t,{key:" "}),await ce(()=>{o(t).not.toHaveAttribute("data-pressed")})}},H={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:a})=>{const t=h(a).getByRole("switch",{name:"Modified keyboard mode"});t.focus(),c.keyDown(t,{key:" ",ctrlKey:!0}),c.keyDown(t,{key:"Space",metaKey:!0}),c.keyDown(t,{key:"Spacebar",altKey:!0}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},R={args:{defaultChecked:!1,label:"IME keyboard mode",description:"IME composition keydown should not toggle or trigger keyboard pressed visuals."},play:async({canvasElement:a})=>{const t=h(a).getByRole("switch",{name:"IME keyboard mode"});t.focus(),c.keyDown(t,{key:" ",isComposing:!0,keyCode:229,which:229}),c.keyDown(t,{key:" ",keyCode:229,which:229}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},I={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),n.jsx(d,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const t=h(a).getByRole("switch",{name:"Approval switch heading"});await o(t).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(t).not.toHaveAttribute("aria-label")}};function dt(){const[a,r]=s.useState(!1);return n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(d,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:a,onCheckedChange:r,onClick:t=>{t.preventDefault()}}),n.jsx(qe,{tone:a?"success":"default",children:a?"Enabled":"Blocked"})]})}const j={render:()=>n.jsx(dt,{}),play:async({canvasElement:a})=>{const r=h(a),t=r.getByRole("switch",{name:"Guarded toggle"});await y.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(r.getByText("Blocked")).toBeInTheDocument()}},K={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:a})=>{const t=h(a).getByRole("switch",{name:"Pointer priority"});c.mouseDown(t,{button:0}),await o(t).toHaveAttribute("data-pressed","true"),c.pointerCancel(t),await o(t).not.toHaveAttribute("data-pressed"),c.pointerDown(t,{pointerType:"touch",button:0}),await o(t).toHaveAttribute("data-pressed","true"),c.pointerUp(t,{pointerType:"touch",button:0}),await o(t).not.toHaveAttribute("data-pressed"),await y.pointer([{target:t,keys:"[MouseLeft>]"}]),await o(t).toHaveAttribute("data-pressed","true"),await y.unhover(t),await o(t).not.toHaveAttribute("data-pressed")}},T={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:10,children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),n.jsx("button",{type:"button",children:"Before switch"}),n.jsx(d,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const r=h(a),t=await r.findByRole("button",{name:"Before switch"}),u=r.getByRole("switch",{name:"Focus intent switch"});await y.click(t),await y.tab(),await o(u).toHaveFocus(),await o(u).toHaveAttribute("data-focus-visible","true"),c.mouseDown(u,{button:0,ctrlKey:!0}),await o(u).toHaveAttribute("data-focus-visible","true")}};var de,ue,pe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,ye,me;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(me=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var be,ve,fe;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Shortcut metadata switch" description="Actionable switches should expose Space shortcut hints." defaultChecked={false} />
      <Switch label="Blocked shortcut metadata switch" description="Disabled switches should not advertise keyboard shortcuts." disabled defaultChecked />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("switch", {
      name: "Shortcut metadata switch"
    })).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(canvas.getByRole("switch", {
      name: "Blocked shortcut metadata switch"
    })).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(fe=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var we,ge,ke;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: "Keyboard mode",
    description: "Press and hold Space to toggle with visible pressed feedback."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Keyboard mode"
    });
    control.focus();
    fireEvent.keyDown(control, {
      key: " "
    });
    await waitFor(() => {
      expect(control).toHaveAttribute("data-pressed", "true");
    });
    await expect(control).toHaveAttribute("aria-checked", "true");
    fireEvent.keyUp(control, {
      key: " "
    });
    await waitFor(() => {
      expect(control).not.toHaveAttribute("data-pressed");
    });
  }
}`,...(ke=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var xe,Se,Ae;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
    await expect(control).not.toHaveAttribute("data-pressed");
    await userEvent.keyboard("[Space]");
    await expect(control).toHaveAttribute("aria-checked", "true");
  }
}`,...(Ae=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Ee,Ce,Be;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: "IME keyboard mode",
    description: "IME composition keydown should not toggle or trigger keyboard pressed visuals."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "IME keyboard mode"
    });
    control.focus();
    fireEvent.keyDown(control, {
      key: " ",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    fireEvent.keyDown(control, {
      key: " ",
      keyCode: 229,
      which: 229
    });
    await expect(control).toHaveAttribute("aria-checked", "false");
    await expect(control).not.toHaveAttribute("data-pressed");
    await userEvent.keyboard("[Space]");
    await expect(control).toHaveAttribute("aria-checked", "true");
  }
}`,...(Be=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var He,Re,Ie;I.parameters={...I.parameters,docs:{...(He=I.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var je,Ke,Te;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Te=(Ke=j.parameters)==null?void 0:Ke.docs)==null?void 0:Te.source}}};var De,Fe,Le;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(control, {
      button: 0
    });
    await expect(control).toHaveAttribute("data-pressed", "true");
    fireEvent.pointerCancel(control);
    await expect(control).not.toHaveAttribute("data-pressed");
    fireEvent.pointerDown(control, {
      pointerType: "touch",
      button: 0
    });
    await expect(control).toHaveAttribute("data-pressed", "true");
    fireEvent.pointerUp(control, {
      pointerType: "touch",
      button: 0
    });
    await expect(control).not.toHaveAttribute("data-pressed");
    await userEvent.pointer([{
      target: control,
      keys: "[MouseLeft>]"
    }]);
    await expect(control).toHaveAttribute("data-pressed", "true");
    await userEvent.unhover(control);
    await expect(control).not.toHaveAttribute("data-pressed");
  }
}`,...(Le=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Pe,Ge,We;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(control, {
      button: 0,
      ctrlKey: true
    });
    await expect(control).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(We=(Ge=T.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};const ft=["Controlled","InvalidAndDisabled","ShortcutHintPrecision","KeyboardToggle","KeyboardModifierGuard","ImeCompositionGuard","LabelledByPrecedence","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{j as ClickPreventDefaultGuard,A as Controlled,T as FocusIntentReentry,R as ImeCompositionGuard,E as InvalidAndDisabled,H as KeyboardModifierGuard,B as KeyboardToggle,I as LabelledByPrecedence,K as PointerPrimaryOnly,C as ShortcutHintPrecision,ft as __namedExportsOrder,vt as default};
