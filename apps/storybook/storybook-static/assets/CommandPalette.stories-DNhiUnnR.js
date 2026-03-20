import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as re}from"./Button-DS9RTxKh.js";import{D as Qt}from"./Dialog-B2OlqLN0.js";import{I as _t}from"./Input-pKdbw4ss.js";import{within as y,expect as n,userEvent as c,fireEvent as R,waitFor as pe}from"./index-DgAF9SIF.js";import{b as h,s as b,a as g}from"./storyShowcase-Bw5VyCj0.js";import"./bodyScrollLock-CnEUF6y7.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BWoUnDZk.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:a,onOpenChange:e,commands:t,title:i="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:p="Search commands",resultsAriaLabel:k="Command results",closeOnSelect:f=!0,clearQueryOnEscape:S=!0,closeOnEscape:j=!0,closeOnOutsidePointer:be=!0,onEscapeKeyDown:ie,onPointerDownOutside:ce,closeLabel:Ut,placeholder:Vt="Search commands...",emptyMessage:Kt="No commands found.",onQueryChange:B,onCloseReason:T,getResultsStatusText:ve=Xt}){const[D,le]=r.useState(""),[O,E]=r.useState(0),Mt=r.useRef(null),H=r.useRef(null),q=r.useRef(null),ge=r.useRef(a);r.useRef(null),r.useRef(null),r.useRef(null);const A=r.useId(),xe=r.useId(),he=r.useRef(null),L=r.useCallback(s=>{q.current=s,T==null||T(s)},[T]),fe=r.useCallback(s=>{L(s),e(!1),q.current=null},[L,e]),Ft=r.useCallback(s=>{!s&&a&&q.current===null&&(T==null||T("close-button")),q.current=null,e(s)},[T,e,a]);r.useEffect(()=>{!a&&ge.current&&(le(s=>(s.length>0&&(B==null||B("")),"")),E(0)),ge.current=a},[B,a]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]);const de=r.useMemo(()=>Ce(D.trim()),[D]),u=r.useMemo(()=>de?t.filter(s=>{const v=[Wt(s),...s.keywords??[]].join(" ");return Ce(v).includes(de)}):t,[t,de]),C=r.useMemo(()=>u.reduce((s,d)=>d.disabled?s:s+1,0),[u]),ue=u.length>0,zt=r.useMemo(()=>{const s=[];return C>0&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp","Enter"),(j||S&&D.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[S,j,C,D.length]),Gt=r.useMemo(()=>ve({query:D,visibleCount:u.length,enabledCount:C,totalCount:t.length}),[t.length,C,u.length,ve,D]),I=r.useMemo(()=>u.reduce((s,d,v)=>(d.disabled||s.push(v),s),[]),[u]),P=I[0]??-1,ke=I[I.length-1]??-1,x=r.useMemo(()=>{if(O<0)return-1;const s=u[O];return!s||s.disabled?-1:O},[O,u]);r.useEffect(()=>{var d;if(u.length===0){H.current=null,E(-1);return}const s=H.current;if(s){const v=u.findIndex(w=>!w.disabled&&w.key===s);if(v>=0){E(v);return}}E(P),H.current=P>=0?((d=u[P])==null?void 0:d.key)??null:null},[u,P]),r.useEffect(()=>{var s;if(x<0){H.current=null;return}H.current=((s=u[x])==null?void 0:s.key)??null},[u,x]),r.useEffect(()=>{if(!a||x<0)return;const s=he.current;if(!s)return;const d=s.ownerDocument.getElementById(`${A}-option-${x}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[A,a,x]);const me=r.useCallback(s=>{var v;const d=u[s];!d||d.disabled||((v=d.onSelect)==null||v.call(d),f&&fe("item-select"))},[f,fe,u]),Be=s=>{var v;if(u.length===0)return;let d=x<0?s===1?-1:0:x;for(let w=0;w<u.length;w+=1)if(d=(d+s+u.length)%u.length,!((v=u[d])!=null&&v.disabled)){E(d);return}},Ee=s=>{if(I.length===0)return;const d=I.indexOf(x);if(d<0){E(s===1?P:ke);return}const v=Math.min(I.length-1,Math.max(0,d+s*5));E(I[v]??P)};return o.jsx(Qt,{open:a,onOpenChange:Ft,title:i,description:l,closeLabel:Ut,size:"md",closeOnEscape:j,closeOnOutsidePointer:be,onEscapeKeyDown:s=>{ie==null||ie(s),!(s.defaultPrevented||!j)&&L("escape-key")},onPointerDownOutside:s=>{ce==null||ce(s),!(s.defaultPrevented||!be)&&L("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(_t,{ref:Mt,"data-autofocus":"",role:"combobox","aria-expanded":ue,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":ue?A:void 0,"aria-activedescendant":x>=0?`${A}-option-${x}`:void 0,"aria-describedby":xe,"aria-keyshortcuts":zt,placeholder:Vt,value:D,onChange:s=>{le(s.target.value),B==null||B(s.target.value)},onKeyDown:s=>{if(!Jt(s)&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"&&S&&D.length>0){s.preventDefault(),le(""),B==null||B("");return}if(s.key==="ArrowDown"){if(C===0)return;s.preventDefault(),Be(1);return}if(s.key==="ArrowUp"){if(C===0)return;s.preventDefault(),Be(-1);return}if(s.key==="Home"){if(C===0)return;s.preventDefault(),E(P);return}if(s.key==="End"){if(C===0)return;s.preventDefault(),E(ke);return}if(s.key==="PageDown"){if(C===0)return;s.preventDefault(),Ee(1);return}if(s.key==="PageUp"){if(C===0)return;s.preventDefault(),Ee(-1);return}if(s.key==="Enter"&&x>=0){if(s.preventDefault(),s.repeat)return;me(x)}}},"aria-label":p}),o.jsx("p",{id:xe,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Gt}),ue?o.jsx("div",{id:A,ref:he,role:"listbox","aria-label":k,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((s,d)=>{const v=d===x;return o.jsx("div",{id:`${A}-option-${d}`,role:"option","aria-selected":v,"aria-disabled":s.disabled||void 0,"aria-label":s.ariaLabel,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onPointerDown:w=>{w.pointerType==="mouse"||w.button!==0||w.preventDefault()},onMouseDown:w=>{w.button===0&&w.preventDefault()},onMouseEnter:()=>{s.disabled||E(d)},onClick:()=>{s.disabled||me(d)},onKeyDown:w=>{s.disabled||(w.key==="Enter"||w.key===" "||w.key==="Space"||w.key==="Spacebar")&&(w.preventDefault(),me(d))},style:{border:"1px solid var(--aurora-border-default)",background:v?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},s.key)})}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:Kt})]})})}function Wt(a){if(typeof a.textValue=="string"){const e=a.textValue.trim();if(e.length>0)return e}return ye(a.label).trim()}function Ce(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Jt(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function Xt({query:a,visibleCount:e,enabledCount:t,totalCount:i}){const l=a.trim();return l.length===0?t!==i?`${t} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function ye(a){if(typeof a=="string")return a;if(typeof a=="number")return String(a);if(Array.isArray(a))return a.map(t=>ye(t)).join("");if(!r.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":ye(e.children)}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:`| "close-button"
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
}`,computed:!1}}}};const we=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Ta={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:we}};function Nt(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:we,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Yt(){const[a,e]=r.useState(!1),[t,i]=r.useState("none");return o.jsxs(h,{align:"start",children:[o.jsxs("p",{style:b,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:g,children:t})]}),o.jsx(re,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>i("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>i("Open Theme Pack")}]})]})}function Zt(){const[a,e]=r.useState(!0),[t,i]=r.useState("None"),l=we.map(p=>({...p,onSelect:()=>i(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Last AI action:"," ",o.jsx("strong",{style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:l})]})}function $t(){const[a,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:g,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:l,visibleCount:p,enabledCount:k})=>l.trim().length===0?"Command search ready.":`${k}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function ea(){const[a,e]=r.useState(!0),[t,i]=r.useState("none"),[l,p]=r.useState("N/A"),k=r.useCallback(f=>{p(S=>S==="N/A"?f:`${S} -> ${f}`)},[]);return o.jsxs(h,{align:"start",children:[o.jsxs("p",{style:b,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:g,children:t})]}),o.jsxs("p",{style:b,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:g,children:l})]}),o.jsx(re,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(m,{open:a,onOpenChange:f=>{e(f),f||k("open:false")},onCloseReason:f=>{i(f),k(`reason:${f}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>k("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>k("select")}]})]})}function ta(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function aa(){const[a,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>i(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>i(l=>l+1)}],placeholder:"Try searching publish..."})]})}function na(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function oa(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function sa(){const[a,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>i(l=>l+1)}]})]})}function ra(){const[a,e]=r.useState(!1);return o.jsxs(h,{align:"start",children:[o.jsx("p",{style:b,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(re,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function ia(){const[a,e]=r.useState(!1),[t,i]=r.useState(!0);return o.jsxs(h,{align:"start",children:[o.jsx("p",{style:b,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:b,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:g,children:t?"enabled":"disabled"})]}),o.jsx(re,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>i(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function ca(){const[a,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:g,children:t||"N/A"})]}),o.jsxs("p",{style:b,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:g,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function la(){const[a,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:g,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function da(){const[a,e]=r.useState(!0),[t,i]=r.useState("none");return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>i("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>i("send-report")}]})]})}function ua(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function ma(){const[a,e]=r.useState(!0),[t,i]=r.useState(0),[l,p]=r.useState("");return o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:g,children:t})]}),o.jsxs("p",{style:b,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:g,children:l||"N/A"})]}),o.jsxs("p",{style:b,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:g,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>i(k=>k+1)}]})]})}function pa(){const[a,e]=r.useState(!0),[t,i]=r.useState(0);return r.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(h,{children:[o.jsxs("p",{style:b,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,onEscapeKeyDown:()=>i(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const N={render:()=>o.jsx(Nt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await n(i).toHaveAttribute("aria-disabled","true"),await n(i).toHaveAttribute("tabindex","-1")}},$={render:()=>o.jsx(Yt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await pe(()=>{n(t).toHaveFocus()}),await c.type(t,"run"),await n(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await c.keyboard("{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},U={render:()=>o.jsx(Zt,{})},V={render:()=>o.jsx($t,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await n(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},K={render:()=>o.jsx(ea,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await n(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await c.click(await e.findByRole("option",{name:"Create Spec"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(t.body),await n(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},M={render:()=>o.jsx($t,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await n(l).toBeTruthy(),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",l),await c.clear(t),await c.type(t,"no-match"),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).not.toHaveAttribute("aria-controls"),await c.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",p.getAttribute("id"))}},F={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},z={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await n(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},G={render:()=>o.jsx(ta,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await n(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await n(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const i of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:i,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await n(l.defaultPrevented).toBe(!1)}}},Q={render:()=>o.jsx(aa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await n(i).toHaveAttribute("aria-disabled","true"),await c.click(i),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("executed-count")).toHaveTextContent("0")}},_={render:()=>o.jsx(Nt,{}),play:async({canvasElement:a})=>{const t=await y(a.ownerDocument.body).findByRole("option",{name:"Create Spec"}),i=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(i),n(i.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),n(l.defaultPrevented).toBe(!0)}},W={render:()=>o.jsx(na,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"cafe"),await n(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},J={render:()=>o.jsx(oa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox");await n(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await c.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},X={render:()=>o.jsx(sa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),R.keyDown(t,{key:"Enter",repeat:!1}),await pe(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),R.keyDown(t,{key:"Enter",repeat:!0}),await pe(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Y={render:()=>o.jsx(ra,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await n(t).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.keyboard("{Escape}"),await n(t).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await n(t).toBeInTheDocument()}},Z={render:()=>o.jsx(ia,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),R.pointerDown(t.body),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const i=e.getByRole("combobox",{name:"Search commands"});await c.clear(i),await c.type(i,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await n(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},ee={render:()=>o.jsx(ca,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await n(e.getByTestId("query-value")).toHaveTextContent("release"),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("query-value")).toHaveTextContent("N/A"),await n(e.getByTestId("open-state")).toHaveTextContent("open"),await c.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("open-state")).toHaveTextContent("closed")}},te={render:()=>o.jsx(la,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.type(t,"release"),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},ae={render:()=>o.jsx(da,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.type(t,"search"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await c.clear(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const i=t.getAttribute("aria-activedescendant");n(i).toBeTruthy();const l=a.ownerDocument.getElementById(i);await n(l).toBeInTheDocument(),await n(l).toHaveAttribute("role","option"),await n(l).not.toHaveAttribute("aria-disabled","true"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ne={render:()=>o.jsx(ua,{}),play:async({canvasElement:a})=>{const t=await y(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await c.click(t),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await c.keyboard("{PageDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),R.keyDown(t,{key:"PageDown",ctrlKey:!0}),R.keyDown(t,{key:"End",metaKey:!0}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),await c.keyboard("{PageUp}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},oe={render:()=>o.jsx(ma,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.click(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await c.type(t,"deploy"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),R.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),R.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),R.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await n(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},se={render:()=>o.jsx(pa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var Te,De,Re;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Re=(De=N.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ie,Pe,Se;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var Ae,He,je;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(je=(He=U.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var Oe,qe,Le;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Le=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Ne,$e,Ue;K.parameters={...K.parameters,docs:{...(Ne=K.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ue=($e=K.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var Ve,Ke,Me;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Me=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Fe,ze,Ge;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ge=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Qe,_e,We;z.parameters={...z.parameters,docs:{...(Qe=z.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(We=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Je,Xe,Ye;G.parameters={...G.parameters,docs:{...(Je=G.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=G.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=Q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;_.parameters={..._.parameters,docs:{...(at=_.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <OpenPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const option = await canvas.findByRole("option", {
      name: "Create Spec"
    });
    const secondaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 2
    });
    option.dispatchEvent(secondaryMouseDown);
    expect(secondaryMouseDown.defaultPrevented).toBe(false);
    const primaryMouseDown = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
      button: 0
    });
    option.dispatchEvent(primaryMouseDown);
    expect(primaryMouseDown.defaultPrevented).toBe(true);
  }
}`,...(ot=(nt=_.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,it;W.parameters={...W.parameters,docs:{...(st=W.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(it=(rt=W.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ct,lt,dt;J.parameters={...J.parameters,docs:{...(ct=J.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => <IconOnlyCommandNamingPalette />,
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    await expect(root.getByRole("option", {
      name: "Deploy Release"
    })).toBeInTheDocument();
    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", {
      name: "Rollback Release"
    })).toBeInTheDocument();
    await expect(root.queryByRole("option", {
      name: "Deploy Release"
    })).not.toBeInTheDocument();
  }
}`,...(dt=(lt=J.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;X.parameters={...X.parameters,docs:{...(ut=X.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(mt=X.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,bt;Y.parameters={...Y.parameters,docs:{...(yt=Y.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(bt=(wt=Y.parameters)==null?void 0:wt.docs)==null?void 0:bt.source}}};var vt,gt,xt;Z.parameters={...Z.parameters,docs:{...(vt=Z.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(gt=Z.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var ht,ft,kt;ee.parameters={...ee.parameters,docs:{...(ht=ee.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(ft=ee.parameters)==null?void 0:ft.docs)==null?void 0:kt.source}}};var Bt,Et,Ct;te.parameters={...te.parameters,docs:{...(Bt=te.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ct=(Et=te.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var Tt,Dt,Rt;ae.parameters={...ae.parameters,docs:{...(Tt=ae.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Rt=(Dt=ae.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var It,Pt,St;ne.parameters={...ne.parameters,docs:{...(It=ne.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
    fireEvent.keyDown(input, {
      key: "PageDown",
      ctrlKey: true
    });
    fireEvent.keyDown(input, {
      key: "End",
      metaKey: true
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-6"));
    await userEvent.keyboard("{PageUp}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  }
}`,...(St=(Pt=ne.parameters)==null?void 0:Pt.docs)==null?void 0:St.source}}};var At,Ht,jt;oe.parameters={...oe.parameters,docs:{...(At=oe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(jt=(Ht=oe.parameters)==null?void 0:Ht.docs)==null?void 0:jt.source}}};var Ot,qt,Lt;se.parameters={...se.parameters,docs:{...(Ot=se.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Lt=(qt=se.parameters)==null?void 0:qt.docs)==null?void 0:Lt.source}}};const Da=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{U as AiInteractionFlow,K as CloseReasonTelemetry,Q as DisabledCommandGuard,G as DisabledOnlyResults,M as EmptyStateAriaControlsLifecycle,ee as EscapeClearsQueryFirst,se as EscapePreemptedByGlobalHandler,te as EscapeShortcutHintPrecision,Z as GuardedDismissEvents,J as IconOnlyCommandNaming,oe as ImeCompositionGuard,z as LocalizedDialogCopy,F as LocalizedResultsLabel,Y as NonDismissible,$ as OpenFromTriggerKeyboardFirst,_ as OptionMouseDownPolicy,ne as PagedKeyboardNavigation,X as PersistentSelection,V as QueryTelemetry,ae as RefinedSearchKeepsActiveCommand,N as SearchCommands,W as TextValueAndAccentSearch,Da as __namedExportsOrder,Ta as default};
