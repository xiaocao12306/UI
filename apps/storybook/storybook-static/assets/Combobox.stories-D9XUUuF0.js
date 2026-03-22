import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as St}from"./Button-B21ouHNm.js";import{I as jt}from"./Input-DCFTlK0_.js";import{B as F}from"./Badge-ZJmMstsz.js";import{within as b,userEvent as s,expect as n,waitFor as me,fireEvent as B}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function fe(e,t,a){var p;if(e.length===0)return-1;let i=t;for(let I=0;I<e.length;I+=1)if(i=(i+a+e.length)%e.length,!((p=e[i])!=null&&p.disabled))return i;return-1}function ke(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function Vt(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function he(e){if(e.key!=="Home"&&e.key!=="End")return!0;const t=e.currentTarget,a=t.selectionStart,i=t.selectionEnd;return a===null||i===null?!0:a!==i?!1:e.key==="Home"?a===0:i===t.value.length}function Ot(e){const t=new Map;return e.map(a=>{const i=t.get(a.value)??0;return t.set(a.value,i+1),i===0?a.value:`${a.value}__duplicate-${i}`})}function Dt(e){return typeof e!="number"||e<=0}function Mt(e){if(!Dt(e.button))return!1;const t=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&t===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function y({options:e,value:t,defaultValue:a,onValueChange:i,onInputKeyDown:p,placeholder:I="Search option...",emptyMessage:k="No option found.",disabled:h=!1,id:Ct,ariaLabel:Tt="Combobox",ariaLabelledBy:It}){const K=c.useId(),P=c.useRef(null),se=c.useRef(null),[v,w]=c.useState(!1),[D,f]=c.useState(-1),[E,be]=c.useState(""),[Ht,At]=c.useState(a);c.useRef(null),c.useRef(null),c.useRef(null);const L=c.useRef(!1),S=c.useRef(""),ye=c.useRef({activeIndex:-1,filteredRenderKeys:[]}),ce=C(It),le=ce===void 0?C(Tt,"Combobox"):void 0,Ft=le===void 0?void 0:`${le} options`,ue=t??Ht,de=c.useMemo(()=>{const o=e.findIndex(l=>l.value===ue&&!l.disabled);return o>=0?o:e.findIndex(l=>l.value===ue)},[ue,e]),H=c.useMemo(()=>de>=0?e[de]:void 0,[e,de]);c.useEffect(()=>{v||be(H?Be(H):"")},[v,H]),c.useEffect(()=>{},[e]),c.useEffect(()=>{},[e]),c.useEffect(()=>{},[e]),c.useEffect(()=>{h&&(w(!1),f(-1))},[h]),c.useEffect(()=>{var d;if(!v)return;const o=((d=P.current)==null?void 0:d.ownerDocument)??document,l=u=>{var g;Mt(u)&&(u.defaultPrevented||(g=P.current)!=null&&g.contains(u.target)||w(!1))};return o.addEventListener("pointerdown",l),()=>{o.removeEventListener("pointerdown",l)}},[v]);const m=c.useMemo(()=>{const o=Ee(E);return o?e.filter(l=>Ee([Be(l),...l.keywords??[]].join(" ")).includes(o)):e},[e,E]),ve=c.useMemo(()=>m.reduce((o,l)=>l.disabled?o:o+1,0),[m]),we=ve>1,ge=v&&ve>0,Lt=c.useMemo(()=>{if(h)return;if(!v)return"Enter";const o=[];return we&&o.push("ArrowDown","ArrowUp","Home","End"),ge&&o.push("Enter"),v&&o.push("Escape"),o.length>0?o.join(" "):void 0},[we,ge,h,v]),j=c.useMemo(()=>Ot(m),[m]);c.useEffect(()=>{if(!v){L.current=!1,S.current=E,f(-1);return}const o=L.current&&S.current===E,l=m.findIndex(u=>u===H&&!u.disabled);if(l>=0){L.current=!0,S.current=E,f(u=>u===l?u:l);return}if(o){const u=ye.current,g=u.activeIndex>=0&&u.activeIndex<u.filteredRenderKeys.length?u.filteredRenderKeys[u.activeIndex]??null:null;if(g!==null){const V=j.findIndex((A,pe)=>{var x;return A===g&&!((x=m[pe])!=null&&x.disabled)});if(V>=0){L.current=!0,S.current=E,f(A=>A===V?A:V);return}}}const d=m.findIndex(u=>!u.disabled);L.current=!0,S.current=E,f(u=>{var g;return u>=0&&u<m.length&&!((g=m[u])!=null&&g.disabled)?u:d})},[m,j,v,E,H]),c.useEffect(()=>{ye.current={activeIndex:D,filteredRenderKeys:j}},[D,j]);const xe=o=>{h||o.disabled||(t===void 0&&At(o.value),i==null||i(o.value),w(!1))},q=v&&m.length>0;return r.jsxs("div",{ref:P,style:{display:"grid",gap:8},children:[r.jsx(jt,{ref:se,id:Ct,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":q,"aria-controls":q?K:void 0,"aria-activedescendant":q&&D>=0?`${K}-option-${D}`:void 0,"aria-keyshortcuts":Lt,"aria-label":le,"aria-labelledby":ce,autoComplete:"off",value:E,disabled:h,placeholder:I,onFocus:()=>{h||w(!0)},onBlur:o=>{var l;(l=P.current)!=null&&l.contains(o.relatedTarget)||w(!1)},onChange:o=>{h||(be(o.target.value),w(!0))},onKeyDown:o=>{var l;if(!h&&(p==null||p(o),!o.defaultPrevented&&!(ke(o.key)&&Vt(o))&&!((o.altKey||o.ctrlKey||o.metaKey)&&ke(o.key)))){if(o.key==="Escape"){w(!1);return}if(o.key==="ArrowDown"){o.preventDefault(),w(!0),f(d=>fe(m,d<0?-1:d,1));return}if(o.key==="ArrowUp"){o.preventDefault(),w(!0),f(d=>fe(m,d<0?0:d,-1));return}if(o.key==="Home"){if(!he(o))return;o.preventDefault(),w(!0),f(m.findIndex(d=>!d.disabled));return}if(o.key==="End"){if(!he(o))return;o.preventDefault(),w(!0);for(let d=m.length-1;d>=0;d-=1)if(!((l=m[d])!=null&&l.disabled)){f(d);return}}if(o.key==="Enter"&&v&&D>=0){if(o.preventDefault(),o.repeat)return;const d=m[D];d&&xe(d)}}}}),q?r.jsx("div",{id:K,role:"listbox","aria-label":Ft,"aria-labelledby":ce,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:m.map((o,l)=>{const d=l===D,u=o===H,g=C(o.ariaLabelledBy),V=ie(o.label).length>0,A=C(o.textValue),pe=g===void 0?C(o.ariaLabel,V?void 0:A):void 0;return r.jsx("button",{id:`${K}-option-${l}`,type:"button",role:"option",tabIndex:-1,"aria-labelledby":g,"aria-label":pe,"aria-selected":u,"aria-disabled":o.disabled||void 0,disabled:o.disabled,onMouseDown:x=>{var O;x.button!==0||x.ctrlKey||o.disabled||(x.preventDefault(),(O=se.current)==null||O.focus())},onPointerDown:x=>{var O;o.disabled||x.pointerType==="mouse"||!Dt(x.button)||x.ctrlKey||(x.preventDefault(),(O=se.current)==null||O.focus())},onMouseEnter:()=>{o.disabled||f(l)},onClick:()=>xe(o),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:d?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:o.disabled?"not-allowed":"pointer"},children:o.label},j[l]??`${o.value}__index-${l}`)})}):v?r.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:k}):null]})}function Ee(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function Be(e){const t=C(e.textValue);if(t!==void 0)return T(t);const a=C(e.ariaLabel);if(a!==void 0)return T(a);const i=ie(e.label);return i.length>0?i:T(e.value)}function ie(e){if(typeof e=="string")return T(e);if(typeof e=="number")return T(String(e));if(Array.isArray(e))return T(e.map(a=>ie(a)).filter(a=>a.length>0).join(" "));if(!c.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?T(t["aria-label"]):ie(t.children)}function C(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function T(e){return e.replace(/\s+/g," ").trim()}y.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onInputKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const R=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],Kt=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release",ariaLabelledBy:"combobox-option-heading",textValue:"Deploy release",keywords:["release","ship"]},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release",textValue:"Rollback release",keywords:["undo","revert"]}],Pt=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release"},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release"}],qt=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),textValue:"Deploy release"},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),textValue:"Rollback release"}],Re=[{value:"react",label:"React core"},{value:"react",label:"React legacy"},{value:"vue",label:"Vue"}];function M(e,t){const a=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),e.dispatchEvent(a)}const ra={title:"Form/Combobox",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:R,onValueChange:()=>{}}};function Nt(){const[e,t]=c.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(F,{tone:"default",children:e})]}),r.jsx(y,{id:"framework-combobox",options:R,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const N={render:()=>r.jsx(Nt,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Framework"});await s.click(a),await s.clear(a),await s.type(a,"sv"),await s.keyboard("{ArrowDown}{Enter}"),await n(t.getByText("svelte")).toBeInTheDocument()}},z={args:{options:R,emptyMessage:"No framework match."}},$={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=b(e),a=e.ownerDocument,i=t.getByRole("combobox",{name:"Framework dismiss demo"});await n(i).not.toHaveAttribute("aria-controls"),await s.click(i);const p=t.getByRole("listbox",{name:"Framework dismiss demo options"});await n(i).toHaveAttribute("aria-controls",p.id),a.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(t.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.queryByRole("listbox")).not.toBeInTheDocument(),await n(i).not.toHaveAttribute("aria-controls")}};function zt(){const[e,t]=c.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(F,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),r.jsx(y,{options:R,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const G={render:()=>r.jsx(zt,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Framework modifier guard"});await s.click(a),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Control>}{ArrowDown}{/Control}"),await s.keyboard("{Control>}{Enter}{/Control}"),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),B.keyDown(a,{key:"Enter",repeat:!0}),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Meta>}{Escape}{/Meta}"),await n(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await n(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await n(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function $t(){const[e,t]=c.useState("react"),[a,i]=c.useState(!0),[p,I]=c.useState("idle");return r.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8},children:[r.jsx(St,{type:"button",variant:"outline",size:"sm",onClick:()=>i(k=>!k),children:a?"Disable local key guard":"Enable local key guard"}),r.jsx(F,{tone:"default","data-testid":"combobox-local-guard-telemetry",children:p}),r.jsx(F,{tone:"success","data-testid":"combobox-local-guard-selected-value",children:e})]}),r.jsx(y,{options:R,value:e,onValueChange:t,ariaLabel:"Framework local key guard",onInputKeyDown:k=>{a&&(k.key==="ArrowDown"||k.key==="Enter"||k.key==="Escape")&&(k.preventDefault(),I(`blocked:${k.key}`))}})]})}const _={render:()=>r.jsx($t,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Framework local key guard"}),i=t.getByTestId("combobox-local-guard-telemetry"),p=t.getByTestId("combobox-local-guard-selected-value");await s.click(a),await s.clear(a),await n(t.getByRole("listbox",{name:"Framework local key guard options"})).toBeInTheDocument(),await s.keyboard("{ArrowDown}"),await s.keyboard("{Enter}"),await n(i).toHaveTextContent("blocked:Enter"),await n(p).toHaveTextContent("react"),await n(t.getByRole("listbox",{name:"Framework local key guard options"})).toBeInTheDocument(),await s.click(t.getByRole("button",{name:"Disable local key guard"})),await s.click(a),await s.clear(a),await s.keyboard("{ArrowDown}"),await s.keyboard("{Enter}"),await n(p).toHaveTextContent("vue"),await n(t.queryByRole("listbox",{name:"Framework local key guard options"})).not.toBeInTheDocument()}};function Gt(){const[e,t]=c.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(F,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),r.jsx(y,{options:R,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}function _t(){const[e,t]=c.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"When caret is inside query text, Home/End should keep native editing behavior instead of hijacking option focus."}),r.jsx(y,{options:R,value:e,onValueChange:t,ariaLabel:"Framework caret priority"})]})}const U={render:()=>r.jsx(Gt,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Framework IME guard"});await s.click(a),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),B.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),B.keyDown(a,{key:"End",isComposing:!0,keyCode:229,which:229}),B.keyDown(a,{key:"Home",isComposing:!0,keyCode:229,which:229}),B.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),B.keyDown(a,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),M(a,"ArrowDown"),M(a,"End"),M(a,"Home"),M(a,"Enter"),M(a,"Escape"),await n(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await s.clear(a),await s.type(a,"vu");const i=t.getByRole("option",{name:"Vue"});await n(i).toBeInTheDocument(),await s.click(i),await n(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},W={render:()=>r.jsx(_t,{}),play:async({canvasElement:e})=>{const a=b(e).getByRole("combobox",{name:"Framework caret priority"});await s.click(a),await s.clear(a),await s.type(a,"ve"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),a.setSelectionRange(1,1),B.keyDown(a,{key:"Home"}),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),B.keyDown(a,{key:"End"}),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},Q={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Combobox"});await s.click(a),await n(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function Ut(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),r.jsx(y,{options:R,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const J={render:()=>r.jsx(Ut,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Framework heading"});await n(a).toHaveAttribute("aria-labelledby","framework-heading"),await n(a).not.toHaveAttribute("aria-label"),await s.click(a);const i=t.getByRole("listbox",{name:"Framework heading"});await n(i).toHaveAttribute("aria-labelledby","framework-heading"),await n(i).not.toHaveAttribute("aria-label")}};function Wt(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"combobox-option-heading",style:{margin:0},children:"Deploy release"}),r.jsx(y,{options:Kt,onValueChange:()=>{},ariaLabel:"Release actions"})]})}const X={render:()=>r.jsx(Wt,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Release actions"});await s.click(a);const i=t.getByRole("option",{name:"Deploy release"});await n(i).toHaveAttribute("aria-labelledby","combobox-option-heading"),await n(i).not.toHaveAttribute("aria-label")}},Y={render:()=>r.jsx(y,{options:Pt,onValueChange:()=>{},ariaLabel:"Release search fallback"}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Release search fallback"});await s.click(a),await s.clear(a),await s.type(a,"rollback"),await n(t.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await n(t.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},Z={render:()=>r.jsx(y,{options:qt,onValueChange:()=>{},ariaLabel:"Release textValue fallback"}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Release textValue fallback"});await s.click(a);const i=t.getByRole("option",{name:"Deploy release"});await n(i).toHaveAttribute("aria-label","Deploy release"),await s.clear(a),await s.type(a,"rollback"),await n(t.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await n(t.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},ee={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Framework focus model"});await s.click(a);const i=t.getByRole("option",{name:"React"});await n(i).toHaveAttribute("tabindex","-1");const p=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(p,"button",{configurable:!0,value:-1}),Object.defineProperty(p,"pointerType",{configurable:!0,value:"touch"}),i.dispatchEvent(p),await n(p.defaultPrevented).toBe(!0),await n(a).toHaveFocus(),await s.click(i),await n(a).toHaveFocus()}};function Qt(){const[e,t]=c.useState(!1),a=e?[{value:"share",label:"Share release"},...Re]:Re;return r.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Press F2 while combobox is open to prepend a new option without resetting active duplicate option."}),r.jsx(F,{tone:"default","data-testid":"combobox-duplicate-rerender-prepend-state",children:e?"on":"off"}),r.jsx(y,{options:a,onValueChange:()=>{},ariaLabel:"Duplicate value stability",onInputKeyDown:i=>{i.key==="F2"&&(i.preventDefault(),t(p=>!p))}})]})}function Jt(){return r.jsxs("div",{style:{width:420,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Duplicate values still expose one deterministic `aria-selected` option by anchoring to the first enabled occurrence."}),r.jsx(y,{value:"react",options:[{value:"react",label:"React archived",disabled:!0},{value:"react",label:"React stable"},{value:"vue",label:"Vue"}],onValueChange:()=>{},ariaLabel:"Duplicate value selected semantics"})]})}const te={render:()=>r.jsx(Qt,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Duplicate value stability"});await s.click(a),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await s.keyboard("{ArrowDown}"),await n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const i=t.getByRole("option",{name:"React legacy"});await n(i).toHaveAttribute("id",a.getAttribute("aria-activedescendant")),await s.keyboard("{F2}"),await me(()=>{n(t.getByTestId("combobox-duplicate-rerender-prepend-state")).toHaveTextContent("on")}),await me(()=>{n(a).toHaveAttribute("aria-activedescendant",n.stringContaining("option-2"))}),await n(t.getByRole("option",{name:"React legacy"})).toHaveAttribute("id",a.getAttribute("aria-activedescendant"))}},ae={render:()=>r.jsx(Jt,{}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Duplicate value selected semantics"});await me(()=>{n(a).toHaveValue("React stable")}),await s.click(a);const i=t.getAllByRole("option").filter(p=>p.getAttribute("aria-selected")==="true");await n(i).toHaveLength(1),await n(i[0]).toHaveTextContent("React stable")}},ne={args:{ariaLabel:"Release search"},render:e=>r.jsx(y,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Release search"});await s.click(a),await n(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await s.clear(a),await s.type(a,"cafe launch"),await n(t.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await n(a).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await s.clear(a),await s.type(a,"no-match"),await n(a).toHaveAttribute("aria-keyshortcuts","Escape")}},oe={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=b(e),a=t.getByRole("combobox",{name:"Framework disabled"});await s.click(a),await n(t.queryByRole("listbox")).toBeNull()}},re={render:()=>r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),r.jsx("button",{type:"button",children:"Before combobox"}),r.jsx(y,{options:R,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=b(e),a=await t.findByRole("button",{name:"Before combobox"}),i=t.getByRole("combobox",{name:"Focus intent combobox"});await s.click(a),await s.tab(),await n(i).toHaveFocus(),await n(i).toHaveAttribute("data-focus-visible","true"),B.mouseDown(i,{button:0,ctrlKey:!0}),await n(i).toHaveAttribute("data-focus-visible","true")}};var De,Ce,Te;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Te=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ie,He,Ae;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(Ae=(He=z.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var Fe,Le,Se;$.parameters={...$.parameters,docs:{...(Fe=$.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Se=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Se.source}}};var je,Ve,Oe;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};var Me,Ke,Pe;_.parameters={..._.parameters,docs:{...(Me=_.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(Ke=_.parameters)==null?void 0:Ke.docs)==null?void 0:Pe.source}}};var qe,Ne,ze;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};var $e,Ge,_e;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(_e=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Ue,We,Qe;Q.parameters={...Q.parameters,docs:{...(Ue=Q.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(We=Q.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};var Je,Xe,Ye;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=X.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;Y.parameters={...Y.parameters,docs:{...(at=Y.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Y.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,it,st;Z.parameters={...Z.parameters,docs:{...(rt=Z.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(st=(it=Z.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ct,lt,ut;ee.parameters={...ee.parameters,docs:{...(ct=ee.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(lt=ee.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var dt,pt,mt;te.parameters={...te.parameters,docs:{...(dt=te.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=te.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var bt,yt,vt;ae.parameters={...ae.parameters,docs:{...(bt=ae.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(yt=ae.parameters)==null?void 0:yt.docs)==null?void 0:vt.source}}};var wt,gt,xt;ne.parameters={...ne.parameters,docs:{...(wt=ne.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(xt=(gt=ne.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var ft,kt,ht;oe.parameters={...oe.parameters,docs:{...(ft=oe.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(ht=(kt=oe.parameters)==null?void 0:kt.docs)==null?void 0:ht.source}}};var Et,Bt,Rt;re.parameters={...re.parameters,docs:{...(Et=re.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Rt=(Bt=re.parameters)==null?void 0:Bt.docs)==null?void 0:Rt.source}}};const ia=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ManagedKeysPreemptedByLocalHandler","ImeCompositionGuard","HomeEndCaretPriority","BlankAriaLabelFallback","LabelledByNameFallback","IconOptionLabelledByPrecedence","IconOptionAriaLabelSearchFallback","IconOptionTextValueNameFallback","ActivedescendantFocusModel","DuplicateValueRerenderStability","DuplicateValueSelectedSemantics","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{ee as ActivedescendantFocusModel,Q as BlankAriaLabelFallback,N as Controlled,oe as DisabledState,te as DuplicateValueRerenderStability,ae as DuplicateValueSelectedSemantics,re as FocusIntentReentry,W as HomeEndCaretPriority,Y as IconOptionAriaLabelSearchFallback,X as IconOptionLabelledByPrecedence,Z as IconOptionTextValueNameFallback,U as ImeCompositionGuard,$ as KeyboardDismissPaths,J as LabelledByNameFallback,_ as ManagedKeysPreemptedByLocalHandler,G as ModifierKeyGuard,ne as SearchNormalizationAndShortcutHints,z as WithCustomEmptyMessage,ia as __namedExportsOrder,ra as default};
