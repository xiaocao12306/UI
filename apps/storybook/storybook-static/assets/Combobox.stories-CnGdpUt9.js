import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{I as lt}from"./Input-ueoPJ8SP.js";import{B as ee}from"./Badge-ZJmMstsz.js";import{within as m,userEvent as s,expect as o,fireEvent as x}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function ie(e,t,a){var b;if(e.length===0)return-1;let i=t;for(let H=0;H<e.length;H+=1)if(i=(i+a+e.length)%e.length,!((b=e[i])!=null&&b.disabled))return i;return-1}function se(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function ut(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function ce(e){if(e.key!=="Home"&&e.key!=="End")return!0;const t=e.currentTarget,a=t.selectionStart,i=t.selectionEnd;return a===null||i===null?!0:a!==i?!1:e.key==="Home"?a===0:i===t.value.length}function Ze(e){return typeof e!="number"||e<=0}function dt(e){if(!Ze(e.button))return!1;const t=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&t===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function w({options:e,value:t,defaultValue:a,onValueChange:i,placeholder:b="Search option...",emptyMessage:H="No option found.",disabled:v=!1,id:et,ariaLabel:tt="Combobox",ariaLabelledBy:at}){const A=l.useId(),F=l.useRef(null),W=l.useRef(null),[p,y]=l.useState(!1),[B,g]=l.useState(-1),[Q,te]=l.useState(""),[nt,ot]=l.useState(a);l.useRef(null),l.useRef(null),l.useRef(null);const J=E(at),X=J===void 0?E(tt,"Combobox"):void 0,rt=X===void 0?void 0:`${X} options`,C=t??nt,Y=l.useMemo(()=>e.find(n=>n.value===C),[C,e]);l.useEffect(()=>{p||te(Y?ue(Y):"")},[p,Y]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{},[e]),l.useEffect(()=>{v&&(y(!1),g(-1))},[v]),l.useEffect(()=>{var c;if(!p)return;const n=((c=F.current)==null?void 0:c.ownerDocument)??document,u=D=>{var R;dt(D)&&(D.defaultPrevented||(R=F.current)!=null&&R.contains(D.target)||y(!1))};return n.addEventListener("pointerdown",u),()=>{n.removeEventListener("pointerdown",u)}},[p]);const d=l.useMemo(()=>{const n=le(Q);return n?e.filter(u=>le([ue(u),...u.keywords??[]].join(" ")).includes(n)):e},[e,Q]),ae=l.useMemo(()=>d.reduce((n,u)=>u.disabled?n:n+1,0),[d]),ne=ae>1,oe=p&&ae>0,it=l.useMemo(()=>{if(v)return;if(!p)return"Enter";const n=[];return ne&&n.push("ArrowDown","ArrowUp","Home","End"),oe&&n.push("Enter"),p&&n.push("Escape"),n.length>0?n.join(" "):void 0},[ne,oe,v,p]),st=l.useMemo(()=>{const n=new Map;return d.map(u=>{const c=n.get(u.value)??0;return n.set(u.value,c+1),c===0?u.value:`${u.value}__duplicate-${c}`})},[d]);l.useEffect(()=>{if(!p){g(-1);return}const n=d.findIndex(c=>c.value===C&&!c.disabled);if(n>=0){g(n);return}const u=d.findIndex(c=>!c.disabled);g(u)},[C,d,p]);const re=n=>{v||n.disabled||(t===void 0&&ot(n.value),i==null||i(n.value),y(!1))},L=p&&d.length>0;return r.jsxs("div",{ref:F,style:{display:"grid",gap:8},children:[r.jsx(lt,{ref:W,id:et,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":L,"aria-controls":L?A:void 0,"aria-activedescendant":L&&B>=0?`${A}-option-${B}`:void 0,"aria-keyshortcuts":it,"aria-label":X,"aria-labelledby":J,autoComplete:"off",value:Q,disabled:v,placeholder:b,onFocus:()=>{v||y(!0)},onBlur:n=>{var u;(u=F.current)!=null&&u.contains(n.relatedTarget)||y(!1)},onChange:n=>{v||(te(n.target.value),y(!0))},onKeyDown:n=>{var u;if(!v&&!(se(n.key)&&ut(n))&&!((n.altKey||n.ctrlKey||n.metaKey)&&se(n.key))){if(n.key==="Escape"){y(!1);return}if(n.key==="ArrowDown"){n.preventDefault(),y(!0),g(c=>ie(d,c<0?-1:c,1));return}if(n.key==="ArrowUp"){n.preventDefault(),y(!0),g(c=>ie(d,c<0?0:c,-1));return}if(n.key==="Home"){if(!ce(n))return;n.preventDefault(),y(!0),g(d.findIndex(c=>!c.disabled));return}if(n.key==="End"){if(!ce(n))return;n.preventDefault(),y(!0);for(let c=d.length-1;c>=0;c-=1)if(!((u=d[c])!=null&&u.disabled)){g(c);return}}if(n.key==="Enter"&&p&&B>=0){n.preventDefault();const c=d[B];c&&re(c)}}}}),L?r.jsx("div",{id:A,role:"listbox","aria-label":rt,"aria-labelledby":J,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.map((n,u)=>{const c=u===B,D=n.value===C,R=E(n.ariaLabelledBy),ct=R===void 0?E(n.ariaLabel):void 0;return r.jsx("button",{id:`${A}-option-${u}`,type:"button",role:"option",tabIndex:-1,"aria-labelledby":R,"aria-label":ct,"aria-selected":D,"aria-disabled":n.disabled||void 0,disabled:n.disabled,onMouseDown:f=>{var I;f.button!==0||f.ctrlKey||n.disabled||(f.preventDefault(),(I=W.current)==null||I.focus())},onPointerDown:f=>{var I;n.disabled||f.pointerType==="mouse"||!Ze(f.button)||f.ctrlKey||(f.preventDefault(),(I=W.current)==null||I.focus())},onMouseEnter:()=>{n.disabled||g(u)},onClick:()=>re(n),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:c?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:n.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:n.disabled?"not-allowed":"pointer"},children:n.label},st[u]??`${n.value}__index-${u}`)})}):p?r.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:H}):null]})}function le(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function ue(e){const t=E(e.textValue);if(t!==void 0)return k(t);const a=E(e.ariaLabel);if(a!==void 0)return k(a);const i=Z(e.label);return i.length>0?i:k(e.value)}function Z(e){if(typeof e=="string")return k(e);if(typeof e=="number")return k(String(e));if(Array.isArray(e))return k(e.map(a=>Z(a)).filter(a=>a.length>0).join(" "));if(!l.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?k(t["aria-label"]):Z(t.children)}function E(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function k(e){return e.replace(/\s+/g," ").trim()}w.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const h=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],pt=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release",ariaLabelledBy:"combobox-option-heading",textValue:"Deploy release",keywords:["release","ship"]},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release",textValue:"Rollback release",keywords:["undo","revert"]}],mt=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release"},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release"}];function T(e,t){const a=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),e.dispatchEvent(a)}const Rt={title:"Form/Combobox",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:h,onValueChange:()=>{}}};function bt(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(ee,{tone:"default",children:e})]}),r.jsx(w,{id:"framework-combobox",options:h,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const j={render:()=>r.jsx(bt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework"});await s.click(a),await s.clear(a),await s.type(a,"sv"),await s.keyboard("{ArrowDown}{Enter}"),await o(t.getByText("svelte")).toBeInTheDocument()}},S={args:{options:h,emptyMessage:"No framework match."}},O={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=m(e),a=e.ownerDocument,i=t.getByRole("combobox",{name:"Framework dismiss demo"});await o(i).not.toHaveAttribute("aria-controls"),await s.click(i);const b=t.getByRole("listbox",{name:"Framework dismiss demo options"});await o(i).toHaveAttribute("aria-controls",b.id),a.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(t.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(t.queryByRole("listbox")).not.toBeInTheDocument(),await o(i).not.toHaveAttribute("aria-controls")}};function yt(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(ee,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),r.jsx(w,{options:h,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const M={render:()=>r.jsx(yt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework modifier guard"});await s.click(a),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await s.keyboard("{Control>}{ArrowDown}{/Control}"),await s.keyboard("{Control>}{Enter}{/Control}"),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Meta>}{Escape}{/Meta}"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await s.keyboard("{Escape}"),await o(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function wt(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(ee,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),r.jsx(w,{options:h,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}function vt(){const[e,t]=l.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"When caret is inside query text, Home/End should keep native editing behavior instead of hijacking option focus."}),r.jsx(w,{options:h,value:e,onValueChange:t,ariaLabel:"Framework caret priority"})]})}const V={render:()=>r.jsx(wt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework IME guard"});await s.click(a),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),x.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"End",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"Home",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),x.keyDown(a,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),T(a,"ArrowDown"),T(a,"End"),T(a,"Home"),T(a,"Enter"),T(a,"Escape"),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await s.clear(a),await s.type(a,"vu");const i=t.getByRole("option",{name:"Vue"});await o(i).toBeInTheDocument(),await s.click(i),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},P={render:()=>r.jsx(vt,{}),play:async({canvasElement:e})=>{const a=m(e).getByRole("combobox",{name:"Framework caret priority"});await s.click(a),await s.clear(a),await s.type(a,"ve"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),a.setSelectionRange(1,1),x.keyDown(a,{key:"Home"}),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),x.keyDown(a,{key:"End"}),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0"))}},K={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Combobox"});await s.click(a),await o(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function gt(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),r.jsx(w,{options:h,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const q={render:()=>r.jsx(gt,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework heading"});await o(a).toHaveAttribute("aria-labelledby","framework-heading"),await o(a).not.toHaveAttribute("aria-label"),await s.click(a);const i=t.getByRole("listbox",{name:"Framework heading"});await o(i).toHaveAttribute("aria-labelledby","framework-heading"),await o(i).not.toHaveAttribute("aria-label")}};function ft(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"combobox-option-heading",style:{margin:0},children:"Deploy release"}),r.jsx(w,{options:pt,onValueChange:()=>{},ariaLabel:"Release actions"})]})}const N={render:()=>r.jsx(ft,{}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release actions"});await s.click(a);const i=t.getByRole("option",{name:"Deploy release"});await o(i).toHaveAttribute("aria-labelledby","combobox-option-heading"),await o(i).not.toHaveAttribute("aria-label")}},z={render:()=>r.jsx(w,{options:mt,onValueChange:()=>{},ariaLabel:"Release search fallback"}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release search fallback"});await s.click(a),await s.clear(a),await s.type(a,"rollback"),await o(t.getByRole("option",{name:"Rollback release"})).toBeInTheDocument(),await o(t.queryByRole("option",{name:"Deploy release"})).not.toBeInTheDocument()}},$={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework focus model"});await s.click(a);const i=t.getByRole("option",{name:"React"});await o(i).toHaveAttribute("tabindex","-1");const b=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(b,"button",{configurable:!0,value:-1}),Object.defineProperty(b,"pointerType",{configurable:!0,value:"touch"}),i.dispatchEvent(b),await o(b.defaultPrevented).toBe(!0),await o(a).toHaveFocus(),await s.click(i),await o(a).toHaveFocus()}},G={args:{ariaLabel:"Release search"},render:e=>r.jsx(w,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Release search"});await s.click(a),await o(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await s.clear(a),await s.type(a,"cafe launch"),await o(t.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await o(a).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await s.clear(a),await s.type(a,"no-match"),await o(a).toHaveAttribute("aria-keyshortcuts","Escape")}},_={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=m(e),a=t.getByRole("combobox",{name:"Framework disabled"});await s.click(a),await o(t.queryByRole("listbox")).toBeNull()}},U={render:()=>r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),r.jsx("button",{type:"button",children:"Before combobox"}),r.jsx(w,{options:h,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=m(e),a=await t.findByRole("button",{name:"Before combobox"}),i=t.getByRole("combobox",{name:"Focus intent combobox"});await s.click(a),await s.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),x.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var de,pe,me;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ye,we;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(we=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ve,ge,fe;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var xe,he,ke;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ke=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var Ee,Be,Ce;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var De,Re,Ie;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Te,He,Ae;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ae=(He=K.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var Fe,Le,je;q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(je=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var Se,Oe,Me;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Me=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};var Ve,Pe,Ke;z.parameters={...z.parameters,docs:{...(Ve=z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ke=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Ke.source}}};var qe,Ne,ze;$.parameters={...$.parameters,docs:{...(qe=$.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};var $e,Ge,_e;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(_e=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Ue,We,Qe;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(We=_.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};var Je,Xe,Ye;U.parameters={...U.parameters,docs:{...(Je=U.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};const It=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","HomeEndCaretPriority","BlankAriaLabelFallback","LabelledByNameFallback","IconOptionLabelledByPrecedence","IconOptionAriaLabelSearchFallback","ActivedescendantFocusModel","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{$ as ActivedescendantFocusModel,K as BlankAriaLabelFallback,j as Controlled,_ as DisabledState,U as FocusIntentReentry,P as HomeEndCaretPriority,z as IconOptionAriaLabelSearchFallback,N as IconOptionLabelledByPrecedence,V as ImeCompositionGuard,O as KeyboardDismissPaths,q as LabelledByNameFallback,M as ModifierKeyGuard,G as SearchNormalizationAndShortcutHints,S as WithCustomEmptyMessage,It as __namedExportsOrder,Rt as default};
