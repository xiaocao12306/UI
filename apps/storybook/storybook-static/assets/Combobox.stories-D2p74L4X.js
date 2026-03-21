import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{I as De}from"./Input-lqSQxTzG.js";import{B as N}from"./Badge-ZJmMstsz.js";import{within as y,userEvent as c,expect as n,fireEvent as E}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function U(e,t,o){var C;if(e.length===0)return-1;let l=t;for(let I=0;I<e.length;I+=1)if(l=(l+o+e.length)%e.length,!((C=e[l])!=null&&C.disabled))return l;return-1}function W(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function Te(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Re(e){return!((typeof e.button=="number"?e.button:0)>0||(e.pointerType==="mouse"||e.pointerType==="")&&(typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1)||e.ctrlKey))}function v({options:e,value:t,defaultValue:o,onValueChange:l,placeholder:C="Search option...",emptyMessage:I="No option found.",disabled:w=!1,id:he,ariaLabel:V="Combobox"}){const D=u.useId(),T=u.useRef(null),$=u.useRef(null),[m,p]=u.useState(!1),[f,b]=u.useState(-1),[O,G]=u.useState(""),[Ee,Be]=u.useState(o);u.useRef(null);const _=typeof V=="string"&&V.trim().length>0?V.trim():"Combobox",Ce=`${_} options`,g=t??Ee,R=u.useMemo(()=>e.find(a=>a.value===g),[g,e]);u.useEffect(()=>{m||G((R==null?void 0:R.label)??"")},[m,R]),u.useEffect(()=>{},[e]),u.useEffect(()=>{w&&(p(!1),b(-1))},[w]),u.useEffect(()=>{var r;if(!m)return;const a=((r=T.current)==null?void 0:r.ownerDocument)??document,i=k=>{var h;Re(k)&&(k.defaultPrevented||(h=T.current)!=null&&h.contains(k.target)||p(!1))};return a.addEventListener("pointerdown",i),()=>{a.removeEventListener("pointerdown",i)}},[m]);const d=u.useMemo(()=>{const a=O.trim().toLowerCase();return a?e.filter(i=>[i.label,...i.keywords??[]].join(" ").toLowerCase().includes(a)):e},[e,O]),Ie=u.useMemo(()=>{const a=new Map;return d.map(i=>{const r=a.get(i.value)??0;return a.set(i.value,r+1),r===0?i.value:`${i.value}__duplicate-${r}`})},[d]);u.useEffect(()=>{if(!m){b(-1);return}const a=d.findIndex(r=>r.value===g&&!r.disabled);if(a>=0){b(a);return}const i=d.findIndex(r=>!r.disabled);b(i)},[g,d,m]);const P=a=>{w||a.disabled||(t===void 0&&Be(a.value),l==null||l(a.value),p(!1))};return s.jsxs("div",{ref:T,style:{display:"grid",gap:8},children:[s.jsx(De,{ref:$,id:he,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":m,"aria-controls":m?D:void 0,"aria-activedescendant":m&&f>=0?`${D}-option-${f}`:void 0,"aria-label":_,autoComplete:"off",value:O,disabled:w,placeholder:C,onFocus:()=>{w||p(!0)},onBlur:a=>{var i;(i=T.current)!=null&&i.contains(a.relatedTarget)||p(!1)},onChange:a=>{w||(G(a.target.value),p(!0))},onKeyDown:a=>{var i;if(!w&&!(W(a.key)&&Te(a))&&!((a.altKey||a.ctrlKey||a.metaKey)&&W(a.key))){if(a.key==="Escape"){p(!1);return}if(a.key==="ArrowDown"){a.preventDefault(),p(!0),b(r=>U(d,r<0?-1:r,1));return}if(a.key==="ArrowUp"){a.preventDefault(),p(!0),b(r=>U(d,r<0?0:r,-1));return}if(a.key==="Home"){a.preventDefault(),p(!0),b(d.findIndex(r=>!r.disabled));return}if(a.key==="End"){a.preventDefault(),p(!0);for(let r=d.length-1;r>=0;r-=1)if(!((i=d[r])!=null&&i.disabled)){b(r);return}}if(a.key==="Enter"&&m&&f>=0){a.preventDefault();const r=d[f];r&&P(r)}}}}),m?s.jsx("div",{id:D,role:"listbox","aria-label":Ce,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.length>0?d.map((a,i)=>{const r=i===f,k=a.value===g;return s.jsx("button",{id:`${D}-option-${i}`,type:"button",role:"option",tabIndex:-1,"aria-selected":k,"aria-disabled":a.disabled||void 0,disabled:a.disabled,onMouseDown:h=>{var z;h.button!==0||a.disabled||(h.preventDefault(),(z=$.current)==null||z.focus())},onMouseEnter:()=>{a.disabled||b(i)},onClick:()=>P(a),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:r?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:a.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:a.disabled?"not-allowed":"pointer"},children:a.label},Ie[i]??`${a.value}__index-${i}`)}):s.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:I})}):null]})}v.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const x=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}];function B(e,t){const o=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(o,"keyCode",{value:229}),e.dispatchEvent(o)}const Oe={title:"Form/Combobox",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:x,onValueChange:()=>{}}};function Fe(){const[e,t]=u.useState("react");return s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),s.jsx(N,{tone:"default",children:e})]}),s.jsx(v,{id:"framework-combobox",options:x,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const F={render:()=>s.jsx(Fe,{}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("combobox",{name:"Framework"});await c.click(o),await c.clear(o),await c.type(o,"sv"),await c.keyboard("{ArrowDown}{Enter}"),await n(t.getByText("svelte")).toBeInTheDocument()}},H={args:{options:x,emptyMessage:"No framework match."}},A={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("combobox",{name:"Framework dismiss demo"});await n(o).not.toHaveAttribute("aria-controls"),await c.click(o);const l=t.getByRole("listbox",{name:"Framework dismiss demo options"});await n(o).toHaveAttribute("aria-controls",l.id),await c.keyboard("{Escape}"),await n(t.queryByRole("listbox")).not.toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-controls")}};function He(){const[e,t]=u.useState("react");return s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),s.jsx(N,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),s.jsx(v,{options:x,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const j={render:()=>s.jsx(He,{}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("combobox",{name:"Framework modifier guard"});await c.click(o),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await c.keyboard("{Control>}{ArrowDown}{/Control}"),await c.keyboard("{Control>}{Enter}{/Control}"),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Meta>}{Escape}{/Meta}"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await n(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function Ae(){const[e,t]=u.useState("react");return s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),s.jsx(N,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),s.jsx(v,{options:x,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}const M={render:()=>s.jsx(Ae,{}),play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("combobox",{name:"Framework IME guard"});await c.click(o),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(o).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),E.keyDown(o,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),E.keyDown(o,{key:"End",isComposing:!0,keyCode:229,which:229}),E.keyDown(o,{key:"Home",isComposing:!0,keyCode:229,which:229}),E.keyDown(o,{key:"Enter",isComposing:!0,keyCode:229,which:229}),E.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(o).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),B(o,"ArrowDown"),B(o,"End"),B(o,"Home"),B(o,"Enter"),B(o,"Escape"),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(o).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await c.clear(o),await c.type(o,"vu");const l=t.getByRole("option",{name:"Vue"});await n(l).toBeInTheDocument(),await c.click(l),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},L={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("combobox",{name:"Combobox"});await c.click(o),await n(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},S={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("combobox",{name:"Framework focus model"});await c.click(o);const l=t.getByRole("option",{name:"React"});await n(l).toHaveAttribute("tabindex","-1"),await c.click(l),await n(o).toHaveFocus()}},q={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=y(e),o=t.getByRole("combobox",{name:"Framework disabled"});await c.click(o),await n(t.queryByRole("listbox")).toBeNull()}},K={render:()=>s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),s.jsx("button",{type:"button",children:"Before combobox"}),s.jsx(v,{options:x,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=y(e),o=await t.findByRole("button",{name:"Before combobox"}),l=t.getByRole("combobox",{name:"Focus intent combobox"});await c.click(o),await c.tab(),await n(l).toHaveFocus(),await n(l).toHaveAttribute("data-focus-visible","true")}};var Q,J,X;F.parameters={...F.parameters,docs:{...(Q=F.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <ControlledComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework"
    });
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "sv");
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.getByText("svelte")).toBeInTheDocument();
  }
}`,...(X=(J=F.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;H.parameters={...H.parameters,docs:{...(Y=H.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(ee=(Z=H.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Framework dismiss demo"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework dismiss demo"
    });
    await expect(input).not.toHaveAttribute("aria-controls");
    await userEvent.click(input);
    const listbox = canvas.getByRole("listbox", {
      name: "Framework dismiss demo options"
    });
    await expect(input).toHaveAttribute("aria-controls", listbox.id);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("listbox")).not.toBeInTheDocument();
    await expect(input).not.toHaveAttribute("aria-controls");
  }
}`,...(oe=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <ModifierGuardComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework modifier guard"
    });
    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", {
      name: "Framework modifier guard options"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");
    await userEvent.keyboard("{Control>}{ArrowDown}{/Control}");
    await userEvent.keyboard("{Control>}{Enter}{/Control}");
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");
    await expect(canvas.getByRole("listbox", {
      name: "Framework modifier guard options"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Meta>}{Escape}{/Meta}");
    await expect(canvas.getByRole("listbox", {
      name: "Framework modifier guard options"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("listbox", {
      name: "Framework modifier guard options"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");
  }
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <ImeGuardComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework IME guard"
    });
    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", {
      name: "Framework IME guard options"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    fireEvent.keyDown(input, {
      key: "End",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    fireEvent.keyDown(input, {
      key: "Home",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    fireEvent.keyDown(input, {
      key: "Enter",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    fireEvent.keyDown(input, {
      key: "Escape",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByRole("listbox", {
      name: "Framework IME guard options"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    dispatchLegacyImeKeyDown(input, "ArrowDown");
    dispatchLegacyImeKeyDown(input, "End");
    dispatchLegacyImeKeyDown(input, "Home");
    dispatchLegacyImeKeyDown(input, "Enter");
    dispatchLegacyImeKeyDown(input, "Escape");
    await expect(canvas.getByRole("listbox", {
      name: "Framework IME guard options"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    await userEvent.clear(input);
    await userEvent.type(input, "vu");
    const vueOption = canvas.getByRole("option", {
      name: "Vue"
    });
    await expect(vueOption).toBeInTheDocument();
    await userEvent.click(vueOption);
    await expect(canvas.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue");
  }
}`,...(le=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,de,me;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ariaLabel: "   "
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Combobox"
    });
    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", {
      name: "Combobox options"
    })).toBeInTheDocument();
  }
}`,...(me=(de=L.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,be,ye;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Framework focus model"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework focus model"
    });
    await userEvent.click(input);
    const option = canvas.getByRole("option", {
      name: "React"
    });
    await expect(option).toHaveAttribute("tabindex", "-1");
    await userEvent.click(option);
    await expect(input).toHaveFocus();
  }
}`,...(ye=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,ve,xe;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Framework disabled",
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework disabled"
    });
    await userEvent.click(input);
    await expect(canvas.queryByRole("listbox")).toBeNull();
  }
}`,...(xe=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var fe,ge,ke;K.parameters={...K.parameters,docs:{...(fe=K.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    display: "grid",
    gap: 10
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores combobox
        focus-visible state.
      </p>
      <button type="button">Before combobox</button>
      <Combobox options={frameworkOptions} onValueChange={() => {}} ariaLabel="Focus intent combobox" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before combobox"
    });
    const input = canvas.getByRole("combobox", {
      name: "Focus intent combobox"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(ke=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};const Ne=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","BlankAriaLabelFallback","ActivedescendantFocusModel","DisabledState","FocusIntentReentry"];export{S as ActivedescendantFocusModel,L as BlankAriaLabelFallback,F as Controlled,q as DisabledState,K as FocusIntentReentry,M as ImeCompositionGuard,A as KeyboardDismissPaths,j as ModifierKeyGuard,H as WithCustomEmptyMessage,Ne as __namedExportsOrder,Oe as default};
