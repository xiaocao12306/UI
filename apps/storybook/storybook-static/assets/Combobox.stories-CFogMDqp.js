import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{I as Ge}from"./Input-CMwa0OIu.js";import{B as Q}from"./Badge-ZJmMstsz.js";import{within as w,userEvent as c,expect as o,fireEvent as h}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function te(e,t,n){var p;if(e.length===0)return-1;let s=t;for(let R=0;R<e.length;R+=1)if(s=(s+n+e.length)%e.length,!((p=e[s])!=null&&p.disabled))return s;return-1}function ae(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function _e(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Ke(e){return typeof e!="number"||e<=0}function ze(e){if(!Ke(e.button))return!1;const t=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&t===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function f({options:e,value:t,defaultValue:n,onValueChange:s,placeholder:p="Search option...",emptyMessage:R="No option found.",disabled:v=!1,id:Pe,ariaLabel:$="Combobox",ariaLabelledBy:G}){const I=u.useId(),T=u.useRef(null),_=u.useRef(null),[m,b]=u.useState(!1),[k,g]=u.useState(-1),[z,J]=u.useState(""),[qe,Ve]=u.useState(n);u.useRef(null);const U=typeof G=="string"&&G.trim().length>0?G.trim():void 0,W=U===void 0?typeof $=="string"&&$.trim().length>0?$.trim():"Combobox":void 0,Ne=W===void 0?void 0:`${W} options`,E=t??qe,F=u.useMemo(()=>e.find(a=>a.value===E),[E,e]);u.useEffect(()=>{m||J((F==null?void 0:F.label)??"")},[m,F]),u.useEffect(()=>{},[e]),u.useEffect(()=>{v&&(b(!1),g(-1))},[v]),u.useEffect(()=>{var i;if(!m)return;const a=((i=T.current)==null?void 0:i.ownerDocument)??document,l=B=>{var y;ze(B)&&(B.defaultPrevented||(y=T.current)!=null&&y.contains(B.target)||b(!1))};return a.addEventListener("pointerdown",l),()=>{a.removeEventListener("pointerdown",l)}},[m]);const d=u.useMemo(()=>{const a=ne(z);return a?e.filter(l=>ne([l.label,...l.keywords??[]].join(" ")).includes(a)):e},[e,z]),X=u.useMemo(()=>d.reduce((a,l)=>l.disabled?a:a+1,0),[d]),Y=X>1,Z=m&&X>0,Oe=u.useMemo(()=>{if(v)return;if(!m)return"Enter";const a=[];return Y&&a.push("ArrowDown","ArrowUp","Home","End"),Z&&a.push("Enter"),m&&a.push("Escape"),a.length>0?a.join(" "):void 0},[Y,Z,v,m]),$e=u.useMemo(()=>{const a=new Map;return d.map(l=>{const i=a.get(l.value)??0;return a.set(l.value,i+1),i===0?l.value:`${l.value}__duplicate-${i}`})},[d]);u.useEffect(()=>{if(!m){g(-1);return}const a=d.findIndex(i=>i.value===E&&!i.disabled);if(a>=0){g(a);return}const l=d.findIndex(i=>!i.disabled);g(l)},[E,d,m]);const ee=a=>{v||a.disabled||(t===void 0&&Ve(a.value),s==null||s(a.value),b(!1))},H=m&&d.length>0;return r.jsxs("div",{ref:T,style:{display:"grid",gap:8},children:[r.jsx(Ge,{ref:_,id:Pe,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":H,"aria-controls":H?I:void 0,"aria-activedescendant":H&&k>=0?`${I}-option-${k}`:void 0,"aria-keyshortcuts":Oe,"aria-label":W,"aria-labelledby":U,autoComplete:"off",value:z,disabled:v,placeholder:p,onFocus:()=>{v||b(!0)},onBlur:a=>{var l;(l=T.current)!=null&&l.contains(a.relatedTarget)||b(!1)},onChange:a=>{v||(J(a.target.value),b(!0))},onKeyDown:a=>{var l;if(!v&&!(ae(a.key)&&_e(a))&&!((a.altKey||a.ctrlKey||a.metaKey)&&ae(a.key))){if(a.key==="Escape"){b(!1);return}if(a.key==="ArrowDown"){a.preventDefault(),b(!0),g(i=>te(d,i<0?-1:i,1));return}if(a.key==="ArrowUp"){a.preventDefault(),b(!0),g(i=>te(d,i<0?0:i,-1));return}if(a.key==="Home"){a.preventDefault(),b(!0),g(d.findIndex(i=>!i.disabled));return}if(a.key==="End"){a.preventDefault(),b(!0);for(let i=d.length-1;i>=0;i-=1)if(!((l=d[i])!=null&&l.disabled)){g(i);return}}if(a.key==="Enter"&&m&&k>=0){a.preventDefault();const i=d[k];i&&ee(i)}}}}),H?r.jsx("div",{id:I,role:"listbox","aria-label":Ne,"aria-labelledby":U,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.map((a,l)=>{const i=l===k,B=a.value===E;return r.jsx("button",{id:`${I}-option-${l}`,type:"button",role:"option",tabIndex:-1,"aria-selected":B,"aria-disabled":a.disabled||void 0,disabled:a.disabled,onMouseDown:y=>{var C;y.button!==0||y.ctrlKey||a.disabled||(y.preventDefault(),(C=_.current)==null||C.focus())},onPointerDown:y=>{var C;a.disabled||y.pointerType==="mouse"||!Ke(y.button)||y.ctrlKey||(y.preventDefault(),(C=_.current)==null||C.focus())},onMouseEnter:()=>{a.disabled||g(l)},onClick:()=>ee(a),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:i?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:a.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:a.disabled?"not-allowed":"pointer"},children:a.label},$e[l]??`${a.value}__index-${l}`)})}):m?r.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:R}):null]})}function ne(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}f.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const x=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}];function D(e,t){const n=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(n,"keyCode",{value:229}),e.dispatchEvent(n)}const ot={title:"Form/Combobox",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:x,onValueChange:()=>{}}};function Ue(){const[e,t]=u.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Q,{tone:"default",children:e})]}),r.jsx(f,{id:"framework-combobox",options:x,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const A={render:()=>r.jsx(Ue,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Framework"});await c.click(n),await c.clear(n),await c.type(n,"sv"),await c.keyboard("{ArrowDown}{Enter}"),await o(t.getByText("svelte")).toBeInTheDocument()}},j={args:{options:x,emptyMessage:"No framework match."}},L={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=w(e),n=e.ownerDocument,s=t.getByRole("combobox",{name:"Framework dismiss demo"});await o(s).not.toHaveAttribute("aria-controls"),await c.click(s);const p=t.getByRole("listbox",{name:"Framework dismiss demo options"});await o(s).toHaveAttribute("aria-controls",p.id),n.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(t.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.queryByRole("listbox")).not.toBeInTheDocument(),await o(s).not.toHaveAttribute("aria-controls")}};function We(){const[e,t]=u.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Q,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),r.jsx(f,{options:x,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const S={render:()=>r.jsx(We,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Framework modifier guard"});await c.click(n),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await c.keyboard("{Control>}{ArrowDown}{/Control}"),await c.keyboard("{Control>}{Enter}{/Control}"),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Meta>}{Escape}{/Meta}"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function Qe(){const[e,t]=u.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Q,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),r.jsx(f,{options:x,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}const M={render:()=>r.jsx(Qe,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Framework IME guard"});await c.click(n),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(n).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),h.keyDown(n,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),h.keyDown(n,{key:"End",isComposing:!0,keyCode:229,which:229}),h.keyDown(n,{key:"Home",isComposing:!0,keyCode:229,which:229}),h.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),h.keyDown(n,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(n).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),D(n,"ArrowDown"),D(n,"End"),D(n,"Home"),D(n,"Enter"),D(n,"Escape"),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(n).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await c.clear(n),await c.type(n,"vu");const s=t.getByRole("option",{name:"Vue"});await o(s).toBeInTheDocument(),await c.click(s),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},K={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Combobox"});await c.click(n),await o(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function Je(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),r.jsx(f,{options:x,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const P={render:()=>r.jsx(Je,{}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Framework heading"});await o(n).toHaveAttribute("aria-labelledby","framework-heading"),await o(n).not.toHaveAttribute("aria-label"),await c.click(n);const s=t.getByRole("listbox",{name:"Framework heading"});await o(s).toHaveAttribute("aria-labelledby","framework-heading"),await o(s).not.toHaveAttribute("aria-label")}},q={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Framework focus model"});await c.click(n);const s=t.getByRole("option",{name:"React"});await o(s).toHaveAttribute("tabindex","-1");const p=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(p,"button",{configurable:!0,value:-1}),Object.defineProperty(p,"pointerType",{configurable:!0,value:"touch"}),s.dispatchEvent(p),await o(p.defaultPrevented).toBe(!0),await o(n).toHaveFocus(),await c.click(s),await o(n).toHaveFocus()}},V={args:{ariaLabel:"Release search"},render:e=>r.jsx(f,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Release search"});await c.click(n),await o(n).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await c.clear(n),await c.type(n,"cafe launch"),await o(t.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await o(n).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await c.clear(n),await c.type(n,"no-match"),await o(n).toHaveAttribute("aria-keyshortcuts","Escape")}},N={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=w(e),n=t.getByRole("combobox",{name:"Framework disabled"});await c.click(n),await o(t.queryByRole("listbox")).toBeNull()}},O={render:()=>r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),r.jsx("button",{type:"button",children:"Before combobox"}),r.jsx(f,{options:x,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=w(e),n=await t.findByRole("button",{name:"Before combobox"}),s=t.getByRole("combobox",{name:"Focus intent combobox"});await c.click(n),await c.tab(),await o(s).toHaveFocus(),await o(s).toHaveAttribute("data-focus-visible","true"),h.mouseDown(s,{button:0,ctrlKey:!0}),await o(s).toHaveAttribute("data-focus-visible","true")}};var oe,re,ie;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,ce,le;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(le=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,de,me;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=L.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,be,ye;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,ve,ge;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ge=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var fe,xe,he;K.parameters={...K.parameters,docs:{...(fe=K.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ke,Ee,Be;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <LabelledByFallbackComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework heading"
    });
    await expect(input).toHaveAttribute("aria-labelledby", "framework-heading");
    await expect(input).not.toHaveAttribute("aria-label");
    await userEvent.click(input);
    const listbox = canvas.getByRole("listbox", {
      name: "Framework heading"
    });
    await expect(listbox).toHaveAttribute("aria-labelledby", "framework-heading");
    await expect(listbox).not.toHaveAttribute("aria-label");
  }
}`,...(Be=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Ce,De,Re;q.parameters={...q.parameters,docs:{...(Ce=q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ie,Te,Fe;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Fe=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var He,Ae,je;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(je=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Le,Se,Me;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Me=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};const rt=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","BlankAriaLabelFallback","LabelledByNameFallback","ActivedescendantFocusModel","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{q as ActivedescendantFocusModel,K as BlankAriaLabelFallback,A as Controlled,N as DisabledState,O as FocusIntentReentry,M as ImeCompositionGuard,L as KeyboardDismissPaths,P as LabelledByNameFallback,S as ModifierKeyGuard,V as SearchNormalizationAndShortcutHints,j as WithCustomEmptyMessage,rt as __namedExportsOrder,ot as default};
