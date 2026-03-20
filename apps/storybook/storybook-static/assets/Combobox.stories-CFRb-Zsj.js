import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{I as ue}from"./Input-pKdbw4ss.js";import{B as de}from"./Badge-ZJmMstsz.js";import{within as w,userEvent as m,expect as b}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function O(t,o,r){var x;if(t.length===0)return-1;let i=o;for(let g=0;g<t.length;g+=1)if(i=(i+r+t.length)%t.length,!((x=t[i])!=null&&x.disabled))return i;return-1}function S({options:t,value:o,defaultValue:r,onValueChange:i,placeholder:x="Search option...",emptyMessage:g="No option found.",disabled:f=!1,id:ne,ariaLabel:A="Combobox"}){const k=s.useId(),I=s.useRef(null),L=s.useRef(null),[l,c]=s.useState(!1),[y,p]=s.useState(-1),[q,j]=s.useState(""),[se,ie]=s.useState(r);s.useRef(null);const H=typeof A=="string"&&A.trim().length>0?A.trim():"Combobox",le=`${H} options`,v=o??se,E=s.useMemo(()=>t.find(e=>e.value===v),[v,t]);s.useEffect(()=>{l||j((E==null?void 0:E.label)??"")},[l,E]),s.useEffect(()=>{},[t]),s.useEffect(()=>{f&&(c(!1),p(-1))},[f]),s.useEffect(()=>{if(!l)return;const e=n=>{var a;(a=I.current)!=null&&a.contains(n.target)||c(!1)};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[l]);const u=s.useMemo(()=>{const e=q.trim().toLowerCase();return e?t.filter(n=>[n.label,...n.keywords??[]].join(" ").toLowerCase().includes(e)):t},[t,q]);s.useEffect(()=>{if(!l){p(-1);return}const e=u.findIndex(a=>a.value===v&&!a.disabled);if(e>=0){p(e);return}const n=u.findIndex(a=>!a.disabled);p(n)},[v,u,l]);const M=e=>{f||e.disabled||(o===void 0&&ie(e.value),i==null||i(e.value),c(!1))};return d.jsxs("div",{ref:I,style:{display:"grid",gap:8},children:[d.jsx(ue,{ref:L,id:ne,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":l,"aria-controls":l?k:void 0,"aria-activedescendant":l&&y>=0?`${k}-option-${y}`:void 0,"aria-label":H,autoComplete:"off",value:q,disabled:f,placeholder:x,onFocus:()=>{f||c(!0)},onBlur:e=>{var n;(n=I.current)!=null&&n.contains(e.relatedTarget)||c(!1)},onChange:e=>{f||(j(e.target.value),c(!0))},onKeyDown:e=>{var n;if(!f){if(e.key==="Escape"){c(!1);return}if(e.key==="ArrowDown"){e.preventDefault(),c(!0),p(a=>O(u,a<0?-1:a,1));return}if(e.key==="ArrowUp"){e.preventDefault(),c(!0),p(a=>O(u,a<0?0:a,-1));return}if(e.key==="Home"){e.preventDefault(),c(!0),p(u.findIndex(a=>!a.disabled));return}if(e.key==="End"){e.preventDefault(),c(!0);for(let a=u.length-1;a>=0;a-=1)if(!((n=u[a])!=null&&n.disabled)){p(a);return}}if(e.key==="Enter"&&l&&y>=0){e.preventDefault();const a=u[y];a&&M(a)}}}}),l?d.jsx("div",{id:k,role:"listbox","aria-label":le,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:u.length>0?u.map((e,n)=>{const a=n===y,ce=e.value===v;return d.jsx("button",{id:`${k}-option-${n}`,type:"button",role:"option",tabIndex:-1,"aria-selected":ce,"aria-disabled":e.disabled||void 0,disabled:e.disabled,onMouseDown:N=>{var V;N.button!==0||e.disabled||(N.preventDefault(),(V=L.current)==null||V.focus())},onMouseEnter:()=>{e.disabled||p(n)},onClick:()=>M(e),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.value)}):d.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:g})}):null]})}S.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const T=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],ge={title:"Form/Combobox",component:S,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:T,onValueChange:()=>{}}};function me(){const[t,o]=s.useState("react");return d.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),d.jsx(de,{tone:"default",children:t})]}),d.jsx(S,{id:"framework-combobox",options:T,value:t,onValueChange:o,ariaLabel:"Framework"})]})}const h={render:()=>d.jsx(me,{}),play:async({canvasElement:t})=>{const o=w(t),r=o.getByRole("combobox",{name:"Framework"});await m.click(r),await m.clear(r),await m.type(r,"sv"),await m.keyboard("{ArrowDown}{Enter}"),await b(o.getByText("svelte")).toBeInTheDocument()}},B={args:{options:T,emptyMessage:"No framework match."}},R={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:t})=>{const o=w(t),r=o.getByRole("combobox",{name:"Framework dismiss demo"});await b(r).not.toHaveAttribute("aria-controls"),await m.click(r);const i=o.getByRole("listbox",{name:"Framework dismiss demo options"});await b(r).toHaveAttribute("aria-controls",i.id),await m.keyboard("{Escape}"),await b(o.queryByRole("listbox")).not.toBeInTheDocument(),await b(r).not.toHaveAttribute("aria-controls")}},F={args:{ariaLabel:"   "},play:async({canvasElement:t})=>{const o=w(t),r=o.getByRole("combobox",{name:"Combobox"});await m.click(r),await b(o.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},C={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:t})=>{const o=w(t),r=o.getByRole("combobox",{name:"Framework focus model"});await m.click(r);const i=o.getByRole("option",{name:"React"});await b(i).toHaveAttribute("tabindex","-1"),await m.click(i),await b(r).toHaveFocus()}},D={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:t})=>{const o=w(t),r=o.getByRole("combobox",{name:"Framework disabled"});await m.click(r),await b(o.queryByRole("listbox")).toBeNull()}};var $,_,K;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(_=h.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var P,W,z;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(z=(W=B.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var Q,U,G;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(G=(U=R.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,X,Y;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=F.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,oe,re;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const ke=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","BlankAriaLabelFallback","ActivedescendantFocusModel","DisabledState"];export{C as ActivedescendantFocusModel,F as BlankAriaLabelFallback,h as Controlled,D as DisabledState,R as KeyboardDismissPaths,B as WithCustomEmptyMessage,ke as __namedExportsOrder,ge as default};
