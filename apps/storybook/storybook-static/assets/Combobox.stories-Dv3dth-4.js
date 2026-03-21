import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{I as fe}from"./Input-7y9QhjTU.js";import{B as ue}from"./Badge-ZJmMstsz.js";import{within as y,userEvent as c,expect as l}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function O(e,t,r){var k;if(e.length===0)return-1;let u=t;for(let E=0;E<e.length;E+=1)if(u=(u+r+e.length)%e.length,!((k=e[u])!=null&&k.disabled))return u;return-1}function ye(e){return e==="Escape"||e==="ArrowDown"||e==="ArrowUp"||e==="Home"||e==="End"||e==="Enter"}function we(e){return!((typeof e.button=="number"?e.button:0)>0||(e.pointerType==="mouse"||e.pointerType==="")&&(typeof e.buttons=="number"&&e.buttons!==0&&!(e.buttons&1)||e.ctrlKey))}function S({options:e,value:t,defaultValue:r,onValueChange:u,placeholder:k="Search option...",emptyMessage:E="No option found.",disabled:f=!1,id:de,ariaLabel:H="Combobox"}){const h=s.useId(),B=s.useRef(null),L=s.useRef(null),[d,m]=s.useState(!1),[w,b]=s.useState(-1),[M,K]=s.useState(""),[me,pe]=s.useState(r);s.useRef(null);const V=typeof H=="string"&&H.trim().length>0?H.trim():"Combobox",be=`${V} options`,v=t??me,R=s.useMemo(()=>e.find(a=>a.value===v),[v,e]);s.useEffect(()=>{d||K((R==null?void 0:R.label)??"")},[d,R]),s.useEffect(()=>{},[e]),s.useEffect(()=>{f&&(m(!1),b(-1))},[f]),s.useEffect(()=>{var o;if(!d)return;const a=((o=B.current)==null?void 0:o.ownerDocument)??document,n=x=>{var g;we(x)&&(x.defaultPrevented||(g=B.current)!=null&&g.contains(x.target)||m(!1))};return a.addEventListener("pointerdown",n),()=>{a.removeEventListener("pointerdown",n)}},[d]);const p=s.useMemo(()=>{const a=M.trim().toLowerCase();return a?e.filter(n=>[n.label,...n.keywords??[]].join(" ").toLowerCase().includes(a)):e},[e,M]);s.useEffect(()=>{if(!d){b(-1);return}const a=p.findIndex(o=>o.value===v&&!o.disabled);if(a>=0){b(a);return}const n=p.findIndex(o=>!o.disabled);b(n)},[v,p,d]);const N=a=>{f||a.disabled||(t===void 0&&pe(a.value),u==null||u(a.value),m(!1))};return i.jsxs("div",{ref:B,style:{display:"grid",gap:8},children:[i.jsx(fe,{ref:L,id:de,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":d,"aria-controls":d?h:void 0,"aria-activedescendant":d&&w>=0?`${h}-option-${w}`:void 0,"aria-label":V,autoComplete:"off",value:M,disabled:f,placeholder:k,onFocus:()=>{f||m(!0)},onBlur:a=>{var n;(n=B.current)!=null&&n.contains(a.relatedTarget)||m(!1)},onChange:a=>{f||(K(a.target.value),m(!0))},onKeyDown:a=>{var n;if(!f&&!((a.altKey||a.ctrlKey||a.metaKey)&&ye(a.key))){if(a.key==="Escape"){m(!1);return}if(a.key==="ArrowDown"){a.preventDefault(),m(!0),b(o=>O(p,o<0?-1:o,1));return}if(a.key==="ArrowUp"){a.preventDefault(),m(!0),b(o=>O(p,o<0?0:o,-1));return}if(a.key==="Home"){a.preventDefault(),m(!0),b(p.findIndex(o=>!o.disabled));return}if(a.key==="End"){a.preventDefault(),m(!0);for(let o=p.length-1;o>=0;o-=1)if(!((n=p[o])!=null&&n.disabled)){b(o);return}}if(a.key==="Enter"&&d&&w>=0){a.preventDefault();const o=p[w];o&&N(o)}}}}),d?i.jsx("div",{id:h,role:"listbox","aria-label":be,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:p.length>0?p.map((a,n)=>{const o=n===w,x=a.value===v;return i.jsx("button",{id:`${h}-option-${n}`,type:"button",role:"option",tabIndex:-1,"aria-selected":x,"aria-disabled":a.disabled||void 0,disabled:a.disabled,onMouseDown:g=>{var P;g.button!==0||a.disabled||(g.preventDefault(),(P=L.current)==null||P.focus())},onMouseEnter:()=>{a.disabled||b(n)},onClick:()=>N(a),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:o?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:a.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:a.disabled?"not-allowed":"pointer"},children:a.label},a.value)}):i.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:E})}):null]})}S.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const q=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],De={title:"Form/Combobox",component:S,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:q,onValueChange:()=>{}}};function ve(){const[e,t]=s.useState("react");return i.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),i.jsx(ue,{tone:"default",children:e})]}),i.jsx(S,{id:"framework-combobox",options:q,value:e,onValueChange:t,ariaLabel:"Framework"})]})}const C={render:()=>i.jsx(ve,{}),play:async({canvasElement:e})=>{const t=y(e),r=t.getByRole("combobox",{name:"Framework"});await c.click(r),await c.clear(r),await c.type(r,"sv"),await c.keyboard("{ArrowDown}{Enter}"),await l(t.getByText("svelte")).toBeInTheDocument()}},D={args:{options:q,emptyMessage:"No framework match."}},T={args:{ariaLabel:"Framework dismiss demo"},play:async({canvasElement:e})=>{const t=y(e),r=t.getByRole("combobox",{name:"Framework dismiss demo"});await l(r).not.toHaveAttribute("aria-controls"),await c.click(r);const u=t.getByRole("listbox",{name:"Framework dismiss demo options"});await l(r).toHaveAttribute("aria-controls",u.id),await c.keyboard("{Escape}"),await l(t.queryByRole("listbox")).not.toBeInTheDocument(),await l(r).not.toHaveAttribute("aria-controls")}};function xe(){const[e,t]=s.useState("react");return i.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),i.jsx(ue,{tone:"default","data-testid":"combobox-modifier-selected-value",children:e})]}),i.jsx(S,{options:q,value:e,onValueChange:t,ariaLabel:"Framework modifier guard"})]})}const F={render:()=>i.jsx(xe,{}),play:async({canvasElement:e})=>{const t=y(e),r=t.getByRole("combobox",{name:"Framework modifier guard"});await c.click(r),await l(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await l(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await c.keyboard("{Control>}{ArrowDown}{/Control}"),await c.keyboard("{Control>}{Enter}{/Control}"),await l(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react"),await l(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Meta>}{Escape}{/Meta}"),await l(t.getByRole("listbox",{name:"Framework modifier guard options"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await l(t.queryByRole("listbox",{name:"Framework modifier guard options"})).not.toBeInTheDocument(),await l(t.getByTestId("combobox-modifier-selected-value")).toHaveTextContent("react")}},I={args:{ariaLabel:"   "},play:async({canvasElement:e})=>{const t=y(e),r=t.getByRole("combobox",{name:"Combobox"});await c.click(r),await l(t.getByRole("listbox",{name:"Combobox options"})).toBeInTheDocument()}},A={args:{ariaLabel:"Framework focus model"},play:async({canvasElement:e})=>{const t=y(e),r=t.getByRole("combobox",{name:"Framework focus model"});await c.click(r);const u=t.getByRole("option",{name:"React"});await l(u).toHaveAttribute("tabindex","-1"),await c.click(u),await l(r).toHaveFocus()}},j={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:e})=>{const t=y(e),r=t.getByRole("combobox",{name:"Framework disabled"});await c.click(r),await l(t.queryByRole("listbox")).toBeNull()}};var $,G,_;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(G=C.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var U,W,z;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(z=(W=D.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var Q,J,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(J=T.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,oe;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(te=I.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,se;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,le,ce;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Te=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","ModifierKeyGuard","BlankAriaLabelFallback","ActivedescendantFocusModel","DisabledState"];export{A as ActivedescendantFocusModel,I as BlankAriaLabelFallback,C as Controlled,j as DisabledState,T as KeyboardDismissPaths,F as ModifierKeyGuard,D as WithCustomEmptyMessage,Te as __namedExportsOrder,De as default};
