import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as O}from"./Button-rBVi27TD.js";import{P as fa}from"./Popover-BXRvYEtZ.js";import{D as Ba}from"./Dialog-BiLcKCgO.js";import{I as Ea}from"./Input-ueoPJ8SP.js";import{within as u,userEvent as i,expect as n,fireEvent as h,waitFor as L}from"./index-DgAF9SIF.js";import{b as v,s as y,a as g}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-0MVldSzJ.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:a,onOpenChange:e,commands:t,title:r="Command Palette",description:l="Quickly search and execute workspace actions.",ariaLabel:p,ariaLabelledBy:b,searchAriaLabel:f="Search commands",resultsAriaLabel:K="Command results",closeOnSelect:Ke=!0,clearQueryOnEscape:Ie=!0,closeOnEscape:F=!0,closeOnOutsidePointer:Fe=!0,onEscapeKeyDown:Ae,onPointerDownOutside:He,closeLabel:ia,placeholder:la="Search commands...",loading:D=!1,loadingContent:M="Loading commands...",emptyMessage:Me="No commands found.",onQueryChange:C,onCloseReason:R,getResultsStatusText:$e=Da}){const[S,Pe]=c.useState(""),[$,T]=c.useState(0),da=c.useRef(null),q=c.useRef(null),U=c.useRef(null),Ue=c.useRef(a);c.useRef(null),c.useRef(null),c.useRef(null);const j=c.useId(),Ve=c.useId(),Ge=c.useRef(null),ua=P(f,"Search commands"),ma=P(K,"Command results"),pa=P(ia,"Close dialog"),ze=P(b),ya=ze===void 0?P(p):void 0,Qe=c.useMemo(()=>Ra(M),[M]),wa=tt(M)?M:"Loading commands...",ga=tt(Me)?Me:"No commands found.",V=c.useCallback(s=>{U.current=s,R==null||R(s)},[R]),_e=c.useCallback(s=>{V(s),e(!1),U.current=null},[V,e]),ba=c.useCallback(s=>{!s&&a&&U.current===null&&(R==null||R("close-button")),U.current=null,e(s)},[R,e,a]);c.useEffect(()=>{!a&&Ue.current&&(Pe(s=>(s.length>0&&(C==null||C("")),"")),T(0)),Ue.current=a},[C,a]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]);const Oe=c.useMemo(()=>Ze(S.trim()),[S]),w=c.useMemo(()=>Oe?t.filter(s=>{const k=[Ca(s),...s.keywords??[]].join(" ");return Ze(k).includes(Oe)}):t,[t,Oe]),va=c.useMemo(()=>{const s=new Map;return w.map((d,k)=>{const E=s.get(d.key)??0;return s.set(d.key,E+1),E===0?d.key:`${d.key}__dup-${k}`})},[w]),G=c.useMemo(()=>w.reduce((s,d)=>d.disabled?s:s+1,0),[w]),I=!D&&G>1,We=!D&&G>0,je=!D&&w.length>0,ha=c.useMemo(()=>{const s=[];return I&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp"),We&&s.push("Enter"),(F||Ie&&S.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[We,I,Ie,F,S.length]),xa=c.useMemo(()=>D?Qe:$e({query:S,visibleCount:w.length,enabledCount:G,totalCount:t.length}),[t.length,G,w.length,$e,D,S,Qe]),A=c.useMemo(()=>w.reduce((s,d,k)=>(d.disabled||s.push(k),s),[]),[w]),H=A[0]??-1,Je=A[A.length-1]??-1,B=c.useMemo(()=>{if($<0)return-1;const s=w[$];return!s||s.disabled?-1:$},[$,w]);c.useEffect(()=>{var d;if(w.length===0){q.current=null,T(-1);return}const s=q.current;if(s){const k=w.findIndex(E=>!E.disabled&&E.key===s);if(k>=0){T(k);return}}T(H),q.current=H>=0?((d=w[H])==null?void 0:d.key)??null:null},[w,H]),c.useEffect(()=>{var s;if(B<0){q.current=null;return}q.current=((s=w[B])==null?void 0:s.key)??null},[w,B]),c.useEffect(()=>{if(!a||B<0)return;const s=Ge.current;if(!s)return;const d=s.ownerDocument.getElementById(`${j}-option-${B}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[j,a,B]);const qe=c.useCallback(s=>{const d=w[s];!d||d.disabled||d.onSelect&&(d.onSelect(),Ke&&_e("item-select"))},[Ke,_e,w]),Xe=s=>{var k;if(w.length===0)return;let d=B<0?s===1?-1:0:B;for(let E=0;E<w.length;E+=1)if(d=(d+s+w.length)%w.length,!((k=w[d])!=null&&k.disabled)){T(d);return}},Ye=s=>{if(A.length===0)return;const d=A.indexOf(B);if(d<0){T(s===1?H:Je);return}const k=Math.min(A.length-1,Math.max(0,d+s*5));T(A[k]??H)};return o.jsx(Ba,{open:a,onOpenChange:ba,title:r,description:l,ariaLabel:ya,ariaLabelledBy:ze,closeLabel:pa,size:"md",closeOnEscape:F,closeOnOutsidePointer:Fe,onEscapeKeyDown:s=>{Ae==null||Ae(s),!(s.defaultPrevented||!F)&&V("escape-key")},onPointerDownOutside:s=>{He==null||He(s),!(s.defaultPrevented||!Fe)&&V("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(Ea,{ref:da,"data-autofocus":"",role:"combobox","aria-busy":D||void 0,"aria-expanded":je,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":je?j:void 0,"aria-activedescendant":!D&&B>=0?`${j}-option-${B}`:void 0,"aria-describedby":Ve,"aria-keyshortcuts":ha,placeholder:la,value:S,onChange:s=>{Pe(s.target.value),C==null||C(s.target.value)},onKeyDown:s=>{if(!Ta(s)&&!s.defaultPrevented&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;Ie&&S.length>0&&(s.preventDefault(),Pe(""),C==null||C(""));return}if(s.key==="ArrowDown"){if(!I)return;s.preventDefault(),Xe(1);return}if(s.key==="ArrowUp"){if(!I)return;s.preventDefault(),Xe(-1);return}if(s.key==="Home"){if(!I||!et(s))return;s.preventDefault(),T(H);return}if(s.key==="End"){if(!I||!et(s))return;s.preventDefault(),T(Je);return}if(s.key==="PageDown"){if(!I)return;s.preventDefault(),Ye(1);return}if(s.key==="PageUp"){if(!I)return;s.preventDefault(),Ye(-1);return}if(s.key==="Enter"&&!D&&B>=0){if(s.preventDefault(),s.repeat)return;qe(B)}}},"aria-label":ua}),o.jsx("p",{id:Ve,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:xa}),D?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:wa}):je?o.jsx("div",{id:j,ref:Ge,role:"listbox","aria-label":ma,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:w.map((s,d)=>{const k=d===B,E=P(s.ariaLabelledBy),ka=E?void 0:P(s.ariaLabel);return o.jsx("div",{id:`${j}-option-${d}`,role:"option","aria-selected":k,"aria-disabled":s.disabled||void 0,"aria-labelledby":E,"aria-label":ka,"aria-keyshortcuts":s.disabled?void 0:"Enter Space","aria-posinset":d+1,"aria-setsize":w.length,tabIndex:-1,onPointerDown:x=>{x.pointerType==="mouse"||!Sa(x.button)||x.ctrlKey||x.preventDefault()},onMouseDown:x=>{x.button!==0||x.ctrlKey||x.preventDefault()},onMouseEnter:()=>{s.disabled||T(d)},onClick:()=>{s.disabled||qe(d)},onKeyDown:x=>{if(!s.disabled&&!x.defaultPrevented&&!(x.altKey||x.ctrlKey||x.metaKey)&&(x.key==="Enter"||x.key===" "||x.key==="Space"||x.key==="Spacebar")){if(x.preventDefault(),x.repeat)return;qe(d)}},style:{border:"1px solid var(--aurora-border-default)",background:k?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},va[d]??`${s.key}__dup-${d}`)})}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:ga})]})})}function Ca(a){if(typeof a.textValue=="string"){const e=N(a.textValue);if(e.length>0)return e}return N(Se(a.label))}function Ze(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function Ta(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function et(a){if(a.key!=="Home"&&a.key!=="End")return!0;const e=a.currentTarget,t=e.selectionStart,r=e.selectionEnd;return t===null||r===null?!0:t!==r?!1:a.key==="Home"?t===0:r===e.value.length}function Da({query:a,visibleCount:e,enabledCount:t,totalCount:r}){const l=a.trim();return l.length===0?t!==r?`${t} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function Ra(a){const e=N(Se(a));return e.length>0?e:"Loading commands..."}function tt(a){return a==null||typeof a=="boolean"?!1:typeof a=="string"?a.trim().length>0:!0}function Se(a){if(typeof a=="string")return a;if(typeof a=="number")return String(a);if(Array.isArray(a))return N(a.map(t=>Se(t)).filter(t=>t.length>0).join(" "));if(!c.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?N(e["aria-label"]):Se(e.children)}function P(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function Sa(a){return typeof a!="number"||a<=0}function N(a){return a.replace(/\s+/g," ").trim()}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:`| "close-button"
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
}`,computed:!1}}}};const Ne=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],wo={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:Ne}};function Le(a,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),a.dispatchEvent(t)}function ra(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:Ne,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Ia(){const[a,e]=c.useState(!1),[t,r]=c.useState("none");return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:g,children:t})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>r("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>r("Open Theme Pack")}]})]})}function Aa(){const[a,e]=c.useState(!0),[t,r]=c.useState("None"),l=Ne.map(p=>({...p,onSelect:()=>r(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last AI action: ",o.jsx("strong",{style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:l})]})}function ca(){const[a,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:g,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"],onSelect:()=>{}}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:l,visibleCount:p,enabledCount:b})=>l.trim().length===0?"Command search ready.":`${b}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function Ha(){const[a,e]=c.useState(!0),[t,r]=c.useState(!0),[l,p]=c.useState(0);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:g,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>r(b=>!b),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(O,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(m,{open:a,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>p(b=>b+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>p(b=>b+1)}]})]})}function Pa(){const[a,e]=c.useState(!0),[t,r]=c.useState("none"),[l,p]=c.useState("N/A"),b=c.useCallback(f=>{p(K=>K==="N/A"?f:`${K} -> ${f}`)},[]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:g,children:t})]}),o.jsxs("p",{style:y,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:g,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(m,{open:a,onOpenChange:f=>{e(f),f||b("open:false")},onCloseReason:f=>{r(f),b(`reason:${f}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>b("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>b("select")}]})]})}function Oa(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function ja(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}]})}function qa(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(l=>l+1)}],placeholder:"Try searching publish..."})]})}function La(){const[a,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"missing-handler-close-reason",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,onCloseReason:l=>r(l),commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"]},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r("item-select")}],placeholder:"Try searching run..."})]})}function Na(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Ka(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function Fa(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("h3",{id:"deploy-command-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Deploy Release"}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Fallback deploy command",ariaLabelledBy:"deploy-command-heading",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})]})}function Ma(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(l=>l+1)}]})]})}function $a(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function Ua(){const[a,e]=c.useState(!1);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Va(){const[a,e]=c.useState(!1),[t,r]=c.useState(!0);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:y,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:g,children:t?"enabled":"disabled"})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function Ga(){const[a,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:g,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:g,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function za(){const[a,e]=c.useState(!0),[t,r]=c.useState(""),[l,p]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:g,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:g,children:a?"open":"closed"})]}),o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:g,children:l})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:r,onEscapeKeyDown:()=>p(b=>b+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function Qa(){const[a,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:g,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function _a(){const[a,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function Wa(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function Ja(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("p",{style:y,children:"With caret in the middle of query text, Home/End should keep native cursor behavior and avoid overriding active command focus."}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"release-checklist",label:"Release Checklist",keywords:["release"]},{key:"release-notes",label:"Release Notes",keywords:["release"]},{key:"release-pipeline",label:"Release Pipeline",keywords:["release"]}]})]})}function Xa(){const[a,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:g,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:g,children:l||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:g,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(b=>b+1)}]})]})}function Ya(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return c.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:g,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,onEscapeKeyDown:()=>r(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function Za(){const[a,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return c.useEffect(()=>{const b=f=>{(f.key==="Enter"||f.key==="Escape")&&f.preventDefault()};return document.addEventListener("keydown",b,!0),()=>{document.removeEventListener("keydown",b,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-preempt-selection-count",style:g,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-preempt-query-value",style:g,children:l||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:p,commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>r(b=>b+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function eo(){const[a,e]=c.useState(!1);return o.jsx(v,{align:"start",children:o.jsx(fa,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...y},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(m,{open:a,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const z={render:()=>o.jsx(ra,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await n(r).toHaveAttribute("aria-disabled","true"),await n(r).toHaveAttribute("tabindex","-1")}},Q={render:()=>o.jsx(Ia,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await L(()=>{n(t).toHaveFocus()}),await i.type(t,"run"),await n(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},_={render:()=>o.jsx(Aa,{})},W={render:()=>o.jsx(ca,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},J={render:()=>o.jsx(Ha,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await n(t).toHaveAttribute("aria-busy","true"),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).toHaveAttribute("aria-keyshortcuts","Escape"),await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Finish loading commands"})),await i.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await n(t).not.toHaveAttribute("aria-busy"),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},X={args:{open:!0,loading:!0,loadingContent:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings"}]},play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands..."),await n(e.getByRole("status")).toHaveTextContent("Loading commands...")}},Y={args:{open:!0,emptyMessage:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"no-match"),await n(e.getByText("No commands found.")).toBeInTheDocument()}},Z={args:{open:!0,loading:!0,loadingContent:0,onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("0"),await n(e.getByRole("status")).toHaveTextContent("0")}},ee={render:()=>o.jsx(Pa,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=a.ownerDocument;await n(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(t.body),await n(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"}));const r=e.getByRole("dialog",{name:"Command Palette"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close dialog"});await n(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.click(l),await n(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},te={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),r=await e.findByRole("button",{name:"Close dialog"});await i.click(t),await n(t).toHaveFocus(),await i.tab({shift:!0}),await n(r).toHaveFocus(),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),h.mouseDown(r,{button:0,ctrlKey:!0}),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},ne={render:()=>o.jsx(ca,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await n(l).toBeTruthy(),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",l),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await i.type(t,"no-match"),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).not.toHaveAttribute("aria-controls"),await n(t).not.toHaveAttribute("aria-activedescendant"),await i.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",p.getAttribute("id")),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},ae={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},oe={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await n(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},se={render:()=>o.jsxs(v,{align:"start",children:[o.jsx("h3",{id:"command-palette-heading",style:{margin:0},children:"AI release command center"}),o.jsx(m,{open:!0,onOpenChange:()=>{},title:o.jsx("span",{"aria-hidden":!0,children:"⌘"}),ariaLabel:"Fallback AI command center",ariaLabelledBy:"command-palette-heading",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]})]}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("dialog",{name:"AI release command center"});await n(t).toHaveAttribute("aria-labelledby","command-palette-heading"),await n(t).not.toHaveAttribute("aria-label")}},re={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:0,description:0,commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),r=(await e.findByRole("dialog",{name:"0"})).getAttribute("aria-describedby");await n(r).toBeTruthy(),await n(e.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},ce={render:()=>o.jsx(Oa,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await n(t).toHaveAttribute("aria-keyshortcuts","Escape");for(const r of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:r,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await n(l.defaultPrevented).toBe(!1)}}},ie={render:()=>o.jsx(ja,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape");const r=t.getAttribute("aria-activedescendant");n(r).toBeTruthy();for(const l of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const p=new KeyboardEvent("keydown",{key:l,bubbles:!0,cancelable:!0});t.dispatchEvent(p),await n(p.defaultPrevented).toBe(!1)}await n(t.getAttribute("aria-activedescendant")).toBe(r)}},le={render:()=>o.jsx(qa,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await n(r).toHaveAttribute("aria-disabled","true"),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await i.click(r),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("executed-count")).toHaveTextContent("0")}},de={render:()=>o.jsx(La,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"run"),await i.click(e.getByRole("option",{name:"Run E2E Smoke"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("missing-handler-close-reason")).toHaveTextContent("none")}},ue={render:()=>o.jsx(ra,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("option",{name:"Create Spec"}),r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(r),n(r.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),n(l.defaultPrevented).toBe(!0)}},me={render:()=>o.jsx(Na,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await n(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},pe={render:()=>o.jsx(Ka,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox");await n(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ye={render:()=>o.jsx(Fa,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await n(r).toHaveAttribute("aria-labelledby","deploy-command-heading"),await n(r).not.toHaveAttribute("aria-label"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},we={render:()=>o.jsx(Ma,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),h.keyDown(t,{key:"Enter",repeat:!1}),await L(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),h.keyDown(t,{key:"Enter",repeat:!0}),await L(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ge={render:()=>o.jsx($a,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await i.keyboard("{Control>}{Enter}{/Control}"),await i.keyboard("{Meta>}{Space}{/Meta}"),h.keyDown(t,{key:"Enter",repeat:!0}),h.keyDown(t,{key:"Spacebar",altKey:!0}),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},be={render:()=>o.jsx(Ua,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await n(t).toBeInTheDocument(),await n(t).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await n(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await n(t).toBeInTheDocument()}},ve={render:()=>o.jsx(Va,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=a.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),h.pointerDown(t.body),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await i.clear(r),await i.type(r,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await n(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},he={render:()=>o.jsx(Ga,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("query-value")).toHaveTextContent("N/A"),await n(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("open-state")).toHaveTextContent("closed")}},xe={render:()=>o.jsx(za,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),h.keyDown(t,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},ke={render:()=>o.jsx(Qa,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),h.keyDown(t,{key:"Escape",ctrlKey:!0}),h.keyDown(t,{key:"Escape",altKey:!0}),h.keyDown(t,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),h.keyDown(t,{key:"Escape",shiftKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},fe={render:()=>o.jsx(_a,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const r=t.getAttribute("aria-activedescendant");n(r).toBeTruthy();const l=a.ownerDocument.getElementById(r);await n(l).toBeInTheDocument(),await n(l).toHaveAttribute("role","option"),await n(l).not.toHaveAttribute("aria-disabled","true"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Be={render:()=>o.jsx(Wa,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.keyboard("{PageDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),h.keyDown(t,{key:"PageDown",ctrlKey:!0}),h.keyDown(t,{key:"End",metaKey:!0}),h.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),h.keyDown(t,{key:"ArrowUp",metaKey:!0}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),await i.keyboard("{PageUp}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},Ee={render:()=>o.jsx(Ja,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.type(t,"release"),await i.keyboard("{ArrowDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),t.setSelectionRange(2,2),h.keyDown(t,{key:"Home"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),h.keyDown(t,{key:"End"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"))}},Ce={render:()=>o.jsx(Xa,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.type(t,"deploy"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),h.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Le(t,"Escape"),Le(t,"ArrowDown"),Le(t,"Enter"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await n(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},Te={render:()=>o.jsx(Ya,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},De={render:()=>o.jsx(Za,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await n(e.getByTestId("command-preempt-selection-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Re={render:()=>o.jsx(eo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await i.click(t),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Open nested palette"})),await n(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await L(()=>{n(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await L(()=>{n(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await n(t).toHaveFocus()}};var nt,at,ot;z.parameters={...z.parameters,docs:{...(nt=z.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(at=z.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var st,rt,ct;Q.parameters={...Q.parameters,docs:{...(st=Q.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(rt=Q.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var it,lt,dt;_.parameters={..._.parameters,docs:{...(it=_.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(dt=(lt=_.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;W.parameters={...W.parameters,docs:{...(ut=W.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(mt=W.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,gt;J.parameters={...J.parameters,docs:{...(yt=J.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <LoadingStatePalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    let input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await expect(canvas.getByTestId("loading-selection-count")).toHaveTextContent("0");
    await expect(input).toHaveAttribute("aria-busy", "true");
    await expect(input).toHaveAttribute("aria-expanded", "false");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Escape");
    await expect(canvas.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands...");
    await expect(canvas.queryByRole("listbox", {
      name: "Command results"
    })).not.toBeInTheDocument();
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.getByTestId("loading-selection-count")).toHaveTextContent("0");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Command Palette"
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Finish loading commands"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen loading palette"
    }));
    input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await expect(input).not.toHaveAttribute("aria-busy");
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter Escape");
    await expect(canvas.getByRole("listbox", {
      name: "Command results"
    })).toBeInTheDocument();
    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(canvas.getByTestId("loading-selection-count")).toHaveTextContent("1");
  }
}`,...(gt=(wt=J.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var bt,vt,ht;X.parameters={...X.parameters,docs:{...(bt=X.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: true,
    loadingContent: "   ",
    onOpenChange: () => {},
    commands: [{
      key: "open-settings",
      label: "Open Settings"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands...");
    await expect(canvas.getByRole("status")).toHaveTextContent("Loading commands...");
  }
}`,...(ht=(vt=X.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var xt,kt,ft;Y.parameters={...Y.parameters,docs:{...(xt=Y.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    open: true,
    emptyMessage: "   ",
    onOpenChange: () => {},
    commands: [{
      key: "open-settings",
      label: "Open Settings",
      keywords: ["settings"]
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.getByText("No commands found.")).toBeInTheDocument();
  }
}`,...(ft=(kt=Y.parameters)==null?void 0:kt.docs)==null?void 0:ft.source}}};var Bt,Et,Ct;Z.parameters={...Z.parameters,docs:{...(Bt=Z.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    open: true,
    loading: true,
    loadingContent: 0,
    onOpenChange: () => {},
    commands: [{
      key: "open-settings",
      label: "Open Settings",
      keywords: ["settings"]
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByTestId("command-palette-loading-content")).toHaveTextContent("0");
    await expect(canvas.getByRole("status")).toHaveTextContent("0");
  }
}`,...(Ct=(Et=Z.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var Tt,Dt,Rt;ee.parameters={...ee.parameters,docs:{...(Tt=ee.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
    doc.body.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      button: 0,
      ctrlKey: true,
      pointerType: "mouse"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("escape-key");
    await userEvent.click(doc.body);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false");
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen Palette"
    }));
    const dialog = canvas.getByRole("dialog", {
      name: "Command Palette"
    });
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute("aria-keyshortcuts", "Escape");
    const closeButton = canvas.getByRole("button", {
      name: "Close dialog"
    });
    await expect(closeButton).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await userEvent.click(closeButton);
    await expect(canvas.getByTestId("command-close-reason")).toHaveTextContent("close-button");
    await expect(canvas.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false");
  }
}`,...(Rt=(Dt=ee.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var St,It,At;te.parameters={...te.parameters,docs:{...(St=te.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: () => <CommandPalette open onOpenChange={() => {}} title="Command Palette" description="Shift+Tab from search input should restore close-button focus ring fallback." commands={[{
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
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    const closeButton = await canvas.findByRole("button", {
      name: "Close dialog"
    });
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(closeButton).toHaveFocus();
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
    fireEvent.mouseDown(closeButton, {
      button: 0,
      ctrlKey: true
    });
    await expect(closeButton.getAttribute("style")).toContain("var(--aurora-focus-ring)");
  }
}`,...(At=(It=te.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Ht,Pt,Ot;ne.parameters={...ne.parameters,docs:{...(Ht=ne.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
    await userEvent.clear(input);
    await userEvent.type(input, "no-match");
    await expect(canvas.queryByRole("listbox", {
      name: "Command results"
    })).not.toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-expanded", "false");
    await expect(input).not.toHaveAttribute("aria-controls");
    await expect(input).not.toHaveAttribute("aria-activedescendant");
    await userEvent.clear(input);
    const restoredListbox = await canvas.findByRole("listbox", {
      name: "Command results"
    });
    await expect(input).toHaveAttribute("aria-expanded", "true");
    await expect(input).toHaveAttribute("aria-controls", restoredListbox.getAttribute("id"));
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  }
}`,...(Ot=(Pt=ne.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var jt,qt,Lt;ae.parameters={...ae.parameters,docs:{...(jt=ae.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Lt=(qt=ae.parameters)==null?void 0:qt.docs)==null?void 0:Lt.source}}};var Nt,Kt,Ft;oe.parameters={...oe.parameters,docs:{...(Nt=oe.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ft=(Kt=oe.parameters)==null?void 0:Kt.docs)==null?void 0:Ft.source}}};var Mt,$t,Ut;se.parameters={...se.parameters,docs:{...(Mt=se.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame align="start">
      <h3 id="command-palette-heading" style={{
      margin: 0
    }}>
        AI release command center
      </h3>
      <CommandPalette open onOpenChange={() => {}} title={<span aria-hidden>⌘</span>} ariaLabel="Fallback AI command center" ariaLabelledBy="command-palette-heading" commands={[{
      key: "create-spec",
      label: "Create Spec",
      keywords: ["doc", "plan"]
    }, {
      key: "run-e2e",
      label: "Run E2E Smoke",
      keywords: ["test"]
    }]} />
    </StoryFullscreenFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const dialog = await canvas.findByRole("dialog", {
      name: "AI release command center"
    });
    await expect(dialog).toHaveAttribute("aria-labelledby", "command-palette-heading");
    await expect(dialog).not.toHaveAttribute("aria-label");
  }
}`,...(Ut=($t=se.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Vt,Gt,zt;re.parameters={...re.parameters,docs:{...(Vt=re.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  render: () => <CommandPalette open onOpenChange={() => {}} title={0} description={0} commands={[{
    key: "create-spec",
    label: "Create Spec",
    keywords: ["doc", "plan"]
  }, {
    key: "run-e2e",
    label: "Run E2E Smoke",
    keywords: ["test"]
  }]} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const dialog = await canvas.findByRole("dialog", {
      name: "0"
    });
    const describedById = dialog.getAttribute("aria-describedby");
    await expect(describedById).toBeTruthy();
    await expect(canvas.getAllByText("0").length).toBeGreaterThanOrEqual(2);
  }
}`,...(zt=(Gt=re.parameters)==null?void 0:Gt.docs)==null?void 0:zt.source}}};var Qt,_t,Wt;ce.parameters={...ce.parameters,docs:{...(Qt=ce.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Wt=(_t=ce.parameters)==null?void 0:_t.docs)==null?void 0:Wt.source}}};var Jt,Xt,Yt;ie.parameters={...ie.parameters,docs:{...(Jt=ie.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  render: () => <SingleActionableShortcutHintPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter Escape");
    const activeDescendant = input.getAttribute("aria-activedescendant");
    expect(activeDescendant).toBeTruthy();
    for (const key of ["ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp"]) {
      const keyEvent = new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true
      });
      input.dispatchEvent(keyEvent);
      await expect(keyEvent.defaultPrevented).toBe(false);
    }
    await expect(input.getAttribute("aria-activedescendant")).toBe(activeDescendant);
  }
}`,...(Yt=(Xt=ie.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Zt,en,tn;le.parameters={...le.parameters,docs:{...(Zt=le.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
    await expect(disabledOption).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.click(disabledOption);
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("executed-count")).toHaveTextContent("0");
  }
}`,...(tn=(en=le.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,on;de.parameters={...de.parameters,docs:{...(nn=de.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: () => <MissingSelectHandlerGuardPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.clear(input);
    await userEvent.type(input, "run");
    await userEvent.click(canvas.getByRole("option", {
      name: "Run E2E Smoke"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("missing-handler-close-reason")).toHaveTextContent("none");
  }
}`,...(on=(an=de.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var sn,rn,cn;ue.parameters={...ue.parameters,docs:{...(sn=ue.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(cn=(rn=ue.parameters)==null?void 0:rn.docs)==null?void 0:cn.source}}};var ln,dn,un;me.parameters={...me.parameters,docs:{...(ln=me.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(un=(dn=me.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var mn,pn,yn;pe.parameters={...pe.parameters,docs:{...(mn=pe.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(yn=(pn=pe.parameters)==null?void 0:pn.docs)==null?void 0:yn.source}}};var wn,gn,bn;ye.parameters={...ye.parameters,docs:{...(wn=ye.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  render: () => <IconOnlyCommandLabelledByPalette />,
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    const deployOption = root.getByRole("option", {
      name: "Deploy Release"
    });
    await expect(deployOption).toHaveAttribute("aria-labelledby", "deploy-command-heading");
    await expect(deployOption).not.toHaveAttribute("aria-label");
    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", {
      name: "Rollback Release"
    })).toBeInTheDocument();
    await expect(root.queryByRole("option", {
      name: "Deploy Release"
    })).not.toBeInTheDocument();
  }
}`,...(bn=(gn=ye.parameters)==null?void 0:gn.docs)==null?void 0:bn.source}}};var vn,hn,xn;we.parameters={...we.parameters,docs:{...(vn=we.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(xn=(hn=we.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};var kn,fn,Bn;ge.parameters={...ge.parameters,docs:{...(kn=ge.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  render: () => <OptionActivationKeyGuardPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const option = await canvas.findByRole("option", {
      name: "Run Lint"
    });
    option.focus();
    await expect(option).toHaveAttribute("aria-keyshortcuts", "Enter Space");
    await expect(canvas.getByTestId("option-activation-count")).toHaveTextContent("0");
    await userEvent.keyboard("{Control>}{Enter}{/Control}");
    await userEvent.keyboard("{Meta>}{Space}{/Meta}");
    fireEvent.keyDown(option, {
      key: "Enter",
      repeat: true
    });
    fireEvent.keyDown(option, {
      key: "Spacebar",
      altKey: true
    });
    await expect(canvas.getByTestId("option-activation-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("option-activation-count")).toHaveTextContent("1");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(Bn=(fn=ge.parameters)==null?void 0:fn.docs)==null?void 0:Bn.source}}};var En,Cn,Tn;be.parameters={...be.parameters,docs:{...(En=be.parameters)==null?void 0:En.docs,source:{originalSource:`{
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
    await expect(dialog).not.toHaveAttribute("aria-keyshortcuts");
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
}`,...(Tn=(Cn=be.parameters)==null?void 0:Cn.docs)==null?void 0:Tn.source}}};var Dn,Rn,Sn;ve.parameters={...ve.parameters,docs:{...(Dn=ve.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(Sn=(Rn=ve.parameters)==null?void 0:Rn.docs)==null?void 0:Sn.source}}};var In,An,Hn;he.parameters={...he.parameters,docs:{...(In=he.parameters)==null?void 0:In.docs,source:{originalSource:`{
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
}`,...(Hn=(An=he.parameters)==null?void 0:An.docs)==null?void 0:Hn.source}}};var Pn,On,jn;xe.parameters={...xe.parameters,docs:{...(Pn=xe.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(jn=(On=xe.parameters)==null?void 0:On.docs)==null?void 0:jn.source}}};var qn,Ln,Nn;ke.parameters={...ke.parameters,docs:{...(qn=ke.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
    await expect(input).toHaveAttribute("aria-keyshortcuts", "Enter Escape");
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
    fireEvent.keyDown(input, {
      key: "Escape",
      shiftKey: true
    });
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await expect(canvas.getByTestId("escape-hint-query")).toHaveTextContent("N/A");
    await expect(input).toHaveAttribute("aria-keyshortcuts", "ArrowDown ArrowUp Home End PageDown PageUp Enter");
  }
}`,...(Nn=(Ln=ke.parameters)==null?void 0:Ln.docs)==null?void 0:Nn.source}}};var Kn,Fn,Mn;fe.parameters={...fe.parameters,docs:{...(Kn=fe.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Mn=(Fn=fe.parameters)==null?void 0:Fn.docs)==null?void 0:Mn.source}}};var $n,Un,Vn;Be.parameters={...Be.parameters,docs:{...($n=Be.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
    fireEvent.keyDown(input, {
      key: "ArrowDown",
      ctrlKey: true
    });
    fireEvent.keyDown(input, {
      key: "ArrowUp",
      metaKey: true
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-6"));
    await userEvent.keyboard("{PageUp}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-0"));
  }
}`,...(Vn=(Un=Be.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source}}};var Gn,zn,Qn;Ee.parameters={...Ee.parameters,docs:{...(Gn=Ee.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  render: () => <HomeEndCaretPriorityPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.type(input, "release");
    await userEvent.keyboard("{ArrowDown}");
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
    input.setSelectionRange(2, 2);
    fireEvent.keyDown(input, {
      key: "Home"
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
    fireEvent.keyDown(input, {
      key: "End"
    });
    await expect(input).toHaveAttribute("aria-activedescendant", expect.stringContaining("option-1"));
  }
}`,...(Qn=(zn=Ee.parameters)==null?void 0:zn.docs)==null?void 0:Qn.source}}};var _n,Wn,Jn;Ce.parameters={...Ce.parameters,docs:{...(_n=Ce.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
    dispatchLegacyImeKeyDown(input, "Escape");
    dispatchLegacyImeKeyDown(input, "ArrowDown");
    dispatchLegacyImeKeyDown(input, "Enter");
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
}`,...(Jn=(Wn=Ce.parameters)==null?void 0:Wn.docs)==null?void 0:Jn.source}}};var Xn,Yn,Zn;Te.parameters={...Te.parameters,docs:{...(Xn=Te.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(Zn=(Yn=Te.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var ea,ta,na;De.parameters={...De.parameters,docs:{...(ea=De.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const input = await canvas.findByRole("combobox", {
      name: "Search commands"
    });
    await userEvent.type(input, "open");
    await expect(canvas.getByTestId("command-preempt-query-value")).toHaveTextContent("open");
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByTestId("command-preempt-selection-count")).toHaveTextContent("0");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByTestId("command-preempt-query-value")).toHaveTextContent("open");
    await expect(canvas.getByRole("dialog", {
      name: "Command Palette"
    })).toBeInTheDocument();
  }
}`,...(na=(ta=De.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var aa,oa,sa;Re.parameters={...Re.parameters,docs:{...(aa=Re.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: () => <NestedDismissOrderPalette />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const outerTrigger = await canvas.findByRole("button", {
      name: "Open container popover"
    });
    await userEvent.click(outerTrigger);
    await expect(canvas.getByRole("dialog", {
      name: "Command container popover"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Open nested palette"
    }));
    await expect(canvas.getByRole("dialog", {
      name: "Nested command palette"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("dialog", {
        name: "Nested command palette"
      })).not.toBeInTheDocument();
    });
    await expect(canvas.getByRole("dialog", {
      name: "Command container popover"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await waitFor(() => {
      expect(canvas.queryByRole("dialog", {
        name: "Command container popover"
      })).not.toBeInTheDocument();
    });
    await expect(outerTrigger).toHaveFocus();
  }
}`,...(sa=(oa=Re.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};const go=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","BlankLoadingContentFallback","BlankEmptyMessageFallback","NumericFeedbackCopySemantics","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","LabelledByPrecedence","NumericTitleDescriptionSemantics","DisabledOnlyResults","SingleActionableShortcutHints","DisabledCommandGuard","MissingSelectHandlerGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","IconOnlyCommandLabelledByPrecedence","PersistentSelection","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","HomeEndCaretPriority","ImeCompositionGuard","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","NestedDismissOrder"];export{_ as AiInteractionFlow,Y as BlankEmptyMessageFallback,X as BlankLoadingContentFallback,te as CloseButtonFocusIntentReentry,ee as CloseReasonTelemetry,le as DisabledCommandGuard,ce as DisabledOnlyResults,ne as EmptyStateAriaControlsLifecycle,he as EscapeClearsQueryFirst,Te as EscapePreemptedByGlobalHandler,xe as EscapeRepeatGuard,ke as EscapeShortcutHintPrecision,ve as GuardedDismissEvents,Ee as HomeEndCaretPriority,ye as IconOnlyCommandLabelledByPrecedence,pe as IconOnlyCommandNaming,Ce as ImeCompositionGuard,se as LabelledByPrecedence,J as LoadingState,oe as LocalizedDialogCopy,ae as LocalizedResultsLabel,De as ManagedKeysPreemptedByGlobalHandler,de as MissingSelectHandlerGuard,Re as NestedDismissOrder,be as NonDismissible,Z as NumericFeedbackCopySemantics,re as NumericTitleDescriptionSemantics,Q as OpenFromTriggerKeyboardFirst,ge as OptionActivationKeyGuard,ue as OptionMouseDownPolicy,Be as PagedKeyboardNavigation,we as PersistentSelection,W as QueryTelemetry,fe as RefinedSearchKeepsActiveCommand,z as SearchCommands,ie as SingleActionableShortcutHints,me as TextValueAndAccentSearch,go as __namedExportsOrder,wo as default};
