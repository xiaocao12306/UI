import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as Re}from"./Dialog-lfL8UqXn.js";import{I as Te}from"./Input-CK-2zJ6Z.js";import{within as g,userEvent as l,expect as c,fireEvent as Ee}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:t,onOpenChange:e,commands:n,closeOnSelect:r=!0,clearQueryOnEscape:i=!0,closeOnEscape:p=!0,closeOnOutsidePointer:j=!0,onEscapeKeyDown:he,onPointerDownOutside:fe,placeholder:xe="Search commands...",emptyMessage:ke="No commands found.",onQueryChange:w,getResultsStatusText:H=Se}){const[h,O]=s.useState(""),[b,v]=s.useState(0),N=s.useRef(null),f=s.useId();s.useEffect(()=>{var o;if(!t){O(""),v(0);return}(o=N.current)==null||o.focus()},[t]);const q=s.useMemo(()=>M(h.trim()),[h]),u=s.useMemo(()=>q?n.filter(o=>{const y=[De(o),...o.keywords??[]].join(" ");return M(y).includes(q)}):n,[n,q]),V=s.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),Be=s.useMemo(()=>H({query:h,visibleCount:u.length,enabledCount:V,totalCount:n.length}),[n.length,V,u.length,H,h]),A=s.useMemo(()=>u.findIndex(o=>!o.disabled),[u]),Ce=s.useMemo(()=>{var o;for(let d=u.length-1;d>=0;d-=1)if(!((o=u[d])!=null&&o.disabled))return d;return-1},[u]);s.useEffect(()=>{if(u.length===0){v(-1);return}v(A)},[u,A]);const z=s.useCallback(o=>{var y;const d=u[o];!d||d.disabled||((y=d.onSelect)==null||y.call(d),r&&e(!1))},[r,u,e]),G=o=>{var y;if(u.length===0)return;let d=b<0?o===1?-1:0:b;for(let x=0;x<u.length;x+=1)if(d=(d+o+u.length)%u.length,!((y=u[d])!=null&&y.disabled)){v(d);return}};return a.jsx(Re,{open:t,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:p,closeOnOutsidePointer:j,onEscapeKeyDown:he,onPointerDownOutside:fe,children:a.jsxs("div",{style:{display:"grid",gap:10},children:[a.jsx(Te,{ref:N,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":f,"aria-activedescendant":b>=0?`${f}-option-${b}`:void 0,placeholder:xe,value:h,onChange:o=>{O(o.target.value),w==null||w(o.target.value)},onKeyDown:o=>{if(o.key==="Escape"&&i&&h.length>0){o.preventDefault(),O(""),w==null||w("");return}if(o.key==="ArrowDown"){o.preventDefault(),G(1);return}if(o.key==="ArrowUp"){o.preventDefault(),G(-1);return}if(o.key==="Home"){o.preventDefault(),v(A);return}if(o.key==="End"){o.preventDefault(),v(Ce);return}o.key==="Enter"&&b>=0&&(o.preventDefault(),z(b))},"aria-label":"Search commands"}),a.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Be}),a.jsx("div",{id:f,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.length>0?u.map((o,d)=>{const y=d===b;return a.jsx("button",{id:`${f}-option-${d}`,type:"button",role:"option","aria-selected":y,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,disabled:o.disabled,onMouseDown:x=>{x.preventDefault()},onMouseEnter:()=>{o.disabled||v(d)},onClick:()=>z(d),style:{border:"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)}):a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:ke})})]})})}function De(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function M(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Se({query:t,visibleCount:e,enabledCount:n,totalCount:r}){const i=t.trim();return i.length===0?n!==r?`${n} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${i}".`:n===0?`No enabled commands match "${i}".`:n!==e?`${n} of ${e} matching command${n===1?"":"s"} available for "${i}".`:`${e} command${e===1?"":"s"} found for "${i}".`}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const $=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],We={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:$}};function Pe(){const[t,e]=s.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:$,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Ie(){const[t,e]=s.useState(!0),[n,r]=s.useState("None"),i=$.map(p=>({...p,onSelect:()=>r(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return a.jsxs("div",{style:{minHeight:420,padding:20},children:[a.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,commands:i})]})}function je(){const[t,e]=s.useState(!0),[n,r]=s.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:i,visibleCount:p,enabledCount:j})=>i.trim().length===0?"Command search ready.":`${j}/${p} actionable AI workflow match${p===1?"":"es"} for ${i}`})]})}function Oe(){const[t,e]=s.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function qe(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",a.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(i=>i+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(i=>i+1)}],placeholder:"Try searching publish..."})]})}function Ae(){const[t,e]=s.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:a.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function $e(){const[t,e]=s.useState(!0),[n,r]=s.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",a.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(i=>i+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(i=>i+1)}]})]})}function He(){const[t,e]=s.useState(!1);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),a.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:t?"Close blocking palette":"Open blocking palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(m,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ne(){const[t,e]=s.useState(!1),[n,r]=s.useState(!0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",a.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:n?"enabled":"disabled"})]}),a.jsx("button",{type:"button",onClick:()=>e(i=>!i),children:t?"Close guarded palette":"Open guarded palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:i=>{n&&i.preventDefault()},onPointerDownOutside:i=>{n&&i.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!n,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ve(){const[t,e]=s.useState(!0),[n,r]=s.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",a.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",a.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:t?"open":"closed"})]}),a.jsx(m,{open:t,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}const k={render:()=>a.jsx(Pe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await c(r).toHaveAttribute("aria-disabled","true"),await c(r).toHaveAttribute("tabindex","-1")}},B={render:()=>a.jsx(Ie,{})},C={render:()=>a.jsx(je,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await c(e.getByText("release")).toBeInTheDocument(),await l.keyboard("{ArrowDown}{Enter}"),await c(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},R={render:()=>a.jsx(Oe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await c(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},T={render:()=>a.jsx(qe,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await c(r).toHaveAttribute("aria-disabled","true"),await l.click(r),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c(e.getByTestId("executed-count")).toHaveTextContent("0")}},E={render:()=>a.jsx(Ae,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"cafe"),await c(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await c(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},D={render:()=>a.jsx($e,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("option",{name:"Run Lint"});await l.click(n),await c(e.getByTestId("selection-count")).toHaveTextContent("1"),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},S={render:()=>a.jsx(He,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body);await l.click(await e.findByRole("button",{name:"Open blocking palette"})),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.click(e.getByRole("button",{name:"Outside target"})),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},P={render:()=>a.jsx(Ne,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=t.ownerDocument;await l.click(await e.findByRole("button",{name:"Open guarded palette"})),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),Ee.pointerDown(n.body),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await l.clear(r),await l.type(r,"unlock"),await l.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await c(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await l.keyboard("{Escape}"),await c(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},I={render:()=>a.jsx(Ve,{}),play:async({canvasElement:t})=>{const e=g(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await c(e.getByTestId("query-value")).toHaveTextContent("release"),await l.keyboard("{Escape}"),await c(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c(e.getByTestId("query-value")).toHaveTextContent("N/A"),await c(e.getByTestId("open-state")).toHaveTextContent("open"),await l.keyboard("{Escape}"),await c(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await c(e.getByTestId("open-state")).toHaveTextContent("closed")}};var L,F,Q;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(Q=(F=k.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var K,U,_;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(_=(U=B.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var J,W,X;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(W=C.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,re,se;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=E.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ce;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ye,ge;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var be,ve,we;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <EscapeClearsQueryFirstPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByTestId("query-value")).toHaveTextContent("release");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("query-value")).toHaveTextContent("N/A");
    await expect(canvas.getByTestId("open-state")).toHaveTextContent("open");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("open-state")).toHaveTextContent("closed");
  }
}`,...(we=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};const Xe=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst"];export{B as AiInteractionFlow,T as DisabledCommandGuard,R as DisabledOnlyResults,I as EscapeClearsQueryFirst,P as GuardedDismissEvents,S as NonDismissible,D as PersistentSelection,C as QueryTelemetry,k as SearchCommands,E as TextValueAndAccentSearch,Xe as __namedExportsOrder,We as default};
