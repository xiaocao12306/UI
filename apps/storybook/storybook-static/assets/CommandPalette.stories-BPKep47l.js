import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{D as We}from"./Dialog-D3FAqkbz.js";import{I as Xe}from"./Input-CK-2zJ6Z.js";import{within as y,userEvent as l,expect as s,fireEvent as z}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DGNgq5OX.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({open:a,onOpenChange:e,commands:t,resultsAriaLabel:r="Command results",closeOnSelect:c=!0,clearQueryOnEscape:m=!0,closeOnEscape:N=!0,closeOnOutsidePointer:Ke=!0,onEscapeKeyDown:Me,onPointerDownOutside:Qe,placeholder:Fe="Search commands...",emptyMessage:Ue="No commands found.",onQueryChange:x,getResultsStatusText:M=et}){const[h,G]=i.useState(""),[b,w]=i.useState(0),Q=i.useRef(null),f=i.useRef(null),k=i.useId();i.useEffect(()=>{var o;if(!a){G(""),w(0);return}(o=Q.current)==null||o.focus()},[a]);const V=i.useMemo(()=>W(h.trim()),[h]),u=i.useMemo(()=>V?t.filter(o=>{const g=[Ye(o),...o.keywords??[]].join(" ");return W(g).includes(V)}):t,[t,V]),F=i.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),U=u.length>0,_e=i.useMemo(()=>M({query:h,visibleCount:u.length,enabledCount:F,totalCount:t.length}),[t.length,F,u.length,M,h]),C=i.useMemo(()=>u.findIndex(o=>!o.disabled),[u]),Je=i.useMemo(()=>{var o;for(let d=u.length-1;d>=0;d-=1)if(!((o=u[d])!=null&&o.disabled))return d;return-1},[u]);i.useEffect(()=>{var d;if(u.length===0){f.current=null,w(-1);return}const o=f.current;if(o){const g=u.findIndex(v=>!v.disabled&&v.key===o);if(g>=0){w(g);return}}w(C),f.current=C>=0?((d=u[C])==null?void 0:d.key)??null:null},[u,C]),i.useEffect(()=>{var o;if(b<0){f.current=null;return}f.current=((o=u[b])==null?void 0:o.key)??null},[b,u]);const _=i.useCallback(o=>{var g;const d=u[o];!d||d.disabled||((g=d.onSelect)==null||g.call(d),c&&e(!1))},[c,u,e]),J=o=>{var g;if(u.length===0)return;let d=b<0?o===1?-1:0:b;for(let v=0;v<u.length;v+=1)if(d=(d+o+u.length)%u.length,!((g=u[d])!=null&&g.disabled)){w(d);return}};return n.jsx(We,{open:a,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:N,closeOnOutsidePointer:Ke,onEscapeKeyDown:Me,onPointerDownOutside:Qe,children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(Xe,{ref:Q,role:"combobox","aria-expanded":a,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":U?k:void 0,"aria-activedescendant":b>=0?`${k}-option-${b}`:void 0,placeholder:Fe,value:h,onChange:o=>{G(o.target.value),x==null||x(o.target.value)},onKeyDown:o=>{if(!Ze(o)){if(o.key==="Escape"&&m&&h.length>0){o.preventDefault(),G(""),x==null||x("");return}if(o.key==="ArrowDown"){o.preventDefault(),J(1);return}if(o.key==="ArrowUp"){o.preventDefault(),J(-1);return}if(o.key==="Home"){o.preventDefault(),w(C);return}if(o.key==="End"){o.preventDefault(),w(Je);return}o.key==="Enter"&&b>=0&&(o.preventDefault(),_(b))}},"aria-label":"Search commands"}),n.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:_e}),U?n.jsx("div",{id:k,role:"listbox","aria-label":r,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((o,d)=>{const g=d===b;return n.jsx("button",{id:`${k}-option-${d}`,type:"button",role:"option","aria-selected":g,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,disabled:o.disabled,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{o.disabled||w(d)},onClick:()=>_(d),style:{border:"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)})}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:Ue})]})})}function Ye(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function W(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Ze(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function et({query:a,visibleCount:e,enabledCount:t,totalCount:r}){const c=a.trim();return c.length===0?t!==r?`${t} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${c}".`:t===0?`No enabled commands match "${c}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${c}".`:`${e} command${e===1?"":"s"} found for "${c}".`}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const K=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],kt={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:K}};function tt(){const[a,e]=i.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:K,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function at(){const[a,e]=i.useState(!0),[t,r]=i.useState("None"),c=K.map(m=>({...m,onSelect:()=>r(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,commands:c})]})}function ze(){const[a,e]=i.useState(!0),[t,r]=i.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:c,visibleCount:m,enabledCount:N})=>c.trim().length===0?"Command search ready.":`${N}/${m} actionable AI workflow match${m===1?"":"es"} for ${c}`})]})}function nt(){const[a,e]=i.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function ot(){const[a,e]=i.useState(!0),[t,r]=i.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(c=>c+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(c=>c+1)}],placeholder:"Try searching publish..."})]})}function st(){const[a,e]=i.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:n.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function rt(){const[a,e]=i.useState(!0),[t,r]=i.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",n.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(c=>c+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(c=>c+1)}]})]})}function it(){const[a,e]=i.useState(!1);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),n.jsx("button",{type:"button",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:a,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function ct(){const[a,e]=i.useState(!1),[t,r]=i.useState(!0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",n.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:t?"enabled":"disabled"})]}),n.jsx("button",{type:"button",onClick:()=>e(c=>!c),children:a?"Close guarded palette":"Open guarded palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:c=>{t&&c.preventDefault()},onPointerDownOutside:c=>{t&&c.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function lt(){const[a,e]=i.useState(!0),[t,r]=i.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",n.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:a?"open":"closed"})]}),n.jsx(p,{open:a,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function dt(){const[a,e]=i.useState(!0),[t,r]=i.useState("none");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",n.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function ut(){const[a,e]=i.useState(!0),[t,r]=i.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(c=>c+1)}]})]})}function mt(){const[a,e]=i.useState(!0),[t,r]=i.useState(0);return i.useEffect(()=>{const c=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,onEscapeKeyDown:()=>r(c=>c+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const E={render:()=>n.jsx(tt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.clear(t),await l.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await s(r).toHaveAttribute("aria-disabled","true"),await s(r).toHaveAttribute("tabindex","-1")}},B={render:()=>n.jsx(at,{})},R={render:()=>n.jsx(ze,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.clear(t),await l.type(t,"release"),await s(e.getByText("release")).toBeInTheDocument(),await l.keyboard("{ArrowDown}{Enter}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},D={render:()=>n.jsx(ze,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),c=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await s(c).toBeTruthy(),await s(t).toHaveAttribute("aria-controls",c),await l.clear(t),await l.type(t,"no-match"),await s(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await s(t).not.toHaveAttribute("aria-controls"),await l.clear(t);const m=await e.findByRole("listbox",{name:"Command results"});await s(t).toHaveAttribute("aria-controls",m.getAttribute("id"))}},T={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await s(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},S={render:()=>n.jsx(nt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.clear(t),await l.type(t,"release"),await s(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},I={render:()=>n.jsx(ot,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.clear(t),await l.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await s(r).toHaveAttribute("aria-disabled","true"),await l.click(r),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("executed-count")).toHaveTextContent("0")}},P={render:()=>n.jsx(st,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.clear(t),await l.type(t,"cafe"),await s(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await s(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},j={render:()=>n.jsx(rt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});await l.click(t),await s(e.getByTestId("selection-count")).toHaveTextContent("1"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},A={render:()=>n.jsx(it,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await l.click(await e.findByRole("button",{name:"Open blocking palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.click(e.getByRole("button",{name:"Outside target"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},O={render:()=>n.jsx(ct,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await l.click(await e.findByRole("button",{name:"Open guarded palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),z.pointerDown(t.body),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await l.clear(r),await l.type(r,"unlock"),await l.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await s(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await l.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},H={render:()=>n.jsx(lt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.clear(t),await l.type(t,"release"),await s(e.getByTestId("query-value")).toHaveTextContent("release"),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("query-value")).toHaveTextContent("N/A"),await s(e.getByTestId("open-state")).toHaveTextContent("open"),await l.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("open-state")).toHaveTextContent("closed")}},q={render:()=>n.jsx(dt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.type(t,"search"),await s(t).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),await l.clear(t),await s(t).toHaveAttribute("aria-activedescendant",s.stringContaining("option-1")),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},$={render:()=>n.jsx(ut,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await l.click(t),await s(t).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),z.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),z.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await l.keyboard("{ArrowDown}"),await l.keyboard("{Enter}"),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},L={render:()=>n.jsx(mt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await s(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var X,Y,Z;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,se;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,ce;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <QueryTelemetryPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    const initialListbox = canvas.getByRole("listbox", {
      name: "Command results"
    });
    const initialListboxId = initialListbox.getAttribute("id");
    await expect(initialListboxId).toBeTruthy();
    await expect(input).toHaveAttribute("aria-controls", initialListboxId!);
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.queryByRole("listbox", {
      name: "Command results"
    })).not.toBeInTheDocument();
    await expect(input).not.toHaveAttribute("aria-controls");
    await userEvent.clear(input);
    const restoredListbox = await canvas.findByRole("listbox", {
      name: "Command results"
    });
    await expect(input).toHaveAttribute("aria-controls", restoredListbox.getAttribute("id"));
  }
}`,...(ce=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <CommandPalette open onOpenChange={() => {}} resultsAriaLabel="AI workflow commands" commands={[{
    key: "create-spec",
    label: "Create Spec",
    keywords: ["doc", "plan"]
  }, {
    key: "run-e2e",
    label: "Run E2E Smoke",
    keywords: ["playwright", "test"]
  }]} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(await canvas.findByRole("listbox", {
      name: "AI workflow commands"
    })).toBeInTheDocument();
  }
}`,...(ue=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ye;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ge,be,we;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(be=I.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ve,xe,he;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,Ce,ke;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ke=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Ee,Be,Re;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Re=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var De,Te,Se;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Se=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Ie,Pe,je;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(je=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};var Ae,Oe,He;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(He=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var qe,$e,Le;$.parameters={...$.parameters,docs:{...(qe=$.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <ImeCompositionGuardPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.click(input);
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    fireEvent.keyDown(input, {
      key: "Enter",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("0");
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("1");
  }
}`,...(Le=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var Ne,Ge,Ve;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <EscapePreemptedPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(await canvas.findByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("command-escape-calls")).toHaveTextContent("0");
  }
}`,...(Ve=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};const Et=["SearchCommands","AiInteractionFlow","QueryTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{B as AiInteractionFlow,I as DisabledCommandGuard,S as DisabledOnlyResults,D as EmptyStateAriaControlsLifecycle,H as EscapeClearsQueryFirst,L as EscapePreemptedByGlobalHandler,O as GuardedDismissEvents,$ as ImeCompositionGuard,T as LocalizedResultsLabel,A as NonDismissible,j as PersistentSelection,R as QueryTelemetry,q as RefinedSearchKeepsActiveCommand,E as SearchCommands,P as TextValueAndAccentSearch,Et as __namedExportsOrder,kt as default};
