import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{I as ue}from"./Input-pKdbw4ss.js";import{B as de}from"./Badge-ZJmMstsz.js";import{within as x,userEvent as m,expect as b}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function $(t,o,r){var g;if(t.length===0)return-1;let i=o;for(let k=0;k<t.length;k+=1)if(i=(i+r+t.length)%t.length,!((g=t[i])!=null&&g.disabled))return i;return-1}function L({options:t,value:o,defaultValue:r,onValueChange:i,placeholder:g="Search option...",emptyMessage:k="No option found.",disabled:f=!1,id:se,ariaLabel:q="Combobox"}){const E=s.useId(),h=s.useRef(null),H=s.useRef(null),[l,c]=s.useState(!1),[y,p]=s.useState(-1),[S,M]=s.useState(""),[ie,le]=s.useState(r);s.useRef(null);const N=typeof q=="string"&&q.trim().length>0?q.trim():"Combobox",ce=`${N} options`,v=o??ie,B=s.useMemo(()=>t.find(e=>e.value===v),[v,t]);s.useEffect(()=>{l||M((B==null?void 0:B.label)??"")},[l,B]),s.useEffect(()=>{},[t]),s.useEffect(()=>{f&&(c(!1),p(-1))},[f]),s.useEffect(()=>{var a;if(!l)return;const e=((a=h.current)==null?void 0:a.ownerDocument)??document,n=T=>{var w;(w=h.current)!=null&&w.contains(T.target)||c(!1)};return e.addEventListener("pointerdown",n),()=>{e.removeEventListener("pointerdown",n)}},[l]);const u=s.useMemo(()=>{const e=S.trim().toLowerCase();return e?t.filter(n=>[n.label,...n.keywords??[]].join(" ").toLowerCase().includes(e)):t},[t,S]);s.useEffect(()=>{if(!l){p(-1);return}const e=u.findIndex(a=>a.value===v&&!a.disabled);if(e>=0){p(e);return}const n=u.findIndex(a=>!a.disabled);p(n)},[v,u,l]);const V=e=>{f||e.disabled||(o===void 0&&le(e.value),i==null||i(e.value),c(!1))};return d.jsxs("div",{ref:h,style:{display:"grid",gap:8},children:[d.jsx(ue,{ref:H,id:se,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":l,"aria-controls":l?E:void 0,"aria-activedescendant":l&&y>=0?`${E}-option-${y}`:void 0,"aria-label":N,autoComplete:"off",value:S,disabled:f,placeholder:g,onFocus:()=>{f||c(!0)},onBlur:e=>{var n;(n=h.current)!=null&&n.contains(e.relatedTarget)||c(!1)},onChange:e=>{f||(M(e.target.value),c(!0))},onKeyDown:e=>{var n;if(!f){if(e.key==="Escape"){c(!1);return}if(e.key==="ArrowDown"){e.preventDefault(),c(!0),p(a=>$(u,a<0?-1:a,1));return}if(e.key==="ArrowUp"){e.preventDefault(),c(!0),p(a=>$(u,a<0?0:a,-1));return}if(e.key==="Home"){e.preventDefault(),c(!0),p(u.findIndex(a=>!a.disabled));return}if(e.key==="End"){e.preventDefault(),c(!0);for(let a=u.length-1;a>=0;a-=1)if(!((n=u[a])!=null&&n.disabled)){p(a);return}}if(e.key==="Enter"&&l&&y>=0){e.preventDefault();const a=u[y];a&&V(a)}}}}),l?d.jsx("div",{id:E,role:"listbox","aria-label":ce,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:u.length>0?u.map((e,n)=>{const a=n===y,T=e.value===v;return d.jsx("button",{id:`${E}-option-${n}`,type:"button",role:"option",tabIndex:-1,"aria-selected":T,"aria-disabled":e.disabled||void 0,disabled:e.disabled,onMouseDown:w=>{var O;w.button!==0||e.disabled||(w.preventDefault(),(O=H.current)==null||O.focus())},onMouseEnter:()=>{e.disabled||p(n)},onClick:()=>V(e),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.value)}):d.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:k})}):null]})}L.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const j=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],ge={title:"Form/Combobox",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:j,onValueChange:()=>{}}};function me(){const[t,o]=s.useState("react");return d.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),d.jsx(de,{tone:"default",children:t})]}),d.jsx(L,{id:"framework-combobox",options:j,value:t,onValueChange:o,ariaLabel:"Framework"})]})}const R={render:()=>d.jsx(me,{}),play:async({canvasElement:t})=>{const o=x(t),r=o.getByRole("combobox",{name:"Framework"});await m.click(r),await m.clear(r),await m.type(r,"sv"),await m.keyboard("{ArrowDown}{Enter}"),await b(o.getByText("svelte")).toBeInTheDocument()}},D={args:{options:j,emptyMessage:"No framework match."}},F={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:t})=>{const o=x(t),r=o.getByRole("combobox",{name:"Framework dismiss demo"});await b(r).not.toHaveAttribute("aria-controls"),await m.click(r);const i=o.getByRole("listbox",{name:"Framework dismiss demo options"});await b(r).toHaveAttribute("aria-controls",i.id),await m.keyboard("{Escape}"),await b(o.queryByRole("listbox")).not.toBeInTheDocument(),await b(r).not.toHaveAttribute("aria-controls")}},C={args:{ariaLabel:"   "},play:async({canvasElement:t})=>{const o=x(t),r=o.getByRole("combobox",{name:"Combobox"});await m.click(r),await b(o.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},A={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:t})=>{const o=x(t),r=o.getByRole("combobox",{name:"Framework focus model"});await m.click(r);const i=o.getByRole("option",{name:"React"});await b(i).toHaveAttribute("tabindex","-1"),await m.click(i),await b(r).toHaveFocus()}},I={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:t})=>{const o=x(t),r=o.getByRole("combobox",{name:"Framework disabled"});await m.click(r),await b(o.queryByRole("listbox")).toBeNull()}};var _,K,P;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(K=R.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var W,z,Q;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(Q=(z=D.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var U,G,J;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(G=F.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,re,ne;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const ke=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","BlankAriaLabelFallback","ActivedescendantFocusModel","DisabledState"];export{A as ActivedescendantFocusModel,C as BlankAriaLabelFallback,R as Controlled,I as DisabledState,F as KeyboardDismissPaths,D as WithCustomEmptyMessage,ke as __namedExportsOrder,ge as default};
