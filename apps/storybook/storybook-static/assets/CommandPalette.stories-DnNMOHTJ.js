import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{D as U}from"./Dialog-Cnf6Xxt0.js";import{I as K}from"./Input-CY7BO4jw.js";import{within as R,userEvent as y,expect as g}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-0Dn_Gr2D.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function b({open:o,onOpenChange:a,commands:t,placeholder:l="Search commands...",emptyMessage:u="No commands found.",onQueryChange:d,getResultsStatusText:h=J}){const[f,q]=i.useState(""),[m,p]=i.useState(0),D=i.useRef(null),w=i.useId();i.useEffect(()=>{var e;if(!o){q(""),p(0);return}(e=D.current)==null||e.focus()},[o]);const s=i.useMemo(()=>{const e=f.trim().toLowerCase();return e?t.filter(n=>[n.label,...n.keywords??[]].join(" ").toLowerCase().includes(e)):t},[t,f]),A=i.useMemo(()=>s.reduce((e,n)=>n.disabled?e:e+1,0),[s]),G=i.useMemo(()=>h({query:f,visibleCount:s.length,enabledCount:A,totalCount:t.length}),[t.length,A,s.length,h,f]),$=i.useMemo(()=>s.findIndex(e=>!e.disabled),[s]),V=i.useMemo(()=>{var e;for(let n=s.length-1;n>=0;n-=1)if(!((e=s[n])!=null&&e.disabled))return n;return-1},[s]);i.useEffect(()=>{if(s.length===0){p(-1);return}p($)},[s,$]);const j=i.useCallback(e=>{var c;const n=s[e];!n||n.disabled||((c=n.onSelect)==null||c.call(n),a(!1))},[s,a]),T=e=>{var c;if(s.length===0)return;let n=m<0?e===1?-1:0:m;for(let v=0;v<s.length;v+=1)if(n=(n+e+s.length)%s.length,!((c=s[n])!=null&&c.disabled)){p(n);return}};return r.jsx(U,{open:o,onOpenChange:a,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",children:r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx(K,{ref:D,role:"combobox","aria-expanded":o,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":w,"aria-activedescendant":m>=0?`${w}-option-${m}`:void 0,placeholder:l,value:f,onChange:e=>{q(e.target.value),d==null||d(e.target.value)},onKeyDown:e=>{if(e.key==="ArrowDown"){e.preventDefault(),T(1);return}if(e.key==="ArrowUp"){e.preventDefault(),T(-1);return}if(e.key==="Home"){e.preventDefault(),p($);return}if(e.key==="End"){e.preventDefault(),p(V);return}e.key==="Enter"&&m>=0&&(e.preventDefault(),j(m))},"aria-label":"Search commands"}),r.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:G}),r.jsx("div",{id:w,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:s.length>0?s.map((e,n)=>{const c=n===m;return r.jsx("button",{id:`${w}-option-${n}`,type:"button",role:"option","aria-selected":c,"aria-disabled":e.disabled||void 0,tabIndex:-1,disabled:e.disabled,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{e.disabled||p(n)},onClick:()=>j(n),style:{border:"1px solid var(--aurora-border-default)",background:c?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.key)}):r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:u})})]})})}function J({query:o,visibleCount:a,enabledCount:t,totalCount:l}){const u=o.trim();return u.length===0?t!==l?`${t} of ${l} command${l===1?"":"s"} available.`:`${l} command${l===1?"":"s"} available.`:a===0?`No commands match "${u}".`:t===0?`No enabled commands match "${u}".`:t!==a?`${t} of ${a} matching command${t===1?"":"s"} available for "${u}".`:`${a} command${a===1?"":"s"} found for "${u}".`}b.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
  query: string;
  visibleCount: number;
  enabledCount: number;
  totalCount: number;
}) => string`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  query: string;
  visibleCount: number;
  enabledCount: number;
  totalCount: number;
}`,signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"visibleCount",value:{name:"number",required:!0}},{key:"enabledCount",value:{name:"number",required:!0}},{key:"totalCount",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetResultsStatusText({
  query,
  visibleCount,
  enabledCount,
  totalCount
}: {
  query: string;
  visibleCount: number;
  enabledCount: number;
  totalCount: number;
}) {
  const normalized = query.trim();
  if (normalized.length === 0) {
    if (enabledCount !== totalCount) {
      return \`\${enabledCount} of \${totalCount} command\${totalCount === 1 ? "" : "s"} available.\`;
    }

    return \`\${totalCount} command\${totalCount === 1 ? "" : "s"} available.\`;
  }

  if (visibleCount === 0) {
    return \`No commands match "\${normalized}".\`;
  }

  if (enabledCount === 0) {
    return \`No enabled commands match "\${normalized}".\`;
  }

  if (enabledCount !== visibleCount) {
    return \`\${enabledCount} of \${visibleCount} matching command\${enabledCount === 1 ? "" : "s"} available for "\${normalized}".\`;
  }

  return \`\${visibleCount} command\${visibleCount === 1 ? "" : "s"} found for "\${normalized}".\`;
}`,computed:!1}}}};const E=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],de={title:"AI/CommandPalette",component:b,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:E}};function W(){const[o,a]=i.useState(!0);return r.jsx(b,{open:o,onOpenChange:a,commands:E,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function X(){const[o,a]=i.useState(!0),[t,l]=i.useState("None"),u=E.map(d=>({...d,onSelect:()=>l(d.label)}));return r.jsxs("div",{style:{minHeight:420,padding:20},children:[r.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",r.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),r.jsx(b,{open:o,onOpenChange:a,commands:u})]})}function Y(){const[o,a]=i.useState(!0),[t,l]=i.useState("");return r.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",r.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),r.jsx(b,{open:o,onOpenChange:a,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:l,getResultsStatusText:({query:u,visibleCount:d,enabledCount:h})=>u.trim().length===0?"Command search ready.":`${h}/${d} actionable AI workflow match${d===1?"":"es"} for ${u}`})]})}function Z(){const[o,a]=i.useState(!0);return r.jsx(b,{open:o,onOpenChange:a,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}const x={render:()=>r.jsx(W,{}),play:async({canvasElement:o})=>{const a=R(o.ownerDocument.body),t=await a.findByRole("combobox",{name:"Search commands"});await y.clear(t),await y.type(t,"publish");const l=a.getByRole("option",{name:"Publish Release"});await g(l).toHaveAttribute("aria-disabled","true"),await g(l).toHaveAttribute("tabindex","-1")}},k={render:()=>r.jsx(X,{})},C={render:()=>r.jsx(Y,{}),play:async({canvasElement:o})=>{const a=R(o.ownerDocument.body),t=await a.findByRole("combobox",{name:"Search commands"});await y.clear(t),await y.type(t,"release"),await g(a.getByText("release")).toBeInTheDocument(),await y.keyboard("{ArrowDown}{Enter}"),await g(a.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},S={render:()=>r.jsx(Z,{}),play:async({canvasElement:o})=>{const a=R(o.ownerDocument.body),t=await a.findByRole("combobox",{name:"Search commands"});await y.clear(t),await y.type(t,"release"),await g(a.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}};var I,O,P;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(O=x.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var B,N,z;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(z=(N=k.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var H,M,L;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(M=C.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var F,Q,_;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <DisabledOnlyResultsPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByRole("status")).toHaveTextContent('No enabled commands match "release".');
  }
}`,...(_=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};const ce=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults"];export{k as AiInteractionFlow,S as DisabledOnlyResults,C as QueryTelemetry,x as SearchCommands,ce as __namedExportsOrder,de as default};
