import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{D as nt}from"./Dialog-D3FAqkbz.js";import{I as ot}from"./Input-CK-2zJ6Z.js";import{within as y,userEvent as l,expect as s,fireEvent as K}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DGNgq5OX.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:t,onOpenChange:e,commands:a,title:r="Command Palette",description:c="Quickly search and execute workspace actions.",searchAriaLabel:p="Search commands",resultsAriaLabel:V="Command results",closeOnSelect:Q=!0,clearQueryOnEscape:_e=!0,closeOnEscape:Je=!0,closeOnOutsidePointer:We=!0,onEscapeKeyDown:Xe,onPointerDownOutside:Ye,placeholder:Ze="Search commands...",emptyMessage:et="No commands found.",onQueryChange:h,getResultsStatusText:F=it}){const[x,G]=i.useState(""),[b,w]=i.useState(0),U=i.useRef(null),f=i.useRef(null),C=i.useId();i.useEffect(()=>{var o;if(!t){G(""),w(0);return}(o=U.current)==null||o.focus()},[t]);const z=i.useMemo(()=>Y(x.trim()),[x]),u=i.useMemo(()=>z?a.filter(o=>{const g=[st(o),...o.keywords??[]].join(" ");return Y(g).includes(z)}):a,[a,z]),_=i.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),J=u.length>0,tt=i.useMemo(()=>F({query:x,visibleCount:u.length,enabledCount:_,totalCount:a.length}),[a.length,_,u.length,F,x]),k=i.useMemo(()=>u.findIndex(o=>!o.disabled),[u]),at=i.useMemo(()=>{var o;for(let d=u.length-1;d>=0;d-=1)if(!((o=u[d])!=null&&o.disabled))return d;return-1},[u]);i.useEffect(()=>{var d;if(u.length===0){f.current=null,w(-1);return}const o=f.current;if(o){const g=u.findIndex(v=>!v.disabled&&v.key===o);if(g>=0){w(g);return}}w(k),f.current=k>=0?((d=u[k])==null?void 0:d.key)??null:null},[u,k]),i.useEffect(()=>{var o;if(b<0){f.current=null;return}f.current=((o=u[b])==null?void 0:o.key)??null},[b,u]);const W=i.useCallback(o=>{var g;const d=u[o];!d||d.disabled||((g=d.onSelect)==null||g.call(d),Q&&e(!1))},[Q,u,e]),X=o=>{var g;if(u.length===0)return;let d=b<0?o===1?-1:0:b;for(let v=0;v<u.length;v+=1)if(d=(d+o+u.length)%u.length,!((g=u[d])!=null&&g.disabled)){w(d);return}};return n.jsx(nt,{open:t,onOpenChange:e,title:r,description:c,size:"md",closeOnEscape:Je,closeOnOutsidePointer:We,onEscapeKeyDown:Xe,onPointerDownOutside:Ye,children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(ot,{ref:U,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":J?C:void 0,"aria-activedescendant":b>=0?`${C}-option-${b}`:void 0,placeholder:Ze,value:x,onChange:o=>{G(o.target.value),h==null||h(o.target.value)},onKeyDown:o=>{if(!rt(o)){if(o.key==="Escape"&&_e&&x.length>0){o.preventDefault(),G(""),h==null||h("");return}if(o.key==="ArrowDown"){o.preventDefault(),X(1);return}if(o.key==="ArrowUp"){o.preventDefault(),X(-1);return}if(o.key==="Home"){o.preventDefault(),w(k);return}if(o.key==="End"){o.preventDefault(),w(at);return}o.key==="Enter"&&b>=0&&(o.preventDefault(),W(b))}},"aria-label":p}),n.jsx("p",{role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:tt}),J?n.jsx("div",{id:C,role:"listbox","aria-label":V,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((o,d)=>{const g=d===b;return n.jsx("button",{id:`${C}-option-${d}`,type:"button",role:"option","aria-selected":g,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,disabled:o.disabled,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{o.disabled||w(d)},onClick:()=>W(d),style:{border:"1px solid var(--aurora-border-default)",background:g?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)})}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:et})]})})}function st(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function Y(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function rt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function it({query:t,visibleCount:e,enabledCount:a,totalCount:r}){const c=t.trim();return c.length===0?a!==r?`${a} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${c}".`:a===0?`No enabled commands match "${c}".`:a!==e?`${a} of ${e} matching command${a===1?"":"s"} available for "${c}".`:`${e} command${e===1?"":"s"} found for "${c}".`}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const M=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],It={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:M}};function ct(){const[t,e]=i.useState(!0);return n.jsx(m,{open:t,onOpenChange:e,commands:M,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function lt(){const[t,e]=i.useState(!0),[a,r]=i.useState("None"),c=M.map(p=>({...p,onSelect:()=>r(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(m,{open:t,onOpenChange:e,commands:c})]})}function Ue(){const[t,e]=i.useState(!0),[a,r]=i.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:a||"N/A"})]}),n.jsx(m,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:c,visibleCount:p,enabledCount:V})=>c.trim().length===0?"Command search ready.":`${V}/${p} actionable AI workflow match${p===1?"":"es"} for ${c}`})]})}function dt(){const[t,e]=i.useState(!0);return n.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function ut(){const[t,e]=i.useState(!0),[a,r]=i.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(c=>c+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(c=>c+1)}],placeholder:"Try searching publish..."})]})}function mt(){const[t,e]=i.useState(!0);return n.jsx(m,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:n.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function pt(){const[t,e]=i.useState(!0),[a,r]=i.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",n.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(c=>c+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(c=>c+1)}]})]})}function yt(){const[t,e]=i.useState(!1);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),n.jsx("button",{type:"button",onClick:()=>e(a=>!a),children:t?"Close blocking palette":"Open blocking palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(m,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function gt(){const[t,e]=i.useState(!1),[a,r]=i.useState(!0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",n.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:a?"enabled":"disabled"})]}),n.jsx("button",{type:"button",onClick:()=>e(c=>!c),children:t?"Close guarded palette":"Open guarded palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:c=>{a&&c.preventDefault()},onPointerDownOutside:c=>{a&&c.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!a,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function bt(){const[t,e]=i.useState(!0),[a,r]=i.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",n.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:a||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:t?"open":"closed"})]}),n.jsx(m,{open:t,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function wt(){const[t,e]=i.useState(!0),[a,r]=i.useState("none");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",n.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function vt(){const[t,e]=i.useState(!0),[a,r]=i.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(c=>c+1)}]})]})}function ht(){const[t,e]=i.useState(!0),[a,r]=i.useState(0);return i.useEffect(()=>{const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[]),n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:a})]}),n.jsx(m,{open:t,onOpenChange:e,onEscapeKeyDown:()=>r(c=>c+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const B={render:()=>n.jsx(ct,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.clear(a),await l.type(a,"publish");const r=e.getByRole("option",{name:"Publish Release"});await s(r).toHaveAttribute("aria-disabled","true"),await s(r).toHaveAttribute("tabindex","-1")}},E={render:()=>n.jsx(lt,{})},R={render:()=>n.jsx(Ue,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.clear(a),await l.type(a,"release"),await s(e.getByText("release")).toBeInTheDocument(),await l.keyboard("{ArrowDown}{Enter}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},D={render:()=>n.jsx(Ue,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"}),c=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await s(c).toBeTruthy(),await s(a).toHaveAttribute("aria-controls",c),await l.clear(a),await l.type(a,"no-match"),await s(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await s(a).not.toHaveAttribute("aria-controls"),await l.clear(a);const p=await e.findByRole("listbox",{name:"Command results"});await s(a).toHaveAttribute("aria-controls",p.getAttribute("id"))}},T={render:()=>n.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},S={render:()=>n.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await s(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await s(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument()}},I={render:()=>n.jsx(dt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.clear(a),await l.type(a,"release"),await s(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},P={render:()=>n.jsx(ut,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.clear(a),await l.type(a,"publish");const r=e.getByRole("option",{name:"Publish Release"});await s(r).toHaveAttribute("aria-disabled","true"),await l.click(r),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("executed-count")).toHaveTextContent("0")}},j={render:()=>n.jsx(mt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.clear(a),await l.type(a,"cafe"),await s(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await s(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},A={render:()=>n.jsx(pt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("option",{name:"Run Lint"});await l.click(a),await s(e.getByTestId("selection-count")).toHaveTextContent("1"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},O={render:()=>n.jsx(yt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await l.click(await e.findByRole("button",{name:"Open blocking palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.click(e.getByRole("button",{name:"Outside target"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},q={render:()=>n.jsx(gt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=t.ownerDocument;await l.click(await e.findByRole("button",{name:"Open guarded palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),K.pointerDown(a.body),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await l.clear(r),await l.type(r,"unlock"),await l.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await s(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await l.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},H={render:()=>n.jsx(bt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.clear(a),await l.type(a,"release"),await s(e.getByTestId("query-value")).toHaveTextContent("release"),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("query-value")).toHaveTextContent("N/A"),await s(e.getByTestId("open-state")).toHaveTextContent("open"),await l.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("open-state")).toHaveTextContent("closed")}},L={render:()=>n.jsx(wt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.type(a,"search"),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),await l.clear(a),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-1")),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},$={render:()=>n.jsx(vt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),a=await e.findByRole("combobox",{name:"Search commands"});await l.click(a),await s(a).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),K.keyDown(a,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),K.keyDown(a,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await l.keyboard("{ArrowDown}"),await l.keyboard("{Enter}"),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},N={render:()=>n.jsx(ht,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await l.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var Z,ee,te;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,oe;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(oe=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,re,ie;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,le,de;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=D.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,ge,be;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <CommandPalette open onOpenChange={() => {}} title="命令中心" description="快速检索并执行工作区操作。" searchAriaLabel="搜索命令" resultsAriaLabel="命令结果列表" commands={[{
    key: "create-spec",
    label: "创建规范",
    keywords: ["文档", "计划"]
  }, {
    key: "run-e2e",
    label: "运行 E2E",
    keywords: ["测试"]
  }]} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(await canvas.findByRole("dialog", {
      name: "命令中心"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("combobox", {
      name: "搜索命令"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("listbox", {
      name: "命令结果列表"
    })).toBeInTheDocument();
  }
}`,...(be=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var we,ve,he;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(he=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var xe,fe,ke;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ke=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Ce,Be,Ee;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Re,De,Te;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Te=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Se,Ie,Pe;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Pe=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var je,Ae,Oe;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var qe,He,Le;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Le=(He=H.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var $e,Ne,Ve;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Ge,ze,Ke;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ke=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Me,Qe,Fe;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Fe=(Qe=N.parameters)==null?void 0:Qe.docs)==null?void 0:Fe.source}}};const Pt=["SearchCommands","AiInteractionFlow","QueryTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{E as AiInteractionFlow,P as DisabledCommandGuard,I as DisabledOnlyResults,D as EmptyStateAriaControlsLifecycle,H as EscapeClearsQueryFirst,N as EscapePreemptedByGlobalHandler,q as GuardedDismissEvents,$ as ImeCompositionGuard,S as LocalizedDialogCopy,T as LocalizedResultsLabel,O as NonDismissible,A as PersistentSelection,R as QueryTelemetry,L as RefinedSearchKeepsActiveCommand,B as SearchCommands,j as TextValueAndAccentSearch,Pt as __namedExportsOrder,It as default};
