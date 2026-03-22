import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as O}from"./Button-rBVi27TD.js";import{P as qn}from"./Popover-DYhUPXSW.js";import{D as Nn}from"./Dialog-CQoMJNsg.js";import{I as Kn}from"./Input-DCFTlK0_.js";import{within as u,userEvent as i,expect as n,fireEvent as h,waitFor as K}from"./index-DgAF9SIF.js";import{b as v,s as y,a as b}from"./storyShowcase-Bw5VyCj0.js";import"./focusTabbable-gnwmp6b7.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:a,onOpenChange:e,commands:t,title:r="Command Palette",description:l="Quickly search and execute workspace actions.",ariaLabel:p,ariaLabelledBy:g,searchAriaLabel:f="Search commands",resultsAriaLabel:M="Command results",closeOnSelect:Ve=!0,clearQueryOnEscape:He=!0,closeOnEscape:$=!0,closeOnOutsidePointer:Ue=!0,onEscapeKeyDown:Pe,onPointerDownOutside:Oe,closeLabel:xn,placeholder:kn="Search commands...",loading:C=!1,loadingContent:V="Loading commands...",emptyMessage:Ge="No commands found.",disabledResultsMessage:ze="Matching commands are currently unavailable.",onQueryChange:T,onCloseReason:D,getResultsStatusText:Qe=Mn}){const[S,je]=c.useState(""),[U,R]=c.useState(0),fn=c.useRef(null),q=c.useRef(null),G=c.useRef(null),_e=c.useRef(a);c.useRef(null),c.useRef(null),c.useRef(null);const j=c.useId(),Le=c.useId(),We=c.useId(),Je=c.useRef(null),Bn=P(f,"Search commands"),En=P(M,"Command results"),Cn=P(xn,"Close dialog"),Xe=P(g),Tn=Xe===void 0?P(p):void 0,Ye=c.useMemo(()=>$n(V),[V]),Rn=Fe(V)?V:"Loading commands...",Dn=Fe(Ge)?Ge:"No commands found.",Sn=Fe(ze)?ze:"Matching commands are currently unavailable.",z=c.useCallback(s=>{G.current=s,D==null||D(s)},[D]),Ze=c.useCallback(s=>{z(s),e(!1),G.current=null},[z,e]),In=c.useCallback(s=>{!s&&a&&G.current===null&&(D==null||D("close-button")),G.current=null,e(s)},[D,e,a]);c.useEffect(()=>{!a&&_e.current&&(je(s=>(s.length>0&&(T==null||T("")),"")),R(0)),_e.current=a},[T,a]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]);const qe=c.useMemo(()=>rt(S.trim()),[S]),w=c.useMemo(()=>qe?t.filter(s=>{const k=[st(s),...s.keywords??[]].join(" ");return rt(k).includes(qe)}):t,[t,qe]),An=c.useMemo(()=>{const s=new Map;return w.map((d,k)=>{const E=s.get(d.key)??0;return s.set(d.key,E+1),E===0?d.key:`${d.key}__dup-${k}`})},[w]),N=c.useMemo(()=>w.reduce((s,d)=>d.disabled?s:s+1,0),[w]),et=!C&&w.length>0&&N===0,I=!C&&N>1,tt=!C&&N>0,Ne=!C&&w.length>0,Hn=c.useMemo(()=>{const s=[];return I&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp"),tt&&s.push("Enter"),($||He&&S.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[tt,I,He,$,S.length]),Pn=c.useMemo(()=>C?Ye:Qe({query:S,visibleCount:w.length,enabledCount:N,totalCount:t.length}),[t.length,N,w.length,Qe,C,S,Ye]),On=et?`${Le} ${We}`:Le,A=c.useMemo(()=>w.reduce((s,d,k)=>(d.disabled||s.push(k),s),[]),[w]),H=A[0]??-1,at=A[A.length-1]??-1,B=c.useMemo(()=>{if(U<0)return-1;const s=w[U];return!s||s.disabled?-1:U},[U,w]);c.useEffect(()=>{var d;if(w.length===0){q.current=null,R(-1);return}const s=q.current;if(s){const k=w.findIndex(E=>!E.disabled&&E.key===s);if(k>=0){R(k);return}}R(H),q.current=H>=0?((d=w[H])==null?void 0:d.key)??null:null},[w,H]),c.useEffect(()=>{var s;if(B<0){q.current=null;return}q.current=((s=w[B])==null?void 0:s.key)??null},[w,B]),c.useEffect(()=>{if(!a||B<0)return;const s=Je.current;if(!s)return;const d=s.ownerDocument.getElementById(`${j}-option-${B}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[j,a,B]);const Ke=c.useCallback(s=>{const d=w[s];!d||d.disabled||d.onSelect&&(d.onSelect(),Ve&&Ze("item-select"))},[Ve,Ze,w]),nt=s=>{var k;if(w.length===0)return;let d=B<0?s===1?-1:0:B;for(let E=0;E<w.length;E+=1)if(d=(d+s+w.length)%w.length,!((k=w[d])!=null&&k.disabled)){R(d);return}},ot=s=>{if(A.length===0)return;const d=A.indexOf(B);if(d<0){R(s===1?H:at);return}const k=Math.min(A.length-1,Math.max(0,d+s*5));R(A[k]??H)};return o.jsx(Nn,{open:a,onOpenChange:In,title:r,description:l,ariaLabel:Tn,ariaLabelledBy:Xe,closeLabel:Cn,size:"md",closeOnEscape:$,closeOnOutsidePointer:Ue,onEscapeKeyDown:s=>{Pe==null||Pe(s),!(s.defaultPrevented||!$)&&z("escape-key")},onPointerDownOutside:s=>{Oe==null||Oe(s),!(s.defaultPrevented||!Ue)&&z("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(Kn,{ref:fn,"data-autofocus":"",role:"combobox","aria-busy":C||void 0,"aria-expanded":Ne,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":Ne?j:void 0,"aria-activedescendant":!C&&B>=0?`${j}-option-${B}`:void 0,"aria-describedby":On,"aria-keyshortcuts":Hn,placeholder:kn,value:S,onChange:s=>{je(s.target.value),T==null||T(s.target.value)},onKeyDown:s=>{if(!Fn(s)&&!s.defaultPrevented&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;He&&S.length>0&&(s.preventDefault(),je(""),T==null||T(""));return}if(s.key==="ArrowDown"){if(!I)return;s.preventDefault(),nt(1);return}if(s.key==="ArrowUp"){if(!I)return;s.preventDefault(),nt(-1);return}if(s.key==="Home"){if(!I||!ct(s))return;s.preventDefault(),R(H);return}if(s.key==="End"){if(!I||!ct(s))return;s.preventDefault(),R(at);return}if(s.key==="PageDown"){if(!I)return;s.preventDefault(),ot(1);return}if(s.key==="PageUp"){if(!I)return;s.preventDefault(),ot(-1);return}if(s.key==="Enter"&&!C&&B>=0){if(s.preventDefault(),s.repeat)return;Ke(B)}}},"aria-label":Bn}),o.jsx("p",{id:Le,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Pn}),C?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:Rn}):Ne?o.jsxs(o.Fragment,{children:[o.jsx("div",{id:j,ref:Je,role:"listbox","aria-label":En,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:w.map((s,d)=>{const k=d===B,E=P(s.ariaLabelledBy),jn=F(s.label).trim().length>0,Ln=E?void 0:P(s.ariaLabel,jn?void 0:st(s));return o.jsx("div",{id:`${j}-option-${d}`,role:"option","aria-selected":k,"aria-disabled":s.disabled||void 0,"aria-labelledby":E,"aria-label":Ln,"aria-keyshortcuts":s.disabled?void 0:"Enter Space","aria-posinset":d+1,"aria-setsize":w.length,tabIndex:-1,onPointerDown:x=>{x.pointerType==="mouse"||!Vn(x.button)||x.ctrlKey||x.preventDefault()},onMouseDown:x=>{x.button!==0||x.ctrlKey||x.preventDefault()},onMouseEnter:()=>{s.disabled||R(d)},onClick:()=>{s.disabled||Ke(d)},onKeyDown:x=>{if(!s.disabled&&!x.defaultPrevented&&!(x.altKey||x.ctrlKey||x.metaKey)&&(x.key==="Enter"||x.key===" "||x.key==="Space"||x.key==="Spacebar")){if(x.preventDefault(),x.repeat)return;Ke(d)}},style:{border:"1px solid var(--aurora-border-default)",background:k?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},An[d]??`${s.key}__dup-${d}`)})}),et?o.jsx("p",{id:We,"data-testid":"command-palette-disabled-results-message",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:Sn}):null]}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:Dn})]})})}function st(a){if(typeof a.textValue=="string"){const e=L(a.textValue);if(e.length>0)return e}if(typeof a.ariaLabel=="string"){const e=L(a.ariaLabel);if(e.length>0)return e}return L(F(a.label))}function rt(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function Fn(a){const e=a.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function ct(a){if(a.key!=="Home"&&a.key!=="End")return!0;const e=a.currentTarget,t=e.selectionStart,r=e.selectionEnd;return t===null||r===null?!0:t!==r?!1:a.key==="Home"?t===0:r===e.value.length}function Mn({query:a,visibleCount:e,enabledCount:t,totalCount:r}){const l=a.trim();return l.length===0?t!==r?`${t} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function $n(a){const e=L(F(a));return e.length>0?e:"Loading commands..."}function Fe(a){return a==null||typeof a=="boolean"?!1:typeof a=="string"?a.trim().length>0:!0}function F(a){if(typeof a=="string")return a;if(typeof a=="number")return String(a);if(Array.isArray(a))return L(a.map(t=>F(t)).filter(t=>t.length>0).join(" "));if(!c.isValidElement(a))return"";const e=a.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?L(e["aria-label"]):F(e.children)}function P(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}function Vn(a){return typeof a!="number"||a<=0}function L(a){return a.replace(/\s+/g," ").trim()}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  textValue?: string;
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"textValue",value:{name:"string",required:!1}},{key:"keywords",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"CommandItem[]"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Command Palette"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Quickly search and execute workspace actions."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},searchAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands"',computed:!1}},resultsAriaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Command results"',computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQueryOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOutsidePointer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},onPointerDownOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PointerEvent) => void",signature:{arguments:[{type:{name:"PointerEvent"},name:"event"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search commands..."',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Loading commands..."',computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"No commands found."',computed:!1}},disabledResultsMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Matching commands are currently unavailable."',computed:!1}},onQueryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCloseReason:{required:!1,tsType:{name:"signature",type:"function",raw:"(reason: CommandPaletteCloseReason) => void",signature:{arguments:[{type:{name:"union",raw:`| "close-button"
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
}`,computed:!1}}}};const $e=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],Ao={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:$e}};function Me(a,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),a.dispatchEvent(t)}function vn(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:$e,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Un(){const[a,e]=c.useState(!1),[t,r]=c.useState("none");return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:b,children:t})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>r("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>r("Open Theme Pack")}]})]})}function Gn(){const[a,e]=c.useState(!0),[t,r]=c.useState("None"),l=$e.map(p=>({...p,onSelect:()=>r(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last AI action: ",o.jsx("strong",{style:b,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:l})]})}function hn(){const[a,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:b,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"],onSelect:()=>{}}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:l,visibleCount:p,enabledCount:g})=>l.trim().length===0?"Command search ready.":`${g}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function zn(){const[a,e]=c.useState(!0),[t,r]=c.useState(!0),[l,p]=c.useState(0);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:b,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>r(g=>!g),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(O,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(m,{open:a,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>p(g=>g+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>p(g=>g+1)}]})]})}function Qn(){const[a,e]=c.useState(!0),[t,r]=c.useState("none"),[l,p]=c.useState("N/A"),g=c.useCallback(f=>{p(M=>M==="N/A"?f:`${M} -> ${f}`)},[]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:b,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(m,{open:a,onOpenChange:f=>{e(f),f||g("open:false")},onCloseReason:f=>{r(f),g(`reason:${f}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>g("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>g("select")}]})]})}function _n(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Wn(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}]})}function Jn(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:b,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Xn(){const[a,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"missing-handler-close-reason",style:b,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,onCloseReason:l=>r(l),commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"]},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r("item-select")}],placeholder:"Try searching run..."})]})}function Yn(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Zn(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function eo(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release"},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release"}],placeholder:"Try searching rollback..."})}function to(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function ao(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("h3",{id:"deploy-command-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Deploy Release"}),o.jsx(m,{open:a,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Fallback deploy command",ariaLabelledBy:"deploy-command-heading",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})]})}function no(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:b,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(l=>l+1)}]})]})}function oo(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:b,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function so(){const[a,e]=c.useState(!1);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:a?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function ro(){const[a,e]=c.useState(!1),[t,r]=c.useState(!0);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:y,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:b,children:t?"enabled":"disabled"})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:a?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function co(){const[a,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:b,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function io(){const[a,e]=c.useState(!0),[t,r]=c.useState(""),[l,p]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:b,children:a?"open":"closed"})]}),o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:b,children:l})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:r,onEscapeKeyDown:()=>p(g=>g+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function lo(){const[a,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:b,children:t||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function uo(){const[a,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:b,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function mo(){const[a,e]=c.useState(!0);return o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function po(){const[a,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("p",{style:y,children:"With caret in the middle of query text, Home/End should keep native cursor behavior and avoid overriding active command focus."}),o.jsx(m,{open:a,onOpenChange:e,closeOnSelect:!1,commands:[{key:"release-checklist",label:"Release Checklist",keywords:["release"]},{key:"release-notes",label:"Release Notes",keywords:["release"]},{key:"release-pipeline",label:"Release Pipeline",keywords:["release"]}]})]})}function yo(){const[a,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:b,children:l||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:b,children:a?"open":"closed"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(g=>g+1)}]})]})}function wo(){const[a,e]=c.useState(!0),[t,r]=c.useState(0);return c.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:b,children:t})]}),o.jsx(m,{open:a,onOpenChange:e,onEscapeKeyDown:()=>r(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function bo(){const[a,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return c.useEffect(()=>{const g=f=>{(f.key==="Enter"||f.key==="Escape")&&f.preventDefault()};return document.addEventListener("keydown",g,!0),()=>{document.removeEventListener("keydown",g,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-preempt-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-preempt-query-value",style:b,children:l||"N/A"})]}),o.jsx(m,{open:a,onOpenChange:e,onQueryChange:p,commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>r(g=>g+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function go(){const[a,e]=c.useState(!1);return o.jsx(v,{align:"start",children:o.jsx(qn,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...y},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(m,{open:a,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const Q={render:()=>o.jsx(vn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await n(r).toHaveAttribute("aria-disabled","true"),await n(r).toHaveAttribute("tabindex","-1")}},_={render:()=>o.jsx(Un,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await K(()=>{n(t).toHaveFocus()}),await i.type(t,"run"),await n(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},W={render:()=>o.jsx(Gn,{})},J={render:()=>o.jsx(hn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},X={render:()=>o.jsx(zn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await n(t).toHaveAttribute("aria-busy","true"),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).toHaveAttribute("aria-keyshortcuts","Escape"),await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Finish loading commands"})),await i.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await n(t).not.toHaveAttribute("aria-busy"),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await n(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},Y={args:{open:!0,loading:!0,loadingContent:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings"}]},play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands..."),await n(e.getByRole("status")).toHaveTextContent("Loading commands...")}},Z={args:{open:!0,emptyMessage:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"no-match"),await n(e.getByText("No commands found.")).toBeInTheDocument()}},ee={args:{open:!0,loading:!0,loadingContent:0,onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(e.getByTestId("command-palette-loading-content")).toHaveTextContent("0"),await n(e.getByRole("status")).toHaveTextContent("0")}},te={render:()=>o.jsx(Qn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=a.ownerDocument;await n(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await n(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(t.body),await n(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"}));const r=e.getByRole("dialog",{name:"Command Palette"});await n(r).toBeInTheDocument(),await n(r).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close dialog"});await n(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.click(l),await n(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await n(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},ae={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),r=await e.findByRole("button",{name:"Close dialog"});await i.click(t),await n(t).toHaveFocus(),await i.tab({shift:!0}),await n(r).toHaveFocus(),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),h.mouseDown(r,{button:0,ctrlKey:!0}),await n(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},ne={render:()=>o.jsx(hn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await n(l).toBeTruthy(),await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",l),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await i.type(t,"no-match"),await n(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await n(t).toHaveAttribute("aria-expanded","false"),await n(t).not.toHaveAttribute("aria-controls"),await n(t).not.toHaveAttribute("aria-activedescendant"),await i.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await n(t).toHaveAttribute("aria-expanded","true"),await n(t).toHaveAttribute("aria-controls",p.getAttribute("id")),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},oe={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},se={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await n(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await n(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await n(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},re={render:()=>o.jsxs(v,{align:"start",children:[o.jsx("h3",{id:"command-palette-heading",style:{margin:0},children:"AI release command center"}),o.jsx(m,{open:!0,onOpenChange:()=>{},title:o.jsx("span",{"aria-hidden":!0,children:"⌘"}),ariaLabel:"Fallback AI command center",ariaLabelledBy:"command-palette-heading",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]})]}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("dialog",{name:"AI release command center"});await n(t).toHaveAttribute("aria-labelledby","command-palette-heading"),await n(t).not.toHaveAttribute("aria-label")}},ce={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:0,description:0,commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),r=(await e.findByRole("dialog",{name:"0"})).getAttribute("aria-describedby");await n(r).toBeTruthy(),await n(e.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},ie={render:()=>o.jsx(_n,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await n(t).toHaveAttribute("aria-keyshortcuts","Escape"),await n(e.getByTestId("command-palette-disabled-results-message")).toHaveTextContent("Matching commands are currently unavailable.");for(const r of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:r,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await n(l.defaultPrevented).toBe(!1)}}},le={render:()=>o.jsx(Wn,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape");const r=t.getAttribute("aria-activedescendant");n(r).toBeTruthy();for(const l of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const p=new KeyboardEvent("keydown",{key:l,bubbles:!0,cancelable:!0});t.dispatchEvent(p),await n(p.defaultPrevented).toBe(!1)}await n(t.getAttribute("aria-activedescendant")).toBe(r)}},de={render:()=>o.jsx(Jn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await n(r).toHaveAttribute("aria-disabled","true"),await n(r).not.toHaveAttribute("aria-keyshortcuts"),await i.click(r),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("executed-count")).toHaveTextContent("0")}},ue={render:()=>o.jsx(Xn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"run"),await i.click(e.getByRole("option",{name:"Run E2E Smoke"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("missing-handler-close-reason")).toHaveTextContent("none")}},me={render:()=>o.jsx(vn,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("option",{name:"Create Spec"}),r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(r),n(r.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),n(l.defaultPrevented).toBe(!0)}},pe={render:()=>o.jsx(Yn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await n(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},ye={render:()=>o.jsx(Zn,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox");await n(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},we={render:()=>o.jsx(eo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await n(r).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},be={render:()=>o.jsx(to,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await n(r).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ge={render:()=>o.jsx(ao,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await n(r).toHaveAttribute("aria-labelledby","deploy-command-heading"),await n(r).not.toHaveAttribute("aria-label"),await i.type(t,"rollback"),await n(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await n(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ve={render:()=>o.jsx(no,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),h.keyDown(t,{key:"Enter",repeat:!1}),await K(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),h.keyDown(t,{key:"Enter",repeat:!0}),await K(()=>{n(e.getByTestId("selection-count")).toHaveTextContent("1")}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},he={render:()=>o.jsx(oo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await i.keyboard("{Control>}{Enter}{/Control}"),await i.keyboard("{Meta>}{Space}{/Meta}"),h.keyDown(t,{key:"Enter",repeat:!0}),h.keyDown(t,{key:"Spacebar",altKey:!0}),await n(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await n(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},xe={render:()=>o.jsx(so,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await n(t).toBeInTheDocument(),await n(t).not.toHaveAttribute("aria-keyshortcuts"),await n(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await n(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await n(t).toBeInTheDocument()}},ke={render:()=>o.jsx(ro,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=a.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),h.pointerDown(t.body),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await i.clear(r),await i.type(r,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await n(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},fe={render:()=>o.jsx(co,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("query-value")).toHaveTextContent("N/A"),await n(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("open-state")).toHaveTextContent("closed")}},Be={render:()=>o.jsx(io,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),h.keyDown(t,{key:"Escape",repeat:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await n(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await n(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await n(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},Ee={render:()=>o.jsx(lo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await n(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),h.keyDown(t,{key:"Escape",ctrlKey:!0}),h.keyDown(t,{key:"Escape",altKey:!0}),h.keyDown(t,{key:"Escape",metaKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),h.keyDown(t,{key:"Escape",shiftKey:!0}),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},Ce={render:()=>o.jsx(uo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.clear(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"));const r=t.getAttribute("aria-activedescendant");n(r).toBeTruthy();const l=a.ownerDocument.getElementById(r);await n(l).toBeInTheDocument(),await n(l).toHaveAttribute("role","option"),await n(l).not.toHaveAttribute("aria-disabled","true"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Te={render:()=>o.jsx(mo,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.keyboard("{PageDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),h.keyDown(t,{key:"PageDown",ctrlKey:!0}),h.keyDown(t,{key:"End",metaKey:!0}),h.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),h.keyDown(t,{key:"ArrowUp",metaKey:!0}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-6")),await i.keyboard("{PageUp}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0"))}},Re={render:()=>o.jsx(po,{}),play:async({canvasElement:a})=>{const t=await u(a.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.type(t,"release"),await i.keyboard("{ArrowDown}"),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),t.setSelectionRange(2,2),h.keyDown(t,{key:"Home"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1")),h.keyDown(t,{key:"End"}),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-1"))}},De={render:()=>o.jsx(yo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await n(t).toHaveAttribute("aria-activedescendant",n.stringContaining("option-0")),await i.type(t,"deploy"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),h.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Me(t,"Escape"),Me(t,"ArrowDown"),Me(t,"Enter"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await n(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await n(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await n(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},Se={render:()=>o.jsx(wo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body);await n(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await n(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},Ie={render:()=>o.jsx(bo,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await n(e.getByTestId("command-preempt-selection-count")).toHaveTextContent("0"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await n(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Ae={render:()=>o.jsx(go,{}),play:async({canvasElement:a})=>{const e=u(a.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await i.click(t),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Open nested palette"})),await n(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await K(()=>{n(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await n(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await K(()=>{n(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await n(t).toHaveFocus()}};var it,lt,dt;Q.parameters={...Q.parameters,docs:{...(it=Q.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(dt=(lt=Q.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ut,mt,pt;_.parameters={..._.parameters,docs:{...(ut=_.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(mt=_.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var yt,wt,bt;W.parameters={...W.parameters,docs:{...(yt=W.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(bt=(wt=W.parameters)==null?void 0:wt.docs)==null?void 0:bt.source}}};var gt,vt,ht;J.parameters={...J.parameters,docs:{...(gt=J.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(ht=(vt=J.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var xt,kt,ft;X.parameters={...X.parameters,docs:{...(xt=X.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(ft=(kt=X.parameters)==null?void 0:kt.docs)==null?void 0:ft.source}}};var Bt,Et,Ct;Y.parameters={...Y.parameters,docs:{...(Bt=Y.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ct=(Et=Y.parameters)==null?void 0:Et.docs)==null?void 0:Ct.source}}};var Tt,Rt,Dt;Z.parameters={...Z.parameters,docs:{...(Tt=Z.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Dt=(Rt=Z.parameters)==null?void 0:Rt.docs)==null?void 0:Dt.source}}};var St,It,At;ee.parameters={...ee.parameters,docs:{...(St=ee.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(At=(It=ee.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Ht,Pt,Ot;te.parameters={...te.parameters,docs:{...(Ht=te.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=te.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var jt,Lt,qt;ae.parameters={...ae.parameters,docs:{...(jt=ae.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(qt=(Lt=ae.parameters)==null?void 0:Lt.docs)==null?void 0:qt.source}}};var Nt,Kt,Ft;ne.parameters={...ne.parameters,docs:{...(Nt=ne.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ft=(Kt=ne.parameters)==null?void 0:Kt.docs)==null?void 0:Ft.source}}};var Mt,$t,Vt;oe.parameters={...oe.parameters,docs:{...(Mt=oe.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Vt=($t=oe.parameters)==null?void 0:$t.docs)==null?void 0:Vt.source}}};var Ut,Gt,zt;se.parameters={...se.parameters,docs:{...(Ut=se.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(zt=(Gt=se.parameters)==null?void 0:Gt.docs)==null?void 0:zt.source}}};var Qt,_t,Wt;re.parameters={...re.parameters,docs:{...(Qt=re.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
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
}`,...(Wt=(_t=re.parameters)==null?void 0:_t.docs)==null?void 0:Wt.source}}};var Jt,Xt,Yt;ce.parameters={...ce.parameters,docs:{...(Jt=ce.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Yt=(Xt=ce.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Zt,ea,ta;ie.parameters={...ie.parameters,docs:{...(Zt=ie.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
    await expect(canvas.getByTestId("command-palette-disabled-results-message")).toHaveTextContent("Matching commands are currently unavailable.");
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
}`,...(ta=(ea=ie.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,oa;le.parameters={...le.parameters,docs:{...(aa=le.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(oa=(na=le.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var sa,ra,ca;de.parameters={...de.parameters,docs:{...(sa=de.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ca=(ra=de.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var ia,la,da;ue.parameters={...ue.parameters,docs:{...(ia=ue.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(da=(la=ue.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ua,ma,pa;me.parameters={...me.parameters,docs:{...(ua=me.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(pa=(ma=me.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var ya,wa,ba;pe.parameters={...pe.parameters,docs:{...(ya=pe.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(ba=(wa=pe.parameters)==null?void 0:wa.docs)==null?void 0:ba.source}}};var ga,va,ha;ye.parameters={...ye.parameters,docs:{...(ga=ye.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(ha=(va=ye.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var xa,ka,fa;we.parameters={...we.parameters,docs:{...(xa=we.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: () => <IconOnlyCommandAriaLabelSearchPalette />,
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    const deployOption = root.getByRole("option", {
      name: "Deploy Release"
    });
    await expect(deployOption).toHaveAttribute("aria-label", "Deploy Release");
    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", {
      name: "Rollback Release"
    })).toBeInTheDocument();
    await expect(root.queryByRole("option", {
      name: "Deploy Release"
    })).not.toBeInTheDocument();
  }
}`,...(fa=(ka=we.parameters)==null?void 0:ka.docs)==null?void 0:fa.source}}};var Ba,Ea,Ca;be.parameters={...be.parameters,docs:{...(Ba=be.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  render: () => <IconOnlyCommandTextValueFallbackPalette />,
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement.ownerDocument.body);
    const input = await root.findByRole("combobox");
    const deployOption = root.getByRole("option", {
      name: "Deploy Release"
    });
    await expect(deployOption).toHaveAttribute("aria-label", "Deploy Release");
    await userEvent.type(input, "rollback");
    await expect(root.getByRole("option", {
      name: "Rollback Release"
    })).toBeInTheDocument();
    await expect(root.queryByRole("option", {
      name: "Deploy Release"
    })).not.toBeInTheDocument();
  }
}`,...(Ca=(Ea=be.parameters)==null?void 0:Ea.docs)==null?void 0:Ca.source}}};var Ta,Ra,Da;ge.parameters={...ge.parameters,docs:{...(Ta=ge.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Da=(Ra=ge.parameters)==null?void 0:Ra.docs)==null?void 0:Da.source}}};var Sa,Ia,Aa;ve.parameters={...ve.parameters,docs:{...(Sa=ve.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Aa=(Ia=ve.parameters)==null?void 0:Ia.docs)==null?void 0:Aa.source}}};var Ha,Pa,Oa;he.parameters={...he.parameters,docs:{...(Ha=he.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Oa=(Pa=he.parameters)==null?void 0:Pa.docs)==null?void 0:Oa.source}}};var ja,La,qa;xe.parameters={...xe.parameters,docs:{...(ja=xe.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(qa=(La=xe.parameters)==null?void 0:La.docs)==null?void 0:qa.source}}};var Na,Ka,Fa;ke.parameters={...ke.parameters,docs:{...(Na=ke.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(Fa=(Ka=ke.parameters)==null?void 0:Ka.docs)==null?void 0:Fa.source}}};var Ma,$a,Va;fe.parameters={...fe.parameters,docs:{...(Ma=fe.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
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
}`,...(Va=($a=fe.parameters)==null?void 0:$a.docs)==null?void 0:Va.source}}};var Ua,Ga,za;Be.parameters={...Be.parameters,docs:{...(Ua=Be.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(za=(Ga=Be.parameters)==null?void 0:Ga.docs)==null?void 0:za.source}}};var Qa,_a,Wa;Ee.parameters={...Ee.parameters,docs:{...(Qa=Ee.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
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
}`,...(Wa=(_a=Ee.parameters)==null?void 0:_a.docs)==null?void 0:Wa.source}}};var Ja,Xa,Ya;Ce.parameters={...Ce.parameters,docs:{...(Ja=Ce.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
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
}`,...(Ya=(Xa=Ce.parameters)==null?void 0:Xa.docs)==null?void 0:Ya.source}}};var Za,en,tn;Te.parameters={...Te.parameters,docs:{...(Za=Te.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(tn=(en=Te.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var an,nn,on;Re.parameters={...Re.parameters,docs:{...(an=Re.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(on=(nn=Re.parameters)==null?void 0:nn.docs)==null?void 0:on.source}}};var sn,rn,cn;De.parameters={...De.parameters,docs:{...(sn=De.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(cn=(rn=De.parameters)==null?void 0:rn.docs)==null?void 0:cn.source}}};var ln,dn,un;Se.parameters={...Se.parameters,docs:{...(ln=Se.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(un=(dn=Se.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var mn,pn,yn;Ie.parameters={...Ie.parameters,docs:{...(mn=Ie.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(yn=(pn=Ie.parameters)==null?void 0:pn.docs)==null?void 0:yn.source}}};var wn,bn,gn;Ae.parameters={...Ae.parameters,docs:{...(wn=Ae.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(gn=(bn=Ae.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};const Ho=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","BlankLoadingContentFallback","BlankEmptyMessageFallback","NumericFeedbackCopySemantics","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","LabelledByPrecedence","NumericTitleDescriptionSemantics","DisabledOnlyResults","SingleActionableShortcutHints","DisabledCommandGuard","MissingSelectHandlerGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","IconOnlyCommandAriaLabelSearchFallback","IconOnlyCommandTextValueFallback","IconOnlyCommandLabelledByPrecedence","PersistentSelection","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","HomeEndCaretPriority","ImeCompositionGuard","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","NestedDismissOrder"];export{W as AiInteractionFlow,Z as BlankEmptyMessageFallback,Y as BlankLoadingContentFallback,ae as CloseButtonFocusIntentReentry,te as CloseReasonTelemetry,de as DisabledCommandGuard,ie as DisabledOnlyResults,ne as EmptyStateAriaControlsLifecycle,fe as EscapeClearsQueryFirst,Se as EscapePreemptedByGlobalHandler,Be as EscapeRepeatGuard,Ee as EscapeShortcutHintPrecision,ke as GuardedDismissEvents,Re as HomeEndCaretPriority,we as IconOnlyCommandAriaLabelSearchFallback,ge as IconOnlyCommandLabelledByPrecedence,ye as IconOnlyCommandNaming,be as IconOnlyCommandTextValueFallback,De as ImeCompositionGuard,re as LabelledByPrecedence,X as LoadingState,se as LocalizedDialogCopy,oe as LocalizedResultsLabel,Ie as ManagedKeysPreemptedByGlobalHandler,ue as MissingSelectHandlerGuard,Ae as NestedDismissOrder,xe as NonDismissible,ee as NumericFeedbackCopySemantics,ce as NumericTitleDescriptionSemantics,_ as OpenFromTriggerKeyboardFirst,he as OptionActivationKeyGuard,me as OptionMouseDownPolicy,Te as PagedKeyboardNavigation,ve as PersistentSelection,J as QueryTelemetry,Ce as RefinedSearchKeepsActiveCommand,Q as SearchCommands,le as SingleActionableShortcutHints,pe as TextValueAndAccentSearch,Ho as __namedExportsOrder,Ao as default};
