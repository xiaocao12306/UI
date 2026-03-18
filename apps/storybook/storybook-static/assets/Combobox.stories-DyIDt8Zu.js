import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{I as X}from"./Input-B0g8SV4q.js";import{B as Y}from"./Badge-fH5xjxKG.js";import{within as q,userEvent as b,expect as f}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function F(t,r,n){var g;if(t.length===0)return-1;let u=r;for(let w=0;w<t.length;w+=1)if(u=(u+n+t.length)%t.length,!((g=t[u])!=null&&g.disabled))return u;return-1}function I({options:t,value:r,defaultValue:n,onValueChange:u,placeholder:g="Search option...",emptyMessage:w="No option found.",disabled:p=!1,id:Q,ariaLabel:S="Combobox"}){const x=s.useId(),D=s.useRef(null),[i,l]=s.useState(!1),[y,m]=s.useState(-1),[C,T]=s.useState(""),[U,G]=s.useState(n),v=r??U,k=s.useMemo(()=>t.find(e=>e.value===v),[v,t]);s.useEffect(()=>{i||T((k==null?void 0:k.label)??"")},[i,k]),s.useEffect(()=>{p&&(l(!1),m(-1))},[p]),s.useEffect(()=>{if(!i)return;const e=o=>{var a;(a=D.current)!=null&&a.contains(o.target)||l(!1)};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[i]);const d=s.useMemo(()=>{const e=C.trim().toLowerCase();return e?t.filter(o=>[o.label,...o.keywords??[]].join(" ").toLowerCase().includes(e)):t},[t,C]);s.useEffect(()=>{if(!i){m(-1);return}const e=d.findIndex(a=>a.value===v&&!a.disabled);if(e>=0){m(e);return}const o=d.findIndex(a=>!a.disabled);m(o)},[v,d,i]);const A=e=>{p||e.disabled||(r===void 0&&G(e.value),u==null||u(e.value),l(!1))};return c.jsxs("div",{ref:D,style:{display:"grid",gap:8},children:[c.jsx(X,{id:Q,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":i,"aria-controls":i?x:void 0,"aria-activedescendant":i&&y>=0?`${x}-option-${y}`:void 0,"aria-label":S,autoComplete:"off",value:C,disabled:p,placeholder:g,onFocus:()=>{p||l(!0)},onBlur:e=>{var o;(o=D.current)!=null&&o.contains(e.relatedTarget)||l(!1)},onChange:e=>{p||(T(e.target.value),l(!0))},onKeyDown:e=>{var o;if(!p){if(e.key==="Escape"){l(!1);return}if(e.key==="ArrowDown"){e.preventDefault(),l(!0),m(a=>F(d,a<0?-1:a,1));return}if(e.key==="ArrowUp"){e.preventDefault(),l(!0),m(a=>F(d,a<0?0:a,-1));return}if(e.key==="Home"){e.preventDefault(),l(!0),m(d.findIndex(a=>!a.disabled));return}if(e.key==="End"){e.preventDefault(),l(!0);for(let a=d.length-1;a>=0;a-=1)if(!((o=d[a])!=null&&o.disabled)){m(a);return}}if(e.key==="Enter"&&i&&y>=0){e.preventDefault();const a=d[y];a&&A(a)}}}}),i?c.jsx("div",{id:x,role:"listbox","aria-label":`${S} options`,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.length>0?d.map((e,o)=>{const a=o===y,J=e.value===v;return c.jsx("button",{id:`${x}-option-${o}`,type:"button",role:"option","aria-selected":J,"aria-disabled":e.disabled||void 0,disabled:e.disabled,onMouseEnter:()=>{e.disabled||m(o)},onClick:()=>A(e),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.value)}):c.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:w})}):null]})}I.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const j=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],ie={title:"Form/Combobox",component:I,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:j,onValueChange:()=>{}}};function Z(){const[t,r]=s.useState("react");return c.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),c.jsx(Y,{tone:"default",children:t})]}),c.jsx(I,{id:"framework-combobox",options:j,value:t,onValueChange:r,ariaLabel:"Framework"})]})}const h={render:()=>c.jsx(Z,{}),play:async({canvasElement:t})=>{const r=q(t),n=r.getByRole("combobox",{name:"Framework"});await b.click(n),await b.clear(n),await b.type(n,"sv"),await b.keyboard("{ArrowDown}{Enter}"),await f(r.getByText("svelte")).toBeInTheDocument()}},E={args:{options:j,emptyMessage:"No framework match."}},B={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:t})=>{const r=q(t),n=r.getByRole("combobox",{name:"Framework dismiss demo"});await f(n).not.toHaveAttribute("aria-controls"),await b.click(n);const u=r.getByRole("listbox",{name:"Framework dismiss demo options"});await f(n).toHaveAttribute("aria-controls",u.id),await b.keyboard("{Escape}"),await f(r.queryByRole("listbox")).not.toBeInTheDocument(),await f(n).not.toHaveAttribute("aria-controls")}},R={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:t})=>{const r=q(t),n=r.getByRole("combobox",{name:"Framework disabled"});await b.click(n),await f(r.queryByRole("listbox")).toBeNull()}};var N,H,L;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,M,O;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(O=(M=E.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var $,_,K;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(_=B.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var P,W,z;R.parameters={...R.parameters,docs:{...(P=R.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(W=R.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const le=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","DisabledState"];export{h as Controlled,R as DisabledState,B as KeyboardDismissPaths,E as WithCustomEmptyMessage,le as __namedExportsOrder,ie as default};
