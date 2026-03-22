import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as fa}from"./Button-B21ouHNm.js";import{I as ka}from"./Input-DCFTlK0_.js";import{B as F}from"./Badge-ZJmMstsz.js";import{within as m,userEvent as i,expect as o,fireEvent as f}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function le(e,a,t){var d;if(e.length===0)return-1;let s=a;for(let R=0;R<e.length;R+=1)if(s=(s+t+e.length)%e.length,!((d=e[s])!=null&&d.disabled))return s;return-1}function ue(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function ha(e){const a=e.nativeEvent;return a.isComposing?!0:typeof a.keyCode=="number"&&a.keyCode===229}function de(e){if(e.key!=="Home"&&e.key!=="End")return!0;const a=e.currentTarget,t=a.selectionStart,s=a.selectionEnd;return t===null||s===null?!0:t!==s?!1:e.key==="Home"?t===0:s===a.value.length}function ca(e){return typeof e!="number"||e<=0}function Ea(e){if(!ca(e.button))return!1;const a=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&a===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function y({options:e,value:a,defaultValue:t,onValueChange:s,onInputKeyDown:d,placeholder:R="Search option...",emptyMessage:v="No option found.",disabled:g=!1,id:la,ariaLabel:ua="Combobox",ariaLabelledBy:da}){const L=l.useId(),j=l.useRef(null),Z=l.useRef(null),[b,w]=l.useState(!1),[D,x]=l.useState(-1),[ee,oe]=l.useState(""),[pa,ma]=l.useState(t);l.useRef(null),l.useRef(null),l.useRef(null);const ae=E(da),te=ae===void 0?E(ua,"Combobox"):void 0,ba=te===void 0?void 0:`${te} options`,C=a??pa,ne=l.useMemo(()=>e.find(n=>n.value===C),[C,e]);l.useEffect(()=>{b||oe(ne?me(ne):"")},[b,ne]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{g&&(w(!1),x(-1))},[g]),l.useEffect(()=>{var c;if(!b)return;const n=((c=j.current)==null?void 0:c.ownerDocument)??document,u=T=>{var I;Ea(T)&&(T.defaultPrevented||(I=j.current)!=null&&I.contains(T.target)||w(!1))};return n.addEventListener("pointerdown",u),()=>{n.removeEventListener("pointerdown",u)}},[b]);const p=l.useMemo(()=>{const n=pe(ee);return n?e.filter(u=>pe([me(u),...u.keywords??[]].join(" ")).includes(n)):e},[e,ee]),re=l.useMemo(()=>p.reduce((n,u)=>u.disabled?n:n+1,0),[p]),ie=re>1,se=b&&re>0,ya=l.useMemo(()=>{if(g)return;if(!b)return"Enter";const n=[];return ie&&n.push("ArrowDown","ArrowUp","Home","End"),se&&n.push("Enter"),b&&n.push("Escape"),n.length>0?n.join(" "):void 0},[ie,se,g,b]),wa=l.useMemo(()=>{const n=new Map;return p.map(u=>{const c=n.get(u.value)??0;return n.set(u.value,c+1),c===0?u.value:`${u.value}__duplicate-${c}`})},[p]);l.useEffect(()=>{if(!b){x(-1);return}const n=p.findIndex(c=>c.value===C&&!c.disabled);if(n>=0){x(n);return}const u=p.findIndex(c=>!c.disabled);x(u)},[C,p,b]);const ce=n=>{g||n.disabled||(a===void 0&&ma(n.value),s==null||s(n.value),w(!1))},S=b&&p.length>0;return r.jsxs("div",{ref:j,style:{display:"grid",gap:8},children:[r.jsx(ka,{ref:Z,id:la,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":S,"aria-controls":S?L:void 0,"aria-activedescendant":S&&D>=0?`${L}-option-${D}`:void 0,"aria-keyshortcuts":ya,"aria-label":te,"aria-labelledby":ae,autoComplete:"off",value:ee,disabled:g,placeholder:R,onFocus:()=>{g||w(!0)},onBlur:n=>{var u;(u=j.current)!=null&&u.contains(n.relatedTarget)||w(!1)},onChange:n=>{g||(oe(n.target.value),w(!0))},onKeyDown:n=>{var u;if(!g&&(d==null||d(n),!n.defaultPrevented&&!(ue(n.key)&&ha(n))&&!((n.altKey||n.ctrlKey||n.metaKey)&&ue(n.key)))){if(n.key==="Escape"){w(!1);return}if(n.key==="ArrowDown"){n.preventDefault(),w(!0),x(c=>le(p,c<0?-1:c,1));return}if(n.key==="ArrowUp"){n.preventDefault(),w(!0),x(c=>le(p,c<0?0:c,-1));return}if(n.key==="Home"){if(!de(n))return;n.preventDefault(),w(!0),x(p.findIndex(c=>!c.disabled));return}if(n.key==="End"){if(!de(n))return;n.preventDefault(),w(!0);for(let c=p.length-1;c>=0;c-=1)if(!((u=p[c])!=null&&u.disabled)){x(c);return}}if(n.key==="Enter"&&b&&D>=0){if(n.preventDefault(),n.repeat)return;const c=p[D];c&&ce(c)}}}}),S?r.jsx("div",{id:L,role:"listbox","aria-label":ba,"aria-labelledby":ae,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:p.map((n,u)=>{const c=u===D,T=n.value===C,I=E(n.ariaLabelledBy),va=Y(n.label).length>0,ga=E(n.textValue),xa=I===void 0?E(n.ariaLabel,va?void 0:ga):void 0;return r.jsx("button",{id:`${L}-option-${u}`,type:"button",role:"option",tabIndex:-1,"aria-labelledby":I,"aria-label":xa,"aria-selected":T,"aria-disabled":n.disabled||void 0,disabled:n.disabled,onMouseDown:h=>{var H;h.button!==0||h.ctrlKey||n.disabled||(h.preventDefault(),(H=Z.current)==null||H.focus())},onPointerDown:h=>{var H;n.disabled||h.pointerType==="mouse"||!ca(h.button)||h.ctrlKey||(h.preventDefault(),(H=Z.current)==null||H.focus())},onMouseEnter:()=>{n.disabled||x(u)},onClick:()=>ce(n),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:c?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:n.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:n.disabled?"not-allowed":"pointer"},children:n.label},wa[u]??`${n.value}__index-${u}`)})}):b?r.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:v}):null]})}function pe(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function me(e){const a=E(e.textValue);if(a!==void 0)return B(a);const t=E(e.ariaLabel);if(t!==void 0)return B(t);const s=Y(e.label);return s.length>0?s:B(e.value)}function Y(e){if(typeof e=="string")return B(e);if(typeof e=="number")return B(String(e));if(Array.isArray(e))return B(e.map(t=>Y(t)).filter(t=>t.length>0).join(" "));if(!l.isValidElement(e))return"";const a=e.props;return a["aria-hidden"]===!0||a["aria-hidden"]==="true"?"":typeof a["aria-label"]=="string"&&a["aria-label"].trim().length>0?B(a["aria-label"]):Y(a.children)}function E(e,a){return typeof e=="string"&&e.trim().length>0?e.trim():a}function B(e){return e.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onInputKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const k=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],Ba=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release",ariaLabelledBy:"combobox-option-heading",textValue:"Deploy release",keywords:["release","ship"]},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release",textValue:"Rollback release",keywords:["undo","revert"]}],Ra=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release"},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release"}],Da=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),textValue:"Deploy release"},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),textValue:"Rollback release"}];function A(e,a){const t=new KeyboardEvent("keydown",{key:a,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const Na={title:"Form/Combobox",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:k,onValueChange:()=>{}}};function Ca(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(F,{tone:"default",children:e})]}),r.jsx(y,{id:"framework-combobox",options:k,value:e,onValueChange:a,ariaLabel:"Framework"})]})}const O={render:()=>r.jsx(Ca,{}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Framework"});await i.click(t),await i.clear(t),await i.type(t,"sv"),await i.keyboard("{ArrowDown}{Enter}"),await o(a.getByText("svelte")).toBeInTheDocument()}},V={args:{options:k,emptyMessage:"No framework match."}},M={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const a=m(e),t=e.ownerDocument,s=a.getByRole("combobox",{name:"Framework dismiss demo"});await o(s).not.toHaveAttribute("aria-controls"),await i.click(s);const d=a.getByRole("listbox",{name:"Framework dismiss demo options"});await o(s).toHaveAttribute("aria-controls",d.id),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(a.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(a.queryByRole("listbox")).not.toBeInTheDocument(),await o(s).not.toHaveAttribute("aria-controls")}};function Ta(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(F,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),r.jsx(y,{options:k,value:e,onValueChange:a,ariaLabel:"Framework modifier guard"})]})}const P={render:()=>r.jsx(Ta,{}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Framework modifier guard"});await i.click(t),await o(a.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await i.keyboard("{Control>}{ArrowDown}{/Control}"),await i.keyboard("{Control>}{Enter}{/Control}"),await o(a.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await o(a.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),f.keyDown(t,{key:"Enter",repeat:!0}),await o(a.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await i.keyboard("{Meta>}{Escape}{/Meta}"),await o(a.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(a.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await o(a.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function Ia(){const[e,a]=l.useState("react"),[t,s]=l.useState(!0),[d,R]=l.useState("idle");return r.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[r.jsx(fa,{type:"button",variant:"outline",size:"sm",onClick:()=>s(v=>!v),children:t?"Disable local key guard":"Enable local key guard"}),r.jsx(F,{tone:"default","data-testid":"combobox-local-guard-telemetry",children:d}),r.jsx(F,{tone:"success","data-testid":"combobox-local-guard-selected-value",children:e})]}),r.jsx(y,{options:k,value:e,onValueChange:a,ariaLabel:"Framework local key guard",onInputKeyDown:v=>{t&&(v.key==="ArrowDown"||v.key==="Enter"||v.key==="Escape")&&(v.preventDefault(),R(`blocked:${v.key}`))}})]})}const K={render:()=>r.jsx(Ia,{}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Framework local key guard"}),s=a.getByTestId("combobox-local-guard-telemetry"),d=a.getByTestId("combobox-local-guard-selected-value");await i.click(t),await i.clear(t),await o(a.getByRole("listbox",{name:"Framework local key guard options"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await o(s).toHaveTextContent("blocked:Enter"),await o(d).toHaveTextContent("react"),await o(a.getByRole("listbox",{name:"Framework local key guard options"})).toBeInTheDocument(),await i.click(a.getByRole("button",{name:"Disable local key guard"})),await i.click(t),await i.clear(t),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await o(d).toHaveTextContent("vue"),await o(a.queryByRole("listbox",{name:"Framework local key guard options"})).not.toBeInTheDocument()}};function Ha(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(F,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),r.jsx(y,{options:k,value:e,onValueChange:a,ariaLabel:"Framework IME guard"})]})}function Aa(){const[e,a]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"When caret is inside query text, Home/End should keep native editing behavior instead of hijacking option focus."}),r.jsx(y,{options:k,value:e,onValueChange:a,ariaLabel:"Framework caret priority"})]})}const q={render:()=>r.jsx(Ha,{}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Framework IME guard"});await i.click(t),await o(a.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),f.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"End",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"Home",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),f.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(a.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),A(t,"ArrowDown"),A(t,"End"),A(t,"Home"),A(t,"Enter"),A(t,"Escape"),await o(a.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await i.clear(t),await i.type(t,"vu");const s=a.getByRole("option",{name:"Vue"});await o(s).toBeInTheDocument(),await i.click(s),await o(a.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},N={render:()=>r.jsx(Aa,{}),play:async({canvasElement:e})=>{const t=m(e).getByRole("combobox",{name:"Framework caret priority"});await i.click(t),await i.clear(t),await i.type(t,"ve"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),t.setSelectionRange(1,1),f.keyDown(t,{key:"Home"}),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),f.keyDown(t,{key:"End"}),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0"))}},z={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Combobox"});await i.click(t),await o(a.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function Fa(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),r.jsx(y,{options:k,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const $={render:()=>r.jsx(Fa,{}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Framework heading"});await o(t).toHaveAttribute("aria-labelledby","framework-heading"),await o(t).not.toHaveAttribute("aria-label"),await i.click(t);const s=a.getByRole("listbox",{name:"Framework heading"});await o(s).toHaveAttribute("aria-labelledby","framework-heading"),await o(s).not.toHaveAttribute("aria-label")}};function La(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"combobox-option-heading",style:{margin:0},children:"Deploy release"}),r.jsx(y,{options:Ba,onValueChange:()=>{},ariaLabel:"Release actions"})]})}const G={render:()=>r.jsx(La,{}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Release actions"});await i.click(t);const s=a.getByRole("option",{name:"Deploy release"});await o(s).toHaveAttribute("aria-labelledby","combobox-option-heading"),await o(s).not.toHaveAttribute("aria-label")}},_={render:()=>r.jsx(y,{options:Ra,onValueChange:()=>{},ariaLabel:"Release search fallback"}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Release search fallback"});await i.click(t),await i.clear(t),await i.type(t,"rollback"),await o(a.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await o(a.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},U={render:()=>r.jsx(y,{options:Da,onValueChange:()=>{},ariaLabel:"Release textValue fallback"}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Release textValue fallback"});await i.click(t);const s=a.getByRole("option",{name:"Deploy release"});await o(s).toHaveAttribute("aria-label","Deploy release"),await i.clear(t),await i.type(t,"rollback"),await o(a.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await o(a.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},W={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Framework focus model"});await i.click(t);const s=a.getByRole("option",{name:"React"});await o(s).toHaveAttribute("tabindex","-1");const d=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(d,"button",{configurable:!0,value:-1}),Object.defineProperty(d,"pointerType",{configurable:!0,value:"touch"}),s.dispatchEvent(d),await o(d.defaultPrevented).toBe(!0),await o(t).toHaveFocus(),await i.click(s),await o(t).toHaveFocus()}},Q={args:{ariaLabel:"Release search"},render:e=>r.jsx(y,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Release search"});await i.click(t),await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await i.clear(t),await i.type(t,"cafe launch"),await o(a.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await o(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await i.clear(t),await i.type(t,"no-match"),await o(t).toHaveAttribute("aria-keyshortcuts","Escape")}},J={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("combobox",{name:"Framework disabled"});await i.click(t),await o(a.queryByRole("listbox")).toBeNull()}},X={render:()=>r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),r.jsx("button",{type:"button",children:"Before combobox"}),r.jsx(y,{options:k,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const a=m(e),t=await a.findByRole("button",{name:"Before combobox"}),s=a.getByRole("combobox",{name:"Focus intent combobox"});await i.click(t),await i.tab(),await o(s).toHaveFocus(),await o(s).toHaveAttribute("data-focus-visible","true"),f.mouseDown(s,{button:0,ctrlKey:!0}),await o(s).toHaveAttribute("data-focus-visible","true")}};var be,ye,we;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ve,ge,xe;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(xe=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var fe,ke,he;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};var Ee,Be,Re;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
    fireEvent.keyDown(input, {
      key: "Enter",
      repeat: true
    });
    await expect(canvas.getByRole("listbox", {
      name: "Framework modifier guard options"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react");
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
}`,...(Re=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var De,Ce,Te;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Framework local key guard"
    });
    const telemetry = canvas.getByTestId("combobox-local-guard-telemetry");
    const selected = canvas.getByTestId("combobox-local-guard-selected-value");
    await userEvent.click(input);
    await userEvent.clear(input);
    await expect(canvas.getByRole("listbox", {
      name: "Framework local key guard options"
    })).toBeInTheDocument();
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(telemetry).toHaveTextContent("blocked:Enter");
    await expect(selected).toHaveTextContent("react");
    await expect(canvas.getByRole("listbox", {
      name: "Framework local key guard options"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Disable local key guard"
    }));
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(selected).toHaveTextContent("vue");
    await expect(canvas.queryByRole("listbox", {
      name: "Framework local key guard options"
    })).not.toBeInTheDocument();
  }
}`,...(Te=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ie,He,Ae;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ae=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var Fe,Le,je;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(je=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var Se,Oe,Ve;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ve=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Me,Pe,Ke;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ke=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Ke.source}}};var qe,Ne,ze;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};var $e,Ge,_e;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(_e=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Ue,We,Qe;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(We=U.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};var Je,Xe,Ye;W.parameters={...W.parameters,docs:{...(Je=W.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(aa=(ea=Q.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,oa;J.parameters={...J.parameters,docs:{...(ta=J.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(oa=(na=J.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,ia,sa;X.parameters={...X.parameters,docs:{...(ra=X.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(sa=(ia=X.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};const za=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ManagedKeysPreemptedByLocalHandler","ImeCompositionGuard","HomeEndCaretPriority","BlankAriaLabelFallback","LabelledByNameFallback","IconOptionLabelledByPrecedence","IconOptionAriaLabelSearchFallback","IconOptionTextValueNameFallback","ActivedescendantFocusModel","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{W as ActivedescendantFocusModel,z as BlankAriaLabelFallback,O as Controlled,J as DisabledState,X as FocusIntentReentry,N as HomeEndCaretPriority,_ as IconOptionAriaLabelSearchFallback,G as IconOptionLabelledByPrecedence,U as IconOptionTextValueNameFallback,q as ImeCompositionGuard,M as KeyboardDismissPaths,$ as LabelledByNameFallback,K as ManagedKeysPreemptedByLocalHandler,P as ModifierKeyGuard,Q as SearchNormalizationAndShortcutHints,V as WithCustomEmptyMessage,za as __namedExportsOrder,Na as default};
