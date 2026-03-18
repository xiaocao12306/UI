import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as Ge}from"./Dialog-D3FAqkbz.js";import{I as Ve}from"./Input-CK-2zJ6Z.js";import{within as g,userEvent as l,expect as i,fireEvent as V}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DGNgq5OX.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:a,onOpenChange:e,commands:n,closeOnSelect:r=!0,clearQueryOnEscape:c=!0,closeOnEscape:p=!0,closeOnOutsidePointer:$=!0,onEscapeKeyDown:Oe,onPointerDownOutside:Ae,placeholder:qe="Search commands...",emptyMessage:He="No commands found.",onQueryChange:h,getResultsStatusText:z=Ke}){const[x,N]=s.useState(""),[v,w]=s.useState(0),K=s.useRef(null),f=s.useRef(null),k=s.useId();s.useEffect(()=>{var o;if(!a){N(""),w(0);return}(o=K.current)==null||o.focus()},[a]);const G=s.useMemo(()=>U(x.trim()),[x]),u=s.useMemo(()=>G?n.filter(o=>{const y=[Le(o),...o.keywords??[]].join(" ");return U(y).includes(G)}):n,[n,G]),M=s.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),$e=s.useMemo(()=>z({query:x,visibleCount:u.length,enabledCount:M,totalCount:n.length}),[n.length,M,u.length,z,x]),C=s.useMemo(()=>u.findIndex(o=>!o.disabled),[u]),Ne=s.useMemo(()=>{var o;for(let d=u.length-1;d>=0;d-=1)if(!((o=u[d])!=null&&o.disabled))return d;return-1},[u]);s.useEffect(()=>{var d;if(u.length===0){f.current=null,w(-1);return}const o=f.current;if(o){const y=u.findIndex(b=>!b.disabled&&b.key===o);if(y>=0){w(y);return}}w(C),f.current=C>=0?((d=u[C])==null?void 0:d.key)??null:null},[u,C]),s.useEffect(()=>{var o;if(v<0){f.current=null;return}f.current=((o=u[v])==null?void 0:o.key)??null},[v,u]);const F=s.useCallback(o=>{var y;const d=u[o];!d||d.disabled||((y=d.onSelect)==null||y.call(d),r&&e(!1))},[r,u,e]),Q=o=>{var y;if(u.length===0)return;let d=v<0?o===1?-1:0:v;for(let b=0;b<u.length;b+=1)if(d=(d+o+u.length)%u.length,!((y=u[d])!=null&&y.disabled)){w(d);return}};return t.jsx(Ge,{open:a,onOpenChange:e,title:"Command Palette",description:"Quickly search and execute workspace actions.",size:"md",closeOnEscape:p,closeOnOutsidePointer:$,onEscapeKeyDown:Oe,onPointerDownOutside:Ae,children:t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx(Ve,{ref:K,role:"combobox","aria-expanded":a,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":k,"aria-activedescendant":v>=0?`${k}-option-${v}`:void 0,placeholder:qe,value:x,onChange:o=>{N(o.target.value),h==null||h(o.target.value)},onKeyDown:o=>{if(!ze(o)){if(o.key==="Escape"&&c&&x.length>0){o.preventDefault(),N(""),h==null||h("");return}if(o.key==="ArrowDown"){o.preventDefault(),Q(1);return}if(o.key==="ArrowUp"){o.preventDefault(),Q(-1);return}if(o.key==="Home"){o.preventDefault(),w(C);return}if(o.key==="End"){o.preventDefault(),w(Ne);return}o.key==="Enter"&&v>=0&&(o.preventDefault(),F(v))}},"aria-label":"Search commands"}),t.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:$e}),t.jsx("div",{id:k,role:"listbox","aria-label":"Command results",style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.length>0?u.map((o,d)=>{const y=d===v;return t.jsx("button",{id:`${k}-option-${d}`,type:"button",role:"option","aria-selected":y,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,disabled:o.disabled,onMouseDown:b=>{b.preventDefault()},onMouseEnter:()=>{o.disabled||w(d)},onClick:()=>F(d),style:{border:"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)}):t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:He})})]})})}function Le(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function U(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function ze(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Ke({query:a,visibleCount:e,enabledCount:n,totalCount:r}){const c=a.trim();return c.length===0?n!==r?`${n} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${c}".`:n===0?`No enabled commands match "${c}".`:n!==e?`${n} of ${e} matching command${n===1?"":"s"} available for "${c}".`:`${e} command${e===1?"":"s"} found for "${c}".`}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const L=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],pt={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:L}};function Me(){const[a,e]=s.useState(!0);return t.jsx(m,{open:a,onOpenChange:e,commands:L,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Fe(){const[a,e]=s.useState(!0),[n,r]=s.useState("None"),c=L.map(p=>({...p,onSelect:()=>r(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return t.jsxs("div",{style:{minHeight:420,padding:20},children:[t.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(m,{open:a,onOpenChange:e,commands:c})]})}function Qe(){const[a,e]=s.useState(!0),[n,r]=s.useState("");return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),t.jsx(m,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:c,visibleCount:p,enabledCount:$})=>c.trim().length===0?"Command search ready.":`${$}/${p} actionable AI workflow match${p===1?"":"es"} for ${c}`})]})}function Ue(){const[a,e]=s.useState(!0);return t.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function _e(){const[a,e]=s.useState(!0),[n,r]=s.useState(0);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",t.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(c=>c+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(c=>c+1)}],placeholder:"Try searching publish..."})]})}function Je(){const[a,e]=s.useState(!0);return t.jsx(m,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:t.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function We(){const[a,e]=s.useState(!0),[n,r]=s.useState(0);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",t.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(c=>c+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(c=>c+1)}]})]})}function Xe(){const[a,e]=s.useState(!1);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),t.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:a?"Close blocking palette":"Open blocking palette"}),t.jsx("button",{type:"button",children:"Outside target"}),t.jsx(m,{open:a,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ye(){const[a,e]=s.useState(!1),[n,r]=s.useState(!0);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",t.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:n?"enabled":"disabled"})]}),t.jsx("button",{type:"button",onClick:()=>e(c=>!c),children:a?"Close guarded palette":"Open guarded palette"}),t.jsx("button",{type:"button",children:"Outside target"}),t.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:c=>{n&&c.preventDefault()},onPointerDownOutside:c=>{n&&c.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!n,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ze(){const[a,e]=s.useState(!0),[n,r]=s.useState("");return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",t.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",t.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:a?"open":"closed"})]}),t.jsx(m,{open:a,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function et(){const[a,e]=s.useState(!0),[n,r]=s.useState("none");return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",t.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function tt(){const[a,e]=s.useState(!0),[n,r]=s.useState(0);return t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",t.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(c=>c+1)}]})]})}function at(){const[a,e]=s.useState(!0),[n,r]=s.useState(0);return s.useEffect(()=>{const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),t.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",t.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(m,{open:a,onOpenChange:e,onEscapeKeyDown:()=>r(c=>c+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const E={render:()=>t.jsx(Me,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await i(r).toHaveAttribute("aria-disabled","true"),await i(r).toHaveAttribute("tabindex","-1")}},B={render:()=>t.jsx(Fe,{})},D={render:()=>t.jsx(Qe,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await i(e.getByText("release")).toBeInTheDocument(),await l.keyboard("{ArrowDown}{Enter}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},R={render:()=>t.jsx(Ue,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await i(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},T={render:()=>t.jsx(_e,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"publish");const r=e.getByRole("option",{name:"Publish Release"});await i(r).toHaveAttribute("aria-disabled","true"),await l.click(r),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i(e.getByTestId("executed-count")).toHaveTextContent("0")}},S={render:()=>t.jsx(Je,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"cafe"),await i(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await i(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},P={render:()=>t.jsx(We,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("option",{name:"Run Lint"});await l.click(n),await i(e.getByTestId("selection-count")).toHaveTextContent("1"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},I={render:()=>t.jsx(Xe,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body);await l.click(await e.findByRole("button",{name:"Open blocking palette"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.click(e.getByRole("button",{name:"Outside target"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},j={render:()=>t.jsx(Ye,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=a.ownerDocument;await l.click(await e.findByRole("button",{name:"Open guarded palette"})),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),V.pointerDown(n.body),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await l.clear(r),await l.type(r,"unlock"),await l.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await i(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await l.keyboard("{Escape}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},O={render:()=>t.jsx(Ze,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.clear(n),await l.type(n,"release"),await i(e.getByTestId("query-value")).toHaveTextContent("release"),await l.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i(e.getByTestId("query-value")).toHaveTextContent("N/A"),await i(e.getByTestId("open-state")).toHaveTextContent("open"),await l.keyboard("{Escape}"),await i(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i(e.getByTestId("open-state")).toHaveTextContent("closed")}},A={render:()=>t.jsx(et,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.type(n,"search"),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-0")),await l.clear(n),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-1")),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},q={render:()=>t.jsx(tt,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await l.click(n),await i(n).toHaveAttribute("aria-activedescendant",i.stringContaining("option-0")),V.keyDown(n,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),V.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await i(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await l.keyboard("{ArrowDown}"),await l.keyboard("{Enter}"),await i(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},H={render:()=>t.jsx(at,{}),play:async({canvasElement:a})=>{const e=g(a.ownerDocument.body);await i(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await i(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var _,J,W;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(J=E.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,re;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ye;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};var ge,ve,we;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var be,he,xe;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(he=j.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,Ce,ke;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ke=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Ee,Be,De;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(De=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var Re,Te,Se;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Se=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Pe,Ie,je;H.parameters={...H.parameters,docs:{...(Pe=H.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(je=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};const yt=["SearchCommands","AiInteractionFlow","QueryTelemetry","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{B as AiInteractionFlow,T as DisabledCommandGuard,R as DisabledOnlyResults,O as EscapeClearsQueryFirst,H as EscapePreemptedByGlobalHandler,j as GuardedDismissEvents,q as ImeCompositionGuard,I as NonDismissible,P as PersistentSelection,D as QueryTelemetry,A as RefinedSearchKeepsActiveCommand,E as SearchCommands,S as TextValueAndAccentSearch,yt as __namedExportsOrder,pt as default};
