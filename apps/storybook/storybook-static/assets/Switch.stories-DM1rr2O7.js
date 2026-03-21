import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{a as Ye}from"./a11y-CU5SQrEA.js";import{B as Pe}from"./Badge-ZJmMstsz.js";import{within as d,userEvent as c,expect as o,fireEvent as v,waitFor as ne}from"./index-DgAF9SIF.js";import{S as k}from"./storyShowcase-Bw5VyCj0.js";const l=s.forwardRef(function({checked:r,defaultChecked:a=!1,onCheckedChange:u,disabled:i=!1,invalid:Ke,label:x,description:b,style:De,type:Le,onClick:T,onFocus:P,onBlur:K,onMouseEnter:D,onMouseLeave:L,onMouseDown:G,onMouseUp:W,onPointerDown:q,onKeyDown:M,onKeyUp:z,"aria-invalid":Ge,"aria-label":We,"aria-labelledby":qe,...$},w){const[Me,ze]=s.useState(a),[Ne,N]=s.useState(!1),[X,g]=s.useState(!1),[Ve,V]=s.useState(!1),[J,p]=s.useState(!1),h=s.useRef(!0),Q=s.useRef(null),Y=Ye(Ke,Ge),S=Y!==void 0,Z=s.useId(),U=s.useId(),O=r!==void 0,y=O?r:Me,_=se(qe),ee=_?void 0:se(We),Oe=[$["aria-describedby"],b?Z:void 0].filter(Boolean).join(" ")||void 0,_e=ee||_||!x?_:U,$e=S?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 30%, transparent)",Xe=S?"var(--aurora-color-red-500)":Ve&&!i?"var(--aurora-border-strong)":"var(--aurora-border-default)",Je=i?"color-mix(in srgb, var(--aurora-surface-elevated) 75%, var(--aurora-surface-default))":S?y?"color-mix(in srgb, var(--aurora-color-red-500) 78%, var(--aurora-surface-elevated))":"color-mix(in srgb, var(--aurora-color-red-500) 14%, var(--aurora-surface-elevated))":y?"var(--aurora-accent-default)":"var(--aurora-surface-elevated)";s.useEffect(()=>{i&&(N(!1),g(!1),V(!1),p(!1))},[i]),s.useEffect(()=>{var re;const e=((re=Q.current)==null?void 0:re.ownerDocument)??document,te=m=>{m.metaKey||m.altKey||m.ctrlKey||(h.current=!0)},f=m=>{"button"in m&&typeof m.button=="number"&&m.button!==0||(h.current=!1)};return e.addEventListener("keydown",te,!0),e.addEventListener("pointerdown",f,!0),e.addEventListener("mousedown",f,!0),e.addEventListener("touchstart",f,!0),()=>{e.removeEventListener("keydown",te,!0),e.removeEventListener("pointerdown",f,!0),e.removeEventListener("mousedown",f,!0),e.removeEventListener("touchstart",f,!0)}},[]);const Qe=s.useCallback(e=>{if(Q.current=e,typeof w=="function"){w(e);return}w&&(w.current=e)},[w]),ae=s.useCallback(()=>{if(i)return;const e=!y;O||ze(e),u==null||u(e)},[y,i,O,u]);return n.jsxs("button",{...$,ref:Qe,type:Le??"button",role:"switch","aria-checked":y,"aria-invalid":Y,"aria-disabled":i||void 0,"aria-label":ee,"aria-describedby":Oe,"aria-labelledby":_e,disabled:i,"data-state":y?"checked":"unchecked","data-invalid":S?"true":void 0,"data-pressed":J?"true":void 0,"data-focus-visible":X?"true":void 0,style:{border:"none",margin:0,padding:0,background:"transparent",color:"var(--aurora-text-primary)",font:"inherit",display:"inline-flex",alignItems:"flex-start",gap:10,textAlign:"left",cursor:i?"not-allowed":"pointer",opacity:i?.72:1,...De},onClick:e=>{T==null||T(e),!e.defaultPrevented&&ae()},onFocus:e=>{N(!0),g(ea(e.currentTarget,h.current)),P==null||P(e)},onBlur:e=>{N(!1),g(!1),p(!1),K==null||K(e)},onMouseEnter:e=>{i||V(!0),D==null||D(e)},onMouseLeave:e=>{V(!1),p(!1),L==null||L(e)},onMouseDown:e=>{e.button===0&&(h.current=!1,g(!1)),!i&&e.button===0&&p(!0),G==null||G(e)},onPointerDown:e=>{e.button===0&&(h.current=!1,g(!1)),q==null||q(e)},onMouseUp:e=>{e.button===0&&p(!1),W==null||W(e)},onKeyDown:e=>{h.current=!0,M==null||M(e),!(e.defaultPrevented||i)&&oe(e.key)&&(Ue(e)||Ze(e)||(e.preventDefault(),p(!0),ae()))},onKeyUp:e=>{oe(e.key)&&p(!1),z==null||z(e)},children:[n.jsx("span",{"data-aurora-reduced-motion":"transition","aria-hidden":"true",style:{width:44,height:24,borderRadius:999,border:`1px solid ${Xe}`,background:Je,padding:2,display:"flex",alignItems:"center",boxSizing:"border-box",boxShadow:Ne&&X?`0 0 0 3px ${$e}`:"none",transition:"background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), border-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), box-shadow var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"},children:n.jsx("span",{"data-aurora-reduced-motion":"transition",style:{width:18,height:18,borderRadius:999,background:"var(--aurora-surface-default)",boxShadow:"var(--aurora-shadow-sm)",transform:`translateX(${y?20:0}px) scale(${J?.96:1})`,transition:"transform var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard), background-color var(--aurora-motion-duration-fast) var(--aurora-motion-easing-standard)"}})}),x||b?n.jsxs("span",{style:{display:"grid",gap:b?2:0,paddingTop:1},children:[x?n.jsx("span",{id:U,children:x}):null,b?n.jsx("span",{id:Z,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:b}):null]}):null]})});function oe(t){return t===" "||t==="Space"||t==="Spacebar"}function Ze(t){return t.ctrlKey||t.metaKey||t.altKey}function Ue(t){const r=t.nativeEvent;return r.isComposing?!0:typeof r.keyCode=="number"&&r.keyCode===229}function se(t){if(typeof t!="string")return;const r=t.trim();return r.length>0?r:void 0}function ea(t,r){try{return t.matches(":focus-visible")||r}catch{return r}}l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const la={title:"Form/Switch",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Switch supports controlled and uncontrolled toggles, invalid semantics, and helper narration with accessible switch behavior."}}},args:{label:"Live updates",description:"Automatically refresh release activity every 30 seconds."}};function aa(){const[t,r]=s.useState(!0);return n.jsxs(k,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-primary)"},children:"Current state"}),n.jsx(Pe,{tone:t?"success":"danger",children:t?"Enabled":"Paused"})]}),n.jsx(l,{label:"Live updates",description:"Automatically refresh release activity every 30 seconds.",checked:t,onCheckedChange:r})]})}const E={render:()=>n.jsx(aa,{}),play:async({canvasElement:t})=>{const r=d(t),a=r.getByRole("switch",{name:"Live updates"});await c.click(a),await o(a).toHaveAttribute("aria-checked","false"),await o(r.getByText("Paused")).toBeInTheDocument()}},A={render:()=>n.jsxs(k,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(l,{label:"Incident bypass",description:"Resolve validation warnings before enabling bypass.",invalid:!0,defaultChecked:!1}),n.jsx(l,{label:"Org lock",description:"Managed by administrator policy.",disabled:!0,defaultChecked:!0})]})},C={args:{defaultChecked:!1,label:"Keyboard mode",description:"Press and hold Space to toggle with visible pressed feedback."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Keyboard mode"});a.focus(),v.keyDown(a,{key:" "}),await ne(()=>{o(a).toHaveAttribute("data-pressed","true")}),await o(a).toHaveAttribute("aria-checked","true"),v.keyUp(a,{key:" "}),await ne(()=>{o(a).not.toHaveAttribute("data-pressed")})}},B={args:{defaultChecked:!1,label:"Modified keyboard mode",description:"Ctrl/Meta/Alt + Space should not toggle this switch."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Modified keyboard mode"});a.focus(),v.keyDown(a,{key:" ",ctrlKey:!0}),v.keyDown(a,{key:"Space",metaKey:!0}),v.keyDown(a,{key:"Spacebar",altKey:!0}),await o(a).toHaveAttribute("aria-checked","false"),await o(a).not.toHaveAttribute("data-pressed"),await c.keyboard("[Space]"),await o(a).toHaveAttribute("aria-checked","true")}},R={args:{defaultChecked:!1,label:"IME keyboard mode",description:"IME composition keydown should not toggle or trigger keyboard pressed visuals."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"IME keyboard mode"});a.focus(),v.keyDown(a,{key:" ",isComposing:!0,keyCode:229,which:229}),v.keyDown(a,{key:" ",keyCode:229,which:229}),await o(a).toHaveAttribute("aria-checked","false"),await o(a).not.toHaveAttribute("data-pressed"),await c.keyboard("[Space]"),await o(a).toHaveAttribute("aria-checked","true")}},H={render:()=>n.jsxs(k,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx("p",{id:"switch-labelledby-heading",style:{margin:0,color:"var(--aurora-text-primary)"},children:"Approval switch heading"}),n.jsx(l,{label:"Approval gate",description:"aria-labelledby should stay canonical when both naming props exist.","aria-label":"Fallback approval switch name","aria-labelledby":"switch-labelledby-heading",defaultChecked:!1})]}),play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Approval switch heading"});await o(a).toHaveAttribute("aria-labelledby","switch-labelledby-heading"),await o(a).not.toHaveAttribute("aria-label")}};function ta(){const[t,r]=s.useState(!1);return n.jsxs(k,{maxWidth:"min(100%, 380px)",gap:12,children:[n.jsx(l,{label:"Guarded toggle",description:"Consumer blocks pointer toggle via onClick.preventDefault().",checked:t,onCheckedChange:r,onClick:a=>{a.preventDefault()}}),n.jsx(Pe,{tone:t?"success":"default",children:t?"Enabled":"Blocked"})]})}const I={render:()=>n.jsx(ta,{}),play:async({canvasElement:t})=>{const r=d(t),a=r.getByRole("switch",{name:"Guarded toggle"});await c.click(a),await o(a).toHaveAttribute("aria-checked","false"),await o(r.getByText("Blocked")).toBeInTheDocument()}},j={args:{defaultChecked:!1,label:"Pointer priority",description:"Primary button press should expose and release pressed visuals."},play:async({canvasElement:t})=>{const a=d(t).getByRole("switch",{name:"Pointer priority"});await c.pointer([{target:a,keys:"[MouseLeft>]"}]),await o(a).toHaveAttribute("data-pressed","true"),await c.unhover(a),await o(a).not.toHaveAttribute("data-pressed")}},F={render:()=>n.jsxs(k,{maxWidth:"min(100%, 380px)",gap:10,children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores switch focus-visible state."}),n.jsx("button",{type:"button",children:"Before switch"}),n.jsx(l,{label:"Focus intent switch",description:"Keyboard re-entry should restore focus ring semantics.",defaultChecked:!1})]}),play:async({canvasElement:t})=>{const r=d(t),a=await r.findByRole("button",{name:"Before switch"}),u=r.getByRole("switch",{name:"Focus intent switch"});await c.click(a),await c.tab(),await o(u).toHaveFocus(),await o(u).toHaveAttribute("data-focus-visible","true")}};var ie,ce,le;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,pe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <StoryShowcaseFrame maxWidth="min(100%, 380px)" gap={12}>
      <Switch label="Incident bypass" description="Resolve validation warnings before enabling bypass." invalid defaultChecked={false} />
      <Switch label="Org lock" description="Managed by administrator policy." disabled defaultChecked />
    </StoryShowcaseFrame>
}`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ye,me,ve;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var he,fe,be;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var we,ge,ke;R.parameters={...R.parameters,docs:{...(we=R.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var xe,Se,Ee;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Ae,Ce,Be;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Be=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var Re,He,Ie;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var je,Fe,Te;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Te=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};const da=["Controlled","InvalidAndDisabled","KeyboardToggle","KeyboardModifierGuard","ImeCompositionGuard","LabelledByPrecedence","ClickPreventDefaultGuard","PointerPrimaryOnly","FocusIntentReentry"];export{I as ClickPreventDefaultGuard,E as Controlled,F as FocusIntentReentry,R as ImeCompositionGuard,A as InvalidAndDisabled,B as KeyboardModifierGuard,C as KeyboardToggle,H as LabelledByPrecedence,j as PointerPrimaryOnly,da as __namedExportsOrder,la as default};
