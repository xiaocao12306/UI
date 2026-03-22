import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as O}from"./Button-rBVi27TD.js";import{P as Pn}from"./Popover-BXRvYEtZ.js";import{D as On}from"./Dialog-BiLcKCgO.js";import{I as jn}from"./Input-ueoPJ8SP.js";import{within as u,userEvent as i,expect as a,fireEvent as h,waitFor as N}from"./index-DgAF9SIF.js";import{b as v,s as y,a as b}from"./storyShowcase-Bw5VyCj0.js";import"./DismissableLayer-0MVldSzJ.js";import"./bodyScrollLock-D0vp0S5S.js";import"./index-DlVbWVVj.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function m({open:n,onOpenChange:e,commands:t,title:r="Command Palette",description:l="Quickly search and execute workspace actions.",ariaLabel:p,ariaLabelledBy:g,searchAriaLabel:f="Search commands",resultsAriaLabel:M="Command results",closeOnSelect:$e=!0,clearQueryOnEscape:He=!0,closeOnEscape:$=!0,closeOnOutsidePointer:Ve=!0,onEscapeKeyDown:Ae,onPointerDownOutside:Pe,closeLabel:bn,placeholder:gn="Search commands...",loading:C=!1,loadingContent:V="Loading commands...",emptyMessage:Ue="No commands found.",disabledResultsMessage:Ge="Matching commands are currently unavailable.",onQueryChange:T,onCloseReason:D,getResultsStatusText:ze=Ln}){const[S,Oe]=c.useState(""),[U,R]=c.useState(0),vn=c.useRef(null),q=c.useRef(null),G=c.useRef(null),Qe=c.useRef(n);c.useRef(null),c.useRef(null),c.useRef(null);const j=c.useId(),je=c.useId(),_e=c.useId(),We=c.useRef(null),hn=P(f,"Search commands"),xn=P(M,"Command results"),kn=P(bn,"Close dialog"),Je=P(g),fn=Je===void 0?P(p):void 0,Xe=c.useMemo(()=>Nn(V),[V]),Bn=Ke(V)?V:"Loading commands...",En=Ke(Ue)?Ue:"No commands found.",Cn=Ke(Ge)?Ge:"Matching commands are currently unavailable.",z=c.useCallback(s=>{G.current=s,D==null||D(s)},[D]),Ye=c.useCallback(s=>{z(s),e(!1),G.current=null},[z,e]),Tn=c.useCallback(s=>{!s&&n&&G.current===null&&(D==null||D("close-button")),G.current=null,e(s)},[D,e,n]);c.useEffect(()=>{!n&&Qe.current&&(Oe(s=>(s.length>0&&(T==null||T("")),"")),R(0)),Qe.current=n},[T,n]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]),c.useEffect(()=>{},[t]);const qe=c.useMemo(()=>st(S.trim()),[S]),w=c.useMemo(()=>qe?t.filter(s=>{const k=[ot(s),...s.keywords??[]].join(" ");return st(k).includes(qe)}):t,[t,qe]),Rn=c.useMemo(()=>{const s=new Map;return w.map((d,k)=>{const E=s.get(d.key)??0;return s.set(d.key,E+1),E===0?d.key:`${d.key}__dup-${k}`})},[w]),L=c.useMemo(()=>w.reduce((s,d)=>d.disabled?s:s+1,0),[w]),Ze=!C&&w.length>0&&L===0,I=!C&&L>1,et=!C&&L>0,Le=!C&&w.length>0,Dn=c.useMemo(()=>{const s=[];return I&&s.push("ArrowDown","ArrowUp","Home","End","PageDown","PageUp"),et&&s.push("Enter"),($||He&&S.length>0)&&s.push("Escape"),s.length>0?s.join(" "):void 0},[et,I,He,$,S.length]),Sn=c.useMemo(()=>C?Xe:ze({query:S,visibleCount:w.length,enabledCount:L,totalCount:t.length}),[t.length,L,w.length,ze,C,S,Xe]),In=Ze?`${je} ${_e}`:je,H=c.useMemo(()=>w.reduce((s,d,k)=>(d.disabled||s.push(k),s),[]),[w]),A=H[0]??-1,tt=H[H.length-1]??-1,B=c.useMemo(()=>{if(U<0)return-1;const s=w[U];return!s||s.disabled?-1:U},[U,w]);c.useEffect(()=>{var d;if(w.length===0){q.current=null,R(-1);return}const s=q.current;if(s){const k=w.findIndex(E=>!E.disabled&&E.key===s);if(k>=0){R(k);return}}R(A),q.current=A>=0?((d=w[A])==null?void 0:d.key)??null:null},[w,A]),c.useEffect(()=>{var s;if(B<0){q.current=null;return}q.current=((s=w[B])==null?void 0:s.key)??null},[w,B]),c.useEffect(()=>{if(!n||B<0)return;const s=We.current;if(!s)return;const d=s.ownerDocument.getElementById(`${j}-option-${B}`);!d||!s.contains(d)||typeof d.scrollIntoView=="function"&&d.scrollIntoView({block:"nearest"})},[j,n,B]);const Ne=c.useCallback(s=>{const d=w[s];!d||d.disabled||d.onSelect&&(d.onSelect(),$e&&Ye("item-select"))},[$e,Ye,w]),at=s=>{var k;if(w.length===0)return;let d=B<0?s===1?-1:0:B;for(let E=0;E<w.length;E+=1)if(d=(d+s+w.length)%w.length,!((k=w[d])!=null&&k.disabled)){R(d);return}},nt=s=>{if(H.length===0)return;const d=H.indexOf(B);if(d<0){R(s===1?A:tt);return}const k=Math.min(H.length-1,Math.max(0,d+s*5));R(H[k]??A)};return o.jsx(On,{open:n,onOpenChange:Tn,title:r,description:l,ariaLabel:fn,ariaLabelledBy:Je,closeLabel:kn,size:"md",closeOnEscape:$,closeOnOutsidePointer:Ve,onEscapeKeyDown:s=>{Ae==null||Ae(s),!(s.defaultPrevented||!$)&&z("escape-key")},onPointerDownOutside:s=>{Pe==null||Pe(s),!(s.defaultPrevented||!Ve)&&z("outside-pointer")},children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx(jn,{ref:vn,"data-autofocus":"",role:"combobox","aria-busy":C||void 0,"aria-expanded":Le,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-controls":Le?j:void 0,"aria-activedescendant":!C&&B>=0?`${j}-option-${B}`:void 0,"aria-describedby":In,"aria-keyshortcuts":Dn,placeholder:gn,value:S,onChange:s=>{Oe(s.target.value),T==null||T(s.target.value)},onKeyDown:s=>{if(!qn(s)&&!s.defaultPrevented&&!(s.altKey||s.ctrlKey||s.metaKey)){if(s.key==="Escape"){if(s.repeat)return;He&&S.length>0&&(s.preventDefault(),Oe(""),T==null||T(""));return}if(s.key==="ArrowDown"){if(!I)return;s.preventDefault(),at(1);return}if(s.key==="ArrowUp"){if(!I)return;s.preventDefault(),at(-1);return}if(s.key==="Home"){if(!I||!rt(s))return;s.preventDefault(),R(A);return}if(s.key==="End"){if(!I||!rt(s))return;s.preventDefault(),R(tt);return}if(s.key==="PageDown"){if(!I)return;s.preventDefault(),nt(1);return}if(s.key==="PageUp"){if(!I)return;s.preventDefault(),nt(-1);return}if(s.key==="Enter"&&!C&&B>=0){if(s.preventDefault(),s.repeat)return;Ne(B)}}},"aria-label":hn}),o.jsx("p",{id:je,role:"status","aria-live":"polite",style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:Sn}),C?o.jsx("p",{"data-testid":"command-palette-loading-content",style:{margin:0,color:"var(--aurora-text-secondary)"},children:Bn}):Le?o.jsxs(o.Fragment,{children:[o.jsx("div",{id:j,ref:We,role:"listbox","aria-label":xn,style:{maxHeight:280,overflow:"auto",display:"grid",gap:4},children:w.map((s,d)=>{const k=d===B,E=P(s.ariaLabelledBy),Hn=K(s.label).trim().length>0,An=E?void 0:P(s.ariaLabel,Hn?void 0:ot(s));return o.jsx("div",{id:`${j}-option-${d}`,role:"option","aria-selected":k,"aria-disabled":s.disabled||void 0,"aria-labelledby":E,"aria-label":An,"aria-keyshortcuts":s.disabled?void 0:"Enter Space","aria-posinset":d+1,"aria-setsize":w.length,tabIndex:-1,onPointerDown:x=>{x.pointerType==="mouse"||!Kn(x.button)||x.ctrlKey||x.preventDefault()},onMouseDown:x=>{x.button!==0||x.ctrlKey||x.preventDefault()},onMouseEnter:()=>{s.disabled||R(d)},onClick:()=>{s.disabled||Ne(d)},onKeyDown:x=>{if(!s.disabled&&!x.defaultPrevented&&!(x.altKey||x.ctrlKey||x.metaKey)&&(x.key==="Enter"||x.key===" "||x.key==="Space"||x.key==="Spacebar")){if(x.preventDefault(),x.repeat)return;Ne(d)}},style:{border:"1px solid var(--aurora-border-default)",background:k?"color-mix(in srgb, var(--aurora-accent-default) 14%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:s.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 60%, transparent)":"var(--aurora-text-primary)",borderRadius:8,height:36,padding:"0 10px",textAlign:"left",cursor:s.disabled?"not-allowed":"pointer"},children:s.label},Rn[d]??`${s.key}__dup-${d}`)})}),Ze?o.jsx("p",{id:_e,"data-testid":"command-palette-disabled-results-message",style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:Cn}):null]}):o.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:En})]})})}function ot(n){if(typeof n.textValue=="string"){const e=F(n.textValue);if(e.length>0)return e}return F(K(n.label))}function st(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function qn(n){const e=n.nativeEvent;return e.isComposing?!0:typeof e.keyCode=="number"&&e.keyCode===229}function rt(n){if(n.key!=="Home"&&n.key!=="End")return!0;const e=n.currentTarget,t=e.selectionStart,r=e.selectionEnd;return t===null||r===null?!0:t!==r?!1:n.key==="Home"?t===0:r===e.value.length}function Ln({query:n,visibleCount:e,enabledCount:t,totalCount:r}){const l=n.trim();return l.length===0?t!==r?`${t} of ${r} command${r===1?"":"s"} available.`:`${r} command${r===1?"":"s"} available.`:e===0?`No commands match "${l}".`:t===0?`No enabled commands match "${l}".`:t!==e?`${t} of ${e} matching command${t===1?"":"s"} available for "${l}".`:`${e} command${e===1?"":"s"} found for "${l}".`}function Nn(n){const e=F(K(n));return e.length>0?e:"Loading commands..."}function Ke(n){return n==null||typeof n=="boolean"?!1:typeof n=="string"?n.trim().length>0:!0}function K(n){if(typeof n=="string")return n;if(typeof n=="number")return String(n);if(Array.isArray(n))return F(n.map(t=>K(t)).filter(t=>t.length>0).join(" "));if(!c.isValidElement(n))return"";const e=n.props;return e["aria-hidden"]===!0||e["aria-hidden"]==="true"?"":typeof e["aria-label"]=="string"&&e["aria-label"].trim().length>0?F(e["aria-label"]):K(e.children)}function P(n,e){return typeof n=="string"&&n.trim().length>0?n.trim():e}function Kn(n){return typeof n!="number"||n<=0}function F(n){return n.replace(/\s+/g," ").trim()}m.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},commands:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,computed:!1}}}};const Me=[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"open-theme",label:"Open Theme Pack",keywords:["theme","token"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]},{key:"generate-readme",label:"Generate README Draft",keywords:["ai","docs"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}],To={title:"AI/CommandPalette",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandPalette is optimized for AI workflow shortcuts with keyword filtering and action callbacks."}}},args:{open:!1,onOpenChange:()=>{},commands:Me}};function Fe(n,e){const t=new KeyboardEvent("keydown",{key:e,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),n.dispatchEvent(t)}function yn(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:Me,placeholder:"Search commands (ArrowUp/ArrowDown + Enter)..."})}function Fn(){const[n,e]=c.useState(!1),[t,r]=c.useState("none");return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last keyboard action:"," ",o.jsx("strong",{"data-testid":"keyboard-first-selected",style:b,children:t})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open keyboard palette"}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"],onSelect:()=>r("Run E2E Smoke")},{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>r("Open Theme Pack")}]})]})}function Mn(){const[n,e]=c.useState(!0),[t,r]=c.useState("None"),l=Me.map(p=>({...p,onSelect:()=>r(typeof p.textValue=="string"?p.textValue:typeof p.label=="string"?p.label:p.key)}));return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last AI action: ",o.jsx("strong",{style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,commands:l})]})}function wn(){const[n,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Latest query telemetry:"," ",o.jsx("strong",{"data-testid":"query-telemetry",style:b,children:t||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"open-changelog",label:"Open Changelog",keywords:["release","notes"],onSelect:()=>{}}],emptyMessage:"No matching AI workflow command.",onQueryChange:r,getResultsStatusText:({query:l,visibleCount:p,enabledCount:g})=>l.trim().length===0?"Command search ready.":`${g}/${p} actionable AI workflow match${p===1?"":"es"} for ${l}`})]})}function $n(){const[n,e]=c.useState(!0),[t,r]=c.useState(!0),[l,p]=c.useState(0);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Executed commands while ready:"," ",o.jsx("strong",{"data-testid":"loading-selection-count",style:b,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>r(g=>!g),children:t?"Finish loading commands":"Re-enable loading commands"}),o.jsx(O,{size:"sm",variant:"ghost",onClick:()=>e(!0),children:"Reopen loading palette"}),o.jsx(m,{open:n,onOpenChange:e,loading:t,loadingContent:"Syncing AI workflow commands...",closeOnSelect:!1,commands:[{key:"open-theme",label:"Open Theme Pack",keywords:["theme"],onSelect:()=>p(g=>g+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"],onSelect:()=>p(g=>g+1)}]})]})}function Vn(){const[n,e]=c.useState(!0),[t,r]=c.useState("none"),[l,p]=c.useState("N/A"),g=c.useCallback(f=>{p(M=>M==="N/A"?f:`${M} -> ${f}`)},[]);return o.jsxs(v,{align:"start",children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"command-close-reason",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Close trace:"," ",o.jsx("strong",{"data-testid":"command-close-trace",style:b,children:l})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>{p("N/A"),e(!0)},children:"Reopen Palette"}),o.jsx(m,{open:n,onOpenChange:f=>{e(f),f||g("open:false")},onCloseReason:f=>{r(f),g(`reason:${f}`)},commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"],onSelect:()=>g("select")},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"],onSelect:()=>g("select")}]})]})}function Un(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0},{key:"open-settings",label:"Open Settings",keywords:["settings"]}],placeholder:"Try searching release..."})}function Gn(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]},{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0}]})}function zn(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"executed-count",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"],disabled:!0,onSelect:()=>r(l=>l+1)},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r(l=>l+1)}],placeholder:"Try searching publish..."})]})}function Qn(){const[n,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last close reason:"," ",o.jsx("strong",{"data-testid":"missing-handler-close-reason",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,onCloseReason:l=>r(l),commands:[{key:"run-e2e",label:"Run E2E Smoke",keywords:["run","test"]},{key:"open-changelog",label:"Open Changelog",keywords:["release notes"],onSelect:()=>r("item-select")}],placeholder:"Try searching run..."})]})}function _n(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"cafe-settings",label:o.jsx("span",{children:"Café Settings"}),textValue:"Cafe Settings",keywords:["preferences"]},{key:"open-reports",label:"Open Reports"}],placeholder:"Try searching cafe..."})}function Wn(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Deploy Release",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function Jn(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})}function Xn(){const[n,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("h3",{id:"deploy-command-heading",style:{margin:0,fontSize:"var(--aurora-font-size-sm)"},children:"Deploy Release"}),o.jsx(m,{open:n,onOpenChange:e,commands:[{key:"deploy",label:o.jsx("span",{"aria-hidden":"true",children:"🚀"}),ariaLabel:"Fallback deploy command",ariaLabelledBy:"deploy-command-heading",textValue:"Deploy Release",keywords:["deploy","release"]},{key:"rollback",label:o.jsx("span",{"aria-hidden":"true",children:"↩"}),ariaLabel:"Rollback Release",textValue:"Rollback Release",keywords:["rollback","release"]}],placeholder:"Try searching rollback..."})]})}function Yn(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Batch actions selected:"," ",o.jsx("strong",{"data-testid":"selection-count",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests",onSelect:()=>r(l=>l+1)}]})]})}function Zn(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Option activation count:"," ",o.jsx("strong",{"data-testid":"option-activation-count",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"run-lint",label:"Run Lint",onSelect:()=>r(l=>l+1)},{key:"run-tests",label:"Run Tests"}]})]})}function eo(){const[n,e]=c.useState(!1);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Palette stays open until action selection or explicit toggle."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(t=>!t),children:n?"Close blocking palette":"Open blocking palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:n,onOpenChange:e,clearQueryOnEscape:!1,closeOnEscape:!1,closeOnOutsidePointer:!1,commands:[{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function to(){const[n,e]=c.useState(!1),[t,r]=c.useState(!0);return o.jsxs(v,{align:"start",children:[o.jsx("p",{style:y,children:"Dismiss guard can intercept Escape/outside dismiss until the flow is explicitly unlocked."}),o.jsxs("p",{style:y,children:["Guard state:"," ",o.jsx("strong",{"data-testid":"guard-state",style:b,children:t?"enabled":"disabled"})]}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(l=>!l),children:n?"Close guarded palette":"Open guarded palette"}),o.jsx("button",{type:"button",children:"Outside target"}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,clearQueryOnEscape:!1,onEscapeKeyDown:l=>{t&&l.preventDefault()},onPointerDownOutside:l=>{t&&l.preventDefault()},commands:[{key:"unlock",label:"Unlock dismiss guard",disabled:!t,onSelect:()=>r(!1)},{key:"approve",label:"Approve release"},{key:"reject",label:"Reject release"}]})]})}function ao(){const[n,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"query-value",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"open-state",style:b,children:n?"open":"closed"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function no(){const[n,e]=c.useState(!0),[t,r]=c.useState(""),[l,p]=c.useState(0);return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-repeat-query",style:b,children:t||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"escape-repeat-open-state",style:b,children:n?"open":"closed"})]}),o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"escape-repeat-calls",style:b,children:l})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:r,onEscapeKeyDown:()=>p(g=>g+1),commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function oo(){const[n,e]=c.useState(!0),[t,r]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Query telemetry:"," ",o.jsx("strong",{"data-testid":"escape-hint-query",style:b,children:t||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnEscape:!1,clearQueryOnEscape:!0,onQueryChange:r,commands:[{key:"publish-release",label:"Publish Release",keywords:["release"]},{key:"open-changelog",label:"Open Changelog",keywords:["notes"]}]})]})}function so(){const[n,e]=c.useState(!0),[t,r]=c.useState("none");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Last command:"," ",o.jsx("strong",{"data-testid":"last-command",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"scan-code",label:"Scan Code",keywords:["scan"]},{key:"search-docs",label:"Search Docs",keywords:["search"],onSelect:()=>r("search-docs")},{key:"send-report",label:"Send Report",keywords:["send"],onSelect:()=>r("send-report")}]})]})}function ro(){const[n,e]=c.useState(!0);return o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"cmd-1",label:"Command 1"},{key:"cmd-2",label:"Command 2"},{key:"cmd-3-disabled",label:"Command 3 (disabled)",disabled:!0},{key:"cmd-4",label:"Command 4"},{key:"cmd-5",label:"Command 5"},{key:"cmd-6",label:"Command 6"},{key:"cmd-7",label:"Command 7"},{key:"cmd-8",label:"Command 8"},{key:"cmd-9",label:"Command 9"}],placeholder:"Use PageUp/PageDown to jump 5 actionable commands"})}function co(){const[n,e]=c.useState(!0);return o.jsxs(v,{children:[o.jsx("p",{style:y,children:"With caret in the middle of query text, Home/End should keep native cursor behavior and avoid overriding active command focus."}),o.jsx(m,{open:n,onOpenChange:e,closeOnSelect:!1,commands:[{key:"release-checklist",label:"Release Checklist",keywords:["release"]},{key:"release-notes",label:"Release Notes",keywords:["release"]},{key:"release-pipeline",label:"Release Pipeline",keywords:["release"]}]})]})}function io(){const[n,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"ime-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"ime-query-value",style:b,children:l||"N/A"})]}),o.jsxs("p",{style:y,children:["Palette state:"," ",o.jsx("strong",{"data-testid":"ime-open-state",style:b,children:n?"open":"closed"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:p,closeOnSelect:!1,commands:[{key:"open-settings",label:"Open Settings"},{key:"deploy",label:"Deploy Project",onSelect:()=>r(g=>g+1)}]})]})}function lo(){const[n,e]=c.useState(!0),[t,r]=c.useState(0);return c.useEffect(()=>{const l=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",l,!0),()=>{document.removeEventListener("keydown",l,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Escape hook calls:"," ",o.jsx("strong",{"data-testid":"command-escape-calls",style:b,children:t})]}),o.jsx(m,{open:n,onOpenChange:e,onEscapeKeyDown:()=>r(l=>l+1),commands:[{key:"open-settings",label:"Open Settings"},{key:"run-e2e",label:"Run E2E Smoke"}]})]})}function uo(){const[n,e]=c.useState(!0),[t,r]=c.useState(0),[l,p]=c.useState("");return c.useEffect(()=>{const g=f=>{(f.key==="Enter"||f.key==="Escape")&&f.preventDefault()};return document.addEventListener("keydown",g,!0),()=>{document.removeEventListener("keydown",g,!0)}},[]),o.jsxs(v,{children:[o.jsxs("p",{style:y,children:["Executed commands:"," ",o.jsx("strong",{"data-testid":"command-preempt-selection-count",style:b,children:t})]}),o.jsxs("p",{style:y,children:["Query value:"," ",o.jsx("strong",{"data-testid":"command-preempt-query-value",style:b,children:l||"N/A"})]}),o.jsx(m,{open:n,onOpenChange:e,onQueryChange:p,commands:[{key:"open-settings",label:"Open Settings",keywords:["open"],onSelect:()=>r(g=>g+1)},{key:"run-e2e",label:"Run E2E Smoke",keywords:["run"]}]})]})}function mo(){const[n,e]=c.useState(!1);return o.jsx(v,{align:"start",children:o.jsx(Pn,{triggerLabel:"Open container popover",contentLabel:"Command container popover",children:o.jsxs("div",{style:{display:"grid",gap:10},children:[o.jsx("p",{style:{margin:0,...y},children:"First Escape should close the command palette, second Escape should close the popover."}),o.jsx(O,{size:"sm",variant:"outline",onClick:()=>e(!0),children:"Open nested palette"}),o.jsx(m,{open:n,onOpenChange:e,title:"Nested command palette",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]})]})})})}const Q={render:()=>o.jsx(yn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await a(r).toHaveAttribute("aria-disabled","true"),await a(r).toHaveAttribute("tabindex","-1")}},_={render:()=>o.jsx(Fn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("none"),await i.click(e.getByRole("button",{name:"Open keyboard palette"}));const t=await e.findByRole("combobox",{name:"Search commands"});await N(()=>{a(t).toHaveFocus()}),await i.type(t,"run"),await a(e.getByRole("option",{name:"Run E2E Smoke"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("keyboard-first-selected")).toHaveTextContent("Run E2E Smoke")}},W={render:()=>o.jsx(Mn,{})},J={render:()=>o.jsx(wn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByText("release")).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("query-telemetry")).toHaveTextContent("N/A")}},X={render:()=>o.jsx($n,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);let t=await e.findByRole("combobox",{name:"Search commands"});await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await a(t).toHaveAttribute("aria-busy","true"),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).toHaveAttribute("aria-keyshortcuts","Escape"),await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Syncing AI workflow commands..."),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Finish loading commands"})),await i.click(e.getByRole("button",{name:"Reopen loading palette"})),t=await e.findByRole("combobox",{name:"Search commands"}),await a(t).not.toHaveAttribute("aria-busy"),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(e.getByRole("listbox",{name:"Command results"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}{Enter}"),await a(e.getByTestId("loading-selection-count")).toHaveTextContent("1")}},Y={args:{open:!0,loading:!0,loadingContent:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings"}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("Loading commands..."),await a(e.getByRole("status")).toHaveTextContent("Loading commands...")}},Z={args:{open:!0,emptyMessage:"   ",onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"no-match"),await a(e.getByText("No commands found.")).toBeInTheDocument()}},ee={args:{open:!0,loading:!0,loadingContent:0,onOpenChange:()=>{},commands:[{key:"open-settings",label:"Open Settings",keywords:["settings"]}]},play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(e.getByTestId("command-palette-loading-content")).toHaveTextContent("0"),await a(e.getByRole("status")).toHaveTextContent("0")}},te={render:()=>o.jsx(Vn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=n.ownerDocument;await a(e.getByTestId("command-close-reason")).toHaveTextContent("none"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("N/A"),await i.click(await e.findByRole("option",{name:"Create Spec"})),await a(e.getByTestId("command-close-reason")).toHaveTextContent("item-select"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("select -> reason:item-select -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:escape-key -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),t.body.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,button:0,ctrlKey:!0,pointerType:"mouse"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-close-reason")).toHaveTextContent("escape-key"),await i.click(t.body),await a(e.getByTestId("command-close-reason")).toHaveTextContent("outside-pointer"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:outside-pointer -> open:false"),await i.click(e.getByRole("button",{name:"Reopen Palette"}));const r=e.getByRole("dialog",{name:"Command Palette"});await a(r).toBeInTheDocument(),await a(r).toHaveAttribute("aria-keyshortcuts","Escape");const l=e.getByRole("button",{name:"Close dialog"});await a(l).toHaveAttribute("aria-keyshortcuts","Enter Space"),await i.click(l),await a(e.getByTestId("command-close-reason")).toHaveTextContent("close-button"),await a(e.getByTestId("command-close-trace")).toHaveTextContent("reason:close-button -> open:false")}},ae={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"Command Palette",description:"Shift+Tab from search input should restore close-button focus ring fallback.",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),r=await e.findByRole("button",{name:"Close dialog"});await i.click(t),await a(t).toHaveFocus(),await i.tab({shift:!0}),await a(r).toHaveFocus(),await a(r.getAttribute("style")).toContain("var(--aurora-focus-ring)"),h.mouseDown(r,{button:0,ctrlKey:!0}),await a(r.getAttribute("style")).toContain("var(--aurora-focus-ring)")}},ne={render:()=>o.jsx(wn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"}),l=e.getByRole("listbox",{name:"Command results"}).getAttribute("id");await a(l).toBeTruthy(),await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",l),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.clear(t),await i.type(t,"no-match"),await a(e.queryByRole("listbox",{name:"Command results"})).not.toBeInTheDocument(),await a(t).toHaveAttribute("aria-expanded","false"),await a(t).not.toHaveAttribute("aria-controls"),await a(t).not.toHaveAttribute("aria-activedescendant"),await i.clear(t);const p=await e.findByRole("listbox",{name:"Command results"});await a(t).toHaveAttribute("aria-expanded","true"),await a(t).toHaveAttribute("aria-controls",p.getAttribute("id")),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},oe={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},resultsAriaLabel:"AI workflow commands",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["playwright","test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("listbox",{name:"AI workflow commands"})).toBeInTheDocument()}},se={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:"命令中心",description:"快速检索并执行工作区操作。",searchAriaLabel:"搜索命令",resultsAriaLabel:"命令结果列表",closeLabel:"关闭命令面板",commands:[{key:"create-spec",label:"创建规范",keywords:["文档","计划"]},{key:"run-e2e",label:"运行 E2E",keywords:["测试"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"命令中心"})).toBeInTheDocument(),await a(e.getByRole("combobox",{name:"搜索命令"})).toBeInTheDocument(),await a(e.getByRole("listbox",{name:"命令结果列表"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"关闭命令面板"})).toBeInTheDocument()}},re={render:()=>o.jsxs(v,{align:"start",children:[o.jsx("h3",{id:"command-palette-heading",style:{margin:0},children:"AI release command center"}),o.jsx(m,{open:!0,onOpenChange:()=>{},title:o.jsx("span",{"aria-hidden":!0,children:"⌘"}),ariaLabel:"Fallback AI command center",ariaLabelledBy:"command-palette-heading",commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]})]}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("dialog",{name:"AI release command center"});await a(t).toHaveAttribute("aria-labelledby","command-palette-heading"),await a(t).not.toHaveAttribute("aria-label")}},ce={render:()=>o.jsx(m,{open:!0,onOpenChange:()=>{},title:0,description:0,commands:[{key:"create-spec",label:"Create Spec",keywords:["doc","plan"]},{key:"run-e2e",label:"Run E2E Smoke",keywords:["test"]}]}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),r=(await e.findByRole("dialog",{name:"0"})).getAttribute("aria-describedby");await a(r).toBeTruthy(),await a(e.getAllByText("0").length).toBeGreaterThanOrEqual(2)}},ie={render:()=>o.jsx(Un,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByRole("status")).toHaveTextContent('No enabled commands match "release".'),await a(t).toHaveAttribute("aria-keyshortcuts","Escape"),await a(e.getByTestId("command-palette-disabled-results-message")).toHaveTextContent("Matching commands are currently unavailable.");for(const r of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const l=new KeyboardEvent("keydown",{key:r,bubbles:!0,cancelable:!0});t.dispatchEvent(l),await a(l.defaultPrevented).toBe(!1)}}},le={render:()=>o.jsx(Gn,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","Enter Escape");const r=t.getAttribute("aria-activedescendant");a(r).toBeTruthy();for(const l of["ArrowDown","ArrowUp","Home","End","PageDown","PageUp"]){const p=new KeyboardEvent("keydown",{key:l,bubbles:!0,cancelable:!0});t.dispatchEvent(p),await a(p.defaultPrevented).toBe(!1)}await a(t.getAttribute("aria-activedescendant")).toBe(r)}},de={render:()=>o.jsx(zn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"publish");const r=e.getByRole("option",{name:"Publish Release"});await a(r).toHaveAttribute("aria-disabled","true"),await a(r).not.toHaveAttribute("aria-keyshortcuts"),await i.click(r),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("executed-count")).toHaveTextContent("0")}},ue={render:()=>o.jsx(Qn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"run"),await i.click(e.getByRole("option",{name:"Run E2E Smoke"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("missing-handler-close-reason")).toHaveTextContent("none")}},me={render:()=>o.jsx(yn,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("option",{name:"Create Spec"}),r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:2});t.dispatchEvent(r),a(r.defaultPrevented).toBe(!1);const l=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,button:0});t.dispatchEvent(l),a(l.defaultPrevented).toBe(!0)}},pe={render:()=>o.jsx(_n,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"cafe"),await a(e.getByRole("option",{name:"Café Settings"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Open Reports"})).not.toBeInTheDocument()}},ye={render:()=>o.jsx(Wn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox");await a(e.getByRole("option",{name:"Deploy Release"})).toBeInTheDocument(),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},we={render:()=>o.jsx(Jn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await a(r).toHaveAttribute("aria-label","Deploy Release"),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},be={render:()=>o.jsx(Xn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox"),r=e.getByRole("option",{name:"Deploy Release"});await a(r).toHaveAttribute("aria-labelledby","deploy-command-heading"),await a(r).not.toHaveAttribute("aria-label"),await i.type(t,"rollback"),await a(e.getByRole("option",{name:"Rollback Release"})).toBeInTheDocument(),await a(e.queryByRole("option",{name:"Deploy Release"})).not.toBeInTheDocument()}},ge={render:()=>o.jsx(Yn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),h.keyDown(t,{key:"Enter",repeat:!1}),await N(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),h.keyDown(t,{key:"Enter",repeat:!0}),await N(()=>{a(e.getByTestId("selection-count")).toHaveTextContent("1")}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},ve={render:()=>o.jsx(Zn,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("option",{name:"Run Lint"});t.focus(),await a(t).toHaveAttribute("aria-keyshortcuts","Enter Space"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await i.keyboard("{Control>}{Enter}{/Control}"),await i.keyboard("{Meta>}{Space}{/Meta}"),h.keyDown(t,{key:"Enter",repeat:!0}),h.keyDown(t,{key:"Spacebar",altKey:!0}),await a(e.getByTestId("option-activation-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Enter}"),await a(e.getByTestId("option-activation-count")).toHaveTextContent("1"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},he={render:()=>o.jsx(eo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await i.click(await e.findByRole("button",{name:"Open blocking palette"}));const t=e.getByRole("dialog",{name:"Command Palette"});await a(t).toBeInTheDocument(),await a(t).not.toHaveAttribute("aria-keyshortcuts"),await a(e.getByRole("combobox",{name:"Search commands"})).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.keyboard("{Escape}"),await a(t).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Outside target"})),await a(t).toBeInTheDocument()}},xe={render:()=>o.jsx(to,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=n.ownerDocument;await i.click(await e.findByRole("button",{name:"Open guarded palette"})),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),h.pointerDown(t.body),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument();const r=e.getByRole("combobox",{name:"Search commands"});await i.clear(r),await i.type(r,"unlock"),await i.click(e.getByRole("option",{name:"Unlock dismiss guard"})),await a(e.getByTestId("guard-state")).toHaveTextContent("disabled"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument()}},ke={render:()=>o.jsx(ao,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByTestId("query-value")).toHaveTextContent("release"),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("query-value")).toHaveTextContent("N/A"),await a(e.getByTestId("open-state")).toHaveTextContent("open"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("open-state")).toHaveTextContent("closed")}},fe={render:()=>o.jsx(no,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.clear(t),await i.type(t,"release"),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),h.keyDown(t,{key:"Escape",repeat:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("release"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-repeat-query")).toHaveTextContent("N/A"),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("open"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("0"),await i.keyboard("{Escape}"),await a(e.queryByRole("dialog",{name:"Command Palette"})).not.toBeInTheDocument(),await a(e.getByTestId("escape-repeat-open-state")).toHaveTextContent("closed"),await a(e.getByTestId("escape-repeat-calls")).toHaveTextContent("1")}},Be={render:()=>o.jsx(oo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter"),await i.type(t,"release"),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),await a(t).toHaveAttribute("aria-keyshortcuts","Enter Escape"),h.keyDown(t,{key:"Escape",ctrlKey:!0}),h.keyDown(t,{key:"Escape",altKey:!0}),h.keyDown(t,{key:"Escape",metaKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("release"),h.keyDown(t,{key:"Escape",shiftKey:!0}),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("escape-hint-query")).toHaveTextContent("N/A"),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter")}},Ee={render:()=>o.jsx(so,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"search"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.clear(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1"));const r=t.getAttribute("aria-activedescendant");a(r).toBeTruthy();const l=n.ownerDocument.getElementById(r);await a(l).toBeInTheDocument(),await a(l).toHaveAttribute("role","option"),await a(l).not.toHaveAttribute("aria-disabled","true"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Ce={render:()=>o.jsx(ro,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.click(t),await a(t).toHaveAttribute("aria-keyshortcuts","ArrowDown ArrowUp Home End PageDown PageUp Enter Escape"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.keyboard("{PageDown}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),h.keyDown(t,{key:"PageDown",ctrlKey:!0}),h.keyDown(t,{key:"End",metaKey:!0}),h.keyDown(t,{key:"ArrowDown",ctrlKey:!0}),h.keyDown(t,{key:"ArrowUp",metaKey:!0}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-6")),await i.keyboard("{PageUp}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0"))}},Te={render:()=>o.jsx(co,{}),play:async({canvasElement:n})=>{const t=await u(n.ownerDocument.body).findByRole("combobox",{name:"Search commands"});await i.type(t,"release"),await i.keyboard("{ArrowDown}"),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1")),t.setSelectionRange(2,2),h.keyDown(t,{key:"Home"}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1")),h.keyDown(t,{key:"End"}),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-1"))}},Re={render:()=>o.jsx(io,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.click(t),await a(t).toHaveAttribute("aria-activedescendant",a.stringContaining("option-0")),await i.type(t,"deploy"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),h.keyDown(t,{key:"Escape",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"ArrowDown",isComposing:!0,keyCode:229,which:229}),h.keyDown(t,{key:"Enter",isComposing:!0,keyCode:229,which:229}),Fe(t,"Escape"),Fe(t,"ArrowDown"),Fe(t,"Enter"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("0"),await a(e.getByTestId("ime-query-value")).toHaveTextContent("deploy"),await a(e.getByTestId("ime-open-state")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{ArrowDown}"),await i.keyboard("{Enter}"),await a(e.getByTestId("ime-selection-count")).toHaveTextContent("1")}},De={render:()=>o.jsx(lo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body);await a(await e.findByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await a(e.getByTestId("command-escape-calls")).toHaveTextContent("0")}},Se={render:()=>o.jsx(uo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("combobox",{name:"Search commands"});await i.type(t,"open"),await a(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await i.keyboard("{Enter}"),await a(e.getByTestId("command-preempt-selection-count")).toHaveTextContent("0"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await a(e.getByTestId("command-preempt-query-value")).toHaveTextContent("open"),await a(e.getByRole("dialog",{name:"Command Palette"})).toBeInTheDocument()}},Ie={render:()=>o.jsx(mo,{}),play:async({canvasElement:n})=>{const e=u(n.ownerDocument.body),t=await e.findByRole("button",{name:"Open container popover"});await i.click(t),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.click(e.getByRole("button",{name:"Open nested palette"})),await a(e.getByRole("dialog",{name:"Nested command palette"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await N(()=>{a(e.queryByRole("dialog",{name:"Nested command palette"})).not.toBeInTheDocument()}),await a(e.getByRole("dialog",{name:"Command container popover"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await N(()=>{a(e.queryByRole("dialog",{name:"Command container popover"})).not.toBeInTheDocument()}),await a(t).toHaveFocus()}};var ct,it,lt;Q.parameters={...Q.parameters,docs:{...(ct=Q.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(it=Q.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var dt,ut,mt;_.parameters={..._.parameters,docs:{...(dt=_.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=_.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var pt,yt,wt;W.parameters={...W.parameters,docs:{...(pt=W.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => <AiFlowPalette />
}`,...(wt=(yt=W.parameters)==null?void 0:yt.docs)==null?void 0:wt.source}}};var bt,gt,vt;J.parameters={...J.parameters,docs:{...(bt=J.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(vt=(gt=J.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var ht,xt,kt;X.parameters={...X.parameters,docs:{...(ht=X.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(kt=(xt=X.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var ft,Bt,Et;Y.parameters={...Y.parameters,docs:{...(ft=Y.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=Y.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var Ct,Tt,Rt;Z.parameters={...Z.parameters,docs:{...(Ct=Z.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Rt=(Tt=Z.parameters)==null?void 0:Tt.docs)==null?void 0:Rt.source}}};var Dt,St,It;ee.parameters={...ee.parameters,docs:{...(Dt=ee.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(It=(St=ee.parameters)==null?void 0:St.docs)==null?void 0:It.source}}};var Ht,At,Pt;te.parameters={...te.parameters,docs:{...(Ht=te.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Pt=(At=te.parameters)==null?void 0:At.docs)==null?void 0:Pt.source}}};var Ot,jt,qt;ae.parameters={...ae.parameters,docs:{...(Ot=ae.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(qt=(jt=ae.parameters)==null?void 0:jt.docs)==null?void 0:qt.source}}};var Lt,Nt,Kt;ne.parameters={...ne.parameters,docs:{...(Lt=ne.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Kt=(Nt=ne.parameters)==null?void 0:Nt.docs)==null?void 0:Kt.source}}};var Ft,Mt,$t;oe.parameters={...oe.parameters,docs:{...(Ft=oe.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...($t=(Mt=oe.parameters)==null?void 0:Mt.docs)==null?void 0:$t.source}}};var Vt,Ut,Gt;se.parameters={...se.parameters,docs:{...(Vt=se.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Gt=(Ut=se.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var zt,Qt,_t;re.parameters={...re.parameters,docs:{...(zt=re.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(_t=(Qt=re.parameters)==null?void 0:Qt.docs)==null?void 0:_t.source}}};var Wt,Jt,Xt;ce.parameters={...ce.parameters,docs:{...(Wt=ce.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Xt=(Jt=ce.parameters)==null?void 0:Jt.docs)==null?void 0:Xt.source}}};var Yt,Zt,ea;ie.parameters={...ie.parameters,docs:{...(Yt=ie.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(ea=(Zt=ie.parameters)==null?void 0:Zt.docs)==null?void 0:ea.source}}};var ta,aa,na;le.parameters={...le.parameters,docs:{...(ta=le.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(na=(aa=le.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var oa,sa,ra;de.parameters={...de.parameters,docs:{...(oa=de.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ra=(sa=de.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var ca,ia,la;ue.parameters={...ue.parameters,docs:{...(ca=ue.parameters)==null?void 0:ca.docs,source:{originalSource:`{
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
}`,...(la=(ia=ue.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var da,ua,ma;me.parameters={...me.parameters,docs:{...(da=me.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(ua=me.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var pa,ya,wa;pe.parameters={...pe.parameters,docs:{...(pa=pe.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(wa=(ya=pe.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var ba,ga,va;ye.parameters={...ye.parameters,docs:{...(ba=ye.parameters)==null?void 0:ba.docs,source:{originalSource:`{
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
}`,...(va=(ga=ye.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var ha,xa,ka;we.parameters={...we.parameters,docs:{...(ha=we.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ka=(xa=we.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var fa,Ba,Ea;be.parameters={...be.parameters,docs:{...(fa=be.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(Ea=(Ba=be.parameters)==null?void 0:Ba.docs)==null?void 0:Ea.source}}};var Ca,Ta,Ra;ge.parameters={...ge.parameters,docs:{...(Ca=ge.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ra=(Ta=ge.parameters)==null?void 0:Ta.docs)==null?void 0:Ra.source}}};var Da,Sa,Ia;ve.parameters={...ve.parameters,docs:{...(Da=ve.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
}`,...(Ia=(Sa=ve.parameters)==null?void 0:Sa.docs)==null?void 0:Ia.source}}};var Ha,Aa,Pa;he.parameters={...he.parameters,docs:{...(Ha=he.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Pa=(Aa=he.parameters)==null?void 0:Aa.docs)==null?void 0:Pa.source}}};var Oa,ja,qa;xe.parameters={...xe.parameters,docs:{...(Oa=xe.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(qa=(ja=xe.parameters)==null?void 0:ja.docs)==null?void 0:qa.source}}};var La,Na,Ka;ke.parameters={...ke.parameters,docs:{...(La=ke.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Ka=(Na=ke.parameters)==null?void 0:Na.docs)==null?void 0:Ka.source}}};var Fa,Ma,$a;fe.parameters={...fe.parameters,docs:{...(Fa=fe.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...($a=(Ma=fe.parameters)==null?void 0:Ma.docs)==null?void 0:$a.source}}};var Va,Ua,Ga;Be.parameters={...Be.parameters,docs:{...(Va=Be.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Ga=(Ua=Be.parameters)==null?void 0:Ua.docs)==null?void 0:Ga.source}}};var za,Qa,_a;Ee.parameters={...Ee.parameters,docs:{...(za=Ee.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(_a=(Qa=Ee.parameters)==null?void 0:Qa.docs)==null?void 0:_a.source}}};var Wa,Ja,Xa;Ce.parameters={...Ce.parameters,docs:{...(Wa=Ce.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(Xa=(Ja=Ce.parameters)==null?void 0:Ja.docs)==null?void 0:Xa.source}}};var Ya,Za,en;Te.parameters={...Te.parameters,docs:{...(Ya=Te.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(en=(Za=Te.parameters)==null?void 0:Za.docs)==null?void 0:en.source}}};var tn,an,nn;Re.parameters={...Re.parameters,docs:{...(tn=Re.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(nn=(an=Re.parameters)==null?void 0:an.docs)==null?void 0:nn.source}}};var on,sn,rn;De.parameters={...De.parameters,docs:{...(on=De.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(sn=De.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var cn,ln,dn;Se.parameters={...Se.parameters,docs:{...(cn=Se.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(dn=(ln=Se.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var un,mn,pn;Ie.parameters={...Ie.parameters,docs:{...(un=Ie.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(pn=(mn=Ie.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};const Ro=["SearchCommands","OpenFromTriggerKeyboardFirst","AiInteractionFlow","QueryTelemetry","LoadingState","BlankLoadingContentFallback","BlankEmptyMessageFallback","NumericFeedbackCopySemantics","CloseReasonTelemetry","CloseButtonFocusIntentReentry","EmptyStateAriaControlsLifecycle","LocalizedResultsLabel","LocalizedDialogCopy","LabelledByPrecedence","NumericTitleDescriptionSemantics","DisabledOnlyResults","SingleActionableShortcutHints","DisabledCommandGuard","MissingSelectHandlerGuard","OptionMouseDownPolicy","TextValueAndAccentSearch","IconOnlyCommandNaming","IconOnlyCommandTextValueFallback","IconOnlyCommandLabelledByPrecedence","PersistentSelection","OptionActivationKeyGuard","NonDismissible","GuardedDismissEvents","EscapeClearsQueryFirst","EscapeRepeatGuard","EscapeShortcutHintPrecision","RefinedSearchKeepsActiveCommand","PagedKeyboardNavigation","HomeEndCaretPriority","ImeCompositionGuard","EscapePreemptedByGlobalHandler","ManagedKeysPreemptedByGlobalHandler","NestedDismissOrder"];export{W as AiInteractionFlow,Z as BlankEmptyMessageFallback,Y as BlankLoadingContentFallback,ae as CloseButtonFocusIntentReentry,te as CloseReasonTelemetry,de as DisabledCommandGuard,ie as DisabledOnlyResults,ne as EmptyStateAriaControlsLifecycle,ke as EscapeClearsQueryFirst,De as EscapePreemptedByGlobalHandler,fe as EscapeRepeatGuard,Be as EscapeShortcutHintPrecision,xe as GuardedDismissEvents,Te as HomeEndCaretPriority,be as IconOnlyCommandLabelledByPrecedence,ye as IconOnlyCommandNaming,we as IconOnlyCommandTextValueFallback,Re as ImeCompositionGuard,re as LabelledByPrecedence,X as LoadingState,se as LocalizedDialogCopy,oe as LocalizedResultsLabel,Se as ManagedKeysPreemptedByGlobalHandler,ue as MissingSelectHandlerGuard,Ie as NestedDismissOrder,he as NonDismissible,ee as NumericFeedbackCopySemantics,ce as NumericTitleDescriptionSemantics,_ as OpenFromTriggerKeyboardFirst,ve as OptionActivationKeyGuard,me as OptionMouseDownPolicy,Ce as PagedKeyboardNavigation,ge as PersistentSelection,J as QueryTelemetry,Ee as RefinedSearchKeepsActiveCommand,Q as SearchCommands,le as SingleActionableShortcutHints,pe as TextValueAndAccentSearch,Ro as __namedExportsOrder,To as default};
