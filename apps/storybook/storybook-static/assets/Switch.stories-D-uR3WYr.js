import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as st}from"./a11y-CU5SQrEA.js";import{B as Me}from"./Badge-ZJmMstsz.js";import{within as p,userEvent as y,expect as o,fireEvent as l,waitFor as f}from"./index-DgAF9SIF.js";import{S as w}from"./storyShowcase-Bw5VyCj0.js";const d=s.forwardRef(function({checked:r,defaultChecked:t=!1,onCheckedChange:u,disabled:i=!1,invalid:ze,label:S,description:g,style:Ne,type:Ve,onClick:D,onFocus:P,onBlur:L,onMouseEnter:G,onMouseLeave:W,onMouseDown:q,onMouseUp:M,onPointerDown:z,onPointerUp:N,onPointerCancel:V,onKeyDown:O,onKeyUp:_,"aria-invalid":Oe,"aria-label":_e,"aria-labelledby":$e,"aria-keyshortcuts":Xe,...U},k){const[Je,Qe]=s.useState(t),[Ye,$]=s.useState(!1),[ee,x]=s.useState(!1),[Ze,X]=s.useState(!1),[te,c]=s.useState(!1),m=s.useRef(!0),ae=s.useRef(null),re=st(ze,Oe),E=re!==void 0,ne=s.useId(),oe=s.useId(),J=r!==void 0,b=J?r:Je,Q=Y($e),se=Q?void 0:Y(_e),Ue=i?void 0:Y(Xe)??"Space",et=[U["aria-describedby"],g?ne:void 0].filter(Boolean).join(" ")||void 0,tt=se||Q||!S?Q:oe,at=E?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",rt=E?"var(--aurora-color-red-500)":Ze&&!i?"var(--aurora-border-strong)":"var(--aurora-border-default)",nt=i?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":E?b?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":b?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";s.useEffect(()=>{i&&($(!1),x(!1),X(!1),c(!1))},[i]),s.useEffect(()=>{var le;const e=((le=ae.current)==null?void 0:le.ownerDocument)??document,ce=h=>{h.metaKey||h.altKey||h.ctrlKey||(m.current=!0)},v=h=>{"button"in h&&!Z(h.button)||"ctrlKey"in h&&h.ctrlKey||(m.current=!1)};return e.addEventListener("keydown",ce,!0),e.addEventListener("pointerdown",v,!0),e.addEventListener("mousedown",v,!0),e.addEventListener("touchstart",v,!0),()=>{e.removeEventListener("keydown",ce,!0),e.removeEventListener("pointerdown",v,!0),e.removeEventListener("mousedown",v,!0),e.removeEventListener("touchstart",v,!0)}},[]);const ot=s.useCallback(e=>{if(ae.current=e,typeof k=="function"){k(e);return}k&&(k.current=e)},[k]),ie=s.useCallback(()=>{if(i)return;const e=!b;J||Qe(e),u==null||u(e)},[b,i,J,u]);return n.jsxs("button",{...U,ref:ot,type:Ve??"button",role:"switch","aria-checked":b,"aria-invalid":re,"aria-disabled":i||void 0,"aria-label":se,"aria-describedby":et,"aria-labelledby":tt,"aria-keyshortcuts":Ue,disabled:i,"data-state":b?"checked":"unchecked","data-invalid":E?"true":void 0,"data-pressed":te?"true":void 0,"data-focus-visible":ee?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.72:1,...Ne},onClick:e=>{D==null||D(e),!e.defaultPrevented&&ie()},onFocus:e=>{$(!0),x(lt(e.currentTarget,m.current)),P==null||P(e)},onBlur:e=>{$(!1),x(!1),c(!1),L==null||L(e)},onMouseEnter:e=>{i||X(!0),G==null||G(e)},onMouseLeave:e=>{X(!1),c(!1),W==null||W(e)},onMouseDown:e=>{e.button===0&&!e.ctrlKey&&(m.current=!1,x(!1)),!i&&e.button===0&&!e.ctrlKey&&c(!0),q==null||q(e)},onPointerDown:e=>{e.button===0&&!e.ctrlKey&&(m.current=!1,x(!1)),!i&&!e.ctrlKey&&Z(e.button)&&c(!0),z==null||z(e)},onPointerUp:e=>{Z(e.button)&&c(!1),N==null||N(e)},onPointerCancel:e=>{c(!1),V==null||V(e)},onMouseUp:e=>{e.button===0&&c(!1),M==null||M(e)},onKeyDown:e=>{m.current=!0,O==null||O(e),!(e.defaultPrevented||i)&&de(e.key)&&(ct(e)||it(e)||(e.preventDefault(),c(!0),ie()))},onKeyUp:e=>{de(e.key)&&c(!1),_==null||_(e)},children:[n.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${rt}`,background:nt,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:Ye&&ee?`0 0 0 3px ${at}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:n.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${b?20:0}px) scale(${te?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),S||g?n.jsxs("span",{style:{display:"grid",gap:g?2:0,paddingTop:1},children:[S?n.jsx("span",{id:oe,children:S}):null,g?n.jsx("span",{id:ne,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:g}):null]}):null]})});function de(a){return a===" "||a==="Space"||a==="Spacebar"}function it(a){return a.ctrlKey||a.metaKey||a.altKey}function ct(a){const r=a.nativeEvent;return r.isComposing?!0:typeof r.keyCode=="number"&&r.keyCode===229}function Y(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function Z(a){return typeof a!="number"||a<=0}function lt(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ft={title:"Form/Switch",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function dt(){const[a,r]=s.useState(!0);return n.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),n.jsx(Me,{tone:a?"success":"danger",children:a?"Enabled":"Paused"})]}),n.jsx(d,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:a,onCheckedChange:r})]})}const A={render:()=>n.jsx(dt,{}),play:async({canvasElement:a})=>{const r=p(a),t=r.getByRole("switch",{name:"Live updates"});await y.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(r.getByText("Paused")).toBeInTheDocument()}},B={render:()=>n.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(d,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),n.jsx(d,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},C={render:()=>n.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(d,{label:"Shortcut metadata switch",description:"Actionable switches should expose Space shortcut hints.",defaultChecked:!1}),n.jsx(d,{label:"Blocked shortcut metadata switch",description:"Disabled switches should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:a})=>{const r=p(a);await o(r.getByRole("switch",{name:"Shortcut metadata switch"})).toHaveAttribute("aria-keyshortcuts","Space"),await o(r.getByRole("switch",{name:"Blocked shortcut metadata switch"})).not.toHaveAttribute("aria-keyshortcuts")}},H={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press and hold Space to toggle with visible pressed feedback."},play:async({canvasElement:a})=>{const t=p(a).getByRole("switch",{name:"Keyboard mode"});t.focus(),l.keyDown(t,{key:" "}),await f(()=>{o(t).toHaveAttribute("data-pressed","true")}),await o(t).toHaveAttribute("aria-checked","true"),l.keyUp(t,{key:" "}),await f(()=>{o(t).not.toHaveAttribute("data-pressed")})}},R={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:a})=>{const t=p(a).getByRole("switch",{name:"Modified keyboard mode"});t.focus(),l.keyDown(t,{key:" ",ctrlKey:!0}),l.keyDown(t,{key:"Space",metaKey:!0}),l.keyDown(t,{key:"Spacebar",altKey:!0}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},I={args:{defaultChecked:!1,label:"IME keyboard mode",description:"IME composition keydown should not toggle or trigger keyboard pressed visuals."},play:async({canvasElement:a})=>{const t=p(a).getByRole("switch",{name:"IME keyboard mode"});t.focus(),l.keyDown(t,{key:" ",isComposing:!0,keyCode:229,which:229}),l.keyDown(t,{key:" ",keyCode:229,which:229}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},j={render:()=>n.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),n.jsx(d,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const t=p(a).getByRole("switch",{name:"Approval switch heading"});await o(t).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(t).not.toHaveAttribute("aria-label")}};function ut(){const[a,r]=s.useState(!1);return n.jsxs(w,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(d,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:a,onCheckedChange:r,onClick:t=>{t.preventDefault()}}),n.jsx(Me,{tone:a?"success":"default",children:a?"Enabled":"Blocked"})]})}const F={render:()=>n.jsx(ut,{}),play:async({canvasElement:a})=>{const r=p(a),t=r.getByRole("switch",{name:"Guarded toggle"});await y.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(r.getByText("Blocked")).toBeInTheDocument()}},K={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:a})=>{const t=p(a).getByRole("switch",{name:"Pointer priority"});l.mouseDown(t,{button:0}),await f(()=>{o(t).toHaveAttribute("data-pressed","true")}),l.pointerCancel(t),await f(()=>{o(t).not.toHaveAttribute("data-pressed")}),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await f(()=>{o(t).toHaveAttribute("data-pressed","true")}),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await f(()=>{o(t).not.toHaveAttribute("data-pressed")}),await y.pointer([{target:t,keys:"[MouseLeft>]"}]),await o(t).toHaveAttribute("data-pressed","true"),await y.unhover(t),await o(t).not.toHaveAttribute("data-pressed")}},T={render:()=>n.jsxs(w,{maxWidth:"min(100%, 380px)",gap:10,children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),n.jsx("button",{type:"button",children:"Before switch"}),n.jsx(d,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const r=p(a),t=await r.findByRole("button",{name:"Before switch"}),u=r.getByRole("switch",{name:"Focus intent switch"});await y.click(t),await y.tab(),await o(u).toHaveFocus(),await o(u).toHaveAttribute("data-focus-visible","true"),l.mouseDown(u,{button:0,ctrlKey:!0}),await o(u).toHaveAttribute("data-focus-visible","true")}};var ue,pe,he;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ye,be,me;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(me=(be=B.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var ve,fe,we;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var ge,ke,xe;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var Se,Ee,Ae;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Ee=R.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Be,Ce,He;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(He=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var Re,Ie,je;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(je=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Fe,Ke,Te;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Te=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:Te.source}}};var De,Pe,Le;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
    await waitFor(() => {
      expect(control).toHaveAttribute("data-pressed", "true");
    });
    fireEvent.pointerCancel(control);
    await waitFor(() => {
      expect(control).not.toHaveAttribute("data-pressed");
    });
    control.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(control).toHaveAttribute("data-pressed", "true");
    });
    control.dispatchEvent(new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "touch",
      button: 0
    }));
    await waitFor(() => {
      expect(control).not.toHaveAttribute("data-pressed");
    });
    await userEvent.pointer([{
      target: control,
      keys: "[MouseLeft>]"
    }]);
    await expect(control).toHaveAttribute("data-pressed", "true");
    await userEvent.unhover(control);
    await expect(control).not.toHaveAttribute("data-pressed");
  }
}`,...(Le=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Ge,We,qe;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(qe=(We=T.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};const wt=["Controlled","InvalidAndDisabled","ShortcutHintPrecision","KeyboardToggle","KeyboardModifierGuard","ImeCompositionGuard","LabelledByPrecedence","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{F as ClickPreventDefaultGuard,A as Controlled,T as FocusIntentReentry,I as ImeCompositionGuard,B as InvalidAndDisabled,R as KeyboardModifierGuard,H as KeyboardToggle,j as LabelledByPrecedence,K as PointerPrimaryOnly,C as ShortcutHintPrecision,wt as __namedExportsOrder,ft as default};
