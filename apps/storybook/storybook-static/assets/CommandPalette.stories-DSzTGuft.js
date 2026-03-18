import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{D as ye}from"./Dialog-lfL8UqXn.js";import{I as be}from"./Input-CY7BO4jw.js";import{within as f,userEvent as u,expect as d}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function y({open:t,onOpenChange:e,commands:o,closeOnSelect:s=!0,closeOnEscape:c=!0,closeOnOutsidePointer:m=!0,placeholder:E="Search commands...",emptyMessage:de="No commands found.",onQueryChange:O,getResultsStatusText:A=fe}){const[w,q]=r.useState(""),[b,g]=r.useState(0),$=r.useRef(null),h=r.useId();r.useEffect(()=>{var a;if(!t){q(""),g(0);return}(a=$.current)==null||a.focus()},[t]);const j=r.useMemo(()=>z(w.trim()),[w]),l=r.useMemo(()=>j?o.filter(a=>{const p=[ge(a),...a.keywords??[]].join(" ");return z(p).includes(j)}):o,[o,j]),N=r.useMemo(()=>l.reduce((a,i)=>i.disabled?a:a+1,0),[l]),me=r.useMemo(()=>A({query:w,visibleCount:l.length,enabledCount:N,totalCount:o.length}),[o.length,N,l.length,A,w]),P=r.useMemo(()=>l.findIndex(a=>!a.disabled),[l]),pe=r.useMemo(()=>{var a;for(let i=l.length-1;i>=0;i-=1)if(!((a=l[i])!=null&&a.disabled))return i;return-1},[l]);r.useEffect(()=>{if(l.length===0){g(-1);return}g(P)},[l,P]);const H=r.useCallback(a=>{var p;const i=l[a];!i||i.disabled||((p=i.onSelect)==null||p.call(i),s&&e(!1))},[s,l,e]),V=a=>{var p;if(l.length===0)return;let i=b<0?a===1?-1:0:b;for(let v=0;v<l.length;v+=1)if(i=(i+a+l.length)%l.length,!((p=l[i])!=null&&p.disabled)){g(i);return}};return n.jsx(ye,{open:t,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:c,closeOnOutsidePointer:m,children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(be,{ref:$,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":h,"aria-activedescendant":b>=0?`${h}-option-${b}`:void 0,placeholder:E,value:w,onChange:a=>{q(a.target.value),O==null||O(a.target.value)},onKeyDown:a=>{if(a.key==="ArrowDown"){a.preventDefault(),V(1);return}if(a.key==="ArrowUp"){a.preventDefault(),V(-1);return}if(a.key==="Home"){a.preventDefault(),g(P);return}if(a.key==="End"){a.preventDefault(),g(pe);return}a.key==="Enter"&&b>=0&&(a.preventDefault(),H(b))},"aria-label":"Search commands"}),n.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:me}),n.jsx("div",{id:h,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:l.length>0?l.map((a,i)=>{const p=i===b;return n.jsx("button",{id:`${h}-option-${i}`,type:"button",role:"option","aria-selected":p,"aria-disabled":a.disabled||void 0,"aria-posinset":i+1,"aria-setsize":l.length,tabIndex:-1,disabled:a.disabled,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{a.disabled||g(i)},onClick:()=>H(i),style:{border:"1px solid var(--aurora-border-default)",background:p?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:a.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:a.disabled?"not-allowed":"pointer"},children:a.label},a.key)}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:de})})]})})}function ge(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function z(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function fe({query:t,visibleCount:e,enabledCount:o,totalCount:s}){const c=t.trim();return c.length===0?o!==s?`${o} of ${s} command${s===1?"":"s"} available.`:`${s} command${s===1?"":"s"} available.`:e===0?`No commands match "${c}".`:o===0?`No enabled commands match "${c}".`:o!==e?`${o} of ${e} matching command${o===1?"":"s"} available for "${c}".`:`${e} command${e===1?"":"s"} found for "${c}".`}y.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const I=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],$e={title:"AI/CommandPalette",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:I}};function we(){const[t,e]=r.useState(!0);return n.jsx(y,{open:t,onOpenChange:e,commands:I,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function he(){const[t,e]=r.useState(!0),[o,s]=r.useState("None"),c=I.map(m=>({...m,onSelect:()=>s(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:o})]}),n.jsx(y,{open:t,onOpenChange:e,commands:c})]})}function ve(){const[t,e]=r.useState(!0),[o,s]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:o||"N/A"})]}),n.jsx(y,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:s,getResultsStatusText:({query:c,visibleCount:m,enabledCount:E})=>c.trim().length===0?"Command search ready.":`${E}/${m} actionable AI workflow match${m===1?"":"es"} for ${c}`})]})}function xe(){const[t,e]=r.useState(!0);return n.jsx(y,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function ke(){const[t,e]=r.useState(!0),[o,s]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:o})]}),n.jsx(y,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>s(c=>c+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>s(c=>c+1)}],placeholder:"Try searching publish..."})]})}function Ce(){const[t,e]=r.useState(!0);return n.jsx(y,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:n.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Re(){const[t,e]=r.useState(!0),[o,s]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",n.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:o})]}),n.jsx(y,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>s(c=>c+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>s(c=>c+1)}]})]})}function Se(){const[t,e]=r.useState(!1);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),n.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:t?"Close blocking palette":"Open blocking palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(y,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}const x={render:()=>n.jsx(we,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"publish");const s=e.getByRole("option",{name:"Publish Release"});await d(s).toHaveAttribute("aria-disabled","true"),await d(s).toHaveAttribute("tabindex","-1")}},k={render:()=>n.jsx(he,{})},C={render:()=>n.jsx(ve,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"release"),await d(e.getByText("release")).toBeInTheDocument(),await u.keyboard("{ArrowDown}{Enter}"),await d(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},R={render:()=>n.jsx(xe,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"release"),await d(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},S={render:()=>n.jsx(ke,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"publish");const s=e.getByRole("option",{name:"Publish Release"});await d(s).toHaveAttribute("aria-disabled","true"),await u.click(s),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await d(e.getByTestId("executed-count")).toHaveTextContent("0")}},B={render:()=>n.jsx(Ce,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"cafe"),await d(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await d(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},T={render:()=>n.jsx(Re,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("option",{name:"Run Lint"});await u.click(o),await d(e.getByTestId("selection-count")).toHaveTextContent("1"),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},D={render:()=>n.jsx(Se,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await u.click(await e.findByRole("button",{name:"Open blocking palette"})),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await u.keyboard("{Escape}"),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await u.click(e.getByRole("button",{name:"Outside target"})),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}};var M,L,G;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(L=x.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var F,Q,_;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(_=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var U,K,J;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(K=C.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var W,X,Y;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <DisabledCommandGuardPalette />,
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
    await userEvent.click(disabledOption);
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("executed-count")).toHaveTextContent("0");
  }
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,oe;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,ie;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ce,ue;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <NonDismissiblePalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Open blocking palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside target"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(ue=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const Ne=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible"];export{k as AiInteractionFlow,S as DisabledCommandGuard,R as DisabledOnlyResults,D as NonDismissible,T as PersistentSelection,C as QueryTelemetry,x as SearchCommands,B as TextValueAndAccentSearch,Ne as __namedExportsOrder,$e as default};
