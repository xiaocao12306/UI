import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{D as F}from"./Dialog-Cnf6Xxt0.js";import{I as Q}from"./Input-CY7BO4jw.js";import{within as z,userEvent as b,expect as k}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-0Dn_Gr2D.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function g({open:s,onOpenChange:a,commands:r,placeholder:l="Search commands...",emptyMessage:p="No commands found.",onQueryChange:u,getResultsStatusText:q=_}){const[y,A]=i.useState(""),[c,m]=i.useState(0),E=i.useRef(null),f=i.useId();i.useEffect(()=>{var e;if(!s){A(""),m(0);return}(e=E.current)==null||e.focus()},[s]);const o=i.useMemo(()=>{const e=y.trim().toLowerCase();return e?r.filter(t=>[t.label,...t.keywords??[]].join(" ").toLowerCase().includes(e)):r},[r,y]),H=i.useMemo(()=>q({query:y,visibleCount:o.length,totalCount:r.length}),[r.length,o.length,q,y]),C=i.useMemo(()=>o.findIndex(e=>!e.disabled),[o]),L=i.useMemo(()=>{var e;for(let t=o.length-1;t>=0;t-=1)if(!((e=o[t])!=null&&e.disabled))return t;return-1},[o]);i.useEffect(()=>{if(o.length===0){m(-1);return}m(C)},[o,C]);const I=i.useCallback(e=>{var d;const t=o[e];!t||t.disabled||((d=t.onSelect)==null||d.call(t),a(!1))},[o,a]),j=e=>{var d;if(o.length===0)return;let t=c<0?e===1?-1:0:c;for(let h=0;h<o.length;h+=1)if(t=(t+e+o.length)%o.length,!((d=o[t])!=null&&d.disabled)){m(t);return}};return n.jsx(F,{open:s,onOpenChange:a,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(Q,{ref:E,role:"combobox","aria-expanded":s,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":f,"aria-activedescendant":c>=0?`${f}-option-${c}`:void 0,placeholder:l,value:y,onChange:e=>{A(e.target.value),u==null||u(e.target.value)},onKeyDown:e=>{if(e.key==="ArrowDown"){e.preventDefault(),j(1);return}if(e.key==="ArrowUp"){e.preventDefault(),j(-1);return}if(e.key==="Home"){e.preventDefault(),m(C);return}if(e.key==="End"){e.preventDefault(),m(L);return}e.key==="Enter"&&c>=0&&(e.preventDefault(),I(c))},"aria-label":"Search commands"}),n.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:H}),n.jsx("div",{id:f,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:o.length>0?o.map((e,t)=>{const d=t===c;return n.jsx("button",{id:`${f}-option-${t}`,type:"button",role:"option","aria-selected":d,"aria-disabled":e.disabled||void 0,tabIndex:-1,disabled:e.disabled,onMouseDown:h=>{h.preventDefault()},onMouseEnter:()=>{e.disabled||m(t)},onClick:()=>I(t),style:{border:"1px solid var(--aurora-border-default)",background:d?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.key)}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:p})})]})})}function _({query:s,visibleCount:a,totalCount:r}){const l=s.trim();return l.length===0?`${r} command${r===1?"":"s"} available.`:a===0?`No commands match "${l}".`:`${a} command${a===1?"":"s"} found for "${l}".`}g.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { query: string; visibleCount: number; totalCount: number }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ query: string; visibleCount: number; totalCount: number }",signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"visibleCount",value:{name:"number",required:!0}},{key:"totalCount",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetResultsStatusText({
  query,
  visibleCount,
  totalCount
}: {
  query: string;
  visibleCount: number;
  totalCount: number;
}) {
  const normalized = query.trim();
  if (normalized.length === 0) {
    return \`\${totalCount} command\${totalCount === 1 ? "" : "s"} available.\`;
  }

  if (visibleCount === 0) {
    return \`No commands match "\${normalized}".\`;
  }

  return \`\${visibleCount} command\${visibleCount === 1 ? "" : "s"} found for "\${normalized}".\`;
}`,computed:!1}}}};const S=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],re={title:"AI/CommandPalette",component:g,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:S}};function G(){const[s,a]=i.useState(!0);return n.jsx(g,{open:s,onOpenChange:a,commands:S,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function V(){const[s,a]=i.useState(!0),[r,l]=i.useState("None"),p=S.map(u=>({...u,onSelect:()=>l(u.label)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:r})]}),n.jsx(g,{open:s,onOpenChange:a,commands:p})]})}function U(){const[s,a]=i.useState(!0),[r,l]=i.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:r||"N/A"})]}),n.jsx(g,{open:s,onOpenChange:a,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:l,getResultsStatusText:({query:p,visibleCount:u})=>p.trim().length===0?"Command search ready.":`${u} AI workflow match${u===1?"":"es"} for ${p}`})]})}const w={render:()=>n.jsx(G,{}),play:async({canvasElement:s})=>{const a=z(s.ownerDocument.body),r=await a.findByRole("combobox",{name:"Search commands"});await b.clear(r),await b.type(r,"publish");const l=a.getByRole("option",{name:"Publish Release"});await k(l).toHaveAttribute("aria-disabled","true"),await k(l).toHaveAttribute("tabindex","-1")}},v={render:()=>n.jsx(V,{})},x={render:()=>n.jsx(U,{}),play:async({canvasElement:s})=>{const a=z(s.ownerDocument.body),r=await a.findByRole("combobox",{name:"Search commands"});await b.clear(r),await b.type(r,"release"),await k(a.getByText("release")).toBeInTheDocument(),await b.keyboard("{ArrowDown}{Enter}"),await k(a.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}};var D,R,T;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <OpenPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "publish");
    const disabledOption = canvas.getByRole("option", {
      name: "Publish Release"
    });
    await expect(disabledOption).toHaveAttribute("aria-disabled", "true");
    await expect(disabledOption).toHaveAttribute("tabindex", "-1");
  }
}`,...(T=(R=w.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var $,P,O;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(O=(P=v.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var B,N,M;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <QueryTelemetryPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByText("release")).toBeInTheDocument();
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
  }
}`,...(M=(N=x.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const oe=["SearchCommands","AiInteractionFlow","QueryTelemetry"];export{v as AiInteractionFlow,x as QueryTelemetry,w as SearchCommands,oe as __namedExportsOrder,re as default};
