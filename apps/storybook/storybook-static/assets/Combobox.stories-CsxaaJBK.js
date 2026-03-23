import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as Yt}from"./Button-DvJUO9m9.js";import{I as Zt}from"./Input-B9xcXif8.js";import{B as H}from"./Badge-Cvc2u0v9.js";import{within as m,userEvent as s,expect as n,waitFor as we,fireEvent as C}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function Be(e,t,a){var u;if(e.length===0)return-1;let i=t;for(let D=0;D<e.length;D+=1)if(i=(i+a+e.length)%e.length,!((u=e[i])!=null&&u.disabled))return i;return-1}function Re(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function ea(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function Ce(e){if(e.key!=="Home"&&e.key!=="End")return!0;const t=e.currentTarget,a=t.selectionStart,i=t.selectionEnd;return a===null||i===null?!0:a!==i?!1:e.key==="Home"?a===0:i===t.value.length}function ta(e){const t=new Map;return e.map(a=>{const i=t.get(a.value)??0;return t.set(a.value,i+1),i===0?a.value:`${a.value}__duplicate-${i}`})}function Kt(e){return typeof e!="number"||e<=0}function aa(e){if(!Kt(e.button))return!1;const t=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&t===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function De(e,t){return typeof e!="boolean"?t:e}function y({options:e,value:t,defaultValue:a,onValueChange:i,onInputKeyDown:u,placeholder:D="Search option...",emptyMessage:k="No option found.",disabled:qt=!1,id:zt,ariaLabel:$t="Combobox",ariaLabelledBy:Gt}){const K=c.useId(),N=c.useRef(null),de=c.useRef(null),[v,w]=c.useState(!1),[I,E]=c.useState(-1),[B,xe]=c.useState(""),[_t,Ut]=c.useState(a);c.useRef(null),c.useRef(null),c.useRef(null);const L=c.useRef(!1),j=c.useRef(""),ge=c.useRef({activeIndex:-1,filteredRenderKeys:[]}),pe=T(Gt),me=pe===void 0?T($t,"Combobox"):void 0,Wt=T(D,"Search option..."),Qt=Nt(k)?k:"No option found.",R=De(qt,!1),x=c.useMemo(()=>e.map(r=>({...r,disabled:De(r.disabled,!1)})),[e]),Jt=me===void 0?void 0:`${me} options`,be=t??_t,ye=c.useMemo(()=>{const r=x.findIndex(l=>l.value===be&&!l.disabled);return r>=0?r:x.findIndex(l=>l.value===be)},[be,x]),F=c.useMemo(()=>ye>=0?x[ye]:void 0,[x,ye]);c.useEffect(()=>{v||xe(F?He(F):"")},[v,F]),c.useEffect(()=>{},[x]),c.useEffect(()=>{},[x]),c.useEffect(()=>{},[x]),c.useEffect(()=>{R&&(w(!1),E(-1))},[R]),c.useEffect(()=>{var p;if(!v)return;const r=((p=N.current)==null?void 0:p.ownerDocument)??document,l=d=>{var g;aa(d)&&(d.defaultPrevented||(g=N.current)!=null&&g.contains(d.target)||w(!1))};return r.addEventListener("pointerdown",l),()=>{r.removeEventListener("pointerdown",l)}},[v]);const b=c.useMemo(()=>{const r=Te(B);return r?x.filter(l=>Te([He(l),...l.keywords??[]].join(" ")).includes(r)):x},[B,x]),fe=c.useMemo(()=>b.reduce((r,l)=>l.disabled?r:r+1,0),[b]),he=fe>1,ke=v&&fe>0,Xt=c.useMemo(()=>{if(R)return;if(!v)return"Enter";const r=[];return he&&r.push("ArrowDown","ArrowUp","Home","End"),ke&&r.push("Enter"),v&&r.push("Escape"),r.length>0?r.join(" "):void 0},[he,ke,v,R]),V=c.useMemo(()=>ta(b),[b]);c.useEffect(()=>{if(!v){L.current=!1,j.current=B,E(-1);return}const r=L.current&&j.current===B,l=b.findIndex(d=>d===F&&!d.disabled);if(l>=0){L.current=!0,j.current=B,E(d=>d===l?d:l);return}if(r){const d=ge.current,g=d.activeIndex>=0&&d.activeIndex<d.filteredRenderKeys.length?d.filteredRenderKeys[d.activeIndex]??null:null;if(g!==null){const O=V.findIndex((S,ve)=>{var f;return S===g&&!((f=b[ve])!=null&&f.disabled)});if(O>=0){L.current=!0,j.current=B,E(S=>S===O?S:O);return}}}const p=b.findIndex(d=>!d.disabled);L.current=!0,j.current=B,E(d=>{var g;return d>=0&&d<b.length&&!((g=b[d])!=null&&g.disabled)?d:p})},[b,V,v,B,F]),c.useEffect(()=>{ge.current={activeIndex:I,filteredRenderKeys:V}},[I,V]);const Ee=r=>{R||r.disabled||(t===void 0&&Ut(r.value),i==null||i(r.value),w(!1))},q=v&&b.length>0;return o.jsxs("div",{ref:N,style:{display:"grid",gap:8},children:[o.jsx(Zt,{ref:de,id:zt,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":q,"aria-controls":q?K:void 0,"aria-activedescendant":q&&I>=0?`${K}-option-${I}`:void 0,"aria-keyshortcuts":Xt,"aria-label":me,"aria-labelledby":pe,autoComplete:"off",value:B,disabled:R,placeholder:Wt,onFocus:()=>{R||w(!0)},onBlur:r=>{var l;(l=N.current)!=null&&l.contains(r.relatedTarget)||w(!1)},onChange:r=>{R||(xe(r.target.value),w(!0))},onKeyDown:r=>{var l;if(!R&&(u==null||u(r),!r.defaultPrevented&&!(Re(r.key)&&ea(r))&&!((r.altKey||r.ctrlKey||r.metaKey)&&Re(r.key)))){if(r.key==="Escape"){w(!1);return}if(r.key==="ArrowDown"){r.preventDefault(),w(!0),E(p=>Be(b,p<0?-1:p,1));return}if(r.key==="ArrowUp"){r.preventDefault(),w(!0),E(p=>Be(b,p<0?0:p,-1));return}if(r.key==="Home"){if(!Ce(r))return;r.preventDefault(),w(!0),E(b.findIndex(p=>!p.disabled));return}if(r.key==="End"){if(!Ce(r))return;r.preventDefault(),w(!0);for(let p=b.length-1;p>=0;p-=1)if(!((l=b[p])!=null&&l.disabled)){E(p);return}}if(r.key==="Enter"&&v&&I>=0){if(r.preventDefault(),r.repeat)return;const p=b[I];p&&Ee(p)}}}}),q?o.jsx("div",{id:K,role:"listbox","aria-label":Jt,"aria-labelledby":pe,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:b.map((r,l)=>{const p=l===I,d=r===F,g=T(r.ariaLabelledBy),O=ue(r.label).length>0,S=T(r.textValue),ve=g===void 0?T(r.ariaLabel,O?void 0:S):void 0;return o.jsx("button",{id:`${K}-option-${l}`,type:"button",role:"option",tabIndex:-1,"aria-labelledby":g,"aria-label":ve,"aria-selected":d,"aria-disabled":r.disabled||void 0,disabled:r.disabled,onMouseDown:f=>{var M;f.button!==0||f.ctrlKey||r.disabled||(f.preventDefault(),(M=de.current)==null||M.focus())},onPointerDown:f=>{var M;r.disabled||f.pointerType==="mouse"||!Kt(f.button)||f.ctrlKey||(f.preventDefault(),(M=de.current)==null||M.focus())},onMouseEnter:()=>{r.disabled||E(l)},onClick:()=>Ee(r),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:p?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:r.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:r.disabled?"not-allowed":"pointer"},children:r.label},V[l]??`${r.value}__index-${l}`)})}):v?o.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:Qt}):null]})}function Te(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function He(e){const t=T(e.textValue);if(t!==void 0)return A(t);const a=T(e.ariaLabel);if(a!==void 0)return A(a);const i=ue(e.label);return i.length>0?i:A(e.value)}function ue(e){if(typeof e=="string")return A(e);if(typeof e=="number")return A(String(e));if(Array.isArray(e))return A(e.map(a=>ue(a)).filter(a=>a.length>0).join(" "));if(!c.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?A(t["aria-label"]):ue(t.children)}function T(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function Nt(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:typeof e=="number"?!0:Array.isArray(e)?e.some(t=>Nt(t)):c.isValidElement(e)}function A(e){return e.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onInputKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const h=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],na=[{value:"deploy",label:o.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release",ariaLabelledBy:"combobox-option-heading",textValue:"Deploy release",keywords:["release","ship"]},{value:"rollback",label:o.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release",textValue:"Rollback release",keywords:["undo","revert"]}],oa=[{value:"deploy",label:o.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release"},{value:"rollback",label:o.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release"}],ra=[{value:"deploy",label:o.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),textValue:"Deploy release"},{value:"rollback",label:o.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),textValue:"Rollback release"}],Ie=[{value:"react",label:"React core"},{value:"react",label:"React legacy"},{value:"vue",label:"Vue"}];function P(e,t){const a=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),e.dispatchEvent(a)}const Ba={title:"Form/Combobox",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:h,onValueChange:()=>{}}};function ia(){const[e,t]=c.useState("react");return o.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),o.jsx(H,{tone:"default",children:e})]}),o.jsx(y,{id:"framework-combobox",options:h,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const z={render:()=>o.jsx(ia,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework"});await s.click(a),await s.clear(a),await s.type(a,"sv"),await s.keyboard("{ArrowDown}{Enter}"),await n(t.getByText("svelte")).toBeInTheDocument()}},$={args:{options:h,emptyMessage:"No framework match."}},G={args:{options:h,onValueChange:()=>{},placeholder:"   "},play:async({canvasElement:e})=>{const t=m(e);await n(t.getByRole("combobox",{name:"Combobox"})).toHaveAttribute("placeholder","Search option...")}},_={args:{options:h,onValueChange:()=>{},emptyMessage:"   "},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Combobox"});await s.click(a),await s.clear(a),await s.type(a,"no-match"),await n(t.getByRole("status")).toHaveTextContent("No option found.")}},U={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=m(e),a=e.ownerDocument,i=t.getByRole("combobox",{name:"Framework dismiss demo"});await n(i).not.toHaveAttribute("aria-controls"),await s.click(i);const u=t.getByRole("listbox",{name:"Framework dismiss demo options"});await n(i).toHaveAttribute("aria-controls",u.id),a.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(t.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.queryByRole("listbox")).not.toBeInTheDocument(),await n(i).not.toHaveAttribute("aria-controls")}};function sa(){const[e,t]=c.useState("react");return o.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),o.jsx(H,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),o.jsx(y,{options:h,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const W={render:()=>o.jsx(sa,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework modifier guard"});await s.click(a),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Control>}{ArrowDown}{/Control}"),await s.keyboard("{Control>}{Enter}{/Control}"),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),C.keyDown(a,{key:"Enter",repeat:!0}),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Meta>}{Escape}{/Meta}"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function ca(){const[e,t]=c.useState("react"),[a,i]=c.useState(!0),[u,D]=c.useState("idle");return o.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[o.jsx(Yt,{type:"button",variant:"outline",size:"sm",onClick:()=>i(k=>!k),children:a?"Disable local key guard":"Enable local key guard"}),o.jsx(H,{tone:"default","data-testid":"combobox-local-guard-telemetry",children:u}),o.jsx(H,{tone:"success","data-testid":"combobox-local-guard-selected-value",children:e})]}),o.jsx(y,{options:h,value:e,onValueChange:t,ariaLabel:"Framework local key guard",onInputKeyDown:k=>{a&&(k.key==="ArrowDown"||k.key==="Enter"||k.key==="Escape")&&(k.preventDefault(),D(`blocked:${k.key}`))}})]})}const Q={render:()=>o.jsx(ca,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework local key guard"}),i=t.getByTestId("combobox-local-guard-telemetry"),u=t.getByTestId("combobox-local-guard-selected-value");await s.click(a),await s.clear(a),await n(t.getByRole("listbox",{name:"Framework local key guard options"})).toBeInTheDocument(),await s.keyboard("{ArrowDown}"),await s.keyboard("{Enter}"),await n(i).toHaveTextContent("blocked:Enter"),await n(u).toHaveTextContent("react"),await n(t.getByRole("listbox",{name:"Framework local key guard options"})).toBeInTheDocument(),await s.click(t.getByRole("button",{name:"Disable local key guard"})),await s.click(a),await s.clear(a),await s.keyboard("{ArrowDown}"),await s.keyboard("{Enter}"),await n(u).toHaveTextContent("vue"),await n(t.queryByRole("listbox",{name:"Framework local key guard options"})).not.toBeInTheDocument()}};function la(){const[e,t]=c.useState("react");return o.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),o.jsx(H,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),o.jsx(y,{options:h,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}function ua(){const[e,t]=c.useState("react");return o.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"When caret is inside query text, Home/End should keep native editing behavior instead of hijacking option focus."}),o.jsx(y,{options:h,value:e,onValueChange:t,ariaLabel:"Framework caret priority"})]})}const J={render:()=>o.jsx(la,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework IME guard"});await s.click(a),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),C.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),C.keyDown(a,{key:"End",isComposing:!0,keyCode:229,which:229}),C.keyDown(a,{key:"Home",isComposing:!0,keyCode:229,which:229}),C.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),C.keyDown(a,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),P(a,"ArrowDown"),P(a,"End"),P(a,"Home"),P(a,"Enter"),P(a,"Escape"),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await s.clear(a),await s.type(a,"vu");const i=t.getByRole("option",{name:"Vue"});await n(i).toBeInTheDocument(),await s.click(i),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},X={render:()=>o.jsx(ua,{}),play:async({canvasElement:e})=>{const a=m(e).getByRole("combobox",{name:"Framework caret priority"});await s.click(a),await s.clear(a),await s.type(a,"ve"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),a.setSelectionRange(1,1),C.keyDown(a,{key:"Home"}),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),C.keyDown(a,{key:"End"}),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},Y={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Combobox"});await s.click(a),await n(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function da(){return o.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[o.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),o.jsx(y,{options:h,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const Z={render:()=>o.jsx(da,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework heading"});await n(a).toHaveAttribute("aria-labelledby","framework-heading"),await n(a).not.toHaveAttribute("aria-label"),await s.click(a);const i=t.getByRole("listbox",{name:"Framework heading"});await n(i).toHaveAttribute("aria-labelledby","framework-heading"),await n(i).not.toHaveAttribute("aria-label")}};function pa(){return o.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[o.jsx("h3",{id:"combobox-option-heading",style:{margin:0},children:"Deploy release"}),o.jsx(y,{options:na,onValueChange:()=>{},ariaLabel:"Release actions"})]})}const ee={render:()=>o.jsx(pa,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release actions"});await s.click(a);const i=t.getByRole("option",{name:"Deploy release"});await n(i).toHaveAttribute("aria-labelledby","combobox-option-heading"),await n(i).not.toHaveAttribute("aria-label")}},te={render:()=>o.jsx(y,{options:oa,onValueChange:()=>{},ariaLabel:"Release search fallback"}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release search fallback"});await s.click(a),await s.clear(a),await s.type(a,"rollback"),await n(t.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await n(t.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},ae={render:()=>o.jsx(y,{options:ra,onValueChange:()=>{},ariaLabel:"Release textValue fallback"}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release textValue fallback"});await s.click(a);const i=t.getByRole("option",{name:"Deploy release"});await n(i).toHaveAttribute("aria-label","Deploy release"),await s.clear(a),await s.type(a,"rollback"),await n(t.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await n(t.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},ne={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework focus model"});await s.click(a);const i=t.getByRole("option",{name:"React"});await n(i).toHaveAttribute("tabindex","-1");const u=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(u,"button",{configurable:!0,value:-1}),Object.defineProperty(u,"pointerType",{configurable:!0,value:"touch"}),i.dispatchEvent(u),await n(u.defaultPrevented).toBe(!0),await n(a).toHaveFocus(),await s.click(i),await n(a).toHaveFocus()}};function ma(){const[e,t]=c.useState(!1),a=e?[{value:"share",label:"Share release"},...Ie]:Ie;return o.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Press F2 while combobox is open to prepend a new option without resetting active duplicate option."}),o.jsx(H,{tone:"default","data-testid":"combobox-duplicate-rerender-prepend-state",children:e?"on":"off"}),o.jsx(y,{options:a,onValueChange:()=>{},ariaLabel:"Duplicate value stability",onInputKeyDown:i=>{i.key==="F2"&&(i.preventDefault(),t(u=>!u))}})]})}function ba(){return o.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Duplicate values still expose one deterministic `aria-selected` option by anchoring to the first enabled occurrence."}),o.jsx(y,{value:"react",options:[{value:"react",label:"React archived",disabled:!0},{value:"react",label:"React stable"},{value:"vue",label:"Vue"}],onValueChange:()=>{},ariaLabel:"Duplicate value selected semantics"})]})}const oe={render:()=>o.jsx(ma,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Duplicate value stability"});await s.click(a),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await s.keyboard("{ArrowDown}"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const i=t.getByRole("option",{name:"React legacy"});await n(i).toHaveAttribute("id",a.getAttribute("aria-activedescendant")),await s.keyboard("{F2}"),await we(()=>{n(t.getByTestId("combobox-duplicate-rerender-prepend-state")).toHaveTextContent("on")}),await we(()=>{n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-2"))}),await n(t.getByRole("option",{name:"React legacy"})).toHaveAttribute("id",a.getAttribute("aria-activedescendant"))}},re={render:()=>o.jsx(ba,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Duplicate value selected semantics"});await we(()=>{n(a).toHaveValue("React stable")}),await s.click(a);const i=t.getAllByRole("option").filter(u=>u.getAttribute("aria-selected")==="true");await n(i).toHaveLength(1),await n(i[0]).toHaveTextContent("React stable")}},ie={args:{ariaLabel:"Release search"},render:e=>o.jsx(y,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release search"});await s.click(a),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await s.clear(a),await s.type(a,"cafe launch"),await n(t.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await n(a).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await s.clear(a),await s.type(a,"no-match"),await n(a).toHaveAttribute("aria-keyshortcuts","Escape")}},se={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework disabled"});await s.click(a),await n(t.queryByRole("listbox")).toBeNull()}};function ya(){const[e,t]=c.useState("none"),[a,i]=c.useState(0);return o.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[o.jsx(y,{ariaLabel:"Runtime boolean combobox",disabled:"true",options:[{value:"react",label:"React"},{value:"vue",label:"Vue",disabled:"true"}],onValueChange:u=>{t(u),i(D=>D+1)}}),o.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[o.jsxs(H,{tone:"default",children:["Selected: ",o.jsx("span",{"data-testid":"combobox-runtime-selected",children:e})]}),o.jsxs(H,{tone:"default",children:["Change events: ",o.jsx("span",{"data-testid":"combobox-runtime-events",children:a})]})]})]})}const ce={render:()=>o.jsx(ya,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Runtime boolean combobox"}),i=t.getByTestId("combobox-runtime-selected"),u=t.getByTestId("combobox-runtime-events");await n(a).not.toBeDisabled(),await n(a).toHaveAttribute("aria-keyshortcuts","Enter"),await n(i).toHaveTextContent("none"),await n(u).toHaveTextContent("0"),await s.click(a),await n(t.getByRole("listbox",{name:"Runtime boolean combobox options"})).toBeInTheDocument(),await n(t.getByRole("option",{name:"Vue"})).not.toBeDisabled(),await s.keyboard("{ArrowDown}{Enter}"),await n(i).toHaveTextContent("vue"),await n(u).toHaveTextContent("1")}},le={render:()=>o.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),o.jsx("button",{type:"button",children:"Before combobox"}),o.jsx(y,{options:h,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=m(e),a=await t.findByRole("button",{name:"Before combobox"}),i=t.getByRole("combobox",{name:"Focus intent combobox"});await s.click(a),await s.tab(),await n(i).toHaveFocus(),await n(i).toHaveAttribute("data-focus-visible","true"),C.mouseDown(i,{button:0,ctrlKey:!0}),await n(i).toHaveAttribute("data-focus-visible","true")}};var Ae,Fe,Se;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Se=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var Le,je,Ve;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(Ve=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var Oe,Me,Pe;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    onValueChange: () => {},
    placeholder: "   "
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("combobox", {
      name: "Combobox"
    })).toHaveAttribute("placeholder", "Search option...");
  }
}`,...(Pe=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Ke,Ne,qe;_.parameters={..._.parameters,docs:{...(Ke=_.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    onValueChange: () => {},
    emptyMessage: "   "
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Combobox"
    });
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.getByRole("status")).toHaveTextContent("No option found.");
  }
}`,...(qe=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var ze,$e,Ge;U.parameters={...U.parameters,docs:{...(ze=U.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ge=($e=U.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var _e,Ue,We;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(We=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Qe,Je,Xe;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ye,Ze,et;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(et=(Ze=J.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;X.parameters={...X.parameters,docs:{...(tt=X.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=X.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,rt,it;Y.parameters={...Y.parameters,docs:{...(ot=Y.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(rt=Y.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var st,ct,lt;Z.parameters={...Z.parameters,docs:{...(st=Z.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(lt=(ct=Z.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,dt,pt;ee.parameters={...ee.parameters,docs:{...(ut=ee.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(dt=ee.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,bt,yt;te.parameters={...te.parameters,docs:{...(mt=te.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(bt=te.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var vt,wt,xt;ae.parameters={...ae.parameters,docs:{...(vt=ae.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(wt=ae.parameters)==null?void 0:wt.docs)==null?void 0:xt.source}}};var gt,ft,ht;ne.parameters={...ne.parameters,docs:{...(gt=ne.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ht=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var kt,Et,Bt;oe.parameters={...oe.parameters,docs:{...(kt=oe.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: () => <DuplicateValueRerenderStabilityComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Duplicate value stability"
    });
    await userEvent.click(input);
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    await userEvent.keyboard("{ArrowDown}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
    const legacyOption = canvas.getByRole("option", {
      name: "React legacy"
    });
    await expect(legacyOption).toHaveAttribute("id", input.getAttribute("aria-activedescendant"));
    await userEvent.keyboard("{F2}");
    await waitFor(() => {
      expect(canvas.getByTestId("combobox-duplicate-rerender-prepend-state")).toHaveTextContent("on");
    });
    await waitFor(() => {
      expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-2"));
    });
    await expect(canvas.getByRole("option", {
      name: "React legacy"
    })).toHaveAttribute("id", input.getAttribute("aria-activedescendant"));
  }
}`,...(Bt=(Et=oe.parameters)==null?void 0:Et.docs)==null?void 0:Bt.source}}};var Rt,Ct,Dt;re.parameters={...re.parameters,docs:{...(Rt=re.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  render: () => <DuplicateValueSelectedSemanticsComboboxDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Duplicate value selected semantics"
    });
    await waitFor(() => {
      expect(input).toHaveValue("React stable");
    });
    await userEvent.click(input);
    const selectedOptions = canvas.getAllByRole("option").filter(option => option.getAttribute("aria-selected") === "true");
    await expect(selectedOptions).toHaveLength(1);
    await expect(selectedOptions[0]).toHaveTextContent("React stable");
  }
}`,...(Dt=(Ct=re.parameters)==null?void 0:Ct.docs)==null?void 0:Dt.source}}};var Tt,Ht,It;ie.parameters={...ie.parameters,docs:{...(Tt=ie.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(It=(Ht=ie.parameters)==null?void 0:Ht.docs)==null?void 0:It.source}}};var At,Ft,St;se.parameters={...se.parameters,docs:{...(At=se.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(St=(Ft=se.parameters)==null?void 0:Ft.docs)==null?void 0:St.source}}};var Lt,jt,Vt;ce.parameters={...ce.parameters,docs:{...(Lt=ce.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationCombobox />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("combobox", {
      name: "Runtime boolean combobox"
    });
    const selected = canvas.getByTestId("combobox-runtime-selected");
    const events = canvas.getByTestId("combobox-runtime-events");
    await expect(input).not.toBeDisabled();
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter");
    await expect(selected).toHaveTextContent("none");
    await expect(events).toHaveTextContent("0");
    await userEvent.click(input);
    await expect(canvas.getByRole("listbox", {
      name: "Runtime boolean combobox options"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("option", {
      name: "Vue"
    })).not.toBeDisabled();
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(selected).toHaveTextContent("vue");
    await expect(events).toHaveTextContent("1");
  }
}`,...(Vt=(jt=ce.parameters)==null?void 0:jt.docs)==null?void 0:Vt.source}}};var Ot,Mt,Pt;le.parameters={...le.parameters,docs:{...(Ot=le.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Pt=(Mt=le.parameters)==null?void 0:Mt.docs)==null?void 0:Pt.source}}};const Ra=["Controlled","WithCustomEmptyMessage","BlankPlaceholderFallback","BlankEmptyMessageFallback","KeyboardDismissPaths","ModifierKeyGuard","ManagedKeysPreemptedByLocalHandler","ImeCompositionGuard","HomeEndCaretPriority","BlankAriaLabelFallback","LabelledByNameFallback","IconOptionLabelledByPrecedence","IconOptionAriaLabelSearchFallback","IconOptionTextValueNameFallback","ActivedescendantFocusModel","DuplicateValueRerenderStability","DuplicateValueSelectedSemantics","SearchNormalizationAndShortcutHints","DisabledState","RuntimeBooleanConfigNormalization","FocusIntentReentry"];export{ne as ActivedescendantFocusModel,Y as BlankAriaLabelFallback,_ as BlankEmptyMessageFallback,G as BlankPlaceholderFallback,z as Controlled,se as DisabledState,oe as DuplicateValueRerenderStability,re as DuplicateValueSelectedSemantics,le as FocusIntentReentry,X as HomeEndCaretPriority,te as IconOptionAriaLabelSearchFallback,ee as IconOptionLabelledByPrecedence,ae as IconOptionTextValueNameFallback,J as ImeCompositionGuard,U as KeyboardDismissPaths,Z as LabelledByNameFallback,Q as ManagedKeysPreemptedByLocalHandler,W as ModifierKeyGuard,ce as RuntimeBooleanConfigNormalization,ie as SearchNormalizationAndShortcutHints,$ as WithCustomEmptyMessage,Ra as __namedExportsOrder,Ba as default};
