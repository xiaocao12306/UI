import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BWu4c2F4.js";import{B as de}from"./Button-BhfMIoQv.js";import{D as na}from"./Dialog-DJrTABMX.js";import{I as oa}from"./Input-pKdbw4ss.js";import{within as y,expect as n,userEvent as i,fireEvent as k,waitFor as ve}from"./index-DgAF9SIF.js";import{b as x,s as w,a as b}from"./storyShowcase-Bw5VyCj0.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./DismissableLayer-DAyP3iyR.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({open:a,onOpenChange:e,commands:t,title:c="Command Palette",description:l="Quickly search and execute workspace actions.",searchAriaLabel:m="Search commands",resultsAriaLabel:h="Command results",closeOnSelect:B=!0,clearQueryOnEscape:A=!0,closeOnEscape:O=!0,closeOnOutsidePointer:he=!0,onEscapeKeyDown:ue,onPointerDownOutside:me,closeLabel:Qt,placeholder:_t="Search commands...",emptyMessage:Wt="No commands found.",onQueryChange:T,onCloseReason:D,getResultsStatusText:fe=ca}){const[R,pe]=r.useState(""),[q,E]=r.useState(0),Jt=r.useRef(null),j=r.useRef(null),L=r.useRef(null),ke=r.useRef(a);r.useRef(null),r.useRef(null),r.useRef(null);const H=r.useId(),Be=r.useId(),Te=r.useRef(null),Xt=$(m,"Search commands"),Yt=$(h,"Command results"),Zt=$(Qt,"Close dialog"),N=r.useCallback(s=>{L.current=s,D==null||D(s)},[D]),Ee=r.useCallback(s=>{N(s),e(!1),L.current=null},[N,e]),ea=r.useCallback(s=>{!s&&a&&L.current===null&&(D==null||D("close-button")),L.current=null,e(s)},[D,e,a]);r.useEffect(()=>{!a&&ke.current&&(pe(s=>(s.length>0&&(T==null||T("")),"")),E(0)),ke.current=a},[T,a]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]),r.useEffect(()=>{},[t]);const ye=r.useMemo(()=>Ie(R.trim()),[R]),u=r.useMemo(()=>ye?t.filter(s=>{const v=[sa(s),...s.keywords??[]].join(" ");return Ie(v).includes(ye)}):t,[t,ye]),C=r.useMemo(()=>u.reduce((s,d)=>d.disabled?s:s+1,0),[u]),we=u.length>0,ta=r.useMemo(()=>{const s=[];return C>0&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp","Enter"),(O||A&&R.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[A,O,C,R.length]),aa=r.useMemo(()=>fe({query:R,visibleCount:u.length,enabledCount:C,totalCount:t.length}),[t.length,C,u.length,fe,R]),I=r.useMemo(()=>u.reduce((s,d,v)=>(d.disabled||s.push(v),s),[]),[u]),P=I[0]??-1,Ce=I[I.length-1]??-1,g=r.useMemo(()=>{if(q<0)return-1;const s=u[q];return!s||s.disabled?-1:q},[q,u]);r.useEffect(()=>{var d;if(u.length===0){j.current=null,E(-1);return}const s=j.current;if(s){const v=u.findIndex(S=>!S.disabled&&S.key===s);if(v>=0){E(v);return}}E(P),j.current=P>=0?((d=u[P])==null?void 0:d.key)??null:null},[u,P]),r.useEffect(()=>{var s;if(g<0){j.current=null;return}j.current=((s=u[g])==null?void 0:s.key)??null},[u,g]),r.useEffect(()=>{if(!a||g<0)return;const s=Te.current;if(!s)return;const d=s.ownerDocument.getElementById(`${H}-option-${g}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[H,a,g]);const be=r.useCallback(s=>{var v;const d=u[s];!d||d.disabled||((v=d.onSelect)==null||v.call(d),B&&Ee("item-select"))},[B,Ee,u]),De=s=>{var v;if(u.length===0)return;let d=g<0?s===1?-1:0:g;for(let S=0;S<u.length;S+=1)if(d=(d+s+u.length)%u.length,!((v=u[d])!=null&&v.disabled)){E(d);return}},Re=s=>{if(I.length===0)return;const d=I.indexOf(g);if(d<0){E(s===1?P:Ce);return}const v=Math.min(I.length-1,Math.max(0,d+s*5));E(I[v]??P)};return o.jsx(na,{open:a,onOpenChange:ea,title:c,description:l,closeLabel:Zt,size:"md",closeOnEscape:O,closeOnOutsidePointer:he,onEscapeKeyDown:s=>{ue==null||ue(s),!(s.defaultPrevented||!O)&&N("escape-key")},onPointerDownOutside:s=>{me==null||me(s),!(s.defaultPrevented||!he)&&N("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(oa,{ref:Jt,"data-autofocus":"",role:"combobox","aria-expanded":we,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":we?H:void 0,"aria-activedescendant":g>=0?`${H}-option-${g}`:void 0,"aria-describedby":Be,"aria-keyshortcuts":ta,placeholder:_t,value:R,onChange:s=>{pe(s.target.value),T==null||T(s.target.value)},onKeyDown:s=>{if(!ra(s)&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;A&&R.length>0&&(s.preventDefault(),pe(""),T==null||T(""));return}if(s.key==="ArrowDown"){if(C===0)return;s.preventDefault(),De(1);return}if(s.key==="ArrowUp"){if(C===0)return;s.preventDefault(),De(-1);return}if(s.key==="Home"){if(C===0)return;s.preventDefault(),E(P);return}if(s.key==="End"){if(C===0)return;s.preventDefault(),E(Ce);return}if(s.key==="PageDown"){if(C===0)return;s.preventDefault(),Re(1);return}if(s.key==="PageUp"){if(C===0)return;s.preventDefault(),Re(-1);return}if(s.key==="Enter"&&g>=0){if(s.preventDefault(),s.repeat)return;be(g)}}},"aria-label":Xt}),o.jsx("p",{id:Be,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:aa}),we?o.jsx("div",{id:H,ref:Te,role:"listbox","aria-label":Yt,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:u.map((s,d)=>{const v=d===g,S=$(s.ariaLabel);return o.jsx("div",{id:`${H}-option-${d}`,role:"option","aria-selected":v,"aria-disabled":s.disabled||void 0,"aria-label":S,"aria-posinset":d+1,"aria-setsize":u.length,tabIndex:-1,onPointerDown:f=>{f.pointerType==="mouse"||f.button!==0||f.preventDefault()},onMouseDown:f=>{f.button===0&&f.preventDefault()},onMouseEnter:()=>{s.disabled||E(d)},onClick:()=>{s.disabled||be(d)},onKeyDown:f=>{s.disabled||(f.key==="Enter"||f.key===" "||f.key==="Space"||f.key==="Spacebar")&&(f.preventDefault(),be(d))},style:{border:"1px solid var(--aurora-border-default)",background:v?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},s.key)})}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:Wt})]})})}function sa(a){if(typeof a.textValue=="string"){const e=le(a.textValue);if(e.length>0)return e}return le(ge(a.label))}function Ie(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function ra(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ca({query:a,visibleCount:e,enabledCount:t,totalCount:c}){const l=a.trim();return l.length===0?t!==c?`${t} of ${c} command${c===1?"":"s"} available.`:`${c} command${c===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function ge(a){if(typeof a=="string")return a;if(typeof a=="number")return String(a);if(Array.isArray(a))return le(a.map(t=>ge(t)).filter(t=>t.length>0).join(" "));if(!r.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?le(e["aria-label"]):ge(e.children)}function $(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function le(a){return a.replace(/\s+/g," ").trim()}p.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const xe=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],La={title:"AI/CommandPalette",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:xe}};function Gt(){const[a,e]=r.useState(!0);return o.jsx(p,{open:a,onOpenChange:e,commands:xe,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function ia(){const[a,e]=r.useState(!1),[t,c]=r.useState("none");return o.jsxs(x,{align:"start",children:[o.jsxs("p",{style:w,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:b,children:t})]}),o.jsx(de,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(p,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>c("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>c("Open Theme Pack")}]})]})}function la(){const[a,e]=r.useState(!0),[t,c]=r.useState("None"),l=xe.map(m=>({...m,onSelect:()=>c(typeof m.textValue=="string"?m.textValue:typeof m.label=="string"?m.label:m.key)}));return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Last AI action:"," ",o.jsx("strong",{style:b,children:t})]}),o.jsx(p,{open:a,onOpenChange:e,commands:l})]})}function zt(){const[a,e]=r.useState(!0),[t,c]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:b,children:t||"N/A"})]}),o.jsx(p,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"]}],emptyMessage:"No matching AI workflow command.",onQueryChange:c,getResultsStatusText:({query:l,visibleCount:m,enabledCount:h})=>l.trim().length===0?"Command search ready.":`${h}/${m} actionable AI workflow match${m===1?"":"es"} for ${l}`})]})}function da(){const[a,e]=r.useState(!0),[t,c]=r.useState("none"),[l,m]=r.useState("N/A"),h=r.useCallback(B=>{m(A=>A==="N/A"?B:`${A} -> ${B}`)},[]);return o.jsxs(x,{align:"start",children:[o.jsxs("p",{style:w,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:b,children:t})]}),o.jsxs("p",{style:w,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:b,children:l})]}),o.jsx(de,{size:"sm",variant:"outline",onClick:()=>{m("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(p,{open:a,onOpenChange:B=>{e(B),B||h("open:false")},onCloseReason:B=>{c(B),h(`reason:${B}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>h("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>h("select")}]})]})}function ua(){const[a,e]=r.useState(!0);return o.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function ma(){const[a,e]=r.useState(!0),[t,c]=r.useState(0);return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:b,children:t})]}),o.jsx(p,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>c(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>c(l=>l+1)}],placeholder:"Try searching publish..."})]})}function pa(){const[a,e]=r.useState(!0);return o.jsx(p,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function ya(){const[a,e]=r.useState(!0);return o.jsx(p,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function wa(){const[a,e]=r.useState(!0),[t,c]=r.useState(0);return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:b,children:t})]}),o.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>c(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>c(l=>l+1)}]})]})}function ba(){const[a,e]=r.useState(!1);return o.jsxs(x,{align:"start",children:[o.jsx("p",{style:w,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(de,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(p,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function va(){const[a,e]=r.useState(!1),[t,c]=r.useState(!0);return o.jsxs(x,{align:"start",children:[o.jsx("p",{style:w,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:w,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:b,children:t?"enabled":"disabled"})]}),o.jsx(de,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>c(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function ga(){const[a,e]=r.useState(!0),[t,c]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:b,children:a?"open":"closed"})]}),o.jsx(p,{open:a,onOpenChange:e,onQueryChange:c,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function xa(){const[a,e]=r.useState(!0),[t,c]=r.useState(""),[l,m]=r.useState(0);return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:b,children:a?"open":"closed"})]}),o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:b,children:l})]}),o.jsx(p,{open:a,onOpenChange:e,onQueryChange:c,onEscapeKeyDown:()=>m(h=>h+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function ha(){const[a,e]=r.useState(!0),[t,c]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:b,children:t||"N/A"})]}),o.jsx(p,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:c,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function fa(){const[a,e]=r.useState(!0),[t,c]=r.useState("none");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:b,children:t})]}),o.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>c("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>c("send-report")}]})]})}function ka(){const[a,e]=r.useState(!0);return o.jsx(p,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Ba(){const[a,e]=r.useState(!0),[t,c]=r.useState(0),[l,m]=r.useState("");return o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:b,children:t})]}),o.jsxs("p",{style:w,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:b,children:l||"N/A"})]}),o.jsxs("p",{style:w,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:b,children:a?"open":"closed"})]}),o.jsx(p,{open:a,onOpenChange:e,onQueryChange:m,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>c(h=>h+1)}]})]})}function Ta(){const[a,e]=r.useState(!0),[t,c]=r.useState(0);return r.useEffect(()=>{const l=m=>{m.key==="Escape"&&m.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(x,{children:[o.jsxs("p",{style:w,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:b,children:t})]}),o.jsx(p,{open:a,onOpenChange:e,onEscapeKeyDown:()=>c(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}const K={render:()=>o.jsx(Gt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const c=e.getByRole("option",{name:"Publish Release"});await n(c).toHaveAttribute("aria-disabled","true"),await n(c).toHaveAttribute("tabindex","-1")}},U={render:()=>o.jsx(ia,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await ve(()=>{n(t).toHaveFocus()}),await i.type(t,"run"),await n(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},V={render:()=>o.jsx(la,{})},M={render:()=>o.jsx(zt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},F={render:()=>o.jsx(da,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await n(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(t.body),await n(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Close dialog"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},G={render:()=>o.jsx(zt,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await n(l).toBeTruthy(),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",l),await i.clear(t),await i.type(t,"no-match"),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).not.toHaveAttribute("aria-controls"),await i.clear(t);const m=await e.findByRole("listbox",{name:"Command results"});await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",m.getAttribute("id"))}},z={render:()=>o.jsx(p,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},Q={render:()=>o.jsx(p,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await n(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},_={render:()=>o.jsx(ua,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await n(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const c of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:c,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await n(l.defaultPrevented).toBe(!1)}}},W={render:()=>o.jsx(ma,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const c=e.getByRole("option",{name:"Publish Release"});await n(c).toHaveAttribute("aria-disabled","true"),await i.click(c),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("executed-count")).toHaveTextContent("0")}},J={render:()=>o.jsx(Gt,{}),play:async({canvasElement:a})=>{const t=await y(a.ownerDocument.body).findByRole("option",{name:"Create Spec"}),c=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(c),n(c.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),n(l.defaultPrevented).toBe(!0)}},X={render:()=>o.jsx(pa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await n(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},Y={render:()=>o.jsx(ya,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox");await n(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},Z={render:()=>o.jsx(wa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),k.keyDown(t,{key:"Enter",repeat:!1}),await ve(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),k.keyDown(t,{key:"Enter",repeat:!0}),await ve(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ee={render:()=>o.jsx(ba,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await n(t).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await n(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await n(t).toBeInTheDocument()}},te={render:()=>o.jsx(va,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=a.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),k.pointerDown(t.body),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const c=e.getByRole("combobox",{name:"Search commands"});await i.clear(c),await i.type(c,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await n(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},ae={render:()=>o.jsx(ga,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("query-value")).toHaveTextContent("N/A"),await n(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("open-state")).toHaveTextContent("closed")}},ne={render:()=>o.jsx(xa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),k.keyDown(t,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},oe={render:()=>o.jsx(ha,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),k.keyDown(t,{key:"Escape",ctrlKey:!0}),k.keyDown(t,{key:"Escape",altKey:!0}),k.keyDown(t,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},se={render:()=>o.jsx(fa,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const c=t.getAttribute("aria-activedescendant");n(c).toBeTruthy();const l=a.ownerDocument.getElementById(c);await n(l).toBeInTheDocument(),await n(l).toHaveAttribute("role","option"),await n(l).not.toHaveAttribute("aria-disabled","true"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},re={render:()=>o.jsx(ka,{}),play:async({canvasElement:a})=>{const t=await y(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.keyboard("{PageDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),k.keyDown(t,{key:"PageDown",ctrlKey:!0}),k.keyDown(t,{key:"End",metaKey:!0}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),await i.keyboard("{PageUp}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},ce={render:()=>o.jsx(Ba,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.type(t,"deploy"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),k.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),k.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),k.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await n(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},ie={render:()=>o.jsx(Ta,{}),play:async({canvasElement:a})=>{const e=y(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}};var Pe,Se,Ae;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ae=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var He,je,Oe;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Oe=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var qe,Le,Ne;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(Ne=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var $e,Ke,Ue;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ue=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var Ve,Me,Fe;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Fe=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ge,ze,Qe;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Qe=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Qe.source}}};var _e,We,Je;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Je=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=Q.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,at;_.parameters={..._.parameters,docs:{...(et=_.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=_.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,ot,st;W.parameters={...W.parameters,docs:{...(nt=W.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(ot=W.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,ct,it;J.parameters={...J.parameters,docs:{...(rt=J.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(ct=J.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var lt,dt,ut;X.parameters={...X.parameters,docs:{...(lt=X.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ut=(dt=X.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,pt,yt;Y.parameters={...Y.parameters,docs:{...(mt=Y.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(yt=(pt=Y.parameters)==null?void 0:pt.docs)==null?void 0:yt.source}}};var wt,bt,vt;Z.parameters={...Z.parameters,docs:{...(wt=Z.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(vt=(bt=Z.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var gt,xt,ht;ee.parameters={...ee.parameters,docs:{...(gt=ee.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ht=(xt=ee.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var ft,kt,Bt;te.parameters={...te.parameters,docs:{...(ft=te.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Bt=(kt=te.parameters)==null?void 0:kt.docs)==null?void 0:Bt.source}}};var Tt,Et,Ct;ae.parameters={...ae.parameters,docs:{...(Tt=ae.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Ct=(Et=ae.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var Dt,Rt,It;ne.parameters={...ne.parameters,docs:{...(Dt=ne.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  render: () => <EscapeRepeatGuardPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "release");
    await expect(canvas.getByTestId("escape-repeat-query")).toHaveTextContent("release");
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("open");
    fireEvent.keyDown(input, {
      key: "Escape",
      repeat: true
    });
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-repeat-query")).toHaveTextContent("release");
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("open");
    await expect(canvas.getByTestId("escape-repeat-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-repeat-query")).toHaveTextContent("N/A");
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("open");
    await expect(canvas.getByTestId("escape-repeat-calls")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
    await expect(canvas.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed");
    await expect(canvas.getByTestId("escape-repeat-calls")).toHaveTextContent("1");
  }
}`,...(It=(Rt=ne.parameters)==null?void 0:Rt.docs)==null?void 0:It.source}}};var Pt,St,At;oe.parameters={...oe.parameters,docs:{...(Pt=oe.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
    fireEvent.keyDown(input, {
      key: "Escape",
      ctrlKey: true
    });
    fireEvent.keyDown(input, {
      key: "Escape",
      altKey: true
    });
    fireEvent.keyDown(input, {
      key: "Escape",
      metaKey: true
    });
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("release");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("N/A");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter");
  }
}`,...(At=(St=oe.parameters)==null?void 0:St.docs)==null?void 0:At.source}}};var Ht,jt,Ot;se.parameters={...se.parameters,docs:{...(Ht=se.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ot=(jt=se.parameters)==null?void 0:jt.docs)==null?void 0:Ot.source}}};var qt,Lt,Nt;re.parameters={...re.parameters,docs:{...(qt=re.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Nt=(Lt=re.parameters)==null?void 0:Lt.docs)==null?void 0:Nt.source}}};var $t,Kt,Ut;ce.parameters={...ce.parameters,docs:{...($t=ce.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Ut=(Kt=ce.parameters)==null?void 0:Kt.docs)==null?void 0:Ut.source}}};var Vt,Mt,Ft;ie.parameters={...ie.parameters,docs:{...(Vt=ie.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Ft=(Mt=ie.parameters)==null?void 0:Mt.docs)==null?void 0:Ft.source}}};const Na=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","CloseReasonTelemetry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","DisabledOnlyResults","DisabledCommandGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","PersistentSelection","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","ImeCompositionGuard","EscapePreemptedByGlobalHandler"];export{V as AiInteractionFlow,F as CloseReasonTelemetry,W as DisabledCommandGuard,_ as DisabledOnlyResults,G as EmptyStateAriaControlsLifecycle,ae as EscapeClearsQueryFirst,ie as EscapePreemptedByGlobalHandler,ne as EscapeRepeatGuard,oe as EscapeShortcutHintPrecision,te as GuardedDismissEvents,Y as IconOnlyCommandNaming,ce as ImeCompositionGuard,Q as LocalizedDialogCopy,z as LocalizedResultsLabel,ee as NonDismissible,U as OpenFromTriggerKeyboardFirst,J as OptionMouseDownPolicy,re as PagedKeyboardNavigation,Z as PersistentSelection,M as QueryTelemetry,se as RefinedSearchKeepsActiveCommand,K as SearchCommands,X as TextValueAndAccentSearch,Na as __namedExportsOrder,La as default};
