import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BWu4c2F4.js";import{I as Y}from"./Input-pKdbw4ss.js";import{B as Z}from"./Badge-ZJmMstsz.js";import{within as I,userEvent as f,expect as b}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function F(t,r,s){var g;if(t.length===0)return-1;let c=r;for(let w=0;w<t.length;w+=1)if(c=(c+s+t.length)%t.length,!((g=t[c])!=null&&g.disabled))return c;return-1}function j({options:t,value:r,defaultValue:s,onValueChange:c,placeholder:g="Search option...",emptyMessage:w="No option found.",disabled:p=!1,id:Q,ariaLabel:x="Combobox"}){const k=n.useId(),D=n.useRef(null),[i,l]=n.useState(!1),[y,m]=n.useState(-1),[q,S]=n.useState(""),[U,G]=n.useState(s);n.useRef(null);const J=typeof x=="string"&&x.trim().length>0?x.trim():"Combobox",v=r??U,h=n.useMemo(()=>t.find(e=>e.value===v),[v,t]);n.useEffect(()=>{i||S((h==null?void 0:h.label)??"")},[i,h]),n.useEffect(()=>{},[t]),n.useEffect(()=>{p&&(l(!1),m(-1))},[p]),n.useEffect(()=>{if(!i)return;const e=o=>{var a;(a=D.current)!=null&&a.contains(o.target)||l(!1)};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[i]);const d=n.useMemo(()=>{const e=q.trim().toLowerCase();return e?t.filter(o=>[o.label,...o.keywords??[]].join(" ").toLowerCase().includes(e)):t},[t,q]);n.useEffect(()=>{if(!i){m(-1);return}const e=d.findIndex(a=>a.value===v&&!a.disabled);if(e>=0){m(e);return}const o=d.findIndex(a=>!a.disabled);m(o)},[v,d,i]);const T=e=>{p||e.disabled||(r===void 0&&G(e.value),c==null||c(e.value),l(!1))};return u.jsxs("div",{ref:D,style:{display:"grid",gap:8},children:[u.jsx(Y,{id:Q,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":i,"aria-controls":i?k:void 0,"aria-activedescendant":i&&y>=0?`${k}-option-${y}`:void 0,"aria-label":J,autoComplete:"off",value:q,disabled:p,placeholder:g,onFocus:()=>{p||l(!0)},onBlur:e=>{var o;(o=D.current)!=null&&o.contains(e.relatedTarget)||l(!1)},onChange:e=>{p||(S(e.target.value),l(!0))},onKeyDown:e=>{var o;if(!p){if(e.key==="Escape"){l(!1);return}if(e.key==="ArrowDown"){e.preventDefault(),l(!0),m(a=>F(d,a<0?-1:a,1));return}if(e.key==="ArrowUp"){e.preventDefault(),l(!0),m(a=>F(d,a<0?0:a,-1));return}if(e.key==="Home"){e.preventDefault(),l(!0),m(d.findIndex(a=>!a.disabled));return}if(e.key==="End"){e.preventDefault(),l(!0);for(let a=d.length-1;a>=0;a-=1)if(!((o=d[a])!=null&&o.disabled)){m(a);return}}if(e.key==="Enter"&&i&&y>=0){e.preventDefault();const a=d[y];a&&T(a)}}}}),i?u.jsx("div",{id:k,role:"listbox","aria-label":`${x} options`,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:d.length>0?d.map((e,o)=>{const a=o===y,X=e.value===v;return u.jsx("button",{id:`${k}-option-${o}`,type:"button",role:"option","aria-selected":X,"aria-disabled":e.disabled||void 0,disabled:e.disabled,onMouseEnter:()=>{e.disabled||m(o)},onClick:()=>T(e),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.value)}):u.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:w})}):null]})}j.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const A=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],le={title:"Form/Combobox",component:j,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:A,onValueChange:()=>{}}};function ee(){const[t,r]=n.useState("react");return u.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),u.jsx(Z,{tone:"default",children:t})]}),u.jsx(j,{id:"framework-combobox",options:A,value:t,onValueChange:r,ariaLabel:"Framework"})]})}const E={render:()=>u.jsx(ee,{}),play:async({canvasElement:t})=>{const r=I(t),s=r.getByRole("combobox",{name:"Framework"});await f.click(s),await f.clear(s),await f.type(s,"sv"),await f.keyboard("{ArrowDown}{Enter}"),await b(r.getByText("svelte")).toBeInTheDocument()}},B={args:{options:A,emptyMessage:"No framework match."}},R={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:t})=>{const r=I(t),s=r.getByRole("combobox",{name:"Framework dismiss demo"});await b(s).not.toHaveAttribute("aria-controls"),await f.click(s);const c=r.getByRole("listbox",{name:"Framework dismiss demo options"});await b(s).toHaveAttribute("aria-controls",c.id),await f.keyboard("{Escape}"),await b(r.queryByRole("listbox")).not.toBeInTheDocument(),await b(s).not.toHaveAttribute("aria-controls")}},C={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:t})=>{const r=I(t),s=r.getByRole("combobox",{name:"Framework disabled"});await f.click(s),await b(r.queryByRole("listbox")).toBeNull()}};var N,H,V;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(H=E.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var L,M,O;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(O=(M=B.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var $,_,K;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(_=R.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var P,W,z;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(W=C.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const de=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","DisabledState"];export{E as Controlled,C as DisabledState,R as KeyboardDismissPaths,B as WithCustomEmptyMessage,de as __namedExportsOrder,le as default};
