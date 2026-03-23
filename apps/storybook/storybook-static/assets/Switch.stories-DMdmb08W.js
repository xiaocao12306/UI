import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as At}from"./a11y-CU5SQrEA.js";import{B as ie}from"./Badge-ZJmMstsz.js";import{within as u,userEvent as h,expect as o,fireEvent as l,waitFor as f}from"./index-DgAF9SIF.js";import{S as y}from"./storyShowcase-DlKirntE.js";function ne(e,n){return typeof e!="boolean"?n:e}const d=s.forwardRef(function({checked:n,defaultChecked:t=!1,onCheckedChange:c,disabled:G=!1,invalid:st,label:N,description:ce,style:it,type:ct,onClick:W,onFocus:z,onBlur:q,onMouseEnter:M,onMouseLeave:O,onMouseDown:V,onMouseUp:_,onPointerDown:$,onPointerUp:X,onPointerCancel:J,onKeyDown:Q,onKeyUp:Y,"aria-invalid":lt,"aria-label":dt,"aria-labelledby":ut,"aria-keyshortcuts":pt,...le},g){const[ht,bt]=s.useState(()=>ne(t,!1)),[yt,Z]=s.useState(!1),[de,k]=s.useState(!1),[mt,U]=s.useState(!1),[ue,p]=s.useState(!1),v=s.useRef(!0),pe=s.useRef(null);s.useRef(null);const he=At(st,lt),x=he!==void 0,i=ne(G,!1),be=n===void 0?void 0:ne(n,!1),ye=s.useId(),me=s.useId(),ee=be!==void 0,m=ee?be:ht,te=se(N),S=se(ce),A=re(ut),ae=A?void 0:re(dt),vt=i?void 0:re(pt)??"Space",wt=[le["aria-describedby"],S?ye:void 0].filter(Boolean).join(" ")||void 0,ft=ae||A||!te?A:me,gt=x?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",kt=x?"var(--aurora-color-red-500)":mt&&!i?"var(--aurora-border-strong)":"var(--aurora-border-default)",xt=i?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":x?m?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":m?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";s.useEffect(()=>{i&&(Z(!1),k(!1),U(!1),p(!1))},[i]),s.useEffect(()=>{},[ae,A,N]),s.useEffect(()=>{var fe;const a=((fe=pe.current)==null?void 0:fe.ownerDocument)??document,we=b=>{b.metaKey||b.altKey||b.ctrlKey||(v.current=!0)},w=b=>{"button"in b&&!oe(b.button)||"ctrlKey"in b&&b.ctrlKey||(v.current=!1)};return a.addEventListener("keydown",we,!0),a.addEventListener("pointerdown",w,!0),a.addEventListener("mousedown",w,!0),a.addEventListener("touchstart",w,!0),()=>{a.removeEventListener("keydown",we,!0),a.removeEventListener("pointerdown",w,!0),a.removeEventListener("mousedown",w,!0),a.removeEventListener("touchstart",w,!0)}},[]);const St=s.useCallback(a=>{if(pe.current=a,typeof g=="function"){g(a);return}g&&(g.current=a)},[g]),ve=s.useCallback(()=>{if(i)return;const a=!m;ee||bt(a),c==null||c(a)},[m,ee,c,i]);return r.jsxs("button",{...le,ref:St,type:ct??"button",role:"switch","aria-checked":m,"aria-invalid":he,"aria-disabled":i||void 0,"aria-label":ae,"aria-describedby":wt,"aria-labelledby":ft,"aria-keyshortcuts":vt,disabled:i,"data-state":m?"checked":"unchecked","data-invalid":x?"true":void 0,"data-pressed":ue?"true":void 0,"data-focus-visible":de?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.72:1,...it},onClick:a=>{W==null||W(a),!a.defaultPrevented&&ve()},onFocus:a=>{Z(!0),k(Ct(a.currentTarget,v.current)),z==null||z(a)},onBlur:a=>{Z(!1),k(!1),p(!1),q==null||q(a)},onMouseEnter:a=>{i||U(!0),M==null||M(a)},onMouseLeave:a=>{U(!1),p(!1),O==null||O(a)},onMouseDown:a=>{a.button===0&&!a.ctrlKey&&(v.current=!1,k(!1)),!i&&a.button===0&&!a.ctrlKey&&p(!0),V==null||V(a)},onPointerDown:a=>{a.button===0&&!a.ctrlKey&&(v.current=!1,k(!1)),!i&&!a.ctrlKey&&oe(a.button)&&p(!0),$==null||$(a)},onPointerUp:a=>{oe(a.button)&&p(!1),X==null||X(a)},onPointerCancel:a=>{p(!1),J==null||J(a)},onMouseUp:a=>{a.button===0&&p(!1),_==null||_(a)},onKeyDown:a=>{v.current=!0,Q==null||Q(a),!(a.defaultPrevented||i)&&ge(a.key)&&(Et(a)||Bt(a)||(a.preventDefault(),!a.repeat&&(p(!0),ve())))},onKeyUp:a=>{ge(a.key)&&p(!1),Y==null||Y(a)},children:[r.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${kt}`,background:xt,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:yt&&de?`0 0 0 3px ${gt}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:r.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${m?20:0}px) scale(${ue?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),te||S?r.jsxs("span",{style:{display:"grid",gap:S?2:0,paddingTop:1},children:[te?r.jsx("span",{id:me,children:N}):null,S?r.jsx("span",{id:ye,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:ce}):null]}):null]})});function ge(e){return e===" "||e==="Space"||e==="Spacebar"}function Bt(e){return e.ctrlKey||e.metaKey||e.altKey}function Et(e){const n=e.nativeEvent;return n.isComposing?!0:typeof n.keyCode=="number"&&n.keyCode===229}function re(e){if(typeof e!="string")return;const n=e.trim();return n.length>0?n:void 0}function se(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(n=>se(n)):s.isValidElement(e)}function oe(e){return typeof e!="number"||e<=0}function Ct(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}d.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Lt={title:"Form/Switch",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function Ht(){const[e,n]=s.useState(!0);return r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),r.jsx(ie,{tone:e?"success":"danger",children:e?"Enabled":"Paused"})]}),r.jsx(d,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:e,onCheckedChange:n})]})}const B={render:()=>r.jsx(Ht,{}),play:async({canvasElement:e})=>{const n=u(e),t=n.getByRole("switch",{name:"Live updates"});await h.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(n.getByText("Paused")).toBeInTheDocument()}},E={render:()=>r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(d,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),r.jsx(d,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},C={render:()=>r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(d,{label:"Shortcut metadata switch",description:"Actionable switches should expose Space shortcut hints.",defaultChecked:!1}),r.jsx(d,{label:"Blocked shortcut metadata switch",description:"Disabled switches should not advertise keyboard shortcuts.",disabled:!0,defaultChecked:!0})]}),play:async({canvasElement:e})=>{const n=u(e);await o(n.getByRole("switch",{name:"Shortcut metadata switch"})).toHaveAttribute("aria-keyshortcuts","Space"),await o(n.getByRole("switch",{name:"Blocked shortcut metadata switch"})).not.toHaveAttribute("aria-keyshortcuts")}};function Rt(){const[e,n]=s.useState(0);return r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(d,{label:"Runtime boolean switch",description:"Invalid runtime booleans should degrade to actionable switch semantics.",checked:"true",defaultChecked:"true",disabled:"true",onCheckedChange:()=>n(t=>t+1)}),r.jsxs(ie,{tone:"default",children:["Toggle events: ",r.jsx("span",{"data-testid":"switch-runtime-toggle-events",children:e})]})]})}const H={render:()=>r.jsx(Rt,{}),play:async({canvasElement:e})=>{const n=u(e),t=n.getByRole("switch",{name:"Runtime boolean switch"}),c=n.getByTestId("switch-runtime-toggle-events");await o(t).not.toBeDisabled(),await o(t).toHaveAttribute("aria-checked","false"),await o(t).toHaveAttribute("aria-keyshortcuts","Space"),await h.click(t),await o(c).toHaveTextContent("1")}},R={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press and hold Space to toggle once with visible pressed feedback."},play:async({canvasElement:e})=>{const t=u(e).getByRole("switch",{name:"Keyboard mode"});t.focus(),l.keyDown(t,{key:" "}),await f(()=>{o(t).toHaveAttribute("data-pressed","true")}),await o(t).toHaveAttribute("aria-checked","true"),l.keyDown(t,{key:" ",repeat:!0}),l.keyDown(t,{key:"Spacebar",repeat:!0}),await o(t).toHaveAttribute("aria-checked","true"),l.keyUp(t,{key:" "}),await f(()=>{o(t).not.toHaveAttribute("data-pressed")})}},I={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:e})=>{const t=u(e).getByRole("switch",{name:"Modified keyboard mode"});t.focus(),l.keyDown(t,{key:" ",ctrlKey:!0}),l.keyDown(t,{key:"Space",metaKey:!0}),l.keyDown(t,{key:"Spacebar",altKey:!0}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await h.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},j={args:{defaultChecked:!1,label:"IME keyboard mode",description:"IME composition keydown should not toggle or trigger keyboard pressed visuals."},play:async({canvasElement:e})=>{const t=u(e).getByRole("switch",{name:"IME keyboard mode"});t.focus(),l.keyDown(t,{key:" ",isComposing:!0,keyCode:229,which:229}),l.keyDown(t,{key:" ",keyCode:229,which:229}),await o(t).toHaveAttribute("aria-checked","false"),await o(t).not.toHaveAttribute("data-pressed"),await h.keyboard("[Space]"),await o(t).toHaveAttribute("aria-checked","true")}},T={render:()=>r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),r.jsx(d,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:e})=>{const t=u(e).getByRole("switch",{name:"Approval switch heading"});await o(t).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(t).not.toHaveAttribute("aria-label")}},F={render:()=>r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx("p",{id:"switch-icon-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Automation mode"}),r.jsx(d,{label:r.jsx("span",{"aria-hidden":"true",children:"⚙️"}),description:"Icon-only label should keep canonical external naming.","aria-label":"Fallback automation switch","aria-labelledby":"switch-icon-heading",defaultChecked:!1})]}),play:async({canvasElement:e})=>{const t=u(e).getByRole("switch",{name:"Automation mode"});await o(t).toHaveAttribute("aria-labelledby","switch-icon-heading"),await o(t).not.toHaveAttribute("aria-label")}},D={args:{defaultChecked:!1,label:0,description:0},play:async({canvasElement:e})=>{const n=u(e),t=n.getByRole("switch"),c=t.getAttribute("aria-labelledby"),G=t.getAttribute("aria-describedby");await o(c).toBeTruthy(),await o(G).toBeTruthy(),await o(n.getAllByText("0").length).toBeGreaterThanOrEqual(2)}};function It(){const[e,n]=s.useState(!1);return r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:12,children:[r.jsx(d,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:e,onCheckedChange:n,onClick:t=>{t.preventDefault()}}),r.jsx(ie,{tone:e?"success":"default",children:e?"Enabled":"Blocked"})]})}const K={render:()=>r.jsx(It,{}),play:async({canvasElement:e})=>{const n=u(e),t=n.getByRole("switch",{name:"Guarded toggle"});await h.click(t),await o(t).toHaveAttribute("aria-checked","false"),await o(n.getByText("Blocked")).toBeInTheDocument()}},P={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:e})=>{const t=u(e).getByRole("switch",{name:"Pointer priority"});l.mouseDown(t,{button:0}),await f(()=>{o(t).toHaveAttribute("data-pressed","true")}),l.pointerCancel(t),await f(()=>{o(t).not.toHaveAttribute("data-pressed")}),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await f(()=>{o(t).toHaveAttribute("data-pressed","true")}),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,cancelable:!0,pointerType:"touch",button:0})),await f(()=>{o(t).not.toHaveAttribute("data-pressed")}),await h.pointer([{target:t,keys:"[MouseLeft>]"}]),await o(t).toHaveAttribute("data-pressed","true"),await h.unhover(t),await o(t).not.toHaveAttribute("data-pressed")}},L={render:()=>r.jsxs(y,{maxWidth:"min(100%, 380px)",gap:10,children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),r.jsx("button",{type:"button",children:"Before switch"}),r.jsx(d,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:e})=>{const n=u(e),t=await n.findByRole("button",{name:"Before switch"}),c=n.getByRole("switch",{name:"Focus intent switch"});await h.click(t),await h.tab(),await o(c).toHaveFocus(),await o(c).toHaveAttribute("data-focus-visible","true"),l.mouseDown(c,{button:0,ctrlKey:!0}),await o(c).toHaveAttribute("data-focus-visible","true")}};var ke,xe,Se;B.parameters={...B.parameters,docs:{...(ke=B.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Se=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ae,Be,Ee;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(Ee=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Ce,He,Re;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Re.source}}};var Ie,je,Te;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationSwitch />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("switch", {
      name: "Runtime boolean switch"
    });
    const events = canvas.getByTestId("switch-runtime-toggle-events");
    await expect(control).not.toBeDisabled();
    await expect(control).toHaveAttribute("aria-checked", "false");
    await expect(control).toHaveAttribute("aria-keyshortcuts", "Space");
    await userEvent.click(control);
    await expect(events).toHaveTextContent("1");
  }
}`,...(Te=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Fe,De,Ke;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: "Keyboard mode",
    description: "Press and hold Space to toggle once with visible pressed feedback."
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
    fireEvent.keyDown(control, {
      key: " ",
      repeat: true
    });
    fireEvent.keyDown(control, {
      key: "Spacebar",
      repeat: true
    });
    await expect(control).toHaveAttribute("aria-checked", "true");
    fireEvent.keyUp(control, {
      key: " "
    });
    await waitFor(() => {
      expect(control).not.toHaveAttribute("data-pressed");
    });
  }
}`,...(Ke=(De=R.parameters)==null?void 0:De.docs)==null?void 0:Ke.source}}};var Pe,Le,Ge;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ge=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Ne,We,ze;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(ze=(We=j.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var qe,Me,Oe;T.parameters={...T.parameters,docs:{...(qe=T.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ve,_e,$e;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...($e=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Xe,Je,Qe;D.parameters={...D.parameters,docs:{...(Xe=D.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=D.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ye,Ze,Ue;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ue=(Ze=K.parameters)==null?void 0:Ze.docs)==null?void 0:Ue.source}}};var et,tt,at;P.parameters={...P.parameters,docs:{...(et=P.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=P.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,ot;L.parameters={...L.parameters,docs:{...(nt=L.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(rt=L.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};const Gt=["Controlled","InvalidAndDisabled","ShortcutHintPrecision","RuntimeBooleanConfigNormalization","KeyboardToggle","KeyboardModifierGuard","ImeCompositionGuard","LabelledByPrecedence","IconLabelledByPrecedence","NumericContentSemantics","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{K as ClickPreventDefaultGuard,B as Controlled,L as FocusIntentReentry,F as IconLabelledByPrecedence,j as ImeCompositionGuard,E as InvalidAndDisabled,I as KeyboardModifierGuard,R as KeyboardToggle,T as LabelledByPrecedence,D as NumericContentSemantics,P as PointerPrimaryOnly,H as RuntimeBooleanConfigNormalization,C as ShortcutHintPrecision,Gt as __namedExportsOrder,Lt as default};
