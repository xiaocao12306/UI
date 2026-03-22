import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{I as ya}from"./Input-ueoPJ8SP.js";import{B as ae}from"./Badge-ZJmMstsz.js";import{within as p,userEvent as s,expect as o,fireEvent as f}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function se(e,a,t){var y;if(e.length===0)return-1;let i=a;for(let H=0;H<e.length;H+=1)if(i=(i+t+e.length)%e.length,!((y=e[i])!=null&&y.disabled))return i;return-1}function ce(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function va(e){const a=e.nativeEvent;return a.isComposing?!0:typeof a.keyCode=="number"&&a.keyCode===229}function le(e){if(e.key!=="Home"&&e.key!=="End")return!0;const a=e.currentTarget,t=a.selectionStart,i=a.selectionEnd;return t===null||i===null?!0:t!==i?!1:e.key==="Home"?t===0:i===a.value.length}function na(e){return typeof e!="number"||e<=0}function wa(e){if(!na(e.button))return!1;const a=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&a===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function b({options:e,value:a,defaultValue:t,onValueChange:i,placeholder:y="Search option...",emptyMessage:H="No option found.",disabled:w=!1,id:oa,ariaLabel:ra="Combobox",ariaLabelledBy:ia}){const A=l.useId(),F=l.useRef(null),J=l.useRef(null),[m,v]=l.useState(!1),[B,g]=l.useState(-1),[X,te]=l.useState(""),[sa,ca]=l.useState(t);l.useRef(null),l.useRef(null),l.useRef(null);const Y=k(ia),Z=Y===void 0?k(ra,"Combobox"):void 0,la=Z===void 0?void 0:`${Z} options`,R=a??sa,ee=l.useMemo(()=>e.find(n=>n.value===R),[R,e]);l.useEffect(()=>{m||te(ee?de(ee):"")},[m,ee]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{w&&(v(!1),g(-1))},[w]),l.useEffect(()=>{var c;if(!m)return;const n=((c=F.current)==null?void 0:c.ownerDocument)??document,u=C=>{var D;wa(C)&&(C.defaultPrevented||(D=F.current)!=null&&D.contains(C.target)||v(!1))};return n.addEventListener("pointerdown",u),()=>{n.removeEventListener("pointerdown",u)}},[m]);const d=l.useMemo(()=>{const n=ue(X);return n?e.filter(u=>ue([de(u),...u.keywords??[]].join(" ")).includes(n)):e},[e,X]),ne=l.useMemo(()=>d.reduce((n,u)=>u.disabled?n:n+1,0),[d]),oe=ne>1,re=m&&ne>0,ua=l.useMemo(()=>{if(w)return;if(!m)return"Enter";const n=[];return oe&&n.push("ArrowDown","ArrowUp","Home","End"),re&&n.push("Enter"),m&&n.push("Escape"),n.length>0?n.join(" "):void 0},[oe,re,w,m]),da=l.useMemo(()=>{const n=new Map;return d.map(u=>{const c=n.get(u.value)??0;return n.set(u.value,c+1),c===0?u.value:`${u.value}__duplicate-${c}`})},[d]);l.useEffect(()=>{if(!m){g(-1);return}const n=d.findIndex(c=>c.value===R&&!c.disabled);if(n>=0){g(n);return}const u=d.findIndex(c=>!c.disabled);g(u)},[R,d,m]);const ie=n=>{w||n.disabled||(a===void 0&&ca(n.value),i==null||i(n.value),v(!1))},L=m&&d.length>0;return r.jsxs("div",{ref:F,style:{display:"grid",gap:8},children:[r.jsx(ya,{ref:J,id:oa,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":L,"aria-controls":L?A:void 0,"aria-activedescendant":L&&B>=0?`${A}-option-${B}`:void 0,"aria-keyshortcuts":ua,"aria-label":Z,"aria-labelledby":Y,autoComplete:"off",value:X,disabled:w,placeholder:y,onFocus:()=>{w||v(!0)},onBlur:n=>{var u;(u=F.current)!=null&&u.contains(n.relatedTarget)||v(!1)},onChange:n=>{w||(te(n.target.value),v(!0))},onKeyDown:n=>{var u;if(!w&&!(ce(n.key)&&va(n))&&!((n.altKey||n.ctrlKey||n.metaKey)&&ce(n.key))){if(n.key==="Escape"){v(!1);return}if(n.key==="ArrowDown"){n.preventDefault(),v(!0),g(c=>se(d,c<0?-1:c,1));return}if(n.key==="ArrowUp"){n.preventDefault(),v(!0),g(c=>se(d,c<0?0:c,-1));return}if(n.key==="Home"){if(!le(n))return;n.preventDefault(),v(!0),g(d.findIndex(c=>!c.disabled));return}if(n.key==="End"){if(!le(n))return;n.preventDefault(),v(!0);for(let c=d.length-1;c>=0;c-=1)if(!((u=d[c])!=null&&u.disabled)){g(c);return}}if(n.key==="Enter"&&m&&B>=0){n.preventDefault();const c=d[B];c&&ie(c)}}}}),L?r.jsx("div",{id:A,role:"listbox","aria-label":la,"aria-labelledby":Y,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.map((n,u)=>{const c=u===B,C=n.value===R,D=k(n.ariaLabelledBy),pa=Q(n.label).length>0,ma=k(n.textValue),ba=D===void 0?k(n.ariaLabel,pa?void 0:ma):void 0;return r.jsx("button",{id:`${A}-option-${u}`,type:"button",role:"option",tabIndex:-1,"aria-labelledby":D,"aria-label":ba,"aria-selected":C,"aria-disabled":n.disabled||void 0,disabled:n.disabled,onMouseDown:x=>{var T;x.button!==0||x.ctrlKey||n.disabled||(x.preventDefault(),(T=J.current)==null||T.focus())},onPointerDown:x=>{var T;n.disabled||x.pointerType==="mouse"||!na(x.button)||x.ctrlKey||(x.preventDefault(),(T=J.current)==null||T.focus())},onMouseEnter:()=>{n.disabled||g(u)},onClick:()=>ie(n),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:c?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:n.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:n.disabled?"not-allowed":"pointer"},children:n.label},da[u]??`${n.value}__index-${u}`)})}):m?r.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:H}):null]})}function ue(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function de(e){const a=k(e.textValue);if(a!==void 0)return E(a);const t=k(e.ariaLabel);if(t!==void 0)return E(t);const i=Q(e.label);return i.length>0?i:E(e.value)}function Q(e){if(typeof e=="string")return E(e);if(typeof e=="number")return E(String(e));if(Array.isArray(e))return E(e.map(t=>Q(t)).filter(t=>t.length>0).join(" "));if(!l.isValidElement(e))return"";const a=e.props;return a["aria-hidden"]===!0||a["aria-hidden"]==="true"?"":typeof a["aria-label"]=="string"&&a["aria-label"].trim().length>0?E(a["aria-label"]):Q(a.children)}function k(e,a){return typeof e=="string"&&e.trim().length>0?e.trim():a}function E(e){return e.replace(/\s+/g," ").trim()}b.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const h=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],ga=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release",ariaLabelledBy:"combobox-option-heading",textValue:"Deploy release",keywords:["release","ship"]},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release",textValue:"Rollback release",keywords:["undo","revert"]}],xa=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release"},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release"}],fa=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),textValue:"Deploy release"},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),textValue:"Rollback release"}];function I(e,a){const t=new KeyboardEvent("keydown",{key:a,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const ja={title:"Form/Combobox",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:h,onValueChange:()=>{}}};function ha(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(ae,{tone:"default",children:e})]}),r.jsx(b,{id:"framework-combobox",options:h,value:e,onValueChange:a,ariaLabel:"Framework"})]})}const j={render:()=>r.jsx(ha,{}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Framework"});await s.click(t),await s.clear(t),await s.type(t,"sv"),await s.keyboard("{ArrowDown}{Enter}"),await o(a.getByText("svelte")).toBeInTheDocument()}},S={args:{options:h,emptyMessage:"No framework match."}},O={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const a=p(e),t=e.ownerDocument,i=a.getByRole("combobox",{name:"Framework dismiss demo"});await o(i).not.toHaveAttribute("aria-controls"),await s.click(i);const y=a.getByRole("listbox",{name:"Framework dismiss demo options"});await o(i).toHaveAttribute("aria-controls",y.id),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(a.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(a.queryByRole("listbox")).not.toBeInTheDocument(),await o(i).not.toHaveAttribute("aria-controls")}};function ka(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(ae,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),r.jsx(b,{options:h,value:e,onValueChange:a,ariaLabel:"Framework modifier guard"})]})}const V={render:()=>r.jsx(ka,{}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Framework modifier guard"});await s.click(t),await o(a.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Control>}{ArrowDown}{/Control}"),await s.keyboard("{Control>}{Enter}{/Control}"),await o(a.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await o(a.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Meta>}{Escape}{/Meta}"),await o(a.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(a.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await o(a.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function Ea(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(ae,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),r.jsx(b,{options:h,value:e,onValueChange:a,ariaLabel:"Framework IME guard"})]})}function Ba(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"When caret is inside query text, Home/End should keep native editing behavior instead of hijacking option focus."}),r.jsx(b,{options:h,value:e,onValueChange:a,ariaLabel:"Framework caret priority"})]})}const M={render:()=>r.jsx(Ea,{}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Framework IME guard"});await s.click(t),await o(a.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),f.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"End",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"Home",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(a.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),I(t,"ArrowDown"),I(t,"End"),I(t,"Home"),I(t,"Enter"),I(t,"Escape"),await o(a.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await s.clear(t),await s.type(t,"vu");const i=a.getByRole("option",{name:"Vue"});await o(i).toBeInTheDocument(),await s.click(i),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},P={render:()=>r.jsx(Ba,{}),play:async({canvasElement:e})=>{const t=p(e).getByRole("combobox",{name:"Framework caret priority"});await s.click(t),await s.clear(t),await s.type(t,"ve"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),t.setSelectionRange(1,1),f.keyDown(t,{key:"Home"}),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),f.keyDown(t,{key:"End"}),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0"))}},q={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Combobox"});await s.click(t),await o(a.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function Ra(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),r.jsx(b,{options:h,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const K={render:()=>r.jsx(Ra,{}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Framework heading"});await o(t).toHaveAttribute("aria-labelledby","framework-heading"),await o(t).not.toHaveAttribute("aria-label"),await s.click(t);const i=a.getByRole("listbox",{name:"Framework heading"});await o(i).toHaveAttribute("aria-labelledby","framework-heading"),await o(i).not.toHaveAttribute("aria-label")}};function Ca(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"combobox-option-heading",style:{margin:0},children:"Deploy release"}),r.jsx(b,{options:ga,onValueChange:()=>{},ariaLabel:"Release actions"})]})}const N={render:()=>r.jsx(Ca,{}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Release actions"});await s.click(t);const i=a.getByRole("option",{name:"Deploy release"});await o(i).toHaveAttribute("aria-labelledby","combobox-option-heading"),await o(i).not.toHaveAttribute("aria-label")}},z={render:()=>r.jsx(b,{options:xa,onValueChange:()=>{},ariaLabel:"Release search fallback"}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Release search fallback"});await s.click(t),await s.clear(t),await s.type(t,"rollback"),await o(a.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await o(a.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},$={render:()=>r.jsx(b,{options:fa,onValueChange:()=>{},ariaLabel:"Release textValue fallback"}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Release textValue fallback"});await s.click(t);const i=a.getByRole("option",{name:"Deploy release"});await o(i).toHaveAttribute("aria-label","Deploy release"),await s.clear(t),await s.type(t,"rollback"),await o(a.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await o(a.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},G={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Framework focus model"});await s.click(t);const i=a.getByRole("option",{name:"React"});await o(i).toHaveAttribute("tabindex","-1");const y=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(y,"button",{configurable:!0,value:-1}),Object.defineProperty(y,"pointerType",{configurable:!0,value:"touch"}),i.dispatchEvent(y),await o(y.defaultPrevented).toBe(!0),await o(t).toHaveFocus(),await s.click(i),await o(t).toHaveFocus()}},_={args:{ariaLabel:"Release search"},render:e=>r.jsx(b,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Release search"});await s.click(t),await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await s.clear(t),await s.type(t,"cafe launch"),await o(a.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await o(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await s.clear(t),await s.type(t,"no-match"),await o(t).toHaveAttribute("aria-keyshortcuts","Escape")}},U={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const a=p(e),t=a.getByRole("combobox",{name:"Framework disabled"});await s.click(t),await o(a.queryByRole("listbox")).toBeNull()}},W={render:()=>r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),r.jsx("button",{type:"button",children:"Before combobox"}),r.jsx(b,{options:h,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const a=p(e),t=await a.findByRole("button",{name:"Before combobox"}),i=a.getByRole("combobox",{name:"Focus intent combobox"});await s.click(t),await s.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),f.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var pe,me,be;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(me=j.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,ve,we;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(we=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ge,xe,fe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var he,ke,Ee;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Be,Re,Ce;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ce=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var De,Te,Ie;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <HomeEndCaretPriorityComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework caret priority"
    }) as HTMLInputElement;
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "ve");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    input.setSelectionRange(1, 1);
    fireEvent.keyDown(input, {
      key: "Home"
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    fireEvent.keyDown(input, {
      key: "End"
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  }
}`,...(Ie=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var He,Ae,Fe;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Fe=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var Le,je,Se;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Se=(je=K.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Oe,Ve,Me;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <IconOptionLabelledByComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Release actions"
    });
    await userEvent.click(input);
    const deployOption = canvas.getByRole("option", {
      name: "Deploy release"
    });
    await expect(deployOption).toHaveAttribute("aria-labelledby", "combobox-option-heading");
    await expect(deployOption).not.toHaveAttribute("aria-label");
  }
}`,...(Me=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var Pe,qe,Ke;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <Combobox options={iconOptionAriaLabelSearchOptions} onValueChange={() => {}} ariaLabel="Release search fallback" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Release search fallback"
    });
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "rollback");
    await expect(canvas.getByRole("option", {
      name: "Rollback release"
    })).toBeInTheDocument();
    await expect(canvas.queryByRole("option", {
      name: "Deploy release"
    })).not.toBeInTheDocument();
  }
}`,...(Ke=(qe=z.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ne,ze,$e;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <Combobox options={iconOptionTextValueNameFallbackOptions} onValueChange={() => {}} ariaLabel="Release textValue fallback" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Release textValue fallback"
    });
    await userEvent.click(input);
    const deployOption = canvas.getByRole("option", {
      name: "Deploy release"
    });
    await expect(deployOption).toHaveAttribute("aria-label", "Deploy release");
    await userEvent.clear(input);
    await userEvent.type(input, "rollback");
    await expect(canvas.getByRole("option", {
      name: "Rollback release"
    })).toBeInTheDocument();
    await expect(canvas.queryByRole("option", {
      name: "Deploy release"
    })).not.toBeInTheDocument();
  }
}`,...($e=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Ge,_e,Ue;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var We,Qe,Je;_.parameters={..._.parameters,docs:{...(We=_.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Je=(Qe=_.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;U.parameters={...U.parameters,docs:{...(Xe=U.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=U.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,ta;W.parameters={...W.parameters,docs:{...(ea=W.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=W.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};const Sa=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","HomeEndCaretPriority","BlankAriaLabelFallback","LabelledByNameFallback","IconOptionLabelledByPrecedence","IconOptionAriaLabelSearchFallback","IconOptionTextValueNameFallback","ActivedescendantFocusModel","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{G as ActivedescendantFocusModel,q as BlankAriaLabelFallback,j as Controlled,U as DisabledState,W as FocusIntentReentry,P as HomeEndCaretPriority,z as IconOptionAriaLabelSearchFallback,N as IconOptionLabelledByPrecedence,$ as IconOptionTextValueNameFallback,M as ImeCompositionGuard,O as KeyboardDismissPaths,K as LabelledByNameFallback,V as ModifierKeyGuard,_ as SearchNormalizationAndShortcutHints,S as WithCustomEmptyMessage,Sa as __namedExportsOrder,ja as default};
