import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as vt}from"./a11y-CU5SQrEA.js";import{B as Ze}from"./Badge-ZJmMstsz.js";import{within as d,userEvent as y,expect as o,fireEvent as p,waitFor as w}from"./index-DgAF9SIF.js";import{S as m}from"./storyShowcase-Bw5VyCj0.js";const l=s.forwardRef(function({checked:r,defaultChecked:a=!1,onCheckedChange:c,disabled:i=!1,invalid:Ue,label:L,description:G,style:et,type:tt,onClick:W,onFocus:q,onBlur:N,onMouseEnter:M,onMouseLeave:O,onMouseDown:V,onMouseUp:z,onPointerDown:_,onPointerUp:$,onPointerCancel:X,onKeyDown:J,onKeyUp:Q,"aria-invalid":at,"aria-label":rt,"aria-labelledby":nt,"aria-keyshortcuts":ot,...oe},g){const[st,it]=s.useState(a),[ct,Y]=s.useState(!1),[se,k]=s.useState(!1),[lt,Z]=s.useState(!1),[ie,u]=s.useState(!1),v=s.useRef(!0),ce=s.useRef(null);s.useRef(null);const le=vt(Ue,at),x=le!==void 0,de=s.useId(),ue=s.useId(),U=r!==void 0,b=U?r:st,ee=ne(L),S=ne(G),A=ae(nt),te=A?void 0:ae(rt),dt=i?void 0:ae(ot)??"Space",ut=[oe["aria-describedby"],S?de:void 0].filter(Boolean).join(" ")||void 0,pt=te||A||!ee?A:ue,ht=x?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",yt=x?"var(--aurora-color-red-500)":lt&&!i?"var(--aurora-border-strong)":"var(--aurora-border-default)",bt=i?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":x?b?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":b?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";s.useEffect(()=>{i&&(Y(!1),k(!1),Z(!1),u(!1))},[i]),s.useEffect(()=>{},[te,A,G,L]),s.useEffect(()=>{var ye;const t=((ye=ce.current)==null?void 0:ye.ownerDocument)??document,he=h=>{h.metaKey||h.altKey||h.ctrlKey||(v.current=!0)},f=h=>{"button"in h&&!re(h.button)||"ctrlKey"in h&&h.ctrlKey||(v.current=!1)};return t.addEventListener("keydown",he,!0),t.addEventListener("pointerdown",f,!0),t.addEventListener("mousedown",f,!0),t.addEventListener("touchstart",f,!0),()=>{t.removeEventListener("keydown",he,!0),t.removeEventListener("pointerdown",f,!0),t.removeEventListener("mousedown",f,!0),t.removeEventListener("touchstart",f,!0)}},[]);const mt=s.useCallback(t=>{if(ce.current=t,typeof g=="function"){g(t);return}g&&(g.current=t)},[g]),pe=s.useCallback(()=>{if(i)return;const t=!b;U||it(t),c==null||c(t)},[b,i,U,c]);return n.jsxs("button",{...oe,ref:mt,type:tt??"button",role:"switch","aria-checked":b,"aria-invalid":le,"aria-disabled":i||void 0,"aria-label":te,"aria-describedby":ut,"aria-labelledby":pt,"aria-keyshortcuts":dt,disabled:i,"data-state":b?"checked":"unchecked","data-invalid":x?"true":void 0,"data-pressed":ie?"true":void 0,"data-focus-visible":se?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.72:1,...et},onClick:t=>{W==null||W(t),!t.defaultPrevented&&pe()},onFocus:t=>{Y(!0),k(gt(t.currentTarget,v.current)),q==null||q(t)},onBlur:t=>{Y(!1),k(!1),u(!1),N==null||N(t)},onMouseEnter:t=>{i||Z(!0),M==null||M(t)},onMouseLeave:t=>{Z(!1),u(!1),O==null||O(t)},onMouseDown:t=>{t.button===0&&!t.ctrlKey&&(v.current=!1,k(!1)),!i&&t.button===0&&!t.ctrlKey&&u(!0),V==null||V(t)},onPointerDown:t=>{t.button===0&&!t.ctrlKey&&(v.current=!1,k(!1)),!i&&!t.ctrlKey&&re(t.button)&&u(!0),_==null||_(t)},onPointerUp:t=>{re(t.button)&&u(!1),$==null||$(t)},onPointerCancel:t=>{u(!1),X==null||X(t)},onMouseUp:t=>{t.button===0&&u(!1),z==null||z(t)},onKeyDown:t=>{v.current=!0,J==null||J(t),!(t.defaultPrevented||i)&&be(t.key)&&(wt(t)||ft(t)||(t.preventDefault(),u(!0),pe()))},onKeyUp:t=>{be(t.key)&&u(!1),Q==null||Q(t)},children:[n.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${yt}`,background:bt,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:ct&&se?`0 0 0 3px ${ht}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:n.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${b?20:0}px) scale(${ie?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),ee||S?n.jsxs("span",{style:{display:"grid",gap:S?2:0,paddingTop:1},children:[ee?n.jsx("span",{id:ue,children:L}):null,S?n.jsx("span",{id:de,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:G}):null]}):null]})});function be(e){return e===" "||e==="Space"||e==="Spacebar"}function ft(e){return e.ctrlKey||e.metaKey||e.altKey}function wt(e){const r=e.nativeEvent;return r.isComposing?!0:typeof r.keyCode=="number"&&r.keyCode===229}function ae(e){if(typeof e!="string")return;const r=e.trim();return r.length>0?r:void 0}function ne(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(r=>ne(r)):s.isValidElement(e)}function re(e){return typeof e!="number"||e<=0}function gt(e,r){try{return e.matches(":focus-visible")||r}catch{return r}}l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Rt={title:"Form/Switch",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function kt(){const[e,r]=s.useState(!0);return n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),n.jsx(Ze,{tone:e?"success":"danger",children:e?"Enabled":"Paused"})]}),n.jsx(l,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:e,onCheckedChange:r})]})}const E={render:()=>n.jsx(kt,{}),play:async({canvasElement:e})=>{const r=d(e),a=r.getByRole("switch",{name:"Live updates"});await y.click(a),await o(a).toHaveAttribute("aria-checked","false"),await o(r.getByText("Paused")).toBeInTheDocument()}},B={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(l,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),n.jsx(l,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},C={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(l,{label:"Shortcut metadata switch",description:"Actionable switches should expose Space shortcut hints.",defaultChecked:!1}),n.jsx(l,{label:"Blocked shortcut metadata switch",description:"Disabled switches should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:e})=>{const r=d(e);await o(r.getByRole("switch",{name:"Shortcut metadata switch"})).toHaveAttribute("aria-keyshortcuts","Space"),await o(r.getByRole("switch",{name:"Blocked shortcut metadata switch"})).not.toHaveAttribute("aria-keyshortcuts")}},H={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press and hold Space to toggle with visible pressed feedback."},play:async({canvasElement:e})=>{const a=d(e).getByRole("switch",{name:"Keyboard mode"});a.focus(),p.keyDown(a,{key:" "}),await w(()=>{o(a).toHaveAttribute("data-pressed","true")}),await o(a).toHaveAttribute("aria-checked","true"),p.keyUp(a,{key:" "}),await w(()=>{o(a).not.toHaveAttribute("data-pressed")})}},R={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:e})=>{const a=d(e).getByRole("switch",{name:"Modified keyboard mode"});a.focus(),p.keyDown(a,{key:" ",ctrlKey:!0}),p.keyDown(a,{key:"Space",metaKey:!0}),p.keyDown(a,{key:"Spacebar",altKey:!0}),await o(a).toHaveAttribute("aria-checked","false"),await o(a).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(a).toHaveAttribute("aria-checked","true")}},I={args:{defaultChecked:!1,label:"IME keyboard mode",description:"IME composition keydown should not toggle or trigger keyboard pressed visuals."},play:async({canvasElement:e})=>{const a=d(e).getByRole("switch",{name:"IME keyboard mode"});a.focus(),p.keyDown(a,{key:" ",isComposing:!0,keyCode:229,which:229}),p.keyDown(a,{key:" ",keyCode:229,which:229}),await o(a).toHaveAttribute("aria-checked","false"),await o(a).not.toHaveAttribute("data-pressed"),await y.keyboard("[Space]"),await o(a).toHaveAttribute("aria-checked","true")}},j={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),n.jsx(l,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:e})=>{const a=d(e).getByRole("switch",{name:"Approval switch heading"});await o(a).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(a).not.toHaveAttribute("aria-label")}},T={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-icon-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Automation mode"}),n.jsx(l,{label:n.jsx("span",{"aria-hidden":"true",children:"⚙️"}),description:"Icon-only label should keep canonical external naming.","aria-label":"Fallback automation switch","aria-labelledby":"switch-icon-heading",defaultChecked:!1})]}),play:async({canvasElement:e})=>{const a=d(e).getByRole("switch",{name:"Automation mode"});await o(a).toHaveAttribute("aria-labelledby","switch-icon-heading"),await o(a).not.toHaveAttribute("aria-label")}},F={args:{defaultChecked:!1,label:0,description:0},play:async({canvasElement:e})=>{const r=d(e),a=r.getByRole("switch"),c=a.getAttribute("aria-labelledby"),i=a.getAttribute("aria-describedby");await o(c).toBeTruthy(),await o(i).toBeTruthy(),await o(r.getAllByText("0").length).toBeGreaterThanOrEqual(2)}};function xt(){const[e,r]=s.useState(!1);return n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(l,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:e,onCheckedChange:r,onClick:a=>{a.preventDefault()}}),n.jsx(Ze,{tone:e?"success":"default",children:e?"Enabled":"Blocked"})]})}const K={render:()=>n.jsx(xt,{}),play:async({canvasElement:e})=>{const r=d(e),a=r.getByRole("switch",{name:"Guarded toggle"});await y.click(a),await o(a).toHaveAttribute("aria-checked","false"),await o(r.getByText("Blocked")).toBeInTheDocument()}},P={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:e})=>{const a=d(e).getByRole("switch",{name:"Pointer priority"});p.mouseDown(a,{button:0}),await w(()=>{o(a).toHaveAttribute("data-pressed","true")}),p.pointerCancel(a),await w(()=>{o(a).not.toHaveAttribute("data-pressed")}),a.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await w(()=>{o(a).toHaveAttribute("data-pressed","true")}),a.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await w(()=>{o(a).not.toHaveAttribute("data-pressed")}),await y.pointer([{target:a,keys:"[MouseLeft>]"}]),await o(a).toHaveAttribute("data-pressed","true"),await y.unhover(a),await o(a).not.toHaveAttribute("data-pressed")}},D={render:()=>n.jsxs(m,{maxWidth:"min(100%, 380px)",gap:10,children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),n.jsx("button",{type:"button",children:"Before switch"}),n.jsx(l,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:e})=>{const r=d(e),a=await r.findByRole("button",{name:"Before switch"}),c=r.getByRole("switch",{name:"Focus intent switch"});await y.click(a),await y.tab(),await o(c).toHaveFocus(),await o(c).toHaveAttribute("data-focus-visible","true"),p.mouseDown(c,{button:0,ctrlKey:!0}),await o(c).toHaveAttribute("data-focus-visible","true")}};var me,ve,fe;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var we,ge,ke;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(ke=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var xe,Se,Ae;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ae=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Ee,Be,Ce;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var He,Re,Ie;R.parameters={...R.parameters,docs:{...(He=R.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var je,Te,Fe;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Fe=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var Ke,Pe,De;j.parameters={...j.parameters,docs:{...(Ke=j.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(De=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var Le,Ge,We;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(We=(Ge=T.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var qe,Ne,Me;F.parameters={...F.parameters,docs:{...(qe=F.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: 0,
    description: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch");
    const labelledById = control.getAttribute("aria-labelledby");
    const describedById = control.getAttribute("aria-describedby");
    await expect(labelledById).toBeTruthy();
    await expect(describedById).toBeTruthy();
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(2);
  }
}`,...(Me=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var Oe,Ve,ze;K.parameters={...K.parameters,docs:{...(Oe=K.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(ze=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var _e,$e,Xe;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Xe=($e=P.parameters)==null?void 0:$e.docs)==null?void 0:Xe.source}}};var Je,Qe,Ye;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Qe=D.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};const It=["Controlled","InvalidAndDisabled","ShortcutHintPrecision","KeyboardToggle","KeyboardModifierGuard","ImeCompositionGuard","LabelledByPrecedence","IconLabelledByPrecedence","NumericContentSemantics","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{K as ClickPreventDefaultGuard,E as Controlled,D as FocusIntentReentry,T as IconLabelledByPrecedence,I as ImeCompositionGuard,B as InvalidAndDisabled,R as KeyboardModifierGuard,H as KeyboardToggle,j as LabelledByPrecedence,F as NumericContentSemantics,P as PointerPrimaryOnly,C as ShortcutHintPrecision,It as __namedExportsOrder,Rt as default};
