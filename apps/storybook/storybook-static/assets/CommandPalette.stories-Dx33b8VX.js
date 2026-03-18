import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as Pe}from"./Dialog-lfL8UqXn.js";import{I as je}from"./Input-CK-2zJ6Z.js";import{within as b,userEvent as l,expect as i,fireEvent as Ie}from"./index-DgAF9SIF.js";import"./FocusScope-Db3t2k9z.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-B4f576w9.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({open:a,onOpenChange:e,commands:n,closeOnSelect:r=!0,clearQueryOnEscape:d=!0,closeOnEscape:y=!0,closeOnOutsidePointer:q=!0,onEscapeKeyDown:Be,onPointerDownOutside:Re,placeholder:Ee="Search commands...",emptyMessage:De="No commands found.",onQueryChange:h,getResultsStatusText:V=Ae}){const[f,H]=s.useState(""),[g,v]=s.useState(0),z=s.useRef(null),x=s.useRef(null),C=s.useId();s.useEffect(()=>{var o;if(!a){H(""),v(0);return}(o=z.current)==null||o.focus()},[a]);const $=s.useMemo(()=>M(f.trim()),[f]),u=s.useMemo(()=>$?n.filter(o=>{const m=[Oe(o),...o.keywords??[]].join(" ");return M(m).includes($)}):n,[n,$]),G=s.useMemo(()=>u.reduce((o,c)=>c.disabled?o:o+1,0),[u]),Te=s.useMemo(()=>V({query:f,visibleCount:u.length,enabledCount:G,totalCount:n.length}),[n.length,G,u.length,V,f]),k=s.useMemo(()=>u.findIndex(o=>!o.disabled),[u]),Se=s.useMemo(()=>{var o;for(let c=u.length-1;c>=0;c-=1)if(!((o=u[c])!=null&&o.disabled))return c;return-1},[u]);s.useEffect(()=>{var c;if(u.length===0){x.current=null,v(-1);return}const o=x.current;if(o){const m=u.findIndex(w=>!w.disabled&&w.key===o);if(m>=0){v(m);return}}v(k),x.current=k>=0?((c=u[k])==null?void 0:c.key)??null:null},[u,k]),s.useEffect(()=>{var o;if(g<0){x.current=null;return}x.current=((o=u[g])==null?void 0:o.key)??null},[g,u]);const L=s.useCallback(o=>{var m;const c=u[o];!c||c.disabled||((m=c.onSelect)==null||m.call(c),r&&e(!1))},[r,u,e]),K=o=>{var m;if(u.length===0)return;let c=g<0?o===1?-1:0:g;for(let w=0;w<u.length;w+=1)if(c=(c+o+u.length)%u.length,!((m=u[c])!=null&&m.disabled)){v(c);return}};return t.jsx(Pe,{open:a,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:y,closeOnOutsidePointer:q,onEscapeKeyDown:Be,onPointerDownOutside:Re,children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx(je,{ref:z,role:"combobox","aria-expanded":a,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":C,"aria-activedescendant":g>=0?`${C}-option-${g}`:void 0,placeholder:Ee,value:f,onChange:o=>{H(o.target.value),h==null||h(o.target.value)},onKeyDown:o=>{if(o.key==="Escape"&&d&&f.length>0){o.preventDefault(),H(""),h==null||h("");return}if(o.key==="ArrowDown"){o.preventDefault(),K(1);return}if(o.key==="ArrowUp"){o.preventDefault(),K(-1);return}if(o.key==="Home"){o.preventDefault(),v(k);return}if(o.key==="End"){o.preventDefault(),v(Se);return}o.key==="Enter"&&g>=0&&(o.preventDefault(),L(g))},"aria-label":"Search commands"}),t.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Te}),t.jsx("div",{id:C,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.length>0?u.map((o,c)=>{const m=c===g;return t.jsx("button",{id:`${C}-option-${c}`,type:"button",role:"option","aria-selected":m,"aria-disabled":o.disabled||void 0,"aria-posinset":c+1,"aria-setsize":u.length,tabIndex:-1,disabled:o.disabled,onMouseDown:w=>{w.preventDefault()},onMouseEnter:()=>{o.disabled||v(c)},onClick:()=>L(c),style:{border:"1px solid var(--aurora-border-default)",background:m?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)}):t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:De})})]})})}function Oe(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function M(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Ae({query:a,visibleCount:e,enabledCount:n,totalCount:r}){const d=a.trim();return d.length===0?n!==r?`${n} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${d}".`:n===0?`No enabled commands match "${d}".`:n!==e?`${n} of ${e} matching command${n===1?"":"s"} available for "${d}".`:`${e} command${e===1?"":"s"} found for "${d}".`}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const N=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],at={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:N}};function qe(){const[a,e]=s.useState(!0);return t.jsx(p,{open:a,onOpenChange:e,commands:N,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function He(){const[a,e]=s.useState(!0),[n,r]=s.useState("None"),d=N.map(y=>({...y,onSelect:()=>r(typeof y.textValue=="string"?y.textValue:typeof y.label=="string"?y.label:y.key)}));return t.jsxs("div",{style:{minHeight:420,padding:20},children:[t.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(p,{open:a,onOpenChange:e,commands:d})]})}function $e(){const[a,e]=s.useState(!0),[n,r]=s.useState("");return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),t.jsx(p,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:d,visibleCount:y,enabledCount:q})=>d.trim().length===0?"Command search ready.":`${q}/${y} actionable AI workflow match${y===1?"":"es"} for ${d}`})]})}function Ne(){const[a,e]=s.useState(!0);return t.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Ve(){const[a,e]=s.useState(!0),[n,r]=s.useState(0);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",t.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(d=>d+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(d=>d+1)}],placeholder:"Try searching publish..."})]})}function ze(){const[a,e]=s.useState(!0);return t.jsx(p,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:t.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Ge(){const[a,e]=s.useState(!0),[n,r]=s.useState(0);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",t.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(d=>d+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(d=>d+1)}]})]})}function Le(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),t.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:a?"Close blocking palette":"Open blocking palette"}),t.jsx("button",{type:"button",children:"Outside target"}),t.jsx(p,{open:a,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ke(){const[a,e]=s.useState(!1),[n,r]=s.useState(!0);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",t.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:n?"enabled":"disabled"})]}),t.jsx("button",{type:"button",onClick:()=>e(d=>!d),children:a?"Close guarded palette":"Open guarded palette"}),t.jsx("button",{type:"button",children:"Outside target"}),t.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:d=>{n&&d.preventDefault()},onPointerDownOutside:d=>{n&&d.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!n,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Me(){const[a,e]=s.useState(!0),[n,r]=s.useState("");return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",t.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",t.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:a?"open":"closed"})]}),t.jsx(p,{open:a,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Fe(){const[a,e]=s.useState(!0),[n,r]=s.useState("none");return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",t.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}const B={render:()=>t.jsx(qe,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await i(r).toHaveAttribute("aria-disabled","true"),await i(r).toHaveAttribute("tabindex","-1")}},R={render:()=>t.jsx(He,{})},E={render:()=>t.jsx($e,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await i(e.getByText("release")).toBeInTheDocument(),await l.keyboard("{ArrowDown}{Enter}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},D={render:()=>t.jsx(Ne,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await i(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},T={render:()=>t.jsx(Ve,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await i(r).toHaveAttribute("aria-disabled","true"),await l.click(r),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i(e.getByTestId("executed-count")).toHaveTextContent("0")}},S={render:()=>t.jsx(ze,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"cafe"),await i(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await i(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},P={render:()=>t.jsx(Ge,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("option",{name:"Run Lint"});await l.click(n),await i(e.getByTestId("selection-count")).toHaveTextContent("1"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},j={render:()=>t.jsx(Le,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body);await l.click(await e.findByRole("button",{name:"Open blocking palette"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.click(e.getByRole("button",{name:"Outside target"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},I={render:()=>t.jsx(Ke,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=a.ownerDocument;await l.click(await e.findByRole("button",{name:"Open guarded palette"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),Ie.pointerDown(n.body),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await l.clear(r),await l.type(r,"unlock"),await l.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await i(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await l.keyboard("{Escape}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},O={render:()=>t.jsx(Me,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await i(e.getByTestId("query-value")).toHaveTextContent("release"),await l.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i(e.getByTestId("query-value")).toHaveTextContent("N/A"),await i(e.getByTestId("open-state")).toHaveTextContent("open"),await l.keyboard("{Escape}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i(e.getByTestId("open-state")).toHaveTextContent("closed")}},A={render:()=>t.jsx(Fe,{}),play:async({canvasElement:a})=>{const e=b(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.type(n,"search"),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-0")),await l.clear(n),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-1")),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}};var F,Q,U;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var _,J,W;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(W=(J=R.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var X,Y,Z;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,re;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ye;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ge,be,ve;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(be=I.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var we,he,fe;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(fe=(he=O.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var xe,ke,Ce;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <RefinedSearchKeepsActiveCommandPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.type(input, "search");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    await userEvent.clear(input);
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(Ce=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const nt=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand"];export{R as AiInteractionFlow,T as DisabledCommandGuard,D as DisabledOnlyResults,O as EscapeClearsQueryFirst,I as GuardedDismissEvents,j as NonDismissible,P as PersistentSelection,E as QueryTelemetry,A as RefinedSearchKeepsActiveCommand,B as SearchCommands,S as TextValueAndAccentSearch,nt as __namedExportsOrder,at as default};
