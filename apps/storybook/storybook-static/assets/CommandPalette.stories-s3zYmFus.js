import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{D as wt}from"./Dialog-CFqGnmxp.js";import{I as bt}from"./Input-B0g8SV4q.js";import{within as y,expect as s,userEvent as i,fireEvent as J}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:t,onOpenChange:e,commands:n,title:c="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:p="Search commands",resultsAriaLabel:M="Command results",closeOnSelect:Y=!0,clearQueryOnEscape:lt=!0,closeOnEscape:Z=!0,closeOnOutsidePointer:ee=!0,onEscapeKeyDown:F,onPointerDownOutside:Q,closeLabel:dt,placeholder:ut="Search commands...",emptyMessage:mt="No commands found.",onQueryChange:v,onCloseReason:x,getResultsStatusText:te=ht}){const[f,U]=r.useState(""),[g,h]=r.useState(0),ae=r.useRef(null),B=r.useRef(null),R=r.useRef(null),ne=r.useRef(t),k=r.useId(),oe=r.useId(),se=r.useRef(null),T=r.useCallback(o=>{R.current=o,x==null||x(o)},[x]),re=r.useCallback(o=>{T(o),e(!1),R.current=null},[T,e]),pt=r.useCallback(o=>{!o&&t&&R.current===null&&(x==null||x("close-button")),R.current=null,e(o)},[x,e,t]);r.useEffect(()=>{var o;t?(o=ae.current)==null||o.focus():ne.current&&(U(d=>(d.length>0&&(v==null||v("")),"")),h(0)),ne.current=t},[v,t]);const _=r.useMemo(()=>de(f.trim()),[f]),u=r.useMemo(()=>_?n.filter(o=>{const w=[vt(o),...o.keywords??[]].join(" ");return de(w).includes(_)}):n,[n,_]),ie=r.useMemo(()=>u.reduce((o,d)=>d.disabled?o:o+1,0),[u]),ce=u.length>0,yt=r.useMemo(()=>te({query:f,visibleCount:u.length,enabledCount:ie,totalCount:n.length}),[n.length,ie,u.length,te,f]),C=r.useMemo(()=>u.findIndex(o=>!o.disabled),[u]),gt=r.useMemo(()=>{var o;for(let d=u.length-1;d>=0;d-=1)if(!((o=u[d])!=null&&o.disabled))return d;return-1},[u]);r.useEffect(()=>{var d;if(u.length===0){B.current=null,h(-1);return}const o=B.current;if(o){const w=u.findIndex(b=>!b.disabled&&b.key===o);if(w>=0){h(w);return}}h(C),B.current=C>=0?((d=u[C])==null?void 0:d.key)??null:null},[u,C]),r.useEffect(()=>{var o;if(g<0){B.current=null;return}B.current=((o=u[g])==null?void 0:o.key)??null},[g,u]),r.useEffect(()=>{if(!t||g<0)return;const o=se.current,d=document.getElementById(`${k}-option-${g}`);!o||!d||!o.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[g,k,t]);const W=r.useCallback(o=>{var w;const d=u[o];!d||d.disabled||((w=d.onSelect)==null||w.call(d),Y&&re("item-select"))},[Y,re,u]),le=o=>{var w;if(u.length===0)return;let d=g<0?o===1?-1:0:g;for(let b=0;b<u.length;b+=1)if(d=(d+o+u.length)%u.length,!((w=u[d])!=null&&w.disabled)){h(d);return}};return a.jsx(wt,{open:t,onOpenChange:pt,title:c,description:l,closeLabel:dt,size:"md",closeOnEscape:Z,closeOnOutsidePointer:ee,onEscapeKeyDown:o=>{F==null||F(o),!(o.defaultPrevented||!Z)&&T("escape-key")},onPointerDownOutside:o=>{Q==null||Q(o),!(o.defaultPrevented||!ee)&&T("outside-pointer")},children:a.jsxs("div",{style:{display:"grid",gap:10},children:[a.jsx(bt,{ref:ae,role:"combobox","aria-expanded":t,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":ce?k:void 0,"aria-activedescendant":g>=0?`${k}-option-${g}`:void 0,"aria-describedby":oe,placeholder:ut,value:f,onChange:o=>{U(o.target.value),v==null||v(o.target.value)},onKeyDown:o=>{if(!xt(o)){if(o.key==="Escape"&&lt&&f.length>0){o.preventDefault(),U(""),v==null||v("");return}if(o.key==="ArrowDown"){o.preventDefault(),le(1);return}if(o.key==="ArrowUp"){o.preventDefault(),le(-1);return}if(o.key==="Home"){o.preventDefault(),h(C);return}if(o.key==="End"){o.preventDefault(),h(gt);return}o.key==="Enter"&&g>=0&&(o.preventDefault(),W(g))}},"aria-label":p}),a.jsx("p",{id:oe,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:yt}),ce?a.jsx("div",{id:k,ref:se,role:"listbox","aria-label":M,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((o,d)=>{const w=d===g;return a.jsx("div",{id:`${k}-option-${d}`,role:"option","aria-selected":w,"aria-disabled":o.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onMouseDown:b=>{b.preventDefault()},onMouseEnter:()=>{o.disabled||h(d)},onClick:()=>{o.disabled||W(d)},onKeyDown:b=>{o.disabled||(b.key==="Enter"||b.key===" "||b.key==="Space"||b.key==="Spacebar")&&(b.preventDefault(),W(d))},style:{border:"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:o.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:o.disabled?"not-allowed":"pointer"},children:o.label},o.key)})}):a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:mt})]})})}function vt(t){return typeof t.textValue=="string"?t.textValue.trim():typeof t.label=="string"?t.label.trim():""}function de(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function xt(t){const e=t.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ht({query:t,visibleCount:e,enabledCount:n,totalCount:c}){const l=t.trim();return l.length===0?n!==c?`${n} of ${c} command${c===1?"":"s"} available.`:`${c} command${c===1?"":"s"} available.`:e===0?`No commands match "${l}".`:n===0?`No enabled commands match "${l}".`:n!==e?`${n} of ${e} matching command${n===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:'"close-button" | "item-select" | "escape-key" | "outside-pointer"',elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"item-select"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const X=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Mt={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:X}};function ft(){const[t,e]=r.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:X,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function kt(){const[t,e]=r.useState(!0),[n,c]=r.useState("None"),l=X.map(p=>({...p,onSelect:()=>c(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return a.jsxs("div",{style:{minHeight:420,padding:20},children:[a.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",a.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,commands:l})]})}function ct(){const[t,e]=r.useState(!0),[n,c]=r.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry:"," ",a.jsx("strong",{"data-testid":"query-telemetry",style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:c,getResultsStatusText:({query:l,visibleCount:p,enabledCount:M})=>l.trim().length===0?"Command search ready.":`${M}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function Bt(){const[t,e]=r.useState(!0),[n,c]=r.useState("none");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",a.jsx("strong",{"data-testid":"command-close-reason",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx("button",{type:"button",onClick:()=>e(!0),children:"Reopen Palette"}),a.jsx(m,{open:t,onOpenChange:e,onCloseReason:l=>c(l),commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})}function Ct(){const[t,e]=r.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Rt(){const[t,e]=r.useState(!0),[n,c]=r.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",a.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>c(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>c(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Tt(){const[t,e]=r.useState(!0);return a.jsx(m,{open:t,onOpenChange:e,commands:[{key:"cafe-settings",label:a.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Et(){const[t,e]=r.useState(!0),[n,c]=r.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",a.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>c(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>c(l=>l+1)}]})]})}function Dt(){const[t,e]=r.useState(!1);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),a.jsx("button",{type:"button",onClick:()=>e(n=>!n),children:t?"Close blocking palette":"Open blocking palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(m,{open:t,onOpenChange:e,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function St(){const[t,e]=r.useState(!1),[n,c]=r.useState(!0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",a.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:n?"enabled":"disabled"})]}),a.jsx("button",{type:"button",onClick:()=>e(l=>!l),children:t?"Close guarded palette":"Open guarded palette"}),a.jsx("button",{type:"button",children:"Outside target"}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{n&&l.preventDefault()},onPointerDownOutside:l=>{n&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!n,onSelect:()=>c(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function It(){const[t,e]=r.useState(!0),[n,c]=r.useState("");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",a.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:n||"N/A"})]}),a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",a.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:t?"open":"closed"})]}),a.jsx(m,{open:t,onOpenChange:e,onQueryChange:c,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Pt(){const[t,e]=r.useState(!0),[n,c]=r.useState("none");return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",a.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>c("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>c("send-report")}]})]})}function jt(){const[t,e]=r.useState(!0),[n,c]=r.useState(0);return a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",a.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>c(l=>l+1)}]})]})}function At(){const[t,e]=r.useState(!0),[n,c]=r.useState(0);return r.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),a.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[a.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",a.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:n})]}),a.jsx(m,{open:t,onOpenChange:e,onEscapeKeyDown:()=>c(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const E={render:()=>a.jsx(ft,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.clear(n),await i.type(n,"publish");const c=e.getByRole("option",{name:"Publish Release"});await s(c).toHaveAttribute("aria-disabled","true"),await s(c).toHaveAttribute("tabindex","-1")}},D={render:()=>a.jsx(kt,{})},S={render:()=>a.jsx(ct,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.clear(n),await i.type(n,"release"),await s(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},I={render:()=>a.jsx(Bt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await s(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await s(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await s(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(n.body),await s(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Close dialog"})),await s(e.getByTestId("command-close-reason")).toHaveTextContent("close-button")}},P={render:()=>a.jsx(ct,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await s(l).toBeTruthy(),await s(n).toHaveAttribute("aria-controls",l),await i.clear(n),await i.type(n,"no-match"),await s(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await s(n).not.toHaveAttribute("aria-controls"),await i.clear(n);const p=await e.findByRole("listbox",{name:"Command results"});await s(n).toHaveAttribute("aria-controls",p.getAttribute("id"))}},j={render:()=>a.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},A={render:()=>a.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await s(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await s(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await s(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},O={render:()=>a.jsx(Ct,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.clear(n),await i.type(n,"release"),await s(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".')}},H={render:()=>a.jsx(Rt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.clear(n),await i.type(n,"publish");const c=e.getByRole("option",{name:"Publish Release"});await s(c).toHaveAttribute("aria-disabled","true"),await i.click(c),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("executed-count")).toHaveTextContent("0")}},q={render:()=>a.jsx(Tt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.clear(n),await i.type(n,"cafe"),await s(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await s(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},L={render:()=>a.jsx(Et,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("option",{name:"Run Lint"});await i.click(n),await s(e.getByTestId("selection-count")).toHaveTextContent("1"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},$={render:()=>a.jsx(Dt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},N={render:()=>a.jsx(St,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=t.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),J.pointerDown(n.body),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const c=e.getByRole("combobox",{name:"Search commands"});await i.clear(c),await i.type(c,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await s(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},V={render:()=>a.jsx(It,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.clear(n),await i.type(n,"release"),await s(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("query-value")).toHaveTextContent("N/A"),await s(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await s(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await s(e.getByTestId("open-state")).toHaveTextContent("closed")}},G={render:()=>a.jsx(Pt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.type(n,"search"),await s(n).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),await i.clear(n),await s(n).toHaveAttribute("aria-activedescendant",s.stringContaining("option-1")),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},z={render:()=>a.jsx(jt,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body),n=await e.findByRole("combobox",{name:"Search commands"});await i.click(n),await s(n).toHaveAttribute("aria-activedescendant",s.stringContaining("option-0")),J.keyDown(n,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),J.keyDown(n,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await s(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},K={render:()=>a.jsx(At,{}),play:async({canvasElement:t})=>{const e=y(t.ownerDocument.body);await s(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await s(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await s(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var ue,me,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,ge,we;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(we=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var be,ve,xe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
    await expect(canvas.getByTestId("query-telemetry")).toHaveTextContent("N/A");
  }
}`,...(xe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var he,fe,ke;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("none");
    await userEvent.click(await canvas.findByRole("option", {
      name: "Create Spec"
    }));
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("item-select");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.click(doc.body);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close dialog"
    }));
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("close-button");
  }
}`,...(ke=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Be,Ce,Re;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Re=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Te,Ee,De;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Se,Ie,Pe;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <CommandPalette open onOpenChange={() => {}} title="命令中心" description="快速检索并执行工作区操作。" searchAriaLabel="搜索命令" resultsAriaLabel="命令结果列表" closeLabel="关闭命令面板" commands={[{
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
    await expect(canvas.getByRole("button", {
      name: "关闭命令面板"
    })).toBeInTheDocument();
  }
}`,...(Pe=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var je,Ae,Oe;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Oe=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var He,qe,Le;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Le=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var $e,Ne,Ve;q.parameters={...q.parameters,docs:{...($e=q.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Ge,ze,Ke;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ke=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Me,Fe,Qe;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Qe=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:Qe.source}}};var Ue,_e,We;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(We=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Je,Xe,Ye;V.parameters={...V.parameters,docs:{...(Je=V.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=V.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=G.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;z.parameters={...z.parameters,docs:{...(at=z.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=z.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,it;K.parameters={...K.parameters,docs:{...(st=K.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(it=(rt=K.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};const Ft=["SearchCommands","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{D as AiInteractionFlow,I as CloseReasonTelemetry,H as DisabledCommandGuard,O as DisabledOnlyResults,P as EmptyStateAriaControlsLifecycle,V as EscapeClearsQueryFirst,K as EscapePreemptedByGlobalHandler,N as GuardedDismissEvents,z as ImeCompositionGuard,A as LocalizedDialogCopy,j as LocalizedResultsLabel,$ as NonDismissible,L as PersistentSelection,S as QueryTelemetry,G as RefinedSearchKeepsActiveCommand,E as SearchCommands,q as TextValueAndAccentSearch,Ft as __namedExportsOrder,Mt as default};
