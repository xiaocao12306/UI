import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as re}from"./Dialog-lfL8UqXn.js";import{I as oe}from"./Input-CY7BO4jw.js";import{within as w,userEvent as m,expect as p}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function y({open:n,onOpenChange:t,commands:a,closeOnSelect:l=!0,placeholder:c="Search commands...",emptyMessage:u="No commands found.",onQueryChange:g,getResultsStatusText:$=ie}){const[h,j]=s.useState(""),[b,f]=s.useState(0),q=s.useRef(null),v=s.useId();s.useEffect(()=>{var e;if(!n){j(""),f(0);return}(e=q.current)==null||e.focus()},[n]);const E=s.useMemo(()=>N(h.trim()),[h]),i=s.useMemo(()=>E?a.filter(e=>{const d=[se(e),...e.keywords??[]].join(" ");return N(d).includes(E)}):a,[a,E]),I=s.useMemo(()=>i.reduce((e,o)=>o.disabled?e:e+1,0),[i]),ne=s.useMemo(()=>$({query:h,visibleCount:i.length,enabledCount:I,totalCount:a.length}),[a.length,I,i.length,$,h]),B=s.useMemo(()=>i.findIndex(e=>!e.disabled),[i]),ae=s.useMemo(()=>{var e;for(let o=i.length-1;o>=0;o-=1)if(!((e=i[o])!=null&&e.disabled))return o;return-1},[i]);s.useEffect(()=>{if(i.length===0){f(-1);return}f(B)},[i,B]);const O=s.useCallback(e=>{var d;const o=i[e];!o||o.disabled||((d=o.onSelect)==null||d.call(o),l&&t(!1))},[l,i,t]),P=e=>{var d;if(i.length===0)return;let o=b<0?e===1?-1:0:b;for(let x=0;x<i.length;x+=1)if(o=(o+e+i.length)%i.length,!((d=i[o])!=null&&d.disabled)){f(o);return}};return r.jsx(re,{open:n,onOpenChange:t,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",children:r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx(oe,{ref:q,role:"combobox","aria-expanded":n,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":v,"aria-activedescendant":b>=0?`${v}-option-${b}`:void 0,placeholder:c,value:h,onChange:e=>{j(e.target.value),g==null||g(e.target.value)},onKeyDown:e=>{if(e.key==="ArrowDown"){e.preventDefault(),P(1);return}if(e.key==="ArrowUp"){e.preventDefault(),P(-1);return}if(e.key==="Home"){e.preventDefault(),f(B);return}if(e.key==="End"){e.preventDefault(),f(ae);return}e.key==="Enter"&&b>=0&&(e.preventDefault(),O(b))},"aria-label":"Search commands"}),r.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:ne}),r.jsx("div",{id:v,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:i.length>0?i.map((e,o)=>{const d=o===b;return r.jsx("button",{id:`${v}-option-${o}`,type:"button",role:"option","aria-selected":d,"aria-disabled":e.disabled||void 0,tabIndex:-1,disabled:e.disabled,onMouseDown:x=>{x.preventDefault()},onMouseEnter:()=>{e.disabled||f(o)},onClick:()=>O(o),style:{border:"1px solid var(--aurora-border-default)",background:d?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:e.disabled?"not-allowed":"pointer"},children:e.label},e.key)}):r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:u})})]})})}function se(n){return typeof n.textValue=="string"?n.textValue.trim():typeof n.label=="string"?n.label.trim():""}function N(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function ie({query:n,visibleCount:t,enabledCount:a,totalCount:l}){const c=n.trim();return c.length===0?a!==l?`${a} of ${l} command${l===1?"":"s"} available.`:`${l} command${l===1?"":"s"} available.`:t===0?`No commands match "${c}".`:a===0?`No enabled commands match "${c}".`:a!==t?`${a} of ${t} matching command${a===1?"":"s"} available for "${c}".`:`${t} command${t===1?"":"s"} found for "${c}".`}y.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const A=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Ce={title:"AI/CommandPalette",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:A}};function le(){const[n,t]=s.useState(!0);return r.jsx(y,{open:n,onOpenChange:t,commands:A,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function ce(){const[n,t]=s.useState(!0),[a,l]=s.useState("None"),c=A.map(u=>({...u,onSelect:()=>l(typeof u.textValue=="string"?u.textValue:typeof u.label=="string"?u.label:u.key)}));return r.jsxs("div",{style:{minHeight:420,padding:20},children:[r.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",r.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:a})]}),r.jsx(y,{open:n,onOpenChange:t,commands:c})]})}function ue(){const[n,t]=s.useState(!0),[a,l]=s.useState("");return r.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",r.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:a||"N/A"})]}),r.jsx(y,{open:n,onOpenChange:t,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:l,getResultsStatusText:({query:c,visibleCount:u,enabledCount:g})=>c.trim().length===0?"Command search ready.":`${g}/${u} actionable AI workflow match${u===1?"":"es"} for ${c}`})]})}function de(){const[n,t]=s.useState(!0);return r.jsx(y,{open:n,onOpenChange:t,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function me(){const[n,t]=s.useState(!0);return r.jsx(y,{open:n,onOpenChange:t,commands:[{key:"cafe-settings",label:r.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function pe(){const[n,t]=s.useState(!0),[a,l]=s.useState(0);return r.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",r.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),r.jsx(y,{open:n,onOpenChange:t,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>l(c=>c+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>l(c=>c+1)}]})]})}const k={render:()=>r.jsx(le,{}),play:async({canvasElement:n})=>{const t=w(n.ownerDocument.body),a=await t.findByRole("combobox",{name:"Search commands"});await m.clear(a),await m.type(a,"publish");const l=t.getByRole("option",{name:"Publish Release"});await p(l).toHaveAttribute("aria-disabled","true"),await p(l).toHaveAttribute("tabindex","-1")}},S={render:()=>r.jsx(ce,{})},C={render:()=>r.jsx(ue,{}),play:async({canvasElement:n})=>{const t=w(n.ownerDocument.body),a=await t.findByRole("combobox",{name:"Search commands"});await m.clear(a),await m.type(a,"release"),await p(t.getByText("release")).toBeInTheDocument(),await m.keyboard("{ArrowDown}{Enter}"),await p(t.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},R={render:()=>r.jsx(de,{}),play:async({canvasElement:n})=>{const t=w(n.ownerDocument.body),a=await t.findByRole("combobox",{name:"Search commands"});await m.clear(a),await m.type(a,"release"),await p(t.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},T={render:()=>r.jsx(me,{}),play:async({canvasElement:n})=>{const t=w(n.ownerDocument.body),a=await t.findByRole("combobox",{name:"Search commands"});await m.clear(a),await m.type(a,"cafe"),await p(t.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await p(t.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},D={render:()=>r.jsx(pe,{}),play:async({canvasElement:n})=>{const t=w(n.ownerDocument.body),a=await t.findByRole("option",{name:"Run Lint"});await m.click(a),await p(t.getByTestId("selection-count")).toHaveTextContent("1"),await p(t.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}};var V,H,z;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(H=k.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var M,L,F;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(F=(L=S.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var Q,_,G;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(G=(_=C.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var U,K,J;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(K=R.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var W,X,Y;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <TextValueAndAccentSearchPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "cafe");
    await expect(canvas.getByRole("option", {
      name: "Café Settings"
    })).toBeInTheDocument();
    await expect(canvas.queryByRole("option", {
      name: "Open Reports"
    })).not.toBeInTheDocument();
  }
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <PersistentSelectionPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const runLint = await canvas.findByRole("option", {
      name: "Run Lint"
    });
    await userEvent.click(runLint);
    await expect(canvas.getByTestId("selection-count")).toHaveTextContent("1");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Re=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","TextValueAndAccentSearch","PersistentSelection"];export{S as AiInteractionFlow,R as DisabledOnlyResults,D as PersistentSelection,C as QueryTelemetry,k as SearchCommands,T as TextValueAndAccentSearch,Re as __namedExportsOrder,Ce as default};
