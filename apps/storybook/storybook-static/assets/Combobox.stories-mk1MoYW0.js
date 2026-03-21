import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{I as Ee}from"./Input-o58Aer5Z.js";import{B as N}from"./Badge-ZJmMstsz.js";import{within as w,userEvent as s,expect as n,fireEvent as k}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function U(e,t,o){var B;if(e.length===0)return-1;let u=t;for(let I=0;I<e.length;I+=1)if(u=(u+o+e.length)%e.length,!((B=e[u])!=null&&B.disabled))return u;return-1}function W(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function he(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Ce(e){return!((typeof e.button=="number"?e.button:0)>0||(e.pointerType==="mouse"||e.pointerType==="")&&(typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1)||e.ctrlKey))}function h({options:e,value:t,defaultValue:o,onValueChange:u,placeholder:B="Search option...",emptyMessage:I="No option found.",disabled:y=!1,id:ge,ariaLabel:K="Combobox"}){const D=c.useId(),T=c.useRef(null),O=c.useRef(null),[d,m]=c.useState(!1),[v,b]=c.useState(-1),[V,G]=c.useState(""),[xe,fe]=c.useState(o);c.useRef(null);const P=typeof K=="string"&&K.trim().length>0?K.trim():"Combobox",ke=`${P} options`,g=t??xe,R=c.useMemo(()=>e.find(a=>a.value===g),[g,e]);c.useEffect(()=>{d||G((R==null?void 0:R.label)??"")},[d,R]),c.useEffect(()=>{},[e]),c.useEffect(()=>{y&&(m(!1),b(-1))},[y]),c.useEffect(()=>{var r;if(!d)return;const a=((r=T.current)==null?void 0:r.ownerDocument)??document,l=x=>{var f;Ce(x)&&(x.defaultPrevented||(f=T.current)!=null&&f.contains(x.target)||m(!1))};return a.addEventListener("pointerdown",l),()=>{a.removeEventListener("pointerdown",l)}},[d]);const p=c.useMemo(()=>{const a=V.trim().toLowerCase();return a?e.filter(l=>[l.label,...l.keywords??[]].join(" ").toLowerCase().includes(a)):e},[e,V]);c.useEffect(()=>{if(!d){b(-1);return}const a=p.findIndex(r=>r.value===g&&!r.disabled);if(a>=0){b(a);return}const l=p.findIndex(r=>!r.disabled);b(l)},[g,p,d]);const $=a=>{y||a.disabled||(t===void 0&&fe(a.value),u==null||u(a.value),m(!1))};return i.jsxs("div",{ref:T,style:{display:"grid",gap:8},children:[i.jsx(Ee,{ref:O,id:ge,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":d,"aria-controls":d?D:void 0,"aria-activedescendant":d&&v>=0?`${D}-option-${v}`:void 0,"aria-label":P,autoComplete:"off",value:V,disabled:y,placeholder:B,onFocus:()=>{y||m(!0)},onBlur:a=>{var l;(l=T.current)!=null&&l.contains(a.relatedTarget)||m(!1)},onChange:a=>{y||(G(a.target.value),m(!0))},onKeyDown:a=>{var l;if(!y&&!(W(a.key)&&he(a))&&!((a.altKey||a.ctrlKey||a.metaKey)&&W(a.key))){if(a.key==="Escape"){m(!1);return}if(a.key==="ArrowDown"){a.preventDefault(),m(!0),b(r=>U(p,r<0?-1:r,1));return}if(a.key==="ArrowUp"){a.preventDefault(),m(!0),b(r=>U(p,r<0?0:r,-1));return}if(a.key==="Home"){a.preventDefault(),m(!0),b(p.findIndex(r=>!r.disabled));return}if(a.key==="End"){a.preventDefault(),m(!0);for(let r=p.length-1;r>=0;r-=1)if(!((l=p[r])!=null&&l.disabled)){b(r);return}}if(a.key==="Enter"&&d&&v>=0){a.preventDefault();const r=p[v];r&&$(r)}}}}),d?i.jsx("div",{id:D,role:"listbox","aria-label":ke,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:p.length>0?p.map((a,l)=>{const r=l===v,x=a.value===g;return i.jsx("button",{id:`${D}-option-${l}`,type:"button",role:"option",tabIndex:-1,"aria-selected":x,"aria-disabled":a.disabled||void 0,disabled:a.disabled,onMouseDown:f=>{var _;f.button!==0||a.disabled||(f.preventDefault(),(_=O.current)==null||_.focus())},onMouseEnter:()=>{a.disabled||b(l)},onClick:()=>$(a),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:r?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:a.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:a.disabled?"not-allowed":"pointer"},children:a.label},a.value)}):i.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:I})}):null]})}h.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const C=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}];function E(e,t){const o=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(o,"keyCode",{value:229}),e.dispatchEvent(o)}const Le={title:"Form/Combobox",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:C,onValueChange:()=>{}}};function Be(){const[e,t]=c.useState("react");return i.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),i.jsx(N,{tone:"default",children:e})]}),i.jsx(h,{id:"framework-combobox",options:C,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const F={render:()=>i.jsx(Be,{}),play:async({canvasElement:e})=>{const t=w(e),o=t.getByRole("combobox",{name:"Framework"});await s.click(o),await s.clear(o),await s.type(o,"sv"),await s.keyboard("{ArrowDown}{Enter}"),await n(t.getByText("svelte")).toBeInTheDocument()}},H={args:{options:C,emptyMessage:"No framework match."}},A={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=w(e),o=t.getByRole("combobox",{name:"Framework dismiss demo"});await n(o).not.toHaveAttribute("aria-controls"),await s.click(o);const u=t.getByRole("listbox",{name:"Framework dismiss demo options"});await n(o).toHaveAttribute("aria-controls",u.id),await s.keyboard("{Escape}"),await n(t.queryByRole("listbox")).not.toBeInTheDocument(),await n(o).not.toHaveAttribute("aria-controls")}};function Ie(){const[e,t]=c.useState("react");return i.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),i.jsx(N,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),i.jsx(h,{options:C,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const j={render:()=>i.jsx(Ie,{}),play:async({canvasElement:e})=>{const t=w(e),o=t.getByRole("combobox",{name:"Framework modifier guard"});await s.click(o),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Control>}{ArrowDown}{/Control}"),await s.keyboard("{Control>}{Enter}{/Control}"),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Meta>}{Escape}{/Meta}"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function De(){const[e,t]=c.useState("react");return i.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),i.jsx(N,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),i.jsx(h,{options:C,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}const M={render:()=>i.jsx(De,{}),play:async({canvasElement:e})=>{const t=w(e),o=t.getByRole("combobox",{name:"Framework IME guard"});await s.click(o),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(o).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),k.keyDown(o,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),k.keyDown(o,{key:"End",isComposing:!0,keyCode:229,which:229}),k.keyDown(o,{key:"Home",isComposing:!0,keyCode:229,which:229}),k.keyDown(o,{key:"Enter",isComposing:!0,keyCode:229,which:229}),k.keyDown(o,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(o).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),E(o,"ArrowDown"),E(o,"End"),E(o,"Home"),E(o,"Enter"),E(o,"Escape"),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(o).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await s.clear(o),await s.type(o,"vu");const u=t.getByRole("option",{name:"Vue"});await n(u).toBeInTheDocument(),await s.click(u),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},L={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=w(e),o=t.getByRole("combobox",{name:"Combobox"});await s.click(o),await n(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},S={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=w(e),o=t.getByRole("combobox",{name:"Framework focus model"});await s.click(o);const u=t.getByRole("option",{name:"React"});await n(u).toHaveAttribute("tabindex","-1"),await s.click(u),await n(o).toHaveFocus()}},q={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=w(e),o=t.getByRole("combobox",{name:"Framework disabled"});await s.click(o),await n(t.queryByRole("listbox")).toBeNull()}};var z,Q,J;F.parameters={...F.parameters,docs:{...(z=F.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,Y,Z;H.parameters={...H.parameters,docs:{...(X=H.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(Z=(Y=H.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,re;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,se,ce;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,ue,de;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,be;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ye,we,ve;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(we=q.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};const Se=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","BlankAriaLabelFallback","ActivedescendantFocusModel","DisabledState"];export{S as ActivedescendantFocusModel,L as BlankAriaLabelFallback,F as Controlled,q as DisabledState,M as ImeCompositionGuard,A as KeyboardDismissPaths,j as ModifierKeyGuard,H as WithCustomEmptyMessage,Se as __namedExportsOrder,Le as default};
