import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as rt}from"./a11y-CU5SQrEA.js";import{B as Ge}from"./Badge-ZJmMstsz.js";import{within as d,userEvent as u,expect as o,fireEvent as m,waitFor as se}from"./index-DgAF9SIF.js";import{S as f}from"./storyShowcase-Bw5VyCj0.js";const c=s.forwardRef(function({checked:r,defaultChecked:a=!1,onCheckedChange:p,disabled:i=!1,invalid:We,label:x,description:w,style:qe,type:Me,onClick:K,onFocus:T,onBlur:D,onMouseEnter:L,onMouseLeave:G,onMouseDown:W,onMouseUp:q,onPointerDown:M,onKeyDown:z,onKeyUp:N,"aria-invalid":ze,"aria-label":Ne,"aria-labelledby":Ve,"aria-keyshortcuts":Oe,...J},g){const[_e,$e]=s.useState(a),[Xe,V]=s.useState(!1),[Q,k]=s.useState(!1),[Je,O]=s.useState(!1),[Y,h]=s.useState(!1),v=s.useRef(!0),Z=s.useRef(null),U=rt(We,ze),S=U!==void 0,ee=s.useId(),te=s.useId(),_=r!==void 0,y=_?r:_e,$=X(Ve),ae=$?void 0:X(Ne),Qe=i?void 0:X(Oe)??"Space",Ye=[J["aria-describedby"],w?ee:void 0].filter(Boolean).join(" ")||void 0,Ze=ae||$||!x?$:te,Ue=S?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",et=S?"var(--aurora-color-red-500)":Je&&!i?"var(--aurora-border-strong)":"var(--aurora-border-default)",tt=i?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":S?y?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":y?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";s.useEffect(()=>{i&&(V(!1),k(!1),O(!1),h(!1))},[i]),s.useEffect(()=>{var oe;const e=((oe=Z.current)==null?void 0:oe.ownerDocument)??document,ne=l=>{l.metaKey||l.altKey||l.ctrlKey||(v.current=!0)},b=l=>{"button"in l&&typeof l.button=="number"&&l.button!==0||"ctrlKey"in l&&l.ctrlKey||(v.current=!1)};return e.addEventListener("keydown",ne,!0),e.addEventListener("pointerdown",b,!0),e.addEventListener("mousedown",b,!0),e.addEventListener("touchstart",b,!0),()=>{e.removeEventListener("keydown",ne,!0),e.removeEventListener("pointerdown",b,!0),e.removeEventListener("mousedown",b,!0),e.removeEventListener("touchstart",b,!0)}},[]);const at=s.useCallback(e=>{if(Z.current=e,typeof g=="function"){g(e);return}g&&(g.current=e)},[g]),re=s.useCallback(()=>{if(i)return;const e=!y;_||$e(e),p==null||p(e)},[y,i,_,p]);return n.jsxs("button",{...J,ref:at,type:Me??"button",role:"switch","aria-checked":y,"aria-invalid":U,"aria-disabled":i||void 0,"aria-label":ae,"aria-describedby":Ye,"aria-labelledby":Ze,"aria-keyshortcuts":Qe,disabled:i,"data-state":y?"checked":"unchecked","data-invalid":S?"true":void 0,"data-pressed":Y?"true":void 0,"data-focus-visible":Q?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.72:1,...qe},onClick:e=>{K==null||K(e),!e.defaultPrevented&&re()},onFocus:e=>{V(!0),k(st(e.currentTarget,v.current)),T==null||T(e)},onBlur:e=>{V(!1),k(!1),h(!1),D==null||D(e)},onMouseEnter:e=>{i||O(!0),L==null||L(e)},onMouseLeave:e=>{O(!1),h(!1),G==null||G(e)},onMouseDown:e=>{e.button===0&&(v.current=!1,k(!1)),!i&&e.button===0&&h(!0),W==null||W(e)},onPointerDown:e=>{e.button===0&&(v.current=!1,k(!1)),M==null||M(e)},onMouseUp:e=>{e.button===0&&h(!1),q==null||q(e)},onKeyDown:e=>{v.current=!0,z==null||z(e),!(e.defaultPrevented||i)&&ie(e.key)&&(ot(e)||nt(e)||(e.preventDefault(),h(!0),re()))},onKeyUp:e=>{ie(e.key)&&h(!1),N==null||N(e)},children:[n.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${et}`,background:tt,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:Xe&&Q?`0 0 0 3px ${Ue}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:n.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${y?20:0}px) scale(${Y?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),x||w?n.jsxs("span",{style:{display:"grid",gap:w?2:0,paddingTop:1},children:[x?n.jsx("span",{id:te,children:x}):null,w?n.jsx("span",{id:ee,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:w}):null]}):null]})});function ie(t){return t===" "||t==="Space"||t==="Spacebar"}function nt(t){return t.ctrlKey||t.metaKey||t.altKey}function ot(t){const r=t.nativeEvent;return r.isComposing?!0:typeof r.keyCode=="number"&&r.keyCode===229}function X(t){if(typeof t!="string")return;const r=t.trim();return r.length>0?r:void 0}function st(t,r){try{return t.matches(":focus-visible")||r}catch{return r}}c.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const mt={title:"Form/Switch",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function it(){const[t,r]=s.useState(!0);return n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),n.jsx(Ge,{tone:t?"success":"danger",children:t?"Enabled":"Paused"})]}),n.jsx(c,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:t,onCheckedChange:r})]})}const E={render:()=>n.jsx(it,{}),play:async({canvasElement:t})=>{const r=d(t),a=r.getByRole("switch",{name:"Live updates"});await u.click(a),await o(a).toHaveAttribute("aria-checked","false"),await o(r.getByText("Paused")).toBeInTheDocument()}},A={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(c,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),n.jsx(c,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},C={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(c,{label:"Shortcut metadata switch",description:"Actionable switches should expose Space shortcut hints.",defaultChecked:!1}),n.jsx(c,{label:"Blocked shortcut metadata switch",description:"Disabled switches should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:t})=>{const r=d(t);await o(r.getByRole("switch",{name:"Shortcut metadata switch"})).toHaveAttribute("aria-keyshortcuts","Space"),await o(r.getByRole("switch",{name:"Blocked shortcut metadata switch"})).not.toHaveAttribute("aria-keyshortcuts")}},B={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press and hold Space to toggle with visible pressed feedback."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Keyboard mode"});a.focus(),m.keyDown(a,{key:" "}),await se(()=>{o(a).toHaveAttribute("data-pressed","true")}),await o(a).toHaveAttribute("aria-checked","true"),m.keyUp(a,{key:" "}),await se(()=>{o(a).not.toHaveAttribute("data-pressed")})}},H={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Modified keyboard mode"});a.focus(),m.keyDown(a,{key:" ",ctrlKey:!0}),m.keyDown(a,{key:"Space",metaKey:!0}),m.keyDown(a,{key:"Spacebar",altKey:!0}),await o(a).toHaveAttribute("aria-checked","false"),await o(a).not.toHaveAttribute("data-pressed"),await u.keyboard("[Space]"),await o(a).toHaveAttribute("aria-checked","true")}},R={args:{defaultChecked:!1,label:"IME keyboard mode",description:"IME composition keydown should not toggle or trigger keyboard pressed visuals."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"IME keyboard mode"});a.focus(),m.keyDown(a,{key:" ",isComposing:!0,keyCode:229,which:229}),m.keyDown(a,{key:" ",keyCode:229,which:229}),await o(a).toHaveAttribute("aria-checked","false"),await o(a).not.toHaveAttribute("data-pressed"),await u.keyboard("[Space]"),await o(a).toHaveAttribute("aria-checked","true")}},I={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),n.jsx(c,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Approval switch heading"});await o(a).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(a).not.toHaveAttribute("aria-label")}};function ct(){const[t,r]=s.useState(!1);return n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(c,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:t,onCheckedChange:r,onClick:a=>{a.preventDefault()}}),n.jsx(Ge,{tone:t?"success":"default",children:t?"Enabled":"Blocked"})]})}const j={render:()=>n.jsx(ct,{}),play:async({canvasElement:t})=>{const r=d(t),a=r.getByRole("switch",{name:"Guarded toggle"});await u.click(a),await o(a).toHaveAttribute("aria-checked","false"),await o(r.getByText("Blocked")).toBeInTheDocument()}},F={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Pointer priority"});await u.pointer([{target:a,keys:"[MouseLeft>]"}]),await o(a).toHaveAttribute("data-pressed","true"),await u.unhover(a),await o(a).not.toHaveAttribute("data-pressed")}},P={render:()=>n.jsxs(f,{maxWidth:"min(100%, 380px)",gap:10,children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),n.jsx("button",{type:"button",children:"Before switch"}),n.jsx(c,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:t})=>{const r=d(t),a=await r.findByRole("button",{name:"Before switch"}),p=r.getByRole("switch",{name:"Focus intent switch"});await u.click(a),await u.tab(),await o(p).toHaveFocus(),await o(p).toHaveAttribute("data-focus-visible","true")}};var ce,le,de;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=E.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,pe,he;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(he=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ye,me,ve;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var be,fe,we;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var ge,ke,xe;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var Se,Ee,Ae;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Ee=R.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Ce,Be,He;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(He=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Re,Ie,je;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(je=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Fe,Pe,Ke;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ke=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Ke.source}}};var Te,De,Le;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Le=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};const vt=["Controlled","InvalidAndDisabled","ShortcutHintPrecision","KeyboardToggle","KeyboardModifierGuard","ImeCompositionGuard","LabelledByPrecedence","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{j as ClickPreventDefaultGuard,E as Controlled,P as FocusIntentReentry,R as ImeCompositionGuard,A as InvalidAndDisabled,H as KeyboardModifierGuard,B as KeyboardToggle,I as LabelledByPrecedence,F as PointerPrimaryOnly,C as ShortcutHintPrecision,vt as __namedExportsOrder,mt as default};
