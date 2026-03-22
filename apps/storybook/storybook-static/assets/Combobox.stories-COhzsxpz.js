import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{I as Pe}from"./Input-CMwa0OIu.js";import{B as _}from"./Badge-ZJmMstsz.js";import{within as f,userEvent as c,expect as o,fireEvent as x}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function Y(e,t,n){var p;if(e.length===0)return-1;let u=t;for(let I=0;I<e.length;I+=1)if(u=(u+n+e.length)%e.length,!((p=e[u])!=null&&p.disabled))return u;return-1}function Z(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function qe(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function He(e){return typeof e!="number"||e<=0}function Ve(e){if(!He(e.button))return!1;const t=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&t===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function g({options:e,value:t,defaultValue:n,onValueChange:u,placeholder:p="Search option...",emptyMessage:I="No option found.",disabled:w=!1,id:Ae,ariaLabel:N="Combobox"}){const T=l.useId(),R=l.useRef(null),$=l.useRef(null),[m,b]=l.useState(!1),[k,v]=l.useState(-1),[G,z]=l.useState(""),[je,Se]=l.useState(n);l.useRef(null);const U=typeof N=="string"&&N.trim().length>0?N.trim():"Combobox",Me=`${U} options`,E=t??je,F=l.useMemo(()=>e.find(a=>a.value===E),[E,e]);l.useEffect(()=>{m||z((F==null?void 0:F.label)??"")},[m,F]),l.useEffect(()=>{},[e]),l.useEffect(()=>{w&&(b(!1),v(-1))},[w]),l.useEffect(()=>{var r;if(!m)return;const a=((r=R.current)==null?void 0:r.ownerDocument)??document,i=B=>{var y;Ve(B)&&(B.defaultPrevented||(y=R.current)!=null&&y.contains(B.target)||b(!1))};return a.addEventListener("pointerdown",i),()=>{a.removeEventListener("pointerdown",i)}},[m]);const d=l.useMemo(()=>{const a=ee(G);return a?e.filter(i=>ee([i.label,...i.keywords??[]].join(" ")).includes(a)):e},[e,G]),W=l.useMemo(()=>d.reduce((a,i)=>i.disabled?a:a+1,0),[d]),Q=W>1,J=m&&W>0,Le=l.useMemo(()=>{if(w)return;if(!m)return"Enter";const a=[];return Q&&a.push("ArrowDown","ArrowUp","Home","End"),J&&a.push("Enter"),m&&a.push("Escape"),a.length>0?a.join(" "):void 0},[Q,J,w,m]),Ke=l.useMemo(()=>{const a=new Map;return d.map(i=>{const r=a.get(i.value)??0;return a.set(i.value,r+1),r===0?i.value:`${i.value}__duplicate-${r}`})},[d]);l.useEffect(()=>{if(!m){v(-1);return}const a=d.findIndex(r=>r.value===E&&!r.disabled);if(a>=0){v(a);return}const i=d.findIndex(r=>!r.disabled);v(i)},[E,d,m]);const X=a=>{w||a.disabled||(t===void 0&&Se(a.value),u==null||u(a.value),b(!1))},H=m&&d.length>0;return s.jsxs("div",{ref:R,style:{display:"grid",gap:8},children:[s.jsx(Pe,{ref:$,id:Ae,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":H,"aria-controls":H?T:void 0,"aria-activedescendant":H&&k>=0?`${T}-option-${k}`:void 0,"aria-keyshortcuts":Le,"aria-label":U,autoComplete:"off",value:G,disabled:w,placeholder:p,onFocus:()=>{w||b(!0)},onBlur:a=>{var i;(i=R.current)!=null&&i.contains(a.relatedTarget)||b(!1)},onChange:a=>{w||(z(a.target.value),b(!0))},onKeyDown:a=>{var i;if(!w&&!(Z(a.key)&&qe(a))&&!((a.altKey||a.ctrlKey||a.metaKey)&&Z(a.key))){if(a.key==="Escape"){b(!1);return}if(a.key==="ArrowDown"){a.preventDefault(),b(!0),v(r=>Y(d,r<0?-1:r,1));return}if(a.key==="ArrowUp"){a.preventDefault(),b(!0),v(r=>Y(d,r<0?0:r,-1));return}if(a.key==="Home"){a.preventDefault(),b(!0),v(d.findIndex(r=>!r.disabled));return}if(a.key==="End"){a.preventDefault(),b(!0);for(let r=d.length-1;r>=0;r-=1)if(!((i=d[r])!=null&&i.disabled)){v(r);return}}if(a.key==="Enter"&&m&&k>=0){a.preventDefault();const r=d[k];r&&X(r)}}}}),H?s.jsx("div",{id:T,role:"listbox","aria-label":Me,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.map((a,i)=>{const r=i===k,B=a.value===E;return s.jsx("button",{id:`${T}-option-${i}`,type:"button",role:"option",tabIndex:-1,"aria-selected":B,"aria-disabled":a.disabled||void 0,disabled:a.disabled,onMouseDown:y=>{var C;y.button!==0||y.ctrlKey||a.disabled||(y.preventDefault(),(C=$.current)==null||C.focus())},onPointerDown:y=>{var C;a.disabled||y.pointerType==="mouse"||!He(y.button)||y.ctrlKey||(y.preventDefault(),(C=$.current)==null||C.focus())},onMouseEnter:()=>{a.disabled||v(i)},onClick:()=>X(a),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:r?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:a.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:a.disabled?"not-allowed":"pointer"},children:a.label},Ke[i]??`${a.value}__index-${i}`)})}):m?s.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:I}):null]})}function ee(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}g.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const h=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}];function D(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}const Xe={title:"Form/Combobox",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:h,onValueChange:()=>{}}};function Oe(){const[e,t]=l.useState("react");return s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),s.jsx(_,{tone:"default",children:e})]}),s.jsx(g,{id:"framework-combobox",options:h,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const A={render:()=>s.jsx(Oe,{}),play:async({canvasElement:e})=>{const t=f(e),n=t.getByRole("combobox",{name:"Framework"});await c.click(n),await c.clear(n),await c.type(n,"sv"),await c.keyboard("{ArrowDown}{Enter}"),await o(t.getByText("svelte")).toBeInTheDocument()}},j={args:{options:h,emptyMessage:"No framework match."}},S={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=f(e),n=e.ownerDocument,u=t.getByRole("combobox",{name:"Framework dismiss demo"});await o(u).not.toHaveAttribute("aria-controls"),await c.click(u);const p=t.getByRole("listbox",{name:"Framework dismiss demo options"});await o(u).toHaveAttribute("aria-controls",p.id),n.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(t.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.queryByRole("listbox")).not.toBeInTheDocument(),await o(u).not.toHaveAttribute("aria-controls")}};function Ne(){const[e,t]=l.useState("react");return s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),s.jsx(_,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),s.jsx(g,{options:h,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const M={render:()=>s.jsx(Ne,{}),play:async({canvasElement:e})=>{const t=f(e),n=t.getByRole("combobox",{name:"Framework modifier guard"});await c.click(n),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await c.keyboard("{Control>}{ArrowDown}{/Control}"),await c.keyboard("{Control>}{Enter}{/Control}"),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Meta>}{Escape}{/Meta}"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function $e(){const[e,t]=l.useState("react");return s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),s.jsx(_,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),s.jsx(g,{options:h,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}const L={render:()=>s.jsx($e,{}),play:async({canvasElement:e})=>{const t=f(e),n=t.getByRole("combobox",{name:"Framework IME guard"});await c.click(n),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(n).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),x.keyDown(n,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),x.keyDown(n,{key:"End",isComposing:!0,keyCode:229,which:229}),x.keyDown(n,{key:"Home",isComposing:!0,keyCode:229,which:229}),x.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),x.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(n).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),D(n,"ArrowDown"),D(n,"End"),D(n,"Home"),D(n,"Enter"),D(n,"Escape"),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(n).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await c.clear(n),await c.type(n,"vu");const u=t.getByRole("option",{name:"Vue"});await o(u).toBeInTheDocument(),await c.click(u),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},K={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=f(e),n=t.getByRole("combobox",{name:"Combobox"});await c.click(n),await o(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},P={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=f(e),n=t.getByRole("combobox",{name:"Framework focus model"});await c.click(n);const u=t.getByRole("option",{name:"React"});await o(u).toHaveAttribute("tabindex","-1");const p=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(p,"button",{configurable:!0,value:-1}),Object.defineProperty(p,"pointerType",{configurable:!0,value:"touch"}),u.dispatchEvent(p),await o(p.defaultPrevented).toBe(!0),await o(n).toHaveFocus(),await c.click(u),await o(n).toHaveFocus()}},q={args:{ariaLabel:"Release search"},render:e=>s.jsx(g,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const t=f(e),n=t.getByRole("combobox",{name:"Release search"});await c.click(n),await o(n).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await c.clear(n),await c.type(n,"cafe launch"),await o(t.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await o(n).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await c.clear(n),await c.type(n,"no-match"),await o(n).toHaveAttribute("aria-keyshortcuts","Escape")}},V={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=f(e),n=t.getByRole("combobox",{name:"Framework disabled"});await c.click(n),await o(t.queryByRole("listbox")).toBeNull()}},O={render:()=>s.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[s.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),s.jsx("button",{type:"button",children:"Before combobox"}),s.jsx(g,{options:h,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=f(e),n=await t.findByRole("button",{name:"Before combobox"}),u=t.getByRole("combobox",{name:"Focus intent combobox"});await c.click(n),await c.tab(),await o(u).toHaveFocus(),await o(u).toHaveAttribute("data-focus-visible","true"),x.mouseDown(u,{button:0,ctrlKey:!0}),await o(u).toHaveAttribute("data-focus-visible","true")}};var te,ae,ne;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,re,se;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,ue;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Framework dismiss demo"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const ownerDocument = canvasElement.ownerDocument;
    const input = canvas.getByRole("combobox", {
      name: "Framework dismiss demo"
    });
    await expect(input).not.toHaveAttribute("aria-controls");
    await userEvent.click(input);
    const listbox = canvas.getByRole("listbox", {
      name: "Framework dismiss demo options"
    });
    await expect(input).toHaveAttribute("aria-controls", listbox.id);
    ownerDocument.body.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      button: 0,
      ctrlKey: true,
      pointerType: "mouse"
    }));
    await expect(canvas.getByRole("listbox", {
      name: "Framework dismiss demo options"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("listbox")).not.toBeInTheDocument();
    await expect(input).not.toHaveAttribute("aria-controls");
  }
}`,...(ue=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var le,de,me;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(de=M.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,be,ye;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(be=L.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,ve,fe;K.parameters={...K.parameters,docs:{...(we=K.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(fe=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ge,xe,he;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
    const touchPointerDown = new Event("pointerdown", {
      bubbles: true,
      cancelable: true
    });
    Object.defineProperty(touchPointerDown, "button", {
      configurable: true,
      value: -1
    });
    Object.defineProperty(touchPointerDown, "pointerType", {
      configurable: true,
      value: "touch"
    });
    option.dispatchEvent(touchPointerDown);
    await expect(touchPointerDown.defaultPrevented).toBe(true);
    await expect(input).toHaveFocus();
    await userEvent.click(option);
    await expect(input).toHaveFocus();
  }
}`,...(he=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ke,Ee,Be;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Release search"
  },
  render: args => <Combobox {...args} options={[{
    value: "cafe-launch",
    label: "Café Launch",
    keywords: ["déploiement", "release"]
  }, {
    value: "release-notes",
    label: "Release Notes",
    keywords: ["notes"]
  }]} onValueChange={() => {}} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Release search"
    });
    await userEvent.click(input);
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End Enter Escape");
    await userEvent.clear(input);
    await userEvent.type(input, "cafe launch");
    await expect(canvas.getByRole("option", {
      name: "Café Launch"
    })).toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter Escape");
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Escape");
  }
}`,...(Be=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Ce,De,Ie;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Te,Re,Fe;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(input, {
      button: 0,
      ctrlKey: true
    });
    await expect(input).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(Fe=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Fe.source}}};const Ye=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","BlankAriaLabelFallback","ActivedescendantFocusModel","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{P as ActivedescendantFocusModel,K as BlankAriaLabelFallback,A as Controlled,V as DisabledState,O as FocusIntentReentry,L as ImeCompositionGuard,S as KeyboardDismissPaths,M as ModifierKeyGuard,q as SearchNormalizationAndShortcutHints,j as WithCustomEmptyMessage,Ye as __namedExportsOrder,Xe as default};
