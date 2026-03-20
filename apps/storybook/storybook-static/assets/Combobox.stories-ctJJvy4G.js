import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{I as re}from"./Input-pKdbw4ss.js";import{B as oe}from"./Badge-ZJmMstsz.js";import{within as D,userEvent as p,expect as f}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function N(t,r,o){var x;if(t.length===0)return-1;let d=r;for(let g=0;g<t.length;g+=1)if(d=(d+o+t.length)%t.length,!((x=t[d])!=null&&x.disabled))return d;return-1}function T({options:t,value:r,defaultValue:o,onValueChange:d,placeholder:x="Search option...",emptyMessage:g="No option found.",disabled:b=!1,id:Y,ariaLabel:I="Combobox"}){const w=s.useId(),A=s.useRef(null),[i,l]=s.useState(!1),[y,m]=s.useState(-1),[q,S]=s.useState(""),[Z,ee]=s.useState(o);s.useRef(null);const j=typeof I=="string"&&I.trim().length>0?I.trim():"Combobox",ae=`${j} options`,v=r??Z,k=s.useMemo(()=>t.find(e=>e.value===v),[v,t]);s.useEffect(()=>{i||S((k==null?void 0:k.label)??"")},[i,k]),s.useEffect(()=>{},[t]),s.useEffect(()=>{b&&(l(!1),m(-1))},[b]),s.useEffect(()=>{if(!i)return;const e=n=>{var a;(a=A.current)!=null&&a.contains(n.target)||l(!1)};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[i]);const c=s.useMemo(()=>{const e=q.trim().toLowerCase();return e?t.filter(n=>[n.label,...n.keywords??[]].join(" ").toLowerCase().includes(e)):t},[t,q]);s.useEffect(()=>{if(!i){m(-1);return}const e=c.findIndex(a=>a.value===v&&!a.disabled);if(e>=0){m(e);return}const n=c.findIndex(a=>!a.disabled);m(n)},[v,c,i]);const L=e=>{b||e.disabled||(r===void 0&&ee(e.value),d==null||d(e.value),l(!1))};return u.jsxs("div",{ref:A,style:{display:"grid",gap:8},children:[u.jsx(re,{id:Y,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":i,"aria-controls":i?w:void 0,"aria-activedescendant":i&&y>=0?`${w}-option-${y}`:void 0,"aria-label":j,autoComplete:"off",value:q,disabled:b,placeholder:x,onFocus:()=>{b||l(!0)},onBlur:e=>{var n;(n=A.current)!=null&&n.contains(e.relatedTarget)||l(!1)},onChange:e=>{b||(S(e.target.value),l(!0))},onKeyDown:e=>{var n;if(!b){if(e.key==="Escape"){l(!1);return}if(e.key==="ArrowDown"){e.preventDefault(),l(!0),m(a=>N(c,a<0?-1:a,1));return}if(e.key==="ArrowUp"){e.preventDefault(),l(!0),m(a=>N(c,a<0?0:a,-1));return}if(e.key==="Home"){e.preventDefault(),l(!0),m(c.findIndex(a=>!a.disabled));return}if(e.key==="End"){e.preventDefault(),l(!0);for(let a=c.length-1;a>=0;a-=1)if(!((n=c[a])!=null&&n.disabled)){m(a);return}}if(e.key==="Enter"&&i&&y>=0){e.preventDefault();const a=c[y];a&&L(a)}}}}),i?u.jsx("div",{id:w,role:"listbox","aria-label":ae,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:c.length>0?c.map((e,n)=>{const a=n===y,te=e.value===v;return u.jsx("button",{id:`${w}-option-${n}`,type:"button",role:"option","aria-selected":te,"aria-disabled":e.disabled||void 0,disabled:e.disabled,onMouseEnter:()=>{e.disabled||m(n)},onClick:()=>L(e),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.value)}):u.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:g})}):null]})}T.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const F=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],pe={title:"Form/Combobox",component:T,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:F,onValueChange:()=>{}}};function ne(){const[t,r]=s.useState("react");return u.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),u.jsx(oe,{tone:"default",children:t})]}),u.jsx(T,{id:"framework-combobox",options:F,value:t,onValueChange:r,ariaLabel:"Framework"})]})}const h={render:()=>u.jsx(ne,{}),play:async({canvasElement:t})=>{const r=D(t),o=r.getByRole("combobox",{name:"Framework"});await p.click(o),await p.clear(o),await p.type(o,"sv"),await p.keyboard("{ArrowDown}{Enter}"),await f(r.getByText("svelte")).toBeInTheDocument()}},E={args:{options:F,emptyMessage:"No framework match."}},B={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:t})=>{const r=D(t),o=r.getByRole("combobox",{name:"Framework dismiss demo"});await f(o).not.toHaveAttribute("aria-controls"),await p.click(o);const d=r.getByRole("listbox",{name:"Framework dismiss demo options"});await f(o).toHaveAttribute("aria-controls",d.id),await p.keyboard("{Escape}"),await f(r.queryByRole("listbox")).not.toBeInTheDocument(),await f(o).not.toHaveAttribute("aria-controls")}},R={args:{ariaLabel:"   "},play:async({canvasElement:t})=>{const r=D(t),o=r.getByRole("combobox",{name:"Combobox"});await p.click(o),await f(r.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},C={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:t})=>{const r=D(t),o=r.getByRole("combobox",{name:"Framework disabled"});await p.click(o),await f(r.queryByRole("listbox")).toBeNull()}};var H,V,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(V=h.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,$,_;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(_=($=E.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var K,P,W;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(P=B.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var z,Q,U;R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var G,J,X;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=C.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const be=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","BlankAriaLabelFallback","DisabledState"];export{R as BlankAriaLabelFallback,h as Controlled,C as DisabledState,B as KeyboardDismissPaths,E as WithCustomEmptyMessage,be as __namedExportsOrder,pe as default};
