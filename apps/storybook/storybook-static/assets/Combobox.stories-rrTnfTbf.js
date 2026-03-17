import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{I as X}from"./Input-BX0mitHu.js";import{B as Y}from"./Badge-Dkm8CRgf.js";import{within as W,userEvent as y,expect as z}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-yJ-B0ZWx.js";function T(r,n,u){var g;if(r.length===0)return-1;let p=n;for(let v=0;v<r.length;v+=1)if(p=(p+u+r.length)%r.length,!((g=r[p])!=null&&g.disabled))return p;return-1}function q({options:r,value:n,defaultValue:u,onValueChange:p,placeholder:g="Search option...",emptyMessage:v="No option found.",disabled:m=!1,id:Q,ariaLabel:R="Combobox"}){const x=o.useId(),D=o.useRef(null),[d,s]=o.useState(!1),[f,c]=o.useState(-1),[j,S]=o.useState(""),[U,G]=o.useState(u),b=n??U,w=o.useMemo(()=>r.find(e=>e.value===b),[b,r]);o.useEffect(()=>{d||S((w==null?void 0:w.label)??"")},[d,w]),o.useEffect(()=>{m&&(s(!1),c(-1))},[m]),o.useEffect(()=>{if(!d)return;const e=t=>{var a;(a=D.current)!=null&&a.contains(t.target)||s(!1)};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[d]);const i=o.useMemo(()=>{const e=j.trim().toLowerCase();return e?r.filter(t=>[t.label,...t.keywords??[]].join(" ").toLowerCase().includes(e)):r},[r,j]);o.useEffect(()=>{if(!d){c(-1);return}const e=i.findIndex(a=>a.value===b&&!a.disabled);if(e>=0){c(e);return}const t=i.findIndex(a=>!a.disabled);c(t)},[b,i,d]);const B=e=>{m||e.disabled||(n===void 0&&G(e.value),p==null||p(e.value),s(!1))};return l.jsxs("div",{ref:D,style:{display:"grid",gap:8},children:[l.jsx(X,{id:Q,role:"combobox","aria-autocomplete":"list","aria-haspopup":"listbox","aria-expanded":d,"aria-controls":x,"aria-activedescendant":d&&f>=0?`${x}-option-${f}`:void 0,"aria-label":R,autoComplete:"off",value:j,disabled:m,placeholder:g,onFocus:()=>{m||s(!0)},onBlur:e=>{var t;(t=D.current)!=null&&t.contains(e.relatedTarget)||s(!1)},onChange:e=>{m||(S(e.target.value),s(!0))},onKeyDown:e=>{var t;if(!m){if(e.key==="Escape"){s(!1);return}if(e.key==="ArrowDown"){e.preventDefault(),s(!0),c(a=>T(i,a<0?-1:a,1));return}if(e.key==="ArrowUp"){e.preventDefault(),s(!0),c(a=>T(i,a<0?0:a,-1));return}if(e.key==="Home"){e.preventDefault(),s(!0),c(i.findIndex(a=>!a.disabled));return}if(e.key==="End"){e.preventDefault(),s(!0);for(let a=i.length-1;a>=0;a-=1)if(!((t=i[a])!=null&&t.disabled)){c(a);return}}if(e.key==="Enter"&&d&&f>=0){e.preventDefault();const a=i[f];a&&B(a)}}}}),d?l.jsx("div",{id:x,role:"listbox","aria-label":`${R} options`,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",background:"var(--aurora-surface-default)",maxHeight:220,overflow:"auto",padding:4,display:"grid",gap:4},children:i.length>0?i.map((e,t)=>{const a=t===f,J=e.value===b;return l.jsx("button",{id:`${x}-option-${t}`,type:"button",role:"option","aria-selected":J,"aria-disabled":e.disabled||void 0,disabled:e.disabled,onMouseEnter:()=>{e.disabled||c(t)},onClick:()=>B(e),style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-sm)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",textAlign:"left",padding:"0 10px",height:34,cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.value)}):l.jsx("p",{role:"status","aria-live":"polite",style:{margin:0,padding:"8px 10px",color:"var(--aurora-text-secondary)"},children:v})}):null]})}q.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search option..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No option found."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Combobox"',computed:!1}}}};const I=[{value:"react",label:"React",keywords:["library","jsx"]},{value:"vue",label:"Vue",keywords:["framework"]},{value:"svelte",label:"Svelte",keywords:["compiler"]},{value:"solid",label:"Solid",keywords:["signals"],disabled:!0}],ie={title:"Form/Combobox",component:q,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Combobox supports search filtering, disabled options, and deterministic keyboard navigation (Arrow/Home/End/Enter/Escape)."}}},args:{options:I,onValueChange:()=>{}}};function Z(){const[r,n]=o.useState("react");return l.jsxs("div",{style:{width:400,display:"grid",gap:10},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Selected framework"}),l.jsx(Y,{tone:"default",children:r})]}),l.jsx(q,{id:"framework-combobox",options:I,value:r,onValueChange:n,ariaLabel:"Framework"})]})}const k={render:()=>l.jsx(Z,{}),play:async({canvasElement:r})=>{const n=W(r),u=n.getByRole("combobox",{name:"Framework"});await y.click(u),await y.clear(u),await y.type(u,"sv"),await y.keyboard("{ArrowDown}{Enter}"),await z(n.getByText("svelte")).toBeInTheDocument()}},h={args:{options:I,emptyMessage:"No framework match."}},E={args:{ariaLabel:"Framework dismiss demo"}},C={args:{ariaLabel:"Framework disabled",disabled:!0},play:async({canvasElement:r})=>{const n=W(r),u=n.getByRole("combobox",{name:"Framework disabled"});await y.click(u),await z(n.queryByRole("listbox")).toBeNull()}};var F,N,A;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(N=k.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var L,V,M;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: frameworkOptions,
    emptyMessage: "No framework match."
  }
}`,...(M=(V=h.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,$,_;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Framework dismiss demo"
  }
}`,...(_=($=E.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var H,K,P;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(K=C.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const le=["Controlled","WithCustomEmptyMessage","KeyboardDismissPaths","DisabledState"];export{k as Controlled,C as DisabledState,E as KeyboardDismissPaths,h as WithCustomEmptyMessage,le as __namedExportsOrder,ie as default};
