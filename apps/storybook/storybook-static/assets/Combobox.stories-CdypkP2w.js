import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{I as et}from"./Input-CMwa0OIu.js";import{B as Y}from"./Badge-ZJmMstsz.js";import{within as y,userEvent as c,expect as o,fireEvent as h}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function oe(e,t,a){var m;if(e.length===0)return-1;let i=t;for(let A=0;A<e.length;A+=1)if(i=(i+a+e.length)%e.length,!((m=e[i])!=null&&m.disabled))return i;return-1}function re(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function tt(e){const t=e.nativeEvent;return t.isComposing?!0:typeof t.keyCode=="number"&&t.keyCode===229}function $e(e){return typeof e!="number"||e<=0}function at(e){if(!$e(e.button))return!1;const t=typeof e.button=="number"?e.button:0;return!(e.ctrlKey&&t===0||(e.pointerType==="mouse"||e.pointerType==="")&&typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1))}function f({options:e,value:t,defaultValue:a,onValueChange:i,placeholder:m="Search option...",emptyMessage:A="No option found.",disabled:w=!1,id:Ge,ariaLabel:_e="Combobox",ariaLabelledBy:Ue}){const H=u.useId(),F=u.useRef(null),_=u.useRef(null),[p,b]=u.useState(!1),[E,v]=u.useState(-1),[U,Z]=u.useState(""),[We,Qe]=u.useState(a);u.useRef(null),u.useRef(null),u.useRef(null);const W=T(Ue),Q=W===void 0?T(_e,"Combobox"):void 0,Je=Q===void 0?void 0:`${Q} options`,B=t??We,J=u.useMemo(()=>e.find(n=>n.value===B),[B,e]);u.useEffect(()=>{p||Z(J?se(J):"")},[p,J]),u.useEffect(()=>{},[e]),u.useEffect(()=>{},[e]),u.useEffect(()=>{},[e]),u.useEffect(()=>{w&&(b(!1),v(-1))},[w]),u.useEffect(()=>{var s;if(!p)return;const n=((s=F.current)==null?void 0:s.ownerDocument)??document,l=C=>{var D;at(C)&&(C.defaultPrevented||(D=F.current)!=null&&D.contains(C.target)||b(!1))};return n.addEventListener("pointerdown",l),()=>{n.removeEventListener("pointerdown",l)}},[p]);const d=u.useMemo(()=>{const n=ie(U);return n?e.filter(l=>ie([se(l),...l.keywords??[]].join(" ")).includes(n)):e},[e,U]),ee=u.useMemo(()=>d.reduce((n,l)=>l.disabled?n:n+1,0),[d]),te=ee>1,ae=p&&ee>0,Xe=u.useMemo(()=>{if(w)return;if(!p)return"Enter";const n=[];return te&&n.push("ArrowDown","ArrowUp","Home","End"),ae&&n.push("Enter"),p&&n.push("Escape"),n.length>0?n.join(" "):void 0},[te,ae,w,p]),Ye=u.useMemo(()=>{const n=new Map;return d.map(l=>{const s=n.get(l.value)??0;return n.set(l.value,s+1),s===0?l.value:`${l.value}__duplicate-${s}`})},[d]);u.useEffect(()=>{if(!p){v(-1);return}const n=d.findIndex(s=>s.value===B&&!s.disabled);if(n>=0){v(n);return}const l=d.findIndex(s=>!s.disabled);v(l)},[B,d,p]);const ne=n=>{w||n.disabled||(t===void 0&&Qe(n.value),i==null||i(n.value),b(!1))},L=p&&d.length>0;return r.jsxs("div",{ref:F,style:{display:"grid",gap:8},children:[r.jsx(et,{ref:_,id:Ge,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":L,"aria-controls":L?H:void 0,"aria-activedescendant":L&&E>=0?`${H}-option-${E}`:void 0,"aria-keyshortcuts":Xe,"aria-label":Q,"aria-labelledby":W,autoComplete:"off",value:U,disabled:w,placeholder:m,onFocus:()=>{w||b(!0)},onBlur:n=>{var l;(l=F.current)!=null&&l.contains(n.relatedTarget)||b(!1)},onChange:n=>{w||(Z(n.target.value),b(!0))},onKeyDown:n=>{var l;if(!w&&!(re(n.key)&&tt(n))&&!((n.altKey||n.ctrlKey||n.metaKey)&&re(n.key))){if(n.key==="Escape"){b(!1);return}if(n.key==="ArrowDown"){n.preventDefault(),b(!0),v(s=>oe(d,s<0?-1:s,1));return}if(n.key==="ArrowUp"){n.preventDefault(),b(!0),v(s=>oe(d,s<0?0:s,-1));return}if(n.key==="Home"){n.preventDefault(),b(!0),v(d.findIndex(s=>!s.disabled));return}if(n.key==="End"){n.preventDefault(),b(!0);for(let s=d.length-1;s>=0;s-=1)if(!((l=d[s])!=null&&l.disabled)){v(s);return}}if(n.key==="Enter"&&p&&E>=0){n.preventDefault();const s=d[E];s&&ne(s)}}}}),L?r.jsx("div",{id:H,role:"listbox","aria-label":Je,"aria-labelledby":W,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.map((n,l)=>{const s=l===E,C=n.value===B,D=T(n.ariaLabelledBy),Ze=D===void 0?T(n.ariaLabel):void 0;return r.jsx("button",{id:`${H}-option-${l}`,type:"button",role:"option",tabIndex:-1,"aria-labelledby":D,"aria-label":Ze,"aria-selected":C,"aria-disabled":n.disabled||void 0,disabled:n.disabled,onMouseDown:g=>{var R;g.button!==0||g.ctrlKey||n.disabled||(g.preventDefault(),(R=_.current)==null||R.focus())},onPointerDown:g=>{var R;n.disabled||g.pointerType==="mouse"||!$e(g.button)||g.ctrlKey||(g.preventDefault(),(R=_.current)==null||R.focus())},onMouseEnter:()=>{n.disabled||v(l)},onClick:()=>ne(n),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:s?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:n.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:n.disabled?"not-allowed":"pointer"},children:n.label},Ye[l]??`${n.value}__index-${l}`)})}):p?r.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:A}):null]})}function ie(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function se(e){const t=T(e.textValue);if(t!==void 0)return k(t);const a=X(e.label);return a.length>0?a:k(e.value)}function X(e){if(typeof e=="string")return k(e);if(typeof e=="number")return k(String(e));if(Array.isArray(e))return k(e.map(a=>X(a)).filter(a=>a.length>0).join(" "));if(!u.isValidElement(e))return"";const t=e.props;return t["aria-hidden"]===!0||t["aria-hidden"]==="true"?"":typeof t["aria-label"]=="string"&&t["aria-label"].trim().length>0?k(t["aria-label"]):X(t.children)}function T(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function k(e){return e.replace(/\s+/g," ").trim()}f.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}}};const x=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],nt=[{value:"deploy",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),ariaLabel:"Deploy release",ariaLabelledBy:"combobox-option-heading",textValue:"Deploy release",keywords:["release","ship"]},{value:"rollback",label:r.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),ariaLabel:"Rollback release",textValue:"Rollback release",keywords:["undo","revert"]}];function I(e,t){const a=new KeyboardEvent("keydown",{key:t,bubbles:!0,cancelable:!0});Object.defineProperty(a,"keyCode",{value:229}),e.dispatchEvent(a)}const wt={title:"Form/Combobox",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:x,onValueChange:()=>{}}};function ot(){const[e,t]=u.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Y,{tone:"default",children:e})]}),r.jsx(f,{id:"framework-combobox",options:x,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const j={render:()=>r.jsx(ot,{}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Framework"});await c.click(a),await c.clear(a),await c.type(a,"sv"),await c.keyboard("{ArrowDown}{Enter}"),await o(t.getByText("svelte")).toBeInTheDocument()}},S={args:{options:x,emptyMessage:"No framework match."}},M={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=y(e),a=e.ownerDocument,i=t.getByRole("combobox",{name:"Framework dismiss demo"});await o(i).not.toHaveAttribute("aria-controls"),await c.click(i);const m=t.getByRole("listbox",{name:"Framework dismiss demo options"});await o(i).toHaveAttribute("aria-controls",m.id),a.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await o(t.getByRole("listbox",{name:"Framework dismiss demo options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.queryByRole("listbox")).not.toBeInTheDocument(),await o(i).not.toHaveAttribute("aria-controls")}};function rt(){const[e,t]=u.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Y,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),r.jsx(f,{options:x,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const O={render:()=>r.jsx(rt,{}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Framework modifier guard"});await c.click(a),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await c.keyboard("{Control>}{ArrowDown}{/Control}"),await c.keyboard("{Control>}{Enter}{/Control}"),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Meta>}{Escape}{/Meta}"),await o(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await o(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}};function it(){const[e,t]=u.useState("react");return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),r.jsx(Y,{tone:"default","data-testid":"combobox-ime-selected-value",children:e})]}),r.jsx(f,{options:x,value:e,onValueChange:t,ariaLabel:"Framework IME guard"})]})}const V={render:()=>r.jsx(it,{}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Framework IME guard"});await c.click(a),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),h.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),h.keyDown(a,{key:"End",isComposing:!0,keyCode:229,which:229}),h.keyDown(a,{key:"Home",isComposing:!0,keyCode:229,which:229}),h.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),h.keyDown(a,{key:"Escape",isComposing:!0,keyCode:229,which:229}),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),I(a,"ArrowDown"),I(a,"End"),I(a,"Home"),I(a,"Enter"),I(a,"Escape"),await o(t.getByRole("listbox",{name:"Framework IME guard options"})).toBeInTheDocument(),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("react"),await o(a).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await c.clear(a),await c.type(a,"vu");const i=t.getByRole("option",{name:"Vue"});await o(i).toBeInTheDocument(),await c.click(i),await o(t.getByTestId("combobox-ime-selected-value")).toHaveTextContent("vue")}},K={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Combobox"});await c.click(a),await o(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}};function st(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"framework-heading",style:{margin:0},children:"Framework heading"}),r.jsx(f,{options:x,onValueChange:()=>{},ariaLabelledBy:"framework-heading"})]})}const P={render:()=>r.jsx(st,{}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Framework heading"});await o(a).toHaveAttribute("aria-labelledby","framework-heading"),await o(a).not.toHaveAttribute("aria-label"),await c.click(a);const i=t.getByRole("listbox",{name:"Framework heading"});await o(i).toHaveAttribute("aria-labelledby","framework-heading"),await o(i).not.toHaveAttribute("aria-label")}};function ct(){return r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("h3",{id:"combobox-option-heading",style:{margin:0},children:"Deploy release"}),r.jsx(f,{options:nt,onValueChange:()=>{},ariaLabel:"Release actions"})]})}const q={render:()=>r.jsx(ct,{}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Release actions"});await c.click(a);const i=t.getByRole("option",{name:"Deploy release"});await o(i).toHaveAttribute("aria-labelledby","combobox-option-heading"),await o(i).not.toHaveAttribute("aria-label")}},N={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Framework focus model"});await c.click(a);const i=t.getByRole("option",{name:"React"});await o(i).toHaveAttribute("tabindex","-1");const m=new Event("pointerdown",{bubbles:!0,cancelable:!0});Object.defineProperty(m,"button",{configurable:!0,value:-1}),Object.defineProperty(m,"pointerType",{configurable:!0,value:"touch"}),i.dispatchEvent(m),await o(m.defaultPrevented).toBe(!0),await o(a).toHaveFocus(),await c.click(i),await o(a).toHaveFocus()}},z={args:{ariaLabel:"Release search"},render:e=>r.jsx(f,{...e,options:[{value:"cafe-launch",label:"Café Launch",keywords:["déploiement","release"]},{value:"release-notes",label:"Release Notes",keywords:["notes"]}],onValueChange:()=>{}}),play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Release search"});await c.click(a),await o(a).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End Enter Escape"),await c.clear(a),await c.type(a,"cafe launch"),await o(t.getByRole("option",{name:"Café Launch"})).toBeInTheDocument(),await o(a).toHaveAttribute("aria-keyshortcuts","Enter Escape"),await c.clear(a),await c.type(a,"no-match"),await o(a).toHaveAttribute("aria-keyshortcuts","Escape")}},$={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=y(e),a=t.getByRole("combobox",{name:"Framework disabled"});await c.click(a),await o(t.queryByRole("listbox")).toBeNull()}},G={render:()=>r.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores combobox focus-visible state."}),r.jsx("button",{type:"button",children:"Before combobox"}),r.jsx(f,{options:x,onValueChange:()=>{},ariaLabel:"Focus intent combobox"})]}),play:async({canvasElement:e})=>{const t=y(e),a=await t.findByRole("button",{name:"Before combobox"}),i=t.getByRole("combobox",{name:"Focus intent combobox"});await c.click(a),await c.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),h.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var ce,le,ue;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,pe,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ye,we;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ve,fe,ge;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var xe,he,ke;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ke=(he=V.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var Ee,Be,Ce;K.parameters={...K.parameters,docs:{...(Ee=K.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(Be=K.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var De,Re,Ie;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Te,Ae,He;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(He=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var Fe,Le,je;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(je=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var Se,Me,Oe;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ve,Ke,Pe;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Pe=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:Pe.source}}};var qe,Ne,ze;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};const vt=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","ImeCompositionGuard","BlankAriaLabelFallback","LabelledByNameFallback","IconOptionLabelledByPrecedence","ActivedescendantFocusModel","SearchNormalizationAndShortcutHints","DisabledState","FocusIntentReentry"];export{N as ActivedescendantFocusModel,K as BlankAriaLabelFallback,j as Controlled,$ as DisabledState,G as FocusIntentReentry,q as IconOptionLabelledByPrecedence,V as ImeCompositionGuard,M as KeyboardDismissPaths,P as LabelledByNameFallback,O as ModifierKeyGuard,z as SearchNormalizationAndShortcutHints,S as WithCustomEmptyMessage,vt as __namedExportsOrder,wt as default};
