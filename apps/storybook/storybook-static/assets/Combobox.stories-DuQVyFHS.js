import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{I as rt}from"./Input-CMwa0OIu.js";import{B as Z}from"./Badge-ZJmMstsz.js";import{within as m,userEvent as s,expect as o,fireEvent as x}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function re(e,t,a){var b;if(e.length===0)return-1;let i=t;for(let I=0;I<e.length;I+=1)if(i=(i+a+e.length)%e.length,!((b=e[i])!=null&&b.disabled))return i;return-1}function ie(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function it(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function se(e){if(e.key!=="Home"&&e.key!=="End")return!0;const t=e.currentTarget,a=t.selectionStart,i=t.selectionEnd;return a===null||i===null?!0:a!==i?!1:e.key==="Home"?a===0:i===t.value.length}function Qe(e){return typeof e!="number"||e<=0}function st(e){if(!Qe(e.button))return!1;const t=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&t===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function w({options:e,value:t,defaultValue:a,onValueChange:i,placeholder:b="Search option...",emptyMessage:I="No option found.",disabled:v=!1,id:Je,ariaLabel:Xe="Combobox",ariaLabelledBy:Ye}){const A=l.useId(),F=l.useRef(null),U=l.useRef(null),[p,y]=l.useState(!1),[E,g]=l.useState(-1),[W,ee]=l.useState(""),[Ze,et]=l.useState(a);l.useRef(null),l.useRef(null),l.useRef(null);const Q=T(Ye),J=Q===void 0?T(Xe,"Combobox"):void 0,tt=J===void 0?void 0:`${J} options`,B=t??Ze,X=l.useMemo(()=>e.find(n=>n.value===B),[B,e]);l.useEffect(()=>{p||ee(X?le(X):"")},[p,X]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{v&&(y(!1),g(-1))},[v]),l.useEffect(()=>{var c;if(!p)return;const n=((c=F.current)==null?void 0:c.ownerDocument)??document,u=C=>{var D;st(C)&&(C.defaultPrevented||(D=F.current)!=null&&D.contains(C.target)||y(!1))};return n.addEventListener("pointerdown",u),()=>{n.removeEventListener("pointerdown",u)}},[p]);const d=l.useMemo(()=>{const n=ce(W);return n?e.filter(u=>ce([le(u),...u.keywords??[]].join(" ")).includes(n)):e},[e,W]),te=l.useMemo(()=>d.reduce((n,u)=>u.disabled?n:n+1,0),[d]),ae=te>1,ne=p&&te>0,at=l.useMemo(()=>{if(v)return;if(!p)return"Enter";const n=[];return ae&&n.push("ArrowDown","ArrowUp","Home","End"),ne&&n.push("Enter"),p&&n.push("Escape"),n.length>0?n.join(" "):void 0},[ae,ne,v,p]),nt=l.useMemo(()=>{const n=new Map;return d.map(u=>{const c=n.get(u.value)??0;return n.set(u.value,c+1),c===0?u.value:`${u.value}__duplicate-${c}`})},[d]);l.useEffect(()=>{if(!p){g(-1);return}const n=d.findIndex(c=>c.value===B&&!c.disabled);if(n>=0){g(n);return}const u=d.findIndex(c=>!c.disabled);g(u)},[B,d,p]);const oe=n=>{v||n.disabled||(t===void 0&&et(n.value),i==null||i(n.value),y(!1))},L=p&&d.length>0;return r.jsxs("div",{ref:F,style:{display:"grid",gap:8},children:[r.jsx(rt,{ref:U,id:Je,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":L,"aria-controls":L?A:void 0,"aria-activedescendant":L&&E>=0?`${A}-option-${E}`:void 0,"aria-keyshortcuts":at,"aria-label":J,"aria-labelledby":Q,autoComplete:"off",value:W,disabled:v,placeholder:b,onFocus:()=>{v||y(!0)},onBlur:n=>{var u;(u=F.current)!=null&&u.contains(n.relatedTarget)||y(!1)},onChange:n=>{v||(ee(n.target.value),y(!0))},onKeyDown:n=>{var u;if(!v&&!(ie(n.key)&&it(n))&&!((n.altKey||n.ctrlKey||n.metaKey)&&ie(n.key))){if(n.key==="Escape"){y(!1);return}if(n.key==="ArrowDown"){n.preventDefault(),y(!0),g(c=>re(d,c<0?-1:c,1));return}if(n.key==="ArrowUp"){n.preventDefault(),y(!0),g(c=>re(d,c<0?0:c,-1));return}if(n.key==="Home"){if(!se(n))return;n.preventDefault(),y(!0),g(d.findIndex(c=>!c.disabled));return}if(n.key==="End"){if(!se(n))return;n.preventDefault(),y(!0);for(let c=d.length-1;c>=0;c-=1)if(!((u=d[c])!=null&&u.disabled)){g(c);return}}if(n.key==="Enter"&&p&&E>=0){n.preventDefault();const c=d[E];c&&oe(c)}}}}),L?r.jsx("div",{id:A,role:"listbox","aria-label":tt,"aria-labelledby":Q,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.map((n,u)=>{const c=u===E,C=n.value===B,D=T(n.ariaLabelledBy),ot=D===void 0?T(n.ariaLabel):void 0;return r.jsx("button",{id:`${A}-option-${u}`,type:"button",role:"option",tabIndex:-1,"aria-labelledby":D,"aria-label":ot,"aria-selected":C,"aria-disabled":n.disabled||void 0,disabled:n.disabled,onMouseDown:f=>{var R;f.button!==0||f.ctrlKey||n.disabled||(f.preventDefault(),(R=U.current)==null||R.focus())},onPointerDown:f=>{var R;n.disabled||f.pointerType==="mouse"||!Qe(f.button)||f.ctrlKey||(f.preventDefault(),(R=U.current)==null||R.focus())},onMouseEnter:()=>{n.disabled||g(u)},onClick:()=>oe(n),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:c?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:n.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:n.disabled?"not-allowed":"pointer"},children:n.label},nt[u]??`${n.value}__index-${u}`)})}):p?r.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:I}):null]})}function ce(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function le(e){const t=T(e.textValue);if(t!==void 0)return k(t);const a=Y(e.label);return a.length>0?a:k(e.value)}function Y(e){if(typeof e=="string")return k(e);if(typeof e=="number")return k(String(e));if(Array.isArray(e))return k(e.map(a=>Y(a)).filter(a=>a.length>0).join(" "));if(!l.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?k(t["aria-label"]):Y(t.children)}function T(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function k(e){return e.replace(/\s+/g," ").trim()}w.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const h=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],ct=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release",ariaLabelledBy:"combobox-option-heading",textValue:"Deploy release",keywords:["release","ship"]},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release",textValue:"Rollback release",keywords:["undo","revert"]}];function H(e,t){const a=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),e.dispatchEvent(a)}const kt={title:"Form/Combobox",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:h,onValueChange:()=>{}}};function lt(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Z,{tone:"default",children:e})]}),r.jsx(w,{id:"framework-combobox",options:h,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const j={render:()=>r.jsx(lt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework"});await s.click(a),await s.clear(a),await s.type(a,"sv"),await s.keyboard("{ArrowDown}{Enter}"),await o(t.getByText("svelte")).toBeInTheDocument()}},S={args:{options:h,emptyMessage:"No framework match."}},M={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=m(e),a=e.ownerDocument,i=t.getByRole("combobox",{name:"Framework dismiss demo"});await o(i).not.toHaveAttribute("aria-controls"),await s.click(i);const b=t.getByRole("listbox",{name:"Framework dismiss demo options"});await o(i).toHaveAttribute("aria-controls",b.id),a.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(t.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(t.queryByRole("listbox")).not.toBeInTheDocument(),await o(i).not.toHaveAttribute("aria-controls")}};function ut(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Z,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),r.jsx(w,{options:h,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const O={render:()=>r.jsx(ut,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework modifier guard"});await s.click(a),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Control>}{ArrowDown}{/Control}"),await s.keyboard("{Control>}{Enter}{/Control}"),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Meta>}{Escape}{/Meta}"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function dt(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Z,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),r.jsx(w,{options:h,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}function pt(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"When caret is inside query text, Home/End should keep native editing behavior instead of hijacking option focus."}),r.jsx(w,{options:h,value:e,onValueChange:t,ariaLabel:"Framework caret priority"})]})}const P={render:()=>r.jsx(dt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework IME guard"});await s.click(a),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),x.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"End",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"Home",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),H(a,"ArrowDown"),H(a,"End"),H(a,"Home"),H(a,"Enter"),H(a,"Escape"),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await s.clear(a),await s.type(a,"vu");const i=t.getByRole("option",{name:"Vue"});await o(i).toBeInTheDocument(),await s.click(i),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},V={render:()=>r.jsx(pt,{}),play:async({canvasElement:e})=>{const a=m(e).getByRole("combobox",{name:"Framework caret priority"});await s.click(a),await s.clear(a),await s.type(a,"ve"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),a.setSelectionRange(1,1),x.keyDown(a,{key:"Home"}),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),x.keyDown(a,{key:"End"}),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0"))}},K={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Combobox"});await s.click(a),await o(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function mt(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),r.jsx(w,{options:h,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const q={render:()=>r.jsx(mt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework heading"});await o(a).toHaveAttribute("aria-labelledby","framework-heading"),await o(a).not.toHaveAttribute("aria-label"),await s.click(a);const i=t.getByRole("listbox",{name:"Framework heading"});await o(i).toHaveAttribute("aria-labelledby","framework-heading"),await o(i).not.toHaveAttribute("aria-label")}};function bt(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"combobox-option-heading",style:{margin:0},children:"Deploy release"}),r.jsx(w,{options:ct,onValueChange:()=>{},ariaLabel:"Release actions"})]})}const N={render:()=>r.jsx(bt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release actions"});await s.click(a);const i=t.getByRole("option",{name:"Deploy release"});await o(i).toHaveAttribute("aria-labelledby","combobox-option-heading"),await o(i).not.toHaveAttribute("aria-label")}},z={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework focus model"});await s.click(a);const i=t.getByRole("option",{name:"React"});await o(i).toHaveAttribute("tabindex","-1");const b=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(b,"button",{configurable:!0,value:-1}),Object.defineProperty(b,"pointerType",{configurable:!0,value:"touch"}),i.dispatchEvent(b),await o(b.defaultPrevented).toBe(!0),await o(a).toHaveFocus(),await s.click(i),await o(a).toHaveFocus()}},$={args:{ariaLabel:"Release search"},render:e=>r.jsx(w,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release search"});await s.click(a),await o(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await s.clear(a),await s.type(a,"cafe launch"),await o(t.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await o(a).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await s.clear(a),await s.type(a,"no-match"),await o(a).toHaveAttribute("aria-keyshortcuts","Escape")}},G={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework disabled"});await s.click(a),await o(t.queryByRole("listbox")).toBeNull()}},_={render:()=>r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),r.jsx("button",{type:"button",children:"Before combobox"}),r.jsx(w,{options:h,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=m(e),a=await t.findByRole("button",{name:"Before combobox"}),i=t.getByRole("combobox",{name:"Focus intent combobox"});await s.click(a),await s.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),x.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var ue,de,pe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=j.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,be,ye;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(ye=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,ve,ge;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ge=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var fe,xe,he;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ke,Ee,Be;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Ce,De,Re;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Re=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var He,Te,Ie;K.parameters={...K.parameters,docs:{...(He=K.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ie=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var Ae,Fe,Le;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var je,Se,Me;N.parameters={...N.parameters,docs:{...(je=N.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Me=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};var Oe,Pe,Ve;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ve=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Ke,qe,Ne;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ne=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var ze,$e,Ge;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ge=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var _e,Ue,We;_.parameters={..._.parameters,docs:{...(_e=_.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(We=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};const Et=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","HomeEndCaretPriority","BlankAriaLabelFallback","LabelledByNameFallback","IconOptionLabelledByPrecedence","ActivedescendantFocusModel","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{z as ActivedescendantFocusModel,K as BlankAriaLabelFallback,j as Controlled,G as DisabledState,_ as FocusIntentReentry,V as HomeEndCaretPriority,N as IconOptionLabelledByPrecedence,P as ImeCompositionGuard,M as KeyboardDismissPaths,q as LabelledByNameFallback,O as ModifierKeyGuard,$ as SearchNormalizationAndShortcutHints,S as WithCustomEmptyMessage,Et as __namedExportsOrder,kt as default};
