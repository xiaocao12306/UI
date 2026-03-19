import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as Ht}from"./Dialog-Cic3CN4O.js";import{I as jt}from"./Input-B0g8SV4q.js";import{within as y,expect as o,userEvent as c,fireEvent as I,waitFor as ce}from"./index-DgAF9SIF.js";import"./bodyScrollLock-CnEUF6y7.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({open:a,onOpenChange:e,commands:t,title:i="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:m="Search commands",resultsAriaLabel:x="Command results",closeOnSelect:b=!0,clearQueryOnEscape:D=!0,closeOnEscape:P=!0,closeOnOutsidePointer:de=!0,onEscapeKeyDown:te,onPointerDownOutside:ae,closeLabel:Dt,placeholder:Rt="Search commands...",emptyMessage:It="No commands found.",onQueryChange:h,onCloseReason:B,getResultsStatusText:ue=Nt}){const[C,ne]=s.useState(""),[A,f]=s.useState(0),me=s.useRef(null),S=s.useRef(null),H=s.useRef(null),oe=s.useRef(a),R=s.useId(),pe=s.useId(),ye=s.useRef(null),j=s.useCallback(r=>{H.current=r,B==null||B(r)},[B]),we=s.useCallback(r=>{j(r),e(!1),H.current=null},[j,e]),St=s.useCallback(r=>{!r&&a&&H.current===null&&(B==null||B("close-button")),H.current=null,e(r)},[B,e,a]);s.useEffect(()=>{if(a){const r=globalThis.setTimeout(()=>{var d;(d=me.current)==null||d.focus()},0);return oe.current=a,()=>{globalThis.clearTimeout(r)}}else oe.current&&(ne(r=>(r.length>0&&(h==null||h("")),"")),f(0));oe.current=a},[h,a]);const re=s.useMemo(()=>xe(C.trim()),[C]),u=s.useMemo(()=>re?t.filter(r=>{const w=[Ot(r),...r.keywords??[]].join(" ");return xe(w).includes(re)}):t,[t,re]),k=s.useMemo(()=>u.reduce((r,d)=>d.disabled?r:r+1,0),[u]),se=u.length>0,Pt=s.useMemo(()=>{const r=[];return k>0&&r.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp","Enter"),(P||D&&C.length>0)&&r.push("Escape"),r.length>0?r.join(" "):void 0},[D,P,k,C.length]),At=s.useMemo(()=>ue({query:C,visibleCount:u.length,enabledCount:k,totalCount:t.length}),[t.length,k,u.length,ue,C]),E=s.useMemo(()=>u.reduce((r,d,w)=>(d.disabled||r.push(w),r),[]),[u]),T=E[0]??-1,ge=E[E.length-1]??-1,g=s.useMemo(()=>{if(A<0)return-1;const r=u[A];return!r||r.disabled?-1:A},[A,u]);s.useEffect(()=>{var d;if(u.length===0){S.current=null,f(-1);return}const r=S.current;if(r){const w=u.findIndex(v=>!v.disabled&&v.key===r);if(w>=0){f(w);return}}f(T),S.current=T>=0?((d=u[T])==null?void 0:d.key)??null:null},[u,T]),s.useEffect(()=>{var r;if(g<0){S.current=null;return}S.current=((r=u[g])==null?void 0:r.key)??null},[u,g]),s.useEffect(()=>{if(!a||g<0)return;const r=ye.current,d=document.getElementById(`${R}-option-${g}`);!r||!d||!r.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[R,a,g]);const ie=s.useCallback(r=>{var w;const d=u[r];!d||d.disabled||((w=d.onSelect)==null||w.call(d),b&&we("item-select"))},[b,we,u]),ve=r=>{var w;if(u.length===0)return;let d=g<0?r===1?-1:0:g;for(let v=0;v<u.length;v+=1)if(d=(d+r+u.length)%u.length,!((w=u[d])!=null&&w.disabled)){f(d);return}},be=r=>{if(E.length===0)return;const d=E.indexOf(g);if(d<0){f(r===1?T:ge);return}const w=Math.min(E.length-1,Math.max(0,d+r*5));f(E[w]??T)};return n.jsx(Ht,{open:a,onOpenChange:St,title:i,description:l,closeLabel:Dt,size:"md",closeOnEscape:P,closeOnOutsidePointer:de,onEscapeKeyDown:r=>{te==null||te(r),!(r.defaultPrevented||!P)&&j("escape-key")},onPointerDownOutside:r=>{ae==null||ae(r),!(r.defaultPrevented||!de)&&j("outside-pointer")},children:n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx(jt,{ref:me,"data-autofocus":"",role:"combobox","aria-expanded":se,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":se?R:void 0,"aria-activedescendant":g>=0?`${R}-option-${g}`:void 0,"aria-describedby":pe,"aria-keyshortcuts":Pt,placeholder:Rt,value:C,onChange:r=>{ne(r.target.value),h==null||h(r.target.value)},onKeyDown:r=>{if(!qt(r)){if(r.key==="Escape"&&D&&C.length>0){r.preventDefault(),ne(""),h==null||h("");return}if(r.key==="ArrowDown"){if(k===0)return;r.preventDefault(),ve(1);return}if(r.key==="ArrowUp"){if(k===0)return;r.preventDefault(),ve(-1);return}if(r.key==="Home"){if(k===0)return;r.preventDefault(),f(T);return}if(r.key==="End"){if(k===0)return;r.preventDefault(),f(ge);return}if(r.key==="PageDown"){if(k===0)return;r.preventDefault(),be(1);return}if(r.key==="PageUp"){if(k===0)return;r.preventDefault(),be(-1);return}if(r.key==="Enter"&&g>=0){if(r.preventDefault(),r.repeat)return;ie(g)}}},"aria-label":m}),n.jsx("p",{id:pe,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:At}),se?n.jsx("div",{id:R,ref:ye,role:"listbox","aria-label":x,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((r,d)=>{const w=d===g;return n.jsx("div",{id:`${R}-option-${d}`,role:"option","aria-selected":w,"aria-disabled":r.disabled||void 0,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onMouseDown:v=>{v.preventDefault()},onMouseEnter:()=>{r.disabled||f(d)},onClick:()=>{r.disabled||ie(d)},onKeyDown:v=>{r.disabled||(v.key==="Enter"||v.key===" "||v.key==="Space"||v.key==="Spacebar")&&(v.preventDefault(),ie(d))},style:{border:"1px solid var(--aurora-border-default)",background:w?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:r.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:r.disabled?"not-allowed":"pointer"},children:r.label},r.key)})}):n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:It})]})})}function Ot(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function xe(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function qt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Nt({query:a,visibleCount:e,enabledCount:t,totalCount:i}){const l=a.trim();return l.length===0?t!==i?`${t} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:`| "close-button"
| "item-select"
| "escape-key"
| "outside-pointer"`,elements:[{name:"literal",value:'"close-button"'},{name:"literal",value:'"item-select"'},{name:"literal",value:'"escape-key"'},{name:"literal",value:'"outside-pointer"'}]},name:"reason"}],return:{name:"void"}}},description:""},getResultsStatusText:{required:!1,tsType:{name:"signature",type:"function",raw:`(params: {
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
}`,computed:!1}}}};const le=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],da={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:le}};function Lt(){const[a,e]=s.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:le,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function $t(){const[a,e]=s.useState(!1),[t,i]=s.useState("none");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last keyboard action:"," ",n.jsx("strong",{"data-testid":"keyboard-first-selected",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx("button",{type:"button",onClick:()=>e(!0),children:"Open keyboard palette"}),n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>i("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>i("Open Theme Pack")}]})]})}function Ut(){const[a,e]=s.useState(!0),[t,i]=s.useState("None"),l=le.map(m=>({...m,onSelect:()=>i(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return n.jsxs("div",{style:{minHeight:420,padding:20},children:[n.jsxs("p",{style:{marginTop:0,color:"var(--aurora-text-secondary)"},children:["Last AI action:"," ",n.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,commands:l})]})}function Tt(){const[a,e]=s.useState(!0),[t,i]=s.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Latest query telemetry:"," ",n.jsx("strong",{"data-testid":"query-telemetry",style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:l,visibleCount:m,enabledCount:x})=>l.trim().length===0?"Command search ready.":`${x}/${m} actionable AI workflow match${m===1?"":"es"} for ${l}`})]})}function Vt(){const[a,e]=s.useState(!0),[t,i]=s.useState("none"),[l,m]=s.useState("N/A"),x=s.useCallback(b=>{m(D=>D==="N/A"?b:`${D} -> ${b}`)},[]);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last close reason:"," ",n.jsx("strong",{"data-testid":"command-close-reason",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Close trace:"," ",n.jsx("strong",{"data-testid":"command-close-trace",style:{color:"var(--aurora-text-primary)"},children:l})]}),n.jsx("button",{type:"button",onClick:()=>{m("N/A"),e(!0)},children:"Reopen Palette"}),n.jsx(p,{open:a,onOpenChange:b=>{e(b),b||x("open:false")},onCloseReason:b=>{i(b),x(`reason:${b}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>x("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>x("select")}]})]})}function Ft(){const[a,e]=s.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Kt(){const[a,e]=s.useState(!0),[t,i]=s.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"executed-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>i(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>i(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Gt(){const[a,e]=s.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:n.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function zt(){const[a,e]=s.useState(!0),[t,i]=s.useState(0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Batch actions selected:"," ",n.jsx("strong",{"data-testid":"selection-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>i(l=>l+1)}]})]})}function Mt(){const[a,e]=s.useState(!1);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Palette stays open until action selection or explicit toggle."}),n.jsx("button",{type:"button",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Qt(){const[a,e]=s.useState(!1),[t,i]=s.useState(!0);return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10,justifyItems:"start"},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Guard state:"," ",n.jsx("strong",{"data-testid":"guard-state",style:{color:"var(--aurora-text-primary)"},children:t?"enabled":"disabled"})]}),n.jsx("button",{type:"button",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),n.jsx("button",{type:"button",children:"Outside target"}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>i(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function _t(){const[a,e]=s.useState(!0),[t,i]=s.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",n.jsx("strong",{"data-testid":"query-value",style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"open-state",style:{color:"var(--aurora-text-primary)"},children:a?"open":"closed"})]}),n.jsx(p,{open:a,onOpenChange:e,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Wt(){const[a,e]=s.useState(!0),[t,i]=s.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query telemetry:"," ",n.jsx("strong",{"data-testid":"escape-hint-query",style:{color:"var(--aurora-text-primary)"},children:t||"N/A"})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Jt(){const[a,e]=s.useState(!0),[t,i]=s.useState("none");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last command:"," ",n.jsx("strong",{"data-testid":"last-command",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>i("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>i("send-report")}]})]})}function Xt(){const[a,e]=s.useState(!0);return n.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Yt(){const[a,e]=s.useState(!0),[t,i]=s.useState(0),[l,m]=s.useState("");return n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Executed commands:"," ",n.jsx("strong",{"data-testid":"ime-selection-count",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Query value:"," ",n.jsx("strong",{"data-testid":"ime-query-value",style:{color:"var(--aurora-text-primary)"},children:l||"N/A"})]}),n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Palette state:"," ",n.jsx("strong",{"data-testid":"ime-open-state",style:{color:"var(--aurora-text-primary)"},children:a?"open":"closed"})]}),n.jsx(p,{open:a,onOpenChange:e,onQueryChange:m,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>i(x=>x+1)}]})]})}function Zt(){const[a,e]=s.useState(!0),[t,i]=s.useState(0);return s.useEffect(()=>{const l=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),n.jsxs("div",{style:{minHeight:420,padding:20,display:"grid",gap:10},children:[n.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Escape hook calls:"," ",n.jsx("strong",{"data-testid":"command-escape-calls",style:{color:"var(--aurora-text-primary)"},children:t})]}),n.jsx(p,{open:a,onOpenChange:e,onEscapeKeyDown:()=>i(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const O={render:()=>n.jsx(Lt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await o(i).toHaveAttribute("aria-disabled","true"),await o(i).toHaveAttribute("tabindex","-1")}},q={render:()=>n.jsx($t,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await o(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await ce(()=>{o(t).toHaveFocus()}),await c.type(t,"run"),await o(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await c.keyboard("{Enter}"),await o(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await o(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},N={render:()=>n.jsx(Ut,{})},L={render:()=>n.jsx(Tt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await o(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await o(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await o(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},$={render:()=>n.jsx(Vt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await o(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await c.click(await e.findByRole("option",{name:"Create Spec"})),await o(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(t.body),await o(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Close dialog"})),await o(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await o(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},U={render:()=>n.jsx(Tt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await o(l).toBeTruthy(),await o(t).toHaveAttribute("aria-expanded","true"),await o(t).toHaveAttribute("aria-controls",l),await c.clear(t),await c.type(t,"no-match"),await o(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await o(t).toHaveAttribute("aria-expanded","false"),await o(t).not.toHaveAttribute("aria-controls"),await c.clear(t);const m=await e.findByRole("listbox",{name:"Command results"});await o(t).toHaveAttribute("aria-expanded","true"),await o(t).toHaveAttribute("aria-controls",m.getAttribute("id"))}},V={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await o(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},F={render:()=>n.jsx(p,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await o(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await o(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await o(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},K={render:()=>n.jsx(Ft,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await o(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await o(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const i of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:i,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await o(l.defaultPrevented).toBe(!1)}}},G={render:()=>n.jsx(Kt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await o(i).toHaveAttribute("aria-disabled","true"),await c.click(i),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await o(e.getByTestId("executed-count")).toHaveTextContent("0")}},z={render:()=>n.jsx(Gt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"cafe"),await o(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await o(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},M={render:()=>n.jsx(zt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),I.keyDown(t,{key:"Enter",repeat:!1}),await ce(()=>{o(e.getByTestId("selection-count")).toHaveTextContent("1")}),I.keyDown(t,{key:"Enter",repeat:!0}),await ce(()=>{o(e.getByTestId("selection-count")).toHaveTextContent("1")}),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Q={render:()=>n.jsx(Mt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await o(t).toBeInTheDocument(),await o(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.keyboard("{Escape}"),await o(t).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await o(t).toBeInTheDocument()}},_={render:()=>n.jsx(Qt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),I.pointerDown(t.body),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const i=e.getByRole("combobox",{name:"Search commands"});await c.clear(i),await c.type(i,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await o(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await o(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},W={render:()=>n.jsx(_t,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await o(e.getByTestId("query-value")).toHaveTextContent("release"),await c.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await o(e.getByTestId("query-value")).toHaveTextContent("N/A"),await o(e.getByTestId("open-state")).toHaveTextContent("open"),await c.keyboard("{Escape}"),await o(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await o(e.getByTestId("open-state")).toHaveTextContent("closed")}},J={render:()=>n.jsx(Wt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.type(t,"release"),await o(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await c.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await o(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},X={render:()=>n.jsx(Jt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.type(t,"search"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await c.clear(t),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-1"));const i=t.getAttribute("aria-activedescendant");o(i).toBeTruthy();const l=a.ownerDocument.getElementById(i);await o(l).toBeInTheDocument(),await o(l).toHaveAttribute("role","option"),await o(l).not.toHaveAttribute("aria-disabled","true"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Y={render:()=>n.jsx(Xt,{}),play:async({canvasElement:a})=>{const t=await y(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await c.click(t),await o(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await c.keyboard("{PageDown}"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-6")),await c.keyboard("{PageUp}"),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0"))}},Z={render:()=>n.jsx(Yt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.click(t),await o(t).toHaveAttribute("aria-activedescendant",o.stringContaining("option-0")),await c.type(t,"deploy"),await o(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),I.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),I.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),I.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await o(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await o(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await o(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await o(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},ee={render:()=>n.jsx(Zt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await o(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await o(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await o(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var he,fe,ke;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ke=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var Be,Ce,Ee;q.parameters={...q.parameters,docs:{...(Be=q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <TriggeredKeyboardFirstPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("keyboard-first-selected")).toHaveTextContent("none");
    await userEvent.click(canvas.getByRole("button", {
      name: "Open keyboard palette"
    }));
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await waitFor(() => {
      expect(input).toHaveFocus();
    });
    await userEvent.type(input, "run");
    await expect(canvas.getByRole("option", {
      name: "Run E2E Smoke"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke");
  }
}`,...(Ee=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var Te,De,Re;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Re=(De=N.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ie,Se,Pe;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Pe=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var Ae,He,je;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(je=(He=$.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var Oe,qe,Ne;U.parameters={...U.parameters,docs:{...(Oe=U.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveAttribute("aria-controls", initialListboxId!);
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.queryByRole("listbox", {
      name: "Command results"
    })).not.toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-expanded", "false");
    await expect(input).not.toHaveAttribute("aria-controls");
    await userEvent.clear(input);
    const restoredListbox = await canvas.findByRole("listbox", {
      name: "Command results"
    });
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveAttribute("aria-controls", restoredListbox.getAttribute("id"));
  }
}`,...(Ne=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Le,$e,Ue;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ue=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var Ve,Fe,Ke;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ke=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Ke.source}}};var Ge,ze,Me;K.parameters={...K.parameters,docs:{...(Ge=K.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Escape");
    for (const key of ["ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp"]) {
      const keyEvent = new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true
      });
      input.dispatchEvent(keyEvent);
      await expect(keyEvent.defaultPrevented).toBe(false);
    }
  }
}`,...(Me=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var Qe,_e,We;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(We=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Je,Xe,Ye;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;M.parameters={...M.parameters,docs:{...(Ze=M.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=M.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=Q.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,st,it;_.parameters={..._.parameters,docs:{...(rt=_.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(st=_.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,lt,dt;W.parameters={...W.parameters,docs:{...(ct=W.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(lt=W.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;J.parameters={...J.parameters,docs:{...(ut=J.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <EscapeShortcutHintPrecisionPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter");
    await userEvent.type(input, "release");
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("release");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("N/A");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter");
  }
}`,...(pt=(mt=J.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,gt;X.parameters={...X.parameters,docs:{...(yt=X.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(gt=(wt=X.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var vt,bt,xt;Y.parameters={...Y.parameters,docs:{...(vt=Y.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=Y.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var ht,ft,kt;Z.parameters={...Z.parameters,docs:{...(ht=Z.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(ft=Z.parameters)==null?void 0:ft.docs)==null?void 0:kt.source}}};var Bt,Ct,Et;ee.parameters={...ee.parameters,docs:{...(Bt=ee.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Et=(Ct=ee.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};const ua=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","TextValueAndAccentSearch","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{N as AiInteractionFlow,$ as CloseReasonTelemetry,G as DisabledCommandGuard,K as DisabledOnlyResults,U as EmptyStateAriaControlsLifecycle,W as EscapeClearsQueryFirst,ee as EscapePreemptedByGlobalHandler,J as EscapeShortcutHintPrecision,_ as GuardedDismissEvents,Z as ImeCompositionGuard,F as LocalizedDialogCopy,V as LocalizedResultsLabel,Q as NonDismissible,q as OpenFromTriggerKeyboardFirst,Y as PagedKeyboardNavigation,M as PersistentSelection,L as QueryTelemetry,X as RefinedSearchKeepsActiveCommand,O as SearchCommands,z as TextValueAndAccentSearch,ua as __namedExportsOrder,da as default};
