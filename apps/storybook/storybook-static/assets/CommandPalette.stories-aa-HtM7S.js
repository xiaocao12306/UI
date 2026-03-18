import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as he}from"./Dialog-lfL8UqXn.js";import{I as xe}from"./Input-CY7BO4jw.js";import{within as g,userEvent as c,expect as u,fireEvent as ke}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-A0m7L4y_.js";function p({open:t,onOpenChange:e,commands:n,closeOnSelect:r=!0,closeOnEscape:i=!0,closeOnOutsidePointer:m=!0,onEscapeKeyDown:P,onPointerDownOutside:ge,placeholder:be="Search commands...",emptyMessage:ve="No commands found.",onQueryChange:O,getResultsStatusText:A=Ce}){const[w,$]=s.useState(""),[b,v]=s.useState(0),H=s.useRef(null),f=s.useId();s.useEffect(()=>{var o;if(!t){$(""),v(0);return}(o=H.current)==null||o.focus()},[t]);const j=s.useMemo(()=>G(w.trim()),[w]),d=s.useMemo(()=>j?n.filter(o=>{const y=[Re(o),...o.keywords??[]].join(" ");return G(y).includes(j)}):n,[n,j]),N=s.useMemo(()=>d.reduce((o,l)=>l.disabled?o:o+1,0),[d]),we=s.useMemo(()=>A({query:w,visibleCount:d.length,enabledCount:N,totalCount:n.length}),[n.length,N,d.length,A,w]),I=s.useMemo(()=>d.findIndex(o=>!o.disabled),[d]),fe=s.useMemo(()=>{var o;for(let l=d.length-1;l>=0;l-=1)if(!((o=d[l])!=null&&o.disabled))return l;return-1},[d]);s.useEffect(()=>{if(d.length===0){v(-1);return}v(I)},[d,I]);const V=s.useCallback(o=>{var y;const l=d[o];!l||l.disabled||((y=l.onSelect)==null||y.call(l),r&&e(!1))},[r,d,e]),z=o=>{var y;if(d.length===0)return;let l=b<0?o===1?-1:0:b;for(let h=0;h<d.length;h+=1)if(l=(l+o+d.length)%d.length,!((y=d[l])!=null&&y.disabled)){v(l);return}};return a.jsx(he,{open:t,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:i,closeOnOutsidePointer:m,onEscapeKeyDown:P,onPointerDownOutside:ge,children:a.jsxs("div",{style:{display:"grid",gap:10},children:[a.jsx(xe,{ref:H,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":f,"aria-activedescendant":b>=0?`${f}-option-${b}`:void 0,placeholder:be,value:w,onChange:o=>{$(o.target.value),O==null||O(o.target.value)},onKeyDown:o=>{if(o.key==="ArrowDown"){o.preventDefault(),z(1);return}if(o.key==="ArrowUp"){o.preventDefault(),z(-1);return}if(o.key==="Home"){o.preventDefault(),v(I);return}if(o.key==="End"){o.preventDefault(),v(fe);return}o.key==="Enter"&&b>=0&&(o.preventDefault(),V(b))},"aria-label":"Search commands"}),a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:we}),a.jsx("div",{id:f,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:d.length>0?d.map((o,l)=>{const y=l===b;return a.jsx("button",{id:`${f}-option-${l}`,type:"button",role:"option","aria-selected":y,"aria-disabled":o.disabled||void 0,"aria-posinset":l+1,"aria-setsize":d.length,tabIndex:-1,disabled:o.disabled,onMouseDown:h=>{h.preventDefault()},onMouseEnter:()=>{o.disabled||v(l)},onClick:()=>V(l),style:{border:"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)}):a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:ve})})]})})}function Re(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function G(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Ce({query:t,visibleCount:e,enabledCount:n,totalCount:r}){const i=t.trim();return i.length===0?n!==r?`${n} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${i}".`:n===0?`No enabled commands match "${i}".`:n!==e?`${n} of ${e} matching command${n===1?"":"s"} available for "${i}".`:`${e} command${e===1?"":"s"} found for "${i}".`}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const q=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Fe={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:q}};function De(){const[t,e]=s.useState(!0);return a.jsx(p,{open:t,onOpenChange:e,commands:q,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Be(){const[t,e]=s.useState(!0),[n,r]=s.useState("None"),i=q.map(m=>({...m,onSelect:()=>r(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return a.jsxs("div",{style:{minHeight:420,padding:20},children:[a.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(p,{open:t,onOpenChange:e,commands:i})]})}function Ee(){const[t,e]=s.useState(!0),[n,r]=s.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),a.jsx(p,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:i,visibleCount:m,enabledCount:P})=>i.trim().length===0?"Command search ready.":`${P}/${m} actionable AI workflow match${m===1?"":"es"} for ${i}`})]})}function Se(){const[t,e]=s.useState(!0);return a.jsx(p,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Te(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",a.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(p,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(i=>i+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(i=>i+1)}],placeholder:"Try searching publish..."})]})}function Pe(){const[t,e]=s.useState(!0);return a.jsx(p,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:a.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Oe(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",a.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(i=>i+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(i=>i+1)}]})]})}function je(){const[t,e]=s.useState(!1);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),a.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:t?"Close blocking palette":"Open blocking palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(p,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ie(){const[t,e]=s.useState(!1),[n,r]=s.useState(!0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",a.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:n?"enabled":"disabled"})]}),a.jsx("button",{type:"button",onClick:()=>e(i=>!i),children:t?"Close guarded palette":"Open guarded palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(p,{open:t,onOpenChange:e,closeOnSelect:!1,onEscapeKeyDown:i=>{n&&i.preventDefault()},onPointerDownOutside:i=>{n&&i.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!n,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}const x={render:()=>a.jsx(De,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await u(r).toHaveAttribute("aria-disabled","true"),await u(r).toHaveAttribute("tabindex","-1")}},k={render:()=>a.jsx(Be,{})},R={render:()=>a.jsx(Ee,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"release"),await u(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await u(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},C={render:()=>a.jsx(Se,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"release"),await u(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},D={render:()=>a.jsx(Te,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await u(r).toHaveAttribute("aria-disabled","true"),await c.click(r),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await u(e.getByTestId("executed-count")).toHaveTextContent("0")}},B={render:()=>a.jsx(Pe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await c.clear(n),await c.type(n,"cafe"),await u(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await u(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},E={render:()=>a.jsx(Oe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("option",{name:"Run Lint"});await c.click(n),await u(e.getByTestId("selection-count")).toHaveTextContent("1"),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},S={render:()=>a.jsx(je,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"})),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},T={render:()=>a.jsx(Ie,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),ke.pointerDown(n.body),await u(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await c.clear(r),await c.type(r,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await u(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await u(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}};var M,L,F;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(L=x.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var K,Q,U;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(U=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var _,J,W;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(J=R.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,re;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,le;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ye;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <GuardedDismissPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await userEvent.click(await canvas.findByRole("button", {
      name: "Open guarded palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    fireEvent.pointerDown(doc.body);
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    const input = canvas.getByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "unlock");
    await userEvent.click(canvas.getByRole("option", {
      name: "Unlock dismiss guard"
    }));
    await expect(canvas.getByTestId("guard-state")).toHaveTextContent("disabled");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
  }
}`,...(ye=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};const Ke=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents"];export{k as AiInteractionFlow,D as DisabledCommandGuard,C as DisabledOnlyResults,T as GuardedDismissEvents,S as NonDismissible,E as PersistentSelection,R as QueryTelemetry,x as SearchCommands,B as TextValueAndAccentSearch,Ke as __namedExportsOrder,Fe as default};
