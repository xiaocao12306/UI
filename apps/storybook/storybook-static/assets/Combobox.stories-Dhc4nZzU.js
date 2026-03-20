import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{I as ue}from"./Input-pKdbw4ss.js";import{B as de}from"./Badge-ZJmMstsz.js";import{within as g,userEvent as m,expect as b}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function O(a,r,o){var k;if(a.length===0)return-1;let i=r;for(let E=0;E<a.length;E+=1)if(i=(i+o+a.length)%a.length,!((k=a[i])!=null&&k.disabled))return i;return-1}function me(a){return!((typeof a.button=="number"?a.button:0)>0||(a.pointerType==="mouse"||a.pointerType==="")&&(typeof a.buttons=="number"&&a.buttons!==0&&!(a.buttons&1)||a.ctrlKey))}function L({options:a,value:r,defaultValue:o,onValueChange:i,placeholder:k="Search option...",emptyMessage:E="No option found.",disabled:f=!1,id:se,ariaLabel:q="Combobox"}){const h=s.useId(),B=s.useRef(null),H=s.useRef(null),[l,c]=s.useState(!1),[y,p]=s.useState(-1),[S,M]=s.useState(""),[ie,le]=s.useState(o);s.useRef(null);const N=typeof q=="string"&&q.trim().length>0?q.trim():"Combobox",ce=`${N} options`,v=r??ie,R=s.useMemo(()=>a.find(e=>e.value===v),[v,a]);s.useEffect(()=>{l||M((R==null?void 0:R.label)??"")},[l,R]),s.useEffect(()=>{},[a]),s.useEffect(()=>{f&&(c(!1),p(-1))},[f]),s.useEffect(()=>{var t;if(!l)return;const e=((t=B.current)==null?void 0:t.ownerDocument)??document,n=w=>{var x;me(w)&&(w.defaultPrevented||(x=B.current)!=null&&x.contains(w.target)||c(!1))};return e.addEventListener("pointerdown",n),()=>{e.removeEventListener("pointerdown",n)}},[l]);const u=s.useMemo(()=>{const e=S.trim().toLowerCase();return e?a.filter(n=>[n.label,...n.keywords??[]].join(" ").toLowerCase().includes(e)):a},[a,S]);s.useEffect(()=>{if(!l){p(-1);return}const e=u.findIndex(t=>t.value===v&&!t.disabled);if(e>=0){p(e);return}const n=u.findIndex(t=>!t.disabled);p(n)},[v,u,l]);const V=e=>{f||e.disabled||(r===void 0&&le(e.value),i==null||i(e.value),c(!1))};return d.jsxs("div",{ref:B,style:{display:"grid",gap:8},children:[d.jsx(ue,{ref:H,id:se,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":l,"aria-controls":l?h:void 0,"aria-activedescendant":l&&y>=0?`${h}-option-${y}`:void 0,"aria-label":N,autoComplete:"off",value:S,disabled:f,placeholder:k,onFocus:()=>{f||c(!0)},onBlur:e=>{var n;(n=B.current)!=null&&n.contains(e.relatedTarget)||c(!1)},onChange:e=>{f||(M(e.target.value),c(!0))},onKeyDown:e=>{var n;if(!f){if(e.key==="Escape"){c(!1);return}if(e.key==="ArrowDown"){e.preventDefault(),c(!0),p(t=>O(u,t<0?-1:t,1));return}if(e.key==="ArrowUp"){e.preventDefault(),c(!0),p(t=>O(u,t<0?0:t,-1));return}if(e.key==="Home"){e.preventDefault(),c(!0),p(u.findIndex(t=>!t.disabled));return}if(e.key==="End"){e.preventDefault(),c(!0);for(let t=u.length-1;t>=0;t-=1)if(!((n=u[t])!=null&&n.disabled)){p(t);return}}if(e.key==="Enter"&&l&&y>=0){e.preventDefault();const t=u[y];t&&V(t)}}}}),l?d.jsx("div",{id:h,role:"listbox","aria-label":ce,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:u.length>0?u.map((e,n)=>{const t=n===y,w=e.value===v;return d.jsx("button",{id:`${h}-option-${n}`,type:"button",role:"option",tabIndex:-1,"aria-selected":w,"aria-disabled":e.disabled||void 0,disabled:e.disabled,onMouseDown:x=>{var P;x.button!==0||e.disabled||(x.preventDefault(),(P=H.current)==null||P.focus())},onMouseEnter:()=>{e.disabled||p(n)},onClick:()=>V(e),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.value)}):d.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:E})}):null]})}L.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const j=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],ke={title:"Form/Combobox",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:j,onValueChange:()=>{}}};function pe(){const[a,r]=s.useState("react");return d.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),d.jsx(de,{tone:"default",children:a})]}),d.jsx(L,{id:"framework-combobox",options:j,value:a,onValueChange:r,ariaLabel:"Framework"})]})}const D={render:()=>d.jsx(pe,{}),play:async({canvasElement:a})=>{const r=g(a),o=r.getByRole("combobox",{name:"Framework"});await m.click(o),await m.clear(o),await m.type(o,"sv"),await m.keyboard("{ArrowDown}{Enter}"),await b(r.getByText("svelte")).toBeInTheDocument()}},F={args:{options:j,emptyMessage:"No framework match."}},C={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:a})=>{const r=g(a),o=r.getByRole("combobox",{name:"Framework dismiss demo"});await b(o).not.toHaveAttribute("aria-controls"),await m.click(o);const i=r.getByRole("listbox",{name:"Framework dismiss demo options"});await b(o).toHaveAttribute("aria-controls",i.id),await m.keyboard("{Escape}"),await b(r.queryByRole("listbox")).not.toBeInTheDocument(),await b(o).not.toHaveAttribute("aria-controls")}},A={args:{ariaLabel:"   "},play:async({canvasElement:a})=>{const r=g(a),o=r.getByRole("combobox",{name:"Combobox"});await m.click(o),await b(r.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},I={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:a})=>{const r=g(a),o=r.getByRole("combobox",{name:"Framework focus model"});await m.click(o);const i=r.getByRole("option",{name:"React"});await b(i).toHaveAttribute("tabindex","-1"),await m.click(i),await b(o).toHaveFocus()}},T={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:a})=>{const r=g(a),o=r.getByRole("combobox",{name:"Framework disabled"});await m.click(o),await b(r.queryByRole("listbox")).toBeNull()}};var $,K,_;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(K=D.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var W,z,Q;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(Q=(z=F.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var U,G,J;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,oe,ne;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Ee=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","BlankAriaLabelFallback","ActivedescendantFocusModel","DisabledState"];export{I as ActivedescendantFocusModel,A as BlankAriaLabelFallback,D as Controlled,T as DisabledState,C as KeyboardDismissPaths,F as WithCustomEmptyMessage,Ee as __namedExportsOrder,ke as default};
