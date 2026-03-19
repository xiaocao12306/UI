import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{D as Tt}from"./Dialog-CFqGnmxp.js";import{I as Et}from"./Input-B0g8SV4q.js";import{within as w,expect as o,userEvent as i,fireEvent as R,waitFor as ge}from"./index-DgAF9SIF.js";import"./bodyScrollLock-DtRy56KP.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({open:a,onOpenChange:e,commands:t,title:c="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:m="Search commands",resultsAriaLabel:x="Command results",closeOnSelect:b=!0,clearQueryOnEscape:T=!0,closeOnEscape:S=!0,closeOnOutsidePointer:se=!0,onEscapeKeyDown:Z,onPointerDownOutside:ee,closeLabel:xt,placeholder:ht="Search commands...",emptyMessage:ft="No commands found.",onQueryChange:h,onCloseReason:k,getResultsStatusText:re=It}){const[E,te]=r.useState(""),[P,f]=r.useState(0),ie=r.useRef(null),I=r.useRef(null),A=r.useRef(null),ce=r.useRef(a),D=r.useId(),le=r.useId(),de=r.useRef(null),H=r.useCallback(s=>{A.current=s,k==null||k(s)},[k]),ue=r.useCallback(s=>{H(s),e(!1),A.current=null},[H,e]),kt=r.useCallback(s=>{!s&&a&&A.current===null&&(k==null||k("close-button")),A.current=null,e(s)},[k,e,a]);r.useEffect(()=>{var s;a?(s=ie.current)==null||s.focus():ce.current&&(te(d=>(d.length>0&&(h==null||h("")),"")),f(0)),ce.current=a},[h,a]);const ae=r.useMemo(()=>ve(E.trim()),[E]),u=r.useMemo(()=>ae?t.filter(s=>{const y=[Dt(s),...s.keywords??[]].join(" ");return ve(y).includes(ae)}):t,[t,ae]),j=r.useMemo(()=>u.reduce((s,d)=>d.disabled?s:s+1,0),[u]),me=u.length>0,Ct=r.useMemo(()=>{const s=["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"];return j>0&&s.push("Enter"),(S||T)&&s.push("Escape"),s.join(" ")},[T,S,j]),Bt=r.useMemo(()=>re({query:E,visibleCount:u.length,enabledCount:j,totalCount:t.length}),[t.length,j,u.length,re,E]),C=r.useMemo(()=>u.reduce((s,d,y)=>(d.disabled||s.push(y),s),[]),[u]),B=C[0]??-1,pe=C[C.length-1]??-1,g=r.useMemo(()=>{if(P<0)return-1;const s=u[P];return!s||s.disabled?-1:P},[P,u]);r.useEffect(()=>{var d;if(u.length===0){I.current=null,f(-1);return}const s=I.current;if(s){const y=u.findIndex(v=>!v.disabled&&v.key===s);if(y>=0){f(y);return}}f(B),I.current=B>=0?((d=u[B])==null?void 0:d.key)??null:null},[u,B]),r.useEffect(()=>{var s;if(g<0){I.current=null;return}I.current=((s=u[g])==null?void 0:s.key)??null},[u,g]),r.useEffect(()=>{if(!a||g<0)return;const s=de.current,d=document.getElementById(`${D}-option-${g}`);!s||!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[D,a,g]);const ne=r.useCallback(s=>{var y;const d=u[s];!d||d.disabled||((y=d.onSelect)==null||y.call(d),b&&ue("item-select"))},[b,ue,u]),ye=s=>{var y;if(u.length===0)return;let d=g<0?s===1?-1:0:g;for(let v=0;v<u.length;v+=1)if(d=(d+s+u.length)%u.length,!((y=u[d])!=null&&y.disabled)){f(d);return}},we=s=>{if(C.length===0)return;const d=C.indexOf(g);if(d<0){f(s===1?B:pe);return}const y=Math.min(C.length-1,Math.max(0,d+s*5));f(C[y]??B)};return n.jsx(Tt,{open:a,onOpenChange:kt,title:c,description:l,closeLabel:xt,size:"md",closeOnEscape:S,closeOnOutsidePointer:se,onEscapeKeyDown:s=>{Z==null||Z(s),!(s.defaultPrevented||!S)&&H("escape-key")},onPointerDownOutside:s=>{ee==null||ee(s),!(s.defaultPrevented||!se)&&H("outside-pointer")},children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(Et,{ref:ie,role:"combobox","aria-expanded":a,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":me?D:void 0,"aria-activedescendant":g>=0?`${D}-option-${g}`:void 0,"aria-describedby":le,"aria-keyshortcuts":Ct,placeholder:ht,value:E,onChange:s=>{te(s.target.value),h==null||h(s.target.value)},onKeyDown:s=>{if(!Rt(s)){if(s.key==="Escape"&&T&&E.length>0){s.preventDefault(),te(""),h==null||h("");return}if(s.key==="ArrowDown"){s.preventDefault(),ye(1);return}if(s.key==="ArrowUp"){s.preventDefault(),ye(-1);return}if(s.key==="Home"){s.preventDefault(),f(B);return}if(s.key==="End"){s.preventDefault(),f(pe);return}if(s.key==="PageDown"){s.preventDefault(),we(1);return}if(s.key==="PageUp"){s.preventDefault(),we(-1);return}if(s.key==="Enter"&&g>=0){if(s.preventDefault(),s.repeat)return;ne(g)}}},"aria-label":m}),n.jsx("p",{id:le,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Bt}),me?n.jsx("div",{id:D,ref:de,role:"listbox","aria-label":x,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((s,d)=>{const y=d===g;return n.jsx("div",{id:`${D}-option-${d}`,role:"option","aria-selected":y,"aria-disabled":s.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{s.disabled||f(d)},onClick:()=>{s.disabled||ne(d)},onKeyDown:v=>{s.disabled||(v.key==="Enter"||v.key===" "||v.key==="Space"||v.key==="Spacebar")&&(v.preventDefault(),ne(d))},style:{border:"1px solid var(--aurora-border-default)",background:y?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},s.key)})}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:ft})]})})}function Dt(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function ve(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Rt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function It({query:a,visibleCount:e,enabledCount:t,totalCount:c}){const l=a.trim();return l.length===0?t!==c?`${t} of ${c} command${c===1?"":"s"} available.`:`${c} command${c===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const oe=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],ea={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:oe}};function St(){const[a,e]=r.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:oe,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Pt(){const[a,e]=r.useState(!0),[t,c]=r.useState("None"),l=oe.map(m=>({...m,onSelect:()=>c(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action: ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,commands:l})]})}function bt(){const[a,e]=r.useState(!0),[t,c]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry:"," ",n.jsx("strong",{"data-testid":"query-telemetry",style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:c,getResultsStatusText:({query:l,visibleCount:m,enabledCount:x})=>l.trim().length===0?"Command search ready.":`${x}/${m} actionable AI workflow match${m===1?"":"es"} for ${l}`})]})}function At(){const[a,e]=r.useState(!0),[t,c]=r.useState("none"),[l,m]=r.useState("N/A"),x=r.useCallback(b=>{m(T=>T==="N/A"?b:`${T} -> ${b}`)},[]);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"command-close-reason",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",n.jsx("strong",{"data-testid":"command-close-trace",style:{color:"var(--aurora-text-primary)"},children:l})]}),n.jsx("button",{type:"button",onClick:()=>{m("N/A"),e(!0)},children:"Reopen Palette"}),n.jsx(p,{open:a,onOpenChange:b=>{e(b),b||x("open:false")},onCloseReason:b=>{c(b),x(`reason:${b}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>x("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>x("select")}]})]})}function Ht(){const[a,e]=r.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function jt(){const[a,e]=r.useState(!0),[t,c]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>c(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>c(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Ot(){const[a,e]=r.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:n.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function qt(){const[a,e]=r.useState(!0),[t,c]=r.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",n.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>c(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>c(l=>l+1)}]})]})}function Lt(){const[a,e]=r.useState(!1);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),n.jsx("button",{type:"button",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Nt(){const[a,e]=r.useState(!1),[t,c]=r.useState(!0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",n.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:t?"enabled":"disabled"})]}),n.jsx("button",{type:"button",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>c(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function $t(){const[a,e]=r.useState(!0),[t,c]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",n.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:a?"open":"closed"})]}),n.jsx(p,{open:a,onOpenChange:e,onQueryChange:c,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Vt(){const[a,e]=r.useState(!0),[t,c]=r.useState("none");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",n.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>c("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>c("send-report")}]})]})}function Ut(){const[a,e]=r.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Gt(){const[a,e]=r.useState(!0),[t,c]=r.useState(0),[l,m]=r.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query value:"," ",n.jsx("strong",{"data-testid":"ime-query-value",style:{color:"var(--aurora-text-primary)"},children:l||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"ime-open-state",style:{color:"var(--aurora-text-primary)"},children:a?"open":"closed"})]}),n.jsx(p,{open:a,onOpenChange:e,onQueryChange:m,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>c(x=>x+1)}]})]})}function zt(){const[a,e]=r.useState(!0),[t,c]=r.useState(0);return r.useEffect(()=>{const l=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,onEscapeKeyDown:()=>c(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const O={render:()=>n.jsx(St,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const c=e.getByRole("option",{name:"Publish Release"});await o(c).toHaveAttribute("aria-disabled","true"),await o(c).toHaveAttribute("tabindex","-1")}},q={render:()=>n.jsx(Pt,{})},L={render:()=>n.jsx(bt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await o(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await o(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await o(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},N={render:()=>n.jsx(At,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=a.ownerDocument;await o(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await o(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(t.body),await o(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Close dialog"})),await o(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},$={render:()=>n.jsx(bt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await o(l).toBeTruthy(),await o(t).toHaveAttribute("aria-controls",l),await i.clear(t),await i.type(t,"no-match"),await o(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await o(t).not.toHaveAttribute("aria-controls"),await i.clear(t);const m=await e.findByRole("listbox",{name:"Command results"});await o(t).toHaveAttribute("aria-controls",m.getAttribute("id"))}},V={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body);await o(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},U={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body);await o(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await o(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await o(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},G={render:()=>n.jsx(Ht,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await o(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Escape")}},z={render:()=>n.jsx(jt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const c=e.getByRole("option",{name:"Publish Release"});await o(c).toHaveAttribute("aria-disabled","true"),await i.click(c),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await o(e.getByTestId("executed-count")).toHaveTextContent("0")}},K={render:()=>n.jsx(Ot,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await o(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await o(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},M={render:()=>n.jsx(qt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),R.keyDown(t,{key:"Enter",repeat:!1}),await ge(()=>{o(e.getByTestId("selection-count")).toHaveTextContent("1")}),R.keyDown(t,{key:"Enter",repeat:!0}),await ge(()=>{o(e.getByTestId("selection-count")).toHaveTextContent("1")}),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},F={render:()=>n.jsx(Lt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await o(t).toBeInTheDocument(),await o(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await o(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await o(t).toBeInTheDocument()}},Q={render:()=>n.jsx(Nt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=a.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),R.pointerDown(t.body),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const c=e.getByRole("combobox",{name:"Search commands"});await i.clear(c),await i.type(c,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await o(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await o(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},_={render:()=>n.jsx($t,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await o(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await o(e.getByTestId("query-value")).toHaveTextContent("N/A"),await o(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await o(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await o(e.getByTestId("open-state")).toHaveTextContent("closed")}},W={render:()=>n.jsx(Vt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await i.clear(t),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-1"));const c=t.getAttribute("aria-activedescendant");o(c).toBeTruthy();const l=a.ownerDocument.getElementById(c);await o(l).toBeInTheDocument(),await o(l).toHaveAttribute("role","option"),await o(l).not.toHaveAttribute("aria-disabled","true"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},J={render:()=>n.jsx(Ut,{}),play:async({canvasElement:a})=>{const t=await w(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await i.keyboard("{PageDown}"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-6")),await i.keyboard("{PageUp}"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0"))}},X={render:()=>n.jsx(Gt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await i.type(t,"deploy"),await o(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),R.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),R.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),R.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await o(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await o(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await o(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await o(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},Y={render:()=>n.jsx(zt,{}),play:async({canvasElement:a})=>{const e=w(a.ownerDocument.body);await o(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await o(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var be,xe,he;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,ke,Ce;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Ce=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Be,Te,Ee;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var De,Re,Ie;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <CloseReasonTelemetryPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("none");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("N/A");
    await userEvent.click(await canvas.findByRole("option", {
      name: "Create Spec"
    }));
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("item-select");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("escape-key");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.click(doc.body);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
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
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false");
  }
}`,...(Ie=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Se,Pe,Ae;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var He,je,Oe;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Oe=(je=V.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var qe,Le,Ne;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ne=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var $e,Ve,Ue;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Escape");
  }
}`,...(Ue=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var Ge,ze,Ke;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ke=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Me,Fe,Qe;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Qe=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:Qe.source}}};var _e,We,Je;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <PersistentSelectionPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    fireEvent.keyDown(input, {
      key: "Enter",
      repeat: false
    });
    await waitFor(() => {
      expect(canvas.getByTestId("selection-count")).toHaveTextContent("1");
    });
    fireEvent.keyDown(input, {
      key: "Enter",
      repeat: true
    });
    await waitFor(() => {
      expect(canvas.getByTestId("selection-count")).toHaveTextContent("1");
    });
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(Je=(We=M.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;F.parameters={...F.parameters,docs:{...(Xe=F.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <NonDismissiblePalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Open blocking palette"
    }));
    const dialog = canvas.getByRole("dialog", {
      name: "Command Palette"
    });
    await expect(dialog).toBeInTheDocument();
    await expect(canvas.getByRole("combobox", {
      name: "Search commands"
    })).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter");
    await userEvent.keyboard("{Escape}");
    await expect(dialog).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Outside target"
    }));
    await expect(dialog).toBeInTheDocument();
  }
}`,...(Ze=(Ye=F.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,at;Q.parameters={...Q.parameters,docs:{...(et=Q.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=Q.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,ot,st;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(ot=_.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,it,ct;W.parameters={...W.parameters,docs:{...(rt=W.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
    const activeId = input.getAttribute("aria-activedescendant");
    expect(activeId).toBeTruthy();
    const activeOption = canvasElement.ownerDocument.getElementById(activeId!);
    await expect(activeOption).toBeInTheDocument();
    await expect(activeOption).toHaveAttribute("role", "option");
    await expect(activeOption).not.toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(ct=(it=W.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,dt,ut;J.parameters={...J.parameters,docs:{...(lt=J.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => <PagedKeyboardNavigationPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.click(input);
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    await userEvent.keyboard("{PageDown}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-6"));
    await userEvent.keyboard("{PageUp}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  }
}`,...(ut=(dt=J.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,pt,yt;X.parameters={...X.parameters,docs:{...(mt=X.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
    await userEvent.type(input, "deploy");
    await expect(canvas.getByTestId("ime-query-value")).toHaveTextContent("deploy");
    fireEvent.keyDown(input, {
      key: "Escape",
      isComposing: true,
      keyCode: 229,
      which: 229
    });
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
    await expect(canvas.getByTestId("ime-query-value")).toHaveTextContent("deploy");
    await expect(canvas.getByTestId("ime-open-state")).toHaveTextContent("open");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("ime-selection-count")).toHaveTextContent("1");
  }
}`,...(yt=(pt=X.parameters)==null?void 0:pt.docs)==null?void 0:yt.source}}};var wt,gt,vt;Y.parameters={...Y.parameters,docs:{...(wt=Y.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=Y.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};const ta=["SearchCommands","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{q as AiInteractionFlow,N as CloseReasonTelemetry,z as DisabledCommandGuard,G as DisabledOnlyResults,$ as EmptyStateAriaControlsLifecycle,_ as EscapeClearsQueryFirst,Y as EscapePreemptedByGlobalHandler,Q as GuardedDismissEvents,X as ImeCompositionGuard,U as LocalizedDialogCopy,V as LocalizedResultsLabel,F as NonDismissible,J as PagedKeyboardNavigation,M as PersistentSelection,L as QueryTelemetry,W as RefinedSearchKeepsActiveCommand,O as SearchCommands,K as TextValueAndAccentSearch,ta as __namedExportsOrder,ea as default};
