import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as ue}from"./Dialog-lfL8UqXn.js";import{I as de}from"./Input-CY7BO4jw.js";import{within as f,userEvent as u,expect as d}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function y({open:t,onOpenChange:e,commands:o,closeOnSelect:i=!0,closeOnEscape:c=!0,closeOnOutsidePointer:m=!0,placeholder:D="Search commands...",emptyMessage:le="No commands found.",onQueryChange:E,getResultsStatusText:I=pe}){const[w,A]=s.useState(""),[b,g]=s.useState(0),q=s.useRef(null),h=s.useId();s.useEffect(()=>{var n;if(!t){A(""),g(0);return}(n=q.current)==null||n.focus()},[t]);const O=s.useMemo(()=>H(w.trim()),[w]),l=s.useMemo(()=>O?o.filter(n=>{const p=[me(n),...n.keywords??[]].join(" ");return H(p).includes(O)}):o,[o,O]),$=s.useMemo(()=>l.reduce((n,r)=>r.disabled?n:n+1,0),[l]),ie=s.useMemo(()=>I({query:w,visibleCount:l.length,enabledCount:$,totalCount:o.length}),[o.length,$,l.length,I,w]),j=s.useMemo(()=>l.findIndex(n=>!n.disabled),[l]),ce=s.useMemo(()=>{var n;for(let r=l.length-1;r>=0;r-=1)if(!((n=l[r])!=null&&n.disabled))return r;return-1},[l]);s.useEffect(()=>{if(l.length===0){g(-1);return}g(j)},[l,j]);const N=s.useCallback(n=>{var p;const r=l[n];!r||r.disabled||((p=r.onSelect)==null||p.call(r),i&&e(!1))},[i,l,e]),V=n=>{var p;if(l.length===0)return;let r=b<0?n===1?-1:0:b;for(let v=0;v<l.length;v+=1)if(r=(r+n+l.length)%l.length,!((p=l[r])!=null&&p.disabled)){g(r);return}};return a.jsx(ue,{open:t,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:c,closeOnOutsidePointer:m,children:a.jsxs("div",{style:{display:"grid",gap:10},children:[a.jsx(de,{ref:q,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":h,"aria-activedescendant":b>=0?`${h}-option-${b}`:void 0,placeholder:D,value:w,onChange:n=>{A(n.target.value),E==null||E(n.target.value)},onKeyDown:n=>{if(n.key==="ArrowDown"){n.preventDefault(),V(1);return}if(n.key==="ArrowUp"){n.preventDefault(),V(-1);return}if(n.key==="Home"){n.preventDefault(),g(j);return}if(n.key==="End"){n.preventDefault(),g(ce);return}n.key==="Enter"&&b>=0&&(n.preventDefault(),N(b))},"aria-label":"Search commands"}),a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:ie}),a.jsx("div",{id:h,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:l.length>0?l.map((n,r)=>{const p=r===b;return a.jsx("button",{id:`${h}-option-${r}`,type:"button",role:"option","aria-selected":p,"aria-disabled":n.disabled||void 0,tabIndex:-1,disabled:n.disabled,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{n.disabled||g(r)},onClick:()=>N(r),style:{border:"1px solid var(--aurora-border-default)",background:p?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:n.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:n.disabled?"not-allowed":"pointer"},children:n.label},n.key)}):a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:le})})]})})}function me(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function H(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function pe({query:t,visibleCount:e,enabledCount:o,totalCount:i}){const c=t.trim();return c.length===0?o!==i?`${o} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:e===0?`No commands match "${c}".`:o===0?`No enabled commands match "${c}".`:o!==e?`${o} of ${e} matching command${o===1?"":"s"} available for "${c}".`:`${e} command${e===1?"":"s"} found for "${c}".`}y.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const P=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],je={title:"AI/CommandPalette",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:P}};function ye(){const[t,e]=s.useState(!0);return a.jsx(y,{open:t,onOpenChange:e,commands:P,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function be(){const[t,e]=s.useState(!0),[o,i]=s.useState("None"),c=P.map(m=>({...m,onSelect:()=>i(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return a.jsxs("div",{style:{minHeight:420,padding:20},children:[a.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(y,{open:t,onOpenChange:e,commands:c})]})}function ge(){const[t,e]=s.useState(!0),[o,i]=s.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:o||"N/A"})]}),a.jsx(y,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:c,visibleCount:m,enabledCount:D})=>c.trim().length===0?"Command search ready.":`${D}/${m} actionable AI workflow match${m===1?"":"es"} for ${c}`})]})}function fe(){const[t,e]=s.useState(!0);return a.jsx(y,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function we(){const[t,e]=s.useState(!0);return a.jsx(y,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:a.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function he(){const[t,e]=s.useState(!0),[o,i]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",a.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:o})]}),a.jsx(y,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(c=>c+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>i(c=>c+1)}]})]})}function ve(){const[t,e]=s.useState(!1);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),a.jsx("button",{type:"button",onClick:()=>e(o=>!o),children:t?"Close blocking palette":"Open blocking palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(y,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}const x={render:()=>a.jsx(ye,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"publish");const i=e.getByRole("option",{name:"Publish Release"});await d(i).toHaveAttribute("aria-disabled","true"),await d(i).toHaveAttribute("tabindex","-1")}},k={render:()=>a.jsx(be,{})},R={render:()=>a.jsx(ge,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"release"),await d(e.getByText("release")).toBeInTheDocument(),await u.keyboard("{ArrowDown}{Enter}"),await d(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},C={render:()=>a.jsx(fe,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"release"),await d(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},S={render:()=>a.jsx(we,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("combobox",{name:"Search commands"});await u.clear(o),await u.type(o,"cafe"),await d(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await d(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},T={render:()=>a.jsx(he,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body),o=await e.findByRole("option",{name:"Run Lint"});await u.click(o),await d(e.getByTestId("selection-count")).toHaveTextContent("1"),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},B={render:()=>a.jsx(ve,{}),play:async({canvasElement:t})=>{const e=f(t.ownerDocument.body);await u.click(await e.findByRole("button",{name:"Open blocking palette"})),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await u.keyboard("{Escape}"),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await u.click(e.getByRole("button",{name:"Outside target"})),await d(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}};var z,M,L;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(M=x.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var F,Q,_;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(_=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var G,U,K;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(U=R.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var J,W,X;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(W=C.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,re,se;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Pe=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","TextValueAndAccentSearch","PersistentSelection","NonDismissible"];export{k as AiInteractionFlow,C as DisabledOnlyResults,B as NonDismissible,T as PersistentSelection,R as QueryTelemetry,x as SearchCommands,S as TextValueAndAccentSearch,Pe as __namedExportsOrder,je as default};
