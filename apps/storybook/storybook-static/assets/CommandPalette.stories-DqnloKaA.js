import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as le}from"./Button-BhfMIoQv.js";import{D as Zt}from"./Dialog-BFr3Oh1l.js";import{I as ea}from"./Input-pKdbw4ss.js";import{within as y,expect as n,userEvent as c,fireEvent as R,waitFor as be}from"./index-DgAF9SIF.js";import{b as x,s as w,a as v}from"./storyShowcase-Bw5VyCj0.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-BEiGPJgM.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:a,onOpenChange:e,commands:t,title:i="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:p="Search commands",resultsAriaLabel:k="Command results",closeOnSelect:f=!0,clearQueryOnEscape:A=!0,closeOnEscape:O=!0,closeOnOutsidePointer:xe=!0,onEscapeKeyDown:de,onPointerDownOutside:ue,closeLabel:Mt,placeholder:Ft="Search commands...",emptyMessage:zt="No commands found.",onQueryChange:B,onCloseReason:T,getResultsStatusText:he=na}){const[D,me]=r.useState(""),[q,E]=r.useState(0),Gt=r.useRef(null),j=r.useRef(null),L=r.useRef(null),fe=r.useRef(a);r.useRef(null),r.useRef(null),r.useRef(null);const H=r.useId(),ke=r.useId(),Be=r.useRef(null),Qt=$(p,"Search commands"),_t=$(k,"Command results"),Wt=$(Mt,"Close dialog"),N=r.useCallback(s=>{L.current=s,T==null||T(s)},[T]),Ee=r.useCallback(s=>{N(s),e(!1),L.current=null},[N,e]),Jt=r.useCallback(s=>{!s&&a&&L.current===null&&(T==null||T("close-button")),L.current=null,e(s)},[T,e,a]);r.useEffect(()=>{!a&&fe.current&&(me(s=>(s.length>0&&(B==null||B("")),"")),E(0)),fe.current=a},[B,a]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]);const pe=r.useMemo(()=>Re(D.trim()),[D]),u=r.useMemo(()=>pe?t.filter(s=>{const b=[ta(s),...s.keywords??[]].join(" ");return Re(b).includes(pe)}):t,[t,pe]),C=r.useMemo(()=>u.reduce((s,d)=>d.disabled?s:s+1,0),[u]),ye=u.length>0,Xt=r.useMemo(()=>{const s=[];return C>0&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp","Enter"),(O||A&&D.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[A,O,C,D.length]),Yt=r.useMemo(()=>he({query:D,visibleCount:u.length,enabledCount:C,totalCount:t.length}),[t.length,C,u.length,he,D]),I=r.useMemo(()=>u.reduce((s,d,b)=>(d.disabled||s.push(b),s),[]),[u]),S=I[0]??-1,Ce=I[I.length-1]??-1,g=r.useMemo(()=>{if(q<0)return-1;const s=u[q];return!s||s.disabled?-1:q},[q,u]);r.useEffect(()=>{var d;if(u.length===0){j.current=null,E(-1);return}const s=j.current;if(s){const b=u.findIndex(P=>!P.disabled&&P.key===s);if(b>=0){E(b);return}}E(S),j.current=S>=0?((d=u[S])==null?void 0:d.key)??null:null},[u,S]),r.useEffect(()=>{var s;if(g<0){j.current=null;return}j.current=((s=u[g])==null?void 0:s.key)??null},[u,g]),r.useEffect(()=>{if(!a||g<0)return;const s=Be.current;if(!s)return;const d=s.ownerDocument.getElementById(`${H}-option-${g}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[H,a,g]);const we=r.useCallback(s=>{var b;const d=u[s];!d||d.disabled||((b=d.onSelect)==null||b.call(d),f&&Ee("item-select"))},[f,Ee,u]),Te=s=>{var b;if(u.length===0)return;let d=g<0?s===1?-1:0:g;for(let P=0;P<u.length;P+=1)if(d=(d+s+u.length)%u.length,!((b=u[d])!=null&&b.disabled)){E(d);return}},De=s=>{if(I.length===0)return;const d=I.indexOf(g);if(d<0){E(s===1?S:Ce);return}const b=Math.min(I.length-1,Math.max(0,d+s*5));E(I[b]??S)};return o.jsx(Zt,{open:a,onOpenChange:Jt,title:i,description:l,closeLabel:Wt,size:"md",closeOnEscape:O,closeOnOutsidePointer:xe,onEscapeKeyDown:s=>{de==null||de(s),!(s.defaultPrevented||!O)&&N("escape-key")},onPointerDownOutside:s=>{ue==null||ue(s),!(s.defaultPrevented||!xe)&&N("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(ea,{ref:Gt,"data-autofocus":"",role:"combobox","aria-expanded":ye,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":ye?H:void 0,"aria-activedescendant":g>=0?`${H}-option-${g}`:void 0,"aria-describedby":ke,"aria-keyshortcuts":Xt,placeholder:Ft,value:D,onChange:s=>{me(s.target.value),B==null||B(s.target.value)},onKeyDown:s=>{if(!aa(s)&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"&&A&&D.length>0){s.preventDefault(),me(""),B==null||B("");return}if(s.key==="ArrowDown"){if(C===0)return;s.preventDefault(),Te(1);return}if(s.key==="ArrowUp"){if(C===0)return;s.preventDefault(),Te(-1);return}if(s.key==="Home"){if(C===0)return;s.preventDefault(),E(S);return}if(s.key==="End"){if(C===0)return;s.preventDefault(),E(Ce);return}if(s.key==="PageDown"){if(C===0)return;s.preventDefault(),De(1);return}if(s.key==="PageUp"){if(C===0)return;s.preventDefault(),De(-1);return}if(s.key==="Enter"&&g>=0){if(s.preventDefault(),s.repeat)return;we(g)}}},"aria-label":Qt}),o.jsx("p",{id:ke,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Yt}),ye?o.jsx("div",{id:H,ref:Be,role:"listbox","aria-label":_t,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((s,d)=>{const b=d===g,P=$(s.ariaLabel);return o.jsx("div",{id:`${H}-option-${d}`,role:"option","aria-selected":b,"aria-disabled":s.disabled||void 0,"aria-label":P,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onPointerDown:h=>{h.pointerType==="mouse"||h.button!==0||h.preventDefault()},onMouseDown:h=>{h.button===0&&h.preventDefault()},onMouseEnter:()=>{s.disabled||E(d)},onClick:()=>{s.disabled||we(d)},onKeyDown:h=>{s.disabled||(h.key==="Enter"||h.key===" "||h.key==="Space"||h.key==="Spacebar")&&(h.preventDefault(),we(d))},style:{border:"1px solid var(--aurora-border-default)",background:b?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},s.key)})}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:zt})]})})}function ta(a){if(typeof a.textValue=="string"){const e=ce(a.textValue);if(e.length>0)return e}return ce(ve(a.label))}function Re(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function aa(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function na({query:a,visibleCount:e,enabledCount:t,totalCount:i}){const l=a.trim();return l.length===0?t!==i?`${t} of ${i} command${i===1?"":"s"} available.`:`${i} command${i===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function ve(a){if(typeof a=="string")return a;if(typeof a=="number")return String(a);if(Array.isArray(a))return ce(a.map(t=>ve(t)).filter(t=>t.length>0).join(" "));if(!r.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?ce(e["aria-label"]):ve(e.children)}function $(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function ce(a){return a.replace(/\s+/g," ").trim()}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const ge=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Aa={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:ge}};function Vt(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:ge,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function oa(){const[a,e]=r.useState(!1),[t,i]=r.useState("none");return o.jsxs(x,{align:"start",children:[o.jsxs("p",{style:w,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:v,children:t})]}),o.jsx(le,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>i("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>i("Open Theme Pack")}]})]})}function sa(){const[a,e]=r.useState(!0),[t,i]=r.useState("None"),l=ge.map(p=>({...p,onSelect:()=>i(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Last AI action:"," ",o.jsx("strong",{style:v,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:l})]})}function Kt(){const[a,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:v,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:i,getResultsStatusText:({query:l,visibleCount:p,enabledCount:k})=>l.trim().length===0?"Command search ready.":`${k}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function ra(){const[a,e]=r.useState(!0),[t,i]=r.useState("none"),[l,p]=r.useState("N/A"),k=r.useCallback(f=>{p(A=>A==="N/A"?f:`${A} -> ${f}`)},[]);return o.jsxs(x,{align:"start",children:[o.jsxs("p",{style:w,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:v,children:t})]}),o.jsxs("p",{style:w,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:v,children:l})]}),o.jsx(le,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(m,{open:a,onOpenChange:f=>{e(f),f||k("open:false")},onCloseReason:f=>{i(f),k(`reason:${f}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>k("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>k("select")}]})]})}function ia(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function ca(){const[a,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:v,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>i(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>i(l=>l+1)}],placeholder:"Try searching publish..."})]})}function la(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function da(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function ua(){const[a,e]=r.useState(!0),[t,i]=r.useState(0);return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:v,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>i(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>i(l=>l+1)}]})]})}function ma(){const[a,e]=r.useState(!1);return o.jsxs(x,{align:"start",children:[o.jsx("p",{style:w,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(le,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function pa(){const[a,e]=r.useState(!1),[t,i]=r.useState(!0);return o.jsxs(x,{align:"start",children:[o.jsx("p",{style:w,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:w,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:v,children:t?"enabled":"disabled"})]}),o.jsx(le,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>i(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function ya(){const[a,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:v,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:v,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function wa(){const[a,e]=r.useState(!0),[t,i]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:v,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:i,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function ba(){const[a,e]=r.useState(!0),[t,i]=r.useState("none");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:v,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>i("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>i("send-report")}]})]})}function va(){const[a,e]=r.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function ga(){const[a,e]=r.useState(!0),[t,i]=r.useState(0),[l,p]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:v,children:t})]}),o.jsxs("p",{style:w,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:v,children:l||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:v,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>i(k=>k+1)}]})]})}function xa(){const[a,e]=r.useState(!0),[t,i]=r.useState(0);return r.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:v,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,onEscapeKeyDown:()=>i(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const U={render:()=>o.jsx(Vt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await n(i).toHaveAttribute("aria-disabled","true"),await n(i).toHaveAttribute("tabindex","-1")}},V={render:()=>o.jsx(oa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await c.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await be(()=>{n(t).toHaveFocus()}),await c.type(t,"run"),await n(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await c.keyboard("{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},K={render:()=>o.jsx(sa,{})},M={render:()=>o.jsx(Kt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await n(e.getByText("release")).toBeInTheDocument(),await c.keyboard("{ArrowDown}{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},F={render:()=>o.jsx(ra,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await n(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await c.click(await e.findByRole("option",{name:"Create Spec"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(t.body),await n(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await c.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},z={render:()=>o.jsx(Kt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await n(l).toBeTruthy(),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",l),await c.clear(t),await c.type(t,"no-match"),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).not.toHaveAttribute("aria-controls"),await c.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",p.getAttribute("id"))}},G={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},Q={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await n(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},_={render:()=>o.jsx(ia,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await n(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await n(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const i of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:i,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await n(l.defaultPrevented).toBe(!1)}}},W={render:()=>o.jsx(ca,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"publish");const i=e.getByRole("option",{name:"Publish Release"});await n(i).toHaveAttribute("aria-disabled","true"),await c.click(i),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("executed-count")).toHaveTextContent("0")}},J={render:()=>o.jsx(Vt,{}),play:async({canvasElement:a})=>{const t=await y(a.ownerDocument.body).findByRole("option",{name:"Create Spec"}),i=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(i),n(i.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),n(l.defaultPrevented).toBe(!0)}},X={render:()=>o.jsx(la,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"cafe"),await n(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},Y={render:()=>o.jsx(da,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox");await n(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await c.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},Z={render:()=>o.jsx(ua,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),R.keyDown(t,{key:"Enter",repeat:!1}),await be(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),R.keyDown(t,{key:"Enter",repeat:!0}),await be(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ee={render:()=>o.jsx(ma,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await c.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await n(t).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.keyboard("{Escape}"),await n(t).toBeInTheDocument(),await c.click(e.getByRole("button",{name:"Outside target"})),await n(t).toBeInTheDocument()}},te={render:()=>o.jsx(pa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await c.click(await e.findByRole("button",{name:"Open guarded palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),R.pointerDown(t.body),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const i=e.getByRole("combobox",{name:"Search commands"});await c.clear(i),await c.type(i,"unlock"),await c.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await n(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await c.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},ae={render:()=>o.jsx(ya,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.clear(t),await c.type(t,"release"),await n(e.getByTestId("query-value")).toHaveTextContent("release"),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("query-value")).toHaveTextContent("N/A"),await n(e.getByTestId("open-state")).toHaveTextContent("open"),await c.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("open-state")).toHaveTextContent("closed")}},ne={render:()=>o.jsx(wa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await c.type(t,"release"),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},oe={render:()=>o.jsx(ba,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.type(t,"search"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await c.clear(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const i=t.getAttribute("aria-activedescendant");n(i).toBeTruthy();const l=a.ownerDocument.getElementById(i);await n(l).toBeInTheDocument(),await n(l).toHaveAttribute("role","option"),await n(l).not.toHaveAttribute("aria-disabled","true"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},se={render:()=>o.jsx(va,{}),play:async({canvasElement:a})=>{const t=await y(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await c.click(t),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await c.keyboard("{PageDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),R.keyDown(t,{key:"PageDown",ctrlKey:!0}),R.keyDown(t,{key:"End",metaKey:!0}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),await c.keyboard("{PageUp}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},re={render:()=>o.jsx(ga,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await c.click(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await c.type(t,"deploy"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),R.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),R.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),R.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await n(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{ArrowDown}"),await c.keyboard("{Enter}"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},ie={render:()=>o.jsx(xa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await c.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var Ie,Se,Pe;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Pe=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var Ae,He,je;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(je=(He=V.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var Oe,qe,Le;K.parameters={...K.parameters,docs:{...(Oe=K.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Le=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Ne,$e,Ue;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ue=($e=M.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var Ve,Ke,Me;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Me=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Fe,ze,Ge;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ge=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Qe,_e,We;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(We=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Je,Xe,Ye;Q.parameters={...Q.parameters,docs:{...(Je=Q.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=_.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;W.parameters={...W.parameters,docs:{...(at=W.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=W.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,rt,it;J.parameters={...J.parameters,docs:{...(st=J.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(it=(rt=J.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ct,lt,dt;X.parameters={...X.parameters,docs:{...(ct=X.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(lt=X.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;Y.parameters={...Y.parameters,docs:{...(ut=Y.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(mt=Y.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,bt;Z.parameters={...Z.parameters,docs:{...(yt=Z.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(bt=(wt=Z.parameters)==null?void 0:wt.docs)==null?void 0:bt.source}}};var vt,gt,xt;ee.parameters={...ee.parameters,docs:{...(vt=ee.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(gt=ee.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var ht,ft,kt;te.parameters={...te.parameters,docs:{...(ht=te.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(ft=te.parameters)==null?void 0:ft.docs)==null?void 0:kt.source}}};var Bt,Et,Ct;ae.parameters={...ae.parameters,docs:{...(Bt=ae.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ct=(Et=ae.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var Tt,Dt,Rt;ne.parameters={...ne.parameters,docs:{...(Tt=ne.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Rt=(Dt=ne.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var It,St,Pt;oe.parameters={...oe.parameters,docs:{...(It=oe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Pt=(St=oe.parameters)==null?void 0:St.docs)==null?void 0:Pt.source}}};var At,Ht,jt;se.parameters={...se.parameters,docs:{...(At=se.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(jt=(Ht=se.parameters)==null?void 0:Ht.docs)==null?void 0:jt.source}}};var Ot,qt,Lt;re.parameters={...re.parameters,docs:{...(Ot=re.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Lt=(qt=re.parameters)==null?void 0:qt.docs)==null?void 0:Lt.source}}};var Nt,$t,Ut;ie.parameters={...ie.parameters,docs:{...(Nt=ie.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ut=($t=ie.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};const Ha=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{K as AiInteractionFlow,F as CloseReasonTelemetry,W as DisabledCommandGuard,_ as DisabledOnlyResults,z as EmptyStateAriaControlsLifecycle,ae as EscapeClearsQueryFirst,ie as EscapePreemptedByGlobalHandler,ne as EscapeShortcutHintPrecision,te as GuardedDismissEvents,Y as IconOnlyCommandNaming,re as ImeCompositionGuard,Q as LocalizedDialogCopy,G as LocalizedResultsLabel,ee as NonDismissible,V as OpenFromTriggerKeyboardFirst,J as OptionMouseDownPolicy,se as PagedKeyboardNavigation,Z as PersistentSelection,M as QueryTelemetry,oe as RefinedSearchKeepsActiveCommand,U as SearchCommands,X as TextValueAndAccentSearch,Ha as __namedExportsOrder,Aa as default};
