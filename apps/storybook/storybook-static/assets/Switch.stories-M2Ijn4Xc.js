import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as dt}from"./a11y-CU5SQrEA.js";import{B as Oe}from"./Badge-ZJmMstsz.js";import{within as u,userEvent as y,expect as o,fireEvent as d,waitFor as g}from"./index-DgAF9SIF.js";import{S as m}from"./storyShowcase-Bw5VyCj0.js";const c=s.forwardRef(function({checked:r,defaultChecked:t=!1,onCheckedChange:p,disabled:i=!1,invalid:_e,label:k,description:v,style:$e,type:Xe,onClick:L,onFocus:W,onBlur:G,onMouseEnter:q,onMouseLeave:M,onMouseDown:z,onMouseUp:N,onPointerDown:V,onPointerUp:O,onPointerCancel:_,onKeyDown:$,onKeyUp:X,"aria-invalid":Je,"aria-label":Qe,"aria-labelledby":Ye,"aria-keyshortcuts":Ze,...te},x){const[Ue,et]=s.useState(t),[tt,J]=s.useState(!1),[ae,S]=s.useState(!1),[at,Q]=s.useState(!1),[re,l]=s.useState(!1),f=s.useRef(!0),ne=s.useRef(null);s.useRef(null);const oe=dt(_e,Je),A=oe!==void 0,se=s.useId(),ie=s.useId(),Y=r!==void 0,b=Y?r:Ue,E=U(Ye),Z=E?void 0:U(Qe),rt=i?void 0:U(Ze)??"Space",nt=[te["aria-describedby"],v?se:void 0].filter(Boolean).join(" ")||void 0,ot=Z||E||!k?E:ie,st=A?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",it=A?"var(--aurora-color-red-500)":at&&!i?"var(--aurora-border-strong)":"var(--aurora-border-default)",ct=i?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":A?b?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":b?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";s.useEffect(()=>{i&&(J(!1),S(!1),Q(!1),l(!1))},[i]),s.useEffect(()=>{},[Z,E,v,k]),s.useEffect(()=>{var de;const e=((de=ne.current)==null?void 0:de.ownerDocument)??document,le=h=>{h.metaKey||h.altKey||h.ctrlKey||(f.current=!0)},w=h=>{"button"in h&&!ee(h.button)||"ctrlKey"in h&&h.ctrlKey||(f.current=!1)};return e.addEventListener("keydown",le,!0),e.addEventListener("pointerdown",w,!0),e.addEventListener("mousedown",w,!0),e.addEventListener("touchstart",w,!0),()=>{e.removeEventListener("keydown",le,!0),e.removeEventListener("pointerdown",w,!0),e.removeEventListener("mousedown",w,!0),e.removeEventListener("touchstart",w,!0)}},[]);const lt=s.useCallback(e=>{if(ne.current=e,typeof x=="function"){x(e);return}x&&(x.current=e)},[x]),ce=s.useCallback(()=>{if(i)return;const e=!b;Y||et(e),p==null||p(e)},[b,i,Y,p]);return n.jsxs("button",{...te,ref:lt,type:Xe??"button",role:"switch","aria-checked":b,"aria-invalid":oe,"aria-disabled":i||void 0,"aria-label":Z,"aria-describedby":nt,"aria-labelledby":ot,"aria-keyshortcuts":rt,disabled:i,"data-state":b?"checked":"unchecked","data-invalid":A?"true":void 0,"data-pressed":re?"true":void 0,"data-focus-visible":ae?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.72:1,...$e},onClick:e=>{L==null||L(e),!e.defaultPrevented&&ce()},onFocus:e=>{J(!0),S(ht(e.currentTarget,f.current)),W==null||W(e)},onBlur:e=>{J(!1),S(!1),l(!1),G==null||G(e)},onMouseEnter:e=>{i||Q(!0),q==null||q(e)},onMouseLeave:e=>{Q(!1),l(!1),M==null||M(e)},onMouseDown:e=>{e.button===0&&!e.ctrlKey&&(f.current=!1,S(!1)),!i&&e.button===0&&!e.ctrlKey&&l(!0),z==null||z(e)},onPointerDown:e=>{e.button===0&&!e.ctrlKey&&(f.current=!1,S(!1)),!i&&!e.ctrlKey&&ee(e.button)&&l(!0),V==null||V(e)},onPointerUp:e=>{ee(e.button)&&l(!1),O==null||O(e)},onPointerCancel:e=>{l(!1),_==null||_(e)},onMouseUp:e=>{e.button===0&&l(!1),N==null||N(e)},onKeyDown:e=>{f.current=!0,$==null||$(e),!(e.defaultPrevented||i)&&ue(e.key)&&(pt(e)||ut(e)||(e.preventDefault(),l(!0),ce()))},onKeyUp:e=>{ue(e.key)&&l(!1),X==null||X(e)},children:[n.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${it}`,background:ct,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:tt&&ae?`0 0 0 3px ${st}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:n.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${b?20:0}px) scale(${re?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),k||v?n.jsxs("span",{style:{display:"grid",gap:v?2:0,paddingTop:1},children:[k?n.jsx("span",{id:ie,children:k}):null,v?n.jsx("span",{id:se,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:v}):null]}):null]})});function ue(a){return a===" "||a==="Space"||a==="Spacebar"}function ut(a){return a.ctrlKey||a.metaKey||a.altKey}function pt(a){const r=a.nativeEvent;return r.isComposing?!0:typeof r.keyCode=="number"&&r.keyCode===229}function U(a){if(typeof a!="string")return;const r=a.trim();return r.length>0?r:void 0}function ee(a){return typeof a!="number"||a<=0}function ht(a,r){try{return a.matches(":focus-visible")||r}catch{return r}}c.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const xt={title:"Form/Switch",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function yt(){const[a,r]=s.useState(!0);return n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),n.jsx(Oe,{tone:a?"success":"danger",children:a?"Enabled":"Paused"})]}),n.jsx(c,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:a,onCheckedChange:r})]})}const B={render:()=>n.jsx(yt,{}),play:async({canvasElement:a})=>{const r=u(a),t=r.getByRole("switch",{name:"Live updates"});await y.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(r.getByText("Paused")).toBeInTheDocument()}},C={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(c,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),n.jsx(c,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},H={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(c,{label:"Shortcut metadata switch",description:"Actionable switches should expose Space shortcut hints.",defaultChecked:!1}),n.jsx(c,{label:"Blocked shortcut metadata switch",description:"Disabled switches should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:a})=>{const r=u(a);await o(r.getByRole("switch",{name:"Shortcut metadata switch"})).toHaveAttribute("aria-keyshortcuts","Space"),await o(r.getByRole("switch",{name:"Blocked shortcut metadata switch"})).not.toHaveAttribute("aria-keyshortcuts")}},R={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press and hold Space to toggle with visible pressed feedback."},play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Keyboard mode"});t.focus(),d.keyDown(t,{key:" "}),await g(()=>{o(t).toHaveAttribute("data-pressed","true")}),await o(t).toHaveAttribute("aria-checked","true"),d.keyUp(t,{key:" "}),await g(()=>{o(t).not.toHaveAttribute("data-pressed")})}},I={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Modified keyboard mode"});t.focus(),d.keyDown(t,{key:" ",ctrlKey:!0}),d.keyDown(t,{key:"Space",metaKey:!0}),d.keyDown(t,{key:"Spacebar",altKey:!0}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},j={args:{defaultChecked:!1,label:"IME keyboard mode",description:"IME composition keydown should not toggle or trigger keyboard pressed visuals."},play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"IME keyboard mode"});t.focus(),d.keyDown(t,{key:" ",isComposing:!0,keyCode:229,which:229}),d.keyDown(t,{key:" ",keyCode:229,which:229}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},F={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),n.jsx(c,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Approval switch heading"});await o(t).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(t).not.toHaveAttribute("aria-label")}},K={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-icon-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Automation mode"}),n.jsx(c,{label:n.jsx("span",{"aria-hidden":"true",children:"⚙️"}),description:"Icon-only label should keep canonical external naming.","aria-label":"Fallback automation switch","aria-labelledby":"switch-icon-heading",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Automation mode"});await o(t).toHaveAttribute("aria-labelledby","switch-icon-heading"),await o(t).not.toHaveAttribute("aria-label")}};function bt(){const[a,r]=s.useState(!1);return n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(c,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:a,onCheckedChange:r,onClick:t=>{t.preventDefault()}}),n.jsx(Oe,{tone:a?"success":"default",children:a?"Enabled":"Blocked"})]})}const T={render:()=>n.jsx(bt,{}),play:async({canvasElement:a})=>{const r=u(a),t=r.getByRole("switch",{name:"Guarded toggle"});await y.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(r.getByText("Blocked")).toBeInTheDocument()}},P={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:a})=>{const t=u(a).getByRole("switch",{name:"Pointer priority"});d.mouseDown(t,{button:0}),await g(()=>{o(t).toHaveAttribute("data-pressed","true")}),d.pointerCancel(t),await g(()=>{o(t).not.toHaveAttribute("data-pressed")}),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(t).toHaveAttribute("data-pressed","true")}),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await g(()=>{o(t).not.toHaveAttribute("data-pressed")}),await y.pointer([{target:t,keys:"[MouseLeft>]"}]),await o(t).toHaveAttribute("data-pressed","true"),await y.unhover(t),await o(t).not.toHaveAttribute("data-pressed")}},D={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:10,children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),n.jsx("button",{type:"button",children:"Before switch"}),n.jsx(c,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:a})=>{const r=u(a),t=await r.findByRole("button",{name:"Before switch"}),p=r.getByRole("switch",{name:"Focus intent switch"});await y.click(t),await y.tab(),await o(p).toHaveFocus(),await o(p).toHaveAttribute("data-focus-visible","true"),d.mouseDown(p,{button:0,ctrlKey:!0}),await o(p).toHaveAttribute("data-focus-visible","true")}};var pe,he,ye;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(he=B.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var be,me,ve;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(ve=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var fe,we,ge;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ge=(we=H.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var ke,xe,Se;R.parameters={...R.parameters,docs:{...(ke=R.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Se=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ae,Ee,Be;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Be=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Ce,He,Re;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Ie,je,Fe;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Fe=(je=F.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Ke,Te,Pe;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <p id="switch-icon-heading" style={{
      margin: 0,
      color: "var(--aurora-text-primary)"
    }}>
        Automation mode
      </p>
      <Switch label={<span aria-hidden="true">⚙️</span>} description="Icon-only label should keep canonical external naming." aria-label="Fallback automation switch" aria-labelledby="switch-icon-heading" defaultChecked={false} />
    </StoryShowcaseFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Automation mode"
    });
    await expect(control).toHaveAttribute("aria-labelledby", "switch-icon-heading");
    await expect(control).not.toHaveAttribute("aria-label");
  }
}`,...(Pe=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var De,Le,We;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(We=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:We.source}}};var Ge,qe,Me;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Me=(qe=P.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var ze,Ne,Ve;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ve=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};const St=["Controlled","InvalidAndDisabled","ShortcutHintPrecision","KeyboardToggle","KeyboardModifierGuard","ImeCompositionGuard","LabelledByPrecedence","IconLabelledByPrecedence","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{T as ClickPreventDefaultGuard,B as Controlled,D as FocusIntentReentry,K as IconLabelledByPrecedence,j as ImeCompositionGuard,C as InvalidAndDisabled,I as KeyboardModifierGuard,R as KeyboardToggle,F as LabelledByPrecedence,P as PointerPrimaryOnly,H as ShortcutHintPrecision,St as __namedExportsOrder,xt as default};
